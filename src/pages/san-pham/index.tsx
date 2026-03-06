import SecondLayout from "@/components/Layout/SecondLayout";
import CategorySidebar from "@/components/Organisms/CategorySidebar/CategorySidebar";
import CtaBanner from "@/components/Organisms/CtaBanner/CtaBanner";
import ProductTemplates from "@/components/Templates/ProductTemplates/ProductTemplates";

function ProductsPage() {
  return (
    <>
      <SecondLayout
        title="Sản Phẩm"
        aside={<CategorySidebar />}
        bottomContent={<CtaBanner />}
      >
        <ProductTemplates />
      </SecondLayout>
    </>
  );
}

export default ProductsPage;
