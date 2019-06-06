'use strict';
const htmlTag = document.querySelector('html');
const bodyTag = document.querySelector('body');
const myNav = document.querySelector('.navigation');
<<<<<<< HEAD
const myElem = document.querySelector('.navigation');
let scrolled = () =>{
    let dec = scrollY / (bodyTag.scrollHeight - innerHeight);
    return Math.floor(dec * 1000 );
=======
const myElem = document.querySelector('.nav-item');
let scrolled = () =>{
    let dec = scrollY / (bodyTag.scrollHeight - innerHeight);
    return Math.floor(dec * 100 );
>>>>>>> d3480e9769f51a8c58efe1e9e9e7088d450028ee
}

addEventListener('scroll', () => {
    myNav.style.setProperty('background', scrolled () > 50 ?  "var(--color2)" : "var(--color1)");
<<<<<<< HEAD
  myElem.style.setProperty('color', scrolled () > 50 ?  "var(--color3)" : "var(--color2)");
=======
    
>>>>>>> d3480e9769f51a8c58efe1e9e9e7088d450028ee
})