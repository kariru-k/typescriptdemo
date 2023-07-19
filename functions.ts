//named functions
function add(a: number, b: number) : number {
    return a + b;
}

console.log(add(2, 2))

//arrow functions
const subtract = (a: number, b: number): number => a - b;

console.log(subtract(3, 1))

//function expressions
const multiply = function(a: number, b: number): number{
    return a * b;
};

console.log(multiply(3, 5))

//named functions with c as an optional parameter
function addOptional(a: number, b: number, c?: number) : number {
    return c ? a + b + c : a + b;
}

console.log(addOptional(2, 2, 5))

//arrow functions with c as a required parameter
const subtractRequired = (a: number, b: number, c = 5): number => a - b - c;

console.log(subtractRequired(3, 1))

//generic functions
function getItems<Type>(items: Type[]): Type[] {
    return new Array<Type>().concat(items);
}

let concatResult = getItems([1, 2, 3, 4])

console.log(concatResult)
