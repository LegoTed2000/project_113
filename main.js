function preload() {
    img = loadImage('https://images.pexels.com/photos/3712095/pexels-photo-3712095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
}

function setup() {
    createCanvas(640, 480);
}


function draw() {
    image(img, 160, 120, 320, 220);
    strokeWeight(10);

    fill(3, 252, 161);
    stroke(252, 11, 3);
    circle(580, 50, 70);

    fill(3, 252, 161);
    stroke(252, 11, 3);
    circle(580, 420, 70);

    fill(3, 252, 161);
    stroke(252, 11, 3);
    circle(60, 420, 70);

    fill(3, 252, 161);
    stroke(252, 11, 3);
    circle(60, 50, 70);

    fill(3, 252, 161);
    stroke(252, 11, 3);
    line(540, 50, 95, 50);

    fill(3, 252, 161);
    stroke(252, 11, 3);
    line(580, 380, 580, 90);

    fill(3, 252, 161);
    stroke(252, 11, 3);
    line(540, 415, 95, 415);

    fill(3, 252, 161);
    stroke(252, 11, 3);
    line(60, 380, 60, 90);
}

function take_snapshot() {
    save("color_student.png");
}

