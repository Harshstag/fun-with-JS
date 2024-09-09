//-----------------------------------  Why PI value can't be chainged  ------------------------------------------

const discriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(discriptor);

//-----------------------------------   ------------------------------------------

const user = {
  id: 101,
  name: "Harsh",
  password: "1234",
};
console.log("USER OBJECT : ", user);

console.log(Object.getOwnPropertyDescriptor(user, "password"));

//----------------------------------- defineProperty  ------------------------------------------

Object.defineProperty(user, "password", {
  writable: false, // this not allow to change the value
  enumerable: false, // this will stop it from being eterable
});
//-------------------------------------------------------------------------------------

console.log(Object.getOwnPropertyDescriptor(user, "password"));

//Test
user.password = "abcd";
console.log(user.password);
