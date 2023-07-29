const User = require('../model/user')
const Product = require('../model/product')

const getProducts = async (req, res) => {

    try {
        // Write the code to get the product details
        const products = await Product.find()
        if(!products){
            return res.status(400).send('There was no product found')
        }
        res.status(200).send({
            STATUS: "OK",
            products
        })        
    } catch (error) {
        console.log('There was an error');
        console.log(error)       
    }
    


}

const addProduct = async (req, res) => {
    try {
        // Write the code to add the product details
        const {productId,productName, productDisc, inStock } = req.body
        if(!(productId || productDisc || productName|| inStock)){
            return res.status(400).send('All Fields are required')
        }

        const existingProduct = await Product.findOne(productId)
        if(existingProduct){
            return res.status(409).send('Product Already exists')
        }

        await Product.create( {
            productId,
            productName,
            productDisc,
            inStock 
        })
        res.status(200).send({
            STATUS : "OK",
            Message: 'Product Created'

        })
    } catch (error) {
        console.log('There was an error');
        console.log(error);
    }
}

const deleteProduct = async (req, res) => {

    try {
        const productId = req.params.productId
        if(!productId){
            return res.status(400).send("No Product with that productId")
        }else{
             await Product.deleteOne(productId) 
        }
    
        
    } catch (error) {
        console.log('There was an error');
        console.log(error);        
    }
}

module.exports = { getProducts, addProduct, deleteProduct };