
//import all the require modules
const fs = require('fs')
const csv = require('csv-parser')
const lodash = require('lodash')
const { error } = require('console')
//write try catch to hanlde the exceptions

//More userdefined methods can be written if required to write the logical stuff

//return the callback with appropriate data where ever require in all the methods

//This method will read the file it takes two parameters first the fileName 
//and second the callback
const fileContents = []
const readFileContents = (fileName, cb) => {
  return new Promise((resolve, reject)=>{
    fs.access(fileName, fs.constants.F_OK, (err)=>{
      if(err){
        reject(cb("Encountered error while reading file contents..!"))
      }else{
        const tempContents = []
        const readfile = fs.createReadStream(fileName)
        readfile.pipe(csv())
        .on("error", (error)=>{
          reject (cb("Encountered error while reading file contents using streams..!"))
        })
        .on('data', (data)=>{
          tempContents.push(data)
        })
        .on('end', ()=>{
          fileContents.push(...tempContents)
          resolve(cb(null, fileContents))
        })
      }
    })

  })
 
}

//This method will sortDataonprice it will take two parameters one is fileContent
//second the callback
const sortDataOnPrice = (fileContents, cb) => {
  //use lodash.sortBy()
  return new Promise((resolve, reject) => {
    const sortedData = lodash.sortBy(fileContents, [(obj) => parseInt(obj.retail_price)])
    if(!sortedData){
      reject('this is an error')
    }
    // const finalData = lodash.compact(sortedData)
    resolve(cb(null, sortedData))
  })

  
}

//This method will sortDataonRating 
const sortDataOnRating = (fileContents, cb) => {
  return new Promise((resolve, reject) => {
    const sortedData = lodash.sortBy(fileContents, [(obj)=>parseInt(obj.product_rating)])
    const semiFinalData =sortedData.map((content)=>{
      if((parseInt(content.product_rating)).toString() !== "NaN"){
        return content
      }
    })
    const compactData = lodash.compact(semiFinalData)
    const finalData = lodash.reverse(compactData)

    resolve(cb(null, finalData))

  })
}

//This method will write the sortedData in the output file
const writeSortedDataToFile = (outputFileName, sortedData, cb) => {
 
}

module.exports = {
    readFileContents,
    sortDataOnPrice,
    sortDataOnRating,
  
}