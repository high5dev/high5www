import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function Preloader(props) {
  return (
    <div id={props.load ? "preloader" : "preloader-none"} className="d-flex justify-content-start">
      <Loader
        type="CradleLoader"
        color="#343e47"
        height={100}
        width={100}
        className={"text-center"}
      />
    </div>
  );
}

export default Preloader;
