// Interface automatically generated by schemas-to-ts

export interface Renovation {
  id: number;
  attributes: {
    createdAt: Date;
    updatedAt: Date;
    publishedAt?: Date;
    Title: string;
    locale: string;
    localizations?: { data: Renovation[] };
  };
}
export interface Renovation_Plain {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt?: Date;
  Title: string;
  locale: string;
  localizations?: Renovation_Plain[];
}

export interface Renovation_NoRelations {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt?: Date;
  Title: string;
  locale: string;
  localizations?: Renovation[];
}

export interface Renovation_AdminPanelLifeCycle {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt?: Date;
  Title: string;
  locale: string;
  localizations?: Renovation[];
}
