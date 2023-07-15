//simple arithmetic operators; can use compound assginment operators
//note: + will treat variables as string, must add in paraenthesis to operate numbers
let num1 = 2;
let num2 = 2;

console.log("2 + 2 is: " + (num1 + num2)); //alternative num1 += num2
console.log("2 - 2 is: " + (num1 - num2)); //alternative num1 -= num2
console.log("2 * 2 is: " + num1 * num2); //alternative num1 *= num2
console.log("2 / 2 is: " + num1 / num2 + "\n"); //alternative num /= num2

//exponents and modulus
console.log("2 ** 2 is: " + num1 ** num2);
console.log("2 % 2 is: " + num1 % num2);

//best case to use modulus operator is to evaulate is variable is an even or an odd number
