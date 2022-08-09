import { useEffect, useState } from "react";

const usePreviouse = <T>(value: T) => {
  const [values, setValues] = useState({
    prev: value,
    cur: value,
  });
  useEffect(() => {
    console.log(value);
    if (values.cur !== value) {
      setValues((prevValues) => ({
        prev: prevValues.cur,
        cur: value,
      }));
    }
  });
  return values.prev;
};

export default usePreviouse;
