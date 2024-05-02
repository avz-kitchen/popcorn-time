/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
function Movie(props) {
  return (
    <div className="card" key={props.movieDetails.id}>
      {props.movieDetails.imgURL ? (
        <img src={props.movieDetails.imgURL} />
      ) : (
        <img src="https://dummyimage.com/182x268/ffffff/000000" />
      )}

      <p>Title: {props.movieDetails.title}</p>
      <p>Rating: {props.movieDetails.rating}</p>

      {props.movieDetails.rating > 8 && <p>RECOMMENDED</p>}
      <Link to={`/movies/${props.movieDetails.id}`}>More details</Link>
      <button
        onClick={() => {
          props.callbackToDelete(props.movieDetails.id);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default Movie;
