import { useEffect } from "react";

export const useDisablePageScroll = disabled => {
  useEffect(() => {
    const className = "no-scroll";
    const { classList } = document.body;

    // disable page scroll when disabled is open...
    disabled ? classList.add(className) : classList.remove(className);

    return () => {
      classList.remove(className);
    };
  }, [disabled]);
};
