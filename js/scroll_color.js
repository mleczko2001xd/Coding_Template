'use strict';
const htmlTag = document.querySelector('html');
const bodyTag = document.querySelector('body');
const myNav = document.querySelector('.navigation');
const myElem = document.querySelector('.navigation');
let scrolled = () =>{
    let dec = scrollY / (bodyTag.scrollHeight - innerHeight);
    return Math.floor(dec * 1000 );
}

addEventListener('scroll', () => {
    myNav.style.setProperty('background', scrolled () > 50 ?  "var(--color2)" : "var(--color1)");
  myElem.style.setProperty('color', scrolled () > 50 ?  "var(--color3)" : "var(--color2)");
})