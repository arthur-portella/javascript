function tabuada() {
    const saida = document.getElementById('saida')
    const  num = Number(document.getElementById('fnum').value)

    saida.innerHTML = ''

    const h2 = document.createElement('h2')
    h2.textContent = `Tabuada de ${num}`
    saida.appendChild(h2)

    const p = document.createElement('p')

    for (let i = 1 ; i < 11; i++){
        const br = document.createElement('br')

        const strong = document.createElement('strong')
        strong.append(num * i)

        p.append(`${num} x ${i} = `, strong, br)
    }

    saida.appendChild(p)
}