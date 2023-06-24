const employeeList = [
  {
    id: "1",
    employeeName: "nameofemp",
    employeeSalary: 50000,
    employeeAge: 42,
    dateOfJoining: "2006-06-30T00:00:00.000Z",
    profileImage: "image_url"
  },
  {
    id: "2",
    employeeName: "nameofemp2",
    employeeSalary: 35000,
    employeeAge: 52,
    dateOfJoining: "2003-09-15T00:00:00.000Z",
    profileImage: "image_url"
  },
  {
    id: "3",
    employeeName: "nameofemp3",
    employeeSalary: 60000,
    employeeAge: 58,
    dateOfJoining: "2004-11-06T00:00:00.000Z",
    profileImage: "image_url"
  },
  {
    id: "4",
    employeeName: "nameofemp4",
    employeeSalary: 5000,
    employeeAge: 50,
    dateOfJoining: "2005-03-17T00:00:00.000Z",
    profileImage: "image_url"
  },
  {
    id: "5",
    employeeName: "nameofemp5",
    employeeSalary: 50000,
    employeeAge: 36,
    dateOfJoining: "2010-07-07T00:00:00.000Z",
    profileImage: "image_url"
  }
]

const getEmployeeOverFifty = (employeeData) => new Promise((resolve, reject) => {
  // Write the code here
  const employeeOver50 = employeeData.filter((emp)=>{
    return emp.employeeAge > 50

  })

  if(employeeOver50.length < 1){
    reject('Empty Array')
  }
  resolve(employeeOver50.length)
  
})

const getTotalNoOfDaysSinceJoining = (employeeData) => new Promise((resolve, reject) => {
  // Write the code here
  const data = employeeData.map((emp)=>{
    let currentDate = new Date().getTime()
    let dateJoined = new Date(emp.dateOfJoining).getTime()
    let diffInDate = Math.floor((currentDate-dateJoined)/(1000*3600*24))
    return diffInDate
  })
  if(data.length < 1){
    reject('Empty Array')
  }
  resolve(data)
}

)


module.exports = { getEmployeeOverFifty, getTotalNoOfDaysSinceJoining }