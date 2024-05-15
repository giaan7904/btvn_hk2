const checkStartString = (longString, shortString) => longString.startsWith(shortString);
console.log(checkStartString("Hello world", "Hello"));
console.log(checkStartString("Hello world", "world")); 
