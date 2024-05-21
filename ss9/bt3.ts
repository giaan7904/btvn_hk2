
type Username = string;
type Age = number;

type User = {
    username: Username;
    age: Age;
};

const user: User = {
    username: "An",
    age: 20
};

console.log("Username:", user.username);
console.log("Age:", user.age);
