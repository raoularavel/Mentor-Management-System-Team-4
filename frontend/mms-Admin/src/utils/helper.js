import { useState, useEffect } from "react";

export const useIsMobile = (customWidth) => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth <= (customWidth || 768)) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    handleResize();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  return isMobile;
};


export function transformRequest(obj) {
  return Object.fromEntries(
    Object.entries(obj)
      .filter(([, value]) => value != null)
      .map(([key, value]) => [
        key,
        value === Object(value) ? transformRequest(value) : value,
      ]),
  );
}

export const pick = (obj, keys) => Object.fromEntries(
  keys
  .filter(key => key in obj)
  .map(key => [key, obj[key]])
);

export const inclusivePick = (obj, ...keys) => Object.fromEntries(
  keys.map(key => [key, obj[key]])
);

export const omit = (obj, ...keys) => Object.fromEntries(
  Object.entries(obj)
  .filter(([key]) => !keys.includes(key))
);