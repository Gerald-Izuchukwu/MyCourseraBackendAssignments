//import all the modules require
const fs = require('fs')
const readline = require('readline')
const csv = require('csv-parser')
const lodash = require('lodash')
const csvParser = require('csv-parser')

const readFileContentsLineByLine = (fileName, cb) => {
 
  return new Promise((resolve, reject)=>{
    let fileContents = [];

    const parseCSVData = (data) => {    
      const parsedData = [];
      
      data.forEach((line) => {
        const parsedLine = csvParser(line);
        parsedData.push(parsedLine);
      });
      fs.createWriteStream('output.txt').write(JSON.stringify(parsedData))
      return parsedData;
    };

    const readStream = fs.createReadStream(fileName)
    const rl = readline.createInterface({
      input: readStream,
      output: process.stdout,
      terminal: false
    });
  
    rl.on('line', (line)=>{
      fileContents.push(line)
    })
    rl.on('close', ()=>{
      const parsedData = parseCSVData(fileContents)
      resolve(cb(null, parsedData))
    })

    readStream.on('error', (error)=>{
      reject(error)
    })  
  
  })
  
}

const filterFemaleCandidates = (fileContents, cb) => {
  return new Promise((resolve, reject)=>{
    let filteredData = fileContents.map((content)=>{
      if(content.includes('female') && content.includes('southwest')){
        return content
      }
      
    })

    const finalData = lodash.compact(filteredData)
    if(!filteredData){
      const err = 'There is no error'
      reject(err)
    }
  
    resolve(cb(null, finalData))
  
  })  
}

//This method will write filtered data in the output file
const writeFilteredDataToFile = (outputFileName, filteredData, cb) => {
 
  const writtenData = fs.writeFileSync(outputFileName, filteredData)
  cb(null, writtenData)
  
}


//This method will read the file content using Streams
//create array and push all the data from file to it

const fileContents = []
const readFileContentsUsingStream = (fileName, cb) => {
  return new Promise((resolve, reject)=>{
    let tempContents = [];

    fs.createReadStream(fileName).pipe(csv())
      .on("error", (err) => {
        console.log("Error while reading contents of file using streams, ERROR::", err);
        cb("Encountered error while reading file contents using streams..!");
        reject(err)
      })
      .on('data', (data)=>{
        tempContents.push(data)
      })
      .on('end', ()=>{
        fileContents.push(...tempContents)
        resolve(cb(null, fileContents))
      })
  })

   
}

//This method will filetDatewithNoChildren it will take two parameters
//first the fileContent and second the callback
//use map if required to filter the data

const filterDataWithNoChildren = (fileContents, cb) => {
  let filteredData ;
//use lodash.compact() if required 

  
}




module.exports = {
  readFileContentsLineByLine,
  filterFemaleCandidates,
  readFileContentsUsingStream,
 }
