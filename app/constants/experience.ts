const DEVELOPMENT_START_DATE = new Date(Date.UTC(2023, 0, 1));
const COMMERCIAL_START_DATE = new Date(Date.UTC(2025, 7, 1));

function getFullYearsBetween(start: Date, end: Date) {
  let years = end.getUTCFullYear() - start.getUTCFullYear();
  const anniversaryHasPassed =
    end.getUTCMonth() > start.getUTCMonth() ||
    (end.getUTCMonth() === start.getUTCMonth() && end.getUTCDate() >= start.getUTCDate());

  if (!anniversaryHasPassed) years -= 1;

  return Math.max(0, years);
}

function getFullMonthsBetween(start: Date, end: Date) {
  let months =
    (end.getUTCFullYear() - start.getUTCFullYear()) * 12 +
    end.getUTCMonth() -
    start.getUTCMonth();

  if (end.getUTCDate() < start.getUTCDate()) months -= 1;

  return Math.max(0, months);
}

export function getExperienceStats(now = new Date()) {
  return {
    developmentYears: getFullYearsBetween(DEVELOPMENT_START_DATE, now),
    commercialMonths: getFullMonthsBetween(COMMERCIAL_START_DATE, now),
  };
}
