  
/*
     Functional Programming  is a programming paradigm where function are first calss citizens , and the focus is on  pure functions, immutable     
     it is use to improve programming strategy

     1. Maintanable / redable 
     2. Performance Oriented

     Imperative foreach v/s Declarative foreach
     Imerative map v/s Declarative map
  
*/


//  Declerative programming we focus on what do you want 

// let arr = [1,2,3,4,45];

// let newarr = arr.map(element=> 2 * element)

// console.log(newarr);

//Pure function  it returns the same outpur for the same input 
//                it doesn't cause side effects (like modifying external variables or DOM)

// function sum(a, b){
//      return a + b;
// }

// let result = sum(10, 14);

// console.log(result);

//    impute function 
// let total = 0;
// function incre(){
//        total++;  // Shared state
// }

// Immutability   do not modify existing data. Instead, return new copies
    //  string  immutable
    //  Array, Object are mutable 

//    let obj = {
//         name: 'Sumit Patel',
//         age: 22
//    } 

//    function replaceName(name){
//           let newObj = {...obj, name};
          
//           console.log(newObj);
//    }

//    replaceName('Sumit');

// let list = ['2',3.34,34];

// function addItem(item){
//        const newList = [...list, item]
//        return newList;
// }

// let newList = addItem("began")
// console.log(newList);

// let arr = ['1','sd'];

// function removeLastItem(arr){
//      let newArr =  arr.slice(0, -1);
//      return newArr;
// }

// let newArr = removeLastItem(arr);
// console.log(newArr);

// 4. Avoid shared State
// 5. Avoid shide effect

// function changeFirstLetter(str){
//       let s = str.charAt(0).toUpperCase() + str.slice(1);

//       return s;
// }

// let s = changeFirstLetter('sumit');

// console.log(s);

// 6. Reuse or compose logic

//   let na = 'Sumit Patel';
  
//   let toLower = str=> str.toLowerCase();
//   let removeSpace = str=> str.replaceAll(' ', '');
//   let addAt = str=> "@"+str;

//   function createUsername(str){
//            return  addAt(removeSpace(toLower(str)));
//   }
//   console.log(createUsername(na));

// 7. Don't iterate

// let arr = [1,2,3,4,5,6];

// let newarr = arr.filter(ele => ele % 2 === 0)

// console.log(newarr);

//  8. Loos Coupling

//   1.  // function fetchData(endpoint, route){
//     //          fetch(`${endpoint}/${route}`);
//     // }

//     // fetchData(endpoint,'user');
//     // fetchData(endpoint, 'product');
//     // fetchData(endpoint, 'id');
//   2.

// function fetchData(fn){
//         let endPoint = "https";
//         fn(endPoint)
// }

// function getUser(endPoint){
//      fetch(`${endpoint}/user`);
// }

// function getProduct(endPoint){
//      fetch(`${endpoint}/product`);
// }

// function getId(endPoint){
//      fetch(`${endpoint}/id`);
// }

// fetchData(getUser);

// function sendEmail(user){
//        console.log(`Email sent to: ${user.email}`);
// }
// function sendSms(user){
//        console.log(`Sms sent to: ${user.phone}`);
// }
// function sendWhatsapp(user){
//        console.log(`Whatsapp sent to: ${user.phone}`);
// }

// function sendMessage(user, fn){
//          console.log('Since you are authorized')
//          fn(user);
    
// }
// let user1 = {
//       name: 'Sumit',
//       email: 'patelsumit@gmail.com',
//       phon: 63933,
// }
// let user2 = {
//       name: 'Amit',
//       email: 'amit@gmail.com',
//       phone: 6345933,
// }
// sendMessage(user1,sendEmail);
// sendMessage(user2,sendWhatsapp);

// 9. First calss function and higher order function, callback function
    //    firt class function -> normal function first calss function hote hai ,  
    // higher order function   -> jo function apne andar function leta hai vo higher order function hota hai
    //    callback function -> jo andard function aaya hia highter order function ke andar uska use krke function ko call krete hai vo call back function hota hai



    //    how to use reduce function;

    // let arr =  [1,1,2,2,3];

    // let result = arr.reduce((acc, ele)=>{
    //         return  acc + ele;
    // },0);

    // console.log(result);

    // let user = {
    //       name: 'Sumit Patel',
    //       age: 23,
    // }

    // function updated(user, name){
    //        let newUser = {...user, name: name};
    //        return newUser;
    // }

    // console.log(updated(user,'Amit'));

    // let str = 'SumitPatel';

    // let reverse = str.split('').reverse().join('');

    // console.log(reverse);


    // Compose method 
    let add = num => num + 5;
    let mul = num => num * 5;
    let sub = num => num - 5;

    // console.log(sub(mul(add(6))));
    //    ...fun   // is rest operator
    // compose ->right to left   we use reduceRight()
    // pipe -> left to right     we use reduce()

//     function compose(...fun){
//            return function(val){

//                return fun.reduceRight((acc, curr)=>{
//                     return curr(acc);
//                }, val)
//            }
           
//     }

// let result =  compose(add, mul, sub)(5);

// console.log(result);

// Creating our own map;


// let con = arr.every((ele)=>{
//         return typeof ele === 'number';
// })

// console.log(con);

// let result = arr.find((ele)=>{
//         return ele === 10;
// })

// console.log(result);


// let arr = [1,2,3,4,5,6];

// function logic(ele){
//       return ele % 2 === 0;
// }

// function MyForEach(arr){
//     let outputArr = [];
//         for(let i = 0; i < arr.lenght; i++){
//                   if(logic()) {
//                     outputArr.push(arr[i]);
//                   }
//         }
//         return outputArr;
// }

// Array.prototype.myFiltter = MyForEach;

// let result = arr.myFiltter((elem)=>{
           
// })

    