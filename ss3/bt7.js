const mergeObjects = (...objects) => {
    return objects.reduce((result, obj) => {
      return { ...result, ...obj };
    }, {});
  };
  const obj1 = { a: 1, b: 2 };
  const obj2 = { b: 3, c: 4 };
  const obj3 = { c: 5, d: 6 };
  
  const mergedObj = mergeObjects(obj1, obj2, obj3);
  console.log(mergedObj);
  