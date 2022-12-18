//Object literal
//name,gender,breed,service,owners,phone
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
    pets:[
        {   //anonymous object
            name:"Scooby",
            age:"50",
            gender:"Male",
            breed:"Dane",
            service:"Grooming",
            owner:"Shaggy",
            contactPhone:"555-555-5555"
        },
        {
            name:"Lassie",
            age:"22",
            gender:"Female",
            breed:"Collie",
            service:"Grooming",
            owner:"Timmy",
            contactPhone:"444-444-4444" 
        }
    ]
}

function displayInfo(){

}
function init(){
    console.log(petSalon.pets[0].name);
}


// function displayInfo(){
//     let tmp=`
//     <p>Welcome to the ${salon.name}. We are open from ${salon.hours.open} to ${salon.hours.close} Monday thru Saturday.</p>
//     `;
//     document.getElementById("info").innerHTML=tmp;
// }
// function init(){
// displayInfo();
// }
// window.onload=init;

