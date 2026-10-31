// Scope, Execution Context and Closures

// Scope - functional scope, global scope and block scope

// execution context
// js jaise hee function ko dekhti hai toh sbse pehle woh execution context bnati hai this is the process which occurs in 2 phases first is memory phase and second is execution phase
// yeh abstract hai jo dikhta nhi hai hypothetical hai

// Lexical scope
// js mei lexical scoping hee hoti hai dynamic nhi hoti
// lexical mtlb physically
// lexical scoping --> ki aap kaha par physically available ho ye poore treeke se depend krta hai ki aap kya access kr paoge

// lexcial scope
function abcd() {
  let a = 12;
  function defg() {
    console.log(a);
  }
}

// dynamic scope --> kaha se call kr re ho uspe depend krega ki kya value milegi

// Closure
// functions jo kisi parent function ke andr ho aur andr wala function return ho raha ho and returning function use kre parent function ka koi variable

function abcd() {
  let a = 12;
  return function () {
    console.log(a);
  };
}
abcd();

// how variables are preserved

// jab bhi function ka kaam complete ho jata hai toh woh function aur uske variables khtm hojate hai
// par jb bhi closure banta hai toh function aur uske variables ka ek backlink bnaya jaata hai aur uska naam hota hai [[environment]]

// private counter
function countForMe() {
  let c = 0;
  return function () {
    c++;
    console.log(c);
  };
}

// let func = countForMe();
// func();
// hmesha closures mei pehli baar chlane pe function milta hai
// dusri baar chlane pe kaam hoga

// let func = countForMe();
// func();
// func();
// func();

// let fnc2 = countForMe();
// fnc2();
// fnc2();
// fnc2();
// fnc2();
// fnc2();
// fnc2();
// fnc2();
// fnc2();

// encapsulation
function clickLimiter() {
  let click = 0;
  return function () {
    if (click < 5) {
      click++;
      console.log(`clicked: ${click} times`);
    } else {
      console.error("limit exceeded, try after soem time");
    }
  };
}

let func = clickLimiter();
func();
func();
func();
func();
func();
func();
