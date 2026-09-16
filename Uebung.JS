let number = 26; //Number 
let text = "JS ist Müll"; //String 
let bestanden = true; //boolean
let neueVariable = text; //Zuweisung neuer Variable
console.log (number, text, bestanden, neueVariable); // Ausgabe Text 

// Berechnen +
let number1 = 20;
let number2 = 70; 
console.log (number1 + number2); 

// Berechnen * 
let number3 = 27;
let number4 = 86;
console.log (number3 * number4)

//Boolean
console.log(5 == "5");
console.log(5 > 10);
console.log("Alpha" < "Beta");

//Funktionen
function rechnen (number6, number7) {
    let result = number6 + number7; 
    return result; 
}

console.log (rechnen(6, 7));
let ergebnis  = rechnen (3,8);
console.log (ergebnis);


//Zahlen hochzählen ++ -> noch fehlerhaft 
let number5 = 24;
setInterval(()=>{
number5++; 
console.log(number5); 
},1000);
//Stop
setTimeout(()=>{
    clearInterval(timer);
    console.log("Stop");
},5000);
