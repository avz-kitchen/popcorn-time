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
  let title;
  if (moviesToDisplay.length > 0) {
    title = <h1>Number of movies: {moviesToDisplay.length}</h1>;
  } else {
    title = <h1>Sorry, no movies to display</h1>;
  }
  return (
    <section className="MovieList">
      {title}

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
