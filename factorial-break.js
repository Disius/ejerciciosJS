let factorial = 10;

let i = factorial-1;

while(factorial){
    factorial *= i;
    i--;
    if (i <= 1) break;
}
console.log(factorial);