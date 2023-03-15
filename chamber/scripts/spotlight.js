const urlb = 'json/data.json';

const displaySpot = (businesses) => {
    const cards = document.querySelector('#spotlight'); // select the output container element
    let countspot = 1;
    businesses.forEach ((busines) => {
        
        if (busines.membership >= 3){

            let card = document.createElement('div');
            let title = document.createElement('h1')
            let portrait = document.createElement('img');
            let adress = document.createElement('h2');
            let subcard = document.createElement('div');
            let phone = document.createElement('p');
            let web = document.createElement('a');
            



            // Build the image portrait by setting all the relevant attribute
            portrait.setAttribute('src', busines.imageurl);
            portrait.setAttribute('class', 'bimg');
            portrait.setAttribute('alt', `Image for ${busines.name}`);
            portrait.setAttribute('loading', 'lazy');

            web.setAttribute('href', busines.website)
            card.setAttribute('class', 'spotlight');
            if (countspot == 3){
                card.setAttribute('id', 'spot3')
            }

            title.textContent = busines.name;
            phone.textContent = busines.phone;
            adress.textContent = busines.adress;
            web.textContent = "Website";

            phone.appendChild(web);
            subcard.appendChild(phone);
            


            // Append the section(card) with the created elements

            card.appendChild(title);
            card.appendChild(portrait);
            card.appendChild(subcard);
            
            

            cards.appendChild(card);
            countspot = countspot + 1;
        }
    }) // end of forEach loop
} // end of function expression


async function getSpotData() {
    const response = await fetch(urlb);
    const data = await response.json();
    console.table(data.businesses);  // note that we reference the prophet array of the data object given the structure of the json file
    displaySpot(data.businesses);
}

getSpotData();