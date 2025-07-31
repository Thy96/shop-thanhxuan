import React from "react";

import { Product } from "@/types/types";

import classNames from "classnames";
import styles from "./Product.module.scss";

import ProductItem from "./ProductItem";

interface IProduct {
    dataSource?: Product[];
    className?: string;
    onChange?: (data: Product) => void;
}

function Card({ dataSource = [], className, onChange }: IProduct) {
    return (
        <div className={classNames(styles.wrapper, className)}>
            {dataSource.map((product, i) => (
                <ProductItem key={i} data={product} onChange={onChange} />
            ))}
        </div>
    );
}

export default Card;
