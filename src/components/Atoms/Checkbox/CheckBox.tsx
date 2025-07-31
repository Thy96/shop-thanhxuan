import React, {
    ChangeEvent,
    CSSProperties,
    DetailedHTMLProps,
    InputHTMLAttributes,
    useEffect,
    useState,
} from "react";

import styles from "./Checkbox.module.scss";
import classNames from "classnames";

type TCheckBox = DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
>;
interface Props
    extends Omit<
        TCheckBox,
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
    children?: React.ReactNode;
    /**
     * Used for setting the currently selected value
     */
    value?: string | number;
    /**
     * The name property of all input[type="checkbox"] children
     */
    label?: React.ReactNode;
    /**
     * If true, the component is checked.
     */
    checked?: boolean;
    /**
     * 	The default checked state. Use when the component is not controlled.
     */
    defaultChecked?: boolean;
    /**
     * 	If true, the component is disabled.
     */
    disabled?: boolean;
    /**
     * 	If true, the input element is required.
     */
    required?: boolean;
    /**
     * Custom className
     */
    className?: string;
    /**
     * Inline style of wrapper element
     */
    style?: CSSProperties;
    /**
     * The callback function that is triggered when the state changes
     */
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const CheckBox = ({
    children,
    value,
    label,
    onChange,
    checked,
    defaultChecked,
    className,
    style,
    ...restProps
}: Props) => {
    const [isChecked, setIsChecked] = useState(
        checked ?? defaultChecked ?? false
    );

    useEffect(() => {
        setIsChecked(checked ?? defaultChecked ?? false);
    }, [checked, defaultChecked]);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.stopPropagation();
        setIsChecked(e.target.checked);
        if (typeof onChange === "function") {
            onChange?.(e);
        }
    };

    return (
        <label
            className={classNames(
                styles.checkbox_label,
                {
                    [styles.check]: isChecked,
                    [styles.disabled]: restProps.disabled,
                },
                className
            )}
            style={style}
        >
            <input
                type="checkbox"
                value={value}
                checked={isChecked}
                onChange={handleInputChange}
                {...restProps}
            />
            {children ? <span>{children}</span> : <span>{label}</span>}
        </label>
    );
};

export default CheckBox;
