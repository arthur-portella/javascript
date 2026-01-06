function criarP(texto) {
    const p = document.createElement('p')
    p.innerText = texto
    return p
}

function converter() {
    const div = window.document.querySelector('#res')
    let distancia = Number(window.prompt('Digite uma distância em metro (m)'))

    div.innerHTML = ''

    const h2 = document.createElement('h2')
    h2.innerText = `A distância de ${distancia} metros, corresponde a...`
    div.appendChild(h2)

    div.appendChild(criarP(`${(distancia / 1000).toFixed(3)} quilômetros (km)`))
    div.appendChild(criarP(`${(distancia / 100).toFixed(3)} hectômetros (hm)`))
    div.appendChild(criarP(`${(distancia / 10).toFixed(3)} decâmetros (dam)`))
    div.appendChild(criarP(`${(distancia * 10).toFixed(3)} decímetros (dm)`))
    div.appendChild(criarP(`${(distancia * 100).toFixed(3)} centímetros (cm)`))
    div.appendChild(criarP(`${(distancia * 1000).toFixed(3)} milímetros (mm)`))
}