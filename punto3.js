 
/*let temperaturas=[10,50,60,20,5] 
function calcularPromedioTemperatura(...temperaturas){
    let temperaturaMaxima=Math.max(...temperaturas)
    let temperaturaMinima=Math.min(...temperaturas)
    let promedio=(temperaturaMaxima+temperaturaMinima)/2;
    return(promedio)
}
console.log(`La temperatura promedio fue de: ${calcularPromedioTemperatura(...temperaturas)} °C`)
*/


//FUNCION FLECHA
let temperaturas=[10,50,60,20,5] 

let calcularPromedioTemperatura = (...temperaturas) => {

    let temperaturaMaxima=Math.max(...temperaturas)
    let temperaturaMinima=Math.min(...temperaturas)
    let promedio=(temperaturaMaxima+temperaturaMinima)/2;

    return(promedio)

}

console.log(`La temperatura promedio fue de: ${calcularPromedioTemperatura(...temperaturas)} °C`)
