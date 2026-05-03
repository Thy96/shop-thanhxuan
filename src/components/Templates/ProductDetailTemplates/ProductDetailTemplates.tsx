import { useRouter } from "next/router";
import { useState, useEffect, useRef, memo } from "react";
import Link from "next/link";
import Image from "next/image";

import { useProductDetail } from "@/services/api";
import { formatCurrency } from "@/utils/helper";

import { mockComments, product } from "@/lib/database/product";

import styles from "./ProductDetailTemplates.module.scss";
import classNames from "classnames";

import Button from "@/components/Atoms/Button";
import Icons from "@/components/Atoms/Icons/Icons";
import Title from "@/components/Atoms/Title/Title";
import Paragraph from "@/components/Atoms/Paragraph/Paragraph";
import Carousel from "@/components/Atoms/Carousel/Carousel";

/* ─────────────────────────────────────────────
   CommentSection – isolated component so that
   filter/page state changes never re-render the
   product info / carousel above.
───────────────────────────────────────────── */
const CommentSection = memo(function CommentSection() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [commentPage, setCommentPage] = useState(1);
  const [ratingFilter, setRatingFilter] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const pendingPage = useRef<number>(commentPage);
  const pendingFilter = useRef<number | null>(ratingFilter);

  const COMMENTS_PER_PAGE = 5;
  const filteredComments = ratingFilter
    ? mockComments.filter((c) => c.rating === ratingFilter)
    : mockComments;
  const totalCommentPages = Math.ceil(
    filteredComments.length / COMMENTS_PER_PAGE,
  );
  const pagedComments = filteredComments.slice(
    (commentPage - 1) * COMMENTS_PER_PAGE,
    commentPage * COMMENTS_PER_PAGE,
  );

  useEffect(() => {
    const token = localStorage.getItem("auth_token");
    setIsLoggedIn(!!token);
  }, []);

  function triggerTransition(applyChange: () => void) {
    setIsAnimating(true);
    setTimeout(() => {
      applyChange();
      setIsAnimating(false);
    }, 300);
  }

  function handlePageChange(page: number) {
    pendingPage.current = page;
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    triggerTransition(() => {
      setCommentPage(page);
    });
  }

  function handleRatingFilter(rating: number | null) {
    pendingFilter.current = rating;
    triggerTransition(() => {
      setRatingFilter(rating);
      setCommentPage(1);
    });
  }

  function handleSubmitComment(e: React.FormEvent) {
    e.preventDefault();
    setCommentText("");
  }

  return (
    <section className={styles.product_comments} ref={sectionRef}>
      <div className={styles.wrapper}>
        <Title level={2} className={styles.comments_title}>
          Nhận xét từ khách hàng ({mockComments.length})
        </Title>

        {/* Rating filter tabs */}
        <div className={styles.comments_filter}>
          <button
            className={classNames(styles.filter_tab, {
              [styles.filter_tab_active]: ratingFilter === null,
            })}
            onClick={() => handleRatingFilter(null)}
          >
            Tất cả
          </button>
          {[5, 4, 3, 2, 1].map((star) => {
            const count = mockComments.filter((c) => c.rating === star).length;
            return (
              <button
                key={star}
                className={classNames(styles.filter_tab, {
                  [styles.filter_tab_active]: ratingFilter === star,
                })}
                onClick={() => handleRatingFilter(star)}
              >
                {star}★
                <span className={styles.filter_tab_count}>({count})</span>
              </button>
            );
          })}
        </div>

        {/* Comment list */}
        <div
          className={classNames(styles.comments_list, {
            [styles.comments_list_animating]: isAnimating,
          })}
        >
          {pagedComments.length === 0 ? (
            <p className={styles.comments_empty}>
              Chưa có nhận xét nào cho mức đánh giá này.
            </p>
          ) : (
            pagedComments.map((comment) => (
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
            ))
          )}
        </div>

        {/* Pagination */}
        {totalCommentPages > 1 && (
          <div className={styles.comments_pagination}>
            <button
              className={classNames(styles.pagination_btn, {
                [styles.pagination_btn_disabled]: commentPage === 1,
              })}
              onClick={() => handlePageChange(Math.max(1, commentPage - 1))}
              disabled={commentPage === 1}
            >
              <Icons.ArrowLeftIcon />
            </button>

            {Array.from({ length: totalCommentPages }).map((_, i) => (
              <button
                key={i}
                className={classNames(styles.pagination_btn, {
                  [styles.pagination_btn_active]: commentPage === i + 1,
                })}
                onClick={() => handlePageChange(i + 1)}
              >
                {i + 1}
              </button>
            ))}

            <button
              className={classNames(styles.pagination_btn, {
                [styles.pagination_btn_disabled]:
                  commentPage === totalCommentPages,
              })}
              onClick={() =>
                handlePageChange(Math.min(totalCommentPages, commentPage + 1))
              }
              disabled={commentPage === totalCommentPages}
            >
              <Icons.ArrowRightIcon />
            </button>
          </div>
        )}

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
                <label className={styles.comment_label}>Nhận xét của bạn</label>
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
  );
});

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
