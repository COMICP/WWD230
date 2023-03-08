let tempc = 0;
let tempf = (tempc * 1.8) + 32;
let sk = 5;
let sm = 0;
let chill = 'error';


const currentTemp = document.querySelector('#temp');
const weatherIcon = document.querySelector('#weatherimg');
const captionDesc = document.querySelector('figcaption');
const url = 'https://api.openweathermap.org/data/2.5/weather?q=Fredericksburg&appid=5ea88fe6f0f9f7a30b39c94f6212955e&units=imperial';

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); 
        displayResults(data);




      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }



function  displayResults(weatherData) {

  
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;

    sm = parseFloat(weatherData.wind.speed) ;
    document.getElementById('speed').textContent =  Math.round(sm) + "mph";
    tempf = parseFloat(weatherData.main.temp.toFixed(0)) ;
    const desc = weatherData.weather[0].description;

    if (tempf <= 50 ){
        if (sm >= 3){
            windchill();
        }
        else{
            chill = "na";
        }
    }
    else{
        chill = "na";
    }
    document.getElementById('chill').textContent =  chill + "°";
    document.getElementById('temp').textContent =  tempf + "°";
    document.getElementById('curr').textContent = desc;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;

  }

apiFetch();


if (tempf <= 50 ){
    if (sm >= 3){
        windchill();
    }
    else{
        chill = "na";
    }
}
else{
    chill = "na";
}
function windchill(){
    let factor = 35.74 + (0.6215*tempf) - (35.75*sm^0.16) + (0.4275*tempf*sm^0.16);
    chill = tempf + Math.round(factor);


}



