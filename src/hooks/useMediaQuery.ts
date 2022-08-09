import React, { useEffect, useState } from "react";
import useEventListener from "./useEventListener";

const useMediaQuery = (mediaQuery: string) => {
  const [isMatch, setIsMatch] = useState(false);
  const [mediaQueryList, setMediaQueryList] = useState<null | MediaQueryList>(
    null
  );
  useEffect(() => {
    const list = window.matchMedia(mediaQuery);
    setMediaQueryList(list);
    setIsMatch(list.matches);
  }, [mediaQuery]);
  useEventListener(
    "change",
    (e) => setIsMatch(e.matches),
    mediaQueryList as MediaQueryList
  );
  return isMatch;
};

export default useMediaQuery;
