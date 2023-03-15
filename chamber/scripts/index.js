

document.getElementById('LastUpdated').textContent = "Last Updated: " + document.lastModified;

const date = new Date();

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];


let lday = weekday[date.getDay()];

let day = date.getDate();
let month = date.toLocaleString('default', { month: 'long' });
let year = date.getFullYear();

let currentDate = `${lday}, ${day}-${month}-${year}`;

document.getElementById('copy').textContent = "©"+ new Date().getFullYear() +  " Fredericksburg Chamber";
document.getElementById('date').textContent =  currentDate;

function toggle(){
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerButton").classList.toggle("open");

}
const x = document.getElementById("hamburgerButton");
x.onclick = toggle;

if (lday == "Monday" || lday == "Tuesday"){
    let header =document.querySelector("header");
    let banor = document.createElement('h2');
    banor.setAttribute("id", "banorADD");
    banor.textContent = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
    header.appendChild(banor);

}