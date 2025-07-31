import useSWR from "swr";
import { SWRConfiguration } from "swr/_internal";

import { fetcher } from "@/utils/fetcher";
import {
    Blog,
    DistrictWithWards,
    Product,
    Provinces,
    ProvinceWithDistricts,
} from "@/types/types";
import { AxiosError } from "axios";

export const onErrorRetry: SWRConfiguration["onErrorRetry"] = (
    error: AxiosError,
    key,
    config,
    revalidate,
    { retryCount }
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
        fetcher
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
        fetcher
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
        fetcher
    );

    return {
        wards: data?.wards ?? [],
        isLoadingWards: shouldFetch && !data && !error,
        isError: error,
    };
};

export const useBlogs = () => {
    const { data, error, isLoading } = useSWR<Blog[]>(
        "http://localhost:3000/api/blog/blog",
        fetcher
    );

    return {
        blogs: data,
        isLoadingBlogs: isLoading,
        isError: error,
    };
};

export const useBestsellers = () => {
    const { data, error, isLoading } = useSWR<Product[]>(
        "http://localhost:3000/api/bestsellers/products",
        fetcher
    );

    return {
        bestsellers: data,
        isLoadingBestSellers: isLoading,
        isError: error,
    };
};
