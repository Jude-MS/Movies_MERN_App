const mongoose = require('mongoose');

const HttpError = require('../models/http-error');
const Movie = require('../models/movie');

const getMovies = async (req, res, next) => {
    let movies;
    try {
        movies = await Movie.find({});
    } catch (err) {
        const error = new HttpError('Fetching movies failed, please try again later.', 500);
        return next(error);
    }
    res.json({movies: movies.map(movie => movie.toObject({getters: true}))});
}

const getMovieById = async (req, res, next) => {
    const movieId = req.params.mid;
    let movie;
    try {
        movie = await Movie.findById(movieId);
    } catch (err) {
        const error = new HttpError('Something went wrong, could not find a movie.', 500);
        return next(error);
    }

    if(!movie){
        const error = new HttpError('Could not find movie for the provided id.', 500);
        return next(error);
    }
    res.json({movie: movie.toObject({ getters: true })});
}

exports.getMovies = getMovies;
exports.getMovieById = getMovieById;