var myGamePiece;
// timerDisplay = document.getElementById("gameTimer")
var yeet;
timer = 0;
lastTimeDisplay = document.getElementById("last-score-container")
lastTime = 0;
bestTimeDisplay = document.getElementById("best-score-container")
bestTime = 0;
avgTime = 0;
canvas = document.getElementById('gameCanvas');
ctx = canvas.getContext('2d');
turns = 0;

now = Date.now()
// then = (getTime() - now)
function reactionTrainer() {
    backThen = Date.now()
    function getRandomInt(piecePos) {
        return Math.floor(Math.random() * piecePos);
    }
    function storeBestTime() {
        if(lastTime<0){
            bestTime = 0
            lastTime = 0
        } else if(bestTime == 0){
            bestTime = lastTime
        } else if( lastTime < bestTime){
            bestTime = lastTime
        }
    }
    function timerDecrease(i) {
        setTimeout(() => {timer--, 1000});
    };

    function timerStart() {
        for(let i=60; i>0; i--){
        timerDecrease(i);
        };
    };

    function timerRestart() {
        timer = 60;
    };
    
    let playArea = {
        canvas : document.getElementById("gameCanvas"),
        start : function() {
        this.context = this.canvas.getContext("2d");        
    },
        clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    }
    function buildTarget() {
        let myGamePiece = new Path2D();
        myGamePiece.arc(getRandomInt(985), getRandomInt(547.5), 20, 0, 2 * Math.PI);
        ctx.fillStyle = 'red';
        ctx.fill(myGamePiece);
        // rightNow = Date.now();
    }
    function updatePlayArea() {
        playArea.clear();   
        buildTarget();
    }   
    function clearBoard() {
        playArea.clear();
        yeet = setTimeout(buildTarget, 900)
    }   
    canvas.addEventListener('click', function(event) {
        rightNow = Date.now() - 900
        timeDifferential = rightNow - backThen
        clearBoard();
        // storeBestTime();
        lastTime = timeDifferential;
        backThen = Date.now();
        console.log(lastTime);
        storeBestTime();
        document.getElementById("last-score-container").innerHTML = lastTime;        
        document.getElementById("best-score-container").innerHTML = bestTime;
        // clearTimeout(timerVar)
    }); 
    function startGame() {
        timerRestart();
        playArea.start();
        updatePlayArea();
        // timerStart();
        }
    startGame();

}
