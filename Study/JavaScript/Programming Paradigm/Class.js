// class Car{
//        constructor(name, color, millage){
//              this.name = name;
//              this.color = color;
//              this.millage = millage;
//        }

//        start(){
//             console.log(`${this.name} is starting...`);
            
//        }
//        stop(){
//             console.log(`${this.name} is stopping...`);
//        }
// }


// let BMW = new Car('BMW', 'Blue', 2.5);
// let BUGGTI = new Car('Buggti', 'Red', 4);
// let TOYOTA = new Car('Toyota', 'Grey', 23);

// console.log(BMW);
// console.log(BUGGTI);
// console.log(TOYOTA);

// BUGGTI.start();


/*

    Four pillers of OOP:

    1. Abstraction  -> hiding complexity and showing only the essential features.
    2. Encapsulation -> hiding data inside objects and provied security.
    3. Inheritance  -> using properties and methods from another object/class. Dont repeat yourself (DRY)
    4. Polymorphism -> same method behaving differentyl based on the object.

*/

// Abstraction 
// Encapsulation  : it provides the security from the outside the class so that anyone can not change the data

//   by using # we can private the data and function
//    class car{
//         #fule = 100;
        
//         #burnFuel(){
//                this.#fule -= 1;
//         }

//         start(){
//               this.#burnFuel();
//               console.log('Car is starting...');
//         }
//    }

//    let buggati = new car();
//    buggati.start();
//    buggati.start();
//    buggati.start();
//    buggati.start();
//    console.log(buggati);

// class BankAccount{
//       #balance = 0;
//       #holderName = '';
//          constructor(holderName, balance = 0){
//                 this.#holderName = holderName;
//                 this.#balance = balance;
//          }
//          set Balance(balance){
//                this.#balance = balance;
//          }
//          get Balance(){
//               console.log(this.#balance);
//          }
//          deposit(balance){
//             this.#balance += balance;
//          }

           
// }

// let manasAcc = new BankAccount('manas',0);
//    manasAcc.deposit(5000);
//    manasAcc.Balance = 100;
//    manasAcc.Balance;
//    console.log(manasAcc);

// Inheritance  is an opp concept where one class (child) can acquire properties and methods of another class(parent)
/*
    keyword ->  extends
    why use inheritance?
    reuse existing code
    create logical relationship
    reduce duplication
    easier maintenance and scalability

*/

// class car{
//       constructor(barnd, color){
//            this.barnd = barnd;
//            this.color = color;

//       }

//       start(){
//            console.log(`${this.barnd} is starting...`);
//         }
//         stop(){
            
//             console.log(`${this.barnd} is stopping...`);
//         }
//     }
//     class Electricity extends car{
        
//         constructor(brand, color, battery){
//               super(brand, color);
//               this.battery = battery;
//         }
//         chargin(){
//           console.log(`${this.barnd} is charging...`);
          
//       }
// }


// let tesla = new Electricity('tesla', 'white','100%');

// console.log(tesla);
// tesla.chargin();
// tesla.start();
// tesla.stop();

/*

     Polymorphism:   many forms
     it allows different calsses to define methods with the same name but different behavior.(we can say that has more than one form)

*/

// class MediaPlayer{
//        play(){
//              console.log('Play media');
//        }
// }

// class Music extends MediaPlayer{
//        play(){
//          console.log('Play Music')
//        }
// }

// class vedio extends MediaPlayer{
//        play(){
//           console.log('Play vedio')
//        }
// }

// let vid = new vedio();

// let mus = new Music();
// vid.play();
// mus.play();

// singalton object


// let obj = {
//        name: 'Sumit',
//        age: 21
// }

// console.log(obj);
   
//   Immediately invoked function
// (function(){
     
// })()