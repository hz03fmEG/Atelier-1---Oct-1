let kermit;

function preload()
{
    kermit = loadImage("kermit2.gif");
}

function setup() 
{
	createCanvas(400, 400);
}

function draw()
{
background(225,225,0);
image(kermit,0,0);
}