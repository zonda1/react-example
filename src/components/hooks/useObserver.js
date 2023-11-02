import { useEffect, useRef } from "react";

export const useObserver = (isLoading, condition, cb, element) => {
  const observer = useRef();
  useEffect(() => {
    if (isLoading) return;
    if (observer.current) observer.current.disconnect();
    var callback = function (entries, observer) {
      /* Content excerpted, show below */
      if (entries[0].isIntersecting && condition) {
        cb();
      }
    };
    observer.current = new IntersectionObserver(callback);
    observer.current.observe(element.current);
  }, [isLoading]);
};
