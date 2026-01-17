const saida = window.document.querySelector('section#saida')

function iniciar() {
    let v1 = Number(window.prompt('Primeiro valor:'))
    let v2 = Number(window.prompt('Segundo valor:'))
    let op = Number(window.prompt(`Valores informados: ${v1} e ${v2}\n` + `O que vamos fazer?\n` + `[1]Somar\n` + `[2]Subtrair\n` + `[3]Multiplicar\n` + `[4]Dividir`))

    let simbolo, conta
    switch(op){
        case 1: 
            simbolo = '+'
            conta = v1 + v2
            break
        case 2:
            simbolo = '-'
            conta = v1 - v2
            break
        case 3: 
            simbolo = 'x'
            conta = v1 * v2
            break
        case 4:
            simbolo = '/'
            conta = v1 / v2
            break
    }

    saida.innerHTML = ''

    const h2 = document.createElement('h2')
    h2.innerText = 'Calculando...'
    saida.appendChild(h2)

    saida.innerHTML += `<p>${v1} ${simbolo} ${v2} = <strong>${conta}</strong></p>`
}