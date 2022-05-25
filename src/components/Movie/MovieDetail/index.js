import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import styles from "./MovieDetails.module.css";
import playbutton from "../../../assets/logo/play.png";
import IconButton from "../Icon";
import CastDetails from "../CastDetail";
import FeedbackButton from "../Feedback";
import RelatedMovieList from "../RelatedMovies";
import ProductionDetails from "../ProductionDetail";
import { useAuth } from "../../../store/AuthProvider";
import {
  handleAddWatchedMovies,
  handleFetchMovieDetail,
} from "../../../store/actions/movie-action";
const MovieDetails = () => {
  const [isShowMovie, setIsShowMovie] = useState(true);
  const [isShowDetails, setIsShowDetails] = useState(false);
  const { user } = useAuth();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { movieDetail } = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(handleFetchMovieDetail(id));
  }, [id, dispatch]);
  const showRelatedMoviesHandler = () => {
    setIsShowMovie(true);
    setIsShowDetails(false);
  };
  const showDetailsHandler = () => {
    setIsShowMovie(false);
    setIsShowDetails(true);
  };
  const watchedMovieHandler = () => {
    dispatch(handleAddWatchedMovies(user.uid, movieDetail));
  };
  return (
    <div className={styles.mainContainer}>
      <div
        className={styles.hoverMovieScreen}
        style={{
          backgroundImage: `linear-gradient(to right, #0f171e 10%, transparent 78%),url(${movieDetail?.["image"]})`,
          backgroundSize: "cover",
        }}
      >
        <video />
      </div>
      <div className={styles.innerContainer}>
        <h1 className={styles.heading}>{movieDetail?.["movie-name"]}</h1>
        {/* Badges Container */}
        <div className={styles.badgesContainer}>
          <div className={styles.badges}>
            <p>IMDb</p>
          </div>
          <span>{movieDetail?.["imdb"]}</span>
          <span>{movieDetail?.["duration"]}</span>
          <span>{movieDetail?.["movie-year"]}</span>
          <div className={styles.badges}>
            <p>X-Ray</p>
          </div>
        </div>
        {/* Button Container */}
        <div className={styles.buttonContainer}>
          <div className={styles.playButton} onClick={watchedMovieHandler}>
            <img
              className={styles.buttonImage}
              alt={"playButton"}
              src={playbutton}
            />
            <div>Watch with prime</div>
          </div>
          <IconButton trailer={movieDetail?.["trailer"]} />
        </div>
        <p className={styles.description}>{movieDetail?.["description"]}</p>
        <CastDetails movieDetail={movieDetail} />
        <div className={styles.termContainer}>
          <p className={styles.term}>
            By clicking play, you agree to our
            <Link to="/">Terms of Use.</Link>
          </p>
          <FeedbackButton />
        </div>
        <div className={styles.lastContainer}>
          <div className={styles.options}>
            <span
              className={isShowMovie ? styles.activeRelated : styles.related}
              onClick={showRelatedMoviesHandler}
            >
              Related
            </span>
            <span
              className={isShowDetails ? styles.activeDetails : styles.details}
              onClick={showDetailsHandler}
            >
              Details
            </span>
          </div>
        </div>
      </div>
      <div className={styles.endContainer}>
        {isShowMovie && <RelatedMovieList year={movieDetail?.["movie-year"]} />}
        {isShowDetails && <ProductionDetails movieDetail={movieDetail} />}
      </div>
    </div>
  );
};
export default MovieDetails;
