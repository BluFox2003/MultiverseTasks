const { Scooter } = require("./scooters.js");
const { User } = require("./users");
const { chargingStation } = require("./chargingStations");
const prompt = require("prompt-sync")();
const CS1 = new chargingStation("CS1");
const userName = prompt("What is your name? ");
const userAge = prompt("How old are you? ");
const userPassword = prompt("Enter a password ");

class Main {
  static async waitTime() {
    await new Promise((resolve) => setTimeout(resolve, 2000));
  }
}
Customer = new User(userName, Number(userAge), userPassword);
const A = User.isUser18(Customer);
const answer1 = prompt(
  `\n Hello ${userName}, Would you like to rent a scooter? (Yes or No) `
);
if (answer1 == "Yes" || "yes" || "Y" || "y") {
  if (A == true) {
    CS1.rentScooter();
    console.log(
      "\n Please return the scooter after 4 hours or before it runs out of charge \n "
    );
    Main.waitTime();
  } else {
    console.log("Goodbye");
  }
} else {
  console.log("Program will end");
  process.abort();
}

//console.log("Time to return the scooter");

CS1.returnScooter();
