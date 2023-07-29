const express = require('express')
const router = express.Router()
const authController = require('./authController')
//Registering User
router.post('/register',(req,res)=>{
        try {
                const {name, email, password} = req.body
                if(!(name, email, password)){
                        return res.status(400).send('Required inputs are missing')
                }
                const userDetails = {
                        name,
                        email,
                        password
                }
                authController.registerUser(userDetails, (err, result)=>{
                        if(err){
                                // console.log(err);
                                return res.status(400).send({err: 'User Already Exists!...'}).json({})
                        }
                        res.status(201).send(result)
                })
        } catch (err) {
                res.status(400).send({err: 'Unexpected Error while registering the user', err})
        }
})

//This method post will login the user once they are registered
router.post('/login',(req,res)=>{
        try {
                const { email, password} = req.body
                if(!(email && password)){
                        return res.status(400).send('Required Inputs are missing')
                }
                authController.loginUser({email, password}, (err, result)=>{
                        if(err){
                                res.status(401).send({error: 'Invalid Credentials', err})
                        }else{
                                res.status(200).send({STATUS:'OK', data: result})
                        }
                })
        } catch (err) {
                res.status(400).send({err: 'Unexpected Error while login in the user', err})
                
        }

})

module.exports = router