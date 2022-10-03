class FirstCustomer {

    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

}

//instance

let firstCustomer = new FirstCustomer('Alex', 'Upper');

console.log(firstCustomer.firstName);
console.log(firstCustomer.lastName);