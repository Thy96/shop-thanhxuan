import React from "react";

import { Blog } from "@/types/types";

import styles from "./Blog.module.scss";
import classNames from "classnames";

import BlogListItem from "./BlogItem";

interface IBlog {
  dataSource?: Blog[];
  className?: string;
}

function BlogList({ dataSource = [], className }: IBlog) {
  return (
    <div className={classNames(styles.wrapper, className)}>
      {dataSource?.map((blog) => (
        <BlogListItem key={blog.id} data={blog} />
      ))}
    </div>
  );
}

export default BlogList;
