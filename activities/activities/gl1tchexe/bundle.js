!function(){"use strict";function n(n,t){for(var e=0,r=0;r<t.length;r++){var i=t[r];n[e++]=i.x,n[e++]=i.y,n[e++]=i.z}return n}function t(n){for(var t=n.faces,e=[],r=[],i=0;i<t.length;i++){var o=t[i];e.push(n.vertices[o.a],n.vertices[o.b],n.vertices[o.c]);var a=o.vertexColors;if(3===a.length)r.push(a[0],a[1],a[2]);else{var c=o.color;r.push(c,c,c)}}return{vertices:e,colors:r}}function e(){return{attrs:{},buffers:{}}}function r(n,e){return i(n,t(e))}function i(t,e){var r=new Float32Array(3*e.vertices.length);t.attrs.position=n(r,e.vertices);var i=new Float32Array(3*e.colors.length);return t.attrs.color=n(i,e.colors),t}function o(n,t,e){return{x:n||0,y:t||0,z:e||0}}function a(n,t,e,r){return n.x=t,n.y=e,n.z=r,n}function c(n,t){return n.x=t,n.y=t,n.z=t,n}function u(n){return o(n.x,n.y,n.z)}function s(n,t){return n.x+=t.x,n.y+=t.y,n.z+=t.z,n}function f(n,t,e){return n.x=t.x+e.x,n.y=t.y+e.y,n.z=t.z+e.z,n}function v(n,t){return n.x-=t.x,n.y-=t.y,n.z-=t.z,n}function l(n,t,e){return n.x=t.x-e.x,n.y=t.y-e.y,n.z=t.z-e.z,n}function d(n,t){return n.x*=t.x,n.y*=t.y,n.z*=t.z,n}function m(n,t){return n.x*=t,n.y*=t,n.z*=t,n}function h(n,t){var e=n.x,r=n.y,i=n.z;return n.x=t[0]*e+t[4]*r+t[8]*i,n.y=t[1]*e+t[5]*r+t[9]*i,n.z=t[2]*e+t[6]*r+t[10]*i,z(n)}function p(n,t){return m(n,1/t)}function y(n,t){return n.x=Math.min(n.x,t.x),n.y=Math.min(n.y,t.y),n.z=Math.min(n.z,t.z),n}function x(n,t){return n.x=Math.max(n.x,t.x),n.y=Math.max(n.y,t.y),n.z=Math.max(n.z,t.z),n}function g(n,t,e){var r=t.x,i=t.y,o=t.z,a=e.x,c=e.y,u=e.z;return n.x=i*u-o*c,n.y=o*a-r*u,n.z=r*c-i*a,n}function _(n){return Math.sqrt(n.x*n.x+n.y*n.y+n.z*n.z)}function z(n){return p(n,_(n))}function b(n,t){var e=n.x,r=n.y,i=n.z;return n.x=t[0]*e+t[4]*r+t[8]*i+t[12],n.y=t[1]*e+t[5]*r+t[9]*i+t[13],n.z=t[2]*e+t[6]*r+t[10]*i+t[14],n}function L(n,t){var e=n.x,r=n.y,i=n.z,o=t.x,a=t.y,c=t.z,u=t.w,s=u*e+a*i-c*r,f=u*r+c*e-o*i,v=u*i+o*r-a*e,l=-o*e-a*r-c*i;return n.x=s*u+l*-o+f*-c-v*-a,n.y=f*u+l*-a+v*-o-s*-c,n.z=v*u+l*-c+s*-a-f*-o,n}function w(n,t){return Math.sqrt(P(n,t))}function P(n,t){var e=n.x-t.x,r=n.y-t.y,i=n.z-t.z;return e*e+r*r+i*i}function M(n,t){return n.x=t[12],n.y=t[13],n.z=t[14],n}function C(n,t){return n.x=t[0],n.y=t[1],n.z=t[2],n}function A(){return new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}function R(n,t){var e=t.x,r=t.y,i=t.z,o=t.w,a=e+e,c=r+r,u=i+i,s=e*a,f=e*c,v=e*u,l=r*c,d=r*u,m=i*u,h=o*a,p=o*c,y=o*u;return n[0]=1-(l+m),n[4]=f-y,n[8]=v+p,n[1]=f+y,n[5]=1-(s+m),n[9]=d-h,n[2]=v-p,n[6]=d+h,n[10]=1-(s+l),n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function D(n){return n.set([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),n}function F(n,t){return n.set(t),n}function O(n,t,e){var r=t[0],i=t[4],o=t[8],a=t[12],c=t[1],u=t[5],s=t[9],f=t[13],v=t[2],l=t[6],d=t[10],m=t[14],h=t[3],p=t[7],y=t[11],x=t[15],g=e[0],_=e[4],z=e[8],b=e[12],L=e[1],w=e[5],P=e[9],M=e[13],C=e[2],A=e[6],R=e[10],D=e[14],F=e[3],O=e[7],E=e[11],j=e[15];return n[0]=r*g+i*L+o*C+a*F,n[4]=r*_+i*w+o*A+a*O,n[8]=r*z+i*P+o*R+a*E,n[12]=r*b+i*M+o*D+a*j,n[1]=c*g+u*L+s*C+f*F,n[5]=c*_+u*w+s*A+f*O,n[9]=c*z+u*P+s*R+f*E,n[13]=c*b+u*M+s*D+f*j,n[2]=v*g+l*L+d*C+m*F,n[6]=v*_+l*w+d*A+m*O,n[10]=v*z+l*P+d*R+m*E,n[14]=v*b+l*M+d*D+m*j,n[3]=h*g+p*L+y*C+x*F,n[7]=h*_+p*w+y*A+x*O,n[11]=h*z+p*P+y*R+x*E,n[15]=h*b+p*M+y*D+x*j,n}function E(n,t){return n[12]=t.x,n[13]=t.y,n[14]=t.z,n}function j(n,t){var e=t[0],r=t[1],i=t[2],o=t[3],a=t[4],c=t[5],u=t[6],s=t[7],f=t[8],v=t[9],l=t[10],d=t[11],m=t[12],h=t[13],p=t[14],y=t[15],x=v*p*s-h*l*s+h*u*d-c*p*d-v*u*y+c*l*y,g=m*l*s-f*p*s-m*u*d+a*p*d+f*u*y-a*l*y,_=f*h*s-m*v*s+m*c*d-a*h*d-f*c*y+a*v*y,z=m*v*u-f*h*u-m*c*l+a*h*l+f*c*p-a*v*p,b=e*x+r*g+i*_+o*z;if(0===b)return D(n);var L=1/b;return n[0]=x*L,n[1]=(h*l*o-v*p*o-h*i*d+r*p*d+v*i*y-r*l*y)*L,n[2]=(c*p*o-h*u*o+h*i*s-r*p*s-c*i*y+r*u*y)*L,n[3]=(v*u*o-c*l*o-v*i*s+r*l*s+c*i*d-r*u*d)*L,n[4]=g*L,n[5]=(f*p*o-m*l*o+m*i*d-e*p*d-f*i*y+e*l*y)*L,n[6]=(m*u*o-a*p*o-m*i*s+e*p*s+a*i*y-e*u*y)*L,n[7]=(a*l*o-f*u*o+f*i*s-e*l*s-a*i*d+e*u*d)*L,n[8]=_*L,n[9]=(m*v*o-f*h*o-m*r*d+e*h*d+f*r*y-e*v*y)*L,n[10]=(a*h*o-m*c*o+m*r*s-e*h*s-a*r*y+e*c*y)*L,n[11]=(f*c*o-a*v*o-f*r*s+e*v*s+a*r*d-e*c*d)*L,n[12]=z*L,n[13]=(f*h*i-m*v*i+m*r*l-e*h*l-f*r*p+e*v*p)*L,n[14]=(m*c*i-a*h*i-m*r*u+e*h*u+a*r*p-e*c*p)*L,n[15]=(a*v*i-f*c*i+f*r*u-e*v*u-a*r*l+e*c*l)*L,n}function B(n,t){var e=t.x,r=t.y,i=t.z;return n[0]*=e,n[4]*=r,n[8]*=i,n[1]*=e,n[5]*=r,n[9]*=i,n[2]*=e,n[6]*=r,n[10]*=i,n[3]*=e,n[7]*=r,n[11]*=i,n}function N(n,t,e,r){return R(n,e),B(n,r),E(n,t),n}function I(n,t,e,r){return{x:n||0,y:t||0,z:e||0,w:void 0!==r?r:1}}function q(n,t,e,r,i){return n.x=t,n.y=e,n.z=r,n.w=i,n}function S(n,t){return n.x=t.x,n.y=t.y,n.z=t.z,n.w=t.w,n}function k(n,t){var e=n.x,r=n.y,i=n.z,o=n.w,a=t.x,c=t.y,u=t.z,s=t.w;return n.x=e*s+o*a+r*u-i*c,n.y=r*s+o*c+i*a-e*u,n.z=i*s+o*u+e*c-r*a,n.w=o*s-e*a-r*c-i*u,n}function Y(n,t,e){var r=e/2,i=Math.sin(r);return n.x=t.x*i,n.y=t.y*i,n.z=t.z*i,n.w=Math.cos(r),n}function V(n,t){var e=Math.cos(t.x/2),r=Math.cos(t.y/2),i=Math.cos(t.z/2),o=Math.sin(t.x/2),a=Math.sin(t.y/2),c=Math.sin(t.z/2);return n.x=o*r*i+e*a*c,n.y=e*a*i-o*r*c,n.z=e*r*c+o*a*i,n.w=e*r*i-o*a*c,n}function G(n,t){var e,r=t[0],i=t[4],o=t[8],a=t[1],c=t[5],u=t[9],s=t[2],f=t[6],v=t[10],l=r+c+v;return l>0?(e=.5/Math.sqrt(l+1),n.w=.25/e,n.x=(f-u)*e,n.y=(o-s)*e,n.z=(a-i)*e):r>c&&r>v?(e=2*Math.sqrt(1+r-c-v),n.w=(f-u)/e,n.x=.25*e,n.y=(i+a)/e,n.z=(o+s)/e):c>v?(e=2*Math.sqrt(1+c-r-v),n.w=(o-s)/e,n.x=(i+a)/e,n.y=.25*e,n.z=(u+f)/e):(e=2*Math.sqrt(1+v-r-c),n.w=(a-i)/e,n.x=(o+s)/e,n.y=(u+f)/e,n.z=.25*e),n}function T(n){return Math.sqrt(n.x*n.x+n.y*n.y+n.z*n.z+n.w*n.w)}function X(n){var t=T(n);return t?(t=1/t,n.x=n.x*t,n.y=n.y*t,n.z=n.z*t,n.w=n.w*t):(n.x=0,n.y=0,n.z=0,n.w=1),n}function W(){return{parent:null,children:[],position:o(),quaternion:I(),scale:o(1,1,1),matrix:A(),matrixWorld:A(),modelViewMatrix:A(),visible:!0}}function Z(n,t){return t.parent=n,n.children.push(t),n}function H(n,t){var e=n.children.indexOf(t);e>=0&&n.children.splice(e,1)}function U(n,t){return Ht(n,Gt,t)}function K(n,t){return Ht(n,Xt,t)}function Q(n,t){t(n);for(var e=n.children,r=0;r<e.length;r++){var i=e[r];Q(i,t)}}function J(n){N(n.matrix,n.position,n.quaternion,n.scale)}function $(n){J(n),n.parent?O(n.matrixWorld,n.parent.matrixWorld,n.matrix):F(n.matrixWorld,n.matrix),n.children.map($)}function nn(n,t){return{min:n||o(1/0,1/0,1/0),max:t||o(-(1/0),-(1/0),-(1/0))}}function tn(n,t){return Object.assign(n.min,t.min),Object.assign(n.max,t.max),n}function en(n){return n.min.x=n.min.y=n.min.z=1/0,n.max.x=n.max.y=n.max.z-=1/0,n}function rn(n,t){return m(f(t,n.min,n.max),.5)}function on(n,t){return y(n.min,t),x(n.max,t),n}function an(n,t){return n.min.x<=t.x&&t.x<=n.max.x&&n.min.y<=t.y&&t.y<=n.max.y&&n.min.z<=t.z&&t.z<=n.max.z}function cn(n,t){return!(n.max.x<t.min.x||n.min.x>t.max.x||n.max.y<t.min.y||n.min.y>t.max.y||n.max.z<t.min.z||n.min.z>t.max.z)}function un(n,t){return s(n.min,t),s(n.max,t),n}function sn(n,t,e,r){return fn(Object.assign(W(),{fov:n||60,near:e||.1,far:r||2e3,aspect:t||1,up:u(Tt),matrixWorldInverse:A(),projectionMatrix:A()}))}function fn(n){var t=n.near,e=n.far,r=t*Math.tan(.5*n.fov*Kt),i=-r,o=i*n.aspect,a=r*n.aspect,c=2*t/(a-o),u=2*t/(r-i),s=(a+o)/(a-o),f=(r+i)/(r-i),v=-(e+t)/(e-t),l=-2*e*t/(e-t);return n.projectionMatrix.set([c,0,0,0,0,u,0,0,s,f,v,-1,0,0,l,0]),n}function vn(n,t){var e=Object.assign(W(),{color:n||o(),intensity:void 0!==t?t:1,target:W()});return Object.assign(e.position,Tt),e}function ln(n,t,e){function r(t,e){var r=n.createShader(t);n.shaderSource(r,e),n.compileShader(r),n.attachShader(i,r)}var i=n.createProgram();return r(n.VERTEX_SHADER,t),r(n.FRAGMENT_SHADER,e),n.linkProgram(i),i}function dn(n,t){var e=n.createBuffer();return n.bindBuffer(n.ARRAY_BUFFER,e),n.bufferData(n.ARRAY_BUFFER,new Float32Array(t),n.STATIC_DRAW),e}function mn(n,t,e,r){n.bindBuffer(n.ARRAY_BUFFER,e),n.enableVertexAttribArray(t),n.vertexAttribPointer(t,r,n.FLOAT,!1,0,0)}function hn(n,t,e){n.uniform1f(t,e)}function pn(n,t,e){n.uniformMatrix4fv(t,!1,e)}function yn(n,t,e){n.uniform3f(t,e.x,e.y,e.z)}function xn(n,t){for(var e={},r=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES),i=0;i<r;i++){var o=n.getActiveAttrib(t,i),a=o.name;e[a]=n.getAttribLocation(t,a)}return e}function gn(n,t){for(var e={},r=n.getProgramParameter(t,n.ACTIVE_UNIFORMS),i=0;i<r;i++){var o=n.getActiveUniform(t,i),a=o.name;e[a]=n.getUniformLocation(t,a)}return e}function _n(n,t,e){return{a:n,b:t,c:e,color:o(1,1,1),vertexColors:[]}}function zn(n){return{a:n.a,b:n.b,c:n.c,color:u(n.color),vertexColors:n.vertexColors.map(u)}}function bn(){var n=Array.from(arguments);return function(t){return n.reduce(function(n,t){return t(n)},t)}}function Ln(n){return function(t){return function(e){return n(e,t)}}}function wn(n){return function(t,e,r){return function(i){return n(i,t,e,r)}}}function Pn(n,t){return n-t}function Mn(n,t){t.sort(Pn);for(var e=t.length;e--;)n.splice(t[e],1)}function Cn(n,t){var e=n.indexOf(t);e>=0&&n.splice(e,1)}function An(n){return Array.from(new Set(n))}function Rn(){return{vertices:[],faces:[]}}function Dn(n,t,e){var r,i=n.vertices.length;for(r=0;r<t.length;r+=3)n.vertices.push(o(t[r],t[r+1],t[r+2]));for(r=0;r<e.length;r+=3)n.faces.push(_n(i+e[r],i+e[r+1],i+e[r+2]));return n}function Fn(n,t){var e,r=n.vertices.length;for(e=0;e<t.vertices.length;e++)n.vertices.push(u(t.vertices[e]));for(e=0;e<t.faces.length;e++){var i=t.faces[e],o=_n(i.a+r,i.b+r,i.c+r);Object.assign(o.color,i.color);for(var a=0;a<i.vertexColors.length;a++)o.vertexColors.push(u(i.vertexColors[a]));n.faces.push(o)}return n}function On(n){var t=Rn();return t.vertices=n.vertices.map(u),t.faces=n.faces.map(zn),t}function En(n,t,e){var r=n/2,i=t/2,o=e/2,a=[r,i,o,r,i,-o,r,-i,o,r,-i,-o,-r,i,-o,-r,i,o,-r,-i,-o,-r,-i,o],c=[0,2,1,2,3,1,4,6,5,6,7,5,4,5,1,5,0,1,7,6,2,6,3,2,5,7,0,7,2,0,1,3,4,3,6,4];return Dn(Rn(),a,c)}function jn(){return{color:o(1,1,1),specular:o(1/15,1/15,1/15),shininess:30,emissive:o()}}function Bn(n,t){return Object.assign(W(),{geometry:n,material:t})}function Nn(n){var t=jn();return n&&Object.assign(t.emissive,n),Bn(En(.05,.05,.5),t)}function In(){var n={};return document.addEventListener("keydown",function(t){n[t.code]=!0}),document.addEventListener("keyup",function(t){n[t.code]=!1}),n}function qn(n){var t={object:n,speed:1,turnRate:Math.PI/4,sensitivity:.002,enabled:!1,onMouseMove:function(e){if(t.enabled){var r=e.movementX||e.mozMovementX||0,i=e.movementY||e.mozMovementY||0,o=-i*t.sensitivity,a=-r*t.sensitivity;X(q(ee,o,0,0,1)),X(q(re,0,a,0,1)),k(n.quaternion,ee),k(re,n.quaternion),S(n.quaternion,re)}}};return document.addEventListener("mousemove",t.onMouseMove),t}function Sn(n,t){function e(){n.enabled=t===document.pointerLockElement|t===document.mozPointerLockElement}var r="pointerLockElement"in document||"mozPointerLockElement"in document;return r?(document.addEventListener("pointerlockchange",e),document.addEventListener("mozpointerlockchange",e),t.requestPointerLock=t.requestPointerLock||t.mozRequestPointerLock,void document.addEventListener("click",function(){t.requestPointerLock()})):void(n.enabled=!0)}function kn(n){return n}function Yn(n){return(n*=2)<1?.5*n*n*n:.5*((n-=2)*n*n+2)}function Vn(n,t,e){var r={time:performance.now(),object:n,start:Object.keys(t.to).reduce(function(t,e){return t[e]=n[e],t},{}),to:t.to,duration:t.duration,easing:t.easing||kn,update:t.update,callback:e};return ie.push(r),r}function Gn(){var n=performance.now(),t=[];ie.map(function(e,r){var i=(n-e.time)/e.duration,o=Math.min(e.easing(i),1);Object.keys(e.to).map(function(n){var t=e.start[n],r=e.to[n];e.object[n]=t+(r-t)*o}),e.update&&e.update(e),i>1&&(t.push(r),e.callback&&e.callback(e))}),Mn(ie,t)}function Tn(n){Cn(ie,n)}function Xn(n,t,e){return Math.min(Math.max(n,t),e)}function Wn(n,t){return n+Math.random()*(t-n)}function Zn(n){return n*(.5-Math.random())}function Hn(n){return n[Math.floor(Math.random()*n.length)]}function Un(n,t){for(var e=W(),r=t;r--;){var i=Bn(oe,ae),o=Wn(.01,.05);a(i.scale,o,o,o),a(i.position,Wn(n.min.x,n.max.x),Wn(n.min.y,n.max.y),Wn(n.min.z,n.max.z)),Z(e,i)}return e}function Kn(n,t){var e=Ee[t.toUpperCase()];return Array.isArray(e)?(a(je,0,0,0),e.map(function(t){s(je,n.vertices[t])}),p(je,e.length)):Object.assign(je,n.vertices[e]),Jt(n,-je.x,-je.y,-je.z)}function Qn(n,t,e){n.a===t&&(n.vertexColors[0]=e),n.b===t&&(n.vertexColors[1]=e),n.c===t&&(n.vertexColors[2]=e)}function Jn(n,t){return Object.keys(t).map(function(e){var r=C(o(),t[e]),i=Ee[e.toUpperCase()];n.faces.map(function(n){Array.isArray(i)?i.map(function(t){Qn(n,t,r)}):Qn(n,i,r)})}),n}function $n(n,t){return t=C(o(),t),n.faces.map(function(n){for(var e=0;e<3;e++)void 0===n.vertexColors[e]&&(n.vertexColors[e]=t)}),n}function nt(n){var t=o(),e=o();return function(r,i){return Object.keys(i).map(function(o){var a=i[o],u=Ee[o.toUpperCase()];if(Array.isArray(a))C(t,a);else if("object"==typeof a)Object.assign(t,e,a);else{if("number"!=typeof a)return;c(t,a)}Array.isArray(u)?u.map(function(e){n(r.vertices[e],t)}):n(r.vertices[u],t)}),r}}function tt(n,t){return n.physics=t,n.boundingBox=Ut(nn(),n),n}function et(n){var t=[];return Q(n,function(n){n.physics&&t.push(n)}),t}function rt(n){for(var t={hit:[],removed:[]},e=0;e<n.length;e++)for(var r=n[e],i=0;i<n.length;i++){var o=n[i];if(r.physics&&o.physics&&!(r.physics===ke&&r.physics===ke||r.physics===Ve&&o.physics===Ve))if(r.physics===Ve&&o.physics!==Ve||r.physics!==Ve&&o.physics===Ve){var c,u;r.physics===Ve?(c=r,u=o):(c=o,u=r),un(tn(Te,u.boundingBox),u.position),an(Te,c.position)&&(t.hit.push(u),t.removed.push(c))}else if(un(tn(Xe,r.boundingBox),r.position),un(tn(We,o.boundingBox),o.position),cn(Xe,We)){rn(Xe,Ze),rn(We,He);var f=We.max.x-Xe.min.x,l=Xe.max.x-We.min.x,d=We.max.y-Xe.min.y,h=Xe.max.y-We.min.y,p=We.max.z-Xe.min.z,y=Xe.max.z-We.min.z,x=0;f>0&&l>0&&(x=f<l?f:-l);var g=0;d>0&&h>0&&(g=d<h?d:-h);var _=0;p>0&&y>0&&(_=p<y?p:-y);var z=Math.abs(x),b=Math.abs(g),L=Math.abs(_);z<=b&&b<=L?a(Ge,x,0,0):b<=z&&b<=L?a(Ge,0,g,0):a(Ge,0,0,_),r.physics===ke?v(o.position,Ge):o.physics===ke?s(r.position,Ge):(m(Ge,.5),s(r.position,Ge),v(o.position,Ge)),r.enemy&&!o.enemy&&o.health?(t.hit.push(o),t.removed.push(r),r.physics=!1):!r.enemy&&r.health&&o.enemy&&(t.hit.push(r),t.removed.push(o),o.physics=!1)}}return t}function it(){var n=W();n.health=Ue;var t=jn();a(t.color,.5,.5,.5),t.shininess=5;var e=jn();a(e.emissive,.1,.1,.1),a(e.specular,1,1,1),e.shininess=100;var r=Bn(nr,t),i=Bn(mr,e);return Z(n,r),tt(n,ke),Z(n,i),n}function ot(n){var t=n.health,e=jn();a(e.emissive,0,1,0);var r=jn();a(r.color,0,0,0),a(r.emissive,.1,.1,.1);var i=Bn(yr,e),o=Bn(xr,r);i.position.x=hr/2;var c=W();return Z(c,i),Z(c,o),c.update=function(){var r=n.health/t;a(e.emissive,1-r,r,0),a(i.scale,r,1,1),i.visible=!!n.health},c}function at(n){for(var t=W(),e=2,r=[],i=n;i--;){var o=Bn(wr,Hn(Pr)),c=Wn(.05,.3);a(o.scale,c,c,c),a(o.position,Zn(.2),Zn(.2),Zn(.2)),Z(t,o),r.push(m(z(u(o.position)),Wn(1.5,4)))}return t.update=function(n,i){var o=Math.exp(-e*n);m(Object.assign(br,zr),n);var a=0;t.children.map(function(t,e){var i=r[e];m(Object.assign(Lr,i),n),s(i,br),s(t.position,Lr),m(t.scale,o),_(t.scale)>gr&&a++}),a||H(i,t)},t}function ct(n,t){var e={magnitude:t||0},r={to:{magnitude:0},duration:300,update:function(){var t=e.magnitude;a(n.position,Zn(t),Zn(t),Zn(t))}};return Vn(e,r)}function ut(n){return 440*Math.pow(2,(n-69)/12)}function st(n,t,e){e=e||Ar.destination;var r=Ar.createBufferSource();r.buffer=n,r.connect(e),r.start(t?Ar.currentTime+t:0)}function ft(n){return function(t){t.map(function(t){var e=t[0],r=t[1];st(e,r,n)})}}function vt(n,t,e){for(var r=t*Rr,i=Ar.createBuffer(1,r,Rr),o=i.getChannelData(0),a=0;a<r;a++)o[a]=n(a/Rr,a,o)*e;return i}function lt(n){var t=Dr[n%12],e=Math.floor(n/12)-1;return t+e}function dt(n,t,e){function r(r){var o,a={get:function(){return o||(o=vt(n(ut(r)),t,e)),o}};Object.defineProperty(i,r,a),Object.defineProperty(i,lt(r),a)}for(var i={},o=21;o<=105;o++)r(o);return i}function mt(n,t,e){return(2*Math.random()-1)*Math.pow(64,-t/e.length)}function ht(n,t,e,r){var i=new Cr(1,Br.length,Rr),o=i.createBiquadFilter();o.type="lowpass",o.Q.value=1e-4,o.frequency.value=t,o.frequency.linearRampToValueAtTime(e,r),o.connect(i.destination);var a=i.createBufferSource();a.buffer=Br,a.connect(o),a.start();var c=i.startRendering();void 0!==c?c.then(function(t){n.buffer=t}):i.oncomplete=function(t){n.buffer=t.renderedBuffer}}function pt(n){return function(t){return Math.sin(2*t*Math.PI*n)}}function yt(n){return function(){return function(t){return Math.exp(-t*n)}}}function xt(n){return n=n||1,function(){var t=0;return function(){var e=(t+.02*Zn(1))/1.02;return t+=e,(-1>t||t>1)&&(t-=e),3.5*t*n}}}function gt(n,t){return function(e){var r=n(e),i=t(e);return function(n){return r(n)+i(n)}}}function zt(n,t){return function(e){var r=n(e),i=t(e);return function(n){return r(n)*i(n)}}}function bt(){st(Vr.a4,0,jr)}function Lt(){st(Gr[Hn(Tr)],0,jr),st(Gr[Hn(Tr)],Math.random()*Yr,jr),st(Gr[Hn(Tr)],2*Math.random()*Yr,jr)}function wt(){ft(jr)([[Xr.a2,Ir+qr],[Xr.a2,Nr+qr],[Xr.a2,Nr+Ir+qr],[Xr.a2,2*Nr+qr],[Xr.a2,2*Nr+Ir+qr],[Xr.a2,3*Nr+qr],[Xr.a2,3*Nr+Ir+qr],[Xr.a2,4*Nr+qr]])}function Pt(){var n=W(),t=jn();a(t.emissive,.1,.1,.1),n.health=2,n.speed=1.5,n.enemy=!0;var e=Bn(Zr,t),r=Bn(Kr,t),i=Bn(Kr,t),o=Bn(Kr,t),c=.6;r.position.z=c,o.position.z=-c,Z(n,e),Z(n,r),Z(n,i),Z(n,o),tt(n,Ye);var u=0;return n.update=function(n){u+=n;var t=Math.PI/10*Math.cos(4*Math.PI*u);a(Qr,0,t,0),a(Jr,0,-t,0),V(r.quaternion,Qr),V(o.quaternion,Qr),V(i.quaternion,Jr)},n}function Mt(){var n=W();n.health=5,n.speed=5,n.enemy=!0;var t=Bn($r,ti),e=Bn($r,ti),r=Bn($r,ti),i=2*Math.PI/3;return V(e.quaternion,a(ni,0,0,-i)),V(r.quaternion,a(ni,0,0,i)),Z(n,t),Z(n,e),Z(n,r),tt(n,Ye),n}function Ct(n,t,e,r){function i(o){C(a,t[o]);var c=w(a,n.position);Zt(n,a);var u=Vn(n.position,Object.assign({to:a,duration:c/n.speed*1e3,update:function(){n.parent||Tn(u)}},e),function(){o++,t[o]?i(o):r&&r()});return u}C(n.position,t[0]);var a=o(),c=1;return i(c)}function At(n){function t(){var t=Hn([i,c,s,f]),e=Pt();Z(n,e),Ct(e,t)}function e(){var t=Math.random()*Math.PI,e=Math.cos(t),r=Math.sin(t),i=Math.random()<.5?7.5:-7.5,a=Wn(40,48),c=Wn(8,10),s=[[a*e+i,Wn(4,6),a*r],[c*e+i,Wn(4,6),c*r]],f=Mt();Z(n,f),Ct(f,s,{easing:Yn},function(){function t(){var t=Nn(o(1,0,0));t.physics=Ve,Object.assign(t.position,f.position),Object.assign(t.quaternion,e.quaternion);var r=u(t.position);L(Object.assign(ei,Gt),t.quaternion),K(t,2),t.update=function(n){K(t,16*n),w(r,t.position)>30&&H(t.parent,t)},Z(n,t),bt()}var e=W();Object.assign(e.position,f.position),Zt(e,o(i,0,0));var r=2,a=0,c=0;f.update=function(n){if(a+=n,a-c>=r)return t(),void(c=a)}})}var r=.2,i=[[-38,r,-8],[-38,r,-0],[7.5,r,0]],c=[[-38,r,-18],[-8,r,-18],[-7.5,r,0],[7.5,r,0]],s=[[40,r,1.5],[-7.5,r,1.5]],f=[[40,r,-1.5],[-7.5,r,-1.5]],v=0,l=0,d=0,m=n.update,h=4,p=20;n.update=function(n){m&&m(n),d+=n,d-v>h&&(t(),v=d),d-l>p&&(e(),l=d)},t(),e();var y=jn();a(y.color,.8,.6,.7),a(y.specular,.5,.5,.5),y.shininess=5;var x=En(9,30,9),g=bn(Be("py"),ne(-8,0,0))(On(x)),_=Bn(g,y);tt(_,ke),Z(n,_);var z=bn(Be("py"),ne(8,0,0))(On(x)),b=Bn(z,y);tt(b,ke),Z(n,b);var P=Be("py")(En(7,3,4)),M=Bn(P,y);tt(M,ke),Z(n,M);for(var C=En(1,3,.5),A=-3;A<=3;A+=3)Fn(P,bn(Be("py_nz"),ne(A,0,2))(On(C))),Fn(P,bn(Be("py_pz"),ne(A,0,-2))(On(C)));var R=Bn(bn(Be("py"),ne(-8,0,-12))(En(4,3,16)),y);tt(R,ke),Z(n,R);var D=Bn(bn(Be("px_py"),ne(-10,0,-18))(En(6,3,4)),y);tt(D,ke),Z(n,D);var F=Bn(bn(Be("py"),ne(-14.25,0,0))(En(3.5,3,2)),y);tt(F,ke),Z(n,F);var O=Bn(bn(Be("nx_py"),ne(12.5,0,1.25))(En(40,3,1.5)),y);tt(O,ke),Z(n,O);var E=Bn(bn(Be("nx_py"),ne(12.5,0,-1.25))(En(40,3,1.5)),y);tt(E,ke),Z(n,E);var j=Bn(ne(4,-10,-10)(En(15,30,8)),y);tt(j,ke),Z(n,j);var B=Bn(ne(22,-5,-11)(En(15,30,10)),y);tt(B,ke),Z(n,B);var N=Bn(bn(Be("px_ny"),ne(-16,0,-9))(En(3,3,14)),y);tt(N,ke),Z(n,N);var I=Bn(bn(Be("px_ny"),ne(-23,0,-7),Ie([1,1,1]),Ne({ny:[.5,.5,.5]}))(En(7,12,10)),y);tt(I,ke),Z(n,I);var q=Bn(bn(Be("px_py"),ne(-16,0,-10))(En(24,30,30)),y);tt(q,ke),Z(n,q)}function Rt(){return"precision highp float;precision highp int;uniform mat4 modelViewMatrix;uniform mat4 projectionMatrix;attribute vec3 position;varying vec3 vViewPosition;attribute vec3 color;varying vec3 vColor;void main() {vColor.rgb = color.rgb;vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);gl_Position = projectionMatrix * mvPosition;vViewPosition = -mvPosition.xyz;}"}function Dt(n){return"#extension GL_OES_standard_derivatives : enable\nprecision highp float;precision highp int;\n#define RECIPROCAL_PI 0.31830988618\n#define saturate(a) clamp(a, 0.0, 1.0)\nuniform vec3 diffuse;uniform vec3 emissive;uniform vec3 specular;uniform float shininess;struct IncidentLight {vec3 color;vec3 direction;};struct ReflectedLight {vec3 directDiffuse;vec3 directSpecular;vec3 indirectDiffuse;vec3 indirectSpecular;};struct GeometricContext {vec3 position;vec3 normal;vec3 viewDir;};varying vec3 vColor;uniform vec3 fogColor;uniform float fogNear;uniform float fogFar;vec3 BRDF_Diffuse_Lambert(const in vec3 diffuseColor) {return RECIPROCAL_PI * diffuseColor;}vec3 F_Schlick(const in vec3 specularColor, const in float dotLH) {float fresnel = exp2((-5.55473 * dotLH - 6.98316) * dotLH);return (1.0 - specularColor) * fresnel + specularColor;}float G_BlinnPhong_Implicit() {return 0.25;}float D_BlinnPhong(const in float shininess, const in float dotNH) {return RECIPROCAL_PI * (shininess * 0.5 + 1.0) * pow(dotNH, shininess);}vec3 BRDF_Specular_BlinnPhong(const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess) {vec3 halfDir = normalize(incidentLight.direction + geometry.viewDir);float dotNH = saturate(dot(geometry.normal, halfDir));float dotLH = saturate(dot(incidentLight.direction, halfDir));vec3 F = F_Schlick(specularColor, dotLH);float G = G_BlinnPhong_Implicit();float D = D_BlinnPhong(shininess, dotNH);return F * (G * D);}uniform vec3 ambientLightColor;vec3 getAmbientLightIrradiance(const in vec3 ambientLightColor) {vec3 irradiance = ambientLightColor;return irradiance;}struct DirectionalLight {vec3 direction;vec3 color;};uniform DirectionalLight directionalLights["+n+"];void getDirectionalDirectLightIrradiance(const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight) {directLight.color = directionalLight.color;directLight.direction = directionalLight.direction;}varying vec3 vViewPosition;struct BlinnPhongMaterial {vec3 diffuseColor;vec3 specularColor;float specularShininess;};void RE_Direct_BlinnPhong(const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight) {float dotNL = saturate(dot(geometry.normal, directLight.direction));vec3 irradiance = dotNL * directLight.color;reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert(material.diffuseColor);reflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong(directLight, geometry, material.specularColor, material.specularShininess);}void RE_IndirectDiffuse_BlinnPhong(const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight) {reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert(material.diffuseColor);}void main() {vec3 diffuseColor = diffuse;ReflectedLight reflectedLight = ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));diffuseColor *= vColor;vec3 fdx = vec3(dFdx(vViewPosition.x), dFdx(vViewPosition.y), dFdx(vViewPosition.z));vec3 fdy = vec3(dFdy(vViewPosition.x), dFdy(vViewPosition.y), dFdy(vViewPosition.z));vec3 normal = normalize(cross(fdx, fdy));BlinnPhongMaterial material;material.diffuseColor = diffuseColor;material.specularColor = specular;material.specularShininess = shininess;GeometricContext geometry;geometry.position = -vViewPosition;geometry.normal = normal;geometry.viewDir = normalize(vViewPosition);IncidentLight directLight;DirectionalLight directionalLight;"+function(){for(var t="",e=0;e<n;e++)t+="directionalLight = directionalLights["+e+"];getDirectionalDirectLightIrradiance(directionalLight, geometry, directLight);RE_Direct_BlinnPhong(directLight, geometry, material, reflectedLight);";return t}()+"vec3 irradiance = getAmbientLightIrradiance(ambientLightColor);RE_IndirectDiffuse_BlinnPhong(irradiance, geometry, material, reflectedLight);vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + emissive;float depth = gl_FragCoord.z / gl_FragCoord.w;float fogFactor = smoothstep(fogNear, fogFar, depth);gl_FragColor.rgb = mix(outgoingLight, fogColor, fogFactor);}"}function Ft(n){var t=1/n,e=0;return function(n){return!(n-e<t)&&(e=n,!0)}}function Ot(n){a(n.position,Xn(n.position.x,-12,12),6,Xn(n.position.z,-8,8))}function Et(n){var t=10,e=0,r=0;(pi.KeyW||pi.ArrowUp)&&(r+=-1),(pi.KeyS||pi.ArrowDown)&&(r+=1),(pi.KeyA||pi.ArrowLeft)&&(e+=-1),(pi.KeyD||pi.ArrowRight)&&(e+=1),(e||r)&&(z(a(Ei,e,0,r)),Ht(di,Ei,t*n))}function jt(n){var t=at(15);Object.assign(t.position,n.position),Z(oi,t),H(n.parent,n),Lt();var e=w(di.position,t.position);ct(hi,1/(2*e))}function Bt(){var n=.001*(performance.now()||0);Ri||(Ri=n);var t=Math.min(n-Ri,.1);for(Fi+=t,Ri=n,Gn(),zi.position.x=3*Math.cos(n),zi.position.z=3*Math.sin(n);Fi>=Di;){pi.Space&&Oi(n)&&Yt(),Q(oi,function(n){n.update&&n.update(Di,oi)});var e=rt(et(oi));An(e.hit).map(function(n){n.health>0&&n.health--,n.health||n.physics!==Ye||jt(n)}),e.removed.map(function(n){(n.physics===Ve||n.enemy)&&jt(n)}),Et(Di),Ot(di),Fi-=Di}var r=oi.cpus.every(function(n){return n.health<=0});r&&setTimeout(function(){ii=!1,_r.hidden=!1,_r.disabled=!1},1e3)}function Nt(n,t,e,r){var i=e.buffers[n]||(e.buffers[n]=dn(Pi,e.attrs[n]));mn(Pi,t,i,r)}function It(n){var t=n.geometry,i=n.material;yn(Pi,Ai.fogColor,yi),hn(Pi,Ai.fogNear,xi),hn(Pi,Ai.fogFar,gi),yn(Pi,Ai.diffuse,i.color),yn(Pi,Ai.specular,i.specular),hn(Pi,Ai.shininess,i.shininess),yn(Pi,Ai.emissive,i.emissive),O(n.modelViewMatrix,di.matrixWorldInverse,n.matrixWorld),pn(Pi,Ai.modelViewMatrix,n.modelViewMatrix),pn(Pi,Ai.projectionMatrix,di.projectionMatrix),t._bufferGeom||(t._bufferGeom=r(e(),t)),Nt("position",Ci.position,t._bufferGeom,3),Nt("color",Ci.color,t._bufferGeom,3),Pi.drawArrays(Pi.TRIANGLES,0,t._bufferGeom.attrs.position.length/3)}function qt(){Bt(),$(oi),j(di.matrixWorldInverse,di.matrixWorld),Pi.clear(Pi.COLOR_BUFFER_BIT|Pi.DEPTH_BUFFER_BIT),yn(Pi,Ai.ambientLightColor,_i),Li.map(function(n,t){a(ri,0,0,0);var e=M(ji,n.matrixWorld);M(ri,n.target.matrixWorld),h(v(e,ri),di.matrixWorldInverse);var r=m(Object.assign(ri,n.color),n.intensity);yn(Pi,Ai["directionalLights["+t+"].direction"],e),yn(Pi,Ai["directionalLights["+t+"].color"],r)}),Q(oi,function(n){n.visible&&n.geometry&&n.material&&It(n)}),ii&&requestAnimationFrame(qt)}function St(){ii||(_r.disabled=!0,_r.hidden=!0,ui.health=Ue,fi.health=Ue,H(oi,wi),wi=W(),Z(oi,wi),At(wi),Ri=null,ii=!0,qt(),wt())}function kt(){_t.hidden=!0,qt(),wt(),document.removeEventListener("click",kt)}function Yt(){var n=Nn(o(.3,.3,1));n.physics=Ve,Object.assign(n.position,di.position),Object.assign(n.quaternion,di.quaternion);var t=u(n.position);L(Object.assign(ri,Gt),n.quaternion),U(n,Bi%2?-.3:.3),n.update=function(e){K(n,-Ni*e),w(t,n.position)>Ii&&H(n.parent,n)},Z(oi,n),Bi=(Bi+1)%2,bt()}function Vt(n,t){_c.width=n,_c.height=t,Pi.viewport(0,0,n,t)}var Gt=o(1,0,0),Tt=o(0,1,0),Xt=o(0,0,1),Wt=function(){var n=o(),t=o(),e=o();return function(r,i,o,a){return z(l(e,i,o)),_(e)||(e.z=1),z(g(n,a,e)),_(n)||(e.z+=1e-4,z(g(n,a,e))),g(t,e,n),r[0]=n.x,r[4]=t.x,r[8]=e.x,r[1]=n.y,r[5]=t.y,r[9]=e.y,r[2]=n.z,r[6]=t.z,r[10]=e.z,r}}(),Zt=function(){var n=A();return function(t,e){Wt(n,e,t.position,Tt),G(t.quaternion,n)}}(),Ht=(function(){var n=I();return function(t,e,r){return Y(n,e,r),k(t.quaternion,n),t}}(),function(){var n=o();return function(t,e,r){return L(Object.assign(n,e),t.quaternion),s(t.position,m(n,r)),t}}()),Ut=function(){var n=o();return function(t,e){return $(e),en(t),Q(e,function(e){var r=e.geometry;if(r)for(var i=r.vertices,o=0;o<i.length;o++)Object.assign(n,i[o]),b(n,e.matrixWorld),on(t,n)}),t}}(),Kt=Math.PI/180,Qt=function(){var n=A();return function(t,e){Wt(n,t.position,e,t.up),G(t.quaternion,n)}}(),Jt=function(){var n=o();return function(t,e,r,i){return a(n,e,r,i),t.vertices.map(function(t){s(t,n)}),t}}(),$t=function(){var n=o();return function(t,e,r,i){return a(n,e,r,i),t.vertices.map(function(t){d(t,n)}),t}}(),ne=wn(Jt),te=wn($t),ee=I(),re=I(),ie=[],oe=En(1,1,1),ae=jn();a(ae.color,0,0,0),a(ae.emissive,.3,.3,.3);for(var ce=0,ue=1,se=2,fe=3,ve=4,le=5,de=6,me=7,he=[ce,ue],pe=[se,fe],ye=[ve,le],xe=[de,me],ge=[ce,se],_e=[ue,fe],ze=[ve,de],be=[le,me],Le=[ce,le],we=[ue,ve],Pe=[se,me],Me=[fe,de],Ce=[].concat(he,pe),Ae=[].concat(ye,xe),Re=[].concat(he,ye),De=[].concat(pe,xe),Fe=[].concat(ge,be),Oe=[].concat(_e,ze),Ee={PX_PY_PZ:ce,PX_PY_NZ:ue,PX_NY_PZ:se,PX_NY_NZ:fe,NX_PY_NZ:ve,NX_PY_PZ:le,NX_NY_NZ:de,NX_NY_PZ:me,PX_PY:he,PX_NY:pe,NX_PY:ye,NX_NY:xe,PX_PZ:ge,PX_NZ:_e,NX_NZ:ze,NX_PZ:be,PY_PZ:Le,PY_NZ:we,NY_PZ:Pe,NY_NZ:Me,PX:Ce,NX:Ae,PY:Re,NY:De,PZ:Fe,NZ:Oe},je=o(),Be=Ln(Kn),Ne=Ln(Jn),Ie=Ln($n),qe=Ln(nt(s)),Se=Ln(nt(d)),ke=1,Ye=2,Ve=4,Ge=o(),Te=nn(),Xe=nn(),We=nn(),Ze=nn(),He=nn(),Ue=20,Ke=6,Qe=Ke/2,Je=.5,$e=.4,nr=Fn(bn(Be("ny"),Ie([1,1,1]),Ne({ny:[.5,.5,.5]}))(En(Ke,Je,Ke)),bn(Be("ny"),ne(0,Je,0),qe({px_py:{x:-$e},nx_py:{x:$e},py_pz:{z:-$e},py_nz:{z:$e}}))(En(Ke,.1,Ke))),tr=.15,er=.4,rr=En(tr,er,tr),ir=bn(Be("ny_nz"),qe({py_pz:{y:-.2}}))(On(rr)),or=bn(Be("ny_pz"),qe({py_nz:{y:-.2}}))(On(rr)),ar=bn(Be("px_ny"),qe({nx_py:{y:-.2}}))(On(rr)),cr=bn(Be("nx_ny"),qe({px_py:{y:-.2}}))(On(rr)),ur=Rn(),sr=Rn(),fr=Rn(),vr=Rn(),lr=0;lr<12;lr++){var dr=.5*lr-2.75;Fn(ur,ne(dr,0,Qe)(On(ir))),Fn(sr,ne(dr,0,-Qe)(On(or))),Fn(fr,ne(-Qe,0,dr)(On(ar))),Fn(vr,ne(Qe,0,dr)(On(cr)))}var mr=Fn(Fn(Fn(ur,sr),fr),vr),hr=5,pr=En(hr,.5,.5),yr=ne(-hr/2,0,0)(On(pr)),xr=te(-1,1,1)(On(pr)),gr=.01,zr=o(0,-10,0),br=o(),Lr=o(),wr=En(1,1,1),Pr=[[1,.9,.2],[1,.9,.6],[1,1,.8],[1,1,1]].map(function(n){var t=jn();return C(t.emissive,n),t}),Mr=window.AudioContext||window.webkitAudioContext,Cr=window.OfflineAudioContext||window.webkitOfflineAudioContext,Ar=new Mr,Rr=Ar.sampleRate,Dr=["c","cs","d","ds","e","f","fs","g","gs","a","as","b"],Fr=Ar.createGain();Fr.gain.value=.5,Fr.connect(Ar.destination);var Or=Ar.createGain();Or.gain.value=1-Fr.gain.value,Or.connect(Ar.destination);var Er=Ar.createConvolver();Er.connect(Fr);var jr=Ar.createGain();jr.gain.value=.8,jr.connect(Or),jr.connect(Er);var Br=vt(mt,2,1);ht(Er,440,220,1);var Nr=1,Ir=Nr/2,qr=Ir/2,Sr=qr/2,kr=Sr/2,Yr=kr/2,Vr=dt(zt(gt(pt,xt()),yt(32)),.25,.5),Gr=dt(zt(xt(2),yt(64)),.25,.25),Tr=["c3","d3","e3","f3"],Xr=dt(zt(pt,yt(64)),.5,.5),Wr=Fn(bn(qe({px_ny:{x:-.08},nx_py:{y:.06}}),Se({nx:[1,1,1.5]}))(En(.4,.12,.16)),bn(Ie([1,1,1]),Ne({px_ny:[.3,.3,.3]}),ne(.16,0,0),Se({px_ny:[1,1,0]}),qe({px_ny:{x:.12,y:-.2},nx_py:{x:.08}}))(En(.08,.12,.16))),Zr=bn(Ie([1,1,1]),Ne({ny:[.3,.3,.3]}))(En(.6,.3,1.6)),Hr=ne(.3,0,0),Ur=ne(-.3,0,0),Kr=Fn(Hr(On(Wr)),Ur(te(-1,1,-1)(On(Wr)))),Qr=o(),Jr=o(),$r=Fn(bn(Be("pz"),Ie([1,1,1]),Ne({ny:[.5,.5,.5]}),qe({nz:{y:1},ny_nz:{y:.25,z:.25},nx_nz:{x:.25},px_nz:{x:-.25}}))(En(.5,.5,2)),bn(Be("nz"),Ie([1,1,1]),Ne({ny:[.5,.5,.5]}),qe({nx_pz:{x:.15},px_pz:{x:-.15},py_pz:{y:-.3},ny_pz:{y:.05}}))(En(.5,.5,.375)));$r=ne(0,.5,0)($r);var ni=o(),ti=jn(),ei=o(),ri=o(),ii=!0,oi=W(),ai=6,ci=5,ui=it();a(ui.position,-8,0,0);var si=ot(ui);a(si.position,-8,ci,0);var fi=it();a(fi.position,8,0,0);var vi=ot(fi);a(vi.position,8,ci,0);var li=Un(nn(o(-16,0,-8),o(16,8,8)),40),di=sn(60,window.innerWidth/window.innerHeight),mi=.2;tt(di,Ye),di.boundingBox=nn(o(-mi,-mi,-mi),o(mi,mi,mi)),a(di.position,6,ai,8),Qt(di,o()),Sn(qn(di),_c);var hi=W();Z(hi,di);var pi=In(),yi=o(0,0,0),xi=.1,gi=40,_i=o(.5,.5,.9),zi=vn(o(1,.5,.5)),bi=vn(o(.2,.3,.5));a(bi.position,-2,2,-2);var Li=[zi,bi];Z(oi,hi),Z(oi,zi),Z(oi,bi),Z(oi,li),Z(oi,ui),Z(oi,si),Z(oi,fi),Z(oi,vi),oi.cpus=[ui,fi];var wi=W();Z(oi,wi),At(wi),
_c.width=window.innerWidth,_c.height=window.innerHeight;var Pi=_c.getContext("webgl");Pi.clearColor(0,0,0,0),Pi.enable(Pi.DEPTH_TEST),Pi.enable(Pi.CULL_FACE),Pi.getExtension("OES_standard_derivatives");var Mi=ln(Pi,Rt(),Dt(Li.length)),Ci=xn(Pi,Mi),Ai=gn(Pi,Mi);Pi.useProgram(Mi);var Ri,Di=1/60,Fi=0,Oi=Ft(8),Ei=o(),ji=o();_r.addEventListener("click",St),document.addEventListener("click",kt);var Bi=0,Ni=16,Ii=40;window.addEventListener("resize",function(){di.aspect=window.innerWidth/window.innerHeight,fn(di),Vt(window.innerWidth,window.innerHeight)})}();