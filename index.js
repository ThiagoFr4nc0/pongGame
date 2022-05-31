new p5();

let w = window.screen.width;
let h = (window.screen.height - 145);

let x = w / 2;
let y = h / 2;
let d = 50;

let xV = 6;
let yV = 6;

let radio = d / 2;


let leftSide = 0 ;
let rithgSide = 0 ;


let hPlayer1 = h / 2;
let hPlayer2 = h / 2;
let wPlayer1 = 10;
let wPlayer2 = w - 30;

function setup() {
    createCanvas(w, h);
    textSize(100);
}


function draw() {
    background(0, 0, 0);
    conter();
    circle( x , y , d);
    moveCircle();  
    player1();
    player2();
    defense();
}

function moveCircle(){
    
    x += xV;
    y += yV;

    if(x > (window.screen.width - radio) || (x - radio) < 0){
        xV = xV * (-1);
    }
    if(y > ((window.screen.height - 140) - radio) || (y - radio) < 0){
        yV = yV * (-1);
    }

}
function conter(){
    
    pointer();
    text(leftSide, ((w / 2) - 200), 100);
    fill(500, 500, 500);
    text(rithgSide, w / 2, 100 );
}

function pointer(){
    if(x - radio  < 0){
        rithgSide += 1;
    }
    
    if(x + radio >  w ){
        leftSide += 1;
    }
    
} 

function player1(){

    rect(wPlayer1,hPlayer1,20, 100);
    movePlayer1();
}
function player2(){

    rect(wPlayer2,hPlayer2, 20, 100);
    movePlayer2();
}

 
function movePlayer1(){
    if (keyIsDown(87)){
        if(hPlayer1 > 0){
        hPlayer1 += - 20;
        }
    }
    if (keyIsDown(83)){
        if((hPlayer1 + 100 < h - 1) ){
        hPlayer1 += + 20;
        }
    }

}
function movePlayer2(){
    
    if (keyIsDown(UP_ARROW)){
        if(hPlayer2 > 0){
        hPlayer2 += - 20;
        }
    }
    if (keyIsDown(DOWN_ARROW)){
        if((hPlayer2 + 100 < h - 1) ){
        hPlayer2 += + 20;
        }
    }

}

function defense(){
    if( x == wPlayer2 ){
        if( y >= hPlayer2  && y <= hPlayer2 + 100){
        xV = xV * (-1);
        }
    }
    if( x   == wPlayer1 ){
        if(y >= hPlayer1  && y <= hPlayer1 + 100){
        xV = xV * (-1);
        }
    }
}