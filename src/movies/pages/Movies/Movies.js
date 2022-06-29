import React, { Fragment, useEffect, useState } from "react";
import MoviesList from "../../components/MoviesList";
import LoadingSpinner from "../../../shared/components/UIElements/LoadingSpinner";
import ErrorModal from "../../../shared/components/UIElements/ErrorModal";
import { useHttpClient } from "../../../shared/hooks/http-hook";
import Card from "../../../shared/components/UIElements/Card";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const responseData = await sendRequest(
          "http://localhost:5000/api/movies"
        );

        setMovies(responseData.movies);
      } catch (err) {}
    };
    fetchMovies();
  }, [sendRequest]);

  return (
    <Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!movies && <div className="center">
        <Card>
            <h2>No Movies found!</h2>
        </Card>
      </div>}
      {!isLoading && movies && <MoviesList items={movies} />}
  

    </Fragment>
  );
};

export default Movies;
