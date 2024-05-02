import "./Header.css";
import { NavLink } from "react-router-dom";

function Header() {
    // let title;
    // if (moviesToDisplay.length > 0) {
    //   title = <h2>Number of movies: {moviesToDisplay.length}</h2>;
    // } else {
    //   title = <h1>Sorry, no movies to display</h1>;
    // }
  return (
    <header className="Header">
      <nav>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
<div className="two-col">
    <h1>Popcorn Time</h1>
    <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzV6aHZpd281cGhrdW5kMm5ybnI4cGU0dXJvMm1sZjV4NW9iY29ycCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/URa3NH7pP13nih7RrE/giphy.gif"/>
    </div>
      

      {/* {title} */}

    </header>
  );
}
export default Header;
