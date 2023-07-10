

//import the productService
const productService = require('./productsService')


const getProducts = (done) => {
  //  //call service getproducts method and pass the parameter

  productService.getProducts(done)
  // const products = productService.getProducts((err, product)=>{
  //   if (err) {
  //     console.log(err);
  //   }
  //   return product
  // })
  // return done(null, products)

}

const getProductById = (productId, done) => {
   //call service getProductById method and pass the parameter
  productService.getProductById(productId, done)

  // const product = productService.getProductById(productId, (err, data)=>{
  //   if(err){
  //     console.log(err);
  //   }
  //   return data
  // })
  // return done(null, product)

}

const saveProductDetails = (productDetails, done) => {
  //call service saveProductDetails method and pass the parameter
  productService.saveProductDetails(productDetails, done)

}


 const deleteProductById = (productId, done) => {
   //call service deleteProductById method and pass the parameter
  
 }

module.exports = {
  getProducts, getProductById, saveProductDetails, deleteProductById
}
