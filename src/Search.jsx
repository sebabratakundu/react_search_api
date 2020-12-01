import React, { useState } from "react";
import Sresult from "./Sresult";

const Search = () => {
  const [img, setImg] = useState();

  const getVal = (event) => {
    setImg(event.target.value);
  };
  return (
    <>
      <input type="text" onChange={getVal} value={img} />
      {img === "" ? null : <Sresult name={img} />}
    </>
  );
};

export default Search;
