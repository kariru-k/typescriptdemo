//address interface
import {Login, User} from "./interface";

interface Address {
    city: string;
    country: string;
}

//Employee class
class Employee implements Login{
    private _id: number;
    private _name: string;
    private _address: Address;

    constructor(id: number, name: string, address: Address) {
        this._id = id;
        this._name = name
        this._address = address;
    }

    getNameWithAddress(): string {
        return `${this._name} stays at ${this._address}`;
    }

    get empId(): number {
        return this._id
    }

    set empId(id: number) {
        this._id = id;
    }

    get address(): Address {
        return this._address;
    }

    set address(value: Address) {
        this._address = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    Login(): User {
        return {
            name: "Keith",
            age: 15,
            id: 140102,
            email: "karirukeith@gmail.com"
        };
    }
}

let john = new Employee(1, "John", {city: "Hey", country: "Ho"});

console.log(john.address);

let address = john.getNameWithAddress();

console.log(address);

//Inheritance
class SalesEmployee extends Employee {
    private department: string;

    constructor(id: number, name: string, address: Address, department: string) {
        super(id, name, address);
        this.department = department
    }
}

let junior = new SalesEmployee(25, "Junior", {city: "Mombasa", country: "Kenya"}, "Medical")

console.log(junior)

