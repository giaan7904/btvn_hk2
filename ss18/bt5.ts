function compose(...functions) {
  return function (target, _propertyKey, descriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args) {
      let result = originalMethod.apply(this, args);

      for (const func of functions) {
        result = func(result);
      }

      return result;
    };

    return descriptor;
  };
}

class MyClass {
    myMethod(a) {
        return a - 50;
    }
}

MyClass.prototype.myMethod = compose(Math.sqrt, Math.abs)(MyClass.prototype, 'myMethod', Object.getOwnPropertyDescriptor(MyClass.prototype, 'myMethod'));

let myObject = new MyClass();
console.log(myObject.myMethod(-100));  // Output: 7.0710678118654755
