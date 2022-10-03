class SecondCustomer {

    private _firstName: string;
    private _lastName: string;

    constructor(firstName: string, lastName: string) {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    get firstName(): string {
        return this._firstName;
    }
    
    set firstName(value: string) {
        this._firstName = value;
    }

    get lastName(): string {
        return this._lastName;
    }

    set lastName(value: string) {
        this._lastName = value;
    }

}

//instance

let secondCustomer = new SecondCustomer('Alex', 'Upper');

console.log(secondCustomer.firstName);
console.log(secondCustomer.lastName);