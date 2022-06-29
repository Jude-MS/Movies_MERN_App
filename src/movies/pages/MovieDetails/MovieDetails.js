import React, { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./MovieDetails.css";
import { useHttpClient } from '../../../shared/hooks/http-hook';
import ErrorModal from "../../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../../shared/components/UIElements/LoadingSpinner";
import { FaPlayCircle } from 'react-icons/fa';

function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState({});
  const { isLoading, error, sendRequest, clearError} = useHttpClient();

  const movieId = useParams().mid;

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/api/movies/${movieId}`
        );

        setMovieDetails(responseData.movie);
      } catch (err) {}
    };
    fetchMovieDetails();
  }, [movieId, sendRequest])

  const loadedContentDetail = ({title, imageUrl, synopsis, rating, releaseDate}) => <Fragment>
    <div className="movie-details__name">{title}</div>
  <div className="movie-details__box">
    <div className="movie-details__img">
      <img
        src={imageUrl}
        alt="details"
      />
    </div>
    <div className="movie-details__info">
      <div className="movie-details__date">{releaseDate}</div>
      <div className="movie-details__mns">120 mns</div>
      <div className="movie-details__rating">{`${rating}/10`}</div>
      <div className="movie-details__boxBtn">
        <button className="movie-details__btn">Add to Favorite</button>
      </div>
    </div>
  </div>
  <div className='movie-details__synopsis'>
     {synopsis}
  </div>
  <div className="movie-details__trailers">
    <h4>TRAILERS</h4>
    <hr />
    <div className="movie-details__trailer"><FaPlayCircle /> Play Trailer 1</div>
    <div className="movie-details__trailer"><FaPlayCircle /> Play Trailer 2</div>
  </div>
  </Fragment>
  

  return (
    <Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && <div>
        <LoadingSpinner />
      </div>}
      {!isLoading && movieDetails && loadedContentDetail(movieDetails)}
    </Fragment>
  );
}

export default MovieDetails;
