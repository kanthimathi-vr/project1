//js53
//function that prints hello
function fun(){
    console.log("Hello world!!!");
    
}
fun()

//js54
//function -cube of a number


function fun1(a){
    console.log(a*a*a);
    
}
fun1(4)

//js55
//function to check if a number is even or odd

function fun2(b){
    if(b%2 ==0){
        console.log( b,"is even");
        
    }else{
        console.log(' ${b} is odd');
        
    }
}
fun2(6)
//js56
//factorial of n numbers
function fact(c){
    let result =1;
    for(let i=1 ;i<=c;i++){
        result *= i;
    }
    return result;
}
console.log(fact(4));


//js57
//return value

function fun3(d,e){
    let total = d + e;
    return total;
}
fun3(5,8);
console.log(fun3(5,8));

//js58
//largest of 3 numbers
function fun4(a,b,c) {
    let largest = a;
    if(b>a && b>c){console.log(b ,"is largest");
    }
    else if(c>a && c>b){ console.log(  c ,"is largest");
   }
    else{console.log(  a ,"is largest");
    }
    
}
fun4(5,7,9)
//js59
//is palindrome
let str1 =[];
function ispalindrome(str) {

    console.log(str.length);
    for(i = str.length;i>=0;i--){
      str1 = console.log(str[i]);
        
    }
console.log(str1);

 console.log(str,"is palindrome");
    
    
}
ispalindrome("madam");

//js60
//celcius to farenheit
function fun5(celcius) {
    let faren = (celcius*9/5) + 32;
    return faren;

    
}
console.log(fun5(39));


//js61
//function to calculate Simple Interest
function fun6(p,n,r) {
    let si = p * n * r /100;
    return si;
    
}
console.log(fun6(1000,2,6));



//js62
//reverse an array
let array = [45,78,54,27,84]
for(i=0;i<array.length;i++){
    console.log(array[i]);
    
}
console.log(array.reverse());

//js63
//count number of vowels in string


//js64
//doubles each number in array
function processnumber(arr,callback) {
    for(let num of arr){
        callback (num);
    }
    
}
processnumber([4,5,6],(num) =>{
    console.log(num *2);
    
});


//js65

//callback function
function processnum(arr,callback) {
    for(let num of arr){
        callback (num);
    }
    
}
processnum([1,2,3],(num) =>{
    console.log(num *2);
    
});

//Mini Project1
//Student Grade Calculator
function mark(tam,eng,mat,sci,soc){
    total =tam+eng+mat+sci+soc;
    average =total/5;
    if(average>=90 && average<=100){
        return "grade A"
    }else  if(average>=75 && average<=89){
        return "grade B"
    }else  if(average>=50 && average<=74){
        return "grade C"
    }else{
        return "grade D"
    }
}
let marks=mark(80,86,98,87,85)
console.log("name:");
console.log("total:",total);
console.log("average:",average);
console.log("grade:",marks);



