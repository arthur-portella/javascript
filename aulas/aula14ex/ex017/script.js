function gerar() {
    let numero = window.document.querySelector('#numero')
    let tabuada = window.document.querySelector('#seltab')
    if(numero.value.length == 0){
        window.alert('Por favor, digite um número!')
    }
    else {
        let num = Number(numero.value)
        tabuada.innerHTML = ''
        for(let i = 1 ; i <= 10 ; i++){
            let item = document.createElement('option')
            item.text = `${num} x ${i} = ${num*i}`
            tabuada.appendChild(item)
        }
    }
        
}