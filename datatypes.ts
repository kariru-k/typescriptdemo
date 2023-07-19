//string
let lName : string;

lName = "Keith";

let newName = lName.toLowerCase();

console.log(newName);

//number
let age : number;

age = 23;
let dob = "25";

let result = parseInt(dob);

//boolean
let validity : boolean = true;

console.log(validity)

//array
let stringArray : string[];

stringArray = ["keith", "kariru"]

let numArray : number[]

numArray = [1, 2, 3, 4, 5]

let filterResult = numArray.filter((num) => num > 2)

console.log(filterResult)

let findResult = numArray.find((num) => num == 2)

console.log(findResult)

let sum = numArray.reduce((acc, num) => acc + num)

console.log(sum);

//enum
enum Color {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE"
}

let c : Color = Color.Blue;

console.log(c)

//tuple
let swapNumbs: [firstNumber: number, secondNumber: number];

function swapNumbers(num1 : number, num2: number) : [number, number] {
    return [num2, num1]
}

swapNumbs = swapNumbers(10, 20)

console.log(swapNumbs)

//any
let i;


