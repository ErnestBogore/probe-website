/**
 * Maps DataForSEO location_code (country) to the primary language_code for that country.
 * Used by API routes to infer the appropriate language for keyword data
 * based on the user's country selection.
 */

const COUNTRY_TO_LANGUAGE: Record<number, string> = {
  2840: 'en', // United States
  2826: 'en', // United Kingdom
  2276: 'de', // Germany
  2250: 'fr', // France
  2724: 'es', // Spain
  2380: 'it', // Italy
  2076: 'pt', // Brazil
  2124: 'en', // Canada
  2036: 'en', // Australia
  2356: 'en', // India
  2392: 'ja', // Japan
  2528: 'nl', // Netherlands
  2792: 'tr', // Turkey
  2410: 'ko', // South Korea
  2484: 'es', // Mexico
};

export function getLanguageCodeForCountry(locationCode: number): string {
  return COUNTRY_TO_LANGUAGE[locationCode] || 'en';
}
