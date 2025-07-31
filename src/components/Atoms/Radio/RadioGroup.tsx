import React, { ChangeEvent, useState } from "react";
import styles from "./Radio.module.scss";
import classNames from "classnames";
import Radio from "./Radio";

export interface RadioOption {
    value?: string;
    label?: React.ReactNode;
    disabled?: boolean;
}
interface IRadioGroup {
    /**
     * Children elements to be rendered inside the Paragraph.
     */
    children?: React.ReactNode;
    /**
     * Used for setting the currently selected value
     */
    value?: string | number;
    /**
     * Set children optional
     */
    options?: RadioOption[];
    /**
     * Custom className
     */
    className?: string;
    /**
     * Disable all radio buttons
     */
    disabled?: boolean;
    /**
     * The name property of all input[type="radio"] children
     */
    name?: string;
    /**
     * The callback function that is triggered when the state changes
     */
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

function RadioGroup({
    children,
    value = "",
    options,
    className,
    disabled,
    onChange,
}: IRadioGroup) {
    const [selected, setSelected] = useState(value);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSelected(e.target.value);
        onChange?.(e);
    };

    let childrenToRender = children;

    if (options && options.length > 0) {
        childrenToRender = options.map((option, index) => {
            return (
                <Radio
                    key={index}
                    value={option.value}
                    disabled={disabled}
                    checked={option.value === selected}
                    onChange={handleChange}
                >
                    {option.label}
                </Radio>
            );
        });
    }

    return (
        <div
            className={classNames(styles.radio, styles.radio_group, className)}
        >
            {childrenToRender}
        </div>
    );
}

export default RadioGroup;
