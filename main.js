function preload()
{

}

function setup()
{
canvas=createCanvas(300,300);
canvas.center();
background("white");
canvas.mouseReleased(classifyCanvas);
synth=window.speechSynthesis;
}

function draw()
{
    strokeWeight(12);
    stroke(0);
    if(mouseIsPressed){
    line(pmouseX,pmouseY,mouseX,mouseY);
}
}

function clearCanvas()
{
    background("white");
}