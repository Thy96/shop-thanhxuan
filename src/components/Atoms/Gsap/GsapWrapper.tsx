import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// 👉 Khai báo type riêng biệt, không dùng trực tiếp trong hàm
type GsapType = typeof gsap;

type GsapWrapperProps = {
  children: React.ReactNode;
  animate: (target: Element | null, gsap: GsapType) => void;
  className?: string;
};

export default function GsapWrapper({
  children,
  animate,
  className,
}: GsapWrapperProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    animate(wrapperRef.current, gsap);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [animate]);

  return (
    <div ref={wrapperRef} className={className}>
      {children}
    </div>
  );
}
