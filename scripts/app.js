var myGamePiece;
timer = 0;
lastTime = 0;
bestTime = 0;
avgTime = 0;
canvas = document.getElementById('gameCanvas');
ctx = canvas.getContext('2d');

function aimTrainer() {
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
        
    console.log(timer)  

    let playArea = {
        canvas : document.getElementById("gameCanvas"),
        start : function() {
        this.context = this.canvas.getContext("2d");        
    },
        clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    }
    function buildTarget(){
        let myGamePiece = new Path2D();
        myGamePiece.arc(getRandomInt(985), getRandomInt(547.5), 20, 0, 2 * Math.PI);
        ctx.fillStyle = 'red';
        ctx.fill(myGamePiece);
    }
     function updatePlayArea() {
        playArea.clear();   
        buildTarget();
    }    
    function startGame() {
        timerRestart();
        playArea.start();
        updatePlayArea();
        console.log(timer)
    }
startGame();
}        
aimTrainer();
