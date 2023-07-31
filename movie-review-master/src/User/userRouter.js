const express = require('express')
const router = express.Router()
const userController = require('../User/userController.js')
const User = require('../User/userModel.js')

//import the require Module

//Post method will post user in database
router.post('/', async (req, res) => {
        try {
                const {userId, userName, userEmail, userAddress} = req.body // 15b
                if(!(userName&& userEmail)){
                        return res.status(400).send('Both the email and the name are required')
                }
                const existingUser = await User.findOne({userId})
                if(existingUser){
                        return res.status(400).send('User already exists ')
                }
                const newUser = new User({
                        userId:req.body.userId, 
                        userName: req.body.userName, 
                        userEmail: req.body.userEmail, 
                        userAddress : req.body.userAddress
                } )//15a
                userController.saveUser(newUser, (err, result) => {
                        if(err){
                                return res.status(400).send('There was an err: ', err.message)
                        }
                        res.status(201).json({
                                result
                        })
                })
                // 15b and 15a can also be written as this 
                // const newUser = new User({...req.body})
        } catch (error) {
                console.log(error);
                res.status(500).send("Internal Server Error")        
        }
})

////Get method will get specific  user from database
router.get('/:id', async (req, res) => {
        try {
                const userId = req.params.id
                userController.getUserById(User, userId, (err, result) => {
                        if(err){
                                return res.status(400).send('There was an err: ', err.message)

                        }
                        res.status(200).json({
                                result
                        }) 
                })
        } catch (error) {
                console.log(error);
                res.status(500).send("Internal Server Error")     
        }

})

module.exports = router