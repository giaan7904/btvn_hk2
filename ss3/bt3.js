const students = [
    { id: 1, name: "John" },
    { id: 2, name: "Alice" },
    { id: 3, name: "Bob" },
    { id: 4, name: "Eve" }
  ];
  function greetStudents(student) {
    console.log(`Hello, ${student.name}!`);
  }
  students.forEach(greetStudents);
  