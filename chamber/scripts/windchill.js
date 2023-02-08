let tempc = 2;
let tempf = (tempc * 1.8) + 32;
let sk = 1;
let sm = sk / 1.609344;
let chill = 'error';


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

document.getElementById('chill').textContent =  chill + "°";
document.getElementById('temp').textContent =  tempf + "°";
document.getElementById('speed').textContent =  Math.round(sm) + "mph";