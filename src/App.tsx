import React, { useState } from "react";
import useCopyToClipobard from "./hooks/useCopyToClipobard";

const App = () => {
  const [copyText, { success, value }] = useCopyToClipobard();
  return (
    <div>
      <button onClick={() => copyText("MY STRINg")}>COPY</button>
      {success && "COpIed"}
    </div>
  );
};

export default App;
