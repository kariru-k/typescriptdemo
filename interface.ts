//example of interface
export interface User {
    name: string;
    age: number;
    id: number;
    email: string;
}

let user: User = {
    name: "Keith",
    age: 15,
    id: 140102,
    email: "karirukeith@gmail.com"
}

console.log(user)

//inheritance using interfaces
interface Manager extends User {
    salary: number;
}

let james: Manager = {
    name: "Keith",
    age: 15,
    id: 140102,
    email: "karirukeith@gmail.com",
    salary: 500
}

console.log(james)

//Method definition using inheritance
export interface Login {
    Login(): User;
}