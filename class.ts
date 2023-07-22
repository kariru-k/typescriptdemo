//Employee class
class Employee {
    private _id: number;
    private _name: string;
    private _address: string

    constructor(id: number, name: string, address: string) {
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

    get address(): string {
        return this._address;
    }

    set address(value: string) {
        this._address = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }
}

let john = new Employee(1, "John", "Nyayo Estate");

console.log(john.address);


let address = john.getNameWithAddress();

console.log(address);

//Inheritance
class SalesEmployee extends Employee {
    private department: string;

    constructor(id: number, name: string, address: string, department: string) {
        super(id, name, address);
        this.department = department
    }
}

let junior = new SalesEmployee(25, "Junior", "Bellevue", "Medical")

console.log(junior)

