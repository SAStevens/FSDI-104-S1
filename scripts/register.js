let petSalon={
    name:"The Fashion Pet",
    phone:"555-555-5555",
    address:{
        street:"Palomar",
        number: "500",
        zip: "92025"
    },
    hours:{
        open:"9:00 am",
        close:"5:00 pm"
    },
    pets:[]
}
// constuctor
function Pet(name,age,gender,breed,service,owner,phone){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.breed = breed;
    this.service = service;
    this.ownerName = owner;
    this.contactphone = phone;
}

let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputGender = document.getElementById("txtGender");
let inputBreed = document.getElementById("txtBreed");
let inputService = document.getElementById("txtService");


function register(){
    // get the values from the html
    console.log(inputName.value,inputAge.value,inputGender.value,inputBreed.value,inputService.value);

    // create a new object
    let newPet = new Pet(inputName.value,inputAge.value,inputGender.value,inputBreed.value,inputService.value);
    

    // push it to the array
    petSalon.pets.push(newPet);

    // display the object on the console
    console.log(newPet);
    console.log(petSalon.pets);
}

function clearForm(){
    inputName.value = "";
    inputAge.value = 0;
    inputGender.value = "";
    inputBreed.value = "";
    inputService.value = "";
}

function init(){

    let scooby = new Pet("Scooby",50,"Male","Dane","Grooming","Shaggy","555-555-5555"); // creating the object

    let fido = new Pet("Fido",30,"Male","Shepard","Dematting","Butch","444-444-4444"); // creating the object
    
    let lassie = new Pet("Lassie",20,"Female","Collie","Trim Nails","Timmy","333-333-3333"); // creating the object
    
    petSalon.pets.push(scooby,fido,lassie);// adding the pets to the array

    console.log(petSalon.pets[0].name);
    console.log(petSalon.pets[1].name);
}

window.onload = init;
