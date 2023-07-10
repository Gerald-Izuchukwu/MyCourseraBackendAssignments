const express = require('express')
const router = express.Router()
const productsController = require('./productsController')
const fs = require('fs')

router.get("/", (req, res) => {
  try {
    console.log(req.url);                                                                                 
    productsController.getProducts((err, results) => {
      if(err){
        return res.status(400).json({
          message: "An error occured."
        }).send(err)
      }
      return res.status(200).send({STATUS:'OK', data: results})
    });
  } catch (err) {
    return res.status(500).send('Server Error. TRy after some time')
  }
});

router.get("/:productId", (req, res) => {
  try {

    const productID = req.params.productId
    productsController.getProductById(productID, (err, results)=>{
      if(err){
        return res.status(400).send(err)
      }
      return res.status(200).send({STATUS: 'OK', data: results})
    })

    // const productID = req.params.productId
    // console.log(productID);
    // console.log(req.url);
    // productsController.getProductById(productID, (err, results) => {
    //   if(err){
    //     return res.status(400).json({
    //       message: "An error occured."
    //     })
    //   }
      
    //   const product = results.filter((result)=>result.id.toString()===productID.toString())
    //   if(!product){
    //     return res.status(404).json({
    //       message: 'No product found with that id'
    //     })
    //   }
    //   res.body = res.status(200).json({
    //     data: product
    //   })

      
    // });

  } catch (err) {
    return res.status(500).send('Server Error. TRy after some time')
  }
});

router.post("/", (req, res) => {
  try {
    //get all the productdetails from the req.body
    const productDetails = {
      id: req.body.id,
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      quantity: req.body.quantity
    }
    //calling the controller saveProductDetails method 
    //if error return the response as 400
    //if result return the response as 201 with status as OK and  data as result
    productsController.saveProductDetails(productDetails, (err, results) => {
      if(err){
        return res.status(404).send('An error occured')
      }
      return res.status(201).send({STATUS: 'OK', data: results})
      
    });

  } catch (err) {
    return res.status(500).send('Server Error. TRy after some time')
  }
});



//This method will delete product with specific productid from the product.json 
router.delete("/:productId", (req, res) => {
  try {
     //get the productid from the req.params
   

    //calling the controller deleteProductById method 
    //if error return the response as 400
    //if result return the response as 200 with status as OK and  data as result
    productsController.deleteProductById(productId, (err, results) => {
      
    });

  } catch (err) {
     //Handle the exception return response as 400 with status as some error msg
    
  }
});

module.exports = router;
