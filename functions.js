"use strict";
//named functions
function add(a, b) {
    return a + b;
}
console.log(add(2, 2));
//arrow functions
const subtract = (a, b) => a - b;
console.log(subtract(3, 1));
//function expressions
const multiply = function (a, b) {
    return a * b;
};
console.log(multiply(3, 5));
//named functions with c as an optional parameter
function addOptional(a, b, c) {
    return c ? a + b + c : a + b;
}
console.log(addOptional(2, 2, 5));
//arrow functions with c as a required parameter
const subtractRequired = (a, b, c = 5) => a - b - c;
console.log(subtractRequired(3, 1));
//generic functions
function getItems(items) {
    return new Array().concat(items);
}
let concatResult = getItems([1, 2, 3, 4]);
console.log(concatResult);
