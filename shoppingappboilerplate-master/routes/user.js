const express = require('express');

const addUser = require('../controllers/user')

const router = express.Router();

// Write the code to specify the route of addUser method
router.route('/').post(addUser)

module.exports = router;