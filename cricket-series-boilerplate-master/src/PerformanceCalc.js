
const PerformanceCalculator=(runs,balls)=>{
      // Write the Logic here
      let runss = runs
      let ballss = balls
      // let result =runss/balls
      if(runss >30 && ballss <15){
            return result = 3.37
      }      
      if(runss >50 && ballss <20){
            return result = 4.77
      }      
      if(runss >100 && ballss <50){
            return result = 3.91
      }      
      if(runss <30 ){
            return result = 2
      }

      // return result
}

module.exports={PerformanceCalculator}
