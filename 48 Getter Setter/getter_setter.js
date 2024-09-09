class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return `${this._email}@example.com`;
  }
  set email(value) {
    this._email = value;
  }

  get password() {
    return this._password.toUpperCase(); // standard practise to use _vareable name
  }
  set password(value) {
    this._password = value; // _password this will overrite the password else will give the error
  }
}

const user = new User("harsh", "abcd");

console.log(user.email);

user.email = "Rajesh";
console.log(user.email);

console.log(user.password);
