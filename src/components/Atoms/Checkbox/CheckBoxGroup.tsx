import React, { useEffect, useState } from "react";
import styles from "./Checkbox.module.scss";
import CheckBox from "./CheckBox";
import classNames from "classnames";

export interface ICheckBoxOption {
    value: string;
    label?: string;
    disabled?: boolean;
}

export interface ICheckBoxGroup {
    /**
     * Used for setting the currently selected value
     */
    value?: string[];
    /**
     * Default selected value
     */
    defaultValue?: string[];
    /**
     * Specifies options
     */
    options?: ICheckBoxOption[];
    /**
     * Custom className
     */
    className?: string;
    /**
     * The callback function that is triggered when the state changes
     */
    children?: React.ReactNode;
    onChange?: (checkedValue: string[]) => void;
}

function CheckBoxGroup({
    options = [],
    defaultValue = [],
    className,
    children,
    onChange,
    ...restProps
}: ICheckBoxGroup) {
    const [selected, setSelected] = useState<string[]>(
        restProps.value || defaultValue || []
    );

    useEffect(() => {
        if ("value" in restProps) {
            setSelected(restProps.value || []);
        }
    }, [restProps.value]);

    useEffect(() => {
        onChange?.(selected);
    }, [onChange, selected]);

    const handleInputChange = (value: string) => {
        setSelected((prev) => {
            const isChecked = selected.includes(value);
            if (isChecked) {
                return selected.filter((item) => item !== value);
            } else {
                return [...prev, value];
            }
        });
        onChange?.(selected);
    };

    return (
        <div className={classNames(styles.checkbox_group, className)}>
            {children
                ? children
                : options.map((option, index) => (
                      <CheckBox
                          value={option.value}
                          label={option.label}
                          key={index}
                          checked={selected.includes(option.value)}
                          onChange={() => handleInputChange(option.value)}
                          disabled={option.disabled}
                      />
                  ))}
        </div>
    );
}

export default CheckBoxGroup;
