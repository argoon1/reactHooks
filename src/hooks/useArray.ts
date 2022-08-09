import React, { useState } from "react";

const useArray = <T>(inputArr: T[]) => {
  const [arr, setArr] = useState(inputArr);
  function pushElement(newElement: T) {
    setArr((prevArr) => [...prevArr, newElement]);
  }
  function modifyAtIdx(newElement: T, index: number) {
    setArr((prevArr) => [
      ...prevArr.slice(0, index),
      newElement,
      ...prevArr.slice(index + 1),
    ]);
    arr[index] = newElement;
  }
  function filter(cb: (item: T, idx: number, arr: T[]) => boolean) {
    setArr((prevArr) => prevArr.filter(cb));
  }
  function deleteElementAtIdx(idx: number) {
    setArr((prevArr) => [...prevArr.slice(0, idx), ...prevArr.slice(idx + 1)]);
  }
  function set(newArr: T[]) {
    setArr(newArr);
  }
  return {
    pushElement,
    modifyAtIdx,
    filter,
    deleteElementAtIdx,
    set,
    arr,
  };
};

export default useArray;
