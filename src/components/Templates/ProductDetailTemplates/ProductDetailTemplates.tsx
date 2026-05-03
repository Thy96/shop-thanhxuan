import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import { useProductDetail } from "@/services/api";
import { formatCurrency } from "@/utils/helper";

import styles from "./ProductDetailTemplates.module.scss";
import classNames from "classnames";

import Button from "@/components/Atoms/Button";
import Icons from "@/components/Atoms/Icons/Icons";
import Title from "@/components/Atoms/Title/Title";
import Paragraph from "@/components/Atoms/Paragraph/Paragraph";
import Carousel from "@/components/Atoms/Carousel/Carousel";
import { product } from "@/lib/database/product";

interface Comment {
  _id: string;
  productId: string;
  userId: {
    _id: string;
    fullName: string;
    email: string;
  };
  content: string;
  rating: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const mockComments: Comment[] = [
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
];

export default function ProductDetailTemplate() {
  const router = useRouter();
  const { slug } = router.query;
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [commentText, setCommentText] = useState("");

  const productSlug =
    router.isReady && typeof slug === "string" ? slug : undefined;

  const {} = useProductDetail(productSlug);

  useEffect(() => {
    const token = localStorage.getItem("auth_token");
    setIsLoggedIn(!!token);
  }, []);

  function handleSubmitComment(e: React.FormEvent) {
    e.preventDefault();
    setCommentText("");
  }

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

      {/* COMMENTS SECTION */}
      <section className={styles.product_comments}>
        <div className={styles.wrapper}>
          <Title level={2} className={styles.comments_title}>
            Nhận xét từ khách hàng ({mockComments.length})
          </Title>

          {/* Comment list */}
          <div className={styles.comments_list}>
            {mockComments.map((comment) => (
              <div key={comment._id} className={styles.comment_item}>
                <div className={styles.comment_header}>
                  <div className={styles.comment_avatar}>
                    {comment.userId.fullName.charAt(0)}
                  </div>
                  <div className={styles.comment_meta}>
                    <span className={styles.comment_author}>
                      {comment.userId.fullName}
                    </span>
                    <span className={styles.comment_date}>
                      {new Date(comment.createdAt).toLocaleDateString("vi-VN")}
                    </span>
                  </div>
                  <div className={styles.comment_rating}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        className={classNames(styles.star, {
                          [styles.star_filled]: i < comment.rating,
                        })}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
                <p className={styles.comment_text}>{comment.content}</p>
              </div>
            ))}
          </div>

          {/* Comment form or login */}
          <div className={styles.comments_action}>
            <Title level={3} className={styles.comments_form_title}>
              Viết nhận xét
            </Title>
            {isLoggedIn ? (
              <form
                onSubmit={handleSubmitComment}
                className={styles.comment_form}
              >
                <div className={styles.comment_form_group}>
                  <label className={styles.comment_label}>
                    Nhận xét của bạn
                  </label>
                  <textarea
                    className={styles.comment_textarea}
                    rows={4}
                    placeholder="Chia sẻ cảm nhận của bạn về sản phẩm..."
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  htmlType="tertiary"
                  className={styles.comment_submit}
                >
                  Gửi nhận xét
                </Button>
              </form>
            ) : (
              <div className={styles.comments_login}>
                <p className={styles.comments_login_text}>
                  Vui lòng đăng nhập để viết nhận xét
                </p>
                <Button
                  type="button"
                  htmlType="tertiary"
                  className={styles.comments_login_btn}
                  onClick={() => router.push("/dang-nhap")}
                >
                  Đăng nhập
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
