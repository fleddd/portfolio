'use client';

import { AnimatePresence, motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Check, ChevronDown, Loader2, Plus, X } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useId, useRef, useState } from 'react';
import {
  EMPTY_INQUIRY_DRAFT,
  INQUIRY_COPY,
  INQUIRY_FEATURES,
  INQUIRY_OPTIONS,
  PROJECT_TYPE_VALUES,
  type InquiryDraft,
  type ProjectFeature,
  type ProjectType,
} from '@/constants/inquiry';
import type { Locale } from '@/constants/i18n';

const DRAFT_STORAGE_KEY = 'fedkiv:inquiry:draft:v1';
const SUBMITTED_STORAGE_KEY = 'fedkiv:inquiry:submitted:v1';
const TOTAL_STEPS = 4;

type StoredSubmission = {
  id: string;
  name: string;
  email: string;
  submittedAt: string;
};

type FormErrors = Partial<Record<keyof InquiryDraft | 'form', string>>;

type Option = {
  value: string;
  label: string;
  description?: string;
};

type OptionGroupProps = {
  legend: string;
  hint?: string;
  name: string;
  options: Option[];
  value: string;
  error?: string;
  stretch?: boolean;
  secondaryOption?: Option;
  onChange: (value: string) => void;
};

function OptionGroup({ legend, hint, name, options, value, error, stretch, secondaryOption, onChange }: OptionGroupProps) {
  const errorId = `${name}-error`;

  return (
    <fieldset aria-describedby={error ? errorId : undefined} className={stretch ? 'md:flex md:min-h-0 md:flex-1 md:flex-col' : undefined}>
      <legend className="text-xl font-bold tracking-tight text-white md:text-2xl">{legend}</legend>
      {hint && <p className="mt-1.5 text-sm leading-relaxed text-gray-300">{hint}</p>}
      <div className={`mt-4 grid gap-3 md:mt-3 md:gap-2.5 ${secondaryOption ? 'md:grid-cols-3' : 'md:grid-cols-2'} ${stretch ? 'md:min-h-0 md:flex-1 md:grid-rows-1' : ''}`}>
        {options.map((option, index) => (
          <label key={option.value} className="block cursor-pointer">
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={() => onChange(option.value)}
              className="peer sr-only"
            />
            <span data-option-card className={`relative flex h-full min-h-14 flex-col justify-center rounded-xl border px-4 py-3 transition-[background-color,border-color,box-shadow,transform] peer-focus-visible:ring-2 peer-focus-visible:ring-cyan-300 peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-[#0a0a0f] md:min-h-12 md:justify-start md:px-5 md:pb-5 md:pt-12 ${value === option.value
              ? 'border-cyan-300/70 bg-cyan-400/10 shadow-[0_0_0_1px_rgba(103,232,249,0.15)]'
              : 'border-white/10 bg-white/4 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/7'
              }`}>
              <span className="pointer-events-none absolute left-5 right-5 top-5 hidden items-start justify-between md:flex" aria-hidden="true">
                <span className="font-mono text-xs font-semibold tracking-[0.18em] text-gray-500">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className={`flex h-6 w-6 items-center justify-center rounded-full border transition-colors ${value === option.value ? 'border-cyan-300 bg-cyan-300 text-[#0a0a0f]' : 'border-white/15 text-transparent'}`}>
                  <Check className="h-4 w-4" strokeWidth={3} />
                </span>
              </span>
              <span data-option-content>
                <span className="block text-base font-semibold text-white md:text-lg md:font-bold md:leading-snug md:tracking-tight">{option.label}</span>
                {option.description && (
                  <span className="mt-1 block text-sm leading-snug text-gray-300 md:mt-2 md:max-w-[38rem] md:text-sm md:leading-relaxed">{option.description}</span>
                )}
              </span>
            </span>
          </label>
        ))}
      </div>
      {secondaryOption && (
        <label className="mt-3 inline-flex min-h-11 cursor-pointer items-center gap-3 self-start rounded-lg pr-3 text-sm font-medium text-gray-200">
          <input
            type="radio"
            name={name}
            value={secondaryOption.value}
            checked={value === secondaryOption.value}
            onChange={() => onChange(secondaryOption.value)}
            className="peer sr-only"
          />
          <span className="flex h-5 w-5 items-center justify-center rounded-full border border-white/25 bg-[#0a0a0f] text-[#0a0a0f] transition-colors peer-checked:border-cyan-300 peer-checked:bg-cyan-300 peer-focus-visible:ring-2 peer-focus-visible:ring-cyan-300 peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-[#111116]">
            {value === secondaryOption.value && <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden="true" />}
          </span>
          <span>{secondaryOption.label}</span>
          {secondaryOption.description && <span className="hidden text-gray-400 sm:inline">— {secondaryOption.description}</span>}
        </label>
      )}
      {error && <p id={errorId} className="mt-3 text-sm text-red-300">{error}</p>}
    </fieldset>
  );
}

type CustomSelectProps = {
  label: string;
  placeholder: string;
  options: Option[];
  value: string;
  error?: string;
  disabled?: boolean;
  onChange: (value: string) => void;
};

function CustomSelect({ label, placeholder, options, value, error, disabled, onChange }: CustomSelectProps) {
  const id = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const selectedIndex = options.findIndex(option => option.value === value);
  const [activeIndex, setActiveIndex] = useState(selectedIndex >= 0 ? selectedIndex : 0);
  const selectedOption = selectedIndex >= 0 ? options[selectedIndex] : undefined;
  const listboxId = `${id}-listbox`;
  const errorId = `${id}-error`;

  useEffect(() => {
    if (!isOpen) return;

    const closeOnOutsideClick = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setIsOpen(false);
    };
    document.addEventListener('pointerdown', closeOnOutsideClick);
    return () => document.removeEventListener('pointerdown', closeOnOutsideClick);
  }, [isOpen]);

  const open = () => {
    setActiveIndex(selectedIndex >= 0 ? selectedIndex : 0);
    setIsOpen(true);
  };

  const choose = (index: number) => {
    onChange(options[index].value);
    setActiveIndex(index);
    setIsOpen(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (!options.length) return;
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      if (!isOpen) {
        open();
        return;
      }
      const direction = event.key === 'ArrowDown' ? 1 : -1;
      setActiveIndex(current => (current + direction + options.length) % options.length);
      return;
    }
    if (event.key === 'Home' && isOpen) {
      event.preventDefault();
      setActiveIndex(0);
      return;
    }
    if (event.key === 'End' && isOpen) {
      event.preventDefault();
      setActiveIndex(options.length - 1);
      return;
    }
    if ((event.key === 'Enter' || event.key === ' ') && isOpen) {
      event.preventDefault();
      choose(activeIndex);
      return;
    }
    if (event.key === 'Escape' && isOpen) {
      event.preventDefault();
      setIsOpen(false);
    }
  };

  return (
    <div ref={rootRef} className={`relative ${isOpen ? 'z-50' : 'z-10'}`}>
      <label id={`${id}-label`} className="text-xl font-bold tracking-tight text-white md:text-2xl md:[@media(max-height:800px)]:text-lg">
        {label}
      </label>
      <button
        type="button"
        role="combobox"
        aria-labelledby={`${id}-label`}
        aria-controls={listboxId}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-activedescendant={isOpen ? `${id}-option-${activeIndex}` : undefined}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        disabled={disabled}
        onClick={() => (isOpen ? setIsOpen(false) : open())}
        onKeyDown={handleKeyDown}
        className={`mt-3 flex min-h-12 w-full items-center justify-between gap-4 rounded-xl border bg-[#0a0a0f] px-4 py-3 text-left text-white transition-colors focus-visible:ring-2 focus-visible:ring-cyan-300/20 disabled:cursor-not-allowed disabled:opacity-60 md:[@media(max-height:800px)]:mt-2 md:[@media(max-height:800px)]:min-h-10 md:[@media(max-height:800px)]:py-2 ${isOpen ? 'border-cyan-300/70' : 'border-white/10 hover:border-white/25'}`}
      >
        <span className={selectedOption ? 'text-white' : 'text-gray-500'}>
          {selectedOption?.label ?? placeholder}
        </span>
        <ChevronDown className={`h-5 w-5 shrink-0 text-gray-300 transition-transform ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            id={listboxId}
            role="listbox"
            aria-labelledby={`${id}-label`}
            initial={{ opacity: 0, y: -6, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.99 }}
            transition={{ duration: 0.14 }}
            className="absolute left-0 right-0 top-full z-30 mt-2 overflow-hidden rounded-xl border border-white/15 bg-[#17171d] p-1.5 shadow-2xl shadow-black/40"
          >
            {options.map((option, index) => (
              <li
                id={`${id}-option-${index}`}
                key={option.value}
                role="option"
                aria-selected={value === option.value}
                tabIndex={-1}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseDown={event => event.preventDefault()}
                onClick={() => choose(index)}
                onKeyDown={event => {
                  if (event.key === 'Enter' || event.key === ' ') choose(index);
                }}
                className={`flex cursor-pointer items-center justify-between gap-4 rounded-lg px-3 py-2.5 text-sm transition-colors ${activeIndex === index ? 'bg-cyan-400/10 text-cyan-100' : 'text-gray-200'} ${value === option.value ? 'font-semibold' : ''}`}
              >
                <span>{option.label}</span>
                {value === option.value && <Check className="h-4 w-4 text-cyan-300" aria-hidden="true" />}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
      {error && <p id={errorId} className="mt-2 text-sm text-red-300">{error}</p>}
    </div>
  );
}

type FeaturePickerProps = {
  label: string;
  hint: string;
  placeholder: string;
  addLabel: string;
  removeLabel: string;
  options: Option[];
  value: ProjectFeature[];
  error?: string;
  onChange: (features: ProjectFeature[]) => void;
};

function FeaturePicker({ label, hint, placeholder, addLabel, removeLabel, options, value, error, onChange }: FeaturePickerProps) {
  const [candidate, setCandidate] = useState('');
  const availableOptions = options.filter(option => !value.includes(option.value as ProjectFeature));
  const selectedOptions = value
    .map(feature => options.find(option => option.value === feature))
    .filter((option): option is Option => Boolean(option));

  const addFeature = () => {
    if (!candidate || value.includes(candidate as ProjectFeature)) return;
    onChange([...value, candidate as ProjectFeature]);
    setCandidate('');
  };

  return (
    <div>
      <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end md:[@media(max-height:800px)]:gap-2">
        <CustomSelect
          label={label}
          placeholder={availableOptions.length ? placeholder : addLabel}
          options={availableOptions}
          value={candidate}
          disabled={!availableOptions.length}
          onChange={setCandidate}
        />
        <button
          type="button"
          onClick={addFeature}
          disabled={!candidate}
          aria-label={addLabel}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-cyan-300/25 bg-cyan-400/10 px-5 font-semibold text-cyan-100 transition-colors hover:bg-cyan-400/15 disabled:cursor-not-allowed disabled:border-white/10 disabled:bg-white/5 disabled:text-gray-500 md:[@media(max-height:800px)]:min-h-10"
        >
          <Plus className="h-5 w-5" aria-hidden="true" />
          <span className="sm:hidden">{addLabel}</span>
        </button>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-gray-400 md:[@media(max-height:800px)]:hidden">{hint}</p>

      {selectedOptions.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2 pb-1 md:[@media(max-height:800px)]:mt-2" aria-label={label}>
          {selectedOptions.map(option => (
            <span key={option.value} className="inline-flex min-h-9 shrink-0 items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-400/10 py-1 pl-3 pr-1.5 text-sm font-medium text-cyan-50 md:[@media(max-height:800px)]:min-h-8 md:[@media(max-height:800px)]:py-0.5">
              {option.label}
              <button
                type="button"
                onClick={() => onChange(value.filter(feature => feature !== option.value))}
                className="flex h-7 w-7 items-center justify-center rounded-full text-cyan-200 transition-colors hover:bg-white/10 hover:text-white"
                aria-label={`${removeLabel}: ${option.label}`}
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </span>
          ))}
        </div>
      )}
      {error && <p className="mt-2 text-sm text-red-300">{error}</p>}
    </div>
  );
}

type BudgetSelectorProps = {
  legend: string;
  options: Option[];
  value: string;
  error?: string;
  onChange: (value: string) => void;
};

function BudgetSelector({ legend, options, value, error, onChange }: BudgetSelectorProps) {
  const errorId = 'budget-error';
  const ranges = options.filter(option => option.value !== 'estimate');
  const estimate = options.find(option => option.value === 'estimate');

  return (
    <fieldset aria-describedby={error ? errorId : undefined}>
      <legend className="text-xl font-bold tracking-tight text-white md:text-2xl">{legend}</legend>
      <div className="mt-3 grid grid-cols-3 overflow-hidden rounded-xl border border-white/10 bg-[#0a0a0f] p-1">
        {ranges.map(option => (
          <label key={option.value} className="cursor-pointer">
            <input
              type="radio"
              name="budget"
              value={option.value}
              checked={value === option.value}
              onChange={() => onChange(option.value)}
              className="peer sr-only"
            />
            <span className="flex min-h-11 items-center justify-center rounded-lg px-2 text-center text-sm font-semibold text-gray-300 transition-colors peer-checked:bg-cyan-400/12 peer-checked:text-cyan-100 peer-focus-visible:ring-2 peer-focus-visible:ring-cyan-300 sm:text-base">
              {option.label}
            </span>
          </label>
        ))}
      </div>

      {estimate && (
        <label className="mt-3 inline-flex min-h-11 cursor-pointer items-center gap-3 rounded-lg pr-3 text-sm font-medium text-gray-200">
          <input
            type="checkbox"
            checked={value === estimate.value}
            onChange={event => onChange(event.target.checked ? estimate.value : '')}
            className="peer sr-only"
          />
          <span className="flex h-5 w-5 items-center justify-center rounded-md border border-white/25 bg-[#0a0a0f] text-[#0a0a0f] transition-colors peer-checked:border-cyan-300 peer-checked:bg-cyan-300 peer-focus-visible:ring-2 peer-focus-visible:ring-cyan-300 peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-[#111116]">
            {value === estimate.value && <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden="true" />}
          </span>
          {estimate.label}
        </label>
      )}
      {error && <p id={errorId} className="mt-2 text-sm text-red-300">{error}</p>}
    </fieldset>
  );
}

export function LeadIntakeForm({ locale }: { locale: Locale }) {
  const copy = INQUIRY_COPY[locale];
  const options = INQUIRY_OPTIONS[locale];
  const homeHref = locale === 'ua' ? '/ua' : '/';
  const privacyHref = locale === 'ua' ? '/ua/privacy-policy' : '/privacy-policy';
  const [draft, setDraft] = useState<InquiryDraft>(EMPTY_INQUIRY_DRAFT);
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);
  const [submission, setSubmission] = useState<StoredSubmission | null>(null);
  const [isResetDialogOpen, setIsResetDialogOpen] = useState(false);
  const submissionIdRef = useRef('');
  const resetDialogRef = useRef<HTMLDivElement>(null);
  const resetDialogCancelRef = useRef<HTMLButtonElement>(null);
  const startAnotherButtonRef = useRef<HTMLButtonElement>(null);
  const serviceOptions = options.projectTypes.filter(option => option.value !== 'unsure');
  const unsureOption = options.projectTypes.find(option => option.value === 'unsure');
  const featureOptions = draft.projectType ? INQUIRY_FEATURES[locale][draft.projectType] : [];

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      try {
        const submitted = localStorage.getItem(SUBMITTED_STORAGE_KEY);
        if (submitted) {
          setSubmission(JSON.parse(submitted) as StoredSubmission);
        } else {
          const searchParams = new URLSearchParams(window.location.search);
          const requestedProjectType = searchParams.get('projectType');
          const hasConfiguredProject = PROJECT_TYPE_VALUES.includes(requestedProjectType as ProjectType);

          if (hasConfiguredProject) {
            const projectType = requestedProjectType as ProjectType;
            const allowedFeatures = new Set(INQUIRY_FEATURES.en[projectType].map(option => option.value));
            const requestedFeatures = (searchParams.get('features') ?? '')
              .split(',')
              .filter((feature): feature is ProjectFeature => allowedFeatures.has(feature as ProjectFeature));

            setDraft({
              ...EMPTY_INQUIRY_DRAFT,
              projectType,
              features: requestedFeatures,
            });
            setStep(requestedFeatures.length ? 1 : 0);
            submissionIdRef.current = crypto.randomUUID();
          } else {
            const storedDraft = localStorage.getItem(DRAFT_STORAGE_KEY);
            if (storedDraft) {
              const parsed = JSON.parse(storedDraft) as {
                draft?: Partial<InquiryDraft>;
                step?: number;
                submissionId?: string;
              };
              const legacyDraft = parsed.draft as Record<string, unknown> | undefined;
              const migratedDraft = { ...parsed.draft } as Partial<InquiryDraft>;
              if (legacyDraft?.projectType === 'booking' || legacyDraft?.projectType === 'automation') {
                migratedDraft.projectType = 'system';
              }
              if (legacyDraft?.stage === 'design') migratedDraft.stage = 'requirements';
              const legacyBudgets: Record<string, InquiryDraft['budget']> = {
                '1-3k': '0-1k',
                '3-7k': '1-5k',
                '7-15k': '5-10k',
              };
              if (typeof legacyDraft?.budget === 'string' && legacyBudgets[legacyDraft.budget]) {
                migratedDraft.budget = legacyBudgets[legacyDraft.budget];
              }
              if (migratedDraft.projectType) {
                const allowedFeatures = new Set(INQUIRY_FEATURES.en[migratedDraft.projectType].map(option => option.value));
                migratedDraft.features = Array.isArray(legacyDraft?.features)
                  ? legacyDraft.features.filter((feature): feature is ProjectFeature => (
                    typeof feature === 'string' && allowedFeatures.has(feature as ProjectFeature)
                  ))
                  : [];
              } else {
                migratedDraft.features = [];
              }
              setDraft({ ...EMPTY_INQUIRY_DRAFT, ...migratedDraft });
              setStep(Math.min(Math.max(parsed.step ?? 0, 0), TOTAL_STEPS - 1));
              submissionIdRef.current = parsed.submissionId ?? crypto.randomUUID();
            } else {
              submissionIdRef.current = crypto.randomUUID();
            }
          }
        }
      } catch {
        localStorage.removeItem(DRAFT_STORAGE_KEY);
        submissionIdRef.current = crypto.randomUUID();
      }
      setIsHydrated(true);
    });

    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (!isHydrated || submission) return;
    localStorage.setItem(DRAFT_STORAGE_KEY, JSON.stringify({
      draft,
      step,
      submissionId: submissionIdRef.current,
    }));
  }, [draft, isHydrated, step, submission]);

  useEffect(() => {
    if (!isResetDialogOpen) return;
    const frame = requestAnimationFrame(() => resetDialogCancelRef.current?.focus());
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsResetDialogOpen(false);
        requestAnimationFrame(() => startAnotherButtonRef.current?.focus());
      }
    };
    document.addEventListener('keydown', closeOnEscape);
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [isResetDialogOpen]);

  const updateDraft = <K extends keyof InquiryDraft>(field: K, value: InquiryDraft[K]) => {
    setDraft(current => ({ ...current, [field]: value }));
    setErrors(current => ({ ...current, [field]: undefined, form: undefined }));
  };

  const updateProjectType = (projectType: InquiryDraft['projectType']) => {
    setDraft(current => ({
      ...current,
      projectType,
      features: current.projectType === projectType ? current.features : [],
    }));
    setErrors(current => ({ ...current, projectType: undefined, features: undefined, form: undefined }));
  };

  const validateStep = (currentStep: number) => {
    const nextErrors: FormErrors = {};
    if (currentStep === 0 && !draft.projectType) nextErrors.projectType = copy.errors.choose;
    if (currentStep === 1) {
      if (!draft.features.length) nextErrors.features = copy.errors.features;
      if (draft.details.trim().length < 20) nextErrors.details = copy.errors.details;
    }
    if (currentStep === 2) {
      if (!draft.stage) nextErrors.stage = copy.errors.choose;
      if (!draft.timeline) nextErrors.timeline = copy.errors.choose;
      if (!draft.budget) nextErrors.budget = copy.errors.choose;
    }
    if (currentStep === 3) {
      if (!draft.name.trim()) nextErrors.name = copy.errors.name;
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(draft.email.trim())) {
        nextErrors.email = copy.errors.email;
      }
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const goForward = () => {
    if (!validateStep(step)) return;
    setDirection(1);
    setStep(current => Math.min(current + 1, TOTAL_STEPS - 1));
  };

  const goBack = () => {
    setErrors({});
    setDirection(-1);
    setStep(current => Math.max(current - 1, 0));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting || submission || !validateStep(3)) return;

    setIsSubmitting(true);
    setErrors({});
    try {
      const submissionId = submissionIdRef.current || crypto.randomUUID();
      submissionIdRef.current = submissionId;
      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...draft, locale, submissionId, website: '' }),
      });
      if (!response.ok) throw new Error('Request failed');

      const storedSubmission: StoredSubmission = {
        id: submissionId,
        name: draft.name.trim(),
        email: draft.email.trim(),
        submittedAt: new Date().toISOString(),
      };
      localStorage.setItem(SUBMITTED_STORAGE_KEY, JSON.stringify(storedSubmission));
      localStorage.removeItem(DRAFT_STORAGE_KEY);
      setSubmission(storedSubmission);
    } catch {
      setErrors({ form: copy.errors.submit });
    } finally {
      setIsSubmitting(false);
    }
  };

  const startAnother = () => {
    localStorage.removeItem(SUBMITTED_STORAGE_KEY);
    localStorage.removeItem(DRAFT_STORAGE_KEY);
    submissionIdRef.current = crypto.randomUUID();
    setDraft(EMPTY_INQUIRY_DRAFT);
    setStep(0);
    setErrors({});
    setIsResetDialogOpen(false);
    setSubmission(null);
  };

  const closeResetDialog = () => {
    setIsResetDialogOpen(false);
    requestAnimationFrame(() => startAnotherButtonRef.current?.focus());
  };

  const trapResetDialogFocus = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== 'Tab') return;
    const focusable = resetDialogRef.current?.querySelectorAll<HTMLElement>('button:not([disabled])');
    if (!focusable?.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  if (!isHydrated) {
    return <div className="h-[24rem] animate-pulse rounded-3xl border border-white/10 bg-white/3" aria-label={locale === 'ua' ? 'Завантаження форми…' : 'Loading form…'} />;
  }

  if (submission) {
    return (
      <>
      <div className="relative overflow-hidden rounded-3xl border border-cyan-300/20 bg-[#111116] px-6 py-12 text-center shadow-2xl shadow-cyan-950/20 md:px-12 md:py-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.10),transparent_55%)]" aria-hidden="true" />
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 180, damping: 16 }}
          className="relative mx-auto flex h-20 w-20 items-center justify-center"
        >
          <motion.span
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1.35, opacity: [0, 0.35, 0] }}
            transition={{ duration: 1.6, repeat: 1 }}
            className="absolute inset-0 rounded-full border border-cyan-300/50"
            aria-hidden="true"
          />
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br from-cyan-400 to-blue-600 text-white shadow-xl shadow-cyan-500/25">
            <Check className="h-9 w-9" strokeWidth={3} aria-hidden="true" />
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative mx-auto mt-5 max-w-2xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">{copy.success.eyebrow}</p>
          <h1 className="mt-3 text-3xl font-bold text-white text-balance md:text-4xl">{copy.success.title}</h1>
          <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-gray-300">{copy.success.description}</p>
          <p className="mt-4 font-mono text-xs uppercase tracking-wider text-gray-400">
            {copy.success.reference}: {submission.id.slice(0, 8).toUpperCase()}
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href={homeHref} className="inline-flex min-h-12 items-center justify-center rounded-xl bg-linear-to-r from-cyan-500 to-blue-600 px-6 py-3 font-semibold text-white transition-[box-shadow,transform] hover:-translate-y-0.5 hover:shadow-xl hover:shadow-cyan-500/20">
              {copy.success.home}
            </Link>
            <button ref={startAnotherButtonRef} type="button" onClick={() => setIsResetDialogOpen(true)} className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-gray-200 transition-colors hover:border-white/25 hover:bg-white/10 hover:text-white">
              {copy.success.another}
            </button>
          </div>
        </motion.div>
      </div>
      <AnimatePresence>
        {isResetDialogOpen && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 px-5 py-8 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.16 }}
            onMouseDown={event => {
              if (event.target === event.currentTarget) closeResetDialog();
            }}
          >
            <motion.div
              ref={resetDialogRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby="reset-dialog-title"
              aria-describedby="reset-dialog-description"
              initial={{ opacity: 0, y: 14, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.98 }}
              transition={{ duration: 0.18 }}
              onKeyDown={trapResetDialogFocus}
              className="w-full max-w-lg rounded-2xl border border-white/15 bg-[#15151b] p-6 text-left shadow-2xl shadow-black/50 md:p-7"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-400/10 text-cyan-300" aria-hidden="true">
                <Plus className="h-5 w-5" />
              </div>
              <h2 id="reset-dialog-title" className="mt-5 text-2xl font-bold tracking-tight text-white">{copy.success.confirmTitle}</h2>
              <p id="reset-dialog-description" className="mt-3 leading-relaxed text-gray-300">{copy.success.confirmAnother}</p>
              <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                <button ref={resetDialogCancelRef} type="button" onClick={closeResetDialog} className="inline-flex min-h-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 font-semibold text-gray-200 transition-colors hover:border-white/25 hover:bg-white/10 hover:text-white">
                  {copy.success.cancel}
                </button>
                <button type="button" onClick={startAnother} className="inline-flex min-h-11 items-center justify-center rounded-xl bg-linear-to-r from-cyan-500 to-blue-600 px-5 py-2.5 font-semibold text-white">
                  {copy.success.confirmAction}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      </>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-1 flex-col md:min-h-0">
      <div className="mb-6 md:mb-4 md:[@media(max-height:800px)]:mb-2">
        <div className="text-sm text-gray-300">
          <span>{copy.stepLabel} {step + 1} {copy.of} {TOTAL_STEPS}</span>
        </div>
        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10 md:mt-2" aria-hidden="true">
          <motion.div className="h-full rounded-full bg-linear-to-r from-cyan-400 to-blue-500" animate={{ width: `${((step + 1) / TOTAL_STEPS) * 100}%` }} />
        </div>
        <ol className="mt-3 grid grid-cols-4 gap-2 md:mt-2" aria-label={locale === 'ua' ? 'Прогрес форми' : 'Form progress'}>
          {copy.steps.map((label, index) => (
            <li key={label} className={`text-center text-xs ${index === step ? 'font-semibold text-cyan-300' : index < step ? 'text-gray-300' : 'text-gray-500'}`} aria-current={index === step ? 'step' : undefined}>
              {label}
            </li>
          ))}
        </ol>
      </div>

      <div className={`rounded-3xl border border-white/10 bg-[#111116] p-5 md:p-6 md:[@media(max-height:800px)]:p-4 ${step <= 1 ? 'md:flex md:min-h-0 md:flex-1 md:flex-col' : ''}`}>
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={step}
            custom={direction}
            initial={{ opacity: 0, x: direction * 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -24 }}
            transition={{ duration: 0.22 }}
            className={step <= 1 ? 'md:flex md:min-h-0 md:flex-1 md:flex-col' : undefined}
          >
            {step === 0 && (
              <OptionGroup
                legend={copy.questions.projectType}
                hint={copy.questions.projectTypeHint}
                name="projectType"
                options={serviceOptions}
                secondaryOption={unsureOption}
                value={draft.projectType}
                error={errors.projectType}
                stretch
                onChange={value => updateProjectType(value as InquiryDraft['projectType'])}
              />
            )}

            {step === 1 && (
              <div className="space-y-6 md:flex md:min-h-0 md:flex-1 md:flex-col md:gap-5 md:space-y-0 md:[@media(max-height:800px)]:gap-3">
                <FeaturePicker
                  key={draft.projectType}
                  label={copy.questions.features}
                  hint={copy.questions.featuresHint}
                  placeholder={copy.questions.featurePlaceholder}
                  addLabel={copy.questions.addFeature}
                  removeLabel={copy.questions.removeFeature}
                  options={featureOptions}
                  value={draft.features}
                  error={errors.features}
                  onChange={value => updateDraft('features', value)}
                />
                <div className="md:flex md:min-h-0 md:flex-1 md:flex-col">
                  <label htmlFor="details" className="text-xl font-bold tracking-tight text-white md:text-2xl md:[@media(max-height:800px)]:text-lg">{copy.questions.details}</label>
                  <p id="details-hint" className="mt-1.5 text-sm leading-relaxed text-gray-300 md:[@media(max-height:800px)]:hidden">{copy.questions.detailsHint}</p>
                  <textarea
                    id="details"
                    name="details"
                    value={draft.details}
                    onChange={event => updateDraft('details', event.target.value)}
                    rows={4}
                    maxLength={2000}
                    placeholder={copy.questions.detailsPlaceholder}
                    aria-invalid={Boolean(errors.details)}
                    aria-describedby={`details-hint${errors.details ? ' details-error' : ''}`}
                    className="mt-3 w-full resize-y rounded-xl border border-white/10 bg-[#0a0a0f] px-4 py-3 text-white placeholder:text-gray-500 focus-visible:border-cyan-300/70 focus-visible:ring-2 focus-visible:ring-cyan-300/20 md:min-h-24 md:flex-1 md:resize-none md:[@media(max-height:800px)]:mt-2 md:[@media(max-height:800px)]:min-h-20"
                  />
                  <div className="mt-2 flex items-start justify-between gap-4 md:[@media(max-height:800px)]:mt-1">
                    {errors.details ? <p id="details-error" className="text-sm text-red-300">{errors.details}</p> : <span />}
                    <span className="text-xs tabular-nums text-gray-500">{draft.details.length}/2000</span>
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <div className="grid gap-5 md:grid-cols-2">
                  <CustomSelect
                    label={copy.questions.stage}
                    placeholder={copy.questions.stagePlaceholder}
                    options={options.stages}
                    value={draft.stage}
                    error={errors.stage}
                    onChange={value => updateDraft('stage', value as InquiryDraft['stage'])}
                  />
                  <CustomSelect
                    label={copy.questions.timeline}
                    placeholder={copy.questions.timelinePlaceholder}
                    options={options.timelines}
                    value={draft.timeline}
                    error={errors.timeline}
                    onChange={value => updateDraft('timeline', value as InquiryDraft['timeline'])}
                  />
                </div>
                <BudgetSelector
                  legend={copy.questions.budget}
                  options={options.budgets}
                  value={draft.budget}
                  error={errors.budget}
                  onChange={value => updateDraft('budget', value as InquiryDraft['budget'])}
                />
              </div>
            )}

            {step === 3 && (
              <div>
                <h2 className="text-xl font-bold tracking-tight text-white md:text-2xl">{copy.questions.contact}</h2>
                <p className="mt-1.5 text-sm leading-relaxed text-gray-300">{copy.questions.contactHint}</p>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium text-gray-200">{copy.questions.name}</label>
                    <input id="name" name="name" value={draft.name} onChange={event => updateDraft('name', event.target.value)} maxLength={120} autoComplete="name" placeholder={copy.placeholders.name} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'name-error' : undefined} className="mt-2 w-full rounded-xl border border-white/10 bg-[#0a0a0f] px-4 py-3 text-white placeholder:text-gray-500 focus-visible:border-cyan-300/70 focus-visible:ring-2 focus-visible:ring-cyan-300/20" />
                    {errors.name && <p id="name-error" className="mt-2 text-sm text-red-300">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-medium text-gray-200">{copy.questions.email}</label>
                    <input id="email" name="email" type="email" inputMode="email" spellCheck={false} value={draft.email} onChange={event => updateDraft('email', event.target.value)} maxLength={320} autoComplete="email" placeholder={copy.placeholders.email} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'email-error' : undefined} className="mt-2 w-full rounded-xl border border-white/10 bg-[#0a0a0f] px-4 py-3 text-white placeholder:text-gray-500 focus-visible:border-cyan-300/70 focus-visible:ring-2 focus-visible:ring-cyan-300/20" />
                    {errors.email && <p id="email-error" className="mt-2 text-sm text-red-300">{errors.email}</p>}
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="company" className="text-sm font-medium text-gray-200">{copy.questions.company}</label>
                    <input id="company" name="company" value={draft.company} onChange={event => updateDraft('company', event.target.value)} maxLength={200} autoComplete="organization" placeholder={copy.placeholders.company} className="mt-2 w-full rounded-xl border border-white/10 bg-[#0a0a0f] px-4 py-3 text-white placeholder:text-gray-500 focus-visible:border-cyan-300/70 focus-visible:ring-2 focus-visible:ring-cyan-300/20" />
                  </div>
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="website">Website</label>
                    <input id="website" name="website" tabIndex={-1} autoComplete="off" />
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <div aria-live="polite" aria-atomic="true">
        {errors.form && <p role="alert" className="mt-4 rounded-xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-200">{errors.form}</p>}
      </div>

      <div className="mt-5 flex items-center justify-between gap-4 md:mt-4 md:[@media(max-height:800px)]:mt-3">
        {step > 0 ? (
          <button type="button" onClick={goBack} className="inline-flex min-h-12 items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 font-semibold text-gray-200 transition-colors hover:border-white/25 hover:bg-white/10 hover:text-white">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            {copy.back}
          </button>
        ) : <span />}

        {step < TOTAL_STEPS - 1 ? (
          <button type="button" onClick={goForward} className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-linear-to-r from-cyan-500 to-blue-600 px-6 py-3 font-semibold text-white">
            {copy.continue}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        ) : (
          <button type="submit" disabled={isSubmitting} className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-linear-to-r from-cyan-500 to-blue-600 px-6 py-3 font-semibold text-white transition-[box-shadow,opacity,transform] hover:-translate-y-0.5 hover:shadow-xl hover:shadow-cyan-500/20 disabled:cursor-not-allowed disabled:opacity-60">
            {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> : <Check className="h-4 w-4" aria-hidden="true" />}
            {isSubmitting ? copy.sending : copy.submit}
          </button>
        )}
      </div>

      <p className="mt-4 text-center text-xs leading-relaxed text-gray-400 md:mt-auto md:pt-6 md:[@media(max-height:800px)]:pt-2">
        {locale === 'ua' ? 'Надсилаючи форму, ви погоджуєтеся з ' : 'By submitting, you agree to the '}
        <Link href={privacyHref} className="rounded-sm text-cyan-300 underline decoration-cyan-300/40 underline-offset-4 hover:text-cyan-200">
          {locale === 'ua' ? 'Політикою конфіденційності' : 'Privacy Policy'}
        </Link>.
      </p>
    </form>
  );
}
