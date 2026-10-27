// Forms and Form Validation
// let nm = document.querySelector("#name");
// let form = document.querySelector("form");
// let hide = document.querySelector("#hide");

// form.addEventListener("submit", function (event) {
//   event.preventDefault();

//   if (nm.value.length <= 2) {
//     hide.style.display = "initial";
//   } else {
//     hide.style.display = "none";
//   }
// });

// let nm = document.querySelector("#name");
// let form = document.querySelector("form");

// form.addEventListener("submit", function (event) {
//   event.preventDefault();
//   const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
//   console.log(emailRegex.test("a@a.a")); // false
// });

// email and password validator
// let email = document.querySelector("#email");
// let password = document.querySelector("#password");
// let form = document.querySelector("form");

// form.addEventListener("submit", function (event) {
//   event.preventDefault();
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   const passwordRegex =
//     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

//   let emailans = emailRegex.test(email.value); // iska answer ya toh true milega ya false

//   let passwordans = passwordRegex.test(password.value);

//   if (!emailans) {
//     document.querySelector("#emailError").textContent = "Email is incorrect";
//   }

//   if (!passwordans) {
//     document.querySelector("#passwordError").textContent =
//       "Password is incorrect";
//   }
// });

// value vs textContent
//for example aapne form mei input banaya hai and you want its value so there we use .value to get the value from the input
// for example hamara div tag hai paragraph tag hai h1 tag hai ya koi bhi aisa tag jiske andr we can write text toh woh tag mei text likhne ke leye ya text lene ke leye we use textContent
// value hum use krte hai inputs ke leye
// and textContent hum use krte hai text wale html elements ke leye
