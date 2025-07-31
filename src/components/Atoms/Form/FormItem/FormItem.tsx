import React, {
  ChangeEvent,
  cloneElement,
  isValidElement,
  ReactElement,
  ReactNode,
} from "react";
import {
  FieldError,
  RegisterOptions,
  Path,
  useFormContext,
} from "react-hook-form";
import { SelectOption } from "@/types/types";

import styles from "./FormItem.module.scss";
import classNames from "classnames";

import InputText from "../../Input/InputText/InputText";
import Paragraph from "../../Paragraph/Paragraph";
import Select from "../../Select/Select";
import TextArea from "../../TextArea/TextArea";

export type ChangeTargetElement =
  | HTMLInputElement
  | HTMLTextAreaElement
  | HTMLSelectElement;

interface FormItemProps<T extends Record<string, unknown>> {
  name: Path<T>;
  label?: string;
  type?: string;
  placeholder?: string;
  validation?: RegisterOptions<T, Path<T>>;
  allowClear?: boolean;
  value?: string | number;
  options?: SelectOption[];
  isLoading?: boolean;
  children?: ReactNode;
  className?: string;
  onchange?: (e: ChangeEvent<ChangeTargetElement>) => void;
}

interface CustomInputProps {
  placeholder?: string;
  allowClear?: boolean;
  onChange?: (e: ChangeEvent<ChangeTargetElement>) => void;
  error?: FieldError;
  [key: string]: unknown;
}

function FormItem<T extends Record<string, unknown>>({
  name,
  label,
  type = "text",
  placeholder,
  validation,
  allowClear,
  isLoading,
  children,
  className,
  onchange,
  ...restProps
}: FormItemProps<T>) {
  const {
    register,
    formState: { errors },
  } = useFormContext<T>();
  const fieldError = errors[name] as FieldError | undefined;
  const registerResult = register(name, validation);

  // Nếu có children, clone và inject props
  let content: ReactNode = null;

  if (children && isValidElement(children)) {
    content = cloneElement(children as ReactElement<CustomInputProps>, {
      ...registerResult,
      ...restProps,
      placeholder,
      onChange: onchange,
      error: fieldError,
    });
  } else {
    // Optional fallback nếu bạn muốn xử lý khi không có children
    switch (type) {
      case "textarea":
        content = (
          <TextArea
            id={name}
            placeholder={placeholder}
            allowClear={allowClear}
            className={{
              area: classNames({
                [styles.error_placeholder]: fieldError,
              }),
            }}
            {...registerResult}
            {...restProps}
          />
        );
        break;
      case "select":
        content = (
          <Select
            {...registerResult}
            name={name}
            options={restProps.options}
            placeholder={
              isLoading
                ? `Đang tải ${placeholder?.replace("Chọn ", "")}...`
                : `${placeholder}`
            }
            onChange={onchange}
            value={restProps.value || ""}
          />
        );
        break;
      default:
        content = (
          <InputText
            id={name}
            type={type}
            placeholder={placeholder}
            allowClear={allowClear}
            className={{
              input: classNames({
                [styles.error_placeholder]: fieldError,
              }),
            }}
            {...registerResult}
            {...restProps}
          />
        );
    }
  }
  return (
    <div className={classNames(styles.form_item, className)}>
      {label && <label htmlFor={name}>{label}</label>}

      {content}

      {fieldError && (
        <Paragraph level={6} className={styles.error}>
          {fieldError.message || "Bạn cần nhập đúng thông tin vào đây!"}
        </Paragraph>
      )}
    </div>
  );
}

export default FormItem;
