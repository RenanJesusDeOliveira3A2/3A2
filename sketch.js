let cor;
let ellipseX; // horizontal
let ellipseY; // vertical

function setup() {
  createCanvas(400, 400);
  background(color("yellow"));
  cor = color(random(0, 255), random(0, 255), random(0, 255));
  
  ellipseX = [0, 0, 0, 0];
  ellipseY = [random(height), random(height), random(height)];
}

function draw() {
  
  fill(cor);
  
  for(let contador in ellipseX) {
    ellipse(ellipseX[contador], ellipseY[contador], 20, 50, 30, 40);    
    ellipseX[contador]+= random(0,3);
    ellipseY[contador]+= random(-3,3); 
    
    if(ellipseX[contador] >= width){
      ellipseX[contador] = 0;
      ellipseY[contador] = random(height);
    }
  }
  
  if(mouseIsPressed){
    cor = color(random(0, 255), random(0, 255), random(0, 255), random(0, 100));
  }
}
