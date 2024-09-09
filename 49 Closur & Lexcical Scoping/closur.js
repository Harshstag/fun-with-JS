// function outer() {
//   let username = "hitesh";
//   console.log("OUTER", secret);
//   function inner() {
//     let secret = "my123";
//     console.log("inner", username);
//   }
//   function innerTwo() {
//     console.log("innerTwo", username);
//     console.log(secret);
//   }
//   inner();
//   innerTwo();
// }
// outer();
// console.log("TOO OUTER", username);

// // --------------------------------- LEXICAL Scope -----------------------------------

// function makeFunc() {
//   const name = "Mozilla";
//   function displayName() {
//     console.log(name);
//   }
//   return displayName; //clouser
//   //it returns the LEXICAL Scope not just the scope
// }

// const myFunc = makeFunc();
// myFunc();

// --------------------------------- ---------------------------------------------------------------
// document.addEventListener("DOMContentLoaded", function () {
//   document.getElementById("orange").addEventListener("click", function () {
//     document.body.style.backgroundColor = `orange`;
//   });
// });
