let world;

// A list we'll use to track fixed objects
let boundaries = [];
// A list for all of our rectangles
let boxes = [];

let personData;

let isDrawYear = false;
let isDrawProfession = false;
let year = 2010;

let fontHead;

let colors = {
  Architektur: "#E0C116",
  Archivwesen: "#34b2e4",
  Elektrotechnik: "#1000E0",
  Gestaltung: "#CE00E0",
  Kunst: "#E01B00",
  Medieninformatik: "#16E07E",
};

function preload() {
  fontHead = loadFont("Dosis-Regular.ttf");
  personData = loadJSON("member.json");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Initialize box2d physics and create the world
  world = createWorld();

  // Add a bunch of fixed boundaries
  boundaries.push(new Boundary(0, windowHeight + 5, windowWidth * 2, 10));
  boundaries.push(new Boundary(-10, 0, 10, windowHeight * 2));
  boundaries.push(new Boundary(windowWidth + 5, 0, 10, windowHeight * 2));
}

function draw() {
  background(0);
  // We must always step through time!
  let timeStep = 1.0 / 30;
  // 2nd and 3rd arguments are velocity and position iterations
  world.Step(timeStep, 10, 10);

  // Display all the boundaries
  for (let i = 0; i < boundaries.length; i++) {
    boundaries[i].display();
  }

  // Display all the boxes
  for (let i = boxes.length - 1; i >= 0; i--) {
    boxes[i].display();
    if (boxes[i].done()) {
      boxes.splice(i, 1);
    }
  }

  // draw year
  if (isDrawYear) {
    fill(255);
    textSize(100);
    textFont(fontHead);
    text(year, 50, 250);
  }

  if (isDrawProfession) {
    y = 250;
    for ([profession, color] of Object.entries(colors)) {
      fill(color);

      textSize(40);
      textFont(fontHead);
      text(profession, 50, y);

      y += 40;
    }
  }
}

function mousePressed() {
  if (!isDrawYear && year == 2010) {
    isDrawYear = true;
  } else if (year < 2022) {
    year += 1;
  } else {
    isDrawYear = false;
    isDrawProfession = true;

    for (let i = boxes.length - 1; i >= 0; i--) {
      boxes[i].drawOutline = true;
    }
  }

  for ([key, member] of Object.entries(personData)) {
    if (member.firstProject == year) {
      radius = windowHeight * windowWidth * 0.000045;
      pos = radius + random() * (windowWidth - 2 * radius);
      let b = new b2Circle(
        pos,
        30,
        radius,
        member["pic"],
        colors[member["profession"]]
      );
      boxes.push(b);
    }
  }
}
