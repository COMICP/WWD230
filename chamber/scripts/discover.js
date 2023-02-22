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




const lastvisitout = document.querySelector("#date2");


let lastvisit = Number(window.localStorage.getItem("visits-ls"));
let currentvisit = Number(Date.now());

let unp = Math.round((currentvisit - lastvisit) / 84600000);

lastvisitout.textContent = unp + " Days since last visit";




localStorage.setItem("visits-ls", currentvisit);

