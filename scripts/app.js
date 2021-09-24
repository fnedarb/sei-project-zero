var myGamePiece;
// timerDisplay = document.getElementById("gameTimer")
timer = 0;
lastTimeDisplay = document.getElementById("last-score")
lastTime = 0;
bestTimeDisplay = document.getElementById("best-score")
bestTime = 0;
avgTime = 0;
canvas = document.getElementById('gameCanvas');
ctx = canvas.getContext('2d');

now = Date.now()
// then = (getTime() - now)
function reactionTrainer() {
    function getRandomInt(piecePos) {
        return Math.floor(Math.random() * piecePos);
    }
    function storeBestTime() {
        if(lastTime> 0 && lastTime<bestTime){
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
    }

    function updatePlayArea() {
        playArea.clear();   
        buildTarget();
    }   
    canvas.addEventListener('click', function(event) {
        setTimeout(updatePlayArea(), 8000)
        storeBestTime();
    }); 
    function startGame() {
        timerRestart();
        playArea.start();
        updatePlayArea();
        timerStart();
        // timerDisplay.append(timer)
        lastTimeDisplay.append(best-score)
        }
    startGame();
    console.log(now)
}

       

