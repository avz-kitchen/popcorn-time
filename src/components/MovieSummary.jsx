/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
function MovieSummary(props) {
  return (
    <div className="card" key={props.movieDetails.id}>
    {props.movieDetails.imgURL
        ? <img src={props.movieDetails.imgURL} />
        : <img src="https://dummyimage.com/182x268/ffffff/000000" />
    }

    <h2>{props.movieDetails.title}</h2>
    <p>Rating: {props.movieDetails.rating}</p>

    {props.movieDetails.rating > 8 && <p>RECOMMENDED</p>}

    <Link to={`/movies/${props.movieDetails.id}`}>More details</Link>

    <button className="btn btn-primary" onClick={() => { props.callbackToDelete(props.movieDetails.id) }}>Delete</button>
</div>
  );
}

export default MovieSummary;
