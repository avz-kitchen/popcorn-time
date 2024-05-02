import { Routes, Route, NavLink } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import Footer from "./components/Footer";
function App() {
  return (
    <>

      <Header />
      {/* <MovieList/> */}
      <Routes>
      <Route path="/" element={<MovieList/>} />
        <Route path="/about" element={<p>this is the about page</p>} />
        <Route path="/contact" element={<p>this is the contact page</p>} />
        <Route path="/movies/:movieId" element={<h1>route is dynamic</h1>} />
        <Route path="/error" element={<p>this is the contact page</p>} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;
