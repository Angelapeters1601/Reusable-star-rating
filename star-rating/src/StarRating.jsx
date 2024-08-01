import Star from "./Star";
import React, { useState } from "react";

const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

const starContainerStyle = {
  display: "flex",
};

function StarRating({
  maxRating = 5,
  color = "#fcc419",
  size = 48,
  className,
  messages = [],
  defaultRating = 0,
  onSetRating,
}) {
  const [rating, setRating] = useState(defaultRating);
  const [tempRating, setTempRating] = useState(0);

  const textStyle = {
    linHeight: "1",
    margin: "0",
    color,
    fontSize: `${size / 1.5}px`,
    className: "",
  };

  const handleRating = (rating) => {
    setRating(rating);
    onSetRating(rating);
  };

  return (
    <div style={containerStyle} className={className}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            onRate={() => handleRating(i + 1)}
            // full={rating >= i + 1}
            full={(tempRating || rating) > i}
            onHoverIn={() => setTempRating(i + 1)}
            onHoverOut={() => setTempRating(0)}
            color={color}
            size={size}
          />
        ))}
      </div>
      <h2 style={textStyle}>
        {messages.length === maxRating
          ? messages[tempRating ? tempRating - 1 : rating - 1]
          : tempRating || rating || ""}
      </h2>
    </div>
  );
}
export default StarRating;

/* Array.from was used to generate length, (_, i) was used as mapping function */

// full={rating > i} can as well work
