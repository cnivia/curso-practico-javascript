//Código del cuadrado.
console.group("Cuadrados");

const ladocuadrado=5;
console.log("Los lados del cuadrado miden: " + ladocuadrado + "cm");

function perimetrocuadrado(lado) {
    return lado * 4;
    console.log("El perímetro del cuadrado es: " + perimetrocuadrado + "cm");
    
}

function areacuadrado(lado) {
    return lado*lado;
}
console.log("El área del cuadrado es: " + areacuadrado + "cm^2");

console.groupEnd();

//Código del triángulo.
console.group("Triangulos");

const ladotriangulo1=6;
const ladotriangulo2=6;
const basetriangulo=4;
const alturatriangulo=5.5;
const perimetrotriangulo=ladotriangulo1+ladotriangulo2+basetriangulo;
const areatriangulo=(basetriangulo*alturatriangulo)/2;

console.log("Los lados del triángulo miden: " + ladotriangulo1 + "cm, " + ladotriangulo2 + "cm, " + basetriangulo + "cm, ");
console.log("La altura del triángulo es de: " + alturatriangulo);
console.log("El perímetro del triángulo es: " + perimetrotriangulo + "cm");
console.log("El área del triángulo es: " + areatriangulo + "cm^2");

console.groupEnd();

//Código del círculo.
console.group("Círculos");

const radio=4;
const diametro=radio*2;
const pi=Math.PI;
const perimetrocirculo=pi*diametro;
const areacirculo=pi*(radio*radio);

console.log("El radio del círculo es: " + radio + "cm");
console.log("El diametro del círculo es: " + diametro + "cm");
console.log("PI es: " + Math.PI + "cm")
console.log("El perímetro del círculo es: " + perimetrocirculo + "cm");
console.log("El área del círculo es: " + areacirculo + "cm^2");


console.groupEnd();

//Aquí interactuamos con el HTML

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetrocuadrado(value);
    alert(perimetro)
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areacuadrado(value);
    alert(area)
}