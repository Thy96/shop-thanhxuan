import React, { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.scss";
import classNames from "classnames";

type BaseButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type">;

interface Props extends BaseButtonProps {
    /**
     * The display html type of the button
     */
    htmlType?: "primary" | "secondary" | "tertiary";
    /**
     * The display type of the button
     */
    type?: "button" | "submit" | "reset";
    /**
     * Children elements to be rendered inside the button.
     */
    children: React.ReactNode;

    /**
     * Whether to show an icon on the left.
     * Disable when variant is underline
     */
    prefixIcon?: React.ReactNode;

    /**
     * Whether to show an icon on the right.
     * Disable when variant is underline
     */
    postfixIcon?: React.ReactNode;

    /**
     * Whether the button is disabled or not
     */
    disabled?: boolean;

    /**
     * The className of the button root element.
     */

    className?: string;

    /**
     * Inline style of wrapper element
     */
    style?: React.CSSProperties;
}

function Button({
    htmlType = "primary",
    type = "button",
    children,
    prefixIcon,
    postfixIcon,
    className,
    disabled,
    style,
    ...restProps
}: Props) {
    if (disabled) {
        Object.keys(restProps).forEach((key) => {
            if (
                key.startsWith("on") &&
                typeof restProps[key as keyof typeof restProps] === "function"
            ) {
                delete restProps[key as keyof typeof restProps];
            }
        });
    }

    const classNamesButton = classNames(
        styles.button,
        styles[htmlType],
        { [styles.disabled]: disabled },
        className
    );

    const prefixIconNode = prefixIcon ? (
        <span className={styles.prefix_icon}>{prefixIcon}</span>
    ) : null;

    const childNode = children ? (
        <span className={styles.text_children}>{children}</span>
    ) : null;

    const postfixIconNode = postfixIcon ? (
        <span className={styles.postfix_icon}>{postfixIcon}</span>
    ) : null;

    return (
        <button
            type={type}
            className={classNamesButton}
            disabled={disabled}
            style={style}
            {...restProps}
        >
            {prefixIconNode}
            {childNode}
            {postfixIconNode}
        </button>
    );
}

export default Button;
