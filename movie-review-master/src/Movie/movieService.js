const movieDao = require('../Movie/movieDAO.js')
function saveMovie(movie, done) {
  movieDao.saveMovie(movie, done) 
}



function getMovieById(movie,movieId,done){
  movieDao.getMovieById(movie, movieId, done)
}

module.exports = {saveMovie,getMovieById}