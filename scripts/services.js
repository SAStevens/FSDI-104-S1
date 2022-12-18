let salon={
    name:"The Fashion Pet",
    address:{
        street:"Palomar",
        zip: 92025,
        number: 500
    },
    hours:{
        open:"9:00am",
        close:"5:00pm"
    }
}

console.log(salon);

let services={
    type:["Bathing", " Nail Trimming", " Desheding/Dematting", " Body Trimming", " and Blow Drying"],
    critter:["Cats", " Dogs", " Rabbits", " Hamsters", " and Guinea Pigs"]
}

console.log(services);

function displaySalonInfo(){
    let tmp=`
    <p>${salon.name} offers a full line of pet grooming services for both cats and dogs.</p>
    `;
    document.getElementById("info").innerHTML=tmp;
}
function init(){
displaySalonInfo();
}
window.onload=init;

function displaySalonInfo(){
    let tmp=`
    <p>${salon.name} offers a full line of pet grooming services for both cats and dogs.</p>
    `;
    document.getElementById("info").innerHTML=tmp;
}
function init(){
displaySalonInfo();
}
window.onload=init;

function displayServicesInfo(){
    let tmp=`
    <p>${salon.name} offers a full line of pet grooming services for your convenience including:</p>
    <p>${services.type}</p>
    <p>for ${services.critter}</p>
    `;
    document.getElementById("info").innerHTML=tmp;
}
function init(){
displayServicesInfo();
}
window.onload=init;