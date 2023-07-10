const axios = require('axios').default
const { response } = require('express')
const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, '..', 'data', 'movies.json')
const url = "http://localhost:3000/movies"


//After starting the JSOn server check the port on which is running accordingly change 
//the port in url given below

//This method will get all movies from json server
const getMovies = async () => {
  // This url can be used - axios.get("http://localhost:3000/movies")

  const movies = await axios.get(url).then((response)=>{
    // console.log(response.data);
    return response.data
  }).catch((err)=>{
    console.log(err.message);
  })
  return movies
}

//This method will get specific movie id from json server
const getMovieById = async (movieId, done) => {
  // This url can be used- axios.get(`http://localhost:3000/movies/${movieId}`)
  const movie = await axios.get(`http://localhost:3000/movies/${movieId}`).then((response)=>{
    return response.data
  }).catch((err)=>{
    console.log(err);
  }) 
  return done(null, movie)
}
//This method will save Movie details in Json server
const saveMovieDetails = async(movieDetails, done) => {
  //This url can be used  -  axios.post(`http://localhost:3000/movies`, movieDetails)
  const movie = await axios.post('http://localhost:3000/movies', movieDetails).then((response)=>{
    return response.data
  }).catch((err)=>{
    console.log(err);
  })
  return done(null, movieDetails)
 
}

//This method will update MovieDetails in Json Server
const updateMovieDetails = (movieId, movieDetails, done) => {
  //This url can be used - axios.patch(`http://localhost:3000/movies/${movieId}`, movieDetails)
 
}

//This method will delete specific movie from Json Server
const deleteMovieById = (movieId, done) => {
  //This url can be used -  axios.delete(`http://localhost:3000/movies/${movieId}`)
 
}

getMovies()
module.exports = {
  getMovies, getMovieById, saveMovieDetails, deleteMovieById, updateMovieDetails
}
