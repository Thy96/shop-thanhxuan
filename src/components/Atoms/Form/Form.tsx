import React, { ReactNode } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AnyObjectSchema } from "yup";

import styles from "./Form.module.scss";
import classNames from "classnames";

export type FormData = Record<string, unknown>;

interface IForm {
    className?: string;
    children?: ReactNode;
    onSubmitForm?: (data: FormData) => void;
    schema?: AnyObjectSchema;
}

function Form({ className, children, onSubmitForm, schema }: IForm) {
    const resolver = schema ? yupResolver(schema) : undefined;
    const methods = useForm<FormData>({
        resolver,
        mode: "onChange",
    });

    const onSubmit: SubmitHandler<FormData> = (data: FormData) =>
        onSubmitForm?.(data);

    return (
        <FormProvider {...methods}>
            <form
                onSubmit={methods.handleSubmit(onSubmit)}
                className={classNames(styles.wrapper, className)}
            >
                {children}
            </form>
        </FormProvider>
    );
}

export default Form;
