import { Product } from "@/types/types";

export const getProductFromDB = () => {
    const products: Product[] = [
        {
            id: "1",
            thumbnail:
                "/img/top/Avatar_Website_Nuoc_duong_toc_tinh_dau_buoi_140ml_Cai_tien_moi_240629_7819f9ba98.jpg",
            title: "Nước dưỡng tóc tinh dầu bưởi 140ml",
            decription: "Giảm gãy rụng và làm mềm tóc",
            content:
                "Với thành phần chủ đạo là bí đao thanh mát, bổ sung thêm 7% Niacinamide (Vitamin B3), TECA từ rau má và tinh dầu tràm trà, tinh chất bí đao sẽ phục hồi mạnh mẽ tình trạng mụn, kiểm soát bã nhờn, làm thông thoáng lỗ chân lông giúp giảm tình trạng mụn ẩn, cải thiện bề mặt da và làm mờ vết thâm.",
            url: "",
            category: {
                cate_id: "1",
                cate_name: "Tinh chất",
                cate_slug: "tinh-chat",
            },
            price: 165000,
            sale: 0,
            stock: 0,
        },
        {
            id: "2",
            thumbnail:
                "/img/top/Avatar_Website_Nuoc_duong_toc_tinh_dau_buoi_140ml_Cai_tien_moi_240629_7819f9ba98.jpg",
            title: "Tinh chất bí đao 70ml - Tặng dung dịch chấm mụn bí đao 5ml",
            decription: "Sạch mụn và mờ vết thâm",
            content:
                "Với thành phần chủ đạo là bí đao thanh mát, bổ sung thêm 7% Niacinamide (Vitamin B3), TECA từ rau má và tinh dầu tràm trà, tinh chất bí đao sẽ phục hồi mạnh mẽ tình trạng mụn, kiểm soát bã nhờn, làm thông thoáng lỗ chân lông giúp giảm tình trạng mụn ẩn, cải thiện bề mặt da và làm mờ vết thâm.",
            url: "",
            category: {
                cate_id: "1",
                cate_name: "Tinh chất",
                cate_slug: "tinh-chat",
            },
            price: 420000,
            sale: 295000,
            stock: 0,
        },
        {
            id: "3",
            thumbnail:
                "/img/top/Avatar_Website_Nuoc_duong_toc_tinh_dau_buoi_140ml_Cai_tien_moi_240629_7819f9ba98.jpg",
            title: "Mặt nạ nghệ Hưng Yên 100ml",
            decription: "Da rạng rỡ và mịn màng",
            content:
                "Với thành phần chủ đạo là bí đao thanh mát, bổ sung thêm 7% Niacinamide (Vitamin B3), TECA từ rau má và tinh dầu tràm trà, tinh chất bí đao sẽ phục hồi mạnh mẽ tình trạng mụn, kiểm soát bã nhờn, làm thông thoáng lỗ chân lông giúp giảm tình trạng mụn ẩn, cải thiện bề mặt da và làm mờ vết thâm.",
            url: "",
            category: {
                cate_id: "1",
                cate_name: "Tinh chất",
                cate_slug: "tinh-chat",
            },
            price: 345000,
            sale: 0,
            stock: 0,
        },
        {
            id: "4",
            thumbnail:
                "/img/top/Avatar_Website_Nuoc_duong_toc_tinh_dau_buoi_140ml_Cai_tien_moi_240629_7819f9ba98.jpg",
            title: "Mặt nạ nghệ Hưng Yên 100ml",
            decription: "Da rạng rỡ và mịn màng",
            content:
                "Với thành phần chủ đạo là bí đao thanh mát, bổ sung thêm 7% Niacinamide (Vitamin B3), TECA từ rau má và tinh dầu tràm trà, tinh chất bí đao sẽ phục hồi mạnh mẽ tình trạng mụn, kiểm soát bã nhờn, làm thông thoáng lỗ chân lông giúp giảm tình trạng mụn ẩn, cải thiện bề mặt da và làm mờ vết thâm.",
            url: "",
            price: 345000,
            category: {
                cate_id: "1",
                cate_name: "Tinh chất",
                cate_slug: "tinh-chat",
            },
            sale: 0,
            stock: 0,
        },
        {
            id: "5",
            thumbnail:
                "/img/top/Avatar_Website_Nuoc_duong_toc_tinh_dau_buoi_140ml_Cai_tien_moi_240629_7819f9ba98.jpg",
            title: "Mặt nạ nghệ Hưng Yên 100ml",
            decription: "Da rạng rỡ và mịn màng",
            content:
                "Với thành phần chủ đạo là bí đao thanh mát, bổ sung thêm 7% Niacinamide (Vitamin B3), TECA từ rau má và tinh dầu tràm trà, tinh chất bí đao sẽ phục hồi mạnh mẽ tình trạng mụn, kiểm soát bã nhờn, làm thông thoáng lỗ chân lông giúp giảm tình trạng mụn ẩn, cải thiện bề mặt da và làm mờ vết thâm.",
            url: "",
            price: 345000,
            category: {
                cate_id: "1",
                cate_name: "Tinh chất",
                cate_slug: "tinh-chat",
            },
            sale: 0,
            stock: 0,
        },
        {
            id: "6",
            thumbnail:
                "/img/top/Avatar_Website_Nuoc_duong_toc_tinh_dau_buoi_140ml_Cai_tien_moi_240629_7819f9ba98.jpg",
            title: "Mặt nạ nghệ Hưng Yên 100ml",
            decription: "Da rạng rỡ và mịn màng",
            content:
                "Với thành phần chủ đạo là bí đao thanh mát, bổ sung thêm 7% Niacinamide (Vitamin B3), TECA từ rau má và tinh dầu tràm trà, tinh chất bí đao sẽ phục hồi mạnh mẽ tình trạng mụn, kiểm soát bã nhờn, làm thông thoáng lỗ chân lông giúp giảm tình trạng mụn ẩn, cải thiện bề mặt da và làm mờ vết thâm.",
            url: "",
            price: 345000,
            category: {
                cate_id: "1",
                cate_name: "Tinh chất",
                cate_slug: "tinh-chat",
            },
            sale: 0,
            stock: 0,
        },
        {
            id: "7",
            thumbnail:
                "/img/top/Avatar_Website_Nuoc_duong_toc_tinh_dau_buoi_140ml_Cai_tien_moi_240629_7819f9ba98.jpg",
            title: "Mặt nạ nghệ Hưng Yên 100ml",
            decription: "Da rạng rỡ và mịn màng",
            content:
                "Với thành phần chủ đạo là bí đao thanh mát, bổ sung thêm 7% Niacinamide (Vitamin B3), TECA từ rau má và tinh dầu tràm trà, tinh chất bí đao sẽ phục hồi mạnh mẽ tình trạng mụn, kiểm soát bã nhờn, làm thông thoáng lỗ chân lông giúp giảm tình trạng mụn ẩn, cải thiện bề mặt da và làm mờ vết thâm.",
            url: "",
            price: 345000,
            category: {
                cate_id: "1",
                cate_name: "Tinh chất",
                cate_slug: "tinh-chat",
            },
            sale: 0,
            stock: 0,
        },
    ];

    return products;
};
