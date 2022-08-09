import React, { ReactEventHandler, useEffect } from "react";

const useEventListener = (
  eventType: string,
  handler: (e: any) => void,
  element: EventTarget = window
) => {
  useEffect(() => {
    if (element == null) return;
    element.addEventListener(eventType, handler);
    return () => element.removeEventListener(eventType, handler);
  });
};

export default useEventListener;
