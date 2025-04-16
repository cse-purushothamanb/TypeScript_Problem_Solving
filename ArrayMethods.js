//Array Methods in JS

//Array.length
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const TempArray = ["Carrot", "Brinjal", "Cucumber", "Drum Stick"];
let size = fruits.length;
console.log("Fruits Size: ",size)

//Array.toString()
console.log("Before Converting String: ",TempArray)
let ConvertedToString = TempArray.toString()
console.log("After, Converted String: ",ConvertedToString)

//Array.at()
console.log("At Index 2",TempArray.at(2))

//Array.join()
console.log("Join with #: ",TempArray.join("#"))

//Array.pop() --> It returns the popping element
console.log("Popping element: ",TempArray.pop())

//Array.push() --> It returns the index of the element to be pushed
console.log("Appending Mango on the Stack: ",TempArray.push("Mango"))

//Array.shift() --> returns the value that was "shifted out"
console.log("Removing First element of the Array and moving the remaining elements to its lower index: ",TempArray.shift())

//Array.unshift() --> method returns the new array length
console.log("Adding a new element to the zeroth index of the Array",TempArray.unshift("New Element"))

//Array.concat() --> method returns a new array by merging (concatenating) existing arrays
console.log("Concatinating Fruits and TempArray: ",fruits.concat(TempArray))

//Array.copyWithin() --> method overwrites the existing values.
console.log("Copy the content at index 2 to 0: ",TempArray.copyWithin(2,0)) // Element at index 2 will be copied to element at index 0

//Array.flat()
const myArr = [[1,2],[3,4],"Heyy",[5,6]];
console.log("Flat function: ",(myArr.flat()))
console.log("Flat function Accessing: ",(myArr.flat())[2])

//Array.splice
// The first parameter (2) defines the position where new elements should be added (spliced in).
// The second parameter (0) defines how many elements should be removed.
// The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
// The splice() method returns an array with the deleted items
console.log(TempArray)
console.log("Splice Method: ",TempArray.splice(2,1,"Kiwi"))
console.log(TempArray)

//The difference between the new toSpliced() method and the old splice() method is that the new method creates a new array, keeping the original array unchanged, while the old method altered the original array.
console.log("To Splice Method: ",TempArray.toSpliced(2,1))
console.log(TempArray)

//Array.slice()
//The slice() method creates a new array.
//The slice() method does not remove any elements from the source array.
console.log("Sliced: ",TempArray.slice(2))
console.log(TempArray)