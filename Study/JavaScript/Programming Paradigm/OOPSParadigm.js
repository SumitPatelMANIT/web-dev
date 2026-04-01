// 1. Object litteral method

// let Student = {
//        name: 'Sumit',
//        age: 22,    // Property 
       
//        introduction: function(){  // Method
//           console.log(`My name is ${this.name}, My age is ${this.age}`);
          
//        }
// }

// Student.introduction();

//  2. Factory funciton method   for creating multiple object

// function Student(na, ag){
//       return {
//        name: na,
//        age: ag,    // Property 
       
//        introduction: function(){  // Method
//           console.log(`My name is ${this.name}, My age is ${this.age}`);
          
//        }
         
//       }
//     }
//     let s1 = Student('Amit', 10);
//     let s2 = Student('smit', 10);

//     console.log(s1);
//     console.log(s2);

    // Porblem   Doesn't involve prototype of default (unless you manually set them)
    // js is prototypel based language.

    // // 3. Constructor Function -> Automatically sets up a link to student.prototype.

    // function Student(name, age, passion){
    //       this.name = name,
    //       this.age = age,
    //       this.passion = passion
    //       return this;
    // }

    // let s1 = new Student('s1',21,'SDE');
    // let s2 = new Student('s2',21,'SDE');

    // console.log(s1);
    // console.log(s2);

    // 4. Class syntex(es6)
    
    //   class Student{
    //        name = 'Manas';
    //        age = 23;
    //        passion = 'SDE';

    //        constructor(name, age, passion){
    //             this.name = name;
    //             this.age = age;
    //             this.passion = passion;
    //        }
    //        intro(){
    //              console.log(this.name,this.age, this.passion);
    //        }
    //   }
      

    //   let s2 = new Student('Sumit Patel', 21, 'Software Developer');

    // //   console.log(s2);

    // s2.intro();


    // Prototype ->  when we apply on function prototype then it will not take seprate memory for each and ever object

    // function Student(name, age){
    //         this.name = name;
    //         this.age = age;
    //         Student.prototype.introduceMyself = function(){
    //                console.log( `My name is ${this.name}. Age is ${this.age}`);
    //         }
    // }

    // let s1 = new Student('Sumit' , 21);
    // let s2 = new Student('Amit' , 22);

    //  console.log(s1);
    //  console.log(s2);

    //  s1.introduceMyself();

    
     