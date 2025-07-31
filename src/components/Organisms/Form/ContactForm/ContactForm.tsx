import React from "react";

import { contactSchema } from "@/utils/validationSchema";

import Form, { FormData } from "@/components/Atoms/Form/Form";
import FormItem from "@/components/Atoms/Form/FormItem/FormItem";
import InputText from "@/components/Atoms/Input/InputText/InputText";
import Button from "@/components/Atoms/Button";
import TextArea from "@/components/Atoms/TextArea/TextArea";

function ContactForm() {
  const handleSubmit = (data: FormData) => {
    console.log(data);
  };
  return (
    <Form schema={contactSchema} onSubmitForm={(data) => handleSubmit(data)}>
      <FormItem name="fullName" placeholder="Nhập họ và tên của bạn*">
        <InputText allowClear />
      </FormItem>

      <FormItem name="phoneNumber" placeholder="Nhập số điện thoại của bạn*">
        <InputText allowClear />
      </FormItem>
      <FormItem name="email" placeholder="Nhập email của bạn*">
        <InputText allowClear />
      </FormItem>
      <FormItem name="question" placeholder="Nhập câu hỏi của bạn*">
        <TextArea allowClear />
      </FormItem>

      <Button type="submit" htmlType="secondary">
        Submit
      </Button>
    </Form>
  );
}

export default ContactForm;
