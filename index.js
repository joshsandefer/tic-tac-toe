const game = (() => {
    let board = ['', '', '', '', '', '', '', '', ''];
    const gameBoard = document.querySelector(['#container']);
    const winnerBox = document.querySelector(['#declare-winner']);    
    const newGameButton = document.querySelector(['#new-game-button']);

    const initiateGame = () => {
        winnerBox.innerHTML = '';
        //create the board
        board.forEach(render);

        //add the event listener
        gameBoard.addEventListener('click', (e) => {
            if (e.target.innerHTML == '') {
                takeTurns(e);
            }
            
        });

        //create players
        let x = playerFactory('X');
        let y = playerFactory('O');
        
        //make moves
        let i = 1;
        const takeTurns = (e) => {
            if (i % 2 == 0) {
                y.playerMove(e);
            } else {
                x.playerMove(e);
            };
            i++;
            checkWinStatus(board);
        };
    };

    const playerFactory = (name) => {
        const playerName = name;
        const getName = () => playerName;
        const playerMove = (e) => {
                e.target.innerHTML = name;
                board[e.target.id] = name;
        };
        return {getName, playerMove};

    }
    
    const render = (currentValue, index) => {
        let square = gameBoard.appendChild(document.createElement('div'));
        square.className = 'square';
        let fill = square.appendChild(document.createElement('p'));
        fill.id = index;
    };

    const checkWinStatus = (array) => {
        if (array[0] == array[1] && array[1] == array[2]) {
            declareWinner(array[0]);
        } else if (array[3] == array[4] && array[4] == array[5]) {

        } else if (array[6] == array[7] && array[7] == array[9]) {

        } else if (array[3] == array[4] && array[4] == array[5]) {

        } else if (array[3] == array[4] && array[4] == array[5]) {

        } else if (array[3] == array[4] && array[4] == array[5]) {

        } else if (array[3] == array[4] && array[4] == array[5]) {

        } else if (array[3] == array[4] && array[4] == array[5]) {

        }
        console.log('checked win status');
        
    };

    const declareWinner = (array) => {        
        winnerBox.innerHTML = array + ' is the winner!';
    }

    newGameButton.addEventListener('click', () => {
        gameBoard.innerHTML = '';
        initiateGame();
    })

    return {initiateGame};
})();

game.initiateGame();