// Array is a special type of object.✔️
// In Array also having negative index and indexing is start from negative length of array.
// let arr = ;
// let arr1 = ["sumit patel", 12, true,[1,2,3,4,5]]; ✔️
// console.log(arr1[3]);

// Constructor method;
// let arr2 = new Array(1,2,3,4);❌
// console.log(arr2);

// Use case:   
// let arr1 = new Array(20);  // In which all 20 items with empty items
// // Like a STL vector
// let arr2 = new Array(20).fill(0);
// for(let s of arr2)
// console.log(s);
// console.log(arr2.length);

// console.log(arr);
// arr.push("Sumit");
// console.log(arr);
// let b = arr.pop();
// console.log(arr, b);

// let a = arr.unshift("Sumit");
// console.log(arr, a);
// let b = arr.shift();
// console.log(arr, b);

// let newArr = arr.slice(1, 3); // Does not change the original array.
// console.log(newArr, arr);

// let a = arr.splice(3,2); //  This function change in real array. 
// console.log(arr, a);
// let b = arr.splice(3, 0, 100, 23, 4);
// console.log(arr, b);

// let arr1 = [2,3,4,5];
// let arr2 = arr.concat(arr1);
// console.log(arr);
// console.log(arr2);

// let newArr = [...arr, ...arr1];
// console.log(newArr);

// let test = arr.join("");
// console.log(typeof test , test);

let arr = [1,1,2,3,4];
let arr1 = [2,3,4,5];

// let bool = arr.includes(1);
// console.log(bool);

// let ind = arr.indexOf(1);
// console.log(ind);

//    arr.reverse();
//    console.log(arr);

// arr.sort();
// console.log(arr);

let test = arr.find(function(item){
       return item === 1
})

console.log(test);





