//#region 
var nombre = "franco";
let apellido = 'garreton';
const sexo = `masculino`;
//#endregionvariables

//#regionconsolas
console.log(nombre);
console.log(apellido);
console.log(sexo);
//#endregionconsolas

//#regionrepetitivas 
for (x = 0; x < 10; x++) {
    console.log(nombre);
    console.log(apellido);
    console.log(sexo);
}
let inicio = 0;
let fin = [10];
let inicio2 = [0];
let fin2 = 10;
for (inicio of fin) {
    inicio++;
    console.log(nombre);
    console.log(apellido);
    console.log(sexo);
}
for (fin2 of inicio2) {
    fin2++;
    console.log(nombre);
    console.log(apellido);
    console.log(sexo);
}