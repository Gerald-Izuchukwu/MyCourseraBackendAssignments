const express = require('express')
const router = express.Router()
const Movie = require('../Movie/movieModel.js')
const movieController = require('../Movie/movieController.js')

//Post method will post movie in database
router.post('/', async (req, res) => {
        try {
                const {movieId, directorName, movieName} = req.body
                const newMovie = new Movie({...req.body})
                if(!(directorName && movieName)){
                        return res.status(400).send('Movie Name and Director name is required')
                }
                // const existingMovie = Movie.findOne({movieId})
                // if(existingMovie){
                //         return res.status(400).send('Movie already exists')
                // }
                movieController.saveMovie(newMovie, (err, result) => {
                        if(err){
                                return res.status(400).send('There was an error saving movie')
                        }
                        res.status(201).send('movie added')
                })
        } catch (error) {
                console.log(error);
                res.status(500).send("Internal Server Error") 
        }
})

////Get method will get specific  movie from database
router.get('/:id', async (req, res) => {
        try {
                const movieId = req.params.id
                movieController.getMovieById(Movie, movieId, (err, result) => {
                        if(err){
                                return res.status(400).send('There was an err: ', err.message)

                        }
                        res.status(200).json({
                                result
                        }) 
                })
        } catch (error) {
                console.log(error);
                res.status(500).send("Internal Server Error") 
        }
})

module.exports = router