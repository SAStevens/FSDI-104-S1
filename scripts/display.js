function displayPetCards(){
    let petSection = document.getElementById("pets");
    let card = "";
    for(let i=0; i < petSalon.pets.length; i++){
        let pet = petSalon.pets[i];
        card += `
        <div id="${pet.id}" class="petCard">
            <h4>Name: ${pet.name}</h4>
            <p>Age: ${pet.age}</p>
            <p>Gender: ${pet.gender}</p>
            <p>Breed: ${pet.breed}</p>
            <p>Service: ${pet.service}</p>
            <p>Owner's Name: ${pet.owner}</p>
            <p>Contact Phone: ${pet.phone}</p>
            <button onclick="deletePet(${pet.id});">Delete</button>
        </div>
        `;
        console.log(card);
    }

    petSection.innerHTML=card;

}

function displayInfo(){
    document.getElementById("info").innerHTML = "There are currently " + petSalon.pets.length + " pets in the salon";
} 

