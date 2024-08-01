import React, { useState } from "react";
import StarRating from "./StarRating";

function MovieRating() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <hr />
      <h3>This Movie is rated {movieRating} stars</h3>
      <StarRating
        maxRating={7}
        color="blue"
        size={36}
        onSetRating={setMovieRating}
      />
    </div>
  );
}

export default MovieRating;
