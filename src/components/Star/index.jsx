import { useState } from "react";
import "./style.css";

export const Star = ({ value, onSelect }) => {
  const [glowing, setGlowing] = useState(false);

  const starClass = glowing ? "rating__star rating__star--on" : "rating__star";

  return (
    <div
      className={starClass}
      onClick={() => {
        setGlowing(true);
        onSelect(value);
      }}
    ></div>
  );
};
