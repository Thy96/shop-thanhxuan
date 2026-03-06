import React from "react";
import Link from "next/link";
import Image from "next/image";

import { Blog } from "@/types/types";
import { blog } from "@/mocks/blogs";
import { formatDate } from "@/utils/helper";

import styles from "./Blog.module.scss";
import classNames from "classnames";

import Title from "../../Title/Title";

interface IBlogInfo {
  data?: Blog;
  className?: string;
}

function BlogListItem({ data = blog, className }: IBlogInfo) {
  return (
    <Link
      href={`/bai-viet/${data.slug}`}
      className={classNames(styles.item, className)}
    >
      <figure className={styles.image}>
        <Image
          src={data?.thumbnail || "/img/common/no-image.jpg"}
          alt={data?.title}
          width={300}
          height={500}
        />
      </figure>
      <div className={styles.cate_date}>
        <div className={styles.cate}>{data?.category.name}</div>
        <div className={styles.date}>{formatDate(data?.createdAt)}</div>
      </div>
      <Title level={4} className={styles.title}>
        {data.title}
      </Title>
    </Link>
  );
}

export default BlogListItem;
