export {}

let found: boolean = true;
let grade: number = 55.5;
let firstName = "Alex";
let lastName = 'Upper';

//let's break some stuff!
/*
found = 0;
grade = "A";
firstName = false;
*/

console.log(found);
console.log("The grade is " + grade);
console.log("Hi " + firstName + " " + lastName);

//tamplate string
console.log(`Hi ${firstName} ${lastName}`);