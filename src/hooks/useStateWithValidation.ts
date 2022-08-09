import React, { useEffect, useState } from "react";

const useStateWithValidation = <T>(
  validation: (value: T) => boolean,
  initialValue: T
) => {
  const [isValid, setIsValid] = useState(false);
  const [value, setValue] = useState(initialValue);
  useEffect(() => {
    setIsValid(validation(value));
  }, [value]);
  return [value, setValue, isValid] as const;
};

export default useStateWithValidation;
