function contagem() {
    let num = Number(document.getElementById('fnum').value)

    const h2 = document.createElement('h2')
    h2.textContent = `Contando de 0 até ${num}`
    document.body.appendChild(h2)

    const p = document.createElement('p')

    texto = ''
    for (let i = 0; i <= num; i++) {
        texto += `${i} 👉 `
    }
    texto += '🏁'

    p.textContent = texto
    document.body.appendChild(p)
}