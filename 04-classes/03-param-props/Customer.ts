class ThirdCustomer {

    constructor(private _firstName: string,
                private _lastName: string) {}

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

let thirdCustomer = new ThirdCustomer('Alex', 'Upper');

console.log(thirdCustomer.firstName);
console.log(thirdCustomer.lastName);