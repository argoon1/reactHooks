import React, { Ref, useEffect, useState } from "react";

const useVisibleOnScreen = (
  ref: React.MutableRefObject<HTMLElement | null>,
  rootMargin: `${number}px`
) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (ref.current == null) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { rootMargin }
    );
    observer.observe(ref.current);
  });
  return visible;
};

export default useVisibleOnScreen;
