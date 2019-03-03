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

    let score = 0;
    let add = 0;

    let top = Math.floor((Math.random() * gameArea.offsetHeight) + 1);
    let left = Math.floor((Math.random() * gameArea.offsetWidth) + 1);

    function onGameStart() {
        gameStart.classList.add('hide');

        const snake = document.createElement("div");
        const apple = document.createElement("div");

        apple.style.top = top + "px";
        apple.style.left = left + "px";

        snake.style.top ="200px";
        snake.style.left = "300px";

        snake.classList.add("snake");
        apple.classList.add("apple");

        gameArea.appendChild(snake);
        gameArea.appendChild(apple);

        window.requestAnimationFrame(gameAction);
    }

    function gameAction() {
        const snake = document.querySelector(".snake"); 
        const apple = document.querySelector(".apple"); 
        const scoreBoard = document.querySelector(".game-score"); 

        if (keys.ArrowUp && player.y - 35 > 0) {
            player.y -= game.speed * game.movingMultiplier;
            snake.style.backgroundImage = "url('Images/SnakeHeadUp.png')";
            score = score + 1;
            if (score % 15 === 0) {
                add = add + 1; 
                let scoreNum = add;
                scoreBoard.innerHTML = scoreNum;
            }
        } 

        if (keys.ArrowDown && player.y + snake.offsetHeight - 25 < gameArea.offsetHeight) {
            player.y += game.speed * game.movingMultiplier;
            snake.style.backgroundImage = "url('Images/SnakeHeadDown.png')";
            score = score + 1;
            if (score % 15 === 0) {
                add = add + 1; 
                let scoreNum = add;
                scoreBoard.innerHTML = scoreNum;
            }
        }

        if (keys.ArrowLeft && player.x - 10 > 0) {
            player.x -= game.speed * game.movingMultiplier;
            snake.style.backgroundImage = "url('Images/SnakeHeadLeft.png')";
            score = score + 1;
            if (score % 15 === 0) {
                add = add + 1; 
                let scoreNum = add;
                scoreBoard.innerHTML = scoreNum;
            }
        }

        if (keys.ArrowRight && player.x + snake.offsetWidth + 5 < gameArea.offsetWidth) {
            player.x += game.speed * game.movingMultiplier;
            snake.style.backgroundImage = "url('Images/SnakeHeadRight.png')";
            score = score + 1;
            if (score % 15 === 0) {
                add = add + 1; 
                let scoreNum = add;
                scoreBoard.innerHTML = scoreNum;
            }
        }

        snake.style.top = player.y + "px";
        snake.style.left = player.x + "px"; 

        let topApple = apple.style.top;
        let topSnake = snake.style.top;
        let leftApple = apple.style.left;
        let leftSnake = snake.style.left;

        let topAppleNumber = "";
        let topSnakeNumber = "";
        let leftAppleNumber = "";
        let leftSnakeNumber = "";

        for (i = 0; i < topApple.length; i++) {
            let currChar = topApple[i];
            if (currChar !== "p") {
                topAppleNumber += currChar;
            } else {
                break;
            }
        }

        for (i = 0; i < topSnake.length; i++) {
            let currChar = topSnake[i];
            if (currChar !== "p") {
                topSnakeNumber += currChar;
            } else {
                break;
            }
        }

        for (i = 0; i < leftApple.length; i++) {
            let currChar = leftApple[i];
            if (currChar !== "p") {
                leftAppleNumber += currChar;
            } else {
                break;
            }
        }

        for (i = 0; i < leftSnake.length; i++) {
            let currChar = leftSnake[i];
            if (currChar !== "p") {
                leftSnakeNumber += currChar;
            } else {
                break;
            }
        }

        topAppleNumber = Number(topAppleNumber);
        topSnakeNumber = Number(topSnakeNumber);
        leftAppleNumber = Number(leftAppleNumber);
        leftSnakeNumber = Number(leftSnakeNumber);

        console.log("Apple Left : " + leftAppleNumber); //601
        console.log("Snake Left : " + leftSnakeNumber); //504

        let check = snake.style.backgroundImage;

        if (topSnakeNumber < topAppleNumber && topSnakeNumber > topAppleNumber - 50 &&
            leftSnakeNumber > leftAppleNumber - 70 && leftSnakeNumber < leftAppleNumber + 40 &&
            (check === `url("Images/SnakeHeadDown.png")` || check === `url("Images/SnakeHeadUp.png")`) ) {
            apple.classList.add("hide");
        } else if (leftSnakeNumber < leftAppleNumber && leftSnakeNumber > leftAppleNumber - 50 &&
            topSnakeNumber > topAppleNumber - 70 && topSnakeNumber < topAppleNumber + 40 &&
            (check === `url("Images/SnakeHeadLeft.png")` || check === `url("Images/SnakeHeadRight.png")`) ) {
            apple.classList.add("hide");
        }  

        window.requestAnimationFrame(gameAction);
    }

    function onKeyDown(e) {
        keys[e.code] = true;
    }

    function onKeyUp(e) {
        keys[e.code] = false;
    }
}