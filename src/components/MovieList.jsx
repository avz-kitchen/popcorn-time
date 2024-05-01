import { useState } from "react";
import movies from "../data/movies.json";
function MovieList() {
  console.log(movies);

  const [moviesToDisplay, setMoviesToDisplay] = useState(movies);
  const deleteMovie = (movieId) => {
    console.log(`deleting movie with the id... ${movieId}`);

    const newList = moviesToDisplay.filter((movie) => {movie.id !== movieId });

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
        <h1>Number of movies: {moviesToDisplay.length}</h1>
      {moviesToDisplay.map((movieObj) => {
        return (
          <div className="card" key={movieObj.id}>
            <p>Title: {movieObj.title}</p>
            <p>Rating: {movieObj.rating}</p>
            <button
              onClick={() => {
                deleteMovie(movieObj.id);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </section>
  );
}
export default MovieList;
