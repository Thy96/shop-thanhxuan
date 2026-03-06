import { ReactNode } from "react";

export type BestSellerResponse = {
  products: Product[];
};

export type ProductDetail = {
  product: Product;
};

export type BlogsResponse = {
  data: Blog[];
  pagination: Pagination;
};

export type BlogResponse = {
  data: Blog;
}

export interface Pagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}
export interface Product {
  id: string;
  slug: string;
  images: ProductImages[];
  title: string;
  decription: string;
  content?: string;
  url: string;
  category?: {
    cate_id: string;
    cate_name: string;
    cate_slug: string;
  };
  price: number;
  sale?: number;
  stock: number;
}

export interface ProductImages {
  url: string;
  alt?: string;
  isPrimary: boolean;
  order: number;
}
export interface MainVisual {
  visual_id: string;
  visual_media: {
    video?: string;
    image?: {
      url: string;
      caption: string;
    };
  };
  visual_sub_title: string;
  visual_main_title: string;
  visual_content: string;
  visual_link_archor: string;
  visual_background?: string;
  visual_color?: string;
}

export interface Blog {
  id: string;
  thumbnail?: string;
  title: string;
  slug: string;
  category: {
    _id: string;
    slug: string;
    name: string;
  };
  createdAt: string;
  author: {
    _id: string;
    email: string;
    fullName: string;
  };
}

export interface Provinces {
  code: number;
  name: string;
}

export interface District {
  code: number;
  name: string;
}

export interface Ward {
  code: number;
  name: string;
}

export interface ProvinceWithDistricts {
  districts: District[];
}

export interface DistrictWithWards {
  wards: Ward[];
}

export interface SelectOption {
  label?: string;
  value?: string | number;
}

export interface TabItem {
  key: string;
  label: ReactNode;
  children?: ReactNode;
}

export interface MenuItem {
  key: string;
  title: string;
  url?: string;
  children?: React.ReactNode;
  submenu?: MenuItem[];
}

export interface Brand {
  title: string;
  subtitle: string;
  image: string;
  content: string;
}

export interface CartItem {
  product_id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
}


export interface Categories {
  _id: string;
  name: string;
  slug: string;
}