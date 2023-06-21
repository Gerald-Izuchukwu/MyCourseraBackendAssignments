
//import OS module
const os = require('os')

//Create a function to get the name of the operating system of host machine.​
function getOSName() {
  const OSName = os.type()
  return OSName
  
}

//Create a function to get returns the number of free memory of the system in bytes.​
function getFreeMemory() {
  const fremem = os.freemem()
  return fremem
  
}
//Create a function to get the information about current user of the system.​
function getCurrentUser() {
  const userDir = os.homedir()
  return userDir
}

//Create a function to get the information of the hostname.
function getHostName() {
  const hostname = os.hostname()
  return hostname
  
}

//Create a function to get the information about the CPU.
function getCPUDetails() {
  const cpuDets = os.cpus()
  return cpuDets
  
}



module.exports = {
  getOSName,
  getFreeMemory,
  getCurrentUser,
  getHostName,
  getCPUDetails
}