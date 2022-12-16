let customer = {
    //object literal
    //Attributes or properties 
    name:"Bill", 
    age: "36", 
    isActive: true, 
    nationality: "Mexican",
    weight: "180",
    //Methods - Describe the actions an object can perform
    saysomething: function(){
        return 24+24;
    },
    hobbies:["football","music","games"],
    address:{
        street:"palomar",
        zip:"92121",
        city:"San Diego"
    }
}

// console.log(customer);
// console.logcustomer.saysomething());
// console.logcustomer.hobbies[1]);
console.log(customer.address.city);

let products = [];
let product1 = {
    name:"Laptop",
    description:"HP i7 core",
    price:200
}
let product2 = {
    name:"PC",
    description:"Dell Inspirion",
    new: true,
}
let product3 = {
    name:"PC",
    description:"Lenovo",
    color: "gray",
}

products = [product1,product2,product3];//Static - no changes
products.push(product1,product2,product3);//Dynamic + changes
//Display in the console the price of product3
console.log(products[2].color);



