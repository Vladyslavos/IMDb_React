import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "./Card.scss";
import { Link } from "react-router-dom";

export default function Card({ movie }: any) {
  const [loading, setLoading] = React.useState<boolean>(true);
  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  return (
    <>
      {loading ? (
        <div className="cards">
          <SkeletonTheme highlightColor="#444">
            <Skeleton height={600} duration={2} highlightColor="#ffff" />
          </SkeletonTheme>
        </div>
      ) : (
        <Link to={`/movie/${movie.id}`} style={{ color: "#ffff" }}>
          <div className="cards">
            <img
              className="cards__img"
              src={`https://image.tmdb.org/t/p/original${
                movie ? movie.poster_path : ""
              }`}
            />
            <div className="cards__overlay">
              <div className="card__title">
                {movie ? movie.original_title : ""}
              </div>
              <div className="card__runtime">
                {movie ? movie.release_date : ""}
                <span className="card__rating">
                  {movie ? movie.vote_average : ""}
                  <i className="fas fa-star"></i>
                </span>
              </div>
              <div className="cards__description">
                {movie ? movie.overview.slice(0, 110) + "..." : ""}
              </div>
            </div>
          </div>
        </Link>
      )}
    </>
  );
}
