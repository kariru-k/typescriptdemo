"use strict";
//Employee class
class Employee {
    constructor(id, name, address) {
        this._id = id;
        this._name = name;
        this._address = address;
    }
    getNameWithAddress() {
        return `${this._name} stays at ${this._address}`;
    }
    get empId() {
        return this._id;
    }
    set empId(id) {
        this._id = id;
    }
    get address() {
        return this._address;
    }
    set address(value) {
        this._address = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
}
let john = new Employee(1, "John", "Nyayo Estate");
console.log(john.address);
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
