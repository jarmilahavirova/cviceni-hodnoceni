import { useState } from "react";
import "./style.css";

export const Star = ({ glowing, value, onSelect }) => {
  const starClass = glowing ? "rating__star rating__star--on" : "rating__star";

  return (
    <div
      className={starClass}
      onClick={() => {
        onSelect(value);
      }}
    ></div>
  );
};
