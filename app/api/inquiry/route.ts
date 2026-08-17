import { NextResponse } from 'next/server';
import { mailService } from '@/app/lib/mail.service';
import {
  BUDGET_VALUES,
  PROJECT_TYPE_VALUES,
  STAGE_VALUES,
  TIMELINE_VALUES,
  isFeatureAvailableForProject,
  type InquirySubmission,
  type ProjectFeature,
  type ProjectType,
} from '@/constants/inquiry';

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 4;
const IDEMPOTENCY_WINDOW_MS = 24 * 60 * 60 * 1000;
const requestLog = new Map<string, number[]>();
const processedSubmissions = new Map<string, number>();
const processingSubmissions = new Set<string>();

function getClientIp(request: Request) {
  const forwarded = request.headers.get('x-forwarded-for');
  return forwarded?.split(',')[0].trim() || request.headers.get('x-real-ip') || 'unknown';
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const recent = (requestLog.get(ip) ?? []).filter(timestamp => now - timestamp < RATE_LIMIT_WINDOW_MS);
  if (recent.length >= RATE_LIMIT_MAX_REQUESTS) {
    requestLog.set(ip, recent);
    return true;
  }
  recent.push(now);
  requestLog.set(ip, recent);
  return false;
}

function wasAlreadyProcessed(submissionId: string) {
  const now = Date.now();
  for (const [id, timestamp] of processedSubmissions) {
    if (now - timestamp > IDEMPOTENCY_WINDOW_MS) processedSubmissions.delete(id);
  }
  return processedSubmissions.has(submissionId);
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isAllowed(value: string, allowed: readonly string[]) {
  return allowed.includes(value);
}

export async function POST(request: Request) {
  try {
    const body = await request.json() as Partial<InquirySubmission>;
    if (typeof body.website === 'string' && body.website.trim()) {
      return NextResponse.json({ ok: true });
    }

    const submissionId = String(body.submissionId ?? '').trim();
    if (!submissionId || submissionId.length > 100) {
      return NextResponse.json({ error: 'Invalid submission reference' }, { status: 400 });
    }
    if (wasAlreadyProcessed(submissionId) || processingSubmissions.has(submissionId)) {
      return NextResponse.json({ ok: true, duplicate: true });
    }
    if (isRateLimited(getClientIp(request))) {
      return NextResponse.json({ error: 'Too many requests. Please try again later.' }, { status: 429 });
    }

    const submission: InquirySubmission = {
      submissionId,
      locale: body.locale === 'ua' ? 'ua' : 'en',
      projectType: String(body.projectType ?? '') as InquirySubmission['projectType'],
      features: Array.isArray(body.features)
        ? body.features.map(feature => String(feature) as ProjectFeature)
        : [],
      details: String(body.details ?? '').trim(),
      stage: String(body.stage ?? '') as InquirySubmission['stage'],
      timeline: String(body.timeline ?? '') as InquirySubmission['timeline'],
      budget: String(body.budget ?? '') as InquirySubmission['budget'],
      name: String(body.name ?? '').trim(),
      email: String(body.email ?? '').trim(),
      company: String(body.company ?? '').trim(),
      website: '',
    };

    const validOptions =
      isAllowed(submission.projectType, PROJECT_TYPE_VALUES) &&
      submission.features.length >= 1 && submission.features.length <= 10 &&
      submission.features.every(feature => isFeatureAvailableForProject(submission.projectType as ProjectType, feature)) &&
      isAllowed(submission.stage, STAGE_VALUES) &&
      isAllowed(submission.timeline, TIMELINE_VALUES) &&
      isAllowed(submission.budget, BUDGET_VALUES);
    const validLengths =
      submission.details.length >= 20 && submission.details.length <= 2000 &&
      submission.name.length > 0 && submission.name.length <= 120 &&
      submission.email.length <= 320 &&
      submission.company.length <= 200;

    if (!validOptions || !validLengths || !isValidEmail(submission.email)) {
      return NextResponse.json({ error: 'Invalid inquiry data' }, { status: 400 });
    }

    processingSubmissions.add(submissionId);
    try {
      await mailService.sendInquiryRequest(submission);
      processedSubmissions.set(submissionId, Date.now());
    } finally {
      processingSubmissions.delete(submissionId);
    }
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Inquiry API error:', error);
    return NextResponse.json({ error: 'Failed to send inquiry' }, { status: 500 });
  }
}
