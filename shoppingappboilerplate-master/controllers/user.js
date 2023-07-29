const User = require('../model/user')

const addUser = async (req, res) => {

    try {
        // Write the code to add the user
        const { email, username, password, productList} = req.body
        if(!(email || username || password || productList)){
            res.status(400).send('All fields are required')
        }

        const existingUser = await User.findOne({email})
        if(existingUser){
            return res.status(409).send( "User already exists")
        }

        const user = await User.create({
            email: email,
            username: username,
            password: password,
            productList: productList
        })
        res.status(201).send('user saved')
    } catch (error) {
        console.log('There was an error');
        console.log(error)
    }



}

module.exports = addUser;