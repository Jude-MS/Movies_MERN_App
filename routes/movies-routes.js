const express = require("express");
const HttpError = require("../models/http-error");
const moviesControllers = require('../controllers/movies-controllers');

const router = express.Router();

router.get('/', moviesControllers.getMovies);
router.get('/:mid', moviesControllers.getMovieById);


module.exports = router;
