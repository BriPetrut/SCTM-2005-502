//note to self, the position is where it starts at begining/refresh
var x = 0;
var y = 0;
var x2 = 250;
var y2 = 250;
var x3 = 500;
var y3 = 500;
var x4 = 1000;
var y4 = 1000;
var x5 = 1500;
var y5 = 1500;
var x6 = 2000;
var y6 = 2000;
var x7 = 2500;
var y7 = 2500;
var x8 = 3000;
var y8 = 3000;
var x9 = 3500;
var y9 = 3500;
var x10 = 4000;
var y10 = 4000;


function setup(){
    createCanvas(document.body.clientWidth, document.body.clientHeight); //makes the canvas the size of the window
}

function draw(){
    //stars styling 
    blendMode(BLEND)
    background(8,3,42)

    blendMode(SCREEN)
    fill(177, 169, 223)
    strokeWeight(10);
    stroke(177, 169, 223)
    drawingContext.shadowBlur = 20;
    drawingContext.shadowColor = color(255, 255, 255);

    //stars bellow ↓
    circle(x,y, 3, 3);
    x = x + 3;
    x = x % windowWidth;
    y = y + 1;
    y = y % windowHeight;

    circle(x2,y2, 10, 10);
    x2 = x2 + 5;
    x2 = x2 % windowWidth;
    y2 = y2 + 2;
    y2 = y2 % windowHeight;

    circle(x3,y3, 5, 5);
    x3 = x3 + 4;
    x3 = x3 % windowWidth;
    y3 = y3 + 1;
    y3 = y3 % windowHeight;

    circle(x4,y4, 3, 3);
    x4 = x4 + 2;
    x4 = x4 % windowWidth;
    y4 = y4 + 1;
    y4 = y4 % windowHeight;

    circle(x5,y5, 10, 10);
    x5 = x5 + 3;
    x5 = x5 % windowWidth;
    y5 = y5 + 1;
    y5 = y5 % windowHeight;

    circle(x5,y5, 10, 10);
    x6 = x6 + 1;
    x6 = x5 % windowWidth;
    y6 = y6 + 2;
    y6 = y6 % windowHeight;

    circle(x7,y7, 3, 3);
    x7 = x7 + 4;
    x7 = x7 % windowWidth;
    y7 = y7 + 2;
    y7 = y7 % windowHeight;

    circle(x8,y8, 5, 5);
    x8 = x8 + 2;
    x8 = x8 % windowWidth;
    y8 = y8 + 1;
    y8 = y8 % windowHeight;

    circle(x9,y9, 3, 3);
    x9 = x9 + 5;
    x9 = x9 % windowWidth;
    y9 = y9 + 2;
    y9 = y9 % windowHeight;

    circle(x10,y10, 10, 10);
    x10 = x10 + 2;
    x10 = x10 % windowWidth;
    y10 = y10 + 1;
    y10 = y10 % windowHeight;
}


// Sources:
//      Figuring out how to make P5.js sketch the size of a window
//              https://editor.p5js.org/amcc/sketches/ZYQncTSI4
//      Blur effect
//              https://youtu.be/iIWH3IUYHzM 
//      Stroke and fill of shapes
//              https://p5js.org/reference/#/p5/stroke
//      Blendmodes (I like to use them to "break things" in a pretty way)
//              https://p5js.org/reference/#/p5/blendMode
//