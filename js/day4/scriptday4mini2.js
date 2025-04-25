//Day4
// MiniProject 2
//sum of digits of a number
let num1 =prompt("Enter the Number:");
let lastdigit = num1%10;
console.log(lastdigit);

let total =0;

while(num1>0){
    lastdigit =num1%10;
    total+=lastdigit;
    num1 =Math.floor(num1/10);

}
console.log(total);
