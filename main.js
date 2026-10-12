const button = document.querySelector('button');
const diceOne = document.querySelector('#dice-one');
const diceTwo = document.querySelector('#dice-two');
const h1 = document.querySelector('h1');
const container = document.querySelector('#container');

const icons = [
    "",
    "fa-solid fa-dice-one",
    "fa-solid fa-dice-two",
    "fa-solid fa-dice-three",
    "fa-solid fa-dice-four",
    "fa-solid fa-dice-five",
    "fa-solid fa-dice-six"
];

const rollDice = () => {
    return Math.floor(Math.random() * 6) + 1;
};

let games = []

const playGame = () => {

    if (games.length < 10) {
        let diceOneResult = rollDice();
        let diceTwoResult = rollDice();

        let result = diceOneResult + diceTwoResult;

        // Dice icons change
        diceOne.className = icons[diceOneResult];
        diceTwo.className = icons[diceTwoResult];

        // Rotate dice
        diceOne.style.transform = "rotate(360deg)";
        diceTwo.style.transform = "rotate(360deg)";

        // Reset rotation
        setTimeout(() => {
            diceOne.style.transform = "rotate(0deg)";
            diceTwo.style.transform = "rotate(0deg)";
        }, 300);

        // Result
        if (result === 2 || result === 4 || result === 12) {
            h1.innerText = "You Won This Chance!";
            games.push("WIN")
        }
        else if (result === 3 || result === 5 || result === 7) {
            h1.innerText = "You Lose The Chance!";
            games.push("LOSE")
        }
        else {
            h1.innerText = "Roll Again!";
        }
    }else{
        let lose = games.filter(game => game === "LOSE").length
        let win = games.filter(game => game === "WIN").length

        if(win > lose){
            h1.innerText = "You Won The Game!"
            container.style.backgroundColor ="green"
        }
        else if (lose > win){
            h1.innerText = "You Lose The Game!"
            container.style.backgroundColor = "red"
        }else{
            h1.innerText ="Tie"
            container.style.backgroundColor = "blue"
        }
    }

    console.log(games);
    

};

button.addEventListener("click", playGame);