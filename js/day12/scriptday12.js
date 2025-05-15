//js145
//create an array of employees with name,age,position
let employee = [
    {
        name: "alice",
        age: 26,
        position: "Manager"
    },
    {
        name: "Barbie",
        age: 29,
        position: "CEO"
    },
    {
        name: "Charles",
        age: 22,
        position: "CMO"
    }
];
//js146
//fetch and display list of products
console.log(employee);
console.log(employee[0]);
console.log(employee[1]);
console.log(employee[2]);
console.log(employee[0].name);
console.log(employee[0].age);
console.log(employee[1].name);
console.log(employee[2].name);
//js147
//sort array of objects by age in ascending order
employee.sort((a, b) => a.age - b.age);
console.log(employee);


//js148
//filter an array to show only students with grade a

let students = [
    {
        name1: "Abi",
        mark: 87,
        grade: "A"
    }, {
        name1: "kavi",
        mark: 77,
        grade: "B"
    }, {
        name1: "Harini",
        mark: 55,
        grade: "C"
    },
    {
        name1: "mokshi",
        mark: 97,
        grade: "A"
    }
];
console.log(students);

let grade_a = students.filter(students => students.grade === "A");
console.log(grade_a);
//js149
//find by name
let Abi = students.find(students => students.name1 === "Abi");
console.log(Abi);
//js150
//convert array of objects to only an array of string

let newarr = JSON.stringify(students);
console.log(newarr);

//js151
//Modify an object inside an array and update its value
console.log(students[3]);//4th object
students[3].mark = 89;    //update value
console.log(students[3]);  //show updated value

//js152
//count how many objects meet specific condition

let grade_b = students.filter(students => students.grade === "A").length;  //count using length
console.log(grade_b);
//js153
//search function to find objects

console.log(students);
let grade_c = students.filter(students => students.grade === "C");
console.log(grade_c);

//js154
//group objects based on property value

console.log(students);
let grade = students.filter(students => students.name1 === "mokshi");
console.log(grade);

//js155
//remove specific object from an array by property
for (var i = 0, len = students.length; i < len; i++) {
    delete students[i].grade;
}
console.log(students);

//js156
//add new objects dynamically to an array
students.push({ name1: "janani", mark: 78, grade: "B" })
console.log(students);

//js 157
//display high mark in an array

let highmark = students.sort((a, b) => b.mark - a.mark);
console.log(highmark[0]);

//Mini Project1
//Inventory Management System Requirements

let store = [
    {
        id: 101,
        name2: "Rice",
        category: "grocery",
        Quantity: 5,
        price: 500
    },
    {
        id: 102,
        name2: "phone",
        category: "Electronics",
        Quantity: 1,
        price: 5000
    },
    {
        id: 103,
        name2: "wheat",
        category: "grocery",
        Quantity: 5,
        price: 800
    },
    {
        id: 104,
        name2: "Headset",
        category: "Electronics",
        Quantity: 2,
        price: 600
    }
];
console.log(store);

let Electronics = store.filter(store => store.category === "Electronics");
console.log(Electronics);

//update 
store.push({
    id: 105,
    name2: "Headset",
    category: "Electronics",
    Quantity: 2,
    price: 600
},
    {
        id: 106,
        name2: "Headset",
        category: "Electronics",
        Quantity: 2,
        price: 600
    }
);

console.log(store);


//remove

let store1 = store.filter(store => store.id === 101);
console.log(store1);
console.log(store);

//MiniProject2
//Library Book Management system
let Library = [
    {
        bookID: 501,
        title: "book1",
        author: "james",
        genre: "story",
        availability: false,
        borrower: "person1"
    },
    {
        bookID: 505,
        title: "book5",
        author: "singh",
        genre: "kids",
        availability: true,
        borrower: "person2"
    },
    {
        bookID: 502,
        title: "book2",
        author: "charles",
        genre: "comedy",
        availability: false,
        borrower: "person4"
    },
    {
        bookID: 503,
        title: "book3",
        author: "peter",
        genre: "kids",
        availability: true,
        borrower: "person5"
    },
    {
        bookID: 504,
        title: "book4",
        author: "hari",
        genre: "reallife",
        availability: true,
        borrower: "none"
    }
];
console.log(Library);

//search book
let book1 = Library.filter(Library => Library.bookID === 501);
console.log(book1);


let book3 = Library.filter(Library => Library.availability === false);
console.log(book3);

let book2 = Library.filter(Library => Library.availability === true);
console.log(book2);

