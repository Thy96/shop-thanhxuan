import Image from "next/image";
import Link from "next/link";
import React, { CSSProperties } from "react";

import { Product } from "@/types/types";
import { product } from "@/mocks/product";
import { formatCurrency } from "@/utils/helper";

import styles from "./Product.module.scss";
import classNames from "classnames";

import Title from "../../Title/Title";
import Paragraph from "../../Paragraph/Paragraph";
import Button from "../../Button";
import Icons from "../../Icons/Icons";

interface IProductInfo {
    data?: Product;
    className?: string;
    style?: CSSProperties;
    onChange?: (data: Product) => void;
}

function ProductItem({
    data = product,
    className,
    style,
    onChange,
}: IProductInfo) {
    const handleAddToCart = (data: Product) => {
        onChange?.(data);
    };

    return (
        <div className={classNames(styles.item, className)} style={style}>
            <Link href={data.url} className={styles.archor}>
                <Image
                    src={data.thumbnail}
                    alt={data.title}
                    width={383}
                    height={467}
                    className={styles.thumbnail}
                />
            </Link>
            <div className={styles.box_content}>
                <div className={styles.box_content_left}>
                    <Title level={5} className={styles.box_content_left_title}>
                        {data.title}
                    </Title>
                    <Paragraph
                        level={4}
                        className={styles.box_content_left_des}
                    >
                        {data.decription}
                    </Paragraph>
                    <div className={styles.box_content_left_price}>
                        {!data.sale ||
                            (data.sale > 0 && (
                                <Paragraph level={5} className={styles.sale}>
                                    {formatCurrency(data.sale)}đ
                                </Paragraph>
                            ))}
                        <Paragraph
                            level={5}
                            className={classNames(styles.price, {
                                [styles.line_through]:
                                    data.sale && data.sale > 0,
                            })}
                        >
                            {formatCurrency(data.price)}đ
                        </Paragraph>
                    </div>
                </div>
                <div className={styles.box_content_right}>
                    <Button
                        htmlType="secondary"
                        className={styles.btn_bag}
                        onClick={() => handleAddToCart(data)}
                    >
                        <Icons.ShoppingBagPlus />
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default ProductItem;
