//1. Solicitar 3 números (entre el 1 y el 100)  y definir cual es el mayor
// let a = prompt("Ingresa primer número (entre 1 y 100)", "");
// let b = prompt("Ingresa segundo número (entre 1 y 100)",  "");
// let c = prompt("Ingresa tercer número (entre 1 y 100)",  "");
// console.log("Los números son: ", a, b, c);

// let mayorQue;

// if ((a >= b) && (a >= c)) {
//     mayorQue = a;
// } else if ((b >= c) && (b >= a)){
//     mayorQue = b;
// } else {mayorQue = c};

// console.log("El número mayor es " + mayorQue);


// //2. Solicitar 3 números (entre el 1 y el 100)  y definir el menor de tres números

// let menorQue;

// if ((a <= b) && (a <= c) ) {
//     menorQue = a;
// } else if ((b <= c) && (b <= a)){
//     menorQue = b;
// } else {menorQue = c};
    
// console.log("El número menor es " + menorQue);

// 3. Realizar un algortimo para adivinar un número entre el 1 y el 100 en el menor número de pasos posibles (SUSPENDIDO)
// 4. Solicitar un entero (entre el 100 y el 200) y determinar si es múltiplo de 3
// let w = parseInt(prompt("Ingresa primer número (entre 100 y 200)", ""));
// console.log("Tu número es ", w);

// if ( (w % 3) == 0) {
//     alert("El número " + w + " es multiplo de 3 :D")
// } else {alert("El número " + w + " no es multiplo de 3 :(")}

// 5. Elaborar un algoritmo para leer 3 números y determinar sí uno es la suma de los otros dos
let x = prompt("Ingresa primer número", "");
let y = prompt("Ingresa segundo número", "");
let z = prompt("Ingresa tercer número", "");

if (x === y + z) {
    alert("Felicidades!! El número " + x + " "+ " se obtiene sumando" + y + " "+ "más" + z + " " + ":D")
} else if (y === x + z) {
    alert("Felicidades!! El número " + y + " se obtiene sumando" + x + "más" + z + ":D")
} else if (z === y + x){
    alert("Felicidades!! El número " + z + " se obtiene sumando " + y + " más " + x + " :D")
} else {alert("Ninguno de tus números no son la suma de los otros dos")}


// 6. Elabora un algoritmo para leer un número y determinar si es par o impar
// let t = prompt("Ingresar un número", "");

// let operacion;
// if (t/2) {
//     operacion 
    
// }

