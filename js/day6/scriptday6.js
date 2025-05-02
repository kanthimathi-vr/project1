//js66
let students = ["john","Alice","Bro","charles","danny"]
console.log(students);
console.log(students[0]);
console.log(students instanceof Array);//type of array
console.log(students.length);

//js67
//add a student using push
students.push("abraham","zion")
console.log(students);

//js68
//remove last student using pop
students.pop()
console.log(students);

//js69
//map to convert all names to uppercase
console.log(students);
students.forEach(students=>console.log(students));

let upperca = students.map(students=>students.toUpperCase());
console.log(upperca);

//js70
//filter to get students -name starts with "a"
let astudent = students.filter(students=>students.charAt() =="a")
console.log(astudent);

let aname =students.filter(students=>students.at(0) == "A");
console.log(aname);




//js71
//foreach() to print each student name
console.log(students);
students.forEach(students=>console.log(students));


//js72
//create an object with properties

let book ={
    title: "Harry Potter",
    author:"Rowling",
    price:599
}
console.log(book);


//js73
//Object.keys()
console.log(Object.keys(book));

//js74
//Object.values()
console.log(Object.values(book));

//js75
//add new property using Object.assign()

let bookdetail = { 
    publish:2016
}
let newbook = Object.assign(book,bookdetail);
console.log(newbook);


//js75
//delete property from Object
delete newbook.price;
console.log(newbook);

//Mini Project1
let movie =["avatar","simba","disney","frozen","lion king"]
console.log(movie);
let userinput = prompt("enter Movie");

//find movie name in array
let movieuser = movie.includes(userinput);
console.log(movieuser);

if(movieuser == true){
    console.log("ticket booked");
    
}else{
    console.log("movie not available");
    
}



let newmovie =movie.find(movie=>movie ==userinput)
console.log(newmovie);
console.log(Boolean(newmovie));
//Booking confirmation
if(Boolean(newmovie) ==true){
    console.log("Ticket Booked");
    
}else{console.log("movie not available");
}



//MiniProject2
//Productt Inventory System
//Create Object
let supermarket ={
    rice:5,
    wheat:10,
    sugar:8
}
console.log(supermarket);
//Add Product
let newproduct ={
    veg:15,
    fruits:20
}

 supermarket =Object.assign(supermarket,newproduct);
 console.log(supermarket);
//remove Product
delete supermarket.rice;
console.log(supermarket);

//last Object after all updates
console.log(supermarket);

