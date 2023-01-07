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

let c=0;//Global variable

// constuctor
function Pet(name,age,gender,breed,service,owner,phone){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.breed = breed;
    this.service = service;
    this.owner = owner;
    this.phone = phone;
    this.id=c++;
}

let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputGender = document.getElementById("txtGender");
let inputBreed = document.getElementById("txtBreed");
let inputService = document.getElementById("txtService");
let inputOwner = document.getElementById("txtOwner");
let inputPhone = document.getElementById("txtPhone");

function validatePet(thePet){
    let validation=true;
        inputName.classList.remove("alert-error");
        inputAge.classList.remove("alert-error");
        inputGender.classList.remove("alert-error");
        inputBreed.classList.remove("alert-error");
        inputService.classList.remove("alert-error");
        inputOwner.classList.remove("alert-error");
        inputPhone.classList.remove("alert-error");


    if(thePet.name==""){
        validation=false;
        inputName.classList.add("alert-error");
    }

    if(thePet.age==""){
        validation=false;
        inputAge.classList.add("alert-error");
    }

    if(thePet.gender==""){
        validation=false;
        inputGender.classList.add("alert-error");
    }
    

    if(thePet.breed==""){
        validation=false;
        inputBreed.classList.add("alert-error");
    }

    if(thePet.service==""){
        validation=false;
        inputService.classList.add("alert-error");
    }

    if(thePet.owner==""){
        validation=false;
        inputOwner.classList.add("alert-error");
    }

    if(thePet.phone==""){
        validation=false;
        inputPhone.classList.add("alert-error");
    }
       
    return validation;
}


function register(){

    let newPet = new Pet(inputName.value,inputAge.value,inputGender.value,inputBreed.value,inputService.value,inputOwner.value,inputPhone.value);
    
    if(validatePet(newPet)==true){

    petSalon.pets.push(newPet);

    displayInfo();
    displayPetCards();
    clearForm();

    }
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

function deletePet(id){

    console.log("deleting pet " + id);
    let deleteIndex;

    for(let i=0;i<petSalon.pets.length;i++){
        let pet=petSalon.pets[i];
        if(id==pet.id){
            deleteIndex=i;
        }

    }
    document.getElementById(id).remove(); 

    petSalon.pets.splice(deleteIndex,1);

    displayInfo();

}


function init(){

    let scooby = new Pet("Scooby",5,"Male","Dane","Grooming","Shaggy","555-555-5555"); // creating the object
    let fido = new Pet("Fido",3,"Male","Shepard","Vaccine","Butch","444-444-4444"); // creating the object
    let lassie = new Pet("Lassie",2,"Female","Collie","Trim Nails","Timmy","333-333-3333"); // creating the object

    petSalon.pets.push(scooby,fido,lassie);// adding the pets to the array
    displayInfo();
    displayPetCards();
    
}

window.onload = init;//Waiting to render the html
