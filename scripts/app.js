var myGamePiece;
timer = 0;
lastTime = 0;
bestTime = 0;
avgTime = 0;
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
        //   this.canvas.width = 1000;
        //   this.canvas.height = 562.5;
        this.context = this.canvas.getContext("2d");
        //   document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        //   this.interval = setInterval(updatePlayArea, 20);
        //   window.addEventListener('mousedown', function (e) {
        //     playArea.x = e.pageX;
        //     playArea.y = e.pageY;
        //   })
        //   window.addEventListener('mouseup', function (e) {
        //     playArea.x = false;
        //     playArea.y = false;
        //   })
        
    },
        clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    }

    function component(width, height, color, x, y) {
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.build = function(){
            ctx = playArea.context;
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
        // this.on("click"), function() {
        //     updatePlayArea();
        // }
        // this.clicked = function() {
        //     let myleft = this.x;
        //     let myright = this.x + (this.width);
        //     let mytop = this.y;
        //     let mybottom = this.y + (this.height);
        //     let clicked = true;
        //     if ((mybottom < playArea.y) || (mytop > playArea.y) || (myright < playArea.x) || (myleft > playArea.x)) {
        //       clicked = false;
        //     }
        //     return clicked;
        // }

    }
    function updatePlayArea() {
        playArea.clear();    
        myGamePiece = new component(20, 20, "blue", getRandomInt(985), getRandomInt(547.5));
        myGamePiece.build();
    }
    
    function startGame() {
        timerRestart();
        playArea.start();
        updatePlayArea();
        console.log(timer)
    }
    // async function pieceClickUpdate(){
    //     if (myGamePiece.clicked = true) {
    //         updatePlayArea();          
    //         }
    // }
    // playArea.onclick = updatePlayArea();
startGame();
}        
aimTrainer();
