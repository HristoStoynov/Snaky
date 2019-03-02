function solve() {
    
    const gameScore = document.querySelector(".game-score"); 
    const gameStart = document.querySelector(".game-start");
    const gameArea = document.querySelector(".game-area");
    const gameOver = document.querySelector(".game-over");
    
    gameStart.addEventListener('click', onGameStart);
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('keyup', onKeyUp);

    let keys = {};
    let player = {
        x: 200,
        y: 200
    }
    let game = {
        speed: 2,
        movingMultiplier: 4
    };

    function onGameStart() {
        gameStart.classList.add('hide');
        const snake = document.createElement("div");
        snake.style.top="200px";
        snake.style.left="200px";
        snake.classList.add("snake");
        gameArea.appendChild(snake);

        window.requestAnimationFrame(gameAction);
    }

    function gameAction() {
        const snake = document.querySelector(".snake"); 

        if (keys.ArrowUp && player.y - 35 > 0) {
            player.y -= game.speed * game.movingMultiplier;
        } 

        if (keys.ArrowDown && player.y + snake.offsetHeight - 25 < gameArea.offsetHeight) {
            player.y += game.speed * game.movingMultiplier;
        }

        if (keys.ArrowLeft && player.x - 10 > 0) {
            player.x -= game.speed * game.movingMultiplier;
        }

        if (keys.ArrowRight && player.x + snake.offsetWidth + 5 < gameArea.offsetWidth) {
            player.x += game.speed * game.movingMultiplier;
        }

        snake.style.top = player.y + "px";
        snake.style.left = player.x + "px"; 

        window.requestAnimationFrame(gameAction);
    }

    function onKeyDown(e) {
        keys[e.code] = true;
    }

    function onKeyUp(e) {
        keys[e.code] = false;
    }
}