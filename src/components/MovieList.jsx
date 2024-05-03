/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import movies from "../data/movies.json";
import MovieSummary from "./MovieSummary";


function MovieList(props) {
  console.log(movies);


 
  return (
    <section className="MovieList">

      {props.moviesToDisplay.map((movieObj) => {
        return (
          <MovieSummary
            key={movieObj.id}
            movieDetails={movieObj}
            callbackToDelete={props.callbackToDelete}
            />
        );
      })}
    </section>
  );
}
export default MovieList;
