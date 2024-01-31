function findWinner(blockNumber, playerTurn) {
    // player blocks done
    let player_arr;
    if (playerTurn === 0) {
        player_arr = blocks_done.red;
    }
    else {
        player_arr = blocks_done.green;
    }


    let row = Math.floor(blockNumber / 3);
    let col = blockNumber % 3;

    // winset array 
    let array = winSets[row][col];

    for (let arr = 0; arr < array.length; arr++) {
        let inner_arr = array[arr];
        let count = 0;
        for (let j = 0; j < inner_arr.length; j++){
            if (player_arr.includes(inner_arr[j])) {
                count++;
            }
        }
        if (count === inner_arr.length) {
            return true;
        }
    }
    return false;
}

// win logic sets
let winSets = {
    0: {
        0: [[0,1,2],[0,3,6],[0,4,8]],
        1: [[0,1,2],[1,4,7]],
        2: [[0,1,2],[2,5,8],[2,4,6]],
    },
    1: {
        0: [[3,4,5],[0,3,6]],
        1: [[3,4,5],[1,4,7],[0,4,8],[2,4,6]],
        2: [[3,4,5],[2,5,8]],
    },
    2: {
        0: [[6,7,8],[0,3,6],[2,4,6]],
        1: [[6,7,8],[1,4,7]],
        2: [[6,7,8],[2,5,8],[0,4,8]],
    },
};

// colors
let colors = {
    red: 'rgb(243, 107, 107)',
    green: 'rgb(128, 238, 12)',
}

// 0 ? player1 : player2
let playerTurn = 0;

// winner declared / not
let gameResult = false;

// global array to store colored blocks
let blocks_done = {
    red: [],
    green: [],
}

let turn_text = document.getElementById('turn_text');
let winner_text = document.getElementById('winner_text');
let grid = document.getElementById('grid');
let blocks = grid.children;

// logic of game
for (let i = 0; i < 9; i++) {
    let block = blocks[i];
    block.addEventListener('click', function (e) { 
        let resultOnCurrentTurn = false;
        if (playerTurn === 0) {
            // player 1 turn -> red
            block.style.backgroundColor = colors.red;
            turn_text.innerHTML = 'Player 2 Turn';
            playerTurn = 1 - playerTurn;
            turn_text.style.color = colors.green;
            blocks_done.red.push(i);
        }
        else {
            // player 2 turn -> green
            block.style.backgroundColor = colors.green;
            turn_text.innerHTML = 'Player 1 Turn';
            playerTurn = 1 - playerTurn;
            turn_text.style.color = colors.red;
            blocks_done.green.push(i);
        }
        if (findWinner(i, 1 - playerTurn)) {
            resultOnCurrentTurn = true; 
        }
        if (!gameResult && resultOnCurrentTurn) {
            gameResult = true;
            if (playerTurn == 0) {
                winner_text.innerHTML = `Player 2 is the winner!`;
            }
            else {
                winner_text.innerHTML = `Player 1 is the winner!`;
            }
            winner_text.style.color = 'gold';
        }
    }, { once: true });
}
