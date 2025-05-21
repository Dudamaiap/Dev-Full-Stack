const prompt = require('prompt-sync')()

let celsius = Number(prompt('Informe qual é a temperatura em Graus Celsius: '))

let farenheit = (9 / 5 * celsius) + 32

console.log(`${celsius}°C em Farenheit é ${farenheit}°F`)
