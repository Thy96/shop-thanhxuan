import * as yup from "yup";

export const fullSchema = yup.object({
    phoneNumber: yup
        .string()
        .required("Vui lòng nhập số điện thoại hợp lệ!")
        .matches(/^\d{10}$/, "Số điện thoại phải có 10 chữ số"),
    password: yup
        .string()
        .required("Vui lòng nhập mật khẩu!")
        .min(8, "Mật khẩu phải ít nhất 8 ký tự")
        .matches(/[A-Z]/, "Ít nhất 1 chữ hoa")
        .matches(/[a-z]/, "Ít nhất 1 chữ thường")
        .matches(/\d/, "Ít nhất 1 chữ số"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")], "Mật khẩu không khớp")
        .required("Vui lòng xác nhận mật khẩu"),
    fullName: yup.string().required("Vui lòng nhập họ và tên"),
    address: yup.string().required("Vui lòng nhập địa chỉ"),
    province: yup.string().required("Vui lòng nhập tỉnh/thành"),
    district: yup.string().required("Vui lòng nhập quận/huyện"),
    ward: yup.string().required("Vui lòng nhập phường/xã"),
    email: yup.string().email("Vui lòng nhập email"),
});

// 👉 Dành cho Login Form (chỉ cần 2 field)
export const loginSchema = fullSchema.pick(["phoneNumber", "password"]);

// 👉 Dành cho SignUp Form (cần hết)
export const signUpSchema = fullSchema;

export const contactSchema = fullSchema.pick([
    "fullName",
    "phoneNumber",
    "email",
]);
