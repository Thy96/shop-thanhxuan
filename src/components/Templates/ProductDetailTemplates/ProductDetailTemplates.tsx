import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import { useProductDetail } from "@/services/api";
import { formatCurrency } from "@/utils/helper";

import { product } from "@/lib/database/product";

import styles from "./ProductDetailTemplates.module.scss";
import classNames from "classnames";

import Button from "@/components/Atoms/Button";
import Icons from "@/components/Atoms/Icons/Icons";
import Title from "@/components/Atoms/Title/Title";
import Paragraph from "@/components/Atoms/Paragraph/Paragraph";
import Carousel from "@/components/Atoms/Carousel/Carousel";
import CommentSection from "@/components/Organisms/CommentSection/CommentSection";

/* ─────────────────────────────────────────────
   Main page component – no comment state here
───────────────────────────────────────────── */
export default function ProductDetailTemplate() {
  const router = useRouter();
  const { slug } = router.query;

  const productSlug =
    router.isReady && typeof slug === "string" ? slug : undefined;

  const {} = useProductDetail(productSlug);

  return (
    <div className={styles.product}>
      <div className={classNames(styles.wrapper, styles.product_cols)}>
        {/* LEFT */}
        <div className={styles.product_image}>
          <Carousel
            dataSource={product.images}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
            }}
            loop
            scrollbar={false}
            renderItem={(item) => (
              <Image
                src={item.url}
                alt={`${product.title} - ${item.alt}`}
                width={583}
                height={808}
              />
            )}
          />
        </div>

        {/* RIGHT */}
        <div className={styles.product_info}>
          <Title level={2} className={styles.product_category}>
            {product.category?.cate_name}
          </Title>

          <Title level={1} className={styles.product_title}>
            {product.title}
          </Title>

          <Paragraph level={1} className={styles.product_price}>
            {formatCurrency(product.price)} đ
          </Paragraph>

          <Paragraph level={3} className={styles.product_description}>
            {product.decription}
          </Paragraph>

          <div className={styles.product_brand}>
            <Image
              src={"/img/svg/animal_test_free.svg"}
              width={80}
              height={80}
              alt=""
            />
            <Image
              src={"/img/svg/leaping_bunny.svg"}
              width={80}
              height={80}
              alt=""
            />
            <Image
              src={"/img/svg/vegan_society.svg"}
              width={80}
              height={80}
              alt=""
            />
          </div>

          <Button
            type="button"
            htmlType="tertiary"
            postfixIcon={<Icons.ShoppingBagPlus />}
            className={styles.product_add}
          >
            THÊM VÀO GIỎ – {formatCurrency(product.price)} đ
          </Button>

          <div className={styles.product_social}>
            <Title level={3} className={styles.product_share}>
              Chia sẻ
            </Title>
            <Link href="https://www.facebook.com/" target="_blank">
              <Icons.FacebookIcon />
            </Link>
            <Link href="https://www.instagram.com/" target="_blank">
              <Icons.InstagramIcon />
            </Link>
          </div>
        </div>
      </div>

      <div className={classNames(styles.product_editor)}>
        <div className={styles.wrapper}>
          {product.content && (
            <div dangerouslySetInnerHTML={{ __html: product.content }} />
          )}
        </div>
      </div>

      <CommentSection />
    </div>
  );
}
