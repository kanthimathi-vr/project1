//js40
//for loop
for( let i=1;i<=10;i++){
    console.log("Number:",i);
    
}
//js41
//Print even numbers

for( let a=2;a<=20;a+=2){
    console.log("Even number",a);
    
}
//js42
//while loop
//print from 10 to 1
let b =10;
while(b>0){
    console.log("descending order",b);
    b--;
}
//js43
//do-while loop
let num =1;
do{
   console.log("Hello World!!!",num);
   num++; 
}while(num <=5)
//js44
//array with for loop
let arr =["carrot","beet","beans","cabbage","tomato"]

for(i=0;i<arr.length;i++){
    console.log("array is",arr[i]);
    
}
//js45
//iterate over object _for-in loop
let student =  {
    Name: "Jenny",
    Age:20,
    Course:"Javascript",
    Duration :"1month"

}
for(let key in student){
    console.log(key+":" ,student[key]);
    
}

//js46
let total=0;

for( i=0; i<=10;i++){
    total = total + i;
}
console.log("sum of first 10 numbers :",total);
//js47
let numarr =[36,45,50,60,71,83]

for( let num of numarr){
    if(num >50){
        console.log("first number greater than 30 is",num);
        break;
    }
}
//js48
let num3 =[8,46,32,6,23]
for (let number3 of num3){
    if(number3% 3 !=0) 
        console.log("Number not divisible by 3 is",number3);
        continue;
     
}
//js49
//multiplication table 5 
let n = 1;
for(i =1;i<=10;i++){
    n = i*5;
    console.log(i,'*5= ',n);
    
}
//js50
//Reverse a string using loop
let str = "Dinosaur";
for(i = str.length;i>=0;i--){
    console.log(str[i]);
    
}
//js51


//js52
let arra =[45,87,35,67]
let largest = arra[0];
for( i=1;i<arra.length;i++){
    if(arra[i]>largest){
        largest = arra[i];
      
        }
    }
console.log( "The largest number is:",largest);

//Mini project1
//Multiplication Table generator
let tablenum = prompt("enter table number:");
let numb;
console.log("Multiplication table of",tablenum);
for(i=1;i<=10;i++){
    numb = i * tablenum;
   console.log(i,"*",tablenum,"=",numb);

   
    
}

