import { useState } from "react";
import movies from "../data/movies.json";
import MovieSummary from "./MovieSummary";
function MovieList() {
  console.log(movies);

  const [moviesToDisplay, setMoviesToDisplay] = useState(movies);

  const deleteMovie = (movieId) => {
    console.log(`deleting movie with the id... ${movieId}`);

    const newList = moviesToDisplay.filter((movie) => movie.id !== movieId);

    //   if (movie.id === movieId) {
    //     return false;
    //   } else {
    //     return true;
    //   }

    console.log(newList);

    setMoviesToDisplay(newList);
  };

  return (
    <section className="MovieList">

      {moviesToDisplay.map((movieObj) => {
        return (
          <MovieSummary
            key={movieObj.id}
            movieDetails={movieObj}
            callbackToDelete={deleteMovie}
          />
        );
      })}
    </section>
  );
}
export default MovieList;
