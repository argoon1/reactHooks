import isEqual from "lodash/fp/isEqual";
import { useEffect, useRef } from "react";
const useDeepCompareEffect = (cb: () => void, dependencies: unknown[]) => {
  const depRef = useRef<unknown[]>();
  if (!isEqual(depRef.current, dependencies)) {
    depRef.current = dependencies;
  }
  useEffect(cb, [depRef.current]);
};

export default useDeepCompareEffect;
