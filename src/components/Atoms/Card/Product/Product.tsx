import React from "react";

import { Product } from "@/types/types";

import classNames from "classnames";
import styles from "./Product.module.scss";

import ProductItem from "./ProductItem";

interface IProduct {
  dataSource?: Product[];
  className?: string;
}

function ProductList({ dataSource = [], className }: IProduct) {
  return (
    <div className={classNames(styles.wrapper, className)}>
      {dataSource.map((product, i) => (
        <ProductItem key={i} data={product} />
      ))}
    </div>
  );
}

export default ProductList;
