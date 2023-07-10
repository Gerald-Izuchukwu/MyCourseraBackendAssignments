const express = require('express')
const router = express.Router()
const movieController = require('./moviecontroller')

/**
 * API to get the details of all movies
 * EFFECTIVE URL: GET /api/v1/movies
 */
router.get("/",  (req, res) => {
  try {
     movieController.getMovies((err, results) => {
      if (err) {
        return res.status(404).send(err)
      }
      // console.log(results);
      return res.status(200).send({STATUS:'OK', data: results})
    })
  } catch (err) {
    console.log(err);
    return res.status(500).send(err)
  }
});
/**
 * API to get the details of specific movie
 * EFFECTIVE URL: GET /api/v1/movie/:movieId
 */
//
router.get("/:movieId", (req, res) => {
  try {
    //retreive moviedId from req.params
    const movieId = req.params.movieId
  

    //calling controller method and passing the parameters 
    //return the response as per error or result coming from controller
    movieController.getMovieById(movieId, (err, results) => {
      if(err){
        return res.status(404).send('There was an error')
      }
      res.status(200).json({
        message: "success",
        data: results
      })
     
    });

  } catch (err) {
    console.log(err);
    return res.status(500).send(err)
  }
});

/**
 * API to save new movie
 * EFFECTIVE URL: POST /api/v1/movies
 */
router.post("/", (req, res) => {
  try {
    //retreive movieDetails from req.body
    const movieDetails = {
      id: req.body.id,
      movieName: req.body.movieName,
      director: req.body.director,
      rating: req.body.rating
    }
     //calling controller method and passing the parameters 
    //return the response as per error or result coming from controller
    movieController.saveMovieDetails(movieDetails, (err, results) => {
      if(err){
        return res.status(404).send('An error occured')
      }
      return res.status(201).send({STATUS: 'OK', data: results})
     
    });

  } catch (err) {
    return res.status(500).send('Server Error. TRy after some time')
  }
});

/**
 * API to edit movie detail
 * EFFECTIVE URL: PATCH /api/v1/movies/:movieId
 */
router.patch("/:movieId", (req, res) => {
  try {
     //retreive moviedId from req.params
    
    //retreive movieDetails from req.body
    const movieDetails = {
     
    }
    //calling controller method and passing the parameters 
    //return the response as per error or result coming from controller
    movieController.updateMovieDetails(movieId, movieDetails, (err, results) => {
    
    });

  } catch (err) {
   
  }
});

/**
 * API to delete movie
 * EFFECTIVE URL: DELETE /api/v1/movies/:movieId
 */
router.delete("/:movieId", (req, res) => {
  try {
     //retreive moviedId from req.params
   
       //calling controller method and passing the parameters 
      //return the response as per error or result coming from controller
    movieController.deleteMovieById(movieId, (err, results) => {
    })
     

  } catch (err) {

  }
});

module.exports = router;
