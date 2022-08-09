import React, { useEffect, useRef } from "react";
import useEventListener from "./useEventListener";

const useOnClickAway = (cb: () => void, ref: React.RefObject<HTMLElement>) => {
  useEffect(() => {
    if (ref.current) {
      document.addEventListener("click", (e) => {
        if (!ref.current || ref.current.contains(e.target as Node)) return;
        cb();
      });
    }
  });
};

export default useOnClickAway;
