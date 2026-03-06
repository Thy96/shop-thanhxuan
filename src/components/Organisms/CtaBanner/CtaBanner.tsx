import Link from "next/link";
import styles from "./CtaBanner.module.scss";

export default function CtaBanner() {
  return (
    <div className={styles.wrapper}>
      <span className={styles.text}>
        Không tìm thấy được dòng sản phẩm mà bạn cần hoặc thích hợp với da của
        bạn?
      </span>

      <Link href={"/contact"} className={styles.button}>
        Liên hệ với chúng tôi
      </Link>
    </div>
  );
}
