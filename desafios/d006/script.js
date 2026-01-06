function criarP(texto) {
    const p = document.createElement('p')
    p.innerText = texto
    return p
}

function converter() {
    const div = window.document.querySelector('#res')
    let temp = Number(window.prompt('Digite uma temperatura em °C (Celsius)'))

    div.innerHTML = ''

    const h2 = document.createElement('h2')
    h2.innerText = `A temperatura de ${temp}°C, corresponde a...`
    div.appendChild(h2)

    div.appendChild(criarP(`${(temp + 273.15).toFixed(2)}K (Kelvin)`))
    div.appendChild(criarP(`${((temp * 1.8) + 32).toFixed(2)}°F (Fahrenheit)`))
}