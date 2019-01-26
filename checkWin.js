function checkWin(board, player) {
    let plays = board.reduce((a, e, i) => (e === player)) ? a.concat(i) : a, [];
    let gameWon = null;
    for (let [index, win] of winCombos.entries()) {
        if (win.every(elem => plays.indexOf(elem > -1))) {
            gameWon = { index: index, player: player };
            break;
        }
    }
}
