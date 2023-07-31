// Javascript Part

let randomNum = 0;
let score = 10;
let highscore = 0;
let inputUser = 0;
let hints = 2;
let lo = 0;
let hi = 0;


// get random number to be guessed
function setRanNum(min, max) {
    randomNum = Math.floor(Math.random()*(max-min)+min);
    console.log(`the mystery number is ${randomNum}`);
}
// get random low end for hint
function setRanLo(min, max) {
    lo = Math.floor(Math.random()*(max-min)+min);
    // console.log(`the low number is ${lo}`);
    if (randomNum - lo < 0){
        lo = 0;
        console.log(`the low number is ${lo}`);
        return;
    }
    lo = randomNum - lo;
    console.log(`the low number is ${lo}`);
    return;
}
// get random hi end for hint
function setRanHi(min, max) {
    hi = Math.floor(Math.random()*(max-min)+min);
    // console.log(`the high number is ${hi}`);
    if (randomNum + hi > 100){
        hi = 100;
        console.log(`the high number is ${hi}`);
        return;
    }
    hi = randomNum + hi;
    console.log(`the high number is ${hi}`);
    return;
}


// change html text
function changeMsg(id, string){
    // const curGuess = string;
    // console.log(curGuess);
    document.getElementById(id).textContent = string;
}


// disable html
function toggleButton(id, bool){
    document.getElementById(id).disabled = bool;
    return;
}


// add guess to list in order to keep track of guesses
function addGuess(guess, temp){
    changeMsg(`guess${11-score}`, guess.toString());
    if (temp == 'hot'){
        document.getElementById(`guess${11-score}box`).style.backgroundColor = "rgb(232, 138, 138)"; // change background to temp color
        document.getElementById(`guess${11-score}`).style.color = "rgb(71, 0, 0)"; // match text color
        return;
    }
    else if (temp == 'warm'){
        document.getElementById(`guess${11-score}box`).style.backgroundColor = "rgb(255, 184, 85)"; // change background to temp color
        document.getElementById(`guess${11-score}`).style.color = "rgb(100, 58, 0)"; // match text color
        return;
    }
    document.getElementById(`guess${11-score}box`).style.backgroundColor = "rgb(0, 68, 99)"; // change background to temp color
    document.getElementById(`guess${11-score}`).style.color = "rgb(127, 215, 255)"; // match text color
    return;
}

// check guess against correct number
function isGuessCorrect(curGuess) {
    if (curGuess == randomNum) {
        changeMsg(
            'guessText',
            'Winner!!'
            );
        alert('winner winner chicken dinner!');
        if (score > highscore){
            highscore = score;
        }
        return;
    }


    else if (curGuess > randomNum){
        if (curGuess-randomNum<=5){
        // alert('too low');
            changeMsg(
                'guessText',
                'hot!'
            );
            addGuess(curGuess, 'hot');
            score--;
            document.getElementById('guessesLeft').textContent = `${score} Guesses Remaining`;
            return;
        }
        else if (curGuess-randomNum<=15){
            // alert('too low');
                changeMsg(
                    'guessText',
                    'warm'
                );
                addGuess(curGuess, 'warm');
                score--;
                document.getElementById('guessesLeft').textContent = `${score} Guesses Remaining`;
                return;
            }
        changeMsg(
            'guessText',
            'COLD'
        );
        addGuess(curGuess, 'COLD');
        score--;
        document.getElementById('guessesLeft').textContent = `${score} Guesses Remaining`;
        return;
    }


    else if(randomNum>curGuess) {
        if (randomNum-curGuess<=5){
        // alert('too low');
            changeMsg(
                'guessText',
                'hot!'
            );
            addGuess(curGuess, 'hot');
            score--;
            document.getElementById('guessesLeft').textContent = `${score} Guesses Remaining`;
            return;
        }
        else if (randomNum-curGuess<=15){
            changeMsg(
                'guessText',
                'warm'
            );
            addGuess(curGuess, 'warm');
            score--;
            document.getElementById('guessesLeft').textContent = `${score} Guesses Remaining`;
            return;
        }
        // alert('too high');
        changeMsg(
            'guessText',
            'COLD'
        );
        addGuess(curGuess, 'COLD');
        score--;
        document.getElementById('guessesLeft').textContent = `${score} Guesses Remaining`;
    }
    return;
}


// lo < x < hi / setup
setRanNum(1,100);
setRanLo(1,randomNum);
setRanHi(randomNum,100);

// hint button setup
document.getElementById('hintBtn').addEventListener('click', function () {
    if (hints == 0){
        alert('no hints left');
        toggleButton('hintBtn', true);
        return;
    }
    if (hints == 2){
        changeMsg(
            'hintText',
            `${lo} < x`
        );
        hints--;
        return;
    }
    changeMsg(
        'hintText',
        `${lo} < x < ${hi}`
    );
    hints--;
    return;
});

// submit button setup
document.getElementById('submitBtn').addEventListener('click', function () {
    // alert('working function');
    while (score > 1){
        // score--;
        isGuessCorrect(document.getElementById('userGuess').value);
        return;
    }
    isGuessCorrect(document.getElementById('userGuess').value);
    toggleButton('hintBtn', true);
    toggleButton('submitBtn', true);
    changeMsg('guessesLeft', '0 Guesses Remaining');
    // document.getElementById('guessesLeft').textContent = `${0} Guesses Remaining`;
    changeMsg('guessText', 'LOSE!');
});

// reset button setup
document.getElementById('resetBtn').addEventListener('click', function (){
    alert('restaring game!');
    console.log('new game')
// reactivate buttons
    toggleButton('hintBtn', false);
    toggleButton('submitBtn', false);
// reset score
    score = 10;
// reset remaining guesses, user guess input, and guess feedback
    changeMsg('guessesLeft', '10 Guesses Remaining');
    changeMsg('userGuess', '');
    changeMsg('guessText', `game reset`);
// get new numbers
    setRanNum(1,100);
    setRanLo(1,randomNum);
    setRanHi(randomNum,100);
// reset guesses table
let i=1;
    while (i <= score){
        changeMsg(`guess${i}`, ``);
        document.getElementById(`guess${i}box`).style.backgroundColor = "";
        i++;
    }
// reset hint text
    changeMsg('hintText', '');
// reset user input
    changeMsg('userGuess', '');


});