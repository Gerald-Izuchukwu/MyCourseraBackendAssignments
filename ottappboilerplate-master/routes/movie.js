const express = require('express');
const router = express.Router();
const { getMovies, addMovie, deleteMovie } = require('../controllers/movie')

/**
    Write the code to specify the route of get, add and delete the movie details
*/

router.route('/').post(addMovie).get(getMovies).delete(deleteMovie)

module.exports = router