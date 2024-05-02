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
      <nav>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
      <div >
      <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzV6aHZpd281cGhrdW5kMm5ybnI4cGU0dXJvMm1sZjV4NW9iY29ycCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/URa3NH7pP13nih7RrE/giphy.gif" />

        <h1>Popcorn Time</h1>
      </div>

      {title}
    </header>
  );
}
export default Header;
