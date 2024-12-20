/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/ 
let inputEl = document.getElementById("inpt")
let btnEl = document.getElementById("btn")
let result = document.getElementById("result")
let resultOne = document.getElementById("result-1")
let resultTwo = document.getElementById("result-2")
const meterToFoot = 3.281
const footToMeter = 0.3048
const literToGalon = 0.264
const galonToLiter =  3.785 
const kiloToPound = 2.204
const poundToKilo =  0.4536

btnEl.addEventListener("click", function(){
    let resultt = inputEl.value 
    
   result.textContent = `${resultt} meters = ${resultt * meterToFoot} feet |
   ${resultt} feet = ${resultt * footToMeter} meters`
   
   resultOne.textContent = `${resultt} liters = ${resultt * literToGalon} galons |
   ${resultt} galons = ${resultt * galonToLiter} liters`
   
   resultTwo.textContent = `${resultt} kilo = ${resultt * kiloToPound} pounds |
   ${resultt} pounds = ${resultt * poundToKilo} kilos`
   
   
})


