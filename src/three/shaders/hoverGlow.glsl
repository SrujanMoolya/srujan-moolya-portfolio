// Hover Glow Shader
uniform float uTime;
uniform float uHoverAmount;
uniform vec3 uColor;

varying vec3 vPosition;
varying vec3 vNormal;

#include <common>

void main() {
  vec3 normal = normalize(vNormal);
  vec3 viewDir = normalize(cameraPosition - vPosition);
  
  float fresnel = pow(1.0 - dot(normal, viewDir), 2.0);
  float glow = fresnel * (0.5 + 0.5 * sin(uTime * 2.0));
  
  float hover = smoothstep(0.0, 1.0, uHoverAmount);
  vec3 finalColor = uColor * (1.0 + glow * hover);
  
  gl_FragColor = vec4(finalColor, 0.8 + 0.2 * fresnel);
}
