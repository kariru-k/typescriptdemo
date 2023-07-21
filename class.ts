class Employee {
    id: number;
    name: string;
    address: string

    constructor(id: number, name: string, address: string) {
        this.address = address;
        this.id = id;
        this.name = name
    }
}

let john = new Employee(1, "John", "Nyayo Estate");

console.log(john)
