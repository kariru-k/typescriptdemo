"use strict";
//Employee class
class Employee {
    constructor(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
    getNameWithAddress() {
        return `${this.name} stays at ${this.address}`;
    }
}
let john = new Employee(1, "John", "Nyayo Estate");
console.log(john);
let address = john.getNameWithAddress();
console.log(address);
//Inheritance
class SalesEmployee extends Employee {
    constructor(id, name, address, department) {
        super(id, name, address);
        this.department = department;
    }
}
let junior = new SalesEmployee(25, "Junior", "Bellevue", "Medical");
console.log(junior);
