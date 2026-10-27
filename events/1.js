// Events and Events Listener // This is the most important section
// aap ke website pe koi bhi action hota hai jaise ki aap button click krte ho, closed button click krte ho, double click krte ho, mouse move krte ho, select krte ho, drag krte ho aisa kuch bhi action jo aap kroge website pe uske badle mei kuch ho yeh cheez hoti hai event listeners
// event mtlb koi action hua screen pr
// event listener mtlb aapne koi action ka reaction dia

// click
// let h1 = document.querySelector("h1");
// h1.addEventListener("click", function () {
//   h1.style.color = "brown";
// });

// dblClick
// let p = document.querySelector("p");

// function banaya ki dblclick krne pe kya hoga
// function dblclick() {
//   p.style.color = "red";
// }

// event aur function ka name paas kia
// p.addEventListener("dblclick", dblclick);

// removeEventListener
// p.removeEventListener("dbclick", dblclick);

// input
// let i = document.querySelector("input"); // input tag select kia html wala
// i.addEventListener("input", function () {
//   console.log("typed"); // jb bhi kuch input hoga toh console mei print hoga typed
// }); // uspe input event listener lagaya

// let i = document.querySelector("input");
// // input mei agr kuch bhi likha toh yeh function chljega aur woh input mei jo kuch bhi type kia woh details mei ayega
// i.addEventListener("input", function (details) {
//   if (details.data !== null) {
//     console.log(details.data);
//   }
// });

//change
// yeh event tb chlta hai jb input select ya textarea mei koi chnage hojaye

// let s = document.querySelector("select");
// s.addEventListener("change", function (dets) {
//   console.log(dets.target.value);
// });

// let device = document.querySelector("#device");
// s.addEventListener("change", function () {
//   device.textContent = "Device Selected";
// });

// let s = document.querySelector("select");
// let h1 = document.querySelector("h1");
// s.addEventListener("click", function (dets) {
//   h1.textContent = `${dets.target.value} device selected`;
// });

// let h1 = document.querySelector("h1");
// window.addEventListener("keydown", function (dets) {
//   if (dets.key === " ") {
//     h1.textContent = "space";
//   } else {
//     h1.textContent = dets.key;
//   }
// });

// let f = document.querySelector("#fileinp");
// let b = document.querySelector("#btn");

// b.addEventListener("click", function () {
//   f.click(); // file type wale input pe javascript ke through click krwa diya
// });

// f.addEventListener("change", function (dets) {
//   //   btn.textContent = dets.target.value;
//   //   console.log(dets.target.files[0].name);
//   btn.textContent = dets.target.files[0].name;
// });


// submit
// jab bhi form submit hota hai tb kuch krvana hai

// form ko mana krna hai ki tum reload mat kro
// how to stop form submission in js --> preventDefault()

// let form = document.querySelector("form");
// form.addEventListener("submit", function (eve) {
//   eve.preventDefault();
// });

// let form = document.querySelector("form");
// let inputs = document.querySelectorAll("input");
// let main = document.querySelector("#main");

// form.addEventListener("submit", function (eve) {
//   eve.preventDefault();

//   let card = document.createElement("div");
//   card.classList.add("card");

//   let profile = document.createElement("div");
//   profile.classList.add("profile");

//   let img = document.createElement("img");
//   img.setAttribute("src", inputs[0].value);

//   let h3 = document.createElement("h3");
//   h3.textContent = inputs[1].value;
//   let h5 = document.createElement("h5");
//   h5.textContent = inputs[2].value;
//   let p = document.createElement("p");
//   p.textContent = inputs[3].value;

//   profile.appendChild(img);
//   card.appendChild(profile);

//   card.appendChild(h3);
//   card.appendChild(h5);
//   card.appendChild(p);

//   main.appendChild(card);

//   inputs.forEach(function (inp) {
//     if (inp.type !== "submit") {
//       inp.value = "";
//     }
//   });
// });

// mouseover
// mouseover mtlb jiske upar mouse ayega
// let a = document.querySelector("#abcd");
// a.addEventListener("mouseover", function () {
//   a.style.backgroundColor = "yellow";
// });

// mouseout
// let b = document.querySelector("#abcd");
// b.addEventListener("mouseout", function () {
//   b.style.backgroundColor = "red";
// });

// mousemove
// hame apne div ko move krwana hai
// x mei kitna move krwana hai jitni bhi dets.clientX ki value hai
// y mei kitna move krwana hai jitni bhi dets.clientY ki value hai
// top to bottom y axis
// left to right x axis
// let a = document.querySelector("#abcd");
// window.addEventListener("mousemove", function (dets) {
//   a.style.top = dets.clientY + "px";
//   a.style.left = dets.clientX + "px";
// });

// keyup
// let i = document.querySelector("#i");
// let o = document.querySelector("#o");

// i.addEventListener("keyup", function () {
//   o.textContent = i.value;
// });

// Event object: target, type, preventDefault
// here event is event object humn dets likha tha pehla
// let a = document.querySelector("#abcd");
// a.addEventListener("click", function (event) {
//   console.log(event);
// });
// target woh hota hai jispe event raise hua hota hai
// type btata hai ki konsa event listener lagaya hai

// Event Bubbling
// event jaha pr bhi occur hota hai agr us element ke paas event listener nhi hua toh hamara event uske parent par listener dhundega aur aisa krte krte upr ki trf move krega
// aap kisi pe bhi event ko chalaoge... aapka listener chlega aur event jump krega parent pe
// document.querySelector("#nav").addEventListener("click", function () {
//   alert("clicked");
// });

// let ul = document.querySelector("ul");

// ul.addEventListener("click", function (event) {
//   event.target.style.textDecoration = "line-through";
// });

// toggle
// ul.addEventListener("click", function (event) {
//   event.target.classList.toggle("lt");
// });

// Event Capturing
// aapne jaha pe bhi kisi event ko occur kia pattern upr se niche ki trf ayega
// jab bhi aap click krte ho ya event raise krte ho toh aapka jo event flow (also called propagation) hai woh 2 phases mei chlta hai
// phase 1: event top level element se neeche ki trf aayega
// phase 2: event raised element se parent ki trf jayega
// aur pehle phase 1 hoti hai

// capture phase
// hmesha phase 1 hi pehle hoti hai par vo by default off rehti hai agr hum usey on kr de toh pehle phase 1 ka answer milega

// pehle capture phase chlta hai fir bubbling phase chlta hai ab kyuki bubbling phase jo hai woh by default activate hota hai toh woh chl jaata hai.. capture phase on nhi hota toh woh nhi chlta... capture phase ko on krta pdta hai kisi bhi listener ke last mei }, true likhdo
// let a = document.querySelector(".a");
// let b = document.querySelector(".b");
// let c = document.querySelector(".c");
// let btn = document.querySelector("button");

// btn.addEventListener("click", function () {
//   console.log("button clicked");
// });

// c.addEventListener("click", function () {
//   console.log("c clicked");
// });

// b.addEventListener("click", function () {
//   console.log("b clicked");
// });

// a.addEventListener(
//   "click",
//   function () {
//     console.log("a clicked");
//   },
//   true,
// ); // capture phase on kia hai true se

//Live character counter
// let inp = document.querySelector("input");
// let span = document.querySelector("span");
// inp.addEventListener("input", function () {
//   // console.log(inp.value.length);
//   span.textContent = inp.value.length;
// });

// inp.addEventListener("input", function () {
//   let left = 20 - inp.value.length;
//   span.textContent = left;
//   if (left < 0) {
//     span.style.color = "red";
//   } else {
//     span.style.color = "white";
//   }
// });
