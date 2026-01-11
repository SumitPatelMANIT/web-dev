//  Question 1:
// 
// let num1 = prompt("Enter first number");
// let num2 = prompt("Enter second number");

// console.log(typeof num1);
// console.log(typeof num2);

// let result = parseInt(num1) + parseInt(num2);

// console.log("Sum of number =", result);

//    Question 2:   

// let a = b = c = 30;
// console.log(a);

//  Question 3:
// let num = prompt("Enter a number");

// console.log( (parseInt(num) % 2 == 0) ? "Number is even" : "Number is odd" );

// Question 4 :

// let num = Number(prompt("Enter a number"));

// let result = (num >= 10 && num <= 20) ? "Yes" : " No";

// console.log(result);

// Question 5 : 

// let username = "";
// let password = "";
// let databaseUser = "Sumit";
// let databasePass = "1234";

// username = prompt("Enter the username");
// password = prompt("Enter the password");

// let result = (username && password && username === databaseUser && password === databasePass) ? "Login Successfully" : "Invalid Credential";

// console.log(result);

// Question 6 :

// let a = 5, b = 3, c = 2;

// let result = a++ + --b * c-- - ++a + b-- / --c;
//     //         5  + 2  * 2  - 7  + 2 / 0dfsa
// console.log(result);

// Question 7 :

// let x = 10;
// let y = 5;
// let z = "10";

// x += y * 2;  // x = 20;
// let isEqual = x == z;  // isEqual = false;
// let isStrictEqual = x === z; // isStrictEqual = false;
// let logicTest = (isEqual || isStrictEqual) && !(y > 10);
//       // logicTest = false;
// let result = logicTest ? ++x : --y;
//          // result = 4, y = 4
// console.log("x:", x);  // 20
// console.log("y:", y);  // 4
// console.log("z:" ,z);  // 10
// console.log("isEqual:", isEqual);             // false
// console.log("isStrictEqual:", isStrictEqual); // false
// console.log("logicTest:", logicTest);         // false
// console.log("result:" ,result);               // 4
// console.log("Type of z:", typeof z);          // string


// Question 9:

// let a = 6;
// let b = 3;
// let c = "6";

// a += b << 1;   // a = 12;
// let d = a & b;  // d = 0;
// let e = a | b;  // e = 15;         
// let f = a ^ b;  // f = 15;
// let g = ~a;    //  g = 7;

// let check = (a == c) && (d < e) || !(f === e);
//          //  false  &&  true   || false;   check = false;
// let result = check ? typeof g : --b;
//         // result = 2     , b = 2
// console.log("a:", a);   // a = 12
// console.log("b:", b);   // b = 2
// console.log("c:", c);   //  c = 6
// console.log("d (a & b):", d);  // d = 0
// console.log("e (a | b):", e);  // e = 15
// console.log("f (a ^ b):", f);  // f = 15
// console.log("g (~a):", g);     // g = -13
// console.log("check:", check);  // check = false
// console.log("result:", result);// result = 2;