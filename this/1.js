// this keyword
// It is a special keyword because baaki saare keyword ki value ya unka nature same rehta hai this ki value ya nature badal jaata hai is baat se ki aap usey kaha use kr re ho

// global scope mei this ki value window hoti hai
console.log(this);

// function mei bhi this ki value window hoti hai
function abcd() {
  console.log(this);
}
abcd();

// method --> ek aisa function jo object ke andr ho usko method kehte hai
// method mei this ki value object ho jaati hai
let obj = {
  naam: "Preet",
  sayNaam: function () {
    console.log(this);
    console.log(this.naam);
  },
};

obj.sayNaam();

// but agr object ke andr jo function hai usko humne arrow function banadia toh this apni value loose krdega aur window banjayega
// age humne function ki jagah arrow function banaya
// arrow function hmesha apni this ki value parent se lete hai so in that case parent is obj and obj is in global scope therefore this ki value is window

// sayNaam: function(){
//   fucntion defg(){
//     console.log(this);
//   };
//   defg();
// }
// and agr aapne method ke andr ek function aur bana dia tb bhi this apni value kho dega aur window ban jayega... and if you want to handel ki function ke andr this window na bane object hee rahe for that andr wale ko hmesha arrow function banao

// sayNaam: function(){
//   let defg = () => {
//     console.log(this);
//   };
//   defg();
// }
// arrow function hmesha apni this ki value parent se lete hai... here parent is method and method mei this ki value hoti hai object

// event handler
// mei this woh banda hota hai jispe event listener lga ho
// here this is h1 kyuki uspe event listener lga hai
document.querySelector("h1").addEventListener("click", function () {
  console.log((this.style.color = "red"));
});

// class
// mei this ki value blank object hoti hai jab aap usko new keyword ke saath call krte ho
class Abcd {
  constructor() {
    console.log("hey");
    this.a = 12;
  }
}

let val = new Abcd();
// jb bhi class ko new ke saath call krege... new ek blank object bana deta hai... blank object bngya... Abcd chlgya... Abcd mei constructor chlgya... jaha jaha this likha hai waha waha blank object aajayega
// val Abcd class ka ek instance hai

// this ki value
// global - window
// function - window
// method with es5 fnc - object
// method with es6 arrow fnc - window
// es5 fucntion inside es5 method - window
// arrow function inside es5 method - object
// event handler - element
// class - blank object

// arrow function and lexical this
// arrow function hmesha apni this ki value parent se lete hai

// manual binding: call, apply, bind
// function ko call krte wqt we can set ki uski this ki value kya hogi

// let obj = {
//   naam: "Preet",
//   age: 24,
// };

// function abcd() {
//   console.log(this); // now here this is obj
//   console.log(this.name);
//   console.log(this.age);
// }

// abcd.call(obj); // this ki value obj set krdi

// let obj = {
//   naam: "Preet",
//   age: 24,
// };

// function abcd(a, b, c) {
//   console.log(this, a, b, c);
// }

// abcd.call(obj, 1, 2, 3);

// apply mei array paas krna pdta hai if values are more than 2
// rarely use krte hai apply ko
// let obj = {
//   naam: "Preet",
//   age: 24,
// };

// function abcd(a, b, c) {
//   console.log(this, a, b, c);
// }

// abcd.apply(obj, [1, 2, 3]);

// bind
// yeh function ki new copy bana deta hai

// let obj = {
//   naam: "Preet",
//   age: 24,
// };

// function abcd(a, b, c) {
//   console.log(this, a, b, c);
// }

// let fnc = abcd.bind(obj, 1, 2, 3);
// fnc();
