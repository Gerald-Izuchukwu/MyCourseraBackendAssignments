const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, 'products.json')

const getProducts = function(done){
  fs.readFile(filePath, (err, fileContent)=>{
    if(err){
      return done('Error Encountered while getting products')
    }
    let productData = JSON.parse(fileContent)
    return done(null, productData)
  })
       
}

const getProductById = function(id,done){
  fs.readFile(filePath, (err, fileContent)=>{
    if (err) {
      return done('No Product with that ID ')
    }
    let productData = JSON.parse(fileContent)
    const product = productData.find((product)=>product.id.toString() === id.toString())
    if(!product){
      return done('No product with that id')
    }
    return done(null, product)
  })

  // const products = JSON.parse(readfile)

  // const arr = [...products]  
  // // console.log(arr);
  // const product = arr.filter((product)=>product.id === id)
  // return(done(null, products))

      
}


//The saveProductDetails method will take productDetails and done as callback
//It will read the product.json file
const saveProductDetails = function (ProductDetails, done) {
  //write all the logical steps
  //parse the filecontent and save it in another varible say productdata
  //push the productDetails in the productData
  fs.readFile(filePath, (err, fileContent)=>{
    if (err) {
      return done('There was error reading details')
    }
    const data = JSON.parse(fileContent)
    data.push(ProductDetails)
    const products = JSON.stringify(data, null, 2)
    fs.writeFile(filePath, products, (err)=>{
      if(err){
        return done('An Error Occured')
      }
      return done(null, ProductDetails)
    })
  })
      
  //Write the productData into the file 
     
  //return the callback with undefined and ProductDetails
     
    
}

//The method deleteProductById will take productId and done as parameters
//It will read the product.json file

const deleteProductById = function(productId, done){
    //Write all the logical steps
     //return the callback with first parameter as undefined and second parameter as productDetails
  
}

module.exports ={
    getProducts,
    getProductById,
    saveProductDetails,
    deleteProductById
    
}