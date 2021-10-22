const calcularNeto = (salBase, comi, cant) => {
    const neto = (salBase + (comi * cant))
    const bruto = neto - ((neto * 5) / 100)
    return bruto
}

console.log(calcularNeto(3500000,1500000,2))