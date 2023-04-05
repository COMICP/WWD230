

document.getElementById('LastUpdated').textContent = "Last Updated: " + document.lastModified;

const date = new Date();

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];


let lday = weekday[date.getDay()];

let day = date.getDate();
let month = date.toLocaleString('default', { month: 'long' });
let year = date.getFullYear();


let currentDate = `${lday}, ${day}-${month}-${year}`;

document.getElementById('copy').textContent = "©"+ new Date().getFullYear() +  " Bountiful Foods";


function toggle(){
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerButton").classList.toggle("open");

}
const x = document.getElementById("hamburgerButton");


if (lday == "Monday" || lday == "Tuesday"){
    let header =document.querySelector("header");
    let banor = document.createElement('h2');
    banor.setAttribute("id", "banorADD");
    banor.textContent = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
    header.appendChild(banor);

}

let imagesToLoad = document.querySelectorAll("img[data-src]");
const loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {
    image.removeAttribute("data-src");
  };
};


if ("IntersectionObserver" in window) {
const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
    if (item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
    }
    });
});
imagesToLoad.forEach((img) => {
    observer.observe(img);
});
} else {
imagesToLoad.forEach((img) => {
    loadImages(img);
});
}