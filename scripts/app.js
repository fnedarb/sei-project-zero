var myGamePiece;
// let $playArea = $(playArea).get(0)

function getRandomInt(piecePos) {
    return Math.floor(Math.random() * piecePos);
}

let playArea = {
    canvas : document.createElement("canvas"),
    start : function() {
      this.canvas.width = 1000;
      this.canvas.height = 562.5;
      this.context = this.canvas.getContext("2d");
      document.body.insertBefore(this.canvas, document.body.childNodes[0]);
      }
}

function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    ctx = playArea.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
}
function startGame() {
    playArea.start();
    myGamePiece = new component(15, 15, "blue", getRandomInt(1000), getRandomInt(562.5));
}
startGame();
