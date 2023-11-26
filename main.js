import * as luckyMessages from './luckyMessages.js'

let luckyBiscuit = document.querySelector('#luckyBiscuit')
let screen1 = document.querySelector('.screen1')
let screen2 = document.querySelector('.screen2')
let getNewLuck = document.querySelector('#openNewBiscuit')

function randomNumber() {
    return Math.round(Math.random() * 10) + 1
}

function openBiscuit() {
    luckyBiscuit.classList.toggle('vibrate')
}

function showLuckyScreen() {
    setTimeout(() => {
        screen1.classList.toggle('hide')
        screen2.classList.toggle('hide')
    }, 1500)
}

function showLuckyMessage() {
    document.querySelector('.luckyMessage').innerHTML = luckyMessages.luckyMessages[randomNumber()]
}

function openNewBiscuit() {
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
}

luckyBiscuit.addEventListener('click', () => {
    openBiscuit()
    showLuckyScreen()
    showLuckyMessage()
})

window.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        openBiscuit()
        showLuckyScreen()
        showLuckyMessage()
    }
})

getNewLuck.addEventListener('click', (e) => {
    e.preventDefault()
    openNewBiscuit()
    openBiscuit()
})