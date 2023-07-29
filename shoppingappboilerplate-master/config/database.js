const mongoose = require('mongoose');

const Mongo_URI = 'mongodb://localhost:27017/userproductdb';

exports.connect = () => {

  // Write the code to establish the database connectivity

  mongoose.connect(Mongo_URI).then(()=>{
    console.log('Database Connected...');
  }).catch((err)=>{
    console.log('There was an error connecting to datbase');
    console.log(err);
    process.exit(1)
  })

};