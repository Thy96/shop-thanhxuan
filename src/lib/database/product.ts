import { Product } from "@/types/types";

export const getProductFromDB = () => {
  const products: Product[] = [
    {
      id: "1",
      slug: "nuoc-duong-toc-tinh-dau-buoi-140ml",
      images: [
        {
          url: "/img/top/Avatar_Website_Nuoc_duong_toc_tinh_dau_buoi_140ml_Cai_tien_moi_240629_7819f9ba98.jpg",
          alt: "hình ảnh đẹp",
          isPrimary: true,
          order: 1,
        },
        {
          url: "/img/top/Avatar_Website_Nuoc_duong_toc_tinh_dau_buoi_140ml_Cai_tien_moi_240629_7819f9ba98.jpg",
          alt: "hình ảnh đẹp",
          isPrimary: false,
          order: 2,
        },
        {
          url: "/img/top/Avatar_Website_Nuoc_duong_toc_tinh_dau_buoi_140ml_Cai_tien_moi_240629_7819f9ba98.jpg",
          alt: "hình ảnh đẹp",
          isPrimary: false,
          order: 3,
        },
      ],
      title: "Nước dưỡng tóc tinh dầu bưởi 140ml",
      decription: "Giảm gãy rụng và làm mềm tóc",
      content: `<h1>Tinh chất bí đao Cocoon – Giải pháp cho làn da mụn</h1>

          <p>
          Với thành phần chủ đạo là <strong>bí đao thanh mát</strong>, bổ sung thêm 
          <strong>7% Niacinamide (Vitamin B3)</strong>, <strong>TECA từ rau má</strong> 
          và <strong>tinh dầu tràm trà</strong>, tinh chất bí đao giúp phục hồi mạnh mẽ 
          tình trạng mụn, kiểm soát bã nhờn và làm thông thoáng lỗ chân lông.
          </p>

          <img 
            src="/img/products/tinh-chat-bi-dao.jpg" 
            alt="Tinh chất bí đao Cocoon"
            style="width:100%; border-radius:8px; margin:16px 0;"
          />

          <p>
          Sản phẩm hỗ trợ giảm mụn ẩn, cải thiện bề mặt da và làm mờ vết thâm sau mụn. 
          Kết cấu lỏng nhẹ, thẩm thấu nhanh, phù hợp cho da dầu và da nhạy cảm.
          </p>`,
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
      slug: "tinh-chat-bi-dao-70ml-tang-dung-dich-cham-mun-bi-dao-5ml",
      images: [
        {
          url: "/img/top/Avatar_Website_Nuoc_duong_toc_tinh_dau_buoi_140ml_Cai_tien_moi_240629_7819f9ba98.jpg",
          alt: "hình ảnh đẹp",
          isPrimary: true,
          order: 1,
        },
        {
          url: "/img/top/Avatar_Website_Nuoc_duong_toc_tinh_dau_buoi_140ml_Cai_tien_moi_240629_7819f9ba98.jpg",
          alt: "hình ảnh đẹp",
          isPrimary: false,
          order: 2,
        },
        {
          url: "/img/top/Avatar_Website_Nuoc_duong_toc_tinh_dau_buoi_140ml_Cai_tien_moi_240629_7819f9ba98.jpg",
          alt: "hình ảnh đẹp",
          isPrimary: false,
          order: 3,
        },
      ],
      title: "Tinh chất bí đao 70ml - Tặng dung dịch chấm mụn bí đao 5ml",
      decription: "Sạch mụn và mờ vết thâm",
      content: `<h1>Tinh chất bí đao Cocoon – Giải pháp cho làn da mụn</h1>

          <p>
          Với thành phần chủ đạo là <strong>bí đao thanh mát</strong>, bổ sung thêm 
          <strong>7% Niacinamide (Vitamin B3)</strong>, <strong>TECA từ rau má</strong> 
          và <strong>tinh dầu tràm trà</strong>, tinh chất bí đao giúp phục hồi mạnh mẽ 
          tình trạng mụn, kiểm soát bã nhờn và làm thông thoáng lỗ chân lông.
          </p>

          <img 
            src="/img/products/tinh-chat-bi-dao.jpg" 
            alt="Tinh chất bí đao Cocoon"
            style="width:100%; border-radius:8px; margin:16px 0;"
          />

          <p>
          Sản phẩm hỗ trợ giảm mụn ẩn, cải thiện bề mặt da và làm mờ vết thâm sau mụn. 
          Kết cấu lỏng nhẹ, thẩm thấu nhanh, phù hợp cho da dầu và da nhạy cảm.
          </p>`,
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
      slug: "mat-na-nghe-hung-yen-100ml",
      images: [
        {
          url: "/img/top/Avatar_Website_Nuoc_duong_toc_tinh_dau_buoi_140ml_Cai_tien_moi_240629_7819f9ba98.jpg",
          alt: "hình ảnh đẹp",
          isPrimary: true,
          order: 1,
        },
        {
          url: "/img/top/Avatar_Website_Nuoc_duong_toc_tinh_dau_buoi_140ml_Cai_tien_moi_240629_7819f9ba98.jpg",
          alt: "hình ảnh đẹp",
          isPrimary: false,
          order: 2,
        },
        {
          url: "/img/top/Avatar_Website_Nuoc_duong_toc_tinh_dau_buoi_140ml_Cai_tien_moi_240629_7819f9ba98.jpg",
          alt: "hình ảnh đẹp",
          isPrimary: false,
          order: 3,
        },
      ],
      title: "Mặt nạ nghệ Hưng Yên 100ml",
      decription: "Da rạng rỡ và mịn màng",
      content: `<h1>Tinh chất bí đao Cocoon – Giải pháp cho làn da mụn</h1>

          <p>
          Với thành phần chủ đạo là <strong>bí đao thanh mát</strong>, bổ sung thêm 
          <strong>7% Niacinamide (Vitamin B3)</strong>, <strong>TECA từ rau má</strong> 
          và <strong>tinh dầu tràm trà</strong>, tinh chất bí đao giúp phục hồi mạnh mẽ 
          tình trạng mụn, kiểm soát bã nhờn và làm thông thoáng lỗ chân lông.
          </p>

          <img 
            src="/img/products/tinh-chat-bi-dao.jpg" 
            alt="Tinh chất bí đao Cocoon"
            style="width:100%; border-radius:8px; margin:16px 0;"
          />

          <p>
          Sản phẩm hỗ trợ giảm mụn ẩn, cải thiện bề mặt da và làm mờ vết thâm sau mụn. 
          Kết cấu lỏng nhẹ, thẩm thấu nhanh, phù hợp cho da dầu và da nhạy cảm.
          </p>`,
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
      slug: "mat-na-nghe-hung-yen-100ml-2",
      images: [
        {
          url: "/img/top/Avatar_Website_Nuoc_duong_toc_tinh_dau_buoi_140ml_Cai_tien_moi_240629_7819f9ba98.jpg",
          alt: "hình ảnh đẹp",
          isPrimary: true,
          order: 1,
        },
        {
          url: "/img/top/Avatar_Website_Nuoc_duong_toc_tinh_dau_buoi_140ml_Cai_tien_moi_240629_7819f9ba98.jpg",
          alt: "hình ảnh đẹp",
          isPrimary: false,
          order: 2,
        },
        {
          url: "/img/top/Avatar_Website_Nuoc_duong_toc_tinh_dau_buoi_140ml_Cai_tien_moi_240629_7819f9ba98.jpg",
          alt: "hình ảnh đẹp",
          isPrimary: false,
          order: 3,
        },
      ],
      title: "Mặt nạ nghệ Hưng Yên 100ml",
      decription: "Da rạng rỡ và mịn màng",
      content: `<h1>Tinh chất bí đao Cocoon – Giải pháp cho làn da mụn</h1>

          <p>
          Với thành phần chủ đạo là <strong>bí đao thanh mát</strong>, bổ sung thêm 
          <strong>7% Niacinamide (Vitamin B3)</strong>, <strong>TECA từ rau má</strong> 
          và <strong>tinh dầu tràm trà</strong>, tinh chất bí đao giúp phục hồi mạnh mẽ 
          tình trạng mụn, kiểm soát bã nhờn và làm thông thoáng lỗ chân lông.
          </p>

          <img 
            src="/img/products/tinh-chat-bi-dao.jpg" 
            alt="Tinh chất bí đao Cocoon"
            style="width:100%; border-radius:8px; margin:16px 0;"
          />

          <p>
          Sản phẩm hỗ trợ giảm mụn ẩn, cải thiện bề mặt da và làm mờ vết thâm sau mụn. 
          Kết cấu lỏng nhẹ, thẩm thấu nhanh, phù hợp cho da dầu và da nhạy cảm.
          </p>`,
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
      id: "5",
      slug: "mat-na-nghe-hung-yen-100ml-3",
      images: [
        {
          url: "/img/top/Avatar_Website_Nuoc_duong_toc_tinh_dau_buoi_140ml_Cai_tien_moi_240629_7819f9ba98.jpg",
          alt: "hình ảnh đẹp",
          isPrimary: true,
          order: 1,
        },
        {
          url: "/img/top/Avatar_Website_Nuoc_duong_toc_tinh_dau_buoi_140ml_Cai_tien_moi_240629_7819f9ba98.jpg",
          alt: "hình ảnh đẹp",
          isPrimary: false,
          order: 2,
        },
        {
          url: "/img/top/Avatar_Website_Nuoc_duong_toc_tinh_dau_buoi_140ml_Cai_tien_moi_240629_7819f9ba98.jpg",
          alt: "hình ảnh đẹp",
          isPrimary: false,
          order: 3,
        },
      ],
      title: "Mặt nạ nghệ Hưng Yên 100ml",
      decription: "Da rạng rỡ và mịn màng",
      content: `<h1>Tinh chất bí đao Cocoon – Giải pháp cho làn da mụn</h1>

          <p>
          Với thành phần chủ đạo là <strong>bí đao thanh mát</strong>, bổ sung thêm 
          <strong>7% Niacinamide (Vitamin B3)</strong>, <strong>TECA từ rau má</strong> 
          và <strong>tinh dầu tràm trà</strong>, tinh chất bí đao giúp phục hồi mạnh mẽ 
          tình trạng mụn, kiểm soát bã nhờn và làm thông thoáng lỗ chân lông.
          </p>

          <img 
            src="/img/products/tinh-chat-bi-dao.jpg" 
            alt="Tinh chất bí đao Cocoon"
            style="width:100%; border-radius:8px; margin:16px 0;"
          />

          <p>
          Sản phẩm hỗ trợ giảm mụn ẩn, cải thiện bề mặt da và làm mờ vết thâm sau mụn. 
          Kết cấu lỏng nhẹ, thẩm thấu nhanh, phù hợp cho da dầu và da nhạy cảm.
          </p>`,
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
      id: "6",
      slug: "mat-na-nghe-hung-yen-100ml-4",
      images: [
        {
          url: "/img/top/Avatar_Website_Nuoc_duong_toc_tinh_dau_buoi_140ml_Cai_tien_moi_240629_7819f9ba98.jpg",
          alt: "hình ảnh đẹp",
          isPrimary: true,
          order: 1,
        },
        {
          url: "/img/top/Avatar_Website_Nuoc_duong_toc_tinh_dau_buoi_140ml_Cai_tien_moi_240629_7819f9ba98.jpg",
          alt: "hình ảnh đẹp",
          isPrimary: false,
          order: 2,
        },
        {
          url: "/img/top/Avatar_Website_Nuoc_duong_toc_tinh_dau_buoi_140ml_Cai_tien_moi_240629_7819f9ba98.jpg",
          alt: "hình ảnh đẹp",
          isPrimary: false,
          order: 3,
        },
      ],
      title: "Mặt nạ nghệ Hưng Yên 100ml",
      decription: "Da rạng rỡ và mịn màng",
      content: `<h1>Tinh chất bí đao Cocoon – Giải pháp cho làn da mụn</h1>

          <p>
          Với thành phần chủ đạo là <strong>bí đao thanh mát</strong>, bổ sung thêm 
          <strong>7% Niacinamide (Vitamin B3)</strong>, <strong>TECA từ rau má</strong> 
          và <strong>tinh dầu tràm trà</strong>, tinh chất bí đao giúp phục hồi mạnh mẽ 
          tình trạng mụn, kiểm soát bã nhờn và làm thông thoáng lỗ chân lông.
          </p>

          <img 
            src="/img/products/tinh-chat-bi-dao.jpg" 
            alt="Tinh chất bí đao Cocoon"
            style="width:100%; border-radius:8px; margin:16px 0;"
          />

          <p>
          Sản phẩm hỗ trợ giảm mụn ẩn, cải thiện bề mặt da và làm mờ vết thâm sau mụn. 
          Kết cấu lỏng nhẹ, thẩm thấu nhanh, phù hợp cho da dầu và da nhạy cảm.
          </p>`,
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
      id: "7",
      slug: "mat-na-nghe-hung-yen-100ml-5",
      images: [
        {
          url: "/img/top/Avatar_Website_Nuoc_duong_toc_tinh_dau_buoi_140ml_Cai_tien_moi_240629_7819f9ba98.jpg",
          alt: "hình ảnh đẹp",
          isPrimary: true,
          order: 1,
        },
        {
          url: "/img/top/Avatar_Website_Nuoc_duong_toc_tinh_dau_buoi_140ml_Cai_tien_moi_240629_7819f9ba98.jpg",
          alt: "hình ảnh đẹp",
          isPrimary: false,
          order: 2,
        },
        {
          url: "/img/top/Avatar_Website_Nuoc_duong_toc_tinh_dau_buoi_140ml_Cai_tien_moi_240629_7819f9ba98.jpg",
          alt: "hình ảnh đẹp",
          isPrimary: false,
          order: 3,
        },
      ],
      title: "Mặt nạ nghệ Hưng Yên 100ml",
      decription: "Da rạng rỡ và mịn màng",
      content: `<h1>Tinh chất bí đao Cocoon – Giải pháp cho làn da mụn</h1>

          <p>
          Với thành phần chủ đạo là <strong>bí đao thanh mát</strong>, bổ sung thêm 
          <strong>7% Niacinamide (Vitamin B3)</strong>, <strong>TECA từ rau má</strong> 
          và <strong>tinh dầu tràm trà</strong>, tinh chất bí đao giúp phục hồi mạnh mẽ 
          tình trạng mụn, kiểm soát bã nhờn và làm thông thoáng lỗ chân lông.
          </p>

          <img 
            src="/img/products/tinh-chat-bi-dao.jpg" 
            alt="Tinh chất bí đao Cocoon"
            style="width:100%; border-radius:8px; margin:16px 0;"
          />

          <p>
          Sản phẩm hỗ trợ giảm mụn ẩn, cải thiện bề mặt da và làm mờ vết thâm sau mụn. 
          Kết cấu lỏng nhẹ, thẩm thấu nhanh, phù hợp cho da dầu và da nhạy cảm.
          </p>`,
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
      id: "8",
      slug: "mat-na-nghe-hung-yen-100ml-6",
      images: [
        {
          url: "/img/top/Avatar_Website_Nuoc_duong_toc_tinh_dau_buoi_140ml_Cai_tien_moi_240629_7819f9ba98.jpg",
          alt: "hình ảnh đẹp",
          isPrimary: true,
          order: 1,
        },
        {
          url: "/img/top/Avatar_Website_Nuoc_duong_toc_tinh_dau_buoi_140ml_Cai_tien_moi_240629_7819f9ba98.jpg",
          alt: "hình ảnh đẹp",
          isPrimary: false,
          order: 2,
        },
        {
          url: "/img/top/Avatar_Website_Nuoc_duong_toc_tinh_dau_buoi_140ml_Cai_tien_moi_240629_7819f9ba98.jpg",
          alt: "hình ảnh đẹp",
          isPrimary: false,
          order: 3,
        },
      ],
      title: "Mặt nạ nghệ Hưng Yên 100ml",
      decription: "Da rạng rỡ và mịn màng",
      content: `<h1>Tinh chất bí đao Cocoon – Giải pháp cho làn da mụn</h1>

          <p>
          Với thành phần chủ đạo là <strong>bí đao thanh mát</strong>, bổ sung thêm 
          <strong>7% Niacinamide (Vitamin B3)</strong>, <strong>TECA từ rau má</strong> 
          và <strong>tinh dầu tràm trà</strong>, tinh chất bí đao giúp phục hồi mạnh mẽ 
          tình trạng mụn, kiểm soát bã nhờn và làm thông thoáng lỗ chân lông.
          </p>

          <img 
            src="/img/products/tinh-chat-bi-dao.jpg" 
            alt="Tinh chất bí đao Cocoon"
            style="width:100%; border-radius:8px; margin:16px 0;"
          />

          <p>
          Sản phẩm hỗ trợ giảm mụn ẩn, cải thiện bề mặt da và làm mờ vết thâm sau mụn. 
          Kết cấu lỏng nhẹ, thẩm thấu nhanh, phù hợp cho da dầu và da nhạy cảm.
          </p>`,
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
      id: "9",
      slug: "mat-na-nghe-hung-yen-100ml-7",
      images: [
        {
          url: "/img/top/Avatar_Website_Nuoc_duong_toc_tinh_dau_buoi_140ml_Cai_tien_moi_240629_7819f9ba98.jpg",
          alt: "hình ảnh đẹp",
          isPrimary: true,
          order: 1,
        },
        {
          url: "/img/top/Avatar_Website_Nuoc_duong_toc_tinh_dau_buoi_140ml_Cai_tien_moi_240629_7819f9ba98.jpg",
          alt: "hình ảnh đẹp",
          isPrimary: false,
          order: 2,
        },
        {
          url: "/img/top/Avatar_Website_Nuoc_duong_toc_tinh_dau_buoi_140ml_Cai_tien_moi_240629_7819f9ba98.jpg",
          alt: "hình ảnh đẹp",
          isPrimary: false,
          order: 3,
        },
      ],
      title: "Mặt nạ nghệ Hưng Yên 100ml",
      decription: "Da rạng rỡ và mịn màng",
      content: `<h1>Tinh chất bí đao Cocoon – Giải pháp cho làn da mụn</h1>

          <p>
          Với thành phần chủ đạo là <strong>bí đao thanh mát</strong>, bổ sung thêm 
          <strong>7% Niacinamide (Vitamin B3)</strong>, <strong>TECA từ rau má</strong> 
          và <strong>tinh dầu tràm trà</strong>, tinh chất bí đao giúp phục hồi mạnh mẽ 
          tình trạng mụn, kiểm soát bã nhờn và làm thông thoáng lỗ chân lông.
          </p>

          <img 
            src="/img/products/tinh-chat-bi-dao.jpg" 
            alt="Tinh chất bí đao Cocoon"
            style="width:100%; border-radius:8px; margin:16px 0;"
          />

          <p>
          Sản phẩm hỗ trợ giảm mụn ẩn, cải thiện bề mặt da và làm mờ vết thâm sau mụn. 
          Kết cấu lỏng nhẹ, thẩm thấu nhanh, phù hợp cho da dầu và da nhạy cảm.
          </p>`,
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
      id: "10",
      slug: "mat-na-nghe-hung-yen-100ml-8",
      images: [
        {
          url: "/img/top/Avatar_Website_Nuoc_duong_toc_tinh_dau_buoi_140ml_Cai_tien_moi_240629_7819f9ba98.jpg",
          alt: "hình ảnh đẹp",
          isPrimary: true,
          order: 1,
        },
        {
          url: "/img/top/Avatar_Website_Nuoc_duong_toc_tinh_dau_buoi_140ml_Cai_tien_moi_240629_7819f9ba98.jpg",
          alt: "hình ảnh đẹp",
          isPrimary: false,
          order: 2,
        },
        {
          url: "/img/top/Avatar_Website_Nuoc_duong_toc_tinh_dau_buoi_140ml_Cai_tien_moi_240629_7819f9ba98.jpg",
          alt: "hình ảnh đẹp",
          isPrimary: false,
          order: 3,
        },
      ],
      title: "Mặt nạ nghệ Hưng Yên 100ml",
      decription: "Da rạng rỡ và mịn màng",
      content: `<h1>Tinh chất bí đao Cocoon – Giải pháp cho làn da mụn</h1>

          <p>
          Với thành phần chủ đạo là <strong>bí đao thanh mát</strong>, bổ sung thêm 
          <strong>7% Niacinamide (Vitamin B3)</strong>, <strong>TECA từ rau má</strong> 
          và <strong>tinh dầu tràm trà</strong>, tinh chất bí đao giúp phục hồi mạnh mẽ 
          tình trạng mụn, kiểm soát bã nhờn và làm thông thoáng lỗ chân lông.
          </p>

          <img 
            src="/img/products/tinh-chat-bi-dao.jpg" 
            alt="Tinh chất bí đao Cocoon"
            style="width:100%; border-radius:8px; margin:16px 0;"
          />

          <p>
          Sản phẩm hỗ trợ giảm mụn ẩn, cải thiện bề mặt da và làm mờ vết thâm sau mụn. 
          Kết cấu lỏng nhẹ, thẩm thấu nhanh, phù hợp cho da dầu và da nhạy cảm.
          </p>`,
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
  ];

  return products;
};

export const getProductDetailFromDB = () => {
  const product: Product = {
    id: "1",
    slug: "nuoc-duong-toc-tinh-dau-buoi-140ml",
    images: [
      {
        url: "/img/top/Avatar_Website_Nuoc_duong_toc_tinh_dau_buoi_140ml_Cai_tien_moi_240629_7819f9ba98.jpg",
        alt: "hình ảnh đẹp",
        isPrimary: true,
        order: 1,
      },
      {
        url: "/img/top/Avatar_Website_Nuoc_duong_toc_tinh_dau_buoi_140ml_Cai_tien_moi_240629_7819f9ba98.jpg",
        alt: "hình ảnh đẹp",
        isPrimary: false,
        order: 2,
      },
      {
        url: "/img/top/Avatar_Website_Nuoc_duong_toc_tinh_dau_buoi_140ml_Cai_tien_moi_240629_7819f9ba98.jpg",
        alt: "hình ảnh đẹp",
        isPrimary: false,
        order: 3,
      },
    ],
    title: "Nước dưỡng tóc tinh dầu bưởi 140ml",
    decription:
      "Với công thức dịu nhẹ không chứa sulfate, gel rửa mặt cà phê Đắk Lắk có khả năng làm sạch hiệu quả mà không gây khô da, mang lại cảm giác sảng khoái cùng một làn da tươi mới, sạch thoáng và trông tràn đầy sinh lực để bắt đầu một ngày mới. \nNhững hạt cà phê Đắk Lắk xay nhuyễn giàu cafeine hòa quyện với bơ cacao Tiền Giang giúp bạn loại bỏ lớp tế bào chết già cỗi và xỉn màu, đánh thức làn da tươi mới đầy năng lượng cùng cảm giác mượt mà và mềm mịn lan tỏa.",
    content: `<h2>Tinh chất bí đao Cocoon – Giải pháp cho làn da mụn</h2><p>Với thành phần chủ đạo là <strong>bí đao thanh mát</strong>, bổ sung thêm <strong>7% Niacinamide (Vitamin B3)</strong>, <strong>TECA từ rau má</strong> và <strong>tinh dầu tràm trà</strong>, tinh chất bí đao giúp phục hồi mạnh mẽ tình trạng mụn, kiểm soát bã nhờn và làm thông thoáng lỗ chân lông.</p><img src=\"/img/top/Avatar_Website_Nuoc_duong_toc_tinh_dau_buoi_140ml_Cai_tien_moi_240629_7819f9ba98.jpg\" alt=\"Tinh chất bí đao Cocoon\" /><p>Sản phẩm hỗ trợ giảm mụn ẩn, cải thiện bề mặt da và làm mờ vết thâm sau mụn.</p><a href="/san-pham/tinh-chat-bi-dao"target="_blank"rel="noopener noreferrer">Xem thêm</a>`,
    url: "1",
    category: {
      cate_id: "1",
      cate_name: "Tinh chất",
      cate_slug: "tinh-chat",
    },
    price: 165000,
    sale: 0,
    stock: 0,
  };

  return product;
};
