//Arreglos en JS

// const arr = new Array(100);
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let arr2 = [...arr, 5];

const arr3 = arr2.map(function (item) {
  return item * 2;
});

console.log(arr);
console.log(arr2);
console.log(arr3);
