function hasUppercase(str) {
    return /[A-Z]/.test(str);
  }
  console.log(hasUppercase("hello")); 
  console.log(hasUppercase("Hello")); 
  