export interface Collection {
  id: string | number;
  handle: string;
  title: string;
  updated_at: string;
  body_html: string;
  published_at: string;
  sort_order: string;
  template_suffix: string;
  products_count: number;
  disjunctive: boolean;
  rules: [
    {
      column: string;
      relation: string;
      condition: string;
    }
  ];
  published_scope: string;
  admin_graphql_api_id: string;
  image: {
    created_at: string;
    alt: string;
    width: number;
    height: number;
    src: string;
  };
}
