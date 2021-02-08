import { RefObject, useLayoutEffect } from "react";

function useOnContentIntersect(cb: () => void, ref: RefObject<HTMLDivElement>) {
  useLayoutEffect(() => {
    const obs = new IntersectionObserver(
      (e) => {
        if (e[0].isIntersecting) cb && cb();
      },
      { threshold: 0.5 }
    );

    obs.observe(ref.current);

    return () => obs.disconnect();
  }, []);
}

export default useOnContentIntersect;
