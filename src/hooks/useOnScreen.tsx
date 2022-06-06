import { RefObject, useState, useMemo, useEffect } from "react";

export default function useOnScreen(ref: RefObject<HTMLElement>) {
  const [isIntersecting, setIntersecting] = useState<Boolean>(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIntersecting(entry.isIntersecting)
      ),
    []
  );

  useEffect(() => {
    if (ref.current) {
      observer.observe(ref.current);
    }

    // 컴포넌트가 Unmount 됐을 경우 Observer 이벤트 해제
    return () => {
      observer.disconnect();
    };
  }, [observer, ref]);

  return isIntersecting;
}
