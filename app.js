console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);
let answer = prompt("What is your name");
console.log("Hello, " + answer);

// Exercise 2
let favoriteNumber = 17;

let guessedNumber = prompt("guessed number");

if (favoriteNumber > guessedNumber) {
  console.log("too low");
} else if (guessedNumber > favoriteNumber) {
  console.log("too high");
} else if ((favoriteNumber = guessedNumber)) {
  console.log("Congratulations!!!");
}

// Exercise 2
let birthMonth = prompt("What is your birth month");

switch (birthMonth) {
  case "December":
  case "January":
  case "February":
    console.log(birthMonth + " " + "Winter");
    break;
  case "March":
  case "April":
  case "May":
    console.log(birthMonth + " " + "Spring");
    break;
  case "June":
  case "July":
  case "August":
    console.log(birthMonth + " " + "Summer");
    break;
  case "September":
  case "October":
  case "November":
    console.log("Fall");
    break;
  default:
    console.log(birthMonth + " " + "Do not valid Month");
}

// Exercise 2

let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

switch (sizeId) {
  case "S":
    size = "Small";
    break;
  case "M":
    size = "Medium";
    break;
  case "L":
    size = "Large";
    break;
  case "XL":
    size = "Extra Large";
    break;
  default:
    size = "One Size Fits All";
}

switch (colorId) {
  case "BL":
    color = "Black";
    break;
  case "BU":
    color = "Blue";
    break;
  case "RD":
    color = "Red";
    break;
  case "PU":
    color = "Purple";
    break;
  default:
    color = "White";
}

switch (typeId) {
  case "01":
    type = "Tank top";
    break;
  case "02":
    type = "T-Shirt";
    break;
  case "03":
    type = "Long Sleeve";
    break;
  case "04":
    type == "Sweat Shirt";
    break;
  default:
    type = "Other";
}

console.log(`product: ${size} ${color} ${type}`);
