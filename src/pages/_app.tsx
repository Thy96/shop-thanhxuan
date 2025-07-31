import "swiper/css";
import "swiper/css/bundle";
import "@/styles/globals.scss";
import "@/styles/tailwind.css";

import classNames from "classnames";
import type { AppProps } from "next/app";
import { barlowcondensed, nunito, vollkorn } from "@/lib/font/fonts";
import { SWRConfig } from "swr";
import { onErrorRetry } from "@/services/api";

export default function App({ Component, pageProps }: AppProps) {
  const appClassNames = classNames(
    "main-body",
    vollkorn.variable,
    barlowcondensed.variable,
    nunito.variable
  );
  return (
    <SWRConfig value={{ onErrorRetry }}>
      <div className={appClassNames}>
        <Component {...pageProps} />
      </div>
    </SWRConfig>
  );
}
