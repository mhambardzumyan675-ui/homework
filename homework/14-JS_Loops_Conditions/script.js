let numbers = [12,5,8,21,3,17,9,30,2,14];

//Arajadranq 1// 
console.log(numbers);

//Arajadranq 2// 
console.log("10+ numbers");
numbers
.filter(num =>num > 10)
.forEach(num =>console.log(num));

//Arajadranq 3// 
let sum = numbers.reduce((acc,num)=> acc + num,0);
console.log("Sum value:",sum);

//Arajadranq 4// 
let min= Math.min(...numbers);
console.log("Min number:",min);

//Arajadranq 5// 
let evenCount=numbers.filter(num=> num%2==0).length;
console.log("Zuyg tver:",evenCount);
