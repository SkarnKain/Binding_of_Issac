var img_head = [];
var img_body_U = [];
var img_body_D = [];
var img_body_R = [];
var img_body_L = [];
var isaac;
var isaac_head_img;
var isaac_body_img;
var test;
var spritesheet;
var accel = 0.3;
var drag = 0.93;

function preload() {
    spritesheet = loadImage("Ressources/spritesheet.png");
}


function setup() {
    createCanvas(windowWidth, windowHeight);
    isaac = new Isaac();
    for (var i = 0; i < 8; i++) {
        img_head[i] = spritesheet.get(32 * i, 0, 31, 31);
    }
    for (var i = 0; i < 10; i++) {
        img_body_U[i] = spritesheet.get(32 * 9 - 32 * i, 32, 31, 31);
    }
    for (var i = 0; i < 10; i++) {
        img_body_D[i] = spritesheet.get(32 * i, 32, 31, 31);
    }
    for (var i = 0; i < 10; i++) {
        img_body_R[i] = spritesheet.get(32 * i, 64, 31, 31);
    }
    for (var i = 0; i < 10; i++) {
        img_body_L[i] = spritesheet.get(32 * 9 - 32 * i, 96, 31, 31);
    }
}


function draw() {
    background(255, 255, 255);
    isaac.update();
    isaac.show();
}


function keyPressed() {
    switch (keyCode) {
        case DOWN_ARROW :
            isaac.dir = "DOWN";
            isaac.acc.y = accel;
            break;
        case RIGHT_ARROW :
            isaac.dir = "RIGHT";
            isaac.acc.x = accel;
            break;
        case LEFT_ARROW :
            isaac.dir = "LEFT";
            isaac.acc.x = -accel;
            break;
        case UP_ARROW :
            isaac.dir = "UP";
            isaac.acc.y = -accel;
            break;
    }
}


function keyReleased() {
    switch (keyCode) {
        case DOWN_ARROW :
            isaac.acc.y = 0;
            if (keyIsDown(UP_ARROW)) {isaac.dir = "UP"; isaac.acc.y = -accel;};
            if (keyIsDown(RIGHT_ARROW)) {isaac.dir = "RIGHT"};
            if (keyIsDown(LEFT_ARROW)) {isaac.dir = "LEFT"};
            break;
        case RIGHT_ARROW :
            isaac.acc.x = 0;
            if (keyIsDown(UP_ARROW)) {isaac.dir = "UP"};
            if (keyIsDown(DOWN_ARROW)) {isaac.dir = "DOWN"};
            if (keyIsDown(LEFT_ARROW)) {isaac.dir = "LEFT"; isaac.acc.x = -accel;};
            break;
        case LEFT_ARROW :
            isaac.acc.x = 0;
            if (keyIsDown(UP_ARROW)) {isaac.dir = "UP"};
            if (keyIsDown(DOWN_ARROW)) {isaac.dir = "DOWN"};
            if (keyIsDown(RIGHT_ARROW)) {isaac.dir = "RIGHT"; isaac.acc.x = accel;};
            break;
        case UP_ARROW :
            isaac.acc.y = 0;
            if (keyIsDown(DOWN_ARROW)) {isaac.dir = "DOWN"; isaac.acc.y = accel;};
            if (keyIsDown(LEFT_ARROW)) {isaac.dir = "LEFT"};
            if (keyIsDown(RIGHT_ARROW)) {isaac.dir = "RIGHT"};
    }
}