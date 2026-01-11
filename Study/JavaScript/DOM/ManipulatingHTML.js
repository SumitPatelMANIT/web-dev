//How to manipulate HTML
/*

tag
text
element
*/
// let h1 = document.querySelector('h1');
// // console.log(h1.tagName); // only return tage name
// // console.log(h1.nodeName); // tagName, text node, commnet node. 

//  console.log(h1.innerText); // It will remove other extra spaceing
//  console.log(h1.textContent); // Same text will return only
 
//  h1.innerHTML = 'asdfasdadfgsdfg' // we an change text, innerHTML, 

//Inserting element

// let div = document.querySelector('.box');
// div.style
// let elem = document.createElement('p');
// elem.innerText = "hello";
// console.log(elem)
// // div.append(elem);
// div.prepend(elem)
// div.after(elem)
// div.before(elem)

// //div.insertAdjacentElement('before',elem)
// let p = div.children[2];
// p.remove();

let b = document.querySelector('.box');
b.style.backgroundColor = 'yellow';
let a = document.getElementsByClassName('p1');
    a[2].style.backgroundColor = 'blue';
    
console.log(b);

