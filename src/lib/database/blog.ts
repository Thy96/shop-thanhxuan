import { Blog } from "@/types/types";

export const getBlogFromDB = () => {
  const blog: Blog[] = [
    {
      id: "1",
      thumbnail: "/img/top/post_01.jpg",
      title:
        'Chương trình "Ửng hồng Không ửng đỏ" - chung tay chăm sóc trẻ em vùng cao',
      date: "01/01/2025",
      category: {
        cate_id: "1",
        cate_name: "Cocoon",
        cate_slug: "cocoon",
      },
      content:
        'Chương trình "Ửng Hồng Không Ửng Đỏ"  được Cocoon và UNESCO-CEP triển khai nhằm hướng đến một mục tiêu thiết thực là xây dựng sân chơi an toàn, sạch sẽ cho trẻ em vùng cao, góp phần nâng cao điều kiện học tập và mang lại niềm vui cho trẻ em vùng cao',
      url: "http://localhost:3000/notes",
    },
    {
      id: "2",
      thumbnail: "/img/top/post_01.jpg",
      title:
        'Chương trình "Ửng hồng Không ửng đỏ" - chung tay chăm sóc trẻ em vùng cao',
      date: "01/01/2025",
      category: {
        cate_id: "2",
        cate_name: "Làm đẹp",
        cate_slug: "lam-dep",
      },
      content:
        'Chương trình "Ửng Hồng Không Ửng Đỏ"  được Cocoon và UNESCO-CEP triển khai nhằm hướng đến một mục tiêu thiết thực là xây dựng sân chơi an toàn, sạch sẽ cho trẻ em vùng cao, góp phần nâng cao điều kiện học tập và mang lại niềm vui cho trẻ em vùng cao',
      url: "http://localhost:3000/notes",
    },
    {
      id: "3",
      thumbnail: "/img/top/post_01.jpg",
      title:
        'Chương trình "Ửng hồng Không ửng đỏ" - chung tay chăm sóc trẻ em vùng cao',
      date: "01/01/2025",
      category: {
        cate_id: "1",
        cate_name: "Cocoon",
        cate_slug: "cocoon",
      },
      content:
        'Chương trình "Ửng Hồng Không Ửng Đỏ"  được Cocoon và UNESCO-CEP triển khai nhằm hướng đến một mục tiêu thiết thực là xây dựng sân chơi an toàn, sạch sẽ cho trẻ em vùng cao, góp phần nâng cao điều kiện học tập và mang lại niềm vui cho trẻ em vùng cao',
      url: "http://localhost:3000/notes",
    },
  ];

  return blog;
};
