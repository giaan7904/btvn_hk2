function getAllHobbies(users) {
    let allHobbies = users.flatMap(user => user.hobbies);
    let uniqueHobbies = [...new Set(allHobbies)];
    return uniqueHobbies;
}
let users = [
    { id: 1, name: 'Alice', hobbies: ['Reading', 'Drawing'] },
    { id: 2, name: 'Bob', hobbies: ['Gaming', 'Cooking', 'Reading'] },
];
console.log(getAllHobbies(users)); 
