let classes = [
    { id: 1, number: 25 },
    { id: 2, number: 30 },
    { id: 3, number: 50 },
];
let newClasses = classes.map(cls => {
    if (cls.number < 30) {
        return { id: cls.id, number: cls.number + 10 };
    } else if (cls.number > 40) {
        return { id: cls.id, number: cls.number - 10 };
    } else {
        return cls;
    }
});
console.log(newClasses);
