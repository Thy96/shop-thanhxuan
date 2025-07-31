import React from "react";
import Link from "next/link";

import { Blog } from "@/types/types";
import { blog } from "@/mocks/blogs";

import styles from "./Blog.module.scss";
import classNames from "classnames";

import Image from "next/image";
import Title from "../../Title/Title";
import Paragraph from "../../Paragraph/Paragraph";

interface IBlogInfo {
    data?: Blog;
    className?: string;
}

function BoxItem({ data = blog, className }: IBlogInfo) {
    return (
        <Link href={data.url} className={classNames(styles.item, className)}>
            <figure className={styles.image}>
                <Image
                    src={data?.thumbnail}
                    alt={data?.title}
                    width={300}
                    height={500}
                />
            </figure>
            <div className={styles.cate_date}>
                <span className={styles.cate}>{data?.category.cate_name}</span>
                <span className={styles.date}>{data?.date}</span>
            </div>
            <Title level={4} className={styles.title}>
                {data.title}
            </Title>
            <Paragraph level={5} className={styles.des}>
                {data.description}
            </Paragraph>
        </Link>
    );
}

export default BoxItem;
