import { Blog } from "@/types/types";

export const getBlogFromDB = () => {
    const blog: Blog[] = [
        {
            id: "1",
            thumbnail: "/img/top/2_Banner_Website_Banner_vuong_1c0e6d20bb.jpg",
            title: 'Chương trình "Ửng hồng Không ửng đỏ" - chung tay chăm sóc trẻ em vùng cao',
            date: "01/01/2025 01:01",
            category: {
                cate_id: "1",
                cate_name: "Cocoon",
                cate_slug: "Cocoon",
            },
            description:
                'Chương trình "Ửng Hồng Không Ửng Đỏ"  được Cocoon và UNESCO-CEP triển khai nhằm hướng đến một mục tiêu thiết thực là xây dựng sân chơi an toàn, sạch sẽ cho trẻ em vùng cao, góp phần nâng cao điều kiện học tập và mang lại niềm vui cho trẻ em vùng cao',
            content:
                '<p><span style="color: rgb(8, 8, 9);">Cocoon và Trung tâm UNESCO Hợp tác Giáo dục và Văn hoá Việt Nam (UNESCO-CEP) hân hạnh thông báo về sự hợp tác trong chương trình mang tên “</span><strong style="color: rgb(8, 8, 9);">Ửng Hồng Không Ửng Đỏ”</strong><span style="color: rgb(8, 8, 9);">. Hành trình này được khởi tạo để cùng hướng đến các mục tiêu nhân văn – nơi yêu thương được sẻ chia, điều kiện sống và học tập của trẻ em vùng cao được cải thiện, và những giá trị bền vững được lan tỏa qua những hành động:</span></p><div data-v-10a0dbf2="" data-v-3cc699ee=""><img alt="Chương trình &quot;Ửng hồng Không ửng đỏ&quot; - chung tay chăm sóc trẻ em vùng cao" class="block rounded-md lazyLoad isLoaded" style="margin:auto;" data-v-10a0dbf2="" src="https://image.cocoonvietnam.com/uploads/Cover_Social_Ung_Hong_8d8cb722d4.jpg"> <!----></div>',
            url: "https://google.com",
        },
        {
            id: "2",
            thumbnail:
                "/img/top/Promotion_Buoi_bo_ket_BANNER_WEB_de9e3acd88.jpg",
            title: 'Chương trình "Ửng hồng Không ửng đỏ" - chung tay chăm sóc trẻ em vùng cao',
            date: "01/01/2025 01:01",
            category: {
                cate_id: "2",
                cate_name: "Làm đẹp",
                cate_slug: "lam-dep",
            },
            description:
                'Chương trình "Ửng Hồng Không Ửng Đỏ"  được Cocoon và UNESCO-CEP triển khai nhằm hướng đến một mục tiêu thiết thực là xây dựng sân chơi an toàn, sạch sẽ cho trẻ em vùng cao, góp phần nâng cao điều kiện học tập và mang lại niềm vui cho trẻ em vùng cao',
            content:
                '<p><span style="color: rgb(8, 8, 9);">Cocoon và Trung tâm UNESCO Hợp tác Giáo dục và Văn hoá Việt Nam (UNESCO-CEP) hân hạnh thông báo về sự hợp tác trong chương trình mang tên “</span><strong style="color: rgb(8, 8, 9);">Ửng Hồng Không Ửng Đỏ”</strong><span style="color: rgb(8, 8, 9);">. Hành trình này được khởi tạo để cùng hướng đến các mục tiêu nhân văn – nơi yêu thương được sẻ chia, điều kiện sống và học tập của trẻ em vùng cao được cải thiện, và những giá trị bền vững được lan tỏa qua những hành động:</span></p><div data-v-10a0dbf2="" data-v-3cc699ee=""><img alt="Chương trình &quot;Ửng hồng Không ửng đỏ&quot; - chung tay chăm sóc trẻ em vùng cao" class="block rounded-md lazyLoad isLoaded" style="margin:auto;" data-v-10a0dbf2="" src="https://image.cocoonvietnam.com/uploads/Cover_Social_Ung_Hong_8d8cb722d4.jpg"> <!----></div>',
            url: "https://youtube.com",
        },
    ];

    return blog;
};
