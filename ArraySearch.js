//Array Search
const fruits = ["Apple","Banana", "Orange", "Apple", "Mango"];

//Array.indexOf()
console.log("Index of Apple: ",fruits.indexOf("Apple"))

//Array.lastIndexOf()
console.log("Last Index of: ",fruits.lastIndexOf("Apple"))

//Array.includes()
console.log("Array Includes Mango? ",fruits.includes("Mango"))

//Array.find() -->method returns the value of the first array element that passes a test function.
console.log("Find function: ",fruits.find((value, index, array)=>{
    return value==="Orange"
}))

//Array.findIndex() --> method returns the index of the first array element that passes a test function.
console.log("Find Index: ",fruits.findIndex((value, index, array)=>{
    return value==="Apple"
}))

//Array.findLast() method that will start from the end of an array and return the value of the first element that satisfies a condition.
console.log("Find Last: ",fruits.findLast((value, index, array)=>{
    return value==="Apple"
}))
