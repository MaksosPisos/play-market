export type Currency = "$" | "₸" | "₽";

export interface Offer {
  id: string;
  title: string;
  price: number;
  old: number;
  img: string;
}

export interface ServiceItem {
  id: string;
  name: string;
  icon: string;
  ring: string;
  more?: boolean;
}

export interface Review {
  id: string;
  user: string;
  avatar: string;
  rating: number;
  date: string;
  text: string;
  productTitle: string;
  productImg: string;
  productPrice: string;
}

export interface CatalogCategory {
  id: string;
  title: string;
}

export interface CatalogColumn {
  title: string;
  icon?: string;
  links: string[];
}

export interface Notification{
  id: number,
  title: string,
  type: 'danger' | 'success' | 'warning',
  delay?: number
}