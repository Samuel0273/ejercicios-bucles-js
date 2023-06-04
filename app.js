//Ejercicios de Bucles
console.log("---ejercicio 1---");
//ejercicio 1
let numeroMultiplicaion = 2;
console.log("Tabla de multiplicar del número " + numeroMultiplicaion + ":");
for (let i = 1; i <= 10; i++) {
  let resultado = numeroMultiplicaion * i;
  console.log(numeroMultiplicaion + " x " + i + " = " + resultado);
}
console.log("---ejercicio 2---");
//ejercicio 2
// let suma = 0;
// while (true) {
//   let numero = parseInt(prompt("Ingrese un número"));
//   if (numero === 0) {
//     break;
//   }
//   suma += numero;
// }
// console.log("La suma de los números ingresados es: " + suma);

// //ejercicio 3
// let valor = 4;
// function adivinar(valor) {
//   if (suma >= 1 && suma <= 100 && valor === suma) {
//     console.log("adivinaste el numero");
//   } else {
//     console.log("sigue intentando");
//   }
// }
console.log("---ejercicio 4---");
//ejercicio 4
let numeroDivision = 20;
console.log("Tabla de divisores del número " + numeroDivision + ":");
for (let i = 1; i <= 10; i++) {
  let resultado = numeroDivision / i;
  console.log(numeroDivision + " / " + i + " = " + resultado);
}
console.log("---ejercicio 5---");
//ejercicio 5
let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

array1.forEach(function (elemento) {
  let mensaje = "El elemento es: " + elemento;
  console.log(mensaje);
});
console.log("---ejercicio 6---");
//ejercicio 6
let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

array2.forEach(function (elemento) {
  let mensaje = "El elemento es: " + elemento * 2;
  console.log(mensaje);
});
console.log("---ejercicio 7---");
//ejercicio 7
let familia = [
  {
    nombre: "Juan",
    edad: 35,
    parentesco: "Padre",
    ciudad: "Colombia",
  },
  {
    nombre: "María",
    edad: 32,
    parentesco: "Madre",
    ciudad: "Colombia",
  },
  {
    nombre: "Pedro",
    edad: 10,
    parentesco: "Hijo",
    ciudad: "Colombia",
  },
  {
    nombre: "Lucía",
    edad: 7,
    parentesco: "Hija",
    ciudad: "Colombia",
  },
  {
    nombre: "Carlos",
    edad: 60,
    parentesco: "Abuelo",
    ciudad: "Colombia",
  },
];
for (let i = 0; i < familia.length; i++) {
  const persona = familia[i];
  console.log(
    `Hola, soy ${persona.nombre}. Tengo ${persona.edad} años. Soy ${persona.parentesco} y vivo en ${persona.ciudad}.`
  );
}
console.log("---ejercicio 8---");
//ejercicio 8
let array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < array3.length; i++) {
  if (array3[i] % 2 !== 0) {
    console.log(array3[i]);
  }
}
console.log("---ejercicio 9---");
//ejercicio 9
let numeros = [4, 7, 2, 9];
let sumaPares = 0;
let sumaImpares = 0;
for (let i = 0; i < numeros.length; i++) {
  const numero = numeros[i];
  if (numero === 0) {
    break;
  }
  if (numero % 2 === 0) {
    sumaPares += numero;
  } else {
    sumaImpares += numero;
  }
}
console.log("La suma de los números pares es: " + sumaPares);
console.log("La suma de los números impares es: " + sumaImpares);

console.log("---ejercicio 10---");
//ejercicio 10
let numeros2 = [5, 10, 2, 8, 3, 9, 1, 6, 7, 4];
let maximo = numeros2[0];

for (let i = 1; i < numeros2.length; i++) {
  if (numeros2[i] > maximo) {
    maximo = numeros2[i];
  }
}
console.log("El número más grande es: " + maximo);
