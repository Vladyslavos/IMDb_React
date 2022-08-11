import React from "react";
import Card from "../card/Card";
import "./MovieList.scss";
import { useParams } from "react-router-dom";
import { FilmPage } from "../../dataTypes";

export default function MovieList() {
  const [movieList, setMovieList] = React.useState<FilmPage["results"]>([]);
  const { type } = useParams();

  React.useEffect(() => {
    getData();
  }, []);

  React.useEffect(() => {
    getData();
  }, [type]);

  const getData = (): void => {
    try {
      fetch(
        `https://api.themoviedb.org/3/movie/${
          type ? type : "popular"
        }?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
      )
        .then((res) => res.json())
        .then((data) => setMovieList(data.results));
    } catch (err) {
      console.warn("Error>>", err);
    }
  };
  return (
    <div className="movie__list">
      <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
      <div className="list__cards">
        {movieList.map((movie) => (
          <Card movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}
