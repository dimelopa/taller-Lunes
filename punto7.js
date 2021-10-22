/*function matricularPadawan(nombre,edad,clasificarPadawan){
    let padawan={
        nombre:nombre,
        edad:edad
    }
    clasificarPadawan(padawan.edad)
}
matricularPadawan("juan",20,function(edad){
    if(edad<15 && edad>=15){
        let mensaje="El padawan fue asigando a Manejo de fuerza"
        console.log(mensaje)
    }else{
        let mensaje="El padawan fue asignado a Sable de luz"
        console.log(mensaje)
    }
})
*/


//FUNCION FLECHA
let matricularPadawan = (nombre,edad,clasificarPadawan) => {
    let padawan={
        nombre:nombre,
        edad:edad
    }
    clasificarPadawan(padawan.edad)
}

matricularPadawan("juan",16,function(edad){
    if(edad<15 && edad>=15){
        let mensaje="El padawan fue asigando a Manejo de fuerza"
        console.log(mensaje)
    }else{
        let mensaje="El padawan fue asignado a Sable de luz"
        console.log(mensaje)
    }
})