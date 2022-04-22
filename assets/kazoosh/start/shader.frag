#ifdef GL_ES
precision mediump float;
#endif

// grab texcoords from vert shader
varying vec2 vTexCoord;

// our texture coming from p5
uniform sampler2D tex0;
uniform float time;

void main() {
  vec2 uv = vTexCoord;
  
  // the texture is loaded upside down and backwards by default so lets flip it
  uv.y = 1.0 - uv.y;
  
  vec4 tex = texture2D(tex0, uv);
  
  //float gray = (tex.r + tex.g + tex.b) / 3.0;
  
  //float res = 20.0;
  //float scl = res / (10.0);
 
  //float threshR = (fract(floor(tex.r*res)/scl)*scl) * gray ;
  //float threshG = (fract(floor(tex.g*res)/scl)*scl) * gray ;
  //float threshB = (fract(floor(tex.b*res)/scl)*scl) * gray ;
  //vec3 thresh = vec3(threshR, threshG, threshB);

  vec3 c = vec3(uv.x, uv.y, (uv.x+uv.y));
  vec3 t = vec3(time,-time,time);
  c = (c+t)+vec3(1)/vec3(3);

  


  // render the output


  gl_FragColor = vec4(c.x,c.y,c.z,tex.a);
}