// Interface automatically generated by schemas-to-ts

export interface HomeCare {
  id: number;
  attributes: {
    createdAt: Date;
    updatedAt: Date;
    publishedAt?: Date;
    Title: string;
    locale: string;
    localizations?: { data: HomeCare[] };
  };
}
export interface HomeCare_Plain {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt?: Date;
  Title: string;
  locale: string;
  localizations?: HomeCare_Plain[];
}

export interface HomeCare_NoRelations {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt?: Date;
  Title: string;
  locale: string;
  localizations?: HomeCare[];
}

export interface HomeCare_AdminPanelLifeCycle {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt?: Date;
  Title: string;
  locale: string;
  localizations?: HomeCare[];
}
