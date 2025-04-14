console.log(process.argv) // will give all the elements in an array with string type

//using minimist
const minimist = require('minimist')
console.log("Using Minimist:", minimist(process.argv)) //This will give the elements in an object and parse using '--'