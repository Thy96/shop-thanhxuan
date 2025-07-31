import { Html, Head, Main, NextScript } from "next/document";
import classNames from "classnames";
import { barlowcondensed, nunito, vollkorn } from "@/lib/font/fonts";

export default function Document() {
    const appClassNames = classNames(
        "main-body",
        vollkorn.variable,
        barlowcondensed.variable,
        nunito.variable
    );
    return (
        <Html lang="en">
            <Head />
            <body className={appClassNames}>
                <Main />
                <div id="modal-root" />
                <NextScript />
            </body>
        </Html>
    );
}
