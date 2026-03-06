"use client";

import { useState } from "react";
import styles from "./CategorySidebar.module.scss";
import classNames from "classnames";
import { Categories } from "@/types/types";

export default function CategorySidebar({
  categories,
}: {
  categories?: Categories[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.wrapper}>
      {/* Header */}
      <button onClick={() => setOpen(!open)} className={styles.header}>
        <span className={styles.header_title}>Danh mục</span>
        <span className={styles.icon}>{open ? "−" : "+"}</span>
      </button>

      {/* Content */}
      <div className={classNames(styles.content, open && styles.open)}>
        <ul className={styles.list}>
          {categories &&
            categories.map((cate) => (
              <li
                key={cate._id}
                className={styles.item}
                onClick={() => setOpen(false)}
              >
                {cate.name}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
