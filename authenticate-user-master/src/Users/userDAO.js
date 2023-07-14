const users = require('./users.json')
const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, 'users.json')

//This method will findUser
function findUser(email,done){
    const userFetched = users.filter((user)=>user.email===email)[0]
    done(undefined, userFetched)
}

//This method will register user
function registerUser(userData,done){
    users.push(userData)
    fs.writeFileSync(filePath, JSON.stringify(users))
    done(null, userData)
  
}

module.exports = {
    findUser,registerUser
}

