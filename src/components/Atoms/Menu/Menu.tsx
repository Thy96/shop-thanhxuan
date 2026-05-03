"use client";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import Link from "next/link";

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
  const [openChild, setOpenChild] = useState<string | null>(null);
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

  const renderPanels = () =>
    [...items, ...rightItems]
      .filter((item) => item.submenu)
      .map((item, index) => {
        const isSubOpen = openMenu === item.title;
        const activeChild = item.submenu!.find(
          (sub) => sub.title === openChild && sub.submenu?.length,
        );
        return (
          <React.Fragment key={index}>
            <div
              className={classNames(styles.sub_menu_overlay, {
                [styles.sub_menu_overlay_open]: isSubOpen,
              })}
              onClick={() => {
                setOpenMenu(null);
                setOpenChild(null);
              }}
            />

            {/* Panel cấp 2: submenu */}
            <div
              className={classNames(styles.sub_menu, {
                [styles.sub_menu_open]: isSubOpen,
              })}
            >
              <div className={styles.sub_menu_header}>
                <button
                  className={styles.back_btn}
                  onClick={() => setOpenMenu(null)}
                >
                  <Icons.StickHeadLeftIcon width={16} height={16} />
                  <span>Quay lại</span>
                </button>
                <span className={styles.sub_menu_title}>{item.title}</span>
                <button
                  className={styles.sub_menu_close}
                  onClick={() => {
                    setIsOpen(false);
                    setOpenMenu(null);
                    setOpenChild(null);
                  }}
                >
                  &#x2715;
                </button>
              </div>
              <ul className={styles.sub_menu_list}>
                {item.submenu!.map((subitem, idx) => {
                  const hasChildren =
                    subitem.submenu && subitem.submenu.length > 0;
                  return (
                    <li key={idx} className={styles.sub_menu_item}>
                      {hasChildren ? (
                        <div
                          className={classNames(styles.sub_menu_item_row, {
                            [styles.sub_menu_item_row_active]:
                              openChild === subitem.title,
                          })}
                          onClick={() =>
                            setOpenChild((prev) =>
                              prev === subitem.title ? null : subitem.title,
                            )
                          }
                        >
                          <span>{subitem.title}</span>
                          <span className={styles.sub_menu_arrow}>
                            <Icons.StickHeadRightIcon width={16} height={16} />
                          </span>
                        </div>
                      ) : (
                        <Link
                          className={styles.sub_menu_item_row}
                          href={subitem.url || "#"}
                          onClick={() => setOpenMenu(null)}
                        >
                          {subitem.title}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Panel cấp 3: children trượt vào từ trái */}
            <div
              className={classNames(styles.child_panel, {
                [styles.child_panel_open]: !!activeChild && isSubOpen,
              })}
            >
              <div className={styles.sub_menu_header}>
                <button
                  className={styles.back_btn}
                  onClick={() => setOpenChild(null)}
                >
                  <Icons.StickHeadLeftIcon width={16} height={16} />
                  <span>Quay lại</span>
                </button>
                <span className={styles.child_panel_title}>
                  {activeChild?.title}
                </span>
                <button
                  className={styles.sub_menu_close}
                  onClick={() => {
                    setIsOpen(false);
                    setOpenMenu(null);
                    setOpenChild(null);
                  }}
                >
                  &#x2715;
                </button>
              </div>
              <ul className={styles.sub_menu_list}>
                {activeChild?.submenu?.map((child, cidx) => (
                  <li key={cidx} className={styles.sub_menu_item}>
                    <Link
                      className={styles.sub_menu_item_row}
                      href={child.url || "#"}
                      onClick={() => {
                        setOpenMenu(null);
                        setOpenChild(null);
                      }}
                    >
                      {child.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </React.Fragment>
        );
      });

  const renderMobilePanelItems = (itemList: MenuItem[]) =>
    itemList.map((item, index) => (
      <li
        key={index}
        className={styles.mobile_panel_item}
        onClick={() => {
          if (item.submenu) toggleSubMenu(item.title);
        }}
      >
        {item.submenu ? (
          <>
            <span className={styles.mobile_panel_item_label}>{item.title}</span>
            <span className={styles.mobile_panel_item_arrow}>
              <Icons.StickHeadRightIcon width={16} height={16} />
            </span>
          </>
        ) : (
          <Link href={item.url || "#"} onClick={() => setIsOpen(false)}>
            {item.title}
          </Link>
        )}
      </li>
    ));

  const renderItems = (itemList: MenuItem[]) =>
    itemList.map((item, index) => {
      const isSubOpen = openMenu === item.title;
      return (
        <li
          key={index}
          onClick={() => toggleSubMenu(item.title)}
          className={classNames(
            styles.main_menu_item,
            isSubOpen && styles.click_active,
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
              <span
                className={classNames(styles.icon, {
                  [styles.icon_rotated]: isSubOpen,
                })}
              >
                <Icons.StickHeadDownIcon width={21} height={21} />
              </span>
            )}
          </Link>
        </li>
      );
    });

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

      {/* Mobile: overlay */}
      <div
        className={classNames(styles.mobile_overlay, {
          [styles.mobile_overlay_open]: isOpen,
        })}
        onClick={() => {
          setIsOpen(false);
          setOpenMenu(null);
          setOpenChild(null);
        }}
      />

      {/* Mobile: slide panel */}
      <div
        className={classNames(styles.mobile_panel, {
          [styles.mobile_panel_open]: isOpen,
        })}
      >
        <div className={styles.mobile_panel_header}>
          <button
            className={styles.mobile_panel_close}
            onClick={() => setIsOpen(false)}
          >
            &#x2715;
          </button>
        </div>
        <ul className={styles.mobile_panel_list}>
          {renderMobilePanelItems([...items, ...rightItems])}
        </ul>
      </div>

      {/* Submenu panels */}
      {renderPanels()}
    </nav>
  );
}

export default Menu;
