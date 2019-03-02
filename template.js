function solve() {
    
    const gameScore = document.querySelector(".game-score"); 
    const gameStart = document.querySelector(".game-start");
    const gameArea = document.querySelector(".game-area");
    const gameOver = document.querySelector(".game-over");
    
    gameStart.addEventListener('click', onGameStart);

    function onGameStart() {
        gameStart.classList.add('hide');
    }
}