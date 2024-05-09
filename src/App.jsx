import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import ErrorPage from "./components/ErrorPage";
import Footer from "./components/Footer";

import MovieDetails from "./components/MovieDetails";
import movies from "./data/movies.json";

function App() {
  const [moviesToDisplay, setMoviesToDisplay] = useState(movies);
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [image, setImage] = useState();

  const deleteMovie = (movieId) => {
    console.log(`deleting movie with the id... ${movieId}`);
    const newList = moviesToDisplay.filter((movie) => movie.id !== movieId);

    //   //   if (movie.id === movieId) {
    //   //     return false;
    //   //   } else {
    //   //     return true;
    //   //   }

    //   console.log(newList);

    setMoviesToDisplay(newList);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("user has submitted the form");
    const movieIds = moviesToDisplay.map( movie => movie.id);
    const maxId = Math.max(...movieIds);
    const nextId = maxId + 1;
    const newMovie = {
      id: nextId,
      title: title,
      year: 2001,
      rating: rating,
      imgUrl: image,
    };
    const newList = [newMovie, ...moviesToDisplay];

    setMoviesToDisplay(newList)
  };
  const onImageChange = (e) => {
    if (e.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
   }
  return (
    <>
      <Header />
      <section >
        <h2>Create your own movie</h2>
        <form onSubmit={handleSubmit}>
          <label> Title:
            <input
              type="text"
              name='title'
              required
              placeholder='Enter the title'
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            
          </label>
          <label> Rating
            <input
              type="number"
              required
              min={1}
              max={10}
              name='Rating'
              placeholder='Rate 1-10'
              value={rating}
              onChange={(e) => {
                setRating(e.target.value);
              }}
            />
          </label>
          <label>
          <input type="file" onChange={onImageChange} className="filetype" />
    <img alt="preview image" src={image}/>
          </label>

          <p>
          <button>Create</button>
        </p>
        </form>


      </section>
      <Routes>
        <Route
          path="/"
          element={
            <MovieList
              moviesToDisplay={moviesToDisplay}
              callbackToDelete={deleteMovie}
            />
          }
        />
        <Route path="/about" element={<p>this is the about page</p>} />
        <Route path="/contact" element={<p>this is the contact page</p>} />
        <Route path="/movies/:movieId" element={<MovieDetails moviesToDisplay={moviesToDisplay} />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
