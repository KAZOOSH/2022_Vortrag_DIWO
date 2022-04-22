

let shaderBlend;
let img;
let wImg;
let hImg;
let shaderTexture;
let snap;

function preload() {
  shaderBlend = loadShader('shader.vert', 'shader.frag');
  img = loadImage('kazoosh_logo_detail_white.png');
}

function setup() {

  createCanvas(windowWidth, windowHeight, WEBGL);
  noStroke();

  let scale = img.width/img.height;
  let scaleWindow = windowWidth/windowHeight;



  if(scale > scaleWindow){
    wImg = windowWidth;
    hImg = windowWidth/scale;
  }else{
    wImg = windowHeight*scale;
    hImg = windowHeight;
  }

  shaderTexture = createGraphics(img.width, img.height,WEBGL);
  snap = createGraphics(img.width, img.height);
  snap.copy(img,0,0,img.width,img.height,0,0,img.width,img.height); 

  console.log(wImg,hImg);
}


function draw(){
  // update shader using texture and time
  shaderTexture.shader(shaderBlend);
  shaderBlend.setUniform('tex0', snap);
  shaderBlend.setUniform('time', 0.5*(sin(millis()/2000)));
  shaderTexture.rect(0,0,wImg,hImg);

  // draw texture in center of screen
  texture(shaderTexture);
  push();
  translate(-0.5*windowWidth,-0.5*windowHeight,0);
  translate(0.5*(windowWidth-wImg),0.5*(windowHeight-hImg),0);
  quad(0, 0, wImg, 0, wImg, hImg,0,hImg);
  pop();
  
}