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

// imp
// Dynamic DOM manipulation
// createElement --> html mei jo element nhi bhi hai usko bana dena
// let h1 = document.createElement("h1");
// h1.textContent = "Good Morning";
// document.querySelector("div").prepend(h1); // or we can write document.body as well
// console.dir(h1);
// appendChild or append --> parent element ke end mei kuch add krna
// removeChild --> parent element se kuch hata dena
// prepend --> parent element ke start mei kuj add krna

// imp
// js se css bdlna
// style
// let h1 = document.querySelector("h1");
// h1.style.fontFamily = "Arial, sans-serif";
// console.dir(h1);

// js se kisi bhi element pe class laga aur hata skte hai
// let h1 = document.querySelector("h1");
// h1.classList.add("cls");
// console.dir(h1);
// agr kli by default class lagi hui hai usko remove kr skte hai
// h1.classList.remove("any");
// console.dir(h1);
// toggle --> agr class lagi hogi toh hata dete hai aur agr hati hoti hai toh laga deta hai
// toggle mtlb ulta krdeta hai
// h1.classList.toggle("any");

// Questions
// What is the DOM ? How does it represent the HTML structure ?
// It represents the complete HTML structure as the tree and evrything is a node

// Name the types of nodes in the DOM tree

// what's the difference between element node and a text node ?

// what is the difference between getElementById and querySelector ?
// getElementById sirf id ka naam maangta hai
// querySelector multi purpose hai we can select tag, attribute, id, class etc... it is universal
// getElementById mei hame # nhi likhna pdta beacuse already hum by Id kr re hai but in querySelector mei when we're selecting by id hame # likhna pdta hai because yeh sb kuch select krta hai therefore hame btana pdta hai ki kya select kr rhe hai querySelectore("#apple")

// What does getElemenstByClassName return ? Is it an array ?
// It returns html collection It is not an array but very similar looking structure like an array

// use querySelectorAll to select all buttons with class ".buy-now"
// let a = document.querySelectorAll(".buy-now");
// console.dir(a);

// T1: Select the heading of a page by ID and change its text to "Welcome!".
// let heading = document.querySelector("#heading");
// console.dir(heading);
// heading.textContent = "Welcome!";

// T2: Select all <li> elements and print their text using a loop
// let l = document.querySelectorAll("li");
// l.forEach(function (val) {
//   console.log(val.textContent);
// });

// What's the difference between innerText, textContent, and innerHTML ?

// when should you use textContent instead of innerText
// textContent is new way and it is very faster and innerText is comparatively slower
// textContent woh content bhi provide bhi jo hidden hai
// innerText sirf woh content nikaalta hai jo visible hai
// therefore always recommended textContent use kre

// Select a paragraph and replace its content with:
// <b>Updated</> by JavaScript
// let para = document.querySelector("p");
// console.dir(para);
// para.innerHTML = "<br>Updated</> by JavaScript";

// how do you get the src of an image using JavaScript
// let img = document.querySelector("img");
// console.dir(img.getAttribute("src"));
// hum img.src se bhi same cheez kr skte hai

// what does setAttribute() do ?
// kisi bhi element ke attribute ko change krta hai

// select a link and update its href
// let a = document.querySelector("a");
// a.setAttribute("href", "https://www.duolingo.com/learn");
// console.dir(a);
// hum a.href se bhi kr skte hai update

// Add a title attribute to a div dynamically
// let d = document.querySelector("div");
// d.setAttribute("title", "Greetings");

// Remove the disabled attribute from a button
// let btn = document.querySelector("button");
// btn.removeAttribute("disabled");
// console.dir(btn);

// Dynamic DOM Manipulation
// What does createElement() do ? What's returned ?
// jo bhi element hum paas krte hai woh hame create krke deta hai
// html elemnt node return krta hai

// what's the diiference between appendChild() and prepend()

// Can you remove an element using removeChild() ?
// document.querySelector("div").removeChild(elementNode);

// Create a new list item <li>New Task</> and add it to the end of a <ul>
// let u = document.querySelector("ul");
// let l = document.createElement("li");
// l.textContent = "New Task";
// u.appendChild(l);

// Create a new image element with a placeholder source and add it at the top of a div
// let div = document.querySelector("div");
// let img = document.createElement("img");
// img.setAttribute(
//   "src",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7KpRkSBtf4ioDCmX8FVNHpzZf9G8ulaq3DClTjh-jGQ&s=10",
// );
// div.prepend(img);

// Select the first item in a list and delete it from the DOM
// let ul = document.querySelector("ul");
// let li = document.querySelector("li");
// ul.removeChild(li);

// Add a highlight class to every even item in list
// let li = document.querySelectorAll("ul li:nth-child(2n"); // 2n mtlb har dusra element
// console.log(li);

// li.forEach(function (elem) {
//   elem.classList.add("highlight");
// });

// Toggle a class active on a buttton when clicked

// set the font size of all <p> elements to 18px using style
// let p = document.querySelectorAll("p");
// p.forEach(function (elem) {
//   elem.style.fontSize = "18px";
// });
