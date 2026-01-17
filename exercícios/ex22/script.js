function contar() {
    const h2 = document.getElementById('tituloContagem')
    h2.textContent = 'Contando de 1 até 10, marcando os pares'

    const p = document.getElementById('contagem')

    for (let i = 1; i < 11; i++) {
        if (i % 2 == 0) {
            const mark = document.createElement('mark')
            mark.textContent = ` ${i} `

            const strong = document.createElement('strong')
            strong.appendChild(mark)

            p.appendChild(strong)
        } else {
            p.append(` ${i} `)
        }

        if (i < 11) {
            p.append('👉')
        }
    }

    p.append(` 🏁`)
}