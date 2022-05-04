// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// A rectangular box




// Constructor
class b2Circle{
  constructor(x, y,r,imagePath,outlineColor) {
    this.r = r;

    // Define a body
    let bd = new box2d.b2BodyDef();
    bd.type = box2d.b2BodyType.b2_dynamicBody;
    bd.position = scaleToWorld(x, y);

    // Define a fixture
    let fd = new box2d.b2FixtureDef();
    // Fixture holds shape
    fd.shape = new box2d.b2CircleShape();
    fd.shape.m_radius= scaleToWorld(r);
    //fd.shape.SetAsBox(scaleToWorld(this.w / 2), scaleToWorld(this.h / 2));

    // Some physics
    fd.density = 1.0;
    fd.friction = 0.5;
    fd.restitution = 0.2;

    // Create the body
    this.body = world.CreateBody(bd);
    // Attach the fixture
    this.body.CreateFixture(fd);

    // Some additional stuff
    this.body.SetLinearVelocity(new box2d.b2Vec2(random(-5, 5), random(2, 5)));
    this.body.SetAngularVelocity(random(-5, 5));

    this.img = loadImage(imagePath);

    this.drawOutline = false;
    this.outlineColor = outlineColor;
    
  }

  // This function removes the particle from the box2d world
  killBody() {
    world.DestroyBody(this.body);
  }

  // Is the particle ready for deletion?
  done() {
    // Let's find the screen position of the particle
    let pos = scaleToPixels(this.body.GetPosition());
    // Is it off the bottom of the screen?
    if (pos.y > height + this.w * this.h) {
      this.killBody();
      return true;
    }
    return false;
  }

  // Drawing the box
  display() {
    // Get the body's position
    let pos = scaleToPixels(this.body.GetPosition());
    // Get its angle of rotation
    let a = this.body.GetAngleRadians();


    // Draw it!
    rectMode(CENTER);
    push();
    translate(pos.x, pos.y);
    rotate(a);
    
    //this.img.mask(this.mask);
    imageMode(CENTER);

    
    image(this.img, 0,0,this.r*2,this.r*2);

    if(this.drawOutline){
      let c = hexToRgb(this.outlineColor)
      fill(c.r,c.g,c.b,100);
      stroke(this.outlineColor);
      strokeWeight(this.r*0.2);
      ellipse(0,0,this.r*2,this.r*2);
    }
    
    
    //circle(0,0,r);
    pop();
  }

  
}

function hexToRgb(hex) {
  hex = hex.replace('#', '');

  var bigint = parseInt(hex, 16);

  var r0 = (bigint >> 16) & 255;
  var g0 = (bigint >> 8) & 255;
  var b0 = bigint & 255;

  return {r:r0, g:g0, b:b0};
}