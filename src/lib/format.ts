import { site } from '../content/site';

const numberFormat = (decimals = 0) =>
  new Intl.NumberFormat(site.locale, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

/** Formats a plain number with the site locale (e.g. 186000 -> "186.000"). */
export function formatNumber(value: number, decimals = 0): string {
  return numberFormat(decimals).format(value);
}

/** Formats an amount of money (e.g. 2800 -> "$2.800"). */
export function formatMoney(value: number): string {
  const sign = value < 0 ? '−' : '';
  return `${sign}${site.currencySymbol}${formatNumber(Math.abs(value))}`;
}

/** Ratio clamped to 0..1, safe for CSS custom properties. */
export function ratio(part: number, whole: number): number {
  if (whole <= 0) return 0;
  return Math.min(1, Math.max(0, part / whole));
}
