//Stats\\
let player_wins = 0;
let computer_wins = 0;
let ties = 0;

function update_stats() {
    document.getElementById('player-wins').innerText = player_wins;
    document.getElementById('computer-wins').innerText = computer_wins;
    document.getElementById('ties').innerText = ties;
}

update_stats();

//Frequently used document selectors\\
let player_choice = document.getElementById('player-choice')
let result_textbox = document.getElementById('result-textbox')
let computer_choice = document.getElementById('computer-choice')

/*
The player choice is stores at outcomes[0]. The computer choice is stored at outcomes[1].
If they match, it is a tie and returns a 3.
If it includes two different ones, it returns the index of whatever would win.
*/
function create_outcome(choice) {
    let computer = Math.floor(Math.random() * 3);
    let outcomes = [choice];

    if (computer == 0) {
        computer_choice.innerText = 'Rock';
        outcomes[1] = 'rock';
    } else if (computer == 1) {
        computer_choice.innerText = 'Paper';
        outcomes[1] = 'paper';
    } else if (computer == 2) {
        computer_choice.innerText = 'Scissors';
        outcomes[1] = 'scissors';
    }

    if (outcomes[0] == outcomes[1]) {
        return 2;
    } 
    else if (outcomes.includes('rock') && outcomes.includes('paper')) {
        return outcomes.indexOf('paper');
    } 
    else if (outcomes.includes('rock') && outcomes.includes('scissors')) {
        return outcomes.indexOf('rock');
    }
    else if (outcomes.includes('paper') && outcomes.includes('scissors')) {
        return outcomes.indexOf('scissors');
    }
}

/*
The index given is the index of the winner. 0 for player, 1 for pc, 2 for tie.
It updates stats and the victory screen accordingly.
*/
function determine_win(outcome) {
    if (outcome == 0) {
        player_wins += 1;
        result_textbox.innerText = 'You win!';
    } else if (outcome == 1) {
        computer_wins += 1;
        result_textbox.innerText = 'You lose!';
    } else if (outcome == 2) {
        ties += 1;
        result_textbox.innerHTML = "It's a tie!";
    }
}

//Used to get all the buttons in one go\\
let player_buttons = document.getElementsByClassName('player-choices');


for (let i = 0; i < player_buttons.length; i++) {
    player_buttons[i].addEventListener('click', function(event) {
        player_choice.innerText = event.target.innerText;
        let outcome = create_outcome(event.target.innerText.toLowerCase());
        determine_win(outcome);
        update_stats();
    }
)};