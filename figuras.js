console.group("Cuadrados");

function perimetroCuadrado(lado) {
   return  lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}
console.groupEnd();



console.group("Triangulo");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

//function perimetroTriangulo(lado1,lado2,base){
//   return lado1 + lado2 + base;
//}
function perimetroTriangulo(lado){
       lado = parseInt(lado)
       const perimetro = (parseInt(lado) + parseInt(lado)) + parseInt(lado)
       return parseInt(perimetro);
}

//function areaTriangulo(base, altura){
//   return (base * altura) /2;
//}
function areaTriangulo(base){
   return (base * base) /2;
}
console.groupEnd();



console.group("Círculos");
function diametroCirculo(radio){
    return radio * 2;
}

const PI = Math.PI;
console.log("PI es : " + PI);



function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}


function areaCirculo(radio) {
    return (radio * radio) * PI;
}
console.groupEnd();



// Aquí interactuamos con el HTML
// Cuadrado
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}
// Triangulo
function calcularPerimetroTriangulo(){
    const input = document.getElementById("InputTriangulo");
    const value = input.value;

    const perimetro = perimetroTriangulo(value);
    alert(perimetro);
}

function calcularAreaTriangulo(){
    const input = document.getElementById("InputTriangulo");
    const value = input.value;

    const area = areaTriangulo(value);
    alert(area);
}
// Circulo
function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

