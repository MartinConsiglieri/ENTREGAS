
// Desafio 1 


let nombre = (prompt("Ingrese su nombre"));
let apellido = (prompt("Ingrse su apellido"));

alert("Bienvenido al curso de JS " + nombre + " " + apellido);

console.log("Nombre del alumno " + nombre + " " + apellido);
 
alert("Sigamos con su edad");


let nacimiento = Number(prompt("ingrsese el año de su nacieminto"));
const año = 2021;
const edad = (año - nacimiento);

alert(`usted tiene ${edad}`);

// Desafio 2 


let respuestaHTML = confirm("Usted sabe HTML?");


if (respuestaHTML){
    alert("Genial es un lenguaje de etiqueta que le va a servir mucho!");
} else{
    alert("Vea este curso que lo va a ayudar mucho, https://www.youtube.com/watch?v=MJkdaVFHrto&ab_channel=HolaMundo");
};



let respuestaCSS = confirm("Usted sabe CSS?");

if (respuestaCSS){
    alert("Genial es un lenguaje de etiqueta que le va a servir mucho!");
} else{
    alert("Vea este curso que lo va a ayudar mucho, https://www.youtube.com/watch?v=wZniZEbPAzk&t=2s&ab_channel=HolaMundo");
};

console.log("Conocimientos en HTML " + respuestaHTML);
console.log("Conocimientos en CSS " + respuestaCSS);



// Desafio 3 Ciclos


alert("La tabla de que N` queres saber?");

let tabla = parseInt(prompt("Ingresar Numero"));

for (let i = 1; i <= 10; i++) {

    let resultado = tabla * i ;

    console.log(`${tabla} X ${i} = ${resultado}`);
}


alert("Sigamos con un cuestionario facil");


let cuesResp1;

    do {
    cuesResp1 = Number(prompt(
        ` 5 > 4?
    1 - Si
    2 - No	
    Escriba "1" o "2"
    `));}
        while (cuesResp1 != 1) {
            alert("Muy bien sigamos!");

        }

let cuesResp2;

        do {
        cuesResp2 = Number(prompt(
            ` 30 > 10?
        1 - Si
        2 - No	
        Escriba "1" o "2"
        `));}
            while (cuesResp2 != 1) {
                alert("Muy bien sigamos!");
    
            }

let cuesResp3;

    do {
    cuesResp3 = Number(prompt(
        ` 3 > 10?
    1 - Si
    2 - No	
    Escriba "1" o "2"
    `));}
        while (cuesResp3 != 2) {
            alert("Muy bien terminamos!");}


// Desafio 4 Funciones Juego de piedra, papel y tijeras.


let resultado;
let resultadoPc;
let participante;
let opcionParticipante;
let res;
let puntosPc = 0;
let puntosParticipante = 0;

for (let i = 0; i < 3; i++) {

    function aleatorio(min, max) {
        return Math.random()*(max-min)+min;
    }

    resultado = Math.floor(aleatorio(1,4));

        if (resultado == 1) {
        resultadoPc = "Piedra";
        }
        if (resultado == 2) {
            resultadoPc = "Papel";
        }
        if (resultado == 3) {
            resultadoPc = "Tijera";
        }

    participante = parseInt(prompt(`Elija su opcion
    1 = Piedra
    2 = Papel
    3 = tijeras`));

        if (participante == 1) {
            opcionParticipante = "Piedra";
        }
        if (participante == 2) {
            opcionParticipante = "Papel";
        }
        if (participante == 3) {
            opcionParticipante = "Tijera";
    }

    console.log(`La maquina ${resultadoPc} y el participante ${opcionParticipante}`);

        if (opcionParticipante == "Piedra" && resultadoPc == "Piedra"){
            res = "Empate";
            i--;
        }
        if (opcionParticipante == "Piedra" && resultadoPc == "Papel"){
            res = "Perdiste! Mejor suerte la proxima!";
            puntosPc++;
        }
        if (opcionParticipante == "Piedra" && resultadoPc == "Tijera"){
            res = "Ganaste!";
            puntosParticipante++;
        }
        if (opcionParticipante == "Papel" && resultadoPc == "Papel"){
            res = "Empate!"
            i--;
        }
        if (opcionParticipante == "Papel" && resultadoPc == "Piedra"){
            res = "Ganaste";
            puntosParticipante++;
        }
        if (opcionParticipante == "Papel" && resultadoPc == "Tijera"){
            res = "Perdiste! Mejor suerte la proxima!";
            puntosPc++;
        }
        if (opcionParticipante == "Tijera" && resultadoPc == "Papel"){
            res = "Ganaste!";
            puntosParticipante++;
        }
        if (opcionParticipante == "Tijera" && resultadoPc == "Piedra"){
            res = "Perdiste! Mejor suerte la proxima!";
            puntosPc++;
        }
        if (opcionParticipante == "Tijera" && resultadoPc == "Tijera"){
            res = "Empate!";
            i--;
        }
        alert(res);
}
    if(puntosParticipante>puntosPc){
        alert("GANASTE AL MEJOR DE TRES")
    }else{
        alert("PERDISTE, MEJOR SUERTE LA PROXIMA!")
    }
    alert(`Resultado final!!! 
     Puntos del computador:${puntosPc} 
     Puntos Participante: ${puntosParticipante}`);