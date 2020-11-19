
const celeste = document.getElementById('celeste')
const violet = document.getElementById('violet')
const oranje = document.getElementById('oranje')
const green = document.getElementById('green')
const yellow = document.getElementById('yellow')
const blue = document.getElementById('blue')
const red = document.getElementById('red')
const grey = document.getElementById('grey')
const salmon = document.getElementById('salmon')
const pink = document.getElementById('pink')
const burlywood = document.getElementById('burlywood')
const gold = document.getElementById('gold')

const btnStart = document.getElementById('btnStart')

class Game {
    constructor() {
        this.starting()
        this.generateSequence()
    }

    starting() {
        btnStart.classList.add('hide')
        this.level = 1
        this.colors = {
            celeste,
            violet,
            oranje,
            green,
            yellow,
            blue,
            red,
            grey,
            salmon,
            pink,
            burlywood,
            gold
        }
    }

    generateSequence(){
        this.sequence = new Array(10).fill(0).map(n => Math.floor(Math.random() * 11))
    }

}

function startTheGame(){
    window.game = new Game()
}