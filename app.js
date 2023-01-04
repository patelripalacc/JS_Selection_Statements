console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);
let answer = prompt("What is your name");
console.log("Hello, " + answer);


// Exercise 2
let favoriteNumber = 17

let guessedNumber = prompt("guessed number")


if(favoriteNumber > guessedNumber){
    console.log("too low");
} else if(guessedNumber > favoriteNumber){
  console.log("too high");
} else if(favoriteNumber = guessedNumber){
  console.log("Congratulations!!!");
}

// Exercise 2
let birthMonth = prompt("What is your birth month");

switch(birthMonth){
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

if (sizeId == "S") {
  size = "Small";
} else if (sizeId == "M") {
  size = "Medium";
} else if (sizeId == "L") {
  size = "Large";
} else if (sizeId == "XL") {
  size = "Extra Large";
} else {
  size = "One Size Fits All";
}

if (colorId == "BL") {
  color = "Black";
} else if (colorId == "BL") {
  color = "Blue";
} else if (colorId == "RD") {
  color = "Red";
} else if (colorId == "PU") {
  color = "Purple";
} else {
  color = "White";
}

if (typeId == "01") {
  type = "Tank top";
} else if (typeId == "02") {
  type = "T-Shirt";
} else if (typeId == "03") {
  type = "Long Sleeve";
} else if (typeId == "04") {
  type == "Sweat Shirt";
} else {
  type = "Other";
}

console.log(`product: ${size} ${color} ${type}`);