const userDao =require('../User/userDAO.js')

function saveUser(user, done) {
  userDao.saveUser(user, done)
}

function getUserById(user,userId,done){
  userDao.getUserById(user, userId, done)  
}

module.exports = { saveUser,getUserById }