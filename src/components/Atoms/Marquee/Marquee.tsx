import React, { ReactNode } from "react";

import "swiper/css";
import "swiper/css/bundle";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";

import styles from "./Marquee.module.scss";
import classNames from "classnames";

type Marquee = {
    value: ReactNode;
};

interface IMarquee extends Omit<SwiperProps, "className"> {
    marqueeContent: Marquee[];
    className?: string;
}

function Marquee({ marqueeContent, className, ...restProps }: IMarquee) {
    return (
        <div
            className={classNames("swiper-marquee", styles.marquee, className)}
        >
            <Swiper
                loop={true}
                spaceBetween={100}
                speed={15000}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                }}
                slidesPerView={"auto"}
                allowTouchMove={false}
                modules={[Autoplay]}
                {...restProps}
            >
                {marqueeContent.length > 0 &&
                    marqueeContent.map((m, i) => (
                        <SwiperSlide key={i}>{m.value}</SwiperSlide>
                    ))}
            </Swiper>
        </div>
    );
}

export default Marquee;
