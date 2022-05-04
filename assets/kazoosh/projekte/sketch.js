let font;
let projectData;

let state = 0;
let ts = 0;

let colors = {
  Architektur: "#E0C116",
  Archivwesen: "#34b2e4",
  Elektrotechnik: "#1000E0",
  Gestaltung: "#CE00E0",
  Kunst: "#E01B00",
  Medieninformatik: "#16E07E",
  Extern: "#777777",
};

function preload() {
  projectData = loadJSON("projects.json");
  font = loadFont("Dosis-Regular.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  clear();
  // y axis
  let wAxis = 50;

  // x axis
  let padding = 50;
  let paddingTop = 200;
  let wYear = (windowWidth - 2 * padding - wAxis) / 12;

  fill(255);
  textSize(30);
  textFont(font);
  noStroke();

  let tAxisAni = 2000;
  let nAxisSteps = 2022 - 2010 - 1;
  let tAxisStep = tAxisAni / nAxisSteps;
  if (state == 1) {
    if (millis() - ts > tAxisAni) {
      state += 1;
    }
    let t = millis() - ts;
    let step = floor(t / tAxisStep);

    let x = padding + wAxis;
    for (let i = 2010; i < 2010 + step; i++) {
      textSize(30);
      text(i, x, windowHeight - padding - 50);
      x += wYear;
    }

    let pLastStep = sin((((t % tAxisStep) / tAxisStep) * PI) / 4);
    fill(255);
    textSize(30 * pLastStep);
    text(2010 + floor(step), x, windowHeight - padding - 50);
  } else if (state > 1) {
    let x = padding + wAxis;
    for (i = 2010; i < 2022; i++) {
      text(i, x, windowHeight - padding - 50);
      x += wYear;
    }
  }

  // entries
  let pMax = 0;
  let entriesYear = {};
  for ([key, project] of Object.entries(projectData)) {
    if (project.participants > pMax) {
      pMax = project.participants;
    }
    if (project.date in entriesYear) {
      entriesYear[project.date] += 1;
    } else {
      entriesYear[project.date] = 1;
    }
  }

  let hBlock = (windowHeight - 2 * padding - 50 - paddingTop) / pMax;
  let wBlock = 1;
  for ([key, year] of Object.entries(entriesYear)) {
    if (year > wBlock) {
      wBlock = year;
    }
  }
  wBlock = wYear / wBlock - 3;

  let pStart = windowHeight - padding - 100 - hBlock;
  let pYear = 0;
  let nYear = 0;

  let pProject = 0;
  if (state == 3) {
    let tState = 4000;

    if (millis() - ts > tState) {
      state += 1;
    }
    let t = millis() - ts;
    t = t * sin(((t / tState) * PI) / 4);
    pProject = t / (tState / pMax);
  } else if (state > 3) {
    pProject = pMax;
  }

  // person blocks
  if (state >= 3) {
    for ([key, project] of Object.entries(projectData)) {
      let p = 0;

      if (pYear == project.date) {
        nYear += 1;
      } else {
        pYear = project.date;
        nYear = 0;
      }
      x = (project.date - 2010) * wYear + padding + wAxis + nYear * wBlock;
      y = pStart;

      for ([profession, n] of Object.entries(project.professions)) {
        stroke(0);
        if (state >= 5) {
          fill(colors[profession]);
        } else {
          fill(colors["Extern"]);
        }

        for (i = 0; i < n; i++) {
          if (p < pProject) {
            let dim = min(wBlock - 3, hBlock);
            rect(x, y, dim, dim);
            y -= dim;
            if (p % 5 == 4) {
              y -= 3;
            }

            if (pProject - p < 1) {
              fill(53, 53, 53, (pProject - p) * 255);
              let yMax = y / pStart;
              let dY = mapNl(pProject - p, 0, 1, 0, pStart, 0.9);
              if (dY > y) {
                dY = y;
              }
              rect(x, dY, dim, dim);
              //let d2 = min(wBlock - 3, hBlock) * (pProject - p);
              //rect(x + 0.5 * (dim - d2), y + dim - d2, d2, d2);
            }
          }
          p += 1;
        }
      }
    }
  }

  if (state >= 5) {
    y = paddingTop;
    for ([profession, color] of Object.entries(colors)) {
      fill(color);

      textSize(30);
      noStroke();
      textFont(font);
      text(profession, 50, y);

      y += 30;
    }
  }
}

function mousePressed() {
  state++;
  ts = millis();
}

function mapNl(inV, inMin, inMax, outMin, outMax, shaper) {
  // (1) convert to pct (0-1)
  let pct = map(inV, inMin, inMax, 0, 1, true);
  // raise this number to a power
  pct = pow(pct, shaper);
  let out = map(pct, 0, 1, outMin, outMax, true);
  return out;
}
