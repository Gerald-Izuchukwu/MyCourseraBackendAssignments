const userdao = require('./userDAO')

function findUser(email,done){
    userdao.findUser(email, done)  
  
}

function registerUser(userData,done){
    userdao.registerUser(userData, done)
}


module.exports={
    findUser, registerUser
}
