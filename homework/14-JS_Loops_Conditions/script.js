let numbers = [12,5,8,21,3,17,9,30,2,14];

//Arajadranq 1// 

console.log(numbers);

//Arajadranq 2// 

for(let i=0;i<numbers.length;i++)
    if(numbers[i]>10)
    console.log("10ic mec tver:",numbers[i]);

//Arajadranq 3// 

let s=0;
for(let i=0;i<numbers.length;i++)
    s+=numbers[i];
console.log("Gumar:",s);


//Arajadranq 4// 

let min=numbers[0];
for(let i=1;i<numbers.length;i++)
    if(numbers[i]<min)
        min=numbers[i];
        console.log("Min tiv:",min);

//Arajadranq 5//

let q=0;
for(let i=0;i<numbers.length;i++){
    if(numbers[i]%2===0){
        q++;
    }
}
    console.log("Zuyg tveri qanak:",q);
