import React from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./HomeTemplates.module.scss";
import classNames from "classnames";

import { dataMainVisual } from "@/lib/database/mainvisual";

import CarouselMainVisual from "@/components/Atoms/CarouselMainVisual/CarouselMainVisual";
import GsapWrapper from "@/components/Atoms/Gsap/GsapWrapper";
import Paragraph from "@/components/Atoms/Paragraph/Paragraph";
import Icons from "@/components/Atoms/Icons/Icons";
import Marquee from "@/components/Atoms/Marquee/Marquee";
import useViewport from "@/hooks/useHooks/useViewPort";
import Title from "@/components/Atoms/Title/Title";
import Button from "@/components/Atoms/Button";

function HomeTemplates() {
  const widthUI = useViewport();

  return (
    <>
      <CarouselMainVisual dataSource={dataMainVisual} navigation />
      {widthUI.isTablet || widthUI.isMobile ? (
        <>
          <Marquee
            className={styles.marquee}
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
                }
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
                }
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
                }
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
              }
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
              }
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
              }
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
              }
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
              }
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
            className={`italic textbox__heading 
             text-typo-heading lg:!text-8xl !text-5xl ${styles.title_brand}`}
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
            className={`flex justify-center w-full lg:!p-10 !p-6 mt-8 lg:mt-15 max-w-2xl lg:!text-4xl uppercase ${styles.button}`}
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
    </>
  );
}

export default HomeTemplates;
