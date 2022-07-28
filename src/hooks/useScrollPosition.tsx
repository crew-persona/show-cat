import { useLayoutEffect, useState } from "react";
import { toFit } from "util/eventManager";

const useScrollPosition = () => {
  const [scrollPositionX, setScrollPositionX] = useState(0);
  const [scrollPositionY, setScrollPositionY] = useState(0);

  useLayoutEffect(() => {
    const scrollEvent = () => {
      const { scrollX, scrollY } = window;

      setScrollPositionX(scrollX);
      setScrollPositionY(scrollY);
    };

    window.addEventListener("scroll", toFit(scrollEvent, {}));

    return () => {
      window.removeEventListener("scroll", scrollEvent);
    };
  }, []);

  return { scrollPositionX, scrollPositionY };
};

export default useScrollPosition;
