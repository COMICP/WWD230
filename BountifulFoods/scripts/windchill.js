let tempc = 0;
let tempf = (tempc * 1.8) + 32;
let sk = 5;
let sm = 0;
let chill = 'error';
let temps = [];
let daytemps = [];

const currentTemp = document.querySelector('#temp');
const weatherIcon = document.querySelector('#weatherimg');
const captionDesc = document.querySelector('figcaption');
const url = 'https://api.openweathermap.org/data/2.5/weather?q=los Angeles&appid=5ea88fe6f0f9f7a30b39c94f6212955e&units=imperial';
const url3day = 'https://api.openweathermap.org/data/2.5/forecast?q=los Angeles&appid=5ea88fe6f0f9f7a30b39c94f6212955e&units=imperial'
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



    sm = parseFloat(weatherData.wind.speed) ;
    let hum = weatherData.main.humidity
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

    document.getElementById('temp').textContent =  tempf + "°";
    document.getElementById('curr').textContent = desc;
    document.getElementById('hum').textContent = hum




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
    let T = tempf;
    let V = sm
    let factor = 0.0817*(3.71*V**0.5 + 5.81 -0.25*V)*(T - 91.4) + 91.4 ;
    chill = Math.round(factor);


}



async function apiFetch3() {
    try {
      const response = await fetch(url3day);
      if (response.ok) {
        const data3 = await response.json();
        console.log(data3); 
        GetTemps(data3);

      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
apiFetch3();

function GetTemps(data3){
    let count = 0;
    let daytemp = 0;
    data3.list.forEach(element => {
        
        let inttemp = element.main.temp;
        
        temps.push(inttemp);

    });
    
    temps.forEach(element => {
        
        daytemp+= element;
        
        if (count == 8){
            daytemps.push(daytemp/8);
            daytemp = 0;
            count = 0;
        }
        
        count = count+1;

    });
    console.log(daytemps);


    document.getElementById('tom').textContent = Math.round(daytemps[0])
    document.getElementById('twod').textContent = Math.round(daytemps[1])
    document.getElementById('threed').textContent = Math.round(daytemps[2])
}

