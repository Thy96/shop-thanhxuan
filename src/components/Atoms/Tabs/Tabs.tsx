import React, { ReactNode, useEffect, useMemo, useState } from "react";

import styles from "./Tabs.module.scss";
import classNames from "classnames";
import Paragraph from "../Paragraph/Paragraph";
import { TabItem } from "@/types/types";

interface ITabs {
    items?: TabItem[];
    className?: string;
    activeKey?: string;
    defaultActiveKey: string;
    onChange?: (key: TabItem) => void;
}

function Tab({
    items = [],
    className,
    activeKey,
    defaultActiveKey = "0",
    onChange,
}: ITabs) {
    const [key, setKey] = useState<string>(activeKey || defaultActiveKey);

    const contentItem: ReactNode | undefined = useMemo(() => {
        return items[Number(key)]?.children;
    }, [items, key]);

    const handleTabClick = (itemKey: string) => {
        setKey(itemKey);
        if (onChange) {
            const selectedItem = items.find((item) => item.key === itemKey);
            if (selectedItem) {
                onChange(selectedItem);
            }
        }
    };

    useEffect(() => {
        if (activeKey !== undefined && activeKey !== key) {
            setKey(activeKey);
        }
    }, [key, activeKey]);

    return (
        <div className={classNames(styles.wrapper, className)}>
            <ul className={styles.tabs}>
                {items?.map((item, i) => (
                    <li
                        key={i}
                        className={classNames(styles.tab)}
                        onClick={() => handleTabClick(item.key)}
                    >
                        <Paragraph
                            level={3}
                            className={classNames(styles.tab_panel, {
                                [styles.active]: key === item.key,
                            })}
                        >
                            {item.label}
                        </Paragraph>
                    </li>
                ))}
            </ul>
            {items[Number(key)]?.children && (
                <div className={styles.content}>{contentItem}</div>
            )}
        </div>
    );
}

export default Tab;
