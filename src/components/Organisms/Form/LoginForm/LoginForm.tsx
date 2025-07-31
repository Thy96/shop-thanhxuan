import React from "react";

import Button from "@/components/Atoms/Button";
import Form, { FormData } from "@/components/Atoms/Form/Form";
import FormItem from "@/components/Atoms/Form/FormItem/FormItem";

import { loginSchema } from "@/utils/validationSchema";
import InputText from "@/components/Atoms/Input/InputText/InputText";

function LoginForm() {
  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <Form schema={loginSchema} onSubmitForm={(data) => onSubmit(data)}>
      <FormItem name="phoneNumber" placeholder="Nhập số điện thoại*" allowClear>
        <InputText />
      </FormItem>

      <FormItem name="password" placeholder="Nhập mật khẩu*" type="password">
        <InputText />
      </FormItem>

      <Button type="submit" htmlType="tertiary">
        Đăng Nhập
      </Button>
    </Form>
  );
}

export default LoginForm;
