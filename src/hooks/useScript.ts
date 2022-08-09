import React from "react";
import useAsync from "./useAsync";
const useScript = (url: string) => {
  const script = document.createElement("script");
  script.src = url;
  script.async = true;
  return useAsync(
    new Promise((resolve, reject) => {
      script.addEventListener("load", resolve);
      script.addEventListener("error", reject);
      document.body.appendChild(script);
    })
  );
};

export default useScript;
