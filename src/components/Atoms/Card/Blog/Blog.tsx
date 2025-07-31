import React from "react";

import { Blog } from "@/types/types";

import styles from "./Blog.module.scss";
import classNames from "classnames";

import BoxItem from "./BlogItem";

interface IBlog {
    dataSource?: Blog[];
    className?: string;
}

function Box({ dataSource = [], className }: IBlog) {
    console.log(dataSource);

    return (
        <div className={classNames(styles.wrapper, className)}>
            {dataSource?.map((blog) => (
                <BoxItem key={blog.id} data={blog} />
            ))}
        </div>
    );
}

export default Box;
