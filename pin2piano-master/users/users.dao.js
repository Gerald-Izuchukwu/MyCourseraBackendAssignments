const { v4: uuidv4 } = require("uuid");
const User = require('../users/users.entity.js')

/* 
  saveUser should be a function that calls the save() function on Users Model 
  to persist user data in MongoDB Users collection of shoppingcartDB
*/
const saveUser = function(userDetails, done){
  let newUser = new User({
    userId: userDetails.userId,
    userName: userDetails.username,
    email: userDetails.email,
    ordersPlaced: userDetails.ordersplaced,
    tags: userDetails.tags,
    description: userDetails.description,
    updatedOn: userDetails.UpdatedOn,
    updatedBy: userDetails.UpdatedBy
  })

  newUser.save((err, result)=>{
    if(err){
      console.log(err.message);
      return done('There was error saving User')
    }
    return done(null, result)
  })


}

/* 
  findUsers should be a function that calls the find() function on Users Model 
  to fetch all documents from Users collection of shoppingcartDB
*/
const findUsers = function(done){
  User.find((err, users)=>{
    if(err){
      console.log(err.message);
      return done('There was an error finding all users')
    }
    return done(null, users)
  })
}

/* 
  getUserByEmail should be a function that calls the findOne() function on Users Model 
  to fetch User document from Users collection of shoppingcartDB,
  containing data of Users for given email
*/
const getUserByEmail = function(emailQuery, done){
  const query = {}
  if(emailQuery.Email !== ''){
    query['email'] = emailQuery.Email
  }

  User.find(query).select({_id:0, _v:0}).lean().exec((err, result)=>{
    if(err){
      console.log("Error in fetching users, Error: ", err);
      return done("Failed to find User with that email")
    }
    return done(null, result)
  })

}

/* 
  getUserById should be a function that calls the findOne() function on Users Model 
  to fetch User document from Users collection of shoppingcartDB,
  containing data of Users for given userId
*/
const getUserById = function(id, done){
  User.findById(id, (err, result)=>{
    if(err){
      console.log(err.message);
      return done('There was an error finding that user')
    }
    return done(null, result)

  })
  
}

/* 
  updateUserDetails should be a function that calls the findOneAndUpdate() 
  function on Users Model that fetches user by id from Products collection of shoppingcartDB and updates it
*/
const updateUserDetails = function(id, updateDets, done){
  User.findByIdAndUpdate(id, updateDets, {new: true},(err, result)=>{
    if(err){
      console.log(err.message);
      return done('There was an error updating that user')
    }
    return done(null, result)
  })

}

module.exports = {
  saveUser,
  findUsers,
  getUserByEmail,
  updateUserDetails,
  getUserById
}