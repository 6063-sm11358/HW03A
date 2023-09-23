function setup() {
    createCanvas(750,750);
    background('#F2E205');
}

function draw() {
    fill('#171917');                                         //setting fill for the circles
    strokeWeight(0);
    
    let bigDim = 50;                                         //defining diameter for big circle
    let smallDim = 15;                                       //defining diameter for small circle

    for(let xpos=0; xpos<=width; xpos+=2*bigDim)             //looping for x-axis
    {
        for(let ypos=0; ypos<=height; ypos+=2*bigDim)        //looping for y-axis
        {
            ellipse(xpos,ypos,bigDim);                       //printing big circles from (0,0) in odd rows
            ellipse(xpos+bigDim,ypos+bigDim,bigDim);         //printing big circles from (50,50) in even rows
            ellipse(xpos+bigDim,ypos,smallDim);              //printing small circles from (50,0) in odd rows
            ellipse(xpos,ypos+bigDim,smallDim);              //printing small circles from 0,50) in even rows
        }
    }
}