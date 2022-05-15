import React from "react";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import "./Slider.css";

const Slider = (props) => {
  return (
    <div className="slider-wrapper">
      <div onClick={props.prev} className="prev">
        <GrFormPrevious />
      </div>
      <div className="current">{props.children}</div>
      <div onClick={props.next} className="next">
        <GrFormNext />
      </div>
    </div>
  );
};

export default Slider;
