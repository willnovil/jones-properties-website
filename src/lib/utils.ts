export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatRentRange(min: number, max: number): string {
  if (min === max || max === 0) return formatCurrency(min);
  return `${formatCurrency(min)} - ${formatCurrency(max)}`;
}

export function formatAddress(address: string, city: string, state: string, zip: string): string {
  return `${address}, ${city}, ${state} ${zip}`;
}

export function formatBedsBaths(beds: number, baths: number): string {
  const bedStr = beds === 0 ? "Studio" : `${beds} Bed${beds > 1 ? "s" : ""}`;
  const bathStr = `${baths} Bath${baths > 1 ? "s" : ""}`;
  return `${bedStr} / ${bathStr}`;
}

export function formatSqft(sqft: number): string {
  return `${sqft.toLocaleString()} sq ft`;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}
