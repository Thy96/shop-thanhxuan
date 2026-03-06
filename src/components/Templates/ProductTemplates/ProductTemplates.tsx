import React, { useEffect, useState } from "react";
import ProductList from "@/components/Atoms/Card/Product/Product";
import { useProducts } from "@/services/api";
import Pagination from "@/components/Organisms/Pagination/Pagination";
import { useRouter, useSearchParams } from "next/navigation";

function ProductTemplates() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const pageFromUrl = Number(searchParams.get("page")) || 1;
  const [page, setPage] = useState(pageFromUrl);
  // const [limit, setLimit] = useState(10); // thêm limit product

  useEffect(() => {
    setPage(pageFromUrl);
  }, [pageFromUrl]);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);

    router.push(`?page=${newPage}`, { scroll: false });
  };

  const { products, isLoadingProducts } = useProducts(page, 10);

  if (isLoadingProducts) return <div>Loading...</div>;
  return (
    <>
      <ProductList dataSource={products} />
      <Pagination
        currentPage={page}
        totalPages={10}
        onPageChange={handlePageChange}
      />
    </>
  );
}

export default ProductTemplates;
