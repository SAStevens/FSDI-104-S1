let petSalon = {
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
    this.contactPhone = phone;
}

let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputGender = document.getElementById("txtGender");
let inputBreed = document.getElementById("txtBreed");
let inputService = document.getElementById("txtService");
let inputOwner = document.getElementById("txtOwner");
let inputPhone = document.getElementById("txtPhone");


function register(){
    // get the values from the html
    // console.log(inputName.value,inputAge.value,inputGender.value,inputBreed.value,inputService.value,inputOwner.value,inputPhone.value);

    // create a new object
    let newPet = new Pet(inputName.value,inputAge.value,inputGender.value,inputBreed.value,inputService.value,inputOwner.value,inputPhone.value);
    
    // push it to the array
    petSalon.pets.push(newPet);

    // display the object on the console
    // alert("You have " + petSalon.pets.length + " pets in the salon.");
    // console.log(newPet);
    // console.log(petSalon.pets);
    displayInfo();
    displayPetCards();
    clearForm();
}

function clearForm(){
    inputName.value = "";
    inputAge.value = "";
    inputGender.value = "";
    inputBreed.value = "";
    inputService.value = "";
    inputOwner.value = "";
    inputPhone.value = "";
}

// function displayInfo(){
//     document.getElementById("info").innerHTML="You have " + petSalon.pets.length + " pets in the salon";
// }

function init(){

    let scooby = new Pet("Scooby",5,"Male","Dane","Grooming","Shaggy","555-555-5555"); // creating the object
    let fido = new Pet("Fido",3,"Male","Shepard","Vaccine","Butch","444-444-4444"); // creating the object
    let lassie = new Pet("Lassie",2,"Female","Collie","Trim Nails","Timmy","333-333-3333"); // creating the object

    petSalon.pets.push(scooby,fido,lassie);// adding the pets to the array
    displayInfo();
    displayPetCards();
    
}

window.onload = init;//Waiting to render the html
