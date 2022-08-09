import React, { useEffect } from "react";

const useEffectOnce = (cb: () => void | (() => void)) => {
  useEffect(cb, []);
};

export default useEffectOnce;
