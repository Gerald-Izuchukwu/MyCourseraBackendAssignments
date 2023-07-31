const mongoose = require("mongoose");

const { MONGO_URI } = process.env;
// mongodb://localhost:27017/userproductdb

exports.connect = () => {

   mongoose.connect(MONGO_URI, {}).then(()=>{
    console.log('db is running');
   }).catch((err)=>{
    console.log('There was an error');
    console.log(err);
   })
  
  /**
  
    Write the code for Connecting to the database based upon following points
  
    a.	First create a const mongoose obect which will have  “mongoose” reference.
    b.	After that set MONGO_URI as process.env
    c.	Then connect to database using the mongo repository name.
    d.	If it connects then print “Successfully connected to movie database” in console.
    e.	Also implement a catch satatement to catch error while connecting to database which will display a message “database connection failed.”
  */


};
