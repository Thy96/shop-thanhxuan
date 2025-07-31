import React from "react";
import styles from "./Hamburger.module.scss";
import classNames from "classnames";

interface Props {
    isOpen: boolean;
    toggle: () => void;
}

const Hamburger = ({ isOpen, toggle }: Props) => {
    return (
        <div
            className={classNames(styles.hamburger, { [styles.open]: isOpen })}
            onClick={toggle}
        >
            <span />
            <span />
            <span />
        </div>
    );
};

export default Hamburger;
