var myGamePiece;
timer = 0;
lastTime = 0;
bestTime = 0;

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
    canvas : document.createElement("canvas"),
    start : function() {
      this.canvas.width = 1000;
      this.canvas.height = 562.5;
      this.context = this.canvas.getContext("2d");
      document.body.insertBefore(this.canvas, document.body.childNodes[0]);
      myGamePiece = new component(15, 15, "blue", getRandomInt(985), getRandomInt(547.5));

}
}
function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.update = function(){
        ctx = playArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}
function startGame() {
    timerRestart();
    playArea.start();
    myGamePiece.update();
}
console.log(timer)  
startGame();
