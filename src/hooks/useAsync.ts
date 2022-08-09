import React, { useEffect, useState } from "react";

const useAsync = <AsyncData>(promise: Promise<AsyncData>) => {
  type AsyncDataInfo = {
    loading: boolean;
    value: null | AsyncData;
    error: unknown;
  };
  const [asyncData, setAsyncData] = useState<AsyncDataInfo>({
    loading: true,
    value: null,
    error: null,
  });
  useEffect(() => {
    promise
      .then((respData) => {
        setAsyncData((prevAsyncData) => ({
          ...prevAsyncData,
          value: respData,
        }));
      })
      .catch((e) => setAsyncData((prevData) => ({ ...prevData, error: e })))
      .finally(() => {
        setAsyncData((prevData) => ({ ...prevData, loading: false }));
      });
  }, []);
  return {
    ...asyncData,
  };
};

export default useAsync;
