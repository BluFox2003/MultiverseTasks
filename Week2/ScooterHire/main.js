const { Scooter } = require("./scooters.js");
const { User } = require("./users");
const { chargingStation } = require("./chargingStations");
const prompt = require("prompt-sync")();

const userName = prompt("What is your name? ");
const userAge = prompt("How old are you? ");
const userPassword = prompt("Enter a password ");

Customer = new User(userName, Number(userAge), userPassword);

const answer1 = prompt(
  `Hello ${userName}, Would you like to rent a scooter? (Yes or No) `
);
if (answer1 == "Yes" || "yes" || "Y" || "y") {
  const A = User.isUser18(Customer);
  if (A == true) {
    rentScooter();
  } else {
    console.log("Goodbye");
  }
} else {
  console.log("Program will end");
  process.abort();
}
