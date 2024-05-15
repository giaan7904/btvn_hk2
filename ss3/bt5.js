const printArguments = (...args) => {
    console.log("Các đối số được truyền vào là:");
    args.forEach(arg => {
      console.log(arg);
    });
  };
  printArguments(1, 2, "Hello", true);
  