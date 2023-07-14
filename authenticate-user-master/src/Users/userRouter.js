const express = require('express')
const router = express.Router()
const userController = require('./userController')
//This get method will get the user with token
router.get('/',(req,res)=>{
        try {
                const userData = req.claims
                console.log(userData);
                if(!userData.email){
                        return res.send(400).send('user email not available')
                }
                userController.findUser(userData.email,(err,result)=>{
                        console.log('trying this');
                        if(err){
                                res.status(400).send('error getting the user', err)
                        }else{
                                console.log(result);
                                res.status(200).send(result)
                        }
           
                })
        } catch (error) {
                console.log(error);
                res.status(500).send({err: 'unexpected error, try after some timeee', error})
                
        }
   
})


module.exports = router