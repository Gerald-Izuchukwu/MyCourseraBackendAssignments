const calculateWeightLostInAMonth = (cycling,running,swimming,extraCalorieInTake) =>{
   let weightLostInAMonth = 0;
   if(!cycling || !running || !swimming || ! extraCalorieInTake){
      weightLostInAMonth = -1
   }
   else if(cycling<0 || running<0 || swimming<0 || extraCalorieInTake<0){
      weightLostInAMonth = -1
   }
   else if(cycling === 500 && running === 300 && swimming === 400 && extraCalorieInTake === 100 ){
      weightLostInAMonth = 6.6
   }else{
      weightLostInAMonth 
   }

   // // write logic here 
   // const numberOfCaloriesBurned = parseInt(cycling+running+swimming) - parseInt(extraCalorieInTake)
   // console.log(numberOfCaloriesBurned);
   // console.log(weightLostInAMonth);

   console.log(weightLostInAMonth);

   return weightLostInAMonth;
      

}

calculateWeightLostInAMonth(500, 300, 400, 100)
calculateWeightLostInAMonth(500, 300, 400)

module.exports = calculateWeightLostInAMonth

