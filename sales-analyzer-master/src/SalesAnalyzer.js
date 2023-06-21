
//import all the require module
const fs = require('fs')
const {filter} = require('lodash')
const csv = require('csv-parser')

//Write try and catch and handle the exceptions where ever require
//return the callback with appropriate values in the methods 

//More userdefined methods can be written if required to write the logical stuff

////This method will read the file content the first parameter is filename and 
//second is a callback
 //create array name it as  fileContents
const fileContents = []
const readFileContents = (fileName, cb) => {
  return new Promise((resolve, reject) => {
    const readFile = fs.createReadStream(fileName);
    const tempContents = [];

    readFile.pipe(csv())
      .on('data', (row) => {
        tempContents.push(row);
      })
      .on('end', () => {
        fileContents.push(...tempContents);
        resolve(cb(null, fileContents));

      })
      .on('error', (error) => {
        reject(error);
      });
  });

}

// Use Lodash to filter the data this method will take first parameter
//as fileContents and second parameter as a callback
const filterData = (fileContents, cb) => {
 
  let filteredData ;
  // console.log(fileContents);
  filteredData = fileContents.filter((content)=>content.payment_method === 'credit')
  // console.log(filteredData);
  
  cb(null, filteredData);
}

//This method will writeFile data to output.txt file
//it is taking parameters are filteredData and a callback
//filteredata will be given by the filterData method
const writeFilteredDataToFile = (filteredData, cb) => {
  try {
    //use writeFile method and write the filteredData in output.txt file

    fs.writeFile('outPut.txt', filteredData, 'utf-8', (err=null, writeFileResults)=>{
      writeFileResults = "Successfully wrote filtered data to output.txt file..!"
    })
  
  } catch (err) {
    if (err){
      console.log(err);
    }
  }
    
}

// readFileContents('../resources/Sales.csv')
module.exports = {
  readFileContents,
  filterData,
  writeFilteredDataToFile
}
