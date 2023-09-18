import { Author } from "./Author";

export interface Product {
  id: string;
  title: string;
  price: ProductPrice;
  picture: string;
  condition: string;
  free_shipping: boolean;
  sold_quantity?: number;
  description?: string;
  location?: string;
}

export interface ProductPrice {
  currency: string;
  amount: number;
  decimals: number;
}

export interface ProductListResponse {
  author: Author;
  categories: string[];
  items: Product[];
}

export interface ProductDetailResponse {
  author: Author;
  item: Product;
}
