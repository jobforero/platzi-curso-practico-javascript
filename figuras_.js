//console.log("Hello, world")
// Código del cuadrado
console.group("Cuadrados");

//const ladoCuadrado = 5;
//console.log("los lados del cuadrado miden : " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
   return  lado * 4;
}

//console.log("El perímeto del cuadrado es : " + perimetroCuadrado + "cm")
//const areaCuadrado = ladoCuadrado * ladoCuadrado;

function areaCuadrado(lado) {
    return lado * lado;
}

//console.log("El área del cuadrado es : " + areaCuadrado + "cm^2")
console.groupEnd();

// Código del triángulo
console.group("Triangulo");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;


/*console.log(
    "los lados del triangulo miden : " 
    + ladoTriangulo1 
    + "cm ," 
    + ladoTriangulo2 
    + "cm ," 
    + baseTriangulo 
    + "cm ");*/
   
//const alturaTriangulo = 5.5;
//console.log("La altura del triángulo es de: " + alturaTriangulo);

function perimetroTriangulo(lado1,lado2,base){
   return lado1 + lado2 + base;
}
//const perimetroTriangulo = ;
//console.log("El perímetro del triangulo  es : " + perimetroTriangulo);

//const areaTriangulo = (baseTriangulo * alturaTriangulo / 2);

function areaTriangulo(base, altura){
   return (base * altura) /2;
}

//console.log("El área del triángulo es  : " + areaTriangulo + " cm^2 ");
function areaTriangulo(base, altura){
    return (base * altura)/ 2;
}

console.groupEnd();


// Código del circulo
console.group("Círculos");

//Radio
//const radioCirculo = 4;
//console.log("El radio del círculo es  : " + radioCirculo + "cm");

function diametroCirculo(radio){
    return radio * 2;
}

//Diámetro
//const diametroCirculo = radioCirculo * 2;
//console.log("El díametro del círculo es : " + diametroCirculo + "cm");

// PI
const PI = Math.PI;
console.log("PI es : " + PI);


//Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
//const perimetroCirculo = diametroCirculo * PI;
//console.log("El perímetro del círculo es  : " + perimetroCirculo + "cm");

//Área
//const areaCirculo = (radioCirculo * radioCirculo) * PI;

function areaCirculo(radio) {
    return (radio * radio) * PI;
}
//console.log("El área del círculo es  : " + areaCirculo + " cm^2 ");


console.groupEnd();