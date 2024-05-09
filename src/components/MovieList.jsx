/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import movies from "../data/movies.json";
import MovieSummary from "./MovieSummary";
import { SimpleGrid,Card, Box } from '@chakra-ui/react'



function MovieList(props) {
  console.log(movies);

useEffect (() => {
  
});
 
  return (
  <>
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
                {props.moviesToDisplay.map((movieObj) => {
                    return (
                        <MovieSummary
                            key={movieObj.id}
                            movieDetails={movieObj}
                            callbackToDelete={props.callbackToDelete}
                        />
                    )
                })}
            </SimpleGrid>

    </>
  );
}
export default MovieList;
