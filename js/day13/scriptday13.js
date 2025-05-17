//js158
//object to json string using stringify()
let obj = {
    name1 : "agni",
    age : 25,
    city :  "chennai"
}
console.log(obj);
let newobj = JSON.stringify(obj);
console.log(newobj);

//js 159
//json string to obj
let obj1 = JSON.parse(newobj);
console.log(obj1);

//js160
//create data.json file and fetch it in javascript


fetch("data.json")
 .then(Response => Response.json())
 .then(data =>console.log(data))
 .catch(error => console.error("error:",error));




//js161-js162 - js170
//store array of objects in local storage as json and retrieve it
//fetch json data from API and display it in a table
fetch("data.json")
.then(Response => Response.json())
.then(users =>{
    let table1 = document.getElementById("usertable");
    users.forEach(user => {
        let row = ` <tr>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.age}</td>
            <td>${user.city}</td>

        </tr>`;
        table1.innerHTML += row;
    });
})

.catch(error => console.error("error:",error));

//js163
//Modify json object inside an array and update it
let myobj,i;
myobj = {
    "words" : ["i","am","good"]
};
console.log(myobj);

myobj.words[2] = "bad" ;
console.log(myobj);


for (i in myobj.words){
    console.log(myobj.words[i]);
    
}

//js164
//filter json data to display only objects matching a specific condition
let data =  [ {
    "id" : 1,
    "name" : "barbie",
    "age" : 30,
    "city" : "nellai"
},

{
     "id" : 4,
    "name" : "daisy",
    "age" : 27,
    "city" : "trichy"
},

{
     "id" : 3,
    "name" : "chinnu",
    "age" : 25,
    "city" : "madurai"
},
{
     "id" : 2,
    "name" : "sophi",
    "age" : 21,
    "city" : "chennai"
}
 ];




const arr1 = data.filter(d => d.age >= 25);
console.log("Filtered age:",arr1);
//js165
//sort an array of objects stored in json by a specific property(age)


data.sort((a,b) => {
    const avalue = Object.values(a).sort();
    const bvalue = Object.values(b).sort();
        if(avalue < bvalue) 
            return -1;
         if(avalue > bvalue) 
            return 1;
                    return 0;
});
console.log("sorted data:",data);

//js166
//find object inside a json array based on property value
let index = data.findIndex(item => item.id === 4);
console.log("find:",index);  //gives index of find object

let Item = null;
data.some(item => {
    if(item.name === "sophi"){
        Item = item;
        return true;
    }
});



if(Item != null){
    console.log(Item);
    
}else{
    console.log("item not found");
    
}

//js167
//create a function that adds new object to an existing json file
let newarr = 
    {
     "id" : 5,
    "name" : "queen",
    "age" : 23,
    "city" : "delhi"
}


data.push(newarr);
console.log("added object:",data);

//js168: Remove a specific object from an array inside a JSON file.//
let jData = [{
    "Name": "Trees",
    "Course": "Introduction of Trees",
    "Content": ["Binary Tree", "BST", "Generic Tree"]
},
{
    "Name": "Graphs",
    "Topics": ["BFS", "DFS", "Topological Sort"]
}
];
let ind = jData.findIndex(obj => obj.Name === "Trees");
if (ind !== -1) {
    jData.splice(ind, 1);
}
console.log(jData);

//Task169: Fetch data from a JSON file and display it in a dropdown list. //
fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const dropdown = document.getElementById('myDropdown');
            dropdown.innerHTML = '';
            const defaultOption = document.createElement('option');
            defaultOption.text = 'Select an option';
            defaultOption.value = '';
            dropdown.appendChild(defaultOption);

            data.forEach(item => {
                const option = document.createElement('option');
                option.value = item.id; 
                option.text = item.name;  
                dropdown.appendChild(option);
            });
        })
        .catch(error => console.error('Error fetching data:', error));

//MiniProject1:E-Commerce Product Catalog //
// Parse JSON data
const productsJSON = `
[
    {
        "name": "Laptop",
        "price": 1200,
        "category": "Electronics"
    },
    {
        "name": "T-shirt",
        "price": 25,
        "category": "Clothing"
    },
    {
        "name": "Book",
        "price": 15,
        "category": "Books"
    }
]
`;

// Parse JSON data
const products = JSON.parse(productsJSON);
console.log(products);


// Get the ul element to display the data
const productList = document.getElementById("product-list");

// Iterate through the products and create list items
products.forEach(product => {
    const listItem = document.createElement("li");
    listItem.textContent = `Name: ${product.name}, Price: ${product.price}, Category: ${product.category}`;
    productList.appendChild(listItem);
});

//implement//
const filteredProducts = products.filter(product => product.price < 500);

console.log(filteredProducts);

//Sorting
function sortProductsByPrice(products, order = 'asc') {
    return [...products].sort((a, b) => {
      const priceA = parseFloat(a.price);
      const priceB = parseFloat(b.price);
  
      if (order === 'asc') {
        return priceA - priceB;
      } else if (order === 'desc') {
        return priceB - priceA;
      }
      return 0;
    });
  }
  const sortedAscending = sortProductsByPrice(products, 'asc');
  console.log('Price low to High:', sortedAscending);
  
  const sortedDescending = sortProductsByPrice(products, 'desc');
  console.log('Price High to low:', sortedDescending);

  //MiniProject2:Movie Search App//
  const movieTitle = prompt("Please enter a movie title:");
if (movieTitle) {
  console.log("The movie title you entered is: " + movieTitle);
} else {
  console.log("No movie title was entered.");
}
localStorage.setItem("movieTitle",JSON.stringify(movieTitle))
let store=localStorage.getItem("movieTitle")


if(store = "movieTitle"){
    const retrievedMovie=JSON.parse(store)
    console.log(retrievedMovie)
}else{
    console.log("No data found")
}

const storedMovies = localStorage.getItem('movieTitle');
const moviesArray = JSON.parse(storedMovies) || [];

function searchMovie(searchTerm) {
    return moviesArray.filter(movie => 
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
  const searchTerm = 'your search term';
const searchResults = searchMovie(searchTerm);