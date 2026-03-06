import React, { ReactNode } from "react";
import Header from "../Organisms/Header/Header";
import Footer from "../Organisms/Footer/Footer";
import CategorySidebar from "../Organisms/CategorySidebar/CategorySidebar";

interface ISecondLayout {
  children: ReactNode;
  aside?: ReactNode;
  title?: string;
  bottomContent?: ReactNode;
  className?: string;
}

function SecondLayout({
  aside,
  children,
  title = "Title",
  bottomContent,
  className,
}: ISecondLayout) {
  return (
    <>
      <Header />
      <main className="md:pt-[50px] pt-[30px]">
        <h1 className="text-center lg:!text-6xl !text-5xl px-[20px] uppercase">
          {title}
        </h1>
        <div
          className={`mx-auto flex max-w-[1400px] gap-6 px-[20px] mt-16 ${className}`}
        >
          {/* Sidebar */}
          {aside && (
            <aside className="hidden md:block lg:basis-1/4 md:basis-1/5 shrink-0">
              <div className="sticky top-50">{aside}</div>
            </aside>
          )}

          <section className={`flex-1 lg:basis-2/3 md:basis-3/4`}>
            {/* Mobile vẫn dùng chung component */}
            {aside && (
              <div className="mb-4 md:hidden">
                <CategorySidebar />
              </div>
            )}

            {children}
          </section>
        </div>
        {bottomContent && <div className="mt-24">{bottomContent}</div>}
      </main>
      <Footer />
    </>
  );
}

export default SecondLayout;
