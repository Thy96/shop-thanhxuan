import React from "react";
import SecondLayout from "@/components/Layout/SecondLayout";
import CategorySidebar from "@/components/Organisms/CategorySidebar/CategorySidebar";
import CtaBanner from "@/components/Organisms/CtaBanner/CtaBanner";
import BlogTemplates from "@/components/Templates/BlogTemplates/BlogTemplates";
import { useCategories } from "@/services/api";

function BlogsPage() {
  const { categories, isError, isLoading } = useCategories();

  return (
    <SecondLayout
      title="Tin tức"
      aside={
        <CategorySidebar
          categories={categories}
          isError={isError}
          isLoading={isLoading}
        />
      }
      bottomContent={<CtaBanner />}
      className="flex-row-reverse"
    >
      <BlogTemplates />
    </SecondLayout>
  );
}

export default BlogsPage;
