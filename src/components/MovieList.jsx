import movies from "../data/movies.json";
function MovieList() {
  console.log(movies);

  return <section className="MovieList">
    {movies.map((movieObj,index,arr)=> {
return(
    <div className="card" key={movieObj.id}>
        <p>Title: {movieObj.title}</p>
        <p>Rating: {movieObj.rating}</p>

    </div>
)
    })}
  </section>;
}
export default MovieList;
