"use client";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import useViewport from "@/hooks/useHooks/useViewPort";
import { MenuItem } from "@/types/types";

import styles from "./Menu.module.scss";
import classNames from "classnames";

import Hamburger from "../Hamburger/Hamburger";
import Icons from "../Icons/Icons";
import ClientOnly from "../ClientOnly/ClientOnly";
import { useRouter } from "next/router";

interface IMenu {
  items?: MenuItem[];
  rightItems?: MenuItem[];
  className?: string;
  children?: ReactNode;
}

function Menu({ items = [], rightItems = [], className, children }: IMenu) {
  return (
    <ClientOnly>
      <ClientMenu items={items} rightItems={rightItems} className={className}>
        {children}
      </ClientMenu>
    </ClientOnly>
  );
}

function ClientMenu({
  items = [],
  rightItems = [],
  className,
  children,
}: IMenu) {
  const [isOpen, setIsOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  useViewport();
  const router = useRouter();

  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const toggleSubMenu = (title: string) => {
    setOpenMenu((prev) => (prev === title ? null : title));
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenMenu(null); // đóng submenu
      }
    };

    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const renderSubMenu = (submenu: MenuItem[]) => (
    <>
      <motion.div
        className={styles.triangle_up}
        initial={{ height: 0, opacity: 0.3 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.5 }}
      />
      <motion.ul
        className={styles.sub_menu}
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        {submenu.map((subitem, index) => (
          <li key={index} className={styles.sub_menu_item}>
            <Link href={subitem.url || "#"}>{subitem.title}</Link>
          </li>
        ))}
      </motion.ul>
    </>
  );

  const renderItems = (itemList: MenuItem[]) =>
    itemList.map((item, index) => (
      <li
        key={index}
        onClick={() => toggleSubMenu(item.title)}
        className={classNames(
          styles.main_menu_item,
          openMenu === item.title && styles.click_active,
          {
            [styles.active]: router.pathname === item.url,
          },
        )}
      >
        <Link
          href={item.url || "#"}
          onClick={(e) => {
            if (!item.url) {
              e.preventDefault();
            }
          }}
        >
          <span className={styles.menu_title}>{item.title}</span>
          {item.submenu && (
            <motion.span
              className={styles.icon}
              animate={{
                rotate: openMenu === item.title ? 180 : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              <Icons.StickHeadDownIcon width={21} height={21} />
            </motion.span>
          )}
        </Link>
        <AnimatePresence>
          {item.submenu &&
            openMenu === item.title &&
            renderSubMenu(item.submenu)}
        </AnimatePresence>
      </li>
    ));

  const renderMainMenu = (isShow: boolean) =>
    isShow && (
      <motion.ul
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.4 }}
        className={classNames(styles.main_menu, {
          [styles.open]: isOpen,
        })}
      >
        {renderItems([...items, ...rightItems])}
      </motion.ul>
    );

  return (
    <nav ref={menuRef} className={classNames(styles.menu_wrapper, className)}>
      {/* Desktop: left nav */}
      <ul className={classNames(styles.main_menu, styles.left_nav)}>
        {renderItems(items)}
      </ul>

      {/* Center: logo */}
      <div className={styles.logo_center}>{children}</div>

      {/* Desktop: right nav */}
      <ul className={classNames(styles.main_menu, styles.right_nav)}>
        {renderItems(rightItems)}
      </ul>

      {/* Mobile: hamburger (hidden on desktop via CSS) */}
      <Hamburger isOpen={isOpen} toggle={toggleMenu} />

      {/* Mobile: combined dropdown */}
      <AnimatePresence>{renderMainMenu(isOpen)}</AnimatePresence>
    </nav>
  );
}

export default Menu;
