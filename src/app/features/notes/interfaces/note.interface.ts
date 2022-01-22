export interface Note {
  description: string;
  id: string;
  title: string;
  tags: Tags;
}

type Tags = { [K in TAGS]: boolean };

export enum TAGS {
  Business,
  Projects,
  Personal,
}
