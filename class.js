"use strict";
class Employee {
    constructor(id, name, address) {
        this.address = address;
        this.id = id;
        this.name = name;
    }
}
let john = new Employee(1, "John", "Nyayo Estate");
console.log(john);
