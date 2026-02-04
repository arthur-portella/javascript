function contar(){
    let inicio = window.document.querySelector('#inicio')
    let fim = window.document.querySelector('#fim')
    let passo = window.document.querySelector('#passo')
    let resultado = window.document.querySelector('#res')
    let i
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        resultado.innerHTML = 'Impossível contar!'
    }
    else{
        if (Number(passo.value) == 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            passo.value = '1'
        }
        resultado.innerHTML = 'Contando:<br>'
        if(Number(inicio.value) < Number(fim.value)){
            for (i = Number(inicio.value); i <= Number(fim.value) ; i += Number(passo.value)) {
                resultado.innerHTML += ` ${i} \u{1F449}`
            }
        }
        else if(Number(inicio.value) > Number(fim.value)) {
            for (i = Number(inicio.value); i >= Number(fim.value) ; i -= Number(passo.value)) {
                resultado.innerHTML += ` ${i} \u{1F449}`
            }
        }
        resultado.innerHTML += `\u{1F3C1}`
    }
}
