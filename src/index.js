// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App></App>, document.getElementById('root'));

// class Animal {
//     constructor(name, age) {
//        this.name = name;
//        this.age = age;
//     }

//     speak() {
//         console.log('I am', this.name, 'and I am', this.age, 'years old');
//     }
// }

// const animal1 = new Animal('Simba', 3);
// animal1.speak();

// console.log(animal1);

// class Lion extends Animal {
//     constructor(name, age, furColor, speed){
//         super(name,age);
//         this.furColor = furColor;
//         this.speed = speed;
//     }
    
//     roar() {
//         console.log(
//             'ROOOAR! I have', 
//             this.furColor, 
//             'fur and I can run', 
//             this.speed, 
//             'miles and hour!'
//         );
//     }
// }

// const lion1 = new Lion('Mufasa', 20,'golden', 25);
// lion1.speak();
// lion1.roar();
// console.log(lion1);
