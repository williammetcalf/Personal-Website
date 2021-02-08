import { useEffect, useState } from "react";

function useWindowDimensions() {
  const [height, setHeight] = useState<number>(window.innerHeight);

  useEffect(() => {
    const cb = () => {
      setHeight(window.innerHeight);
    };

    window.addEventListener("resize", cb);

    return () => {
      window.removeEventListener("resize", cb);
    };
  }, []);

  return height;
}

export default useWindowDimensions;
