import { useCallback, useEffect, useRef } from "react";

export default function useTimeout(callback: any, delay: any) {
  const callbackRef = useRef(callback);
  const timeoutRef = useRef<number>();

  callbackRef.current = callback;

  const set = useCallback(() => {
    timeoutRef.current = window.setTimeout(() => callbackRef.current(), delay);
    console.log("NEW");
  }, [delay, callback]);

  const clear = useCallback(() => {
    timeoutRef.current && clearTimeout(timeoutRef.current);
  }, []);

  useEffect(() => {
    set();
    return clear;
  }, [delay, set, clear]);

  const reset = useCallback(() => {
    clear();
    set();
  }, [clear, set]);

  return { reset, clear };
}
