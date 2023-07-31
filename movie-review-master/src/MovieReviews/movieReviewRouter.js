const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const axios = require('axios').default
require('../dbconfig/dbfile')
const MovieReview = require('../MovieReviews/movieReviewModel')
router.post('/', async (req, res) => {
  try {
    const newMovieReview = new MovieReview({
      userId : mongoose.Types.ObjectId(req.body.userId),
      movieId : mongoose.Types.ObjectId(req.body.movieId)
    })
    const data = await newMovieReview.save()
    if(data){
      res.status(200).send('success')
    }
  } catch (error) {
    console.log('error', error);
  }
})
 
//This get will retreive userid and its movie data
router.get('/:id', (req, res) => {
  MovieReview.findById(req.params.id).then((review)=>{
    if(review){
      console.log(review);
      const reviewObject = {}
      axios.get(`http://localhost:4000/user/${review.userId}`).then((response)=>{
        console.log('this is response data');
        console.log(response.data);
        reviewObject.UserName = response.data.result.userName
      })
      axios.get(`http://localhost:5000/movie/${review.movieId}`).then((response)=>{
        console.log('this is another response data');
        console.log(response.data);
        reviewObject.MovieName = response.data.result.movieName
        reviewObject.MovieDirector = response.data.result.directorName
        reviewObject.MovieReview = response.data.result.movieReview
        console.log('In review ', reviewObject);
        res.json(reviewObject)
      })
    }else{
      res.status(401).send('Movie review not found')
    }
  }).catch((err)=>{
    res.status(500).send("Internal Server Error")
    console.log(err.message);
  })
     
})	
  






module.exports = router
