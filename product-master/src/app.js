//Import the necessary dependencies
const http = require('http')
// Define a prot at which the server will run
const PORT = process.env.PORT || 5600

const productsService = require("./productsService");
const getRequestData = require('./utils');
const { result } = require('lodash');

const server = http.createServer(async (req, res) => {

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  // Get all products
  if((req.url === '/api/v1/products'|| req.url === '/') && req.method === 'GET'){
    res.writeHead(200, {
      "Content-Type": "application/json"
    })
    console.log(req.url);
    // console.log(req.params);
    const products = productsService.getProducts()
    // console.log(products);
    res.write('hel')
    res.end(products)
  }

  // Get a product with specified id
  if (req.url.match(/\/api\/v1\/products\/([0-9])/) && req.method === 'GET') {
    const id = req.url.split('/')[4]
    const product = productsService.getProductsById(id, (err, result)=>{
      return result
    })
    if (!product) {
      res.writeHead(404, {
        "Content-Type": "application/json"
      
      })
      res.end('No Product found with that id')
    } else {
      res.writeHead(200, {
        "Content-Type": "application/json"
  
      })
      res.end(product)
    }
  }

  // Create a new product
  if(req.url === '/api/v1/products' && req.method=== 'POST'){
    res.writeHead(201, {
      "Content-Type": "application/json"
    })
    let req_body = await getRequestData(req)
    const newProduct = productsService.saveProduct(JSON.parse(req_body), (err, result)=>{
      return result
    })
    res.end(JSON.stringify(newProduct))
  }

  // Update a specific product
  if(req.url.match(/\/api\/v1\/products\/([0-9])/) && req.method === "PUT"){
    const id = req.url.split('/')[4]
    let req_body = {

    }
    const updateProduct = productsService.updateProduct(id, JSON.parse(req_body),  (err, result)=>{
      return result
    })
    if(!updateProduct){
      res.writeHead(203, {
      "Content-Type": "application/json"
      
      })
      res.end('No Product found with that id')
    }else{
      const updateJson = {
        message: "Product Updated",
        product: updateProduct
      } 
      res.end(JSON.stringify(updateJson))
    }
  }

  // Delete a specific Product
  if(req.url.match(/\/api\/v1\/products\/([0-9])/) && req.method === 'DELETE'){

    const id = req.url.split('/')[4]
    const product = productsService.deleteProduct(id, (err, result)=>{
      return result
    })
    if (!product) {
      res.writeHead(404, {
        "Content-Type": "application/json"
      
      })
      res.end('No Product found with that id')
    } else {
      res.writeHead(200, {
        "Content-Type": "application/json"
  
      })
      res.end('Product Deleted')
    }
  }

});

// listen for client requests
server.listen(PORT, () => {
  console.log(`server started on port: ${PORT}`);
})

server.on('error', (err)=>{
    console.log(err);
})

// server.on('connect', ())