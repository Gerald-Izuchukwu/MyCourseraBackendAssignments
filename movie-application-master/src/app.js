// Import the required dependencies
const http = require("http");
const moviesService = require("./moviesService");
const getRequestData = require("./utils");

// Define the port at which the application will run
const PORT = 5000;

// Define the server
const server = http.createServer(async (req, res) => {
  // Get all movies
  if(req.url === '/api/v1/movies' && req.method==='GET'){
    res.writeHead(200, {
      "Content-Type": "application/json"
    })
    moviesService.getMovies((err, data)=>{
      if (err) {
        return res.end('An error occured')
      }
      const movies = JSON.stringify(data)
      return res.end( movies)

    })
  }
  // Get a movie with specified id
  if (req.url.match(/\/api\/v1\/movies\/([0-9])/) && req.method === 'GET') {
    const id = req.url.split('/')[4]
    console.log(req.url);
    console.log(id);
    const movie = await moviesService.getMoviesById(id, (err, result)=>{
      if(err){
        console.log(err);
      }
      console.log(result)
      return result
    })
    if (!movie) {
      res.writeHead(404, {
        "Content-Type": "application/json"
      
      })
      res.end('No Movie found with that id')
    }else {
      res.writeHead(200, {
        "Content-Type": "application/json"
  
      })
      res.end(JSON.stringify(movie))
    }
  }
  // Save movie details
  if(req.url === '/api/v1/movies' && req.method === 'POST'){
    res.writeHead(201, {
      "Content-Type": "application/json"
    })
    let req_body = await getRequestData(req)
    // console.log(req_body);
    const newMovie = await moviesService.saveMovie(JSON.parse(req_body), (err, result)=>{
      if(err){
        return res.end(err)
      }else{
        // console.log(result);
        return result
      }
    })
    console.log(newMovie);
    res.end(JSON.stringify(newMovie))
  }
  // Update a specific movie
  if (req.url.match(/\/api\/v1\/movies\/([0-9])/) && req.method === 'PUT') {
    const id = req.url.split('/')[4]
    console.log(req.url);
    console.log(id);
    const movie = await moviesService.updateMovie(id, JSON.parse(req_body), (err, result)=>{
      if(err){
        console.log(err);
      }
      console.log(result)
      return result
    })
    if (!movie) {
      res.writeHead(404, {
        "Content-Type": "application/json"
      
      })
      res.end('No Movie found with that id')
    }else {
      res.writeHead(200, {
        "Content-Type": "application/json"
  
      })
      res.end(JSON.stringify(movie))
    }
  }
  // Delete a specific movie
  if (req.url.match(/\/api\/v1\/movies\/([0-9])/) && req.method === 'DELETE') {
    const id = req.url.split('/')[4]
    console.log(req.url);
    console.log(id);
    const movie = await moviesService.deleteMovieById(id, (err, result)=>{
      if(err){
        console.log(err);
      }
      console.log(result)
      return result
    })
    if (!movie) {
      res.writeHead(404, {
        "Content-Type": "application/json"
      
      })
      res.end('No Movie found with that id')
    }else {
      res.writeHead(200, {
        "Content-Type": "application/json"
  
      })
      const res_body = {
        message: 'The following movie was deleted',
        movie: movie
      }
      res.end(JSON.stringify(res_body))
    }
  }

  // If no route present capture in the else part
});
// listen to the server on the specified port
server.listen(PORT, () => {
  console.log(`server started on port: ${PORT}`);
});
server.on("error", (error) => {
  if (error.code === "EADRINUSE") {
    console.log("Port already in use");
  }
});
