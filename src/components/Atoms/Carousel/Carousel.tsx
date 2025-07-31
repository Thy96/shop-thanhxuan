import React, { CSSProperties } from "react";

import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Scrollbar } from "swiper/modules";

import styles from "./Carousel.module.scss";
import classNames from "classnames";

interface ICarousel<T>
    extends Omit<SwiperProps, "className" | "style" | "onChange"> {
    dataSource?: T[];
    renderItem?: (item: T, index: number) => React.ReactNode;
    className?: {
        wrapper?: string;
    };
    style?: {
        wrapper?: CSSProperties;
    };
}

function Carousel<T>({
    dataSource = [],
    className,
    style,
    renderItem,
    ...restProps
}: ICarousel<T>) {
    const wrapperClassName = classNames("swiper-container", className?.wrapper);
    return (
        <div className={wrapperClassName} style={style?.wrapper}>
            <Swiper
                slidesPerView={"auto"}
                spaceBetween={30}
                scrollbar={true}
                className={classNames("mySwiper", styles.swiper_container)}
                navigation={true}
                modules={[Navigation, Scrollbar, Autoplay]}
                {...restProps}
            >
                {dataSource?.map((data, i) => (
                    <SwiperSlide className={styles.swiper_slide} key={i}>
                        {renderItem?.(data, i)}
                    </SwiperSlide>
                ))}
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

export default Carousel;
