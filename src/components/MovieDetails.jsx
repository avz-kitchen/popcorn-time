/* eslint-disable react/jsx-key */
import { Link, useParams } from "react-router-dom";

import moviesArr from "../data/movies.json";

function MovieDetails() {
  const { movieId } = useParams();

  const movie = moviesArr.find((movieObj) => movieObj.id === parseInt(movieId));

  return (
    <div className="MovieDetails">
      <h3>{movie.title}</h3>

      {movie.imgURL ? (
        <img src={movie.imgURL} />
      ) : (
        <img src="https://dummyimage.com/182x268/ffffff/000000" />
      )}

      <p>Year: {movie.year}</p>
      <p>Rating: {movie.rating}</p>

      <div>
        {movie.genres &&
          movie.genres.map((genre,index) => <span className="badge" key={index}>{genre}</span>)}
      </div>
      <p>
        <Link to="/">Back to Homepage</Link>
      </p>
    </div>
  );
}

export default MovieDetails;
