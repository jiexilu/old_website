var bag;
var count = 0;
bool shouldDraw = true; 

void setup()
{
	bag = new Bag(30,[255,255,255],0,300,2,2);
	size(800,600);
	background(17,9,89);
}

void draw(){  
	background(17,9,89);

	document.getElementById("count").innerHTML = count;

	if (shouldDraw) {
		bag.drawBag();
		bag.move();
	}
	
}

void mousePressed() {
	if(bag.shouldDisappear(mouseX, mouseY)) {
		shouldDraw = false;
		count = count + 1;
	}
}

class Bag {
	var xPosition;
	var yPosition;
	var size;
	var r;
	var g;
	var b;
	var speedX;
	var speedY;
	
	Bag(s, color, x, y, xSpeed, ySpeed){
		xPosition = x;
		yPosition = y;
		r = color[0];
		g = color[1];
		b = color[2];
		size = s;
		speedX = xSpeed;
		speedY = ySpeed;
	}
	
	void drawBag(){
		noStroke();
		fill(r,g,b);
		ellipse(xPosition, yPosition, size, size);
	}
	
	void move(speed){

		if (xPosition < 500) {
			xPosition += speedX;
		} else if (yPosition > 30) {
			yPosition -= speedY;
		}
		
	}

	bool shouldDisappear(x, y) {
		if ((x <= xPosition + size && x >= xPosition - size) && (y <= yPosition + size && y >= yPosition - size)) {
			xPosition = -200; 
			yPosition = -200;
			return true;
		}
		return false;
	}
	
}
