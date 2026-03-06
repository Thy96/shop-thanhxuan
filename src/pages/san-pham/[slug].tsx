import BaseLayout from "@/components/Layout/BaseLayout";
import CtaBanner from "@/components/Organisms/CtaBanner/CtaBanner";
import ProductDetailTemplate from "@/components/Templates/ProductDetailTemplates/ProductDetailTemplates";

function ProductDetailPage() {
  return (
    <BaseLayout>
      <ProductDetailTemplate />
      <CtaBanner />
    </BaseLayout>
  );
}

export default ProductDetailPage;
