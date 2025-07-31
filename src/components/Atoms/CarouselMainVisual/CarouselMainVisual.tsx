/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { CSSProperties, ReactNode, useRef } from "react";
import { useRouter } from "next/router";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";

import { MainVisual } from "@/types/types";

import styles from "./CarouselMainVisual.module.scss";
import classNames from "classnames";
import Image from "next/image";
import Title from "../Title/Title";
import Paragraph from "../Paragraph/Paragraph";
import Button from "../Button";
import Icons from "../Icons/Icons";

interface ICarouselMainVisual extends Omit<SwiperProps, "className" | "style"> {
    dataSource?: MainVisual[];
    children?: ReactNode;
    className?: {
        wrapper?: string;
    };
    style?: {
        wrapper?: CSSProperties;
    };
}

function CarouselMainVisual({
    dataSource,
    children,
    className,
    style,
    ...restProps
}: ICarouselMainVisual) {
    const route = useRouter();
    const { push } = route;

    const progressLine = useRef<any>(null);
    const onAutoplayTimeLeft = (s: any, time: number, progress: number) => {
        progressLine.current.style.setProperty("--progress", 1 - progress);
    };

    const wrapperClassName = classNames(
        "swiper-container",
        styles.wrapper,
        className
    );

    const handleClick = (url: string) => {
        push(url);
    };

    return (
        <div className={wrapperClassName} style={style?.wrapper}>
            <Swiper
                slidesPerView={"auto"}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                effect={"fade"}
                modules={[Navigation, EffectFade, Autoplay]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
                {...restProps}
            >
                {children
                    ? children
                    : dataSource?.map((product) => (
                          <SwiperSlide
                              className={styles.main_visual}
                              key={product.visual_id}
                              style={{
                                  background: product.visual_background,
                                  color: product.visual_color,
                              }}
                          >
                              <div className={styles.main_visual_left}>
                                  {product.visual_media.video ? (
                                      <video
                                          autoPlay={true}
                                          playsInline={true}
                                          loop={true}
                                          muted={true}
                                          className={styles.full_width}
                                      >
                                          <source
                                              src={product.visual_media.video}
                                              type="video/mp4"
                                          />
                                      </video>
                                  ) : (
                                      <Image
                                          src={
                                              product.visual_media.image?.url
                                                  ? product.visual_media.image
                                                        ?.url
                                                  : ""
                                          }
                                          alt={
                                              product.visual_media.image
                                                  ?.caption
                                                  ? product.visual_media.image
                                                        ?.caption
                                                  : ""
                                          }
                                          width={1024}
                                          height={1024}
                                          className={styles.full_width}
                                      />
                                  )}
                              </div>
                              <div className={styles.main_visual_right}>
                                  <div className={styles.info}>
                                      <Title
                                          level={5}
                                          className={styles.sub_title}
                                      >
                                          {product.visual_sub_title.toUpperCase()}
                                      </Title>
                                      <Title
                                          level={2}
                                          className={styles.main_title}
                                      >
                                          {product.visual_main_title}
                                      </Title>
                                      <Paragraph
                                          level={5}
                                          className={styles.content}
                                      >
                                          {product.visual_content}
                                      </Paragraph>
                                      <Button
                                          className={styles.btn_visual}
                                          onClick={() =>
                                              handleClick(
                                                  product.visual_link_archor
                                              )
                                          }
                                          postfixIcon={<Icons.ArrowRightIcon />}
                                      >
                                          Xem ngay
                                      </Button>
                                  </div>
                              </div>
                          </SwiperSlide>
                      ))}
                <div className={styles.autoplay_progress}>
                    <div className={styles.line} ref={progressLine}></div>
                </div>
            </Swiper>
            {typeof restProps.navigation === "object" && (
                <>
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                </>
            )}
        </div>
    );
}

export default CarouselMainVisual;
