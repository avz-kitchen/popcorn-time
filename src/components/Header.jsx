/* eslint-disable react/prop-types */
import "./Header.css";
import { NavLink } from "react-router-dom";

function Header(props) {
    let title;
    if (props.numberOfMovies > 0) {
        title = <h1>Number of movies: {props.numberOfMovies}</h1>;
    } else {
        title = <h2>Sorry, no movies to display</h2>
    }
  return (
    <header className="Header">

      <div >
      <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzV6aHZpd281cGhrdW5kMm5ybnI4cGU0dXJvMm1sZjV4NW9iY29ycCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/URa3NH7pP13nih7RrE/giphy.gif" />

        <h1>Popcorn Time</h1>
      </div>
      <nav className="navbar navbar-dark navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Popcorn Inc.</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to="/movies">List of Movies</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/create">Create Movie</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/celebs">List of Celebrities</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about">About</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
{title}

    </header>
  );
}
export default Header;
