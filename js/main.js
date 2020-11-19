
const celeste = document.getElementById('celeste')
const violet = document.getElementById('violet')
const orange = document.getElementById('orange')
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
        this.nextLevel()
    }

    starting() {
        this.chooseColor = this.chooseColor.bind(this)
        btnStart.classList.add('hide')
        this.level = 7
        this.colors = {
            celeste,
            violet,
            orange,
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

    nextLevel(){
        this.lightSequence()
        this.addClickEvent()
    }

    switchNumberToColor(number){
        switch(number){
            case 0:
                return 'celeste'
            case 1:
                return 'violet'
            case 2:
                return 'orange'
            case 3:
                return 'green'
            case 4:
                return 'yellow'
            case 5:
                return 'blue'
            case 6:
                return 'red'
            case 7:
                return 'grey'
            case 8:
                return 'salmon'
            case 9:
                return 'pink'
            case 10:
                return 'burlywood'
            case 11:
                return 'gold'
        }
    }

    lightSequence(){
        for (let i = 0; i < this.level; i++) {
            const color = this.switchNumberToColor(this.sequence[i])
            setTimeout(() => this.turnOnColor(color), 1000 * i)
        }
    }

    turnOnColor(color){
        this.colors[color].classList.add('light')
        setTimeout(() => this.turnOffColor(color), 350)
    }

    turnOffColor(color){
        this.colors[color].classList.remove('light')
    }

    addClickEvent(){
        this.colors.celeste.addEventListener('click', this.chooseColor)
        this.colors.violet.addEventListener('click', this.chooseColor)
        this.colors.orange.addEventListener('click', this.chooseColor)
        this.colors.green.addEventListener('click', this.chooseColor)
        this.colors.yellow.addEventListener('click', this.chooseColor)
        this.colors.blue.addEventListener('click', this.chooseColor)
        this.colors.red.addEventListener('click', this.chooseColor)
        this.colors.grey.addEventListener('click', this.chooseColor)
        this.colors.salmon.addEventListener('click', this.chooseColor)
        this.colors.pink.addEventListener('click', this.chooseColor)
        this.colors.burlywood.addEventListener('click', this.chooseColor)
        this.colors.gold.addEventListener('click', this.chooseColor)
    }

    chooseColor(e){
        console.log(this)
    }

}

function startTheGame(){
    window.game = new Game()
}