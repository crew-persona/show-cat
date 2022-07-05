import { RefObject, useState, useLayoutEffect } from "react";

export default function useOnScreen(
  ref: RefObject<HTMLElement>,
  observerOptions?: IntersectionObserverInit
) {
  const [isIntersecting, setIntersecting] = useState<Boolean>(false);

  useLayoutEffect(() => {
    const defaultObserverOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(
      ([entry]: IntersectionObserverEntry[]) => {
        return setIntersecting(entry.isIntersecting);
      },
      observerOptions ?? defaultObserverOptions
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    // 컴포넌트가 Unmount 됐을 경우 Observer 이벤트 해제
    return () => {
      observer.disconnect();
    };
  }, [ref, observerOptions]);

  return isIntersecting;
}
