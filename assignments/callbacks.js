const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
 return cb(arr);
}

function getFirstItem(array){
  return `The first Item is ${array[0]}`;
}

console.log(firstItem(items, getFirstItem));

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr);
}

const findLength = (array)=> {
  return `The length of the array is ${array.length}`;
}

console.log(getLength(items, findLength));

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr);
}

const findLast = (array) => {
  return `The last Item in the array is ${array[array.length - 1]}`
}

console.log(last(items, findLast));

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x, y);
}

const sum = (num1, num2) => {
  return `The sum of x and y is ${num1 + num2}`;
}

console.log(sumNums(3, 10, sum));

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x, y);
}

const multiply = (num1, num2)=> {
  return `The multiplies of x and y if ${num1 * num2}`
}

console.log(multiplyNums(5, 10, multiply));

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  return cb(item, list);
}

const isContained = (item, list) => {
 return list.indexOf(item) == -1 ? `${item} does not contain in the list so I return ${false}` : `${item} is contained in the list so I return ${true}`;
}

console.log(isContained('Pencil', items));
/* STRETCH PROBLEM */
const array = ["apple", "bannana", "orange", "apple", "orange"]
function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  return cb(array);
}

const checkForDuplicate = (arr) => {
  return arr.filter(function(element, index, array ) {
    return array.indexOf(element) == index;
});
}

console.log(removeDuplicates(array, checkForDuplicate));