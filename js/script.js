const km = document.getElementById("kilometers");

const age = document.getElementById("age");

const button = document.getElementById("btn");


let calcTicket;

let discuntAge;

let discountGeneral


//On click button
button.addEventListener ("click", function (){
	console.log (parseInt(km.value));
    console.log (parseInt(age.value));

    calcTicket = km.value * 0.2762;

    if (age.value < 18 ){
        discuntAge = (calcTicket * 17.5 / 100);
    } else if (age.value >= 65){
        discuntAge = (calcTicket * 33.3 / 100);
    }


    discountGeneral = (calcTicket - discuntAge).toFixed(2);

    console.log ("Il prezzo del biglietto è: " + discountGeneral);
})