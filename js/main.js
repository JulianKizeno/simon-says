
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

const lastLevel = 15

Swal.fire({
    title: 'Simon Says',
    text: "This game consists of clicking on the sequence of colors that light up each time. You have 15 levels to finish. Let's see how much retention you have. Can you make it?",
    confirmButtonText: 'GO!!',
    confirmButtonColor: '#5ea9e4',
    allowOutsideClick: false,
    allowEscapeKey: false,
    allowEnterKey: false
})

class Game {
    constructor() {
        this.starting = this.starting.bind(this)
        this.starting()
        this.generateSequence()
        setTimeout(this.nextLevel, 300)
    }

    starting() {
        this.nextLevel = this.nextLevel.bind(this)
        this.chooseColor = this.chooseColor.bind(this)
        this.toggleBtnStart()
        this.level = 1
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

    toggleBtnStart(){
        btnStart.classList.contains('hide')
        ?
        btnStart.classList.remove('hide')
        :
        btnStart.classList.add('hide')
    }

    generateSequence(){
        this.sequence = new Array(lastLevel).fill(0).map(n => Math.floor(Math.random() * 11))
    }

    nextLevel(){
        this.subLevel = 0
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

    switchColorToNumber(color){
        switch(color){
            case 'celeste':
                return 0
            case 'violet':
                return 1
            case 'orange':
                return 2
            case 'green':
                return 3
            case 'yellow':
                return 4
            case 'blue':
                return 5
            case 'red':
                return 6
            case 'grey':
                return 7
            case 'salmon':
                return 8
            case 'pink':
                return 9
            case 'burlywood':
                return 10
            case 'gold':
                return 11
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

    removeClickEvent(){
        this.colors.celeste.removeEventListener('click', this.chooseColor)
        this.colors.violet.removeEventListener('click', this.chooseColor)
        this.colors.orange.removeEventListener('click', this.chooseColor)
        this.colors.green.removeEventListener('click', this.chooseColor)
        this.colors.yellow.removeEventListener('click', this.chooseColor)
        this.colors.blue.removeEventListener('click', this.chooseColor)
        this.colors.red.removeEventListener('click', this.chooseColor)
        this.colors.grey.removeEventListener('click', this.chooseColor)
        this.colors.salmon.removeEventListener('click', this.chooseColor)
        this.colors.pink.removeEventListener('click', this.chooseColor)
        this.colors.burlywood.removeEventListener('click', this.chooseColor)
        this.colors.gold.removeEventListener('click', this.chooseColor)
    }

    chooseColor(e){
        const colorName = e.target.dataset.color
        const colorNumber = this.switchColorToNumber(colorName)
        this.turnOnColor(colorName)
        if(colorNumber === this.sequence[this.subLevel]){
            this.subLevel++
            if(this.subLevel === this.level){
                this.level++
                this.removeClickEvent()
                if(this.level === (lastLevel + 1)){
                    this.youWinTheGame()
                }else{
                    setTimeout(this.nextLevel, 1000)
                }

            }
        }else{
            this.youLoseTheGame()
        }
    }

    youWinTheGame(){
        Swal.fire({
            icon: 'success',
            title: 'Simon says...',
            text: 'We have a Winner!!',
            confirmButtonText: 'Try again ',
            confirmButtonColor: '#5ea9e4'
        }) 
        .then(this.starting)
    }

    youLoseTheGame(){
        Swal.fire({
            icon: 'error',
            title: 'Simon says...',
            text: 'Looooseeeerr!!!',
            confirmButtonText: 'Try again ',
            confirmButtonColor: '#5ea9e4'
        })
        .then(() => {
            this.removeClickEvent()
            this.starting()
        })
    }

}

function startTheGame(){
    window.game = new Game()
}