function contagem() {
    const n1 = Number(document.getElementById('fnum1').value)
    const n2 = Number(document.getElementById('fnum2').value)

    const h2 = document.createElement('h2')
    h2.textContent = `Contando de ${n1} até ${n2}`
    document.body.appendChild(h2)

    const p = document.createElement('p')

    let texto = ''

    if (n1 < n2) {
        for (let i = n1; i <= n2; i++) { 
            texto += `${i} 👉 `
        }
        texto += '🏁'
        p.textContent = texto
        document.body.appendChild(p)
    } else if (n1 > n2) {
        for (let i = n2; i >= n1; i--) { 
            texto += `${i} 👉 `
        }
        texto += '🏁'
        p.textContent = texto
        document.body.appendChild(p)
    } else {
        p.textContent = 'Não é possível contar, pois os números são iguais!'
        document.body.appendChild(p)
    }

    

}