// Define a function to calculate the total marks and return a promise 
const calculateTotalMarks = (math,english,science,social,language) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let totalMarks = math+english+science+social+language
            if(!math || !english || !science || !social || !language){
                return reject('Null values for marks')
            }
            resolve(totalMarks)
        }, 1000);
        
        }) 
}
// Define a function to calculate average marks and return a promise
const calculateAverageMarks = (totalMarks) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let averageMarks = totalMarks/5
            if(!totalMarks || totalMarks===0){
                return reject('Please Provide a valid total mark')
            }
            resolve(averageMarks)
            
        }, 2000);
    
    }) 
}
// Define a function to calculate grade and return a promise
const calculateGrade = (averageMarks)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let grade = ''
            if(!averageMarks){
                return reject('Please enter an average mark')
            }
            if(averageMarks>=90){
                grade = 'A+'
            }else if(averageMarks>=80){
                grade = 'A'
            }else if(averageMarks>=70){
                grade = 'B'
            }else if(averageMarks>=60){
                grade = 'C'
            }else if(averageMarks>=50){
                grade = 'E'
            }else if(averageMarks<50){
                grade = 'F'
            }else{
                grade = ''
            }
            resolve(grade)
            
        }, 5000);
    
    })   
}

module.exports = {
    calculateAverageMarks,calculateGrade,calculateTotalMarks
}
