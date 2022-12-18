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

function displaySalonInfo(){
    let tmp=`
    <p>Welcome to the ${salon.name}. We are open from ${salon.hours.open} to ${salon.hours.close} Monday thru Saturday.</p>
    `;
    document.getElementById("info").innerHTML=tmp;
}
function init(){
displaySalonInfo();
}
window.onload=init;

