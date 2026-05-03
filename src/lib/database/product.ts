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
];
