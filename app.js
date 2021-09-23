//Define the score
let score = document.querySelector('.score')

//Define the score to display it on screen
let displayScore = document.getElementById('scoreNum')

//Define the catsPerSecond to display on screen
let catsPerSecond = document.getElementById('catsPerSecond')

//Define the button
let clickBtn = document.querySelector('.clickerBtn')

//Define upgrade buttons
let upgradeOneBtn = document.querySelector('.upgradeOne')
let upgradeTwoBtn = document.querySelector('.upgradeTwo')
let upgradeThreeBtn = document.querySelector('.upgradeThree')
let upgradeFourBtn = document.querySelector('.upgradeFour')

//Function that increments displayScore on click
clickBtn.onclick = function() {
    // displayScore.innerHTML++
    displayScore.innerHTML = (displayScore.innerHTML % 10000000000000000000000000000000000 + 1).toFixed(2)
}

//Displays our current score
displayScore.innerHTML = 0

// Function that increments every second
const incrementScore = () => {
    displayScore.innerHTML = (displayScore.innerHTML % 10000000000000000000000000000000000 + 1).toFixed(2)
}

//Set an interval speed
let intervalSpeed = 1000

//Starts the counter that increments the score
let interval = setInterval(incrementScore,intervalSpeed)

//Displays our current score per second
// catsPerSecond.innerHTML = displayScore.innerHTML

//Create a function so stop the interval then start it again on the click of an upgrade
const stopAndStartIntervalCounter = () => {
    clearInterval(interval)
    interval = setInterval(incrementScore,intervalSpeed)
    // catsPerSecond.innerHTML = interval
}

//Create a variable that calculates the percentage of the upgrades and then adds it on top of it's base value
let upgradePercentageIncrease = 8 

//Create a class that contains all the data about upgrades
class Upgrades {
    constructor(name,description,scoreMultiplier,cost) {
        this.name = name
        this.description = description
        this.scoreMultiplier = scoreMultiplier
        this.cost = cost
    }
    manageBtns() {
        console.log(this.name)
        console.log(this.scoreMultiplier)
        console.log(this.cost)
        if (displayScore.innerHTML >= this.cost){

            intervalSpeed = intervalSpeed - this.scoreMultiplier
            stopAndStartIntervalCounter()
            displayScore.innerHTML = displayScore.innerHTML - this.cost
            this.cost = this.cost + (this.cost/100).toFixed(2) * upgradePercentageIncrease
            console.log(this.cost)
        }

    }
    
}

//Create upgrades
let upgradeOne = new Upgrades('Cat Treat', 'This magical cat treat makes Cat happy. It increases your cat\'s per second by ' ,15, 50)
upgradeOneBtn.innerHTML = upgradeOne.name + ': ' + upgradeOne.cost + '$'
document.querySelector('.upgradeOne').title = upgradeOne.description
// upgradeOne.manageBtns()

let upgradeTwo = new Upgrades('Mouse Plushie', 'A plushie that greatly increases the cat\'s happiness by ' , 30, 100)
upgradeTwoBtn.innerHTML = upgradeTwo.name + ': ' + upgradeTwo.cost + '$'
document.querySelector('.upgradeTwo').title = upgradeTwo.description
// upgradeTwo.manageBtns()

let upgradeThree = new Upgrades('Magnificent Milk','Milk makes the cat enter a Hyper active frenzy. Be careful to monitor the intake ! Increases the cat\'s happiness by ' ,50, 150)
upgradeThreeBtn.innerHTML = upgradeThree.name + ': ' + upgradeThree.cost + '$'
document.querySelector('.upgradeThree').title = upgradeThree.description
// upgradeThree.manageBtns()

let upgradeFour = new Upgrades('Box Bed', 'The cat loves the box bed. It calms the cat down and bring it extreme happiness. Increases the cat\'s happines by ' ,75, 300)
upgradeFourBtn.innerHTML = upgradeFour.name + ': ' + upgradeFour.cost + '$'
document.querySelector('.upgradeFour').title = upgradeFour.description
// upgradeFour.manageBtns()


//Create functions to run the object method depending on which button is clicked
const applyUpgradeOne = () => {
    upgradeOne.manageBtns()
    upgradeOneBtn.innerHTML = upgradeOne.name + ': ' + upgradeOne.cost + '$'
}

const applyUpgradeTwo = () => {
    upgradeTwo.manageBtns()
    upgradeTwoBtn.innerHTML = upgradeTwo.name + ': ' + upgradeTwo.cost + '$'
}

const applyUpgradeThree = () => {
    upgradeThree.manageBtns()
    upgradeThreeBtn.innerHTML = upgradeThree.name + ': ' + upgradeThree.cost + '$'
}

const applyUpgradeFour = () => {
    upgradeFour.manageBtns()
    upgradeFourBtn.innerHTML = upgradeFour.name + ': ' + upgradeFour.cost + '$'
}