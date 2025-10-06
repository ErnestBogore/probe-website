import { Document } from 'datocms-structured-text-utils';

export type ImageBlockRecord = {
  __typename: 'ImageBlockRecord';
  id: string;
  image: {
    url: string;
    alt?: string | null;
    width: number;
    height: number;
  };
};

export type TableRecord = {
  __typename: 'TableRecord';
  id: string;
  title: string;
  headers: string;
  rows: string;
};

export type TakeawayRecord = {
  __typename: 'TakeawayRecord';
  id: string;
  title: string;
  content: string;
};

export type BlockRecord = ImageBlockRecord | TableRecord | TakeawayRecord;

export interface DatoCMSStructuredText {
  value: Document;
  blocks: BlockRecord[];
}
