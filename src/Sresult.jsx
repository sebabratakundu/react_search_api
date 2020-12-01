import React from "react";

const Sresult = (props) => {
  const src = `https://source.unsplash.com/weekly?${props.name}`;
  return (
    <>
      <div className="result">
        <img src={src} alt="img" />
      </div>
    </>
  );
};

export default Sresult;
