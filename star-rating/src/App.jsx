import "./App.css";
import MovieRating from "./MovieRating";
import StarRating from "./StarRating";

function App() {
  return (
    <>
      <h2>Star-rating reusable component</h2>
      <StarRating messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]} />
      <StarRating maxRating={6} size={50} color="brown" />
      <StarRating maxRating={8} size={54} color="red" className="test" />
      <StarRating maxRating={10} size={56} color="magenta" defaultRating={3} />
      <MovieRating />
    </>
  );
}

export default App;
