const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");

const initializeConnection = () => {
  /* create a connection object using createConnection function of mysql module*/
  const connection =  mysql.createConnection({
    host: dbConfig.HOST,
    database: dbConfig.DB,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD
  })



  connection.connect(function(err){
    if(err){
      console.log('error occured while connecting...');
    }else{
      console.log('Connection created with mysql database successfully');
    }
    
    // const queries = sql.split(';').filter(query => query.trim() !== '');
    // queries.forEach((query) => {
    //   connection.query(query, (err, results) => {
    //     if (err) {
    //       console.error('Error executing the SQL command:', err);
    //     } else {
    //       console.log('Query executed successfully!');
    //     }
    //   });
    // });
  });

  return connection;
}

// initializeConnection()
module.exports = initializeConnection;