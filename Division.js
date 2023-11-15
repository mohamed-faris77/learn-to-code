function divide(a, b) {
  if (b !== 0) {
    return a / b;
  } else {
    return "Cannot divide by zero!";
  }
}

let result = divide(10, 2);
console.log(result); 

result = divide(8, 0);
console.log(result);
