import React, {
  ChangeEvent,
  CSSProperties,
  forwardRef,
  InputHTMLAttributes,
  JSX,
  useState,
} from "react";
import { useFormContext } from "react-hook-form";

import styles from "./InputText.module.scss";
import classNames from "classnames";

import Icons from "../../Icons/Icons";

interface InputProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
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
    input?: string;
  };
  style?: {
    wrapper?: CSSProperties;
    input?: CSSProperties;
  };
  postfixIcon?: JSX.Element; // skip when input type is password
}

const InputText = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    allowClear,
    className,
    style,
    postfixIcon,
    onChange,
    value,
    ...restProps
  } = props;
  // Khi không có `FormProvider`, trả về {} thay vì null.
  const { trigger, setValue, watch } = useFormContext() || {
    trigger: () => {},
    setValue: () => {},
    watch: () => {},
  };
  // Sử dụng watch để theo dõi giá trị của input nếu có trong hook form
  const currentValue = watch(restProps.name as string);

  // Tạo trạng thái cho input khi không sử dụng REACT HOOK FORM
  const [inputValue, setInputValue] = useState<string | number>(value || "");
  const [showPassword, setShowPassword] = useState(false);

  const wrapperClassName = classNames(styles.input_wrapper, className?.wrapper);

  const inputClassName = classNames(styles.base_input, className?.input);

  // Hàm thay đổi giá trị của input
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
    onChange?.(e);
  }

  // Hàm hiển thị mật khẩu
  function handleShowPassword() {
    setShowPassword((prev) => !prev);
  }

  // Hàm xóa giá trị của input khi nhấn nút clear
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
    setInputValue(""); // Reset giá trị input
  }

  // Xử lý hiển thị icon Clear chỉ khi allowClear có giá trị hợp lệ
  const clearIcon =
    allowClear && (currentValue || inputValue) ? (
      <button type="button" onClick={allowClear ? hanldeClear : undefined}>
        <Icons.CloseIcon />
      </button>
    ) : null;

  // Xử lý hiển thị icon password
  const postIcon =
    restProps.type === "password" ? (
      <button type="button" onClick={handleShowPassword}>
        {showPassword ? <Icons.EyeSlashHidden /> : <Icons.EyeSlashShow />}
      </button>
    ) : (
      postfixIcon
    );

  return (
    <div className={wrapperClassName} style={style?.wrapper}>
      <input
        {...restProps}
        ref={ref}
        value={inputValue} // Sử dụng giá trị trong state khi không có RHF
        type={showPassword ? "text" : restProps.type}
        onChange={handleChange}
        style={style?.input}
        className={inputClassName}
      />
      <span className={styles.icons}>
        {clearIcon}
        {postIcon}
      </span>
    </div>
  );
});

if (process.env.NODE_ENV !== "production") {
  InputText.displayName = "Input";
}

export default InputText;
