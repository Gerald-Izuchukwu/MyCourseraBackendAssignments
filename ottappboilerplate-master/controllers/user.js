const User = require('../model/user')

const addUser = async (req, res) => {

    /**
        Write the code to add the user details to the database
    */

    try {
        const {email, username, password, watchList} = req.body
        if (!(email && username && password && watchList)){
            return res.status(400).send('All fields are required')
        }

        const existingUser = await User.findOne({email})

        if(existingUser){
            return res.status(401).send('User Already exists')
        }

        const user = await User.create({
            email, username, password, watchList
        })
        res.status(201).send({message: "User created", user})
    } catch (error) {
        console.log('There was an error');
        console.log(error);
    }

}


module.exports = addUser;