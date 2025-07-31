import { useEffect, useState } from "react";

const BREAKPOINT_MOBILE = 767;
const BREAKPOINT_TABLET = 1024;
const BREAKPOINT_PC = 1025;
const DEFAULT_CUSTOM_BREAKPOINT = 821;

const useViewport = (customBreakpoint = DEFAULT_CUSTOM_BREAKPOINT) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    handleWindowResize();

    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return {
    width,
    isMobile: width < BREAKPOINT_MOBILE,
    isTablet: width >= BREAKPOINT_MOBILE && width < BREAKPOINT_TABLET,
    isPC: width >= BREAKPOINT_PC,
    isCustomBreakpoint: width < customBreakpoint,
  };
};

export default useViewport;
