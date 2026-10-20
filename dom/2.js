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
