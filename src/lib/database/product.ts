import { Comment, Product } from "@/types/types";

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

export const products: Product[] = [
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

export const product: Product = {
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

export const mockComments: Comment[] = [
  {
    _id: "69f0e03d231e5b7abc34e3ca",
    productId: "69a3cff9cca129a9594bb49c",
    userId: {
      _id: "69d6647afc81a513ff620440",
      fullName: "Nguyễn Thị Lan",
      email: "lan.nguyen@example.com",
    },
    content:
      "Sản phẩm rất tốt, mùi hương dịu nhẹ, dùng xong da mềm mịn hẳn. Sẽ mua lại lần sau!",
    rating: 5,
    createdAt: "2026-04-10T08:14:22.000Z",
    updatedAt: "2026-04-10T08:14:22.000Z",
    __v: 0,
  },
  {
    _id: "69f0e03d231e5b7abc34e3cb",
    productId: "69a3cff9cca129a9594bb49c",
    userId: {
      _id: "69d6647afc81a513ff620441",
      fullName: "Trần Minh Huy",
      email: "huy.tran@example.com",
    },
    content:
      "Chất lượng ổn, giao hàng nhanh. Bao bì đẹp, làm quà tặng rất ý nghĩa.",
    rating: 4,
    createdAt: "2026-03-25T10:45:00.000Z",
    updatedAt: "2026-03-25T10:45:00.000Z",
    __v: 0,
  },
  {
    _id: "69f0e03d231e5b7abc34e3cc",
    productId: "69a3cff9cca129a9594bb49c",
    userId: {
      _id: "69d6647afc81a513ff620442",
      fullName: "Phạm Thu Hà",
      email: "ha.pham@example.com",
    },
    content: "Hơi lâu giao nhưng sản phẩm ổn.",
    rating: 4,
    createdAt: "2026-04-28T16:28:45.478Z",
    updatedAt: "2026-04-28T16:28:45.478Z",
    __v: 0,
  },
  {
    _id: "69f0e03d231e5b7abc34e3cd",
    productId: "69a3cff9cca129a9594bb49c",
    userId: {
      _id: "69d6647afc81a513ff620443",
      fullName: "Lê Thị Bích Ngọc",
      email: "ngoc.le@example.com",
    },
    content:
      "Mình đã dùng thử mẫu trước khi mua, thực sự rất thích. Sẽ tiếp tục ủng hộ shop!",
    rating: 5,
    createdAt: "2026-03-12T14:30:10.000Z",
    updatedAt: "2026-03-12T14:30:10.000Z",
    __v: 0,
  },
  {
    _id: "69f0e03d231e5b7abc34e3ce",
    productId: "69a3cff9cca129a9594bb49c",
    userId: {
      _id: "69d6647afc81a513ff620444",
      fullName: "Đặng Quốc Anh",
      email: "quocanh.dang@example.com",
    },
    content:
      "Da mình khá nhạy cảm nhưng dùng sản phẩm này hoàn toàn không bị kích ứng. Rất hài lòng!",
    rating: 5,
    createdAt: "2026-02-20T09:00:00.000Z",
    updatedAt: "2026-02-20T09:00:00.000Z",
    __v: 0,
  },
  {
    _id: "69f0e03d231e5b7abc34e3cf",
    productId: "69a3cff9cca129a9594bb49c",
    userId: {
      _id: "69d6647afc81a513ff620445",
      fullName: "Vũ Thị Mai",
      email: "mai.vu@example.com",
    },
    content:
      "Giá hơi cao nhưng chất lượng xứng đáng. Mùi thơm rất dễ chịu, không hắc.",
    rating: 4,
    createdAt: "2026-02-14T13:22:00.000Z",
    updatedAt: "2026-02-14T13:22:00.000Z",
    __v: 0,
  },
  {
    _id: "69f0e03d231e5b7abc34e3d0",
    productId: "69a3cff9cca129a9594bb49c",
    userId: {
      _id: "69d6647afc81a513ff620446",
      fullName: "Hoàng Văn Đức",
      email: "duc.hoang@example.com",
    },
    content:
      "Mua về làm quà cho mẹ, mẹ rất thích. Bao bì sang trọng, đóng gói cẩn thận.",
    rating: 5,
    createdAt: "2026-01-30T07:45:00.000Z",
    updatedAt: "2026-01-30T07:45:00.000Z",
    __v: 0,
  },
  {
    _id: "69f0e03d231e5b7abc34e3d1",
    productId: "69a3cff9cca129a9594bb49c",
    userId: {
      _id: "69d6647afc81a513ff620447",
      fullName: "Ngô Thị Thanh Tuyền",
      email: "tuyen.ngo@example.com",
    },
    content:
      "Dùng được 2 tuần thấy da cải thiện rõ rệt, bớt dầu hơn và lỗ chân lông se lại.",
    rating: 5,
    createdAt: "2026-01-15T11:10:00.000Z",
    updatedAt: "2026-01-15T11:10:00.000Z",
    __v: 0,
  },
  {
    _id: "69f0e03d231e5b7abc34e3d2",
    productId: "69a3cff9cca129a9594bb49c",
    userId: {
      _id: "69d6647afc81a513ff620448",
      fullName: "Bùi Minh Khoa",
      email: "khoa.bui@example.com",
    },
    content:
      "Sản phẩm tốt, tuy nhiên mình thấy tuýp hơi nhỏ so với giá tiền. Dùng khoảng 1 tháng hết.",
    rating: 3,
    createdAt: "2026-01-08T16:00:00.000Z",
    updatedAt: "2026-01-08T16:00:00.000Z",
    __v: 0,
  },
  {
    _id: "69f0e03d231e5b7abc34e3d3",
    productId: "69a3cff9cca129a9594bb49c",
    userId: {
      _id: "69d6647afc81a513ff620449",
      fullName: "Trịnh Thị Hương",
      email: "huong.trinh@example.com",
    },
    content:
      "Lần đầu mua thử, dùng rất thích nên đã order thêm 2 hộp dự trữ luôn!",
    rating: 5,
    createdAt: "2025-12-25T10:30:00.000Z",
    updatedAt: "2025-12-25T10:30:00.000Z",
    __v: 0,
  },
  {
    _id: "69f0e03d231e5b7abc34e3d4",
    productId: "69a3cff9cca129a9594bb49c",
    userId: {
      _id: "69d6647afc81a513ff62044a",
      fullName: "Phan Thị Diễm",
      email: "diem.phan@example.com",
    },
    content:
      "Texture nhẹ, thấm nhanh, không bóng nhờn. Phù hợp để dùng buổi sáng trước khi trang điểm.",
    rating: 4,
    createdAt: "2025-12-10T08:20:00.000Z",
    updatedAt: "2025-12-10T08:20:00.000Z",
    __v: 0,
  },
  {
    _id: "69f0e03d231e5b7abc34e3d5",
    productId: "69a3cff9cca129a9594bb49c",
    userId: {
      _id: "69d6647afc81a513ff62044b",
      fullName: "Lý Thành Nam",
      email: "nam.ly@example.com",
    },
    content:
      "Shop tư vấn nhiệt tình, sản phẩm đúng mô tả. Sẽ tiếp tục ủng hộ thêm các sản phẩm khác.",
    rating: 4,
    createdAt: "2025-11-28T14:55:00.000Z",
    updatedAt: "2025-11-28T14:55:00.000Z",
    __v: 0,
  },
  {
    _id: "69f0e03d231e5b7abc34e3d6",
    productId: "69a3cff9cca129a9594bb49c",
    userId: {
      _id: "69d6647afc81a513ff62044c",
      fullName: "Đinh Thị Phương Linh",
      email: "linh.dinh@example.com",
    },
    content:
      "Màu sắc bao bì rất xinh, phù hợp làm quà tặng ngày lễ. Chất lượng cũng rất ổn.",
    rating: 5,
    createdAt: "2025-11-12T09:40:00.000Z",
    updatedAt: "2025-11-12T09:40:00.000Z",
    __v: 0,
  },
  {
    _id: "69f0e03d231e5b7abc34e3d7",
    productId: "69a3cff9cca129a9594bb49c",
    userId: {
      _id: "69d6647afc81a513ff62044d",
      fullName: "Cao Thị Thanh Hằng",
      email: "hang.cao@example.com",
    },
    content:
      "Mùi tinh dầu bưởi thật sự rất thơm và tự nhiên. Dùng sau khi gội đầu xong tóc mềm và bóng mượt hơn nhiều.",
    rating: 5,
    createdAt: "2025-10-30T08:00:00.000Z",
    updatedAt: "2025-10-30T08:00:00.000Z",
    __v: 0,
  },
  {
    _id: "69f0e03d231e5b7abc34e3d8",
    productId: "69a3cff9cca129a9594bb49c",
    userId: {
      _id: "69d6647afc81a513ff62044e",
      fullName: "Nguyễn Văn Bình",
      email: "binh.nguyen@example.com",
    },
    content:
      "Sản phẩm chính hãng, đóng gói cẩn thận. Tóc mình bị khô và chẻ ngọn nhưng dùng 3 tuần đã thấy cải thiện.",
    rating: 4,
    createdAt: "2025-10-15T10:20:00.000Z",
    updatedAt: "2025-10-15T10:20:00.000Z",
    __v: 0,
  },
  {
    _id: "69f0e03d231e5b7abc34e3d9",
    productId: "69a3cff9cca129a9594bb49c",
    userId: {
      _id: "69d6647afc81a513ff62044f",
      fullName: "Lê Minh Châu",
      email: "chau.le@example.com",
    },
    content:
      "Giá tốt cho chất lượng này, mình đã dùng nhiều sản phẩm tương tự nhưng cái này vẫn là tốt nhất.",
    rating: 5,
    createdAt: "2025-09-28T14:05:00.000Z",
    updatedAt: "2025-09-28T14:05:00.000Z",
    __v: 0,
  },
  {
    _id: "69f0e03d231e5b7abc34e3da",
    productId: "69a3cff9cca129a9594bb49c",
    userId: {
      _id: "69d6647afc81a513ff620450",
      fullName: "Trần Thị Kim Anh",
      email: "kimanh.tran@example.com",
    },
    content:
      "Shop phục vụ tốt, trả lời tư vấn nhanh. Sản phẩm giống mô tả, hài lòng.",
    rating: 4,
    createdAt: "2025-09-10T09:30:00.000Z",
    updatedAt: "2025-09-10T09:30:00.000Z",
    __v: 0,
  },
  {
    _id: "69f0e03d231e5b7abc34e3db",
    productId: "69a3cff9cca129a9594bb49c",
    userId: {
      _id: "69d6647afc81a513ff620451",
      fullName: "Phùng Thanh Sơn",
      email: "son.phung@example.com",
    },
    content:
      "Mình mua tặng mẹ nhân ngày 20/10, mẹ thích lắm. Sản phẩm thơm và dùng thấy tóc bóng hơn.",
    rating: 5,
    createdAt: "2025-10-20T07:15:00.000Z",
    updatedAt: "2025-10-20T07:15:00.000Z",
    __v: 0,
  },
  {
    _id: "69f0e03d231e5b7abc34e3dc",
    productId: "69a3cff9cca129a9594bb49c",
    userId: {
      _id: "69d6647afc81a513ff620452",
      fullName: "Đỗ Thị Ngọc Bích",
      email: "bich.do@example.com",
    },
    content:
      "Lượng sản phẩm hơi ít so với giá, nhưng chất lượng thì ok. Dùng tiết kiệm được khoảng 2 tháng.",
    rating: 3,
    createdAt: "2025-08-22T15:40:00.000Z",
    updatedAt: "2025-08-22T15:40:00.000Z",
    __v: 0,
  },
  {
    _id: "69f0e03d231e5b7abc34e3dd",
    productId: "69a3cff9cca129a9594bb49c",
    userId: {
      _id: "69d6647afc81a513ff620453",
      fullName: "Vương Thị Mỹ Dung",
      email: "dung.vuong@example.com",
    },
    content:
      "Dùng thử lần đầu, cảm giác thấm rất nhanh và không bết dính. Sẽ tiếp tục mua.",
    rating: 5,
    createdAt: "2025-08-05T11:00:00.000Z",
    updatedAt: "2025-08-05T11:00:00.000Z",
    __v: 0,
  },
  {
    _id: "69f0e03d231e5b7abc34e3de",
    productId: "69a3cff9cca129a9594bb49c",
    userId: {
      _id: "69d6647afc81a513ff620454",
      fullName: "Hồ Văn Tài",
      email: "tai.ho@example.com",
    },
    content:
      "Mình thấy bình thường thôi, không có gì đặc biệt so với các sản phẩm cùng phân khúc giá.",
    rating: 3,
    createdAt: "2025-07-18T13:20:00.000Z",
    updatedAt: "2025-07-18T13:20:00.000Z",
    __v: 0,
  },
  {
    _id: "69f0e03d231e5b7abc34e3df",
    productId: "69a3cff9cca129a9594bb49c",
    userId: {
      _id: "69d6647afc81a513ff620455",
      fullName: "Lưu Thị Thu Huyền",
      email: "huyen.luu@example.com",
    },
    content:
      "Thơm lắm ạ! Dùng buổi sáng ra đường mà tóc vẫn giữ được mùi cả ngày. Rất thích!",
    rating: 5,
    createdAt: "2025-07-01T08:50:00.000Z",
    updatedAt: "2025-07-01T08:50:00.000Z",
    __v: 0,
  },
  {
    _id: "69f0e03d231e5b7abc34e3e0",
    productId: "69a3cff9cca129a9594bb49c",
    userId: {
      _id: "69d6647afc81a513ff620456",
      fullName: "Trương Thị Hoa",
      email: "hoa.truong@example.com",
    },
    content:
      "Mua lần 3 rồi. Sản phẩm ổn định, không thay đổi công thức nên yên tâm dùng dài hạn.",
    rating: 5,
    createdAt: "2025-06-14T16:30:00.000Z",
    updatedAt: "2025-06-14T16:30:00.000Z",
    __v: 0,
  },
  {
    _id: "69f0e03d231e5b7abc34e3e1",
    productId: "69a3cff9cca129a9594bb49c",
    userId: {
      _id: "69d6647afc81a513ff620457",
      fullName: "Nguyễn Đức Long",
      email: "long.nguyen@example.com",
    },
    content:
      "Giao hàng đúng hẹn, sản phẩm đúng mô tả. Dùng được 1 tuần thấy tóc bóng và mềm hơn.",
    rating: 4,
    createdAt: "2025-06-01T10:10:00.000Z",
    updatedAt: "2025-06-01T10:10:00.000Z",
    __v: 0,
  },
  {
    _id: "69f0e03d231e5b7abc34e3e2",
    productId: "69a3cff9cca129a9594bb49c",
    userId: {
      _id: "69d6647afc81a513ff620458",
      fullName: "Kiều Thị Lan Anh",
      email: "lananh.kieu@example.com",
    },
    content:
      "Sản phẩm tốt nhưng mình nhận hàng bị móp hộp một chút. Hy vọng shop cải thiện đóng gói.",
    rating: 3,
    createdAt: "2025-05-20T09:00:00.000Z",
    updatedAt: "2025-05-20T09:00:00.000Z",
    __v: 0,
  },
  {
    _id: "69f0e03d231e5b7abc34e3e3",
    productId: "69a3cff9cca129a9594bb49c",
    userId: {
      _id: "69d6647afc81a513ff620459",
      fullName: "Mạc Thị Thu Giang",
      email: "giang.mac@example.com",
    },
    content:
      "Tóc mình rất dày và cứng, dùng sản phẩm này thấy mềm mượt hơn hẳn sau khoảng 2 tuần.",
    rating: 5,
    createdAt: "2025-05-05T14:45:00.000Z",
    updatedAt: "2025-05-05T14:45:00.000Z",
    __v: 0,
  },
  {
    _id: "69f0e03d231e5b7abc34e3e4",
    productId: "69a3cff9cca129a9594bb49c",
    userId: {
      _id: "69d6647afc81a513ff62045a",
      fullName: "Phan Văn Khải",
      email: "khai.phan@example.com",
    },
    content:
      "Mình mua thử theo khuyến mãi, thực sự bị thuyết phục bởi mùi hương. Sẽ order tiếp.",
    rating: 5,
    createdAt: "2025-04-22T12:00:00.000Z",
    updatedAt: "2025-04-22T12:00:00.000Z",
    __v: 0,
  },
  {
    _id: "69f0e03d231e5b7abc34e3e5",
    productId: "69a3cff9cca129a9594bb49c",
    userId: {
      _id: "69d6647afc81a513ff62045b",
      fullName: "Bùi Thị Cẩm Nhung",
      email: "nhung.bui@example.com",
    },
    content:
      "Chất lượng ổn, nhưng tôi kỳ vọng cao hơn. Có lẽ cần dùng lâu hơn mới thấy hiệu quả rõ.",
    rating: 3,
    createdAt: "2025-04-10T07:30:00.000Z",
    updatedAt: "2025-04-10T07:30:00.000Z",
    __v: 0,
  },
  {
    _id: "69f0e03d231e5b7abc34e3e6",
    productId: "69a3cff9cca129a9594bb49c",
    userId: {
      _id: "69d6647afc81a513ff62045c",
      fullName: "Dương Thị Ánh Tuyết",
      email: "tuyet.duong@example.com",
    },
    content:
      "Mình có da đầu nhạy cảm dễ bị kích ứng nhưng dùng sản phẩm này không bị gì, rất an tâm.",
    rating: 5,
    createdAt: "2025-03-28T15:20:00.000Z",
    updatedAt: "2025-03-28T15:20:00.000Z",
    __v: 0,
  },
  {
    _id: "69f0e03d231e5b7abc34e3e7",
    productId: "69a3cff9cca129a9594bb49c",
    userId: {
      _id: "69d6647afc81a513ff62045d",
      fullName: "Võ Minh Quân",
      email: "quan.vo@example.com",
    },
    content:
      "Mình dùng để dưỡng tóc sau khi nhuộm, tóc hồi phục nhanh hơn, bớt khô và rụng.",
    rating: 4,
    createdAt: "2025-03-15T11:45:00.000Z",
    updatedAt: "2025-03-15T11:45:00.000Z",
    __v: 0,
  },
  {
    _id: "69f0e03d231e5b7abc34e3e8",
    productId: "69a3cff9cca129a9594bb49c",
    userId: {
      _id: "69d6647afc81a513ff62045e",
      fullName: "Hoàng Thị Xuân Mai",
      email: "xuanmai.hoang@example.com",
    },
    content:
      "Sản phẩm không như kỳ vọng, mình dùng gần 1 tháng nhưng không thấy tóc mềm hơn nhiều.",
    rating: 2,
    createdAt: "2025-03-01T09:00:00.000Z",
    updatedAt: "2025-03-01T09:00:00.000Z",
    __v: 0,
  },
  {
    _id: "69f0e03d231e5b7abc34e3e9",
    productId: "69a3cff9cca129a9594bb49c",
    userId: {
      _id: "69d6647afc81a513ff62045f",
      fullName: "Lê Thị Hải Yến",
      email: "hayen.le@example.com",
    },
    content:
      "Sản phẩm rất tốt, mùi thơm dịu, tóc mình bóng và mềm hơn sau khi dùng. Rất xứng đáng.",
    rating: 5,
    createdAt: "2025-02-14T08:30:00.000Z",
    updatedAt: "2025-02-14T08:30:00.000Z",
    __v: 0,
  },
  {
    _id: "69f0e03d231e5b7abc34e3ea",
    productId: "69a3cff9cca129a9594bb49c",
    userId: {
      _id: "69d6647afc81a513ff620460",
      fullName: "Trần Đình Phúc",
      email: "phuc.tran@example.com",
    },
    content:
      "Mình thường không review nhưng sản phẩm này quá ngon nên phải để lại đánh giá.",
    rating: 5,
    createdAt: "2025-01-30T10:00:00.000Z",
    updatedAt: "2025-01-30T10:00:00.000Z",
    __v: 0,
  },
  {
    _id: "69f0e03d231e5b7abc34e3eb",
    productId: "69a3cff9cca129a9594bb49c",
    userId: {
      _id: "69d6647afc81a513ff620461",
      fullName: "Phạm Thị Ngọc Trinh",
      email: "trinh.pham@example.com",
    },
    content:
      "Giao hàng khá chậm, mất gần 5 ngày mới nhận được. Nhưng sản phẩm ok.",
    rating: 3,
    createdAt: "2025-01-15T14:00:00.000Z",
    updatedAt: "2025-01-15T14:00:00.000Z",
    __v: 0,
  },
  {
    _id: "69f0e03d231e5b7abc34e3ec",
    productId: "69a3cff9cca129a9594bb49c",
    userId: {
      _id: "69d6647afc81a513ff620462",
      fullName: "Ngô Thị Bảo Trân",
      email: "baotran.ngo@example.com",
    },
    content:
      "Tóc mình sau khi dùng mịn màng và giảm gãy rụng đáng kể. Hộp đẹp, mùi dễ chịu.",
    rating: 5,
    createdAt: "2024-12-28T07:20:00.000Z",
    updatedAt: "2024-12-28T07:20:00.000Z",
    __v: 0,
  },
  {
    _id: "69f0e03d231e5b7abc34e3ed",
    productId: "69a3cff9cca129a9594bb49c",
    userId: {
      _id: "69d6647afc81a513ff620463",
      fullName: "Đinh Công Tuấn",
      email: "tuan.dinh@example.com",
    },
    content:
      "Sản phẩm bình thường, không thần kỳ như mô tả. Mùi thì ổn, nhưng hiệu quả chưa thấy rõ.",
    rating: 2,
    createdAt: "2024-12-10T12:40:00.000Z",
    updatedAt: "2024-12-10T12:40:00.000Z",
    __v: 0,
  },
  {
    _id: "69f0e03d231e5b7abc34e3ee",
    productId: "69a3cff9cca129a9594bb49c",
    userId: {
      _id: "69d6647afc81a513ff620464",
      fullName: "Nguyễn Thị Phương Thảo",
      email: "thao.nguyen@example.com",
    },
    content:
      "Đã mua 2 lần, lần nào cũng hài lòng. Tinh dầu bưởi thật sự kích thích mọc tóc.",
    rating: 5,
    createdAt: "2024-11-25T09:10:00.000Z",
    updatedAt: "2024-11-25T09:10:00.000Z",
    __v: 0,
  },
  {
    _id: "69f0e03d231e5b7abc34e3ef",
    productId: "69a3cff9cca129a9594bb49c",
    userId: {
      _id: "69d6647afc81a513ff620465",
      fullName: "Mai Thị Thu Thủy",
      email: "thuy.mai@example.com",
    },
    content:
      "Hàng thật, chất lượng tốt, shop uy tín. Sẽ giới thiệu cho bạn bè.",
    rating: 5,
    createdAt: "2024-11-10T16:00:00.000Z",
    updatedAt: "2024-11-10T16:00:00.000Z",
    __v: 0,
  },
  {
    _id: "69f0e03d231e5b7abc34e3f0",
    productId: "69a3cff9cca129a9594bb49c",
    userId: {
      _id: "69d6647afc81a513ff620466",
      fullName: "Lâm Thị Minh Châu",
      email: "minchau.lam@example.com",
    },
    content:
      "Sản phẩm không phù hợp với tóc mình, bị bết và nặng sau khi dùng. Trả lại được không shop?",
    rating: 1,
    createdAt: "2024-10-30T08:00:00.000Z",
    updatedAt: "2024-10-30T08:00:00.000Z",
    __v: 0,
  },
  {
    _id: "69f0e03d231e5b7abc34e3f1",
    productId: "69a3cff9cca129a9594bb49c",
    userId: {
      _id: "69d6647afc81a513ff620467",
      fullName: "Tô Thị Hồng Nhung",
      email: "nhung.to@example.com",
    },
    content:
      "Sản phẩm thơm và nhẹ, không gây bết tóc. Phù hợp với tóc mỏng như mình.",
    rating: 4,
    createdAt: "2024-10-15T11:30:00.000Z",
    updatedAt: "2024-10-15T11:30:00.000Z",
    __v: 0,
  },
  {
    _id: "69f0e03d231e5b7abc34e3f2",
    productId: "69a3cff9cca129a9594bb49c",
    userId: {
      _id: "69d6647afc81a513ff620468",
      fullName: "Chu Văn Hùng",
      email: "hung.chu@example.com",
    },
    content:
      "Cảm ơn shop đã tư vấn nhiệt tình. Mua về dùng rất thích, tóc mềm mượt và bóng khỏe.",
    rating: 5,
    createdAt: "2024-10-01T09:20:00.000Z",
    updatedAt: "2024-10-01T09:20:00.000Z",
    __v: 0,
  },
  {
    _id: "69f0e03d231e5b7abc34e3f3",
    productId: "69a3cff9cca129a9594bb49c",
    userId: {
      _id: "69d6647afc81a513ff620469",
      fullName: "Lý Thị Ngọc Hân",
      email: "han.ly@example.com",
    },
    content:
      "Sản phẩm có vẻ bị làm giả hoặc nhái. Mùi khác hẳn lần trước mình mua. Thất vọng.",
    rating: 1,
    createdAt: "2024-09-20T14:10:00.000Z",
    updatedAt: "2024-09-20T14:10:00.000Z",
    __v: 0,
  },
  {
    _id: "69f0e03d231e5b7abc34e3f4",
    productId: "69a3cff9cca129a9594bb49c",
    userId: {
      _id: "69d6647afc81a513ff62046a",
      fullName: "Đoàn Thị Bích Phượng",
      email: "phuong.doan@example.com",
    },
    content:
      "Rất hài lòng! Dùng mỗi tối trước khi ngủ, sáng thức dậy tóc mềm và thơm. Tuyệt vời.",
    rating: 5,
    createdAt: "2024-09-05T07:45:00.000Z",
    updatedAt: "2024-09-05T07:45:00.000Z",
    __v: 0,
  },
  {
    _id: "69f0e03d231e5b7abc34e3f5",
    productId: "69a3cff9cca129a9594bb49c",
    userId: {
      _id: "69d6647afc81a513ff62046b",
      fullName: "Huỳnh Văn Phát",
      email: "phat.huynh@example.com",
    },
    content: "Giao hàng đúng như mô tả, sản phẩm tốt, sẽ ủng hộ shop lần sau.",
    rating: 4,
    createdAt: "2024-08-22T10:55:00.000Z",
    updatedAt: "2024-08-22T10:55:00.000Z",
    __v: 0,
  },
  {
    _id: "69f0e03d231e5b7abc34e3f6",
    productId: "69a3cff9cca129a9594bb49c",
    userId: {
      _id: "69d6647afc81a513ff62046c",
      fullName: "Bạch Thị Quỳnh Như",
      email: "nhu.bach@example.com",
    },
    content:
      "Mình thấy hiệu quả chưa rõ ràng sau 2 tuần sử dụng. Mùi thì dễ chịu nhưng chưa thấy tóc khỏe hơn.",
    rating: 2,
    createdAt: "2024-08-08T13:00:00.000Z",
    updatedAt: "2024-08-08T13:00:00.000Z",
    __v: 0,
  },
  {
    _id: "69f0e03d231e5b7abc34e3f7",
    productId: "69a3cff9cca129a9594bb49c",
    userId: {
      _id: "69d6647afc81a513ff62046d",
      fullName: "Đặng Thị Khánh Linh",
      email: "khanlinh.dang@example.com",
    },
    content:
      "Rất thơm và dễ chịu, dùng sau khi gội đầu xong cảm giác nhẹ nhàng và tóc mượt hơn hẳn.",
    rating: 5,
    createdAt: "2024-07-25T09:30:00.000Z",
    updatedAt: "2024-07-25T09:30:00.000Z",
    __v: 0,
  },
  {
    _id: "69f0e03d231e5b7abc34e3f8",
    productId: "69a3cff9cca129a9594bb49c",
    userId: {
      _id: "69d6647afc81a513ff62046e",
      fullName: "Tạ Thị Thanh Loan",
      email: "loan.ta@example.com",
    },
    content:
      "Bao bì đẹp mắt, shop đóng gói kỹ càng. Sản phẩm thật sự chất lượng và thơm lâu.",
    rating: 5,
    createdAt: "2024-07-10T11:20:00.000Z",
    updatedAt: "2024-07-10T11:20:00.000Z",
    __v: 0,
  },
  {
    _id: "69f0e03d231e5b7abc34e3f9",
    productId: "69a3cff9cca129a9594bb49c",
    userId: {
      _id: "69d6647afc81a513ff62046f",
      fullName: "Quách Văn Minh",
      email: "minh.quach@example.com",
    },
    content:
      "Đây là lần thứ 4 mình mua. Sản phẩm đúng chất lượng và ổn định. Shop làm ăn uy tín.",
    rating: 5,
    createdAt: "2024-06-28T08:00:00.000Z",
    updatedAt: "2024-06-28T08:00:00.000Z",
    __v: 0,
  },
  {
    _id: "69f0e03d231e5b7abc34e3fa",
    productId: "69a3cff9cca129a9594bb49c",
    userId: {
      _id: "69d6647afc81a513ff620470",
      fullName: "Lê Thị Ngọc Ánh",
      email: "ngocanh.le@example.com",
    },
    content:
      "Tóc mình da đầu dầu, dùng sản phẩm này nhẹ không bị bết. Rất phù hợp cho da đầu dầu.",
    rating: 4,
    createdAt: "2024-06-12T14:30:00.000Z",
    updatedAt: "2024-06-12T14:30:00.000Z",
    __v: 0,
  },
  {
    _id: "69f0e03d231e5b7abc34e3fb",
    productId: "69a3cff9cca129a9594bb49c",
    userId: {
      _id: "69d6647afc81a513ff620471",
      fullName: "Vũ Thị Ngọc Diệp",
      email: "diep.vu@example.com",
    },
    content:
      "Sản phẩm gây kích ứng nhẹ ở da đầu mình. Có thể do thành phần không phù hợp.",
    rating: 2,
    createdAt: "2024-05-30T10:00:00.000Z",
    updatedAt: "2024-05-30T10:00:00.000Z",
    __v: 0,
  },
  {
    _id: "69f0e03d231e5b7abc34e3fc",
    productId: "69a3cff9cca129a9594bb49c",
    userId: {
      _id: "69d6647afc81a513ff620472",
      fullName: "Hoàng Thị Lan Phương",
      email: "lanphuong.hoang@example.com",
    },
    content:
      "Sản phẩm tuyệt vời! Mùi bưởi thật sự rất dễ chịu. Tóc mềm mượt và ít rụng hơn hẳn.",
    rating: 5,
    createdAt: "2024-05-15T09:45:00.000Z",
    updatedAt: "2024-05-15T09:45:00.000Z",
    __v: 0,
  },
  {
    _id: "69f0e03d231e5b7abc34e3fd",
    productId: "69a3cff9cca129a9594bb49c",
    userId: {
      _id: "69d6647afc81a513ff620473",
      fullName: "Cao Văn Dũng",
      email: "dung.cao@example.com",
    },
    content:
      "Nhận đúng hàng, chất lượng tốt. Dùng thấy tóc mềm và bóng hơn. Sẽ mua lại.",
    rating: 4,
    createdAt: "2024-05-01T08:10:00.000Z",
    updatedAt: "2024-05-01T08:10:00.000Z",
    __v: 0,
  },
];
