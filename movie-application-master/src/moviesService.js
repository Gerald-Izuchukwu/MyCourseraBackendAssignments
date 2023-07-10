// Import the axios library
const axios = require('axios').default
const path = require('path')
// const filePath = path.join(__dirname, 'data', 'movies.json');
const url = `http://localhost:3000/movies`


  // get all movies
const getMovies = async(done) => {
  const movies = await axios.get(url).then((response)=>{
  const data = response.data
  return data
  }).catch((error)=>{
    return done(error)
  })
  return(done(null, movies))
}

const getMoviesById = async(movieId, done) => {
  // get movie by id
  const movies = await axios.get(url).then((response)=>{
    const data = response.data
    return data
  }).catch((error)=>{
    return done(error)
  })

  const movie = movies.find((movie)=>movie.id === parseInt(movieId))
  // console.log(movie);
  return done(null, movie)
}

const saveMovie = async function (newMovie, done) {
  // save the details of a movie read from the request body
  const movies = await axios.get(url).then((response)=>{
    const data = response.data
    return data

  })
  const duplicateMovie = movies.map((movie)=>movie.id)
  console.log(duplicateMovie);
  if(duplicateMovie.includes(newMovie.id)){
    return done('Error: Movie Already Exists', JSON.stringify(data))
  }
  movies.push(newMovie)
  // console.log(movies);
  return done(null, movies)

}

const updateMovie = async function (movieId, updateData, done) {
 // update movie details of a specific movie
  const movies = await axios.get(url).then((response)=>{
    return response.data
  })
  const movieToUpdate = movies.find((movie)=>movie.id === parseInt(movieId))
  if(!movieToUpdate){
    return done('No data found')
  }
  const updateMovie = Object.assign({}, movieToUpdate, updateData)
  const index = movies.indexOf(movieToUpdate)
  movies.splice(index, 1, updateMovie)
  return done(null, movies)
}

const deleteMovieById = async function (movieId, done) {
  // delete a specific movie 
  const movies = await axios.get(url).then((response)=>{
    return response.data
  })
  const movieToDelete = movies.find((movie)=>movie.id === parseInt(movieId))
  if(!movieToDelete){
    return done('No data found')
  }
  const index = movies.indexOf(movieToDelete)
  movies.splice(index, 1)
  return done(null, movieToDelete)
}

// getMoviesById(7)

module.exports = {
  getMovies,
  getMoviesById,
  saveMovie,
  updateMovie,
  deleteMovieById
}
