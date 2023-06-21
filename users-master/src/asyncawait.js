const users = require('./users')
// Define a function that returns a promise to get all users and return a promise
const getAllUsers = ()=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(!users){
                return reject('there are no users')
            }
            resolve(users)
            
        }, 1000);
    })
    
 
}
//Define a function to create a new user and return a promise
const createUser = (user) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(!user){
                return reject('No user to be added')
            }
            users.push(user)
            resolve(user)
        }, 1000);
    })
    
 }
// Define a function to get a user by id and return a promise
const getAUserByID = (id) =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(!id){
                return reject('User does not exist')
            }
            const userByID = users.filter(user => {
                if(parseInt(user.id) === parseInt(id)){
                    return user
                }
                
            });
            resolve(userByID)
            
        }, 1000);
    })
    
}
// Define an async function that calls the createUser and getAllUsers function using await 
// and returns all users
const displayUsers = async (user) => {
   const allUsers = await getAllUsers().then(()=>{
    console.log(users);
   }).catch((err)=>{
        if (err) {
            console.log(err);
        }
   });
   return allUsers;
}
//Define a async function to display a specific user by Id
// return the user 
const displayAUser = async(id) =>{
    const user = await getAUserByID().then(()=>{
        console.log(userByID);
    }).catch((err)=>{
        if(err){
            console.log(err);
        }
    });
    return user;
}

module.exports = {
    getAllUsers, getAUserByID, createUser, displayAUser, displayUsers
}