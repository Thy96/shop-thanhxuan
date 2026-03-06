import React from "react";
import styles from "./Pagination.module.scss";
import classNames from "classnames";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  maxVisible?: number; // desktop
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  maxVisible = 5,
}: PaginationProps) => {
  if (totalPages <= 1) return null;

  /* ===== DESKTOP LOGIC ===== */
  const half = Math.floor(maxVisible / 2);

  let start = Math.max(currentPage - half, 1);
  const end = Math.min(start + maxVisible - 1, totalPages);

  if (end - start + 1 < maxVisible) {
    start = Math.max(end - maxVisible + 1, 1);
  }

  const desktopPages = Array.from(
    { length: end - start + 1 },
    (_, i) => start + i,
  );

  /* ===== MOBILE LOGIC (… 6 [7] 8 …) ===== */
  const mobilePages = [];
  if (currentPage > 1) mobilePages.push(currentPage - 1);
  mobilePages.push(currentPage);
  if (currentPage < totalPages) mobilePages.push(currentPage + 1);

  return (
    <div className={styles.pagination}>
      {/* ================= DESKTOP ================= */}
      <div className={styles.desktop}>
        <button
          className={styles.nav}
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          Prev
        </button>

        {start > 1 && (
          <>
            <button className={styles.page} onClick={() => onPageChange(1)}>
              1
            </button>
            {start > 2 && <span className={styles.dots}>…</span>}
          </>
        )}

        {desktopPages.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={classNames(styles.page, {
              [styles.active]: page === currentPage,
            })}
          >
            {page}
          </button>
        ))}

        {end < totalPages && (
          <>
            {end < totalPages - 1 && <span className={styles.dots}>…</span>}
            <button
              className={styles.page}
              onClick={() => onPageChange(totalPages)}
            >
              {totalPages}
            </button>
          </>
        )}

        <button
          className={styles.nav}
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>

      {/* ================= MOBILE ================= */}
      <div className={styles.mobile}>
        <button
          className={styles.nav}
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          Prev
        </button>
        {currentPage > 2 && <span className={styles.dots}>…</span>}

        {mobilePages.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={classNames(styles.page, {
              [styles.active]: page === currentPage,
            })}
          >
            {page}
          </button>
        ))}

        {currentPage < totalPages - 1 && <span className={styles.dots}>…</span>}
        <button
          className={styles.nav}
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
