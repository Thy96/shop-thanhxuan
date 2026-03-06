import React from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./HomeTemplates.module.scss";
import classNames from "classnames";

import { dataMainVisual } from "@/lib/database/mainvisual";
import { dataBrands } from "@/lib/database/brand";

import useViewport from "@/hooks/useHooks/useViewPort";
import { useBestsellers, useBlogs } from "@/services/api";

import CarouselMainVisual from "@/components/Atoms/CarouselMainVisual/CarouselMainVisual";
import GsapWrapper from "@/components/Atoms/Gsap/GsapWrapper";
import Paragraph from "@/components/Atoms/Paragraph/Paragraph";
import Icons from "@/components/Atoms/Icons/Icons";
import Marquee from "@/components/Atoms/Marquee/Marquee";
import Title from "@/components/Atoms/Title/Title";
import Button from "@/components/Atoms/Button";
import Carousel from "@/components/Atoms/Carousel/Carousel";
import BlogListItem from "@/components/Atoms/Card/Blog/BlogItem";
import ProductItem from "@/components/Atoms/Card/Product/ProductItem";
import { useRouter } from "next/navigation";

const arr = [
  {
    thumbnail: "/img/top/Artboard_1.jpg",
    title: "Dầu dừa bến tre",
  },
  {
    thumbnail: "/img/top/Artboard_2.jpg",
    title: "Vỏ bưởi",
  },
  {
    thumbnail: "/img/top/Artboard_3.jpg",
    title: "Hoa hồng",
  },
  {
    thumbnail: "/img/top/Artboard_1.jpg",
    title: "Bí đao",
  },
];

const slogan = [
  {
    content:
      "“Cocoon Vietnam – Từ mầm xanh làm đẹp đến giải thưởng danh giá tại ELLE Beauty Awards 2021”",
    brand: "elle vietnam",
  },
  {
    content:
      "“Cocoon Vietnam – Từ mầm xanh làm đẹp đến giải thưởng danh giá tại ELLE Beauty Awards 2021”",
    brand: "elle vietnam",
  },
];

function HomeTemplates() {
  const widthUI = useViewport();
  const routes = useRouter();
  const { bestsellers: bestsellerData, isLoadingBestSellers } =
    useBestsellers();
  const { data: data, isLoadingBlogs } = useBlogs();

  return (
    <>
      <CarouselMainVisual dataSource={dataMainVisual} navigation />
      {widthUI.isTablet || widthUI.isMobile ? (
        <>
          <Marquee
            className={styles.marquee}
            spaceBetween={50}
            breakpoints={{
              1024: {
                spaceBetween: 100,
              },
            }}
            marqueeContent={[
              {
                value: (
                  <Image
                    src={"/img/top/home_marquee.svg"}
                    alt="bimg"
                    width={1846}
                    height={100}
                  />
                ),
              },
              {
                value: (
                  <Image
                    src={"/img/top/home_marquee.svg"}
                    alt="bimg"
                    width={1846}
                    height={100}
                  />
                ),
              },
            ]}
          />
          <GsapWrapper
            className={classNames(styles.gsap_wrapper, styles.gsap_wrapper_sp)}
            animate={(target, gsap) => {
              if (!target) return;

              const box1 = target.querySelector(".box1");
              const box2 = target.querySelector(".box2");
              const box3 = target.querySelector(".box3");

              gsap.fromTo(
                box1,
                {
                  y: 100,
                },
                {
                  y: -100,
                  duration: 0.2,
                  ease: "power1.inOut",
                  scrollTrigger: {
                    trigger: target,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 0.5,
                    // markers: true,
                  },
                },
              );
              gsap.fromTo(
                box2,
                {
                  y: 50,
                },
                {
                  y: -115,
                  duration: 0.2,
                  ease: "power1.inOut",
                  scrollTrigger: {
                    trigger: target,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 0.5,
                    // markers: true,
                  },
                },
              );
              gsap.fromTo(
                box3,
                {
                  y: 100,
                },
                {
                  y: -50,
                  duration: 0.2,
                  ease: "power1.inOut",
                  scrollTrigger: {
                    trigger: target,
                    start: "top bottom",
                    end: "bottom center",
                    scrub: 0.5,
                    // markers: true,
                  },
                },
              );
            }}
          >
            <div className={styles.gsap_img}>
              <div className={`box1 ${styles.img1}`}>
                <Image
                  src={"/img/top/dao_nho.png"}
                  alt="img"
                  width={1484}
                  height={788}
                />
              </div>
              <div className={`box2 ${styles.img2}`}>
                <Image
                  src={"/img/top/dau_goi_chinh.png"}
                  alt="img"
                  width={1484}
                  height={788}
                />
              </div>
              <div className={`box3 ${styles.img3}`}>
                <Image
                  src={"/img/top/traicay_phiasau.png"}
                  alt="img"
                  width={1484}
                  height={788}
                />
              </div>
            </div>
            <div className={`${styles.title}`}>
              Gel tắm <br />
              đường thốt nốt <br />
              An Giang
            </div>
            <div className={`${styles.content}`}>
              <Paragraph level={2}>
                Từ những tinh thể đường thốt nốt An Giang nhuyễn mịn, giàu chất
                ngăn ngừa oxy hóa và khoáng chất, kết hợp cùng vitamin B5 và B3,
                gel tắm nhẹ nhàng làm sạch, bổ sung độ ẩm, giúp làn da luôn mềm
                mại, sáng mịn và tràn đầy sức sống. Hương thơm tươi mát, thư
                giãn mang lại cảm giác bừng tỉnh, như được thiên nhiên vỗ về sau
                một ngày dài.
              </Paragraph>
              <Link href={""} className={styles.link}>
                <span className={styles.buy}>Mua ngay</span>
                <span className={styles.icon}>
                  <Icons.ArrowRightIcon />
                </span>
              </Link>
            </div>
          </GsapWrapper>
        </>
      ) : (
        <GsapWrapper
          className={classNames(styles.gsap_wrapper, styles.gsap_wrapper_pc)}
          animate={(target, gsap) => {
            if (!target) return;

            const box = target.querySelector(".box");
            const box1 = target.querySelector(".box1");
            const box2 = target.querySelector(".box2");
            const box3 = target.querySelector(".box3");
            const box4 = target.querySelector(".box4");

            gsap.fromTo(
              box,
              {
                y: 150,
              },
              {
                y: 0,
                duration: 0.2,
                ease: "power1.inOut",
                scrollTrigger: {
                  trigger: target,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 0.5,
                  // markers: true,
                },
              },
            );
            gsap.fromTo(
              box1,
              {
                y: -150,
              },
              {
                y: 0,
                duration: 0.2,
                ease: "power1.inOut",
                scrollTrigger: {
                  trigger: target,
                  start: "top center",
                  end: "bottom top",
                  scrub: 0.5,
                  // markers: true,
                },
              },
            );
            gsap.fromTo(
              box2,
              {
                y: -50,
              },
              {
                y: 0,
                duration: 0.2,
                ease: "power1.inOut",
                scrollTrigger: {
                  trigger: target,
                  start: "top bottom",
                  end: "bottom center",
                  scrub: 0.5,
                  // markers: true,
                },
              },
            );
            gsap.fromTo(
              box3,
              { y: 50 },
              {
                y: 0,
                duration: 0.2,
                ease: "power1.inOut",
                scrollTrigger: {
                  trigger: target,
                  start: "top center",
                  end: "bottom center",
                  scrub: 0.5,
                  // markers: true,
                },
              },
            );
            gsap.fromTo(
              box4,
              { y: 200 },
              {
                y: 0,
                duration: 0.2,
                ease: "power1.inOut",
                scrollTrigger: {
                  trigger: target,
                  start: "top center",
                  end: "bottom center",
                  scrub: 0.5,
                  // markers: true,
                },
              },
            );
          }}
        >
          <div className="absolute inset-0 left-[50%] transform-[translateX(-50%)]">
            <div className={`box1 ${styles.img1}`}>
              <Image
                src={"/img/top/dao_nho.png"}
                alt="img"
                width={1484}
                height={788}
              />
            </div>
            <div className={`box2 ${styles.img2}`}>
              <Image
                src={"/img/top/dau_goi_chinh.png"}
                alt="img"
                width={1484}
                height={788}
              />
            </div>
            <div className={`box3 ${styles.img3}`}>
              <Image
                src={"/img/top/traicay_phiasau.png"}
                alt="img"
                width={1484}
                height={788}
              />
            </div>
          </div>
          <div className={`box ${styles.title}`}>
            Gel tắm <br />
            đường thốt nốt <br />
            An Giang
          </div>
          <div className={`box4 ${styles.content}`}>
            <Paragraph level={2}>
              Từ những tinh thể đường thốt nốt An Giang nhuyễn mịn, giàu chất
              ngăn ngừa oxy hóa và khoáng chất, kết hợp cùng vitamin B5 và B3,
              gel tắm nhẹ nhàng làm sạch, bổ sung độ ẩm, giúp làn da luôn mềm
              mại, sáng mịn và tràn đầy sức sống. Hương thơm tươi mát, thư giãn
              mang lại cảm giác bừng tỉnh, như được thiên nhiên vỗ về sau một
              ngày dài.
            </Paragraph>
            <Link href={""} className={styles.link}>
              <span className={styles.buy}>Mua ngay</span>
              <span className={styles.icon}>
                <Icons.ArrowRightIcon />
              </span>
            </Link>
          </div>
        </GsapWrapper>
      )}

      <div
        className={`flex items-center justify-center brand-box lg:p-40 py-20 px-10 ${styles.bg_brand}`}
      >
        <div
          className={`flex flex-col items-center justify-center text-center rounded-md textbox lg:p-15 p-10 w-full lg:max-w-5xl max-w-4xl m-auto ${styles.bg_primary}`}
        >
          <Title
            level={2}
            className={`italic textbox__heading text-typo-heading lg:!text-8xl !text-5xl ${styles.title_brand}`}
          >
            Triết lý
            <span
              className={`block not-italic font-medium uppercase text-typo-heading lg:inline-block ml-7 ${styles.sub_brand}`}
            >
              thương hiệu
            </span>
          </Title>
          <Paragraph
            level={3}
            className={`textbox__description text-gray-500 mt-8 lg:!mt-10 lg:!text-3xl !text-2xl`}
          >
            Là những người yêu thiên nhiên và đam mê khám phá các nguồn nguyên
            liệu đặc hữu của Việt Nam, chúng tôi luôn kiên định với những triết
            lý trên hành trình tìm vẻ đẹp thật sự của làn da.
          </Paragraph>
          <Button
            className={`lg:!p-10 !p-6 mt-8 lg:mt-15 max-w-2xl lg:!text-4xl ${styles.button}`}
            htmlType="tertiary"
            postfixIcon={<Icons.ArrowRightIcon />}
          >
            Tìm hiểu thêm
          </Button>
        </div>
      </div>

      {widthUI.isPC && (
        <Marquee
          className={styles.marquee}
          marqueeContent={[
            {
              value: (
                <Image
                  src={"/img/top/home_marquee_pc.svg"}
                  alt="bimg"
                  width={2954}
                  height={160}
                />
              ),
            },
            {
              value: (
                <Image
                  src={"/img/top/home_marquee_pc.svg"}
                  alt="bimg"
                  width={2954}
                  height={160}
                />
              ),
            },
          ]}
        />
      )}

      <div
        className={`text-center md:pt-50 pt-10 md:pb-50 pb-20 ${styles.brand}`}
      >
        <h2 className={`${styles.certification} mb-4`}>
          Chứng nhận bởi các tổ chức Quốc tế
        </h2>
        <Carousel
          dataSource={dataBrands}
          slidesPerView={1}
          breakpoints={{
            900: {
              slidesPerView: 3,
            },
          }}
          navigation={false}
          autoplay
          renderItem={(item, index) => (
            <div key={index} className={`${styles.carousel_item}`}>
              <picture className="block">
                <Image
                  src={item.image}
                  width={230}
                  height={230}
                  alt={item.title}
                  className="m-auto"
                />
              </picture>
              <h3 className={`${styles.carousel_title}`}>{item.title}</h3>
              <h4 className={`${styles.carousel_subtitle}`}>{item.subtitle}</h4>
              <p className="md:mt-4 md:px-2.5 text-stone-500 not-md:text-2xl px-10 mt-6">
                {item.content}
              </p>
            </div>
          )}
        />
      </div>

      <Link href="#">
        <Image
          src="/img/top/Banner_Thu_hoi_vo_chai_PC.jpg"
          alt="vo chai"
          width={1920}
          height={600}
          className="hidden md:block"
        />
        <Image
          src="/img/top/Banner_Thu_hoi_vo_chai_SP.jpg"
          alt="vo chai"
          width={767}
          height={900}
          className="block md:hidden"
        />
      </Link>

      <div className={`${styles.bestselling_products}`}>
        <div className={`${styles.bestselling_products_box}`}>
          <h2 className={`${styles.bestselling_products_title}`}>
            <span>Sản phẩm</span>
            <br />
            Bán Chạy
          </h2>
          <p className={`${styles.bestselling_products_content}`}>
            Cocoon tự hào khi các sản phẩm mà chúng tôi tạo ra mang đến những
            thay đổi tuyệt vời trên làn da, mái tóc của bạn.
          </p>
        </div>

        <div className={`${styles.bestselling_products_list}`}>
          {isLoadingBestSellers ? (
            "đang tải"
          ) : (
            <Carousel
              dataSource={bestsellerData}
              slidesPerView={1}
              breakpoints={{
                768: {
                  slidesPerView: "auto",
                },
              }}
              className={{
                container: styles.bestselling_products_container,
                item: styles.bestselling_products_item,
              }}
              renderItem={(item) => <ProductItem data={item} key={item.id} />}
            />
          )}
        </div>
      </div>

      <Link
        href="#"
        className="ml-5 mr-5 lg:ml-16 lg:mr-16 md:ml-7 md:mr-7 block"
      >
        <Image
          src="/img/top/banner_green_living_ca.jpg"
          alt="banner"
          width={1920}
          height={600}
        />
      </Link>

      <div className={`${styles.story}`}>
        <div className={`${styles.story_list}`}>
          <Carousel
            dataSource={arr}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            className={{
              container: styles.story_container,
              item: styles.story_item,
            }}
            renderItem={(item, index) => (
              <div key={index}>
                <figure>
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    width={280}
                    height={341}
                  />
                </figure>
                <h3>{item.title}</h3>
              </div>
            )}
          />
        </div>

        <div className={`${styles.story_box}`}>
          <h2 className={`${styles.story_title}`}>
            <span>Câu chuyện</span>
            <br />
            nguyên liệu
          </h2>
          <p className={`${styles.story_content}`}>
            {`"Hồn Việt trong chai"`}
            <br /> Chúng tôi viết nên câu chuyện về hoa trái đặc hữu của Việt
            Nam, rất gần gũi và quen thuộc từ tên gọi, mùi hương và cả vùng đất
            sản sinh ra chúng.
          </p>
          <Button
            className={`lg:!p-10 !p-6 mt-8 lg:mt-15 lg:!text-4xl ${styles.button}`}
            htmlType="secondary"
            postfixIcon={<Icons.ArrowRightIcon />}
          >
            Tìm hiểu thêm
          </Button>
        </div>
      </div>

      <div className={styles.posts}>
        <div className={styles.posts_head}>
          <h2 className={styles.posts_title}>Bài viết mới nhất</h2>
          <Button
            onClick={() => routes.push("/bai-viet")}
            className={`lg:!p-10 !p-6 lg:!text-4xl ${styles.button}`}
            htmlType="secondary"
            postfixIcon={<Icons.ArrowRightIcon />}
          >
            Tất cả bài viết
          </Button>
        </div>

        <div className={styles.posts_list}>
          {isLoadingBlogs ? (
            <p>Đang tải tin tức</p>
          ) : (
            <Carousel
              dataSource={data}
              slidesPerView={1}
              pagination={true}
              loop={true}
              scrollbar={false}
              autoplay
              speed={1000}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                1025: {
                  slidesPerView: 3,
                },
              }}
              className={{
                item: styles.posts_item,
              }}
              renderItem={(item, i) => <BlogListItem key={i} data={item} />}
            />
          )}
        </div>
      </div>

      <div className={styles.slogan}>
        <Carousel
          dataSource={slogan}
          slidesPerView={1}
          pagination={true}
          loop={true}
          scrollbar={false}
          navigation={false}
          spaceBetween={0}
          autoplay
          speed={1000}
          className={{
            container: styles.slogan_wrapper,
            item: styles.slogan_item,
          }}
          renderItem={(item, i) => (
            <div key={i}>
              <h2 className={styles.slogan_content}>{item.content}</h2>
              <div className={styles.slogan_brand}>{item.brand}</div>
            </div>
          )}
        />
      </div>
    </>
  );
}

export default HomeTemplates;
