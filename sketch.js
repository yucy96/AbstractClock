function setup() {
	createCanvas(800,600); // make an HTML canvas element width x height pixels
}

function draw() {
	background(0);
	var h = hour();
	var m = minute();
	var s = second();
	var hr = 200;
	var mr = 150;
	var sr = 100;
	var hc = 255-h*255/24;
	var mc = 255-m*255/60;
	var sc = 255-s*255/60;
    fill(hc, 0, 0);
    strokeWeight(0);
    ellipse(250, h * (600-hr) / 24 + hr/2, hr);
    fill(0, mc, 0);
    strokeWeight(0);
    ellipse(500, m * (600-mr) / 60 + mr/2, mr);
    fill(0, 0, sc);
    strokeWeight(0);
    ellipse(700, s * (600-sr) / 60 + sr/2, sr);
    textSize(32);
    fill(hc, mc, sc);
    text("Clock", 30, 50);
}
