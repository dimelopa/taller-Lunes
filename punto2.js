
/*function obtenerNombre(codigoNave){
    let nombrePiloto=codigoNave.split(":");
    // Concatenar con + y ""   -----   console.log("El nombre del piloto es: "+nombrePiloto[1]);
    return(`El nombre del piloto es: ${nombrePiloto[1]}`); //Comilla invertida ALT+96
}
console.log(obtenerNombre("ARQ255:Juan"));
let nombre=obtenerNombre("ARQ255:Juan");
console.log(nombre);
*/



// FUNCION FLECHA
let obtenerNombre = codigoNave => {

    let nombrePiloto=codigoNave.split(":");
    // Concatenar con + y ""   -----   console.log("El nombre del piloto es: "+nombrePiloto[1]);
    return(`El nombre del piloto es: ${nombrePiloto[1]}`); //Comilla invertida ALT+96

}

//console.log(obtenerNombre("ARQ255:Juan"));
let nombre=obtenerNombre("ARQ255:Juan");

console.log(nombre);