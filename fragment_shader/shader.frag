// Author: 
// Title: 

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main() {
	vec2 xy10 = mod(gl_FragCoord.xy / 10.0, 1.0);

    gl_FragColor = vec4(xy10,1.0,1.0);
}
