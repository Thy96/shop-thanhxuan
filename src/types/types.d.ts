import { ReactNode } from "react";

export interface Product {
    id: string;
    thumbnail: string;
    title: string;
    decription: string;
    content?: string;
    url: string;
    category: {
        cate_id: string;
        cate_name: string;
        cate_slug: string;
    };
    price: number;
    sale?: number;
    stock: number;
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
    thumbnail: string;
    title: string;
    date: string;
    category: {
        cate_id: string;
        cate_name: string;
        cate_slug: string;
    };
    description: string;
    content: string;
    url: string;
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
