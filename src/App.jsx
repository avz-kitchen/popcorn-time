import { Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import ErrorPage from './components/ErrorPage';

import MovieDetails from "./components/MovieDetails";

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
        <Route path="/movies/:movieId" element={<MovieDetails/>} />
        <Route path='*' element={<ErrorPage />} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;
