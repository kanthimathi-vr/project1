//js79
//constructor with properties name, age
function Person(name,age){
    this.name = name;
    this.age = age;
}
let Person1 = new Person("John",30);
console.log(Person1);
//multiple instances
 let Mary =new Person("mary",20);
 console.log(Mary);
 
//js80
//method to display greeting msg
function People (name1,age1){
    this.name1 = name1;
    this .age1 = age1;
    this. greeting =function(){
        console.log("welcome ",this.name1);
        
    };
} 
let John = new People("John",30);
console.log(John);
console.log(John.greeting());

//js81
//car constructor
function Car(brand,model,year){
    this.brand = brand;
    this. model = model;
    this. year = year;
}
let hun = new Car("Hundai","i10",2020);
console.log(hun);
//display details
console.log(hun.model);
console.log(hun.brand);
console.log(hun.year);


let maruti = new Car("maruti","m1",2022);
console.log(maruti);



//js82
function Car1(brand,model,year){
    this.brand = brand;
    this. model = model;
    this. year = year;
    this.curyear =2025;
    this.carage = function(){
        let carage1 = this.curyear-this.year;
        console.log("the car age is",carage1,"Years");
        
    }
}
let hundai = new Car1("Hundai","i10",2020);
console.log(hundai);
console.log(hundai.curyear);
console.log(hundai.carage());



//js83
function Car2(brand,model,year){
    console.log(this);//refers to new object
    
    this.brand = brand;
    this. model = model;
    this. year = year;
    this.curyear =2025;
}
let hundai1 = new Car1("Hundai","i10",2020);
console.log(hundai1);


//js84
//bank account constructor
function Bankacc(number,balance,deposit,withdraw){
    this.number = number;
    this.balance = balance;
    this.deposit = deposit;
    this.withdraw = withdraw;
    this. caldepositbalance =function() {
        let Amount = this.balance+this.deposit;
        console.log("The total amount after deposit ₹",Amount);
        
        
    }
    this. calwithdrawbalance =function() {
        let Amount1 = this.balance-this.withdraw;
        console.log("The amount after withdraw only ₹",Amount1);
        
        
    }
    this. caltotalbalance =function() {
        let Amount2 = this.balance+this.deposit-this.withdraw;
        console.log("The final Amount ₹",Amount2);
        
        
    }
}
let account1 = new Bankacc(101,10000,100,200);
console.log(account1);
console.log(account1.caldepositbalance());
console.log(account1.calwithdrawbalance());
console.log(account1.caltotalbalance());



//js85
//constructor with no parameters
function User(){
    this.name ="guest";

}
let guestuser = new User();
console.log(guestuser);


//js86

function Student(sname,grades =[]){
    this.sname =sname;
    this.grades = grades;
    this.average = function(){
       if(this.grades.length===0){
        return 0;
       }else{
        const sum=this.grades.reduce((acc,grades)=>acc+grades,0)
        return sum;
       }
        }

    }
var student1 = new Student("Peter",[80,86,96]);
console.log(student1);
console.log("average is",student1.average());


//js87
function member(name2){
    this.name2=name2;
}
let member1=new member("Mary")
member.prototype.greeting1=function(){
    return "My name is:"+this.name2;
}
console.log(member1.greeting1());

//js88
function Book(title,author,price){
    this.title =title;
    this.author =author;
    this.price = price;
    

}
let book1 = new Book("harrypotter","rowling",2999);
console.log(book1);
const books=[
    new Book("abc","author1",55),
    new Book("bc","author1",25),
    new Book("xabc","author1",40)
]
function filterbook(book1,maxprice){
    return books.filter(book => book.price <= maxprice);
}
let affordable = filterbook(books,40)
console.log(affordable);

//js89
function Emp1(id,name){
    this.id=id;
    this.name=name;


 }
function Manager(id,name,location){
    Emp1.call(this. id, name);
    this.location=location;

 }
let Emp2 = new Emp1(101,"john");
console.log(Emp2);
console.log(Emp1.prototype);
console.log(Emp2.id);
console.log(Emp2.name);
  let Manager2 =new Manager(105,"harry","chennai");
 console.log(Manager2);
 console.log(Manager.prototype);
 console.log(Manager2.location);

// //js90
//shopping cart

function Store(products =[]){
    this.products = products;

}
let supermarket = new Store(["rice","wheat","sugar"]);
console.log(supermarket);

//js91


function shopping(){
    this.products=[]
this.addproduct=function(product){
    this.products.push(product);
}
this.removeproduct=function(productname){
    this.products=this.products.filter(product=>product.name!==productname)
}
this.calculateprice=function(){
    return this.products.reduce((sum,product)=>sum+product.price1,0);
}
}
const cart=new shopping();
cart.addproduct({name4:"shirt",price1:50});
cart.addproduct({name4:"pants",price1:100});
cart.addproduct({name4:"shoe",price1:135});
console.log(cart.products);
cart.removeproduct('pants')
console.log(cart.products);
const total=cart.calculateprice();
console.log("TotalPrice:", total);


//MiniProject1:Employee Management System//
const Emplo={
    empname:"Mary",
    position:"AI",
    esal:5000
}
console.log(Emplo);
function Emplo1(empname,position,esal){
    this.empname=empname;
    this.position=position;
    this.esal=esal;
    this.increase1 =function(percent){
         this.esal+=this.esal*(percent/100);
        console.log(Emplo1.esal);
        
    }
}
const emplo3=new Emplo1("bala","Developer",2500)
const emplo2=new Emplo1("mala","UxDesigner",4500)
console.log(emplo2);


//MiniProject2: Library Management System//
function Art(title,author,year1){
    this.title =title;
    this.author =author;
    this.year1 = year1;
    

}
let art1 = new Art("harrypotter","rowling",2000);
console.log(art1);
const Art2=[
     new Art("abc","author1",55),
     new Art("bc","author1",25),
     new Art("xabc","author1",40)
 ]
 function includeart(Art){
     return Art.includes(Art =>Art.title==="abc" );
 }
console.log(includeart(Art2));
 console.log(Art2);