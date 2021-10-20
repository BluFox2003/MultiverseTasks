class User {
  static users = [];
  constructor(name, age, password) {
    this.name = name;
    this.age = age;
    this.password = password;
    this.constructor.users.push(this);
  }
  static isUser18(User) {
    if (User.age >= 18) {
      console.log("User is old enough to rent a scooter");
      return true;
    } else {
      console.log("User is not old enough to rent a scooter");
      return false;
    }
  }
}

// U1 = new User("Bob", 17, "Qwerty");

// if (User.isUser18(U1) == true) {
//   console.log("Success");
// } else {
//   console.log("Fail");
// }

module.exports = { User };
