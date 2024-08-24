let randomNumber = Math.round(Math.random()*100 + 1)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const guessRemaining = document.querySelector('.lastResult')
const hint = document.querySelector('.hint')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('button')

let prevGuess = []
let numGuess = 0

let playGame = true

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess);
        
        validateGuess(guess)
    });
}

function validateGuess(guess){
     if(isNaN(guess)){
        alert('Please enter a valid number')
     } else if(guess<1){
        alert('Please enter a number greater than 0')
    } else if(guess>100){
        alert('Please enter a number less than or equal to 100')
    } else{
        prevGuess.push(guess)
        if(numGuess === 9){
            displayGuess(guess)
            displayMessage(`Game over. The random number was ${randomNumber}.`)
            endGame()
        } else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`You guessed it right!!!`)
        endGame()
    } else if(guess < randomNumber){
        displayMessage(`Your guess is lower`)
    } else{
        displayMessage(`Your guess is higher`)
    }
}

function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess}  `
    numGuess++
    guessRemaining.innerHTML = `${10 - numGuess}`
}

function displayMessage(message){
    hint.innerHTML = `<h3>${message}</h2>`
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = '<div id="newGame">New Game</div>'
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e){
        randomNumber = Math.round(Math.random()*100 + 1)
        prevGuess = []
        numGuess = 0
        guessSlot.innerHTML = ''
        guessRemaining.innerHTML = `${10 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)

        playGame = true
    })
}