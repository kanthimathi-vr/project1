//js27
let number = 10;
if(number>0){
    console.log("number is positive");
    
}
let num =-4;
if(num>0){
    console.log("number is positive");
    
}else{
    console.log("number is negative");
    
}
//js28
let age = 30;
if(age>18){
    console.log("The person is an adult");
    
}else{
    console.log("the person is a minor");
    
}

let age1 = 15;
if(age1>18){
    console.log("The person is an adult");
    
}else{
    console.log("the person is a minor");
    
}
//js29
let a =4;
if(a%2 ==0) {
console.log("The number is even");

}else{
    console.log("The number is odd");
    
}

let b =3;
if(b%2 ==0) {
console.log("The number is even");

}else{
    console.log("The number is odd");
    
}
//js30
let mark =70;

if(mark>90 && mark>=100){
    console.log("grade-A",mark);
    
}else if(mark>70 && mark>=90){
    console.log("grade-B",mark);
    
}else if(mark>50 && mark>=70){
    console.log("grade-C",mark);
    
}else if(mark>=35 && mark>=50){
    console.log("grade-D",mark);
    
}else{
    console.log("fail");
    
}
//js31
//if-else
let lic_age =18;
if(lic_age>=18){
    console.log("The person is eligible for driving license");

    
}else{
    console.log("The person is NOT eligible for driving license");

}
//JS32
//nested if
let login = true;
let admin = "admin";
if(login){
    if(admin ="admin"){
        console.log("Admin login active");
        
    }else{
        console.log("user login");
        
    }
}else{console.log("please login!");
}
//js33
//print days
let day ="Monday";
switch(day){
    case "Monday":
        console.log("start of the week");
        break;
    case "Friday":
        console.log("Weekend is near");
        break;
    case "Sunday":
        console.log("It's a holiday");
        break;
    default:
        console.log("It's a normal day.");
       
}
//js34
//Ternary Operator
let senior_age = 60;
(senior_age>=60)?console.log("senior citizen discount eligible"):console.log("discount not eligible");
;
 
//js35
//if using &&
let login1 = !true;
let user1 = "user";

if(user1 ="user" && login1 ){
        console.log("user login active");
        
    }else{console.log("login not active");}

//js36
let user_name ="user";
let email ="mail@xyz.com";

if(user_name ="user" ||email ){
    console.log("valid user");
    
}else{
    console.log("check details provided");
    
}
//js37
let value = true;
console.log(value);
console.log(!value);
//js38
//check current year leap year or not
let current_year =2025;
if(current_year%4 ==0){
    console.log("It's a leap year");    
}else{
    console.log("It's not a leap year");
    
}
//js39
//pwd length
let pwdlength = 8;
if(pwdlength>=8){
    console.log("Password is strong");   
}else{
    console.log("Try some strong pwd");
    
}

//Mini Project1
//1.Simple Login System
let user2 = "admin";
let Password =123;
if (user2 ="admin" && Password >10){
    console.log("Login successful");
    
}else{
    console.log("Invalid Credentials!");
    
}

//Mini Project2
//Traffic Light System
let signal ="Red";
if(signal ="Red"){
    console.log("Stop");
    
}else if(signal ="Yellow"){
    console.log("Slow Down!");
    
}else if(signal ="Green"){
    console.log("Go!!!");
    
}else{console.log("Invalid color!");
}




    