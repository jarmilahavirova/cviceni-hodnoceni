import { useState } from "react";
import { Star } from "../Star";
import "./style.css";

export const Rating = () => {
  const [rating, setRating] = useState(0);

  return (
    <div className="rating">
      <div className="rating__value">{rating}</div>
      <div className="rating__stars">
        <Star glowing={rating >= 1} value={1} onSelect={setRating} />
        <Star glowing={rating >= 2} value={2} onSelect={setRating} />
        <Star glowing={rating >= 3} value={3} onSelect={setRating} />
        <Star glowing={rating >= 4} value={4} onSelect={setRating} />
        <Star glowing={rating >= 5} value={5} onSelect={setRating} />
      </div>
    </div>
  );
};
