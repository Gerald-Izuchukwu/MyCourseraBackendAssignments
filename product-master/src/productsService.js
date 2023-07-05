// Import the necessary dependencies
const lodash = require("lodash");
const productsList = require("./products.json").products;


const getProducts = () => {
  // get all products
  return JSON.stringify(productsList)
}

const getProductsById = (productId, done) => {
  

  // get a product by ID
  let singleProduct  = productsList.find((product)=>{
    return product.id === parseInt(productId)
    
  })
  if(!singleProduct){
    return done("Requested product doesn't exist..!", JSON.stringify(productsList))

  }else{
    return done(null, JSON.stringify(singleProduct));

  }

}

const saveProduct = (newProduct, done) => {
 // save a product
  const dupliacateProduct = productsList.map((product)=>{
    return product.id
  })
  // console.log(dupliacateProduct);
  if(dupliacateProduct.includes(newProduct.id)){
    return done('Product already exists..!', JSON.stringify(productsList))
  }else{
    productsList.push(newProduct)
    return done(null, JSON.stringify(productsList));
  }
}

const updateProduct = (productId, updateData, done) => {
  let updatedProductList = null;
  // update the product list
  const productToUpdate = productsList.find((product)=>{
    return product.id === parseInt(productId)
  })

  if(!productToUpdate){
    return done("Requested product doesn't exist..!")
  }else{

    const updatedProduct = Object.assign({}, productToUpdate, updateData)
    const index = productsList.indexOf(productToUpdate)
    productsList.splice(index, 1, updatedProduct)
    // console.log(productsList);
    return done(null, JSON.stringify(productsList));

  }

}

const deleteProduct = (productId, done) => {
  // delete a product    
  const deleteProd = productsList.find((product)=>{
    return product.id === parseInt(productId)
  })
  if(!deleteProd){
    return done("Requested product doesn't exist..!", JSON.stringify(productsList))
  }else{
    const index = productsList.indexOf(deleteProd)
    productsList.splice(index, 1)
    done(null, JSON.stringify(productsList));

  }
}


module.exports = {
  getProducts,
  getProductsById,
  saveProduct,
  updateProduct,
  deleteProduct
}