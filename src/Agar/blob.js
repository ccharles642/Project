
function Blob(x, y, r) {
    this.pos = createVector(x, y);
    this.r = r;
    // giving a velocity and it new velocity
    this.vel = createVector(0,0);

    this.update = function() {
        var newvel = createVector(mouseX-width/2, mouseY-height/2);
        newvel.setMag(3);
        // the turning with the decimal below is determing the gradualness of the turning the higher the more fast and rapid.
        this.vel.lerp(newvel, 0.3);
        this.pos.add(this.vel);
    }

// writing a function named eat which receives another blob,
    this.eats = function(other) {
        // distance between this blobs vector and other blobs position
        var d = p5.Vector.dist(this.pos, other.pos);
        // if this distance is less than this blobs radius plus the other blobs radius

        //having radius from two different objects touch if they are overlapping then less than
        if (d < this.r + other.r) {
            // sum of the two areas
            var sum = PI * this.r * this.r + PI * other.r * other.r;
            // solve for r
            this.r = sqrt(sum / PI);
            //this.r += other.r;
            return true;
        } else {
            return false;
        }
    }

    this.show = function() {
        fill(27,255,0);
        ellipse(this.pos.x, this.pos.y, this.r*2, this.r*2);
    }
}
