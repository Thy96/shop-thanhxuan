import React, { useEffect, useState } from "react";

import Menu from "@/components/Atoms/Menu/Menu";

import styles from "./Header.module.scss";
import classNames from "classnames";

import Logo from "@/components/Atoms/Logo/Logo";
import Image from "next/image";

interface IHeader {
  className?: string;
}

function Header({ className }: IHeader) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={classNames(
        styles.wrapper,
        {
          [styles.active]: isActive,
        },
        className,
      )}
    >
      <Menu
        items={[
          {
            key: "1",
            title: "Sản phẩm",
            url: "/san-pham",
          },
          {
            key: "2",
            title: "Bài viết",
            url: "/bai-viet",
          },
          {
            key: "3",
            title: "Liên Hệ",
            url: "/lien-he",
          },
          {
            key: "4",
            title: "Giỏ hàng",
            url: "/gio-hang",
          },
          {
            key: "5",
            title: "Đăng nhập",
            url: "/dang-nhap",
          },
        ]}
        className={styles.menu_head}
      >
        <div className={styles.logo}>
          <Logo>
            <Image src="/img/svg/logo.svg" width={152} height={60} alt="logo" />
          </Logo>
        </div>
      </Menu>
    </header>
  );
}

export default Header;
