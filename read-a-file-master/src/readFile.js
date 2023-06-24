const { error } = require("console");
const fs = require("fs");
// import the lodash library
const lodash = require("lodash");

// Read the file data and return the data in the resolved Promise
const read = (fileName) => {
  return new Promise((resolve, reject) => {
    const readfile = fs.createReadStream(fileName, 'utf-8')
    readfile.on('data', (data)=>{
      resolve(data)
    })
    .on("error", (error)=>{
      reject(error)
    })
  });
};
// Define a function to Convert the file content to upper case and return the result in the resolved Promise
const convertToUpperCase = (fileContents) => {
  return new Promise((resolve, reject) => {
    if(!fileContents){
      reject('No data passed')
    }
    const split = fileContents.split(',')
    const newArr = split.map((ele)=>{
      return ele.toUpperCase()
    })
    resolve(newArr)
  });
};
// Define a function to read and convert the file contents, use the then and catch blocks here
const readAndConvertFileContents = (fileName, cb) => {
  return new Promise((resolve, reject) => {
    try {
      const arr = []
      const newArr = []
      fs.access(fileName, fs.constants.F_OK, (err)=>{
        if(err){
          reject(cb("Encountered error while reading file contents..!"))
        }else{
          const readfile =fs.createReadStream(fileName,'utf-8')
          readfile.on('data', (data)=>{
            arr.push(data)
            // console.log(arr);
          })
          .on('end', ()=>{
            newArr.push(...arr)
            const upperCaseArr= newArr.map((ele)=>{
              return ele.toUpperCase()
            })
            const splitArr = upperCaseArr.join(',')
            console.log(splitArr);
            const finalArr = splitArr.split(',')
            console.log(finalArr);
    
            resolve(cb(null, finalArr))
          })
        }
      })

    } catch (error) {
      throw new Error('Encountered error while reading file contents..!')
    }
  })
};

// const fileContentss = "jeNNy,joNaTHan,HARRY,JoNNY,SamaTHA,Michael,ROBERT,david,SmitH,GarCIA,willIAM,THOmas,daniel,maTTHew,AnTHonY"
// convertToUpperCase(fileContentss).then((resut)=>{
//   console.log(resut);
// }).catch(err=>{
//   console.log(err);
// })

readAndConvertFileContents("../resources/input.txt", (err, result)=>{
  console.log(result);
})

module.exports = {
  readAndConvertFileContents,
};
