import React, {
    ChangeEvent,
    ReactNode,
    SelectHTMLAttributes,
    useState,
} from "react";

import styles from "./Select.module.scss";
import classNames from "classnames";

import { SelectOption } from "@/types/types";
import { FieldValues, useFormContext } from "react-hook-form";

type TSelect = Omit<SelectHTMLAttributes<HTMLSelectElement>, "className"> & {
    /**
     * Children elements to be rendered inside the Paragraph.
     */
    children?: ReactNode;
    /**
     * Custom className
     */
    className?: {
        wrapper?: string;
    };
    /**
     * Custom name
     */
    name?: string;
    /**
     * Initial selected option
     */
    defaultValue?: string | number;
    /**
     * Whether disabled select
     */
    disabled?: boolean;
    /**
     * Select options. Will get better perf than jsx definition
     */
    options?: SelectOption[];
    /**
     * Placeholder of select
     */
    placeholder?: ReactNode;
    onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
};

function Select({
    name = "",
    children,
    className,
    defaultValue = "",
    // disabled = true,
    options,
    placeholder,
    onChange,
    ...restProps
}: TSelect) {
    const { register } = useFormContext<FieldValues>() || {}; // Khi không có `FormProvider`, trả về {} thay vì null.
    const isUsingReactHookForm = !!register; // Kiểm tra nếu `register` có sẵn

    const [selectedValue, setSelectedValue] = useState<string | number>(
        defaultValue
    );

    const wrapperClassName = classNames(
        styles.select_wrapper,
        className?.wrapper
    );

    const handleChangeOption = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelectedValue(e.target.value);
        onChange?.(e);
    };

    return (
        <>
            <select
                {...restProps}
                {...(isUsingReactHookForm ? register(name) : {})}
                value={isUsingReactHookForm ? undefined : selectedValue}
                onChange={
                    isUsingReactHookForm
                        ? (e) => {
                              onChange?.(e);
                          }
                        : handleChangeOption
                }
                className={wrapperClassName}
            >
                {children ? (
                    children
                ) : (
                    <>
                        {placeholder && (
                            <option
                                value=""
                                // disabled={disabled}
                                className={styles.disabled}
                            >
                                {placeholder}
                            </option>
                        )}

                        {options?.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </>
                )}
            </select>
        </>
    );
}

export default Select;
