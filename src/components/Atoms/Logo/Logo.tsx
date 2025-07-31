import React, { ReactNode } from "react";
import Link from "next/link";

import styles from "./Logo.module.scss";
import classNames from "classnames";

interface ILogo {
  className?: string;
  children?: ReactNode;
}

function Logo({ children, className }: ILogo) {
  return (
    <Link href="/" className={classNames(styles.logo, className)}>
      {children}
    </Link>
  );
}

export default Logo;
