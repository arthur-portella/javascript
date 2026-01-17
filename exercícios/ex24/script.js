function contar() {
    const h2 = document.createElement('h2')
    h2.textContent = 'Contagem Regressiva de 10 a 1'
    document.body.appendChild(h2)

    const p = document.createElement('p')
    
    texto = ``
    for (let i = 10; i > 0; i--){
        texto += `${i} 👉 `
    }
    texto += ' 🏁'

    p.textContent = texto
    document.body.appendChild(p)
}