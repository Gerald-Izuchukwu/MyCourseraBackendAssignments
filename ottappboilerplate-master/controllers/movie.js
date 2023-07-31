const User = require('../model/user')
const Movie = require('../model/movie')


const getMovies = async (req, res) => {

    /**
        Write the code to get the movie details from database
    */

    try {
        const movies = await Movie.find()
        if(!movies){
            return res.status(400).send('No movies found')
        }
        res.status(200).json({movies})
    } catch (error) {
        console.log('There was an error');
        console.log(error);        
    }


}

const addMovie = async (req, res) => {

    /**
        Write the code to add the movie details to the database
    */
   try {
    const { movieId, movieName, yearReleased} = req.body
    if(!(movieId && movieName && yearReleased)){
        return res.status(400).send('All fields are requried')
    }
    const existingMovie = await Movie.findOne({movieId})
    if(existingMovie){
        return res.status(400).send('Movie already exists')
    }
    const movie = await Movie.create({
        movieId, movieName, yearReleased
    })
    res.status(201).json({message: 'Movie added', movie})
   } catch (error) {
    console.log('There was an error');
    console.log(error);
   }
}

const deleteMovie = async (req, res) => {

    /**
        Write the code to delete the movie details from database
    */

        try {
            const movieId = req.params.productId
            if(!movieId){
                return res.status(400).send("No Movie with that productId")
            }else{
                 await Product.deleteOne(movieId) 
            }
        
            
        } catch (error) {
            console.log('There was an error');
            console.log(error);        
        }

}

module.exports = { getMovies, addMovie, deleteMovie };