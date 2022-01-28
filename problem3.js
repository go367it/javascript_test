// taking input
let num1 = 10;
let num2 = 20;
let temp;

// function for swapping
const swap = () => {
  console.log(`before swapping num1:${num1} and num2:${num2}`);

  temp = num1;
  num1 = num2;
  num2 = temp;

  console.log(`after swapping num1:${num1} and num2:${num2}`);
};

swap(); // calling swap function
