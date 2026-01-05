function comprar() {
    let produto = window.prompt('Que produto você está comprando?')
    let preco = Number(window.prompt(`Quanto custa ${produto} que você está comprando?`))
    let pago = Number(window.prompt(`Qual foi o valor que você deu para pagar ${produto}?`))
    window.alert(`Você comprou ${produto} que custou R$ ${preco.toFixed(2).replace('.', ',')}.\nDeu R$ ${pago.toFixed(2).replace('.', ',')} em dinheiro e vai receber R$ ${(pago - preco).toFixed(2).replace('.', ',')} de troco.\nVolte Sempre!`)
}