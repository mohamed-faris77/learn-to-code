
var fruits = ['Apple', 'Banana', 'Orange', 'Mango'];


fruits.push('Pineapple');
console.log("Array after adding Pineapple:", fruits); // Output: ['Apple', 'Banana', 'Grapes', 'Mango', 'Pineapple']

// Removing the last element from the array
var removedFruit = fruits.pop();
console.log("Removed fruit:", removedFruit); // Output: Pineapple
console.log("Array after removing last element:", fruits); // Output: ['Apple', 'Banana', 'Grapes', 'Mango']

// Finding the index of an element in the array
var index = fruits.indexOf('Banana');
console.log("Index of Banana:", index); // Output: 1

// Removing an element by index
var removedElement = fruits.splice(index, 1);
console.log("Removed element:", removedElement); // Output: ['Banana']
console.log("Array after removing Banana:", fruits); // Output: ['Apple', 'Grapes', 'Mango']
