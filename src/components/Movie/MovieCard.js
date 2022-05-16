import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import styles from "../../styles/MoviesCard.module.css";
const MovieCard = ({ movie }) => {
  const [isShown, setIsShown] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    // window.location.replace(movie.link)
    return navigate("/movie-desc")
  }
  return (
    <div onClick={handleClick}
      className={styles.container}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <div className={styles.content}>
        <div className={styles.image}>
          <img src={movie?.["image"]} alt="movie_image" />
        </div>
        <div className={styles.logo}>
          <img
            src="https://raw.githubusercontent.com/Prateek-TFT/Amazon_clone/sudip/src/assets/logo/prime.svg"
            alt="prime_logo"
          />
        </div>
        {isShown && (
          <div className={styles.details}>
            <button className={styles.button}>
              <div className={styles.play}></div>
            </button>
            <span>Included with Prime</span>
            <span className={styles.title}>{movie["movie-name"]}</span>
            <p className={styles.description}>
              {movie["description"].length > 100
                ? movie["description"].substring(0, 100) + "..."
                : movie["description"]}
            </p>
            <div className={styles.runTime}>
              <span>{movie["duration"]}</span>
              <span>{movie["movie-year"]}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default MovieCard;
