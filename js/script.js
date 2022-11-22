const km = document.querySelector("input#kilometers");

const age = document.querySelector("input#age");


const button = document.querySelector("button")


//On click button
button.addEventListener ("click", function (){
	console.log (km.value)
    console.log (age.value)
})