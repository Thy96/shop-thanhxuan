import React, { ReactNode } from "react";
import Header from "../Organisms/Header/Header";
import Footer from "../Organisms/Footer/Footer";

interface IBaseLayout {
  children: ReactNode;
}

function BaseLayout({ children }: IBaseLayout) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default BaseLayout;
