export interface SeoToolOption {
  name: string;
  label: string;
  choices: { value: string; label: string }[];
  default: string;
  type: 'select' | 'country-select';
}

export interface TableColumnDef {
  key: string;
  label: string;
  sortable?: boolean;
  type?: 'text' | 'number' | 'difficulty' | 'currency' | 'url' | 'badge';
}

export interface UseCase {
  title: string;
  description: string;
  image?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export type SeoToolInputType = 'keyword' | 'url' | 'keyword-url';

export type SeoToolResultType =
  | 'keyword-list'
  | 'keyword-difficulty'
  | 'backlink-list'
  | 'domain-authority'
  | 'broken-links'
  | 'traffic-overview'
  | 'rank-position'
  | 'serp-results'
  | 'ai-visibility';

export type SeoToolCategory = 'keyword-research' | 'link-building' | 'serp-ranking' | 'other';

export interface SeoToolConfig {
  slug: string;
  name: string;
  title: string;
  description: string;
  metaDescription: string;
  category: SeoToolCategory;

  // Form configuration
  inputType: SeoToolInputType;
  inputLabel: string;
  inputPlaceholder: string;
  secondaryInputLabel?: string;
  secondaryInputPlaceholder?: string;
  buttonText: string;
  options: SeoToolOption[];

  // Result configuration
  resultType: SeoToolResultType;
  metricsToShow: string[];
  tableColumns: TableColumnDef[];

  // API configuration
  apiEndpoint: string;
  freeResultLimit: number;

  // Page content
  useCases: UseCase[];
  faqs: FAQ[];
}
