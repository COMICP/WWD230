const url = 'json/data.json';

const displayProphets = (businesses) => {
    const cards = document.querySelector('div.direct'); // select the output container element
  
    businesses.forEach ((busines) => {
      // Create elements to add to the div.cards element
      let card = document.createElement('section');
      let name = document.createElement('p');
      let phone = document.createElement('p');
      let adress = document.createElement('p');
      let web = document.createElement('a');
      let portrait = document.createElement('img');
  

  
      // Build the image portrait by setting all the relevant attribute
      portrait.setAttribute('src', busines.imageurl);
      portrait.setAttribute('class', 'bimg');
      portrait.setAttribute('alt', `Image for ${busines.name}`);
      portrait.setAttribute('loading', 'lazy');

      web.setAttribute('href', busines.website)
      card.setAttribute('class', 'card');


      name.textContent = busines.name;
      phone.textContent = busines.phone;
      adress.textContent = busines.adress;
      web.textContent = "Website";




  
      // Append the section(card) with the created elements

      card.appendChild(portrait);
      card.appendChild(name);
      card.appendChild(adress);
      card.appendChild(phone);
      card.appendChild(web)
      
  
      cards.appendChild(card);
    }) // end of forEach loop
} // end of function expression


async function getBusData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.businesses);  // note that we reference the prophet array of the data object given the structure of the json file
    displayProphets(data.businesses);
}


function tile(){
    let butt = document.getElementById("tile");
    let bimg = document.querySelectorAll(".bimg");
    let direct = document.querySelectorAll("div.direct");
    let secc = document.querySelectorAll("section");
    
    butt.classList.toggle("open");


    direct.forEach ((thing) => {
        thing.classList.toggle("open");
    })


    secc.forEach ((thing) => {
        thing.classList.toggle("open");
    })

    bimg.forEach ((thing) => {
        thing.classList.toggle("open");
    })



    if (butt.classList != "open"){
        butt.textContent = "List";
    }
    if (butt.classList == "open"){
        butt.textContent = "Tile";
    }
    
}




getBusData();

const x1 = document.getElementById("tile");
x1.onclick = tile;
