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

export interface ProductsCollection {
  id: number | string;
  title: string;
  body_html: string;
  vendor: string;
  product_type: string;
  created_at: string;
  handle: string;
  updated_at: string;
  published_at: string;
  template_suffix: string | null;
  published_scope: string;
  tags: string;
  status: string;
  admin_graphql_api_id: string;
  options: Array<{
    id: number;
    product_id: number;
    name: string;
    position: number;
  }>;
  images: Array<{
    id: number;
    alt: string | null;
    position: number;
    product_id: number;
    created_at: string;
    updated_at: string;
    admin_graphql_api_id: string;
    width: number;
    height: number;
    src: string;
  }>;
  image: {
    id: number;
    alt: string | null;
    position: number;
    product_id: number;
    created_at: string;
    updated_at: string;
    admin_graphql_api_id: string;
    width: number;
    height: number;
    src: string;
  };
}

export interface IProduct {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
  handle: string;
  tags: string;
  gql_id: string;
}
