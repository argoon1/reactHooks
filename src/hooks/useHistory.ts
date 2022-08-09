import React, { useState, useReducer } from "react";

const useHistory = <T>(inputState: T) => {
  const [stateData, setStateData] = useState({
    history: [inputState],
    pointer: 0,
  });
  const { history, pointer } = stateData;
  function updateValue(newValue: T) {
    setStateData(({ history, pointer }) => {
      return {
        history: [...history.slice(0, pointer + 1), newValue],
        pointer: pointer + 1,
      };
    });
  }
  function isValidPosition(position: number) {
    return position >= 0 && position < stateData.history.length;
  }
  function moveBy(moveBy: number) {
    return () => {
      const nextPosition = stateData.pointer + moveBy;
      if (isValidPosition(nextPosition)) {
        setStateData((prevHist) => ({
          ...prevHist,
          pointer: nextPosition,
        }));
      }
    };
  }

  function go(idx: number) {
    if (isValidPosition(idx)) {
      setStateData((prevData) => ({
        ...prevData,
        pointer: idx,
      }));
    }
  }
  return [
    history[pointer],
    updateValue,
    {
      back: moveBy(-1),
      forward: moveBy(1),
      go,
      ...stateData,
    },
  ] as const;
};

export default useHistory;
