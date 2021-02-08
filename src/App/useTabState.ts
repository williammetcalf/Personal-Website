import { useCallback, useState } from "react";

import { TAB_VALUE } from "../components/Header/Header";

function useTabState(): [
  TAB_VALUE,
  (value: TAB_VALUE) => void,
  (value: TAB_VALUE) => void
] {
  const [tab, setTab] = useState<TAB_VALUE>("t1");
  const [isScrolling, setIsScrolling] = useState(false);

  const scrollToSection = useCallback(
    (value: TAB_VALUE) => {
      const el: HTMLElement = document.querySelector(`#${value}`);
      if (el) {
        el && window.scrollTo({ behavior: "smooth", top: el.offsetTop });
        setIsScrolling(true);
        const id = setTimeout(() => {
          setIsScrolling(false);
        }, 5000);
        return () => clearTimeout(id);
      }
    },
    [setIsScrolling]
  );

  const setTabVisually = useCallback(
    (value: TAB_VALUE) => {
      if (!isScrolling) {
        setTab(value);
      }
    },
    [isScrolling, setTab]
  );

  return [tab, setTabVisually, scrollToSection];
}

export default useTabState;
