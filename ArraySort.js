const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log("Sorted Fruits:", fruits.sort());
// Output: [ 'Apple', 'Banana', 'Mango', 'Orange' ]

console.log("Reversed Fruits:", fruits.reverse());
// Output: [ 'Orange', 'Mango', 'Banana', 'Apple' ]

const sortedFruits = fruits.toSorted();
console.log("Original:", fruits); 
// Output: [ 'Orange', 'Mango', 'Banana', 'Apple' ]
console.log("New Sorted:", sortedFruits); 
// Output: [ 'Apple', 'Banana', 'Mango', 'Orange' ]

const reversedFruits = fruits.toReversed();
console.log("Original:", fruits); 
// Output: [ 'Orange', 'Mango', 'Banana', 'Apple' ]
console.log("New Reversed:", reversedFruits); 
// Output: [ 'Apple', 'Banana', 'Mango', 'Orange' ]

//It starts comparing from the first letter:
// If they’re different, that decides the result.
// If they’re the same, it moves to the next letter, and so on.
const users = [
    { name: "Charlie", age: 30 },
    { name: "Alice", age: 50 },
    { name: "Bob", age: 28 }
  ];
  users.sort(function(a, b){return a.age - b.age})
  //users.sort((a, b) => a.name.localeCompare(b.name));

  console.log("Sorted by Age:", users);

  users.sort((a, b) => a.name.localeCompare(b.name));

  console.log("Sorted by Name:", users);
  // Output: sorted by name alphabetically
  