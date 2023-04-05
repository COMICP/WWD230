const urlf = 'https://brotherblazzard.github.io/canvas-content/fruit.json';
var data;
const displaySpot = (fruits) => {
    const cards = document.querySelector('#spotlight'); // select the output container element
    let countspot = 1;
    fruits.forEach ((fruit) => {
        
        console.log(fruit.name);
        let option = document.createElement('option');
        option.setAttribute('value', fruit.name);
        option.textContent = fruit.name;

        let option2 = document.createElement('option');
        option2.setAttribute('value', fruit.name);
        option2.textContent = fruit.name;

        let option3 = document.createElement('option');
        option3.setAttribute('value', fruit.name);
        option3.textContent = fruit.name;

        document.getElementById('FT1').appendChild(option);
        document.getElementById('FT2').appendChild(option2);
        document.getElementById('FT3').appendChild(option3);
    }) // end of forEach loop
} // end of function expression


async function getSpotData() {
    const response = await fetch(urlf);
    data = await response.json();
    console.table(data)
    displaySpot(data);
    return data;
}

getSpotData();

console.table(data)
function findFruitMath(){
    let sugar = 0;
    let carbs = 0;
    let prot = 0;
    let fat = 0;
    let cals = 0;
    let fruit1 = document.getElementById("FT1").value;
    let fruit2 = document.getElementById("FT2").value;
    let fruit3 = document.getElementById("FT3").value;


    let sugdis = document.createElement('p');
    let cardis = document.createElement('p');
    let prodis = document.createElement('p');
    let caldis = document.createElement('p');
    let f1 = document.createElement('p');
    let f2 = document.createElement('p');
    let f3 = document.createElement('p');


    f1.textContent = fruit1;
    f2.textContent = fruit2;
    f3.textContent = fruit3;




    data.forEach(fruit => {
        if (fruit.name == fruit1){
            sugar = sugar + fruit.nutritions.sugar;
            carbs += fruit.nutritions.carbohydrates;
            prot += fruit.nutritions.protein;
            fat += fruit.nutritions.fat;
            cals += fruit.nutritions.calories;
        }
        else if (fruit.name == fruit2){
            sugar = sugar + fruit.nutritions.sugar;
            carbs += fruit.nutritions.carbohydrates;
            prot += fruit.nutritions.protein;
            fat += fruit.nutritions.fat;
            cals += fruit.nutritions.calories;
        }
        else if (fruit.name == fruit3){
            sugar = sugar + fruit.nutritions.sugar;
            carbs += fruit.nutritions.carbohydrates;
            prot += fruit.nutritions.protein;
            fat += fruit.nutritions.fat;
            cals += fruit.nutritions.calories;
        }        
    });
    sugdis.textContent = sugar+ " grams of sugar";
    cardis.textContent = carbs+ ' grams of carbs';
    prodis.textContent = prot+ ' grams of protein';
    caldis.textContent = cals+ ' calories';


    document.getElementById('orderSub').appendChild(f1)
    document.getElementById('orderSub').appendChild(f2)
    document.getElementById('orderSub').appendChild(f3)

    document.getElementById('orderSub').appendChild(sugdis)
    document.getElementById('orderSub').appendChild(cardis)
    document.getElementById('orderSub').appendChild(prodis)
    document.getElementById('orderSub').appendChild(caldis)

    console.log(sugar)
}
function submitOrder(){ 


    let namep = document.getElementById("nasub").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let currentDate = new Date().toJSON().slice(0, 10);
    let instruct = document.getElementById("description").value;

    let title = document.createElement('h2')
    let namepdis = document.createElement('p')
    let emaildis = document.createElement('p')
    let phonedis = document.createElement('p')
    let instdis = document.createElement('p')
    let date = document.createElement('p');

    title.textContent = "ORDER SUBMITTED"
    namepdis.textContent = 'Name: '+ namep;
    emaildis.textContent = 'Email: '+email;
    phonedis.textContent = 'Phone: '+phone;
    instdis.textContent = 'Custom Instructions: '+instruct;
    date.textContent = 'Date: '+ currentDate;

    document.getElementById('orderSub').appendChild(title)
    document.getElementById('orderSub').appendChild(namepdis)
    document.getElementById('orderSub').appendChild(emaildis)
    document.getElementById('orderSub').appendChild(phonedis)
    document.getElementById('orderSub').appendChild(instdis)



    console.log(namep);
    console.log(email);
    console.log(phone);

    console.log(instruct);


    findFruitMath();
    
    document.getElementById('orderSub').appendChild(date)
    
    let ordernum = Number(window.localStorage.getItem("order-ls"));
    let newnum = ordernum + 1;
    localStorage.setItem("order-ls", newnum);

}
const submit = document.getElementById('sub');

//submit.addEventListener("submit", submitOrder); I did it this way too but it did it even if the form didnt submit 

