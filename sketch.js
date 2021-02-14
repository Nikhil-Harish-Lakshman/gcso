var hr,mn,sc
var scAngle,hrAngle,mnAngle





function setup() {
  createCanvas(400,400);
  
}

function draw() {
  background(255,255,255);  
  translate(200,200)
  rotate(-90)


  hr= hour();
  mn= minute();
  sc= second();

  angleMode(DEGREES)


  scAngle = map(sc,0,60,0,360)
  hrAngle = map(hr%12,0,12,0,360)
  mnAngle = map(mn,0,60,0,360)

  push();
  rotate(scAngle)
  stroke(255,0,0)
  strokeWeight(7)
  line(0,0,100,0)
  pop()



  push();
  rotate(hrAngle)
  stroke(0,0,255)
  strokeWeight(7)
  line(0,0,25,0)
  pop();

  push();
  rotate(mnAngle)
  stroke(0,255,0)
  strokeWeight(7)
  line(0,0,75,0)
  pop();
  

}
