let firstName: string = "Gia";
let lastName: string = "An";
function capitalizeFirstLetter(word: string): string {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

firstName = capitalizeFirstLetter(firstName);
lastName = capitalizeFirstLetter(lastName);
let fullName: string = `${firstName} ${lastName}`;

console.log(fullName); 
