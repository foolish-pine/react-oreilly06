import React, { useContext } from "react";
import { ColorContext } from "../provider/ColorProvider";
import { StarRating } from "./StarRating";

import { FaTrash } from "react-icons/fa";

export const Color = ({ id, title, color, rating }) => {
  const { removeColor, rateColor } = useContext(ColorContext);
  return (
    <section>
      <h1>{title}</h1>
      <button onClick={() => removeColor(id)}>
        <FaTrash />
      </button>
      <div style={{ height: 50, backgroundColor: color }}></div>
      <StarRating
        selectedStars={rating}
        onRate={(rating) => rateColor(id, rating)}
      />
    </section>
  );
};
