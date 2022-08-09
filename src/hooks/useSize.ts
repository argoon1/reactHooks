import { intersection } from "lodash";
import React, { useEffect, useRef, useState } from "react";
import { json } from "stream/consumers";
import useDeepCompareEffect from "./useDeepCompareEffect";
const useSize = (ref: React.MutableRefObject<HTMLElement | null>) => {
  const [size, setSize] = useState<DOMRect | undefined>(undefined);
  console.log(size);
  useEffect(() => {
    if (!ref.current) return;
    const obser = new ResizeObserver(([entry]) => setSize(entry.contentRect));
    obser.observe(ref.current);
  }, []);
  return size;
};

export default useSize;
