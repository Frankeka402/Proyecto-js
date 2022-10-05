//#region 
var nombre = "franco";
let apellido = 'garreton';
const sexo = `masculino`;
let num1 = 3;
let num2 = 5;
//#endregionvariables

//#regionconsolas
console.log(nombre);
console.log(apellido);
console.log(sexo);
//#endregionconsolas

//#region 
function multiplicacion(num1, num2) {
    let m = num1 * num2;
    return m;

}
console.log(multiplicacion(num1, num2));
//#endregion

//#region 
function division(num1, num2) {
    let d = num1 / num2;
    return d;
}
console.log(division(num1, num2));
//#endregion

//#region 
function suma(num1, num2) {
    let s = num1 + num2;
    return s;
}
console.log(suma(num1, num2));
//#endregion

//#region 
function resta(num1, num2) {
    let r = num1 - num2;
    return r;
}
console.log(resta(num1, num2));
//#endregion


//#region 
let colores = ["azul", "violeta", "rosa"];
let [a, v, t] = colores;

console.log(a, v, t);
//#endregion