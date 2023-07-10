

//import the DAO layer
const productData = require('./productDao')


const getProducts = function(done){
  //call dao getproducts method and pass the parameter
  productData.getProducts(done)

  // const products = productData.getProducts((err, product)=>{
  //   if (err) {
  //     console.log(err);
  //   }
  //   return product
  // })
  // // return(done(null, products))
  // return done(null, products)
  
}

const getProductById = function(id, done){
  //call dao getProductById method and pass the parameter

  productData.getProductById(id, done)

  // const product = productData.getProductById(id, (err, data)=>{
  //   if(err){
  //     console.log(err);
  //   }
  //   return data
  // })
  // return done(null, product)
 
}
const saveProductDetails = function(productDetails, done){
  //call dao saveProductDetails method and pass the parameter
  productData.saveProductDetails(productDetails, done)

}


const deleteProductById = (productId, done) => {
//call dao deleteProductById method and pass the parameter
}


module.exports = {
  getProducts, getProductById,saveProductDetails, deleteProductById
}
