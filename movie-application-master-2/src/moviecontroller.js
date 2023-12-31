const movieService = require('./movieservice')


const getMovies = (done) => {
//call service method getMovies method
  movieService.getMovies().then((data)=>{
    return done(null, data)
  })
 
}

const getMovieById = (movieId, done) => {
    //call service method getMovieById method
  movieService.getMovieById(movieId, done)
 
}

const saveMovieDetails = (movieDetails, done) => {
  //call service method saveMovieDetails method
  movieService.saveMovieDetails(movieDetails, done)
  
}

const updateMovieDetails = (movieId, movieDetails, done) => {
  //call service method updateMovieDetails method
 
}

const deleteMovieById = (movieId, done) => {
  //call service method deleteMovieById method
  
}

module.exports = {
  getMovies, getMovieById, saveMovieDetails, updateMovieDetails, deleteMovieById
}
