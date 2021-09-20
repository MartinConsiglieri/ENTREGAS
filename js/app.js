
//Desafio 1 


let nombre = (prompt("Ingrese su nombre"));
let apellido = (prompt("Ingrse su apellido"));

alert("Bienvenido al curso de JS " + nombre + " " + apellido);
 
console.log("Nombre del alumno " + nombre + " " + apellido);

alert("Sigamos con su edad");
let nacimiento = (prompt("ingrsese el año de su nacieminto"));
const año = 2021;
const edad = (año - nacimiento);

alert("usted tiene " + edad);

// Desafio 2 


let respuestaHTML = confirm("Usted sabe HTML?");

// const condition1 = (respuestaHTML == true);


if (respuestaHTML){
    alert("Genial es un lenguaje de etiqueta que le va a servir mucho!");
} else{
    alert("Vea este curso que lo va a ayudar mucho, https://www.youtube.com/watch?v=MJkdaVFHrto&ab_channel=HolaMundo");
};



const respuestaSi = "si";
const respuestaNo = "no";

// const condition2 = (respuestaCSS == true);

const condition1 = (preguntaCSS == respuestaSi);
const condition2 = (preguntaCSS == respuestaNo);

if (condition1){
    alert("Genial es un lenguaje de estilo que le va a servir mucho!");
} else if (condition2){
    alert("Vea este curso que lo va a ayudar mucho, https://www.youtube.com/watch?v=wZniZEbPAzk&t=2s&ab_channel=HolaMundo");
} else{
    alert('vuelva a intentar, Escriba "si" o "no" ');
};

console.log("Conocimientos en HTML " + respuestaHTML);
console.log("Conocimientos en CSS " + respuestaCSS);












