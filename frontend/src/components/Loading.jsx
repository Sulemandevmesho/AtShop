import React from "react";
import loadingCss from "./Loading.module.css";
const Loading = () => {
  return (
    <>
      <div className={loadingCss.container}>
        <div className={loadingCss.ring}></div>
        <div className={loadingCss.ring}></div>
        <div className={loadingCss.ring}></div>
        <div className={loadingCss.textani}>
        <h2>Loading...</h2>
      </div>
      </div>
      
    </>
  );
};

export default Loading;
