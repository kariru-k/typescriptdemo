"use strict";
//string
let lName;
lName = "Keith";
let newName = lName.toLowerCase();
console.log(newName);
//number
let age;
age = 23;
let dob = "25";
let result = parseInt(dob);
//boolean
let validity = true;
console.log(validity);
//array
let stringArray;
stringArray = ["keith", "kariru"];
let numArray;
numArray = [1, 2, 3, 4, 5];
let filterResult = numArray.filter((num) => num > 2);
console.log(filterResult);
let findResult = numArray.find((num) => num == 2);
console.log(findResult);
let sum = numArray.reduce((acc, num) => acc + num);
console.log(sum);
//enum
var Color;
(function (Color) {
    Color["Red"] = "RED";
    Color["Green"] = "GREEN";
    Color["Blue"] = "BLUE";
})(Color || (Color = {}));
let c = Color.Blue;
console.log(c);
//tuple
let swapNumbs;
function swapNumbers(num1, num2) {
    return [num2, num1];
}
swapNumbs = swapNumbers(10, 20);
console.log(swapNumbs);
//any
let i;
