let nam = parseInt(prompt("Ingresa el algoritmo a realizar (claramente a exepción del número 3)", "1 2 4 5 6"));
switch (nam) {
    case 1:
        let a = parseInt(prompt("Ingresa primer número (entre 1 y 100)"));
        let b = parseInt(prompt("Ingresa segundo número (entre 1 y 100)"));
        let c = parseInt(prompt("Ingresa tercer número (entre 1 y 100)"));
        console.log("Tus números son " + a + ", " + b + " y " + c);

        let mayorQue;
        if ((a >= b) && (a >= c)) {
            mayorQue = a;
        } else if ((b >= c) && (b >= a)){
            mayorQue = b;
        } else {mayorQue = c};

        console.log("El número mayor es " + mayorQue);
        alert("El número mayor es " + mayorQue);
        break;
    case 2:
        let q = parseInt(prompt("Ingresa primer número (entre 1 y 100)"));
        let p = parseInt(prompt("Ingresa segundo número (entre 1 y 100)"));
        let o = parseInt(prompt("Ingresa tercer número (entre 1 y 100)"));
        console.log("Tus números son " + q + ", " + p + " y " + o);

        let menorQue;
        if ((q <= p) && (q <= o) ) {
            menorQue = q;
        } else if ((p <= o) && (p <= q)){
            menorQue = p;
        } else {menorQue = o};
        
        console.log("El número menor es " + menorQue);
        alert("El número menor es " + menorQue);
        break;
    case 3:
        alert("Ya sabias que el 3 aún no :/  Vuelvelo a intentarlo!!")
        console.log("Aún no dispnible problema 3.  Vuelvelo a intentarlo!!");
        break;
    case 4:
        let w = parseInt(prompt("Ingresa primer número (entre 100 y 200)", ""));
        console.log("Tu número es " + w);
        
        if ( (w % 3) == 0) {
            alert("El número " + w + " es múltiplo de 3!! :D");
            console.log("El número " + w + " es múltiplo de 3");
        } else {alert("El número " + w + " no es múltiplo de 3 :(");
            console.log("El número " + w + " no es múltiplo de 3");}
        break;
    case 5:
        let x = parseFloat(prompt(("Ingresa primer número")));
        let y = parseFloat(prompt(("Ingresa segundo número")));
        let z = parseFloat(prompt(("Ingresa tercer número")));
        console.log("Tus números son " + x + ", " + y + " y " + z);

        if (x == (y + z)) {
            alert("Felicidades!! El número " + x + " se obtiene sumando " + y + " más " + z + " :D");
            console.log("El número " + x + " se obtiene sumando " + y + " más " + z);
        } else if (y == (x + z)) {
            alert("Felicidades!! El número " + y + " se obtiene sumando " + x + " más " + z + " :D");
            console.log("El número " + y + " se obtiene sumando " + x + " más " + z);
        } else if (z == (y + x)){
            alert("Felicidades!! El número " + z + " se obtiene sumando " + y + " más " + x + " :D");
            console.log("El número " + z + " se obtiene sumando " + y + " más " + x);
        } else {alert("Ninguno de tus números se forma con la suma de los otros dos :(");
        console.log("Ninguno de tus números se forma con la suma de los otros dos");}
        break;

    case 6:
        let t = parseFloat(prompt("Ingresa un número"));
        console.log("Tu número es " + t);
        if (((t % 2) == 0)) {
            alert("El número "+t+" es par!! :D");
            console.log("El número "+t+" es par");
        } else {alert("El número "+t+" no es impar :c")
        console.log("El número "+t+" no es par");}
    default: alert("Gracias por ver mi primer algoritmo c: Vuelve cuando quieras!!")
        break;
}

//1. Solicitar 3 números (entre el 1 y el 100)  y definir cual es el mayor
// let a = parseInt(prompt("Ingresa primer número (entre 1 y 100)"));
// let b = parseInt(prompt("Ingresa segundo número (entre 1 y 100)"));
// let c = parseInt(prompt("Ingresa tercer número (entre 1 y 100)"));
// console.log("Tus números son " + a + " , " + b + " y " + c);

// let mayorQue;
// if ((a >= b) && (a >= c)) {
//     mayorQue = a;
// } else if ((b >= c) && (b >= a)){
//     mayorQue = b;
// } else {mayorQue = c};

// alert("El número mayor es " + mayorQue);


// //2. Solicitar 3 números (entre el 1 y el 100)  y definir el menor de tres números
// let a = parseInt(prompt("Ingresa primer número (entre 1 y 100)"));
// let b = parseInt(prompt("Ingresa segundo número (entre 1 y 100)"));
// let c = parseInt(prompt("Ingresa tercer número (entre 1 y 100)"));
// console.log("Tus números son " + a + " , " + b + " y " + c);

// let menorQue;
// if ((a <= b) && (a <= c) ) {
//     menorQue = a;
// } else if ((b <= c) && (b <= a)){
//     menorQue = b;
// } else {menorQue = c};
    
// alert("El número menor es " + menorQue);

// 3. Realizar un algortimo para adivinar un número entre el 1 y el 100 en el menor número de pasos posibles (SUSPENDIDO)

// 4. Solicitar un entero (entre el 100 y el 200) y determinar si es múltiplo de 3
// let w = parseInt(prompt("Ingresa primer número (entre 100 y 200)", ""));
// console.log("Tu número es " + w);

// if ( (w % 3) == 0) {
//     alert("El número " + w + " es multiplo de 3!! :D")
// } else {alert("El número " + w + " no es multiplo de 3 :(")}


// 5. Elaborar un algoritmo para leer 3 números y determinar sí uno es la suma de los otros dos
    // let x = parseFloat(prompt(("Ingresa primer número")));
    // let y = parseFloat(prompt(("Ingresa segundo número")));
    // let z = parseFloat(prompt(("Ingresa tercer número")));
    // console.log("Tus números son " + x + " , " + y + " y " + z);

    // if (x == (y + z)) {
    //     alert("Felicidades!! El número " + x + "" + " se obtiene sumando " + y + "" + " más " + "" + z + "" + "!! :D");
    //     console.log("El número " + x + "" + " se obtiene sumando " + y + "" + " más " + "" + z);
    // } else if (y == (x + z)) {
    //     alert("Felicidades!! El número " + y + " se obtiene sumando " + "" + x + ""+ " más " + "" + z + "" + "!! :D");
    //     console.log("El número " + y + "" + " se obtiene sumando " + x + "" + " más " + "" + z);
    // } else if (z == (y + x)){
    //     alert("Felicidades!! El número " + z + " se obtiene sumando " + "" + y + "" + " más " + "" + x + "" + "!! :D");
    //     console.log("El número " + z + "" + " se obtiene sumando " + y + "" + " más " + "" + x);
    // } else {alert("Ninguno de tus números se forma con la suma de los otros dos :(");
    // console.log("Ninguno de tus números se forma con la suma de los otros dos");}



// 6. Elabora un algoritmo para leer un número y determinar si es par o impar
    // let t = parseFloat(prompt("Ingresa un número"));
    // console.log("Tu número es " + t);
    // if (((t % 2) == 0)) {
    //     alert("El número "+t+" es par!! :D");
    //     console.log("El número "+t+" es par");
    // } else {alert("El número "+t+" no es impar :c")
    // console.log("El número "+t+" no es par");}