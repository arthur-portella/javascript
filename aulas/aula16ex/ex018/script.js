let vetor = []
let res = window.document.querySelector('div#res')

function adicionar() {
    let numtxt = window.document.querySelector('#numero')
    let num = Number(numtxt.value)
    numtxt.value = ``
    numtxt.focus()
    if ((num < 1 || num > 100) || (vetor.indexOf(num) != -1)) {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    else {
        res.innerHTML = ''
        let tabela = window.document.querySelector('#valores')
        vetor.push(num)
        let item = window.document.createElement('option')
        item.text = `Valor ${num} adicionado`
        tabela.appendChild(item)
    }
}

function finalizar() {
    if(valores.length == 0){
        window.alert('Adicione valores antes de finalizar!')
    }
    else {
        let soma = 0
        let maior = vetor[0]
        let menor = vetor[0]
        for (let i in vetor){
            if (vetor[i] > maior)
                maior = vetor[i]
            if (vetor[i] < menor)
                menor = vetor[i]
            soma += vetor[i]
        }
        res.innerHTML = 
        `<p>Ao todos, temos ${vetor.length} números cadastrados</p>
        <p>O maior valor informado foi ${maior}</p>
        <p>O menor valor informado foi ${menor}</p>
        <p>Somando todos os valores, temos ${soma}</p>
        <p>A média dos valores digitados é ${soma/vetor.length}</p>`
    }
}