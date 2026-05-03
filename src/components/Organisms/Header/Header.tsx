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
            submenu: [
              {
                key: "1-1",
                title: "Sản phẩm mới",
                url: "/san-pham",
              },
              {
                key: "1-2",
                title: "Chăm sóc tóc",
                url: "/san-pham?category=cham-soc-toc",
              },
              {
                key: "1-3",
                title: "Chăm sóc da",
                url: "/san-pham?category=cham-soc-da",
              },
              {
                key: "1-4",
                title: "Tắm và dưỡng thể",
                url: "/san-pham?category=tam-va-duong-the",
              },
            ],
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
        ]}
        rightItems={[
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
