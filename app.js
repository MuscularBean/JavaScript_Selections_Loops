console.log("Hello World!\n==========\n");

// Exercise 1 Section
for(let nums = 0; nums < 100; nums++)
{
    if(nums % 2 != 0)
    {
        console.log(nums);
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for(let n = 0; n < 100; n++)
{
    if(n % 3 == 0 && n % 5 ==0)
    {
        console.log("FIZZBUZZ");
    }
    else{
         if ( n % 3 == 0)
    {
        console.log("FIZZ");
    }
    }
    if(n % 5 == 0)
    {
    console.log("BUZZ");
    }       
}

console.log("EXERCISE 3:\n==========\n");
/* Exercise 1 "while" loop solution*/
let number = 1;
while ( number <= 100) {
    if(number % 2 != 0){
        console.log(number);
    }
    number++;
}
/*Exercise 2 "while" loop solution*/
let num = 0;
while (num < 100){
    if(num % 3 == 0 && num % 5 == 0)
    {
        console.log("FIZZBUZZ");
    }
    else{
        if( num % 3 == 0)
    {
    console.log("FIZZ");
    }
    }
    if(num % 5 == 0)
    {
    console.log("BUZZ");
    }   
    num++;
}
/*Exercise 1 "do/while" loop solution*/
let i = 1;
do{
    if(i % 2 != 0){
        console.log(i);
    }
    i++;
}while(i <= 100);
/*Exercise 2 "do/while" loop solution*/
let x = 0;
do{
    if(x % 3 == 0 && x % 5 == 0)
    {
        console.log("FIZZBUZZ");
    }
    else{
        if(x % 3 == 0)
    {
    console.log("FIZZ");
    }
    }
    if(x % 5 == 0)
    {
    console.log("BUZZ");
    }   
    x++;
}while(x < 100);


console.log("EXERCISE 4:\n==========\n");
let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

for(let k = 0; k <= n; k++){
    if(k == value){
        console.log("Found Value!");
        break;
    }
    else{
        console.log("Did not find a value");
    }
}
