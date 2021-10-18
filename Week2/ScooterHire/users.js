class User {
  static users = [];
  constructor(name, age, password) {
    this.name = name;
    this.age = age;
    this.password = password;
  }
}

module.exports = { User };
