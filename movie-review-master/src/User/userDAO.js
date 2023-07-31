require('../dbconfig/dbfile')


//create async function saveUser to save user in database taking two parameters
//user object and a callback
//return callback 
const saveUser = async(user,done)=>{
    try {
        const data = await user.save()
        return done(undefined, data)
    } catch (error) {
        console.log(error.message);
    }
}


//create async function getUserById to get userid from database taking three parameters
//user object, userId and a callback
//return callback 

const getUserById = async(user, userId, done)=>{
    try {
        const data = await user.findById(userId)
        return done(undefined, data)
    } catch (error) {
        console.log(error.message);
    }
}


module.exports = {saveUser,getUserById}