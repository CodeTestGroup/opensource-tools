import{gl}from"./init.js";import{ElementBuffer,FloatMat4,FloatVec3,GLArrayBuffer,Program,Quaternion,Shader}from"./webgl.js";const vs=new Shader(gl.VERTEX_SHADER,[{type:"vec4",name:"aPosition"},{type:"vec3",name:"aNormal"}],[{type:"mat4",name:"projection"},{type:"mat4",name:"view"},{type:"mat4",name:"model"}],"\nvarying vec3 normal;\nvarying vec3 pos;\nvarying vec3 viewPos;\n\nvoid main() {\n\tgl_Position = projection * view * model * aPosition;\n\tpos = aPosition.xyz;\n\tviewPos = (model * aPosition).xyz;\n\tnormal = mat3(model) * aNormal;\n}\n"),fs=new Shader(gl.FRAGMENT_SHADER,[],[{type:"mat4",name:"view"},{type:"vec3",name:"lightDir"},{type:"vec3",name:"color"},{type:"vec3",name:"shade"}],"\nvarying vec3 normal;\nvarying vec3 pos;\nvarying vec3 viewPos;\n\nvoid main() {\n\tvec3 norm = normalize(normal);\n\tfloat diffuse = dot(norm, lightDir) * 0.5;\n\tfloat ambient = 0.5;\n\tfloat light = ambient + diffuse;\n\tfloat p = 4.0;\n\tvec3 one = vec3(1.0, 1.0, 1.0);\n\tvec3 pVec = p * one;\n\tvec3 a = pow(abs(pos), pVec);\n\tfloat sum = dot(a, one);\n\tfloat pNorm = pow(sum, 1.0 / p);\n\n\tvec3 c = color * shade * (1.0 - 0.15 * pow(pNorm, 4.0));\n\tgl_FragColor = vec4(c * light, 1.0);\n}\n"),normals=new GLArrayBuffer(new Float32Array([1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1]),3,gl.FLOAT);export class Cube{constructor(e,n=new FloatVec3(1,1,1),o=1,t=new Quaternion(0,0,0,1),a=new FloatVec3(.5,.5,.5)){this.position=e,this.color=n,this.shade=o,this.rotation=t,this.scale=a,this.modelView=new FloatMat4}}Cube.positions=new GLArrayBuffer(new Float32Array([1,1,-1,1,1,1,1,-1,1,1,-1,-1,-1,1,1,-1,1,-1,-1,-1,-1,-1,-1,1,-1,1,1,1,1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1,1,1,1,-1,1,1,-1,-1,1,1,-1,1,-1,1,-1,1,1,-1,1,-1,-1,-1,-1,-1]),3,gl.FLOAT),Cube.program=new Program([vs,fs]),Cube.indices=new ElementBuffer(new Uint16Array([0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23])),Cube.program.attributes.get("aPosition").value=Cube.positions,Cube.program.attributes.get("aNormal").value=normals,Cube.program.uniforms.get("model").value=new FloatMat4;