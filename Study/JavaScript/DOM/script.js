/*
   
5 phases of dom manipulation

1. DOM  (Document Object Model)
2. Selection of HTML Elements
3. How to change or manupulate HTML
4. How to change the CSS
5. Event Listners 

*/

// let a = document.querySelector('h1')
// a.innerHTML = "How are \nyou"
// console.log(a)
// let b = document.querySelector('p')
// console.log(b)
// b.innerHTML = "Currently i am studying in MANIT bhopal"


// let a = document.querySelector('h1');
// a.style.backgroundColor ='yellow';
// a.style.color ='red'
// let b = document.querySelector('p');
// b.style.color ='red'
// b.style.backgroundColor ='yellow';

// let a = document.querySelector('h1');
// a.addEventListener('click',()=>{
//     a.style.backgroundColor = 'green';
//     a.style.color = 'white';
//     a.innerHTML = 'Manit Student';
// })

/*
    1. Dom
    2. Selection
*/

// Selection on the basis of tag name.
// let a = document.getElementsByTagName('div');
// console.log(a)


//  Selection on the basis of id name.
// let h = document.getElementById('Heading');

// Selection on the basis of class.
// let div = document.getElementsByClassName('box');
// console.log(div);

// Selection of all type tag id class 
// let a = document.querySelector('p');
// let b = document.querySelector('#Heading');
// let c = document.querySelectorAll('.box');
// console.log(a);
// console.log(b);
// console.log(c);

//Herirchy
let a = document.querySelector('#x');
console.log(a);
console.log(a.firstChild);
console.log(a.lastChild)