import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { useBlogs } from "@/services/api";

import BlogList from "@/components/Atoms/Card/Blog/Blog";
import Pagination from "@/components/Organisms/Pagination/Pagination";

function BlogTemplates() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const pageFromUrl = Number(searchParams.get("page")) || 1;
  const [page, setPage] = useState(pageFromUrl);

  useEffect(() => {
    setPage(pageFromUrl);
  }, [pageFromUrl]);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);

    router.push(`?page=${newPage}`, { scroll: false });
  };

  const { blogs, isError, isLoadingBlogs, pagination } = useBlogs(page, 10);

  if (isLoadingBlogs) return <div>Loading...</div>;
  if (isError) return <div>Không tìm thấy bài viết</div>;

  return (
    <>
      <BlogList dataSource={blogs} />
      <Pagination
        currentPage={page}
        totalPages={pagination.totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
}

export default BlogTemplates;
