

var blob;

var blobs = [];
var zoom = 1;

function setup() {
    createCanvas(700, 700);
    // start at 0 , 0
    blob = new Blob(0, 0, 20);
    for (var i = 0; i < 500; i++) {
        // x and y below will give me a bigger canvas to work with
        var x = random(-width,width);
        var y = random(-height,height);
        blobs[i] = new Blob(x, y, 16);
    }
}

function draw() {
    background(210);
// the world is drawn relative to the blob itself
// translate to the center
    translate(width/2, height/2);
    var newzoom = 64 / blob.r;

    // blobs dont actually row in size they just zoom out the frame everytime a new one is eaten so it looks like it is getting bigger.
// lerp is linear enterplation moving slowly to a new value so does not jump background,
// want to be just a little bit 10% of the new value
    zoom = lerp(zoom, newzoom, 0.1);
    scale(zoom);
    translate(-blob.pos.x, -blob.pos.y);

// looping through the array backwards, to remove thing
    for (var i = blobs.length-1; i >=0; i--) {
        blobs[i].show();
        // removing the blob if it gets eaten
        if (blob.eats(blobs[i])) {
            blobs.splice(i, 1);
        }
    }


    blob.show();
    blob.update();

}
