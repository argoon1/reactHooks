import copy from "copy-to-clipboard";
import { useState } from "react";
type Options = Parameters<typeof copy>[1];
const useCopyToClipobard = () => {
  const [success, setSuccess] = useState(false);
  const [value, setValue] = useState("");
  const copyToClipobard = (text: string, options?: Options) => {
    const result = copy(text, options);
    if (result) setValue(text);
    setSuccess(result);
  };
  return [copyToClipobard, { success, value }] as const;
};

export default useCopyToClipobard;
