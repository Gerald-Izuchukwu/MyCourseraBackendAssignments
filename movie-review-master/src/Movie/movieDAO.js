require('../dbconfig/dbfile')

const saveMovie = async(movie, done)=>{
    const data = await movie.save() //we used save instead of create because we ar calling it on an instance and not the model
    return done(null, data)
}

const getMovieById = async(movie, movieId, done)=>{
    const data = await movie.findById(movieId)
    return done(null, data)
}

module.exports = {saveMovie,getMovieById}