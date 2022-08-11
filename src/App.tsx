import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import MovieList from "./components/movieList/MovieList";
import Home from "./pages/home/Home";
import Movie from "./pages/movieDetail/Movie";

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="movie/:id" element={<Movie />}></Route>
          <Route path="movies/:type" element={<MovieList />}></Route>
          <Route path="/*" element={<Home />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
