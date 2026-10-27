// Imp
// Timers and Intervals
// setTimeout() iske andr function paas krte hai and time in mili second 1sec = 1000mili seconds
// setTimeout() ek baar chlta hai
// setTimeout(function () {
//   console.log("Preet");
// }, 5000);

// clearTimeout()
// setTimeout ko ek varaible mei save krke woh varibale we'll paas in clearTimeout

// let st = setTimeout(function () {
//   console.log();
// }, 3000);

// clearTimeout(st);

// setInterval() baar baar chlte hai
// setInterval(function () {
//   console.log();
// }, 2000);

// clearInterval()
// let si = setInterval(function () {
//   console.log(si);
// }, 3000);

// clearInterval(si);

// create counter from 10 to 0 and 0 pe band ho jana chaheye
// let count = 10;
// let si = setInterval(function () {
//   if (count >= 0) {
//     console.log(count);
//     count--;
//   } else {
//     clearInterval(si);
//   }
// }, 1000);

let count = 0;
let progress = document.querySelector(".progress-bar");
let percentText = document.querySelector("#percentText");

let si = setInterval(function () {
  if (count <= 99) {
    count++;
    progress.style.width = `${count}%`;
    percentText.textContent = `${count}%`;
  } else {
    document.querySelector("h2").textContent = "Downloaded.";
    clearInterval(si);
  }
}, 3000 / 100); // 3s mei complete krna hai toh divide by 100 kia hai

// auto-hide
let d = document.querySelector("div");
setTimeout(function () {
  d.style.display = "none";
}, 3000);

// setInterval vs setTimeout
// when you want to keep doing something use setInterval
// setInterval baar baar chlta hai
// and when you want to perform something only once then use setTimeout
// setTimeout ek baar chlta hai
