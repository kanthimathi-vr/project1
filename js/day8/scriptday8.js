//js92
//convert "javascript" to uppercase
let text ="javascript";
console.log(text.toUpperCase());

//js93
//convert "HELLOWORLD" to lowercase
let text2 ="HELLO WORLD";
console.log(text2.toLowerCase());

//js94
//extract script from "javascript" using slice()
let text3 = "javascript";
console.log(text3.slice(4,10));

//js95
//replace "bad "with "good" in sentence "this is a bad day"
let text4 ="this is a bad day";
console.log(text4.replace("bad","good"));

//js96
//check if coding is present in "i love coding"
let text5 ="i love coding";
console.log(text5.includes("coding"));
console.log(text5.search("coding"));
console.log(text5.indexOf("coding"));

//js97
//position of "world" in "hello world"
let text6 = "hello world";
console.log(text6.search("world"));
console.log(text6.indexOf("world"));

//js98
//remove spaces from "trim me"
let text7  = "       Trim me";
console.log(text7.trim());

//js99
//count the number of characters in "programming"
let text8 = "programming";
console.log(text8.length);

//js100
//checkif "apple " starts with a
let text9 = "apple";
console.log(text9.startsWith("a"));
console.log(text9.endsWith("a"));

//js101
//split "banana,apple,orange" into an array
let text10 = "banana,apple,orange";
console.log(text10.split(","));

//js102
//repeact "js" 3 times
let text11 = "js";
console.log(text11.repeat(3));

//js103
//concatenate "web " and "ddevelopment"
let text12 = "web";
let text13 = "development";
console.log(text12+text13);
console.log(text12+"  "+text13);
console.log(text12.concat(text13));
console.log(text12.concat(" "+text13));

//js105
//validate if "user123" has at least 5 characters

function validateUsername(username){
    if(username.length<5){
        return "username must be at least 5 characters long";
    }
    else{
        return "Valid Username";
    }
}
console.log(validateUsername("john"));
console.log(validateUsername("Abraham"));


//Mini Project1
//Username Generator

let firstname = prompt("enter firstname");
let lastname = prompt("enter lastname");

let first = firstname.slice(0,3);
console.log(first);

let last = lastname.slice(0,3);
console.log(last);

let x = Math.floor((Math.random()*100)+1);
console.log(x);

console.log(first+last+ x);
 function genusername(){
    return first+last+ x;
 }
console.log(genusername());


//Mini Project2
//palindrome 

let text14 ="madam";

// function spaceremove(){
//     return text14.trim();

// }
// console.log(spaceremove());
console.log(text14.trim());


// function removespecialchar(text14){
//     return text14.replace("/[&\/\\#, +{}$`.%{}]/","");
// }
// console.log(removespecialchar());
//console.log(text14.replace("/[&\/\\#, +{}$`.%{}]/","_"));

function reverseString(str){
    return str.split("").toLowerCase().reverse().join("");
}
console.log(reverseString("madam"));
console.log(reverseString("palindrome"));


let modifiedstr = reverseString("madam");
if(text14===modifiedstr)
{
    console.log("its a palindrome");
    
}else{
    console.log("not a palindrome");
    
}

