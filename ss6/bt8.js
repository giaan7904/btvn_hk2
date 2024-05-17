"use strict";
let firstName = "Gia";
let lastName = "An";
function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}
firstName = capitalizeFirstLetter(firstName);
lastName = capitalizeFirstLetter(lastName);
let fullName = `${firstName} ${lastName}`;
console.log(fullName);
