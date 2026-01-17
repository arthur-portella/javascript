function clicar() {
    const h2 = document.createElement('h2')
    h2.textContent = 'Contando de 1 até 10'
    document.body.appendChild(h2)

    const p = document.createElement('p')
    let texto = ''
    for (let i = 1; i < 11; i++) {
        texto += `${i} 👉 `
    }
    texto += `🏁` 
    p.textContent = texto
    document.body.appendChild(p)
}