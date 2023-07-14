const userService = require('../Users/userService')
const authService = require('./authService')

function registerUser(userData,done){
  userService.findUser(userData.email, (err, result)=>{
    if(err){
      done(err)
    }else{
      if(result){
        done(result)
      }else{
        userService.registerUser(userData,done)
      }
    }
  })
}

//This function will loginUser 
//Use the method findUser of userService to first verify and if userfound than call
//the createToken method
function loginUser({ email, password }, done) {
  userService.findUser(email, (err, userFound)=>{
    if(err){
      done(err)
    }else{
      const verfiedUser = authService.verifyUser({email, password}, userFound) 
      if(userFound){
        const jwtToken = authService.createJWT(userFound)
        done(undefined, jwtToken)
      }else{
        done({error: 'User not verified'})
      }
    }
  })
  
}

module.exports = {
    registerUser,loginUser

}