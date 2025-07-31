import classNames from "classnames";
import React, {
    ChangeEvent,
    CSSProperties,
    DetailedHTMLProps,
    InputHTMLAttributes,
} from "react";

import styles from "./Radio.module.scss";

type TRadio = DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
>;

interface Props
    extends Omit<
        TRadio,
        | "accept"
        | "alt"
        | "autoComplete"
        | "autoFocus"
        | "capture"
        | "crossOrigin"
        | "enterKeyHint"
        | "form"
        | "formAction"
        | "formEncType"
        | "formMethod"
        | "formNoValidate"
        | "formTarget"
        | "height"
        | "key"
        | "list"
        | "max"
        | "maxLength"
        | "min"
        | "minLength"
        | "multiple"
        | "pattern"
        | "placeholder"
        | "readOnly"
        | "size"
        | "src"
        | "step"
        | "type"
        | "name"
        | "width"
    > {
    /**
     * The value associated with the Radio option
     */
    value?: string | number;
    /**
     * Children elements to be rendered inside the Paragraph.
     */
    children?: React.ReactNode;
    /**
     * Inline style of wrapper element
     */
    style?: CSSProperties;
}

function Radio({
    children,
    value,
    className,
    checked,
    defaultChecked,
    disabled,
    style,
    onChange,
    ...restProps
}: Props) {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (typeof onChange === "function") {
            onChange?.(e);
        }
    };

    return (
        <label
            style={style}
            className={classNames(
                styles.input_style,
                {
                    [styles.disabled]: disabled,
                    [styles.active]: checked ?? defaultChecked,
                },
                className
            )}
        >
            <input
                {...restProps}
                type="radio"
                value={value}
                // Property checked has not been processed for radio groups from the children side.
                checked={checked}
                onChange={handleChange}
            />
            {children !== undefined ? children : null}
        </label>
    );
}

export default Radio;
