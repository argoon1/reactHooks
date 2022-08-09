import React, { useEffect, useState } from "react";
export function useLocalStorage<T>(key: string, item: T) {
  return useStorage(key, item, window.localStorage);
}
export function useSessionStorage<T>(key: string, item: T) {
  return useStorage(key, item, window.sessionStorage);
}
const useStorage = <T>(key: string, initialValue: T, storage: Storage) => {
  const [value, setItem] = useState(() => {
    const curValue = storage.getItem(key);
    console.log(curValue);
    if (curValue != undefined) return JSON.parse(curValue);
    if (typeof initialValue === "function") {
      return initialValue();
    }
    return initialValue;
  });

  useEffect(() => {
    if (value === undefined) storage.removeItem(key);
    storage.setItem(key, JSON.stringify(value));
  }, [key, value, storage, initialValue]);
  const deleteItem = () => {
    setItem(undefined);
  };

  return [value, setItem, deleteItem] as const;
};

export default useStorage;
