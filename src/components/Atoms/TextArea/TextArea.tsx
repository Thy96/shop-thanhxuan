import React, {
  ChangeEvent,
  CSSProperties,
  JSX,
  TextareaHTMLAttributes,
  useState,
} from "react";

import styles from "./TextArea.module.scss";
import Icons from "../Icons/Icons";
import { useFormContext } from "react-hook-form";
import classNames from "classnames";

interface TextAreaProps
  extends Omit<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    "value" | "className" | "style"
  > {
  value?: string | number;
  allowClear?:
    | boolean
    | {
        onClear: (value: string) => void;
      };
  className?: {
    wrapper?: string;
    area?: string;
  };
  style?: {
    wrapper?: CSSProperties;
    area?: CSSProperties;
  };
  postfixIcon?: JSX.Element;
}

function TextArea({
  value,
  allowClear,
  className,
  style,
  onChange,
  ...restProps
}: TextAreaProps) {
  const { trigger, setValue, watch } = useFormContext() || {
    trigger: () => {},
    setValue: () => {},
    watch: () => {},
  };

  // Sử dụng watch để theo dõi giá trị của textarea nếu có trong hook form
  const currentValue = watch(restProps.name as string);

  // Tạo trạng thái cho textarea khi không sử dụng REACT HOOK FORM
  const [textAreaValue, setTextAreaValue] = useState<string | number>(
    value !== undefined ? String(value) : ""
  );

  const wrapperClassName = classNames(styles.area_wrapper, className?.wrapper);

  const areaClassName = classNames(styles.base_area, className?.area);

  // Hàm thay đổi giá trị của input
  function handleChange(e: ChangeEvent<HTMLTextAreaElement>) {
    setTextAreaValue(e.target.value);
    onChange?.(e);
  }

  function hanldeClear() {
    const fieldName = restProps.name!;
    setValue(fieldName, "", {
      shouldValidate: true,
      shouldDirty: true,
    });

    if (typeof allowClear === "object" && allowClear.onClear) {
      allowClear.onClear("");
    }

    trigger(fieldName);
    setTextAreaValue(""); // Reset giá trị textarea
  }

  const clearIcon =
    allowClear && (currentValue || textAreaValue) ? (
      <button type="button" onClick={allowClear ? hanldeClear : undefined}>
        <Icons.CloseIcon />
      </button>
    ) : null;

  return (
    <div className={wrapperClassName} style={style?.wrapper}>
      <textarea
        {...restProps}
        value={textAreaValue}
        onChange={handleChange}
        style={style?.area}
        className={areaClassName}
        rows={10}
      />
      <span className={styles.icons}>{clearIcon}</span>
    </div>
  );
}

export default TextArea;
