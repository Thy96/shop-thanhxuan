import useSWR from "swr";
import { SWRConfiguration } from "swr/_internal";

import { fetcher } from "@/utils/fetcher";
import {
  BestSellerResponse,
  DistrictWithWards,
  BlogResponse,
  ProductDetail,
  Provinces,
  ProvinceWithDistricts,
  BlogsResponse,
  Categories,
} from "@/types/types";
import { AxiosError } from "axios";

export const onErrorRetry: SWRConfiguration["onErrorRetry"] = (
  error: AxiosError,
  key,
  config,
  revalidate,
  { retryCount },
) => {
  // Nếu lỗi là 404 thì không retry
  if (error.response?.status === 404) return;

  // Nếu retry quá 3 lần thì dừng
  if (retryCount >= 3) return;

  // Retry lại sau 5 giây
  setTimeout(() => {
    revalidate({ retryCount });
  }, 5000);
};

export const useProvinces = () => {
  // Lấy API của tỉnh/thành phố
  const { data, error, isLoading } = useSWR<Provinces[]>(
    "https://provinces.open-api.vn/api/?depth=1",
    fetcher,
  );
  return {
    provinces: data,
    isLoadingProvinces: isLoading,
    error: error,
  };
};

export const useDistricts = (provinceCode?: number) => {
  const shouldFetch = provinceCode !== undefined;
  // Lấy API của quận/huyện
  const { data, error, isLoading } = useSWR<ProvinceWithDistricts>(
    shouldFetch
      ? `https://provinces.open-api.vn/api/p/${provinceCode}?depth=2`
      : null,
    fetcher,
  );

  return {
    districts: data?.districts ?? [],
    isLoadingDistricts: isLoading,
    error: error,
  };
};

export const useWards = (districtCode?: number) => {
  const shouldFetch = districtCode !== undefined;
  const { data, error } = useSWR<DistrictWithWards>(
    shouldFetch
      ? `https://provinces.open-api.vn/api/d/${districtCode}?depth=2`
      : null,
    fetcher,
  );

  return {
    wards: data?.wards ?? [],
    isLoadingWards: shouldFetch && !data && !error,
    isError: error,
  };
};

export const useBlogs = (page: number = 1, limit: number = 1) => {
  const { data, error, isLoading } = useSWR<BlogsResponse>(
    `http://localhost:4000/api/admin/notes/?page=${page}&limit=${limit}`,
    fetcher,
    {
      revalidateOnFocus: false,
      shouldRetryOnError: false,
    },
  );

  return {
    blogs: data?.data ?? [],
    pagination: data?.pagination ?? {
      page: 1,
      limit: 10,
      total: 0,
      totalPages: 1,
    },
    isLoadingBlogs: isLoading,
    isError: error,
  };
};

export const useBlog = (slug?: string) => {
  const { data, error, isLoading } = useSWR<BlogResponse>(
    slug ? `http://localhost:4000/api/admin/notes/slug/${slug}` : null, // nếu chưa có slug thì không call
    fetcher,
    {
      revalidateOnFocus: false,
      shouldRetryOnError: false,
    },
  );

  return {
    blog: data?.data ?? null,
    isLoadingBlog: isLoading,
    isError: error,
  };
};

export const useCategories = () => {
  const { data, error, isLoading } = useSWR<Categories[]>(
    "http://localhost:4000/api/admin/notes/categories",
    fetcher,
    {
      revalidateOnFocus: false,
      shouldRetryOnError: false,
    },
  );

  return {
    categories: data ?? [],
    isLoading,
    isError: error,
  };
};

export const useBestsellers = () => {
  const { data, error, isLoading } = useSWR<BestSellerResponse>(
    "http://localhost:3000/api/bestsellers/products",
    fetcher,
    {
      revalidateOnFocus: false,
      shouldRetryOnError: false,
    },
  );

  return {
    bestsellers: data?.products ?? [],
    isLoadingBestSellers: isLoading,
    isError: error,
  };
};

export const useProducts = (page: number = 1, limit: number = 10) => {
  const { data, error, isLoading } = useSWR<BestSellerResponse>(
    `http://localhost:3000/api/products/products?page=${page}&limit=${limit}`,
    fetcher,
    {
      keepPreviousData: true,
      revalidateOnFocus: false,
      shouldRetryOnError: false,
    },
  );

  return {
    products: data?.products ?? [],
    // pagination: data?.pagination, // nếu BE có
    isLoadingProducts: isLoading,
    isError: error,
  };
};

export const useProductDetail = (slug: string = "1") => {
  const { data, error, isLoading } = useSWR<ProductDetail>(
    slug
      ? `http://localhost:3000/api/products/productdetail?slug=${slug}`
      : null,
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      dedupingInterval: 60000, // 1 phút
    },
  );

  return {
    product: data?.product ?? null,
    isLoadingProduct: isLoading,
    isError: error,
  };
};
