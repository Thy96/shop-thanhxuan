import React, { ChangeEvent, useState } from "react";

import Button from "@/components/Atoms/Button";
import Form, { FormData } from "@/components/Atoms/Form/Form";
import FormItem, {
  ChangeTargetElement,
} from "@/components/Atoms/Form/FormItem/FormItem";

import styles from "./SignUpForm.module.scss";

import { signUpSchema } from "@/utils/validationSchema";
import { useProvinces, useDistricts, useWards } from "@/services/api";
import { District, Provinces, Ward } from "@/types/types";
import InputText from "@/components/Atoms/Input/InputText/InputText";
import Select from "@/components/Atoms/Select/Select";

function SignUpForm() {
  const [provinceCode, setProvinceCode] = useState<number | undefined>();
  const [districtCode, setDistrictCode] = useState<number | undefined>();

  const { isLoadingProvinces, provinces } = useProvinces();
  const { isLoadingDistricts, districts } = useDistricts(provinceCode);
  const { isLoadingWards, wards } = useWards(districtCode);

  const handleSelectChange = (
    type: "province" | "district",
    e: ChangeEvent<ChangeTargetElement>
  ) => {
    const code = Number(e.target.value);
    if (type === "province") {
      setProvinceCode(code);
      setDistrictCode(undefined);
    } else if (type === "district") {
      setDistrictCode(code);
    }
  };

  const mapOptions = (data?: Provinces[] | District[] | Ward[]) =>
    data?.map((item) => ({ label: item.name, value: item.code })) || [];

  const onSubmit = (data: FormData) => {
    // Chuyển đổi các giá trị `province`, `district`, `ward` thành tên
    const updatedData = { ...data };
    ["province", "district", "ward"].forEach((field) => {
      const value = data[field];
      const options =
        field === "province"
          ? provinces
          : field === "district"
          ? districts
          : wards;
      const option = options?.find((item) => item.code === Number(value));
      if (option) {
        updatedData[field] = option.name;
      }
    });
    console.log(updatedData);

    return updatedData;
  };

  return (
    <Form
      schema={signUpSchema}
      onSubmitForm={(data) => onSubmit(data)}
      className={styles.list_item}
    >
      <FormItem name="fullName" placeholder="Nhập họ và tên*">
        <InputText allowClear />
      </FormItem>

      <FormItem name="phoneNumber" placeholder="Nhập số điện thoại*">
        <InputText allowClear />
      </FormItem>

      <FormItem
        name="address"
        placeholder="Nhập số nhà, tên đường*"
        className={styles.item}
      >
        <InputText allowClear />
      </FormItem>

      <FormItem
        name="province"
        type="select"
        options={mapOptions(provinces)}
        isLoading={isLoadingProvinces}
        value={provinceCode}
        placeholder="Chọn tỉnh/thành*"
        onchange={(e) => handleSelectChange("province", e)}
        className={styles.item}
      >
        <Select />
      </FormItem>
      <FormItem
        name="district"
        type="select"
        options={mapOptions(districts)}
        isLoading={isLoadingDistricts}
        value={districtCode}
        placeholder="Chọn quận/huyện*"
        onchange={(e) => handleSelectChange("district", e)}
        className={styles.item}
      >
        <Select />
      </FormItem>
      <FormItem
        name="ward"
        type="select"
        options={mapOptions(wards)}
        placeholder="Chọn phường/xã*"
        isLoading={isLoadingWards}
        className={styles.item}
      >
        <Select />
      </FormItem>

      <FormItem
        name="password"
        placeholder="Nhập mật khẩu của bạn*"
        type="password"
      >
        <InputText />
      </FormItem>

      <FormItem
        name="confirmPassword"
        placeholder="Xác nhận lại mật khẩu*"
        type="password"
      >
        <InputText />
      </FormItem>
      <Button type="submit" htmlType="secondary">
        Đăng ký
      </Button>
    </Form>
  );
}

export default SignUpForm;
