function contar() {
    const h2 = document.getElementById('tituloContagem')
    h2.textContent = 'Números pares de 1 até 10'

    const p = document.getElementById('contagem')

    texto = ''

    for (let i = 2; i < 11; i+=2) {
        texto += `${i} 👉 `
    }
    texto += '🏁'

    p.textContent = texto

}