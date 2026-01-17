function fatorial() {
    const num = Number(document.getElementById('fnum').value)

    const h2 = document.createElement('h2')
    h2.textContent = `Calculando ${num}!`
    document.body.appendChild(h2)

    const p = document.createElement('p')

    let fatorial = 1
    for (let i = num; i >= 1; i--) {
        p.append(`${i} `)
        if (i == 1){
            p.append('= ')
        } else {
            p.append('x ')
        }
        fatorial *= i
    }

    const strong = document.createElement('strong')
    strong.textContent = fatorial.toLocaleString('pt-BR')
    p.appendChild(strong)

    document.body.appendChild(p)
}