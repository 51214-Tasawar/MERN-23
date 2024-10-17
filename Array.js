//Arrays are itrative
let arr = [1 ,2 ,3 ,4 ,5]
 
let arr1 = arr ; // Assigning arr to arr1

arr1[5]="Testing Demo" // changes in arr1 also change in arr 
// console.log(arr) // Output [ 1, 2, 3, 4, 5, 'Testing Demo' ]
arr.shift();
// console.log(arr1)  // changes in arr also change in arr1 output of arr1 [ 2, 3, 4, 5, 'Testing Demo' ]
/*
     * Removes the first element from an array and returns it.
     * If the array is empty, undefined is returned and the array is not modified.
 */
arr.unshift(1)
// console.log(arr1)  // Output [ 1, 2, 3, 4, 5, 'Testing Demo' ]
//Inserts new elements at the start of an array, and returns the new length of the array.
// console.log(arr.includes(3));  // Determines whether an array includes a certain element
// console.log(arr.indexOf(3));  // Returns the index of the first occurrence of a value in an array
// arr.push("Test") //Appends new elements to the end of an array
arr.pop() //Removes the last element from an array and returns it
console.log(arr)