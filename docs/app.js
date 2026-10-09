var Vv=0,ip=1,Wv=2;var Wm=1,Yu=2,Ji=3,Ci=0,vn=1,de=2;var ys=0,Ur=1,tn=2,sp=3,rp=4,Ku=5,Zi=100,qv=101,Xv=102,ap=103,op=104,Ju=200,jv=201,Zu=202,Yv=203,iu=204,su=205,Kv=206,Jv=207,Zv=208,Qv=209,$v=210,tx=211,ex=212,nx=213,ix=214,sx=0,rx=1,ax=2,_c=3,ox=4,cx=5,lx=6,hx=7,Qu=0,ux=1,fx=2,_s=0,dx=1,px=2,mx=3,$u=4,gx=5,vx=6,cp="attached",xx="detached",qm=300,zr=301,Br=302,ru=303,au=304,Zc=306,Fn=1e3,qn=1001,qa=1002,Ke=1003,Mc=1004;var ka=1005;var Qe=1006,tf=1007;var Pi=1008;var Ri=1009,bx=1010,yx=1011,ef=1012,Xm=1013,Ai=1014,Qi=1015,Un=1016,jm=1017,Ym=1018,Ks=1020,_x=1021,ti=1023,Mx=1024,Ex=1025,Js=1026,Gr=1027,wx=1028,Km=1029,Tx=1030,Jm=1031,Zm=1033,yh=33776,_h=33777,Mh=33778,Eh=33779,lp=35840,hp=35841,up=35842,fp=35843,Qm=36196,dp=37492,pp=37496,mp=37808,gp=37809,vp=37810,xp=37811,bp=37812,yp=37813,_p=37814,Mp=37815,Ep=37816,wp=37817,Tp=37818,Sp=37819,Ap=37820,Rp=37821,wh=36492,Cp=36494,Pp=36495,Sx=36283,Lp=36284,Ip=36285,Dp=36286,nf=2200,sf=2201,Ax=2202,Vr=2300,Qs=2301,Th=2302,Dr=2400,Fr=2401,Ec=2402,rf=2500,Rx=2501,$m=0,Qc=1,io=2,t0=3e3,Zs=3001,Cx=3200,af=3201,of=0,Px=1,En="",ue="srgb",en="srgb-linear",cf="display-p3",$c="display-p3-linear",wc="linear",He="srgb",Tc="rec709",Sc="p3";var fr=7680;var Fp=519,Lx=512,Ix=513,Dx=514,e0=515,Fx=516,Hx=517,Nx=518,Ux=519,ou=35044,xi=35048;var Hp="300 es",cu=1035,$i=2e3,Ac=2001,ts=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,t);t.target=null}}},_n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Np=1234567,Oa=Math.PI/180,Wr=180/Math.PI;function pi(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(_n[r&255]+_n[r>>8&255]+_n[r>>16&255]+_n[r>>24&255]+"-"+_n[t&255]+_n[t>>8&255]+"-"+_n[t>>16&15|64]+_n[t>>24&255]+"-"+_n[e&63|128]+_n[e>>8&255]+"-"+_n[e>>16&255]+_n[e>>24&255]+_n[n&255]+_n[n>>8&255]+_n[n>>16&255]+_n[n>>24&255]).toLowerCase()}function $e(r,t,e){return Math.max(t,Math.min(e,r))}function lf(r,t){return(r%t+t)%t}function kx(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function Ox(r,t,e){return r!==t?(e-r)/(t-r):0}function za(r,t,e){return(1-e)*r+e*t}function zx(r,t,e,n){return za(r,t,1-Math.exp(-e*n))}function Bx(r,t=1){return t-Math.abs(lf(r,t*2)-t)}function Gx(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function Vx(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function Wx(r,t){return r+Math.floor(Math.random()*(t-r+1))}function qx(r,t){return r+Math.random()*(t-r)}function Xx(r){return r*(.5-Math.random())}function jx(r){r!==void 0&&(Np=r);let t=Np+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Yx(r){return r*Oa}function Kx(r){return r*Wr}function lu(r){return(r&r-1)===0&&r!==0}function Jx(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Rc(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Zx(r,t,e,n,i){let s=Math.cos,a=Math.sin,o=s(e/2),c=a(e/2),l=s((t+n)/2),h=a((t+n)/2),u=s((t-n)/2),f=a((t-n)/2),d=s((n-t)/2),g=a((n-t)/2);switch(i){case"XYX":r.set(o*h,c*u,c*f,o*l);break;case"YZY":r.set(c*f,o*h,c*u,o*l);break;case"ZXZ":r.set(c*u,c*f,o*h,o*l);break;case"XZX":r.set(o*h,c*g,c*d,o*l);break;case"YXY":r.set(c*d,o*h,c*g,o*l);break;case"ZYZ":r.set(c*g,c*d,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Si(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ee(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var Ue={DEG2RAD:Oa,RAD2DEG:Wr,generateUUID:pi,clamp:$e,euclideanModulo:lf,mapLinear:kx,inverseLerp:Ox,lerp:za,damp:zx,pingpong:Bx,smoothstep:Gx,smootherstep:Vx,randInt:Wx,randFloat:qx,randFloatSpread:Xx,seededRandom:jx,degToRad:Yx,radToDeg:Kx,isPowerOfTwo:lu,ceilPowerOfTwo:Jx,floorPowerOfTwo:Rc,setQuaternionFromProperEuler:Zx,normalize:Ee,denormalize:Si},rt=class r{constructor(t=0,e=0){r.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos($e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*i+t.x,this.y=s*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ce=class r{constructor(t,e,n,i,s,a,o,c,l){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,c,l)}set(t,e,n,i,s,a,o,c,l){let h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=s,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],v=i[0],m=i[3],p=i[6],x=i[1],b=i[4],E=i[7],M=i[2],y=i[5],w=i[8];return s[0]=a*v+o*x+c*M,s[3]=a*m+o*b+c*y,s[6]=a*p+o*E+c*w,s[1]=l*v+h*x+u*M,s[4]=l*m+h*b+u*y,s[7]=l*p+h*E+u*w,s[2]=f*v+d*x+g*M,s[5]=f*m+d*b+g*y,s[8]=f*p+d*E+g*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*s*h+n*o*c+i*s*l-i*a*c}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*a-o*l,f=o*c-h*s,d=l*s-a*c,g=e*u+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return t[0]=u*v,t[1]=(i*l-h*n)*v,t[2]=(o*n-i*a)*v,t[3]=f*v,t[4]=(h*e-i*c)*v,t[5]=(i*s-o*e)*v,t[6]=d*v,t[7]=(n*c-l*e)*v,t[8]=(a*e-n*s)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,a,o){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-i*l,i*c,-i*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Sh.makeScale(t,e)),this}rotate(t){return this.premultiply(Sh.makeRotation(-t)),this}translate(t,e){return this.premultiply(Sh.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Sh=new ce;function n0(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Xa(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Qx(){let r=Xa("canvas");return r.style.display="block",r}var Up={};function Ba(r){r in Up||(Up[r]=!0,console.warn(r))}var kp=new ce().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Op=new ce().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Vo={[en]:{transfer:wc,primaries:Tc,toReference:r=>r,fromReference:r=>r},[ue]:{transfer:He,primaries:Tc,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[$c]:{transfer:wc,primaries:Sc,toReference:r=>r.applyMatrix3(Op),fromReference:r=>r.applyMatrix3(kp)},[cf]:{transfer:He,primaries:Sc,toReference:r=>r.convertSRGBToLinear().applyMatrix3(Op),fromReference:r=>r.applyMatrix3(kp).convertLinearToSRGB()}},$x=new Set([en,$c]),pe={enabled:!0,_workingColorSpace:en,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!$x.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;let n=Vo[t].toReference,i=Vo[e].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return Vo[r].primaries},getTransfer:function(r){return r===En?wc:Vo[r].transfer}};function kr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ah(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var dr,Cc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{dr===void 0&&(dr=Xa("canvas")),dr.width=t.width,dr.height=t.height;let n=dr.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=dr}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Xa("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=kr(s[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(kr(e[n]/255)*255):e[n]=kr(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},tb=0,Pc=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tb++}),this.uuid=pi(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Rh(i[a].image)):s.push(Rh(i[a]))}else s=Rh(i);n.url=s}return e||(t.images[this.uuid]=n),n}};function Rh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Cc.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var eb=0,xn=class r extends ts{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,n=qn,i=qn,s=Qe,a=Pi,o=ti,c=Ri,l=r.DEFAULT_ANISOTROPY,h=En){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:eb++}),this.uuid=pi(),this.name="",this.source=new Pc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Ba("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Zs?ue:En),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==qm)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Fn:t.x=t.x-Math.floor(t.x);break;case qn:t.x=t.x<0?0:1;break;case qa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Fn:t.y=t.y-Math.floor(t.y);break;case qn:t.y=t.y<0?0:1;break;case qa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ba("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ue?Zs:t0}set encoding(t){Ba("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Zs?ue:En}};xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=qm;xn.DEFAULT_ANISOTROPY=1;var le=class r{constructor(t=0,e=0,n=0,i=1){r.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let b=(l+1)/2,E=(d+1)/2,M=(p+1)/2,y=(h+f)/4,w=(u+v)/4,C=(g+m)/4;return b>E&&b>M?b<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(b),i=y/n,s=w/n):E>M?E<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(E),n=y/i,s=C/i):M<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(M),n=w/s,i=C/s),this.set(n,i,s,e),this}let x=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(u-v)/x,this.z=(f-h)/x,this.w=Math.acos((l+d+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},hu=class extends ts{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new le(0,0,t,e),this.scissorTest=!1,this.viewport=new le(0,0,t,e);let i={width:t,height:e,depth:1};n.encoding!==void 0&&(Ba("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Zs?ue:En),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qe,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new xn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Pc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},hn=class extends hu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Lc=class extends xn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var uu=class extends xn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Wt=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],f=s[a+0],d=s[a+1],g=s[a+2],v=s[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=v;return}if(u!==v||c!==f||l!==d||h!==g){let m=1-o,p=c*f+l*d+h*g+u*v,x=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){let M=Math.sqrt(b),y=Math.atan2(M,p*x);m=Math.sin(m*y)/M,o=Math.sin(o*y)/M}let E=o*x;if(c=c*m+f*E,l=l*m+d*E,h=h*m+g*E,u=u*m+v*E,m===1-o){let M=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=M,l*=M,h*=M,u*=M}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,a){let o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=s[a],f=s[a+1],d=s[a+2],g=s[a+3];return t[e]=o*g+h*u+c*d-l*f,t[e+1]=c*g+h*f+l*u-o*d,t[e+2]=l*g+h*d+o*f-c*u,t[e+3]=h*g-o*u-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,s=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),u=o(s/2),f=c(n/2),d=c(i/2),g=c(s/2);switch(a){case"XYZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"YZX":this._x=f*h*u+l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u-f*d*g;break;case"XZY":this._x=f*h*u-l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(s-l)*d,this._z=(a-i)*d}else if(n>o&&n>u){let d=2*Math.sqrt(1+n-o-u);this._w=(h-c)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(s+l)/d}else if(o>u){let d=2*Math.sqrt(1+o-n-u);this._w=(s-l)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+u-n-o);this._w=(a-i)/d,this._x=(s+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs($e(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,s=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+i*l-s*c,this._y=i*h+a*c+s*o-n*l,this._z=s*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,s=this._z,a=this._w,o=a*t._w+n*t._x+i*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;let c=1-o*o;if(c<=Number.EPSILON){let d=1-e;return this._w=d*a+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(s),n*Math.cos(s),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},T=class r{constructor(t=0,e=0,n=0){r.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(zp.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(zp.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,s=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*i-o*n),h=2*(o*e-s*i),u=2*(s*n-a*e);return this.x=e+c*l+a*u-o*h,this.y=n+c*h+o*l-s*u,this.z=i+c*u+s*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,s=t.z,a=e.x,o=e.y,c=e.z;return this.x=i*c-s*o,this.y=s*a-n*c,this.z=n*o-i*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ch.copy(this).projectOnVector(t),this.sub(Ch)}reflect(t){return this.sub(Ch.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos($e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ch=new T,zp=new Wt,Ge=class{constructor(t=new T(1/0,1/0,1/0),e=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(hi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(hi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=hi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,hi):hi.fromBufferAttribute(s,a),hi.applyMatrix4(t.matrixWorld),this.expandByPoint(hi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Wo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Wo.copy(n.boundingBox)),Wo.applyMatrix4(t.matrixWorld),this.union(Wo)}let i=t.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,hi),hi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ra),qo.subVectors(this.max,Ra),pr.subVectors(t.a,Ra),mr.subVectors(t.b,Ra),gr.subVectors(t.c,Ra),ps.subVectors(mr,pr),ms.subVectors(gr,mr),Gs.subVectors(pr,gr);let e=[0,-ps.z,ps.y,0,-ms.z,ms.y,0,-Gs.z,Gs.y,ps.z,0,-ps.x,ms.z,0,-ms.x,Gs.z,0,-Gs.x,-ps.y,ps.x,0,-ms.y,ms.x,0,-Gs.y,Gs.x,0];return!Ph(e,pr,mr,gr,qo)||(e=[1,0,0,0,1,0,0,0,1],!Ph(e,pr,mr,gr,qo))?!1:(Xo.crossVectors(ps,ms),e=[Xo.x,Xo.y,Xo.z],Ph(e,pr,mr,gr,qo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,hi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(hi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Wi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Wi=[new T,new T,new T,new T,new T,new T,new T,new T],hi=new T,Wo=new Ge,pr=new T,mr=new T,gr=new T,ps=new T,ms=new T,Gs=new T,Ra=new T,qo=new T,Xo=new T,Vs=new T;function Ph(r,t,e,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Vs.fromArray(r,s);let o=i.x*Math.abs(Vs.x)+i.y*Math.abs(Vs.y)+i.z*Math.abs(Vs.z),c=t.dot(Vs),l=e.dot(Vs),h=n.dot(Vs);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var nb=new Ge,Ca=new T,Lh=new T,Xn=class{constructor(t=new T,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):nb.setFromPoints(t).getCenter(n);let i=0;for(let s=0,a=t.length;s<a;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ca.subVectors(t,this.center);let e=Ca.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ca,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Lh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ca.copy(t.center).add(Lh)),this.expandByPoint(Ca.copy(t.center).sub(Lh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},qi=new T,Ih=new T,jo=new T,gs=new T,Dh=new T,Yo=new T,Fh=new T,$s=class{constructor(t=new T,e=new T(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,qi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=qi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(qi.copy(this.origin).addScaledVector(this.direction,e),qi.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Ih.copy(t).add(e).multiplyScalar(.5),jo.copy(e).sub(t).normalize(),gs.copy(this.origin).sub(Ih);let s=t.distanceTo(e)*.5,a=-this.direction.dot(jo),o=gs.dot(this.direction),c=-gs.dot(jo),l=gs.lengthSq(),h=Math.abs(1-a*a),u,f,d,g;if(h>0)if(u=a*c-o,f=a*o-c,g=s*h,u>=0)if(f>=-g)if(f<=g){let v=1/h;u*=v,f*=v,d=u*(u+a*f+2*o)+f*(a*u+f+2*c)+l}else f=s,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;else f=-s,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-a*s+o)),f=u>0?-s:Math.min(Math.max(-s,-c),s),d=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-s,-c),s),d=f*(f+2*c)+l):(u=Math.max(0,-(a*s+o)),f=u>0?s:Math.min(Math.max(-s,-c),s),d=-u*u+f*(f+2*c)+l);else f=a>0?-s:s,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Ih).addScaledVector(jo,f),d}intersectSphere(t,e){qi.subVectors(t.center,this.origin);let n=qi.dot(this.direction),i=qi.dot(qi)-n*n,s=t.radius*t.radius;if(i>s)return null;let a=Math.sqrt(s-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,i=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,i=(t.min.x-f.x)*l),h>=0?(s=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(s=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,qi)!==null}intersectTriangle(t,e,n,i,s){Dh.subVectors(e,t),Yo.subVectors(n,t),Fh.crossVectors(Dh,Yo);let a=this.direction.dot(Fh),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;gs.subVectors(this.origin,t);let c=o*this.direction.dot(Yo.crossVectors(gs,Yo));if(c<0)return null;let l=o*this.direction.dot(Dh.cross(gs));if(l<0||c+l>a)return null;let h=-o*gs.dot(Fh);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},bt=class r{constructor(t,e,n,i,s,a,o,c,l,h,u,f,d,g,v,m){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,c,l,h,u,f,d,g,v,m)}set(t,e,n,i,s,a,o,c,l,h,u,f,d,g,v,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/vr.setFromMatrixColumn(t,0).length(),s=1/vr.setFromMatrixColumn(t,1).length(),a=1/vr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let f=a*h,d=a*u,g=o*h,v=o*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=d+g*l,e[5]=f-v*l,e[9]=-o*c,e[2]=v-f*l,e[6]=g+d*l,e[10]=a*c}else if(t.order==="YXZ"){let f=c*h,d=c*u,g=l*h,v=l*u;e[0]=f+v*o,e[4]=g*o-d,e[8]=a*l,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=d*o-g,e[6]=v+f*o,e[10]=a*c}else if(t.order==="ZXY"){let f=c*h,d=c*u,g=l*h,v=l*u;e[0]=f-v*o,e[4]=-a*u,e[8]=g+d*o,e[1]=d+g*o,e[5]=a*h,e[9]=v-f*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let f=a*h,d=a*u,g=o*h,v=o*u;e[0]=c*h,e[4]=g*l-d,e[8]=f*l+v,e[1]=c*u,e[5]=v*l+f,e[9]=d*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let f=a*c,d=a*l,g=o*c,v=o*l;e[0]=c*h,e[4]=v-f*u,e[8]=g*u+d,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=d*u+g,e[10]=f-v*u}else if(t.order==="XZY"){let f=a*c,d=a*l,g=o*c,v=o*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+v,e[5]=a*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=o*h,e[10]=v*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ib,t,sb)}lookAt(t,e,n){let i=this.elements;return Vn.subVectors(t,e),Vn.lengthSq()===0&&(Vn.z=1),Vn.normalize(),vs.crossVectors(n,Vn),vs.lengthSq()===0&&(Math.abs(n.z)===1?Vn.x+=1e-4:Vn.z+=1e-4,Vn.normalize(),vs.crossVectors(n,Vn)),vs.normalize(),Ko.crossVectors(Vn,vs),i[0]=vs.x,i[4]=Ko.x,i[8]=Vn.x,i[1]=vs.y,i[5]=Ko.y,i[9]=Vn.y,i[2]=vs.z,i[6]=Ko.z,i[10]=Vn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],v=n[6],m=n[10],p=n[14],x=n[3],b=n[7],E=n[11],M=n[15],y=i[0],w=i[4],C=i[8],_=i[12],A=i[1],I=i[5],H=i[9],N=i[13],L=i[2],P=i[6],D=i[10],k=i[14],O=i[3],G=i[7],X=i[11],K=i[15];return s[0]=a*y+o*A+c*L+l*O,s[4]=a*w+o*I+c*P+l*G,s[8]=a*C+o*H+c*D+l*X,s[12]=a*_+o*N+c*k+l*K,s[1]=h*y+u*A+f*L+d*O,s[5]=h*w+u*I+f*P+d*G,s[9]=h*C+u*H+f*D+d*X,s[13]=h*_+u*N+f*k+d*K,s[2]=g*y+v*A+m*L+p*O,s[6]=g*w+v*I+m*P+p*G,s[10]=g*C+v*H+m*D+p*X,s[14]=g*_+v*N+m*k+p*K,s[3]=x*y+b*A+E*L+M*O,s[7]=x*w+b*I+E*P+M*G,s[11]=x*C+b*H+E*D+M*X,s[15]=x*_+b*N+E*k+M*K,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],v=t[7],m=t[11],p=t[15];return g*(+s*c*u-i*l*u-s*o*f+n*l*f+i*o*d-n*c*d)+v*(+e*c*d-e*l*f+s*a*f-i*a*d+i*l*h-s*c*h)+m*(+e*l*u-e*o*d-s*a*u+n*a*d+s*o*h-n*l*h)+p*(-i*o*h-e*c*u+e*o*f+i*a*u-n*a*f+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],v=t[13],m=t[14],p=t[15],x=u*m*l-v*f*l+v*c*d-o*m*d-u*c*p+o*f*p,b=g*f*l-h*m*l-g*c*d+a*m*d+h*c*p-a*f*p,E=h*v*l-g*u*l+g*o*d-a*v*d-h*o*p+a*u*p,M=g*u*c-h*v*c-g*o*f+a*v*f+h*o*m-a*u*m,y=e*x+n*b+i*E+s*M;if(y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/y;return t[0]=x*w,t[1]=(v*f*s-u*m*s-v*i*d+n*m*d+u*i*p-n*f*p)*w,t[2]=(o*m*s-v*c*s+v*i*l-n*m*l-o*i*p+n*c*p)*w,t[3]=(u*c*s-o*f*s-u*i*l+n*f*l+o*i*d-n*c*d)*w,t[4]=b*w,t[5]=(h*m*s-g*f*s+g*i*d-e*m*d-h*i*p+e*f*p)*w,t[6]=(g*c*s-a*m*s-g*i*l+e*m*l+a*i*p-e*c*p)*w,t[7]=(a*f*s-h*c*s+h*i*l-e*f*l-a*i*d+e*c*d)*w,t[8]=E*w,t[9]=(g*u*s-h*v*s-g*n*d+e*v*d+h*n*p-e*u*p)*w,t[10]=(a*v*s-g*o*s+g*n*l-e*v*l-a*n*p+e*o*p)*w,t[11]=(h*o*s-a*u*s-h*n*l+e*u*l+a*n*d-e*o*d)*w,t[12]=M*w,t[13]=(h*v*i-g*u*i+g*n*f-e*v*f-h*n*m+e*u*m)*w,t[14]=(g*o*i-a*v*i-g*n*c+e*v*c+a*n*m-e*o*m)*w,t[15]=(a*u*i-h*o*i+h*n*c-e*u*c-a*n*f+e*o*f)*w,this}scale(t){let e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,a=t.x,o=t.y,c=t.z,l=s*a,h=s*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,a){return this.set(1,n,s,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,s=e._x,a=e._y,o=e._z,c=e._w,l=s+s,h=a+a,u=o+o,f=s*l,d=s*h,g=s*u,v=a*h,m=a*u,p=o*u,x=c*l,b=c*h,E=c*u,M=n.x,y=n.y,w=n.z;return i[0]=(1-(v+p))*M,i[1]=(d+E)*M,i[2]=(g-b)*M,i[3]=0,i[4]=(d-E)*y,i[5]=(1-(f+p))*y,i[6]=(m+x)*y,i[7]=0,i[8]=(g+b)*w,i[9]=(m-x)*w,i[10]=(1-(f+v))*w,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,s=vr.set(i[0],i[1],i[2]).length(),a=vr.set(i[4],i[5],i[6]).length(),o=vr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],ui.copy(this);let l=1/s,h=1/a,u=1/o;return ui.elements[0]*=l,ui.elements[1]*=l,ui.elements[2]*=l,ui.elements[4]*=h,ui.elements[5]*=h,ui.elements[6]*=h,ui.elements[8]*=u,ui.elements[9]*=u,ui.elements[10]*=u,e.setFromRotationMatrix(ui),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,i,s,a,o=$i){let c=this.elements,l=2*s/(e-t),h=2*s/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i),d,g;if(o===$i)d=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Ac)d=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,s,a,o=$i){let c=this.elements,l=1/(e-t),h=1/(n-i),u=1/(a-s),f=(e+t)*l,d=(n+i)*h,g,v;if(o===$i)g=(a+s)*u,v=-2*u;else if(o===Ac)g=s*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},vr=new T,ui=new bt,ib=new T(0,0,0),sb=new T(1,1,1),vs=new T,Ko=new T,Vn=new T,Bp=new bt,Gp=new Wt,Li=class r{constructor(t=0,e=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin($e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin($e(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-$e(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin($e(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-$e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Bp.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Bp,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Gp.setFromEuler(this),this.setFromQuaternion(Gp,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Li.DEFAULT_ORDER="XYZ";var ja=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},rb=0,Vp=new T,xr=new Wt,Xi=new bt,Jo=new T,Pa=new T,ab=new T,ob=new Wt,Wp=new T(1,0,0),qp=new T(0,1,0),Xp=new T(0,0,1),cb={type:"added"},lb={type:"removed"},Re=class r extends ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rb++}),this.uuid=pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new T,e=new Li,n=new Wt,i=new T(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new bt},normalMatrix:{value:new ce}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ja,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return xr.setFromAxisAngle(t,e),this.quaternion.multiply(xr),this}rotateOnWorldAxis(t,e){return xr.setFromAxisAngle(t,e),this.quaternion.premultiply(xr),this}rotateX(t){return this.rotateOnAxis(Wp,t)}rotateY(t){return this.rotateOnAxis(qp,t)}rotateZ(t){return this.rotateOnAxis(Xp,t)}translateOnAxis(t,e){return Vp.copy(t).applyQuaternion(this.quaternion),this.position.add(Vp.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Wp,t)}translateY(t){return this.translateOnAxis(qp,t)}translateZ(t){return this.translateOnAxis(Xp,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Xi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Jo.copy(t):Jo.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Pa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xi.lookAt(Pa,Jo,this.up):Xi.lookAt(Jo,Pa,this.up),this.quaternion.setFromRotationMatrix(Xi),i&&(Xi.extractRotation(i.matrixWorld),xr.setFromRotationMatrix(Xi),this.quaternion.premultiply(xr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(cb)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(lb)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Xi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Xi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Xi),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pa,t,ab),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pa,ob,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++){let s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let i=this.children;for(let s=0,a=i.length;s<a;s++){let o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];s(t.shapes,u)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(t.materials,this.material[c]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];i.animations.push(s(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),d=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};Re.DEFAULT_UP=new T(0,1,0);Re.DEFAULT_MATRIX_AUTO_UPDATE=!0;Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var fi=new T,ji=new T,Hh=new T,Yi=new T,br=new T,yr=new T,jp=new T,Nh=new T,Uh=new T,kh=new T,Zo=!1,Ys=class r{constructor(t=new T,e=new T,n=new T){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),fi.subVectors(t,e),i.cross(fi);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){fi.subVectors(i,e),ji.subVectors(n,e),Hh.subVectors(t,e);let a=fi.dot(fi),o=fi.dot(ji),c=fi.dot(Hh),l=ji.dot(ji),h=ji.dot(Hh),u=a*l-o*o;if(u===0)return s.set(0,0,0),null;let f=1/u,d=(l*c-o*h)*f,g=(a*h-o*c)*f;return s.set(1-d-g,g,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Yi)===null?!1:Yi.x>=0&&Yi.y>=0&&Yi.x+Yi.y<=1}static getUV(t,e,n,i,s,a,o,c){return Zo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Zo=!0),this.getInterpolation(t,e,n,i,s,a,o,c)}static getInterpolation(t,e,n,i,s,a,o,c){return this.getBarycoord(t,e,n,i,Yi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Yi.x),c.addScaledVector(a,Yi.y),c.addScaledVector(o,Yi.z),c)}static isFrontFacing(t,e,n,i){return fi.subVectors(n,e),ji.subVectors(t,e),fi.cross(ji).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return fi.subVectors(this.c,this.b),ji.subVectors(this.a,this.b),fi.cross(ji).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,s){return Zo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Zo=!0),r.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}getInterpolation(t,e,n,i,s){return r.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,a,o;br.subVectors(i,n),yr.subVectors(s,n),Nh.subVectors(t,n);let c=br.dot(Nh),l=yr.dot(Nh);if(c<=0&&l<=0)return e.copy(n);Uh.subVectors(t,i);let h=br.dot(Uh),u=yr.dot(Uh);if(h>=0&&u<=h)return e.copy(i);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(br,a);kh.subVectors(t,s);let d=br.dot(kh),g=yr.dot(kh);if(g>=0&&d<=g)return e.copy(s);let v=d*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(yr,o);let m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return jp.subVectors(s,i),o=(u-h)/(u-h+(d-g)),e.copy(i).addScaledVector(jp,o);let p=1/(m+v+f);return a=v*p,o=f*p,e.copy(n).addScaledVector(br,a).addScaledVector(yr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},i0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xs={h:0,s:0,l:0},Qo={h:0,s:0,l:0};function Oh(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var et=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ue){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,pe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=pe.workingColorSpace){return this.r=t,this.g=e,this.b=n,pe.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=pe.workingColorSpace){if(t=lf(t,1),e=$e(e,0,1),n=$e(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=Oh(a,s,t+1/3),this.g=Oh(a,s,t),this.b=Oh(a,s,t-1/3)}return pe.toWorkingColorSpace(this,i),this}setStyle(t,e=ue){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ue){let n=i0[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=kr(t.r),this.g=kr(t.g),this.b=kr(t.b),this}copyLinearToSRGB(t){return this.r=Ah(t.r),this.g=Ah(t.g),this.b=Ah(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ue){return pe.fromWorkingColorSpace(Mn.copy(this),t),Math.round($e(Mn.r*255,0,255))*65536+Math.round($e(Mn.g*255,0,255))*256+Math.round($e(Mn.b*255,0,255))}getHexString(t=ue){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=pe.workingColorSpace){pe.fromWorkingColorSpace(Mn.copy(this),e);let n=Mn.r,i=Mn.g,s=Mn.b,a=Math.max(n,i,s),o=Math.min(n,i,s),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(i-s)/u+(i<s?6:0);break;case i:c=(s-n)/u+2;break;case s:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=pe.workingColorSpace){return pe.fromWorkingColorSpace(Mn.copy(this),e),t.r=Mn.r,t.g=Mn.g,t.b=Mn.b,t}getStyle(t=ue){pe.fromWorkingColorSpace(Mn.copy(this),t);let e=Mn.r,n=Mn.g,i=Mn.b;return t!==ue?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(xs),this.setHSL(xs.h+t,xs.s+e,xs.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(xs),t.getHSL(Qo);let n=za(xs.h,Qo.h,e),i=za(xs.s,Qo.s,e),s=za(xs.l,Qo.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Mn=new et;et.NAMES=i0;var hb=0,bn=class extends ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hb++}),this.uuid=pi(),this.name="",this.type="Material",this.blending=Ur,this.side=Ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=iu,this.blendDst=su,this.blendEquation=Zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=_c,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fr,this.stencilZFail=fr,this.stencilZPass=fr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ur&&(n.blending=this.blending),this.side!==Ci&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==iu&&(n.blendSrc=this.blendSrc),this.blendDst!==su&&(n.blendDst=this.blendDst),this.blendEquation!==Zi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==_c&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fp&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==fr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==fr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let a=[];for(let o in s){let c=s[o];delete c.metadata,a.push(c)}return a}if(e){let s=i(t.textures),a=i(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},qe=class extends bn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Qu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ze=new T,$o=new rt,Mt=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ou,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Qi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)$o.fromBufferAttribute(this,e),$o.applyMatrix3(t),this.setXY(e,$o.x,$o.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyMatrix3(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyMatrix4(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyNormalMatrix(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.transformDirection(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Si(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ee(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Si(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Si(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Si(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Si(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array),i=Ee(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array),i=Ee(i,this.array),s=Ee(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ou&&(t.usage=this.usage),t}};var Ic=class extends Mt{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Dc=class extends Mt{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var wt=class extends Mt{constructor(t,e,n){super(new Float32Array(t),e,n)}};var ub=0,$n=new bt,zh=new Re,_r=new T,Wn=new Ge,La=new Ge,ln=new T,Rt=class r extends ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ub++}),this.uuid=pi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(n0(t)?Dc:Ic)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new ce().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return $n.makeRotationFromQuaternion(t),this.applyMatrix4($n),this}rotateX(t){return $n.makeRotationX(t),this.applyMatrix4($n),this}rotateY(t){return $n.makeRotationY(t),this.applyMatrix4($n),this}rotateZ(t){return $n.makeRotationZ(t),this.applyMatrix4($n),this}translate(t,e,n){return $n.makeTranslation(t,e,n),this.applyMatrix4($n),this}scale(t,e,n){return $n.makeScale(t,e,n),this.applyMatrix4($n),this}lookAt(t){return zh.lookAt(t),zh.updateMatrix(),this.applyMatrix4(zh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_r).negate(),this.translate(_r.x,_r.y,_r.z),this}setFromPoints(t){let e=[];for(let n=0,i=t.length;n<i;n++){let s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new wt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ge);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];Wn.setFromBufferAttribute(s),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,Wn.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,Wn.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(Wn.min),this.boundingBox.expandByPoint(Wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new T,1/0);return}if(t){let n=this.boundingSphere.center;if(Wn.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){let o=e[s];La.setFromBufferAttribute(o),this.morphTargetsRelative?(ln.addVectors(Wn.min,La.min),Wn.expandByPoint(ln),ln.addVectors(Wn.max,La.max),Wn.expandByPoint(ln)):(Wn.expandByPoint(La.min),Wn.expandByPoint(La.max))}Wn.getCenter(n);let i=0;for(let s=0,a=t.count;s<a;s++)ln.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(ln));if(e)for(let s=0,a=e.length;s<a;s++){let o=e[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)ln.fromBufferAttribute(o,l),c&&(_r.fromBufferAttribute(t,l),ln.add(_r)),i=Math.max(i,n.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.array,i=e.position.array,s=e.normal.array,a=e.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mt(new Float32Array(4*o),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let A=0;A<o;A++)l[A]=new T,h[A]=new T;let u=new T,f=new T,d=new T,g=new rt,v=new rt,m=new rt,p=new T,x=new T;function b(A,I,H){u.fromArray(i,A*3),f.fromArray(i,I*3),d.fromArray(i,H*3),g.fromArray(a,A*2),v.fromArray(a,I*2),m.fromArray(a,H*2),f.sub(u),d.sub(u),v.sub(g),m.sub(g);let N=1/(v.x*m.y-m.x*v.y);isFinite(N)&&(p.copy(f).multiplyScalar(m.y).addScaledVector(d,-v.y).multiplyScalar(N),x.copy(d).multiplyScalar(v.x).addScaledVector(f,-m.x).multiplyScalar(N),l[A].add(p),l[I].add(p),l[H].add(p),h[A].add(x),h[I].add(x),h[H].add(x))}let E=this.groups;E.length===0&&(E=[{start:0,count:n.length}]);for(let A=0,I=E.length;A<I;++A){let H=E[A],N=H.start,L=H.count;for(let P=N,D=N+L;P<D;P+=3)b(n[P+0],n[P+1],n[P+2])}let M=new T,y=new T,w=new T,C=new T;function _(A){w.fromArray(s,A*3),C.copy(w);let I=l[A];M.copy(I),M.sub(w.multiplyScalar(w.dot(I))).normalize(),y.crossVectors(C,I);let N=y.dot(h[A])<0?-1:1;c[A*4]=M.x,c[A*4+1]=M.y,c[A*4+2]=M.z,c[A*4+3]=N}for(let A=0,I=E.length;A<I;++A){let H=E[A],N=H.start,L=H.count;for(let P=N,D=N+L;P<D;P+=3)_(n[P+0]),_(n[P+1]),_(n[P+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Mt(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new T,s=new T,a=new T,o=new T,c=new T,l=new T,h=new T,u=new T;if(t)for(let f=0,d=t.count;f<d;f+=3){let g=t.getX(f+0),v=t.getX(f+1),m=t.getX(f+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ln.fromBufferAttribute(t,e),ln.normalize(),t.setXYZ(e,ln.x,ln.y,ln.z)}toNonIndexed(){function t(o,c){let l=o.array,h=o.itemSize,u=o.normalized,f=new l.constructor(c.length*h),d=0,g=0;for(let v=0,m=c.length;v<m;v++){o.isInterleavedBufferAttribute?d=c[v]*o.data.stride+o.offset:d=c[v]*h;for(let p=0;p<h;p++)f[g++]=l[d++]}return new Mt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,n=this.index.array,i=this.attributes;for(let o in i){let c=i[o],l=t(c,n);e.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let c=[],l=s[o];for(let h=0,u=l.length;h<u;h++){let f=l[h],d=t(f,n);c.push(d)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let i={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let d=l[u];h.push(d.toJSON(t.data))}h.length>0&&(i[c]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(e))}let s=t.morphAttributes;for(let l in s){let h=[],u=s[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Yp=new bt,Ws=new $s,tc=new Xn,Kp=new T,Mr=new T,Er=new T,wr=new T,Bh=new T,ec=new T,nc=new rt,ic=new rt,sc=new rt,Jp=new T,Zp=new T,Qp=new T,rc=new T,ac=new T,Ft=class extends Re{constructor(t=new Rt,e=new qe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let o=this.morphTargetInfluences;if(s&&o){ec.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=o[c],u=s[c];h!==0&&(Bh.fromBufferAttribute(u,t),a?ec.addScaledVector(Bh,h):ec.addScaledVector(Bh.sub(e),h))}e.add(ec)}return e}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),tc.copy(n.boundingSphere),tc.applyMatrix4(s),Ws.copy(t.ray).recast(t.near),!(tc.containsPoint(Ws.origin)===!1&&(Ws.intersectSphere(tc,Kp)===null||Ws.origin.distanceToSquared(Kp)>(t.far-t.near)**2))&&(Yp.copy(s).invert(),Ws.copy(t.ray).applyMatrix4(Yp),!(n.boundingBox!==null&&Ws.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ws)))}_computeIntersections(t,e,n){let i,s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){let m=f[g],p=a[m.materialIndex],x=Math.max(m.start,d.start),b=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let E=x,M=b;E<M;E+=3){let y=o.getX(E),w=o.getX(E+1),C=o.getX(E+2);i=oc(this,p,t,n,l,h,u,y,w,C),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){let x=o.getX(m),b=o.getX(m+1),E=o.getX(m+2);i=oc(this,a,t,n,l,h,u,x,b,E),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){let m=f[g],p=a[m.materialIndex],x=Math.max(m.start,d.start),b=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let E=x,M=b;E<M;E+=3){let y=E,w=E+1,C=E+2;i=oc(this,p,t,n,l,h,u,y,w,C),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,d.start),v=Math.min(c.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){let x=m,b=m+1,E=m+2;i=oc(this,a,t,n,l,h,u,x,b,E),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function fb(r,t,e,n,i,s,a,o){let c;if(t.side===vn?c=n.intersectTriangle(a,s,i,!0,o):c=n.intersectTriangle(i,s,a,t.side===Ci,o),c===null)return null;ac.copy(o),ac.applyMatrix4(r.matrixWorld);let l=e.ray.origin.distanceTo(ac);return l<e.near||l>e.far?null:{distance:l,point:ac.clone(),object:r}}function oc(r,t,e,n,i,s,a,o,c,l){r.getVertexPosition(o,Mr),r.getVertexPosition(c,Er),r.getVertexPosition(l,wr);let h=fb(r,t,e,n,Mr,Er,wr,rc);if(h){i&&(nc.fromBufferAttribute(i,o),ic.fromBufferAttribute(i,c),sc.fromBufferAttribute(i,l),h.uv=Ys.getInterpolation(rc,Mr,Er,wr,nc,ic,sc,new rt)),s&&(nc.fromBufferAttribute(s,o),ic.fromBufferAttribute(s,c),sc.fromBufferAttribute(s,l),h.uv1=Ys.getInterpolation(rc,Mr,Er,wr,nc,ic,sc,new rt),h.uv2=h.uv1),a&&(Jp.fromBufferAttribute(a,o),Zp.fromBufferAttribute(a,c),Qp.fromBufferAttribute(a,l),h.normal=Ys.getInterpolation(rc,Mr,Er,wr,Jp,Zp,Qp,new T),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new T,materialIndex:0};Ys.getNormal(Mr,Er,wr,u.normal),h.face=u}return h}var he=class r extends Rt{constructor(t=1,e=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};let o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);let c=[],l=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,n,e,t,a,s,0),g("z","y","x",1,-1,n,e,-t,a,s,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new wt(l,3)),this.setAttribute("normal",new wt(h,3)),this.setAttribute("uv",new wt(u,2));function g(v,m,p,x,b,E,M,y,w,C,_){let A=E/w,I=M/C,H=E/2,N=M/2,L=y/2,P=w+1,D=C+1,k=0,O=0,G=new T;for(let X=0;X<D;X++){let K=X*I-N;for(let it=0;it<P;it++){let z=it*A-H;G[v]=z*x,G[m]=K*b,G[p]=L,l.push(G.x,G.y,G.z),G[v]=0,G[m]=0,G[p]=y>0?1:-1,h.push(G.x,G.y,G.z),u.push(it/w),u.push(1-X/C),k+=1}}for(let X=0;X<C;X++)for(let K=0;K<w;K++){let it=f+K+P*X,z=f+K+P*(X+1),Q=f+(K+1)+P*(X+1),lt=f+(K+1)+P*X;c.push(it,z,lt),c.push(z,Q,lt),O+=6}o.addGroup(d,O,_),d+=O,f+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function qr(r){let t={};for(let e in r){t[e]={};for(let n in r[e]){let i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Dn(r){let t={};for(let e=0;e<r.length;e++){let n=qr(r[e]);for(let i in n)t[i]=n[i]}return t}function db(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function s0(r){return r.getRenderTarget()===null?r.outputColorSpace:pe.workingColorSpace}var pb={clone:qr,merge:Dn},mb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ye=class extends bn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mb,this.fragmentShader=gb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=qr(t.uniforms),this.uniformsGroups=db(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Fc=class extends Re{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt,this.coordinateSystem=$i}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ne=class extends Fc{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Wr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Oa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Wr*2*Math.atan(Math.tan(Oa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Oa*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*i/c,e-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Tr=-90,Sr=1,fu=class extends Re{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Ne(Tr,Sr,t,e);i.layers=this.layers,this.add(i);let s=new Ne(Tr,Sr,t,e);s.layers=this.layers,this.add(s);let a=new Ne(Tr,Sr,t,e);a.layers=this.layers,this.add(a);let o=new Ne(Tr,Sr,t,e);o.layers=this.layers,this.add(o);let c=new Ne(Tr,Sr,t,e);c.layers=this.layers,this.add(c);let l=new Ne(Tr,Sr,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,a,o,c]=e;for(let l of e)this.remove(l);if(t===$i)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ac)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Hc=class extends xn{constructor(t,e,n,i,s,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:zr,super(t,e,n,i,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},du=class extends hn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(Ba("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Zs?ue:En),this.texture=new Hc(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Qe}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new he(5,5,5),s=new ye({name:"CubemapFromEquirect",uniforms:qr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:vn,blending:ys});s.uniforms.tEquirect.value=e;let a=new Ft(i,s),o=e.minFilter;return e.minFilter===Pi&&(e.minFilter=Qe),new fu(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){let s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(s)}},Gh=new T,vb=new T,xb=new ce,di=class{constructor(t=new T(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Gh.subVectors(n,e).cross(vb.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Gh),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||xb.getNormalMatrix(t),i=this.coplanarPoint(Gh).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},qs=new Xn,cc=new T,Ya=class{constructor(t=new di,e=new di,n=new di,i=new di,s=new di,a=new di){this.planes=[t,e,n,i,s,a]}set(t,e,n,i,s,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=$i){let n=this.planes,i=t.elements,s=i[0],a=i[1],o=i[2],c=i[3],l=i[4],h=i[5],u=i[6],f=i[7],d=i[8],g=i[9],v=i[10],m=i[11],p=i[12],x=i[13],b=i[14],E=i[15];if(n[0].setComponents(c-s,f-l,m-d,E-p).normalize(),n[1].setComponents(c+s,f+l,m+d,E+p).normalize(),n[2].setComponents(c+a,f+h,m+g,E+x).normalize(),n[3].setComponents(c-a,f-h,m-g,E-x).normalize(),n[4].setComponents(c-o,f-u,m-v,E-b).normalize(),e===$i)n[5].setComponents(c+o,f+u,m+v,E+b).normalize();else if(e===Ac)n[5].setComponents(o,u,v,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),qs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),qs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(qs)}intersectsSprite(t){return qs.center.set(0,0,0),qs.radius=.7071067811865476,qs.applyMatrix4(t.matrixWorld),this.intersectsSphere(qs)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(cc.x=i.normal.x>0?t.max.x:t.min.x,cc.y=i.normal.y>0?t.max.y:t.min.y,cc.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(cc)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function r0(){let r=null,t=!1,e=null,n=null;function i(s,a){e(s,a),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function bb(r,t){let e=t.isWebGL2,n=new WeakMap;function i(l,h){let u=l.array,f=l.usage,d=u.byteLength,g=r.createBuffer();r.bindBuffer(h,g),r.bufferData(h,u,f),l.onUploadCallback();let v;if(u instanceof Float32Array)v=r.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)v=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=r.UNSIGNED_SHORT;else if(u instanceof Int16Array)v=r.SHORT;else if(u instanceof Uint32Array)v=r.UNSIGNED_INT;else if(u instanceof Int32Array)v=r.INT;else if(u instanceof Int8Array)v=r.BYTE;else if(u instanceof Uint8Array)v=r.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)v=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:v,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:d}}function s(l,h,u){let f=h.array,d=h._updateRange,g=h.updateRanges;if(r.bindBuffer(u,l),d.count===-1&&g.length===0&&r.bufferSubData(u,0,f),g.length!==0){for(let v=0,m=g.length;v<m;v++){let p=g[v];e?r.bufferSubData(u,p.start*f.BYTES_PER_ELEMENT,f,p.start,p.count):r.bufferSubData(u,p.start*f.BYTES_PER_ELEMENT,f.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}d.count!==-1&&(e?r.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):r.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),h.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);h&&(r.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=n.get(l);if(u===void 0)n.set(l,i(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(u.buffer,l,h),u.version=l.version}}return{get:a,remove:o,update:c}}var mi=class r extends Rt{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,a=e/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,u=t/o,f=e/c,d=[],g=[],v=[],m=[];for(let p=0;p<h;p++){let x=p*f-a;for(let b=0;b<l;b++){let E=b*u-s;g.push(E,-x,0),v.push(0,0,1),m.push(b/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let x=0;x<o;x++){let b=x+l*p,E=x+l*(p+1),M=x+1+l*(p+1),y=x+1+l*p;d.push(b,E,y),d.push(E,M,y)}this.setIndex(d),this.setAttribute("position",new wt(g,3)),this.setAttribute("normal",new wt(v,3)),this.setAttribute("uv",new wt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}},yb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_b=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Mb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Eb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wb=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Tb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ab=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Rb=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Cb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Pb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Lb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ib=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Db=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Fb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Hb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Nb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ub=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ob=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Bb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Gb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Vb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Wb=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,qb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Xb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Yb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Kb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zb=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Qb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,$b=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ty=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ey=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ny=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,iy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ry=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ay=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,oy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,cy=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,ly=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,uy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,dy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,py=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,my=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vy=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,by=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,yy=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,_y=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,My=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ey=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wy=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ty=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Sy=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ay=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ry=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Cy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Py=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ly=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Iy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Dy=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Hy=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Ny=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Uy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ky=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Oy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,By=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Gy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Vy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Wy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Yy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ky=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Zy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$y=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,t_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,e_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,n_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,i_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,s_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,r_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,a_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,o_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,c_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,l_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,h_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,u_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,f_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,d_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,p_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,m_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,g_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,v_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,x_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,b_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,y_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,__=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,M_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,w_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,T_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,S_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,A_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,R_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,C_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,P_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,L_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,I_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,D_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,F_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,H_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,N_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,k_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,O_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,z_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,B_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,G_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,V_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,W_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,q_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,X_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,j_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Y_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,K_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,J_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Z_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Q_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Jt={alphahash_fragment:yb,alphahash_pars_fragment:_b,alphamap_fragment:Mb,alphamap_pars_fragment:Eb,alphatest_fragment:wb,alphatest_pars_fragment:Tb,aomap_fragment:Sb,aomap_pars_fragment:Ab,batching_pars_vertex:Rb,batching_vertex:Cb,begin_vertex:Pb,beginnormal_vertex:Lb,bsdfs:Ib,iridescence_fragment:Db,bumpmap_pars_fragment:Fb,clipping_planes_fragment:Hb,clipping_planes_pars_fragment:Nb,clipping_planes_pars_vertex:Ub,clipping_planes_vertex:kb,color_fragment:Ob,color_pars_fragment:zb,color_pars_vertex:Bb,color_vertex:Gb,common:Vb,cube_uv_reflection_fragment:Wb,defaultnormal_vertex:qb,displacementmap_pars_vertex:Xb,displacementmap_vertex:jb,emissivemap_fragment:Yb,emissivemap_pars_fragment:Kb,colorspace_fragment:Jb,colorspace_pars_fragment:Zb,envmap_fragment:Qb,envmap_common_pars_fragment:$b,envmap_pars_fragment:ty,envmap_pars_vertex:ey,envmap_physical_pars_fragment:dy,envmap_vertex:ny,fog_vertex:iy,fog_pars_vertex:sy,fog_fragment:ry,fog_pars_fragment:ay,gradientmap_pars_fragment:oy,lightmap_fragment:cy,lightmap_pars_fragment:ly,lights_lambert_fragment:hy,lights_lambert_pars_fragment:uy,lights_pars_begin:fy,lights_toon_fragment:py,lights_toon_pars_fragment:my,lights_phong_fragment:gy,lights_phong_pars_fragment:vy,lights_physical_fragment:xy,lights_physical_pars_fragment:by,lights_fragment_begin:yy,lights_fragment_maps:_y,lights_fragment_end:My,logdepthbuf_fragment:Ey,logdepthbuf_pars_fragment:wy,logdepthbuf_pars_vertex:Ty,logdepthbuf_vertex:Sy,map_fragment:Ay,map_pars_fragment:Ry,map_particle_fragment:Cy,map_particle_pars_fragment:Py,metalnessmap_fragment:Ly,metalnessmap_pars_fragment:Iy,morphcolor_vertex:Dy,morphnormal_vertex:Fy,morphtarget_pars_vertex:Hy,morphtarget_vertex:Ny,normal_fragment_begin:Uy,normal_fragment_maps:ky,normal_pars_fragment:Oy,normal_pars_vertex:zy,normal_vertex:By,normalmap_pars_fragment:Gy,clearcoat_normal_fragment_begin:Vy,clearcoat_normal_fragment_maps:Wy,clearcoat_pars_fragment:qy,iridescence_pars_fragment:Xy,opaque_fragment:jy,packing:Yy,premultiplied_alpha_fragment:Ky,project_vertex:Jy,dithering_fragment:Zy,dithering_pars_fragment:Qy,roughnessmap_fragment:$y,roughnessmap_pars_fragment:t_,shadowmap_pars_fragment:e_,shadowmap_pars_vertex:n_,shadowmap_vertex:i_,shadowmask_pars_fragment:s_,skinbase_vertex:r_,skinning_pars_vertex:a_,skinning_vertex:o_,skinnormal_vertex:c_,specularmap_fragment:l_,specularmap_pars_fragment:h_,tonemapping_fragment:u_,tonemapping_pars_fragment:f_,transmission_fragment:d_,transmission_pars_fragment:p_,uv_pars_fragment:m_,uv_pars_vertex:g_,uv_vertex:v_,worldpos_vertex:x_,background_vert:b_,background_frag:y_,backgroundCube_vert:__,backgroundCube_frag:M_,cube_vert:E_,cube_frag:w_,depth_vert:T_,depth_frag:S_,distanceRGBA_vert:A_,distanceRGBA_frag:R_,equirect_vert:C_,equirect_frag:P_,linedashed_vert:L_,linedashed_frag:I_,meshbasic_vert:D_,meshbasic_frag:F_,meshlambert_vert:H_,meshlambert_frag:N_,meshmatcap_vert:U_,meshmatcap_frag:k_,meshnormal_vert:O_,meshnormal_frag:z_,meshphong_vert:B_,meshphong_frag:G_,meshphysical_vert:V_,meshphysical_frag:W_,meshtoon_vert:q_,meshtoon_frag:X_,points_vert:j_,points_frag:Y_,shadow_vert:K_,shadow_frag:J_,sprite_vert:Z_,sprite_frag:Q_},mt={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ce}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ce},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0},uvTransform:{value:new ce}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}}},Ti={basic:{uniforms:Dn([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:Dn([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new et(0)}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:Dn([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:Dn([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:Dn([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new et(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:Dn([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:Dn([mt.points,mt.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:Dn([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:Dn([mt.common,mt.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:Dn([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:Dn([mt.sprite,mt.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distanceRGBA:{uniforms:Dn([mt.common,mt.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distanceRGBA_vert,fragmentShader:Jt.distanceRGBA_frag},shadow:{uniforms:Dn([mt.lights,mt.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};Ti.physical={uniforms:Dn([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ce},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ce},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ce},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ce},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ce},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ce},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ce}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};var lc={r:0,b:0,g:0};function $_(r,t,e,n,i,s,a){let o=new et(0),c=s===!0?0:1,l,h,u=null,f=0,d=null;function g(m,p){let x=!1,b=p.isScene===!0?p.background:null;b&&b.isTexture&&(b=(p.backgroundBlurriness>0?e:t).get(b)),b===null?v(o,c):b&&b.isColor&&(v(b,1),x=!0);let E=r.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||x)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),b&&(b.isCubeTexture||b.mapping===Zc)?(h===void 0&&(h=new Ft(new he(1,1,1),new ye({name:"BackgroundCubeMaterial",uniforms:qr(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(M,y,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=pe.getTransfer(b.colorSpace)!==He,(u!==b||f!==b.version||d!==r.toneMapping)&&(h.material.needsUpdate=!0,u=b,f=b.version,d=r.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Ft(new mi(2,2),new ye({name:"BackgroundMaterial",uniforms:qr(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:Ci,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=pe.getTransfer(b.colorSpace)!==He,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||f!==b.version||d!==r.toneMapping)&&(l.material.needsUpdate=!0,u=b,f=b.version,d=r.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function v(m,p){m.getRGB(lc,s0(r)),n.buffers.color.setClear(lc.r,lc.g,lc.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),c=p,v(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,v(o,c)},render:g}}function t1(r,t,e,n){let i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},c=m(null),l=c,h=!1;function u(L,P,D,k,O){let G=!1;if(a){let X=v(k,D,P);l!==X&&(l=X,d(l.object)),G=p(L,k,D,O),G&&x(L,k,D,O)}else{let X=P.wireframe===!0;(l.geometry!==k.id||l.program!==D.id||l.wireframe!==X)&&(l.geometry=k.id,l.program=D.id,l.wireframe=X,G=!0)}O!==null&&e.update(O,r.ELEMENT_ARRAY_BUFFER),(G||h)&&(h=!1,C(L,P,D,k),O!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function f(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function d(L){return n.isWebGL2?r.bindVertexArray(L):s.bindVertexArrayOES(L)}function g(L){return n.isWebGL2?r.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function v(L,P,D){let k=D.wireframe===!0,O=o[L.id];O===void 0&&(O={},o[L.id]=O);let G=O[P.id];G===void 0&&(G={},O[P.id]=G);let X=G[k];return X===void 0&&(X=m(f()),G[k]=X),X}function m(L){let P=[],D=[],k=[];for(let O=0;O<i;O++)P[O]=0,D[O]=0,k[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:D,attributeDivisors:k,object:L,attributes:{},index:null}}function p(L,P,D,k){let O=l.attributes,G=P.attributes,X=0,K=D.getAttributes();for(let it in K)if(K[it].location>=0){let Q=O[it],lt=G[it];if(lt===void 0&&(it==="instanceMatrix"&&L.instanceMatrix&&(lt=L.instanceMatrix),it==="instanceColor"&&L.instanceColor&&(lt=L.instanceColor)),Q===void 0||Q.attribute!==lt||lt&&Q.data!==lt.data)return!0;X++}return l.attributesNum!==X||l.index!==k}function x(L,P,D,k){let O={},G=P.attributes,X=0,K=D.getAttributes();for(let it in K)if(K[it].location>=0){let Q=G[it];Q===void 0&&(it==="instanceMatrix"&&L.instanceMatrix&&(Q=L.instanceMatrix),it==="instanceColor"&&L.instanceColor&&(Q=L.instanceColor));let lt={};lt.attribute=Q,Q&&Q.data&&(lt.data=Q.data),O[it]=lt,X++}l.attributes=O,l.attributesNum=X,l.index=k}function b(){let L=l.newAttributes;for(let P=0,D=L.length;P<D;P++)L[P]=0}function E(L){M(L,0)}function M(L,P){let D=l.newAttributes,k=l.enabledAttributes,O=l.attributeDivisors;D[L]=1,k[L]===0&&(r.enableVertexAttribArray(L),k[L]=1),O[L]!==P&&((n.isWebGL2?r:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,P),O[L]=P)}function y(){let L=l.newAttributes,P=l.enabledAttributes;for(let D=0,k=P.length;D<k;D++)P[D]!==L[D]&&(r.disableVertexAttribArray(D),P[D]=0)}function w(L,P,D,k,O,G,X){X===!0?r.vertexAttribIPointer(L,P,D,O,G):r.vertexAttribPointer(L,P,D,k,O,G)}function C(L,P,D,k){if(n.isWebGL2===!1&&(L.isInstancedMesh||k.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;b();let O=k.attributes,G=D.getAttributes(),X=P.defaultAttributeValues;for(let K in G){let it=G[K];if(it.location>=0){let z=O[K];if(z===void 0&&(K==="instanceMatrix"&&L.instanceMatrix&&(z=L.instanceMatrix),K==="instanceColor"&&L.instanceColor&&(z=L.instanceColor)),z!==void 0){let Q=z.normalized,lt=z.itemSize,ht=e.get(z);if(ht===void 0)continue;let yt=ht.buffer,Nt=ht.type,qt=ht.bytesPerElement,It=n.isWebGL2===!0&&(Nt===r.INT||Nt===r.UNSIGNED_INT||z.gpuType===Xm);if(z.isInterleavedBufferAttribute){let ne=z.data,Y=ne.stride,Oe=z.offset;if(ne.isInstancedInterleavedBuffer){for(let Ut=0;Ut<it.locationSize;Ut++)M(it.location+Ut,ne.meshPerAttribute);L.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Ut=0;Ut<it.locationSize;Ut++)E(it.location+Ut);r.bindBuffer(r.ARRAY_BUFFER,yt);for(let Ut=0;Ut<it.locationSize;Ut++)w(it.location+Ut,lt/it.locationSize,Nt,Q,Y*qt,(Oe+lt/it.locationSize*Ut)*qt,It)}else{if(z.isInstancedBufferAttribute){for(let ne=0;ne<it.locationSize;ne++)M(it.location+ne,z.meshPerAttribute);L.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let ne=0;ne<it.locationSize;ne++)E(it.location+ne);r.bindBuffer(r.ARRAY_BUFFER,yt);for(let ne=0;ne<it.locationSize;ne++)w(it.location+ne,lt/it.locationSize,Nt,Q,lt*qt,lt/it.locationSize*ne*qt,It)}}else if(X!==void 0){let Q=X[K];if(Q!==void 0)switch(Q.length){case 2:r.vertexAttrib2fv(it.location,Q);break;case 3:r.vertexAttrib3fv(it.location,Q);break;case 4:r.vertexAttrib4fv(it.location,Q);break;default:r.vertexAttrib1fv(it.location,Q)}}}}y()}function _(){H();for(let L in o){let P=o[L];for(let D in P){let k=P[D];for(let O in k)g(k[O].object),delete k[O];delete P[D]}delete o[L]}}function A(L){if(o[L.id]===void 0)return;let P=o[L.id];for(let D in P){let k=P[D];for(let O in k)g(k[O].object),delete k[O];delete P[D]}delete o[L.id]}function I(L){for(let P in o){let D=o[P];if(D[L.id]===void 0)continue;let k=D[L.id];for(let O in k)g(k[O].object),delete k[O];delete D[L.id]}}function H(){N(),h=!0,l!==c&&(l=c,d(l.object))}function N(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:H,resetDefaultState:N,dispose:_,releaseStatesOfGeometry:A,releaseStatesOfProgram:I,initAttributes:b,enableAttribute:E,disableUnusedAttributes:y}}function e1(r,t,e,n){let i=n.isWebGL2,s;function a(h){s=h}function o(h,u){r.drawArrays(s,h,u),e.update(u,s,1)}function c(h,u,f){if(f===0)return;let d,g;if(i)d=r,g="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[g](s,h,u,f),e.update(u,s,f)}function l(h,u,f){if(f===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<f;g++)this.render(h[g],u[g]);else{d.multiDrawArraysWEBGL(s,h,0,u,0,f);let g=0;for(let v=0;v<f;v++)g+=u[v];e.update(g,s,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=l}function n1(r,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext",o=e.precision!==void 0?e.precision:"highp",c=s(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);let l=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),m=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),p=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),b=f>0,E=a||t.has("OES_texture_float"),M=b&&E,y=a?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:x,vertexTextures:b,floatFragmentTextures:E,floatVertexTextures:M,maxSamples:y}}function i1(r){let t=this,e=null,n=0,i=!1,s=!1,a=new di,o=new ce,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=r.get(u);if(!i||g===null||g.length===0||s&&!m)s?h(null):l();else{let x=s?0:n,b=x*4,E=p.clippingState||null;c.value=E,E=h(g,f,b,d);for(let M=0;M!==b;++M)E[M]=e[M];p.clippingState=E,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,g){let v=u!==null?u.length:0,m=null;if(v!==0){if(m=c.value,g!==!0||m===null){let p=d+v*4,x=f.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,E=d;b!==v;++b,E+=4)a.copy(u[b]).applyMatrix4(x,o),a.normal.toArray(m,E),m[E+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function s1(r){let t=new WeakMap;function e(a,o){return o===ru?a.mapping=zr:o===au&&(a.mapping=Br),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===ru||o===au)if(t.has(a)){let c=t.get(a).texture;return e(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new du(c.height/2);return l.fromEquirectangularTexture(r,a),t.set(a,l),a.addEventListener("dispose",i),e(l.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}var Ms=class extends Fc{constructor(t=-1,e=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,a=n+t,o=i+e,c=i-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Hr=4,$p=[.125,.215,.35,.446,.526,.582],js=20,Vh=new Ms,tm=new et,Wh=null,qh=0,Xh=0,Xs=(1+Math.sqrt(5))/2,Ar=1/Xs,em=[new T(1,1,1),new T(-1,1,1),new T(1,1,-1),new T(-1,1,-1),new T(0,Xs,Ar),new T(0,Xs,-Ar),new T(Ar,0,Xs),new T(-Ar,0,Xs),new T(Xs,Ar,0),new T(-Xs,Ar,0)],Xr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Wh=this._renderer.getRenderTarget(),qh=this._renderer.getActiveCubeFace(),Xh=this._renderer.getActiveMipmapLevel(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=im(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Wh,qh,Xh),t.scissorTest=!1,hc(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===zr||t.mapping===Br?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Wh=this._renderer.getRenderTarget(),qh=this._renderer.getActiveCubeFace(),Xh=this._renderer.getActiveMipmapLevel();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Qe,minFilter:Qe,generateMipmaps:!1,type:Un,format:ti,colorSpace:en,depthBuffer:!1},i=nm(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nm(t,e,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=r1(s)),this._blurMaterial=a1(s,t,e)}return i}_compileMaterial(t){let e=new Ft(this._lodPlanes[0],t);this._renderer.compile(e,Vh)}_sceneToCubeUV(t,e,n,i){let o=new Ne(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(tm),h.toneMapping=_s,h.autoClear=!1;let d=new qe({name:"PMREM.Background",side:vn,depthWrite:!1,depthTest:!1}),g=new Ft(new he,d),v=!1,m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,v=!0):(d.color.copy(tm),v=!0);for(let p=0;p<6;p++){let x=p%3;x===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):x===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));let b=this._cubeSize;hc(i,x*b,p>2?b:0,b,b),h.setRenderTarget(i),v&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===zr||t.mapping===Br;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=sm()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=im());let s=i?this._cubemapMaterial:this._equirectMaterial,a=new Ft(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;let c=this._cubeSize;hc(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Vh)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=em[(i-1)%em.length];this._blur(t,i-1,i,s,a)}e.autoClear=n}_blur(t,e,n,i,s){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",s),this._halfBlur(a,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Ft(this._lodPlanes[i],l),f=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*js-1),v=s/g,m=isFinite(s)?1+Math.floor(h*v):js;m>js&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${js}`);let p=[],x=0;for(let w=0;w<js;++w){let C=w/v,_=Math.exp(-C*C/2);p.push(_),w===0?x+=_:w<m&&(x+=2*_)}for(let w=0;w<p.length;w++)p[w]=p[w]/x;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:b}=this;f.dTheta.value=g,f.mipInt.value=b-n;let E=this._sizeLods[i],M=3*E*(i>b-Hr?i-b+Hr:0),y=4*(this._cubeSize-E);hc(e,M,y,3*E,2*E),c.setRenderTarget(e),c.render(u,Vh)}};function r1(r){let t=[],e=[],n=[],i=r,s=r-Hr+1+$p.length;for(let a=0;a<s;a++){let o=Math.pow(2,i);e.push(o);let c=1/o;a>r-Hr?c=$p[a-r+Hr-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,v=3,m=2,p=1,x=new Float32Array(v*g*d),b=new Float32Array(m*g*d),E=new Float32Array(p*g*d);for(let y=0;y<d;y++){let w=y%3*2/3-1,C=y>2?0:-1,_=[w,C,0,w+2/3,C,0,w+2/3,C+1,0,w,C,0,w+2/3,C+1,0,w,C+1,0];x.set(_,v*g*y),b.set(f,m*g*y);let A=[y,y,y,y,y,y];E.set(A,p*g*y)}let M=new Rt;M.setAttribute("position",new Mt(x,v)),M.setAttribute("uv",new Mt(b,m)),M.setAttribute("faceIndex",new Mt(E,p)),t.push(M),i>Hr&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function nm(r,t,e){let n=new hn(r,t,e);return n.texture.mapping=Zc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function hc(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function a1(r,t,e){let n=new Float32Array(js),i=new T(0,1,0);return new ye({name:"SphericalGaussianBlur",defines:{n:js,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:hf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ys,depthTest:!1,depthWrite:!1})}function im(){return new ye({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ys,depthTest:!1,depthWrite:!1})}function sm(){return new ye({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ys,depthTest:!1,depthWrite:!1})}function hf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function o1(r){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===ru||c===au,h=c===zr||c===Br;if(l||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=t.get(o);return e===null&&(e=new Xr(r)),u=l?e.fromEquirectangular(o,u):e.fromCubemap(o,u),t.set(o,u),u.texture}else{if(t.has(o))return t.get(o).texture;{let u=o.image;if(l&&u&&u.height>0||h&&u&&i(u)){e===null&&(e=new Xr(r));let f=l?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,f),o.addEventListener("dispose",s),f.texture}else return null}}}return o}function i(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function s(o){let c=o.target;c.removeEventListener("dispose",s);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function c1(r){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function l1(r,t,e,n){let i={},s=new WeakMap;function a(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);for(let g in f.morphAttributes){let v=f.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)t.remove(v[m])}f.removeEventListener("dispose",a),delete i[f.id];let d=s.get(f);d&&(t.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,e.memory.geometries++),f}function c(u){let f=u.attributes;for(let g in f)t.update(f[g],r.ARRAY_BUFFER);let d=u.morphAttributes;for(let g in d){let v=d[g];for(let m=0,p=v.length;m<p;m++)t.update(v[m],r.ARRAY_BUFFER)}}function l(u){let f=[],d=u.index,g=u.attributes.position,v=0;if(d!==null){let x=d.array;v=d.version;for(let b=0,E=x.length;b<E;b+=3){let M=x[b+0],y=x[b+1],w=x[b+2];f.push(M,y,y,w,w,M)}}else if(g!==void 0){let x=g.array;v=g.version;for(let b=0,E=x.length/3-1;b<E;b+=3){let M=b+0,y=b+1,w=b+2;f.push(M,y,y,w,w,M)}}else return;let m=new(n0(f)?Dc:Ic)(f,1);m.version=v;let p=s.get(u);p&&t.remove(p),s.set(u,m)}function h(u){let f=s.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return s.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function h1(r,t,e,n){let i=n.isWebGL2,s;function a(d){s=d}let o,c;function l(d){o=d.type,c=d.bytesPerElement}function h(d,g){r.drawElements(s,g,o,d*c),e.update(g,s,1)}function u(d,g,v){if(v===0)return;let m,p;if(i)m=r,p="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](s,g,o,d*c,v),e.update(g,s,v)}function f(d,g,v){if(v===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<v;p++)this.render(d[p]/c,g[p]);else{m.multiDrawElementsWEBGL(s,g,0,o,d,0,v);let p=0;for(let x=0;x<v;x++)p+=g[x];e.update(p,s,1)}}this.setMode=a,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function u1(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function f1(r,t){return r[0]-t[0]}function d1(r,t){return Math.abs(t[1])-Math.abs(r[1])}function p1(r,t,e){let n={},i=new Float32Array(8),s=new WeakMap,a=new le,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,h,u){let f=l.morphTargetInfluences;if(t.isWebGL2===!0){let d=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=d!==void 0?d.length:0,v=s.get(h);if(v===void 0||v.count!==g){let L=function(){H.dispose(),s.delete(h),h.removeEventListener("dispose",L)};v!==void 0&&v.texture.dispose();let x=h.morphAttributes.position!==void 0,b=h.morphAttributes.normal!==void 0,E=h.morphAttributes.color!==void 0,M=h.morphAttributes.position||[],y=h.morphAttributes.normal||[],w=h.morphAttributes.color||[],C=0;x===!0&&(C=1),b===!0&&(C=2),E===!0&&(C=3);let _=h.attributes.position.count*C,A=1;_>t.maxTextureSize&&(A=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let I=new Float32Array(_*A*4*g),H=new Lc(I,_,A,g);H.type=Qi,H.needsUpdate=!0;let N=C*4;for(let P=0;P<g;P++){let D=M[P],k=y[P],O=w[P],G=_*A*4*P;for(let X=0;X<D.count;X++){let K=X*N;x===!0&&(a.fromBufferAttribute(D,X),I[G+K+0]=a.x,I[G+K+1]=a.y,I[G+K+2]=a.z,I[G+K+3]=0),b===!0&&(a.fromBufferAttribute(k,X),I[G+K+4]=a.x,I[G+K+5]=a.y,I[G+K+6]=a.z,I[G+K+7]=0),E===!0&&(a.fromBufferAttribute(O,X),I[G+K+8]=a.x,I[G+K+9]=a.y,I[G+K+10]=a.z,I[G+K+11]=O.itemSize===4?a.w:1)}}v={count:g,texture:H,size:new rt(_,A)},s.set(h,v),h.addEventListener("dispose",L)}let m=0;for(let x=0;x<f.length;x++)m+=f[x];let p=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(r,"morphTargetBaseInfluence",p),u.getUniforms().setValue(r,"morphTargetInfluences",f),u.getUniforms().setValue(r,"morphTargetsTexture",v.texture,e),u.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}else{let d=f===void 0?0:f.length,g=n[h.id];if(g===void 0||g.length!==d){g=[];for(let b=0;b<d;b++)g[b]=[b,0];n[h.id]=g}for(let b=0;b<d;b++){let E=g[b];E[0]=b,E[1]=f[b]}g.sort(d1);for(let b=0;b<8;b++)b<d&&g[b][1]?(o[b][0]=g[b][0],o[b][1]=g[b][1]):(o[b][0]=Number.MAX_SAFE_INTEGER,o[b][1]=0);o.sort(f1);let v=h.morphAttributes.position,m=h.morphAttributes.normal,p=0;for(let b=0;b<8;b++){let E=o[b],M=E[0],y=E[1];M!==Number.MAX_SAFE_INTEGER&&y?(v&&h.getAttribute("morphTarget"+b)!==v[M]&&h.setAttribute("morphTarget"+b,v[M]),m&&h.getAttribute("morphNormal"+b)!==m[M]&&h.setAttribute("morphNormal"+b,m[M]),i[b]=y,p+=y):(v&&h.hasAttribute("morphTarget"+b)===!0&&h.deleteAttribute("morphTarget"+b),m&&h.hasAttribute("morphNormal"+b)===!0&&h.deleteAttribute("morphNormal"+b),i[b]=0)}let x=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(r,"morphTargetBaseInfluence",x),u.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:c}}function m1(r,t,e,n){let i=new WeakMap;function s(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(i.get(u)!==l&&(t.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(e.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return u}function a(){i=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:a}}var jr=class extends xn{constructor(t,e,n,i,s,a,o,c,l,h){if(h=h!==void 0?h:Js,h!==Js&&h!==Gr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Js&&(n=Ai),n===void 0&&h===Gr&&(n=Ks),super(null,i,s,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ke,this.minFilter=c!==void 0?c:Ke,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},a0=new xn,o0=new jr(1,1);o0.compareFunction=e0;var c0=new Lc,l0=new uu,h0=new Hc,rm=[],am=[],om=new Float32Array(16),cm=new Float32Array(9),lm=new Float32Array(4);function ea(r,t,e){let n=r[0];if(n<=0||n>0)return r;let i=t*e,s=rm[i];if(s===void 0&&(s=new Float32Array(i),rm[i]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function nn(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function sn(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function tl(r,t){let e=am[t];e===void 0&&(e=new Int32Array(t),am[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function g1(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function v1(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;r.uniform2fv(this.addr,t),sn(e,t)}}function x1(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(nn(e,t))return;r.uniform3fv(this.addr,t),sn(e,t)}}function b1(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;r.uniform4fv(this.addr,t),sn(e,t)}}function y1(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(nn(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),sn(e,t)}else{if(nn(e,n))return;lm.set(n),r.uniformMatrix2fv(this.addr,!1,lm),sn(e,n)}}function _1(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(nn(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),sn(e,t)}else{if(nn(e,n))return;cm.set(n),r.uniformMatrix3fv(this.addr,!1,cm),sn(e,n)}}function M1(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(nn(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),sn(e,t)}else{if(nn(e,n))return;om.set(n),r.uniformMatrix4fv(this.addr,!1,om),sn(e,n)}}function E1(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function w1(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;r.uniform2iv(this.addr,t),sn(e,t)}}function T1(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(nn(e,t))return;r.uniform3iv(this.addr,t),sn(e,t)}}function S1(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;r.uniform4iv(this.addr,t),sn(e,t)}}function A1(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function R1(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;r.uniform2uiv(this.addr,t),sn(e,t)}}function C1(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(nn(e,t))return;r.uniform3uiv(this.addr,t),sn(e,t)}}function P1(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;r.uniform4uiv(this.addr,t),sn(e,t)}}function L1(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s=this.type===r.SAMPLER_2D_SHADOW?o0:a0;e.setTexture2D(t||s,i)}function I1(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||l0,i)}function D1(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||h0,i)}function F1(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||c0,i)}function H1(r){switch(r){case 5126:return g1;case 35664:return v1;case 35665:return x1;case 35666:return b1;case 35674:return y1;case 35675:return _1;case 35676:return M1;case 5124:case 35670:return E1;case 35667:case 35671:return w1;case 35668:case 35672:return T1;case 35669:case 35673:return S1;case 5125:return A1;case 36294:return R1;case 36295:return C1;case 36296:return P1;case 35678:case 36198:case 36298:case 36306:case 35682:return L1;case 35679:case 36299:case 36307:return I1;case 35680:case 36300:case 36308:case 36293:return D1;case 36289:case 36303:case 36311:case 36292:return F1}}function N1(r,t){r.uniform1fv(this.addr,t)}function U1(r,t){let e=ea(t,this.size,2);r.uniform2fv(this.addr,e)}function k1(r,t){let e=ea(t,this.size,3);r.uniform3fv(this.addr,e)}function O1(r,t){let e=ea(t,this.size,4);r.uniform4fv(this.addr,e)}function z1(r,t){let e=ea(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function B1(r,t){let e=ea(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function G1(r,t){let e=ea(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function V1(r,t){r.uniform1iv(this.addr,t)}function W1(r,t){r.uniform2iv(this.addr,t)}function q1(r,t){r.uniform3iv(this.addr,t)}function X1(r,t){r.uniform4iv(this.addr,t)}function j1(r,t){r.uniform1uiv(this.addr,t)}function Y1(r,t){r.uniform2uiv(this.addr,t)}function K1(r,t){r.uniform3uiv(this.addr,t)}function J1(r,t){r.uniform4uiv(this.addr,t)}function Z1(r,t,e){let n=this.cache,i=t.length,s=tl(e,i);nn(n,s)||(r.uniform1iv(this.addr,s),sn(n,s));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||a0,s[a])}function Q1(r,t,e){let n=this.cache,i=t.length,s=tl(e,i);nn(n,s)||(r.uniform1iv(this.addr,s),sn(n,s));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||l0,s[a])}function $1(r,t,e){let n=this.cache,i=t.length,s=tl(e,i);nn(n,s)||(r.uniform1iv(this.addr,s),sn(n,s));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||h0,s[a])}function tM(r,t,e){let n=this.cache,i=t.length,s=tl(e,i);nn(n,s)||(r.uniform1iv(this.addr,s),sn(n,s));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||c0,s[a])}function eM(r){switch(r){case 5126:return N1;case 35664:return U1;case 35665:return k1;case 35666:return O1;case 35674:return z1;case 35675:return B1;case 35676:return G1;case 5124:case 35670:return V1;case 35667:case 35671:return W1;case 35668:case 35672:return q1;case 35669:case 35673:return X1;case 5125:return j1;case 36294:return Y1;case 36295:return K1;case 36296:return J1;case 35678:case 36198:case 36298:case 36306:case 35682:return Z1;case 35679:case 36299:case 36307:return Q1;case 35680:case 36300:case 36308:case 36293:return $1;case 36289:case 36303:case 36311:case 36292:return tM}}var pu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=H1(e.type)}},mu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=eM(e.type)}},gu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,a=i.length;s!==a;++s){let o=i[s];o.setValue(t,e[o.id],n)}}},jh=/(\w+)(\])?(\[|\.)?/g;function hm(r,t){r.seq.push(t),r.map[t.id]=t}function nM(r,t,e){let n=r.name,i=n.length;for(jh.lastIndex=0;;){let s=jh.exec(n),a=jh.lastIndex,o=s[1],c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){hm(e,l===void 0?new pu(o,r,t):new mu(o,r,t));break}else{let u=e.map[o];u===void 0&&(u=new gu(o),hm(e,u)),e=u}}}var Or=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let s=t.getActiveUniform(e,i),a=t.getUniformLocation(e,s.name);nM(s,a,this)}}setValue(t,e,n,i){let s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,a=e.length;s!==a;++s){let o=e[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let a=t[i];a.id in e&&n.push(a)}return n}};function um(r,t,e){let n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}var iM=37297,sM=0;function rM(r,t){let e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=i;a<s;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function aM(r){let t=pe.getPrimaries(pe.workingColorSpace),e=pe.getPrimaries(r),n;switch(t===e?n="":t===Sc&&e===Tc?n="LinearDisplayP3ToLinearSRGB":t===Tc&&e===Sc&&(n="LinearSRGBToLinearDisplayP3"),r){case en:case $c:return[n,"LinearTransferOETF"];case ue:case cf:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function fm(r,t,e){let n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let a=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+rM(r.getShaderSource(t),a)}else return i}function oM(r,t){let e=aM(t);return`vec4 ${r}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function cM(r,t){let e;switch(t){case dx:e="Linear";break;case px:e="Reinhard";break;case mx:e="OptimizedCineon";break;case $u:e="ACESFilmic";break;case vx:e="AgX";break;case gx:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function lM(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Nr).join(`
`)}function hM(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Nr).join(`
`)}function uM(r){let t=[];for(let e in r){let n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function fM(r,t){let e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(t,i),a=s.name,o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function Nr(r){return r!==""}function dm(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function pm(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var dM=/^[ \t]*#include +<([\w\d./]+)>/gm;function vu(r){return r.replace(dM,mM)}var pM=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function mM(r,t){let e=Jt[t];if(e===void 0){let n=pM.get(t);if(n!==void 0)e=Jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return vu(e)}var gM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mm(r){return r.replace(gM,vM)}function vM(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function gm(r){let t="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function xM(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Wm?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Yu?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ji&&(t="SHADOWMAP_TYPE_VSM"),t}function bM(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case zr:case Br:t="ENVMAP_TYPE_CUBE";break;case Zc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function yM(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Br:t="ENVMAP_MODE_REFRACTION";break}return t}function _M(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Qu:t="ENVMAP_BLENDING_MULTIPLY";break;case ux:t="ENVMAP_BLENDING_MIX";break;case fx:t="ENVMAP_BLENDING_ADD";break}return t}function MM(r){let t=r.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function EM(r,t,e,n){let i=r.getContext(),s=e.defines,a=e.vertexShader,o=e.fragmentShader,c=xM(e),l=bM(e),h=yM(e),u=_M(e),f=MM(e),d=e.isWebGL2?"":lM(e),g=hM(e),v=uM(s),m=i.createProgram(),p,x,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Nr).join(`
`),p.length>0&&(p+=`
`),x=[d,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Nr).join(`
`),x.length>0&&(x+=`
`)):(p=[gm(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Nr).join(`
`),x=[d,gm(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==_s?"#define TONE_MAPPING":"",e.toneMapping!==_s?Jt.tonemapping_pars_fragment:"",e.toneMapping!==_s?cM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,oM("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Nr).join(`
`)),a=vu(a),a=dm(a,e),a=pm(a,e),o=vu(o),o=dm(o,e),o=pm(o,e),a=mm(a),o=mm(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,x=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Hp?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Hp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);let E=b+p+a,M=b+x+o,y=um(i,i.VERTEX_SHADER,E),w=um(i,i.FRAGMENT_SHADER,M);i.attachShader(m,y),i.attachShader(m,w),e.index0AttributeName!==void 0?i.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function C(H){if(r.debug.checkShaderErrors){let N=i.getProgramInfoLog(m).trim(),L=i.getShaderInfoLog(y).trim(),P=i.getShaderInfoLog(w).trim(),D=!0,k=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(D=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,m,y,w);else{let O=fm(i,y,"vertex"),G=fm(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+N+`
`+O+`
`+G)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(L===""||P==="")&&(k=!1);k&&(H.diagnostics={runnable:D,programLog:N,vertexShader:{log:L,prefix:p},fragmentShader:{log:P,prefix:x}})}i.deleteShader(y),i.deleteShader(w),_=new Or(i,m),A=fM(i,m)}let _;this.getUniforms=function(){return _===void 0&&C(this),_};let A;this.getAttributes=function(){return A===void 0&&C(this),A};let I=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=i.getProgramParameter(m,iM)),I},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=sM++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=y,this.fragmentShader=w,this}var wM=0,xu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new bu(t),e.set(t,n)),n}},bu=class{constructor(t){this.id=wM++,this.code=t,this.usedTimes=0}};function TM(r,t,e,n,i,s,a){let o=new ja,c=new xu,l=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,f=i.vertexTextures,d=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(_){return _===0?"uv":`uv${_}`}function m(_,A,I,H,N){let L=H.fog,P=N.geometry,D=_.isMeshStandardMaterial?H.environment:null,k=(_.isMeshStandardMaterial?e:t).get(_.envMap||D),O=k&&k.mapping===Zc?k.image.height:null,G=g[_.type];_.precision!==null&&(d=i.getMaxPrecision(_.precision),d!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));let X=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,K=X!==void 0?X.length:0,it=0;P.morphAttributes.position!==void 0&&(it=1),P.morphAttributes.normal!==void 0&&(it=2),P.morphAttributes.color!==void 0&&(it=3);let z,Q,lt,ht;if(G){let Pn=Ti[G];z=Pn.vertexShader,Q=Pn.fragmentShader}else z=_.vertexShader,Q=_.fragmentShader,c.update(_),lt=c.getVertexShaderID(_),ht=c.getFragmentShaderID(_);let yt=r.getRenderTarget(),Nt=N.isInstancedMesh===!0,qt=N.isBatchedMesh===!0,It=!!_.map,ne=!!_.matcap,Y=!!k,Oe=!!_.aoMap,Ut=!!_.lightMap,jt=!!_.bumpMap,Lt=!!_.normalMap,Se=!!_.displacementMap,Qt=!!_.emissiveMap,R=!!_.metalnessMap,S=!!_.roughnessMap,U=_.anisotropy>0,V=_.clearcoat>0,j=_.iridescence>0,W=_.sheen>0,ot=_.transmission>0,st=U&&!!_.anisotropyMap,ct=V&&!!_.clearcoatMap,ut=V&&!!_.clearcoatNormalMap,gt=V&&!!_.clearcoatRoughnessMap,J=j&&!!_.iridescenceMap,Et=j&&!!_.iridescenceThicknessMap,At=W&&!!_.sheenColorMap,Ct=W&&!!_.sheenRoughnessMap,_t=!!_.specularMap,dt=!!_.specularColorMap,kt=!!_.specularIntensityMap,te=ot&&!!_.transmissionMap,se=ot&&!!_.thicknessMap,Kt=!!_.gradientMap,ft=!!_.alphaMap,B=_.alphaTest>0,vt=!!_.alphaHash,pt=!!_.extensions,Vt=!!P.attributes.uv1,Ot=!!P.attributes.uv2,be=!!P.attributes.uv3,Pe=_s;return _.toneMapped&&(yt===null||yt.isXRRenderTarget===!0)&&(Pe=r.toneMapping),{isWebGL2:h,shaderID:G,shaderType:_.type,shaderName:_.name,vertexShader:z,fragmentShader:Q,defines:_.defines,customVertexShaderID:lt,customFragmentShaderID:ht,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:qt,instancing:Nt,instancingColor:Nt&&N.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:yt===null?r.outputColorSpace:yt.isXRRenderTarget===!0?yt.texture.colorSpace:en,map:It,matcap:ne,envMap:Y,envMapMode:Y&&k.mapping,envMapCubeUVHeight:O,aoMap:Oe,lightMap:Ut,bumpMap:jt,normalMap:Lt,displacementMap:f&&Se,emissiveMap:Qt,normalMapObjectSpace:Lt&&_.normalMapType===Px,normalMapTangentSpace:Lt&&_.normalMapType===of,metalnessMap:R,roughnessMap:S,anisotropy:U,anisotropyMap:st,clearcoat:V,clearcoatMap:ct,clearcoatNormalMap:ut,clearcoatRoughnessMap:gt,iridescence:j,iridescenceMap:J,iridescenceThicknessMap:Et,sheen:W,sheenColorMap:At,sheenRoughnessMap:Ct,specularMap:_t,specularColorMap:dt,specularIntensityMap:kt,transmission:ot,transmissionMap:te,thicknessMap:se,gradientMap:Kt,opaque:_.transparent===!1&&_.blending===Ur,alphaMap:ft,alphaTest:B,alphaHash:vt,combine:_.combine,mapUv:It&&v(_.map.channel),aoMapUv:Oe&&v(_.aoMap.channel),lightMapUv:Ut&&v(_.lightMap.channel),bumpMapUv:jt&&v(_.bumpMap.channel),normalMapUv:Lt&&v(_.normalMap.channel),displacementMapUv:Se&&v(_.displacementMap.channel),emissiveMapUv:Qt&&v(_.emissiveMap.channel),metalnessMapUv:R&&v(_.metalnessMap.channel),roughnessMapUv:S&&v(_.roughnessMap.channel),anisotropyMapUv:st&&v(_.anisotropyMap.channel),clearcoatMapUv:ct&&v(_.clearcoatMap.channel),clearcoatNormalMapUv:ut&&v(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:gt&&v(_.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&v(_.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&v(_.iridescenceThicknessMap.channel),sheenColorMapUv:At&&v(_.sheenColorMap.channel),sheenRoughnessMapUv:Ct&&v(_.sheenRoughnessMap.channel),specularMapUv:_t&&v(_.specularMap.channel),specularColorMapUv:dt&&v(_.specularColorMap.channel),specularIntensityMapUv:kt&&v(_.specularIntensityMap.channel),transmissionMapUv:te&&v(_.transmissionMap.channel),thicknessMapUv:se&&v(_.thicknessMap.channel),alphaMapUv:ft&&v(_.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(Lt||U),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,vertexUv1s:Vt,vertexUv2s:Ot,vertexUv3s:be,pointsUvs:N.isPoints===!0&&!!P.attributes.uv&&(It||ft),fog:!!L,useFog:_.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:N.isSkinnedMesh===!0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:it,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:r.shadowMap.enabled&&I.length>0,shadowMapType:r.shadowMap.type,toneMapping:Pe,useLegacyLights:r._useLegacyLights,decodeVideoTexture:It&&_.map.isVideoTexture===!0&&pe.getTransfer(_.map.colorSpace)===He,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===de,flipSided:_.side===vn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionDerivatives:pt&&_.extensions.derivatives===!0,extensionFragDepth:pt&&_.extensions.fragDepth===!0,extensionDrawBuffers:pt&&_.extensions.drawBuffers===!0,extensionShaderTextureLOD:pt&&_.extensions.shaderTextureLOD===!0,extensionClipCullDistance:pt&&_.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()}}function p(_){let A=[];if(_.shaderID?A.push(_.shaderID):(A.push(_.customVertexShaderID),A.push(_.customFragmentShaderID)),_.defines!==void 0)for(let I in _.defines)A.push(I),A.push(_.defines[I]);return _.isRawShaderMaterial===!1&&(x(A,_),b(A,_),A.push(r.outputColorSpace)),A.push(_.customProgramCacheKey),A.join()}function x(_,A){_.push(A.precision),_.push(A.outputColorSpace),_.push(A.envMapMode),_.push(A.envMapCubeUVHeight),_.push(A.mapUv),_.push(A.alphaMapUv),_.push(A.lightMapUv),_.push(A.aoMapUv),_.push(A.bumpMapUv),_.push(A.normalMapUv),_.push(A.displacementMapUv),_.push(A.emissiveMapUv),_.push(A.metalnessMapUv),_.push(A.roughnessMapUv),_.push(A.anisotropyMapUv),_.push(A.clearcoatMapUv),_.push(A.clearcoatNormalMapUv),_.push(A.clearcoatRoughnessMapUv),_.push(A.iridescenceMapUv),_.push(A.iridescenceThicknessMapUv),_.push(A.sheenColorMapUv),_.push(A.sheenRoughnessMapUv),_.push(A.specularMapUv),_.push(A.specularColorMapUv),_.push(A.specularIntensityMapUv),_.push(A.transmissionMapUv),_.push(A.thicknessMapUv),_.push(A.combine),_.push(A.fogExp2),_.push(A.sizeAttenuation),_.push(A.morphTargetsCount),_.push(A.morphAttributeCount),_.push(A.numDirLights),_.push(A.numPointLights),_.push(A.numSpotLights),_.push(A.numSpotLightMaps),_.push(A.numHemiLights),_.push(A.numRectAreaLights),_.push(A.numDirLightShadows),_.push(A.numPointLightShadows),_.push(A.numSpotLightShadows),_.push(A.numSpotLightShadowsWithMaps),_.push(A.numLightProbes),_.push(A.shadowMapType),_.push(A.toneMapping),_.push(A.numClippingPlanes),_.push(A.numClipIntersection),_.push(A.depthPacking)}function b(_,A){o.disableAll(),A.isWebGL2&&o.enable(0),A.supportsVertexTextures&&o.enable(1),A.instancing&&o.enable(2),A.instancingColor&&o.enable(3),A.matcap&&o.enable(4),A.envMap&&o.enable(5),A.normalMapObjectSpace&&o.enable(6),A.normalMapTangentSpace&&o.enable(7),A.clearcoat&&o.enable(8),A.iridescence&&o.enable(9),A.alphaTest&&o.enable(10),A.vertexColors&&o.enable(11),A.vertexAlphas&&o.enable(12),A.vertexUv1s&&o.enable(13),A.vertexUv2s&&o.enable(14),A.vertexUv3s&&o.enable(15),A.vertexTangents&&o.enable(16),A.anisotropy&&o.enable(17),A.alphaHash&&o.enable(18),A.batching&&o.enable(19),_.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.skinning&&o.enable(4),A.morphTargets&&o.enable(5),A.morphNormals&&o.enable(6),A.morphColors&&o.enable(7),A.premultipliedAlpha&&o.enable(8),A.shadowMapEnabled&&o.enable(9),A.useLegacyLights&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),_.push(o.mask)}function E(_){let A=g[_.type],I;if(A){let H=Ti[A];I=pb.clone(H.uniforms)}else I=_.uniforms;return I}function M(_,A){let I;for(let H=0,N=l.length;H<N;H++){let L=l[H];if(L.cacheKey===A){I=L,++I.usedTimes;break}}return I===void 0&&(I=new EM(r,A,_,s),l.push(I)),I}function y(_){if(--_.usedTimes===0){let A=l.indexOf(_);l[A]=l[l.length-1],l.pop(),_.destroy()}}function w(_){c.remove(_)}function C(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:E,acquireProgram:M,releaseProgram:y,releaseShaderCache:w,programs:l,dispose:C}}function SM(){let r=new WeakMap;function t(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function e(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function AM(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function vm(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function xm(){let r=[],t=0,e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function a(u,f,d,g,v,m){let p=r[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},r[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=v,p.group=m),t++,p}function o(u,f,d,g,v,m){let p=a(u,f,d,g,v,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):e.push(p)}function c(u,f,d,g,v,m){let p=a(u,f,d,g,v,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):e.unshift(p)}function l(u,f){e.length>1&&e.sort(u||AM),n.length>1&&n.sort(f||vm),i.length>1&&i.sort(f||vm)}function h(){for(let u=t,f=r.length;u<f;u++){let d=r[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:o,unshift:c,finish:h,sort:l}}function RM(){let r=new WeakMap;function t(n,i){let s=r.get(n),a;return s===void 0?(a=new xm,r.set(n,[a])):i>=s.length?(a=new xm,s.push(a)):a=s[i],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function CM(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new T,color:new et};break;case"SpotLight":e={position:new T,direction:new T,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new T,color:new et,distance:0,decay:0};break;case"HemisphereLight":e={direction:new T,skyColor:new et,groundColor:new et};break;case"RectAreaLight":e={color:new et,position:new T,halfWidth:new T,halfHeight:new T};break}return r[t.id]=e,e}}}function PM(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var LM=0;function IM(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function DM(r,t){let e=new CM,n=PM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new T);let s=new T,a=new bt,o=new bt;function c(h,u){let f=0,d=0,g=0;for(let H=0;H<9;H++)i.probe[H].set(0,0,0);let v=0,m=0,p=0,x=0,b=0,E=0,M=0,y=0,w=0,C=0,_=0;h.sort(IM);let A=u===!0?Math.PI:1;for(let H=0,N=h.length;H<N;H++){let L=h[H],P=L.color,D=L.intensity,k=L.distance,O=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)f+=P.r*D*A,d+=P.g*D*A,g+=P.b*D*A;else if(L.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(L.sh.coefficients[G],D);_++}else if(L.isDirectionalLight){let G=e.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity*A),L.castShadow){let X=L.shadow,K=n.get(L);K.shadowBias=X.bias,K.shadowNormalBias=X.normalBias,K.shadowRadius=X.radius,K.shadowMapSize=X.mapSize,i.directionalShadow[v]=K,i.directionalShadowMap[v]=O,i.directionalShadowMatrix[v]=L.shadow.matrix,E++}i.directional[v]=G,v++}else if(L.isSpotLight){let G=e.get(L);G.position.setFromMatrixPosition(L.matrixWorld),G.color.copy(P).multiplyScalar(D*A),G.distance=k,G.coneCos=Math.cos(L.angle),G.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),G.decay=L.decay,i.spot[p]=G;let X=L.shadow;if(L.map&&(i.spotLightMap[w]=L.map,w++,X.updateMatrices(L),L.castShadow&&C++),i.spotLightMatrix[p]=X.matrix,L.castShadow){let K=n.get(L);K.shadowBias=X.bias,K.shadowNormalBias=X.normalBias,K.shadowRadius=X.radius,K.shadowMapSize=X.mapSize,i.spotShadow[p]=K,i.spotShadowMap[p]=O,y++}p++}else if(L.isRectAreaLight){let G=e.get(L);G.color.copy(P).multiplyScalar(D),G.halfWidth.set(L.width*.5,0,0),G.halfHeight.set(0,L.height*.5,0),i.rectArea[x]=G,x++}else if(L.isPointLight){let G=e.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity*A),G.distance=L.distance,G.decay=L.decay,L.castShadow){let X=L.shadow,K=n.get(L);K.shadowBias=X.bias,K.shadowNormalBias=X.normalBias,K.shadowRadius=X.radius,K.shadowMapSize=X.mapSize,K.shadowCameraNear=X.camera.near,K.shadowCameraFar=X.camera.far,i.pointShadow[m]=K,i.pointShadowMap[m]=O,i.pointShadowMatrix[m]=L.shadow.matrix,M++}i.point[m]=G,m++}else if(L.isHemisphereLight){let G=e.get(L);G.skyColor.copy(L.color).multiplyScalar(D*A),G.groundColor.copy(L.groundColor).multiplyScalar(D*A),i.hemi[b]=G,b++}}x>0&&(t.isWebGL2?r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=mt.LTC_FLOAT_1,i.rectAreaLTC2=mt.LTC_FLOAT_2):(i.rectAreaLTC1=mt.LTC_HALF_1,i.rectAreaLTC2=mt.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=mt.LTC_FLOAT_1,i.rectAreaLTC2=mt.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=mt.LTC_HALF_1,i.rectAreaLTC2=mt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=g;let I=i.hash;(I.directionalLength!==v||I.pointLength!==m||I.spotLength!==p||I.rectAreaLength!==x||I.hemiLength!==b||I.numDirectionalShadows!==E||I.numPointShadows!==M||I.numSpotShadows!==y||I.numSpotMaps!==w||I.numLightProbes!==_)&&(i.directional.length=v,i.spot.length=p,i.rectArea.length=x,i.point.length=m,i.hemi.length=b,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=y+w-C,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=_,I.directionalLength=v,I.pointLength=m,I.spotLength=p,I.rectAreaLength=x,I.hemiLength=b,I.numDirectionalShadows=E,I.numPointShadows=M,I.numSpotShadows=y,I.numSpotMaps=w,I.numLightProbes=_,i.version=LM++)}function l(h,u){let f=0,d=0,g=0,v=0,m=0,p=u.matrixWorldInverse;for(let x=0,b=h.length;x<b;x++){let E=h[x];if(E.isDirectionalLight){let M=i.directional[f];M.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),f++}else if(E.isSpotLight){let M=i.spot[g];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),g++}else if(E.isRectAreaLight){let M=i.rectArea[v];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(p),o.identity(),a.copy(E.matrixWorld),a.premultiply(p),o.extractRotation(a),M.halfWidth.set(E.width*.5,0,0),M.halfHeight.set(0,E.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),v++}else if(E.isPointLight){let M=i.point[d];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(p),d++}else if(E.isHemisphereLight){let M=i.hemi[m];M.direction.setFromMatrixPosition(E.matrixWorld),M.direction.transformDirection(p),m++}}}return{setup:c,setupView:l,state:i}}function bm(r,t){let e=new DM(r,t),n=[],i=[];function s(){n.length=0,i.length=0}function a(u){n.push(u)}function o(u){i.push(u)}function c(u){e.setup(n,u)}function l(u){e.setupView(n,u)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function FM(r,t){let e=new WeakMap;function n(s,a=0){let o=e.get(s),c;return o===void 0?(c=new bm(r,t),e.set(s,[c])):a>=o.length?(c=new bm(r,t),o.push(c)):c=o[a],c}function i(){e=new WeakMap}return{get:n,dispose:i}}var Ka=class extends bn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},yu=class extends bn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},HM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,NM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function UM(r,t,e){let n=new Ya,i=new rt,s=new rt,a=new le,o=new Ka({depthPacking:af}),c=new yu,l={},h=e.maxTextureSize,u={[Ci]:vn,[vn]:Ci,[de]:de},f=new ye({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:HM,fragmentShader:NM}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new Rt;g.setAttribute("position",new Mt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Ft(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wm;let p=this.type;this.render=function(y,w,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||y.length===0)return;let _=r.getRenderTarget(),A=r.getActiveCubeFace(),I=r.getActiveMipmapLevel(),H=r.state;H.setBlending(ys),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let N=p!==Ji&&this.type===Ji,L=p===Ji&&this.type!==Ji;for(let P=0,D=y.length;P<D;P++){let k=y[P],O=k.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;i.copy(O.mapSize);let G=O.getFrameExtents();if(i.multiply(G),s.copy(O.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/G.x),i.x=s.x*G.x,O.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/G.y),i.y=s.y*G.y,O.mapSize.y=s.y)),O.map===null||N===!0||L===!0){let K=this.type!==Ji?{minFilter:Ke,magFilter:Ke}:{};O.map!==null&&O.map.dispose(),O.map=new hn(i.x,i.y,K),O.map.texture.name=k.name+".shadowMap",O.camera.updateProjectionMatrix()}r.setRenderTarget(O.map),r.clear();let X=O.getViewportCount();for(let K=0;K<X;K++){let it=O.getViewport(K);a.set(s.x*it.x,s.y*it.y,s.x*it.z,s.y*it.w),H.viewport(a),O.updateMatrices(k,K),n=O.getFrustum(),E(w,C,O.camera,k,this.type)}O.isPointLightShadow!==!0&&this.type===Ji&&x(O,C),O.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(_,A,I)};function x(y,w){let C=t.update(v);f.defines.VSM_SAMPLES!==y.blurSamples&&(f.defines.VSM_SAMPLES=y.blurSamples,d.defines.VSM_SAMPLES=y.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new hn(i.x,i.y)),f.uniforms.shadow_pass.value=y.map.texture,f.uniforms.resolution.value=y.mapSize,f.uniforms.radius.value=y.radius,r.setRenderTarget(y.mapPass),r.clear(),r.renderBufferDirect(w,null,C,f,v,null),d.uniforms.shadow_pass.value=y.mapPass.texture,d.uniforms.resolution.value=y.mapSize,d.uniforms.radius.value=y.radius,r.setRenderTarget(y.map),r.clear(),r.renderBufferDirect(w,null,C,d,v,null)}function b(y,w,C,_){let A=null,I=C.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(I!==void 0)A=I;else if(A=C.isPointLight===!0?c:o,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let H=A.uuid,N=w.uuid,L=l[H];L===void 0&&(L={},l[H]=L);let P=L[N];P===void 0&&(P=A.clone(),L[N]=P,w.addEventListener("dispose",M)),A=P}if(A.visible=w.visible,A.wireframe=w.wireframe,_===Ji?A.side=w.shadowSide!==null?w.shadowSide:w.side:A.side=w.shadowSide!==null?w.shadowSide:u[w.side],A.alphaMap=w.alphaMap,A.alphaTest=w.alphaTest,A.map=w.map,A.clipShadows=w.clipShadows,A.clippingPlanes=w.clippingPlanes,A.clipIntersection=w.clipIntersection,A.displacementMap=w.displacementMap,A.displacementScale=w.displacementScale,A.displacementBias=w.displacementBias,A.wireframeLinewidth=w.wireframeLinewidth,A.linewidth=w.linewidth,C.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let H=r.properties.get(A);H.light=C}return A}function E(y,w,C,_,A){if(y.visible===!1)return;if(y.layers.test(w.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&A===Ji)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,y.matrixWorld);let N=t.update(y),L=y.material;if(Array.isArray(L)){let P=N.groups;for(let D=0,k=P.length;D<k;D++){let O=P[D],G=L[O.materialIndex];if(G&&G.visible){let X=b(y,G,_,A);y.onBeforeShadow(r,y,w,C,N,X,O),r.renderBufferDirect(C,null,N,X,y,O),y.onAfterShadow(r,y,w,C,N,X,O)}}}else if(L.visible){let P=b(y,L,_,A);y.onBeforeShadow(r,y,w,C,N,P,null),r.renderBufferDirect(C,null,N,P,y,null),y.onAfterShadow(r,y,w,C,N,P,null)}}let H=y.children;for(let N=0,L=H.length;N<L;N++)E(H[N],w,C,_,A)}function M(y){y.target.removeEventListener("dispose",M);for(let C in l){let _=l[C],A=y.target.uuid;A in _&&(_[A].dispose(),delete _[A])}}}function kM(r,t,e){let n=e.isWebGL2;function i(){let B=!1,vt=new le,pt=null,Vt=new le(0,0,0,0);return{setMask:function(Ot){pt!==Ot&&!B&&(r.colorMask(Ot,Ot,Ot,Ot),pt=Ot)},setLocked:function(Ot){B=Ot},setClear:function(Ot,be,Pe,on,Pn){Pn===!0&&(Ot*=on,be*=on,Pe*=on),vt.set(Ot,be,Pe,on),Vt.equals(vt)===!1&&(r.clearColor(Ot,be,Pe,on),Vt.copy(vt))},reset:function(){B=!1,pt=null,Vt.set(-1,0,0,0)}}}function s(){let B=!1,vt=null,pt=null,Vt=null;return{setTest:function(Ot){Ot?qt(r.DEPTH_TEST):It(r.DEPTH_TEST)},setMask:function(Ot){vt!==Ot&&!B&&(r.depthMask(Ot),vt=Ot)},setFunc:function(Ot){if(pt!==Ot){switch(Ot){case sx:r.depthFunc(r.NEVER);break;case rx:r.depthFunc(r.ALWAYS);break;case ax:r.depthFunc(r.LESS);break;case _c:r.depthFunc(r.LEQUAL);break;case ox:r.depthFunc(r.EQUAL);break;case cx:r.depthFunc(r.GEQUAL);break;case lx:r.depthFunc(r.GREATER);break;case hx:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}pt=Ot}},setLocked:function(Ot){B=Ot},setClear:function(Ot){Vt!==Ot&&(r.clearDepth(Ot),Vt=Ot)},reset:function(){B=!1,vt=null,pt=null,Vt=null}}}function a(){let B=!1,vt=null,pt=null,Vt=null,Ot=null,be=null,Pe=null,on=null,Pn=null;return{setTest:function(Le){B||(Le?qt(r.STENCIL_TEST):It(r.STENCIL_TEST))},setMask:function(Le){vt!==Le&&!B&&(r.stencilMask(Le),vt=Le)},setFunc:function(Le,Ln,wi){(pt!==Le||Vt!==Ln||Ot!==wi)&&(r.stencilFunc(Le,Ln,wi),pt=Le,Vt=Ln,Ot=wi)},setOp:function(Le,Ln,wi){(be!==Le||Pe!==Ln||on!==wi)&&(r.stencilOp(Le,Ln,wi),be=Le,Pe=Ln,on=wi)},setLocked:function(Le){B=Le},setClear:function(Le){Pn!==Le&&(r.clearStencil(Le),Pn=Le)},reset:function(){B=!1,vt=null,pt=null,Vt=null,Ot=null,be=null,Pe=null,on=null,Pn=null}}}let o=new i,c=new s,l=new a,h=new WeakMap,u=new WeakMap,f={},d={},g=new WeakMap,v=[],m=null,p=!1,x=null,b=null,E=null,M=null,y=null,w=null,C=null,_=new et(0,0,0),A=0,I=!1,H=null,N=null,L=null,P=null,D=null,k=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,G=0,X=r.getParameter(r.VERSION);X.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(X)[1]),O=G>=1):X.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),O=G>=2);let K=null,it={},z=r.getParameter(r.SCISSOR_BOX),Q=r.getParameter(r.VIEWPORT),lt=new le().fromArray(z),ht=new le().fromArray(Q);function yt(B,vt,pt,Vt){let Ot=new Uint8Array(4),be=r.createTexture();r.bindTexture(B,be),r.texParameteri(B,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(B,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Pe=0;Pe<pt;Pe++)n&&(B===r.TEXTURE_3D||B===r.TEXTURE_2D_ARRAY)?r.texImage3D(vt,0,r.RGBA,1,1,Vt,0,r.RGBA,r.UNSIGNED_BYTE,Ot):r.texImage2D(vt+Pe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ot);return be}let Nt={};Nt[r.TEXTURE_2D]=yt(r.TEXTURE_2D,r.TEXTURE_2D,1),Nt[r.TEXTURE_CUBE_MAP]=yt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Nt[r.TEXTURE_2D_ARRAY]=yt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Nt[r.TEXTURE_3D]=yt(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),qt(r.DEPTH_TEST),c.setFunc(_c),Qt(!1),R(ip),qt(r.CULL_FACE),Lt(ys);function qt(B){f[B]!==!0&&(r.enable(B),f[B]=!0)}function It(B){f[B]!==!1&&(r.disable(B),f[B]=!1)}function ne(B,vt){return d[B]!==vt?(r.bindFramebuffer(B,vt),d[B]=vt,n&&(B===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=vt),B===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=vt)),!0):!1}function Y(B,vt){let pt=v,Vt=!1;if(B)if(pt=g.get(vt),pt===void 0&&(pt=[],g.set(vt,pt)),B.isWebGLMultipleRenderTargets){let Ot=B.texture;if(pt.length!==Ot.length||pt[0]!==r.COLOR_ATTACHMENT0){for(let be=0,Pe=Ot.length;be<Pe;be++)pt[be]=r.COLOR_ATTACHMENT0+be;pt.length=Ot.length,Vt=!0}}else pt[0]!==r.COLOR_ATTACHMENT0&&(pt[0]=r.COLOR_ATTACHMENT0,Vt=!0);else pt[0]!==r.BACK&&(pt[0]=r.BACK,Vt=!0);Vt&&(e.isWebGL2?r.drawBuffers(pt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(pt))}function Oe(B){return m!==B?(r.useProgram(B),m=B,!0):!1}let Ut={[Zi]:r.FUNC_ADD,[qv]:r.FUNC_SUBTRACT,[Xv]:r.FUNC_REVERSE_SUBTRACT};if(n)Ut[ap]=r.MIN,Ut[op]=r.MAX;else{let B=t.get("EXT_blend_minmax");B!==null&&(Ut[ap]=B.MIN_EXT,Ut[op]=B.MAX_EXT)}let jt={[Ju]:r.ZERO,[jv]:r.ONE,[Zu]:r.SRC_COLOR,[iu]:r.SRC_ALPHA,[$v]:r.SRC_ALPHA_SATURATE,[Zv]:r.DST_COLOR,[Kv]:r.DST_ALPHA,[Yv]:r.ONE_MINUS_SRC_COLOR,[su]:r.ONE_MINUS_SRC_ALPHA,[Qv]:r.ONE_MINUS_DST_COLOR,[Jv]:r.ONE_MINUS_DST_ALPHA,[tx]:r.CONSTANT_COLOR,[ex]:r.ONE_MINUS_CONSTANT_COLOR,[nx]:r.CONSTANT_ALPHA,[ix]:r.ONE_MINUS_CONSTANT_ALPHA};function Lt(B,vt,pt,Vt,Ot,be,Pe,on,Pn,Le){if(B===ys){p===!0&&(It(r.BLEND),p=!1);return}if(p===!1&&(qt(r.BLEND),p=!0),B!==Ku){if(B!==x||Le!==I){if((b!==Zi||y!==Zi)&&(r.blendEquation(r.FUNC_ADD),b=Zi,y=Zi),Le)switch(B){case Ur:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case tn:r.blendFunc(r.ONE,r.ONE);break;case sp:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case rp:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Ur:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case tn:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case sp:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case rp:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}E=null,M=null,w=null,C=null,_.set(0,0,0),A=0,x=B,I=Le}return}Ot=Ot||vt,be=be||pt,Pe=Pe||Vt,(vt!==b||Ot!==y)&&(r.blendEquationSeparate(Ut[vt],Ut[Ot]),b=vt,y=Ot),(pt!==E||Vt!==M||be!==w||Pe!==C)&&(r.blendFuncSeparate(jt[pt],jt[Vt],jt[be],jt[Pe]),E=pt,M=Vt,w=be,C=Pe),(on.equals(_)===!1||Pn!==A)&&(r.blendColor(on.r,on.g,on.b,Pn),_.copy(on),A=Pn),x=B,I=!1}function Se(B,vt){B.side===de?It(r.CULL_FACE):qt(r.CULL_FACE);let pt=B.side===vn;vt&&(pt=!pt),Qt(pt),B.blending===Ur&&B.transparent===!1?Lt(ys):Lt(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),c.setFunc(B.depthFunc),c.setTest(B.depthTest),c.setMask(B.depthWrite),o.setMask(B.colorWrite);let Vt=B.stencilWrite;l.setTest(Vt),Vt&&(l.setMask(B.stencilWriteMask),l.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),l.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),U(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?qt(r.SAMPLE_ALPHA_TO_COVERAGE):It(r.SAMPLE_ALPHA_TO_COVERAGE)}function Qt(B){H!==B&&(B?r.frontFace(r.CW):r.frontFace(r.CCW),H=B)}function R(B){B!==Vv?(qt(r.CULL_FACE),B!==N&&(B===ip?r.cullFace(r.BACK):B===Wv?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):It(r.CULL_FACE),N=B}function S(B){B!==L&&(O&&r.lineWidth(B),L=B)}function U(B,vt,pt){B?(qt(r.POLYGON_OFFSET_FILL),(P!==vt||D!==pt)&&(r.polygonOffset(vt,pt),P=vt,D=pt)):It(r.POLYGON_OFFSET_FILL)}function V(B){B?qt(r.SCISSOR_TEST):It(r.SCISSOR_TEST)}function j(B){B===void 0&&(B=r.TEXTURE0+k-1),K!==B&&(r.activeTexture(B),K=B)}function W(B,vt,pt){pt===void 0&&(K===null?pt=r.TEXTURE0+k-1:pt=K);let Vt=it[pt];Vt===void 0&&(Vt={type:void 0,texture:void 0},it[pt]=Vt),(Vt.type!==B||Vt.texture!==vt)&&(K!==pt&&(r.activeTexture(pt),K=pt),r.bindTexture(B,vt||Nt[B]),Vt.type=B,Vt.texture=vt)}function ot(){let B=it[K];B!==void 0&&B.type!==void 0&&(r.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function st(){try{r.compressedTexImage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ct(){try{r.compressedTexImage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ut(){try{r.texSubImage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function gt(){try{r.texSubImage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function J(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Et(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function At(){try{r.texStorage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ct(){try{r.texStorage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function _t(){try{r.texImage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function dt(){try{r.texImage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function kt(B){lt.equals(B)===!1&&(r.scissor(B.x,B.y,B.z,B.w),lt.copy(B))}function te(B){ht.equals(B)===!1&&(r.viewport(B.x,B.y,B.z,B.w),ht.copy(B))}function se(B,vt){let pt=u.get(vt);pt===void 0&&(pt=new WeakMap,u.set(vt,pt));let Vt=pt.get(B);Vt===void 0&&(Vt=r.getUniformBlockIndex(vt,B.name),pt.set(B,Vt))}function Kt(B,vt){let Vt=u.get(vt).get(B);h.get(vt)!==Vt&&(r.uniformBlockBinding(vt,Vt,B.__bindingPointIndex),h.set(vt,Vt))}function ft(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),f={},K=null,it={},d={},g=new WeakMap,v=[],m=null,p=!1,x=null,b=null,E=null,M=null,y=null,w=null,C=null,_=new et(0,0,0),A=0,I=!1,H=null,N=null,L=null,P=null,D=null,lt.set(0,0,r.canvas.width,r.canvas.height),ht.set(0,0,r.canvas.width,r.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:qt,disable:It,bindFramebuffer:ne,drawBuffers:Y,useProgram:Oe,setBlending:Lt,setMaterial:Se,setFlipSided:Qt,setCullFace:R,setLineWidth:S,setPolygonOffset:U,setScissorTest:V,activeTexture:j,bindTexture:W,unbindTexture:ot,compressedTexImage2D:st,compressedTexImage3D:ct,texImage2D:_t,texImage3D:dt,updateUBOMapping:se,uniformBlockBinding:Kt,texStorage2D:At,texStorage3D:Ct,texSubImage2D:ut,texSubImage3D:gt,compressedTexSubImage2D:J,compressedTexSubImage3D:Et,scissor:kt,viewport:te,reset:ft}}function OM(r,t,e,n,i,s,a){let o=i.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,S){return d?new OffscreenCanvas(R,S):Xa("canvas")}function v(R,S,U,V){let j=1;if((R.width>V||R.height>V)&&(j=V/Math.max(R.width,R.height)),j<1||S===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){let W=S?Rc:Math.floor,ot=W(j*R.width),st=W(j*R.height);u===void 0&&(u=g(ot,st));let ct=U?g(ot,st):u;return ct.width=ot,ct.height=st,ct.getContext("2d").drawImage(R,0,0,ot,st),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+ot+"x"+st+")."),ct}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function m(R){return lu(R.width)&&lu(R.height)}function p(R){return o?!1:R.wrapS!==qn||R.wrapT!==qn||R.minFilter!==Ke&&R.minFilter!==Qe}function x(R,S){return R.generateMipmaps&&S&&R.minFilter!==Ke&&R.minFilter!==Qe}function b(R){r.generateMipmap(R)}function E(R,S,U,V,j=!1){if(o===!1)return S;if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let W=S;if(S===r.RED&&(U===r.FLOAT&&(W=r.R32F),U===r.HALF_FLOAT&&(W=r.R16F),U===r.UNSIGNED_BYTE&&(W=r.R8)),S===r.RED_INTEGER&&(U===r.UNSIGNED_BYTE&&(W=r.R8UI),U===r.UNSIGNED_SHORT&&(W=r.R16UI),U===r.UNSIGNED_INT&&(W=r.R32UI),U===r.BYTE&&(W=r.R8I),U===r.SHORT&&(W=r.R16I),U===r.INT&&(W=r.R32I)),S===r.RG&&(U===r.FLOAT&&(W=r.RG32F),U===r.HALF_FLOAT&&(W=r.RG16F),U===r.UNSIGNED_BYTE&&(W=r.RG8)),S===r.RGBA){let ot=j?wc:pe.getTransfer(V);U===r.FLOAT&&(W=r.RGBA32F),U===r.HALF_FLOAT&&(W=r.RGBA16F),U===r.UNSIGNED_BYTE&&(W=ot===He?r.SRGB8_ALPHA8:r.RGBA8),U===r.UNSIGNED_SHORT_4_4_4_4&&(W=r.RGBA4),U===r.UNSIGNED_SHORT_5_5_5_1&&(W=r.RGB5_A1)}return(W===r.R16F||W===r.R32F||W===r.RG16F||W===r.RG32F||W===r.RGBA16F||W===r.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function M(R,S,U){return x(R,U)===!0||R.isFramebufferTexture&&R.minFilter!==Ke&&R.minFilter!==Qe?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function y(R){return R===Ke||R===Mc||R===ka?r.NEAREST:r.LINEAR}function w(R){let S=R.target;S.removeEventListener("dispose",w),_(S),S.isVideoTexture&&h.delete(S)}function C(R){let S=R.target;S.removeEventListener("dispose",C),I(S)}function _(R){let S=n.get(R);if(S.__webglInit===void 0)return;let U=R.source,V=f.get(U);if(V){let j=V[S.__cacheKey];j.usedTimes--,j.usedTimes===0&&A(R),Object.keys(V).length===0&&f.delete(U)}n.remove(R)}function A(R){let S=n.get(R);r.deleteTexture(S.__webglTexture);let U=R.source,V=f.get(U);delete V[S.__cacheKey],a.memory.textures--}function I(R){let S=R.texture,U=n.get(R),V=n.get(S);if(V.__webglTexture!==void 0&&(r.deleteTexture(V.__webglTexture),a.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(U.__webglFramebuffer[j]))for(let W=0;W<U.__webglFramebuffer[j].length;W++)r.deleteFramebuffer(U.__webglFramebuffer[j][W]);else r.deleteFramebuffer(U.__webglFramebuffer[j]);U.__webglDepthbuffer&&r.deleteRenderbuffer(U.__webglDepthbuffer[j])}else{if(Array.isArray(U.__webglFramebuffer))for(let j=0;j<U.__webglFramebuffer.length;j++)r.deleteFramebuffer(U.__webglFramebuffer[j]);else r.deleteFramebuffer(U.__webglFramebuffer);if(U.__webglDepthbuffer&&r.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&r.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let j=0;j<U.__webglColorRenderbuffer.length;j++)U.__webglColorRenderbuffer[j]&&r.deleteRenderbuffer(U.__webglColorRenderbuffer[j]);U.__webglDepthRenderbuffer&&r.deleteRenderbuffer(U.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let j=0,W=S.length;j<W;j++){let ot=n.get(S[j]);ot.__webglTexture&&(r.deleteTexture(ot.__webglTexture),a.memory.textures--),n.remove(S[j])}n.remove(S),n.remove(R)}let H=0;function N(){H=0}function L(){let R=H;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),H+=1,R}function P(R){let S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function D(R,S){let U=n.get(R);if(R.isVideoTexture&&Se(R),R.isRenderTargetTexture===!1&&R.version>0&&U.__version!==R.version){let V=R.image;if(V===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{lt(U,R,S);return}}e.bindTexture(r.TEXTURE_2D,U.__webglTexture,r.TEXTURE0+S)}function k(R,S){let U=n.get(R);if(R.version>0&&U.__version!==R.version){lt(U,R,S);return}e.bindTexture(r.TEXTURE_2D_ARRAY,U.__webglTexture,r.TEXTURE0+S)}function O(R,S){let U=n.get(R);if(R.version>0&&U.__version!==R.version){lt(U,R,S);return}e.bindTexture(r.TEXTURE_3D,U.__webglTexture,r.TEXTURE0+S)}function G(R,S){let U=n.get(R);if(R.version>0&&U.__version!==R.version){ht(U,R,S);return}e.bindTexture(r.TEXTURE_CUBE_MAP,U.__webglTexture,r.TEXTURE0+S)}let X={[Fn]:r.REPEAT,[qn]:r.CLAMP_TO_EDGE,[qa]:r.MIRRORED_REPEAT},K={[Ke]:r.NEAREST,[Mc]:r.NEAREST_MIPMAP_NEAREST,[ka]:r.NEAREST_MIPMAP_LINEAR,[Qe]:r.LINEAR,[tf]:r.LINEAR_MIPMAP_NEAREST,[Pi]:r.LINEAR_MIPMAP_LINEAR},it={[Lx]:r.NEVER,[Ux]:r.ALWAYS,[Ix]:r.LESS,[e0]:r.LEQUAL,[Dx]:r.EQUAL,[Nx]:r.GEQUAL,[Fx]:r.GREATER,[Hx]:r.NOTEQUAL};function z(R,S,U){if(U?(r.texParameteri(R,r.TEXTURE_WRAP_S,X[S.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,X[S.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,X[S.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,K[S.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,K[S.minFilter])):(r.texParameteri(R,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(R,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(S.wrapS!==qn||S.wrapT!==qn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(R,r.TEXTURE_MAG_FILTER,y(S.magFilter)),r.texParameteri(R,r.TEXTURE_MIN_FILTER,y(S.minFilter)),S.minFilter!==Ke&&S.minFilter!==Qe&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,it[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let V=t.get("EXT_texture_filter_anisotropic");if(S.magFilter===Ke||S.minFilter!==ka&&S.minFilter!==Pi||S.type===Qi&&t.has("OES_texture_float_linear")===!1||o===!1&&S.type===Un&&t.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(r.texParameterf(R,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function Q(R,S){let U=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",w));let V=S.source,j=f.get(V);j===void 0&&(j={},f.set(V,j));let W=P(S);if(W!==R.__cacheKey){j[W]===void 0&&(j[W]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,U=!0),j[W].usedTimes++;let ot=j[R.__cacheKey];ot!==void 0&&(j[R.__cacheKey].usedTimes--,ot.usedTimes===0&&A(S)),R.__cacheKey=W,R.__webglTexture=j[W].texture}return U}function lt(R,S,U){let V=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(V=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(V=r.TEXTURE_3D);let j=Q(R,S),W=S.source;e.bindTexture(V,R.__webglTexture,r.TEXTURE0+U);let ot=n.get(W);if(W.version!==ot.__version||j===!0){e.activeTexture(r.TEXTURE0+U);let st=pe.getPrimaries(pe.workingColorSpace),ct=S.colorSpace===En?null:pe.getPrimaries(S.colorSpace),ut=S.colorSpace===En||st===ct?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);let gt=p(S)&&m(S.image)===!1,J=v(S.image,gt,!1,i.maxTextureSize);J=Qt(S,J);let Et=m(J)||o,At=s.convert(S.format,S.colorSpace),Ct=s.convert(S.type),_t=E(S.internalFormat,At,Ct,S.colorSpace,S.isVideoTexture);z(V,S,Et);let dt,kt=S.mipmaps,te=o&&S.isVideoTexture!==!0&&_t!==Qm,se=ot.__version===void 0||j===!0,Kt=M(S,J,Et);if(S.isDepthTexture)_t=r.DEPTH_COMPONENT,o?S.type===Qi?_t=r.DEPTH_COMPONENT32F:S.type===Ai?_t=r.DEPTH_COMPONENT24:S.type===Ks?_t=r.DEPTH24_STENCIL8:_t=r.DEPTH_COMPONENT16:S.type===Qi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Js&&_t===r.DEPTH_COMPONENT&&S.type!==ef&&S.type!==Ai&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=Ai,Ct=s.convert(S.type)),S.format===Gr&&_t===r.DEPTH_COMPONENT&&(_t=r.DEPTH_STENCIL,S.type!==Ks&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Ks,Ct=s.convert(S.type))),se&&(te?e.texStorage2D(r.TEXTURE_2D,1,_t,J.width,J.height):e.texImage2D(r.TEXTURE_2D,0,_t,J.width,J.height,0,At,Ct,null));else if(S.isDataTexture)if(kt.length>0&&Et){te&&se&&e.texStorage2D(r.TEXTURE_2D,Kt,_t,kt[0].width,kt[0].height);for(let ft=0,B=kt.length;ft<B;ft++)dt=kt[ft],te?e.texSubImage2D(r.TEXTURE_2D,ft,0,0,dt.width,dt.height,At,Ct,dt.data):e.texImage2D(r.TEXTURE_2D,ft,_t,dt.width,dt.height,0,At,Ct,dt.data);S.generateMipmaps=!1}else te?(se&&e.texStorage2D(r.TEXTURE_2D,Kt,_t,J.width,J.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,J.width,J.height,At,Ct,J.data)):e.texImage2D(r.TEXTURE_2D,0,_t,J.width,J.height,0,At,Ct,J.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){te&&se&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Kt,_t,kt[0].width,kt[0].height,J.depth);for(let ft=0,B=kt.length;ft<B;ft++)dt=kt[ft],S.format!==ti?At!==null?te?e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ft,0,0,0,dt.width,dt.height,J.depth,At,dt.data,0,0):e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ft,_t,dt.width,dt.height,J.depth,0,dt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):te?e.texSubImage3D(r.TEXTURE_2D_ARRAY,ft,0,0,0,dt.width,dt.height,J.depth,At,Ct,dt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,ft,_t,dt.width,dt.height,J.depth,0,At,Ct,dt.data)}else{te&&se&&e.texStorage2D(r.TEXTURE_2D,Kt,_t,kt[0].width,kt[0].height);for(let ft=0,B=kt.length;ft<B;ft++)dt=kt[ft],S.format!==ti?At!==null?te?e.compressedTexSubImage2D(r.TEXTURE_2D,ft,0,0,dt.width,dt.height,At,dt.data):e.compressedTexImage2D(r.TEXTURE_2D,ft,_t,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):te?e.texSubImage2D(r.TEXTURE_2D,ft,0,0,dt.width,dt.height,At,Ct,dt.data):e.texImage2D(r.TEXTURE_2D,ft,_t,dt.width,dt.height,0,At,Ct,dt.data)}else if(S.isDataArrayTexture)te?(se&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Kt,_t,J.width,J.height,J.depth),e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,At,Ct,J.data)):e.texImage3D(r.TEXTURE_2D_ARRAY,0,_t,J.width,J.height,J.depth,0,At,Ct,J.data);else if(S.isData3DTexture)te?(se&&e.texStorage3D(r.TEXTURE_3D,Kt,_t,J.width,J.height,J.depth),e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,At,Ct,J.data)):e.texImage3D(r.TEXTURE_3D,0,_t,J.width,J.height,J.depth,0,At,Ct,J.data);else if(S.isFramebufferTexture){if(se)if(te)e.texStorage2D(r.TEXTURE_2D,Kt,_t,J.width,J.height);else{let ft=J.width,B=J.height;for(let vt=0;vt<Kt;vt++)e.texImage2D(r.TEXTURE_2D,vt,_t,ft,B,0,At,Ct,null),ft>>=1,B>>=1}}else if(kt.length>0&&Et){te&&se&&e.texStorage2D(r.TEXTURE_2D,Kt,_t,kt[0].width,kt[0].height);for(let ft=0,B=kt.length;ft<B;ft++)dt=kt[ft],te?e.texSubImage2D(r.TEXTURE_2D,ft,0,0,At,Ct,dt):e.texImage2D(r.TEXTURE_2D,ft,_t,At,Ct,dt);S.generateMipmaps=!1}else te?(se&&e.texStorage2D(r.TEXTURE_2D,Kt,_t,J.width,J.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,At,Ct,J)):e.texImage2D(r.TEXTURE_2D,0,_t,At,Ct,J);x(S,Et)&&b(V),ot.__version=W.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function ht(R,S,U){if(S.image.length!==6)return;let V=Q(R,S),j=S.source;e.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+U);let W=n.get(j);if(j.version!==W.__version||V===!0){e.activeTexture(r.TEXTURE0+U);let ot=pe.getPrimaries(pe.workingColorSpace),st=S.colorSpace===En?null:pe.getPrimaries(S.colorSpace),ct=S.colorSpace===En||ot===st?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);let ut=S.isCompressedTexture||S.image[0].isCompressedTexture,gt=S.image[0]&&S.image[0].isDataTexture,J=[];for(let ft=0;ft<6;ft++)!ut&&!gt?J[ft]=v(S.image[ft],!1,!0,i.maxCubemapSize):J[ft]=gt?S.image[ft].image:S.image[ft],J[ft]=Qt(S,J[ft]);let Et=J[0],At=m(Et)||o,Ct=s.convert(S.format,S.colorSpace),_t=s.convert(S.type),dt=E(S.internalFormat,Ct,_t,S.colorSpace),kt=o&&S.isVideoTexture!==!0,te=W.__version===void 0||V===!0,se=M(S,Et,At);z(r.TEXTURE_CUBE_MAP,S,At);let Kt;if(ut){kt&&te&&e.texStorage2D(r.TEXTURE_CUBE_MAP,se,dt,Et.width,Et.height);for(let ft=0;ft<6;ft++){Kt=J[ft].mipmaps;for(let B=0;B<Kt.length;B++){let vt=Kt[B];S.format!==ti?Ct!==null?kt?e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,B,0,0,vt.width,vt.height,Ct,vt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,B,dt,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):kt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,B,0,0,vt.width,vt.height,Ct,_t,vt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,B,dt,vt.width,vt.height,0,Ct,_t,vt.data)}}}else{Kt=S.mipmaps,kt&&te&&(Kt.length>0&&se++,e.texStorage2D(r.TEXTURE_CUBE_MAP,se,dt,J[0].width,J[0].height));for(let ft=0;ft<6;ft++)if(gt){kt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,J[ft].width,J[ft].height,Ct,_t,J[ft].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,dt,J[ft].width,J[ft].height,0,Ct,_t,J[ft].data);for(let B=0;B<Kt.length;B++){let pt=Kt[B].image[ft].image;kt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,B+1,0,0,pt.width,pt.height,Ct,_t,pt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,B+1,dt,pt.width,pt.height,0,Ct,_t,pt.data)}}else{kt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,Ct,_t,J[ft]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,dt,Ct,_t,J[ft]);for(let B=0;B<Kt.length;B++){let vt=Kt[B];kt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,B+1,0,0,Ct,_t,vt.image[ft]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,B+1,dt,Ct,_t,vt.image[ft])}}}x(S,At)&&b(r.TEXTURE_CUBE_MAP),W.__version=j.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function yt(R,S,U,V,j,W){let ot=s.convert(U.format,U.colorSpace),st=s.convert(U.type),ct=E(U.internalFormat,ot,st,U.colorSpace);if(!n.get(S).__hasExternalTextures){let gt=Math.max(1,S.width>>W),J=Math.max(1,S.height>>W);j===r.TEXTURE_3D||j===r.TEXTURE_2D_ARRAY?e.texImage3D(j,W,ct,gt,J,S.depth,0,ot,st,null):e.texImage2D(j,W,ct,gt,J,0,ot,st,null)}e.bindFramebuffer(r.FRAMEBUFFER,R),Lt(S)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,V,j,n.get(U).__webglTexture,0,jt(S)):(j===r.TEXTURE_2D||j>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,V,j,n.get(U).__webglTexture,W),e.bindFramebuffer(r.FRAMEBUFFER,null)}function Nt(R,S,U){if(r.bindRenderbuffer(r.RENDERBUFFER,R),S.depthBuffer&&!S.stencilBuffer){let V=o===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(U||Lt(S)){let j=S.depthTexture;j&&j.isDepthTexture&&(j.type===Qi?V=r.DEPTH_COMPONENT32F:j.type===Ai&&(V=r.DEPTH_COMPONENT24));let W=jt(S);Lt(S)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,W,V,S.width,S.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,W,V,S.width,S.height)}else r.renderbufferStorage(r.RENDERBUFFER,V,S.width,S.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,R)}else if(S.depthBuffer&&S.stencilBuffer){let V=jt(S);U&&Lt(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,V,r.DEPTH24_STENCIL8,S.width,S.height):Lt(S)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,V,r.DEPTH24_STENCIL8,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,R)}else{let V=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let j=0;j<V.length;j++){let W=V[j],ot=s.convert(W.format,W.colorSpace),st=s.convert(W.type),ct=E(W.internalFormat,ot,st,W.colorSpace),ut=jt(S);U&&Lt(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ut,ct,S.width,S.height):Lt(S)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ut,ct,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,ct,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function qt(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),D(S.depthTexture,0);let V=n.get(S.depthTexture).__webglTexture,j=jt(S);if(S.depthTexture.format===Js)Lt(S)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,V,0,j):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,V,0);else if(S.depthTexture.format===Gr)Lt(S)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,V,0,j):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,V,0);else throw new Error("Unknown depthTexture format")}function It(R){let S=n.get(R),U=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");qt(S.__webglFramebuffer,R)}else if(U){S.__webglDepthbuffer=[];for(let V=0;V<6;V++)e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[V]),S.__webglDepthbuffer[V]=r.createRenderbuffer(),Nt(S.__webglDepthbuffer[V],R,!1)}else e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=r.createRenderbuffer(),Nt(S.__webglDepthbuffer,R,!1);e.bindFramebuffer(r.FRAMEBUFFER,null)}function ne(R,S,U){let V=n.get(R);S!==void 0&&yt(V.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),U!==void 0&&It(R)}function Y(R){let S=R.texture,U=n.get(R),V=n.get(S);R.addEventListener("dispose",C),R.isWebGLMultipleRenderTargets!==!0&&(V.__webglTexture===void 0&&(V.__webglTexture=r.createTexture()),V.__version=S.version,a.memory.textures++);let j=R.isWebGLCubeRenderTarget===!0,W=R.isWebGLMultipleRenderTargets===!0,ot=m(R)||o;if(j){U.__webglFramebuffer=[];for(let st=0;st<6;st++)if(o&&S.mipmaps&&S.mipmaps.length>0){U.__webglFramebuffer[st]=[];for(let ct=0;ct<S.mipmaps.length;ct++)U.__webglFramebuffer[st][ct]=r.createFramebuffer()}else U.__webglFramebuffer[st]=r.createFramebuffer()}else{if(o&&S.mipmaps&&S.mipmaps.length>0){U.__webglFramebuffer=[];for(let st=0;st<S.mipmaps.length;st++)U.__webglFramebuffer[st]=r.createFramebuffer()}else U.__webglFramebuffer=r.createFramebuffer();if(W)if(i.drawBuffers){let st=R.texture;for(let ct=0,ut=st.length;ct<ut;ct++){let gt=n.get(st[ct]);gt.__webglTexture===void 0&&(gt.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&R.samples>0&&Lt(R)===!1){let st=W?S:[S];U.__webglMultisampledFramebuffer=r.createFramebuffer(),U.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let ct=0;ct<st.length;ct++){let ut=st[ct];U.__webglColorRenderbuffer[ct]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,U.__webglColorRenderbuffer[ct]);let gt=s.convert(ut.format,ut.colorSpace),J=s.convert(ut.type),Et=E(ut.internalFormat,gt,J,ut.colorSpace,R.isXRRenderTarget===!0),At=jt(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,At,Et,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ct,r.RENDERBUFFER,U.__webglColorRenderbuffer[ct])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(U.__webglDepthRenderbuffer=r.createRenderbuffer(),Nt(U.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(j){e.bindTexture(r.TEXTURE_CUBE_MAP,V.__webglTexture),z(r.TEXTURE_CUBE_MAP,S,ot);for(let st=0;st<6;st++)if(o&&S.mipmaps&&S.mipmaps.length>0)for(let ct=0;ct<S.mipmaps.length;ct++)yt(U.__webglFramebuffer[st][ct],R,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+st,ct);else yt(U.__webglFramebuffer[st],R,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+st,0);x(S,ot)&&b(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(W){let st=R.texture;for(let ct=0,ut=st.length;ct<ut;ct++){let gt=st[ct],J=n.get(gt);e.bindTexture(r.TEXTURE_2D,J.__webglTexture),z(r.TEXTURE_2D,gt,ot),yt(U.__webglFramebuffer,R,gt,r.COLOR_ATTACHMENT0+ct,r.TEXTURE_2D,0),x(gt,ot)&&b(r.TEXTURE_2D)}e.unbindTexture()}else{let st=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(o?st=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(st,V.__webglTexture),z(st,S,ot),o&&S.mipmaps&&S.mipmaps.length>0)for(let ct=0;ct<S.mipmaps.length;ct++)yt(U.__webglFramebuffer[ct],R,S,r.COLOR_ATTACHMENT0,st,ct);else yt(U.__webglFramebuffer,R,S,r.COLOR_ATTACHMENT0,st,0);x(S,ot)&&b(st),e.unbindTexture()}R.depthBuffer&&It(R)}function Oe(R){let S=m(R)||o,U=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let V=0,j=U.length;V<j;V++){let W=U[V];if(x(W,S)){let ot=R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,st=n.get(W).__webglTexture;e.bindTexture(ot,st),b(ot),e.unbindTexture()}}}function Ut(R){if(o&&R.samples>0&&Lt(R)===!1){let S=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],U=R.width,V=R.height,j=r.COLOR_BUFFER_BIT,W=[],ot=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,st=n.get(R),ct=R.isWebGLMultipleRenderTargets===!0;if(ct)for(let ut=0;ut<S.length;ut++)e.bindFramebuffer(r.FRAMEBUFFER,st.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ut,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,st.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ut,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,st.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,st.__webglFramebuffer);for(let ut=0;ut<S.length;ut++){W.push(r.COLOR_ATTACHMENT0+ut),R.depthBuffer&&W.push(ot);let gt=st.__ignoreDepthValues!==void 0?st.__ignoreDepthValues:!1;if(gt===!1&&(R.depthBuffer&&(j|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&(j|=r.STENCIL_BUFFER_BIT)),ct&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,st.__webglColorRenderbuffer[ut]),gt===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[ot]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[ot])),ct){let J=n.get(S[ut]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,J,0)}r.blitFramebuffer(0,0,U,V,0,0,U,V,j,r.NEAREST),l&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,W)}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ct)for(let ut=0;ut<S.length;ut++){e.bindFramebuffer(r.FRAMEBUFFER,st.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ut,r.RENDERBUFFER,st.__webglColorRenderbuffer[ut]);let gt=n.get(S[ut]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,st.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ut,r.TEXTURE_2D,gt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,st.__webglMultisampledFramebuffer)}}function jt(R){return Math.min(i.maxSamples,R.samples)}function Lt(R){let S=n.get(R);return o&&R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Se(R){let S=a.render.frame;h.get(R)!==S&&(h.set(R,S),R.update())}function Qt(R,S){let U=R.colorSpace,V=R.format,j=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===cu||U!==en&&U!==En&&(pe.getTransfer(U)===He?o===!1?t.has("EXT_sRGB")===!0&&V===ti?(R.format=cu,R.minFilter=Qe,R.generateMipmaps=!1):S=Cc.sRGBToLinear(S):(V!==ti||j!==Ri)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),S}this.allocateTextureUnit=L,this.resetTextureUnits=N,this.setTexture2D=D,this.setTexture2DArray=k,this.setTexture3D=O,this.setTextureCube=G,this.rebindTextures=ne,this.setupRenderTarget=Y,this.updateRenderTargetMipmap=Oe,this.updateMultisampleRenderTarget=Ut,this.setupDepthRenderbuffer=It,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=Lt}function zM(r,t,e){let n=e.isWebGL2;function i(s,a=En){let o,c=pe.getTransfer(a);if(s===Ri)return r.UNSIGNED_BYTE;if(s===jm)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Ym)return r.UNSIGNED_SHORT_5_5_5_1;if(s===bx)return r.BYTE;if(s===yx)return r.SHORT;if(s===ef)return r.UNSIGNED_SHORT;if(s===Xm)return r.INT;if(s===Ai)return r.UNSIGNED_INT;if(s===Qi)return r.FLOAT;if(s===Un)return n?r.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===_x)return r.ALPHA;if(s===ti)return r.RGBA;if(s===Mx)return r.LUMINANCE;if(s===Ex)return r.LUMINANCE_ALPHA;if(s===Js)return r.DEPTH_COMPONENT;if(s===Gr)return r.DEPTH_STENCIL;if(s===cu)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===wx)return r.RED;if(s===Km)return r.RED_INTEGER;if(s===Tx)return r.RG;if(s===Jm)return r.RG_INTEGER;if(s===Zm)return r.RGBA_INTEGER;if(s===yh||s===_h||s===Mh||s===Eh)if(c===He)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===yh)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===_h)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Mh)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Eh)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===yh)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===_h)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Mh)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Eh)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===lp||s===hp||s===up||s===fp)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===lp)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===hp)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===up)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===fp)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Qm)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===dp||s===pp)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(s===dp)return c===He?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===pp)return c===He?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===mp||s===gp||s===vp||s===xp||s===bp||s===yp||s===_p||s===Mp||s===Ep||s===wp||s===Tp||s===Sp||s===Ap||s===Rp)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(s===mp)return c===He?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===gp)return c===He?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===vp)return c===He?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===xp)return c===He?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===bp)return c===He?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===yp)return c===He?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===_p)return c===He?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Mp)return c===He?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ep)return c===He?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===wp)return c===He?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Tp)return c===He?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Sp)return c===He?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ap)return c===He?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Rp)return c===He?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===wh||s===Cp||s===Pp)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(s===wh)return c===He?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Cp)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Pp)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Sx||s===Lp||s===Ip||s===Dp)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(s===wh)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Lp)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ip)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Dp)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ks?n?r.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}var _u=class extends Ne{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Pt=class extends Re{constructor(){super(),this.isGroup=!0,this.type="Group"}},BM={type:"move"},Ga=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let v of t.hand.values()){let m=e.getJointPose(v,n),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(BM)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Pt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Mu=class extends ts{constructor(t,e){super();let n=this,i=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,g=null,v=e.getContextAttributes(),m=null,p=null,x=[],b=[],E=new rt,M=null,y=new Ne;y.layers.enable(1),y.viewport=new le;let w=new Ne;w.layers.enable(2),w.viewport=new le;let C=[y,w],_=new _u;_.layers.enable(1),_.layers.enable(2);let A=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let Q=x[z];return Q===void 0&&(Q=new Ga,x[z]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(z){let Q=x[z];return Q===void 0&&(Q=new Ga,x[z]=Q),Q.getGripSpace()},this.getHand=function(z){let Q=x[z];return Q===void 0&&(Q=new Ga,x[z]=Q),Q.getHandSpace()};function H(z){let Q=b.indexOf(z.inputSource);if(Q===-1)return;let lt=x[Q];lt!==void 0&&(lt.update(z.inputSource,z.frame,l||a),lt.dispatchEvent({type:z.type,data:z.inputSource}))}function N(){i.removeEventListener("select",H),i.removeEventListener("selectstart",H),i.removeEventListener("selectend",H),i.removeEventListener("squeeze",H),i.removeEventListener("squeezestart",H),i.removeEventListener("squeezeend",H),i.removeEventListener("end",N),i.removeEventListener("inputsourceschange",L);for(let z=0;z<x.length;z++){let Q=b[z];Q!==null&&(b[z]=null,x[z].disconnect(Q))}A=null,I=null,t.setRenderTarget(m),d=null,f=null,u=null,i=null,p=null,it.stop(),n.isPresenting=!1,t.setPixelRatio(M),t.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){s=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){o=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(z){l=z},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(z){if(i=z,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",H),i.addEventListener("selectstart",H),i.addEventListener("selectend",H),i.addEventListener("squeeze",H),i.addEventListener("squeezestart",H),i.addEventListener("squeezeend",H),i.addEventListener("end",N),i.addEventListener("inputsourceschange",L),v.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(E),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let Q={antialias:i.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,e,Q),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),p=new hn(d.framebufferWidth,d.framebufferHeight,{format:ti,type:Ri,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil})}else{let Q=null,lt=null,ht=null;v.depth&&(ht=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=v.stencil?Gr:Js,lt=v.stencil?Ks:Ai);let yt={colorFormat:e.RGBA8,depthFormat:ht,scaleFactor:s};u=new XRWebGLBinding(i,e),f=u.createProjectionLayer(yt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),p=new hn(f.textureWidth,f.textureHeight,{format:ti,type:Ri,depthTexture:new jr(f.textureWidth,f.textureHeight,lt,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0});let Nt=t.properties.get(p);Nt.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),it.setContext(i),it.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function L(z){for(let Q=0;Q<z.removed.length;Q++){let lt=z.removed[Q],ht=b.indexOf(lt);ht>=0&&(b[ht]=null,x[ht].disconnect(lt))}for(let Q=0;Q<z.added.length;Q++){let lt=z.added[Q],ht=b.indexOf(lt);if(ht===-1){for(let Nt=0;Nt<x.length;Nt++)if(Nt>=b.length){b.push(lt),ht=Nt;break}else if(b[Nt]===null){b[Nt]=lt,ht=Nt;break}if(ht===-1)break}let yt=x[ht];yt&&yt.connect(lt)}}let P=new T,D=new T;function k(z,Q,lt){P.setFromMatrixPosition(Q.matrixWorld),D.setFromMatrixPosition(lt.matrixWorld);let ht=P.distanceTo(D),yt=Q.projectionMatrix.elements,Nt=lt.projectionMatrix.elements,qt=yt[14]/(yt[10]-1),It=yt[14]/(yt[10]+1),ne=(yt[9]+1)/yt[5],Y=(yt[9]-1)/yt[5],Oe=(yt[8]-1)/yt[0],Ut=(Nt[8]+1)/Nt[0],jt=qt*Oe,Lt=qt*Ut,Se=ht/(-Oe+Ut),Qt=Se*-Oe;Q.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(Qt),z.translateZ(Se),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();let R=qt+Se,S=It+Se,U=jt-Qt,V=Lt+(ht-Qt),j=ne*It/S*R,W=Y*It/S*R;z.projectionMatrix.makePerspective(U,V,j,W,R,S),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}function O(z,Q){Q===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(Q.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(i===null)return;_.near=w.near=y.near=z.near,_.far=w.far=y.far=z.far,(A!==_.near||I!==_.far)&&(i.updateRenderState({depthNear:_.near,depthFar:_.far}),A=_.near,I=_.far);let Q=z.parent,lt=_.cameras;O(_,Q);for(let ht=0;ht<lt.length;ht++)O(lt[ht],Q);lt.length===2?k(_,y,w):_.projectionMatrix.copy(y.projectionMatrix),G(z,_,Q)};function G(z,Q,lt){lt===null?z.matrix.copy(Q.matrixWorld):(z.matrix.copy(lt.matrixWorld),z.matrix.invert(),z.matrix.multiply(Q.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(Q.projectionMatrix),z.projectionMatrixInverse.copy(Q.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=Wr*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(z){c=z,f!==null&&(f.fixedFoveation=z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=z)};let X=null;function K(z,Q){if(h=Q.getViewerPose(l||a),g=Q,h!==null){let lt=h.views;d!==null&&(t.setRenderTargetFramebuffer(p,d.framebuffer),t.setRenderTarget(p));let ht=!1;lt.length!==_.cameras.length&&(_.cameras.length=0,ht=!0);for(let yt=0;yt<lt.length;yt++){let Nt=lt[yt],qt=null;if(d!==null)qt=d.getViewport(Nt);else{let ne=u.getViewSubImage(f,Nt);qt=ne.viewport,yt===0&&(t.setRenderTargetTextures(p,ne.colorTexture,f.ignoreDepthValues?void 0:ne.depthStencilTexture),t.setRenderTarget(p))}let It=C[yt];It===void 0&&(It=new Ne,It.layers.enable(yt),It.viewport=new le,C[yt]=It),It.matrix.fromArray(Nt.transform.matrix),It.matrix.decompose(It.position,It.quaternion,It.scale),It.projectionMatrix.fromArray(Nt.projectionMatrix),It.projectionMatrixInverse.copy(It.projectionMatrix).invert(),It.viewport.set(qt.x,qt.y,qt.width,qt.height),yt===0&&(_.matrix.copy(It.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),ht===!0&&_.cameras.push(It)}}for(let lt=0;lt<x.length;lt++){let ht=b[lt],yt=x[lt];ht!==null&&yt!==void 0&&yt.update(ht,Q,l||a)}X&&X(z,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}let it=new r0;it.setAnimationLoop(K),this.setAnimationLoop=function(z){X=z},this.dispose=function(){}}};function GM(r,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,s0(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,x,b,E){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,E)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),v(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,x,b):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===vn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===vn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let x=t.get(p).envMap;if(x&&(m.envMap.value=x,m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let b=r._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*b,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,x,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=b*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===vn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){let x=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function VM(r,t,e,n){let i={},s={},a=[],o=e.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(x,b){let E=b.program;n.uniformBlockBinding(x,E)}function l(x,b){let E=i[x.id];E===void 0&&(g(x),E=h(x),i[x.id]=E,x.addEventListener("dispose",m));let M=b.program;n.updateUBOMapping(x,M);let y=t.render.frame;s[x.id]!==y&&(f(x),s[x.id]=y)}function h(x){let b=u();x.__bindingPointIndex=b;let E=r.createBuffer(),M=x.__size,y=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,E),r.bufferData(r.UNIFORM_BUFFER,M,y),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,b,E),E}function u(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){let b=i[x.id],E=x.uniforms,M=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,b);for(let y=0,w=E.length;y<w;y++){let C=Array.isArray(E[y])?E[y]:[E[y]];for(let _=0,A=C.length;_<A;_++){let I=C[_];if(d(I,y,_,M)===!0){let H=I.__offset,N=Array.isArray(I.value)?I.value:[I.value],L=0;for(let P=0;P<N.length;P++){let D=N[P],k=v(D);typeof D=="number"||typeof D=="boolean"?(I.__data[0]=D,r.bufferSubData(r.UNIFORM_BUFFER,H+L,I.__data)):D.isMatrix3?(I.__data[0]=D.elements[0],I.__data[1]=D.elements[1],I.__data[2]=D.elements[2],I.__data[3]=0,I.__data[4]=D.elements[3],I.__data[5]=D.elements[4],I.__data[6]=D.elements[5],I.__data[7]=0,I.__data[8]=D.elements[6],I.__data[9]=D.elements[7],I.__data[10]=D.elements[8],I.__data[11]=0):(D.toArray(I.__data,L),L+=k.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,H,I.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(x,b,E,M){let y=x.value,w=b+"_"+E;if(M[w]===void 0)return typeof y=="number"||typeof y=="boolean"?M[w]=y:M[w]=y.clone(),!0;{let C=M[w];if(typeof y=="number"||typeof y=="boolean"){if(C!==y)return M[w]=y,!0}else if(C.equals(y)===!1)return C.copy(y),!0}return!1}function g(x){let b=x.uniforms,E=0,M=16;for(let w=0,C=b.length;w<C;w++){let _=Array.isArray(b[w])?b[w]:[b[w]];for(let A=0,I=_.length;A<I;A++){let H=_[A],N=Array.isArray(H.value)?H.value:[H.value];for(let L=0,P=N.length;L<P;L++){let D=N[L],k=v(D),O=E%M;O!==0&&M-O<k.boundary&&(E+=M-O),H.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=E,E+=k.storage}}}let y=E%M;return y>0&&(E+=M-y),x.__size=E,x.__cache={},this}function v(x){let b={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(b.boundary=4,b.storage=4):x.isVector2?(b.boundary=8,b.storage=8):x.isVector3||x.isColor?(b.boundary=16,b.storage=12):x.isVector4?(b.boundary=16,b.storage=16):x.isMatrix3?(b.boundary=48,b.storage=48):x.isMatrix4?(b.boundary=64,b.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),b}function m(x){let b=x.target;b.removeEventListener("dispose",m);let E=a.indexOf(b.__bindingPointIndex);a.splice(E,1),r.deleteBuffer(i[b.id]),delete i[b.id],delete s[b.id]}function p(){for(let x in i)r.deleteBuffer(i[x]);a=[],i={},s={}}return{bind:c,update:l,dispose:p}}var Ja=class{constructor(t={}){let{canvas:e=Qx(),context:n=null,depth:i=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=a;let d=new Uint32Array(4),g=new Int32Array(4),v=null,m=null,p=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ue,this._useLegacyLights=!1,this.toneMapping=_s,this.toneMappingExposure=1;let b=this,E=!1,M=0,y=0,w=null,C=-1,_=null,A=new le,I=new le,H=null,N=new et(0),L=0,P=e.width,D=e.height,k=1,O=null,G=null,X=new le(0,0,P,D),K=new le(0,0,P,D),it=!1,z=new Ya,Q=!1,lt=!1,ht=null,yt=new bt,Nt=new rt,qt=new T,It={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ne(){return w===null?k:1}let Y=n;function Oe(F,q){for(let $=0;$<F.length;$++){let tt=F[$],Z=e.getContext(tt,q);if(Z!==null)return Z}return null}try{let F={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r160"),e.addEventListener("webglcontextlost",ft,!1),e.addEventListener("webglcontextrestored",B,!1),e.addEventListener("webglcontextcreationerror",vt,!1),Y===null){let q=["webgl2","webgl","experimental-webgl"];if(b.isWebGL1Renderer===!0&&q.shift(),Y=Oe(q,F),Y===null)throw Oe(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&Y instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),Y.getShaderPrecisionFormat===void 0&&(Y.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(F){throw console.error("THREE.WebGLRenderer: "+F.message),F}let Ut,jt,Lt,Se,Qt,R,S,U,V,j,W,ot,st,ct,ut,gt,J,Et,At,Ct,_t,dt,kt,te;function se(){Ut=new c1(Y),jt=new n1(Y,Ut,t),Ut.init(jt),dt=new zM(Y,Ut,jt),Lt=new kM(Y,Ut,jt),Se=new u1(Y),Qt=new SM,R=new OM(Y,Ut,Lt,Qt,jt,dt,Se),S=new s1(b),U=new o1(b),V=new bb(Y,jt),kt=new t1(Y,Ut,V,jt),j=new l1(Y,V,Se,kt),W=new m1(Y,j,V,Se),At=new p1(Y,jt,R),gt=new i1(Qt),ot=new TM(b,S,U,Ut,jt,kt,gt),st=new GM(b,Qt),ct=new RM,ut=new FM(Ut,jt),Et=new $_(b,S,U,Lt,W,f,c),J=new UM(b,W,jt),te=new VM(Y,Se,jt,Lt),Ct=new e1(Y,Ut,Se,jt),_t=new h1(Y,Ut,Se,jt),Se.programs=ot.programs,b.capabilities=jt,b.extensions=Ut,b.properties=Qt,b.renderLists=ct,b.shadowMap=J,b.state=Lt,b.info=Se}se();let Kt=new Mu(b,Y);this.xr=Kt,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){let F=Ut.get("WEBGL_lose_context");F&&F.loseContext()},this.forceContextRestore=function(){let F=Ut.get("WEBGL_lose_context");F&&F.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(F){F!==void 0&&(k=F,this.setSize(P,D,!1))},this.getSize=function(F){return F.set(P,D)},this.setSize=function(F,q,$=!0){if(Kt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=F,D=q,e.width=Math.floor(F*k),e.height=Math.floor(q*k),$===!0&&(e.style.width=F+"px",e.style.height=q+"px"),this.setViewport(0,0,F,q)},this.getDrawingBufferSize=function(F){return F.set(P*k,D*k).floor()},this.setDrawingBufferSize=function(F,q,$){P=F,D=q,k=$,e.width=Math.floor(F*$),e.height=Math.floor(q*$),this.setViewport(0,0,F,q)},this.getCurrentViewport=function(F){return F.copy(A)},this.getViewport=function(F){return F.copy(X)},this.setViewport=function(F,q,$,tt){F.isVector4?X.set(F.x,F.y,F.z,F.w):X.set(F,q,$,tt),Lt.viewport(A.copy(X).multiplyScalar(k).floor())},this.getScissor=function(F){return F.copy(K)},this.setScissor=function(F,q,$,tt){F.isVector4?K.set(F.x,F.y,F.z,F.w):K.set(F,q,$,tt),Lt.scissor(I.copy(K).multiplyScalar(k).floor())},this.getScissorTest=function(){return it},this.setScissorTest=function(F){Lt.setScissorTest(it=F)},this.setOpaqueSort=function(F){O=F},this.setTransparentSort=function(F){G=F},this.getClearColor=function(F){return F.copy(Et.getClearColor())},this.setClearColor=function(){Et.setClearColor.apply(Et,arguments)},this.getClearAlpha=function(){return Et.getClearAlpha()},this.setClearAlpha=function(){Et.setClearAlpha.apply(Et,arguments)},this.clear=function(F=!0,q=!0,$=!0){let tt=0;if(F){let Z=!1;if(w!==null){let Tt=w.texture.format;Z=Tt===Zm||Tt===Jm||Tt===Km}if(Z){let Tt=w.texture.type,Dt=Tt===Ri||Tt===Ai||Tt===ef||Tt===Ks||Tt===jm||Tt===Ym,Xt=Et.getClearColor(),Zt=Et.getClearAlpha(),re=Xt.r,ee=Xt.g,ie=Xt.b;Dt?(d[0]=re,d[1]=ee,d[2]=ie,d[3]=Zt,Y.clearBufferuiv(Y.COLOR,0,d)):(g[0]=re,g[1]=ee,g[2]=ie,g[3]=Zt,Y.clearBufferiv(Y.COLOR,0,g))}else tt|=Y.COLOR_BUFFER_BIT}q&&(tt|=Y.DEPTH_BUFFER_BIT),$&&(tt|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y.clear(tt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ft,!1),e.removeEventListener("webglcontextrestored",B,!1),e.removeEventListener("webglcontextcreationerror",vt,!1),ct.dispose(),ut.dispose(),Qt.dispose(),S.dispose(),U.dispose(),W.dispose(),kt.dispose(),te.dispose(),ot.dispose(),Kt.dispose(),Kt.removeEventListener("sessionstart",Pn),Kt.removeEventListener("sessionend",Le),ht&&(ht.dispose(),ht=null),Ln.stop()};function ft(F){F.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function B(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let F=Se.autoReset,q=J.enabled,$=J.autoUpdate,tt=J.needsUpdate,Z=J.type;se(),Se.autoReset=F,J.enabled=q,J.autoUpdate=$,J.needsUpdate=tt,J.type=Z}function vt(F){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",F.statusMessage)}function pt(F){let q=F.target;q.removeEventListener("dispose",pt),Vt(q)}function Vt(F){Ot(F),Qt.remove(F)}function Ot(F){let q=Qt.get(F).programs;q!==void 0&&(q.forEach(function($){ot.releaseProgram($)}),F.isShaderMaterial&&ot.releaseShaderCache(F))}this.renderBufferDirect=function(F,q,$,tt,Z,Tt){q===null&&(q=It);let Dt=Z.isMesh&&Z.matrixWorld.determinant()<0,Xt=Ov(F,q,$,tt,Z);Lt.setMaterial(tt,Dt);let Zt=$.index,re=1;if(tt.wireframe===!0){if(Zt=j.getWireframeAttribute($),Zt===void 0)return;re=2}let ee=$.drawRange,ie=$.attributes.position,Ye=ee.start*re,Gn=(ee.start+ee.count)*re;Tt!==null&&(Ye=Math.max(Ye,Tt.start*re),Gn=Math.min(Gn,(Tt.start+Tt.count)*re)),Zt!==null?(Ye=Math.max(Ye,0),Gn=Math.min(Gn,Zt.count)):ie!=null&&(Ye=Math.max(Ye,0),Gn=Math.min(Gn,ie.count));let cn=Gn-Ye;if(cn<0||cn===1/0)return;kt.setup(Z,tt,Xt,$,Zt);let Vi,Be=Ct;if(Zt!==null&&(Vi=V.get(Zt),Be=_t,Be.setIndex(Vi)),Z.isMesh)tt.wireframe===!0?(Lt.setLineWidth(tt.wireframeLinewidth*ne()),Be.setMode(Y.LINES)):Be.setMode(Y.TRIANGLES);else if(Z.isLine){let oe=tt.linewidth;oe===void 0&&(oe=1),Lt.setLineWidth(oe*ne()),Z.isLineSegments?Be.setMode(Y.LINES):Z.isLineLoop?Be.setMode(Y.LINE_LOOP):Be.setMode(Y.LINE_STRIP)}else Z.isPoints?Be.setMode(Y.POINTS):Z.isSprite&&Be.setMode(Y.TRIANGLES);if(Z.isBatchedMesh)Be.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else if(Z.isInstancedMesh)Be.renderInstances(Ye,cn,Z.count);else if($.isInstancedBufferGeometry){let oe=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,gh=Math.min($.instanceCount,oe);Be.renderInstances(Ye,cn,gh)}else Be.render(Ye,cn)};function be(F,q,$){F.transparent===!0&&F.side===de&&F.forceSinglePass===!1?(F.side=vn,F.needsUpdate=!0,Go(F,q,$),F.side=Ci,F.needsUpdate=!0,Go(F,q,$),F.side=de):Go(F,q,$)}this.compile=function(F,q,$=null){$===null&&($=F),m=ut.get($),m.init(),x.push(m),$.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(m.pushLight(Z),Z.castShadow&&m.pushShadow(Z))}),F!==$&&F.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(m.pushLight(Z),Z.castShadow&&m.pushShadow(Z))}),m.setupLights(b._useLegacyLights);let tt=new Set;return F.traverse(function(Z){let Tt=Z.material;if(Tt)if(Array.isArray(Tt))for(let Dt=0;Dt<Tt.length;Dt++){let Xt=Tt[Dt];be(Xt,$,Z),tt.add(Xt)}else be(Tt,$,Z),tt.add(Tt)}),x.pop(),m=null,tt},this.compileAsync=function(F,q,$=null){let tt=this.compile(F,q,$);return new Promise(Z=>{function Tt(){if(tt.forEach(function(Dt){Qt.get(Dt).currentProgram.isReady()&&tt.delete(Dt)}),tt.size===0){Z(F);return}setTimeout(Tt,10)}Ut.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let Pe=null;function on(F){Pe&&Pe(F)}function Pn(){Ln.stop()}function Le(){Ln.start()}let Ln=new r0;Ln.setAnimationLoop(on),typeof self<"u"&&Ln.setContext(self),this.setAnimationLoop=function(F){Pe=F,Kt.setAnimationLoop(F),F===null?Ln.stop():Ln.start()},Kt.addEventListener("sessionstart",Pn),Kt.addEventListener("sessionend",Le),this.render=function(F,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Kt.enabled===!0&&Kt.isPresenting===!0&&(Kt.cameraAutoUpdate===!0&&Kt.updateCamera(q),q=Kt.getCamera()),F.isScene===!0&&F.onBeforeRender(b,F,q,w),m=ut.get(F,x.length),m.init(),x.push(m),yt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),z.setFromProjectionMatrix(yt),lt=this.localClippingEnabled,Q=gt.init(this.clippingPlanes,lt),v=ct.get(F,p.length),v.init(),p.push(v),wi(F,q,0,b.sortObjects),v.finish(),b.sortObjects===!0&&v.sort(O,G),this.info.render.frame++,Q===!0&&gt.beginShadows();let $=m.state.shadowsArray;if(J.render($,F,q),Q===!0&&gt.endShadows(),this.info.autoReset===!0&&this.info.reset(),Et.render(v,F),m.setupLights(b._useLegacyLights),q.isArrayCamera){let tt=q.cameras;for(let Z=0,Tt=tt.length;Z<Tt;Z++){let Dt=tt[Z];Zd(v,F,Dt,Dt.viewport)}}else Zd(v,F,q);w!==null&&(R.updateMultisampleRenderTarget(w),R.updateRenderTargetMipmap(w)),F.isScene===!0&&F.onAfterRender(b,F,q),kt.resetDefaultState(),C=-1,_=null,x.pop(),x.length>0?m=x[x.length-1]:m=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function wi(F,q,$,tt){if(F.visible===!1)return;if(F.layers.test(q.layers)){if(F.isGroup)$=F.renderOrder;else if(F.isLOD)F.autoUpdate===!0&&F.update(q);else if(F.isLight)m.pushLight(F),F.castShadow&&m.pushShadow(F);else if(F.isSprite){if(!F.frustumCulled||z.intersectsSprite(F)){tt&&qt.setFromMatrixPosition(F.matrixWorld).applyMatrix4(yt);let Dt=W.update(F),Xt=F.material;Xt.visible&&v.push(F,Dt,Xt,$,qt.z,null)}}else if((F.isMesh||F.isLine||F.isPoints)&&(!F.frustumCulled||z.intersectsObject(F))){let Dt=W.update(F),Xt=F.material;if(tt&&(F.boundingSphere!==void 0?(F.boundingSphere===null&&F.computeBoundingSphere(),qt.copy(F.boundingSphere.center)):(Dt.boundingSphere===null&&Dt.computeBoundingSphere(),qt.copy(Dt.boundingSphere.center)),qt.applyMatrix4(F.matrixWorld).applyMatrix4(yt)),Array.isArray(Xt)){let Zt=Dt.groups;for(let re=0,ee=Zt.length;re<ee;re++){let ie=Zt[re],Ye=Xt[ie.materialIndex];Ye&&Ye.visible&&v.push(F,Dt,Ye,$,qt.z,ie)}}else Xt.visible&&v.push(F,Dt,Xt,$,qt.z,null)}}let Tt=F.children;for(let Dt=0,Xt=Tt.length;Dt<Xt;Dt++)wi(Tt[Dt],q,$,tt)}function Zd(F,q,$,tt){let Z=F.opaque,Tt=F.transmissive,Dt=F.transparent;m.setupLightsView($),Q===!0&&gt.setGlobalState(b.clippingPlanes,$),Tt.length>0&&kv(Z,Tt,q,$),tt&&Lt.viewport(A.copy(tt)),Z.length>0&&Bo(Z,q,$),Tt.length>0&&Bo(Tt,q,$),Dt.length>0&&Bo(Dt,q,$),Lt.buffers.depth.setTest(!0),Lt.buffers.depth.setMask(!0),Lt.buffers.color.setMask(!0),Lt.setPolygonOffset(!1)}function kv(F,q,$,tt){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;let Tt=jt.isWebGL2;ht===null&&(ht=new hn(1,1,{generateMipmaps:!0,type:Ut.has("EXT_color_buffer_half_float")?Un:Ri,minFilter:Pi,samples:Tt?4:0})),b.getDrawingBufferSize(Nt),Tt?ht.setSize(Nt.x,Nt.y):ht.setSize(Rc(Nt.x),Rc(Nt.y));let Dt=b.getRenderTarget();b.setRenderTarget(ht),b.getClearColor(N),L=b.getClearAlpha(),L<1&&b.setClearColor(16777215,.5),b.clear();let Xt=b.toneMapping;b.toneMapping=_s,Bo(F,$,tt),R.updateMultisampleRenderTarget(ht),R.updateRenderTargetMipmap(ht);let Zt=!1;for(let re=0,ee=q.length;re<ee;re++){let ie=q[re],Ye=ie.object,Gn=ie.geometry,cn=ie.material,Vi=ie.group;if(cn.side===de&&Ye.layers.test(tt.layers)){let Be=cn.side;cn.side=vn,cn.needsUpdate=!0,Qd(Ye,$,tt,Gn,cn,Vi),cn.side=Be,cn.needsUpdate=!0,Zt=!0}}Zt===!0&&(R.updateMultisampleRenderTarget(ht),R.updateRenderTargetMipmap(ht)),b.setRenderTarget(Dt),b.setClearColor(N,L),b.toneMapping=Xt}function Bo(F,q,$){let tt=q.isScene===!0?q.overrideMaterial:null;for(let Z=0,Tt=F.length;Z<Tt;Z++){let Dt=F[Z],Xt=Dt.object,Zt=Dt.geometry,re=tt===null?Dt.material:tt,ee=Dt.group;Xt.layers.test($.layers)&&Qd(Xt,q,$,Zt,re,ee)}}function Qd(F,q,$,tt,Z,Tt){F.onBeforeRender(b,q,$,tt,Z,Tt),F.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,F.matrixWorld),F.normalMatrix.getNormalMatrix(F.modelViewMatrix),Z.onBeforeRender(b,q,$,tt,F,Tt),Z.transparent===!0&&Z.side===de&&Z.forceSinglePass===!1?(Z.side=vn,Z.needsUpdate=!0,b.renderBufferDirect($,q,tt,Z,F,Tt),Z.side=Ci,Z.needsUpdate=!0,b.renderBufferDirect($,q,tt,Z,F,Tt),Z.side=de):b.renderBufferDirect($,q,tt,Z,F,Tt),F.onAfterRender(b,q,$,tt,Z,Tt)}function Go(F,q,$){q.isScene!==!0&&(q=It);let tt=Qt.get(F),Z=m.state.lights,Tt=m.state.shadowsArray,Dt=Z.state.version,Xt=ot.getParameters(F,Z.state,Tt,q,$),Zt=ot.getProgramCacheKey(Xt),re=tt.programs;tt.environment=F.isMeshStandardMaterial?q.environment:null,tt.fog=q.fog,tt.envMap=(F.isMeshStandardMaterial?U:S).get(F.envMap||tt.environment),re===void 0&&(F.addEventListener("dispose",pt),re=new Map,tt.programs=re);let ee=re.get(Zt);if(ee!==void 0){if(tt.currentProgram===ee&&tt.lightsStateVersion===Dt)return tp(F,Xt),ee}else Xt.uniforms=ot.getUniforms(F),F.onBuild($,Xt,b),F.onBeforeCompile(Xt,b),ee=ot.acquireProgram(Xt,Zt),re.set(Zt,ee),tt.uniforms=Xt.uniforms;let ie=tt.uniforms;return(!F.isShaderMaterial&&!F.isRawShaderMaterial||F.clipping===!0)&&(ie.clippingPlanes=gt.uniform),tp(F,Xt),tt.needsLights=Bv(F),tt.lightsStateVersion=Dt,tt.needsLights&&(ie.ambientLightColor.value=Z.state.ambient,ie.lightProbe.value=Z.state.probe,ie.directionalLights.value=Z.state.directional,ie.directionalLightShadows.value=Z.state.directionalShadow,ie.spotLights.value=Z.state.spot,ie.spotLightShadows.value=Z.state.spotShadow,ie.rectAreaLights.value=Z.state.rectArea,ie.ltc_1.value=Z.state.rectAreaLTC1,ie.ltc_2.value=Z.state.rectAreaLTC2,ie.pointLights.value=Z.state.point,ie.pointLightShadows.value=Z.state.pointShadow,ie.hemisphereLights.value=Z.state.hemi,ie.directionalShadowMap.value=Z.state.directionalShadowMap,ie.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,ie.spotShadowMap.value=Z.state.spotShadowMap,ie.spotLightMatrix.value=Z.state.spotLightMatrix,ie.spotLightMap.value=Z.state.spotLightMap,ie.pointShadowMap.value=Z.state.pointShadowMap,ie.pointShadowMatrix.value=Z.state.pointShadowMatrix),tt.currentProgram=ee,tt.uniformsList=null,ee}function $d(F){if(F.uniformsList===null){let q=F.currentProgram.getUniforms();F.uniformsList=Or.seqWithValue(q.seq,F.uniforms)}return F.uniformsList}function tp(F,q){let $=Qt.get(F);$.outputColorSpace=q.outputColorSpace,$.batching=q.batching,$.instancing=q.instancing,$.instancingColor=q.instancingColor,$.skinning=q.skinning,$.morphTargets=q.morphTargets,$.morphNormals=q.morphNormals,$.morphColors=q.morphColors,$.morphTargetsCount=q.morphTargetsCount,$.numClippingPlanes=q.numClippingPlanes,$.numIntersection=q.numClipIntersection,$.vertexAlphas=q.vertexAlphas,$.vertexTangents=q.vertexTangents,$.toneMapping=q.toneMapping}function Ov(F,q,$,tt,Z){q.isScene!==!0&&(q=It),R.resetTextureUnits();let Tt=q.fog,Dt=tt.isMeshStandardMaterial?q.environment:null,Xt=w===null?b.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:en,Zt=(tt.isMeshStandardMaterial?U:S).get(tt.envMap||Dt),re=tt.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,ee=!!$.attributes.tangent&&(!!tt.normalMap||tt.anisotropy>0),ie=!!$.morphAttributes.position,Ye=!!$.morphAttributes.normal,Gn=!!$.morphAttributes.color,cn=_s;tt.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(cn=b.toneMapping);let Vi=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Be=Vi!==void 0?Vi.length:0,oe=Qt.get(tt),gh=m.state.lights;if(Q===!0&&(lt===!0||F!==_)){let Qn=F===_&&tt.id===C;gt.setState(tt,F,Qn)}let We=!1;tt.version===oe.__version?(oe.needsLights&&oe.lightsStateVersion!==gh.state.version||oe.outputColorSpace!==Xt||Z.isBatchedMesh&&oe.batching===!1||!Z.isBatchedMesh&&oe.batching===!0||Z.isInstancedMesh&&oe.instancing===!1||!Z.isInstancedMesh&&oe.instancing===!0||Z.isSkinnedMesh&&oe.skinning===!1||!Z.isSkinnedMesh&&oe.skinning===!0||Z.isInstancedMesh&&oe.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&oe.instancingColor===!1&&Z.instanceColor!==null||oe.envMap!==Zt||tt.fog===!0&&oe.fog!==Tt||oe.numClippingPlanes!==void 0&&(oe.numClippingPlanes!==gt.numPlanes||oe.numIntersection!==gt.numIntersection)||oe.vertexAlphas!==re||oe.vertexTangents!==ee||oe.morphTargets!==ie||oe.morphNormals!==Ye||oe.morphColors!==Gn||oe.toneMapping!==cn||jt.isWebGL2===!0&&oe.morphTargetsCount!==Be)&&(We=!0):(We=!0,oe.__version=tt.version);let zs=oe.currentProgram;We===!0&&(zs=Go(tt,q,Z));let ep=!1,Aa=!1,vh=!1,yn=zs.getUniforms(),Bs=oe.uniforms;if(Lt.useProgram(zs.program)&&(ep=!0,Aa=!0,vh=!0),tt.id!==C&&(C=tt.id,Aa=!0),ep||_!==F){yn.setValue(Y,"projectionMatrix",F.projectionMatrix),yn.setValue(Y,"viewMatrix",F.matrixWorldInverse);let Qn=yn.map.cameraPosition;Qn!==void 0&&Qn.setValue(Y,qt.setFromMatrixPosition(F.matrixWorld)),jt.logarithmicDepthBuffer&&yn.setValue(Y,"logDepthBufFC",2/(Math.log(F.far+1)/Math.LN2)),(tt.isMeshPhongMaterial||tt.isMeshToonMaterial||tt.isMeshLambertMaterial||tt.isMeshBasicMaterial||tt.isMeshStandardMaterial||tt.isShaderMaterial)&&yn.setValue(Y,"isOrthographic",F.isOrthographicCamera===!0),_!==F&&(_=F,Aa=!0,vh=!0)}if(Z.isSkinnedMesh){yn.setOptional(Y,Z,"bindMatrix"),yn.setOptional(Y,Z,"bindMatrixInverse");let Qn=Z.skeleton;Qn&&(jt.floatVertexTextures?(Qn.boneTexture===null&&Qn.computeBoneTexture(),yn.setValue(Y,"boneTexture",Qn.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Z.isBatchedMesh&&(yn.setOptional(Y,Z,"batchingTexture"),yn.setValue(Y,"batchingTexture",Z._matricesTexture,R));let xh=$.morphAttributes;if((xh.position!==void 0||xh.normal!==void 0||xh.color!==void 0&&jt.isWebGL2===!0)&&At.update(Z,$,zs),(Aa||oe.receiveShadow!==Z.receiveShadow)&&(oe.receiveShadow=Z.receiveShadow,yn.setValue(Y,"receiveShadow",Z.receiveShadow)),tt.isMeshGouraudMaterial&&tt.envMap!==null&&(Bs.envMap.value=Zt,Bs.flipEnvMap.value=Zt.isCubeTexture&&Zt.isRenderTargetTexture===!1?-1:1),Aa&&(yn.setValue(Y,"toneMappingExposure",b.toneMappingExposure),oe.needsLights&&zv(Bs,vh),Tt&&tt.fog===!0&&st.refreshFogUniforms(Bs,Tt),st.refreshMaterialUniforms(Bs,tt,k,D,ht),Or.upload(Y,$d(oe),Bs,R)),tt.isShaderMaterial&&tt.uniformsNeedUpdate===!0&&(Or.upload(Y,$d(oe),Bs,R),tt.uniformsNeedUpdate=!1),tt.isSpriteMaterial&&yn.setValue(Y,"center",Z.center),yn.setValue(Y,"modelViewMatrix",Z.modelViewMatrix),yn.setValue(Y,"normalMatrix",Z.normalMatrix),yn.setValue(Y,"modelMatrix",Z.matrixWorld),tt.isShaderMaterial||tt.isRawShaderMaterial){let Qn=tt.uniformsGroups;for(let bh=0,Gv=Qn.length;bh<Gv;bh++)if(jt.isWebGL2){let np=Qn[bh];te.update(np,zs),te.bind(np,zs)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return zs}function zv(F,q){F.ambientLightColor.needsUpdate=q,F.lightProbe.needsUpdate=q,F.directionalLights.needsUpdate=q,F.directionalLightShadows.needsUpdate=q,F.pointLights.needsUpdate=q,F.pointLightShadows.needsUpdate=q,F.spotLights.needsUpdate=q,F.spotLightShadows.needsUpdate=q,F.rectAreaLights.needsUpdate=q,F.hemisphereLights.needsUpdate=q}function Bv(F){return F.isMeshLambertMaterial||F.isMeshToonMaterial||F.isMeshPhongMaterial||F.isMeshStandardMaterial||F.isShadowMaterial||F.isShaderMaterial&&F.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(F,q,$){Qt.get(F.texture).__webglTexture=q,Qt.get(F.depthTexture).__webglTexture=$;let tt=Qt.get(F);tt.__hasExternalTextures=!0,tt.__hasExternalTextures&&(tt.__autoAllocateDepthBuffer=$===void 0,tt.__autoAllocateDepthBuffer||Ut.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),tt.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(F,q){let $=Qt.get(F);$.__webglFramebuffer=q,$.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(F,q=0,$=0){w=F,M=q,y=$;let tt=!0,Z=null,Tt=!1,Dt=!1;if(F){let Zt=Qt.get(F);Zt.__useDefaultFramebuffer!==void 0?(Lt.bindFramebuffer(Y.FRAMEBUFFER,null),tt=!1):Zt.__webglFramebuffer===void 0?R.setupRenderTarget(F):Zt.__hasExternalTextures&&R.rebindTextures(F,Qt.get(F.texture).__webglTexture,Qt.get(F.depthTexture).__webglTexture);let re=F.texture;(re.isData3DTexture||re.isDataArrayTexture||re.isCompressedArrayTexture)&&(Dt=!0);let ee=Qt.get(F).__webglFramebuffer;F.isWebGLCubeRenderTarget?(Array.isArray(ee[q])?Z=ee[q][$]:Z=ee[q],Tt=!0):jt.isWebGL2&&F.samples>0&&R.useMultisampledRTT(F)===!1?Z=Qt.get(F).__webglMultisampledFramebuffer:Array.isArray(ee)?Z=ee[$]:Z=ee,A.copy(F.viewport),I.copy(F.scissor),H=F.scissorTest}else A.copy(X).multiplyScalar(k).floor(),I.copy(K).multiplyScalar(k).floor(),H=it;if(Lt.bindFramebuffer(Y.FRAMEBUFFER,Z)&&jt.drawBuffers&&tt&&Lt.drawBuffers(F,Z),Lt.viewport(A),Lt.scissor(I),Lt.setScissorTest(H),Tt){let Zt=Qt.get(F.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+q,Zt.__webglTexture,$)}else if(Dt){let Zt=Qt.get(F.texture),re=q||0;Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Zt.__webglTexture,$||0,re)}C=-1},this.readRenderTargetPixels=function(F,q,$,tt,Z,Tt,Dt){if(!(F&&F.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xt=Qt.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&Dt!==void 0&&(Xt=Xt[Dt]),Xt){Lt.bindFramebuffer(Y.FRAMEBUFFER,Xt);try{let Zt=F.texture,re=Zt.format,ee=Zt.type;if(re!==ti&&dt.convert(re)!==Y.getParameter(Y.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let ie=ee===Un&&(Ut.has("EXT_color_buffer_half_float")||jt.isWebGL2&&Ut.has("EXT_color_buffer_float"));if(ee!==Ri&&dt.convert(ee)!==Y.getParameter(Y.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ee===Qi&&(jt.isWebGL2||Ut.has("OES_texture_float")||Ut.has("WEBGL_color_buffer_float")))&&!ie){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=F.width-tt&&$>=0&&$<=F.height-Z&&Y.readPixels(q,$,tt,Z,dt.convert(re),dt.convert(ee),Tt)}finally{let Zt=w!==null?Qt.get(w).__webglFramebuffer:null;Lt.bindFramebuffer(Y.FRAMEBUFFER,Zt)}}},this.copyFramebufferToTexture=function(F,q,$=0){let tt=Math.pow(2,-$),Z=Math.floor(q.image.width*tt),Tt=Math.floor(q.image.height*tt);R.setTexture2D(q,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,$,0,0,F.x,F.y,Z,Tt),Lt.unbindTexture()},this.copyTextureToTexture=function(F,q,$,tt=0){let Z=q.image.width,Tt=q.image.height,Dt=dt.convert($.format),Xt=dt.convert($.type);R.setTexture2D($,0),Y.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,$.flipY),Y.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),Y.pixelStorei(Y.UNPACK_ALIGNMENT,$.unpackAlignment),q.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,tt,F.x,F.y,Z,Tt,Dt,Xt,q.image.data):q.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,tt,F.x,F.y,q.mipmaps[0].width,q.mipmaps[0].height,Dt,q.mipmaps[0].data):Y.texSubImage2D(Y.TEXTURE_2D,tt,F.x,F.y,Dt,Xt,q.image),tt===0&&$.generateMipmaps&&Y.generateMipmap(Y.TEXTURE_2D),Lt.unbindTexture()},this.copyTextureToTexture3D=function(F,q,$,tt,Z=0){if(b.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Tt=F.max.x-F.min.x+1,Dt=F.max.y-F.min.y+1,Xt=F.max.z-F.min.z+1,Zt=dt.convert(tt.format),re=dt.convert(tt.type),ee;if(tt.isData3DTexture)R.setTexture3D(tt,0),ee=Y.TEXTURE_3D;else if(tt.isDataArrayTexture||tt.isCompressedArrayTexture)R.setTexture2DArray(tt,0),ee=Y.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Y.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,tt.flipY),Y.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,tt.premultiplyAlpha),Y.pixelStorei(Y.UNPACK_ALIGNMENT,tt.unpackAlignment);let ie=Y.getParameter(Y.UNPACK_ROW_LENGTH),Ye=Y.getParameter(Y.UNPACK_IMAGE_HEIGHT),Gn=Y.getParameter(Y.UNPACK_SKIP_PIXELS),cn=Y.getParameter(Y.UNPACK_SKIP_ROWS),Vi=Y.getParameter(Y.UNPACK_SKIP_IMAGES),Be=$.isCompressedTexture?$.mipmaps[Z]:$.image;Y.pixelStorei(Y.UNPACK_ROW_LENGTH,Be.width),Y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,Be.height),Y.pixelStorei(Y.UNPACK_SKIP_PIXELS,F.min.x),Y.pixelStorei(Y.UNPACK_SKIP_ROWS,F.min.y),Y.pixelStorei(Y.UNPACK_SKIP_IMAGES,F.min.z),$.isDataTexture||$.isData3DTexture?Y.texSubImage3D(ee,Z,q.x,q.y,q.z,Tt,Dt,Xt,Zt,re,Be.data):$.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Y.compressedTexSubImage3D(ee,Z,q.x,q.y,q.z,Tt,Dt,Xt,Zt,Be.data)):Y.texSubImage3D(ee,Z,q.x,q.y,q.z,Tt,Dt,Xt,Zt,re,Be),Y.pixelStorei(Y.UNPACK_ROW_LENGTH,ie),Y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,Ye),Y.pixelStorei(Y.UNPACK_SKIP_PIXELS,Gn),Y.pixelStorei(Y.UNPACK_SKIP_ROWS,cn),Y.pixelStorei(Y.UNPACK_SKIP_IMAGES,Vi),Z===0&&tt.generateMipmaps&&Y.generateMipmap(ee),Lt.unbindTexture()},this.initTexture=function(F){F.isCubeTexture?R.setTextureCube(F,0):F.isData3DTexture?R.setTexture3D(F,0):F.isDataArrayTexture||F.isCompressedArrayTexture?R.setTexture2DArray(F,0):R.setTexture2D(F,0),Lt.unbindTexture()},this.resetState=function(){M=0,y=0,w=null,Lt.reset(),kt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===cf?"display-p3":"srgb",e.unpackColorSpace=pe.workingColorSpace===$c?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ue?Zs:t0}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Zs?ue:en}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},Eu=class extends Ja{};Eu.prototype.isWebGL1Renderer=!0;var Nc=class r{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new et(t),this.density=e}clone(){return new r(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var es=class extends Re{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}},Yr=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ou,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=pi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},In=new T,tr=class r{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)In.fromBufferAttribute(this,e),In.applyMatrix4(t),this.setXYZ(e,In.x,In.y,In.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)In.fromBufferAttribute(this,e),In.applyNormalMatrix(t),this.setXYZ(e,In.x,In.y,In.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)In.fromBufferAttribute(this,e),In.transformDirection(t),this.setXYZ(e,In.x,In.y,In.z);return this}setX(t,e){return this.normalized&&(e=Ee(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Si(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Si(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Si(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Si(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array),i=Ee(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array),i=Ee(i,this.array),s=Ee(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new Mt(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new r(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Hn=class extends bn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new et(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Rr,Ia=new T,Cr=new T,Pr=new T,Lr=new rt,Da=new rt,u0=new bt,uc=new T,Fa=new T,fc=new T,ym=new rt,Yh=new rt,_m=new rt,kn=class extends Re{constructor(t=new Hn){if(super(),this.isSprite=!0,this.type="Sprite",Rr===void 0){Rr=new Rt;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Yr(e,5);Rr.setIndex([0,1,2,0,2,3]),Rr.setAttribute("position",new tr(n,3,0,!1)),Rr.setAttribute("uv",new tr(n,2,3,!1))}this.geometry=Rr,this.material=t,this.center=new rt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Cr.setFromMatrixScale(this.matrixWorld),u0.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Pr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Cr.multiplyScalar(-Pr.z);let n=this.material.rotation,i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));let a=this.center;dc(uc.set(-.5,-.5,0),Pr,a,Cr,i,s),dc(Fa.set(.5,-.5,0),Pr,a,Cr,i,s),dc(fc.set(.5,.5,0),Pr,a,Cr,i,s),ym.set(0,0),Yh.set(1,0),_m.set(1,1);let o=t.ray.intersectTriangle(uc,Fa,fc,!1,Ia);if(o===null&&(dc(Fa.set(-.5,.5,0),Pr,a,Cr,i,s),Yh.set(0,1),o=t.ray.intersectTriangle(uc,fc,Fa,!1,Ia),o===null))return;let c=t.ray.origin.distanceTo(Ia);c<t.near||c>t.far||e.push({distance:c,point:Ia.clone(),uv:Ys.getInterpolation(Ia,uc,Fa,fc,ym,Yh,_m,new rt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function dc(r,t,e,n,i,s){Lr.subVectors(r,e).addScalar(.5).multiply(n),i!==void 0?(Da.x=s*Lr.x-i*Lr.y,Da.y=i*Lr.x+s*Lr.y):Da.copy(Lr),r.copy(t),r.x+=Da.x,r.y+=Da.y,r.applyMatrix4(u0)}var Mm=new T,Em=new le,wm=new le,WM=new T,Tm=new bt,pc=new T,Kh=new Xn,Sm=new bt,Jh=new $s,Uc=class extends Ft{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=cp,this.bindMatrix=new bt,this.bindMatrixInverse=new bt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ge),this.boundingBox.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,pc),this.boundingBox.expandByPoint(pc)}computeBoundingSphere(){let t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Xn),this.boundingSphere.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,pc),this.boundingSphere.expandByPoint(pc)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Kh.copy(this.boundingSphere),Kh.applyMatrix4(i),t.ray.intersectsSphere(Kh)!==!1&&(Sm.copy(i).invert(),Jh.copy(t.ray).applyMatrix4(Sm),!(this.boundingBox!==null&&Jh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Jh)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let t=new le,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);let s=1/t.manhattanLength();s!==1/0?t.multiplyScalar(s):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===cp?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===xx?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){let n=this.skeleton,i=this.geometry;Em.fromBufferAttribute(i.attributes.skinIndex,t),wm.fromBufferAttribute(i.attributes.skinWeight,t),Mm.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let s=0;s<4;s++){let a=wm.getComponent(s);if(a!==0){let o=Em.getComponent(s);Tm.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),e.addScaledVector(WM.copy(Mm).applyMatrix4(Tm),a)}}return e.applyMatrix4(this.bindMatrixInverse)}boneTransform(t,e){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(t,e)}},Za=class extends Re{constructor(){super(),this.isBone=!0,this.type="Bone"}},wu=class extends xn{constructor(t=null,e=1,n=1,i,s,a,o,c,l=Ke,h=Ke,u,f){super(null,a,o,c,l,h,i,s,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Am=new bt,qM=new bt,kc=class r{constructor(t=[],e=[]){this.uuid=pi(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new bt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){let n=new bt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=t.length;s<a;s++){let o=t[s]?t[s].matrixWorld:qM;Am.multiplyMatrices(o,e[s]),Am.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new r(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4);e.set(this.boneMatrices);let n=new wu(e,t,t,ti,Qi);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){let i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){let s=t.bones[n],a=e[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new Za),this.bones.push(a),this.boneInverses.push(new bt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){let t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let e=this.bones,n=this.boneInverses;for(let i=0,s=e.length;i<s;i++){let a=e[i];t.bones.push(a.uuid);let o=n[i];t.boneInverses.push(o.toArray())}return t}},un=class extends Mt{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ir=new bt,Rm=new bt,mc=[],Cm=new Ge,XM=new bt,Ha=new Ft,Na=new Xn,we=class extends Ft{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new un(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,XM)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ge),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ir),Cm.copy(t.boundingBox).applyMatrix4(Ir),this.boundingBox.union(Cm)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Xn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ir),Na.copy(t.boundingSphere).applyMatrix4(Ir),this.boundingSphere.union(Na)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){let n=this.matrixWorld,i=this.count;if(Ha.geometry=this.geometry,Ha.material=this.material,Ha.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Na.copy(this.boundingSphere),Na.applyMatrix4(n),t.ray.intersectsSphere(Na)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Ir),Rm.multiplyMatrices(n,Ir),Ha.matrixWorld=Rm,Ha.raycast(t,mc);for(let a=0,o=mc.length;a<o;a++){let c=mc[a];c.instanceId=s,c.object=this,e.push(c)}mc.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new un(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var ns=class extends bn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Pm=new T,Lm=new T,Im=new bt,Zh=new $s,gc=new Xn,Kr=class extends Re{constructor(t=new Rt,e=new ns){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)Pm.fromBufferAttribute(e,i-1),Lm.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Pm.distanceTo(Lm);t.setAttribute("lineDistance",new wt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),gc.copy(n.boundingSphere),gc.applyMatrix4(i),gc.radius+=s,t.ray.intersectsSphere(gc)===!1)return;Im.copy(i).invert(),Zh.copy(t.ray).applyMatrix4(Im);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=new T,h=new T,u=new T,f=new T,d=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){let p=Math.max(0,a.start),x=Math.min(g.count,a.start+a.count);for(let b=p,E=x-1;b<E;b+=d){let M=g.getX(b),y=g.getX(b+1);if(l.fromBufferAttribute(m,M),h.fromBufferAttribute(m,y),Zh.distanceSqToSegment(l,h,f,u)>c)continue;f.applyMatrix4(this.matrixWorld);let C=t.ray.origin.distanceTo(f);C<t.near||C>t.far||e.push({distance:C,point:u.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,a.start),x=Math.min(m.count,a.start+a.count);for(let b=p,E=x-1;b<E;b+=d){if(l.fromBufferAttribute(m,b),h.fromBufferAttribute(m,b+1),Zh.distanceSqToSegment(l,h,f,u)>c)continue;f.applyMatrix4(this.matrixWorld);let y=t.ray.origin.distanceTo(f);y<t.near||y>t.far||e.push({distance:y,point:u.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}},Dm=new T,Fm=new T,Ii=class extends Kr{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)Dm.fromBufferAttribute(e,i),Fm.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Dm.distanceTo(Fm);t.setAttribute("lineDistance",new wt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Oc=class extends Kr{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},gi=class extends bn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Hm=new bt,Tu=new $s,vc=new Xn,xc=new T,fn=class extends Re{constructor(t=new Rt,e=new gi){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),vc.copy(n.boundingSphere),vc.applyMatrix4(i),vc.radius+=s,t.ray.intersectsSphere(vc)===!1)return;Hm.copy(i).invert(),Tu.copy(t.ray).applyMatrix4(Hm);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){let f=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);for(let g=f,v=d;g<v;g++){let m=l.getX(g);xc.fromBufferAttribute(u,m),Nm(xc,m,c,i,t,e,this)}}else{let f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let g=f,v=d;g<v;g++)xc.fromBufferAttribute(u,g),Nm(xc,g,c,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function Nm(r,t,e,n,i,s,a){let o=Tu.distanceSqToPoint(r);if(o<e){let c=new T;Tu.closestPointToPoint(r,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,object:a})}}var wn=class extends xn{constructor(t,e,n,i,s,a,o,c,l){super(t,e,n,i,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},ei=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),i=0,s=n.length,a;e?a=e:a=t*n[s-1];let o=0,c=s-1,l;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),l=n[i]-a,l<0)o=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===a)return i/(s-1);let h=n[i],f=n[i+1]-h,d=(a-h)/f;return(i+d)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);let a=this.getPoint(i),o=this.getPoint(s),c=e||(a.isVector2?new rt:new T);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new T,i=[],s=[],a=[],o=new T,c=new bt;for(let d=0;d<=t;d++){let g=d/t;i[d]=this.getTangentAt(g,new T)}s[0]=new T,a[0]=new T;let l=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos($e(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(c.makeRotationAxis(o,g))}a[d].crossVectors(i[d],s[d])}if(e===!0){let d=Math.acos($e(s[0].dot(s[t]),-1,1));d/=t,i[0].dot(o.crossVectors(s[0],s[t]))>0&&(d=-d);for(let g=1;g<=t;g++)s[g].applyMatrix4(c.makeRotationAxis(i[g],d*g)),a[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Qa=class extends ei{constructor(t=0,e=0,n=1,i=1,s=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e){let n=e||new rt,i=Math.PI*2,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(a?s=0:s=i),this.aClockwise===!0&&!a&&(s===i?s=-i:s=s-i);let o=this.aStartAngle+t*s,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Su=class extends Qa{constructor(t,e,n,i,s,a){super(t,e,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function uf(){let r=0,t=0,e=0,n=0;function i(s,a,o,c){r=s,t=o,e=-3*s+3*a-2*o-c,n=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,l){i(a,o,l*(o-s),l*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,l,h,u){let f=(a-s)/l-(o-s)/(l+h)+(o-a)/h,d=(o-a)/h-(c-a)/(h+u)+(c-o)/u;f*=h,d*=h,i(a,o,f,d)},calc:function(s){let a=s*s,o=a*s;return r+t*s+e*a+n*o}}}var bc=new T,Qh=new uf,$h=new uf,tu=new uf,Au=class extends ei{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new T){let n=e,i=this.points,s=i.length,a=(s-(this.closed?0:1))*t,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:c===0&&o===s-1&&(o=s-2,c=1);let l,h;this.closed||o>0?l=i[(o-1)%s]:(bc.subVectors(i[0],i[1]).add(i[0]),l=bc);let u=i[o%s],f=i[(o+1)%s];if(this.closed||o+2<s?h=i[(o+2)%s]:(bc.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=bc),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),d),v=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Qh.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,g,v,m),$h.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,g,v,m),tu.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(Qh.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),$h.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),tu.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(Qh.calc(c),$h.calc(c),tu.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new T().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Um(r,t,e,n,i){let s=(n-t)*.5,a=(i-e)*.5,o=r*r,c=r*o;return(2*e-2*n+s+a)*c+(-3*e+3*n-2*s-a)*o+s*r+e}function jM(r,t){let e=1-r;return e*e*t}function YM(r,t){return 2*(1-r)*r*t}function KM(r,t){return r*r*t}function Va(r,t,e,n){return jM(r,t)+YM(r,e)+KM(r,n)}function JM(r,t){let e=1-r;return e*e*e*t}function ZM(r,t){let e=1-r;return 3*e*e*r*t}function QM(r,t){return 3*(1-r)*r*r*t}function $M(r,t){return r*r*r*t}function Wa(r,t,e,n,i){return JM(r,t)+ZM(r,e)+QM(r,n)+$M(r,i)}var zc=class extends ei{constructor(t=new rt,e=new rt,n=new rt,i=new rt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new rt){let n=e,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Wa(t,i.x,s.x,a.x,o.x),Wa(t,i.y,s.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ru=class extends ei{constructor(t=new T,e=new T,n=new T,i=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new T){let n=e,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Wa(t,i.x,s.x,a.x,o.x),Wa(t,i.y,s.y,a.y,o.y),Wa(t,i.z,s.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Bc=class extends ei{constructor(t=new rt,e=new rt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new rt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new rt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Cu=class extends ei{constructor(t=new T,e=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new T){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new T){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Gc=class extends ei{constructor(t=new rt,e=new rt,n=new rt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new rt){let n=e,i=this.v0,s=this.v1,a=this.v2;return n.set(Va(t,i.x,s.x,a.x),Va(t,i.y,s.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Pu=class extends ei{constructor(t=new T,e=new T,n=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new T){let n=e,i=this.v0,s=this.v1,a=this.v2;return n.set(Va(t,i.x,s.x,a.x),Va(t,i.y,s.y,a.y),Va(t,i.z,s.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Vc=class extends ei{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new rt){let n=e,i=this.points,s=(i.length-1)*t,a=Math.floor(s),o=s-a,c=i[a===0?a:a-1],l=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(Um(o,c.x,l.x,h.x,u.x),Um(o,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new rt().fromArray(i))}return this}},km=Object.freeze({__proto__:null,ArcCurve:Su,CatmullRomCurve3:Au,CubicBezierCurve:zc,CubicBezierCurve3:Ru,EllipseCurve:Qa,LineCurve:Bc,LineCurve3:Cu,QuadraticBezierCurve:Gc,QuadraticBezierCurve3:Pu,SplineCurve:Vc}),Lu=class extends ei{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new km[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),s=0;for(;s<i.length;){if(i[s]>=n){let a=i[s]-n,o=this.curves[s],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}s++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,s=this.curves;i<s.length;i++){let a=s[i],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new km[i.type]().fromJSON(i))}return this}},Iu=class extends Lu{constructor(t){super(),this.type="Path",this.currentPoint=new rt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Bc(this.currentPoint.clone(),new rt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let s=new Gc(this.currentPoint.clone(),new rt(t,e),new rt(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,a){let o=new zc(this.currentPoint.clone(),new rt(t,e),new rt(n,i),new rt(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Vc(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,i,s,a),this}absarc(t,e,n,i,s,a){return this.absellipse(t,e,n,n,i,s,a),this}ellipse(t,e,n,i,s,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,i,s,a,o,c),this}absellipse(t,e,n,i,s,a,o,c){let l=new Qa(t,e,n,i,s,a,o,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Du=class r extends Rt{constructor(t=[new rt(0,-.5),new rt(.5,0),new rt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=$e(i,0,Math.PI*2);let s=[],a=[],o=[],c=[],l=[],h=1/e,u=new T,f=new rt,d=new T,g=new T,v=new T,m=0,p=0;for(let x=0;x<=t.length-1;x++)switch(x){case 0:m=t[x+1].x-t[x].x,p=t[x+1].y-t[x].y,d.x=p*1,d.y=-m,d.z=p*0,v.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:c.push(v.x,v.y,v.z);break;default:m=t[x+1].x-t[x].x,p=t[x+1].y-t[x].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=v.x,d.y+=v.y,d.z+=v.z,d.normalize(),c.push(d.x,d.y,d.z),v.copy(g)}for(let x=0;x<=e;x++){let b=n+x*h*i,E=Math.sin(b),M=Math.cos(b);for(let y=0;y<=t.length-1;y++){u.x=t[y].x*E,u.y=t[y].y,u.z=t[y].x*M,a.push(u.x,u.y,u.z),f.x=x/e,f.y=y/(t.length-1),o.push(f.x,f.y);let w=c[3*y+0]*E,C=c[3*y+1],_=c[3*y+0]*M;l.push(w,C,_)}}for(let x=0;x<e;x++)for(let b=0;b<t.length-1;b++){let E=b+x*t.length,M=E,y=E+t.length,w=E+t.length+1,C=E+1;s.push(M,y,C),s.push(w,C,y)}this.setIndex(s),this.setAttribute("position",new wt(a,3)),this.setAttribute("uv",new wt(o,2)),this.setAttribute("normal",new wt(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.points,t.segments,t.phiStart,t.phiLength)}},Wc=class r extends Du{constructor(t=1,e=1,n=4,i=8){let s=new Iu;s.absarc(0,-e/2,t,Math.PI*1.5,0),s.absarc(0,e/2,t,0,Math.PI*.5),super(s.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:i}}static fromJSON(t){return new r(t.radius,t.length,t.capSegments,t.radialSegments)}};var Ve=class r extends Rt{constructor(t=1,e=1,n=1,i=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};let l=this;i=Math.floor(i),s=Math.floor(s);let h=[],u=[],f=[],d=[],g=0,v=[],m=n/2,p=0;x(),a===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new wt(u,3)),this.setAttribute("normal",new wt(f,3)),this.setAttribute("uv",new wt(d,2));function x(){let E=new T,M=new T,y=0,w=(e-t)/n;for(let C=0;C<=s;C++){let _=[],A=C/s,I=A*(e-t)+t;for(let H=0;H<=i;H++){let N=H/i,L=N*c+o,P=Math.sin(L),D=Math.cos(L);M.x=I*P,M.y=-A*n+m,M.z=I*D,u.push(M.x,M.y,M.z),E.set(P,w,D).normalize(),f.push(E.x,E.y,E.z),d.push(N,1-A),_.push(g++)}v.push(_)}for(let C=0;C<i;C++)for(let _=0;_<s;_++){let A=v[_][C],I=v[_+1][C],H=v[_+1][C+1],N=v[_][C+1];h.push(A,I,N),h.push(I,H,N),y+=6}l.addGroup(p,y,0),p+=y}function b(E){let M=g,y=new rt,w=new T,C=0,_=E===!0?t:e,A=E===!0?1:-1;for(let H=1;H<=i;H++)u.push(0,m*A,0),f.push(0,A,0),d.push(.5,.5),g++;let I=g;for(let H=0;H<=i;H++){let L=H/i*c+o,P=Math.cos(L),D=Math.sin(L);w.x=_*D,w.y=m*A,w.z=_*P,u.push(w.x,w.y,w.z),f.push(0,A,0),y.x=P*.5+.5,y.y=D*.5*A+.5,d.push(y.x,y.y),g++}for(let H=0;H<i;H++){let N=M+H,L=I+H;E===!0?h.push(L,L+1,N):h.push(L+1,L,N),C+=3}l.addGroup(p,C,E===!0?1:2),p+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Jr=class r extends Ve{constructor(t=1,e=1,n=32,i=1,s=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(t){return new r(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Fu=class r extends Rt{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let s=[],a=[];o(i),l(n),h(),this.setAttribute("position",new wt(s,3)),this.setAttribute("normal",new wt(s.slice(),3)),this.setAttribute("uv",new wt(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(x){let b=new T,E=new T,M=new T;for(let y=0;y<e.length;y+=3)d(e[y+0],b),d(e[y+1],E),d(e[y+2],M),c(b,E,M,x)}function c(x,b,E,M){let y=M+1,w=[];for(let C=0;C<=y;C++){w[C]=[];let _=x.clone().lerp(E,C/y),A=b.clone().lerp(E,C/y),I=y-C;for(let H=0;H<=I;H++)H===0&&C===y?w[C][H]=_:w[C][H]=_.clone().lerp(A,H/I)}for(let C=0;C<y;C++)for(let _=0;_<2*(y-C)-1;_++){let A=Math.floor(_/2);_%2===0?(f(w[C][A+1]),f(w[C+1][A]),f(w[C][A])):(f(w[C][A+1]),f(w[C+1][A+1]),f(w[C+1][A]))}}function l(x){let b=new T;for(let E=0;E<s.length;E+=3)b.x=s[E+0],b.y=s[E+1],b.z=s[E+2],b.normalize().multiplyScalar(x),s[E+0]=b.x,s[E+1]=b.y,s[E+2]=b.z}function h(){let x=new T;for(let b=0;b<s.length;b+=3){x.x=s[b+0],x.y=s[b+1],x.z=s[b+2];let E=m(x)/2/Math.PI+.5,M=p(x)/Math.PI+.5;a.push(E,1-M)}g(),u()}function u(){for(let x=0;x<a.length;x+=6){let b=a[x+0],E=a[x+2],M=a[x+4],y=Math.max(b,E,M),w=Math.min(b,E,M);y>.9&&w<.1&&(b<.2&&(a[x+0]+=1),E<.2&&(a[x+2]+=1),M<.2&&(a[x+4]+=1))}}function f(x){s.push(x.x,x.y,x.z)}function d(x,b){let E=x*3;b.x=t[E+0],b.y=t[E+1],b.z=t[E+2]}function g(){let x=new T,b=new T,E=new T,M=new T,y=new rt,w=new rt,C=new rt;for(let _=0,A=0;_<s.length;_+=9,A+=6){x.set(s[_+0],s[_+1],s[_+2]),b.set(s[_+3],s[_+4],s[_+5]),E.set(s[_+6],s[_+7],s[_+8]),y.set(a[A+0],a[A+1]),w.set(a[A+2],a[A+3]),C.set(a[A+4],a[A+5]),M.copy(x).add(b).add(E).divideScalar(3);let I=m(M);v(y,A+0,x,I),v(w,A+2,b,I),v(C,A+4,E,I)}}function v(x,b,E,M){M<0&&x.x===1&&(a[b]=x.x-1),E.x===0&&E.z===0&&(a[b]=M/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.vertices,t.indices,t.radius,t.details)}};var $a=class r extends Fu{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new r(t.radius,t.detail)}};var vi=class r extends Rt{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new T,f=new T,d=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){let x=[],b=p/n,E=0;p===0&&a===0?E=.5/e:p===n&&c===Math.PI&&(E=-.5/e);for(let M=0;M<=e;M++){let y=M/e;u.x=-t*Math.cos(i+y*s)*Math.sin(a+b*o),u.y=t*Math.cos(a+b*o),u.z=t*Math.sin(i+y*s)*Math.sin(a+b*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),m.push(y+E,1-b),x.push(l++)}h.push(x)}for(let p=0;p<n;p++)for(let x=0;x<e;x++){let b=h[p][x+1],E=h[p][x],M=h[p+1][x],y=h[p+1][x+1];(p!==0||a>0)&&d.push(b,E,y),(p!==n-1||c<Math.PI)&&d.push(E,M,y)}this.setIndex(d),this.setAttribute("position",new wt(g,3)),this.setAttribute("normal",new wt(v,3)),this.setAttribute("uv",new wt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Yt=class extends bn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=of,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},ni=class extends Yt{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new rt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return $e(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new et(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new et(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new et(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var to=class extends bn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=of,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Qu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function yc(r,t,e){return!r||!e&&r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function tE(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function eE(r){function t(i,s){return r[i]-r[s]}let e=r.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function Om(r,t,e){let n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){let o=e[s]*t;for(let c=0;c!==t;++c)i[a++]=r[o+c]}return i}function f0(r,t,e,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(t.push(s.time),e.push.apply(e,a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(t.push(s.time),a.toArray(e,e.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(t.push(s.time),e.push(a)),s=r[i++];while(s!==void 0)}var Es=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];t:{e:{let a;n:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=e[++n],t<i)break e}a=e.length;break n}if(!(t>=s)){let o=e[1];t<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=e[--n-1],t>=s)break e}a=n,n=0;break n}break t}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let a=0;a!==i;++a)e[a]=n[s+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Hu=class extends Es{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Dr,endingEnd:Dr}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,a=t+1,o=i[s],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Fr:s=t,o=2*e-n;break;case Ec:s=i.length-2,o=e+i[s]-i[s+1];break;default:s=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Fr:a=t,c=2*n-e;break;case Ec:a=1,c=n+i[1]-i[0];break;default:a=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(t,e,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-e)/(i-e),v=g*g,m=v*g,p=-f*m+2*f*v-f*g,x=(1+f)*m+(-1.5-2*f)*v+(-.5+f)*g+1,b=(-1-d)*m+(1.5+d)*v+.5*g,E=d*m-d*v;for(let M=0;M!==o;++M)s[M]=p*a[h+M]+x*a[l+M]+b*a[c+M]+E*a[u+M];return s}},qc=class extends Es{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(n-e)/(i-e),u=1-h;for(let f=0;f!==o;++f)s[f]=a[l+f]*u+a[c+f]*h;return s}},Nu=class extends Es{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},ii=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=yc(e,this.TimeBufferType),this.values=yc(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:yc(t.times,Array),values:yc(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Nu(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new qc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Hu(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Vr:e=this.InterpolantFactoryMethodDiscrete;break;case Qs:e=this.InterpolantFactoryMethodLinear;break;case Th:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Vr;case this.InterpolantFactoryMethodLinear:return Qs;case this.InterpolantFactoryMethodSmooth:return Th}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,s=0,a=i-1;for(;s!==i&&n[s]<t;)++s;for(;a!==-1&&n[a]>e;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==s;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(i!==void 0&&tE(i))for(let o=0,c=i.length;o!==c;++o){let l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Th,s=t.length-1,a=1;for(let o=1;o<s;++o){let c=!1,l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(i)c=!0;else{let u=o*n,f=u-n,d=u+n;for(let g=0;g!==n;++g){let v=e[u+g];if(v!==e[f+g]||v!==e[d+g]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let u=o*n,f=a*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++a}}if(s>0){t[a]=t[s];for(let o=s*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};ii.prototype.TimeBufferType=Float32Array;ii.prototype.ValueBufferType=Float32Array;ii.prototype.DefaultInterpolation=Qs;var ws=class extends ii{};ws.prototype.ValueTypeName="bool";ws.prototype.ValueBufferType=Array;ws.prototype.DefaultInterpolation=Vr;ws.prototype.InterpolantFactoryMethodLinear=void 0;ws.prototype.InterpolantFactoryMethodSmooth=void 0;var Xc=class extends ii{};Xc.prototype.ValueTypeName="color";var is=class extends ii{};is.prototype.ValueTypeName="number";var Uu=class extends Es{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(i-e),l=t*o;for(let h=l+o;l!==h;l+=4)Wt.slerpFlat(s,0,a,l-o,a,l,c);return s}},Di=class extends ii{InterpolantFactoryMethodLinear(t){return new Uu(this.times,this.values,this.getValueSize(),t)}};Di.prototype.ValueTypeName="quaternion";Di.prototype.DefaultInterpolation=Qs;Di.prototype.InterpolantFactoryMethodSmooth=void 0;var Ts=class extends ii{};Ts.prototype.ValueTypeName="string";Ts.prototype.ValueBufferType=Array;Ts.prototype.DefaultInterpolation=Vr;Ts.prototype.InterpolantFactoryMethodLinear=void 0;Ts.prototype.InterpolantFactoryMethodSmooth=void 0;var ss=class extends ii{};ss.prototype.ValueTypeName="vector";var Zr=class{constructor(t,e=-1,n,i=rf){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=pi(),this.duration<0&&this.resetDuration()}static parse(t){let e=[],n=t.tracks,i=1/(t.fps||1);for(let a=0,o=n.length;a!==o;++a)e.push(iE(n[a]).scale(i));let s=new this(t.name,t.duration,e,t.blendMode);return s.uuid=t.uuid,s}static toJSON(t){let e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let s=0,a=n.length;s!==a;++s)e.push(ii.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(t,e,n,i){let s=e.length,a=[];for(let o=0;o<s;o++){let c=[],l=[];c.push((o+s-1)%s,o,(o+1)%s),l.push(0,1,0);let h=eE(c);c=Om(c,1,h),l=Om(l,1,h),!i&&c[0]===0&&(c.push(s),l.push(l[0])),a.push(new is(".morphTargetInfluences["+e[o].name+"]",c,l).scale(1/n))}return new this(t,-1,a)}static findByName(t,e){let n=t;if(!Array.isArray(t)){let i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){let i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,c=t.length;o<c;o++){let l=t[o],h=l.name.match(s);if(h&&h.length>1){let u=h[1],f=i[u];f||(i[u]=f=[]),f.push(l)}}let a=[];for(let o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],e,n));return a}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,f,d,g,v){if(d.length!==0){let m=[],p=[];f0(d,m,p,g),m.length!==0&&v.push(new u(f,m,p))}},i=[],s=t.name||"default",a=t.fps||30,o=t.blendMode,c=t.length||-1,l=t.hierarchy||[];for(let u=0;u<l.length;u++){let f=l[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let d={},g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let v=0;v<f[g].morphTargets.length;v++)d[f[g].morphTargets[v]]=-1;for(let v in d){let m=[],p=[];for(let x=0;x!==f[g].morphTargets.length;++x){let b=f[g];m.push(b.time),p.push(b.morphTarget===v?1:0)}i.push(new is(".morphTargetInfluence["+v+"]",m,p))}c=d.length*a}else{let d=".bones["+e[u].name+"]";n(ss,d+".position",f,"pos",i),n(Di,d+".quaternion",f,"rot",i),n(ss,d+".scale",f,"scl",i)}}return i.length===0?null:new this(s,c,i,o)}resetDuration(){let t=this.tracks,e=0;for(let n=0,i=t.length;n!==i;++n){let s=this.tracks[n];e=Math.max(e,s.times[s.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){let t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function nE(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return is;case"vector":case"vector2":case"vector3":case"vector4":return ss;case"color":return Xc;case"quaternion":return Di;case"bool":case"boolean":return ws;case"string":return Ts}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function iE(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let t=nE(r.type);if(r.times===void 0){let e=[],n=[];f0(r.keys,e,n,"value"),r.times=e,r.values=n}return t.parse!==void 0?t.parse(r):new t(r.name,r.times,r.values,r.interpolation)}var bs={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}},ku=class{constructor(t,e,n){let i=this,s=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let d=l[u],g=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}},sE=new ku,rs=class{constructor(t){this.manager=t!==void 0?t:sE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};rs.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ki={},Ou=class extends Error{constructor(t,e){super(t),this.response=e}},eo=class extends rs{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=bs.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(Ki[t]!==void 0){Ki[t].push({onLoad:e,onProgress:n,onError:i});return}Ki[t]=[],Ki[t].push({onLoad:e,onProgress:n,onError:i});let a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=Ki[t],u=l.body.getReader(),f=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),d=f?parseInt(f):0,g=d!==0,v=0,m=new ReadableStream({start(p){x();function x(){u.read().then(({done:b,value:E})=>{if(b)p.close();else{v+=E.byteLength;let M=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:d});for(let y=0,w=h.length;y<w;y++){let C=h[y];C.onProgress&&C.onProgress(M)}p.enqueue(E),x()}})}}});return new Response(m)}else throw new Ou(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o===void 0)return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(g=>d.decode(g))}}}).then(l=>{bs.add(t,l);let h=Ki[t];delete Ki[t];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onLoad&&d.onLoad(l)}}).catch(l=>{let h=Ki[t];if(h===void 0)throw this.manager.itemError(t),l;delete Ki[t];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onError&&d.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}};var zu=class extends rs{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=this,a=bs.get(t);if(a!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0),a;let o=Xa("img");function c(){h(),bs.add(t,this),e&&e(this),s.manager.itemEnd(t)}function l(u){h(),i&&i(u),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(t),o.src=t,o}};var Ss=class extends rs{constructor(t){super(t)}load(t,e,n,i){let s=new xn,a=new zu(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){s.image=o,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}},Qr=class extends Re{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new et(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},jc=class extends Qr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.groundColor=new et(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},eu=new bt,zm=new T,Bm=new T,no=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new rt(512,512),this.map=null,this.mapPass=null,this.matrix=new bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ya,this._frameExtents=new rt(1,1),this._viewportCount=1,this._viewports=[new le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;zm.setFromMatrixPosition(t.matrixWorld),e.position.copy(zm),Bm.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Bm),e.updateMatrixWorld(),eu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(eu),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(eu)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Bu=class extends no{constructor(){super(new Ne(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=Wr*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=t.distance||e.far;(n!==e.fov||i!==e.aspect||s!==e.far)&&(e.fov=n,e.aspect=i,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},As=class extends Qr{constructor(t,e,n=0,i=Math.PI/3,s=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.target=new Re,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new Bu}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Gm=new bt,Ua=new T,nu=new T,Gu=class extends no{constructor(){super(new Ne(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new rt(4,2),this._viewportCount=6,this._viewports=[new le(2,1,1,1),new le(0,1,1,1),new le(3,1,1,1),new le(1,1,1,1),new le(3,0,1,1),new le(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Ua.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ua),nu.copy(n.position),nu.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(nu),n.updateMatrixWorld(),i.makeTranslation(-Ua.x,-Ua.y,-Ua.z),Gm.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gm)}},Rs=class extends Qr{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Gu}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Vu=class extends no{constructor(){super(new Ms(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},$r=class extends Qr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.target=new Re,this.shadow=new Vu}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Cs=class{static decodeText(t){if(typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){let e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}},Yc=class extends Rt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var Kc=class extends rs{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=this,a=bs.get(t);if(a!==void 0){if(s.manager.itemStart(t),a.then){a.then(l=>{e&&e(l),s.manager.itemEnd(t)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let c=fetch(t,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){return bs.add(t,l),e&&e(l),s.manager.itemEnd(t),l}).catch(function(l){i&&i(l),bs.remove(t),s.manager.itemError(t),s.manager.itemEnd(t)});bs.add(t,c),s.manager.itemStart(t)}};var Wu=class{constructor(t,e,n){this.binding=t,this.valueSize=n;let i,s,a;switch(e){case"quaternion":i=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){let n=this.buffer,i=this.valueSize,s=t*i+i,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[s+o]=n[o];a=e}else{a+=e;let o=e/a;this._mixBufferRegion(n,s,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(t){let e=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){let e=this.valueSize,n=this.buffer,i=t*e+e,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){let c=e*this._origIndex;this._mixBufferRegion(n,i,c,1-s,e)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let c=e,l=e+e;c!==l;++c)if(n[c]!==n[c+e]){o.setValue(n,i);break}}saveOriginalState(){let t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let s=n,a=i;s!==a;++s)e[s]=e[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){let t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,i,s){if(i>=.5)for(let a=0;a!==s;++a)t[e+a]=t[n+a]}_slerp(t,e,n,i){Wt.slerpFlat(t,e,t,e,t,n,i)}_slerpAdditive(t,e,n,i,s){let a=this._workIndex*s;Wt.multiplyQuaternionsFlat(t,a,t,e,t,n),Wt.slerpFlat(t,e,t,e,t,a,i)}_lerp(t,e,n,i,s){let a=1-i;for(let o=0;o!==s;++o){let c=e+o;t[c]=t[c]*a+t[n+o]*i}}_lerpAdditive(t,e,n,i,s){for(let a=0;a!==s;++a){let o=e+a;t[o]=t[o]+t[n+a]*i}}},ff="\\[\\]\\.:\\/",rE=new RegExp("["+ff+"]","g"),df="[^"+ff+"]",aE="[^"+ff.replace("\\.","")+"]",oE=/((?:WC+[\/:])*)/.source.replace("WC",df),cE=/(WCOD+)?/.source.replace("WCOD",aE),lE=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",df),hE=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",df),uE=new RegExp("^"+oE+cE+lE+hE+"$"),fE=["material","materials","bones","map"],qu=class{constructor(t,e,n){let i=n||Ae.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ae=class r{constructor(t,e,n){this.path=e,this.parsedPath=n||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,n):new r(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(rE,"")}static parseTrackName(t){let e=uE.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);fE.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[i];if(a===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ae.Composite=qu;Ae.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ae.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ae.prototype.GetterByBindingType=[Ae.prototype._getValue_direct,Ae.prototype._getValue_array,Ae.prototype._getValue_arrayElement,Ae.prototype._getValue_toArray];Ae.prototype.SetterByBindingTypeAndVersioning=[[Ae.prototype._setValue_direct,Ae.prototype._setValue_direct_setNeedsUpdate,Ae.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_array,Ae.prototype._setValue_array_setNeedsUpdate,Ae.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_arrayElement,Ae.prototype._setValue_arrayElement_setNeedsUpdate,Ae.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_fromArray,Ae.prototype._setValue_fromArray_setNeedsUpdate,Ae.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Xu=class{constructor(t,e,n=null,i=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=i;let s=e.tracks,a=s.length,o=new Array(a),c={endingStart:Dr,endingEnd:Dr};for(let l=0;l!==a;++l){let h=s[l].createInterpolant(null);o[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=sf,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n){if(t.fadeOut(e),this.fadeIn(e),n){let i=this._clip.duration,s=t._clip.duration,a=s/i,o=i/s;t.warp(1,a,e),this.warp(o,1,e)}return this}crossFadeTo(t,e,n){return t.crossFadeFrom(this,e,n)}stopFading(){let t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){let i=this._mixer,s=i.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);let c=o.parameterPositions,l=o.sampleValues;return c[0]=s,c[1]=s+n,l[0]=t/a,l[1]=e/a,this}stopWarping(){let t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,i){if(!this.enabled){this._updateWeight(t);return}let s=this._startTime;if(s!==null){let c=(t-s)*n;c<0||n===0?e=0:(this._startTime=null,e=n*c)}e*=this._updateTimeScale(t);let a=this._updateTime(e),o=this._updateWeight(t);if(o>0){let c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case Rx:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(a),l[h].accumulateAdditive(o);break;case rf:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(a),l[h].accumulate(i,o)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){let e=this._clip.duration,n=this.loop,i=this.time+t,s=this._loopCount,a=n===Ax;if(t===0)return s===-1?i:a&&(s&1)===1?e-i:i;if(n===nf){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(i>=e)i=e;else if(i<0)i=0;else{this.time=i;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(s===-1&&(t>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=e||i<0){let o=Math.floor(i/e);i-=e*o,s+=Math.abs(o);let c=this.repetitions-s;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=t>0?e:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(c===1){let l=t<0;this._setEndings(l,!l,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(s&1)===1)return e-i}return i}_setEndings(t,e,n){let i=this._interpolantSettings;n?(i.endingStart=Fr,i.endingEnd=Fr):(t?i.endingStart=this.zeroSlopeAtStart?Fr:Dr:i.endingStart=Ec,e?i.endingEnd=this.zeroSlopeAtEnd?Fr:Dr:i.endingEnd=Ec)}_scheduleFading(t,e,n){let i=this._mixer,s=i.time,a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,c=a.sampleValues;return o[0]=s,c[0]=e,o[1]=s+t,c[1]=n,this}},dE=new Float32Array(1),ta=class extends ts{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){let n=t._localRoot||this._root,i=t._clip.tracks,s=i.length,a=t._propertyBindings,o=t._interpolants,c=n.uuid,l=this._bindingsByRootAndName,h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==s;++u){let f=i[u],d=f.name,g=h[d];if(g!==void 0)++g.referenceCount,a[u]=g;else{if(g=a[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,d));continue}let v=e&&e._propertyBindings[u].binding.parsedPath;g=new Wu(Ae.create(n,d,v),f.ValueTypeName,f.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,d),a[u]=g}o[u].resultBuffer=g.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){let n=(t._localRoot||this._root).uuid,i=t._clip.uuid,s=this._actionsByClip[i];this._bindAction(t,s&&s.knownActions[0]),this._addInactiveAction(t,i,n)}let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let s=e[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let s=e[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){let e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){let i=this._actions,s=this._actionsByClip,a=s[e];if(a===void 0)a={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,s[e]=a;else{let o=a.knownActions;t._byClipCacheIndex=o.length,o.push(t)}t._cacheIndex=i.length,i.push(t),a.actionByRoot[n]=t}_removeInactiveAction(t){let e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;let s=t._clip.uuid,a=this._actionsByClip,o=a[s],c=o.knownActions,l=c[c.length-1],h=t._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),t._byClipCacheIndex=null;let u=o.actionByRoot,f=(t._localRoot||this._root).uuid;delete u[f],c.length===0&&delete a[s],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let s=e[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(t){let e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_takeBackAction(t){let e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_addInactiveBinding(t,e,n){let i=this._bindingsByRootAndName,s=this._bindings,a=i[e];a===void 0&&(a={},i[e]=a),a[n]=t,t._cacheIndex=s.length,s.push(t)}_removeInactiveBinding(t){let e=this._bindings,n=t.binding,i=n.rootNode.uuid,s=n.path,a=this._bindingsByRootAndName,o=a[i],c=e[e.length-1],l=t._cacheIndex;c._cacheIndex=l,e[l]=c,e.pop(),delete o[s],Object.keys(o).length===0&&delete a[i]}_lendBinding(t){let e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_takeBackBinding(t){let e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_lendControlInterpolant(){let t=this._controlInterpolants,e=this._nActiveControlInterpolants++,n=t[e];return n===void 0&&(n=new qc(new Float32Array(2),new Float32Array(2),1,dE),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){let e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,s=e[i];t.__cacheIndex=i,e[i]=t,s.__cacheIndex=n,e[n]=s}clipAction(t,e,n){let i=e||this._root,s=i.uuid,a=typeof t=="string"?Zr.findByName(i,t):t,o=a!==null?a.uuid:t,c=this._actionsByClip[o],l=null;if(n===void 0&&(a!==null?n=a.blendMode:n=rf),c!==void 0){let u=c.actionByRoot[s];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],a===null&&(a=l._clip)}if(a===null)return null;let h=new Xu(this,a,e,n);return this._bindAction(h,l),this._addInactiveAction(h,o,s),h}existingAction(t,e){let n=e||this._root,i=n.uuid,s=typeof t=="string"?Zr.findByName(n,t):t,a=s?s.uuid:t,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){let t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;let e=this._actions,n=this._nActiveActions,i=this.time+=t,s=Math.sign(t),a=this._accuIndex^=1;for(let l=0;l!==n;++l)e[l]._update(i,t,s,a);let o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(a);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){let e=this._actions,n=t.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){let a=s.knownActions;for(let o=0,c=a.length;o!==c;++o){let l=a[o];this._deactivateAction(l);let h=l._cacheIndex,u=e[e.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,e[h]=u,e.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(t){let e=t.uuid,n=this._actionsByClip;for(let a in n){let o=n[a].actionByRoot,c=o[e];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let i=this._bindingsByRootAndName,s=i[e];if(s!==void 0)for(let a in s){let o=s[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(t,e){let n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var Jc=class{constructor(t,e,n=0,i=1/0){this.ray=new $s(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new ja,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return ju(t,this,n,e),n.sort(Vm),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)ju(t[i],this,n,e);return n.sort(Vm),n}};function Vm(r,t){return r.distance-t.distance}function ju(r,t,e,n){if(r.layers.test(t.layers)&&r.raycast(t,e),n===!0){let i=r.children;for(let s=0,a=i.length;s<a;s++)ju(i[s],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var d0={reed:{low:9,det:2.2,fine:.4,mount:330},forest:{low:24,det:6.5,fine:1.1,mount:440},mountain:{low:34,det:5.5,fine:1.2,mount:520,side:!0},meadow:{low:22,det:3.2,fine:.5,mount:380},sea:{low:7,det:2.5,fine:.4,mount:260,sea:!0},city:{low:0,det:0,fine:0,mount:300,hill:9}},_e={id:"reed",...d0.reed};function p0(r){Object.assign(_e,{side:!1,sea:!1,hill:0},d0[r],{id:r})}function $t(r,t){let e=Math.imul(r,374761393)+Math.imul(t,668265263)|0;return e=Math.imul(e^e>>>13,1274126177),e^=e>>>16,(e>>>0)/4294967295}function Ce(r,t){let e=Math.floor(r),n=Math.floor(t),i=r-e,s=t-n;i=i*i*(3-2*i),s=s*s*(3-2*s);let a=$t(e,n),o=$t(e+1,n),c=$t(e,n+1),l=$t(e+1,n+1);return a+(o-a)*i+(c-a)*s+(a-o-c+l)*i*s}function bi(r,t){if(_e.hill){let e=Ce(r/900+2.1,t/900+8.4),n=e<.45?0:e>.62?1:(e-.45)/.17;return _e.hill*n*n*(3-2*n)*(Ce(r/260+6.6,t/260+3.2)-.5)*2}return _e.low*((Ce(r/1e3+11.3,t/1e3+7.1)-.5)*1.34+(Ce(r/500+3.7,t/500+1.9)-.5)*.66)}function el(r,t){return _e.det*(Ce(r/165+5.5,t/165+2.2)-.5)*2+_e.fine*(Ce(r/40+9.1,t/40+4.4)-.5)*2}function nl(r,t){let e=0,n=.62,i=1/1500;for(let s=0;s<4;s++){let a=Ce(r*i+31.7*s,t*i+17.3*s),o=1-Math.abs(a*2-1);e+=n*o*o,n*=.45,i*=2.1}return _e.mount*e}var m0=`
uniform float uTLow, uTDet, uTFine;
uint tIhash(ivec2 p) {
  uint h = uint(p.x) * 374761393u + uint(p.y) * 668265263u;
  h = (h ^ (h >> 13u)) * 1274126177u;
  return h ^ (h >> 16u);
}
float tHash(ivec2 p) { return float(tIhash(p)) / 4294967295.0; }
float tNoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = p - i;
  f = f * f * (3.0 - 2.0 * f);
  ivec2 q = ivec2(i);
  float a = tHash(q), b = tHash(q + ivec2(1, 0)), c = tHash(q + ivec2(0, 1)), d = tHash(q + ivec2(1, 1));
  return a + (b - a) * f.x + (c - a) * f.y + (a - b - c + d) * f.x * f.y;
}
float tLow(vec2 p) {
  return uTLow * ((tNoise(p / 1000.0 + vec2(11.3, 7.1)) - 0.5) * 1.34 + (tNoise(p / 500.0 + vec2(3.7, 1.9)) - 0.5) * 0.66);
}
float tDetail(vec2 p) {
  return uTDet * (tNoise(p / 165.0 + vec2(5.5, 2.2)) - 0.5) * 2.0 + uTFine * (tNoise(p / 40.0 + vec2(9.1, 4.4)) - 0.5) * 2.0;
}
`;var Me={halfWidth:4.6,chunkLen:120,step:2},g0=4.6,Je={seg:720,bend:190,hw:7.2,walk:4,side:3.5,sideWalk:2.5,lanes:[1.75,5.25]},pE=[215,455,690],v0=r=>.9*Math.sin(.0021*r+1)+.5*Math.sin(.0053*r+2.2)+.25*Math.sin(.0117*r+.3),mE=v0(0),yi={period:2600,start:450,len:800,ramp:70},pf=(r,t,e)=>{let n=Math.min(1,Math.max(0,(e-r)/(t-r)));return n*n*(3-2*n)},mf=r=>{let t=Math.sin(r*127.1+311.7)*43758.5453;return t-Math.floor(t)},gE=r=>.07*Math.sin(.9*r)+.045*Math.sin(1.37*r+1.3)+.05*Math.sin(.31*r+2),il=class{constructor(){this.pts=[{x:0,z:0,y:bi(0,0)}],this.dirt=!1,this.city=!1,this._cum=[0]}setShape(t){t!==this.city&&(this.city=t,this.pts=[{x:0,z:0,y:0}])}_delta(t){if(t<=0||mf(t*1.37+.5)<.3)return 0;let n=(mf(t*2.71+3.3)-.5)*1.5-.35*this._sum(t-1);return Math.sign(n)*Math.max(.25,Math.abs(n))}_sum(t){if(t<0)return 0;for(;this._cum.length<=t;){let e=this._cum.length;this._cum.push(this._cum[e-1]+this._delta(e))}return this._cum[t]}junction(t){let e=Math.floor(t/3),n=t-e*3;return e*Je.seg+pE[n]+(mf(t*3.17+1.9)-.5)*(n===2?10:24)}junctionIndex(t){let e=Math.floor(t/Je.seg)*3-1;for(;this.junction(e)<t;)e++;return e}nearJunction(t){if(!this.city)return null;let e=this.junctionIndex(t),n=this.junction(e-1),i=this.junction(e);return t-n<i-t?n:i}dirtAt(t){if(!this.dirt)return 0;let e=(t%yi.period+yi.period)%yi.period;return pf(yi.start,yi.start+yi.ramp,e)*(1-pf(yi.start+yi.len-yi.ramp,yi.start+yi.len,e))}_y(t,e,n){return this.city?bi(t,e):bi(t,e)+this.dirtAt(n)*gE(n)}heading(t){if(!this.city)return v0(t)-mE;let e=Math.floor(t/Je.seg);return this._sum(e-1)+this._delta(e)*pf(0,Je.bend,t-e*Je.seg)}curvature(t){let e=Math.max(0,t-6),n=t+6;return(this.heading(n)-this.heading(e))/(n-e)}ensure(t){this._ensure(Math.ceil(t/Me.step)+1)}_ensure(t){let{step:e}=Me;for(;this.pts.length<=t+1;){let n=this.pts.length-1,i=this.heading(n*e+e/2),s=this.pts[n],a=s.x-Math.sin(i)*e,o=s.z-Math.cos(i)*e;this.pts.push({x:a,z:o,y:this._y(a,o,(n+1)*e)})}}recomputeHeights(){this.pts.forEach((t,e)=>{t.y=this._y(t.x,t.z,e*Me.step)})}at(t,e={}){let{step:n}=Me;t<0&&(t=0);let i=Math.floor(t/n);this._ensure(i+1);let s=(t-i*n)/n,a=this.pts[i],o=this.pts[i+1];return e.x=a.x+(o.x-a.x)*s,e.z=a.z+(o.z-a.z)*s,e.y=a.y+(o.y-a.y)*s,e.th=this.heading(t),e}};var Fi={uMistD:{value:0},uMistH:{value:12},uMistBase:{value:0},uMistCover:{value:.5},uMistT:{value:0},uMistWind:{value:new rt},uMistColor:{value:new et}};function x0(){let r=Jt;r.fog_pars_vertex=`
#ifdef USE_FOG
  varying float vFogDepth;
  varying vec3 vFogWorld;
#endif`,r.fog_vertex=`
#ifdef USE_FOG
  vFogDepth = - mvPosition.z;
  vFogWorld = ( mvPosition.xyz - viewMatrix[ 3 ].xyz ) * mat3( viewMatrix );
#endif`,r.fog_pars_fragment=`
#ifdef USE_FOG
  uniform vec3 fogColor;
  varying float vFogDepth;
  varying vec3 vFogWorld;
  #ifdef FOG_EXP2
    uniform float fogDensity;
  #else
    uniform float fogNear;
    uniform float fogFar;
  #endif
  uniform float uMistD, uMistH, uMistBase, uMistCover, uMistT;
  uniform vec2 uMistWind;
  uniform vec3 uMistColor;
  float mistHash( vec2 p ) { return fract( sin( dot( p, vec2( 127.1, 311.7 ) ) ) * 43758.5453 ); }
  float mistNoise( vec2 p ) {
    vec2 i = floor( p ), f = fract( p ); f = f * f * ( 3.0 - 2.0 * f );
    return mix( mix( mistHash( i ), mistHash( i + vec2( 1.0, 0.0 ) ), f.x ), mix( mistHash( i + vec2( 0.0, 1.0 ) ), mistHash( i + vec2( 1.0, 1.0 ) ), f.x ), f.y );
  }
#endif`,r.fog_fragment=`
#ifdef USE_FOG
  #ifdef FOG_EXP2
    float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
  #else
    float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
  #endif
  vec3 fogMix = fogColor;
  if ( uMistD > 0.0 ) {
    float mDist = length( vFogWorld - cameraPosition );
    float h0 = clamp( ( cameraPosition.y - uMistBase ) / uMistH, -1.2, 40.0 );
    float h1 = clamp( ( vFogWorld.y - uMistBase ) / uMistH, -1.2, 40.0 );
    float dh = h1 - h0;
    float e1 = exp( - h1 );
    float avg = abs( dh ) > 1e-3 ? ( exp( - h0 ) - e1 ) / dh : e1;     // mật độ trung bình dọc tia nhìn
    float mn = mistNoise( vFogWorld.xz * 0.0045 + uMistWind * uMistT ) * 0.65
             + mistNoise( vFogWorld.xz * 0.017 - uMistWind * uMistT * 1.7 + 7.3 ) * 0.35;
    float patchy = smoothstep( 0.78 - 0.78 * uMistCover, 1.02 - 0.55 * uMistCover, mn );
    float mist = 1.0 - exp( - uMistD * mDist * clamp( avg, 0.0, 4.0 ) * patchy );
    mist *= 1.0 - 0.7 * smoothstep( 30.0, 220.0, uMistBase - vFogWorld.y );   // thung lũng rất sâu: sương mỏng dần, vẫn thấy đáy
    float keep = ( 1.0 - fogFactor ) * ( 1.0 - mist );
    fogMix = mix( uMistColor, fogColor, fogFactor / max( 1.0 - keep, 1e-4 ) );
    fogFactor = 1.0 - keep;
  }
  gl_FragColor.rgb = mix( gl_FragColor.rgb, fogMix, fogFactor );
#endif`}function me(r){let t=r.onBeforeCompile,e=r.customProgramCacheKey,n=t&&t!==bn.prototype.onBeforeCompile;r.onBeforeCompile=function(s,a){n&&t.call(this,s,a),Object.assign(s.uniforms,Fi)};let i=(n?t.toString():"")+(e?e.call(r):"");return r.customProgramCacheKey=()=>i+"#mist",r.needsUpdate=!0,r}function so(r,t){let e=document.createElement("canvas");return e.width=r,e.height=t,[e,e.getContext("2d")]}function vf(r,t=!1){let[i,s]=so(512,512);s.fillStyle="#3c3f45",s.fillRect(0,0,512,512);let a=s.getImageData(0,0,512,512);for(let u=0;u<a.data.length;u+=4){let f=(Math.random()-.5)*30;a.data[u]+=f,a.data[u+1]+=f,a.data[u+2]+=f}s.putImageData(a,0,0);let o=512/(Me.halfWidth*2);for(let u of t?[]:[.27,.73]){let f=s.createLinearGradient((u-.09)*512,0,(u+.09)*512,0);f.addColorStop(0,"rgba(0,0,0,0)"),f.addColorStop(.5,"rgba(0,0,0,0.22)"),f.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=f,s.fillRect((u-.09)*512,0,.18*512,512)}s.fillStyle="#dcdcd4";let c=.16*o,l=.35*o;if(t){let u=new wn(i);return u.colorSpace=ue,u.wrapS=u.wrapT=Fn,u.anisotropy=r.capabilities.getMaxAnisotropy(),u}s.fillRect(l,0,c,512),s.fillRect(512-l-c,0,c,512),s.fillStyle="#e9d36a",s.fillRect(512/2-c/2,0,c,512/3);let h=new wn(i);return h.colorSpace=ue,h.wrapS=h.wrapT=Fn,h.anisotropy=r.capabilities.getMaxAnisotropy(),h}function sl(){let t=document.createElement("canvas");t.width=t.height=128;let e=t.getContext("2d"),n=e.createImageData(128,128);for(let s=0;s<128;s++)for(let a=0;a<128;a++){let o=(a+.5)/128*2-1,c=(s+.5)/128*2-1,l=o*o+c*c,h=Math.min(1,Math.exp(-l*5)*.55+Math.exp(-l*22)*.35+Math.exp(-l*120)*.35)*(1-Math.min(1,l)**4),u=(s*128+a)*4;n.data[u]=n.data[u+1]=n.data[u+2]=255,n.data[u+3]=Math.round(h*255)}e.putImageData(n,0,0);let i=new wn(t);return i.colorSpace=ue,i}function na(){let[r,t]=so(128,128),e=t.createRadialGradient(64,64,0,64,64,64);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.2,"rgba(255,255,255,0.55)"),e.addColorStop(.5,"rgba(255,255,255,0.12)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128);let n=new wn(r);return n.colorSpace=ue,n}function xf(r){let t=r>>>0;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function b0(){let[e,n]=so(128,360),i=xf(5),s=128/2;n.strokeStyle="#c9bb8e",n.lineWidth=2.2,n.lineCap="round",n.beginPath(),n.moveTo(s,360),n.quadraticCurveTo(s+2,360*.66,s,360*.46),n.stroke();let a=4,o=360*.5,c=u=>5+50*Math.pow(Math.sin(Math.min(1,u*1.15)*Math.PI*.55),.85)*Math.pow(1-u,.6);n.fillStyle="rgba(250,246,234,0.6)",n.beginPath();for(let u=0;u<=24;u++){let f=u/24;n.lineTo(s+c(f)*.6,o-f*(o-a))}for(let u=24;u>=0;u--){let f=u/24;n.lineTo(s-c(f)*.6,o-f*(o-a))}n.closePath(),n.fill();let l=["#ffffff","#fffcf4","#f6f0df","#ede5cf","#fffef9"];for(let u=0;u<1500;u++){let f=Math.pow(i(),.85),d=o-f*(o-a)+i()*6,g=c(f),v=s+(i()*2-1)*g*(.4+.7*i()),m=d-6-i()*30;n.strokeStyle=l[Math.floor(i()*l.length)],n.globalAlpha=.35+i()*.55,n.lineWidth=.7+i()*1.5,n.beginPath(),n.moveTo(s+(i()-.5)*5,d),n.quadraticCurveTo((s+v)/2+(i()-.5)*10,(d+m)/2,v,m),n.stroke()}n.globalAlpha=1;let h=new wn(e);return h.colorSpace=ue,h.anisotropy=4,h}function y0(r){let[e,n]=so(512,512),i=xf(23);n.fillStyle="#d6d6d6",n.fillRect(0,0,512,512),n.lineCap="round";for(let a=0;a<16e3;a++){let o=i()*512,c=i()*512,l=3+i()*11,h=-Math.PI/2+(i()-.5)*1.1,u=Math.cos(h)*l,f=Math.sin(h)*l,d=Math.floor(150+i()*105);n.strokeStyle=`rgb(${d},${d},${d})`,n.globalAlpha=.35+i()*.5,n.lineWidth=.7+i()*1.3;for(let g of[-512,0,512])for(let v of[-512,0,512]){let m=o+g,p=c+v;m<-20||m>532||p<-20||p>532||(n.beginPath(),n.moveTo(m,p),n.lineTo(m+u,p+f),n.stroke())}}n.globalAlpha=1;let s=new wn(e);return s.colorSpace=ue,s.wrapS=s.wrapT=Fn,s.anisotropy=r.capabilities.getMaxAnisotropy(),s}function _0(){let[e,n]=so(512,256),i=xf(77),s=[];for(let u=0;u<9;u++){let f=i()*Math.PI*2,d=i()*62;s.push([128+Math.cos(f)*d*1.15,120+Math.sin(f)*d*.85,38+i()*34])}let a=(u,f)=>s.some(([d,g,v])=>(u-d)**2+(f-g)**2<v*v),o=["#2f5522","#3d6a2a","#4c7d32","#5c9038","#6fa443","#87b851"];for(let u=0;u<2600;u++){let f=8+i()*240,d=8+i()*230;if(!a(f,d))continue;let g=1-d/256,v=Math.min(o.length-1,Math.floor((i()*.7+g*.55)*o.length));n.fillStyle=o[v],n.beginPath(),n.ellipse(f,d,3+i()*5,2+i()*3.5,i()*Math.PI,0,Math.PI*2),n.fill()}let c=320,l=["#22402a","#2b4f31","#355e39","#3f6d41","#4d7d4a"];for(let u=0;u<2400;u++){let f=Math.pow(i(),.8),d=6+f*236,g=f*7%1,v=(6+f*58)*(.55+.45*g),m=c+(i()*2-1)*v*.25,p=c+(i()*2-1)*v,x=d+4+Math.abs(p-c)*.18+i()*6;n.strokeStyle=l[Math.min(l.length-1,Math.floor((i()*.8+(1-f)*.4)*l.length))],n.lineWidth=1+i()*2.2,n.beginPath(),n.moveTo(m,d),n.lineTo(p,x),n.stroke()}n.fillStyle="#5a4434",n.fillRect(448,0,64,64);let h=new wn(e);return h.colorSpace=ue,h.anisotropy=4,h}var gf={};function er(r,t,{srgb:e=!0,repeat:n=!0}={}){if(gf[r])return gf[r];let i=new Ss().load("assets/tex/"+r+".webp");return e&&(i.colorSpace=ue),n&&(i.wrapS=i.wrapT=Fn),i.anisotropy=Math.min(8,t.capabilities.getMaxAnisotropy()),gf[r]=i,i}var Mf=1100,ro=22,vE=3200,xE=900,bf=700,yf=600,_f=6,Tn=r=>{let t=Math.sin(r*127.1+311.7)*43758.5453;return t-Math.floor(t)},M0=r=>470+70*Math.sin(r/650+1.3)+25*Math.sin(r/230);function bE(r){if(Tn(r*3.7+1.1)>.8)return null;let t=120+140*Tn(r*5.3+2.2);return{t:r,s:r*Mf+(Tn(r*2.9)-.5)*400,len:t,n:Math.round(16+t*.22*(.7+.6*Tn(r*7.1))),streets:[0],lat:M0}}var Ef=5e3,yE=r=>330+18*Math.sin(r/420);function _E(r){return r<0?null:{t:1e5+r,s:1300+r*Ef,len:450,n:220,streets:[0,42,84],lat:yE,big:!0}}function wf(){let r=new he(1,1,1).translate(0,.5,0).toNonIndexed(),t=.54,e=1,n=1.45,i=[-t,e,-t,t,e,-t,t,n,0,-t,e,-t,t,n,0,-t,n,0,-t,e,t,-t,n,0,t,n,0,-t,e,t,t,n,0,t,e,t,-t,e,-t,-t,n,0,-t,e,t,t,e,-t,t,e,t,t,n,0],s=new Rt;s.setAttribute("position",new wt(i,3)),s.computeVertexNormals();let a=new Rt,o=r.attributes.position.array,c=r.attributes.normal.array,l=s.attributes.position.array,h=s.attributes.normal.array,u=new Float32Array(o.length+l.length),f=new Float32Array(c.length+h.length);u.set(o),u.set(l,o.length),f.set(c),f.set(h,c.length);let d=new Float32Array(u.length/3);return d.fill(1,o.length/3,u.length/3-6),a.setAttribute("position",new Mt(u,3)),a.setAttribute("normal",new Mt(f,3)),a.setAttribute("aRoof",new Mt(d,1)),a}var ME=`
  uniform float uScale, uFogD;
  varying float vA;
  void main() {
    vec4 mv = viewMatrix * vec4(position, 1.0);
    float fd = uFogD * -mv.z;
    vA = exp(-fd * fd);
    gl_PointSize = clamp(1.6 * uScale / -mv.z, 3.0, 20.0);
    gl_Position = projectionMatrix * mv;
  }`,EE=`
  uniform vec3 uColor; uniform float uAmt;
  varying float vA;
  void main() {
    float d = length(gl_PointCoord - 0.5) * 2.0;
    float a = (smoothstep(0.35, 0.0, d) + exp(-d * d * 5.0) * 0.4) * vA * uAmt;
    if (a < 0.003) discard;
    gl_FragColor = vec4(uColor * a, 1.0);
  }`,rl=class{constructor(t){this.group=new Pt,this.group.visible=!1,t.add(this.group),this.uLit={value:0};let e=new Yt({roughness:.85,metalness:0,side:de});e.onBeforeCompile=s=>{s.uniforms.uLit=this.uLit,s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
          attribute float aRoof;
          varying vec3 vWall, vNL, vSize; varying float vRoof, vId;`).replace("#include <begin_vertex>",`#include <begin_vertex>
          vSize = vec3(length(instanceMatrix[0].xyz), length(instanceMatrix[1].xyz), length(instanceMatrix[2].xyz));
          vWall = position * vSize; vNL = normal; vRoof = aRoof;
          vId = fract(sin(dot(instanceMatrix[3].xz, vec2(12.9898, 78.233))) * 43758.5453);`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
          uniform float uLit;
          varying vec3 vWall, vNL, vSize; varying float vRoof, vId;
          float hh(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }`).replace("#include <color_fragment>",`#include <color_fragment>
          // mái: đỏ sẫm / nâu / xám đá theo từng nhà
          vec3 roofC = vId < 0.4 ? vec3(0.28, 0.07, 0.05) : vId < 0.7 ? vec3(0.17, 0.12, 0.09) : vec3(0.13, 0.14, 0.16);
          diffuseColor.rgb = mix(diffuseColor.rgb, roofC, vRoof);
          // cửa sổ trên tường: lưới ô 2.6 m × 2.9 m (mỗi tầng), chừa mép tường
          float wall = (1.0 - vRoof) * step(abs(vNL.y), 0.5);
          bool alongX = abs(vNL.z) > 0.5;
          float u = alongX ? vWall.x : vWall.z;
          float halfW = alongX ? vSize.x * 0.5 : vSize.z * 0.5;
          vec2 cell = vec2(u / 2.6 + 0.5, (vWall.y - 0.9) / 2.9);
          vec2 f = fract(cell), id = floor(cell);
          float win = step(0.28, f.x) * step(f.x, 0.72) * step(0.25, f.y) * step(f.y, 0.75)
                    * step(0.0, cell.y) * step(vWall.y, vSize.y - 0.5) * step(abs(u), halfW - 0.7) * wall;
          float lit = step(hh(id + vec2(vId * 91.0, dot(vNL, vec3(3.0, 5.0, 7.0)))), 0.45);
          // ở xa: ô cửa sổ nhỏ hơn ~2 điểm ảnh => dùng giá trị trung bình (không lấp lánh răng cưa)
          float far = smoothstep(0.25, 0.6, max(fwidth(cell.x), fwidth(cell.y)));
          win = mix(win, 0.2 * wall * step(0.0, cell.y) * step(vWall.y, vSize.y - 0.5), far);
          lit = mix(lit, 0.45, far);
          diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.05, 0.06, 0.07), win);
          vec3 winGlow = vec3(1.0, 0.62, 0.3) * 5.0 * uLit * win * lit;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
          totalEmissiveRadiance += winGlow;`)},e.customProgramCacheKey=()=>"valley-house",me(e),this.houses=new we(wf(),e,bf),this.houses.count=0,this.houses.frustumCulled=!1,this.houses.instanceColor=new un(new Float32Array(bf*3),3),this.group.add(this.houses),this.lightPos=new Float32Array(yf*3);let n=new Rt;n.setAttribute("position",new Mt(this.lightPos,3)),n.setDrawRange(0,0),this.lightMat=new ye({uniforms:{uScale:{value:500},uFogD:{value:0},uAmt:{value:0},uColor:{value:new et(8,4.3,1.4)}},vertexShader:ME,fragmentShader:EE,transparent:!0,depthWrite:!1,blending:tn,fog:!1}),this.lights=new fn(n,this.lightMat),this.lights.frustumCulled=!1,this.lights.renderOrder=4,this.group.add(this.lights);let i=na();this.hazes=Array.from({length:_f},()=>{let s=new kn(new Hn({map:i,color:16751184,transparent:!0,opacity:0,depthWrite:!1,blending:tn}));return s.visible=!1,this.group.add(s),s}),this.heights=new Map,this.built=null,this._p={},this._m=new bt,this._q=new Wt,this._v=new T,this._s=new T,this._c=new et,this._up=new T(0,1,0)}set visible(t){this.group.visible=t}get visible(){return this.group.visible}reset(){this.heights.clear(),this.built=null}_h(t,e,n,i){let s=this.heights.get(t);return s===void 0&&(s=i.heightAt(e,n),this.heights.set(t,s)),s}_valley(t,e,n,i,s,a=M0){let o=e.at(t,this._p),c=Math.cos(o.th),l=-Math.sin(o.th),h=-Math.sin(o.th),u=-Math.cos(o.th),f=a(t)+n;return s.x=o.x+c*f+h*i,s.z=o.z+l*f+u*i,s.th=o.th,s}_build(t,e,n){let i=t-xE,s=t+vE,a=this._m,o=this._q,c=this._s,l=this._c,h={},u=0,f=0,d=0,g=[];for(let m=Math.floor(i/Mf)-1;m<=Math.ceil(s/Mf)+1;m++){let p=bE(m);p&&p.s>i-p.len&&p.s<s+p.len&&g.push(p)}for(let m=Math.floor((i-1300)/Ef);m<=Math.ceil((s-1300)/Ef);m++){let p=_E(m);p&&p.s>i-p.len&&p.s<s+p.len&&g.push(p)}for(let m of g){for(let p=0;p<m.n&&u<bf;p++){let x=m.t*1e3+p,b=Tn(x*1.3),E=Tn(x*2.7+5),M=Tn(x*4.1+9),y=Tn(x*6.7+3),w=E<.5?-1:1,_=m.streets[Math.floor(Tn(x*11.3)*m.streets.length)]+w*(9+(m.big?12:30)*M*M);this._valley(m.s+(b-.5)*m.len,e,_,0,h,m.lat);let A=this._h("h"+x,h.x,h.z,n),I=this._h("b"+x,h.x+7,h.z+7,n);if(Math.abs(I-A)>4)continue;let H=7+5*y,N=6+3*Tn(x*8.3),L=(y>.88?8.5:E*7%1>.6?6:3.4)+Tn(x*9.9);m.big&&Tn(x*12.7)<.14&&(H=14+8*y,N=10+4*M,L=11+9*Tn(x*13.1)),o.setFromAxisAngle(this._up,h.th+Math.PI/2+(w>0?0:Math.PI)+(Tn(x*3.3)-.5)*.35),a.compose(this._v.set(h.x,Math.min(A,I)-.8,h.z),o,c.set(H,L,N)),this.houses.setMatrixAt(u,a);let P=Tn(x*5.9);l.setRGB(...P<.35?[.82,.8,.74]:P<.6?[.86,.75,.55]:P<.8?[.72,.68,.62]:[.62,.66,.68]),this.houses.setColorAt(u,l),u++}if(d<_f){this._valley(m.s,e,m.big?42:0,0,h,m.lat);let p=this.hazes[d++];p.position.set(h.x,this._h("z"+m.t,h.x,h.z,n)+(m.big?40:25),h.z),p.scale.set(m.len*2.2,m.len*(m.big?.8:1.1),1),p.userData.on=!0}}for(let m=d;m<_f;m++)this.hazes[m].userData.on=!1;for(let m of g)if(m.big)for(let p=0;p<m.streets.length;p++)for(let x=-m.len/2;x<=m.len/2&&f<yf;x+=ro){let b=Math.round(x/ro);this._valley(m.s+x,e,m.streets[p]+(b%2?6:-6),0,h,m.lat);let E=this._h("L"+m.t+"_"+p+"_"+b,h.x,h.z,n);this.lightPos.set([h.x,E+6.5,h.z],f*3),f++}for(let m=Math.floor(i/ro);m*ro<s&&f<yf;m++){let p=m*ro,x=!1;for(let M of g)if(!M.big&&Math.abs(p-M.s)<M.len/2+15){x=!0;break}if(!x&&Tn(m*1.7+.3)>.22)continue;let b=x?m%2?6:-6:5;this._valley(p,e,b,0,h);let E=this._h("l"+m,h.x,h.z,n);this.lightPos.set([h.x,E+6.5,h.z],f*3),f++}this.houses.count=u,this.houses.instanceMatrix.needsUpdate=!0,this.houses.instanceColor&&(this.houses.instanceColor.needsUpdate=!0);let v=this.lights.geometry;v.setDrawRange(0,f),v.attributes.position.needsUpdate=!0,this.heights.size>6e3&&this.heights.clear()}update(t,e,n,i,s,a){if(!this.group.visible)return;let o=Math.floor(t/400);this.built!==o&&(this._build(t,e,n),this.built=o),this.uLit.value=i;let c=this.lightMat.uniforms;c.uAmt.value=i,c.uScale.value=s,c.uFogD.value=a,this.lights.visible=i>.02;for(let l of this.hazes)l.visible=l.userData.on&&i>.02,l.material.opacity=.13*i}};var ia=180,wE=1150,TE=260,Sn=.2,jn=.055,al=30,ao={cycle:46,mainG:22,y:3,allRed:1.5,crossG:15.5,stopA:11.45},SE=[[.15,1,.6],[1,.72,.05],[1,.08,.04]],AE=[[.03,.06,.05],[.07,.06,.02],[.07,.02,.02]],w0='"Hiragino Sans","Hiragino Kaku Gothic ProN","Noto Sans JP","Noto Sans CJK JP","Yu Gothic","Meiryo",sans-serif',RE=[["コンビニ","#1d8f4e","#ffffff"],["ベーカリー","#f3e2c4","#7a4a1f"],["カフェ","#3b2a22","#f2d7a0"],["ドラッグ","#1554a8","#ffe14a"],["ラーメン","#c8231c","#ffffff"],["そば・うどん","#f4efe2","#202020"],["クリーニング","#2a7fc0","#ffffff"],["花屋","#f6c8d4","#6a2440"],["書店","#24456e","#ffffff"],["居酒屋","#2b2b2b","#ff9b3d"],["寿司","#f6f2e8","#b3151a"],["美容室","#ffffff","#333333"],["不動産","#ffd23a","#1b3a7a"],["メガネ","#e6e9ee","#1d4f91"],["焼肉","#151515","#ff4b2b"],["ドーナツ","#ff86b4","#ffffff"]],CE=[["ラーメン","#c8231c","#ffffff"],["カラオケ","#6b2bd9","#ffffff"],["居酒屋","#1b1b1b","#ffb03a"],["薬","#1554a8","#ffffff"],["歯科","#ffffff","#1b6fb8"],["焼肉","#2a0d0a","#ff5a2a"],["ホテル","#0f2d55","#9fe0ff"],["喫茶","#4a2e1f","#ffe3b0"],["不動産","#ffd23a","#112233"],["寿司","#ffffff","#b3151a"],["麻雀","#0d5a2f","#ffffff"],["整骨院","#ffffff","#c21f3a"],["美容室","#f0e6ff","#5a2a8a"],["中華","#d42a1f","#ffd84a"],["クリニック","#e8f6ff","#0d6aa8"],["学習塾","#ff7a00","#ffffff"]],E0=[[.76,.69,.59],[.86,.86,.84],[.67,.68,.69],[.47,.35,.28],[.87,.81,.69],[.63,.69,.73],[.38,.39,.41],[.64,.45,.36]];function cl(r){let t=r>>>0||1;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function oo(r,t,e,n=!0){let i=document.createElement("canvas");i.width=r,i.height=t,e(i.getContext("2d"),r,t);let s=new wn(i);return n&&(s.colorSpace=ue),s.anisotropy=4,s}function PE(){return oo(512,768,(r,t)=>{RE.forEach(([e,n,i],s)=>{let a=s*48;r.fillStyle=n,r.fillRect(0,a,t,48),r.fillStyle="rgba(0,0,0,0.25)",r.fillRect(0,a,t,3),r.fillRect(0,a+45,t,3),r.font=`bold 32px ${w0}`;let o=r.measureText(e).width;r.save(),r.translate(t/2,a+25),o>t*.6&&r.scale(t*.6/o,1),r.fillStyle=i,r.textAlign="center",r.textBaseline="middle",r.fillText(e,0,0),r.restore()})})}function LE(){return oo(1024,512,r=>{CE.forEach(([t,e,n],i)=>{let s=i*64,a=[...t];r.fillStyle=e,r.fillRect(s,0,64,512),r.strokeStyle=n,r.globalAlpha=.5,r.lineWidth=3,r.strokeRect(s+5,5,54,502),r.globalAlpha=1;let o=Math.min(46,440/a.length);r.font=`bold ${o}px ${w0}`,r.fillStyle=n,r.textAlign="center",r.textBaseline="middle";let c=256-(a.length-1)*o*.55;a.forEach((l,h)=>r.fillText(l,s+32,c+h*o*1.1))})})}function IE(){let r=oo(256,256,t=>{let e=cl(7);for(let i=0;i<4;i++)for(let s=0;s<4;s++){let a=160+Math.floor(e()*22);t.fillStyle=`rgb(${a},${a-2},${a-8})`,t.fillRect(s*64,i*64,64,64)}let n=t.getImageData(0,0,256,256);for(let i=0;i<n.data.length;i+=4){let s=(e()-.5)*18;n.data[i]+=s,n.data[i+1]+=s,n.data[i+2]+=s}t.putImageData(n,0,0),t.fillStyle="rgba(60,58,54,0.55)";for(let i=0;i<4;i++)t.fillRect(i*64,0,2,256),t.fillRect(0,i*64,256,2)});return r.wrapS=r.wrapT=Fn,r}function DE(){let r=oo(256,256,t=>{let e=cl(11);t.fillStyle="#8a8274",t.fillRect(0,0,256,256);for(let n=0;n<2600;n++){let i=95+Math.floor(e()*90);t.fillStyle=`rgb(${i},${i-6},${i-16})`,t.fillRect(e()*256,e()*256,1+e()*3,1+e()*3)}for(let n=0;n<40;n++)t.fillStyle=`rgba(70,85,40,${.25+e()*.3})`,t.beginPath(),t.arc(e()*256,e()*256,4+e()*14,0,7),t.fill()});return r.wrapS=r.wrapT=Fn,r}function FE(){return oo(128,256,r=>{r.fillStyle="#f4f4f2",r.fillRect(0,0,128,256),r.fillStyle="#c62026",r.fillRect(0,0,128,18);let t=["#d33","#25a","#e90","#2a5","#fff","#713","#39c","#cb2"],e=cl(3);for(let n=0;n<3;n++){r.fillStyle="#dfe9f0",r.fillRect(8,24+n*38,112,34);for(let i=0;i<6;i++)r.fillStyle=t[Math.floor(e()*t.length)],r.fillRect(12+i*18,28+n*38,12,22);r.fillStyle="#2b2";for(let i=0;i<6;i++)r.fillRect(14+i*18,52+n*38,8,3)}r.fillStyle="#333",r.fillRect(84,140,30,40),r.fillStyle="#111",r.fillRect(14,200,100,30)})}function HE(){let r=new he(1,1,1).translate(0,.5,0).toNonIndexed();return r.deleteAttribute("uv"),r.setAttribute("aRoof",new Mt(new Float32Array(r.attributes.position.count),1)),r}function NE(){let r=[new Ve(.12,.17,11,8).translate(0,5.5,0),new he(.12,.12,2).translate(0,9.6,0),new he(.1,.1,1.5).translate(0,10.4,0),new Ve(.3,.3,.9,10).translate(0,7.6,-.42)].map(i=>{let s=i.index?i.toNonIndexed():i;return s.deleteAttribute("uv"),s}),t=[],e=[];for(let i of r)t.push(...i.attributes.position.array),e.push(...i.attributes.normal.array);let n=new Rt;return n.setAttribute("position",new wt(t,3)),n.setAttribute("normal",new wt(e,3)),n}var UE=`#include <common>
attribute float aRoof; attribute vec4 aInfo;
varying vec3 vWall, vNL, vSize; varying float vRoof; varying vec4 vInfo;`,kE=`#include <begin_vertex>
vSize = vec3(length(instanceMatrix[0].xyz), length(instanceMatrix[1].xyz), length(instanceMatrix[2].xyz));
vWall = position * vSize; vNL = normal; vRoof = aRoof; vInfo = aInfo;`,OE=`#include <common>
uniform float uLit; uniform sampler2D uSignTex;
varying vec3 vWall, vNL, vSize; varying float vRoof; varying vec4 vInfo;
float hh(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }`,zE=`#include <color_fragment>
vec3 cEmis = vec3(0.0); float cGlass = 0.0;
{
  float type = vInfo.x, seed = vInfo.y, row = vInfo.w;
  float shop = mod(vInfo.z, 2.0) > 0.5 ? 1.0 : 0.0, plinth = floor(vInfo.z * 0.5 + 0.01) / 50.0;   // z = có cửa hàng + 2·(chân móng ×50)
  vec3 wallC = diffuseColor.rgb;
  float roofK = max(vRoof, step(0.5, vNL.y));
  float wall = (1.0 - roofK) * step(abs(vNL.y), 0.5);
  bool front = vNL.z > 0.5;
  bool alongX = abs(vNL.z) > 0.5;
  float u = alongX ? vWall.x : vWall.z;
  float halfW = (alongX ? vSize.x : vSize.z) * 0.5;
  float y = vWall.y - plinth, Ht = vSize.y - plinth;
  vec3 roofC = vRoof > 0.5 ? (seed < 0.4 ? vec3(0.07, 0.08, 0.1) : seed < 0.7 ? vec3(0.18, 0.07, 0.05) : vec3(0.13, 0.14, 0.15)) : vec3(0.17) * (0.85 + 0.3 * seed);
  diffuseColor.rgb = mix(diffuseColor.rgb, roofC, roofK);
  float gf = shop > 0.5 ? 3.6 : 0.0;
  if (y < 0.0 && wall > 0.5) {
    // chân móng bê tông (đất dốc)
    diffuseColor.rgb = vec3(0.4, 0.39, 0.37) * (0.85 + 0.3 * hh(floor(vWall.xz * 0.5 + vWall.y)));
  } else if (front && shop > 0.5 && y < gf && wall > 0.5) {
    // tầng trệt cửa hàng: biển chữ + mặt kính (khung kính 1.7 m)
    if (y > 2.78 && y < 3.42 && abs(u) < halfW - 0.2) {
      vec2 suv = vec2((u + halfW - 0.2) / (2.0 * halfW - 0.4), (y - 2.78) / 0.64);
      vec3 sc = texture2D(uSignTex, vec2(suv.x, 1.0 - (row + 1.0 - suv.y) / 16.0)).rgb;
      diffuseColor.rgb = sc;
      cEmis = sc * (0.12 + 1.4 * uLit);
    } else if (y > 0.1 && y < 2.62 && abs(u) < halfW - 0.35) {
      float fx = fract(u / 1.7 + 0.5);
      float g = step(0.035, fx) * step(fx, 0.965) * step(y, 2.52) * step(0.16, y);
      diffuseColor.rgb = mix(wallC * 0.3, vec3(0.04, 0.05, 0.055), g);
      cGlass = g;
      vec3 inside = mix(vec3(1.0, 0.85, 0.62), vec3(0.9, 0.96, 1.0), step(0.5, fract(seed * 7.0)));
      cEmis = inside * g * (0.15 + 2.4 * uLit) * (1.0 - 0.35 * smoothstep(1.4, 2.5, y));
    } else diffuseColor.rgb = wallC * 0.5;
  } else if (wall > 0.5) {
    float yy = y - gf;
    vec2 cell; float win = 0.0;
    if (type < 0.5) {                       // nhà phố hỗn hợp: cửa sổ rời; tường hông không có cửa
      cell = vec2(u / 2.4 + 0.5, yy / 3.0);
      vec2 f = fract(cell);
      win = step(0.22, f.x) * step(f.x, 0.78) * step(0.3, f.y) * step(f.y, 0.82);
      if (!front && abs(vNL.x) > 0.5) win = 0.0;
    } else if (type < 1.5) {                // chung cư: mặt trước có ban công từng tầng
      cell = vec2(u / 3.6 + 0.5, yy / 3.0);
      vec2 f = fract(cell);
      if (front) {
        float bal = step(f.y, 0.36) * step(0.0, yy) * step(y, Ht - 0.7);
        diffuseColor.rgb = mix(diffuseColor.rgb, wallC * 1.12 + 0.03, bal);
        win = (1.0 - bal) * step(0.06, f.x) * step(f.x, 0.94) * step(f.y, 0.92);
      } else win = step(0.35, f.x) * step(f.x, 0.65) * step(0.35, f.y) * step(f.y, 0.8);
    } else if (type < 2.5) {                // văn phòng: dải kính
      cell = vec2(u / 1.6 + 0.5, yy / 3.6);
      vec2 f = fract(cell);
      win = step(0.04, f.x) * step(f.x, 0.96) * step(0.3, f.y) * step(f.y, 0.97);
    } else {                                // nhà ở
      cell = vec2(u / 3.0 + 0.5, yy / 2.9);
      vec2 f = fract(cell);
      win = step(0.3, f.x) * step(f.x, 0.7) * step(0.3, f.y) * step(f.y, 0.72);
    }
    float inside = step(0.0, yy) * step(y, Ht - 0.7) * step(abs(u), halfW - 0.5);
    win *= inside;
    vec2 id = floor(cell);
    float lit = step(hh(id + vec2(seed * 91.0, dot(vNL, vec3(3.0, 5.0, 7.0)))), 0.42);
    // ở xa (ô cửa nhỏ hơn ~2 điểm ảnh): dùng giá trị trung bình, khỏi lấp lánh
    float far = smoothstep(0.25, 0.6, max(fwidth(cell.x), fwidth(cell.y)));
    win = mix(win, 0.3 * inside, far);
    lit = mix(lit, 0.42, far);
    vec3 glassC = (type > 1.5 && type < 2.5) ? vec3(0.06, 0.09, 0.12) : vec3(0.045, 0.05, 0.055);
    diffuseColor.rgb = mix(diffuseColor.rgb, glassC, win);
    cGlass = win * (1.0 - far);
    vec3 warm = mix(vec3(1.0, 0.66, 0.36), vec3(0.85, 0.92, 1.0), step(0.7, hh(id + 3.1)));
    cEmis += warm * 3.2 * uLit * win * lit;
  }
}`,ol=class{constructor(t,e,n){this.scene=t,this.road=e,this.roadMat=n,this.group=new Pt,this.group.visible=!1,t.add(this.group),this.blocks=new Map,this.uLit={value:0},this.uSignTex={value:PE()},this.facade=new Yt({roughness:.82,metalness:0}),this.facade.onBeforeCompile=s=>{s.uniforms.uLit=this.uLit,s.uniforms.uSignTex=this.uSignTex,s.vertexShader=s.vertexShader.replace("#include <common>",UE).replace("#include <begin_vertex>",kE),s.fragmentShader=s.fragmentShader.replace("#include <common>",OE).replace("#include <color_fragment>",zE).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
roughnessFactor = mix(roughnessFactor, 0.06, cGlass);`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += cEmis;`)},this.facade.customProgramCacheKey=()=>"city-facade",this.walkMat=new Yt({map:IE(),roughness:.92}),this.lotMat=new Yt({map:DE(),roughness:1}),this.markMat=new Yt({vertexColors:!0,roughness:.6,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}),this.poleMat=new Yt({color:9342343,roughness:.85}),this.wireMat=new ns({color:1776413}),this.uGlow={value:0},this.signMat=new Yt({map:LE(),roughness:.55}),this.signMat.onBeforeCompile=s=>{s.uniforms.uGlow=this.uGlow,s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
attribute float aCell;`).replace("#include <uv_vertex>",`#include <uv_vertex>
vMapUv.x = (vMapUv.x + aCell) / 16.0;`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
uniform float uGlow;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += diffuseColor.rgb * uGlow;`)},this.signMat.customProgramCacheKey=()=>"city-vsign";let i=FE();this.vendBody=new Yt({color:15329766,roughness:.45,metalness:.15}),this.vendFront=new Yt({map:i,emissiveMap:i,emissive:16777215,emissiveIntensity:.3,roughness:.25});for(let s of[this.facade,this.lotMat,this.walkMat,this.markMat,this.poleMat,this.wireMat,this.signMat,this.vendBody,this.vendFront])me(s);this.boxGeo=HE(),this.houseGeo=wf(),this.poleGeo=NE(),this.signGeo=new he(1,1,1).translate(0,.5,0),this.vendGeo=new he(1,1.83,.75).translate(0,.915,0),this._p={},this._q={},this._m=new bt,this._qt=new Wt,this._v=new T,this._s=new T,this._up=new T(0,1,0),this._c=new et,this.lastS=0,this.camF=1,this.clock=0,this.sigMat=new Yt({color:2829616,roughness:.6,metalness:.3}),this.lensMat=new qe({color:16777215,toneMapped:!1}),me(this.sigMat),me(this.lensMat),this.headGeo=new he(1.3,.44,.3),this.lensGeo=new Ve(.15,.15,.04,14).rotateX(Math.PI/2),this.sigPoleGeo=new Ve(.1,.12,1,8).translate(0,.5,0),this.armGeo=new he(1,.1,.1).translate(.5,0,0)}_phase(t){let e=ao,n=(Math.sin(t*91.7+13.1)*43758.5453%1+1)%1*e.cycle,i=((this.clock+n)%e.cycle+e.cycle)%e.cycle,s=i<e.mainG?0:i<e.mainG+e.y?1:2,a=e.mainG+e.y+e.allRed,o=i>=a&&i<a+e.crossG?0:i>=a+e.crossG&&i<a+e.crossG+e.y?1:2;return{main:s,cross:o,t:i}}mainLight(t){return this._phase(t).main}stopAhead(t,e,n){if(!this.group.visible)return 1/0;let i=this.road,s=ao.stopA,a=e>0?i.junctionIndex(t+s-1):i.junctionIndex(t-s+1)-1,o=i.junction(a)-e*s,c=(o-t)*e;if(c>160||c<-1)return 1/0;let l=this._phase(a).main;return l===2||l===1&&c>n*n/8?c:1/0}collide(t,e,n){if(!this.group.visible){this.camF=1;return}let i=t.x,s=t.y+1.3,a=t.z,o=e.x-i,c=e.y-s,l=e.z-a,h=Math.hypot(o,c,l);if(h<.5)return;let u=this._near||(this._near=[]);u.length=0;let f=h+25;for(let v of this.blocks.values()){let m=v.userData.obb;for(let p=0;p<m.length;p+=7)Math.abs(m[p]-i)<f&&Math.abs(m[p+1]-a)<f&&u.push(p,m)}let d=1,g=.6;for(let v=.8;v<=h+g&&d===1;v+=.35){let m=i+o*v/h,p=s+c*v/h,x=a+l*v/h;for(let b=0;b<u.length;b+=2){let E=u[b],M=u[b+1];if(p>M[E+6]+g)continue;let y=m-M[E],w=x-M[E+1],C=y*M[E+2]-w*M[E+3],_=y*M[E+3]+w*M[E+2];if(Math.abs(C)<M[E+4]+g&&Math.abs(_)<M[E+5]+g){d=Math.max(.05,(v-g)/h);break}}}this.camF=d<this.camF?d:this.camF+(d-this.camF)*(1-Math.exp(-n*2.5)),this.camF<.999&&e.set(i+o*this.camF,s+c*this.camF,a+l*this.camF)}set visible(t){this.group.visible=t,t||this.reset()}get visible(){return this.group.visible}reset(){for(let t of this.blocks.values())this._dispose(t);this.blocks.clear()}update(t,e,n=0,i=1){if(!this.group.visible)return;this.clock+=n;let s=this._c;for(let[h,u]of this.blocks){let f=u.userData.lens;if(!f)continue;let d=this._phase(h),g=3+4*e;for(let v=0;v<f.kind.length;v++){let m=(f.kind[v]?d.cross:d.main)===f.col[v],p=m?SE[f.col[v]]:AE[f.col[v]];f.mesh.setColorAt(v,s.setRGB(p[0]*(m?g:1),p[1]*(m?g:1),p[2]*(m?g:1)))}f.mesh.instanceColor.needsUpdate=!0}this.lastS=t,this.uLit.value=e,this.uGlow.value=.15+1.6*e,this.vendFront.emissiveIntensity=.25+1.1*e;let a=this.road,o=a.junctionIndex(t-TE)-1,c=a.junctionIndex(t+wE),l=[];for(let h=o;h<=c;h++)this.blocks.has(h)||l.push(h);l.sort((h,u)=>Math.abs(a.junction(h)-t)-Math.abs(a.junction(u)-t));for(let h=0;h<i&&h<l.length;h++)this.blocks.set(l[h],this._build(l[h]));for(let[h,u]of this.blocks)(h<o||h>c)&&(this._dispose(u),this.blocks.delete(h))}prime(t){this.group.visible&&this.update(t,this.uLit.value,0,99)}_dispose(t){this.group.remove(t),t.traverse(e=>{e.isInstancedMesh&&e.dispose(),e.geometry&&e.geometry.userData.own&&e.geometry.dispose()})}groundJ(t,e){let n=t.x+t.rx*e,i=t.z+t.rz*e,s=Math.abs(e),a=Math.min(1,Math.max(0,(s-Je.hw-1.2)/14.8));return t.y+(bi(n,i)-t.y)*a*a*(3-2*a)-.02}_frame(t){let e=this.road.at(t,{});return{x:e.x,y:e.y,z:e.z,rx:Math.cos(e.th),rz:-Math.sin(e.th),fx:-Math.sin(e.th),fz:-Math.cos(e.th),th:e.th}}_build(t){let e=this.road,n=new Pt,i=e.junction(t),s=e.junction(t+1),a=Je.hw,o=Je.walk,c=Je.side,l=Je.sideWalk,h=a+o+.4,u={pos:[],nor:[],col:[],idx:[]},f={pos:[],nor:[],uv:[],idx:[]},d={pos:[],nor:[],uv:[],idx:[]},g={pos:[],nor:[],uv:[],idx:[]},v=[],m=[.86,.86,.83],p=[.86,.66,.16],x=[.85,.7,.12],b=(R,S,U,V)=>{let j=Math.abs(V),W=Math.min(1,Math.max(0,(j-a-1.2)/14.8));return U+(bi(R,S)-U)*W*W*(3-2*W)-.02},E=(R,S,U,V,j)=>{let W=R.pos.length/3;for(let _t=0;_t<4;_t++)R.pos.push(S[_t][0],S[_t][1],S[_t][2]),R.nor.push(U[0],U[1],U[2]),R.col&&R.col.push(...V),R.uv&&R.uv.push(...j?j[_t]:[0,0]);let ot=S[1][0]-S[0][0],st=S[1][1]-S[0][1],ct=S[1][2]-S[0][2],ut=S[2][0]-S[0][0],gt=S[2][1]-S[0][1],J=S[2][2]-S[0][2],Et=st*J-ct*gt,At=ct*ut-ot*J,Ct=ot*gt-st*ut;Et*U[0]+At*U[1]+Ct*U[2]>=0?R.idx.push(W,W+1,W+2,W,W+2,W+3):R.idx.push(W,W+2,W+1,W,W+3,W+2)},M=[0,1,0],y=(R,S,U)=>{let V=e.at(R,this._p);return[V.x+Math.cos(V.th)*S,V.y+U,V.z-Math.sin(V.th)*S]},w=(R,S,U,V,j,W,ot,st)=>{if(U<=S)return;let ct=Math.max(1,Math.ceil((U-S)/2));for(let ut=0;ut<ct;ut++){let gt=S+(U-S)*ut/ct,J=S+(U-S)*(ut+1)/ct;E(R,[y(gt,V,W),y(J,V,W),y(J,j,W),y(gt,j,W)],M,ot,st&&[st(gt,V),st(J,V),st(J,j),st(gt,j)])}},C=(R,S,U,V,j,W,ot)=>{let st=Math.max(1,Math.ceil((U-S)/2));for(let ct=0;ct<st;ct++){let ut=S+(U-S)*ct/st,gt=S+(U-S)*(ct+1)/st,J=e.at((ut+gt)/2,this._q),Et=[-Math.cos(J.th)*ot,0,Math.sin(J.th)*ot];E(R,[y(ut,V,j),y(gt,V,j),y(gt,V,W),y(ut,V,W)],Et,null,[[0,ut/2],[0,gt/2],[.1,gt/2],[.1,ut/2]])}},_=this._frame(i),A=(R,S)=>_.x+_.fx*R+_.rx*S,I=(R,S)=>_.z+_.fz*R+_.rz*S,H=R=>b(A(0,R),I(0,R),_.y,R),N=(R,S,U)=>[A(R,S),H(S)+U,I(R,S)],L=(R,S,U,V,j,W,ot,st)=>{let ct=Math.min(V,j),ut=Math.max(V,j),gt=[ct];for(let J=Math.ceil((ct-a)/4);a+J*4<ut;J++){let Et=a+J*4;Et>ct&&gt.push(Et)}for(let J=Math.ceil((ct+a)/4);-a+J*4<ut;J++){let Et=-a+J*4;Et>ct&&Et<0&&gt.push(Et)}gt.push(ut),gt.sort((J,Et)=>J-Et);for(let J=0;J+1<gt.length;J++){let Et=gt[J],At=gt[J+1];At-Et<.001||E(R,[N(S,Et,W),N(U,Et,W),N(U,At,W),N(S,At,W)],M,ot,st&&[st(S,Et),st(U,Et),st(U,At),st(S,At)])}};for(let R of[-1,1]){let S=R*a,U=R*ia;L(d,-c,c,S,U,.05,null,(V,j)=>[(V+c)/(2*c),j/12]);for(let V of[-1,1]){L(f,V*c,V*(c+l),R*h,U,Sn,null,(j,W)=>[j/2,W/2]);for(let j=h;j<ia;j+=4){let W=Math.min(ia,j+4);E(f,[N(V*c,R*j,.03),N(V*c,R*W,.03),N(V*c,R*W,Sn),N(V*c,R*j,Sn)],[-V*_.fx,0,-V*_.fz],null,[[0,j/2],[0,W/2],[.1,W/2],[.1,j/2]])}}for(let V=-c+.35;V<c-.3;V+=.9)L(u,V,V+.45,R*(a+.7),R*(a+3.4),jn,m);L(u,R*.15,R*(c-.2),R*(a+4),R*(a+4.45),jn,m);for(let V=h+3;V<ia-3;V+=6)L(u,-.07,.07,R*V,R*(V+3),jn,m)}for(let R of[-1,1])for(let S=-a+.35;S<a-.4;S+=.9)L(u,R*6.4,R*10.4,S,S+.45,jn,m);L(u,-11.9,-11.45,.2,a-.3,jn,m),L(u,11.45,11.9,-a+.3,-.2,jn,m);let P=i+10.4,D=s-10.4;for(let R of[-1,1]){w(u,P,D,R*.1,R*.25,jn,p),w(u,i+6,s-6,R*(a-.4),R*(a-.25),jn,m);let S=i+12,U=s-12;w(u,S,Math.min(U,S+30),R*3.42,R*3.58,jn,m),w(u,Math.max(S,U-30),U,R*3.42,R*3.58,jn,m);for(let V=Math.ceil((S+30)/10);V*10+5<U-30;V++)w(u,V*10,V*10+5,R*3.42,R*3.58,jn,m)}for(let R of Je.lanes){let S=s-11.9-8;w(u,S-3.2,S,R-.08,R+.08,jn,m);for(let U=0;U<4;U++){let V=.45-U*.11;w(u,S+U*.25,S+(U+1)*.25,R-V,R+V,jn,m)}}let k=i+c,O=s-c;for(let R of[-1,1]){let S=R*a,U=R*h;w(f,k,O,S,U,Sn,null,(V,j)=>[j/2,V/2]),C(f,k,O,S,.03,Sn,R);for(let[V,j]of[[k,1],[O,-1]]){let W=e.at(V,this._q);E(f,[y(V,S,.03),y(V,U,.03),y(V,U,Sn),y(V,S,Sn)],[Math.sin(W.th)*j,0,Math.cos(W.th)*j],null,[[0,0],[2,0],[2,.1],[0,.1]])}w(u,k+.5,O-.5,R*(a+2.3),R*(a+2.6),Sn+.006,x)}let G=[],X=[],K=[],it=[],z=cl(t*7919+17),Q=(R,S)=>{let U=z();return R===3?2:R===2?5+Math.floor(U*(S?14:8)):R===1?4+Math.floor(U*(S?9:6)):2+Math.floor(U*U*5)},lt=(R,S)=>{let U=e.curvature(R);return U*S<0&&Math.abs(S)>.55/Math.max(Math.abs(U),1e-6)},ht=(R,S,U,V,j,W,ot,st,ct)=>{let ut=Math.cos(U),gt=Math.sin(U),J=ct;for(let[te,se]of[[-V/2,-j/2],[V/2,-j/2],[-V/2,j/2],[V/2,j/2]])J=Math.min(J,bi(R+ut*te+gt*se,S-gt*te+ut*se));let Et=J-.4,At=Math.round((ct-Et)*50)/50,Ct=Q(W,st),_t=z(),dt=(ot?3.6:0)+Ct*(W===2?3.6:W===3?2.9:3)+(W===3?0:.6),kt=E0[W===2?z()<.5?2:5:Math.floor(z()*E0.length)];return G.push([R,S,U,V,dt,j,W,_t,ot?1:0,Math.floor(z()*16),kt,W===3,Et,At]),X.push(R,S,ut,gt,V/2,j/2,ct+dt*(W===3?1.45:1)),dt},yt=R=>{let S=z();return R?S<.58?0:S<.83?1:S<.96?2:3:S<.3?3:S<.6?1:S<.8?0:2},Nt=i+c+l+18,qt=s-c-l-18;for(let R of[-1,1]){let S=i+c+l+.4,U=s-c-l-.4,V=S;for(;S<U-4;){let W=z(),ot=S>Nt&&S<qt-20&&S-V>25;if(ot&&W<.13){S=this._alley(S,2.6+1.3*z(),R,f,v,b,h),V=S;continue}if(ot&&W<.21){S=this._lot(S,10+8*z(),R,g,v,b,h),V=S;continue}let st=Math.min(U-S,5+9*z()*z()+2*z()),ct=10+8*z(),ut=e.at(S+st/2,this._p),gt=R*(h+ct/2),J=ut.x+Math.cos(ut.th)*gt,Et=ut.z-Math.sin(ut.th)*gt,At=ut.th+(R>0?-Math.PI/2:Math.PI/2),Ct=yt(!0),_t=Ct!==3&&z()<.8,dt=ut.y+Sn,kt=ht(J,Et,At,st,ct,Ct,_t,!1,dt);if(Ct===0&&kt>9&&z()<.6){let te=(z()<.5?-1:1)*(st/2-.45),se=ct/2+.42,Kt=Math.min(kt-5,3+4*z()),ft=Math.cos(At),B=Math.sin(At);K.push([J+ft*te+B*se,Et-B*te+ft*se,At,dt+4.3,Kt,Math.floor(z()*16)])}if(_t&&z()<.22){let te=S+.8+z()*Math.max(.1,st-1.6),se=e.at(te,this._q),Kt=R*(a+o-.05);it.push([se.x+Math.cos(se.th)*Kt,se.y+Sn,se.z-Math.sin(se.th)*Kt,At])}S+=st+(z()<.3?.4+z()*1.2:.05)}let j=h+18.6;for(let[W,ot]of[[i+c+l+.3,1],[s-c-l-.3,-1]]){let st=this._frame(W),ct=j;for(;ct<ia-8;){let ut=7+7*z(),gt=10+6*z(),J=ot*gt/2,Et=R*(ct+ut/2);if(!lt(W,Et)){let At=st.x+st.fx*J+st.rx*Et,Ct=st.z+st.fz*J+st.rz*Et,_t=st.x+st.rx*Et,dt=st.z+st.rz*Et,kt=yt(!1);ht(At,Ct,st.th+(ot>0?0:Math.PI),ut,gt,kt,kt!==3&&ct<70&&z()<.5,ct>90,b(_t,dt,st.y,Et)+Sn)}ct+=ut+.3+z()*1.5}}for(let W=Nt;W<qt-9;W+=15){let ot=this._frame(W+7.5);for(let st=j;st<ia-10;st+=17){let ct=z()<.15,ut=8+5*z(),gt=9+5*z(),J=R*(st+8.5),Et=(z()-.5)*2;if(ct||lt(W+7.5,J))continue;let At=ot.x+ot.fx*Et+ot.rx*J,Ct=ot.z+ot.fz*Et+ot.rz*J,_t=st>90,dt=_t&&z()<.12?2:yt(!1);ht(At,Ct,ot.th+(z()<.5?0:Math.PI)+(z()<.5?Math.PI/2:0),ut,gt,dt,!1,_t,bi(At,Ct))}}}n.userData.obb=X;let It=(R,S,U,V)=>{if(!R.idx.length)return null;let j=new Rt;j.setAttribute("position",new wt(R.pos,3)),j.setAttribute("normal",new wt(R.nor,3)),U&&j.setAttribute("uv",new wt(R.uv,2)),V&&j.setAttribute("color",new wt(R.col,3)),j.setIndex(R.idx),j.userData.own=!0;let W=new Ft(j,S);return W.receiveShadow=!0,n.add(W),W},ne=It(d,this.roadMat,!0,!1);ne&&(ne.geometry.setAttribute("aDirt",new Mt(new Float32Array(d.pos.length/3),1)),ne.layers.set(3)),It(f,this.walkMat,!0,!1),It(g,this.lotMat,!0,!1),It(u,this.markMat,!1,!0);let Y=this._m,Oe=this._qt,Ut=this._v,jt=this._s,Lt=this._c;for(let R of[!1,!0]){let S=G.filter(ot=>ot[11]===R);if(!S.length)continue;let U=R?this.houseGeo:this.boxGeo,V=new Rt;for(let ot of["position","normal","aRoof"])V.setAttribute(ot,U.attributes[ot].clone());let j=new Float32Array(S.length*4),W=new we(V,this.facade,S.length);W.instanceColor=new un(new Float32Array(S.length*3),3),S.forEach(([ot,st,ct,ut,gt,J,Et,At,Ct,_t,dt,,kt,te],se)=>{Oe.setFromAxisAngle(this._up,ct),Y.compose(Ut.set(ot,kt,st),Oe,jt.set(ut,gt+te,J)),W.setMatrixAt(se,Y),W.setColorAt(se,Lt.setRGB(dt[0],dt[1],dt[2],ue)),j.set([Et,At,Ct+2*Math.round(te*50),_t],se*4)}),V.setAttribute("aInfo",new un(j,4)),V.userData.own=!0,W.castShadow=W.receiveShadow=!0,W.frustumCulled=!1,n.add(W)}if(K.length){let R=new Rt;for(let V of["position","normal","uv"])R.setAttribute(V,this.signGeo.attributes[V].clone());R.setIndex(this.signGeo.index.clone()),R.userData.own=!0;let S=new Float32Array(K.length),U=new we(R,this.signMat,K.length);K.forEach(([V,j,W,ot,st,ct],ut)=>{Oe.setFromAxisAngle(this._up,W),Y.compose(Ut.set(V,ot,j),Oe,jt.set(.14,st,.8)),U.setMatrixAt(ut,Y),S[ut]=ct}),R.setAttribute("aCell",new un(S,1)),U.castShadow=!0,U.frustumCulled=!1,n.add(U)}if(it.length){let R=new we(this.vendGeo,[this.vendBody,this.vendBody,this.vendBody,this.vendBody,this.vendFront,this.vendBody],it.length);it.forEach(([S,U,V,j],W)=>{Oe.setFromAxisAngle(this._up,j),Y.compose(Ut.set(S,U,V),Oe,jt.set(1,1,1)),R.setMatrixAt(W,Y)}),R.castShadow=!0,R.frustumCulled=!1,n.add(R)}let Se=R=>{let S=R*al+8,U=e.nearJunction(S);return Math.abs(S-U)<9?null:S},Qt=[];for(let R=Math.ceil((i-8)/al);R*al+8<s;R++){let S=Se(R);if(S===null)continue;let U=R+1,V=Se(U);V===null&&(V=Se(++U));for(let j of[-1,1]){let W=j*(a+.45),ot=e.at(S,this._p);if(Qt.push([ot.x+Math.cos(ot.th)*W,ot.y+Sn,ot.z-Math.sin(ot.th)*W,ot.th]),V===null)continue;let st=e.at(V,this._q);for(let[ct,ut,gt]of[[-.9,9.66,.55],[0,9.66,.55],[.9,9.66,.55],[-.7,10.46,.45],[.7,10.46,.45],[.15,6.3,.8]]){let J=W+ct,Et=ot.x+Math.cos(ot.th)*J,At=ot.z-Math.sin(ot.th)*J,Ct=st.x+Math.cos(st.th)*J,_t=st.z-Math.sin(st.th)*J,dt=ot.y+Sn+ut,kt=st.y+Sn+ut,te=Math.hypot(Ct-Et,_t-At),se=gt*te/al,Kt=Et,ft=dt,B=At;for(let vt=1;vt<=8;vt++){let pt=vt/8,Vt=Et+(Ct-Et)*pt,Ot=At+(_t-At)*pt,be=dt+(kt-dt)*pt-4*se*pt*(1-pt);v.push(Kt,ft,B,Vt,be,Ot),Kt=Vt,ft=be,B=Ot}}}}if(Qt.length){let R=new we(this.poleGeo,this.poleMat,Qt.length);Qt.forEach(([S,U,V,j],W)=>{Oe.setFromAxisAngle(this._up,j+Math.PI/2),Y.compose(Ut.set(S,U,V),Oe,jt.set(1,1,1)),R.setMatrixAt(W,Y)}),R.castShadow=!0,R.frustumCulled=!1,n.add(R)}if(v.length){let R=new Rt;R.setAttribute("position",new wt(v,3)),R.userData.own=!0;let S=new Ii(R,this.wireMat);S.frustumCulled=!1,n.add(S)}return this._signals(n,_,H),this.group.add(n),n}_signals(t,e,n){let i=Je.hw,s=Je.side,a=(y,w)=>[e.x+e.fx*y+e.rx*w,e.z+e.fz*y+e.rz*w],o=[],c=[],l=[],h=(y,w)=>Math.atan2(y,w),u=n(0)+.2,f=(y,w)=>{let[C,_]=a(y,w*(i+.7)),[A,I]=a(y,w*3.6);c.push([C,u,_,5.9]),l.push([C,u+5.7,_,Math.atan2(-(I-_),A-C),Math.hypot(A-C,I-_)+.7]),o.push([A,u+5.55,I,h(w>0?-e.fx:e.fx,w>0?-e.fz:e.fz),0])};f(11,1),f(-11,-1);for(let y of[-1,1]){let w=y*(s+1),[C,_]=a(w,-y*(i+.8));c.push([C,u,_,4.4]),o.push([C,u+4.2,_,h(y*e.rx,y*e.rz),1])}let d=this._m,g=this._qt,v=this._v,m=this._s,p=(y,w,C,_)=>{let A=new we(y,w,C.length);return C.forEach((I,H)=>{_(I),A.setMatrixAt(H,d)}),A.castShadow=!0,A.frustumCulled=!1,t.add(A),A};p(this.sigPoleGeo,this.sigMat,c,([y,w,C,_])=>d.compose(v.set(y,w,C),g.identity(),m.set(1,_,1))),p(this.armGeo,this.sigMat,l,([y,w,C,_,A])=>d.compose(v.set(y,w,C),g.setFromAxisAngle(this._up,_),m.set(A,1,1))),p(this.headGeo,this.sigMat,o,([y,w,C,_])=>d.compose(v.set(y,w,C),g.setFromAxisAngle(this._up,_),m.set(1,1,1)));let x=[],b=[],E=[];for(let[y,w,C,_,A]of o){let I=Math.cos(_),H=Math.sin(_);for(let N=0;N<3;N++){let L=(N-1)*.42,P=.16;x.push([y+I*L+H*P,w,C-H*L+I*P,_]),b.push(A),E.push(N)}}let M=p(this.lensGeo,this.lensMat,x,([y,w,C,_])=>d.compose(v.set(y,w,C),g.setFromAxisAngle(this._up,_),m.set(1,1,1)));M.castShadow=!1,M.instanceColor=new un(new Float32Array(x.length*3),3),t.userData.lens={mesh:M,kind:Int8Array.from(b),col:Int8Array.from(E)}}_alley(t,e,n,i,s,a,o){let c=this._frame(t+e/2),l=o+18.2,h=(_,A,I)=>[c.x+c.fx*_+c.rx*n*A,I,c.z+c.fz*_+c.rz*n*A],u=c.y+Sn,f=a(c.x+c.rx*n*l,c.z+c.rz*n*l,c.y,l),d=Math.min(6,Math.max(1,f-u+1.2)),g=Math.round(d/.17),v=d/g,m=.3,p=-e/2+.05,x=e/2-.05,b=[-c.rx*n,0,-c.rz*n];for(let _=0;_<g;_++){let A=o+_*m,I=A+m,H=u+_*v,N=H+v;this._q4(i,[h(p,A,H),h(x,A,H),h(x,A,N),h(p,A,N)],b,[[0,0],[e/2,0],[e/2,.1],[0,.1]]),this._q4(i,[h(p,A,N),h(x,A,N),h(x,I,N),h(p,I,N)],[0,1,0],[[0,A/2],[e/2,A/2],[e/2,I/2],[0,I/2]])}let E=o+g*m,M=u+d;this._q4(i,[h(p,E,M),h(x,E,M),h(x,l,M),h(p,l,M)],[0,1,0],[[0,E/2],[e/2,E/2],[e/2,l/2],[0,l/2]]);let y=h(0,o-.2,u+.9),w=h(0,E,M+.9),C=h(0,E+1.5,M+.9);s.push(...y,...w,...w,...C);for(let[_,A]of[[y,u],[w,M]])s.push(_[0],A,_[2],..._);return t+e}_lot(t,e,n,i,s,a,o){let c=this._frame(t+e/2),l=o+18.2,h=(d,g)=>{let v=c.x+c.fx*d+c.rx*n*g,m=c.z+c.fz*d+c.rz*n*g;return[v,a(v,m,c.y,g)+.03,m]};for(let d=o-.3;d<l;d+=4){let g=Math.min(l+1,d+4);this._q4(i,[h(-e/2,d),h(e/2,d),h(e/2,g),h(-e/2,g)],[0,1,0],[[0,d/3],[e/3,d/3],[e/3,g/3],[0,g/3]])}let u=c.y+Sn,f=(d,g)=>[c.x+c.fx*d+c.rx*n*(o-.1),u+g,c.z+c.fz*d+c.rz*n*(o-.1)];for(let d=-e/2+.3;d<=e/2-.3;d+=2)s.push(...f(d,0),...f(d,1.1));for(let d of[.5,1.05])s.push(...f(-e/2+.3,d),...f(e/2-.3,d));return t+e}_q4(t,e,n,i){let s=t.pos.length/3;for(let v=0;v<4;v++)t.pos.push(...e[v]),t.nor.push(...n),t.uv.push(...i[v]);let a=e[1][0]-e[0][0],o=e[1][1]-e[0][1],c=e[1][2]-e[0][2],l=e[2][0]-e[0][0],h=e[2][1]-e[0][1],u=e[2][2]-e[0][2],f=o*u-c*h,d=c*l-a*u,g=a*h-o*l;f*n[0]+d*n[1]+g*n[2]>=0?t.idx.push(s,s+1,s+2,s,s+2,s+3):t.idx.push(s,s+2,s+1,s,s+3,s+2)}};var BE=1/3.6,ll=480,Tf=170,hl=[30,70],T0=120;function pn(r,t,e,n,i){let s=[[-t[0],t[3],t[1]],[t[0],t[3],t[1]],[t[0],t[3],t[2]],[-t[0],t[3],t[2]],[-e[0],e[3],e[1]],[e[0],e[3],e[1]],[e[0],e[3],e[2]],[-e[0],e[3],e[2]]],a=[[0,1,2,3],[4,7,6,5],[0,4,5,1],[1,5,6,2],[2,6,7,3],[3,7,4,0]];for(let o of a){let[c,l,h,u]=o.map(d=>s[d]),f=new T().subVectors(new T(...l),new T(...c)).cross(new T().subVectors(new T(...h),new T(...c))).normalize();for(let d of[c,l,h,c,h,u])r.pos.push(...d),r.nor.push(f.x,f.y,f.z),r.col.push(...n),r.tint.push(i.tint?1:0),r.glow.push(i.glow?1:0),r.gloss.push(i.gloss?1:0)}}var GE=(r,t,e,n,i,s,a,o={})=>pn(r,[n/2,e-s/2,e+s/2,t-i/2],[n/2,e-s/2,e+s/2,t+i/2],a,o);function ra(r,t,e,n,i,s,a=[.05,.05,.055]){let o=new Ve(i,i,s,12).rotateZ(Math.PI/2).translate(t,e,n).toNonIndexed(),c=o.attributes.position.array,l=o.attributes.normal.array;for(let h=0;h<c.length/3;h++){r.pos.push(c[h*3],c[h*3+1],c[h*3+2]),r.nor.push(l[h*3],l[h*3+1],l[h*3+2]);let u=Math.abs(l[h*3])>.9?.55:1;r.col.push(...u<1?[.42,.43,.45]:a),r.tint.push(0),r.glow.push(0),r.gloss.push(0)}}var VE=()=>({pos:[],nor:[],col:[],tint:[],glow:[],gloss:[]}),as=[1,1,1],fl=[.05,.07,.09],S0=[.08,.08,.09],aa=[.25,.25,.27],R0=[1,.95,.85],C0=[.9,.05,.03],os={tint:!0},co={gloss:!0},oa={glow:!0};function dn(r,t,e,n,i,s,a,o,c={}){let l=r.pos.length;GE(r,e,n,i,s,a,o,c);for(let h=l;h<r.pos.length;h+=3)r.pos[h]+=t}function dl(r,t,e,n,i,s=.3){for(let a of[-1,1])dn(r,a*(t-s/2-.05),e,n-.02,s,.13,.05,R0,oa),dn(r,a*(t-s/2-.05),e,i+.02,s,.12,.05,C0,oa)}function A0(r,{L:t=4.5,W:e=1.75,H:n=1.44,taxi:i=!1}={}){let s=e/2,a=-t/2,o=t/2;pn(r,[s,a+.1,o-.05,.32],[s,a,o,.92],as,os),pn(r,[s-.06,a+1.05,o-.55,.92],[s-.2,a+1.65,o-1.05,n-.05],fl,co),pn(r,[s-.2,a+1.66,o-1.06,n-.06],[s-.22,a+1.7,o-1.1,n],as,os),dn(r,0,.42,a+.02,e-.1,.18,.12,aa),dn(r,0,.42,o-.02,e-.1,.18,.12,aa),dl(r,s,.78,a,o);for(let[c,l]of[[-1,a+.85],[1,a+.85],[-1,o-.8],[1,o-.8]])ra(r,c*(s-.1),.32,l,.32,.24);i&&dn(r,0,n+.11,a+2,.5,.2,.22,[1,.85,.4],oa)}function WE(r){pn(r,[.74,-1.7+.05,1.7,.3],[.74,-1.7,1.7,.95],as,os),pn(r,[.74-.03,-1.7+.35,1.7-.1,.95],[.74-.1,-1.7+.75,1.7-.15,1.6],fl,co),pn(r,[.74-.1,-1.7+.76,1.7-.16,1.6],[.74-.1,-1.7+.78,1.7-.18,1.65],as,os),dn(r,0,.38,-1.7+.01,1.4,.16,.1,aa),dl(r,.74,.8,-1.7,1.7,.26);for(let[s,a]of[[-1,-1.7+.55],[1,-1.7+.55],[-1,1.7-.55],[1,1.7-.55]])ra(r,s*(.74-.08),.28,a,.28,.2)}function qE(r){pn(r,[.85,-2.35+.05,2.35,.33],[.85,-2.35,2.35,1.05],as,os),pn(r,[.85-.03,-2.35+.7,2.35-.05,1.05],[.85-.08,-2.35+1.2,2.35-.1,1.85],fl,co),pn(r,[.85-.08,-2.35+1.21,2.35-.11,1.85],[.85-.08,-2.35+1.25,2.35-.13,1.92],as,os),dn(r,0,.42,-2.35+.01,1.62,.18,.1,aa),dl(r,.85,.85,-2.35,2.35);for(let[s,a]of[[-1,-2.35+.8],[1,-2.35+.8],[-1,2.35-.8],[1,2.35-.8]])ra(r,s*(.85-.1),.33,a,.33,.24)}function XE(r){pn(r,[1.25,-5.25,5.25,.35],[1.25,-5.25,5.25,1.15],[.92,.92,.9],{}),pn(r,[1.25+.005,-5.25+.2,5.25-.2,1],[1.25+.005,-5.25+.2,5.25-.2,1.18],as,os),pn(r,[1.25,-5.25+.02,5.25,1.15],[1.25,-5.25+.02,5.25,2.65],fl,co),pn(r,[1.25,-5.25,5.25,2.65],[1.25-.05,-5.25+.05,5.25-.05,3.1],[.9,.9,.88],{}),dn(r,0,2.85,-5.25-.01,1.7,.3,.05,[1,.55,.1],oa);for(let s=0;s<4;s++)dn(r,-1.25-.01,1.9,-5.25+1.5+s*2.2,.02,1.4,.08,aa);for(let s=0;s<4;s++)dn(r,1.25+.01,1.9,-5.25+1.5+s*2.2,.02,1.4,.08,aa);dl(r,1.25,.75,-5.25,5.25,.35);for(let[s,a]of[[-1,-5.25+2.2],[1,-5.25+2.2],[-1,5.25-2.4],[1,5.25-2.4]])ra(r,s*(1.25-.15),.45,a,.45,.3)}function jE(r){pn(r,[.18,-.6,.6,.25],[.2,-.5,.75,.7],as,os),dn(r,0,.78,.25,.3,.1,.6,S0),pn(r,[.18,-.75,-.55,.3],[.12,-.72,-.6,1.05],as,os),dn(r,0,1.05,-.62,.62,.05,.05,S0),dn(r,0,.95,-.76,.16,.1,.04,R0,oa),dn(r,0,.7,.78,.14,.07,.04,C0,oa),ra(r,0,.25,-.62,.25,.1),ra(r,0,.25,.62,.25,.1);let t=[.16,.18,.22],e=[.12,.13,.16],n=[.75,.58,.46],i=[.85,.85,.85];pn(r,[.2,0,.35,.8],[.19,-.1,.2,1.4],t,{}),dn(r,0,.82,-.05,.36,.14,.55,e);for(let s of[-1,1]){dn(r,s*.17,.45,-.32,.1,.5,.12,e),pn(r,[.05,-.05,.08,1.32],[.05,-.55,-.45,1.06],t,{});for(let a=r.pos.length-108;a<r.pos.length;a+=3)r.pos[a]+=s*.22}dn(r,0,1.47,.02,.12,.1,.12,n),dn(r,0,1.62,.02,.28,.26,.3,i,co)}var sa={sedan:{build:r=>A0(r),len:4.5,wid:1.75,v:[38,52],max:40},taxi:{build:r=>A0(r,{taxi:!0}),len:4.5,wid:1.75,v:[36,50],max:14},kei:{build:WE,len:3.4,wid:1.48,v:[34,48],max:30},van:{build:qE,len:4.7,wid:1.7,v:[34,46],max:18},bus:{build:XE,len:10.5,wid:2.5,v:[30,40],max:8},scooter:{build:jE,len:1.6,wid:.7,v:[30,44],max:24}},YE=[["sedan",.3],["kei",.24],["taxi",.1],["van",.12],["bus",.06],["scooter",.18]],KE={sedan:["#e8e8e6","#1c1d20","#8d9196","#2a3550","#6b0f14","#c9c3b6"],taxi:["#121314","#1d5a3c","#f1c232","#e8e8e6"],kei:["#f2f0ea","#e7d9b8","#9cc6d8","#e6a8b4","#4a4f55","#c8d77a"],van:["#ededea","#b8bcc0","#1c1d20","#3d5a80"],bus:["#1f6fb2","#2b9a4a","#d4382c","#e39b17"],scooter:["#d8d8d4","#1c1d20","#b0302c","#2d6db5","#e1c35a"]},ul=class{constructor(t,e,n){this.road=e,this.city=n,this.group=new Pt,this.group.visible=!1,t.add(this.group),this.uLamp={value:0};let i=new Yt({vertexColors:!0,roughness:.5,metalness:.1});i.onBeforeCompile=s=>{s.uniforms.uLamp=this.uLamp,s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
attribute float aTint, aGlow, aGloss;
varying float vGlow, vGloss;`).replace("#include <color_vertex>",`vColor = vec3(1.0);
          vColor *= color;
          #ifdef USE_INSTANCING_COLOR
            vColor = mix(vColor, vColor * instanceColor.xyz, aTint);
          #endif
          vGlow = aGlow; vGloss = aGloss;`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
uniform float uLamp;
varying float vGlow, vGloss;`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
roughnessFactor = mix(roughnessFactor, 0.08, vGloss);`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += vColor * vGlow * (0.6 + 5.0 * uLamp);`)},i.customProgramCacheKey=()=>"city-vehicle",me(i),this.meshes={};for(let[s,a]of Object.entries(sa)){let o=VE();a.build(o);let c=new Rt;c.setAttribute("position",new wt(o.pos,3)),c.setAttribute("normal",new wt(o.nor,3)),c.setAttribute("color",new wt(o.col,3)),c.setAttribute("aTint",new wt(o.tint,1)),c.setAttribute("aGlow",new wt(o.glow,1)),c.setAttribute("aGloss",new wt(o.gloss,1));let l=new we(c,i,a.max);l.instanceColor=new un(new Float32Array(a.max*3),3),l.count=0,l.castShadow=!0,l.frustumCulled=!1,this.group.add(l),this.meshes[s]=l}this.cars=[],this.ctrl={lane:null,maxV:1/0},this._p={},this._m=new bt,this._q=new Wt,this._v=new T,this._one=new T(1,1,1),this._c=new et,this._up=new T(0,1,0),this.crossTimers=new Map,this.filled=!1}set visible(t){this.group.visible=t,t||(this.cars.length=0,this.filled=!1,this.crossTimers.clear())}get visible(){return this.group.visible}_pick(){let t=Math.random(),e="sedan";for(let[n,i]of YE)if((t-=i)<0){e=n;break}return this.cars.filter(n=>n.type===e).length>=sa[e].max&&(e="sedan"),this.cars.filter(n=>n.type===e).length>=sa[e].max?null:e}_new(t,e){let n=sa[t],i=KE[t],s=(n.v[0]+Math.random()*(n.v[1]-n.v[0]))*BE;return Object.assign({type:t,len:n.len,wid:n.wid,vMax:s,v:s,color:i[Math.floor(Math.random()*i.length)],lat:0},e)}_free(t,e,n){for(let i of this.cars)if(!i.cross&&Math.abs(i.d-e)<1.8&&Math.abs(i.s-t)<n)return!1;return!0}update(t,e,n,i,s,a=4.6){if(!this.group.visible)return;this.uLamp.value=s;let o=this.road,c=Je.lanes;if(!this.filled){this.filled=!0;for(let y of[1,-1])for(let w of c)for(let C=e-Tf+Math.random()*40;C<e+ll;C+=hl[0]+Math.random()*(hl[1]-hl[0])){let _=y*w;if(Math.abs(C-e)<15&&Math.abs(_-n)<2)continue;let A=this._pick();A&&this.cars.push(this._new(A,{s:C,d:_,home:_,dir:y}))}}for(let y of[1,-1])for(let w of c){let C=y*w,_=y<0?e+ll-10:i<10?e-Tf+10:e+ll-10;if(Math.random()<t*.35&&this._free(_,C,hl[0]+10)&&Math.abs(_-e)>30){let A=this._pick();if(A){let I=this._new(A,{s:_,d:C,home:C,dir:y});y>0&&_>e&&(I.vMax=Math.min(I.vMax,Math.max(4,i-2))),this.cars.push(I)}}}let l=o.junctionIndex(e-60),h=o.junctionIndex(e+330);for(let y=l;y<h;y++)for(let w of[1,-1]){let C=y*2+(w>0?1:0),_=this.crossTimers.get(C);if(_===void 0&&(_=Math.random()*4),_-=t,_<=0){_=3+Math.random()*6;let A=-w*T0,I=w>0?-1.75:1.75,H=this.cars.some(L=>L.cross&&L.cross.n===y&&L.cross.du===w&&Math.abs(L.cross.u-A)<14),N=this._pick();!H&&N&&N!=="bus"&&this.cars.push(this._new(N,{cross:{n:y,u:A,a:I,du:w}}))}this.crossTimers.set(C,_)}for(let y of this.crossTimers.keys()){let w=Math.floor(y/2);(w<l-1||w>h)&&this.crossTimers.delete(y)}let u={s:e,d:n,v:i,len:a,wid:1.9,dir:1,player:!0},f=this.cars.filter(y=>!y.cross),d=(y,w)=>{let C=null,_=1/0;for(let A of f.concat([u])){if(A===y||Math.abs(A.d-w)>(A.wid||1.8)/2+y.wid/2+.2)continue;let I=(A.s-y.s)*y.dir-(A.len+y.len)/2;I>-.5&&I<_&&(_=I,C=A)}return C?{e:C,gap:_}:null},g=(y,w)=>Math.max(0,y+.6*(w-(4+1*y)));for(let y of f){let w=y.vMax,C=d(y,y.d);if(C&&(C.e.dir===y.dir||C.e.player?w=Math.min(w,g(C.e.v*(C.e.dir===y.dir?1:0),C.gap)):w=Math.min(w,Math.max(0,(C.gap-6)*.5)),!y.changing&&C.gap<35&&C.e.v<y.vMax-2.5&&(C.e.dir===y.dir||C.e.player))){let H=y.dir*(Math.abs(y.home)<3.5?c[1]:c[0]);!f.concat([u]).some(L=>L!==y&&Math.abs(L.d-H)<2.2&&(L.s-y.s)*y.dir>-18-(L.len+y.len)/2&&(L.s-y.s)*y.dir<25)&&(y.home=H,y.changing=!0)}let _=this.city.stopAhead(y.s+y.dir*y.len/2,y.dir,y.v);_<1/0&&(w=Math.min(w,Math.sqrt(6*Math.max(0,_-1.2)))),y.v+=Math.max(-7*t,Math.min(2.2*t,w-y.v)),y.v=Math.max(0,y.v),y.s+=y.dir*y.v*t;let A=y.home-y.d,I=Math.sign(A)*Math.min(1.3,Math.abs(A)*2);y.lat=I,y.d+=I*t,Math.abs(A)<.03&&(y.d=y.home,y.changing=!1,y.lat=0)}let v=Je.hw;for(let y of this.cars){if(!y.cross)continue;let w=y.cross,C=y.vMax;for(let H of this.cars){if(H===y||!H.cross||H.cross.n!==w.n||H.cross.du!==w.du)continue;let N=(H.cross.u-w.u)*w.du-(H.len+y.len)/2;N>-.5&&(C=Math.min(C,g(H.v,N)))}let _=-w.du*(v+4.2),A=w.u+w.du*y.len/2,I=(_-A)*w.du;if(I>-.5){let H=this.city._phase(w.n).cross;(H===2||H===1&&I>y.v*y.v/6)&&(C=Math.min(C,Math.sqrt(6*Math.max(0,I-.5))))}y.v+=Math.max(-7*t,Math.min(2.2*t,C-y.v)),y.v=Math.max(0,y.v),w.u+=w.du*y.v*t}this.cars=this.cars.filter(y=>y.cross?Math.abs(y.cross.u)<=T0+2&&y.cross.n>=l-1:y.s>e-Tf-20&&y.s<e+ll+40);let m=d(u,n);this.ctrl.maxV=m&&m.e.dir===1?g(m.e.v,m.gap):1/0;let p={};for(let y in this.meshes)p[y]=0;let x=this._m,b=this._q,E=this._v,M=this._p;for(let y of this.cars){let w=this.meshes[y.type],C=p[y.type]++;if(C>=sa[y.type].max)continue;let _;if(y.cross){let A=this._frame(y.cross.n),I=A.x+A.fx*y.cross.a+A.rx*y.cross.u,H=A.z+A.fz*y.cross.a+A.rz*y.cross.u;E.set(I,this.city.groundJ(A,y.cross.u)+.05,H),_=A.th+(y.cross.du>0?-Math.PI/2:Math.PI/2)}else o.at(y.s,M),E.set(M.x+Math.cos(M.th)*y.d,M.y+.05,M.z-Math.sin(M.th)*y.d),_=M.th+(y.dir<0?Math.PI:0)-y.dir*Math.atan2(y.lat,Math.max(3,y.v));b.setFromAxisAngle(this._up,_),x.compose(E,b,this._one),w.setMatrixAt(C,x),w.setColorAt(C,this._c.set(y.color))}for(let y in this.meshes){let w=this.meshes[y];w.count=Math.min(p[y],sa[y].max),w.instanceMatrix.needsUpdate=!0,w.instanceColor&&(w.instanceColor.needsUpdate=!0)}}_frame(t){this._fc||(this._fc=new Map);let e=this._fc.get(t);return e||(e=this.city._frame(this.road.junction(t)),this._fc.set(t,e),this._fc.size>40&&this._fc.delete(this._fc.keys().next().value)),e}};function Ps(r,t=!1){let e=r[0].index!==null,n=new Set(Object.keys(r[0].attributes)),i=new Set(Object.keys(r[0].morphAttributes)),s={},a={},o=r[0].morphTargetsRelative,c=new Rt,l=0;for(let h=0;h<r.length;++h){let u=r[h],f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;s[d]===void 0&&(s[d]=[]),s[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,h),l+=d}}if(e){let h=0,u=[];for(let f=0;f<r.length;++f){let d=r[f].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+h);h+=r[f].attributes.position.count}c.setIndex(u)}for(let h in s){let u=P0(s[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let v=0;v<a[h].length;++v)d.push(a[h][v][f]);let g=P0(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function P0(r){let t,e,n,i=-1,s=0;for(let l=0;l<r.length;++l){let h=r[l];if(h.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.array.length}let a=new t(s),o=0;for(let l=0;l<r.length;++l)a.set(r[l].array,o),o+=r[l].array.length;let c=new Mt(a,e,n);return i!==void 0&&(c.gpuType=i),c}function L0(r,t=1e-4){t=Math.max(t,Number.EPSILON);let e={},n=r.getIndex(),i=r.getAttribute("position"),s=n?n.count:i.count,a=0,o=Object.keys(r.attributes),c={},l={},h=[],u=["getX","getY","getZ","getW"],f=["setX","setY","setZ","setW"];for(let x=0,b=o.length;x<b;x++){let E=o[x],M=r.attributes[E];c[E]=new Mt(new M.array.constructor(M.count*M.itemSize),M.itemSize,M.normalized);let y=r.morphAttributes[E];y&&(l[E]=new Mt(new y.array.constructor(y.count*y.itemSize),y.itemSize,y.normalized))}let d=t*.5,g=Math.log10(1/t),v=Math.pow(10,g),m=d*v;for(let x=0;x<s;x++){let b=n?n.getX(x):x,E="";for(let M=0,y=o.length;M<y;M++){let w=o[M],C=r.getAttribute(w),_=C.itemSize;for(let A=0;A<_;A++)E+=`${~~(C[u[A]](b)*v+m)},`}if(E in e)h.push(e[E]);else{for(let M=0,y=o.length;M<y;M++){let w=o[M],C=r.getAttribute(w),_=r.morphAttributes[w],A=C.itemSize,I=c[w],H=l[w];for(let N=0;N<A;N++){let L=u[N],P=f[N];if(I[P](a,C[L](b)),_)for(let D=0,k=_.length;D<k;D++)H[D][P](a,_[D][L](b))}}e[E]=a,h.push(a),a++}}let p=r.clone();for(let x in r.attributes){let b=c[x];if(p.setAttribute(x,new Mt(b.array.slice(0,a*b.itemSize),b.itemSize,b.normalized)),x in l)for(let E=0;E<l[x].length;E++){let M=l[x][E];p.morphAttributes[x][E]=new Mt(M.array.slice(0,a*M.itemSize),M.itemSize,M.normalized)}}return p.setIndex(h),p}function Sf(r,t){if(t===$m)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(t===io||t===Qc){let e=r.getIndex();if(e===null){let a=[],o=r.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);r.setIndex(a),e=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}let n=e.count-2,i=[];if(t===io)for(let a=1;a<=n;a++)i.push(e.getX(0)),i.push(e.getX(a)),i.push(e.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(e.getX(a)),i.push(e.getX(a+1)),i.push(e.getX(a+2))):(i.push(e.getX(a+2)),i.push(e.getX(a+1)),i.push(e.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),r}var{chunkLen:ca,step:pl}=Me,Hi=Me.halfWidth,I0=7,Af=1;var JE=r=>r.index?r.toNonIndexed():r;function ZE(r){return Ps(r.map(t=>{let e=JE(t);return e.deleteAttribute("uv"),e}))}function D0(r,t){let e=[],n=[],i=[],s=[],[a,o,c]=r.center,l=(d,g,v,m,p)=>{let x=new T(d-a,(g-o)*.7,v-c).normalize().add(new T(0,.35,0)).normalize();e.push(d,g,v),n.push(x.x,x.y,x.z),i.push(m,p)};for(let d of r.yaws){let g=Math.cos(d),v=Math.sin(d),m=e.length/3,p=r.w/2,x=r.h/2;l(a-p*g,o-x,c-p*v,r.u0,0),l(a+p*g,o-x,c+p*v,r.u1,0),l(a+p*g,o+x,c+p*v,r.u1,1),l(a-p*g,o+x,c-p*v,r.u0,1),s.push(m,m+1,m+2,m,m+2,m+3)}if(r.top){let d=e.length/3,g=r.top/2,v=r.topY;l(a-g,v,c-g,r.u0,0),l(a+g,v,c-g,r.u1,0),l(a+g,v,c+g,r.u1,1),l(a-g,v,c+g,r.u0,1),s.push(d,d+1,d+2,d,d+2,d+3)}let h=new Rt;h.setAttribute("position",new wt(e,3)),h.setAttribute("normal",new wt(n,3)),h.setAttribute("uv",new wt(i,2)),h.setIndex(s);let u=new Ve(t.r0,t.r1,t.h,6).translate(0,t.h/2,0),f=u.attributes.uv;for(let d=0;d<f.count;d++)f.setXY(d,.94,.88);return Ps([u,h])}function F0(){return D0({center:[0,4.7,0],w:5.4,h:5,yaws:[0,Math.PI/3,2*Math.PI/3],u0:0,u1:.5,top:4.4,topY:5},{r0:.16,r1:.26,h:3})}function H0(){return D0({center:[0,5.1,0],w:3.8,h:8.2,yaws:[0,Math.PI/3,2*Math.PI/3],u0:.5,u1:.75},{r0:.13,r1:.22,h:1.8})}var lo=11.1,QE=lo-.22,Rf=3,Cf=Object.freeze({intensity:28,distance:118,angle:1.2,penumbra:.8,decay:.6,glowOpacity:.9,glowSize:9,color:"#ffc98a"});function $E(){return ZE([new Ve(.08,.13,lo,6).translate(0,lo/2,0),new he(1.9,.08,.1).translate(-.9,lo,0),new he(.5,.1,.22).translate(-1.75,lo-.07,0)])}var tw=`#include <common>
varying vec3 vRW;
uniform float uWet, uPuddle, uRain, uRainT, uReflOn, uPlaneY;
uniform sampler2D uReflTex, uDirtTex;
uniform float uSunHide;
uniform vec3 uGrassCol;
varying float vDirt;
uniform mat4 uReflMat;
float rHash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float rNoise(vec2 p) {
  vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(rHash(i), rHash(i + vec2(1.0, 0.0)), f.x), mix(rHash(i + vec2(0.0, 1.0)), rHash(i + vec2(1.0, 1.0)), f.x), f.y);
}
// gợn sóng tròn do giọt mưa (trả về độ dốc theo x,z)
vec2 rRipple(vec2 p, float t) {
  vec2 g = vec2(0.0);
  for (int k = 0; k < 2; k++) {
    vec2 q = p * (k == 0 ? 2.3 : 3.4) + float(k) * 17.0;
    vec2 cell = floor(q), f = fract(q);
    vec2 c = vec2(rHash(cell + 1.7), rHash(cell + 3.1)) * 0.6 + 0.2;
    float ph = fract(t * (0.8 + 0.4 * rHash(cell + 9.3)) + rHash(cell));
    vec2 dv = f - c;
    float r = length(dv), rr = ph * 0.5;
    float ring = sin((r - rr) * 70.0) * (1.0 - ph) * (1.0 - smoothstep(0.0, 0.06, abs(r - rr)));
    g += dv / max(r, 1e-3) * ring;
  }
  return g;
}`,ew=`
float across = vMapUv.x;
// đường đất xuyên rừng: đất có vệt bánh xe, mép cỏ lấn vào (lòng đường hẹp lại), không vạch kẻ
if (vDirt > 0.001) {
  vec3 dirt = texture2D(uDirtTex, vRW.xz / 3.2).rgb * (0.82 + 0.36 * rNoise(vRW.xz * 0.35));
  float rut = min(abs(across - 0.37), abs(across - 0.63));
  dirt *= 1.0 - 0.3 * (1.0 - smoothstep(0.0, 0.06, rut));
  float en = (rNoise(vRW.xz * 0.55) - 0.5) * 0.12 + (rNoise(vRW.xz * 2.1) - 0.5) * 0.05;
  float grassK = smoothstep(0.29, 0.36, abs(across - 0.5) + en);
  vec3 grass = uGrassCol * (0.7 + 0.6 * rNoise(vRW.xz * 1.9)) * (0.85 + 0.3 * rNoise(vRW.xz * 0.21));
  diffuseColor.rgb = mix(diffuseColor.rgb, mix(dirt, grass, grassK) * diffuse, vDirt);
}
float rut = 1.0 - smoothstep(0.0, 0.07, min(abs(across - 0.27), abs(across - 0.73)));
float edgeW = 1.0 - smoothstep(0.0, 0.12, min(across, 1.0 - across));
float pn = rNoise(vRW.xz * 0.2) * 0.6 + rNoise(vRW.xz * 0.85 + 3.1) * 0.4;
float pth = 0.6 - 0.13 * rut - 0.1 * edgeW;
float puddle = smoothstep(pth, pth + 0.05, pn) * uPuddle;
diffuseColor.rgb *= mix(1.0, 0.32, puddle);
vec2 ripG = rRipple(vRW.xz, uRainT) * uRain * puddle;
`,nw=`
if (uReflOn > 0.5) {
  vec4 rc = uReflMat * vec4(vRW, 1.0);
  vec2 ruv = rc.xy / rc.w + ripG * 0.012;
  vec3 refl = vec3(0.0);
  float spread = mix(0.012, 0.004, puddle);                 // đường ướt (không vũng) => phản chiếu kéo dọc, nhoè
  for (int k = 0; k < 4; k++) refl += texture2D(uReflTex, ruv + vec2(0.0, float(k) * spread)).rgb;
  refl *= 0.25;
  vec3 V = normalize(cameraPosition - vRW);
  float fres = 0.02 + 0.98 * pow(1.0 - clamp(V.y, 0.0, 1.0), 5.0);
  float fade = (1.0 - smoothstep(1.0, 4.0, abs(vRW.y - uPlaneY))) * (1.0 - smoothstep(90.0, 170.0, length(vRW - cameraPosition)));
  float kR = clamp((puddle * 0.95 + 0.15 * uWet * (1.0 - puddle)) * fres * fade, 0.0, 1.0);   // ngoài vũng: chỉ loáng nhẹ
  outgoingLight = mix(outgoingLight, refl, kR);
}`,ml=class{constructor(t,e,n){this.scene=t,this.road=e,this.chunks=new Map,this.queue=[],this.tmp={},this.map="reed",this.lastS=150,this.roadTex=vf(n),this.cityTex=vf(n,!0),this.roadMat=new Yt({map:this.roadTex,roughness:.9,metalness:0,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),this.roadU={uWet:{value:0},uPuddle:{value:0},uRain:{value:0},uRainT:{value:0},uReflTex:{value:null},uReflMat:{value:new bt},uReflOn:{value:0},uPlaneY:{value:0},uSunHide:{value:0},uDirtTex:{value:er("dirt",n)},uGrassCol:{value:new et("#5c6b34")}},this.roadMat.onBeforeCompile=s=>{Object.assign(s.uniforms,this.roadU),s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vRW;
attribute float aDirt;
varying float vDirt;`).replace("#include <project_vertex>",`#include <project_vertex>
vRW = (modelMatrix * vec4(transformed, 1.0)).xyz;
vDirt = aDirt;`),s.fragmentShader=s.fragmentShader.replace("#include <common>",tw).replace("#include <map_fragment>",`#include <map_fragment>
`+ew).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
          // nhựa đường sần: hạt nhám làm độ nhám lốm đốm (không trơn bóng đều), vũng nước vẫn nhẵn
          float agg = rNoise(vRW.xz * 26.0) * 0.6 + rNoise(vRW.xz * 83.0) * 0.4;
          roughnessFactor = clamp(roughnessFactor + (agg - 0.5) * 0.35, 0.45, 1.0);
          roughnessFactor = mix(roughnessFactor, max(roughnessFactor, 0.97 - 0.45 * uWet), vDirt);
          roughnessFactor = mix(roughnessFactor, 0.03, puddle);`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
          normal = normalize(normal + (viewMatrix * vec4(ripG.x, 0.0, ripG.y, 0.0)).xyz * 0.35);
          // vân hạt nhựa đường (bump theo đạo hàm màn hình, mờ dần ở xa để không lấp lánh)
          {
            float gh = rNoise(vRW.xz * 26.0) * 0.55 + rNoise(vRW.xz * 83.0) * 0.45;
            vec3 dpx = dFdx(-vViewPosition), dpy = dFdy(-vViewPosition);
            vec3 r1 = cross(dpy, normal), r2 = cross(normal, dpx);
            float det = dot(dpx, r1);
            float fade = (1.0 - smoothstep(0.25, 0.9, fwidth(vRW.x * 83.0) + fwidth(vRW.z * 83.0))) * (1.0 - puddle);
            vec3 grad = sign(det) * (dFdx(gh) * r1 + dFdy(gh) * r2);
            normal = normalize(abs(det) * normal - grad * 0.22 * fade);
          }`).replace("#include <lights_fragment_end>",`#include <lights_fragment_end>
// trời âm u / mưa: mặt trời bị mây che => vũng nước không loé sáng như soi mặt trời
reflectedLight.directSpecular *= 1.0 - uSunHide * puddle;`).replace("#include <opaque_fragment>",nw+`
#include <opaque_fragment>`)},this.railMat=new Yt({color:12172996,roughness:.35,metalness:.75,side:de}),this.poleMat=new Yt({color:4869973,roughness:.6,metalness:.4}),this.postMat=new Yt({color:15263968,roughness:.7}),this.bulbMat=new qe({color:16767392,toneMapped:!1});let i=na();this.glowMat=new gi({map:i,color:16763274,size:9,transparent:!0,opacity:0,depthWrite:!1,blending:tn,sizeAttenuation:!0});for(let s of[this.roadMat,this.poleMat,this.postMat,this.bulbMat,this.glowMat,this.railMat])me(s);this.lampOn=0,this.lampTune={...Cf},this.lampLights=Array.from({length:Rf},()=>{let s=new As(16763274,0,80,1.2,.8,.6);return this.scene.add(s,s.target),s}),this._lampList=[],this.lampGeo=$E(),this.railPostGeo=new he(.12,.8,.12).translate(0,.4,0),this.postGeo=new he(.12,.95,.12).translate(0,.475,0),this.bulbGeo=new vi(.2,8,6)}setMap(t){this.map=t,Hi=Me.halfWidth,this.roadMat.map=t==="city"?this.cityTex:this.roadTex;for(let e of this.chunks.values())this._dispose(e);this.chunks.clear(),this.queue.length=0,this.prime(this.lastS)}update(t,e=2){this.lastS=t;let n=Math.floor(t/ca);for(let i=Math.max(0,n-Af);i<=n+I0;i++)!this.chunks.has(i)&&!this.queue.includes(i)&&this.queue.push(i);this.queue.sort((i,s)=>i-s);for(let i=0;i<e&&this.queue.length;i++){let s=this.queue.shift();s>=n-Af&&s<=n+I0&&this._build(s)}for(let[i,s]of this.chunks)i<n-Af&&(this._dispose(s),this.chunks.delete(i))}prime(t){this.update(t,999)}apply(t){let e=t.lamps,n=new et(9079430).lerp(new et(this.lampTune.color),e);this.bulbMat.color.copy(n).multiplyScalar(.6+1.6*e),this.lampOn=e,this.glowMat.opacity=e*this.lampTune.glowOpacity,this.glowMat.size=this.lampTune.glowSize,this.glowMat.color.set(this.lampTune.color),this.roadMat.roughness=.92-.3*t.wet,this.roadMat.envMapIntensity=.38+.3*t.wet;let i=(1-.4*t.wet)*(1-.25*t.dark);this.roadMat.color.setRGB(i,i,i);let s=this.roadU;s.uWet.value=t.wet,s.uPuddle.value=t.wet,s.uRain.value=t.rain,s.uSunHide.value=Math.min(1,t.overcast*1.2+t.rain)}updateLights(t){let e=this._lampList;e.length=0;for(let i of this.chunks.values())for(let s of i.userData.lamps||[]){let[a]=s;e.push({L:s,d:Math.hypot(a[0]-t.x,a[1]-t.y,a[2]-t.z)})}e.sort((i,s)=>i.d-s.d);let n=e.length>Rf?e[Rf].d:1/0;this.lampLights.forEach((i,s)=>{let a=e[s];if(!a||this.lampOn<=0){i.intensity=0;return}let o=n===1/0?1:Math.min(1,Math.max(0,(n-a.d)/(.3*n))),[c,l]=a.L;i.position.set(c[0],c[1],c[2]),i.target.position.set(l[0],l[1],l[2]),i.target.updateMatrixWorld();let h=this.lampTune;i.color.set(h.color),i.distance=h.distance,i.angle=h.angle,i.penumbra=h.penumbra,i.decay=h.decay,i.intensity=h.intensity*this.lampOn*o*o*(3-2*o)})}hitLamp(t,e,n,i,s=48){let a=new T;for(let o of this.chunks.values())for(let[c]of o.userData.lamps||[]){if(a.set(c[0],c[1],c[2]).project(t),a.z<-1||a.z>1)continue;let l=i.left+(a.x+1)*i.width*.5,h=i.top+(1-a.y)*i.height*.5;if(Math.hypot(e-l,n-h)<=s)return!0}return!1}setReflection(t,e){let n=this.roadU;n.uRainT.value=e,n.uReflOn.value=t.active?1:0,t.active&&(n.uReflTex.value=t.rt.texture,n.uReflMat.value.copy(t.texMatrix),n.uPlaneY.value=t.planeY)}_build(t){let e=new Pt,n=this.road,i=t*ca,s=this.tmp,a=ca/pl,o=new Float32Array((a+1)*6),c=new Float32Array((a+1)*4),l=new Float32Array((a+1)*6),h=new Float32Array((a+1)*2),u=[];for(let P=0;P<=a;P++){let D=i+P*pl;n.at(D,s);let k=Math.cos(s.th),O=-Math.sin(s.th),G=s.y+.05;o.set([s.x-k*Hi,G,s.z-O*Hi,s.x+k*Hi,G,s.z+O*Hi],P*6),c.set([0,D/12,1,D/12],P*4),l.set([0,1,0,0,1,0],P*6);let X=n.dirtAt(D);if(h[P*2]=h[P*2+1]=X,P<a){let K=P*2;u.push(K,K+1,K+2,K+1,K+3,K+2)}}let f=new Rt;f.setAttribute("position",new Mt(o,3)),f.setAttribute("normal",new Mt(l,3)),f.setAttribute("uv",new Mt(c,2)),f.setAttribute("aDirt",new Mt(h,1)),f.setIndex(u),f.computeVertexNormals();let d=new Ft(f,this.roadMat);d.receiveShadow=!0,d.layers.set(3),e.add(d),e.userData.own=[f];let g=[];for(let P=i;P<i+ca&&this.map!=="city";P+=12)if(!(n.dirtAt(P)>.05)){n.at(P,s);for(let D of this.map==="mountain"?[-1]:[-1,1])g.push([s.x+Math.cos(s.th)*(Hi+.7)*D,s.y,s.z-Math.sin(s.th)*(Hi+.7)*D])}let v=new we(this.postGeo,this.postMat,g.length),m=new bt;if(g.forEach(([P,D,k],O)=>{m.makeTranslation(P,D,k),v.setMatrixAt(O,m)}),e.add(v),this.map==="mountain"){let P=ca/pl,D=new Float32Array((P+1)*6),k=[],O=[];for(let it=0;it<=P;it++){let z=i+it*pl;n.at(z,s);let Q=s.x+Math.cos(s.th)*(Hi+.55),lt=s.z-Math.sin(s.th)*(Hi+.55);if(D.set([Q,s.y+.5,lt,Q,s.y+.82,lt],it*6),it<P){let ht=it*2;k.push(ht,ht+2,ht+1,ht+1,ht+2,ht+3)}it%2===0&&O.push([Q,s.y,lt])}let G=new Rt;G.setAttribute("position",new Mt(D,3)),G.setIndex(k),G.computeVertexNormals();let X=new Ft(G,this.railMat);X.castShadow=!0,e.add(X),e.userData.own.push(G);let K=new we(this.railPostGeo,this.poleMat,O.length);O.forEach(([it,z,Q],lt)=>{m.makeTranslation(it,z,Q),K.setMatrixAt(lt,m)}),e.add(K)}let p=[],x=[],b=[],E=this.map==="city",M=E?4:this.map==="reed"?2:1,y=ca/M;for(let P=0;P<M;P++){let D=i+P*y+(E?21:6);if(n.dirtAt(D)>.05)continue;if(E){let Q=n.nearJunction(D);if(Q!==null&&Math.abs(D-Q)<16)continue}n.at(D,s);let k=this.map==="mountain"?-1:Math.round(D/y)%2?1:-1,O=Hi+(E?.9:1.4),G=s.x+Math.cos(s.th)*O*k,X=s.z-Math.sin(s.th)*O*k,K=s.th+(k===1?0:Math.PI);p.push([G,s.y,X,K]);let it=-Math.cos(K)*1.75,z=Math.sin(K)*1.75;x.push([G+it,s.y+QE,X+z]),b.push([G+it*4.5,s.y,X+z*4.5])}let w=new we(this.lampGeo,this.poleMat,p.length),C=new Wt,_=new T(0,1,0),A=new T(1,1,1),I=new T;p.forEach(([P,D,k,O],G)=>{C.setFromAxisAngle(_,O),m.compose(I.set(P,D,k),C,A),w.setMatrixAt(G,m)}),w.castShadow=!0,e.add(w);let H=new we(this.bulbGeo,this.bulbMat,x.length);x.forEach(([P,D,k],O)=>{m.makeTranslation(P,D,k),H.setMatrixAt(O,m)}),e.add(H);let N=new Rt;N.setAttribute("position",new wt(x.flat(),3));let L=new fn(N,this.glowMat);L.frustumCulled=!1,L.renderOrder=3,e.add(L),e.userData.own.push(N),e.userData.lamps=x.map((P,D)=>[P,b[D]]),this.scene.add(e),this.chunks.set(t,e)}_dispose(t){this.scene.remove(t),t.userData.own.forEach(e=>e.dispose()),t.traverse(e=>{e.isInstancedMesh&&e.dispose()})}};var Ds=class extends rs{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new Nf(e)}),this.register(function(e){return new qf(e)}),this.register(function(e){return new Xf(e)}),this.register(function(e){return new jf(e)}),this.register(function(e){return new kf(e)}),this.register(function(e){return new Of(e)}),this.register(function(e){return new zf(e)}),this.register(function(e){return new Bf(e)}),this.register(function(e){return new Hf(e)}),this.register(function(e){return new Gf(e)}),this.register(function(e){return new Uf(e)}),this.register(function(e){return new Wf(e)}),this.register(function(e){return new Vf(e)}),this.register(function(e){return new Df(e)}),this.register(function(e){return new Yf(e)}),this.register(function(e){return new Kf(e)})}load(t,e,n,i){let s=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=Cs.extractUrlBase(t);a=Cs.resolveURL(l,this.path)}else a=Cs.extractUrlBase(t);this.manager.itemStart(t);let o=function(l){i?i(l):console.error(l),s.manager.itemError(t),s.manager.itemEnd(t)},c=new eo(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(t,function(l){try{s.parse(l,a,function(h){e(h),s.manager.itemEnd(t)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(t){return this.dracoLoader=t,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,i){let s,a={},o={},c=new TextDecoder;if(typeof t=="string")s=JSON.parse(t);else if(t instanceof ArrayBuffer)if(c.decode(new Uint8Array(t,0,4))===z0){try{a[fe.KHR_BINARY_GLTF]=new Jf(t)}catch(u){i&&i(u);return}s=JSON.parse(a[fe.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(t));else s=t;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new id(s,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){let u=s.extensionsUsed[h],f=s.extensionsRequired||[];switch(u){case fe.KHR_MATERIALS_UNLIT:a[u]=new Ff;break;case fe.KHR_DRACO_MESH_COMPRESSION:a[u]=new Zf(s,this.dracoLoader);break;case fe.KHR_TEXTURE_TRANSFORM:a[u]=new Qf;break;case fe.KHR_MESH_QUANTIZATION:a[u]=new $f;break;default:f.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,i)}parseAsync(t,e){let n=this;return new Promise(function(i,s){n.parse(t,e,i,s)})}};function iw(){let r={};return{get:function(t){return r[t]},add:function(t,e){r[t]=e},remove:function(t){delete r[t]},removeAll:function(){r={}}}}var fe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Df=class{constructor(t){this.parser=t,this.name=fe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let t=this.parser,e=this.parser.json.nodes||[];for(let n=0,i=e.length;n<i;n++){let s=e[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(t){let e=this.parser,n="light:"+t,i=e.cache.get(n);if(i)return i;let s=e.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[t],l,h=new et(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],en);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new $r(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Rs(h),l.distance=u;break;case"spot":l=new As(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Is(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=e.createUniqueName(c.name||"light_"+t),i=Promise.resolve(l),e.cache.add(n,i),i}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){let e=this,n=this.parser,s=n.json.nodes[t],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(e.cache,o,c)})}},Ff=class{constructor(){this.name=fe.KHR_MATERIALS_UNLIT}getMaterialType(){return qe}extendParams(t,e,n){let i=[];t.color=new et(1,1,1),t.opacity=1;let s=e.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let a=s.baseColorFactor;t.color.setRGB(a[0],a[1],a[2],en),t.opacity=a[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(t,"map",s.baseColorTexture,ue))}return Promise.all(i)}},Hf=class{constructor(t){this.parser=t,this.name=fe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){let i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(e.emissiveIntensity=s),Promise.resolve()}},Nf=class{constructor(t){this.parser=t,this.name=fe.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(e.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(n.assignTexture(e,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(e,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(e,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new rt(o,o)}return Promise.all(s)}},Uf=class{constructor(t){this.parser=t,this.name=fe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(e.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(n.assignTexture(e,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(e.iridescenceIOR=a.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(e,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}},kf=class{constructor(t){this.parser=t,this.name=fe.KHR_MATERIALS_SHEEN}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[];e.sheenColor=new et(0,0,0),e.sheenRoughness=0,e.sheen=1;let a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;e.sheenColor.setRGB(o[0],o[1],o[2],en)}return a.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(n.assignTexture(e,"sheenColorMap",a.sheenColorTexture,ue)),a.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(e,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}},Of=class{constructor(t){this.parser=t,this.name=fe.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(e.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(n.assignTexture(e,"transmissionMap",a.transmissionTexture)),Promise.all(s)}},zf=class{constructor(t){this.parser=t,this.name=fe.KHR_MATERIALS_VOLUME}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];e.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(n.assignTexture(e,"thicknessMap",a.thicknessTexture)),e.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return e.attenuationColor=new et().setRGB(o[0],o[1],o[2],en),Promise.all(s)}},Bf=class{constructor(t){this.parser=t,this.name=fe.KHR_MATERIALS_IOR}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(t,e){let i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=i.extensions[this.name];return e.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}},Gf=class{constructor(t){this.parser=t,this.name=fe.KHR_MATERIALS_SPECULAR}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];e.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(n.assignTexture(e,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return e.specularColor=new et().setRGB(o[0],o[1],o[2],en),a.specularColorTexture!==void 0&&s.push(n.assignTexture(e,"specularColorMap",a.specularColorTexture,ue)),Promise.all(s)}},Vf=class{constructor(t){this.parser=t,this.name=fe.EXT_MATERIALS_BUMP}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];return e.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&s.push(n.assignTexture(e,"bumpMap",a.bumpTexture)),Promise.all(s)}},Wf=class{constructor(t){this.parser=t,this.name=fe.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(e.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(e.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&s.push(n.assignTexture(e,"anisotropyMap",a.anisotropyTexture)),Promise.all(s)}},qf=class{constructor(t){this.parser=t,this.name=fe.KHR_TEXTURE_BASISU}loadTexture(t){let e=this.parser,n=e.json,i=n.textures[t];if(!i.extensions||!i.extensions[this.name])return null;let s=i.extensions[this.name],a=e.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,s.source,a)}},Xf=class{constructor(t){this.parser=t,this.name=fe.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){let e=this.name,n=this.parser,i=n.json,s=i.textures[t];if(!s.extensions||!s.extensions[e])return null;let a=s.extensions[e],o=i.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(t,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){let e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}},jf=class{constructor(t){this.parser=t,this.name=fe.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){let e=this.name,n=this.parser,i=n.json,s=i.textures[t];if(!s.extensions||!s.extensions[e])return null;let a=s.extensions[e],o=i.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(t,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){let e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}},Yf=class{constructor(t){this.name=fe.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){let e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){let c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,f=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,f,i.mode,i.filter).then(function(d){return d.buffer}):a.ready.then(function(){let d=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(d),h,u,f,i.mode,i.filter),d})})}else return null}},Kf=class{constructor(t){this.name=fe.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){let e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=e.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==si.TRIANGLES&&l.mode!==si.TRIANGLE_STRIP&&l.mode!==si.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(t)),Promise.all(o).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],f=l[0].count,d=[];for(let g of u){let v=new bt,m=new T,p=new Wt,x=new T(1,1,1),b=new we(g.geometry,g.material,f);for(let E=0;E<f;E++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,E),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,E),c.SCALE&&x.fromBufferAttribute(c.SCALE,E),b.setMatrixAt(E,v.compose(m,p,x));for(let E in c)if(E==="_COLOR_0"){let M=c[E];b.instanceColor=new un(M.array,M.itemSize,M.normalized)}else E!=="TRANSLATION"&&E!=="ROTATION"&&E!=="SCALE"&&g.geometry.setAttribute(E,c[E]);Re.prototype.copy.call(b,g),this.parser.assignFinalMaterial(b),d.push(b)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}},z0="glTF",ho=12,N0={JSON:1313821514,BIN:5130562},Jf=class{constructor(t){this.name=fe.KHR_BINARY_GLTF,this.content=null,this.body=null;let e=new DataView(t,0,ho),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==z0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-ho,s=new DataView(t,ho),a=0;for(;a<i;){let o=s.getUint32(a,!0);a+=4;let c=s.getUint32(a,!0);if(a+=4,c===N0.JSON){let l=new Uint8Array(t,ho+a,o);this.content=n.decode(l)}else if(c===N0.BIN){let l=ho+a;this.body=t.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Zf=class{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=fe.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){let n=this.json,i=this.dracoLoader,s=t.extensions[this.name].bufferView,a=t.extensions[this.name].attributes,o={},c={},l={};for(let h in a){let u=ed[h]||h.toLowerCase();o[u]=a[h]}for(let h in t.attributes){let u=ed[h]||h.toLowerCase();if(a[h]!==void 0){let f=n.accessors[t.attributes[h]],d=la[f.componentType];l[u]=d.name,c[u]=f.normalized===!0}}return e.getDependency("bufferView",s).then(function(h){return new Promise(function(u,f){i.decodeDracoFile(h,function(d){for(let g in d.attributes){let v=d.attributes[g],m=c[g];m!==void 0&&(v.normalized=m)}u(d)},o,l,en,f)})})}},Qf=class{constructor(){this.name=fe.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}},$f=class{constructor(){this.name=fe.KHR_MESH_QUANTIZATION}},gl=class extends Es{constructor(t,e,n,i){super(t,e,n,i)}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i*3+i;for(let a=0;a!==i;a++)e[a]=n[s+a];return e}interpolate_(t,e,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=i-e,u=(n-e)/h,f=u*u,d=f*u,g=t*l,v=g-l,m=-2*d+3*f,p=d-f,x=1-m,b=p-f+u;for(let E=0;E!==o;E++){let M=a[v+E+o],y=a[v+E+c]*h,w=a[g+E+o],C=a[g+E]*h;s[E]=x*M+b*y+m*w+p*C}return s}},sw=new Wt,td=class extends gl{interpolate_(t,e,n,i){let s=super.interpolate_(t,e,n,i);return sw.fromArray(s).normalize().toArray(s),s}},si={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},la={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},U0={9728:Ke,9729:Qe,9984:Mc,9985:tf,9986:ka,9987:Pi},k0={33071:qn,33648:qa,10497:Fn},Pf={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ed={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ls={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},rw={CUBICSPLINE:void 0,LINEAR:Qs,STEP:Vr},Lf={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function aw(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Yt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ci})),r.DefaultMaterial}function nr(r,t,e){for(let n in e.extensions)r[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function Is(r,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(r.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function ow(r,t,e){let n=!1,i=!1,s=!1;for(let l=0,h=t.length;l<h;l++){let u=t[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);let a=[],o=[],c=[];for(let l=0,h=t.length;l<h;l++){let u=t[l];if(n){let f=u.POSITION!==void 0?e.getDependency("accessor",u.POSITION):r.attributes.position;a.push(f)}if(i){let f=u.NORMAL!==void 0?e.getDependency("accessor",u.NORMAL):r.attributes.normal;o.push(f)}if(s){let f=u.COLOR_0!==void 0?e.getDependency("accessor",u.COLOR_0):r.attributes.color;c.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],f=l[2];return n&&(r.morphAttributes.position=h),i&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=f),r.morphTargetsRelative=!0,r})}function cw(r,t){if(r.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)r.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){let e=t.extras.targetNames;if(r.morphTargetInfluences.length===e.length){r.morphTargetDictionary={};for(let n=0,i=e.length;n<i;n++)r.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function lw(r){let t,e=r.extensions&&r.extensions[fe.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+If(e.attributes):t=r.indices+":"+If(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)t+=":"+If(r.targets[n]);return t}function If(r){let t="",e=Object.keys(r).sort();for(let n=0,i=e.length;n<i;n++)t+=e[n]+":"+r[e[n]]+";";return t}function nd(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function hw(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var uw=new bt,id=class{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new iw,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,s=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,s=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&s<98?this.textureLoader=new Ss(this.options.manager):this.textureLoader=new Kc(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new eo(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){let n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return nr(s,o,i),Is(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){t(o)})}).catch(e)}_markDefs(){let t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=e.length;i<s;i++){let a=e[i].joints;for(let o=0,c=a.length;o<c;o++)t[a[o]].isBone=!0}for(let i=0,s=t.length;i<s;i++){let a=t[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;let i=n.clone(),s=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,h]of a.children.entries())s(h,o.children[l])};return s(n,i),i.name+="_instance_"+t.uses[e]++,i}_invokeOne(t){let e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){let i=t(e[n]);if(i)return i}return null}_invokeAll(t){let e=Object.values(this.plugins);e.unshift(this);let n=[];for(let i=0;i<e.length;i++){let s=t(e[i]);s&&n.push(s)}return n}getDependency(t,e){let n=t+":"+e,i=this.cache.get(n);if(!i){switch(t){case"scene":i=this.loadScene(e);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(e)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(e)});break;case"accessor":i=this.loadAccessor(e);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(e)});break;case"buffer":i=this.loadBuffer(e);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(e)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(e)});break;case"skin":i=this.loadSkin(e);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(e)});break;case"camera":i=this.loadCamera(e);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(t,e)}),!i)throw new Error("Unknown type: "+t);break}this.cache.add(n,i)}return i}getDependencies(t){let e=this.cache.get(t);if(!e){let n=this,i=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(i.map(function(s,a){return n.getDependency(t,a)})),this.cache.add(t,e)}return e}loadBuffer(t){let e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[fe.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(s,a){n.load(Cs.resolveURL(e.uri,i.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){let e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){let i=e.byteLength||0,s=e.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(t){let e=this,n=this.json,i=this.json.accessors[t];if(i.bufferView===void 0&&i.sparse===void 0){let a=Pf[i.type],o=la[i.componentType],c=i.normalized===!0,l=new o(i.count*a);return Promise.resolve(new Mt(l,a,c))}let s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(a){let o=a[0],c=Pf[i.type],l=la[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0,v,m;if(d&&d!==u){let p=Math.floor(f/d),x="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count,b=e.cache.get(x);b||(v=new l(o,p*d,i.count*d/h),b=new Yr(v,d/h),e.cache.add(x,b)),m=new tr(b,c,f%d/h,g)}else o===null?v=new l(i.count*c):v=new l(o,f,i.count*c),m=new Mt(v,c,g);if(i.sparse!==void 0){let p=Pf.SCALAR,x=la[i.sparse.indices.componentType],b=i.sparse.indices.byteOffset||0,E=i.sparse.values.byteOffset||0,M=new x(a[1],b,i.sparse.count*p),y=new l(a[2],E,i.sparse.count*c);o!==null&&(m=new Mt(m.array.slice(),m.itemSize,m.normalized));for(let w=0,C=M.length;w<C;w++){let _=M[w];if(m.setX(_,y[w*c]),c>=2&&m.setY(_,y[w*c+1]),c>=3&&m.setZ(_,y[w*c+2]),c>=4&&m.setW(_,y[w*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(t){let e=this.json,n=this.options,s=e.textures[t].source,a=e.images[s],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(t,s,o)}loadTextureImage(t,e,n){let i=this,s=this.json,a=s.textures[t],o=s.images[e],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(e,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let f=(s.samplers||{})[a.sampler]||{};return h.magFilter=U0[f.magFilter]||Qe,h.minFilter=U0[f.minFilter]||Pi,h.wrapS=k0[f.wrapS]||Fn,h.wrapT=k0[f.wrapT]||Fn,i.associations.set(h,{textures:t}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(t,e){let n=this,i=this.json,s=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(u=>u.clone());let a=i.images[t],o=self.URL||self.webkitURL,c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(u){l=!0;let f=new Blob([u],{type:a.mimeType});return c=o.createObjectURL(f),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(f,d){let g=f;e.isImageBitmapLoader===!0&&(g=function(v){let m=new xn(v);m.needsUpdate=!0,f(m)}),e.load(Cs.resolveURL(u,s.path),g,void 0,d)})}).then(function(u){return l===!0&&o.revokeObjectURL(c),u.userData.mimeType=a.mimeType||hw(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[t]=h,h}assignTexture(t,e,n,i){let s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[fe.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[fe.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=s.associations.get(a);a=s.extensions[fe.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,c)}}return i!==void 0&&(a.colorSpace=i),t[e]=a,a})}assignFinalMaterial(t){let e=t.geometry,n=t.material,i=e.attributes.tangent===void 0,s=e.attributes.color!==void 0,a=e.attributes.normal===void 0;if(t.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new gi,bn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(t.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new ns,bn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||s||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),s&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}t.material=n}getMaterialType(){return Yt}loadMaterial(t){let e=this,n=this.json,i=this.extensions,s=n.materials[t],a,o={},c=s.extensions||{},l=[];if(c[fe.KHR_MATERIALS_UNLIT]){let u=i[fe.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),l.push(u.extendParams(o,s,e))}else{let u=s.pbrMetallicRoughness||{};if(o.color=new et(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],en),o.opacity=f[3]}u.baseColorTexture!==void 0&&l.push(e.assignTexture(o,"map",u.baseColorTexture,ue)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(e.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(e.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(t)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(t,o)})))}s.doubleSided===!0&&(o.side=de);let h=s.alphaMode||Lf.OPAQUE;if(h===Lf.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Lf.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==qe&&(l.push(e.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new rt(1,1),s.normalTexture.scale!==void 0)){let u=s.normalTexture.scale;o.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&a!==qe&&(l.push(e.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==qe){let u=s.emissiveFactor;o.emissive=new et().setRGB(u[0],u[1],u[2],en)}return s.emissiveTexture!==void 0&&a!==qe&&l.push(e.assignTexture(o,"emissiveMap",s.emissiveTexture,ue)),Promise.all(l).then(function(){let u=new a(o);return s.name&&(u.name=s.name),Is(u,s),e.associations.set(u,{materials:t}),s.extensions&&nr(i,u,s),u})}createUniqueName(t){let e=Ae.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){let e=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[fe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,e).then(function(c){return O0(c,o,e)})}let a=[];for(let o=0,c=t.length;o<c;o++){let l=t[o],h=lw(l),u=i[h];if(u)a.push(u.promise);else{let f;l.extensions&&l.extensions[fe.KHR_DRACO_MESH_COMPRESSION]?f=s(l):f=O0(new Rt,l,e),i[h]={primitive:l,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(t){let e=this,n=this.json,i=this.extensions,s=n.meshes[t],a=s.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let h=a[c].material===void 0?aw(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(e.loadGeometries(a)),Promise.all(o).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let d=0,g=h.length;d<g;d++){let v=h[d],m=a[d],p,x=l[d];if(m.mode===si.TRIANGLES||m.mode===si.TRIANGLE_STRIP||m.mode===si.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new Uc(v,x):new Ft(v,x),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===si.TRIANGLE_STRIP?p.geometry=Sf(p.geometry,Qc):m.mode===si.TRIANGLE_FAN&&(p.geometry=Sf(p.geometry,io));else if(m.mode===si.LINES)p=new Ii(v,x);else if(m.mode===si.LINE_STRIP)p=new Kr(v,x);else if(m.mode===si.LINE_LOOP)p=new Oc(v,x);else if(m.mode===si.POINTS)p=new fn(v,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&cw(p,s),p.name=e.createUniqueName(s.name||"mesh_"+t),Is(p,s),m.extensions&&nr(i,p,m),e.assignFinalMaterial(p),u.push(p)}for(let d=0,g=u.length;d<g;d++)e.associations.set(u[d],{meshes:t,primitives:d});if(u.length===1)return s.extensions&&nr(i,u[0],s),u[0];let f=new Pt;s.extensions&&nr(i,f,s),e.associations.set(f,{meshes:t});for(let d=0,g=u.length;d<g;d++)f.add(u[d]);return f})}loadCamera(t){let e,n=this.json.cameras[t],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new Ne(Ue.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(e=new Ms(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),Is(e,n),Promise.resolve(e)}loadSkin(t){let e=this.json.skins[t],n=[];for(let i=0,s=e.joints.length;i<s;i++)n.push(this._loadNodeShallow(e.joints[i]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let s=i.pop(),a=i,o=[],c=[];for(let l=0,h=a.length;l<h;l++){let u=a[l];if(u){o.push(u);let f=new bt;s!==null&&f.fromArray(s.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[l])}return new kc(o,c)})}loadAnimation(t){let e=this.json,n=this,i=e.animations[t],s=i.name?i.name:"animation_"+t,a=[],o=[],c=[],l=[],h=[];for(let u=0,f=i.channels.length;u<f;u++){let d=i.channels[u],g=i.samplers[d.sampler],v=d.target,m=v.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,x=i.parameters!==void 0?i.parameters[g.output]:g.output;v.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",x)),l.push(g),h.push(v))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let f=u[0],d=u[1],g=u[2],v=u[3],m=u[4],p=[];for(let x=0,b=f.length;x<b;x++){let E=f[x],M=d[x],y=g[x],w=v[x],C=m[x];if(E===void 0)continue;E.updateMatrix&&E.updateMatrix();let _=n._createAnimationTracks(E,M,y,w,C);if(_)for(let A=0;A<_.length;A++)p.push(_[A])}return new Zr(s,void 0,p)})}createNodeMesh(t){let e=this.json,n=this,i=e.nodes[t];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){let a=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(t){let e=this.json,n=this,i=e.nodes[t],s=n._loadNodeShallow(t),a=[],o=i.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));let c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(a),c]).then(function(l){let h=l[0],u=l[1],f=l[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,uw)});for(let d=0,g=u.length;d<g;d++)h.add(u[d]);return h})}_loadNodeShallow(t){let e=this.json,n=this.extensions,i=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];let s=e.nodes[t],a=s.name?i.createUniqueName(s.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(t)});return c&&o.push(c),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(l){return i._getNodeRef(i.cameraCache,s.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(t)}).forEach(function(l){o.push(l)}),this.nodeCache[t]=Promise.all(o).then(function(l){let h;if(s.isBone===!0?h=new Za:l.length>1?h=new Pt:l.length===1?h=l[0]:h=new Re,h!==l[0])for(let u=0,f=l.length;u<f;u++)h.add(l[u]);if(s.name&&(h.userData.name=s.name,h.name=a),Is(h,s),s.extensions&&nr(n,h,s),s.matrix!==void 0){let u=new bt;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=t,h}),this.nodeCache[t]}loadScene(t){let e=this.extensions,n=this.json.scenes[t],i=this,s=new Pt;n.name&&(s.name=i.createUniqueName(n.name)),Is(s,n),n.extensions&&nr(e,s,n);let a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++)s.add(c[h]);let l=h=>{let u=new Map;for(let[f,d]of i.associations)(f instanceof bn||f instanceof xn)&&u.set(f,d);return h.traverse(f=>{let d=i.associations.get(f);d!=null&&u.set(f,d)}),u};return i.associations=l(s),s})}_createAnimationTracks(t,e,n,i,s){let a=[],o=t.name?t.name:t.uuid,c=[];Ls[s.path]===Ls.weights?t.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(o);let l;switch(Ls[s.path]){case Ls.weights:l=is;break;case Ls.rotation:l=Di;break;case Ls.position:case Ls.scale:l=ss;break;default:switch(n.itemSize){case 1:l=is;break;case 2:case 3:default:l=ss;break}break}let h=i.interpolation!==void 0?rw[i.interpolation]:Qs,u=this._getArrayFromAccessor(n);for(let f=0,d=c.length;f<d;f++){let g=new l(c[f]+"."+Ls[s.path],e.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){let n=nd(e.constructor),i=new Float32Array(e.length);for(let s=0,a=e.length;s<a;s++)i[s]=e[s]*n;e=i}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){let i=this instanceof Di?td:gl;return new i(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function fw(r,t,e){let n=t.attributes,i=new Ge;if(n.POSITION!==void 0){let o=e.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new T(c[0],c[1],c[2]),new T(l[0],l[1],l[2])),o.normalized){let h=nd(la[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=t.targets;if(s!==void 0){let o=new T,c=new T;for(let l=0,h=s.length;l<h;l++){let u=s[l];if(u.POSITION!==void 0){let f=e.json.accessors[u.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){let v=nd(la[f.componentType]);c.multiplyScalar(v)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}r.boundingBox=i;let a=new Xn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=a}function O0(r,t,e){let n=t.attributes,i=[];function s(a,o){return e.getDependency("accessor",a).then(function(c){r.setAttribute(o,c)})}for(let a in n){let o=ed[a]||a.toLowerCase();o in r.attributes||i.push(s(n[a],o))}if(t.indices!==void 0&&!r.index){let a=e.getDependency("accessor",t.indices).then(function(o){r.setIndex(o)});i.push(a)}return pe.workingColorSpace!==en&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${pe.workingColorSpace}" not supported.`),Is(r,t),fw(r,t,e),Promise.all(i).then(function(){return t.targets!==void 0?ow(r,t.targets,e):r})}var ha=(function(){"use strict";var r="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",t="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",e=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(e)?t:r,s,a=WebAssembly.instantiate(o(i),{}).then(function(p){s=p.instance,s.exports.__wasm_call_ctors()});function o(p){for(var x=new Uint8Array(p.length),b=0;b<p.length;++b){var E=p.charCodeAt(b);x[b]=E>96?E-97:E>64?E-39:E+4}for(var M=0,b=0;b<p.length;++b)x[M++]=x[b]<60?n[x[b]]:(x[b]-60)*64+x[++b];return x.buffer.slice(0,M)}function c(p,x,b,E,M,y){var w=s.exports.sbrk,C=b+3&-4,_=w(C*E),A=w(M.length),I=new Uint8Array(s.exports.memory.buffer);I.set(M,A);var H=p(_,b,E,A,M.length);if(H==0&&y&&y(_,C,E),x.set(I.subarray(_,_+b*E)),w(_-w(0)),H!=0)throw new Error("Malformed buffer data: "+H)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],f=0;function d(p){var x={object:new Worker(p),pending:0,requests:{}};return x.object.onmessage=function(b){var E=b.data;x.pending-=E.count,x.requests[E.id][E.action](E.value),delete x.requests[E.id]},x}function g(p){for(var x="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(o(i))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+c.toString()+m.toString(),b=new Blob([x],{type:"text/javascript"}),E=URL.createObjectURL(b),M=0;M<p;++M)u[M]=d(E);URL.revokeObjectURL(E)}function v(p,x,b,E,M){for(var y=u[0],w=1;w<u.length;++w)u[w].pending<y.pending&&(y=u[w]);return new Promise(function(C,_){var A=new Uint8Array(b),I=f++;y.pending+=p,y.requests[I]={resolve:C,reject:_},y.object.postMessage({id:I,count:p,size:x,source:A,mode:E,filter:M},[A.buffer])})}function m(p){a.then(function(){var x=p.data;try{var b=new Uint8Array(x.count*x.size);c(s.exports[x.mode],b,x.count,x.size,x.source,s.exports[x.filter]),self.postMessage({id:x.id,count:x.count,action:"resolve",value:b},[b.buffer])}catch(E){self.postMessage({id:x.id,count:x.count,action:"reject",value:E})}})}return{ready:a,supported:!0,useWorkers:function(p){g(p)},decodeVertexBuffer:function(p,x,b,E,M){c(s.exports.meshopt_decodeVertexBuffer,p,x,b,E,s.exports[l[M]])},decodeIndexBuffer:function(p,x,b,E){c(s.exports.meshopt_decodeIndexBuffer,p,x,b,E)},decodeIndexSequence:function(p,x,b,E){c(s.exports.meshopt_decodeIndexSequence,p,x,b,E)},decodeGltfBuffer:function(p,x,b,E,M,y){c(s.exports[h[M]],p,x,b,E,s.exports[l[y]])},decodeGltfBufferAsync:function(p,x,b,E,M){return u.length>0?v(p,x,b,h[E],l[M]):a.then(function(){var y=new Uint8Array(p*x);return c(s.exports[h[E]],y,p,x,b,s.exports[l[M]]),y})}}})();var vl={uNearR:{value:0},uNearC:{value:new rt}},dw={broad:["CommonTree_1","CommonTree_2","CommonTree_3","CommonTree_4","CommonTree_5"],pine:["Pine_1","Pine_2","Pine_3","Pine_4","Pine_5"],plant:["Fern_1","Fern_1","Fern_1","Plant_1_Big"]},pw={broad:7.2,pine:9.2},B0=240,G0=1100,V0=55,xl=class{constructor(t){this.group=new Pt,t.add(this.group),this.ready=!1,this.radius=0,this.models={},this.rockGeos=null,this._last=new T(1e9,0,0),this._m4=new bt,this._q=new Wt,this._s=new T,this._p=new T,this._up=new T(0,1,0)}async load(t){let e=new Ds;e.setMeshoptDecoder(ha);let i=(await e.loadAsync(t)).scene;i.updateMatrixWorld(!0);let s=[];for(let a of i.children){let o=a.name,c=new Ge().setFromObject(a),l=c.max.y-c.min.y,h=[];a.traverse(u=>{if(!u.isMesh)return;let f=mw(u.geometry).applyMatrix4(u.matrixWorld);if(f.translate(0,-c.min.y-.05,0),/^Rock_/.test(o)){s.push(f);return}let d=u.material;d.side=de,d.map&&/leaf|leaves|grass/i.test(d.name+d.map.name)&&(d.alphaTest=.4,d.transparent=!1),d.envMapIntensity=.7,me(d);let g=[B0,G0].map((v,m)=>{let p=new we(f,d,v);return p.count=0,p.castShadow=m===0,p.receiveShadow=!0,p.frustumCulled=!1,p.layers.set(3),this.group.add(p),p});h.push(g)}),h.length&&(this.models[o]={parts:h,h:l})}return this.rockGeos=s.map(a=>{a.computeBoundingBox();let o=a.boundingBox,c=1/Math.max(o.max.x-o.min.x,o.max.z-o.min.z);return a.translate(-(o.min.x+o.max.x)/2,-o.min.y-.08,-(o.min.z+o.max.z)/2),a.scale(c,c,c),a}),this.ready=!0,this}setRadius(t){if(this.radius=t,vl.uNearR.value=this.ready?t:0,this._last.set(1e9,0,0),!t)for(let e in this.models)for(let n of this.models[e].parts)n[0].count=0,n[1].count=0}update(t,e){if(vl.uNearC.value.set(t.x,t.z),!this.ready||!this.radius||this._last.distanceToSquared(t)<4)return;this._last.copy(t);let n=this.radius,i=n*n,s={},a=V0*V0;for(let u in this.models)s[u]=[[],[]];for(let u of e.tiles.values()){let f=u.userData.near;if(!f)continue;let d=u.userData.box,g=Math.max(d[0]-t.x,0,t.x-d[2]),v=Math.max(d[1]-t.z,0,t.z-d[3]);if(!(g*g+v*v>i))for(let m of f){let p=m[1]-t.x,x=m[3]-t.z,b=p*p+x*x;if(b>i)continue;let E=dw[m[0]],M=E[Math.floor(m[6]*4.999)%E.length];if(!s[M])continue;let y=b>a?1:0,w=s[M][y];w.length<(y?G0:B0)&&w.push(m)}}let o=this._m4,c=this._q,l=this._s,h=this._p;for(let u in this.models){let{parts:f,h:d}=this.models[u],g=s[u],v=u.startsWith("Pine")?"pine":u.startsWith("Common")?"broad":"plant",m=v==="plant"?1:pw[v]/d;for(let p of f)p.forEach((x,b)=>{g[b].forEach((E,M)=>{c.setFromAxisAngle(this._up,E[5]);let y=E[4]*m;o.compose(h.set(E[1],E[2],E[3]),c,l.set(y,y*(.92+E[6]*.16),y)),x.setMatrixAt(M,o)}),x.count=g[b].length,x.instanceMatrix.needsUpdate=!0})}}};function mw(r){let t=r.clone();for(let e of Object.keys(t.attributes)){let n=t.attributes[e];if(n.array instanceof Float32Array&&!n.isInterleavedBufferAttribute)continue;let i=new Float32Array(n.count*n.itemSize),s=[n.getX,n.getY,n.getZ,n.getW];for(let a=0;a<n.count;a++)for(let o=0;o<n.itemSize;o++)i[a*n.itemSize+o]=s[o].call(n,a);t.setAttribute(e,new Mt(i,n.itemSize))}return t}var Y0=2,cd=1.3,gw=27.119*Y0,ad=-1.317*cd,K0=1.754*cd,vw=.8*cd/Y0,od=76,sd=10,xw=8,bw=6.333*Math.SQRT2,W0=[-.5/99,2.25/99],bl=.1,yw=4,uo=1.5,q0=120,J0=400,_w=8,Mw=6e3,Ew=Me.halfWidth+1.2,ww=Me.halfWidth+16,ld=7,yl=27,rd=12;function Tw(r){let t=(r%1+1)%1,e=Math.sin(Math.PI*t)**2;return{a:bl+(1-bl)*e,b:bl+(1-bl)*(1-e)}}function Z0(r,t){let e=new Rt;return e.setAttribute("position",new wt(r,3)),e.setAttribute("normal",new wt(r.map((n,i)=>i%3===1?1:0),3)),e.setIndex(t),e}function X0(r,t,e=0){let n=Math.round(2*r/t),i=[],s=[];for(let a=0;a<=n;a++)for(let o=0;o<=n;o++)i.push(-r+o*t,0,-r+a*t);for(let a=0;a<n;a++)for(let o=0;o<n;o++){let c=-r+o*t,l=-r+a*t;if(e&&c>=-e-1e-6&&c+t<=e+1e-6&&l>=-e-1e-6&&l+t<=e+1e-6)continue;let h=a*(n+1)+o,u=h+1,f=h+n+1,d=f+1;s.push(h,f,u,u,f,d)}return Z0(i,s)}function Sw(){let r=J0,t=Mw,e=[-r,0,-r,r,0,-r,r,0,r,-r,0,r,-t,0,-t,t,0,-t,t,0,t,-t,0,t],n=[];for(let i=0;i<4;i++){let s=i,a=(i+1)%4,o=i+4,c=(i+1)%4+4;n.push(s,o,a,a,o,c)}return Z0(e,n)}var j0=`
uniform sampler2D uWave;
uniform float uFrame, uFrameB, uWA, uWB, uSea, uLod, uT;
uniform vec3 uCamW;
uniform vec3 uRoad[${yl}];
const float TILE = ${gw.toFixed(3)};
const mat2 ROT = mat2(0.906, 0.423, -0.423, 0.906);      // ô sóng xoay ~25° so với trục thế giới
float oLod = 0.0;                                         // mức mipmap (fragment: theo khoảng cách)
// Mỗi ô 128 px gồm 100 px dữ liệu + viền lặp 14 px: mipmap ≤ 2.5 không trộn khung bên cạnh.
vec3 waveFrame(vec2 uv, float f) {
  vec2 c = fract(uv);
  vec2 o = vec2(mod(f, ${sd}.0), floor(f / ${sd}.0));
  return textureLod(uWave, (o * 128.0 + 14.5 + c * 99.0) / vec2(${sd*128}.0, ${xw*128}.0), oLod).rgb;
}
// một lớp: giữa khung f0 và f1, dời mẫu theo hướng trôi (bù chuyển động) rồi mới trộn
vec3 waveLayer(vec2 uv, float fr) {
  float f0 = floor(fr), t = fr - f0, f1 = mod(f0 + 1.0, ${od}.0);
  vec2 v = vec2(${W0[0].toFixed(5)}, ${W0[1].toFixed(5)});
  return mix(waveFrame(uv - v * t, f0), waveFrame(uv + v * (1.0 - t), f1), t);
}
vec3 waveOne(vec2 uv) {
  return 0.5 + ((waveLayer(uv, uFrame) - 0.5) * uWA + (waveLayer(uv, uFrameB) - 0.5) * uWB) / sqrt(uWA * uWA + uWB * uWB);
}
// (độ cao, dh/dx, dh/dz) tại điểm thế giới p (xz)
vec3 waveAt(vec2 p) {
  vec2 uv = ROT * p / TILE;
  vec2 s = sin(3.14159265 * fract(uv)); vec2 w = s * s;
  vec3 a = waveOne(uv) * (w.x * w.y) + waveOne(uv + vec2(0.5, 0.0)) * ((1.0 - w.x) * w.y)
         + waveOne(uv + vec2(0.0, 0.5)) * (w.x * (1.0 - w.y)) + waveOne(uv + 0.5) * ((1.0 - w.x) * (1.0 - w.y));
  float h = mix(${ad.toFixed(3)}, ${K0.toFixed(3)}, a.r);
  vec2 sl = (a.gb - 0.5) * ${(2*vw).toFixed(3)};
  return vec3(h, sl * ROT);                                // độ dốc theo trục thế giới
}
`;function Aw(r){let t=new Yt({color:16777215,roughness:.05,metalness:0,transparent:!0,depthWrite:!0});return t.onBeforeCompile=e=>{Object.assign(e.uniforms,r),e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
${j0}
varying vec3 vOW; varying float vDepth, vShore;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        vec3 ow = (modelMatrix * vec4(transformed, 1.0)).xyz;
        float camD = length(ow.xz - uCamW.xz);
        vec3 wv = waveAt(ow.xz);
        float fadeH = 1.0 - smoothstep(80.0, 112.0, camD);           // xa: chỉ còn pháp tuyến, mặt phẳng (lưới gần rộng ±120 m)
        transformed.y += wv.x * fadeH;
        // độ sâu ước lượng: khoảng cách tới tim đường + cao độ đường => cao độ đê (cùng công thức xẻ đường của terrain.js)
        float dm = 1e9, ry = uSea + 10.0;
        for (int i = 0; i < ${yl-1}; i++) {
          vec2 a = uRoad[i].xz, b = uRoad[i + 1].xz, ab = b - a;
          float t = clamp(dot(ow.xz - a, ab) / dot(ab, ab), 0.0, 1.0);
          float d = length(ow.xz - a - ab * t);
          if (d < dm) { dm = d; ry = mix(uRoad[i].y, uRoad[i + 1].y, t); }
        }
        float ground = mix(ry - 0.02, uSea - ${ld.toFixed(1)}, smoothstep(${Ew.toFixed(2)}, ${ww.toFixed(2)}, dm));
        vDepth = uSea + wv.x * fadeH - ground;
        vShore = 1.0 - smoothstep(30.0, 60.0, dm);
        vOW = ow; vOW.y += wv.x * fadeH;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
${j0}
varying vec3 vOW; varying float vDepth, vShore;
float oFoam = 0.0;
        float oHash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
        float oNoise(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
          return mix(mix(oHash(i), oHash(i + vec2(1.0, 0.0)), f.x), mix(oHash(i + vec2(0.0, 1.0)), oHash(i + vec2(1.0, 1.0)), f.x), f.y); }`).replace("#include <map_fragment>",`
        float camD = length(vOW.xz - uCamW.xz);
        oLod = clamp(log2(camD * camD / uLod), 0.0, 2.5);           // xa / nhìn xiên: mipmap thô hơn (ô 128 px có viền đệm => tối đa ~2.5)
        vec3 wv = waveAt(vOW.xz);
        float crest = smoothstep(0.55, 1.0, (wv.x - ${ad.toFixed(3)}) / ${(K0-ad).toFixed(3)}) * (1.0 - smoothstep(60.0, 200.0, camD));
        // bọt trôi theo thời gian liên tục (trước dùng uFrame => bọt nhảy mỗi lần vòng sóng quay về đầu)
        float n = oNoise(vOW.xz * 0.9 + uT * 0.45) * 0.6 + oNoise(vOW.xz * 2.7 - uT * 0.7) * 0.4;
        float dep = mix(20.0, vDepth, vShore);
        float shallow = 1.0 - smoothstep(0.5, 6.0, dep);
        // bọt: ven bờ (nước rất nông, vỗ theo nhịp sóng) + đầu ngọn sóng cao
        oFoam = clamp((1.0 - smoothstep(0.0, 0.9 + 0.5 * n, dep)) * (0.55 + 0.45 * n) + crest * smoothstep(0.62, 0.9, n) * 0.5, 0.0, 1.0);
        vec3 deep = vec3(0.010, 0.050, 0.065), turq = vec3(0.05, 0.30, 0.30);
        diffuseColor.rgb = mix(mix(deep, turq, shallow), vec3(0.75, 0.80, 0.82), oFoam);
        diffuseColor.a = mix(mix(1.0, 0.55, shallow), 0.95, oFoam);`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
roughnessFactor = mix(roughnessFactor + smoothstep(150.0, 1500.0, camD) * 0.12, 0.85, oFoam);`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
        {
          vec2 sl = wv.yz / (1.0 + camD / 400.0);                // xa: dịu pháp tuyến (đỡ lấp lánh răng cưa)
          vec3 nw = normalize(vec3(-sl.x, 1.0, -sl.y));
          normal = normalize((viewMatrix * vec4(nw, 0.0)).xyz);
        }`)},t.customProgramCacheKey=()=>"ocean",me(t)}var _l=class{constructor(t){this.group=new Pt,this.group.visible=!1,t.add(this.group),this.level=0,this.roadPts=Array.from({length:yl},()=>new T),this.u={uWave:{value:null},uFrame:{value:0},uFrameB:{value:0},uWA:{value:1},uWB:{value:0},uT:{value:0},uSea:{value:0},uLod:{value:3e3},uCamW:{value:new T},uRoad:{value:this.roadPts}},this.material=null,this._p={}}_build(){let t=new Ss().load("assets/tex/ocean-waves.png?v="+yw);t.flipY=!1,t.colorSpace=En,t.generateMipmaps=!0,t.minFilter=Pi,t.magFilter=Qe,this.u.uWave.value=t,this.material=Aw(this.u);for(let e of[X0(q0,uo),X0(J0,_w,q0),Sw()]){let n=new Ft(e,this.material);n.frustumCulled=!1,n.receiveShadow=!0,n.renderOrder=1,this.group.add(n)}}setMap(t,e=0){this.group.visible=t,this.level=e,t&&!this.material&&this._build()}update(t,e,n,i){if(!this.group.visible)return;this.group.position.set(Math.round(e.x/uo)*uo,this.level,Math.round(e.z/uo)*uo);let s=this.u,a=t/bw%1,o=Tw(a);s.uFrame.value=a*od,s.uT.value=t%1e3,s.uFrameB.value=(a+.5)%1*od,s.uWA.value=o.a,s.uWB.value=o.b,s.uSea.value=this.level,s.uCamW.value.copy(e),s.uLod.value=1500*Math.max(1,(e.y-this.level)/3);let c=this._p,l=Math.round(i/rd)*rd;for(let h=0;h<yl;h++)n.at(Math.max(0,l+(h-13)*rd),c),this.roadPts[h].set(c.x,c.y,c.z)}};var Q0=32,Rw=64,hd=8192,ze=Me.halfWidth,ng=ze+1.2,fo=ze+16,Cw=()=>{ze=Me.halfWidth,ng=ze+1.2,fo=ze+16},ud=1e6,ge=(r,t,e)=>{let n=Math.min(1,Math.max(0,(e-r)/(t-r)));return n*n*(3-2*n)},ke=r=>new et(r),$0={forest:{a:ke("#7fa443"),b:ke("#a9b85a"),c:ke("#5c8036"),snowLine:215,trees:!0},reed:{a:ke("#ad9b5c"),b:ke("#c5b37b"),c:ke("#8c8a50"),snowLine:240,trees:!1},mountain:{a:ke("#789a45"),b:ke("#9eaa5a"),c:ke("#557236"),snowLine:300,trees:!0},meadow:{a:ke("#6f9a4c"),b:ke("#86ad5c"),c:ke("#5c8541"),snowLine:400,trees:!1,bare:!0},sea:{a:ke("#cbb98c"),b:ke("#bba97c"),c:ke("#7f8f55"),snowLine:600,trees:!1,bare:!0},city:{a:ke("#77787a"),b:ke("#828280"),c:ke("#6c6e6c"),snowLine:900,trees:!1,bare:!0}},Pw=ke("#5f7f45"),Lw=ke("#3e5d2b"),tg=ke("#8a8072"),fd=ke("#6b6259"),Iw=ke("#eef2f6"),Dw=ke("#8f887c"),Fw=ke("#5f6c36"),eg={64:1,128:.5,256:.22,512:.08},Hw={64:1,128:.7,256:.4,512:.16},Ml=class{constructor(t,e,n){this.road=e,this.group=new Pt,t.add(this.group),this.tiles=new Map,this.view=1,this.keep=eg,this.queue=[],this.queued=new Set,this.iCar=0,this.uCover={value:0},this.mat=new Yt({vertexColors:!0,map:y0(n),roughness:.96,metalness:0,envMapIntensity:.8}),this.texU={uRock:{value:er("rock",n)},uRockN:{value:er("rock_n",n,{srgb:!1})},uGravel:{value:er("gravel",n)},uDirt:{value:er("dirt",n)}},this.mat.onBeforeCompile=s=>{s.uniforms.uCover=this.uCover,Object.assign(s.uniforms,this.texU),s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
varying float vUpY;
varying vec3 vTW;
varying vec3 vNW;
attribute vec2 aMix;
varying vec2 vMix;`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
vUpY = objectNormal.y;
vNW = objectNormal;
vMix = aMix;`).replace("#include <project_vertex>",`#include <project_vertex>
vTW = transformed;`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
          varying float vUpY; varying vec3 vTW; varying vec3 vNW; varying vec2 vMix;
          uniform float uCover;
          uniform sampler2D uRock, uRockN, uGravel, uDirt;`).replace("#include <map_fragment>",`
          float flatK = smoothstep(0.5, 0.78, vUpY);
          vec4 dTex = mix(texture2D(map, vec2(vTW.x + vTW.z, vTW.y * 1.6) / 6.0), texture2D(map, vTW.xz / 6.0), flatK);
          diffuseColor *= dTex;
          // vách dốc: ảnh đá thật (2 tỉ lệ để đỡ lặp), giữ tông màu đá của bảng màu (vColor)
          vec3 an = abs(normalize(vNW)); vec2 tw = an.xz / max(an.x + an.z, 1e-4);
          float rockK = 1.0 - smoothstep(0.5, 0.82, vUpY);
          vec2 uvX = vec2(vTW.z, vTW.y * 1.15), uvZ = vec2(vTW.x, vTW.y * 1.15);
          if (rockK > 0.002) {
            vec3 r1 = texture2D(uRock, uvX / 8.0).rgb * tw.x + texture2D(uRock, uvZ / 8.0).rgb * tw.y;
            vec3 r2 = texture2D(uRock, uvX / 31.0 + 0.37).rgb * tw.x + texture2D(uRock, uvZ / 31.0 + 0.37).rgb * tw.y;
            vec3 rk = r1 * (0.55 + 0.9 * r2);
            float rl = dot(rk, vec3(0.3, 0.59, 0.11));
            vec3 rockCol = mix(vColor.rgb * rl * 4.6, rk * 1.1, 0.12);
            diffuseColor.rgb = mix(diffuseColor.rgb, rockCol, rockK);
          }
          // sỏi đá vụn (lề đường, núi cao) và đất (đường đất trong rừng): chiếu từ trên xuống
          if (vMix.x > 0.002) diffuseColor.rgb = mix(diffuseColor.rgb, vColor.rgb * texture2D(uGravel, vTW.xz / 2.6).rgb * 1.75, vMix.x * flatK);
          if (vMix.y > 0.002) diffuseColor.rgb = mix(diffuseColor.rgb, texture2D(uDirt, vTW.xz / 3.4).rgb * mix(vec3(1.0), vColor.rgb * 2.2, 0.35), vMix.y * flatK);
          diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.86, 0.89, 0.93), uCover * smoothstep(0.55, 0.8, vUpY));`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
          if (rockK > 0.002) {
            vec3 N = normalize(vNW);
            vec3 tx = texture2D(uRockN, uvX / 8.0).xyz * 2.0 - 1.0, tz = texture2D(uRockN, uvZ / 8.0).xyz * 2.0 - 1.0;
            tx = vec3(tx.xy * 0.9 + N.zy, abs(tx.z) * N.x);
            tz = vec3(tz.xy * 0.9 + N.xy, abs(tz.z) * N.z);
            vec3 wn = normalize(tx.zyx * tw.x + tz.xyz * tw.y);
            normal = normalize(mix(normal, normalize((viewMatrix * vec4(wn, 0.0)).xyz), rockK));
          }`)},this.treeMat=new Yt({map:_0(),alphaTest:.45,side:de,roughness:.92});let i=s=>{Object.assign(s.uniforms,vl),s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
uniform float uNearR;
uniform vec2 uNearC;`).replace("#include <begin_vertex>",`#include <begin_vertex>
          vec3 ipos = (modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;
          transformed *= smoothstep(uNearR - 1.0, uNearR + 1.0, distance(ipos.xz, uNearC));`)};this.treeMat.onBeforeCompile=s=>{i(s),s.fragmentShader=s.fragmentShader.replace("#include <normal_fragment_begin>",Jt.normal_fragment_begin.replace("normal *= faceDirection;",""))},this.treeDepth=new Ka({depthPacking:af,map:this.treeMat.map,alphaTest:.45,side:de}),this.treeDepth.onBeforeCompile=i,me(this.mat),me(this.treeMat),this.geos={pine:H0(),broad:F0()},this.rockGeos=[0,1,2].map(s=>dd(s)),this.rockMat=new Yt({roughness:1,metalness:0,envMapIntensity:.35}),this.rockMat.onBeforeCompile=s=>{Object.assign(s.uniforms,this.texU),s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vBW;
varying vec3 vBN;`).replace("#include <project_vertex>",`#include <project_vertex>
          mat4 rockM = modelMatrix * instanceMatrix;
          vBW = (rockM * vec4(transformed, 1.0)).xyz;
          vBN = normalize(mat3(rockM) * objectNormal);`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vBW;
varying vec3 vBN;
uniform sampler2D uRock, uGravel;`).replace("#include <map_fragment>",`
          vec3 bw = pow(abs(normalize(vBN)), vec3(3.0)); bw /= bw.x + bw.y + bw.z;
          vec3 rt = texture2D(uRock, vBW.zy / 3.0).rgb * bw.x + texture2D(uGravel, vBW.xz / 1.6).rgb * bw.y + texture2D(uRock, vBW.xy / 3.0).rgb * bw.z;
          diffuseColor.rgb *= mix(vec3(dot(rt, vec3(0.3, 0.59, 0.11))), rt, 0.25) * 1.7;`)},me(this.rockMat),this._nd=ud,this._ny=0,this._nl=0,this._d=ud,this._rc=new et,this._white=new et(1,1,1)}setCar(t){this.iCar=Math.floor(t/Me.step)}_samples(t,e,n,i,s,a,o){let c=this.road.pts,l=[],h=Math.max(0,a),u=Math.min(c.length-1,o);for(let f=h-h%s;f<=u;f+=s){if(f<h)continue;let d=c[f];d.x>=t&&d.x<=n&&d.z>=e&&d.z<=i&&l.push(f)}return l}_nearFine(t,e,n){let i=this.road.pts,s=1/0,a=-1;for(let h=0;h<n.length;h++){let u=i[n[h]],f=t-u.x,d=e-u.z,g=f*f+d*d;g<s&&(s=g,a=n[h])}if(a<0)return!1;let o=1/0,c=i[a].y,l=0;for(let h=a-1;h<=a;h++){if(h<0||h+1>=i.length)continue;let u=i[h],f=i[h+1],d=f.x-u.x,g=f.z-u.z,v=d*d+g*g,m=Math.max(0,Math.min(1,((t-u.x)*d+(e-u.z)*g)/v)),p=t-u.x-d*m,x=e-u.z-g*m,b=Math.hypot(p,x);b<o&&(o=b,c=u.y+(f.y-u.y)*m,l=(p*-g+x*d)/Math.sqrt(v))}return this._nd=o,this._ny=c,this._nl=l,this._ns=a*Me.step,!0}_height(t,e,n,i){let s=this.road.pts,a=_e.side,o=1/0,c=0,l=0;for(let g=0;g<i.length;g++){let v=i[g],m=s[v],p=t-m.x,x=e-m.z,b=p*p+x*x;if(b<o&&(o=b),a&&v+1<s.length){let E=s[v+1],M=E.x-m.x,y=E.z-m.z,w=Math.hypot(M,y)||1,C=(p*-y+x*M)/w,_=1/(b*b+1e4);c+=_,l+=_*C}}let h=Math.sqrt(o),u=bi(t,e)+el(t,e),f=0;this._d=ud,this._s=-1,this._rel=0;let d=h-70<fo&&this._nearFine(t,e,n);if(_e.sea)u=(_e.seaLevel??-10)-ld+el(t,e)*.6,h>400&&(u+=Math.max(0,nl(t,e)/_e.mount-.42)*2.6*_e.mount*ge(400,1200,h));else if(a){let g=c>0?l/c:0;d&&(g=this._nl+(g-this._nl)*ge(25,60,this._nd));let v=-g,m=.75+.5*Ce(t/220+4.4,e/220+9.9);if(v>0){u+=(360*(1-Math.exp(-v/210))+.2*v)*m;let p=ge(2,18,v)*(1-.5*ge(350,900,v));if(p>0){let x=1-Math.abs(Ce(t/42+1.7,e/42+6.3)*2-1),b=1-Math.abs(Ce(t/16+8.1,e/16+2.9)*2-1);f=(x*x-.45)*42+(b*b-.45)*15+(Ce(t/85+3.3,e/85+7.7)-.5)*34,u+=f*p,this._rel=f*Math.max(p,.5);let E=u/10,M=E-Math.floor(E);u+=((Math.floor(E)+ge(.3,.7,M))*10-u)*.75*p*ge(.25,.55,Ce(t/120+5.1,e/120+1.3))}}else u-=250*(1-Math.exp(v/170));u+=el(t*1.7,e*1.7)*.8,Math.abs(v)>650&&(u+=nl(t,e)*ge(650,1500,Math.abs(v)))}else h>500&&(u+=nl(t,e)*ge(500,1600,h));if(d){this._d=this._nd,this._s=this._ns;let g=ge(ng,fo,this._nd),v=this._ny-.02;u=v+(u-v)*g,a&&this._nl<0&&(u=Math.max(v,u+Math.max(f,-8)*ge(ze+1.5,ze+8,this._nd)*(1-g)))}return u}heightAt(t,e){let n=fo+80,i=this._samples(t-n,e-n,t+n,e+n,1,this.iCar-300,this.iCar+300),s=this._samples(t-1700,e-1700,t+1700,e+1700,25,this.iCar-2500,this.iCar+4e3);return this._height(t,e,i,s)}_color(t,e,n,i,s,a,o,c=0){let l=$0[_e.id],h=Ce(t/150+2.3,e/150+6.1),u=Ce(t/37+8.8,e/37+1.2);o.copy(l.a).lerp(l.b,ge(.3,.75,h)).lerp(l.c,ge(.45,.9,u)*.55),_e.id==="city"&&o.lerp(Pw,ge(1,20,n)),l.trees&&o.lerp(Lw,ge(.44,.66,Ce(t/260+3.1,e/260+8.7))*.6);let f=a>=0?this.road.dirtAt(a):0,d=f*(1-ge(ze+1,ze+28,s));d>0&&o.lerp(Fw,d*.75);let g=1-i;o.lerp(fd,ge(110,220,n)*.45);let v=ge(.22,.4,g);if(v>0){let b=.72+.4*Ce((t+e)/9+1.3,n/2.6)+.18*(u-.5);this._rc.copy(u>.5?tg:fd).multiplyScalar(b),o.lerp(this._rc,v)}let m=ge(l.snowLine+(h-.5)*60,l.snowLine+50,n)*(1-ge(.5,.75,g));o.lerp(Iw,m);let p=(1-(_e.id==="forest"?ge(ze+.2,ze+1.1,s):ge(ze+1,ze+3.2,s)))*(1-f);o.lerp(Dw,p);let x=_e.id==="mountain"?ge(70,190,n)*(1-v)*(1-m)*ge(.35,.7,u+.3*h)*.8:0;return this._mixG=Math.max(p,x),this._mixD=d*ge(.25,.6,Ce(t/9+5.5,e/9+2.2)*.7+.5*(1-ge(ze+1,ze+9,s))),c&&o.multiplyScalar(.62+.58*ge(-16,16,c)),o}_build(t,e,n){let i=Q0,s=n/i,a=i+3,o=fo+80,c=this.iCar-2500,l=this.iCar+4e3,h=this._samples(t-o,e-o,t+n+o,e+n+o,1,c,l),u=this._samples(t-1700,e-1700,t+n+1700,e+n+1700,25,c,l),f=new Float32Array(a*a),d=new Float32Array(a*a),g=new Float32Array(a*a),v=new Float32Array(a*a);for(let k=0;k<a;k++)for(let O=0;O<a;O++)f[k*a+O]=this._height(t+(O-1)*s,e+(k-1)*s,h,u),d[k*a+O]=this._d,g[k*a+O]=this._s,v[k*a+O]=this._rel;let m=(i+1)*(i+1),p=4*(i+1),x=new Float32Array((m+p)*3),b=new Float32Array((m+p)*3),E=new Float32Array((m+p)*3),M=new Float32Array((m+p)*2),y=new Float32Array((m+p)*2),w=new et,C=new Float32Array(m);for(let k=0;k<=i;k++)for(let O=0;O<=i;O++){let G=(k+1)*a+(O+1),X=k*(i+1)+O,K=t+O*s,it=e+k*s,z=f[G],Q=f[G-1]-f[G+1],lt=2*s,ht=f[G-a]-f[G+a],yt=Math.hypot(Q,lt,ht);Q/=yt,lt/=yt,ht/=yt,C[X]=lt,x.set([K,z,it],X*3),b.set([Q,lt,ht],X*3),this._color(K,it,z,lt,d[G],g[G],w,v[G]),E.set([w.r,w.g,w.b],X*3),y[X*2]=this._mixG,y[X*2+1]=this._mixD,M.set([K/6,it/6],X*2)}let _=[];for(let k=0;k<i;k++)for(let O=0;O<i;O++){let G=k*(i+1)+O,X=G+1,K=G+i+1,it=K+1;_.push(G,K,X,X,K,it)}let A=s*1.5+1,I=[Array.from({length:i+1},(k,O)=>O),Array.from({length:i+1},(k,O)=>i*(i+1)+O),Array.from({length:i+1},(k,O)=>O*(i+1)),Array.from({length:i+1},(k,O)=>O*(i+1)+i)],H=m;for(let k of I){let O=H;for(let G of k)x.set([x[G*3],x[G*3+1]-A,x[G*3+2]],H*3),b.set([b[G*3],b[G*3+1],b[G*3+2]],H*3),E.set([E[G*3],E[G*3+1],E[G*3+2]],H*3),y[H*2]=y[G*2],y[H*2+1]=y[G*2+1],M.set([M[G*2],M[G*2+1]],H*2),H++;for(let G=0;G<i;G++){let X=k[G],K=k[G+1],it=O+G,z=O+G+1;_.push(X,it,K,K,it,z,X,K,it,K,z,it)}}let N=new Rt;N.setAttribute("position",new Mt(x,3)),N.setAttribute("normal",new Mt(b,3)),N.setAttribute("color",new Mt(E,3)),N.setAttribute("aMix",new Mt(y,2)),N.setAttribute("uv",new Mt(M,2)),N.setIndex(_),N.computeBoundingSphere();let L=new Ft(N,this.mat);L.receiveShadow=n<=256,L.castShadow=n<=64;let P=new Pt;P.add(L),P.userData.box=[t,e,t+n,e+n];let D=this._trees(t,e,n,s,a,f,d,C,g,P);for(let k of D)P.add(k);return this.group.add(P),P}_bil(t,e,n,i,s,a,o){let c=(a-i)/n+1,l=(o-s)/n+1,h=Math.max(0,Math.min(e-2,Math.floor(c))),u=Math.max(0,Math.min(e-2,Math.floor(l))),f=c-h,d=l-u,g=t[u*e+h],v=t[u*e+h+1],m=t[(u+1)*e+h],p=t[(u+1)*e+h+1];return g+(v-g)*f+(m-g)*d+(g-v-m+p)*f*d}_nearest(t,e,n,i,s,a,o){let c=Math.min(e-1,Math.max(0,Math.round((a-i)/n+1))),l=Math.min(e-1,Math.max(0,Math.round((o-s)/n+1)));return t[l*e+c]}_trees(t,e,n,i,s,a,o,c,l,h){let u=$0[_e.id],f=this.keep[n]||0;if(!f)return[];let d=Q0,g=_e.id==="mountain",v=[],m=[],p=[],x=(w,C)=>c[Math.min(d,Math.round((C-e)/i))*(d+1)+Math.min(d,Math.round((w-t)/i))],b=n<=128?[]:null;h&&(h.userData.near=b);let E=[{cell:8,seed:0}];if(this.road.dirt&&n<=128){let w=!1;for(let C=0;C<l.length&&!w;C+=7)l[C]>=0&&this.road.dirtAt(l[C])>.05&&(w=!0);w&&E.push({cell:4,seed:1})}for(let{cell:w,seed:C}of E){let _=C*15485863;for(let A=Math.floor(e/w);A*w<e+n;A++)for(let I=Math.floor(t/w);I*w<t+n;I++){if($t(I+_,A)>f)continue;let H=(I+$t(I+7919+_,A))*w,N=(A+$t(I+_,A+7919))*w;if(H<t||H>=t+n||N<e||N>=e+n)continue;let L=this._bil(o,s,i,t,e,H,N),P=L<60?this._nearest(l,s,i,t,e,H,N):-1,D=P>=0?this.road.dirtAt(P):0,k=u.trees?ge(.44,.66,Ce(H/260+3.1,N/260+8.7))*.92+.03:u.bare?0:.012;C?k=D*.85*(1-ge(ze+20,ze+45,L)):k=Math.max(k,D*.9*(1-ge(ze+25,ze+60,L)));let O=this._bil(a,s,i,t,e,H,N),G=x(H,N);if($t(I+104729+_,A+31)>k||L<ze+7.5-5*D+(C?$t(I,A+3)*1.5:0)||O>u.snowLine-20||G<(g?.66:.8))continue;let X=(.75+$t(I+3+_,A+5)*.7)*(n>=256?1.3:1)*(D>.3?1.15:1),K=u.trees?$t(I+11+_,A+13)<(g?.9:.58+ge(60,180,O)*.35):!1,it=[H,O-.2,N,X,$t(I+17+_,A+19)*6.283,$t(I+23+_,A+29)];(K?v:m).push(it),b&&b.push([K?"pine":"broad",...it])}}if(n<=256)for(let C=Math.floor(e/22);C*22<e+n;C++)for(let _=Math.floor(t/22);_*22<t+n;_++){if($t(_+911,C+577)>f)continue;let A=(_+$t(_+31,C+977))*22,I=(C+$t(_+977,C+31))*22;if(A<t||A>=t+n||I<e||I>=e+n)continue;let H=this._bil(o,s,i,t,e,A,I);if(H<ze+3)continue;let N=x(A,I),L=H<60?this._nearest(l,s,i,t,e,A,I):-1,P=L>=0?this.road.dirtAt(L):0,D=g&&N<=.5,k=g?H<ze+14?.45:D?.32:N<.93?.3:.06:P*.2;if($t(_+3331,C+7177)>k)continue;let O=(g?D?3:1.6:.8)+Math.pow($t(_+41,C+43),1.6)*(g?D?7:5.5:1.6),G=3+Math.floor($t(_+7,C+9)*5);for(let X=0;X<G;X++){let K=$t(_*7+X,C+101)*6.283,it=(X===0?0:.6+$t(_+X*13,C*3+7)*1.4)*O,z=A+Math.cos(K)*it,Q=I+Math.sin(K)*it;if(z<t-4||z>=t+n+4||Q<e-4||Q>=e+n+4||this._bil(o,s,i,t,e,z,Q)<ze+2)continue;let lt=O*(X===0?1:.35+$t(_+X,C+X*5)*.55),ht=this._bil(a,s,i,t,e,z,Q);p.push([z,ht-lt*(D?.35:.22),Q,lt,$t(_+X*3,C+53)*6.283,$t(_+59+X,C+61)])}}if(b&&n<=64&&u.trees)for(let C=Math.floor(e/3.5);C*3.5<e+n;C++)for(let _=Math.floor(t/3.5);_*3.5<t+n;_++){let A=(_+$t(_+5153,C))*3.5,I=(C+$t(_,C+5153))*3.5;if(A<t||A>=t+n||I<e||I>=e+n)continue;let H=this._bil(o,s,i,t,e,A,I);if(H<ze+1.6)continue;let N=H<60?this._nearest(l,s,i,t,e,A,I):-1,L=N>=0?this.road.dirtAt(N):0,P=(g?.07:.1+.18*ge(.44,.66,Ce(A/260+3.1,I/260+8.7)))+L*.35;if($t(_+6007,C+6011)>P||x(A,I)<.75)continue;let D=this._bil(a,s,i,t,e,A,I);b.push(["plant",A,D-.05,I,.6+$t(_+61,C+67)*.7,$t(_+71,C+73)*6.283,$t(_+79,C+83)])}let M=[],y=(w,C,_,A)=>{if(!w.length)return;let I=new we(C,_,w.length),H=new bt,N=new Wt,L=new T,P=new T,D=new T(0,1,0),k=new et,O=new Li;w.forEach(([G,X,K,it,z,Q],lt)=>{A?N.setFromEuler(O.set((Q-.5)*.5,z,(Q-.5)*.4)):N.setFromAxisAngle(D,z),H.compose(P.set(G,X,K),N,L.set(it,it*(A?.75+Q*.45:.9+Q*.3),it)),I.setMatrixAt(lt,H),A?k.copy(Q>.5?tg:fd).multiplyScalar(1.15+Q*.3):k.setHSL(.2+(Q-.5)*.12,.45,.62+Q*.2).lerp(this._white,.55),I.setColorAt(lt,k)}),I.castShadow=n<=64,I.receiveShadow=A&&n<=128,A||(I.customDepthMaterial=this.treeDepth),I.layers.set(3),M.push(I)};if(y(v,this.geos.pine,this.treeMat),y(m,this.geos.broad,this.treeMat),p.length){let w=this.rockGeos.map(()=>[]);p.forEach(C=>w[Math.floor(C[5]*(w.length-.001))].push(C)),w.forEach((C,_)=>y(C,this.rockGeos[_],this.rockMat,!0))}return M}_dispose(t){this.group.remove(t),t.traverse(e=>{e.isInstancedMesh?e.dispose():e.isMesh&&e.geometry.dispose()})}reset(){Cw();for(let t of this.tiles.values())this._dispose(t);this.tiles.clear(),this.queue.length=0,this.queued.clear()}update(t,e=6){let n=new Map,i=Math.round(t.x/1024)*1024-hd/2,s=Math.round(t.z/1024)*1024-hd/2,a=(o,c,l)=>{let h=Math.min(Math.max(t.x,o),o+l),u=Math.min(Math.max(t.z,c),c+l),f=Math.hypot(t.x-h,t.z-u);if(l>Rw&&f<l*this.view){let d=l/2;a(o,c,d),a(o+d,c,d),a(o,c+d,d),a(o+d,c+d,d)}else n.set(l+"|"+o+"|"+c,[o,c,l,f])};a(i,s,hd);for(let[o,c]of n)!this.tiles.has(o)&&!this.queued.has(o)&&(this.queue.push([o,...c]),this.queued.add(o));if(this.queue.length){this.queue.sort((c,l)=>c[3]-l[3]||c[4]-l[4]);let o=performance.now();for(;this.queue.length&&performance.now()-o<e;){let[c,l,h,u]=this.queue.shift();this.queued.delete(c),!(!n.has(c)||this.tiles.has(c))&&this.tiles.set(c,this._build(l,h,u))}}if(!this.queue.length)for(let[o,c]of this.tiles)n.has(o)||(this._dispose(c),this.tiles.delete(o))}prime(t){this.update(t,1e9)}setView(t,e){t!==this.view&&(this.view=t,this.keep=t>1?Hw:eg,this.tiles.size&&(this.reset(),e&&this.prime(e)))}apply(t){this.uCover.value=t.cover,this.mat.color.setScalar((1-.2*t.wet)*(1-.3*t.dark));let e=.2*t.cover*t.dayF;this.treeMat.emissive.setRGB(e,e*1.02,e*1.05)}};function dd(r,t=3){let e=new $a(1,t);e.deleteAttribute("normal"),e.deleteAttribute("uv"),e=L0(e);let n=e.attributes.position,i=new T;for(let s=0;s<n.count;s++){i.fromBufferAttribute(n,s);let a=Ce(i.x*1.7+r*13.1,i.z*1.7+i.y*1.3+r*7.7)*.45+Ce(i.x*4.1+r,i.y*4.3-i.z*2.1)*.18;i.multiplyScalar(.72+a),i.y=Math.max(i.y,-.25),n.setXYZ(s,i.x,i.y,i.z)}return e.computeVertexNormals(),e}var pd=`
  uniform float uExposure;
  vec3 dispToLin(vec3 d) {
    vec3 x = clamp(mix(pow((d + 0.055) / 1.055, vec3(2.4)), d / 12.92, step(d, vec3(0.04045))), 0.0, 0.985);
    vec3 A = 1.0 - 0.983729 * x, B = 0.0245786 - 0.432951 * x, C = -(0.000090537 + 0.238081 * x);
    return (-B + sqrt(B * B - 4.0 * A * C)) / (2.0 * A) * 0.6 / uExposure;
  }`;function ig(r,t=1){let e=new Float32Array(r*t*3);for(let n=0;n<r;n++){let i=Math.random(),s=Math.random(),a=Math.random();for(let o=0;o<t;o++)e.set([i,s,a],(n*t+o)*3)}return e}var Nw=`
  attribute vec3 seed;
  uniform float uTime, uSize, uScale, uFall, uSway;
  uniform vec3 uCam, uBox;
  uniform vec2 uDrift;
  varying float vA;
  void main() {
    vec3 p = seed * uBox;
    p.y -= uTime * uFall * (0.6 + seed.z * 0.9);
    p.xz += uDrift * uTime * (0.7 + seed.x * 0.6);
    p.x += sin(uTime * 0.6 + seed.y * 30.0) * uSway;
    p.z += cos(uTime * 0.5 + seed.x * 30.0) * uSway;
    p.y += sin(uTime * 1.3 + seed.x * 40.0) * uSway * 0.4;
    vec3 rel = mod(p - uCam, uBox);
    vec3 w = uCam + rel - uBox * 0.5;
    vec3 e = abs(rel / uBox - 0.5) * 2.0;
    vA = 1.0 - smoothstep(0.7, 1.0, max(max(e.x, e.y), e.z));
    vec4 mv = viewMatrix * vec4(w, 1.0);
    gl_PointSize = clamp(uSize * (0.6 + seed.y) * uScale / -mv.z, 1.0, 14.0);
    gl_Position = projectionMatrix * mv;
  }`,Uw=`
  uniform float uOpacity, uLight; uniform vec3 uColor; varying float vA;
  ${pd}
  void main() {
    float r = length(gl_PointCoord - 0.5) * 2.0;
    float a = smoothstep(1.0, 0.25, r);
    gl_FragColor = vec4(dispToLin(uColor * uLight), a * uOpacity * vA);
  }`,El=class{constructor(t){this.time=0;let e=new T(40,26,40),n=()=>({uTime:{value:0},uCam:{value:new T},uBox:{value:e.clone()},uOpacity:{value:0},uLight:{value:1},uExposure:{value:.6}}),i=14e3,s=new Rt;s.setAttribute("position",new Mt(new Float32Array(i*2*3),3)),s.setAttribute("seed",new Mt(ig(i,2),3));let a=new Float32Array(i*2);for(let c=0;c<i;c++)a[c*2+1]=1;s.setAttribute("tail",new Mt(a,1)),this.rain=new Ii(s,new ye({uniforms:{...n(),uSpeed:{value:24},uLen:{value:1.1},uWind:{value:new rt(2,1)},uCarInv:{value:new bt},uCarHalf:{value:new T}},transparent:!0,depthWrite:!1,vertexShader:`
        attribute vec3 seed; attribute float tail;
        uniform float uTime, uSpeed, uLen; uniform vec3 uCam, uBox; uniform vec2 uWind;
        varying float vA;
        varying vec3 vWorld;
        void main() {
          vec3 p = seed * uBox;
          p.y -= uTime * uSpeed;
          p.xz += uWind * uTime;
          vec3 rel = mod(p - uCam, uBox);
          vec3 w = uCam + rel - uBox * 0.5;
          vec3 d = normalize(vec3(uWind.x, -uSpeed, uWind.y));
          w -= d * uLen * tail;
          vec3 e = abs(rel / uBox - 0.5) * 2.0;
          vA = (1.0 - smoothstep(0.7, 1.0, max(max(e.x, e.y), e.z))) * (1.0 - 0.55 * tail);
          vWorld = w;
          gl_Position = projectionMatrix * viewMatrix * vec4(w, 1.0);
        }`,fragmentShader:`
        uniform float uOpacity, uLight; varying float vA;
        varying vec3 vWorld; uniform mat4 uCarInv; uniform vec3 uCarHalf;
        ${pd}
        void main() {
          vec3 local = (uCarInv * vec4(vWorld, 1.0)).xyz - vec3(0.0, uCarHalf.y, 0.0);
          if (all(lessThan(abs(local), uCarHalf))) discard;
          gl_FragColor = vec4(dispToLin(vec3(0.78, 0.84, 0.92) * uLight), uOpacity * vA);
        }`})),this.rain.frustumCulled=!1,this.rain.layers.set(3),this.rain.renderOrder=10,this.rain.visible=!1,t.add(this.rain);let o=(c,l,h)=>{let u=new Rt;u.setAttribute("position",new Mt(new Float32Array(c*3),3)),u.setAttribute("seed",new Mt(ig(c),3));let f=new fn(u,new ye({uniforms:{...n(),uScale:{value:400},uColor:{value:new et(...h)},...l},transparent:!0,depthWrite:!1,vertexShader:Nw,fragmentShader:Uw}));return f.frustumCulled=!1,f.layers.set(3),f.renderOrder=10,f.visible=!1,t.add(f),f};this.snow=o(1e4,{uSize:{value:.09},uFall:{value:1.6},uSway:{value:.9},uDrift:{value:new rt}},[.96,.98,1]),this.drift=o(2600,{uSize:{value:.05},uFall:{value:.12},uSway:{value:.25},uDrift:{value:new rt}},[.95,.9,.78])}setCar(t,e){t.updateWorldMatrix(!0,!1);let n=this.rain.material.uniforms;n.uCarInv.value.copy(t.matrixWorld).invert(),n.uCarHalf.value.set(e.width/2,e.height/2,e.length/2)}update(t,e,n,i){this.time+=t;let s=n.windDir.clone().multiplyScalar(1.5+n.wind*11);for(let l of[this.rain,this.snow,this.drift]){let h=l.material.uniforms;h.uTime.value=this.time,h.uCam.value.copy(e),h.uLight.value=n.light,h.uExposure.value=n.exposure||.6}let a=this.rain.material.uniforms;a.uOpacity.value=.55*n.rain*(1+.25*n.dark),a.uWind.value.copy(s),this.rain.visible=n.rain>.02;let o=this.snow.material.uniforms;o.uOpacity.value=.95*n.snow,o.uScale.value=i*.5,o.uDrift.value.copy(s).multiplyScalar(.35),this.snow.visible=n.snow>.02;let c=this.drift.material.uniforms;c.uOpacity.value=.8*n.drift,c.uScale.value=i*.5,c.uDrift.value.copy(s).multiplyScalar(.9),this.drift.visible=n.drift>.02}};var md=Math.PI/180,On=(r,t,e)=>Math.min(e,Math.max(t,r)),Yn=(r,t,e)=>{let n=On((e-r)/(t-r),0,1);return n*n*(3-2*n)},sg={clear:{fog:42e-5,overcast:0,clouds:.52,sun:1,rain:0,snow:0,wet:0,cover:0,wind:.3,dark:0,tint:"#b9d6ee"},cloudy:{fog:9e-4,overcast:.75,clouds:.86,sun:.3,rain:0,snow:0,wet:0,cover:0,wind:.38,dark:.12,tint:"#a6b1bb"},windy:{fog:6e-4,overcast:.2,clouds:.62,sun:.85,rain:0,snow:0,wet:0,cover:0,wind:.95,dark:0,tint:"#b4c6d8"},rain:{fog:.0016,overcast:1,clouds:1,sun:.1,rain:.85,snow:0,wet:1,cover:0,wind:.5,dark:.35,tint:"#7a858f"},storm:{fog:.0027,overcast:1,clouds:1,sun:.03,rain:1,snow:0,wet:1,cover:0,wind:1,dark:1,tint:"#3f4852"},snow:{fog:.0019,overcast:.85,clouds:1,sun:.35,rain:0,snow:1,wet:0,cover:1,wind:.32,dark:.1,tint:"#d3dbe2"},fog:{fog:.0066,overcast:.55,clouds:.5,sun:.3,rain:0,snow:0,wet:.2,cover:0,wind:.08,dark:.05,tint:"#c4c9cd"}},kw=1.5,Ow=["fog","overcast","clouds","sun","rain","snow","wet","cover","wind","dark"],zw=[[-18,"#040a1a","#08142c","#122244","#122244","#000000"],[-9,"#06102e","#0e1d47","#1f2d5a","#363562","#24182c"],[-4,"#122052","#2a3c79","#67588d","#d06e7a","#a24a40"],[0,"#1d3d80","#4868ab","#e3987c","#ff8a48","#ff7030"],[4,"#2453a0","#6286c4","#f0bd92","#ffb36c","#ff9a52"],[10,"#2a64b4","#719fd9","#f1d9bd","#ffd59c","#ffcf88"],[22,"#2468c8","#5b9be3","#c6def3","#e1edf5","#fff1d6"],[50,"#1e5fc4","#4f92e0","#b4d4f2","#d2e5f3","#fff7e6"]].map(([r,...t])=>[r,...t.map(e=>new et(e))]),rg=2.15;function cg(r,t,e){let n=t/.6,i=r.r*n,s=r.g*n,a=r.b*n,o=.59719*i+.35458*s+.04823*a,c=.076*i+.90834*s+.01566*a,l=.0284*i+.13383*s+.83777*a,h=v=>(v*(v+.0245786)-90537e-9)/(v*(.983729*v+.432951)+.238081),u=h(o),f=h(c),d=h(l),g=v=>(v=Math.min(1,Math.max(0,v)),v<=.0031308?12.92*v:1.055*Math.pow(v,1/2.4)-.055);return e.setRGB(g(1.60475*u-.53108*f-.07367*d),g(-.10208*u+1.10813*f-.00605*d),g(-.00327*u-.07276*f+1.07602*d))}var wl=new et;function Bw(r,t,e){let n=a=>(a=Math.min(.985,Math.max(0,a)),a<=.04045?a/12.92:Math.pow((a+.055)/1.055,2.4)),i=a=>{let o=1-.983729*a,c=.0245786-.432951*a,l=-(90537e-9+.238081*a);return(-c+Math.sqrt(c*c-4*o*l))/(2*o)*.6/t},s=[n(r.r),n(r.g),n(r.b)];e.setRGB(i(s[0]),i(s[1]),i(s[2]));for(let a=0;a<4;a++){cg(e,t,wl);let o=[n(wl.r),n(wl.g),n(wl.b)];e.setRGB(e.r*s[0]/Math.max(o[0],1e-5),e.g*s[1]/Math.max(o[1],1e-5),e.b*s[2]/Math.max(o[2],1e-5))}return e}var Gw=`
  varying vec3 vDir;
  void main() { vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,Vw=`
  uniform vec3 uZenith, uMid, uHorizon, uBand, uSunCol, uSunDir;
  uniform float uGlow, uDisc, uBandAmt, uScale;
  uniform vec4 uGround;                                                     // rgb + độ phủ: mặt đất tối dưới chân trời (chỉ khi chụp môi trường cho xe)
  uniform vec3 uVeilCol; uniform vec2 uVeil;                                // sương phủ bầu trời: (độ đậm, độ cao)
  uniform vec3 uMoonDir, uMoonCol; uniform float uMoon;                     // mặt trăng: hướng, màu (HDR), độ hiện
  varying vec3 vDir;
  void main() {
    vec3 d = normalize(vDir);
    float h = max(d.y, 0.0);
    vec3 col = mix(uHorizon, uMid, smoothstep(0.0, 0.24, h));
    col = mix(col, uZenith, smoothstep(0.16, 0.92, h));
    col = mix(col, uHorizon * 0.9, smoothstep(0.0, -0.1, d.y));            // dưới chân trời
    col = mix(col, uGround.rgb, uGround.a * smoothstep(-0.004, -0.05, d.y));
    float sd = max(dot(d, uSunDir), 0.0);
    float band = pow(sd, 2.2) * (1.0 - smoothstep(0.0, 0.34, h));           // dải ấm dọc chân trời phía mặt trời
    col = mix(col, uBand, clamp(band * uBandAmt, 0.0, 1.0));
    col += uSunCol * (pow(sd, 5.0) * 0.32 + pow(sd, 42.0) * 0.85) * uGlow;  // quầng sáng
    // mặt trăng: đĩa có vân (biển trăng), tối nhẹ ở rìa
    float mc = dot(d, uMoonDir);
    vec3 moon = vec3(0.0);
    if (uMoon > 0.0 && mc > 0.99) {
      vec3 mt = normalize(cross(vec3(0.0, 1.0, 0.0), uMoonDir)), mb = cross(uMoonDir, mt);
      vec2 q = vec2(dot(d, mt), dot(d, mb)) / 0.021;
      float r = length(q);
      float m = exp(-dot(q - vec2(-0.28, 0.3), q - vec2(-0.28, 0.3)) * 8.0)
              + 0.8 * exp(-dot(q - vec2(0.22, 0.18), q - vec2(0.22, 0.18)) * 13.0)
              + 0.7 * exp(-dot(q - vec2(0.02, -0.36), q - vec2(0.02, -0.36)) * 10.0)
              + 0.5 * exp(-dot(q - vec2(-0.5, -0.18), q - vec2(-0.5, -0.18)) * 18.0)
              + 0.35 * exp(-dot(q - vec2(0.45, -0.1), q - vec2(0.45, -0.1)) * 22.0);
      float tone = (1.0 - 0.42 * clamp(m, 0.0, 1.0)) * (0.72 + 0.28 * sqrt(max(1.0 - r * r, 0.0)));
      float disc = smoothstep(1.0, 0.93, r);
      col = mix(col, vec3(0.0), disc * uMoon);
      moon = uMoonCol * tone * disc * uMoon;
    }
    moon += uMoonCol * (0.05 * pow(max(mc, 0.0), 1400.0) + 0.012 * pow(max(mc, 0.0), 90.0)) * uMoon;   // quầng trăng
    vec3 disc = uSunCol * smoothstep(0.99975, 0.9999, sd) * uDisc;           // đĩa mặt trời
    float veil = uVeil.x * exp(-max(d.y, 0.0) / uVeil.y);
    col = mix(col, uVeilCol, veil);                                          // sương mù phủ lên trời
    col += (disc + moon) * (1.0 - 0.8 * veil);                               // mặt trời / trăng vẫn lấp ló qua sương
    gl_FragColor = vec4(col * uScale, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
    // nhiễu rất nhẹ để gradient không bị phân dải
    gl_FragColor.rgb += (fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453) - 0.5) / 255.0;
  }`,Ww=new et("#fff3df"),qw=new et("#ff9a50"),ag=new et("#9ab6ff"),Xw=new et(1.7,1.78,1.95),jw=Math.PI-1,Yw=Math.PI-1.15,og={exposure:1,skyBrightness:1,directLight:1,ambientLight:1,sunGlow:1,sunDisc:1,cloudBrightness:1,rays:1,autoSpeed:.06,sunAzimuth:jw,moonAzimuth:Yw},Kw=`
  varying vec3 vDir;
  void main() { vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,Jw=`
  uniform float uTime, uCover, uFlash, uSoft;
  uniform vec2 uDrift;
  uniform vec3 uSunDir, uLit, uShade, uFlashCol;
  uniform vec3 uVeilCol; uniform vec2 uVeil;
  varying vec3 vDir;
  float hash(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
  float noise(vec2 p) {
    vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1, 0)), f.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), f.x), f.y);
  }
  float fbm(vec2 p) {
    float v = 0.0, a = 0.5;
    for (int i = 0; i < 5; i++) { v += a * noise(p); p = p * 2.03 + vec2(17.0, 9.0); a *= 0.5; }
    return v;
  }
  void main() {
    vec3 d = normalize(vDir);
    if (d.y <= 0.0) discard;
    vec2 uv = d.xz / (d.y + 0.14);
    vec2 p = uv * 0.72 + uDrift * uTime;
    float base = fbm(p);
    float detail = fbm(p * 3.2 + 7.3 + uDrift * uTime * 0.7);
    float n = base * 0.68 + detail * 0.32;
    float thr = 1.0 - uCover;
    float dens = smoothstep(thr, thr + 0.1 + 0.3 * uSoft, n);
    // sáng ở phía hướng về mặt trời
    vec2 sd = normalize(uSunDir.xz + vec2(1e-4)) * 0.06;
    float n2 = fbm(p + sd) * 0.68 + fbm(p * 3.2 + 7.3 + sd * 3.0) * 0.32;
    float lit = clamp((n - n2) * 3.4 + 0.5, 0.0, 1.0);
    lit = mix(lit, 0.5, uSoft * 0.5);
    vec3 col = mix(uShade, uLit, lit);
    // mép mây phát sáng khi nhìn gần mặt trời
    float sunAlign = pow(max(dot(d, uSunDir), 0.0), 6.0);
    float rim = smoothstep(0.0, 0.5, dens) * (1.0 - smoothstep(0.55, 1.0, dens));
    col += uLit * rim * (0.15 + 0.9 * sunAlign) * 0.7;
    col += uLit * sunAlign * 0.35 * (1.0 - dens * 0.4);
    col *= mix(1.0, 0.72, d.y * uSoft);                      // âm u: tối dần lên đỉnh đầu
    col += uFlashCol * uFlash * (0.35 + 0.65 * n);
    // mây ti: vệt mỏng kéo dài theo hướng gió (chỉ khi trời không âm u)
    vec2 wd = normalize(uDrift + vec2(1e-5, 1e-5));
    vec2 q = vec2(dot(uv, wd) * 0.22, dot(uv, vec2(-wd.y, wd.x)) * 1.5) + uDrift * uTime * 0.6;
    float ci = smoothstep(0.5, 0.88, fbm(q + 3.7)) * (1.0 - uSoft) * 0.55 * (1.0 - dens);
    col = mix(col, uLit * (0.85 + 0.6 * sunAlign), ci / max(dens + ci, 1e-3));
    float alpha = (dens + ci) * smoothstep(0.0, 0.07, d.y);
    col = mix(col, uVeilCol, uVeil.x * exp(-d.y / uVeil.y));               // mây cũng chìm trong sương
    gl_FragColor = vec4(col, alpha);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }`,Tl=class{constructor(t,e,n){this.renderer=t,this.scene=e,this.camera=n,this.hour=17.55,this.auto=!1,this.tween=null,this.weather="clear",this.weatherProfiles=Object.fromEntries(Object.entries(sg).map(([o,c])=>[o,{...c}])),this.w={...this.weatherProfiles.clear},this.tint=new et(this.weatherProfiles.clear.tint),this.target=this.weatherProfiles.clear,this.tune={...og},this.windDir=new rt(.78,.62).normalize(),this._fogDisp=new et,this.veil={uVeilCol:{value:new et},uVeil:{value:new rt(0,.2)}},this.mistCover=.35,this.mistDens=.2,this.skyMat=new ye({uniforms:{...this.veil,uZenith:{value:new et},uMid:{value:new et},uHorizon:{value:new et},uBand:{value:new et},uSunCol:{value:new et},uSunDir:{value:new T(0,1,0)},uGlow:{value:1},uDisc:{value:1},uBandAmt:{value:1},uScale:{value:1},uGround:{value:new le(0,0,0,0)},uMoonDir:{value:new T(0,1,0)},uMoonCol:{value:new et(Xw)},uMoon:{value:0}},vertexShader:Gw,fragmentShader:Vw,side:vn,depthWrite:!1,fog:!1}),this.sky=new Ft(new vi(2400,48,24),this.skyMat),this.sky.renderOrder=-10,this.sky.frustumCulled=!1,e.add(this.sky),this.skyC={zen:new et,mid:new et,hor:new et,band:new et,sun:new et},this.envScene=new es,this.envScene.add(new Ft(new vi(900,32,16),this.skyMat)),this.pmrem=new Xr(t),this.envRT=null,this.envTimer=0,this.envKey="";let i=new Float32Array(1800*3);for(let o=0;o<1800;o++){let c=new T().randomDirection();c.y=Math.abs(c.y)*.9+.1,c.normalize().multiplyScalar(3200),i.set([c.x,c.y,c.z],o*3)}let s=new Rt;s.setAttribute("position",new Mt(i,3)),this.stars=new fn(s,new gi({color:14674175,size:2.1,sizeAttenuation:!1,transparent:!0,opacity:0,depthWrite:!1,fog:!1})),this.stars.renderOrder=1,this.stars.frustumCulled=!1,e.add(this.stars),this.cloudMat=new ye({uniforms:{...this.veil,uTime:{value:0},uCover:{value:.4},uFlash:{value:0},uSoft:{value:0},uDrift:{value:new rt},uSunDir:{value:new T(0,1,0)},uLit:{value:new et},uShade:{value:new et},uFlashCol:{value:new et(1.5,1.7,2.4)}},vertexShader:Kw,fragmentShader:Jw,side:vn,transparent:!0,depthWrite:!1,fog:!1}),this.dome=new Ft(new vi(2300,32,16),this.cloudMat),this.dome.renderOrder=3,this.dome.frustumCulled=!1,e.add(this.dome),this.cloudTime=0,this.haze=new Ft(new Ve(1800,1800,1,48,1,!0),new ye({uniforms:{uColor:{value:new et}},side:de,transparent:!0,depthWrite:!1,fog:!1,vertexShader:"varying float vT; void main(){ vT = position.y + 0.5; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:"uniform vec3 uColor; varying float vT; void main(){ float a = 1.0 - vT; gl_FragColor = vec4(uColor, a * a); }"})),this.haze.renderOrder=5,this.haze.frustumCulled=!1,e.add(this.haze),this.boltGeo=new Rt,this.boltGeo.setAttribute("position",new Mt(new Float32Array(480),3)),this.boltGeo.setDrawRange(0,0),this.bolt=new Ii(this.boltGeo,new ns({color:14083327,transparent:!0,opacity:0,blending:tn,depthWrite:!1,fog:!1})),this.bolt.renderOrder=6,this.bolt.frustumCulled=!1,e.add(this.bolt),this.flashT=-1,this.nextStrike=2,this.flash=0,this.onThunder=null,this.sun=new $r(16777215,1),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048);let a=this.sun.shadow.camera;a.left=-38,a.right=38,a.top=38,a.bottom=-38,a.near=1,a.far=260,this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=.04,a.layers.enable(3),e.add(this.sun,this.sun.target),this.hemi=new jc(12572927,4214832,.4),e.add(this.hemi),e.fog=new Nc(12179182,6e-4),this.precip=new El(e),this.state={night:0,lamps:0,dayF:1,warm:0,light:1,rain:0,snow:0,wet:0,cover:0,overcast:0,wind:.3,dark:0,drift:0,flash:0,windDir:this.windDir,fogColor:new et,mistColor:new et,sunDir:new T,elevation:0,moonDir:new T,lightDir:new T,moon:0,rays:0,rayDir:new T,rayCol:new et},this._c=new et,this._c2=new et,this._lit=new et,this._shade=new et,this._v=new T}snapWeather(t){this.setWeather(t),Object.assign(this.w,this.target),this.tint.set(this.target.tint)}setWeather(t){this.weather=t,this.target=this.weatherProfiles[t],t==="storm"&&(this.nextStrike=Math.min(this.nextStrike,1.2))}resetWeather(t){Object.assign(this.weatherProfiles[t],sg[t]),this.weather===t&&this.setWeather(t)}resetTune(){Object.assign(this.tune,og),this.envKey=""}setTime(t){if(t==null){this.auto=!0,this.tween=null;return}this.auto=!1,this.tween=t}get clock(){let t=Math.floor(this.hour),e=Math.floor((this.hour-t)*60);return String(t).padStart(2,"0")+":"+String(e).padStart(2,"0")}_strike(t){let e=Math.random()*Math.PI*2,n=800+Math.random()*900,i=new T(t.x+Math.cos(e)*n,0,t.z+Math.sin(e)*n),s=new T(i.x+(Math.random()-.5)*240,650+Math.random()*200,i.z+(Math.random()-.5)*240),a=this.boltGeo.attributes.position,o=0,c=(l,h,u,f)=>{let d=l.clone();for(let g=1;g<=u;g++){let v=g/u,m=l.clone().lerp(h,v);g<u&&m.add(new T((Math.random()-.5)*f,0,(Math.random()-.5)*f)),a.setXYZ(o++,d.x,d.y,d.z),a.setXYZ(o++,m.x,m.y,m.z),d=m}return d};c(s,i,16,110);for(let l=0;l<3;l++){let h=.25+Math.random()*.5,u=s.clone().lerp(i,h),f=u.clone().add(new T((Math.random()-.5)*380,-(120+Math.random()*260),(Math.random()-.5)*380));c(u,f,5,60)}a.needsUpdate=!0,this.boltGeo.setDrawRange(0,o),this.flashT=0,this.onThunder&&this.onThunder(On(n/340,.7,4.2),On(1.3-n/1800,.35,1))}update(t,e){let n=this.camera.position;if(this.auto)this.hour=(this.hour+t*this.tune.autoSpeed)%24;else if(this.tween!=null){let ht=(this.tween-this.hour+36)%24-12,yt=5*t;Math.abs(ht)<=yt?(this.hour=this.tween,this.tween=null):this.hour=(this.hour+Math.sign(ht)*yt+24)%24}let i=1-Math.exp(-t*1.4);for(let ht of Ow)ht!=="wet"&&(this.w[ht]+=(this.target[ht]-this.w[ht])*i);let s=this.target.wet-this.w.wet;this.w.wet+=Math.sign(s)*Math.min(Math.abs(s),t/kw),this.tint.lerp(this._c.set(this.target.tint),i);let a=this.w,o=a.overcast,c=a.dark;if(this.weather==="storm"&&a.dark>.5&&(this.nextStrike-=t,this.nextStrike<=0&&(this._strike(n),this.nextStrike=3.5+Math.random()*7)),this.flashT>=0){this.flashT+=t;let ht=this.flashT;this.flash=On(Math.exp(-ht*11)+.75*(ht>.17?Math.exp(-(ht-.17)*8):0),0,1),ht>1.6&&(this.flashT=-1,this.flash=0,this.boltGeo.setDrawRange(0,0))}let l=this.flash;this.bolt.material.opacity=this.flashT>=0&&this.flashT<.5?l:0,this.bolt.visible=this.bolt.material.opacity>.02;let h=65*Math.sin((this.hour-6)/24*Math.PI*2),u=this.state.sunDir;u.setFromSphericalCoords(1,Math.PI/2-h*md,this.tune.sunAzimuth);let f=Yn(-4,14,h),d=1-Yn(-12,0,h),g=Math.exp(-Math.pow((h-3)/10,2)),v=this.state.moonDir;v.setFromSphericalCoords(1,Math.PI/2-(3+9*Yn(-3,-30,h))*md,this.tune.moonAzimuth);let m=this._v.setFromSphericalCoords(1,Math.PI/2-38*md,this.tune.moonAzimuth),p=Yn(-2,-11,h),x=zw,b=0;for(;b<x.length-2&&h>x[b+1][0];)b++;let E=x[b],M=x[b+1],y=On((h-E[0])/(M[0]-E[0]),0,1),w=this.skyC;["zen","mid","hor","band","sun"].forEach((ht,yt)=>w[ht].copy(E[yt+1]).lerp(M[yt+1],y));let C=.07+.93*f,_=On(o*.92+c*.08,0,1),A=this._c.copy(this.tint).multiplyScalar(C).lerp(this._c2.set("#c9997f").multiplyScalar(C),g*.35*(1-c));w.zen.lerp(this._lit.copy(A).multiplyScalar(.8),_),w.mid.lerp(this._lit.copy(A).multiplyScalar(.92),_),w.hor.lerp(A,_),w.band.lerp(A,_);let I=rg*this.tune.skyBrightness*(1-.6*c);for(let ht of["zen","mid","hor","band"])w[ht].multiplyScalar(I).add(this._c2.setRGB(.55,.65,1).multiplyScalar(l*1.6));let H=this.skyMat.uniforms;H.uZenith.value.copy(w.zen),H.uMid.value.copy(w.mid),H.uHorizon.value.copy(w.hor),H.uBand.value.copy(w.band),H.uSunCol.value.copy(w.sun).multiplyScalar(rg*this.tune.skyBrightness),H.uSunDir.value.copy(u),H.uGlow.value=(1-o*.95)*Yn(-6,1,h)*(1-c)*this.tune.sunGlow,H.uDisc.value=(1-o)*Yn(-1.5,.5,h)*22*this.tune.sunDisc,H.uBandAmt.value=(1-o*.85)*(.25+.75*g)*Yn(-11,-2,h),H.uMoonDir.value.copy(v),H.uMoon.value=p*On(1-o*1.05,0,1)*(1-c);let N=Yn(3,22,h)*On((a.sun-.3)/.7,0,1)*(1-c);this.state.sunK=N,this.renderer.toneMappingExposure=(.5+.12*g)*(1-.5*c)*(1+.3*d)*(1-.3*N)*this.tune.exposure;let L=this.renderer.toneMappingExposure;this.state.exposure=L,this.state.fogColor.copy(this._lit.copy(w.hor).lerp(w.band,.2*H.uBandAmt.value));let P=cg(this.state.fogColor,L,this._fogDisp);this.scene.fog.color.copy(this.state.fogColor),this.scene.fog.density=a.fog,this._c2.copy(P).lerp(this._c.setRGB(.93,.95,.97).multiplyScalar(.1+.9*f*(1-.6*c)),.3),Bw(this._c2,L,this.state.mistColor);{let ht=Yn(0,.6,this.mistDens)*(.35+.65*this.mistCover),yt=Yn(.0012,.0075,a.fog)*.85,Nt=this.veil;Nt.uVeil.value.set(Math.max(ht,yt),Math.max(.05+.5*Math.pow(this.mistCover,1.5),yt>ht?.3:0)),Nt.uVeilCol.value.copy(this.state.mistColor)}let D=h<-2.5,k=this.state.lightDir.copy(D?m:u);D?(this.sun.intensity=.38*p*(1-.8*o)*(1-c)*this.tune.directLight,this.sun.color.copy(ag)):(this.sun.intensity=3.4*Yn(-2,9,h)*a.sun*(1+1.3*N)*this.tune.directLight,this.sun.color.copy(Ww).lerp(qw,On(g*1.3,0,1))),e&&(this.sun.position.copy(e).addScaledVector(k,120),this.sun.target.position.copy(e)),this.hemi.color.copy(P).lerp(this._c.set("#6f8cd0"),d*.75).lerp(this._c.set("#c4d4ff"),l),this.hemi.groundColor.set("#3a4630").multiplyScalar(.25+.75*f),this.hemi.intensity=((.16+.45*f+.34*d)*(1-.4*o)*(1-.35*c)*(1-.45*N)+l*3.2)*this.tune.ambientLight,this.sky.position.copy(n),this.stars.position.copy(n),this.dome.position.copy(n),this.haze.position.set(n.x,0,n.z);let O=150+a.fog*1e5;this.haze.scale.y=O,this.haze.position.y=O/2-60,this.haze.material.uniforms.uColor.value.copy(this.state.fogColor),this.stars.material.opacity=d*(1-o*.95),this.stars.visible=this.stars.material.opacity>.01;let G=On(g*1.1,0,1)*(1-.92*c),X=this._lit.set("#ffffff").lerp(this._c2.set("#ff9d66"),G).multiplyScalar(2.4*f*this.tune.cloudBrightness);X.add(this._c2.set("#8fa6e0").multiplyScalar(.32*d*(1-o*.6)));let K=this._shade.copy(w.mid).multiplyScalar(.5).lerp(this._c2.copy(w.hor).multiplyScalar(.62),.45).lerp(this._c2.set("#a86a7a").multiplyScalar(1.05*f),G*.5);K.add(this._c2.set("#101b38").multiplyScalar(.3*d)),X.multiplyScalar(1-.8*c),this.cloudTime+=t;let it=this.cloudMat.uniforms;it.uTime.value=this.cloudTime,it.uCover.value=a.clouds,it.uSoft.value=On(o*.9+c*.3,0,1),it.uFlash.value=l,it.uDrift.value.copy(this.windDir).multiplyScalar(.003+.02*a.wind),it.uSunDir.value.copy(h>=-2?u:v),it.uLit.value.copy(X),it.uShade.value.copy(K);let z=this.state;z.elevation=h,z.dayF=f,z.night=d,z.warm=g,z.overcast=o,z.rain=a.rain,z.snow=a.snow,z.wet=a.wet,z.cover=a.cover,z.wind=a.wind,z.dark=c,z.flash=l,z.drift=On((a.wind-.5)*2.2,0,1)*(1-a.rain)*(1-a.snow);let Q=On(a.rain*.35+a.snow*.25+(a.fog>.003?.3:0),0,.5);z.lamps=On(Math.max(d,.7*(1-f))+Q*f+c*.7,0,1),z.moon=H.uMoon.value;let lt=Yn(5e-4,.0065,a.fog);if(z.rays=(D?.22*H.uMoon.value*(1+lt):Yn(-2.5,2.5,h)*(1-.55*o)*(1-c)*(.55+.45*g)*(1+1.3*lt))*this.tune.rays,z.rayDir.copy(D?v:u),z.rayCol.copy(D?ag:this.sun.color),z.light=.14+.08*d+.86*f*(1-.3*o)*(1-.55*c)+l*.6,this.precip.update(t,n,z,this.renderer.domElement.height),this.envTimer-=t,this.envTimer<=0){let ht=[h.toFixed(1),Math.round(o*12),Math.round(c*12),Math.round(N*10)].join("|");(ht!==this.envKey||!this.envRT)&&(this.envKey=ht,this._captureEnv()),this.envTimer=.7}}setShadowSize(t){let e=this.sun.shadow;e.mapSize.x!==t&&(e.mapSize.set(t,t),e.map&&(e.map.dispose(),e.map=null))}_captureEnv(){let t=this.skyMat.uniforms,e=t.uDisc.value;t.uScale.value=2.1*(1-.5*(this.state.sunK||0)),t.uDisc.value=Math.min(e,4);let n=this.pmrem.fromScene(this.envScene,0,1,3e3);t.uScale.value=1,t.uGround.value.set(t.uHorizon.value.r*.13,t.uHorizon.value.g*.13,t.uHorizon.value.b*.12,1);let i=this.pmrem.fromScene(this.envScene,0,1,3e3);t.uGround.value.w=0,t.uDisc.value=e,this.envRT&&this.envRT.dispose(),this.carEnvRT&&this.carEnvRT.dispose(),this.envRT=n,this.carEnvRT=i,this.scene.environment=n.texture,this.onCarEnv&&this.onCarEnv(i.texture)}};var cs={name:"body",type:"MeshPhysicalMaterial",color:5526623,roughness:.364192,metalness:1,clearcoat:1,clearcoatRoughness:0,specularIntensity:1,specularColor:16777215,reflectivity:.49999999999999983,iridescence:0,iridescenceIOR:1.3,iridescenceThicknessRange:[100,400],envMapIntensity:1};var Qw={drop:.19,forward:.16,hip:[-.39,.45,.28],foot:[-.48,.45,-.48],recline:.1},$w={color:789518,metalness:0,roughness:.3,envK:.6},lg=[{id:"mustang",name:"Mustang '67 Đen",file:"assets/models/mustang.glb",length:4.67,flip:!0,eye:[-.39,1.08,.3],doubleSide:!0,door:/^DriverDoor/,wheels:/^(Wheel|BrakeDisc)/,mats:{Interior:$w,BlackPolished:{roughness:.18},Paint:{color:1381913,metalness:0,roughness:.42,specularIntensity:0,clearcoat:1,clearcoatRoughness:.07,envK:.4},Wheel:{clearcoat:.25}},seatMesh:/^Cube\.?00[678]/,steerShift:-.09,lamps:{head:[.839,.661,-2.06],tail:[.44,.769,2.26]},seat:Qw,steer:{c:[-.385,.883,-.155],n:[0,.338,.941],r:.153,grip:{radial:.025,depth:.065,align:!0}},steerMesh:/^(Torus\.?001|Cube\.?009)/},{id:"mazda-rx-vision",name:"Mazda RX Vision Sport",file:"assets/models/mazda-rx-vision.glb",length:4.8,flip:!0,wheels:/^WHEEL_(LF|LR|RF|RR)_/,eye:[.394,1.09,.45],seat:{hip:[.394,.34,.48],foot:[.49,.26,-.58],recline:.1},steer:{c:[.394,.795,.082],n:[0,.156,.9878],r:.18},steerMesh:/^MazdaSteering_/,lamps:{head:[.74,.57,-1.99],tail:[.7,.838,2.086]},mats:{body:{color:cs.color,metalness:cs.metalness,roughness:cs.roughness,clearcoat:cs.clearcoat,clearcoatRoughness:cs.clearcoatRoughness,specularIntensity:cs.specularIntensity,specularColor:cs.specularColor,envK:cs.envMapIntensity}}}],Ni=[{id:"reed",name:"Đồng cỏ lau",icon:"🌾"},{id:"forest",name:"Đồi thông",icon:"🌲"},{id:"mountain",name:"Đường núi",icon:"⛰️"},{id:"meadow",name:"Đồi cỏ",icon:"🌿"},{id:"sea",name:"Biển",icon:"🌊"},{id:"city",name:"Phố",icon:"🏙️"}],zn=[{id:"clear",name:"Trời trong",icon:"☀️"},{id:"cloudy",name:"Nhiều mây",icon:"☁️"},{id:"windy",name:"Gió lớn",icon:"💨"},{id:"rain",name:"Mưa",icon:"🌧️"},{id:"storm",name:"Bão",icon:"⛈️"},{id:"snow",name:"Tuyết",icon:"❄️"},{id:"fog",name:"Sương mù",icon:"🌫️"}],Kn=[{id:"sunrise",name:"Bình minh",icon:"🌅",hour:6.4},{id:"noon",name:"Ban ngày",icon:"🌤️",hour:12.5},{id:"sunset",name:"Hoàng hôn",icon:"🌇",hour:17.6},{id:"night",name:"Ban đêm",icon:"🌙",hour:22.5},{id:"auto",name:"Tự động",icon:"🕒",hour:null}],Xe=[{id:"chase",name:"Sau xe"},{id:"low",name:"Sát mặt đường"},{id:"side",name:"Bên hông"},{id:"cockpit",name:"Trong xe"},{id:"orbit",name:"Quay quanh"},{id:"drone",name:"Từ trên cao"}],Sl=[{id:"all",name:"Nhạc + âm thanh",icon:"🎵"},{id:"music",name:"Chỉ nhạc",icon:"🎶"},{id:"off",name:"Tắt tiếng",icon:"🔇"}],Ui=[1.4,1.8,2,2.8,3.5,4,5.6,8,11,16],hg=Ui.indexOf(3.5),ki=[{id:"low",name:"Low",ratio:.75,msaa:0,veg:.35,shadow:1024,refl:!1,dof:0,trees:0,view:1},{id:"good",name:"Good",ratio:1.5,msaa:4,veg:.85,shadow:2048,refl:!0,dof:36,trees:35,view:1},{id:"ultra",name:"Ultra",ratio:2,msaa:4,veg:1,shadow:4096,refl:!0,dof:48,trees:200,view:2}],gd=ki.findIndex(r=>r.id==="good");var vd=512,ri=288,Rl=[.23*.85,.13*.85],po=Rl,ug=.014*.85;function fg(r,t){let[e,n,i]=t.eye,s=new Jc(new T(0,n,i),new T(0,-.42,-1).normalize(),.05,2.5);r.updateMatrixWorld(!0);let a=s.intersectObject(r,!0).find(l=>!(l.object.material&&l.object.material.transparent)),o=a?a.point.clone():new T(0,n-.3,i-.7);o.y+=po[1]/2+.03,o.z+=.07;let c=new Wt().setFromAxisAngle(new T(1,0,0),-.22);return{pos:o,quat:c}}var Al=class{constructor(){this.canvas=document.createElement("canvas"),this.canvas.width=vd,this.canvas.height=ri,this.ctx=this.canvas.getContext("2d"),this.tex=new wn(this.canvas),this.tex.colorSpace=ue,this.tex.anisotropy=4,this.group=new Pt;let t=new Ft(new mi(po[0],po[1]),new qe({map:this.tex,color:new et(2.2,2.2,2.2)})),e=new Ft(new he(po[0]+ug,po[1]+ug,.012*.85),new Yt({color:789776,roughness:.35,metalness:.3}));e.position.z=-.0065,this.group.add(e,t),this.light=new Rs(16762506,1.1,2.4,2),this.light.position.set(0,.03,.08),this.group.add(this.light),this.t=0,this.timer=0,this.speed=0,this.clock="",this._draw()}place(t){if(!t){this.group.visible=!1;return}this.group.visible=!0,this.group.position.copy(t.pos),this.group.quaternion.copy(t.quat)}update(t,e,n){this.t+=t,this.timer-=t,this.light.intensity=1.1*(.9+.1*Math.sin(this.t*.7)),!(this.timer>0)&&(this.timer=1,this.speed=e,this.clock=n,this._draw())}_draw(){let t=this.ctx,e=this.t,n=t.createLinearGradient(0,0,0,ri);n.addColorStop(0,"#1d140d"),n.addColorStop(1,"#0d0906"),t.fillStyle=n,t.fillRect(0,0,vd,ri),t.save(),t.beginPath(),t.rect(10,34,300,ri-44),t.clip(),t.fillStyle="#231810",t.fillRect(10,34,300,ri-44),t.strokeStyle="rgba(255,190,130,0.15)",t.lineWidth=2;let i=e*9%40;for(let c=-40;c<340;c+=40)t.beginPath(),t.moveTo(c+i*.3,34),t.lineTo(c-30+i*.3,ri),t.stroke();for(let c=34;c<ri+40;c+=40)t.beginPath(),t.moveTo(10,c+i),t.lineTo(310,c+i-12),t.stroke();t.strokeStyle="#ffa940",t.lineWidth=7,t.lineCap="round",t.beginPath();for(let c=0;c<=24;c++){let l=ri-10-c*11,h=160+Math.sin(c*.35+e*.15)*46;c===0?t.moveTo(h,l):t.lineTo(h,l)}t.stroke(),t.fillStyle="#ffffff",t.beginPath(),t.moveTo(160,ri-74),t.lineTo(148,ri-46),t.lineTo(160,ri-54),t.lineTo(172,ri-46),t.closePath(),t.fill(),t.restore(),t.fillStyle="#ffe4c8",t.font="600 20px system-ui, sans-serif",t.textBaseline="middle",t.fillText(this.clock||"--:--",14,18),t.textAlign="right",t.fillText(Math.round(this.speed)+" km/h",vd-14,18),t.textAlign="left";let s=326,a=t.createLinearGradient(s,44,s+70,114);a.addColorStop(0,"#ff8a5c"),a.addColorStop(1,"#7b5cff"),t.fillStyle=a,t.fillRect(s,44,70,70),t.fillStyle="#ffffff",t.font="600 19px system-ui, sans-serif",t.fillText("Lo-fi Chill",s,136),t.fillStyle="#c9a27e",t.font="16px system-ui, sans-serif",t.fillText("Chill Drive Radio",s,160);let o=e/180%1;t.fillStyle="#3d2b1d",t.fillRect(s,184,170,5),t.fillStyle="#ffa940",t.fillRect(s,184,170*o,5),t.fillStyle="#ffb760";for(let c=0;c<12;c++){let l=8+26*Math.abs(Math.sin(e*2.3+c*1.7)*Math.sin(e*.9+c));t.fillRect(s+c*14,250-l,8,l)}this.tex.needsUpdate=!0}};var Cl=Object.freeze({intensity:36,distance:165,angle:1.29,penumbra:.9,decay:.87,glowOpacity:.29,glowSize:2.9,color:"#ffe4a8",glowColor:"#ffb43f"});function mo(r,t,{spots:e=!0,glows:n=!0}={}){let i=(e?[-1,1]:[]).map(()=>{let a=new As(16766624,0,110,.8,1,.55);return r.add(a,a.target),a}),s=(n?[-1,1]:[]).map(()=>{let a=new kn(new Hn({map:t,color:16761975,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:tn,fog:!1}));return a.renderOrder=6,a.scale.set(2.1*1.35,2.1*.85,1),r.add(a),a});return{spots:i,glows:s,tune:{...Cl},eye:new T,forward:new T}}function ua(r){if(r.lamps)return r.lamps;let t=r.width*.3,e=Math.min(.7,r.height*.45);return{head:[t,e,-r.length/2+.25],tail:[t,e+.05,r.length/2]}}function go(r,t){let[e,n,i]=ua(t).head;r.spots.forEach((s,a)=>{let o=a?e:-e;s.position.set(o,n,i),s.target.position.set(o*.9,0,i-40)}),r.glows.forEach((s,a)=>s.position.set(a?e:-e,n,i-.03))}function vo(r,t,e,n){let i=r.tune||Cl;r.spots.forEach(a=>{a.color.set(i.color),a.intensity=i.intensity*n,a.distance=i.distance,a.angle=i.angle,a.penumbra=i.penumbra,a.decay=i.decay});let s=1;e&&(t.updateWorldMatrix(!0,!0),(r.glows[0]||t).getWorldPosition(r.eye),r.eye.subVectors(e.position,r.eye).normalize(),r.forward.set(0,0,-1).transformDirection(t.matrixWorld),s=Ue.smoothstep(r.eye.dot(r.forward),-.05,.35)),r.glows.forEach(a=>{a.material.color.set(i.glowColor),a.material.opacity=i.glowOpacity*n*s,a.scale.set(i.glowSize*1.35,i.glowSize*.85,1),a.visible=n*s>.01})}var Pl=(r,t,e)=>Math.min(e,Math.max(t,r));function tT(r){let t=Ue.smoothstep(r.speed,.2,2),e=Math.atan((r.curvature||0)*2.7)*14*t,n=-Math.atan2(r.latVel||0,Math.max(r.speed,4))*3;return Pl(e+n,-.55,.55)}var Ll=class{constructor(t){this.root=new Pt,this.tilt=new Pt,this.root.add(this.tilt),t.add(this.root),this.loader=new Ds,this.loader.setMeshoptDecoder(ha),this.onProgress=null,this.prepare=null,this.envMap=null,this.list=[],this.cache=new Map,this.current=null,this.token=0,this.time=0,this.pitch=0,this.roll=0,this.lastSpeed=0,this.dim={length:4.5,width:1.9,height:1.3},this.lights=new Pt,this.root.add(this.lights);let e=this.softTex=sl(),n=i=>{let s=new kn(new Hn({map:e,color:i,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:tn,fog:!1}));return s.renderOrder=6,this.lights.add(s),s};this.headlights=mo(this.lights,e),this.spots=this.headlights.spots,this.headGlow=this.headlights.glows,this.tailGlow=[n(16720914),n(16720914)],this.viewer=null,this._gv=new T,this._gb=new T,this.lampLevel=0,this.brake=0,this.contact=new Ft(new mi(1,1).rotateX(-Math.PI/2),new qe({alphaMap:eT(),color:0,transparent:!0,opacity:.72,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-6,fog:!1})),this.contact.position.y=.06,this.contact.renderOrder=1,this.root.add(this.contact),this.cabin=new Rs(16767148,0,2.6,2),this.tilt.add(this.cabin),this.cabinLevel=0}async probe(){let t=[];for(let e of lg){if(!e.optional){t.push(e);continue}try{let n=await fetch(e.file,{method:"HEAD"}),i=n.headers.get("content-type")||"";n.ok&&!i.includes("text/html")&&t.push(e)}catch{}}return this.list=t,t}async select(t){let e=this.list[t],n=++this.token,i=this.cache.get(e.id);if(i||(i=await this._load(e,s=>{n===this.token&&this.onProgress?.(s)}),this.cache.set(e.id,i)),n!==this.token)return!1;if(this.prepare&&!i.ready){try{await this.prepare(i.group)}catch(s){console.warn("prepare",s)}if(i.ready=!0,n!==this.token)return!1}return this.current&&this.tilt.remove(this.current.group),this.tilt.add(i.group),this.current=i,this.dim=i.dim,this.shield=i.shield,this.rearShield=i.rearShield,this._placeLights(i.dim),!0}async _load(t,e){let i=(await this.loader.loadAsync(t.file,M=>{e&&M.total&&e(M.loaded/M.total)})).scene,s=new Pt;s.add(i);let a=new Pt;if(a.add(s),t.hide){let M=[];i.traverse(y=>{t.hide.test(y.name||"")&&M.push(y)}),M.forEach(y=>y.removeFromParent())}i.rotation.x=t.rotX||0,s.updateMatrixWorld(!0);let o=new Ge().setFromObject(s,!0),c=o.getSize(new T);c.x>c.z*1.02&&(i.rotation.y+=Math.PI/2),t.flip&&(i.rotation.y+=Math.PI),s.updateMatrixWorld(!0),o.setFromObject(s,!0),c=o.getSize(new T),s.scale.setScalar(t.length/c.z),s.updateMatrixWorld(!0),o.setFromObject(s,!0);let l=o.getCenter(new T);s.position.set(-l.x,-o.min.y,-l.z),a.updateMatrixWorld(!0),o.setFromObject(a,!0);let h={length:o.max.z-o.min.z,width:o.max.x-o.min.x,height:o.max.y-o.min.y};if(h.eye=t.eye||[-h.width*.2,Math.min(h.height*.8,1.15),0],h.lamps=t.lamps||ua(h),h.seat=t.seat||null,(t.seat?.drop||t.seat?.forward)&&t.seatMesh){a.updateMatrixWorld(!0);let M=new T;i.traverse(y=>{!y.isMesh||!t.seatMesh.test(y.name)||(y.getWorldPosition(M),M.y-=t.seat.drop||0,M.z-=t.seat.forward||0,y.position.copy(y.parent.worldToLocal(M)))}),a.updateMatrixWorld(!0)}t.basicMetal&&i.traverse(M=>{if(!M.isMesh||Array.isArray(M.material))return;let y=M.material;y.transmission>0||y.transparent&&y.opacity<.9||(M.material=new Yt({name:y.name,color:y.color,map:y.map,side:y.side,...t.basicMetal}),y.dispose())});let u=[],f=[];i.traverse(M=>{if(!M.isMesh)return;t.steerMesh&&t.steerMesh.test(M.name)&&(M.material=pg()),t.seatMesh&&t.seatMesh.test(M.name)&&(M.material=pg(5912608,.52));let y=Array.isArray(M.material)?M.material:[M.material],w=!1;for(let C of y){if(C.transmission>0&&(C.transmission=0,C.transparent=!0,C.opacity=.32,C.depthWrite=!1,w=!0),C.transparent&&C.opacity<.9&&(w=!0),w&&!C.userData.glass&&iT(C),t.doubleSide&&!C.transparent&&(C.side=de),t.mats&&t.mats[C.name])for(let[_,A]of Object.entries(t.mats[C.name]))_==="envK"?C.userData.envK=A:C[_]?.isColor?C[_].set(A):C[_]=A;/tail|brake|emissivered|rear.?light/i.test(C.name)&&C.emissive&&(C.emissive.set(16718346),u.push(C)),this._env(C),me(C)}M.castShadow=!w,M.receiveShadow=!0,w&&f.push(M)});let d=t.wheels?this._wheels(a,t,h):[],g=t.door?this._door(a,t):null;a.updateMatrixWorld(!0);let v=dg(f,h),m=dg(f,h,!0),p=nT(a,i,v),x=fg(a,h),b=t.steer;if(b&&t.steerShift){let M=new T(...b.n),y=new T,w=[];i.traverse(C=>{t.steerMesh.test(C.name)&&C.isMesh&&w.push(C)});for(let C of w)C.getWorldPosition(y).addScaledVector(M,-t.steerShift),C.parent.worldToLocal(y),C.position.copy(y);b={...b,c:new T(...b.c).addScaledVector(M,-t.steerShift).toArray()}}let E=null;if(b&&t.steerMesh){let M=[];i.traverse(y=>{y.isMesh&&t.steerMesh.test(y.name)&&M.push(y)}),E=new Pt,E.position.fromArray(b.c),a.add(E),a.updateMatrixWorld(!0);for(let y of M)E.attach(y)}return{def:t,group:a,dim:h,wheels:d,door:g,tailMats:u,wipers:p,shield:v,rearShield:m,screen:x,steer:b,steerPivot:E,anim:null}}_env(t){t.envMap=this.envMap,t.envMapIntensity=(this.envMap?1:.5)*(t.userData.envK??1)}setEnvMap(t){this.envMap=t;for(let e of this.cache.values())e.group.traverse(n=>{if(n.isMesh)for(let i of Array.isArray(n.material)?n.material:[n.material])this._env(i)})}_door(t,e){let n=[];if(t.traverse(a=>{if(!(a===t||!e.door.test(a.name||""))){for(let o=a.parent;o&&o!==t;o=o.parent)if(e.door.test(o.name||""))return;n.push(a)}}),!n.length)return null;t.updateMatrixWorld(!0);let i=new Ge;for(let a of n)i.expandByObject(a,!0);let s=new Re;s.position.set(i.min.x+.04,0,i.min.z+.06),t.add(s),t.updateMatrixWorld(!0);for(let a of n)s.attach(a);return{pivot:s,amount:0}}setDoor(t){let e=this.current?.door;if(!e)return;e.amount=t;let n=t*t*(3-2*t);e.pivot.rotation.y=-1.05*n}frontWheel(t){let e=this.current,n=null;for(let s of e?.wheels||[])(!n||s.pivot.position.z<n.pivot.position.z)&&(n=s);let i=this.dim;return n?t.set(-i.width/2+.12,n.pivot.position.y,n.pivot.position.z):t.set(-i.width/2,.33,-i.length*.32)}_wheels(t,e,n){let i=[];t.traverse(a=>{if(!(a===t||!e.wheels.test(a.name||""))){for(let o=a.parent;o&&o!==t;o=o.parent)if(e.wheels.test(o.name||""))return;i.push(a)}});let s=[];for(let a of i){let o=new Ge().setFromObject(a,!0);if(o.isEmpty())continue;let c=o.getSize(new T),l=o.getCenter(new T);if(!(Math.abs(c.y-c.z)<.28*Math.max(c.y,c.z)&&c.z<n.length*.35&&c.y<n.height*.95&&c.y>n.height*.12&&l.y<n.height*.5))continue;let f=new Re;f.position.set(l.x,o.max.y-c.z/2,l.z),t.add(f),t.updateMatrixWorld(!0),f.attach(a),s.push({pivot:f,radius:c.z/2})}return s}_placeLights(t){go(this.headlights,t);let[e,n,i]=(t.lamps||ua(t)).tail;this.tailGlow.forEach((a,o)=>a.position.set(o?e:-e,n,i+.03)),this.contact.scale.set(t.width*1.12,1,t.length*1.06);let s=this.current?.screen;s?this.cabin.position.copy(s.pos).add(new T(0,.02,.12)):this.cabin.position.set(t.eye[0]*.5,t.eye[1]-.2,t.eye[2]-.6)}setLights(t){this.lampLevel=t}_face(t,e){return this.viewer?(t.getWorldPosition(this._gv),this._gv.subVectors(this.viewer.position,this._gv).normalize(),this._gb.set(0,0,e).transformDirection(this.root.matrixWorld),Ue.smoothstep(this._gv.dot(this._gb),-.05,.35)):1}setWiper(t){if(!(!this.current||t===this.current.wiperTh)){this.current.wiperTh=t;for(let e of this.current.wipers)e(t)}}update(t,e){this.time+=t,this.root.position.copy(e.pos),this.root.rotation.set(e.pitch||0,e.yaw,0,"YXZ");let n=(e.speed-this.lastSpeed)/Math.max(t,.001);this.brakeAcc=n,this.lastSpeed=e.speed;let i=1-Math.exp(-t*4);this.pitch+=(Pl(n*.004,-.04,.04)-this.pitch)*i,this.roll+=(Pl(-e.latVel*.012,-.05,.05)-this.roll)*i;let s=Pl(e.speed/20,0,1);this.tilt.rotation.set(this.pitch,0,this.roll);let a=1-(this.calm||0);this.tilt.position.y=(.005*Math.sin(this.time*7.3)+.004*Math.sin(this.time*12.1))*s*a;let o=(e.rough||0)*s*a;if(o>.001&&(this.tilt.position.y+=o*(.014*Math.sin(this.time*19.3)+.01*Math.sin(this.time*31.7+1.1)),this.tilt.rotation.z+=o*(.006*Math.sin(this.time*13.1)+.004*Math.sin(this.time*23.9)),this.tilt.rotation.x+=o*.004*Math.sin(this.time*17.7+.4)),this.current){let f=tT(e);this.steerAngle=(this.steerAngle||0)+(f-(this.steerAngle||0))*(1-Math.exp(-t*8)),this.current.steerPivot&&this.current.steerPivot.quaternion.setFromAxisAngle(new T(...this.current.steer.n).normalize(),this.steerAngle);for(let d of this.current.wheels)d.pivot.rotation.x-=e.speed*t/d.radius}let c=this.lampLevel;vo(this.headlights,this.root,this.viewer,c);let l=this.brakeAcc||0;this.brake+=((l<-1.2?1:0)-this.brake)*(1-Math.exp(-t*8));let h=.3+.7*c+.6*this.brake,u=this._face(this.tailGlow[0],1);this.tailGlow.forEach(f=>{f.material.opacity=Math.min(.8,.45*h)*u;let d=2+1.3*h;f.scale.set(d*1.35,d*.85,1),f.visible=u>.01});for(let f of this.current?.tailMats||[])f.emissiveIntensity=.8+2.6*h;this.cabin.intensity=this.cabinLevel}};function eT(){let r=document.createElement("canvas");r.width=128,r.height=256;let t=r.getContext("2d");t.filter="blur(14px)",t.fillStyle="#fff",t.beginPath(),t.roundRect?t.roundRect(26,30,76,196,26):t.rect(26,30,76,196),t.fill(),t.filter="blur(6px)",t.globalAlpha=.5,t.fillRect(36,44,56,168);let e=new wn(r);return e.colorSpace=En,e}function dg(r,t,e=!1){let[n,i,s]=t.eye,a=new T(n,i,s),o=new T,c=new T,l=new T,h=new T,u=new T,f=new T,d=new T,g=[],v=0,m=e?r.filter(M=>!/light|lamp/i.test(M.name)&&/windscreen.*rear|rear.*windscreen|rear.*window|back.*glass/i.test(M.name)):[];for(let M of m.length?m:r){let y=M.geometry.attributes.position,w=M.geometry.index,C=(w?w.count:y.count)/3;for(let _=0;_<C;_++){let A=w?w.getX(_*3):_*3,I=w?w.getX(_*3+1):_*3+1,H=w?w.getX(_*3+2):_*3+2;if(o.fromBufferAttribute(y,A).applyMatrix4(M.matrixWorld),c.fromBufferAttribute(y,I).applyMatrix4(M.matrixWorld),l.fromBufferAttribute(y,H).applyMatrix4(M.matrixWorld),u.copy(o).add(c).add(l).multiplyScalar(1/3),!m.length&&((e?u.z<s+.35:u.z>s-.25)||u.y<i-.3))continue;h.subVectors(c,o).cross(l.clone().sub(o));let N=h.length()/2;N<1e-7||(h.normalize(),h.dot(a.clone().sub(u))<0&&h.negate(),!(!m.length&&(Math.abs(h.x)>.5||(e?h.z>-.25:h.z<.25||h.y>-.2)))&&(f.addScaledVector(h,N),d.addScaledVector(u,N),v+=N,g.push(o.clone(),c.clone(),l.clone())))}}if(e&&v<.1)return null;let p={rear:e,center:new T,normal:new T,right:new T,up:new T,bounds:[0,0,0,0]};if(v<.1?(p.center.set(0,i+.1,s-.62),p.normal.set(0,-.6,.8),p.bounds=[-t.width*.38,t.width*.38,-.3,.3]):(p.center.copy(d).multiplyScalar(1/v),p.normal.copy(f).normalize()),p.right.set(1,0,0).addScaledVector(p.normal,-p.normal.x).normalize(),p.up.crossVectors(p.normal,p.right),p.up.y<0&&p.up.negate(),e)return p.geometry=new Rt().setFromPoints(g),p.geometry.setAttribute("glassUV",new wt(g.flatMap(M=>{let y=M.clone().sub(p.center);return[y.dot(p.right),y.dot(p.up)]}),2)),p;if(g.length){let M=[1e9,-1e9,1e9,-1e9];for(let y of g){y.sub(p.center);let w=y.dot(p.right),C=y.dot(p.up);M[0]=Math.min(M[0],w),M[1]=Math.max(M[1],w),M[2]=Math.min(M[2],C),M[3]=Math.max(M[3],C)}p.bounds=M}let x=(p.bounds[1]-p.bounds[0])/2,b=(p.bounds[0]+p.bounds[1])/2,E=p.bounds[2]+.03;return p.wipers=[{u:b-x*.76,v:E,rest:0,sign:1,r0:x*.1,r1:x*.68},{u:b+x*.76,v:E,rest:Math.PI,sign:-1,r0:x*.1,r1:x*.68}],p.sweep=1.62,p}function nT(r,t,e){let n=[];t.traverse(a=>{/^WiperBladeArm\d*$/i.test(a.name)&&!a.isMesh&&n.push(a)});let i=[],s=e.normal;if(n.length){let a=[];for(let o of n){let c=[],l=[];if(o.children.forEach(H=>H.traverse(N=>{if(!N.isMesh)return;let L=N.geometry.attributes.position,P=H.isMesh?c:l;for(let D=0;D<L.count;D++)P.push(new T().fromBufferAttribute(L,D).applyMatrix4(N.matrixWorld))})),!c.length||!l.length)continue;let h=l.reduce((H,N)=>H.add(N),new T).multiplyScalar(1/l.length),u=c[0];for(let H of c)H.distanceToSquared(h)>u.distanceToSquared(h)&&(u=H);let f=c.filter(H=>H.distanceTo(u)<.03),d=f.reduce((H,N)=>H.add(N),new T).multiplyScalar(1/f.length),g=d.clone().sub(e.center),v=g.dot(e.right),m=g.dot(e.up),p=h.clone().sub(d),x=Math.atan2(p.dot(e.up),p.dot(e.right)),b=new rt(Math.cos(x),Math.sin(x)),E=1e9,M=0;for(let H of l){let N=H.clone().sub(d),L=N.dot(e.right)*b.x+N.dot(e.up)*b.y;E=Math.min(E,L),M=Math.max(M,L)}let y=Math.cos(x)>=0?1:-1;o.updateMatrixWorld(!0);let w=o.matrixWorld.clone(),C=o.parent.matrixWorld.clone().invert();o.matrixAutoUpdate=!1;let _=new bt,A=new bt,I=new bt().makeTranslation(-d.x,-d.y,-d.z);_.makeTranslation(d.x,d.y,d.z),i.push(H=>{A.makeRotationAxis(s,y*H),o.matrix.copy(C).multiply(_).multiply(A).multiply(I).multiply(w),o.matrixWorldNeedsUpdate=!0}),a.push({u:v,v:m,rest:x,sign:y,r0:Math.max(0,E),r1:M})}if(a.length){for(a.sort((o,c)=>o.u-c.u);a.length<2;)a.push(a[0]);e.wipers=a.slice(0,2)}}if(!i.length){let a=new Yt({color:1315862,roughness:.55,metalness:.4}),o=new bt().makeBasis(e.right,e.up,s);for(let c of e.wipers){let l=new Pt;l.position.copy(e.center).addScaledVector(e.right,c.u).addScaledVector(e.up,c.v).addScaledVector(s,-.02),l.quaternion.setFromRotationMatrix(o);let h=new Pt;l.add(h);let u=new Ft(new he(c.r1*.97,.008,.008),a);u.position.set(c.r1*.485,0,-.014);let f=new Ft(new he(c.r1-c.r0,.012,.012),a);f.position.set((c.r0+c.r1)/2,0,-.004),h.add(u,f),h.rotation.z=c.rest,r.add(l),i.push(d=>{h.rotation.z=c.rest+c.sign*d})}}return i}var xd=new Map;function pg(r=1249810,t=.58){let e=r+"|"+t;if(xd.has(e))return xd.get(e);let n=new Yt({name:"Leather",color:r,roughness:t,metalness:0});return n.onBeforeCompile=i=>{i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vLP;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        vLP = position * vec3(length(modelMatrix[0].xyz), length(modelMatrix[1].xyz), length(modelMatrix[2].xyz));`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
        varying vec3 vLP;
        float lHash(vec3 p) { p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
        float lNoise(vec3 x) {
          vec3 i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f);
          return mix(mix(mix(lHash(i), lHash(i + vec3(1, 0, 0)), f.x), mix(lHash(i + vec3(0, 1, 0)), lHash(i + vec3(1, 1, 0)), f.x), f.y),
                     mix(mix(lHash(i + vec3(0, 0, 1)), lHash(i + vec3(1, 0, 1)), f.x), mix(lHash(i + vec3(0, 1, 1)), lHash(i + vec3(1, 1, 1)), f.x), f.y), f.z);
        }`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
        // vân da: hạt sần ~3 mm + vân lớn; nghiêng pháp tuyến theo đạo hàm màn hình (mờ dần khi hạt nhỏ hơn điểm ảnh)
        float lg = lNoise(vLP * 330.0) * 0.7 + lNoise(vLP * 95.0) * 0.3;
        vec3 dpx = dFdx(-vViewPosition), dpy = dFdy(-vViewPosition);
        float hx = dFdx(lg), hy = dFdy(lg);
        float fade = 1.0 - smoothstep(0.08, 0.3, fwidth(vLP.x * 330.0) + fwidth(vLP.y * 330.0) + fwidth(vLP.z * 330.0));
        vec3 r1 = cross(dpy, normal), r2 = cross(normal, dpx);
        float det = dot(dpx, r1);
        vec3 grad = sign(det) * (hx * r1 + hy * r2);
        normal = normalize(abs(det) * normal - grad * 0.16 * fade);`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
        roughnessFactor = clamp(roughnessFactor + (lNoise(vLP * 330.0) - 0.5) * 0.25, 0.3, 1.0);`)},n.customProgramCacheKey=()=>"leather",xd.set(e,n),n}function iT(r){r.userData.glass=!0,r.metalness=0,r.roughness=Math.min(r.roughness,.04),r.depthWrite=!1,r.onBeforeCompile=t=>{t.fragmentShader=t.fragmentShader.replace("#include <opaque_fragment>",`#include <opaque_fragment>
      gl_FragColor.a = clamp(gl_FragColor.a + dot(reflectedLight.indirectSpecular + reflectedLight.directSpecular, vec3(0.3, 0.59, 0.11)) * 1.4, 0.0, 0.94);`)},r.customProgramCacheKey=()=>"glass-reflect"}var fa=(r,t,e)=>Math.min(e,Math.max(t,r)),Dl=16,Fl=35,sT=(r,t,e)=>{let n=((t-r+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI;return r+n*e},mg={chase:{distance:6.2,speedBack:1.4,cineBack:1.8,height:2.3,carHeight:.4,lookAhead:13,lookHeight:1.75,slopeLook:10,follow:5,lookFollow:7,near:.3,focal:16,aperture:3.5},low:{distance:4.2,height:.95,lookAhead:10,lookHeight:1,slopeLook:10,follow:5,lookFollow:7,near:.3,focal:24,aperture:3.5},side:{distance:23.2,height:4.35,lookHeight:.42,follow:9,lookFollow:12,near:.3,focal:24,aperture:1.8},cockpit:{eyeSide:0,eyeHeight:0,eyeForward:0,pitch:.24,lookDistance:30,follow:9,lookFollow:9,near:.04,focal:24,aperture:3.5},orbit:{radius:30,height:7.5,heightWave:3,waveRate:2,speed:.13,lookHeight:.8,follow:5,lookFollow:7,near:.3,focal:24,aperture:2.8},drone:{distance:15,height:13,lookAhead:6,lookHeight:.5,follow:3.5,lookFollow:7,near:.3,focal:24,aperture:3.5}},Il=class{constructor(t){this.camera=t,this.mode=0,this.yaw=0,this.orbit=.9,this.relP=new T,this.relL=new T,this.fov=60,this.first=!0,this.transition=null,this.cine=0,this.intro=-1,this._p=new T,this._l=new T,this._f=new T,this._r=new T,this._cp=new T,this._cl=new T,this._dl=new T,this._eye=new T,this.eyeAt=null,this.look={yaw:0,pitch:0,hold:!1,idle:0},this.sideSign=0,this.sidePref=0,this.sideDist=null,this.orbitR=null,this.tune=structuredClone(mg),this.focal=this.focalS=this.focalEff=24,this.aperture=this.apertureS=3.5}zoomBy(t){this.focal=fa(this.focal/t,Dl,Fl),this.tune[Xe[this.mode].id].focal=this.focal}fovFor(t){let e=Math.atan(18/t),n=this.camera.aspect||1.6;return(n>=1?2*Math.atan(Math.tan(e)/n):2*e)*180/Math.PI}lookBy(t,e){let n=this.look;n.yaw=Math.atan2(Math.sin(n.yaw-t),Math.cos(n.yaw-t)),n.pitch=fa(n.pitch+e,-1.2,1.2)}get name(){return Xe[this.mode].name}resetTune(t){this.tune[t]=structuredClone(mg[t]),this.setMode(this.mode)}startIntro(){this.intro=0,this.first=!0}setMode(t){let e=t%Xe.length;!this.first&&e!==this.mode&&(this.transition={elapsed:0,duration:2,fromP:this.relP.clone(),fromL:this.relL.clone(),fromFocal:this.focalS,fromAperture:this.apertureS,fromNear:this.camera.near}),this.mode=e,this.intro=-1,this.sideSign=0,this.look.yaw=this.look.pitch=0;let n=Xe[this.mode].id,i=this.tune[n];this.focal=i.focal,this.aperture=i.aperture,this.transition||(this.focalS=this.focal,this.apertureS=this.aperture,this.camera.near=i.near,this.camera.updateProjectionMatrix())}update(t,e){let n=Xe[this.mode].id,{pos:i,speed:s,dim:a}=e;this.yaw=this.first?e.yaw:sT(this.yaw,e.yaw,1-Math.exp(-t*3));let o=(L,P)=>P.set(-Math.sin(L),0,-Math.cos(L)),c=(L,P)=>P.set(Math.cos(L),0,-Math.sin(L)),l=o(this.yaw,this._f),h=new T(-Math.sin(e.yaw),0,-Math.cos(e.yaw)),u=c(e.yaw,this._r),f=this._p,d=this._l,g=5,v=7,m=!1,p=fa(s/45,0,1),x=e.fx||0,b=Math.tan(e.pitch||0),E=this.cine,M=this.tune[n];switch(g=M.follow,v=M.lookFollow,n){case"chase":f.copy(i).addScaledVector(l,-(a.length*.5+M.distance+M.speedBack*x+M.cineBack*E)).setY(i.y+M.height+a.height*M.carHeight),d.copy(i).addScaledVector(l,M.lookAhead).setY(i.y+M.lookHeight+b*M.slopeLook);break;case"low":f.copy(i).addScaledVector(l,-(a.length*.5+M.distance)).setY(i.y+M.height),d.copy(i).addScaledVector(l,M.lookAhead).setY(i.y+M.lookHeight+b*M.slopeLook);break;case"side":{this.sideSign||(this.sideSign=this.sidePref||e.side||1),f.copy(i).addScaledVector(u,this.sideSign*(this.sideDist??M.distance)).setY(i.y+M.height),d.copy(i).setY(i.y+a.height*M.lookHeight);break}case"cockpit":{let[L,P,D]=a.eye;this.eyeAt&&this.eyeAt(this._eye)?f.copy(this._eye):f.copy(i).addScaledVector(u,L).addScaledVector(h,-D).setY(i.y+P-b*D),f.addScaledVector(u,M.eyeSide).addScaledVector(h,M.eyeForward),f.y+=M.eyeHeight;let k=this.cockpitPitch==null?M.pitch:this.cockpitPitch+M.pitch-.24;d.copy(f).addScaledVector(h,M.lookDistance).setY(f.y-M.lookDistance*Math.tan(k)+b*M.lookDistance),m=!0;break}case"orbit":this.orbit+=t*M.speed;{let L=this.orbitR??M.radius;f.set(i.x+Math.cos(this.orbit)*L,i.y+M.height+Math.sin(this.orbit*M.waveRate)*M.heightWave,i.z+Math.sin(this.orbit)*L)}d.copy(i).setY(i.y+M.lookHeight);break;case"drone":f.copy(i).addScaledVector(l,-M.distance).setY(i.y+M.height),d.copy(i).addScaledVector(l,M.lookAhead).setY(i.y+M.lookHeight);break}this.focalEff=this.focalS*(1-.04*p);let y=this.fovFor(this.focalEff),w=!1;if(this.intro>=0&&n==="chase"){this.intro+=t;let L=Math.min(1,this.intro/6.5),P=L*L*(3-2*L);if(L>=1)this.intro=-1;else{w=!0;let D=this.tune.chase,k=a.length*.5+D.distance+D.cineBack*E,O=.5+(Math.PI-.5)*P,G=D.distance+(k-D.distance)*P,X=i.y+.65+(D.height+a.height*D.carHeight-.65)*P,K=d.clone();f.copy(i).addScaledVector(h,Math.cos(O)*G).addScaledVector(u,(e.side||1)*Math.sin(O)*Math.min(G,3.4)).setY(X),d.copy(i).setY(i.y+.7).lerp(K,P),y=36+(y-36)*P}}else this.intro>=0&&(this.intro=-1);let C=f.sub(i),_=d.sub(i),A=!!this.transition&&!w;if(A){let L=this.transition,P=fa((L.elapsed+=t)/L.duration,0,1),D=P*P*(3-2*P);this.relP.lerpVectors(L.fromP,C,D),this.relL.lerpVectors(L.fromL,_,D),this.focalS=Ue.lerp(L.fromFocal,this.focal,D),this.apertureS=Ue.lerp(L.fromAperture,this.aperture,D),this.camera.near=Ue.lerp(L.fromNear,M.near,D),P>=1&&(this.transition=null)}else{let L=1-Math.exp(-t*g),P=1-Math.exp(-t*v);m&&(L=P=1),(this.first||w)&&(L=P=1),this.relP.lerp(C,L),this.relL.lerp(_,P),this.focalS+=(this.focal-this.focalS)*(1-Math.exp(-t*8)),this.apertureS+=(this.aperture-this.apertureS)*(1-Math.exp(-t*8)),this.camera.near=M.near}this.focalEff=this.focalS*(1-.04*p),w||(y=this.fovFor(this.focalEff)),this.fov+=(y-this.fov)*(this.first||this.transition?1:1-Math.exp(-t*3)),this.first=!1;let I=this.look,H=this._cp.copy(this.relP),N=this._cl.copy(this.relL);if(Math.abs(I.yaw)>1e-4||Math.abs(I.pitch)>1e-4)if(m){let L=this._dl.copy(N).sub(H),P=L.length(),D=Math.atan2(L.x,L.z)-I.yaw,k=fa(Math.atan2(L.y,Math.hypot(L.x,L.z))+I.pitch,-1.2,1.2);L.set(Math.sin(D)*Math.cos(k),Math.sin(k),Math.cos(D)*Math.cos(k)).multiplyScalar(P),N.copy(H).add(L)}else{let L=Math.cos(I.yaw),P=Math.sin(I.yaw);H.set(H.x*L+H.z*P,H.y,-H.x*P+H.z*L),N.set(N.x*L+N.z*P,N.y,-N.x*P+N.z*L);let D=Math.hypot(H.x,H.z),k=H.length(),O=fa(Math.atan2(H.y,D)+I.pitch,.03,1.35),G=k*Math.cos(O)/Math.max(D,.001);H.set(H.x*G,k*Math.sin(O),H.z*G)}if(this.camera.position.copy(i).add(H),this.collide&&!m&&this.collide(i,this.camera.position,t),this.groundAt){let L=this.groundAt(this.camera.position.x,this.camera.position.z)+.6;this.camera.position.y<L&&(this.camera.position.y=L)}this._l.copy(i).add(N),this.camera.lookAt(this._l),(Math.abs(this.camera.fov-this.fov)>.01||A)&&(this.camera.fov=this.fov,this.camera.updateProjectionMatrix())}};var Hl=r=>440*Math.pow(2,(r-69)/12),ir=(r,t)=>r+Math.random()*(t-r),bd=r=>r[Math.floor(Math.random()*r.length)],Nl=(r,t,e)=>Math.min(e,Math.max(t,r)),gg=[[{r:41,n:[53,57,60,64]},{r:40,n:[52,55,59,62]},{r:38,n:[50,53,57,60]},{r:36,n:[52,55,59,62]}],[{r:38,n:[50,53,57,60]},{r:43,n:[53,55,59,62]},{r:36,n:[52,55,59,62]},{r:45,n:[55,57,60,64]}],[{r:36,n:[52,55,59,62]},{r:45,n:[55,57,60,64]},{r:38,n:[50,53,57,60]},{r:43,n:[53,55,59,62]}],[{r:45,n:[55,57,60,64]},{r:38,n:[50,53,57,60]},{r:43,n:[53,55,59,62]},{r:36,n:[52,55,59,62]}]],vg=[[0,6,10],[0,7,10,14],[0,10],[0,3,8,11]],rT=[72,74,76,79,81,84],Ul=class{constructor(){this.ctx=null,this.mode=0,this.bpm=74,this.step=0,this.bar=0,this.prog=gg[0],this.pattern=vg[0],this.lastMel=-99}async start(){if(this.ctx){await this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;this.master=e.createGain(),this.master.gain.value=0;let n=e.createDynamicsCompressor();n.threshold.value=-16,n.ratio.value=3,this.master.connect(n).connect(e.destination),this.musicGain=e.createGain();let i=e.createBiquadFilter();i.type="lowpass",i.frequency.value=4800,i.Q.value=.4,this.musicGain.connect(i).connect(this.master),this.pianoBus=e.createGain();let s=e.createBiquadFilter();s.type="lowpass",s.frequency.value=2400,this.pianoBus.connect(s).connect(this.musicGain),this.drumBus=e.createGain();let a=e.createBiquadFilter();a.type="lowpass",a.frequency.value=3400,this.drumBus.connect(a).connect(this.musicGain);let o=e.sampleRate*2.6,c=e.createBuffer(2,o,e.sampleRate);for(let g=0;g<2;g++){let v=c.getChannelData(g);for(let m=0;m<o;m++)v[m]=(Math.random()*2-1)*Math.pow(1-m/o,3.2)}this.reverb=e.createConvolver(),this.reverb.buffer=c;let l=e.createGain();l.gain.value=.38,this.reverbIn=e.createGain(),this.reverbIn.connect(this.reverb).connect(l).connect(this.musicGain),s.connect(this.reverbIn),this.echo=e.createDelay(2),this.echo.delayTime.value=60/this.bpm*.75;let h=e.createGain();h.gain.value=.34;let u=e.createBiquadFilter();u.type="lowpass",u.frequency.value=1800,this.echo.connect(u).connect(h).connect(this.echo),u.connect(this.musicGain),this.wow=e.createOscillator(),this.wow.frequency.value=.55,this.wowGain=e.createGain(),this.wowGain.gain.value=9,this.wow.connect(this.wowGain),this.wow.start();let f=e.createBuffer(1,e.sampleRate*2,e.sampleRate),d=f.getChannelData(0);for(let g=0;g<d.length;g++)d[g]=Math.random()*2-1;this.noise=f,this._vinyl(),this._ambient(),this.nextTime=e.currentTime+.15,this.timer=setInterval(()=>this._tick(),50),document.addEventListener("visibilitychange",()=>{document.hidden?e.suspend():this.mode!==2&&e.resume()}),this.setMode(this.mode)}setMode(t){if(this.mode=t,!this.ctx)return;let e=this.ctx.currentTime;this.master.gain.setTargetAtTime(t===2?0:.9,e,.4)}_src(t,e=!0){let n=this.ctx.createBufferSource();return n.buffer=t,n.loop=e,n.loopStart=Math.random(),n}_vinyl(){let t=this.ctx,e=t.sampleRate*4,n=t.createBuffer(1,e,t.sampleRate),i=n.getChannelData(0);for(let c=0;c<e;c++)i[c]=(Math.random()*2-1)*.012;for(let c=0;c<70;c++){let l=Math.floor(Math.random()*(e-10));i[l]+=ir(.25,.8)*(Math.random()<.5?-1:1),i[l+1]-=ir(.1,.4)}let s=t.createBufferSource();s.buffer=n,s.loop=!0;let a=t.createBiquadFilter();a.type="highpass",a.frequency.value=1300;let o=t.createGain();o.gain.value=.16,s.connect(a).connect(o).connect(this.musicGain),s.start()}_ambient(){let t=this.ctx;this.ambGain=t.createGain(),this.ambGain.gain.value=1,this.ambGain.connect(this.master),this.outLp=t.createBiquadFilter(),this.outLp.type="lowpass",this.outLp.frequency.value=2e4,this.outGain=t.createGain(),this.outGain.gain.value=1,this.outGain.connect(this.outLp).connect(this.ambGain);let e=(f,d,g)=>{let v=this._src(this.noise),m=t.createBiquadFilter();m.type=f,m.frequency.value=d,m.Q.value=g;let p=t.createGain();return p.gain.value=0,v.connect(m).connect(p).connect(this.outGain),v.start(),p};this.rainG=e("bandpass",2200,.5),this.windG=e("lowpass",420,.7),this.tireG=e("lowpass",750,.6);let n=t.createOscillator();n.frequency.value=.13,this.gustG=t.createGain(),this.gustG.gain.value=0,n.connect(this.gustG).connect(this.windG.gain),n.start(),this.engLp=t.createBiquadFilter(),this.engLp.type="lowpass",this.engLp.frequency.value=260,this.engG=t.createGain(),this.engG.gain.value=0,this.eng=[t.createOscillator(),t.createOscillator()],this.eng[0].type="sawtooth",this.eng[1].type="triangle",this.eng.forEach(f=>{f.frequency.value=40,f.connect(this.engLp),f.start()}),this.engLp.connect(this.engG).connect(this.ambGain);let i=t.sampleRate,s=i*4,a=t.createBuffer(1,s,i),o=a.getChannelData(0);for(let f=0;f<1400;f++){let d=Math.floor(Math.random()*s),g=.08+Math.random()*Math.random()*.5,v=1800+Math.random()*3800,m=i*(.0012+Math.random()*.0025),p=i*(.004+Math.random()*.008);for(let x=0;x<i*.03;x++)o[(d+x)%s]+=g*((Math.random()*2-1)*Math.exp(-x/m)+.5*Math.sin(6.2832*v*x/i)*Math.exp(-x/p))}let c=t.createBufferSource();c.buffer=a,c.loop=!0;let l=t.createBiquadFilter();l.type="highpass",l.frequency.value=700,this.glassG=t.createGain(),this.glassG.gain.value=0,c.connect(l).connect(this.glassG).connect(this.ambGain),c.start();let h=this._src(this.noise),u=t.createBiquadFilter();u.type="lowpass",u.frequency.value=900,this.roofG=t.createGain(),this.roofG.gain.value=0,h.connect(u).connect(this.roofG).connect(this.ambGain),h.start()}setAmbient({speed:t,rain:e,snow:n,wind:i=0,dark:s=0,fx:a=0,inCar:o=!1}){if(!this.ctx)return;let c=this.ctx.currentTime,l=.25,h=this.mode===0?1:0;this.ambGain.gain.setTargetAtTime(h,c,.4),this.outGain.gain.setTargetAtTime(o?.4:1,c,.3),this.outLp.frequency.setTargetAtTime(o?1600:2e4,c,.3),this.glassG.gain.setTargetAtTime(o?e*.08*(1+.6*s):0,c,.3),this.roofG.gain.setTargetAtTime(o?e*.02*(1+s):0,c,.3),this.rainG.gain.setTargetAtTime(e*.08*(1+.6*s),c,l),this.windG.gain.setTargetAtTime(.012+t*.0016+n*.05+i*i*.1+a*.085,c,l),this.gustG.gain.setTargetAtTime(i*i*.07,c,l),this.tireG.gain.setTargetAtTime(Math.min(t*.0011,.05)*(1+e),c,l);let u=30+t*2.2;this.eng[0].frequency.setTargetAtTime(u,c,.15),this.eng[1].frequency.setTargetAtTime(u*2,c,.15),this.engLp.frequency.setTargetAtTime(180+t*7,c,.2),this.engG.gain.setTargetAtTime(.02+Math.min(t,40)*4e-4,c,.2)}passDur(t){return Nl(2.8-t*.03,.8,2.6)}passBy(t,e=0,n=3){if(!this.ctx||this.mode!==0)return;let i=this.ctx,s=i.currentTime,a=this.passDur(t),o=s+a*.5,c=Nl(.12+t/45,.12,1)/(1+.12*Math.max(0,n-2)),l=i.createStereoPanner();l.pan.setValueAtTime(e*.4,s),l.pan.linearRampToValueAtTime(e,o),l.pan.linearRampToValueAtTime(e*.5,s+a),l.connect(this.outGain);let h=this._src(this.noise,!0),u=i.createBiquadFilter();u.type="bandpass",u.Q.value=.7,u.frequency.setValueAtTime(400+t*10,s),u.frequency.linearRampToValueAtTime(900+t*22,o),u.frequency.exponentialRampToValueAtTime(260+t*5,s+a);let f=i.createGain();f.gain.setValueAtTime(1e-4,s),f.gain.exponentialRampToValueAtTime(.16*c,o),f.gain.exponentialRampToValueAtTime(1e-4,s+a),h.connect(u).connect(f).connect(l),h.start(s),h.stop(s+a+.05);let d=i.createOscillator();d.type="sawtooth";let g=55+t*1.1,v=Math.min(.25,t/343);d.frequency.setValueAtTime(g*(1+v),s),d.frequency.setValueAtTime(g*(1+v),o-a*.08),d.frequency.exponentialRampToValueAtTime(g*(1-v),o+a*.12);let m=i.createBiquadFilter();m.type="lowpass",m.frequency.value=320+t*6;let p=i.createGain();p.gain.setValueAtTime(1e-4,s),p.gain.exponentialRampToValueAtTime(.07*c,o),p.gain.exponentialRampToValueAtTime(1e-4,s+a),d.connect(m).connect(p).connect(l),d.start(s),d.stop(s+a+.05)}setWater(t,e=0){if(!this.ctx)return;let n=this.ctx,i=n.currentTime;if(!this.waterG){if(t<=.001)return;let s=n.sampleRate,a=s*4,o=n.createBuffer(1,a,s),c=o.getChannelData(0),l=0;for(let f=0;f<a;f++)l=l*.985+(Math.random()*2-1)*.06,c[f]=l*.55+(Math.random()*2-1)*.045;for(let f=0;f<1500;f++){let d=Math.floor(Math.random()*a),g=380*Math.pow(5,Math.random()),v=s*(.003+Math.random()*.009),m=.05+Math.random()*Math.random()*.22,p=0;for(let x=0;x<v*3;x++)p+=6.2832*g*(1+.7*x/v)/s,c[(d+x)%a]+=m*Math.sin(p)*Math.exp(-x/v)}for(let f=0;f<2e3;f++){let d=f/2e3;c[f]=c[f]*d+c[a-2e3+f]*(1-d)}let h=n.createBufferSource();h.buffer=o,h.loop=!0,h.loopEnd=(a-2e3)/s;let u=n.createBiquadFilter();u.type="highpass",u.frequency.value=110,this.waterPan=n.createStereoPanner(),this.waterG=n.createGain(),this.waterG.gain.value=0,h.connect(u).connect(this.waterG).connect(this.waterPan).connect(this.outGain),h.start()}this.waterG.gain.setTargetAtTime(Nl(t,0,1)*.3,i,.35),this.waterPan.pan.setTargetAtTime(Nl(e,-1,1),i,.25)}splash(t=1){if(!this.ctx||this.mode!==0)return;let e=this.ctx,n=e.currentTime,i=.35+.45*Math.min(1,t),s=this._src(this.noise,!0),a=e.createBiquadFilter();a.type="bandpass",a.Q.value=.6,a.frequency.setValueAtTime(900+900*t,n),a.frequency.exponentialRampToValueAtTime(500,n+i);let o=e.createGain();o.gain.setValueAtTime(1e-4,n),o.gain.exponentialRampToValueAtTime(.22*t,n+.03),o.gain.exponentialRampToValueAtTime(1e-4,n+i),s.connect(a).connect(o).connect(this.outGain),s.start(n),s.stop(n+i+.05)}thunder(t=1.5,e=1){if(!this.ctx||this.mode!==0)return;let n=this.ctx,i=n.currentTime+t,s=n.sampleRate*5,a=n.createBuffer(1,s,n.sampleRate),o=a.getChannelData(0),c=0;for(let f=0;f<s;f++)c=(c+(Math.random()*2-1)*.06)/1.02,o[f]=c*3.5;let l=n.createBufferSource();l.buffer=a;let h=n.createBiquadFilter();h.type="lowpass",h.frequency.setValueAtTime(900,i),h.frequency.exponentialRampToValueAtTime(110,i+4);let u=n.createGain();u.gain.setValueAtTime(1e-4,i),u.gain.linearRampToValueAtTime(.9*e,i+.12),u.gain.setTargetAtTime(1e-4,i+.3,1.1),l.connect(h).connect(u).connect(this.outGain),l.start(i),l.stop(i+5),this._noiseHit(i,.25,"bandpass",700,.3*e,this.outGain)}_tick(){let t=this.ctx;if(!t||t.state!=="running")return;let e=60/this.bpm/4;for(;this.nextTime<t.currentTime+.3;){let n=this.step%2?e*.2:0;this._step(this.step,this.nextTime+n),this.nextTime+=e,++this.step===16&&(this.step=0,this.bar++)}}_step(t,e){t===0&&this.bar%4===0&&(this.prog=bd(gg),this.pattern=bd(vg));let n=this.prog[this.bar%4];if(this.pattern.includes(t)){let i=t===0?1:ir(.55,.8);n.n.forEach((s,a)=>this._epiano(s,e+a*.014+ir(0,.008),i,t===0?2.4:1.2))}t===0&&this._bass(n.r,e,1.7),(t===10||t===14&&Math.random()<.4)&&this._bass(n.r+(Math.random()<.5?0:7),e,.8),(t===0||t===10||t===7&&Math.random()<.3)&&this._kick(e),(t===4||t===12)&&this._snare(e),t%2===0&&this._hat(e,t%4===2?.8:.5,t===14&&Math.random()<.25),t%2===0&&this.bar-this.lastMel>0&&Math.random()<.16&&(this._pluck(bd(rT),e,ir(.5,.9)),this.lastMel=this.bar+(Math.random()<.5?0:-1))}_osc(t,e,n,i,s=0){let a=this.ctx.createOscillator();return a.type=t,a.frequency.value=e,a.detune.value=s,this.wowGain.connect(a.detune),a.start(n),a.stop(n+i),a}_epiano(t,e,n,i){let s=this.ctx,a=Hl(t),o=s.createGain();o.gain.setValueAtTime(1e-4,e),o.gain.linearRampToValueAtTime(n*.075,e+.012),o.gain.exponentialRampToValueAtTime(n*.03,e+.4),o.gain.exponentialRampToValueAtTime(1e-4,e+i),this._osc("sine",a,e,i+.1).connect(o),this._osc("triangle",a,e,i+.1,ir(3,8)).connect(o);let c=s.createGain();c.gain.setValueAtTime(n*.022,e),c.gain.exponentialRampToValueAtTime(1e-4,e+.2),this._osc("sine",a*4,e,.3).connect(c).connect(this.pianoBus),o.connect(this.pianoBus)}_bass(t,e,n){let i=this.ctx.createGain();i.gain.setValueAtTime(1e-4,e),i.gain.linearRampToValueAtTime(.2,e+.03),i.gain.exponentialRampToValueAtTime(1e-4,e+n);let s=this.ctx.createBiquadFilter();s.type="lowpass",s.frequency.value=380,this._osc("sine",Hl(t),e,n+.1).connect(i),this._osc("triangle",Hl(t),e,n+.1).connect(i),i.connect(s).connect(this.musicGain)}_pluck(t,e,n){let i=this.ctx.createGain();i.gain.setValueAtTime(1e-4,e),i.gain.linearRampToValueAtTime(n*.06,e+.01),i.gain.exponentialRampToValueAtTime(1e-4,e+1.1);let s=this.ctx.createBiquadFilter();s.type="lowpass",s.frequency.value=2200,this._osc("triangle",Hl(t),e,1.2).connect(i),i.connect(s),s.connect(this.pianoBus);let a=this.ctx.createGain();a.gain.value=.6,s.connect(a).connect(this.echo)}_kick(t){let e=this.ctx.createOscillator(),n=this.ctx.createGain();e.frequency.setValueAtTime(130,t),e.frequency.exponentialRampToValueAtTime(42,t+.14),n.gain.setValueAtTime(.5,t),n.gain.exponentialRampToValueAtTime(1e-4,t+.32),e.connect(n).connect(this.drumBus),e.start(t),e.stop(t+.35)}_noiseHit(t,e,n,i,s,a=this.drumBus){let o=this._src(this.noise,!1),c=this.ctx.createBiquadFilter();c.type=n,c.frequency.value=i;let l=this.ctx.createGain();l.gain.setValueAtTime(s,t),l.gain.exponentialRampToValueAtTime(1e-4,t+e),o.connect(c).connect(l).connect(a),o.start(t,Math.random()),o.stop(t+e+.02)}_snare(t){this._noiseHit(t,.16,"bandpass",1900,.28);let e=this.ctx.createOscillator(),n=this.ctx.createGain();e.frequency.value=185,n.gain.setValueAtTime(.16,t),n.gain.exponentialRampToValueAtTime(1e-4,t+.1),e.connect(n).connect(this.drumBus),e.start(t),e.stop(t+.12)}_hat(t,e,n){this._noiseHit(t,n?.2:.045,"highpass",7500,.12*e*ir(.7,1))}};var kl=27,aT=12,yd=2;function Ol(r){let t=r>>>0;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function oT(){let r=Ol(3),t=[],e=[],n=[],i=[],s=new et(6971440),a=new et(11115094),o=new et(14733202),c=(u,f,d,g,v)=>{t.push(u,f,d),n.push(g.r,g.g,g.b),e.push(v[0],v[1],v[2])},l=5;for(let u=0;u<l;u++){let f=u/l*Math.PI*2+(r()-.5)*.7,d=Math.cos(f),g=Math.sin(f),v=-g,m=d,p=1.05+r()*.6,x=.35+r()*.45,b=new T(d*.35,1,g*.35).normalize().toArray(),E=[{c:[d*.03,0,g*.03],hw:.034,col:s},{c:[d*x*.4,p*.6,g*x*.4],hw:.03,col:a}],M=t.length/3;for(let y of E)c(y.c[0]-v*y.hw,y.c[1],y.c[2]-m*y.hw,y.col,b),c(y.c[0]+v*y.hw,y.c[1],y.c[2]+m*y.hw,y.col,b);c(d*x,p*.92,g*x,o,b),i.push(M,M+1,M+2,M+1,M+3,M+2,M+2,M+3,M+4)}let h=new Rt;return h.setAttribute("position",new wt(t,3)),h.setAttribute("normal",new wt(e,3)),h.setAttribute("color",new wt(n,3)),h.setIndex(i),h}function cT(){let r=Ol(11),t=[],e=[],n=[],i=[],s=new et(3955232),a=new et(7312436),o=new et(12176482),c=(u,f,d,g,v)=>{t.push(u,f,d),n.push(g.r,g.g,g.b),e.push(v[0],v[1],v[2])},l=5;for(let u=0;u<l;u++){let f=u/l*Math.PI*2+(r()-.5)*.9,d=Math.cos(f),g=Math.sin(f),v=-g,m=d,p=.32+r()*.45,x=.05+r()*.18,b=(r()-.5)*.25,E=(r()-.5)*.25,M=new T(d*.3,1,g*.3).normalize().toArray(),y=t.length/3;c(b-v*.03,0,E-m*.03,s,M),c(b+v*.03,0,E+m*.03,s,M),c(b+d*x*.4-v*.024,p*.55,E+g*x*.4-m*.024,a,M),c(b+d*x*.4+v*.024,p*.55,E+g*x*.4+m*.024,a,M),c(b+d*x,p,E+g*x,o,M),i.push(y,y+1,y+2,y+1,y+3,y+2,y+2,y+3,y+4)}let h=new Rt;return h.setAttribute("position",new wt(t,3)),h.setAttribute("normal",new wt(e,3)),h.setAttribute("color",new wt(n,3)),h.setIndex(i),h}function lT(){let r=Ol(29),t=[],e=[],n=[],i=[],s=new et(4612666),a=new et(8036444),o=new et(12046479),c=(u,f,d,g,v)=>{t.push(u,f,d),n.push(g.r,g.g,g.b),e.push(v[0],v[1],v[2])},l=7;for(let u=0;u<l;u++){let f=u/l*Math.PI*2+(r()-.5)*.8,d=Math.cos(f),g=Math.sin(f),v=-g,m=d,p=.9+r()*.5,x=.12+r()*.3,b=.035+r()*.02,E=(r()-.5)*.3,M=(r()-.5)*.3,y=new T(d*.3,1,g*.3).normalize().toArray(),w=t.length/3,C=[[0,b,s],[.45,b*.85,a],[.8,b*.5,a.clone().lerp(o,.5)],[1,.002,o]];for(let[_,A,I]of C){let H=E+d*x*_*_,N=M+g*x*_*_,L=p*_;c(H-v*A,L,N-m*A,I,y),c(H+v*A,L,N+m*A,I,y)}for(let _=0;_<C.length-1;_++){let A=w+_*2;i.push(A,A+1,A+2,A+1,A+3,A+2)}}let h=new Rt;return h.setAttribute("position",new wt(t,3)),h.setAttribute("normal",new wt(e,3)),h.setAttribute("color",new wt(n,3)),h.setIndex(i),h}function hT(){let r=[],t=[],e=[],n=[],i=(a,o,c,l,h)=>{let u=Math.cos(a),f=Math.sin(a),d=r.length/3;for(let[g,v]of[[0,0],[1,0],[1,1],[0,1]]){let m=(g-.5)*c,p=o-l+v*l,x=h*v*v;r.push(m*u+x,p,m*f),t.push(0,1,0),e.push(g,v)}n.push(d,d+1,d+2,d,d+2,d+3)};i(.3,2,.34,.98,.1),i(.3+Math.PI/2,2,.34,.98,.1),i(1.3,1.72,.27,.74,-.06);let s=new Rt;return s.setAttribute("position",new wt(r,3)),s.setAttribute("normal",new wt(t,3)),s.setAttribute("uv",new wt(e,2)),s.setIndex(n),s}var uT=`
attribute vec4 aSeed;
uniform vec3 uCam;
uniform float uTime, uWind, uCell, uScale, uIn0, uIn1, uOut0, uOut1, uCorr;
uniform vec2 uWindDir;
uniform vec3 uRoad[${kl}];     // (x, y, z) của tim đường
uniform float uCarve0, uCarve1, uTipH, uPatch;
${m0}
// khoảng cách tới đường + độ cao mặt đường tại điểm gần nhất
float roadDist(vec2 p, out float ry) {
  float dm = 1e9; ry = 0.0;
  for (int i = 0; i < ${kl-1}; i++) {
    vec2 a = uRoad[i].xz, b = uRoad[i + 1].xz, ab = b - a;
    float t = clamp(dot(p - a, ab) / dot(ab, ab), 0.0, 1.0);
    float d = length(p - a - ab * t);
    if (d < dm) { dm = d; ry = mix(uRoad[i].y, uRoad[i + 1].y, t); }
  }
  return dm;
}
`,fT=`
vec2 basePos = aSeed.xy * uCell;
vec2 rel = mod(basePos - uCam.xz + uCell * 0.5, uCell) - uCell * 0.5;
vec2 wp = uCam.xz + rel;
float dist = length(rel);
float vis = smoothstep(uIn0, uIn1, dist) * (1.0 - smoothstep(uOut0, uOut1, dist));
float ry;
float rd = roadDist(wp, ry);
vis *= smoothstep(uCorr, uCorr + 1.5, rd);
// độ cao mặt đất (cùng công thức với lưới địa hình trên CPU, không gồm núi xa)
float gy = tLow(wp) + tDetail(wp);
gy = mix(ry - 0.02, gy, smoothstep(uCarve0, uCarve1, rd));
float h = (0.72 + 0.6 * aSeed.w) * uScale * vis;
// đồi cỏ: cao thấp theo từng mảng lớn (sóng cỏ chập chùng)
h *= mix(1.0, 0.72 + 0.5 * (0.5 + 0.5 * sin(wp.x * 0.041 + 1.7 * sin(wp.y * 0.023))) * (0.6 + 0.4 * sin(wp.y * 0.057 + wp.x * 0.013)), uPatch);
float ang = aSeed.z * 6.2831853;
float cs = cos(ang), sn = sin(ang);
float tip = clamp(position.y / uTipH, 0.0, 1.0);
vec3 transformed = vec3(position.x * cs - position.z * sn, position.y, position.x * sn + position.z * cs) * h;
// gió: sóng chạy theo hướng gió + sóng ngang + rung
float phase = dot(wp, uWindDir) * 0.07 - uTime * (1.1 + uWind * 1.7);
float wave = 0.5 + 0.5 * sin(phase);
float wave2 = 0.5 + 0.5 * sin(dot(wp, vec2(-uWindDir.y, uWindDir.x)) * 0.12 + uTime * 0.9 + phase * 0.35);
float amp = (0.07 + 0.95 * uWind) * (0.3 + 0.7 * wave) * (0.65 + 0.35 * wave2);
float bend = amp * tip * tip;
transformed.xz += uWindDir * bend * h * 1.15;
transformed.xz += vec2(sin(uTime * 7.0 + wp.x * 1.7), cos(uTime * 8.3 + wp.y * 1.9)) * 0.035 * uWind * tip * h;
transformed.y -= bend * bend * 0.4 * h;
transformed += vec3(wp.x, gy, wp.y);
`,da=class{constructor(t,e,n="reed"){this.kind=n;let i=n==="meadow",s=n==="grass"||i;this.group=new Pt,t.add(this.group),this.density=1,this.roadPts=Array.from({length:kl},()=>new T),this.shared={uCam:{value:new T},uTime:{value:0},uWind:{value:.3},uWindDir:{value:new rt(.78,.62).normalize()},uRoad:{value:this.roadPts},uCorr:{value:Me.halfWidth+(i?.7:s?.3:1)},uTipH:{value:i?1.4:s?.8:1.95},uPatch:{value:i?1:0},uCarve0:{value:Me.halfWidth+1.2},uCarve1:{value:Me.halfWidth+16},uTLow:{value:_e.low},uTDet:{value:_e.det},uTFine:{value:_e.fine}},this.leafGeo=i?lT():s?cT():oT(),this.plumeGeo=s?null:hT();let a=s?null:b0();a&&(a.anisotropy=Math.min(4,e.capabilities.getMaxAnisotropy()));let o=i?[{cell:60,count:24e3,scale:1.05,in0:-1,in1:0,out0:26,out1:36,seed:5},{cell:230,count:14e3,scale:1.6,in0:24,in1:38,out0:95,out1:135,seed:6}]:s?[{cell:64,count:16e3,scale:1,in0:-1,in1:0,out0:22,out1:32,seed:3},{cell:220,count:8e3,scale:1.8,in0:20,in1:34,out0:75,out1:105,seed:4}]:[{cell:86,count:19e3,scale:1,in0:-1,in1:0,out0:30,out1:43,seed:1},{cell:340,count:11e3,scale:1.55,in0:27,in1:46,out0:118,out1:165,seed:2}];this.layers=o.map((c,l)=>{let h=l===o.length-1,u=h?c.count*yd*yd:c.count,f=Ol(c.seed*977),d=new Float32Array(u*4);for(let x=0;x<d.length;x++)d[x]=f();let g=new un(d,4),v={uCell:{value:c.cell},uScale:{value:c.scale},uIn0:{value:c.in0},uIn1:{value:c.in1},uOut0:{value:c.out0},uOut1:{value:c.out1}},m=this._mesh(this.leafGeo,g,c.count,v,new to({vertexColors:!0,side:de}),!0);if(s)return{max:c.count,far:h,L:c,uni:v,meshes:[m]};let p=this._mesh(this.plumeGeo,g,c.count,v,new to({map:a,side:de,alphaTest:.2,alphaToCoverage:!0}),!1);return{max:c.count,far:h,L:c,uni:v,meshes:[m,p]}}),this.mats=this.layers.flatMap(c=>c.meshes.map(l=>l.material)),this.group.visible=!0}_mesh(t,e,n,i,s,a){let o=new Yc;o.index=t.index;for(let h of Object.keys(t.attributes))o.setAttribute(h,t.attributes[h]);o.setAttribute("aSeed",e),o.instanceCount=n;let c=this.shared;s.onBeforeCompile=h=>{Object.assign(h.uniforms,c,i),h.vertexShader=h.vertexShader.replace("#include <common>",`#include <common>
`+uT).replace("#include <begin_vertex>",fT),a&&(h.vertexShader=h.vertexShader.replace("#include <color_vertex>",`#include <color_vertex>
#ifdef USE_COLOR
vColor *= 0.78 + 0.44 * fract(aSeed.w * 9.31);
#endif`)),h.fragmentShader=h.fragmentShader.replace("#include <normal_fragment_begin>",Jt.normal_fragment_begin.replace("normal *= faceDirection;","")).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance = emissive * diffuseColor.rgb;`)},me(s);let l=new Ft(o,s);return l.frustumCulled=!1,l.layers.set(3),this.group.add(l),l}set visible(t){this.group.visible=t}get visible(){return this.group.visible}setDensity(t){this.density=t;let e=this.view||1;for(let n of this.layers)for(let i of n.meshes)i.geometry.instanceCount=Math.floor(n.max*t*(n.far?e*e:1))}setView(t){this.view=Math.min(Math.max(t,1),yd);for(let e of this.layers)e.far&&(e.uni.uCell.value=e.L.cell*this.view,e.uni.uOut0.value=e.L.out0*this.view,e.uni.uOut1.value=e.L.out1*this.view);this.setDensity(this.density??1)}update(t,e,n,i,s){let a=this.shared;a.uTime.value=t,a.uCam.value.copy(e),a.uWind.value=s.wind,a.uWindDir.value.copy(s.windDir),a.uTLow.value=_e.low,a.uTDet.value=_e.det,a.uTFine.value=_e.fine;let o={};for(let f=0;f<kl;f++)n.at(i+(f-12)*aT*(this.view||1),o),this.roadPts[f].set(o.x,o.y,o.z);let c=(this.kind==="reed"?.5:.3)*s.dayF*(1-s.overcast*.85)*(.4+.6*s.warm),l=new et(1,.72+.2*(1-s.warm),.42+.45*(1-s.warm)).multiplyScalar(c),h=(.2*s.dayF*(1-.55*s.dark)+.05*s.night)*(.6+.4*s.overcast)+s.flash*.9;l.add(new et(.8,.88,1).multiplyScalar(h));let u=1-.28*s.wet;for(let f of this.layers)f.meshes[0].material.emissive.copy(l),f.meshes[1]&&f.meshes[1].material.emissive.copy(l).multiplyScalar(1.7);for(let f of this.mats)f.color.setScalar(u*(1-.15*s.dark))}};var dT=`
  varying vec2 vUv;
  void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,xg=`
  uniform float uExposure;
  vec3 rrtOdt(vec3 v) { vec3 a = v * (v + 0.0245786) - 0.000090537; vec3 b = v * (0.983729 * v + 0.4329510) + 0.238081; return a / b; }
  vec3 toDisplay(vec3 c) {
    const mat3 IN = mat3(vec3(0.59719, 0.07600, 0.02840), vec3(0.35458, 0.90834, 0.13383), vec3(0.04823, 0.01566, 0.83777));
    const mat3 OUT = mat3(vec3(1.60475, -0.10208, -0.00327), vec3(-0.53108, 1.10813, -0.07276), vec3(-0.07367, -0.00605, 1.07602));
    c = clamp(OUT * rrtOdt(IN * (c * uExposure / 0.6)), 0.0, 1.0);
    return mix(pow(c, vec3(0.41666)) * 1.055 - vec3(0.055), c * 12.92, vec3(lessThanEqual(c, vec3(0.0031308))));
  }`,pT=`
  uniform sampler2D tSrc; uniform vec2 uTexel; uniform float uThresh;
  varying vec2 vUv;
  ${xg}
  void main() {
    vec3 c = (toDisplay(texture2D(tSrc, vUv + uTexel * vec2(-1.0, -1.0)).rgb) + toDisplay(texture2D(tSrc, vUv + uTexel * vec2(1.0, -1.0)).rgb)
            + toDisplay(texture2D(tSrc, vUv + uTexel * vec2(-1.0, 1.0)).rgb) + toDisplay(texture2D(tSrc, vUv + uTexel * vec2(1.0, 1.0)).rgb)) * 0.25;
    float l = max(c.r, max(c.g, c.b));
    gl_FragColor = vec4(c * smoothstep(uThresh, uThresh + 0.07, l), 1.0);
  }`,mT=`
  uniform sampler2D tSrc; uniform vec2 uDir;
  varying vec2 vUv;
  void main() {
    vec3 s = texture2D(tSrc, vUv).rgb * 0.2270270270;
    s += (texture2D(tSrc, vUv + uDir * 1.3846153846).rgb + texture2D(tSrc, vUv - uDir * 1.3846153846).rgb) * 0.3162162162;
    s += (texture2D(tSrc, vUv + uDir * 3.2307692308).rgb + texture2D(tSrc, vUv - uDir * 3.2307692308).rgb) * 0.0702702703;
    gl_FragColor = vec4(s, 1.0);
  }`,gT=`
  uniform sampler2D tScene, tDepth; uniform vec2 uTexel;
  uniform float uNear, uFar, uFocus, uFocusRange, uCocK, uMaxCoc;
  varying vec2 vUv;
  float dist(vec2 uv) { float d = texture2D(tDepth, uv).x; return uNear * uFar / (uFar - d * (uFar - uNear)); }
  // trong khoảng ±uFocusRange quanh điểm lấy nét (bề dày chiếc xe) thì nét hoàn toàn
  float coc(float z) { float d = z - uFocus; d = sign(d) * max(abs(d) - uFocusRange, 0.0); return clamp(uCocK * d / max(z, 1e-3), -uMaxCoc, uMaxCoc); }
  void main() {
    vec2 o = uTexel * 0.5;
    vec3 c = (texture2D(tScene, vUv + vec2(-o.x, -o.y)).rgb + texture2D(tScene, vUv + vec2(o.x, -o.y)).rgb
            + texture2D(tScene, vUv + vec2(-o.x, o.y)).rgb + texture2D(tScene, vUv + vec2(o.x, o.y)).rgb) * 0.25;
    // lấy CoC "gần nhất" trong 4 điểm ảnh gốc để viền tiền cảnh không bị hụt
    float z = min(min(dist(vUv + vec2(-o.x, -o.y)), dist(vUv + vec2(o.x, -o.y))), min(dist(vUv + vec2(-o.x, o.y)), dist(vUv + vec2(o.x, o.y))));
    gl_FragColor = vec4(min(c, vec3(64.0)), coc(z));
  }`,vT=`
  uniform sampler2D tSrc; uniform vec2 uTexel;
  varying vec2 vUv;
  void main() {
    float m = 0.0;
    for (int y = 0; y < 4; y++) for (int x = 0; x < 4; x++)
      m = max(m, -texture2D(tSrc, vUv + (vec2(float(x), float(y)) - 1.5) * uTexel).a);
    gl_FragColor = vec4(m, 0.0, 0.0, 1.0);
  }`,xT=`
  uniform sampler2D tSrc; uniform vec2 uTexel;
  varying vec2 vUv;
  void main() {
    float m = 0.0;
    for (int y = -3; y <= 3; y++) for (int x = -3; x <= 3; x++) {
      vec2 d = vec2(float(x), float(y));
      float v = texture2D(tSrc, vUv + d * uTexel).r;
      m = max(m, v * step(length(d) - 0.5, v / 8.0 + 1.0));   // ô ở xa chỉ tính nếu vòng nhoè của nó với tới
    }
    gl_FragColor = vec4(m, 0.0, 0.0, 1.0);
  }`,bT=`
  uniform sampler2D tSrc, tNear; uniform vec2 uTexelFull; uniform float uMaxCoc; uniform int uN;
  varying vec2 vUv;
  float hash12(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
  void main() {
    vec4 c0 = texture2D(tSrc, vUv);
    float cc = abs(c0.a);
    float R = clamp(max(cc, texture2D(tNear, vUv).r), 0.0, uMaxCoc);
    if (R < 0.75) { gl_FragColor = vec4(c0.rgb, 0.0); return; }
    vec3 col = c0.rgb; float tot = 1.0; float fg = 0.0;
    float rot = hash12(gl_FragCoord.xy) * 6.2831853;
    float fN = float(uN);
    float band = R * (1.0 / sqrt(fN)) + 0.5;
    for (int i = 0; i < 64; i++) {
      if (i >= uN) break;
      float r = R * sqrt((float(i) + 0.5) / fN);
      float a = float(i) * 2.39996323 + rot;
      vec4 s = texture2D(tSrc, vUv + vec2(cos(a), sin(a)) * r * uTexelFull);
      float cs = abs(s.a);
      if (s.a > c0.a) cs = min(cs, cc * 2.0);             // mẫu ở sau: không lem lên vật phía trước đang nét
      float m = smoothstep(r - band, r + band, cs);
      col += mix(col / tot, s.rgb, m);
      tot += 1.0;
      fg += m * step(s.a, c0.a - 1.0);                     // phần tiền cảnh phủ lên điểm này
    }
    col /= tot;
    float k = max(smoothstep(0.6, 2.2, cc), clamp(fg * 3.0 / fN, 0.0, 1.0));
    gl_FragColor = vec4(col, k);
  }`,yT=`
  uniform sampler2D tScene, tDepth; uniform float uNear, uFar, uAspect; uniform vec2 uSun;
  varying vec2 vUv;
  void main() {
    float d = texture2D(tDepth, vUv).x;
    float z = uNear * uFar / (uFar - d * (uFar - uNear));
    float sky = smoothstep(0.88, 0.97, z / uFar);
    float l = dot(texture2D(tScene, vUv).rgb, vec3(0.3, 0.59, 0.11));
    vec2 dd = (vUv - uSun) * vec2(uAspect, 1.0);
    gl_FragColor = vec4(vec3(sky * exp(-dot(dd, dd) * 7.0) * smoothstep(0.08, 1.2, l)), 1.0);
  }`,_T=`
  uniform sampler2D tSrc; uniform vec2 uSun; uniform float uLen;
  varying vec2 vUv;
  void main() {
    vec2 step = (vUv - uSun) * uLen / 32.0, uv = vUv;
    vec3 s = vec3(0.0); float w = 1.0, tot = 0.0;
    for (int i = 0; i < 32; i++) { s += texture2D(tSrc, uv).rgb * w; tot += w; w *= 0.965; uv -= step; }
    gl_FragColor = vec4(s / tot, 1.0);
  }`,MT=`
  uniform float uGlass, uRearGlass, uNear, uFar, uTanF, uSweep;
  uniform sampler2D tDepth;
  uniform mat4 uInvVP;
  uniform vec3 uCamPos, uCamFwd, uGC, uGN, uGU, uGV;
  uniform vec4 uGB, uPiv, uRest, uBlade, uWipe;     // 2 cần gạt: trục (u,v)×2, (góc nghỉ, chiều quay)×2, (bán kính trong, ngoài)×2
  uniform vec2 uFlow;
  uniform sampler2D tGlassMask;
  // tuổi lớp nước (giây kể từ lần lưỡi gạt quét qua điểm g) với 1 cần gạt (cần gạt 3D vẽ cùng trục / góc)
  float wipeAge(vec2 g, vec2 piv, float rest, float sgn, vec2 rr) {
    vec2 d = g - piv;
    float phi = mod(sgn * (atan(d.y, d.x) - rest) + 3.14159265, 6.2831853) - 3.14159265;
    float r = length(d);
    if (r < rr.x || r > rr.y || phi < 0.0 || phi > uSweep) return 1e3;
    float a = acos(clamp(1.0 - 2.0 * phi / uSweep, -1.0, 1.0));
    float ps = uWipe.x;
    float last = ps >= 6.2831853 - a ? 6.2831853 - a : (ps >= a ? a : -a);
    return (ps - last) / uWipe.y + uWipe.z;
  }
  // một lớp giọt tĩnh trên lưới ô cỡ cell (m): vec4(toạ độ trong giọt, độ phủ, tia bắn toé)
  vec4 drops(vec2 g, float cell, vec2 rr, float seed, float age, float dens) {
    vec2 id = floor(g / cell), f = fract(g / cell) - 0.5;
    float h1 = hash12(id + seed), h2 = hash12(id + seed + 17.3), h3 = hash12(id + seed + 41.9), h4 = hash12(id + seed + 73.1);
    if (h4 > dens) return vec4(0.0);
    float r = mix(rr.x, rr.y, h2 * h2) / cell;
    vec2 c = (vec2(h1, h3) - 0.5) * max(1.0 - 2.0 * r, 0.0);
    float t = age - h1 * 2.6 / (0.35 + dens);               // lúc giọt này rơi xuống (sau lần gạt)
    if (t < 0.0) return vec4(0.0);
    float sp = 1.0 - smoothstep(0.0, 0.14, t);              // vừa chạm kính: loang rộng rồi co lại
    vec2 q = (f - c) / r / (1.0 + 0.45 * sp);
    float l = length(q);
    float ring = sp * smoothstep(0.14, 0.0, abs(l - 1.2 - 1.5 * (1.0 - sp))) * step(0.55, fract(atan(q.y, q.x) * 0.955 + h3 * 7.0));
    return vec4(q, smoothstep(1.0, 0.8, l), ring);
  }
  // giọt chảy thành vệt theo từng cột: vec4(toạ độ trong giọt, độ phủ đầu giọt, vệt nước phía sau)
  vec4 runs(vec2 g, float w, float seed, float dens) {
    float cid = floor(g.x / w);
    float h1 = hash12(vec2(cid, seed)), h2 = hash12(vec2(cid, seed + 9.7)), h3 = hash12(vec2(cid, seed + 23.1));
    if (h3 > dens * 0.55) return vec4(0.0);
    float L = 0.3 + 0.45 * h2;
    float a = fract(((g.y - uFlow.x * (0.6 + 0.8 * h1)) / L + h2) * uFlow.y) * L;   // quãng theo hướng chảy
    float wob = sin(g.y * 31.0 + h1 * 6.0) * 0.004 + sin(g.y * 83.0 + h2 * 3.0) * 0.0015;
    float fx = (fract(g.x / w) - 0.5 - (h2 - 0.5) * 0.4) * w + wob;
    float rd = 0.005 + 0.004 * h1, ah = 0.93 * L, tl = 0.3 * L;
    vec2 q = vec2(fx, (a - ah) * uFlow.y) / rd;
    float head = smoothstep(1.0, 0.8, length(q * vec2(1.0, 0.75)));
    float k = clamp((a - ah + tl) / tl, 0.0, 1.0);
    float trail = step(a, ah) * k * smoothstep(rd * 0.4 * k + 1e-4, rd * 0.15 * k, abs(fx));
    return vec4(q, head, trail);
  }
  vec3 rainGlass(vec3 col, vec2 uv) {
    vec2 g;
    float zg, m;
    if (uRearGlass > 0.5) {
      vec4 glass = texture2D(tGlassMask, uv);
      g = glass.xy; zg = glass.z; m = glass.a;
      // Thu vào một pixel để không phủ lên viền kính ở độ phân giải thấp.
      vec2 px = 1.0 / uRes;
      m = min(m, texture2D(tGlassMask, uv + vec2(px.x, 0.0)).a);
      m = min(m, texture2D(tGlassMask, uv - vec2(px.x, 0.0)).a);
      m = min(m, texture2D(tGlassMask, uv + vec2(0.0, px.y)).a);
      m = min(m, texture2D(tGlassMask, uv - vec2(0.0, px.y)).a);
    } else {
      vec4 wp = uInvVP * vec4(uv * 2.0 - 1.0, 1.0, 1.0);
      vec3 dir = normalize(wp.xyz / wp.w - uCamPos);
      float dn = dot(dir, uGN);
      if (dn > -1e-3) return col;
      float t = dot(uGC - uCamPos, uGN) / dn;
      if (t <= 0.0) return col;
      vec3 hit = uCamPos + dir * t - uGC;
      g = vec2(dot(hit, uGU), dot(hit, uGV));
      float inB = smoothstep(uGB.x, uGB.x + 0.04, g.x) * smoothstep(uGB.y, uGB.y - 0.04, g.x)
                * smoothstep(uGB.z, uGB.z + 0.02, g.y) * smoothstep(uGB.w, uGB.w - 0.03, g.y);
      float zs = uNear * uFar / (uFar - texture2D(tDepth, uv).x * (uFar - uNear));
      zg = t * dot(dir, uCamFwd);
      m = inB * smoothstep(zg - 0.01, zg, zs);
    }
    if (m <= 0.001) return col;
    float age = uRearGlass > 0.5 ? 1e3 : min(wipeAge(g, uPiv.xy, uRest.x, uRest.y, uBlade.xy), wipeAge(g, uPiv.zw, uRest.z, uRest.w, uBlade.zw));
    vec4 A = drops(g, 0.056, vec2(0.008, 0.017), 1.0, age, uGlass * 0.7);
    vec4 B = drops(g + 0.013, 0.026, vec2(0.0035, 0.0075), 5.0, age, uGlass * 0.85);
    vec4 C = drops(g + vec2(0.009, 0.027), 0.04, vec2(0.0055, 0.012), 9.0, age, uGlass * 0.65);
    vec4 R = age > 0.7 ? runs(g, 0.06, 3.0, uGlass) : vec4(0.0);
    vec4 D = A; float rd = 0.011;
    if (B.z > D.z) { D = B; rd = 0.005; }
    if (C.z > D.z) { D = C; rd = 0.008; }
    if (R.z > D.z) { D = vec4(R.xy, R.z, 0.0); rd = 0.007; }
    vec2 k = vec2(1.0 / uAspect, 1.0) / (2.0 * uTanF * zg);     // uv màn hình trên mỗi mét mặt kính
    vec3 o = col;
    if (R.w > 0.0) o = mix(o, sceneAt(clamp(uv + vec2(0.0, 0.006), 0.0, 1.0)) * 0.85, R.w * 0.7);
    if (D.z > 0.0) {
      vec2 q = D.xy;
      float h = sqrt(max(1.0 - dot(q, q), 0.0));
      vec3 refr = sceneAt(clamp(uv - q * rd * 3.0 * k, 0.0, 1.0));
      float l = dot(refr, vec3(0.3, 0.59, 0.11));
      vec3 dc = refr * (0.12 + 1.0 * smoothstep(0.05, 0.75, h));                 // viền giọt tối, giữa sáng
      dc += vec3(0.92, 0.96, 1.0) * (0.3 + l) * 1.5 * smoothstep(0.36, 0.0, length(q - vec2(-0.3, 0.42)));   // đốm sáng
      o = mix(o, dc, D.z);
    }
    o += vec3(0.6) * max(max(A.w, B.w), C.w) * (0.15 + dot(col, vec3(0.3, 0.59, 0.11)));
    return mix(col, o, m);
  }`,ET=`
  uniform sampler2D tScene, tBloom, tDof, tRays;
  uniform vec3 uRayCol;
  uniform float uFx, uCine, uTime, uAspect, uDof;
  uniform vec2 uRes;
  varying vec2 vUv;
  ${xg}
  float hash12(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
  vec3 sceneAt(vec2 uv) {
    vec3 s = texture2D(tScene, uv).rgb;
    if (uDof > 0.0) { vec4 d = texture2D(tDof, uv); s = mix(s, d.rgb, clamp(d.a, 0.0, 1.0) * uDof); }
    return s;
  }
  ${MT}
  void main() {
    vec2 d = vUv - vec2(0.5);
    vec2 da = d * vec2(uAspect, 1.0);
    float dist = length(da);
    float amt = uFx * smoothstep(0.04, 0.8, dist) * 0.11;
    vec3 col;
    if (uFx > 0.01) {
      // blur xuyên tâm: càng xa tâm càng bị kéo dài (như đang lao về phía trước)
      col = vec3(0.0);
      float tot = 0.0;
      for (int i = 0; i < 16; i++) {
        float t = float(i) / 15.0;
        float w = 1.0 - 0.55 * t;
        col += sceneAt(vUv - d * amt * t) * w;
        tot += w;
      }
      col /= tot;
    } else {
      col = sceneAt(vUv);
    }
    col += texture2D(tRays, vUv).rgb * uRayCol;                // tia nắng (cộng vào ánh sáng tuyến tính)
    // quang sai nhẹ ở mép khung hình
    float ca = uCine * 0.0008 * smoothstep(0.2, 1.0, dist);   // chỉ ở chế độ cinematic; blur tốc độ không tách màu (tránh lốm đốm)
    if (ca > 0.0) {
      col.r = mix(col.r, sceneAt(vUv - d * (amt + ca)).r, 0.5);
      col.b = mix(col.b, sceneAt(vUv - d * max(amt - ca, 0.0)).b, 0.5);
    }
    if (uGlass > 0.0) col = rainGlass(col, vUv);              // (sau quang sai: không bị viền tím quanh giọt)
    col = toDisplay(col);
    // bloom
    col += texture2D(tBloom, vUv).rgb * 0.45 * uCine;
    // chỉnh màu phim: bóng ngả xanh lam, vùng sáng ngả ấm, tương phản chữ S, đen hơi "sữa"
    col = clamp(col, 0.0, 1.0);
    float l = dot(col, vec3(0.299, 0.587, 0.114));
    vec3 g = col * mix(vec3(0.93, 1.0, 1.07), vec3(1.04, 1.0, 0.95), smoothstep(0.1, 0.7, l));
    g = clamp(g, 0.0, 1.0);
    g = mix(g, g * g * (3.0 - 2.0 * g), 0.38);
    g = mix(vec3(dot(g, vec3(0.299, 0.587, 0.114))), g, 1.1);
    g = g * 0.965 + 0.014;
    col = mix(col, g, uCine);
    // tối viền
    col *= 1.0 - (uCine * 0.3 + uFx * 0.42) * smoothstep(0.38, 1.05, dist);
    // hạt phim
    col += (hash12(vUv * uRes + fract(uTime) * 173.0) - 0.5) * 0.036 * uCine * (1.0 - l * 0.5);
    gl_FragColor = vec4(col, 1.0);
  }`,zl=class{constructor(t,e=4){this.renderer=t,this.enabled=!0,this.samples=e,this.scene=new es,this.cam=new Ms(-1,1,1,-1,0,1);let n=(s,a)=>new ye({uniforms:s,vertexShader:dT,fragmentShader:a,depthTest:!1,depthWrite:!1,toneMapped:!1}),i={value:1};this.exposure=i,this.bright=n({tSrc:{value:null},uTexel:{value:new rt},uThresh:{value:.92},uExposure:i},pT),this.blur=n({tSrc:{value:null},uDir:{value:new rt}},mT),this.dofPrep=n({tScene:{value:null},tDepth:{value:null},uTexel:{value:new rt},uNear:{value:.1},uFar:{value:1e3},uFocus:{value:10},uFocusRange:{value:0},uCocK:{value:0},uMaxCoc:{value:24}},gT),this.dofTile=n({tSrc:{value:null},uTexel:{value:new rt}},vT),this.dofDilate=n({tSrc:{value:null},uTexel:{value:new rt}},xT),this.dofBlur=n({tSrc:{value:null},tNear:{value:null},uTexelFull:{value:new rt},uMaxCoc:{value:24},uN:{value:24}},bT),this.final=n({tScene:{value:null},tBloom:{value:null},tDof:{value:null},uDof:{value:0},uExposure:i,tRays:{value:null},uRayCol:{value:new et(0,0,0)},uGlass:{value:0},uRearGlass:{value:0},tDepth:{value:null},uNear:{value:.1},uFar:{value:1e3},uTanF:{value:1},uInvVP:{value:new bt},uCamPos:{value:new T},uCamFwd:{value:new T},uGC:{value:new T},uGN:{value:new T},uGU:{value:new T},uGV:{value:new T},uBlade:{value:new le},uGB:{value:new le},uPiv:{value:new le},uWipe:{value:new le},uRest:{value:new le},uSweep:{value:1.6},uFlow:{value:new rt},tGlassMask:{value:null},uFx:{value:0},uCine:{value:0},uTime:{value:0},uAspect:{value:1},uRes:{value:new rt(1,1)}},ET),this.rayMask=n({tScene:{value:null},tDepth:{value:null},uNear:{value:.1},uFar:{value:1e3},uAspect:{value:1},uSun:{value:new rt}},yT),this.rayBlur=n({tSrc:{value:null},uSun:{value:new rt},uLen:{value:1}},_T),this.rays={uv:new rt(.5,.5),color:new et(0,0,0),near:.1,far:1e3},this.quad=new Ft(new mi(2,2),this.bright),this.quad.frustumCulled=!1,this.scene.add(this.quad),this.size=new rt,this.rts={},this.sceneRT=new hn(16,16,{type:Un,samples:e,depthBuffer:!0,depthTexture:new jr(16,16,Ai)}),this.glassScene=new es,this.glassMaterial=new ye({uniforms:{tDepth:{value:this.sceneRT.depthTexture},uRes:{value:this.size},uNear:{value:.1},uFar:{value:1e3}},side:de,depthTest:!1,depthWrite:!1,toneMapped:!1,vertexShader:`
        attribute vec2 glassUV; varying vec2 vGlassUV; varying float vDepth;
        void main() {
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          vGlassUV = glassUV; vDepth = -mv.z;
          gl_Position = projectionMatrix * mv;
        }`,fragmentShader:`
        uniform sampler2D tDepth; uniform vec2 uRes; uniform float uNear, uFar;
        varying vec2 vGlassUV; varying float vDepth;
        void main() {
          float d = texture2D(tDepth, gl_FragCoord.xy / uRes).x;
          float sceneDepth = uNear * uFar / (uFar - d * (uFar - uNear));
          if (sceneDepth < vDepth) discard;
          gl_FragColor = vec4(vGlassUV, vDepth, 1.0);
        }`}),this.glassMesh=new Ft(new Rt,this.glassMaterial),this.glassMesh.matrixAutoUpdate=!1,this.glassScene.add(this.glassMesh),this._clearColor=new et,this.resize()}_rt(t,e,n,i=!1){let s=this.rts[t];return s?s.setSize(e,n):s=this.rts[t]=new hn(e,n,{type:i?Un:Ri,minFilter:Qe,magFilter:Qe,depthBuffer:!1,stencilBuffer:!1}),s}resize(){this.renderer.getDrawingBufferSize(this.size);let t=this.size.x,e=this.size.y;this.sceneRT.setSize(t,e);let n=Math.max(16,Math.ceil(t/4)),i=Math.max(16,Math.ceil(e/4));this._rt("bloomA",n,i),this._rt("bloomB",n,i);let s=Math.max(16,Math.ceil(t/2)),a=Math.max(16,Math.ceil(e/2));this._rt("prep",s,a,!0),this._rt("dof",s,a,!0);let o=Math.max(4,Math.ceil(s/4)),c=Math.max(4,Math.ceil(a/4));this._rt("tile",o,c,!0),this._rt("near",o,c,!0),this._rt("rayA",n,i),this._rt("rayB",n,i);let l=this._rt("glass",t,e,!0);l.texture.minFilter=l.texture.magFilter=Ke,this.final.uniforms.tGlassMask.value=l.texture,this.rayMask.uniforms.uAspect.value=t/e,this.bright.uniforms.uTexel.value.set(1/n,1/i),this.dofPrep.uniforms.uTexel.value.set(1/t,1/e),this.dofTile.uniforms.uTexel.value.set(1/s,1/a),this.dofDilate.uniforms.uTexel.value.set(1/o,1/c),this.dofBlur.uniforms.uTexelFull.value.set(1/t,1/e),this.final.uniforms.uAspect.value=t/e,this.final.uniforms.uRes.value.set(t,e)}setSamples(t){this.sceneRT.samples!==t&&(this.sceneRT.samples=t,this.sceneRT.dispose())}get longSide(){return Math.max(this.size.x,this.size.y)}_pass(t,e){this.quad.material=t,this.renderer.setRenderTarget(e),this.renderer.render(this.scene,this.cam)}begin(){this.renderer.setRenderTarget(this.sceneRT)}renderGlassMask(t,e,n){let i=this.final.uniforms;if(i.uRearGlass.value<.5||i.uGlass.value<=0||!n?.geometry)return;this.glassMesh.geometry=n.geometry,this.glassMesh.matrix.copy(e.matrixWorld),this.glassMaterial.uniforms.uNear.value=t.near,this.glassMaterial.uniforms.uFar.value=t.far;let s=this.renderer,a=s.getClearAlpha();s.getClearColor(this._clearColor),s.setClearColor(0,0),s.setRenderTarget(this.rts.glass),s.render(this.glassScene,t),s.setClearColor(this._clearColor,a)}render(t,e,n,i){let s=this.renderer,a=this.blur.uniforms,o=this.sceneRT.texture;this.exposure.value=s.toneMappingExposure;let c=!1;if(i&&i.amt>.01&&i.samples>0&&i.cocK>.05){c=!0;let f=this.dofPrep.uniforms;f.tScene.value=o,f.tDepth.value=this.sceneRT.depthTexture,f.uNear.value=i.near,f.uFar.value=i.far,f.uFocus.value=i.focus,f.uFocusRange.value=i.range||0,f.uCocK.value=i.cocK,f.uMaxCoc.value=i.maxCoc,this._pass(this.dofPrep,this.rts.prep),this.dofTile.uniforms.tSrc.value=this.rts.prep.texture,this._pass(this.dofTile,this.rts.tile),this.dofDilate.uniforms.tSrc.value=this.rts.tile.texture,this._pass(this.dofDilate,this.rts.near);let d=this.dofBlur.uniforms;d.tSrc.value=this.rts.prep.texture,d.tNear.value=this.rts.near.texture,d.uMaxCoc.value=i.maxCoc,d.uN.value=i.samples,this._pass(this.dofBlur,this.rts.dof)}if(e>.01){let f=this.rts.bloomA,d=this.rts.bloomB;this.bright.uniforms.tSrc.value=o,this._pass(this.bright,f);for(let g=0;g<2;g++)a.tSrc.value=f.texture,a.uDir.value.set((2.2+g)/f.width,0),this._pass(this.blur,d),a.tSrc.value=d.texture,a.uDir.value.set(0,(1.2+g*.6)/f.height),this._pass(this.blur,f)}let l=this.rays,h=l.color.r+l.color.g+l.color.b>.002;if(h){let f=this.rayMask.uniforms,d=this.rayBlur.uniforms;f.tScene.value=o,f.tDepth.value=this.sceneRT.depthTexture,f.uNear.value=l.near,f.uFar.value=l.far,f.uSun.value.copy(l.uv),this._pass(this.rayMask,this.rts.rayA),d.uSun.value.copy(l.uv),d.tSrc.value=this.rts.rayA.texture,d.uLen.value=.85,this._pass(this.rayBlur,this.rts.rayB),d.tSrc.value=this.rts.rayB.texture,d.uLen.value=.85/10,this._pass(this.rayBlur,this.rts.rayA)}let u=this.final.uniforms;u.tScene.value=o,u.tRays.value=this.rts.rayA.texture,u.tDepth.value=this.sceneRT.depthTexture,h?u.uRayCol.value.copy(l.color):u.uRayCol.value.setRGB(0,0,0),u.tBloom.value=this.rts.bloomA.texture,u.tDof.value=this.rts.dof.texture,u.uDof.value=c?i.amt:0,u.uCine.value=e,u.uFx.value=n,u.uTime.value=t,this._pass(this.final,null)}};var Bl=class{constructor(t){this.renderer=t,this.cam=new Ne,this.cam.layers.set(0),this.rt=new hn(16,16,{type:Un}),this.texMatrix=new bt,this.planeY=0,this.active=!1,this.enabled=!0,this._v=new T,this._d=new T,this._u=new T,this._plane=new di,this._clip=new le,this._q=new le,this._size=new rt}resize(){this.renderer.getDrawingBufferSize(this._size),this.rt.setSize(Math.max(16,Math.floor(this._size.x/2)),Math.max(16,Math.floor(this._size.y/2)))}render(t,e,n){if(this.active=!1,!this.enabled||e.position.y<n+.05)return;this.planeY=n;let i=this.cam,s=e.position;i.position.set(s.x,2*n-s.y,s.z);let a=this._d.set(0,0,-1).applyQuaternion(e.quaternion),o=this._u.set(0,1,0).applyQuaternion(e.quaternion);i.up.set(o.x,-o.y,o.z),i.lookAt(this._v.set(i.position.x+a.x,i.position.y-a.y,i.position.z+a.z)),i.near=e.near,i.far=e.far,i.updateMatrixWorld(),i.projectionMatrix.copy(e.projectionMatrix),this.texMatrix.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),this.texMatrix.multiply(i.projectionMatrix).multiply(i.matrixWorldInverse);let c=this._plane.setFromNormalAndCoplanarPoint(this._v.set(0,1,0),this._d.set(s.x,n,s.z));c.applyMatrix4(i.matrixWorldInverse);let l=this._clip.set(c.normal.x,c.normal.y,c.normal.z,c.constant),h=i.projectionMatrix.elements,u=this._q.set((Math.sign(l.x)+h[8])/h[0],(Math.sign(l.y)+h[9])/h[5],-1,(1+h[10])/h[14]);l.multiplyScalar(2/l.dot(u)),h[2]=l.x,h[6]=l.y,h[10]=l.z+1-.003,h[14]=l.w,i.projectionMatrixInverse.copy(i.projectionMatrix).invert();let f=this.renderer,d=f.getRenderTarget(),g=f.shadowMap.autoUpdate;f.shadowMap.autoUpdate=!1,f.setRenderTarget(this.rt),f.render(t,i),f.setRenderTarget(d),f.shadowMap.autoUpdate=g,this.active=!0}};var xo=class r{constructor(){this.root=new Pt,this.tilt=new Pt,this.root.add(this.tilt),this.root.visible=!1,this.ready=!1,this.actions={},this.current=null,this.headOffsetSit=new T,this.hipOffsetSit=new T,this.footShade={value:0}}async load(t,{chisa:e=!1}={}){let n=new Ds;n.setMeshoptDecoder(ha);let i=await n.loadAsync(t),s=i.scene;this.model=s,this.seatRecline=e?0:null,s.traverse(h=>{if(!h.isMesh)return;h.castShadow=!0,h.receiveShadow=!0,h.frustumCulled=!1;let u=Array.isArray(h.material)?h.material:[h.material];for(let f of u)f.envMapIntensity=.6,me(f)}),this.tilt.add(s);let a=h=>e?s.getObjectByName(IT(s,h)):s.getObjectByName(h);this.head=a("Head"),this.neck=a("neck_01"),this.arms={l:["upperarm_l","lowerarm_l","hand_l"].map(a),r:["upperarm_r","lowerarm_r","hand_r"].map(a)},this.arms.l.some(h=>!h)&&(this.arms.l=null),this.arms.r.some(h=>!h)&&(this.arms.r=null),this.legs={l:["thigh_l","calf_l","foot_l"].map(a),r:["thigh_r","calf_r","foot_r"].map(a)},this.balls={l:a("ball_l"),r:a("ball_r")},(this.legs.l.some(h=>!h)||this.legs.r.some(h=>!h))&&(this.legs=null),this.spine=a("spine_01"),this.pelvis=a("pelvis"),this.gripFingers={l:a("middle_01_l"),r:a("middle_01_r")},this.gripKnuckles={l:[a("index_01_l"),a("pinky_01_l")],r:[a("index_01_r"),a("pinky_01_r")]},this.mixer=new ta(s);for(let h of i.animations)this.actions[h.name]=this.mixer.clipAction(h);s.updateMatrixWorld(!0);let o=new Ge().setFromObject(s,!0),c=o.max.y-o.min.y;s.scale.setScalar(bg/c),s.position.y=-o.min.y*(bg/c);let l=[];if(s.traverse(h=>{h.isMesh&&/eye/i.test(h.name+" "+(h.material?.name||""))&&l.push(h)}),l.length&&this.head){s.updateMatrixWorld(!0);let h=new Ge().setFromObject(l[0],!0).getCenter(new T),u=this.head.getWorldPosition(new T),f=h.sub(u);s.rotation.y=Math.atan2(-f.x,f.z)||0}s.updateMatrixWorld(!0),s.traverse(h=>{h.isSkinnedMesh&&/superhero|body/i.test(h.name+" "+h.material?.name)&&LT(h,s,this.footShade)}),this.bindRotations=new Map,s.traverse(h=>{h.isBone&&this.bindRotations.set(h.name,h.getWorldQuaternion(new Wt))}),this.fingers={},this.thumbs={};for(let h of["l","r"]){this.fingers[h]=["index","middle","ring","pinky"].flatMap(f=>[2,3].map(d=>a(`${f}_0${d}_${h}`))).filter(Boolean).map(f=>({b:f,rest:f.quaternion.clone()}));let u=["thumb_01","thumb_02","thumb_03","thumb_04_leaf"].map(f=>a(f+"_"+h));this.thumbs[h]=u.every(Boolean)?{bones:u,rest:u[2].quaternion.clone()}:null}return e&&(this.reference=await new r().load("assets/models/person.glb"),this.actions=this.reference.actions,this.mixer=this.reference.mixer,this.current=this.reference.current,this.retargetPairs=[],s.traverse(h=>{if(!h.isBone)return;let u=Eg(h.name),f=u&&this.reference.model.getObjectByName(u);f&&this.retargetPairs.push({bone:h,from:f,sourceBind:this.reference.bindRotations.get(u).clone().invert(),targetBind:this.bindRotations.get(h.name).clone()})})),this.play("Driving_Loop",0),this.mixer.update(.01),this.applyRetarget(),this.root.updateMatrixWorld(!0),this.headOffsetSit.copy(this.head.getWorldPosition(new T)),this.root.worldToLocal(this.headOffsetSit),this.pelvis&&this.root.worldToLocal(this.pelvis.getWorldPosition(this.hipOffsetSit)),this.ready=!0,this}play(t,e=.35,{once:n=!1,timeScale:i=1}={}){let s=this.actions[t];return!s||s===this.current||(s.reset(),s.setLoop(n?nf:sf,1/0),s.clampWhenFinished=n,s.timeScale=i,s.enabled=!0,s.setEffectiveWeight(1),this.current&&e>0?s.crossFadeFrom(this.current,e,!1):this.current&&this.current.stop(),s.play(),this.current=s),s}duration(t){return this.actions[t]?.getClip().duration??1}update(t){this.mixer&&this.root.visible&&(this.mixer.update(t),this.applyRetarget())}applyRetarget(){if(!this.retargetPairs)return;this.reference.root.updateMatrixWorld(!0),this.root.updateMatrixWorld(!0);let t=this.root.getWorldQuaternion(new Wt);for(let{bone:e,from:n,sourceBind:i,targetBind:s}of this.retargetPairs)n.getWorldQuaternion(Fs).multiply(i).multiply(s).premultiply(t),e.parent.getWorldQuaternion(Oi),e.quaternion.copy(Oi.invert().multiply(Fs)),e.updateMatrixWorld(!0)}replace(t){let e=this.root,n=e.visible;this.dispose(),e.clear();for(let i of Object.keys(t))i!=="root"&&(this[i]=t[i]);e.add(this.tilt),e.visible=n,this.root=e}dispose(){this.mixer?.stopAllAction();let t=new Set;for(let e of[this.model,this.reference?.model])e?.traverse(n=>{if(n.isMesh){n.geometry.dispose();for(let i of Array.isArray(n.material)?n.material:[n.material]){for(let s of Object.values(i))s?.isTexture&&t.add(s);i.dispose()}}});t.forEach(e=>e.dispose()),delete this.reference,delete this.retargetPairs,delete this._spIn,delete this._spOut}faceGrip(t,e,n=null){let i=this.arms?.[t]?.[2],s=this.gripFingers?.[t];if(!i||!s)return;i.getWorldPosition(An),s.getWorldPosition(Jn),An.subVectors(Jn,An).normalize(),Jn.copy(e).negate(),Gl(i,An,Jn),i.updateMatrixWorld(!0);let a=this.gripKnuckles?.[t];if(n&&a?.every(Boolean)){a[0].getWorldPosition(An),a[1].getWorldPosition(Jn),An.sub(Jn).addScaledVector(e,-An.dot(e)).normalize(),Jn.copy(n).addScaledVector(e,-n.dot(e)).normalize();let o=Math.atan2(Mg.crossVectors(An,Jn).dot(e),An.dot(Jn));pa.setFromAxisAngle(e,o),i.getWorldQuaternion(Fs),i.parent.getWorldQuaternion(Oi),i.quaternion.copy(Oi.invert().multiply(pa.multiply(Fs))),i.updateMatrixWorld(!0)}}looseGrip(t,e,n,i){for(let{b:a,rest:o}of this.fingers?.[t]||[])a.quaternion.slerp(o,e);let s=this.thumbs?.[t];if(s&&n){s.bones[2].quaternion.slerp(s.rest,.5),s.bones[0].updateMatrixWorld(!0);let[a,o,,c]=s.bones.map(f=>f.getWorldPosition(new T)),l=.82*(a.distanceTo(o)+o.distanceTo(c)),h=0,u=.2;for(let f=0;f<16;f++){let d=(h+u)/2;n(d,_g).distanceTo(a)<l?h=d:u=d}_d([s.bones[0],s.bones[1],s.bones[3]],n(h,_g),i)}this.arms?.[t]?.[2].updateMatrixWorld(!0)}recline(t){if(t=this.seatRecline??t,!this.spine||!t)return;let e=this.spine.quaternion;this._spOut&&e.equals(this._spOut)&&e.copy(this._spIn),(this._spIn||(this._spIn=new Wt)).copy(e),this.root.getWorldQuaternion(Oi),An.set(1,0,0).applyQuaternion(Oi),pa.setFromAxisAngle(An,-t),this.spine.getWorldQuaternion(Fs),this.spine.parent.getWorldQuaternion(Oi),this.spine.quaternion.copy(Oi.invert().multiply(pa.multiply(Fs))),(this._spOut||(this._spOut=new Wt)).copy(e),this.spine.updateMatrixWorld(!0)}reachLeg(t,e,n,i=null){let s=this.legs?.[t];if(!s)return;_d(s,e,n);let a=s[2],o=this.balls?.[t];i&&o&&(a.getWorldPosition(An),o.getWorldPosition(Jn),Gl(a,Jn.sub(An).normalize(),An.copy(i).normalize()),a.updateMatrixWorld(!0))}reach(t,e,n=null){let i=this.arms?.[t];i&&_d(i,e,n)}};function _d(r,t,e){{let[n,i,s]=r,a=n.getWorldPosition(wT),o=i.getWorldPosition(TT),c=s.getWorldPosition(ST),l=a.distanceTo(o),h=o.distanceTo(c),u=Mg.subVectors(t,a),f=u.length();u.multiplyScalar(1/f),f=Math.min(Math.max(f,Math.abs(l-h)+.001),l+h-.001);let d=(l*l+f*f-h*h)/(2*l*f),g=Math.sqrt(Math.max(0,1-d*d)),v=e?yg.copy(e):yg.subVectors(o,a);v.addScaledVector(u,-v.dot(u)),v.lengthSq()<1e-8&&v.set(0,-1,0),v.normalize();let m=AT.copy(a).addScaledVector(u,l*d).addScaledVector(v,l*g);Gl(n,An.subVectors(o,a).normalize(),Jn.subVectors(m,a).normalize()),n.updateMatrixWorld(!0),i.getWorldPosition(o),s.getWorldPosition(c),Gl(i,An.subVectors(c,o).normalize(),Jn.subVectors(t,o).normalize()),i.updateMatrixWorld(!0)}}var bg=1.7,wT=new T,TT=new T,ST=new T,Mg=new T,yg=new T,AT=new T,An=new T,Jn=new T,_g=new T,pa=new Wt,Fs=new Wt,Oi=new Wt;function Gl(r,t,e){pa.setFromUnitVectors(t,e),r.getWorldQuaternion(Fs),r.parent.getWorldQuaternion(Oi),r.quaternion.copy(Oi.invert().multiply(pa.multiply(Fs)))}var RT=new et("#1c1c1f"),CT=new et("#2f4366"),PT=new et("#dedad2");function LT(r,t,e){let n=r.geometry,i=n.attributes.skinIndex,s=n.attributes.skinWeight,a=n.attributes.position;if(!i||!s)return;let o=r.skeleton.bones,c=o.find(p=>p.name==="pelvis"),l=c?c.getWorldPosition(new T).y:.9,h=o.map(p=>/foot|ball/i.test(p.name)?3:/thigh|calf/i.test(p.name)?2:/lowerarm|hand|index|middle|ring|pinky|thumb|neck|head/i.test(p.name)?0:/pelvis/i.test(p.name)?4:1),u=new Float32Array(a.count*4),f=new Float32Array(a.count),d=new T;for(let p=0;p<a.count;p++){let x=0,b=-1;for(let y=0;y<4;y++){let w=s.getComponent(p,y);w>b&&(b=w,x=i.getComponent(p,y))}let E=h[x];E===4&&(d.fromBufferAttribute(a,p).applyMatrix4(r.matrixWorld),E=d.y<l+.09?2:1);let M=E===1?RT:E===2?CT:E===3?PT:null;M&&(u[p*4]=M.r,u[p*4+1]=M.g,u[p*4+2]=M.b,u[p*4+3]=1),f[p]=E===3?1:0}n.setAttribute("aGarment",new Mt(u,4)),n.setAttribute("aShoe",new Mt(f,1));let g=r.material,v=g.onBeforeCompile;g.onBeforeCompile=(p,x)=>{v?.call(g,p,x),p.uniforms.uFootShade=e,p.vertexShader=p.vertexShader.replace("#include <common>",`#include <common>
attribute vec4 aGarment;
attribute float aShoe;
varying vec4 vGarment;
varying float vShoe;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vGarment = aGarment;
vShoe = aShoe;`),p.fragmentShader=p.fragmentShader.replace("#include <common>",`#include <common>
varying vec4 vGarment;
varying float vShoe;
uniform float uFootShade;`).replace("#include <map_fragment>",`#include <map_fragment>
diffuseColor.rgb = mix(diffuseColor.rgb, vGarment.rgb * (0.9 + 0.1 * diffuseColor.r), vGarment.a);
diffuseColor.rgb *= 1.0 - 0.88 * uFootShade * vShoe;`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
roughnessFactor = mix(roughnessFactor, 0.88, vGarment.a);`).replace("mapN.xy *= normalScale;","mapN.xy *= normalScale * (1.0 - 0.8 * vGarment.a);")};let m=g.customProgramCacheKey?.bind(g);g.customProgramCacheKey=()=>(m?m():"")+"|garment"}function Eg(r){let t=r.replace(/_\d+$/,""),e={Bip001Pelvis:"pelvis",Bip001Spine:"spine_01",Bip001Spine1:"spine_02",Bip001Spine2:"spine_03",Bip001Neck:"neck_01",Bip001Head:"Head"};if(e[t])return e[t];let n=t.match(/^Bip001([LR])(Clavicle|UpperArm|Forearm|Hand|Thigh|Calf|Foot|Toe0)$/);if(n)return{Clavicle:"clavicle",UpperArm:"upperarm",Forearm:"lowerarm",Hand:"hand",Thigh:"thigh",Calf:"calf",Foot:"foot",Toe0:"ball"}[n[2]]+"_"+n[1].toLowerCase();let i=t.match(/^Bip001([LR])Finger([0-4])([12])?$/);return i?["thumb","index","middle","ring","pinky"][+i[2]]+"_0"+(+(i[3]||0)+1)+"_"+i[1].toLowerCase():null}function IT(r,t){let e;return r.traverse(n=>{n.isBone&&Eg(n.name)===t&&(e=n.name)}),e}var Vl=r=>Math.min(1,Math.max(0,r)),rn=r=>(r=Vl(r),r*r*(3-2*r)),Md=(r,t,e)=>r+(t-r)*e,zi=(r,t,e)=>{let n=((t-r+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI;return r+n*e},bo=Math.PI,Ed=-Math.PI/2,wg=0,yo=Math.PI/2,wd=-Math.PI*.75,sr=1.1,rr=new T(0,1,0),DT=2.25,Tg=5,ma=26,Sg=16,FT=35,Ag=20,_o=25,HT=9,Td=18,NT=2,Rg=8,UT=12,kT=12,OT=12,Wl=class{constructor(t,e){this.cars=t,this.person=e,this.state="off",this.t=0,this.v0=0,this.stopT=-1,this.seat=new T,this.out=new T,this.walkEnd=new T,this.lean=new T,this.corner=new T,this.stand=new T,this.smokeU=-1,this.smoking={on:!1,lit:!1,drag:0,flame:0,exhale:!1,atMouth:0,err:new T,errOK:!1,F:new T,R:new T,mouth:new T},this.handW=0,this.handT=new T,this.closeK=0,this.autoZoom={t:0,on:!0},this.wideK=0,this.zoom={focal:ma,back:0,near:0,focalS:ma,backS:0,nearS:0},this.orbitA=null,this.orbitHold=0,this.enterRadius=10,this.cyc={t:0,n:0,rest:Rg},this.mouthCorr=new T,this.wd={mode:"idle",t:0,dur:4,face:null,target:new T},this.lk={t:0,ty:0,tp:0,y:0,p:0},this._q1=new Wt,this._q2=new Wt,this._q3=new Wt,this._q4=new Wt,this._pole=new T,this._A=new T,this._O=new T,this._H=new T,this._t1=new T,this._t2=new T,this.shot={pos:new T,look:new T},this.cam={pos:new T,look:new T,focus:new T,focal:28,range:2},this._p=new T,this._l=new T,this._w=new T}get active(){return this.state!=="off"}get busy(){return this.state==="stopping"||this.state==="exit"||this.state==="enter"}place(t){let e=this.person.headOffsetSit,[n,i,s]=t.eye;if(t.seat?.hip){let a=this.person.hipOffsetSit,[o,c,l]=t.seat.hip;this.seat.set(o+a.x,c-a.y,l+a.z)}else this.seat.set(n+e.x,i-.1-e.y,s+.06+e.z);this.out.set(-t.width/2-.5,0,this.seat.z-.1),this.lean.set(-t.width/2-.16,0,-t.length/2+1.05),this.walkEnd.set(this.lean.x-.3,0,this.lean.z),this.corner.set(-t.width/2-.55,0,-t.length/2-.75),this.stand.set(-.15,0,-t.length/2-1.2)}sit(){let t=this.person;t.ready&&(t.root.position.copy(this.seat),t.root.rotation.set(0,bo,0),t.tilt.rotation.set(0,0,0),t.play("Driving_Loop",0))}toggle(t){return this.state==="off"?(this.state="stopping",this.t=0,this.v0=Math.max(t,.5),this.stopT=-1,this.smokeU=-1,this.handW=0,this.wd.mode="idle",this.wd.t=0,this.wd.dur=3+Math.random()*3,this.wd.face=null,this.lk.t=1,!0):this.state==="parked"?(this.stand.copy(this.person.root.position),this.enterYaw=this.person.root.rotation.y,this.enterRadius=Math.max(1,10+this.zoom.backS-this.zoom.nearS),this.autoZoom.on=!1,this.state="enter",this.t=0,!0):!1}zoomBy(t){if(this.wideK<.3)return!1;this.autoZoom.on=!1,this.noteCameraInput();let e=this.zoom,n=Math.log(t);if(n>0){let i=Math.min(n,e.near/Td);e.near-=i*Td,n-=i;let s=Math.log(e.focal/Sg),a=Math.min(n,s);e.focal/=Math.exp(a),n-=a,n>0&&(e.back=Math.min(Ag,e.back+n*_o))}else if(n<0){let i=Math.min(-n,e.back/_o);if(e.back-=i*_o,n+=i,n<0){let s=Math.log(FT/e.focal),a=Math.min(-n,s);e.focal*=Math.exp(a),n+=a}n<0&&(e.near=Math.min(HT,e.near-n*Td)),e.back<1e-6&&(e.back=0)}return!0}noteCameraInput(){this.wideK>=.3&&(this.orbitHold=NT)}speed(t,e){return this.state!=="stopping"?0:Math.max(0,t-Math.max(1.5,this.v0/3.2)*e)}update(t,e,n){this.t+=t;let i=this.cars.dim,s=this.cam,a=this._p,o=this._l;if(this.state==="stopping"){let c=this.cars.frontWheel(this._w),l=rn(this.t/5);a.set(c.x-1.55+.3*l,.34,c.z-1.1+.2*l),o.set(c.x+.05,c.y*.92,c.z+.08),s.focus.copy(c),e.localToWorld(s.focus),s.focal=45,s.range=.35,n<=.01&&this.stopT<0&&(this.stopT=this.t),this.stopT>=0&&this.t-this.stopT>.9&&this._enterState("exit",i)}else this.state==="exit"?this._exit(i,t):this.state==="enter"?this._enter(i,t):this.state==="parked"&&this.smokeU>3.4&&this._wander(t,i);this.smokeU>=0&&this.state!=="enter"&&this._smoke(t),this._hand(),this._look(t),this.state!=="stopping"?this._camera(t,e):(s.pos.copy(a),e.localToWorld(s.pos),s.look.copy(o),e.localToWorld(s.look))}_enterState(t,e){this.state=t,this.t=0,t==="exit"&&(this.shot.pos.set(-e.width/2-4.2,1.45,this.seat.z-2.7),this.shot.look.set(-e.width/2-.25,.95,this.seat.z-.6),this.closeK=0,this.wideK=0,this.orbitA=null,this.mouthCorr.set(0,0,0),Object.assign(this.zoom,{focal:ma,back:0,near:0,focalS:ma,backS:0,nearS:0}),this.orbitHold=0,this.autoZoom.t=0,this.autoZoom.on=!0)}_camera(t,e){let n=this.cam,i=this.state==="exit"&&this.t>=DT||this.state==="parked"||this.state==="enter"?1:0;this.wideK+=(i-this.wideK)*(1-Math.exp(-t*.9));let s=this.zoom,a=this.autoZoom;if(i&&a.on){a.t+=t;let f=Math.log(ma/Sg),d=rn(a.t/Tg)*(f+Ag/_o);s.focal=ma/Math.exp(Math.min(d,f)),s.back=Math.max(0,d-f)*_o,s.near=0,a.t>=Tg&&(a.on=!1)}let o=1-Math.exp(-t*6);s.focalS+=(s.focal-s.focalS)*o,s.backS+=(s.back-s.backS)*o,s.nearS+=(s.near-s.nearS)*o;let c=rn(this.wideK),l=this.person.root.position,h=this._p.copy(this.shot.pos),u=this._l.set(l.x,1.2,l.z);if(e.localToWorld(h),e.localToWorld(u),this.person.head.getWorldPosition(n.focus),n.focal=32,n.range=.8,c>.001){let f=this.person.root.getWorldPosition(this._t1).addScaledVector(rr,.95);this.orbitA===null&&(this.orbitA=Math.atan2(h.x-f.x,h.z-f.z)),this.orbitHold>0?this.orbitHold=Math.max(0,this.orbitHold-t):this.orbitA+=t*.1*c;let d=Math.max(1,10+s.backS-s.nearS);if(this.state==="enter"){let p=.6+this.stand.distanceTo(this.corner)/sr+this.corner.distanceTo(this.out)/sr;d=Md(this.enterRadius,1,rn(this.t/p))}let g=d*.28,v=Math.sqrt(Math.max(0,d*d-g*g)),m=this._w.set(Math.sin(this.orbitA)*v,g,Math.cos(this.orbitA)*v).add(f);h.lerp(m,c),u.lerp(f,c),n.focal=Md(n.focal,s.focalS,c),n.range=Md(n.range,.9,c)}else this.orbitA=null;n.pos.copy(h),n.look.copy(u)}_exit(t,e){let n=this.person,i=this.t,s=n.root;if(i<2.3&&this.cars.setDoor(Vl(i/1.1)),i<1){s.position.copy(this.seat),s.rotation.y=zi(bo,Ed,rn((i-.45)/.6));return}let a=1,o=1.25;if(i<a+o){n.play("Sitting_Exit",.25,{once:!0,timeScale:n.duration("Sitting_Exit")/o});let d=rn((i-a)/o);s.position.lerpVectors(this.seat,this.out,d),s.rotation.y=Ed;return}let c=a+o,l=1;if(i<c+l){n.play("Idle_Loop",.3),s.position.copy(this.out),s.rotation.y=zi(Ed,wd,rn((i-c)/.35)),this.cars.setDoor(1-rn((i-c-.25)/.6));return}this.cars.setDoor(0);let h=c+l,u=this.out.distanceTo(this.corner)/sr,f=this.corner.distanceTo(this.stand)/sr;if(n.tilt.rotation.x=0,i<h+u+f){n.play("Walk_Loop",.3),this._walk(s,[this.out,this.corner,this.stand],[u,f],i-h,e);return}n.play("Idle_Loop",.4),s.position.copy(this.stand),this.smokeU<0&&(this.smokeU=0,this.turnFrom=s.rotation.y,this.cyc.t=0,this.cyc.n=0,this.cyc.rest=Rg),s.rotation.y=zi(this.turnFrom,yo,rn(this.smokeU/.6)),this.smokeU>.8&&(this.state="parked")}_walk(t,e,n,i,s){let a=0;for(;a<n.length-1&&i>n[a];)i-=n[a],a++;let o=e[a],c=e[a+1],l=Vl(i/n[a]);t.position.lerpVectors(o,c,l);let h=Math.atan2(c.x-o.x,c.z-o.z);t.rotation.y=zi(t.rotation.y,h,Math.min(1,s*7))}_smoke(t){let e=this.smokeU+=t,n=this.person,i=this.smoking;if(!n.arms?.r)return;n.root.updateMatrixWorld(!0);let s=n.root.getWorldPosition(this._O),a=n.root.getWorldDirection(i.F).setY(0).normalize(),o=i.R.crossVectors(a,rr).normalize();n.head.getWorldPosition(this._H);let c=i.mouth.copy(this._H).addScaledVector(a,.1),l=this._t1.copy(s).addScaledVector(o,.2).addScaledVector(rr,.92),h=this._t2.copy(s).addScaledVector(o,.27).addScaledVector(rr,.97).addScaledVector(a,.1),u=this._A.copy(c).addScaledVector(a,.1).addScaledVector(o,.1).addScaledVector(rr,-.12);i.atMouth>.9&&i.errOK&&(this.mouthCorr.addScaledVector(i.err,Math.min(1,t*8)),this.mouthCorr.length()>.2&&this.mouthCorr.setLength(.2)),u.add(this.mouthCorr);let f=this.handT;if(i.flame=0,i.drag=0,i.exhale=!1,i.atMouth=0,e<.6){this.handW=0,i.on=!1;return}if(e<1.4){f.copy(l),this.handW=rn((e-.6)/.6),i.on=e>1.25;return}if(i.on=!0,this.handW=1,e<2.2){let x=rn((e-1.4)/.8);f.lerpVectors(l,u,x),i.atMouth=x;return}if(e<3){f.copy(u),i.atMouth=1,i.flame=e>2.3&&e<2.85?1:0,i.lit=e>2.65,i.drag=i.lit?1:0;return}i.lit=!0;let d=this.cyc;d.t+=t;let g=.8+d.rest+.8+1.3;d.t>=g&&(d.t-=g,d.n++,d.rest=d.n===1?UT:kT+Math.random()*OT);let v=d.t,m=.8+d.rest,p=m+.8;if(v<.8){let x=rn(v/.8);f.lerpVectors(u,h,x),i.atMouth=1-x}else if(v<m)f.copy(h);else if(v<p){let x=rn((v-m)/.8);f.lerpVectors(h,u,x),i.atMouth=x}else f.copy(u),i.drag=1,i.atMouth=1;i.exhale=v>.6&&v<1.6}_wander(t,e){let n=this.person,i=n.root,s=this.wd;if(s.t+=t,s.mode==="idle"){if(n.play("Idle_Loop",.4),s.face!==null&&(i.rotation.y=zi(i.rotation.y,s.face,Math.min(1,t*1.6))),s.t>s.dur){if(s.t=0,Math.random()<.6&&this._pickTarget(e)){s.mode="walk";return}s.dur=3+Math.random()*6,s.face=Math.random()<.5?i.rotation.y+(Math.random()-.5)*1.6:null}return}n.play("Walk_Loop",.35,{timeScale:.85});let a=this._t1.subVectors(s.target,i.position).setY(0),o=a.length(),c=Math.atan2(a.x,a.z);i.rotation.y=zi(i.rotation.y,c,Math.min(1,t*4));let l=Math.cos(i.rotation.y-c),h=Math.min(o,sr*.8*t*Math.max(0,l));if(i.position.addScaledVector(a.normalize(),h),o<.05){s.mode="idle",s.t=0,s.dur=3+Math.random()*7;let u=Math.random();s.face=u<.5?yo+(Math.random()-.5)*.9:u<.75?wg+(Math.random()-.5)*1.2:bo+(Math.random()-.5)*1.2}}_pickTarget(t){let e=this.person.root.position,n=this.wd,i=-t.length/2-.9,s=-t.length/2-8;for(let a=0;a<12;a++){let o=Math.random()*Math.PI*2,c=1.5+Math.random()*3,l=e.x+Math.sin(o)*c,h=e.z+Math.cos(o)*c;if(!(l<-1.3||l>2.8||h>i||h<s||Math.hypot(l,h)>9.5))return n.target.set(l,0,h),!0}return!1}_look(t){let e=this.person,n=this.lk;if(!e.head)return;let i=this.state==="parked"&&this.smokeU>3.4;if(i&&(n.t-=t)<=0){n.t=1.5+Math.random()*3.5;let c=Math.random();c<.25?(n.ty=(Math.random()-.5)*.4,n.tp=.35+Math.random()*.25):c<.75?(n.ty=(Math.random()<.5?-1:1)*(.5+Math.random()*.45),n.tp=(Math.random()-.4)*.2):(n.ty=(Math.random()-.5)*.3,n.tp=(Math.random()-.5)*.15)}let s=i?1-this.smoking.atMouth:0,a=Math.min(1,t*2.2);if(n.y+=(n.ty*s-n.y)*a,n.p+=(n.tp*s-n.p)*a,Math.abs(n.y)+Math.abs(n.p)<.001)return;e.root.updateMatrixWorld(!0);let o=this._t2.set(1,0,0).applyQuaternion(e.root.getWorldQuaternion(this._q1));this._q2.setFromAxisAngle(rr,n.y*.5).multiply(this._q3.setFromAxisAngle(o,-n.p*.5));for(let c of[e.neck,e.head])c&&(c.getWorldQuaternion(this._q1),c.parent.getWorldQuaternion(this._q4),c.quaternion.copy(this._q4.invert().multiply(this._q2.clone().multiply(this._q1))),c.updateMatrixWorld(!0))}_hand(){if(this.handW<=.001||!this.person.arms?.r)return;let t=this.smoking,e=t.atMouth,n=this._pole.copy(t.R).multiplyScalar(.55+.35*e).addScaledVector(t.F,-.65*(1-e)+.1*e).addScaledVector(rr,-.35-.2*e),i=this.person.arms.r[2].getWorldPosition(this._A);this.person.reach("r",i.lerp(this.handT,this.handW),n)}_enter(t,e){let n=this.person,i=this.t,s=n.root;if(this.smoking.on=!1,this.smoking.lit=!1,this.handW=Math.max(0,this.handW-e*2.5),this.smokeU=-1,n.tilt.rotation.x=0,i<.6){n.play("Idle_Loop",.3),s.position.copy(this.stand),s.rotation.y=zi(this.enterYaw??yo,Math.atan2(this.corner.x-this.stand.x,this.corner.z-this.stand.z),rn(i/.6));return}let a=.6,o=this.stand.distanceTo(this.corner)/sr,c=this.corner.distanceTo(this.out)/sr,l=c+o;if(i<a+l){n.play("Walk_Loop",.3),this._walk(s,[this.stand,this.corner,this.out],[o,c],i-a,e);return}let h=a+l;if(i<h+1.1){n.play("Idle_Loop",.25),s.position.copy(this.out),s.rotation.y=i<h+.75?zi(wg,wd,rn((i-h)/.35)):zi(wd,yo,rn((i-h-.75)/.35)),this.cars.setDoor(rn((i-h-.15)/.6));return}this.cars.setDoor(1);let u=h+1.1,f=1.4;if(i<u+f){n.play("Sitting_Enter",.25,{once:!0,timeScale:n.duration("Sitting_Enter")/f});let g=rn((i-u)/f);s.position.lerpVectors(this.out,this.seat,g),s.rotation.y=zi(yo,bo,rn((i-u-.3)/(f-.3)));return}n.play("Driving_Loop",.4),s.position.copy(this.seat),s.rotation.y=bo;let d=u+f;this.cars.setDoor(1-Vl((i-d)/.9)),i>d+1&&(this.cars.setDoor(0),this.state="off")}};var ql=class{constructor(t){this.renderer=t;let e=.125,n=.09375;this.size=[e,n],this.rt=new hn(384,Math.round(384*n/e),{type:Un}),this.cam=new Ne(30,e/n,.15,3e3),this.cam.layers.enable(3),this.group=new Pt,this.group.visible=!1;let i=new Ft(new he(e+.015,n+.011,.025),new Yt({color:1842206,roughness:.55}));i.position.z=-.015;let s=this.rt.texture;s.repeat.x=-1,s.offset.x=1;let a=new Ft(new mi(e,n),new qe({map:s}));this.group.add(i,a),this._p=new T,this._q=new Wt,this._d=new T,this._eye=new T}place(t,e){let[n,i,s]=t.eye;e?(this.group.position.copy(e.pos),this.group.position.x+=Rl[0]/2+.014*.85/2+.02+(this.size[0]+.015)/2,this.group.position.y+=-Rl[1]/2-.03+this.size[1]/2+.055,this.group.position.z+=.025):this.group.position.set(.21,i-.28,s-.6);let a=this._eye.set(n,i,s).sub(this.group.position).normalize(),o=this._d.set(0,-.03,1).normalize().add(a).normalize();this.group.quaternion.setFromUnitVectors(new T(0,0,1),o)}render(t,e){let n=this.renderer,i=this.cam;this.group.updateMatrixWorld(),this.group.getWorldPosition(i.position),this.group.parent.getWorldQuaternion(this._q),this._d.set(0,-.03,1).applyQuaternion(this._q),i.lookAt(this._d.add(i.position)),i.updateMatrixWorld();let s=n.getRenderTarget(),a=n.shadowMap.autoUpdate;n.shadowMap.autoUpdate=!1,this.group.visible=!1,e&&(e.visible=!1),n.setRenderTarget(this.rt),n.render(t,i),n.setRenderTarget(s),n.shadowMap.autoUpdate=a,e&&(e.visible=!0),this.group.visible=!0}};var zT=320,BT=200,GT=`
  uniform mat4 uTex;
  varying vec4 vUv;
  void main() {
    vUv = uTex * vec4(position, 1.0);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }`,VT=`
  uniform sampler2D tMap;
  varying vec4 vUv;
  void main() {
    vec3 c = texture2DProj(tMap, vUv).rgb;
    gl_FragColor = vec4(c * 0.82, 1.0);          // kính gương hơi tối (bạc phủ sau kính)
  }`,Xl=class{constructor(t){this.renderer=t,this.cam=new Ne,this.cam.layers.enable(3),this.frame=0,this.current=null,this._v=new T,this._e=new T,this._p=new T,this._n=new T,this._m=new bt,this._q=[0,1,2,3].map(()=>new T),this._bias=new bt().set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1)}setCar(t){if(this.current&&this.current!==t&&this._show(this.current,!1),this.current=t,!t||t.wingMirrors!==void 0)return;t.wingMirrors=null;let e=t.group;e.updateMatrixWorld(!0);let n=null;if(e.traverse(g=>{!n&&g.isMesh&&/^WingmirrorGlass/i.test(g.name)&&g.material?.name==="Mirror"&&(n=g)}),!n)return;let i=this._m.copy(e.matrixWorld).invert().multiply(n.matrixWorld),a=(n.geometry.index?n.geometry.toNonIndexed():n.geometry).attributes.position,o=[[],[]],c=new T,l=new T,h=new T;for(let g=0;g<a.count;g+=3)c.fromBufferAttribute(a,g).applyMatrix4(i),l.fromBufferAttribute(a,g+1).applyMatrix4(i),h.fromBufferAttribute(a,g+2).applyMatrix4(i),o[c.x+l.x+h.x<0?0:1].push(c.clone(),l.clone(),h.clone());let u=new T(...t.dim.eye),f=[];for(let g of o){if(g.length<3)continue;let v=new T,m=new T;for(let H=0;H<g.length;H+=3){let N=new T().subVectors(g[H+1],g[H]).cross(new T().subVectors(g[H+2],g[H]));N.dot(new T().subVectors(u,g[H]))<0&&N.negate(),m.add(N),v.add(g[H]).add(g[H+1]).add(g[H+2])}v.multiplyScalar(1/g.length),m.normalize();let p=new T(0,1,0).cross(m).normalize(),x=new T().crossVectors(m,p),b=1e9,E=-1e9,M=1e9,y=-1e9;for(let H of g){let N=this._v.subVectors(H,v);b=Math.min(b,N.dot(p)),E=Math.max(E,N.dot(p)),M=Math.min(M,N.dot(x)),y=Math.max(y,N.dot(x))}let w=[[b,M],[E,M],[E,y],[b,y]].map(([H,N])=>v.clone().addScaledVector(p,H).addScaledVector(x,N)),C=new Rt().setFromPoints(g.map(H=>H.clone().addScaledVector(m,.003))),_=new hn(zT,BT,{type:Un}),A=new ye({uniforms:{tMap:{value:_.texture},uTex:{value:new bt}},vertexShader:GT,fragmentShader:VT}),I=new Ft(C,A);I.visible=!1,I.frustumCulled=!1,e.add(I),f.push({mesh:I,rt:_,P:v,N:m,N0:m.clone(),corners:w,ready:!1})}let d=[];e.traverse(g=>{g.isMesh&&/^Wingmirror/i.test(g.name)&&d.push(g)}),t.wingMirrors={glass:n,mirrors:f,housing:d}}_show(t,e){let n=t?.wingMirrors;if(n){n.glass.visible=!e;for(let i of n.mirrors)i.mesh.visible=e&&i.ready}}render(t,e,n){let i=this.current,s=i?.wingMirrors;if(!s)return;if(!n){this._show(i,!1),s.aimed=!1;return}let a=i.group,o=this.renderer;a.updateMatrixWorld();let c=e.getWorldPosition(this._e);if(!s.aimed){let u=this._v.copy(c).applyMatrix4(this._m.copy(a.matrixWorld).invert());for(let f of s.mirrors){let d=this._p.set(Math.sign(f.P.x)*.09,-.045,1).normalize();f.N.subVectors(u,f.P).normalize().add(d).normalize()}s.aimed=!0}let l=s.mirrors.every(u=>u.ready)?[s.mirrors[this.frame++%s.mirrors.length]]:s.mirrors,h=s.housing.map(u=>u.visible);s.housing.forEach(u=>{u.visible=!1});for(let u of l)this._renderOne(t,u,a,c,o);s.housing.forEach((u,f)=>{u.visible=h[f]}),this._show(i,!0),s.glass.visible=!1}_renderOne(t,e,n,i,s){let a=this._p.copy(e.P).applyMatrix4(n.matrixWorld),o=this._n.copy(e.N).transformDirection(n.matrixWorld),c=this._v.subVectors(i,a).dot(o);if(c<=.01)return;let l=this.cam;l.position.copy(i).addScaledVector(o,-2*c),l.up.set(0,1,0),l.lookAt(this._v.copy(l.position).add(o)),l.updateMatrixWorld();let h=e.corners.map((x,b)=>this._q[b].copy(x).applyMatrix4(n.matrixWorld).applyMatrix4(l.matrixWorldInverse)),u=Math.max(.01,Math.min(...h.map(x=>-x.z))-.004),f=1e9,d=-1e9,g=1e9,v=-1e9;for(let x of h){let b=u/Math.max(1e-4,-x.z);f=Math.min(f,x.x*b),d=Math.max(d,x.x*b),g=Math.min(g,x.y*b),v=Math.max(v,x.y*b)}l.projectionMatrix.makePerspective(f,d,v,g,u,3e3),l.projectionMatrixInverse.copy(l.projectionMatrix).invert(),e.mesh.material.uniforms.uTex.value.copy(this._bias).multiply(l.projectionMatrix).multiply(l.matrixWorldInverse).multiply(n.matrixWorld);let m=s.getRenderTarget(),p=s.shadowMap.autoUpdate;s.shadowMap.autoUpdate=!1,e.mesh.visible=!1,s.setRenderTarget(e.rt),s.render(t,l),s.setRenderTarget(m),s.shadowMap.autoUpdate=p,e.ready=!0}};var jl=Math.PI*2,WT=Ue.smoothstep,Yl=class{constructor(){this.phase=0,this.omega=jl/1.5,this.idle=60,this.wet=0,this.flow=0,this.flowDir=-1,this._v=new T,this._inv=new bt}get running(){return this.phase>0}angle(t){return t*.5*(1-Math.cos(this.phase))}update(t,e,n){let i=e>.15;this.omega=jl/(e>.95?1.05:1.55),i||this.phase>0?(this.phase+=this.omega*t,this.phase>=jl&&(this.phase=i?this.phase-jl:0),this.idle=0):this.idle+=t,this.wet+=(e-this.wet)*(1-Math.exp(-t*(e>this.wet?1.5:.12)));let s=Ue.lerp(-.05,.24,WT(n,6,20));this.flow+=s*t,this.flowDir=s>=0?1:-1}apply(t,e,n,i,s,a,o=null){if(n.getWorldDirection(this._v),this._v.transformDirection(this._inv.copy(i.matrixWorld).invert()),this._v.z>0&&(s=o),t.uGlass.value=s?e:0,t.uRearGlass.value=s?.rear?1:0,e<=0||!s)return;n.updateMatrixWorld(),t.uInvVP.value.multiplyMatrices(n.matrixWorld,n.projectionMatrixInverse),n.getWorldPosition(t.uCamPos.value),n.getWorldDirection(t.uCamFwd.value),t.uTanF.value=Math.tan(Ue.degToRad(n.fov)/2),t.uNear.value=n.near,t.uFar.value=n.far;let c=i.matrixWorld;if(t.uGC.value.copy(s.center).applyMatrix4(c),t.uGN.value.copy(s.normal).transformDirection(c),t.uGU.value.copy(s.right).transformDirection(c),t.uGV.value.copy(s.up).transformDirection(c),t.uGB.value.fromArray(s.bounds),t.uWipe.value.set(this.phase,this.omega,this.idle,a),t.uFlow.value.set(this.flow,this.flowDir),s.rear)return;let[l,h]=s.wipers;t.uPiv.value.set(l.u,l.v,h.u,h.v),t.uRest.value.set(l.rest,l.sign,h.rest,h.sign),t.uBlade.value.set(l.r0,l.r1,h.r0,h.r1),t.uSweep.value=s.sweep}};var Mo=5,qT=200,XT=40,Kl=200,Hs=r=>{let t=Math.sin(r*127.1+311.7)*43758.5453;return t-Math.floor(t)},jT=r=>{let t=Math.floor(r),e=r-t,n=e*e*(3-2*e);return Hs(t)*(1-n)+Hs(t+1)*n},Cg=(r,t,e)=>{let n=Math.min(1,Math.max(0,(e-r)/(t-r)));return n*n*(3-2*n)},YT=`
  attribute float aGlow;
  uniform float uScale, uFogD;
  varying float vGlow;
  void main() {
    vec4 mv = viewMatrix * vec4(position, 1.0);
    float fd = uFogD * -mv.z;
    vGlow = aGlow * exp(-fd * fd);                // chìm dần trong sương xa
    gl_PointSize = clamp(0.25 * uScale / -mv.z, 2.5, 22.0);
    gl_Position = projectionMatrix * mv;
  }`,KT=`
  uniform vec3 uColor; uniform float uAmt;
  varying float vGlow;
  void main() {
    float d = length(gl_PointCoord - 0.5) * 2.0;
    // lõi nhỏ (bằng nửa trước), quầng rộng + mờ dần về 0 ở mép điểm (nhoè, không lộ khung vuông)
    float core = smoothstep(0.11, 0.0, d), halo = exp(-d * d * 3.5) * max(0.0, 1.0 - d * d) * 0.45;
    float a = (core + halo) * vGlow * uAmt;
    if (a < 0.003) discard;
    gl_FragColor = vec4(uColor * a, 1.0);
  }`,Jl=class{constructor(t){this.pos=new Float32Array(Kl*3),this.glow=new Float32Array(Kl);let e=new Rt;e.setAttribute("position",new Mt(this.pos,3).setUsage(xi)),e.setAttribute("aGlow",new Mt(this.glow,1).setUsage(xi)),e.setDrawRange(0,0),this.mat=new ye({uniforms:{uScale:{value:500},uFogD:{value:0},uColor:{value:new et(9,12,2.6)},uAmt:{value:0}},vertexShader:YT,fragmentShader:KT,transparent:!0,depthWrite:!1,blending:tn,fog:!1}),this.points=new fn(e,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=4,this.points.visible=!1,t.add(this.points),this.ground=new Map,this._p={}}update(t,e,n,i,s,a,o=0){if(this.mat.uniforms.uAmt.value=s,this.mat.uniforms.uScale.value=a,this.mat.uniforms.uFogD.value=o,this.points.visible=s>.01,!this.points.visible)return;let c=this._p,l=0,h=Math.floor((e-XT)/Mo),u=Math.floor((e+qT)/Mo);for(let d=h;d<=u&&l<Kl;d++){let g=Cg(.38,.58,jT(d*Mo/140+3.7));if(g<=0||Hs(d*1.31)>g*.9)continue;let v=1+Math.floor(Hs(d*2.17)*3);for(let m=0;m<v&&l<Kl;m++){let p=d*8+m,x=Hs(p*3.1+.5),b=Hs(p*5.7+1.3),E=Hs(p*7.3+2.9),M=Hs(p*9.1+4.4),y=d*Mo+x*Mo;n.at(y,c);let w=b<.5?-1:1,C=w*(4.6+16*E*E),_=Math.cos(c.th),A=-Math.sin(c.th),I=c.x+_*C,H=c.z+A*C,N=this.ground.get(p);N===void 0&&(N=i?i.heightAt(I,H):c.y,N>c.y-3&&N<c.y+4||(N=c.y),this.ground.set(p,N));let L=.35+M*.3,P=.5+x*.4;this.pos[l*3]=I+Math.sin(t*L+b*20)*.9+Math.sin(t*P*1.7+E*9)*.3,this.pos[l*3+1]=N+.7+2.6*M+Math.sin(t*P+x*13)*.35,this.pos[l*3+2]=H+Math.cos(t*P+E*17)*.9+Math.cos(t*L*1.9+M*7)*.3;let D=Math.sin(t*(.9+.8*E)+x*40);this.glow[l]=.12+.88*Cg(.25,.9,D)*(.6+.4*b),l++}}if(this.ground.size>1500)for(let d of this.ground.keys())d<h*8&&this.ground.delete(d);let f=this.points.geometry;f.setDrawRange(0,l),f.attributes.position.needsUpdate=!0,f.attributes.aGlow.needsUpdate=!0}};var Lg=r=>r>0?1.5:-1.8,JT=r=>r>0?-1.8:1.5,Pg=r=>r.home??Lg(r.dir),ZT=r=>r.home!==void 0?-r.home:JT(r.dir);var Zl=class{constructor(){this.player={player:!0,state:"cruise",target:null,dir:1},this.active=[],this.city=!1}_other(t){if(!this.city)return ZT(t);let e=Pg(t);return Math.sign(e)*(Math.abs(e)<3.5?5.25:1.75)}_overlapLat(t,e,n){return Math.abs(t.d-e)<(t.w+n)/2+.25}_all(){return[this.player,...this.active]}_ahead(t,e,n){let i=null,s=n;for(let a of this._all()){if(a===t||!this._overlapLat(a,e,t.w))continue;let o=(a.s-t.s)*t.dir;o>0&&o<s&&(s=o,i=a)}return i?{e:i,gap:s-(t.len+i.len)/2}:null}_follow(t,e){return Math.max(0,t+.5*(e-(6+1.1*t)))}_canOvertake(t,e,n){let i=this._other(t),s=(e.s-t.s)*t.dir,a=e.player&&e.v<1?16:8,o=Math.max(1,n-e.v),c=(s+(t.len+e.len)/2+a)/o;for(let l of this._all()){if(l===t||l===e||!this._overlapLat(l,i,t.w))continue;let h=(l.s-t.s)*t.dir;if(h<0&&l.dir===t.dir&&l.v>t.v-1&&-h-(t.len+l.len)/2<15+(l.v-t.v)*4)return!1;if(!(h<-(t.len+l.len)/2-3)&&(h<s+e.len/2+50||l.dir!==t.dir&&h-(n+l.v)*c<25||l.dir===t.dir&&l.v<n&&h-(n-l.v)*c<15))return!1}return!0}_overtakeDanger(t,e,n){let i=this._other(t),s=(e.s-t.s)*t.dir+(t.len+e.len)/2+8,a=Math.max(0,s)/Math.max(1,n-e.v);for(let o of this._all()){if(o===t||o===e||o.dir===t.dir||!this._overlapLat(o,i,t.w))continue;let c=(o.s-t.s)*t.dir;if(c>0&&c-(n+o.v)*a<15)return!0}return!1}_sideClear(t,e,n=2){for(let i of this._all()){if(i===t||!this._overlapLat(i,e,t.w))continue;let s=(i.s-t.s)*t.dir,a=Math.abs(s)-(t.len+i.len)/2;if(a<n)return!1;let o=s<0?i.dir===t.dir?i.v-t.v:-1e9:i.dir===t.dir?t.v-i.v:t.v+i.v;if(o>0&&a<o*3+5)return!1}return!0}_decide(t,e){let n=Pg(t),i=this._other(t),s=n,a=e,o=60+3*Math.max(t.v,e);if(t.state==="overtake"&&t.target&&this.active.concat([this.player]).includes(t.target)){let c=t.target,l=Math.max(e,c.v+6),h=(t.s-c.s)*t.dir;s=i,a=l,h>(t.len+c.len)/2+(c.player&&c.v<1?16:8)?(t.state="cruise",t.target=null,s=n,a=e):this._overtakeDanger(t,c,l)&&(h<0?(t.state="cruise",t.target=null,s=n,a=Math.max(0,c.v-4)):a=l+6)}else{t.state="cruise",t.target=null;let c=this._ahead(t,n,o);c&&(c.e.dir===t.dir?!t.noOvertake&&c.e.v<e-1.5&&c.gap<30+1.2*t.v&&this._canOvertake(t,c.e,Math.max(e,c.e.v+6))?(t.state="overtake",t.target=c.e,s=i,a=Math.max(e,c.e.v+6)):a=Math.min(a,this._follow(c.e.v,c.gap)):!t.player&&c.e.player&&c.e.home*Lg(t.dir)>0&&c.gap<200&&this._sideClear(t,i,30)?s=i:c.gap<120&&(s=n+(n>0?.8:-.8)))}for(let c of[t.d,s]){let l=this._ahead(t,c,o);l&&(l.e.dir===t.dir?a=Math.min(a,this._follow(l.e.v,l.gap)):a=Math.min(a,Math.max(0,(l.gap-12)*.7)))}return s!==t.d&&Math.abs(s-t.d)>.3&&!this._sideClear(t,s)&&(s=t.d),{dT:s,vT:a}}};var Sd=(r,t,e)=>Math.min(e,Math.max(t,r)),Rn={maxActive:2,sameMax:1,sameGapMin:25,sameGapMax:60,gapMin:10,gapMax:25,detect:30,minSpeed:13.88888888888889,maxSpeed:55.55555555555556},Ig=()=>Rn.minSpeed+Math.random()*(Rn.maxSpeed-Rn.minSpeed);function Dg(r,t){let e=r.cruise??r.v,n=r.direction??-1,i=o=>t.heading?t.heading(Math.max(0,o)):t.at(Math.max(0,o),{}).th,s=Math.max(12,(e*e-(e*.6)**2)/24+10),a=0;for(let o=0;o<=s;o+=6){let c=Math.max(0,r.s+n*o),l=Math.max(0,c-10),h=c+10,u=i(h)-i(l);a=Math.max(a,Math.abs(Math.atan2(Math.sin(u),Math.cos(u)))/(h-l))}return r.inCurve=a>=(r.inCurve?.0012:.0015),e*(r.inCurve?.6:1)}function Fg(r,t,e,n,i=r.cruise??r.v,s=()=>!0){let a=r.direction??-1,o=I=>a*(I.s-r.s),c=Math.max(0,e-r.dim.width/2-.25),l=Sd(r.baseD??r.d,-c,c),h=I=>Rn.detect+Math.max(0,-a*(I.direction||0)*(I.speed||0))*1.2,u=t.filter(I=>{if(I.id===r||o(I)<-(r.dim.length+I.length)/2-2)return!1;let H=Math.max(0,o(I)-(r.dim.length+I.length)/2),N=Math.max(0,Math.abs(r.d-I.d)-(r.dim.width+I.width)/2);return Math.hypot(H,N)<=h(I)+1e-6}),f=I=>(r.dim.width+I.width)/2+.6,d=(I,H)=>Math.abs(I-H.d)<f(H),g=t.find(I=>I.id===r.avoidFor),v=g&&o(g)>-(r.dim.length+g.length)/2-8?r.avoidD:l,m=u.filter(I=>d(r.d,I)||d(v,I)),p=i;if(m.length){let H=[v,-1.8,1.8,-c,c,...m.flatMap(N=>[N.d-f(N)-.1,N.d+f(N)+.1])].filter(N=>Math.abs(N)<=c&&s(N)&&u.every(L=>!d(N,L)));if(H.sort((N,L)=>Math.abs(N-r.d)-Math.abs(L-r.d)||Math.abs(N-l)-Math.abs(L-l)),H.length){v=H[0];let N=m.reduce((L,P)=>o(L)<o(P)?L:P);r.avoidFor=N.id,r.avoidD=v}else v=r.d;for(let N of m){let L=Math.max(0,o(N)-(r.dim.length+N.length)/2-2),P=-a*(N.direction||0)*(N.speed||0);p=Math.min(p,Math.max(0,Math.sqrt(24*L)-P))}}let x=m.length>0,b=x?16:3,E=Math.max(x?.6:0,Math.min(x?8:2.2,(x?.35:.2)*Math.abs(r.v))),M=v-r.d,y=r.latV||0,w=Math.sign(M)*Math.min(E,Math.sqrt(2*b*Math.abs(M))),C=y+Sd(w-y,-b*n,b*n),_=r.d+C*n;(v-_)*M<=0&&(_=v,C=0);let A=r.v+Sd(p-r.v,-12*n,5*n);for(let I of u){let H=Math.min(r.d,_),N=Math.max(r.d,_);if(I.d+f(I)<=H||I.d-f(I)>=N)continue;let L=o(I)-(r.dim.length+I.length)/2-1.5,P=-a*(I.direction||0)*(I.speed||0)*n;A=Math.min(A,Math.max(0,(L-P)/Math.max(n,1e-6)))}return{d:_,v:A,s:r.s+a*A*n,avoiding:m.length>0,latV:C}}function Hg(r,t,e){let n={},i=h=>(t.at(h,n),(n.x-r.x)**2+(n.z-r.z)**2),s=e,a=1/0;for(let h=Math.max(0,e-35);h<=e+35;h+=2){let u=i(h);u<a&&(a=u,s=h)}let o=Math.max(0,s-2),c=s+2;for(let h=0;h<12;h++){let u=(o*2+c)/3,f=(o+c*2)/3;i(u)<i(f)?c=f:o=u}let l=(o+c)/2;return t.at(l,n),{s:l,d:(r.x-n.x)*Math.cos(n.th)-(r.z-n.z)*Math.sin(n.th)}}function Ng(r){let t=new Map,e=new Map,n=r.clone();return Ug(r,n,function(i,s){t.set(s,i),e.set(i,s)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let s=i,a=t.get(i),o=a.skeleton.bones;s.skeleton=a.skeleton.clone(),s.bindMatrix.copy(a.bindMatrix),s.skeleton.bones=o.map(function(c){return e.get(c)}),s.bind(s.skeleton,s.bindMatrix)}),n}function Ug(r,t,e){e(r,t);for(let n=0;n<r.children.length;n++)Ug(r.children[n],t.children[n],e)}var QT="assets/models/carriage.glb",$T={length:5.6,width:2.8,height:2.4},Bi={gapMin:15,gapMax:30,max:2,minSpeed:25/3.6,maxSpeed:40/3.6,gallop:11};async function kg(r){let t=await r.loadAsync(QT),e=t.scene;e.traverse(a=>{if(!a.isMesh)return;let o=a.material;o.transparent=!1,o.depthWrite=!0,o.alphaTest=.4,me(o),a.castShadow=!0,a.receiveShadow=!0,a.frustumCulled=!1}),e.rotation.y=Math.PI,e.updateMatrixWorld(!0);let n=new Ge().setFromObject(e,!0),i=n.getCenter(new T);e.position.set(-i.x,-n.min.y,-i.z);let s=t.animations[0]||null;return()=>{let a=new Pt;a.add(Ng(e));let o=new ta(a);return s&&o.clipAction(s).play(),{group:a,dim:{...$T},wheels:[],mixer:o,carriage:!0}}}var Og=430,zg=.24,Bg=1.8,Gg=(r,t,e)=>Math.min(e,Math.max(t,r)),Ql=class{constructor(t,e){this.scene=t,this.cars=e,this.pool=[],this.active=[],this.policy=new Zl,this.ctrl={lane:null,maxV:1/0},this.timer=4+Math.random()*6,this.sameTimer=Rn.sameGapMin+Math.random()*(Rn.sameGapMax-Rn.sameGapMin),this.loading=!1,this.wait=6,this._p={},this._q={},this.beamRoot=new Pt,this.beam=mo(this.beamRoot,null,{glows:!1}),this.beamFor=null,t.add(this.beamRoot),this.carriages=[],this.makeCarriage=null,this.carriageLoading=!1,this.carriageTimer=6}_homeLane(t){return(this.playerHome??t)>=0?Bg:-Bg}async _loadCarriage(){this.carriageLoading=!0;try{this.makeCarriage=await kg(this.cars.loader)}catch(t){console.warn("carriage",t)}}_spawnCarriage(t,e,n){if(this.active.filter(l=>l.carriage).length>=Bi.max)return!1;let i=Bi.minSpeed+Math.random()*(Bi.maxSpeed-Bi.minSpeed),s=Math.random()<.4&&Math.abs(i-n)>3?1:-1,a=s===-1?t+Og+Math.random()*80:i>n+1?Math.max(10,t-80-Math.random()*30):t+150+Math.random()*70;if(this.active.some(l=>Math.abs(l.s-a)<60)||Math.abs(a-t)<40)return!1;let o=this.carriages.find(l=>!l.busy);if(!o){if(this.carriages.length>=Bi.max)return!1;o=this._vehicle(this.makeCarriage()),this.carriages.push(o)}let c=this._homeLane(e);return Object.assign(o,{s:a,direction:s,busy:!0,cruise:i,v:i,heard:!0,policy:null,inCurve:!1,avoidFor:null,latV:0,yaw:0}),o.d=o.baseD=o.avoidD=s===1?c:-c,o.root.visible=!0,this.active.push(o),!0}async _load(t){this.loading=!0;let e=this.cars.list.filter(n=>n.id!==t).sort(()=>Math.random()-.5);for(let n=0;n<Rn.maxActive+Rn.sameMax&&e.length;n++){let i=e[n%e.length];try{let s=await this.cars._load(i);if(this.cars.prepare)try{await this.cars.prepare(s.group)}catch{}this.pool.push(this._vehicle(s))}catch(s){console.warn("traffic",i.id,s)}}}_vehicle(t){let e=new Pt;e.visible=!1,e.add(t.group);let n=t.dim,i=(u,f)=>{let d=new kn(new Hn({map:this.cars.softTex,color:u,transparent:!0,opacity:0,depthWrite:!1,blending:tn}));return d.scale.set(f*1.35,f*.7,1),e.add(d),d},s=!!t.carriage,a=mo(e,this.cars.softTex,{spots:!1,glows:!s});go(a,n);for(let u of t.wheels)u.front=u.pivot.position.z<0,u.pivot.rotation.order="YXZ";let[o,c,l]=ua(n).tail,h=s?[]:[-1,1].map(u=>{let f=i(16720914,1.6);return f.position.set(u*o,c,l+.03),f});return this.scene.add(e),{root:e,wheels:t.wheels,dim:n,headlights:a,tails:h,busy:!1,s:0,v:0,d:0,carriage:s,mixer:t.mixer||null}}update(t,e,n,i,s,a,o=[],c=null){if(!this.pool.length){!this.loading&&(this.wait-=t)<=0&&this._load(a);return}this.cars.loader&&!this.makeCarriage&&!this.carriageLoading&&this._loadCarriage();let l=o.find(v=>v.id==="player");this.makeCarriage&&(this.carriageTimer-=t)<=0&&(this.carriageTimer=this._spawnCarriage(e,n,l?.speed||0)?Bi.gapMin+Math.random()*(Bi.gapMax-Bi.gapMin):1),this.timer-=t,this.sameTimer-=t;for(let v of[-1,1]){let m=v===1,p=m?"sameTimer":"timer";if(this[p]>0)continue;let x=m?Rn.sameGapMin:Rn.gapMin,b=m?Rn.sameGapMax:Rn.gapMax;this[p]=x+Math.random()*(b-x);let E=this.pool.filter(w=>!w.busy);if(!E.length||this.active.filter(w=>!w.carriage&&(w.direction??-1)===v).length>=(m?Rn.sameMax:Rn.maxActive))continue;let M=E[Math.floor(Math.random()*E.length)],y=this._homeLane(n);M.s=m?Math.max(10,e-80-Math.random()*30):e+Og+Math.random()*80,!(this.active.some(w=>Math.abs(w.s-M.s)<60)||Math.abs(M.s-e)<40)&&(M.direction=v,M.busy=!0,M.cruise=M.v=Ig(),M.d=M.baseD=m?y:-y,M.heard=!1,M.policy=null,M.inCurve=!1,M.avoidFor=null,M.avoidD=M.d,M.latV=0,M.yaw=0,M.root.visible=!0,this.active.push(M))}let h=[...o,...this.active.map(v=>({id:v,s:v.s,d:v.d,speed:v.v,direction:v.direction??-1,width:v.dim.width,length:v.dim.length}))],u=o.find(v=>v.id==="player");Object.assign(this.policy.player,{s:e,d:n,v:u?.speed||0,len:u?.length||this.cars.dim?.length||4.7,w:u?.width||this.cars.dim?.width||2,home:this.playerHome??(n>=0?1.5:-1.5)}),this.policy.active=this.active.map(v=>(v.policy||(v.policy={state:"cruise",target:null}),Object.assign(v.policy,{s:v.s,d:v.d,v:v.v,dir:v.direction??-1,len:v.dim.length,w:v.dim.width,home:v.baseD,noOvertake:(v.direction??-1)<0}))),this.policy.active.push(...o.filter(v=>v.id==="person").map(v=>({s:v.s,d:v.d,v:v.speed||0,dir:0,len:v.length,w:v.width,player:!0,home:v.d})));let f=this.policy._decide(this.policy.player,this.playerGoal??u?.speed??0);this.ctrl.lane=f.dT,this.ctrl.maxV=f.vT;let d=this._p,g=this._q;for(let v=this.active.length-1;v>=0;v--){let m=this.active[v],p=Dg(m,i),x=this.policy._decide(m.policy,p),b=I=>I*m.baseD>=0||x.dT*m.baseD<0&&this.policy._sideClear(m.policy,I),E=x.vT;if(this.stopFor){let I=m.direction??-1,H=this.stopFor(m.s+I*m.dim.length/2,I,m.v);H<1/0&&(E=Math.min(E,Math.sqrt(2*3.2*Math.max(0,H-1))))}let M=Fg(m,h,Me.halfWidth,t,Math.min(p,E),b);if(m.s=M.s,m.d=M.d,m.v=M.v,m.avoiding=M.avoiding,m.latV=M.latV,m.s<e-(m.direction===1?180:90)||m.direction===1&&m.s>e+(m.carriage?400:750)){m.busy=!1,m.root.visible=!1,this.active.splice(v,1);continue}if(c&&u&&!m.carriage){let I=m.s-e,H=m.v*(m.direction??-1)-u.speed,N=Math.abs(H);Math.abs(I)>70&&(m.heard=!1),!m.heard&&N>2&&I*H<0&&Math.abs(m.d-n)<7&&-I/H<c.passDur(N)*.5&&(m.heard=!0,c.passBy(N,Ue.clamp((m.d-n)/4,-.8,.8),Math.abs(m.d-n)))}i.at(m.s,d);let y=i.at(m.s+2.5,g).y,w=i.at(m.s-2.5,g).y;m.root.position.set(d.x+Math.cos(d.th)*m.d,d.y,d.z-Math.sin(d.th)*m.d);let C=m.direction??-1,_=Gg(Math.atan2(m.latV||0,Math.max(3,m.v)),-.35,.35);m.yaw=(m.yaw||0)+(_-(m.yaw||0))*(1-Math.exp(-t*8)),m.root.rotation.set(-C*Math.atan2(w-y,5),d.th+(C===-1?Math.PI:0)-C*m.yaw,0,"YXZ");let A=Gg(-C*m.yaw*1.8,-.4,.4);for(let I of m.wheels)I.pivot.rotation.x+=C*(m.v*t)/I.radius,I.front&&(I.pivot.rotation.y=A);m.mixer&&(m.mixer.timeScale=m.v/Bi.gallop,m.mixer.update(t)),vo(m.headlights,m.root,this.cars.viewer,s*zg);for(let I of m.tails)I.material.opacity=(.25+.6*s)*.6}this._beam(e,s)}clearAll(){for(let t of this.active)t.busy=!1,t.root.visible=!1;this.active.length=0,this._beam(0,0),this.ctrl.lane=null,this.ctrl.maxV=1/0}_beam(t,e){let n=null,i=300;for(let s of this.active){if(s.carriage)continue;let a=Math.abs(s.s-t);a<i&&(i=a,n=s)}n!==this.beamFor&&(this.beamFor=n,n&&go(this.beam,n.dim)),n&&(n.root.updateMatrixWorld(),n.root.matrixWorld.decompose(this.beamRoot.position,this.beamRoot.quaternion,this.beamRoot.scale)),vo(this.beam,this.beamRoot,null,n?e*zg:0)}};var Vg=5,Ad=2400,Rd=420,Wg=26,Cd=12,qg=12.5,Xg=33,jg=3,$l=Math.floor(Xg*2/jg)+1,_i=(r,t)=>r+Math.random()*(t-r);function Cn(r,t){let e=r;return e.setAttribute("aKind",new Mt(new Float32Array(e.attributes.position.count).fill(t),1)),e.deleteAttribute("uv"),e}function tS(){let r=Ps([Cn(new Wc(.42,1,6,14).rotateX(Math.PI/2).scale(.92,1.05,1).translate(0,1.05,0),0),Cn(new vi(.17,10,8).scale(1,.75,1.15).translate(0,.62,-.42),1),Cn(new he(.5,.3,.4).translate(0,1.3,-.72),0)]),t=Ps([Cn(new he(.34,.42,.5).rotateX(-.5).translate(0,-.02,.16),0),Cn(new he(.3,.34,.48).translate(0,-.1,.5),0),Cn(new he(.29,.22,.16).translate(0,-.2,.78),1),Cn(new he(.2,.05,.1).rotateZ(.25).translate(.23,0,.38),0),Cn(new he(.2,.05,.1).rotateZ(-.25).translate(-.23,0,.38),0),Cn(new Jr(.028,.13,6).rotateZ(-.9).translate(.15,.1,.42),3),Cn(new Jr(.028,.13,6).rotateZ(.9).translate(-.15,.1,.42),3),Cn(new he(.035,.05,.05).translate(.152,-.02,.56),2),Cn(new he(.035,.05,.05).translate(-.152,-.02,.56),2)]),e=Ps([Cn(new Ve(.08,.065,.72,8).translate(0,-.36,0),0),Cn(new Ve(.07,.08,.1,8).translate(0,-.77,0),2)]),n=Ps([Cn(new Ve(.025,.018,.72,6).translate(0,-.36,0),0),Cn(new vi(.06,6,5).scale(1,1.8,1).translate(0,-.76,0),2)]);return{body:r,head:t,leg:e,tail:n}}function eS(r){let t=new Yt({roughness:.82,metalness:0}),e={value:r};return t.onBeforeCompile=n=>{n.uniforms.uSeed=e,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute float aKind;
varying float vKind;
varying vec3 vCP;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vKind = aKind;
vCP = position;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
        uniform vec3 uSeed;
        varying float vKind;
        varying vec3 vCP;
        float cH(vec3 p) { p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
        float cN(vec3 x) {
          vec3 i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f);
          return mix(mix(mix(cH(i), cH(i + vec3(1, 0, 0)), f.x), mix(cH(i + vec3(0, 1, 0)), cH(i + vec3(1, 1, 0)), f.x), f.y),
                     mix(mix(cH(i + vec3(0, 0, 1)), cH(i + vec3(1, 0, 1)), f.x), mix(cH(i + vec3(0, 1, 1)), cH(i + vec3(1, 1, 1)), f.x), f.y), f.z);
        }`).replace("#include <color_fragment>",`#include <color_fragment>
        vec3 cowC;
        if (vKind < 0.5) {
          // mảng loang: nhiễu 2 tầng, mép hơi răng cưa như lông thật
          float n = cN(vCP * 2.4 + uSeed) * 0.75 + cN(vCP * 7.0 + uSeed * 1.7) * 0.25;
          cowC = mix(vec3(0.62, 0.6, 0.56), vec3(0.018, 0.016, 0.016), smoothstep(0.5, 0.53, n));
        } else if (vKind < 1.5) cowC = vec3(0.62, 0.34, 0.33);
        else if (vKind < 2.5) cowC = vec3(0.02);
        else cowC = vec3(0.62, 0.57, 0.44);
        diffuseColor.rgb = cowC;`)},t.customProgramCacheKey=()=>"cow",me(t)}var Pd=class{constructor(t,e){let n=eS(new T(e*17.3,e*5.1,e*11.7)),i=a=>{let o=new Ft(a,n);return o.castShadow=!0,o.receiveShadow=!0,o};this.root=new Pt,this.root.add(i(t.body)),this.neck=new Pt,this.neck.position.set(0,1.15,.85),this.neck.add(i(t.head)),this.root.add(this.neck),this.legs=[[.24,.6],[-.24,.6],[.24,-.6],[-.24,-.6]].map(([a,o])=>{let c=new Pt;return c.position.set(a,.81,o),c.add(i(t.leg)),this.root.add(c),c}),this.tail=new Pt,this.tail.position.set(0,1.4,-.92),this.tail.add(i(t.tail)),this.root.add(this.tail);let s=_i(.92,1.06);this.root.scale.setScalar(s),this.seed=Math.random()*100,this.mode="graze",this.timer=_i(1,8),this.head=1.2,this.headY=0,this.gait=0,this.x=0,this.z=0,this.yaw=0,this.y=0,this.hx=1e9,this.hz=1e9}},th=class{constructor(t){this.group=new Pt,this.group.visible=!1,t.add(this.group);let e=tS();this.cows=Array.from({length:Vg},(i,s)=>{let a=new Pd(e,s);return this.group.add(a.root),a});let n=me(new Yt({color:5914151,roughness:.92}));this.posts=new we(new he(.13,1.25,.13).translate(0,.62,0),n,$l),this.rails=new we(new he(1,.1,.05),n,($l-1)*2);for(let i of[this.posts,this.rails])i.castShadow=!0,i.receiveShadow=!0,i.frustumCulled=!1,this.group.add(i);this.herd=null,this.enabled=!1,this.onBuild=null,this._p={},this._m=new bt,this._q=new Wt,this._v=new T,this._s=new T,this._up=new T(0,1,0)}set visible(t){this.enabled=t,t||(this.group.visible=!1),this.herd=null}get visible(){return this.enabled}reset(){this.herd=null}_place(t,e,n){let i=Rd+t*Ad,s=t%2?-1:1,a=e.at(i,this._p),o=Math.cos(a.th),c=-Math.sin(a.th),l=-Math.sin(a.th),h=-Math.cos(a.th);this.cx=a.x+o*s*Wg,this.cz=a.z+c*s*Wg,this.cows.forEach((m,p)=>{let x=p/Vg*Math.PI*2+_i(-.4,.4),b=_i(2,Cd*.7);m.x=this.cx+Math.cos(x)*b,m.z=this.cz+Math.sin(x)*b,m.yaw=_i(0,Math.PI*2),m.hx=1e9,m.mode="graze",m.timer=_i(1,8)});let u=this._m,f=this._q,d=this._v,g=this._s,v=[];for(let m=0;m<$l;m++){let p=e.at(i-Xg+m*jg,this._p),x=p.x+Math.cos(p.th)*s*qg,b=p.z-Math.sin(p.th)*s*qg,E=n.heightAt(x,b);v.push([x,E,b]),u.compose(d.set(x,E-.05,b),f.setFromAxisAngle(this._up,p.th),g.set(1,1,1)),this.posts.setMatrixAt(m,u)}for(let m=0;m<$l-1;m++){let[p,x,b]=v[m],[E,M,y]=v[m+1],w=Math.hypot(E-p,y-b),C=Math.atan2(-(y-b),E-p),_=Math.atan2(M-x,w);for(let A=0;A<2;A++)f.setFromEuler(new Li(0,C,_,"YZX")),u.compose(d.set((p+E)/2,(x+M)/2+(A?1:.55),(b+y)/2),f,g.set(w+.1,1,1)),this.rails.setMatrixAt(m*2+A,u)}this.posts.instanceMatrix.needsUpdate=!0,this.rails.instanceMatrix.needsUpdate=!0,this.onBuild&&(this.onBuild(this.group),this.onBuild=null)}update(t,e,n,i){if(!this.enabled)return;let s=Math.round((e+150-Rd)/Ad),a=Rd+s*Ad;if(s<0||a<e-250||a>e+750){this.group.visible=!1,this.herd=null;return}this.herd!==s&&(this._place(s,n,i),this.herd=s),this.group.visible=!0;let o=performance.now()/1e3;for(let c of this.cows)this._cow(c,t,o,i)}_cow(t,e,n,i){if(t.timer-=e,t.timer<=0){let u=Math.random();t.mode==="walk"||u<.5?(t.mode="graze",t.timer=_i(5,14)):u<.75?(t.mode="look",t.timer=_i(2,5),t.lookY=_i(-.45,.45)):(t.mode="walk",t.timer=_i(2.5,6),t.turn=_i(-.35,.35))}let s=1.2+.05*Math.sin(n*3.1+t.seed),a=0,o=0;if(t.mode==="look"&&(s=-.12,a=t.lookY),t.mode==="walk"){s=.35,o=.55;let u=this.cx-t.x,f=this.cz-t.z;if(u*u+f*f>Cd*Cd){let d=Math.atan2(u,f);t.yaw+=Math.atan2(Math.sin(d-t.yaw),Math.cos(d-t.yaw))*Math.min(1,e*1.5)}else t.yaw+=t.turn*e}for(let u of this.cows){if(u===t)continue;let f=t.x-u.x,d=t.z-u.z,g=f*f+d*d;if(g<6.25&&g>1e-6){let v=Math.sqrt(g),m=(2.5-v)*e;t.x+=f/v*m,t.z+=d/v*m}}t.x+=Math.sin(t.yaw)*o*e,t.z+=Math.cos(t.yaw)*o*e,Math.hypot(t.x-t.hx,t.z-t.hz)>.4&&(t.y=i.heightAt(t.x,t.z),t.hx=t.x,t.hz=t.z);let c=1-Math.exp(-e*2.2);t.head+=(s-t.head)*c,t.headY+=(a-t.headY)*c,t.gait+=((o>0?1:0)-t.gait)*Math.min(1,e*3),t.phase=(t.phase||0)+e*5.2*t.gait,t.root.position.set(t.x,t.y,t.z),t.root.rotation.y=t.yaw,t.neck.rotation.set(t.head,t.headY,0,"YXZ");let l=.38*t.gait*Math.sin(t.phase);t.legs[0].rotation.x=l,t.legs[3].rotation.x=l,t.legs[1].rotation.x=-l,t.legs[2].rotation.x=-l;let h=Math.max(0,Math.sin(n*.37+t.seed)-.85)*6;t.tail.rotation.set(.12,0,.12*Math.sin(n*1.6+t.seed)+.5*h*Math.sin(n*9))}};var Id=Me.halfWidth,nS=230,iS=190,eh=Id+.6,sS=6,rS=4,Eo=13,ai=(r,t,e)=>{let n=Math.min(1,Math.max(0,(e-r)/(t-r)));return n*n*(3-2*n)};function aS(r){return{index:r,s:260+r*560+$t(r,71)*100,width:2+3*$t(r,37),flow:.25+.75*$t(r,93)}}function Yg(r,t,e,n,i){let s=t.at(r.s,{}),a=Math.cos(s.th)*n,o=-Math.sin(s.th)*n,c=(p,x)=>e.heightAt(p,x),l=1.5,h=n<0?1:-1,u=.61,f=s.x+a*eh,d=s.z+o*eh,g=a,v=o,m=[];for(let p=0;p<i;){if(p>6){let b=(c(f+l,d)-c(f-l,d))*h,E=(c(f,d+l)-c(f,d-l))*h,M=Math.hypot(b,E);if(M>1e-6){let w=.25*ai(6,30,p);g+=(b/M-g)*w,v+=(E/M-v)*w}let y=Math.hypot(g,v);if(g/=y,v/=y,g*a+v*o<Math.cos(u)){let w=Math.sign(a*v-o*g||1)*u;g=a*Math.cos(w)-o*Math.sin(w),v=a*Math.sin(w)+o*Math.cos(w)}}let x=p<24?1.2:2.4;if(f+=g*x,d+=v*x,p+=x,c(f,d),p>12&&e._d<Id+4)break;m.push({x:f,z:d,a:p,dx:g,dz:v})}return m}function Kg(r,t){return r.map(({x:e,z:n,a:i,dx:s,dz:a})=>{let c=(2+6*ai(30,150,i))*ai(10,40,i)*((Ce(i/52+t,3.3)-.5)*2+.35*(Ce(i/13+t,8.1)-.5)*2);return{x:e-a*c,z:n+s*c,a:i}})}function oS(r,t,e){let n=e.iCar;e.setCar(r.s);let i=t.at(r.s,{}),s=Math.cos(i.th),a=-Math.sin(i.th),o=new T(i.x,i.y,i.z),c=r.index*3.17+.37,l=r.width,h=r.flow,u=l*.6,f=l*(.17+.1*h),d=[],g=Kg(Yg(r,t,e,-1,nS),c),v=Kg(Yg(r,t,e,1,iS),c+41),m=g.length?g[g.length-1].a:0,p=v.length?v[v.length-1].a:0;for(let P=g.length-1;P>=0;P--)d.push({...g[P],side:-1,end:m,road:!1});let x=16;for(let P=0;P<=x;P++){let D=-eh+2*eh*P/x;d.push({x:i.x+s*D,z:i.z+a*D,d:D,a:0,side:0,road:!0})}for(let P of v)d.push({...P,side:1,end:p,road:!1});let b={};for(let P=0;P<d.length;P++){let D=d[P];if(D.road)D.tx=s,D.tz=a;else{let O=d[Math.max(0,P-1)],G=d[Math.min(d.length-1,P+1)],X=Math.hypot(G.x-O.x,G.z-O.z)||1;D.tx=(G.x-O.x)/X,D.tz=(G.z-O.z)/X}D.px=D.tz,D.pz=-D.tx;let k;D.road?k=u:(k=f*(.7+.6*Ce(D.a/17+c,5.5+D.side)),D.side<0&&(k*=1+.6*(1-ai(4,22,D.a))),k+=(u-k)*(1-ai(0,D.side<0?6:3,D.a)),k*=.3+.7*ai(0,30,D.end-D.a)),D.hw=k,D.wb=D.road?k+.9:k*1.7+.45,D.xs=[],D.ys=[],D.zs=[];for(let O=0;O<Eo;O++){let G=D.wb*(2*O/(Eo-1)-1),X,K,it;D.road?(t.at(r.s+G,b),X=b.x+Math.cos(b.th)*D.d,it=b.z-Math.sin(b.th)*D.d,K=Math.abs(D.d)<=Id?b.y+.05:e.heightAt(X,it)):(X=D.x+D.px*G,it=D.z+D.pz*G,K=e.heightAt(X,it)),D.xs.push(X),D.ys.push(K),D.zs.push(it)}D.y=D.ys[(Eo-1)/2]}e.iCar=n;let E=0;for(let P=0;P<d.length;P++){let D=d[P],k=d[Math.max(0,P-1)],O=d[Math.min(d.length-1,P+1)];D.slope=D.road?0:Math.abs(O.y-k.y)/(Math.hypot(O.x-k.x,O.z-k.z)||1),P&&(E+=Math.hypot(D.x-d[P-1].x,D.y-d[P-1].y,D.z-d[P-1].z)),D.along=E}let M=E;for(let P=0;P<2;P++){let D=d.map(k=>k.slope);for(let k=1;k<d.length-1;k++)d[k].road||(d[k].slope=D[k-1]*.25+D[k]*.5+D[k+1]*.25)}let y=0;for(let P=0;P<d.length;P++){let D=d[P],k=0;for(let K=P-1;K>=0&&D.along-d[K].along<8;K--)k=Math.max(k,d[K].slope);let O=P?D.along-d[P-1].along:0;y=Math.max(Math.min(1,Math.max(0,(k-D.slope)*.8)),y*Math.exp(-O/(D.road?1.3:3.5))),D.turb=D.road?y*.4:y,D.st=Math.min(1,D.slope/1.3),D.fade=ai(0,25,D.along)*ai(0,30,M-D.along);let G=P?D.along-d[P-1].along:0,X=(.6+4.4*D.st)*(.75+.5*h);D.tau=P?d[P-1].tau+G/X:0,D.road||(D.fade*=1-ai(40,90,D.a)*(1-ai(.3,.62,Ce(D.a/45+c,13.7+D.side))))}let w=(P,D,k)=>{let O=Math.min(Eo-1.0001,Math.max(0,(D/k+1)*(Eo-1)/2)),G=Math.floor(O),X=O-G;return P[G]+(P[G+1]-P[G])*X},C=(P,D,k,O)=>{let G=[],X=[],K=[],it=[];d.forEach((Q,lt)=>{let ht=D(Q),yt=k(Q);for(let Nt=0;Nt<=P;Nt++){let qt=ht*(2*Nt/P-1);if(G.push(w(Q.xs,qt,Q.wb)-o.x,w(Q.ys,qt,Q.wb)+yt-o.y,w(Q.zs,qt,Q.wb)-o.z),X.push(qt,Q.along,Q.tau,h),K.push(...O(Q,ht)),lt&&Nt<P){let It=(lt-1)*(P+1)+Nt,ne=lt*(P+1)+Nt;it.push(It,ne,It+1,It+1,ne,ne+1)}}});let z=new Rt;return z.setAttribute("position",new wt(G,3)),z.setAttribute("aWUV",new wt(X,4)),z.setAttribute("aInfo",new wt(K,4)),z.setIndex(it),z.computeVertexNormals(),z.computeBoundingSphere(),z},_=P=>P.road?.035+.02*h:.07+.13*ai(15,120,P.a)+.4*P.st,A=C(sS,P=>P.hw,_,(P,D)=>[P.st,P.turb,P.fade,D]),I=C(rS,P=>P.wb,P=>P.road?.012:_(P)*.55,(P,D)=>[P.st,P.road?1:0,P.fade,D]),H=[];d.forEach((P,D)=>{if(P.road||P.a<1.3||P.fade<.3)return;let k=(P.a<25?.5:P.a<80?.22:.08)*(1-.65*ai(.55,.9,P.st));for(let O of[-1,1]){if($t(r.index*977+D,O>0?11:23)>k)continue;let X=$t(r.index*977+D,O>0?31:47),K=P.a<12?.45+.65*X:.25+.45*X,it=O*Math.min(P.wb-.05,P.hw+.05+.35*K*$t(D,59));H.push({x:w(P.xs,it,P.wb)-o.x,y:w(P.ys,it,P.wb)-(.28+.2*P.st)*K-o.y,z:w(P.zs,it,P.wb)-o.z,s:K,yaw:X*6.283,k:Math.floor($t(D,O+71)*2.999),c:.75+.35*$t(D,O+83)})}if(P.st>.5&&$t(r.index*977+D,97)<.12){let O=($t(D,101)-.5)*P.hw,G=.2+.2*$t(D,103);H.push({x:w(P.xs,O,P.wb)-o.x,y:w(P.ys,O,P.wb)-.1-o.y,z:w(P.zs,O,P.wb)-o.z,s:G,yaw:$t(D,107)*6.283,k:0,c:.7})}});let N=[],L=(P,D)=>d.filter(k=>k.side===P).reduce((k,O)=>!k||Math.abs(O.a-D)<Math.abs(k.a-D)?O:k,null);for(let[P,D]of[[L(-1,2.5),1],[L(1,9),.8]])P&&N.push({x:P.x-o.x,y:P.y+.3-o.y,z:P.z-o.z,w:Math.max(2.2,P.hw*2.4),h:1.2+1.6*h,op:(.1+.14*h)*D});return{origin:o,water:A,wet:I,rocks:H,sprays:N,nodes:d,sheet:u}}var Jg=`
float wHash(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float wNoise(vec2 p) {
  vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(wHash(i), wHash(i + vec2(1.0, 0.0)), f.x), mix(wHash(i + vec2(0.0, 1.0)), wHash(i + vec2(1.0, 1.0)), f.x), f.y);
}
float wFbm(vec2 p) { return wNoise(p) * 0.62 + wNoise(p * 2.03 + 5.2) * 0.38; }
// gợn sóng: nghiêng pháp tuyến theo đạo hàm màn hình của độ cao (như bump map)
vec3 wPerturb(vec3 pos, vec3 n, vec2 dH, float face) {
  vec3 sx = dFdx(pos), sy = dFdy(pos), r1 = cross(sy, n), r2 = cross(n, sx);
  float det = dot(sx, r1) * face;
  return normalize(abs(det) * n - sign(det) * (dH.x * r1 + dH.y * r2));
}
`;function cS(r,t){r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
attribute vec4 aWUV;
attribute vec4 aInfo;
varying vec4 vWUV;
varying vec4 vInfo;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWUV = aWUV; vInfo = aInfo;`).replace("#include <project_vertex>",`#include <project_vertex>
      mvPosition.xyz *= ${(1-t).toFixed(4)};
      gl_Position = projectionMatrix * mvPosition;`)}function lS(r){let t=new Yt({color:16777215,roughness:.08,metalness:0,envMapIntensity:.7,transparent:!0,depthWrite:!1,side:de,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-12});return t.onBeforeCompile=e=>{e.uniforms.uTime=r,cS(e,.005),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
        uniform float uTime; varying vec4 vWUV; varying vec4 vInfo;
        float wFoam = 0.0, wHgt = 0.0, wMask = 0.0;
        ${Jg}`).replace("#include <map_fragment>",`
        float lat = vWUV.x, along = vWUV.y, tau = vWUV.z, flow = vWUV.w;
        float slope = vInfo.x, turb = vInfo.y, hw = max(vInfo.w, 0.05);
        // toạ độ dọc dòng theo thời gian chảy: chỗ dốc nước nhanh => vệt kéo dài; chỗ thoải => gợn ngắn
        float n1 = wFbm(vec2(lat * 1.3, (tau - uTime) * 0.75));
        float n2 = wFbm(vec2(lat * 2.2 + 4.1, (tau - uTime * 1.35) * 1.4 + 1.7));
        float n = n1 * 0.7 + n2 * 0.3;
        float e = abs(lat) / hw;
        float edge = 0.76 + 0.45 * (wNoise(vec2(along * 0.42 + (lat > 0.0 ? 3.1 : 17.7), uTime * 0.15)) - 0.5) + 0.12 * (wNoise(vec2(along * 1.7, lat * 0.3 + uTime * 0.3)) - 0.5);
        float body = 1.0 - smoothstep(edge - 0.22, edge + 0.04, e + 0.25 * (n2 - 0.5));   // mép nham nhở, đổi theo dòng chảy
        // vách dốc: nước tách thành vài nhánh, đổi dần theo chiều dài dòng
        float strands = wNoise(vec2(lat / hw * 2.3 + flow * 7.0, along * 0.045));
        body *= mix(1.0, smoothstep(0.22, 0.42, strands), smoothstep(0.35, 0.8, slope) * 0.85);
        float fa = clamp(slope * 1.1 + turb, 0.0, 1.0);
        float nF = wFbm(vec2(lat * 3.2 + 2.0, (tau - uTime) * 1.8));                                    // chỗ thoải: bọt vụn nhỏ
        float foamC = smoothstep(0.62 - 0.25 * fa, 0.75 - 0.15 * fa, mix(nF, n, smoothstep(0.15, 0.5, slope))) * smoothstep(0.05, 0.4, fa);   // thác / ghềnh: trắng xoá
        float rid = 1.0 - abs(wNoise(vec2(lat * 2.2 + 9.1, (tau - uTime) * 0.55)) * 2.0 - 1.0);
        float foamL = smoothstep(0.9, 0.99, rid) * 0.35 * (1.0 - 0.6 * turb) * (1.0 - slope) * (1.0 - smoothstep(10.0, 40.0, length(vViewPosition)));    // chỗ thoải: vệt bọt mảnh trôi theo dòng
        float foam = max(foamC, foamL) * body;
        wFoam = foam;
        wMask = body * vInfo.z;
        vec3 thin = mix(vec3(0.03, 0.045, 0.04), vec3(0.14, 0.16, 0.17), slope);   // màng nước mỏng trên đá: hơi trắng đục khi dốc
        diffuseColor.rgb = mix(thin, vec3(0.62, 0.65, 0.66), foam);
        diffuseColor.a = mix(mix(0.18, 0.32, flow) * (0.65 + 0.35 * (1.0 - e * e)) * (1.0 + 1.2 * slope), 0.9, foam) * wMask;
        wHgt = (wNoise(vec2(lat * 3.1, (tau - uTime) * 1.5)) * 0.6 + n2 * 0.4) * 0.03 * (1.0 - slope) * (1.0 - foam);`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
roughnessFactor = mix(mix(roughnessFactor, 0.55, vInfo.x), 0.9, wFoam);   // nước sủi bọt / màng nước trên vách: nhám, không bóng như gương`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
        normal = wPerturb(-vViewPosition, normal, vec2(dFdx(wHgt), dFdy(wHgt)) / (1.0 + length(vViewPosition) / 12.0), faceDirection);`).replace("#include <opaque_fragment>",`
        float wSpec = dot(reflectedLight.directSpecular + reflectedLight.indirectSpecular, vec3(0.3333));
        diffuseColor.a = clamp(diffuseColor.a + wSpec * 0.6 * (1.0 - wFoam) * (1.0 - vInfo.x) * wMask, 0.0, 1.0);
        #include <opaque_fragment>`)},t.customProgramCacheKey=()=>"waterfall-water",me(t)}function hS(){return new ye({transparent:!0,depthWrite:!1,side:de,blending:Ku,blendEquation:Zi,blendSrc:Ju,blendDst:Zu,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-8,vertexShader:`
      attribute vec4 aWUV; attribute vec4 aInfo;
      varying vec4 vWUV; varying vec4 vInfo; varying float vDist;
      void main() {
        vWUV = aWUV; vInfo = aInfo;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        vDist = -mvPosition.z;
        mvPosition.xyz *= 0.997;
        gl_Position = projectionMatrix * mvPosition;
      }`,fragmentShader:`
      varying vec4 vWUV; varying vec4 vInfo; varying float vDist;
      ${Jg}
      void main() {
        float lat = vWUV.x, along = vWUV.y, e = abs(lat) / max(vInfo.w, 0.05);
        float edge = 0.72 + 0.3 * (wNoise(vec2(along * 0.35 + (lat > 0.0 ? 5.3 : 11.9), 0.5)) - 0.5) + 0.12 * (wNoise(vec2(along * 1.3, lat * 1.1 + 3.0)) - 0.5);
        float m = (1.0 - smoothstep(edge - 0.35, edge + 0.05, e)) * vInfo.z * (1.0 - smoothstep(150.0, 700.0, vDist));
        vec3 tint = mix(vec3(0.42, 0.44, 0.42), vec3(0.6, 0.7, 0.5), smoothstep(0.35, 0.95, e));     // giữa sẫm, rìa rêu
        tint = mix(tint, vec3(0.55), vInfo.y * 0.6);                                                 // mặt đường ướt: tối vừa
        gl_FragColor = vec4(mix(vec3(1.0), tint, m), 1.0);
      }`})}var Ld=class{constructor(t,e){let n=this.N=320;this.pos=new Float32Array(n*3),this.col=new Float32Array(n*4),this.vel=new Float32Array(n*3),this.life=new Float32Array(n).fill(1),this.max=new Float32Array(n).fill(1);let i=new Rt;i.setAttribute("position",new Mt(this.pos,3).setUsage(xi)),i.setAttribute("color",new Mt(this.col,4).setUsage(xi)),this.points=new fn(i,new gi({size:.6,map:e,transparent:!0,depthWrite:!1,vertexColors:!0})),this.points.material.onBeforeCompile=s=>{s.vertexShader=s.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
mvPosition.xyz *= 0.96;
gl_Position = projectionMatrix * mvPosition;`)},this.points.frustumCulled=!1,t.add(this.points),this.next=0,this.alive=0}emit(t,e,n,i,s,a){let o=this.next;this.next=(o+1)%this.N,this.pos.set([t,e,n],o*3),this.vel.set([i,s,a],o*3),this.life[o]=0,this.max[o]=.45+Math.random()*.6,this.alive=2}update(t,e){if(!this.alive)return;let n=!1,i=.3+.6*e;for(let s=0;s<this.N;s++){let a=s*3;this.life[s]<this.max[s]&&(this.life[s]+=t,this.vel[a+1]-=9.8*t,this.pos[a]+=this.vel[a]*t,this.pos[a+1]+=this.vel[a+1]*t,this.pos[a+2]+=this.vel[a+2]*t,n=!0);let o=Math.max(0,1-this.life[s]/this.max[s]);this.col.set([i,i*1.02,i*1.04,.9*o*Math.sqrt(o)],s*4)}n||this.alive--,this.points.geometry.attributes.position.needsUpdate=!0,this.points.geometry.attributes.color.needsUpdate=!0}},nh=class{constructor(t,e,n){this.road=e,this.terrain=n,this.items=new Map,this.group=new Pt,this.group.visible=!1,t.add(this.group),this.uTime={value:0},this.material=lS(this.uTime),this.wetMaterial=hS(),this.rockGeos=[0,1,2].map(i=>dd(i,2)),this.rockMat=n.rockMat,this.tex=sl(),this.splash=new Ld(this.group,this.tex),this.last=null,this.inWater=!1,this._p={},this._v=new T,this._r=new T}setMap(t){this.group.visible=t==="mountain";for(let e of this.items.values())this._remove(e);this.items.clear()}_remove(t){this.group.remove(t.group),t.water.geometry.dispose(),t.wet.geometry.dispose(),t.rocks&&t.rocks.forEach(e=>e.dispose());for(let e of t.sprays)e.sprite.material.dispose()}_build(t){let e=oS(t,this.road,this.terrain),n=new Pt;n.position.copy(e.origin);let i=new Ft(e.wet,this.wetMaterial),s=new Ft(e.water,this.material);i.receiveShadow=s.receiveShadow=!0,i.renderOrder=1,s.renderOrder=2,n.add(i,s);let a=null;if(this.rockMat&&e.rocks.length){let c=this.rockGeos.map(()=>[]);e.rocks.forEach(m=>c[m.k].push(m));let l=new bt,h=new Wt,u=new Li,f=new T,d=new T,g=new et,v=new et("#968c80");a=c.filter(m=>m.length).map(m=>{let p=new we(this.rockGeos[m[0].k],this.rockMat,m.length);return m.forEach((x,b)=>{h.setFromEuler(u.set((x.c-.9)*.6,x.yaw,(x.c-.9)*.5)),p.setMatrixAt(b,l.compose(d.set(x.x,x.y,x.z),h,f.set(x.s,x.s*(.6+.35*x.c),x.s))),p.setColorAt(b,g.copy(v).multiplyScalar(x.c))}),p.castShadow=p.receiveShadow=!0,n.add(p),p})}let o=[];return e.sprays.forEach((c,l)=>{for(let h=0;h<3;h++){let u=new kn(new Hn({map:this.tex,color:14674668,transparent:!0,opacity:0,depthWrite:!1}));u.position.set(c.x,c.y,c.z),n.add(u),o.push({sprite:u,sp:c,ph:h/3+l*.17})}}),this.group.add(n),{spec:t,group:n,water:s,wet:i,rocks:a,sprays:o,sheet:e.sheet}}update(t,e,n,i={}){if(!this.group.visible){i.audio?.setWater?.(0);return}let s=this.last===null?0:Math.min(.1,Math.max(0,t-this.last));this.last=t,this.uTime.value=t;let a=Math.max(0,Math.floor((e-420)/560)),o=Math.floor((e+950)/560);for(let[f,d]of this.items)(f<a||f>o)&&(this._remove(d),this.items.delete(f));for(let f=a;f<=o;f++)if(!this.items.has(f)){this.items.set(f,this._build(aS(f)));break}let c=null,l=1/0;for(let f of this.items.values()){for(let{sprite:g,sp:v,ph:m}of f.sprays){let p=(t*.32+m)%1;g.position.y=v.y+p*v.h*.8,g.scale.set(v.w*(.6+.7*p),v.h*(.5+.8*p),1),g.material.opacity=v.op*Math.sin(Math.PI*p),g.material.color.setRGB(.88,.92,.93).multiplyScalar(.2+.8*n)}let d=Math.abs(f.spec.s-e);d<l&&(l=d,c=f)}let h=(f,d,g,v,m,p)=>{let x=c;if(!x||g<.8||Math.abs(f-x.spec.s)>x.sheet+v.length/2)return!1;let b=this.road.at(f,this._p),E=Math.cos(b.th),M=-Math.sin(b.th),y=-Math.sin(b.th)*m,w=-Math.cos(b.th)*m,C=Math.min(1.6,Math.max(.35,g/15)),_=!1;for(let A of[-.33,.33]){let I=f+A*v.length*m;if(!(Math.abs(I-x.spec.s)>x.sheet*.95)){_=!0;for(let H of[-1,1]){let N=p*C*s+Math.random();for(let L=1;L<=N;L++){let P=b.x+E*(d+H*v.width*.42)+y*A*v.length,D=b.z+M*(d+H*v.width*.42)+w*A*v.length,k=H*(.8+2.2*Math.random())*C,O=g*(.1+.3*Math.random());this.splash.emit(P,b.y+.25,D,E*k+y*O,(1.2+2.6*Math.random())*C,M*k+w*O)}}}}return _},u=!1;i.dim&&i.v!==void 0&&(u=h(e,i.d||0,i.v,i.dim,1,40));for(let f of i.npcs||[])h(f.s,f.d,f.v,f.dim,f.direction??-1,30);if(this.splash.update(s,n),u&&!this.inWater&&i.audio?.splash?.(Math.min(1.3,Math.max(.25,i.v/20))),this.inWater=u,i.audio?.setWater){let f=0,d=0;if(c&&i.cam){let g=i.cam.position,v=c.group.position,m=v.x-g.x,p=v.z-g.z,x=Math.max(0,Math.hypot(m,p,v.y-g.y)-4);f=c.spec.flow*(.35+.65*c.spec.flow)/(1+(x/28)**2);let b=this._r.set(1,0,0).applyQuaternion(i.cam.quaternion);d=Math.max(-.8,Math.min(.8,(m*b.x+p*b.z)/(Math.hypot(m,p)||1)))}i.audio.setWater(f,d)}}};var Zn=420,ih=new T(0,1,0),uS=`
  attribute float aA, aS, aR;
  uniform float uScale;
  varying float vA, vR;
  void main() {
    vec4 mv = viewMatrix * vec4(position, 1.0);
    vA = aA; vR = aR;
    gl_PointSize = clamp(aS * uScale / -mv.z, 1.0, 160.0);
    gl_Position = projectionMatrix * mv;
  }`,fS=`
  uniform vec3 uColor;
  varying float vA, vR;
  float h2(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float n2(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
    return mix(mix(h2(i), h2(i + vec2(1, 0)), f.x), mix(h2(i + vec2(0, 1)), h2(i + vec2(1, 1)), f.x), f.y); }
  void main() {
    // mỗi hạt một hình loang khác nhau (nhiễu xoay theo hạt) => khói sợi, không tròn như bóng
    vec2 c = gl_PointCoord - 0.5;
    float an = vR * 6.2831853, cs = cos(an), sn = sin(an);
    vec2 q = vec2(c.x * cs - c.y * sn, c.x * sn + c.y * cs);
    float n = n2(q * 4.0 + vR * 37.0) * 0.65 + n2(q * 9.0 - vR * 13.0) * 0.35;
    float r = length(c) * 2.0;
    float a = smoothstep(1.0, 0.15, r + (n - 0.5) * 0.9);
    a *= a * vA;
    if (a < 0.004) discard;
    gl_FragColor = vec4(uColor, a);
  }`,sh=class{constructor(t,e){this.person=e,this.cig=new Pt;let n=new Ft(new Ve(.0055,.0055,.062,8).translate(0,.0115,0),new Yt({color:15921128,roughness:.8})),i=new Ft(new Ve(.0057,.0057,.023,8).translate(0,-.031,0),new Yt({color:13208124,roughness:.7}));this.ember=new Ft(new Ve(.0056,.0056,.005,8).translate(0,.0425,0),new qe({color:new et(1.6,.35,.08)})),this.cig.add(n,i,this.ember),this.cig.visible=!1,t.add(this.cig);let s=na(),a=(c,l)=>{let h=new kn(new Hn({map:s,color:c,transparent:!0,opacity:0,depthWrite:!1,blending:tn,fog:!1}));return h.scale.setScalar(l),h.visible=!1,t.add(h),h};this.tipGlow=a(16734746,.07),this.flame=a(16757575,.09),this.pos=new Float32Array(Zn*3),this.vel=new Float32Array(Zn*3),this.age=new Float32Array(Zn).fill(99),this.life=new Float32Array(Zn).fill(1),this.s0=new Float32Array(Zn),this.s1=new Float32Array(Zn),this.a0=new Float32Array(Zn),this.drag=new Float32Array(Zn),this.aA=new Float32Array(Zn),this.aS=new Float32Array(Zn),this.aR=new Float32Array(Zn);let o=new Rt;o.setAttribute("position",new Mt(this.pos,3).setUsage(xi)),o.setAttribute("aA",new Mt(this.aA,1).setUsage(xi)),o.setAttribute("aS",new Mt(this.aS,1).setUsage(xi)),o.setAttribute("aR",new Mt(this.aR,1).setUsage(xi)),this.mat=new ye({uniforms:{uScale:{value:500},uColor:{value:new et(.7,.7,.72)}},vertexShader:uS,fragmentShader:fS,transparent:!0,depthWrite:!1,fog:!1}),this.points=new fn(o,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=5,t.add(this.points),this.next=0,this.emitTip=0,this.emitMouth=0,this.t=0,this._h=new T,this._e=new T,this._d=new T,this._c=new T,this.tip=new T,this._q=new Wt,this._dir=new T,this._r=new T,this._fv=[0,1,2,3].map(()=>new T),this.fg=null}_spawn(t,e,n,i,s,a,o){let c=this.next;this.next=(this.next+1)%Zn,this.pos.set([t.x,t.y,t.z],c*3),this.vel.set([e.x,e.y,e.z],c*3),this.age[c]=0,this.life[c]=n,this.s0[c]=i,this.s1[c]=s,this.a0[c]=a,this.drag[c]=o,this.aR[c]=Math.random()}update(t,e,n,i){this.t+=t;let s=this.person.arms?.r,a=e.on&&s&&this.person.root.visible;if(this.cig.visible=!!a,e.errOK=!1,a){if(!this.fg&&this.person.model){let g=["index_02_r","index_03_r","middle_02_r","middle_03_r"].map(v=>this.person.model.getObjectByName(v));this.fg=g.every(Boolean)?g:s.slice(1)}let f=this._c;if(this.fg.length===4){let[g,v,m,p]=this.fg.map((x,b)=>x.getWorldPosition(this._fv[b]));f.copy(g).add(m).multiplyScalar(.5*.65).addScaledVector(v.add(p),.5*.35)}else{let g=s[2].getWorldPosition(this._h),v=s[1].getWorldPosition(this._e);f.copy(g).addScaledVector(this._d.subVectors(g,v).normalize(),.1)}let d=this._dir.copy(e.F).multiplyScalar(.45).addScaledVector(e.R,.85).addScaledVector(ih,-.06).normalize();this.cig.position.copy(f).addScaledVector(d,.0125),this.cig.quaternion.setFromUnitVectors(ih,d),this.tip.copy(f).addScaledVector(d,.055),e.err.copy(e.mouth).addScaledVector(d,.03).sub(f),e.errOK=!0}let o=a&&e.lit;if(this.ember.visible=o,this.tipGlow.visible=o,o){let f=e.drag?1:.45+.08*Math.sin(this.t*7);this.ember.material.color.setRGB(1.6*(.6+f),.35*(.4+f),.08),this.tipGlow.position.copy(this.tip),this.tipGlow.material.opacity=.35+.65*f,this.tipGlow.scale.setScalar(.05+.05*f)}this.flame.visible=a&&e.flame>0,this.flame.visible&&(this.flame.position.copy(this.tip).addScaledVector(ih,-.015),this.flame.material.opacity=.7+.3*Math.sin(this.t*40),this.flame.scale.setScalar(.08+.02*Math.sin(this.t*27)));let c=(n.windDir?.x||0)*(.12+.6*n.wind),l=(n.windDir?.y||0)*(.12+.6*n.wind),h=this._d;if(o)for(this.emitTip+=t*(e.drag?16:12);this.emitTip>=1;)this.emitTip-=1,h.set(c*.3+(Math.random()-.5)*.03,.16+Math.random()*.06,l*.3+(Math.random()-.5)*.03),this._spawn(this.tip,h,2.8+Math.random(),.022,.2,.3,.2);if(e.exhale&&a)for(this.emitMouth+=t*75;this.emitMouth>=1;)this.emitMouth-=1,h.copy(e.F).multiplyScalar(.3).addScaledVector(e.R,-.14).multiplyScalar(.9+Math.random()*.4).addScaledVector(ih,-.06+Math.random()*.07).add(this._r.set((Math.random()-.5)*.08,(Math.random()-.5)*.04,(Math.random()-.5)*.08)),this._spawn(e.mouth,h,2.4+Math.random()*.8,.025,.24,.42,1.3);else this.emitMouth=0;let u=0;for(let f=0;f<Zn;f++){let d=this.age[f];if(d>=this.life[f]){this.aA[f]=0,this.aS[f]=0;continue}u++,this.age[f]=d+t;let g=Math.exp(-this.drag[f]*t),v=f*3;this.vel[v]=this.vel[v]*g+c*(1-g),this.vel[v+1]=this.vel[v+1]*g+.12*(1-g)+.02*t,this.vel[v+2]=this.vel[v+2]*g+l*(1-g),this.pos[v]+=this.vel[v]*t+Math.sin(this.t*1.7+f)*.004,this.pos[v+1]+=this.vel[v+1]*t,this.pos[v+2]+=this.vel[v+2]*t+Math.cos(this.t*1.3+f*1.7)*.004;let m=this.age[f]/this.life[f];this.aS[f]=this.s0[f]+(this.s1[f]-this.s0[f])*Math.sqrt(m),this.aA[f]=this.a0[f]*Math.min(1,m*8)*(1-m)*(1-m)}if(this.points.visible=u>0,u){let f=this.points.geometry;f.attributes.position.needsUpdate=!0,f.attributes.aA.needsUpdate=!0,f.attributes.aS.needsUpdate=!0,f.attributes.aR.needsUpdate=!0,this.mat.uniforms.uScale.value=i;let d=Math.min(1.1,.15+.75*(n.light??1));this.mat.uniforms.uColor.value.setRGB(.85*d,.85*d,.88*d)}}};x0();var Ht=r=>document.getElementById(r),ks=(r,t,e)=>Math.min(e,Math.max(t,r)),dS=(r,t,e)=>{let n=ks((e-r)/(t-r),0,1);return n*n*(3-2*n)},ba=1/3.6,ah=1.5,Uo=[25*ba,50*ba,180*ba],Po=Uo[0],pS=10*ba,mS=60*ba,rh=Uo[2],ds=Ht("c"),je=new Ja({canvas:ds,antialias:!1,powerPreference:"high-performance"}),Ao=1;je.setPixelRatio(Ao);je.shadowMap.enabled=!0;je.shadowMap.type=Yu;je.toneMapping=$u;var Fe=new es,St=new Ne(60,1,.3,4e3);St.layers.enable(3);var xe=new il,li=new ml(Fe,xe,je),gn=new Ml(Fe,xe,je),zt=new Tl(je,Fe,St),Fo=new da(Fe,je),ya=new da(Fe,je,"grass"),_a=new da(Fe,je,"meadow"),xt=new Ll(Fe),Gt=new Il(St);Gt.groundAt=(r,t)=>Math.max(gn.heightAt(r,t),lr.group.visible?lr.level+1.2:-1/0);var Zg=new T,Qg=new T;Gt.eyeAt=r=>!De.ready||Bt.active?!1:(De.head.getWorldPosition(r),Zg.set(0,0,-1).applyQuaternion(xt.root.quaternion),Qg.set(0,1,0).applyQuaternion(xt.root.quaternion),r.addScaledVector(Qg,.15).addScaledVector(Zg,-.04),!0);var or=new Ul,an=new zl(je,ki[gd].msaa),Ma=new Bl(je),De=new xo,Bt=new Wl(xt,De);xt.viewer=St;var pv=new sh(Fe,De),hs=new xl(Fe),Ea=new ql(je),zd=new Xl(je),Ro=new Yl,Bd=new Jl(Fe),oh=new rl(Fe),us=new ol(Fe,xe,li.roadMat);Gt.collide=(r,t,e)=>us.collide(r,t,e);var hh=new Al,$g=new T,oi=new Ql(Fe,xt);oi.stopFor=(r,t,e)=>us.stopAhead(r,t,e);var Lo=new ul(Fe,xe,us),lr=new _l(Fe),Gd=new nh(Fe,xe,gn),uh=new th(Fe);xt.tilt.add(hh.group);xt.tilt.add(Ea.group);function cr(){let r=window.innerWidth,t=window.innerHeight;je.setSize(r,t,!1),St.aspect=r/t,St.updateProjectionMatrix(),an.resize(),Ma.resize(),gS()}var mv=0;function gS(){let r=window.innerWidth,t=window.innerHeight,e=Math.min(t*.135,Math.max(0,(t-r/2.39)/2));mv=e/t,document.documentElement.style.setProperty("--bar",e.toFixed(1)+"px")}window.addEventListener("resize",cr);var ko=matchMedia("(pointer: coarse)").matches&&Math.min(screen.width,screen.height)<600,vS=/iP(hone|od|ad)/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,Io=document.documentElement,Vd=!!(Io.requestFullscreen||Io.webkitRequestFullscreen),wa=()=>!!(document.fullscreenElement||document.webkitFullscreenElement);function gv(){if(!Vd||wa())return;let r=Io.requestFullscreen?Io.requestFullscreen({navigationUI:"hide"}):Io.webkitRequestFullscreen();Promise.resolve(r).then(()=>screen.orientation?.lock?.("landscape")).catch(()=>{})}function xS(){if(wa()){try{screen.orientation?.unlock?.()}catch{}(document.exitFullscreen||document.webkitExitFullscreen).call(document)}}var kd=!1,vv=()=>{wa()?(kd=!0,xS()):(kd=!1,gv())},tv=r=>{!kd&&!wa()&&!ae.full.contains(r.target)&&gv()};ko&&(window.addEventListener("pointerup",tv,!0),window.addEventListener("touchend",tv,!0));var xv=()=>{cr(),setTimeout(cr,120),setTimeout(cr,450),Oo()};["fullscreenchange","webkitfullscreenchange"].forEach(r=>document.addEventListener(r,()=>{xv(),Te()}));window.addEventListener("orientationchange",xv);window.visualViewport?.addEventListener("resize",cr);var bv=!1;function Oo(){let r=ko&&!bv&&window.innerHeight>window.innerWidth;Ht("rotate").hidden=!r}Ht("rotate-ok").addEventListener("click",()=>{bv=!0,Oo()});Ht("rotate").querySelector(".ios").hidden=!(vS&&!Vd&&!navigator.standalone);window.addEventListener("resize",Oo);Oo();cr();var nt={home:ah,goal:0,manual:!1,s:150,d:ah,v:Po,target:Po,fast:!0,gear:2,fx:0,latVel:0,pitch:0,pos:new T,yaw:0},mn=new Set,ci={active:!1,id:-1,x:0,y:0},at={car:0,character:0,map:Ni.findIndex(r=>r.id==="meadow"),cam:Xe.findIndex(r=>r.id==="orbit"),weather:zn.findIndex(r=>r.id==="cloudy"),time:Kn.findIndex(r=>r.id==="night"),music:0,cine:!0,started:!1,mistCover:.9,mistDens:.4,fstop:hg,quality:bS()},va=null,Dd=!1,ev=!0,yv="chilldrive.tuning.v1",Mi=null;try{if(Mi=JSON.parse(localStorage.getItem(yv)),Mi?.camera)for(let[r,t]of Object.entries(Mi.camera))Gt.tune[r]&&Object.assign(Gt.tune[r],t);if(Mi?.weather)for(let[r,t]of Object.entries(Mi.weather))zt.weatherProfiles[r]&&Object.assign(zt.weatherProfiles[r],t);Mi?.environment&&Object.assign(zt.tune,Mi.environment),Mi?.carLights&&Object.assign(xt.headlights.tune,Mi.carLights),Mi?.streetLights&&Object.assign(li.lampTune,Mi.streetLights)}catch{}Gt.setMode(at.cam);at.fstop=Ui.indexOf(Gt.aperture);var ae={full:Ht("b-full"),stop:Ht("b-stop"),character:Ht("b-character"),quality:Ht("b-quality"),lens:Ht("b-lens"),mist:Ht("b-mist"),fast:Ht("b-fast"),car:Ht("b-car"),map:Ht("b-map"),cam:Ht("b-cam"),weather:Ht("b-weather"),time:Ht("b-time"),music:Ht("b-music")},Nn=(r,t,e)=>{r.querySelector("b").textContent=t,r.querySelector("span").textContent=e,r.title=e};function Te(){Nn(ae.car,"🚗",xt.list[at.car]?.name??"…"),Nn(ae.character,"🧑",hr?"Đang tải…":at.character===1?"Chisa":"Người lái"),ae.character.disabled=hr||!De.ready||Bt.active||xt.current?.def?.id!=="mustang",ae.character.title=xt.current?.def?.id==="mustang"?"Đổi nhân vật":"Chisa hiện hỗ trợ Mustang",Nn(ae.map,Ni[at.map].icon,Ni[at.map].name),Nn(ae.cam,"🎥",Xe[at.cam].name),Nn(ae.weather,zn[at.weather].icon,zn[at.weather].name),Nn(ae.time,Kn[at.time].icon,Kn[at.time].name),Nn(ae.music,Sl[at.music].icon,Sl[at.music].name),Nn(ae.fast,"⚡",Math.round(Uo[nt.gear]*3.6)+" km/h"),ae.fast.classList.toggle("on",nt.gear>0),Nn(ae.mist,"🌫️","Sương "+Math.round(at.mistDens*100)+"%"),ae.mist.classList.toggle("on",!Ht("mistpanel").hidden),Nn(ae.lens,"📷",Ev()),Nn(ae.quality,"⚙️",ki[at.quality].name),Nn(ae.stop,Bt.state==="parked"?"▶️":Bt.state==="off"?"🅿️":"⏳",Bt.state==="parked"?"Đi tiếp":Bt.state==="off"?"Dừng xe":"…"),ae.lens.classList.toggle("on",!Ht("lenspanel").hidden),ae.cam.classList.toggle("on",Ie==="camera"),ae.weather.classList.toggle("on",Ie==="weather"),ae.time.classList.toggle("on",Ie==="time"),ae.full.hidden=!(Vd&&ko),Nn(ae.full,wa()?"🗗":"⛶",wa()?"Thoát toàn màn hình":"Toàn màn hình")}function bS(){try{let r=ki.findIndex(t=>t.id===localStorage.getItem("chilldrive.quality"));if(r>=0)return r}catch{}return gd}function _v(){let r=ki[at.quality];Ao=r.id==="low"?r.ratio:Math.min(r.ratio,Math.max(1,window.devicePixelRatio||1)),ko&&r.id==="good"&&(Ao=Math.min(Ao,1.25)),je.setPixelRatio(Ao),an.setSamples(r.msaa),cr();for(let t of[Fo,ya,_a])t.setView(r.view),t.setDensity(r.veg);gn.setView(r.view,St.position),zt.setShadowSize(r.shadow),Ma.enabled=r.refl,hs.setRadius(r.trees);try{localStorage.setItem("chilldrive.quality",r.id)}catch{}}var Mv=()=>{at.quality=(at.quality+1)%ki.length,_v(),Te()};function Ev(){return Math.round(Gt.focal)+"mm f/"+Gt.aperture}var hr=!1,Fd=0;async function Wd(r){if(Bt.active)return;r=xt.current?.def?.id==="mustang"?r%2:0;let t=++Fd;hr=!0,Te();let e;try{if(e=await new xo().load(r?"assets/models/chisa_wuthering_waves.glb":"assets/models/person.glb",{chisa:r===1}),t!==Fd||r&&xt.current?.def?.id!=="mustang"){e.dispose();return}De.replace(e),at.character=r,Bt.place(xt.dim),Bt.sit(),Ta(an.sceneRT,St,De.root).catch(()=>{})}catch(n){e?.dispose(),console.warn("Không tải được nhân vật",n)}finally{t===Fd&&(hr=!1,Te())}}var wv=()=>{if(!hr&&De.ready&&xt.current?.def?.id==="mustang")return Wd(at.character+1)};async function fh(r){if(!Bt.active){at.car=(r+xt.list.length)%xt.list.length,Nn(ae.car,"🚗","Đang tải…");try{if(!await xt.select(at.car))return}catch(t){if(console.error("Không tải được xe",xt.list[at.car].name,t),xt.list.length>1)return xt.list.splice(at.car,1),fh(at.car)}xt.current?.def?.id!=="mustang"&&(at.character||hr)&&await Wd(0),De.ready&&!Bt.active&&(Bt.place(xt.dim),Bt.sit()),Ea.place(xt.dim,xt.current.screen),hh.place(xt.current.screen),zd.setCar(xt.current),Tv(),Te()}}var qd=()=>fh(at.car+1);function Xd(){!De.ready||!at.started||hr||(Bt.state==="off"&&(Yd(0),Bt.place(xt.dim)),Bt.toggle(nt.v)&&Te())}var nv=0;function Ta(r,t,e=Fe){let n=[];e.traverse(a=>{a.material&&!a.layers.test(t.layers)&&(n.push(a,a.material),a.material=null)});let i=je.getRenderTarget();je.setRenderTarget(r);let s=je.compileAsync(e,t,Fe);je.setRenderTarget(i);for(let a=0;a<n.length;a+=2)n[a].material=n[a+1];return s}zt.onCarEnv=r=>xt.setEnvMap(r);zt.carEnvRT&&xt.setEnvMap(zt.carEnvRT.texture);xt.prepare=r=>Ta(an.sceneRT,St,r);uh.onBuild=r=>{Ta(an.sceneRT,St,r).catch(()=>{})};function Tv(r=500){clearTimeout(nv),nv=setTimeout(()=>{Ta(an.sceneRT,St).catch(t=>console.warn("warmup",t))},r)}var Sv=()=>{let r=Ni[at.map].id;p0(r);let t=r==="city";if(Me.halfWidth=t?Je.hw:g0,xe.setShape(t),xe.dirt=r==="forest",xe.recomputeHeights(),r==="sea"){xe.ensure(nt.s+12e4);let e=1/0;for(let n of xe.pts)e=Math.min(e,n.y);_e.seaLevel=e-3}lr.setMap(r==="sea",_e.seaLevel),li.setMap(r),gn.reset(),gn.setCar(nt.s),gn.prime(St.position.lengthSq()?St.position:nt.pos),Fo.visible=r==="reed",ya.visible=r==="forest",_a.visible=r==="meadow",uh.visible=r==="meadow",oh.reset(),oh.visible=r==="mountain",us.visible=t,us.prime(nt.s),Bd.ground.clear(),oi.policy.city=t,Lo.visible=t,t&&oi.clearAll(),Ht("brake").hidden=!t,t&&at.started&&Dv("Map Phố: tự phanh khi gặp đèn đỏ — giữ phím Space hoặc nút PHANH"),Co=null,Gt.sideDist=t?13:null,Gt.orbitR=t?10:null,nt.home=t?Je.lanes[1]:ah,Gd.setMap(r),Gt.sidePref=r==="mountain"?1:0,hs.setRadius(ki[at.quality].trees),Gt.sideSign=0,Tv()},jd=()=>{at.map=(at.map+1)%Ni.length,Sv(),Te()};function dh(){at.fstop=Math.max(0,Ui.indexOf(Gt.aperture)),Os()}var Ie=null,ur=()=>{},Av=()=>{at.cam=(at.cam+1)%Xe.length,Gt.setMode(at.cam),dh(),Te(),Ie==="camera"&&ur()},Rv=()=>{at.weather=(at.weather+1)%zn.length,zt.setWeather(zn[at.weather].id),Te(),Ie==="weather"&&ur()},Cv=()=>{at.time=(at.time+1)%Kn.length,zt.setTime(Kn[at.time].hour),Kn[at.time].id==="night"&&yS(.6,.6),Te(),Ie==="time"&&ur()};function yS(r,t){at.mistCover=r,at.mistDens=t;for(let[e,n]of[["mist-cover","mistCover"],["mist-dens","mistDens"]])Ht(e).value=Math.round(at[n]*100),Ht(e+"-v").textContent=Ht(e).value}var _S=()=>document.body.classList.toggle("cine",at.cine&&at.started);function Yd(r){let t=nt.fast;nt.gear=r,nt.fast=r===2,nt.target=Uo[Math.min(r,1)],nt.fast!==t&&Os()}var Kd=()=>{Bt.active||(Yd((nt.gear+1)%Uo.length),Te())},Pv=()=>{at.music=(at.music+1)%Sl.length,or.setMode(at.music),Te()};ae.fast.onclick=Kd;var Jd=()=>{Ie=null,Ht("tunepanel").hidden=!0,Te()},Lv=()=>{Jd(),Ht("mistpanel").hidden=!Ht("mistpanel").hidden,Ht("lenspanel").hidden=!0,Te()};ae.mist.onclick=Lv;var Iv=()=>{Jd(),Ht("lenspanel").hidden=!Ht("lenspanel").hidden,Ht("mistpanel").hidden=!0,Te()};ae.lens.onclick=Iv;ae.quality.onclick=Mv;ae.stop.onclick=Xd;ae.character.onclick=wv;ae.full.onclick=vv;var ph=!1,Od=!1,Co=null,iv=0,sv=0;{let r=Ht("brake"),t=n=>{Od=!0,r.classList.add("on"),n.preventDefault()},e=()=>{Od=!1,r.classList.remove("on")};r.addEventListener("pointerdown",t);for(let n of["pointerup","pointerleave","pointercancel"])r.addEventListener(n,e)}function Dv(r,t=!1){let e=Ht("toast");e.textContent=r,e.classList.toggle("bad",t),e.classList.add("show"),clearTimeout(sv),sv=setTimeout(()=>e.classList.remove("show"),t?2800:4500)}Ht("b-shot").onclick=()=>{ph=!0};function MS(){ph=!1,ds.toBlob(async r=>{if(!r)return;let t="chill-drive-"+new Date().toISOString().slice(0,19).replace(/[T:]/g,"-")+".png",e=new File([r],t,{type:"image/png"});if(ko&&navigator.canShare?.({files:[e]}))try{await navigator.share({files:[e]});return}catch{}let n=document.createElement("a");n.href=URL.createObjectURL(r),n.download=t,document.body.append(n),n.click(),n.remove(),setTimeout(()=>URL.revokeObjectURL(n.href),4e3)},"image/png")}var Sa=Ht("lens-focal"),Ho=Ht("lens-fstop");Sa.min=Dl;Sa.max=Fl;Ho.max=Ui.length-1;var Os=()=>{Sa.value=Math.round(Gt.focal),Ht("lens-focal-v").textContent=Math.round(Gt.focal)+"mm",at.fstop=Math.max(0,Ui.indexOf(Gt.aperture)),Ho.value=at.fstop,Ht("lens-fstop-v").textContent="f/"+Gt.aperture};Sa.addEventListener("input",()=>{let r=Gt.tune[Xe[at.cam].id];r.focal=Gt.focal=Number(Sa.value),Os(),Te()});Ho.addEventListener("input",()=>{let r=Gt.tune[Xe[at.cam].id];at.fstop=Number(Ho.value),r.aperture=Gt.aperture=Ui[at.fstop],Os(),Te()});for(let r of[Sa,Ho])r.addEventListener("change",()=>r.blur());Os();for(let[r,t]of[["mist-cover","mistCover"],["mist-dens","mistDens"]]){let e=Ht(r);e.value=Math.round(at[t]*100),Ht(r+"-v").textContent=e.value,e.addEventListener("input",()=>{at[t]=e.value/100,Ht(r+"-v").textContent=e.value,Te()}),e.addEventListener("change",()=>e.blur())}var ES={chase:[["distance","Khoảng lùi (m)",1,20,.1],["height","Độ cao (m)",.2,8,.05],["carHeight","Theo chiều cao xe",0,1,.01],["lookAhead","Nhìn trước (m)",0,40,.5],["lookHeight","Cao điểm nhìn (m)",0,5,.05],["slopeLook","Bám dốc",0,25,.5],["speedBack","Lùi theo tốc độ",0,6,.1],["cineBack","Lùi cinematic",0,6,.1],["follow","Mượt vị trí",.2,20,.1],["lookFollow","Mượt điểm nhìn",.2,20,.1],["near","Cắt gần (m)",.02,2,.01]],low:[["distance","Khoảng lùi (m)",1,20,.1],["height","Độ cao (m)",.2,5,.05],["lookAhead","Nhìn trước (m)",0,40,.5],["lookHeight","Cao điểm nhìn (m)",0,5,.05],["slopeLook","Bám dốc",0,25,.5],["follow","Mượt vị trí",.2,20,.1],["lookFollow","Mượt điểm nhìn",.2,20,.1],["near","Cắt gần (m)",.02,2,.01]],side:[["distance","Khoảng ngang (m)",1,25,.1],["height","Độ cao (m)",.2,8,.05],["lookHeight","Tỉ lệ cao xe",0,1,.01],["follow","Mượt vị trí",.2,20,.1],["lookFollow","Mượt điểm nhìn",.2,20,.1],["near","Cắt gần (m)",.02,2,.01]],cockpit:[["eyeSide","Dịch ngang (m)",-.5,.5,.005],["eyeHeight","Dịch cao (m)",-.5,.5,.005],["eyeForward","Dịch trước (m)",-.5,.5,.005],["pitch","Góc chúc (rad)",-.2,.8,.005],["lookDistance","Tầm nhìn (m)",5,80,1],["follow","Mượt vị trí",.2,20,.1],["lookFollow","Mượt điểm nhìn",.2,20,.1],["near","Cắt gần (m)",.01,.5,.005]],orbit:[["radius","Bán kính (m)",1,30,.1],["height","Độ cao (m)",.2,12,.05],["heightWave","Nhấp nhô (m)",0,4,.05],["waveRate","Nhịp nhấp nhô",0,3,.05],["speed","Tốc độ quay",-.8,.8,.01],["lookHeight","Cao điểm nhìn (m)",0,5,.05],["follow","Mượt vị trí",.2,20,.1],["lookFollow","Mượt điểm nhìn",.2,20,.1],["near","Cắt gần (m)",.02,2,.01]],drone:[["distance","Khoảng lùi (m)",1,50,.5],["height","Độ cao (m)",2,50,.5],["lookAhead","Nhìn trước (m)",-10,40,.5],["lookHeight","Cao điểm nhìn (m)",0,8,.05],["follow","Mượt vị trí",.2,20,.1],["lookFollow","Mượt điểm nhìn",.2,20,.1],["near","Cắt gần (m)",.02,2,.01]]},wS=[["fog","Mật độ sương",0,.012,1e-4],["overcast","Độ âm u",0,1,.01],["clouds","Mây che phủ",0,1,.01],["sun","Cường độ nắng",0,2,.01],["rain","Lượng mưa",0,1,.01],["snow","Lượng tuyết",0,1,.01],["wet","Độ ướt đường",0,1,.01],["cover","Tuyết phủ đất",0,1,.01],["wind","Sức gió",0,1,.01],["dark","Độ tối",0,1,.01]],TS=[["exposure","Phơi sáng",.2,2.5,.01],["skyBrightness","Độ sáng trời",0,3,.01],["directLight","Ánh sáng chính",0,3,.01],["ambientLight","Ánh sáng phủ",0,3,.01],["sunGlow","Quầng mặt trời",0,3,.01],["sunDisc","Đĩa mặt trời",0,3,.01],["cloudBrightness","Độ sáng mây",0,3,.01],["rays","Tia sáng",0,3,.01]],SS=Ht("tunepanel"),xa=Ht("tune-mode"),zo=Ht("tune-fields"),mh=()=>{try{localStorage.setItem(yv,JSON.stringify({camera:Gt.tune,weather:zt.weatherProfiles,environment:zt.tune,carLights:xt.headlights.tune,streetLights:li.lampTune}))}catch{}},ar=r=>{let t=document.createElement("h4");t.textContent=r,zo.append(t)},Gi=({label:r,min:t,max:e,step:n,get:i,set:s})=>{let a=document.createElement("label"),o=document.createElement("span"),c=document.createElement("input"),l=document.createElement("input");o.textContent=r,c.type="range",l.type="number";for(let u of[c,l])u.min=t,u.max=e,u.step=n,u.value=i();let h=u=>{u=ks(Number(u),Number(t),Number(e)),s(u),c.value=l.value=u,mh()};c.oninput=()=>h(c.value),l.onchange=()=>{h(l.value),l.blur()},a.append(o,c,l),zo.append(a)},Hd=({label:r,get:t,set:e})=>{let n=document.createElement("label"),i=document.createElement("span"),s=document.createElement("input");i.textContent=r,s.type="color",s.value=t(),s.oninput=()=>{e(s.value),mh()},n.append(i,s),zo.append(n)},AS=({label:r,options:t,get:e,set:n})=>{let i=document.createElement("label"),s=document.createElement("span"),a=document.createElement("select");s.textContent=r,t.forEach((o,c)=>{let l=document.createElement("option");l.value=c,l.textContent=o,l.selected=c===e(),a.append(l)}),a.onchange=()=>{n(Number(a.value)),mh()},i.append(s,a),zo.append(i)},RS=()=>{let r=Xe[at.cam].id,t=Gt.tune[r];return ES[r].map(([e,n,i,s,a])=>({label:n,min:i,max:s,step:a,get:()=>t[e],set:o=>{t[e]=o,e==="near"&&(St.near=o,St.updateProjectionMatrix())}}))},rv=()=>TS.map(([r,t,e,n,i])=>({label:t,min:e,max:n,step:i,get:()=>zt.tune[r],set:s=>{zt.tune[r]=s,zt.envKey=""}}));ur=()=>{if(!Ie)return;if(zo.replaceChildren(),xa.replaceChildren(),Ie==="carLight"||Ie==="streetLight"){xa.hidden=!0;let e=Ie==="carLight",n=e?xt.headlights.tune:li.lampTune;Ht("tune-title").textContent=e?"Đèn xe người chơi":"Đèn đường",ar(e?"Chùm sáng và quầng đèn":"Ánh sáng phủ mặt đường"),(e?[["intensity","Cường độ",0,300,1],["distance","Tầm chiếu (m)",10,250,1],["angle","Góc mở (rad)",.1,1.55,.01],["penumbra","Độ mềm viền",0,1,.01],["decay","Suy giảm",0,2,.01],["glowOpacity","Độ sáng quầng",0,2,.01],["glowSize","Kích thước quầng",.2,8,.05]]:[["intensity","Cường độ",0,500,1],["distance","Tầm phủ (m)",10,250,1],["angle","Góc mở (rad)",.1,1.55,.01],["penumbra","Độ mềm viền",0,1,.01],["decay","Suy giảm",0,2,.01],["glowOpacity","Độ sáng quầng",0,2,.01],["glowSize","Kích thước quầng",1,24,.1]]).map(([s,a,o,c,l])=>({label:a,min:o,max:c,step:l,get:()=>n[s],set:h=>{n[s]=h}})).forEach(Gi),Hd({label:"Màu ánh sáng",get:()=>n.color,set:s=>{n.color=s}}),e&&Hd({label:"Màu quầng",get:()=>n.glowColor,set:s=>{n.glowColor=s}});return}xa.hidden=!1;let r=Ie==="camera"?Xe:Ie==="weather"?zn:Kn,t=at[Ie==="camera"?"cam":Ie];if(r.forEach((e,n)=>{let i=document.createElement("option");i.value=n,i.textContent=e.name,i.selected=n===t,xa.append(i)}),Ht("tune-title").textContent=Ie==="camera"?"Camera · "+Xe[at.cam].name:Ie==="weather"?"Thời tiết · "+zn[at.weather].name:"Thời gian · "+Kn[at.time].name,Ie==="camera"){let e=Gt.tune[Xe[at.cam].id];ar("Vị trí và chuyển động"),RS().forEach(Gi),ar("Ống kính"),Gi({label:"Tiêu cự (mm)",min:Dl,max:Fl,step:1,get:()=>e.focal,set:n=>{e.focal=Gt.focal=n,Os(),Te()}}),AS({label:"Khẩu độ",options:Ui.map(n=>"f/"+n),get:()=>Math.max(0,Ui.indexOf(e.aperture)),set:n=>{e.aperture=Gt.aperture=Ui[n],at.fstop=n,Os(),Te()}})}else if(Ie==="weather"){let e=zn[at.weather].id,n=zt.weatherProfiles[e];ar("Preset "+zn[at.weather].name),wS.map(([i,s,a,o,c])=>({label:s,min:a,max:o,step:c,get:()=>n[i],set:l=>{n[i]=l,zt.w[i]=l}})).forEach(Gi),Hd({label:"Màu khí quyển",get:()=>n.tint,set:i=>{n.tint=i,zt.tint.set(i),zt.envKey=""}}),ar("Ánh sáng chung"),rv().forEach(Gi)}else ar("Chu kỳ ngày đêm"),Gi({label:"Giờ hiện tại",min:0,max:23.99,step:.05,get:()=>zt.hour,set:e=>{zt.hour=e,zt.tween=null,zt.envKey=""}}),Gi({label:"Tốc độ tự chạy",min:0,max:1,step:.005,get:()=>zt.tune.autoSpeed,set:e=>{zt.tune.autoSpeed=e}}),Gi({label:"Hướng mặt trời",min:-3.142,max:3.142,step:.01,get:()=>zt.tune.sunAzimuth,set:e=>{zt.tune.sunAzimuth=e,zt.envKey=""}}),Gi({label:"Hướng mặt trăng",min:-3.142,max:3.142,step:.01,get:()=>zt.tune.moonAzimuth,set:e=>{zt.tune.moonAzimuth=e,zt.envKey=""}}),ar("Ánh sáng chung"),rv().forEach(Gi)};var No=r=>{Ie=r,Ht("mistpanel").hidden=Ht("lenspanel").hidden=!0,SS.hidden=!1,ur(),Te()};xa.onchange=()=>{let r=Number(xa.value);Ie==="camera"?(at.cam=r,Gt.setMode(r),dh()):Ie==="weather"?(at.weather=r,zt.setWeather(zn[r].id)):(at.time=r,zt.setTime(Kn[r].hour)),Te(),ur()};Ht("tune-close").onclick=Jd;Ht("tune-reset").onclick=()=>{Ie==="camera"?(Gt.resetTune(Xe[at.cam].id),dh()):Ie==="weather"?(zt.resetWeather(zn[at.weather].id),zt.resetTune(),zt.snapWeather(zn[at.weather].id)):Ie==="time"?(zt.resetTune(),zt.setTime(Kn[at.time].hour)):Ie==="carLight"?Object.assign(xt.headlights.tune,Cl):Object.assign(li.lampTune,Cf),mh(),Te(),ur()};ae.car.onclick=qd;ae.map.onclick=jd;ae.cam.onclick=()=>No("camera");ae.weather.onclick=()=>No("weather");ae.time.onclick=()=>No("time");ae.music.onclick=Pv;Ht("b-info").onclick=()=>{let r=Ht("credits");r.hidden=!r.hidden};window.addEventListener("keydown",r=>{if(r.repeat){mn.add(r.code);return}switch(mn.add(r.code),r.code){case"KeyC":Av();break;case"KeyH":document.body.classList.toggle("hidehud");break;case"KeyM":Pv();break;case"KeyT":Cv();break;case"KeyR":Rv();break;case"KeyV":qd();break;case"KeyN":jd();break;case"KeyF":Kd();break;case"KeyG":Lv();break;case"KeyL":Iv();break;case"KeyQ":Mv();break;case"KeyP":Xd();break;case"KeyU":vv();break;case"KeyK":ph=!0;break}(r.code.startsWith("Arrow")||r.code==="Space")&&r.preventDefault()});window.addEventListener("keyup",r=>mn.delete(r.code));window.addEventListener("blur",()=>mn.clear());var fs=new Map,ch=new Map;function lh(r){Bt.active&&Bt.zoomBy(r)||Gt.zoomBy(r)}var Do=0,Fv=()=>{let[r,t]=[...fs.values()];return Math.hypot(r.x-t.x,r.y-t.y)};ds.addEventListener("pointerdown",r=>{fs.set(r.pointerId,{x:r.clientX,y:r.clientY}),ch.set(r.pointerId,{x:r.clientX,y:r.clientY,moved:!1}),ds.setPointerCapture(r.pointerId),fs.size===1?(ci.active=!0,ci.id=r.pointerId,ci.x=r.clientX,ci.y=r.clientY,Gt.look.hold=!0):fs.size===2&&(ci.active=!1,Do=Fv())});ds.addEventListener("pointermove",r=>{let t=fs.get(r.pointerId);if(!t)return;t.x=r.clientX,t.y=r.clientY;let e=ch.get(r.pointerId);if(e&&Math.hypot(r.clientX-e.x,r.clientY-e.y)>8&&(e.moved=!0),fs.size===2){let n=Fv();Do>0&&n>0&&lh(Do/n),Do=n}else if(ci.active&&r.pointerId===ci.id){let n=r.clientX-ci.x,i=r.clientY-ci.y;Gt.lookBy(n*4.7/window.innerWidth,i*2.2/window.innerHeight),Bt.active&&Math.abs(n)+Math.abs(i)>0&&Bt.noteCameraInput(),ci.x=r.clientX,ci.y=r.clientY}});var Hv=r=>{let t=ch.get(r.pointerId);if(t&&!t.moved&&r.type==="pointerup"){xt.root.updateWorldMatrix(!0,!0);let e=ds.getBoundingClientRect(),n=new T;xt.headGlow.some(s=>{if(!s.visible)return!1;s.getWorldPosition(n).project(St);let a=e.left+(n.x+1)*e.width*.5,o=e.top+(1-n.y)*e.height*.5;return n.z>=-1&&n.z<=1&&Math.hypot(r.clientX-a,r.clientY-o)<=56})?No("carLight"):Bt.active&&li.hitLamp(St,r.clientX,r.clientY,e)&&No("streetLight")}ch.delete(r.pointerId),fs.delete(r.pointerId),fs.size<2&&(Do=0),fs.size===0&&(ci.active=!1,Gt.look.hold=!1)};ds.addEventListener("pointerup",Hv);ds.addEventListener("pointercancel",Hv);ds.addEventListener("wheel",r=>{r.preventDefault();let t=r.deltaY*(r.deltaMode===1?33:r.deltaMode===2?400:1);lh(Math.exp(ks(t,-200,200)*.0012))},{passive:!1});var av=0,Nv=()=>{document.body.classList.remove("idle"),clearTimeout(av),av=setTimeout(()=>document.body.classList.add("idle"),4500)};["pointermove","pointerdown","keydown","touchstart"].forEach(r=>window.addEventListener(r,Nv,{passive:!0}));Nv();var dR=new T,ov=performance.now(),Nd=0,Us=0,Ei={},CS=3.5,Bn={amt:0,range:0,samples:0,near:.1,far:1e3,focus:10,cocK:0,maxCoc:24},wo=new T;function PS(r){let t=Xe[at.cam].id==="cockpit";wo.copy(nt.pos).y+=.6,Bt.active&&wo.copy(Bt.cam.focus);let e=t&&!Bt.active?.8:Math.max(.5,St.position.distanceTo(wo));Bn.focus+=(e-Bn.focus)*(Bn.amt>.01?1-Math.exp(-r*6):1);let n=Gt.focalEff,i=Gt.apertureS,s=Bn.focus*1e3;if(Bn.cocK=n*n/(i*Math.max(s-n,1))*(an.longSide/36)*CS,Bn.maxCoc=Math.max(6,an.longSide*.0125),Bt.active)Bn.range=Bt.cam.range;else if(t)Bn.range=0;else{let a=St.position.x-wo.x,o=St.position.z-wo.z,c=Math.hypot(a,o)||1,l=Math.sin(nt.yaw),h=Math.cos(nt.yaw);Bn.range=Math.abs((-l*a-h*o)/c)*xt.dim.length*.5+Math.abs((h*a-l*o)/c)*xt.dim.width*.5+.3}return Bn.near=St.near,Bn.far=St.far,Bn.amt=Us,Bn.samples=ki[at.quality].dof,Bn}var LS=new T;function IS(r,t){let e=Gt.look,n=LS.copy(r).sub(t);if(Math.abs(e.yaw)>1e-4||Math.abs(e.pitch)>1e-4){let s=Math.cos(e.yaw),a=Math.sin(e.yaw);n.set(n.x*s+n.z*a,n.y,-n.x*a+n.z*s);let o=Math.hypot(n.x,n.z),c=n.length(),l=ks(Math.atan2(n.y,o)+e.pitch,.03,1.35),h=c*Math.cos(l)/Math.max(o,.001);n.set(n.x*h,c*Math.sin(l),n.z*h)}St.position.copy(t).add(n);let i=Math.max(gn.heightAt(St.position.x,St.position.z)+.25,lr.group.visible?lr.level+1.2:-1/0);St.position.y<i&&(St.position.y=i)}var ga=new T;function DS(){let r=xt.current?.steer;if(!r||!Gt.eyeAt||!Gt.eyeAt(ga))return .2;xt.tilt.worldToLocal(ga);let[,t,e]=r.n,n=1-t*t,i=-t*e,s=Math.hypot(n,i)||1,a=r.r*.65,o=r.c[1]-n/s*a,c=r.c[2]-i/s*a,l=Math.atan2(ga.y-o,ga.z-c),h=Math.atan(Math.tan(Ue.degToRad(St.fov)/2)*(1-2*mv*Us)),u=Ea.group.position,f=Math.atan2(u.y+Ea.size[1]/2+.012-ga.y,ga.z-u.z),d=l-h+.01,g=h-f-.015;return ks(d<=g?d:g,-.1,.6)}var Ud=new T,ls=new T,Ns=new T,To=new T,cv=new T,lv=new T,hv=.08,uv=new T,fv=new T,dv=new T;function FS(r){if(!r)return;De.recline(r.recline||0);let t=xt.tilt.matrixWorld,[e,n,i]=r.foot,s=r.hip[0];for(let[a,o]of[["l",e],["r",2*s-e]])uv.set(o,n,i).applyMatrix4(t),fv.set(0,1,-.6).transformDirection(t),dv.set(0,.45,-1).transformDirection(t),De.reachLeg(a,uv,fv,dv)}function HS(r){xt.root.updateMatrixWorld();let t=xt.tilt.matrixWorld;Ud.fromArray(r.c).applyMatrix4(t),ls.fromArray(r.n).transformDirection(t),Ns.set(1,0,0).transformDirection(t),Ns.addScaledVector(ls,-Ns.dot(ls)).normalize(),To.crossVectors(ls,Ns);for(let[e,n]of[["r",-hv],["l",Math.PI+hv]]){let i=n+(xt.steerAngle||0),s=Math.cos(i),a=Math.sin(i),o=r.r+(r.grip?.radial??.02),c=r.grip?.depth??.065;cv.copy(Ud).addScaledVector(Ns,s*o).addScaledVector(To,a*o).addScaledVector(ls,c);let l=lv.copy(Ns).multiplyScalar(e==="r"?.25:-.25).addScaledVector(To,-1).addScaledVector(ls,.2);De.reach(e,cv,l);let h=r.grip?.align?lv.copy(To).multiplyScalar(s).addScaledVector(Ns,-a).multiplyScalar(e==="r"?1:-1):null;De.faceGrip(e,ls,h);let u=e==="r"?1:-1,f=r.r-.01;De.looseGrip(e,.15,(d,g)=>{let v=i+u*d/f;return g.copy(Ud).addScaledVector(Ns,Math.cos(v)*f).addScaledVector(To,Math.sin(v)*f).addScaledVector(ls,.016)},ls)}}var So=new T,NS=new T;function US(){let r=zt.state,t=an.rays;t.near=St.near,t.far=St.far;let e=r.rays*Ue.smoothstep(St.getWorldDirection(NS).dot(r.rayDir),.05,.5);e>.002&&(So.copy(r.rayDir).multiplyScalar(1e3).add(St.position).project(St),e*=1-Ue.smoothstep(Math.max(Math.abs(So.x),Math.abs(So.y)),1,1.9),t.uv.set(So.x*.5+.5,So.y*.5+.5)),t.color.copy(r.rayCol).multiplyScalar(Math.max(e,0)*1.2)}function Uv(r){let t=ks((r-ov)/1e3,0,.05);ov=r,va!==null&&(va+=t,va>=(ev?.5:3)&&(va=null,Yd(0),Dd=!0,ev&&(nt.v=Po)));let e=!at.started||va!==null,n=mn.has("ArrowLeft")||mn.has("KeyA"),s=(mn.has("ArrowRight")||mn.has("KeyD")?1:0)-(n?1:0);(mn.has("ArrowUp")||mn.has("KeyW"))&&(nt.target+=2.5*t),(mn.has("ArrowDown")||mn.has("KeyS"))&&(nt.target-=2.5*t),(mn.has("Equal")||mn.has("NumpadAdd"))&&lh(Math.exp(-1.2*t)),(mn.has("Minus")||mn.has("NumpadSubtract"))&&lh(Math.exp(1.2*t)),nt.target=ks(nt.target,pS,mS),nt.goal=nt.fast?rh:nt.target;let a=e?rh:Math.min(nt.goal,oi.ctrl.maxV);if(e?nt.v=rh:Bt.active?nt.v=Bt.speed(nt.v,t):mn.has("Space")||mn.has("KeyB")||Od?nt.v=Math.max(0,nt.v-7.5*t):nt.v+=ks(a-nt.v,-8*t,6*t),Dd&&nt.v<=Po+.01&&(Dd=!1,nt.v=Po,at.cam=Xe.findIndex(E=>E.id==="side"),Gt.setMode(at.cam),dh(),Te()),nt.s+=nt.v*t,nt.fx+=(dS(55*ba,rh,nt.v)-nt.fx)*(1-Math.exp(-t*4)),s!==0)nt.manual=!0;else if(nt.manual){nt.manual=!1;let E=Ni[at.map].id==="city"?Je.lanes:[ah];nt.home=Math.sign(nt.d||1)*E.reduce((M,y)=>Math.abs(Math.abs(nt.d)-y)<Math.abs(Math.abs(nt.d)-M)?y:M,E[0])}let o=oi.ctrl.lane??nt.home,c=Bt.active?0:s!==0?s*(2.2+nt.v*.06):(o-nt.d)*.8*Math.min(1,nt.v/3);nt.latVel+=(c-nt.latVel)*(1-Math.exp(-t*5)),nt.d+=nt.latVel*t;let l=Me.halfWidth-.9;Math.abs(nt.d)>l&&(nt.d=Math.sign(nt.d)*l,nt.latVel=0),xe.ensure(nt.s+8e3),xe.at(nt.s,Ei),nt.pos.set(Ei.x+Math.cos(Ei.th)*nt.d,Ei.y,Ei.z-Math.sin(Ei.th)*nt.d);let h=xe.at(nt.s-2.5,{}).y,u=xe.at(nt.s+2.5,{}).y;if(nt.pitch+=(Math.atan2(u-h,5)-nt.pitch)*(1-Math.exp(-t*6)),nt.yaw=Ei.th-Math.atan2(nt.latVel,Math.max(nt.v,4))*.9,Us+=((at.cine&&at.started?1:0)-Us)*(1-Math.exp(-t*2.5)),Gt.cine=Us,xt.update(t,{pos:nt.pos,yaw:nt.yaw,pitch:nt.pitch,speed:nt.v,latVel:nt.latVel,curvature:xe.curvature(nt.s+Math.min(12,nt.v*.4)),rough:xe.dirtAt(nt.s)}),De.ready){De.root.visible=!0;let E=Xe[at.cam].id==="cockpit"&&!Bt.active;De.head.scale.setScalar(E?.001:1),xt.cabinLevel=E?(.35+.45*zt.state.dayF)*(1+zt.state.dark):0,De.update(t);let M=xt.current?.steer,y=Bt.state==="off"||Bt.state==="stopping";De.footShade.value=y?1:0,y&&(FS(xt.dim.seat),M&&HS(M))}if(Bt.active){let E=Bt.state;Bt.update(t,xt.root,nt.v);let M=Bt.cam;IS(M.pos,M.look),St.lookAt(M.look);let y=Gt.fovFor(M.focal),w=Bt.closeK>.01?.06:.3;(Math.abs(St.fov-y)>.01||St.near!==w)&&(St.fov=y,St.near=w,St.updateProjectionMatrix()),Bt.state==="off"&&(Gt.setMode(at.cam),Gt.relP.copy(St.position).sub(nt.pos),Gt.relL.copy(M.look).sub(nt.pos),Gt.fov=St.fov,Gt.look.yaw=Gt.look.pitch=0),Bt.state!==E&&Te()}else Gt.cockpitPitch=DS(),Gt.update(t,{pos:nt.pos,yaw:nt.yaw,pitch:nt.pitch,speed:nt.v,dim:xt.dim,fx:nt.fx,side:nt.d>=0?-1:1});zt.precip.setCar(xt.tilt,xt.dim),zt.update(t,nt.pos);let f=zt.state;li.update(nt.s),li.apply(f),li.updateLights(St.position),lr.update(r/1e3,St.position,xe,nt.s),Gd.update(r/1e3,nt.s,f.light,{d:nt.d,v:nt.v,dim:xt.dim,npcs:oi.active,cam:St,audio:or}),Fo.visible&&Fo.update(r/1e3,St.position,xe,nt.s,f),ya.group.visible=Ni[at.map].id==="forest"&&f.cover<.5,ya.visible&&ya.update(r/1e3,St.position,xe,nt.s,f),_a.group.visible=Ni[at.map].id==="meadow"&&f.cover<.5,_a.visible&&_a.update(r/1e3,St.position,xe,nt.s,f),uh.update(t,nt.s,xe,gn),gn.setCar(nt.s),gn.update(St.position),hs.update(St.position,gn),gn.apply(f);let d=Ue.smoothstep,g=(Ni[at.map].id==="city"?0:1)*d(f.night,.35,.9)*(1-Math.min(1,f.rain*2))*(1-f.snow)*(1-f.cover)*(1-d(f.wind,.6,.9));if(Bd.update(r/1e3,nt.s,xe,gn,g,an.size.y/(2*Math.tan(Ue.degToRad(St.fov)/2)),Fe.fog.density),hh.update(t,nt.v*3.6,zt.clock),pv.update(t,Bt.smoking,f,an.size.y/(2*Math.tan(Ue.degToRad(St.fov)/2))),at.started&&xt.current){let E=[{id:"player",s:nt.s,d:nt.d,speed:nt.v,direction:1,width:xt.dim.width,length:xt.dim.length}];De.ready&&["exit","parked","enter"].includes(Bt.state)&&(De.root.getWorldPosition($g),E.push({id:"person",...Hg($g,xe,nt.s),width:.8,length:.8,speed:0,direction:0})),oi.playerHome=nt.home,oi.playerGoal=Bt.active?0:nt.goal,Lo.visible?(Lo.update(t,nt.s,nt.d,nt.v,f.lamps,xt.dim.length),oi.ctrl.lane=null,oi.ctrl.maxV=Bt.active?1/0:Lo.ctrl.maxV):oi.update(t,nt.s,nt.d,xe,f.lamps,xt.current.def.id,E,or)}if(us.update(nt.s,f.lamps,t),us.visible&&at.started&&!Bt.active&&xt.dim){let E=nt.s+xt.dim.length/2;if(Co!==null&&E>Co&&nt.d>0){let M=xe.junctionIndex(Co+ao.stopA);xe.junction(M)-ao.stopA<=E&&us.mainLight(M)===2&&(iv++,Dv(`🚨 Vượt đèn đỏ! (lỗi thứ ${iv})`,!0))}Co=E}oh.update(nt.s,xe,gn,f.lamps,an.size.y/(2*Math.tan(Ue.degToRad(St.fov)/2)),Fe.fog.density),xt.setLights(f.lamps),or.setAmbient({speed:nt.v,rain:f.rain,snow:f.snow,wind:f.wind,dark:f.dark,fx:nt.fx,inCar:Xe[at.cam].id==="cockpit"&&!Bt.active});let v=1-f.dark;xt.calm=f.dark;let m=.016*nt.fx*nt.fx*v;if(m>0){let E=r/1e3;St.position.x+=(Math.sin(E*11.3)+Math.sin(E*17.9)*.6)*m,St.position.y+=(Math.sin(E*13.7)+Math.sin(E*23.1)*.5)*m*.7}let p=Us*v;if(p>.01){let E=r/1e3;St.position.x+=Math.sin(E*.37)*.014*p,St.position.y+=Math.sin(E*.53)*.012*p,St.rotateZ((Math.sin(E*.31)*.0045+Math.sin(E*.83)*.002)*p)}Nd-=t,Nd<=0&&(Ht("speed").textContent=Math.round(nt.v*3.6),Ht("clock").textContent=zt.clock,ae.lens.title!==Ev()&&(Te(),Os()),Oo(),Nd=.25),Fi.uMistD.value=.05*at.mistDens*at.mistDens,Fi.uMistH.value=3+70*Math.pow(at.mistCover,1.4),Fi.uMistCover.value=at.mistCover,Fi.uMistBase.value=nt.pos.y-1.5,Fi.uMistT.value=r/1e3,Fi.uMistWind.value.copy(f.windDir).multiplyScalar(.0012+.006*f.wind),Fi.uMistColor.value.copy(f.mistColor),zt.mistCover=at.mistCover,zt.mistDens=at.mistDens,f.wet>.001?Ma.render(Fe,St,nt.pos.y+.05):Ma.active=!1,li.setReflection(Ma,r/1e3);let x=Xe[at.cam].id==="cockpit"&&!Bt.active;Ea.group.visible=x,x&&Ea.render(Fe,xt.tilt),zd.render(Fe,St,x),Ro.update(t,Bt.active?0:f.rain,nt.v);let b=x?Ro.wet:0;xt.shield&&xt.setWiper(Ro.angle(xt.shield.sweep)),an.begin(),je.render(Fe,St),US(),Ro.apply(an.final.uniforms,b>.01?b:0,St,xt.tilt,xt.shield,r/1e3,xt.rearShield),an.renderGlassMask(St,xt.tilt,xt.rearShield),an.render(r/1e3,Us,nt.fx,PS(t)),ph&&MS(),requestAnimationFrame(Uv)}async function kS(){_v(),zt.setTime(Kn[at.time].hour),zt.hour=Kn[at.time].hour,zt.snapWeather(zn[at.weather].id),zt.onThunder=(e,n)=>or.thunder(e,n),xe.ensure(nt.s+8e3),xe.at(nt.s,Ei),nt.pos.set(Ei.x,Ei.y,Ei.z),Sv(),await xt.probe(),Te(),requestAnimationFrame(Uv);let r=Ht("start");Ht("hint").textContent="Chạm hoặc nhấn phím bất kỳ để bắt đầu",xt.onProgress=e=>Nn(ae.car,"🚗","Đang tải… "+Math.round(e*100)+"%"),hs.load("assets/models/nature.glb").then(()=>{hs.rockGeos.length&&(gn.rockGeos=hs.rockGeos),gn.reset(),gn.prime(St.position.lengthSq()?St.position:nt.pos),hs.setRadius(ki[at.quality].trees),Ta(an.sceneRT,St,hs.group).catch(()=>{})}).catch(e=>console.warn("Không tải được cây / đá chi tiết",e)),fh(0).then(()=>De.load("assets/models/person.glb")).then(()=>{xt.tilt.add(De.root),xt.current&&(Bt.place(xt.dim),Bt.sit()),Ta(an.sceneRT,St,De.root).catch(()=>{}),Te()}).catch(e=>console.warn("Không tải được người lái",e));let t=e=>{r.classList.add("gone"),at.started=!0,_S(),va=0,or.start().catch(n=>console.warn("Audio:",n)),window.removeEventListener("keydown",t),r.removeEventListener("pointerdown",t)};r.addEventListener("pointerdown",t),window.addEventListener("keydown",t)}kS();window.__app={city:us,cityTraffic:Lo,ocean:lr,waterfalls:Gd,wing:zd,audio:or,smoke:pv,cows:uh,traffic:oi,dash:hh,town:oh,fireflies:Bd,wipers:Ro,meadow:_a,nature:hs,person:De,stop:Bt,toggleStop:()=>Xd(),refl:Ma,MIST:Fi,forceCine:r=>{Us=r},post:an,toggleFast:Kd,env:zt,cars:xt,rig:Gt,drive:nt,state:at,nextCharacter:wv,chooseCharacter:Wd,nextCar:qd,nextMap:jd,nextCam:Av,nextWeather:Rv,nextTime:Cv,chooseCar:fh,renderer:je,scene:Fe,camera:St,scenery:li,terrain:gn,reeds:Fo,grass:ya,road:xe};
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
