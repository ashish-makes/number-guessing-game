function playButton() {
    var userInput = parseInt(document.getElementById("number").value);
    var randomValue = parseInt(Math.random() * 10 + 1);

    if (userInput <=10) {
        document.getElementById("bot_number").value = randomValue;
        if (userInput == randomValue) {
            document.getElementById("result").innerHTML = "👏 Hooray! You won the game!"
            document.body.style.backgroundColor = "#edffed";
        } else {
            document.getElementById("result").innerHTML = "😔 You lose the game, better luch next time."
            document.body.style.backgroundColor = "#ffeded";
        }
    } else {
        document.getElementById("result").innerHTML = "Please enter a valid number between 1 and 10!"
    }
}

function resetButton() {
    var userInput = document.getElementById("number");
    var result = document.getElementById("result");
    userInput.value = "0"

    result.innerHTML = "";
    document.body.style.backgroundColor = "#f3edff";

}