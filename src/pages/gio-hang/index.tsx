import SecondLayout from "@/components/Layout/SecondLayout";
import CtaBanner from "@/components/Organisms/CtaBanner/CtaBanner";
import CartTemplates from "@/components/Templates/CartTemplates/CartTemplates";

function CartPage() {
  return (
    <>
      <SecondLayout title="Giỏ hàng" bottomContent={<CtaBanner />}>
        <CartTemplates />
      </SecondLayout>
    </>
  );
}

export default CartPage;
