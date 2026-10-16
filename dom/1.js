// DOM
// Document Object Model
// poora jo html hai usmei har ek cheez ek node hai eg html tag ek node then uske andr head and body ek node hai then div ek node hai ul ek node hai ek li node hai mtlb har ek cheez node hai
// poore web page pe jo kuch bhi hum dekhre hai woh sb DOM hai
// DOM Manipulation
// mtlb jo website dikh rahi hai usmei changes krna toh technically hum DOM mei changes krte hai

// let v = document.getElementById("hi");
// console.log(v);

// class ek se zada elements ke paas same hoti hai therefore Elements likha hai
// let c = document.getElementsByClassName("hey");
// console.dir(c);

// but hum document.querySelector("") hee use krte hai ya document.querySelectorAll("") upr wale methods nhi use krte
// let s = document.querySelector("h1");
// console.log(s);
// querySelector hmesha pehla element select krta hai
// querySelectorAll array jaise structure print krwata hai array nhi hota... NodeList hoti hai

// manipulation
// let h1 = document.querySelector("h1");
// h1.innerHTML = "hi preet how're you"; // h1 ke andr waala html
// h1.innerHTML = "<i>Preet</>"; // html likh skte hai hum "" ke andr
// console.dir(h1);
// h1.hidden = true; // js se aapne DOM ko manipulate krdia html ko manipulate krdia

// h1.innerText = "hi preet how're you";
// h1.textContent = "h1 preet how're you";
// innerHTML
// innerText
// textContent
// innerHTML text nhi badalta HTML daalta hai
// innerText text badalta hai
// textContent bhi text badalta hai

// Attribute Manipulation
// attribute vgera ki vlaues change kr skte hai href vgera badal kr ske hai

// let a = document.querySelector("a"); // ismei jo tag select krna hota hai woh likhte... variable ko naam kuch bhi de skte hai
// console.dir(a);
// then woh tag ki koi bhi property change kr skte hai jo bhi hum chahte hai
// a.href = "https://www.google.com"; // now js se href ki value change krdi that is DOM Manipulation

// there is one more way setAttribute() getAttribute()
// setAttribute() mei do cheeze paas krni hoti hai first aap a tag ka konsa attribute set kr re o second aap uski kya value rkhna chahte ho
// let a = document.querySelector(a);
// a.setAttribute("href", "www.google.com");

// let img = document.querySelector("img");
// console.dir(img);
// img.setAttribute(
//   "src",
//   "https://images.unsplash.com/photo-1791752462600-e3ef63bce539?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
// );

// getAttribute();
// let a = document.querySelector("a");
// console.log(a.getAttribute("href"));

// removeAtrribute();
// let a = document.querySelector("a");
// a.removeAttribute("href");
