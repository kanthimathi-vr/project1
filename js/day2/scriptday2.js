//js14
let prod1 = 250;
let prod2 = 300;
let prod3 = 500;

let total = prod1 + prod2 + prod3;
console.log(total);
//js15
let a = 24;
(a/2 ==0)?console.log("number is even"):console.log("number is odd");

//js16
let b = 1;
console.log(++b);//pre increment
console.log(b++);
console.log(b);//post increment
console.log(--b);//pre decrement
console.log(b--);
console.log(b);//post decrement

//js17
let age = 16;
(age == 18)?console.log("voting eligible"):console.log("voting not eligible");

//js18
let string1 = "king";
let string2 = "king";

console.log(string1 == string2 );
console.log(string1 === string2);
console.log(string1 ==="king");

let d = 5;
let d2 = "5";
console.log(d == d2); //values are equal
console.log(d === d2); ///strict equal
//js19
let email = "xyz@gmail.com";
let emailid = true;
console.log(email && "xyz@gmail.com");
console.log(emailid && email);


let pwd = 12345;
let id = true;
console.log(pwd,50000 && id);
//js20
let pric = 500;

console.log(pric+=200);
//js21
let productid = 45;
(productid>30)?console.log("product is available"):console.log("product is not available");

//js22
let num1 = 30;
let num2 = 20;
console.log(num1>num2);//greater than
//js23
let tota = 55;
console.log(tota>50);
(tota>50)?console.log("discount available"):console.log("discount not available");

//js24
let mail = "abc";
let pass = 123;
console.log(mail || true);
console.log(pass>100 || true);
//js25
let amt = 550;
let quantity = 5;
console.log(amt>500 && quantity>3);
(amt>500 && quantity>3)?console.log("buy 1 get 1 free"):console.log("not available");
;
//js26
 let year =2000;
 console.log(year%4);
 (year%4==0)?console.log("leap year"):console.log("not a leap year");
 ;

 //Mini project1
 //voting eligibility system
 let country = "India";
 let age1 = 50;
 (age1>=18 && country === "India")?console.log("eligible to vote"):console.log("Not eligible to vote");
 ;


 //Mini project2
 //Temperature Converter(Weather App)
 let celcius =38;
 let fahrenheit=0;
  fahrenheit = (celcius*9/5) + 32;
  console.log(fahrenheit);
  
  

 
 
 











 









