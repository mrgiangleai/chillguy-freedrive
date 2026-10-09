var fx=0,Tp=1,dx=2;var f0=1,ff=2,ns=3,Hi=0,bn=1,pe=2;var As=0,Zr=1,tn=2,Sp=3,Ap=4,df=5,is=100,px=101,mx=102,Rp=103,Cp=104,pf=200,gx=201,mf=202,vx=203,yu=204,_u=205,xx=206,bx=207,yx=208,_x=209,Mx=210,Ex=211,wx=212,Tx=213,Sx=214,Ax=0,Rx=1,Cx=2,Dc=3,Px=4,Lx=5,Ix=6,Dx=7,gf=0,Fx=1,Hx=2,Rs=0,Nx=1,kx=2,Ux=3,vf=4,Ox=5,zx=6,Pp="attached",Bx="detached",d0=300,ta=301,ea=302,Mu=303,Eu=304,ll=306,On=1e3,Zn=1001,ao=1002,$e=1003,Fc=1004;var $a=1005;var nn=1006,xf=1007;var Ni=1008;var Fi=1009,Gx=1010,Vx=1011,bf=1012,p0=1013,Di=1014,ss=1015,Wn=1016,m0=1017,g0=1018,sr=1020,Wx=1021,ai=1023,qx=1024,Xx=1025,rr=1026,na=1027,jx=1028,v0=1029,Yx=1030,x0=1031,b0=1033,kh=33776,Uh=33777,Oh=33778,zh=33779,Lp=35840,Ip=35841,Dp=35842,Fp=35843,y0=36196,Hp=37492,Np=37496,kp=37808,Up=37809,Op=37810,zp=37811,Bp=37812,Gp=37813,Vp=37814,Wp=37815,qp=37816,Xp=37817,jp=37818,Yp=37819,Kp=37820,Jp=37821,Bh=36492,Zp=36494,Qp=36495,Kx=36283,$p=36284,tm=36285,em=36286,yf=2200,_f=2201,Jx=2202,ia=2300,or=2301,Gh=2302,jr=2400,Yr=2401,Hc=2402,Mf=2500,Zx=2501,_0=0,hl=1,bo=2,M0=3e3,ar=3001,Qx=3200,Ef=3201,wf=0,$x=1,Sn="",ue="srgb",rn="srgb-linear",Tf="display-p3",ul="display-p3-linear",Nc="linear",ke="srgb",kc="rec709",Uc="p3";var Sr=7680;var nm=519,tb=512,eb=513,nb=514,E0=515,ib=516,sb=517,rb=518,ab=519,wu=35044,zn=35048;var im="300 es",Tu=1035,rs=2e3,Oc=2001,as=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,t);t.target=null}}},wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],sm=1234567,to=Math.PI/180,sa=180/Math.PI;function Mi(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(wn[r&255]+wn[r>>8&255]+wn[r>>16&255]+wn[r>>24&255]+"-"+wn[t&255]+wn[t>>8&255]+"-"+wn[t>>16&15|64]+wn[t>>24&255]+"-"+wn[e&63|128]+wn[e>>8&255]+"-"+wn[e>>16&255]+wn[e>>24&255]+wn[n&255]+wn[n>>8&255]+wn[n>>16&255]+wn[n>>24&255]).toLowerCase()}function sn(r,t,e){return Math.max(t,Math.min(e,r))}function Sf(r,t){return(r%t+t)%t}function ob(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function cb(r,t,e){return r!==t?(e-r)/(t-r):0}function eo(r,t,e){return(1-e)*r+e*t}function lb(r,t,e,n){return eo(r,t,1-Math.exp(-e*n))}function hb(r,t=1){return t-Math.abs(Sf(r,t*2)-t)}function ub(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function fb(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function db(r,t){return r+Math.floor(Math.random()*(t-r+1))}function pb(r,t){return r+Math.random()*(t-r)}function mb(r){return r*(.5-Math.random())}function gb(r){r!==void 0&&(sm=r);let t=sm+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function vb(r){return r*to}function xb(r){return r*sa}function Su(r){return(r&r-1)===0&&r!==0}function bb(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function zc(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function yb(r,t,e,n,i){let s=Math.cos,a=Math.sin,o=s(e/2),c=a(e/2),l=s((t+n)/2),h=a((t+n)/2),u=s((t-n)/2),f=a((t-n)/2),d=s((n-t)/2),g=a((n-t)/2);switch(i){case"XYX":r.set(o*h,c*u,c*f,o*l);break;case"YZY":r.set(c*f,o*h,c*u,o*l);break;case"ZXZ":r.set(c*u,c*f,o*h,o*l);break;case"XZX":r.set(o*h,c*g,c*d,o*l);break;case"YXY":r.set(c*d,o*h,c*g,o*l);break;case"ZYZ":r.set(c*g,c*d,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ii(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Se(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var Oe={DEG2RAD:to,RAD2DEG:sa,generateUUID:Mi,clamp:sn,euclideanModulo:Sf,mapLinear:ob,inverseLerp:cb,lerp:eo,damp:lb,pingpong:hb,smoothstep:ub,smootherstep:fb,randInt:db,randFloat:pb,randFloatSpread:mb,seededRandom:gb,degToRad:vb,radToDeg:xb,isPowerOfTwo:Su,ceilPowerOfTwo:bb,floorPowerOfTwo:zc,setQuaternionFromProperEuler:yb,normalize:Se,denormalize:Ii},at=class r{constructor(t=0,e=0){r.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(sn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*i+t.x,this.y=s*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},le=class r{constructor(t,e,n,i,s,a,o,c,l){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,c,l)}set(t,e,n,i,s,a,o,c,l){let h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=s,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],v=i[0],m=i[3],p=i[6],x=i[1],y=i[4],M=i[7],E=i[2],b=i[5],w=i[8];return s[0]=a*v+o*x+c*E,s[3]=a*m+o*y+c*b,s[6]=a*p+o*M+c*w,s[1]=l*v+h*x+u*E,s[4]=l*m+h*y+u*b,s[7]=l*p+h*M+u*w,s[2]=f*v+d*x+g*E,s[5]=f*m+d*y+g*b,s[8]=f*p+d*M+g*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*s*h+n*o*c+i*s*l-i*a*c}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*a-o*l,f=o*c-h*s,d=l*s-a*c,g=e*u+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return t[0]=u*v,t[1]=(i*l-h*n)*v,t[2]=(o*n-i*a)*v,t[3]=f*v,t[4]=(h*e-i*c)*v,t[5]=(i*s-o*e)*v,t[6]=d*v,t[7]=(n*c-l*e)*v,t[8]=(a*e-n*s)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,a,o){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-i*l,i*c,-i*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Vh.makeScale(t,e)),this}rotate(t){return this.premultiply(Vh.makeRotation(-t)),this}translate(t,e){return this.premultiply(Vh.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Vh=new le;function w0(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function oo(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function _b(){let r=oo("canvas");return r.style.display="block",r}var rm={};function no(r){r in rm||(rm[r]=!0,console.warn(r))}var am=new le().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),om=new le().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ec={[rn]:{transfer:Nc,primaries:kc,toReference:r=>r,fromReference:r=>r},[ue]:{transfer:ke,primaries:kc,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[ul]:{transfer:Nc,primaries:Uc,toReference:r=>r.applyMatrix3(om),fromReference:r=>r.applyMatrix3(am)},[Tf]:{transfer:ke,primaries:Uc,toReference:r=>r.convertSRGBToLinear().applyMatrix3(om),fromReference:r=>r.applyMatrix3(am).convertLinearToSRGB()}},Mb=new Set([rn,ul]),ge={enabled:!0,_workingColorSpace:rn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Mb.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;let n=ec[t].toReference,i=ec[e].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return ec[r].primaries},getTransfer:function(r){return r===Sn?Nc:ec[r].transfer}};function Qr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Wh(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var Ar,Bc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ar===void 0&&(Ar=oo("canvas")),Ar.width=t.width,Ar.height=t.height;let n=Ar.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ar}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=oo("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Qr(s[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Qr(e[n]/255)*255):e[n]=Qr(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Eb=0,Gc=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Eb++}),this.uuid=Mi(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(qh(i[a].image)):s.push(qh(i[a]))}else s=qh(i);n.url=s}return e||(t.images[this.uuid]=n),n}};function qh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Bc.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var wb=0,yn=class r extends as{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,n=Zn,i=Zn,s=nn,a=Ni,o=ai,c=Fi,l=r.DEFAULT_ANISOTROPY,h=Sn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wb++}),this.uuid=Mi(),this.name="",this.source=new Gc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(no("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===ar?ue:Sn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==d0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case On:t.x=t.x-Math.floor(t.x);break;case Zn:t.x=t.x<0?0:1;break;case ao:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case On:t.y=t.y-Math.floor(t.y);break;case Zn:t.y=t.y<0?0:1;break;case ao:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return no("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ue?ar:M0}set encoding(t){no("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===ar?ue:Sn}};yn.DEFAULT_IMAGE=null;yn.DEFAULT_MAPPING=d0;yn.DEFAULT_ANISOTROPY=1;var he=class r{constructor(t=0,e=0,n=0,i=1){r.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(l+1)/2,M=(d+1)/2,E=(p+1)/2,b=(h+f)/4,w=(u+v)/4,C=(g+m)/4;return y>M&&y>E?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=b/n,s=w/n):M>E?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=b/i,s=C/i):E<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(E),n=w/s,i=C/s),this.set(n,i,s,e),this}let x=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(u-v)/x,this.z=(f-h)/x,this.w=Math.acos((l+d+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Au=class extends as{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new he(0,0,t,e),this.scissorTest=!1,this.viewport=new he(0,0,t,e);let i={width:t,height:e,depth:1};n.encoding!==void 0&&(no("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ar?ue:Sn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new yn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Gc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},mn=class extends Au{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Vc=class extends yn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=$e,this.minFilter=$e,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ru=class extends yn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=$e,this.minFilter=$e,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Vt=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],f=s[a+0],d=s[a+1],g=s[a+2],v=s[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=v;return}if(u!==v||c!==f||l!==d||h!==g){let m=1-o,p=c*f+l*d+h*g+u*v,x=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){let E=Math.sqrt(y),b=Math.atan2(E,p*x);m=Math.sin(m*b)/E,o=Math.sin(o*b)/E}let M=o*x;if(c=c*m+f*M,l=l*m+d*M,h=h*m+g*M,u=u*m+v*M,m===1-o){let E=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=E,l*=E,h*=E,u*=E}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,a){let o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=s[a],f=s[a+1],d=s[a+2],g=s[a+3];return t[e]=o*g+h*u+c*d-l*f,t[e+1]=c*g+h*f+l*u-o*d,t[e+2]=l*g+h*d+o*f-c*u,t[e+3]=h*g-o*u-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,s=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),u=o(s/2),f=c(n/2),d=c(i/2),g=c(s/2);switch(a){case"XYZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"YZX":this._x=f*h*u+l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u-f*d*g;break;case"XZY":this._x=f*h*u-l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(s-l)*d,this._z=(a-i)*d}else if(n>o&&n>u){let d=2*Math.sqrt(1+n-o-u);this._w=(h-c)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(s+l)/d}else if(o>u){let d=2*Math.sqrt(1+o-n-u);this._w=(s-l)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+u-n-o);this._w=(a-i)/d,this._x=(s+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(sn(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,s=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+i*l-s*c,this._y=i*h+a*c+s*o-n*l,this._z=s*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,s=this._z,a=this._w,o=a*t._w+n*t._x+i*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;let c=1-o*o;if(c<=Number.EPSILON){let d=1-e;return this._w=d*a+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(s),n*Math.cos(s),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},T=class r{constructor(t=0,e=0,n=0){r.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(cm.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(cm.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,s=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*i-o*n),h=2*(o*e-s*i),u=2*(s*n-a*e);return this.x=e+c*l+a*u-o*h,this.y=n+c*h+o*l-s*u,this.z=i+c*u+s*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,s=t.z,a=e.x,o=e.y,c=e.z;return this.x=i*c-s*o,this.y=s*a-n*c,this.z=n*o-i*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Xh.copy(this).projectOnVector(t),this.sub(Xh)}reflect(t){return this.sub(Xh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(sn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Xh=new T,cm=new Vt,qe=class{constructor(t=new T(1/0,1/0,1/0),e=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(xi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(xi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=xi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,xi):xi.fromBufferAttribute(s,a),xi.applyMatrix4(t.matrixWorld),this.expandByPoint(xi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),nc.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),nc.copy(n.boundingBox)),nc.applyMatrix4(t.matrixWorld),this.union(nc)}let i=t.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,xi),xi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Va),ic.subVectors(this.max,Va),Rr.subVectors(t.a,Va),Cr.subVectors(t.b,Va),Pr.subVectors(t.c,Va),_s.subVectors(Cr,Rr),Ms.subVectors(Pr,Cr),Zs.subVectors(Rr,Pr);let e=[0,-_s.z,_s.y,0,-Ms.z,Ms.y,0,-Zs.z,Zs.y,_s.z,0,-_s.x,Ms.z,0,-Ms.x,Zs.z,0,-Zs.x,-_s.y,_s.x,0,-Ms.y,Ms.x,0,-Zs.y,Zs.x,0];return!jh(e,Rr,Cr,Pr,ic)||(e=[1,0,0,0,1,0,0,0,1],!jh(e,Rr,Cr,Pr,ic))?!1:(sc.crossVectors(_s,Ms),e=[sc.x,sc.y,sc.z],jh(e,Rr,Cr,Pr,ic))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,xi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(xi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ji),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Ji=[new T,new T,new T,new T,new T,new T,new T,new T],xi=new T,nc=new qe,Rr=new T,Cr=new T,Pr=new T,_s=new T,Ms=new T,Zs=new T,Va=new T,ic=new T,sc=new T,Qs=new T;function jh(r,t,e,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Qs.fromArray(r,s);let o=i.x*Math.abs(Qs.x)+i.y*Math.abs(Qs.y)+i.z*Math.abs(Qs.z),c=t.dot(Qs),l=e.dot(Qs),h=n.dot(Qs);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Tb=new qe,Wa=new T,Yh=new T,Qn=class{constructor(t=new T,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Tb.setFromPoints(t).getCenter(n);let i=0;for(let s=0,a=t.length;s<a;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Wa.subVectors(t,this.center);let e=Wa.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Wa,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Yh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Wa.copy(t.center).add(Yh)),this.expandByPoint(Wa.copy(t.center).sub(Yh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Zi=new T,Kh=new T,rc=new T,Es=new T,Jh=new T,ac=new T,Zh=new T,cr=class{constructor(t=new T,e=new T(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Zi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Zi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Zi.copy(this.origin).addScaledVector(this.direction,e),Zi.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Kh.copy(t).add(e).multiplyScalar(.5),rc.copy(e).sub(t).normalize(),Es.copy(this.origin).sub(Kh);let s=t.distanceTo(e)*.5,a=-this.direction.dot(rc),o=Es.dot(this.direction),c=-Es.dot(rc),l=Es.lengthSq(),h=Math.abs(1-a*a),u,f,d,g;if(h>0)if(u=a*c-o,f=a*o-c,g=s*h,u>=0)if(f>=-g)if(f<=g){let v=1/h;u*=v,f*=v,d=u*(u+a*f+2*o)+f*(a*u+f+2*c)+l}else f=s,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;else f=-s,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-a*s+o)),f=u>0?-s:Math.min(Math.max(-s,-c),s),d=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-s,-c),s),d=f*(f+2*c)+l):(u=Math.max(0,-(a*s+o)),f=u>0?s:Math.min(Math.max(-s,-c),s),d=-u*u+f*(f+2*c)+l);else f=a>0?-s:s,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Kh).addScaledVector(rc,f),d}intersectSphere(t,e){Zi.subVectors(t.center,this.origin);let n=Zi.dot(this.direction),i=Zi.dot(Zi)-n*n,s=t.radius*t.radius;if(i>s)return null;let a=Math.sqrt(s-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,i=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,i=(t.min.x-f.x)*l),h>=0?(s=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(s=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Zi)!==null}intersectTriangle(t,e,n,i,s){Jh.subVectors(e,t),ac.subVectors(n,t),Zh.crossVectors(Jh,ac);let a=this.direction.dot(Zh),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Es.subVectors(this.origin,t);let c=o*this.direction.dot(ac.crossVectors(Es,ac));if(c<0)return null;let l=o*this.direction.dot(Jh.cross(Es));if(l<0||c+l>a)return null;let h=-o*Es.dot(Zh);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},bt=class r{constructor(t,e,n,i,s,a,o,c,l,h,u,f,d,g,v,m){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,c,l,h,u,f,d,g,v,m)}set(t,e,n,i,s,a,o,c,l,h,u,f,d,g,v,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/Lr.setFromMatrixColumn(t,0).length(),s=1/Lr.setFromMatrixColumn(t,1).length(),a=1/Lr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let f=a*h,d=a*u,g=o*h,v=o*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=d+g*l,e[5]=f-v*l,e[9]=-o*c,e[2]=v-f*l,e[6]=g+d*l,e[10]=a*c}else if(t.order==="YXZ"){let f=c*h,d=c*u,g=l*h,v=l*u;e[0]=f+v*o,e[4]=g*o-d,e[8]=a*l,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=d*o-g,e[6]=v+f*o,e[10]=a*c}else if(t.order==="ZXY"){let f=c*h,d=c*u,g=l*h,v=l*u;e[0]=f-v*o,e[4]=-a*u,e[8]=g+d*o,e[1]=d+g*o,e[5]=a*h,e[9]=v-f*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let f=a*h,d=a*u,g=o*h,v=o*u;e[0]=c*h,e[4]=g*l-d,e[8]=f*l+v,e[1]=c*u,e[5]=v*l+f,e[9]=d*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let f=a*c,d=a*l,g=o*c,v=o*l;e[0]=c*h,e[4]=v-f*u,e[8]=g*u+d,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=d*u+g,e[10]=f-v*u}else if(t.order==="XZY"){let f=a*c,d=a*l,g=o*c,v=o*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+v,e[5]=a*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=o*h,e[10]=v*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Sb,t,Ab)}lookAt(t,e,n){let i=this.elements;return Kn.subVectors(t,e),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),ws.crossVectors(n,Kn),ws.lengthSq()===0&&(Math.abs(n.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),ws.crossVectors(n,Kn)),ws.normalize(),oc.crossVectors(Kn,ws),i[0]=ws.x,i[4]=oc.x,i[8]=Kn.x,i[1]=ws.y,i[5]=oc.y,i[9]=Kn.y,i[2]=ws.z,i[6]=oc.z,i[10]=Kn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],v=n[6],m=n[10],p=n[14],x=n[3],y=n[7],M=n[11],E=n[15],b=i[0],w=i[4],C=i[8],_=i[12],S=i[1],I=i[5],F=i[9],N=i[13],L=i[2],P=i[6],D=i[10],U=i[14],O=i[3],G=i[7],j=i[11],J=i[15];return s[0]=a*b+o*S+c*L+l*O,s[4]=a*w+o*I+c*P+l*G,s[8]=a*C+o*F+c*D+l*j,s[12]=a*_+o*N+c*U+l*J,s[1]=h*b+u*S+f*L+d*O,s[5]=h*w+u*I+f*P+d*G,s[9]=h*C+u*F+f*D+d*j,s[13]=h*_+u*N+f*U+d*J,s[2]=g*b+v*S+m*L+p*O,s[6]=g*w+v*I+m*P+p*G,s[10]=g*C+v*F+m*D+p*j,s[14]=g*_+v*N+m*U+p*J,s[3]=x*b+y*S+M*L+E*O,s[7]=x*w+y*I+M*P+E*G,s[11]=x*C+y*F+M*D+E*j,s[15]=x*_+y*N+M*U+E*J,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],v=t[7],m=t[11],p=t[15];return g*(+s*c*u-i*l*u-s*o*f+n*l*f+i*o*d-n*c*d)+v*(+e*c*d-e*l*f+s*a*f-i*a*d+i*l*h-s*c*h)+m*(+e*l*u-e*o*d-s*a*u+n*a*d+s*o*h-n*l*h)+p*(-i*o*h-e*c*u+e*o*f+i*a*u-n*a*f+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],v=t[13],m=t[14],p=t[15],x=u*m*l-v*f*l+v*c*d-o*m*d-u*c*p+o*f*p,y=g*f*l-h*m*l-g*c*d+a*m*d+h*c*p-a*f*p,M=h*v*l-g*u*l+g*o*d-a*v*d-h*o*p+a*u*p,E=g*u*c-h*v*c-g*o*f+a*v*f+h*o*m-a*u*m,b=e*x+n*y+i*M+s*E;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/b;return t[0]=x*w,t[1]=(v*f*s-u*m*s-v*i*d+n*m*d+u*i*p-n*f*p)*w,t[2]=(o*m*s-v*c*s+v*i*l-n*m*l-o*i*p+n*c*p)*w,t[3]=(u*c*s-o*f*s-u*i*l+n*f*l+o*i*d-n*c*d)*w,t[4]=y*w,t[5]=(h*m*s-g*f*s+g*i*d-e*m*d-h*i*p+e*f*p)*w,t[6]=(g*c*s-a*m*s-g*i*l+e*m*l+a*i*p-e*c*p)*w,t[7]=(a*f*s-h*c*s+h*i*l-e*f*l-a*i*d+e*c*d)*w,t[8]=M*w,t[9]=(g*u*s-h*v*s-g*n*d+e*v*d+h*n*p-e*u*p)*w,t[10]=(a*v*s-g*o*s+g*n*l-e*v*l-a*n*p+e*o*p)*w,t[11]=(h*o*s-a*u*s-h*n*l+e*u*l+a*n*d-e*o*d)*w,t[12]=E*w,t[13]=(h*v*i-g*u*i+g*n*f-e*v*f-h*n*m+e*u*m)*w,t[14]=(g*o*i-a*v*i-g*n*c+e*v*c+a*n*m-e*o*m)*w,t[15]=(a*u*i-h*o*i+h*n*c-e*u*c-a*n*f+e*o*f)*w,this}scale(t){let e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,a=t.x,o=t.y,c=t.z,l=s*a,h=s*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,a){return this.set(1,n,s,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,s=e._x,a=e._y,o=e._z,c=e._w,l=s+s,h=a+a,u=o+o,f=s*l,d=s*h,g=s*u,v=a*h,m=a*u,p=o*u,x=c*l,y=c*h,M=c*u,E=n.x,b=n.y,w=n.z;return i[0]=(1-(v+p))*E,i[1]=(d+M)*E,i[2]=(g-y)*E,i[3]=0,i[4]=(d-M)*b,i[5]=(1-(f+p))*b,i[6]=(m+x)*b,i[7]=0,i[8]=(g+y)*w,i[9]=(m-x)*w,i[10]=(1-(f+v))*w,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,s=Lr.set(i[0],i[1],i[2]).length(),a=Lr.set(i[4],i[5],i[6]).length(),o=Lr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],bi.copy(this);let l=1/s,h=1/a,u=1/o;return bi.elements[0]*=l,bi.elements[1]*=l,bi.elements[2]*=l,bi.elements[4]*=h,bi.elements[5]*=h,bi.elements[6]*=h,bi.elements[8]*=u,bi.elements[9]*=u,bi.elements[10]*=u,e.setFromRotationMatrix(bi),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,i,s,a,o=rs){let c=this.elements,l=2*s/(e-t),h=2*s/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i),d,g;if(o===rs)d=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Oc)d=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,s,a,o=rs){let c=this.elements,l=1/(e-t),h=1/(n-i),u=1/(a-s),f=(e+t)*l,d=(n+i)*h,g,v;if(o===rs)g=(a+s)*u,v=-2*u;else if(o===Oc)g=s*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Lr=new T,bi=new bt,Sb=new T(0,0,0),Ab=new T(1,1,1),ws=new T,oc=new T,Kn=new T,lm=new bt,hm=new Vt,oi=class r{constructor(t=0,e=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(sn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-sn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(sn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-sn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(sn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-sn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return lm.makeRotationFromQuaternion(t),this.setFromRotationMatrix(lm,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return hm.setFromEuler(this),this.setFromQuaternion(hm,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};oi.DEFAULT_ORDER="XYZ";var co=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Rb=0,um=new T,Ir=new Vt,Qi=new bt,cc=new T,qa=new T,Cb=new T,Pb=new Vt,fm=new T(1,0,0),dm=new T(0,1,0),pm=new T(0,0,1),Lb={type:"added"},Ib={type:"removed"},Le=class r extends as{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rb++}),this.uuid=Mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new T,e=new oi,n=new Vt,i=new T(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new bt},normalMatrix:{value:new le}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new co,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ir.setFromAxisAngle(t,e),this.quaternion.multiply(Ir),this}rotateOnWorldAxis(t,e){return Ir.setFromAxisAngle(t,e),this.quaternion.premultiply(Ir),this}rotateX(t){return this.rotateOnAxis(fm,t)}rotateY(t){return this.rotateOnAxis(dm,t)}rotateZ(t){return this.rotateOnAxis(pm,t)}translateOnAxis(t,e){return um.copy(t).applyQuaternion(this.quaternion),this.position.add(um.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(fm,t)}translateY(t){return this.translateOnAxis(dm,t)}translateZ(t){return this.translateOnAxis(pm,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Qi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?cc.copy(t):cc.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),qa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qi.lookAt(qa,cc,this.up):Qi.lookAt(cc,qa,this.up),this.quaternion.setFromRotationMatrix(Qi),i&&(Qi.extractRotation(i.matrixWorld),Ir.setFromRotationMatrix(Qi),this.quaternion.premultiply(Ir.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Lb)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ib)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Qi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Qi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Qi),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qa,t,Cb),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qa,Pb,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++){let s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let i=this.children;for(let s=0,a=i.length;s<a;s++){let o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];s(t.shapes,u)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(t.materials,this.material[c]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];i.animations.push(s(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),d=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};Le.DEFAULT_UP=new T(0,1,0);Le.DEFAULT_MATRIX_AUTO_UPDATE=!0;Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var yi=new T,$i=new T,Qh=new T,ts=new T,Dr=new T,Fr=new T,mm=new T,$h=new T,tu=new T,eu=new T,lc=!1,ir=class r{constructor(t=new T,e=new T,n=new T){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),yi.subVectors(t,e),i.cross(yi);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){yi.subVectors(i,e),$i.subVectors(n,e),Qh.subVectors(t,e);let a=yi.dot(yi),o=yi.dot($i),c=yi.dot(Qh),l=$i.dot($i),h=$i.dot(Qh),u=a*l-o*o;if(u===0)return s.set(0,0,0),null;let f=1/u,d=(l*c-o*h)*f,g=(a*h-o*c)*f;return s.set(1-d-g,g,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,ts)===null?!1:ts.x>=0&&ts.y>=0&&ts.x+ts.y<=1}static getUV(t,e,n,i,s,a,o,c){return lc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),lc=!0),this.getInterpolation(t,e,n,i,s,a,o,c)}static getInterpolation(t,e,n,i,s,a,o,c){return this.getBarycoord(t,e,n,i,ts)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,ts.x),c.addScaledVector(a,ts.y),c.addScaledVector(o,ts.z),c)}static isFrontFacing(t,e,n,i){return yi.subVectors(n,e),$i.subVectors(t,e),yi.cross($i).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return yi.subVectors(this.c,this.b),$i.subVectors(this.a,this.b),yi.cross($i).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,s){return lc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),lc=!0),r.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}getInterpolation(t,e,n,i,s){return r.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,a,o;Dr.subVectors(i,n),Fr.subVectors(s,n),$h.subVectors(t,n);let c=Dr.dot($h),l=Fr.dot($h);if(c<=0&&l<=0)return e.copy(n);tu.subVectors(t,i);let h=Dr.dot(tu),u=Fr.dot(tu);if(h>=0&&u<=h)return e.copy(i);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(Dr,a);eu.subVectors(t,s);let d=Dr.dot(eu),g=Fr.dot(eu);if(g>=0&&d<=g)return e.copy(s);let v=d*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(Fr,o);let m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return mm.subVectors(s,i),o=(u-h)/(u-h+(d-g)),e.copy(i).addScaledVector(mm,o);let p=1/(m+v+f);return a=v*p,o=f*p,e.copy(n).addScaledVector(Dr,a).addScaledVector(Fr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},T0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ts={h:0,s:0,l:0},hc={h:0,s:0,l:0};function nu(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var et=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ue){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ge.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=ge.workingColorSpace){return this.r=t,this.g=e,this.b=n,ge.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=ge.workingColorSpace){if(t=Sf(t,1),e=sn(e,0,1),n=sn(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=nu(a,s,t+1/3),this.g=nu(a,s,t),this.b=nu(a,s,t-1/3)}return ge.toWorkingColorSpace(this,i),this}setStyle(t,e=ue){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ue){let n=T0[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Qr(t.r),this.g=Qr(t.g),this.b=Qr(t.b),this}copyLinearToSRGB(t){return this.r=Wh(t.r),this.g=Wh(t.g),this.b=Wh(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ue){return ge.fromWorkingColorSpace(Tn.copy(this),t),Math.round(sn(Tn.r*255,0,255))*65536+Math.round(sn(Tn.g*255,0,255))*256+Math.round(sn(Tn.b*255,0,255))}getHexString(t=ue){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ge.workingColorSpace){ge.fromWorkingColorSpace(Tn.copy(this),e);let n=Tn.r,i=Tn.g,s=Tn.b,a=Math.max(n,i,s),o=Math.min(n,i,s),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(i-s)/u+(i<s?6:0);break;case i:c=(s-n)/u+2;break;case s:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ge.workingColorSpace){return ge.fromWorkingColorSpace(Tn.copy(this),e),t.r=Tn.r,t.g=Tn.g,t.b=Tn.b,t}getStyle(t=ue){ge.fromWorkingColorSpace(Tn.copy(this),t);let e=Tn.r,n=Tn.g,i=Tn.b;return t!==ue?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Ts),this.setHSL(Ts.h+t,Ts.s+e,Ts.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ts),t.getHSL(hc);let n=eo(Ts.h,hc.h,e),i=eo(Ts.s,hc.s,e),s=eo(Ts.l,hc.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Tn=new et;et.NAMES=T0;var Db=0,_n=class extends as{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Db++}),this.uuid=Mi(),this.name="",this.type="Material",this.blending=Zr,this.side=Hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yu,this.blendDst=_u,this.blendEquation=is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=Dc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Sr,this.stencilZFail=Sr,this.stencilZPass=Sr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Zr&&(n.blending=this.blending),this.side!==Hi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==yu&&(n.blendSrc=this.blendSrc),this.blendDst!==_u&&(n.blendDst=this.blendDst),this.blendEquation!==is&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Dc&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==nm&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Sr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Sr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Sr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let a=[];for(let o in s){let c=s[o];delete c.metadata,a.push(c)}return a}if(e){let s=i(t.textures),a=i(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Ye=class extends _n{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=gf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var en=new T,uc=new at,Et=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=wu,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ss,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)uc.fromBufferAttribute(this,e),uc.applyMatrix3(t),this.setXY(e,uc.x,uc.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyMatrix3(t),this.setXYZ(e,en.x,en.y,en.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyMatrix4(t),this.setXYZ(e,en.x,en.y,en.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyNormalMatrix(t),this.setXYZ(e,en.x,en.y,en.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.transformDirection(t),this.setXYZ(e,en.x,en.y,en.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ii(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Se(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ii(e,this.array)),e}setX(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ii(e,this.array)),e}setY(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ii(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ii(e,this.array)),e}setW(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),i=Se(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),i=Se(i,this.array),s=Se(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==wu&&(t.usage=this.usage),t}};var Wc=class extends Et{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var qc=class extends Et{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var yt=class extends Et{constructor(t,e,n){super(new Float32Array(t),e,n)}};var Fb=0,ri=new bt,iu=new Le,Hr=new T,Jn=new qe,Xa=new qe,pn=new T,At=class r extends as{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fb++}),this.uuid=Mi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(w0(t)?qc:Wc)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new le().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ri.makeRotationFromQuaternion(t),this.applyMatrix4(ri),this}rotateX(t){return ri.makeRotationX(t),this.applyMatrix4(ri),this}rotateY(t){return ri.makeRotationY(t),this.applyMatrix4(ri),this}rotateZ(t){return ri.makeRotationZ(t),this.applyMatrix4(ri),this}translate(t,e,n){return ri.makeTranslation(t,e,n),this.applyMatrix4(ri),this}scale(t,e,n){return ri.makeScale(t,e,n),this.applyMatrix4(ri),this}lookAt(t){return iu.lookAt(t),iu.updateMatrix(),this.applyMatrix4(iu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hr).negate(),this.translate(Hr.x,Hr.y,Hr.z),this}setFromPoints(t){let e=[];for(let n=0,i=t.length;n<i;n++){let s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new yt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qe);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];Jn.setFromBufferAttribute(s),this.morphTargetsRelative?(pn.addVectors(this.boundingBox.min,Jn.min),this.boundingBox.expandByPoint(pn),pn.addVectors(this.boundingBox.max,Jn.max),this.boundingBox.expandByPoint(pn)):(this.boundingBox.expandByPoint(Jn.min),this.boundingBox.expandByPoint(Jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new T,1/0);return}if(t){let n=this.boundingSphere.center;if(Jn.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){let o=e[s];Xa.setFromBufferAttribute(o),this.morphTargetsRelative?(pn.addVectors(Jn.min,Xa.min),Jn.expandByPoint(pn),pn.addVectors(Jn.max,Xa.max),Jn.expandByPoint(pn)):(Jn.expandByPoint(Xa.min),Jn.expandByPoint(Xa.max))}Jn.getCenter(n);let i=0;for(let s=0,a=t.count;s<a;s++)pn.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(pn));if(e)for(let s=0,a=e.length;s<a;s++){let o=e[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)pn.fromBufferAttribute(o,l),c&&(Hr.fromBufferAttribute(t,l),pn.add(Hr)),i=Math.max(i,n.distanceToSquared(pn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.array,i=e.position.array,s=e.normal.array,a=e.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Et(new Float32Array(4*o),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let S=0;S<o;S++)l[S]=new T,h[S]=new T;let u=new T,f=new T,d=new T,g=new at,v=new at,m=new at,p=new T,x=new T;function y(S,I,F){u.fromArray(i,S*3),f.fromArray(i,I*3),d.fromArray(i,F*3),g.fromArray(a,S*2),v.fromArray(a,I*2),m.fromArray(a,F*2),f.sub(u),d.sub(u),v.sub(g),m.sub(g);let N=1/(v.x*m.y-m.x*v.y);isFinite(N)&&(p.copy(f).multiplyScalar(m.y).addScaledVector(d,-v.y).multiplyScalar(N),x.copy(d).multiplyScalar(v.x).addScaledVector(f,-m.x).multiplyScalar(N),l[S].add(p),l[I].add(p),l[F].add(p),h[S].add(x),h[I].add(x),h[F].add(x))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let S=0,I=M.length;S<I;++S){let F=M[S],N=F.start,L=F.count;for(let P=N,D=N+L;P<D;P+=3)y(n[P+0],n[P+1],n[P+2])}let E=new T,b=new T,w=new T,C=new T;function _(S){w.fromArray(s,S*3),C.copy(w);let I=l[S];E.copy(I),E.sub(w.multiplyScalar(w.dot(I))).normalize(),b.crossVectors(C,I);let N=b.dot(h[S])<0?-1:1;c[S*4]=E.x,c[S*4+1]=E.y,c[S*4+2]=E.z,c[S*4+3]=N}for(let S=0,I=M.length;S<I;++S){let F=M[S],N=F.start,L=F.count;for(let P=N,D=N+L;P<D;P+=3)_(n[P+0]),_(n[P+1]),_(n[P+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Et(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new T,s=new T,a=new T,o=new T,c=new T,l=new T,h=new T,u=new T;if(t)for(let f=0,d=t.count;f<d;f+=3){let g=t.getX(f+0),v=t.getX(f+1),m=t.getX(f+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)pn.fromBufferAttribute(t,e),pn.normalize(),t.setXYZ(e,pn.x,pn.y,pn.z)}toNonIndexed(){function t(o,c){let l=o.array,h=o.itemSize,u=o.normalized,f=new l.constructor(c.length*h),d=0,g=0;for(let v=0,m=c.length;v<m;v++){o.isInterleavedBufferAttribute?d=c[v]*o.data.stride+o.offset:d=c[v]*h;for(let p=0;p<h;p++)f[g++]=l[d++]}return new Et(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,n=this.index.array,i=this.attributes;for(let o in i){let c=i[o],l=t(c,n);e.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let c=[],l=s[o];for(let h=0,u=l.length;h<u;h++){let f=l[h],d=t(f,n);c.push(d)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let i={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let d=l[u];h.push(d.toJSON(t.data))}h.length>0&&(i[c]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(e))}let s=t.morphAttributes;for(let l in s){let h=[],u=s[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},gm=new bt,$s=new cr,fc=new Qn,vm=new T,Nr=new T,kr=new T,Ur=new T,su=new T,dc=new T,pc=new at,mc=new at,gc=new at,xm=new T,bm=new T,ym=new T,vc=new T,xc=new T,Nt=class extends Le{constructor(t=new At,e=new Ye){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let o=this.morphTargetInfluences;if(s&&o){dc.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=o[c],u=s[c];h!==0&&(su.fromBufferAttribute(u,t),a?dc.addScaledVector(su,h):dc.addScaledVector(su.sub(e),h))}e.add(dc)}return e}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),fc.copy(n.boundingSphere),fc.applyMatrix4(s),$s.copy(t.ray).recast(t.near),!(fc.containsPoint($s.origin)===!1&&($s.intersectSphere(fc,vm)===null||$s.origin.distanceToSquared(vm)>(t.far-t.near)**2))&&(gm.copy(s).invert(),$s.copy(t.ray).applyMatrix4(gm),!(n.boundingBox!==null&&$s.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,$s)))}_computeIntersections(t,e,n){let i,s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){let m=f[g],p=a[m.materialIndex],x=Math.max(m.start,d.start),y=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let M=x,E=y;M<E;M+=3){let b=o.getX(M),w=o.getX(M+1),C=o.getX(M+2);i=bc(this,p,t,n,l,h,u,b,w,C),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){let x=o.getX(m),y=o.getX(m+1),M=o.getX(m+2);i=bc(this,a,t,n,l,h,u,x,y,M),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){let m=f[g],p=a[m.materialIndex],x=Math.max(m.start,d.start),y=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let M=x,E=y;M<E;M+=3){let b=M,w=M+1,C=M+2;i=bc(this,p,t,n,l,h,u,b,w,C),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,d.start),v=Math.min(c.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){let x=m,y=m+1,M=m+2;i=bc(this,a,t,n,l,h,u,x,y,M),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function Hb(r,t,e,n,i,s,a,o){let c;if(t.side===bn?c=n.intersectTriangle(a,s,i,!0,o):c=n.intersectTriangle(i,s,a,t.side===Hi,o),c===null)return null;xc.copy(o),xc.applyMatrix4(r.matrixWorld);let l=e.ray.origin.distanceTo(xc);return l<e.near||l>e.far?null:{distance:l,point:xc.clone(),object:r}}function bc(r,t,e,n,i,s,a,o,c,l){r.getVertexPosition(o,Nr),r.getVertexPosition(c,kr),r.getVertexPosition(l,Ur);let h=Hb(r,t,e,n,Nr,kr,Ur,vc);if(h){i&&(pc.fromBufferAttribute(i,o),mc.fromBufferAttribute(i,c),gc.fromBufferAttribute(i,l),h.uv=ir.getInterpolation(vc,Nr,kr,Ur,pc,mc,gc,new at)),s&&(pc.fromBufferAttribute(s,o),mc.fromBufferAttribute(s,c),gc.fromBufferAttribute(s,l),h.uv1=ir.getInterpolation(vc,Nr,kr,Ur,pc,mc,gc,new at),h.uv2=h.uv1),a&&(xm.fromBufferAttribute(a,o),bm.fromBufferAttribute(a,c),ym.fromBufferAttribute(a,l),h.normal=ir.getInterpolation(vc,Nr,kr,Ur,xm,bm,ym,new T),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new T,materialIndex:0};ir.getNormal(Nr,kr,Ur,u.normal),h.face=u}return h}var re=class r extends At{constructor(t=1,e=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};let o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);let c=[],l=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,n,e,t,a,s,0),g("z","y","x",1,-1,n,e,-t,a,s,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new yt(l,3)),this.setAttribute("normal",new yt(h,3)),this.setAttribute("uv",new yt(u,2));function g(v,m,p,x,y,M,E,b,w,C,_){let S=M/w,I=E/C,F=M/2,N=E/2,L=b/2,P=w+1,D=C+1,U=0,O=0,G=new T;for(let j=0;j<D;j++){let J=j*I-N;for(let it=0;it<P;it++){let z=it*S-F;G[v]=z*x,G[m]=J*y,G[p]=L,l.push(G.x,G.y,G.z),G[v]=0,G[m]=0,G[p]=b>0?1:-1,h.push(G.x,G.y,G.z),u.push(it/w),u.push(1-j/C),U+=1}}for(let j=0;j<C;j++)for(let J=0;J<w;J++){let it=f+J+P*j,z=f+J+P*(j+1),$=f+(J+1)+P*(j+1),lt=f+(J+1)+P*j;c.push(it,z,lt),c.push(z,$,lt),O+=6}o.addGroup(d,O,_),d+=O,f+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ra(r){let t={};for(let e in r){t[e]={};for(let n in r[e]){let i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Un(r){let t={};for(let e=0;e<r.length;e++){let n=ra(r[e]);for(let i in n)t[i]=n[i]}return t}function Nb(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function S0(r){return r.getRenderTarget()===null?r.outputColorSpace:ge.workingColorSpace}var kb={clone:ra,merge:Un},Ub=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ob=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ee=class extends _n{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ub,this.fragmentShader=Ob,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ra(t.uniforms),this.uniformsGroups=Nb(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Xc=class extends Le{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt,this.coordinateSystem=rs}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ue=class extends Xc{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=sa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(to*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return sa*2*Math.atan(Math.tan(to*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(to*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*i/c,e-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Or=-90,zr=1,Cu=class extends Le{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Ue(Or,zr,t,e);i.layers=this.layers,this.add(i);let s=new Ue(Or,zr,t,e);s.layers=this.layers,this.add(s);let a=new Ue(Or,zr,t,e);a.layers=this.layers,this.add(a);let o=new Ue(Or,zr,t,e);o.layers=this.layers,this.add(o);let c=new Ue(Or,zr,t,e);c.layers=this.layers,this.add(c);let l=new Ue(Or,zr,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,a,o,c]=e;for(let l of e)this.remove(l);if(t===rs)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Oc)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},jc=class extends yn{constructor(t,e,n,i,s,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:ta,super(t,e,n,i,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Pu=class extends mn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(no("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===ar?ue:Sn),this.texture=new jc(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:nn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new re(5,5,5),s=new Ee({name:"CubemapFromEquirect",uniforms:ra(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:bn,blending:As});s.uniforms.tEquirect.value=e;let a=new Nt(i,s),o=e.minFilter;return e.minFilter===Ni&&(e.minFilter=nn),new Cu(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){let s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(s)}},ru=new T,zb=new T,Bb=new le,_i=class{constructor(t=new T(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=ru.subVectors(n,e).cross(zb.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(ru),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Bb.getNormalMatrix(t),i=this.coplanarPoint(ru).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},tr=new Qn,yc=new T,lo=class{constructor(t=new _i,e=new _i,n=new _i,i=new _i,s=new _i,a=new _i){this.planes=[t,e,n,i,s,a]}set(t,e,n,i,s,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=rs){let n=this.planes,i=t.elements,s=i[0],a=i[1],o=i[2],c=i[3],l=i[4],h=i[5],u=i[6],f=i[7],d=i[8],g=i[9],v=i[10],m=i[11],p=i[12],x=i[13],y=i[14],M=i[15];if(n[0].setComponents(c-s,f-l,m-d,M-p).normalize(),n[1].setComponents(c+s,f+l,m+d,M+p).normalize(),n[2].setComponents(c+a,f+h,m+g,M+x).normalize(),n[3].setComponents(c-a,f-h,m-g,M-x).normalize(),n[4].setComponents(c-o,f-u,m-v,M-y).normalize(),e===rs)n[5].setComponents(c+o,f+u,m+v,M+y).normalize();else if(e===Oc)n[5].setComponents(o,u,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),tr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),tr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(tr)}intersectsSprite(t){return tr.center.set(0,0,0),tr.radius=.7071067811865476,tr.applyMatrix4(t.matrixWorld),this.intersectsSphere(tr)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(yc.x=i.normal.x>0?t.max.x:t.min.x,yc.y=i.normal.y>0?t.max.y:t.min.y,yc.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(yc)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function A0(){let r=null,t=!1,e=null,n=null;function i(s,a){e(s,a),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Gb(r,t){let e=t.isWebGL2,n=new WeakMap;function i(l,h){let u=l.array,f=l.usage,d=u.byteLength,g=r.createBuffer();r.bindBuffer(h,g),r.bufferData(h,u,f),l.onUploadCallback();let v;if(u instanceof Float32Array)v=r.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)v=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=r.UNSIGNED_SHORT;else if(u instanceof Int16Array)v=r.SHORT;else if(u instanceof Uint32Array)v=r.UNSIGNED_INT;else if(u instanceof Int32Array)v=r.INT;else if(u instanceof Int8Array)v=r.BYTE;else if(u instanceof Uint8Array)v=r.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)v=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:v,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:d}}function s(l,h,u){let f=h.array,d=h._updateRange,g=h.updateRanges;if(r.bindBuffer(u,l),d.count===-1&&g.length===0&&r.bufferSubData(u,0,f),g.length!==0){for(let v=0,m=g.length;v<m;v++){let p=g[v];e?r.bufferSubData(u,p.start*f.BYTES_PER_ELEMENT,f,p.start,p.count):r.bufferSubData(u,p.start*f.BYTES_PER_ELEMENT,f.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}d.count!==-1&&(e?r.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):r.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),h.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);h&&(r.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=n.get(l);if(u===void 0)n.set(l,i(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(u.buffer,l,h),u.version=l.version}}return{get:a,remove:o,update:c}}var Ei=class r extends At{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,a=e/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,u=t/o,f=e/c,d=[],g=[],v=[],m=[];for(let p=0;p<h;p++){let x=p*f-a;for(let y=0;y<l;y++){let M=y*u-s;g.push(M,-x,0),v.push(0,0,1),m.push(y/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let x=0;x<o;x++){let y=x+l*p,M=x+l*(p+1),E=x+1+l*(p+1),b=x+1+l*p;d.push(y,M,b),d.push(M,E,b)}this.setIndex(d),this.setAttribute("position",new yt(g,3)),this.setAttribute("normal",new yt(v,3)),this.setAttribute("uv",new yt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}},Vb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wb=`#ifdef USE_ALPHAHASH
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
#endif`,qb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jb=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Yb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kb=`#ifdef USE_AOMAP
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
#endif`,Jb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zb=`#ifdef USE_BATCHING
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
#endif`,Qb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,$b=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ty=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ey=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ny=`#ifdef USE_IRIDESCENCE
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
#endif`,iy=`#ifdef USE_BUMPMAP
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
#endif`,sy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ry=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ay=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,oy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ly=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,uy=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,fy=`#define PI 3.141592653589793
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
} // validated`,dy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,py=`vec3 transformedNormal = objectNormal;
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
#endif`,my=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,by="gl_FragColor = linearToOutputTexel( gl_FragColor );",yy=`
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
}`,_y=`#ifdef USE_ENVMAP
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
#endif`,My=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ey=`#ifdef USE_ENVMAP
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
#endif`,wy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ty=`#ifdef USE_ENVMAP
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
#endif`,Sy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ay=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ry=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Py=`#ifdef USE_GRADIENTMAP
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
}`,Ly=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Iy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hy=`uniform bool receiveShadow;
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
#endif`,Ny=`#ifdef USE_ENVMAP
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
#endif`,ky=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Uy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Oy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,By=`PhysicalMaterial material;
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
#endif`,Gy=`struct PhysicalMaterial {
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
}`,Vy=`
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
#endif`,Wy=`#if defined( RE_IndirectDiffuse )
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
#endif`,qy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xy=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jy=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yy=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ky=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Jy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$y=`#if defined( USE_POINTS_UV )
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
#endif`,t_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,e_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,n_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,i_=`#ifdef USE_MORPHNORMALS
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
#endif`,s_=`#ifdef USE_MORPHTARGETS
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
#endif`,r_=`#ifdef USE_MORPHTARGETS
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
#endif`,a_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,o_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,c_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,l_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,h_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,u_=`#ifdef USE_NORMALMAP
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
#endif`,f_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,d_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,p_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,m_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,g_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,v_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,x_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,b_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,y_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,__=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,M_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,E_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,w_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,T_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,S_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,A_=`float getShadowMask() {
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
}`,R_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,C_=`#ifdef USE_SKINNING
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
#endif`,P_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,L_=`#ifdef USE_SKINNING
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
#endif`,I_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,D_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,F_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,H_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,N_=`#ifdef USE_TRANSMISSION
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
#endif`,k_=`#ifdef USE_TRANSMISSION
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
#endif`,U_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,O_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,z_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,B_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,G_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,V_=`uniform sampler2D t2D;
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
}`,W_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,q_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,X_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,j_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Y_=`#include <common>
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
}`,K_=`#if DEPTH_PACKING == 3200
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
}`,J_=`#define DISTANCE
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
}`,Z_=`#define DISTANCE
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
}`,Q_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t1=`uniform float scale;
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
}`,e1=`uniform vec3 diffuse;
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
}`,n1=`#include <common>
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
}`,i1=`uniform vec3 diffuse;
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
}`,s1=`#define LAMBERT
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
}`,r1=`#define LAMBERT
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
}`,a1=`#define MATCAP
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
}`,o1=`#define MATCAP
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
}`,c1=`#define NORMAL
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
}`,l1=`#define NORMAL
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
}`,h1=`#define PHONG
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
}`,u1=`#define PHONG
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
}`,f1=`#define STANDARD
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
}`,d1=`#define STANDARD
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
}`,p1=`#define TOON
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
}`,m1=`#define TOON
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
}`,g1=`uniform float size;
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
}`,v1=`uniform vec3 diffuse;
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
}`,x1=`#include <common>
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
}`,b1=`uniform vec3 color;
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
}`,y1=`uniform float rotation;
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
}`,_1=`uniform vec3 diffuse;
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
}`,Jt={alphahash_fragment:Vb,alphahash_pars_fragment:Wb,alphamap_fragment:qb,alphamap_pars_fragment:Xb,alphatest_fragment:jb,alphatest_pars_fragment:Yb,aomap_fragment:Kb,aomap_pars_fragment:Jb,batching_pars_vertex:Zb,batching_vertex:Qb,begin_vertex:$b,beginnormal_vertex:ty,bsdfs:ey,iridescence_fragment:ny,bumpmap_pars_fragment:iy,clipping_planes_fragment:sy,clipping_planes_pars_fragment:ry,clipping_planes_pars_vertex:ay,clipping_planes_vertex:oy,color_fragment:cy,color_pars_fragment:ly,color_pars_vertex:hy,color_vertex:uy,common:fy,cube_uv_reflection_fragment:dy,defaultnormal_vertex:py,displacementmap_pars_vertex:my,displacementmap_vertex:gy,emissivemap_fragment:vy,emissivemap_pars_fragment:xy,colorspace_fragment:by,colorspace_pars_fragment:yy,envmap_fragment:_y,envmap_common_pars_fragment:My,envmap_pars_fragment:Ey,envmap_pars_vertex:wy,envmap_physical_pars_fragment:Ny,envmap_vertex:Ty,fog_vertex:Sy,fog_pars_vertex:Ay,fog_fragment:Ry,fog_pars_fragment:Cy,gradientmap_pars_fragment:Py,lightmap_fragment:Ly,lightmap_pars_fragment:Iy,lights_lambert_fragment:Dy,lights_lambert_pars_fragment:Fy,lights_pars_begin:Hy,lights_toon_fragment:ky,lights_toon_pars_fragment:Uy,lights_phong_fragment:Oy,lights_phong_pars_fragment:zy,lights_physical_fragment:By,lights_physical_pars_fragment:Gy,lights_fragment_begin:Vy,lights_fragment_maps:Wy,lights_fragment_end:qy,logdepthbuf_fragment:Xy,logdepthbuf_pars_fragment:jy,logdepthbuf_pars_vertex:Yy,logdepthbuf_vertex:Ky,map_fragment:Jy,map_pars_fragment:Zy,map_particle_fragment:Qy,map_particle_pars_fragment:$y,metalnessmap_fragment:t_,metalnessmap_pars_fragment:e_,morphcolor_vertex:n_,morphnormal_vertex:i_,morphtarget_pars_vertex:s_,morphtarget_vertex:r_,normal_fragment_begin:a_,normal_fragment_maps:o_,normal_pars_fragment:c_,normal_pars_vertex:l_,normal_vertex:h_,normalmap_pars_fragment:u_,clearcoat_normal_fragment_begin:f_,clearcoat_normal_fragment_maps:d_,clearcoat_pars_fragment:p_,iridescence_pars_fragment:m_,opaque_fragment:g_,packing:v_,premultiplied_alpha_fragment:x_,project_vertex:b_,dithering_fragment:y_,dithering_pars_fragment:__,roughnessmap_fragment:M_,roughnessmap_pars_fragment:E_,shadowmap_pars_fragment:w_,shadowmap_pars_vertex:T_,shadowmap_vertex:S_,shadowmask_pars_fragment:A_,skinbase_vertex:R_,skinning_pars_vertex:C_,skinning_vertex:P_,skinnormal_vertex:L_,specularmap_fragment:I_,specularmap_pars_fragment:D_,tonemapping_fragment:F_,tonemapping_pars_fragment:H_,transmission_fragment:N_,transmission_pars_fragment:k_,uv_pars_fragment:U_,uv_pars_vertex:O_,uv_vertex:z_,worldpos_vertex:B_,background_vert:G_,background_frag:V_,backgroundCube_vert:W_,backgroundCube_frag:q_,cube_vert:X_,cube_frag:j_,depth_vert:Y_,depth_frag:K_,distanceRGBA_vert:J_,distanceRGBA_frag:Z_,equirect_vert:Q_,equirect_frag:$_,linedashed_vert:t1,linedashed_frag:e1,meshbasic_vert:n1,meshbasic_frag:i1,meshlambert_vert:s1,meshlambert_frag:r1,meshmatcap_vert:a1,meshmatcap_frag:o1,meshnormal_vert:c1,meshnormal_frag:l1,meshphong_vert:h1,meshphong_frag:u1,meshphysical_vert:f1,meshphysical_frag:d1,meshtoon_vert:p1,meshtoon_frag:m1,points_vert:g1,points_frag:v1,shadow_vert:x1,shadow_frag:b1,sprite_vert:y1,sprite_frag:_1},gt={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new le}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new le},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0},uvTransform:{value:new le}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}}},Li={basic:{uniforms:Un([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:Un([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new et(0)}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:Un([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:Un([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:Un([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new et(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:Un([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:Un([gt.points,gt.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:Un([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:Un([gt.common,gt.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:Un([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:Un([gt.sprite,gt.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distanceRGBA:{uniforms:Un([gt.common,gt.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distanceRGBA_vert,fragmentShader:Jt.distanceRGBA_frag},shadow:{uniforms:Un([gt.lights,gt.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};Li.physical={uniforms:Un([Li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new le},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new le},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new le},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new le},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new le},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new le},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new le}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};var _c={r:0,b:0,g:0};function M1(r,t,e,n,i,s,a){let o=new et(0),c=s===!0?0:1,l,h,u=null,f=0,d=null;function g(m,p){let x=!1,y=p.isScene===!0?p.background:null;y&&y.isTexture&&(y=(p.backgroundBlurriness>0?e:t).get(y)),y===null?v(o,c):y&&y.isColor&&(v(y,1),x=!0);let M=r.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||x)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),y&&(y.isCubeTexture||y.mapping===ll)?(h===void 0&&(h=new Nt(new re(1,1,1),new Ee({name:"BackgroundCubeMaterial",uniforms:ra(Li.backgroundCube.uniforms),vertexShader:Li.backgroundCube.vertexShader,fragmentShader:Li.backgroundCube.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,b,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=ge.getTransfer(y.colorSpace)!==ke,(u!==y||f!==y.version||d!==r.toneMapping)&&(h.material.needsUpdate=!0,u=y,f=y.version,d=r.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Nt(new Ei(2,2),new Ee({name:"BackgroundMaterial",uniforms:ra(Li.background.uniforms),vertexShader:Li.background.vertexShader,fragmentShader:Li.background.fragmentShader,side:Hi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=ge.getTransfer(y.colorSpace)!==ke,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||d!==r.toneMapping)&&(l.material.needsUpdate=!0,u=y,f=y.version,d=r.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function v(m,p){m.getRGB(_c,S0(r)),n.buffers.color.setClear(_c.r,_c.g,_c.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),c=p,v(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,v(o,c)},render:g}}function E1(r,t,e,n){let i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},c=m(null),l=c,h=!1;function u(L,P,D,U,O){let G=!1;if(a){let j=v(U,D,P);l!==j&&(l=j,d(l.object)),G=p(L,U,D,O),G&&x(L,U,D,O)}else{let j=P.wireframe===!0;(l.geometry!==U.id||l.program!==D.id||l.wireframe!==j)&&(l.geometry=U.id,l.program=D.id,l.wireframe=j,G=!0)}O!==null&&e.update(O,r.ELEMENT_ARRAY_BUFFER),(G||h)&&(h=!1,C(L,P,D,U),O!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function f(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function d(L){return n.isWebGL2?r.bindVertexArray(L):s.bindVertexArrayOES(L)}function g(L){return n.isWebGL2?r.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function v(L,P,D){let U=D.wireframe===!0,O=o[L.id];O===void 0&&(O={},o[L.id]=O);let G=O[P.id];G===void 0&&(G={},O[P.id]=G);let j=G[U];return j===void 0&&(j=m(f()),G[U]=j),j}function m(L){let P=[],D=[],U=[];for(let O=0;O<i;O++)P[O]=0,D[O]=0,U[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:D,attributeDivisors:U,object:L,attributes:{},index:null}}function p(L,P,D,U){let O=l.attributes,G=P.attributes,j=0,J=D.getAttributes();for(let it in J)if(J[it].location>=0){let $=O[it],lt=G[it];if(lt===void 0&&(it==="instanceMatrix"&&L.instanceMatrix&&(lt=L.instanceMatrix),it==="instanceColor"&&L.instanceColor&&(lt=L.instanceColor)),$===void 0||$.attribute!==lt||lt&&$.data!==lt.data)return!0;j++}return l.attributesNum!==j||l.index!==U}function x(L,P,D,U){let O={},G=P.attributes,j=0,J=D.getAttributes();for(let it in J)if(J[it].location>=0){let $=G[it];$===void 0&&(it==="instanceMatrix"&&L.instanceMatrix&&($=L.instanceMatrix),it==="instanceColor"&&L.instanceColor&&($=L.instanceColor));let lt={};lt.attribute=$,$&&$.data&&(lt.data=$.data),O[it]=lt,j++}l.attributes=O,l.attributesNum=j,l.index=U}function y(){let L=l.newAttributes;for(let P=0,D=L.length;P<D;P++)L[P]=0}function M(L){E(L,0)}function E(L,P){let D=l.newAttributes,U=l.enabledAttributes,O=l.attributeDivisors;D[L]=1,U[L]===0&&(r.enableVertexAttribArray(L),U[L]=1),O[L]!==P&&((n.isWebGL2?r:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,P),O[L]=P)}function b(){let L=l.newAttributes,P=l.enabledAttributes;for(let D=0,U=P.length;D<U;D++)P[D]!==L[D]&&(r.disableVertexAttribArray(D),P[D]=0)}function w(L,P,D,U,O,G,j){j===!0?r.vertexAttribIPointer(L,P,D,O,G):r.vertexAttribPointer(L,P,D,U,O,G)}function C(L,P,D,U){if(n.isWebGL2===!1&&(L.isInstancedMesh||U.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;y();let O=U.attributes,G=D.getAttributes(),j=P.defaultAttributeValues;for(let J in G){let it=G[J];if(it.location>=0){let z=O[J];if(z===void 0&&(J==="instanceMatrix"&&L.instanceMatrix&&(z=L.instanceMatrix),J==="instanceColor"&&L.instanceColor&&(z=L.instanceColor)),z!==void 0){let $=z.normalized,lt=z.itemSize,ht=e.get(z);if(ht===void 0)continue;let _t=ht.buffer,Ut=ht.type,Xt=ht.bytesPerElement,Ft=n.isWebGL2===!0&&(Ut===r.INT||Ut===r.UNSIGNED_INT||z.gpuType===p0);if(z.isInterleavedBufferAttribute){let ne=z.data,K=ne.stride,Ge=z.offset;if(ne.isInstancedInterleavedBuffer){for(let Ot=0;Ot<it.locationSize;Ot++)E(it.location+Ot,ne.meshPerAttribute);L.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Ot=0;Ot<it.locationSize;Ot++)M(it.location+Ot);r.bindBuffer(r.ARRAY_BUFFER,_t);for(let Ot=0;Ot<it.locationSize;Ot++)w(it.location+Ot,lt/it.locationSize,Ut,$,K*Xt,(Ge+lt/it.locationSize*Ot)*Xt,Ft)}else{if(z.isInstancedBufferAttribute){for(let ne=0;ne<it.locationSize;ne++)E(it.location+ne,z.meshPerAttribute);L.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let ne=0;ne<it.locationSize;ne++)M(it.location+ne);r.bindBuffer(r.ARRAY_BUFFER,_t);for(let ne=0;ne<it.locationSize;ne++)w(it.location+ne,lt/it.locationSize,Ut,$,lt*Xt,lt/it.locationSize*ne*Xt,Ft)}}else if(j!==void 0){let $=j[J];if($!==void 0)switch($.length){case 2:r.vertexAttrib2fv(it.location,$);break;case 3:r.vertexAttrib3fv(it.location,$);break;case 4:r.vertexAttrib4fv(it.location,$);break;default:r.vertexAttrib1fv(it.location,$)}}}}b()}function _(){F();for(let L in o){let P=o[L];for(let D in P){let U=P[D];for(let O in U)g(U[O].object),delete U[O];delete P[D]}delete o[L]}}function S(L){if(o[L.id]===void 0)return;let P=o[L.id];for(let D in P){let U=P[D];for(let O in U)g(U[O].object),delete U[O];delete P[D]}delete o[L.id]}function I(L){for(let P in o){let D=o[P];if(D[L.id]===void 0)continue;let U=D[L.id];for(let O in U)g(U[O].object),delete U[O];delete D[L.id]}}function F(){N(),h=!0,l!==c&&(l=c,d(l.object))}function N(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:F,resetDefaultState:N,dispose:_,releaseStatesOfGeometry:S,releaseStatesOfProgram:I,initAttributes:y,enableAttribute:M,disableUnusedAttributes:b}}function w1(r,t,e,n){let i=n.isWebGL2,s;function a(h){s=h}function o(h,u){r.drawArrays(s,h,u),e.update(u,s,1)}function c(h,u,f){if(f===0)return;let d,g;if(i)d=r,g="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[g](s,h,u,f),e.update(u,s,f)}function l(h,u,f){if(f===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<f;g++)this.render(h[g],u[g]);else{d.multiDrawArraysWEBGL(s,h,0,u,0,f);let g=0;for(let v=0;v<f;v++)g+=u[v];e.update(g,s,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=l}function T1(r,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext",o=e.precision!==void 0?e.precision:"highp",c=s(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);let l=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),m=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),p=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),y=f>0,M=a||t.has("OES_texture_float"),E=y&&M,b=a?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:x,vertexTextures:y,floatFragmentTextures:M,floatVertexTextures:E,maxSamples:b}}function S1(r){let t=this,e=null,n=0,i=!1,s=!1,a=new _i,o=new le,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=r.get(u);if(!i||g===null||g.length===0||s&&!m)s?h(null):l();else{let x=s?0:n,y=x*4,M=p.clippingState||null;c.value=M,M=h(g,f,y,d);for(let E=0;E!==y;++E)M[E]=e[E];p.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,g){let v=u!==null?u.length:0,m=null;if(v!==0){if(m=c.value,g!==!0||m===null){let p=d+v*4,x=f.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,M=d;y!==v;++y,M+=4)a.copy(u[y]).applyMatrix4(x,o),a.normal.toArray(m,M),m[M+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function A1(r){let t=new WeakMap;function e(a,o){return o===Mu?a.mapping=ta:o===Eu&&(a.mapping=ea),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Mu||o===Eu)if(t.has(a)){let c=t.get(a).texture;return e(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new Pu(c.height/2);return l.fromEquirectangularTexture(r,a),t.set(a,l),a.addEventListener("dispose",i),e(l.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}var Cs=class extends Xc{constructor(t=-1,e=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,a=n+t,o=i+e,c=i-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Kr=4,_m=[.125,.215,.35,.446,.526,.582],nr=20,au=new Cs,Mm=new et,ou=null,cu=0,lu=0,er=(1+Math.sqrt(5))/2,Br=1/er,Em=[new T(1,1,1),new T(-1,1,1),new T(1,1,-1),new T(-1,1,-1),new T(0,er,Br),new T(0,er,-Br),new T(Br,0,er),new T(-Br,0,er),new T(er,Br,0),new T(-er,Br,0)],aa=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){ou=this._renderer.getRenderTarget(),cu=this._renderer.getActiveCubeFace(),lu=this._renderer.getActiveMipmapLevel(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ou,cu,lu),t.scissorTest=!1,Mc(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ta||t.mapping===ea?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ou=this._renderer.getRenderTarget(),cu=this._renderer.getActiveCubeFace(),lu=this._renderer.getActiveMipmapLevel();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:Wn,format:ai,colorSpace:rn,depthBuffer:!1},i=wm(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wm(t,e,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=R1(s)),this._blurMaterial=C1(s,t,e)}return i}_compileMaterial(t){let e=new Nt(this._lodPlanes[0],t);this._renderer.compile(e,au)}_sceneToCubeUV(t,e,n,i){let o=new Ue(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Mm),h.toneMapping=Rs,h.autoClear=!1;let d=new Ye({name:"PMREM.Background",side:bn,depthWrite:!1,depthTest:!1}),g=new Nt(new re,d),v=!1,m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,v=!0):(d.color.copy(Mm),v=!0);for(let p=0;p<6;p++){let x=p%3;x===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):x===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));let y=this._cubeSize;Mc(i,x*y,p>2?y:0,y,y),h.setRenderTarget(i),v&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===ta||t.mapping===ea;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sm()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tm());let s=i?this._cubemapMaterial:this._equirectMaterial,a=new Nt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;let c=this._cubeSize;Mc(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,au)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Em[(i-1)%Em.length];this._blur(t,i-1,i,s,a)}e.autoClear=n}_blur(t,e,n,i,s){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",s),this._halfBlur(a,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Nt(this._lodPlanes[i],l),f=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*nr-1),v=s/g,m=isFinite(s)?1+Math.floor(h*v):nr;m>nr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${nr}`);let p=[],x=0;for(let w=0;w<nr;++w){let C=w/v,_=Math.exp(-C*C/2);p.push(_),w===0?x+=_:w<m&&(x+=2*_)}for(let w=0;w<p.length;w++)p[w]=p[w]/x;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-n;let M=this._sizeLods[i],E=3*M*(i>y-Kr?i-y+Kr:0),b=4*(this._cubeSize-M);Mc(e,E,b,3*M,2*M),c.setRenderTarget(e),c.render(u,au)}};function R1(r){let t=[],e=[],n=[],i=r,s=r-Kr+1+_m.length;for(let a=0;a<s;a++){let o=Math.pow(2,i);e.push(o);let c=1/o;a>r-Kr?c=_m[a-r+Kr-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,v=3,m=2,p=1,x=new Float32Array(v*g*d),y=new Float32Array(m*g*d),M=new Float32Array(p*g*d);for(let b=0;b<d;b++){let w=b%3*2/3-1,C=b>2?0:-1,_=[w,C,0,w+2/3,C,0,w+2/3,C+1,0,w,C,0,w+2/3,C+1,0,w,C+1,0];x.set(_,v*g*b),y.set(f,m*g*b);let S=[b,b,b,b,b,b];M.set(S,p*g*b)}let E=new At;E.setAttribute("position",new Et(x,v)),E.setAttribute("uv",new Et(y,m)),E.setAttribute("faceIndex",new Et(M,p)),t.push(E),i>Kr&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function wm(r,t,e){let n=new mn(r,t,e);return n.texture.mapping=ll,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Mc(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function C1(r,t,e){let n=new Float32Array(nr),i=new T(0,1,0);return new Ee({name:"SphericalGaussianBlur",defines:{n:nr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Af(),fragmentShader:`

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
		`,blending:As,depthTest:!1,depthWrite:!1})}function Tm(){return new Ee({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Af(),fragmentShader:`

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
		`,blending:As,depthTest:!1,depthWrite:!1})}function Sm(){return new Ee({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Af(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:As,depthTest:!1,depthWrite:!1})}function Af(){return`

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
	`}function P1(r){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===Mu||c===Eu,h=c===ta||c===ea;if(l||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=t.get(o);return e===null&&(e=new aa(r)),u=l?e.fromEquirectangular(o,u):e.fromCubemap(o,u),t.set(o,u),u.texture}else{if(t.has(o))return t.get(o).texture;{let u=o.image;if(l&&u&&u.height>0||h&&u&&i(u)){e===null&&(e=new aa(r));let f=l?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,f),o.addEventListener("dispose",s),f.texture}else return null}}}return o}function i(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function s(o){let c=o.target;c.removeEventListener("dispose",s);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function L1(r){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function I1(r,t,e,n){let i={},s=new WeakMap;function a(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);for(let g in f.morphAttributes){let v=f.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)t.remove(v[m])}f.removeEventListener("dispose",a),delete i[f.id];let d=s.get(f);d&&(t.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,e.memory.geometries++),f}function c(u){let f=u.attributes;for(let g in f)t.update(f[g],r.ARRAY_BUFFER);let d=u.morphAttributes;for(let g in d){let v=d[g];for(let m=0,p=v.length;m<p;m++)t.update(v[m],r.ARRAY_BUFFER)}}function l(u){let f=[],d=u.index,g=u.attributes.position,v=0;if(d!==null){let x=d.array;v=d.version;for(let y=0,M=x.length;y<M;y+=3){let E=x[y+0],b=x[y+1],w=x[y+2];f.push(E,b,b,w,w,E)}}else if(g!==void 0){let x=g.array;v=g.version;for(let y=0,M=x.length/3-1;y<M;y+=3){let E=y+0,b=y+1,w=y+2;f.push(E,b,b,w,w,E)}}else return;let m=new(w0(f)?qc:Wc)(f,1);m.version=v;let p=s.get(u);p&&t.remove(p),s.set(u,m)}function h(u){let f=s.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return s.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function D1(r,t,e,n){let i=n.isWebGL2,s;function a(d){s=d}let o,c;function l(d){o=d.type,c=d.bytesPerElement}function h(d,g){r.drawElements(s,g,o,d*c),e.update(g,s,1)}function u(d,g,v){if(v===0)return;let m,p;if(i)m=r,p="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](s,g,o,d*c,v),e.update(g,s,v)}function f(d,g,v){if(v===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<v;p++)this.render(d[p]/c,g[p]);else{m.multiDrawElementsWEBGL(s,g,0,o,d,0,v);let p=0;for(let x=0;x<v;x++)p+=g[x];e.update(p,s,1)}}this.setMode=a,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function F1(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function H1(r,t){return r[0]-t[0]}function N1(r,t){return Math.abs(t[1])-Math.abs(r[1])}function k1(r,t,e){let n={},i=new Float32Array(8),s=new WeakMap,a=new he,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,h,u){let f=l.morphTargetInfluences;if(t.isWebGL2===!0){let d=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=d!==void 0?d.length:0,v=s.get(h);if(v===void 0||v.count!==g){let L=function(){F.dispose(),s.delete(h),h.removeEventListener("dispose",L)};v!==void 0&&v.texture.dispose();let x=h.morphAttributes.position!==void 0,y=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,E=h.morphAttributes.position||[],b=h.morphAttributes.normal||[],w=h.morphAttributes.color||[],C=0;x===!0&&(C=1),y===!0&&(C=2),M===!0&&(C=3);let _=h.attributes.position.count*C,S=1;_>t.maxTextureSize&&(S=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let I=new Float32Array(_*S*4*g),F=new Vc(I,_,S,g);F.type=ss,F.needsUpdate=!0;let N=C*4;for(let P=0;P<g;P++){let D=E[P],U=b[P],O=w[P],G=_*S*4*P;for(let j=0;j<D.count;j++){let J=j*N;x===!0&&(a.fromBufferAttribute(D,j),I[G+J+0]=a.x,I[G+J+1]=a.y,I[G+J+2]=a.z,I[G+J+3]=0),y===!0&&(a.fromBufferAttribute(U,j),I[G+J+4]=a.x,I[G+J+5]=a.y,I[G+J+6]=a.z,I[G+J+7]=0),M===!0&&(a.fromBufferAttribute(O,j),I[G+J+8]=a.x,I[G+J+9]=a.y,I[G+J+10]=a.z,I[G+J+11]=O.itemSize===4?a.w:1)}}v={count:g,texture:F,size:new at(_,S)},s.set(h,v),h.addEventListener("dispose",L)}let m=0;for(let x=0;x<f.length;x++)m+=f[x];let p=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(r,"morphTargetBaseInfluence",p),u.getUniforms().setValue(r,"morphTargetInfluences",f),u.getUniforms().setValue(r,"morphTargetsTexture",v.texture,e),u.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}else{let d=f===void 0?0:f.length,g=n[h.id];if(g===void 0||g.length!==d){g=[];for(let y=0;y<d;y++)g[y]=[y,0];n[h.id]=g}for(let y=0;y<d;y++){let M=g[y];M[0]=y,M[1]=f[y]}g.sort(N1);for(let y=0;y<8;y++)y<d&&g[y][1]?(o[y][0]=g[y][0],o[y][1]=g[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(H1);let v=h.morphAttributes.position,m=h.morphAttributes.normal,p=0;for(let y=0;y<8;y++){let M=o[y],E=M[0],b=M[1];E!==Number.MAX_SAFE_INTEGER&&b?(v&&h.getAttribute("morphTarget"+y)!==v[E]&&h.setAttribute("morphTarget"+y,v[E]),m&&h.getAttribute("morphNormal"+y)!==m[E]&&h.setAttribute("morphNormal"+y,m[E]),i[y]=b,p+=b):(v&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),m&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),i[y]=0)}let x=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(r,"morphTargetBaseInfluence",x),u.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:c}}function U1(r,t,e,n){let i=new WeakMap;function s(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(i.get(u)!==l&&(t.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(e.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return u}function a(){i=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:a}}var oa=class extends yn{constructor(t,e,n,i,s,a,o,c,l,h){if(h=h!==void 0?h:rr,h!==rr&&h!==na)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===rr&&(n=Di),n===void 0&&h===na&&(n=sr),super(null,i,s,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:$e,this.minFilter=c!==void 0?c:$e,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},R0=new yn,C0=new oa(1,1);C0.compareFunction=E0;var P0=new Vc,L0=new Ru,I0=new jc,Am=[],Rm=[],Cm=new Float32Array(16),Pm=new Float32Array(9),Lm=new Float32Array(4);function ma(r,t,e){let n=r[0];if(n<=0||n>0)return r;let i=t*e,s=Am[i];if(s===void 0&&(s=new Float32Array(i),Am[i]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function an(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function on(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function fl(r,t){let e=Rm[t];e===void 0&&(e=new Int32Array(t),Rm[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function O1(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function z1(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(an(e,t))return;r.uniform2fv(this.addr,t),on(e,t)}}function B1(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(an(e,t))return;r.uniform3fv(this.addr,t),on(e,t)}}function G1(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(an(e,t))return;r.uniform4fv(this.addr,t),on(e,t)}}function V1(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(an(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),on(e,t)}else{if(an(e,n))return;Lm.set(n),r.uniformMatrix2fv(this.addr,!1,Lm),on(e,n)}}function W1(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(an(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),on(e,t)}else{if(an(e,n))return;Pm.set(n),r.uniformMatrix3fv(this.addr,!1,Pm),on(e,n)}}function q1(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(an(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),on(e,t)}else{if(an(e,n))return;Cm.set(n),r.uniformMatrix4fv(this.addr,!1,Cm),on(e,n)}}function X1(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function j1(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(an(e,t))return;r.uniform2iv(this.addr,t),on(e,t)}}function Y1(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(an(e,t))return;r.uniform3iv(this.addr,t),on(e,t)}}function K1(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(an(e,t))return;r.uniform4iv(this.addr,t),on(e,t)}}function J1(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function Z1(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(an(e,t))return;r.uniform2uiv(this.addr,t),on(e,t)}}function Q1(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(an(e,t))return;r.uniform3uiv(this.addr,t),on(e,t)}}function $1(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(an(e,t))return;r.uniform4uiv(this.addr,t),on(e,t)}}function tM(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s=this.type===r.SAMPLER_2D_SHADOW?C0:R0;e.setTexture2D(t||s,i)}function eM(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||L0,i)}function nM(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||I0,i)}function iM(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||P0,i)}function sM(r){switch(r){case 5126:return O1;case 35664:return z1;case 35665:return B1;case 35666:return G1;case 35674:return V1;case 35675:return W1;case 35676:return q1;case 5124:case 35670:return X1;case 35667:case 35671:return j1;case 35668:case 35672:return Y1;case 35669:case 35673:return K1;case 5125:return J1;case 36294:return Z1;case 36295:return Q1;case 36296:return $1;case 35678:case 36198:case 36298:case 36306:case 35682:return tM;case 35679:case 36299:case 36307:return eM;case 35680:case 36300:case 36308:case 36293:return nM;case 36289:case 36303:case 36311:case 36292:return iM}}function rM(r,t){r.uniform1fv(this.addr,t)}function aM(r,t){let e=ma(t,this.size,2);r.uniform2fv(this.addr,e)}function oM(r,t){let e=ma(t,this.size,3);r.uniform3fv(this.addr,e)}function cM(r,t){let e=ma(t,this.size,4);r.uniform4fv(this.addr,e)}function lM(r,t){let e=ma(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function hM(r,t){let e=ma(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function uM(r,t){let e=ma(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function fM(r,t){r.uniform1iv(this.addr,t)}function dM(r,t){r.uniform2iv(this.addr,t)}function pM(r,t){r.uniform3iv(this.addr,t)}function mM(r,t){r.uniform4iv(this.addr,t)}function gM(r,t){r.uniform1uiv(this.addr,t)}function vM(r,t){r.uniform2uiv(this.addr,t)}function xM(r,t){r.uniform3uiv(this.addr,t)}function bM(r,t){r.uniform4uiv(this.addr,t)}function yM(r,t,e){let n=this.cache,i=t.length,s=fl(e,i);an(n,s)||(r.uniform1iv(this.addr,s),on(n,s));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||R0,s[a])}function _M(r,t,e){let n=this.cache,i=t.length,s=fl(e,i);an(n,s)||(r.uniform1iv(this.addr,s),on(n,s));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||L0,s[a])}function MM(r,t,e){let n=this.cache,i=t.length,s=fl(e,i);an(n,s)||(r.uniform1iv(this.addr,s),on(n,s));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||I0,s[a])}function EM(r,t,e){let n=this.cache,i=t.length,s=fl(e,i);an(n,s)||(r.uniform1iv(this.addr,s),on(n,s));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||P0,s[a])}function wM(r){switch(r){case 5126:return rM;case 35664:return aM;case 35665:return oM;case 35666:return cM;case 35674:return lM;case 35675:return hM;case 35676:return uM;case 5124:case 35670:return fM;case 35667:case 35671:return dM;case 35668:case 35672:return pM;case 35669:case 35673:return mM;case 5125:return gM;case 36294:return vM;case 36295:return xM;case 36296:return bM;case 35678:case 36198:case 36298:case 36306:case 35682:return yM;case 35679:case 36299:case 36307:return _M;case 35680:case 36300:case 36308:case 36293:return MM;case 36289:case 36303:case 36311:case 36292:return EM}}var Lu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=sM(e.type)}},Iu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=wM(e.type)}},Du=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,a=i.length;s!==a;++s){let o=i[s];o.setValue(t,e[o.id],n)}}},hu=/(\w+)(\])?(\[|\.)?/g;function Im(r,t){r.seq.push(t),r.map[t.id]=t}function TM(r,t,e){let n=r.name,i=n.length;for(hu.lastIndex=0;;){let s=hu.exec(n),a=hu.lastIndex,o=s[1],c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){Im(e,l===void 0?new Lu(o,r,t):new Iu(o,r,t));break}else{let u=e.map[o];u===void 0&&(u=new Du(o),Im(e,u)),e=u}}}var $r=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let s=t.getActiveUniform(e,i),a=t.getUniformLocation(e,s.name);TM(s,a,this)}}setValue(t,e,n,i){let s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,a=e.length;s!==a;++s){let o=e[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let a=t[i];a.id in e&&n.push(a)}return n}};function Dm(r,t,e){let n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}var SM=37297,AM=0;function RM(r,t){let e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=i;a<s;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function CM(r){let t=ge.getPrimaries(ge.workingColorSpace),e=ge.getPrimaries(r),n;switch(t===e?n="":t===Uc&&e===kc?n="LinearDisplayP3ToLinearSRGB":t===kc&&e===Uc&&(n="LinearSRGBToLinearDisplayP3"),r){case rn:case ul:return[n,"LinearTransferOETF"];case ue:case Tf:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function Fm(r,t,e){let n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let a=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+RM(r.getShaderSource(t),a)}else return i}function PM(r,t){let e=CM(t);return`vec4 ${r}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function LM(r,t){let e;switch(t){case Nx:e="Linear";break;case kx:e="Reinhard";break;case Ux:e="OptimizedCineon";break;case vf:e="ACESFilmic";break;case zx:e="AgX";break;case Ox:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function IM(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Jr).join(`
`)}function DM(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Jr).join(`
`)}function FM(r){let t=[];for(let e in r){let n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function HM(r,t){let e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(t,i),a=s.name,o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function Jr(r){return r!==""}function Hm(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Nm(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var NM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fu(r){return r.replace(NM,UM)}var kM=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function UM(r,t){let e=Jt[t];if(e===void 0){let n=kM.get(t);if(n!==void 0)e=Jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Fu(e)}var OM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function km(r){return r.replace(OM,zM)}function zM(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Um(r){let t="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function BM(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===f0?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===ff?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ns&&(t="SHADOWMAP_TYPE_VSM"),t}function GM(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ta:case ea:t="ENVMAP_TYPE_CUBE";break;case ll:t="ENVMAP_TYPE_CUBE_UV";break}return t}function VM(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case ea:t="ENVMAP_MODE_REFRACTION";break}return t}function WM(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case gf:t="ENVMAP_BLENDING_MULTIPLY";break;case Fx:t="ENVMAP_BLENDING_MIX";break;case Hx:t="ENVMAP_BLENDING_ADD";break}return t}function qM(r){let t=r.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function XM(r,t,e,n){let i=r.getContext(),s=e.defines,a=e.vertexShader,o=e.fragmentShader,c=BM(e),l=GM(e),h=VM(e),u=WM(e),f=qM(e),d=e.isWebGL2?"":IM(e),g=DM(e),v=FM(s),m=i.createProgram(),p,x,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Jr).join(`
`),p.length>0&&(p+=`
`),x=[d,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Jr).join(`
`),x.length>0&&(x+=`
`)):(p=[Um(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Jr).join(`
`),x=[d,Um(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Rs?"#define TONE_MAPPING":"",e.toneMapping!==Rs?Jt.tonemapping_pars_fragment:"",e.toneMapping!==Rs?LM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,PM("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Jr).join(`
`)),a=Fu(a),a=Hm(a,e),a=Nm(a,e),o=Fu(o),o=Hm(o,e),o=Nm(o,e),a=km(a),o=km(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,x=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===im?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===im?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);let M=y+p+a,E=y+x+o,b=Dm(i,i.VERTEX_SHADER,M),w=Dm(i,i.FRAGMENT_SHADER,E);i.attachShader(m,b),i.attachShader(m,w),e.index0AttributeName!==void 0?i.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function C(F){if(r.debug.checkShaderErrors){let N=i.getProgramInfoLog(m).trim(),L=i.getShaderInfoLog(b).trim(),P=i.getShaderInfoLog(w).trim(),D=!0,U=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(D=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,m,b,w);else{let O=Fm(i,b,"vertex"),G=Fm(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+N+`
`+O+`
`+G)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(L===""||P==="")&&(U=!1);U&&(F.diagnostics={runnable:D,programLog:N,vertexShader:{log:L,prefix:p},fragmentShader:{log:P,prefix:x}})}i.deleteShader(b),i.deleteShader(w),_=new $r(i,m),S=HM(i,m)}let _;this.getUniforms=function(){return _===void 0&&C(this),_};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let I=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=i.getProgramParameter(m,SM)),I},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=AM++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=w,this}var jM=0,Hu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Nu(t),e.set(t,n)),n}},Nu=class{constructor(t){this.id=jM++,this.code=t,this.usedTimes=0}};function YM(r,t,e,n,i,s,a){let o=new co,c=new Hu,l=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,f=i.vertexTextures,d=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(_){return _===0?"uv":`uv${_}`}function m(_,S,I,F,N){let L=F.fog,P=N.geometry,D=_.isMeshStandardMaterial?F.environment:null,U=(_.isMeshStandardMaterial?e:t).get(_.envMap||D),O=U&&U.mapping===ll?U.image.height:null,G=g[_.type];_.precision!==null&&(d=i.getMaxPrecision(_.precision),d!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));let j=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,J=j!==void 0?j.length:0,it=0;P.morphAttributes.position!==void 0&&(it=1),P.morphAttributes.normal!==void 0&&(it=2),P.morphAttributes.color!==void 0&&(it=3);let z,$,lt,ht;if(G){let Hn=Li[G];z=Hn.vertexShader,$=Hn.fragmentShader}else z=_.vertexShader,$=_.fragmentShader,c.update(_),lt=c.getVertexShaderID(_),ht=c.getFragmentShaderID(_);let _t=r.getRenderTarget(),Ut=N.isInstancedMesh===!0,Xt=N.isBatchedMesh===!0,Ft=!!_.map,ne=!!_.matcap,K=!!U,Ge=!!_.aoMap,Ot=!!_.lightMap,Yt=!!_.bumpMap,It=!!_.normalMap,Ce=!!_.displacementMap,Qt=!!_.emissiveMap,R=!!_.metalnessMap,A=!!_.roughnessMap,k=_.anisotropy>0,V=_.clearcoat>0,Y=_.iridescence>0,W=_.sheen>0,ot=_.transmission>0,st=k&&!!_.anisotropyMap,ct=V&&!!_.clearcoatMap,ut=V&&!!_.clearcoatNormalMap,vt=V&&!!_.clearcoatRoughnessMap,Z=Y&&!!_.iridescenceMap,wt=Y&&!!_.iridescenceThicknessMap,Rt=W&&!!_.sheenColorMap,Lt=W&&!!_.sheenRoughnessMap,Mt=!!_.specularMap,pt=!!_.specularColorMap,Bt=!!_.specularIntensityMap,te=ot&&!!_.transmissionMap,se=ot&&!!_.thicknessMap,Kt=!!_.gradientMap,ft=!!_.alphaMap,B=_.alphaTest>0,xt=!!_.alphaHash,mt=!!_.extensions,Wt=!!P.attributes.uv1,Gt=!!P.attributes.uv2,Me=!!P.attributes.uv3,De=Rs;return _.toneMapped&&(_t===null||_t.isXRRenderTarget===!0)&&(De=r.toneMapping),{isWebGL2:h,shaderID:G,shaderType:_.type,shaderName:_.name,vertexShader:z,fragmentShader:$,defines:_.defines,customVertexShaderID:lt,customFragmentShaderID:ht,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:Xt,instancing:Ut,instancingColor:Ut&&N.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:_t===null?r.outputColorSpace:_t.isXRRenderTarget===!0?_t.texture.colorSpace:rn,map:Ft,matcap:ne,envMap:K,envMapMode:K&&U.mapping,envMapCubeUVHeight:O,aoMap:Ge,lightMap:Ot,bumpMap:Yt,normalMap:It,displacementMap:f&&Ce,emissiveMap:Qt,normalMapObjectSpace:It&&_.normalMapType===$x,normalMapTangentSpace:It&&_.normalMapType===wf,metalnessMap:R,roughnessMap:A,anisotropy:k,anisotropyMap:st,clearcoat:V,clearcoatMap:ct,clearcoatNormalMap:ut,clearcoatRoughnessMap:vt,iridescence:Y,iridescenceMap:Z,iridescenceThicknessMap:wt,sheen:W,sheenColorMap:Rt,sheenRoughnessMap:Lt,specularMap:Mt,specularColorMap:pt,specularIntensityMap:Bt,transmission:ot,transmissionMap:te,thicknessMap:se,gradientMap:Kt,opaque:_.transparent===!1&&_.blending===Zr,alphaMap:ft,alphaTest:B,alphaHash:xt,combine:_.combine,mapUv:Ft&&v(_.map.channel),aoMapUv:Ge&&v(_.aoMap.channel),lightMapUv:Ot&&v(_.lightMap.channel),bumpMapUv:Yt&&v(_.bumpMap.channel),normalMapUv:It&&v(_.normalMap.channel),displacementMapUv:Ce&&v(_.displacementMap.channel),emissiveMapUv:Qt&&v(_.emissiveMap.channel),metalnessMapUv:R&&v(_.metalnessMap.channel),roughnessMapUv:A&&v(_.roughnessMap.channel),anisotropyMapUv:st&&v(_.anisotropyMap.channel),clearcoatMapUv:ct&&v(_.clearcoatMap.channel),clearcoatNormalMapUv:ut&&v(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:vt&&v(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Z&&v(_.iridescenceMap.channel),iridescenceThicknessMapUv:wt&&v(_.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&v(_.sheenColorMap.channel),sheenRoughnessMapUv:Lt&&v(_.sheenRoughnessMap.channel),specularMapUv:Mt&&v(_.specularMap.channel),specularColorMapUv:pt&&v(_.specularColorMap.channel),specularIntensityMapUv:Bt&&v(_.specularIntensityMap.channel),transmissionMapUv:te&&v(_.transmissionMap.channel),thicknessMapUv:se&&v(_.thicknessMap.channel),alphaMapUv:ft&&v(_.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(It||k),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,vertexUv1s:Wt,vertexUv2s:Gt,vertexUv3s:Me,pointsUvs:N.isPoints===!0&&!!P.attributes.uv&&(Ft||ft),fog:!!L,useFog:_.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:N.isSkinnedMesh===!0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:it,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:r.shadowMap.enabled&&I.length>0,shadowMapType:r.shadowMap.type,toneMapping:De,useLegacyLights:r._useLegacyLights,decodeVideoTexture:Ft&&_.map.isVideoTexture===!0&&ge.getTransfer(_.map.colorSpace)===ke,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===pe,flipSided:_.side===bn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionDerivatives:mt&&_.extensions.derivatives===!0,extensionFragDepth:mt&&_.extensions.fragDepth===!0,extensionDrawBuffers:mt&&_.extensions.drawBuffers===!0,extensionShaderTextureLOD:mt&&_.extensions.shaderTextureLOD===!0,extensionClipCullDistance:mt&&_.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()}}function p(_){let S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(let I in _.defines)S.push(I),S.push(_.defines[I]);return _.isRawShaderMaterial===!1&&(x(S,_),y(S,_),S.push(r.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function x(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapCubeUVHeight),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.morphAttributeCount),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function y(_,S){o.disableAll(),S.isWebGL2&&o.enable(0),S.supportsVertexTextures&&o.enable(1),S.instancing&&o.enable(2),S.instancingColor&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),_.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.skinning&&o.enable(4),S.morphTargets&&o.enable(5),S.morphNormals&&o.enable(6),S.morphColors&&o.enable(7),S.premultipliedAlpha&&o.enable(8),S.shadowMapEnabled&&o.enable(9),S.useLegacyLights&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),_.push(o.mask)}function M(_){let S=g[_.type],I;if(S){let F=Li[S];I=kb.clone(F.uniforms)}else I=_.uniforms;return I}function E(_,S){let I;for(let F=0,N=l.length;F<N;F++){let L=l[F];if(L.cacheKey===S){I=L,++I.usedTimes;break}}return I===void 0&&(I=new XM(r,S,_,s),l.push(I)),I}function b(_){if(--_.usedTimes===0){let S=l.indexOf(_);l[S]=l[l.length-1],l.pop(),_.destroy()}}function w(_){c.remove(_)}function C(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:E,releaseProgram:b,releaseShaderCache:w,programs:l,dispose:C}}function KM(){let r=new WeakMap;function t(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function e(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function JM(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Om(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function zm(){let r=[],t=0,e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function a(u,f,d,g,v,m){let p=r[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},r[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=v,p.group=m),t++,p}function o(u,f,d,g,v,m){let p=a(u,f,d,g,v,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):e.push(p)}function c(u,f,d,g,v,m){let p=a(u,f,d,g,v,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):e.unshift(p)}function l(u,f){e.length>1&&e.sort(u||JM),n.length>1&&n.sort(f||Om),i.length>1&&i.sort(f||Om)}function h(){for(let u=t,f=r.length;u<f;u++){let d=r[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:o,unshift:c,finish:h,sort:l}}function ZM(){let r=new WeakMap;function t(n,i){let s=r.get(n),a;return s===void 0?(a=new zm,r.set(n,[a])):i>=s.length?(a=new zm,s.push(a)):a=s[i],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function QM(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new T,color:new et};break;case"SpotLight":e={position:new T,direction:new T,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new T,color:new et,distance:0,decay:0};break;case"HemisphereLight":e={direction:new T,skyColor:new et,groundColor:new et};break;case"RectAreaLight":e={color:new et,position:new T,halfWidth:new T,halfHeight:new T};break}return r[t.id]=e,e}}}function $M(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var tE=0;function eE(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function nE(r,t){let e=new QM,n=$M(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new T);let s=new T,a=new bt,o=new bt;function c(h,u){let f=0,d=0,g=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let v=0,m=0,p=0,x=0,y=0,M=0,E=0,b=0,w=0,C=0,_=0;h.sort(eE);let S=u===!0?Math.PI:1;for(let F=0,N=h.length;F<N;F++){let L=h[F],P=L.color,D=L.intensity,U=L.distance,O=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)f+=P.r*D*S,d+=P.g*D*S,g+=P.b*D*S;else if(L.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(L.sh.coefficients[G],D);_++}else if(L.isDirectionalLight){let G=e.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity*S),L.castShadow){let j=L.shadow,J=n.get(L);J.shadowBias=j.bias,J.shadowNormalBias=j.normalBias,J.shadowRadius=j.radius,J.shadowMapSize=j.mapSize,i.directionalShadow[v]=J,i.directionalShadowMap[v]=O,i.directionalShadowMatrix[v]=L.shadow.matrix,M++}i.directional[v]=G,v++}else if(L.isSpotLight){let G=e.get(L);G.position.setFromMatrixPosition(L.matrixWorld),G.color.copy(P).multiplyScalar(D*S),G.distance=U,G.coneCos=Math.cos(L.angle),G.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),G.decay=L.decay,i.spot[p]=G;let j=L.shadow;if(L.map&&(i.spotLightMap[w]=L.map,w++,j.updateMatrices(L),L.castShadow&&C++),i.spotLightMatrix[p]=j.matrix,L.castShadow){let J=n.get(L);J.shadowBias=j.bias,J.shadowNormalBias=j.normalBias,J.shadowRadius=j.radius,J.shadowMapSize=j.mapSize,i.spotShadow[p]=J,i.spotShadowMap[p]=O,b++}p++}else if(L.isRectAreaLight){let G=e.get(L);G.color.copy(P).multiplyScalar(D),G.halfWidth.set(L.width*.5,0,0),G.halfHeight.set(0,L.height*.5,0),i.rectArea[x]=G,x++}else if(L.isPointLight){let G=e.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity*S),G.distance=L.distance,G.decay=L.decay,L.castShadow){let j=L.shadow,J=n.get(L);J.shadowBias=j.bias,J.shadowNormalBias=j.normalBias,J.shadowRadius=j.radius,J.shadowMapSize=j.mapSize,J.shadowCameraNear=j.camera.near,J.shadowCameraFar=j.camera.far,i.pointShadow[m]=J,i.pointShadowMap[m]=O,i.pointShadowMatrix[m]=L.shadow.matrix,E++}i.point[m]=G,m++}else if(L.isHemisphereLight){let G=e.get(L);G.skyColor.copy(L.color).multiplyScalar(D*S),G.groundColor.copy(L.groundColor).multiplyScalar(D*S),i.hemi[y]=G,y++}}x>0&&(t.isWebGL2?r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=gt.LTC_FLOAT_1,i.rectAreaLTC2=gt.LTC_FLOAT_2):(i.rectAreaLTC1=gt.LTC_HALF_1,i.rectAreaLTC2=gt.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=gt.LTC_FLOAT_1,i.rectAreaLTC2=gt.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=gt.LTC_HALF_1,i.rectAreaLTC2=gt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=g;let I=i.hash;(I.directionalLength!==v||I.pointLength!==m||I.spotLength!==p||I.rectAreaLength!==x||I.hemiLength!==y||I.numDirectionalShadows!==M||I.numPointShadows!==E||I.numSpotShadows!==b||I.numSpotMaps!==w||I.numLightProbes!==_)&&(i.directional.length=v,i.spot.length=p,i.rectArea.length=x,i.point.length=m,i.hemi.length=y,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=b+w-C,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=_,I.directionalLength=v,I.pointLength=m,I.spotLength=p,I.rectAreaLength=x,I.hemiLength=y,I.numDirectionalShadows=M,I.numPointShadows=E,I.numSpotShadows=b,I.numSpotMaps=w,I.numLightProbes=_,i.version=tE++)}function l(h,u){let f=0,d=0,g=0,v=0,m=0,p=u.matrixWorldInverse;for(let x=0,y=h.length;x<y;x++){let M=h[x];if(M.isDirectionalLight){let E=i.directional[f];E.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),f++}else if(M.isSpotLight){let E=i.spot[g];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),g++}else if(M.isRectAreaLight){let E=i.rectArea[v];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(p),o.identity(),a.copy(M.matrixWorld),a.premultiply(p),o.extractRotation(a),E.halfWidth.set(M.width*.5,0,0),E.halfHeight.set(0,M.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),v++}else if(M.isPointLight){let E=i.point[d];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(p),d++}else if(M.isHemisphereLight){let E=i.hemi[m];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(p),m++}}}return{setup:c,setupView:l,state:i}}function Bm(r,t){let e=new nE(r,t),n=[],i=[];function s(){n.length=0,i.length=0}function a(u){n.push(u)}function o(u){i.push(u)}function c(u){e.setup(n,u)}function l(u){e.setupView(n,u)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function iE(r,t){let e=new WeakMap;function n(s,a=0){let o=e.get(s),c;return o===void 0?(c=new Bm(r,t),e.set(s,[c])):a>=o.length?(c=new Bm(r,t),o.push(c)):c=o[a],c}function i(){e=new WeakMap}return{get:n,dispose:i}}var ho=class extends _n{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ku=class extends _n{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},sE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rE=`uniform sampler2D shadow_pass;
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
}`;function aE(r,t,e){let n=new lo,i=new at,s=new at,a=new he,o=new ho({depthPacking:Ef}),c=new ku,l={},h=e.maxTextureSize,u={[Hi]:bn,[bn]:Hi,[pe]:pe},f=new Ee({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:sE,fragmentShader:rE}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new At;g.setAttribute("position",new Et(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Nt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=f0;let p=this.type;this.render=function(b,w,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;let _=r.getRenderTarget(),S=r.getActiveCubeFace(),I=r.getActiveMipmapLevel(),F=r.state;F.setBlending(As),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let N=p!==ns&&this.type===ns,L=p===ns&&this.type!==ns;for(let P=0,D=b.length;P<D;P++){let U=b[P],O=U.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",U,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;i.copy(O.mapSize);let G=O.getFrameExtents();if(i.multiply(G),s.copy(O.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/G.x),i.x=s.x*G.x,O.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/G.y),i.y=s.y*G.y,O.mapSize.y=s.y)),O.map===null||N===!0||L===!0){let J=this.type!==ns?{minFilter:$e,magFilter:$e}:{};O.map!==null&&O.map.dispose(),O.map=new mn(i.x,i.y,J),O.map.texture.name=U.name+".shadowMap",O.camera.updateProjectionMatrix()}r.setRenderTarget(O.map),r.clear();let j=O.getViewportCount();for(let J=0;J<j;J++){let it=O.getViewport(J);a.set(s.x*it.x,s.y*it.y,s.x*it.z,s.y*it.w),F.viewport(a),O.updateMatrices(U,J),n=O.getFrustum(),M(w,C,O.camera,U,this.type)}O.isPointLightShadow!==!0&&this.type===ns&&x(O,C),O.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(_,S,I)};function x(b,w){let C=t.update(v);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new mn(i.x,i.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,r.setRenderTarget(b.mapPass),r.clear(),r.renderBufferDirect(w,null,C,f,v,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,r.setRenderTarget(b.map),r.clear(),r.renderBufferDirect(w,null,C,d,v,null)}function y(b,w,C,_){let S=null,I=C.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(I!==void 0)S=I;else if(S=C.isPointLight===!0?c:o,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let F=S.uuid,N=w.uuid,L=l[F];L===void 0&&(L={},l[F]=L);let P=L[N];P===void 0&&(P=S.clone(),L[N]=P,w.addEventListener("dispose",E)),S=P}if(S.visible=w.visible,S.wireframe=w.wireframe,_===ns?S.side=w.shadowSide!==null?w.shadowSide:w.side:S.side=w.shadowSide!==null?w.shadowSide:u[w.side],S.alphaMap=w.alphaMap,S.alphaTest=w.alphaTest,S.map=w.map,S.clipShadows=w.clipShadows,S.clippingPlanes=w.clippingPlanes,S.clipIntersection=w.clipIntersection,S.displacementMap=w.displacementMap,S.displacementScale=w.displacementScale,S.displacementBias=w.displacementBias,S.wireframeLinewidth=w.wireframeLinewidth,S.linewidth=w.linewidth,C.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let F=r.properties.get(S);F.light=C}return S}function M(b,w,C,_,S){if(b.visible===!1)return;if(b.layers.test(w.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&S===ns)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,b.matrixWorld);let N=t.update(b),L=b.material;if(Array.isArray(L)){let P=N.groups;for(let D=0,U=P.length;D<U;D++){let O=P[D],G=L[O.materialIndex];if(G&&G.visible){let j=y(b,G,_,S);b.onBeforeShadow(r,b,w,C,N,j,O),r.renderBufferDirect(C,null,N,j,b,O),b.onAfterShadow(r,b,w,C,N,j,O)}}}else if(L.visible){let P=y(b,L,_,S);b.onBeforeShadow(r,b,w,C,N,P,null),r.renderBufferDirect(C,null,N,P,b,null),b.onAfterShadow(r,b,w,C,N,P,null)}}let F=b.children;for(let N=0,L=F.length;N<L;N++)M(F[N],w,C,_,S)}function E(b){b.target.removeEventListener("dispose",E);for(let C in l){let _=l[C],S=b.target.uuid;S in _&&(_[S].dispose(),delete _[S])}}}function oE(r,t,e){let n=e.isWebGL2;function i(){let B=!1,xt=new he,mt=null,Wt=new he(0,0,0,0);return{setMask:function(Gt){mt!==Gt&&!B&&(r.colorMask(Gt,Gt,Gt,Gt),mt=Gt)},setLocked:function(Gt){B=Gt},setClear:function(Gt,Me,De,fn,Hn){Hn===!0&&(Gt*=fn,Me*=fn,De*=fn),xt.set(Gt,Me,De,fn),Wt.equals(xt)===!1&&(r.clearColor(Gt,Me,De,fn),Wt.copy(xt))},reset:function(){B=!1,mt=null,Wt.set(-1,0,0,0)}}}function s(){let B=!1,xt=null,mt=null,Wt=null;return{setTest:function(Gt){Gt?Xt(r.DEPTH_TEST):Ft(r.DEPTH_TEST)},setMask:function(Gt){xt!==Gt&&!B&&(r.depthMask(Gt),xt=Gt)},setFunc:function(Gt){if(mt!==Gt){switch(Gt){case Ax:r.depthFunc(r.NEVER);break;case Rx:r.depthFunc(r.ALWAYS);break;case Cx:r.depthFunc(r.LESS);break;case Dc:r.depthFunc(r.LEQUAL);break;case Px:r.depthFunc(r.EQUAL);break;case Lx:r.depthFunc(r.GEQUAL);break;case Ix:r.depthFunc(r.GREATER);break;case Dx:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}mt=Gt}},setLocked:function(Gt){B=Gt},setClear:function(Gt){Wt!==Gt&&(r.clearDepth(Gt),Wt=Gt)},reset:function(){B=!1,xt=null,mt=null,Wt=null}}}function a(){let B=!1,xt=null,mt=null,Wt=null,Gt=null,Me=null,De=null,fn=null,Hn=null;return{setTest:function(Fe){B||(Fe?Xt(r.STENCIL_TEST):Ft(r.STENCIL_TEST))},setMask:function(Fe){xt!==Fe&&!B&&(r.stencilMask(Fe),xt=Fe)},setFunc:function(Fe,Nn,Pi){(mt!==Fe||Wt!==Nn||Gt!==Pi)&&(r.stencilFunc(Fe,Nn,Pi),mt=Fe,Wt=Nn,Gt=Pi)},setOp:function(Fe,Nn,Pi){(Me!==Fe||De!==Nn||fn!==Pi)&&(r.stencilOp(Fe,Nn,Pi),Me=Fe,De=Nn,fn=Pi)},setLocked:function(Fe){B=Fe},setClear:function(Fe){Hn!==Fe&&(r.clearStencil(Fe),Hn=Fe)},reset:function(){B=!1,xt=null,mt=null,Wt=null,Gt=null,Me=null,De=null,fn=null,Hn=null}}}let o=new i,c=new s,l=new a,h=new WeakMap,u=new WeakMap,f={},d={},g=new WeakMap,v=[],m=null,p=!1,x=null,y=null,M=null,E=null,b=null,w=null,C=null,_=new et(0,0,0),S=0,I=!1,F=null,N=null,L=null,P=null,D=null,U=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,G=0,j=r.getParameter(r.VERSION);j.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(j)[1]),O=G>=1):j.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),O=G>=2);let J=null,it={},z=r.getParameter(r.SCISSOR_BOX),$=r.getParameter(r.VIEWPORT),lt=new he().fromArray(z),ht=new he().fromArray($);function _t(B,xt,mt,Wt){let Gt=new Uint8Array(4),Me=r.createTexture();r.bindTexture(B,Me),r.texParameteri(B,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(B,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let De=0;De<mt;De++)n&&(B===r.TEXTURE_3D||B===r.TEXTURE_2D_ARRAY)?r.texImage3D(xt,0,r.RGBA,1,1,Wt,0,r.RGBA,r.UNSIGNED_BYTE,Gt):r.texImage2D(xt+De,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Gt);return Me}let Ut={};Ut[r.TEXTURE_2D]=_t(r.TEXTURE_2D,r.TEXTURE_2D,1),Ut[r.TEXTURE_CUBE_MAP]=_t(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ut[r.TEXTURE_2D_ARRAY]=_t(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Ut[r.TEXTURE_3D]=_t(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Xt(r.DEPTH_TEST),c.setFunc(Dc),Qt(!1),R(Tp),Xt(r.CULL_FACE),It(As);function Xt(B){f[B]!==!0&&(r.enable(B),f[B]=!0)}function Ft(B){f[B]!==!1&&(r.disable(B),f[B]=!1)}function ne(B,xt){return d[B]!==xt?(r.bindFramebuffer(B,xt),d[B]=xt,n&&(B===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=xt),B===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=xt)),!0):!1}function K(B,xt){let mt=v,Wt=!1;if(B)if(mt=g.get(xt),mt===void 0&&(mt=[],g.set(xt,mt)),B.isWebGLMultipleRenderTargets){let Gt=B.texture;if(mt.length!==Gt.length||mt[0]!==r.COLOR_ATTACHMENT0){for(let Me=0,De=Gt.length;Me<De;Me++)mt[Me]=r.COLOR_ATTACHMENT0+Me;mt.length=Gt.length,Wt=!0}}else mt[0]!==r.COLOR_ATTACHMENT0&&(mt[0]=r.COLOR_ATTACHMENT0,Wt=!0);else mt[0]!==r.BACK&&(mt[0]=r.BACK,Wt=!0);Wt&&(e.isWebGL2?r.drawBuffers(mt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(mt))}function Ge(B){return m!==B?(r.useProgram(B),m=B,!0):!1}let Ot={[is]:r.FUNC_ADD,[px]:r.FUNC_SUBTRACT,[mx]:r.FUNC_REVERSE_SUBTRACT};if(n)Ot[Rp]=r.MIN,Ot[Cp]=r.MAX;else{let B=t.get("EXT_blend_minmax");B!==null&&(Ot[Rp]=B.MIN_EXT,Ot[Cp]=B.MAX_EXT)}let Yt={[pf]:r.ZERO,[gx]:r.ONE,[mf]:r.SRC_COLOR,[yu]:r.SRC_ALPHA,[Mx]:r.SRC_ALPHA_SATURATE,[yx]:r.DST_COLOR,[xx]:r.DST_ALPHA,[vx]:r.ONE_MINUS_SRC_COLOR,[_u]:r.ONE_MINUS_SRC_ALPHA,[_x]:r.ONE_MINUS_DST_COLOR,[bx]:r.ONE_MINUS_DST_ALPHA,[Ex]:r.CONSTANT_COLOR,[wx]:r.ONE_MINUS_CONSTANT_COLOR,[Tx]:r.CONSTANT_ALPHA,[Sx]:r.ONE_MINUS_CONSTANT_ALPHA};function It(B,xt,mt,Wt,Gt,Me,De,fn,Hn,Fe){if(B===As){p===!0&&(Ft(r.BLEND),p=!1);return}if(p===!1&&(Xt(r.BLEND),p=!0),B!==df){if(B!==x||Fe!==I){if((y!==is||b!==is)&&(r.blendEquation(r.FUNC_ADD),y=is,b=is),Fe)switch(B){case Zr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case tn:r.blendFunc(r.ONE,r.ONE);break;case Sp:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ap:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Zr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case tn:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Sp:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ap:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}M=null,E=null,w=null,C=null,_.set(0,0,0),S=0,x=B,I=Fe}return}Gt=Gt||xt,Me=Me||mt,De=De||Wt,(xt!==y||Gt!==b)&&(r.blendEquationSeparate(Ot[xt],Ot[Gt]),y=xt,b=Gt),(mt!==M||Wt!==E||Me!==w||De!==C)&&(r.blendFuncSeparate(Yt[mt],Yt[Wt],Yt[Me],Yt[De]),M=mt,E=Wt,w=Me,C=De),(fn.equals(_)===!1||Hn!==S)&&(r.blendColor(fn.r,fn.g,fn.b,Hn),_.copy(fn),S=Hn),x=B,I=!1}function Ce(B,xt){B.side===pe?Ft(r.CULL_FACE):Xt(r.CULL_FACE);let mt=B.side===bn;xt&&(mt=!mt),Qt(mt),B.blending===Zr&&B.transparent===!1?It(As):It(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),c.setFunc(B.depthFunc),c.setTest(B.depthTest),c.setMask(B.depthWrite),o.setMask(B.colorWrite);let Wt=B.stencilWrite;l.setTest(Wt),Wt&&(l.setMask(B.stencilWriteMask),l.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),l.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),k(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?Xt(r.SAMPLE_ALPHA_TO_COVERAGE):Ft(r.SAMPLE_ALPHA_TO_COVERAGE)}function Qt(B){F!==B&&(B?r.frontFace(r.CW):r.frontFace(r.CCW),F=B)}function R(B){B!==fx?(Xt(r.CULL_FACE),B!==N&&(B===Tp?r.cullFace(r.BACK):B===dx?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ft(r.CULL_FACE),N=B}function A(B){B!==L&&(O&&r.lineWidth(B),L=B)}function k(B,xt,mt){B?(Xt(r.POLYGON_OFFSET_FILL),(P!==xt||D!==mt)&&(r.polygonOffset(xt,mt),P=xt,D=mt)):Ft(r.POLYGON_OFFSET_FILL)}function V(B){B?Xt(r.SCISSOR_TEST):Ft(r.SCISSOR_TEST)}function Y(B){B===void 0&&(B=r.TEXTURE0+U-1),J!==B&&(r.activeTexture(B),J=B)}function W(B,xt,mt){mt===void 0&&(J===null?mt=r.TEXTURE0+U-1:mt=J);let Wt=it[mt];Wt===void 0&&(Wt={type:void 0,texture:void 0},it[mt]=Wt),(Wt.type!==B||Wt.texture!==xt)&&(J!==mt&&(r.activeTexture(mt),J=mt),r.bindTexture(B,xt||Ut[B]),Wt.type=B,Wt.texture=xt)}function ot(){let B=it[J];B!==void 0&&B.type!==void 0&&(r.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function st(){try{r.compressedTexImage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ct(){try{r.compressedTexImage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ut(){try{r.texSubImage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function vt(){try{r.texSubImage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Z(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function wt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Rt(){try{r.texStorage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Lt(){try{r.texStorage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Mt(){try{r.texImage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function pt(){try{r.texImage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Bt(B){lt.equals(B)===!1&&(r.scissor(B.x,B.y,B.z,B.w),lt.copy(B))}function te(B){ht.equals(B)===!1&&(r.viewport(B.x,B.y,B.z,B.w),ht.copy(B))}function se(B,xt){let mt=u.get(xt);mt===void 0&&(mt=new WeakMap,u.set(xt,mt));let Wt=mt.get(B);Wt===void 0&&(Wt=r.getUniformBlockIndex(xt,B.name),mt.set(B,Wt))}function Kt(B,xt){let Wt=u.get(xt).get(B);h.get(xt)!==Wt&&(r.uniformBlockBinding(xt,Wt,B.__bindingPointIndex),h.set(xt,Wt))}function ft(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),f={},J=null,it={},d={},g=new WeakMap,v=[],m=null,p=!1,x=null,y=null,M=null,E=null,b=null,w=null,C=null,_=new et(0,0,0),S=0,I=!1,F=null,N=null,L=null,P=null,D=null,lt.set(0,0,r.canvas.width,r.canvas.height),ht.set(0,0,r.canvas.width,r.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:Xt,disable:Ft,bindFramebuffer:ne,drawBuffers:K,useProgram:Ge,setBlending:It,setMaterial:Ce,setFlipSided:Qt,setCullFace:R,setLineWidth:A,setPolygonOffset:k,setScissorTest:V,activeTexture:Y,bindTexture:W,unbindTexture:ot,compressedTexImage2D:st,compressedTexImage3D:ct,texImage2D:Mt,texImage3D:pt,updateUBOMapping:se,uniformBlockBinding:Kt,texStorage2D:Rt,texStorage3D:Lt,texSubImage2D:ut,texSubImage3D:vt,compressedTexSubImage2D:Z,compressedTexSubImage3D:wt,scissor:Bt,viewport:te,reset:ft}}function cE(r,t,e,n,i,s,a){let o=i.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,A){return d?new OffscreenCanvas(R,A):oo("canvas")}function v(R,A,k,V){let Y=1;if((R.width>V||R.height>V)&&(Y=V/Math.max(R.width,R.height)),Y<1||A===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){let W=A?zc:Math.floor,ot=W(Y*R.width),st=W(Y*R.height);u===void 0&&(u=g(ot,st));let ct=k?g(ot,st):u;return ct.width=ot,ct.height=st,ct.getContext("2d").drawImage(R,0,0,ot,st),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+ot+"x"+st+")."),ct}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function m(R){return Su(R.width)&&Su(R.height)}function p(R){return o?!1:R.wrapS!==Zn||R.wrapT!==Zn||R.minFilter!==$e&&R.minFilter!==nn}function x(R,A){return R.generateMipmaps&&A&&R.minFilter!==$e&&R.minFilter!==nn}function y(R){r.generateMipmap(R)}function M(R,A,k,V,Y=!1){if(o===!1)return A;if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let W=A;if(A===r.RED&&(k===r.FLOAT&&(W=r.R32F),k===r.HALF_FLOAT&&(W=r.R16F),k===r.UNSIGNED_BYTE&&(W=r.R8)),A===r.RED_INTEGER&&(k===r.UNSIGNED_BYTE&&(W=r.R8UI),k===r.UNSIGNED_SHORT&&(W=r.R16UI),k===r.UNSIGNED_INT&&(W=r.R32UI),k===r.BYTE&&(W=r.R8I),k===r.SHORT&&(W=r.R16I),k===r.INT&&(W=r.R32I)),A===r.RG&&(k===r.FLOAT&&(W=r.RG32F),k===r.HALF_FLOAT&&(W=r.RG16F),k===r.UNSIGNED_BYTE&&(W=r.RG8)),A===r.RGBA){let ot=Y?Nc:ge.getTransfer(V);k===r.FLOAT&&(W=r.RGBA32F),k===r.HALF_FLOAT&&(W=r.RGBA16F),k===r.UNSIGNED_BYTE&&(W=ot===ke?r.SRGB8_ALPHA8:r.RGBA8),k===r.UNSIGNED_SHORT_4_4_4_4&&(W=r.RGBA4),k===r.UNSIGNED_SHORT_5_5_5_1&&(W=r.RGB5_A1)}return(W===r.R16F||W===r.R32F||W===r.RG16F||W===r.RG32F||W===r.RGBA16F||W===r.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function E(R,A,k){return x(R,k)===!0||R.isFramebufferTexture&&R.minFilter!==$e&&R.minFilter!==nn?Math.log2(Math.max(A.width,A.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?A.mipmaps.length:1}function b(R){return R===$e||R===Fc||R===$a?r.NEAREST:r.LINEAR}function w(R){let A=R.target;A.removeEventListener("dispose",w),_(A),A.isVideoTexture&&h.delete(A)}function C(R){let A=R.target;A.removeEventListener("dispose",C),I(A)}function _(R){let A=n.get(R);if(A.__webglInit===void 0)return;let k=R.source,V=f.get(k);if(V){let Y=V[A.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&S(R),Object.keys(V).length===0&&f.delete(k)}n.remove(R)}function S(R){let A=n.get(R);r.deleteTexture(A.__webglTexture);let k=R.source,V=f.get(k);delete V[A.__cacheKey],a.memory.textures--}function I(R){let A=R.texture,k=n.get(R),V=n.get(A);if(V.__webglTexture!==void 0&&(r.deleteTexture(V.__webglTexture),a.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(k.__webglFramebuffer[Y]))for(let W=0;W<k.__webglFramebuffer[Y].length;W++)r.deleteFramebuffer(k.__webglFramebuffer[Y][W]);else r.deleteFramebuffer(k.__webglFramebuffer[Y]);k.__webglDepthbuffer&&r.deleteRenderbuffer(k.__webglDepthbuffer[Y])}else{if(Array.isArray(k.__webglFramebuffer))for(let Y=0;Y<k.__webglFramebuffer.length;Y++)r.deleteFramebuffer(k.__webglFramebuffer[Y]);else r.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer&&r.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&r.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let Y=0;Y<k.__webglColorRenderbuffer.length;Y++)k.__webglColorRenderbuffer[Y]&&r.deleteRenderbuffer(k.__webglColorRenderbuffer[Y]);k.__webglDepthRenderbuffer&&r.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let Y=0,W=A.length;Y<W;Y++){let ot=n.get(A[Y]);ot.__webglTexture&&(r.deleteTexture(ot.__webglTexture),a.memory.textures--),n.remove(A[Y])}n.remove(A),n.remove(R)}let F=0;function N(){F=0}function L(){let R=F;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),F+=1,R}function P(R){let A=[];return A.push(R.wrapS),A.push(R.wrapT),A.push(R.wrapR||0),A.push(R.magFilter),A.push(R.minFilter),A.push(R.anisotropy),A.push(R.internalFormat),A.push(R.format),A.push(R.type),A.push(R.generateMipmaps),A.push(R.premultiplyAlpha),A.push(R.flipY),A.push(R.unpackAlignment),A.push(R.colorSpace),A.join()}function D(R,A){let k=n.get(R);if(R.isVideoTexture&&Ce(R),R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){let V=R.image;if(V===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{lt(k,R,A);return}}e.bindTexture(r.TEXTURE_2D,k.__webglTexture,r.TEXTURE0+A)}function U(R,A){let k=n.get(R);if(R.version>0&&k.__version!==R.version){lt(k,R,A);return}e.bindTexture(r.TEXTURE_2D_ARRAY,k.__webglTexture,r.TEXTURE0+A)}function O(R,A){let k=n.get(R);if(R.version>0&&k.__version!==R.version){lt(k,R,A);return}e.bindTexture(r.TEXTURE_3D,k.__webglTexture,r.TEXTURE0+A)}function G(R,A){let k=n.get(R);if(R.version>0&&k.__version!==R.version){ht(k,R,A);return}e.bindTexture(r.TEXTURE_CUBE_MAP,k.__webglTexture,r.TEXTURE0+A)}let j={[On]:r.REPEAT,[Zn]:r.CLAMP_TO_EDGE,[ao]:r.MIRRORED_REPEAT},J={[$e]:r.NEAREST,[Fc]:r.NEAREST_MIPMAP_NEAREST,[$a]:r.NEAREST_MIPMAP_LINEAR,[nn]:r.LINEAR,[xf]:r.LINEAR_MIPMAP_NEAREST,[Ni]:r.LINEAR_MIPMAP_LINEAR},it={[tb]:r.NEVER,[ab]:r.ALWAYS,[eb]:r.LESS,[E0]:r.LEQUAL,[nb]:r.EQUAL,[rb]:r.GEQUAL,[ib]:r.GREATER,[sb]:r.NOTEQUAL};function z(R,A,k){if(k?(r.texParameteri(R,r.TEXTURE_WRAP_S,j[A.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,j[A.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,j[A.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,J[A.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,J[A.minFilter])):(r.texParameteri(R,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(R,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(A.wrapS!==Zn||A.wrapT!==Zn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(R,r.TEXTURE_MAG_FILTER,b(A.magFilter)),r.texParameteri(R,r.TEXTURE_MIN_FILTER,b(A.minFilter)),A.minFilter!==$e&&A.minFilter!==nn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,it[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let V=t.get("EXT_texture_filter_anisotropic");if(A.magFilter===$e||A.minFilter!==$a&&A.minFilter!==Ni||A.type===ss&&t.has("OES_texture_float_linear")===!1||o===!1&&A.type===Wn&&t.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||n.get(A).__currentAnisotropy)&&(r.texParameterf(R,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,i.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy)}}function $(R,A){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,A.addEventListener("dispose",w));let V=A.source,Y=f.get(V);Y===void 0&&(Y={},f.set(V,Y));let W=P(A);if(W!==R.__cacheKey){Y[W]===void 0&&(Y[W]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,k=!0),Y[W].usedTimes++;let ot=Y[R.__cacheKey];ot!==void 0&&(Y[R.__cacheKey].usedTimes--,ot.usedTimes===0&&S(A)),R.__cacheKey=W,R.__webglTexture=Y[W].texture}return k}function lt(R,A,k){let V=r.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(V=r.TEXTURE_2D_ARRAY),A.isData3DTexture&&(V=r.TEXTURE_3D);let Y=$(R,A),W=A.source;e.bindTexture(V,R.__webglTexture,r.TEXTURE0+k);let ot=n.get(W);if(W.version!==ot.__version||Y===!0){e.activeTexture(r.TEXTURE0+k);let st=ge.getPrimaries(ge.workingColorSpace),ct=A.colorSpace===Sn?null:ge.getPrimaries(A.colorSpace),ut=A.colorSpace===Sn||st===ct?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);let vt=p(A)&&m(A.image)===!1,Z=v(A.image,vt,!1,i.maxTextureSize);Z=Qt(A,Z);let wt=m(Z)||o,Rt=s.convert(A.format,A.colorSpace),Lt=s.convert(A.type),Mt=M(A.internalFormat,Rt,Lt,A.colorSpace,A.isVideoTexture);z(V,A,wt);let pt,Bt=A.mipmaps,te=o&&A.isVideoTexture!==!0&&Mt!==y0,se=ot.__version===void 0||Y===!0,Kt=E(A,Z,wt);if(A.isDepthTexture)Mt=r.DEPTH_COMPONENT,o?A.type===ss?Mt=r.DEPTH_COMPONENT32F:A.type===Di?Mt=r.DEPTH_COMPONENT24:A.type===sr?Mt=r.DEPTH24_STENCIL8:Mt=r.DEPTH_COMPONENT16:A.type===ss&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===rr&&Mt===r.DEPTH_COMPONENT&&A.type!==bf&&A.type!==Di&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=Di,Lt=s.convert(A.type)),A.format===na&&Mt===r.DEPTH_COMPONENT&&(Mt=r.DEPTH_STENCIL,A.type!==sr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=sr,Lt=s.convert(A.type))),se&&(te?e.texStorage2D(r.TEXTURE_2D,1,Mt,Z.width,Z.height):e.texImage2D(r.TEXTURE_2D,0,Mt,Z.width,Z.height,0,Rt,Lt,null));else if(A.isDataTexture)if(Bt.length>0&&wt){te&&se&&e.texStorage2D(r.TEXTURE_2D,Kt,Mt,Bt[0].width,Bt[0].height);for(let ft=0,B=Bt.length;ft<B;ft++)pt=Bt[ft],te?e.texSubImage2D(r.TEXTURE_2D,ft,0,0,pt.width,pt.height,Rt,Lt,pt.data):e.texImage2D(r.TEXTURE_2D,ft,Mt,pt.width,pt.height,0,Rt,Lt,pt.data);A.generateMipmaps=!1}else te?(se&&e.texStorage2D(r.TEXTURE_2D,Kt,Mt,Z.width,Z.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,Z.width,Z.height,Rt,Lt,Z.data)):e.texImage2D(r.TEXTURE_2D,0,Mt,Z.width,Z.height,0,Rt,Lt,Z.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){te&&se&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Kt,Mt,Bt[0].width,Bt[0].height,Z.depth);for(let ft=0,B=Bt.length;ft<B;ft++)pt=Bt[ft],A.format!==ai?Rt!==null?te?e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ft,0,0,0,pt.width,pt.height,Z.depth,Rt,pt.data,0,0):e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ft,Mt,pt.width,pt.height,Z.depth,0,pt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):te?e.texSubImage3D(r.TEXTURE_2D_ARRAY,ft,0,0,0,pt.width,pt.height,Z.depth,Rt,Lt,pt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,ft,Mt,pt.width,pt.height,Z.depth,0,Rt,Lt,pt.data)}else{te&&se&&e.texStorage2D(r.TEXTURE_2D,Kt,Mt,Bt[0].width,Bt[0].height);for(let ft=0,B=Bt.length;ft<B;ft++)pt=Bt[ft],A.format!==ai?Rt!==null?te?e.compressedTexSubImage2D(r.TEXTURE_2D,ft,0,0,pt.width,pt.height,Rt,pt.data):e.compressedTexImage2D(r.TEXTURE_2D,ft,Mt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):te?e.texSubImage2D(r.TEXTURE_2D,ft,0,0,pt.width,pt.height,Rt,Lt,pt.data):e.texImage2D(r.TEXTURE_2D,ft,Mt,pt.width,pt.height,0,Rt,Lt,pt.data)}else if(A.isDataArrayTexture)te?(se&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Kt,Mt,Z.width,Z.height,Z.depth),e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,Rt,Lt,Z.data)):e.texImage3D(r.TEXTURE_2D_ARRAY,0,Mt,Z.width,Z.height,Z.depth,0,Rt,Lt,Z.data);else if(A.isData3DTexture)te?(se&&e.texStorage3D(r.TEXTURE_3D,Kt,Mt,Z.width,Z.height,Z.depth),e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,Rt,Lt,Z.data)):e.texImage3D(r.TEXTURE_3D,0,Mt,Z.width,Z.height,Z.depth,0,Rt,Lt,Z.data);else if(A.isFramebufferTexture){if(se)if(te)e.texStorage2D(r.TEXTURE_2D,Kt,Mt,Z.width,Z.height);else{let ft=Z.width,B=Z.height;for(let xt=0;xt<Kt;xt++)e.texImage2D(r.TEXTURE_2D,xt,Mt,ft,B,0,Rt,Lt,null),ft>>=1,B>>=1}}else if(Bt.length>0&&wt){te&&se&&e.texStorage2D(r.TEXTURE_2D,Kt,Mt,Bt[0].width,Bt[0].height);for(let ft=0,B=Bt.length;ft<B;ft++)pt=Bt[ft],te?e.texSubImage2D(r.TEXTURE_2D,ft,0,0,Rt,Lt,pt):e.texImage2D(r.TEXTURE_2D,ft,Mt,Rt,Lt,pt);A.generateMipmaps=!1}else te?(se&&e.texStorage2D(r.TEXTURE_2D,Kt,Mt,Z.width,Z.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,Rt,Lt,Z)):e.texImage2D(r.TEXTURE_2D,0,Mt,Rt,Lt,Z);x(A,wt)&&y(V),ot.__version=W.version,A.onUpdate&&A.onUpdate(A)}R.__version=A.version}function ht(R,A,k){if(A.image.length!==6)return;let V=$(R,A),Y=A.source;e.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+k);let W=n.get(Y);if(Y.version!==W.__version||V===!0){e.activeTexture(r.TEXTURE0+k);let ot=ge.getPrimaries(ge.workingColorSpace),st=A.colorSpace===Sn?null:ge.getPrimaries(A.colorSpace),ct=A.colorSpace===Sn||ot===st?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);let ut=A.isCompressedTexture||A.image[0].isCompressedTexture,vt=A.image[0]&&A.image[0].isDataTexture,Z=[];for(let ft=0;ft<6;ft++)!ut&&!vt?Z[ft]=v(A.image[ft],!1,!0,i.maxCubemapSize):Z[ft]=vt?A.image[ft].image:A.image[ft],Z[ft]=Qt(A,Z[ft]);let wt=Z[0],Rt=m(wt)||o,Lt=s.convert(A.format,A.colorSpace),Mt=s.convert(A.type),pt=M(A.internalFormat,Lt,Mt,A.colorSpace),Bt=o&&A.isVideoTexture!==!0,te=W.__version===void 0||V===!0,se=E(A,wt,Rt);z(r.TEXTURE_CUBE_MAP,A,Rt);let Kt;if(ut){Bt&&te&&e.texStorage2D(r.TEXTURE_CUBE_MAP,se,pt,wt.width,wt.height);for(let ft=0;ft<6;ft++){Kt=Z[ft].mipmaps;for(let B=0;B<Kt.length;B++){let xt=Kt[B];A.format!==ai?Lt!==null?Bt?e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,B,0,0,xt.width,xt.height,Lt,xt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,B,pt,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Bt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,B,0,0,xt.width,xt.height,Lt,Mt,xt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,B,pt,xt.width,xt.height,0,Lt,Mt,xt.data)}}}else{Kt=A.mipmaps,Bt&&te&&(Kt.length>0&&se++,e.texStorage2D(r.TEXTURE_CUBE_MAP,se,pt,Z[0].width,Z[0].height));for(let ft=0;ft<6;ft++)if(vt){Bt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,Z[ft].width,Z[ft].height,Lt,Mt,Z[ft].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,pt,Z[ft].width,Z[ft].height,0,Lt,Mt,Z[ft].data);for(let B=0;B<Kt.length;B++){let mt=Kt[B].image[ft].image;Bt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,B+1,0,0,mt.width,mt.height,Lt,Mt,mt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,B+1,pt,mt.width,mt.height,0,Lt,Mt,mt.data)}}else{Bt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,Lt,Mt,Z[ft]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,pt,Lt,Mt,Z[ft]);for(let B=0;B<Kt.length;B++){let xt=Kt[B];Bt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,B+1,0,0,Lt,Mt,xt.image[ft]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,B+1,pt,Lt,Mt,xt.image[ft])}}}x(A,Rt)&&y(r.TEXTURE_CUBE_MAP),W.__version=Y.version,A.onUpdate&&A.onUpdate(A)}R.__version=A.version}function _t(R,A,k,V,Y,W){let ot=s.convert(k.format,k.colorSpace),st=s.convert(k.type),ct=M(k.internalFormat,ot,st,k.colorSpace);if(!n.get(A).__hasExternalTextures){let vt=Math.max(1,A.width>>W),Z=Math.max(1,A.height>>W);Y===r.TEXTURE_3D||Y===r.TEXTURE_2D_ARRAY?e.texImage3D(Y,W,ct,vt,Z,A.depth,0,ot,st,null):e.texImage2D(Y,W,ct,vt,Z,0,ot,st,null)}e.bindFramebuffer(r.FRAMEBUFFER,R),It(A)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,V,Y,n.get(k).__webglTexture,0,Yt(A)):(Y===r.TEXTURE_2D||Y>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,V,Y,n.get(k).__webglTexture,W),e.bindFramebuffer(r.FRAMEBUFFER,null)}function Ut(R,A,k){if(r.bindRenderbuffer(r.RENDERBUFFER,R),A.depthBuffer&&!A.stencilBuffer){let V=o===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(k||It(A)){let Y=A.depthTexture;Y&&Y.isDepthTexture&&(Y.type===ss?V=r.DEPTH_COMPONENT32F:Y.type===Di&&(V=r.DEPTH_COMPONENT24));let W=Yt(A);It(A)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,W,V,A.width,A.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,W,V,A.width,A.height)}else r.renderbufferStorage(r.RENDERBUFFER,V,A.width,A.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,R)}else if(A.depthBuffer&&A.stencilBuffer){let V=Yt(A);k&&It(A)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,V,r.DEPTH24_STENCIL8,A.width,A.height):It(A)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,V,r.DEPTH24_STENCIL8,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,R)}else{let V=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let Y=0;Y<V.length;Y++){let W=V[Y],ot=s.convert(W.format,W.colorSpace),st=s.convert(W.type),ct=M(W.internalFormat,ot,st,W.colorSpace),ut=Yt(A);k&&It(A)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ut,ct,A.width,A.height):It(A)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ut,ct,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,ct,A.width,A.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Xt(R,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,R),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),D(A.depthTexture,0);let V=n.get(A.depthTexture).__webglTexture,Y=Yt(A);if(A.depthTexture.format===rr)It(A)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,V,0,Y):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,V,0);else if(A.depthTexture.format===na)It(A)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,V,0,Y):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,V,0);else throw new Error("Unknown depthTexture format")}function Ft(R){let A=n.get(R),k=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!A.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Xt(A.__webglFramebuffer,R)}else if(k){A.__webglDepthbuffer=[];for(let V=0;V<6;V++)e.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer[V]),A.__webglDepthbuffer[V]=r.createRenderbuffer(),Ut(A.__webglDepthbuffer[V],R,!1)}else e.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=r.createRenderbuffer(),Ut(A.__webglDepthbuffer,R,!1);e.bindFramebuffer(r.FRAMEBUFFER,null)}function ne(R,A,k){let V=n.get(R);A!==void 0&&_t(V.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),k!==void 0&&Ft(R)}function K(R){let A=R.texture,k=n.get(R),V=n.get(A);R.addEventListener("dispose",C),R.isWebGLMultipleRenderTargets!==!0&&(V.__webglTexture===void 0&&(V.__webglTexture=r.createTexture()),V.__version=A.version,a.memory.textures++);let Y=R.isWebGLCubeRenderTarget===!0,W=R.isWebGLMultipleRenderTargets===!0,ot=m(R)||o;if(Y){k.__webglFramebuffer=[];for(let st=0;st<6;st++)if(o&&A.mipmaps&&A.mipmaps.length>0){k.__webglFramebuffer[st]=[];for(let ct=0;ct<A.mipmaps.length;ct++)k.__webglFramebuffer[st][ct]=r.createFramebuffer()}else k.__webglFramebuffer[st]=r.createFramebuffer()}else{if(o&&A.mipmaps&&A.mipmaps.length>0){k.__webglFramebuffer=[];for(let st=0;st<A.mipmaps.length;st++)k.__webglFramebuffer[st]=r.createFramebuffer()}else k.__webglFramebuffer=r.createFramebuffer();if(W)if(i.drawBuffers){let st=R.texture;for(let ct=0,ut=st.length;ct<ut;ct++){let vt=n.get(st[ct]);vt.__webglTexture===void 0&&(vt.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&R.samples>0&&It(R)===!1){let st=W?A:[A];k.__webglMultisampledFramebuffer=r.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ct=0;ct<st.length;ct++){let ut=st[ct];k.__webglColorRenderbuffer[ct]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,k.__webglColorRenderbuffer[ct]);let vt=s.convert(ut.format,ut.colorSpace),Z=s.convert(ut.type),wt=M(ut.internalFormat,vt,Z,ut.colorSpace,R.isXRRenderTarget===!0),Rt=Yt(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,Rt,wt,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ct,r.RENDERBUFFER,k.__webglColorRenderbuffer[ct])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=r.createRenderbuffer(),Ut(k.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Y){e.bindTexture(r.TEXTURE_CUBE_MAP,V.__webglTexture),z(r.TEXTURE_CUBE_MAP,A,ot);for(let st=0;st<6;st++)if(o&&A.mipmaps&&A.mipmaps.length>0)for(let ct=0;ct<A.mipmaps.length;ct++)_t(k.__webglFramebuffer[st][ct],R,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+st,ct);else _t(k.__webglFramebuffer[st],R,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+st,0);x(A,ot)&&y(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(W){let st=R.texture;for(let ct=0,ut=st.length;ct<ut;ct++){let vt=st[ct],Z=n.get(vt);e.bindTexture(r.TEXTURE_2D,Z.__webglTexture),z(r.TEXTURE_2D,vt,ot),_t(k.__webglFramebuffer,R,vt,r.COLOR_ATTACHMENT0+ct,r.TEXTURE_2D,0),x(vt,ot)&&y(r.TEXTURE_2D)}e.unbindTexture()}else{let st=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(o?st=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(st,V.__webglTexture),z(st,A,ot),o&&A.mipmaps&&A.mipmaps.length>0)for(let ct=0;ct<A.mipmaps.length;ct++)_t(k.__webglFramebuffer[ct],R,A,r.COLOR_ATTACHMENT0,st,ct);else _t(k.__webglFramebuffer,R,A,r.COLOR_ATTACHMENT0,st,0);x(A,ot)&&y(st),e.unbindTexture()}R.depthBuffer&&Ft(R)}function Ge(R){let A=m(R)||o,k=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let V=0,Y=k.length;V<Y;V++){let W=k[V];if(x(W,A)){let ot=R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,st=n.get(W).__webglTexture;e.bindTexture(ot,st),y(ot),e.unbindTexture()}}}function Ot(R){if(o&&R.samples>0&&It(R)===!1){let A=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],k=R.width,V=R.height,Y=r.COLOR_BUFFER_BIT,W=[],ot=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,st=n.get(R),ct=R.isWebGLMultipleRenderTargets===!0;if(ct)for(let ut=0;ut<A.length;ut++)e.bindFramebuffer(r.FRAMEBUFFER,st.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ut,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,st.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ut,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,st.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,st.__webglFramebuffer);for(let ut=0;ut<A.length;ut++){W.push(r.COLOR_ATTACHMENT0+ut),R.depthBuffer&&W.push(ot);let vt=st.__ignoreDepthValues!==void 0?st.__ignoreDepthValues:!1;if(vt===!1&&(R.depthBuffer&&(Y|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&(Y|=r.STENCIL_BUFFER_BIT)),ct&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,st.__webglColorRenderbuffer[ut]),vt===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[ot]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[ot])),ct){let Z=n.get(A[ut]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Z,0)}r.blitFramebuffer(0,0,k,V,0,0,k,V,Y,r.NEAREST),l&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,W)}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ct)for(let ut=0;ut<A.length;ut++){e.bindFramebuffer(r.FRAMEBUFFER,st.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ut,r.RENDERBUFFER,st.__webglColorRenderbuffer[ut]);let vt=n.get(A[ut]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,st.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ut,r.TEXTURE_2D,vt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,st.__webglMultisampledFramebuffer)}}function Yt(R){return Math.min(i.maxSamples,R.samples)}function It(R){let A=n.get(R);return o&&R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Ce(R){let A=a.render.frame;h.get(R)!==A&&(h.set(R,A),R.update())}function Qt(R,A){let k=R.colorSpace,V=R.format,Y=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===Tu||k!==rn&&k!==Sn&&(ge.getTransfer(k)===ke?o===!1?t.has("EXT_sRGB")===!0&&V===ai?(R.format=Tu,R.minFilter=nn,R.generateMipmaps=!1):A=Bc.sRGBToLinear(A):(V!==ai||Y!==Fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),A}this.allocateTextureUnit=L,this.resetTextureUnits=N,this.setTexture2D=D,this.setTexture2DArray=U,this.setTexture3D=O,this.setTextureCube=G,this.rebindTextures=ne,this.setupRenderTarget=K,this.updateRenderTargetMipmap=Ge,this.updateMultisampleRenderTarget=Ot,this.setupDepthRenderbuffer=Ft,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=It}function lE(r,t,e){let n=e.isWebGL2;function i(s,a=Sn){let o,c=ge.getTransfer(a);if(s===Fi)return r.UNSIGNED_BYTE;if(s===m0)return r.UNSIGNED_SHORT_4_4_4_4;if(s===g0)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Gx)return r.BYTE;if(s===Vx)return r.SHORT;if(s===bf)return r.UNSIGNED_SHORT;if(s===p0)return r.INT;if(s===Di)return r.UNSIGNED_INT;if(s===ss)return r.FLOAT;if(s===Wn)return n?r.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Wx)return r.ALPHA;if(s===ai)return r.RGBA;if(s===qx)return r.LUMINANCE;if(s===Xx)return r.LUMINANCE_ALPHA;if(s===rr)return r.DEPTH_COMPONENT;if(s===na)return r.DEPTH_STENCIL;if(s===Tu)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===jx)return r.RED;if(s===v0)return r.RED_INTEGER;if(s===Yx)return r.RG;if(s===x0)return r.RG_INTEGER;if(s===b0)return r.RGBA_INTEGER;if(s===kh||s===Uh||s===Oh||s===zh)if(c===ke)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===kh)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Uh)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Oh)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===zh)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===kh)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Uh)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Oh)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===zh)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Lp||s===Ip||s===Dp||s===Fp)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Lp)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ip)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Dp)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Fp)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===y0)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Hp||s===Np)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Hp)return c===ke?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Np)return c===ke?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===kp||s===Up||s===Op||s===zp||s===Bp||s===Gp||s===Vp||s===Wp||s===qp||s===Xp||s===jp||s===Yp||s===Kp||s===Jp)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(s===kp)return c===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Up)return c===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Op)return c===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===zp)return c===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Bp)return c===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Gp)return c===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Vp)return c===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Wp)return c===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===qp)return c===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Xp)return c===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===jp)return c===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Yp)return c===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Kp)return c===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Jp)return c===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Bh||s===Zp||s===Qp)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(s===Bh)return c===ke?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Zp)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Qp)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Kx||s===$p||s===tm||s===em)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(s===Bh)return o.COMPRESSED_RED_RGTC1_EXT;if(s===$p)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===tm)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===em)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===sr?n?r.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}var Uu=class extends Ue{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Pt=class extends Le{constructor(){super(),this.isGroup=!0,this.type="Group"}},hE={type:"move"},io=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let v of t.hand.values()){let m=e.getJointPose(v,n),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(hE)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Pt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Ou=class extends as{constructor(t,e){super();let n=this,i=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,g=null,v=e.getContextAttributes(),m=null,p=null,x=[],y=[],M=new at,E=null,b=new Ue;b.layers.enable(1),b.viewport=new he;let w=new Ue;w.layers.enable(2),w.viewport=new he;let C=[b,w],_=new Uu;_.layers.enable(1),_.layers.enable(2);let S=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let $=x[z];return $===void 0&&($=new io,x[z]=$),$.getTargetRaySpace()},this.getControllerGrip=function(z){let $=x[z];return $===void 0&&($=new io,x[z]=$),$.getGripSpace()},this.getHand=function(z){let $=x[z];return $===void 0&&($=new io,x[z]=$),$.getHandSpace()};function F(z){let $=y.indexOf(z.inputSource);if($===-1)return;let lt=x[$];lt!==void 0&&(lt.update(z.inputSource,z.frame,l||a),lt.dispatchEvent({type:z.type,data:z.inputSource}))}function N(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",N),i.removeEventListener("inputsourceschange",L);for(let z=0;z<x.length;z++){let $=y[z];$!==null&&(y[z]=null,x[z].disconnect($))}S=null,I=null,t.setRenderTarget(m),d=null,f=null,u=null,i=null,p=null,it.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(M.width,M.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){s=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){o=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(z){l=z},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(z){if(i=z,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",N),i.addEventListener("inputsourceschange",L),v.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(M),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let $={antialias:i.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,e,$),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),p=new mn(d.framebufferWidth,d.framebufferHeight,{format:ai,type:Fi,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil})}else{let $=null,lt=null,ht=null;v.depth&&(ht=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,$=v.stencil?na:rr,lt=v.stencil?sr:Di);let _t={colorFormat:e.RGBA8,depthFormat:ht,scaleFactor:s};u=new XRWebGLBinding(i,e),f=u.createProjectionLayer(_t),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),p=new mn(f.textureWidth,f.textureHeight,{format:ai,type:Fi,depthTexture:new oa(f.textureWidth,f.textureHeight,lt,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0});let Ut=t.properties.get(p);Ut.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),it.setContext(i),it.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function L(z){for(let $=0;$<z.removed.length;$++){let lt=z.removed[$],ht=y.indexOf(lt);ht>=0&&(y[ht]=null,x[ht].disconnect(lt))}for(let $=0;$<z.added.length;$++){let lt=z.added[$],ht=y.indexOf(lt);if(ht===-1){for(let Ut=0;Ut<x.length;Ut++)if(Ut>=y.length){y.push(lt),ht=Ut;break}else if(y[Ut]===null){y[Ut]=lt,ht=Ut;break}if(ht===-1)break}let _t=x[ht];_t&&_t.connect(lt)}}let P=new T,D=new T;function U(z,$,lt){P.setFromMatrixPosition($.matrixWorld),D.setFromMatrixPosition(lt.matrixWorld);let ht=P.distanceTo(D),_t=$.projectionMatrix.elements,Ut=lt.projectionMatrix.elements,Xt=_t[14]/(_t[10]-1),Ft=_t[14]/(_t[10]+1),ne=(_t[9]+1)/_t[5],K=(_t[9]-1)/_t[5],Ge=(_t[8]-1)/_t[0],Ot=(Ut[8]+1)/Ut[0],Yt=Xt*Ge,It=Xt*Ot,Ce=ht/(-Ge+Ot),Qt=Ce*-Ge;$.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(Qt),z.translateZ(Ce),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();let R=Xt+Ce,A=Ft+Ce,k=Yt-Qt,V=It+(ht-Qt),Y=ne*Ft/A*R,W=K*Ft/A*R;z.projectionMatrix.makePerspective(k,V,Y,W,R,A),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}function O(z,$){$===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices($.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(i===null)return;_.near=w.near=b.near=z.near,_.far=w.far=b.far=z.far,(S!==_.near||I!==_.far)&&(i.updateRenderState({depthNear:_.near,depthFar:_.far}),S=_.near,I=_.far);let $=z.parent,lt=_.cameras;O(_,$);for(let ht=0;ht<lt.length;ht++)O(lt[ht],$);lt.length===2?U(_,b,w):_.projectionMatrix.copy(b.projectionMatrix),G(z,_,$)};function G(z,$,lt){lt===null?z.matrix.copy($.matrixWorld):(z.matrix.copy(lt.matrixWorld),z.matrix.invert(),z.matrix.multiply($.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy($.projectionMatrix),z.projectionMatrixInverse.copy($.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=sa*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(z){c=z,f!==null&&(f.fixedFoveation=z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=z)};let j=null;function J(z,$){if(h=$.getViewerPose(l||a),g=$,h!==null){let lt=h.views;d!==null&&(t.setRenderTargetFramebuffer(p,d.framebuffer),t.setRenderTarget(p));let ht=!1;lt.length!==_.cameras.length&&(_.cameras.length=0,ht=!0);for(let _t=0;_t<lt.length;_t++){let Ut=lt[_t],Xt=null;if(d!==null)Xt=d.getViewport(Ut);else{let ne=u.getViewSubImage(f,Ut);Xt=ne.viewport,_t===0&&(t.setRenderTargetTextures(p,ne.colorTexture,f.ignoreDepthValues?void 0:ne.depthStencilTexture),t.setRenderTarget(p))}let Ft=C[_t];Ft===void 0&&(Ft=new Ue,Ft.layers.enable(_t),Ft.viewport=new he,C[_t]=Ft),Ft.matrix.fromArray(Ut.transform.matrix),Ft.matrix.decompose(Ft.position,Ft.quaternion,Ft.scale),Ft.projectionMatrix.fromArray(Ut.projectionMatrix),Ft.projectionMatrixInverse.copy(Ft.projectionMatrix).invert(),Ft.viewport.set(Xt.x,Xt.y,Xt.width,Xt.height),_t===0&&(_.matrix.copy(Ft.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),ht===!0&&_.cameras.push(Ft)}}for(let lt=0;lt<x.length;lt++){let ht=y[lt],_t=x[lt];ht!==null&&_t!==void 0&&_t.update(ht,$,l||a)}j&&j(z,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),g=null}let it=new A0;it.setAnimationLoop(J),this.setAnimationLoop=function(z){j=z},this.dispose=function(){}}};function uE(r,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,S0(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,x,y,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,M)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),v(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,x,y):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===bn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===bn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let x=t.get(p).envMap;if(x&&(m.envMap.value=x,m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let y=r._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*y,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,x,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===bn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){let x=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function fE(r,t,e,n){let i={},s={},a=[],o=e.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(x,y){let M=y.program;n.uniformBlockBinding(x,M)}function l(x,y){let M=i[x.id];M===void 0&&(g(x),M=h(x),i[x.id]=M,x.addEventListener("dispose",m));let E=y.program;n.updateUBOMapping(x,E);let b=t.render.frame;s[x.id]!==b&&(f(x),s[x.id]=b)}function h(x){let y=u();x.__bindingPointIndex=y;let M=r.createBuffer(),E=x.__size,b=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,M),r.bufferData(r.UNIFORM_BUFFER,E,b),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,M),M}function u(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){let y=i[x.id],M=x.uniforms,E=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let b=0,w=M.length;b<w;b++){let C=Array.isArray(M[b])?M[b]:[M[b]];for(let _=0,S=C.length;_<S;_++){let I=C[_];if(d(I,b,_,E)===!0){let F=I.__offset,N=Array.isArray(I.value)?I.value:[I.value],L=0;for(let P=0;P<N.length;P++){let D=N[P],U=v(D);typeof D=="number"||typeof D=="boolean"?(I.__data[0]=D,r.bufferSubData(r.UNIFORM_BUFFER,F+L,I.__data)):D.isMatrix3?(I.__data[0]=D.elements[0],I.__data[1]=D.elements[1],I.__data[2]=D.elements[2],I.__data[3]=0,I.__data[4]=D.elements[3],I.__data[5]=D.elements[4],I.__data[6]=D.elements[5],I.__data[7]=0,I.__data[8]=D.elements[6],I.__data[9]=D.elements[7],I.__data[10]=D.elements[8],I.__data[11]=0):(D.toArray(I.__data,L),L+=U.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,F,I.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(x,y,M,E){let b=x.value,w=y+"_"+M;if(E[w]===void 0)return typeof b=="number"||typeof b=="boolean"?E[w]=b:E[w]=b.clone(),!0;{let C=E[w];if(typeof b=="number"||typeof b=="boolean"){if(C!==b)return E[w]=b,!0}else if(C.equals(b)===!1)return C.copy(b),!0}return!1}function g(x){let y=x.uniforms,M=0,E=16;for(let w=0,C=y.length;w<C;w++){let _=Array.isArray(y[w])?y[w]:[y[w]];for(let S=0,I=_.length;S<I;S++){let F=_[S],N=Array.isArray(F.value)?F.value:[F.value];for(let L=0,P=N.length;L<P;L++){let D=N[L],U=v(D),O=M%E;O!==0&&E-O<U.boundary&&(M+=E-O),F.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=M,M+=U.storage}}}let b=M%E;return b>0&&(M+=E-b),x.__size=M,x.__cache={},this}function v(x){let y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function m(x){let y=x.target;y.removeEventListener("dispose",m);let M=a.indexOf(y.__bindingPointIndex);a.splice(M,1),r.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function p(){for(let x in i)r.deleteBuffer(i[x]);a=[],i={},s={}}return{bind:c,update:l,dispose:p}}var uo=class{constructor(t={}){let{canvas:e=_b(),context:n=null,depth:i=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=a;let d=new Uint32Array(4),g=new Int32Array(4),v=null,m=null,p=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ue,this._useLegacyLights=!1,this.toneMapping=Rs,this.toneMappingExposure=1;let y=this,M=!1,E=0,b=0,w=null,C=-1,_=null,S=new he,I=new he,F=null,N=new et(0),L=0,P=e.width,D=e.height,U=1,O=null,G=null,j=new he(0,0,P,D),J=new he(0,0,P,D),it=!1,z=new lo,$=!1,lt=!1,ht=null,_t=new bt,Ut=new at,Xt=new T,Ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ne(){return w===null?U:1}let K=n;function Ge(H,X){for(let tt=0;tt<H.length;tt++){let nt=H[tt],Q=e.getContext(nt,X);if(Q!==null)return Q}return null}try{let H={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r160"),e.addEventListener("webglcontextlost",ft,!1),e.addEventListener("webglcontextrestored",B,!1),e.addEventListener("webglcontextcreationerror",xt,!1),K===null){let X=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&X.shift(),K=Ge(X,H),K===null)throw Ge(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&K instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),K.getShaderPrecisionFormat===void 0&&(K.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(H){throw console.error("THREE.WebGLRenderer: "+H.message),H}let Ot,Yt,It,Ce,Qt,R,A,k,V,Y,W,ot,st,ct,ut,vt,Z,wt,Rt,Lt,Mt,pt,Bt,te;function se(){Ot=new L1(K),Yt=new T1(K,Ot,t),Ot.init(Yt),pt=new lE(K,Ot,Yt),It=new oE(K,Ot,Yt),Ce=new F1(K),Qt=new KM,R=new cE(K,Ot,It,Qt,Yt,pt,Ce),A=new A1(y),k=new P1(y),V=new Gb(K,Yt),Bt=new E1(K,Ot,V,Yt),Y=new I1(K,V,Ce,Bt),W=new U1(K,Y,V,Ce),Rt=new k1(K,Yt,R),vt=new S1(Qt),ot=new YM(y,A,k,Ot,Yt,Bt,vt),st=new uE(y,Qt),ct=new ZM,ut=new iE(Ot,Yt),wt=new M1(y,A,k,It,W,f,c),Z=new aE(y,W,Yt),te=new fE(K,Ce,Yt,It),Lt=new w1(K,Ot,Ce,Yt),Mt=new D1(K,Ot,Ce,Yt),Ce.programs=ot.programs,y.capabilities=Yt,y.extensions=Ot,y.properties=Qt,y.renderLists=ct,y.shadowMap=Z,y.state=It,y.info=Ce}se();let Kt=new Ou(y,K);this.xr=Kt,this.getContext=function(){return K},this.getContextAttributes=function(){return K.getContextAttributes()},this.forceContextLoss=function(){let H=Ot.get("WEBGL_lose_context");H&&H.loseContext()},this.forceContextRestore=function(){let H=Ot.get("WEBGL_lose_context");H&&H.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(H){H!==void 0&&(U=H,this.setSize(P,D,!1))},this.getSize=function(H){return H.set(P,D)},this.setSize=function(H,X,tt=!0){if(Kt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=H,D=X,e.width=Math.floor(H*U),e.height=Math.floor(X*U),tt===!0&&(e.style.width=H+"px",e.style.height=X+"px"),this.setViewport(0,0,H,X)},this.getDrawingBufferSize=function(H){return H.set(P*U,D*U).floor()},this.setDrawingBufferSize=function(H,X,tt){P=H,D=X,U=tt,e.width=Math.floor(H*tt),e.height=Math.floor(X*tt),this.setViewport(0,0,H,X)},this.getCurrentViewport=function(H){return H.copy(S)},this.getViewport=function(H){return H.copy(j)},this.setViewport=function(H,X,tt,nt){H.isVector4?j.set(H.x,H.y,H.z,H.w):j.set(H,X,tt,nt),It.viewport(S.copy(j).multiplyScalar(U).floor())},this.getScissor=function(H){return H.copy(J)},this.setScissor=function(H,X,tt,nt){H.isVector4?J.set(H.x,H.y,H.z,H.w):J.set(H,X,tt,nt),It.scissor(I.copy(J).multiplyScalar(U).floor())},this.getScissorTest=function(){return it},this.setScissorTest=function(H){It.setScissorTest(it=H)},this.setOpaqueSort=function(H){O=H},this.setTransparentSort=function(H){G=H},this.getClearColor=function(H){return H.copy(wt.getClearColor())},this.setClearColor=function(){wt.setClearColor.apply(wt,arguments)},this.getClearAlpha=function(){return wt.getClearAlpha()},this.setClearAlpha=function(){wt.setClearAlpha.apply(wt,arguments)},this.clear=function(H=!0,X=!0,tt=!0){let nt=0;if(H){let Q=!1;if(w!==null){let St=w.texture.format;Q=St===b0||St===x0||St===v0}if(Q){let St=w.texture.type,Ht=St===Fi||St===Di||St===bf||St===sr||St===m0||St===g0,jt=wt.getClearColor(),Zt=wt.getClearAlpha(),oe=jt.r,ee=jt.g,ie=jt.b;Ht?(d[0]=oe,d[1]=ee,d[2]=ie,d[3]=Zt,K.clearBufferuiv(K.COLOR,0,d)):(g[0]=oe,g[1]=ee,g[2]=ie,g[3]=Zt,K.clearBufferiv(K.COLOR,0,g))}else nt|=K.COLOR_BUFFER_BIT}X&&(nt|=K.DEPTH_BUFFER_BIT),tt&&(nt|=K.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K.clear(nt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ft,!1),e.removeEventListener("webglcontextrestored",B,!1),e.removeEventListener("webglcontextcreationerror",xt,!1),ct.dispose(),ut.dispose(),Qt.dispose(),A.dispose(),k.dispose(),W.dispose(),Bt.dispose(),te.dispose(),ot.dispose(),Kt.dispose(),Kt.removeEventListener("sessionstart",Hn),Kt.removeEventListener("sessionend",Fe),ht&&(ht.dispose(),ht=null),Nn.stop()};function ft(H){H.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function B(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let H=Ce.autoReset,X=Z.enabled,tt=Z.autoUpdate,nt=Z.needsUpdate,Q=Z.type;se(),Ce.autoReset=H,Z.enabled=X,Z.autoUpdate=tt,Z.needsUpdate=nt,Z.type=Q}function xt(H){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",H.statusMessage)}function mt(H){let X=H.target;X.removeEventListener("dispose",mt),Wt(X)}function Wt(H){Gt(H),Qt.remove(H)}function Gt(H){let X=Qt.get(H).programs;X!==void 0&&(X.forEach(function(tt){ot.releaseProgram(tt)}),H.isShaderMaterial&&ot.releaseShaderCache(H))}this.renderBufferDirect=function(H,X,tt,nt,Q,St){X===null&&(X=Ft);let Ht=Q.isMesh&&Q.matrixWorld.determinant()<0,jt=cx(H,X,tt,nt,Q);It.setMaterial(nt,Ht);let Zt=tt.index,oe=1;if(nt.wireframe===!0){if(Zt=Y.getWireframeAttribute(tt),Zt===void 0)return;oe=2}let ee=tt.drawRange,ie=tt.attributes.position,Qe=ee.start*oe,Yn=(ee.start+ee.count)*oe;St!==null&&(Qe=Math.max(Qe,St.start*oe),Yn=Math.min(Yn,(St.start+St.count)*oe)),Zt!==null?(Qe=Math.max(Qe,0),Yn=Math.min(Yn,Zt.count)):ie!=null&&(Qe=Math.max(Qe,0),Yn=Math.min(Yn,ie.count));let dn=Yn-Qe;if(dn<0||dn===1/0)return;Bt.setup(Q,nt,jt,tt,Zt);let Ki,We=Lt;if(Zt!==null&&(Ki=V.get(Zt),We=Mt,We.setIndex(Ki)),Q.isMesh)nt.wireframe===!0?(It.setLineWidth(nt.wireframeLinewidth*ne()),We.setMode(K.LINES)):We.setMode(K.TRIANGLES);else if(Q.isLine){let ce=nt.linewidth;ce===void 0&&(ce=1),It.setLineWidth(ce*ne()),Q.isLineSegments?We.setMode(K.LINES):Q.isLineLoop?We.setMode(K.LINE_LOOP):We.setMode(K.LINE_STRIP)}else Q.isPoints?We.setMode(K.POINTS):Q.isSprite&&We.setMode(K.TRIANGLES);if(Q.isBatchedMesh)We.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else if(Q.isInstancedMesh)We.renderInstances(Qe,dn,Q.count);else if(tt.isInstancedBufferGeometry){let ce=tt._maxInstanceCount!==void 0?tt._maxInstanceCount:1/0,Dh=Math.min(tt.instanceCount,ce);We.renderInstances(Qe,dn,Dh)}else We.render(Qe,dn)};function Me(H,X,tt){H.transparent===!0&&H.side===pe&&H.forceSinglePass===!1?(H.side=bn,H.needsUpdate=!0,tc(H,X,tt),H.side=Hi,H.needsUpdate=!0,tc(H,X,tt),H.side=pe):tc(H,X,tt)}this.compile=function(H,X,tt=null){tt===null&&(tt=H),m=ut.get(tt),m.init(),x.push(m),tt.traverseVisible(function(Q){Q.isLight&&Q.layers.test(X.layers)&&(m.pushLight(Q),Q.castShadow&&m.pushShadow(Q))}),H!==tt&&H.traverseVisible(function(Q){Q.isLight&&Q.layers.test(X.layers)&&(m.pushLight(Q),Q.castShadow&&m.pushShadow(Q))}),m.setupLights(y._useLegacyLights);let nt=new Set;return H.traverse(function(Q){let St=Q.material;if(St)if(Array.isArray(St))for(let Ht=0;Ht<St.length;Ht++){let jt=St[Ht];Me(jt,tt,Q),nt.add(jt)}else Me(St,tt,Q),nt.add(St)}),x.pop(),m=null,nt},this.compileAsync=function(H,X,tt=null){let nt=this.compile(H,X,tt);return new Promise(Q=>{function St(){if(nt.forEach(function(Ht){Qt.get(Ht).currentProgram.isReady()&&nt.delete(Ht)}),nt.size===0){Q(H);return}setTimeout(St,10)}Ot.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let De=null;function fn(H){De&&De(H)}function Hn(){Nn.stop()}function Fe(){Nn.start()}let Nn=new A0;Nn.setAnimationLoop(fn),typeof self<"u"&&Nn.setContext(self),this.setAnimationLoop=function(H){De=H,Kt.setAnimationLoop(H),H===null?Nn.stop():Nn.start()},Kt.addEventListener("sessionstart",Hn),Kt.addEventListener("sessionend",Fe),this.render=function(H,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Kt.enabled===!0&&Kt.isPresenting===!0&&(Kt.cameraAutoUpdate===!0&&Kt.updateCamera(X),X=Kt.getCamera()),H.isScene===!0&&H.onBeforeRender(y,H,X,w),m=ut.get(H,x.length),m.init(),x.push(m),_t.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),z.setFromProjectionMatrix(_t),lt=this.localClippingEnabled,$=vt.init(this.clippingPlanes,lt),v=ct.get(H,p.length),v.init(),p.push(v),Pi(H,X,0,y.sortObjects),v.finish(),y.sortObjects===!0&&v.sort(O,G),this.info.render.frame++,$===!0&&vt.beginShadows();let tt=m.state.shadowsArray;if(Z.render(tt,H,X),$===!0&&vt.endShadows(),this.info.autoReset===!0&&this.info.reset(),wt.render(v,H),m.setupLights(y._useLegacyLights),X.isArrayCamera){let nt=X.cameras;for(let Q=0,St=nt.length;Q<St;Q++){let Ht=nt[Q];bp(v,H,Ht,Ht.viewport)}}else bp(v,H,X);w!==null&&(R.updateMultisampleRenderTarget(w),R.updateRenderTargetMipmap(w)),H.isScene===!0&&H.onAfterRender(y,H,X),Bt.resetDefaultState(),C=-1,_=null,x.pop(),x.length>0?m=x[x.length-1]:m=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function Pi(H,X,tt,nt){if(H.visible===!1)return;if(H.layers.test(X.layers)){if(H.isGroup)tt=H.renderOrder;else if(H.isLOD)H.autoUpdate===!0&&H.update(X);else if(H.isLight)m.pushLight(H),H.castShadow&&m.pushShadow(H);else if(H.isSprite){if(!H.frustumCulled||z.intersectsSprite(H)){nt&&Xt.setFromMatrixPosition(H.matrixWorld).applyMatrix4(_t);let Ht=W.update(H),jt=H.material;jt.visible&&v.push(H,Ht,jt,tt,Xt.z,null)}}else if((H.isMesh||H.isLine||H.isPoints)&&(!H.frustumCulled||z.intersectsObject(H))){let Ht=W.update(H),jt=H.material;if(nt&&(H.boundingSphere!==void 0?(H.boundingSphere===null&&H.computeBoundingSphere(),Xt.copy(H.boundingSphere.center)):(Ht.boundingSphere===null&&Ht.computeBoundingSphere(),Xt.copy(Ht.boundingSphere.center)),Xt.applyMatrix4(H.matrixWorld).applyMatrix4(_t)),Array.isArray(jt)){let Zt=Ht.groups;for(let oe=0,ee=Zt.length;oe<ee;oe++){let ie=Zt[oe],Qe=jt[ie.materialIndex];Qe&&Qe.visible&&v.push(H,Ht,Qe,tt,Xt.z,ie)}}else jt.visible&&v.push(H,Ht,jt,tt,Xt.z,null)}}let St=H.children;for(let Ht=0,jt=St.length;Ht<jt;Ht++)Pi(St[Ht],X,tt,nt)}function bp(H,X,tt,nt){let Q=H.opaque,St=H.transmissive,Ht=H.transparent;m.setupLightsView(tt),$===!0&&vt.setGlobalState(y.clippingPlanes,tt),St.length>0&&ox(Q,St,X,tt),nt&&It.viewport(S.copy(nt)),Q.length>0&&$o(Q,X,tt),St.length>0&&$o(St,X,tt),Ht.length>0&&$o(Ht,X,tt),It.buffers.depth.setTest(!0),It.buffers.depth.setMask(!0),It.buffers.color.setMask(!0),It.setPolygonOffset(!1)}function ox(H,X,tt,nt){if((tt.isScene===!0?tt.overrideMaterial:null)!==null)return;let St=Yt.isWebGL2;ht===null&&(ht=new mn(1,1,{generateMipmaps:!0,type:Ot.has("EXT_color_buffer_half_float")?Wn:Fi,minFilter:Ni,samples:St?4:0})),y.getDrawingBufferSize(Ut),St?ht.setSize(Ut.x,Ut.y):ht.setSize(zc(Ut.x),zc(Ut.y));let Ht=y.getRenderTarget();y.setRenderTarget(ht),y.getClearColor(N),L=y.getClearAlpha(),L<1&&y.setClearColor(16777215,.5),y.clear();let jt=y.toneMapping;y.toneMapping=Rs,$o(H,tt,nt),R.updateMultisampleRenderTarget(ht),R.updateRenderTargetMipmap(ht);let Zt=!1;for(let oe=0,ee=X.length;oe<ee;oe++){let ie=X[oe],Qe=ie.object,Yn=ie.geometry,dn=ie.material,Ki=ie.group;if(dn.side===pe&&Qe.layers.test(nt.layers)){let We=dn.side;dn.side=bn,dn.needsUpdate=!0,yp(Qe,tt,nt,Yn,dn,Ki),dn.side=We,dn.needsUpdate=!0,Zt=!0}}Zt===!0&&(R.updateMultisampleRenderTarget(ht),R.updateRenderTargetMipmap(ht)),y.setRenderTarget(Ht),y.setClearColor(N,L),y.toneMapping=jt}function $o(H,X,tt){let nt=X.isScene===!0?X.overrideMaterial:null;for(let Q=0,St=H.length;Q<St;Q++){let Ht=H[Q],jt=Ht.object,Zt=Ht.geometry,oe=nt===null?Ht.material:nt,ee=Ht.group;jt.layers.test(tt.layers)&&yp(jt,X,tt,Zt,oe,ee)}}function yp(H,X,tt,nt,Q,St){H.onBeforeRender(y,X,tt,nt,Q,St),H.modelViewMatrix.multiplyMatrices(tt.matrixWorldInverse,H.matrixWorld),H.normalMatrix.getNormalMatrix(H.modelViewMatrix),Q.onBeforeRender(y,X,tt,nt,H,St),Q.transparent===!0&&Q.side===pe&&Q.forceSinglePass===!1?(Q.side=bn,Q.needsUpdate=!0,y.renderBufferDirect(tt,X,nt,Q,H,St),Q.side=Hi,Q.needsUpdate=!0,y.renderBufferDirect(tt,X,nt,Q,H,St),Q.side=pe):y.renderBufferDirect(tt,X,nt,Q,H,St),H.onAfterRender(y,X,tt,nt,Q,St)}function tc(H,X,tt){X.isScene!==!0&&(X=Ft);let nt=Qt.get(H),Q=m.state.lights,St=m.state.shadowsArray,Ht=Q.state.version,jt=ot.getParameters(H,Q.state,St,X,tt),Zt=ot.getProgramCacheKey(jt),oe=nt.programs;nt.environment=H.isMeshStandardMaterial?X.environment:null,nt.fog=X.fog,nt.envMap=(H.isMeshStandardMaterial?k:A).get(H.envMap||nt.environment),oe===void 0&&(H.addEventListener("dispose",mt),oe=new Map,nt.programs=oe);let ee=oe.get(Zt);if(ee!==void 0){if(nt.currentProgram===ee&&nt.lightsStateVersion===Ht)return Mp(H,jt),ee}else jt.uniforms=ot.getUniforms(H),H.onBuild(tt,jt,y),H.onBeforeCompile(jt,y),ee=ot.acquireProgram(jt,Zt),oe.set(Zt,ee),nt.uniforms=jt.uniforms;let ie=nt.uniforms;return(!H.isShaderMaterial&&!H.isRawShaderMaterial||H.clipping===!0)&&(ie.clippingPlanes=vt.uniform),Mp(H,jt),nt.needsLights=hx(H),nt.lightsStateVersion=Ht,nt.needsLights&&(ie.ambientLightColor.value=Q.state.ambient,ie.lightProbe.value=Q.state.probe,ie.directionalLights.value=Q.state.directional,ie.directionalLightShadows.value=Q.state.directionalShadow,ie.spotLights.value=Q.state.spot,ie.spotLightShadows.value=Q.state.spotShadow,ie.rectAreaLights.value=Q.state.rectArea,ie.ltc_1.value=Q.state.rectAreaLTC1,ie.ltc_2.value=Q.state.rectAreaLTC2,ie.pointLights.value=Q.state.point,ie.pointLightShadows.value=Q.state.pointShadow,ie.hemisphereLights.value=Q.state.hemi,ie.directionalShadowMap.value=Q.state.directionalShadowMap,ie.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,ie.spotShadowMap.value=Q.state.spotShadowMap,ie.spotLightMatrix.value=Q.state.spotLightMatrix,ie.spotLightMap.value=Q.state.spotLightMap,ie.pointShadowMap.value=Q.state.pointShadowMap,ie.pointShadowMatrix.value=Q.state.pointShadowMatrix),nt.currentProgram=ee,nt.uniformsList=null,ee}function _p(H){if(H.uniformsList===null){let X=H.currentProgram.getUniforms();H.uniformsList=$r.seqWithValue(X.seq,H.uniforms)}return H.uniformsList}function Mp(H,X){let tt=Qt.get(H);tt.outputColorSpace=X.outputColorSpace,tt.batching=X.batching,tt.instancing=X.instancing,tt.instancingColor=X.instancingColor,tt.skinning=X.skinning,tt.morphTargets=X.morphTargets,tt.morphNormals=X.morphNormals,tt.morphColors=X.morphColors,tt.morphTargetsCount=X.morphTargetsCount,tt.numClippingPlanes=X.numClippingPlanes,tt.numIntersection=X.numClipIntersection,tt.vertexAlphas=X.vertexAlphas,tt.vertexTangents=X.vertexTangents,tt.toneMapping=X.toneMapping}function cx(H,X,tt,nt,Q){X.isScene!==!0&&(X=Ft),R.resetTextureUnits();let St=X.fog,Ht=nt.isMeshStandardMaterial?X.environment:null,jt=w===null?y.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:rn,Zt=(nt.isMeshStandardMaterial?k:A).get(nt.envMap||Ht),oe=nt.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,ee=!!tt.attributes.tangent&&(!!nt.normalMap||nt.anisotropy>0),ie=!!tt.morphAttributes.position,Qe=!!tt.morphAttributes.normal,Yn=!!tt.morphAttributes.color,dn=Rs;nt.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(dn=y.toneMapping);let Ki=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,We=Ki!==void 0?Ki.length:0,ce=Qt.get(nt),Dh=m.state.lights;if($===!0&&(lt===!0||H!==_)){let si=H===_&&nt.id===C;vt.setState(nt,H,si)}let je=!1;nt.version===ce.__version?(ce.needsLights&&ce.lightsStateVersion!==Dh.state.version||ce.outputColorSpace!==jt||Q.isBatchedMesh&&ce.batching===!1||!Q.isBatchedMesh&&ce.batching===!0||Q.isInstancedMesh&&ce.instancing===!1||!Q.isInstancedMesh&&ce.instancing===!0||Q.isSkinnedMesh&&ce.skinning===!1||!Q.isSkinnedMesh&&ce.skinning===!0||Q.isInstancedMesh&&ce.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&ce.instancingColor===!1&&Q.instanceColor!==null||ce.envMap!==Zt||nt.fog===!0&&ce.fog!==St||ce.numClippingPlanes!==void 0&&(ce.numClippingPlanes!==vt.numPlanes||ce.numIntersection!==vt.numIntersection)||ce.vertexAlphas!==oe||ce.vertexTangents!==ee||ce.morphTargets!==ie||ce.morphNormals!==Qe||ce.morphColors!==Yn||ce.toneMapping!==dn||Yt.isWebGL2===!0&&ce.morphTargetsCount!==We)&&(je=!0):(je=!0,ce.__version=nt.version);let Ks=ce.currentProgram;je===!0&&(Ks=tc(nt,X,Q));let Ep=!1,Ga=!1,Fh=!1,En=Ks.getUniforms(),Js=ce.uniforms;if(It.useProgram(Ks.program)&&(Ep=!0,Ga=!0,Fh=!0),nt.id!==C&&(C=nt.id,Ga=!0),Ep||_!==H){En.setValue(K,"projectionMatrix",H.projectionMatrix),En.setValue(K,"viewMatrix",H.matrixWorldInverse);let si=En.map.cameraPosition;si!==void 0&&si.setValue(K,Xt.setFromMatrixPosition(H.matrixWorld)),Yt.logarithmicDepthBuffer&&En.setValue(K,"logDepthBufFC",2/(Math.log(H.far+1)/Math.LN2)),(nt.isMeshPhongMaterial||nt.isMeshToonMaterial||nt.isMeshLambertMaterial||nt.isMeshBasicMaterial||nt.isMeshStandardMaterial||nt.isShaderMaterial)&&En.setValue(K,"isOrthographic",H.isOrthographicCamera===!0),_!==H&&(_=H,Ga=!0,Fh=!0)}if(Q.isSkinnedMesh){En.setOptional(K,Q,"bindMatrix"),En.setOptional(K,Q,"bindMatrixInverse");let si=Q.skeleton;si&&(Yt.floatVertexTextures?(si.boneTexture===null&&si.computeBoneTexture(),En.setValue(K,"boneTexture",si.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Q.isBatchedMesh&&(En.setOptional(K,Q,"batchingTexture"),En.setValue(K,"batchingTexture",Q._matricesTexture,R));let Hh=tt.morphAttributes;if((Hh.position!==void 0||Hh.normal!==void 0||Hh.color!==void 0&&Yt.isWebGL2===!0)&&Rt.update(Q,tt,Ks),(Ga||ce.receiveShadow!==Q.receiveShadow)&&(ce.receiveShadow=Q.receiveShadow,En.setValue(K,"receiveShadow",Q.receiveShadow)),nt.isMeshGouraudMaterial&&nt.envMap!==null&&(Js.envMap.value=Zt,Js.flipEnvMap.value=Zt.isCubeTexture&&Zt.isRenderTargetTexture===!1?-1:1),Ga&&(En.setValue(K,"toneMappingExposure",y.toneMappingExposure),ce.needsLights&&lx(Js,Fh),St&&nt.fog===!0&&st.refreshFogUniforms(Js,St),st.refreshMaterialUniforms(Js,nt,U,D,ht),$r.upload(K,_p(ce),Js,R)),nt.isShaderMaterial&&nt.uniformsNeedUpdate===!0&&($r.upload(K,_p(ce),Js,R),nt.uniformsNeedUpdate=!1),nt.isSpriteMaterial&&En.setValue(K,"center",Q.center),En.setValue(K,"modelViewMatrix",Q.modelViewMatrix),En.setValue(K,"normalMatrix",Q.normalMatrix),En.setValue(K,"modelMatrix",Q.matrixWorld),nt.isShaderMaterial||nt.isRawShaderMaterial){let si=nt.uniformsGroups;for(let Nh=0,ux=si.length;Nh<ux;Nh++)if(Yt.isWebGL2){let wp=si[Nh];te.update(wp,Ks),te.bind(wp,Ks)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ks}function lx(H,X){H.ambientLightColor.needsUpdate=X,H.lightProbe.needsUpdate=X,H.directionalLights.needsUpdate=X,H.directionalLightShadows.needsUpdate=X,H.pointLights.needsUpdate=X,H.pointLightShadows.needsUpdate=X,H.spotLights.needsUpdate=X,H.spotLightShadows.needsUpdate=X,H.rectAreaLights.needsUpdate=X,H.hemisphereLights.needsUpdate=X}function hx(H){return H.isMeshLambertMaterial||H.isMeshToonMaterial||H.isMeshPhongMaterial||H.isMeshStandardMaterial||H.isShadowMaterial||H.isShaderMaterial&&H.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(H,X,tt){Qt.get(H.texture).__webglTexture=X,Qt.get(H.depthTexture).__webglTexture=tt;let nt=Qt.get(H);nt.__hasExternalTextures=!0,nt.__hasExternalTextures&&(nt.__autoAllocateDepthBuffer=tt===void 0,nt.__autoAllocateDepthBuffer||Ot.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),nt.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(H,X){let tt=Qt.get(H);tt.__webglFramebuffer=X,tt.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(H,X=0,tt=0){w=H,E=X,b=tt;let nt=!0,Q=null,St=!1,Ht=!1;if(H){let Zt=Qt.get(H);Zt.__useDefaultFramebuffer!==void 0?(It.bindFramebuffer(K.FRAMEBUFFER,null),nt=!1):Zt.__webglFramebuffer===void 0?R.setupRenderTarget(H):Zt.__hasExternalTextures&&R.rebindTextures(H,Qt.get(H.texture).__webglTexture,Qt.get(H.depthTexture).__webglTexture);let oe=H.texture;(oe.isData3DTexture||oe.isDataArrayTexture||oe.isCompressedArrayTexture)&&(Ht=!0);let ee=Qt.get(H).__webglFramebuffer;H.isWebGLCubeRenderTarget?(Array.isArray(ee[X])?Q=ee[X][tt]:Q=ee[X],St=!0):Yt.isWebGL2&&H.samples>0&&R.useMultisampledRTT(H)===!1?Q=Qt.get(H).__webglMultisampledFramebuffer:Array.isArray(ee)?Q=ee[tt]:Q=ee,S.copy(H.viewport),I.copy(H.scissor),F=H.scissorTest}else S.copy(j).multiplyScalar(U).floor(),I.copy(J).multiplyScalar(U).floor(),F=it;if(It.bindFramebuffer(K.FRAMEBUFFER,Q)&&Yt.drawBuffers&&nt&&It.drawBuffers(H,Q),It.viewport(S),It.scissor(I),It.setScissorTest(F),St){let Zt=Qt.get(H.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_CUBE_MAP_POSITIVE_X+X,Zt.__webglTexture,tt)}else if(Ht){let Zt=Qt.get(H.texture),oe=X||0;K.framebufferTextureLayer(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,Zt.__webglTexture,tt||0,oe)}C=-1},this.readRenderTargetPixels=function(H,X,tt,nt,Q,St,Ht){if(!(H&&H.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let jt=Qt.get(H).__webglFramebuffer;if(H.isWebGLCubeRenderTarget&&Ht!==void 0&&(jt=jt[Ht]),jt){It.bindFramebuffer(K.FRAMEBUFFER,jt);try{let Zt=H.texture,oe=Zt.format,ee=Zt.type;if(oe!==ai&&pt.convert(oe)!==K.getParameter(K.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let ie=ee===Wn&&(Ot.has("EXT_color_buffer_half_float")||Yt.isWebGL2&&Ot.has("EXT_color_buffer_float"));if(ee!==Fi&&pt.convert(ee)!==K.getParameter(K.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ee===ss&&(Yt.isWebGL2||Ot.has("OES_texture_float")||Ot.has("WEBGL_color_buffer_float")))&&!ie){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=H.width-nt&&tt>=0&&tt<=H.height-Q&&K.readPixels(X,tt,nt,Q,pt.convert(oe),pt.convert(ee),St)}finally{let Zt=w!==null?Qt.get(w).__webglFramebuffer:null;It.bindFramebuffer(K.FRAMEBUFFER,Zt)}}},this.copyFramebufferToTexture=function(H,X,tt=0){let nt=Math.pow(2,-tt),Q=Math.floor(X.image.width*nt),St=Math.floor(X.image.height*nt);R.setTexture2D(X,0),K.copyTexSubImage2D(K.TEXTURE_2D,tt,0,0,H.x,H.y,Q,St),It.unbindTexture()},this.copyTextureToTexture=function(H,X,tt,nt=0){let Q=X.image.width,St=X.image.height,Ht=pt.convert(tt.format),jt=pt.convert(tt.type);R.setTexture2D(tt,0),K.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,tt.flipY),K.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,tt.premultiplyAlpha),K.pixelStorei(K.UNPACK_ALIGNMENT,tt.unpackAlignment),X.isDataTexture?K.texSubImage2D(K.TEXTURE_2D,nt,H.x,H.y,Q,St,Ht,jt,X.image.data):X.isCompressedTexture?K.compressedTexSubImage2D(K.TEXTURE_2D,nt,H.x,H.y,X.mipmaps[0].width,X.mipmaps[0].height,Ht,X.mipmaps[0].data):K.texSubImage2D(K.TEXTURE_2D,nt,H.x,H.y,Ht,jt,X.image),nt===0&&tt.generateMipmaps&&K.generateMipmap(K.TEXTURE_2D),It.unbindTexture()},this.copyTextureToTexture3D=function(H,X,tt,nt,Q=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let St=H.max.x-H.min.x+1,Ht=H.max.y-H.min.y+1,jt=H.max.z-H.min.z+1,Zt=pt.convert(nt.format),oe=pt.convert(nt.type),ee;if(nt.isData3DTexture)R.setTexture3D(nt,0),ee=K.TEXTURE_3D;else if(nt.isDataArrayTexture||nt.isCompressedArrayTexture)R.setTexture2DArray(nt,0),ee=K.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}K.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,nt.flipY),K.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,nt.premultiplyAlpha),K.pixelStorei(K.UNPACK_ALIGNMENT,nt.unpackAlignment);let ie=K.getParameter(K.UNPACK_ROW_LENGTH),Qe=K.getParameter(K.UNPACK_IMAGE_HEIGHT),Yn=K.getParameter(K.UNPACK_SKIP_PIXELS),dn=K.getParameter(K.UNPACK_SKIP_ROWS),Ki=K.getParameter(K.UNPACK_SKIP_IMAGES),We=tt.isCompressedTexture?tt.mipmaps[Q]:tt.image;K.pixelStorei(K.UNPACK_ROW_LENGTH,We.width),K.pixelStorei(K.UNPACK_IMAGE_HEIGHT,We.height),K.pixelStorei(K.UNPACK_SKIP_PIXELS,H.min.x),K.pixelStorei(K.UNPACK_SKIP_ROWS,H.min.y),K.pixelStorei(K.UNPACK_SKIP_IMAGES,H.min.z),tt.isDataTexture||tt.isData3DTexture?K.texSubImage3D(ee,Q,X.x,X.y,X.z,St,Ht,jt,Zt,oe,We.data):tt.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),K.compressedTexSubImage3D(ee,Q,X.x,X.y,X.z,St,Ht,jt,Zt,We.data)):K.texSubImage3D(ee,Q,X.x,X.y,X.z,St,Ht,jt,Zt,oe,We),K.pixelStorei(K.UNPACK_ROW_LENGTH,ie),K.pixelStorei(K.UNPACK_IMAGE_HEIGHT,Qe),K.pixelStorei(K.UNPACK_SKIP_PIXELS,Yn),K.pixelStorei(K.UNPACK_SKIP_ROWS,dn),K.pixelStorei(K.UNPACK_SKIP_IMAGES,Ki),Q===0&&nt.generateMipmaps&&K.generateMipmap(ee),It.unbindTexture()},this.initTexture=function(H){H.isCubeTexture?R.setTextureCube(H,0):H.isData3DTexture?R.setTexture3D(H,0):H.isDataArrayTexture||H.isCompressedArrayTexture?R.setTexture2DArray(H,0):R.setTexture2D(H,0),It.unbindTexture()},this.resetState=function(){E=0,b=0,w=null,It.reset(),Bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return rs}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===Tf?"display-p3":"srgb",e.unpackColorSpace=ge.workingColorSpace===ul?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ue?ar:M0}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===ar?ue:rn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},zu=class extends uo{};zu.prototype.isWebGL1Renderer=!0;var Yc=class r{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new et(t),this.density=e}clone(){return new r(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var os=class extends Le{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}},ca=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=wu,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Mi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},kn=new T,lr=class r{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)kn.fromBufferAttribute(this,e),kn.applyMatrix4(t),this.setXYZ(e,kn.x,kn.y,kn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)kn.fromBufferAttribute(this,e),kn.applyNormalMatrix(t),this.setXYZ(e,kn.x,kn.y,kn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)kn.fromBufferAttribute(this,e),kn.transformDirection(t),this.setXYZ(e,kn.x,kn.y,kn.z);return this}setX(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Ii(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Ii(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Ii(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Ii(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),i=Se(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),i=Se(i,this.array),s=Se(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new Et(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new r(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Mn=class extends _n{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new et(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Gr,ja=new T,Vr=new T,Wr=new T,qr=new at,Ya=new at,D0=new bt,Ec=new T,Ka=new T,wc=new T,Gm=new at,uu=new at,Vm=new at,An=class extends Le{constructor(t=new Mn){if(super(),this.isSprite=!0,this.type="Sprite",Gr===void 0){Gr=new At;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ca(e,5);Gr.setIndex([0,1,2,0,2,3]),Gr.setAttribute("position",new lr(n,3,0,!1)),Gr.setAttribute("uv",new lr(n,2,3,!1))}this.geometry=Gr,this.material=t,this.center=new at(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Vr.setFromMatrixScale(this.matrixWorld),D0.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Wr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Vr.multiplyScalar(-Wr.z);let n=this.material.rotation,i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));let a=this.center;Tc(Ec.set(-.5,-.5,0),Wr,a,Vr,i,s),Tc(Ka.set(.5,-.5,0),Wr,a,Vr,i,s),Tc(wc.set(.5,.5,0),Wr,a,Vr,i,s),Gm.set(0,0),uu.set(1,0),Vm.set(1,1);let o=t.ray.intersectTriangle(Ec,Ka,wc,!1,ja);if(o===null&&(Tc(Ka.set(-.5,.5,0),Wr,a,Vr,i,s),uu.set(0,1),o=t.ray.intersectTriangle(Ec,wc,Ka,!1,ja),o===null))return;let c=t.ray.origin.distanceTo(ja);c<t.near||c>t.far||e.push({distance:c,point:ja.clone(),uv:ir.getInterpolation(ja,Ec,Ka,wc,Gm,uu,Vm,new at),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Tc(r,t,e,n,i,s){qr.subVectors(r,e).addScalar(.5).multiply(n),i!==void 0?(Ya.x=s*qr.x-i*qr.y,Ya.y=i*qr.x+s*qr.y):Ya.copy(qr),r.copy(t),r.x+=Ya.x,r.y+=Ya.y,r.applyMatrix4(D0)}var Wm=new T,qm=new he,Xm=new he,dE=new T,jm=new bt,Sc=new T,fu=new Qn,Ym=new bt,du=new cr,Kc=class extends Nt{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Pp,this.bindMatrix=new bt,this.bindMatrixInverse=new bt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let t=this.geometry;this.boundingBox===null&&(this.boundingBox=new qe),this.boundingBox.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Sc),this.boundingBox.expandByPoint(Sc)}computeBoundingSphere(){let t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Qn),this.boundingSphere.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Sc),this.boundingSphere.expandByPoint(Sc)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fu.copy(this.boundingSphere),fu.applyMatrix4(i),t.ray.intersectsSphere(fu)!==!1&&(Ym.copy(i).invert(),du.copy(t.ray).applyMatrix4(Ym),!(this.boundingBox!==null&&du.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,du)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let t=new he,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);let s=1/t.manhattanLength();s!==1/0?t.multiplyScalar(s):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Pp?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Bx?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){let n=this.skeleton,i=this.geometry;qm.fromBufferAttribute(i.attributes.skinIndex,t),Xm.fromBufferAttribute(i.attributes.skinWeight,t),Wm.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let s=0;s<4;s++){let a=Xm.getComponent(s);if(a!==0){let o=qm.getComponent(s);jm.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),e.addScaledVector(dE.copy(Wm).applyMatrix4(jm),a)}}return e.applyMatrix4(this.bindMatrixInverse)}boneTransform(t,e){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(t,e)}},fo=class extends Le{constructor(){super(),this.isBone=!0,this.type="Bone"}},Bu=class extends yn{constructor(t=null,e=1,n=1,i,s,a,o,c,l=$e,h=$e,u,f){super(null,a,o,c,l,h,i,s,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Km=new bt,pE=new bt,Jc=class r{constructor(t=[],e=[]){this.uuid=Mi(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new bt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){let n=new bt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=t.length;s<a;s++){let o=t[s]?t[s].matrixWorld:pE;Km.multiplyMatrices(o,e[s]),Km.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new r(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4);e.set(this.boneMatrices);let n=new Bu(e,t,t,ai,ss);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){let i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){let s=t.bones[n],a=e[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new fo),this.bones.push(a),this.boneInverses.push(new bt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){let t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let e=this.bones,n=this.boneInverses;for(let i=0,s=e.length;i<s;i++){let a=e[i];t.bones.push(a.uuid);let o=n[i];t.boneInverses.push(o.toArray())}return t}},Ke=class extends Et{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Xr=new bt,Jm=new bt,Ac=[],Zm=new qe,mE=new bt,Ja=new Nt,Za=new Qn,_e=class extends Nt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ke(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,mE)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new qe),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Xr),Zm.copy(t.boundingBox).applyMatrix4(Xr),this.boundingBox.union(Zm)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Qn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Xr),Za.copy(t.boundingSphere).applyMatrix4(Xr),this.boundingSphere.union(Za)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){let n=this.matrixWorld,i=this.count;if(Ja.geometry=this.geometry,Ja.material=this.material,Ja.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Za.copy(this.boundingSphere),Za.applyMatrix4(n),t.ray.intersectsSphere(Za)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Xr),Jm.multiplyMatrices(n,Xr),Ja.matrixWorld=Jm,Ja.raycast(t,Ac);for(let a=0,o=Ac.length;a<o;a++){let c=Ac[a];c.instanceId=s,c.object=this,e.push(c)}Ac.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ke(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var cs=class extends _n{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Qm=new T,$m=new T,t0=new bt,pu=new cr,Rc=new Qn,la=class extends Le{constructor(t=new At,e=new cs){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)Qm.fromBufferAttribute(e,i-1),$m.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Qm.distanceTo($m);t.setAttribute("lineDistance",new yt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Rc.copy(n.boundingSphere),Rc.applyMatrix4(i),Rc.radius+=s,t.ray.intersectsSphere(Rc)===!1)return;t0.copy(i).invert(),pu.copy(t.ray).applyMatrix4(t0);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=new T,h=new T,u=new T,f=new T,d=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){let p=Math.max(0,a.start),x=Math.min(g.count,a.start+a.count);for(let y=p,M=x-1;y<M;y+=d){let E=g.getX(y),b=g.getX(y+1);if(l.fromBufferAttribute(m,E),h.fromBufferAttribute(m,b),pu.distanceSqToSegment(l,h,f,u)>c)continue;f.applyMatrix4(this.matrixWorld);let C=t.ray.origin.distanceTo(f);C<t.near||C>t.far||e.push({distance:C,point:u.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,a.start),x=Math.min(m.count,a.start+a.count);for(let y=p,M=x-1;y<M;y+=d){if(l.fromBufferAttribute(m,y),h.fromBufferAttribute(m,y+1),pu.distanceSqToSegment(l,h,f,u)>c)continue;f.applyMatrix4(this.matrixWorld);let b=t.ray.origin.distanceTo(f);b<t.near||b>t.far||e.push({distance:b,point:u.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}},e0=new T,n0=new T,ki=class extends la{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)e0.fromBufferAttribute(e,i),n0.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+e0.distanceTo(n0);t.setAttribute("lineDistance",new yt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Zc=class extends la{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},wi=class extends _n{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},i0=new bt,Gu=new cr,Cc=new Qn,Pc=new T,gn=class extends Le{constructor(t=new At,e=new wi){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Cc.copy(n.boundingSphere),Cc.applyMatrix4(i),Cc.radius+=s,t.ray.intersectsSphere(Cc)===!1)return;i0.copy(i).invert(),Gu.copy(t.ray).applyMatrix4(i0);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){let f=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);for(let g=f,v=d;g<v;g++){let m=l.getX(g);Pc.fromBufferAttribute(u,m),s0(Pc,m,c,i,t,e,this)}}else{let f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let g=f,v=d;g<v;g++)Pc.fromBufferAttribute(u,g),s0(Pc,g,c,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function s0(r,t,e,n,i,s,a){let o=Gu.distanceSqToPoint(r);if(o<e){let c=new T;Gu.closestPointToPoint(r,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,object:a})}}var Rn=class extends yn{constructor(t,e,n,i,s,a,o,c,l){super(t,e,n,i,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},ci=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),i=0,s=n.length,a;e?a=e:a=t*n[s-1];let o=0,c=s-1,l;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),l=n[i]-a,l<0)o=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===a)return i/(s-1);let h=n[i],f=n[i+1]-h,d=(a-h)/f;return(i+d)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);let a=this.getPoint(i),o=this.getPoint(s),c=e||(a.isVector2?new at:new T);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new T,i=[],s=[],a=[],o=new T,c=new bt;for(let d=0;d<=t;d++){let g=d/t;i[d]=this.getTangentAt(g,new T)}s[0]=new T,a[0]=new T;let l=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(sn(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(c.makeRotationAxis(o,g))}a[d].crossVectors(i[d],s[d])}if(e===!0){let d=Math.acos(sn(s[0].dot(s[t]),-1,1));d/=t,i[0].dot(o.crossVectors(s[0],s[t]))>0&&(d=-d);for(let g=1;g<=t;g++)s[g].applyMatrix4(c.makeRotationAxis(i[g],d*g)),a[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},po=class extends ci{constructor(t=0,e=0,n=1,i=1,s=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e){let n=e||new at,i=Math.PI*2,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(a?s=0:s=i),this.aClockwise===!0&&!a&&(s===i?s=-i:s=s-i);let o=this.aStartAngle+t*s,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Vu=class extends po{constructor(t,e,n,i,s,a){super(t,e,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Rf(){let r=0,t=0,e=0,n=0;function i(s,a,o,c){r=s,t=o,e=-3*s+3*a-2*o-c,n=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,l){i(a,o,l*(o-s),l*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,l,h,u){let f=(a-s)/l-(o-s)/(l+h)+(o-a)/h,d=(o-a)/h-(c-a)/(h+u)+(c-o)/u;f*=h,d*=h,i(a,o,f,d)},calc:function(s){let a=s*s,o=a*s;return r+t*s+e*a+n*o}}}var Lc=new T,mu=new Rf,gu=new Rf,vu=new Rf,Wu=class extends ci{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new T){let n=e,i=this.points,s=i.length,a=(s-(this.closed?0:1))*t,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:c===0&&o===s-1&&(o=s-2,c=1);let l,h;this.closed||o>0?l=i[(o-1)%s]:(Lc.subVectors(i[0],i[1]).add(i[0]),l=Lc);let u=i[o%s],f=i[(o+1)%s];if(this.closed||o+2<s?h=i[(o+2)%s]:(Lc.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=Lc),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),d),v=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),mu.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,g,v,m),gu.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,g,v,m),vu.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(mu.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),gu.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),vu.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(mu.calc(c),gu.calc(c),vu.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new T().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function r0(r,t,e,n,i){let s=(n-t)*.5,a=(i-e)*.5,o=r*r,c=r*o;return(2*e-2*n+s+a)*c+(-3*e+3*n-2*s-a)*o+s*r+e}function gE(r,t){let e=1-r;return e*e*t}function vE(r,t){return 2*(1-r)*r*t}function xE(r,t){return r*r*t}function so(r,t,e,n){return gE(r,t)+vE(r,e)+xE(r,n)}function bE(r,t){let e=1-r;return e*e*e*t}function yE(r,t){let e=1-r;return 3*e*e*r*t}function _E(r,t){return 3*(1-r)*r*r*t}function ME(r,t){return r*r*r*t}function ro(r,t,e,n,i){return bE(r,t)+yE(r,e)+_E(r,n)+ME(r,i)}var Qc=class extends ci{constructor(t=new at,e=new at,n=new at,i=new at){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new at){let n=e,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(ro(t,i.x,s.x,a.x,o.x),ro(t,i.y,s.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},qu=class extends ci{constructor(t=new T,e=new T,n=new T,i=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new T){let n=e,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(ro(t,i.x,s.x,a.x,o.x),ro(t,i.y,s.y,a.y,o.y),ro(t,i.z,s.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},$c=class extends ci{constructor(t=new at,e=new at){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new at){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new at){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Xu=class extends ci{constructor(t=new T,e=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new T){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new T){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},tl=class extends ci{constructor(t=new at,e=new at,n=new at){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new at){let n=e,i=this.v0,s=this.v1,a=this.v2;return n.set(so(t,i.x,s.x,a.x),so(t,i.y,s.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ju=class extends ci{constructor(t=new T,e=new T,n=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new T){let n=e,i=this.v0,s=this.v1,a=this.v2;return n.set(so(t,i.x,s.x,a.x),so(t,i.y,s.y,a.y),so(t,i.z,s.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},el=class extends ci{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new at){let n=e,i=this.points,s=(i.length-1)*t,a=Math.floor(s),o=s-a,c=i[a===0?a:a-1],l=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(r0(o,c.x,l.x,h.x,u.x),r0(o,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new at().fromArray(i))}return this}},a0=Object.freeze({__proto__:null,ArcCurve:Vu,CatmullRomCurve3:Wu,CubicBezierCurve:Qc,CubicBezierCurve3:qu,EllipseCurve:po,LineCurve:$c,LineCurve3:Xu,QuadraticBezierCurve:tl,QuadraticBezierCurve3:ju,SplineCurve:el}),Yu=class extends ci{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new a0[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),s=0;for(;s<i.length;){if(i[s]>=n){let a=i[s]-n,o=this.curves[s],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}s++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,s=this.curves;i<s.length;i++){let a=s[i],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new a0[i.type]().fromJSON(i))}return this}},Ku=class extends Yu{constructor(t){super(),this.type="Path",this.currentPoint=new at,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new $c(this.currentPoint.clone(),new at(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let s=new tl(this.currentPoint.clone(),new at(t,e),new at(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,a){let o=new Qc(this.currentPoint.clone(),new at(t,e),new at(n,i),new at(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new el(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,i,s,a),this}absarc(t,e,n,i,s,a){return this.absellipse(t,e,n,n,i,s,a),this}ellipse(t,e,n,i,s,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,i,s,a,o,c),this}absellipse(t,e,n,i,s,a,o,c){let l=new po(t,e,n,i,s,a,o,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Ju=class r extends At{constructor(t=[new at(0,-.5),new at(.5,0),new at(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=sn(i,0,Math.PI*2);let s=[],a=[],o=[],c=[],l=[],h=1/e,u=new T,f=new at,d=new T,g=new T,v=new T,m=0,p=0;for(let x=0;x<=t.length-1;x++)switch(x){case 0:m=t[x+1].x-t[x].x,p=t[x+1].y-t[x].y,d.x=p*1,d.y=-m,d.z=p*0,v.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:c.push(v.x,v.y,v.z);break;default:m=t[x+1].x-t[x].x,p=t[x+1].y-t[x].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=v.x,d.y+=v.y,d.z+=v.z,d.normalize(),c.push(d.x,d.y,d.z),v.copy(g)}for(let x=0;x<=e;x++){let y=n+x*h*i,M=Math.sin(y),E=Math.cos(y);for(let b=0;b<=t.length-1;b++){u.x=t[b].x*M,u.y=t[b].y,u.z=t[b].x*E,a.push(u.x,u.y,u.z),f.x=x/e,f.y=b/(t.length-1),o.push(f.x,f.y);let w=c[3*b+0]*M,C=c[3*b+1],_=c[3*b+0]*E;l.push(w,C,_)}}for(let x=0;x<e;x++)for(let y=0;y<t.length-1;y++){let M=y+x*t.length,E=M,b=M+t.length,w=M+t.length+1,C=M+1;s.push(E,b,C),s.push(w,C,b)}this.setIndex(s),this.setAttribute("position",new yt(a,3)),this.setAttribute("uv",new yt(o,2)),this.setAttribute("normal",new yt(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.points,t.segments,t.phiStart,t.phiLength)}},nl=class r extends Ju{constructor(t=1,e=1,n=4,i=8){let s=new Ku;s.absarc(0,-e/2,t,Math.PI*1.5,0),s.absarc(0,e/2,t,0,Math.PI*.5),super(s.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:i}}static fromJSON(t){return new r(t.radius,t.length,t.capSegments,t.radialSegments)}};var Xe=class r extends At{constructor(t=1,e=1,n=1,i=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};let l=this;i=Math.floor(i),s=Math.floor(s);let h=[],u=[],f=[],d=[],g=0,v=[],m=n/2,p=0;x(),a===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new yt(u,3)),this.setAttribute("normal",new yt(f,3)),this.setAttribute("uv",new yt(d,2));function x(){let M=new T,E=new T,b=0,w=(e-t)/n;for(let C=0;C<=s;C++){let _=[],S=C/s,I=S*(e-t)+t;for(let F=0;F<=i;F++){let N=F/i,L=N*c+o,P=Math.sin(L),D=Math.cos(L);E.x=I*P,E.y=-S*n+m,E.z=I*D,u.push(E.x,E.y,E.z),M.set(P,w,D).normalize(),f.push(M.x,M.y,M.z),d.push(N,1-S),_.push(g++)}v.push(_)}for(let C=0;C<i;C++)for(let _=0;_<s;_++){let S=v[_][C],I=v[_+1][C],F=v[_+1][C+1],N=v[_][C+1];h.push(S,I,N),h.push(I,F,N),b+=6}l.addGroup(p,b,0),p+=b}function y(M){let E=g,b=new at,w=new T,C=0,_=M===!0?t:e,S=M===!0?1:-1;for(let F=1;F<=i;F++)u.push(0,m*S,0),f.push(0,S,0),d.push(.5,.5),g++;let I=g;for(let F=0;F<=i;F++){let L=F/i*c+o,P=Math.cos(L),D=Math.sin(L);w.x=_*D,w.y=m*S,w.z=_*P,u.push(w.x,w.y,w.z),f.push(0,S,0),b.x=P*.5+.5,b.y=D*.5*S+.5,d.push(b.x,b.y),g++}for(let F=0;F<i;F++){let N=E+F,L=I+F;M===!0?h.push(L,L+1,N):h.push(L+1,L,N),C+=3}l.addGroup(p,C,M===!0?1:2),p+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ha=class r extends Xe{constructor(t=1,e=1,n=32,i=1,s=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(t){return new r(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Zu=class r extends At{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let s=[],a=[];o(i),l(n),h(),this.setAttribute("position",new yt(s,3)),this.setAttribute("normal",new yt(s.slice(),3)),this.setAttribute("uv",new yt(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(x){let y=new T,M=new T,E=new T;for(let b=0;b<e.length;b+=3)d(e[b+0],y),d(e[b+1],M),d(e[b+2],E),c(y,M,E,x)}function c(x,y,M,E){let b=E+1,w=[];for(let C=0;C<=b;C++){w[C]=[];let _=x.clone().lerp(M,C/b),S=y.clone().lerp(M,C/b),I=b-C;for(let F=0;F<=I;F++)F===0&&C===b?w[C][F]=_:w[C][F]=_.clone().lerp(S,F/I)}for(let C=0;C<b;C++)for(let _=0;_<2*(b-C)-1;_++){let S=Math.floor(_/2);_%2===0?(f(w[C][S+1]),f(w[C+1][S]),f(w[C][S])):(f(w[C][S+1]),f(w[C+1][S+1]),f(w[C+1][S]))}}function l(x){let y=new T;for(let M=0;M<s.length;M+=3)y.x=s[M+0],y.y=s[M+1],y.z=s[M+2],y.normalize().multiplyScalar(x),s[M+0]=y.x,s[M+1]=y.y,s[M+2]=y.z}function h(){let x=new T;for(let y=0;y<s.length;y+=3){x.x=s[y+0],x.y=s[y+1],x.z=s[y+2];let M=m(x)/2/Math.PI+.5,E=p(x)/Math.PI+.5;a.push(M,1-E)}g(),u()}function u(){for(let x=0;x<a.length;x+=6){let y=a[x+0],M=a[x+2],E=a[x+4],b=Math.max(y,M,E),w=Math.min(y,M,E);b>.9&&w<.1&&(y<.2&&(a[x+0]+=1),M<.2&&(a[x+2]+=1),E<.2&&(a[x+4]+=1))}}function f(x){s.push(x.x,x.y,x.z)}function d(x,y){let M=x*3;y.x=t[M+0],y.y=t[M+1],y.z=t[M+2]}function g(){let x=new T,y=new T,M=new T,E=new T,b=new at,w=new at,C=new at;for(let _=0,S=0;_<s.length;_+=9,S+=6){x.set(s[_+0],s[_+1],s[_+2]),y.set(s[_+3],s[_+4],s[_+5]),M.set(s[_+6],s[_+7],s[_+8]),b.set(a[S+0],a[S+1]),w.set(a[S+2],a[S+3]),C.set(a[S+4],a[S+5]),E.copy(x).add(y).add(M).divideScalar(3);let I=m(E);v(b,S+0,x,I),v(w,S+2,y,I),v(C,S+4,M,I)}}function v(x,y,M,E){E<0&&x.x===1&&(a[y]=x.x-1),M.x===0&&M.z===0&&(a[y]=E/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.vertices,t.indices,t.radius,t.details)}};var mo=class r extends Zu{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new r(t.radius,t.detail)}};var Ti=class r extends At{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new T,f=new T,d=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){let x=[],y=p/n,M=0;p===0&&a===0?M=.5/e:p===n&&c===Math.PI&&(M=-.5/e);for(let E=0;E<=e;E++){let b=E/e;u.x=-t*Math.cos(i+b*s)*Math.sin(a+y*o),u.y=t*Math.cos(a+y*o),u.z=t*Math.sin(i+b*s)*Math.sin(a+y*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),m.push(b+M,1-y),x.push(l++)}h.push(x)}for(let p=0;p<n;p++)for(let x=0;x<e;x++){let y=h[p][x+1],M=h[p][x],E=h[p+1][x],b=h[p+1][x+1];(p!==0||a>0)&&d.push(y,M,b),(p!==n-1||c<Math.PI)&&d.push(M,E,b)}this.setIndex(d),this.setAttribute("position",new yt(g,3)),this.setAttribute("normal",new yt(v,3)),this.setAttribute("uv",new yt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var qt=class extends _n{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wf,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},li=class extends qt{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new at(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return sn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new et(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new et(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new et(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var go=class extends _n{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wf,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=gf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Ic(r,t,e){return!r||!e&&r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function EE(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function wE(r){function t(i,s){return r[i]-r[s]}let e=r.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function o0(r,t,e){let n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){let o=e[s]*t;for(let c=0;c!==t;++c)i[a++]=r[o+c]}return i}function F0(r,t,e,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(t.push(s.time),e.push.apply(e,a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(t.push(s.time),a.toArray(e,e.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(t.push(s.time),e.push(a)),s=r[i++];while(s!==void 0)}var Ps=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];t:{e:{let a;n:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=e[++n],t<i)break e}a=e.length;break n}if(!(t>=s)){let o=e[1];t<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=e[--n-1],t>=s)break e}a=n,n=0;break n}break t}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let a=0;a!==i;++a)e[a]=n[s+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Qu=class extends Ps{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:jr,endingEnd:jr}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,a=t+1,o=i[s],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Yr:s=t,o=2*e-n;break;case Hc:s=i.length-2,o=e+i[s]-i[s+1];break;default:s=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Yr:a=t,c=2*n-e;break;case Hc:a=1,c=n+i[1]-i[0];break;default:a=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(t,e,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-e)/(i-e),v=g*g,m=v*g,p=-f*m+2*f*v-f*g,x=(1+f)*m+(-1.5-2*f)*v+(-.5+f)*g+1,y=(-1-d)*m+(1.5+d)*v+.5*g,M=d*m-d*v;for(let E=0;E!==o;++E)s[E]=p*a[h+E]+x*a[l+E]+y*a[c+E]+M*a[u+E];return s}},il=class extends Ps{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(n-e)/(i-e),u=1-h;for(let f=0;f!==o;++f)s[f]=a[l+f]*u+a[c+f]*h;return s}},$u=class extends Ps{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},hi=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ic(e,this.TimeBufferType),this.values=Ic(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ic(t.times,Array),values:Ic(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new $u(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new il(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Qu(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ia:e=this.InterpolantFactoryMethodDiscrete;break;case or:e=this.InterpolantFactoryMethodLinear;break;case Gh:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ia;case this.InterpolantFactoryMethodLinear:return or;case this.InterpolantFactoryMethodSmooth:return Gh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,s=0,a=i-1;for(;s!==i&&n[s]<t;)++s;for(;a!==-1&&n[a]>e;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==s;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(i!==void 0&&EE(i))for(let o=0,c=i.length;o!==c;++o){let l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Gh,s=t.length-1,a=1;for(let o=1;o<s;++o){let c=!1,l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(i)c=!0;else{let u=o*n,f=u-n,d=u+n;for(let g=0;g!==n;++g){let v=e[u+g];if(v!==e[f+g]||v!==e[d+g]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let u=o*n,f=a*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++a}}if(s>0){t[a]=t[s];for(let o=s*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};hi.prototype.TimeBufferType=Float32Array;hi.prototype.ValueBufferType=Float32Array;hi.prototype.DefaultInterpolation=or;var Ls=class extends hi{};Ls.prototype.ValueTypeName="bool";Ls.prototype.ValueBufferType=Array;Ls.prototype.DefaultInterpolation=ia;Ls.prototype.InterpolantFactoryMethodLinear=void 0;Ls.prototype.InterpolantFactoryMethodSmooth=void 0;var sl=class extends hi{};sl.prototype.ValueTypeName="color";var ls=class extends hi{};ls.prototype.ValueTypeName="number";var tf=class extends Ps{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(i-e),l=t*o;for(let h=l+o;l!==h;l+=4)Vt.slerpFlat(s,0,a,l-o,a,l,c);return s}},Ui=class extends hi{InterpolantFactoryMethodLinear(t){return new tf(this.times,this.values,this.getValueSize(),t)}};Ui.prototype.ValueTypeName="quaternion";Ui.prototype.DefaultInterpolation=or;Ui.prototype.InterpolantFactoryMethodSmooth=void 0;var Is=class extends hi{};Is.prototype.ValueTypeName="string";Is.prototype.ValueBufferType=Array;Is.prototype.DefaultInterpolation=ia;Is.prototype.InterpolantFactoryMethodLinear=void 0;Is.prototype.InterpolantFactoryMethodSmooth=void 0;var hs=class extends hi{};hs.prototype.ValueTypeName="vector";var ua=class{constructor(t,e=-1,n,i=Mf){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=Mi(),this.duration<0&&this.resetDuration()}static parse(t){let e=[],n=t.tracks,i=1/(t.fps||1);for(let a=0,o=n.length;a!==o;++a)e.push(SE(n[a]).scale(i));let s=new this(t.name,t.duration,e,t.blendMode);return s.uuid=t.uuid,s}static toJSON(t){let e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let s=0,a=n.length;s!==a;++s)e.push(hi.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(t,e,n,i){let s=e.length,a=[];for(let o=0;o<s;o++){let c=[],l=[];c.push((o+s-1)%s,o,(o+1)%s),l.push(0,1,0);let h=wE(c);c=o0(c,1,h),l=o0(l,1,h),!i&&c[0]===0&&(c.push(s),l.push(l[0])),a.push(new ls(".morphTargetInfluences["+e[o].name+"]",c,l).scale(1/n))}return new this(t,-1,a)}static findByName(t,e){let n=t;if(!Array.isArray(t)){let i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){let i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,c=t.length;o<c;o++){let l=t[o],h=l.name.match(s);if(h&&h.length>1){let u=h[1],f=i[u];f||(i[u]=f=[]),f.push(l)}}let a=[];for(let o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],e,n));return a}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,f,d,g,v){if(d.length!==0){let m=[],p=[];F0(d,m,p,g),m.length!==0&&v.push(new u(f,m,p))}},i=[],s=t.name||"default",a=t.fps||30,o=t.blendMode,c=t.length||-1,l=t.hierarchy||[];for(let u=0;u<l.length;u++){let f=l[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let d={},g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let v=0;v<f[g].morphTargets.length;v++)d[f[g].morphTargets[v]]=-1;for(let v in d){let m=[],p=[];for(let x=0;x!==f[g].morphTargets.length;++x){let y=f[g];m.push(y.time),p.push(y.morphTarget===v?1:0)}i.push(new ls(".morphTargetInfluence["+v+"]",m,p))}c=d.length*a}else{let d=".bones["+e[u].name+"]";n(hs,d+".position",f,"pos",i),n(Ui,d+".quaternion",f,"rot",i),n(hs,d+".scale",f,"scl",i)}}return i.length===0?null:new this(s,c,i,o)}resetDuration(){let t=this.tracks,e=0;for(let n=0,i=t.length;n!==i;++n){let s=this.tracks[n];e=Math.max(e,s.times[s.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){let t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function TE(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ls;case"vector":case"vector2":case"vector3":case"vector4":return hs;case"color":return sl;case"quaternion":return Ui;case"bool":case"boolean":return Ls;case"string":return Is}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function SE(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let t=TE(r.type);if(r.times===void 0){let e=[],n=[];F0(r.keys,e,n,"value"),r.times=e,r.values=n}return t.parse!==void 0?t.parse(r):new t(r.name,r.times,r.values,r.interpolation)}var Ss={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}},ef=class{constructor(t,e,n){let i=this,s=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let d=l[u],g=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}},AE=new ef,us=class{constructor(t){this.manager=t!==void 0?t:AE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};us.DEFAULT_MATERIAL_NAME="__DEFAULT";var es={},nf=class extends Error{constructor(t,e){super(t),this.response=e}},vo=class extends us{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=Ss.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(es[t]!==void 0){es[t].push({onLoad:e,onProgress:n,onError:i});return}es[t]=[],es[t].push({onLoad:e,onProgress:n,onError:i});let a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=es[t],u=l.body.getReader(),f=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),d=f?parseInt(f):0,g=d!==0,v=0,m=new ReadableStream({start(p){x();function x(){u.read().then(({done:y,value:M})=>{if(y)p.close();else{v+=M.byteLength;let E=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:d});for(let b=0,w=h.length;b<w;b++){let C=h[b];C.onProgress&&C.onProgress(E)}p.enqueue(M),x()}})}}});return new Response(m)}else throw new nf(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o===void 0)return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(g=>d.decode(g))}}}).then(l=>{Ss.add(t,l);let h=es[t];delete es[t];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onLoad&&d.onLoad(l)}}).catch(l=>{let h=es[t];if(h===void 0)throw this.manager.itemError(t),l;delete es[t];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onError&&d.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}};var sf=class extends us{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=this,a=Ss.get(t);if(a!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0),a;let o=oo("img");function c(){h(),Ss.add(t,this),e&&e(this),s.manager.itemEnd(t)}function l(u){h(),i&&i(u),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(t),o.src=t,o}};var Ds=class extends us{constructor(t){super(t)}load(t,e,n,i){let s=new yn,a=new sf(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){s.image=o,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}},fa=class extends Le{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new et(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},rl=class extends fa{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.groundColor=new et(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},xu=new bt,c0=new T,l0=new T,xo=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.map=null,this.mapPass=null,this.matrix=new bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lo,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new he(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;c0.setFromMatrixPosition(t.matrixWorld),e.position.copy(c0),l0.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(l0),e.updateMatrixWorld(),xu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xu),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(xu)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},rf=class extends xo{constructor(){super(new Ue(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=sa*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=t.distance||e.far;(n!==e.fov||i!==e.aspect||s!==e.far)&&(e.fov=n,e.aspect=i,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},Fs=class extends fa{constructor(t,e,n=0,i=Math.PI/3,s=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.target=new Le,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new rf}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},h0=new bt,Qa=new T,bu=new T,af=class extends xo{constructor(){super(new Ue(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new at(4,2),this._viewportCount=6,this._viewports=[new he(2,1,1,1),new he(0,1,1,1),new he(3,1,1,1),new he(1,1,1,1),new he(3,0,1,1),new he(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Qa.setFromMatrixPosition(t.matrixWorld),n.position.copy(Qa),bu.copy(n.position),bu.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(bu),n.updateMatrixWorld(),i.makeTranslation(-Qa.x,-Qa.y,-Qa.z),h0.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(h0)}},Oi=class extends fa{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new af}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},of=class extends xo{constructor(){super(new Cs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},da=class extends fa{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.target=new Le,this.shadow=new of}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Hs=class{static decodeText(t){if(typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){let e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}},al=class extends At{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var ol=class extends us{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=this,a=Ss.get(t);if(a!==void 0){if(s.manager.itemStart(t),a.then){a.then(l=>{e&&e(l),s.manager.itemEnd(t)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let c=fetch(t,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){return Ss.add(t,l),e&&e(l),s.manager.itemEnd(t),l}).catch(function(l){i&&i(l),Ss.remove(t),s.manager.itemError(t),s.manager.itemEnd(t)});Ss.add(t,c),s.manager.itemStart(t)}};var cf=class{constructor(t,e,n){this.binding=t,this.valueSize=n;let i,s,a;switch(e){case"quaternion":i=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){let n=this.buffer,i=this.valueSize,s=t*i+i,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[s+o]=n[o];a=e}else{a+=e;let o=e/a;this._mixBufferRegion(n,s,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(t){let e=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){let e=this.valueSize,n=this.buffer,i=t*e+e,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){let c=e*this._origIndex;this._mixBufferRegion(n,i,c,1-s,e)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let c=e,l=e+e;c!==l;++c)if(n[c]!==n[c+e]){o.setValue(n,i);break}}saveOriginalState(){let t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let s=n,a=i;s!==a;++s)e[s]=e[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){let t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,i,s){if(i>=.5)for(let a=0;a!==s;++a)t[e+a]=t[n+a]}_slerp(t,e,n,i){Vt.slerpFlat(t,e,t,e,t,n,i)}_slerpAdditive(t,e,n,i,s){let a=this._workIndex*s;Vt.multiplyQuaternionsFlat(t,a,t,e,t,n),Vt.slerpFlat(t,e,t,e,t,a,i)}_lerp(t,e,n,i,s){let a=1-i;for(let o=0;o!==s;++o){let c=e+o;t[c]=t[c]*a+t[n+o]*i}}_lerpAdditive(t,e,n,i,s){for(let a=0;a!==s;++a){let o=e+a;t[o]=t[o]+t[n+a]*i}}},Cf="\\[\\]\\.:\\/",RE=new RegExp("["+Cf+"]","g"),Pf="[^"+Cf+"]",CE="[^"+Cf.replace("\\.","")+"]",PE=/((?:WC+[\/:])*)/.source.replace("WC",Pf),LE=/(WCOD+)?/.source.replace("WCOD",CE),IE=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Pf),DE=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Pf),FE=new RegExp("^"+PE+LE+IE+DE+"$"),HE=["material","materials","bones","map"],lf=class{constructor(t,e,n){let i=n||Pe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Pe=class r{constructor(t,e,n){this.path=e,this.parsedPath=n||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,n):new r(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(RE,"")}static parseTrackName(t){let e=FE.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);HE.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[i];if(a===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Pe.Composite=lf;Pe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pe.prototype.GetterByBindingType=[Pe.prototype._getValue_direct,Pe.prototype._getValue_array,Pe.prototype._getValue_arrayElement,Pe.prototype._getValue_toArray];Pe.prototype.SetterByBindingTypeAndVersioning=[[Pe.prototype._setValue_direct,Pe.prototype._setValue_direct_setNeedsUpdate,Pe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_array,Pe.prototype._setValue_array_setNeedsUpdate,Pe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_arrayElement,Pe.prototype._setValue_arrayElement_setNeedsUpdate,Pe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_fromArray,Pe.prototype._setValue_fromArray_setNeedsUpdate,Pe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var hf=class{constructor(t,e,n=null,i=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=i;let s=e.tracks,a=s.length,o=new Array(a),c={endingStart:jr,endingEnd:jr};for(let l=0;l!==a;++l){let h=s[l].createInterpolant(null);o[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=_f,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n){if(t.fadeOut(e),this.fadeIn(e),n){let i=this._clip.duration,s=t._clip.duration,a=s/i,o=i/s;t.warp(1,a,e),this.warp(o,1,e)}return this}crossFadeTo(t,e,n){return t.crossFadeFrom(this,e,n)}stopFading(){let t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){let i=this._mixer,s=i.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);let c=o.parameterPositions,l=o.sampleValues;return c[0]=s,c[1]=s+n,l[0]=t/a,l[1]=e/a,this}stopWarping(){let t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,i){if(!this.enabled){this._updateWeight(t);return}let s=this._startTime;if(s!==null){let c=(t-s)*n;c<0||n===0?e=0:(this._startTime=null,e=n*c)}e*=this._updateTimeScale(t);let a=this._updateTime(e),o=this._updateWeight(t);if(o>0){let c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case Zx:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(a),l[h].accumulateAdditive(o);break;case Mf:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(a),l[h].accumulate(i,o)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){let e=this._clip.duration,n=this.loop,i=this.time+t,s=this._loopCount,a=n===Jx;if(t===0)return s===-1?i:a&&(s&1)===1?e-i:i;if(n===yf){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(i>=e)i=e;else if(i<0)i=0;else{this.time=i;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(s===-1&&(t>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=e||i<0){let o=Math.floor(i/e);i-=e*o,s+=Math.abs(o);let c=this.repetitions-s;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=t>0?e:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(c===1){let l=t<0;this._setEndings(l,!l,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(s&1)===1)return e-i}return i}_setEndings(t,e,n){let i=this._interpolantSettings;n?(i.endingStart=Yr,i.endingEnd=Yr):(t?i.endingStart=this.zeroSlopeAtStart?Yr:jr:i.endingStart=Hc,e?i.endingEnd=this.zeroSlopeAtEnd?Yr:jr:i.endingEnd=Hc)}_scheduleFading(t,e,n){let i=this._mixer,s=i.time,a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,c=a.sampleValues;return o[0]=s,c[0]=e,o[1]=s+t,c[1]=n,this}},NE=new Float32Array(1),pa=class extends as{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){let n=t._localRoot||this._root,i=t._clip.tracks,s=i.length,a=t._propertyBindings,o=t._interpolants,c=n.uuid,l=this._bindingsByRootAndName,h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==s;++u){let f=i[u],d=f.name,g=h[d];if(g!==void 0)++g.referenceCount,a[u]=g;else{if(g=a[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,d));continue}let v=e&&e._propertyBindings[u].binding.parsedPath;g=new cf(Pe.create(n,d,v),f.ValueTypeName,f.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,d),a[u]=g}o[u].resultBuffer=g.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){let n=(t._localRoot||this._root).uuid,i=t._clip.uuid,s=this._actionsByClip[i];this._bindAction(t,s&&s.knownActions[0]),this._addInactiveAction(t,i,n)}let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let s=e[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let s=e[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){let e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){let i=this._actions,s=this._actionsByClip,a=s[e];if(a===void 0)a={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,s[e]=a;else{let o=a.knownActions;t._byClipCacheIndex=o.length,o.push(t)}t._cacheIndex=i.length,i.push(t),a.actionByRoot[n]=t}_removeInactiveAction(t){let e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;let s=t._clip.uuid,a=this._actionsByClip,o=a[s],c=o.knownActions,l=c[c.length-1],h=t._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),t._byClipCacheIndex=null;let u=o.actionByRoot,f=(t._localRoot||this._root).uuid;delete u[f],c.length===0&&delete a[s],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let s=e[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(t){let e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_takeBackAction(t){let e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_addInactiveBinding(t,e,n){let i=this._bindingsByRootAndName,s=this._bindings,a=i[e];a===void 0&&(a={},i[e]=a),a[n]=t,t._cacheIndex=s.length,s.push(t)}_removeInactiveBinding(t){let e=this._bindings,n=t.binding,i=n.rootNode.uuid,s=n.path,a=this._bindingsByRootAndName,o=a[i],c=e[e.length-1],l=t._cacheIndex;c._cacheIndex=l,e[l]=c,e.pop(),delete o[s],Object.keys(o).length===0&&delete a[i]}_lendBinding(t){let e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_takeBackBinding(t){let e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_lendControlInterpolant(){let t=this._controlInterpolants,e=this._nActiveControlInterpolants++,n=t[e];return n===void 0&&(n=new il(new Float32Array(2),new Float32Array(2),1,NE),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){let e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,s=e[i];t.__cacheIndex=i,e[i]=t,s.__cacheIndex=n,e[n]=s}clipAction(t,e,n){let i=e||this._root,s=i.uuid,a=typeof t=="string"?ua.findByName(i,t):t,o=a!==null?a.uuid:t,c=this._actionsByClip[o],l=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Mf),c!==void 0){let u=c.actionByRoot[s];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],a===null&&(a=l._clip)}if(a===null)return null;let h=new hf(this,a,e,n);return this._bindAction(h,l),this._addInactiveAction(h,o,s),h}existingAction(t,e){let n=e||this._root,i=n.uuid,s=typeof t=="string"?ua.findByName(n,t):t,a=s?s.uuid:t,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){let t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;let e=this._actions,n=this._nActiveActions,i=this.time+=t,s=Math.sign(t),a=this._accuIndex^=1;for(let l=0;l!==n;++l)e[l]._update(i,t,s,a);let o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(a);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){let e=this._actions,n=t.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){let a=s.knownActions;for(let o=0,c=a.length;o!==c;++o){let l=a[o];this._deactivateAction(l);let h=l._cacheIndex,u=e[e.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,e[h]=u,e.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(t){let e=t.uuid,n=this._actionsByClip;for(let a in n){let o=n[a].actionByRoot,c=o[e];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let i=this._bindingsByRootAndName,s=i[e];if(s!==void 0)for(let a in s){let o=s[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(t,e){let n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var cl=class{constructor(t,e,n=0,i=1/0){this.ray=new cr(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new co,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return uf(t,this,n,e),n.sort(u0),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)uf(t[i],this,n,e);return n.sort(u0),n}};function u0(r,t){return r.distance-t.distance}function uf(r,t,e,n){if(r.layers.test(t.layers)&&r.raycast(t,e),n===!0){let i=r.children;for(let s=0,a=i.length;s<a;s++)uf(i[s],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var H0={reed:{low:9,det:2.2,fine:.4,mount:330},forest:{low:24,det:6.5,fine:1.1,mount:440},mountain:{low:34,det:5.5,fine:1.2,mount:520,side:!0},meadow:{low:22,det:3.2,fine:.5,mount:380},sea:{low:7,det:2.5,fine:.4,mount:260,sea:!0},city:{low:0,det:0,fine:0,mount:300,hill:9}},we={id:"reed",...H0.reed};function N0(r){Object.assign(we,{side:!1,sea:!1,hill:0},H0[r],{id:r})}function $t(r,t){let e=Math.imul(r,374761393)+Math.imul(t,668265263)|0;return e=Math.imul(e^e>>>13,1274126177),e^=e>>>16,(e>>>0)/4294967295}function Ie(r,t){let e=Math.floor(r),n=Math.floor(t),i=r-e,s=t-n;i=i*i*(3-2*i),s=s*s*(3-2*s);let a=$t(e,n),o=$t(e+1,n),c=$t(e,n+1),l=$t(e+1,n+1);return a+(o-a)*i+(c-a)*s+(a-o-c+l)*i*s}function Si(r,t){if(we.hill){let e=Ie(r/900+2.1,t/900+8.4),n=e<.45?0:e>.62?1:(e-.45)/.17;return we.hill*n*n*(3-2*n)*(Ie(r/260+6.6,t/260+3.2)-.5)*2}return we.low*((Ie(r/1e3+11.3,t/1e3+7.1)-.5)*1.34+(Ie(r/500+3.7,t/500+1.9)-.5)*.66)}function dl(r,t){return we.det*(Ie(r/165+5.5,t/165+2.2)-.5)*2+we.fine*(Ie(r/40+9.1,t/40+4.4)-.5)*2}function pl(r,t){let e=0,n=.62,i=1/1500;for(let s=0;s<4;s++){let a=Ie(r*i+31.7*s,t*i+17.3*s),o=1-Math.abs(a*2-1);e+=n*o*o,n*=.45,i*=2.1}return we.mount*e}var k0=`
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
`;var Te={halfWidth:4.6,chunkLen:120,step:2},U0=4.6,Ae={seg:720,bend:190,hw:7.2,walk:4,side:3.5,sideWalk:2.5,lanes:[1.75,5.25]},kE=[215,455,690],O0=r=>.9*Math.sin(.0021*r+1)+.5*Math.sin(.0053*r+2.2)+.25*Math.sin(.0117*r+.3),UE=O0(0),Ai={period:2600,start:450,len:800,ramp:70},Lf=(r,t,e)=>{let n=Math.min(1,Math.max(0,(e-r)/(t-r)));return n*n*(3-2*n)},If=r=>{let t=Math.sin(r*127.1+311.7)*43758.5453;return t-Math.floor(t)},OE=r=>.07*Math.sin(.9*r)+.045*Math.sin(1.37*r+1.3)+.05*Math.sin(.31*r+2),ml=class{constructor(){this.pts=[{x:0,z:0,y:Si(0,0)}],this.dirt=!1,this.city=!1,this._cum=[0]}setShape(t){t!==this.city&&(this.city=t,this.pts=[{x:0,z:0,y:0}])}_delta(t){if(t<=0||If(t*1.37+.5)<.3)return 0;let n=(If(t*2.71+3.3)-.5)*1.5-.35*this._sum(t-1);return Math.sign(n)*Math.max(.25,Math.abs(n))}_sum(t){if(t<0)return 0;for(;this._cum.length<=t;){let e=this._cum.length;this._cum.push(this._cum[e-1]+this._delta(e))}return this._cum[t]}junction(t){let e=Math.floor(t/3),n=t-e*3;return e*Ae.seg+kE[n]+(If(t*3.17+1.9)-.5)*(n===2?10:24)}junctionIndex(t){let e=Math.floor(t/Ae.seg)*3-1;for(;this.junction(e)<t;)e++;return e}nearJunction(t){if(!this.city)return null;let e=this.junctionIndex(t),n=this.junction(e-1),i=this.junction(e);return t-n<i-t?n:i}dirtAt(t){if(!this.dirt)return 0;let e=(t%Ai.period+Ai.period)%Ai.period;return Lf(Ai.start,Ai.start+Ai.ramp,e)*(1-Lf(Ai.start+Ai.len-Ai.ramp,Ai.start+Ai.len,e))}_y(t,e,n){return this.city?Si(t,e):Si(t,e)+this.dirtAt(n)*OE(n)}heading(t){if(!this.city)return O0(t)-UE;let e=Math.floor(t/Ae.seg);return this._sum(e-1)+this._delta(e)*Lf(0,Ae.bend,t-e*Ae.seg)}curvature(t){let e=Math.max(0,t-6),n=t+6;return(this.heading(n)-this.heading(e))/(n-e)}ensure(t){this._ensure(Math.ceil(t/Te.step)+1)}_ensure(t){let{step:e}=Te;for(;this.pts.length<=t+1;){let n=this.pts.length-1,i=this.heading(n*e+e/2),s=this.pts[n],a=s.x-Math.sin(i)*e,o=s.z-Math.cos(i)*e;this.pts.push({x:a,z:o,y:this._y(a,o,(n+1)*e)})}}recomputeHeights(){this.pts.forEach((t,e)=>{t.y=this._y(t.x,t.z,e*Te.step)})}at(t,e={}){let{step:n}=Te;t<0&&(t=0);let i=Math.floor(t/n);this._ensure(i+1);let s=(t-i*n)/n,a=this.pts[i],o=this.pts[i+1];return e.x=a.x+(o.x-a.x)*s,e.z=a.z+(o.z-a.z)*s,e.y=a.y+(o.y-a.y)*s,e.th=this.heading(t),e}};var zi={uMistD:{value:0},uMistH:{value:12},uMistBase:{value:0},uMistCover:{value:.5},uMistT:{value:0},uMistWind:{value:new at},uMistColor:{value:new et}};function z0(){let r=Jt;r.fog_pars_vertex=`
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
#endif`}function de(r){let t=r.onBeforeCompile,e=r.customProgramCacheKey,n=t&&t!==_n.prototype.onBeforeCompile;r.onBeforeCompile=function(s,a){n&&t.call(this,s,a),Object.assign(s.uniforms,zi)};let i=(n?t.toString():"")+(e?e.call(r):"");return r.customProgramCacheKey=()=>i+"#mist",r.needsUpdate=!0,r}function yo(r,t){let e=document.createElement("canvas");return e.width=r,e.height=t,[e,e.getContext("2d")]}function Ff(r,t=!1){let[i,s]=yo(512,512);s.fillStyle="#3c3f45",s.fillRect(0,0,512,512);let a=s.getImageData(0,0,512,512);for(let u=0;u<a.data.length;u+=4){let f=(Math.random()-.5)*30;a.data[u]+=f,a.data[u+1]+=f,a.data[u+2]+=f}s.putImageData(a,0,0);let o=512/(Te.halfWidth*2);for(let u of t?[]:[.27,.73]){let f=s.createLinearGradient((u-.09)*512,0,(u+.09)*512,0);f.addColorStop(0,"rgba(0,0,0,0)"),f.addColorStop(.5,"rgba(0,0,0,0.22)"),f.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=f,s.fillRect((u-.09)*512,0,.18*512,512)}s.fillStyle="#dcdcd4";let c=.16*o,l=.35*o;if(t){let u=new Rn(i);return u.colorSpace=ue,u.wrapS=u.wrapT=On,u.anisotropy=r.capabilities.getMaxAnisotropy(),u}s.fillRect(l,0,c,512),s.fillRect(512-l-c,0,c,512),s.fillStyle="#e9d36a",s.fillRect(512/2-c/2,0,c,512/3);let h=new Rn(i);return h.colorSpace=ue,h.wrapS=h.wrapT=On,h.anisotropy=r.capabilities.getMaxAnisotropy(),h}function gl(){let t=document.createElement("canvas");t.width=t.height=128;let e=t.getContext("2d"),n=e.createImageData(128,128);for(let s=0;s<128;s++)for(let a=0;a<128;a++){let o=(a+.5)/128*2-1,c=(s+.5)/128*2-1,l=o*o+c*c,h=Math.min(1,Math.exp(-l*5)*.55+Math.exp(-l*22)*.35+Math.exp(-l*120)*.35)*(1-Math.min(1,l)**4),u=(s*128+a)*4;n.data[u]=n.data[u+1]=n.data[u+2]=255,n.data[u+3]=Math.round(h*255)}e.putImageData(n,0,0);let i=new Rn(t);return i.colorSpace=ue,i}function ga(){let[r,t]=yo(128,128),e=t.createRadialGradient(64,64,0,64,64,64);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.2,"rgba(255,255,255,0.55)"),e.addColorStop(.5,"rgba(255,255,255,0.12)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128);let n=new Rn(r);return n.colorSpace=ue,n}function Hf(r){let t=r>>>0;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function B0(){let[e,n]=yo(128,360),i=Hf(5),s=128/2;n.strokeStyle="#c9bb8e",n.lineWidth=2.2,n.lineCap="round",n.beginPath(),n.moveTo(s,360),n.quadraticCurveTo(s+2,360*.66,s,360*.46),n.stroke();let a=4,o=360*.5,c=u=>5+50*Math.pow(Math.sin(Math.min(1,u*1.15)*Math.PI*.55),.85)*Math.pow(1-u,.6);n.fillStyle="rgba(250,246,234,0.6)",n.beginPath();for(let u=0;u<=24;u++){let f=u/24;n.lineTo(s+c(f)*.6,o-f*(o-a))}for(let u=24;u>=0;u--){let f=u/24;n.lineTo(s-c(f)*.6,o-f*(o-a))}n.closePath(),n.fill();let l=["#ffffff","#fffcf4","#f6f0df","#ede5cf","#fffef9"];for(let u=0;u<1500;u++){let f=Math.pow(i(),.85),d=o-f*(o-a)+i()*6,g=c(f),v=s+(i()*2-1)*g*(.4+.7*i()),m=d-6-i()*30;n.strokeStyle=l[Math.floor(i()*l.length)],n.globalAlpha=.35+i()*.55,n.lineWidth=.7+i()*1.5,n.beginPath(),n.moveTo(s+(i()-.5)*5,d),n.quadraticCurveTo((s+v)/2+(i()-.5)*10,(d+m)/2,v,m),n.stroke()}n.globalAlpha=1;let h=new Rn(e);return h.colorSpace=ue,h.anisotropy=4,h}function G0(r){let[e,n]=yo(512,512),i=Hf(23);n.fillStyle="#d6d6d6",n.fillRect(0,0,512,512),n.lineCap="round";for(let a=0;a<16e3;a++){let o=i()*512,c=i()*512,l=3+i()*11,h=-Math.PI/2+(i()-.5)*1.1,u=Math.cos(h)*l,f=Math.sin(h)*l,d=Math.floor(150+i()*105);n.strokeStyle=`rgb(${d},${d},${d})`,n.globalAlpha=.35+i()*.5,n.lineWidth=.7+i()*1.3;for(let g of[-512,0,512])for(let v of[-512,0,512]){let m=o+g,p=c+v;m<-20||m>532||p<-20||p>532||(n.beginPath(),n.moveTo(m,p),n.lineTo(m+u,p+f),n.stroke())}}n.globalAlpha=1;let s=new Rn(e);return s.colorSpace=ue,s.wrapS=s.wrapT=On,s.anisotropy=r.capabilities.getMaxAnisotropy(),s}function V0(){let[e,n]=yo(512,256),i=Hf(77),s=[];for(let u=0;u<9;u++){let f=i()*Math.PI*2,d=i()*62;s.push([128+Math.cos(f)*d*1.15,120+Math.sin(f)*d*.85,38+i()*34])}let a=(u,f)=>s.some(([d,g,v])=>(u-d)**2+(f-g)**2<v*v),o=["#2f5522","#3d6a2a","#4c7d32","#5c9038","#6fa443","#87b851"];for(let u=0;u<2600;u++){let f=8+i()*240,d=8+i()*230;if(!a(f,d))continue;let g=1-d/256,v=Math.min(o.length-1,Math.floor((i()*.7+g*.55)*o.length));n.fillStyle=o[v],n.beginPath(),n.ellipse(f,d,3+i()*5,2+i()*3.5,i()*Math.PI,0,Math.PI*2),n.fill()}let c=320,l=["#22402a","#2b4f31","#355e39","#3f6d41","#4d7d4a"];for(let u=0;u<2400;u++){let f=Math.pow(i(),.8),d=6+f*236,g=f*7%1,v=(6+f*58)*(.55+.45*g),m=c+(i()*2-1)*v*.25,p=c+(i()*2-1)*v,x=d+4+Math.abs(p-c)*.18+i()*6;n.strokeStyle=l[Math.min(l.length-1,Math.floor((i()*.8+(1-f)*.4)*l.length))],n.lineWidth=1+i()*2.2,n.beginPath(),n.moveTo(m,d),n.lineTo(p,x),n.stroke()}n.fillStyle="#5a4434",n.fillRect(448,0,64,64);let h=new Rn(e);return h.colorSpace=ue,h.anisotropy=4,h}var Df={};function hr(r,t,{srgb:e=!0,repeat:n=!0}={}){if(Df[r])return Df[r];let i=new Ds().load("assets/tex/"+r+".webp");return e&&(i.colorSpace=ue),n&&(i.wrapS=i.wrapT=On),i.anisotropy=Math.min(8,t.capabilities.getMaxAnisotropy()),Df[r]=i,i}var Of=1100,_o=22,zE=3200,BE=900,Nf=700,kf=600,Uf=6,Cn=r=>{let t=Math.sin(r*127.1+311.7)*43758.5453;return t-Math.floor(t)},W0=r=>470+70*Math.sin(r/650+1.3)+25*Math.sin(r/230);function GE(r){if(Cn(r*3.7+1.1)>.8)return null;let t=120+140*Cn(r*5.3+2.2);return{t:r,s:r*Of+(Cn(r*2.9)-.5)*400,len:t,n:Math.round(16+t*.22*(.7+.6*Cn(r*7.1))),streets:[0],lat:W0}}var zf=5e3,VE=r=>330+18*Math.sin(r/420);function WE(r){return r<0?null:{t:1e5+r,s:1300+r*zf,len:450,n:220,streets:[0,42,84],lat:VE,big:!0}}function Bf(){let r=new re(1,1,1).translate(0,.5,0).toNonIndexed(),t=.54,e=1,n=1.45,i=[-t,e,-t,t,e,-t,t,n,0,-t,e,-t,t,n,0,-t,n,0,-t,e,t,-t,n,0,t,n,0,-t,e,t,t,n,0,t,e,t,-t,e,-t,-t,n,0,-t,e,t,t,e,-t,t,e,t,t,n,0],s=new At;s.setAttribute("position",new yt(i,3)),s.computeVertexNormals();let a=new At,o=r.attributes.position.array,c=r.attributes.normal.array,l=s.attributes.position.array,h=s.attributes.normal.array,u=new Float32Array(o.length+l.length),f=new Float32Array(c.length+h.length);u.set(o),u.set(l,o.length),f.set(c),f.set(h,c.length);let d=new Float32Array(u.length/3);return d.fill(1,o.length/3,u.length/3-6),a.setAttribute("position",new Et(u,3)),a.setAttribute("normal",new Et(f,3)),a.setAttribute("aRoof",new Et(d,1)),a}var qE=`
  uniform float uScale, uFogD;
  varying float vA;
  void main() {
    vec4 mv = viewMatrix * vec4(position, 1.0);
    float fd = uFogD * -mv.z;
    vA = exp(-fd * fd);
    gl_PointSize = clamp(1.6 * uScale / -mv.z, 3.0, 20.0);
    gl_Position = projectionMatrix * mv;
  }`,XE=`
  uniform vec3 uColor; uniform float uAmt;
  varying float vA;
  void main() {
    float d = length(gl_PointCoord - 0.5) * 2.0;
    float a = (smoothstep(0.35, 0.0, d) + exp(-d * d * 5.0) * 0.4) * vA * uAmt;
    if (a < 0.003) discard;
    gl_FragColor = vec4(uColor * a, 1.0);
  }`,vl=class{constructor(t){this.group=new Pt,this.group.visible=!1,t.add(this.group),this.uLit={value:0};let e=new qt({roughness:.85,metalness:0,side:pe});e.onBeforeCompile=s=>{s.uniforms.uLit=this.uLit,s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
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
          totalEmissiveRadiance += winGlow;`)},e.customProgramCacheKey=()=>"valley-house",de(e),this.houses=new _e(Bf(),e,Nf),this.houses.count=0,this.houses.frustumCulled=!1,this.houses.instanceColor=new Ke(new Float32Array(Nf*3),3),this.group.add(this.houses),this.lightPos=new Float32Array(kf*3);let n=new At;n.setAttribute("position",new Et(this.lightPos,3)),n.setDrawRange(0,0),this.lightMat=new Ee({uniforms:{uScale:{value:500},uFogD:{value:0},uAmt:{value:0},uColor:{value:new et(8,4.3,1.4)}},vertexShader:qE,fragmentShader:XE,transparent:!0,depthWrite:!1,blending:tn,fog:!1}),this.lights=new gn(n,this.lightMat),this.lights.frustumCulled=!1,this.lights.renderOrder=4,this.group.add(this.lights);let i=ga();this.hazes=Array.from({length:Uf},()=>{let s=new An(new Mn({map:i,color:16751184,transparent:!0,opacity:0,depthWrite:!1,blending:tn}));return s.visible=!1,this.group.add(s),s}),this.heights=new Map,this.built=null,this._p={},this._m=new bt,this._q=new Vt,this._v=new T,this._s=new T,this._c=new et,this._up=new T(0,1,0)}set visible(t){this.group.visible=t}get visible(){return this.group.visible}reset(){this.heights.clear(),this.built=null}_h(t,e,n,i){let s=this.heights.get(t);return s===void 0&&(s=i.heightAt(e,n),this.heights.set(t,s)),s}_valley(t,e,n,i,s,a=W0){let o=e.at(t,this._p),c=Math.cos(o.th),l=-Math.sin(o.th),h=-Math.sin(o.th),u=-Math.cos(o.th),f=a(t)+n;return s.x=o.x+c*f+h*i,s.z=o.z+l*f+u*i,s.th=o.th,s}_build(t,e,n){let i=t-BE,s=t+zE,a=this._m,o=this._q,c=this._s,l=this._c,h={},u=0,f=0,d=0,g=[];for(let m=Math.floor(i/Of)-1;m<=Math.ceil(s/Of)+1;m++){let p=GE(m);p&&p.s>i-p.len&&p.s<s+p.len&&g.push(p)}for(let m=Math.floor((i-1300)/zf);m<=Math.ceil((s-1300)/zf);m++){let p=WE(m);p&&p.s>i-p.len&&p.s<s+p.len&&g.push(p)}for(let m of g){for(let p=0;p<m.n&&u<Nf;p++){let x=m.t*1e3+p,y=Cn(x*1.3),M=Cn(x*2.7+5),E=Cn(x*4.1+9),b=Cn(x*6.7+3),w=M<.5?-1:1,_=m.streets[Math.floor(Cn(x*11.3)*m.streets.length)]+w*(9+(m.big?12:30)*E*E);this._valley(m.s+(y-.5)*m.len,e,_,0,h,m.lat);let S=this._h("h"+x,h.x,h.z,n),I=this._h("b"+x,h.x+7,h.z+7,n);if(Math.abs(I-S)>4)continue;let F=7+5*b,N=6+3*Cn(x*8.3),L=(b>.88?8.5:M*7%1>.6?6:3.4)+Cn(x*9.9);m.big&&Cn(x*12.7)<.14&&(F=14+8*b,N=10+4*E,L=11+9*Cn(x*13.1)),o.setFromAxisAngle(this._up,h.th+Math.PI/2+(w>0?0:Math.PI)+(Cn(x*3.3)-.5)*.35),a.compose(this._v.set(h.x,Math.min(S,I)-.8,h.z),o,c.set(F,L,N)),this.houses.setMatrixAt(u,a);let P=Cn(x*5.9);l.setRGB(...P<.35?[.82,.8,.74]:P<.6?[.86,.75,.55]:P<.8?[.72,.68,.62]:[.62,.66,.68]),this.houses.setColorAt(u,l),u++}if(d<Uf){this._valley(m.s,e,m.big?42:0,0,h,m.lat);let p=this.hazes[d++];p.position.set(h.x,this._h("z"+m.t,h.x,h.z,n)+(m.big?40:25),h.z),p.scale.set(m.len*2.2,m.len*(m.big?.8:1.1),1),p.userData.on=!0}}for(let m=d;m<Uf;m++)this.hazes[m].userData.on=!1;for(let m of g)if(m.big)for(let p=0;p<m.streets.length;p++)for(let x=-m.len/2;x<=m.len/2&&f<kf;x+=_o){let y=Math.round(x/_o);this._valley(m.s+x,e,m.streets[p]+(y%2?6:-6),0,h,m.lat);let M=this._h("L"+m.t+"_"+p+"_"+y,h.x,h.z,n);this.lightPos.set([h.x,M+6.5,h.z],f*3),f++}for(let m=Math.floor(i/_o);m*_o<s&&f<kf;m++){let p=m*_o,x=!1;for(let E of g)if(!E.big&&Math.abs(p-E.s)<E.len/2+15){x=!0;break}if(!x&&Cn(m*1.7+.3)>.22)continue;let y=x?m%2?6:-6:5;this._valley(p,e,y,0,h);let M=this._h("l"+m,h.x,h.z,n);this.lightPos.set([h.x,M+6.5,h.z],f*3),f++}this.houses.count=u,this.houses.instanceMatrix.needsUpdate=!0,this.houses.instanceColor&&(this.houses.instanceColor.needsUpdate=!0);let v=this.lights.geometry;v.setDrawRange(0,f),v.attributes.position.needsUpdate=!0,this.heights.size>6e3&&this.heights.clear()}update(t,e,n,i,s,a){if(!this.group.visible)return;let o=Math.floor(t/400);this.built!==o&&(this._build(t,e,n),this.built=o),this.uLit.value=i;let c=this.lightMat.uniforms;c.uAmt.value=i,c.uScale.value=s,c.uFogD.value=a,this.lights.visible=i>.02;for(let l of this.hazes)l.visible=l.userData.on&&i>.02,l.material.opacity=.13*i}};var va=180,jE=1150,YE=260,Pn=.2,$n=.055,xl=30,Mo={cycle:46,mainG:22,y:3,allRed:1.5,crossG:15.5,stopA:11.45},KE=[[.15,1,.6],[1,.72,.05],[1,.08,.04]],JE=[[.03,.06,.05],[.07,.06,.02],[.07,.02,.02]],X0='"Hiragino Sans","Hiragino Kaku Gothic ProN","Noto Sans JP","Noto Sans CJK JP","Yu Gothic","Meiryo",sans-serif',ZE=[["コンビニ","#1d8f4e","#ffffff"],["ベーカリー","#f3e2c4","#7a4a1f"],["カフェ","#3b2a22","#f2d7a0"],["ドラッグ","#1554a8","#ffe14a"],["ラーメン","#c8231c","#ffffff"],["そば・うどん","#f4efe2","#202020"],["クリーニング","#2a7fc0","#ffffff"],["花屋","#f6c8d4","#6a2440"],["書店","#24456e","#ffffff"],["居酒屋","#2b2b2b","#ff9b3d"],["寿司","#f6f2e8","#b3151a"],["美容室","#ffffff","#333333"],["不動産","#ffd23a","#1b3a7a"],["メガネ","#e6e9ee","#1d4f91"],["焼肉","#151515","#ff4b2b"],["ドーナツ","#ff86b4","#ffffff"]],QE=[["ラーメン","#c8231c","#ffffff"],["カラオケ","#6b2bd9","#ffffff"],["居酒屋","#1b1b1b","#ffb03a"],["薬","#1554a8","#ffffff"],["歯科","#ffffff","#1b6fb8"],["焼肉","#2a0d0a","#ff5a2a"],["ホテル","#0f2d55","#9fe0ff"],["喫茶","#4a2e1f","#ffe3b0"],["不動産","#ffd23a","#112233"],["寿司","#ffffff","#b3151a"],["麻雀","#0d5a2f","#ffffff"],["整骨院","#ffffff","#c21f3a"],["美容室","#f0e6ff","#5a2a8a"],["中華","#d42a1f","#ffd84a"],["クリニック","#e8f6ff","#0d6aa8"],["学習塾","#ff7a00","#ffffff"]],q0=[[.76,.69,.59],[.86,.86,.84],[.67,.68,.69],[.47,.35,.28],[.87,.81,.69],[.63,.69,.73],[.38,.39,.41],[.64,.45,.36]];function yl(r){let t=r>>>0||1;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Eo(r,t,e,n=!0){let i=document.createElement("canvas");i.width=r,i.height=t,e(i.getContext("2d"),r,t);let s=new Rn(i);return n&&(s.colorSpace=ue),s.anisotropy=4,s}function $E(){return Eo(512,768,(r,t)=>{ZE.forEach(([e,n,i],s)=>{let a=s*48;r.fillStyle=n,r.fillRect(0,a,t,48),r.fillStyle="rgba(0,0,0,0.25)",r.fillRect(0,a,t,3),r.fillRect(0,a+45,t,3),r.font=`bold 32px ${X0}`;let o=r.measureText(e).width;r.save(),r.translate(t/2,a+25),o>t*.6&&r.scale(t*.6/o,1),r.fillStyle=i,r.textAlign="center",r.textBaseline="middle",r.fillText(e,0,0),r.restore()})})}function tw(){return Eo(1024,512,r=>{QE.forEach(([t,e,n],i)=>{let s=i*64,a=[...t];r.fillStyle=e,r.fillRect(s,0,64,512),r.strokeStyle=n,r.globalAlpha=.5,r.lineWidth=3,r.strokeRect(s+5,5,54,502),r.globalAlpha=1;let o=Math.min(46,440/a.length);r.font=`bold ${o}px ${X0}`,r.fillStyle=n,r.textAlign="center",r.textBaseline="middle";let c=256-(a.length-1)*o*.55;a.forEach((l,h)=>r.fillText(l,s+32,c+h*o*1.1))})})}function ew(){let r=Eo(256,256,t=>{let e=yl(7);for(let i=0;i<4;i++)for(let s=0;s<4;s++){let a=160+Math.floor(e()*22);t.fillStyle=`rgb(${a},${a-2},${a-8})`,t.fillRect(s*64,i*64,64,64)}let n=t.getImageData(0,0,256,256);for(let i=0;i<n.data.length;i+=4){let s=(e()-.5)*18;n.data[i]+=s,n.data[i+1]+=s,n.data[i+2]+=s}t.putImageData(n,0,0),t.fillStyle="rgba(60,58,54,0.55)";for(let i=0;i<4;i++)t.fillRect(i*64,0,2,256),t.fillRect(0,i*64,256,2)});return r.wrapS=r.wrapT=On,r}function nw(){let r=Eo(256,256,t=>{let e=yl(11);t.fillStyle="#8a8274",t.fillRect(0,0,256,256);for(let n=0;n<2600;n++){let i=95+Math.floor(e()*90);t.fillStyle=`rgb(${i},${i-6},${i-16})`,t.fillRect(e()*256,e()*256,1+e()*3,1+e()*3)}for(let n=0;n<40;n++)t.fillStyle=`rgba(70,85,40,${.25+e()*.3})`,t.beginPath(),t.arc(e()*256,e()*256,4+e()*14,0,7),t.fill()});return r.wrapS=r.wrapT=On,r}function iw(){return Eo(128,256,r=>{r.fillStyle="#f4f4f2",r.fillRect(0,0,128,256),r.fillStyle="#c62026",r.fillRect(0,0,128,18);let t=["#d33","#25a","#e90","#2a5","#fff","#713","#39c","#cb2"],e=yl(3);for(let n=0;n<3;n++){r.fillStyle="#dfe9f0",r.fillRect(8,24+n*38,112,34);for(let i=0;i<6;i++)r.fillStyle=t[Math.floor(e()*t.length)],r.fillRect(12+i*18,28+n*38,12,22);r.fillStyle="#2b2";for(let i=0;i<6;i++)r.fillRect(14+i*18,52+n*38,8,3)}r.fillStyle="#333",r.fillRect(84,140,30,40),r.fillStyle="#111",r.fillRect(14,200,100,30)})}function sw(){let r=new re(1,1,1).translate(0,.5,0).toNonIndexed();return r.deleteAttribute("uv"),r.setAttribute("aRoof",new Et(new Float32Array(r.attributes.position.count),1)),r}function rw(){let r=[new Xe(.12,.17,11,8).translate(0,5.5,0),new re(.12,.12,2).translate(0,9.6,0),new re(.1,.1,1.5).translate(0,10.4,0),new Xe(.3,.3,.9,10).translate(0,7.6,-.42)].map(i=>{let s=i.index?i.toNonIndexed():i;return s.deleteAttribute("uv"),s}),t=[],e=[];for(let i of r)t.push(...i.attributes.position.array),e.push(...i.attributes.normal.array);let n=new At;return n.setAttribute("position",new yt(t,3)),n.setAttribute("normal",new yt(e,3)),n}var aw=`#include <common>
attribute float aRoof; attribute vec4 aInfo;
varying vec3 vWall, vNL, vSize; varying float vRoof; varying vec4 vInfo;`,ow=`#include <begin_vertex>
vSize = vec3(length(instanceMatrix[0].xyz), length(instanceMatrix[1].xyz), length(instanceMatrix[2].xyz));
vWall = position * vSize; vNL = normal; vRoof = aRoof; vInfo = aInfo;`,cw=`#include <common>
uniform float uLit; uniform sampler2D uSignTex;
varying vec3 vWall, vNL, vSize; varying float vRoof; varying vec4 vInfo;
float hh(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }`,lw=`#include <color_fragment>
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
}`,bl=class{constructor(t,e,n){this.scene=t,this.road=e,this.roadMat=n,this.group=new Pt,this.group.visible=!1,t.add(this.group),this.blocks=new Map,this.uLit={value:0},this.uSignTex={value:$E()},this.facade=new qt({roughness:.82,metalness:0}),this.facade.onBeforeCompile=s=>{s.uniforms.uLit=this.uLit,s.uniforms.uSignTex=this.uSignTex,s.vertexShader=s.vertexShader.replace("#include <common>",aw).replace("#include <begin_vertex>",ow),s.fragmentShader=s.fragmentShader.replace("#include <common>",cw).replace("#include <color_fragment>",lw).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
roughnessFactor = mix(roughnessFactor, 0.06, cGlass);`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += cEmis;`)},this.facade.customProgramCacheKey=()=>"city-facade",this.walkMat=new qt({map:ew(),roughness:.92}),this.lotMat=new qt({map:nw(),roughness:1}),this.markMat=new qt({vertexColors:!0,roughness:.6,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}),this.poleMat=new qt({color:9342343,roughness:.85}),this.wireMat=new cs({color:1776413}),this.uGlow={value:0},this.signMat=new qt({map:tw(),roughness:.55}),this.signMat.onBeforeCompile=s=>{s.uniforms.uGlow=this.uGlow,s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
attribute float aCell;`).replace("#include <uv_vertex>",`#include <uv_vertex>
vMapUv.x = (vMapUv.x + aCell) / 16.0;`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
uniform float uGlow;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += diffuseColor.rgb * uGlow;`)},this.signMat.customProgramCacheKey=()=>"city-vsign";let i=iw();this.vendBody=new qt({color:15329766,roughness:.45,metalness:.15}),this.vendFront=new qt({map:i,emissiveMap:i,emissive:16777215,emissiveIntensity:.3,roughness:.25});for(let s of[this.facade,this.lotMat,this.walkMat,this.markMat,this.poleMat,this.wireMat,this.signMat,this.vendBody,this.vendFront])de(s);this.boxGeo=sw(),this.houseGeo=Bf(),this.poleGeo=rw(),this.signGeo=new re(1,1,1).translate(0,.5,0),this.vendGeo=new re(1,1.83,.75).translate(0,.915,0),this._p={},this._q={},this._m=new bt,this._qt=new Vt,this._v=new T,this._s=new T,this._up=new T(0,1,0),this._c=new et,this.lastS=0,this.camF=1,this.clock=0,this.clockRate=1,this.sigMat=new qt({color:2829616,roughness:.6,metalness:.3}),this.lensMat=new Ye({color:16777215,toneMapped:!1}),de(this.sigMat),de(this.lensMat),this.headGeo=new re(1.3,.44,.3),this.lensGeo=new Xe(.15,.15,.04,14).rotateX(Math.PI/2),this.sigPoleGeo=new Xe(.1,.12,1,8).translate(0,.5,0),this.armGeo=new re(1,.1,.1).translate(.5,0,0)}_phase(t){let e=Mo,n=(Math.sin(t*91.7+13.1)*43758.5453%1+1)%1*e.cycle,i=((this.clock+n)%e.cycle+e.cycle)%e.cycle,s=i<e.mainG?0:i<e.mainG+e.y?1:2,a=e.mainG+e.y+e.allRed,o=i>=a&&i<a+e.crossG?0:i>=a+e.crossG&&i<a+e.crossG+e.y?1:2;return{main:s,cross:o,t:i}}mainLight(t){return this._phase(t).main}stopAhead(t,e,n){if(!this.group.visible)return 1/0;let i=this.road,s=Mo.stopA,a=e>0?i.junctionIndex(t+s-1):i.junctionIndex(t-s+1)-1,o=i.junction(a)-e*s,c=(o-t)*e;if(c>160||c<-1)return 1/0;let l=this._phase(a).main;return l===2||l===1&&c>n*n/8?c:1/0}collide(t,e,n){if(!this.group.visible){this.camF=1;return}let i=t.x,s=t.y+1.3,a=t.z,o=e.x-i,c=e.y-s,l=e.z-a,h=Math.hypot(o,c,l);if(h<.5)return;let u=this._near||(this._near=[]);u.length=0;let f=h+25;for(let v of this.blocks.values()){let m=v.userData.obb;for(let p=0;p<m.length;p+=7)Math.abs(m[p]-i)<f&&Math.abs(m[p+1]-a)<f&&u.push(p,m)}let d=1,g=.6;for(let v=.8;v<=h+g&&d===1;v+=.35){let m=i+o*v/h,p=s+c*v/h,x=a+l*v/h;for(let y=0;y<u.length;y+=2){let M=u[y],E=u[y+1];if(p>E[M+6]+g)continue;let b=m-E[M],w=x-E[M+1],C=b*E[M+2]-w*E[M+3],_=b*E[M+3]+w*E[M+2];if(Math.abs(C)<E[M+4]+g&&Math.abs(_)<E[M+5]+g){d=Math.max(.05,(v-g)/h);break}}}this.camF=d<this.camF?d:this.camF+(d-this.camF)*(1-Math.exp(-n*2.5)),this.camF<.999&&e.set(i+o*this.camF,s+c*this.camF,a+l*this.camF)}set visible(t){this.group.visible=t,t||this.reset()}get visible(){return this.group.visible}reset(){for(let t of this.blocks.values())this._dispose(t);this.blocks.clear()}update(t,e,n=0,i=1){if(!this.group.visible)return;this.clock+=n*this.clockRate;let s=this._c;for(let[h,u]of this.blocks){let f=u.userData.lens;if(!f)continue;let d=this._phase(h),g=3+4*e;for(let v=0;v<f.kind.length;v++){let m=(f.kind[v]?d.cross:d.main)===f.col[v],p=m?KE[f.col[v]]:JE[f.col[v]];f.mesh.setColorAt(v,s.setRGB(p[0]*(m?g:1),p[1]*(m?g:1),p[2]*(m?g:1)))}f.mesh.instanceColor.needsUpdate=!0}this.lastS=t,this.uLit.value=e,this.uGlow.value=.15+1.6*e,this.vendFront.emissiveIntensity=.25+1.1*e;let a=this.road,o=a.junctionIndex(t-YE)-1,c=a.junctionIndex(t+jE),l=[];for(let h=o;h<=c;h++)this.blocks.has(h)||l.push(h);l.sort((h,u)=>Math.abs(a.junction(h)-t)-Math.abs(a.junction(u)-t));for(let h=0;h<i&&h<l.length;h++)this.blocks.set(l[h],this._build(l[h]));for(let[h,u]of this.blocks)(h<o||h>c)&&(this._dispose(u),this.blocks.delete(h))}prime(t){this.group.visible&&this.update(t,this.uLit.value,0,99)}_dispose(t){this.group.remove(t),t.traverse(e=>{e.isInstancedMesh&&e.dispose(),e.geometry&&e.geometry.userData.own&&e.geometry.dispose()})}groundJ(t,e){let n=t.x+t.rx*e,i=t.z+t.rz*e,s=Math.abs(e),a=Math.min(1,Math.max(0,(s-Ae.hw-1.2)/14.8));return t.y+(Si(n,i)-t.y)*a*a*(3-2*a)-.02}_frame(t){let e=this.road.at(t,{});return{x:e.x,y:e.y,z:e.z,rx:Math.cos(e.th),rz:-Math.sin(e.th),fx:-Math.sin(e.th),fz:-Math.cos(e.th),th:e.th}}_build(t){let e=this.road,n=new Pt,i=e.junction(t),s=e.junction(t+1),a=Ae.hw,o=Ae.walk,c=Ae.side,l=Ae.sideWalk,h=a+o+.4,u={pos:[],nor:[],col:[],idx:[]},f={pos:[],nor:[],uv:[],idx:[]},d={pos:[],nor:[],uv:[],idx:[]},g={pos:[],nor:[],uv:[],idx:[]},v=[],m=[.86,.86,.83],p=[.86,.66,.16],x=[.85,.7,.12],y=(R,A,k,V)=>{let Y=Math.abs(V),W=Math.min(1,Math.max(0,(Y-a-1.2)/14.8));return k+(Si(R,A)-k)*W*W*(3-2*W)-.02},M=(R,A,k,V,Y)=>{let W=R.pos.length/3;for(let Mt=0;Mt<4;Mt++)R.pos.push(A[Mt][0],A[Mt][1],A[Mt][2]),R.nor.push(k[0],k[1],k[2]),R.col&&R.col.push(...V),R.uv&&R.uv.push(...Y?Y[Mt]:[0,0]);let ot=A[1][0]-A[0][0],st=A[1][1]-A[0][1],ct=A[1][2]-A[0][2],ut=A[2][0]-A[0][0],vt=A[2][1]-A[0][1],Z=A[2][2]-A[0][2],wt=st*Z-ct*vt,Rt=ct*ut-ot*Z,Lt=ot*vt-st*ut;wt*k[0]+Rt*k[1]+Lt*k[2]>=0?R.idx.push(W,W+1,W+2,W,W+2,W+3):R.idx.push(W,W+2,W+1,W,W+3,W+2)},E=[0,1,0],b=(R,A,k)=>{let V=e.at(R,this._p);return[V.x+Math.cos(V.th)*A,V.y+k,V.z-Math.sin(V.th)*A]},w=(R,A,k,V,Y,W,ot,st)=>{if(k<=A)return;let ct=Math.max(1,Math.ceil((k-A)/2));for(let ut=0;ut<ct;ut++){let vt=A+(k-A)*ut/ct,Z=A+(k-A)*(ut+1)/ct;M(R,[b(vt,V,W),b(Z,V,W),b(Z,Y,W),b(vt,Y,W)],E,ot,st&&[st(vt,V),st(Z,V),st(Z,Y),st(vt,Y)])}},C=(R,A,k,V,Y,W,ot)=>{let st=Math.max(1,Math.ceil((k-A)/2));for(let ct=0;ct<st;ct++){let ut=A+(k-A)*ct/st,vt=A+(k-A)*(ct+1)/st,Z=e.at((ut+vt)/2,this._q),wt=[-Math.cos(Z.th)*ot,0,Math.sin(Z.th)*ot];M(R,[b(ut,V,Y),b(vt,V,Y),b(vt,V,W),b(ut,V,W)],wt,null,[[0,ut/2],[0,vt/2],[.1,vt/2],[.1,ut/2]])}},_=this._frame(i),S=(R,A)=>_.x+_.fx*R+_.rx*A,I=(R,A)=>_.z+_.fz*R+_.rz*A,F=R=>y(S(0,R),I(0,R),_.y,R),N=(R,A,k)=>[S(R,A),F(A)+k,I(R,A)],L=(R,A,k,V,Y,W,ot,st)=>{let ct=Math.min(V,Y),ut=Math.max(V,Y),vt=[ct];for(let Z=Math.ceil((ct-a)/4);a+Z*4<ut;Z++){let wt=a+Z*4;wt>ct&&vt.push(wt)}for(let Z=Math.ceil((ct+a)/4);-a+Z*4<ut;Z++){let wt=-a+Z*4;wt>ct&&wt<0&&vt.push(wt)}vt.push(ut),vt.sort((Z,wt)=>Z-wt);for(let Z=0;Z+1<vt.length;Z++){let wt=vt[Z],Rt=vt[Z+1];Rt-wt<.001||M(R,[N(A,wt,W),N(k,wt,W),N(k,Rt,W),N(A,Rt,W)],E,ot,st&&[st(A,wt),st(k,wt),st(k,Rt),st(A,Rt)])}};for(let R of[-1,1]){let A=R*a,k=R*va;L(d,-c,c,A,k,.05,null,(V,Y)=>[(V+c)/(2*c),Y/12]);for(let V of[-1,1]){L(f,V*c,V*(c+l),R*h,k,Pn,null,(Y,W)=>[Y/2,W/2]);for(let Y=h;Y<va;Y+=4){let W=Math.min(va,Y+4);M(f,[N(V*c,R*Y,.03),N(V*c,R*W,.03),N(V*c,R*W,Pn),N(V*c,R*Y,Pn)],[-V*_.fx,0,-V*_.fz],null,[[0,Y/2],[0,W/2],[.1,W/2],[.1,Y/2]])}}for(let V=-c+.35;V<c-.3;V+=.9)L(u,V,V+.45,R*(a+.7),R*(a+3.4),$n,m);L(u,R*.15,R*(c-.2),R*(a+4),R*(a+4.45),$n,m);for(let V=h+3;V<va-3;V+=6)L(u,-.07,.07,R*V,R*(V+3),$n,m)}for(let R of[-1,1])for(let A=-a+.35;A<a-.4;A+=.9)L(u,R*6.4,R*10.4,A,A+.45,$n,m);L(u,-11.9,-11.45,.2,a-.3,$n,m),L(u,11.45,11.9,-a+.3,-.2,$n,m);let P=i+10.4,D=s-10.4;for(let R of[-1,1]){w(u,P,D,R*.1,R*.25,$n,p),w(u,i+6,s-6,R*(a-.4),R*(a-.25),$n,m);let A=i+12,k=s-12;w(u,A,Math.min(k,A+30),R*3.42,R*3.58,$n,m),w(u,Math.max(A,k-30),k,R*3.42,R*3.58,$n,m);for(let V=Math.ceil((A+30)/10);V*10+5<k-30;V++)w(u,V*10,V*10+5,R*3.42,R*3.58,$n,m)}for(let R of Ae.lanes){let A=s-11.9-8;w(u,A-3.2,A,R-.08,R+.08,$n,m);for(let k=0;k<4;k++){let V=.45-k*.11;w(u,A+k*.25,A+(k+1)*.25,R-V,R+V,$n,m)}}let U=i+c,O=s-c;for(let R of[-1,1]){let A=R*a,k=R*h;w(f,U,O,A,k,Pn,null,(V,Y)=>[Y/2,V/2]),C(f,U,O,A,.03,Pn,R);for(let[V,Y]of[[U,1],[O,-1]]){let W=e.at(V,this._q);M(f,[b(V,A,.03),b(V,k,.03),b(V,k,Pn),b(V,A,Pn)],[Math.sin(W.th)*Y,0,Math.cos(W.th)*Y],null,[[0,0],[2,0],[2,.1],[0,.1]])}w(u,U+.5,O-.5,R*(a+2.3),R*(a+2.6),Pn+.006,x)}let G=[],j=[],J=[],it=[],z=yl(t*7919+17),$=(R,A)=>{let k=z();return R===3?2:R===2?5+Math.floor(k*(A?14:8)):R===1?4+Math.floor(k*(A?9:6)):2+Math.floor(k*k*5)},lt=(R,A)=>{let k=e.curvature(R);return k*A<0&&Math.abs(A)>.55/Math.max(Math.abs(k),1e-6)},ht=(R,A,k,V,Y,W,ot,st,ct)=>{let ut=Math.cos(k),vt=Math.sin(k),Z=ct;for(let[te,se]of[[-V/2,-Y/2],[V/2,-Y/2],[-V/2,Y/2],[V/2,Y/2]])Z=Math.min(Z,Si(R+ut*te+vt*se,A-vt*te+ut*se));let wt=Z-.4,Rt=Math.round((ct-wt)*50)/50,Lt=$(W,st),Mt=z(),pt=(ot?3.6:0)+Lt*(W===2?3.6:W===3?2.9:3)+(W===3?0:.6),Bt=q0[W===2?z()<.5?2:5:Math.floor(z()*q0.length)];return G.push([R,A,k,V,pt,Y,W,Mt,ot?1:0,Math.floor(z()*16),Bt,W===3,wt,Rt]),j.push(R,A,ut,vt,V/2,Y/2,ct+pt*(W===3?1.45:1)),pt},_t=R=>{let A=z();return R?A<.58?0:A<.83?1:A<.96?2:3:A<.3?3:A<.6?1:A<.8?0:2},Ut=i+c+l+18,Xt=s-c-l-18;for(let R of[-1,1]){let A=i+c+l+.4,k=s-c-l-.4,V=A;for(;A<k-4;){let W=z(),ot=A>Ut&&A<Xt-20&&A-V>25;if(ot&&W<.13){A=this._alley(A,2.6+1.3*z(),R,f,v,y,h),V=A;continue}if(ot&&W<.21){A=this._lot(A,10+8*z(),R,g,v,y,h),V=A;continue}let st=Math.min(k-A,5+9*z()*z()+2*z()),ct=10+8*z(),ut=e.at(A+st/2,this._p),vt=R*(h+ct/2),Z=ut.x+Math.cos(ut.th)*vt,wt=ut.z-Math.sin(ut.th)*vt,Rt=ut.th+(R>0?-Math.PI/2:Math.PI/2),Lt=_t(!0),Mt=Lt!==3&&z()<.8,pt=ut.y+Pn,Bt=ht(Z,wt,Rt,st,ct,Lt,Mt,!1,pt);if(Lt===0&&Bt>9&&z()<.6){let te=(z()<.5?-1:1)*(st/2-.45),se=ct/2+.42,Kt=Math.min(Bt-5,3+4*z()),ft=Math.cos(Rt),B=Math.sin(Rt);J.push([Z+ft*te+B*se,wt-B*te+ft*se,Rt,pt+4.3,Kt,Math.floor(z()*16)])}if(Mt&&z()<.22){let te=A+.8+z()*Math.max(.1,st-1.6),se=e.at(te,this._q),Kt=R*(a+o-.05);it.push([se.x+Math.cos(se.th)*Kt,se.y+Pn,se.z-Math.sin(se.th)*Kt,Rt])}A+=st+(z()<.3?.4+z()*1.2:.05)}let Y=h+18.6;for(let[W,ot]of[[i+c+l+.3,1],[s-c-l-.3,-1]]){let st=this._frame(W),ct=Y;for(;ct<va-8;){let ut=7+7*z(),vt=10+6*z(),Z=ot*vt/2,wt=R*(ct+ut/2);if(!lt(W,wt)){let Rt=st.x+st.fx*Z+st.rx*wt,Lt=st.z+st.fz*Z+st.rz*wt,Mt=st.x+st.rx*wt,pt=st.z+st.rz*wt,Bt=_t(!1);ht(Rt,Lt,st.th+(ot>0?0:Math.PI),ut,vt,Bt,Bt!==3&&ct<70&&z()<.5,ct>90,y(Mt,pt,st.y,wt)+Pn)}ct+=ut+.3+z()*1.5}}for(let W=Ut;W<Xt-9;W+=15){let ot=this._frame(W+7.5);for(let st=Y;st<va-10;st+=17){let ct=z()<.15,ut=8+5*z(),vt=9+5*z(),Z=R*(st+8.5),wt=(z()-.5)*2;if(ct||lt(W+7.5,Z))continue;let Rt=ot.x+ot.fx*wt+ot.rx*Z,Lt=ot.z+ot.fz*wt+ot.rz*Z,Mt=st>90,pt=Mt&&z()<.12?2:_t(!1);ht(Rt,Lt,ot.th+(z()<.5?0:Math.PI)+(z()<.5?Math.PI/2:0),ut,vt,pt,!1,Mt,Si(Rt,Lt))}}}n.userData.obb=j;let Ft=(R,A,k,V)=>{if(!R.idx.length)return null;let Y=new At;Y.setAttribute("position",new yt(R.pos,3)),Y.setAttribute("normal",new yt(R.nor,3)),k&&Y.setAttribute("uv",new yt(R.uv,2)),V&&Y.setAttribute("color",new yt(R.col,3)),Y.setIndex(R.idx),Y.userData.own=!0;let W=new Nt(Y,A);return W.receiveShadow=!0,n.add(W),W},ne=Ft(d,this.roadMat,!0,!1);ne&&(ne.geometry.setAttribute("aDirt",new Et(new Float32Array(d.pos.length/3),1)),ne.layers.set(3)),Ft(f,this.walkMat,!0,!1),Ft(g,this.lotMat,!0,!1),Ft(u,this.markMat,!1,!0);let K=this._m,Ge=this._qt,Ot=this._v,Yt=this._s,It=this._c;for(let R of[!1,!0]){let A=G.filter(ot=>ot[11]===R);if(!A.length)continue;let k=R?this.houseGeo:this.boxGeo,V=new At;for(let ot of["position","normal","aRoof"])V.setAttribute(ot,k.attributes[ot].clone());let Y=new Float32Array(A.length*4),W=new _e(V,this.facade,A.length);W.instanceColor=new Ke(new Float32Array(A.length*3),3),A.forEach(([ot,st,ct,ut,vt,Z,wt,Rt,Lt,Mt,pt,,Bt,te],se)=>{Ge.setFromAxisAngle(this._up,ct),K.compose(Ot.set(ot,Bt,st),Ge,Yt.set(ut,vt+te,Z)),W.setMatrixAt(se,K),W.setColorAt(se,It.setRGB(pt[0],pt[1],pt[2],ue)),Y.set([wt,Rt,Lt+2*Math.round(te*50),Mt],se*4)}),V.setAttribute("aInfo",new Ke(Y,4)),V.userData.own=!0,W.castShadow=W.receiveShadow=!0,W.frustumCulled=!1,n.add(W)}if(J.length){let R=new At;for(let V of["position","normal","uv"])R.setAttribute(V,this.signGeo.attributes[V].clone());R.setIndex(this.signGeo.index.clone()),R.userData.own=!0;let A=new Float32Array(J.length),k=new _e(R,this.signMat,J.length);J.forEach(([V,Y,W,ot,st,ct],ut)=>{Ge.setFromAxisAngle(this._up,W),K.compose(Ot.set(V,ot,Y),Ge,Yt.set(.14,st,.8)),k.setMatrixAt(ut,K),A[ut]=ct}),R.setAttribute("aCell",new Ke(A,1)),k.castShadow=!0,k.frustumCulled=!1,n.add(k)}if(it.length){let R=new _e(this.vendGeo,[this.vendBody,this.vendBody,this.vendBody,this.vendBody,this.vendFront,this.vendBody],it.length);it.forEach(([A,k,V,Y],W)=>{Ge.setFromAxisAngle(this._up,Y),K.compose(Ot.set(A,k,V),Ge,Yt.set(1,1,1)),R.setMatrixAt(W,K)}),R.castShadow=!0,R.frustumCulled=!1,n.add(R)}let Ce=R=>{let A=R*xl+8,k=e.nearJunction(A);return Math.abs(A-k)<9?null:A},Qt=[];for(let R=Math.ceil((i-8)/xl);R*xl+8<s;R++){let A=Ce(R);if(A===null)continue;let k=R+1,V=Ce(k);V===null&&(V=Ce(++k));for(let Y of[-1,1]){let W=Y*(a+.45),ot=e.at(A,this._p);if(Qt.push([ot.x+Math.cos(ot.th)*W,ot.y+Pn,ot.z-Math.sin(ot.th)*W,ot.th]),V===null)continue;let st=e.at(V,this._q);for(let[ct,ut,vt]of[[-.9,9.66,.55],[0,9.66,.55],[.9,9.66,.55],[-.7,10.46,.45],[.7,10.46,.45],[.15,6.3,.8]]){let Z=W+ct,wt=ot.x+Math.cos(ot.th)*Z,Rt=ot.z-Math.sin(ot.th)*Z,Lt=st.x+Math.cos(st.th)*Z,Mt=st.z-Math.sin(st.th)*Z,pt=ot.y+Pn+ut,Bt=st.y+Pn+ut,te=Math.hypot(Lt-wt,Mt-Rt),se=vt*te/xl,Kt=wt,ft=pt,B=Rt;for(let xt=1;xt<=8;xt++){let mt=xt/8,Wt=wt+(Lt-wt)*mt,Gt=Rt+(Mt-Rt)*mt,Me=pt+(Bt-pt)*mt-4*se*mt*(1-mt);v.push(Kt,ft,B,Wt,Me,Gt),Kt=Wt,ft=Me,B=Gt}}}}if(Qt.length){let R=new _e(this.poleGeo,this.poleMat,Qt.length);Qt.forEach(([A,k,V,Y],W)=>{Ge.setFromAxisAngle(this._up,Y+Math.PI/2),K.compose(Ot.set(A,k,V),Ge,Yt.set(1,1,1)),R.setMatrixAt(W,K)}),R.castShadow=!0,R.frustumCulled=!1,n.add(R)}if(v.length){let R=new At;R.setAttribute("position",new yt(v,3)),R.userData.own=!0;let A=new ki(R,this.wireMat);A.frustumCulled=!1,n.add(A)}return this._signals(n,_,F),this.group.add(n),n}_signals(t,e,n){let i=Ae.hw,s=Ae.side,a=(b,w)=>[e.x+e.fx*b+e.rx*w,e.z+e.fz*b+e.rz*w],o=[],c=[],l=[],h=(b,w)=>Math.atan2(b,w),u=n(0)+.2,f=(b,w)=>{let[C,_]=a(b,w*(i+.7)),[S,I]=a(b,w*3.6);c.push([C,u,_,5.9]),l.push([C,u+5.7,_,Math.atan2(-(I-_),S-C),Math.hypot(S-C,I-_)+.7]),o.push([S,u+5.55,I,h(w>0?-e.fx:e.fx,w>0?-e.fz:e.fz),0])};f(11,1),f(-11,-1);for(let b of[-1,1]){let w=b*(s+1),[C,_]=a(w,-b*(i+.8));c.push([C,u,_,4.4]),o.push([C,u+4.2,_,h(b*e.rx,b*e.rz),1])}let d=this._m,g=this._qt,v=this._v,m=this._s,p=(b,w,C,_)=>{let S=new _e(b,w,C.length);return C.forEach((I,F)=>{_(I),S.setMatrixAt(F,d)}),S.castShadow=!0,S.frustumCulled=!1,t.add(S),S};p(this.sigPoleGeo,this.sigMat,c,([b,w,C,_])=>d.compose(v.set(b,w,C),g.identity(),m.set(1,_,1))),p(this.armGeo,this.sigMat,l,([b,w,C,_,S])=>d.compose(v.set(b,w,C),g.setFromAxisAngle(this._up,_),m.set(S,1,1))),p(this.headGeo,this.sigMat,o,([b,w,C,_])=>d.compose(v.set(b,w,C),g.setFromAxisAngle(this._up,_),m.set(1,1,1)));let x=[],y=[],M=[];for(let[b,w,C,_,S]of o){let I=Math.cos(_),F=Math.sin(_);for(let N=0;N<3;N++){let L=(N-1)*.42,P=.16;x.push([b+I*L+F*P,w,C-F*L+I*P,_]),y.push(S),M.push(N)}}let E=p(this.lensGeo,this.lensMat,x,([b,w,C,_])=>d.compose(v.set(b,w,C),g.setFromAxisAngle(this._up,_),m.set(1,1,1)));E.castShadow=!1,E.instanceColor=new Ke(new Float32Array(x.length*3),3),t.userData.lens={mesh:E,kind:Int8Array.from(y),col:Int8Array.from(M)}}_alley(t,e,n,i,s,a,o){let c=this._frame(t+e/2),l=o+18.2,h=(_,S,I)=>[c.x+c.fx*_+c.rx*n*S,I,c.z+c.fz*_+c.rz*n*S],u=c.y+Pn,f=a(c.x+c.rx*n*l,c.z+c.rz*n*l,c.y,l),d=Math.min(6,Math.max(1,f-u+1.2)),g=Math.round(d/.17),v=d/g,m=.3,p=-e/2+.05,x=e/2-.05,y=[-c.rx*n,0,-c.rz*n];for(let _=0;_<g;_++){let S=o+_*m,I=S+m,F=u+_*v,N=F+v;this._q4(i,[h(p,S,F),h(x,S,F),h(x,S,N),h(p,S,N)],y,[[0,0],[e/2,0],[e/2,.1],[0,.1]]),this._q4(i,[h(p,S,N),h(x,S,N),h(x,I,N),h(p,I,N)],[0,1,0],[[0,S/2],[e/2,S/2],[e/2,I/2],[0,I/2]])}let M=o+g*m,E=u+d;this._q4(i,[h(p,M,E),h(x,M,E),h(x,l,E),h(p,l,E)],[0,1,0],[[0,M/2],[e/2,M/2],[e/2,l/2],[0,l/2]]);let b=h(0,o-.2,u+.9),w=h(0,M,E+.9),C=h(0,M+1.5,E+.9);s.push(...b,...w,...w,...C);for(let[_,S]of[[b,u],[w,E]])s.push(_[0],S,_[2],..._);return t+e}_lot(t,e,n,i,s,a,o){let c=this._frame(t+e/2),l=o+18.2,h=(d,g)=>{let v=c.x+c.fx*d+c.rx*n*g,m=c.z+c.fz*d+c.rz*n*g;return[v,a(v,m,c.y,g)+.03,m]};for(let d=o-.3;d<l;d+=4){let g=Math.min(l+1,d+4);this._q4(i,[h(-e/2,d),h(e/2,d),h(e/2,g),h(-e/2,g)],[0,1,0],[[0,d/3],[e/3,d/3],[e/3,g/3],[0,g/3]])}let u=c.y+Pn,f=(d,g)=>[c.x+c.fx*d+c.rx*n*(o-.1),u+g,c.z+c.fz*d+c.rz*n*(o-.1)];for(let d=-e/2+.3;d<=e/2-.3;d+=2)s.push(...f(d,0),...f(d,1.1));for(let d of[.5,1.05])s.push(...f(-e/2+.3,d),...f(e/2-.3,d));return t+e}_q4(t,e,n,i){let s=t.pos.length/3;for(let v=0;v<4;v++)t.pos.push(...e[v]),t.nor.push(...n),t.uv.push(...i[v]);let a=e[1][0]-e[0][0],o=e[1][1]-e[0][1],c=e[1][2]-e[0][2],l=e[2][0]-e[0][0],h=e[2][1]-e[0][1],u=e[2][2]-e[0][2],f=o*u-c*h,d=c*l-a*u,g=a*h-o*l;f*n[0]+d*n[1]+g*n[2]>=0?t.idx.push(s,s+1,s+2,s,s+2,s+3):t.idx.push(s,s+2,s+1,s,s+3,s+2)}};var _l=Object.freeze({intensity:36,distance:165,angle:1.29,penumbra:.9,decay:.87,glowOpacity:.29,glowSize:2.9,color:"#ffe4a8",glowColor:"#ffb43f"});function ur(r,t,{spots:e=!0,glows:n=!0}={}){let i=(e?[-1,1]:[]).map(()=>{let a=new Fs(16766624,0,110,.8,1,.55);return r.add(a,a.target),a}),s=(n?[-1,1]:[]).map(()=>{let a=new An(new Mn({map:t,color:16761975,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:tn,fog:!1}));return a.renderOrder=6,a.scale.set(2.1*1.35,2.1*.85,1),r.add(a),a});return{spots:i,glows:s,tune:{..._l},eye:new T,forward:new T}}function xa(r){if(r.lamps)return r.lamps;let t=r.width*.3,e=Math.min(.7,r.height*.45);return{head:[t,e,-r.length/2+.25],tail:[t,e+.05,r.length/2]}}function fr(r,t){let[e,n,i]=xa(t).head;r.spots.forEach((s,a)=>{let o=a?e:-e;s.position.set(o,n,i),s.target.position.set(o*.9,0,i-40)}),r.glows.forEach((s,a)=>s.position.set(a?e:-e,n,i-.03))}function Ns(r,t,e,n){let i=r.tune||_l;r.spots.forEach(a=>{a.color.set(i.color),a.intensity=i.intensity*n,a.distance=i.distance,a.angle=i.angle,a.penumbra=i.penumbra,a.decay=i.decay});let s=1;e&&(t.updateWorldMatrix(!0,!0),(r.glows[0]||t).getWorldPosition(r.eye),r.eye.subVectors(e.position,r.eye).normalize(),r.forward.set(0,0,-1).transformDirection(t.matrixWorld),s=Oe.smoothstep(r.eye.dot(r.forward),-.05,.35)),r.glows.forEach(a=>{a.material.color.set(i.glowColor),a.material.opacity=i.glowOpacity*n*s,a.scale.set(i.glowSize*1.35,i.glowSize*.85,1),a.visible=n*s>.01})}var hw=1/3.6,Ml=480,Gf=170,El=[30,70],j0=120;function ze(r,t,e,n,i){let s=[[-t[0],t[3],t[1]],[t[0],t[3],t[1]],[t[0],t[3],t[2]],[-t[0],t[3],t[2]],[-e[0],e[3],e[1]],[e[0],e[3],e[1]],[e[0],e[3],e[2]],[-e[0],e[3],e[2]]],a=[[0,1,2,3],[4,7,6,5],[0,4,5,1],[1,5,6,2],[2,6,7,3],[3,7,4,0]];for(let o of a){let[c,l,h,u]=o.map(d=>s[d]),f=new T().subVectors(new T(...l),new T(...c)).cross(new T().subVectors(new T(...h),new T(...c))).normalize();for(let d of[c,l,h,c,h,u])r.pos.push(...d),r.nor.push(f.x,f.y,f.z),r.col.push(...n),r.tint.push(i.tint?1:0),r.glow.push(i.glow?1:0),r.gloss.push(i.gloss?1:0),r.flash.push(i.flash?d[0]>0?2:1:0)}}var uw=(r,t,e,n,i,s,a,o={})=>ze(r,[n/2,e-s/2,e+s/2,t-i/2],[n/2,e-s/2,e+s/2,t+i/2],a,o);function ks(r,t,e,n,i,s,a=[.05,.05,.055]){let o=new Xe(i,i,s,12).rotateZ(Math.PI/2).translate(t,e,n).toNonIndexed(),c=o.attributes.position.array,l=o.attributes.normal.array;for(let h=0;h<c.length/3;h++){r.pos.push(c[h*3],c[h*3+1],c[h*3+2]),r.nor.push(l[h*3],l[h*3+1],l[h*3+2]);let u=Math.abs(l[h*3])>.9?.55:1;r.col.push(...u<1?[.42,.43,.45]:a),r.tint.push(0),r.glow.push(0),r.gloss.push(0),r.flash.push(0)}}var fw=()=>({pos:[],nor:[],col:[],tint:[],glow:[],gloss:[],flash:[]}),fs=[1,1,1],_a=[.05,.07,.09],Y0=[.08,.08,.09],Us=[.25,.25,.27],J0=[1,.95,.85],Z0=[.9,.05,.03],ds={tint:!0},dr={gloss:!0},ya={glow:!0};function Je(r,t,e,n,i,s,a,o,c={}){let l=r.pos.length;uw(r,e,n,i,s,a,o,c);for(let h=l;h<r.pos.length;h+=3)r.pos[h]+=t}function Ma(r,t,e,n,i,s=.3){for(let a of[-1,1])Je(r,a*(t-s/2-.05),e,n-.02,s,.13,.05,J0,ya),Je(r,a*(t-s/2-.05),e,i+.02,s,.12,.05,Z0,ya)}function K0(r,{L:t=4.5,W:e=1.75,H:n=1.44,taxi:i=!1}={}){let s=e/2,a=-t/2,o=t/2;ze(r,[s,a+.1,o-.05,.32],[s,a,o,.92],fs,ds),ze(r,[s-.06,a+1.05,o-.55,.92],[s-.2,a+1.65,o-1.05,n-.05],_a,dr),ze(r,[s-.2,a+1.66,o-1.06,n-.06],[s-.22,a+1.7,o-1.1,n],fs,ds),Je(r,0,.42,a+.02,e-.1,.18,.12,Us),Je(r,0,.42,o-.02,e-.1,.18,.12,Us),Ma(r,s,.78,a,o);for(let[c,l]of[[-1,a+.85],[1,a+.85],[-1,o-.8],[1,o-.8]])ks(r,c*(s-.1),.32,l,.32,.24);i&&Je(r,0,n+.11,a+2,.5,.2,.22,[1,.85,.4],ya)}function dw(r){ze(r,[.74,-1.7+.05,1.7,.3],[.74,-1.7,1.7,.95],fs,ds),ze(r,[.74-.03,-1.7+.35,1.7-.1,.95],[.74-.1,-1.7+.75,1.7-.15,1.6],_a,dr),ze(r,[.74-.1,-1.7+.76,1.7-.16,1.6],[.74-.1,-1.7+.78,1.7-.18,1.65],fs,ds),Je(r,0,.38,-1.7+.01,1.4,.16,.1,Us),Ma(r,.74,.8,-1.7,1.7,.26);for(let[s,a]of[[-1,-1.7+.55],[1,-1.7+.55],[-1,1.7-.55],[1,1.7-.55]])ks(r,s*(.74-.08),.28,a,.28,.2)}function pw(r){ze(r,[.85,-2.35+.05,2.35,.33],[.85,-2.35,2.35,1.05],fs,ds),ze(r,[.85-.03,-2.35+.7,2.35-.05,1.05],[.85-.08,-2.35+1.2,2.35-.1,1.85],_a,dr),ze(r,[.85-.08,-2.35+1.21,2.35-.11,1.85],[.85-.08,-2.35+1.25,2.35-.13,1.92],fs,ds),Je(r,0,.42,-2.35+.01,1.62,.18,.1,Us),Ma(r,.85,.85,-2.35,2.35);for(let[s,a]of[[-1,-2.35+.8],[1,-2.35+.8],[-1,2.35-.8],[1,2.35-.8]])ks(r,s*(.85-.1),.33,a,.33,.24)}function mw(r){ze(r,[1.25,-5.25,5.25,.35],[1.25,-5.25,5.25,1.15],[.92,.92,.9],{}),ze(r,[1.25+.005,-5.25+.2,5.25-.2,1],[1.25+.005,-5.25+.2,5.25-.2,1.18],fs,ds),ze(r,[1.25,-5.25+.02,5.25,1.15],[1.25,-5.25+.02,5.25,2.65],_a,dr),ze(r,[1.25,-5.25,5.25,2.65],[1.25-.05,-5.25+.05,5.25-.05,3.1],[.9,.9,.88],{}),Je(r,0,2.85,-5.25-.01,1.7,.3,.05,[1,.55,.1],ya);for(let s=0;s<4;s++)Je(r,-1.25-.01,1.9,-5.25+1.5+s*2.2,.02,1.4,.08,Us);for(let s=0;s<4;s++)Je(r,1.25+.01,1.9,-5.25+1.5+s*2.2,.02,1.4,.08,Us);Ma(r,1.25,.75,-5.25,5.25,.35);for(let[s,a]of[[-1,-5.25+2.2],[1,-5.25+2.2],[-1,5.25-2.4],[1,5.25-2.4]])ks(r,s*(1.25-.15),.45,a,.45,.3)}function gw(r){ze(r,[.18,-.6,.6,.25],[.2,-.5,.75,.7],fs,ds),Je(r,0,.78,.25,.3,.1,.6,Y0),ze(r,[.18,-.75,-.55,.3],[.12,-.72,-.6,1.05],fs,ds),Je(r,0,1.05,-.62,.62,.05,.05,Y0),Je(r,0,.95,-.76,.16,.1,.04,J0,ya),Je(r,0,.7,.78,.14,.07,.04,Z0,ya),ks(r,0,.25,-.62,.25,.1),ks(r,0,.25,.62,.25,.1);let t=[.16,.18,.22],e=[.12,.13,.16],n=[.75,.58,.46],i=[.85,.85,.85];ze(r,[.2,0,.35,.8],[.19,-.1,.2,1.4],t,{}),Je(r,0,.82,-.05,.36,.14,.55,e);for(let s of[-1,1]){Je(r,s*.17,.45,-.32,.1,.5,.12,e),ze(r,[.05,-.05,.08,1.32],[.05,-.55,-.45,1.06],t,{});for(let a=r.pos.length-108;a<r.pos.length;a+=3)r.pos[a]+=s*.22}Je(r,0,1.47,.02,.12,.1,.12,n),Je(r,0,1.62,.02,.28,.26,.3,i,dr)}function vw(r){let o=[.04,.04,.045],c=[.92,.92,.9];ze(r,[.89,-2.3+.1,2.3-.05,.32],[.89,-2.3,2.3,.66],o,{}),ze(r,[.89,-2.3,2.3,.66],[.89,-2.3,2.3,.92],c,{}),ze(r,[.89-.06,-2.3+1.05,2.3-.55,.92],[.89-.2,-2.3+1.65,2.3-1.05,1.45-.05],_a,dr),ze(r,[.89-.2,-2.3+1.66,2.3-1.06,1.45-.06],[.89-.22,-2.3+1.7,2.3-1.1,1.45],c,{}),Je(r,0,1.45+.08,-2.3+2.2,1.1,.14,.26,[1,.06,.04],{flash:!0}),Je(r,0,.42,-2.3+.02,1.78-.1,.18,.12,Us),Ma(r,.89,.78,-2.3,2.3);for(let[l,h]of[[-1,-2.3+.85],[1,-2.3+.85],[-1,2.3-.8],[1,2.3-.8]])ks(r,l*(.89-.1),.32,h,.32,.24)}function xw(r){let s=[.95,.95,.93],a=[.85,.08,.06];ze(r,[.95,-2.7+.05,2.7,.35],[.95,-2.7,2.7,2.25],s,{}),ze(r,[.95+.005,-2.7+.1,2.7-.05,.95],[.95+.005,-2.7+.1,2.7-.05,1.12],a,{}),ze(r,[.95+.006,-2.7-.005,-2.7+1.4,1.3],[.95-.1,-2.7+.45,-2.7+1.4,2],_a,dr),Je(r,0,2.33,-2.7+.6,1.3,.16,.3,a,{flash:!0}),Je(r,0,.45,-2.7+.01,1.8,.2,.1,Us),Ma(r,.95,.85,-2.7,2.7);for(let[o,c]of[[-1,-2.7+.9],[1,-2.7+.9],[-1,2.7-.9],[1,2.7-.9]])ks(r,o*(.95-.1),.35,c,.35,.26)}var ba={police:{build:vw,len:4.6,wid:1.78,v:[40,40],max:2},ambulance:{build:xw,len:5.4,wid:1.9,v:[40,40],max:2},sedan:{build:r=>K0(r),len:4.5,wid:1.75,v:[38,52],max:40},taxi:{build:r=>K0(r,{taxi:!0}),len:4.5,wid:1.75,v:[36,50],max:14},kei:{build:dw,len:3.4,wid:1.48,v:[34,48],max:30},van:{build:pw,len:4.7,wid:1.7,v:[34,46],max:18},bus:{build:mw,len:10.5,wid:2.5,v:[30,40],max:8},scooter:{build:gw,len:1.6,wid:.7,v:[30,44],max:24}},bw=[["sedan",.3],["kei",.24],["taxi",.1],["van",.12],["bus",.06],["scooter",.18]],yw={police:["#ffffff"],ambulance:["#ffffff"],sedan:["#e8e8e6","#1c1d20","#8d9196","#2a3550","#6b0f14","#c9c3b6"],taxi:["#121314","#1d5a3c","#f1c232","#e8e8e6"],kei:["#f2f0ea","#e7d9b8","#9cc6d8","#e6a8b4","#4a4f55","#c8d77a"],van:["#ededea","#b8bcc0","#1c1d20","#3d5a80"],bus:["#1f6fb2","#2b9a4a","#d4382c","#e39b17"],scooter:["#d8d8d4","#1c1d20","#b0302c","#2d6db5","#e1c35a"]},wl=class{constructor(t,e,n){this.road=e,this.city=n,this.group=new Pt,this.group.visible=!1,t.add(this.group),this.uLamp={value:0},this.uTime={value:0};let i=new qt({vertexColors:!0,roughness:.5,metalness:.1});i.onBeforeCompile=s=>{s.uniforms.uLamp=this.uLamp,s.uniforms.uTime=this.uTime,s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
attribute float aTint, aGlow, aGloss, aFlash, aHonk;
uniform float uTime;
varying float vGlow, vGloss;`).replace("#include <color_vertex>",`vColor = vec3(1.0);
          vColor *= color;
          #ifdef USE_INSTANCING_COLOR
            vColor = mix(vColor, vColor * instanceColor.xyz, aTint);
          #endif
          vGlow = aGlow; vGloss = aGloss;
          // xe sau bấm còi: nháy đèn pha (đèn trắng phía trước)
          if (aHonk > 0.5 && aGlow > 0.5 && color.r > 0.9 && color.b > 0.7) vGlow += 4.0 * step(0.5, fract(uTime * 4.0));
          // đèn ưu tiên: nửa trái / phải nhấp nháy xen kẽ
          if (aFlash > 0.5) vGlow = 3.0 * step(0.5, fract(uTime * 2.2 + (aFlash > 1.5 ? 0.5 : 0.0)));`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
uniform float uLamp;
varying float vGlow, vGloss;`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
roughnessFactor = mix(roughnessFactor, 0.08, vGloss);`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += vColor * vGlow * (0.6 + 5.0 * uLamp);`)},i.customProgramCacheKey=()=>"city-vehicle",de(i),this.meshes={};for(let[s,a]of Object.entries(ba)){let o=fw();a.build(o);let c=new At;c.setAttribute("position",new yt(o.pos,3)),c.setAttribute("normal",new yt(o.nor,3)),c.setAttribute("color",new yt(o.col,3)),c.setAttribute("aTint",new yt(o.tint,1)),c.setAttribute("aGlow",new yt(o.glow,1)),c.setAttribute("aGloss",new yt(o.gloss,1)),c.setAttribute("aFlash",new yt(o.flash,1));let l=new _e(c,i,a.max);l.instanceColor=new Ke(new Float32Array(a.max*3),3),l.honk=new Ke(new Float32Array(a.max),1).setUsage(zn),c.setAttribute("aHonk",l.honk),l.count=0,l.castShadow=!0,l.frustumCulled=!1,this.group.add(l),this.meshes[s]=l}this.cars=[],this.ctrl={lane:null,maxV:1/0},this._p={},this._m=new bt,this._q=new Vt,this._v=new T,this._one=new T(1,1,1),this._c=new et,this._up=new T(0,1,0),this.crossTimers=new Map,this.filled=!1,this.density=1,this.speedK=1}set visible(t){this.group.visible=t,t&&this._emSetup(),t||(this.cars.length=0,this.filled=!1,this.crossTimers.clear())}get visible(){return this.group.visible}spawnScripted(t,e,n,i,s,a=15){let o=this._new(t,{s:e,d:n,home:n,dir:i,color:"#ffffff"});return o.color="#ffffff",o.vMax=12,o.v=a,o.script={to:s,v:a,arrived:!1},this.cars.push(o),o}stuckBehind(t,e){return this.cars.filter(n=>!n.cross&&!n.script&&!n.crashed&&n.dir>0&&Math.abs(n.d-e)<1.8&&n.s<t&&t-n.s<30&&n.v<.6)}remove(t){let e=this.cars.indexOf(t);e>=0&&this.cars.splice(e,1)}hitTest(t,e,n,i){for(let s of this.cars){let a,o,c,l;if(s.cross?(a=this.road.junction(s.cross.n)+s.cross.a,o=s.cross.u,c=s.wid,l=s.len):(a=s.s,o=s.d,c=s.len,l=s.wid),Math.abs(a-t)<(n+c)/2-.25&&Math.abs(o-e)<(i+l)/2-.15)return s}return null}_pick(){let t=Math.random(),e="sedan";for(let[n,i]of bw)if((t-=i)<0){e=n;break}return this.cars.filter(n=>n.type===e).length>=ba[e].max&&(e="sedan"),this.cars.filter(n=>n.type===e).length>=ba[e].max?null:e}_new(t,e){let n=ba[t],i=yw[t],s=(n.v[0]+Math.random()*(n.v[1]-n.v[0]))*hw*(t==="police"||t==="ambulance"?1:this.speedK);return Object.assign({type:t,len:n.len,wid:n.wid,vMax:s,v:s,color:i[Math.floor(Math.random()*i.length)],lat:0},e)}_free(t,e,n){for(let i of this.cars)if(!i.cross&&Math.abs(i.d-e)<1.8&&Math.abs(i.s-t)<n)return!1;return!0}update(t,e,n,i,s,a=4.6){if(!this.group.visible)return;this.uLamp.value=s,this.uTime.value+=t;let o=this.road,c=Ae.lanes;if(!this.filled){this.filled=!0;for(let b of[1,-1])for(let w of c)for(let C=e-Gf+Math.random()*40;C<e+Ml;C+=(El[0]+Math.random()*(El[1]-El[0]))/this.density){let _=b*w;if(Math.abs(C-e)<15&&Math.abs(_-n)<2)continue;let S=this._pick();S&&this.cars.push(this._new(S,{s:C,d:_,home:_,dir:b}))}}for(let b of[1,-1])for(let w of c){let C=b*w,_=b<0?e+Ml-10:i<10?e-Gf+10:e+Ml-10;if(Math.random()<t*.35&&this._free(_,C,El[0]/this.density+10)&&Math.abs(_-e)>30){let S=this._pick();if(S){let I=this._new(S,{s:_,d:C,home:C,dir:b});b>0&&_>e&&(I.vMax=Math.min(I.vMax,Math.max(4,i-2))),this.cars.push(I)}}}let l=o.junctionIndex(e-60),h=o.junctionIndex(e+330);for(let b=l;b<h;b++)for(let w of[1,-1]){let C=b*2+(w>0?1:0),_=this.crossTimers.get(C);if(_===void 0&&(_=Math.random()*4),_-=t,_<=0){_=3+Math.random()*6;let S=-w*j0,I=w>0?-1.75:1.75,F=this.cars.some(L=>L.cross&&L.cross.n===b&&L.cross.du===w&&Math.abs(L.cross.u-S)<14),N=this._pick();!F&&N&&N!=="bus"&&this.cars.push(this._new(N,{cross:{n:b,u:S,a:I,du:w}}))}this.crossTimers.set(C,_)}for(let b of this.crossTimers.keys()){let w=Math.floor(b/2);(w<l-1||w>h)&&this.crossTimers.delete(b)}let u={s:e,d:n,v:i,len:a,wid:1.9,dir:1,player:!0},f=this.cars.filter(b=>!b.cross),d=(b,w)=>{let C=null,_=1/0;for(let S of f.concat([u])){if(S===b||Math.abs(S.d-w)>(S.wid||1.8)/2+b.wid/2+.2)continue;let I=(S.s-b.s)*b.dir-(S.len+b.len)/2;I>-.5&&I<_&&(_=I,C=S)}return C?{e:C,gap:_}:null},g=(b,w)=>Math.max(0,b+.6*(w-(4+1*b)));for(let b of f){if(b.crashed){b.v=0,b.lat=0;continue}if(b.script){let F=(b.script.to-b.s)*b.dir,N=F<=.2?0:Math.min(b.script.v,Math.sqrt(2*3.5*F));b.v+=Math.max(-8*t,Math.min(3*t,N-b.v)),F<=.2&&(b.v=0,b.script.arrived=!0),b.s+=b.dir*Math.max(0,b.v)*t;let L=b.home-b.d;b.lat=Math.sign(L)*Math.min(1.3,Math.abs(L)*2),b.d+=b.lat*t;continue}let w=b.vMax,C=d(b,b.d);if(C&&(C.e.dir===b.dir||C.e.player?w=Math.min(w,g(C.e.v*(C.e.dir===b.dir?1:0),C.gap)):w=Math.min(w,Math.max(0,(C.gap-6)*.5)),!b.changing&&C.gap<35&&C.e.v<b.vMax-2.5&&(C.e.dir===b.dir||C.e.player))){let F=b.dir*(Math.abs(b.home)<3.5?c[1]:c[0]);!f.concat([u]).some(L=>L!==b&&Math.abs(L.d-F)<2.2&&(L.s-b.s)*b.dir>-18-(L.len+b.len)/2&&(L.s-b.s)*b.dir<25)&&(b.home=F,b.changing=!0)}let _=this.city.stopAhead(b.s+b.dir*b.len/2,b.dir,b.v);_<1/0&&(w=Math.min(w,Math.sqrt(6*Math.max(0,_-1.2)))),b.v+=Math.max(-7*t,Math.min(2.2*t,w-b.v)),b.v=Math.max(0,b.v),b.s+=b.dir*b.v*t;let S=b.home-b.d,I=Math.sign(S)*Math.min(1.3,Math.abs(S)*2);b.lat=I,b.d+=I*t,Math.abs(S)<.03&&(b.d=b.home,b.changing=!1,b.lat=0)}let v=Ae.hw;for(let b of this.cars){if(!b.cross)continue;if(b.crashed){b.v=0;continue}let w=b.cross,C=b.vMax;for(let F of this.cars){if(F===b||!F.cross||F.cross.n!==w.n||F.cross.du!==w.du)continue;let N=(F.cross.u-w.u)*w.du-(F.len+b.len)/2;N>-.5&&(C=Math.min(C,g(F.v,N)))}let _=-w.du*(v+4.2),S=w.u+w.du*b.len/2,I=(_-S)*w.du;if(I>-.5){let F=this.city._phase(w.n).cross;(F===2||F===1&&I>b.v*b.v/6)&&(C=Math.min(C,Math.sqrt(6*Math.max(0,I-.5))))}b.v+=Math.max(-7*t,Math.min(2.2*t,C-b.v)),b.v=Math.max(0,b.v),w.u+=w.du*b.v*t}this.cars=this.cars.filter(b=>b.crashed||b.script?!0:b.cross?Math.abs(b.cross.u)<=j0+2&&b.cross.n>=l-1:b.s>e-Gf-20&&b.s<e+Ml+40);let m=d(u,n);this.ctrl.maxV=m&&m.e.dir===1?g(m.e.v,m.gap):1/0;let p={};for(let b in this.meshes)p[b]=0;let x=this._m,y=this._q,M=this._v,E=this._p;for(let b of this.cars){let w=this.meshes[b.type],C=p[b.type]++;if(C>=ba[b.type].max)continue;let _;if(b.cross){let S=this._frame(b.cross.n),I=S.x+S.fx*b.cross.a+S.rx*b.cross.u,F=S.z+S.fz*b.cross.a+S.rz*b.cross.u;M.set(I,this.city.groundJ(S,b.cross.u)+.05,F),_=S.th+(b.cross.du>0?-Math.PI/2:Math.PI/2)}else o.at(b.s,E),M.set(E.x+Math.cos(E.th)*b.d,E.y+.05,E.z-Math.sin(E.th)*b.d),_=E.th+(b.dir<0?Math.PI:0)-b.dir*Math.atan2(b.lat,Math.max(3,b.v));y.setFromAxisAngle(this._up,_),x.compose(M,y,this._one),w.setMatrixAt(C,x),w.setColorAt(C,this._c.set(b.color)),(b.type==="police"||b.type==="ambulance")&&((b._pos||(b._pos=new T)).copy(M),b._yaw=_),w.honk.setX(C,b.honk?1:0)}for(let b in this.meshes){let w=this.meshes[b];w.count=Math.min(p[b],ba[b].max),w.instanceMatrix.needsUpdate=!0,w.instanceColor&&(w.instanceColor.needsUpdate=!0),w.honk.needsUpdate=!0}this._emUpdate(s)}setup(t,e,n){this.scene=t,this.softTex=e,this.camera=n}_emSetup(){if(this.em||!this.scene)return;let t=(e,n,i,s)=>{let a=new Pt,o=ur(a,this.softTex,{spots:n,glows:!0});fr(o,i);let c=[-1,1].map(l=>{let h=new An(new Mn({map:this.softTex,color:16719888,transparent:!0,opacity:0,depthWrite:!1,blending:tn,fog:!1}));return h.position.set(l*s[0],s[1],s[2]),h.scale.set(1.5,1.1,1),h.renderOrder=6,a.add(h),h});return a.visible=!1,this.scene.add(a),{kind:e,root:a,head:o,bars:c}};this.em={police:t("police",!0,{width:1.78,length:4.6,height:1.45},[.36,1.6,-.1]),ambulance:t("ambulance",!1,{width:1.9,length:5.4,height:2.25},[.42,2.45,-2.1])},this.emPoint=new Oi(16719888,0,30,1.6),this.scene.add(this.emPoint)}_emUpdate(t){if(!this.em)return;let e=Math.floor(this.uTime.value*2.2)%2,n=!1;for(let i of["police","ambulance"]){let s=this.em[i],a=this.cars.find(l=>l.type===i&&l._pos);if(s.root.visible=!!a,!a){Ns(s.head,s.root,null,0);continue}s.root.position.copy(a._pos),s.root.rotation.set(0,a._yaw,0),Ns(s.head,s.root,this.camera,Math.max(.6,t));let o=16718348,c=i==="police"?2051583:16777215;s.bars.forEach((l,h)=>{let u=h===e;l.material.color.setHex(h===0?o:c),l.material.opacity=u?1:.06}),n||(n=!0,this.emPoint.position.set(a._pos.x,a._pos.y+2.2,a._pos.z),this.emPoint.color.setHex(e===0?o:c),this.emPoint.intensity=9)}n||(this.emPoint.intensity=0)}_frame(t){this._fc||(this._fc=new Map);let e=this._fc.get(t);return e||(e=this.city._frame(this.road.junction(t)),this._fc.set(t,e),this._fc.size>40&&this._fc.delete(this._fc.keys().next().value)),e}};var Vf=260,Tl=90,_w=38,wo=96,Q0=["#e9e6df","#2b2d33","#6d7d8f","#8c2f2f","#c9a96e","#3d5f4b","#d7c6b0","#5a4a6e","#b8c4d6","#1f3552"],Mw={officer:"#1d2a48",medic:"#e9eef2",driver:"#121214"};function Ew(){let r=[],t=[],e=[],n=[],i=[],s=[],a=(d,g,v,m,p,x,y,M,E=0,b=0)=>{let w=new re(g-d,m-v,x-p).translate((d+g)/2,(v+m)/2,(p+x)/2).toNonIndexed(),C=w.attributes.position.array,_=w.attributes.normal.array;for(let S=0;S<C.length/3;S++)r.push(C[S*3],C[S*3+1],C[S*3+2]),t.push(_[S*3],_[S*3+1],_[S*3+2]),e.push(...y),n.push(M),i.push(E),s.push(b)},o=[.16,.2,.3],c=[.07,.07,.08],l=[.78,.6,.48],h=[.06,.05,.05],u=[1,1,1];for(let d of[-1,1])a(d*.04,d*.17,.08,.86,-.08,.08,o,0,d,.86),a(d*.04,d*.17,0,.08,-.13,.09,c,0,d,.86),a(d*.21,d*.31,.82,1.42,-.06,.06,u,1,-d,1.42),a(d*.215,d*.305,.74,.82,-.05,.05,l,0,-d,1.42);a(-.21,.21,.84,1.44,-.11,.11,u,1),a(-.06,.06,1.44,1.5,-.05,.05,l,0),a(-.1,.1,1.5,1.72,-.11,.1,l,0),a(-.11,.11,1.66,1.76,-.11,.12,h,0),a(-.11,.11,1.52,1.68,.07,.12,h,0);let f=new At;return f.setAttribute("position",new yt(r,3)),f.setAttribute("normal",new yt(t,3)),f.setAttribute("color",new yt(e,3)),f.setAttribute("aTint",new yt(n,1)),f.setAttribute("aSwing",new yt(i,1)),f.setAttribute("aPivot",new yt(s,1)),f}var Sl=class{constructor(t,e,n){this.road=e,this.city=n,this.group=new Pt,this.group.visible=!1,t.add(this.group);let i=Ew();this.phase=new Ke(new Float32Array(wo*2),2).setUsage(zn),i.setAttribute("aWalk",this.phase);let s=new qt({vertexColors:!0,roughness:.85});s.onBeforeCompile=a=>{a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
attribute float aTint, aSwing, aPivot;
attribute vec2 aWalk;`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
          float pa = sin(aWalk.x) * 0.55 * aWalk.y * aSwing, pc = cos(pa), ps = sin(pa);
          objectNormal = vec3(objectNormal.x, objectNormal.y * pc - objectNormal.z * ps, objectNormal.y * ps + objectNormal.z * pc);`).replace("#include <begin_vertex>",`#include <begin_vertex>
          transformed.y -= aPivot;
          transformed = vec3(transformed.x, transformed.y * pc - transformed.z * ps, transformed.y * ps + transformed.z * pc);
          transformed.y += aPivot;`).replace("#include <color_vertex>",`vColor = vec3(1.0);
          vColor *= color;
          #ifdef USE_INSTANCING_COLOR
            vColor = mix(vColor, vColor * instanceColor.xyz, aTint);
          #endif`)},s.customProgramCacheKey=()=>"city-person",de(s),this.mesh=new _e(i,s,wo),this.mesh.instanceColor=new Ke(new Float32Array(wo*3),3),this.mesh.count=0,this.mesh.castShadow=!0,this.mesh.frustumCulled=!1,this.group.add(this.mesh),this.peds=[],this.timers=new Map,this._p={},this._m=new bt,this._q=new Vt,this._e=new oi(0,0,0,"YXZ"),this._v=new T,this._one=new T(1,1,1),this._c=new et,this.filled=!1,this.walkers=_w}set visible(t){this.group.visible=t,t||(this.peds.length=0,this.filled=!1,this.timers.clear())}get visible(){return this.group.visible}_walker(t,e,n){let i=Ae.hw;return{s:t,u:e*(i+1+Math.random()*2.6),vs:0,vu:0,dir:n,speed:1.1+Math.random()*.5,mode:"walk",ph:Math.random()*6.28,color:Q0[Math.floor(Math.random()*Q0.length)]}}spawn(t,e,n){let i={s:e,u:n,vs:0,vu:0,speed:1.5,mode:"script",ph:0,color:Mw[t]||"#888888",target:null,kind:t};return this.peds.push(i),i}remove(t){let e=this.peds.indexOf(t);e>=0&&this.peds.splice(e,1)}goTo(t,e,n){t.target=[e,n]}arrived(t){return!t.target}hitTest(t,e,n,i){for(let s of this.peds)if(s.mode!=="fallen"&&s.mode!=="script"&&Math.abs(s.s-t)<n/2+.25&&Math.abs(s.u-e)<i/2+.25)return s;return null}crossingNear(t,e){for(let n of this.peds)if(n.mode==="cross"&&Math.abs(n.s-t)<3&&Math.abs(n.u-e)<3.5)return!0;return!1}update(t,e){if(!this.group.visible)return;let n=this.road,i=this.city,s=Ae.hw;if(!this.filled){this.filled=!0;for(let g=0;g<this.walkers;g++)this.peds.push(this._walker(e-Tl+Math.random()*(Vf+Tl),Math.random()<.5?-1:1,Math.random()<.5?-1:1))}if(this.peds.filter(g=>g.mode==="walk"||g.mode==="wait").length<this.walkers&&Math.random()<t*2){let g=Math.random()<.5?-1:1,v=g>0?e-Tl+5:e+Vf-5;this.peds.push(this._walker(v+(Math.random()-.5)*20,Math.random()<.5?-1:1,g))}let o=n.junctionIndex(e-40),c=n.junctionIndex(e+220);for(let g=o;g<c;g++){let v=this.timers.get(g)??Math.random()*3;if(v-=t,v<=0&&this.peds.length<wo-8){v=4+Math.random()*7;let m=n.junction(g),p=Math.random()<.5?-1:1,x=Math.random()<.5?-1:1,y=this._walker(m+p*(6.9+Math.random()*3),x,1);y.u=x*(s+.75+Math.random()*.5),y.mode="wait",y.n=g,y.side=x,y.crossing=!0,this.peds.push(y)}this.timers.set(g,v)}for(let g of this.timers.keys())(g<o-1||g>c)&&this.timers.delete(g);for(let g of this.peds){let v=0,m=0;if(g.mode==="script"){if(g.target){let x=g.target[0]-g.s,y=g.target[1]-g.u,M=Math.hypot(x,y);M<.15?g.target=null:(v=x/M*g.speed,m=y/M*g.speed)}}else if(g.mode!=="fallen")if(g.crossing){let x=i._phase(g.n),y=42-x.t;g.mode==="wait"&&x.cross===0&&y>9&&(g.mode="cross"),g.mode==="cross"&&(m=-g.side*g.speed*1.15,g.u*g.side<-(s+.9)&&(g.crossing=!1,g.mode="walk",g.u=-g.side*(s+1.2+Math.random()*2),g.dir=Math.random()<.5?-1:1))}else{let x=g.dir>0?n.junctionIndex(g.s-4):n.junctionIndex(g.s+4)-1,y=n.junction(x),M=y-g.dir*(Ae.side+.3),E=(M-g.s)*g.dir,b=E>0&&E<1.2&&i._phase(x).main!==0;g.mode=b?"wait":"walk",b||(v=g.dir*g.speed)}g.s+=v*t,g.u+=m*t;let p=Math.hypot(v,m);g.ph+=p*t*5.2,g.moving=p>.05?1:0,p>.05&&(g.head=Math.atan2(m,v))}this.peds=this.peds.filter(g=>g.mode==="script"||g.mode==="fallen"||g.s>e-Tl-10&&g.s<e+Vf+10&&(!g.crossing||g.n>=o-1));let l=this._m,h=this._q,u=this._v,f=this._p,d=0;for(let g of this.peds){if(d>=wo)break;n.at(g.s,f);let v=Math.abs(g.u)>Ae.hw&&n.nearJunction(g.s)!==null&&Math.abs(g.s-n.nearJunction(g.s))>Ae.side,m=f.y+(v?.2:.05),p=Math.cos(f.th),x=-Math.sin(f.th),y=-Math.sin(f.th),M=-Math.cos(f.th),E=g.head??(g.mode==="wait"&&g.crossing?g.side>0?-Math.PI/2:Math.PI/2:0),b=y*Math.cos(E)+p*Math.sin(E),w=M*Math.cos(E)+x*Math.sin(E),C=Math.atan2(-b,-w);g.mode==="fallen"?(h.setFromEuler(this._e.set(-Math.PI/2,C,0)),u.set(f.x+p*g.u,m+.12,f.z+x*g.u)):(h.setFromEuler(this._e.set(0,C,0)),u.set(f.x+p*g.u,m,f.z+x*g.u)),l.compose(u,h,this._one),this.mesh.setMatrixAt(d,l),this.mesh.setColorAt(d,this._c.set(g.color)),this.phase.setXY(d,g.ph,g.moving),d++}this.mesh.count=d,this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor.needsUpdate=!0,this.phase.needsUpdate=!0}};var Al=class{constructor(t,e,n){this.traffic=t,this.people=e,this.hooks=n,this.active=!1}start(t,e,n,i){this.active=!0,this.t=0,this.s=t,this.d=e,this.dim=n,this.victim=i,this.step="impact",this.police=this.amb=this.officer=this.driver=null,this.medics=[],i.car&&(i.car.crashed=!0,i.car.v=0),i.ped&&(i.ped.mode="fallen",i.ped.crossing=!1),this.hooks.toast("💥 Va chạm! Đang gọi cảnh sát và xe cấp cứu…",!0)}_victimPos(){let t=this.victim;if(t.ped)return[t.ped.s,t.ped.u];let e=t.car;return e.cross?[this.traffic.road.junction(e.cross.n)+e.cross.a,e.cross.u]:[e.s,e.d]}_sirens(){for(let[t,e]of[["police",this.police],["ambulance",this.amb]]){let n=0,i=0;if(e&&this.traffic.cars.includes(e)&&e.v>.5){let s=Math.abs(e.s-this.s);n=Math.max(0,1-s/260)**1.5*.85+.15*(s<400?1:0),i=(e.d-this.d)/8}this.hooks.siren?.(t,n,i)}}update(t){if(!this.active)return;this.t+=t,this._sirens();let e=this.traffic,n=this.people,i=this.dim.length,s=this.d>=0?Math.abs(this.d)<3.5?1.75:5.25:Math.abs(this.d)<3.5?-1.75:-5.25;if(this.step==="impact"&&this.t>1.2){this.step="coming",this.police=e.spawnScripted("police",this.s-130,s,1,this.s-i/2-2.3-2.3,15);let[o,c]=this._victimPos();this.amb=e.spawnScripted("ambulance",o+140,-1.75,-1,o+6,15),this.hooks.toast("🚓🚑 Cảnh sát và xe cấp cứu đang tới…",!0)}let a=this.d-1.25;if(this.step==="coming"&&this.police.script.arrived&&(this.step="officer",this.officer=n.spawn("officer",this.police.s+.6,this.police.d-1.15),n.goTo(this.officer,this.s+.3,a-.4)),this.step==="officer"&&n.arrived(this.officer)&&(this.step="talk",this.tTalk=this.t),this.step==="talk"&&this.t-this.tTalk>2){this.step="arrest",this.hooks.driverHidden(!0),this.driver=n.spawn("driver",this.s+.4,a);let o=this.police.s+.2;n.goTo(this.driver,o,this.police.d-1.1),n.goTo(this.officer,o-.9,this.police.d-1.3),this.hooks.toast("👮 Cảnh sát đưa chú lên xe…",!0)}if(this.step==="arrest"&&n.arrived(this.driver)&&n.arrived(this.officer)&&(this.step="leaving",n.remove(this.driver),n.remove(this.officer),this.police.script=null,this.police.home=s>3.5?1.75:s>0?5.25:s,this.police.changing=!0,this.tLeave=this.t),this.amb?.script?.arrived&&!this.medics.length&&!this.ambDone){let[o,c]=this._victimPos();for(let l of[-1,1]){let h=n.spawn("medic",this.amb.s+this.amb.dir*2.6*-1,this.amb.d+l*.5);n.goTo(h,o+l*.7,c+.8),this.medics.push(h)}}if(this.medics.length&&!this.ambDone&&this.medics.every(o=>n.arrived(o))&&(this.tMed??(this.tMed=this.t),this.t-this.tMed>4)){this.victim.ped&&(n.remove(this.victim.ped),this.victim.ped=null,this.victimGone=!0);for(let o of this.medics)n.goTo(o,this.amb.s-this.amb.dir*2.6,this.amb.d);this.ambDone=!0}if(this.ambDone&&this.medics.length&&this.medics.every(o=>n.arrived(o))){for(let o of this.medics)n.remove(o);this.medics=[],this.amb.script=null}this.step==="leaving"&&this.t-this.tLeave>4&&!this.fading&&(this.fading=this.t,this.hooks.fade(!0,"🚓 Chú đã bị đưa về đồn. Bắt đầu lại — lái cẩn thận nhé!")),this.fading&&this.t-this.fading>3&&this.finish()}finish(){let t=this.traffic,e=this.people;this.victim?.car&&t.remove(this.victim.car),this.victim?.ped&&e.remove(this.victim.ped);for(let n of[this.police,this.amb])n&&(n.script=null,n.crashed&&(n.crashed=!1),t.remove(n));for(let n of[this.officer,this.driver,...this.medics||[]])n&&e.remove(n);this.active=!1,this.fading=null,this.ambDone=!1,this.tMed=null,this.medics=[],this.hooks.siren?.("police",0),this.hooks.siren?.("ambulance",0),this.hooks.driverHidden(!1),this.hooks.fade(!1),this.hooks.end()}};function Os(r,t=!1){let e=r[0].index!==null,n=new Set(Object.keys(r[0].attributes)),i=new Set(Object.keys(r[0].morphAttributes)),s={},a={},o=r[0].morphTargetsRelative,c=new At,l=0;for(let h=0;h<r.length;++h){let u=r[h],f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;s[d]===void 0&&(s[d]=[]),s[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,h),l+=d}}if(e){let h=0,u=[];for(let f=0;f<r.length;++f){let d=r[f].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+h);h+=r[f].attributes.position.count}c.setIndex(u)}for(let h in s){let u=$0(s[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let v=0;v<a[h].length;++v)d.push(a[h][v][f]);let g=$0(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function $0(r){let t,e,n,i=-1,s=0;for(let l=0;l<r.length;++l){let h=r[l];if(h.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.array.length}let a=new t(s),o=0;for(let l=0;l<r.length;++l)a.set(r[l].array,o),o+=r[l].array.length;let c=new Et(a,e,n);return i!==void 0&&(c.gpuType=i),c}function tg(r,t=1e-4){t=Math.max(t,Number.EPSILON);let e={},n=r.getIndex(),i=r.getAttribute("position"),s=n?n.count:i.count,a=0,o=Object.keys(r.attributes),c={},l={},h=[],u=["getX","getY","getZ","getW"],f=["setX","setY","setZ","setW"];for(let x=0,y=o.length;x<y;x++){let M=o[x],E=r.attributes[M];c[M]=new Et(new E.array.constructor(E.count*E.itemSize),E.itemSize,E.normalized);let b=r.morphAttributes[M];b&&(l[M]=new Et(new b.array.constructor(b.count*b.itemSize),b.itemSize,b.normalized))}let d=t*.5,g=Math.log10(1/t),v=Math.pow(10,g),m=d*v;for(let x=0;x<s;x++){let y=n?n.getX(x):x,M="";for(let E=0,b=o.length;E<b;E++){let w=o[E],C=r.getAttribute(w),_=C.itemSize;for(let S=0;S<_;S++)M+=`${~~(C[u[S]](y)*v+m)},`}if(M in e)h.push(e[M]);else{for(let E=0,b=o.length;E<b;E++){let w=o[E],C=r.getAttribute(w),_=r.morphAttributes[w],S=C.itemSize,I=c[w],F=l[w];for(let N=0;N<S;N++){let L=u[N],P=f[N];if(I[P](a,C[L](y)),_)for(let D=0,U=_.length;D<U;D++)F[D][P](a,_[D][L](y))}}e[M]=a,h.push(a),a++}}let p=r.clone();for(let x in r.attributes){let y=c[x];if(p.setAttribute(x,new Et(y.array.slice(0,a*y.itemSize),y.itemSize,y.normalized)),x in l)for(let M=0;M<l[x].length;M++){let E=l[x][M];p.morphAttributes[x][M]=new Et(E.array.slice(0,a*E.itemSize),E.itemSize,E.normalized)}}return p.setIndex(h),p}function Wf(r,t){if(t===_0)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(t===bo||t===hl){let e=r.getIndex();if(e===null){let a=[],o=r.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);r.setIndex(a),e=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}let n=e.count-2,i=[];if(t===bo)for(let a=1;a<=n;a++)i.push(e.getX(0)),i.push(e.getX(a)),i.push(e.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(e.getX(a)),i.push(e.getX(a+1)),i.push(e.getX(a+2))):(i.push(e.getX(a+2)),i.push(e.getX(a+1)),i.push(e.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),r}var{chunkLen:Ea,step:Rl}=Te,Bi=Te.halfWidth,eg=7,qf=1;var ww=r=>r.index?r.toNonIndexed():r;function Tw(r){return Os(r.map(t=>{let e=ww(t);return e.deleteAttribute("uv"),e}))}function ng(r,t){let e=[],n=[],i=[],s=[],[a,o,c]=r.center,l=(d,g,v,m,p)=>{let x=new T(d-a,(g-o)*.7,v-c).normalize().add(new T(0,.35,0)).normalize();e.push(d,g,v),n.push(x.x,x.y,x.z),i.push(m,p)};for(let d of r.yaws){let g=Math.cos(d),v=Math.sin(d),m=e.length/3,p=r.w/2,x=r.h/2;l(a-p*g,o-x,c-p*v,r.u0,0),l(a+p*g,o-x,c+p*v,r.u1,0),l(a+p*g,o+x,c+p*v,r.u1,1),l(a-p*g,o+x,c-p*v,r.u0,1),s.push(m,m+1,m+2,m,m+2,m+3)}if(r.top){let d=e.length/3,g=r.top/2,v=r.topY;l(a-g,v,c-g,r.u0,0),l(a+g,v,c-g,r.u1,0),l(a+g,v,c+g,r.u1,1),l(a-g,v,c+g,r.u0,1),s.push(d,d+1,d+2,d,d+2,d+3)}let h=new At;h.setAttribute("position",new yt(e,3)),h.setAttribute("normal",new yt(n,3)),h.setAttribute("uv",new yt(i,2)),h.setIndex(s);let u=new Xe(t.r0,t.r1,t.h,6).translate(0,t.h/2,0),f=u.attributes.uv;for(let d=0;d<f.count;d++)f.setXY(d,.94,.88);return Os([u,h])}function ig(){return ng({center:[0,4.7,0],w:5.4,h:5,yaws:[0,Math.PI/3,2*Math.PI/3],u0:0,u1:.5,top:4.4,topY:5},{r0:.16,r1:.26,h:3})}function sg(){return ng({center:[0,5.1,0],w:3.8,h:8.2,yaws:[0,Math.PI/3,2*Math.PI/3],u0:.5,u1:.75},{r0:.13,r1:.22,h:1.8})}var To=11.1,Sw=To-.22,Xf=3,jf=Object.freeze({intensity:28,distance:118,angle:1.2,penumbra:.8,decay:.6,glowOpacity:.9,glowSize:9,color:"#ffc98a"});function Aw(){return Tw([new Xe(.08,.13,To,6).translate(0,To/2,0),new re(1.9,.08,.1).translate(-.9,To,0),new re(.5,.1,.22).translate(-1.75,To-.07,0)])}var Rw=`#include <common>
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
}`,Cw=`
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
`,Pw=`
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
}`,Cl=class{constructor(t,e,n){this.scene=t,this.road=e,this.chunks=new Map,this.queue=[],this.tmp={},this.map="reed",this.lastS=150,this.roadTex=Ff(n),this.cityTex=Ff(n,!0),this.roadMat=new qt({map:this.roadTex,roughness:.9,metalness:0,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),this.roadU={uWet:{value:0},uPuddle:{value:0},uRain:{value:0},uRainT:{value:0},uReflTex:{value:null},uReflMat:{value:new bt},uReflOn:{value:0},uPlaneY:{value:0},uSunHide:{value:0},uDirtTex:{value:hr("dirt",n)},uGrassCol:{value:new et("#5c6b34")}},this.roadMat.onBeforeCompile=s=>{Object.assign(s.uniforms,this.roadU),s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vRW;
attribute float aDirt;
varying float vDirt;`).replace("#include <project_vertex>",`#include <project_vertex>
vRW = (modelMatrix * vec4(transformed, 1.0)).xyz;
vDirt = aDirt;`),s.fragmentShader=s.fragmentShader.replace("#include <common>",Rw).replace("#include <map_fragment>",`#include <map_fragment>
`+Cw).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
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
reflectedLight.directSpecular *= 1.0 - uSunHide * puddle;`).replace("#include <opaque_fragment>",Pw+`
#include <opaque_fragment>`)},this.railMat=new qt({color:12172996,roughness:.35,metalness:.75,side:pe}),this.poleMat=new qt({color:4869973,roughness:.6,metalness:.4}),this.postMat=new qt({color:15263968,roughness:.7}),this.bulbMat=new Ye({color:16767392,toneMapped:!1});let i=ga();this.glowMat=new wi({map:i,color:16763274,size:9,transparent:!0,opacity:0,depthWrite:!1,blending:tn,sizeAttenuation:!0});for(let s of[this.roadMat,this.poleMat,this.postMat,this.bulbMat,this.glowMat,this.railMat])de(s);this.lampOn=0,this.lampTune={...jf},this.lampLights=Array.from({length:Xf},()=>{let s=new Fs(16763274,0,80,1.2,.8,.6);return this.scene.add(s,s.target),s}),this._lampList=[],this.lampGeo=Aw(),this.railPostGeo=new re(.12,.8,.12).translate(0,.4,0),this.postGeo=new re(.12,.95,.12).translate(0,.475,0),this.bulbGeo=new Ti(.2,8,6)}setMap(t){this.map=t,Bi=Te.halfWidth,this.roadMat.map=t==="city"?this.cityTex:this.roadTex;for(let e of this.chunks.values())this._dispose(e);this.chunks.clear(),this.queue.length=0,this.prime(this.lastS)}update(t,e=2){this.lastS=t;let n=Math.floor(t/Ea);for(let i=Math.max(0,n-qf);i<=n+eg;i++)!this.chunks.has(i)&&!this.queue.includes(i)&&this.queue.push(i);this.queue.sort((i,s)=>i-s);for(let i=0;i<e&&this.queue.length;i++){let s=this.queue.shift();s>=n-qf&&s<=n+eg&&this._build(s)}for(let[i,s]of this.chunks)i<n-qf&&(this._dispose(s),this.chunks.delete(i))}prime(t){this.update(t,999)}apply(t){let e=t.lamps,n=new et(9079430).lerp(new et(this.lampTune.color),e);this.bulbMat.color.copy(n).multiplyScalar(.6+1.6*e),this.lampOn=e,this.glowMat.opacity=e*this.lampTune.glowOpacity,this.glowMat.size=this.lampTune.glowSize,this.glowMat.color.set(this.lampTune.color),this.roadMat.roughness=.92-.3*t.wet,this.roadMat.envMapIntensity=.38+.3*t.wet;let i=(1-.4*t.wet)*(1-.25*t.dark);this.roadMat.color.setRGB(i,i,i);let s=this.roadU;s.uWet.value=t.wet,s.uPuddle.value=t.wet,s.uRain.value=t.rain,s.uSunHide.value=Math.min(1,t.overcast*1.2+t.rain)}updateLights(t){let e=this._lampList;e.length=0;for(let i of this.chunks.values())for(let s of i.userData.lamps||[]){let[a]=s;e.push({L:s,d:Math.hypot(a[0]-t.x,a[1]-t.y,a[2]-t.z)})}e.sort((i,s)=>i.d-s.d);let n=e.length>Xf?e[Xf].d:1/0;this.lampLights.forEach((i,s)=>{let a=e[s];if(!a||this.lampOn<=0){i.intensity=0;return}let o=n===1/0?1:Math.min(1,Math.max(0,(n-a.d)/(.3*n))),[c,l]=a.L;i.position.set(c[0],c[1],c[2]),i.target.position.set(l[0],l[1],l[2]),i.target.updateMatrixWorld();let h=this.lampTune;i.color.set(h.color),i.distance=h.distance,i.angle=h.angle,i.penumbra=h.penumbra,i.decay=h.decay,i.intensity=h.intensity*this.lampOn*o*o*(3-2*o)})}hitLamp(t,e,n,i,s=48){let a=new T;for(let o of this.chunks.values())for(let[c]of o.userData.lamps||[]){if(a.set(c[0],c[1],c[2]).project(t),a.z<-1||a.z>1)continue;let l=i.left+(a.x+1)*i.width*.5,h=i.top+(1-a.y)*i.height*.5;if(Math.hypot(e-l,n-h)<=s)return!0}return!1}setReflection(t,e){let n=this.roadU;n.uRainT.value=e,n.uReflOn.value=t.active?1:0,t.active&&(n.uReflTex.value=t.rt.texture,n.uReflMat.value.copy(t.texMatrix),n.uPlaneY.value=t.planeY)}_build(t){let e=new Pt,n=this.road,i=t*Ea,s=this.tmp,a=Ea/Rl,o=new Float32Array((a+1)*6),c=new Float32Array((a+1)*4),l=new Float32Array((a+1)*6),h=new Float32Array((a+1)*2),u=[];for(let P=0;P<=a;P++){let D=i+P*Rl;n.at(D,s);let U=Math.cos(s.th),O=-Math.sin(s.th),G=s.y+.05;o.set([s.x-U*Bi,G,s.z-O*Bi,s.x+U*Bi,G,s.z+O*Bi],P*6),c.set([0,D/12,1,D/12],P*4),l.set([0,1,0,0,1,0],P*6);let j=n.dirtAt(D);if(h[P*2]=h[P*2+1]=j,P<a){let J=P*2;u.push(J,J+1,J+2,J+1,J+3,J+2)}}let f=new At;f.setAttribute("position",new Et(o,3)),f.setAttribute("normal",new Et(l,3)),f.setAttribute("uv",new Et(c,2)),f.setAttribute("aDirt",new Et(h,1)),f.setIndex(u),f.computeVertexNormals();let d=new Nt(f,this.roadMat);d.receiveShadow=!0,d.layers.set(3),e.add(d),e.userData.own=[f];let g=[];for(let P=i;P<i+Ea&&this.map!=="city";P+=12)if(!(n.dirtAt(P)>.05)){n.at(P,s);for(let D of this.map==="mountain"?[-1]:[-1,1])g.push([s.x+Math.cos(s.th)*(Bi+.7)*D,s.y,s.z-Math.sin(s.th)*(Bi+.7)*D])}let v=new _e(this.postGeo,this.postMat,g.length),m=new bt;if(g.forEach(([P,D,U],O)=>{m.makeTranslation(P,D,U),v.setMatrixAt(O,m)}),e.add(v),this.map==="mountain"){let P=Ea/Rl,D=new Float32Array((P+1)*6),U=[],O=[];for(let it=0;it<=P;it++){let z=i+it*Rl;n.at(z,s);let $=s.x+Math.cos(s.th)*(Bi+.55),lt=s.z-Math.sin(s.th)*(Bi+.55);if(D.set([$,s.y+.5,lt,$,s.y+.82,lt],it*6),it<P){let ht=it*2;U.push(ht,ht+2,ht+1,ht+1,ht+2,ht+3)}it%2===0&&O.push([$,s.y,lt])}let G=new At;G.setAttribute("position",new Et(D,3)),G.setIndex(U),G.computeVertexNormals();let j=new Nt(G,this.railMat);j.castShadow=!0,e.add(j),e.userData.own.push(G);let J=new _e(this.railPostGeo,this.poleMat,O.length);O.forEach(([it,z,$],lt)=>{m.makeTranslation(it,z,$),J.setMatrixAt(lt,m)}),e.add(J)}let p=[],x=[],y=[],M=this.map==="city",E=M?4:this.map==="reed"?2:1,b=Ea/E;for(let P=0;P<E;P++){let D=i+P*b+(M?21:6);if(n.dirtAt(D)>.05)continue;if(M){let $=n.nearJunction(D);if($!==null&&Math.abs(D-$)<16)continue}n.at(D,s);let U=this.map==="mountain"?-1:Math.round(D/b)%2?1:-1,O=Bi+(M?.9:1.4),G=s.x+Math.cos(s.th)*O*U,j=s.z-Math.sin(s.th)*O*U,J=s.th+(U===1?0:Math.PI);p.push([G,s.y,j,J]);let it=-Math.cos(J)*1.75,z=Math.sin(J)*1.75;x.push([G+it,s.y+Sw,j+z]),y.push([G+it*4.5,s.y,j+z*4.5])}let w=new _e(this.lampGeo,this.poleMat,p.length),C=new Vt,_=new T(0,1,0),S=new T(1,1,1),I=new T;p.forEach(([P,D,U,O],G)=>{C.setFromAxisAngle(_,O),m.compose(I.set(P,D,U),C,S),w.setMatrixAt(G,m)}),w.castShadow=!0,e.add(w);let F=new _e(this.bulbGeo,this.bulbMat,x.length);x.forEach(([P,D,U],O)=>{m.makeTranslation(P,D,U),F.setMatrixAt(O,m)}),e.add(F);let N=new At;N.setAttribute("position",new yt(x.flat(),3));let L=new gn(N,this.glowMat);L.frustumCulled=!1,L.renderOrder=3,e.add(L),e.userData.own.push(N),e.userData.lamps=x.map((P,D)=>[P,y[D]]),this.scene.add(e),this.chunks.set(t,e)}_dispose(t){this.scene.remove(t),t.userData.own.forEach(e=>e.dispose()),t.traverse(e=>{e.isInstancedMesh&&e.dispose()})}};var Gs=class extends us{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new td(e)}),this.register(function(e){return new ld(e)}),this.register(function(e){return new hd(e)}),this.register(function(e){return new ud(e)}),this.register(function(e){return new nd(e)}),this.register(function(e){return new id(e)}),this.register(function(e){return new sd(e)}),this.register(function(e){return new rd(e)}),this.register(function(e){return new $f(e)}),this.register(function(e){return new ad(e)}),this.register(function(e){return new ed(e)}),this.register(function(e){return new cd(e)}),this.register(function(e){return new od(e)}),this.register(function(e){return new Zf(e)}),this.register(function(e){return new fd(e)}),this.register(function(e){return new dd(e)})}load(t,e,n,i){let s=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=Hs.extractUrlBase(t);a=Hs.resolveURL(l,this.path)}else a=Hs.extractUrlBase(t);this.manager.itemStart(t);let o=function(l){i?i(l):console.error(l),s.manager.itemError(t),s.manager.itemEnd(t)},c=new vo(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(t,function(l){try{s.parse(l,a,function(h){e(h),s.manager.itemEnd(t)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(t){return this.dracoLoader=t,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,i){let s,a={},o={},c=new TextDecoder;if(typeof t=="string")s=JSON.parse(t);else if(t instanceof ArrayBuffer)if(c.decode(new Uint8Array(t,0,4))===lg){try{a[fe.KHR_BINARY_GLTF]=new pd(t)}catch(u){i&&i(u);return}s=JSON.parse(a[fe.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(t));else s=t;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new _d(s,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){let u=s.extensionsUsed[h],f=s.extensionsRequired||[];switch(u){case fe.KHR_MATERIALS_UNLIT:a[u]=new Qf;break;case fe.KHR_DRACO_MESH_COMPRESSION:a[u]=new md(s,this.dracoLoader);break;case fe.KHR_TEXTURE_TRANSFORM:a[u]=new gd;break;case fe.KHR_MESH_QUANTIZATION:a[u]=new vd;break;default:f.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,i)}parseAsync(t,e){let n=this;return new Promise(function(i,s){n.parse(t,e,i,s)})}};function Lw(){let r={};return{get:function(t){return r[t]},add:function(t,e){r[t]=e},remove:function(t){delete r[t]},removeAll:function(){r={}}}}var fe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Zf=class{constructor(t){this.parser=t,this.name=fe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let t=this.parser,e=this.parser.json.nodes||[];for(let n=0,i=e.length;n<i;n++){let s=e[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(t){let e=this.parser,n="light:"+t,i=e.cache.get(n);if(i)return i;let s=e.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[t],l,h=new et(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],rn);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new da(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Oi(h),l.distance=u;break;case"spot":l=new Fs(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Bs(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=e.createUniqueName(c.name||"light_"+t),i=Promise.resolve(l),e.cache.add(n,i),i}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){let e=this,n=this.parser,s=n.json.nodes[t],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(e.cache,o,c)})}},Qf=class{constructor(){this.name=fe.KHR_MATERIALS_UNLIT}getMaterialType(){return Ye}extendParams(t,e,n){let i=[];t.color=new et(1,1,1),t.opacity=1;let s=e.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let a=s.baseColorFactor;t.color.setRGB(a[0],a[1],a[2],rn),t.opacity=a[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(t,"map",s.baseColorTexture,ue))}return Promise.all(i)}},$f=class{constructor(t){this.parser=t,this.name=fe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){let i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(e.emissiveIntensity=s),Promise.resolve()}},td=class{constructor(t){this.parser=t,this.name=fe.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:li}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(e.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(n.assignTexture(e,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(e,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(e,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new at(o,o)}return Promise.all(s)}},ed=class{constructor(t){this.parser=t,this.name=fe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:li}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(e.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(n.assignTexture(e,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(e.iridescenceIOR=a.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(e,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}},nd=class{constructor(t){this.parser=t,this.name=fe.KHR_MATERIALS_SHEEN}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:li}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[];e.sheenColor=new et(0,0,0),e.sheenRoughness=0,e.sheen=1;let a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;e.sheenColor.setRGB(o[0],o[1],o[2],rn)}return a.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(n.assignTexture(e,"sheenColorMap",a.sheenColorTexture,ue)),a.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(e,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}},id=class{constructor(t){this.parser=t,this.name=fe.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:li}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(e.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(n.assignTexture(e,"transmissionMap",a.transmissionTexture)),Promise.all(s)}},sd=class{constructor(t){this.parser=t,this.name=fe.KHR_MATERIALS_VOLUME}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:li}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];e.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(n.assignTexture(e,"thicknessMap",a.thicknessTexture)),e.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return e.attenuationColor=new et().setRGB(o[0],o[1],o[2],rn),Promise.all(s)}},rd=class{constructor(t){this.parser=t,this.name=fe.KHR_MATERIALS_IOR}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:li}extendMaterialParams(t,e){let i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=i.extensions[this.name];return e.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}},ad=class{constructor(t){this.parser=t,this.name=fe.KHR_MATERIALS_SPECULAR}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:li}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];e.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(n.assignTexture(e,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return e.specularColor=new et().setRGB(o[0],o[1],o[2],rn),a.specularColorTexture!==void 0&&s.push(n.assignTexture(e,"specularColorMap",a.specularColorTexture,ue)),Promise.all(s)}},od=class{constructor(t){this.parser=t,this.name=fe.EXT_MATERIALS_BUMP}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:li}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];return e.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&s.push(n.assignTexture(e,"bumpMap",a.bumpTexture)),Promise.all(s)}},cd=class{constructor(t){this.parser=t,this.name=fe.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:li}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(e.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(e.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&s.push(n.assignTexture(e,"anisotropyMap",a.anisotropyTexture)),Promise.all(s)}},ld=class{constructor(t){this.parser=t,this.name=fe.KHR_TEXTURE_BASISU}loadTexture(t){let e=this.parser,n=e.json,i=n.textures[t];if(!i.extensions||!i.extensions[this.name])return null;let s=i.extensions[this.name],a=e.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,s.source,a)}},hd=class{constructor(t){this.parser=t,this.name=fe.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){let e=this.name,n=this.parser,i=n.json,s=i.textures[t];if(!s.extensions||!s.extensions[e])return null;let a=s.extensions[e],o=i.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(t,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){let e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}},ud=class{constructor(t){this.parser=t,this.name=fe.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){let e=this.name,n=this.parser,i=n.json,s=i.textures[t];if(!s.extensions||!s.extensions[e])return null;let a=s.extensions[e],o=i.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(t,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){let e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}},fd=class{constructor(t){this.name=fe.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){let e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){let c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,f=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,f,i.mode,i.filter).then(function(d){return d.buffer}):a.ready.then(function(){let d=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(d),h,u,f,i.mode,i.filter),d})})}else return null}},dd=class{constructor(t){this.name=fe.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){let e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=e.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==ui.TRIANGLES&&l.mode!==ui.TRIANGLE_STRIP&&l.mode!==ui.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(t)),Promise.all(o).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],f=l[0].count,d=[];for(let g of u){let v=new bt,m=new T,p=new Vt,x=new T(1,1,1),y=new _e(g.geometry,g.material,f);for(let M=0;M<f;M++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,M),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,M),c.SCALE&&x.fromBufferAttribute(c.SCALE,M),y.setMatrixAt(M,v.compose(m,p,x));for(let M in c)if(M==="_COLOR_0"){let E=c[M];y.instanceColor=new Ke(E.array,E.itemSize,E.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&g.geometry.setAttribute(M,c[M]);Le.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),d.push(y)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}},lg="glTF",So=12,rg={JSON:1313821514,BIN:5130562},pd=class{constructor(t){this.name=fe.KHR_BINARY_GLTF,this.content=null,this.body=null;let e=new DataView(t,0,So),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==lg)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-So,s=new DataView(t,So),a=0;for(;a<i;){let o=s.getUint32(a,!0);a+=4;let c=s.getUint32(a,!0);if(a+=4,c===rg.JSON){let l=new Uint8Array(t,So+a,o);this.content=n.decode(l)}else if(c===rg.BIN){let l=So+a;this.body=t.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},md=class{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=fe.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){let n=this.json,i=this.dracoLoader,s=t.extensions[this.name].bufferView,a=t.extensions[this.name].attributes,o={},c={},l={};for(let h in a){let u=bd[h]||h.toLowerCase();o[u]=a[h]}for(let h in t.attributes){let u=bd[h]||h.toLowerCase();if(a[h]!==void 0){let f=n.accessors[t.attributes[h]],d=wa[f.componentType];l[u]=d.name,c[u]=f.normalized===!0}}return e.getDependency("bufferView",s).then(function(h){return new Promise(function(u,f){i.decodeDracoFile(h,function(d){for(let g in d.attributes){let v=d.attributes[g],m=c[g];m!==void 0&&(v.normalized=m)}u(d)},o,l,rn,f)})})}},gd=class{constructor(){this.name=fe.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}},vd=class{constructor(){this.name=fe.KHR_MESH_QUANTIZATION}},Pl=class extends Ps{constructor(t,e,n,i){super(t,e,n,i)}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i*3+i;for(let a=0;a!==i;a++)e[a]=n[s+a];return e}interpolate_(t,e,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=i-e,u=(n-e)/h,f=u*u,d=f*u,g=t*l,v=g-l,m=-2*d+3*f,p=d-f,x=1-m,y=p-f+u;for(let M=0;M!==o;M++){let E=a[v+M+o],b=a[v+M+c]*h,w=a[g+M+o],C=a[g+M]*h;s[M]=x*E+y*b+m*w+p*C}return s}},Iw=new Vt,xd=class extends Pl{interpolate_(t,e,n,i){let s=super.interpolate_(t,e,n,i);return Iw.fromArray(s).normalize().toArray(s),s}},ui={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},wa={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},ag={9728:$e,9729:nn,9984:Fc,9985:xf,9986:$a,9987:Ni},og={33071:Zn,33648:ao,10497:On},Yf={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},bd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},zs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Dw={CUBICSPLINE:void 0,LINEAR:or,STEP:ia},Kf={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Fw(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new qt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Hi})),r.DefaultMaterial}function pr(r,t,e){for(let n in e.extensions)r[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function Bs(r,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(r.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function Hw(r,t,e){let n=!1,i=!1,s=!1;for(let l=0,h=t.length;l<h;l++){let u=t[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);let a=[],o=[],c=[];for(let l=0,h=t.length;l<h;l++){let u=t[l];if(n){let f=u.POSITION!==void 0?e.getDependency("accessor",u.POSITION):r.attributes.position;a.push(f)}if(i){let f=u.NORMAL!==void 0?e.getDependency("accessor",u.NORMAL):r.attributes.normal;o.push(f)}if(s){let f=u.COLOR_0!==void 0?e.getDependency("accessor",u.COLOR_0):r.attributes.color;c.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],f=l[2];return n&&(r.morphAttributes.position=h),i&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=f),r.morphTargetsRelative=!0,r})}function Nw(r,t){if(r.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)r.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){let e=t.extras.targetNames;if(r.morphTargetInfluences.length===e.length){r.morphTargetDictionary={};for(let n=0,i=e.length;n<i;n++)r.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function kw(r){let t,e=r.extensions&&r.extensions[fe.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+Jf(e.attributes):t=r.indices+":"+Jf(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)t+=":"+Jf(r.targets[n]);return t}function Jf(r){let t="",e=Object.keys(r).sort();for(let n=0,i=e.length;n<i;n++)t+=e[n]+":"+r[e[n]]+";";return t}function yd(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Uw(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var Ow=new bt,_d=class{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new Lw,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,s=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,s=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&s<98?this.textureLoader=new Ds(this.options.manager):this.textureLoader=new ol(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new vo(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){let n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return pr(s,o,i),Bs(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){t(o)})}).catch(e)}_markDefs(){let t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=e.length;i<s;i++){let a=e[i].joints;for(let o=0,c=a.length;o<c;o++)t[a[o]].isBone=!0}for(let i=0,s=t.length;i<s;i++){let a=t[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;let i=n.clone(),s=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,h]of a.children.entries())s(h,o.children[l])};return s(n,i),i.name+="_instance_"+t.uses[e]++,i}_invokeOne(t){let e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){let i=t(e[n]);if(i)return i}return null}_invokeAll(t){let e=Object.values(this.plugins);e.unshift(this);let n=[];for(let i=0;i<e.length;i++){let s=t(e[i]);s&&n.push(s)}return n}getDependency(t,e){let n=t+":"+e,i=this.cache.get(n);if(!i){switch(t){case"scene":i=this.loadScene(e);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(e)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(e)});break;case"accessor":i=this.loadAccessor(e);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(e)});break;case"buffer":i=this.loadBuffer(e);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(e)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(e)});break;case"skin":i=this.loadSkin(e);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(e)});break;case"camera":i=this.loadCamera(e);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(t,e)}),!i)throw new Error("Unknown type: "+t);break}this.cache.add(n,i)}return i}getDependencies(t){let e=this.cache.get(t);if(!e){let n=this,i=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(i.map(function(s,a){return n.getDependency(t,a)})),this.cache.add(t,e)}return e}loadBuffer(t){let e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[fe.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(s,a){n.load(Hs.resolveURL(e.uri,i.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){let e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){let i=e.byteLength||0,s=e.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(t){let e=this,n=this.json,i=this.json.accessors[t];if(i.bufferView===void 0&&i.sparse===void 0){let a=Yf[i.type],o=wa[i.componentType],c=i.normalized===!0,l=new o(i.count*a);return Promise.resolve(new Et(l,a,c))}let s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(a){let o=a[0],c=Yf[i.type],l=wa[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0,v,m;if(d&&d!==u){let p=Math.floor(f/d),x="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count,y=e.cache.get(x);y||(v=new l(o,p*d,i.count*d/h),y=new ca(v,d/h),e.cache.add(x,y)),m=new lr(y,c,f%d/h,g)}else o===null?v=new l(i.count*c):v=new l(o,f,i.count*c),m=new Et(v,c,g);if(i.sparse!==void 0){let p=Yf.SCALAR,x=wa[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,M=i.sparse.values.byteOffset||0,E=new x(a[1],y,i.sparse.count*p),b=new l(a[2],M,i.sparse.count*c);o!==null&&(m=new Et(m.array.slice(),m.itemSize,m.normalized));for(let w=0,C=E.length;w<C;w++){let _=E[w];if(m.setX(_,b[w*c]),c>=2&&m.setY(_,b[w*c+1]),c>=3&&m.setZ(_,b[w*c+2]),c>=4&&m.setW(_,b[w*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(t){let e=this.json,n=this.options,s=e.textures[t].source,a=e.images[s],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(t,s,o)}loadTextureImage(t,e,n){let i=this,s=this.json,a=s.textures[t],o=s.images[e],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(e,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let f=(s.samplers||{})[a.sampler]||{};return h.magFilter=ag[f.magFilter]||nn,h.minFilter=ag[f.minFilter]||Ni,h.wrapS=og[f.wrapS]||On,h.wrapT=og[f.wrapT]||On,i.associations.set(h,{textures:t}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(t,e){let n=this,i=this.json,s=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(u=>u.clone());let a=i.images[t],o=self.URL||self.webkitURL,c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(u){l=!0;let f=new Blob([u],{type:a.mimeType});return c=o.createObjectURL(f),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(f,d){let g=f;e.isImageBitmapLoader===!0&&(g=function(v){let m=new yn(v);m.needsUpdate=!0,f(m)}),e.load(Hs.resolveURL(u,s.path),g,void 0,d)})}).then(function(u){return l===!0&&o.revokeObjectURL(c),u.userData.mimeType=a.mimeType||Uw(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[t]=h,h}assignTexture(t,e,n,i){let s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[fe.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[fe.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=s.associations.get(a);a=s.extensions[fe.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,c)}}return i!==void 0&&(a.colorSpace=i),t[e]=a,a})}assignFinalMaterial(t){let e=t.geometry,n=t.material,i=e.attributes.tangent===void 0,s=e.attributes.color!==void 0,a=e.attributes.normal===void 0;if(t.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new wi,_n.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(t.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new cs,_n.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||s||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),s&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}t.material=n}getMaterialType(){return qt}loadMaterial(t){let e=this,n=this.json,i=this.extensions,s=n.materials[t],a,o={},c=s.extensions||{},l=[];if(c[fe.KHR_MATERIALS_UNLIT]){let u=i[fe.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),l.push(u.extendParams(o,s,e))}else{let u=s.pbrMetallicRoughness||{};if(o.color=new et(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],rn),o.opacity=f[3]}u.baseColorTexture!==void 0&&l.push(e.assignTexture(o,"map",u.baseColorTexture,ue)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(e.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(e.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(t)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(t,o)})))}s.doubleSided===!0&&(o.side=pe);let h=s.alphaMode||Kf.OPAQUE;if(h===Kf.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Kf.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==Ye&&(l.push(e.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new at(1,1),s.normalTexture.scale!==void 0)){let u=s.normalTexture.scale;o.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&a!==Ye&&(l.push(e.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==Ye){let u=s.emissiveFactor;o.emissive=new et().setRGB(u[0],u[1],u[2],rn)}return s.emissiveTexture!==void 0&&a!==Ye&&l.push(e.assignTexture(o,"emissiveMap",s.emissiveTexture,ue)),Promise.all(l).then(function(){let u=new a(o);return s.name&&(u.name=s.name),Bs(u,s),e.associations.set(u,{materials:t}),s.extensions&&pr(i,u,s),u})}createUniqueName(t){let e=Pe.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){let e=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[fe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,e).then(function(c){return cg(c,o,e)})}let a=[];for(let o=0,c=t.length;o<c;o++){let l=t[o],h=kw(l),u=i[h];if(u)a.push(u.promise);else{let f;l.extensions&&l.extensions[fe.KHR_DRACO_MESH_COMPRESSION]?f=s(l):f=cg(new At,l,e),i[h]={primitive:l,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(t){let e=this,n=this.json,i=this.extensions,s=n.meshes[t],a=s.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let h=a[c].material===void 0?Fw(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(e.loadGeometries(a)),Promise.all(o).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let d=0,g=h.length;d<g;d++){let v=h[d],m=a[d],p,x=l[d];if(m.mode===ui.TRIANGLES||m.mode===ui.TRIANGLE_STRIP||m.mode===ui.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new Kc(v,x):new Nt(v,x),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===ui.TRIANGLE_STRIP?p.geometry=Wf(p.geometry,hl):m.mode===ui.TRIANGLE_FAN&&(p.geometry=Wf(p.geometry,bo));else if(m.mode===ui.LINES)p=new ki(v,x);else if(m.mode===ui.LINE_STRIP)p=new la(v,x);else if(m.mode===ui.LINE_LOOP)p=new Zc(v,x);else if(m.mode===ui.POINTS)p=new gn(v,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&Nw(p,s),p.name=e.createUniqueName(s.name||"mesh_"+t),Bs(p,s),m.extensions&&pr(i,p,m),e.assignFinalMaterial(p),u.push(p)}for(let d=0,g=u.length;d<g;d++)e.associations.set(u[d],{meshes:t,primitives:d});if(u.length===1)return s.extensions&&pr(i,u[0],s),u[0];let f=new Pt;s.extensions&&pr(i,f,s),e.associations.set(f,{meshes:t});for(let d=0,g=u.length;d<g;d++)f.add(u[d]);return f})}loadCamera(t){let e,n=this.json.cameras[t],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new Ue(Oe.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(e=new Cs(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),Bs(e,n),Promise.resolve(e)}loadSkin(t){let e=this.json.skins[t],n=[];for(let i=0,s=e.joints.length;i<s;i++)n.push(this._loadNodeShallow(e.joints[i]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let s=i.pop(),a=i,o=[],c=[];for(let l=0,h=a.length;l<h;l++){let u=a[l];if(u){o.push(u);let f=new bt;s!==null&&f.fromArray(s.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[l])}return new Jc(o,c)})}loadAnimation(t){let e=this.json,n=this,i=e.animations[t],s=i.name?i.name:"animation_"+t,a=[],o=[],c=[],l=[],h=[];for(let u=0,f=i.channels.length;u<f;u++){let d=i.channels[u],g=i.samplers[d.sampler],v=d.target,m=v.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,x=i.parameters!==void 0?i.parameters[g.output]:g.output;v.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",x)),l.push(g),h.push(v))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let f=u[0],d=u[1],g=u[2],v=u[3],m=u[4],p=[];for(let x=0,y=f.length;x<y;x++){let M=f[x],E=d[x],b=g[x],w=v[x],C=m[x];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();let _=n._createAnimationTracks(M,E,b,w,C);if(_)for(let S=0;S<_.length;S++)p.push(_[S])}return new ua(s,void 0,p)})}createNodeMesh(t){let e=this.json,n=this,i=e.nodes[t];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){let a=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(t){let e=this.json,n=this,i=e.nodes[t],s=n._loadNodeShallow(t),a=[],o=i.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));let c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(a),c]).then(function(l){let h=l[0],u=l[1],f=l[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,Ow)});for(let d=0,g=u.length;d<g;d++)h.add(u[d]);return h})}_loadNodeShallow(t){let e=this.json,n=this.extensions,i=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];let s=e.nodes[t],a=s.name?i.createUniqueName(s.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(t)});return c&&o.push(c),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(l){return i._getNodeRef(i.cameraCache,s.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(t)}).forEach(function(l){o.push(l)}),this.nodeCache[t]=Promise.all(o).then(function(l){let h;if(s.isBone===!0?h=new fo:l.length>1?h=new Pt:l.length===1?h=l[0]:h=new Le,h!==l[0])for(let u=0,f=l.length;u<f;u++)h.add(l[u]);if(s.name&&(h.userData.name=s.name,h.name=a),Bs(h,s),s.extensions&&pr(n,h,s),s.matrix!==void 0){let u=new bt;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=t,h}),this.nodeCache[t]}loadScene(t){let e=this.extensions,n=this.json.scenes[t],i=this,s=new Pt;n.name&&(s.name=i.createUniqueName(n.name)),Bs(s,n),n.extensions&&pr(e,s,n);let a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++)s.add(c[h]);let l=h=>{let u=new Map;for(let[f,d]of i.associations)(f instanceof _n||f instanceof yn)&&u.set(f,d);return h.traverse(f=>{let d=i.associations.get(f);d!=null&&u.set(f,d)}),u};return i.associations=l(s),s})}_createAnimationTracks(t,e,n,i,s){let a=[],o=t.name?t.name:t.uuid,c=[];zs[s.path]===zs.weights?t.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(o);let l;switch(zs[s.path]){case zs.weights:l=ls;break;case zs.rotation:l=Ui;break;case zs.position:case zs.scale:l=hs;break;default:switch(n.itemSize){case 1:l=ls;break;case 2:case 3:default:l=hs;break}break}let h=i.interpolation!==void 0?Dw[i.interpolation]:or,u=this._getArrayFromAccessor(n);for(let f=0,d=c.length;f<d;f++){let g=new l(c[f]+"."+zs[s.path],e.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){let n=yd(e.constructor),i=new Float32Array(e.length);for(let s=0,a=e.length;s<a;s++)i[s]=e[s]*n;e=i}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){let i=this instanceof Ui?xd:Pl;return new i(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function zw(r,t,e){let n=t.attributes,i=new qe;if(n.POSITION!==void 0){let o=e.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new T(c[0],c[1],c[2]),new T(l[0],l[1],l[2])),o.normalized){let h=yd(wa[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=t.targets;if(s!==void 0){let o=new T,c=new T;for(let l=0,h=s.length;l<h;l++){let u=s[l];if(u.POSITION!==void 0){let f=e.json.accessors[u.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){let v=yd(wa[f.componentType]);c.multiplyScalar(v)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}r.boundingBox=i;let a=new Qn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=a}function cg(r,t,e){let n=t.attributes,i=[];function s(a,o){return e.getDependency("accessor",a).then(function(c){r.setAttribute(o,c)})}for(let a in n){let o=bd[a]||a.toLowerCase();o in r.attributes||i.push(s(n[a],o))}if(t.indices!==void 0&&!r.index){let a=e.getDependency("accessor",t.indices).then(function(o){r.setIndex(o)});i.push(a)}return ge.workingColorSpace!==rn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ge.workingColorSpace}" not supported.`),Bs(r,t),zw(r,t,e),Promise.all(i).then(function(){return t.targets!==void 0?Hw(r,t.targets,e):r})}var Ta=(function(){"use strict";var r="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",t="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",e=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(e)?t:r,s,a=WebAssembly.instantiate(o(i),{}).then(function(p){s=p.instance,s.exports.__wasm_call_ctors()});function o(p){for(var x=new Uint8Array(p.length),y=0;y<p.length;++y){var M=p.charCodeAt(y);x[y]=M>96?M-97:M>64?M-39:M+4}for(var E=0,y=0;y<p.length;++y)x[E++]=x[y]<60?n[x[y]]:(x[y]-60)*64+x[++y];return x.buffer.slice(0,E)}function c(p,x,y,M,E,b){var w=s.exports.sbrk,C=y+3&-4,_=w(C*M),S=w(E.length),I=new Uint8Array(s.exports.memory.buffer);I.set(E,S);var F=p(_,y,M,S,E.length);if(F==0&&b&&b(_,C,M),x.set(I.subarray(_,_+y*M)),w(_-w(0)),F!=0)throw new Error("Malformed buffer data: "+F)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],f=0;function d(p){var x={object:new Worker(p),pending:0,requests:{}};return x.object.onmessage=function(y){var M=y.data;x.pending-=M.count,x.requests[M.id][M.action](M.value),delete x.requests[M.id]},x}function g(p){for(var x="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(o(i))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+c.toString()+m.toString(),y=new Blob([x],{type:"text/javascript"}),M=URL.createObjectURL(y),E=0;E<p;++E)u[E]=d(M);URL.revokeObjectURL(M)}function v(p,x,y,M,E){for(var b=u[0],w=1;w<u.length;++w)u[w].pending<b.pending&&(b=u[w]);return new Promise(function(C,_){var S=new Uint8Array(y),I=f++;b.pending+=p,b.requests[I]={resolve:C,reject:_},b.object.postMessage({id:I,count:p,size:x,source:S,mode:M,filter:E},[S.buffer])})}function m(p){a.then(function(){var x=p.data;try{var y=new Uint8Array(x.count*x.size);c(s.exports[x.mode],y,x.count,x.size,x.source,s.exports[x.filter]),self.postMessage({id:x.id,count:x.count,action:"resolve",value:y},[y.buffer])}catch(M){self.postMessage({id:x.id,count:x.count,action:"reject",value:M})}})}return{ready:a,supported:!0,useWorkers:function(p){g(p)},decodeVertexBuffer:function(p,x,y,M,E){c(s.exports.meshopt_decodeVertexBuffer,p,x,y,M,s.exports[l[E]])},decodeIndexBuffer:function(p,x,y,M){c(s.exports.meshopt_decodeIndexBuffer,p,x,y,M)},decodeIndexSequence:function(p,x,y,M){c(s.exports.meshopt_decodeIndexSequence,p,x,y,M)},decodeGltfBuffer:function(p,x,y,M,E,b){c(s.exports[h[E]],p,x,y,M,s.exports[l[b]])},decodeGltfBufferAsync:function(p,x,y,M,E){return u.length>0?v(p,x,y,h[M],l[E]):a.then(function(){var b=new Uint8Array(p*x);return c(s.exports[h[M]],b,p,x,y,s.exports[l[E]]),b})}}})();var Ll={uNearR:{value:0},uNearC:{value:new at}},Bw={broad:["CommonTree_1","CommonTree_2","CommonTree_3","CommonTree_4","CommonTree_5"],pine:["Pine_1","Pine_2","Pine_3","Pine_4","Pine_5"],plant:["Fern_1","Fern_1","Fern_1","Plant_1_Big"]},Gw={broad:7.2,pine:9.2},hg=240,ug=1100,fg=55,Il=class{constructor(t){this.group=new Pt,t.add(this.group),this.ready=!1,this.radius=0,this.models={},this.rockGeos=null,this._last=new T(1e9,0,0),this._m4=new bt,this._q=new Vt,this._s=new T,this._p=new T,this._up=new T(0,1,0)}async load(t){let e=new Gs;e.setMeshoptDecoder(Ta);let i=(await e.loadAsync(t)).scene;i.updateMatrixWorld(!0);let s=[];for(let a of i.children){let o=a.name,c=new qe().setFromObject(a),l=c.max.y-c.min.y,h=[];a.traverse(u=>{if(!u.isMesh)return;let f=Vw(u.geometry).applyMatrix4(u.matrixWorld);if(f.translate(0,-c.min.y-.05,0),/^Rock_/.test(o)){s.push(f);return}let d=u.material;d.side=pe,d.map&&/leaf|leaves|grass/i.test(d.name+d.map.name)&&(d.alphaTest=.4,d.transparent=!1),d.envMapIntensity=.7,de(d);let g=[hg,ug].map((v,m)=>{let p=new _e(f,d,v);return p.count=0,p.castShadow=m===0,p.receiveShadow=!0,p.frustumCulled=!1,p.layers.set(3),this.group.add(p),p});h.push(g)}),h.length&&(this.models[o]={parts:h,h:l})}return this.rockGeos=s.map(a=>{a.computeBoundingBox();let o=a.boundingBox,c=1/Math.max(o.max.x-o.min.x,o.max.z-o.min.z);return a.translate(-(o.min.x+o.max.x)/2,-o.min.y-.08,-(o.min.z+o.max.z)/2),a.scale(c,c,c),a}),this.ready=!0,this}setRadius(t){if(this.radius=t,Ll.uNearR.value=this.ready?t:0,this._last.set(1e9,0,0),!t)for(let e in this.models)for(let n of this.models[e].parts)n[0].count=0,n[1].count=0}update(t,e){if(Ll.uNearC.value.set(t.x,t.z),!this.ready||!this.radius||this._last.distanceToSquared(t)<4)return;this._last.copy(t);let n=this.radius,i=n*n,s={},a=fg*fg;for(let u in this.models)s[u]=[[],[]];for(let u of e.tiles.values()){let f=u.userData.near;if(!f)continue;let d=u.userData.box,g=Math.max(d[0]-t.x,0,t.x-d[2]),v=Math.max(d[1]-t.z,0,t.z-d[3]);if(!(g*g+v*v>i))for(let m of f){let p=m[1]-t.x,x=m[3]-t.z,y=p*p+x*x;if(y>i)continue;let M=Bw[m[0]],E=M[Math.floor(m[6]*4.999)%M.length];if(!s[E])continue;let b=y>a?1:0,w=s[E][b];w.length<(b?ug:hg)&&w.push(m)}}let o=this._m4,c=this._q,l=this._s,h=this._p;for(let u in this.models){let{parts:f,h:d}=this.models[u],g=s[u],v=u.startsWith("Pine")?"pine":u.startsWith("Common")?"broad":"plant",m=v==="plant"?1:Gw[v]/d;for(let p of f)p.forEach((x,y)=>{g[y].forEach((M,E)=>{c.setFromAxisAngle(this._up,M[5]);let b=M[4]*m;o.compose(h.set(M[1],M[2],M[3]),c,l.set(b,b*(.92+M[6]*.16),b)),x.setMatrixAt(E,o)}),x.count=g[y].length,x.instanceMatrix.needsUpdate=!0})}}};function Vw(r){let t=r.clone();for(let e of Object.keys(t.attributes)){let n=t.attributes[e];if(n.array instanceof Float32Array&&!n.isInterleavedBufferAttribute)continue;let i=new Float32Array(n.count*n.itemSize),s=[n.getX,n.getY,n.getZ,n.getW];for(let a=0;a<n.count;a++)for(let o=0;o<n.itemSize;o++)i[a*n.itemSize+o]=s[o].call(n,a);t.setAttribute(e,new Et(i,n.itemSize))}return t}var vg=2,Sd=1.3,Ww=27.119*vg,wd=-1.317*Sd,xg=1.754*Sd,qw=.8*Sd/vg,Td=76,Md=10,Xw=8,jw=6.333*Math.SQRT2,dg=[-.5/99,2.25/99],Dl=.1,Yw=4,Ao=1.5,pg=120,bg=400,Kw=8,Jw=6e3,Zw=Te.halfWidth+1.2,Qw=Te.halfWidth+16,Ad=7,Fl=27,Ed=12;function $w(r){let t=(r%1+1)%1,e=Math.sin(Math.PI*t)**2;return{a:Dl+(1-Dl)*e,b:Dl+(1-Dl)*(1-e)}}function yg(r,t){let e=new At;return e.setAttribute("position",new yt(r,3)),e.setAttribute("normal",new yt(r.map((n,i)=>i%3===1?1:0),3)),e.setIndex(t),e}function mg(r,t,e=0){let n=Math.round(2*r/t),i=[],s=[];for(let a=0;a<=n;a++)for(let o=0;o<=n;o++)i.push(-r+o*t,0,-r+a*t);for(let a=0;a<n;a++)for(let o=0;o<n;o++){let c=-r+o*t,l=-r+a*t;if(e&&c>=-e-1e-6&&c+t<=e+1e-6&&l>=-e-1e-6&&l+t<=e+1e-6)continue;let h=a*(n+1)+o,u=h+1,f=h+n+1,d=f+1;s.push(h,f,u,u,f,d)}return yg(i,s)}function tT(){let r=bg,t=Jw,e=[-r,0,-r,r,0,-r,r,0,r,-r,0,r,-t,0,-t,t,0,-t,t,0,t,-t,0,t],n=[];for(let i=0;i<4;i++){let s=i,a=(i+1)%4,o=i+4,c=(i+1)%4+4;n.push(s,o,a,a,o,c)}return yg(e,n)}var gg=`
uniform sampler2D uWave;
uniform float uFrame, uFrameB, uWA, uWB, uSea, uLod, uT;
uniform vec3 uCamW;
uniform vec3 uRoad[${Fl}];
const float TILE = ${Ww.toFixed(3)};
const mat2 ROT = mat2(0.906, 0.423, -0.423, 0.906);      // ô sóng xoay ~25° so với trục thế giới
float oLod = 0.0;                                         // mức mipmap (fragment: theo khoảng cách)
// Mỗi ô 128 px gồm 100 px dữ liệu + viền lặp 14 px: mipmap ≤ 2.5 không trộn khung bên cạnh.
vec3 waveFrame(vec2 uv, float f) {
  vec2 c = fract(uv);
  vec2 o = vec2(mod(f, ${Md}.0), floor(f / ${Md}.0));
  return textureLod(uWave, (o * 128.0 + 14.5 + c * 99.0) / vec2(${Md*128}.0, ${Xw*128}.0), oLod).rgb;
}
// một lớp: giữa khung f0 và f1, dời mẫu theo hướng trôi (bù chuyển động) rồi mới trộn
vec3 waveLayer(vec2 uv, float fr) {
  float f0 = floor(fr), t = fr - f0, f1 = mod(f0 + 1.0, ${Td}.0);
  vec2 v = vec2(${dg[0].toFixed(5)}, ${dg[1].toFixed(5)});
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
  float h = mix(${wd.toFixed(3)}, ${xg.toFixed(3)}, a.r);
  vec2 sl = (a.gb - 0.5) * ${(2*qw).toFixed(3)};
  return vec3(h, sl * ROT);                                // độ dốc theo trục thế giới
}
`;function eT(r){let t=new qt({color:16777215,roughness:.05,metalness:0,transparent:!0,depthWrite:!0});return t.onBeforeCompile=e=>{Object.assign(e.uniforms,r),e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
${gg}
varying vec3 vOW; varying float vDepth, vShore;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        vec3 ow = (modelMatrix * vec4(transformed, 1.0)).xyz;
        float camD = length(ow.xz - uCamW.xz);
        vec3 wv = waveAt(ow.xz);
        float fadeH = 1.0 - smoothstep(80.0, 112.0, camD);           // xa: chỉ còn pháp tuyến, mặt phẳng (lưới gần rộng ±120 m)
        transformed.y += wv.x * fadeH;
        // độ sâu ước lượng: khoảng cách tới tim đường + cao độ đường => cao độ đê (cùng công thức xẻ đường của terrain.js)
        float dm = 1e9, ry = uSea + 10.0;
        for (int i = 0; i < ${Fl-1}; i++) {
          vec2 a = uRoad[i].xz, b = uRoad[i + 1].xz, ab = b - a;
          float t = clamp(dot(ow.xz - a, ab) / dot(ab, ab), 0.0, 1.0);
          float d = length(ow.xz - a - ab * t);
          if (d < dm) { dm = d; ry = mix(uRoad[i].y, uRoad[i + 1].y, t); }
        }
        float ground = mix(ry - 0.02, uSea - ${Ad.toFixed(1)}, smoothstep(${Zw.toFixed(2)}, ${Qw.toFixed(2)}, dm));
        vDepth = uSea + wv.x * fadeH - ground;
        vShore = 1.0 - smoothstep(30.0, 60.0, dm);
        vOW = ow; vOW.y += wv.x * fadeH;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
${gg}
varying vec3 vOW; varying float vDepth, vShore;
float oFoam = 0.0;
        float oHash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
        float oNoise(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
          return mix(mix(oHash(i), oHash(i + vec2(1.0, 0.0)), f.x), mix(oHash(i + vec2(0.0, 1.0)), oHash(i + vec2(1.0, 1.0)), f.x), f.y); }`).replace("#include <map_fragment>",`
        float camD = length(vOW.xz - uCamW.xz);
        oLod = clamp(log2(camD * camD / uLod), 0.0, 2.5);           // xa / nhìn xiên: mipmap thô hơn (ô 128 px có viền đệm => tối đa ~2.5)
        vec3 wv = waveAt(vOW.xz);
        float crest = smoothstep(0.55, 1.0, (wv.x - ${wd.toFixed(3)}) / ${(xg-wd).toFixed(3)}) * (1.0 - smoothstep(60.0, 200.0, camD));
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
        }`)},t.customProgramCacheKey=()=>"ocean",de(t)}var Hl=class{constructor(t){this.group=new Pt,this.group.visible=!1,t.add(this.group),this.level=0,this.roadPts=Array.from({length:Fl},()=>new T),this.u={uWave:{value:null},uFrame:{value:0},uFrameB:{value:0},uWA:{value:1},uWB:{value:0},uT:{value:0},uSea:{value:0},uLod:{value:3e3},uCamW:{value:new T},uRoad:{value:this.roadPts}},this.material=null,this._p={}}_build(){let t=new Ds().load("assets/tex/ocean-waves.png?v="+Yw);t.flipY=!1,t.colorSpace=Sn,t.generateMipmaps=!0,t.minFilter=Ni,t.magFilter=nn,this.u.uWave.value=t,this.material=eT(this.u);for(let e of[mg(pg,Ao),mg(bg,Kw,pg),tT()]){let n=new Nt(e,this.material);n.frustumCulled=!1,n.receiveShadow=!0,n.renderOrder=1,this.group.add(n)}}setMap(t,e=0){this.group.visible=t,this.level=e,t&&!this.material&&this._build()}update(t,e,n,i){if(!this.group.visible)return;this.group.position.set(Math.round(e.x/Ao)*Ao,this.level,Math.round(e.z/Ao)*Ao);let s=this.u,a=t/jw%1,o=$w(a);s.uFrame.value=a*Td,s.uT.value=t%1e3,s.uFrameB.value=(a+.5)%1*Td,s.uWA.value=o.a,s.uWB.value=o.b,s.uSea.value=this.level,s.uCamW.value.copy(e),s.uLod.value=1500*Math.max(1,(e.y-this.level)/3);let c=this._p,l=Math.round(i/Ed)*Ed;for(let h=0;h<Fl;h++)n.at(Math.max(0,l+(h-13)*Ed),c),this.roadPts[h].set(c.x,c.y,c.z)}};var _g=32,nT=64,Rd=8192,Ve=Te.halfWidth,Tg=Ve+1.2,Ro=Ve+16,iT=()=>{Ve=Te.halfWidth,Tg=Ve+1.2,Ro=Ve+16},Cd=1e6,xe=(r,t,e)=>{let n=Math.min(1,Math.max(0,(e-r)/(t-r)));return n*n*(3-2*n)},Be=r=>new et(r),Mg={forest:{a:Be("#7fa443"),b:Be("#a9b85a"),c:Be("#5c8036"),snowLine:215,trees:!0},reed:{a:Be("#ad9b5c"),b:Be("#c5b37b"),c:Be("#8c8a50"),snowLine:240,trees:!1},mountain:{a:Be("#789a45"),b:Be("#9eaa5a"),c:Be("#557236"),snowLine:300,trees:!0},meadow:{a:Be("#6f9a4c"),b:Be("#86ad5c"),c:Be("#5c8541"),snowLine:400,trees:!1,bare:!0},sea:{a:Be("#cbb98c"),b:Be("#bba97c"),c:Be("#7f8f55"),snowLine:600,trees:!1,bare:!0},city:{a:Be("#77787a"),b:Be("#828280"),c:Be("#6c6e6c"),snowLine:900,trees:!1,bare:!0}},sT=Be("#5f7f45"),rT=Be("#3e5d2b"),Eg=Be("#8a8072"),Pd=Be("#6b6259"),aT=Be("#eef2f6"),oT=Be("#8f887c"),cT=Be("#5f6c36"),wg={64:1,128:.5,256:.22,512:.08},lT={64:1,128:.7,256:.4,512:.16},Nl=class{constructor(t,e,n){this.road=e,this.group=new Pt,t.add(this.group),this.tiles=new Map,this.view=1,this.keep=wg,this.queue=[],this.queued=new Set,this.iCar=0,this.uCover={value:0},this.mat=new qt({vertexColors:!0,map:G0(n),roughness:.96,metalness:0,envMapIntensity:.8}),this.texU={uRock:{value:hr("rock",n)},uRockN:{value:hr("rock_n",n,{srgb:!1})},uGravel:{value:hr("gravel",n)},uDirt:{value:hr("dirt",n)}},this.mat.onBeforeCompile=s=>{s.uniforms.uCover=this.uCover,Object.assign(s.uniforms,this.texU),s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
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
          }`)},this.treeMat=new qt({map:V0(),alphaTest:.45,side:pe,roughness:.92});let i=s=>{Object.assign(s.uniforms,Ll),s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
uniform float uNearR;
uniform vec2 uNearC;`).replace("#include <begin_vertex>",`#include <begin_vertex>
          vec3 ipos = (modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;
          transformed *= smoothstep(uNearR - 1.0, uNearR + 1.0, distance(ipos.xz, uNearC));`)};this.treeMat.onBeforeCompile=s=>{i(s),s.fragmentShader=s.fragmentShader.replace("#include <normal_fragment_begin>",Jt.normal_fragment_begin.replace("normal *= faceDirection;",""))},this.treeDepth=new ho({depthPacking:Ef,map:this.treeMat.map,alphaTest:.45,side:pe}),this.treeDepth.onBeforeCompile=i,de(this.mat),de(this.treeMat),this.geos={pine:sg(),broad:ig()},this.rockGeos=[0,1,2].map(s=>Ld(s)),this.rockMat=new qt({roughness:1,metalness:0,envMapIntensity:.35}),this.rockMat.onBeforeCompile=s=>{Object.assign(s.uniforms,this.texU),s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
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
          diffuseColor.rgb *= mix(vec3(dot(rt, vec3(0.3, 0.59, 0.11))), rt, 0.25) * 1.7;`)},de(this.rockMat),this._nd=Cd,this._ny=0,this._nl=0,this._d=Cd,this._rc=new et,this._white=new et(1,1,1)}setCar(t){this.iCar=Math.floor(t/Te.step)}_samples(t,e,n,i,s,a,o){let c=this.road.pts,l=[],h=Math.max(0,a),u=Math.min(c.length-1,o);for(let f=h-h%s;f<=u;f+=s){if(f<h)continue;let d=c[f];d.x>=t&&d.x<=n&&d.z>=e&&d.z<=i&&l.push(f)}return l}_nearFine(t,e,n){let i=this.road.pts,s=1/0,a=-1;for(let h=0;h<n.length;h++){let u=i[n[h]],f=t-u.x,d=e-u.z,g=f*f+d*d;g<s&&(s=g,a=n[h])}if(a<0)return!1;let o=1/0,c=i[a].y,l=0;for(let h=a-1;h<=a;h++){if(h<0||h+1>=i.length)continue;let u=i[h],f=i[h+1],d=f.x-u.x,g=f.z-u.z,v=d*d+g*g,m=Math.max(0,Math.min(1,((t-u.x)*d+(e-u.z)*g)/v)),p=t-u.x-d*m,x=e-u.z-g*m,y=Math.hypot(p,x);y<o&&(o=y,c=u.y+(f.y-u.y)*m,l=(p*-g+x*d)/Math.sqrt(v))}return this._nd=o,this._ny=c,this._nl=l,this._ns=a*Te.step,!0}_height(t,e,n,i){let s=this.road.pts,a=we.side,o=1/0,c=0,l=0;for(let g=0;g<i.length;g++){let v=i[g],m=s[v],p=t-m.x,x=e-m.z,y=p*p+x*x;if(y<o&&(o=y),a&&v+1<s.length){let M=s[v+1],E=M.x-m.x,b=M.z-m.z,w=Math.hypot(E,b)||1,C=(p*-b+x*E)/w,_=1/(y*y+1e4);c+=_,l+=_*C}}let h=Math.sqrt(o),u=Si(t,e)+dl(t,e),f=0;this._d=Cd,this._s=-1,this._rel=0;let d=h-70<Ro&&this._nearFine(t,e,n);if(we.sea)u=(we.seaLevel??-10)-Ad+dl(t,e)*.6,h>400&&(u+=Math.max(0,pl(t,e)/we.mount-.42)*2.6*we.mount*xe(400,1200,h));else if(a){let g=c>0?l/c:0;d&&(g=this._nl+(g-this._nl)*xe(25,60,this._nd));let v=-g,m=.75+.5*Ie(t/220+4.4,e/220+9.9);if(v>0){u+=(360*(1-Math.exp(-v/210))+.2*v)*m;let p=xe(2,18,v)*(1-.5*xe(350,900,v));if(p>0){let x=1-Math.abs(Ie(t/42+1.7,e/42+6.3)*2-1),y=1-Math.abs(Ie(t/16+8.1,e/16+2.9)*2-1);f=(x*x-.45)*42+(y*y-.45)*15+(Ie(t/85+3.3,e/85+7.7)-.5)*34,u+=f*p,this._rel=f*Math.max(p,.5);let M=u/10,E=M-Math.floor(M);u+=((Math.floor(M)+xe(.3,.7,E))*10-u)*.75*p*xe(.25,.55,Ie(t/120+5.1,e/120+1.3))}}else u-=250*(1-Math.exp(v/170));u+=dl(t*1.7,e*1.7)*.8,Math.abs(v)>650&&(u+=pl(t,e)*xe(650,1500,Math.abs(v)))}else h>500&&(u+=pl(t,e)*xe(500,1600,h));if(d){this._d=this._nd,this._s=this._ns;let g=xe(Tg,Ro,this._nd),v=this._ny-.02;u=v+(u-v)*g,a&&this._nl<0&&(u=Math.max(v,u+Math.max(f,-8)*xe(Ve+1.5,Ve+8,this._nd)*(1-g)))}return u}heightAt(t,e){let n=Ro+80,i=this._samples(t-n,e-n,t+n,e+n,1,this.iCar-300,this.iCar+300),s=this._samples(t-1700,e-1700,t+1700,e+1700,25,this.iCar-2500,this.iCar+4e3);return this._height(t,e,i,s)}_color(t,e,n,i,s,a,o,c=0){let l=Mg[we.id],h=Ie(t/150+2.3,e/150+6.1),u=Ie(t/37+8.8,e/37+1.2);o.copy(l.a).lerp(l.b,xe(.3,.75,h)).lerp(l.c,xe(.45,.9,u)*.55),we.id==="city"&&o.lerp(sT,xe(1,20,n)),l.trees&&o.lerp(rT,xe(.44,.66,Ie(t/260+3.1,e/260+8.7))*.6);let f=a>=0?this.road.dirtAt(a):0,d=f*(1-xe(Ve+1,Ve+28,s));d>0&&o.lerp(cT,d*.75);let g=1-i;o.lerp(Pd,xe(110,220,n)*.45);let v=xe(.22,.4,g);if(v>0){let y=.72+.4*Ie((t+e)/9+1.3,n/2.6)+.18*(u-.5);this._rc.copy(u>.5?Eg:Pd).multiplyScalar(y),o.lerp(this._rc,v)}let m=xe(l.snowLine+(h-.5)*60,l.snowLine+50,n)*(1-xe(.5,.75,g));o.lerp(aT,m);let p=(1-(we.id==="forest"?xe(Ve+.2,Ve+1.1,s):xe(Ve+1,Ve+3.2,s)))*(1-f);o.lerp(oT,p);let x=we.id==="mountain"?xe(70,190,n)*(1-v)*(1-m)*xe(.35,.7,u+.3*h)*.8:0;return this._mixG=Math.max(p,x),this._mixD=d*xe(.25,.6,Ie(t/9+5.5,e/9+2.2)*.7+.5*(1-xe(Ve+1,Ve+9,s))),c&&o.multiplyScalar(.62+.58*xe(-16,16,c)),o}_build(t,e,n){let i=_g,s=n/i,a=i+3,o=Ro+80,c=this.iCar-2500,l=this.iCar+4e3,h=this._samples(t-o,e-o,t+n+o,e+n+o,1,c,l),u=this._samples(t-1700,e-1700,t+n+1700,e+n+1700,25,c,l),f=new Float32Array(a*a),d=new Float32Array(a*a),g=new Float32Array(a*a),v=new Float32Array(a*a);for(let U=0;U<a;U++)for(let O=0;O<a;O++)f[U*a+O]=this._height(t+(O-1)*s,e+(U-1)*s,h,u),d[U*a+O]=this._d,g[U*a+O]=this._s,v[U*a+O]=this._rel;let m=(i+1)*(i+1),p=4*(i+1),x=new Float32Array((m+p)*3),y=new Float32Array((m+p)*3),M=new Float32Array((m+p)*3),E=new Float32Array((m+p)*2),b=new Float32Array((m+p)*2),w=new et,C=new Float32Array(m);for(let U=0;U<=i;U++)for(let O=0;O<=i;O++){let G=(U+1)*a+(O+1),j=U*(i+1)+O,J=t+O*s,it=e+U*s,z=f[G],$=f[G-1]-f[G+1],lt=2*s,ht=f[G-a]-f[G+a],_t=Math.hypot($,lt,ht);$/=_t,lt/=_t,ht/=_t,C[j]=lt,x.set([J,z,it],j*3),y.set([$,lt,ht],j*3),this._color(J,it,z,lt,d[G],g[G],w,v[G]),M.set([w.r,w.g,w.b],j*3),b[j*2]=this._mixG,b[j*2+1]=this._mixD,E.set([J/6,it/6],j*2)}let _=[];for(let U=0;U<i;U++)for(let O=0;O<i;O++){let G=U*(i+1)+O,j=G+1,J=G+i+1,it=J+1;_.push(G,J,j,j,J,it)}let S=s*1.5+1,I=[Array.from({length:i+1},(U,O)=>O),Array.from({length:i+1},(U,O)=>i*(i+1)+O),Array.from({length:i+1},(U,O)=>O*(i+1)),Array.from({length:i+1},(U,O)=>O*(i+1)+i)],F=m;for(let U of I){let O=F;for(let G of U)x.set([x[G*3],x[G*3+1]-S,x[G*3+2]],F*3),y.set([y[G*3],y[G*3+1],y[G*3+2]],F*3),M.set([M[G*3],M[G*3+1],M[G*3+2]],F*3),b[F*2]=b[G*2],b[F*2+1]=b[G*2+1],E.set([E[G*2],E[G*2+1]],F*2),F++;for(let G=0;G<i;G++){let j=U[G],J=U[G+1],it=O+G,z=O+G+1;_.push(j,it,J,J,it,z,j,J,it,J,z,it)}}let N=new At;N.setAttribute("position",new Et(x,3)),N.setAttribute("normal",new Et(y,3)),N.setAttribute("color",new Et(M,3)),N.setAttribute("aMix",new Et(b,2)),N.setAttribute("uv",new Et(E,2)),N.setIndex(_),N.computeBoundingSphere();let L=new Nt(N,this.mat);L.receiveShadow=n<=256,L.castShadow=n<=64;let P=new Pt;P.add(L),P.userData.box=[t,e,t+n,e+n];let D=this._trees(t,e,n,s,a,f,d,C,g,P);for(let U of D)P.add(U);return this.group.add(P),P}_bil(t,e,n,i,s,a,o){let c=(a-i)/n+1,l=(o-s)/n+1,h=Math.max(0,Math.min(e-2,Math.floor(c))),u=Math.max(0,Math.min(e-2,Math.floor(l))),f=c-h,d=l-u,g=t[u*e+h],v=t[u*e+h+1],m=t[(u+1)*e+h],p=t[(u+1)*e+h+1];return g+(v-g)*f+(m-g)*d+(g-v-m+p)*f*d}_nearest(t,e,n,i,s,a,o){let c=Math.min(e-1,Math.max(0,Math.round((a-i)/n+1))),l=Math.min(e-1,Math.max(0,Math.round((o-s)/n+1)));return t[l*e+c]}_trees(t,e,n,i,s,a,o,c,l,h){let u=Mg[we.id],f=this.keep[n]||0;if(!f)return[];let d=_g,g=we.id==="mountain",v=[],m=[],p=[],x=(w,C)=>c[Math.min(d,Math.round((C-e)/i))*(d+1)+Math.min(d,Math.round((w-t)/i))],y=n<=128?[]:null;h&&(h.userData.near=y);let M=[{cell:8,seed:0}];if(this.road.dirt&&n<=128){let w=!1;for(let C=0;C<l.length&&!w;C+=7)l[C]>=0&&this.road.dirtAt(l[C])>.05&&(w=!0);w&&M.push({cell:4,seed:1})}for(let{cell:w,seed:C}of M){let _=C*15485863;for(let S=Math.floor(e/w);S*w<e+n;S++)for(let I=Math.floor(t/w);I*w<t+n;I++){if($t(I+_,S)>f)continue;let F=(I+$t(I+7919+_,S))*w,N=(S+$t(I+_,S+7919))*w;if(F<t||F>=t+n||N<e||N>=e+n)continue;let L=this._bil(o,s,i,t,e,F,N),P=L<60?this._nearest(l,s,i,t,e,F,N):-1,D=P>=0?this.road.dirtAt(P):0,U=u.trees?xe(.44,.66,Ie(F/260+3.1,N/260+8.7))*.92+.03:u.bare?0:.012;C?U=D*.85*(1-xe(Ve+20,Ve+45,L)):U=Math.max(U,D*.9*(1-xe(Ve+25,Ve+60,L)));let O=this._bil(a,s,i,t,e,F,N),G=x(F,N);if($t(I+104729+_,S+31)>U||L<Ve+7.5-5*D+(C?$t(I,S+3)*1.5:0)||O>u.snowLine-20||G<(g?.66:.8))continue;let j=(.75+$t(I+3+_,S+5)*.7)*(n>=256?1.3:1)*(D>.3?1.15:1),J=u.trees?$t(I+11+_,S+13)<(g?.9:.58+xe(60,180,O)*.35):!1,it=[F,O-.2,N,j,$t(I+17+_,S+19)*6.283,$t(I+23+_,S+29)];(J?v:m).push(it),y&&y.push([J?"pine":"broad",...it])}}if(n<=256)for(let C=Math.floor(e/22);C*22<e+n;C++)for(let _=Math.floor(t/22);_*22<t+n;_++){if($t(_+911,C+577)>f)continue;let S=(_+$t(_+31,C+977))*22,I=(C+$t(_+977,C+31))*22;if(S<t||S>=t+n||I<e||I>=e+n)continue;let F=this._bil(o,s,i,t,e,S,I);if(F<Ve+3)continue;let N=x(S,I),L=F<60?this._nearest(l,s,i,t,e,S,I):-1,P=L>=0?this.road.dirtAt(L):0,D=g&&N<=.5,U=g?F<Ve+14?.45:D?.32:N<.93?.3:.06:P*.2;if($t(_+3331,C+7177)>U)continue;let O=(g?D?3:1.6:.8)+Math.pow($t(_+41,C+43),1.6)*(g?D?7:5.5:1.6),G=3+Math.floor($t(_+7,C+9)*5);for(let j=0;j<G;j++){let J=$t(_*7+j,C+101)*6.283,it=(j===0?0:.6+$t(_+j*13,C*3+7)*1.4)*O,z=S+Math.cos(J)*it,$=I+Math.sin(J)*it;if(z<t-4||z>=t+n+4||$<e-4||$>=e+n+4||this._bil(o,s,i,t,e,z,$)<Ve+2)continue;let lt=O*(j===0?1:.35+$t(_+j,C+j*5)*.55),ht=this._bil(a,s,i,t,e,z,$);p.push([z,ht-lt*(D?.35:.22),$,lt,$t(_+j*3,C+53)*6.283,$t(_+59+j,C+61)])}}if(y&&n<=64&&u.trees)for(let C=Math.floor(e/3.5);C*3.5<e+n;C++)for(let _=Math.floor(t/3.5);_*3.5<t+n;_++){let S=(_+$t(_+5153,C))*3.5,I=(C+$t(_,C+5153))*3.5;if(S<t||S>=t+n||I<e||I>=e+n)continue;let F=this._bil(o,s,i,t,e,S,I);if(F<Ve+1.6)continue;let N=F<60?this._nearest(l,s,i,t,e,S,I):-1,L=N>=0?this.road.dirtAt(N):0,P=(g?.07:.1+.18*xe(.44,.66,Ie(S/260+3.1,I/260+8.7)))+L*.35;if($t(_+6007,C+6011)>P||x(S,I)<.75)continue;let D=this._bil(a,s,i,t,e,S,I);y.push(["plant",S,D-.05,I,.6+$t(_+61,C+67)*.7,$t(_+71,C+73)*6.283,$t(_+79,C+83)])}let E=[],b=(w,C,_,S)=>{if(!w.length)return;let I=new _e(C,_,w.length),F=new bt,N=new Vt,L=new T,P=new T,D=new T(0,1,0),U=new et,O=new oi;w.forEach(([G,j,J,it,z,$],lt)=>{S?N.setFromEuler(O.set(($-.5)*.5,z,($-.5)*.4)):N.setFromAxisAngle(D,z),F.compose(P.set(G,j,J),N,L.set(it,it*(S?.75+$*.45:.9+$*.3),it)),I.setMatrixAt(lt,F),S?U.copy($>.5?Eg:Pd).multiplyScalar(1.15+$*.3):U.setHSL(.2+($-.5)*.12,.45,.62+$*.2).lerp(this._white,.55),I.setColorAt(lt,U)}),I.castShadow=n<=64,I.receiveShadow=S&&n<=128,S||(I.customDepthMaterial=this.treeDepth),I.layers.set(3),E.push(I)};if(b(v,this.geos.pine,this.treeMat),b(m,this.geos.broad,this.treeMat),p.length){let w=this.rockGeos.map(()=>[]);p.forEach(C=>w[Math.floor(C[5]*(w.length-.001))].push(C)),w.forEach((C,_)=>b(C,this.rockGeos[_],this.rockMat,!0))}return E}_dispose(t){this.group.remove(t),t.traverse(e=>{e.isInstancedMesh?e.dispose():e.isMesh&&e.geometry.dispose()})}reset(){iT();for(let t of this.tiles.values())this._dispose(t);this.tiles.clear(),this.queue.length=0,this.queued.clear()}update(t,e=6){let n=new Map,i=Math.round(t.x/1024)*1024-Rd/2,s=Math.round(t.z/1024)*1024-Rd/2,a=(o,c,l)=>{let h=Math.min(Math.max(t.x,o),o+l),u=Math.min(Math.max(t.z,c),c+l),f=Math.hypot(t.x-h,t.z-u);if(l>nT&&f<l*this.view){let d=l/2;a(o,c,d),a(o+d,c,d),a(o,c+d,d),a(o+d,c+d,d)}else n.set(l+"|"+o+"|"+c,[o,c,l,f])};a(i,s,Rd);for(let[o,c]of n)!this.tiles.has(o)&&!this.queued.has(o)&&(this.queue.push([o,...c]),this.queued.add(o));if(this.queue.length){this.queue.sort((c,l)=>c[3]-l[3]||c[4]-l[4]);let o=performance.now();for(;this.queue.length&&performance.now()-o<e;){let[c,l,h,u]=this.queue.shift();this.queued.delete(c),!(!n.has(c)||this.tiles.has(c))&&this.tiles.set(c,this._build(l,h,u))}}if(!this.queue.length)for(let[o,c]of this.tiles)n.has(o)||(this._dispose(c),this.tiles.delete(o))}prime(t){this.update(t,1e9)}setView(t,e){t!==this.view&&(this.view=t,this.keep=t>1?lT:wg,this.tiles.size&&(this.reset(),e&&this.prime(e)))}apply(t){this.uCover.value=t.cover,this.mat.color.setScalar((1-.2*t.wet)*(1-.3*t.dark));let e=.2*t.cover*t.dayF;this.treeMat.emissive.setRGB(e,e*1.02,e*1.05)}};function Ld(r,t=3){let e=new mo(1,t);e.deleteAttribute("normal"),e.deleteAttribute("uv"),e=tg(e);let n=e.attributes.position,i=new T;for(let s=0;s<n.count;s++){i.fromBufferAttribute(n,s);let a=Ie(i.x*1.7+r*13.1,i.z*1.7+i.y*1.3+r*7.7)*.45+Ie(i.x*4.1+r,i.y*4.3-i.z*2.1)*.18;i.multiplyScalar(.72+a),i.y=Math.max(i.y,-.25),n.setXYZ(s,i.x,i.y,i.z)}return e.computeVertexNormals(),e}var Id=`
  uniform float uExposure;
  vec3 dispToLin(vec3 d) {
    vec3 x = clamp(mix(pow((d + 0.055) / 1.055, vec3(2.4)), d / 12.92, step(d, vec3(0.04045))), 0.0, 0.985);
    vec3 A = 1.0 - 0.983729 * x, B = 0.0245786 - 0.432951 * x, C = -(0.000090537 + 0.238081 * x);
    return (-B + sqrt(B * B - 4.0 * A * C)) / (2.0 * A) * 0.6 / uExposure;
  }`;function Sg(r,t=1){let e=new Float32Array(r*t*3);for(let n=0;n<r;n++){let i=Math.random(),s=Math.random(),a=Math.random();for(let o=0;o<t;o++)e.set([i,s,a],(n*t+o)*3)}return e}var hT=`
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
  }`,uT=`
  uniform float uOpacity, uLight; uniform vec3 uColor; varying float vA;
  ${Id}
  void main() {
    float r = length(gl_PointCoord - 0.5) * 2.0;
    float a = smoothstep(1.0, 0.25, r);
    gl_FragColor = vec4(dispToLin(uColor * uLight), a * uOpacity * vA);
  }`,kl=class{constructor(t){this.time=0;let e=new T(40,26,40),n=()=>({uTime:{value:0},uCam:{value:new T},uBox:{value:e.clone()},uOpacity:{value:0},uLight:{value:1},uExposure:{value:.6}}),i=14e3,s=new At;s.setAttribute("position",new Et(new Float32Array(i*2*3),3)),s.setAttribute("seed",new Et(Sg(i,2),3));let a=new Float32Array(i*2);for(let c=0;c<i;c++)a[c*2+1]=1;s.setAttribute("tail",new Et(a,1)),this.rain=new ki(s,new Ee({uniforms:{...n(),uSpeed:{value:24},uLen:{value:1.1},uWind:{value:new at(2,1)},uCarInv:{value:new bt},uCarHalf:{value:new T}},transparent:!0,depthWrite:!1,vertexShader:`
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
        ${Id}
        void main() {
          vec3 local = (uCarInv * vec4(vWorld, 1.0)).xyz - vec3(0.0, uCarHalf.y, 0.0);
          if (all(lessThan(abs(local), uCarHalf))) discard;
          gl_FragColor = vec4(dispToLin(vec3(0.78, 0.84, 0.92) * uLight), uOpacity * vA);
        }`})),this.rain.frustumCulled=!1,this.rain.layers.set(3),this.rain.renderOrder=10,this.rain.visible=!1,t.add(this.rain);let o=(c,l,h)=>{let u=new At;u.setAttribute("position",new Et(new Float32Array(c*3),3)),u.setAttribute("seed",new Et(Sg(c),3));let f=new gn(u,new Ee({uniforms:{...n(),uScale:{value:400},uColor:{value:new et(...h)},...l},transparent:!0,depthWrite:!1,vertexShader:hT,fragmentShader:uT}));return f.frustumCulled=!1,f.layers.set(3),f.renderOrder=10,f.visible=!1,t.add(f),f};this.snow=o(1e4,{uSize:{value:.09},uFall:{value:1.6},uSway:{value:.9},uDrift:{value:new at}},[.96,.98,1]),this.drift=o(2600,{uSize:{value:.05},uFall:{value:.12},uSway:{value:.25},uDrift:{value:new at}},[.95,.9,.78])}setCar(t,e){t.updateWorldMatrix(!0,!1);let n=this.rain.material.uniforms;n.uCarInv.value.copy(t.matrixWorld).invert(),n.uCarHalf.value.set(e.width/2,e.height/2,e.length/2)}update(t,e,n,i){this.time+=t;let s=n.windDir.clone().multiplyScalar(1.5+n.wind*11);for(let l of[this.rain,this.snow,this.drift]){let h=l.material.uniforms;h.uTime.value=this.time,h.uCam.value.copy(e),h.uLight.value=n.light,h.uExposure.value=n.exposure||.6}let a=this.rain.material.uniforms;a.uOpacity.value=.55*n.rain*(1+.25*n.dark),a.uWind.value.copy(s),this.rain.visible=n.rain>.02;let o=this.snow.material.uniforms;o.uOpacity.value=.95*n.snow,o.uScale.value=i*.5,o.uDrift.value.copy(s).multiplyScalar(.35),this.snow.visible=n.snow>.02;let c=this.drift.material.uniforms;c.uOpacity.value=.8*n.drift,c.uScale.value=i*.5,c.uDrift.value.copy(s).multiplyScalar(.9),this.drift.visible=n.drift>.02}};var Dd=Math.PI/180,qn=(r,t,e)=>Math.min(e,Math.max(t,r)),ti=(r,t,e)=>{let n=qn((e-r)/(t-r),0,1);return n*n*(3-2*n)},Ag={clear:{fog:42e-5,overcast:0,clouds:.52,sun:1,rain:0,snow:0,wet:0,cover:0,wind:.3,dark:0,tint:"#b9d6ee"},cloudy:{fog:9e-4,overcast:.75,clouds:.86,sun:.3,rain:0,snow:0,wet:0,cover:0,wind:.38,dark:.12,tint:"#a6b1bb"},windy:{fog:6e-4,overcast:.2,clouds:.62,sun:.85,rain:0,snow:0,wet:0,cover:0,wind:.95,dark:0,tint:"#b4c6d8"},rain:{fog:.0016,overcast:1,clouds:1,sun:.1,rain:.85,snow:0,wet:1,cover:0,wind:.5,dark:.35,tint:"#7a858f"},storm:{fog:.0027,overcast:1,clouds:1,sun:.03,rain:1,snow:0,wet:1,cover:0,wind:1,dark:1,tint:"#3f4852"},snow:{fog:.0019,overcast:.85,clouds:1,sun:.35,rain:0,snow:1,wet:0,cover:1,wind:.32,dark:.1,tint:"#d3dbe2"},fog:{fog:.0066,overcast:.55,clouds:.5,sun:.3,rain:0,snow:0,wet:.2,cover:0,wind:.08,dark:.05,tint:"#c4c9cd"}},fT=1.5,dT=["fog","overcast","clouds","sun","rain","snow","wet","cover","wind","dark"],pT=[[-18,"#040a1a","#08142c","#122244","#122244","#000000"],[-9,"#06102e","#0e1d47","#1f2d5a","#363562","#24182c"],[-4,"#122052","#2a3c79","#67588d","#d06e7a","#a24a40"],[0,"#1d3d80","#4868ab","#e3987c","#ff8a48","#ff7030"],[4,"#2453a0","#6286c4","#f0bd92","#ffb36c","#ff9a52"],[10,"#2a64b4","#719fd9","#f1d9bd","#ffd59c","#ffcf88"],[22,"#2468c8","#5b9be3","#c6def3","#e1edf5","#fff1d6"],[50,"#1e5fc4","#4f92e0","#b4d4f2","#d2e5f3","#fff7e6"]].map(([r,...t])=>[r,...t.map(e=>new et(e))]),Rg=2.15;function Lg(r,t,e){let n=t/.6,i=r.r*n,s=r.g*n,a=r.b*n,o=.59719*i+.35458*s+.04823*a,c=.076*i+.90834*s+.01566*a,l=.0284*i+.13383*s+.83777*a,h=v=>(v*(v+.0245786)-90537e-9)/(v*(.983729*v+.432951)+.238081),u=h(o),f=h(c),d=h(l),g=v=>(v=Math.min(1,Math.max(0,v)),v<=.0031308?12.92*v:1.055*Math.pow(v,1/2.4)-.055);return e.setRGB(g(1.60475*u-.53108*f-.07367*d),g(-.10208*u+1.10813*f-.00605*d),g(-.00327*u-.07276*f+1.07602*d))}var Ul=new et;function mT(r,t,e){let n=a=>(a=Math.min(.985,Math.max(0,a)),a<=.04045?a/12.92:Math.pow((a+.055)/1.055,2.4)),i=a=>{let o=1-.983729*a,c=.0245786-.432951*a,l=-(90537e-9+.238081*a);return(-c+Math.sqrt(c*c-4*o*l))/(2*o)*.6/t},s=[n(r.r),n(r.g),n(r.b)];e.setRGB(i(s[0]),i(s[1]),i(s[2]));for(let a=0;a<4;a++){Lg(e,t,Ul);let o=[n(Ul.r),n(Ul.g),n(Ul.b)];e.setRGB(e.r*s[0]/Math.max(o[0],1e-5),e.g*s[1]/Math.max(o[1],1e-5),e.b*s[2]/Math.max(o[2],1e-5))}return e}var gT=`
  varying vec3 vDir;
  void main() { vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,vT=`
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
  }`,xT=new et("#fff3df"),bT=new et("#ff9a50"),Cg=new et("#9ab6ff"),yT=new et(1.7,1.78,1.95),_T=Math.PI-1,MT=Math.PI-1.15,Pg={exposure:1,skyBrightness:1,directLight:1,ambientLight:1,sunGlow:1,sunDisc:1,cloudBrightness:1,rays:1,autoSpeed:.06,sunAzimuth:_T,moonAzimuth:MT},ET=`
  varying vec3 vDir;
  void main() { vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,wT=`
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
  }`,Ol=class{constructor(t,e,n){this.renderer=t,this.scene=e,this.camera=n,this.hour=17.55,this.auto=!1,this.tween=null,this.weather="clear",this.weatherProfiles=Object.fromEntries(Object.entries(Ag).map(([o,c])=>[o,{...c}])),this.w={...this.weatherProfiles.clear},this.tint=new et(this.weatherProfiles.clear.tint),this.target=this.weatherProfiles.clear,this.tune={...Pg},this.windDir=new at(.78,.62).normalize(),this._fogDisp=new et,this.veil={uVeilCol:{value:new et},uVeil:{value:new at(0,.2)}},this.mistCover=.35,this.mistDens=.2,this.skyMat=new Ee({uniforms:{...this.veil,uZenith:{value:new et},uMid:{value:new et},uHorizon:{value:new et},uBand:{value:new et},uSunCol:{value:new et},uSunDir:{value:new T(0,1,0)},uGlow:{value:1},uDisc:{value:1},uBandAmt:{value:1},uScale:{value:1},uGround:{value:new he(0,0,0,0)},uMoonDir:{value:new T(0,1,0)},uMoonCol:{value:new et(yT)},uMoon:{value:0}},vertexShader:gT,fragmentShader:vT,side:bn,depthWrite:!1,fog:!1}),this.sky=new Nt(new Ti(2400,48,24),this.skyMat),this.sky.renderOrder=-10,this.sky.frustumCulled=!1,e.add(this.sky),this.skyC={zen:new et,mid:new et,hor:new et,band:new et,sun:new et},this.envScene=new os,this.envScene.add(new Nt(new Ti(900,32,16),this.skyMat)),this.pmrem=new aa(t),this.envRT=null,this.envTimer=0,this.envKey="";let i=new Float32Array(1800*3);for(let o=0;o<1800;o++){let c=new T().randomDirection();c.y=Math.abs(c.y)*.9+.1,c.normalize().multiplyScalar(3200),i.set([c.x,c.y,c.z],o*3)}let s=new At;s.setAttribute("position",new Et(i,3)),this.stars=new gn(s,new wi({color:14674175,size:2.1,sizeAttenuation:!1,transparent:!0,opacity:0,depthWrite:!1,fog:!1})),this.stars.renderOrder=1,this.stars.frustumCulled=!1,e.add(this.stars),this.cloudMat=new Ee({uniforms:{...this.veil,uTime:{value:0},uCover:{value:.4},uFlash:{value:0},uSoft:{value:0},uDrift:{value:new at},uSunDir:{value:new T(0,1,0)},uLit:{value:new et},uShade:{value:new et},uFlashCol:{value:new et(1.5,1.7,2.4)}},vertexShader:ET,fragmentShader:wT,side:bn,transparent:!0,depthWrite:!1,fog:!1}),this.dome=new Nt(new Ti(2300,32,16),this.cloudMat),this.dome.renderOrder=3,this.dome.frustumCulled=!1,e.add(this.dome),this.cloudTime=0,this.haze=new Nt(new Xe(1800,1800,1,48,1,!0),new Ee({uniforms:{uColor:{value:new et}},side:pe,transparent:!0,depthWrite:!1,fog:!1,vertexShader:"varying float vT; void main(){ vT = position.y + 0.5; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:"uniform vec3 uColor; varying float vT; void main(){ float a = 1.0 - vT; gl_FragColor = vec4(uColor, a * a); }"})),this.haze.renderOrder=5,this.haze.frustumCulled=!1,e.add(this.haze),this.boltGeo=new At,this.boltGeo.setAttribute("position",new Et(new Float32Array(480),3)),this.boltGeo.setDrawRange(0,0),this.bolt=new ki(this.boltGeo,new cs({color:14083327,transparent:!0,opacity:0,blending:tn,depthWrite:!1,fog:!1})),this.bolt.renderOrder=6,this.bolt.frustumCulled=!1,e.add(this.bolt),this.flashT=-1,this.nextStrike=2,this.flash=0,this.onThunder=null,this.sun=new da(16777215,1),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048);let a=this.sun.shadow.camera;a.left=-38,a.right=38,a.top=38,a.bottom=-38,a.near=1,a.far=260,this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=.04,a.layers.enable(3),e.add(this.sun,this.sun.target),this.hemi=new rl(12572927,4214832,.4),e.add(this.hemi),e.fog=new Yc(12179182,6e-4),this.precip=new kl(e),this.state={night:0,lamps:0,dayF:1,warm:0,light:1,rain:0,snow:0,wet:0,cover:0,overcast:0,wind:.3,dark:0,drift:0,flash:0,windDir:this.windDir,fogColor:new et,mistColor:new et,sunDir:new T,elevation:0,moonDir:new T,lightDir:new T,moon:0,rays:0,rayDir:new T,rayCol:new et},this._c=new et,this._c2=new et,this._lit=new et,this._shade=new et,this._v=new T}snapWeather(t){this.setWeather(t),Object.assign(this.w,this.target),this.tint.set(this.target.tint)}setWeather(t){this.weather=t,this.target=this.weatherProfiles[t],t==="storm"&&(this.nextStrike=Math.min(this.nextStrike,1.2))}resetWeather(t){Object.assign(this.weatherProfiles[t],Ag[t]),this.weather===t&&this.setWeather(t)}resetTune(){Object.assign(this.tune,Pg),this.envKey=""}setTime(t){if(t==null){this.auto=!0,this.tween=null;return}this.auto=!1,this.tween=t}get clock(){let t=Math.floor(this.hour),e=Math.floor((this.hour-t)*60);return String(t).padStart(2,"0")+":"+String(e).padStart(2,"0")}_strike(t){let e=Math.random()*Math.PI*2,n=800+Math.random()*900,i=new T(t.x+Math.cos(e)*n,0,t.z+Math.sin(e)*n),s=new T(i.x+(Math.random()-.5)*240,650+Math.random()*200,i.z+(Math.random()-.5)*240),a=this.boltGeo.attributes.position,o=0,c=(l,h,u,f)=>{let d=l.clone();for(let g=1;g<=u;g++){let v=g/u,m=l.clone().lerp(h,v);g<u&&m.add(new T((Math.random()-.5)*f,0,(Math.random()-.5)*f)),a.setXYZ(o++,d.x,d.y,d.z),a.setXYZ(o++,m.x,m.y,m.z),d=m}return d};c(s,i,16,110);for(let l=0;l<3;l++){let h=.25+Math.random()*.5,u=s.clone().lerp(i,h),f=u.clone().add(new T((Math.random()-.5)*380,-(120+Math.random()*260),(Math.random()-.5)*380));c(u,f,5,60)}a.needsUpdate=!0,this.boltGeo.setDrawRange(0,o),this.flashT=0,this.onThunder&&this.onThunder(qn(n/340,.7,4.2),qn(1.3-n/1800,.35,1))}update(t,e){let n=this.camera.position;if(this.auto)this.hour=(this.hour+t*this.tune.autoSpeed)%24;else if(this.tween!=null){let ht=(this.tween-this.hour+36)%24-12,_t=5*t;Math.abs(ht)<=_t?(this.hour=this.tween,this.tween=null):this.hour=(this.hour+Math.sign(ht)*_t+24)%24}let i=1-Math.exp(-t*1.4);for(let ht of dT)ht!=="wet"&&(this.w[ht]+=(this.target[ht]-this.w[ht])*i);let s=this.target.wet-this.w.wet;this.w.wet+=Math.sign(s)*Math.min(Math.abs(s),t/fT),this.tint.lerp(this._c.set(this.target.tint),i);let a=this.w,o=a.overcast,c=a.dark;if(this.weather==="storm"&&a.dark>.5&&(this.nextStrike-=t,this.nextStrike<=0&&(this._strike(n),this.nextStrike=3.5+Math.random()*7)),this.flashT>=0){this.flashT+=t;let ht=this.flashT;this.flash=qn(Math.exp(-ht*11)+.75*(ht>.17?Math.exp(-(ht-.17)*8):0),0,1),ht>1.6&&(this.flashT=-1,this.flash=0,this.boltGeo.setDrawRange(0,0))}let l=this.flash;this.bolt.material.opacity=this.flashT>=0&&this.flashT<.5?l:0,this.bolt.visible=this.bolt.material.opacity>.02;let h=65*Math.sin((this.hour-6)/24*Math.PI*2),u=this.state.sunDir;u.setFromSphericalCoords(1,Math.PI/2-h*Dd,this.tune.sunAzimuth);let f=ti(-4,14,h),d=1-ti(-12,0,h),g=Math.exp(-Math.pow((h-3)/10,2)),v=this.state.moonDir;v.setFromSphericalCoords(1,Math.PI/2-(3+9*ti(-3,-30,h))*Dd,this.tune.moonAzimuth);let m=this._v.setFromSphericalCoords(1,Math.PI/2-38*Dd,this.tune.moonAzimuth),p=ti(-2,-11,h),x=pT,y=0;for(;y<x.length-2&&h>x[y+1][0];)y++;let M=x[y],E=x[y+1],b=qn((h-M[0])/(E[0]-M[0]),0,1),w=this.skyC;["zen","mid","hor","band","sun"].forEach((ht,_t)=>w[ht].copy(M[_t+1]).lerp(E[_t+1],b));let C=.07+.93*f,_=qn(o*.92+c*.08,0,1),S=this._c.copy(this.tint).multiplyScalar(C).lerp(this._c2.set("#c9997f").multiplyScalar(C),g*.35*(1-c));w.zen.lerp(this._lit.copy(S).multiplyScalar(.8),_),w.mid.lerp(this._lit.copy(S).multiplyScalar(.92),_),w.hor.lerp(S,_),w.band.lerp(S,_);let I=Rg*this.tune.skyBrightness*(1-.6*c);for(let ht of["zen","mid","hor","band"])w[ht].multiplyScalar(I).add(this._c2.setRGB(.55,.65,1).multiplyScalar(l*1.6));let F=this.skyMat.uniforms;F.uZenith.value.copy(w.zen),F.uMid.value.copy(w.mid),F.uHorizon.value.copy(w.hor),F.uBand.value.copy(w.band),F.uSunCol.value.copy(w.sun).multiplyScalar(Rg*this.tune.skyBrightness),F.uSunDir.value.copy(u),F.uGlow.value=(1-o*.95)*ti(-6,1,h)*(1-c)*this.tune.sunGlow,F.uDisc.value=(1-o)*ti(-1.5,.5,h)*22*this.tune.sunDisc,F.uBandAmt.value=(1-o*.85)*(.25+.75*g)*ti(-11,-2,h),F.uMoonDir.value.copy(v),F.uMoon.value=p*qn(1-o*1.05,0,1)*(1-c);let N=ti(3,22,h)*qn((a.sun-.3)/.7,0,1)*(1-c);this.state.sunK=N,this.renderer.toneMappingExposure=(.5+.12*g)*(1-.5*c)*(1+.3*d)*(1-.3*N)*this.tune.exposure;let L=this.renderer.toneMappingExposure;this.state.exposure=L,this.state.fogColor.copy(this._lit.copy(w.hor).lerp(w.band,.2*F.uBandAmt.value));let P=Lg(this.state.fogColor,L,this._fogDisp);this.scene.fog.color.copy(this.state.fogColor),this.scene.fog.density=a.fog,this._c2.copy(P).lerp(this._c.setRGB(.93,.95,.97).multiplyScalar(.1+.9*f*(1-.6*c)),.3),mT(this._c2,L,this.state.mistColor);{let ht=ti(0,.6,this.mistDens)*(.35+.65*this.mistCover),_t=ti(.0012,.0075,a.fog)*.85,Ut=this.veil;Ut.uVeil.value.set(Math.max(ht,_t),Math.max(.05+.5*Math.pow(this.mistCover,1.5),_t>ht?.3:0)),Ut.uVeilCol.value.copy(this.state.mistColor)}let D=h<-2.5,U=this.state.lightDir.copy(D?m:u);D?(this.sun.intensity=.38*p*(1-.8*o)*(1-c)*this.tune.directLight,this.sun.color.copy(Cg)):(this.sun.intensity=3.4*ti(-2,9,h)*a.sun*(1+1.3*N)*this.tune.directLight,this.sun.color.copy(xT).lerp(bT,qn(g*1.3,0,1))),e&&(this.sun.position.copy(e).addScaledVector(U,120),this.sun.target.position.copy(e)),this.hemi.color.copy(P).lerp(this._c.set("#6f8cd0"),d*.75).lerp(this._c.set("#c4d4ff"),l),this.hemi.groundColor.set("#3a4630").multiplyScalar(.25+.75*f),this.hemi.intensity=((.16+.45*f+.34*d)*(1-.4*o)*(1-.35*c)*(1-.45*N)+l*3.2)*this.tune.ambientLight,this.sky.position.copy(n),this.stars.position.copy(n),this.dome.position.copy(n),this.haze.position.set(n.x,0,n.z);let O=150+a.fog*1e5;this.haze.scale.y=O,this.haze.position.y=O/2-60,this.haze.material.uniforms.uColor.value.copy(this.state.fogColor),this.stars.material.opacity=d*(1-o*.95),this.stars.visible=this.stars.material.opacity>.01;let G=qn(g*1.1,0,1)*(1-.92*c),j=this._lit.set("#ffffff").lerp(this._c2.set("#ff9d66"),G).multiplyScalar(2.4*f*this.tune.cloudBrightness);j.add(this._c2.set("#8fa6e0").multiplyScalar(.32*d*(1-o*.6)));let J=this._shade.copy(w.mid).multiplyScalar(.5).lerp(this._c2.copy(w.hor).multiplyScalar(.62),.45).lerp(this._c2.set("#a86a7a").multiplyScalar(1.05*f),G*.5);J.add(this._c2.set("#101b38").multiplyScalar(.3*d)),j.multiplyScalar(1-.8*c),this.cloudTime+=t;let it=this.cloudMat.uniforms;it.uTime.value=this.cloudTime,it.uCover.value=a.clouds,it.uSoft.value=qn(o*.9+c*.3,0,1),it.uFlash.value=l,it.uDrift.value.copy(this.windDir).multiplyScalar(.003+.02*a.wind),it.uSunDir.value.copy(h>=-2?u:v),it.uLit.value.copy(j),it.uShade.value.copy(J);let z=this.state;z.elevation=h,z.dayF=f,z.night=d,z.warm=g,z.overcast=o,z.rain=a.rain,z.snow=a.snow,z.wet=a.wet,z.cover=a.cover,z.wind=a.wind,z.dark=c,z.flash=l,z.drift=qn((a.wind-.5)*2.2,0,1)*(1-a.rain)*(1-a.snow);let $=qn(a.rain*.35+a.snow*.25+(a.fog>.003?.3:0),0,.5);z.lamps=qn(Math.max(d,.7*(1-f))+$*f+c*.7,0,1),z.moon=F.uMoon.value;let lt=ti(5e-4,.0065,a.fog);if(z.rays=(D?.22*F.uMoon.value*(1+lt):ti(-2.5,2.5,h)*(1-.55*o)*(1-c)*(.55+.45*g)*(1+1.3*lt))*this.tune.rays,z.rayDir.copy(D?v:u),z.rayCol.copy(D?Cg:this.sun.color),z.light=.14+.08*d+.86*f*(1-.3*o)*(1-.55*c)+l*.6,this.precip.update(t,n,z,this.renderer.domElement.height),this.envTimer-=t,this.envTimer<=0){let ht=[h.toFixed(1),Math.round(o*12),Math.round(c*12),Math.round(N*10)].join("|");(ht!==this.envKey||!this.envRT)&&(this.envKey=ht,this._captureEnv()),this.envTimer=.7}}setShadowSize(t){let e=this.sun.shadow;e.mapSize.x!==t&&(e.mapSize.set(t,t),e.map&&(e.map.dispose(),e.map=null))}_captureEnv(){let t=this.skyMat.uniforms,e=t.uDisc.value;t.uScale.value=2.1*(1-.5*(this.state.sunK||0)),t.uDisc.value=Math.min(e,4);let n=this.pmrem.fromScene(this.envScene,0,1,3e3);t.uScale.value=1,t.uGround.value.set(t.uHorizon.value.r*.13,t.uHorizon.value.g*.13,t.uHorizon.value.b*.12,1);let i=this.pmrem.fromScene(this.envScene,0,1,3e3);t.uGround.value.w=0,t.uDisc.value=e,this.envRT&&this.envRT.dispose(),this.carEnvRT&&this.carEnvRT.dispose(),this.envRT=n,this.carEnvRT=i,this.scene.environment=n.texture,this.onCarEnv&&this.onCarEnv(i.texture)}};var ps={name:"body",type:"MeshPhysicalMaterial",color:5526623,roughness:.364192,metalness:1,clearcoat:1,clearcoatRoughness:0,specularIntensity:1,specularColor:16777215,reflectivity:.49999999999999983,iridescence:0,iridescenceIOR:1.3,iridescenceThicknessRange:[100,400],envMapIntensity:1};var ST={drop:.19,forward:.16,hip:[-.39,.45,.28],foot:[-.48,.45,-.48],recline:.1},AT={color:789518,metalness:0,roughness:.3,envK:.6},Ig=[{id:"mustang",name:"Mustang '67 Đen",file:"assets/models/mustang.glb",length:4.67,flip:!0,eye:[-.39,1.08,.3],doubleSide:!0,door:/^DriverDoor/,wheels:/^(Wheel|BrakeDisc)/,mats:{Interior:AT,BlackPolished:{roughness:.18},Paint:{color:1381913,metalness:0,roughness:.42,specularIntensity:0,clearcoat:1,clearcoatRoughness:.07,envK:.4},Wheel:{clearcoat:.25}},seatMesh:/^Cube\.?00[678]/,steerShift:-.09,lamps:{head:[.839,.661,-2.06],tail:[.44,.769,2.26]},seat:ST,steer:{c:[-.385,.883,-.155],n:[0,.338,.941],r:.153,grip:{radial:.025,depth:.065,align:!0}},steerMesh:/^(Torus\.?001|Cube\.?009)/},{id:"mazda-rx-vision",name:"Mazda RX Vision Sport",file:"assets/models/mazda-rx-vision.glb",length:4.8,flip:!0,wheels:/^WHEEL_(LF|LR|RF|RR)_/,eye:[.394,1.09,.45],seat:{hip:[.394,.34,.48],foot:[.49,.26,-.58],recline:.1},steer:{c:[.394,.795,.082],n:[0,.156,.9878],r:.18},steerMesh:/^MazdaSteering_/,lamps:{head:[.74,.57,-1.99],tail:[.7,.838,2.086]},mats:{body:{color:ps.color,metalness:ps.metalness,roughness:ps.roughness,clearcoat:ps.clearcoat,clearcoatRoughness:ps.clearcoatRoughness,specularIntensity:ps.specularIntensity,specularColor:ps.specularColor,envK:ps.envMapIntensity}}}],Bn=[{id:"reed",name:"Đồng cỏ lau",icon:"🌾"},{id:"forest",name:"Đồi thông",icon:"🌲"},{id:"mountain",name:"Đường núi",icon:"⛰️"},{id:"meadow",name:"Đồi cỏ",icon:"🌿"},{id:"sea",name:"Biển",icon:"🌊"},{id:"city",name:"Phố",icon:"🏙️"}],cn=[{id:"clear",name:"Trời trong",icon:"☀️"},{id:"cloudy",name:"Nhiều mây",icon:"☁️"},{id:"windy",name:"Gió lớn",icon:"💨"},{id:"rain",name:"Mưa",icon:"🌧️"},{id:"storm",name:"Bão",icon:"⛈️"},{id:"snow",name:"Tuyết",icon:"❄️"},{id:"fog",name:"Sương mù",icon:"🌫️"},{id:"auto",name:"Tự động",icon:"🔄"}],Gn=[{id:"sunrise",name:"Bình minh",icon:"🌅",hour:6.4},{id:"noon",name:"Ban ngày",icon:"🌤️",hour:12.5},{id:"sunset",name:"Hoàng hôn",icon:"🌇",hour:17.6},{id:"night",name:"Ban đêm",icon:"🌙",hour:22.5},{id:"auto",name:"Tự động",icon:"🕒",hour:null}],He=[{id:"chase",name:"Sau xe"},{id:"low",name:"Sát mặt đường"},{id:"side",name:"Bên hông"},{id:"cockpit",name:"Trong xe"},{id:"orbit",name:"Quay quanh"},{id:"drone",name:"Từ trên cao"}],zl=[{id:"all",name:"Music + fx",icon:"🎵"},{id:"music",name:"Chỉ nhạc",icon:"🎶"},{id:"off",name:"Tắt tiếng",icon:"🔇"}],Gi=[1.4,1.8,2,2.8,3.5,4,5.6,8,11,16],Dg=Gi.indexOf(3.5),Vi=[{id:"low",name:"Low",ratio:.75,msaa:0,veg:.35,shadow:1024,refl:!1,dof:0,trees:0,view:1},{id:"good",name:"Good",ratio:1.5,msaa:4,veg:.85,shadow:2048,refl:!0,dof:36,trees:35,view:1},{id:"ultra",name:"Ultra",ratio:2,msaa:4,veg:1,shadow:4096,refl:!0,dof:48,trees:200,view:2}],Fd=Vi.findIndex(r=>r.id==="good");var Hd=512,fi=288,Gl=[.23*.85,.13*.85],Co=Gl,Fg=.014*.85;function Hg(r,t){let[e,n,i]=t.eye,s=new cl(new T(0,n,i),new T(0,-.42,-1).normalize(),.05,2.5);r.updateMatrixWorld(!0);let a=s.intersectObject(r,!0).find(l=>!(l.object.material&&l.object.material.transparent)),o=a?a.point.clone():new T(0,n-.3,i-.7);o.y+=Co[1]/2+.03,o.z+=.07;let c=new Vt().setFromAxisAngle(new T(1,0,0),-.22);return{pos:o,quat:c}}var Bl=class{constructor(){this.canvas=document.createElement("canvas"),this.canvas.width=Hd,this.canvas.height=fi,this.ctx=this.canvas.getContext("2d"),this.tex=new Rn(this.canvas),this.tex.colorSpace=ue,this.tex.anisotropy=4,this.group=new Pt;let t=new Nt(new Ei(Co[0],Co[1]),new Ye({map:this.tex,color:new et(2.2,2.2,2.2)})),e=new Nt(new re(Co[0]+Fg,Co[1]+Fg,.012*.85),new qt({color:789776,roughness:.35,metalness:.3}));e.position.z=-.0065,this.group.add(e,t),this.light=new Oi(16762506,1.1,2.4,2),this.light.position.set(0,.03,.08),this.group.add(this.light),this.t=0,this.timer=0,this.speed=0,this.clock="",this._draw()}place(t){if(!t){this.group.visible=!1;return}this.group.visible=!0,this.group.position.copy(t.pos),this.group.quaternion.copy(t.quat)}update(t,e,n){this.t+=t,this.timer-=t,this.light.intensity=1.1*(.9+.1*Math.sin(this.t*.7)),!(this.timer>0)&&(this.timer=1,this.speed=e,this.clock=n,this._draw())}_draw(){let t=this.ctx,e=this.t,n=t.createLinearGradient(0,0,0,fi);n.addColorStop(0,"#1d140d"),n.addColorStop(1,"#0d0906"),t.fillStyle=n,t.fillRect(0,0,Hd,fi),t.save(),t.beginPath(),t.rect(10,34,300,fi-44),t.clip(),t.fillStyle="#231810",t.fillRect(10,34,300,fi-44),t.strokeStyle="rgba(255,190,130,0.15)",t.lineWidth=2;let i=e*9%40;for(let c=-40;c<340;c+=40)t.beginPath(),t.moveTo(c+i*.3,34),t.lineTo(c-30+i*.3,fi),t.stroke();for(let c=34;c<fi+40;c+=40)t.beginPath(),t.moveTo(10,c+i),t.lineTo(310,c+i-12),t.stroke();t.strokeStyle="#ffa940",t.lineWidth=7,t.lineCap="round",t.beginPath();for(let c=0;c<=24;c++){let l=fi-10-c*11,h=160+Math.sin(c*.35+e*.15)*46;c===0?t.moveTo(h,l):t.lineTo(h,l)}t.stroke(),t.fillStyle="#ffffff",t.beginPath(),t.moveTo(160,fi-74),t.lineTo(148,fi-46),t.lineTo(160,fi-54),t.lineTo(172,fi-46),t.closePath(),t.fill(),t.restore(),t.fillStyle="#ffe4c8",t.font="600 20px system-ui, sans-serif",t.textBaseline="middle",t.fillText(this.clock||"--:--",14,18),t.textAlign="right",t.fillText(Math.round(this.speed)+" km/h",Hd-14,18),t.textAlign="left";let s=326,a=t.createLinearGradient(s,44,s+70,114);a.addColorStop(0,"#ff8a5c"),a.addColorStop(1,"#7b5cff"),t.fillStyle=a,t.fillRect(s,44,70,70),t.fillStyle="#ffffff",t.font="600 19px system-ui, sans-serif",t.fillText("Lo-fi Chill",s,136),t.fillStyle="#c9a27e",t.font="16px system-ui, sans-serif",t.fillText("Chill Drive Radio",s,160);let o=e/180%1;t.fillStyle="#3d2b1d",t.fillRect(s,184,170,5),t.fillStyle="#ffa940",t.fillRect(s,184,170*o,5),t.fillStyle="#ffb760";for(let c=0;c<12;c++){let l=8+26*Math.abs(Math.sin(e*2.3+c*1.7)*Math.sin(e*.9+c));t.fillRect(s+c*14,250-l,8,l)}this.tex.needsUpdate=!0}};var Vl=(r,t,e)=>Math.min(e,Math.max(t,r));function RT(r){let t=Oe.smoothstep(r.speed,.2,2),e=Math.atan((r.curvature||0)*2.7)*14*t,n=-Math.atan2(r.latVel||0,Math.max(r.speed,4))*3;return Vl(e+n,-.55,.55)}var Wl=class{constructor(t){this.root=new Pt,this.tilt=new Pt,this.root.add(this.tilt),t.add(this.root),this.loader=new Gs,this.loader.setMeshoptDecoder(Ta),this.onProgress=null,this.prepare=null,this.envMap=null,this.list=[],this.cache=new Map,this.current=null,this.token=0,this.time=0,this.pitch=0,this.roll=0,this.lastSpeed=0,this.dim={length:4.5,width:1.9,height:1.3},this.lights=new Pt,this.root.add(this.lights);let e=this.softTex=gl(),n=i=>{let s=new An(new Mn({map:e,color:i,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:tn,fog:!1}));return s.renderOrder=6,this.lights.add(s),s};this.headlights=ur(this.lights,e),this.spots=this.headlights.spots,this.headGlow=this.headlights.glows,this.tailGlow=[n(16720914),n(16720914)],this.viewer=null,this._gv=new T,this._gb=new T,this.lampLevel=0,this.brake=0,this.contact=new Nt(new Ei(1,1).rotateX(-Math.PI/2),new Ye({alphaMap:CT(),color:0,transparent:!0,opacity:.72,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-6,fog:!1})),this.contact.position.y=.06,this.contact.renderOrder=1,this.root.add(this.contact),this.cabin=new Oi(16767148,0,2.6,2),this.tilt.add(this.cabin),this.cabinLevel=0}async probe(){let t=[];for(let e of Ig){if(!e.optional){t.push(e);continue}try{let n=await fetch(e.file,{method:"HEAD"}),i=n.headers.get("content-type")||"";n.ok&&!i.includes("text/html")&&t.push(e)}catch{}}return this.list=t,t}async select(t){let e=this.list[t],n=++this.token,i=this.cache.get(e.id);if(i||(i=await this._load(e,s=>{n===this.token&&this.onProgress?.(s)}),this.cache.set(e.id,i)),n!==this.token)return!1;if(this.prepare&&!i.ready){try{await this.prepare(i.group)}catch(s){console.warn("prepare",s)}if(i.ready=!0,n!==this.token)return!1}return this.current&&this.tilt.remove(this.current.group),this.tilt.add(i.group),this.current=i,this.dim=i.dim,this.shield=i.shield,this.rearShield=i.rearShield,this._placeLights(i.dim),!0}async _load(t,e){let i=(await this.loader.loadAsync(t.file,E=>{e&&E.total&&e(E.loaded/E.total)})).scene,s=new Pt;s.add(i);let a=new Pt;if(a.add(s),t.hide){let E=[];i.traverse(b=>{t.hide.test(b.name||"")&&E.push(b)}),E.forEach(b=>b.removeFromParent())}i.rotation.x=t.rotX||0,s.updateMatrixWorld(!0);let o=new qe().setFromObject(s,!0),c=o.getSize(new T);c.x>c.z*1.02&&(i.rotation.y+=Math.PI/2),t.flip&&(i.rotation.y+=Math.PI),s.updateMatrixWorld(!0),o.setFromObject(s,!0),c=o.getSize(new T),s.scale.setScalar(t.length/c.z),s.updateMatrixWorld(!0),o.setFromObject(s,!0);let l=o.getCenter(new T);s.position.set(-l.x,-o.min.y,-l.z),a.updateMatrixWorld(!0),o.setFromObject(a,!0);let h={length:o.max.z-o.min.z,width:o.max.x-o.min.x,height:o.max.y-o.min.y};if(h.eye=t.eye||[-h.width*.2,Math.min(h.height*.8,1.15),0],h.lamps=t.lamps||xa(h),h.seat=t.seat||null,(t.seat?.drop||t.seat?.forward)&&t.seatMesh){a.updateMatrixWorld(!0);let E=new T;i.traverse(b=>{!b.isMesh||!t.seatMesh.test(b.name)||(b.getWorldPosition(E),E.y-=t.seat.drop||0,E.z-=t.seat.forward||0,b.position.copy(b.parent.worldToLocal(E)))}),a.updateMatrixWorld(!0)}t.basicMetal&&i.traverse(E=>{if(!E.isMesh||Array.isArray(E.material))return;let b=E.material;b.transmission>0||b.transparent&&b.opacity<.9||(E.material=new qt({name:b.name,color:b.color,map:b.map,side:b.side,...t.basicMetal}),b.dispose())});let u=[],f=[];i.traverse(E=>{if(!E.isMesh)return;t.steerMesh&&t.steerMesh.test(E.name)&&(E.material=kg()),t.seatMesh&&t.seatMesh.test(E.name)&&(E.material=kg(5912608,.52));let b=Array.isArray(E.material)?E.material:[E.material],w=!1;for(let C of b){if(C.transmission>0&&(C.transmission=0,C.transparent=!0,C.opacity=.32,C.depthWrite=!1,w=!0),C.transparent&&C.opacity<.9&&(w=!0),w&&!C.userData.glass&&LT(C),t.doubleSide&&!C.transparent&&(C.side=pe),t.mats&&t.mats[C.name])for(let[_,S]of Object.entries(t.mats[C.name]))_==="envK"?C.userData.envK=S:C[_]?.isColor?C[_].set(S):C[_]=S;/tail|brake|emissivered|rear.?light/i.test(C.name)&&C.emissive&&(C.emissive.set(16718346),u.push(C)),this._env(C),de(C)}E.castShadow=!w,E.receiveShadow=!0,w&&f.push(E)});let d=t.wheels?this._wheels(a,t,h):[],g=t.door?this._door(a,t):null;a.updateMatrixWorld(!0);let v=Ng(f,h),m=Ng(f,h,!0),p=PT(a,i,v),x=Hg(a,h),y=t.steer;if(y&&t.steerShift){let E=new T(...y.n),b=new T,w=[];i.traverse(C=>{t.steerMesh.test(C.name)&&C.isMesh&&w.push(C)});for(let C of w)C.getWorldPosition(b).addScaledVector(E,-t.steerShift),C.parent.worldToLocal(b),C.position.copy(b);y={...y,c:new T(...y.c).addScaledVector(E,-t.steerShift).toArray()}}let M=null;if(y&&t.steerMesh){let E=[];i.traverse(b=>{b.isMesh&&t.steerMesh.test(b.name)&&E.push(b)}),M=new Pt,M.position.fromArray(y.c),a.add(M),a.updateMatrixWorld(!0);for(let b of E)M.attach(b)}return{def:t,group:a,dim:h,wheels:d,door:g,tailMats:u,wipers:p,shield:v,rearShield:m,screen:x,steer:y,steerPivot:M,anim:null}}_env(t){t.envMap=this.envMap,t.envMapIntensity=(this.envMap?1:.5)*(t.userData.envK??1)}setEnvMap(t){this.envMap=t;for(let e of this.cache.values())e.group.traverse(n=>{if(n.isMesh)for(let i of Array.isArray(n.material)?n.material:[n.material])this._env(i)})}_door(t,e){let n=[];if(t.traverse(a=>{if(!(a===t||!e.door.test(a.name||""))){for(let o=a.parent;o&&o!==t;o=o.parent)if(e.door.test(o.name||""))return;n.push(a)}}),!n.length)return null;t.updateMatrixWorld(!0);let i=new qe;for(let a of n)i.expandByObject(a,!0);let s=new Le;s.position.set(i.min.x+.04,0,i.min.z+.06),t.add(s),t.updateMatrixWorld(!0);for(let a of n)s.attach(a);return{pivot:s,amount:0}}setDoor(t){let e=this.current?.door;if(!e)return;e.amount=t;let n=t*t*(3-2*t);e.pivot.rotation.y=-1.05*n}frontWheel(t){let e=this.current,n=null;for(let s of e?.wheels||[])(!n||s.pivot.position.z<n.pivot.position.z)&&(n=s);let i=this.dim;return n?t.set(-i.width/2+.12,n.pivot.position.y,n.pivot.position.z):t.set(-i.width/2,.33,-i.length*.32)}_wheels(t,e,n){let i=[];t.traverse(a=>{if(!(a===t||!e.wheels.test(a.name||""))){for(let o=a.parent;o&&o!==t;o=o.parent)if(e.wheels.test(o.name||""))return;i.push(a)}});let s=[];for(let a of i){let o=new qe().setFromObject(a,!0);if(o.isEmpty())continue;let c=o.getSize(new T),l=o.getCenter(new T);if(!(Math.abs(c.y-c.z)<.28*Math.max(c.y,c.z)&&c.z<n.length*.35&&c.y<n.height*.95&&c.y>n.height*.12&&l.y<n.height*.5))continue;let f=new Le;f.position.set(l.x,o.max.y-c.z/2,l.z),t.add(f),t.updateMatrixWorld(!0),f.attach(a),s.push({pivot:f,radius:c.z/2})}return s}_placeLights(t){fr(this.headlights,t);let[e,n,i]=(t.lamps||xa(t)).tail;this.tailGlow.forEach((a,o)=>a.position.set(o?e:-e,n,i+.03)),this.contact.scale.set(t.width*1.12,1,t.length*1.06);let s=this.current?.screen;s?this.cabin.position.copy(s.pos).add(new T(0,.02,.12)):this.cabin.position.set(t.eye[0]*.5,t.eye[1]-.2,t.eye[2]-.6)}setLights(t){this.lampLevel=t}_face(t,e){return this.viewer?(t.getWorldPosition(this._gv),this._gv.subVectors(this.viewer.position,this._gv).normalize(),this._gb.set(0,0,e).transformDirection(this.root.matrixWorld),Oe.smoothstep(this._gv.dot(this._gb),-.05,.35)):1}setWiper(t){if(!(!this.current||t===this.current.wiperTh)){this.current.wiperTh=t;for(let e of this.current.wipers)e(t)}}update(t,e){this.time+=t,this.root.position.copy(e.pos),this.root.rotation.set(e.pitch||0,e.yaw,0,"YXZ");let n=(e.speed-this.lastSpeed)/Math.max(t,.001);this.brakeAcc=n,this.lastSpeed=e.speed;let i=1-Math.exp(-t*4);this.pitch+=(Vl(n*.004,-.04,.04)-this.pitch)*i,this.roll+=(Vl(-e.latVel*.012,-.05,.05)-this.roll)*i;let s=Vl(e.speed/20,0,1);this.tilt.rotation.set(this.pitch,0,this.roll);let a=1-(this.calm||0);this.tilt.position.y=(.005*Math.sin(this.time*7.3)+.004*Math.sin(this.time*12.1))*s*a;let o=(e.rough||0)*s*a;if(o>.001&&(this.tilt.position.y+=o*(.014*Math.sin(this.time*19.3)+.01*Math.sin(this.time*31.7+1.1)),this.tilt.rotation.z+=o*(.006*Math.sin(this.time*13.1)+.004*Math.sin(this.time*23.9)),this.tilt.rotation.x+=o*.004*Math.sin(this.time*17.7+.4)),this.current){let f=RT(e);this.steerAngle=(this.steerAngle||0)+(f-(this.steerAngle||0))*(1-Math.exp(-t*8)),this.current.steerPivot&&this.current.steerPivot.quaternion.setFromAxisAngle(new T(...this.current.steer.n).normalize(),this.steerAngle);for(let d of this.current.wheels)d.pivot.rotation.x-=e.speed*t/d.radius}let c=this.lampLevel;Ns(this.headlights,this.root,this.viewer,c);let l=this.brakeAcc||0;this.brake+=((l<-1.2?1:0)-this.brake)*(1-Math.exp(-t*8));let h=.3+.7*c+.6*this.brake,u=this._face(this.tailGlow[0],1);this.tailGlow.forEach(f=>{f.material.opacity=Math.min(.8,.45*h)*u;let d=2+1.3*h;f.scale.set(d*1.35,d*.85,1),f.visible=u>.01});for(let f of this.current?.tailMats||[])f.emissiveIntensity=.8+2.6*h;this.cabin.intensity=this.cabinLevel}};function CT(){let r=document.createElement("canvas");r.width=128,r.height=256;let t=r.getContext("2d");t.filter="blur(14px)",t.fillStyle="#fff",t.beginPath(),t.roundRect?t.roundRect(26,30,76,196,26):t.rect(26,30,76,196),t.fill(),t.filter="blur(6px)",t.globalAlpha=.5,t.fillRect(36,44,56,168);let e=new Rn(r);return e.colorSpace=Sn,e}function Ng(r,t,e=!1){let[n,i,s]=t.eye,a=new T(n,i,s),o=new T,c=new T,l=new T,h=new T,u=new T,f=new T,d=new T,g=[],v=0,m=e?r.filter(E=>!/light|lamp/i.test(E.name)&&/windscreen.*rear|rear.*windscreen|rear.*window|back.*glass/i.test(E.name)):[];for(let E of m.length?m:r){let b=E.geometry.attributes.position,w=E.geometry.index,C=(w?w.count:b.count)/3;for(let _=0;_<C;_++){let S=w?w.getX(_*3):_*3,I=w?w.getX(_*3+1):_*3+1,F=w?w.getX(_*3+2):_*3+2;if(o.fromBufferAttribute(b,S).applyMatrix4(E.matrixWorld),c.fromBufferAttribute(b,I).applyMatrix4(E.matrixWorld),l.fromBufferAttribute(b,F).applyMatrix4(E.matrixWorld),u.copy(o).add(c).add(l).multiplyScalar(1/3),!m.length&&((e?u.z<s+.35:u.z>s-.25)||u.y<i-.3))continue;h.subVectors(c,o).cross(l.clone().sub(o));let N=h.length()/2;N<1e-7||(h.normalize(),h.dot(a.clone().sub(u))<0&&h.negate(),!(!m.length&&(Math.abs(h.x)>.5||(e?h.z>-.25:h.z<.25||h.y>-.2)))&&(f.addScaledVector(h,N),d.addScaledVector(u,N),v+=N,g.push(o.clone(),c.clone(),l.clone())))}}if(e&&v<.1)return null;let p={rear:e,center:new T,normal:new T,right:new T,up:new T,bounds:[0,0,0,0]};if(v<.1?(p.center.set(0,i+.1,s-.62),p.normal.set(0,-.6,.8),p.bounds=[-t.width*.38,t.width*.38,-.3,.3]):(p.center.copy(d).multiplyScalar(1/v),p.normal.copy(f).normalize()),p.right.set(1,0,0).addScaledVector(p.normal,-p.normal.x).normalize(),p.up.crossVectors(p.normal,p.right),p.up.y<0&&p.up.negate(),e)return p.geometry=new At().setFromPoints(g),p.geometry.setAttribute("glassUV",new yt(g.flatMap(E=>{let b=E.clone().sub(p.center);return[b.dot(p.right),b.dot(p.up)]}),2)),p;if(g.length){let E=[1e9,-1e9,1e9,-1e9];for(let b of g){b.sub(p.center);let w=b.dot(p.right),C=b.dot(p.up);E[0]=Math.min(E[0],w),E[1]=Math.max(E[1],w),E[2]=Math.min(E[2],C),E[3]=Math.max(E[3],C)}p.bounds=E}let x=(p.bounds[1]-p.bounds[0])/2,y=(p.bounds[0]+p.bounds[1])/2,M=p.bounds[2]+.03;return p.wipers=[{u:y-x*.76,v:M,rest:0,sign:1,r0:x*.1,r1:x*.68},{u:y+x*.76,v:M,rest:Math.PI,sign:-1,r0:x*.1,r1:x*.68}],p.sweep=1.62,p}function PT(r,t,e){let n=[];t.traverse(a=>{/^WiperBladeArm\d*$/i.test(a.name)&&!a.isMesh&&n.push(a)});let i=[],s=e.normal;if(n.length){let a=[];for(let o of n){let c=[],l=[];if(o.children.forEach(F=>F.traverse(N=>{if(!N.isMesh)return;let L=N.geometry.attributes.position,P=F.isMesh?c:l;for(let D=0;D<L.count;D++)P.push(new T().fromBufferAttribute(L,D).applyMatrix4(N.matrixWorld))})),!c.length||!l.length)continue;let h=l.reduce((F,N)=>F.add(N),new T).multiplyScalar(1/l.length),u=c[0];for(let F of c)F.distanceToSquared(h)>u.distanceToSquared(h)&&(u=F);let f=c.filter(F=>F.distanceTo(u)<.03),d=f.reduce((F,N)=>F.add(N),new T).multiplyScalar(1/f.length),g=d.clone().sub(e.center),v=g.dot(e.right),m=g.dot(e.up),p=h.clone().sub(d),x=Math.atan2(p.dot(e.up),p.dot(e.right)),y=new at(Math.cos(x),Math.sin(x)),M=1e9,E=0;for(let F of l){let N=F.clone().sub(d),L=N.dot(e.right)*y.x+N.dot(e.up)*y.y;M=Math.min(M,L),E=Math.max(E,L)}let b=Math.cos(x)>=0?1:-1;o.updateMatrixWorld(!0);let w=o.matrixWorld.clone(),C=o.parent.matrixWorld.clone().invert();o.matrixAutoUpdate=!1;let _=new bt,S=new bt,I=new bt().makeTranslation(-d.x,-d.y,-d.z);_.makeTranslation(d.x,d.y,d.z),i.push(F=>{S.makeRotationAxis(s,b*F),o.matrix.copy(C).multiply(_).multiply(S).multiply(I).multiply(w),o.matrixWorldNeedsUpdate=!0}),a.push({u:v,v:m,rest:x,sign:b,r0:Math.max(0,M),r1:E})}if(a.length){for(a.sort((o,c)=>o.u-c.u);a.length<2;)a.push(a[0]);e.wipers=a.slice(0,2)}}if(!i.length){let a=new qt({color:1315862,roughness:.55,metalness:.4}),o=new bt().makeBasis(e.right,e.up,s);for(let c of e.wipers){let l=new Pt;l.position.copy(e.center).addScaledVector(e.right,c.u).addScaledVector(e.up,c.v).addScaledVector(s,-.02),l.quaternion.setFromRotationMatrix(o);let h=new Pt;l.add(h);let u=new Nt(new re(c.r1*.97,.008,.008),a);u.position.set(c.r1*.485,0,-.014);let f=new Nt(new re(c.r1-c.r0,.012,.012),a);f.position.set((c.r0+c.r1)/2,0,-.004),h.add(u,f),h.rotation.z=c.rest,r.add(l),i.push(d=>{h.rotation.z=c.rest+c.sign*d})}}return i}var Nd=new Map;function kg(r=1249810,t=.58){let e=r+"|"+t;if(Nd.has(e))return Nd.get(e);let n=new qt({name:"Leather",color:r,roughness:t,metalness:0});return n.onBeforeCompile=i=>{i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
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
        roughnessFactor = clamp(roughnessFactor + (lNoise(vLP * 330.0) - 0.5) * 0.25, 0.3, 1.0);`)},n.customProgramCacheKey=()=>"leather",Nd.set(e,n),n}function LT(r){r.userData.glass=!0,r.metalness=0,r.roughness=Math.min(r.roughness,.04),r.depthWrite=!1,r.onBeforeCompile=t=>{t.fragmentShader=t.fragmentShader.replace("#include <opaque_fragment>",`#include <opaque_fragment>
      gl_FragColor.a = clamp(gl_FragColor.a + dot(reflectedLight.indirectSpecular + reflectedLight.directSpecular, vec3(0.3, 0.59, 0.11)) * 1.4, 0.0, 0.94);`)},r.customProgramCacheKey=()=>"glass-reflect"}var Sa=(r,t,e)=>Math.min(e,Math.max(t,r)),Xl=16,jl=35,IT=(r,t,e)=>{let n=((t-r+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI;return r+n*e},Ug={chase:{distance:6.2,speedBack:1.4,cineBack:1.8,height:2.3,carHeight:.4,lookAhead:13,lookHeight:1.75,slopeLook:10,follow:5,lookFollow:7,near:.3,focal:16,aperture:3.5},low:{distance:4.2,height:.95,lookAhead:10,lookHeight:1,slopeLook:10,follow:5,lookFollow:7,near:.3,focal:24,aperture:3.5},side:{distance:23.2,height:4.35,lookHeight:.42,follow:9,lookFollow:12,near:.3,focal:24,aperture:1.8},cockpit:{eyeSide:0,eyeHeight:0,eyeForward:0,pitch:.24,lookDistance:30,follow:9,lookFollow:9,near:.04,focal:24,aperture:3.5},orbit:{radius:30,height:7.5,heightWave:3,waveRate:2,speed:.13,lookHeight:.8,follow:5,lookFollow:7,near:.3,focal:24,aperture:2.8},drone:{distance:15,height:13,lookAhead:6,lookHeight:.5,follow:3.5,lookFollow:7,near:.3,focal:24,aperture:3.5}},ql=class{constructor(t){this.camera=t,this.mode=0,this.yaw=0,this.orbit=.9,this.relP=new T,this.relL=new T,this.fov=60,this.first=!0,this.transition=null,this.cine=0,this.intro=-1,this._p=new T,this._l=new T,this._f=new T,this._r=new T,this._cp=new T,this._cl=new T,this._dl=new T,this._eye=new T,this.eyeAt=null,this.look={yaw:0,pitch:0,hold:!1,idle:0},this.sideSign=0,this.sidePref=0,this.sideDist=null,this.orbitR=null,this.tune=structuredClone(Ug),this.focal=this.focalS=this.focalEff=24,this.aperture=this.apertureS=3.5}zoomBy(t){this.focal=Sa(this.focal/t,Xl,jl),this.tune[He[this.mode].id].focal=this.focal}fovFor(t){let e=Math.atan(18/t),n=this.camera.aspect||1.6;return(n>=1?2*Math.atan(Math.tan(e)/n):2*e)*180/Math.PI}lookBy(t,e){let n=this.look;n.yaw=Math.atan2(Math.sin(n.yaw-t),Math.cos(n.yaw-t)),n.pitch=Sa(n.pitch+e,-1.2,1.2)}get name(){return He[this.mode].name}resetTune(t){this.tune[t]=structuredClone(Ug[t]),this.setMode(this.mode)}startIntro(){this.intro=0,this.first=!0}setMode(t){let e=t%He.length;!this.first&&e!==this.mode&&(this.transition={elapsed:0,duration:2,fromP:this.relP.clone(),fromL:this.relL.clone(),fromFocal:this.focalS,fromAperture:this.apertureS,fromNear:this.camera.near}),this.mode=e,this.intro=-1,this.sideSign=0,this.look.yaw=this.look.pitch=0;let n=He[this.mode].id,i=this.tune[n];this.focal=i.focal,this.aperture=i.aperture,this.transition||(this.focalS=this.focal,this.apertureS=this.aperture,this.camera.near=i.near,this.camera.updateProjectionMatrix())}update(t,e){let n=He[this.mode].id,{pos:i,speed:s,dim:a}=e;this.yaw=this.first?e.yaw:IT(this.yaw,e.yaw,1-Math.exp(-t*3));let o=(L,P)=>P.set(-Math.sin(L),0,-Math.cos(L)),c=(L,P)=>P.set(Math.cos(L),0,-Math.sin(L)),l=o(this.yaw,this._f),h=new T(-Math.sin(e.yaw),0,-Math.cos(e.yaw)),u=c(e.yaw,this._r),f=this._p,d=this._l,g=5,v=7,m=!1,p=Sa(s/45,0,1),x=e.fx||0,y=Math.tan(e.pitch||0),M=this.cine,E=this.tune[n];switch(g=E.follow,v=E.lookFollow,n){case"chase":f.copy(i).addScaledVector(l,-(a.length*.5+E.distance+E.speedBack*x+E.cineBack*M)).setY(i.y+E.height+a.height*E.carHeight),d.copy(i).addScaledVector(l,E.lookAhead).setY(i.y+E.lookHeight+y*E.slopeLook);break;case"low":f.copy(i).addScaledVector(l,-(a.length*.5+E.distance)).setY(i.y+E.height),d.copy(i).addScaledVector(l,E.lookAhead).setY(i.y+E.lookHeight+y*E.slopeLook);break;case"side":{this.sideSign||(this.sideSign=this.sidePref||e.side||1),f.copy(i).addScaledVector(u,this.sideSign*(this.sideDist??E.distance)).setY(i.y+E.height),d.copy(i).setY(i.y+a.height*E.lookHeight);break}case"cockpit":{let[L,P,D]=a.eye;this.eyeAt&&this.eyeAt(this._eye)?f.copy(this._eye):f.copy(i).addScaledVector(u,L).addScaledVector(h,-D).setY(i.y+P-y*D),f.addScaledVector(u,E.eyeSide).addScaledVector(h,E.eyeForward),f.y+=E.eyeHeight;let U=this.cockpitPitch==null?E.pitch:this.cockpitPitch+E.pitch-.24;d.copy(f).addScaledVector(h,E.lookDistance).setY(f.y-E.lookDistance*Math.tan(U)+y*E.lookDistance),m=!0;break}case"orbit":this.orbit+=t*E.speed;{let L=this.orbitR??E.radius;f.set(i.x+Math.cos(this.orbit)*L,i.y+E.height+Math.sin(this.orbit*E.waveRate)*E.heightWave,i.z+Math.sin(this.orbit)*L)}d.copy(i).setY(i.y+E.lookHeight);break;case"drone":f.copy(i).addScaledVector(l,-E.distance).setY(i.y+E.height),d.copy(i).addScaledVector(l,E.lookAhead).setY(i.y+E.lookHeight);break}this.focalEff=this.focalS*(1-.04*p);let b=this.fovFor(this.focalEff),w=!1;if(this.intro>=0&&n==="chase"){this.intro+=t;let L=Math.min(1,this.intro/6.5),P=L*L*(3-2*L);if(L>=1)this.intro=-1;else{w=!0;let D=this.tune.chase,U=a.length*.5+D.distance+D.cineBack*M,O=.5+(Math.PI-.5)*P,G=D.distance+(U-D.distance)*P,j=i.y+.65+(D.height+a.height*D.carHeight-.65)*P,J=d.clone();f.copy(i).addScaledVector(h,Math.cos(O)*G).addScaledVector(u,(e.side||1)*Math.sin(O)*Math.min(G,3.4)).setY(j),d.copy(i).setY(i.y+.7).lerp(J,P),b=36+(b-36)*P}}else this.intro>=0&&(this.intro=-1);let C=f.sub(i),_=d.sub(i),S=!!this.transition&&!w;if(S){let L=this.transition,P=Sa((L.elapsed+=t)/L.duration,0,1),D=P*P*(3-2*P);this.relP.lerpVectors(L.fromP,C,D),this.relL.lerpVectors(L.fromL,_,D),this.focalS=Oe.lerp(L.fromFocal,this.focal,D),this.apertureS=Oe.lerp(L.fromAperture,this.aperture,D),this.camera.near=Oe.lerp(L.fromNear,E.near,D),P>=1&&(this.transition=null)}else{let L=1-Math.exp(-t*g),P=1-Math.exp(-t*v);m&&(L=P=1),(this.first||w)&&(L=P=1),this.relP.lerp(C,L),this.relL.lerp(_,P),this.focalS+=(this.focal-this.focalS)*(1-Math.exp(-t*8)),this.apertureS+=(this.aperture-this.apertureS)*(1-Math.exp(-t*8)),this.camera.near=E.near}this.focalEff=this.focalS*(1-.04*p),w||(b=this.fovFor(this.focalEff)),this.fov+=(b-this.fov)*(this.first||this.transition?1:1-Math.exp(-t*3)),this.first=!1;let I=this.look,F=this._cp.copy(this.relP),N=this._cl.copy(this.relL);if(Math.abs(I.yaw)>1e-4||Math.abs(I.pitch)>1e-4)if(m){let L=this._dl.copy(N).sub(F),P=L.length(),D=Math.atan2(L.x,L.z)-I.yaw,U=Sa(Math.atan2(L.y,Math.hypot(L.x,L.z))+I.pitch,-1.2,1.2);L.set(Math.sin(D)*Math.cos(U),Math.sin(U),Math.cos(D)*Math.cos(U)).multiplyScalar(P),N.copy(F).add(L)}else{let L=Math.cos(I.yaw),P=Math.sin(I.yaw);F.set(F.x*L+F.z*P,F.y,-F.x*P+F.z*L),N.set(N.x*L+N.z*P,N.y,-N.x*P+N.z*L);let D=Math.hypot(F.x,F.z),U=F.length(),O=Sa(Math.atan2(F.y,D)+I.pitch,.03,1.35),G=U*Math.cos(O)/Math.max(D,.001);F.set(F.x*G,U*Math.sin(O),F.z*G)}if(this.camera.position.copy(i).add(F),this.collide&&!m&&this.collide(i,this.camera.position,t),this.groundAt){let L=this.groundAt(this.camera.position.x,this.camera.position.z)+.6;this.camera.position.y<L&&(this.camera.position.y=L)}this._l.copy(i).add(N),this.camera.lookAt(this._l),(Math.abs(this.camera.fov-this.fov)>.01||S)&&(this.camera.fov=this.fov,this.camera.updateProjectionMatrix())}};var Yl=r=>440*Math.pow(2,(r-69)/12),mr=(r,t)=>r+Math.random()*(t-r),kd=r=>r[Math.floor(Math.random()*r.length)],Kl=(r,t,e)=>Math.min(e,Math.max(t,r)),Og=[[{r:41,n:[53,57,60,64]},{r:40,n:[52,55,59,62]},{r:38,n:[50,53,57,60]},{r:36,n:[52,55,59,62]}],[{r:38,n:[50,53,57,60]},{r:43,n:[53,55,59,62]},{r:36,n:[52,55,59,62]},{r:45,n:[55,57,60,64]}],[{r:36,n:[52,55,59,62]},{r:45,n:[55,57,60,64]},{r:38,n:[50,53,57,60]},{r:43,n:[53,55,59,62]}],[{r:45,n:[55,57,60,64]},{r:38,n:[50,53,57,60]},{r:43,n:[53,55,59,62]},{r:36,n:[52,55,59,62]}]],zg=[[0,6,10],[0,7,10,14],[0,10],[0,3,8,11]],DT=[72,74,76,79,81,84],Jl=class{constructor(){this.ctx=null,this.mode=0,this.bpm=74,this.step=0,this.bar=0,this.prog=Og[0],this.pattern=zg[0],this.lastMel=-99}async start(){if(this.ctx){await this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;this.master=e.createGain(),this.master.gain.value=0;let n=e.createDynamicsCompressor();n.threshold.value=-16,n.ratio.value=3,this.master.connect(n).connect(e.destination),this.musicGain=e.createGain();let i=e.createBiquadFilter();i.type="lowpass",i.frequency.value=4800,i.Q.value=.4,this.musicGain.connect(i).connect(this.master),this.pianoBus=e.createGain();let s=e.createBiquadFilter();s.type="lowpass",s.frequency.value=2400,this.pianoBus.connect(s).connect(this.musicGain),this.drumBus=e.createGain();let a=e.createBiquadFilter();a.type="lowpass",a.frequency.value=3400,this.drumBus.connect(a).connect(this.musicGain);let o=e.sampleRate*2.6,c=e.createBuffer(2,o,e.sampleRate);for(let g=0;g<2;g++){let v=c.getChannelData(g);for(let m=0;m<o;m++)v[m]=(Math.random()*2-1)*Math.pow(1-m/o,3.2)}this.reverb=e.createConvolver(),this.reverb.buffer=c;let l=e.createGain();l.gain.value=.38,this.reverbIn=e.createGain(),this.reverbIn.connect(this.reverb).connect(l).connect(this.musicGain),s.connect(this.reverbIn),this.echo=e.createDelay(2),this.echo.delayTime.value=60/this.bpm*.75;let h=e.createGain();h.gain.value=.34;let u=e.createBiquadFilter();u.type="lowpass",u.frequency.value=1800,this.echo.connect(u).connect(h).connect(this.echo),u.connect(this.musicGain),this.wow=e.createOscillator(),this.wow.frequency.value=.55,this.wowGain=e.createGain(),this.wowGain.gain.value=9,this.wow.connect(this.wowGain),this.wow.start();let f=e.createBuffer(1,e.sampleRate*2,e.sampleRate),d=f.getChannelData(0);for(let g=0;g<d.length;g++)d[g]=Math.random()*2-1;this.noise=f,this._vinyl(),this._ambient(),this.nextTime=e.currentTime+.15,this.timer=setInterval(()=>this._tick(),50),document.addEventListener("visibilitychange",()=>{document.hidden?e.suspend():this.mode!==2&&e.resume()}),this.setMode(this.mode)}setMode(t){if(this.mode=t,!this.ctx)return;let e=this.ctx.currentTime;this.master.gain.setTargetAtTime(t===2?0:.9,e,.4)}_src(t,e=!0){let n=this.ctx.createBufferSource();return n.buffer=t,n.loop=e,n.loopStart=Math.random(),n}_vinyl(){let t=this.ctx,e=t.sampleRate*4,n=t.createBuffer(1,e,t.sampleRate),i=n.getChannelData(0);for(let c=0;c<e;c++)i[c]=(Math.random()*2-1)*.012;for(let c=0;c<70;c++){let l=Math.floor(Math.random()*(e-10));i[l]+=mr(.25,.8)*(Math.random()<.5?-1:1),i[l+1]-=mr(.1,.4)}let s=t.createBufferSource();s.buffer=n,s.loop=!0;let a=t.createBiquadFilter();a.type="highpass",a.frequency.value=1300;let o=t.createGain();o.gain.value=.16,s.connect(a).connect(o).connect(this.musicGain),s.start()}_ambient(){let t=this.ctx;this.ambGain=t.createGain(),this.ambGain.gain.value=1,this.ambGain.connect(this.master),this.outLp=t.createBiquadFilter(),this.outLp.type="lowpass",this.outLp.frequency.value=2e4,this.outGain=t.createGain(),this.outGain.gain.value=1,this.outGain.connect(this.outLp).connect(this.ambGain);let e=(g,v,m)=>{let p=this._src(this.noise),x=t.createBiquadFilter();x.type=g,x.frequency.value=v,x.Q.value=m;let y=t.createGain();return y.gain.value=0,p.connect(x).connect(y).connect(this.outGain),p.start(),y};this.rainG=e("bandpass",2200,.5),this.windG=e("lowpass",420,.7),this.tireG=e("lowpass",750,.6);let n=t.createOscillator();n.frequency.value=.13,this.gustG=t.createGain(),this.gustG.gain.value=0,n.connect(this.gustG).connect(this.windG.gain),n.start(),this.engLp=t.createBiquadFilter(),this.engLp.type="lowpass",this.engLp.frequency.value=260,this.engLp.Q.value=1.2,this.engG=t.createGain(),this.engG.gain.value=0,this.eng=[t.createOscillator(),t.createOscillator(),t.createOscillator()],this.eng[0].type="sawtooth",this.eng[1].type="triangle",this.eng[2].type="square";let i=t.createGain();i.gain.value=.35,this.eng[0].connect(this.engLp),this.eng[1].connect(this.engLp),this.eng[2].connect(i).connect(this.engLp),this.eng.forEach(g=>{g.frequency.value=40,g.start()}),this.engLp.connect(this.engG).connect(this.ambGain);let s=this._src(this.noise);this.exBp=t.createBiquadFilter(),this.exBp.type="bandpass",this.exBp.Q.value=2.2,this.exBp.frequency.value=150,this.exG=t.createGain(),this.exG.gain.value=0,s.connect(this.exBp).connect(this.exG).connect(this.ambGain),s.start(),this.rpm=900,this.load=0,this._lastV=0,this._lastT=0;let a=t.sampleRate,o=a*4,c=t.createBuffer(1,o,a),l=c.getChannelData(0);for(let g=0;g<1400;g++){let v=Math.floor(Math.random()*o),m=.08+Math.random()*Math.random()*.5,p=1800+Math.random()*3800,x=a*(.0012+Math.random()*.0025),y=a*(.004+Math.random()*.008);for(let M=0;M<a*.03;M++)l[(v+M)%o]+=m*((Math.random()*2-1)*Math.exp(-M/x)+.5*Math.sin(6.2832*p*M/a)*Math.exp(-M/y))}let h=t.createBufferSource();h.buffer=c,h.loop=!0;let u=t.createBiquadFilter();u.type="highpass",u.frequency.value=700,this.glassG=t.createGain(),this.glassG.gain.value=0,h.connect(u).connect(this.glassG).connect(this.ambGain),h.start();let f=this._src(this.noise),d=t.createBiquadFilter();d.type="lowpass",d.frequency.value=900,this.roofG=t.createGain(),this.roofG.gain.value=0,f.connect(d).connect(this.roofG).connect(this.ambGain),f.start()}setAmbient({speed:t,rain:e,snow:n,wind:i=0,dark:s=0,fx:a=0,inCar:o=!1}){if(!this.ctx)return;let c=this.ctx.currentTime,l=.25,h=this.mode===0?1:0;this.ambGain.gain.setTargetAtTime(h,c,.4),this.outGain.gain.setTargetAtTime(o?.4:1,c,.3),this.outLp.frequency.setTargetAtTime(o?1600:2e4,c,.3),this.glassG.gain.setTargetAtTime(o?e*.08*(1+.6*s):0,c,.3),this.roofG.gain.setTargetAtTime(o?e*.02*(1+s):0,c,.3),this.rainG.gain.setTargetAtTime(e*.08*(1+.6*s),c,l),this.windG.gain.setTargetAtTime(.012+t*.0016+n*.05+i*i*.1+a*.085,c,l),this.gustG.gain.setTargetAtTime(i*i*.07,c,l),this.tireG.gain.setTargetAtTime(Math.min(t*.0011,.05)*(1+e),c,l);let u=Math.min(.2,Math.max(.001,c-this._lastT));this._lastT=c;let f=(t-this._lastV)/u;this._lastV=t,this.load+=(Math.max(0,Math.min(1,f/4))-this.load)*Math.min(1,u*3);let d=[400,240,165,125,100,82],g=2200+this.load*3600;this.gear??(this.gear=0),t*d[this.gear]>g&&this.gear<5?this.gear++:this.gear>0&&t*d[this.gear-1]<g*.8&&this.gear--;let v=Math.max(850,t*d[this.gear]);this.rpm+=(v-this.rpm)*Math.min(1,u*6);let m=Math.min(1,(this.rpm-850)/5450),p=this.rpm/15;this.eng[0].frequency.setTargetAtTime(p,c,.06),this.eng[1].frequency.setTargetAtTime(p*2,c,.06),this.eng[2].frequency.setTargetAtTime(p*.5,c,.06);let x=Math.min(1,t/50);this.engLp.frequency.setTargetAtTime(220+m*900+this.load*900+x*600,c,.08),this.engG.gain.setTargetAtTime(.02+m*.03+this.load*.035+x*.05,c,.1),this.exBp.frequency.setTargetAtTime(p*2,c,.06),this.exG.gain.setTargetAtTime((.01+x*.07)*(.4+.6*m)+this.load*.05,c,.1)}passDur(t){return Kl(2.8-t*.03,.8,2.6)}passBy(t,e=0,n=3){if(!this.ctx||this.mode!==0)return;let i=this.ctx,s=i.currentTime,a=this.passDur(t),o=s+a*.5,c=Kl(.12+t/45,.12,1)/(1+.12*Math.max(0,n-2)),l=i.createStereoPanner();l.pan.setValueAtTime(e*.4,s),l.pan.linearRampToValueAtTime(e,o),l.pan.linearRampToValueAtTime(e*.5,s+a),l.connect(this.outGain);let h=this._src(this.noise,!0),u=i.createBiquadFilter();u.type="bandpass",u.Q.value=.7,u.frequency.setValueAtTime(400+t*10,s),u.frequency.linearRampToValueAtTime(900+t*22,o),u.frequency.exponentialRampToValueAtTime(260+t*5,s+a);let f=i.createGain();f.gain.setValueAtTime(1e-4,s),f.gain.exponentialRampToValueAtTime(.16*c,o),f.gain.exponentialRampToValueAtTime(1e-4,s+a),h.connect(u).connect(f).connect(l),h.start(s),h.stop(s+a+.05);let d=i.createOscillator();d.type="sawtooth";let g=55+t*1.1,v=Math.min(.25,t/343);d.frequency.setValueAtTime(g*(1+v),s),d.frequency.setValueAtTime(g*(1+v),o-a*.08),d.frequency.exponentialRampToValueAtTime(g*(1-v),o+a*.12);let m=i.createBiquadFilter();m.type="lowpass",m.frequency.value=320+t*6;let p=i.createGain();p.gain.setValueAtTime(1e-4,s),p.gain.exponentialRampToValueAtTime(.07*c,o),p.gain.exponentialRampToValueAtTime(1e-4,s+a),d.connect(m).connect(p).connect(l),d.start(s),d.stop(s+a+.05)}horn(t=0,e=1){if(!this.ctx)return;let n=this.ctx,i=n.currentTime,s=n.createStereoPanner();s.pan.value=Math.max(-1,Math.min(1,t));let a=n.createBiquadFilter();a.type="lowpass",a.frequency.value=2400,a.connect(s).connect(this.outGain);for(let[o,c]of[[0,.16],[.24,.22]]){let l=n.createGain(),h=i+o;l.gain.setValueAtTime(1e-4,h),l.gain.exponentialRampToValueAtTime(.09*e,h+.015),l.gain.setValueAtTime(.09*e,h+c-.03),l.gain.exponentialRampToValueAtTime(1e-4,h+c),l.connect(a);for(let u of[415,498]){let f=n.createOscillator();f.type="square",f.frequency.value=u,f.connect(l),f.start(h),f.stop(h+c+.02)}}}setSiren(t,e,n=0){if(!this.ctx)return;let i=this.ctx,s=i.currentTime;this.sirens||(this.sirens={});let a=this.sirens[t];if(!a){if(e<=0)return;let c=i.createOscillator();c.type="square";let l=i.createOscillator();l.type="sine";let h=i.createBiquadFilter();h.type="lowpass",h.frequency.value=2600;let u=i.createGain();u.gain.value=0;let f=i.createStereoPanner(),d=i.createGain();d.gain.value=.6,c.connect(h),l.connect(d).connect(h),h.connect(u).connect(f).connect(this.outGain),c.start(),l.start(),a=this.sirens[t]={o:c,o2:l,g:u,p:f}}let o;t==="police"?o=650+700*(.5-.5*Math.cos(s*Math.PI/2)):o=Math.floor(s/.65)%2?770:960,a.o.frequency.setTargetAtTime(o,s,t==="police"?.05:.008),a.o2.frequency.setTargetAtTime(o*2.01,s,t==="police"?.05:.008),a.g.gain.setTargetAtTime(.11*Math.max(0,Math.min(1,e)),s,.25),a.p.pan.setTargetAtTime(Math.max(-1,Math.min(1,n)),s,.1)}setWater(t,e=0){if(!this.ctx)return;let n=this.ctx,i=n.currentTime;if(!this.waterG){if(t<=.001)return;let s=n.sampleRate,a=s*4,o=n.createBuffer(1,a,s),c=o.getChannelData(0),l=0;for(let f=0;f<a;f++)l=l*.985+(Math.random()*2-1)*.06,c[f]=l*.55+(Math.random()*2-1)*.045;for(let f=0;f<1500;f++){let d=Math.floor(Math.random()*a),g=380*Math.pow(5,Math.random()),v=s*(.003+Math.random()*.009),m=.05+Math.random()*Math.random()*.22,p=0;for(let x=0;x<v*3;x++)p+=6.2832*g*(1+.7*x/v)/s,c[(d+x)%a]+=m*Math.sin(p)*Math.exp(-x/v)}for(let f=0;f<2e3;f++){let d=f/2e3;c[f]=c[f]*d+c[a-2e3+f]*(1-d)}let h=n.createBufferSource();h.buffer=o,h.loop=!0,h.loopEnd=(a-2e3)/s;let u=n.createBiquadFilter();u.type="highpass",u.frequency.value=110,this.waterPan=n.createStereoPanner(),this.waterG=n.createGain(),this.waterG.gain.value=0,h.connect(u).connect(this.waterG).connect(this.waterPan).connect(this.outGain),h.start()}this.waterG.gain.setTargetAtTime(Kl(t,0,1)*.3,i,.35),this.waterPan.pan.setTargetAtTime(Kl(e,-1,1),i,.25)}splash(t=1){if(!this.ctx||this.mode!==0)return;let e=this.ctx,n=e.currentTime,i=.35+.45*Math.min(1,t),s=this._src(this.noise,!0),a=e.createBiquadFilter();a.type="bandpass",a.Q.value=.6,a.frequency.setValueAtTime(900+900*t,n),a.frequency.exponentialRampToValueAtTime(500,n+i);let o=e.createGain();o.gain.setValueAtTime(1e-4,n),o.gain.exponentialRampToValueAtTime(.22*t,n+.03),o.gain.exponentialRampToValueAtTime(1e-4,n+i),s.connect(a).connect(o).connect(this.outGain),s.start(n),s.stop(n+i+.05)}thunder(t=1.5,e=1){if(!this.ctx||this.mode!==0)return;let n=this.ctx,i=n.currentTime+t,s=n.sampleRate*5,a=n.createBuffer(1,s,n.sampleRate),o=a.getChannelData(0),c=0;for(let f=0;f<s;f++)c=(c+(Math.random()*2-1)*.06)/1.02,o[f]=c*3.5;let l=n.createBufferSource();l.buffer=a;let h=n.createBiquadFilter();h.type="lowpass",h.frequency.setValueAtTime(900,i),h.frequency.exponentialRampToValueAtTime(110,i+4);let u=n.createGain();u.gain.setValueAtTime(1e-4,i),u.gain.linearRampToValueAtTime(.9*e,i+.12),u.gain.setTargetAtTime(1e-4,i+.3,1.1),l.connect(h).connect(u).connect(this.outGain),l.start(i),l.stop(i+5),this._noiseHit(i,.25,"bandpass",700,.3*e,this.outGain)}_tick(){let t=this.ctx;if(!t||t.state!=="running")return;let e=60/this.bpm/4;for(;this.nextTime<t.currentTime+.3;){let n=this.step%2?e*.2:0;this._step(this.step,this.nextTime+n),this.nextTime+=e,++this.step===16&&(this.step=0,this.bar++)}}_step(t,e){t===0&&this.bar%4===0&&(this.prog=kd(Og),this.pattern=kd(zg));let n=this.prog[this.bar%4];if(this.pattern.includes(t)){let i=t===0?1:mr(.55,.8);n.n.forEach((s,a)=>this._epiano(s,e+a*.014+mr(0,.008),i,t===0?2.4:1.2))}t===0&&this._bass(n.r,e,1.7),(t===10||t===14&&Math.random()<.4)&&this._bass(n.r+(Math.random()<.5?0:7),e,.8),(t===0||t===10||t===7&&Math.random()<.3)&&this._kick(e),(t===4||t===12)&&this._snare(e),t%2===0&&this._hat(e,t%4===2?.8:.5,t===14&&Math.random()<.25),t%2===0&&this.bar-this.lastMel>0&&Math.random()<.16&&(this._pluck(kd(DT),e,mr(.5,.9)),this.lastMel=this.bar+(Math.random()<.5?0:-1))}_osc(t,e,n,i,s=0){let a=this.ctx.createOscillator();return a.type=t,a.frequency.value=e,a.detune.value=s,this.wowGain.connect(a.detune),a.start(n),a.stop(n+i),a}_epiano(t,e,n,i){let s=this.ctx,a=Yl(t),o=s.createGain();o.gain.setValueAtTime(1e-4,e),o.gain.linearRampToValueAtTime(n*.075,e+.012),o.gain.exponentialRampToValueAtTime(n*.03,e+.4),o.gain.exponentialRampToValueAtTime(1e-4,e+i),this._osc("sine",a,e,i+.1).connect(o),this._osc("triangle",a,e,i+.1,mr(3,8)).connect(o);let c=s.createGain();c.gain.setValueAtTime(n*.022,e),c.gain.exponentialRampToValueAtTime(1e-4,e+.2),this._osc("sine",a*4,e,.3).connect(c).connect(this.pianoBus),o.connect(this.pianoBus)}_bass(t,e,n){let i=this.ctx.createGain();i.gain.setValueAtTime(1e-4,e),i.gain.linearRampToValueAtTime(.2,e+.03),i.gain.exponentialRampToValueAtTime(1e-4,e+n);let s=this.ctx.createBiquadFilter();s.type="lowpass",s.frequency.value=380,this._osc("sine",Yl(t),e,n+.1).connect(i),this._osc("triangle",Yl(t),e,n+.1).connect(i),i.connect(s).connect(this.musicGain)}_pluck(t,e,n){let i=this.ctx.createGain();i.gain.setValueAtTime(1e-4,e),i.gain.linearRampToValueAtTime(n*.06,e+.01),i.gain.exponentialRampToValueAtTime(1e-4,e+1.1);let s=this.ctx.createBiquadFilter();s.type="lowpass",s.frequency.value=2200,this._osc("triangle",Yl(t),e,1.2).connect(i),i.connect(s),s.connect(this.pianoBus);let a=this.ctx.createGain();a.gain.value=.6,s.connect(a).connect(this.echo)}_kick(t){let e=this.ctx.createOscillator(),n=this.ctx.createGain();e.frequency.setValueAtTime(130,t),e.frequency.exponentialRampToValueAtTime(42,t+.14),n.gain.setValueAtTime(.5,t),n.gain.exponentialRampToValueAtTime(1e-4,t+.32),e.connect(n).connect(this.drumBus),e.start(t),e.stop(t+.35)}_noiseHit(t,e,n,i,s,a=this.drumBus){let o=this._src(this.noise,!1),c=this.ctx.createBiquadFilter();c.type=n,c.frequency.value=i;let l=this.ctx.createGain();l.gain.setValueAtTime(s,t),l.gain.exponentialRampToValueAtTime(1e-4,t+e),o.connect(c).connect(l).connect(a),o.start(t,Math.random()),o.stop(t+e+.02)}_snare(t){this._noiseHit(t,.16,"bandpass",1900,.28);let e=this.ctx.createOscillator(),n=this.ctx.createGain();e.frequency.value=185,n.gain.setValueAtTime(.16,t),n.gain.exponentialRampToValueAtTime(1e-4,t+.1),e.connect(n).connect(this.drumBus),e.start(t),e.stop(t+.12)}_hat(t,e,n){this._noiseHit(t,n?.2:.045,"highpass",7500,.12*e*mr(.7,1))}};var Zl=27,FT=12,Ud=2;function Ql(r){let t=r>>>0;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function HT(){let r=Ql(3),t=[],e=[],n=[],i=[],s=new et(6971440),a=new et(11115094),o=new et(14733202),c=(u,f,d,g,v)=>{t.push(u,f,d),n.push(g.r,g.g,g.b),e.push(v[0],v[1],v[2])},l=5;for(let u=0;u<l;u++){let f=u/l*Math.PI*2+(r()-.5)*.7,d=Math.cos(f),g=Math.sin(f),v=-g,m=d,p=1.05+r()*.6,x=.35+r()*.45,y=new T(d*.35,1,g*.35).normalize().toArray(),M=[{c:[d*.03,0,g*.03],hw:.034,col:s},{c:[d*x*.4,p*.6,g*x*.4],hw:.03,col:a}],E=t.length/3;for(let b of M)c(b.c[0]-v*b.hw,b.c[1],b.c[2]-m*b.hw,b.col,y),c(b.c[0]+v*b.hw,b.c[1],b.c[2]+m*b.hw,b.col,y);c(d*x,p*.92,g*x,o,y),i.push(E,E+1,E+2,E+1,E+3,E+2,E+2,E+3,E+4)}let h=new At;return h.setAttribute("position",new yt(t,3)),h.setAttribute("normal",new yt(e,3)),h.setAttribute("color",new yt(n,3)),h.setIndex(i),h}function NT(){let r=Ql(11),t=[],e=[],n=[],i=[],s=new et(3955232),a=new et(7312436),o=new et(12176482),c=(u,f,d,g,v)=>{t.push(u,f,d),n.push(g.r,g.g,g.b),e.push(v[0],v[1],v[2])},l=5;for(let u=0;u<l;u++){let f=u/l*Math.PI*2+(r()-.5)*.9,d=Math.cos(f),g=Math.sin(f),v=-g,m=d,p=.32+r()*.45,x=.05+r()*.18,y=(r()-.5)*.25,M=(r()-.5)*.25,E=new T(d*.3,1,g*.3).normalize().toArray(),b=t.length/3;c(y-v*.03,0,M-m*.03,s,E),c(y+v*.03,0,M+m*.03,s,E),c(y+d*x*.4-v*.024,p*.55,M+g*x*.4-m*.024,a,E),c(y+d*x*.4+v*.024,p*.55,M+g*x*.4+m*.024,a,E),c(y+d*x,p,M+g*x,o,E),i.push(b,b+1,b+2,b+1,b+3,b+2,b+2,b+3,b+4)}let h=new At;return h.setAttribute("position",new yt(t,3)),h.setAttribute("normal",new yt(e,3)),h.setAttribute("color",new yt(n,3)),h.setIndex(i),h}function kT(){let r=Ql(29),t=[],e=[],n=[],i=[],s=new et(4612666),a=new et(8036444),o=new et(12046479),c=(u,f,d,g,v)=>{t.push(u,f,d),n.push(g.r,g.g,g.b),e.push(v[0],v[1],v[2])},l=7;for(let u=0;u<l;u++){let f=u/l*Math.PI*2+(r()-.5)*.8,d=Math.cos(f),g=Math.sin(f),v=-g,m=d,p=.9+r()*.5,x=.12+r()*.3,y=.035+r()*.02,M=(r()-.5)*.3,E=(r()-.5)*.3,b=new T(d*.3,1,g*.3).normalize().toArray(),w=t.length/3,C=[[0,y,s],[.45,y*.85,a],[.8,y*.5,a.clone().lerp(o,.5)],[1,.002,o]];for(let[_,S,I]of C){let F=M+d*x*_*_,N=E+g*x*_*_,L=p*_;c(F-v*S,L,N-m*S,I,b),c(F+v*S,L,N+m*S,I,b)}for(let _=0;_<C.length-1;_++){let S=w+_*2;i.push(S,S+1,S+2,S+1,S+3,S+2)}}let h=new At;return h.setAttribute("position",new yt(t,3)),h.setAttribute("normal",new yt(e,3)),h.setAttribute("color",new yt(n,3)),h.setIndex(i),h}function UT(){let r=[],t=[],e=[],n=[],i=(a,o,c,l,h)=>{let u=Math.cos(a),f=Math.sin(a),d=r.length/3;for(let[g,v]of[[0,0],[1,0],[1,1],[0,1]]){let m=(g-.5)*c,p=o-l+v*l,x=h*v*v;r.push(m*u+x,p,m*f),t.push(0,1,0),e.push(g,v)}n.push(d,d+1,d+2,d,d+2,d+3)};i(.3,2,.34,.98,.1),i(.3+Math.PI/2,2,.34,.98,.1),i(1.3,1.72,.27,.74,-.06);let s=new At;return s.setAttribute("position",new yt(r,3)),s.setAttribute("normal",new yt(t,3)),s.setAttribute("uv",new yt(e,2)),s.setIndex(n),s}var OT=`
attribute vec4 aSeed;
uniform vec3 uCam;
uniform float uTime, uWind, uCell, uScale, uIn0, uIn1, uOut0, uOut1, uCorr;
uniform vec2 uWindDir;
uniform vec3 uRoad[${Zl}];     // (x, y, z) của tim đường
uniform float uCarve0, uCarve1, uTipH, uPatch;
${k0}
// khoảng cách tới đường + độ cao mặt đường tại điểm gần nhất
float roadDist(vec2 p, out float ry) {
  float dm = 1e9; ry = 0.0;
  for (int i = 0; i < ${Zl-1}; i++) {
    vec2 a = uRoad[i].xz, b = uRoad[i + 1].xz, ab = b - a;
    float t = clamp(dot(p - a, ab) / dot(ab, ab), 0.0, 1.0);
    float d = length(p - a - ab * t);
    if (d < dm) { dm = d; ry = mix(uRoad[i].y, uRoad[i + 1].y, t); }
  }
  return dm;
}
`,zT=`
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
`,Aa=class{constructor(t,e,n="reed"){this.kind=n;let i=n==="meadow",s=n==="grass"||i;this.group=new Pt,t.add(this.group),this.density=1,this.roadPts=Array.from({length:Zl},()=>new T),this.shared={uCam:{value:new T},uTime:{value:0},uWind:{value:.3},uWindDir:{value:new at(.78,.62).normalize()},uRoad:{value:this.roadPts},uCorr:{value:Te.halfWidth+(i?.7:s?.3:1)},uTipH:{value:i?1.4:s?.8:1.95},uPatch:{value:i?1:0},uCarve0:{value:Te.halfWidth+1.2},uCarve1:{value:Te.halfWidth+16},uTLow:{value:we.low},uTDet:{value:we.det},uTFine:{value:we.fine}},this.leafGeo=i?kT():s?NT():HT(),this.plumeGeo=s?null:UT();let a=s?null:B0();a&&(a.anisotropy=Math.min(4,e.capabilities.getMaxAnisotropy()));let o=i?[{cell:60,count:24e3,scale:1.05,in0:-1,in1:0,out0:26,out1:36,seed:5},{cell:230,count:14e3,scale:1.6,in0:24,in1:38,out0:95,out1:135,seed:6}]:s?[{cell:64,count:16e3,scale:1,in0:-1,in1:0,out0:22,out1:32,seed:3},{cell:220,count:8e3,scale:1.8,in0:20,in1:34,out0:75,out1:105,seed:4}]:[{cell:86,count:19e3,scale:1,in0:-1,in1:0,out0:30,out1:43,seed:1},{cell:340,count:11e3,scale:1.55,in0:27,in1:46,out0:118,out1:165,seed:2}];this.layers=o.map((c,l)=>{let h=l===o.length-1,u=h?c.count*Ud*Ud:c.count,f=Ql(c.seed*977),d=new Float32Array(u*4);for(let x=0;x<d.length;x++)d[x]=f();let g=new Ke(d,4),v={uCell:{value:c.cell},uScale:{value:c.scale},uIn0:{value:c.in0},uIn1:{value:c.in1},uOut0:{value:c.out0},uOut1:{value:c.out1}},m=this._mesh(this.leafGeo,g,c.count,v,new go({vertexColors:!0,side:pe}),!0);if(s)return{max:c.count,far:h,L:c,uni:v,meshes:[m]};let p=this._mesh(this.plumeGeo,g,c.count,v,new go({map:a,side:pe,alphaTest:.2,alphaToCoverage:!0}),!1);return{max:c.count,far:h,L:c,uni:v,meshes:[m,p]}}),this.mats=this.layers.flatMap(c=>c.meshes.map(l=>l.material)),this.group.visible=!0}_mesh(t,e,n,i,s,a){let o=new al;o.index=t.index;for(let h of Object.keys(t.attributes))o.setAttribute(h,t.attributes[h]);o.setAttribute("aSeed",e),o.instanceCount=n;let c=this.shared;s.onBeforeCompile=h=>{Object.assign(h.uniforms,c,i),h.vertexShader=h.vertexShader.replace("#include <common>",`#include <common>
`+OT).replace("#include <begin_vertex>",zT),a&&(h.vertexShader=h.vertexShader.replace("#include <color_vertex>",`#include <color_vertex>
#ifdef USE_COLOR
vColor *= 0.78 + 0.44 * fract(aSeed.w * 9.31);
#endif`)),h.fragmentShader=h.fragmentShader.replace("#include <normal_fragment_begin>",Jt.normal_fragment_begin.replace("normal *= faceDirection;","")).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance = emissive * diffuseColor.rgb;`)},de(s);let l=new Nt(o,s);return l.frustumCulled=!1,l.layers.set(3),this.group.add(l),l}set visible(t){this.group.visible=t}get visible(){return this.group.visible}setDensity(t){this.density=t;let e=this.view||1;for(let n of this.layers)for(let i of n.meshes)i.geometry.instanceCount=Math.floor(n.max*t*(n.far?e*e:1))}setView(t){this.view=Math.min(Math.max(t,1),Ud);for(let e of this.layers)e.far&&(e.uni.uCell.value=e.L.cell*this.view,e.uni.uOut0.value=e.L.out0*this.view,e.uni.uOut1.value=e.L.out1*this.view);this.setDensity(this.density??1)}update(t,e,n,i,s){let a=this.shared;a.uTime.value=t,a.uCam.value.copy(e),a.uWind.value=s.wind,a.uWindDir.value.copy(s.windDir),a.uTLow.value=we.low,a.uTDet.value=we.det,a.uTFine.value=we.fine;let o={};for(let f=0;f<Zl;f++)n.at(i+(f-12)*FT*(this.view||1),o),this.roadPts[f].set(o.x,o.y,o.z);let c=(this.kind==="reed"?.5:.3)*s.dayF*(1-s.overcast*.85)*(.4+.6*s.warm),l=new et(1,.72+.2*(1-s.warm),.42+.45*(1-s.warm)).multiplyScalar(c),h=(.2*s.dayF*(1-.55*s.dark)+.05*s.night)*(.6+.4*s.overcast)+s.flash*.9;l.add(new et(.8,.88,1).multiplyScalar(h));let u=1-.28*s.wet;for(let f of this.layers)f.meshes[0].material.emissive.copy(l),f.meshes[1]&&f.meshes[1].material.emissive.copy(l).multiplyScalar(1.7);for(let f of this.mats)f.color.setScalar(u*(1-.15*s.dark))}};var BT=`
  varying vec2 vUv;
  void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,Bg=`
  uniform float uExposure;
  vec3 rrtOdt(vec3 v) { vec3 a = v * (v + 0.0245786) - 0.000090537; vec3 b = v * (0.983729 * v + 0.4329510) + 0.238081; return a / b; }
  vec3 toDisplay(vec3 c) {
    const mat3 IN = mat3(vec3(0.59719, 0.07600, 0.02840), vec3(0.35458, 0.90834, 0.13383), vec3(0.04823, 0.01566, 0.83777));
    const mat3 OUT = mat3(vec3(1.60475, -0.10208, -0.00327), vec3(-0.53108, 1.10813, -0.07276), vec3(-0.07367, -0.00605, 1.07602));
    c = clamp(OUT * rrtOdt(IN * (c * uExposure / 0.6)), 0.0, 1.0);
    return mix(pow(c, vec3(0.41666)) * 1.055 - vec3(0.055), c * 12.92, vec3(lessThanEqual(c, vec3(0.0031308))));
  }`,GT=`
  uniform sampler2D tSrc; uniform vec2 uTexel; uniform float uThresh;
  varying vec2 vUv;
  ${Bg}
  void main() {
    vec3 c = (toDisplay(texture2D(tSrc, vUv + uTexel * vec2(-1.0, -1.0)).rgb) + toDisplay(texture2D(tSrc, vUv + uTexel * vec2(1.0, -1.0)).rgb)
            + toDisplay(texture2D(tSrc, vUv + uTexel * vec2(-1.0, 1.0)).rgb) + toDisplay(texture2D(tSrc, vUv + uTexel * vec2(1.0, 1.0)).rgb)) * 0.25;
    float l = max(c.r, max(c.g, c.b));
    gl_FragColor = vec4(c * smoothstep(uThresh, uThresh + 0.07, l), 1.0);
  }`,VT=`
  uniform sampler2D tSrc; uniform vec2 uDir;
  varying vec2 vUv;
  void main() {
    vec3 s = texture2D(tSrc, vUv).rgb * 0.2270270270;
    s += (texture2D(tSrc, vUv + uDir * 1.3846153846).rgb + texture2D(tSrc, vUv - uDir * 1.3846153846).rgb) * 0.3162162162;
    s += (texture2D(tSrc, vUv + uDir * 3.2307692308).rgb + texture2D(tSrc, vUv - uDir * 3.2307692308).rgb) * 0.0702702703;
    gl_FragColor = vec4(s, 1.0);
  }`,WT=`
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
  }`,qT=`
  uniform sampler2D tSrc; uniform vec2 uTexel;
  varying vec2 vUv;
  void main() {
    float m = 0.0;
    for (int y = 0; y < 4; y++) for (int x = 0; x < 4; x++)
      m = max(m, -texture2D(tSrc, vUv + (vec2(float(x), float(y)) - 1.5) * uTexel).a);
    gl_FragColor = vec4(m, 0.0, 0.0, 1.0);
  }`,XT=`
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
  }`,jT=`
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
  }`,YT=`
  uniform sampler2D tScene, tDepth; uniform float uNear, uFar, uAspect; uniform vec2 uSun;
  varying vec2 vUv;
  void main() {
    float d = texture2D(tDepth, vUv).x;
    float z = uNear * uFar / (uFar - d * (uFar - uNear));
    float sky = smoothstep(0.88, 0.97, z / uFar);
    float l = dot(texture2D(tScene, vUv).rgb, vec3(0.3, 0.59, 0.11));
    vec2 dd = (vUv - uSun) * vec2(uAspect, 1.0);
    gl_FragColor = vec4(vec3(sky * exp(-dot(dd, dd) * 7.0) * smoothstep(0.08, 1.2, l)), 1.0);
  }`,KT=`
  uniform sampler2D tSrc; uniform vec2 uSun; uniform float uLen;
  varying vec2 vUv;
  void main() {
    vec2 step = (vUv - uSun) * uLen / 32.0, uv = vUv;
    vec3 s = vec3(0.0); float w = 1.0, tot = 0.0;
    for (int i = 0; i < 32; i++) { s += texture2D(tSrc, uv).rgb * w; tot += w; w *= 0.965; uv -= step; }
    gl_FragColor = vec4(s / tot, 1.0);
  }`,JT=`
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
  }`,ZT=`
  uniform sampler2D tScene, tBloom, tDof, tRays;
  uniform vec3 uRayCol;
  uniform float uFx, uCine, uTime, uAspect, uDof;
  uniform vec2 uRes;
  varying vec2 vUv;
  ${Bg}
  float hash12(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
  vec3 sceneAt(vec2 uv) {
    vec3 s = texture2D(tScene, uv).rgb;
    if (uDof > 0.0) { vec4 d = texture2D(tDof, uv); s = mix(s, d.rgb, clamp(d.a, 0.0, 1.0) * uDof); }
    return s;
  }
  ${JT}
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
  }`,$l=class{constructor(t,e=4){this.renderer=t,this.enabled=!0,this.samples=e,this.scene=new os,this.cam=new Cs(-1,1,1,-1,0,1);let n=(s,a)=>new Ee({uniforms:s,vertexShader:BT,fragmentShader:a,depthTest:!1,depthWrite:!1,toneMapped:!1}),i={value:1};this.exposure=i,this.bright=n({tSrc:{value:null},uTexel:{value:new at},uThresh:{value:.92},uExposure:i},GT),this.blur=n({tSrc:{value:null},uDir:{value:new at}},VT),this.dofPrep=n({tScene:{value:null},tDepth:{value:null},uTexel:{value:new at},uNear:{value:.1},uFar:{value:1e3},uFocus:{value:10},uFocusRange:{value:0},uCocK:{value:0},uMaxCoc:{value:24}},WT),this.dofTile=n({tSrc:{value:null},uTexel:{value:new at}},qT),this.dofDilate=n({tSrc:{value:null},uTexel:{value:new at}},XT),this.dofBlur=n({tSrc:{value:null},tNear:{value:null},uTexelFull:{value:new at},uMaxCoc:{value:24},uN:{value:24}},jT),this.final=n({tScene:{value:null},tBloom:{value:null},tDof:{value:null},uDof:{value:0},uExposure:i,tRays:{value:null},uRayCol:{value:new et(0,0,0)},uGlass:{value:0},uRearGlass:{value:0},tDepth:{value:null},uNear:{value:.1},uFar:{value:1e3},uTanF:{value:1},uInvVP:{value:new bt},uCamPos:{value:new T},uCamFwd:{value:new T},uGC:{value:new T},uGN:{value:new T},uGU:{value:new T},uGV:{value:new T},uBlade:{value:new he},uGB:{value:new he},uPiv:{value:new he},uWipe:{value:new he},uRest:{value:new he},uSweep:{value:1.6},uFlow:{value:new at},tGlassMask:{value:null},uFx:{value:0},uCine:{value:0},uTime:{value:0},uAspect:{value:1},uRes:{value:new at(1,1)}},ZT),this.rayMask=n({tScene:{value:null},tDepth:{value:null},uNear:{value:.1},uFar:{value:1e3},uAspect:{value:1},uSun:{value:new at}},YT),this.rayBlur=n({tSrc:{value:null},uSun:{value:new at},uLen:{value:1}},KT),this.rays={uv:new at(.5,.5),color:new et(0,0,0),near:.1,far:1e3},this.quad=new Nt(new Ei(2,2),this.bright),this.quad.frustumCulled=!1,this.scene.add(this.quad),this.size=new at,this.rts={},this.sceneRT=new mn(16,16,{type:Wn,samples:e,depthBuffer:!0,depthTexture:new oa(16,16,Di)}),this.glassScene=new os,this.glassMaterial=new Ee({uniforms:{tDepth:{value:this.sceneRT.depthTexture},uRes:{value:this.size},uNear:{value:.1},uFar:{value:1e3}},side:pe,depthTest:!1,depthWrite:!1,toneMapped:!1,vertexShader:`
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
        }`}),this.glassMesh=new Nt(new At,this.glassMaterial),this.glassMesh.matrixAutoUpdate=!1,this.glassScene.add(this.glassMesh),this._clearColor=new et,this.resize()}_rt(t,e,n,i=!1){let s=this.rts[t];return s?s.setSize(e,n):s=this.rts[t]=new mn(e,n,{type:i?Wn:Fi,minFilter:nn,magFilter:nn,depthBuffer:!1,stencilBuffer:!1}),s}resize(){this.renderer.getDrawingBufferSize(this.size);let t=this.size.x,e=this.size.y;this.sceneRT.setSize(t,e);let n=Math.max(16,Math.ceil(t/4)),i=Math.max(16,Math.ceil(e/4));this._rt("bloomA",n,i),this._rt("bloomB",n,i);let s=Math.max(16,Math.ceil(t/2)),a=Math.max(16,Math.ceil(e/2));this._rt("prep",s,a,!0),this._rt("dof",s,a,!0);let o=Math.max(4,Math.ceil(s/4)),c=Math.max(4,Math.ceil(a/4));this._rt("tile",o,c,!0),this._rt("near",o,c,!0),this._rt("rayA",n,i),this._rt("rayB",n,i);let l=this._rt("glass",t,e,!0);l.texture.minFilter=l.texture.magFilter=$e,this.final.uniforms.tGlassMask.value=l.texture,this.rayMask.uniforms.uAspect.value=t/e,this.bright.uniforms.uTexel.value.set(1/n,1/i),this.dofPrep.uniforms.uTexel.value.set(1/t,1/e),this.dofTile.uniforms.uTexel.value.set(1/s,1/a),this.dofDilate.uniforms.uTexel.value.set(1/o,1/c),this.dofBlur.uniforms.uTexelFull.value.set(1/t,1/e),this.final.uniforms.uAspect.value=t/e,this.final.uniforms.uRes.value.set(t,e)}setSamples(t){this.sceneRT.samples!==t&&(this.sceneRT.samples=t,this.sceneRT.dispose())}get longSide(){return Math.max(this.size.x,this.size.y)}_pass(t,e){this.quad.material=t,this.renderer.setRenderTarget(e),this.renderer.render(this.scene,this.cam)}begin(){this.renderer.setRenderTarget(this.sceneRT)}renderGlassMask(t,e,n){let i=this.final.uniforms;if(i.uRearGlass.value<.5||i.uGlass.value<=0||!n?.geometry)return;this.glassMesh.geometry=n.geometry,this.glassMesh.matrix.copy(e.matrixWorld),this.glassMaterial.uniforms.uNear.value=t.near,this.glassMaterial.uniforms.uFar.value=t.far;let s=this.renderer,a=s.getClearAlpha();s.getClearColor(this._clearColor),s.setClearColor(0,0),s.setRenderTarget(this.rts.glass),s.render(this.glassScene,t),s.setClearColor(this._clearColor,a)}render(t,e,n,i){let s=this.renderer,a=this.blur.uniforms,o=this.sceneRT.texture;this.exposure.value=s.toneMappingExposure;let c=!1;if(i&&i.amt>.01&&i.samples>0&&i.cocK>.05){c=!0;let f=this.dofPrep.uniforms;f.tScene.value=o,f.tDepth.value=this.sceneRT.depthTexture,f.uNear.value=i.near,f.uFar.value=i.far,f.uFocus.value=i.focus,f.uFocusRange.value=i.range||0,f.uCocK.value=i.cocK,f.uMaxCoc.value=i.maxCoc,this._pass(this.dofPrep,this.rts.prep),this.dofTile.uniforms.tSrc.value=this.rts.prep.texture,this._pass(this.dofTile,this.rts.tile),this.dofDilate.uniforms.tSrc.value=this.rts.tile.texture,this._pass(this.dofDilate,this.rts.near);let d=this.dofBlur.uniforms;d.tSrc.value=this.rts.prep.texture,d.tNear.value=this.rts.near.texture,d.uMaxCoc.value=i.maxCoc,d.uN.value=i.samples,this._pass(this.dofBlur,this.rts.dof)}if(e>.01){let f=this.rts.bloomA,d=this.rts.bloomB;this.bright.uniforms.tSrc.value=o,this._pass(this.bright,f);for(let g=0;g<2;g++)a.tSrc.value=f.texture,a.uDir.value.set((2.2+g)/f.width,0),this._pass(this.blur,d),a.tSrc.value=d.texture,a.uDir.value.set(0,(1.2+g*.6)/f.height),this._pass(this.blur,f)}let l=this.rays,h=l.color.r+l.color.g+l.color.b>.002;if(h){let f=this.rayMask.uniforms,d=this.rayBlur.uniforms;f.tScene.value=o,f.tDepth.value=this.sceneRT.depthTexture,f.uNear.value=l.near,f.uFar.value=l.far,f.uSun.value.copy(l.uv),this._pass(this.rayMask,this.rts.rayA),d.uSun.value.copy(l.uv),d.tSrc.value=this.rts.rayA.texture,d.uLen.value=.85,this._pass(this.rayBlur,this.rts.rayB),d.tSrc.value=this.rts.rayB.texture,d.uLen.value=.85/10,this._pass(this.rayBlur,this.rts.rayA)}let u=this.final.uniforms;u.tScene.value=o,u.tRays.value=this.rts.rayA.texture,u.tDepth.value=this.sceneRT.depthTexture,h?u.uRayCol.value.copy(l.color):u.uRayCol.value.setRGB(0,0,0),u.tBloom.value=this.rts.bloomA.texture,u.tDof.value=this.rts.dof.texture,u.uDof.value=c?i.amt:0,u.uCine.value=e,u.uFx.value=n,u.uTime.value=t,this._pass(this.final,null)}};var th=class{constructor(t){this.renderer=t,this.cam=new Ue,this.cam.layers.set(0),this.rt=new mn(16,16,{type:Wn}),this.texMatrix=new bt,this.planeY=0,this.active=!1,this.enabled=!0,this._v=new T,this._d=new T,this._u=new T,this._plane=new _i,this._clip=new he,this._q=new he,this._size=new at}resize(){this.renderer.getDrawingBufferSize(this._size),this.rt.setSize(Math.max(16,Math.floor(this._size.x/2)),Math.max(16,Math.floor(this._size.y/2)))}render(t,e,n){if(this.active=!1,!this.enabled||e.position.y<n+.05)return;this.planeY=n;let i=this.cam,s=e.position;i.position.set(s.x,2*n-s.y,s.z);let a=this._d.set(0,0,-1).applyQuaternion(e.quaternion),o=this._u.set(0,1,0).applyQuaternion(e.quaternion);i.up.set(o.x,-o.y,o.z),i.lookAt(this._v.set(i.position.x+a.x,i.position.y-a.y,i.position.z+a.z)),i.near=e.near,i.far=e.far,i.updateMatrixWorld(),i.projectionMatrix.copy(e.projectionMatrix),this.texMatrix.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),this.texMatrix.multiply(i.projectionMatrix).multiply(i.matrixWorldInverse);let c=this._plane.setFromNormalAndCoplanarPoint(this._v.set(0,1,0),this._d.set(s.x,n,s.z));c.applyMatrix4(i.matrixWorldInverse);let l=this._clip.set(c.normal.x,c.normal.y,c.normal.z,c.constant),h=i.projectionMatrix.elements,u=this._q.set((Math.sign(l.x)+h[8])/h[0],(Math.sign(l.y)+h[9])/h[5],-1,(1+h[10])/h[14]);l.multiplyScalar(2/l.dot(u)),h[2]=l.x,h[6]=l.y,h[10]=l.z+1-.003,h[14]=l.w,i.projectionMatrixInverse.copy(i.projectionMatrix).invert();let f=this.renderer,d=f.getRenderTarget(),g=f.shadowMap.autoUpdate;f.shadowMap.autoUpdate=!1,f.setRenderTarget(this.rt),f.render(t,i),f.setRenderTarget(d),f.shadowMap.autoUpdate=g,this.active=!0}};var Po=class r{constructor(){this.root=new Pt,this.tilt=new Pt,this.root.add(this.tilt),this.root.visible=!1,this.ready=!1,this.actions={},this.current=null,this.headOffsetSit=new T,this.hipOffsetSit=new T,this.footShade={value:0}}async load(t,{chisa:e=!1}={}){let n=new Gs;n.setMeshoptDecoder(Ta);let i=await n.loadAsync(t),s=i.scene;this.model=s,this.seatRecline=e?0:null,s.traverse(h=>{if(!h.isMesh)return;h.castShadow=!0,h.receiveShadow=!0,h.frustumCulled=!1;let u=Array.isArray(h.material)?h.material:[h.material];for(let f of u)f.envMapIntensity=.6,de(f)}),this.tilt.add(s);let a=h=>e?s.getObjectByName(aS(s,h)):s.getObjectByName(h);this.head=a("Head"),this.neck=a("neck_01"),this.arms={l:["upperarm_l","lowerarm_l","hand_l"].map(a),r:["upperarm_r","lowerarm_r","hand_r"].map(a)},this.arms.l.some(h=>!h)&&(this.arms.l=null),this.arms.r.some(h=>!h)&&(this.arms.r=null),this.legs={l:["thigh_l","calf_l","foot_l"].map(a),r:["thigh_r","calf_r","foot_r"].map(a)},this.balls={l:a("ball_l"),r:a("ball_r")},(this.legs.l.some(h=>!h)||this.legs.r.some(h=>!h))&&(this.legs=null),this.spine=a("spine_01"),this.pelvis=a("pelvis"),this.gripFingers={l:a("middle_01_l"),r:a("middle_01_r")},this.gripKnuckles={l:[a("index_01_l"),a("pinky_01_l")],r:[a("index_01_r"),a("pinky_01_r")]},this.mixer=new pa(s);for(let h of i.animations)this.actions[h.name]=this.mixer.clipAction(h);s.updateMatrixWorld(!0);let o=new qe().setFromObject(s,!0),c=o.max.y-o.min.y;s.scale.setScalar(Gg/c),s.position.y=-o.min.y*(Gg/c);let l=[];if(s.traverse(h=>{h.isMesh&&/eye/i.test(h.name+" "+(h.material?.name||""))&&l.push(h)}),l.length&&this.head){s.updateMatrixWorld(!0);let h=new qe().setFromObject(l[0],!0).getCenter(new T),u=this.head.getWorldPosition(new T),f=h.sub(u);s.rotation.y=Math.atan2(-f.x,f.z)||0}s.updateMatrixWorld(!0),s.traverse(h=>{h.isSkinnedMesh&&/superhero|body/i.test(h.name+" "+h.material?.name)&&rS(h,s,this.footShade)}),this.bindRotations=new Map,s.traverse(h=>{h.isBone&&this.bindRotations.set(h.name,h.getWorldQuaternion(new Vt))}),this.fingers={},this.thumbs={};for(let h of["l","r"]){this.fingers[h]=["index","middle","ring","pinky"].flatMap(f=>[2,3].map(d=>a(`${f}_0${d}_${h}`))).filter(Boolean).map(f=>({b:f,rest:f.quaternion.clone()}));let u=["thumb_01","thumb_02","thumb_03","thumb_04_leaf"].map(f=>a(f+"_"+h));this.thumbs[h]=u.every(Boolean)?{bones:u,rest:u[2].quaternion.clone()}:null}return e&&(this.reference=await new r().load("assets/models/person.glb"),this.actions=this.reference.actions,this.mixer=this.reference.mixer,this.current=this.reference.current,this.retargetPairs=[],s.traverse(h=>{if(!h.isBone)return;let u=Xg(h.name),f=u&&this.reference.model.getObjectByName(u);f&&this.retargetPairs.push({bone:h,from:f,sourceBind:this.reference.bindRotations.get(u).clone().invert(),targetBind:this.bindRotations.get(h.name).clone()})})),this.play("Driving_Loop",0),this.mixer.update(.01),this.applyRetarget(),this.root.updateMatrixWorld(!0),this.headOffsetSit.copy(this.head.getWorldPosition(new T)),this.root.worldToLocal(this.headOffsetSit),this.pelvis&&this.root.worldToLocal(this.pelvis.getWorldPosition(this.hipOffsetSit)),this.ready=!0,this}play(t,e=.35,{once:n=!1,timeScale:i=1}={}){let s=this.actions[t];return!s||s===this.current||(s.reset(),s.setLoop(n?yf:_f,1/0),s.clampWhenFinished=n,s.timeScale=i,s.enabled=!0,s.setEffectiveWeight(1),this.current&&e>0?s.crossFadeFrom(this.current,e,!1):this.current&&this.current.stop(),s.play(),this.current=s),s}duration(t){return this.actions[t]?.getClip().duration??1}update(t){this.mixer&&this.root.visible&&(this.mixer.update(t),this.applyRetarget())}applyRetarget(){if(!this.retargetPairs)return;this.reference.root.updateMatrixWorld(!0),this.root.updateMatrixWorld(!0);let t=this.root.getWorldQuaternion(new Vt);for(let{bone:e,from:n,sourceBind:i,targetBind:s}of this.retargetPairs)n.getWorldQuaternion(Vs).multiply(i).multiply(s).premultiply(t),e.parent.getWorldQuaternion(Wi),e.quaternion.copy(Wi.invert().multiply(Vs)),e.updateMatrixWorld(!0)}replace(t){let e=this.root,n=e.visible;this.dispose(),e.clear();for(let i of Object.keys(t))i!=="root"&&(this[i]=t[i]);e.add(this.tilt),e.visible=n,this.root=e}dispose(){this.mixer?.stopAllAction();let t=new Set;for(let e of[this.model,this.reference?.model])e?.traverse(n=>{if(n.isMesh){n.geometry.dispose();for(let i of Array.isArray(n.material)?n.material:[n.material]){for(let s of Object.values(i))s?.isTexture&&t.add(s);i.dispose()}}});t.forEach(e=>e.dispose()),delete this.reference,delete this.retargetPairs,delete this._spIn,delete this._spOut}faceGrip(t,e,n=null){let i=this.arms?.[t]?.[2],s=this.gripFingers?.[t];if(!i||!s)return;i.getWorldPosition(Ln),s.getWorldPosition(ei),Ln.subVectors(ei,Ln).normalize(),ei.copy(e).negate(),eh(i,Ln,ei),i.updateMatrixWorld(!0);let a=this.gripKnuckles?.[t];if(n&&a?.every(Boolean)){a[0].getWorldPosition(Ln),a[1].getWorldPosition(ei),Ln.sub(ei).addScaledVector(e,-Ln.dot(e)).normalize(),ei.copy(n).addScaledVector(e,-n.dot(e)).normalize();let o=Math.atan2(qg.crossVectors(Ln,ei).dot(e),Ln.dot(ei));Ra.setFromAxisAngle(e,o),i.getWorldQuaternion(Vs),i.parent.getWorldQuaternion(Wi),i.quaternion.copy(Wi.invert().multiply(Ra.multiply(Vs))),i.updateMatrixWorld(!0)}}looseGrip(t,e,n,i){for(let{b:a,rest:o}of this.fingers?.[t]||[])a.quaternion.slerp(o,e);let s=this.thumbs?.[t];if(s&&n){s.bones[2].quaternion.slerp(s.rest,.5),s.bones[0].updateMatrixWorld(!0);let[a,o,,c]=s.bones.map(f=>f.getWorldPosition(new T)),l=.82*(a.distanceTo(o)+o.distanceTo(c)),h=0,u=.2;for(let f=0;f<16;f++){let d=(h+u)/2;n(d,Wg).distanceTo(a)<l?h=d:u=d}Od([s.bones[0],s.bones[1],s.bones[3]],n(h,Wg),i)}this.arms?.[t]?.[2].updateMatrixWorld(!0)}recline(t){if(t=this.seatRecline??t,!this.spine||!t)return;let e=this.spine.quaternion;this._spOut&&e.equals(this._spOut)&&e.copy(this._spIn),(this._spIn||(this._spIn=new Vt)).copy(e),this.root.getWorldQuaternion(Wi),Ln.set(1,0,0).applyQuaternion(Wi),Ra.setFromAxisAngle(Ln,-t),this.spine.getWorldQuaternion(Vs),this.spine.parent.getWorldQuaternion(Wi),this.spine.quaternion.copy(Wi.invert().multiply(Ra.multiply(Vs))),(this._spOut||(this._spOut=new Vt)).copy(e),this.spine.updateMatrixWorld(!0)}reachLeg(t,e,n,i=null){let s=this.legs?.[t];if(!s)return;Od(s,e,n);let a=s[2],o=this.balls?.[t];i&&o&&(a.getWorldPosition(Ln),o.getWorldPosition(ei),eh(a,ei.sub(Ln).normalize(),Ln.copy(i).normalize()),a.updateMatrixWorld(!0))}reach(t,e,n=null){let i=this.arms?.[t];i&&Od(i,e,n)}};function Od(r,t,e){{let[n,i,s]=r,a=n.getWorldPosition(QT),o=i.getWorldPosition($T),c=s.getWorldPosition(tS),l=a.distanceTo(o),h=o.distanceTo(c),u=qg.subVectors(t,a),f=u.length();u.multiplyScalar(1/f),f=Math.min(Math.max(f,Math.abs(l-h)+.001),l+h-.001);let d=(l*l+f*f-h*h)/(2*l*f),g=Math.sqrt(Math.max(0,1-d*d)),v=e?Vg.copy(e):Vg.subVectors(o,a);v.addScaledVector(u,-v.dot(u)),v.lengthSq()<1e-8&&v.set(0,-1,0),v.normalize();let m=eS.copy(a).addScaledVector(u,l*d).addScaledVector(v,l*g);eh(n,Ln.subVectors(o,a).normalize(),ei.subVectors(m,a).normalize()),n.updateMatrixWorld(!0),i.getWorldPosition(o),s.getWorldPosition(c),eh(i,Ln.subVectors(c,o).normalize(),ei.subVectors(t,o).normalize()),i.updateMatrixWorld(!0)}}var Gg=1.7,QT=new T,$T=new T,tS=new T,qg=new T,Vg=new T,eS=new T,Ln=new T,ei=new T,Wg=new T,Ra=new Vt,Vs=new Vt,Wi=new Vt;function eh(r,t,e){Ra.setFromUnitVectors(t,e),r.getWorldQuaternion(Vs),r.parent.getWorldQuaternion(Wi),r.quaternion.copy(Wi.invert().multiply(Ra.multiply(Vs)))}var nS=new et("#1c1c1f"),iS=new et("#2f4366"),sS=new et("#dedad2");function rS(r,t,e){let n=r.geometry,i=n.attributes.skinIndex,s=n.attributes.skinWeight,a=n.attributes.position;if(!i||!s)return;let o=r.skeleton.bones,c=o.find(p=>p.name==="pelvis"),l=c?c.getWorldPosition(new T).y:.9,h=o.map(p=>/foot|ball/i.test(p.name)?3:/thigh|calf/i.test(p.name)?2:/lowerarm|hand|index|middle|ring|pinky|thumb|neck|head/i.test(p.name)?0:/pelvis/i.test(p.name)?4:1),u=new Float32Array(a.count*4),f=new Float32Array(a.count),d=new T;for(let p=0;p<a.count;p++){let x=0,y=-1;for(let b=0;b<4;b++){let w=s.getComponent(p,b);w>y&&(y=w,x=i.getComponent(p,b))}let M=h[x];M===4&&(d.fromBufferAttribute(a,p).applyMatrix4(r.matrixWorld),M=d.y<l+.09?2:1);let E=M===1?nS:M===2?iS:M===3?sS:null;E&&(u[p*4]=E.r,u[p*4+1]=E.g,u[p*4+2]=E.b,u[p*4+3]=1),f[p]=M===3?1:0}n.setAttribute("aGarment",new Et(u,4)),n.setAttribute("aShoe",new Et(f,1));let g=r.material,v=g.onBeforeCompile;g.onBeforeCompile=(p,x)=>{v?.call(g,p,x),p.uniforms.uFootShade=e,p.vertexShader=p.vertexShader.replace("#include <common>",`#include <common>
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
roughnessFactor = mix(roughnessFactor, 0.88, vGarment.a);`).replace("mapN.xy *= normalScale;","mapN.xy *= normalScale * (1.0 - 0.8 * vGarment.a);")};let m=g.customProgramCacheKey?.bind(g);g.customProgramCacheKey=()=>(m?m():"")+"|garment"}function Xg(r){let t=r.replace(/_\d+$/,""),e={Bip001Pelvis:"pelvis",Bip001Spine:"spine_01",Bip001Spine1:"spine_02",Bip001Spine2:"spine_03",Bip001Neck:"neck_01",Bip001Head:"Head"};if(e[t])return e[t];let n=t.match(/^Bip001([LR])(Clavicle|UpperArm|Forearm|Hand|Thigh|Calf|Foot|Toe0)$/);if(n)return{Clavicle:"clavicle",UpperArm:"upperarm",Forearm:"lowerarm",Hand:"hand",Thigh:"thigh",Calf:"calf",Foot:"foot",Toe0:"ball"}[n[2]]+"_"+n[1].toLowerCase();let i=t.match(/^Bip001([LR])Finger([0-4])([12])?$/);return i?["thumb","index","middle","ring","pinky"][+i[2]]+"_0"+(+(i[3]||0)+1)+"_"+i[1].toLowerCase():null}function aS(r,t){let e;return r.traverse(n=>{n.isBone&&Xg(n.name)===t&&(e=n.name)}),e}var nh=r=>Math.min(1,Math.max(0,r)),ln=r=>(r=nh(r),r*r*(3-2*r)),zd=(r,t,e)=>r+(t-r)*e,qi=(r,t,e)=>{let n=((t-r+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI;return r+n*e},Lo=Math.PI,Bd=-Math.PI/2,jg=0,Io=Math.PI/2,Gd=-Math.PI*.75,gr=1.1,vr=new T(0,1,0),oS=2.25,Yg=5,Ca=26,Kg=16,cS=35,Jg=20,Do=25,lS=9,Vd=18,hS=2,Zg=8,uS=12,fS=12,dS=12,ih=class{constructor(t,e){this.cars=t,this.person=e,this.state="off",this.t=0,this.v0=0,this.stopT=-1,this.seat=new T,this.out=new T,this.walkEnd=new T,this.lean=new T,this.corner=new T,this.stand=new T,this.smokeU=-1,this.smoking={on:!1,lit:!1,drag:0,flame:0,exhale:!1,atMouth:0,err:new T,errOK:!1,F:new T,R:new T,mouth:new T},this.handW=0,this.handT=new T,this.closeK=0,this.autoZoom={t:0,on:!0},this.wideK=0,this.zoom={focal:Ca,back:0,near:0,focalS:Ca,backS:0,nearS:0},this.orbitA=null,this.orbitHold=0,this.enterRadius=10,this.cyc={t:0,n:0,rest:Zg},this.mouthCorr=new T,this.wd={mode:"idle",t:0,dur:4,face:null,target:new T},this.lk={t:0,ty:0,tp:0,y:0,p:0},this._q1=new Vt,this._q2=new Vt,this._q3=new Vt,this._q4=new Vt,this._pole=new T,this._A=new T,this._O=new T,this._H=new T,this._t1=new T,this._t2=new T,this.shot={pos:new T,look:new T},this.cam={pos:new T,look:new T,focus:new T,focal:28,range:2},this._p=new T,this._l=new T,this._w=new T}get active(){return this.state!=="off"}get busy(){return this.state==="stopping"||this.state==="exit"||this.state==="enter"}place(t){let e=this.person.headOffsetSit,[n,i,s]=t.eye;if(t.seat?.hip){let a=this.person.hipOffsetSit,[o,c,l]=t.seat.hip;this.seat.set(o+a.x,c-a.y,l+a.z)}else this.seat.set(n+e.x,i-.1-e.y,s+.06+e.z);this.out.set(-t.width/2-.5,0,this.seat.z-.1),this.lean.set(-t.width/2-.16,0,-t.length/2+1.05),this.walkEnd.set(this.lean.x-.3,0,this.lean.z),this.corner.set(-t.width/2-.55,0,-t.length/2-.75),this.stand.set(-.15,0,-t.length/2-1.2)}sit(){let t=this.person;t.ready&&(t.root.position.copy(this.seat),t.root.rotation.set(0,Lo,0),t.tilt.rotation.set(0,0,0),t.play("Driving_Loop",0))}toggle(t){return this.state==="off"?(this.state="stopping",this.t=0,this.v0=Math.max(t,.5),this.stopT=-1,this.smokeU=-1,this.handW=0,this.wd.mode="idle",this.wd.t=0,this.wd.dur=3+Math.random()*3,this.wd.face=null,this.lk.t=1,!0):this.state==="parked"?(this.stand.copy(this.person.root.position),this.enterYaw=this.person.root.rotation.y,this.enterRadius=Math.max(1,10+this.zoom.backS-this.zoom.nearS),this.autoZoom.on=!1,this.state="enter",this.t=0,!0):!1}zoomBy(t){if(this.wideK<.3)return!1;this.autoZoom.on=!1,this.noteCameraInput();let e=this.zoom,n=Math.log(t);if(n>0){let i=Math.min(n,e.near/Vd);e.near-=i*Vd,n-=i;let s=Math.log(e.focal/Kg),a=Math.min(n,s);e.focal/=Math.exp(a),n-=a,n>0&&(e.back=Math.min(Jg,e.back+n*Do))}else if(n<0){let i=Math.min(-n,e.back/Do);if(e.back-=i*Do,n+=i,n<0){let s=Math.log(cS/e.focal),a=Math.min(-n,s);e.focal*=Math.exp(a),n+=a}n<0&&(e.near=Math.min(lS,e.near-n*Vd)),e.back<1e-6&&(e.back=0)}return!0}noteCameraInput(){this.wideK>=.3&&(this.orbitHold=hS)}speed(t,e){return this.state!=="stopping"?0:Math.max(0,t-Math.max(1.5,this.v0/3.2)*e)}update(t,e,n){this.t+=t;let i=this.cars.dim,s=this.cam,a=this._p,o=this._l;if(this.state==="stopping"){let c=this.cars.frontWheel(this._w),l=ln(this.t/5);a.set(c.x-1.55+.3*l,.34,c.z-1.1+.2*l),o.set(c.x+.05,c.y*.92,c.z+.08),s.focus.copy(c),e.localToWorld(s.focus),s.focal=45,s.range=.35,n<=.01&&this.stopT<0&&(this.stopT=this.t),this.stopT>=0&&this.t-this.stopT>.9&&this._enterState("exit",i)}else this.state==="exit"?this._exit(i,t):this.state==="enter"?this._enter(i,t):this.state==="parked"&&this.smokeU>3.4&&this._wander(t,i);this.smokeU>=0&&this.state!=="enter"&&this._smoke(t),this._hand(),this._look(t),this.state!=="stopping"?this._camera(t,e):(s.pos.copy(a),e.localToWorld(s.pos),s.look.copy(o),e.localToWorld(s.look))}_enterState(t,e){this.state=t,this.t=0,t==="exit"&&(this.shot.pos.set(-e.width/2-4.2,1.45,this.seat.z-2.7),this.shot.look.set(-e.width/2-.25,.95,this.seat.z-.6),this.closeK=0,this.wideK=0,this.orbitA=null,this.mouthCorr.set(0,0,0),Object.assign(this.zoom,{focal:Ca,back:0,near:0,focalS:Ca,backS:0,nearS:0}),this.orbitHold=0,this.autoZoom.t=0,this.autoZoom.on=!0)}_camera(t,e){let n=this.cam,i=this.state==="exit"&&this.t>=oS||this.state==="parked"||this.state==="enter"?1:0;this.wideK+=(i-this.wideK)*(1-Math.exp(-t*.9));let s=this.zoom,a=this.autoZoom;if(i&&a.on){a.t+=t;let f=Math.log(Ca/Kg),d=ln(a.t/Yg)*(f+Jg/Do);s.focal=Ca/Math.exp(Math.min(d,f)),s.back=Math.max(0,d-f)*Do,s.near=0,a.t>=Yg&&(a.on=!1)}let o=1-Math.exp(-t*6);s.focalS+=(s.focal-s.focalS)*o,s.backS+=(s.back-s.backS)*o,s.nearS+=(s.near-s.nearS)*o;let c=ln(this.wideK),l=this.person.root.position,h=this._p.copy(this.shot.pos),u=this._l.set(l.x,1.2,l.z);if(e.localToWorld(h),e.localToWorld(u),this.person.head.getWorldPosition(n.focus),n.focal=32,n.range=.8,c>.001){let f=this.person.root.getWorldPosition(this._t1).addScaledVector(vr,.95);this.orbitA===null&&(this.orbitA=Math.atan2(h.x-f.x,h.z-f.z)),this.orbitHold>0?this.orbitHold=Math.max(0,this.orbitHold-t):this.orbitA+=t*.1*c;let d=Math.max(1,10+s.backS-s.nearS);if(this.state==="enter"){let p=.6+this.stand.distanceTo(this.corner)/gr+this.corner.distanceTo(this.out)/gr;d=zd(this.enterRadius,1,ln(this.t/p))}let g=d*.28,v=Math.sqrt(Math.max(0,d*d-g*g)),m=this._w.set(Math.sin(this.orbitA)*v,g,Math.cos(this.orbitA)*v).add(f);h.lerp(m,c),u.lerp(f,c),n.focal=zd(n.focal,s.focalS,c),n.range=zd(n.range,.9,c)}else this.orbitA=null;n.pos.copy(h),n.look.copy(u)}_exit(t,e){let n=this.person,i=this.t,s=n.root;if(i<2.3&&this.cars.setDoor(nh(i/1.1)),i<1){s.position.copy(this.seat),s.rotation.y=qi(Lo,Bd,ln((i-.45)/.6));return}let a=1,o=1.25;if(i<a+o){n.play("Sitting_Exit",.25,{once:!0,timeScale:n.duration("Sitting_Exit")/o});let d=ln((i-a)/o);s.position.lerpVectors(this.seat,this.out,d),s.rotation.y=Bd;return}let c=a+o,l=1;if(i<c+l){n.play("Idle_Loop",.3),s.position.copy(this.out),s.rotation.y=qi(Bd,Gd,ln((i-c)/.35)),this.cars.setDoor(1-ln((i-c-.25)/.6));return}this.cars.setDoor(0);let h=c+l,u=this.out.distanceTo(this.corner)/gr,f=this.corner.distanceTo(this.stand)/gr;if(n.tilt.rotation.x=0,i<h+u+f){n.play("Walk_Loop",.3),this._walk(s,[this.out,this.corner,this.stand],[u,f],i-h,e);return}n.play("Idle_Loop",.4),s.position.copy(this.stand),this.smokeU<0&&(this.smokeU=0,this.turnFrom=s.rotation.y,this.cyc.t=0,this.cyc.n=0,this.cyc.rest=Zg),s.rotation.y=qi(this.turnFrom,Io,ln(this.smokeU/.6)),this.smokeU>.8&&(this.state="parked")}_walk(t,e,n,i,s){let a=0;for(;a<n.length-1&&i>n[a];)i-=n[a],a++;let o=e[a],c=e[a+1],l=nh(i/n[a]);t.position.lerpVectors(o,c,l);let h=Math.atan2(c.x-o.x,c.z-o.z);t.rotation.y=qi(t.rotation.y,h,Math.min(1,s*7))}_smoke(t){let e=this.smokeU+=t,n=this.person,i=this.smoking;if(!n.arms?.r)return;n.root.updateMatrixWorld(!0);let s=n.root.getWorldPosition(this._O),a=n.root.getWorldDirection(i.F).setY(0).normalize(),o=i.R.crossVectors(a,vr).normalize();n.head.getWorldPosition(this._H);let c=i.mouth.copy(this._H).addScaledVector(a,.1),l=this._t1.copy(s).addScaledVector(o,.2).addScaledVector(vr,.92),h=this._t2.copy(s).addScaledVector(o,.27).addScaledVector(vr,.97).addScaledVector(a,.1),u=this._A.copy(c).addScaledVector(a,.1).addScaledVector(o,.1).addScaledVector(vr,-.12);i.atMouth>.9&&i.errOK&&(this.mouthCorr.addScaledVector(i.err,Math.min(1,t*8)),this.mouthCorr.length()>.2&&this.mouthCorr.setLength(.2)),u.add(this.mouthCorr);let f=this.handT;if(i.flame=0,i.drag=0,i.exhale=!1,i.atMouth=0,e<.6){this.handW=0,i.on=!1;return}if(e<1.4){f.copy(l),this.handW=ln((e-.6)/.6),i.on=e>1.25;return}if(i.on=!0,this.handW=1,e<2.2){let x=ln((e-1.4)/.8);f.lerpVectors(l,u,x),i.atMouth=x;return}if(e<3){f.copy(u),i.atMouth=1,i.flame=e>2.3&&e<2.85?1:0,i.lit=e>2.65,i.drag=i.lit?1:0;return}i.lit=!0;let d=this.cyc;d.t+=t;let g=.8+d.rest+.8+1.3;d.t>=g&&(d.t-=g,d.n++,d.rest=d.n===1?uS:fS+Math.random()*dS);let v=d.t,m=.8+d.rest,p=m+.8;if(v<.8){let x=ln(v/.8);f.lerpVectors(u,h,x),i.atMouth=1-x}else if(v<m)f.copy(h);else if(v<p){let x=ln((v-m)/.8);f.lerpVectors(h,u,x),i.atMouth=x}else f.copy(u),i.drag=1,i.atMouth=1;i.exhale=v>.6&&v<1.6}_wander(t,e){let n=this.person,i=n.root,s=this.wd;if(s.t+=t,s.mode==="idle"){if(n.play("Idle_Loop",.4),s.face!==null&&(i.rotation.y=qi(i.rotation.y,s.face,Math.min(1,t*1.6))),s.t>s.dur){if(s.t=0,Math.random()<.6&&this._pickTarget(e)){s.mode="walk";return}s.dur=3+Math.random()*6,s.face=Math.random()<.5?i.rotation.y+(Math.random()-.5)*1.6:null}return}n.play("Walk_Loop",.35,{timeScale:.85});let a=this._t1.subVectors(s.target,i.position).setY(0),o=a.length(),c=Math.atan2(a.x,a.z);i.rotation.y=qi(i.rotation.y,c,Math.min(1,t*4));let l=Math.cos(i.rotation.y-c),h=Math.min(o,gr*.8*t*Math.max(0,l));if(i.position.addScaledVector(a.normalize(),h),o<.05){s.mode="idle",s.t=0,s.dur=3+Math.random()*7;let u=Math.random();s.face=u<.5?Io+(Math.random()-.5)*.9:u<.75?jg+(Math.random()-.5)*1.2:Lo+(Math.random()-.5)*1.2}}_pickTarget(t){let e=this.person.root.position,n=this.wd,i=-t.length/2-.9,s=-t.length/2-8;for(let a=0;a<12;a++){let o=Math.random()*Math.PI*2,c=1.5+Math.random()*3,l=e.x+Math.sin(o)*c,h=e.z+Math.cos(o)*c;if(!(l<-1.3||l>2.8||h>i||h<s||Math.hypot(l,h)>9.5))return n.target.set(l,0,h),!0}return!1}_look(t){let e=this.person,n=this.lk;if(!e.head)return;let i=this.state==="parked"&&this.smokeU>3.4;if(i&&(n.t-=t)<=0){n.t=1.5+Math.random()*3.5;let c=Math.random();c<.25?(n.ty=(Math.random()-.5)*.4,n.tp=.35+Math.random()*.25):c<.75?(n.ty=(Math.random()<.5?-1:1)*(.5+Math.random()*.45),n.tp=(Math.random()-.4)*.2):(n.ty=(Math.random()-.5)*.3,n.tp=(Math.random()-.5)*.15)}let s=i?1-this.smoking.atMouth:0,a=Math.min(1,t*2.2);if(n.y+=(n.ty*s-n.y)*a,n.p+=(n.tp*s-n.p)*a,Math.abs(n.y)+Math.abs(n.p)<.001)return;e.root.updateMatrixWorld(!0);let o=this._t2.set(1,0,0).applyQuaternion(e.root.getWorldQuaternion(this._q1));this._q2.setFromAxisAngle(vr,n.y*.5).multiply(this._q3.setFromAxisAngle(o,-n.p*.5));for(let c of[e.neck,e.head])c&&(c.getWorldQuaternion(this._q1),c.parent.getWorldQuaternion(this._q4),c.quaternion.copy(this._q4.invert().multiply(this._q2.clone().multiply(this._q1))),c.updateMatrixWorld(!0))}_hand(){if(this.handW<=.001||!this.person.arms?.r)return;let t=this.smoking,e=t.atMouth,n=this._pole.copy(t.R).multiplyScalar(.55+.35*e).addScaledVector(t.F,-.65*(1-e)+.1*e).addScaledVector(vr,-.35-.2*e),i=this.person.arms.r[2].getWorldPosition(this._A);this.person.reach("r",i.lerp(this.handT,this.handW),n)}_enter(t,e){let n=this.person,i=this.t,s=n.root;if(this.smoking.on=!1,this.smoking.lit=!1,this.handW=Math.max(0,this.handW-e*2.5),this.smokeU=-1,n.tilt.rotation.x=0,i<.6){n.play("Idle_Loop",.3),s.position.copy(this.stand),s.rotation.y=qi(this.enterYaw??Io,Math.atan2(this.corner.x-this.stand.x,this.corner.z-this.stand.z),ln(i/.6));return}let a=.6,o=this.stand.distanceTo(this.corner)/gr,c=this.corner.distanceTo(this.out)/gr,l=c+o;if(i<a+l){n.play("Walk_Loop",.3),this._walk(s,[this.stand,this.corner,this.out],[o,c],i-a,e);return}let h=a+l;if(i<h+1.1){n.play("Idle_Loop",.25),s.position.copy(this.out),s.rotation.y=i<h+.75?qi(jg,Gd,ln((i-h)/.35)):qi(Gd,Io,ln((i-h-.75)/.35)),this.cars.setDoor(ln((i-h-.15)/.6));return}this.cars.setDoor(1);let u=h+1.1,f=1.4;if(i<u+f){n.play("Sitting_Enter",.25,{once:!0,timeScale:n.duration("Sitting_Enter")/f});let g=ln((i-u)/f);s.position.lerpVectors(this.out,this.seat,g),s.rotation.y=qi(Io,Lo,ln((i-u-.3)/(f-.3)));return}n.play("Driving_Loop",.4),s.position.copy(this.seat),s.rotation.y=Lo;let d=u+f;this.cars.setDoor(1-nh((i-d)/.9)),i>d+1&&(this.cars.setDoor(0),this.state="off")}};var sh=class{constructor(t){this.renderer=t;let e=.125,n=.09375;this.size=[e,n],this.rt=new mn(384,Math.round(384*n/e),{type:Wn}),this.cam=new Ue(30,e/n,.15,3e3),this.cam.layers.enable(3),this.group=new Pt,this.group.visible=!1;let i=new Nt(new re(e+.015,n+.011,.025),new qt({color:1842206,roughness:.55}));i.position.z=-.015;let s=this.rt.texture;s.repeat.x=-1,s.offset.x=1;let a=new Nt(new Ei(e,n),new Ye({map:s}));this.group.add(i,a),this._p=new T,this._q=new Vt,this._d=new T,this._eye=new T}place(t,e){let[n,i,s]=t.eye;e?(this.group.position.copy(e.pos),this.group.position.x+=Gl[0]/2+.014*.85/2+.02+(this.size[0]+.015)/2,this.group.position.y+=-Gl[1]/2-.03+this.size[1]/2+.055,this.group.position.z+=.025):this.group.position.set(.21,i-.28,s-.6);let a=this._eye.set(n,i,s).sub(this.group.position).normalize(),o=this._d.set(0,-.03,1).normalize().add(a).normalize();this.group.quaternion.setFromUnitVectors(new T(0,0,1),o)}render(t,e){let n=this.renderer,i=this.cam;this.group.updateMatrixWorld(),this.group.getWorldPosition(i.position),this.group.parent.getWorldQuaternion(this._q),this._d.set(0,-.03,1).applyQuaternion(this._q),i.lookAt(this._d.add(i.position)),i.updateMatrixWorld();let s=n.getRenderTarget(),a=n.shadowMap.autoUpdate;n.shadowMap.autoUpdate=!1,this.group.visible=!1,e&&(e.visible=!1),n.setRenderTarget(this.rt),n.render(t,i),n.setRenderTarget(s),n.shadowMap.autoUpdate=a,e&&(e.visible=!0),this.group.visible=!0}};var pS=320,mS=200,gS=`
  uniform mat4 uTex;
  varying vec4 vUv;
  void main() {
    vUv = uTex * vec4(position, 1.0);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }`,vS=`
  uniform sampler2D tMap;
  varying vec4 vUv;
  void main() {
    vec3 c = texture2DProj(tMap, vUv).rgb;
    gl_FragColor = vec4(c * 0.82, 1.0);          // kính gương hơi tối (bạc phủ sau kính)
  }`,rh=class{constructor(t){this.renderer=t,this.cam=new Ue,this.cam.layers.enable(3),this.frame=0,this.current=null,this._v=new T,this._e=new T,this._p=new T,this._n=new T,this._m=new bt,this._q=[0,1,2,3].map(()=>new T),this._bias=new bt().set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1)}setCar(t){if(this.current&&this.current!==t&&this._show(this.current,!1),this.current=t,!t||t.wingMirrors!==void 0)return;t.wingMirrors=null;let e=t.group;e.updateMatrixWorld(!0);let n=null;if(e.traverse(g=>{!n&&g.isMesh&&/^WingmirrorGlass/i.test(g.name)&&g.material?.name==="Mirror"&&(n=g)}),!n)return;let i=this._m.copy(e.matrixWorld).invert().multiply(n.matrixWorld),a=(n.geometry.index?n.geometry.toNonIndexed():n.geometry).attributes.position,o=[[],[]],c=new T,l=new T,h=new T;for(let g=0;g<a.count;g+=3)c.fromBufferAttribute(a,g).applyMatrix4(i),l.fromBufferAttribute(a,g+1).applyMatrix4(i),h.fromBufferAttribute(a,g+2).applyMatrix4(i),o[c.x+l.x+h.x<0?0:1].push(c.clone(),l.clone(),h.clone());let u=new T(...t.dim.eye),f=[];for(let g of o){if(g.length<3)continue;let v=new T,m=new T;for(let F=0;F<g.length;F+=3){let N=new T().subVectors(g[F+1],g[F]).cross(new T().subVectors(g[F+2],g[F]));N.dot(new T().subVectors(u,g[F]))<0&&N.negate(),m.add(N),v.add(g[F]).add(g[F+1]).add(g[F+2])}v.multiplyScalar(1/g.length),m.normalize();let p=new T(0,1,0).cross(m).normalize(),x=new T().crossVectors(m,p),y=1e9,M=-1e9,E=1e9,b=-1e9;for(let F of g){let N=this._v.subVectors(F,v);y=Math.min(y,N.dot(p)),M=Math.max(M,N.dot(p)),E=Math.min(E,N.dot(x)),b=Math.max(b,N.dot(x))}let w=[[y,E],[M,E],[M,b],[y,b]].map(([F,N])=>v.clone().addScaledVector(p,F).addScaledVector(x,N)),C=new At().setFromPoints(g.map(F=>F.clone().addScaledVector(m,.003))),_=new mn(pS,mS,{type:Wn}),S=new Ee({uniforms:{tMap:{value:_.texture},uTex:{value:new bt}},vertexShader:gS,fragmentShader:vS}),I=new Nt(C,S);I.visible=!1,I.frustumCulled=!1,e.add(I),f.push({mesh:I,rt:_,P:v,N:m,N0:m.clone(),corners:w,ready:!1})}let d=[];e.traverse(g=>{g.isMesh&&/^Wingmirror/i.test(g.name)&&d.push(g)}),t.wingMirrors={glass:n,mirrors:f,housing:d}}_show(t,e){let n=t?.wingMirrors;if(n){n.glass.visible=!e;for(let i of n.mirrors)i.mesh.visible=e&&i.ready}}render(t,e,n){let i=this.current,s=i?.wingMirrors;if(!s)return;if(!n){this._show(i,!1),s.aimed=!1;return}let a=i.group,o=this.renderer;a.updateMatrixWorld();let c=e.getWorldPosition(this._e);if(!s.aimed){let u=this._v.copy(c).applyMatrix4(this._m.copy(a.matrixWorld).invert());for(let f of s.mirrors){let d=this._p.set(Math.sign(f.P.x)*.09,-.045,1).normalize();f.N.subVectors(u,f.P).normalize().add(d).normalize()}s.aimed=!0}let l=s.mirrors.every(u=>u.ready)?[s.mirrors[this.frame++%s.mirrors.length]]:s.mirrors,h=s.housing.map(u=>u.visible);s.housing.forEach(u=>{u.visible=!1});for(let u of l)this._renderOne(t,u,a,c,o);s.housing.forEach((u,f)=>{u.visible=h[f]}),this._show(i,!0),s.glass.visible=!1}_renderOne(t,e,n,i,s){let a=this._p.copy(e.P).applyMatrix4(n.matrixWorld),o=this._n.copy(e.N).transformDirection(n.matrixWorld),c=this._v.subVectors(i,a).dot(o);if(c<=.01)return;let l=this.cam;l.position.copy(i).addScaledVector(o,-2*c),l.up.set(0,1,0),l.lookAt(this._v.copy(l.position).add(o)),l.updateMatrixWorld();let h=e.corners.map((x,y)=>this._q[y].copy(x).applyMatrix4(n.matrixWorld).applyMatrix4(l.matrixWorldInverse)),u=Math.max(.01,Math.min(...h.map(x=>-x.z))-.004),f=1e9,d=-1e9,g=1e9,v=-1e9;for(let x of h){let y=u/Math.max(1e-4,-x.z);f=Math.min(f,x.x*y),d=Math.max(d,x.x*y),g=Math.min(g,x.y*y),v=Math.max(v,x.y*y)}l.projectionMatrix.makePerspective(f,d,v,g,u,3e3),l.projectionMatrixInverse.copy(l.projectionMatrix).invert(),e.mesh.material.uniforms.uTex.value.copy(this._bias).multiply(l.projectionMatrix).multiply(l.matrixWorldInverse).multiply(n.matrixWorld);let m=s.getRenderTarget(),p=s.shadowMap.autoUpdate;s.shadowMap.autoUpdate=!1,e.mesh.visible=!1,s.setRenderTarget(e.rt),s.render(t,l),s.setRenderTarget(m),s.shadowMap.autoUpdate=p,e.ready=!0}};var ah=Math.PI*2,xS=Oe.smoothstep,oh=class{constructor(){this.phase=0,this.omega=ah/1.5,this.idle=60,this.wet=0,this.flow=0,this.flowDir=-1,this._v=new T,this._inv=new bt}get running(){return this.phase>0}angle(t){return t*.5*(1-Math.cos(this.phase))}update(t,e,n){let i=e>.15;this.omega=ah/(e>.95?1.05:1.55),i||this.phase>0?(this.phase+=this.omega*t,this.phase>=ah&&(this.phase=i?this.phase-ah:0),this.idle=0):this.idle+=t,this.wet+=(e-this.wet)*(1-Math.exp(-t*(e>this.wet?1.5:.12)));let s=Oe.lerp(-.05,.24,xS(n,6,20));this.flow+=s*t,this.flowDir=s>=0?1:-1}apply(t,e,n,i,s,a,o=null){if(n.getWorldDirection(this._v),this._v.transformDirection(this._inv.copy(i.matrixWorld).invert()),this._v.z>0&&(s=o),t.uGlass.value=s?e:0,t.uRearGlass.value=s?.rear?1:0,e<=0||!s)return;n.updateMatrixWorld(),t.uInvVP.value.multiplyMatrices(n.matrixWorld,n.projectionMatrixInverse),n.getWorldPosition(t.uCamPos.value),n.getWorldDirection(t.uCamFwd.value),t.uTanF.value=Math.tan(Oe.degToRad(n.fov)/2),t.uNear.value=n.near,t.uFar.value=n.far;let c=i.matrixWorld;if(t.uGC.value.copy(s.center).applyMatrix4(c),t.uGN.value.copy(s.normal).transformDirection(c),t.uGU.value.copy(s.right).transformDirection(c),t.uGV.value.copy(s.up).transformDirection(c),t.uGB.value.fromArray(s.bounds),t.uWipe.value.set(this.phase,this.omega,this.idle,a),t.uFlow.value.set(this.flow,this.flowDir),s.rear)return;let[l,h]=s.wipers;t.uPiv.value.set(l.u,l.v,h.u,h.v),t.uRest.value.set(l.rest,l.sign,h.rest,h.sign),t.uBlade.value.set(l.r0,l.r1,h.r0,h.r1),t.uSweep.value=s.sweep}};var Fo=5,bS=200,yS=40,ch=200,Ws=r=>{let t=Math.sin(r*127.1+311.7)*43758.5453;return t-Math.floor(t)},_S=r=>{let t=Math.floor(r),e=r-t,n=e*e*(3-2*e);return Ws(t)*(1-n)+Ws(t+1)*n},Qg=(r,t,e)=>{let n=Math.min(1,Math.max(0,(e-r)/(t-r)));return n*n*(3-2*n)},MS=`
  attribute float aGlow;
  uniform float uScale, uFogD;
  varying float vGlow;
  void main() {
    vec4 mv = viewMatrix * vec4(position, 1.0);
    float fd = uFogD * -mv.z;
    vGlow = aGlow * exp(-fd * fd);                // chìm dần trong sương xa
    gl_PointSize = clamp(0.25 * uScale / -mv.z, 2.5, 22.0);
    gl_Position = projectionMatrix * mv;
  }`,ES=`
  uniform vec3 uColor; uniform float uAmt;
  varying float vGlow;
  void main() {
    float d = length(gl_PointCoord - 0.5) * 2.0;
    // lõi nhỏ (bằng nửa trước), quầng rộng + mờ dần về 0 ở mép điểm (nhoè, không lộ khung vuông)
    float core = smoothstep(0.11, 0.0, d), halo = exp(-d * d * 3.5) * max(0.0, 1.0 - d * d) * 0.45;
    float a = (core + halo) * vGlow * uAmt;
    if (a < 0.003) discard;
    gl_FragColor = vec4(uColor * a, 1.0);
  }`,lh=class{constructor(t){this.pos=new Float32Array(ch*3),this.glow=new Float32Array(ch);let e=new At;e.setAttribute("position",new Et(this.pos,3).setUsage(zn)),e.setAttribute("aGlow",new Et(this.glow,1).setUsage(zn)),e.setDrawRange(0,0),this.mat=new Ee({uniforms:{uScale:{value:500},uFogD:{value:0},uColor:{value:new et(9,12,2.6)},uAmt:{value:0}},vertexShader:MS,fragmentShader:ES,transparent:!0,depthWrite:!1,blending:tn,fog:!1}),this.points=new gn(e,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=4,this.points.visible=!1,t.add(this.points),this.ground=new Map,this._p={}}update(t,e,n,i,s,a,o=0){if(this.mat.uniforms.uAmt.value=s,this.mat.uniforms.uScale.value=a,this.mat.uniforms.uFogD.value=o,this.points.visible=s>.01,!this.points.visible)return;let c=this._p,l=0,h=Math.floor((e-yS)/Fo),u=Math.floor((e+bS)/Fo);for(let d=h;d<=u&&l<ch;d++){let g=Qg(.38,.58,_S(d*Fo/140+3.7));if(g<=0||Ws(d*1.31)>g*.9)continue;let v=1+Math.floor(Ws(d*2.17)*3);for(let m=0;m<v&&l<ch;m++){let p=d*8+m,x=Ws(p*3.1+.5),y=Ws(p*5.7+1.3),M=Ws(p*7.3+2.9),E=Ws(p*9.1+4.4),b=d*Fo+x*Fo;n.at(b,c);let w=y<.5?-1:1,C=w*(4.6+16*M*M),_=Math.cos(c.th),S=-Math.sin(c.th),I=c.x+_*C,F=c.z+S*C,N=this.ground.get(p);N===void 0&&(N=i?i.heightAt(I,F):c.y,N>c.y-3&&N<c.y+4||(N=c.y),this.ground.set(p,N));let L=.35+E*.3,P=.5+x*.4;this.pos[l*3]=I+Math.sin(t*L+y*20)*.9+Math.sin(t*P*1.7+M*9)*.3,this.pos[l*3+1]=N+.7+2.6*E+Math.sin(t*P+x*13)*.35,this.pos[l*3+2]=F+Math.cos(t*P+M*17)*.9+Math.cos(t*L*1.9+E*7)*.3;let D=Math.sin(t*(.9+.8*M)+x*40);this.glow[l]=.12+.88*Qg(.25,.9,D)*(.6+.4*y),l++}}if(this.ground.size>1500)for(let d of this.ground.keys())d<h*8&&this.ground.delete(d);let f=this.points.geometry;f.setDrawRange(0,l),f.attributes.position.needsUpdate=!0,f.attributes.aGlow.needsUpdate=!0}};var tv=r=>r>0?1.5:-1.8,wS=r=>r>0?-1.8:1.5,$g=r=>r.home??tv(r.dir),TS=r=>r.home!==void 0?-r.home:wS(r.dir);var hh=class{constructor(){this.player={player:!0,state:"cruise",target:null,dir:1},this.active=[],this.city=!1}_other(t){if(!this.city)return TS(t);let e=$g(t);return Math.sign(e)*(Math.abs(e)<3.5?5.25:1.75)}_overlapLat(t,e,n){return Math.abs(t.d-e)<(t.w+n)/2+.25}_all(){return[this.player,...this.active]}_ahead(t,e,n){let i=null,s=n;for(let a of this._all()){if(a===t||!this._overlapLat(a,e,t.w))continue;let o=(a.s-t.s)*t.dir;o>0&&o<s&&(s=o,i=a)}return i?{e:i,gap:s-(t.len+i.len)/2}:null}_follow(t,e){return Math.max(0,t+.5*(e-(6+1.1*t)))}_canOvertake(t,e,n){let i=this._other(t),s=(e.s-t.s)*t.dir,a=e.player&&e.v<1?16:8,o=Math.max(1,n-e.v),c=(s+(t.len+e.len)/2+a)/o;for(let l of this._all()){if(l===t||l===e||!this._overlapLat(l,i,t.w))continue;let h=(l.s-t.s)*t.dir;if(h<0&&l.dir===t.dir&&l.v>t.v-1&&-h-(t.len+l.len)/2<15+(l.v-t.v)*4)return!1;if(!(h<-(t.len+l.len)/2-3)&&(h<s+e.len/2+50||l.dir!==t.dir&&h-(n+l.v)*c<25||l.dir===t.dir&&l.v<n&&h-(n-l.v)*c<15))return!1}return!0}_overtakeDanger(t,e,n){let i=this._other(t),s=(e.s-t.s)*t.dir+(t.len+e.len)/2+8,a=Math.max(0,s)/Math.max(1,n-e.v);for(let o of this._all()){if(o===t||o===e||o.dir===t.dir||!this._overlapLat(o,i,t.w))continue;let c=(o.s-t.s)*t.dir;if(c>0&&c-(n+o.v)*a<15)return!0}return!1}_sideClear(t,e,n=2){for(let i of this._all()){if(i===t||!this._overlapLat(i,e,t.w))continue;let s=(i.s-t.s)*t.dir,a=Math.abs(s)-(t.len+i.len)/2;if(a<n)return!1;let o=s<0?i.dir===t.dir?i.v-t.v:-1e9:i.dir===t.dir?t.v-i.v:t.v+i.v;if(o>0&&a<o*3+5)return!1}return!0}_decide(t,e){let n=$g(t),i=this._other(t),s=n,a=e,o=60+3*Math.max(t.v,e);if(t.state==="overtake"&&t.target&&this.active.concat([this.player]).includes(t.target)){let c=t.target,l=Math.max(e,c.v+6),h=(t.s-c.s)*t.dir;s=i,a=l,h>(t.len+c.len)/2+(c.player&&c.v<1?16:8)?(t.state="cruise",t.target=null,s=n,a=e):this._overtakeDanger(t,c,l)&&(h<0?(t.state="cruise",t.target=null,s=n,a=Math.max(0,c.v-4)):a=l+6)}else{t.state="cruise",t.target=null;let c=this._ahead(t,n,o);c&&(c.e.dir===t.dir?!t.noOvertake&&c.e.v<e-1.5&&c.gap<30+1.2*t.v&&this._canOvertake(t,c.e,Math.max(e,c.e.v+6))?(t.state="overtake",t.target=c.e,s=i,a=Math.max(e,c.e.v+6)):a=Math.min(a,this._follow(c.e.v,c.gap)):!t.player&&c.e.player&&c.e.home*tv(t.dir)>0&&c.gap<200&&this._sideClear(t,i,30)?s=i:c.gap<120&&(s=n+(n>0?.8:-.8)))}for(let c of[t.d,s]){let l=this._ahead(t,c,o);l&&(l.e.dir===t.dir?a=Math.min(a,this._follow(l.e.v,l.gap)):a=Math.min(a,Math.max(0,(l.gap-12)*.7)))}return s!==t.d&&Math.abs(s-t.d)>.3&&!this._sideClear(t,s)&&(s=t.d),{dT:s,vT:a}}};var Wd=(r,t,e)=>Math.min(e,Math.max(t,r)),In={maxActive:2,sameMax:1,sameGapMin:25,sameGapMax:60,gapMin:10,gapMax:25,detect:30,minSpeed:13.88888888888889,maxSpeed:55.55555555555556},ev=()=>In.minSpeed+Math.random()*(In.maxSpeed-In.minSpeed);function nv(r,t){let e=r.cruise??r.v,n=r.direction??-1,i=o=>t.heading?t.heading(Math.max(0,o)):t.at(Math.max(0,o),{}).th,s=Math.max(12,(e*e-(e*.6)**2)/24+10),a=0;for(let o=0;o<=s;o+=6){let c=Math.max(0,r.s+n*o),l=Math.max(0,c-10),h=c+10,u=i(h)-i(l);a=Math.max(a,Math.abs(Math.atan2(Math.sin(u),Math.cos(u)))/(h-l))}return r.inCurve=a>=(r.inCurve?.0012:.0015),e*(r.inCurve?.6:1)}function iv(r,t,e,n,i=r.cruise??r.v,s=()=>!0){let a=r.direction??-1,o=I=>a*(I.s-r.s),c=Math.max(0,e-r.dim.width/2-.25),l=Wd(r.baseD??r.d,-c,c),h=I=>In.detect+Math.max(0,-a*(I.direction||0)*(I.speed||0))*1.2,u=t.filter(I=>{if(I.id===r||o(I)<-(r.dim.length+I.length)/2-2)return!1;let F=Math.max(0,o(I)-(r.dim.length+I.length)/2),N=Math.max(0,Math.abs(r.d-I.d)-(r.dim.width+I.width)/2);return Math.hypot(F,N)<=h(I)+1e-6}),f=I=>(r.dim.width+I.width)/2+.6,d=(I,F)=>Math.abs(I-F.d)<f(F),g=t.find(I=>I.id===r.avoidFor),v=g&&o(g)>-(r.dim.length+g.length)/2-8?r.avoidD:l,m=u.filter(I=>d(r.d,I)||d(v,I)),p=i;if(m.length){let F=[v,-1.8,1.8,-c,c,...m.flatMap(N=>[N.d-f(N)-.1,N.d+f(N)+.1])].filter(N=>Math.abs(N)<=c&&s(N)&&u.every(L=>!d(N,L)));if(F.sort((N,L)=>Math.abs(N-r.d)-Math.abs(L-r.d)||Math.abs(N-l)-Math.abs(L-l)),F.length){v=F[0];let N=m.reduce((L,P)=>o(L)<o(P)?L:P);r.avoidFor=N.id,r.avoidD=v}else v=r.d;for(let N of m){let L=Math.max(0,o(N)-(r.dim.length+N.length)/2-2),P=-a*(N.direction||0)*(N.speed||0);p=Math.min(p,Math.max(0,Math.sqrt(24*L)-P))}}let x=m.length>0,y=x?16:3,M=Math.max(x?.6:0,Math.min(x?8:2.2,(x?.35:.2)*Math.abs(r.v))),E=v-r.d,b=r.latV||0,w=Math.sign(E)*Math.min(M,Math.sqrt(2*y*Math.abs(E))),C=b+Wd(w-b,-y*n,y*n),_=r.d+C*n;(v-_)*E<=0&&(_=v,C=0);let S=r.v+Wd(p-r.v,-12*n,5*n);for(let I of u){let F=Math.min(r.d,_),N=Math.max(r.d,_);if(I.d+f(I)<=F||I.d-f(I)>=N)continue;let L=o(I)-(r.dim.length+I.length)/2-1.5,P=-a*(I.direction||0)*(I.speed||0)*n;S=Math.min(S,Math.max(0,(L-P)/Math.max(n,1e-6)))}return{d:_,v:S,s:r.s+a*S*n,avoiding:m.length>0,latV:C}}function sv(r,t,e){let n={},i=h=>(t.at(h,n),(n.x-r.x)**2+(n.z-r.z)**2),s=e,a=1/0;for(let h=Math.max(0,e-35);h<=e+35;h+=2){let u=i(h);u<a&&(a=u,s=h)}let o=Math.max(0,s-2),c=s+2;for(let h=0;h<12;h++){let u=(o*2+c)/3,f=(o+c*2)/3;i(u)<i(f)?c=f:o=u}let l=(o+c)/2;return t.at(l,n),{s:l,d:(r.x-n.x)*Math.cos(n.th)-(r.z-n.z)*Math.sin(n.th)}}function rv(r){let t=new Map,e=new Map,n=r.clone();return av(r,n,function(i,s){t.set(s,i),e.set(i,s)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let s=i,a=t.get(i),o=a.skeleton.bones;s.skeleton=a.skeleton.clone(),s.bindMatrix.copy(a.bindMatrix),s.skeleton.bones=o.map(function(c){return e.get(c)}),s.bind(s.skeleton,s.bindMatrix)}),n}function av(r,t,e){e(r,t);for(let n=0;n<r.children.length;n++)av(r.children[n],t.children[n],e)}var SS="assets/models/carriage.glb",AS={length:5.6,width:2.8,height:2.4},Xi={gapMin:15,gapMax:30,max:2,minSpeed:25/3.6,maxSpeed:40/3.6,gallop:11};async function ov(r){let t=await r.loadAsync(SS),e=t.scene;e.traverse(a=>{if(!a.isMesh)return;let o=a.material;o.transparent=!1,o.depthWrite=!0,o.alphaTest=.4,de(o),a.castShadow=!0,a.receiveShadow=!0,a.frustumCulled=!1}),e.rotation.y=Math.PI,e.updateMatrixWorld(!0);let n=new qe().setFromObject(e,!0),i=n.getCenter(new T);e.position.set(-i.x,-n.min.y,-i.z);let s=t.animations[0]||null;return()=>{let a=new Pt;a.add(rv(e));let o=new pa(a);return s&&o.clipAction(s).play(),{group:a,dim:{...AS},wheels:[],mixer:o,carriage:!0}}}var cv=430,lv=.24,hv=1.8,uv=(r,t,e)=>Math.min(e,Math.max(t,r)),uh=class{constructor(t,e){this.scene=t,this.cars=e,this.pool=[],this.active=[],this.policy=new hh,this.ctrl={lane:null,maxV:1/0},this.timer=4+Math.random()*6,this.sameTimer=In.sameGapMin+Math.random()*(In.sameGapMax-In.sameGapMin),this.loading=!1,this.wait=6,this._p={},this._q={},this.beamRoot=new Pt,this.beam=ur(this.beamRoot,null,{glows:!1}),this.beamFor=null,t.add(this.beamRoot),this.carriages=[],this.makeCarriage=null,this.carriageLoading=!1,this.carriageTimer=6}_homeLane(t){return(this.playerHome??t)>=0?hv:-hv}async _loadCarriage(){this.carriageLoading=!0;try{this.makeCarriage=await ov(this.cars.loader)}catch(t){console.warn("carriage",t)}}_spawnCarriage(t,e,n){if(this.active.filter(l=>l.carriage).length>=Xi.max)return!1;let i=Xi.minSpeed+Math.random()*(Xi.maxSpeed-Xi.minSpeed),s=Math.random()<.4&&Math.abs(i-n)>3?1:-1,a=s===-1?t+cv+Math.random()*80:i>n+1?Math.max(10,t-80-Math.random()*30):t+150+Math.random()*70;if(this.active.some(l=>Math.abs(l.s-a)<60)||Math.abs(a-t)<40)return!1;let o=this.carriages.find(l=>!l.busy);if(!o){if(this.carriages.length>=Xi.max)return!1;o=this._vehicle(this.makeCarriage()),this.carriages.push(o)}let c=this._homeLane(e);return Object.assign(o,{s:a,direction:s,busy:!0,cruise:i,v:i,heard:!0,policy:null,inCurve:!1,avoidFor:null,latV:0,yaw:0}),o.d=o.baseD=o.avoidD=s===1?c:-c,o.root.visible=!0,this.active.push(o),!0}async _load(t){this.loading=!0;let e=this.cars.list.filter(n=>n.id!==t).sort(()=>Math.random()-.5);for(let n=0;n<In.maxActive+In.sameMax&&e.length;n++){let i=e[n%e.length];try{let s=await this.cars._load(i);if(this.cars.prepare)try{await this.cars.prepare(s.group)}catch{}this.pool.push(this._vehicle(s))}catch(s){console.warn("traffic",i.id,s)}}}_vehicle(t){let e=new Pt;e.visible=!1,e.add(t.group);let n=t.dim,i=(u,f)=>{let d=new An(new Mn({map:this.cars.softTex,color:u,transparent:!0,opacity:0,depthWrite:!1,blending:tn}));return d.scale.set(f*1.35,f*.7,1),e.add(d),d},s=!!t.carriage,a=ur(e,this.cars.softTex,{spots:!1,glows:!s});fr(a,n);for(let u of t.wheels)u.front=u.pivot.position.z<0,u.pivot.rotation.order="YXZ";let[o,c,l]=xa(n).tail,h=s?[]:[-1,1].map(u=>{let f=i(16720914,1.6);return f.position.set(u*o,c,l+.03),f});return this.scene.add(e),{root:e,wheels:t.wheels,dim:n,headlights:a,tails:h,busy:!1,s:0,v:0,d:0,carriage:s,mixer:t.mixer||null}}update(t,e,n,i,s,a,o=[],c=null){if(!this.pool.length){!this.loading&&(this.wait-=t)<=0&&this._load(a);return}this.cars.loader&&!this.makeCarriage&&!this.carriageLoading&&this._loadCarriage();let l=o.find(v=>v.id==="player");this.makeCarriage&&(this.carriageTimer-=t)<=0&&(this.carriageTimer=this._spawnCarriage(e,n,l?.speed||0)?Xi.gapMin+Math.random()*(Xi.gapMax-Xi.gapMin):1),this.timer-=t,this.sameTimer-=t;for(let v of[-1,1]){let m=v===1,p=m?"sameTimer":"timer";if(this[p]>0)continue;let x=m?In.sameGapMin:In.gapMin,y=m?In.sameGapMax:In.gapMax;this[p]=x+Math.random()*(y-x);let M=this.pool.filter(w=>!w.busy);if(!M.length||this.active.filter(w=>!w.carriage&&(w.direction??-1)===v).length>=(m?In.sameMax:In.maxActive))continue;let E=M[Math.floor(Math.random()*M.length)],b=this._homeLane(n);E.s=m?Math.max(10,e-80-Math.random()*30):e+cv+Math.random()*80,!(this.active.some(w=>Math.abs(w.s-E.s)<60)||Math.abs(E.s-e)<40)&&(E.direction=v,E.busy=!0,E.cruise=E.v=ev(),E.d=E.baseD=m?b:-b,E.heard=!1,E.policy=null,E.inCurve=!1,E.avoidFor=null,E.avoidD=E.d,E.latV=0,E.yaw=0,E.root.visible=!0,this.active.push(E))}let h=[...o,...this.active.map(v=>({id:v,s:v.s,d:v.d,speed:v.v,direction:v.direction??-1,width:v.dim.width,length:v.dim.length}))],u=o.find(v=>v.id==="player");Object.assign(this.policy.player,{s:e,d:n,v:u?.speed||0,len:u?.length||this.cars.dim?.length||4.7,w:u?.width||this.cars.dim?.width||2,home:this.playerHome??(n>=0?1.5:-1.5)}),this.policy.active=this.active.map(v=>(v.policy||(v.policy={state:"cruise",target:null}),Object.assign(v.policy,{s:v.s,d:v.d,v:v.v,dir:v.direction??-1,len:v.dim.length,w:v.dim.width,home:v.baseD,noOvertake:(v.direction??-1)<0}))),this.policy.active.push(...o.filter(v=>v.id==="person").map(v=>({s:v.s,d:v.d,v:v.speed||0,dir:0,len:v.length,w:v.width,player:!0,home:v.d})));let f=this.policy._decide(this.policy.player,this.playerGoal??u?.speed??0);this.ctrl.lane=f.dT,this.ctrl.maxV=f.vT;let d=this._p,g=this._q;for(let v=this.active.length-1;v>=0;v--){let m=this.active[v],p=nv(m,i),x=this.policy._decide(m.policy,p),y=I=>I*m.baseD>=0||x.dT*m.baseD<0&&this.policy._sideClear(m.policy,I),M=x.vT;if(this.stopFor){let I=m.direction??-1,F=this.stopFor(m.s+I*m.dim.length/2,I,m.v);F<1/0&&(M=Math.min(M,Math.sqrt(2*3.2*Math.max(0,F-1))))}let E=iv(m,h,Te.halfWidth,t,Math.min(p,M),y);if(m.s=E.s,m.d=E.d,m.v=E.v,m.avoiding=E.avoiding,m.latV=E.latV,m.s<e-(m.direction===1?180:90)||m.direction===1&&m.s>e+(m.carriage?400:750)){m.busy=!1,m.root.visible=!1,this.active.splice(v,1);continue}if(c&&u&&!m.carriage){let I=m.s-e,F=m.v*(m.direction??-1)-u.speed,N=Math.abs(F);Math.abs(I)>70&&(m.heard=!1),!m.heard&&N>2&&I*F<0&&Math.abs(m.d-n)<7&&-I/F<c.passDur(N)*.5&&(m.heard=!0,c.passBy(N,Oe.clamp((m.d-n)/4,-.8,.8),Math.abs(m.d-n)))}i.at(m.s,d);let b=i.at(m.s+2.5,g).y,w=i.at(m.s-2.5,g).y;m.root.position.set(d.x+Math.cos(d.th)*m.d,d.y,d.z-Math.sin(d.th)*m.d);let C=m.direction??-1,_=uv(Math.atan2(m.latV||0,Math.max(3,m.v)),-.35,.35);m.yaw=(m.yaw||0)+(_-(m.yaw||0))*(1-Math.exp(-t*8)),m.root.rotation.set(-C*Math.atan2(w-b,5),d.th+(C===-1?Math.PI:0)-C*m.yaw,0,"YXZ");let S=uv(-C*m.yaw*1.8,-.4,.4);for(let I of m.wheels)I.pivot.rotation.x+=C*(m.v*t)/I.radius,I.front&&(I.pivot.rotation.y=S);m.mixer&&(m.mixer.timeScale=m.v/Xi.gallop,m.mixer.update(t)),Ns(m.headlights,m.root,this.cars.viewer,s*lv);for(let I of m.tails)I.material.opacity=(.25+.6*s)*.6}this._beam(e,s)}clearAll(){for(let t of this.active)t.busy=!1,t.root.visible=!1;this.active.length=0,this._beam(0,0),this.ctrl.lane=null,this.ctrl.maxV=1/0}_beam(t,e){let n=null,i=300;for(let s of this.active){if(s.carriage)continue;let a=Math.abs(s.s-t);a<i&&(i=a,n=s)}n!==this.beamFor&&(this.beamFor=n,n&&fr(this.beam,n.dim)),n&&(n.root.updateMatrixWorld(),n.root.matrixWorld.decompose(this.beamRoot.position,this.beamRoot.quaternion,this.beamRoot.scale)),Ns(this.beam,this.beamRoot,null,n?e*lv:0)}};var fv=5,qd=2400,Xd=420,dv=26,jd=12,pv=12.5,mv=33,gv=3,fh=Math.floor(mv*2/gv)+1,Ri=(r,t)=>r+Math.random()*(t-r);function Dn(r,t){let e=r;return e.setAttribute("aKind",new Et(new Float32Array(e.attributes.position.count).fill(t),1)),e.deleteAttribute("uv"),e}function RS(){let r=Os([Dn(new nl(.42,1,6,14).rotateX(Math.PI/2).scale(.92,1.05,1).translate(0,1.05,0),0),Dn(new Ti(.17,10,8).scale(1,.75,1.15).translate(0,.62,-.42),1),Dn(new re(.5,.3,.4).translate(0,1.3,-.72),0)]),t=Os([Dn(new re(.34,.42,.5).rotateX(-.5).translate(0,-.02,.16),0),Dn(new re(.3,.34,.48).translate(0,-.1,.5),0),Dn(new re(.29,.22,.16).translate(0,-.2,.78),1),Dn(new re(.2,.05,.1).rotateZ(.25).translate(.23,0,.38),0),Dn(new re(.2,.05,.1).rotateZ(-.25).translate(-.23,0,.38),0),Dn(new ha(.028,.13,6).rotateZ(-.9).translate(.15,.1,.42),3),Dn(new ha(.028,.13,6).rotateZ(.9).translate(-.15,.1,.42),3),Dn(new re(.035,.05,.05).translate(.152,-.02,.56),2),Dn(new re(.035,.05,.05).translate(-.152,-.02,.56),2)]),e=Os([Dn(new Xe(.08,.065,.72,8).translate(0,-.36,0),0),Dn(new Xe(.07,.08,.1,8).translate(0,-.77,0),2)]),n=Os([Dn(new Xe(.025,.018,.72,6).translate(0,-.36,0),0),Dn(new Ti(.06,6,5).scale(1,1.8,1).translate(0,-.76,0),2)]);return{body:r,head:t,leg:e,tail:n}}function CS(r){let t=new qt({roughness:.82,metalness:0}),e={value:r};return t.onBeforeCompile=n=>{n.uniforms.uSeed=e,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.rgb = cowC;`)},t.customProgramCacheKey=()=>"cow",de(t)}var Yd=class{constructor(t,e){let n=CS(new T(e*17.3,e*5.1,e*11.7)),i=a=>{let o=new Nt(a,n);return o.castShadow=!0,o.receiveShadow=!0,o};this.root=new Pt,this.root.add(i(t.body)),this.neck=new Pt,this.neck.position.set(0,1.15,.85),this.neck.add(i(t.head)),this.root.add(this.neck),this.legs=[[.24,.6],[-.24,.6],[.24,-.6],[-.24,-.6]].map(([a,o])=>{let c=new Pt;return c.position.set(a,.81,o),c.add(i(t.leg)),this.root.add(c),c}),this.tail=new Pt,this.tail.position.set(0,1.4,-.92),this.tail.add(i(t.tail)),this.root.add(this.tail);let s=Ri(.92,1.06);this.root.scale.setScalar(s),this.seed=Math.random()*100,this.mode="graze",this.timer=Ri(1,8),this.head=1.2,this.headY=0,this.gait=0,this.x=0,this.z=0,this.yaw=0,this.y=0,this.hx=1e9,this.hz=1e9}},dh=class{constructor(t){this.group=new Pt,this.group.visible=!1,t.add(this.group);let e=RS();this.cows=Array.from({length:fv},(i,s)=>{let a=new Yd(e,s);return this.group.add(a.root),a});let n=de(new qt({color:5914151,roughness:.92}));this.posts=new _e(new re(.13,1.25,.13).translate(0,.62,0),n,fh),this.rails=new _e(new re(1,.1,.05),n,(fh-1)*2);for(let i of[this.posts,this.rails])i.castShadow=!0,i.receiveShadow=!0,i.frustumCulled=!1,this.group.add(i);this.herd=null,this.enabled=!1,this.onBuild=null,this._p={},this._m=new bt,this._q=new Vt,this._v=new T,this._s=new T,this._up=new T(0,1,0)}set visible(t){this.enabled=t,t||(this.group.visible=!1),this.herd=null}get visible(){return this.enabled}reset(){this.herd=null}_place(t,e,n){let i=Xd+t*qd,s=t%2?-1:1,a=e.at(i,this._p),o=Math.cos(a.th),c=-Math.sin(a.th),l=-Math.sin(a.th),h=-Math.cos(a.th);this.cx=a.x+o*s*dv,this.cz=a.z+c*s*dv,this.cows.forEach((m,p)=>{let x=p/fv*Math.PI*2+Ri(-.4,.4),y=Ri(2,jd*.7);m.x=this.cx+Math.cos(x)*y,m.z=this.cz+Math.sin(x)*y,m.yaw=Ri(0,Math.PI*2),m.hx=1e9,m.mode="graze",m.timer=Ri(1,8)});let u=this._m,f=this._q,d=this._v,g=this._s,v=[];for(let m=0;m<fh;m++){let p=e.at(i-mv+m*gv,this._p),x=p.x+Math.cos(p.th)*s*pv,y=p.z-Math.sin(p.th)*s*pv,M=n.heightAt(x,y);v.push([x,M,y]),u.compose(d.set(x,M-.05,y),f.setFromAxisAngle(this._up,p.th),g.set(1,1,1)),this.posts.setMatrixAt(m,u)}for(let m=0;m<fh-1;m++){let[p,x,y]=v[m],[M,E,b]=v[m+1],w=Math.hypot(M-p,b-y),C=Math.atan2(-(b-y),M-p),_=Math.atan2(E-x,w);for(let S=0;S<2;S++)f.setFromEuler(new oi(0,C,_,"YZX")),u.compose(d.set((p+M)/2,(x+E)/2+(S?1:.55),(y+b)/2),f,g.set(w+.1,1,1)),this.rails.setMatrixAt(m*2+S,u)}this.posts.instanceMatrix.needsUpdate=!0,this.rails.instanceMatrix.needsUpdate=!0,this.onBuild&&(this.onBuild(this.group),this.onBuild=null)}update(t,e,n,i){if(!this.enabled)return;let s=Math.round((e+150-Xd)/qd),a=Xd+s*qd;if(s<0||a<e-250||a>e+750){this.group.visible=!1,this.herd=null;return}this.herd!==s&&(this._place(s,n,i),this.herd=s),this.group.visible=!0;let o=performance.now()/1e3;for(let c of this.cows)this._cow(c,t,o,i)}_cow(t,e,n,i){if(t.timer-=e,t.timer<=0){let u=Math.random();t.mode==="walk"||u<.5?(t.mode="graze",t.timer=Ri(5,14)):u<.75?(t.mode="look",t.timer=Ri(2,5),t.lookY=Ri(-.45,.45)):(t.mode="walk",t.timer=Ri(2.5,6),t.turn=Ri(-.35,.35))}let s=1.2+.05*Math.sin(n*3.1+t.seed),a=0,o=0;if(t.mode==="look"&&(s=-.12,a=t.lookY),t.mode==="walk"){s=.35,o=.55;let u=this.cx-t.x,f=this.cz-t.z;if(u*u+f*f>jd*jd){let d=Math.atan2(u,f);t.yaw+=Math.atan2(Math.sin(d-t.yaw),Math.cos(d-t.yaw))*Math.min(1,e*1.5)}else t.yaw+=t.turn*e}for(let u of this.cows){if(u===t)continue;let f=t.x-u.x,d=t.z-u.z,g=f*f+d*d;if(g<6.25&&g>1e-6){let v=Math.sqrt(g),m=(2.5-v)*e;t.x+=f/v*m,t.z+=d/v*m}}t.x+=Math.sin(t.yaw)*o*e,t.z+=Math.cos(t.yaw)*o*e,Math.hypot(t.x-t.hx,t.z-t.hz)>.4&&(t.y=i.heightAt(t.x,t.z),t.hx=t.x,t.hz=t.z);let c=1-Math.exp(-e*2.2);t.head+=(s-t.head)*c,t.headY+=(a-t.headY)*c,t.gait+=((o>0?1:0)-t.gait)*Math.min(1,e*3),t.phase=(t.phase||0)+e*5.2*t.gait,t.root.position.set(t.x,t.y,t.z),t.root.rotation.y=t.yaw,t.neck.rotation.set(t.head,t.headY,0,"YXZ");let l=.38*t.gait*Math.sin(t.phase);t.legs[0].rotation.x=l,t.legs[3].rotation.x=l,t.legs[1].rotation.x=-l,t.legs[2].rotation.x=-l;let h=Math.max(0,Math.sin(n*.37+t.seed)-.85)*6;t.tail.rotation.set(.12,0,.12*Math.sin(n*1.6+t.seed)+.5*h*Math.sin(n*9))}};var Jd=Te.halfWidth,PS=230,LS=190,ph=Jd+.6,IS=6,DS=4,Ho=13,di=(r,t,e)=>{let n=Math.min(1,Math.max(0,(e-r)/(t-r)));return n*n*(3-2*n)};function FS(r){return{index:r,s:260+r*560+$t(r,71)*100,width:2+3*$t(r,37),flow:.25+.75*$t(r,93)}}function vv(r,t,e,n,i){let s=t.at(r.s,{}),a=Math.cos(s.th)*n,o=-Math.sin(s.th)*n,c=(p,x)=>e.heightAt(p,x),l=1.5,h=n<0?1:-1,u=.61,f=s.x+a*ph,d=s.z+o*ph,g=a,v=o,m=[];for(let p=0;p<i;){if(p>6){let y=(c(f+l,d)-c(f-l,d))*h,M=(c(f,d+l)-c(f,d-l))*h,E=Math.hypot(y,M);if(E>1e-6){let w=.25*di(6,30,p);g+=(y/E-g)*w,v+=(M/E-v)*w}let b=Math.hypot(g,v);if(g/=b,v/=b,g*a+v*o<Math.cos(u)){let w=Math.sign(a*v-o*g||1)*u;g=a*Math.cos(w)-o*Math.sin(w),v=a*Math.sin(w)+o*Math.cos(w)}}let x=p<24?1.2:2.4;if(f+=g*x,d+=v*x,p+=x,c(f,d),p>12&&e._d<Jd+4)break;m.push({x:f,z:d,a:p,dx:g,dz:v})}return m}function xv(r,t){return r.map(({x:e,z:n,a:i,dx:s,dz:a})=>{let c=(2+6*di(30,150,i))*di(10,40,i)*((Ie(i/52+t,3.3)-.5)*2+.35*(Ie(i/13+t,8.1)-.5)*2);return{x:e-a*c,z:n+s*c,a:i}})}function HS(r,t,e){let n=e.iCar;e.setCar(r.s);let i=t.at(r.s,{}),s=Math.cos(i.th),a=-Math.sin(i.th),o=new T(i.x,i.y,i.z),c=r.index*3.17+.37,l=r.width,h=r.flow,u=l*.6,f=l*(.17+.1*h),d=[],g=xv(vv(r,t,e,-1,PS),c),v=xv(vv(r,t,e,1,LS),c+41),m=g.length?g[g.length-1].a:0,p=v.length?v[v.length-1].a:0;for(let P=g.length-1;P>=0;P--)d.push({...g[P],side:-1,end:m,road:!1});let x=16;for(let P=0;P<=x;P++){let D=-ph+2*ph*P/x;d.push({x:i.x+s*D,z:i.z+a*D,d:D,a:0,side:0,road:!0})}for(let P of v)d.push({...P,side:1,end:p,road:!1});let y={};for(let P=0;P<d.length;P++){let D=d[P];if(D.road)D.tx=s,D.tz=a;else{let O=d[Math.max(0,P-1)],G=d[Math.min(d.length-1,P+1)],j=Math.hypot(G.x-O.x,G.z-O.z)||1;D.tx=(G.x-O.x)/j,D.tz=(G.z-O.z)/j}D.px=D.tz,D.pz=-D.tx;let U;D.road?U=u:(U=f*(.7+.6*Ie(D.a/17+c,5.5+D.side)),D.side<0&&(U*=1+.6*(1-di(4,22,D.a))),U+=(u-U)*(1-di(0,D.side<0?6:3,D.a)),U*=.3+.7*di(0,30,D.end-D.a)),D.hw=U,D.wb=D.road?U+.9:U*1.7+.45,D.xs=[],D.ys=[],D.zs=[];for(let O=0;O<Ho;O++){let G=D.wb*(2*O/(Ho-1)-1),j,J,it;D.road?(t.at(r.s+G,y),j=y.x+Math.cos(y.th)*D.d,it=y.z-Math.sin(y.th)*D.d,J=Math.abs(D.d)<=Jd?y.y+.05:e.heightAt(j,it)):(j=D.x+D.px*G,it=D.z+D.pz*G,J=e.heightAt(j,it)),D.xs.push(j),D.ys.push(J),D.zs.push(it)}D.y=D.ys[(Ho-1)/2]}e.iCar=n;let M=0;for(let P=0;P<d.length;P++){let D=d[P],U=d[Math.max(0,P-1)],O=d[Math.min(d.length-1,P+1)];D.slope=D.road?0:Math.abs(O.y-U.y)/(Math.hypot(O.x-U.x,O.z-U.z)||1),P&&(M+=Math.hypot(D.x-d[P-1].x,D.y-d[P-1].y,D.z-d[P-1].z)),D.along=M}let E=M;for(let P=0;P<2;P++){let D=d.map(U=>U.slope);for(let U=1;U<d.length-1;U++)d[U].road||(d[U].slope=D[U-1]*.25+D[U]*.5+D[U+1]*.25)}let b=0;for(let P=0;P<d.length;P++){let D=d[P],U=0;for(let J=P-1;J>=0&&D.along-d[J].along<8;J--)U=Math.max(U,d[J].slope);let O=P?D.along-d[P-1].along:0;b=Math.max(Math.min(1,Math.max(0,(U-D.slope)*.8)),b*Math.exp(-O/(D.road?1.3:3.5))),D.turb=D.road?b*.4:b,D.st=Math.min(1,D.slope/1.3),D.fade=di(0,25,D.along)*di(0,30,E-D.along);let G=P?D.along-d[P-1].along:0,j=(.6+4.4*D.st)*(.75+.5*h);D.tau=P?d[P-1].tau+G/j:0,D.road||(D.fade*=1-di(40,90,D.a)*(1-di(.3,.62,Ie(D.a/45+c,13.7+D.side))))}let w=(P,D,U)=>{let O=Math.min(Ho-1.0001,Math.max(0,(D/U+1)*(Ho-1)/2)),G=Math.floor(O),j=O-G;return P[G]+(P[G+1]-P[G])*j},C=(P,D,U,O)=>{let G=[],j=[],J=[],it=[];d.forEach(($,lt)=>{let ht=D($),_t=U($);for(let Ut=0;Ut<=P;Ut++){let Xt=ht*(2*Ut/P-1);if(G.push(w($.xs,Xt,$.wb)-o.x,w($.ys,Xt,$.wb)+_t-o.y,w($.zs,Xt,$.wb)-o.z),j.push(Xt,$.along,$.tau,h),J.push(...O($,ht)),lt&&Ut<P){let Ft=(lt-1)*(P+1)+Ut,ne=lt*(P+1)+Ut;it.push(Ft,ne,Ft+1,Ft+1,ne,ne+1)}}});let z=new At;return z.setAttribute("position",new yt(G,3)),z.setAttribute("aWUV",new yt(j,4)),z.setAttribute("aInfo",new yt(J,4)),z.setIndex(it),z.computeVertexNormals(),z.computeBoundingSphere(),z},_=P=>P.road?.035+.02*h:.07+.13*di(15,120,P.a)+.4*P.st,S=C(IS,P=>P.hw,_,(P,D)=>[P.st,P.turb,P.fade,D]),I=C(DS,P=>P.wb,P=>P.road?.012:_(P)*.55,(P,D)=>[P.st,P.road?1:0,P.fade,D]),F=[];d.forEach((P,D)=>{if(P.road||P.a<1.3||P.fade<.3)return;let U=(P.a<25?.5:P.a<80?.22:.08)*(1-.65*di(.55,.9,P.st));for(let O of[-1,1]){if($t(r.index*977+D,O>0?11:23)>U)continue;let j=$t(r.index*977+D,O>0?31:47),J=P.a<12?.45+.65*j:.25+.45*j,it=O*Math.min(P.wb-.05,P.hw+.05+.35*J*$t(D,59));F.push({x:w(P.xs,it,P.wb)-o.x,y:w(P.ys,it,P.wb)-(.28+.2*P.st)*J-o.y,z:w(P.zs,it,P.wb)-o.z,s:J,yaw:j*6.283,k:Math.floor($t(D,O+71)*2.999),c:.75+.35*$t(D,O+83)})}if(P.st>.5&&$t(r.index*977+D,97)<.12){let O=($t(D,101)-.5)*P.hw,G=.2+.2*$t(D,103);F.push({x:w(P.xs,O,P.wb)-o.x,y:w(P.ys,O,P.wb)-.1-o.y,z:w(P.zs,O,P.wb)-o.z,s:G,yaw:$t(D,107)*6.283,k:0,c:.7})}});let N=[],L=(P,D)=>d.filter(U=>U.side===P).reduce((U,O)=>!U||Math.abs(O.a-D)<Math.abs(U.a-D)?O:U,null);for(let[P,D]of[[L(-1,2.5),1],[L(1,9),.8]])P&&N.push({x:P.x-o.x,y:P.y+.3-o.y,z:P.z-o.z,w:Math.max(2.2,P.hw*2.4),h:1.2+1.6*h,op:(.1+.14*h)*D});return{origin:o,water:S,wet:I,rocks:F,sprays:N,nodes:d,sheet:u}}var bv=`
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
`;function NS(r,t){r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
attribute vec4 aWUV;
attribute vec4 aInfo;
varying vec4 vWUV;
varying vec4 vInfo;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWUV = aWUV; vInfo = aInfo;`).replace("#include <project_vertex>",`#include <project_vertex>
      mvPosition.xyz *= ${(1-t).toFixed(4)};
      gl_Position = projectionMatrix * mvPosition;`)}function kS(r){let t=new qt({color:16777215,roughness:.08,metalness:0,envMapIntensity:.7,transparent:!0,depthWrite:!1,side:pe,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-12});return t.onBeforeCompile=e=>{e.uniforms.uTime=r,NS(e,.005),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
        uniform float uTime; varying vec4 vWUV; varying vec4 vInfo;
        float wFoam = 0.0, wHgt = 0.0, wMask = 0.0;
        ${bv}`).replace("#include <map_fragment>",`
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
        #include <opaque_fragment>`)},t.customProgramCacheKey=()=>"waterfall-water",de(t)}function US(){return new Ee({transparent:!0,depthWrite:!1,side:pe,blending:df,blendEquation:is,blendSrc:pf,blendDst:mf,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-8,vertexShader:`
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
      ${bv}
      void main() {
        float lat = vWUV.x, along = vWUV.y, e = abs(lat) / max(vInfo.w, 0.05);
        float edge = 0.72 + 0.3 * (wNoise(vec2(along * 0.35 + (lat > 0.0 ? 5.3 : 11.9), 0.5)) - 0.5) + 0.12 * (wNoise(vec2(along * 1.3, lat * 1.1 + 3.0)) - 0.5);
        float m = (1.0 - smoothstep(edge - 0.35, edge + 0.05, e)) * vInfo.z * (1.0 - smoothstep(150.0, 700.0, vDist));
        vec3 tint = mix(vec3(0.42, 0.44, 0.42), vec3(0.6, 0.7, 0.5), smoothstep(0.35, 0.95, e));     // giữa sẫm, rìa rêu
        tint = mix(tint, vec3(0.55), vInfo.y * 0.6);                                                 // mặt đường ướt: tối vừa
        gl_FragColor = vec4(mix(vec3(1.0), tint, m), 1.0);
      }`})}var Kd=class{constructor(t,e){let n=this.N=320;this.pos=new Float32Array(n*3),this.col=new Float32Array(n*4),this.vel=new Float32Array(n*3),this.life=new Float32Array(n).fill(1),this.max=new Float32Array(n).fill(1);let i=new At;i.setAttribute("position",new Et(this.pos,3).setUsage(zn)),i.setAttribute("color",new Et(this.col,4).setUsage(zn)),this.points=new gn(i,new wi({size:.6,map:e,transparent:!0,depthWrite:!1,vertexColors:!0})),this.points.material.onBeforeCompile=s=>{s.vertexShader=s.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
mvPosition.xyz *= 0.96;
gl_Position = projectionMatrix * mvPosition;`)},this.points.frustumCulled=!1,t.add(this.points),this.next=0,this.alive=0}emit(t,e,n,i,s,a){let o=this.next;this.next=(o+1)%this.N,this.pos.set([t,e,n],o*3),this.vel.set([i,s,a],o*3),this.life[o]=0,this.max[o]=.45+Math.random()*.6,this.alive=2}update(t,e){if(!this.alive)return;let n=!1,i=.3+.6*e;for(let s=0;s<this.N;s++){let a=s*3;this.life[s]<this.max[s]&&(this.life[s]+=t,this.vel[a+1]-=9.8*t,this.pos[a]+=this.vel[a]*t,this.pos[a+1]+=this.vel[a+1]*t,this.pos[a+2]+=this.vel[a+2]*t,n=!0);let o=Math.max(0,1-this.life[s]/this.max[s]);this.col.set([i,i*1.02,i*1.04,.9*o*Math.sqrt(o)],s*4)}n||this.alive--,this.points.geometry.attributes.position.needsUpdate=!0,this.points.geometry.attributes.color.needsUpdate=!0}},mh=class{constructor(t,e,n){this.road=e,this.terrain=n,this.items=new Map,this.group=new Pt,this.group.visible=!1,t.add(this.group),this.uTime={value:0},this.material=kS(this.uTime),this.wetMaterial=US(),this.rockGeos=[0,1,2].map(i=>Ld(i,2)),this.rockMat=n.rockMat,this.tex=gl(),this.splash=new Kd(this.group,this.tex),this.last=null,this.inWater=!1,this._p={},this._v=new T,this._r=new T}setMap(t){this.group.visible=t==="mountain";for(let e of this.items.values())this._remove(e);this.items.clear()}_remove(t){this.group.remove(t.group),t.water.geometry.dispose(),t.wet.geometry.dispose(),t.rocks&&t.rocks.forEach(e=>e.dispose());for(let e of t.sprays)e.sprite.material.dispose()}_build(t){let e=HS(t,this.road,this.terrain),n=new Pt;n.position.copy(e.origin);let i=new Nt(e.wet,this.wetMaterial),s=new Nt(e.water,this.material);i.receiveShadow=s.receiveShadow=!0,i.renderOrder=1,s.renderOrder=2,n.add(i,s);let a=null;if(this.rockMat&&e.rocks.length){let c=this.rockGeos.map(()=>[]);e.rocks.forEach(m=>c[m.k].push(m));let l=new bt,h=new Vt,u=new oi,f=new T,d=new T,g=new et,v=new et("#968c80");a=c.filter(m=>m.length).map(m=>{let p=new _e(this.rockGeos[m[0].k],this.rockMat,m.length);return m.forEach((x,y)=>{h.setFromEuler(u.set((x.c-.9)*.6,x.yaw,(x.c-.9)*.5)),p.setMatrixAt(y,l.compose(d.set(x.x,x.y,x.z),h,f.set(x.s,x.s*(.6+.35*x.c),x.s))),p.setColorAt(y,g.copy(v).multiplyScalar(x.c))}),p.castShadow=p.receiveShadow=!0,n.add(p),p})}let o=[];return e.sprays.forEach((c,l)=>{for(let h=0;h<3;h++){let u=new An(new Mn({map:this.tex,color:14674668,transparent:!0,opacity:0,depthWrite:!1}));u.position.set(c.x,c.y,c.z),n.add(u),o.push({sprite:u,sp:c,ph:h/3+l*.17})}}),this.group.add(n),{spec:t,group:n,water:s,wet:i,rocks:a,sprays:o,sheet:e.sheet}}update(t,e,n,i={}){if(!this.group.visible){i.audio?.setWater?.(0);return}let s=this.last===null?0:Math.min(.1,Math.max(0,t-this.last));this.last=t,this.uTime.value=t;let a=Math.max(0,Math.floor((e-420)/560)),o=Math.floor((e+950)/560);for(let[f,d]of this.items)(f<a||f>o)&&(this._remove(d),this.items.delete(f));for(let f=a;f<=o;f++)if(!this.items.has(f)){this.items.set(f,this._build(FS(f)));break}let c=null,l=1/0;for(let f of this.items.values()){for(let{sprite:g,sp:v,ph:m}of f.sprays){let p=(t*.32+m)%1;g.position.y=v.y+p*v.h*.8,g.scale.set(v.w*(.6+.7*p),v.h*(.5+.8*p),1),g.material.opacity=v.op*Math.sin(Math.PI*p),g.material.color.setRGB(.88,.92,.93).multiplyScalar(.2+.8*n)}let d=Math.abs(f.spec.s-e);d<l&&(l=d,c=f)}let h=(f,d,g,v,m,p)=>{let x=c;if(!x||g<.8||Math.abs(f-x.spec.s)>x.sheet+v.length/2)return!1;let y=this.road.at(f,this._p),M=Math.cos(y.th),E=-Math.sin(y.th),b=-Math.sin(y.th)*m,w=-Math.cos(y.th)*m,C=Math.min(1.6,Math.max(.35,g/15)),_=!1;for(let S of[-.33,.33]){let I=f+S*v.length*m;if(!(Math.abs(I-x.spec.s)>x.sheet*.95)){_=!0;for(let F of[-1,1]){let N=p*C*s+Math.random();for(let L=1;L<=N;L++){let P=y.x+M*(d+F*v.width*.42)+b*S*v.length,D=y.z+E*(d+F*v.width*.42)+w*S*v.length,U=F*(.8+2.2*Math.random())*C,O=g*(.1+.3*Math.random());this.splash.emit(P,y.y+.25,D,M*U+b*O,(1.2+2.6*Math.random())*C,E*U+w*O)}}}}return _},u=!1;i.dim&&i.v!==void 0&&(u=h(e,i.d||0,i.v,i.dim,1,40));for(let f of i.npcs||[])h(f.s,f.d,f.v,f.dim,f.direction??-1,30);if(this.splash.update(s,n),u&&!this.inWater&&i.audio?.splash?.(Math.min(1.3,Math.max(.25,i.v/20))),this.inWater=u,i.audio?.setWater){let f=0,d=0;if(c&&i.cam){let g=i.cam.position,v=c.group.position,m=v.x-g.x,p=v.z-g.z,x=Math.max(0,Math.hypot(m,p,v.y-g.y)-4);f=c.spec.flow*(.35+.65*c.spec.flow)/(1+(x/28)**2);let y=this._r.set(1,0,0).applyQuaternion(i.cam.quaternion);d=Math.max(-.8,Math.min(.8,(m*y.x+p*y.z)/(Math.hypot(m,p)||1)))}i.audio.setWater(f,d)}}};var ni=420,gh=new T(0,1,0),OS=`
  attribute float aA, aS, aR;
  uniform float uScale;
  varying float vA, vR;
  void main() {
    vec4 mv = viewMatrix * vec4(position, 1.0);
    vA = aA; vR = aR;
    gl_PointSize = clamp(aS * uScale / -mv.z, 1.0, 160.0);
    gl_Position = projectionMatrix * mv;
  }`,zS=`
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
  }`,vh=class{constructor(t,e){this.person=e,this.cig=new Pt;let n=new Nt(new Xe(.0055,.0055,.062,8).translate(0,.0115,0),new qt({color:15921128,roughness:.8})),i=new Nt(new Xe(.0057,.0057,.023,8).translate(0,-.031,0),new qt({color:13208124,roughness:.7}));this.ember=new Nt(new Xe(.0056,.0056,.005,8).translate(0,.0425,0),new Ye({color:new et(1.6,.35,.08)})),this.cig.add(n,i,this.ember),this.cig.visible=!1,t.add(this.cig);let s=ga(),a=(c,l)=>{let h=new An(new Mn({map:s,color:c,transparent:!0,opacity:0,depthWrite:!1,blending:tn,fog:!1}));return h.scale.setScalar(l),h.visible=!1,t.add(h),h};this.tipGlow=a(16734746,.07),this.flame=a(16757575,.09),this.pos=new Float32Array(ni*3),this.vel=new Float32Array(ni*3),this.age=new Float32Array(ni).fill(99),this.life=new Float32Array(ni).fill(1),this.s0=new Float32Array(ni),this.s1=new Float32Array(ni),this.a0=new Float32Array(ni),this.drag=new Float32Array(ni),this.aA=new Float32Array(ni),this.aS=new Float32Array(ni),this.aR=new Float32Array(ni);let o=new At;o.setAttribute("position",new Et(this.pos,3).setUsage(zn)),o.setAttribute("aA",new Et(this.aA,1).setUsage(zn)),o.setAttribute("aS",new Et(this.aS,1).setUsage(zn)),o.setAttribute("aR",new Et(this.aR,1).setUsage(zn)),this.mat=new Ee({uniforms:{uScale:{value:500},uColor:{value:new et(.7,.7,.72)}},vertexShader:OS,fragmentShader:zS,transparent:!0,depthWrite:!1,fog:!1}),this.points=new gn(o,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=5,t.add(this.points),this.next=0,this.emitTip=0,this.emitMouth=0,this.t=0,this._h=new T,this._e=new T,this._d=new T,this._c=new T,this.tip=new T,this._q=new Vt,this._dir=new T,this._r=new T,this._fv=[0,1,2,3].map(()=>new T),this.fg=null}_spawn(t,e,n,i,s,a,o){let c=this.next;this.next=(this.next+1)%ni,this.pos.set([t.x,t.y,t.z],c*3),this.vel.set([e.x,e.y,e.z],c*3),this.age[c]=0,this.life[c]=n,this.s0[c]=i,this.s1[c]=s,this.a0[c]=a,this.drag[c]=o,this.aR[c]=Math.random()}update(t,e,n,i){this.t+=t;let s=this.person.arms?.r,a=e.on&&s&&this.person.root.visible;if(this.cig.visible=!!a,e.errOK=!1,a){if(!this.fg&&this.person.model){let g=["index_02_r","index_03_r","middle_02_r","middle_03_r"].map(v=>this.person.model.getObjectByName(v));this.fg=g.every(Boolean)?g:s.slice(1)}let f=this._c;if(this.fg.length===4){let[g,v,m,p]=this.fg.map((x,y)=>x.getWorldPosition(this._fv[y]));f.copy(g).add(m).multiplyScalar(.5*.65).addScaledVector(v.add(p),.5*.35)}else{let g=s[2].getWorldPosition(this._h),v=s[1].getWorldPosition(this._e);f.copy(g).addScaledVector(this._d.subVectors(g,v).normalize(),.1)}let d=this._dir.copy(e.F).multiplyScalar(.45).addScaledVector(e.R,.85).addScaledVector(gh,-.06).normalize();this.cig.position.copy(f).addScaledVector(d,.0125),this.cig.quaternion.setFromUnitVectors(gh,d),this.tip.copy(f).addScaledVector(d,.055),e.err.copy(e.mouth).addScaledVector(d,.03).sub(f),e.errOK=!0}let o=a&&e.lit;if(this.ember.visible=o,this.tipGlow.visible=o,o){let f=e.drag?1:.45+.08*Math.sin(this.t*7);this.ember.material.color.setRGB(1.6*(.6+f),.35*(.4+f),.08),this.tipGlow.position.copy(this.tip),this.tipGlow.material.opacity=.35+.65*f,this.tipGlow.scale.setScalar(.05+.05*f)}this.flame.visible=a&&e.flame>0,this.flame.visible&&(this.flame.position.copy(this.tip).addScaledVector(gh,-.015),this.flame.material.opacity=.7+.3*Math.sin(this.t*40),this.flame.scale.setScalar(.08+.02*Math.sin(this.t*27)));let c=(n.windDir?.x||0)*(.12+.6*n.wind),l=(n.windDir?.y||0)*(.12+.6*n.wind),h=this._d;if(o)for(this.emitTip+=t*(e.drag?16:12);this.emitTip>=1;)this.emitTip-=1,h.set(c*.3+(Math.random()-.5)*.03,.16+Math.random()*.06,l*.3+(Math.random()-.5)*.03),this._spawn(this.tip,h,2.8+Math.random(),.022,.2,.3,.2);if(e.exhale&&a)for(this.emitMouth+=t*75;this.emitMouth>=1;)this.emitMouth-=1,h.copy(e.F).multiplyScalar(.3).addScaledVector(e.R,-.14).multiplyScalar(.9+Math.random()*.4).addScaledVector(gh,-.06+Math.random()*.07).add(this._r.set((Math.random()-.5)*.08,(Math.random()-.5)*.04,(Math.random()-.5)*.08)),this._spawn(e.mouth,h,2.4+Math.random()*.8,.025,.24,.42,1.3);else this.emitMouth=0;let u=0;for(let f=0;f<ni;f++){let d=this.age[f];if(d>=this.life[f]){this.aA[f]=0,this.aS[f]=0;continue}u++,this.age[f]=d+t;let g=Math.exp(-this.drag[f]*t),v=f*3;this.vel[v]=this.vel[v]*g+c*(1-g),this.vel[v+1]=this.vel[v+1]*g+.12*(1-g)+.02*t,this.vel[v+2]=this.vel[v+2]*g+l*(1-g),this.pos[v]+=this.vel[v]*t+Math.sin(this.t*1.7+f)*.004,this.pos[v+1]+=this.vel[v+1]*t,this.pos[v+2]+=this.vel[v+2]*t+Math.cos(this.t*1.3+f*1.7)*.004;let m=this.age[f]/this.life[f];this.aS[f]=this.s0[f]+(this.s1[f]-this.s0[f])*Math.sqrt(m),this.aA[f]=this.a0[f]*Math.min(1,m*8)*(1-m)*(1-m)}if(this.points.visible=u>0,u){let f=this.points.geometry;f.attributes.position.needsUpdate=!0,f.attributes.aA.needsUpdate=!0,f.attributes.aS.needsUpdate=!0,f.attributes.aR.needsUpdate=!0,this.mat.uniforms.uScale.value=i;let d=Math.min(1.1,.15+.75*(n.light??1));this.mat.uniforms.uColor.value.setRGB(.85*d,.85*d,.88*d)}}};z0();var Ct=r=>document.getElementById(r),js=(r,t,e)=>Math.min(e,Math.max(t,r)),BS=(r,t,e)=>{let n=js((e-r)/(t-r),0,1);return n*n*(3-2*n)},Da=1/3.6,yh=1.5,br=[25*Da,50*Da,180*Da],Vo=br[0],GS=10*Da,VS=60*Da,xh=br[2],ys=Ct("c"),Ze=new uo({canvas:ys,antialias:!1,powerPreference:"high-performance"}),zo=1;Ze.setPixelRatio(zo);Ze.shadowMap.enabled=!0;Ze.shadowMap.type=ff;Ze.toneMapping=vf;var Re=new os,Tt=new Ue(60,1,.3,4e3);Tt.layers.enable(3);var me=new ml,gi=new Cl(Re,me,Ze),xn=new Nl(Re,me,Ze),Dt=new Ol(Ze,Re,Tt),Xo=new Aa(Re,Ze),Fa=new Aa(Re,Ze,"grass"),Ha=new Aa(Re,Ze,"meadow"),dt=new Wl(Re),zt=new ql(Tt);zt.groundAt=(r,t)=>Math.max(xn.heightAt(r,t),Mr.group.visible?Mr.level+1.2:-1/0);var yv=new T,_v=new T;zt.eyeAt=r=>!Ne.ready||kt.active?!1:(Ne.head.getWorldPosition(r),yv.set(0,0,-1).applyQuaternion(dt.root.quaternion),_v.set(0,1,0).applyQuaternion(dt.root.quaternion),r.addScaledVector(_v,.15).addScaledVector(yv,-.04),!0);var vs=new Jl,un=new $l(Ze,Vi[Fd].msaa),Na=new th(Ze),Ne=new Po,kt=new ih(dt,Ne);dt.viewer=Tt;var Uv=new vh(Re,Ne),gs=new Il(Re),ka=new sh(Ze),cp=new rh(Ze),Bo=new oh,lp=new lh(Re),_h=new vl(Re),vi=new bl(Re,me,gi.roadMat);zt.collide=(r,t,e)=>vi.collide(r,t,e);var wh=new Bl,Mv=new T,pi=new uh(Re,dt);pi.stopFor=(r,t,e)=>vi.stopAhead(r,t,e);var Fn=new wl(Re,me,vi),xs=new Sl(Re,me,vi);Fn.setup(Re,dt.softTex,Tt);var Ov=!1,zv=null,bh=0,Yi=new Al(Fn,xs,{toast:(r,t)=>_r(r,t),fade:(r,t)=>{let e=Ct("fade");t&&(e.textContent=t),e.classList.toggle("show",r)},driverHidden:r=>{Ov=r},siren:(r,t,e)=>vs.setSiren(r,t,e),end:()=>{q.v=0,q.home=Ae.lanes[1],q.d=q.home,q.latVel=0,q.manual=!1,Fn.cars=Fn.cars.filter(r=>r.cross||r.script||Math.abs(r.d-q.d)>2.6||r.s<q.s-14||r.s>q.s+22);for(let r of xs.peds.slice())Math.abs(r.u-q.d)<2.5&&Math.abs(r.s-q.s)<6&&xs.remove(r);bh=3,rt.cam=He.findIndex(r=>r.id==="chase"),zt.setMode(rt.cam),wr(),ye(),zv=null,_r("Lái cẩn thận nhé! Nhớ dừng đèn đỏ và nhường người đi bộ.")}}),Mr=new Hl(Re),hp=new mh(Re,me,xn),Th=new dh(Re);dt.tilt.add(wh.group);dt.tilt.add(ka.group);function yr(){let r=window.innerWidth,t=window.innerHeight;Ze.setSize(r,t,!1),Tt.aspect=r/t,Tt.updateProjectionMatrix(),un.resize(),Na.resize(),WS()}var Bv=0;function WS(){let r=window.innerWidth,t=window.innerHeight,e=Math.min(t*.135,Math.max(0,(t-r/2.39)/2));Bv=e/t,document.documentElement.style.setProperty("--bar",e.toFixed(1)+"px")}window.addEventListener("resize",yr);var Ko=matchMedia("(pointer: coarse)").matches&&Math.min(screen.width,screen.height)<600,qS=/iP(hone|od|ad)/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,Wo=document.documentElement,up=!!(Wo.requestFullscreen||Wo.webkitRequestFullscreen),Ua=()=>!!(document.fullscreenElement||document.webkitFullscreenElement);function Gv(){if(!up||Ua())return;let r=Wo.requestFullscreen?Wo.requestFullscreen({navigationUI:"hide"}):Wo.webkitRequestFullscreen();Promise.resolve(r).then(()=>screen.orientation?.lock?.("landscape")).catch(()=>{})}function XS(){if(Ua()){try{screen.orientation?.unlock?.()}catch{}(document.exitFullscreen||document.webkitExitFullscreen).call(document)}}var rp=!1,Vv=()=>{Ua()?(rp=!0,XS()):(rp=!1,Gv())},Ev=r=>{!rp&&!Ua()&&!ae.full.contains(r.target)&&Gv()};Ko&&(window.addEventListener("pointerup",Ev,!0),window.addEventListener("touchend",Ev,!0));var Wv=()=>{yr(),setTimeout(yr,120),setTimeout(yr,450),Jo()};["fullscreenchange","webkitfullscreenchange"].forEach(r=>document.addEventListener(r,()=>{Wv(),ye()}));window.addEventListener("orientationchange",Wv);window.visualViewport?.addEventListener("resize",yr);var qv=!1;function Jo(){let r=Ko&&!qv&&window.innerHeight>window.innerWidth;Ct("rotate").hidden=!r}Ct("rotate-ok").addEventListener("click",()=>{qv=!0,Jo()});Ct("rotate").querySelector(".ios").hidden=!(qS&&!up&&!navigator.standalone);window.addEventListener("resize",Jo);Jo();yr();var q={home:yh,goal:0,manual:!1,s:150,d:yh,v:Vo,target:Vo,fast:!0,gear:2,fx:0,latVel:0,pitch:0,pos:new T,yaw:0},vn=new Set,mi={active:!1,id:-1,x:0,y:0},rt={car:0,character:0,map:Bn.findIndex(r=>r.id==="meadow"),cam:He.findIndex(r=>r.id==="orbit"),weather:cn.findIndex(r=>r.id==="cloudy"),time:Gn.findIndex(r=>r.id==="night"),music:0,cine:!0,started:!1,mistCover:.9,mistDens:.4,fstop:Dg,quality:jS()},La=null,Zd=!1,wv=!0,Xv="chilldrive.tuning.v1",ii=null,jv=Object.freeze({avoid:1,density:1,speed:1,walkers:38,signal:1}),hn={...jv};function Ia(){Fn.density=hn.density;for(let r of Fn.cars)!r.script&&r.type!=="police"&&r.type!=="ambulance"&&(r.vMax*=hn.speed/(Fn.speedK||1));Fn.speedK=hn.speed,xs.walkers=Math.round(hn.walkers),vi.clockRate=1/hn.signal}try{if(ii=JSON.parse(localStorage.getItem(Xv)),ii?.camera)for(let[r,t]of Object.entries(ii.camera))zt.tune[r]&&Object.assign(zt.tune[r],t);if(ii?.weather)for(let[r,t]of Object.entries(ii.weather))Dt.weatherProfiles[r]&&Object.assign(Dt.weatherProfiles[r],t);ii?.environment&&Object.assign(Dt.tune,ii.environment),ii?.traffic&&Object.assign(hn,ii.traffic),ii?.carLights&&Object.assign(dt.headlights.tune,ii.carLights),ii?.streetLights&&Object.assign(gi.lampTune,ii.streetLights)}catch{}zt.setMode(rt.cam);rt.fstop=Gi.indexOf(zt.aperture);var ae={full:Ct("b-full"),stop:Ct("b-stop"),character:Ct("b-character"),quality:Ct("b-quality"),lens:Ct("b-lens"),mist:Ct("b-mist"),fast:Ct("b-fast"),car:Ct("b-car"),map:Ct("b-map"),cam:Ct("b-cam"),weather:Ct("b-weather"),time:Ct("b-time"),music:Ct("b-music")},Vn=(r,t,e)=>{r.querySelector("b").textContent=t,r.querySelector("span").textContent=e,r.title=e};function ye(){Vn(ae.car,"🚗",dt.list[rt.car]?.name??"…"),Vn(ae.character,"🧑",Er?"Đang tải…":rt.character===1?"Chisa":"Người lái"),ae.character.disabled=Er||!Ne.ready||kt.active||dt.current?.def?.id!=="mustang",ae.character.title=dt.current?.def?.id==="mustang"?"Đổi nhân vật":"Chisa hiện hỗ trợ Mustang",Vn(ae.map,Bn[rt.map].icon,Bn[rt.map].name),Vn(ae.cam,"🎥",He[rt.cam].name),Vn(ae.weather,cn[rt.weather].icon,cn[rt.weather].name),Vn(ae.time,Gn[rt.time].icon,Gn[rt.time].name),Vn(ae.music,zl[rt.music].icon,zl[rt.music].name),Vn(ae.fast,"⚡",Math.round(br[q.gear]*3.6)+" km/h"),ae.fast.classList.toggle("on",q.gear>0),Vn(ae.mist,"🌫️","Sương "+Math.round(rt.mistDens*100)+"%"),ae.mist.classList.toggle("on",!Ct("mistpanel").hidden),Vn(ae.lens,"📷",Kv()),Vn(ae.quality,"⚙️",Vi[rt.quality].name),Vn(ae.stop,kt.state==="parked"?"▶️":kt.state==="off"?"🅿️":"⏳",kt.state==="parked"?"Đi tiếp":kt.state==="off"?"Dừng xe":"…"),ae.lens.classList.toggle("on",!Ct("lenspanel").hidden),ae.cam.classList.toggle("on",be==="camera"),ae.weather.classList.toggle("on",be==="weather"),ae.time.classList.toggle("on",be==="time"),Ct("b-traffic").classList.toggle("on",be==="traffic"),ae.full.hidden=!(up&&Ko),Vn(ae.full,Ua()?"🗗":"⛶",Ua()?"Thoát toàn màn hình":"Toàn màn hình");let r=(t,e,n,i=!1)=>{let s=Ct(t);return s.textContent=e,s.title=n,s.classList.toggle("on",i),s};r("q-speed",q.gear>0?Math.round(br[q.gear]*3.6)+" km/h":"Speed","Tốc độ: "+Math.round(br[q.gear]*3.6)+" km/h (phím F)",q.gear>0),r("q-pause",kt.state==="parked"?"Resume":"Pause",kt.state==="parked"?"Đi tiếp (phím P)":"Dừng xe (phím P)",kt.active),r("q-car","Car","Xe: "+(dt.list[rt.car]?.name??"…")+" (phím C)"),r("q-cam","Camera","Camera: "+He[rt.cam].name+" (phím Q)"),r("q-driver","Driver","Nhân vật: "+(rt.character===1?"Chisa":"Người lái")+" (phím X)").disabled=ae.character.disabled,r("q-map","Map","Map: "+Bn[rt.map].name+" (phím M)"),r("q-weather","Weather","Thời tiết: "+cn[rt.weather].name+" (phím R)"),r("q-time","Time","Thời gian: "+Gn[rt.time].name+" (phím T)"),r("q-setting","Setting","Cài đặt (phím K)",!Ct("bar").hidden)}function jS(){try{let r=Vi.findIndex(t=>t.id===localStorage.getItem("chilldrive.quality"));if(r>=0)return r}catch{}return Fd}function Yv(){let r=Vi[rt.quality];zo=r.id==="low"?r.ratio:Math.min(r.ratio,Math.max(1,window.devicePixelRatio||1)),Ko&&r.id==="good"&&(zo=Math.min(zo,1.25)),Ze.setPixelRatio(zo),un.setSamples(r.msaa),yr();for(let t of[Xo,Fa,Ha])t.setView(r.view),t.setDensity(r.veg);xn.setView(r.view,Tt.position),Dt.setShadowSize(r.shadow),Na.enabled=r.refl,gs.setRadius(r.trees);try{localStorage.setItem("chilldrive.quality",r.id)}catch{}}var YS=()=>{rt.quality=(rt.quality+1)%Vi.length,Yv(),ye()};function Kv(){return Math.round(zt.focal)+"mm f/"+zt.aperture}var Er=!1,Qd=0;async function fp(r){if(kt.active)return;r=dt.current?.def?.id==="mustang"?r%2:0;let t=++Qd;Er=!0,ye();let e;try{if(e=await new Po().load(r?"assets/models/chisa_wuthering_waves.glb":"assets/models/person.glb",{chisa:r===1}),t!==Qd||r&&dt.current?.def?.id!=="mustang"){e.dispose();return}Ne.replace(e),rt.character=r,kt.place(dt.dim),kt.sit(),Oa(un.sceneRT,Tt,Ne.root).catch(()=>{})}catch(n){e?.dispose(),console.warn("Không tải được nhân vật",n)}finally{t===Qd&&(Er=!1,ye())}}var Sh=()=>{if(!Er&&Ne.ready&&dt.current?.def?.id==="mustang")return fp(rt.character+1)};async function Ah(r){if(!kt.active){rt.car=(r+dt.list.length)%dt.list.length,Vn(ae.car,"🚗","Đang tải…");try{if(!await dt.select(rt.car))return}catch(t){if(console.error("Không tải được xe",dt.list[rt.car].name,t),dt.list.length>1)return dt.list.splice(rt.car,1),Ah(rt.car)}dt.current?.def?.id!=="mustang"&&(rt.character||Er)&&await fp(0),Ne.ready&&!kt.active&&(kt.place(dt.dim),kt.sit()),ka.place(dt.dim,dt.current.screen),wh.place(dt.current.screen),cp.setCar(dt.current),Jv(),ye()}}var jo=()=>Ah(rt.car+1);function Rh(){Yi.active||!Ne.ready||!rt.started||Er||(kt.state==="off"&&(xp(0),kt.place(dt.dim)),kt.toggle(q.v)&&ye())}var Tv=0;function Oa(r,t,e=Re){let n=[];e.traverse(a=>{a.material&&!a.layers.test(t.layers)&&(n.push(a,a.material),a.material=null)});let i=Ze.getRenderTarget();Ze.setRenderTarget(r);let s=Ze.compileAsync(e,t,Re);Ze.setRenderTarget(i);for(let a=0;a<n.length;a+=2)n[a].material=n[a+1];return s}Dt.onCarEnv=r=>dt.setEnvMap(r);Dt.carEnvRT&&dt.setEnvMap(Dt.carEnvRT.texture);dt.prepare=r=>Oa(un.sceneRT,Tt,r);Th.onBuild=r=>{Oa(un.sceneRT,Tt,r).catch(()=>{})};function Jv(r=500){clearTimeout(Tv),Tv=setTimeout(()=>{Oa(un.sceneRT,Tt).catch(t=>console.warn("warmup",t))},r)}var Zv=()=>{let r=Bn[rt.map].id;N0(r);let t=r==="city";if(Te.halfWidth=t?Ae.hw:U0,me.setShape(t),me.dirt=r==="forest",me.recomputeHeights(),r==="sea"){me.ensure(q.s+12e4);let e=1/0;for(let n of me.pts)e=Math.min(e,n.y);we.seaLevel=e-3}Mr.setMap(r==="sea",we.seaLevel),gi.setMap(r),xn.reset(),xn.setCar(q.s),xn.prime(Tt.position.lengthSq()?Tt.position:q.pos),Xo.visible=r==="reed",Fa.visible=r==="forest",Ha.visible=r==="meadow",Th.visible=r==="meadow",_h.reset(),_h.visible=r==="mountain",vi.visible=t,vi.prime(q.s),lp.ground.clear(),pi.policy.city=t,Yi.active&&Yi.finish(),Fn.visible=t,xs.visible=t,t&&pi.clearAll(),Ct("brake").hidden=!t,Ct("b-traffic").hidden=!t,!t&&be==="traffic"&&Zo(),Ia(),t&&rt.started&&_r("Map Phố: tự phanh khi gặp đèn đỏ — giữ phím Space hoặc nút Space"),Go=null,t&&rt.started&&(rt.cam=He.findIndex(e=>e.id==="chase"),zt.setMode(rt.cam),wr()),t&&!Qv&&mp(cn.findIndex(e=>e.id==="auto")),t&&!pp&&(rt.time=Gn.findIndex(e=>e.id==="auto"),Dt.setTime(null)),zt.sideDist=t?13:null,zt.orbitR=t?10:null,q.home=t?Ae.lanes[1]:yh,hp.setMap(r),zt.sidePref=r==="mountain"?1:0,gs.setRadius(Vi[rt.quality].trees),zt.sideSign=0,Jv()},Ch=()=>{rt.map=(rt.map+1)%Bn.length,Zv(),ye()};function wr(){rt.fstop=Math.max(0,Gi.indexOf(zt.aperture)),Ys()}var be=null,Tr=()=>{},dp=()=>{rt.cam=(rt.cam+1)%He.length,zt.setMode(rt.cam),wr(),ye(),be==="camera"&&Tr()},ap=0,Qv=!1,pp=!1,KS=[["clear",.34],["cloudy",.34],["rain",.16],["fog",.1],["storm",.06]];function mp(r,t=!1){rt.weather=r,t&&Bn[rt.map].id==="city"&&(Qv=!0),cn[r].id==="auto"?ap=0:Dt.setWeather(cn[r].id)}function JS(r){if(cn[rt.weather].id!=="auto"||(ap-=r)>0)return;ap=150+Math.random()*150;let t=Math.random(),e="cloudy";for(let[n,i]of KS)if((t-=i)<0){e=n;break}e===Dt.weather&&(e=e==="clear"?"cloudy":"clear"),Dt.setWeather(e)}var gp=()=>{mp((rt.weather+1)%cn.length,!0),ye(),be==="weather"&&Tr()},vp=()=>{rt.time=(rt.time+1)%Gn.length,Bn[rt.map].id==="city"&&(pp=!0),Dt.setTime(Gn[rt.time].hour),Gn[rt.time].id==="night"&&ZS(.6,.6),ye(),be==="time"&&Tr()};function ZS(r,t){rt.mistCover=r,rt.mistDens=t;for(let[e,n]of[["mist-cover","mistCover"],["mist-dens","mistDens"]])Ct(e).value=Math.round(rt[n]*100),Ct(e+"-v").textContent=Ct(e).value}var QS=()=>document.body.classList.toggle("cine",rt.cine&&rt.started);function xp(r){let t=q.fast;q.gear=r,q.fast=r===2,q.target=br[Math.min(r,1)],q.fast!==t&&Ys()}var Ph=()=>{kt.active||(xp((q.gear+1)%br.length),ye())},$v=()=>{rt.music=(rt.music+1)%zl.length,vs.setMode(rt.music),ye()};ae.fast.onclick=Ph;var Zo=()=>{be=null,Ct("tunepanel").hidden=!0,ye()},tx=()=>{Zo(),Ct("mistpanel").hidden=!Ct("mistpanel").hidden,Ct("lenspanel").hidden=!0,ye()};ae.mist.onclick=tx;var ex=()=>{Zo(),Ct("lenspanel").hidden=!Ct("lenspanel").hidden,Ct("mistpanel").hidden=!0,ye()};ae.lens.onclick=ex;ae.quality.onclick=YS;ae.stop.onclick=Rh;ae.character.onclick=Sh;ae.full.onclick=Vv;var Lh=!1,op=!1,Go=null,No=0,Sv=0,Av=null,$d=0,tp=0,ep=!1;{let r=Ct("brake"),t=n=>{op=!0,r.classList.add("on"),n.preventDefault()},e=()=>{op=!1,r.classList.remove("on")};r.addEventListener("pointerdown",t);for(let n of["pointerup","pointerleave","pointercancel"])r.addEventListener(n,e)}function _r(r,t=!1){let e=Ct("toast");e.textContent=r,e.classList.toggle("bad",t),e.classList.add("show"),clearTimeout(Sv),Sv=setTimeout(()=>e.classList.remove("show"),t?2800:4500)}Ct("b-shot").onclick=()=>{Lh=!0};function $S(){Lh=!1,ys.toBlob(async r=>{if(!r)return;let t="chill-drive-"+new Date().toISOString().slice(0,19).replace(/[T:]/g,"-")+".png",e=new File([r],t,{type:"image/png"});if(Ko&&navigator.canShare?.({files:[e]}))try{await navigator.share({files:[e]});return}catch{}let n=document.createElement("a");n.href=URL.createObjectURL(r),n.download=t,document.body.append(n),n.click(),n.remove(),setTimeout(()=>URL.revokeObjectURL(n.href),4e3)},"image/png")}var za=Ct("lens-focal"),Yo=Ct("lens-fstop");za.min=Xl;za.max=jl;Yo.max=Gi.length-1;var Ys=()=>{za.value=Math.round(zt.focal),Ct("lens-focal-v").textContent=Math.round(zt.focal)+"mm",rt.fstop=Math.max(0,Gi.indexOf(zt.aperture)),Yo.value=rt.fstop,Ct("lens-fstop-v").textContent="f/"+zt.aperture};za.addEventListener("input",()=>{let r=zt.tune[He[rt.cam].id];r.focal=zt.focal=Number(za.value),Ys(),ye()});Yo.addEventListener("input",()=>{let r=zt.tune[He[rt.cam].id];rt.fstop=Number(Yo.value),r.aperture=zt.aperture=Gi[rt.fstop],Ys(),ye()});for(let r of[za,Yo])r.addEventListener("change",()=>r.blur());Ys();for(let[r,t]of[["mist-cover","mistCover"],["mist-dens","mistDens"]]){let e=Ct(r);e.value=Math.round(rt[t]*100),Ct(r+"-v").textContent=e.value,e.addEventListener("input",()=>{rt[t]=e.value/100,Ct(r+"-v").textContent=e.value,ye()}),e.addEventListener("change",()=>e.blur())}var t2={chase:[["distance","Khoảng lùi (m)",1,20,.1],["height","Độ cao (m)",.2,8,.05],["carHeight","Theo chiều cao xe",0,1,.01],["lookAhead","Nhìn trước (m)",0,40,.5],["lookHeight","Cao điểm nhìn (m)",0,5,.05],["slopeLook","Bám dốc",0,25,.5],["speedBack","Lùi theo tốc độ",0,6,.1],["cineBack","Lùi cinematic",0,6,.1],["follow","Mượt vị trí",.2,20,.1],["lookFollow","Mượt điểm nhìn",.2,20,.1],["near","Cắt gần (m)",.02,2,.01]],low:[["distance","Khoảng lùi (m)",1,20,.1],["height","Độ cao (m)",.2,5,.05],["lookAhead","Nhìn trước (m)",0,40,.5],["lookHeight","Cao điểm nhìn (m)",0,5,.05],["slopeLook","Bám dốc",0,25,.5],["follow","Mượt vị trí",.2,20,.1],["lookFollow","Mượt điểm nhìn",.2,20,.1],["near","Cắt gần (m)",.02,2,.01]],side:[["distance","Khoảng ngang (m)",1,25,.1],["height","Độ cao (m)",.2,8,.05],["lookHeight","Tỉ lệ cao xe",0,1,.01],["follow","Mượt vị trí",.2,20,.1],["lookFollow","Mượt điểm nhìn",.2,20,.1],["near","Cắt gần (m)",.02,2,.01]],cockpit:[["eyeSide","Dịch ngang (m)",-.5,.5,.005],["eyeHeight","Dịch cao (m)",-.5,.5,.005],["eyeForward","Dịch trước (m)",-.5,.5,.005],["pitch","Góc chúc (rad)",-.2,.8,.005],["lookDistance","Tầm nhìn (m)",5,80,1],["follow","Mượt vị trí",.2,20,.1],["lookFollow","Mượt điểm nhìn",.2,20,.1],["near","Cắt gần (m)",.01,.5,.005]],orbit:[["radius","Bán kính (m)",1,30,.1],["height","Độ cao (m)",.2,12,.05],["heightWave","Nhấp nhô (m)",0,4,.05],["waveRate","Nhịp nhấp nhô",0,3,.05],["speed","Tốc độ quay",-.8,.8,.01],["lookHeight","Cao điểm nhìn (m)",0,5,.05],["follow","Mượt vị trí",.2,20,.1],["lookFollow","Mượt điểm nhìn",.2,20,.1],["near","Cắt gần (m)",.02,2,.01]],drone:[["distance","Khoảng lùi (m)",1,50,.5],["height","Độ cao (m)",2,50,.5],["lookAhead","Nhìn trước (m)",-10,40,.5],["lookHeight","Cao điểm nhìn (m)",0,8,.05],["follow","Mượt vị trí",.2,20,.1],["lookFollow","Mượt điểm nhìn",.2,20,.1],["near","Cắt gần (m)",.02,2,.01]]},e2=[["fog","Mật độ sương",0,.012,1e-4],["overcast","Độ âm u",0,1,.01],["clouds","Mây che phủ",0,1,.01],["sun","Cường độ nắng",0,2,.01],["rain","Lượng mưa",0,1,.01],["snow","Lượng tuyết",0,1,.01],["wet","Độ ướt đường",0,1,.01],["cover","Tuyết phủ đất",0,1,.01],["wind","Sức gió",0,1,.01],["dark","Độ tối",0,1,.01]],n2=[["exposure","Phơi sáng",.2,2.5,.01],["skyBrightness","Độ sáng trời",0,3,.01],["directLight","Ánh sáng chính",0,3,.01],["ambientLight","Ánh sáng phủ",0,3,.01],["sunGlow","Quầng mặt trời",0,3,.01],["sunDisc","Đĩa mặt trời",0,3,.01],["cloudBrightness","Độ sáng mây",0,3,.01],["rays","Tia sáng",0,3,.01]],i2=Ct("tunepanel"),xr=Ct("tune-mode"),Qo=Ct("tune-fields"),Ih=()=>{try{localStorage.setItem(Xv,JSON.stringify({camera:zt.tune,weather:Dt.weatherProfiles,environment:Dt.tune,carLights:dt.headlights.tune,streetLights:gi.lampTune,traffic:hn}))}catch{}},ji=r=>{let t=document.createElement("h4");t.textContent=r,Qo.append(t)},Xn=({label:r,min:t,max:e,step:n,get:i,set:s})=>{let a=document.createElement("label"),o=document.createElement("span"),c=document.createElement("input"),l=document.createElement("input");o.textContent=r,c.type="range",l.type="number";for(let u of[c,l])u.min=t,u.max=e,u.step=n,u.value=i();let h=u=>{u=js(Number(u),Number(t),Number(e)),s(u),c.value=l.value=u,Ih()};c.oninput=()=>h(c.value),l.onchange=()=>{h(l.value),l.blur()},a.append(o,c,l),Qo.append(a)},np=({label:r,get:t,set:e})=>{let n=document.createElement("label"),i=document.createElement("span"),s=document.createElement("input");i.textContent=r,s.type="color",s.value=t(),s.oninput=()=>{e(s.value),Ih()},n.append(i,s),Qo.append(n)},Rv=({label:r,options:t,get:e,set:n})=>{let i=document.createElement("label"),s=document.createElement("span"),a=document.createElement("select");s.textContent=r,t.forEach((o,c)=>{let l=document.createElement("option");l.value=c,l.textContent=o,l.selected=c===e(),a.append(l)}),a.onchange=()=>{n(Number(a.value)),Ih()},i.append(s,a),Qo.append(i)},s2=()=>{let r=He[rt.cam].id,t=zt.tune[r];return t2[r].map(([e,n,i,s,a])=>({label:n,min:i,max:s,step:a,get:()=>t[e],set:o=>{t[e]=o,e==="near"&&(Tt.near=o,Tt.updateProjectionMatrix())}}))},Cv=()=>n2.map(([r,t,e,n,i])=>({label:t,min:e,max:n,step:i,get:()=>Dt.tune[r],set:s=>{Dt.tune[r]=s,Dt.envKey=""}}));Tr=()=>{if(!be)return;if(Qo.replaceChildren(),xr.replaceChildren(),be==="traffic"){xr.hidden=!0,Ct("tune-title").textContent="Giao thông (map Phố)",ji("Xe của chú"),Rv({label:"Tự giữ khoảng cách (tránh đâm xe trước)",options:["Tắt — tự phanh, có thể đâm","Bật"],get:()=>hn.avoid,set:e=>{hn.avoid=e,_r(e?"Đã bật tự giữ khoảng cách":"Đã tắt tự giữ khoảng cách — chú tự phanh, đâm là có cảnh sát tới",!e)}}),ji("Xe và người"),Xn({label:"Mật độ xe (×)",min:.2,max:2.5,step:.1,get:()=>hn.density,set:e=>{hn.density=e,Ia()}}),Xn({label:"Tốc độ xe khác (×)",min:.4,max:2,step:.05,get:()=>hn.speed,set:e=>{hn.speed=e,Ia()}}),Xn({label:"Số người đi bộ",min:0,max:80,step:1,get:()=>hn.walkers,set:e=>{hn.walkers=e,Ia()}}),ji("Đèn giao thông"),Xn({label:"Độ dài pha đèn (×)",min:.3,max:3,step:.1,get:()=>hn.signal,set:e=>{hn.signal=e,Ia()}});return}if(be==="carLight"||be==="streetLight"){xr.hidden=!0;let e=be==="carLight",n=e?dt.headlights.tune:gi.lampTune;Ct("tune-title").textContent=e?"Đèn xe người chơi":"Đèn đường",ji(e?"Chùm sáng và quầng đèn":"Ánh sáng phủ mặt đường"),(e?[["intensity","Cường độ",0,300,1],["distance","Tầm chiếu (m)",10,250,1],["angle","Góc mở (rad)",.1,1.55,.01],["penumbra","Độ mềm viền",0,1,.01],["decay","Suy giảm",0,2,.01],["glowOpacity","Độ sáng quầng",0,2,.01],["glowSize","Kích thước quầng",.2,8,.05]]:[["intensity","Cường độ",0,500,1],["distance","Tầm phủ (m)",10,250,1],["angle","Góc mở (rad)",.1,1.55,.01],["penumbra","Độ mềm viền",0,1,.01],["decay","Suy giảm",0,2,.01],["glowOpacity","Độ sáng quầng",0,2,.01],["glowSize","Kích thước quầng",1,24,.1]]).map(([s,a,o,c,l])=>({label:a,min:o,max:c,step:l,get:()=>n[s],set:h=>{n[s]=h}})).forEach(Xn),np({label:"Màu ánh sáng",get:()=>n.color,set:s=>{n.color=s}}),e&&np({label:"Màu quầng",get:()=>n.glowColor,set:s=>{n.glowColor=s}});return}xr.hidden=!1;let r=be==="camera"?He:be==="weather"?cn:Gn,t=rt[be==="camera"?"cam":be];if(r.forEach((e,n)=>{let i=document.createElement("option");i.value=n,i.textContent=e.name,i.selected=n===t,xr.append(i)}),Ct("tune-title").textContent=be==="camera"?"Camera · "+He[rt.cam].name:be==="weather"?"Thời tiết · "+cn[rt.weather].name:"Thời gian · "+Gn[rt.time].name,be==="camera"){let e=zt.tune[He[rt.cam].id];ji("Vị trí và chuyển động"),s2().forEach(Xn),ji("Ống kính"),Xn({label:"Tiêu cự (mm)",min:Xl,max:jl,step:1,get:()=>e.focal,set:n=>{e.focal=zt.focal=n,Ys(),ye()}}),Rv({label:"Khẩu độ",options:Gi.map(n=>"f/"+n),get:()=>Math.max(0,Gi.indexOf(e.aperture)),set:n=>{e.aperture=zt.aperture=Gi[n],rt.fstop=n,Ys(),ye()}})}else if(be==="weather"){let e=cn[rt.weather].id==="auto"?Dt.weather:cn[rt.weather].id,n=Dt.weatherProfiles[e];ji("Preset "+cn[rt.weather].name),e2.map(([i,s,a,o,c])=>({label:s,min:a,max:o,step:c,get:()=>n[i],set:l=>{n[i]=l,Dt.w[i]=l}})).forEach(Xn),np({label:"Màu khí quyển",get:()=>n.tint,set:i=>{n.tint=i,Dt.tint.set(i),Dt.envKey=""}}),ji("Ánh sáng chung"),Cv().forEach(Xn)}else ji("Chu kỳ ngày đêm"),Xn({label:"Giờ hiện tại",min:0,max:23.99,step:.05,get:()=>Dt.hour,set:e=>{Dt.hour=e,Dt.tween=null,Dt.envKey=""}}),Xn({label:"Tốc độ tự chạy",min:0,max:1,step:.005,get:()=>Dt.tune.autoSpeed,set:e=>{Dt.tune.autoSpeed=e}}),Xn({label:"Hướng mặt trời",min:-3.142,max:3.142,step:.01,get:()=>Dt.tune.sunAzimuth,set:e=>{Dt.tune.sunAzimuth=e,Dt.envKey=""}}),Xn({label:"Hướng mặt trăng",min:-3.142,max:3.142,step:.01,get:()=>Dt.tune.moonAzimuth,set:e=>{Dt.tune.moonAzimuth=e,Dt.envKey=""}}),ji("Ánh sáng chung"),Cv().forEach(Xn)};var Ba=r=>{be=r,Ct("mistpanel").hidden=Ct("lenspanel").hidden=!0,i2.hidden=!1,Tr(),ye()};xr.onchange=()=>{let r=Number(xr.value);be==="camera"?(rt.cam=r,zt.setMode(r),wr()):be==="weather"?mp(r,!0):(rt.time=r,Dt.setTime(Gn[r].hour),Bn[rt.map].id==="city"&&(pp=!0)),ye(),Tr()};Ct("tune-close").onclick=Zo;Ct("tune-reset").onclick=()=>{if(be==="camera")zt.resetTune(He[rt.cam].id),wr();else if(be==="weather"){let r=cn[rt.weather].id==="auto"?Dt.weather:cn[rt.weather].id;Dt.resetWeather(r),Dt.resetTune(),Dt.snapWeather(r)}else be==="time"?(Dt.resetTune(),Dt.setTime(Gn[rt.time].hour)):be==="carLight"?Object.assign(dt.headlights.tune,_l):be==="traffic"?(Object.assign(hn,jv),Ia()):Object.assign(gi.lampTune,jf);Ih(),ye(),Tr()};ae.car.onclick=jo;ae.map.onclick=Ch;ae.cam.onclick=()=>Ba("camera");ae.weather.onclick=()=>Ba("weather");ae.time.onclick=()=>Ba("time");Ct("b-traffic").onclick=()=>be==="traffic"?Zo():Ba("traffic");ae.music.onclick=$v;var nx=()=>{Ct("bar").hidden=!Ct("bar").hidden,ye()};for(let[r,t]of[["q-speed",()=>Ph()],["q-pause",()=>Rh()],["q-car",()=>jo()],["q-cam",()=>dp()],["q-driver",()=>Sh()],["q-map",()=>Ch()],["q-weather",()=>gp()],["q-time",()=>vp()],["q-setting",nx]])Ct(r).onclick=e=>{t(),e.currentTarget.blur()};Ct("b-info").onclick=()=>{let r=Ct("credits");r.hidden=!r.hidden};window.addEventListener("keydown",r=>{if(r.repeat){vn.add(r.code);return}switch(vn.add(r.code),r.code){case"KeyC":jo();break;case"KeyV":jo();break;case"KeyQ":dp();break;case"KeyX":Sh();break;case"KeyM":Ch();break;case"KeyN":$v();break;case"KeyH":document.body.classList.toggle("hidehud");break;case"KeyT":vp();break;case"KeyR":gp();break;case"KeyF":Ph();break;case"KeyG":tx();break;case"KeyL":ex();break;case"KeyP":Rh();break;case"KeyU":Vv();break;case"KeyK":nx();break;case"KeyO":Lh=!0;break}(r.code.startsWith("Arrow")||r.code==="Space")&&r.preventDefault()});window.addEventListener("keyup",r=>vn.delete(r.code));window.addEventListener("blur",()=>vn.clear());var bs=new Map,Mh=new Map;function Eh(r){kt.active&&kt.zoomBy(r)||zt.zoomBy(r)}var qo=0,ix=()=>{let[r,t]=[...bs.values()];return Math.hypot(r.x-t.x,r.y-t.y)};ys.addEventListener("pointerdown",r=>{bs.set(r.pointerId,{x:r.clientX,y:r.clientY}),Mh.set(r.pointerId,{x:r.clientX,y:r.clientY,moved:!1}),ys.setPointerCapture(r.pointerId),bs.size===1?(mi.active=!0,mi.id=r.pointerId,mi.x=r.clientX,mi.y=r.clientY,zt.look.hold=!0):bs.size===2&&(mi.active=!1,qo=ix())});ys.addEventListener("pointermove",r=>{let t=bs.get(r.pointerId);if(!t)return;t.x=r.clientX,t.y=r.clientY;let e=Mh.get(r.pointerId);if(e&&Math.hypot(r.clientX-e.x,r.clientY-e.y)>8&&(e.moved=!0),bs.size===2){let n=ix();qo>0&&n>0&&Eh(qo/n),qo=n}else if(mi.active&&r.pointerId===mi.id){let n=r.clientX-mi.x,i=r.clientY-mi.y;zt.lookBy(n*4.7/window.innerWidth,i*2.2/window.innerHeight),kt.active&&Math.abs(n)+Math.abs(i)>0&&kt.noteCameraInput(),mi.x=r.clientX,mi.y=r.clientY}});var sx=r=>{let t=Mh.get(r.pointerId);if(t&&!t.moved&&r.type==="pointerup"){dt.root.updateWorldMatrix(!0,!0);let e=ys.getBoundingClientRect(),n=new T;dt.headGlow.some(s=>{if(!s.visible)return!1;s.getWorldPosition(n).project(Tt);let a=e.left+(n.x+1)*e.width*.5,o=e.top+(1-n.y)*e.height*.5;return n.z>=-1&&n.z<=1&&Math.hypot(r.clientX-a,r.clientY-o)<=56})?Ba("carLight"):kt.active&&gi.hitLamp(Tt,r.clientX,r.clientY,e)&&Ba("streetLight")}Mh.delete(r.pointerId),bs.delete(r.pointerId),bs.size<2&&(qo=0),bs.size===0&&(mi.active=!1,zt.look.hold=!1)};ys.addEventListener("pointerup",sx);ys.addEventListener("pointercancel",sx);ys.addEventListener("wheel",r=>{r.preventDefault();let t=r.deltaY*(r.deltaMode===1?33:r.deltaMode===2?400:1);Eh(Math.exp(js(t,-200,200)*.0012))},{passive:!1});var Pv=0,rx=1/0,r2=()=>{performance.now()<rx||(document.body.classList.remove("idle"),clearTimeout(Pv),Pv=setTimeout(()=>document.body.classList.add("idle"),3e3))};["pointermove","pointerdown","touchstart"].forEach(r=>window.addEventListener(r,r2,{passive:!0}));window.addEventListener("pointerup",()=>{document.activeElement?.tagName==="BUTTON"&&document.activeElement.blur()});document.body.classList.add("idle");var ZR=new T,Lv=performance.now(),ip=0,Xs=0,Ci={},a2=3.5,jn={amt:0,range:0,samples:0,near:.1,far:1e3,focus:10,cocK:0,maxCoc:24},ko=new T;function o2(r){let t=He[rt.cam].id==="cockpit";ko.copy(q.pos).y+=.6,kt.active&&ko.copy(kt.cam.focus);let e=t&&!kt.active?.8:Math.max(.5,Tt.position.distanceTo(ko));jn.focus+=(e-jn.focus)*(jn.amt>.01?1-Math.exp(-r*6):1);let n=zt.focalEff,i=zt.apertureS,s=jn.focus*1e3;if(jn.cocK=n*n/(i*Math.max(s-n,1))*(un.longSide/36)*a2,jn.maxCoc=Math.max(6,un.longSide*.0125),kt.active)jn.range=kt.cam.range;else if(t)jn.range=0;else{let a=Tt.position.x-ko.x,o=Tt.position.z-ko.z,c=Math.hypot(a,o)||1,l=Math.sin(q.yaw),h=Math.cos(q.yaw);jn.range=Math.abs((-l*a-h*o)/c)*dt.dim.length*.5+Math.abs((h*a-l*o)/c)*dt.dim.width*.5+.3}return jn.near=Tt.near,jn.far=Tt.far,jn.amt=Xs,jn.samples=Vi[rt.quality].dof,jn}var c2=new T;function l2(r,t){let e=zt.look,n=c2.copy(r).sub(t);if(Math.abs(e.yaw)>1e-4||Math.abs(e.pitch)>1e-4){let s=Math.cos(e.yaw),a=Math.sin(e.yaw);n.set(n.x*s+n.z*a,n.y,-n.x*a+n.z*s);let o=Math.hypot(n.x,n.z),c=n.length(),l=js(Math.atan2(n.y,o)+e.pitch,.03,1.35),h=c*Math.cos(l)/Math.max(o,.001);n.set(n.x*h,c*Math.sin(l),n.z*h)}Tt.position.copy(t).add(n);let i=Math.max(xn.heightAt(Tt.position.x,Tt.position.z)+.25,Mr.group.visible?Mr.level+1.2:-1/0);Tt.position.y<i&&(Tt.position.y=i)}var Pa=new T;function h2(){let r=dt.current?.steer;if(!r||!zt.eyeAt||!zt.eyeAt(Pa))return .2;dt.tilt.worldToLocal(Pa);let[,t,e]=r.n,n=1-t*t,i=-t*e,s=Math.hypot(n,i)||1,a=r.r*.65,o=r.c[1]-n/s*a,c=r.c[2]-i/s*a,l=Math.atan2(Pa.y-o,Pa.z-c),h=Math.atan(Math.tan(Oe.degToRad(Tt.fov)/2)*(1-2*Bv*Xs)),u=ka.group.position,f=Math.atan2(u.y+ka.size[1]/2+.012-Pa.y,Pa.z-u.z),d=l-h+.01,g=h-f-.015;return js(d<=g?d:g,-.1,.6)}var sp=new T,ms=new T,qs=new T,Uo=new T,Iv=new T,Dv=new T,Fv=.08,Hv=new T,Nv=new T,kv=new T;function u2(r){if(!r)return;Ne.recline(r.recline||0);let t=dt.tilt.matrixWorld,[e,n,i]=r.foot,s=r.hip[0];for(let[a,o]of[["l",e],["r",2*s-e]])Hv.set(o,n,i).applyMatrix4(t),Nv.set(0,1,-.6).transformDirection(t),kv.set(0,.45,-1).transformDirection(t),Ne.reachLeg(a,Hv,Nv,kv)}function f2(r){dt.root.updateMatrixWorld();let t=dt.tilt.matrixWorld;sp.fromArray(r.c).applyMatrix4(t),ms.fromArray(r.n).transformDirection(t),qs.set(1,0,0).transformDirection(t),qs.addScaledVector(ms,-qs.dot(ms)).normalize(),Uo.crossVectors(ms,qs);for(let[e,n]of[["r",-Fv],["l",Math.PI+Fv]]){let i=n+(dt.steerAngle||0),s=Math.cos(i),a=Math.sin(i),o=r.r+(r.grip?.radial??.02),c=r.grip?.depth??.065;Iv.copy(sp).addScaledVector(qs,s*o).addScaledVector(Uo,a*o).addScaledVector(ms,c);let l=Dv.copy(qs).multiplyScalar(e==="r"?.25:-.25).addScaledVector(Uo,-1).addScaledVector(ms,.2);Ne.reach(e,Iv,l);let h=r.grip?.align?Dv.copy(Uo).multiplyScalar(s).addScaledVector(qs,-a).multiplyScalar(e==="r"?1:-1):null;Ne.faceGrip(e,ms,h);let u=e==="r"?1:-1,f=r.r-.01;Ne.looseGrip(e,.15,(d,g)=>{let v=i+u*d/f;return g.copy(sp).addScaledVector(qs,Math.cos(v)*f).addScaledVector(Uo,Math.sin(v)*f).addScaledVector(ms,.016)},ms)}}var Oo=new T,d2=new T;function p2(){let r=Dt.state,t=un.rays;t.near=Tt.near,t.far=Tt.far;let e=r.rays*Oe.smoothstep(Tt.getWorldDirection(d2).dot(r.rayDir),.05,.5);e>.002&&(Oo.copy(r.rayDir).multiplyScalar(1e3).add(Tt.position).project(Tt),e*=1-Oe.smoothstep(Math.max(Math.abs(Oo.x),Math.abs(Oo.y)),1,1.9),t.uv.set(Oo.x*.5+.5,Oo.y*.5+.5)),t.color.copy(r.rayCol).multiplyScalar(Math.max(e,0)*1.2)}function ax(r){let t=js((r-Lv)/1e3,0,.05);Lv=r,La!==null&&(La+=t,La>=(wv?.5:3)&&(La=null,xp(0),Zd=!0,wv&&(q.v=Vo)));let e=!rt.started||La!==null,n=vn.has("ArrowLeft")||vn.has("KeyA"),i=vn.has("ArrowRight")||vn.has("KeyD"),s=Yi.active?0:(i?1:0)-(n?1:0);(vn.has("ArrowUp")||vn.has("KeyW"))&&(q.target+=2.5*t),(vn.has("ArrowDown")||vn.has("KeyS"))&&(q.target-=2.5*t),(vn.has("Equal")||vn.has("NumpadAdd"))&&Eh(Math.exp(-1.2*t)),(vn.has("Minus")||vn.has("NumpadSubtract"))&&Eh(Math.exp(1.2*t)),q.target=js(q.target,GS,VS),q.goal=q.fast?xh:q.target;let a=e?xh:Math.min(q.goal,pi.ctrl.maxV);if(e?q.v=xh:kt.active?q.v=kt.speed(q.v,t):Yi.active?q.v=Math.max(0,q.v-25*t):vn.has("Space")||vn.has("KeyB")||op?q.v=Math.max(0,q.v-7.5*t):q.v+=js(a-q.v,-8*t,6*t),Zd&&q.v<=Vo+.01&&(Zd=!1,q.v=Vo,rt.cam=He.findIndex(M=>M.id===(Bn[rt.map].id==="city"?"chase":"side")),zt.setMode(rt.cam),wr(),ye()),q.s+=q.v*t,q.fx+=(BS(55*Da,xh,q.v)-q.fx)*(1-Math.exp(-t*4)),s!==0)q.manual=!0;else if(q.manual){q.manual=!1;let M=Bn[rt.map].id==="city"?Ae.lanes:[yh];q.home=Math.sign(q.d||1)*M.reduce((E,b)=>Math.abs(Math.abs(q.d)-b)<Math.abs(Math.abs(q.d)-E)?b:E,M[0])}let o=pi.ctrl.lane??q.home,c=kt.active?0:s!==0?s*(2.2+q.v*.06):(o-q.d)*.8*Math.min(1,q.v/3);q.latVel+=(c-q.latVel)*(1-Math.exp(-t*5)),q.d+=q.latVel*t;let l=Te.halfWidth-.9;Math.abs(q.d)>l&&(q.d=Math.sign(q.d)*l,q.latVel=0),me.ensure(q.s+8e3),me.at(q.s,Ci),q.pos.set(Ci.x+Math.cos(Ci.th)*q.d,Ci.y,Ci.z-Math.sin(Ci.th)*q.d);let h=me.at(q.s-2.5,{}).y,u=me.at(q.s+2.5,{}).y;if(q.pitch+=(Math.atan2(u-h,5)-q.pitch)*(1-Math.exp(-t*6)),q.yaw=Ci.th-Math.atan2(q.latVel,Math.max(q.v,4))*.9,Xs+=((rt.cine&&rt.started?1:0)-Xs)*(1-Math.exp(-t*2.5)),zt.cine=Xs,dt.update(t,{pos:q.pos,yaw:q.yaw,pitch:q.pitch,speed:q.v,latVel:q.latVel,curvature:me.curvature(q.s+Math.min(12,q.v*.4)),rough:me.dirtAt(q.s)}),Ne.ready){Ne.root.visible=!Ov;let M=He[rt.cam].id==="cockpit"&&!kt.active;Ne.head.scale.setScalar(M?.001:1),dt.cabinLevel=M?(.35+.45*Dt.state.dayF)*(1+Dt.state.dark):0,Ne.update(t);let E=dt.current?.steer,b=kt.state==="off"||kt.state==="stopping";Ne.footShade.value=b?1:0,b&&(u2(dt.dim.seat),E&&f2(E))}if(kt.active){let M=kt.state;kt.update(t,dt.root,q.v);let E=kt.cam;l2(E.pos,E.look),Tt.lookAt(E.look);let b=zt.fovFor(E.focal),w=kt.closeK>.01?.06:.3;(Math.abs(Tt.fov-b)>.01||Tt.near!==w)&&(Tt.fov=b,Tt.near=w,Tt.updateProjectionMatrix()),kt.state==="off"&&(zt.setMode(rt.cam),zt.relP.copy(Tt.position).sub(q.pos),zt.relL.copy(E.look).sub(q.pos),zt.fov=Tt.fov,zt.look.yaw=zt.look.pitch=0),kt.state!==M&&ye()}else zt.cockpitPitch=h2(),zt.update(t,{pos:q.pos,yaw:q.yaw,pitch:q.pitch,speed:q.v,dim:dt.dim,fx:q.fx,side:q.d>=0?-1:1});Dt.precip.setCar(dt.tilt,dt.dim),JS(t),Dt.update(t,q.pos);let f=Dt.state;gi.update(q.s),gi.apply(f),gi.updateLights(Tt.position),Mr.update(r/1e3,Tt.position,me,q.s),hp.update(r/1e3,q.s,f.light,{d:q.d,v:q.v,dim:dt.dim,npcs:pi.active,cam:Tt,audio:vs}),Xo.visible&&Xo.update(r/1e3,Tt.position,me,q.s,f),Fa.group.visible=Bn[rt.map].id==="forest"&&f.cover<.5,Fa.visible&&Fa.update(r/1e3,Tt.position,me,q.s,f),Ha.group.visible=Bn[rt.map].id==="meadow"&&f.cover<.5,Ha.visible&&Ha.update(r/1e3,Tt.position,me,q.s,f),Th.update(t,q.s,me,xn),xn.setCar(q.s),xn.update(Tt.position),gs.update(Tt.position,xn),xn.apply(f);let d=Oe.smoothstep,g=(Bn[rt.map].id==="city"?0:1)*d(f.night,.35,.9)*(1-Math.min(1,f.rain*2))*(1-f.snow)*(1-f.cover)*(1-d(f.wind,.6,.9));if(lp.update(r/1e3,q.s,me,xn,g,un.size.y/(2*Math.tan(Oe.degToRad(Tt.fov)/2)),Re.fog.density),wh.update(t,q.v*3.6,Dt.clock),Uv.update(t,kt.smoking,f,un.size.y/(2*Math.tan(Oe.degToRad(Tt.fov)/2))),rt.started&&dt.current){let M=[{id:"player",s:q.s,d:q.d,speed:q.v,direction:1,width:dt.dim.width,length:dt.dim.length}];if(Ne.ready&&["exit","parked","enter"].includes(kt.state)&&(Ne.root.getWorldPosition(Mv),M.push({id:"person",...sv(Mv,me,q.s),width:.8,length:.8,speed:0,direction:0})),pi.playerHome=q.home,pi.playerGoal=kt.active?0:q.goal,Fn.visible){Fn.update(t,q.s,q.d,q.v,f.lamps,dt.dim.length),xs.update(t,q.s);let E=vi.stopAhead(q.s+dt.dim.length/2,1,0)<25;$d=q.v<.3&&!Yi.active&&!E?$d+t:0;let b=$d>7?Fn.stuckBehind(q.s,q.d):[];for(let w of Fn.cars)w.honk=!1;for(let w of b)w.honk=!0;if(b.length&&(tp-=t)<=0&&(tp=2+Math.random()*1.5,vs.horn(0,Math.min(1,1.2-(q.s-b[0].s)/40)),ep||(ep=!0,_r("📢 Xe phía sau đang bấm còi — chú đi tiếp đi!",!0))),b.length||(tp=0,ep=!1),Yi.update(t),bh=Math.max(0,bh-t),!Yi.active&&!kt.active&&bh<=0){let w=dt.dim.length,C=dt.dim.width,_=Fn.hitTest(q.s,q.d,w,C),S=_?null:xs.hitTest(q.s,q.d,w,C);(_&&(q.v>1.2||_.v>1.2)||S&&q.v>.8)&&(No++,zv=rt.cam,rt.cam=He.findIndex(I=>I.id==="orbit"),zt.setMode(rt.cam),wr(),ye(),Yi.start(q.s,q.d,dt.dim,_?{car:_}:{ped:S}))}pi.ctrl.lane=null,pi.ctrl.maxV=kt.active||!hn.avoid?1/0:Fn.ctrl.maxV}else pi.update(t,q.s,q.d,me,f.lamps,dt.current.def.id,M,vs)}if(vi.update(q.s,f.lamps,t),vi.visible&&rt.started&&!kt.active&&dt.dim){let M=q.s+dt.dim.length/2;if(Go!==null&&M>Go&&q.d>0){let E=me.junctionIndex(Go+Mo.stopA);me.junction(E)-Mo.stopA<=M&&vi.mainLight(E)===2&&(No++,_r(`🚨 Vượt đèn đỏ! (lỗi thứ ${No})`,!0));let b=me.nearJunction(M);for(let w of[b-8.4,b+8.4])Math.abs(M-w)<2&&q.v>.8&&Av!==w&&xs.crossingNear(w,q.d)&&(Av=w,No++,_r(`🚸 Không nhường người đi bộ! (lỗi thứ ${No})`,!0))}Go=M}_h.update(q.s,me,xn,f.lamps,un.size.y/(2*Math.tan(Oe.degToRad(Tt.fov)/2)),Re.fog.density),dt.setLights(f.lamps),vs.setAmbient({speed:q.v,rain:f.rain,snow:f.snow,wind:f.wind,dark:f.dark,fx:q.fx,inCar:He[rt.cam].id==="cockpit"&&!kt.active});let v=1-f.dark;dt.calm=f.dark;let m=.016*q.fx*q.fx*v;if(m>0){let M=r/1e3;Tt.position.x+=(Math.sin(M*11.3)+Math.sin(M*17.9)*.6)*m,Tt.position.y+=(Math.sin(M*13.7)+Math.sin(M*23.1)*.5)*m*.7}let p=Xs*v;if(p>.01){let M=r/1e3;Tt.position.x+=Math.sin(M*.37)*.014*p,Tt.position.y+=Math.sin(M*.53)*.012*p,Tt.rotateZ((Math.sin(M*.31)*.0045+Math.sin(M*.83)*.002)*p)}ip-=t,ip<=0&&(Ct("speed").textContent=Math.round(q.v*3.6),Ct("clock").textContent=Dt.clock,ae.lens.title!==Kv()&&(ye(),Ys()),Jo(),ip=.25),zi.uMistD.value=.05*rt.mistDens*rt.mistDens,zi.uMistH.value=3+70*Math.pow(rt.mistCover,1.4),zi.uMistCover.value=rt.mistCover,zi.uMistBase.value=q.pos.y-1.5,zi.uMistT.value=r/1e3,zi.uMistWind.value.copy(f.windDir).multiplyScalar(.0012+.006*f.wind),zi.uMistColor.value.copy(f.mistColor),Dt.mistCover=rt.mistCover,Dt.mistDens=rt.mistDens,f.wet>.001?Na.render(Re,Tt,q.pos.y+.05):Na.active=!1,gi.setReflection(Na,r/1e3);let x=He[rt.cam].id==="cockpit"&&!kt.active;ka.group.visible=x,x&&ka.render(Re,dt.tilt),cp.render(Re,Tt,x),Bo.update(t,kt.active?0:f.rain,q.v);let y=x?Bo.wet:0;dt.shield&&dt.setWiper(Bo.angle(dt.shield.sweep)),un.begin(),Ze.render(Re,Tt),p2(),Bo.apply(un.final.uniforms,y>.01?y:0,Tt,dt.tilt,dt.shield,r/1e3,dt.rearShield),un.renderGlassMask(Tt,dt.tilt,dt.rearShield),un.render(r/1e3,Xs,q.fx,o2(t)),Lh&&$S(),requestAnimationFrame(ax)}async function m2(){Yv(),Dt.setTime(Gn[rt.time].hour),Dt.hour=Gn[rt.time].hour,Dt.snapWeather(cn[rt.weather].id==="auto"?"cloudy":cn[rt.weather].id),Dt.onThunder=(e,n)=>vs.thunder(e,n),me.ensure(q.s+8e3),me.at(q.s,Ci),q.pos.set(Ci.x,Ci.y,Ci.z),Zv(),await dt.probe(),ye(),requestAnimationFrame(ax);let r=Ct("start");Ct("hint").textContent="Chạm hoặc nhấn phím bất kỳ để bắt đầu",dt.onProgress=e=>Vn(ae.car,"🚗","Đang tải… "+Math.round(e*100)+"%"),gs.load("assets/models/nature.glb").then(()=>{gs.rockGeos.length&&(xn.rockGeos=gs.rockGeos),xn.reset(),xn.prime(Tt.position.lengthSq()?Tt.position:q.pos),gs.setRadius(Vi[rt.quality].trees),Oa(un.sceneRT,Tt,gs.group).catch(()=>{})}).catch(e=>console.warn("Không tải được cây / đá chi tiết",e)),Ah(0).then(()=>Ne.load("assets/models/person.glb")).then(()=>{dt.tilt.add(Ne.root),dt.current&&(kt.place(dt.dim),kt.sit()),Oa(un.sceneRT,Tt,Ne.root).catch(()=>{}),ye()}).catch(e=>console.warn("Không tải được người lái",e));let t=e=>{r.classList.add("gone"),rt.started=!0,rx=performance.now()+1200,document.body.classList.add("playing"),QS(),La=0,vs.start().catch(n=>console.warn("Audio:",n)),window.removeEventListener("keydown",t),r.removeEventListener("pointerdown",t)};r.addEventListener("pointerdown",t),window.addEventListener("keydown",t)}m2();window.__app={city:vi,cityTraffic:Fn,cityPeople:xs,incident:Yi,ocean:Mr,waterfalls:hp,wing:cp,audio:vs,smoke:Uv,cows:Th,traffic:pi,dash:wh,town:_h,fireflies:lp,wipers:Bo,meadow:Ha,nature:gs,person:Ne,stop:kt,toggleStop:()=>Rh(),refl:Na,MIST:zi,forceCine:r=>{Xs=r},post:un,toggleFast:Ph,env:Dt,cars:dt,rig:zt,drive:q,state:rt,nextCharacter:Sh,chooseCharacter:fp,nextCar:jo,nextMap:Ch,nextCam:dp,nextWeather:gp,nextTime:vp,chooseCar:Ah,renderer:Ze,scene:Re,camera:Tt,scenery:gi,terrain:xn,reeds:Xo,grass:Fa,road:me};
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
