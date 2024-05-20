"use strict";
const validatePerson = (person) => {
    return (typeof person.name === "string" &&
        typeof person.age === "number" &&
        (person.address === null || typeof person.address === "object"));
};
const person1 = {
    name: "John Doe",
    age: 30,
    address: { street: "123 Main St", city: "Anytown" }
};
const person2 = {
    name: "Jane Smith",
    age: 25,
    address: null
};
console.log(validatePerson(person1));
console.log(validatePerson(person2));
