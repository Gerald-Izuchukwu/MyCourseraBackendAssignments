const { v4: uuidv4 } = require("uuid");
const Product = require('../products/products.entity.js')

/* 
  saveProduct should be a function that calls the save() function on Products Model 
  to persist products data in MongoDB Products collection of shoppingcartDB
*/
const saveProduct = function(product, done){
  let newProduct = new Product({
    productId : product.productId,
    productName: product.productName,
    description: product.description,
    price: product.price,
    unitsAvailable : product.unitsAvailable,
    tags: product.tags,
    category: product.category,
    metadata: product.metadata,
    updatedOn: product.updatedOn,
    updatedBy: product.updatedBy


  })

  newProduct.save((err, savedProduct)=>{
    if(err){
      console.log('Error in saving product, Error, ', err);
      return done("Failed to save product")
    }
    return done(null, savedProduct)
  })
  // newProduct.create((err, savedProduct)=>{
  //   if(err){
  //     console.log('Error in saving product, Error, ', err);
  //     return done("Failed to save product")
  //   }
  //   return done(null, savedProduct)
  // })

  // Product.create(newProduct, (err, result)=>{
  //   if(err){
  //     console.log("Product not created");
  //     return done()
  //   }
  //   return done(null, savedProduct)
    
  // })
  
}

/* 
  getProductById should be a function that calls the findOne() function on Products Model 
  to fetch the Product document by provided Id from the Products collection of shoppingcartDB
*/
const getProductById = function(id, done){
  Product.findById(id, (err, result)=>{
    if(err){
      console.log(err.message);
      return done('There was an error finding that product')
    }
    return done(null, result)
  })

}

/* 
  findProductsByQuery should be a function that calls the find() function on Products Model 
  with query specifying criteria on category and productName fields
  The function should fetch all documents that matches the criteria from Products 
  collection of shoppingcartDB
*/
const findProductsByQuery =function (productQuery, done) {
  const query = {}
  if(productQuery.Price!== ''){
    query['Price'] = productQuery.Price
  }  
  if(productQuery.ProductName!== ''){
    query['PoductName'] = productQuery.ProductName
  }
  Product.find(query).select({_id:0, _v:0}).lean().exec((err, results)=>{
    if(err){
      console.log("Error in fetching products, Error: ", err);
      return done("Failed to find Product")
    }
    return done(null, results)
  })
  
}

/* 
  updateProductDetails should be a function that calls the findOneAndUpdate() 
  function on Products Model that fetches product by id from Products collection of shoppingcartDB and updates it
*/
const updateProductDetails = function(id, updateData, done){
  Product.findOneAndUpdate({"ProductId": id}, updateData, {new: true}, (err, updateResult)=>{
    if(err){
      console.log('There was an error updating');
      return done('There was an error updating the product')
    }
    return done(null, updateResult)
  })
}


module.exports = {
  saveProduct,
  getProductById,
  findProductsByQuery,
  updateProductDetails
}