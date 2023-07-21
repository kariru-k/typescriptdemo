//Employee class
class Employee {
    protected id: number;
    name: string;
    address: string

    constructor(id: number, name: string, address: string) {
        this.id = id;
        this.name = name
        this.address = address;
    }

    getNameWithAddress(): string {
        return `${this.name} stays at ${this.address}`;
    }
}

let john = new Employee(1, "John", "Nyayo Estate");

console.log(john);

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

