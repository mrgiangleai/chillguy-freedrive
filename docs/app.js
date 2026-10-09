var Tx=0,Hp=1,Sx=2;var M0=1,Mf=2,cs=3,Bi=0,Tn=1,Me=2;var Fs=0,oa=1,Ze=2,Np=3,kp=4,Ef=5,ls=100,Ax=101,Rx=102,Up=103,zp=104,wf=200,Cx=201,Tf=202,Px=203,Pu=204,Lu=205,Lx=206,Ix=207,Dx=208,Fx=209,Hx=210,Nx=211,kx=212,Ux=213,zx=214,Ox=0,Bx=1,Gx=2,Vc=3,Vx=4,Wx=5,qx=6,Xx=7,Sf=0,jx=1,Kx=2,Hs=0,Yx=1,Jx=2,Zx=3,Af=4,Qx=5,$x=6,Op="attached",tb="detached",E0=300,ha=301,ua=302,Iu=303,Du=304,bl=306,jn=1e3,si=1001,bo=1002,an=1003,Wc=1004;var uo=1005;var hn=1006,Rf=1007;var Gi=1008;var Oi=1009,eb=1010,nb=1011,Cf=1012,w0=1013,zi=1014,hs=1015,Zn=1016,T0=1017,S0=1018,pr=1020,ib=1021,pi=1023,sb=1024,rb=1025,mr=1026,fa=1027,ab=1028,A0=1029,ob=1030,R0=1031,C0=1033,jh=33776,Kh=33777,Yh=33778,Jh=33779,Bp=35840,Gp=35841,Vp=35842,Wp=35843,P0=36196,qp=37492,Xp=37496,jp=37808,Kp=37809,Yp=37810,Jp=37811,Zp=37812,Qp=37813,$p=37814,tm=37815,em=37816,nm=37817,im=37818,sm=37819,rm=37820,am=37821,Zh=36492,om=36494,cm=36495,cb=36283,lm=36284,hm=36285,um=36286,Pf=2200,Lf=2201,lb=2202,da=2300,vr=2301,Qh=2302,ia=2400,sa=2401,qc=2402,If=2500,hb=2501,L0=0,yl=1,Po=2,I0=3e3,gr=3001,ub=3200,Df=3201,Ff=0,fb=1,kn="",de="srgb",dn="srgb-linear",Hf="display-p3",_l="display-p3-linear",Xc="linear",Ve="srgb",jc="rec709",Kc="p3";var Nr=7680;var fm=519,db=512,pb=513,mb=514,D0=515,gb=516,vb=517,xb=518,bb=519,Fu=35044,Kn=35048;var dm="300 es",Hu=1035,us=2e3,Yc=2001,fs=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,t);t.target=null}}},Hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],pm=1234567,fo=Math.PI/180,pa=180/Math.PI;function Ri(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Hn[r&255]+Hn[r>>8&255]+Hn[r>>16&255]+Hn[r>>24&255]+"-"+Hn[t&255]+Hn[t>>8&255]+"-"+Hn[t>>16&15|64]+Hn[t>>24&255]+"-"+Hn[e&63|128]+Hn[e>>8&255]+"-"+Hn[e>>16&255]+Hn[e>>24&255]+Hn[n&255]+Hn[n>>8&255]+Hn[n>>16&255]+Hn[n>>24&255]).toLowerCase()}function fn(r,t,e){return Math.max(t,Math.min(e,r))}function Nf(r,t){return(r%t+t)%t}function yb(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function _b(r,t,e){return r!==t?(e-r)/(t-r):0}function po(r,t,e){return(1-e)*r+e*t}function Mb(r,t,e,n){return po(r,t,1-Math.exp(-e*n))}function Eb(r,t=1){return t-Math.abs(Nf(r,t*2)-t)}function wb(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function Tb(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function Sb(r,t){return r+Math.floor(Math.random()*(t-r+1))}function Ab(r,t){return r+Math.random()*(t-r)}function Rb(r){return r*(.5-Math.random())}function Cb(r){r!==void 0&&(pm=r);let t=pm+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Pb(r){return r*fo}function Lb(r){return r*pa}function Nu(r){return(r&r-1)===0&&r!==0}function Ib(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Jc(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Db(r,t,e,n,i){let s=Math.cos,a=Math.sin,o=s(e/2),c=a(e/2),l=s((t+n)/2),h=a((t+n)/2),f=s((t-n)/2),u=a((t-n)/2),d=s((n-t)/2),g=a((n-t)/2);switch(i){case"XYX":r.set(o*h,c*f,c*u,o*l);break;case"YZY":r.set(c*u,o*h,c*f,o*l);break;case"ZXZ":r.set(c*f,c*u,o*h,o*l);break;case"XZX":r.set(o*h,c*g,c*d,o*l);break;case"YXY":r.set(c*d,o*h,c*g,o*l);break;case"ZYZ":r.set(c*g,c*d,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ui(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function He(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var Oe={DEG2RAD:fo,RAD2DEG:pa,generateUUID:Ri,clamp:fn,euclideanModulo:Nf,mapLinear:yb,inverseLerp:_b,lerp:po,damp:Mb,pingpong:Eb,smoothstep:wb,smootherstep:Tb,randInt:Sb,randFloat:Ab,randFloatSpread:Rb,seededRandom:Cb,degToRad:Pb,radToDeg:Lb,isPowerOfTwo:Nu,ceilPowerOfTwo:Ib,floorPowerOfTwo:Jc,setQuaternionFromProperEuler:Db,normalize:He,denormalize:Ui},ht=class r{constructor(t=0,e=0){r.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(fn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*i+t.x,this.y=s*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ue=class r{constructor(t,e,n,i,s,a,o,c,l){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,c,l)}set(t,e,n,i,s,a,o,c,l){let h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=s,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],f=n[7],u=n[2],d=n[5],g=n[8],v=i[0],m=i[3],p=i[6],x=i[1],y=i[4],_=i[7],M=i[2],b=i[5],w=i[8];return s[0]=a*v+o*x+c*M,s[3]=a*m+o*y+c*b,s[6]=a*p+o*_+c*w,s[1]=l*v+h*x+f*M,s[4]=l*m+h*y+f*b,s[7]=l*p+h*_+f*w,s[2]=u*v+d*x+g*M,s[5]=u*m+d*y+g*b,s[8]=u*p+d*_+g*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*s*h+n*o*c+i*s*l-i*a*c}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],f=h*a-o*l,u=o*c-h*s,d=l*s-a*c,g=e*f+n*u+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return t[0]=f*v,t[1]=(i*l-h*n)*v,t[2]=(o*n-i*a)*v,t[3]=u*v,t[4]=(h*e-i*c)*v,t[5]=(i*s-o*e)*v,t[6]=d*v,t[7]=(n*c-l*e)*v,t[8]=(a*e-n*s)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,a,o){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-i*l,i*c,-i*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply($h.makeScale(t,e)),this}rotate(t){return this.premultiply($h.makeRotation(-t)),this}translate(t,e){return this.premultiply($h.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},$h=new ue;function F0(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function yo(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Fb(){let r=yo("canvas");return r.style.display="block",r}var mm={};function mo(r){r in mm||(mm[r]=!0,console.warn(r))}var gm=new ue().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),vm=new ue().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),uc={[dn]:{transfer:Xc,primaries:jc,toReference:r=>r,fromReference:r=>r},[de]:{transfer:Ve,primaries:jc,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[_l]:{transfer:Xc,primaries:Kc,toReference:r=>r.applyMatrix3(vm),fromReference:r=>r.applyMatrix3(gm)},[Hf]:{transfer:Ve,primaries:Kc,toReference:r=>r.convertSRGBToLinear().applyMatrix3(vm),fromReference:r=>r.applyMatrix3(gm).convertLinearToSRGB()}},Hb=new Set([dn,_l]),Ee={enabled:!0,_workingColorSpace:dn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Hb.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;let n=uc[t].toReference,i=uc[e].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return uc[r].primaries},getTransfer:function(r){return r===kn?Xc:uc[r].transfer}};function ca(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function tu(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var kr,Zc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{kr===void 0&&(kr=yo("canvas")),kr.width=t.width,kr.height=t.height;let n=kr.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=kr}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=yo("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=ca(s[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ca(e[n]/255)*255):e[n]=ca(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Nb=0,Qc=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Nb++}),this.uuid=Ri(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(eu(i[a].image)):s.push(eu(i[a]))}else s=eu(i);n.url=s}return e||(t.images[this.uuid]=n),n}};function eu(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Zc.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var kb=0,Sn=class r extends fs{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,n=si,i=si,s=hn,a=Gi,o=pi,c=Oi,l=r.DEFAULT_ANISOTROPY,h=kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kb++}),this.uuid=Ri(),this.name="",this.source=new Qc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(mo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===gr?de:kn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==E0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case jn:t.x=t.x-Math.floor(t.x);break;case si:t.x=t.x<0?0:1;break;case bo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case jn:t.y=t.y-Math.floor(t.y);break;case si:t.y=t.y<0?0:1;break;case bo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return mo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===de?gr:I0}set encoding(t){mo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===gr?de:kn}};Sn.DEFAULT_IMAGE=null;Sn.DEFAULT_MAPPING=E0;Sn.DEFAULT_ANISOTROPY=1;var fe=class r{constructor(t=0,e=0,n=0,i=1){r.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,c=t.elements,l=c[0],h=c[4],f=c[8],u=c[1],d=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(f-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(l+1)/2,_=(d+1)/2,M=(p+1)/2,b=(h+u)/4,w=(f+v)/4,C=(g+m)/4;return y>_&&y>M?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=b/n,s=w/n):_>M?_<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(_),n=b/i,s=C/i):M<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(M),n=w/s,i=C/s),this.set(n,i,s,e),this}let x=Math.sqrt((m-g)*(m-g)+(f-v)*(f-v)+(u-h)*(u-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(f-v)/x,this.z=(u-h)/x,this.w=Math.acos((l+d+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ku=class extends fs{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new fe(0,0,t,e),this.scissorTest=!1,this.viewport=new fe(0,0,t,e);let i={width:t,height:e,depth:1};n.encoding!==void 0&&(mo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===gr?de:kn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Sn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Qc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},_n=class extends ku{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},$c=class extends Sn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=an,this.minFilter=an,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Uu=class extends Sn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=an,this.minFilter=an,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Xt=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],f=n[i+3],u=s[a+0],d=s[a+1],g=s[a+2],v=s[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f;return}if(o===1){t[e+0]=u,t[e+1]=d,t[e+2]=g,t[e+3]=v;return}if(f!==v||c!==u||l!==d||h!==g){let m=1-o,p=c*u+l*d+h*g+f*v,x=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){let M=Math.sqrt(y),b=Math.atan2(M,p*x);m=Math.sin(m*b)/M,o=Math.sin(o*b)/M}let _=o*x;if(c=c*m+u*_,l=l*m+d*_,h=h*m+g*_,f=f*m+v*_,m===1-o){let M=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=M,l*=M,h*=M,f*=M}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,i,s,a){let o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],f=s[a],u=s[a+1],d=s[a+2],g=s[a+3];return t[e]=o*g+h*f+c*d-l*u,t[e+1]=c*g+h*u+l*f-o*d,t[e+2]=l*g+h*d+o*u-c*f,t[e+3]=h*g-o*f-c*u-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,s=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),f=o(s/2),u=c(n/2),d=c(i/2),g=c(s/2);switch(a){case"XYZ":this._x=u*h*f+l*d*g,this._y=l*d*f-u*h*g,this._z=l*h*g+u*d*f,this._w=l*h*f-u*d*g;break;case"YXZ":this._x=u*h*f+l*d*g,this._y=l*d*f-u*h*g,this._z=l*h*g-u*d*f,this._w=l*h*f+u*d*g;break;case"ZXY":this._x=u*h*f-l*d*g,this._y=l*d*f+u*h*g,this._z=l*h*g+u*d*f,this._w=l*h*f-u*d*g;break;case"ZYX":this._x=u*h*f-l*d*g,this._y=l*d*f+u*h*g,this._z=l*h*g-u*d*f,this._w=l*h*f+u*d*g;break;case"YZX":this._x=u*h*f+l*d*g,this._y=l*d*f+u*h*g,this._z=l*h*g-u*d*f,this._w=l*h*f-u*d*g;break;case"XZY":this._x=u*h*f-l*d*g,this._y=l*d*f-u*h*g,this._z=l*h*g+u*d*f,this._w=l*h*f+u*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],f=e[10],u=n+o+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-c)*d,this._y=(s-l)*d,this._z=(a-i)*d}else if(n>o&&n>f){let d=2*Math.sqrt(1+n-o-f);this._w=(h-c)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(s+l)/d}else if(o>f){let d=2*Math.sqrt(1+o-n-f);this._w=(s-l)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+f-n-o);this._w=(a-i)/d,this._x=(s+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(fn(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,s=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+i*l-s*c,this._y=i*h+a*c+s*o-n*l,this._z=s*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,s=this._z,a=this._w,o=a*t._w+n*t._x+i*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;let c=1-o*o;if(c<=Number.EPSILON){let d=1-e;return this._w=d*a+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),f=Math.sin((1-e)*h)/l,u=Math.sin(e*h)/l;return this._w=a*f+this._w*u,this._x=n*f+this._x*u,this._y=i*f+this._y*u,this._z=s*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(s),n*Math.cos(s),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},T=class r{constructor(t=0,e=0,n=0){r.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(xm.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(xm.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,s=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*i-o*n),h=2*(o*e-s*i),f=2*(s*n-a*e);return this.x=e+c*l+a*f-o*h,this.y=n+c*h+o*l-s*f,this.z=i+c*f+s*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,s=t.z,a=e.x,o=e.y,c=e.z;return this.x=i*c-s*o,this.y=s*a-n*c,this.z=n*o-i*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return nu.copy(this).projectOnVector(t),this.sub(nu)}reflect(t){return this.sub(nu.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(fn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},nu=new T,xm=new Xt,Qe=class{constructor(t=new T(1/0,1/0,1/0),e=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(wi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(wi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=wi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,wi):wi.fromBufferAttribute(s,a),wi.applyMatrix4(t.matrixWorld),this.expandByPoint(wi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),fc.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),fc.copy(n.boundingBox)),fc.applyMatrix4(t.matrixWorld),this.union(fc)}let i=t.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,wi),wi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(eo),dc.subVectors(this.max,eo),Ur.subVectors(t.a,eo),zr.subVectors(t.b,eo),Or.subVectors(t.c,eo),Rs.subVectors(zr,Ur),Cs.subVectors(Or,zr),or.subVectors(Ur,Or);let e=[0,-Rs.z,Rs.y,0,-Cs.z,Cs.y,0,-or.z,or.y,Rs.z,0,-Rs.x,Cs.z,0,-Cs.x,or.z,0,-or.x,-Rs.y,Rs.x,0,-Cs.y,Cs.x,0,-or.y,or.x,0];return!iu(e,Ur,zr,Or,dc)||(e=[1,0,0,0,1,0,0,0,1],!iu(e,Ur,zr,Or,dc))?!1:(pc.crossVectors(Rs,Cs),e=[pc.x,pc.y,pc.z],iu(e,Ur,zr,Or,dc))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,wi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(wi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ns[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ns[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ns[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ns[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ns[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ns[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ns[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ns[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ns),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},ns=[new T,new T,new T,new T,new T,new T,new T,new T],wi=new T,fc=new Qe,Ur=new T,zr=new T,Or=new T,Rs=new T,Cs=new T,or=new T,eo=new T,dc=new T,pc=new T,cr=new T;function iu(r,t,e,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){cr.fromArray(r,s);let o=i.x*Math.abs(cr.x)+i.y*Math.abs(cr.y)+i.z*Math.abs(cr.z),c=t.dot(cr),l=e.dot(cr),h=n.dot(cr);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Ub=new Qe,no=new T,su=new T,ri=class{constructor(t=new T,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Ub.setFromPoints(t).getCenter(n);let i=0;for(let s=0,a=t.length;s<a;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;no.subVectors(t,this.center);let e=no.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(no,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(su.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(no.copy(t.center).add(su)),this.expandByPoint(no.copy(t.center).sub(su))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},is=new T,ru=new T,mc=new T,Ps=new T,au=new T,gc=new T,ou=new T,xr=class{constructor(t=new T,e=new T(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,is)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=is.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(is.copy(this.origin).addScaledVector(this.direction,e),is.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){ru.copy(t).add(e).multiplyScalar(.5),mc.copy(e).sub(t).normalize(),Ps.copy(this.origin).sub(ru);let s=t.distanceTo(e)*.5,a=-this.direction.dot(mc),o=Ps.dot(this.direction),c=-Ps.dot(mc),l=Ps.lengthSq(),h=Math.abs(1-a*a),f,u,d,g;if(h>0)if(f=a*c-o,u=a*o-c,g=s*h,f>=0)if(u>=-g)if(u<=g){let v=1/h;f*=v,u*=v,d=f*(f+a*u+2*o)+u*(a*f+u+2*c)+l}else u=s,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*c)+l;else u=-s,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*c)+l;else u<=-g?(f=Math.max(0,-(-a*s+o)),u=f>0?-s:Math.min(Math.max(-s,-c),s),d=-f*f+u*(u+2*c)+l):u<=g?(f=0,u=Math.min(Math.max(-s,-c),s),d=u*(u+2*c)+l):(f=Math.max(0,-(a*s+o)),u=f>0?s:Math.min(Math.max(-s,-c),s),d=-f*f+u*(u+2*c)+l);else u=a>0?-s:s,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(ru).addScaledVector(mc,u),d}intersectSphere(t,e){is.subVectors(t.center,this.origin);let n=is.dot(this.direction),i=is.dot(is)-n*n,s=t.radius*t.radius;if(i>s)return null;let a=Math.sqrt(s-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,a,o,c,l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,i=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,i=(t.min.x-u.x)*l),h>=0?(s=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),f>=0?(o=(t.min.z-u.z)*f,c=(t.max.z-u.z)*f):(o=(t.max.z-u.z)*f,c=(t.min.z-u.z)*f),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,is)!==null}intersectTriangle(t,e,n,i,s){au.subVectors(e,t),gc.subVectors(n,t),ou.crossVectors(au,gc);let a=this.direction.dot(ou),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ps.subVectors(this.origin,t);let c=o*this.direction.dot(gc.crossVectors(Ps,gc));if(c<0)return null;let l=o*this.direction.dot(au.cross(Ps));if(l<0||c+l>a)return null;let h=-o*Ps.dot(ou);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},wt=class r{constructor(t,e,n,i,s,a,o,c,l,h,f,u,d,g,v,m){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,c,l,h,f,u,d,g,v,m)}set(t,e,n,i,s,a,o,c,l,h,f,u,d,g,v,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=f,p[14]=u,p[3]=d,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/Br.setFromMatrixColumn(t,0).length(),s=1/Br.setFromMatrixColumn(t,1).length(),a=1/Br.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){let u=a*h,d=a*f,g=o*h,v=o*f;e[0]=c*h,e[4]=-c*f,e[8]=l,e[1]=d+g*l,e[5]=u-v*l,e[9]=-o*c,e[2]=v-u*l,e[6]=g+d*l,e[10]=a*c}else if(t.order==="YXZ"){let u=c*h,d=c*f,g=l*h,v=l*f;e[0]=u+v*o,e[4]=g*o-d,e[8]=a*l,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=d*o-g,e[6]=v+u*o,e[10]=a*c}else if(t.order==="ZXY"){let u=c*h,d=c*f,g=l*h,v=l*f;e[0]=u-v*o,e[4]=-a*f,e[8]=g+d*o,e[1]=d+g*o,e[5]=a*h,e[9]=v-u*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let u=a*h,d=a*f,g=o*h,v=o*f;e[0]=c*h,e[4]=g*l-d,e[8]=u*l+v,e[1]=c*f,e[5]=v*l+u,e[9]=d*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let u=a*c,d=a*l,g=o*c,v=o*l;e[0]=c*h,e[4]=v-u*f,e[8]=g*f+d,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=d*f+g,e[10]=u-v*f}else if(t.order==="XZY"){let u=a*c,d=a*l,g=o*c,v=o*l;e[0]=c*h,e[4]=-f,e[8]=l*h,e[1]=u*f+v,e[5]=a*h,e[9]=d*f-g,e[2]=g*f-d,e[6]=o*h,e[10]=v*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(zb,t,Ob)}lookAt(t,e,n){let i=this.elements;return ni.subVectors(t,e),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),Ls.crossVectors(n,ni),Ls.lengthSq()===0&&(Math.abs(n.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),Ls.crossVectors(n,ni)),Ls.normalize(),vc.crossVectors(ni,Ls),i[0]=Ls.x,i[4]=vc.x,i[8]=ni.x,i[1]=Ls.y,i[5]=vc.y,i[9]=ni.y,i[2]=Ls.z,i[6]=vc.z,i[10]=ni.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],f=n[5],u=n[9],d=n[13],g=n[2],v=n[6],m=n[10],p=n[14],x=n[3],y=n[7],_=n[11],M=n[15],b=i[0],w=i[4],C=i[8],E=i[12],S=i[1],I=i[5],D=i[9],k=i[13],R=i[2],A=i[6],P=i[10],N=i[14],U=i[3],V=i[7],q=i[11],j=i[15];return s[0]=a*b+o*S+c*R+l*U,s[4]=a*w+o*I+c*A+l*V,s[8]=a*C+o*D+c*P+l*q,s[12]=a*E+o*k+c*N+l*j,s[1]=h*b+f*S+u*R+d*U,s[5]=h*w+f*I+u*A+d*V,s[9]=h*C+f*D+u*P+d*q,s[13]=h*E+f*k+u*N+d*j,s[2]=g*b+v*S+m*R+p*U,s[6]=g*w+v*I+m*A+p*V,s[10]=g*C+v*D+m*P+p*q,s[14]=g*E+v*k+m*N+p*j,s[3]=x*b+y*S+_*R+M*U,s[7]=x*w+y*I+_*A+M*V,s[11]=x*C+y*D+_*P+M*q,s[15]=x*E+y*k+_*N+M*j,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],f=t[6],u=t[10],d=t[14],g=t[3],v=t[7],m=t[11],p=t[15];return g*(+s*c*f-i*l*f-s*o*u+n*l*u+i*o*d-n*c*d)+v*(+e*c*d-e*l*u+s*a*u-i*a*d+i*l*h-s*c*h)+m*(+e*l*f-e*o*d-s*a*f+n*a*d+s*o*h-n*l*h)+p*(-i*o*h-e*c*f+e*o*u+i*a*f-n*a*u+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],f=t[9],u=t[10],d=t[11],g=t[12],v=t[13],m=t[14],p=t[15],x=f*m*l-v*u*l+v*c*d-o*m*d-f*c*p+o*u*p,y=g*u*l-h*m*l-g*c*d+a*m*d+h*c*p-a*u*p,_=h*v*l-g*f*l+g*o*d-a*v*d-h*o*p+a*f*p,M=g*f*c-h*v*c-g*o*u+a*v*u+h*o*m-a*f*m,b=e*x+n*y+i*_+s*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/b;return t[0]=x*w,t[1]=(v*u*s-f*m*s-v*i*d+n*m*d+f*i*p-n*u*p)*w,t[2]=(o*m*s-v*c*s+v*i*l-n*m*l-o*i*p+n*c*p)*w,t[3]=(f*c*s-o*u*s-f*i*l+n*u*l+o*i*d-n*c*d)*w,t[4]=y*w,t[5]=(h*m*s-g*u*s+g*i*d-e*m*d-h*i*p+e*u*p)*w,t[6]=(g*c*s-a*m*s-g*i*l+e*m*l+a*i*p-e*c*p)*w,t[7]=(a*u*s-h*c*s+h*i*l-e*u*l-a*i*d+e*c*d)*w,t[8]=_*w,t[9]=(g*f*s-h*v*s-g*n*d+e*v*d+h*n*p-e*f*p)*w,t[10]=(a*v*s-g*o*s+g*n*l-e*v*l-a*n*p+e*o*p)*w,t[11]=(h*o*s-a*f*s-h*n*l+e*f*l+a*n*d-e*o*d)*w,t[12]=M*w,t[13]=(h*v*i-g*f*i+g*n*u-e*v*u-h*n*m+e*f*m)*w,t[14]=(g*o*i-a*v*i-g*n*c+e*v*c+a*n*m-e*o*m)*w,t[15]=(a*f*i-h*o*i+h*n*c-e*f*c-a*n*u+e*o*u)*w,this}scale(t){let e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,a=t.x,o=t.y,c=t.z,l=s*a,h=s*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,a){return this.set(1,n,s,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,s=e._x,a=e._y,o=e._z,c=e._w,l=s+s,h=a+a,f=o+o,u=s*l,d=s*h,g=s*f,v=a*h,m=a*f,p=o*f,x=c*l,y=c*h,_=c*f,M=n.x,b=n.y,w=n.z;return i[0]=(1-(v+p))*M,i[1]=(d+_)*M,i[2]=(g-y)*M,i[3]=0,i[4]=(d-_)*b,i[5]=(1-(u+p))*b,i[6]=(m+x)*b,i[7]=0,i[8]=(g+y)*w,i[9]=(m-x)*w,i[10]=(1-(u+v))*w,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,s=Br.set(i[0],i[1],i[2]).length(),a=Br.set(i[4],i[5],i[6]).length(),o=Br.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],Ti.copy(this);let l=1/s,h=1/a,f=1/o;return Ti.elements[0]*=l,Ti.elements[1]*=l,Ti.elements[2]*=l,Ti.elements[4]*=h,Ti.elements[5]*=h,Ti.elements[6]*=h,Ti.elements[8]*=f,Ti.elements[9]*=f,Ti.elements[10]*=f,e.setFromRotationMatrix(Ti),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,i,s,a,o=us){let c=this.elements,l=2*s/(e-t),h=2*s/(n-i),f=(e+t)/(e-t),u=(n+i)/(n-i),d,g;if(o===us)d=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Yc)d=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,s,a,o=us){let c=this.elements,l=1/(e-t),h=1/(n-i),f=1/(a-s),u=(e+t)*l,d=(n+i)*h,g,v;if(o===us)g=(a+s)*f,v=-2*f;else if(o===Yc)g=s*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Br=new T,Ti=new wt,zb=new T(0,0,0),Ob=new T(1,1,1),Ls=new T,vc=new T,ni=new T,bm=new wt,ym=new Xt,mi=class r{constructor(t=0,e=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],f=i[2],u=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(fn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-fn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(fn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-fn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(fn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-fn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return bm.makeRotationFromQuaternion(t),this.setFromRotationMatrix(bm,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ym.setFromEuler(this),this.setFromQuaternion(ym,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};mi.DEFAULT_ORDER="XYZ";var _o=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Bb=0,_m=new T,Gr=new Xt,ss=new wt,xc=new T,io=new T,Gb=new T,Vb=new Xt,Mm=new T(1,0,0),Em=new T(0,1,0),wm=new T(0,0,1),Wb={type:"added"},qb={type:"removed"},Ue=class r extends fs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bb++}),this.uuid=Ri(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new T,e=new mi,n=new Xt,i=new T(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new wt},normalMatrix:{value:new ue}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _o,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Gr.setFromAxisAngle(t,e),this.quaternion.multiply(Gr),this}rotateOnWorldAxis(t,e){return Gr.setFromAxisAngle(t,e),this.quaternion.premultiply(Gr),this}rotateX(t){return this.rotateOnAxis(Mm,t)}rotateY(t){return this.rotateOnAxis(Em,t)}rotateZ(t){return this.rotateOnAxis(wm,t)}translateOnAxis(t,e){return _m.copy(t).applyQuaternion(this.quaternion),this.position.add(_m.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Mm,t)}translateY(t){return this.translateOnAxis(Em,t)}translateZ(t){return this.translateOnAxis(wm,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ss.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?xc.copy(t):xc.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),io.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ss.lookAt(io,xc,this.up):ss.lookAt(xc,io,this.up),this.quaternion.setFromRotationMatrix(ss),i&&(ss.extractRotation(i.matrixWorld),Gr.setFromRotationMatrix(ss),this.quaternion.premultiply(Gr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Wb)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(qb)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ss.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ss.multiply(t.parent.matrixWorld)),t.applyMatrix4(ss),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(io,t,Gb),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(io,Vb,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++){let s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let i=this.children;for(let s=0,a=i.length;s<a;s++){let o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let f=c[l];s(t.shapes,f)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(t.materials,this.material[c]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];i.animations.push(s(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),f=a(t.shapes),u=a(t.skeletons),d=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};Ue.DEFAULT_UP=new T(0,1,0);Ue.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Si=new T,rs=new T,cu=new T,as=new T,Vr=new T,Wr=new T,Tm=new T,lu=new T,hu=new T,uu=new T,bc=!1,dr=class r{constructor(t=new T,e=new T,n=new T){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Si.subVectors(t,e),i.cross(Si);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Si.subVectors(i,e),rs.subVectors(n,e),cu.subVectors(t,e);let a=Si.dot(Si),o=Si.dot(rs),c=Si.dot(cu),l=rs.dot(rs),h=rs.dot(cu),f=a*l-o*o;if(f===0)return s.set(0,0,0),null;let u=1/f,d=(l*c-o*h)*u,g=(a*h-o*c)*u;return s.set(1-d-g,g,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,as)===null?!1:as.x>=0&&as.y>=0&&as.x+as.y<=1}static getUV(t,e,n,i,s,a,o,c){return bc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),bc=!0),this.getInterpolation(t,e,n,i,s,a,o,c)}static getInterpolation(t,e,n,i,s,a,o,c){return this.getBarycoord(t,e,n,i,as)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,as.x),c.addScaledVector(a,as.y),c.addScaledVector(o,as.z),c)}static isFrontFacing(t,e,n,i){return Si.subVectors(n,e),rs.subVectors(t,e),Si.cross(rs).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Si.subVectors(this.c,this.b),rs.subVectors(this.a,this.b),Si.cross(rs).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,s){return bc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),bc=!0),r.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}getInterpolation(t,e,n,i,s){return r.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,a,o;Vr.subVectors(i,n),Wr.subVectors(s,n),lu.subVectors(t,n);let c=Vr.dot(lu),l=Wr.dot(lu);if(c<=0&&l<=0)return e.copy(n);hu.subVectors(t,i);let h=Vr.dot(hu),f=Wr.dot(hu);if(h>=0&&f<=h)return e.copy(i);let u=c*f-h*l;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(Vr,a);uu.subVectors(t,s);let d=Vr.dot(uu),g=Wr.dot(uu);if(g>=0&&d<=g)return e.copy(s);let v=d*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(Wr,o);let m=h*g-d*f;if(m<=0&&f-h>=0&&d-g>=0)return Tm.subVectors(s,i),o=(f-h)/(f-h+(d-g)),e.copy(i).addScaledVector(Tm,o);let p=1/(m+v+u);return a=v*p,o=u*p,e.copy(n).addScaledVector(Vr,a).addScaledVector(Wr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},H0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Is={h:0,s:0,l:0},yc={h:0,s:0,l:0};function fu(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var it=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=de){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ee.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ee.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Ee.workingColorSpace){if(t=Nf(t,1),e=fn(e,0,1),n=fn(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=fu(a,s,t+1/3),this.g=fu(a,s,t),this.b=fu(a,s,t-1/3)}return Ee.toWorkingColorSpace(this,i),this}setStyle(t,e=de){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=de){let n=H0[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ca(t.r),this.g=ca(t.g),this.b=ca(t.b),this}copyLinearToSRGB(t){return this.r=tu(t.r),this.g=tu(t.g),this.b=tu(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=de){return Ee.fromWorkingColorSpace(Nn.copy(this),t),Math.round(fn(Nn.r*255,0,255))*65536+Math.round(fn(Nn.g*255,0,255))*256+Math.round(fn(Nn.b*255,0,255))}getHexString(t=de){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ee.workingColorSpace){Ee.fromWorkingColorSpace(Nn.copy(this),e);let n=Nn.r,i=Nn.g,s=Nn.b,a=Math.max(n,i,s),o=Math.min(n,i,s),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let f=a-o;switch(l=h<=.5?f/(a+o):f/(2-a-o),a){case n:c=(i-s)/f+(i<s?6:0);break;case i:c=(s-n)/f+2;break;case s:c=(n-i)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Ee.workingColorSpace){return Ee.fromWorkingColorSpace(Nn.copy(this),e),t.r=Nn.r,t.g=Nn.g,t.b=Nn.b,t}getStyle(t=de){Ee.fromWorkingColorSpace(Nn.copy(this),t);let e=Nn.r,n=Nn.g,i=Nn.b;return t!==de?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Is),this.setHSL(Is.h+t,Is.s+e,Is.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Is),t.getHSL(yc);let n=po(Is.h,yc.h,e),i=po(Is.s,yc.s,e),s=po(Is.l,yc.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Nn=new it;it.NAMES=H0;var Xb=0,An=class extends fs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xb++}),this.uuid=Ri(),this.name="",this.type="Material",this.blending=oa,this.side=Bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pu,this.blendDst=Lu,this.blendEquation=ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=Vc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Nr,this.stencilZFail=Nr,this.stencilZPass=Nr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==oa&&(n.blending=this.blending),this.side!==Bi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Pu&&(n.blendSrc=this.blendSrc),this.blendDst!==Lu&&(n.blendDst=this.blendDst),this.blendEquation!==ls&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Vc&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fm&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Nr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Nr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Nr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let a=[];for(let o in s){let c=s[o];delete c.metadata,a.push(c)}return a}if(e){let s=i(t.textures),a=i(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},en=class extends An{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Sf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ln=new T,_c=new ht,At=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Fu,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=hs,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)_c.fromBufferAttribute(this,e),_c.applyMatrix3(t),this.setXY(e,_c.x,_c.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.applyMatrix3(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.applyMatrix4(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.applyNormalMatrix(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.transformDirection(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ui(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=He(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ui(e,this.array)),e}setX(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ui(e,this.array)),e}setY(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ui(e,this.array)),e}setZ(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ui(e,this.array)),e}setW(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array),i=He(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array),i=He(i,this.array),s=He(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Fu&&(t.usage=this.usage),t}};var tl=class extends At{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var el=class extends At{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var _t=class extends At{constructor(t,e,n){super(new Float32Array(t),e,n)}};var jb=0,di=new wt,du=new Ue,qr=new T,ii=new Qe,so=new Qe,yn=new T,Rt=class r extends fs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jb++}),this.uuid=Ri(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(F0(t)?el:tl)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new ue().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return di.makeRotationFromQuaternion(t),this.applyMatrix4(di),this}rotateX(t){return di.makeRotationX(t),this.applyMatrix4(di),this}rotateY(t){return di.makeRotationY(t),this.applyMatrix4(di),this}rotateZ(t){return di.makeRotationZ(t),this.applyMatrix4(di),this}translate(t,e,n){return di.makeTranslation(t,e,n),this.applyMatrix4(di),this}scale(t,e,n){return di.makeScale(t,e,n),this.applyMatrix4(di),this}lookAt(t){return du.lookAt(t),du.updateMatrix(),this.applyMatrix4(du.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qr).negate(),this.translate(qr.x,qr.y,qr.z),this}setFromPoints(t){let e=[];for(let n=0,i=t.length;n<i;n++){let s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new _t(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qe);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];ii.setFromBufferAttribute(s),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ri);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new T,1/0);return}if(t){let n=this.boundingSphere.center;if(ii.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){let o=e[s];so.setFromBufferAttribute(o),this.morphTargetsRelative?(yn.addVectors(ii.min,so.min),ii.expandByPoint(yn),yn.addVectors(ii.max,so.max),ii.expandByPoint(yn)):(ii.expandByPoint(so.min),ii.expandByPoint(so.max))}ii.getCenter(n);let i=0;for(let s=0,a=t.count;s<a;s++)yn.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(yn));if(e)for(let s=0,a=e.length;s<a;s++){let o=e[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)yn.fromBufferAttribute(o,l),c&&(qr.fromBufferAttribute(t,l),yn.add(qr)),i=Math.max(i,n.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.array,i=e.position.array,s=e.normal.array,a=e.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new At(new Float32Array(4*o),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let S=0;S<o;S++)l[S]=new T,h[S]=new T;let f=new T,u=new T,d=new T,g=new ht,v=new ht,m=new ht,p=new T,x=new T;function y(S,I,D){f.fromArray(i,S*3),u.fromArray(i,I*3),d.fromArray(i,D*3),g.fromArray(a,S*2),v.fromArray(a,I*2),m.fromArray(a,D*2),u.sub(f),d.sub(f),v.sub(g),m.sub(g);let k=1/(v.x*m.y-m.x*v.y);isFinite(k)&&(p.copy(u).multiplyScalar(m.y).addScaledVector(d,-v.y).multiplyScalar(k),x.copy(d).multiplyScalar(v.x).addScaledVector(u,-m.x).multiplyScalar(k),l[S].add(p),l[I].add(p),l[D].add(p),h[S].add(x),h[I].add(x),h[D].add(x))}let _=this.groups;_.length===0&&(_=[{start:0,count:n.length}]);for(let S=0,I=_.length;S<I;++S){let D=_[S],k=D.start,R=D.count;for(let A=k,P=k+R;A<P;A+=3)y(n[A+0],n[A+1],n[A+2])}let M=new T,b=new T,w=new T,C=new T;function E(S){w.fromArray(s,S*3),C.copy(w);let I=l[S];M.copy(I),M.sub(w.multiplyScalar(w.dot(I))).normalize(),b.crossVectors(C,I);let k=b.dot(h[S])<0?-1:1;c[S*4]=M.x,c[S*4+1]=M.y,c[S*4+2]=M.z,c[S*4+3]=k}for(let S=0,I=_.length;S<I;++S){let D=_[S],k=D.start,R=D.count;for(let A=k,P=k+R;A<P;A+=3)E(n[A+0]),E(n[A+1]),E(n[A+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new At(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);let i=new T,s=new T,a=new T,o=new T,c=new T,l=new T,h=new T,f=new T;if(t)for(let u=0,d=t.count;u<d;u+=3){let g=t.getX(u+0),v=t.getX(u+1),m=t.getX(u+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),h.subVectors(a,s),f.subVectors(i,s),h.cross(f),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,d=e.count;u<d;u+=3)i.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,s),f.subVectors(i,s),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)yn.fromBufferAttribute(t,e),yn.normalize(),t.setXYZ(e,yn.x,yn.y,yn.z)}toNonIndexed(){function t(o,c){let l=o.array,h=o.itemSize,f=o.normalized,u=new l.constructor(c.length*h),d=0,g=0;for(let v=0,m=c.length;v<m;v++){o.isInterleavedBufferAttribute?d=c[v]*o.data.stride+o.offset:d=c[v]*h;for(let p=0;p<h;p++)u[g++]=l[d++]}return new At(u,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,n=this.index.array,i=this.attributes;for(let o in i){let c=i[o],l=t(c,n);e.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let c=[],l=s[o];for(let h=0,f=l.length;h<f;h++){let u=l[h],d=t(u,n);c.push(d)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let i={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let f=0,u=l.length;f<u;f++){let d=l[f];h.push(d.toJSON(t.data))}h.length>0&&(i[c]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(e))}let s=t.morphAttributes;for(let l in s){let h=[],f=s[l];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,h=a.length;l<h;l++){let f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Sm=new wt,lr=new xr,Mc=new ri,Am=new T,Xr=new T,jr=new T,Kr=new T,pu=new T,Ec=new T,wc=new ht,Tc=new ht,Sc=new ht,Rm=new T,Cm=new T,Pm=new T,Ac=new T,Rc=new T,Gt=class extends Ue{constructor(t=new Rt,e=new en){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let o=this.morphTargetInfluences;if(s&&o){Ec.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=o[c],f=s[c];h!==0&&(pu.fromBufferAttribute(f,t),a?Ec.addScaledVector(pu,h):Ec.addScaledVector(pu.sub(e),h))}e.add(Ec)}return e}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Mc.copy(n.boundingSphere),Mc.applyMatrix4(s),lr.copy(t.ray).recast(t.near),!(Mc.containsPoint(lr.origin)===!1&&(lr.intersectSphere(Mc,Am)===null||lr.origin.distanceToSquared(Am)>(t.far-t.near)**2))&&(Sm.copy(s).invert(),lr.copy(t.ray).applyMatrix4(Sm),!(n.boundingBox!==null&&lr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,lr)))}_computeIntersections(t,e,n){let i,s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,u=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){let m=u[g],p=a[m.materialIndex],x=Math.max(m.start,d.start),y=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let _=x,M=y;_<M;_+=3){let b=o.getX(_),w=o.getX(_+1),C=o.getX(_+2);i=Cc(this,p,t,n,l,h,f,b,w,C),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){let x=o.getX(m),y=o.getX(m+1),_=o.getX(m+2);i=Cc(this,a,t,n,l,h,f,x,y,_),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){let m=u[g],p=a[m.materialIndex],x=Math.max(m.start,d.start),y=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let _=x,M=y;_<M;_+=3){let b=_,w=_+1,C=_+2;i=Cc(this,p,t,n,l,h,f,b,w,C),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,d.start),v=Math.min(c.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){let x=m,y=m+1,_=m+2;i=Cc(this,a,t,n,l,h,f,x,y,_),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function Kb(r,t,e,n,i,s,a,o){let c;if(t.side===Tn?c=n.intersectTriangle(a,s,i,!0,o):c=n.intersectTriangle(i,s,a,t.side===Bi,o),c===null)return null;Rc.copy(o),Rc.applyMatrix4(r.matrixWorld);let l=e.ray.origin.distanceTo(Rc);return l<e.near||l>e.far?null:{distance:l,point:Rc.clone(),object:r}}function Cc(r,t,e,n,i,s,a,o,c,l){r.getVertexPosition(o,Xr),r.getVertexPosition(c,jr),r.getVertexPosition(l,Kr);let h=Kb(r,t,e,n,Xr,jr,Kr,Ac);if(h){i&&(wc.fromBufferAttribute(i,o),Tc.fromBufferAttribute(i,c),Sc.fromBufferAttribute(i,l),h.uv=dr.getInterpolation(Ac,Xr,jr,Kr,wc,Tc,Sc,new ht)),s&&(wc.fromBufferAttribute(s,o),Tc.fromBufferAttribute(s,c),Sc.fromBufferAttribute(s,l),h.uv1=dr.getInterpolation(Ac,Xr,jr,Kr,wc,Tc,Sc,new ht),h.uv2=h.uv1),a&&(Rm.fromBufferAttribute(a,o),Cm.fromBufferAttribute(a,c),Pm.fromBufferAttribute(a,l),h.normal=dr.getInterpolation(Ac,Xr,jr,Kr,Rm,Cm,Pm,new T),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:c,c:l,normal:new T,materialIndex:0};dr.getNormal(Xr,jr,Kr,f.normal),h.face=f}return h}var re=class r extends Rt{constructor(t=1,e=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};let o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);let c=[],l=[],h=[],f=[],u=0,d=0;g("z","y","x",-1,-1,n,e,t,a,s,0),g("z","y","x",1,-1,n,e,-t,a,s,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new _t(l,3)),this.setAttribute("normal",new _t(h,3)),this.setAttribute("uv",new _t(f,2));function g(v,m,p,x,y,_,M,b,w,C,E){let S=_/w,I=M/C,D=_/2,k=M/2,R=b/2,A=w+1,P=C+1,N=0,U=0,V=new T;for(let q=0;q<P;q++){let j=q*I-k;for(let at=0;at<A;at++){let G=at*S-D;V[v]=G*x,V[m]=j*y,V[p]=R,l.push(V.x,V.y,V.z),V[v]=0,V[m]=0,V[p]=b>0?1:-1,h.push(V.x,V.y,V.z),f.push(at/w),f.push(1-q/C),N+=1}}for(let q=0;q<C;q++)for(let j=0;j<w;j++){let at=u+j+A*q,G=u+j+A*(q+1),$=u+(j+1)+A*(q+1),gt=u+(j+1)+A*q;c.push(at,G,gt),c.push(G,$,gt),U+=6}o.addGroup(d,U,E),d+=U,u+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ma(r){let t={};for(let e in r){t[e]={};for(let n in r[e]){let i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Xn(r){let t={};for(let e=0;e<r.length;e++){let n=ma(r[e]);for(let i in n)t[i]=n[i]}return t}function Yb(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function N0(r){return r.getRenderTarget()===null?r.outputColorSpace:Ee.workingColorSpace}var Jb={clone:ma,merge:Xn},Zb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,we=class extends An{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zb,this.fragmentShader=Qb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ma(t.uniforms),this.uniformsGroups=Yb(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},nl=class extends Ue{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt,this.coordinateSystem=us}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},We=class extends nl{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=pa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(fo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return pa*2*Math.atan(Math.tan(fo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(fo*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*i/c,e-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Yr=-90,Jr=1,zu=class extends Ue{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new We(Yr,Jr,t,e);i.layers=this.layers,this.add(i);let s=new We(Yr,Jr,t,e);s.layers=this.layers,this.add(s);let a=new We(Yr,Jr,t,e);a.layers=this.layers,this.add(a);let o=new We(Yr,Jr,t,e);o.layers=this.layers,this.add(o);let c=new We(Yr,Jr,t,e);c.layers=this.layers,this.add(c);let l=new We(Yr,Jr,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,a,o,c]=e;for(let l of e)this.remove(l);if(t===us)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Yc)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,c,l,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},il=class extends Sn{constructor(t,e,n,i,s,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:ha,super(t,e,n,i,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ou=class extends _n{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(mo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===gr?de:kn),this.texture=new il(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:hn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new re(5,5,5),s=new we({name:"CubemapFromEquirect",uniforms:ma(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Tn,blending:Fs});s.uniforms.tEquirect.value=e;let a=new Gt(i,s),o=e.minFilter;return e.minFilter===Gi&&(e.minFilter=hn),new zu(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){let s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(s)}},mu=new T,$b=new T,ty=new ue,Ai=class{constructor(t=new T(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=mu.subVectors(n,e).cross($b.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(mu),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||ty.getNormalMatrix(t),i=this.coplanarPoint(mu).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},hr=new ri,Pc=new T,Mo=class{constructor(t=new Ai,e=new Ai,n=new Ai,i=new Ai,s=new Ai,a=new Ai){this.planes=[t,e,n,i,s,a]}set(t,e,n,i,s,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=us){let n=this.planes,i=t.elements,s=i[0],a=i[1],o=i[2],c=i[3],l=i[4],h=i[5],f=i[6],u=i[7],d=i[8],g=i[9],v=i[10],m=i[11],p=i[12],x=i[13],y=i[14],_=i[15];if(n[0].setComponents(c-s,u-l,m-d,_-p).normalize(),n[1].setComponents(c+s,u+l,m+d,_+p).normalize(),n[2].setComponents(c+a,u+h,m+g,_+x).normalize(),n[3].setComponents(c-a,u-h,m-g,_-x).normalize(),n[4].setComponents(c-o,u-f,m-v,_-y).normalize(),e===us)n[5].setComponents(c+o,u+f,m+v,_+y).normalize();else if(e===Yc)n[5].setComponents(o,f,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),hr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),hr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(hr)}intersectsSprite(t){return hr.center.set(0,0,0),hr.radius=.7071067811865476,hr.applyMatrix4(t.matrixWorld),this.intersectsSphere(hr)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Pc.x=i.normal.x>0?t.max.x:t.min.x,Pc.y=i.normal.y>0?t.max.y:t.min.y,Pc.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Pc)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function k0(){let r=null,t=!1,e=null,n=null;function i(s,a){e(s,a),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function ey(r,t){let e=t.isWebGL2,n=new WeakMap;function i(l,h){let f=l.array,u=l.usage,d=f.byteLength,g=r.createBuffer();r.bindBuffer(h,g),r.bufferData(h,f,u),l.onUploadCallback();let v;if(f instanceof Float32Array)v=r.FLOAT;else if(f instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)v=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=r.UNSIGNED_SHORT;else if(f instanceof Int16Array)v=r.SHORT;else if(f instanceof Uint32Array)v=r.UNSIGNED_INT;else if(f instanceof Int32Array)v=r.INT;else if(f instanceof Int8Array)v=r.BYTE;else if(f instanceof Uint8Array)v=r.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)v=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:v,bytesPerElement:f.BYTES_PER_ELEMENT,version:l.version,size:d}}function s(l,h,f){let u=h.array,d=h._updateRange,g=h.updateRanges;if(r.bindBuffer(f,l),d.count===-1&&g.length===0&&r.bufferSubData(f,0,u),g.length!==0){for(let v=0,m=g.length;v<m;v++){let p=g[v];e?r.bufferSubData(f,p.start*u.BYTES_PER_ELEMENT,u,p.start,p.count):r.bufferSubData(f,p.start*u.BYTES_PER_ELEMENT,u.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}d.count!==-1&&(e?r.bufferSubData(f,d.offset*u.BYTES_PER_ELEMENT,u,d.offset,d.count):r.bufferSubData(f,d.offset*u.BYTES_PER_ELEMENT,u.subarray(d.offset,d.offset+d.count)),d.count=-1),h.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);h&&(r.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let u=n.get(l);(!u||u.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let f=n.get(l);if(f===void 0)n.set(l,i(l,h));else if(f.version<l.version){if(f.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,l,h),f.version=l.version}}return{get:a,remove:o,update:c}}var ai=class r extends Rt{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,a=e/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,f=t/o,u=e/c,d=[],g=[],v=[],m=[];for(let p=0;p<h;p++){let x=p*u-a;for(let y=0;y<l;y++){let _=y*f-s;g.push(_,-x,0),v.push(0,0,1),m.push(y/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let x=0;x<o;x++){let y=x+l*p,_=x+l*(p+1),M=x+1+l*(p+1),b=x+1+l*p;d.push(y,_,b),d.push(_,M,b)}this.setIndex(d),this.setAttribute("position",new _t(g,3)),this.setAttribute("normal",new _t(v,3)),this.setAttribute("uv",new _t(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}},ny=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,iy=`#ifdef USE_ALPHAHASH
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
#endif`,sy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ry=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ay=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,oy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cy=`#ifdef USE_AOMAP
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
#endif`,ly=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hy=`#ifdef USE_BATCHING
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
#endif`,uy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,fy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,py=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,my=`#ifdef USE_IRIDESCENCE
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
#endif`,gy=`#ifdef USE_BUMPMAP
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
#endif`,vy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,xy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,by=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_y=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,My=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ey=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,wy=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ty=`#define PI 3.141592653589793
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
} // validated`,Sy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ay=`vec3 transformedNormal = objectNormal;
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
#endif`,Ry=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Py=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ly=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Iy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Dy=`
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
}`,Fy=`#ifdef USE_ENVMAP
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
#endif`,Hy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ny=`#ifdef USE_ENVMAP
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
#endif`,ky=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Uy=`#ifdef USE_ENVMAP
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
#endif`,zy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Oy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,By=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vy=`#ifdef USE_GRADIENTMAP
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
}`,Wy=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,qy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ky=`uniform bool receiveShadow;
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
#endif`,Yy=`#ifdef USE_ENVMAP
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
#endif`,Jy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$y=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,t1=`PhysicalMaterial material;
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
#endif`,e1=`struct PhysicalMaterial {
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
}`,n1=`
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
#endif`,i1=`#if defined( RE_IndirectDiffuse )
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
#endif`,s1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,r1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,a1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,o1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,c1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,l1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,h1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,u1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,f1=`#if defined( USE_POINTS_UV )
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
#endif`,d1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,p1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,m1=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,g1=`#ifdef USE_MORPHNORMALS
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
#endif`,v1=`#ifdef USE_MORPHTARGETS
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
#endif`,x1=`#ifdef USE_MORPHTARGETS
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
#endif`,b1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,y1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,_1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,M1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,E1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,w1=`#ifdef USE_NORMALMAP
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
#endif`,T1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,S1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,A1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,R1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,C1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,P1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,L1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,I1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,D1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,F1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,H1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,N1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,k1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,U1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,z1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,O1=`float getShadowMask() {
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
}`,B1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,G1=`#ifdef USE_SKINNING
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
#endif`,V1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,W1=`#ifdef USE_SKINNING
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
#endif`,q1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,X1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,j1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,K1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Y1=`#ifdef USE_TRANSMISSION
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
#endif`,J1=`#ifdef USE_TRANSMISSION
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
#endif`,Z1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Q1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,t_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,e_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,n_=`uniform sampler2D t2D;
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
}`,i_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,s_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,r_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,a_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o_=`#include <common>
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
}`,c_=`#if DEPTH_PACKING == 3200
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
}`,l_=`#define DISTANCE
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
}`,h_=`#define DISTANCE
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
}`,u_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,f_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d_=`uniform float scale;
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
}`,p_=`uniform vec3 diffuse;
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
}`,m_=`#include <common>
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
}`,g_=`uniform vec3 diffuse;
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
}`,v_=`#define LAMBERT
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
}`,x_=`#define LAMBERT
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
}`,b_=`#define MATCAP
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
}`,y_=`#define MATCAP
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
}`,__=`#define NORMAL
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
}`,M_=`#define NORMAL
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
}`,E_=`#define PHONG
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
}`,w_=`#define PHONG
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
}`,T_=`#define STANDARD
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
}`,S_=`#define STANDARD
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
}`,A_=`#define TOON
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
}`,R_=`#define TOON
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
}`,C_=`uniform float size;
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
}`,P_=`uniform vec3 diffuse;
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
}`,L_=`#include <common>
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
}`,I_=`uniform vec3 color;
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
}`,D_=`uniform float rotation;
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
}`,F_=`uniform vec3 diffuse;
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
}`,$t={alphahash_fragment:ny,alphahash_pars_fragment:iy,alphamap_fragment:sy,alphamap_pars_fragment:ry,alphatest_fragment:ay,alphatest_pars_fragment:oy,aomap_fragment:cy,aomap_pars_fragment:ly,batching_pars_vertex:hy,batching_vertex:uy,begin_vertex:fy,beginnormal_vertex:dy,bsdfs:py,iridescence_fragment:my,bumpmap_pars_fragment:gy,clipping_planes_fragment:vy,clipping_planes_pars_fragment:xy,clipping_planes_pars_vertex:by,clipping_planes_vertex:yy,color_fragment:_y,color_pars_fragment:My,color_pars_vertex:Ey,color_vertex:wy,common:Ty,cube_uv_reflection_fragment:Sy,defaultnormal_vertex:Ay,displacementmap_pars_vertex:Ry,displacementmap_vertex:Cy,emissivemap_fragment:Py,emissivemap_pars_fragment:Ly,colorspace_fragment:Iy,colorspace_pars_fragment:Dy,envmap_fragment:Fy,envmap_common_pars_fragment:Hy,envmap_pars_fragment:Ny,envmap_pars_vertex:ky,envmap_physical_pars_fragment:Yy,envmap_vertex:Uy,fog_vertex:zy,fog_pars_vertex:Oy,fog_fragment:By,fog_pars_fragment:Gy,gradientmap_pars_fragment:Vy,lightmap_fragment:Wy,lightmap_pars_fragment:qy,lights_lambert_fragment:Xy,lights_lambert_pars_fragment:jy,lights_pars_begin:Ky,lights_toon_fragment:Jy,lights_toon_pars_fragment:Zy,lights_phong_fragment:Qy,lights_phong_pars_fragment:$y,lights_physical_fragment:t1,lights_physical_pars_fragment:e1,lights_fragment_begin:n1,lights_fragment_maps:i1,lights_fragment_end:s1,logdepthbuf_fragment:r1,logdepthbuf_pars_fragment:a1,logdepthbuf_pars_vertex:o1,logdepthbuf_vertex:c1,map_fragment:l1,map_pars_fragment:h1,map_particle_fragment:u1,map_particle_pars_fragment:f1,metalnessmap_fragment:d1,metalnessmap_pars_fragment:p1,morphcolor_vertex:m1,morphnormal_vertex:g1,morphtarget_pars_vertex:v1,morphtarget_vertex:x1,normal_fragment_begin:b1,normal_fragment_maps:y1,normal_pars_fragment:_1,normal_pars_vertex:M1,normal_vertex:E1,normalmap_pars_fragment:w1,clearcoat_normal_fragment_begin:T1,clearcoat_normal_fragment_maps:S1,clearcoat_pars_fragment:A1,iridescence_pars_fragment:R1,opaque_fragment:C1,packing:P1,premultiplied_alpha_fragment:L1,project_vertex:I1,dithering_fragment:D1,dithering_pars_fragment:F1,roughnessmap_fragment:H1,roughnessmap_pars_fragment:N1,shadowmap_pars_fragment:k1,shadowmap_pars_vertex:U1,shadowmap_vertex:z1,shadowmask_pars_fragment:O1,skinbase_vertex:B1,skinning_pars_vertex:G1,skinning_vertex:V1,skinnormal_vertex:W1,specularmap_fragment:q1,specularmap_pars_fragment:X1,tonemapping_fragment:j1,tonemapping_pars_fragment:K1,transmission_fragment:Y1,transmission_pars_fragment:J1,uv_pars_fragment:Z1,uv_pars_vertex:Q1,uv_vertex:$1,worldpos_vertex:t_,background_vert:e_,background_frag:n_,backgroundCube_vert:i_,backgroundCube_frag:s_,cube_vert:r_,cube_frag:a_,depth_vert:o_,depth_frag:c_,distanceRGBA_vert:l_,distanceRGBA_frag:h_,equirect_vert:u_,equirect_frag:f_,linedashed_vert:d_,linedashed_frag:p_,meshbasic_vert:m_,meshbasic_frag:g_,meshlambert_vert:v_,meshlambert_frag:x_,meshmatcap_vert:b_,meshmatcap_frag:y_,meshnormal_vert:__,meshnormal_frag:M_,meshphong_vert:E_,meshphong_frag:w_,meshphysical_vert:T_,meshphysical_frag:S_,meshtoon_vert:A_,meshtoon_frag:R_,points_vert:C_,points_frag:P_,shadow_vert:L_,shadow_frag:I_,sprite_vert:D_,sprite_frag:F_},Mt={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ue}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ue},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0},uvTransform:{value:new ue}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}}},ki={basic:{uniforms:Xn([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:Xn([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new it(0)}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:Xn([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:Xn([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:Xn([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new it(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:Xn([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:Xn([Mt.points,Mt.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:Xn([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:Xn([Mt.common,Mt.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:Xn([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:Xn([Mt.sprite,Mt.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distanceRGBA:{uniforms:Xn([Mt.common,Mt.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distanceRGBA_vert,fragmentShader:$t.distanceRGBA_frag},shadow:{uniforms:Xn([Mt.lights,Mt.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};ki.physical={uniforms:Xn([ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ue},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ue},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ue},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ue},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ue},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ue},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ue}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};var Lc={r:0,b:0,g:0};function H_(r,t,e,n,i,s,a){let o=new it(0),c=s===!0?0:1,l,h,f=null,u=0,d=null;function g(m,p){let x=!1,y=p.isScene===!0?p.background:null;y&&y.isTexture&&(y=(p.backgroundBlurriness>0?e:t).get(y)),y===null?v(o,c):y&&y.isColor&&(v(y,1),x=!0);let _=r.xr.getEnvironmentBlendMode();_==="additive"?n.buffers.color.setClear(0,0,0,1,a):_==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||x)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),y&&(y.isCubeTexture||y.mapping===bl)?(h===void 0&&(h=new Gt(new re(1,1,1),new we({name:"BackgroundCubeMaterial",uniforms:ma(ki.backgroundCube.uniforms),vertexShader:ki.backgroundCube.vertexShader,fragmentShader:ki.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(M,b,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=Ee.getTransfer(y.colorSpace)!==Ve,(f!==y||u!==y.version||d!==r.toneMapping)&&(h.material.needsUpdate=!0,f=y,u=y.version,d=r.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Gt(new ai(2,2),new we({name:"BackgroundMaterial",uniforms:ma(ki.background.uniforms),vertexShader:ki.background.vertexShader,fragmentShader:ki.background.fragmentShader,side:Bi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=Ee.getTransfer(y.colorSpace)!==Ve,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||u!==y.version||d!==r.toneMapping)&&(l.material.needsUpdate=!0,f=y,u=y.version,d=r.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function v(m,p){m.getRGB(Lc,N0(r)),n.buffers.color.setClear(Lc.r,Lc.g,Lc.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),c=p,v(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,v(o,c)},render:g}}function N_(r,t,e,n){let i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},c=m(null),l=c,h=!1;function f(R,A,P,N,U){let V=!1;if(a){let q=v(N,P,A);l!==q&&(l=q,d(l.object)),V=p(R,N,P,U),V&&x(R,N,P,U)}else{let q=A.wireframe===!0;(l.geometry!==N.id||l.program!==P.id||l.wireframe!==q)&&(l.geometry=N.id,l.program=P.id,l.wireframe=q,V=!0)}U!==null&&e.update(U,r.ELEMENT_ARRAY_BUFFER),(V||h)&&(h=!1,C(R,A,P,N),U!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function u(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function d(R){return n.isWebGL2?r.bindVertexArray(R):s.bindVertexArrayOES(R)}function g(R){return n.isWebGL2?r.deleteVertexArray(R):s.deleteVertexArrayOES(R)}function v(R,A,P){let N=P.wireframe===!0,U=o[R.id];U===void 0&&(U={},o[R.id]=U);let V=U[A.id];V===void 0&&(V={},U[A.id]=V);let q=V[N];return q===void 0&&(q=m(u()),V[N]=q),q}function m(R){let A=[],P=[],N=[];for(let U=0;U<i;U++)A[U]=0,P[U]=0,N[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:P,attributeDivisors:N,object:R,attributes:{},index:null}}function p(R,A,P,N){let U=l.attributes,V=A.attributes,q=0,j=P.getAttributes();for(let at in j)if(j[at].location>=0){let $=U[at],gt=V[at];if(gt===void 0&&(at==="instanceMatrix"&&R.instanceMatrix&&(gt=R.instanceMatrix),at==="instanceColor"&&R.instanceColor&&(gt=R.instanceColor)),$===void 0||$.attribute!==gt||gt&&$.data!==gt.data)return!0;q++}return l.attributesNum!==q||l.index!==N}function x(R,A,P,N){let U={},V=A.attributes,q=0,j=P.getAttributes();for(let at in j)if(j[at].location>=0){let $=V[at];$===void 0&&(at==="instanceMatrix"&&R.instanceMatrix&&($=R.instanceMatrix),at==="instanceColor"&&R.instanceColor&&($=R.instanceColor));let gt={};gt.attribute=$,$&&$.data&&(gt.data=$.data),U[at]=gt,q++}l.attributes=U,l.attributesNum=q,l.index=N}function y(){let R=l.newAttributes;for(let A=0,P=R.length;A<P;A++)R[A]=0}function _(R){M(R,0)}function M(R,A){let P=l.newAttributes,N=l.enabledAttributes,U=l.attributeDivisors;P[R]=1,N[R]===0&&(r.enableVertexAttribArray(R),N[R]=1),U[R]!==A&&((n.isWebGL2?r:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,A),U[R]=A)}function b(){let R=l.newAttributes,A=l.enabledAttributes;for(let P=0,N=A.length;P<N;P++)A[P]!==R[P]&&(r.disableVertexAttribArray(P),A[P]=0)}function w(R,A,P,N,U,V,q){q===!0?r.vertexAttribIPointer(R,A,P,U,V):r.vertexAttribPointer(R,A,P,N,U,V)}function C(R,A,P,N){if(n.isWebGL2===!1&&(R.isInstancedMesh||N.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;y();let U=N.attributes,V=P.getAttributes(),q=A.defaultAttributeValues;for(let j in V){let at=V[j];if(at.location>=0){let G=U[j];if(G===void 0&&(j==="instanceMatrix"&&R.instanceMatrix&&(G=R.instanceMatrix),j==="instanceColor"&&R.instanceColor&&(G=R.instanceColor)),G!==void 0){let $=G.normalized,gt=G.itemSize,pt=e.get(G);if(pt===void 0)continue;let St=pt.buffer,Vt=pt.type,Yt=pt.bytesPerElement,kt=n.isWebGL2===!0&&(Vt===r.INT||Vt===r.UNSIGNED_INT||G.gpuType===w0);if(G.isInterleavedBufferAttribute){let ae=G.data,Z=ae.stride,wn=G.offset;if(ae.isInstancedInterleavedBuffer){for(let Ot=0;Ot<at.locationSize;Ot++)M(at.location+Ot,ae.meshPerAttribute);R.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Ot=0;Ot<at.locationSize;Ot++)_(at.location+Ot);r.bindBuffer(r.ARRAY_BUFFER,St);for(let Ot=0;Ot<at.locationSize;Ot++)w(at.location+Ot,gt/at.locationSize,Vt,$,Z*Yt,(wn+gt/at.locationSize*Ot)*Yt,kt)}else{if(G.isInstancedBufferAttribute){for(let ae=0;ae<at.locationSize;ae++)M(at.location+ae,G.meshPerAttribute);R.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let ae=0;ae<at.locationSize;ae++)_(at.location+ae);r.bindBuffer(r.ARRAY_BUFFER,St);for(let ae=0;ae<at.locationSize;ae++)w(at.location+ae,gt/at.locationSize,Vt,$,gt*Yt,gt/at.locationSize*ae*Yt,kt)}}else if(q!==void 0){let $=q[j];if($!==void 0)switch($.length){case 2:r.vertexAttrib2fv(at.location,$);break;case 3:r.vertexAttrib3fv(at.location,$);break;case 4:r.vertexAttrib4fv(at.location,$);break;default:r.vertexAttrib1fv(at.location,$)}}}}b()}function E(){D();for(let R in o){let A=o[R];for(let P in A){let N=A[P];for(let U in N)g(N[U].object),delete N[U];delete A[P]}delete o[R]}}function S(R){if(o[R.id]===void 0)return;let A=o[R.id];for(let P in A){let N=A[P];for(let U in N)g(N[U].object),delete N[U];delete A[P]}delete o[R.id]}function I(R){for(let A in o){let P=o[A];if(P[R.id]===void 0)continue;let N=P[R.id];for(let U in N)g(N[U].object),delete N[U];delete P[R.id]}}function D(){k(),h=!0,l!==c&&(l=c,d(l.object))}function k(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:D,resetDefaultState:k,dispose:E,releaseStatesOfGeometry:S,releaseStatesOfProgram:I,initAttributes:y,enableAttribute:_,disableUnusedAttributes:b}}function k_(r,t,e,n){let i=n.isWebGL2,s;function a(h){s=h}function o(h,f){r.drawArrays(s,h,f),e.update(f,s,1)}function c(h,f,u){if(u===0)return;let d,g;if(i)d=r,g="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[g](s,h,f,u),e.update(f,s,u)}function l(h,f,u){if(u===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<u;g++)this.render(h[g],f[g]);else{d.multiDrawArraysWEBGL(s,h,0,f,0,u);let g=0;for(let v=0;v<u;v++)g+=f[v];e.update(g,s,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=l}function U_(r,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext",o=e.precision!==void 0?e.precision:"highp",c=s(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);let l=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),u=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),m=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),p=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),y=u>0,_=a||t.has("OES_texture_float"),M=y&&_,b=a?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:u,maxTextureSize:d,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:x,vertexTextures:y,floatFragmentTextures:_,floatVertexTextures:M,maxSamples:b}}function z_(r){let t=this,e=null,n=0,i=!1,s=!1,a=new Ai,o=new ue,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||n!==0||i;return i=u,n=f.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){let g=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,p=r.get(f);if(!i||g===null||g.length===0||s&&!m)s?h(null):l();else{let x=s?0:n,y=x*4,_=p.clippingState||null;c.value=_,_=h(g,u,y,d);for(let M=0;M!==y;++M)_[M]=e[M];p.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,d,g){let v=f!==null?f.length:0,m=null;if(v!==0){if(m=c.value,g!==!0||m===null){let p=d+v*4,x=u.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,_=d;y!==v;++y,_+=4)a.copy(f[y]).applyMatrix4(x,o),a.normal.toArray(m,_),m[_+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function O_(r){let t=new WeakMap;function e(a,o){return o===Iu?a.mapping=ha:o===Du&&(a.mapping=ua),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Iu||o===Du)if(t.has(a)){let c=t.get(a).texture;return e(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new Ou(c.height/2);return l.fromEquirectangularTexture(r,a),t.set(a,l),a.addEventListener("dispose",i),e(l.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}var Ns=class extends nl{constructor(t=-1,e=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,a=n+t,o=i+e,c=i-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ra=4,Lm=[.125,.215,.35,.446,.526,.582],fr=20,gu=new Ns,Im=new it,vu=null,xu=0,bu=0,ur=(1+Math.sqrt(5))/2,Zr=1/ur,Dm=[new T(1,1,1),new T(-1,1,1),new T(1,1,-1),new T(-1,1,-1),new T(0,ur,Zr),new T(0,ur,-Zr),new T(Zr,0,ur),new T(-Zr,0,ur),new T(ur,Zr,0),new T(-ur,Zr,0)],ga=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){vu=this._renderer.getRenderTarget(),xu=this._renderer.getActiveCubeFace(),bu=this._renderer.getActiveMipmapLevel(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(vu,xu,bu),t.scissorTest=!1,Ic(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ha||t.mapping===ua?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),vu=this._renderer.getRenderTarget(),xu=this._renderer.getActiveCubeFace(),bu=this._renderer.getActiveMipmapLevel();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:hn,minFilter:hn,generateMipmaps:!1,type:Zn,format:pi,colorSpace:dn,depthBuffer:!1},i=Fm(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fm(t,e,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=B_(s)),this._blurMaterial=G_(s,t,e)}return i}_compileMaterial(t){let e=new Gt(this._lodPlanes[0],t);this._renderer.compile(e,gu)}_sceneToCubeUV(t,e,n,i){let o=new We(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,u=h.toneMapping;h.getClearColor(Im),h.toneMapping=Hs,h.autoClear=!1;let d=new en({name:"PMREM.Background",side:Tn,depthWrite:!1,depthTest:!1}),g=new Gt(new re,d),v=!1,m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,v=!0):(d.color.copy(Im),v=!0);for(let p=0;p<6;p++){let x=p%3;x===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):x===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));let y=this._cubeSize;Ic(i,x*y,p>2?y:0,y,y),h.setRenderTarget(i),v&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=f,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===ha||t.mapping===ua;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nm()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hm());let s=i?this._cubemapMaterial:this._equirectMaterial,a=new Gt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;let c=this._cubeSize;Ic(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,gu)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Dm[(i-1)%Dm.length];this._blur(t,i-1,i,s,a)}e.autoClear=n}_blur(t,e,n,i,s){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",s),this._halfBlur(a,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,f=new Gt(this._lodPlanes[i],l),u=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*fr-1),v=s/g,m=isFinite(s)?1+Math.floor(h*v):fr;m>fr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${fr}`);let p=[],x=0;for(let w=0;w<fr;++w){let C=w/v,E=Math.exp(-C*C/2);p.push(E),w===0?x+=E:w<m&&(x+=2*E)}for(let w=0;w<p.length;w++)p[w]=p[w]/x;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:y}=this;u.dTheta.value=g,u.mipInt.value=y-n;let _=this._sizeLods[i],M=3*_*(i>y-ra?i-y+ra:0),b=4*(this._cubeSize-_);Ic(e,M,b,3*_,2*_),c.setRenderTarget(e),c.render(f,gu)}};function B_(r){let t=[],e=[],n=[],i=r,s=r-ra+1+Lm.length;for(let a=0;a<s;a++){let o=Math.pow(2,i);e.push(o);let c=1/o;a>r-ra?c=Lm[a-r+ra-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),h=-l,f=1+l,u=[h,h,f,h,f,f,h,h,f,f,h,f],d=6,g=6,v=3,m=2,p=1,x=new Float32Array(v*g*d),y=new Float32Array(m*g*d),_=new Float32Array(p*g*d);for(let b=0;b<d;b++){let w=b%3*2/3-1,C=b>2?0:-1,E=[w,C,0,w+2/3,C,0,w+2/3,C+1,0,w,C,0,w+2/3,C+1,0,w,C+1,0];x.set(E,v*g*b),y.set(u,m*g*b);let S=[b,b,b,b,b,b];_.set(S,p*g*b)}let M=new Rt;M.setAttribute("position",new At(x,v)),M.setAttribute("uv",new At(y,m)),M.setAttribute("faceIndex",new At(_,p)),t.push(M),i>ra&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Fm(r,t,e){let n=new _n(r,t,e);return n.texture.mapping=bl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ic(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function G_(r,t,e){let n=new Float32Array(fr),i=new T(0,1,0);return new we({name:"SphericalGaussianBlur",defines:{n:fr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:kf(),fragmentShader:`

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
		`,blending:Fs,depthTest:!1,depthWrite:!1})}function Hm(){return new we({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kf(),fragmentShader:`

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
		`,blending:Fs,depthTest:!1,depthWrite:!1})}function Nm(){return new we({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fs,depthTest:!1,depthWrite:!1})}function kf(){return`

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
	`}function V_(r){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===Iu||c===Du,h=c===ha||c===ua;if(l||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=t.get(o);return e===null&&(e=new ga(r)),f=l?e.fromEquirectangular(o,f):e.fromCubemap(o,f),t.set(o,f),f.texture}else{if(t.has(o))return t.get(o).texture;{let f=o.image;if(l&&f&&f.height>0||h&&f&&i(f)){e===null&&(e=new ga(r));let u=l?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,u),o.addEventListener("dispose",s),u.texture}else return null}}}return o}function i(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function s(o){let c=o.target;c.removeEventListener("dispose",s);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function W_(r){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function q_(r,t,e,n){let i={},s=new WeakMap;function a(f){let u=f.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);for(let g in u.morphAttributes){let v=u.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)t.remove(v[m])}u.removeEventListener("dispose",a),delete i[u.id];let d=s.get(u);d&&(t.remove(d),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(f,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,e.memory.geometries++),u}function c(f){let u=f.attributes;for(let g in u)t.update(u[g],r.ARRAY_BUFFER);let d=f.morphAttributes;for(let g in d){let v=d[g];for(let m=0,p=v.length;m<p;m++)t.update(v[m],r.ARRAY_BUFFER)}}function l(f){let u=[],d=f.index,g=f.attributes.position,v=0;if(d!==null){let x=d.array;v=d.version;for(let y=0,_=x.length;y<_;y+=3){let M=x[y+0],b=x[y+1],w=x[y+2];u.push(M,b,b,w,w,M)}}else if(g!==void 0){let x=g.array;v=g.version;for(let y=0,_=x.length/3-1;y<_;y+=3){let M=y+0,b=y+1,w=y+2;u.push(M,b,b,w,w,M)}}else return;let m=new(F0(u)?el:tl)(u,1);m.version=v;let p=s.get(f);p&&t.remove(p),s.set(f,m)}function h(f){let u=s.get(f);if(u){let d=f.index;d!==null&&u.version<d.version&&l(f)}else l(f);return s.get(f)}return{get:o,update:c,getWireframeAttribute:h}}function X_(r,t,e,n){let i=n.isWebGL2,s;function a(d){s=d}let o,c;function l(d){o=d.type,c=d.bytesPerElement}function h(d,g){r.drawElements(s,g,o,d*c),e.update(g,s,1)}function f(d,g,v){if(v===0)return;let m,p;if(i)m=r,p="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](s,g,o,d*c,v),e.update(g,s,v)}function u(d,g,v){if(v===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<v;p++)this.render(d[p]/c,g[p]);else{m.multiDrawElementsWEBGL(s,g,0,o,d,0,v);let p=0;for(let x=0;x<v;x++)p+=g[x];e.update(p,s,1)}}this.setMode=a,this.setIndex=l,this.render=h,this.renderInstances=f,this.renderMultiDraw=u}function j_(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function K_(r,t){return r[0]-t[0]}function Y_(r,t){return Math.abs(t[1])-Math.abs(r[1])}function J_(r,t,e){let n={},i=new Float32Array(8),s=new WeakMap,a=new fe,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,h,f){let u=l.morphTargetInfluences;if(t.isWebGL2===!0){let d=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=d!==void 0?d.length:0,v=s.get(h);if(v===void 0||v.count!==g){let R=function(){D.dispose(),s.delete(h),h.removeEventListener("dispose",R)};v!==void 0&&v.texture.dispose();let x=h.morphAttributes.position!==void 0,y=h.morphAttributes.normal!==void 0,_=h.morphAttributes.color!==void 0,M=h.morphAttributes.position||[],b=h.morphAttributes.normal||[],w=h.morphAttributes.color||[],C=0;x===!0&&(C=1),y===!0&&(C=2),_===!0&&(C=3);let E=h.attributes.position.count*C,S=1;E>t.maxTextureSize&&(S=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);let I=new Float32Array(E*S*4*g),D=new $c(I,E,S,g);D.type=hs,D.needsUpdate=!0;let k=C*4;for(let A=0;A<g;A++){let P=M[A],N=b[A],U=w[A],V=E*S*4*A;for(let q=0;q<P.count;q++){let j=q*k;x===!0&&(a.fromBufferAttribute(P,q),I[V+j+0]=a.x,I[V+j+1]=a.y,I[V+j+2]=a.z,I[V+j+3]=0),y===!0&&(a.fromBufferAttribute(N,q),I[V+j+4]=a.x,I[V+j+5]=a.y,I[V+j+6]=a.z,I[V+j+7]=0),_===!0&&(a.fromBufferAttribute(U,q),I[V+j+8]=a.x,I[V+j+9]=a.y,I[V+j+10]=a.z,I[V+j+11]=U.itemSize===4?a.w:1)}}v={count:g,texture:D,size:new ht(E,S)},s.set(h,v),h.addEventListener("dispose",R)}let m=0;for(let x=0;x<u.length;x++)m+=u[x];let p=h.morphTargetsRelative?1:1-m;f.getUniforms().setValue(r,"morphTargetBaseInfluence",p),f.getUniforms().setValue(r,"morphTargetInfluences",u),f.getUniforms().setValue(r,"morphTargetsTexture",v.texture,e),f.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}else{let d=u===void 0?0:u.length,g=n[h.id];if(g===void 0||g.length!==d){g=[];for(let y=0;y<d;y++)g[y]=[y,0];n[h.id]=g}for(let y=0;y<d;y++){let _=g[y];_[0]=y,_[1]=u[y]}g.sort(Y_);for(let y=0;y<8;y++)y<d&&g[y][1]?(o[y][0]=g[y][0],o[y][1]=g[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(K_);let v=h.morphAttributes.position,m=h.morphAttributes.normal,p=0;for(let y=0;y<8;y++){let _=o[y],M=_[0],b=_[1];M!==Number.MAX_SAFE_INTEGER&&b?(v&&h.getAttribute("morphTarget"+y)!==v[M]&&h.setAttribute("morphTarget"+y,v[M]),m&&h.getAttribute("morphNormal"+y)!==m[M]&&h.setAttribute("morphNormal"+y,m[M]),i[y]=b,p+=b):(v&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),m&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),i[y]=0)}let x=h.morphTargetsRelative?1:1-p;f.getUniforms().setValue(r,"morphTargetBaseInfluence",x),f.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:c}}function Z_(r,t,e,n){let i=new WeakMap;function s(c){let l=n.render.frame,h=c.geometry,f=t.get(c,h);if(i.get(f)!==l&&(t.update(f),i.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(e.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){let u=c.skeleton;i.get(u)!==l&&(u.update(),i.set(u,l))}return f}function a(){i=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:a}}var va=class extends Sn{constructor(t,e,n,i,s,a,o,c,l,h){if(h=h!==void 0?h:mr,h!==mr&&h!==fa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===mr&&(n=zi),n===void 0&&h===fa&&(n=pr),super(null,i,s,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:an,this.minFilter=c!==void 0?c:an,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},U0=new Sn,z0=new va(1,1);z0.compareFunction=D0;var O0=new $c,B0=new Uu,G0=new il,km=[],Um=[],zm=new Float32Array(16),Om=new Float32Array(9),Bm=new Float32Array(4);function Ta(r,t,e){let n=r[0];if(n<=0||n>0)return r;let i=t*e,s=km[i];if(s===void 0&&(s=new Float32Array(i),km[i]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function pn(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function mn(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Ml(r,t){let e=Um[t];e===void 0&&(e=new Int32Array(t),Um[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function Q_(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function $_(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pn(e,t))return;r.uniform2fv(this.addr,t),mn(e,t)}}function tM(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(pn(e,t))return;r.uniform3fv(this.addr,t),mn(e,t)}}function eM(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pn(e,t))return;r.uniform4fv(this.addr,t),mn(e,t)}}function nM(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(pn(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),mn(e,t)}else{if(pn(e,n))return;Bm.set(n),r.uniformMatrix2fv(this.addr,!1,Bm),mn(e,n)}}function iM(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(pn(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),mn(e,t)}else{if(pn(e,n))return;Om.set(n),r.uniformMatrix3fv(this.addr,!1,Om),mn(e,n)}}function sM(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(pn(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),mn(e,t)}else{if(pn(e,n))return;zm.set(n),r.uniformMatrix4fv(this.addr,!1,zm),mn(e,n)}}function rM(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function aM(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pn(e,t))return;r.uniform2iv(this.addr,t),mn(e,t)}}function oM(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pn(e,t))return;r.uniform3iv(this.addr,t),mn(e,t)}}function cM(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pn(e,t))return;r.uniform4iv(this.addr,t),mn(e,t)}}function lM(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function hM(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pn(e,t))return;r.uniform2uiv(this.addr,t),mn(e,t)}}function uM(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pn(e,t))return;r.uniform3uiv(this.addr,t),mn(e,t)}}function fM(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pn(e,t))return;r.uniform4uiv(this.addr,t),mn(e,t)}}function dM(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s=this.type===r.SAMPLER_2D_SHADOW?z0:U0;e.setTexture2D(t||s,i)}function pM(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||B0,i)}function mM(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||G0,i)}function gM(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||O0,i)}function vM(r){switch(r){case 5126:return Q_;case 35664:return $_;case 35665:return tM;case 35666:return eM;case 35674:return nM;case 35675:return iM;case 35676:return sM;case 5124:case 35670:return rM;case 35667:case 35671:return aM;case 35668:case 35672:return oM;case 35669:case 35673:return cM;case 5125:return lM;case 36294:return hM;case 36295:return uM;case 36296:return fM;case 35678:case 36198:case 36298:case 36306:case 35682:return dM;case 35679:case 36299:case 36307:return pM;case 35680:case 36300:case 36308:case 36293:return mM;case 36289:case 36303:case 36311:case 36292:return gM}}function xM(r,t){r.uniform1fv(this.addr,t)}function bM(r,t){let e=Ta(t,this.size,2);r.uniform2fv(this.addr,e)}function yM(r,t){let e=Ta(t,this.size,3);r.uniform3fv(this.addr,e)}function _M(r,t){let e=Ta(t,this.size,4);r.uniform4fv(this.addr,e)}function MM(r,t){let e=Ta(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function EM(r,t){let e=Ta(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function wM(r,t){let e=Ta(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function TM(r,t){r.uniform1iv(this.addr,t)}function SM(r,t){r.uniform2iv(this.addr,t)}function AM(r,t){r.uniform3iv(this.addr,t)}function RM(r,t){r.uniform4iv(this.addr,t)}function CM(r,t){r.uniform1uiv(this.addr,t)}function PM(r,t){r.uniform2uiv(this.addr,t)}function LM(r,t){r.uniform3uiv(this.addr,t)}function IM(r,t){r.uniform4uiv(this.addr,t)}function DM(r,t,e){let n=this.cache,i=t.length,s=Ml(e,i);pn(n,s)||(r.uniform1iv(this.addr,s),mn(n,s));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||U0,s[a])}function FM(r,t,e){let n=this.cache,i=t.length,s=Ml(e,i);pn(n,s)||(r.uniform1iv(this.addr,s),mn(n,s));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||B0,s[a])}function HM(r,t,e){let n=this.cache,i=t.length,s=Ml(e,i);pn(n,s)||(r.uniform1iv(this.addr,s),mn(n,s));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||G0,s[a])}function NM(r,t,e){let n=this.cache,i=t.length,s=Ml(e,i);pn(n,s)||(r.uniform1iv(this.addr,s),mn(n,s));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||O0,s[a])}function kM(r){switch(r){case 5126:return xM;case 35664:return bM;case 35665:return yM;case 35666:return _M;case 35674:return MM;case 35675:return EM;case 35676:return wM;case 5124:case 35670:return TM;case 35667:case 35671:return SM;case 35668:case 35672:return AM;case 35669:case 35673:return RM;case 5125:return CM;case 36294:return PM;case 36295:return LM;case 36296:return IM;case 35678:case 36198:case 36298:case 36306:case 35682:return DM;case 35679:case 36299:case 36307:return FM;case 35680:case 36300:case 36308:case 36293:return HM;case 36289:case 36303:case 36311:case 36292:return NM}}var Bu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=vM(e.type)}},Gu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=kM(e.type)}},Vu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,a=i.length;s!==a;++s){let o=i[s];o.setValue(t,e[o.id],n)}}},yu=/(\w+)(\])?(\[|\.)?/g;function Gm(r,t){r.seq.push(t),r.map[t.id]=t}function UM(r,t,e){let n=r.name,i=n.length;for(yu.lastIndex=0;;){let s=yu.exec(n),a=yu.lastIndex,o=s[1],c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){Gm(e,l===void 0?new Bu(o,r,t):new Gu(o,r,t));break}else{let f=e.map[o];f===void 0&&(f=new Vu(o),Gm(e,f)),e=f}}}var la=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let s=t.getActiveUniform(e,i),a=t.getUniformLocation(e,s.name);UM(s,a,this)}}setValue(t,e,n,i){let s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,a=e.length;s!==a;++s){let o=e[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let a=t[i];a.id in e&&n.push(a)}return n}};function Vm(r,t,e){let n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}var zM=37297,OM=0;function BM(r,t){let e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=i;a<s;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function GM(r){let t=Ee.getPrimaries(Ee.workingColorSpace),e=Ee.getPrimaries(r),n;switch(t===e?n="":t===Kc&&e===jc?n="LinearDisplayP3ToLinearSRGB":t===jc&&e===Kc&&(n="LinearSRGBToLinearDisplayP3"),r){case dn:case _l:return[n,"LinearTransferOETF"];case de:case Hf:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function Wm(r,t,e){let n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let a=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+BM(r.getShaderSource(t),a)}else return i}function VM(r,t){let e=GM(t);return`vec4 ${r}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function WM(r,t){let e;switch(t){case Yx:e="Linear";break;case Jx:e="Reinhard";break;case Zx:e="OptimizedCineon";break;case Af:e="ACESFilmic";break;case $x:e="AgX";break;case Qx:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function qM(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(aa).join(`
`)}function XM(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(aa).join(`
`)}function jM(r){let t=[];for(let e in r){let n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function KM(r,t){let e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(t,i),a=s.name,o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function aa(r){return r!==""}function qm(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Xm(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var YM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wu(r){return r.replace(YM,ZM)}var JM=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function ZM(r,t){let e=$t[t];if(e===void 0){let n=JM.get(t);if(n!==void 0)e=$t[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Wu(e)}var QM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jm(r){return r.replace(QM,$M)}function $M(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Km(r){let t="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function tE(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===M0?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Mf?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===cs&&(t="SHADOWMAP_TYPE_VSM"),t}function eE(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ha:case ua:t="ENVMAP_TYPE_CUBE";break;case bl:t="ENVMAP_TYPE_CUBE_UV";break}return t}function nE(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case ua:t="ENVMAP_MODE_REFRACTION";break}return t}function iE(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Sf:t="ENVMAP_BLENDING_MULTIPLY";break;case jx:t="ENVMAP_BLENDING_MIX";break;case Kx:t="ENVMAP_BLENDING_ADD";break}return t}function sE(r){let t=r.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function rE(r,t,e,n){let i=r.getContext(),s=e.defines,a=e.vertexShader,o=e.fragmentShader,c=tE(e),l=eE(e),h=nE(e),f=iE(e),u=sE(e),d=e.isWebGL2?"":qM(e),g=XM(e),v=jM(s),m=i.createProgram(),p,x,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(aa).join(`
`),p.length>0&&(p+=`
`),x=[d,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(aa).join(`
`),x.length>0&&(x+=`
`)):(p=[Km(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(aa).join(`
`),x=[d,Km(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Hs?"#define TONE_MAPPING":"",e.toneMapping!==Hs?$t.tonemapping_pars_fragment:"",e.toneMapping!==Hs?WM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,VM("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(aa).join(`
`)),a=Wu(a),a=qm(a,e),a=Xm(a,e),o=Wu(o),o=qm(o,e),o=Xm(o,e),a=jm(a),o=jm(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,x=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===dm?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===dm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);let _=y+p+a,M=y+x+o,b=Vm(i,i.VERTEX_SHADER,_),w=Vm(i,i.FRAGMENT_SHADER,M);i.attachShader(m,b),i.attachShader(m,w),e.index0AttributeName!==void 0?i.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function C(D){if(r.debug.checkShaderErrors){let k=i.getProgramInfoLog(m).trim(),R=i.getShaderInfoLog(b).trim(),A=i.getShaderInfoLog(w).trim(),P=!0,N=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(P=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,m,b,w);else{let U=Wm(i,b,"vertex"),V=Wm(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+k+`
`+U+`
`+V)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(R===""||A==="")&&(N=!1);N&&(D.diagnostics={runnable:P,programLog:k,vertexShader:{log:R,prefix:p},fragmentShader:{log:A,prefix:x}})}i.deleteShader(b),i.deleteShader(w),E=new la(i,m),S=KM(i,m)}let E;this.getUniforms=function(){return E===void 0&&C(this),E};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let I=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=i.getProgramParameter(m,zM)),I},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=OM++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=w,this}var aE=0,qu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Xu(t),e.set(t,n)),n}},Xu=class{constructor(t){this.id=aE++,this.code=t,this.usedTimes=0}};function oE(r,t,e,n,i,s,a){let o=new _o,c=new qu,l=[],h=i.isWebGL2,f=i.logarithmicDepthBuffer,u=i.vertexTextures,d=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return E===0?"uv":`uv${E}`}function m(E,S,I,D,k){let R=D.fog,A=k.geometry,P=E.isMeshStandardMaterial?D.environment:null,N=(E.isMeshStandardMaterial?e:t).get(E.envMap||P),U=N&&N.mapping===bl?N.image.height:null,V=g[E.type];E.precision!==null&&(d=i.getMaxPrecision(E.precision),d!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",d,"instead."));let q=A.morphAttributes.position||A.morphAttributes.normal||A.morphAttributes.color,j=q!==void 0?q.length:0,at=0;A.morphAttributes.position!==void 0&&(at=1),A.morphAttributes.normal!==void 0&&(at=2),A.morphAttributes.color!==void 0&&(at=3);let G,$,gt,pt;if(V){let Fe=ki[V];G=Fe.vertexShader,$=Fe.fragmentShader}else G=E.vertexShader,$=E.fragmentShader,c.update(E),gt=c.getVertexShaderID(E),pt=c.getFragmentShaderID(E);let St=r.getRenderTarget(),Vt=k.isInstancedMesh===!0,Yt=k.isBatchedMesh===!0,kt=!!E.map,ae=!!E.matcap,Z=!!N,wn=!!E.aoMap,Ot=!!E.lightMap,Qt=!!E.bumpMap,Lt=!!E.normalMap,be=!!E.displacementMap,te=!!E.emissiveMap,H=!!E.metalnessMap,L=!!E.roughnessMap,Q=E.anisotropy>0,vt=E.clearcoat>0,z=E.iridescence>0,O=E.sheen>0,J=E.transmission>0,W=Q&&!!E.anisotropyMap,et=vt&&!!E.clearcoatMap,st=vt&&!!E.clearcoatNormalMap,xt=vt&&!!E.clearcoatRoughnessMap,Y=z&&!!E.iridescenceMap,Et=z&&!!E.iridescenceThicknessMap,lt=O&&!!E.sheenColorMap,dt=O&&!!E.sheenRoughnessMap,ft=!!E.specularMap,ct=!!E.specularColorMap,Tt=!!E.specularIntensityMap,jt=J&&!!E.transmissionMap,Kt=J&&!!E.thicknessMap,Ft=!!E.gradientMap,ut=!!E.alphaMap,B=E.alphaTest>0,mt=!!E.alphaHash,bt=!!E.extensions,Wt=!!A.attributes.uv1,Ht=!!A.attributes.uv2,_e=!!A.attributes.uv3,me=Hs;return E.toneMapped&&(St===null||St.isXRRenderTarget===!0)&&(me=r.toneMapping),{isWebGL2:h,shaderID:V,shaderType:E.type,shaderName:E.name,vertexShader:G,fragmentShader:$,defines:E.defines,customVertexShaderID:gt,customFragmentShaderID:pt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:d,batching:Yt,instancing:Vt,instancingColor:Vt&&k.instanceColor!==null,supportsVertexTextures:u,outputColorSpace:St===null?r.outputColorSpace:St.isXRRenderTarget===!0?St.texture.colorSpace:dn,map:kt,matcap:ae,envMap:Z,envMapMode:Z&&N.mapping,envMapCubeUVHeight:U,aoMap:wn,lightMap:Ot,bumpMap:Qt,normalMap:Lt,displacementMap:u&&be,emissiveMap:te,normalMapObjectSpace:Lt&&E.normalMapType===fb,normalMapTangentSpace:Lt&&E.normalMapType===Ff,metalnessMap:H,roughnessMap:L,anisotropy:Q,anisotropyMap:W,clearcoat:vt,clearcoatMap:et,clearcoatNormalMap:st,clearcoatRoughnessMap:xt,iridescence:z,iridescenceMap:Y,iridescenceThicknessMap:Et,sheen:O,sheenColorMap:lt,sheenRoughnessMap:dt,specularMap:ft,specularColorMap:ct,specularIntensityMap:Tt,transmission:J,transmissionMap:jt,thicknessMap:Kt,gradientMap:Ft,opaque:E.transparent===!1&&E.blending===oa,alphaMap:ut,alphaTest:B,alphaHash:mt,combine:E.combine,mapUv:kt&&v(E.map.channel),aoMapUv:wn&&v(E.aoMap.channel),lightMapUv:Ot&&v(E.lightMap.channel),bumpMapUv:Qt&&v(E.bumpMap.channel),normalMapUv:Lt&&v(E.normalMap.channel),displacementMapUv:be&&v(E.displacementMap.channel),emissiveMapUv:te&&v(E.emissiveMap.channel),metalnessMapUv:H&&v(E.metalnessMap.channel),roughnessMapUv:L&&v(E.roughnessMap.channel),anisotropyMapUv:W&&v(E.anisotropyMap.channel),clearcoatMapUv:et&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:st&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xt&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Y&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:lt&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:dt&&v(E.sheenRoughnessMap.channel),specularMapUv:ft&&v(E.specularMap.channel),specularColorMapUv:ct&&v(E.specularColorMap.channel),specularIntensityMapUv:Tt&&v(E.specularIntensityMap.channel),transmissionMapUv:jt&&v(E.transmissionMap.channel),thicknessMapUv:Kt&&v(E.thicknessMap.channel),alphaMapUv:ut&&v(E.alphaMap.channel),vertexTangents:!!A.attributes.tangent&&(Lt||Q),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!A.attributes.color&&A.attributes.color.itemSize===4,vertexUv1s:Wt,vertexUv2s:Ht,vertexUv3s:_e,pointsUvs:k.isPoints===!0&&!!A.attributes.uv&&(kt||ut),fog:!!R,useFog:E.fog===!0,fogExp2:R&&R.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:k.isSkinnedMesh===!0,morphTargets:A.morphAttributes.position!==void 0,morphNormals:A.morphAttributes.normal!==void 0,morphColors:A.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:at,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:r.shadowMap.enabled&&I.length>0,shadowMapType:r.shadowMap.type,toneMapping:me,useLegacyLights:r._useLegacyLights,decodeVideoTexture:kt&&E.map.isVideoTexture===!0&&Ee.getTransfer(E.map.colorSpace)===Ve,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Me,flipSided:E.side===Tn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:bt&&E.extensions.derivatives===!0,extensionFragDepth:bt&&E.extensions.fragDepth===!0,extensionDrawBuffers:bt&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:bt&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:bt&&E.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function p(E){let S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(let I in E.defines)S.push(I),S.push(E.defines[I]);return E.isRawShaderMaterial===!1&&(x(S,E),y(S,E),S.push(r.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function x(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.numLightProbes),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function y(E,S){o.disableAll(),S.isWebGL2&&o.enable(0),S.supportsVertexTextures&&o.enable(1),S.instancing&&o.enable(2),S.instancingColor&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),E.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.skinning&&o.enable(4),S.morphTargets&&o.enable(5),S.morphNormals&&o.enable(6),S.morphColors&&o.enable(7),S.premultipliedAlpha&&o.enable(8),S.shadowMapEnabled&&o.enable(9),S.useLegacyLights&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),E.push(o.mask)}function _(E){let S=g[E.type],I;if(S){let D=ki[S];I=Jb.clone(D.uniforms)}else I=E.uniforms;return I}function M(E,S){let I;for(let D=0,k=l.length;D<k;D++){let R=l[D];if(R.cacheKey===S){I=R,++I.usedTimes;break}}return I===void 0&&(I=new rE(r,S,E,s),l.push(I)),I}function b(E){if(--E.usedTimes===0){let S=l.indexOf(E);l[S]=l[l.length-1],l.pop(),E.destroy()}}function w(E){c.remove(E)}function C(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:M,releaseProgram:b,releaseShaderCache:w,programs:l,dispose:C}}function cE(){let r=new WeakMap;function t(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function e(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function lE(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Ym(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Jm(){let r=[],t=0,e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function a(f,u,d,g,v,m){let p=r[t];return p===void 0?(p={id:f.id,object:f,geometry:u,material:d,groupOrder:g,renderOrder:f.renderOrder,z:v,group:m},r[t]=p):(p.id=f.id,p.object=f,p.geometry=u,p.material=d,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=v,p.group=m),t++,p}function o(f,u,d,g,v,m){let p=a(f,u,d,g,v,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):e.push(p)}function c(f,u,d,g,v,m){let p=a(f,u,d,g,v,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):e.unshift(p)}function l(f,u){e.length>1&&e.sort(f||lE),n.length>1&&n.sort(u||Ym),i.length>1&&i.sort(u||Ym)}function h(){for(let f=t,u=r.length;f<u;f++){let d=r[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:o,unshift:c,finish:h,sort:l}}function hE(){let r=new WeakMap;function t(n,i){let s=r.get(n),a;return s===void 0?(a=new Jm,r.set(n,[a])):i>=s.length?(a=new Jm,s.push(a)):a=s[i],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function uE(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new T,color:new it};break;case"SpotLight":e={position:new T,direction:new T,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new T,color:new it,distance:0,decay:0};break;case"HemisphereLight":e={direction:new T,skyColor:new it,groundColor:new it};break;case"RectAreaLight":e={color:new it,position:new T,halfWidth:new T,halfHeight:new T};break}return r[t.id]=e,e}}}function fE(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var dE=0;function pE(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function mE(r,t){let e=new uE,n=fE(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new T);let s=new T,a=new wt,o=new wt;function c(h,f){let u=0,d=0,g=0;for(let D=0;D<9;D++)i.probe[D].set(0,0,0);let v=0,m=0,p=0,x=0,y=0,_=0,M=0,b=0,w=0,C=0,E=0;h.sort(pE);let S=f===!0?Math.PI:1;for(let D=0,k=h.length;D<k;D++){let R=h[D],A=R.color,P=R.intensity,N=R.distance,U=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=A.r*P*S,d+=A.g*P*S,g+=A.b*P*S;else if(R.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(R.sh.coefficients[V],P);E++}else if(R.isDirectionalLight){let V=e.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity*S),R.castShadow){let q=R.shadow,j=n.get(R);j.shadowBias=q.bias,j.shadowNormalBias=q.normalBias,j.shadowRadius=q.radius,j.shadowMapSize=q.mapSize,i.directionalShadow[v]=j,i.directionalShadowMap[v]=U,i.directionalShadowMatrix[v]=R.shadow.matrix,_++}i.directional[v]=V,v++}else if(R.isSpotLight){let V=e.get(R);V.position.setFromMatrixPosition(R.matrixWorld),V.color.copy(A).multiplyScalar(P*S),V.distance=N,V.coneCos=Math.cos(R.angle),V.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),V.decay=R.decay,i.spot[p]=V;let q=R.shadow;if(R.map&&(i.spotLightMap[w]=R.map,w++,q.updateMatrices(R),R.castShadow&&C++),i.spotLightMatrix[p]=q.matrix,R.castShadow){let j=n.get(R);j.shadowBias=q.bias,j.shadowNormalBias=q.normalBias,j.shadowRadius=q.radius,j.shadowMapSize=q.mapSize,i.spotShadow[p]=j,i.spotShadowMap[p]=U,b++}p++}else if(R.isRectAreaLight){let V=e.get(R);V.color.copy(A).multiplyScalar(P),V.halfWidth.set(R.width*.5,0,0),V.halfHeight.set(0,R.height*.5,0),i.rectArea[x]=V,x++}else if(R.isPointLight){let V=e.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity*S),V.distance=R.distance,V.decay=R.decay,R.castShadow){let q=R.shadow,j=n.get(R);j.shadowBias=q.bias,j.shadowNormalBias=q.normalBias,j.shadowRadius=q.radius,j.shadowMapSize=q.mapSize,j.shadowCameraNear=q.camera.near,j.shadowCameraFar=q.camera.far,i.pointShadow[m]=j,i.pointShadowMap[m]=U,i.pointShadowMatrix[m]=R.shadow.matrix,M++}i.point[m]=V,m++}else if(R.isHemisphereLight){let V=e.get(R);V.skyColor.copy(R.color).multiplyScalar(P*S),V.groundColor.copy(R.groundColor).multiplyScalar(P*S),i.hemi[y]=V,y++}}x>0&&(t.isWebGL2?r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Mt.LTC_FLOAT_1,i.rectAreaLTC2=Mt.LTC_FLOAT_2):(i.rectAreaLTC1=Mt.LTC_HALF_1,i.rectAreaLTC2=Mt.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Mt.LTC_FLOAT_1,i.rectAreaLTC2=Mt.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=Mt.LTC_HALF_1,i.rectAreaLTC2=Mt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=g;let I=i.hash;(I.directionalLength!==v||I.pointLength!==m||I.spotLength!==p||I.rectAreaLength!==x||I.hemiLength!==y||I.numDirectionalShadows!==_||I.numPointShadows!==M||I.numSpotShadows!==b||I.numSpotMaps!==w||I.numLightProbes!==E)&&(i.directional.length=v,i.spot.length=p,i.rectArea.length=x,i.point.length=m,i.hemi.length=y,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=b+w-C,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=E,I.directionalLength=v,I.pointLength=m,I.spotLength=p,I.rectAreaLength=x,I.hemiLength=y,I.numDirectionalShadows=_,I.numPointShadows=M,I.numSpotShadows=b,I.numSpotMaps=w,I.numLightProbes=E,i.version=dE++)}function l(h,f){let u=0,d=0,g=0,v=0,m=0,p=f.matrixWorldInverse;for(let x=0,y=h.length;x<y;x++){let _=h[x];if(_.isDirectionalLight){let M=i.directional[u];M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),u++}else if(_.isSpotLight){let M=i.spot[g];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),g++}else if(_.isRectAreaLight){let M=i.rectArea[v];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(p),o.identity(),a.copy(_.matrixWorld),a.premultiply(p),o.extractRotation(a),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),v++}else if(_.isPointLight){let M=i.point[d];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(p),d++}else if(_.isHemisphereLight){let M=i.hemi[m];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(p),m++}}}return{setup:c,setupView:l,state:i}}function Zm(r,t){let e=new mE(r,t),n=[],i=[];function s(){n.length=0,i.length=0}function a(f){n.push(f)}function o(f){i.push(f)}function c(f){e.setup(n,f)}function l(f){e.setupView(n,f)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function gE(r,t){let e=new WeakMap;function n(s,a=0){let o=e.get(s),c;return o===void 0?(c=new Zm(r,t),e.set(s,[c])):a>=o.length?(c=new Zm(r,t),o.push(c)):c=o[a],c}function i(){e=new WeakMap}return{get:n,dispose:i}}var Eo=class extends An{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ub,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ju=class extends An{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},vE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xE=`uniform sampler2D shadow_pass;
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
}`;function bE(r,t,e){let n=new Mo,i=new ht,s=new ht,a=new fe,o=new Eo({depthPacking:Df}),c=new ju,l={},h=e.maxTextureSize,f={[Bi]:Tn,[Tn]:Bi,[Me]:Me},u=new we({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:vE,fragmentShader:xE}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let g=new Rt;g.setAttribute("position",new At(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Gt(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=M0;let p=this.type;this.render=function(b,w,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;let E=r.getRenderTarget(),S=r.getActiveCubeFace(),I=r.getActiveMipmapLevel(),D=r.state;D.setBlending(Fs),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let k=p!==cs&&this.type===cs,R=p===cs&&this.type!==cs;for(let A=0,P=b.length;A<P;A++){let N=b[A],U=N.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",N,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;i.copy(U.mapSize);let V=U.getFrameExtents();if(i.multiply(V),s.copy(U.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/V.x),i.x=s.x*V.x,U.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/V.y),i.y=s.y*V.y,U.mapSize.y=s.y)),U.map===null||k===!0||R===!0){let j=this.type!==cs?{minFilter:an,magFilter:an}:{};U.map!==null&&U.map.dispose(),U.map=new _n(i.x,i.y,j),U.map.texture.name=N.name+".shadowMap",U.camera.updateProjectionMatrix()}r.setRenderTarget(U.map),r.clear();let q=U.getViewportCount();for(let j=0;j<q;j++){let at=U.getViewport(j);a.set(s.x*at.x,s.y*at.y,s.x*at.z,s.y*at.w),D.viewport(a),U.updateMatrices(N,j),n=U.getFrustum(),_(w,C,U.camera,N,this.type)}U.isPointLightShadow!==!0&&this.type===cs&&x(U,C),U.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(E,S,I)};function x(b,w){let C=t.update(v);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new _n(i.x,i.y)),u.uniforms.shadow_pass.value=b.map.texture,u.uniforms.resolution.value=b.mapSize,u.uniforms.radius.value=b.radius,r.setRenderTarget(b.mapPass),r.clear(),r.renderBufferDirect(w,null,C,u,v,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,r.setRenderTarget(b.map),r.clear(),r.renderBufferDirect(w,null,C,d,v,null)}function y(b,w,C,E){let S=null,I=C.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(I!==void 0)S=I;else if(S=C.isPointLight===!0?c:o,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let D=S.uuid,k=w.uuid,R=l[D];R===void 0&&(R={},l[D]=R);let A=R[k];A===void 0&&(A=S.clone(),R[k]=A,w.addEventListener("dispose",M)),S=A}if(S.visible=w.visible,S.wireframe=w.wireframe,E===cs?S.side=w.shadowSide!==null?w.shadowSide:w.side:S.side=w.shadowSide!==null?w.shadowSide:f[w.side],S.alphaMap=w.alphaMap,S.alphaTest=w.alphaTest,S.map=w.map,S.clipShadows=w.clipShadows,S.clippingPlanes=w.clippingPlanes,S.clipIntersection=w.clipIntersection,S.displacementMap=w.displacementMap,S.displacementScale=w.displacementScale,S.displacementBias=w.displacementBias,S.wireframeLinewidth=w.wireframeLinewidth,S.linewidth=w.linewidth,C.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let D=r.properties.get(S);D.light=C}return S}function _(b,w,C,E,S){if(b.visible===!1)return;if(b.layers.test(w.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&S===cs)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,b.matrixWorld);let k=t.update(b),R=b.material;if(Array.isArray(R)){let A=k.groups;for(let P=0,N=A.length;P<N;P++){let U=A[P],V=R[U.materialIndex];if(V&&V.visible){let q=y(b,V,E,S);b.onBeforeShadow(r,b,w,C,k,q,U),r.renderBufferDirect(C,null,k,q,b,U),b.onAfterShadow(r,b,w,C,k,q,U)}}}else if(R.visible){let A=y(b,R,E,S);b.onBeforeShadow(r,b,w,C,k,A,null),r.renderBufferDirect(C,null,k,A,b,null),b.onAfterShadow(r,b,w,C,k,A,null)}}let D=b.children;for(let k=0,R=D.length;k<R;k++)_(D[k],w,C,E,S)}function M(b){b.target.removeEventListener("dispose",M);for(let C in l){let E=l[C],S=b.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}function yE(r,t,e){let n=e.isWebGL2;function i(){let B=!1,mt=new fe,bt=null,Wt=new fe(0,0,0,0);return{setMask:function(Ht){bt!==Ht&&!B&&(r.colorMask(Ht,Ht,Ht,Ht),bt=Ht)},setLocked:function(Ht){B=Ht},setClear:function(Ht,_e,me,ye,Fe){Fe===!0&&(Ht*=ye,_e*=ye,me*=ye),mt.set(Ht,_e,me,ye),Wt.equals(mt)===!1&&(r.clearColor(Ht,_e,me,ye),Wt.copy(mt))},reset:function(){B=!1,bt=null,Wt.set(-1,0,0,0)}}}function s(){let B=!1,mt=null,bt=null,Wt=null;return{setTest:function(Ht){Ht?Yt(r.DEPTH_TEST):kt(r.DEPTH_TEST)},setMask:function(Ht){mt!==Ht&&!B&&(r.depthMask(Ht),mt=Ht)},setFunc:function(Ht){if(bt!==Ht){switch(Ht){case Ox:r.depthFunc(r.NEVER);break;case Bx:r.depthFunc(r.ALWAYS);break;case Gx:r.depthFunc(r.LESS);break;case Vc:r.depthFunc(r.LEQUAL);break;case Vx:r.depthFunc(r.EQUAL);break;case Wx:r.depthFunc(r.GEQUAL);break;case qx:r.depthFunc(r.GREATER);break;case Xx:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}bt=Ht}},setLocked:function(Ht){B=Ht},setClear:function(Ht){Wt!==Ht&&(r.clearDepth(Ht),Wt=Ht)},reset:function(){B=!1,mt=null,bt=null,Wt=null}}}function a(){let B=!1,mt=null,bt=null,Wt=null,Ht=null,_e=null,me=null,ye=null,Fe=null;return{setTest:function(Pe){B||(Pe?Yt(r.STENCIL_TEST):kt(r.STENCIL_TEST))},setMask:function(Pe){mt!==Pe&&!B&&(r.stencilMask(Pe),mt=Pe)},setFunc:function(Pe,Zt,ce){(bt!==Pe||Wt!==Zt||Ht!==ce)&&(r.stencilFunc(Pe,Zt,ce),bt=Pe,Wt=Zt,Ht=ce)},setOp:function(Pe,Zt,ce){(_e!==Pe||me!==Zt||ye!==ce)&&(r.stencilOp(Pe,Zt,ce),_e=Pe,me=Zt,ye=ce)},setLocked:function(Pe){B=Pe},setClear:function(Pe){Fe!==Pe&&(r.clearStencil(Pe),Fe=Pe)},reset:function(){B=!1,mt=null,bt=null,Wt=null,Ht=null,_e=null,me=null,ye=null,Fe=null}}}let o=new i,c=new s,l=new a,h=new WeakMap,f=new WeakMap,u={},d={},g=new WeakMap,v=[],m=null,p=!1,x=null,y=null,_=null,M=null,b=null,w=null,C=null,E=new it(0,0,0),S=0,I=!1,D=null,k=null,R=null,A=null,P=null,N=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),U=!1,V=0,q=r.getParameter(r.VERSION);q.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(q)[1]),U=V>=1):q.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),U=V>=2);let j=null,at={},G=r.getParameter(r.SCISSOR_BOX),$=r.getParameter(r.VIEWPORT),gt=new fe().fromArray(G),pt=new fe().fromArray($);function St(B,mt,bt,Wt){let Ht=new Uint8Array(4),_e=r.createTexture();r.bindTexture(B,_e),r.texParameteri(B,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(B,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let me=0;me<bt;me++)n&&(B===r.TEXTURE_3D||B===r.TEXTURE_2D_ARRAY)?r.texImage3D(mt,0,r.RGBA,1,1,Wt,0,r.RGBA,r.UNSIGNED_BYTE,Ht):r.texImage2D(mt+me,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ht);return _e}let Vt={};Vt[r.TEXTURE_2D]=St(r.TEXTURE_2D,r.TEXTURE_2D,1),Vt[r.TEXTURE_CUBE_MAP]=St(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Vt[r.TEXTURE_2D_ARRAY]=St(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Vt[r.TEXTURE_3D]=St(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Yt(r.DEPTH_TEST),c.setFunc(Vc),te(!1),H(Hp),Yt(r.CULL_FACE),Lt(Fs);function Yt(B){u[B]!==!0&&(r.enable(B),u[B]=!0)}function kt(B){u[B]!==!1&&(r.disable(B),u[B]=!1)}function ae(B,mt){return d[B]!==mt?(r.bindFramebuffer(B,mt),d[B]=mt,n&&(B===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=mt),B===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=mt)),!0):!1}function Z(B,mt){let bt=v,Wt=!1;if(B)if(bt=g.get(mt),bt===void 0&&(bt=[],g.set(mt,bt)),B.isWebGLMultipleRenderTargets){let Ht=B.texture;if(bt.length!==Ht.length||bt[0]!==r.COLOR_ATTACHMENT0){for(let _e=0,me=Ht.length;_e<me;_e++)bt[_e]=r.COLOR_ATTACHMENT0+_e;bt.length=Ht.length,Wt=!0}}else bt[0]!==r.COLOR_ATTACHMENT0&&(bt[0]=r.COLOR_ATTACHMENT0,Wt=!0);else bt[0]!==r.BACK&&(bt[0]=r.BACK,Wt=!0);Wt&&(e.isWebGL2?r.drawBuffers(bt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(bt))}function wn(B){return m!==B?(r.useProgram(B),m=B,!0):!1}let Ot={[ls]:r.FUNC_ADD,[Ax]:r.FUNC_SUBTRACT,[Rx]:r.FUNC_REVERSE_SUBTRACT};if(n)Ot[Up]=r.MIN,Ot[zp]=r.MAX;else{let B=t.get("EXT_blend_minmax");B!==null&&(Ot[Up]=B.MIN_EXT,Ot[zp]=B.MAX_EXT)}let Qt={[wf]:r.ZERO,[Cx]:r.ONE,[Tf]:r.SRC_COLOR,[Pu]:r.SRC_ALPHA,[Hx]:r.SRC_ALPHA_SATURATE,[Dx]:r.DST_COLOR,[Lx]:r.DST_ALPHA,[Px]:r.ONE_MINUS_SRC_COLOR,[Lu]:r.ONE_MINUS_SRC_ALPHA,[Fx]:r.ONE_MINUS_DST_COLOR,[Ix]:r.ONE_MINUS_DST_ALPHA,[Nx]:r.CONSTANT_COLOR,[kx]:r.ONE_MINUS_CONSTANT_COLOR,[Ux]:r.CONSTANT_ALPHA,[zx]:r.ONE_MINUS_CONSTANT_ALPHA};function Lt(B,mt,bt,Wt,Ht,_e,me,ye,Fe,Pe){if(B===Fs){p===!0&&(kt(r.BLEND),p=!1);return}if(p===!1&&(Yt(r.BLEND),p=!0),B!==Ef){if(B!==x||Pe!==I){if((y!==ls||b!==ls)&&(r.blendEquation(r.FUNC_ADD),y=ls,b=ls),Pe)switch(B){case oa:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ze:r.blendFunc(r.ONE,r.ONE);break;case Np:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case kp:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case oa:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ze:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Np:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case kp:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}_=null,M=null,w=null,C=null,E.set(0,0,0),S=0,x=B,I=Pe}return}Ht=Ht||mt,_e=_e||bt,me=me||Wt,(mt!==y||Ht!==b)&&(r.blendEquationSeparate(Ot[mt],Ot[Ht]),y=mt,b=Ht),(bt!==_||Wt!==M||_e!==w||me!==C)&&(r.blendFuncSeparate(Qt[bt],Qt[Wt],Qt[_e],Qt[me]),_=bt,M=Wt,w=_e,C=me),(ye.equals(E)===!1||Fe!==S)&&(r.blendColor(ye.r,ye.g,ye.b,Fe),E.copy(ye),S=Fe),x=B,I=!1}function be(B,mt){B.side===Me?kt(r.CULL_FACE):Yt(r.CULL_FACE);let bt=B.side===Tn;mt&&(bt=!bt),te(bt),B.blending===oa&&B.transparent===!1?Lt(Fs):Lt(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),c.setFunc(B.depthFunc),c.setTest(B.depthTest),c.setMask(B.depthWrite),o.setMask(B.colorWrite);let Wt=B.stencilWrite;l.setTest(Wt),Wt&&(l.setMask(B.stencilWriteMask),l.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),l.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Q(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?Yt(r.SAMPLE_ALPHA_TO_COVERAGE):kt(r.SAMPLE_ALPHA_TO_COVERAGE)}function te(B){D!==B&&(B?r.frontFace(r.CW):r.frontFace(r.CCW),D=B)}function H(B){B!==Tx?(Yt(r.CULL_FACE),B!==k&&(B===Hp?r.cullFace(r.BACK):B===Sx?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):kt(r.CULL_FACE),k=B}function L(B){B!==R&&(U&&r.lineWidth(B),R=B)}function Q(B,mt,bt){B?(Yt(r.POLYGON_OFFSET_FILL),(A!==mt||P!==bt)&&(r.polygonOffset(mt,bt),A=mt,P=bt)):kt(r.POLYGON_OFFSET_FILL)}function vt(B){B?Yt(r.SCISSOR_TEST):kt(r.SCISSOR_TEST)}function z(B){B===void 0&&(B=r.TEXTURE0+N-1),j!==B&&(r.activeTexture(B),j=B)}function O(B,mt,bt){bt===void 0&&(j===null?bt=r.TEXTURE0+N-1:bt=j);let Wt=at[bt];Wt===void 0&&(Wt={type:void 0,texture:void 0},at[bt]=Wt),(Wt.type!==B||Wt.texture!==mt)&&(j!==bt&&(r.activeTexture(bt),j=bt),r.bindTexture(B,mt||Vt[B]),Wt.type=B,Wt.texture=mt)}function J(){let B=at[j];B!==void 0&&B.type!==void 0&&(r.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function W(){try{r.compressedTexImage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function et(){try{r.compressedTexImage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function st(){try{r.texSubImage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function xt(){try{r.texSubImage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Y(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Et(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function lt(){try{r.texStorage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function dt(){try{r.texStorage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ft(){try{r.texImage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ct(){try{r.texImage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Tt(B){gt.equals(B)===!1&&(r.scissor(B.x,B.y,B.z,B.w),gt.copy(B))}function jt(B){pt.equals(B)===!1&&(r.viewport(B.x,B.y,B.z,B.w),pt.copy(B))}function Kt(B,mt){let bt=f.get(mt);bt===void 0&&(bt=new WeakMap,f.set(mt,bt));let Wt=bt.get(B);Wt===void 0&&(Wt=r.getUniformBlockIndex(mt,B.name),bt.set(B,Wt))}function Ft(B,mt){let Wt=f.get(mt).get(B);h.get(mt)!==Wt&&(r.uniformBlockBinding(mt,Wt,B.__bindingPointIndex),h.set(mt,Wt))}function ut(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},j=null,at={},d={},g=new WeakMap,v=[],m=null,p=!1,x=null,y=null,_=null,M=null,b=null,w=null,C=null,E=new it(0,0,0),S=0,I=!1,D=null,k=null,R=null,A=null,P=null,gt.set(0,0,r.canvas.width,r.canvas.height),pt.set(0,0,r.canvas.width,r.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:Yt,disable:kt,bindFramebuffer:ae,drawBuffers:Z,useProgram:wn,setBlending:Lt,setMaterial:be,setFlipSided:te,setCullFace:H,setLineWidth:L,setPolygonOffset:Q,setScissorTest:vt,activeTexture:z,bindTexture:O,unbindTexture:J,compressedTexImage2D:W,compressedTexImage3D:et,texImage2D:ft,texImage3D:ct,updateUBOMapping:Kt,uniformBlockBinding:Ft,texStorage2D:lt,texStorage3D:dt,texSubImage2D:st,texSubImage3D:xt,compressedTexSubImage2D:Y,compressedTexSubImage3D:Et,scissor:Tt,viewport:jt,reset:ut}}function _E(r,t,e,n,i,s,a){let o=i.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,f,u=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(H,L){return d?new OffscreenCanvas(H,L):yo("canvas")}function v(H,L,Q,vt){let z=1;if((H.width>vt||H.height>vt)&&(z=vt/Math.max(H.width,H.height)),z<1||L===!0)if(typeof HTMLImageElement<"u"&&H instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&H instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&H instanceof ImageBitmap){let O=L?Jc:Math.floor,J=O(z*H.width),W=O(z*H.height);f===void 0&&(f=g(J,W));let et=Q?g(J,W):f;return et.width=J,et.height=W,et.getContext("2d").drawImage(H,0,0,J,W),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+H.width+"x"+H.height+") to ("+J+"x"+W+")."),et}else return"data"in H&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+H.width+"x"+H.height+")."),H;return H}function m(H){return Nu(H.width)&&Nu(H.height)}function p(H){return o?!1:H.wrapS!==si||H.wrapT!==si||H.minFilter!==an&&H.minFilter!==hn}function x(H,L){return H.generateMipmaps&&L&&H.minFilter!==an&&H.minFilter!==hn}function y(H){r.generateMipmap(H)}function _(H,L,Q,vt,z=!1){if(o===!1)return L;if(H!==null){if(r[H]!==void 0)return r[H];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+H+"'")}let O=L;if(L===r.RED&&(Q===r.FLOAT&&(O=r.R32F),Q===r.HALF_FLOAT&&(O=r.R16F),Q===r.UNSIGNED_BYTE&&(O=r.R8)),L===r.RED_INTEGER&&(Q===r.UNSIGNED_BYTE&&(O=r.R8UI),Q===r.UNSIGNED_SHORT&&(O=r.R16UI),Q===r.UNSIGNED_INT&&(O=r.R32UI),Q===r.BYTE&&(O=r.R8I),Q===r.SHORT&&(O=r.R16I),Q===r.INT&&(O=r.R32I)),L===r.RG&&(Q===r.FLOAT&&(O=r.RG32F),Q===r.HALF_FLOAT&&(O=r.RG16F),Q===r.UNSIGNED_BYTE&&(O=r.RG8)),L===r.RGBA){let J=z?Xc:Ee.getTransfer(vt);Q===r.FLOAT&&(O=r.RGBA32F),Q===r.HALF_FLOAT&&(O=r.RGBA16F),Q===r.UNSIGNED_BYTE&&(O=J===Ve?r.SRGB8_ALPHA8:r.RGBA8),Q===r.UNSIGNED_SHORT_4_4_4_4&&(O=r.RGBA4),Q===r.UNSIGNED_SHORT_5_5_5_1&&(O=r.RGB5_A1)}return(O===r.R16F||O===r.R32F||O===r.RG16F||O===r.RG32F||O===r.RGBA16F||O===r.RGBA32F)&&t.get("EXT_color_buffer_float"),O}function M(H,L,Q){return x(H,Q)===!0||H.isFramebufferTexture&&H.minFilter!==an&&H.minFilter!==hn?Math.log2(Math.max(L.width,L.height))+1:H.mipmaps!==void 0&&H.mipmaps.length>0?H.mipmaps.length:H.isCompressedTexture&&Array.isArray(H.image)?L.mipmaps.length:1}function b(H){return H===an||H===Wc||H===uo?r.NEAREST:r.LINEAR}function w(H){let L=H.target;L.removeEventListener("dispose",w),E(L),L.isVideoTexture&&h.delete(L)}function C(H){let L=H.target;L.removeEventListener("dispose",C),I(L)}function E(H){let L=n.get(H);if(L.__webglInit===void 0)return;let Q=H.source,vt=u.get(Q);if(vt){let z=vt[L.__cacheKey];z.usedTimes--,z.usedTimes===0&&S(H),Object.keys(vt).length===0&&u.delete(Q)}n.remove(H)}function S(H){let L=n.get(H);r.deleteTexture(L.__webglTexture);let Q=H.source,vt=u.get(Q);delete vt[L.__cacheKey],a.memory.textures--}function I(H){let L=H.texture,Q=n.get(H),vt=n.get(L);if(vt.__webglTexture!==void 0&&(r.deleteTexture(vt.__webglTexture),a.memory.textures--),H.depthTexture&&H.depthTexture.dispose(),H.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(Q.__webglFramebuffer[z]))for(let O=0;O<Q.__webglFramebuffer[z].length;O++)r.deleteFramebuffer(Q.__webglFramebuffer[z][O]);else r.deleteFramebuffer(Q.__webglFramebuffer[z]);Q.__webglDepthbuffer&&r.deleteRenderbuffer(Q.__webglDepthbuffer[z])}else{if(Array.isArray(Q.__webglFramebuffer))for(let z=0;z<Q.__webglFramebuffer.length;z++)r.deleteFramebuffer(Q.__webglFramebuffer[z]);else r.deleteFramebuffer(Q.__webglFramebuffer);if(Q.__webglDepthbuffer&&r.deleteRenderbuffer(Q.__webglDepthbuffer),Q.__webglMultisampledFramebuffer&&r.deleteFramebuffer(Q.__webglMultisampledFramebuffer),Q.__webglColorRenderbuffer)for(let z=0;z<Q.__webglColorRenderbuffer.length;z++)Q.__webglColorRenderbuffer[z]&&r.deleteRenderbuffer(Q.__webglColorRenderbuffer[z]);Q.__webglDepthRenderbuffer&&r.deleteRenderbuffer(Q.__webglDepthRenderbuffer)}if(H.isWebGLMultipleRenderTargets)for(let z=0,O=L.length;z<O;z++){let J=n.get(L[z]);J.__webglTexture&&(r.deleteTexture(J.__webglTexture),a.memory.textures--),n.remove(L[z])}n.remove(L),n.remove(H)}let D=0;function k(){D=0}function R(){let H=D;return H>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+H+" texture units while this GPU supports only "+i.maxTextures),D+=1,H}function A(H){let L=[];return L.push(H.wrapS),L.push(H.wrapT),L.push(H.wrapR||0),L.push(H.magFilter),L.push(H.minFilter),L.push(H.anisotropy),L.push(H.internalFormat),L.push(H.format),L.push(H.type),L.push(H.generateMipmaps),L.push(H.premultiplyAlpha),L.push(H.flipY),L.push(H.unpackAlignment),L.push(H.colorSpace),L.join()}function P(H,L){let Q=n.get(H);if(H.isVideoTexture&&be(H),H.isRenderTargetTexture===!1&&H.version>0&&Q.__version!==H.version){let vt=H.image;if(vt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(vt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{gt(Q,H,L);return}}e.bindTexture(r.TEXTURE_2D,Q.__webglTexture,r.TEXTURE0+L)}function N(H,L){let Q=n.get(H);if(H.version>0&&Q.__version!==H.version){gt(Q,H,L);return}e.bindTexture(r.TEXTURE_2D_ARRAY,Q.__webglTexture,r.TEXTURE0+L)}function U(H,L){let Q=n.get(H);if(H.version>0&&Q.__version!==H.version){gt(Q,H,L);return}e.bindTexture(r.TEXTURE_3D,Q.__webglTexture,r.TEXTURE0+L)}function V(H,L){let Q=n.get(H);if(H.version>0&&Q.__version!==H.version){pt(Q,H,L);return}e.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture,r.TEXTURE0+L)}let q={[jn]:r.REPEAT,[si]:r.CLAMP_TO_EDGE,[bo]:r.MIRRORED_REPEAT},j={[an]:r.NEAREST,[Wc]:r.NEAREST_MIPMAP_NEAREST,[uo]:r.NEAREST_MIPMAP_LINEAR,[hn]:r.LINEAR,[Rf]:r.LINEAR_MIPMAP_NEAREST,[Gi]:r.LINEAR_MIPMAP_LINEAR},at={[db]:r.NEVER,[bb]:r.ALWAYS,[pb]:r.LESS,[D0]:r.LEQUAL,[mb]:r.EQUAL,[xb]:r.GEQUAL,[gb]:r.GREATER,[vb]:r.NOTEQUAL};function G(H,L,Q){if(Q?(r.texParameteri(H,r.TEXTURE_WRAP_S,q[L.wrapS]),r.texParameteri(H,r.TEXTURE_WRAP_T,q[L.wrapT]),(H===r.TEXTURE_3D||H===r.TEXTURE_2D_ARRAY)&&r.texParameteri(H,r.TEXTURE_WRAP_R,q[L.wrapR]),r.texParameteri(H,r.TEXTURE_MAG_FILTER,j[L.magFilter]),r.texParameteri(H,r.TEXTURE_MIN_FILTER,j[L.minFilter])):(r.texParameteri(H,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(H,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(H===r.TEXTURE_3D||H===r.TEXTURE_2D_ARRAY)&&r.texParameteri(H,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(L.wrapS!==si||L.wrapT!==si)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(H,r.TEXTURE_MAG_FILTER,b(L.magFilter)),r.texParameteri(H,r.TEXTURE_MIN_FILTER,b(L.minFilter)),L.minFilter!==an&&L.minFilter!==hn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),L.compareFunction&&(r.texParameteri(H,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(H,r.TEXTURE_COMPARE_FUNC,at[L.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let vt=t.get("EXT_texture_filter_anisotropic");if(L.magFilter===an||L.minFilter!==uo&&L.minFilter!==Gi||L.type===hs&&t.has("OES_texture_float_linear")===!1||o===!1&&L.type===Zn&&t.has("OES_texture_half_float_linear")===!1)return;(L.anisotropy>1||n.get(L).__currentAnisotropy)&&(r.texParameterf(H,vt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(L.anisotropy,i.getMaxAnisotropy())),n.get(L).__currentAnisotropy=L.anisotropy)}}function $(H,L){let Q=!1;H.__webglInit===void 0&&(H.__webglInit=!0,L.addEventListener("dispose",w));let vt=L.source,z=u.get(vt);z===void 0&&(z={},u.set(vt,z));let O=A(L);if(O!==H.__cacheKey){z[O]===void 0&&(z[O]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,Q=!0),z[O].usedTimes++;let J=z[H.__cacheKey];J!==void 0&&(z[H.__cacheKey].usedTimes--,J.usedTimes===0&&S(L)),H.__cacheKey=O,H.__webglTexture=z[O].texture}return Q}function gt(H,L,Q){let vt=r.TEXTURE_2D;(L.isDataArrayTexture||L.isCompressedArrayTexture)&&(vt=r.TEXTURE_2D_ARRAY),L.isData3DTexture&&(vt=r.TEXTURE_3D);let z=$(H,L),O=L.source;e.bindTexture(vt,H.__webglTexture,r.TEXTURE0+Q);let J=n.get(O);if(O.version!==J.__version||z===!0){e.activeTexture(r.TEXTURE0+Q);let W=Ee.getPrimaries(Ee.workingColorSpace),et=L.colorSpace===kn?null:Ee.getPrimaries(L.colorSpace),st=L.colorSpace===kn||W===et?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,L.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,L.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);let xt=p(L)&&m(L.image)===!1,Y=v(L.image,xt,!1,i.maxTextureSize);Y=te(L,Y);let Et=m(Y)||o,lt=s.convert(L.format,L.colorSpace),dt=s.convert(L.type),ft=_(L.internalFormat,lt,dt,L.colorSpace,L.isVideoTexture);G(vt,L,Et);let ct,Tt=L.mipmaps,jt=o&&L.isVideoTexture!==!0&&ft!==P0,Kt=J.__version===void 0||z===!0,Ft=M(L,Y,Et);if(L.isDepthTexture)ft=r.DEPTH_COMPONENT,o?L.type===hs?ft=r.DEPTH_COMPONENT32F:L.type===zi?ft=r.DEPTH_COMPONENT24:L.type===pr?ft=r.DEPTH24_STENCIL8:ft=r.DEPTH_COMPONENT16:L.type===hs&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),L.format===mr&&ft===r.DEPTH_COMPONENT&&L.type!==Cf&&L.type!==zi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),L.type=zi,dt=s.convert(L.type)),L.format===fa&&ft===r.DEPTH_COMPONENT&&(ft=r.DEPTH_STENCIL,L.type!==pr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),L.type=pr,dt=s.convert(L.type))),Kt&&(jt?e.texStorage2D(r.TEXTURE_2D,1,ft,Y.width,Y.height):e.texImage2D(r.TEXTURE_2D,0,ft,Y.width,Y.height,0,lt,dt,null));else if(L.isDataTexture)if(Tt.length>0&&Et){jt&&Kt&&e.texStorage2D(r.TEXTURE_2D,Ft,ft,Tt[0].width,Tt[0].height);for(let ut=0,B=Tt.length;ut<B;ut++)ct=Tt[ut],jt?e.texSubImage2D(r.TEXTURE_2D,ut,0,0,ct.width,ct.height,lt,dt,ct.data):e.texImage2D(r.TEXTURE_2D,ut,ft,ct.width,ct.height,0,lt,dt,ct.data);L.generateMipmaps=!1}else jt?(Kt&&e.texStorage2D(r.TEXTURE_2D,Ft,ft,Y.width,Y.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,Y.width,Y.height,lt,dt,Y.data)):e.texImage2D(r.TEXTURE_2D,0,ft,Y.width,Y.height,0,lt,dt,Y.data);else if(L.isCompressedTexture)if(L.isCompressedArrayTexture){jt&&Kt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Ft,ft,Tt[0].width,Tt[0].height,Y.depth);for(let ut=0,B=Tt.length;ut<B;ut++)ct=Tt[ut],L.format!==pi?lt!==null?jt?e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ut,0,0,0,ct.width,ct.height,Y.depth,lt,ct.data,0,0):e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ut,ft,ct.width,ct.height,Y.depth,0,ct.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):jt?e.texSubImage3D(r.TEXTURE_2D_ARRAY,ut,0,0,0,ct.width,ct.height,Y.depth,lt,dt,ct.data):e.texImage3D(r.TEXTURE_2D_ARRAY,ut,ft,ct.width,ct.height,Y.depth,0,lt,dt,ct.data)}else{jt&&Kt&&e.texStorage2D(r.TEXTURE_2D,Ft,ft,Tt[0].width,Tt[0].height);for(let ut=0,B=Tt.length;ut<B;ut++)ct=Tt[ut],L.format!==pi?lt!==null?jt?e.compressedTexSubImage2D(r.TEXTURE_2D,ut,0,0,ct.width,ct.height,lt,ct.data):e.compressedTexImage2D(r.TEXTURE_2D,ut,ft,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):jt?e.texSubImage2D(r.TEXTURE_2D,ut,0,0,ct.width,ct.height,lt,dt,ct.data):e.texImage2D(r.TEXTURE_2D,ut,ft,ct.width,ct.height,0,lt,dt,ct.data)}else if(L.isDataArrayTexture)jt?(Kt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Ft,ft,Y.width,Y.height,Y.depth),e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,lt,dt,Y.data)):e.texImage3D(r.TEXTURE_2D_ARRAY,0,ft,Y.width,Y.height,Y.depth,0,lt,dt,Y.data);else if(L.isData3DTexture)jt?(Kt&&e.texStorage3D(r.TEXTURE_3D,Ft,ft,Y.width,Y.height,Y.depth),e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,lt,dt,Y.data)):e.texImage3D(r.TEXTURE_3D,0,ft,Y.width,Y.height,Y.depth,0,lt,dt,Y.data);else if(L.isFramebufferTexture){if(Kt)if(jt)e.texStorage2D(r.TEXTURE_2D,Ft,ft,Y.width,Y.height);else{let ut=Y.width,B=Y.height;for(let mt=0;mt<Ft;mt++)e.texImage2D(r.TEXTURE_2D,mt,ft,ut,B,0,lt,dt,null),ut>>=1,B>>=1}}else if(Tt.length>0&&Et){jt&&Kt&&e.texStorage2D(r.TEXTURE_2D,Ft,ft,Tt[0].width,Tt[0].height);for(let ut=0,B=Tt.length;ut<B;ut++)ct=Tt[ut],jt?e.texSubImage2D(r.TEXTURE_2D,ut,0,0,lt,dt,ct):e.texImage2D(r.TEXTURE_2D,ut,ft,lt,dt,ct);L.generateMipmaps=!1}else jt?(Kt&&e.texStorage2D(r.TEXTURE_2D,Ft,ft,Y.width,Y.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,lt,dt,Y)):e.texImage2D(r.TEXTURE_2D,0,ft,lt,dt,Y);x(L,Et)&&y(vt),J.__version=O.version,L.onUpdate&&L.onUpdate(L)}H.__version=L.version}function pt(H,L,Q){if(L.image.length!==6)return;let vt=$(H,L),z=L.source;e.bindTexture(r.TEXTURE_CUBE_MAP,H.__webglTexture,r.TEXTURE0+Q);let O=n.get(z);if(z.version!==O.__version||vt===!0){e.activeTexture(r.TEXTURE0+Q);let J=Ee.getPrimaries(Ee.workingColorSpace),W=L.colorSpace===kn?null:Ee.getPrimaries(L.colorSpace),et=L.colorSpace===kn||J===W?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,L.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,L.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let st=L.isCompressedTexture||L.image[0].isCompressedTexture,xt=L.image[0]&&L.image[0].isDataTexture,Y=[];for(let ut=0;ut<6;ut++)!st&&!xt?Y[ut]=v(L.image[ut],!1,!0,i.maxCubemapSize):Y[ut]=xt?L.image[ut].image:L.image[ut],Y[ut]=te(L,Y[ut]);let Et=Y[0],lt=m(Et)||o,dt=s.convert(L.format,L.colorSpace),ft=s.convert(L.type),ct=_(L.internalFormat,dt,ft,L.colorSpace),Tt=o&&L.isVideoTexture!==!0,jt=O.__version===void 0||vt===!0,Kt=M(L,Et,lt);G(r.TEXTURE_CUBE_MAP,L,lt);let Ft;if(st){Tt&&jt&&e.texStorage2D(r.TEXTURE_CUBE_MAP,Kt,ct,Et.width,Et.height);for(let ut=0;ut<6;ut++){Ft=Y[ut].mipmaps;for(let B=0;B<Ft.length;B++){let mt=Ft[B];L.format!==pi?dt!==null?Tt?e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,B,0,0,mt.width,mt.height,dt,mt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,B,ct,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Tt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,B,0,0,mt.width,mt.height,dt,ft,mt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,B,ct,mt.width,mt.height,0,dt,ft,mt.data)}}}else{Ft=L.mipmaps,Tt&&jt&&(Ft.length>0&&Kt++,e.texStorage2D(r.TEXTURE_CUBE_MAP,Kt,ct,Y[0].width,Y[0].height));for(let ut=0;ut<6;ut++)if(xt){Tt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,Y[ut].width,Y[ut].height,dt,ft,Y[ut].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,ct,Y[ut].width,Y[ut].height,0,dt,ft,Y[ut].data);for(let B=0;B<Ft.length;B++){let bt=Ft[B].image[ut].image;Tt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,B+1,0,0,bt.width,bt.height,dt,ft,bt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,B+1,ct,bt.width,bt.height,0,dt,ft,bt.data)}}else{Tt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,dt,ft,Y[ut]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,ct,dt,ft,Y[ut]);for(let B=0;B<Ft.length;B++){let mt=Ft[B];Tt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,B+1,0,0,dt,ft,mt.image[ut]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,B+1,ct,dt,ft,mt.image[ut])}}}x(L,lt)&&y(r.TEXTURE_CUBE_MAP),O.__version=z.version,L.onUpdate&&L.onUpdate(L)}H.__version=L.version}function St(H,L,Q,vt,z,O){let J=s.convert(Q.format,Q.colorSpace),W=s.convert(Q.type),et=_(Q.internalFormat,J,W,Q.colorSpace);if(!n.get(L).__hasExternalTextures){let xt=Math.max(1,L.width>>O),Y=Math.max(1,L.height>>O);z===r.TEXTURE_3D||z===r.TEXTURE_2D_ARRAY?e.texImage3D(z,O,et,xt,Y,L.depth,0,J,W,null):e.texImage2D(z,O,et,xt,Y,0,J,W,null)}e.bindFramebuffer(r.FRAMEBUFFER,H),Lt(L)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,vt,z,n.get(Q).__webglTexture,0,Qt(L)):(z===r.TEXTURE_2D||z>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&z<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,vt,z,n.get(Q).__webglTexture,O),e.bindFramebuffer(r.FRAMEBUFFER,null)}function Vt(H,L,Q){if(r.bindRenderbuffer(r.RENDERBUFFER,H),L.depthBuffer&&!L.stencilBuffer){let vt=o===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(Q||Lt(L)){let z=L.depthTexture;z&&z.isDepthTexture&&(z.type===hs?vt=r.DEPTH_COMPONENT32F:z.type===zi&&(vt=r.DEPTH_COMPONENT24));let O=Qt(L);Lt(L)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,O,vt,L.width,L.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,O,vt,L.width,L.height)}else r.renderbufferStorage(r.RENDERBUFFER,vt,L.width,L.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,H)}else if(L.depthBuffer&&L.stencilBuffer){let vt=Qt(L);Q&&Lt(L)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,vt,r.DEPTH24_STENCIL8,L.width,L.height):Lt(L)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,vt,r.DEPTH24_STENCIL8,L.width,L.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,L.width,L.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,H)}else{let vt=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let z=0;z<vt.length;z++){let O=vt[z],J=s.convert(O.format,O.colorSpace),W=s.convert(O.type),et=_(O.internalFormat,J,W,O.colorSpace),st=Qt(L);Q&&Lt(L)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,st,et,L.width,L.height):Lt(L)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,st,et,L.width,L.height):r.renderbufferStorage(r.RENDERBUFFER,et,L.width,L.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Yt(H,L){if(L&&L.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,H),!(L.depthTexture&&L.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(L.depthTexture).__webglTexture||L.depthTexture.image.width!==L.width||L.depthTexture.image.height!==L.height)&&(L.depthTexture.image.width=L.width,L.depthTexture.image.height=L.height,L.depthTexture.needsUpdate=!0),P(L.depthTexture,0);let vt=n.get(L.depthTexture).__webglTexture,z=Qt(L);if(L.depthTexture.format===mr)Lt(L)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,vt,0,z):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,vt,0);else if(L.depthTexture.format===fa)Lt(L)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,vt,0,z):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,vt,0);else throw new Error("Unknown depthTexture format")}function kt(H){let L=n.get(H),Q=H.isWebGLCubeRenderTarget===!0;if(H.depthTexture&&!L.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");Yt(L.__webglFramebuffer,H)}else if(Q){L.__webglDepthbuffer=[];for(let vt=0;vt<6;vt++)e.bindFramebuffer(r.FRAMEBUFFER,L.__webglFramebuffer[vt]),L.__webglDepthbuffer[vt]=r.createRenderbuffer(),Vt(L.__webglDepthbuffer[vt],H,!1)}else e.bindFramebuffer(r.FRAMEBUFFER,L.__webglFramebuffer),L.__webglDepthbuffer=r.createRenderbuffer(),Vt(L.__webglDepthbuffer,H,!1);e.bindFramebuffer(r.FRAMEBUFFER,null)}function ae(H,L,Q){let vt=n.get(H);L!==void 0&&St(vt.__webglFramebuffer,H,H.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Q!==void 0&&kt(H)}function Z(H){let L=H.texture,Q=n.get(H),vt=n.get(L);H.addEventListener("dispose",C),H.isWebGLMultipleRenderTargets!==!0&&(vt.__webglTexture===void 0&&(vt.__webglTexture=r.createTexture()),vt.__version=L.version,a.memory.textures++);let z=H.isWebGLCubeRenderTarget===!0,O=H.isWebGLMultipleRenderTargets===!0,J=m(H)||o;if(z){Q.__webglFramebuffer=[];for(let W=0;W<6;W++)if(o&&L.mipmaps&&L.mipmaps.length>0){Q.__webglFramebuffer[W]=[];for(let et=0;et<L.mipmaps.length;et++)Q.__webglFramebuffer[W][et]=r.createFramebuffer()}else Q.__webglFramebuffer[W]=r.createFramebuffer()}else{if(o&&L.mipmaps&&L.mipmaps.length>0){Q.__webglFramebuffer=[];for(let W=0;W<L.mipmaps.length;W++)Q.__webglFramebuffer[W]=r.createFramebuffer()}else Q.__webglFramebuffer=r.createFramebuffer();if(O)if(i.drawBuffers){let W=H.texture;for(let et=0,st=W.length;et<st;et++){let xt=n.get(W[et]);xt.__webglTexture===void 0&&(xt.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&H.samples>0&&Lt(H)===!1){let W=O?L:[L];Q.__webglMultisampledFramebuffer=r.createFramebuffer(),Q.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let et=0;et<W.length;et++){let st=W[et];Q.__webglColorRenderbuffer[et]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Q.__webglColorRenderbuffer[et]);let xt=s.convert(st.format,st.colorSpace),Y=s.convert(st.type),Et=_(st.internalFormat,xt,Y,st.colorSpace,H.isXRRenderTarget===!0),lt=Qt(H);r.renderbufferStorageMultisample(r.RENDERBUFFER,lt,Et,H.width,H.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+et,r.RENDERBUFFER,Q.__webglColorRenderbuffer[et])}r.bindRenderbuffer(r.RENDERBUFFER,null),H.depthBuffer&&(Q.__webglDepthRenderbuffer=r.createRenderbuffer(),Vt(Q.__webglDepthRenderbuffer,H,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(z){e.bindTexture(r.TEXTURE_CUBE_MAP,vt.__webglTexture),G(r.TEXTURE_CUBE_MAP,L,J);for(let W=0;W<6;W++)if(o&&L.mipmaps&&L.mipmaps.length>0)for(let et=0;et<L.mipmaps.length;et++)St(Q.__webglFramebuffer[W][et],H,L,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+W,et);else St(Q.__webglFramebuffer[W],H,L,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+W,0);x(L,J)&&y(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(O){let W=H.texture;for(let et=0,st=W.length;et<st;et++){let xt=W[et],Y=n.get(xt);e.bindTexture(r.TEXTURE_2D,Y.__webglTexture),G(r.TEXTURE_2D,xt,J),St(Q.__webglFramebuffer,H,xt,r.COLOR_ATTACHMENT0+et,r.TEXTURE_2D,0),x(xt,J)&&y(r.TEXTURE_2D)}e.unbindTexture()}else{let W=r.TEXTURE_2D;if((H.isWebGL3DRenderTarget||H.isWebGLArrayRenderTarget)&&(o?W=H.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(W,vt.__webglTexture),G(W,L,J),o&&L.mipmaps&&L.mipmaps.length>0)for(let et=0;et<L.mipmaps.length;et++)St(Q.__webglFramebuffer[et],H,L,r.COLOR_ATTACHMENT0,W,et);else St(Q.__webglFramebuffer,H,L,r.COLOR_ATTACHMENT0,W,0);x(L,J)&&y(W),e.unbindTexture()}H.depthBuffer&&kt(H)}function wn(H){let L=m(H)||o,Q=H.isWebGLMultipleRenderTargets===!0?H.texture:[H.texture];for(let vt=0,z=Q.length;vt<z;vt++){let O=Q[vt];if(x(O,L)){let J=H.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,W=n.get(O).__webglTexture;e.bindTexture(J,W),y(J),e.unbindTexture()}}}function Ot(H){if(o&&H.samples>0&&Lt(H)===!1){let L=H.isWebGLMultipleRenderTargets?H.texture:[H.texture],Q=H.width,vt=H.height,z=r.COLOR_BUFFER_BIT,O=[],J=H.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,W=n.get(H),et=H.isWebGLMultipleRenderTargets===!0;if(et)for(let st=0;st<L.length;st++)e.bindFramebuffer(r.FRAMEBUFFER,W.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+st,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,W.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+st,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,W.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,W.__webglFramebuffer);for(let st=0;st<L.length;st++){O.push(r.COLOR_ATTACHMENT0+st),H.depthBuffer&&O.push(J);let xt=W.__ignoreDepthValues!==void 0?W.__ignoreDepthValues:!1;if(xt===!1&&(H.depthBuffer&&(z|=r.DEPTH_BUFFER_BIT),H.stencilBuffer&&(z|=r.STENCIL_BUFFER_BIT)),et&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,W.__webglColorRenderbuffer[st]),xt===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[J]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[J])),et){let Y=n.get(L[st]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Y,0)}r.blitFramebuffer(0,0,Q,vt,0,0,Q,vt,z,r.NEAREST),l&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,O)}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),et)for(let st=0;st<L.length;st++){e.bindFramebuffer(r.FRAMEBUFFER,W.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+st,r.RENDERBUFFER,W.__webglColorRenderbuffer[st]);let xt=n.get(L[st]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,W.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+st,r.TEXTURE_2D,xt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,W.__webglMultisampledFramebuffer)}}function Qt(H){return Math.min(i.maxSamples,H.samples)}function Lt(H){let L=n.get(H);return o&&H.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&L.__useRenderToTexture!==!1}function be(H){let L=a.render.frame;h.get(H)!==L&&(h.set(H,L),H.update())}function te(H,L){let Q=H.colorSpace,vt=H.format,z=H.type;return H.isCompressedTexture===!0||H.isVideoTexture===!0||H.format===Hu||Q!==dn&&Q!==kn&&(Ee.getTransfer(Q)===Ve?o===!1?t.has("EXT_sRGB")===!0&&vt===pi?(H.format=Hu,H.minFilter=hn,H.generateMipmaps=!1):L=Zc.sRGBToLinear(L):(vt!==pi||z!==Oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),L}this.allocateTextureUnit=R,this.resetTextureUnits=k,this.setTexture2D=P,this.setTexture2DArray=N,this.setTexture3D=U,this.setTextureCube=V,this.rebindTextures=ae,this.setupRenderTarget=Z,this.updateRenderTargetMipmap=wn,this.updateMultisampleRenderTarget=Ot,this.setupDepthRenderbuffer=kt,this.setupFrameBufferTexture=St,this.useMultisampledRTT=Lt}function ME(r,t,e){let n=e.isWebGL2;function i(s,a=kn){let o,c=Ee.getTransfer(a);if(s===Oi)return r.UNSIGNED_BYTE;if(s===T0)return r.UNSIGNED_SHORT_4_4_4_4;if(s===S0)return r.UNSIGNED_SHORT_5_5_5_1;if(s===eb)return r.BYTE;if(s===nb)return r.SHORT;if(s===Cf)return r.UNSIGNED_SHORT;if(s===w0)return r.INT;if(s===zi)return r.UNSIGNED_INT;if(s===hs)return r.FLOAT;if(s===Zn)return n?r.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===ib)return r.ALPHA;if(s===pi)return r.RGBA;if(s===sb)return r.LUMINANCE;if(s===rb)return r.LUMINANCE_ALPHA;if(s===mr)return r.DEPTH_COMPONENT;if(s===fa)return r.DEPTH_STENCIL;if(s===Hu)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===ab)return r.RED;if(s===A0)return r.RED_INTEGER;if(s===ob)return r.RG;if(s===R0)return r.RG_INTEGER;if(s===C0)return r.RGBA_INTEGER;if(s===jh||s===Kh||s===Yh||s===Jh)if(c===Ve)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===jh)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Kh)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Yh)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Jh)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===jh)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Kh)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Yh)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Jh)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Bp||s===Gp||s===Vp||s===Wp)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Bp)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Gp)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Vp)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Wp)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===P0)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===qp||s===Xp)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(s===qp)return c===Ve?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Xp)return c===Ve?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===jp||s===Kp||s===Yp||s===Jp||s===Zp||s===Qp||s===$p||s===tm||s===em||s===nm||s===im||s===sm||s===rm||s===am)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(s===jp)return c===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Kp)return c===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Yp)return c===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Jp)return c===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Zp)return c===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Qp)return c===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===$p)return c===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===tm)return c===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===em)return c===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===nm)return c===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===im)return c===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===sm)return c===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===rm)return c===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===am)return c===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Zh||s===om||s===cm)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(s===Zh)return c===Ve?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===om)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===cm)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===cb||s===lm||s===hm||s===um)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(s===Zh)return o.COMPRESSED_RED_RGTC1_EXT;if(s===lm)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===hm)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===um)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===pr?n?r.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}var Ku=class extends We{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Dt=class extends Ue{constructor(){super(),this.isGroup=!0,this.type="Group"}},EE={type:"move"},go=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Dt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Dt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Dt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let v of t.hand.values()){let m=e.getJointPose(v,n),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,g=.005;l.inputState.pinching&&u>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(EE)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Dt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Yu=class extends fs{constructor(t,e){super();let n=this,i=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,f=null,u=null,d=null,g=null,v=e.getContextAttributes(),m=null,p=null,x=[],y=[],_=new ht,M=null,b=new We;b.layers.enable(1),b.viewport=new fe;let w=new We;w.layers.enable(2),w.viewport=new fe;let C=[b,w],E=new Ku;E.layers.enable(1),E.layers.enable(2);let S=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let $=x[G];return $===void 0&&($=new go,x[G]=$),$.getTargetRaySpace()},this.getControllerGrip=function(G){let $=x[G];return $===void 0&&($=new go,x[G]=$),$.getGripSpace()},this.getHand=function(G){let $=x[G];return $===void 0&&($=new go,x[G]=$),$.getHandSpace()};function D(G){let $=y.indexOf(G.inputSource);if($===-1)return;let gt=x[$];gt!==void 0&&(gt.update(G.inputSource,G.frame,l||a),gt.dispatchEvent({type:G.type,data:G.inputSource}))}function k(){i.removeEventListener("select",D),i.removeEventListener("selectstart",D),i.removeEventListener("selectend",D),i.removeEventListener("squeeze",D),i.removeEventListener("squeezestart",D),i.removeEventListener("squeezeend",D),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",R);for(let G=0;G<x.length;G++){let $=y[G];$!==null&&(y[G]=null,x[G].disconnect($))}S=null,I=null,t.setRenderTarget(m),d=null,u=null,f=null,i=null,p=null,at.stop(),n.isPresenting=!1,t.setPixelRatio(M),t.setSize(_.width,_.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(G){l=G},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(G){if(i=G,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",D),i.addEventListener("selectstart",D),i.addEventListener("selectend",D),i.addEventListener("squeeze",D),i.addEventListener("squeezestart",D),i.addEventListener("squeezeend",D),i.addEventListener("end",k),i.addEventListener("inputsourceschange",R),v.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(_),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let $={antialias:i.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,e,$),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),p=new _n(d.framebufferWidth,d.framebufferHeight,{format:pi,type:Oi,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil})}else{let $=null,gt=null,pt=null;v.depth&&(pt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,$=v.stencil?fa:mr,gt=v.stencil?pr:zi);let St={colorFormat:e.RGBA8,depthFormat:pt,scaleFactor:s};f=new XRWebGLBinding(i,e),u=f.createProjectionLayer(St),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),p=new _n(u.textureWidth,u.textureHeight,{format:pi,type:Oi,depthTexture:new va(u.textureWidth,u.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0});let Vt=t.properties.get(p);Vt.__ignoreDepthValues=u.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),at.setContext(i),at.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function R(G){for(let $=0;$<G.removed.length;$++){let gt=G.removed[$],pt=y.indexOf(gt);pt>=0&&(y[pt]=null,x[pt].disconnect(gt))}for(let $=0;$<G.added.length;$++){let gt=G.added[$],pt=y.indexOf(gt);if(pt===-1){for(let Vt=0;Vt<x.length;Vt++)if(Vt>=y.length){y.push(gt),pt=Vt;break}else if(y[Vt]===null){y[Vt]=gt,pt=Vt;break}if(pt===-1)break}let St=x[pt];St&&St.connect(gt)}}let A=new T,P=new T;function N(G,$,gt){A.setFromMatrixPosition($.matrixWorld),P.setFromMatrixPosition(gt.matrixWorld);let pt=A.distanceTo(P),St=$.projectionMatrix.elements,Vt=gt.projectionMatrix.elements,Yt=St[14]/(St[10]-1),kt=St[14]/(St[10]+1),ae=(St[9]+1)/St[5],Z=(St[9]-1)/St[5],wn=(St[8]-1)/St[0],Ot=(Vt[8]+1)/Vt[0],Qt=Yt*wn,Lt=Yt*Ot,be=pt/(-wn+Ot),te=be*-wn;$.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(te),G.translateZ(be),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();let H=Yt+be,L=kt+be,Q=Qt-te,vt=Lt+(pt-te),z=ae*kt/L*H,O=Z*kt/L*H;G.projectionMatrix.makePerspective(Q,vt,z,O,H,L),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function U(G,$){$===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices($.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(i===null)return;E.near=w.near=b.near=G.near,E.far=w.far=b.far=G.far,(S!==E.near||I!==E.far)&&(i.updateRenderState({depthNear:E.near,depthFar:E.far}),S=E.near,I=E.far);let $=G.parent,gt=E.cameras;U(E,$);for(let pt=0;pt<gt.length;pt++)U(gt[pt],$);gt.length===2?N(E,b,w):E.projectionMatrix.copy(b.projectionMatrix),V(G,E,$)};function V(G,$,gt){gt===null?G.matrix.copy($.matrixWorld):(G.matrix.copy(gt.matrixWorld),G.matrix.invert(),G.matrix.multiply($.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy($.projectionMatrix),G.projectionMatrixInverse.copy($.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=pa*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(u===null&&d===null))return c},this.setFoveation=function(G){c=G,u!==null&&(u.fixedFoveation=G),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=G)};let q=null;function j(G,$){if(h=$.getViewerPose(l||a),g=$,h!==null){let gt=h.views;d!==null&&(t.setRenderTargetFramebuffer(p,d.framebuffer),t.setRenderTarget(p));let pt=!1;gt.length!==E.cameras.length&&(E.cameras.length=0,pt=!0);for(let St=0;St<gt.length;St++){let Vt=gt[St],Yt=null;if(d!==null)Yt=d.getViewport(Vt);else{let ae=f.getViewSubImage(u,Vt);Yt=ae.viewport,St===0&&(t.setRenderTargetTextures(p,ae.colorTexture,u.ignoreDepthValues?void 0:ae.depthStencilTexture),t.setRenderTarget(p))}let kt=C[St];kt===void 0&&(kt=new We,kt.layers.enable(St),kt.viewport=new fe,C[St]=kt),kt.matrix.fromArray(Vt.transform.matrix),kt.matrix.decompose(kt.position,kt.quaternion,kt.scale),kt.projectionMatrix.fromArray(Vt.projectionMatrix),kt.projectionMatrixInverse.copy(kt.projectionMatrix).invert(),kt.viewport.set(Yt.x,Yt.y,Yt.width,Yt.height),St===0&&(E.matrix.copy(kt.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),pt===!0&&E.cameras.push(kt)}}for(let gt=0;gt<x.length;gt++){let pt=y[gt],St=x[gt];pt!==null&&St!==void 0&&St.update(pt,$,l||a)}q&&q(G,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),g=null}let at=new k0;at.setAnimationLoop(j),this.setAnimationLoop=function(G){q=G},this.dispose=function(){}}};function wE(r,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,N0(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,x,y,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),u(m,p),p.isMeshPhysicalMaterial&&d(m,p,_)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),v(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,x,y):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Tn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Tn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let x=t.get(p).envMap;if(x&&(m.envMap.value=x,m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let y=r._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*y,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,x,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Tn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){let x=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function TE(r,t,e,n){let i={},s={},a=[],o=e.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(x,y){let _=y.program;n.uniformBlockBinding(x,_)}function l(x,y){let _=i[x.id];_===void 0&&(g(x),_=h(x),i[x.id]=_,x.addEventListener("dispose",m));let M=y.program;n.updateUBOMapping(x,M);let b=t.render.frame;s[x.id]!==b&&(u(x),s[x.id]=b)}function h(x){let y=f();x.__bindingPointIndex=y;let _=r.createBuffer(),M=x.__size,b=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,_),r.bufferData(r.UNIFORM_BUFFER,M,b),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,_),_}function f(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){let y=i[x.id],_=x.uniforms,M=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let b=0,w=_.length;b<w;b++){let C=Array.isArray(_[b])?_[b]:[_[b]];for(let E=0,S=C.length;E<S;E++){let I=C[E];if(d(I,b,E,M)===!0){let D=I.__offset,k=Array.isArray(I.value)?I.value:[I.value],R=0;for(let A=0;A<k.length;A++){let P=k[A],N=v(P);typeof P=="number"||typeof P=="boolean"?(I.__data[0]=P,r.bufferSubData(r.UNIFORM_BUFFER,D+R,I.__data)):P.isMatrix3?(I.__data[0]=P.elements[0],I.__data[1]=P.elements[1],I.__data[2]=P.elements[2],I.__data[3]=0,I.__data[4]=P.elements[3],I.__data[5]=P.elements[4],I.__data[6]=P.elements[5],I.__data[7]=0,I.__data[8]=P.elements[6],I.__data[9]=P.elements[7],I.__data[10]=P.elements[8],I.__data[11]=0):(P.toArray(I.__data,R),R+=N.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,D,I.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(x,y,_,M){let b=x.value,w=y+"_"+_;if(M[w]===void 0)return typeof b=="number"||typeof b=="boolean"?M[w]=b:M[w]=b.clone(),!0;{let C=M[w];if(typeof b=="number"||typeof b=="boolean"){if(C!==b)return M[w]=b,!0}else if(C.equals(b)===!1)return C.copy(b),!0}return!1}function g(x){let y=x.uniforms,_=0,M=16;for(let w=0,C=y.length;w<C;w++){let E=Array.isArray(y[w])?y[w]:[y[w]];for(let S=0,I=E.length;S<I;S++){let D=E[S],k=Array.isArray(D.value)?D.value:[D.value];for(let R=0,A=k.length;R<A;R++){let P=k[R],N=v(P),U=_%M;U!==0&&M-U<N.boundary&&(_+=M-U),D.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=_,_+=N.storage}}}let b=_%M;return b>0&&(_+=M-b),x.__size=_,x.__cache={},this}function v(x){let y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function m(x){let y=x.target;y.removeEventListener("dispose",m);let _=a.indexOf(y.__bindingPointIndex);a.splice(_,1),r.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function p(){for(let x in i)r.deleteBuffer(i[x]);a=[],i={},s={}}return{bind:c,update:l,dispose:p}}var wo=class{constructor(t={}){let{canvas:e=Fb(),context:n=null,depth:i=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let u;n!==null?u=n.getContextAttributes().alpha:u=a;let d=new Uint32Array(4),g=new Int32Array(4),v=null,m=null,p=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=de,this._useLegacyLights=!1,this.toneMapping=Hs,this.toneMappingExposure=1;let y=this,_=!1,M=0,b=0,w=null,C=-1,E=null,S=new fe,I=new fe,D=null,k=new it(0),R=0,A=e.width,P=e.height,N=1,U=null,V=null,q=new fe(0,0,A,P),j=new fe(0,0,A,P),at=!1,G=new Mo,$=!1,gt=!1,pt=null,St=new wt,Vt=new ht,Yt=new T,kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ae(){return w===null?N:1}let Z=n;function wn(F,K){for(let nt=0;nt<F.length;nt++){let ot=F[nt],tt=e.getContext(ot,K);if(tt!==null)return tt}return null}try{let F={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r160"),e.addEventListener("webglcontextlost",ut,!1),e.addEventListener("webglcontextrestored",B,!1),e.addEventListener("webglcontextcreationerror",mt,!1),Z===null){let K=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&K.shift(),Z=wn(K,F),Z===null)throw wn(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&Z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),Z.getShaderPrecisionFormat===void 0&&(Z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(F){throw console.error("THREE.WebGLRenderer: "+F.message),F}let Ot,Qt,Lt,be,te,H,L,Q,vt,z,O,J,W,et,st,xt,Y,Et,lt,dt,ft,ct,Tt,jt;function Kt(){Ot=new W_(Z),Qt=new U_(Z,Ot,t),Ot.init(Qt),ct=new ME(Z,Ot,Qt),Lt=new yE(Z,Ot,Qt),be=new j_(Z),te=new cE,H=new _E(Z,Ot,Lt,te,Qt,ct,be),L=new O_(y),Q=new V_(y),vt=new ey(Z,Qt),Tt=new N_(Z,Ot,vt,Qt),z=new q_(Z,vt,be,Tt),O=new Z_(Z,z,vt,be),lt=new J_(Z,Qt,H),xt=new z_(te),J=new oE(y,L,Q,Ot,Qt,Tt,xt),W=new wE(y,te),et=new hE,st=new gE(Ot,Qt),Et=new H_(y,L,Q,Lt,O,u,c),Y=new bE(y,O,Qt),jt=new TE(Z,be,Qt,Lt),dt=new k_(Z,Ot,be,Qt),ft=new X_(Z,Ot,be,Qt),be.programs=J.programs,y.capabilities=Qt,y.extensions=Ot,y.properties=te,y.renderLists=et,y.shadowMap=Y,y.state=Lt,y.info=be}Kt();let Ft=new Yu(y,Z);this.xr=Ft,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){let F=Ot.get("WEBGL_lose_context");F&&F.loseContext()},this.forceContextRestore=function(){let F=Ot.get("WEBGL_lose_context");F&&F.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(F){F!==void 0&&(N=F,this.setSize(A,P,!1))},this.getSize=function(F){return F.set(A,P)},this.setSize=function(F,K,nt=!0){if(Ft.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}A=F,P=K,e.width=Math.floor(F*N),e.height=Math.floor(K*N),nt===!0&&(e.style.width=F+"px",e.style.height=K+"px"),this.setViewport(0,0,F,K)},this.getDrawingBufferSize=function(F){return F.set(A*N,P*N).floor()},this.setDrawingBufferSize=function(F,K,nt){A=F,P=K,N=nt,e.width=Math.floor(F*nt),e.height=Math.floor(K*nt),this.setViewport(0,0,F,K)},this.getCurrentViewport=function(F){return F.copy(S)},this.getViewport=function(F){return F.copy(q)},this.setViewport=function(F,K,nt,ot){F.isVector4?q.set(F.x,F.y,F.z,F.w):q.set(F,K,nt,ot),Lt.viewport(S.copy(q).multiplyScalar(N).floor())},this.getScissor=function(F){return F.copy(j)},this.setScissor=function(F,K,nt,ot){F.isVector4?j.set(F.x,F.y,F.z,F.w):j.set(F,K,nt,ot),Lt.scissor(I.copy(j).multiplyScalar(N).floor())},this.getScissorTest=function(){return at},this.setScissorTest=function(F){Lt.setScissorTest(at=F)},this.setOpaqueSort=function(F){U=F},this.setTransparentSort=function(F){V=F},this.getClearColor=function(F){return F.copy(Et.getClearColor())},this.setClearColor=function(){Et.setClearColor.apply(Et,arguments)},this.getClearAlpha=function(){return Et.getClearAlpha()},this.setClearAlpha=function(){Et.setClearAlpha.apply(Et,arguments)},this.clear=function(F=!0,K=!0,nt=!0){let ot=0;if(F){let tt=!1;if(w!==null){let It=w.texture.format;tt=It===C0||It===R0||It===A0}if(tt){let It=w.texture.type,Bt=It===Oi||It===zi||It===Cf||It===pr||It===T0||It===S0,Jt=Et.getClearColor(),ee=Et.getClearAlpha(),le=Jt.r,ie=Jt.g,se=Jt.b;Bt?(d[0]=le,d[1]=ie,d[2]=se,d[3]=ee,Z.clearBufferuiv(Z.COLOR,0,d)):(g[0]=le,g[1]=ie,g[2]=se,g[3]=ee,Z.clearBufferiv(Z.COLOR,0,g))}else ot|=Z.COLOR_BUFFER_BIT}K&&(ot|=Z.DEPTH_BUFFER_BIT),nt&&(ot|=Z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ut,!1),e.removeEventListener("webglcontextrestored",B,!1),e.removeEventListener("webglcontextcreationerror",mt,!1),et.dispose(),st.dispose(),te.dispose(),L.dispose(),Q.dispose(),O.dispose(),Tt.dispose(),jt.dispose(),J.dispose(),Ft.dispose(),Ft.removeEventListener("sessionstart",Fe),Ft.removeEventListener("sessionend",Pe),pt&&(pt.dispose(),pt=null),Zt.stop()};function ut(F){F.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function B(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;let F=be.autoReset,K=Y.enabled,nt=Y.autoUpdate,ot=Y.needsUpdate,tt=Y.type;Kt(),be.autoReset=F,Y.enabled=K,Y.autoUpdate=nt,Y.needsUpdate=ot,Y.type=tt}function mt(F){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",F.statusMessage)}function bt(F){let K=F.target;K.removeEventListener("dispose",bt),Wt(K)}function Wt(F){Ht(F),te.remove(F)}function Ht(F){let K=te.get(F).programs;K!==void 0&&(K.forEach(function(nt){J.releaseProgram(nt)}),F.isShaderMaterial&&J.releaseShaderCache(F))}this.renderBufferDirect=function(F,K,nt,ot,tt,It){K===null&&(K=kt);let Bt=tt.isMesh&&tt.matrixWorld.determinant()<0,Jt=_x(F,K,nt,ot,tt);Lt.setMaterial(ot,Bt);let ee=nt.index,le=1;if(ot.wireframe===!0){if(ee=z.getWireframeAttribute(nt),ee===void 0)return;le=2}let ie=nt.drawRange,se=nt.attributes.position,rn=ie.start*le,ei=(ie.start+ie.count)*le;It!==null&&(rn=Math.max(rn,It.start*le),ei=Math.min(ei,(It.start+It.count)*le)),ee!==null?(rn=Math.max(rn,0),ei=Math.min(ei,ee.count)):se!=null&&(rn=Math.max(rn,0),ei=Math.min(ei,se.count));let bn=ei-rn;if(bn<0||bn===1/0)return;Tt.setup(tt,ot,Jt,nt,ee);let es,Je=dt;if(ee!==null&&(es=vt.get(ee),Je=ft,Je.setIndex(es)),tt.isMesh)ot.wireframe===!0?(Lt.setLineWidth(ot.wireframeLinewidth*ae()),Je.setMode(Z.LINES)):Je.setMode(Z.TRIANGLES);else if(tt.isLine){let he=ot.linewidth;he===void 0&&(he=1),Lt.setLineWidth(he*ae()),tt.isLineSegments?Je.setMode(Z.LINES):tt.isLineLoop?Je.setMode(Z.LINE_LOOP):Je.setMode(Z.LINE_STRIP)}else tt.isPoints?Je.setMode(Z.POINTS):tt.isSprite&&Je.setMode(Z.TRIANGLES);if(tt.isBatchedMesh)Je.renderMultiDraw(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount);else if(tt.isInstancedMesh)Je.renderInstances(rn,bn,tt.count);else if(nt.isInstancedBufferGeometry){let he=nt._maxInstanceCount!==void 0?nt._maxInstanceCount:1/0,Vh=Math.min(nt.instanceCount,he);Je.renderInstances(rn,bn,Vh)}else Je.render(rn,bn)};function _e(F,K,nt){F.transparent===!0&&F.side===Me&&F.forceSinglePass===!1?(F.side=Tn,F.needsUpdate=!0,Ni(F,K,nt),F.side=Bi,F.needsUpdate=!0,Ni(F,K,nt),F.side=Me):Ni(F,K,nt)}this.compile=function(F,K,nt=null){nt===null&&(nt=F),m=st.get(nt),m.init(),x.push(m),nt.traverseVisible(function(tt){tt.isLight&&tt.layers.test(K.layers)&&(m.pushLight(tt),tt.castShadow&&m.pushShadow(tt))}),F!==nt&&F.traverseVisible(function(tt){tt.isLight&&tt.layers.test(K.layers)&&(m.pushLight(tt),tt.castShadow&&m.pushShadow(tt))}),m.setupLights(y._useLegacyLights);let ot=new Set;return F.traverse(function(tt){let It=tt.material;if(It)if(Array.isArray(It))for(let Bt=0;Bt<It.length;Bt++){let Jt=It[Bt];_e(Jt,nt,tt),ot.add(Jt)}else _e(It,nt,tt),ot.add(It)}),x.pop(),m=null,ot},this.compileAsync=function(F,K,nt=null){let ot=this.compile(F,K,nt);return new Promise(tt=>{function It(){if(ot.forEach(function(Bt){te.get(Bt).currentProgram.isReady()&&ot.delete(Bt)}),ot.size===0){tt(F);return}setTimeout(It,10)}Ot.get("KHR_parallel_shader_compile")!==null?It():setTimeout(It,10)})};let me=null;function ye(F){me&&me(F)}function Fe(){Zt.stop()}function Pe(){Zt.start()}let Zt=new k0;Zt.setAnimationLoop(ye),typeof self<"u"&&Zt.setContext(self),this.setAnimationLoop=function(F){me=F,Ft.setAnimationLoop(F),F===null?Zt.stop():Zt.start()},Ft.addEventListener("sessionstart",Fe),Ft.addEventListener("sessionend",Pe),this.render=function(F,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),Ft.enabled===!0&&Ft.isPresenting===!0&&(Ft.cameraAutoUpdate===!0&&Ft.updateCamera(K),K=Ft.getCamera()),F.isScene===!0&&F.onBeforeRender(y,F,K,w),m=st.get(F,x.length),m.init(),x.push(m),St.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),G.setFromProjectionMatrix(St),gt=this.localClippingEnabled,$=xt.init(this.clippingPlanes,gt),v=et.get(F,p.length),v.init(),p.push(v),ce(F,K,0,y.sortObjects),v.finish(),y.sortObjects===!0&&v.sort(U,V),this.info.render.frame++,$===!0&&xt.beginShadows();let nt=m.state.shadowsArray;if(Y.render(nt,F,K),$===!0&&xt.endShadows(),this.info.autoReset===!0&&this.info.reset(),Et.render(v,F),m.setupLights(y._useLegacyLights),K.isArrayCamera){let ot=K.cameras;for(let tt=0,It=ot.length;tt<It;tt++){let Bt=ot[tt];xn(v,F,Bt,Bt.viewport)}}else xn(v,F,K);w!==null&&(H.updateMultisampleRenderTarget(w),H.updateRenderTargetMipmap(w)),F.isScene===!0&&F.onAfterRender(y,F,K),Tt.resetDefaultState(),C=-1,E=null,x.pop(),x.length>0?m=x[x.length-1]:m=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function ce(F,K,nt,ot){if(F.visible===!1)return;if(F.layers.test(K.layers)){if(F.isGroup)nt=F.renderOrder;else if(F.isLOD)F.autoUpdate===!0&&F.update(K);else if(F.isLight)m.pushLight(F),F.castShadow&&m.pushShadow(F);else if(F.isSprite){if(!F.frustumCulled||G.intersectsSprite(F)){ot&&Yt.setFromMatrixPosition(F.matrixWorld).applyMatrix4(St);let Bt=O.update(F),Jt=F.material;Jt.visible&&v.push(F,Bt,Jt,nt,Yt.z,null)}}else if((F.isMesh||F.isLine||F.isPoints)&&(!F.frustumCulled||G.intersectsObject(F))){let Bt=O.update(F),Jt=F.material;if(ot&&(F.boundingSphere!==void 0?(F.boundingSphere===null&&F.computeBoundingSphere(),Yt.copy(F.boundingSphere.center)):(Bt.boundingSphere===null&&Bt.computeBoundingSphere(),Yt.copy(Bt.boundingSphere.center)),Yt.applyMatrix4(F.matrixWorld).applyMatrix4(St)),Array.isArray(Jt)){let ee=Bt.groups;for(let le=0,ie=ee.length;le<ie;le++){let se=ee[le],rn=Jt[se.materialIndex];rn&&rn.visible&&v.push(F,Bt,rn,nt,Yt.z,se)}}else Jt.visible&&v.push(F,Bt,Jt,nt,Yt.z,null)}}let It=F.children;for(let Bt=0,Jt=It.length;Bt<Jt;Bt++)ce(It[Bt],K,nt,ot)}function xn(F,K,nt,ot){let tt=F.opaque,It=F.transmissive,Bt=F.transparent;m.setupLightsView(nt),$===!0&&xt.setGlobalState(y.clippingPlanes,nt),It.length>0&&ts(tt,It,K,nt),ot&&Lt.viewport(S.copy(ot)),tt.length>0&&Dn(tt,K,nt),It.length>0&&Dn(It,K,nt),Bt.length>0&&Dn(Bt,K,nt),Lt.buffers.depth.setTest(!0),Lt.buffers.depth.setMask(!0),Lt.buffers.color.setMask(!0),Lt.setPolygonOffset(!1)}function ts(F,K,nt,ot){if((nt.isScene===!0?nt.overrideMaterial:null)!==null)return;let It=Qt.isWebGL2;pt===null&&(pt=new _n(1,1,{generateMipmaps:!0,type:Ot.has("EXT_color_buffer_half_float")?Zn:Oi,minFilter:Gi,samples:It?4:0})),y.getDrawingBufferSize(Vt),It?pt.setSize(Vt.x,Vt.y):pt.setSize(Jc(Vt.x),Jc(Vt.y));let Bt=y.getRenderTarget();y.setRenderTarget(pt),y.getClearColor(k),R=y.getClearAlpha(),R<1&&y.setClearColor(16777215,.5),y.clear();let Jt=y.toneMapping;y.toneMapping=Hs,Dn(F,nt,ot),H.updateMultisampleRenderTarget(pt),H.updateRenderTargetMipmap(pt);let ee=!1;for(let le=0,ie=K.length;le<ie;le++){let se=K[le],rn=se.object,ei=se.geometry,bn=se.material,es=se.group;if(bn.side===Me&&rn.layers.test(ot.layers)){let Je=bn.side;bn.side=Tn,bn.needsUpdate=!0,Hr(rn,nt,ot,ei,bn,es),bn.side=Je,bn.needsUpdate=!0,ee=!0}}ee===!0&&(H.updateMultisampleRenderTarget(pt),H.updateRenderTargetMipmap(pt)),y.setRenderTarget(Bt),y.setClearColor(k,R),y.toneMapping=Jt}function Dn(F,K,nt){let ot=K.isScene===!0?K.overrideMaterial:null;for(let tt=0,It=F.length;tt<It;tt++){let Bt=F[tt],Jt=Bt.object,ee=Bt.geometry,le=ot===null?Bt.material:ot,ie=Bt.group;Jt.layers.test(nt.layers)&&Hr(Jt,K,nt,ee,le,ie)}}function Hr(F,K,nt,ot,tt,It){F.onBeforeRender(y,K,nt,ot,tt,It),F.modelViewMatrix.multiplyMatrices(nt.matrixWorldInverse,F.matrixWorld),F.normalMatrix.getNormalMatrix(F.modelViewMatrix),tt.onBeforeRender(y,K,nt,ot,F,It),tt.transparent===!0&&tt.side===Me&&tt.forceSinglePass===!1?(tt.side=Tn,tt.needsUpdate=!0,y.renderBufferDirect(nt,K,ot,tt,F,It),tt.side=Bi,tt.needsUpdate=!0,y.renderBufferDirect(nt,K,ot,tt,F,It),tt.side=Me):y.renderBufferDirect(nt,K,ot,tt,F,It),F.onAfterRender(y,K,nt,ot,tt,It)}function Ni(F,K,nt){K.isScene!==!0&&(K=kt);let ot=te.get(F),tt=m.state.lights,It=m.state.shadowsArray,Bt=tt.state.version,Jt=J.getParameters(F,tt.state,It,K,nt),ee=J.getProgramCacheKey(Jt),le=ot.programs;ot.environment=F.isMeshStandardMaterial?K.environment:null,ot.fog=K.fog,ot.envMap=(F.isMeshStandardMaterial?Q:L).get(F.envMap||ot.environment),le===void 0&&(F.addEventListener("dispose",bt),le=new Map,ot.programs=le);let ie=le.get(ee);if(ie!==void 0){if(ot.currentProgram===ie&&ot.lightsStateVersion===Bt)return Ip(F,Jt),ie}else Jt.uniforms=J.getUniforms(F),F.onBuild(nt,Jt,y),F.onBeforeCompile(Jt,y),ie=J.acquireProgram(Jt,ee),le.set(ee,ie),ot.uniforms=Jt.uniforms;let se=ot.uniforms;return(!F.isShaderMaterial&&!F.isRawShaderMaterial||F.clipping===!0)&&(se.clippingPlanes=xt.uniform),Ip(F,Jt),ot.needsLights=Ex(F),ot.lightsStateVersion=Bt,ot.needsLights&&(se.ambientLightColor.value=tt.state.ambient,se.lightProbe.value=tt.state.probe,se.directionalLights.value=tt.state.directional,se.directionalLightShadows.value=tt.state.directionalShadow,se.spotLights.value=tt.state.spot,se.spotLightShadows.value=tt.state.spotShadow,se.rectAreaLights.value=tt.state.rectArea,se.ltc_1.value=tt.state.rectAreaLTC1,se.ltc_2.value=tt.state.rectAreaLTC2,se.pointLights.value=tt.state.point,se.pointLightShadows.value=tt.state.pointShadow,se.hemisphereLights.value=tt.state.hemi,se.directionalShadowMap.value=tt.state.directionalShadowMap,se.directionalShadowMatrix.value=tt.state.directionalShadowMatrix,se.spotShadowMap.value=tt.state.spotShadowMap,se.spotLightMatrix.value=tt.state.spotLightMatrix,se.spotLightMap.value=tt.state.spotLightMap,se.pointShadowMap.value=tt.state.pointShadowMap,se.pointShadowMatrix.value=tt.state.pointShadowMatrix),ot.currentProgram=ie,ot.uniformsList=null,ie}function $a(F){if(F.uniformsList===null){let K=F.currentProgram.getUniforms();F.uniformsList=la.seqWithValue(K.seq,F.uniforms)}return F.uniformsList}function Ip(F,K){let nt=te.get(F);nt.outputColorSpace=K.outputColorSpace,nt.batching=K.batching,nt.instancing=K.instancing,nt.instancingColor=K.instancingColor,nt.skinning=K.skinning,nt.morphTargets=K.morphTargets,nt.morphNormals=K.morphNormals,nt.morphColors=K.morphColors,nt.morphTargetsCount=K.morphTargetsCount,nt.numClippingPlanes=K.numClippingPlanes,nt.numIntersection=K.numClipIntersection,nt.vertexAlphas=K.vertexAlphas,nt.vertexTangents=K.vertexTangents,nt.toneMapping=K.toneMapping}function _x(F,K,nt,ot,tt){K.isScene!==!0&&(K=kt),H.resetTextureUnits();let It=K.fog,Bt=ot.isMeshStandardMaterial?K.environment:null,Jt=w===null?y.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:dn,ee=(ot.isMeshStandardMaterial?Q:L).get(ot.envMap||Bt),le=ot.vertexColors===!0&&!!nt.attributes.color&&nt.attributes.color.itemSize===4,ie=!!nt.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),se=!!nt.morphAttributes.position,rn=!!nt.morphAttributes.normal,ei=!!nt.morphAttributes.color,bn=Hs;ot.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(bn=y.toneMapping);let es=nt.morphAttributes.position||nt.morphAttributes.normal||nt.morphAttributes.color,Je=es!==void 0?es.length:0,he=te.get(ot),Vh=m.state.lights;if($===!0&&(gt===!0||F!==E)){let fi=F===E&&ot.id===C;xt.setState(ot,F,fi)}let tn=!1;ot.version===he.__version?(he.needsLights&&he.lightsStateVersion!==Vh.state.version||he.outputColorSpace!==Jt||tt.isBatchedMesh&&he.batching===!1||!tt.isBatchedMesh&&he.batching===!0||tt.isInstancedMesh&&he.instancing===!1||!tt.isInstancedMesh&&he.instancing===!0||tt.isSkinnedMesh&&he.skinning===!1||!tt.isSkinnedMesh&&he.skinning===!0||tt.isInstancedMesh&&he.instancingColor===!0&&tt.instanceColor===null||tt.isInstancedMesh&&he.instancingColor===!1&&tt.instanceColor!==null||he.envMap!==ee||ot.fog===!0&&he.fog!==It||he.numClippingPlanes!==void 0&&(he.numClippingPlanes!==xt.numPlanes||he.numIntersection!==xt.numIntersection)||he.vertexAlphas!==le||he.vertexTangents!==ie||he.morphTargets!==se||he.morphNormals!==rn||he.morphColors!==ei||he.toneMapping!==bn||Qt.isWebGL2===!0&&he.morphTargetsCount!==Je)&&(tn=!0):(tn=!0,he.__version=ot.version);let rr=he.currentProgram;tn===!0&&(rr=Ni(ot,K,tt));let Dp=!1,to=!1,Wh=!1,Fn=rr.getUniforms(),ar=he.uniforms;if(Lt.useProgram(rr.program)&&(Dp=!0,to=!0,Wh=!0),ot.id!==C&&(C=ot.id,to=!0),Dp||E!==F){Fn.setValue(Z,"projectionMatrix",F.projectionMatrix),Fn.setValue(Z,"viewMatrix",F.matrixWorldInverse);let fi=Fn.map.cameraPosition;fi!==void 0&&fi.setValue(Z,Yt.setFromMatrixPosition(F.matrixWorld)),Qt.logarithmicDepthBuffer&&Fn.setValue(Z,"logDepthBufFC",2/(Math.log(F.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&Fn.setValue(Z,"isOrthographic",F.isOrthographicCamera===!0),E!==F&&(E=F,to=!0,Wh=!0)}if(tt.isSkinnedMesh){Fn.setOptional(Z,tt,"bindMatrix"),Fn.setOptional(Z,tt,"bindMatrixInverse");let fi=tt.skeleton;fi&&(Qt.floatVertexTextures?(fi.boneTexture===null&&fi.computeBoneTexture(),Fn.setValue(Z,"boneTexture",fi.boneTexture,H)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}tt.isBatchedMesh&&(Fn.setOptional(Z,tt,"batchingTexture"),Fn.setValue(Z,"batchingTexture",tt._matricesTexture,H));let qh=nt.morphAttributes;if((qh.position!==void 0||qh.normal!==void 0||qh.color!==void 0&&Qt.isWebGL2===!0)&&lt.update(tt,nt,rr),(to||he.receiveShadow!==tt.receiveShadow)&&(he.receiveShadow=tt.receiveShadow,Fn.setValue(Z,"receiveShadow",tt.receiveShadow)),ot.isMeshGouraudMaterial&&ot.envMap!==null&&(ar.envMap.value=ee,ar.flipEnvMap.value=ee.isCubeTexture&&ee.isRenderTargetTexture===!1?-1:1),to&&(Fn.setValue(Z,"toneMappingExposure",y.toneMappingExposure),he.needsLights&&Mx(ar,Wh),It&&ot.fog===!0&&W.refreshFogUniforms(ar,It),W.refreshMaterialUniforms(ar,ot,N,P,pt),la.upload(Z,$a(he),ar,H)),ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(la.upload(Z,$a(he),ar,H),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&Fn.setValue(Z,"center",tt.center),Fn.setValue(Z,"modelViewMatrix",tt.modelViewMatrix),Fn.setValue(Z,"normalMatrix",tt.normalMatrix),Fn.setValue(Z,"modelMatrix",tt.matrixWorld),ot.isShaderMaterial||ot.isRawShaderMaterial){let fi=ot.uniformsGroups;for(let Xh=0,wx=fi.length;Xh<wx;Xh++)if(Qt.isWebGL2){let Fp=fi[Xh];jt.update(Fp,rr),jt.bind(Fp,rr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return rr}function Mx(F,K){F.ambientLightColor.needsUpdate=K,F.lightProbe.needsUpdate=K,F.directionalLights.needsUpdate=K,F.directionalLightShadows.needsUpdate=K,F.pointLights.needsUpdate=K,F.pointLightShadows.needsUpdate=K,F.spotLights.needsUpdate=K,F.spotLightShadows.needsUpdate=K,F.rectAreaLights.needsUpdate=K,F.hemisphereLights.needsUpdate=K}function Ex(F){return F.isMeshLambertMaterial||F.isMeshToonMaterial||F.isMeshPhongMaterial||F.isMeshStandardMaterial||F.isShadowMaterial||F.isShaderMaterial&&F.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(F,K,nt){te.get(F.texture).__webglTexture=K,te.get(F.depthTexture).__webglTexture=nt;let ot=te.get(F);ot.__hasExternalTextures=!0,ot.__hasExternalTextures&&(ot.__autoAllocateDepthBuffer=nt===void 0,ot.__autoAllocateDepthBuffer||Ot.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ot.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(F,K){let nt=te.get(F);nt.__webglFramebuffer=K,nt.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(F,K=0,nt=0){w=F,M=K,b=nt;let ot=!0,tt=null,It=!1,Bt=!1;if(F){let ee=te.get(F);ee.__useDefaultFramebuffer!==void 0?(Lt.bindFramebuffer(Z.FRAMEBUFFER,null),ot=!1):ee.__webglFramebuffer===void 0?H.setupRenderTarget(F):ee.__hasExternalTextures&&H.rebindTextures(F,te.get(F.texture).__webglTexture,te.get(F.depthTexture).__webglTexture);let le=F.texture;(le.isData3DTexture||le.isDataArrayTexture||le.isCompressedArrayTexture)&&(Bt=!0);let ie=te.get(F).__webglFramebuffer;F.isWebGLCubeRenderTarget?(Array.isArray(ie[K])?tt=ie[K][nt]:tt=ie[K],It=!0):Qt.isWebGL2&&F.samples>0&&H.useMultisampledRTT(F)===!1?tt=te.get(F).__webglMultisampledFramebuffer:Array.isArray(ie)?tt=ie[nt]:tt=ie,S.copy(F.viewport),I.copy(F.scissor),D=F.scissorTest}else S.copy(q).multiplyScalar(N).floor(),I.copy(j).multiplyScalar(N).floor(),D=at;if(Lt.bindFramebuffer(Z.FRAMEBUFFER,tt)&&Qt.drawBuffers&&ot&&Lt.drawBuffers(F,tt),Lt.viewport(S),Lt.scissor(I),Lt.setScissorTest(D),It){let ee=te.get(F.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_CUBE_MAP_POSITIVE_X+K,ee.__webglTexture,nt)}else if(Bt){let ee=te.get(F.texture),le=K||0;Z.framebufferTextureLayer(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,ee.__webglTexture,nt||0,le)}C=-1},this.readRenderTargetPixels=function(F,K,nt,ot,tt,It,Bt){if(!(F&&F.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Jt=te.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&Bt!==void 0&&(Jt=Jt[Bt]),Jt){Lt.bindFramebuffer(Z.FRAMEBUFFER,Jt);try{let ee=F.texture,le=ee.format,ie=ee.type;if(le!==pi&&ct.convert(le)!==Z.getParameter(Z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let se=ie===Zn&&(Ot.has("EXT_color_buffer_half_float")||Qt.isWebGL2&&Ot.has("EXT_color_buffer_float"));if(ie!==Oi&&ct.convert(ie)!==Z.getParameter(Z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ie===hs&&(Qt.isWebGL2||Ot.has("OES_texture_float")||Ot.has("WEBGL_color_buffer_float")))&&!se){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=F.width-ot&&nt>=0&&nt<=F.height-tt&&Z.readPixels(K,nt,ot,tt,ct.convert(le),ct.convert(ie),It)}finally{let ee=w!==null?te.get(w).__webglFramebuffer:null;Lt.bindFramebuffer(Z.FRAMEBUFFER,ee)}}},this.copyFramebufferToTexture=function(F,K,nt=0){let ot=Math.pow(2,-nt),tt=Math.floor(K.image.width*ot),It=Math.floor(K.image.height*ot);H.setTexture2D(K,0),Z.copyTexSubImage2D(Z.TEXTURE_2D,nt,0,0,F.x,F.y,tt,It),Lt.unbindTexture()},this.copyTextureToTexture=function(F,K,nt,ot=0){let tt=K.image.width,It=K.image.height,Bt=ct.convert(nt.format),Jt=ct.convert(nt.type);H.setTexture2D(nt,0),Z.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,nt.flipY),Z.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,nt.premultiplyAlpha),Z.pixelStorei(Z.UNPACK_ALIGNMENT,nt.unpackAlignment),K.isDataTexture?Z.texSubImage2D(Z.TEXTURE_2D,ot,F.x,F.y,tt,It,Bt,Jt,K.image.data):K.isCompressedTexture?Z.compressedTexSubImage2D(Z.TEXTURE_2D,ot,F.x,F.y,K.mipmaps[0].width,K.mipmaps[0].height,Bt,K.mipmaps[0].data):Z.texSubImage2D(Z.TEXTURE_2D,ot,F.x,F.y,Bt,Jt,K.image),ot===0&&nt.generateMipmaps&&Z.generateMipmap(Z.TEXTURE_2D),Lt.unbindTexture()},this.copyTextureToTexture3D=function(F,K,nt,ot,tt=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let It=F.max.x-F.min.x+1,Bt=F.max.y-F.min.y+1,Jt=F.max.z-F.min.z+1,ee=ct.convert(ot.format),le=ct.convert(ot.type),ie;if(ot.isData3DTexture)H.setTexture3D(ot,0),ie=Z.TEXTURE_3D;else if(ot.isDataArrayTexture||ot.isCompressedArrayTexture)H.setTexture2DArray(ot,0),ie=Z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Z.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,ot.flipY),Z.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ot.premultiplyAlpha),Z.pixelStorei(Z.UNPACK_ALIGNMENT,ot.unpackAlignment);let se=Z.getParameter(Z.UNPACK_ROW_LENGTH),rn=Z.getParameter(Z.UNPACK_IMAGE_HEIGHT),ei=Z.getParameter(Z.UNPACK_SKIP_PIXELS),bn=Z.getParameter(Z.UNPACK_SKIP_ROWS),es=Z.getParameter(Z.UNPACK_SKIP_IMAGES),Je=nt.isCompressedTexture?nt.mipmaps[tt]:nt.image;Z.pixelStorei(Z.UNPACK_ROW_LENGTH,Je.width),Z.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,Je.height),Z.pixelStorei(Z.UNPACK_SKIP_PIXELS,F.min.x),Z.pixelStorei(Z.UNPACK_SKIP_ROWS,F.min.y),Z.pixelStorei(Z.UNPACK_SKIP_IMAGES,F.min.z),nt.isDataTexture||nt.isData3DTexture?Z.texSubImage3D(ie,tt,K.x,K.y,K.z,It,Bt,Jt,ee,le,Je.data):nt.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Z.compressedTexSubImage3D(ie,tt,K.x,K.y,K.z,It,Bt,Jt,ee,Je.data)):Z.texSubImage3D(ie,tt,K.x,K.y,K.z,It,Bt,Jt,ee,le,Je),Z.pixelStorei(Z.UNPACK_ROW_LENGTH,se),Z.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,rn),Z.pixelStorei(Z.UNPACK_SKIP_PIXELS,ei),Z.pixelStorei(Z.UNPACK_SKIP_ROWS,bn),Z.pixelStorei(Z.UNPACK_SKIP_IMAGES,es),tt===0&&ot.generateMipmaps&&Z.generateMipmap(ie),Lt.unbindTexture()},this.initTexture=function(F){F.isCubeTexture?H.setTextureCube(F,0):F.isData3DTexture?H.setTexture3D(F,0):F.isDataArrayTexture||F.isCompressedArrayTexture?H.setTexture2DArray(F,0):H.setTexture2D(F,0),Lt.unbindTexture()},this.resetState=function(){M=0,b=0,w=null,Lt.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return us}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===Hf?"display-p3":"srgb",e.unpackColorSpace=Ee.workingColorSpace===_l?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===de?gr:I0}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===gr?de:dn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},Ju=class extends wo{};Ju.prototype.isWebGL1Renderer=!0;var sl=class r{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new it(t),this.density=e}clone(){return new r(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var ds=class extends Ue{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}},xa=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Fu,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Ri()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ri()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ri()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},qn=new T,br=class r{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)qn.fromBufferAttribute(this,e),qn.applyMatrix4(t),this.setXYZ(e,qn.x,qn.y,qn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)qn.fromBufferAttribute(this,e),qn.applyNormalMatrix(t),this.setXYZ(e,qn.x,qn.y,qn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)qn.fromBufferAttribute(this,e),qn.transformDirection(t),this.setXYZ(e,qn.x,qn.y,qn.z);return this}setX(t,e){return this.normalized&&(e=He(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=He(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=He(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=He(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Ui(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Ui(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Ui(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Ui(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=He(e,this.array),n=He(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=He(e,this.array),n=He(n,this.array),i=He(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=He(e,this.array),n=He(n,this.array),i=He(i,this.array),s=He(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new At(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new r(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Rn=class extends An{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new it(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Qr,ro=new T,$r=new T,ta=new T,ea=new ht,ao=new ht,V0=new wt,Dc=new T,oo=new T,Fc=new T,Qm=new ht,_u=new ht,$m=new ht,Un=class extends Ue{constructor(t=new Rn){if(super(),this.isSprite=!0,this.type="Sprite",Qr===void 0){Qr=new Rt;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new xa(e,5);Qr.setIndex([0,1,2,0,2,3]),Qr.setAttribute("position",new br(n,3,0,!1)),Qr.setAttribute("uv",new br(n,2,3,!1))}this.geometry=Qr,this.material=t,this.center=new ht(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),$r.setFromMatrixScale(this.matrixWorld),V0.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ta.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&$r.multiplyScalar(-ta.z);let n=this.material.rotation,i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));let a=this.center;Hc(Dc.set(-.5,-.5,0),ta,a,$r,i,s),Hc(oo.set(.5,-.5,0),ta,a,$r,i,s),Hc(Fc.set(.5,.5,0),ta,a,$r,i,s),Qm.set(0,0),_u.set(1,0),$m.set(1,1);let o=t.ray.intersectTriangle(Dc,oo,Fc,!1,ro);if(o===null&&(Hc(oo.set(-.5,.5,0),ta,a,$r,i,s),_u.set(0,1),o=t.ray.intersectTriangle(Dc,Fc,oo,!1,ro),o===null))return;let c=t.ray.origin.distanceTo(ro);c<t.near||c>t.far||e.push({distance:c,point:ro.clone(),uv:dr.getInterpolation(ro,Dc,oo,Fc,Qm,_u,$m,new ht),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Hc(r,t,e,n,i,s){ea.subVectors(r,e).addScalar(.5).multiply(n),i!==void 0?(ao.x=s*ea.x-i*ea.y,ao.y=i*ea.x+s*ea.y):ao.copy(ea),r.copy(t),r.x+=ao.x,r.y+=ao.y,r.applyMatrix4(V0)}var t0=new T,e0=new fe,n0=new fe,SE=new T,i0=new wt,Nc=new T,Mu=new ri,s0=new wt,Eu=new xr,rl=class extends Gt{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Op,this.bindMatrix=new wt,this.bindMatrixInverse=new wt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Qe),this.boundingBox.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Nc),this.boundingBox.expandByPoint(Nc)}computeBoundingSphere(){let t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ri),this.boundingSphere.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Nc),this.boundingSphere.expandByPoint(Nc)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Mu.copy(this.boundingSphere),Mu.applyMatrix4(i),t.ray.intersectsSphere(Mu)!==!1&&(s0.copy(i).invert(),Eu.copy(t.ray).applyMatrix4(s0),!(this.boundingBox!==null&&Eu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Eu)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let t=new fe,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);let s=1/t.manhattanLength();s!==1/0?t.multiplyScalar(s):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Op?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===tb?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){let n=this.skeleton,i=this.geometry;e0.fromBufferAttribute(i.attributes.skinIndex,t),n0.fromBufferAttribute(i.attributes.skinWeight,t),t0.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let s=0;s<4;s++){let a=n0.getComponent(s);if(a!==0){let o=e0.getComponent(s);i0.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),e.addScaledVector(SE.copy(t0).applyMatrix4(i0),a)}}return e.applyMatrix4(this.bindMatrixInverse)}boneTransform(t,e){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(t,e)}},To=class extends Ue{constructor(){super(),this.isBone=!0,this.type="Bone"}},Zu=class extends Sn{constructor(t=null,e=1,n=1,i,s,a,o,c,l=an,h=an,f,u){super(null,a,o,c,l,h,i,s,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},r0=new wt,AE=new wt,al=class r{constructor(t=[],e=[]){this.uuid=Ri(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new wt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){let n=new wt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=t.length;s<a;s++){let o=t[s]?t[s].matrixWorld:AE;r0.multiplyMatrices(o,e[s]),r0.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new r(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4);e.set(this.boneMatrices);let n=new Zu(e,t,t,pi,hs);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){let i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){let s=t.bones[n],a=e[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new To),this.bones.push(a),this.boneInverses.push(new wt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){let t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let e=this.bones,n=this.boneInverses;for(let i=0,s=e.length;i<s;i++){let a=e[i];t.bones.push(a.uuid);let o=n[i];t.boneInverses.push(o.toArray())}return t}},$e=class extends At{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},na=new wt,a0=new wt,kc=[],o0=new Qe,RE=new wt,co=new Gt,lo=new ri,Te=class extends Gt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new $e(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,RE)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Qe),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,na),o0.copy(t.boundingBox).applyMatrix4(na),this.boundingBox.union(o0)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ri),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,na),lo.copy(t.boundingSphere).applyMatrix4(na),this.boundingSphere.union(lo)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){let n=this.matrixWorld,i=this.count;if(co.geometry=this.geometry,co.material=this.material,co.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),lo.copy(this.boundingSphere),lo.applyMatrix4(n),t.ray.intersectsSphere(lo)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,na),a0.multiplyMatrices(n,na),co.matrixWorld=a0,co.raycast(t,kc);for(let a=0,o=kc.length;a<o;a++){let c=kc[a];c.instanceId=s,c.object=this,e.push(c)}kc.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new $e(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var ps=class extends An{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new it(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},c0=new T,l0=new T,h0=new wt,wu=new xr,Uc=new ri,ba=class extends Ue{constructor(t=new Rt,e=new ps){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)c0.fromBufferAttribute(e,i-1),l0.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=c0.distanceTo(l0);t.setAttribute("lineDistance",new _t(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Uc.copy(n.boundingSphere),Uc.applyMatrix4(i),Uc.radius+=s,t.ray.intersectsSphere(Uc)===!1)return;h0.copy(i).invert(),wu.copy(t.ray).applyMatrix4(h0);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=new T,h=new T,f=new T,u=new T,d=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){let p=Math.max(0,a.start),x=Math.min(g.count,a.start+a.count);for(let y=p,_=x-1;y<_;y+=d){let M=g.getX(y),b=g.getX(y+1);if(l.fromBufferAttribute(m,M),h.fromBufferAttribute(m,b),wu.distanceSqToSegment(l,h,u,f)>c)continue;u.applyMatrix4(this.matrixWorld);let C=t.ray.origin.distanceTo(u);C<t.near||C>t.far||e.push({distance:C,point:f.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,a.start),x=Math.min(m.count,a.start+a.count);for(let y=p,_=x-1;y<_;y+=d){if(l.fromBufferAttribute(m,y),h.fromBufferAttribute(m,y+1),wu.distanceSqToSegment(l,h,u,f)>c)continue;u.applyMatrix4(this.matrixWorld);let b=t.ray.origin.distanceTo(u);b<t.near||b>t.far||e.push({distance:b,point:f.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}},u0=new T,f0=new T,Vi=class extends ba{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)u0.fromBufferAttribute(e,i),f0.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+u0.distanceTo(f0);t.setAttribute("lineDistance",new _t(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},ol=class extends ba{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},Ci=class extends An{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new it(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},d0=new wt,Qu=new xr,zc=new ri,Oc=new T,on=class extends Ue{constructor(t=new Rt,e=new Ci){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),zc.copy(n.boundingSphere),zc.applyMatrix4(i),zc.radius+=s,t.ray.intersectsSphere(zc)===!1)return;d0.copy(i).invert(),Qu.copy(t.ray).applyMatrix4(d0);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,f=n.attributes.position;if(l!==null){let u=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);for(let g=u,v=d;g<v;g++){let m=l.getX(g);Oc.fromBufferAttribute(f,m),p0(Oc,m,c,i,t,e,this)}}else{let u=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let g=u,v=d;g<v;g++)Oc.fromBufferAttribute(f,g),p0(Oc,g,c,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function p0(r,t,e,n,i,s,a){let o=Qu.distanceSqToPoint(r);if(o<e){let c=new T;Qu.closestPointToPoint(r,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,object:a})}}var zn=class extends Sn{constructor(t,e,n,i,s,a,o,c,l){super(t,e,n,i,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},gi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),i=0,s=n.length,a;e?a=e:a=t*n[s-1];let o=0,c=s-1,l;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),l=n[i]-a,l<0)o=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===a)return i/(s-1);let h=n[i],u=n[i+1]-h,d=(a-h)/u;return(i+d)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);let a=this.getPoint(i),o=this.getPoint(s),c=e||(a.isVector2?new ht:new T);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new T,i=[],s=[],a=[],o=new T,c=new wt;for(let d=0;d<=t;d++){let g=d/t;i[d]=this.getTangentAt(g,new T)}s[0]=new T,a[0]=new T;let l=Number.MAX_VALUE,h=Math.abs(i[0].x),f=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),u<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(fn(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(c.makeRotationAxis(o,g))}a[d].crossVectors(i[d],s[d])}if(e===!0){let d=Math.acos(fn(s[0].dot(s[t]),-1,1));d/=t,i[0].dot(o.crossVectors(s[0],s[t]))>0&&(d=-d);for(let g=1;g<=t;g++)s[g].applyMatrix4(c.makeRotationAxis(i[g],d*g)),a[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},So=class extends gi{constructor(t=0,e=0,n=1,i=1,s=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e){let n=e||new ht,i=Math.PI*2,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(a?s=0:s=i),this.aClockwise===!0&&!a&&(s===i?s=-i:s=s-i);let o=this.aStartAngle+t*s,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=c-this.aX,d=l-this.aY;c=u*h-d*f+this.aX,l=u*f+d*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},$u=class extends So{constructor(t,e,n,i,s,a){super(t,e,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Uf(){let r=0,t=0,e=0,n=0;function i(s,a,o,c){r=s,t=o,e=-3*s+3*a-2*o-c,n=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,l){i(a,o,l*(o-s),l*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,l,h,f){let u=(a-s)/l-(o-s)/(l+h)+(o-a)/h,d=(o-a)/h-(c-a)/(h+f)+(c-o)/f;u*=h,d*=h,i(a,o,u,d)},calc:function(s){let a=s*s,o=a*s;return r+t*s+e*a+n*o}}}var Bc=new T,Tu=new Uf,Su=new Uf,Au=new Uf,tf=class extends gi{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new T){let n=e,i=this.points,s=i.length,a=(s-(this.closed?0:1))*t,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:c===0&&o===s-1&&(o=s-2,c=1);let l,h;this.closed||o>0?l=i[(o-1)%s]:(Bc.subVectors(i[0],i[1]).add(i[0]),l=Bc);let f=i[o%s],u=i[(o+1)%s];if(this.closed||o+2<s?h=i[(o+2)%s]:(Bc.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=Bc),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(f),d),v=Math.pow(f.distanceToSquared(u),d),m=Math.pow(u.distanceToSquared(h),d);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Tu.initNonuniformCatmullRom(l.x,f.x,u.x,h.x,g,v,m),Su.initNonuniformCatmullRom(l.y,f.y,u.y,h.y,g,v,m),Au.initNonuniformCatmullRom(l.z,f.z,u.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(Tu.initCatmullRom(l.x,f.x,u.x,h.x,this.tension),Su.initCatmullRom(l.y,f.y,u.y,h.y,this.tension),Au.initCatmullRom(l.z,f.z,u.z,h.z,this.tension));return n.set(Tu.calc(c),Su.calc(c),Au.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new T().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function m0(r,t,e,n,i){let s=(n-t)*.5,a=(i-e)*.5,o=r*r,c=r*o;return(2*e-2*n+s+a)*c+(-3*e+3*n-2*s-a)*o+s*r+e}function CE(r,t){let e=1-r;return e*e*t}function PE(r,t){return 2*(1-r)*r*t}function LE(r,t){return r*r*t}function vo(r,t,e,n){return CE(r,t)+PE(r,e)+LE(r,n)}function IE(r,t){let e=1-r;return e*e*e*t}function DE(r,t){let e=1-r;return 3*e*e*r*t}function FE(r,t){return 3*(1-r)*r*r*t}function HE(r,t){return r*r*r*t}function xo(r,t,e,n,i){return IE(r,t)+DE(r,e)+FE(r,n)+HE(r,i)}var cl=class extends gi{constructor(t=new ht,e=new ht,n=new ht,i=new ht){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new ht){let n=e,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(xo(t,i.x,s.x,a.x,o.x),xo(t,i.y,s.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ef=class extends gi{constructor(t=new T,e=new T,n=new T,i=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new T){let n=e,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(xo(t,i.x,s.x,a.x,o.x),xo(t,i.y,s.y,a.y,o.y),xo(t,i.z,s.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ll=class extends gi{constructor(t=new ht,e=new ht){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ht){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ht){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},nf=class extends gi{constructor(t=new T,e=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new T){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new T){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},hl=class extends gi{constructor(t=new ht,e=new ht,n=new ht){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ht){let n=e,i=this.v0,s=this.v1,a=this.v2;return n.set(vo(t,i.x,s.x,a.x),vo(t,i.y,s.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},sf=class extends gi{constructor(t=new T,e=new T,n=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new T){let n=e,i=this.v0,s=this.v1,a=this.v2;return n.set(vo(t,i.x,s.x,a.x),vo(t,i.y,s.y,a.y),vo(t,i.z,s.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ul=class extends gi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ht){let n=e,i=this.points,s=(i.length-1)*t,a=Math.floor(s),o=s-a,c=i[a===0?a:a-1],l=i[a],h=i[a>i.length-2?i.length-1:a+1],f=i[a>i.length-3?i.length-1:a+2];return n.set(m0(o,c.x,l.x,h.x,f.x),m0(o,c.y,l.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new ht().fromArray(i))}return this}},g0=Object.freeze({__proto__:null,ArcCurve:$u,CatmullRomCurve3:tf,CubicBezierCurve:cl,CubicBezierCurve3:ef,EllipseCurve:So,LineCurve:ll,LineCurve3:nf,QuadraticBezierCurve:hl,QuadraticBezierCurve3:sf,SplineCurve:ul}),rf=class extends gi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new g0[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),s=0;for(;s<i.length;){if(i[s]>=n){let a=i[s]-n,o=this.curves[s],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}s++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,s=this.curves;i<s.length;i++){let a=s[i],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new g0[i.type]().fromJSON(i))}return this}},af=class extends rf{constructor(t){super(),this.type="Path",this.currentPoint=new ht,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new ll(this.currentPoint.clone(),new ht(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let s=new hl(this.currentPoint.clone(),new ht(t,e),new ht(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,a){let o=new cl(this.currentPoint.clone(),new ht(t,e),new ht(n,i),new ht(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new ul(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,i,s,a),this}absarc(t,e,n,i,s,a){return this.absellipse(t,e,n,n,i,s,a),this}ellipse(t,e,n,i,s,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,i,s,a,o,c),this}absellipse(t,e,n,i,s,a,o,c){let l=new So(t,e,n,i,s,a,o,c);if(this.curves.length>0){let f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},of=class r extends Rt{constructor(t=[new ht(0,-.5),new ht(.5,0),new ht(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=fn(i,0,Math.PI*2);let s=[],a=[],o=[],c=[],l=[],h=1/e,f=new T,u=new ht,d=new T,g=new T,v=new T,m=0,p=0;for(let x=0;x<=t.length-1;x++)switch(x){case 0:m=t[x+1].x-t[x].x,p=t[x+1].y-t[x].y,d.x=p*1,d.y=-m,d.z=p*0,v.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:c.push(v.x,v.y,v.z);break;default:m=t[x+1].x-t[x].x,p=t[x+1].y-t[x].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=v.x,d.y+=v.y,d.z+=v.z,d.normalize(),c.push(d.x,d.y,d.z),v.copy(g)}for(let x=0;x<=e;x++){let y=n+x*h*i,_=Math.sin(y),M=Math.cos(y);for(let b=0;b<=t.length-1;b++){f.x=t[b].x*_,f.y=t[b].y,f.z=t[b].x*M,a.push(f.x,f.y,f.z),u.x=x/e,u.y=b/(t.length-1),o.push(u.x,u.y);let w=c[3*b+0]*_,C=c[3*b+1],E=c[3*b+0]*M;l.push(w,C,E)}}for(let x=0;x<e;x++)for(let y=0;y<t.length-1;y++){let _=y+x*t.length,M=_,b=_+t.length,w=_+t.length+1,C=_+1;s.push(M,b,C),s.push(w,C,b)}this.setIndex(s),this.setAttribute("position",new _t(a,3)),this.setAttribute("uv",new _t(o,2)),this.setAttribute("normal",new _t(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.points,t.segments,t.phiStart,t.phiLength)}},fl=class r extends of{constructor(t=1,e=1,n=4,i=8){let s=new af;s.absarc(0,-e/2,t,Math.PI*1.5,0),s.absarc(0,e/2,t,0,Math.PI*.5),super(s.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:i}}static fromJSON(t){return new r(t.radius,t.length,t.capSegments,t.radialSegments)}};var qe=class r extends Rt{constructor(t=1,e=1,n=1,i=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};let l=this;i=Math.floor(i),s=Math.floor(s);let h=[],f=[],u=[],d=[],g=0,v=[],m=n/2,p=0;x(),a===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new _t(f,3)),this.setAttribute("normal",new _t(u,3)),this.setAttribute("uv",new _t(d,2));function x(){let _=new T,M=new T,b=0,w=(e-t)/n;for(let C=0;C<=s;C++){let E=[],S=C/s,I=S*(e-t)+t;for(let D=0;D<=i;D++){let k=D/i,R=k*c+o,A=Math.sin(R),P=Math.cos(R);M.x=I*A,M.y=-S*n+m,M.z=I*P,f.push(M.x,M.y,M.z),_.set(A,w,P).normalize(),u.push(_.x,_.y,_.z),d.push(k,1-S),E.push(g++)}v.push(E)}for(let C=0;C<i;C++)for(let E=0;E<s;E++){let S=v[E][C],I=v[E+1][C],D=v[E+1][C+1],k=v[E][C+1];h.push(S,I,k),h.push(I,D,k),b+=6}l.addGroup(p,b,0),p+=b}function y(_){let M=g,b=new ht,w=new T,C=0,E=_===!0?t:e,S=_===!0?1:-1;for(let D=1;D<=i;D++)f.push(0,m*S,0),u.push(0,S,0),d.push(.5,.5),g++;let I=g;for(let D=0;D<=i;D++){let R=D/i*c+o,A=Math.cos(R),P=Math.sin(R);w.x=E*P,w.y=m*S,w.z=E*A,f.push(w.x,w.y,w.z),u.push(0,S,0),b.x=A*.5+.5,b.y=P*.5*S+.5,d.push(b.x,b.y),g++}for(let D=0;D<i;D++){let k=M+D,R=I+D;_===!0?h.push(R,R+1,k):h.push(R+1,R,k),C+=3}l.addGroup(p,C,_===!0?1:2),p+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ya=class r extends qe{constructor(t=1,e=1,n=32,i=1,s=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(t){return new r(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},cf=class r extends Rt{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let s=[],a=[];o(i),l(n),h(),this.setAttribute("position",new _t(s,3)),this.setAttribute("normal",new _t(s.slice(),3)),this.setAttribute("uv",new _t(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(x){let y=new T,_=new T,M=new T;for(let b=0;b<e.length;b+=3)d(e[b+0],y),d(e[b+1],_),d(e[b+2],M),c(y,_,M,x)}function c(x,y,_,M){let b=M+1,w=[];for(let C=0;C<=b;C++){w[C]=[];let E=x.clone().lerp(_,C/b),S=y.clone().lerp(_,C/b),I=b-C;for(let D=0;D<=I;D++)D===0&&C===b?w[C][D]=E:w[C][D]=E.clone().lerp(S,D/I)}for(let C=0;C<b;C++)for(let E=0;E<2*(b-C)-1;E++){let S=Math.floor(E/2);E%2===0?(u(w[C][S+1]),u(w[C+1][S]),u(w[C][S])):(u(w[C][S+1]),u(w[C+1][S+1]),u(w[C+1][S]))}}function l(x){let y=new T;for(let _=0;_<s.length;_+=3)y.x=s[_+0],y.y=s[_+1],y.z=s[_+2],y.normalize().multiplyScalar(x),s[_+0]=y.x,s[_+1]=y.y,s[_+2]=y.z}function h(){let x=new T;for(let y=0;y<s.length;y+=3){x.x=s[y+0],x.y=s[y+1],x.z=s[y+2];let _=m(x)/2/Math.PI+.5,M=p(x)/Math.PI+.5;a.push(_,1-M)}g(),f()}function f(){for(let x=0;x<a.length;x+=6){let y=a[x+0],_=a[x+2],M=a[x+4],b=Math.max(y,_,M),w=Math.min(y,_,M);b>.9&&w<.1&&(y<.2&&(a[x+0]+=1),_<.2&&(a[x+2]+=1),M<.2&&(a[x+4]+=1))}}function u(x){s.push(x.x,x.y,x.z)}function d(x,y){let _=x*3;y.x=t[_+0],y.y=t[_+1],y.z=t[_+2]}function g(){let x=new T,y=new T,_=new T,M=new T,b=new ht,w=new ht,C=new ht;for(let E=0,S=0;E<s.length;E+=9,S+=6){x.set(s[E+0],s[E+1],s[E+2]),y.set(s[E+3],s[E+4],s[E+5]),_.set(s[E+6],s[E+7],s[E+8]),b.set(a[S+0],a[S+1]),w.set(a[S+2],a[S+3]),C.set(a[S+4],a[S+5]),M.copy(x).add(y).add(_).divideScalar(3);let I=m(M);v(b,S+0,x,I),v(w,S+2,y,I),v(C,S+4,_,I)}}function v(x,y,_,M){M<0&&x.x===1&&(a[y]=x.x-1),_.x===0&&_.z===0&&(a[y]=M/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.vertices,t.indices,t.radius,t.details)}};var ks=class r extends cf{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new r(t.radius,t.detail)}};var Pi=class r extends Rt{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],f=new T,u=new T,d=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){let x=[],y=p/n,_=0;p===0&&a===0?_=.5/e:p===n&&c===Math.PI&&(_=-.5/e);for(let M=0;M<=e;M++){let b=M/e;f.x=-t*Math.cos(i+b*s)*Math.sin(a+y*o),f.y=t*Math.cos(a+y*o),f.z=t*Math.sin(i+b*s)*Math.sin(a+y*o),g.push(f.x,f.y,f.z),u.copy(f).normalize(),v.push(u.x,u.y,u.z),m.push(b+_,1-y),x.push(l++)}h.push(x)}for(let p=0;p<n;p++)for(let x=0;x<e;x++){let y=h[p][x+1],_=h[p][x],M=h[p+1][x],b=h[p+1][x+1];(p!==0||a>0)&&d.push(y,_,b),(p!==n-1||c<Math.PI)&&d.push(_,M,b)}this.setIndex(d),this.setAttribute("position",new _t(g,3)),this.setAttribute("normal",new _t(v,3)),this.setAttribute("uv",new _t(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ut=class extends An{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new it(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new it(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ff,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},vi=class extends Ut{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ht(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return fn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new it(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new it(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new it(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Ao=class extends An{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new it(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ff,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Sf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Gc(r,t,e){return!r||!e&&r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function NE(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function kE(r){function t(i,s){return r[i]-r[s]}let e=r.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function v0(r,t,e){let n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){let o=e[s]*t;for(let c=0;c!==t;++c)i[a++]=r[o+c]}return i}function W0(r,t,e,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(t.push(s.time),e.push.apply(e,a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(t.push(s.time),a.toArray(e,e.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(t.push(s.time),e.push(a)),s=r[i++];while(s!==void 0)}var Us=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];t:{e:{let a;n:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=e[++n],t<i)break e}a=e.length;break n}if(!(t>=s)){let o=e[1];t<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=e[--n-1],t>=s)break e}a=n,n=0;break n}break t}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let a=0;a!==i;++a)e[a]=n[s+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},lf=class extends Us{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ia,endingEnd:ia}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,a=t+1,o=i[s],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case sa:s=t,o=2*e-n;break;case qc:s=i.length-2,o=e+i[s]-i[s+1];break;default:s=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case sa:a=t,c=2*n-e;break;case qc:a=1,c=n+i[1]-i[0];break;default:a=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(t,e,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,g=(n-e)/(i-e),v=g*g,m=v*g,p=-u*m+2*u*v-u*g,x=(1+u)*m+(-1.5-2*u)*v+(-.5+u)*g+1,y=(-1-d)*m+(1.5+d)*v+.5*g,_=d*m-d*v;for(let M=0;M!==o;++M)s[M]=p*a[h+M]+x*a[l+M]+y*a[c+M]+_*a[f+M];return s}},dl=class extends Us{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(n-e)/(i-e),f=1-h;for(let u=0;u!==o;++u)s[u]=a[l+u]*f+a[c+u]*h;return s}},hf=class extends Us{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},xi=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Gc(e,this.TimeBufferType),this.values=Gc(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Gc(t.times,Array),values:Gc(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new hf(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new dl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new lf(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case da:e=this.InterpolantFactoryMethodDiscrete;break;case vr:e=this.InterpolantFactoryMethodLinear;break;case Qh:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return da;case this.InterpolantFactoryMethodLinear:return vr;case this.InterpolantFactoryMethodSmooth:return Qh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,s=0,a=i-1;for(;s!==i&&n[s]<t;)++s;for(;a!==-1&&n[a]>e;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==s;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(i!==void 0&&NE(i))for(let o=0,c=i.length;o!==c;++o){let l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Qh,s=t.length-1,a=1;for(let o=1;o<s;++o){let c=!1,l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(i)c=!0;else{let f=o*n,u=f-n,d=f+n;for(let g=0;g!==n;++g){let v=e[f+g];if(v!==e[u+g]||v!==e[d+g]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let f=o*n,u=a*n;for(let d=0;d!==n;++d)e[u+d]=e[f+d]}++a}}if(s>0){t[a]=t[s];for(let o=s*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};xi.prototype.TimeBufferType=Float32Array;xi.prototype.ValueBufferType=Float32Array;xi.prototype.DefaultInterpolation=vr;var zs=class extends xi{};zs.prototype.ValueTypeName="bool";zs.prototype.ValueBufferType=Array;zs.prototype.DefaultInterpolation=da;zs.prototype.InterpolantFactoryMethodLinear=void 0;zs.prototype.InterpolantFactoryMethodSmooth=void 0;var pl=class extends xi{};pl.prototype.ValueTypeName="color";var ms=class extends xi{};ms.prototype.ValueTypeName="number";var uf=class extends Us{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(i-e),l=t*o;for(let h=l+o;l!==h;l+=4)Xt.slerpFlat(s,0,a,l-o,a,l,c);return s}},Wi=class extends xi{InterpolantFactoryMethodLinear(t){return new uf(this.times,this.values,this.getValueSize(),t)}};Wi.prototype.ValueTypeName="quaternion";Wi.prototype.DefaultInterpolation=vr;Wi.prototype.InterpolantFactoryMethodSmooth=void 0;var Os=class extends xi{};Os.prototype.ValueTypeName="string";Os.prototype.ValueBufferType=Array;Os.prototype.DefaultInterpolation=da;Os.prototype.InterpolantFactoryMethodLinear=void 0;Os.prototype.InterpolantFactoryMethodSmooth=void 0;var gs=class extends xi{};gs.prototype.ValueTypeName="vector";var _a=class{constructor(t,e=-1,n,i=If){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=Ri(),this.duration<0&&this.resetDuration()}static parse(t){let e=[],n=t.tracks,i=1/(t.fps||1);for(let a=0,o=n.length;a!==o;++a)e.push(zE(n[a]).scale(i));let s=new this(t.name,t.duration,e,t.blendMode);return s.uuid=t.uuid,s}static toJSON(t){let e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let s=0,a=n.length;s!==a;++s)e.push(xi.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(t,e,n,i){let s=e.length,a=[];for(let o=0;o<s;o++){let c=[],l=[];c.push((o+s-1)%s,o,(o+1)%s),l.push(0,1,0);let h=kE(c);c=v0(c,1,h),l=v0(l,1,h),!i&&c[0]===0&&(c.push(s),l.push(l[0])),a.push(new ms(".morphTargetInfluences["+e[o].name+"]",c,l).scale(1/n))}return new this(t,-1,a)}static findByName(t,e){let n=t;if(!Array.isArray(t)){let i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){let i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,c=t.length;o<c;o++){let l=t[o],h=l.name.match(s);if(h&&h.length>1){let f=h[1],u=i[f];u||(i[f]=u=[]),u.push(l)}}let a=[];for(let o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],e,n));return a}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(f,u,d,g,v){if(d.length!==0){let m=[],p=[];W0(d,m,p,g),m.length!==0&&v.push(new f(u,m,p))}},i=[],s=t.name||"default",a=t.fps||30,o=t.blendMode,c=t.length||-1,l=t.hierarchy||[];for(let f=0;f<l.length;f++){let u=l[f].keys;if(!(!u||u.length===0))if(u[0].morphTargets){let d={},g;for(g=0;g<u.length;g++)if(u[g].morphTargets)for(let v=0;v<u[g].morphTargets.length;v++)d[u[g].morphTargets[v]]=-1;for(let v in d){let m=[],p=[];for(let x=0;x!==u[g].morphTargets.length;++x){let y=u[g];m.push(y.time),p.push(y.morphTarget===v?1:0)}i.push(new ms(".morphTargetInfluence["+v+"]",m,p))}c=d.length*a}else{let d=".bones["+e[f].name+"]";n(gs,d+".position",u,"pos",i),n(Wi,d+".quaternion",u,"rot",i),n(gs,d+".scale",u,"scl",i)}}return i.length===0?null:new this(s,c,i,o)}resetDuration(){let t=this.tracks,e=0;for(let n=0,i=t.length;n!==i;++n){let s=this.tracks[n];e=Math.max(e,s.times[s.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){let t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function UE(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ms;case"vector":case"vector2":case"vector3":case"vector4":return gs;case"color":return pl;case"quaternion":return Wi;case"bool":case"boolean":return zs;case"string":return Os}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function zE(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let t=UE(r.type);if(r.times===void 0){let e=[],n=[];W0(r.keys,e,n,"value"),r.times=e,r.values=n}return t.parse!==void 0?t.parse(r):new t(r.name,r.times,r.values,r.interpolation)}var Ds={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}},ff=class{constructor(t,e,n){let i=this,s=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return l.push(h,f),this},this.removeHandler=function(h){let f=l.indexOf(h);return f!==-1&&l.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=l.length;f<u;f+=2){let d=l[f],g=l[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}},OE=new ff,vs=class{constructor(t){this.manager=t!==void 0?t:OE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};vs.DEFAULT_MATERIAL_NAME="__DEFAULT";var os={},df=class extends Error{constructor(t,e){super(t),this.response=e}},Ro=class extends vs{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=Ds.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(os[t]!==void 0){os[t].push({onLoad:e,onProgress:n,onError:i});return}os[t]=[],os[t].push({onLoad:e,onProgress:n,onError:i});let a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=os[t],f=l.body.getReader(),u=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),d=u?parseInt(u):0,g=d!==0,v=0,m=new ReadableStream({start(p){x();function x(){f.read().then(({done:y,value:_})=>{if(y)p.close();else{v+=_.byteLength;let M=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:d});for(let b=0,w=h.length;b<w;b++){let C=h[b];C.onProgress&&C.onProgress(M)}p.enqueue(_),x()}})}}});return new Response(m)}else throw new df(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o===void 0)return l.text();{let f=/charset="?([^;"\s]*)"?/i.exec(o),u=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(u);return l.arrayBuffer().then(g=>d.decode(g))}}}).then(l=>{Ds.add(t,l);let h=os[t];delete os[t];for(let f=0,u=h.length;f<u;f++){let d=h[f];d.onLoad&&d.onLoad(l)}}).catch(l=>{let h=os[t];if(h===void 0)throw this.manager.itemError(t),l;delete os[t];for(let f=0,u=h.length;f<u;f++){let d=h[f];d.onError&&d.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}};var pf=class extends vs{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=this,a=Ds.get(t);if(a!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0),a;let o=yo("img");function c(){h(),Ds.add(t,this),e&&e(this),s.manager.itemEnd(t)}function l(f){h(),i&&i(f),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(t),o.src=t,o}};var Bs=class extends vs{constructor(t){super(t)}load(t,e,n,i){let s=new Sn,a=new pf(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){s.image=o,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}},Ma=class extends Ue{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new it(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},ml=class extends Ma{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ue.DEFAULT_UP),this.updateMatrix(),this.groundColor=new it(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Ru=new wt,x0=new T,b0=new T,Co=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ht(512,512),this.map=null,this.mapPass=null,this.matrix=new wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mo,this._frameExtents=new ht(1,1),this._viewportCount=1,this._viewports=[new fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;x0.setFromMatrixPosition(t.matrixWorld),e.position.copy(x0),b0.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(b0),e.updateMatrixWorld(),Ru.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ru),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ru)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},mf=class extends Co{constructor(){super(new We(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=pa*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=t.distance||e.far;(n!==e.fov||i!==e.aspect||s!==e.far)&&(e.fov=n,e.aspect=i,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},Gs=class extends Ma{constructor(t,e,n=0,i=Math.PI/3,s=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ue.DEFAULT_UP),this.updateMatrix(),this.target=new Ue,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new mf}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},y0=new wt,ho=new T,Cu=new T,gf=class extends Co{constructor(){super(new We(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ht(4,2),this._viewportCount=6,this._viewports=[new fe(2,1,1,1),new fe(0,1,1,1),new fe(3,1,1,1),new fe(1,1,1,1),new fe(3,0,1,1),new fe(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),ho.setFromMatrixPosition(t.matrixWorld),n.position.copy(ho),Cu.copy(n.position),Cu.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Cu),n.updateMatrixWorld(),i.makeTranslation(-ho.x,-ho.y,-ho.z),y0.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(y0)}},qi=class extends Ma{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new gf}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},vf=class extends Co{constructor(){super(new Ns(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ea=class extends Ma{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ue.DEFAULT_UP),this.updateMatrix(),this.target=new Ue,this.shadow=new vf}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Vs=class{static decodeText(t){if(typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){let e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}},gl=class extends Rt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var vl=class extends vs{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=this,a=Ds.get(t);if(a!==void 0){if(s.manager.itemStart(t),a.then){a.then(l=>{e&&e(l),s.manager.itemEnd(t)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let c=fetch(t,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){return Ds.add(t,l),e&&e(l),s.manager.itemEnd(t),l}).catch(function(l){i&&i(l),Ds.remove(t),s.manager.itemError(t),s.manager.itemEnd(t)});Ds.add(t,c),s.manager.itemStart(t)}};var xf=class{constructor(t,e,n){this.binding=t,this.valueSize=n;let i,s,a;switch(e){case"quaternion":i=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){let n=this.buffer,i=this.valueSize,s=t*i+i,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[s+o]=n[o];a=e}else{a+=e;let o=e/a;this._mixBufferRegion(n,s,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(t){let e=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){let e=this.valueSize,n=this.buffer,i=t*e+e,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){let c=e*this._origIndex;this._mixBufferRegion(n,i,c,1-s,e)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let c=e,l=e+e;c!==l;++c)if(n[c]!==n[c+e]){o.setValue(n,i);break}}saveOriginalState(){let t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let s=n,a=i;s!==a;++s)e[s]=e[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){let t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,i,s){if(i>=.5)for(let a=0;a!==s;++a)t[e+a]=t[n+a]}_slerp(t,e,n,i){Xt.slerpFlat(t,e,t,e,t,n,i)}_slerpAdditive(t,e,n,i,s){let a=this._workIndex*s;Xt.multiplyQuaternionsFlat(t,a,t,e,t,n),Xt.slerpFlat(t,e,t,e,t,a,i)}_lerp(t,e,n,i,s){let a=1-i;for(let o=0;o!==s;++o){let c=e+o;t[c]=t[c]*a+t[n+o]*i}}_lerpAdditive(t,e,n,i,s){for(let a=0;a!==s;++a){let o=e+a;t[o]=t[o]+t[n+a]*i}}},zf="\\[\\]\\.:\\/",BE=new RegExp("["+zf+"]","g"),Of="[^"+zf+"]",GE="[^"+zf.replace("\\.","")+"]",VE=/((?:WC+[\/:])*)/.source.replace("WC",Of),WE=/(WCOD+)?/.source.replace("WCOD",GE),qE=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Of),XE=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Of),jE=new RegExp("^"+VE+WE+qE+XE+"$"),KE=["material","materials","bones","map"],bf=class{constructor(t,e,n){let i=n||ke.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ke=class r{constructor(t,e,n){this.path=e,this.parsedPath=n||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,n):new r(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(BE,"")}static parseTrackName(t){let e=jE.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);KE.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[i];if(a===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ke.Composite=bf;ke.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ke.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ke.prototype.GetterByBindingType=[ke.prototype._getValue_direct,ke.prototype._getValue_array,ke.prototype._getValue_arrayElement,ke.prototype._getValue_toArray];ke.prototype.SetterByBindingTypeAndVersioning=[[ke.prototype._setValue_direct,ke.prototype._setValue_direct_setNeedsUpdate,ke.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ke.prototype._setValue_array,ke.prototype._setValue_array_setNeedsUpdate,ke.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ke.prototype._setValue_arrayElement,ke.prototype._setValue_arrayElement_setNeedsUpdate,ke.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ke.prototype._setValue_fromArray,ke.prototype._setValue_fromArray_setNeedsUpdate,ke.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var yf=class{constructor(t,e,n=null,i=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=i;let s=e.tracks,a=s.length,o=new Array(a),c={endingStart:ia,endingEnd:ia};for(let l=0;l!==a;++l){let h=s[l].createInterpolant(null);o[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Lf,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n){if(t.fadeOut(e),this.fadeIn(e),n){let i=this._clip.duration,s=t._clip.duration,a=s/i,o=i/s;t.warp(1,a,e),this.warp(o,1,e)}return this}crossFadeTo(t,e,n){return t.crossFadeFrom(this,e,n)}stopFading(){let t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){let i=this._mixer,s=i.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);let c=o.parameterPositions,l=o.sampleValues;return c[0]=s,c[1]=s+n,l[0]=t/a,l[1]=e/a,this}stopWarping(){let t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,i){if(!this.enabled){this._updateWeight(t);return}let s=this._startTime;if(s!==null){let c=(t-s)*n;c<0||n===0?e=0:(this._startTime=null,e=n*c)}e*=this._updateTimeScale(t);let a=this._updateTime(e),o=this._updateWeight(t);if(o>0){let c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case hb:for(let h=0,f=c.length;h!==f;++h)c[h].evaluate(a),l[h].accumulateAdditive(o);break;case If:default:for(let h=0,f=c.length;h!==f;++h)c[h].evaluate(a),l[h].accumulate(i,o)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){let e=this._clip.duration,n=this.loop,i=this.time+t,s=this._loopCount,a=n===lb;if(t===0)return s===-1?i:a&&(s&1)===1?e-i:i;if(n===Pf){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(i>=e)i=e;else if(i<0)i=0;else{this.time=i;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(s===-1&&(t>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=e||i<0){let o=Math.floor(i/e);i-=e*o,s+=Math.abs(o);let c=this.repetitions-s;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=t>0?e:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(c===1){let l=t<0;this._setEndings(l,!l,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(s&1)===1)return e-i}return i}_setEndings(t,e,n){let i=this._interpolantSettings;n?(i.endingStart=sa,i.endingEnd=sa):(t?i.endingStart=this.zeroSlopeAtStart?sa:ia:i.endingStart=qc,e?i.endingEnd=this.zeroSlopeAtEnd?sa:ia:i.endingEnd=qc)}_scheduleFading(t,e,n){let i=this._mixer,s=i.time,a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,c=a.sampleValues;return o[0]=s,c[0]=e,o[1]=s+t,c[1]=n,this}},YE=new Float32Array(1),wa=class extends fs{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){let n=t._localRoot||this._root,i=t._clip.tracks,s=i.length,a=t._propertyBindings,o=t._interpolants,c=n.uuid,l=this._bindingsByRootAndName,h=l[c];h===void 0&&(h={},l[c]=h);for(let f=0;f!==s;++f){let u=i[f],d=u.name,g=h[d];if(g!==void 0)++g.referenceCount,a[f]=g;else{if(g=a[f],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,d));continue}let v=e&&e._propertyBindings[f].binding.parsedPath;g=new xf(ke.create(n,d,v),u.ValueTypeName,u.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,d),a[f]=g}o[f].resultBuffer=g.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){let n=(t._localRoot||this._root).uuid,i=t._clip.uuid,s=this._actionsByClip[i];this._bindAction(t,s&&s.knownActions[0]),this._addInactiveAction(t,i,n)}let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let s=e[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let s=e[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){let e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){let i=this._actions,s=this._actionsByClip,a=s[e];if(a===void 0)a={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,s[e]=a;else{let o=a.knownActions;t._byClipCacheIndex=o.length,o.push(t)}t._cacheIndex=i.length,i.push(t),a.actionByRoot[n]=t}_removeInactiveAction(t){let e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;let s=t._clip.uuid,a=this._actionsByClip,o=a[s],c=o.knownActions,l=c[c.length-1],h=t._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),t._byClipCacheIndex=null;let f=o.actionByRoot,u=(t._localRoot||this._root).uuid;delete f[u],c.length===0&&delete a[s],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let s=e[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(t){let e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_takeBackAction(t){let e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_addInactiveBinding(t,e,n){let i=this._bindingsByRootAndName,s=this._bindings,a=i[e];a===void 0&&(a={},i[e]=a),a[n]=t,t._cacheIndex=s.length,s.push(t)}_removeInactiveBinding(t){let e=this._bindings,n=t.binding,i=n.rootNode.uuid,s=n.path,a=this._bindingsByRootAndName,o=a[i],c=e[e.length-1],l=t._cacheIndex;c._cacheIndex=l,e[l]=c,e.pop(),delete o[s],Object.keys(o).length===0&&delete a[i]}_lendBinding(t){let e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_takeBackBinding(t){let e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_lendControlInterpolant(){let t=this._controlInterpolants,e=this._nActiveControlInterpolants++,n=t[e];return n===void 0&&(n=new dl(new Float32Array(2),new Float32Array(2),1,YE),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){let e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,s=e[i];t.__cacheIndex=i,e[i]=t,s.__cacheIndex=n,e[n]=s}clipAction(t,e,n){let i=e||this._root,s=i.uuid,a=typeof t=="string"?_a.findByName(i,t):t,o=a!==null?a.uuid:t,c=this._actionsByClip[o],l=null;if(n===void 0&&(a!==null?n=a.blendMode:n=If),c!==void 0){let f=c.actionByRoot[s];if(f!==void 0&&f.blendMode===n)return f;l=c.knownActions[0],a===null&&(a=l._clip)}if(a===null)return null;let h=new yf(this,a,e,n);return this._bindAction(h,l),this._addInactiveAction(h,o,s),h}existingAction(t,e){let n=e||this._root,i=n.uuid,s=typeof t=="string"?_a.findByName(n,t):t,a=s?s.uuid:t,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){let t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;let e=this._actions,n=this._nActiveActions,i=this.time+=t,s=Math.sign(t),a=this._accuIndex^=1;for(let l=0;l!==n;++l)e[l]._update(i,t,s,a);let o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(a);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){let e=this._actions,n=t.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){let a=s.knownActions;for(let o=0,c=a.length;o!==c;++o){let l=a[o];this._deactivateAction(l);let h=l._cacheIndex,f=e[e.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,f._cacheIndex=h,e[h]=f,e.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(t){let e=t.uuid,n=this._actionsByClip;for(let a in n){let o=n[a].actionByRoot,c=o[e];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let i=this._bindingsByRootAndName,s=i[e];if(s!==void 0)for(let a in s){let o=s[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(t,e){let n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var xl=class{constructor(t,e,n=0,i=1/0){this.ray=new xr(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new _o,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return _f(t,this,n,e),n.sort(_0),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)_f(t[i],this,n,e);return n.sort(_0),n}};function _0(r,t){return r.distance-t.distance}function _f(r,t,e,n){if(r.layers.test(t.layers)&&r.raycast(t,e),n===!0){let i=r.children;for(let s=0,a=i.length;s<a;s++)_f(i[s],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var q0={reed:{low:9,det:2.2,fine:.4,mount:330},forest:{low:24,det:6.5,fine:1.1,mount:440},mountain:{low:34,det:5.5,fine:1.2,mount:520,side:!0},meadow:{low:22,det:3.2,fine:.5,mount:380},sea:{low:7,det:2.5,fine:.4,mount:260,sea:!0},city:{low:0,det:0,fine:0,mount:300,hill:9}},Ie={id:"reed",...q0.reed};function X0(r){Object.assign(Ie,{side:!1,sea:!1,hill:0},q0[r],{id:r})}function ne(r,t){let e=Math.imul(r,374761393)+Math.imul(t,668265263)|0;return e=Math.imul(e^e>>>13,1274126177),e^=e>>>16,(e>>>0)/4294967295}function ze(r,t){let e=Math.floor(r),n=Math.floor(t),i=r-e,s=t-n;i=i*i*(3-2*i),s=s*s*(3-2*s);let a=ne(e,n),o=ne(e+1,n),c=ne(e,n+1),l=ne(e+1,n+1);return a+(o-a)*i+(c-a)*s+(a-o-c+l)*i*s}function Li(r,t){if(Ie.hill){let e=ze(r/900+2.1,t/900+8.4),n=e<.45?0:e>.62?1:(e-.45)/.17;return Ie.hill*n*n*(3-2*n)*(ze(r/260+6.6,t/260+3.2)-.5)*2}return Ie.low*((ze(r/1e3+11.3,t/1e3+7.1)-.5)*1.34+(ze(r/500+3.7,t/500+1.9)-.5)*.66)}function El(r,t){return Ie.det*(ze(r/165+5.5,t/165+2.2)-.5)*2+Ie.fine*(ze(r/40+9.1,t/40+4.4)-.5)*2}function wl(r,t){let e=0,n=.62,i=1/1500;for(let s=0;s<4;s++){let a=ze(r*i+31.7*s,t*i+17.3*s),o=1-Math.abs(a*2-1);e+=n*o*o,n*=.45,i*=2.1}return Ie.mount*e}var j0=`
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
`;var Le={halfWidth:4.6,chunkLen:120,step:2},K0=4.6,Ae={seg:720,bend:190,hw:7.2,walk:4,side:3.5,sideWalk:2.5,lanes:[1.75,5.25]},JE=[215,455,690],Y0=r=>.9*Math.sin(.0021*r+1)+.5*Math.sin(.0053*r+2.2)+.25*Math.sin(.0117*r+.3),ZE=Y0(0),Ii={period:2600,start:450,len:800,ramp:70},Bf=(r,t,e)=>{let n=Math.min(1,Math.max(0,(e-r)/(t-r)));return n*n*(3-2*n)},Gf=r=>{let t=Math.sin(r*127.1+311.7)*43758.5453;return t-Math.floor(t)},QE=r=>.07*Math.sin(.9*r)+.045*Math.sin(1.37*r+1.3)+.05*Math.sin(.31*r+2),Tl=class{constructor(){this.pts=[{x:0,z:0,y:Li(0,0)}],this.dirt=!1,this.city=!1,this._cum=[0]}setShape(t){t!==this.city&&(this.city=t,this.pts=[{x:0,z:0,y:0}])}_delta(t){if(t<=0||Gf(t*1.37+.5)<.3)return 0;let n=(Gf(t*2.71+3.3)-.5)*1.5-.35*this._sum(t-1);return Math.sign(n)*Math.max(.25,Math.abs(n))}_sum(t){if(t<0)return 0;for(;this._cum.length<=t;){let e=this._cum.length;this._cum.push(this._cum[e-1]+this._delta(e))}return this._cum[t]}junction(t){let e=Math.floor(t/3),n=t-e*3;return e*Ae.seg+JE[n]+(Gf(t*3.17+1.9)-.5)*(n===2?10:24)}junctionIndex(t){let e=Math.floor(t/Ae.seg)*3-1;for(;this.junction(e)<t;)e++;return e}nearJunction(t){if(!this.city)return null;let e=this.junctionIndex(t),n=this.junction(e-1),i=this.junction(e);return t-n<i-t?n:i}dirtAt(t){if(!this.dirt)return 0;let e=(t%Ii.period+Ii.period)%Ii.period;return Bf(Ii.start,Ii.start+Ii.ramp,e)*(1-Bf(Ii.start+Ii.len-Ii.ramp,Ii.start+Ii.len,e))}_y(t,e,n){return this.city?Li(t,e):Li(t,e)+this.dirtAt(n)*QE(n)}heading(t){if(!this.city)return Y0(t)-ZE;let e=Math.floor(t/Ae.seg);return this._sum(e-1)+this._delta(e)*Bf(0,Ae.bend,t-e*Ae.seg)}curvature(t){let e=Math.max(0,t-6),n=t+6;return(this.heading(n)-this.heading(e))/(n-e)}ensure(t){this._ensure(Math.ceil(t/Le.step)+1)}_ensure(t){let{step:e}=Le;for(;this.pts.length<=t+1;){let n=this.pts.length-1,i=this.heading(n*e+e/2),s=this.pts[n],a=s.x-Math.sin(i)*e,o=s.z-Math.cos(i)*e;this.pts.push({x:a,z:o,y:this._y(a,o,(n+1)*e)})}}recomputeHeights(){this.pts.forEach((t,e)=>{t.y=this._y(t.x,t.z,e*Le.step)})}at(t,e={}){let{step:n}=Le;t<0&&(t=0);let i=Math.floor(t/n);this._ensure(i+1);let s=(t-i*n)/n,a=this.pts[i],o=this.pts[i+1];return e.x=a.x+(o.x-a.x)*s,e.z=a.z+(o.z-a.z)*s,e.y=a.y+(o.y-a.y)*s,e.th=this.heading(t),e}};var Xi={uMistD:{value:0},uMistH:{value:12},uMistBase:{value:0},uMistCover:{value:.5},uMistT:{value:0},uMistWind:{value:new ht},uMistColor:{value:new it}};function J0(){let r=$t;r.fog_pars_vertex=`
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
#endif`}function ge(r){let t=r.onBeforeCompile,e=r.customProgramCacheKey,n=t&&t!==An.prototype.onBeforeCompile;r.onBeforeCompile=function(s,a){n&&t.call(this,s,a),Object.assign(s.uniforms,Xi)};let i=(n?t.toString():"")+(e?e.call(r):"");return r.customProgramCacheKey=()=>i+"#mist",r.needsUpdate=!0,r}function Lo(r,t){let e=document.createElement("canvas");return e.width=r,e.height=t,[e,e.getContext("2d")]}function Wf(r,t=!1){let[i,s]=Lo(512,512);s.fillStyle="#3c3f45",s.fillRect(0,0,512,512);let a=s.getImageData(0,0,512,512);for(let f=0;f<a.data.length;f+=4){let u=(Math.random()-.5)*30;a.data[f]+=u,a.data[f+1]+=u,a.data[f+2]+=u}s.putImageData(a,0,0);let o=512/(Le.halfWidth*2);for(let f of t?[]:[.27,.73]){let u=s.createLinearGradient((f-.09)*512,0,(f+.09)*512,0);u.addColorStop(0,"rgba(0,0,0,0)"),u.addColorStop(.5,"rgba(0,0,0,0.22)"),u.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=u,s.fillRect((f-.09)*512,0,.18*512,512)}s.fillStyle="#dcdcd4";let c=.16*o,l=.35*o;if(t){let f=new zn(i);return f.colorSpace=de,f.wrapS=f.wrapT=jn,f.anisotropy=r.capabilities.getMaxAnisotropy(),f}s.fillRect(l,0,c,512),s.fillRect(512-l-c,0,c,512),s.fillStyle="#e9d36a",s.fillRect(512/2-c/2,0,c,512/3);let h=new zn(i);return h.colorSpace=de,h.wrapS=h.wrapT=jn,h.anisotropy=r.capabilities.getMaxAnisotropy(),h}function Sl(){let t=document.createElement("canvas");t.width=t.height=128;let e=t.getContext("2d"),n=e.createImageData(128,128);for(let s=0;s<128;s++)for(let a=0;a<128;a++){let o=(a+.5)/128*2-1,c=(s+.5)/128*2-1,l=o*o+c*c,h=Math.min(1,Math.exp(-l*5)*.55+Math.exp(-l*22)*.35+Math.exp(-l*120)*.35)*(1-Math.min(1,l)**4),f=(s*128+a)*4;n.data[f]=n.data[f+1]=n.data[f+2]=255,n.data[f+3]=Math.round(h*255)}e.putImageData(n,0,0);let i=new zn(t);return i.colorSpace=de,i}function Sa(){let[r,t]=Lo(128,128),e=t.createRadialGradient(64,64,0,64,64,64);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.2,"rgba(255,255,255,0.55)"),e.addColorStop(.5,"rgba(255,255,255,0.12)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128);let n=new zn(r);return n.colorSpace=de,n}function qf(r){let t=r>>>0;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Z0(){let[e,n]=Lo(128,360),i=qf(5),s=128/2;n.strokeStyle="#c9bb8e",n.lineWidth=2.2,n.lineCap="round",n.beginPath(),n.moveTo(s,360),n.quadraticCurveTo(s+2,360*.66,s,360*.46),n.stroke();let a=4,o=360*.5,c=f=>5+50*Math.pow(Math.sin(Math.min(1,f*1.15)*Math.PI*.55),.85)*Math.pow(1-f,.6);n.fillStyle="rgba(250,246,234,0.6)",n.beginPath();for(let f=0;f<=24;f++){let u=f/24;n.lineTo(s+c(u)*.6,o-u*(o-a))}for(let f=24;f>=0;f--){let u=f/24;n.lineTo(s-c(u)*.6,o-u*(o-a))}n.closePath(),n.fill();let l=["#ffffff","#fffcf4","#f6f0df","#ede5cf","#fffef9"];for(let f=0;f<1500;f++){let u=Math.pow(i(),.85),d=o-u*(o-a)+i()*6,g=c(u),v=s+(i()*2-1)*g*(.4+.7*i()),m=d-6-i()*30;n.strokeStyle=l[Math.floor(i()*l.length)],n.globalAlpha=.35+i()*.55,n.lineWidth=.7+i()*1.5,n.beginPath(),n.moveTo(s+(i()-.5)*5,d),n.quadraticCurveTo((s+v)/2+(i()-.5)*10,(d+m)/2,v,m),n.stroke()}n.globalAlpha=1;let h=new zn(e);return h.colorSpace=de,h.anisotropy=4,h}function Q0(r){let[e,n]=Lo(512,512),i=qf(23);n.fillStyle="#d6d6d6",n.fillRect(0,0,512,512),n.lineCap="round";for(let a=0;a<16e3;a++){let o=i()*512,c=i()*512,l=3+i()*11,h=-Math.PI/2+(i()-.5)*1.1,f=Math.cos(h)*l,u=Math.sin(h)*l,d=Math.floor(150+i()*105);n.strokeStyle=`rgb(${d},${d},${d})`,n.globalAlpha=.35+i()*.5,n.lineWidth=.7+i()*1.3;for(let g of[-512,0,512])for(let v of[-512,0,512]){let m=o+g,p=c+v;m<-20||m>532||p<-20||p>532||(n.beginPath(),n.moveTo(m,p),n.lineTo(m+f,p+u),n.stroke())}}n.globalAlpha=1;let s=new zn(e);return s.colorSpace=de,s.wrapS=s.wrapT=jn,s.anisotropy=r.capabilities.getMaxAnisotropy(),s}function $0(){let[e,n]=Lo(512,256),i=qf(77),s=[];for(let f=0;f<9;f++){let u=i()*Math.PI*2,d=i()*62;s.push([128+Math.cos(u)*d*1.15,120+Math.sin(u)*d*.85,38+i()*34])}let a=(f,u)=>s.some(([d,g,v])=>(f-d)**2+(u-g)**2<v*v),o=["#2f5522","#3d6a2a","#4c7d32","#5c9038","#6fa443","#87b851"];for(let f=0;f<2600;f++){let u=8+i()*240,d=8+i()*230;if(!a(u,d))continue;let g=1-d/256,v=Math.min(o.length-1,Math.floor((i()*.7+g*.55)*o.length));n.fillStyle=o[v],n.beginPath(),n.ellipse(u,d,3+i()*5,2+i()*3.5,i()*Math.PI,0,Math.PI*2),n.fill()}let c=320,l=["#22402a","#2b4f31","#355e39","#3f6d41","#4d7d4a"];for(let f=0;f<2400;f++){let u=Math.pow(i(),.8),d=6+u*236,g=u*7%1,v=(6+u*58)*(.55+.45*g),m=c+(i()*2-1)*v*.25,p=c+(i()*2-1)*v,x=d+4+Math.abs(p-c)*.18+i()*6;n.strokeStyle=l[Math.min(l.length-1,Math.floor((i()*.8+(1-u)*.4)*l.length))],n.lineWidth=1+i()*2.2,n.beginPath(),n.moveTo(m,d),n.lineTo(p,x),n.stroke()}n.fillStyle="#5a4434",n.fillRect(448,0,64,64);let h=new zn(e);return h.colorSpace=de,h.anisotropy=4,h}var Vf={};function yr(r,t,{srgb:e=!0,repeat:n=!0}={}){if(Vf[r])return Vf[r];let i=new Bs().load("assets/tex/"+r+".webp");return e&&(i.colorSpace=de),n&&(i.wrapS=i.wrapT=jn),i.anisotropy=Math.min(8,t.capabilities.getMaxAnisotropy()),Vf[r]=i,i}var Yf=1100,Io=22,$E=3200,tw=900,Xf=700,jf=600,Kf=6,On=r=>{let t=Math.sin(r*127.1+311.7)*43758.5453;return t-Math.floor(t)},tg=r=>470+70*Math.sin(r/650+1.3)+25*Math.sin(r/230);function ew(r){if(On(r*3.7+1.1)>.8)return null;let t=120+140*On(r*5.3+2.2);return{t:r,s:r*Yf+(On(r*2.9)-.5)*400,len:t,n:Math.round(16+t*.22*(.7+.6*On(r*7.1))),streets:[0],lat:tg}}var Jf=5e3,nw=r=>330+18*Math.sin(r/420);function iw(r){return r<0?null:{t:1e5+r,s:1300+r*Jf,len:450,n:220,streets:[0,42,84],lat:nw,big:!0}}function Zf(){let r=new re(1,1,1).translate(0,.5,0).toNonIndexed(),t=.54,e=1,n=1.45,i=[-t,e,-t,t,e,-t,t,n,0,-t,e,-t,t,n,0,-t,n,0,-t,e,t,-t,n,0,t,n,0,-t,e,t,t,n,0,t,e,t,-t,e,-t,-t,n,0,-t,e,t,t,e,-t,t,e,t,t,n,0],s=new Rt;s.setAttribute("position",new _t(i,3)),s.computeVertexNormals();let a=new Rt,o=r.attributes.position.array,c=r.attributes.normal.array,l=s.attributes.position.array,h=s.attributes.normal.array,f=new Float32Array(o.length+l.length),u=new Float32Array(c.length+h.length);f.set(o),f.set(l,o.length),u.set(c),u.set(h,c.length);let d=new Float32Array(f.length/3);return d.fill(1,o.length/3,f.length/3-6),a.setAttribute("position",new At(f,3)),a.setAttribute("normal",new At(u,3)),a.setAttribute("aRoof",new At(d,1)),a}var sw=`
  uniform float uScale, uFogD;
  varying float vA;
  void main() {
    vec4 mv = viewMatrix * vec4(position, 1.0);
    float fd = uFogD * -mv.z;
    vA = exp(-fd * fd);
    gl_PointSize = clamp(1.6 * uScale / -mv.z, 3.0, 20.0);
    gl_Position = projectionMatrix * mv;
  }`,rw=`
  uniform vec3 uColor; uniform float uAmt;
  varying float vA;
  void main() {
    float d = length(gl_PointCoord - 0.5) * 2.0;
    float a = (smoothstep(0.35, 0.0, d) + exp(-d * d * 5.0) * 0.4) * vA * uAmt;
    if (a < 0.003) discard;
    gl_FragColor = vec4(uColor * a, 1.0);
  }`,Al=class{constructor(t){this.group=new Dt,this.group.visible=!1,t.add(this.group),this.uLit={value:0};let e=new Ut({roughness:.85,metalness:0,side:Me});e.onBeforeCompile=s=>{s.uniforms.uLit=this.uLit,s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
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
          totalEmissiveRadiance += winGlow;`)},e.customProgramCacheKey=()=>"valley-house",ge(e),this.houses=new Te(Zf(),e,Xf),this.houses.count=0,this.houses.frustumCulled=!1,this.houses.instanceColor=new $e(new Float32Array(Xf*3),3),this.group.add(this.houses),this.lightPos=new Float32Array(jf*3);let n=new Rt;n.setAttribute("position",new At(this.lightPos,3)),n.setDrawRange(0,0),this.lightMat=new we({uniforms:{uScale:{value:500},uFogD:{value:0},uAmt:{value:0},uColor:{value:new it(8,4.3,1.4)}},vertexShader:sw,fragmentShader:rw,transparent:!0,depthWrite:!1,blending:Ze,fog:!1}),this.lights=new on(n,this.lightMat),this.lights.frustumCulled=!1,this.lights.renderOrder=4,this.group.add(this.lights);let i=Sa();this.hazes=Array.from({length:Kf},()=>{let s=new Un(new Rn({map:i,color:16751184,transparent:!0,opacity:0,depthWrite:!1,blending:Ze}));return s.visible=!1,this.group.add(s),s}),this.heights=new Map,this.built=null,this._p={},this._m=new wt,this._q=new Xt,this._v=new T,this._s=new T,this._c=new it,this._up=new T(0,1,0)}set visible(t){this.group.visible=t}get visible(){return this.group.visible}reset(){this.heights.clear(),this.built=null}_h(t,e,n,i){let s=this.heights.get(t);return s===void 0&&(s=i.heightAt(e,n),this.heights.set(t,s)),s}_valley(t,e,n,i,s,a=tg){let o=e.at(t,this._p),c=Math.cos(o.th),l=-Math.sin(o.th),h=-Math.sin(o.th),f=-Math.cos(o.th),u=a(t)+n;return s.x=o.x+c*u+h*i,s.z=o.z+l*u+f*i,s.th=o.th,s}_build(t,e,n){let i=t-tw,s=t+$E,a=this._m,o=this._q,c=this._s,l=this._c,h={},f=0,u=0,d=0,g=[];for(let m=Math.floor(i/Yf)-1;m<=Math.ceil(s/Yf)+1;m++){let p=ew(m);p&&p.s>i-p.len&&p.s<s+p.len&&g.push(p)}for(let m=Math.floor((i-1300)/Jf);m<=Math.ceil((s-1300)/Jf);m++){let p=iw(m);p&&p.s>i-p.len&&p.s<s+p.len&&g.push(p)}for(let m of g){for(let p=0;p<m.n&&f<Xf;p++){let x=m.t*1e3+p,y=On(x*1.3),_=On(x*2.7+5),M=On(x*4.1+9),b=On(x*6.7+3),w=_<.5?-1:1,E=m.streets[Math.floor(On(x*11.3)*m.streets.length)]+w*(9+(m.big?12:30)*M*M);this._valley(m.s+(y-.5)*m.len,e,E,0,h,m.lat);let S=this._h("h"+x,h.x,h.z,n),I=this._h("b"+x,h.x+7,h.z+7,n);if(Math.abs(I-S)>4)continue;let D=7+5*b,k=6+3*On(x*8.3),R=(b>.88?8.5:_*7%1>.6?6:3.4)+On(x*9.9);m.big&&On(x*12.7)<.14&&(D=14+8*b,k=10+4*M,R=11+9*On(x*13.1)),o.setFromAxisAngle(this._up,h.th+Math.PI/2+(w>0?0:Math.PI)+(On(x*3.3)-.5)*.35),a.compose(this._v.set(h.x,Math.min(S,I)-.8,h.z),o,c.set(D,R,k)),this.houses.setMatrixAt(f,a);let A=On(x*5.9);l.setRGB(...A<.35?[.82,.8,.74]:A<.6?[.86,.75,.55]:A<.8?[.72,.68,.62]:[.62,.66,.68]),this.houses.setColorAt(f,l),f++}if(d<Kf){this._valley(m.s,e,m.big?42:0,0,h,m.lat);let p=this.hazes[d++];p.position.set(h.x,this._h("z"+m.t,h.x,h.z,n)+(m.big?40:25),h.z),p.scale.set(m.len*2.2,m.len*(m.big?.8:1.1),1),p.userData.on=!0}}for(let m=d;m<Kf;m++)this.hazes[m].userData.on=!1;for(let m of g)if(m.big)for(let p=0;p<m.streets.length;p++)for(let x=-m.len/2;x<=m.len/2&&u<jf;x+=Io){let y=Math.round(x/Io);this._valley(m.s+x,e,m.streets[p]+(y%2?6:-6),0,h,m.lat);let _=this._h("L"+m.t+"_"+p+"_"+y,h.x,h.z,n);this.lightPos.set([h.x,_+6.5,h.z],u*3),u++}for(let m=Math.floor(i/Io);m*Io<s&&u<jf;m++){let p=m*Io,x=!1;for(let M of g)if(!M.big&&Math.abs(p-M.s)<M.len/2+15){x=!0;break}if(!x&&On(m*1.7+.3)>.22)continue;let y=x?m%2?6:-6:5;this._valley(p,e,y,0,h);let _=this._h("l"+m,h.x,h.z,n);this.lightPos.set([h.x,_+6.5,h.z],u*3),u++}this.houses.count=f,this.houses.instanceMatrix.needsUpdate=!0,this.houses.instanceColor&&(this.houses.instanceColor.needsUpdate=!0);let v=this.lights.geometry;v.setDrawRange(0,u),v.attributes.position.needsUpdate=!0,this.heights.size>6e3&&this.heights.clear()}update(t,e,n,i,s,a){if(!this.group.visible)return;let o=Math.floor(t/400);this.built!==o&&(this._build(t,e,n),this.built=o),this.uLit.value=i;let c=this.lightMat.uniforms;c.uAmt.value=i,c.uScale.value=s,c.uFogD.value=a,this.lights.visible=i>.02;for(let l of this.hazes)l.visible=l.userData.on&&i>.02,l.material.opacity=.13*i}};function Ws(r,t=!1){let e=r[0].index!==null,n=new Set(Object.keys(r[0].attributes)),i=new Set(Object.keys(r[0].morphAttributes)),s={},a={},o=r[0].morphTargetsRelative,c=new Rt,l=0;for(let h=0;h<r.length;++h){let f=r[h],u=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in f.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;s[d]===void 0&&(s[d]=[]),s[d].push(f.attributes[d]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in f.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(f.morphAttributes[d])}if(t){let d;if(e)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,h),l+=d}}if(e){let h=0,f=[];for(let u=0;u<r.length;++u){let d=r[u].index;for(let g=0;g<d.count;++g)f.push(d.getX(g)+h);h+=r[u].attributes.position.count}c.setIndex(f)}for(let h in s){let f=eg(s[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,f)}for(let h in a){let f=a[h][0].length;if(f===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let u=0;u<f;++u){let d=[];for(let v=0;v<a[h].length;++v)d.push(a[h][v][u]);let g=eg(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function eg(r){let t,e,n,i=-1,s=0;for(let l=0;l<r.length;++l){let h=r[l];if(h.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.array.length}let a=new t(s),o=0;for(let l=0;l<r.length;++l)a.set(r[l].array,o),o+=r[l].array.length;let c=new At(a,e,n);return i!==void 0&&(c.gpuType=i),c}function ng(r,t=1e-4){t=Math.max(t,Number.EPSILON);let e={},n=r.getIndex(),i=r.getAttribute("position"),s=n?n.count:i.count,a=0,o=Object.keys(r.attributes),c={},l={},h=[],f=["getX","getY","getZ","getW"],u=["setX","setY","setZ","setW"];for(let x=0,y=o.length;x<y;x++){let _=o[x],M=r.attributes[_];c[_]=new At(new M.array.constructor(M.count*M.itemSize),M.itemSize,M.normalized);let b=r.morphAttributes[_];b&&(l[_]=new At(new b.array.constructor(b.count*b.itemSize),b.itemSize,b.normalized))}let d=t*.5,g=Math.log10(1/t),v=Math.pow(10,g),m=d*v;for(let x=0;x<s;x++){let y=n?n.getX(x):x,_="";for(let M=0,b=o.length;M<b;M++){let w=o[M],C=r.getAttribute(w),E=C.itemSize;for(let S=0;S<E;S++)_+=`${~~(C[f[S]](y)*v+m)},`}if(_ in e)h.push(e[_]);else{for(let M=0,b=o.length;M<b;M++){let w=o[M],C=r.getAttribute(w),E=r.morphAttributes[w],S=C.itemSize,I=c[w],D=l[w];for(let k=0;k<S;k++){let R=f[k],A=u[k];if(I[A](a,C[R](y)),E)for(let P=0,N=E.length;P<N;P++)D[P][A](a,E[P][R](y))}}e[_]=a,h.push(a),a++}}let p=r.clone();for(let x in r.attributes){let y=c[x];if(p.setAttribute(x,new At(y.array.slice(0,a*y.itemSize),y.itemSize,y.normalized)),x in l)for(let _=0;_<l[x].length;_++){let M=l[x][_];p.morphAttributes[x][_]=new At(M.array.slice(0,a*M.itemSize),M.itemSize,M.normalized)}}return p.setIndex(h),p}function Qf(r,t){if(t===L0)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(t===Po||t===yl){let e=r.getIndex();if(e===null){let a=[],o=r.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);r.setIndex(a),e=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}let n=e.count-2,i=[];if(t===Po)for(let a=1;a<=n;a++)i.push(e.getX(0)),i.push(e.getX(a)),i.push(e.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(e.getX(a)),i.push(e.getX(a+1)),i.push(e.getX(a+2))):(i.push(e.getX(a+2)),i.push(e.getX(a+1)),i.push(e.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),r}var{chunkLen:Aa,step:Rl}=Le,ji=Le.halfWidth,ig=7,$f=1;function Cl(r,t){let e=new it(t),n=r.attributes.position.count,i=new Float32Array(n*3);for(let s=0;s<n;s++)i[s*3]=e.r,i[s*3+1]=e.g,i[s*3+2]=e.b;return r.setAttribute("color",new At(i,3)),r}var aw=r=>r.index?r.toNonIndexed():r;function sg(r){return Ws(r.map(t=>{let e=aw(t);return e.deleteAttribute("uv"),e}))}function rg(){return sg([Cl(new qe(.22,.34,2.6,6).translate(0,1.3,0),6506034),Cl(new ks(1.9,1).translate(0,4,0),6001736),Cl(new ks(1.3,1).translate(1,3.4,.5),6725711),Cl(new ks(1.2,1).translate(-.9,3.2,-.6),5211967)])}function ag(r,t){let e=[],n=[],i=[],s=[],[a,o,c]=r.center,l=(d,g,v,m,p)=>{let x=new T(d-a,(g-o)*.7,v-c).normalize().add(new T(0,.35,0)).normalize();e.push(d,g,v),n.push(x.x,x.y,x.z),i.push(m,p)};for(let d of r.yaws){let g=Math.cos(d),v=Math.sin(d),m=e.length/3,p=r.w/2,x=r.h/2;l(a-p*g,o-x,c-p*v,r.u0,0),l(a+p*g,o-x,c+p*v,r.u1,0),l(a+p*g,o+x,c+p*v,r.u1,1),l(a-p*g,o+x,c-p*v,r.u0,1),s.push(m,m+1,m+2,m,m+2,m+3)}if(r.top){let d=e.length/3,g=r.top/2,v=r.topY;l(a-g,v,c-g,r.u0,0),l(a+g,v,c-g,r.u1,0),l(a+g,v,c+g,r.u1,1),l(a-g,v,c+g,r.u0,1),s.push(d,d+1,d+2,d,d+2,d+3)}let h=new Rt;h.setAttribute("position",new _t(e,3)),h.setAttribute("normal",new _t(n,3)),h.setAttribute("uv",new _t(i,2)),h.setIndex(s);let f=new qe(t.r0,t.r1,t.h,6).translate(0,t.h/2,0),u=f.attributes.uv;for(let d=0;d<u.count;d++)u.setXY(d,.94,.88);return Ws([f,h])}function og(){return ag({center:[0,4.7,0],w:5.4,h:5,yaws:[0,Math.PI/3,2*Math.PI/3],u0:0,u1:.5,top:4.4,topY:5},{r0:.16,r1:.26,h:3})}function cg(){return ag({center:[0,5.1,0],w:3.8,h:8.2,yaws:[0,Math.PI/3,2*Math.PI/3],u0:.5,u1:.75},{r0:.13,r1:.22,h:1.8})}var Do=11.1,ow=Do-.22,td=3,Ll=Object.freeze({intensity:28,distance:118,angle:1.2,penumbra:.8,decay:.6,glowOpacity:.9,glowSize:9,color:"#ffc98a"});function cw(){return sg([new qe(.08,.13,Do,6).translate(0,Do/2,0),new re(1.9,.08,.1).translate(-.9,Do,0),new re(.5,.1,.22).translate(-1.75,Do-.07,0)])}var lw=`#include <common>
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
}`,hw=`
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
`,uw=`
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
}`,Pl=class{constructor(t,e,n){this.scene=t,this.road=e,this.chunks=new Map,this.queue=[],this.tmp={},this.map="reed",this.lastS=150,this.roadTex=Wf(n),this.cityTex=Wf(n,!0),this.roadMat=new Ut({map:this.roadTex,roughness:.9,metalness:0,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),this.roadU={uWet:{value:0},uPuddle:{value:0},uRain:{value:0},uRainT:{value:0},uReflTex:{value:null},uReflMat:{value:new wt},uReflOn:{value:0},uPlaneY:{value:0},uSunHide:{value:0},uDirtTex:{value:yr("dirt",n)},uGrassCol:{value:new it("#5c6b34")}},this.roadMat.onBeforeCompile=s=>{Object.assign(s.uniforms,this.roadU),s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vRW;
attribute float aDirt;
varying float vDirt;`).replace("#include <project_vertex>",`#include <project_vertex>
vRW = (modelMatrix * vec4(transformed, 1.0)).xyz;
vDirt = aDirt;`),s.fragmentShader=s.fragmentShader.replace("#include <common>",lw).replace("#include <map_fragment>",`#include <map_fragment>
`+hw).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
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
reflectedLight.directSpecular *= 1.0 - uSunHide * puddle;`).replace("#include <opaque_fragment>",uw+`
#include <opaque_fragment>`)},this.railMat=new Ut({color:12172996,roughness:.35,metalness:.75,side:Me}),this.poleMat=new Ut({color:4869973,roughness:.6,metalness:.4}),this.postMat=new Ut({color:15263968,roughness:.7}),this.bulbMat=new en({color:16767392,toneMapped:!1});let i=Sa();this.glowMat=new Ci({map:i,color:16763274,size:9,transparent:!0,opacity:0,depthWrite:!1,blending:Ze,sizeAttenuation:!0});for(let s of[this.roadMat,this.poleMat,this.postMat,this.bulbMat,this.glowMat,this.railMat])ge(s);this.lampOn=0,this.lampTune={...Ll},this.lampLights=Array.from({length:td},()=>{let s=new Gs(16763274,0,80,1.2,.8,.6);return this.scene.add(s,s.target),s}),this._lampList=[],this.lampGeo=cw(),this.railPostGeo=new re(.12,.8,.12).translate(0,.4,0),this.postGeo=new re(.12,.95,.12).translate(0,.475,0),this.bulbGeo=new Pi(.2,8,6)}setMap(t){this.map=t,ji=Le.halfWidth,this.roadMat.map=t==="city"?this.cityTex:this.roadTex;for(let e of this.chunks.values())this._dispose(e);this.chunks.clear(),this.queue.length=0,this.prime(this.lastS)}update(t,e=2){this.lastS=t;let n=Math.floor(t/Aa);for(let i=Math.max(0,n-$f);i<=n+ig;i++)!this.chunks.has(i)&&!this.queue.includes(i)&&this.queue.push(i);this.queue.sort((i,s)=>i-s);for(let i=0;i<e&&this.queue.length;i++){let s=this.queue.shift();s>=n-$f&&s<=n+ig&&this._build(s)}for(let[i,s]of this.chunks)i<n-$f&&(this._dispose(s),this.chunks.delete(i))}prime(t){this.update(t,999)}apply(t){let e=t.lamps,n=new it(9079430).lerp(new it(this.lampTune.color),e);this.bulbMat.color.copy(n).multiplyScalar(.6+1.6*e),this.lampOn=e,this.glowMat.opacity=e*this.lampTune.glowOpacity,this.glowMat.size=this.lampTune.glowSize,this.glowMat.color.set(this.lampTune.color),this.roadMat.roughness=.92-.3*t.wet,this.roadMat.envMapIntensity=.38+.3*t.wet;let i=(1-.4*t.wet)*(1-.25*t.dark);this.roadMat.color.setRGB(i,i,i);let s=this.roadU;s.uWet.value=t.wet,s.uPuddle.value=t.wet,s.uRain.value=t.rain,s.uSunHide.value=Math.min(1,t.overcast*1.2+t.rain)}updateLights(t){let e=this._lampList;e.length=0;for(let i of this.chunks.values())for(let s of i.userData.lamps||[]){let[a]=s;e.push({L:s,d:Math.hypot(a[0]-t.x,a[1]-t.y,a[2]-t.z)})}if(this.extraLamps)for(let i of this.extraLamps()){let[s]=i;e.push({L:i,d:Math.hypot(s[0]-t.x,s[1]-t.y,s[2]-t.z)})}e.sort((i,s)=>i.d-s.d);let n=e.length>td?e[td].d:1/0;this.lampLights.forEach((i,s)=>{let a=e[s];if(!a||this.lampOn<=0){i.intensity=0;return}let o=n===1/0?1:Math.min(1,Math.max(0,(n-a.d)/(.3*n))),[c,l]=a.L;i.position.set(c[0],c[1],c[2]),i.target.position.set(l[0],l[1],l[2]),i.target.updateMatrixWorld();let h=this.lampTune;i.color.set(h.color),i.distance=h.distance,i.angle=h.angle,i.penumbra=h.penumbra,i.decay=h.decay,i.intensity=h.intensity*this.lampOn*o*o*(3-2*o)})}hitLamp(t,e,n,i,s=48){let a=new T;for(let o of this.chunks.values())for(let[c]of o.userData.lamps||[]){if(a.set(c[0],c[1],c[2]).project(t),a.z<-1||a.z>1)continue;let l=i.left+(a.x+1)*i.width*.5,h=i.top+(1-a.y)*i.height*.5;if(Math.hypot(e-l,n-h)<=s)return!0}return!1}setReflection(t,e){let n=this.roadU;n.uRainT.value=e,n.uReflOn.value=t.active?1:0,t.active&&(n.uReflTex.value=t.rt.texture,n.uReflMat.value.copy(t.texMatrix),n.uPlaneY.value=t.planeY)}_build(t){let e=new Dt,n=this.road,i=t*Aa,s=this.tmp,a=Aa/Rl,o=new Float32Array((a+1)*6),c=new Float32Array((a+1)*4),l=new Float32Array((a+1)*6),h=new Float32Array((a+1)*2),f=[];for(let A=0;A<=a;A++){let P=i+A*Rl;n.at(P,s);let N=Math.cos(s.th),U=-Math.sin(s.th),V=s.y+.05;o.set([s.x-N*ji,V,s.z-U*ji,s.x+N*ji,V,s.z+U*ji],A*6),c.set([0,P/12,1,P/12],A*4),l.set([0,1,0,0,1,0],A*6);let q=n.dirtAt(P);if(h[A*2]=h[A*2+1]=q,A<a){let j=A*2;f.push(j,j+1,j+2,j+1,j+3,j+2)}}let u=new Rt;u.setAttribute("position",new At(o,3)),u.setAttribute("normal",new At(l,3)),u.setAttribute("uv",new At(c,2)),u.setAttribute("aDirt",new At(h,1)),u.setIndex(f),u.computeVertexNormals();let d=new Gt(u,this.roadMat);d.receiveShadow=!0,d.layers.set(3),e.add(d),e.userData.own=[u];let g=[];for(let A=i;A<i+Aa&&this.map!=="city";A+=12)if(!(n.dirtAt(A)>.05)){n.at(A,s);for(let P of this.map==="mountain"?[-1]:[-1,1])g.push([s.x+Math.cos(s.th)*(ji+.7)*P,s.y,s.z-Math.sin(s.th)*(ji+.7)*P])}let v=new Te(this.postGeo,this.postMat,g.length),m=new wt;if(g.forEach(([A,P,N],U)=>{m.makeTranslation(A,P,N),v.setMatrixAt(U,m)}),e.add(v),this.map==="mountain"){let A=Aa/Rl,P=new Float32Array((A+1)*6),N=[],U=[];for(let at=0;at<=A;at++){let G=i+at*Rl;n.at(G,s);let $=s.x+Math.cos(s.th)*(ji+.55),gt=s.z-Math.sin(s.th)*(ji+.55);if(P.set([$,s.y+.5,gt,$,s.y+.82,gt],at*6),at<A){let pt=at*2;N.push(pt,pt+2,pt+1,pt+1,pt+2,pt+3)}at%2===0&&U.push([$,s.y,gt])}let V=new Rt;V.setAttribute("position",new At(P,3)),V.setIndex(N),V.computeVertexNormals();let q=new Gt(V,this.railMat);q.castShadow=!0,e.add(q),e.userData.own.push(V);let j=new Te(this.railPostGeo,this.poleMat,U.length);U.forEach(([at,G,$],gt)=>{m.makeTranslation(at,G,$),j.setMatrixAt(gt,m)}),e.add(j)}let p=[],x=[],y=[],_=this.map==="city",M=_?4:this.map==="reed"?2:1,b=Aa/M;for(let A=0;A<M;A++){let P=i+A*b+(_?21:6);if(n.dirtAt(P)>.05)continue;if(_){let $=n.nearJunction(P);if($!==null&&Math.abs(P-$)<16)continue}n.at(P,s);let N=this.map==="mountain"?-1:Math.round(P/b)%2?1:-1,U=ji+(_?.9:1.4),V=s.x+Math.cos(s.th)*U*N,q=s.z-Math.sin(s.th)*U*N,j=s.th+(N===1?0:Math.PI);p.push([V,s.y,q,j]);let at=-Math.cos(j)*1.75,G=Math.sin(j)*1.75;x.push([V+at,s.y+ow,q+G]),y.push([V+at*4.5,s.y,q+G*4.5])}let w=new Te(this.lampGeo,this.poleMat,p.length),C=new Xt,E=new T(0,1,0),S=new T(1,1,1),I=new T;p.forEach(([A,P,N,U],V)=>{C.setFromAxisAngle(E,U),m.compose(I.set(A,P,N),C,S),w.setMatrixAt(V,m)}),w.castShadow=!0,e.add(w);let D=new Te(this.bulbGeo,this.bulbMat,x.length);x.forEach(([A,P,N],U)=>{m.makeTranslation(A,P,N),D.setMatrixAt(U,m)}),e.add(D);let k=new Rt;k.setAttribute("position",new _t(x.flat(),3));let R=new on(k,this.glowMat);R.frustumCulled=!1,R.renderOrder=3,e.add(R),e.userData.own.push(k),e.userData.lamps=x.map((A,P)=>[A,y[P]]),this.scene.add(e),this.chunks.set(t,e)}_dispose(t){this.scene.remove(t),t.userData.own.forEach(e=>e.dispose()),t.traverse(e=>{e.isInstancedMesh&&e.dispose()})}};var Ra=180,fw=1150,dw=260,Cn=.2,oi=.055,Il=30,Fo={cycle:46,mainG:22,y:3,allRed:1.5,crossG:15.5,stopA:11.45},lg=[[.15,1,.6],[1,.72,.05],[1,.08,.04]],pw=[[.03,.06,.05],[.07,.06,.02],[.07,.02,.02]],ed='"Hiragino Sans","Hiragino Kaku Gothic ProN","Noto Sans JP","Noto Sans CJK JP","Yu Gothic","Meiryo",sans-serif',mw=[["コンビニ","#1d8f4e","#ffffff"],["ベーカリー","#f3e2c4","#7a4a1f"],["カフェ","#3b2a22","#f2d7a0"],["ドラッグ","#1554a8","#ffe14a"],["ラーメン","#c8231c","#ffffff"],["そば・うどん","#f4efe2","#202020"],["クリーニング","#2a7fc0","#ffffff"],["花屋","#f6c8d4","#6a2440"],["書店","#24456e","#ffffff"],["居酒屋","#2b2b2b","#ff9b3d"],["寿司","#f6f2e8","#b3151a"],["美容室","#ffffff","#333333"],["不動産","#ffd23a","#1b3a7a"],["メガネ","#e6e9ee","#1d4f91"],["焼肉","#151515","#ff4b2b"],["ドーナツ","#ff86b4","#ffffff"]],gw=[["ラーメン","#c8231c","#ffffff"],["カラオケ","#6b2bd9","#ffffff"],["居酒屋","#1b1b1b","#ffb03a"],["薬","#1554a8","#ffffff"],["歯科","#ffffff","#1b6fb8"],["焼肉","#2a0d0a","#ff5a2a"],["ホテル","#0f2d55","#9fe0ff"],["喫茶","#4a2e1f","#ffe3b0"],["不動産","#ffd23a","#112233"],["寿司","#ffffff","#b3151a"],["麻雀","#0d5a2f","#ffffff"],["整骨院","#ffffff","#c21f3a"],["美容室","#f0e6ff","#5a2a8a"],["中華","#d42a1f","#ffd84a"],["クリニック","#e8f6ff","#0d6aa8"],["学習塾","#ff7a00","#ffffff"]],hg=[[.76,.69,.59],[.86,.86,.84],[.67,.68,.69],[.47,.35,.28],[.87,.81,.69],[.63,.69,.73],[.38,.39,.41],[.64,.45,.36]];function Fl(r){let t=r>>>0||1;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Ca(r,t,e,n=!0){let i=document.createElement("canvas");i.width=r,i.height=t,e(i.getContext("2d"),r,t);let s=new zn(i);return n&&(s.colorSpace=de),s.anisotropy=4,s}function vw(){return Ca(512,768,(r,t)=>{mw.forEach(([e,n,i],s)=>{let a=s*48;r.fillStyle=n,r.fillRect(0,a,t,48),r.fillStyle="rgba(0,0,0,0.25)",r.fillRect(0,a,t,3),r.fillRect(0,a+45,t,3),r.font=`bold 32px ${ed}`;let o=r.measureText(e).width;r.save(),r.translate(t/2,a+25),o>t*.6&&r.scale(t*.6/o,1),r.fillStyle=i,r.textAlign="center",r.textBaseline="middle",r.fillText(e,0,0),r.restore()})})}function xw(){return Ca(1024,512,r=>{gw.forEach(([t,e,n],i)=>{let s=i*64,a=[...t];r.fillStyle=e,r.fillRect(s,0,64,512),r.strokeStyle=n,r.globalAlpha=.5,r.lineWidth=3,r.strokeRect(s+5,5,54,502),r.globalAlpha=1;let o=Math.min(46,440/a.length);r.font=`bold ${o}px ${ed}`,r.fillStyle=n,r.textAlign="center",r.textBaseline="middle";let c=256-(a.length-1)*o*.55;a.forEach((l,h)=>r.fillText(l,s+32,c+h*o*1.1))})})}function bw(){let r=Ca(256,256,t=>{let e=Fl(7);for(let i=0;i<4;i++)for(let s=0;s<4;s++){let a=160+Math.floor(e()*22);t.fillStyle=`rgb(${a},${a-2},${a-8})`,t.fillRect(s*64,i*64,64,64)}let n=t.getImageData(0,0,256,256);for(let i=0;i<n.data.length;i+=4){let s=(e()-.5)*18;n.data[i]+=s,n.data[i+1]+=s,n.data[i+2]+=s}t.putImageData(n,0,0),t.fillStyle="rgba(60,58,54,0.55)";for(let i=0;i<4;i++)t.fillRect(i*64,0,2,256),t.fillRect(0,i*64,256,2)});return r.wrapS=r.wrapT=jn,r}function yw(){return Ca(512,128,r=>{r.fillStyle="#1b4fb4",r.fillRect(4,4,120,120),r.strokeStyle="#fff",r.lineWidth=4,r.strokeRect(9,9,110,110),r.fillStyle="#fff",r.beginPath(),r.moveTo(64,18),r.lineTo(112,108),r.lineTo(16,108),r.closePath(),r.fill(),r.fillStyle="#1b2a44",r.beginPath(),r.arc(64,48,7,0,7),r.fill(),r.lineWidth=6,r.strokeStyle="#1b2a44",r.lineCap="round",r.beginPath(),r.moveTo(64,57),r.lineTo(60,78),r.lineTo(50,98),r.moveTo(60,78),r.lineTo(72,97),r.moveTo(62,64),r.lineTo(76,72),r.moveTo(62,64),r.lineTo(50,74),r.stroke(),r.fillStyle="#1b2a44";for(let t=0;t<5;t++)r.fillRect(28+t*15,101,9,4);r.fillStyle="#fff",r.beginPath(),r.moveTo(132,10),r.lineTo(252,10),r.lineTo(192,120),r.closePath(),r.fill(),r.fillStyle="#c8161d",r.beginPath(),r.moveTo(140,15),r.lineTo(244,15),r.lineTo(192,110),r.closePath(),r.fill(),r.fillStyle="#fff",r.font=`bold 26px ${ed}`,r.textAlign="center",r.textBaseline="middle",r.fillText("止まれ",192,42),r.fillStyle="#fff",r.beginPath(),r.arc(320,64,60,0,7),r.fill(),r.strokeStyle="#c8161d",r.lineWidth=12,r.beginPath(),r.arc(320,64,52,0,7),r.stroke(),r.fillStyle="#1b3f9a",r.font="bold 54px Arial, sans-serif",r.fillText("40",320,68),r.fillStyle="#1b4fb4",r.beginPath(),r.arc(448,64,58,0,7),r.fill(),r.strokeStyle="#c8161d",r.lineWidth=11,r.beginPath(),r.arc(448,64,53,0,7),r.stroke(),r.beginPath(),r.moveTo(412,28),r.lineTo(484,100),r.stroke()})}function ug(){let r=Ca(256,256,t=>{let e=Fl(11);t.fillStyle="#8a8274",t.fillRect(0,0,256,256);for(let n=0;n<2600;n++){let i=95+Math.floor(e()*90);t.fillStyle=`rgb(${i},${i-6},${i-16})`,t.fillRect(e()*256,e()*256,1+e()*3,1+e()*3)}for(let n=0;n<40;n++)t.fillStyle=`rgba(70,85,40,${.25+e()*.3})`,t.beginPath(),t.arc(e()*256,e()*256,4+e()*14,0,7),t.fill()});return r.wrapS=r.wrapT=jn,r}function _w(){return Ca(128,256,r=>{r.fillStyle="#f4f4f2",r.fillRect(0,0,128,256),r.fillStyle="#c62026",r.fillRect(0,0,128,18);let t=["#d33","#25a","#e90","#2a5","#fff","#713","#39c","#cb2"],e=Fl(3);for(let n=0;n<3;n++){r.fillStyle="#dfe9f0",r.fillRect(8,24+n*38,112,34);for(let i=0;i<6;i++)r.fillStyle=t[Math.floor(e()*t.length)],r.fillRect(12+i*18,28+n*38,12,22);r.fillStyle="#2b2";for(let i=0;i<6;i++)r.fillRect(14+i*18,52+n*38,8,3)}r.fillStyle="#333",r.fillRect(84,140,30,40),r.fillStyle="#111",r.fillRect(14,200,100,30)})}function Mw(){let r=new re(1,1,1).translate(0,.5,0).toNonIndexed();return r.deleteAttribute("uv"),r.setAttribute("aRoof",new At(new Float32Array(r.attributes.position.count),1)),r}function Ew(){let r=[new qe(.12,.17,11,8).translate(0,5.5,0),new re(.12,.12,2).translate(0,9.6,0),new re(.1,.1,1.5).translate(0,10.4,0),new qe(.3,.3,.9,10).translate(0,7.6,-.42)].map(i=>{let s=i.index?i.toNonIndexed():i;return s.deleteAttribute("uv"),s}),t=[],e=[];for(let i of r)t.push(...i.attributes.position.array),e.push(...i.attributes.normal.array);let n=new Rt;return n.setAttribute("position",new _t(t,3)),n.setAttribute("normal",new _t(e,3)),n}var ww=`#include <common>
attribute float aRoof; attribute vec4 aInfo;
varying vec3 vWall, vNL, vSize; varying float vRoof; varying vec4 vInfo;`,Tw=`#include <begin_vertex>
vSize = vec3(length(instanceMatrix[0].xyz), length(instanceMatrix[1].xyz), length(instanceMatrix[2].xyz));
vWall = position * vSize; vNL = normal; vRoof = aRoof; vInfo = aInfo;`,Sw=`#include <common>
uniform float uLit, uWin, uSignK; uniform sampler2D uSignTex;
varying vec3 vWall, vNL, vSize; varying float vRoof; varying vec4 vInfo;
float hh(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }`,Aw=`#include <color_fragment>
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
      cEmis = sc * (0.12 + 1.4 * uLit) * uSignK;
    } else if (y > 0.1 && y < 2.62 && abs(u) < halfW - 0.35) {
      float fx = fract(u / 1.7 + 0.5);
      float g = step(0.035, fx) * step(fx, 0.965) * step(y, 2.52) * step(0.16, y);
      diffuseColor.rgb = mix(wallC * 0.3, vec3(0.04, 0.05, 0.055), g);
      cGlass = g;
      vec3 inside = mix(vec3(1.0, 0.85, 0.62), vec3(0.9, 0.96, 1.0), step(0.5, fract(seed * 7.0)));
      cEmis = inside * g * (0.15 + 2.4 * uLit) * (1.0 - 0.35 * smoothstep(1.4, 2.5, y)) * uWin;
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
    cEmis += warm * 3.2 * uLit * win * lit * uWin;
  }
}`,Dl=class{constructor(t,e,n,i){this.scenery=i,this.scene=t,this.road=e,this.roadMat=n,this.group=new Dt,this.group.visible=!1,t.add(this.group),this.blocks=new Map,this.uLit={value:0},this.uWin={value:1},this.uSignK={value:1},this.uSignTex={value:vw()},this.facade=new Ut({roughness:.82,metalness:0}),this.facade.onBeforeCompile=a=>{a.uniforms.uLit=this.uLit,a.uniforms.uSignTex=this.uSignTex,a.uniforms.uWin=this.uWin,a.uniforms.uSignK=this.uSignK,a.vertexShader=a.vertexShader.replace("#include <common>",ww).replace("#include <begin_vertex>",Tw),a.fragmentShader=a.fragmentShader.replace("#include <common>",Sw).replace("#include <color_fragment>",Aw).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
roughnessFactor = mix(roughnessFactor, 0.06, cGlass);`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += cEmis;`)},this.facade.customProgramCacheKey=()=>"city-facade",this.walkMat=new Ut({map:bw(),roughness:.92}),this.lotMat=new Ut({map:ug(),roughness:1}),this.lawnMat=new Ut({map:ug(),color:7313994,roughness:1}),this.propMats={slab:new Ut({color:14276818,roughness:.8}),rail:new Ut({color:12567751,roughness:.4,metalness:.2}),hedge:new Ut({color:3103274,roughness:.95}),bench:new Ut({color:8016435,roughness:.8}),tree:new Ut({vertexColors:!0,roughness:.9})},this.unitBox=new re(1,1,1),this.treeGeo=rg(),this.markMat=new Ut({vertexColors:!0,roughness:.6,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}),this.poleMat=new Ut({color:9342343,roughness:.85}),this.wireMat=new ps({color:1776413}),this.uGlow={value:0},this.signMat=new Ut({map:xw(),roughness:.55}),this.signMat.onBeforeCompile=a=>{a.uniforms.uGlow=this.uGlow,a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
attribute float aCell;`).replace("#include <uv_vertex>",`#include <uv_vertex>
vMapUv.x = (vMapUv.x + aCell) / 16.0;`),a.fragmentShader=a.fragmentShader.replace("#include <common>",`#include <common>
uniform float uGlow;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += diffuseColor.rgb * uGlow;`)},this.signMat.customProgramCacheKey=()=>"city-vsign";let s=_w();this.vendBody=new Ut({color:15329766,roughness:.45,metalness:.15}),this.vendFront=new Ut({map:s,emissiveMap:s,emissive:16777215,emissiveIntensity:.3,roughness:.25});for(let a of[this.facade,this.lotMat,this.lawnMat,...Object.values(this.propMats),this.walkMat,this.markMat,this.poleMat,this.wireMat,this.signMat,this.vendBody,this.vendFront])ge(a);this.boxGeo=Mw(),this.houseGeo=Zf(),this.poleGeo=Ew(),this.signGeo=new re(1,1,1).translate(0,.5,0),this.vendGeo=new re(1,1.83,.75).translate(0,.915,0),this._p={},this._q={},this._m=new wt,this._qt=new Xt,this._v=new T,this._s=new T,this._up=new T(0,1,0),this._c=new it,this.lastS=0,this.camF=1,this.clock=0,this.clockRate=1,this.sigMat=new Ut({color:2829616,roughness:.6,metalness:.3}),this.lensMat=new en({color:16777215,toneMapped:!1}),ge(this.sigMat),ge(this.lensMat),this.headGeo=new re(1.3,.44,.3),this.lensGeo=new qe(.15,.15,.04,14).rotateX(Math.PI/2),this.sigPoleGeo=new qe(.1,.12,1,8).translate(0,.5,0),this.armGeo=new re(1,.1,.1).translate(.5,0,0),this.signTex=yw(),this.roadSignMat=new Ut({map:this.signTex,roughness:.5,alphaTest:.5,transparent:!1}),this.roadSignMat.onBeforeCompile=a=>{a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
attribute float aCell;`).replace("#include <uv_vertex>",`#include <uv_vertex>
vMapUv.x = (vMapUv.x + aCell) / 4.0;`)},this.roadSignMat.customProgramCacheKey=()=>"city-roadsign",this.signBackMat=new Ut({map:this.signTex,color:3026995,roughness:.7,alphaTest:.5}),this.signBackMat.onBeforeCompile=this.roadSignMat.onBeforeCompile,this.signBackMat.customProgramCacheKey=()=>"city-roadsign-back",ge(this.roadSignMat),ge(this.signBackMat),this.signPlate=new ai(.75,.75),this.signPost=new qe(.035,.035,1,6).translate(0,.5,0),this.uSig={uScale:{value:500},uFogD:{value:0},uDay:{value:1},uGain:{value:1},uSize:{value:1}},this.sigGlowMat=new we({uniforms:this.uSig,transparent:!0,depthWrite:!1,blending:Ze,fog:!1,vertexShader:`attribute vec3 aCol; attribute vec3 aDir; uniform float uScale, uFogD, uGain, uSize; varying vec3 vCol;
        void main() {
          vec4 wp = modelMatrix * vec4(position, 1.0); vec4 mv = viewMatrix * wp;
          float face = smoothstep(-0.1, 0.45, dot(normalize(cameraPosition - wp.xyz), aDir));
          float fd = uFogD * -mv.z;
          vCol = aCol * face * exp(-fd * fd * 0.5) * uGain;
          gl_PointSize = clamp(1.9 * uScale / -mv.z, 11.0, 90.0) * uSize;
          gl_Position = projectionMatrix * mv;
        }`,fragmentShader:`uniform float uDay; varying vec3 vCol;
        void main() {
          float d = length(gl_PointCoord - 0.5) * 2.0;
          float a = smoothstep(0.32, 0.0, d) + exp(-d * d * 4.0) * 0.55;
          if (a * max(vCol.r, max(vCol.g, vCol.b)) < 0.004) discard;
          gl_FragColor = vec4(vCol * a * mix(1.6, 0.9, uDay), 1.0);
        }`})}_phase(t){let e=Fo,n=(Math.sin(t*91.7+13.1)*43758.5453%1+1)%1*e.cycle,i=((this.clock+n)%e.cycle+e.cycle)%e.cycle,s=i<e.mainG?0:i<e.mainG+e.y?1:2,a=e.mainG+e.y+e.allRed,o=i>=a&&i<a+e.crossG?0:i>=a+e.crossG&&i<a+e.crossG+e.y?1:2;return{main:s,cross:o,t:i}}mainLight(t){return this._phase(t).main}stopAhead(t,e,n){if(!this.group.visible)return 1/0;let i=this.road,s=Fo.stopA,a=e>0?i.junctionIndex(t+s-1):i.junctionIndex(t-s+1)-1,o=i.junction(a)-e*s,c=(o-t)*e;if(c>160||c<-1)return 1/0;let l=this._phase(a).main;return l===2||l===1&&c>n*n/8?c:1/0}collide(t,e,n){if(!this.group.visible){this.camF=1;return}let i=t.x,s=t.y+1.3,a=t.z,o=e.x-i,c=e.y-s,l=e.z-a,h=Math.hypot(o,c,l);if(h<.5)return;let f=this._near||(this._near=[]);f.length=0;let u=h+25;for(let v of this.blocks.values()){let m=v.userData.obb;for(let p=0;p<m.length;p+=7)Math.abs(m[p]-i)<u&&Math.abs(m[p+1]-a)<u&&f.push(p,m)}let d=1,g=.6;for(let v=.8;v<=h+g&&d===1;v+=.35){let m=i+o*v/h,p=s+c*v/h,x=a+l*v/h;for(let y=0;y<f.length;y+=2){let _=f[y],M=f[y+1];if(p>M[_+6]+g)continue;let b=m-M[_],w=x-M[_+1],C=b*M[_+2]-w*M[_+3],E=b*M[_+3]+w*M[_+2];if(Math.abs(C)<M[_+4]+g&&Math.abs(E)<M[_+5]+g){d=Math.max(.05,(v-g)/h);break}}}this.camF=d<this.camF?d:this.camF+(d-this.camF)*(1-Math.exp(-n*2.5)),this.camF<.999&&e.set(i+o*this.camF,s+c*this.camF,a+l*this.camF)}set visible(t){this.group.visible=t,t||this.reset()}get visible(){return this.group.visible}reset(){for(let t of this.blocks.values())this._dispose(t);this.blocks.clear()}update(t,e,n=0,i=1,s=500,a=0){if(!this.group.visible)return;this.uSig.uScale.value=s,this.uSig.uFogD.value=a,this.uSig.uDay.value=1-e,this.clock+=n*this.clockRate;let o=this._c;for(let[u,d]of this.blocks){let g=d.userData.lens;if(!g)continue;let v=this._phase(u),m=3+4*e;for(let p=0;p<g.kind.length;p++){let x=(g.kind[p]?v.cross:v.main)===g.col[p],y=x?lg[g.col[p]]:pw[g.col[p]];g.mesh.setColorAt(p,o.setRGB(y[0]*(x?m:1),y[1]*(x?m:1),y[2]*(x?m:1)))}if(g.mesh.instanceColor.needsUpdate=!0,g.glow){let p=g.glow.geometry.attributes.aCol;for(let x=0;x<g.kind.length;x++){let y=(g.kind[x]?v.cross:v.main)===g.col[x],_=lg[g.col[x]];p.setXYZ(x,y?_[0]*3:0,y?_[1]*3:0,y?_[2]*3:0)}p.needsUpdate=!0}}this.lastS=t,this.uLit.value=e,this.uGlow.value=(.15+1.6*e)*this.uSignK.value,this.vendFront.emissiveIntensity=.25+1.1*e;let c=this.road,l=c.junctionIndex(t-dw)-1,h=c.junctionIndex(t+fw),f=[];for(let u=l;u<=h;u++)this.blocks.has(u)||f.push(u);f.sort((u,d)=>Math.abs(c.junction(u)-t)-Math.abs(c.junction(d)-t));for(let u=0;u<i&&u<f.length;u++)this.blocks.set(f[u],this._build(f[u]));for(let[u,d]of this.blocks)(u<l||u>h)&&(this._dispose(d),this.blocks.delete(u))}prime(t){this.group.visible&&this.update(t,this.uLit.value,0,99)}lamps(){let t=[];if(this.group.visible)for(let e of this.blocks.values())for(let n of e.userData.lampsJ||[])t.push(n);return t}_dispose(t){this.group.remove(t),t.traverse(e=>{e.isInstancedMesh&&e.dispose(),e.geometry&&e.geometry.userData.own&&e.geometry.dispose()})}groundJ(t,e){let n=t.x+t.rx*e,i=t.z+t.rz*e,s=Math.abs(e),a=Math.min(1,Math.max(0,(s-Ae.hw-1.2)/14.8));return t.y+(Li(n,i)-t.y)*a*a*(3-2*a)-.02}_frame(t){let e=this.road.at(t,{});return{x:e.x,y:e.y,z:e.z,rx:Math.cos(e.th),rz:-Math.sin(e.th),fx:-Math.sin(e.th),fz:-Math.cos(e.th),th:e.th}}_build(t){let e=this.road,n=new Dt,i=e.junction(t),s=e.junction(t+1),a=Ae.hw,o=Ae.walk,c=Ae.side,l=Ae.sideWalk,h=a+o+.4,f={pos:[],nor:[],col:[],idx:[]},u={pos:[],nor:[],uv:[],idx:[]},d={pos:[],nor:[],uv:[],idx:[]},g={pos:[],nor:[],uv:[],idx:[]},v=[],m=[.86,.86,.83],p=[.86,.66,.16],x=[.85,.7,.12],y=(z,O,J,W)=>{let et=Math.abs(W),st=Math.min(1,Math.max(0,(et-a-1.2)/14.8));return J+(Li(z,O)-J)*st*st*(3-2*st)-.02},_=(z,O,J,W,et)=>{let st=z.pos.length/3;for(let Kt=0;Kt<4;Kt++)z.pos.push(O[Kt][0],O[Kt][1],O[Kt][2]),z.nor.push(J[0],J[1],J[2]),z.col&&z.col.push(...W),z.uv&&z.uv.push(...et?et[Kt]:[0,0]);let xt=O[1][0]-O[0][0],Y=O[1][1]-O[0][1],Et=O[1][2]-O[0][2],lt=O[2][0]-O[0][0],dt=O[2][1]-O[0][1],ft=O[2][2]-O[0][2],ct=Y*ft-Et*dt,Tt=Et*lt-xt*ft,jt=xt*dt-Y*lt;ct*J[0]+Tt*J[1]+jt*J[2]>=0?z.idx.push(st,st+1,st+2,st,st+2,st+3):z.idx.push(st,st+2,st+1,st,st+3,st+2)},M=[0,1,0],b=(z,O,J)=>{let W=e.at(z,this._p);return[W.x+Math.cos(W.th)*O,W.y+J,W.z-Math.sin(W.th)*O]},w=(z,O,J,W,et,st,xt,Y)=>{if(J<=O)return;let Et=Math.max(1,Math.ceil((J-O)/2));for(let lt=0;lt<Et;lt++){let dt=O+(J-O)*lt/Et,ft=O+(J-O)*(lt+1)/Et;_(z,[b(dt,W,st),b(ft,W,st),b(ft,et,st),b(dt,et,st)],M,xt,Y&&[Y(dt,W),Y(ft,W),Y(ft,et),Y(dt,et)])}},C=(z,O,J,W,et,st,xt)=>{let Y=Math.max(1,Math.ceil((J-O)/2));for(let Et=0;Et<Y;Et++){let lt=O+(J-O)*Et/Y,dt=O+(J-O)*(Et+1)/Y,ft=e.at((lt+dt)/2,this._q),ct=[-Math.cos(ft.th)*xt,0,Math.sin(ft.th)*xt];_(z,[b(lt,W,et),b(dt,W,et),b(dt,W,st),b(lt,W,st)],ct,null,[[0,lt/2],[0,dt/2],[.1,dt/2],[.1,lt/2]])}},E=this._frame(i),S=(z,O)=>E.x+E.fx*z+E.rx*O,I=(z,O)=>E.z+E.fz*z+E.rz*O,D=z=>y(S(0,z),I(0,z),E.y,z),k=(z,O,J)=>[S(z,O),D(O)+J,I(z,O)],R=(z,O,J,W,et,st,xt,Y)=>{let Et=Math.min(W,et),lt=Math.max(W,et),dt=[Et];for(let ft=Math.ceil((Et-a)/4);a+ft*4<lt;ft++){let ct=a+ft*4;ct>Et&&dt.push(ct)}for(let ft=Math.ceil((Et+a)/4);-a+ft*4<lt;ft++){let ct=-a+ft*4;ct>Et&&ct<0&&dt.push(ct)}dt.push(lt),dt.sort((ft,ct)=>ft-ct);for(let ft=0;ft+1<dt.length;ft++){let ct=dt[ft],Tt=dt[ft+1];Tt-ct<.001||_(z,[k(O,ct,st),k(J,ct,st),k(J,Tt,st),k(O,Tt,st)],M,xt,Y&&[Y(O,ct),Y(J,ct),Y(J,Tt),Y(O,Tt)])}};for(let z of[-1,1]){let O=z*a,J=z*Ra;R(d,-c,c,O,J,.05,null,(W,et)=>[(W+c)/(2*c),et/12]);for(let W of[-1,1]){R(u,W*c,W*(c+l),z*h,J,Cn,null,(et,st)=>[et/2,st/2]);for(let et=h;et<Ra;et+=4){let st=Math.min(Ra,et+4);_(u,[k(W*c,z*et,.03),k(W*c,z*st,.03),k(W*c,z*st,Cn),k(W*c,z*et,Cn)],[-W*E.fx,0,-W*E.fz],null,[[0,et/2],[0,st/2],[.1,st/2],[.1,et/2]])}}for(let W=-c+.35;W<c-.3;W+=.9)R(f,W,W+.45,z*(a+.7),z*(a+3.4),oi,m);R(f,z*.15,z*(c-.2),z*(a+4),z*(a+4.45),oi,m);for(let W=h+3;W<Ra-3;W+=6)R(f,-.07,.07,z*W,z*(W+3),oi,m)}for(let z of[-1,1])for(let O=-a+.35;O<a-.4;O+=.9)R(f,z*6.4,z*10.4,O,O+.45,oi,m);R(f,-11.9,-11.45,.2,a-.3,oi,m),R(f,11.45,11.9,-a+.3,-.2,oi,m);let A=i+10.4,P=s-10.4;for(let z of[-1,1]){w(f,A,P,z*.1,z*.25,oi,p),w(f,i+6,s-6,z*(a-.4),z*(a-.25),oi,m);let O=i+12,J=s-12;w(f,O,Math.min(J,O+30),z*3.42,z*3.58,oi,m),w(f,Math.max(O,J-30),J,z*3.42,z*3.58,oi,m);for(let W=Math.ceil((O+30)/10);W*10+5<J-30;W++)w(f,W*10,W*10+5,z*3.42,z*3.58,oi,m)}for(let z of Ae.lanes){let O=s-11.9-8;w(f,O-3.2,O,z-.08,z+.08,oi,m);for(let J=0;J<4;J++){let W=.45-J*.11;w(f,O+J*.25,O+(J+1)*.25,z-W,z+W,oi,m)}}let N=i+c,U=s-c;for(let z of[-1,1]){let O=z*a,J=z*h;w(u,N,U,O,J,Cn,null,(W,et)=>[et/2,W/2]),C(u,N,U,O,.03,Cn,z);for(let[W,et]of[[N,1],[U,-1]]){let st=e.at(W,this._q);_(u,[b(W,O,.03),b(W,J,.03),b(W,J,Cn),b(W,O,Cn)],[Math.sin(st.th)*et,0,Math.cos(st.th)*et],null,[[0,0],[2,0],[2,.1],[0,.1]])}w(f,N+.5,U-.5,z*(a+2.3),z*(a+2.6),Cn+.006,x)}let V=[],q=[],j=[],at=[],G=Fl(t*7919+17),$=(z,O)=>{let J=G();return z===3?2:z===2?5+Math.floor(J*(O?14:8)):z===1?4+Math.floor(J*(O?9:6)):2+Math.floor(J*J*5)},gt=(z,O)=>{let J=e.curvature(z);return J*O<0&&Math.abs(O)>.55/Math.max(Math.abs(J),1e-6)},pt=(z,O,J,W,et,st,xt,Y,Et,lt)=>{let dt=Math.cos(J),ft=Math.sin(J),ct=Et;for(let[mt,bt]of[[-W/2,-et/2],[W/2,-et/2],[-W/2,et/2],[W/2,et/2]])ct=Math.min(ct,Li(z+dt*mt+ft*bt,O-ft*mt+dt*bt));let Tt=ct-.4,jt=Math.round((Et-Tt)*50)/50,Kt=lt||$(st,Y),Ft=G(),ut=(xt?3.6:0)+Kt*(st===2?3.6:st===3?2.9:3)+(st===3?0:.6);pt.last=Kt;let B=hg[st===2?G()<.5?2:5:Math.floor(G()*hg.length)];return V.push([z,O,J,W,ut,et,st,Ft,xt?1:0,Math.floor(G()*16),B,st===3,Tt,jt]),q.push(z,O,dt,ft,W/2,et/2,Et+ut*(st===3?1.45:1)),ut},St=z=>{let O=G();return z?O<.58?0:O<.83?1:O<.96?2:3:O<.3?3:O<.6?1:O<.8?0:2},Vt=i+c+l+18,Yt=s-c-l-18,kt={slab:[],rail:[],hedge:[],bench:[],tree:[]},ae={pos:[],nor:[],uv:[],idx:[]},Z=[],wn=(z,O,J,W)=>{Z.push([J,z,z+O]);let et=this._frame(z+O/2),st=Math.cos(et.th),xt=Math.sin(et.th),Y=(Zt,ce)=>et.x+et.fx*Zt+et.rx*J*ce,Et=(Zt,ce)=>et.z+et.fz*Zt+et.rz*J*ce,lt=(Zt,ce,xn)=>[Y(Zt,ce),xn,Et(Zt,ce)],dt=et.y+Cn,ft=W?.75:1.05,ct=W?4.2:2.3,Tt=et.th+(J>0?-Math.PI/2:Math.PI/2),jt=[-et.rx*J,0,-et.rz*J],Kt=[0,1,0],Ft=h+3.8,ut=h+7.6,B=h+11,mt=14,bt=O-(W?2:3.5);pt(Y(0,B+mt/2),Et(0,B+mt/2),Tt,bt,mt,1,!1,!1,dt+ft,W?6+Math.floor(G()*3):10+Math.floor(G()*4));let Wt=pt.last;this._q4(u,[lt(-ct,h-.1,dt+.005),lt(ct,h-.1,dt+.005),lt(ct,Ft,dt+.005),lt(-ct,Ft,dt+.005)],Kt,[[0,0],[ct,0],[ct,2],[0,2]]);let Ht=Math.round(ft/.15),_e=(ut-Ft)/Ht,me=ft/Ht;for(let Zt=0;Zt<Ht;Zt++){let ce=Ft+Zt*_e,xn=ce+_e,ts=dt+Zt*me,Dn=ts+me;this._q4(u,[lt(-ct,ce,ts),lt(ct,ce,ts),lt(ct,ce,Dn),lt(-ct,ce,Dn)],jt,[[0,0],[ct,0],[ct,.1],[0,.1]]),this._q4(u,[lt(-ct,ce,Dn),lt(ct,ce,Dn),lt(ct,xn,Dn),lt(-ct,xn,Dn)],Kt,[[0,ce/2],[ct,ce/2],[ct,xn/2],[0,xn/2]])}let ye=W?8:5.5,Fe=dt+ft;this._q4(u,[lt(-ye,ut,Fe),lt(ye,ut,Fe),lt(ye,B+.4,Fe),lt(-ye,B+.4,Fe)],Kt,[[0,0],[ye,0],[ye,2],[0,2]]);for(let Zt of[-1,1])this._q4(u,[lt(Zt*ct,ut,dt),lt(Zt*ye,ut,dt),lt(Zt*ye,ut,Fe),lt(Zt*ct,ut,Fe)],jt,[[0,0],[1,0],[1,.2],[0,.2]]),this._q4(u,[lt(Zt*ye,ut,dt),lt(Zt*ye,B+.4,dt),lt(Zt*ye,B+.4,Fe),lt(Zt*ye,ut,Fe)],[et.fx*Zt,0,et.fz*Zt],[[0,0],[1,0],[1,.2],[0,.2]]);for(let Zt of[-1,1]){let ce=Zt*(ct+.4),xn=Zt*(O/2-.4);this._q4(ae,[lt(ce,h+.2,dt+.02),lt(xn,h+.2,dt+.02),lt(xn,B+.4,dt+.02),lt(ce,B+.4,dt+.02)],Kt,[[0,0],[O/6,0],[O/6,4],[0,4]]);let ts=Math.abs(xn-ce),Dn=(ce+xn)/2;kt.hedge.push([Y(Dn,h+.55),dt+.35,Et(Dn,h+.55),Tt,ts,.7,.6]);let Hr=W?[[.5,5.5]]:[[.3,3.2],[.72,8.2]];for(let[Ni,$a]of Hr)kt.tree.push([Y(ce+(xn-ce)*Ni,h+$a),dt,Et(ce+(xn-ce)*Ni,h+$a),G()*6.28,.75+G()*.3,.75+G()*.3,.75+G()*.3]);if(W)for(let Ni of[3.2,7.4])kt.bench.push([Y(Zt*(ct+1.8),h+Ni),dt+.25,Et(Zt*(ct+1.8),h+Ni),Tt+Math.PI/2,1.6,.45,.5])}let Pe=mt/2;for(let Zt=1;Zt<Wt;Zt++){let ce=Fe+Zt*3,xn=Y(0,B-.6),ts=Et(0,B-.6),Dn=Y(0,B-1.15),Hr=Et(0,B-1.15);kt.slab.push([xn,ce+.07,ts,Tt,bt-1.2,.14,1.2]),kt.rail.push([Dn,ce+.6,Hr,Tt,bt-1.2,.95,.08])}return z+O};for(let z of[-1,1]){let O=i+c+l+.4,J=s-c-l-.4,W=O;for(;O<J-4;){let st=G(),xt=O>Vt&&O<Yt-20&&O-W>25;if(xt&&st<.13){O=this._alley(O,2.6+1.3*G(),z,u,v,y,h),W=O;continue}if(xt&&st<.21){O=this._lot(O,10+8*G(),z,g,v,y,h),W=O;continue}if(xt&&st<.3&&Yt-O>40){O=wn(O,28+6*G(),z,G()<.5?0:1),W=O;continue}let Y=Math.min(J-O,5+9*G()*G()+2*G()),Et=10+8*G(),lt=e.at(O+Y/2,this._p),dt=z*(h+Et/2),ft=lt.x+Math.cos(lt.th)*dt,ct=lt.z-Math.sin(lt.th)*dt,Tt=lt.th+(z>0?-Math.PI/2:Math.PI/2),jt=St(!0),Kt=jt!==3&&G()<.8,Ft=lt.y+Cn,ut=pt(ft,ct,Tt,Y,Et,jt,Kt,!1,Ft);if(jt===0&&ut>9&&G()<.6){let B=(G()<.5?-1:1)*(Y/2-.45),mt=Et/2+.42,bt=Math.min(ut-5,3+4*G()),Wt=Math.cos(Tt),Ht=Math.sin(Tt);j.push([ft+Wt*B+Ht*mt,ct-Ht*B+Wt*mt,Tt,Ft+4.3,bt,Math.floor(G()*16)])}if(Kt&&G()<.22){let B=O+.8+G()*Math.max(.1,Y-1.6),mt=e.at(B,this._q),bt=z*(a+o-.05);at.push([mt.x+Math.cos(mt.th)*bt,mt.y+Cn,mt.z-Math.sin(mt.th)*bt,Tt])}O+=Y+(G()<.3?.4+G()*1.2:.05)}let et=h+18.6;for(let[st,xt]of[[i+c+l+.3,1],[s-c-l-.3,-1]]){let Y=this._frame(st),Et=et;for(;Et<Ra-8;){let lt=7+7*G(),dt=10+6*G(),ft=xt*dt/2,ct=z*(Et+lt/2);if(!gt(st,ct)){let Tt=Y.x+Y.fx*ft+Y.rx*ct,jt=Y.z+Y.fz*ft+Y.rz*ct,Kt=Y.x+Y.rx*ct,Ft=Y.z+Y.rz*ct,ut=St(!1);pt(Tt,jt,Y.th+(xt>0?0:Math.PI),lt,dt,ut,ut!==3&&Et<70&&G()<.5,Et>90,y(Kt,Ft,Y.y,ct)+Cn)}Et+=lt+.3+G()*1.5}}for(let st=Vt;st<Yt-9;st+=15){let xt=this._frame(st+7.5);for(let Y=et;Y<Ra-10;Y+=17){let Et=G()<.15,lt=8+5*G(),dt=9+5*G(),ft=z*(Y+8.5),ct=(G()-.5)*2;if(Et||gt(st+7.5,ft)||Y<h+27&&Z.some(([ut,B,mt])=>ut===z&&st<mt&&st+15>B))continue;let Tt=xt.x+xt.fx*ct+xt.rx*ft,jt=xt.z+xt.fz*ct+xt.rz*ft,Kt=Y>90,Ft=Kt&&G()<.12?2:St(!1);pt(Tt,jt,xt.th+(G()<.5?0:Math.PI)+(G()<.5?Math.PI/2:0),lt,dt,Ft,!1,Kt,Li(Tt,jt))}}}n.userData.obb=q;let Ot=(z,O,J,W)=>{if(!z.idx.length)return null;let et=new Rt;et.setAttribute("position",new _t(z.pos,3)),et.setAttribute("normal",new _t(z.nor,3)),J&&et.setAttribute("uv",new _t(z.uv,2)),W&&et.setAttribute("color",new _t(z.col,3)),et.setIndex(z.idx),et.userData.own=!0;let st=new Gt(et,O);return st.receiveShadow=!0,n.add(st),st},Qt=Ot(d,this.roadMat,!0,!1);Qt&&(Qt.geometry.setAttribute("aDirt",new At(new Float32Array(d.pos.length/3),1)),Qt.layers.set(3)),Ot(u,this.walkMat,!0,!1),Ot(g,this.lotMat,!0,!1),Ot(ae,this.lawnMat,!0,!1),Ot(f,this.markMat,!1,!0);let Lt=this._m,be=this._qt,te=this._v,H=this._s,L=this._c;for(let[z,O]of Object.entries(kt)){if(!O.length)continue;let J=new Te(z==="tree"?this.treeGeo:this.unitBox,this.propMats[z],O.length);O.forEach(([W,et,st,xt,Y,Et,lt],dt)=>{be.setFromAxisAngle(this._up,xt),Lt.compose(te.set(W,et,st),be,H.set(Y,Et,lt)),J.setMatrixAt(dt,Lt)}),J.castShadow=!0,J.receiveShadow=z!=="tree",J.frustumCulled=!1,n.add(J)}for(let z of[!1,!0]){let O=V.filter(xt=>xt[11]===z);if(!O.length)continue;let J=z?this.houseGeo:this.boxGeo,W=new Rt;for(let xt of["position","normal","aRoof"])W.setAttribute(xt,J.attributes[xt].clone());let et=new Float32Array(O.length*4),st=new Te(W,this.facade,O.length);st.instanceColor=new $e(new Float32Array(O.length*3),3),O.forEach(([xt,Y,Et,lt,dt,ft,ct,Tt,jt,Kt,Ft,,ut,B],mt)=>{be.setFromAxisAngle(this._up,Et),Lt.compose(te.set(xt,ut,Y),be,H.set(lt,dt+B,ft)),st.setMatrixAt(mt,Lt),st.setColorAt(mt,L.setRGB(Ft[0],Ft[1],Ft[2],de)),et.set([ct,Tt,jt+2*Math.round(B*50),Kt],mt*4)}),W.setAttribute("aInfo",new $e(et,4)),W.userData.own=!0,st.castShadow=st.receiveShadow=!0,st.frustumCulled=!1,n.add(st)}if(j.length){let z=new Rt;for(let W of["position","normal","uv"])z.setAttribute(W,this.signGeo.attributes[W].clone());z.setIndex(this.signGeo.index.clone()),z.userData.own=!0;let O=new Float32Array(j.length),J=new Te(z,this.signMat,j.length);j.forEach(([W,et,st,xt,Y,Et],lt)=>{be.setFromAxisAngle(this._up,st),Lt.compose(te.set(W,xt,et),be,H.set(.14,Y,.8)),J.setMatrixAt(lt,Lt),O[lt]=Et}),z.setAttribute("aCell",new $e(O,1)),J.castShadow=!0,J.frustumCulled=!1,n.add(J)}if(at.length){let z=new Te(this.vendGeo,[this.vendBody,this.vendBody,this.vendBody,this.vendBody,this.vendFront,this.vendBody],at.length);at.forEach(([O,J,W,et],st)=>{be.setFromAxisAngle(this._up,et),Lt.compose(te.set(O,J,W),be,H.set(1,1,1)),z.setMatrixAt(st,Lt)}),z.castShadow=!0,z.frustumCulled=!1,n.add(z)}let Q=z=>{let O=z*Il+8,J=e.nearJunction(O);return Math.abs(O-J)<9?null:O},vt=[];for(let z=Math.ceil((i-8)/Il);z*Il+8<s;z++){let O=Q(z);if(O===null)continue;let J=z+1,W=Q(J);W===null&&(W=Q(++J));for(let et of[-1,1]){let st=et*(a+.45),xt=e.at(O,this._p);if(vt.push([xt.x+Math.cos(xt.th)*st,xt.y+Cn,xt.z-Math.sin(xt.th)*st,xt.th]),W===null)continue;let Y=e.at(W,this._q);for(let[Et,lt,dt]of[[-.9,9.66,.55],[0,9.66,.55],[.9,9.66,.55],[-.7,10.46,.45],[.7,10.46,.45],[.15,6.3,.8]]){let ft=st+Et,ct=xt.x+Math.cos(xt.th)*ft,Tt=xt.z-Math.sin(xt.th)*ft,jt=Y.x+Math.cos(Y.th)*ft,Kt=Y.z-Math.sin(Y.th)*ft,Ft=xt.y+Cn+lt,ut=Y.y+Cn+lt,B=Math.hypot(jt-ct,Kt-Tt),mt=dt*B/Il,bt=ct,Wt=Ft,Ht=Tt;for(let _e=1;_e<=8;_e++){let me=_e/8,ye=ct+(jt-ct)*me,Fe=Tt+(Kt-Tt)*me,Pe=Ft+(ut-Ft)*me-4*mt*me*(1-me);v.push(bt,Wt,Ht,ye,Pe,Fe),bt=ye,Wt=Pe,Ht=Fe}}}}if(vt.length){let z=new Te(this.poleGeo,this.poleMat,vt.length);vt.forEach(([O,J,W,et],st)=>{be.setFromAxisAngle(this._up,et+Math.PI/2),Lt.compose(te.set(O,J,W),be,H.set(1,1,1)),z.setMatrixAt(st,Lt)}),z.castShadow=!0,z.frustumCulled=!1,n.add(z)}if(v.length){let z=new Rt;z.setAttribute("position",new _t(v,3)),z.userData.own=!0;let O=new Vi(z,this.wireMat);O.frustumCulled=!1,n.add(O)}return this._signals(n,E,D),this.group.add(n),n}_signals(t,e,n){let i=Ae.hw,s=Ae.side,a=(R,A)=>[e.x+e.fx*R+e.rx*A,e.z+e.fz*R+e.rz*A],o=[],c=[],l=[],h=(R,A)=>Math.atan2(R,A),f=n(0)+.2,u=(R,A)=>{let[P,N]=a(R,A*(i+.7)),[U,V]=a(R,A*3.6);c.push([P,f,N,5.9]),l.push([P,f+5.7,N,Math.atan2(-(V-N),U-P),Math.hypot(U-P,V-N)+.7]),o.push([U,f+5.55,V,h(A>0?-e.fx:e.fx,A>0?-e.fz:e.fz),0])};u(11,1),u(-11,-1);for(let R of[-1,1]){let A=R*(s+1),[P,N]=a(A,-R*(i+.8));c.push([P,f,N,4.4]),o.push([P,f+4.2,N,h(R*e.rx,R*e.rz),1])}let d=this._m,g=this._qt,v=this._v,m=this._s,p=(R,A,P,N)=>{let U=new Te(R,A,P.length);return P.forEach((V,q)=>{N(V),U.setMatrixAt(q,d)}),U.castShadow=!0,U.frustumCulled=!1,t.add(U),U};p(this.sigPoleGeo,this.sigMat,c,([R,A,P,N])=>d.compose(v.set(R,A,P),g.identity(),m.set(1,N,1))),p(this.armGeo,this.sigMat,l,([R,A,P,N,U])=>d.compose(v.set(R,A,P),g.setFromAxisAngle(this._up,N),m.set(U,1,1))),p(this.headGeo,this.sigMat,o,([R,A,P,N])=>d.compose(v.set(R,A,P),g.setFromAxisAngle(this._up,N),m.set(1,1,1)));let x=[],y=[],_=[];for(let[R,A,P,N,U]of o){let V=Math.cos(N),q=Math.sin(N);for(let j=0;j<3;j++){let at=(j-1)*.42,G=.16;x.push([R+V*at+q*G,A,P-q*at+V*G,N]),y.push(U),_.push(j)}}let M=p(this.lensGeo,this.lensMat,x,([R,A,P,N])=>d.compose(v.set(R,A,P),g.setFromAxisAngle(this._up,N),m.set(1,1,1)));M.castShadow=!1,M.instanceColor=new $e(new Float32Array(x.length*3),3);let b=new Rt;b.setAttribute("position",new _t(x.flatMap(([R,A,P,N])=>[R+Math.sin(N)*.05,A,P+Math.cos(N)*.05]),3)),b.setAttribute("aDir",new _t(x.flatMap(([,,,R])=>[Math.sin(R),0,Math.cos(R)]),3)),b.setAttribute("aCol",new _t(new Float32Array(x.length*3),3)),b.userData.own=!0;let w=new on(b,this.sigGlowMat);w.frustumCulled=!1,w.renderOrder=6,t.add(w),t.userData.lens={mesh:M,kind:Int8Array.from(y),col:Int8Array.from(_),glow:w};let C=this.scenery,E=[],S=[];for(let R of[-1,1])for(let A of[-1,1]){let[P,N]=a(R*(s+3.4),A*(i+.9)),U=e.x-P,V=e.z-N,q=Math.hypot(U,V),j=U/q,at=V/q,G=Math.atan2(at,-j);E.push([P,f,N,G]);let $=[P+j*1.75,f+10.88,N+at*1.75];S.push([$,[P+j*7.9,f,N+at*7.9]])}if(C){p(C.lampGeo,C.poleMat,E,([P,N,U,V])=>d.compose(v.set(P,N,U),g.setFromAxisAngle(this._up,V),m.set(1,1,1))),p(C.bulbGeo,C.bulbMat,S,([P])=>d.compose(v.set(P[0],P[1],P[2]),g.identity(),m.set(1,1,1))).castShadow=!1;let R=new Rt;R.setAttribute("position",new _t(S.flatMap(([P])=>P),3)),R.userData.own=!0;let A=new on(R,C.glowMat);A.frustumCulled=!1,A.renderOrder=3,t.add(A)}t.userData.lampsJ=S;let I=[],D=(R,A,P,N,U,V=2.5)=>{let[q,j]=a(R,A);I.push([q,n(A)+.2,j,Math.atan2(P,N),U,V])};D(-11.2,i+.55,-e.fx,-e.fz,0),D(11.2,-(i+.55),e.fx,e.fz,0),D(s+.7,i+4.6,e.rx,e.rz,1,2.2),D(-(s+.7),-(i+4.6),-e.rx,-e.rz,1,2.2),D(60,i+.55,-e.fx,-e.fz,2),D(95,-(i+.55),e.fx,e.fz,3);let k=(R,A)=>{let P=new Rt;for(let N of["position","normal","uv"])P.setAttribute(N,this.signPlate.attributes[N].clone());P.setIndex(this.signPlate.index.clone()),P.setAttribute("aCell",new $e(Float32Array.from(I.map(N=>N[4])),1)),P.userData.own=!0,p(P,R,I,([N,U,V,q,,j])=>d.compose(v.set(N-Math.sin(q)*(A?.012:0),U+j,V-Math.cos(q)*(A?.012:0)),g.setFromAxisAngle(this._up,q+(A?Math.PI:0)),m.set(1,1,1)))};k(this.roadSignMat,!1),k(this.signBackMat,!0),p(this.signPost,this.sigMat,I,([R,A,P,N,,U])=>d.compose(v.set(R-Math.sin(N)*.03,A,P-Math.cos(N)*.03),g.identity(),m.set(1,U+.1,1)))}_alley(t,e,n,i,s,a,o){let c=this._frame(t+e/2),l=o+18.2,h=(E,S,I)=>[c.x+c.fx*E+c.rx*n*S,I,c.z+c.fz*E+c.rz*n*S],f=c.y+Cn,u=a(c.x+c.rx*n*l,c.z+c.rz*n*l,c.y,l),d=Math.min(6,Math.max(1,u-f+1.2)),g=Math.round(d/.17),v=d/g,m=.3,p=-e/2+.05,x=e/2-.05,y=[-c.rx*n,0,-c.rz*n];for(let E=0;E<g;E++){let S=o+E*m,I=S+m,D=f+E*v,k=D+v;this._q4(i,[h(p,S,D),h(x,S,D),h(x,S,k),h(p,S,k)],y,[[0,0],[e/2,0],[e/2,.1],[0,.1]]),this._q4(i,[h(p,S,k),h(x,S,k),h(x,I,k),h(p,I,k)],[0,1,0],[[0,S/2],[e/2,S/2],[e/2,I/2],[0,I/2]])}let _=o+g*m,M=f+d;this._q4(i,[h(p,_,M),h(x,_,M),h(x,l,M),h(p,l,M)],[0,1,0],[[0,_/2],[e/2,_/2],[e/2,l/2],[0,l/2]]);let b=h(0,o-.2,f+.9),w=h(0,_,M+.9),C=h(0,_+1.5,M+.9);s.push(...b,...w,...w,...C);for(let[E,S]of[[b,f],[w,M]])s.push(E[0],S,E[2],...E);return t+e}_lot(t,e,n,i,s,a,o){let c=this._frame(t+e/2),l=o+18.2,h=(d,g)=>{let v=c.x+c.fx*d+c.rx*n*g,m=c.z+c.fz*d+c.rz*n*g;return[v,a(v,m,c.y,g)+.03,m]};for(let d=o-.3;d<l;d+=4){let g=Math.min(l+1,d+4);this._q4(i,[h(-e/2,d),h(e/2,d),h(e/2,g),h(-e/2,g)],[0,1,0],[[0,d/3],[e/3,d/3],[e/3,g/3],[0,g/3]])}let f=c.y+Cn,u=(d,g)=>[c.x+c.fx*d+c.rx*n*(o-.1),f+g,c.z+c.fz*d+c.rz*n*(o-.1)];for(let d=-e/2+.3;d<=e/2-.3;d+=2)s.push(...u(d,0),...u(d,1.1));for(let d of[.5,1.05])s.push(...u(-e/2+.3,d),...u(e/2-.3,d));return t+e}_q4(t,e,n,i){let s=t.pos.length/3;for(let v=0;v<4;v++)t.pos.push(...e[v]),t.nor.push(...n),t.uv.push(...i[v]);let a=e[1][0]-e[0][0],o=e[1][1]-e[0][1],c=e[1][2]-e[0][2],l=e[2][0]-e[0][0],h=e[2][1]-e[0][1],f=e[2][2]-e[0][2],u=o*f-c*h,d=c*l-a*f,g=a*h-o*l;u*n[0]+d*n[1]+g*n[2]>=0?t.idx.push(s,s+1,s+2,s,s+2,s+3):t.idx.push(s,s+2,s+1,s,s+3,s+2)}};var Ho=Object.freeze({intensity:36,distance:165,angle:1.29,penumbra:.9,decay:.87,glowOpacity:.29,glowSize:2.9,color:"#ffe4a8",glowColor:"#ffb43f"});function _r(r,t,{spots:e=!0,glows:n=!0}={}){let i=(e?[-1,1]:[]).map(()=>{let a=new Gs(16766624,0,110,.8,1,.55);return r.add(a,a.target),a}),s=(n?[-1,1]:[]).map(()=>{let a=new Un(new Rn({map:t,color:16761975,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:Ze,fog:!1}));return a.renderOrder=6,a.scale.set(2.1*1.35,2.1*.85,1),r.add(a),a});return{spots:i,glows:s,tune:{...Ho},eye:new T,forward:new T}}function Pa(r){if(r.lamps)return r.lamps;let t=r.width*.3,e=Math.min(.7,r.height*.45);return{head:[t,e,-r.length/2+.25],tail:[t,e+.05,r.length/2]}}function Mr(r,t){let[e,n,i]=Pa(t).head;r.spots.forEach((s,a)=>{let o=a?e:-e;s.position.set(o,n,i),s.target.position.set(o*.9,0,i-40)}),r.glows.forEach((s,a)=>s.position.set(a?e:-e,n,i-.03))}function xs(r,t,e,n){let i=r.tune||Ho;r.spots.forEach(a=>{a.color.set(i.color),a.intensity=i.intensity*n,a.distance=i.distance,a.angle=i.angle,a.penumbra=i.penumbra,a.decay=i.decay});let s=1;e&&(t.updateWorldMatrix(!0,!0),(r.glows[0]||t).getWorldPosition(r.eye),r.eye.subVectors(e.position,r.eye).normalize(),r.forward.set(0,0,-1).transformDirection(t.matrixWorld),s=Oe.smoothstep(r.eye.dot(r.forward),-.05,.35)),r.glows.forEach(a=>{a.material.color.set(i.glowColor),a.material.opacity=i.glowOpacity*n*s,a.scale.set(i.glowSize*1.35,i.glowSize*.85,1),a.visible=n*s>.01})}var fg=1/3.6,Hl=480,nd=170,Nl=[30,70],dg=120;function Xe(r,t,e,n,i){let s=[[-t[0],t[3],t[1]],[t[0],t[3],t[1]],[t[0],t[3],t[2]],[-t[0],t[3],t[2]],[-e[0],e[3],e[1]],[e[0],e[3],e[1]],[e[0],e[3],e[2]],[-e[0],e[3],e[2]]],a=[[0,1,2,3],[4,7,6,5],[0,4,5,1],[1,5,6,2],[2,6,7,3],[3,7,4,0]];for(let o of a){let[c,l,h,f]=o.map(d=>s[d]),u=new T().subVectors(new T(...l),new T(...c)).cross(new T().subVectors(new T(...h),new T(...c))).normalize();for(let d of[c,l,h,c,h,f])r.pos.push(...d),r.nor.push(u.x,u.y,u.z),r.col.push(...n),r.tint.push(i.tint?1:0),r.glow.push(i.glow?1:0),r.gloss.push(i.gloss?1:0),r.flash.push(i.flash?d[0]>0?2:1:0)}}var Rw=(r,t,e,n,i,s,a,o={})=>Xe(r,[n/2,e-s/2,e+s/2,t-i/2],[n/2,e-s/2,e+s/2,t+i/2],a,o);function qs(r,t,e,n,i,s,a=[.05,.05,.055]){let o=new qe(i,i,s,12).rotateZ(Math.PI/2).translate(t,e,n).toNonIndexed(),c=o.attributes.position.array,l=o.attributes.normal.array;for(let h=0;h<c.length/3;h++){r.pos.push(c[h*3],c[h*3+1],c[h*3+2]),r.nor.push(l[h*3],l[h*3+1],l[h*3+2]);let f=Math.abs(l[h*3])>.9?.55:1;r.col.push(...f<1?[.42,.43,.45]:a),r.tint.push(0),r.glow.push(0),r.gloss.push(0),r.flash.push(0)}}var Cw=()=>({pos:[],nor:[],col:[],tint:[],glow:[],gloss:[],flash:[]}),bs=[1,1,1],Da=[.05,.07,.09],pg=[.08,.08,.09],Xs=[.25,.25,.27],gg=[1,.95,.85],vg=[.9,.05,.03],ys={tint:!0},Er={gloss:!0},Ia={glow:!0};function nn(r,t,e,n,i,s,a,o,c={}){let l=r.pos.length;Rw(r,e,n,i,s,a,o,c);for(let h=l;h<r.pos.length;h+=3)r.pos[h]+=t}function Fa(r,t,e,n,i,s=.3){for(let a of[-1,1])nn(r,a*(t-s/2-.05),e,n-.02,s,.13,.05,gg,Ia),nn(r,a*(t-s/2-.05),e,i+.02,s,.12,.05,vg,Ia)}function mg(r,{L:t=4.5,W:e=1.75,H:n=1.44,taxi:i=!1}={}){let s=e/2,a=-t/2,o=t/2;Xe(r,[s,a+.1,o-.05,.32],[s,a,o,.92],bs,ys),Xe(r,[s-.06,a+1.05,o-.55,.92],[s-.2,a+1.65,o-1.05,n-.05],Da,Er),Xe(r,[s-.2,a+1.66,o-1.06,n-.06],[s-.22,a+1.7,o-1.1,n],bs,ys),nn(r,0,.42,a+.02,e-.1,.18,.12,Xs),nn(r,0,.42,o-.02,e-.1,.18,.12,Xs),Fa(r,s,.78,a,o);for(let[c,l]of[[-1,a+.85],[1,a+.85],[-1,o-.8],[1,o-.8]])qs(r,c*(s-.1),.32,l,.32,.24);i&&nn(r,0,n+.11,a+2,.5,.2,.22,[1,.85,.4],Ia)}function Pw(r){Xe(r,[.74,-1.7+.05,1.7,.3],[.74,-1.7,1.7,.95],bs,ys),Xe(r,[.74-.03,-1.7+.35,1.7-.1,.95],[.74-.1,-1.7+.75,1.7-.15,1.6],Da,Er),Xe(r,[.74-.1,-1.7+.76,1.7-.16,1.6],[.74-.1,-1.7+.78,1.7-.18,1.65],bs,ys),nn(r,0,.38,-1.7+.01,1.4,.16,.1,Xs),Fa(r,.74,.8,-1.7,1.7,.26);for(let[s,a]of[[-1,-1.7+.55],[1,-1.7+.55],[-1,1.7-.55],[1,1.7-.55]])qs(r,s*(.74-.08),.28,a,.28,.2)}function Lw(r){Xe(r,[.85,-2.35+.05,2.35,.33],[.85,-2.35,2.35,1.05],bs,ys),Xe(r,[.85-.03,-2.35+.7,2.35-.05,1.05],[.85-.08,-2.35+1.2,2.35-.1,1.85],Da,Er),Xe(r,[.85-.08,-2.35+1.21,2.35-.11,1.85],[.85-.08,-2.35+1.25,2.35-.13,1.92],bs,ys),nn(r,0,.42,-2.35+.01,1.62,.18,.1,Xs),Fa(r,.85,.85,-2.35,2.35);for(let[s,a]of[[-1,-2.35+.8],[1,-2.35+.8],[-1,2.35-.8],[1,2.35-.8]])qs(r,s*(.85-.1),.33,a,.33,.24)}function Iw(r){Xe(r,[1.25,-5.25,5.25,.35],[1.25,-5.25,5.25,1.15],[.92,.92,.9],{}),Xe(r,[1.25+.005,-5.25+.2,5.25-.2,1],[1.25+.005,-5.25+.2,5.25-.2,1.18],bs,ys),Xe(r,[1.25,-5.25+.02,5.25,1.15],[1.25,-5.25+.02,5.25,2.65],Da,Er),Xe(r,[1.25,-5.25,5.25,2.65],[1.25-.05,-5.25+.05,5.25-.05,3.1],[.9,.9,.88],{}),nn(r,0,2.85,-5.25-.01,1.7,.3,.05,[1,.55,.1],Ia);for(let s=0;s<4;s++)nn(r,-1.25-.01,1.9,-5.25+1.5+s*2.2,.02,1.4,.08,Xs);for(let s=0;s<4;s++)nn(r,1.25+.01,1.9,-5.25+1.5+s*2.2,.02,1.4,.08,Xs);Fa(r,1.25,.75,-5.25,5.25,.35);for(let[s,a]of[[-1,-5.25+2.2],[1,-5.25+2.2],[-1,5.25-2.4],[1,5.25-2.4]])qs(r,s*(1.25-.15),.45,a,.45,.3)}function Dw(r){Xe(r,[.18,-.6,.6,.25],[.2,-.5,.75,.7],bs,ys),nn(r,0,.78,.25,.3,.1,.6,pg),Xe(r,[.18,-.75,-.55,.3],[.12,-.72,-.6,1.05],bs,ys),nn(r,0,1.05,-.62,.62,.05,.05,pg),nn(r,0,.95,-.76,.16,.1,.04,gg,Ia),nn(r,0,.7,.78,.14,.07,.04,vg,Ia),qs(r,0,.25,-.62,.25,.1),qs(r,0,.25,.62,.25,.1);let t=[.16,.18,.22],e=[.12,.13,.16],n=[.75,.58,.46],i=[.85,.85,.85];Xe(r,[.2,0,.35,.8],[.19,-.1,.2,1.4],t,{}),nn(r,0,.82,-.05,.36,.14,.55,e);for(let s of[-1,1]){nn(r,s*.17,.45,-.32,.1,.5,.12,e),Xe(r,[.05,-.05,.08,1.32],[.05,-.55,-.45,1.06],t,{});for(let a=r.pos.length-108;a<r.pos.length;a+=3)r.pos[a]+=s*.22}nn(r,0,1.47,.02,.12,.1,.12,n),nn(r,0,1.62,.02,.28,.26,.3,i,Er)}function Fw(r){let o=[.04,.04,.045],c=[.92,.92,.9];Xe(r,[.89,-2.3+.1,2.3-.05,.32],[.89,-2.3,2.3,.66],o,{}),Xe(r,[.89,-2.3,2.3,.66],[.89,-2.3,2.3,.92],c,{}),Xe(r,[.89-.06,-2.3+1.05,2.3-.55,.92],[.89-.2,-2.3+1.65,2.3-1.05,1.45-.05],Da,Er),Xe(r,[.89-.2,-2.3+1.66,2.3-1.06,1.45-.06],[.89-.22,-2.3+1.7,2.3-1.1,1.45],c,{}),nn(r,0,1.45+.08,-2.3+2.2,1.1,.14,.26,[1,.06,.04],{flash:!0}),nn(r,0,.42,-2.3+.02,1.78-.1,.18,.12,Xs),Fa(r,.89,.78,-2.3,2.3);for(let[l,h]of[[-1,-2.3+.85],[1,-2.3+.85],[-1,2.3-.8],[1,2.3-.8]])qs(r,l*(.89-.1),.32,h,.32,.24)}function Hw(r){let s=[.95,.95,.93],a=[.85,.08,.06];Xe(r,[.95,-2.7+.05,2.7,.35],[.95,-2.7,2.7,2.25],s,{}),Xe(r,[.95+.005,-2.7+.1,2.7-.05,.95],[.95+.005,-2.7+.1,2.7-.05,1.12],a,{}),Xe(r,[.95+.006,-2.7-.005,-2.7+1.4,1.3],[.95-.1,-2.7+.45,-2.7+1.4,2],Da,Er),nn(r,0,2.33,-2.7+.6,1.3,.16,.3,a,{flash:!0}),nn(r,0,.45,-2.7+.01,1.8,.2,.1,Xs),Fa(r,.95,.85,-2.7,2.7);for(let[o,c]of[[-1,-2.7+.9],[1,-2.7+.9],[-1,2.7-.9],[1,2.7-.9]])qs(r,o*(.95-.1),.35,c,.35,.26)}var La={police:{build:Fw,len:4.6,wid:1.78,v:[40,40],max:2},ambulance:{build:Hw,len:5.4,wid:1.9,v:[40,40],max:2},sedan:{build:r=>mg(r),len:4.5,wid:1.75,v:[38,52],max:40},taxi:{build:r=>mg(r,{taxi:!0}),len:4.5,wid:1.75,v:[36,50],max:14},kei:{build:Pw,len:3.4,wid:1.48,v:[34,48],max:30},van:{build:Lw,len:4.7,wid:1.7,v:[34,46],max:18},bus:{build:Iw,len:10.5,wid:2.5,v:[30,40],max:8},scooter:{build:Dw,len:1.6,wid:.7,v:[30,44],max:24}},Nw=[["sedan",.3],["kei",.24],["taxi",.1],["van",.12],["bus",.06],["scooter",.18]],kw={police:["#ffffff"],ambulance:["#ffffff"],sedan:["#e8e8e6","#1c1d20","#8d9196","#2a3550","#6b0f14","#c9c3b6"],taxi:["#121314","#1d5a3c","#f1c232","#e8e8e6"],kei:["#f2f0ea","#e7d9b8","#9cc6d8","#e6a8b4","#4a4f55","#c8d77a"],van:["#ededea","#b8bcc0","#1c1d20","#3d5a80"],bus:["#1f6fb2","#2b9a4a","#d4382c","#e39b17"],scooter:["#d8d8d4","#1c1d20","#b0302c","#2d6db5","#e1c35a"]},kl=class{constructor(t,e,n){this.road=e,this.city=n,this.group=new Dt,this.group.visible=!1,t.add(this.group),this.uLamp={value:0},this.uTime={value:0},this.uNpc={value:1},this.emK=1;let i=new Ut({vertexColors:!0,roughness:.5,metalness:.1});i.onBeforeCompile=s=>{s.uniforms.uLamp=this.uLamp,s.uniforms.uTime=this.uTime,s.uniforms.uNpc=this.uNpc,s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
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
uniform float uLamp, uNpc;
varying float vGlow, vGloss;`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
roughnessFactor = mix(roughnessFactor, 0.08, vGloss);`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += vColor * vGlow * (0.6 + 5.0 * uLamp) * uNpc;`)},i.customProgramCacheKey=()=>"city-vehicle",ge(i),this.meshes={};for(let[s,a]of Object.entries(La)){let o=Cw();a.build(o);let c=new Rt;c.setAttribute("position",new _t(o.pos,3)),c.setAttribute("normal",new _t(o.nor,3)),c.setAttribute("color",new _t(o.col,3)),c.setAttribute("aTint",new _t(o.tint,1)),c.setAttribute("aGlow",new _t(o.glow,1)),c.setAttribute("aGloss",new _t(o.gloss,1)),c.setAttribute("aFlash",new _t(o.flash,1));let l=new Te(c,i,a.max);l.instanceColor=new $e(new Float32Array(a.max*3),3),l.honk=new $e(new Float32Array(a.max),1).setUsage(Kn),c.setAttribute("aHonk",l.honk),l.count=0,l.castShadow=!0,l.frustumCulled=!1,this.group.add(l),this.meshes[s]=l}this.cars=[],this.ctrl={lane:null,maxV:1/0},this._p={},this._m=new wt,this._q=new Xt,this._v=new T,this._one=new T(1,1,1),this._c=new it,this._up=new T(0,1,0),this.crossTimers=new Map,this.filled=!1,this.density=1,this.speedK=1}set visible(t){this.group.visible=t,t&&this._emSetup(),t||(this.releaseModels(),this.cars.length=0,this.filled=!1,this.crossTimers.clear())}get visible(){return this.group.visible}spawnScripted(t,e,n,i,s,a=15){let o=this._new(t,{s:e,d:n,home:n,dir:i,color:"#ffffff"});return o.color="#ffffff",o.vMax=12,o.v=a,o.script={to:s,v:a,arrived:!1},this.cars.push(o),o}stuckBehind(t,e){return this.cars.filter(n=>!n.cross&&!n.script&&!n.crashed&&n.dir>0&&Math.abs(n.d-e)<1.8&&n.s<t&&t-n.s<30&&n.v<.6)}releaseModels(){if(this.cars=this.cars.filter(t=>!t.model||t.crashed),this.pool)for(let t of this.pool())t.cityBusy&&(t.cityBusy=!1,t.busy=!1,t.root.visible=!1)}remove(t){let e=this.cars.indexOf(t);e>=0&&this.cars.splice(e,1)}hitTest(t,e,n,i){for(let s of this.cars){let a,o,c,l;if(s.cross?(a=this.road.junction(s.cross.n)+s.cross.a,o=s.cross.u,c=s.wid,l=s.len):(a=s.s,o=s.d,c=s.len,l=s.wid),Math.abs(a-t)<(n+c)/2-.25&&Math.abs(o-e)<(i+l)/2-.15)return s}return null}_pick(){let t=Math.random(),e="sedan";for(let[n,i]of Nw)if((t-=i)<0){e=n;break}return this.cars.filter(n=>n.type===e).length>=La[e].max&&(e="sedan"),this.cars.filter(n=>n.type===e).length>=La[e].max?null:e}_new(t,e){let n=La[t],i=kw[t],s=(n.v[0]+Math.random()*(n.v[1]-n.v[0]))*fg*(t==="police"||t==="ambulance"?1:this.speedK);return Object.assign({type:t,len:n.len,wid:n.wid,vMax:s,v:s,color:i[Math.floor(Math.random()*i.length)],lat:0},e)}_free(t,e,n){for(let i of this.cars)if(!i.cross&&Math.abs(i.d-e)<1.8&&Math.abs(i.s-t)<n)return!1;return!0}update(t,e,n,i,s,a=4.6){if(!this.group.visible)return;if(this.uLamp.value=s,this.uTime.value+=t,this._dt=t,this.pool){let b=new Set(this.cars.filter(w=>w.model).map(w=>w.model));for(let w of this.pool())w.cityBusy&&!b.has(w)&&(w.cityBusy=!1,w.busy=!1,w.root.visible=!1)}let o=this.road,c=Ae.lanes;if(!this.filled){this.filled=!0;for(let b of[1,-1])for(let w of c)for(let C=e-nd+Math.random()*40;C<e+Hl;C+=(Nl[0]+Math.random()*(Nl[1]-Nl[0]))/this.density){let E=b*w;if(Math.abs(C-e)<15&&Math.abs(E-n)<2)continue;let S=this._pick();S&&this.cars.push(this._new(S,{s:C,d:E,home:E,dir:b}))}}for(let b of[1,-1])for(let w of c){let C=b*w,E=b<0?e+Hl-10:i<10?e-nd+10:e+Hl-10;if(Math.random()<t*.35*Math.min(1,this.density)&&this._free(E,C,Nl[0]/this.density+10)&&Math.abs(E-e)>30){let S=this.useModels&&this.pool&&Math.random()<.35?this.pool().find(I=>!I.busy&&!I.carriage):null;if(S){S.busy=S.cityBusy=!0;let I=(36+Math.random()*14)*fg*this.speedK;this.cars.push({type:"model",model:S,s:E,d:C,home:C,dir:b,len:S.dim.length,wid:S.dim.width,vMax:b>0&&E>e?Math.min(I,Math.max(4,i-2)):I,v:I,lat:0,color:"#ffffff"})}else{let I=this._pick();if(I){let D=this._new(I,{s:E,d:C,home:C,dir:b});b>0&&E>e&&(D.vMax=Math.min(D.vMax,Math.max(4,i-2))),this.cars.push(D)}}}}let l=o.junctionIndex(e-60),h=o.junctionIndex(e+330);for(let b=l;b<h;b++)for(let w of[1,-1]){let C=b*2+(w>0?1:0),E=this.crossTimers.get(C);if(E===void 0&&(E=Math.random()*4),E-=t,E<=0){E=(3+Math.random()*6)/Math.max(.05,this.density);let S=-w*dg,I=w>0?-1.75:1.75,D=this.cars.some(R=>R.cross&&R.cross.n===b&&R.cross.du===w&&Math.abs(R.cross.u-S)<14),k=this._pick();!D&&k&&k!=="bus"&&this.cars.push(this._new(k,{cross:{n:b,u:S,a:I,du:w}}))}this.crossTimers.set(C,E)}for(let b of this.crossTimers.keys()){let w=Math.floor(b/2);(w<l-1||w>h)&&this.crossTimers.delete(b)}let f={s:e,d:n,v:i,len:a,wid:1.9,dir:1,player:!0},u=this.cars.filter(b=>!b.cross),d=(b,w)=>{let C=null,E=1/0;for(let S of u.concat([f])){if(S===b||Math.abs(S.d-w)>(S.wid||1.8)/2+b.wid/2+.2)continue;let I=(S.s-b.s)*b.dir-(S.len+b.len)/2;I>-.5&&I<E&&(E=I,C=S)}return C?{e:C,gap:E}:null},g=(b,w)=>Math.max(0,b+.6*(w-(4+1*b)));for(let b of u){if(b.crashed){b.v=0,b.lat=0;continue}if(b.script){let D=(b.script.to-b.s)*b.dir,k=D<=.2?0:Math.min(b.script.v,Math.sqrt(2*3.5*D));b.v+=Math.max(-8*t,Math.min(3*t,k-b.v)),D<=.2&&(b.v=0,b.script.arrived=!0),b.s+=b.dir*Math.max(0,b.v)*t;let R=b.home-b.d;b.lat=Math.sign(R)*Math.min(1.3,Math.abs(R)*2),b.d+=b.lat*t;continue}let w=b.vMax,C=d(b,b.d);if(C&&(C.e.dir===b.dir||C.e.player?w=Math.min(w,g(C.e.v*(C.e.dir===b.dir?1:0),C.gap)):w=Math.min(w,Math.max(0,(C.gap-6)*.5)),!b.changing&&C.gap<35&&C.e.v<b.vMax-2.5&&(C.e.dir===b.dir||C.e.player))){let D=b.dir*(Math.abs(b.home)<3.5?c[1]:c[0]);!u.concat([f]).some(R=>R!==b&&Math.abs(R.d-D)<2.2&&(R.s-b.s)*b.dir>-18-(R.len+b.len)/2&&(R.s-b.s)*b.dir<25)&&(b.home=D,b.changing=!0)}let E=this.city.stopAhead(b.s+b.dir*b.len/2,b.dir,b.v);E<1/0&&(w=Math.min(w,Math.sqrt(6*Math.max(0,E-1.2)))),b.v+=Math.max(-7*t,Math.min(2.2*t,w-b.v)),b.v=Math.max(0,b.v),b.s+=b.dir*b.v*t;let S=b.home-b.d,I=Math.sign(S)*Math.min(1.3,Math.abs(S)*2);b.lat=I,b.d+=I*t,Math.abs(S)<.03&&(b.d=b.home,b.changing=!1,b.lat=0)}let v=Ae.hw;for(let b of this.cars){if(!b.cross)continue;if(b.crashed){b.v=0;continue}let w=b.cross,C=b.vMax;for(let D of this.cars){if(D===b||!D.cross||D.cross.n!==w.n||D.cross.du!==w.du)continue;let k=(D.cross.u-w.u)*w.du-(D.len+b.len)/2;k>-.5&&(C=Math.min(C,g(D.v,k)))}let E=-w.du*(v+4.2),S=w.u+w.du*b.len/2,I=(E-S)*w.du;if(I>-.5){let D=this.city._phase(w.n).cross;(D===2||D===1&&I>b.v*b.v/6)&&(C=Math.min(C,Math.sqrt(6*Math.max(0,I-.5))))}b.v+=Math.max(-7*t,Math.min(2.2*t,C-b.v)),b.v=Math.max(0,b.v),w.u+=w.du*b.v*t}this.cars=this.cars.filter(b=>b.crashed||b.script?!0:b.cross?Math.abs(b.cross.u)<=dg+2&&b.cross.n>=l-1:b.s>e-nd-20&&b.s<e+Hl+40);let m=d(f,n);this.ctrl.maxV=m&&m.e.dir===1?g(m.e.v,m.gap):1/0;let p={};for(let b in this.meshes)p[b]=0;let x=this._m,y=this._q,_=this._v,M=this._p;for(let b of this.cars){if(b.model){let S=b.model;o.at(b.s,M),S.root.position.set(M.x+Math.cos(M.th)*b.d,M.y,M.z-Math.sin(M.th)*b.d),S.root.rotation.set(0,M.th+(b.dir<0?Math.PI:0)-b.dir*Math.atan2(b.lat,Math.max(3,b.v)),0,"YXZ"),S.root.visible=!0;for(let I of S.wheels)I.pivot.rotation.x+=b.dir*(b.v*this._dt)/I.radius;xs(S.headlights,S.root,this.camera,Math.max(.15,s)*.24*this.uNpc.value);for(let I of S.tails)I.material.opacity=(.25+.6*s)*.6;continue}let w=this.meshes[b.type],C=p[b.type]++;if(C>=La[b.type].max)continue;let E;if(b.cross){let S=this._frame(b.cross.n),I=S.x+S.fx*b.cross.a+S.rx*b.cross.u,D=S.z+S.fz*b.cross.a+S.rz*b.cross.u;_.set(I,this.city.groundJ(S,b.cross.u)+.05,D),E=S.th+(b.cross.du>0?-Math.PI/2:Math.PI/2)}else o.at(b.s,M),_.set(M.x+Math.cos(M.th)*b.d,M.y+.05,M.z-Math.sin(M.th)*b.d),E=M.th+(b.dir<0?Math.PI:0)-b.dir*Math.atan2(b.lat,Math.max(3,b.v));y.setFromAxisAngle(this._up,E),x.compose(_,y,this._one),w.setMatrixAt(C,x),w.setColorAt(C,this._c.set(b.color)),(b.type==="police"||b.type==="ambulance")&&((b._pos||(b._pos=new T)).copy(_),b._yaw=E),w.honk.setX(C,b.honk?1:0)}for(let b in this.meshes){let w=this.meshes[b];w.count=Math.min(p[b],La[b].max),w.instanceMatrix.needsUpdate=!0,w.instanceColor&&(w.instanceColor.needsUpdate=!0),w.honk.needsUpdate=!0}this._emUpdate(s)}setup(t,e,n){this.scene=t,this.softTex=e,this.camera=n}_emSetup(){if(this.em||!this.scene)return;let t=(e,n,i,s)=>{let a=new Dt,o=_r(a,this.softTex,{spots:n,glows:!0});Mr(o,i);let c=[-1,1].map(l=>{let h=new Un(new Rn({map:this.softTex,color:16719888,transparent:!0,opacity:0,depthWrite:!1,blending:Ze,fog:!1}));return h.position.set(l*s[0],s[1],s[2]),h.scale.set(2.6,1.8,1),h.renderOrder=6,a.add(h),h});return a.visible=!1,this.scene.add(a),{kind:e,root:a,head:o,bars:c}};this.em={police:t("police",!0,{width:1.78,length:4.6,height:1.45},[.36,1.6,-.1]),ambulance:t("ambulance",!1,{width:1.9,length:5.4,height:2.25},[.42,2.45,-2.1])},this.emPoint=new qi(16719888,0,48,1.3),this.scene.add(this.emPoint)}_emUpdate(t){if(!this.em)return;let e=Math.floor(this.uTime.value*2.2)%2,n=!1;for(let i of["police","ambulance"]){let s=this.em[i],a=this.cars.find(l=>l.type===i&&l._pos);if(s.root.visible=!!a,!a){xs(s.head,s.root,null,0);continue}s.root.position.copy(a._pos),s.root.rotation.set(0,a._yaw,0),xs(s.head,s.root,this.camera,Math.max(.75,t)*1.25*this.emK),s.bars.forEach(l=>l.scale.set(2.6*Math.sqrt(this.emK),1.8*Math.sqrt(this.emK),1));let o=16718348,c=i==="police"?2051583:16777215;s.bars.forEach((l,h)=>{let f=h===e;l.material.color.setHex(h===0?o:c),l.material.opacity=f?Math.min(1,this.emK):.06}),n||(n=!0,this.emPoint.position.set(a._pos.x,a._pos.y+2.2,a._pos.z),this.emPoint.color.setHex(e===0?o:c),this.emPoint.intensity=15*this.emK)}n||(this.emPoint.intensity=0)}_frame(t){this._fc||(this._fc=new Map);let e=this._fc.get(t);return e||(e=this.city._frame(this.road.junction(t)),this._fc.set(t,e),this._fc.size>40&&this._fc.delete(this._fc.keys().next().value)),e}};var id=260,Ul=90,Uw=38,No=96,xg=["#e9e6df","#2b2d33","#6d7d8f","#8c2f2f","#c9a96e","#3d5f4b","#d7c6b0","#5a4a6e","#b8c4d6","#1f3552"],zw={officer:"#1d2a48",medic:"#e9eef2",driver:"#121214"};function Ow(){let r=[],t=[],e=[],n=[],i=[],s=[],a=(d,g,v,m,p,x,y,_,M=0,b=0)=>{let w=new re(g-d,m-v,x-p).translate((d+g)/2,(v+m)/2,(p+x)/2).toNonIndexed(),C=w.attributes.position.array,E=w.attributes.normal.array;for(let S=0;S<C.length/3;S++)r.push(C[S*3],C[S*3+1],C[S*3+2]),t.push(E[S*3],E[S*3+1],E[S*3+2]),e.push(...y),n.push(_),i.push(M),s.push(b)},o=[.16,.2,.3],c=[.07,.07,.08],l=[.78,.6,.48],h=[.06,.05,.05],f=[1,1,1];for(let d of[-1,1])a(d*.04,d*.17,.08,.86,-.08,.08,o,0,d,.86),a(d*.04,d*.17,0,.08,-.13,.09,c,0,d,.86),a(d*.21,d*.31,.82,1.42,-.06,.06,f,1,-d,1.42),a(d*.215,d*.305,.74,.82,-.05,.05,l,0,-d,1.42);a(-.21,.21,.84,1.44,-.11,.11,f,1),a(-.06,.06,1.44,1.5,-.05,.05,l,0),a(-.1,.1,1.5,1.72,-.11,.1,l,0),a(-.11,.11,1.66,1.76,-.11,.12,h,0),a(-.11,.11,1.52,1.68,.07,.12,h,0);let u=new Rt;return u.setAttribute("position",new _t(r,3)),u.setAttribute("normal",new _t(t,3)),u.setAttribute("color",new _t(e,3)),u.setAttribute("aTint",new _t(n,1)),u.setAttribute("aSwing",new _t(i,1)),u.setAttribute("aPivot",new _t(s,1)),u}var zl=class{constructor(t,e,n){this.road=e,this.city=n,this.group=new Dt,this.group.visible=!1,t.add(this.group);let i=Ow();this.phase=new $e(new Float32Array(No*2),2).setUsage(Kn),i.setAttribute("aWalk",this.phase);let s=new Ut({vertexColors:!0,roughness:.85});s.onBeforeCompile=a=>{a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
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
          #endif`)},s.customProgramCacheKey=()=>"city-person",ge(s),this.mesh=new Te(i,s,No),this.mesh.instanceColor=new $e(new Float32Array(No*3),3),this.mesh.count=0,this.mesh.castShadow=!0,this.mesh.frustumCulled=!1,this.group.add(this.mesh),this.peds=[],this.timers=new Map,this._p={},this._m=new wt,this._q=new Xt,this._e=new mi(0,0,0,"YXZ"),this._v=new T,this._one=new T(1,1,1),this._c=new it,this.filled=!1,this.walkers=Uw}set visible(t){this.group.visible=t,t||(this.peds.length=0,this.filled=!1,this.timers.clear())}get visible(){return this.group.visible}_walker(t,e,n){let i=Ae.hw;return{s:t,u:e*(i+1+Math.random()*2.6),vs:0,vu:0,dir:n,speed:1.1+Math.random()*.5,mode:"walk",ph:Math.random()*6.28,color:xg[Math.floor(Math.random()*xg.length)]}}spawn(t,e,n){let i={s:e,u:n,vs:0,vu:0,speed:1.5,mode:"script",ph:0,color:zw[t]||"#888888",target:null,kind:t};return this.peds.push(i),i}remove(t){let e=this.peds.indexOf(t);e>=0&&this.peds.splice(e,1)}goTo(t,e,n){t.target=[e,n]}arrived(t){return!t.target}hitTest(t,e,n,i){for(let s of this.peds)if(s.mode!=="fallen"&&s.mode!=="script"&&Math.abs(s.s-t)<n/2+.25&&Math.abs(s.u-e)<i/2+.25)return s;return null}crossingNear(t,e){for(let n of this.peds)if(n.mode==="cross"&&Math.abs(n.s-t)<3&&Math.abs(n.u-e)<3.5)return!0;return!1}update(t,e){if(!this.group.visible)return;let n=this.road,i=this.city,s=Ae.hw;if(!this.filled){this.filled=!0;for(let g=0;g<this.walkers;g++)this.peds.push(this._walker(e-Ul+Math.random()*(id+Ul),Math.random()<.5?-1:1,Math.random()<.5?-1:1))}if(this.peds.filter(g=>g.mode==="walk"||g.mode==="wait").length<this.walkers&&Math.random()<t*2){let g=Math.random()<.5?-1:1,v=g>0?e-Ul+5:e+id-5;this.peds.push(this._walker(v+(Math.random()-.5)*20,Math.random()<.5?-1:1,g))}let o=n.junctionIndex(e-40),c=n.junctionIndex(e+220);for(let g=o;g<c;g++){let v=this.timers.get(g)??Math.random()*3;if(v-=t,v<=0&&this.peds.length<No-8){v=4+Math.random()*7;let m=n.junction(g),p=Math.random()<.5?-1:1,x=Math.random()<.5?-1:1,y=this._walker(m+p*(6.9+Math.random()*3),x,1);y.u=x*(s+.75+Math.random()*.5),y.mode="wait",y.n=g,y.side=x,y.crossing=!0,this.peds.push(y)}this.timers.set(g,v)}for(let g of this.timers.keys())(g<o-1||g>c)&&this.timers.delete(g);for(let g of this.peds){let v=0,m=0;if(g.mode==="script"){if(g.target){let x=g.target[0]-g.s,y=g.target[1]-g.u,_=Math.hypot(x,y);_<.15?g.target=null:(v=x/_*g.speed,m=y/_*g.speed)}}else if(g.mode!=="fallen")if(g.crossing){let x=i._phase(g.n),y=42-x.t;g.mode==="wait"&&x.cross===0&&y>9&&(g.mode="cross"),g.mode==="cross"&&(m=-g.side*g.speed*1.15,g.u*g.side<-(s+.9)&&(g.crossing=!1,g.mode="walk",g.u=-g.side*(s+1.2+Math.random()*2),g.dir=Math.random()<.5?-1:1))}else{let x=g.dir>0?n.junctionIndex(g.s-4):n.junctionIndex(g.s+4)-1,y=n.junction(x),_=y-g.dir*(Ae.side+.3),M=(_-g.s)*g.dir,b=M>0&&M<1.2&&i._phase(x).main!==0;g.mode=b?"wait":"walk",b||(v=g.dir*g.speed)}g.s+=v*t,g.u+=m*t;let p=Math.hypot(v,m);g.ph+=p*t*5.2,g.moving=p>.05?1:0,p>.05&&(g.head=Math.atan2(m,v))}this.peds=this.peds.filter(g=>g.mode==="script"||g.mode==="fallen"||g.s>e-Ul-10&&g.s<e+id+10&&(!g.crossing||g.n>=o-1));let l=this._m,h=this._q,f=this._v,u=this._p,d=0;for(let g of this.peds){if(d>=No)break;n.at(g.s,u);let v=Math.abs(g.u)>Ae.hw&&n.nearJunction(g.s)!==null&&Math.abs(g.s-n.nearJunction(g.s))>Ae.side,m=u.y+(v?.2:.05),p=Math.cos(u.th),x=-Math.sin(u.th),y=-Math.sin(u.th),_=-Math.cos(u.th),M=g.head??(g.mode==="wait"&&g.crossing?g.side>0?-Math.PI/2:Math.PI/2:0),b=y*Math.cos(M)+p*Math.sin(M),w=_*Math.cos(M)+x*Math.sin(M),C=Math.atan2(-b,-w);g.mode==="fallen"?(h.setFromEuler(this._e.set(-Math.PI/2,C,0)),f.set(u.x+p*g.u,m+.12,u.z+x*g.u)):(h.setFromEuler(this._e.set(0,C,0)),f.set(u.x+p*g.u,m,u.z+x*g.u)),l.compose(f,h,this._one),this.mesh.setMatrixAt(d,l),this.mesh.setColorAt(d,this._c.set(g.color)),this.phase.setXY(d,g.ph,g.moving),d++}this.mesh.count=d,this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor.needsUpdate=!0,this.phase.needsUpdate=!0}};var Ol=class{constructor(t,e,n){this.traffic=t,this.people=e,this.hooks=n,this.active=!1}start(t,e,n,i){this.active=!0,this.t=0,this.s=t,this.d=e,this.dim=n,this.victim=i,this.step="impact",this.police=this.amb=this.officer=this.driver=null,this.medics=[],i.car&&(i.car.crashed=!0,i.car.v=0),i.ped&&(i.ped.mode="fallen",i.ped.crossing=!1),this.hooks.toast("💥 Va chạm! Đang gọi cảnh sát và xe cấp cứu…",!0)}_victimPos(){let t=this.victim;if(t.ped)return[t.ped.s,t.ped.u];let e=t.car;return e.cross?[this.traffic.road.junction(e.cross.n)+e.cross.a,e.cross.u]:[e.s,e.d]}_sirens(){for(let[t,e]of[["police",this.police],["ambulance",this.amb]]){let n=0,i=0;if(e&&this.traffic.cars.includes(e)&&e.v>.5){let s=Math.abs(e.s-this.s);n=Math.max(0,1-s/260)**1.5*.85+.15*(s<400?1:0),i=(e.d-this.d)/8}this.hooks.siren?.(t,n,i)}}update(t){if(!this.active)return;this.t+=t,this._sirens();let e=this.traffic,n=this.people,i=this.dim.length,s=this.d>=0?Math.abs(this.d)<3.5?1.75:5.25:Math.abs(this.d)<3.5?-1.75:-5.25;if(this.step==="impact"&&this.t>1.2){this.step="coming",this.police=e.spawnScripted("police",this.s-130,s,1,this.s-i/2-2.3-2.3,15);let[o,c]=this._victimPos();this.amb=e.spawnScripted("ambulance",o+140,-1.75,-1,o+6,15),this.hooks.toast("🚓🚑 Cảnh sát và xe cấp cứu đang tới…",!0)}let a=this.d-1.25;if(this.step==="coming"&&this.police.script.arrived&&(this.step="officer",this.officer=n.spawn("officer",this.police.s+.6,this.police.d-1.15),n.goTo(this.officer,this.s+.3,a-.4)),this.step==="officer"&&n.arrived(this.officer)&&(this.step="talk",this.tTalk=this.t),this.step==="talk"&&this.t-this.tTalk>2){this.step="arrest",this.hooks.driverHidden(!0),this.driver=n.spawn("driver",this.s+.4,a);let o=this.police.s+.2;n.goTo(this.driver,o,this.police.d-1.1),n.goTo(this.officer,o-.9,this.police.d-1.3),this.hooks.toast("👮 Cảnh sát đưa chú lên xe…",!0)}if(this.step==="arrest"&&n.arrived(this.driver)&&n.arrived(this.officer)&&(this.step="leaving",n.remove(this.driver),n.remove(this.officer),this.police.script=null,this.police.home=s>3.5?1.75:s>0?5.25:s,this.police.changing=!0,this.tLeave=this.t),this.amb?.script?.arrived&&!this.medics.length&&!this.ambDone){let[o,c]=this._victimPos();for(let l of[-1,1]){let h=n.spawn("medic",this.amb.s+this.amb.dir*2.6*-1,this.amb.d+l*.5);n.goTo(h,o+l*.7,c+.8),this.medics.push(h)}}if(this.medics.length&&!this.ambDone&&this.medics.every(o=>n.arrived(o))&&(this.tMed??(this.tMed=this.t),this.t-this.tMed>4)){this.victim.ped&&(n.remove(this.victim.ped),this.victim.ped=null,this.victimGone=!0);for(let o of this.medics)n.goTo(o,this.amb.s-this.amb.dir*2.6,this.amb.d);this.ambDone=!0}if(this.ambDone&&this.medics.length&&this.medics.every(o=>n.arrived(o))){for(let o of this.medics)n.remove(o);this.medics=[],this.amb.script=null}this.step==="leaving"&&this.t-this.tLeave>4&&!this.fading&&(this.fading=this.t,this.hooks.fade(!0,"🚓 Chú đã bị đưa về đồn. Bắt đầu lại — lái cẩn thận nhé!")),this.fading&&this.t-this.fading>3&&this.finish()}finish(){let t=this.traffic,e=this.people;this.victim?.car&&t.remove(this.victim.car),this.victim?.ped&&e.remove(this.victim.ped);for(let n of[this.police,this.amb])n&&(n.script=null,n.crashed&&(n.crashed=!1),t.remove(n));for(let n of[this.officer,this.driver,...this.medics||[]])n&&e.remove(n);this.active=!1,this.fading=null,this.ambDone=!1,this.tMed=null,this.medics=[],this.hooks.siren?.("police",0),this.hooks.siren?.("ambulance",0),this.hooks.driverHidden(!1),this.hooks.fade(!1),this.hooks.end()}};var Ys=class extends vs{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new hd(e)}),this.register(function(e){return new bd(e)}),this.register(function(e){return new yd(e)}),this.register(function(e){return new _d(e)}),this.register(function(e){return new fd(e)}),this.register(function(e){return new dd(e)}),this.register(function(e){return new pd(e)}),this.register(function(e){return new md(e)}),this.register(function(e){return new ld(e)}),this.register(function(e){return new gd(e)}),this.register(function(e){return new ud(e)}),this.register(function(e){return new xd(e)}),this.register(function(e){return new vd(e)}),this.register(function(e){return new od(e)}),this.register(function(e){return new Md(e)}),this.register(function(e){return new Ed(e)})}load(t,e,n,i){let s=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=Vs.extractUrlBase(t);a=Vs.resolveURL(l,this.path)}else a=Vs.extractUrlBase(t);this.manager.itemStart(t);let o=function(l){i?i(l):console.error(l),s.manager.itemError(t),s.manager.itemEnd(t)},c=new Ro(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(t,function(l){try{s.parse(l,a,function(h){e(h),s.manager.itemEnd(t)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(t){return this.dracoLoader=t,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,i){let s,a={},o={},c=new TextDecoder;if(typeof t=="string")s=JSON.parse(t);else if(t instanceof ArrayBuffer)if(c.decode(new Uint8Array(t,0,4))===Eg){try{a[pe.KHR_BINARY_GLTF]=new wd(t)}catch(f){i&&i(f);return}s=JSON.parse(a[pe.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(t));else s=t;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Ld(s,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let f=this.pluginCallbacks[h](l);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[f.name]=f,a[f.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){let f=s.extensionsUsed[h],u=s.extensionsRequired||[];switch(f){case pe.KHR_MATERIALS_UNLIT:a[f]=new cd;break;case pe.KHR_DRACO_MESH_COMPRESSION:a[f]=new Td(s,this.dracoLoader);break;case pe.KHR_TEXTURE_TRANSFORM:a[f]=new Sd;break;case pe.KHR_MESH_QUANTIZATION:a[f]=new Ad;break;default:u.indexOf(f)>=0&&o[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,i)}parseAsync(t,e){let n=this;return new Promise(function(i,s){n.parse(t,e,i,s)})}};function Bw(){let r={};return{get:function(t){return r[t]},add:function(t,e){r[t]=e},remove:function(t){delete r[t]},removeAll:function(){r={}}}}var pe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},od=class{constructor(t){this.parser=t,this.name=pe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let t=this.parser,e=this.parser.json.nodes||[];for(let n=0,i=e.length;n<i;n++){let s=e[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(t){let e=this.parser,n="light:"+t,i=e.cache.get(n);if(i)return i;let s=e.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[t],l,h=new it(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],dn);let f=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Ea(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new qi(h),l.distance=f;break;case"spot":l=new Gs(h),l.distance=f,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Ks(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=e.createUniqueName(c.name||"light_"+t),i=Promise.resolve(l),e.cache.add(n,i),i}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){let e=this,n=this.parser,s=n.json.nodes[t],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(e.cache,o,c)})}},cd=class{constructor(){this.name=pe.KHR_MATERIALS_UNLIT}getMaterialType(){return en}extendParams(t,e,n){let i=[];t.color=new it(1,1,1),t.opacity=1;let s=e.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let a=s.baseColorFactor;t.color.setRGB(a[0],a[1],a[2],dn),t.opacity=a[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(t,"map",s.baseColorTexture,de))}return Promise.all(i)}},ld=class{constructor(t){this.parser=t,this.name=pe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){let i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(e.emissiveIntensity=s),Promise.resolve()}},hd=class{constructor(t){this.parser=t,this.name=pe.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:vi}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(e.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(n.assignTexture(e,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(e,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(e,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new ht(o,o)}return Promise.all(s)}},ud=class{constructor(t){this.parser=t,this.name=pe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:vi}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(e.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(n.assignTexture(e,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(e.iridescenceIOR=a.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(e,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}},fd=class{constructor(t){this.parser=t,this.name=pe.KHR_MATERIALS_SHEEN}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:vi}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[];e.sheenColor=new it(0,0,0),e.sheenRoughness=0,e.sheen=1;let a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;e.sheenColor.setRGB(o[0],o[1],o[2],dn)}return a.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(n.assignTexture(e,"sheenColorMap",a.sheenColorTexture,de)),a.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(e,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}},dd=class{constructor(t){this.parser=t,this.name=pe.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:vi}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(e.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(n.assignTexture(e,"transmissionMap",a.transmissionTexture)),Promise.all(s)}},pd=class{constructor(t){this.parser=t,this.name=pe.KHR_MATERIALS_VOLUME}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:vi}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];e.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(n.assignTexture(e,"thicknessMap",a.thicknessTexture)),e.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return e.attenuationColor=new it().setRGB(o[0],o[1],o[2],dn),Promise.all(s)}},md=class{constructor(t){this.parser=t,this.name=pe.KHR_MATERIALS_IOR}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:vi}extendMaterialParams(t,e){let i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=i.extensions[this.name];return e.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}},gd=class{constructor(t){this.parser=t,this.name=pe.KHR_MATERIALS_SPECULAR}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:vi}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];e.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(n.assignTexture(e,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return e.specularColor=new it().setRGB(o[0],o[1],o[2],dn),a.specularColorTexture!==void 0&&s.push(n.assignTexture(e,"specularColorMap",a.specularColorTexture,de)),Promise.all(s)}},vd=class{constructor(t){this.parser=t,this.name=pe.EXT_MATERIALS_BUMP}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:vi}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];return e.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&s.push(n.assignTexture(e,"bumpMap",a.bumpTexture)),Promise.all(s)}},xd=class{constructor(t){this.parser=t,this.name=pe.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:vi}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(e.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(e.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&s.push(n.assignTexture(e,"anisotropyMap",a.anisotropyTexture)),Promise.all(s)}},bd=class{constructor(t){this.parser=t,this.name=pe.KHR_TEXTURE_BASISU}loadTexture(t){let e=this.parser,n=e.json,i=n.textures[t];if(!i.extensions||!i.extensions[this.name])return null;let s=i.extensions[this.name],a=e.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,s.source,a)}},yd=class{constructor(t){this.parser=t,this.name=pe.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){let e=this.name,n=this.parser,i=n.json,s=i.textures[t];if(!s.extensions||!s.extensions[e])return null;let a=s.extensions[e],o=i.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(t,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){let e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}},_d=class{constructor(t){this.parser=t,this.name=pe.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){let e=this.name,n=this.parser,i=n.json,s=i.textures[t];if(!s.extensions||!s.extensions[e])return null;let a=s.extensions[e],o=i.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(t,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){let e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}},Md=class{constructor(t){this.name=pe.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){let e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){let c=i.byteOffset||0,l=i.byteLength||0,h=i.count,f=i.byteStride,u=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,f,u,i.mode,i.filter).then(function(d){return d.buffer}):a.ready.then(function(){let d=new ArrayBuffer(h*f);return a.decodeGltfBuffer(new Uint8Array(d),h,f,u,i.mode,i.filter),d})})}else return null}},Ed=class{constructor(t){this.name=pe.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){let e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=e.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==bi.TRIANGLES&&l.mode!==bi.TRIANGLE_STRIP&&l.mode!==bi.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(t)),Promise.all(o).then(l=>{let h=l.pop(),f=h.isGroup?h.children:[h],u=l[0].count,d=[];for(let g of f){let v=new wt,m=new T,p=new Xt,x=new T(1,1,1),y=new Te(g.geometry,g.material,u);for(let _=0;_<u;_++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,_),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,_),c.SCALE&&x.fromBufferAttribute(c.SCALE,_),y.setMatrixAt(_,v.compose(m,p,x));for(let _ in c)if(_==="_COLOR_0"){let M=c[_];y.instanceColor=new $e(M.array,M.itemSize,M.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&g.geometry.setAttribute(_,c[_]);Ue.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),d.push(y)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}},Eg="glTF",ko=12,bg={JSON:1313821514,BIN:5130562},wd=class{constructor(t){this.name=pe.KHR_BINARY_GLTF,this.content=null,this.body=null;let e=new DataView(t,0,ko),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==Eg)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-ko,s=new DataView(t,ko),a=0;for(;a<i;){let o=s.getUint32(a,!0);a+=4;let c=s.getUint32(a,!0);if(a+=4,c===bg.JSON){let l=new Uint8Array(t,ko+a,o);this.content=n.decode(l)}else if(c===bg.BIN){let l=ko+a;this.body=t.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Td=class{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=pe.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){let n=this.json,i=this.dracoLoader,s=t.extensions[this.name].bufferView,a=t.extensions[this.name].attributes,o={},c={},l={};for(let h in a){let f=Cd[h]||h.toLowerCase();o[f]=a[h]}for(let h in t.attributes){let f=Cd[h]||h.toLowerCase();if(a[h]!==void 0){let u=n.accessors[t.attributes[h]],d=Ha[u.componentType];l[f]=d.name,c[f]=u.normalized===!0}}return e.getDependency("bufferView",s).then(function(h){return new Promise(function(f,u){i.decodeDracoFile(h,function(d){for(let g in d.attributes){let v=d.attributes[g],m=c[g];m!==void 0&&(v.normalized=m)}f(d)},o,l,dn,u)})})}},Sd=class{constructor(){this.name=pe.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}},Ad=class{constructor(){this.name=pe.KHR_MESH_QUANTIZATION}},Bl=class extends Us{constructor(t,e,n,i){super(t,e,n,i)}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i*3+i;for(let a=0;a!==i;a++)e[a]=n[s+a];return e}interpolate_(t,e,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=i-e,f=(n-e)/h,u=f*f,d=u*f,g=t*l,v=g-l,m=-2*d+3*u,p=d-u,x=1-m,y=p-u+f;for(let _=0;_!==o;_++){let M=a[v+_+o],b=a[v+_+c]*h,w=a[g+_+o],C=a[g+_]*h;s[_]=x*M+y*b+m*w+p*C}return s}},Gw=new Xt,Rd=class extends Bl{interpolate_(t,e,n,i){let s=super.interpolate_(t,e,n,i);return Gw.fromArray(s).normalize().toArray(s),s}},bi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Ha={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},yg={9728:an,9729:hn,9984:Wc,9985:Rf,9986:uo,9987:Gi},_g={33071:si,33648:bo,10497:jn},sd={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Cd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},js={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Vw={CUBICSPLINE:void 0,LINEAR:vr,STEP:da},rd={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Ww(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Ut({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Bi})),r.DefaultMaterial}function wr(r,t,e){for(let n in e.extensions)r[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function Ks(r,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(r.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function qw(r,t,e){let n=!1,i=!1,s=!1;for(let l=0,h=t.length;l<h;l++){let f=t[l];if(f.POSITION!==void 0&&(n=!0),f.NORMAL!==void 0&&(i=!0),f.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);let a=[],o=[],c=[];for(let l=0,h=t.length;l<h;l++){let f=t[l];if(n){let u=f.POSITION!==void 0?e.getDependency("accessor",f.POSITION):r.attributes.position;a.push(u)}if(i){let u=f.NORMAL!==void 0?e.getDependency("accessor",f.NORMAL):r.attributes.normal;o.push(u)}if(s){let u=f.COLOR_0!==void 0?e.getDependency("accessor",f.COLOR_0):r.attributes.color;c.push(u)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let h=l[0],f=l[1],u=l[2];return n&&(r.morphAttributes.position=h),i&&(r.morphAttributes.normal=f),s&&(r.morphAttributes.color=u),r.morphTargetsRelative=!0,r})}function Xw(r,t){if(r.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)r.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){let e=t.extras.targetNames;if(r.morphTargetInfluences.length===e.length){r.morphTargetDictionary={};for(let n=0,i=e.length;n<i;n++)r.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function jw(r){let t,e=r.extensions&&r.extensions[pe.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+ad(e.attributes):t=r.indices+":"+ad(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)t+=":"+ad(r.targets[n]);return t}function ad(r){let t="",e=Object.keys(r).sort();for(let n=0,i=e.length;n<i;n++)t+=e[n]+":"+r[e[n]]+";";return t}function Pd(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Kw(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var Yw=new wt,Ld=class{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new Bw,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,s=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,s=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&s<98?this.textureLoader=new Bs(this.options.manager):this.textureLoader=new vl(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ro(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){let n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return wr(s,o,i),Ks(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){t(o)})}).catch(e)}_markDefs(){let t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=e.length;i<s;i++){let a=e[i].joints;for(let o=0,c=a.length;o<c;o++)t[a[o]].isBone=!0}for(let i=0,s=t.length;i<s;i++){let a=t[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;let i=n.clone(),s=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,h]of a.children.entries())s(h,o.children[l])};return s(n,i),i.name+="_instance_"+t.uses[e]++,i}_invokeOne(t){let e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){let i=t(e[n]);if(i)return i}return null}_invokeAll(t){let e=Object.values(this.plugins);e.unshift(this);let n=[];for(let i=0;i<e.length;i++){let s=t(e[i]);s&&n.push(s)}return n}getDependency(t,e){let n=t+":"+e,i=this.cache.get(n);if(!i){switch(t){case"scene":i=this.loadScene(e);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(e)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(e)});break;case"accessor":i=this.loadAccessor(e);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(e)});break;case"buffer":i=this.loadBuffer(e);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(e)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(e)});break;case"skin":i=this.loadSkin(e);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(e)});break;case"camera":i=this.loadCamera(e);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(t,e)}),!i)throw new Error("Unknown type: "+t);break}this.cache.add(n,i)}return i}getDependencies(t){let e=this.cache.get(t);if(!e){let n=this,i=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(i.map(function(s,a){return n.getDependency(t,a)})),this.cache.add(t,e)}return e}loadBuffer(t){let e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[pe.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(s,a){n.load(Vs.resolveURL(e.uri,i.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){let e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){let i=e.byteLength||0,s=e.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(t){let e=this,n=this.json,i=this.json.accessors[t];if(i.bufferView===void 0&&i.sparse===void 0){let a=sd[i.type],o=Ha[i.componentType],c=i.normalized===!0,l=new o(i.count*a);return Promise.resolve(new At(l,a,c))}let s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(a){let o=a[0],c=sd[i.type],l=Ha[i.componentType],h=l.BYTES_PER_ELEMENT,f=h*c,u=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0,v,m;if(d&&d!==f){let p=Math.floor(u/d),x="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count,y=e.cache.get(x);y||(v=new l(o,p*d,i.count*d/h),y=new xa(v,d/h),e.cache.add(x,y)),m=new br(y,c,u%d/h,g)}else o===null?v=new l(i.count*c):v=new l(o,u,i.count*c),m=new At(v,c,g);if(i.sparse!==void 0){let p=sd.SCALAR,x=Ha[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,_=i.sparse.values.byteOffset||0,M=new x(a[1],y,i.sparse.count*p),b=new l(a[2],_,i.sparse.count*c);o!==null&&(m=new At(m.array.slice(),m.itemSize,m.normalized));for(let w=0,C=M.length;w<C;w++){let E=M[w];if(m.setX(E,b[w*c]),c>=2&&m.setY(E,b[w*c+1]),c>=3&&m.setZ(E,b[w*c+2]),c>=4&&m.setW(E,b[w*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(t){let e=this.json,n=this.options,s=e.textures[t].source,a=e.images[s],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(t,s,o)}loadTextureImage(t,e,n){let i=this,s=this.json,a=s.textures[t],o=s.images[e],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(e,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let u=(s.samplers||{})[a.sampler]||{};return h.magFilter=yg[u.magFilter]||hn,h.minFilter=yg[u.minFilter]||Gi,h.wrapS=_g[u.wrapS]||jn,h.wrapT=_g[u.wrapT]||jn,i.associations.set(h,{textures:t}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(t,e){let n=this,i=this.json,s=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(f=>f.clone());let a=i.images[t],o=self.URL||self.webkitURL,c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(f){l=!0;let u=new Blob([f],{type:a.mimeType});return c=o.createObjectURL(u),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(f){return new Promise(function(u,d){let g=u;e.isImageBitmapLoader===!0&&(g=function(v){let m=new Sn(v);m.needsUpdate=!0,u(m)}),e.load(Vs.resolveURL(f,s.path),g,void 0,d)})}).then(function(f){return l===!0&&o.revokeObjectURL(c),f.userData.mimeType=a.mimeType||Kw(a.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),f});return this.sourceCache[t]=h,h}assignTexture(t,e,n,i){let s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[pe.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[pe.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=s.associations.get(a);a=s.extensions[pe.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,c)}}return i!==void 0&&(a.colorSpace=i),t[e]=a,a})}assignFinalMaterial(t){let e=t.geometry,n=t.material,i=e.attributes.tangent===void 0,s=e.attributes.color!==void 0,a=e.attributes.normal===void 0;if(t.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Ci,An.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(t.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new ps,An.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||s||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),s&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}t.material=n}getMaterialType(){return Ut}loadMaterial(t){let e=this,n=this.json,i=this.extensions,s=n.materials[t],a,o={},c=s.extensions||{},l=[];if(c[pe.KHR_MATERIALS_UNLIT]){let f=i[pe.KHR_MATERIALS_UNLIT];a=f.getMaterialType(),l.push(f.extendParams(o,s,e))}else{let f=s.pbrMetallicRoughness||{};if(o.color=new it(1,1,1),o.opacity=1,Array.isArray(f.baseColorFactor)){let u=f.baseColorFactor;o.color.setRGB(u[0],u[1],u[2],dn),o.opacity=u[3]}f.baseColorTexture!==void 0&&l.push(e.assignTexture(o,"map",f.baseColorTexture,de)),o.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,o.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(l.push(e.assignTexture(o,"metalnessMap",f.metallicRoughnessTexture)),l.push(e.assignTexture(o,"roughnessMap",f.metallicRoughnessTexture))),a=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(t)}),l.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(t,o)})))}s.doubleSided===!0&&(o.side=Me);let h=s.alphaMode||rd.OPAQUE;if(h===rd.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===rd.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==en&&(l.push(e.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new ht(1,1),s.normalTexture.scale!==void 0)){let f=s.normalTexture.scale;o.normalScale.set(f,f)}if(s.occlusionTexture!==void 0&&a!==en&&(l.push(e.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==en){let f=s.emissiveFactor;o.emissive=new it().setRGB(f[0],f[1],f[2],dn)}return s.emissiveTexture!==void 0&&a!==en&&l.push(e.assignTexture(o,"emissiveMap",s.emissiveTexture,de)),Promise.all(l).then(function(){let f=new a(o);return s.name&&(f.name=s.name),Ks(f,s),e.associations.set(f,{materials:t}),s.extensions&&wr(i,f,s),f})}createUniqueName(t){let e=ke.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){let e=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[pe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,e).then(function(c){return Mg(c,o,e)})}let a=[];for(let o=0,c=t.length;o<c;o++){let l=t[o],h=jw(l),f=i[h];if(f)a.push(f.promise);else{let u;l.extensions&&l.extensions[pe.KHR_DRACO_MESH_COMPRESSION]?u=s(l):u=Mg(new Rt,l,e),i[h]={primitive:l,promise:u},a.push(u)}}return Promise.all(a)}loadMesh(t){let e=this,n=this.json,i=this.extensions,s=n.meshes[t],a=s.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let h=a[c].material===void 0?Ww(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(e.loadGeometries(a)),Promise.all(o).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],f=[];for(let d=0,g=h.length;d<g;d++){let v=h[d],m=a[d],p,x=l[d];if(m.mode===bi.TRIANGLES||m.mode===bi.TRIANGLE_STRIP||m.mode===bi.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new rl(v,x):new Gt(v,x),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===bi.TRIANGLE_STRIP?p.geometry=Qf(p.geometry,yl):m.mode===bi.TRIANGLE_FAN&&(p.geometry=Qf(p.geometry,Po));else if(m.mode===bi.LINES)p=new Vi(v,x);else if(m.mode===bi.LINE_STRIP)p=new ba(v,x);else if(m.mode===bi.LINE_LOOP)p=new ol(v,x);else if(m.mode===bi.POINTS)p=new on(v,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&Xw(p,s),p.name=e.createUniqueName(s.name||"mesh_"+t),Ks(p,s),m.extensions&&wr(i,p,m),e.assignFinalMaterial(p),f.push(p)}for(let d=0,g=f.length;d<g;d++)e.associations.set(f[d],{meshes:t,primitives:d});if(f.length===1)return s.extensions&&wr(i,f[0],s),f[0];let u=new Dt;s.extensions&&wr(i,u,s),e.associations.set(u,{meshes:t});for(let d=0,g=f.length;d<g;d++)u.add(f[d]);return u})}loadCamera(t){let e,n=this.json.cameras[t],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new We(Oe.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(e=new Ns(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),Ks(e,n),Promise.resolve(e)}loadSkin(t){let e=this.json.skins[t],n=[];for(let i=0,s=e.joints.length;i<s;i++)n.push(this._loadNodeShallow(e.joints[i]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let s=i.pop(),a=i,o=[],c=[];for(let l=0,h=a.length;l<h;l++){let f=a[l];if(f){o.push(f);let u=new wt;s!==null&&u.fromArray(s.array,l*16),c.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[l])}return new al(o,c)})}loadAnimation(t){let e=this.json,n=this,i=e.animations[t],s=i.name?i.name:"animation_"+t,a=[],o=[],c=[],l=[],h=[];for(let f=0,u=i.channels.length;f<u;f++){let d=i.channels[f],g=i.samplers[d.sampler],v=d.target,m=v.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,x=i.parameters!==void 0?i.parameters[g.output]:g.output;v.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",x)),l.push(g),h.push(v))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(f){let u=f[0],d=f[1],g=f[2],v=f[3],m=f[4],p=[];for(let x=0,y=u.length;x<y;x++){let _=u[x],M=d[x],b=g[x],w=v[x],C=m[x];if(_===void 0)continue;_.updateMatrix&&_.updateMatrix();let E=n._createAnimationTracks(_,M,b,w,C);if(E)for(let S=0;S<E.length;S++)p.push(E[S])}return new _a(s,void 0,p)})}createNodeMesh(t){let e=this.json,n=this,i=e.nodes[t];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){let a=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(t){let e=this.json,n=this,i=e.nodes[t],s=n._loadNodeShallow(t),a=[],o=i.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));let c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(a),c]).then(function(l){let h=l[0],f=l[1],u=l[2];u!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(u,Yw)});for(let d=0,g=f.length;d<g;d++)h.add(f[d]);return h})}_loadNodeShallow(t){let e=this.json,n=this.extensions,i=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];let s=e.nodes[t],a=s.name?i.createUniqueName(s.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(t)});return c&&o.push(c),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(l){return i._getNodeRef(i.cameraCache,s.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(t)}).forEach(function(l){o.push(l)}),this.nodeCache[t]=Promise.all(o).then(function(l){let h;if(s.isBone===!0?h=new To:l.length>1?h=new Dt:l.length===1?h=l[0]:h=new Ue,h!==l[0])for(let f=0,u=l.length;f<u;f++)h.add(l[f]);if(s.name&&(h.userData.name=s.name,h.name=a),Ks(h,s),s.extensions&&wr(n,h,s),s.matrix!==void 0){let f=new wt;f.fromArray(s.matrix),h.applyMatrix4(f)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=t,h}),this.nodeCache[t]}loadScene(t){let e=this.extensions,n=this.json.scenes[t],i=this,s=new Dt;n.name&&(s.name=i.createUniqueName(n.name)),Ks(s,n),n.extensions&&wr(e,s,n);let a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,f=c.length;h<f;h++)s.add(c[h]);let l=h=>{let f=new Map;for(let[u,d]of i.associations)(u instanceof An||u instanceof Sn)&&f.set(u,d);return h.traverse(u=>{let d=i.associations.get(u);d!=null&&f.set(u,d)}),f};return i.associations=l(s),s})}_createAnimationTracks(t,e,n,i,s){let a=[],o=t.name?t.name:t.uuid,c=[];js[s.path]===js.weights?t.traverse(function(u){u.morphTargetInfluences&&c.push(u.name?u.name:u.uuid)}):c.push(o);let l;switch(js[s.path]){case js.weights:l=ms;break;case js.rotation:l=Wi;break;case js.position:case js.scale:l=gs;break;default:switch(n.itemSize){case 1:l=ms;break;case 2:case 3:default:l=gs;break}break}let h=i.interpolation!==void 0?Vw[i.interpolation]:vr,f=this._getArrayFromAccessor(n);for(let u=0,d=c.length;u<d;u++){let g=new l(c[u]+"."+js[s.path],e.array,f,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){let n=Pd(e.constructor),i=new Float32Array(e.length);for(let s=0,a=e.length;s<a;s++)i[s]=e[s]*n;e=i}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){let i=this instanceof Wi?Rd:Bl;return new i(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Jw(r,t,e){let n=t.attributes,i=new Qe;if(n.POSITION!==void 0){let o=e.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new T(c[0],c[1],c[2]),new T(l[0],l[1],l[2])),o.normalized){let h=Pd(Ha[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=t.targets;if(s!==void 0){let o=new T,c=new T;for(let l=0,h=s.length;l<h;l++){let f=s[l];if(f.POSITION!==void 0){let u=e.json.accessors[f.POSITION],d=u.min,g=u.max;if(d!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),u.normalized){let v=Pd(Ha[u.componentType]);c.multiplyScalar(v)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}r.boundingBox=i;let a=new ri;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=a}function Mg(r,t,e){let n=t.attributes,i=[];function s(a,o){return e.getDependency("accessor",a).then(function(c){r.setAttribute(o,c)})}for(let a in n){let o=Cd[a]||a.toLowerCase();o in r.attributes||i.push(s(n[a],o))}if(t.indices!==void 0&&!r.index){let a=e.getDependency("accessor",t.indices).then(function(o){r.setIndex(o)});i.push(a)}return Ee.workingColorSpace!==dn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ee.workingColorSpace}" not supported.`),Ks(r,t),Jw(r,t,e),Promise.all(i).then(function(){return t.targets!==void 0?qw(r,t.targets,e):r})}var Na=(function(){"use strict";var r="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",t="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",e=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(e)?t:r,s,a=WebAssembly.instantiate(o(i),{}).then(function(p){s=p.instance,s.exports.__wasm_call_ctors()});function o(p){for(var x=new Uint8Array(p.length),y=0;y<p.length;++y){var _=p.charCodeAt(y);x[y]=_>96?_-97:_>64?_-39:_+4}for(var M=0,y=0;y<p.length;++y)x[M++]=x[y]<60?n[x[y]]:(x[y]-60)*64+x[++y];return x.buffer.slice(0,M)}function c(p,x,y,_,M,b){var w=s.exports.sbrk,C=y+3&-4,E=w(C*_),S=w(M.length),I=new Uint8Array(s.exports.memory.buffer);I.set(M,S);var D=p(E,y,_,S,M.length);if(D==0&&b&&b(E,C,_),x.set(I.subarray(E,E+y*_)),w(E-w(0)),D!=0)throw new Error("Malformed buffer data: "+D)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},f=[],u=0;function d(p){var x={object:new Worker(p),pending:0,requests:{}};return x.object.onmessage=function(y){var _=y.data;x.pending-=_.count,x.requests[_.id][_.action](_.value),delete x.requests[_.id]},x}function g(p){for(var x="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(o(i))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+c.toString()+m.toString(),y=new Blob([x],{type:"text/javascript"}),_=URL.createObjectURL(y),M=0;M<p;++M)f[M]=d(_);URL.revokeObjectURL(_)}function v(p,x,y,_,M){for(var b=f[0],w=1;w<f.length;++w)f[w].pending<b.pending&&(b=f[w]);return new Promise(function(C,E){var S=new Uint8Array(y),I=u++;b.pending+=p,b.requests[I]={resolve:C,reject:E},b.object.postMessage({id:I,count:p,size:x,source:S,mode:_,filter:M},[S.buffer])})}function m(p){a.then(function(){var x=p.data;try{var y=new Uint8Array(x.count*x.size);c(s.exports[x.mode],y,x.count,x.size,x.source,s.exports[x.filter]),self.postMessage({id:x.id,count:x.count,action:"resolve",value:y},[y.buffer])}catch(_){self.postMessage({id:x.id,count:x.count,action:"reject",value:_})}})}return{ready:a,supported:!0,useWorkers:function(p){g(p)},decodeVertexBuffer:function(p,x,y,_,M){c(s.exports.meshopt_decodeVertexBuffer,p,x,y,_,s.exports[l[M]])},decodeIndexBuffer:function(p,x,y,_){c(s.exports.meshopt_decodeIndexBuffer,p,x,y,_)},decodeIndexSequence:function(p,x,y,_){c(s.exports.meshopt_decodeIndexSequence,p,x,y,_)},decodeGltfBuffer:function(p,x,y,_,M,b){c(s.exports[h[M]],p,x,y,_,s.exports[l[b]])},decodeGltfBufferAsync:function(p,x,y,_,M){return f.length>0?v(p,x,y,h[_],l[M]):a.then(function(){var b=new Uint8Array(p*x);return c(s.exports[h[_]],b,p,x,y,s.exports[l[M]]),b})}}})();var Gl={uNearR:{value:0},uNearC:{value:new ht}},Zw={broad:["CommonTree_1","CommonTree_2","CommonTree_3","CommonTree_4","CommonTree_5"],pine:["Pine_1","Pine_2","Pine_3","Pine_4","Pine_5"],plant:["Fern_1","Fern_1","Fern_1","Plant_1_Big"]},Qw={broad:7.2,pine:9.2},wg=240,Tg=1100,Sg=55,Vl=class{constructor(t){this.group=new Dt,t.add(this.group),this.ready=!1,this.radius=0,this.models={},this.rockGeos=null,this._last=new T(1e9,0,0),this._m4=new wt,this._q=new Xt,this._s=new T,this._p=new T,this._up=new T(0,1,0)}async load(t){let e=new Ys;e.setMeshoptDecoder(Na);let i=(await e.loadAsync(t)).scene;i.updateMatrixWorld(!0);let s=[];for(let a of i.children){let o=a.name,c=new Qe().setFromObject(a),l=c.max.y-c.min.y,h=[];a.traverse(f=>{if(!f.isMesh)return;let u=$w(f.geometry).applyMatrix4(f.matrixWorld);if(u.translate(0,-c.min.y-.05,0),/^Rock_/.test(o)){s.push(u);return}let d=f.material;d.side=Me,d.map&&/leaf|leaves|grass/i.test(d.name+d.map.name)&&(d.alphaTest=.4,d.transparent=!1),d.envMapIntensity=.7,ge(d);let g=[wg,Tg].map((v,m)=>{let p=new Te(u,d,v);return p.count=0,p.castShadow=m===0,p.receiveShadow=!0,p.frustumCulled=!1,p.layers.set(3),this.group.add(p),p});h.push(g)}),h.length&&(this.models[o]={parts:h,h:l})}return this.rockGeos=s.map(a=>{a.computeBoundingBox();let o=a.boundingBox,c=1/Math.max(o.max.x-o.min.x,o.max.z-o.min.z);return a.translate(-(o.min.x+o.max.x)/2,-o.min.y-.08,-(o.min.z+o.max.z)/2),a.scale(c,c,c),a}),this.ready=!0,this}setRadius(t){if(this.radius=t,Gl.uNearR.value=this.ready?t:0,this._last.set(1e9,0,0),!t)for(let e in this.models)for(let n of this.models[e].parts)n[0].count=0,n[1].count=0}update(t,e){if(Gl.uNearC.value.set(t.x,t.z),!this.ready||!this.radius||this._last.distanceToSquared(t)<4)return;this._last.copy(t);let n=this.radius,i=n*n,s={},a=Sg*Sg;for(let f in this.models)s[f]=[[],[]];for(let f of e.tiles.values()){let u=f.userData.near;if(!u)continue;let d=f.userData.box,g=Math.max(d[0]-t.x,0,t.x-d[2]),v=Math.max(d[1]-t.z,0,t.z-d[3]);if(!(g*g+v*v>i))for(let m of u){let p=m[1]-t.x,x=m[3]-t.z,y=p*p+x*x;if(y>i)continue;let _=Zw[m[0]],M=_[Math.floor(m[6]*4.999)%_.length];if(!s[M])continue;let b=y>a?1:0,w=s[M][b];w.length<(b?Tg:wg)&&w.push(m)}}let o=this._m4,c=this._q,l=this._s,h=this._p;for(let f in this.models){let{parts:u,h:d}=this.models[f],g=s[f],v=f.startsWith("Pine")?"pine":f.startsWith("Common")?"broad":"plant",m=v==="plant"?1:Qw[v]/d;for(let p of u)p.forEach((x,y)=>{g[y].forEach((_,M)=>{c.setFromAxisAngle(this._up,_[5]);let b=_[4]*m;o.compose(h.set(_[1],_[2],_[3]),c,l.set(b,b*(.92+_[6]*.16),b)),x.setMatrixAt(M,o)}),x.count=g[y].length,x.instanceMatrix.needsUpdate=!0})}}};function $w(r){let t=r.clone();for(let e of Object.keys(t.attributes)){let n=t.attributes[e];if(n.array instanceof Float32Array&&!n.isInterleavedBufferAttribute)continue;let i=new Float32Array(n.count*n.itemSize),s=[n.getX,n.getY,n.getZ,n.getW];for(let a=0;a<n.count;a++)for(let o=0;o<n.itemSize;o++)i[a*n.itemSize+o]=s[o].call(n,a);t.setAttribute(e,new At(i,n.itemSize))}return t}var Lg=2,Nd=1.3,tT=27.119*Lg,Fd=-1.317*Nd,Ig=1.754*Nd,eT=.8*Nd/Lg,Hd=76,Id=10,nT=8,iT=6.333*Math.SQRT2,Ag=[-.5/99,2.25/99],Wl=.1,sT=4,Uo=1.5,Rg=120,Dg=400,rT=8,aT=6e3,oT=Le.halfWidth+1.2,cT=Le.halfWidth+16,kd=7,ql=27,Dd=12;function lT(r){let t=(r%1+1)%1,e=Math.sin(Math.PI*t)**2;return{a:Wl+(1-Wl)*e,b:Wl+(1-Wl)*(1-e)}}function Fg(r,t){let e=new Rt;return e.setAttribute("position",new _t(r,3)),e.setAttribute("normal",new _t(r.map((n,i)=>i%3===1?1:0),3)),e.setIndex(t),e}function Cg(r,t,e=0){let n=Math.round(2*r/t),i=[],s=[];for(let a=0;a<=n;a++)for(let o=0;o<=n;o++)i.push(-r+o*t,0,-r+a*t);for(let a=0;a<n;a++)for(let o=0;o<n;o++){let c=-r+o*t,l=-r+a*t;if(e&&c>=-e-1e-6&&c+t<=e+1e-6&&l>=-e-1e-6&&l+t<=e+1e-6)continue;let h=a*(n+1)+o,f=h+1,u=h+n+1,d=u+1;s.push(h,u,f,f,u,d)}return Fg(i,s)}function hT(){let r=Dg,t=aT,e=[-r,0,-r,r,0,-r,r,0,r,-r,0,r,-t,0,-t,t,0,-t,t,0,t,-t,0,t],n=[];for(let i=0;i<4;i++){let s=i,a=(i+1)%4,o=i+4,c=(i+1)%4+4;n.push(s,o,a,a,o,c)}return Fg(e,n)}var Pg=`
uniform sampler2D uWave;
uniform float uFrame, uFrameB, uWA, uWB, uSea, uLod, uT;
uniform vec3 uCamW;
uniform vec3 uRoad[${ql}];
const float TILE = ${tT.toFixed(3)};
const mat2 ROT = mat2(0.906, 0.423, -0.423, 0.906);      // ô sóng xoay ~25° so với trục thế giới
float oLod = 0.0;                                         // mức mipmap (fragment: theo khoảng cách)
// Mỗi ô 128 px gồm 100 px dữ liệu + viền lặp 14 px: mipmap ≤ 2.5 không trộn khung bên cạnh.
vec3 waveFrame(vec2 uv, float f) {
  vec2 c = fract(uv);
  vec2 o = vec2(mod(f, ${Id}.0), floor(f / ${Id}.0));
  return textureLod(uWave, (o * 128.0 + 14.5 + c * 99.0) / vec2(${Id*128}.0, ${nT*128}.0), oLod).rgb;
}
// một lớp: giữa khung f0 và f1, dời mẫu theo hướng trôi (bù chuyển động) rồi mới trộn
vec3 waveLayer(vec2 uv, float fr) {
  float f0 = floor(fr), t = fr - f0, f1 = mod(f0 + 1.0, ${Hd}.0);
  vec2 v = vec2(${Ag[0].toFixed(5)}, ${Ag[1].toFixed(5)});
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
  float h = mix(${Fd.toFixed(3)}, ${Ig.toFixed(3)}, a.r);
  vec2 sl = (a.gb - 0.5) * ${(2*eT).toFixed(3)};
  return vec3(h, sl * ROT);                                // độ dốc theo trục thế giới
}
`;function uT(r){let t=new Ut({color:16777215,roughness:.05,metalness:0,transparent:!0,depthWrite:!0});return t.onBeforeCompile=e=>{Object.assign(e.uniforms,r),e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
${Pg}
varying vec3 vOW; varying float vDepth, vShore;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        vec3 ow = (modelMatrix * vec4(transformed, 1.0)).xyz;
        float camD = length(ow.xz - uCamW.xz);
        vec3 wv = waveAt(ow.xz);
        float fadeH = 1.0 - smoothstep(80.0, 112.0, camD);           // xa: chỉ còn pháp tuyến, mặt phẳng (lưới gần rộng ±120 m)
        transformed.y += wv.x * fadeH;
        // độ sâu ước lượng: khoảng cách tới tim đường + cao độ đường => cao độ đê (cùng công thức xẻ đường của terrain.js)
        float dm = 1e9, ry = uSea + 10.0;
        for (int i = 0; i < ${ql-1}; i++) {
          vec2 a = uRoad[i].xz, b = uRoad[i + 1].xz, ab = b - a;
          float t = clamp(dot(ow.xz - a, ab) / dot(ab, ab), 0.0, 1.0);
          float d = length(ow.xz - a - ab * t);
          if (d < dm) { dm = d; ry = mix(uRoad[i].y, uRoad[i + 1].y, t); }
        }
        float ground = mix(ry - 0.02, uSea - ${kd.toFixed(1)}, smoothstep(${oT.toFixed(2)}, ${cT.toFixed(2)}, dm));
        vDepth = uSea + wv.x * fadeH - ground;
        vShore = 1.0 - smoothstep(30.0, 60.0, dm);
        vOW = ow; vOW.y += wv.x * fadeH;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
${Pg}
varying vec3 vOW; varying float vDepth, vShore;
float oFoam = 0.0;
        float oHash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
        float oNoise(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
          return mix(mix(oHash(i), oHash(i + vec2(1.0, 0.0)), f.x), mix(oHash(i + vec2(0.0, 1.0)), oHash(i + vec2(1.0, 1.0)), f.x), f.y); }`).replace("#include <map_fragment>",`
        float camD = length(vOW.xz - uCamW.xz);
        oLod = clamp(log2(camD * camD / uLod), 0.0, 2.5);           // xa / nhìn xiên: mipmap thô hơn (ô 128 px có viền đệm => tối đa ~2.5)
        vec3 wv = waveAt(vOW.xz);
        float crest = smoothstep(0.55, 1.0, (wv.x - ${Fd.toFixed(3)}) / ${(Ig-Fd).toFixed(3)}) * (1.0 - smoothstep(60.0, 200.0, camD));
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
        }`)},t.customProgramCacheKey=()=>"ocean",ge(t)}var Xl=class{constructor(t){this.group=new Dt,this.group.visible=!1,t.add(this.group),this.level=0,this.roadPts=Array.from({length:ql},()=>new T),this.u={uWave:{value:null},uFrame:{value:0},uFrameB:{value:0},uWA:{value:1},uWB:{value:0},uT:{value:0},uSea:{value:0},uLod:{value:3e3},uCamW:{value:new T},uRoad:{value:this.roadPts}},this.material=null,this._p={}}_build(){let t=new Bs().load("assets/tex/ocean-waves.png?v="+sT);t.flipY=!1,t.colorSpace=kn,t.generateMipmaps=!0,t.minFilter=Gi,t.magFilter=hn,this.u.uWave.value=t,this.material=uT(this.u);for(let e of[Cg(Rg,Uo),Cg(Dg,rT,Rg),hT()]){let n=new Gt(e,this.material);n.frustumCulled=!1,n.receiveShadow=!0,n.renderOrder=1,this.group.add(n)}}setMap(t,e=0){this.group.visible=t,this.level=e,t&&!this.material&&this._build()}update(t,e,n,i){if(!this.group.visible)return;this.group.position.set(Math.round(e.x/Uo)*Uo,this.level,Math.round(e.z/Uo)*Uo);let s=this.u,a=t/iT%1,o=lT(a);s.uFrame.value=a*Hd,s.uT.value=t%1e3,s.uFrameB.value=(a+.5)%1*Hd,s.uWA.value=o.a,s.uWB.value=o.b,s.uSea.value=this.level,s.uCamW.value.copy(e),s.uLod.value=1500*Math.max(1,(e.y-this.level)/3);let c=this._p,l=Math.round(i/Dd)*Dd;for(let h=0;h<ql;h++)n.at(Math.max(0,l+(h-13)*Dd),c),this.roadPts[h].set(c.x,c.y,c.z)}};var Hg=32,fT=64,Ud=8192,Ye=Le.halfWidth,zg=Ye+1.2,zo=Ye+16,dT=()=>{Ye=Le.halfWidth,zg=Ye+1.2,zo=Ye+16},zd=1e6,Re=(r,t,e)=>{let n=Math.min(1,Math.max(0,(e-r)/(t-r)));return n*n*(3-2*n)},je=r=>new it(r),Ng={forest:{a:je("#7fa443"),b:je("#a9b85a"),c:je("#5c8036"),snowLine:215,trees:!0},reed:{a:je("#ad9b5c"),b:je("#c5b37b"),c:je("#8c8a50"),snowLine:240,trees:!1},mountain:{a:je("#789a45"),b:je("#9eaa5a"),c:je("#557236"),snowLine:300,trees:!0},meadow:{a:je("#6f9a4c"),b:je("#86ad5c"),c:je("#5c8541"),snowLine:400,trees:!1,bare:!0},sea:{a:je("#cbb98c"),b:je("#bba97c"),c:je("#7f8f55"),snowLine:600,trees:!1,bare:!0},city:{a:je("#77787a"),b:je("#828280"),c:je("#6c6e6c"),snowLine:900,trees:!1,bare:!0}},pT=je("#5f7f45"),mT=je("#3e5d2b"),kg=je("#8a8072"),Od=je("#6b6259"),gT=je("#eef2f6"),vT=je("#8f887c"),xT=je("#5f6c36"),Ug={64:1,128:.5,256:.22,512:.08},bT={64:1,128:.7,256:.4,512:.16},jl=class{constructor(t,e,n){this.road=e,this.group=new Dt,t.add(this.group),this.tiles=new Map,this.view=1,this.keep=Ug,this.queue=[],this.queued=new Set,this.iCar=0,this.uCover={value:0},this.mat=new Ut({vertexColors:!0,map:Q0(n),roughness:.96,metalness:0,envMapIntensity:.8}),this.texU={uRock:{value:yr("rock",n)},uRockN:{value:yr("rock_n",n,{srgb:!1})},uGravel:{value:yr("gravel",n)},uDirt:{value:yr("dirt",n)}},this.mat.onBeforeCompile=s=>{s.uniforms.uCover=this.uCover,Object.assign(s.uniforms,this.texU),s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
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
          }`)},this.treeMat=new Ut({map:$0(),alphaTest:.45,side:Me,roughness:.92});let i=s=>{Object.assign(s.uniforms,Gl),s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
uniform float uNearR;
uniform vec2 uNearC;`).replace("#include <begin_vertex>",`#include <begin_vertex>
          vec3 ipos = (modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;
          transformed *= smoothstep(uNearR - 1.0, uNearR + 1.0, distance(ipos.xz, uNearC));`)};this.treeMat.onBeforeCompile=s=>{i(s),s.fragmentShader=s.fragmentShader.replace("#include <normal_fragment_begin>",$t.normal_fragment_begin.replace("normal *= faceDirection;",""))},this.treeDepth=new Eo({depthPacking:Df,map:this.treeMat.map,alphaTest:.45,side:Me}),this.treeDepth.onBeforeCompile=i,ge(this.mat),ge(this.treeMat),this.geos={pine:cg(),broad:og()},this.rockGeos=[0,1,2].map(s=>Bd(s)),this.rockMat=new Ut({roughness:1,metalness:0,envMapIntensity:.35}),this.rockMat.onBeforeCompile=s=>{Object.assign(s.uniforms,this.texU),s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
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
          diffuseColor.rgb *= mix(vec3(dot(rt, vec3(0.3, 0.59, 0.11))), rt, 0.25) * 1.7;`)},ge(this.rockMat),this._nd=zd,this._ny=0,this._nl=0,this._d=zd,this._rc=new it,this._white=new it(1,1,1)}setCar(t){this.iCar=Math.floor(t/Le.step)}_samples(t,e,n,i,s,a,o){let c=this.road.pts,l=[],h=Math.max(0,a),f=Math.min(c.length-1,o);for(let u=h-h%s;u<=f;u+=s){if(u<h)continue;let d=c[u];d.x>=t&&d.x<=n&&d.z>=e&&d.z<=i&&l.push(u)}return l}_nearFine(t,e,n){let i=this.road.pts,s=1/0,a=-1;for(let h=0;h<n.length;h++){let f=i[n[h]],u=t-f.x,d=e-f.z,g=u*u+d*d;g<s&&(s=g,a=n[h])}if(a<0)return!1;let o=1/0,c=i[a].y,l=0;for(let h=a-1;h<=a;h++){if(h<0||h+1>=i.length)continue;let f=i[h],u=i[h+1],d=u.x-f.x,g=u.z-f.z,v=d*d+g*g,m=Math.max(0,Math.min(1,((t-f.x)*d+(e-f.z)*g)/v)),p=t-f.x-d*m,x=e-f.z-g*m,y=Math.hypot(p,x);y<o&&(o=y,c=f.y+(u.y-f.y)*m,l=(p*-g+x*d)/Math.sqrt(v))}return this._nd=o,this._ny=c,this._nl=l,this._ns=a*Le.step,!0}_height(t,e,n,i){let s=this.road.pts,a=Ie.side,o=1/0,c=0,l=0;for(let g=0;g<i.length;g++){let v=i[g],m=s[v],p=t-m.x,x=e-m.z,y=p*p+x*x;if(y<o&&(o=y),a&&v+1<s.length){let _=s[v+1],M=_.x-m.x,b=_.z-m.z,w=Math.hypot(M,b)||1,C=(p*-b+x*M)/w,E=1/(y*y+1e4);c+=E,l+=E*C}}let h=Math.sqrt(o),f=Li(t,e)+El(t,e),u=0;this._d=zd,this._s=-1,this._rel=0;let d=h-70<zo&&this._nearFine(t,e,n);if(Ie.sea)f=(Ie.seaLevel??-10)-kd+El(t,e)*.6,h>400&&(f+=Math.max(0,wl(t,e)/Ie.mount-.42)*2.6*Ie.mount*Re(400,1200,h));else if(a){let g=c>0?l/c:0;d&&(g=this._nl+(g-this._nl)*Re(25,60,this._nd));let v=-g,m=.75+.5*ze(t/220+4.4,e/220+9.9);if(v>0){f+=(360*(1-Math.exp(-v/210))+.2*v)*m;let p=Re(2,18,v)*(1-.5*Re(350,900,v));if(p>0){let x=1-Math.abs(ze(t/42+1.7,e/42+6.3)*2-1),y=1-Math.abs(ze(t/16+8.1,e/16+2.9)*2-1);u=(x*x-.45)*42+(y*y-.45)*15+(ze(t/85+3.3,e/85+7.7)-.5)*34,f+=u*p,this._rel=u*Math.max(p,.5);let _=f/10,M=_-Math.floor(_);f+=((Math.floor(_)+Re(.3,.7,M))*10-f)*.75*p*Re(.25,.55,ze(t/120+5.1,e/120+1.3))}}else f-=250*(1-Math.exp(v/170));f+=El(t*1.7,e*1.7)*.8,Math.abs(v)>650&&(f+=wl(t,e)*Re(650,1500,Math.abs(v)))}else h>500&&(f+=wl(t,e)*Re(500,1600,h));if(d){this._d=this._nd,this._s=this._ns;let g=Re(zg,zo,this._nd),v=this._ny-.02;f=v+(f-v)*g,a&&this._nl<0&&(f=Math.max(v,f+Math.max(u,-8)*Re(Ye+1.5,Ye+8,this._nd)*(1-g)))}return f}heightAt(t,e){let n=zo+80,i=this._samples(t-n,e-n,t+n,e+n,1,this.iCar-300,this.iCar+300),s=this._samples(t-1700,e-1700,t+1700,e+1700,25,this.iCar-2500,this.iCar+4e3);return this._height(t,e,i,s)}_color(t,e,n,i,s,a,o,c=0){let l=Ng[Ie.id],h=ze(t/150+2.3,e/150+6.1),f=ze(t/37+8.8,e/37+1.2);o.copy(l.a).lerp(l.b,Re(.3,.75,h)).lerp(l.c,Re(.45,.9,f)*.55),Ie.id==="city"&&o.lerp(pT,Re(1,20,n)),l.trees&&o.lerp(mT,Re(.44,.66,ze(t/260+3.1,e/260+8.7))*.6);let u=a>=0?this.road.dirtAt(a):0,d=u*(1-Re(Ye+1,Ye+28,s));d>0&&o.lerp(xT,d*.75);let g=1-i;o.lerp(Od,Re(110,220,n)*.45);let v=Re(.22,.4,g);if(v>0){let y=.72+.4*ze((t+e)/9+1.3,n/2.6)+.18*(f-.5);this._rc.copy(f>.5?kg:Od).multiplyScalar(y),o.lerp(this._rc,v)}let m=Re(l.snowLine+(h-.5)*60,l.snowLine+50,n)*(1-Re(.5,.75,g));o.lerp(gT,m);let p=(1-(Ie.id==="forest"?Re(Ye+.2,Ye+1.1,s):Re(Ye+1,Ye+3.2,s)))*(1-u);o.lerp(vT,p);let x=Ie.id==="mountain"?Re(70,190,n)*(1-v)*(1-m)*Re(.35,.7,f+.3*h)*.8:0;return this._mixG=Math.max(p,x),this._mixD=d*Re(.25,.6,ze(t/9+5.5,e/9+2.2)*.7+.5*(1-Re(Ye+1,Ye+9,s))),c&&o.multiplyScalar(.62+.58*Re(-16,16,c)),o}_build(t,e,n){let i=Hg,s=n/i,a=i+3,o=zo+80,c=this.iCar-2500,l=this.iCar+4e3,h=this._samples(t-o,e-o,t+n+o,e+n+o,1,c,l),f=this._samples(t-1700,e-1700,t+n+1700,e+n+1700,25,c,l),u=new Float32Array(a*a),d=new Float32Array(a*a),g=new Float32Array(a*a),v=new Float32Array(a*a);for(let N=0;N<a;N++)for(let U=0;U<a;U++)u[N*a+U]=this._height(t+(U-1)*s,e+(N-1)*s,h,f),d[N*a+U]=this._d,g[N*a+U]=this._s,v[N*a+U]=this._rel;let m=(i+1)*(i+1),p=4*(i+1),x=new Float32Array((m+p)*3),y=new Float32Array((m+p)*3),_=new Float32Array((m+p)*3),M=new Float32Array((m+p)*2),b=new Float32Array((m+p)*2),w=new it,C=new Float32Array(m);for(let N=0;N<=i;N++)for(let U=0;U<=i;U++){let V=(N+1)*a+(U+1),q=N*(i+1)+U,j=t+U*s,at=e+N*s,G=u[V],$=u[V-1]-u[V+1],gt=2*s,pt=u[V-a]-u[V+a],St=Math.hypot($,gt,pt);$/=St,gt/=St,pt/=St,C[q]=gt,x.set([j,G,at],q*3),y.set([$,gt,pt],q*3),this._color(j,at,G,gt,d[V],g[V],w,v[V]),_.set([w.r,w.g,w.b],q*3),b[q*2]=this._mixG,b[q*2+1]=this._mixD,M.set([j/6,at/6],q*2)}let E=[];for(let N=0;N<i;N++)for(let U=0;U<i;U++){let V=N*(i+1)+U,q=V+1,j=V+i+1,at=j+1;E.push(V,j,q,q,j,at)}let S=s*1.5+1,I=[Array.from({length:i+1},(N,U)=>U),Array.from({length:i+1},(N,U)=>i*(i+1)+U),Array.from({length:i+1},(N,U)=>U*(i+1)),Array.from({length:i+1},(N,U)=>U*(i+1)+i)],D=m;for(let N of I){let U=D;for(let V of N)x.set([x[V*3],x[V*3+1]-S,x[V*3+2]],D*3),y.set([y[V*3],y[V*3+1],y[V*3+2]],D*3),_.set([_[V*3],_[V*3+1],_[V*3+2]],D*3),b[D*2]=b[V*2],b[D*2+1]=b[V*2+1],M.set([M[V*2],M[V*2+1]],D*2),D++;for(let V=0;V<i;V++){let q=N[V],j=N[V+1],at=U+V,G=U+V+1;E.push(q,at,j,j,at,G,q,j,at,j,G,at)}}let k=new Rt;k.setAttribute("position",new At(x,3)),k.setAttribute("normal",new At(y,3)),k.setAttribute("color",new At(_,3)),k.setAttribute("aMix",new At(b,2)),k.setAttribute("uv",new At(M,2)),k.setIndex(E),k.computeBoundingSphere();let R=new Gt(k,this.mat);R.receiveShadow=n<=256,R.castShadow=n<=64;let A=new Dt;A.add(R),A.userData.box=[t,e,t+n,e+n];let P=this._trees(t,e,n,s,a,u,d,C,g,A);for(let N of P)A.add(N);return this.group.add(A),A}_bil(t,e,n,i,s,a,o){let c=(a-i)/n+1,l=(o-s)/n+1,h=Math.max(0,Math.min(e-2,Math.floor(c))),f=Math.max(0,Math.min(e-2,Math.floor(l))),u=c-h,d=l-f,g=t[f*e+h],v=t[f*e+h+1],m=t[(f+1)*e+h],p=t[(f+1)*e+h+1];return g+(v-g)*u+(m-g)*d+(g-v-m+p)*u*d}_nearest(t,e,n,i,s,a,o){let c=Math.min(e-1,Math.max(0,Math.round((a-i)/n+1))),l=Math.min(e-1,Math.max(0,Math.round((o-s)/n+1)));return t[l*e+c]}_trees(t,e,n,i,s,a,o,c,l,h){let f=Ng[Ie.id],u=this.keep[n]||0;if(!u)return[];let d=Hg,g=Ie.id==="mountain",v=[],m=[],p=[],x=(w,C)=>c[Math.min(d,Math.round((C-e)/i))*(d+1)+Math.min(d,Math.round((w-t)/i))],y=n<=128?[]:null;h&&(h.userData.near=y);let _=[{cell:8,seed:0}];if(this.road.dirt&&n<=128){let w=!1;for(let C=0;C<l.length&&!w;C+=7)l[C]>=0&&this.road.dirtAt(l[C])>.05&&(w=!0);w&&_.push({cell:4,seed:1})}for(let{cell:w,seed:C}of _){let E=C*15485863;for(let S=Math.floor(e/w);S*w<e+n;S++)for(let I=Math.floor(t/w);I*w<t+n;I++){if(ne(I+E,S)>u)continue;let D=(I+ne(I+7919+E,S))*w,k=(S+ne(I+E,S+7919))*w;if(D<t||D>=t+n||k<e||k>=e+n)continue;let R=this._bil(o,s,i,t,e,D,k),A=R<60?this._nearest(l,s,i,t,e,D,k):-1,P=A>=0?this.road.dirtAt(A):0,N=f.trees?Re(.44,.66,ze(D/260+3.1,k/260+8.7))*.92+.03:f.bare?0:.012;C?N=P*.85*(1-Re(Ye+20,Ye+45,R)):N=Math.max(N,P*.9*(1-Re(Ye+25,Ye+60,R)));let U=this._bil(a,s,i,t,e,D,k),V=x(D,k);if(ne(I+104729+E,S+31)>N||R<Ye+7.5-5*P+(C?ne(I,S+3)*1.5:0)||U>f.snowLine-20||V<(g?.66:.8))continue;let q=(.75+ne(I+3+E,S+5)*.7)*(n>=256?1.3:1)*(P>.3?1.15:1),j=f.trees?ne(I+11+E,S+13)<(g?.9:.58+Re(60,180,U)*.35):!1,at=[D,U-.2,k,q,ne(I+17+E,S+19)*6.283,ne(I+23+E,S+29)];(j?v:m).push(at),y&&y.push([j?"pine":"broad",...at])}}if(n<=256)for(let C=Math.floor(e/22);C*22<e+n;C++)for(let E=Math.floor(t/22);E*22<t+n;E++){if(ne(E+911,C+577)>u)continue;let S=(E+ne(E+31,C+977))*22,I=(C+ne(E+977,C+31))*22;if(S<t||S>=t+n||I<e||I>=e+n)continue;let D=this._bil(o,s,i,t,e,S,I);if(D<Ye+3)continue;let k=x(S,I),R=D<60?this._nearest(l,s,i,t,e,S,I):-1,A=R>=0?this.road.dirtAt(R):0,P=g&&k<=.5,N=g?D<Ye+14?.45:P?.32:k<.93?.3:.06:A*.2;if(ne(E+3331,C+7177)>N)continue;let U=(g?P?3:1.6:.8)+Math.pow(ne(E+41,C+43),1.6)*(g?P?7:5.5:1.6),V=3+Math.floor(ne(E+7,C+9)*5);for(let q=0;q<V;q++){let j=ne(E*7+q,C+101)*6.283,at=(q===0?0:.6+ne(E+q*13,C*3+7)*1.4)*U,G=S+Math.cos(j)*at,$=I+Math.sin(j)*at;if(G<t-4||G>=t+n+4||$<e-4||$>=e+n+4||this._bil(o,s,i,t,e,G,$)<Ye+2)continue;let gt=U*(q===0?1:.35+ne(E+q,C+q*5)*.55),pt=this._bil(a,s,i,t,e,G,$);p.push([G,pt-gt*(P?.35:.22),$,gt,ne(E+q*3,C+53)*6.283,ne(E+59+q,C+61)])}}if(y&&n<=64&&f.trees)for(let C=Math.floor(e/3.5);C*3.5<e+n;C++)for(let E=Math.floor(t/3.5);E*3.5<t+n;E++){let S=(E+ne(E+5153,C))*3.5,I=(C+ne(E,C+5153))*3.5;if(S<t||S>=t+n||I<e||I>=e+n)continue;let D=this._bil(o,s,i,t,e,S,I);if(D<Ye+1.6)continue;let k=D<60?this._nearest(l,s,i,t,e,S,I):-1,R=k>=0?this.road.dirtAt(k):0,A=(g?.07:.1+.18*Re(.44,.66,ze(S/260+3.1,I/260+8.7)))+R*.35;if(ne(E+6007,C+6011)>A||x(S,I)<.75)continue;let P=this._bil(a,s,i,t,e,S,I);y.push(["plant",S,P-.05,I,.6+ne(E+61,C+67)*.7,ne(E+71,C+73)*6.283,ne(E+79,C+83)])}let M=[],b=(w,C,E,S)=>{if(!w.length)return;let I=new Te(C,E,w.length),D=new wt,k=new Xt,R=new T,A=new T,P=new T(0,1,0),N=new it,U=new mi;w.forEach(([V,q,j,at,G,$],gt)=>{S?k.setFromEuler(U.set(($-.5)*.5,G,($-.5)*.4)):k.setFromAxisAngle(P,G),D.compose(A.set(V,q,j),k,R.set(at,at*(S?.75+$*.45:.9+$*.3),at)),I.setMatrixAt(gt,D),S?N.copy($>.5?kg:Od).multiplyScalar(1.15+$*.3):N.setHSL(.2+($-.5)*.12,.45,.62+$*.2).lerp(this._white,.55),I.setColorAt(gt,N)}),I.castShadow=n<=64,I.receiveShadow=S&&n<=128,S||(I.customDepthMaterial=this.treeDepth),I.layers.set(3),M.push(I)};if(b(v,this.geos.pine,this.treeMat),b(m,this.geos.broad,this.treeMat),p.length){let w=this.rockGeos.map(()=>[]);p.forEach(C=>w[Math.floor(C[5]*(w.length-.001))].push(C)),w.forEach((C,E)=>b(C,this.rockGeos[E],this.rockMat,!0))}return M}_dispose(t){this.group.remove(t),t.traverse(e=>{e.isInstancedMesh?e.dispose():e.isMesh&&e.geometry.dispose()})}reset(){dT();for(let t of this.tiles.values())this._dispose(t);this.tiles.clear(),this.queue.length=0,this.queued.clear()}update(t,e=6){let n=new Map,i=Math.round(t.x/1024)*1024-Ud/2,s=Math.round(t.z/1024)*1024-Ud/2,a=(o,c,l)=>{let h=Math.min(Math.max(t.x,o),o+l),f=Math.min(Math.max(t.z,c),c+l),u=Math.hypot(t.x-h,t.z-f);if(l>fT&&u<l*this.view){let d=l/2;a(o,c,d),a(o+d,c,d),a(o,c+d,d),a(o+d,c+d,d)}else n.set(l+"|"+o+"|"+c,[o,c,l,u])};a(i,s,Ud);for(let[o,c]of n)!this.tiles.has(o)&&!this.queued.has(o)&&(this.queue.push([o,...c]),this.queued.add(o));if(this.queue.length){this.queue.sort((c,l)=>c[3]-l[3]||c[4]-l[4]);let o=performance.now();for(;this.queue.length&&performance.now()-o<e;){let[c,l,h,f]=this.queue.shift();this.queued.delete(c),!(!n.has(c)||this.tiles.has(c))&&this.tiles.set(c,this._build(l,h,f))}}if(!this.queue.length)for(let[o,c]of this.tiles)n.has(o)||(this._dispose(c),this.tiles.delete(o))}prime(t){this.update(t,1e9)}setView(t,e){t!==this.view&&(this.view=t,this.keep=t>1?bT:Ug,this.tiles.size&&(this.reset(),e&&this.prime(e)))}apply(t){this.uCover.value=t.cover,this.mat.color.setScalar((1-.2*t.wet)*(1-.3*t.dark));let e=.2*t.cover*t.dayF;this.treeMat.emissive.setRGB(e,e*1.02,e*1.05)}};function Bd(r,t=3){let e=new ks(1,t);e.deleteAttribute("normal"),e.deleteAttribute("uv"),e=ng(e);let n=e.attributes.position,i=new T;for(let s=0;s<n.count;s++){i.fromBufferAttribute(n,s);let a=ze(i.x*1.7+r*13.1,i.z*1.7+i.y*1.3+r*7.7)*.45+ze(i.x*4.1+r,i.y*4.3-i.z*2.1)*.18;i.multiplyScalar(.72+a),i.y=Math.max(i.y,-.25),n.setXYZ(s,i.x,i.y,i.z)}return e.computeVertexNormals(),e}var Gd=`
  uniform float uExposure;
  vec3 dispToLin(vec3 d) {
    vec3 x = clamp(mix(pow((d + 0.055) / 1.055, vec3(2.4)), d / 12.92, step(d, vec3(0.04045))), 0.0, 0.985);
    vec3 A = 1.0 - 0.983729 * x, B = 0.0245786 - 0.432951 * x, C = -(0.000090537 + 0.238081 * x);
    return (-B + sqrt(B * B - 4.0 * A * C)) / (2.0 * A) * 0.6 / uExposure;
  }`;function Og(r,t=1){let e=new Float32Array(r*t*3);for(let n=0;n<r;n++){let i=Math.random(),s=Math.random(),a=Math.random();for(let o=0;o<t;o++)e.set([i,s,a],(n*t+o)*3)}return e}var yT=`
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
  }`,_T=`
  uniform float uOpacity, uLight; uniform vec3 uColor; varying float vA;
  ${Gd}
  void main() {
    float r = length(gl_PointCoord - 0.5) * 2.0;
    float a = smoothstep(1.0, 0.25, r);
    gl_FragColor = vec4(dispToLin(uColor * uLight), a * uOpacity * vA);
  }`,Kl=class{constructor(t){this.time=0;let e=new T(40,26,40),n=()=>({uTime:{value:0},uCam:{value:new T},uBox:{value:e.clone()},uOpacity:{value:0},uLight:{value:1},uExposure:{value:.6}}),i=14e3,s=new Rt;s.setAttribute("position",new At(new Float32Array(i*2*3),3)),s.setAttribute("seed",new At(Og(i,2),3));let a=new Float32Array(i*2);for(let c=0;c<i;c++)a[c*2+1]=1;s.setAttribute("tail",new At(a,1)),this.rain=new Vi(s,new we({uniforms:{...n(),uSpeed:{value:24},uLen:{value:1.1},uWind:{value:new ht(2,1)},uCarInv:{value:new wt},uCarHalf:{value:new T}},transparent:!0,depthWrite:!1,vertexShader:`
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
        ${Gd}
        void main() {
          vec3 local = (uCarInv * vec4(vWorld, 1.0)).xyz - vec3(0.0, uCarHalf.y, 0.0);
          if (all(lessThan(abs(local), uCarHalf))) discard;
          gl_FragColor = vec4(dispToLin(vec3(0.78, 0.84, 0.92) * uLight), uOpacity * vA);
        }`})),this.rain.frustumCulled=!1,this.rain.layers.set(3),this.rain.renderOrder=10,this.rain.visible=!1,t.add(this.rain);let o=(c,l,h)=>{let f=new Rt;f.setAttribute("position",new At(new Float32Array(c*3),3)),f.setAttribute("seed",new At(Og(c),3));let u=new on(f,new we({uniforms:{...n(),uScale:{value:400},uColor:{value:new it(...h)},...l},transparent:!0,depthWrite:!1,vertexShader:yT,fragmentShader:_T}));return u.frustumCulled=!1,u.layers.set(3),u.renderOrder=10,u.visible=!1,t.add(u),u};this.snow=o(1e4,{uSize:{value:.09},uFall:{value:1.6},uSway:{value:.9},uDrift:{value:new ht}},[.96,.98,1]),this.drift=o(2600,{uSize:{value:.05},uFall:{value:.12},uSway:{value:.25},uDrift:{value:new ht}},[.95,.9,.78])}setCar(t,e){t.updateWorldMatrix(!0,!1);let n=this.rain.material.uniforms;n.uCarInv.value.copy(t.matrixWorld).invert(),n.uCarHalf.value.set(e.width/2,e.height/2,e.length/2)}update(t,e,n,i){this.time+=t;let s=n.windDir.clone().multiplyScalar(1.5+n.wind*11);for(let l of[this.rain,this.snow,this.drift]){let h=l.material.uniforms;h.uTime.value=this.time,h.uCam.value.copy(e),h.uLight.value=n.light,h.uExposure.value=n.exposure||.6}let a=this.rain.material.uniforms;a.uOpacity.value=.55*n.rain*(1+.25*n.dark),a.uWind.value.copy(s),this.rain.visible=n.rain>.02;let o=this.snow.material.uniforms;o.uOpacity.value=.95*n.snow,o.uScale.value=i*.5,o.uDrift.value.copy(s).multiplyScalar(.35),this.snow.visible=n.snow>.02;let c=this.drift.material.uniforms;c.uOpacity.value=.8*n.drift,c.uScale.value=i*.5,c.uDrift.value.copy(s).multiplyScalar(.9),this.drift.visible=n.drift>.02}};var Vd=Math.PI/180,Qn=(r,t,e)=>Math.min(e,Math.max(t,r)),ci=(r,t,e)=>{let n=Qn((e-r)/(t-r),0,1);return n*n*(3-2*n)},Bg={clear:{fog:42e-5,overcast:0,clouds:.52,sun:1,rain:0,snow:0,wet:0,cover:0,wind:.3,dark:0,tint:"#b9d6ee"},cloudy:{fog:9e-4,overcast:.75,clouds:.86,sun:.3,rain:0,snow:0,wet:0,cover:0,wind:.38,dark:.12,tint:"#a6b1bb"},windy:{fog:6e-4,overcast:.2,clouds:.62,sun:.85,rain:0,snow:0,wet:0,cover:0,wind:.95,dark:0,tint:"#b4c6d8"},rain:{fog:.0016,overcast:1,clouds:1,sun:.1,rain:.85,snow:0,wet:1,cover:0,wind:.5,dark:.35,tint:"#7a858f"},storm:{fog:.0027,overcast:1,clouds:1,sun:.03,rain:1,snow:0,wet:1,cover:0,wind:1,dark:1,tint:"#3f4852"},snow:{fog:.0019,overcast:.85,clouds:1,sun:.35,rain:0,snow:1,wet:0,cover:1,wind:.32,dark:.1,tint:"#d3dbe2"},fog:{fog:.0066,overcast:.55,clouds:.5,sun:.3,rain:0,snow:0,wet:.2,cover:0,wind:.08,dark:.05,tint:"#c4c9cd"}},MT=1.5,ET=["fog","overcast","clouds","sun","rain","snow","wet","cover","wind","dark"],wT=[[-18,"#040a1a","#08142c","#122244","#122244","#000000"],[-9,"#06102e","#0e1d47","#1f2d5a","#363562","#24182c"],[-4,"#122052","#2a3c79","#67588d","#d06e7a","#a24a40"],[0,"#1d3d80","#4868ab","#e3987c","#ff8a48","#ff7030"],[4,"#2453a0","#6286c4","#f0bd92","#ffb36c","#ff9a52"],[10,"#2a64b4","#719fd9","#f1d9bd","#ffd59c","#ffcf88"],[22,"#2468c8","#5b9be3","#c6def3","#e1edf5","#fff1d6"],[50,"#1e5fc4","#4f92e0","#b4d4f2","#d2e5f3","#fff7e6"]].map(([r,...t])=>[r,...t.map(e=>new it(e))]),Gg=2.15;function qg(r,t,e){let n=t/.6,i=r.r*n,s=r.g*n,a=r.b*n,o=.59719*i+.35458*s+.04823*a,c=.076*i+.90834*s+.01566*a,l=.0284*i+.13383*s+.83777*a,h=v=>(v*(v+.0245786)-90537e-9)/(v*(.983729*v+.432951)+.238081),f=h(o),u=h(c),d=h(l),g=v=>(v=Math.min(1,Math.max(0,v)),v<=.0031308?12.92*v:1.055*Math.pow(v,1/2.4)-.055);return e.setRGB(g(1.60475*f-.53108*u-.07367*d),g(-.10208*f+1.10813*u-.00605*d),g(-.00327*f-.07276*u+1.07602*d))}var Yl=new it;function TT(r,t,e){let n=a=>(a=Math.min(.985,Math.max(0,a)),a<=.04045?a/12.92:Math.pow((a+.055)/1.055,2.4)),i=a=>{let o=1-.983729*a,c=.0245786-.432951*a,l=-(90537e-9+.238081*a);return(-c+Math.sqrt(c*c-4*o*l))/(2*o)*.6/t},s=[n(r.r),n(r.g),n(r.b)];e.setRGB(i(s[0]),i(s[1]),i(s[2]));for(let a=0;a<4;a++){qg(e,t,Yl);let o=[n(Yl.r),n(Yl.g),n(Yl.b)];e.setRGB(e.r*s[0]/Math.max(o[0],1e-5),e.g*s[1]/Math.max(o[1],1e-5),e.b*s[2]/Math.max(o[2],1e-5))}return e}var ST=`
  varying vec3 vDir;
  void main() { vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,AT=`
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
  }`,RT=new it("#fff3df"),CT=new it("#ff9a50"),Vg=new it("#9ab6ff"),PT=new it(1.7,1.78,1.95),LT=Math.PI-1,IT=Math.PI-1.15,Wg={exposure:1,skyBrightness:1,directLight:1,ambientLight:1,sunGlow:1,sunDisc:1,cloudBrightness:1,rays:1,autoSpeed:.06,sunAzimuth:LT,moonAzimuth:IT},DT=`
  varying vec3 vDir;
  void main() { vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,FT=`
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
  }`,Jl=class{constructor(t,e,n){this.renderer=t,this.scene=e,this.camera=n,this.hour=17.55,this.auto=!1,this.tween=null,this.weather="clear",this.weatherProfiles=Object.fromEntries(Object.entries(Bg).map(([o,c])=>[o,{...c}])),this.w={...this.weatherProfiles.clear},this.tint=new it(this.weatherProfiles.clear.tint),this.target=this.weatherProfiles.clear,this.tune={...Wg},this.windDir=new ht(.78,.62).normalize(),this._fogDisp=new it,this.veil={uVeilCol:{value:new it},uVeil:{value:new ht(0,.2)}},this.mistCover=.35,this.mistDens=.2,this.skyMat=new we({uniforms:{...this.veil,uZenith:{value:new it},uMid:{value:new it},uHorizon:{value:new it},uBand:{value:new it},uSunCol:{value:new it},uSunDir:{value:new T(0,1,0)},uGlow:{value:1},uDisc:{value:1},uBandAmt:{value:1},uScale:{value:1},uGround:{value:new fe(0,0,0,0)},uMoonDir:{value:new T(0,1,0)},uMoonCol:{value:new it(PT)},uMoon:{value:0}},vertexShader:ST,fragmentShader:AT,side:Tn,depthWrite:!1,fog:!1}),this.sky=new Gt(new Pi(2400,48,24),this.skyMat),this.sky.renderOrder=-10,this.sky.frustumCulled=!1,e.add(this.sky),this.skyC={zen:new it,mid:new it,hor:new it,band:new it,sun:new it},this.envScene=new ds,this.envScene.add(new Gt(new Pi(900,32,16),this.skyMat)),this.pmrem=new ga(t),this.envRT=null,this.envTimer=0,this.envKey="";let i=new Float32Array(1800*3);for(let o=0;o<1800;o++){let c=new T().randomDirection();c.y=Math.abs(c.y)*.9+.1,c.normalize().multiplyScalar(3200),i.set([c.x,c.y,c.z],o*3)}let s=new Rt;s.setAttribute("position",new At(i,3)),this.stars=new on(s,new Ci({color:14674175,size:2.1,sizeAttenuation:!1,transparent:!0,opacity:0,depthWrite:!1,fog:!1})),this.stars.renderOrder=1,this.stars.frustumCulled=!1,e.add(this.stars),this.cloudMat=new we({uniforms:{...this.veil,uTime:{value:0},uCover:{value:.4},uFlash:{value:0},uSoft:{value:0},uDrift:{value:new ht},uSunDir:{value:new T(0,1,0)},uLit:{value:new it},uShade:{value:new it},uFlashCol:{value:new it(1.5,1.7,2.4)}},vertexShader:DT,fragmentShader:FT,side:Tn,transparent:!0,depthWrite:!1,fog:!1}),this.dome=new Gt(new Pi(2300,32,16),this.cloudMat),this.dome.renderOrder=3,this.dome.frustumCulled=!1,e.add(this.dome),this.cloudTime=0,this.haze=new Gt(new qe(1800,1800,1,48,1,!0),new we({uniforms:{uColor:{value:new it}},side:Me,transparent:!0,depthWrite:!1,fog:!1,vertexShader:"varying float vT; void main(){ vT = position.y + 0.5; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:"uniform vec3 uColor; varying float vT; void main(){ float a = 1.0 - vT; gl_FragColor = vec4(uColor, a * a); }"})),this.haze.renderOrder=5,this.haze.frustumCulled=!1,e.add(this.haze),this.boltGeo=new Rt,this.boltGeo.setAttribute("position",new At(new Float32Array(480),3)),this.boltGeo.setDrawRange(0,0),this.bolt=new Vi(this.boltGeo,new ps({color:14083327,transparent:!0,opacity:0,blending:Ze,depthWrite:!1,fog:!1})),this.bolt.renderOrder=6,this.bolt.frustumCulled=!1,e.add(this.bolt),this.flashT=-1,this.nextStrike=2,this.flash=0,this.onThunder=null,this.sun=new Ea(16777215,1),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048);let a=this.sun.shadow.camera;a.left=-38,a.right=38,a.top=38,a.bottom=-38,a.near=1,a.far=260,this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=.04,a.layers.enable(3),e.add(this.sun,this.sun.target),this.hemi=new ml(12572927,4214832,.4),e.add(this.hemi),e.fog=new sl(12179182,6e-4),this.precip=new Kl(e),this.state={night:0,lamps:0,dayF:1,warm:0,light:1,rain:0,snow:0,wet:0,cover:0,overcast:0,wind:.3,dark:0,drift:0,flash:0,windDir:this.windDir,fogColor:new it,mistColor:new it,sunDir:new T,elevation:0,moonDir:new T,lightDir:new T,moon:0,rays:0,rayDir:new T,rayCol:new it},this._c=new it,this._c2=new it,this._lit=new it,this._shade=new it,this._v=new T}snapWeather(t){this.setWeather(t),Object.assign(this.w,this.target),this.tint.set(this.target.tint)}setWeather(t){this.weather=t,this.target=this.weatherProfiles[t],t==="storm"&&(this.nextStrike=Math.min(this.nextStrike,1.2))}resetWeather(t){Object.assign(this.weatherProfiles[t],Bg[t]),this.weather===t&&this.setWeather(t)}resetTune(){Object.assign(this.tune,Wg),this.envKey=""}setTime(t){if(t==null){this.auto=!0,this.tween=null;return}this.auto=!1,this.tween=t}get clock(){let t=Math.floor(this.hour),e=Math.floor((this.hour-t)*60);return String(t).padStart(2,"0")+":"+String(e).padStart(2,"0")}_strike(t){let e=Math.random()*Math.PI*2,n=800+Math.random()*900,i=new T(t.x+Math.cos(e)*n,0,t.z+Math.sin(e)*n),s=new T(i.x+(Math.random()-.5)*240,650+Math.random()*200,i.z+(Math.random()-.5)*240),a=this.boltGeo.attributes.position,o=0,c=(l,h,f,u)=>{let d=l.clone();for(let g=1;g<=f;g++){let v=g/f,m=l.clone().lerp(h,v);g<f&&m.add(new T((Math.random()-.5)*u,0,(Math.random()-.5)*u)),a.setXYZ(o++,d.x,d.y,d.z),a.setXYZ(o++,m.x,m.y,m.z),d=m}return d};c(s,i,16,110);for(let l=0;l<3;l++){let h=.25+Math.random()*.5,f=s.clone().lerp(i,h),u=f.clone().add(new T((Math.random()-.5)*380,-(120+Math.random()*260),(Math.random()-.5)*380));c(f,u,5,60)}a.needsUpdate=!0,this.boltGeo.setDrawRange(0,o),this.flashT=0,this.onThunder&&this.onThunder(Qn(n/340,.7,4.2),Qn(1.3-n/1800,.35,1))}update(t,e){let n=this.camera.position;if(this.auto)this.hour=(this.hour+t*this.tune.autoSpeed)%24;else if(this.tween!=null){let pt=(this.tween-this.hour+36)%24-12,St=5*t;Math.abs(pt)<=St?(this.hour=this.tween,this.tween=null):this.hour=(this.hour+Math.sign(pt)*St+24)%24}let i=1-Math.exp(-t*1.4);for(let pt of ET)pt!=="wet"&&(this.w[pt]+=(this.target[pt]-this.w[pt])*i);let s=this.target.wet-this.w.wet;this.w.wet+=Math.sign(s)*Math.min(Math.abs(s),t/MT),this.tint.lerp(this._c.set(this.target.tint),i);let a=this.w,o=a.overcast,c=a.dark;if(this.weather==="storm"&&a.dark>.5&&(this.nextStrike-=t,this.nextStrike<=0&&(this._strike(n),this.nextStrike=3.5+Math.random()*7)),this.flashT>=0){this.flashT+=t;let pt=this.flashT;this.flash=Qn(Math.exp(-pt*11)+.75*(pt>.17?Math.exp(-(pt-.17)*8):0),0,1),pt>1.6&&(this.flashT=-1,this.flash=0,this.boltGeo.setDrawRange(0,0))}let l=this.flash;this.bolt.material.opacity=this.flashT>=0&&this.flashT<.5?l:0,this.bolt.visible=this.bolt.material.opacity>.02;let h=65*Math.sin((this.hour-6)/24*Math.PI*2),f=this.state.sunDir;f.setFromSphericalCoords(1,Math.PI/2-h*Vd,this.tune.sunAzimuth);let u=ci(-4,14,h),d=1-ci(-12,0,h),g=Math.exp(-Math.pow((h-3)/10,2)),v=this.state.moonDir;v.setFromSphericalCoords(1,Math.PI/2-(3+9*ci(-3,-30,h))*Vd,this.tune.moonAzimuth);let m=this._v.setFromSphericalCoords(1,Math.PI/2-38*Vd,this.tune.moonAzimuth),p=ci(-2,-11,h),x=wT,y=0;for(;y<x.length-2&&h>x[y+1][0];)y++;let _=x[y],M=x[y+1],b=Qn((h-_[0])/(M[0]-_[0]),0,1),w=this.skyC;["zen","mid","hor","band","sun"].forEach((pt,St)=>w[pt].copy(_[St+1]).lerp(M[St+1],b));let C=.07+.93*u,E=Qn(o*.92+c*.08,0,1),S=this._c.copy(this.tint).multiplyScalar(C).lerp(this._c2.set("#c9997f").multiplyScalar(C),g*.35*(1-c));w.zen.lerp(this._lit.copy(S).multiplyScalar(.8),E),w.mid.lerp(this._lit.copy(S).multiplyScalar(.92),E),w.hor.lerp(S,E),w.band.lerp(S,E);let I=Gg*this.tune.skyBrightness*(1-.6*c);for(let pt of["zen","mid","hor","band"])w[pt].multiplyScalar(I).add(this._c2.setRGB(.55,.65,1).multiplyScalar(l*1.6));let D=this.skyMat.uniforms;D.uZenith.value.copy(w.zen),D.uMid.value.copy(w.mid),D.uHorizon.value.copy(w.hor),D.uBand.value.copy(w.band),D.uSunCol.value.copy(w.sun).multiplyScalar(Gg*this.tune.skyBrightness),D.uSunDir.value.copy(f),D.uGlow.value=(1-o*.95)*ci(-6,1,h)*(1-c)*this.tune.sunGlow,D.uDisc.value=(1-o)*ci(-1.5,.5,h)*22*this.tune.sunDisc,D.uBandAmt.value=(1-o*.85)*(.25+.75*g)*ci(-11,-2,h),D.uMoonDir.value.copy(v),D.uMoon.value=p*Qn(1-o*1.05,0,1)*(1-c);let k=ci(3,22,h)*Qn((a.sun-.3)/.7,0,1)*(1-c);this.state.sunK=k,this.renderer.toneMappingExposure=(.5+.12*g)*(1-.5*c)*(1+.3*d)*(1-.3*k)*this.tune.exposure;let R=this.renderer.toneMappingExposure;this.state.exposure=R,this.state.fogColor.copy(this._lit.copy(w.hor).lerp(w.band,.2*D.uBandAmt.value));let A=qg(this.state.fogColor,R,this._fogDisp);this.scene.fog.color.copy(this.state.fogColor),this.scene.fog.density=a.fog,this._c2.copy(A).lerp(this._c.setRGB(.93,.95,.97).multiplyScalar(.1+.9*u*(1-.6*c)),.3),TT(this._c2,R,this.state.mistColor);{let pt=ci(0,.6,this.mistDens)*(.35+.65*this.mistCover),St=ci(.0012,.0075,a.fog)*.85,Vt=this.veil;Vt.uVeil.value.set(Math.max(pt,St),Math.max(.05+.5*Math.pow(this.mistCover,1.5),St>pt?.3:0)),Vt.uVeilCol.value.copy(this.state.mistColor)}let P=h<-2.5,N=this.state.lightDir.copy(P?m:f);P?(this.sun.intensity=.38*p*(1-.8*o)*(1-c)*this.tune.directLight,this.sun.color.copy(Vg)):(this.sun.intensity=3.4*ci(-2,9,h)*a.sun*(1+1.3*k)*this.tune.directLight,this.sun.color.copy(RT).lerp(CT,Qn(g*1.3,0,1))),e&&(this.sun.position.copy(e).addScaledVector(N,120),this.sun.target.position.copy(e)),this.hemi.color.copy(A).lerp(this._c.set("#6f8cd0"),d*.75).lerp(this._c.set("#c4d4ff"),l),this.hemi.groundColor.set("#3a4630").multiplyScalar(.25+.75*u),this.hemi.intensity=((.16+.45*u+.34*d)*(1-.4*o)*(1-.35*c)*(1-.45*k)+l*3.2)*this.tune.ambientLight,this.sky.position.copy(n),this.stars.position.copy(n),this.dome.position.copy(n),this.haze.position.set(n.x,0,n.z);let U=150+a.fog*1e5;this.haze.scale.y=U,this.haze.position.y=U/2-60,this.haze.material.uniforms.uColor.value.copy(this.state.fogColor),this.stars.material.opacity=d*(1-o*.95),this.stars.visible=this.stars.material.opacity>.01;let V=Qn(g*1.1,0,1)*(1-.92*c),q=this._lit.set("#ffffff").lerp(this._c2.set("#ff9d66"),V).multiplyScalar(2.4*u*this.tune.cloudBrightness);q.add(this._c2.set("#8fa6e0").multiplyScalar(.32*d*(1-o*.6)));let j=this._shade.copy(w.mid).multiplyScalar(.5).lerp(this._c2.copy(w.hor).multiplyScalar(.62),.45).lerp(this._c2.set("#a86a7a").multiplyScalar(1.05*u),V*.5);j.add(this._c2.set("#101b38").multiplyScalar(.3*d)),q.multiplyScalar(1-.8*c),this.cloudTime+=t;let at=this.cloudMat.uniforms;at.uTime.value=this.cloudTime,at.uCover.value=a.clouds,at.uSoft.value=Qn(o*.9+c*.3,0,1),at.uFlash.value=l,at.uDrift.value.copy(this.windDir).multiplyScalar(.003+.02*a.wind),at.uSunDir.value.copy(h>=-2?f:v),at.uLit.value.copy(q),at.uShade.value.copy(j);let G=this.state;G.elevation=h,G.dayF=u,G.night=d,G.warm=g,G.overcast=o,G.rain=a.rain,G.snow=a.snow,G.wet=a.wet,G.cover=a.cover,G.wind=a.wind,G.dark=c,G.flash=l,G.drift=Qn((a.wind-.5)*2.2,0,1)*(1-a.rain)*(1-a.snow);let $=Qn(a.rain*.35+a.snow*.25+(a.fog>.003?.3:0),0,.5);G.lamps=Qn(Math.max(d,.7*(1-u))+$*u+c*.7,0,1),G.moon=D.uMoon.value;let gt=ci(5e-4,.0065,a.fog);if(G.rays=(P?.22*D.uMoon.value*(1+gt):ci(-2.5,2.5,h)*(1-.55*o)*(1-c)*(.55+.45*g)*(1+1.3*gt))*this.tune.rays,G.rayDir.copy(P?v:f),G.rayCol.copy(P?Vg:this.sun.color),G.light=.14+.08*d+.86*u*(1-.3*o)*(1-.55*c)+l*.6,this.precip.update(t,n,G,this.renderer.domElement.height),this.envTimer-=t,this.envTimer<=0){let pt=[h.toFixed(1),Math.round(o*12),Math.round(c*12),Math.round(k*10)].join("|");(pt!==this.envKey||!this.envRT)&&(this.envKey=pt,this._captureEnv()),this.envTimer=.7}}setShadowSize(t){let e=this.sun.shadow;e.mapSize.x!==t&&(e.mapSize.set(t,t),e.map&&(e.map.dispose(),e.map=null))}_captureEnv(){let t=this.skyMat.uniforms,e=t.uDisc.value;t.uScale.value=2.1*(1-.5*(this.state.sunK||0)),t.uDisc.value=Math.min(e,4);let n=this.pmrem.fromScene(this.envScene,0,1,3e3);t.uScale.value=1,t.uGround.value.set(t.uHorizon.value.r*.13,t.uHorizon.value.g*.13,t.uHorizon.value.b*.12,1);let i=this.pmrem.fromScene(this.envScene,0,1,3e3);t.uGround.value.w=0,t.uDisc.value=e,this.envRT&&this.envRT.dispose(),this.carEnvRT&&this.carEnvRT.dispose(),this.envRT=n,this.carEnvRT=i,this.scene.environment=n.texture,this.onCarEnv&&this.onCarEnv(i.texture)}};var _s={name:"body",type:"MeshPhysicalMaterial",color:5526623,roughness:.364192,metalness:1,clearcoat:1,clearcoatRoughness:0,specularIntensity:1,specularColor:16777215,reflectivity:.49999999999999983,iridescence:0,iridescenceIOR:1.3,iridescenceThicknessRange:[100,400],envMapIntensity:1};var NT={drop:.19,forward:.16,hip:[-.39,.45,.28],foot:[-.48,.45,-.48],recline:.1},kT={color:789518,metalness:0,roughness:.3,envK:.6},Xg=[{id:"mustang",name:"Mustang '67 Đen",file:"assets/models/mustang.glb",length:4.67,flip:!0,eye:[-.39,1.08,.3],doubleSide:!0,door:/^DriverDoor/,wheels:/^(Wheel|BrakeDisc)/,mats:{Interior:kT,BlackPolished:{roughness:.18},Paint:{color:1381913,metalness:0,roughness:.42,specularIntensity:0,clearcoat:1,clearcoatRoughness:.07,envK:.4},Wheel:{clearcoat:.25}},seatMesh:/^Cube\.?00[678]/,steerShift:-.09,lamps:{head:[.839,.661,-2.06],tail:[.44,.769,2.26]},seat:NT,steer:{c:[-.385,.883,-.155],n:[0,.338,.941],r:.153,grip:{radial:.025,depth:.065,align:!0}},steerMesh:/^(Torus\.?001|Cube\.?009)/},{id:"mazda-rx-vision",name:"Mazda RX Vision Sport",file:"assets/models/mazda-rx-vision.glb",length:4.8,flip:!0,wheels:/^WHEEL_(LF|LR|RF|RR)_/,eye:[.394,1.09,.45],seat:{hip:[.394,.34,.48],foot:[.49,.26,-.58],recline:.1},steer:{c:[.394,.795,.082],n:[0,.156,.9878],r:.18},steerMesh:/^MazdaSteering_/,lamps:{head:[.74,.57,-1.99],tail:[.7,.838,2.086]},mats:{body:{color:_s.color,metalness:_s.metalness,roughness:_s.roughness,clearcoat:_s.clearcoat,clearcoatRoughness:_s.clearcoatRoughness,specularIntensity:_s.specularIntensity,specularColor:_s.specularColor,envK:_s.envMapIntensity}}}],$n=[{id:"reed",name:"Đồng cỏ lau",icon:"🌾"},{id:"forest",name:"Đồi thông",icon:"🌲"},{id:"mountain",name:"Đường núi",icon:"⛰️"},{id:"meadow",name:"Đồi cỏ",icon:"🌿"},{id:"sea",name:"Biển",icon:"🌊"},{id:"city",name:"Phố",icon:"🏙️"}],cn=[{id:"clear",name:"Trời trong",icon:"☀️"},{id:"cloudy",name:"Nhiều mây",icon:"☁️"},{id:"windy",name:"Gió lớn",icon:"💨"},{id:"rain",name:"Mưa",icon:"🌧️"},{id:"storm",name:"Bão",icon:"⛈️"},{id:"snow",name:"Tuyết",icon:"❄️"},{id:"fog",name:"Sương mù",icon:"🌫️"},{id:"auto",name:"Tự động",icon:"🔄"}],Mn=[{id:"sunrise",name:"Bình minh",icon:"🌅",hour:6.4},{id:"noon",name:"Ban ngày",icon:"🌤️",hour:12.5},{id:"sunset",name:"Hoàng hôn",icon:"🌇",hour:17.6},{id:"night",name:"Ban đêm",icon:"🌙",hour:22.5},{id:"auto",name:"Tự động",icon:"🕒",hour:null}],Ne=[{id:"chase",name:"Sau xe"},{id:"low",name:"Sát mặt đường"},{id:"side",name:"Bên hông"},{id:"cockpit",name:"Trong xe"},{id:"orbit",name:"Quay quanh"},{id:"drone",name:"Từ trên cao"}],Oo=[{id:"all",name:"Music + fx",icon:"🎵"},{id:"music",name:"Chỉ nhạc",icon:"🎶"},{id:"off",name:"Tắt tiếng",icon:"🔇"}],Ki=[1.4,1.8,2,2.8,3.5,4,5.6,8,11,16],jg=Ki.indexOf(3.5),Di=[{id:"low",name:"Low",ratio:.75,msaa:0,veg:.35,shadow:1024,refl:!1,dof:0,trees:0,view:1},{id:"good",name:"Good",ratio:1.5,msaa:4,veg:.85,shadow:2048,refl:!0,dof:36,trees:35,view:1},{id:"ultra",name:"Ultra",ratio:2,msaa:4,veg:1,shadow:4096,refl:!0,dof:48,trees:200,view:2}],Wd=Di.findIndex(r=>r.id==="good");var qd=512,yi=288,Ql=[.23*.85,.13*.85],Bo=Ql,Kg=.014*.85;function Yg(r,t){let[e,n,i]=t.eye,s=new xl(new T(0,n,i),new T(0,-.42,-1).normalize(),.05,2.5);r.updateMatrixWorld(!0);let a=s.intersectObject(r,!0).find(l=>!(l.object.material&&l.object.material.transparent)),o=a?a.point.clone():new T(0,n-.3,i-.7);o.y+=Bo[1]/2+.03,o.z+=.07;let c=new Xt().setFromAxisAngle(new T(1,0,0),-.22);return{pos:o,quat:c}}var Zl=class{constructor(){this.canvas=document.createElement("canvas"),this.canvas.width=qd,this.canvas.height=yi,this.ctx=this.canvas.getContext("2d"),this.tex=new zn(this.canvas),this.tex.colorSpace=de,this.tex.anisotropy=4,this.group=new Dt;let t=new Gt(new ai(Bo[0],Bo[1]),new en({map:this.tex,color:new it(2.2,2.2,2.2)})),e=new Gt(new re(Bo[0]+Kg,Bo[1]+Kg,.012*.85),new Ut({color:789776,roughness:.35,metalness:.3}));e.position.z=-.0065,this.group.add(e,t),this.light=new qi(16762506,1.1,2.4,2),this.light.position.set(0,.03,.08),this.group.add(this.light),this.t=0,this.timer=0,this.speed=0,this.clock="",this._draw()}place(t){if(!t){this.group.visible=!1;return}this.group.visible=!0,this.group.position.copy(t.pos),this.group.quaternion.copy(t.quat)}update(t,e,n){this.t+=t,this.timer-=t,this.light.intensity=1.1*(.9+.1*Math.sin(this.t*.7)),!(this.timer>0)&&(this.timer=1,this.speed=e,this.clock=n,this._draw())}_draw(){let t=this.ctx,e=this.t,n=t.createLinearGradient(0,0,0,yi);n.addColorStop(0,"#1d140d"),n.addColorStop(1,"#0d0906"),t.fillStyle=n,t.fillRect(0,0,qd,yi),t.save(),t.beginPath(),t.rect(10,34,300,yi-44),t.clip(),t.fillStyle="#231810",t.fillRect(10,34,300,yi-44),t.strokeStyle="rgba(255,190,130,0.15)",t.lineWidth=2;let i=e*9%40;for(let c=-40;c<340;c+=40)t.beginPath(),t.moveTo(c+i*.3,34),t.lineTo(c-30+i*.3,yi),t.stroke();for(let c=34;c<yi+40;c+=40)t.beginPath(),t.moveTo(10,c+i),t.lineTo(310,c+i-12),t.stroke();t.strokeStyle="#ffa940",t.lineWidth=7,t.lineCap="round",t.beginPath();for(let c=0;c<=24;c++){let l=yi-10-c*11,h=160+Math.sin(c*.35+e*.15)*46;c===0?t.moveTo(h,l):t.lineTo(h,l)}t.stroke(),t.fillStyle="#ffffff",t.beginPath(),t.moveTo(160,yi-74),t.lineTo(148,yi-46),t.lineTo(160,yi-54),t.lineTo(172,yi-46),t.closePath(),t.fill(),t.restore(),t.fillStyle="#ffe4c8",t.font="600 20px system-ui, sans-serif",t.textBaseline="middle",t.fillText(this.clock||"--:--",14,18),t.textAlign="right",t.fillText(Math.round(this.speed)+" km/h",qd-14,18),t.textAlign="left";let s=326,a=t.createLinearGradient(s,44,s+70,114);a.addColorStop(0,"#ff8a5c"),a.addColorStop(1,"#7b5cff"),t.fillStyle=a,t.fillRect(s,44,70,70),t.fillStyle="#ffffff",t.font="600 19px system-ui, sans-serif",t.fillText("Lo-fi Chill",s,136),t.fillStyle="#c9a27e",t.font="16px system-ui, sans-serif",t.fillText("Chill Drive Radio",s,160);let o=e/180%1;t.fillStyle="#3d2b1d",t.fillRect(s,184,170,5),t.fillStyle="#ffa940",t.fillRect(s,184,170*o,5),t.fillStyle="#ffb760";for(let c=0;c<12;c++){let l=8+26*Math.abs(Math.sin(e*2.3+c*1.7)*Math.sin(e*.9+c));t.fillRect(s+c*14,250-l,8,l)}this.tex.needsUpdate=!0}};var $l=(r,t,e)=>Math.min(e,Math.max(t,r));function UT(r){let t=Oe.smoothstep(r.speed,.2,2),e=Math.atan((r.curvature||0)*2.7)*14*t,n=-Math.atan2(r.latVel||0,Math.max(r.speed,4))*3;return $l(e+n,-.55,.55)}var th=class{constructor(t){this.root=new Dt,this.tilt=new Dt,this.root.add(this.tilt),t.add(this.root),this.loader=new Ys,this.loader.setMeshoptDecoder(Na),this.onProgress=null,this.prepare=null,this.envMap=null,this.list=[],this.cache=new Map,this.current=null,this.token=0,this.time=0,this.pitch=0,this.roll=0,this.lastSpeed=0,this.dim={length:4.5,width:1.9,height:1.3},this.lights=new Dt,this.root.add(this.lights);let e=this.softTex=Sl(),n=i=>{let s=new Un(new Rn({map:e,color:i,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:Ze,fog:!1}));return s.renderOrder=6,this.lights.add(s),s};this.headlights=_r(this.lights,e),this.spots=this.headlights.spots,this.headGlow=this.headlights.glows,this.tailGlow=[n(16720914),n(16720914)],this.viewer=null,this._gv=new T,this._gb=new T,this.lampLevel=0,this.brake=0,this.contact=new Gt(new ai(1,1).rotateX(-Math.PI/2),new en({alphaMap:zT(),color:0,transparent:!0,opacity:.72,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-6,fog:!1})),this.contact.position.y=.06,this.contact.renderOrder=1,this.root.add(this.contact),this.cabin=new qi(16767148,0,2.6,2),this.tilt.add(this.cabin),this.cabinLevel=0}async probe(){let t=[];for(let e of Xg){if(!e.optional){t.push(e);continue}try{let n=await fetch(e.file,{method:"HEAD"}),i=n.headers.get("content-type")||"";n.ok&&!i.includes("text/html")&&t.push(e)}catch{}}return this.list=t,t}async select(t){let e=this.list[t],n=++this.token,i=this.cache.get(e.id);if(i||(i=await this._load(e,s=>{n===this.token&&this.onProgress?.(s)}),this.cache.set(e.id,i)),n!==this.token)return!1;if(this.prepare&&!i.ready){try{await this.prepare(i.group)}catch(s){console.warn("prepare",s)}if(i.ready=!0,n!==this.token)return!1}return this.current&&this.tilt.remove(this.current.group),this.tilt.add(i.group),this.current=i,this.dim=i.dim,this.shield=i.shield,this.rearShield=i.rearShield,this._placeLights(i.dim),!0}async _load(t,e){let i=(await this.loader.loadAsync(t.file,M=>{e&&M.total&&e(M.loaded/M.total)})).scene,s=new Dt;s.add(i);let a=new Dt;if(a.add(s),t.hide){let M=[];i.traverse(b=>{t.hide.test(b.name||"")&&M.push(b)}),M.forEach(b=>b.removeFromParent())}i.rotation.x=t.rotX||0,s.updateMatrixWorld(!0);let o=new Qe().setFromObject(s,!0),c=o.getSize(new T);c.x>c.z*1.02&&(i.rotation.y+=Math.PI/2),t.flip&&(i.rotation.y+=Math.PI),s.updateMatrixWorld(!0),o.setFromObject(s,!0),c=o.getSize(new T),s.scale.setScalar(t.length/c.z),s.updateMatrixWorld(!0),o.setFromObject(s,!0);let l=o.getCenter(new T);s.position.set(-l.x,-o.min.y,-l.z),a.updateMatrixWorld(!0),o.setFromObject(a,!0);let h={length:o.max.z-o.min.z,width:o.max.x-o.min.x,height:o.max.y-o.min.y};if(h.eye=t.eye||[-h.width*.2,Math.min(h.height*.8,1.15),0],h.lamps=t.lamps||Pa(h),h.seat=t.seat||null,(t.seat?.drop||t.seat?.forward)&&t.seatMesh){a.updateMatrixWorld(!0);let M=new T;i.traverse(b=>{!b.isMesh||!t.seatMesh.test(b.name)||(b.getWorldPosition(M),M.y-=t.seat.drop||0,M.z-=t.seat.forward||0,b.position.copy(b.parent.worldToLocal(M)))}),a.updateMatrixWorld(!0)}t.basicMetal&&i.traverse(M=>{if(!M.isMesh||Array.isArray(M.material))return;let b=M.material;b.transmission>0||b.transparent&&b.opacity<.9||(M.material=new Ut({name:b.name,color:b.color,map:b.map,side:b.side,...t.basicMetal}),b.dispose())});let f=[],u=[];i.traverse(M=>{if(!M.isMesh)return;t.steerMesh&&t.steerMesh.test(M.name)&&(M.material=Zg()),t.seatMesh&&t.seatMesh.test(M.name)&&(M.material=Zg(5912608,.52));let b=Array.isArray(M.material)?M.material:[M.material],w=!1;for(let C of b){if(C.transmission>0&&(C.transmission=0,C.transparent=!0,C.opacity=.32,C.depthWrite=!1,w=!0),C.transparent&&C.opacity<.9&&(w=!0),w&&!C.userData.glass&&BT(C),t.doubleSide&&!C.transparent&&(C.side=Me),t.mats&&t.mats[C.name])for(let[E,S]of Object.entries(t.mats[C.name]))E==="envK"?C.userData.envK=S:C[E]?.isColor?C[E].set(S):C[E]=S;/tail|brake|emissivered|rear.?light/i.test(C.name)&&C.emissive&&(C.emissive.set(16718346),f.push(C)),this._env(C),ge(C)}M.castShadow=!w,M.receiveShadow=!0,w&&u.push(M)});let d=t.wheels?this._wheels(a,t,h):[],g=t.door?this._door(a,t):null;a.updateMatrixWorld(!0);let v=Jg(u,h),m=Jg(u,h,!0),p=OT(a,i,v),x=Yg(a,h),y=t.steer;if(y&&t.steerShift){let M=new T(...y.n),b=new T,w=[];i.traverse(C=>{t.steerMesh.test(C.name)&&C.isMesh&&w.push(C)});for(let C of w)C.getWorldPosition(b).addScaledVector(M,-t.steerShift),C.parent.worldToLocal(b),C.position.copy(b);y={...y,c:new T(...y.c).addScaledVector(M,-t.steerShift).toArray()}}let _=null;if(y&&t.steerMesh){let M=[];i.traverse(b=>{b.isMesh&&t.steerMesh.test(b.name)&&M.push(b)}),_=new Dt,_.position.fromArray(y.c),a.add(_),a.updateMatrixWorld(!0);for(let b of M)_.attach(b)}return{def:t,group:a,dim:h,wheels:d,door:g,tailMats:f,wipers:p,shield:v,rearShield:m,screen:x,steer:y,steerPivot:_,anim:null}}_env(t){t.envMap=this.envMap,t.envMapIntensity=(this.envMap?1:.5)*(t.userData.envK??1)}setEnvMap(t){this.envMap=t;for(let e of this.cache.values())e.group.traverse(n=>{if(n.isMesh)for(let i of Array.isArray(n.material)?n.material:[n.material])this._env(i)})}_door(t,e){let n=[];if(t.traverse(a=>{if(!(a===t||!e.door.test(a.name||""))){for(let o=a.parent;o&&o!==t;o=o.parent)if(e.door.test(o.name||""))return;n.push(a)}}),!n.length)return null;t.updateMatrixWorld(!0);let i=new Qe;for(let a of n)i.expandByObject(a,!0);let s=new Ue;s.position.set(i.min.x+.04,0,i.min.z+.06),t.add(s),t.updateMatrixWorld(!0);for(let a of n)s.attach(a);return{pivot:s,amount:0}}setDoor(t){let e=this.current?.door;if(!e)return;e.amount=t;let n=t*t*(3-2*t);e.pivot.rotation.y=-1.05*n}frontWheel(t){let e=this.current,n=null;for(let s of e?.wheels||[])(!n||s.pivot.position.z<n.pivot.position.z)&&(n=s);let i=this.dim;return n?t.set(-i.width/2+.12,n.pivot.position.y,n.pivot.position.z):t.set(-i.width/2,.33,-i.length*.32)}_wheels(t,e,n){let i=[];t.traverse(a=>{if(!(a===t||!e.wheels.test(a.name||""))){for(let o=a.parent;o&&o!==t;o=o.parent)if(e.wheels.test(o.name||""))return;i.push(a)}});let s=[];for(let a of i){let o=new Qe().setFromObject(a,!0);if(o.isEmpty())continue;let c=o.getSize(new T),l=o.getCenter(new T);if(!(Math.abs(c.y-c.z)<.28*Math.max(c.y,c.z)&&c.z<n.length*.35&&c.y<n.height*.95&&c.y>n.height*.12&&l.y<n.height*.5))continue;let u=new Ue;u.position.set(l.x,o.max.y-c.z/2,l.z),t.add(u),t.updateMatrixWorld(!0),u.attach(a),s.push({pivot:u,radius:c.z/2})}return s}_placeLights(t){Mr(this.headlights,t);let[e,n,i]=(t.lamps||Pa(t)).tail;this.tailGlow.forEach((a,o)=>a.position.set(o?e:-e,n,i+.03)),this.contact.scale.set(t.width*1.12,1,t.length*1.06);let s=this.current?.screen;s?this.cabin.position.copy(s.pos).add(new T(0,.02,.12)):this.cabin.position.set(t.eye[0]*.5,t.eye[1]-.2,t.eye[2]-.6)}setLights(t){this.lampLevel=t}_face(t,e){return this.viewer?(t.getWorldPosition(this._gv),this._gv.subVectors(this.viewer.position,this._gv).normalize(),this._gb.set(0,0,e).transformDirection(this.root.matrixWorld),Oe.smoothstep(this._gv.dot(this._gb),-.05,.35)):1}setWiper(t){if(!(!this.current||t===this.current.wiperTh)){this.current.wiperTh=t;for(let e of this.current.wipers)e(t)}}update(t,e){this.time+=t,this.root.position.copy(e.pos),this.root.rotation.set(e.pitch||0,e.yaw,0,"YXZ");let n=(e.speed-this.lastSpeed)/Math.max(t,.001);this.brakeAcc=n,this.lastSpeed=e.speed;let i=1-Math.exp(-t*4);this.pitch+=($l(n*.004,-.04,.04)-this.pitch)*i,this.roll+=($l(-e.latVel*.012,-.05,.05)-this.roll)*i;let s=$l(e.speed/20,0,1);this.tilt.rotation.set(this.pitch,0,this.roll);let a=1-(this.calm||0);this.tilt.position.y=(.005*Math.sin(this.time*7.3)+.004*Math.sin(this.time*12.1))*s*a;let o=(e.rough||0)*s*a;if(o>.001&&(this.tilt.position.y+=o*(.014*Math.sin(this.time*19.3)+.01*Math.sin(this.time*31.7+1.1)),this.tilt.rotation.z+=o*(.006*Math.sin(this.time*13.1)+.004*Math.sin(this.time*23.9)),this.tilt.rotation.x+=o*.004*Math.sin(this.time*17.7+.4)),this.current){let u=UT(e);this.steerAngle=(this.steerAngle||0)+(u-(this.steerAngle||0))*(1-Math.exp(-t*8)),this.current.steerPivot&&this.current.steerPivot.quaternion.setFromAxisAngle(new T(...this.current.steer.n).normalize(),this.steerAngle);for(let d of this.current.wheels)d.pivot.rotation.x-=e.speed*t/d.radius}let c=this.lampLevel;xs(this.headlights,this.root,this.viewer,c);let l=this.brakeAcc||0;this.brake+=((l<-1.2?1:0)-this.brake)*(1-Math.exp(-t*8));let h=.3+.7*c+.6*this.brake,f=this._face(this.tailGlow[0],1);this.tailGlow.forEach(u=>{u.material.opacity=Math.min(.8,.45*h)*f;let d=2+1.3*h;u.scale.set(d*1.35,d*.85,1),u.visible=f>.01});for(let u of this.current?.tailMats||[])u.emissiveIntensity=.8+2.6*h;this.cabin.intensity=this.cabinLevel}};function zT(){let r=document.createElement("canvas");r.width=128,r.height=256;let t=r.getContext("2d");t.filter="blur(14px)",t.fillStyle="#fff",t.beginPath(),t.roundRect?t.roundRect(26,30,76,196,26):t.rect(26,30,76,196),t.fill(),t.filter="blur(6px)",t.globalAlpha=.5,t.fillRect(36,44,56,168);let e=new zn(r);return e.colorSpace=kn,e}function Jg(r,t,e=!1){let[n,i,s]=t.eye,a=new T(n,i,s),o=new T,c=new T,l=new T,h=new T,f=new T,u=new T,d=new T,g=[],v=0,m=e?r.filter(M=>!/light|lamp/i.test(M.name)&&/windscreen.*rear|rear.*windscreen|rear.*window|back.*glass/i.test(M.name)):[];for(let M of m.length?m:r){let b=M.geometry.attributes.position,w=M.geometry.index,C=(w?w.count:b.count)/3;for(let E=0;E<C;E++){let S=w?w.getX(E*3):E*3,I=w?w.getX(E*3+1):E*3+1,D=w?w.getX(E*3+2):E*3+2;if(o.fromBufferAttribute(b,S).applyMatrix4(M.matrixWorld),c.fromBufferAttribute(b,I).applyMatrix4(M.matrixWorld),l.fromBufferAttribute(b,D).applyMatrix4(M.matrixWorld),f.copy(o).add(c).add(l).multiplyScalar(1/3),!m.length&&((e?f.z<s+.35:f.z>s-.25)||f.y<i-.3))continue;h.subVectors(c,o).cross(l.clone().sub(o));let k=h.length()/2;k<1e-7||(h.normalize(),h.dot(a.clone().sub(f))<0&&h.negate(),!(!m.length&&(Math.abs(h.x)>.5||(e?h.z>-.25:h.z<.25||h.y>-.2)))&&(u.addScaledVector(h,k),d.addScaledVector(f,k),v+=k,g.push(o.clone(),c.clone(),l.clone())))}}if(e&&v<.1)return null;let p={rear:e,center:new T,normal:new T,right:new T,up:new T,bounds:[0,0,0,0]};if(v<.1?(p.center.set(0,i+.1,s-.62),p.normal.set(0,-.6,.8),p.bounds=[-t.width*.38,t.width*.38,-.3,.3]):(p.center.copy(d).multiplyScalar(1/v),p.normal.copy(u).normalize()),p.right.set(1,0,0).addScaledVector(p.normal,-p.normal.x).normalize(),p.up.crossVectors(p.normal,p.right),p.up.y<0&&p.up.negate(),e)return p.geometry=new Rt().setFromPoints(g),p.geometry.setAttribute("glassUV",new _t(g.flatMap(M=>{let b=M.clone().sub(p.center);return[b.dot(p.right),b.dot(p.up)]}),2)),p;if(g.length){let M=[1e9,-1e9,1e9,-1e9];for(let b of g){b.sub(p.center);let w=b.dot(p.right),C=b.dot(p.up);M[0]=Math.min(M[0],w),M[1]=Math.max(M[1],w),M[2]=Math.min(M[2],C),M[3]=Math.max(M[3],C)}p.bounds=M}let x=(p.bounds[1]-p.bounds[0])/2,y=(p.bounds[0]+p.bounds[1])/2,_=p.bounds[2]+.03;return p.wipers=[{u:y-x*.76,v:_,rest:0,sign:1,r0:x*.1,r1:x*.68},{u:y+x*.76,v:_,rest:Math.PI,sign:-1,r0:x*.1,r1:x*.68}],p.sweep=1.62,p}function OT(r,t,e){let n=[];t.traverse(a=>{/^WiperBladeArm\d*$/i.test(a.name)&&!a.isMesh&&n.push(a)});let i=[],s=e.normal;if(n.length){let a=[];for(let o of n){let c=[],l=[];if(o.children.forEach(D=>D.traverse(k=>{if(!k.isMesh)return;let R=k.geometry.attributes.position,A=D.isMesh?c:l;for(let P=0;P<R.count;P++)A.push(new T().fromBufferAttribute(R,P).applyMatrix4(k.matrixWorld))})),!c.length||!l.length)continue;let h=l.reduce((D,k)=>D.add(k),new T).multiplyScalar(1/l.length),f=c[0];for(let D of c)D.distanceToSquared(h)>f.distanceToSquared(h)&&(f=D);let u=c.filter(D=>D.distanceTo(f)<.03),d=u.reduce((D,k)=>D.add(k),new T).multiplyScalar(1/u.length),g=d.clone().sub(e.center),v=g.dot(e.right),m=g.dot(e.up),p=h.clone().sub(d),x=Math.atan2(p.dot(e.up),p.dot(e.right)),y=new ht(Math.cos(x),Math.sin(x)),_=1e9,M=0;for(let D of l){let k=D.clone().sub(d),R=k.dot(e.right)*y.x+k.dot(e.up)*y.y;_=Math.min(_,R),M=Math.max(M,R)}let b=Math.cos(x)>=0?1:-1;o.updateMatrixWorld(!0);let w=o.matrixWorld.clone(),C=o.parent.matrixWorld.clone().invert();o.matrixAutoUpdate=!1;let E=new wt,S=new wt,I=new wt().makeTranslation(-d.x,-d.y,-d.z);E.makeTranslation(d.x,d.y,d.z),i.push(D=>{S.makeRotationAxis(s,b*D),o.matrix.copy(C).multiply(E).multiply(S).multiply(I).multiply(w),o.matrixWorldNeedsUpdate=!0}),a.push({u:v,v:m,rest:x,sign:b,r0:Math.max(0,_),r1:M})}if(a.length){for(a.sort((o,c)=>o.u-c.u);a.length<2;)a.push(a[0]);e.wipers=a.slice(0,2)}}if(!i.length){let a=new Ut({color:1315862,roughness:.55,metalness:.4}),o=new wt().makeBasis(e.right,e.up,s);for(let c of e.wipers){let l=new Dt;l.position.copy(e.center).addScaledVector(e.right,c.u).addScaledVector(e.up,c.v).addScaledVector(s,-.02),l.quaternion.setFromRotationMatrix(o);let h=new Dt;l.add(h);let f=new Gt(new re(c.r1*.97,.008,.008),a);f.position.set(c.r1*.485,0,-.014);let u=new Gt(new re(c.r1-c.r0,.012,.012),a);u.position.set((c.r0+c.r1)/2,0,-.004),h.add(f,u),h.rotation.z=c.rest,r.add(l),i.push(d=>{h.rotation.z=c.rest+c.sign*d})}}return i}var Xd=new Map;function Zg(r=1249810,t=.58){let e=r+"|"+t;if(Xd.has(e))return Xd.get(e);let n=new Ut({name:"Leather",color:r,roughness:t,metalness:0});return n.onBeforeCompile=i=>{i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
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
        roughnessFactor = clamp(roughnessFactor + (lNoise(vLP * 330.0) - 0.5) * 0.25, 0.3, 1.0);`)},n.customProgramCacheKey=()=>"leather",Xd.set(e,n),n}function BT(r){r.userData.glass=!0,r.metalness=0,r.roughness=Math.min(r.roughness,.04),r.depthWrite=!1,r.onBeforeCompile=t=>{t.fragmentShader=t.fragmentShader.replace("#include <opaque_fragment>",`#include <opaque_fragment>
      gl_FragColor.a = clamp(gl_FragColor.a + dot(reflectedLight.indirectSpecular + reflectedLight.directSpecular, vec3(0.3, 0.59, 0.11)) * 1.4, 0.0, 0.94);`)},r.customProgramCacheKey=()=>"glass-reflect"}var ka=(r,t,e)=>Math.min(e,Math.max(t,r)),nh=16,ih=35,GT=(r,t,e)=>{let n=((t-r+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI;return r+n*e},Qg={chase:{distance:6.2,speedBack:1.4,cineBack:1.8,height:2.3,carHeight:.4,lookAhead:13,lookHeight:1.75,slopeLook:10,follow:5,lookFollow:7,near:.3,focal:16,aperture:3.5},low:{distance:4.2,height:.95,lookAhead:10,lookHeight:1,slopeLook:10,follow:5,lookFollow:7,near:.3,focal:24,aperture:3.5},side:{distance:23.2,height:4.35,lookHeight:.42,follow:9,lookFollow:12,near:.3,focal:24,aperture:1.8},cockpit:{eyeSide:0,eyeHeight:0,eyeForward:0,pitch:.24,lookDistance:30,follow:9,lookFollow:9,near:.04,focal:24,aperture:3.5},orbit:{radius:30,height:7.5,heightWave:3,waveRate:2,speed:.13,lookHeight:.8,follow:5,lookFollow:7,near:.3,focal:24,aperture:2.8},drone:{distance:15,height:13,lookAhead:6,lookHeight:.5,follow:3.5,lookFollow:7,near:.3,focal:24,aperture:3.5}},eh=class{constructor(t){this.camera=t,this.mode=0,this.yaw=0,this.orbit=.9,this.relP=new T,this.relL=new T,this.fov=60,this.first=!0,this.transition=null,this.cine=0,this.intro=-1,this._p=new T,this._l=new T,this._f=new T,this._r=new T,this._cp=new T,this._cl=new T,this._dl=new T,this._eye=new T,this.eyeAt=null,this.look={yaw:0,pitch:0,hold:!1,idle:0},this.sideSign=0,this.sidePref=0,this.sideDist=null,this.orbitR=null,this.tune=structuredClone(Qg),this.focal=this.focalS=this.focalEff=24,this.aperture=this.apertureS=3.5}zoomBy(t){this.focal=ka(this.focal/t,nh,ih),this.tune[Ne[this.mode].id].focal=this.focal}fovFor(t){let e=Math.atan(18/t),n=this.camera.aspect||1.6;return(n>=1?2*Math.atan(Math.tan(e)/n):2*e)*180/Math.PI}lookBy(t,e){let n=this.look;n.yaw=Math.atan2(Math.sin(n.yaw-t),Math.cos(n.yaw-t)),n.pitch=ka(n.pitch+e,-1.2,1.2)}get name(){return Ne[this.mode].name}resetTune(t){this.tune[t]=structuredClone(Qg[t]),this.setMode(this.mode)}startIntro(){this.intro=0,this.first=!0}setMode(t){let e=t%Ne.length;!this.first&&e!==this.mode&&(this.transition={elapsed:0,duration:2,fromP:this.relP.clone(),fromL:this.relL.clone(),fromFocal:this.focalS,fromAperture:this.apertureS,fromNear:this.camera.near}),this.mode=e,this.intro=-1,this.sideSign=0,this.look.yaw=this.look.pitch=0;let n=Ne[this.mode].id,i=this.tune[n];this.focal=i.focal,this.aperture=i.aperture,this.transition||(this.focalS=this.focal,this.apertureS=this.aperture,this.camera.near=i.near,this.camera.updateProjectionMatrix())}update(t,e){let n=Ne[this.mode].id,{pos:i,speed:s,dim:a}=e;this.yaw=this.first?e.yaw:GT(this.yaw,e.yaw,1-Math.exp(-t*3));let o=(R,A)=>A.set(-Math.sin(R),0,-Math.cos(R)),c=(R,A)=>A.set(Math.cos(R),0,-Math.sin(R)),l=o(this.yaw,this._f),h=new T(-Math.sin(e.yaw),0,-Math.cos(e.yaw)),f=c(e.yaw,this._r),u=this._p,d=this._l,g=5,v=7,m=!1,p=ka(s/45,0,1),x=e.fx||0,y=Math.tan(e.pitch||0),_=this.cine,M=this.tune[n];switch(g=M.follow,v=M.lookFollow,n){case"chase":u.copy(i).addScaledVector(l,-(a.length*.5+M.distance+M.speedBack*x+M.cineBack*_)).setY(i.y+M.height+a.height*M.carHeight),d.copy(i).addScaledVector(l,M.lookAhead).setY(i.y+M.lookHeight+y*M.slopeLook);break;case"low":u.copy(i).addScaledVector(l,-(a.length*.5+M.distance)).setY(i.y+M.height),d.copy(i).addScaledVector(l,M.lookAhead).setY(i.y+M.lookHeight+y*M.slopeLook);break;case"side":{this.sideSign||(this.sideSign=this.sidePref||e.side||1),u.copy(i).addScaledVector(f,this.sideSign*(this.sideDist??M.distance)).setY(i.y+M.height),d.copy(i).setY(i.y+a.height*M.lookHeight);break}case"cockpit":{let[R,A,P]=a.eye;this.eyeAt&&this.eyeAt(this._eye)?u.copy(this._eye):u.copy(i).addScaledVector(f,R).addScaledVector(h,-P).setY(i.y+A-y*P),u.addScaledVector(f,M.eyeSide).addScaledVector(h,M.eyeForward),u.y+=M.eyeHeight;let N=this.cockpitPitch==null?M.pitch:this.cockpitPitch+M.pitch-.24;d.copy(u).addScaledVector(h,M.lookDistance).setY(u.y-M.lookDistance*Math.tan(N)+y*M.lookDistance),m=!0;break}case"orbit":this.orbit+=t*M.speed;{let R=this.orbitR??M.radius;u.set(i.x+Math.cos(this.orbit)*R,i.y+M.height+Math.sin(this.orbit*M.waveRate)*M.heightWave,i.z+Math.sin(this.orbit)*R)}d.copy(i).setY(i.y+M.lookHeight);break;case"drone":u.copy(i).addScaledVector(l,-M.distance).setY(i.y+M.height),d.copy(i).addScaledVector(l,M.lookAhead).setY(i.y+M.lookHeight);break}this.focalEff=this.focalS*(1-.04*p);let b=this.fovFor(this.focalEff),w=!1;if(this.intro>=0&&n==="chase"){this.intro+=t;let R=Math.min(1,this.intro/6.5),A=R*R*(3-2*R);if(R>=1)this.intro=-1;else{w=!0;let P=this.tune.chase,N=a.length*.5+P.distance+P.cineBack*_,U=.5+(Math.PI-.5)*A,V=P.distance+(N-P.distance)*A,q=i.y+.65+(P.height+a.height*P.carHeight-.65)*A,j=d.clone();u.copy(i).addScaledVector(h,Math.cos(U)*V).addScaledVector(f,(e.side||1)*Math.sin(U)*Math.min(V,3.4)).setY(q),d.copy(i).setY(i.y+.7).lerp(j,A),b=36+(b-36)*A}}else this.intro>=0&&(this.intro=-1);let C=u.sub(i),E=d.sub(i),S=!!this.transition&&!w;if(S){let R=this.transition,A=ka((R.elapsed+=t)/R.duration,0,1),P=A*A*(3-2*A);this.relP.lerpVectors(R.fromP,C,P),this.relL.lerpVectors(R.fromL,E,P),this.focalS=Oe.lerp(R.fromFocal,this.focal,P),this.apertureS=Oe.lerp(R.fromAperture,this.aperture,P),this.camera.near=Oe.lerp(R.fromNear,M.near,P),A>=1&&(this.transition=null)}else{let R=1-Math.exp(-t*g),A=1-Math.exp(-t*v);m&&(R=A=1),(this.first||w)&&(R=A=1),this.relP.lerp(C,R),this.relL.lerp(E,A),this.focalS+=(this.focal-this.focalS)*(1-Math.exp(-t*8)),this.apertureS+=(this.aperture-this.apertureS)*(1-Math.exp(-t*8)),this.camera.near=M.near}this.focalEff=this.focalS*(1-.04*p),w||(b=this.fovFor(this.focalEff)),this.fov+=(b-this.fov)*(this.first||this.transition?1:1-Math.exp(-t*3)),this.first=!1;let I=this.look,D=this._cp.copy(this.relP),k=this._cl.copy(this.relL);if(Math.abs(I.yaw)>1e-4||Math.abs(I.pitch)>1e-4)if(m){let R=this._dl.copy(k).sub(D),A=R.length(),P=Math.atan2(R.x,R.z)-I.yaw,N=ka(Math.atan2(R.y,Math.hypot(R.x,R.z))+I.pitch,-1.2,1.2);R.set(Math.sin(P)*Math.cos(N),Math.sin(N),Math.cos(P)*Math.cos(N)).multiplyScalar(A),k.copy(D).add(R)}else{let R=Math.cos(I.yaw),A=Math.sin(I.yaw);D.set(D.x*R+D.z*A,D.y,-D.x*A+D.z*R),k.set(k.x*R+k.z*A,k.y,-k.x*A+k.z*R);let P=Math.hypot(D.x,D.z),N=D.length(),U=ka(Math.atan2(D.y,P)+I.pitch,.03,1.35),V=N*Math.cos(U)/Math.max(P,.001);D.set(D.x*V,N*Math.sin(U),D.z*V)}if(this.camera.position.copy(i).add(D),this.collide&&!m&&this.collide(i,this.camera.position,t),this.groundAt){let R=this.groundAt(this.camera.position.x,this.camera.position.z)+.6;this.camera.position.y<R&&(this.camera.position.y=R)}this._l.copy(i).add(k),this.camera.lookAt(this._l),(Math.abs(this.camera.fov-this.fov)>.01||S)&&(this.camera.fov=this.fov,this.camera.updateProjectionMatrix())}};var sh=r=>440*Math.pow(2,(r-69)/12),Tr=(r,t)=>r+Math.random()*(t-r),jd=r=>r[Math.floor(Math.random()*r.length)],rh=(r,t,e)=>Math.min(e,Math.max(t,r)),$g=[[{r:41,n:[53,57,60,64]},{r:40,n:[52,55,59,62]},{r:38,n:[50,53,57,60]},{r:36,n:[52,55,59,62]}],[{r:38,n:[50,53,57,60]},{r:43,n:[53,55,59,62]},{r:36,n:[52,55,59,62]},{r:45,n:[55,57,60,64]}],[{r:36,n:[52,55,59,62]},{r:45,n:[55,57,60,64]},{r:38,n:[50,53,57,60]},{r:43,n:[53,55,59,62]}],[{r:45,n:[55,57,60,64]},{r:38,n:[50,53,57,60]},{r:43,n:[53,55,59,62]},{r:36,n:[52,55,59,62]}]],tv=[[0,6,10],[0,7,10,14],[0,10],[0,3,8,11]],VT=[72,74,76,79,81,84],ah=class{constructor(){this.ctx=null,this.mode=0,this.bpm=74,this.step=0,this.bar=0,this.prog=$g[0],this.pattern=tv[0],this.lastMel=-99}async start(){if(this.ctx){await this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;this.master=e.createGain(),this.master.gain.value=0;let n=e.createDynamicsCompressor();n.threshold.value=-16,n.ratio.value=3,this.master.connect(n).connect(e.destination),this.musicGain=e.createGain();let i=e.createBiquadFilter();i.type="lowpass",i.frequency.value=4800,i.Q.value=.4,this.musicGain.connect(i).connect(this.master),this.pianoBus=e.createGain();let s=e.createBiquadFilter();s.type="lowpass",s.frequency.value=2400,this.pianoBus.connect(s).connect(this.musicGain),this.drumBus=e.createGain();let a=e.createBiquadFilter();a.type="lowpass",a.frequency.value=3400,this.drumBus.connect(a).connect(this.musicGain);let o=e.sampleRate*2.6,c=e.createBuffer(2,o,e.sampleRate);for(let g=0;g<2;g++){let v=c.getChannelData(g);for(let m=0;m<o;m++)v[m]=(Math.random()*2-1)*Math.pow(1-m/o,3.2)}this.reverb=e.createConvolver(),this.reverb.buffer=c;let l=e.createGain();l.gain.value=.38,this.reverbIn=e.createGain(),this.reverbIn.connect(this.reverb).connect(l).connect(this.musicGain),s.connect(this.reverbIn),this.echo=e.createDelay(2),this.echo.delayTime.value=60/this.bpm*.75;let h=e.createGain();h.gain.value=.34;let f=e.createBiquadFilter();f.type="lowpass",f.frequency.value=1800,this.echo.connect(f).connect(h).connect(this.echo),f.connect(this.musicGain),this.wow=e.createOscillator(),this.wow.frequency.value=.55,this.wowGain=e.createGain(),this.wowGain.gain.value=9,this.wow.connect(this.wowGain),this.wow.start();let u=e.createBuffer(1,e.sampleRate*2,e.sampleRate),d=u.getChannelData(0);for(let g=0;g<d.length;g++)d[g]=Math.random()*2-1;this.noise=u,this._vinyl(),this._ambient(),this.nextTime=e.currentTime+.15,this.timer=setInterval(()=>this._tick(),50),document.addEventListener("visibilitychange",()=>{document.hidden?e.suspend():this.mode!==2&&e.resume()}),this.setMode(this.mode)}setMode(t){if(this.mode=t,!this.ctx)return;let e=this.ctx.currentTime;this.master.gain.setTargetAtTime(t===2?0:.9,e,.4)}_src(t,e=!0){let n=this.ctx.createBufferSource();return n.buffer=t,n.loop=e,n.loopStart=Math.random(),n}_vinyl(){let t=this.ctx,e=t.sampleRate*4,n=t.createBuffer(1,e,t.sampleRate),i=n.getChannelData(0);for(let c=0;c<e;c++)i[c]=(Math.random()*2-1)*.012;for(let c=0;c<70;c++){let l=Math.floor(Math.random()*(e-10));i[l]+=Tr(.25,.8)*(Math.random()<.5?-1:1),i[l+1]-=Tr(.1,.4)}let s=t.createBufferSource();s.buffer=n,s.loop=!0;let a=t.createBiquadFilter();a.type="highpass",a.frequency.value=1300;let o=t.createGain();o.gain.value=.16,s.connect(a).connect(o).connect(this.musicGain),s.start()}_ambient(){let t=this.ctx;this.ambGain=t.createGain(),this.ambGain.gain.value=1,this.ambGain.connect(this.master),this.outLp=t.createBiquadFilter(),this.outLp.type="lowpass",this.outLp.frequency.value=2e4,this.outGain=t.createGain(),this.outGain.gain.value=1,this.outGain.connect(this.outLp).connect(this.ambGain);let e=(g,v,m)=>{let p=this._src(this.noise),x=t.createBiquadFilter();x.type=g,x.frequency.value=v,x.Q.value=m;let y=t.createGain();return y.gain.value=0,p.connect(x).connect(y).connect(this.outGain),p.start(),y};this.rainG=e("bandpass",2200,.5),this.windG=e("lowpass",420,.7),this.tireG=e("lowpass",750,.6);let n=t.createOscillator();n.frequency.value=.13,this.gustG=t.createGain(),this.gustG.gain.value=0,n.connect(this.gustG).connect(this.windG.gain),n.start(),this.engLp=t.createBiquadFilter(),this.engLp.type="lowpass",this.engLp.frequency.value=260,this.engLp.Q.value=1.2,this.engG=t.createGain(),this.engG.gain.value=0,this.eng=[t.createOscillator(),t.createOscillator(),t.createOscillator()],this.eng[0].type="sawtooth",this.eng[1].type="triangle",this.eng[2].type="square";let i=t.createGain();i.gain.value=.35,this.eng[0].connect(this.engLp),this.eng[1].connect(this.engLp),this.eng[2].connect(i).connect(this.engLp),this.eng.forEach(g=>{g.frequency.value=40,g.start()}),this.engLp.connect(this.engG).connect(this.ambGain);let s=this._src(this.noise);this.exBp=t.createBiquadFilter(),this.exBp.type="bandpass",this.exBp.Q.value=2.2,this.exBp.frequency.value=150,this.exG=t.createGain(),this.exG.gain.value=0,s.connect(this.exBp).connect(this.exG).connect(this.ambGain),s.start(),this.rpm=900,this.load=0,this._lastV=0,this._lastT=0;let a=t.sampleRate,o=a*4,c=t.createBuffer(1,o,a),l=c.getChannelData(0);for(let g=0;g<1400;g++){let v=Math.floor(Math.random()*o),m=.08+Math.random()*Math.random()*.5,p=1800+Math.random()*3800,x=a*(.0012+Math.random()*.0025),y=a*(.004+Math.random()*.008);for(let _=0;_<a*.03;_++)l[(v+_)%o]+=m*((Math.random()*2-1)*Math.exp(-_/x)+.5*Math.sin(6.2832*p*_/a)*Math.exp(-_/y))}let h=t.createBufferSource();h.buffer=c,h.loop=!0;let f=t.createBiquadFilter();f.type="highpass",f.frequency.value=700,this.glassG=t.createGain(),this.glassG.gain.value=0,h.connect(f).connect(this.glassG).connect(this.ambGain),h.start();let u=this._src(this.noise),d=t.createBiquadFilter();d.type="lowpass",d.frequency.value=900,this.roofG=t.createGain(),this.roofG.gain.value=0,u.connect(d).connect(this.roofG).connect(this.ambGain),u.start()}setAmbient({speed:t,rain:e,snow:n,wind:i=0,dark:s=0,fx:a=0,inCar:o=!1}){if(!this.ctx)return;let c=this.ctx.currentTime,l=.25,h=this.mode===0?1:0;this.ambGain.gain.setTargetAtTime(h,c,.4),this.outGain.gain.setTargetAtTime(o?.4:1,c,.3),this.outLp.frequency.setTargetAtTime(o?1600:2e4,c,.3),this.glassG.gain.setTargetAtTime(o?e*.08*(1+.6*s):0,c,.3),this.roofG.gain.setTargetAtTime(o?e*.02*(1+s):0,c,.3),this.rainG.gain.setTargetAtTime(e*.08*(1+.6*s),c,l),this.windG.gain.setTargetAtTime(.012+t*.0016+n*.05+i*i*.1+a*.085,c,l),this.gustG.gain.setTargetAtTime(i*i*.07,c,l),this.tireG.gain.setTargetAtTime(Math.min(t*.0011,.05)*(1+e),c,l);let f=Math.min(.2,Math.max(.001,c-this._lastT));this._lastT=c;let u=(t-this._lastV)/f;this._lastV=t,this.load+=(Math.max(0,Math.min(1,u/4))-this.load)*Math.min(1,f*3);let d=[400,240,165,125,100,82],g=2200+this.load*3600;this.gear??(this.gear=0),t*d[this.gear]>g&&this.gear<5?this.gear++:this.gear>0&&t*d[this.gear-1]<g*.8&&this.gear--;let v=Math.max(850,t*d[this.gear]);this.rpm+=(v-this.rpm)*Math.min(1,f*6);let m=Math.min(1,(this.rpm-850)/5450),p=this.rpm/15;this.eng[0].frequency.setTargetAtTime(p,c,.06),this.eng[1].frequency.setTargetAtTime(p*2,c,.06),this.eng[2].frequency.setTargetAtTime(p*.5,c,.06);let x=Math.min(1,t/50);this.engLp.frequency.setTargetAtTime(220+m*900+this.load*900+x*600,c,.08),this.engG.gain.setTargetAtTime(.02+m*.03+this.load*.035+x*.05,c,.1),this.exBp.frequency.setTargetAtTime(p*2,c,.06),this.exG.gain.setTargetAtTime((.01+x*.07)*(.4+.6*m)+this.load*.05,c,.1)}passDur(t){return rh(2.8-t*.03,.8,2.6)}passBy(t,e=0,n=3){if(!this.ctx||this.mode!==0)return;let i=this.ctx,s=i.currentTime,a=this.passDur(t),o=s+a*.5,c=rh(.12+t/45,.12,1)/(1+.12*Math.max(0,n-2)),l=i.createStereoPanner();l.pan.setValueAtTime(e*.4,s),l.pan.linearRampToValueAtTime(e,o),l.pan.linearRampToValueAtTime(e*.5,s+a),l.connect(this.outGain);let h=this._src(this.noise,!0),f=i.createBiquadFilter();f.type="bandpass",f.Q.value=.7,f.frequency.setValueAtTime(400+t*10,s),f.frequency.linearRampToValueAtTime(900+t*22,o),f.frequency.exponentialRampToValueAtTime(260+t*5,s+a);let u=i.createGain();u.gain.setValueAtTime(1e-4,s),u.gain.exponentialRampToValueAtTime(.16*c,o),u.gain.exponentialRampToValueAtTime(1e-4,s+a),h.connect(f).connect(u).connect(l),h.start(s),h.stop(s+a+.05);let d=i.createOscillator();d.type="sawtooth";let g=55+t*1.1,v=Math.min(.25,t/343);d.frequency.setValueAtTime(g*(1+v),s),d.frequency.setValueAtTime(g*(1+v),o-a*.08),d.frequency.exponentialRampToValueAtTime(g*(1-v),o+a*.12);let m=i.createBiquadFilter();m.type="lowpass",m.frequency.value=320+t*6;let p=i.createGain();p.gain.setValueAtTime(1e-4,s),p.gain.exponentialRampToValueAtTime(.07*c,o),p.gain.exponentialRampToValueAtTime(1e-4,s+a),d.connect(m).connect(p).connect(l),d.start(s),d.stop(s+a+.05)}horn(t=0,e=1){if(!this.ctx)return;let n=this.ctx,i=n.currentTime,s=n.createStereoPanner();s.pan.value=Math.max(-1,Math.min(1,t));let a=n.createBiquadFilter();a.type="lowpass",a.frequency.value=2400,a.connect(s).connect(this.outGain);for(let[o,c]of[[0,.16],[.24,.22]]){let l=n.createGain(),h=i+o;l.gain.setValueAtTime(1e-4,h),l.gain.exponentialRampToValueAtTime(.09*e,h+.015),l.gain.setValueAtTime(.09*e,h+c-.03),l.gain.exponentialRampToValueAtTime(1e-4,h+c),l.connect(a);for(let f of[415,498]){let u=n.createOscillator();u.type="square",u.frequency.value=f,u.connect(l),u.start(h),u.stop(h+c+.02)}}}setSiren(t,e,n=0){if(!this.ctx)return;let i=this.ctx,s=i.currentTime;this.sirens||(this.sirens={});let a=this.sirens[t];if(!a){if(e<=0)return;let c=i.createOscillator();c.type="square";let l=i.createOscillator();l.type="sine";let h=i.createBiquadFilter();h.type="lowpass",h.frequency.value=2600;let f=i.createGain();f.gain.value=0;let u=i.createStereoPanner(),d=i.createGain();d.gain.value=.6,c.connect(h),l.connect(d).connect(h),h.connect(f).connect(u).connect(this.outGain),c.start(),l.start(),a=this.sirens[t]={o:c,o2:l,g:f,p:u}}let o;t==="police"?o=650+700*(.5-.5*Math.cos(s*Math.PI/2)):o=Math.floor(s/.65)%2?770:960,a.o.frequency.setTargetAtTime(o,s,t==="police"?.05:.008),a.o2.frequency.setTargetAtTime(o*2.01,s,t==="police"?.05:.008),a.g.gain.setTargetAtTime(.11*Math.max(0,Math.min(1,e)),s,.25),a.p.pan.setTargetAtTime(Math.max(-1,Math.min(1,n)),s,.1)}setWater(t,e=0){if(!this.ctx)return;let n=this.ctx,i=n.currentTime;if(!this.waterG){if(t<=.001)return;let s=n.sampleRate,a=s*4,o=n.createBuffer(1,a,s),c=o.getChannelData(0),l=0;for(let u=0;u<a;u++)l=l*.985+(Math.random()*2-1)*.06,c[u]=l*.55+(Math.random()*2-1)*.045;for(let u=0;u<1500;u++){let d=Math.floor(Math.random()*a),g=380*Math.pow(5,Math.random()),v=s*(.003+Math.random()*.009),m=.05+Math.random()*Math.random()*.22,p=0;for(let x=0;x<v*3;x++)p+=6.2832*g*(1+.7*x/v)/s,c[(d+x)%a]+=m*Math.sin(p)*Math.exp(-x/v)}for(let u=0;u<2e3;u++){let d=u/2e3;c[u]=c[u]*d+c[a-2e3+u]*(1-d)}let h=n.createBufferSource();h.buffer=o,h.loop=!0,h.loopEnd=(a-2e3)/s;let f=n.createBiquadFilter();f.type="highpass",f.frequency.value=110,this.waterPan=n.createStereoPanner(),this.waterG=n.createGain(),this.waterG.gain.value=0,h.connect(f).connect(this.waterG).connect(this.waterPan).connect(this.outGain),h.start()}this.waterG.gain.setTargetAtTime(rh(t,0,1)*.3,i,.35),this.waterPan.pan.setTargetAtTime(rh(e,-1,1),i,.25)}splash(t=1){if(!this.ctx||this.mode!==0)return;let e=this.ctx,n=e.currentTime,i=.35+.45*Math.min(1,t),s=this._src(this.noise,!0),a=e.createBiquadFilter();a.type="bandpass",a.Q.value=.6,a.frequency.setValueAtTime(900+900*t,n),a.frequency.exponentialRampToValueAtTime(500,n+i);let o=e.createGain();o.gain.setValueAtTime(1e-4,n),o.gain.exponentialRampToValueAtTime(.22*t,n+.03),o.gain.exponentialRampToValueAtTime(1e-4,n+i),s.connect(a).connect(o).connect(this.outGain),s.start(n),s.stop(n+i+.05)}thunder(t=1.5,e=1){if(!this.ctx||this.mode!==0)return;let n=this.ctx,i=n.currentTime+t,s=n.sampleRate*5,a=n.createBuffer(1,s,n.sampleRate),o=a.getChannelData(0),c=0;for(let u=0;u<s;u++)c=(c+(Math.random()*2-1)*.06)/1.02,o[u]=c*3.5;let l=n.createBufferSource();l.buffer=a;let h=n.createBiquadFilter();h.type="lowpass",h.frequency.setValueAtTime(900,i),h.frequency.exponentialRampToValueAtTime(110,i+4);let f=n.createGain();f.gain.setValueAtTime(1e-4,i),f.gain.linearRampToValueAtTime(.9*e,i+.12),f.gain.setTargetAtTime(1e-4,i+.3,1.1),l.connect(h).connect(f).connect(this.outGain),l.start(i),l.stop(i+5),this._noiseHit(i,.25,"bandpass",700,.3*e,this.outGain)}_tick(){let t=this.ctx;if(!t||t.state!=="running")return;let e=60/this.bpm/4;for(;this.nextTime<t.currentTime+.3;){let n=this.step%2?e*.2:0;this._step(this.step,this.nextTime+n),this.nextTime+=e,++this.step===16&&(this.step=0,this.bar++)}}_step(t,e){t===0&&this.bar%4===0&&(this.prog=jd($g),this.pattern=jd(tv));let n=this.prog[this.bar%4];if(this.pattern.includes(t)){let i=t===0?1:Tr(.55,.8);n.n.forEach((s,a)=>this._epiano(s,e+a*.014+Tr(0,.008),i,t===0?2.4:1.2))}t===0&&this._bass(n.r,e,1.7),(t===10||t===14&&Math.random()<.4)&&this._bass(n.r+(Math.random()<.5?0:7),e,.8),(t===0||t===10||t===7&&Math.random()<.3)&&this._kick(e),(t===4||t===12)&&this._snare(e),t%2===0&&this._hat(e,t%4===2?.8:.5,t===14&&Math.random()<.25),t%2===0&&this.bar-this.lastMel>0&&Math.random()<.16&&(this._pluck(jd(VT),e,Tr(.5,.9)),this.lastMel=this.bar+(Math.random()<.5?0:-1))}_osc(t,e,n,i,s=0){let a=this.ctx.createOscillator();return a.type=t,a.frequency.value=e,a.detune.value=s,this.wowGain.connect(a.detune),a.start(n),a.stop(n+i),a}_epiano(t,e,n,i){let s=this.ctx,a=sh(t),o=s.createGain();o.gain.setValueAtTime(1e-4,e),o.gain.linearRampToValueAtTime(n*.075,e+.012),o.gain.exponentialRampToValueAtTime(n*.03,e+.4),o.gain.exponentialRampToValueAtTime(1e-4,e+i),this._osc("sine",a,e,i+.1).connect(o),this._osc("triangle",a,e,i+.1,Tr(3,8)).connect(o);let c=s.createGain();c.gain.setValueAtTime(n*.022,e),c.gain.exponentialRampToValueAtTime(1e-4,e+.2),this._osc("sine",a*4,e,.3).connect(c).connect(this.pianoBus),o.connect(this.pianoBus)}_bass(t,e,n){let i=this.ctx.createGain();i.gain.setValueAtTime(1e-4,e),i.gain.linearRampToValueAtTime(.2,e+.03),i.gain.exponentialRampToValueAtTime(1e-4,e+n);let s=this.ctx.createBiquadFilter();s.type="lowpass",s.frequency.value=380,this._osc("sine",sh(t),e,n+.1).connect(i),this._osc("triangle",sh(t),e,n+.1).connect(i),i.connect(s).connect(this.musicGain)}_pluck(t,e,n){let i=this.ctx.createGain();i.gain.setValueAtTime(1e-4,e),i.gain.linearRampToValueAtTime(n*.06,e+.01),i.gain.exponentialRampToValueAtTime(1e-4,e+1.1);let s=this.ctx.createBiquadFilter();s.type="lowpass",s.frequency.value=2200,this._osc("triangle",sh(t),e,1.2).connect(i),i.connect(s),s.connect(this.pianoBus);let a=this.ctx.createGain();a.gain.value=.6,s.connect(a).connect(this.echo)}_kick(t){let e=this.ctx.createOscillator(),n=this.ctx.createGain();e.frequency.setValueAtTime(130,t),e.frequency.exponentialRampToValueAtTime(42,t+.14),n.gain.setValueAtTime(.5,t),n.gain.exponentialRampToValueAtTime(1e-4,t+.32),e.connect(n).connect(this.drumBus),e.start(t),e.stop(t+.35)}_noiseHit(t,e,n,i,s,a=this.drumBus){let o=this._src(this.noise,!1),c=this.ctx.createBiquadFilter();c.type=n,c.frequency.value=i;let l=this.ctx.createGain();l.gain.setValueAtTime(s,t),l.gain.exponentialRampToValueAtTime(1e-4,t+e),o.connect(c).connect(l).connect(a),o.start(t,Math.random()),o.stop(t+e+.02)}_snare(t){this._noiseHit(t,.16,"bandpass",1900,.28);let e=this.ctx.createOscillator(),n=this.ctx.createGain();e.frequency.value=185,n.gain.setValueAtTime(.16,t),n.gain.exponentialRampToValueAtTime(1e-4,t+.1),e.connect(n).connect(this.drumBus),e.start(t),e.stop(t+.12)}_hat(t,e,n){this._noiseHit(t,n?.2:.045,"highpass",7500,.12*e*Tr(.7,1))}};var oh=27,WT=12,Kd=2;function ch(r){let t=r>>>0;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function qT(){let r=ch(3),t=[],e=[],n=[],i=[],s=new it(6971440),a=new it(11115094),o=new it(14733202),c=(f,u,d,g,v)=>{t.push(f,u,d),n.push(g.r,g.g,g.b),e.push(v[0],v[1],v[2])},l=5;for(let f=0;f<l;f++){let u=f/l*Math.PI*2+(r()-.5)*.7,d=Math.cos(u),g=Math.sin(u),v=-g,m=d,p=1.05+r()*.6,x=.35+r()*.45,y=new T(d*.35,1,g*.35).normalize().toArray(),_=[{c:[d*.03,0,g*.03],hw:.034,col:s},{c:[d*x*.4,p*.6,g*x*.4],hw:.03,col:a}],M=t.length/3;for(let b of _)c(b.c[0]-v*b.hw,b.c[1],b.c[2]-m*b.hw,b.col,y),c(b.c[0]+v*b.hw,b.c[1],b.c[2]+m*b.hw,b.col,y);c(d*x,p*.92,g*x,o,y),i.push(M,M+1,M+2,M+1,M+3,M+2,M+2,M+3,M+4)}let h=new Rt;return h.setAttribute("position",new _t(t,3)),h.setAttribute("normal",new _t(e,3)),h.setAttribute("color",new _t(n,3)),h.setIndex(i),h}function XT(){let r=ch(11),t=[],e=[],n=[],i=[],s=new it(3955232),a=new it(7312436),o=new it(12176482),c=(f,u,d,g,v)=>{t.push(f,u,d),n.push(g.r,g.g,g.b),e.push(v[0],v[1],v[2])},l=5;for(let f=0;f<l;f++){let u=f/l*Math.PI*2+(r()-.5)*.9,d=Math.cos(u),g=Math.sin(u),v=-g,m=d,p=.32+r()*.45,x=.05+r()*.18,y=(r()-.5)*.25,_=(r()-.5)*.25,M=new T(d*.3,1,g*.3).normalize().toArray(),b=t.length/3;c(y-v*.03,0,_-m*.03,s,M),c(y+v*.03,0,_+m*.03,s,M),c(y+d*x*.4-v*.024,p*.55,_+g*x*.4-m*.024,a,M),c(y+d*x*.4+v*.024,p*.55,_+g*x*.4+m*.024,a,M),c(y+d*x,p,_+g*x,o,M),i.push(b,b+1,b+2,b+1,b+3,b+2,b+2,b+3,b+4)}let h=new Rt;return h.setAttribute("position",new _t(t,3)),h.setAttribute("normal",new _t(e,3)),h.setAttribute("color",new _t(n,3)),h.setIndex(i),h}function jT(){let r=ch(29),t=[],e=[],n=[],i=[],s=new it(4612666),a=new it(8036444),o=new it(12046479),c=(f,u,d,g,v)=>{t.push(f,u,d),n.push(g.r,g.g,g.b),e.push(v[0],v[1],v[2])},l=7;for(let f=0;f<l;f++){let u=f/l*Math.PI*2+(r()-.5)*.8,d=Math.cos(u),g=Math.sin(u),v=-g,m=d,p=.9+r()*.5,x=.12+r()*.3,y=.035+r()*.02,_=(r()-.5)*.3,M=(r()-.5)*.3,b=new T(d*.3,1,g*.3).normalize().toArray(),w=t.length/3,C=[[0,y,s],[.45,y*.85,a],[.8,y*.5,a.clone().lerp(o,.5)],[1,.002,o]];for(let[E,S,I]of C){let D=_+d*x*E*E,k=M+g*x*E*E,R=p*E;c(D-v*S,R,k-m*S,I,b),c(D+v*S,R,k+m*S,I,b)}for(let E=0;E<C.length-1;E++){let S=w+E*2;i.push(S,S+1,S+2,S+1,S+3,S+2)}}let h=new Rt;return h.setAttribute("position",new _t(t,3)),h.setAttribute("normal",new _t(e,3)),h.setAttribute("color",new _t(n,3)),h.setIndex(i),h}function KT(){let r=[],t=[],e=[],n=[],i=(a,o,c,l,h)=>{let f=Math.cos(a),u=Math.sin(a),d=r.length/3;for(let[g,v]of[[0,0],[1,0],[1,1],[0,1]]){let m=(g-.5)*c,p=o-l+v*l,x=h*v*v;r.push(m*f+x,p,m*u),t.push(0,1,0),e.push(g,v)}n.push(d,d+1,d+2,d,d+2,d+3)};i(.3,2,.34,.98,.1),i(.3+Math.PI/2,2,.34,.98,.1),i(1.3,1.72,.27,.74,-.06);let s=new Rt;return s.setAttribute("position",new _t(r,3)),s.setAttribute("normal",new _t(t,3)),s.setAttribute("uv",new _t(e,2)),s.setIndex(n),s}var YT=`
attribute vec4 aSeed;
uniform vec3 uCam;
uniform float uTime, uWind, uCell, uScale, uIn0, uIn1, uOut0, uOut1, uCorr;
uniform vec2 uWindDir;
uniform vec3 uRoad[${oh}];     // (x, y, z) của tim đường
uniform float uCarve0, uCarve1, uTipH, uPatch;
${j0}
// khoảng cách tới đường + độ cao mặt đường tại điểm gần nhất
float roadDist(vec2 p, out float ry) {
  float dm = 1e9; ry = 0.0;
  for (int i = 0; i < ${oh-1}; i++) {
    vec2 a = uRoad[i].xz, b = uRoad[i + 1].xz, ab = b - a;
    float t = clamp(dot(p - a, ab) / dot(ab, ab), 0.0, 1.0);
    float d = length(p - a - ab * t);
    if (d < dm) { dm = d; ry = mix(uRoad[i].y, uRoad[i + 1].y, t); }
  }
  return dm;
}
`,JT=`
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
`,Ua=class{constructor(t,e,n="reed"){this.kind=n;let i=n==="meadow",s=n==="grass"||i;this.group=new Dt,t.add(this.group),this.density=1,this.roadPts=Array.from({length:oh},()=>new T),this.shared={uCam:{value:new T},uTime:{value:0},uWind:{value:.3},uWindDir:{value:new ht(.78,.62).normalize()},uRoad:{value:this.roadPts},uCorr:{value:Le.halfWidth+(i?.7:s?.3:1)},uTipH:{value:i?1.4:s?.8:1.95},uPatch:{value:i?1:0},uCarve0:{value:Le.halfWidth+1.2},uCarve1:{value:Le.halfWidth+16},uTLow:{value:Ie.low},uTDet:{value:Ie.det},uTFine:{value:Ie.fine}},this.leafGeo=i?jT():s?XT():qT(),this.plumeGeo=s?null:KT();let a=s?null:Z0();a&&(a.anisotropy=Math.min(4,e.capabilities.getMaxAnisotropy()));let o=i?[{cell:60,count:24e3,scale:1.05,in0:-1,in1:0,out0:26,out1:36,seed:5},{cell:230,count:14e3,scale:1.6,in0:24,in1:38,out0:95,out1:135,seed:6}]:s?[{cell:64,count:16e3,scale:1,in0:-1,in1:0,out0:22,out1:32,seed:3},{cell:220,count:8e3,scale:1.8,in0:20,in1:34,out0:75,out1:105,seed:4}]:[{cell:86,count:19e3,scale:1,in0:-1,in1:0,out0:30,out1:43,seed:1},{cell:340,count:11e3,scale:1.55,in0:27,in1:46,out0:118,out1:165,seed:2}];this.layers=o.map((c,l)=>{let h=l===o.length-1,f=h?c.count*Kd*Kd:c.count,u=ch(c.seed*977),d=new Float32Array(f*4);for(let x=0;x<d.length;x++)d[x]=u();let g=new $e(d,4),v={uCell:{value:c.cell},uScale:{value:c.scale},uIn0:{value:c.in0},uIn1:{value:c.in1},uOut0:{value:c.out0},uOut1:{value:c.out1}},m=this._mesh(this.leafGeo,g,c.count,v,new Ao({vertexColors:!0,side:Me}),!0);if(s)return{max:c.count,far:h,L:c,uni:v,meshes:[m]};let p=this._mesh(this.plumeGeo,g,c.count,v,new Ao({map:a,side:Me,alphaTest:.2,alphaToCoverage:!0}),!1);return{max:c.count,far:h,L:c,uni:v,meshes:[m,p]}}),this.mats=this.layers.flatMap(c=>c.meshes.map(l=>l.material)),this.group.visible=!0}_mesh(t,e,n,i,s,a){let o=new gl;o.index=t.index;for(let h of Object.keys(t.attributes))o.setAttribute(h,t.attributes[h]);o.setAttribute("aSeed",e),o.instanceCount=n;let c=this.shared;s.onBeforeCompile=h=>{Object.assign(h.uniforms,c,i),h.vertexShader=h.vertexShader.replace("#include <common>",`#include <common>
`+YT).replace("#include <begin_vertex>",JT),a&&(h.vertexShader=h.vertexShader.replace("#include <color_vertex>",`#include <color_vertex>
#ifdef USE_COLOR
vColor *= 0.78 + 0.44 * fract(aSeed.w * 9.31);
#endif`)),h.fragmentShader=h.fragmentShader.replace("#include <normal_fragment_begin>",$t.normal_fragment_begin.replace("normal *= faceDirection;","")).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance = emissive * diffuseColor.rgb;`)},ge(s);let l=new Gt(o,s);return l.frustumCulled=!1,l.layers.set(3),this.group.add(l),l}set visible(t){this.group.visible=t}get visible(){return this.group.visible}setDensity(t){this.density=t;let e=this.view||1;for(let n of this.layers)for(let i of n.meshes)i.geometry.instanceCount=Math.floor(n.max*t*(n.far?e*e:1))}setView(t){this.view=Math.min(Math.max(t,1),Kd);for(let e of this.layers)e.far&&(e.uni.uCell.value=e.L.cell*this.view,e.uni.uOut0.value=e.L.out0*this.view,e.uni.uOut1.value=e.L.out1*this.view);this.setDensity(this.density??1)}update(t,e,n,i,s){let a=this.shared;a.uTime.value=t,a.uCam.value.copy(e),a.uWind.value=s.wind,a.uWindDir.value.copy(s.windDir),a.uTLow.value=Ie.low,a.uTDet.value=Ie.det,a.uTFine.value=Ie.fine;let o={};for(let u=0;u<oh;u++)n.at(i+(u-12)*WT*(this.view||1),o),this.roadPts[u].set(o.x,o.y,o.z);let c=(this.kind==="reed"?.5:.3)*s.dayF*(1-s.overcast*.85)*(.4+.6*s.warm),l=new it(1,.72+.2*(1-s.warm),.42+.45*(1-s.warm)).multiplyScalar(c),h=(.2*s.dayF*(1-.55*s.dark)+.05*s.night)*(.6+.4*s.overcast)+s.flash*.9;l.add(new it(.8,.88,1).multiplyScalar(h));let f=1-.28*s.wet;for(let u of this.layers)u.meshes[0].material.emissive.copy(l),u.meshes[1]&&u.meshes[1].material.emissive.copy(l).multiplyScalar(1.7);for(let u of this.mats)u.color.setScalar(f*(1-.15*s.dark))}};var ZT=`
  varying vec2 vUv;
  void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,ev=`
  uniform float uExposure;
  vec3 rrtOdt(vec3 v) { vec3 a = v * (v + 0.0245786) - 0.000090537; vec3 b = v * (0.983729 * v + 0.4329510) + 0.238081; return a / b; }
  vec3 toDisplay(vec3 c) {
    const mat3 IN = mat3(vec3(0.59719, 0.07600, 0.02840), vec3(0.35458, 0.90834, 0.13383), vec3(0.04823, 0.01566, 0.83777));
    const mat3 OUT = mat3(vec3(1.60475, -0.10208, -0.00327), vec3(-0.53108, 1.10813, -0.07276), vec3(-0.07367, -0.00605, 1.07602));
    c = clamp(OUT * rrtOdt(IN * (c * uExposure / 0.6)), 0.0, 1.0);
    return mix(pow(c, vec3(0.41666)) * 1.055 - vec3(0.055), c * 12.92, vec3(lessThanEqual(c, vec3(0.0031308))));
  }`,QT=`
  uniform sampler2D tSrc; uniform vec2 uTexel; uniform float uThresh;
  varying vec2 vUv;
  ${ev}
  void main() {
    vec3 c = (toDisplay(texture2D(tSrc, vUv + uTexel * vec2(-1.0, -1.0)).rgb) + toDisplay(texture2D(tSrc, vUv + uTexel * vec2(1.0, -1.0)).rgb)
            + toDisplay(texture2D(tSrc, vUv + uTexel * vec2(-1.0, 1.0)).rgb) + toDisplay(texture2D(tSrc, vUv + uTexel * vec2(1.0, 1.0)).rgb)) * 0.25;
    float l = max(c.r, max(c.g, c.b));
    gl_FragColor = vec4(c * smoothstep(uThresh, uThresh + 0.07, l), 1.0);
  }`,$T=`
  uniform sampler2D tSrc; uniform vec2 uDir;
  varying vec2 vUv;
  void main() {
    vec3 s = texture2D(tSrc, vUv).rgb * 0.2270270270;
    s += (texture2D(tSrc, vUv + uDir * 1.3846153846).rgb + texture2D(tSrc, vUv - uDir * 1.3846153846).rgb) * 0.3162162162;
    s += (texture2D(tSrc, vUv + uDir * 3.2307692308).rgb + texture2D(tSrc, vUv - uDir * 3.2307692308).rgb) * 0.0702702703;
    gl_FragColor = vec4(s, 1.0);
  }`,tS=`
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
  }`,eS=`
  uniform sampler2D tSrc; uniform vec2 uTexel;
  varying vec2 vUv;
  void main() {
    float m = 0.0;
    for (int y = 0; y < 4; y++) for (int x = 0; x < 4; x++)
      m = max(m, -texture2D(tSrc, vUv + (vec2(float(x), float(y)) - 1.5) * uTexel).a);
    gl_FragColor = vec4(m, 0.0, 0.0, 1.0);
  }`,nS=`
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
  }`,iS=`
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
  }`,sS=`
  uniform sampler2D tScene, tDepth; uniform float uNear, uFar, uAspect; uniform vec2 uSun;
  varying vec2 vUv;
  void main() {
    float d = texture2D(tDepth, vUv).x;
    float z = uNear * uFar / (uFar - d * (uFar - uNear));
    float sky = smoothstep(0.88, 0.97, z / uFar);
    float l = dot(texture2D(tScene, vUv).rgb, vec3(0.3, 0.59, 0.11));
    vec2 dd = (vUv - uSun) * vec2(uAspect, 1.0);
    gl_FragColor = vec4(vec3(sky * exp(-dot(dd, dd) * 7.0) * smoothstep(0.08, 1.2, l)), 1.0);
  }`,rS=`
  uniform sampler2D tSrc; uniform vec2 uSun; uniform float uLen;
  varying vec2 vUv;
  void main() {
    vec2 step = (vUv - uSun) * uLen / 32.0, uv = vUv;
    vec3 s = vec3(0.0); float w = 1.0, tot = 0.0;
    for (int i = 0; i < 32; i++) { s += texture2D(tSrc, uv).rgb * w; tot += w; w *= 0.965; uv -= step; }
    gl_FragColor = vec4(s / tot, 1.0);
  }`,aS=`
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
  }`,oS=`
  uniform sampler2D tScene, tBloom, tDof, tRays;
  uniform vec3 uRayCol;
  uniform float uFx, uCine, uTime, uAspect, uDof;
  uniform vec2 uRes;
  varying vec2 vUv;
  ${ev}
  float hash12(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
  vec3 sceneAt(vec2 uv) {
    vec3 s = texture2D(tScene, uv).rgb;
    if (uDof > 0.0) { vec4 d = texture2D(tDof, uv); s = mix(s, d.rgb, clamp(d.a, 0.0, 1.0) * uDof); }
    return s;
  }
  ${aS}
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
  }`,lh=class{constructor(t,e=4){this.renderer=t,this.enabled=!0,this.samples=e,this.scene=new ds,this.cam=new Ns(-1,1,1,-1,0,1);let n=(s,a)=>new we({uniforms:s,vertexShader:ZT,fragmentShader:a,depthTest:!1,depthWrite:!1,toneMapped:!1}),i={value:1};this.exposure=i,this.bright=n({tSrc:{value:null},uTexel:{value:new ht},uThresh:{value:.92},uExposure:i},QT),this.blur=n({tSrc:{value:null},uDir:{value:new ht}},$T),this.dofPrep=n({tScene:{value:null},tDepth:{value:null},uTexel:{value:new ht},uNear:{value:.1},uFar:{value:1e3},uFocus:{value:10},uFocusRange:{value:0},uCocK:{value:0},uMaxCoc:{value:24}},tS),this.dofTile=n({tSrc:{value:null},uTexel:{value:new ht}},eS),this.dofDilate=n({tSrc:{value:null},uTexel:{value:new ht}},nS),this.dofBlur=n({tSrc:{value:null},tNear:{value:null},uTexelFull:{value:new ht},uMaxCoc:{value:24},uN:{value:24}},iS),this.final=n({tScene:{value:null},tBloom:{value:null},tDof:{value:null},uDof:{value:0},uExposure:i,tRays:{value:null},uRayCol:{value:new it(0,0,0)},uGlass:{value:0},uRearGlass:{value:0},tDepth:{value:null},uNear:{value:.1},uFar:{value:1e3},uTanF:{value:1},uInvVP:{value:new wt},uCamPos:{value:new T},uCamFwd:{value:new T},uGC:{value:new T},uGN:{value:new T},uGU:{value:new T},uGV:{value:new T},uBlade:{value:new fe},uGB:{value:new fe},uPiv:{value:new fe},uWipe:{value:new fe},uRest:{value:new fe},uSweep:{value:1.6},uFlow:{value:new ht},tGlassMask:{value:null},uFx:{value:0},uCine:{value:0},uTime:{value:0},uAspect:{value:1},uRes:{value:new ht(1,1)}},oS),this.rayMask=n({tScene:{value:null},tDepth:{value:null},uNear:{value:.1},uFar:{value:1e3},uAspect:{value:1},uSun:{value:new ht}},sS),this.rayBlur=n({tSrc:{value:null},uSun:{value:new ht},uLen:{value:1}},rS),this.rays={uv:new ht(.5,.5),color:new it(0,0,0),near:.1,far:1e3},this.quad=new Gt(new ai(2,2),this.bright),this.quad.frustumCulled=!1,this.scene.add(this.quad),this.size=new ht,this.rts={},this.sceneRT=new _n(16,16,{type:Zn,samples:e,depthBuffer:!0,depthTexture:new va(16,16,zi)}),this.glassScene=new ds,this.glassMaterial=new we({uniforms:{tDepth:{value:this.sceneRT.depthTexture},uRes:{value:this.size},uNear:{value:.1},uFar:{value:1e3}},side:Me,depthTest:!1,depthWrite:!1,toneMapped:!1,vertexShader:`
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
        }`}),this.glassMesh=new Gt(new Rt,this.glassMaterial),this.glassMesh.matrixAutoUpdate=!1,this.glassScene.add(this.glassMesh),this._clearColor=new it,this.resize()}_rt(t,e,n,i=!1){let s=this.rts[t];return s?s.setSize(e,n):s=this.rts[t]=new _n(e,n,{type:i?Zn:Oi,minFilter:hn,magFilter:hn,depthBuffer:!1,stencilBuffer:!1}),s}resize(){this.renderer.getDrawingBufferSize(this.size);let t=this.size.x,e=this.size.y;this.sceneRT.setSize(t,e);let n=Math.max(16,Math.ceil(t/4)),i=Math.max(16,Math.ceil(e/4));this._rt("bloomA",n,i),this._rt("bloomB",n,i);let s=Math.max(16,Math.ceil(t/2)),a=Math.max(16,Math.ceil(e/2));this._rt("prep",s,a,!0),this._rt("dof",s,a,!0);let o=Math.max(4,Math.ceil(s/4)),c=Math.max(4,Math.ceil(a/4));this._rt("tile",o,c,!0),this._rt("near",o,c,!0),this._rt("rayA",n,i),this._rt("rayB",n,i);let l=this._rt("glass",t,e,!0);l.texture.minFilter=l.texture.magFilter=an,this.final.uniforms.tGlassMask.value=l.texture,this.rayMask.uniforms.uAspect.value=t/e,this.bright.uniforms.uTexel.value.set(1/n,1/i),this.dofPrep.uniforms.uTexel.value.set(1/t,1/e),this.dofTile.uniforms.uTexel.value.set(1/s,1/a),this.dofDilate.uniforms.uTexel.value.set(1/o,1/c),this.dofBlur.uniforms.uTexelFull.value.set(1/t,1/e),this.final.uniforms.uAspect.value=t/e,this.final.uniforms.uRes.value.set(t,e)}setSamples(t){this.sceneRT.samples!==t&&(this.sceneRT.samples=t,this.sceneRT.dispose())}get longSide(){return Math.max(this.size.x,this.size.y)}_pass(t,e){this.quad.material=t,this.renderer.setRenderTarget(e),this.renderer.render(this.scene,this.cam)}begin(){this.renderer.setRenderTarget(this.sceneRT)}renderGlassMask(t,e,n){let i=this.final.uniforms;if(i.uRearGlass.value<.5||i.uGlass.value<=0||!n?.geometry)return;this.glassMesh.geometry=n.geometry,this.glassMesh.matrix.copy(e.matrixWorld),this.glassMaterial.uniforms.uNear.value=t.near,this.glassMaterial.uniforms.uFar.value=t.far;let s=this.renderer,a=s.getClearAlpha();s.getClearColor(this._clearColor),s.setClearColor(0,0),s.setRenderTarget(this.rts.glass),s.render(this.glassScene,t),s.setClearColor(this._clearColor,a)}render(t,e,n,i){let s=this.renderer,a=this.blur.uniforms,o=this.sceneRT.texture;this.exposure.value=s.toneMappingExposure;let c=!1;if(i&&i.amt>.01&&i.samples>0&&i.cocK>.05){c=!0;let u=this.dofPrep.uniforms;u.tScene.value=o,u.tDepth.value=this.sceneRT.depthTexture,u.uNear.value=i.near,u.uFar.value=i.far,u.uFocus.value=i.focus,u.uFocusRange.value=i.range||0,u.uCocK.value=i.cocK,u.uMaxCoc.value=i.maxCoc,this._pass(this.dofPrep,this.rts.prep),this.dofTile.uniforms.tSrc.value=this.rts.prep.texture,this._pass(this.dofTile,this.rts.tile),this.dofDilate.uniforms.tSrc.value=this.rts.tile.texture,this._pass(this.dofDilate,this.rts.near);let d=this.dofBlur.uniforms;d.tSrc.value=this.rts.prep.texture,d.tNear.value=this.rts.near.texture,d.uMaxCoc.value=i.maxCoc,d.uN.value=i.samples,this._pass(this.dofBlur,this.rts.dof)}if(e>.01){let u=this.rts.bloomA,d=this.rts.bloomB;this.bright.uniforms.tSrc.value=o,this._pass(this.bright,u);for(let g=0;g<2;g++)a.tSrc.value=u.texture,a.uDir.value.set((2.2+g)/u.width,0),this._pass(this.blur,d),a.tSrc.value=d.texture,a.uDir.value.set(0,(1.2+g*.6)/u.height),this._pass(this.blur,u)}let l=this.rays,h=l.color.r+l.color.g+l.color.b>.002;if(h){let u=this.rayMask.uniforms,d=this.rayBlur.uniforms;u.tScene.value=o,u.tDepth.value=this.sceneRT.depthTexture,u.uNear.value=l.near,u.uFar.value=l.far,u.uSun.value.copy(l.uv),this._pass(this.rayMask,this.rts.rayA),d.uSun.value.copy(l.uv),d.tSrc.value=this.rts.rayA.texture,d.uLen.value=.85,this._pass(this.rayBlur,this.rts.rayB),d.tSrc.value=this.rts.rayB.texture,d.uLen.value=.85/10,this._pass(this.rayBlur,this.rts.rayA)}let f=this.final.uniforms;f.tScene.value=o,f.tRays.value=this.rts.rayA.texture,f.tDepth.value=this.sceneRT.depthTexture,h?f.uRayCol.value.copy(l.color):f.uRayCol.value.setRGB(0,0,0),f.tBloom.value=this.rts.bloomA.texture,f.tDof.value=this.rts.dof.texture,f.uDof.value=c?i.amt:0,f.uCine.value=e,f.uFx.value=n,f.uTime.value=t,this._pass(this.final,null)}};var hh=class{constructor(t){this.renderer=t,this.cam=new We,this.cam.layers.set(0),this.rt=new _n(16,16,{type:Zn}),this.texMatrix=new wt,this.planeY=0,this.active=!1,this.enabled=!0,this._v=new T,this._d=new T,this._u=new T,this._plane=new Ai,this._clip=new fe,this._q=new fe,this._size=new ht}resize(){this.renderer.getDrawingBufferSize(this._size),this.rt.setSize(Math.max(16,Math.floor(this._size.x/2)),Math.max(16,Math.floor(this._size.y/2)))}render(t,e,n){if(this.active=!1,!this.enabled||e.position.y<n+.05)return;this.planeY=n;let i=this.cam,s=e.position;i.position.set(s.x,2*n-s.y,s.z);let a=this._d.set(0,0,-1).applyQuaternion(e.quaternion),o=this._u.set(0,1,0).applyQuaternion(e.quaternion);i.up.set(o.x,-o.y,o.z),i.lookAt(this._v.set(i.position.x+a.x,i.position.y-a.y,i.position.z+a.z)),i.near=e.near,i.far=e.far,i.updateMatrixWorld(),i.projectionMatrix.copy(e.projectionMatrix),this.texMatrix.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),this.texMatrix.multiply(i.projectionMatrix).multiply(i.matrixWorldInverse);let c=this._plane.setFromNormalAndCoplanarPoint(this._v.set(0,1,0),this._d.set(s.x,n,s.z));c.applyMatrix4(i.matrixWorldInverse);let l=this._clip.set(c.normal.x,c.normal.y,c.normal.z,c.constant),h=i.projectionMatrix.elements,f=this._q.set((Math.sign(l.x)+h[8])/h[0],(Math.sign(l.y)+h[9])/h[5],-1,(1+h[10])/h[14]);l.multiplyScalar(2/l.dot(f)),h[2]=l.x,h[6]=l.y,h[10]=l.z+1-.003,h[14]=l.w,i.projectionMatrixInverse.copy(i.projectionMatrix).invert();let u=this.renderer,d=u.getRenderTarget(),g=u.shadowMap.autoUpdate;u.shadowMap.autoUpdate=!1,u.setRenderTarget(this.rt),u.render(t,i),u.setRenderTarget(d),u.shadowMap.autoUpdate=g,this.active=!0}};var Go=class r{constructor(){this.root=new Dt,this.tilt=new Dt,this.root.add(this.tilt),this.root.visible=!1,this.ready=!1,this.actions={},this.current=null,this.headOffsetSit=new T,this.hipOffsetSit=new T,this.footShade={value:0}}async load(t,{chisa:e=!1}={}){let n=new Ys;n.setMeshoptDecoder(Na);let i=await n.loadAsync(t),s=i.scene;this.model=s,this.seatRecline=e?0:null,s.traverse(h=>{if(!h.isMesh)return;h.castShadow=!0,h.receiveShadow=!0,h.frustumCulled=!1;let f=Array.isArray(h.material)?h.material:[h.material];for(let u of f)u.envMapIntensity=.6,ge(u)}),this.tilt.add(s);let a=h=>e?s.getObjectByName(gS(s,h)):s.getObjectByName(h);this.head=a("Head"),this.neck=a("neck_01"),this.arms={l:["upperarm_l","lowerarm_l","hand_l"].map(a),r:["upperarm_r","lowerarm_r","hand_r"].map(a)},this.arms.l.some(h=>!h)&&(this.arms.l=null),this.arms.r.some(h=>!h)&&(this.arms.r=null),this.legs={l:["thigh_l","calf_l","foot_l"].map(a),r:["thigh_r","calf_r","foot_r"].map(a)},this.balls={l:a("ball_l"),r:a("ball_r")},(this.legs.l.some(h=>!h)||this.legs.r.some(h=>!h))&&(this.legs=null),this.spine=a("spine_01"),this.pelvis=a("pelvis"),this.gripFingers={l:a("middle_01_l"),r:a("middle_01_r")},this.gripKnuckles={l:[a("index_01_l"),a("pinky_01_l")],r:[a("index_01_r"),a("pinky_01_r")]},this.mixer=new wa(s);for(let h of i.animations)this.actions[h.name]=this.mixer.clipAction(h);s.updateMatrixWorld(!0);let o=new Qe().setFromObject(s,!0),c=o.max.y-o.min.y;s.scale.setScalar(nv/c),s.position.y=-o.min.y*(nv/c);let l=[];if(s.traverse(h=>{h.isMesh&&/eye/i.test(h.name+" "+(h.material?.name||""))&&l.push(h)}),l.length&&this.head){s.updateMatrixWorld(!0);let h=new Qe().setFromObject(l[0],!0).getCenter(new T),f=this.head.getWorldPosition(new T),u=h.sub(f);s.rotation.y=Math.atan2(-u.x,u.z)||0}s.updateMatrixWorld(!0),s.traverse(h=>{h.isSkinnedMesh&&/superhero|body/i.test(h.name+" "+h.material?.name)&&mS(h,s,this.footShade)}),this.bindRotations=new Map,s.traverse(h=>{h.isBone&&this.bindRotations.set(h.name,h.getWorldQuaternion(new Xt))}),this.fingers={},this.thumbs={};for(let h of["l","r"]){this.fingers[h]=["index","middle","ring","pinky"].flatMap(u=>[2,3].map(d=>a(`${u}_0${d}_${h}`))).filter(Boolean).map(u=>({b:u,rest:u.quaternion.clone()}));let f=["thumb_01","thumb_02","thumb_03","thumb_04_leaf"].map(u=>a(u+"_"+h));this.thumbs[h]=f.every(Boolean)?{bones:f,rest:f[2].quaternion.clone()}:null}return e&&(this.reference=await new r().load("assets/models/person.glb"),this.actions=this.reference.actions,this.mixer=this.reference.mixer,this.current=this.reference.current,this.retargetPairs=[],s.traverse(h=>{if(!h.isBone)return;let f=av(h.name),u=f&&this.reference.model.getObjectByName(f);u&&this.retargetPairs.push({bone:h,from:u,sourceBind:this.reference.bindRotations.get(f).clone().invert(),targetBind:this.bindRotations.get(h.name).clone()})})),this.play("Driving_Loop",0),this.mixer.update(.01),this.applyRetarget(),this.root.updateMatrixWorld(!0),this.headOffsetSit.copy(this.head.getWorldPosition(new T)),this.root.worldToLocal(this.headOffsetSit),this.pelvis&&this.root.worldToLocal(this.pelvis.getWorldPosition(this.hipOffsetSit)),this.ready=!0,this}play(t,e=.35,{once:n=!1,timeScale:i=1}={}){let s=this.actions[t];return!s||s===this.current||(s.reset(),s.setLoop(n?Pf:Lf,1/0),s.clampWhenFinished=n,s.timeScale=i,s.enabled=!0,s.setEffectiveWeight(1),this.current&&e>0?s.crossFadeFrom(this.current,e,!1):this.current&&this.current.stop(),s.play(),this.current=s),s}duration(t){return this.actions[t]?.getClip().duration??1}update(t){this.mixer&&this.root.visible&&(this.mixer.update(t),this.applyRetarget())}applyRetarget(){if(!this.retargetPairs)return;this.reference.root.updateMatrixWorld(!0),this.root.updateMatrixWorld(!0);let t=this.root.getWorldQuaternion(new Xt);for(let{bone:e,from:n,sourceBind:i,targetBind:s}of this.retargetPairs)n.getWorldQuaternion(Js).multiply(i).multiply(s).premultiply(t),e.parent.getWorldQuaternion(Yi),e.quaternion.copy(Yi.invert().multiply(Js)),e.updateMatrixWorld(!0)}replace(t){let e=this.root,n=e.visible;this.dispose(),e.clear();for(let i of Object.keys(t))i!=="root"&&(this[i]=t[i]);e.add(this.tilt),e.visible=n,this.root=e}dispose(){this.mixer?.stopAllAction();let t=new Set;for(let e of[this.model,this.reference?.model])e?.traverse(n=>{if(n.isMesh){n.geometry.dispose();for(let i of Array.isArray(n.material)?n.material:[n.material]){for(let s of Object.values(i))s?.isTexture&&t.add(s);i.dispose()}}});t.forEach(e=>e.dispose()),delete this.reference,delete this.retargetPairs,delete this._spIn,delete this._spOut}faceGrip(t,e,n=null){let i=this.arms?.[t]?.[2],s=this.gripFingers?.[t];if(!i||!s)return;i.getWorldPosition(Bn),s.getWorldPosition(li),Bn.subVectors(li,Bn).normalize(),li.copy(e).negate(),uh(i,Bn,li),i.updateMatrixWorld(!0);let a=this.gripKnuckles?.[t];if(n&&a?.every(Boolean)){a[0].getWorldPosition(Bn),a[1].getWorldPosition(li),Bn.sub(li).addScaledVector(e,-Bn.dot(e)).normalize(),li.copy(n).addScaledVector(e,-n.dot(e)).normalize();let o=Math.atan2(rv.crossVectors(Bn,li).dot(e),Bn.dot(li));za.setFromAxisAngle(e,o),i.getWorldQuaternion(Js),i.parent.getWorldQuaternion(Yi),i.quaternion.copy(Yi.invert().multiply(za.multiply(Js))),i.updateMatrixWorld(!0)}}looseGrip(t,e,n,i){for(let{b:a,rest:o}of this.fingers?.[t]||[])a.quaternion.slerp(o,e);let s=this.thumbs?.[t];if(s&&n){s.bones[2].quaternion.slerp(s.rest,.5),s.bones[0].updateMatrixWorld(!0);let[a,o,,c]=s.bones.map(u=>u.getWorldPosition(new T)),l=.82*(a.distanceTo(o)+o.distanceTo(c)),h=0,f=.2;for(let u=0;u<16;u++){let d=(h+f)/2;n(d,sv).distanceTo(a)<l?h=d:f=d}Yd([s.bones[0],s.bones[1],s.bones[3]],n(h,sv),i)}this.arms?.[t]?.[2].updateMatrixWorld(!0)}recline(t){if(t=this.seatRecline??t,!this.spine||!t)return;let e=this.spine.quaternion;this._spOut&&e.equals(this._spOut)&&e.copy(this._spIn),(this._spIn||(this._spIn=new Xt)).copy(e),this.root.getWorldQuaternion(Yi),Bn.set(1,0,0).applyQuaternion(Yi),za.setFromAxisAngle(Bn,-t),this.spine.getWorldQuaternion(Js),this.spine.parent.getWorldQuaternion(Yi),this.spine.quaternion.copy(Yi.invert().multiply(za.multiply(Js))),(this._spOut||(this._spOut=new Xt)).copy(e),this.spine.updateMatrixWorld(!0)}reachLeg(t,e,n,i=null){let s=this.legs?.[t];if(!s)return;Yd(s,e,n);let a=s[2],o=this.balls?.[t];i&&o&&(a.getWorldPosition(Bn),o.getWorldPosition(li),uh(a,li.sub(Bn).normalize(),Bn.copy(i).normalize()),a.updateMatrixWorld(!0))}reach(t,e,n=null){let i=this.arms?.[t];i&&Yd(i,e,n)}};function Yd(r,t,e){{let[n,i,s]=r,a=n.getWorldPosition(cS),o=i.getWorldPosition(lS),c=s.getWorldPosition(hS),l=a.distanceTo(o),h=o.distanceTo(c),f=rv.subVectors(t,a),u=f.length();f.multiplyScalar(1/u),u=Math.min(Math.max(u,Math.abs(l-h)+.001),l+h-.001);let d=(l*l+u*u-h*h)/(2*l*u),g=Math.sqrt(Math.max(0,1-d*d)),v=e?iv.copy(e):iv.subVectors(o,a);v.addScaledVector(f,-v.dot(f)),v.lengthSq()<1e-8&&v.set(0,-1,0),v.normalize();let m=uS.copy(a).addScaledVector(f,l*d).addScaledVector(v,l*g);uh(n,Bn.subVectors(o,a).normalize(),li.subVectors(m,a).normalize()),n.updateMatrixWorld(!0),i.getWorldPosition(o),s.getWorldPosition(c),uh(i,Bn.subVectors(c,o).normalize(),li.subVectors(t,o).normalize()),i.updateMatrixWorld(!0)}}var nv=1.7,cS=new T,lS=new T,hS=new T,rv=new T,iv=new T,uS=new T,Bn=new T,li=new T,sv=new T,za=new Xt,Js=new Xt,Yi=new Xt;function uh(r,t,e){za.setFromUnitVectors(t,e),r.getWorldQuaternion(Js),r.parent.getWorldQuaternion(Yi),r.quaternion.copy(Yi.invert().multiply(za.multiply(Js)))}var fS=new it("#1c1c1f"),dS=new it("#2f4366"),pS=new it("#dedad2");function mS(r,t,e){let n=r.geometry,i=n.attributes.skinIndex,s=n.attributes.skinWeight,a=n.attributes.position;if(!i||!s)return;let o=r.skeleton.bones,c=o.find(p=>p.name==="pelvis"),l=c?c.getWorldPosition(new T).y:.9,h=o.map(p=>/foot|ball/i.test(p.name)?3:/thigh|calf/i.test(p.name)?2:/lowerarm|hand|index|middle|ring|pinky|thumb|neck|head/i.test(p.name)?0:/pelvis/i.test(p.name)?4:1),f=new Float32Array(a.count*4),u=new Float32Array(a.count),d=new T;for(let p=0;p<a.count;p++){let x=0,y=-1;for(let b=0;b<4;b++){let w=s.getComponent(p,b);w>y&&(y=w,x=i.getComponent(p,b))}let _=h[x];_===4&&(d.fromBufferAttribute(a,p).applyMatrix4(r.matrixWorld),_=d.y<l+.09?2:1);let M=_===1?fS:_===2?dS:_===3?pS:null;M&&(f[p*4]=M.r,f[p*4+1]=M.g,f[p*4+2]=M.b,f[p*4+3]=1),u[p]=_===3?1:0}n.setAttribute("aGarment",new At(f,4)),n.setAttribute("aShoe",new At(u,1));let g=r.material,v=g.onBeforeCompile;g.onBeforeCompile=(p,x)=>{v?.call(g,p,x),p.uniforms.uFootShade=e,p.vertexShader=p.vertexShader.replace("#include <common>",`#include <common>
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
roughnessFactor = mix(roughnessFactor, 0.88, vGarment.a);`).replace("mapN.xy *= normalScale;","mapN.xy *= normalScale * (1.0 - 0.8 * vGarment.a);")};let m=g.customProgramCacheKey?.bind(g);g.customProgramCacheKey=()=>(m?m():"")+"|garment"}function av(r){let t=r.replace(/_\d+$/,""),e={Bip001Pelvis:"pelvis",Bip001Spine:"spine_01",Bip001Spine1:"spine_02",Bip001Spine2:"spine_03",Bip001Neck:"neck_01",Bip001Head:"Head"};if(e[t])return e[t];let n=t.match(/^Bip001([LR])(Clavicle|UpperArm|Forearm|Hand|Thigh|Calf|Foot|Toe0)$/);if(n)return{Clavicle:"clavicle",UpperArm:"upperarm",Forearm:"lowerarm",Hand:"hand",Thigh:"thigh",Calf:"calf",Foot:"foot",Toe0:"ball"}[n[2]]+"_"+n[1].toLowerCase();let i=t.match(/^Bip001([LR])Finger([0-4])([12])?$/);return i?["thumb","index","middle","ring","pinky"][+i[2]]+"_0"+(+(i[3]||0)+1)+"_"+i[1].toLowerCase():null}function gS(r,t){let e;return r.traverse(n=>{n.isBone&&av(n.name)===t&&(e=n.name)}),e}var fh=r=>Math.min(1,Math.max(0,r)),gn=r=>(r=fh(r),r*r*(3-2*r)),Jd=(r,t,e)=>r+(t-r)*e,Ji=(r,t,e)=>{let n=((t-r+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI;return r+n*e},Vo=Math.PI,Zd=-Math.PI/2,ov=0,Wo=Math.PI/2,Qd=-Math.PI*.75,Sr=1.1,Ar=new T(0,1,0),vS=2.25,cv=5,Oa=26,lv=16,xS=35,hv=20,qo=25,bS=9,$d=18,yS=2,uv=8,_S=12,MS=12,ES=12,dh=class{constructor(t,e){this.cars=t,this.person=e,this.state="off",this.t=0,this.v0=0,this.stopT=-1,this.seat=new T,this.out=new T,this.walkEnd=new T,this.lean=new T,this.corner=new T,this.stand=new T,this.smokeU=-1,this.smoking={on:!1,lit:!1,drag:0,flame:0,exhale:!1,atMouth:0,err:new T,errOK:!1,F:new T,R:new T,mouth:new T},this.handW=0,this.handT=new T,this.closeK=0,this.autoZoom={t:0,on:!0},this.wideK=0,this.zoom={focal:Oa,back:0,near:0,focalS:Oa,backS:0,nearS:0},this.orbitA=null,this.orbitHold=0,this.enterRadius=10,this.cyc={t:0,n:0,rest:uv},this.mouthCorr=new T,this.wd={mode:"idle",t:0,dur:4,face:null,target:new T},this.lk={t:0,ty:0,tp:0,y:0,p:0},this._q1=new Xt,this._q2=new Xt,this._q3=new Xt,this._q4=new Xt,this._pole=new T,this._A=new T,this._O=new T,this._H=new T,this._t1=new T,this._t2=new T,this.shot={pos:new T,look:new T},this.cam={pos:new T,look:new T,focus:new T,focal:28,range:2},this._p=new T,this._l=new T,this._w=new T}get active(){return this.state!=="off"}get busy(){return this.state==="stopping"||this.state==="exit"||this.state==="enter"}place(t){let e=this.person.headOffsetSit,[n,i,s]=t.eye;if(t.seat?.hip){let a=this.person.hipOffsetSit,[o,c,l]=t.seat.hip;this.seat.set(o+a.x,c-a.y,l+a.z)}else this.seat.set(n+e.x,i-.1-e.y,s+.06+e.z);this.out.set(-t.width/2-.5,0,this.seat.z-.1),this.lean.set(-t.width/2-.16,0,-t.length/2+1.05),this.walkEnd.set(this.lean.x-.3,0,this.lean.z),this.corner.set(-t.width/2-.55,0,-t.length/2-.75),this.stand.set(-.15,0,-t.length/2-1.2)}sit(){let t=this.person;t.ready&&(t.root.position.copy(this.seat),t.root.rotation.set(0,Vo,0),t.tilt.rotation.set(0,0,0),t.play("Driving_Loop",0))}toggle(t){return this.state==="off"?(this.state="stopping",this.t=0,this.v0=Math.max(t,.5),this.stopT=-1,this.smokeU=-1,this.handW=0,this.wd.mode="idle",this.wd.t=0,this.wd.dur=3+Math.random()*3,this.wd.face=null,this.lk.t=1,!0):this.state==="parked"?(this.stand.copy(this.person.root.position),this.enterYaw=this.person.root.rotation.y,this.enterRadius=Math.max(1,10+this.zoom.backS-this.zoom.nearS),this.autoZoom.on=!1,this.state="enter",this.t=0,!0):!1}zoomBy(t){if(this.wideK<.3)return!1;this.autoZoom.on=!1,this.noteCameraInput();let e=this.zoom,n=Math.log(t);if(n>0){let i=Math.min(n,e.near/$d);e.near-=i*$d,n-=i;let s=Math.log(e.focal/lv),a=Math.min(n,s);e.focal/=Math.exp(a),n-=a,n>0&&(e.back=Math.min(hv,e.back+n*qo))}else if(n<0){let i=Math.min(-n,e.back/qo);if(e.back-=i*qo,n+=i,n<0){let s=Math.log(xS/e.focal),a=Math.min(-n,s);e.focal*=Math.exp(a),n+=a}n<0&&(e.near=Math.min(bS,e.near-n*$d)),e.back<1e-6&&(e.back=0)}return!0}noteCameraInput(){this.wideK>=.3&&(this.orbitHold=yS)}speed(t,e){return this.state!=="stopping"?0:Math.max(0,t-Math.max(1.5,this.v0/3.2)*e)}update(t,e,n){let i=this._update(t,e,n);return this._ground(),i}_ground(){let t=this.person,e=t.root;if(this._lastY!==void 0&&Math.abs(e.position.y-this._lastY)<1e-7&&(e.position.y-=this._applied||0),this._applied=0,!this.groundAt||!t.ready||this.state==="off"||this.state==="stopping"||e.position.y>.3){this.lift=0,this._lastY=void 0;return}if(this._feet||(this._feet=[],e.traverse(s=>{s.isBone&&/^ball_(l|r)$/.test(s.name)&&this._feet.push(s)})),!this._feet.length)return;e.position.y+=this.lift||0,e.updateMatrixWorld(!0);let n=1/0;for(let s of this._feet)n=Math.min(n,s.getWorldPosition(this._t2).y-.027);e.getWorldPosition(this._t1);let i=this.groundAt(this._t1.x,this._t1.z)-n;e.position.y-=this.lift||0,this.lift=Math.max(-.3,Math.min(.5,(this.lift||0)+Math.max(-.04,Math.min(.04,i)))),e.position.y+=this.lift,this._applied=this.lift,this._lastY=e.position.y}_update(t,e,n){this.t+=t;let i=this.cars.dim,s=this.cam,a=this._p,o=this._l;if(this.state==="stopping"){let c=this.cars.frontWheel(this._w),l=gn(this.t/5);a.set(c.x-1.55+.3*l,.34,c.z-1.1+.2*l),o.set(c.x+.05,c.y*.92,c.z+.08),s.focus.copy(c),e.localToWorld(s.focus),s.focal=45,s.range=.35,n<=.01&&this.stopT<0&&(this.stopT=this.t),this.stopT>=0&&this.t-this.stopT>.9&&this._enterState("exit",i)}else this.state==="exit"?this._exit(i,t):this.state==="enter"?this._enter(i,t):this.state==="parked"&&this.smokeU>3.4&&this._wander(t,i);this.smokeU>=0&&this.state!=="enter"&&this._smoke(t),this._hand(),this._look(t),this.state!=="stopping"?this._camera(t,e):(s.pos.copy(a),e.localToWorld(s.pos),s.look.copy(o),e.localToWorld(s.look))}_enterState(t,e){this.state=t,this.t=0,t==="exit"&&(this.shot.pos.set(-e.width/2-4.2,1.45,this.seat.z-2.7),this.shot.look.set(-e.width/2-.25,.95,this.seat.z-.6),this.closeK=0,this.wideK=0,this.orbitA=null,this.mouthCorr.set(0,0,0),Object.assign(this.zoom,{focal:Oa,back:0,near:0,focalS:Oa,backS:0,nearS:0}),this.orbitHold=0,this.autoZoom.t=0,this.autoZoom.on=!0)}_camera(t,e){let n=this.cam,i=this.state==="exit"&&this.t>=vS||this.state==="parked"||this.state==="enter"?1:0;this.wideK+=(i-this.wideK)*(1-Math.exp(-t*.9));let s=this.zoom,a=this.autoZoom;if(i&&a.on){a.t+=t;let u=Math.log(Oa/lv),d=gn(a.t/cv)*(u+hv/qo);s.focal=Oa/Math.exp(Math.min(d,u)),s.back=Math.max(0,d-u)*qo,s.near=0,a.t>=cv&&(a.on=!1)}let o=1-Math.exp(-t*6);s.focalS+=(s.focal-s.focalS)*o,s.backS+=(s.back-s.backS)*o,s.nearS+=(s.near-s.nearS)*o;let c=gn(this.wideK),l=this.person.root.position,h=this._p.copy(this.shot.pos),f=this._l.set(l.x,1.2,l.z);if(e.localToWorld(h),e.localToWorld(f),this.person.head.getWorldPosition(n.focus),n.focal=32,n.range=.8,c>.001){let u=this.person.root.getWorldPosition(this._t1).addScaledVector(Ar,.95);this.orbitA===null&&(this.orbitA=Math.atan2(h.x-u.x,h.z-u.z)),this.orbitHold>0?this.orbitHold=Math.max(0,this.orbitHold-t):this.orbitA+=t*.1*c;let d=Math.max(1,10+s.backS-s.nearS);if(this.state==="enter"){let p=.6+this.stand.distanceTo(this.corner)/Sr+this.corner.distanceTo(this.out)/Sr;d=Jd(this.enterRadius,1,gn(this.t/p))}let g=d*.28,v=Math.sqrt(Math.max(0,d*d-g*g)),m=this._w.set(Math.sin(this.orbitA)*v,g,Math.cos(this.orbitA)*v).add(u);h.lerp(m,c),f.lerp(u,c),n.focal=Jd(n.focal,s.focalS,c),n.range=Jd(n.range,.9,c)}else this.orbitA=null;n.pos.copy(h),n.look.copy(f)}_exit(t,e){let n=this.person,i=this.t,s=n.root;if(i<2.3&&this.cars.setDoor(fh(i/1.1)),i<1){s.position.copy(this.seat),s.rotation.y=Ji(Vo,Zd,gn((i-.45)/.6));return}let a=1,o=1.25;if(i<a+o){n.play("Sitting_Exit",.25,{once:!0,timeScale:n.duration("Sitting_Exit")/o});let d=gn((i-a)/o);s.position.lerpVectors(this.seat,this.out,d),s.rotation.y=Zd;return}let c=a+o,l=1;if(i<c+l){n.play("Idle_Loop",.3),s.position.copy(this.out),s.rotation.y=Ji(Zd,Qd,gn((i-c)/.35)),this.cars.setDoor(1-gn((i-c-.25)/.6));return}this.cars.setDoor(0);let h=c+l,f=this.out.distanceTo(this.corner)/Sr,u=this.corner.distanceTo(this.stand)/Sr;if(n.tilt.rotation.x=0,i<h+f+u){n.play("Walk_Loop",.3),this._walk(s,[this.out,this.corner,this.stand],[f,u],i-h,e);return}n.play("Idle_Loop",.4),s.position.copy(this.stand),this.smokeU<0&&(this.smokeU=0,this.turnFrom=s.rotation.y,this.cyc.t=0,this.cyc.n=0,this.cyc.rest=uv),s.rotation.y=Ji(this.turnFrom,Wo,gn(this.smokeU/.6)),this.smokeU>.8&&(this.state="parked")}_walk(t,e,n,i,s){let a=0;for(;a<n.length-1&&i>n[a];)i-=n[a],a++;let o=e[a],c=e[a+1],l=fh(i/n[a]);t.position.lerpVectors(o,c,l);let h=Math.atan2(c.x-o.x,c.z-o.z);t.rotation.y=Ji(t.rotation.y,h,Math.min(1,s*7))}_smoke(t){let e=this.smokeU+=t,n=this.person,i=this.smoking;if(!n.arms?.r)return;n.root.updateMatrixWorld(!0);let s=n.root.getWorldPosition(this._O),a=n.root.getWorldDirection(i.F).setY(0).normalize(),o=i.R.crossVectors(a,Ar).normalize();n.head.getWorldPosition(this._H);let c=i.mouth.copy(this._H).addScaledVector(a,.1),l=this._t1.copy(s).addScaledVector(o,.2).addScaledVector(Ar,.92),h=this._t2.copy(s).addScaledVector(o,.27).addScaledVector(Ar,.97).addScaledVector(a,.1),f=this._A.copy(c).addScaledVector(a,.1).addScaledVector(o,.1).addScaledVector(Ar,-.12);i.atMouth>.9&&i.errOK&&(this.mouthCorr.addScaledVector(i.err,Math.min(1,t*8)),this.mouthCorr.length()>.2&&this.mouthCorr.setLength(.2)),f.add(this.mouthCorr);let u=this.handT;if(i.flame=0,i.drag=0,i.exhale=!1,i.atMouth=0,e<.6){this.handW=0,i.on=!1;return}if(e<1.4){u.copy(l),this.handW=gn((e-.6)/.6),i.on=e>1.25;return}if(i.on=!0,this.handW=1,e<2.2){let x=gn((e-1.4)/.8);u.lerpVectors(l,f,x),i.atMouth=x;return}if(e<3){u.copy(f),i.atMouth=1,i.flame=e>2.3&&e<2.85?1:0,i.lit=e>2.65,i.drag=i.lit?1:0;return}i.lit=!0;let d=this.cyc;d.t+=t;let g=.8+d.rest+.8+1.3;d.t>=g&&(d.t-=g,d.n++,d.rest=d.n===1?_S:MS+Math.random()*ES);let v=d.t,m=.8+d.rest,p=m+.8;if(v<.8){let x=gn(v/.8);u.lerpVectors(f,h,x),i.atMouth=1-x}else if(v<m)u.copy(h);else if(v<p){let x=gn((v-m)/.8);u.lerpVectors(h,f,x),i.atMouth=x}else u.copy(f),i.drag=1,i.atMouth=1;i.exhale=v>.6&&v<1.6}_wander(t,e){let n=this.person,i=n.root,s=this.wd;if(s.t+=t,s.mode==="idle"){if(n.play("Idle_Loop",.4),s.face!==null&&(i.rotation.y=Ji(i.rotation.y,s.face,Math.min(1,t*1.6))),s.t>s.dur){if(s.t=0,Math.random()<.6&&this._pickTarget(e)){s.mode="walk";return}s.dur=3+Math.random()*6,s.face=Math.random()<.5?i.rotation.y+(Math.random()-.5)*1.6:null}return}n.play("Walk_Loop",.35,{timeScale:.85});let a=this._t1.subVectors(s.target,i.position).setY(0),o=a.length(),c=Math.atan2(a.x,a.z);i.rotation.y=Ji(i.rotation.y,c,Math.min(1,t*4));let l=Math.cos(i.rotation.y-c),h=Math.min(o,Sr*.8*t*Math.max(0,l));if(i.position.addScaledVector(a.normalize(),h),o<.05){s.mode="idle",s.t=0,s.dur=3+Math.random()*7;let f=Math.random();s.face=f<.5?Wo+(Math.random()-.5)*.9:f<.75?ov+(Math.random()-.5)*1.2:Vo+(Math.random()-.5)*1.2}}_pickTarget(t){let e=this.person.root.position,n=this.wd,i=-t.length/2-.9,s=-t.length/2-8;for(let a=0;a<12;a++){let o=Math.random()*Math.PI*2,c=1.5+Math.random()*3,l=e.x+Math.sin(o)*c,h=e.z+Math.cos(o)*c;if(!(l<-1.3||l>2.8||h>i||h<s||Math.hypot(l,h)>9.5))return n.target.set(l,0,h),!0}return!1}_look(t){let e=this.person,n=this.lk;if(!e.head)return;let i=this.state==="parked"&&this.smokeU>3.4;if(i&&(n.t-=t)<=0){n.t=1.5+Math.random()*3.5;let c=Math.random();c<.25?(n.ty=(Math.random()-.5)*.4,n.tp=.35+Math.random()*.25):c<.75?(n.ty=(Math.random()<.5?-1:1)*(.5+Math.random()*.45),n.tp=(Math.random()-.4)*.2):(n.ty=(Math.random()-.5)*.3,n.tp=(Math.random()-.5)*.15)}let s=i?1-this.smoking.atMouth:0,a=Math.min(1,t*2.2);if(n.y+=(n.ty*s-n.y)*a,n.p+=(n.tp*s-n.p)*a,Math.abs(n.y)+Math.abs(n.p)<.001)return;e.root.updateMatrixWorld(!0);let o=this._t2.set(1,0,0).applyQuaternion(e.root.getWorldQuaternion(this._q1));this._q2.setFromAxisAngle(Ar,n.y*.5).multiply(this._q3.setFromAxisAngle(o,-n.p*.5));for(let c of[e.neck,e.head])c&&(c.getWorldQuaternion(this._q1),c.parent.getWorldQuaternion(this._q4),c.quaternion.copy(this._q4.invert().multiply(this._q2.clone().multiply(this._q1))),c.updateMatrixWorld(!0))}_hand(){if(this.handW<=.001||!this.person.arms?.r)return;let t=this.smoking,e=t.atMouth,n=this._pole.copy(t.R).multiplyScalar(.55+.35*e).addScaledVector(t.F,-.65*(1-e)+.1*e).addScaledVector(Ar,-.35-.2*e),i=this.person.arms.r[2].getWorldPosition(this._A);this.person.reach("r",i.lerp(this.handT,this.handW),n)}_enter(t,e){let n=this.person,i=this.t,s=n.root;if(this.smoking.on=!1,this.smoking.lit=!1,this.handW=Math.max(0,this.handW-e*2.5),this.smokeU=-1,n.tilt.rotation.x=0,i<.6){n.play("Idle_Loop",.3),s.position.copy(this.stand),s.rotation.y=Ji(this.enterYaw??Wo,Math.atan2(this.corner.x-this.stand.x,this.corner.z-this.stand.z),gn(i/.6));return}let a=.6,o=this.stand.distanceTo(this.corner)/Sr,c=this.corner.distanceTo(this.out)/Sr,l=c+o;if(i<a+l){n.play("Walk_Loop",.3),this._walk(s,[this.stand,this.corner,this.out],[o,c],i-a,e);return}let h=a+l;if(i<h+1.1){n.play("Idle_Loop",.25),s.position.copy(this.out),s.rotation.y=i<h+.75?Ji(ov,Qd,gn((i-h)/.35)):Ji(Qd,Wo,gn((i-h-.75)/.35)),this.cars.setDoor(gn((i-h-.15)/.6));return}this.cars.setDoor(1);let f=h+1.1,u=1.4;if(i<f+u){n.play("Sitting_Enter",.25,{once:!0,timeScale:n.duration("Sitting_Enter")/u});let g=gn((i-f)/u);s.position.lerpVectors(this.out,this.seat,g),s.rotation.y=Ji(Wo,Vo,gn((i-f-.3)/(u-.3)));return}n.play("Driving_Loop",.4),s.position.copy(this.seat),s.rotation.y=Vo;let d=f+u;this.cars.setDoor(1-fh((i-d)/.9)),i>d+1&&(this.cars.setDoor(0),this.state="off")}};var ph=class{constructor(t){this.renderer=t;let e=.125,n=.09375;this.size=[e,n],this.rt=new _n(384,Math.round(384*n/e),{type:Zn}),this.cam=new We(30,e/n,.15,3e3),this.cam.layers.enable(3),this.group=new Dt,this.group.visible=!1;let i=new Gt(new re(e+.015,n+.011,.025),new Ut({color:1842206,roughness:.55}));i.position.z=-.015;let s=this.rt.texture;s.repeat.x=-1,s.offset.x=1;let a=new Gt(new ai(e,n),new en({map:s}));this.group.add(i,a),this._p=new T,this._q=new Xt,this._d=new T,this._eye=new T}place(t,e){let[n,i,s]=t.eye;e?(this.group.position.copy(e.pos),this.group.position.x+=Ql[0]/2+.014*.85/2+.02+(this.size[0]+.015)/2,this.group.position.y+=-Ql[1]/2-.03+this.size[1]/2+.055,this.group.position.z+=.025):this.group.position.set(.21,i-.28,s-.6);let a=this._eye.set(n,i,s).sub(this.group.position).normalize(),o=this._d.set(0,-.03,1).normalize().add(a).normalize();this.group.quaternion.setFromUnitVectors(new T(0,0,1),o)}render(t,e){let n=this.renderer,i=this.cam;this.group.updateMatrixWorld(),this.group.getWorldPosition(i.position),this.group.parent.getWorldQuaternion(this._q),this._d.set(0,-.03,1).applyQuaternion(this._q),i.lookAt(this._d.add(i.position)),i.updateMatrixWorld();let s=n.getRenderTarget(),a=n.shadowMap.autoUpdate;n.shadowMap.autoUpdate=!1,this.group.visible=!1,e&&(e.visible=!1),n.setRenderTarget(this.rt),n.render(t,i),n.setRenderTarget(s),n.shadowMap.autoUpdate=a,e&&(e.visible=!0),this.group.visible=!0}};var wS=320,TS=200,SS=`
  uniform mat4 uTex;
  varying vec4 vUv;
  void main() {
    vUv = uTex * vec4(position, 1.0);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }`,AS=`
  uniform sampler2D tMap;
  varying vec4 vUv;
  void main() {
    vec3 c = texture2DProj(tMap, vUv).rgb;
    gl_FragColor = vec4(c * 0.82, 1.0);          // kính gương hơi tối (bạc phủ sau kính)
  }`,mh=class{constructor(t){this.renderer=t,this.cam=new We,this.cam.layers.enable(3),this.frame=0,this.current=null,this._v=new T,this._e=new T,this._p=new T,this._n=new T,this._m=new wt,this._q=[0,1,2,3].map(()=>new T),this._bias=new wt().set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1)}setCar(t){if(this.current&&this.current!==t&&this._show(this.current,!1),this.current=t,!t||t.wingMirrors!==void 0)return;t.wingMirrors=null;let e=t.group;e.updateMatrixWorld(!0);let n=null;if(e.traverse(g=>{!n&&g.isMesh&&/^WingmirrorGlass/i.test(g.name)&&g.material?.name==="Mirror"&&(n=g)}),!n)return;let i=this._m.copy(e.matrixWorld).invert().multiply(n.matrixWorld),a=(n.geometry.index?n.geometry.toNonIndexed():n.geometry).attributes.position,o=[[],[]],c=new T,l=new T,h=new T;for(let g=0;g<a.count;g+=3)c.fromBufferAttribute(a,g).applyMatrix4(i),l.fromBufferAttribute(a,g+1).applyMatrix4(i),h.fromBufferAttribute(a,g+2).applyMatrix4(i),o[c.x+l.x+h.x<0?0:1].push(c.clone(),l.clone(),h.clone());let f=new T(...t.dim.eye),u=[];for(let g of o){if(g.length<3)continue;let v=new T,m=new T;for(let D=0;D<g.length;D+=3){let k=new T().subVectors(g[D+1],g[D]).cross(new T().subVectors(g[D+2],g[D]));k.dot(new T().subVectors(f,g[D]))<0&&k.negate(),m.add(k),v.add(g[D]).add(g[D+1]).add(g[D+2])}v.multiplyScalar(1/g.length),m.normalize();let p=new T(0,1,0).cross(m).normalize(),x=new T().crossVectors(m,p),y=1e9,_=-1e9,M=1e9,b=-1e9;for(let D of g){let k=this._v.subVectors(D,v);y=Math.min(y,k.dot(p)),_=Math.max(_,k.dot(p)),M=Math.min(M,k.dot(x)),b=Math.max(b,k.dot(x))}let w=[[y,M],[_,M],[_,b],[y,b]].map(([D,k])=>v.clone().addScaledVector(p,D).addScaledVector(x,k)),C=new Rt().setFromPoints(g.map(D=>D.clone().addScaledVector(m,.003))),E=new _n(wS,TS,{type:Zn}),S=new we({uniforms:{tMap:{value:E.texture},uTex:{value:new wt}},vertexShader:SS,fragmentShader:AS}),I=new Gt(C,S);I.visible=!1,I.frustumCulled=!1,e.add(I),u.push({mesh:I,rt:E,P:v,N:m,N0:m.clone(),corners:w,ready:!1})}let d=[];e.traverse(g=>{g.isMesh&&/^Wingmirror/i.test(g.name)&&d.push(g)}),t.wingMirrors={glass:n,mirrors:u,housing:d}}_show(t,e){let n=t?.wingMirrors;if(n){n.glass.visible=!e;for(let i of n.mirrors)i.mesh.visible=e&&i.ready}}render(t,e,n){let i=this.current,s=i?.wingMirrors;if(!s)return;if(!n){this._show(i,!1),s.aimed=!1;return}let a=i.group,o=this.renderer;a.updateMatrixWorld();let c=e.getWorldPosition(this._e);if(!s.aimed){let f=this._v.copy(c).applyMatrix4(this._m.copy(a.matrixWorld).invert());for(let u of s.mirrors){let d=this._p.set(Math.sign(u.P.x)*.09,-.045,1).normalize();u.N.subVectors(f,u.P).normalize().add(d).normalize()}s.aimed=!0}let l=s.mirrors.every(f=>f.ready)?[s.mirrors[this.frame++%s.mirrors.length]]:s.mirrors,h=s.housing.map(f=>f.visible);s.housing.forEach(f=>{f.visible=!1});for(let f of l)this._renderOne(t,f,a,c,o);s.housing.forEach((f,u)=>{f.visible=h[u]}),this._show(i,!0),s.glass.visible=!1}_renderOne(t,e,n,i,s){let a=this._p.copy(e.P).applyMatrix4(n.matrixWorld),o=this._n.copy(e.N).transformDirection(n.matrixWorld),c=this._v.subVectors(i,a).dot(o);if(c<=.01)return;let l=this.cam;l.position.copy(i).addScaledVector(o,-2*c),l.up.set(0,1,0),l.lookAt(this._v.copy(l.position).add(o)),l.updateMatrixWorld();let h=e.corners.map((x,y)=>this._q[y].copy(x).applyMatrix4(n.matrixWorld).applyMatrix4(l.matrixWorldInverse)),f=Math.max(.01,Math.min(...h.map(x=>-x.z))-.004),u=1e9,d=-1e9,g=1e9,v=-1e9;for(let x of h){let y=f/Math.max(1e-4,-x.z);u=Math.min(u,x.x*y),d=Math.max(d,x.x*y),g=Math.min(g,x.y*y),v=Math.max(v,x.y*y)}l.projectionMatrix.makePerspective(u,d,v,g,f,3e3),l.projectionMatrixInverse.copy(l.projectionMatrix).invert(),e.mesh.material.uniforms.uTex.value.copy(this._bias).multiply(l.projectionMatrix).multiply(l.matrixWorldInverse).multiply(n.matrixWorld);let m=s.getRenderTarget(),p=s.shadowMap.autoUpdate;s.shadowMap.autoUpdate=!1,e.mesh.visible=!1,s.setRenderTarget(e.rt),s.render(t,l),s.setRenderTarget(m),s.shadowMap.autoUpdate=p,e.ready=!0}};var gh=Math.PI*2,RS=Oe.smoothstep,vh=class{constructor(){this.phase=0,this.omega=gh/1.5,this.idle=60,this.wet=0,this.flow=0,this.flowDir=-1,this._v=new T,this._inv=new wt}get running(){return this.phase>0}angle(t){return t*.5*(1-Math.cos(this.phase))}update(t,e,n){let i=e>.15;this.omega=gh/(e>.95?1.05:1.55),i||this.phase>0?(this.phase+=this.omega*t,this.phase>=gh&&(this.phase=i?this.phase-gh:0),this.idle=0):this.idle+=t,this.wet+=(e-this.wet)*(1-Math.exp(-t*(e>this.wet?1.5:.12)));let s=Oe.lerp(-.05,.24,RS(n,6,20));this.flow+=s*t,this.flowDir=s>=0?1:-1}apply(t,e,n,i,s,a,o=null){if(n.getWorldDirection(this._v),this._v.transformDirection(this._inv.copy(i.matrixWorld).invert()),this._v.z>0&&(s=o),t.uGlass.value=s?e:0,t.uRearGlass.value=s?.rear?1:0,e<=0||!s)return;n.updateMatrixWorld(),t.uInvVP.value.multiplyMatrices(n.matrixWorld,n.projectionMatrixInverse),n.getWorldPosition(t.uCamPos.value),n.getWorldDirection(t.uCamFwd.value),t.uTanF.value=Math.tan(Oe.degToRad(n.fov)/2),t.uNear.value=n.near,t.uFar.value=n.far;let c=i.matrixWorld;if(t.uGC.value.copy(s.center).applyMatrix4(c),t.uGN.value.copy(s.normal).transformDirection(c),t.uGU.value.copy(s.right).transformDirection(c),t.uGV.value.copy(s.up).transformDirection(c),t.uGB.value.fromArray(s.bounds),t.uWipe.value.set(this.phase,this.omega,this.idle,a),t.uFlow.value.set(this.flow,this.flowDir),s.rear)return;let[l,h]=s.wipers;t.uPiv.value.set(l.u,l.v,h.u,h.v),t.uRest.value.set(l.rest,l.sign,h.rest,h.sign),t.uBlade.value.set(l.r0,l.r1,h.r0,h.r1),t.uSweep.value=s.sweep}};var Xo=5,CS=200,PS=40,xh=200,Zs=r=>{let t=Math.sin(r*127.1+311.7)*43758.5453;return t-Math.floor(t)},LS=r=>{let t=Math.floor(r),e=r-t,n=e*e*(3-2*e);return Zs(t)*(1-n)+Zs(t+1)*n},fv=(r,t,e)=>{let n=Math.min(1,Math.max(0,(e-r)/(t-r)));return n*n*(3-2*n)},IS=`
  attribute float aGlow;
  uniform float uScale, uFogD;
  varying float vGlow;
  void main() {
    vec4 mv = viewMatrix * vec4(position, 1.0);
    float fd = uFogD * -mv.z;
    vGlow = aGlow * exp(-fd * fd);                // chìm dần trong sương xa
    gl_PointSize = clamp(0.25 * uScale / -mv.z, 2.5, 22.0);
    gl_Position = projectionMatrix * mv;
  }`,DS=`
  uniform vec3 uColor; uniform float uAmt;
  varying float vGlow;
  void main() {
    float d = length(gl_PointCoord - 0.5) * 2.0;
    // lõi nhỏ (bằng nửa trước), quầng rộng + mờ dần về 0 ở mép điểm (nhoè, không lộ khung vuông)
    float core = smoothstep(0.11, 0.0, d), halo = exp(-d * d * 3.5) * max(0.0, 1.0 - d * d) * 0.45;
    float a = (core + halo) * vGlow * uAmt;
    if (a < 0.003) discard;
    gl_FragColor = vec4(uColor * a, 1.0);
  }`,bh=class{constructor(t){this.pos=new Float32Array(xh*3),this.glow=new Float32Array(xh);let e=new Rt;e.setAttribute("position",new At(this.pos,3).setUsage(Kn)),e.setAttribute("aGlow",new At(this.glow,1).setUsage(Kn)),e.setDrawRange(0,0),this.mat=new we({uniforms:{uScale:{value:500},uFogD:{value:0},uColor:{value:new it(9,12,2.6)},uAmt:{value:0}},vertexShader:IS,fragmentShader:DS,transparent:!0,depthWrite:!1,blending:Ze,fog:!1}),this.points=new on(e,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=4,this.points.visible=!1,t.add(this.points),this.ground=new Map,this._p={}}update(t,e,n,i,s,a,o=0){if(this.mat.uniforms.uAmt.value=s,this.mat.uniforms.uScale.value=a,this.mat.uniforms.uFogD.value=o,this.points.visible=s>.01,!this.points.visible)return;let c=this._p,l=0,h=Math.floor((e-PS)/Xo),f=Math.floor((e+CS)/Xo);for(let d=h;d<=f&&l<xh;d++){let g=fv(.38,.58,LS(d*Xo/140+3.7));if(g<=0||Zs(d*1.31)>g*.9)continue;let v=1+Math.floor(Zs(d*2.17)*3);for(let m=0;m<v&&l<xh;m++){let p=d*8+m,x=Zs(p*3.1+.5),y=Zs(p*5.7+1.3),_=Zs(p*7.3+2.9),M=Zs(p*9.1+4.4),b=d*Xo+x*Xo;n.at(b,c);let w=y<.5?-1:1,C=w*(4.6+16*_*_),E=Math.cos(c.th),S=-Math.sin(c.th),I=c.x+E*C,D=c.z+S*C,k=this.ground.get(p);k===void 0&&(k=i?i.heightAt(I,D):c.y,k>c.y-3&&k<c.y+4||(k=c.y),this.ground.set(p,k));let R=.35+M*.3,A=.5+x*.4;this.pos[l*3]=I+Math.sin(t*R+y*20)*.9+Math.sin(t*A*1.7+_*9)*.3,this.pos[l*3+1]=k+.7+2.6*M+Math.sin(t*A+x*13)*.35,this.pos[l*3+2]=D+Math.cos(t*A+_*17)*.9+Math.cos(t*R*1.9+M*7)*.3;let P=Math.sin(t*(.9+.8*_)+x*40);this.glow[l]=.12+.88*fv(.25,.9,P)*(.6+.4*y),l++}}if(this.ground.size>1500)for(let d of this.ground.keys())d<h*8&&this.ground.delete(d);let u=this.points.geometry;u.setDrawRange(0,l),u.attributes.position.needsUpdate=!0,u.attributes.aGlow.needsUpdate=!0}};var pv=r=>r>0?1.5:-1.8,FS=r=>r>0?-1.8:1.5,dv=r=>r.home??pv(r.dir),HS=r=>r.home!==void 0?-r.home:FS(r.dir);var yh=class{constructor(){this.player={player:!0,state:"cruise",target:null,dir:1},this.active=[],this.city=!1}_other(t){if(!this.city)return HS(t);let e=dv(t);return Math.sign(e)*(Math.abs(e)<3.5?5.25:1.75)}_overlapLat(t,e,n){return Math.abs(t.d-e)<(t.w+n)/2+.25}_all(){return[this.player,...this.active]}_ahead(t,e,n){let i=null,s=n;for(let a of this._all()){if(a===t||!this._overlapLat(a,e,t.w))continue;let o=(a.s-t.s)*t.dir;o>0&&o<s&&(s=o,i=a)}return i?{e:i,gap:s-(t.len+i.len)/2}:null}_follow(t,e){return Math.max(0,t+.5*(e-(6+1.1*t)))}_canOvertake(t,e,n){let i=this._other(t),s=(e.s-t.s)*t.dir,a=e.player&&e.v<1?16:8,o=Math.max(1,n-e.v),c=(s+(t.len+e.len)/2+a)/o;for(let l of this._all()){if(l===t||l===e||!this._overlapLat(l,i,t.w))continue;let h=(l.s-t.s)*t.dir;if(h<0&&l.dir===t.dir&&l.v>t.v-1&&-h-(t.len+l.len)/2<15+(l.v-t.v)*4)return!1;if(!(h<-(t.len+l.len)/2-3)&&(h<s+e.len/2+50||l.dir!==t.dir&&h-(n+l.v)*c<25||l.dir===t.dir&&l.v<n&&h-(n-l.v)*c<15))return!1}return!0}_overtakeDanger(t,e,n){let i=this._other(t),s=(e.s-t.s)*t.dir+(t.len+e.len)/2+8,a=Math.max(0,s)/Math.max(1,n-e.v);for(let o of this._all()){if(o===t||o===e||o.dir===t.dir||!this._overlapLat(o,i,t.w))continue;let c=(o.s-t.s)*t.dir;if(c>0&&c-(n+o.v)*a<15)return!0}return!1}_sideClear(t,e,n=2){for(let i of this._all()){if(i===t||!this._overlapLat(i,e,t.w))continue;let s=(i.s-t.s)*t.dir,a=Math.abs(s)-(t.len+i.len)/2;if(a<n)return!1;let o=s<0?i.dir===t.dir?i.v-t.v:-1e9:i.dir===t.dir?t.v-i.v:t.v+i.v;if(o>0&&a<o*3+5)return!1}return!0}_decide(t,e){let n=dv(t),i=this._other(t),s=n,a=e,o=60+3*Math.max(t.v,e);if(t.state==="overtake"&&t.target&&this.active.concat([this.player]).includes(t.target)){let c=t.target,l=Math.max(e,c.v+6),h=(t.s-c.s)*t.dir;s=i,a=l,h>(t.len+c.len)/2+(c.player&&c.v<1?16:8)?(t.state="cruise",t.target=null,s=n,a=e):this._overtakeDanger(t,c,l)&&(h<0?(t.state="cruise",t.target=null,s=n,a=Math.max(0,c.v-4)):a=l+6)}else{t.state="cruise",t.target=null;let c=this._ahead(t,n,o);c&&(c.e.dir===t.dir?!t.noOvertake&&c.e.v<e-1.5&&c.gap<30+1.2*t.v&&this._canOvertake(t,c.e,Math.max(e,c.e.v+6))?(t.state="overtake",t.target=c.e,s=i,a=Math.max(e,c.e.v+6)):a=Math.min(a,this._follow(c.e.v,c.gap)):!t.player&&c.e.player&&c.e.home*pv(t.dir)>0&&c.gap<200&&this._sideClear(t,i,30)?s=i:c.gap<120&&(s=n+(n>0?.8:-.8)))}for(let c of[t.d,s]){let l=this._ahead(t,c,o);l&&(l.e.dir===t.dir?a=Math.min(a,this._follow(l.e.v,l.gap)):a=Math.min(a,Math.max(0,(l.gap-12)*.7)))}return s!==t.d&&Math.abs(s-t.d)>.3&&!this._sideClear(t,s)&&(s=t.d),{dT:s,vT:a}}};var tp=(r,t,e)=>Math.min(e,Math.max(t,r)),Gn={maxActive:2,sameMax:1,sameGapMin:25,sameGapMax:60,gapMin:10,gapMax:25,detect:30,minSpeed:13.88888888888889,maxSpeed:55.55555555555556},mv=()=>Gn.minSpeed+Math.random()*(Gn.maxSpeed-Gn.minSpeed);function gv(r,t){let e=r.cruise??r.v,n=r.direction??-1,i=o=>t.heading?t.heading(Math.max(0,o)):t.at(Math.max(0,o),{}).th,s=Math.max(12,(e*e-(e*.6)**2)/24+10),a=0;for(let o=0;o<=s;o+=6){let c=Math.max(0,r.s+n*o),l=Math.max(0,c-10),h=c+10,f=i(h)-i(l);a=Math.max(a,Math.abs(Math.atan2(Math.sin(f),Math.cos(f)))/(h-l))}return r.inCurve=a>=(r.inCurve?.0012:.0015),e*(r.inCurve?.6:1)}function vv(r,t,e,n,i=r.cruise??r.v,s=()=>!0){let a=r.direction??-1,o=I=>a*(I.s-r.s),c=Math.max(0,e-r.dim.width/2-.25),l=tp(r.baseD??r.d,-c,c),h=I=>Gn.detect+Math.max(0,-a*(I.direction||0)*(I.speed||0))*1.2,f=t.filter(I=>{if(I.id===r||o(I)<-(r.dim.length+I.length)/2-2)return!1;let D=Math.max(0,o(I)-(r.dim.length+I.length)/2),k=Math.max(0,Math.abs(r.d-I.d)-(r.dim.width+I.width)/2);return Math.hypot(D,k)<=h(I)+1e-6}),u=I=>(r.dim.width+I.width)/2+.6,d=(I,D)=>Math.abs(I-D.d)<u(D),g=t.find(I=>I.id===r.avoidFor),v=g&&o(g)>-(r.dim.length+g.length)/2-8?r.avoidD:l,m=f.filter(I=>d(r.d,I)||d(v,I)),p=i;if(m.length){let D=[v,-1.8,1.8,-c,c,...m.flatMap(k=>[k.d-u(k)-.1,k.d+u(k)+.1])].filter(k=>Math.abs(k)<=c&&s(k)&&f.every(R=>!d(k,R)));if(D.sort((k,R)=>Math.abs(k-r.d)-Math.abs(R-r.d)||Math.abs(k-l)-Math.abs(R-l)),D.length){v=D[0];let k=m.reduce((R,A)=>o(R)<o(A)?R:A);r.avoidFor=k.id,r.avoidD=v}else v=r.d;for(let k of m){let R=Math.max(0,o(k)-(r.dim.length+k.length)/2-2),A=-a*(k.direction||0)*(k.speed||0);p=Math.min(p,Math.max(0,Math.sqrt(24*R)-A))}}let x=m.length>0,y=x?16:3,_=Math.max(x?.6:0,Math.min(x?8:2.2,(x?.35:.2)*Math.abs(r.v))),M=v-r.d,b=r.latV||0,w=Math.sign(M)*Math.min(_,Math.sqrt(2*y*Math.abs(M))),C=b+tp(w-b,-y*n,y*n),E=r.d+C*n;(v-E)*M<=0&&(E=v,C=0);let S=r.v+tp(p-r.v,-12*n,5*n);for(let I of f){let D=Math.min(r.d,E),k=Math.max(r.d,E);if(I.d+u(I)<=D||I.d-u(I)>=k)continue;let R=o(I)-(r.dim.length+I.length)/2-1.5,A=-a*(I.direction||0)*(I.speed||0)*n;S=Math.min(S,Math.max(0,(R-A)/Math.max(n,1e-6)))}return{d:E,v:S,s:r.s+a*S*n,avoiding:m.length>0,latV:C}}function ep(r,t,e){let n={},i=h=>(t.at(h,n),(n.x-r.x)**2+(n.z-r.z)**2),s=e,a=1/0;for(let h=Math.max(0,e-35);h<=e+35;h+=2){let f=i(h);f<a&&(a=f,s=h)}let o=Math.max(0,s-2),c=s+2;for(let h=0;h<12;h++){let f=(o*2+c)/3,u=(o+c*2)/3;i(f)<i(u)?c=u:o=f}let l=(o+c)/2;return t.at(l,n),{s:l,d:(r.x-n.x)*Math.cos(n.th)-(r.z-n.z)*Math.sin(n.th)}}function xv(r){let t=new Map,e=new Map,n=r.clone();return bv(r,n,function(i,s){t.set(s,i),e.set(i,s)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let s=i,a=t.get(i),o=a.skeleton.bones;s.skeleton=a.skeleton.clone(),s.bindMatrix.copy(a.bindMatrix),s.skeleton.bones=o.map(function(c){return e.get(c)}),s.bind(s.skeleton,s.bindMatrix)}),n}function bv(r,t,e){e(r,t);for(let n=0;n<r.children.length;n++)bv(r.children[n],t.children[n],e)}var NS="assets/models/carriage.glb",kS={length:5.6,width:2.8,height:2.4},Zi={gapMin:15,gapMax:30,max:2,minSpeed:25/3.6,maxSpeed:40/3.6,gallop:11};async function yv(r){let t=await r.loadAsync(NS),e=t.scene;e.traverse(a=>{if(!a.isMesh)return;let o=a.material;o.transparent=!1,o.depthWrite=!0,o.alphaTest=.4,ge(o),a.castShadow=!0,a.receiveShadow=!0,a.frustumCulled=!1}),e.rotation.y=Math.PI,e.updateMatrixWorld(!0);let n=new Qe().setFromObject(e,!0),i=n.getCenter(new T);e.position.set(-i.x,-n.min.y,-i.z);let s=t.animations[0]||null;return()=>{let a=new Dt;a.add(xv(e));let o=new wa(a);return s&&o.clipAction(s).play(),{group:a,dim:{...kS},wheels:[],mixer:o,carriage:!0}}}var _v=430,Mv=.24,Ev=1.8,wv=(r,t,e)=>Math.min(e,Math.max(t,r)),_h=class{constructor(t,e){this.scene=t,this.cars=e,this.pool=[],this.active=[],this.policy=new yh,this.ctrl={lane:null,maxV:1/0},this.timer=4+Math.random()*6,this.sameTimer=Gn.sameGapMin+Math.random()*(Gn.sameGapMax-Gn.sameGapMin),this.loading=!1,this.wait=6,this._p={},this._q={},this.beamRoot=new Dt,this.beam=_r(this.beamRoot,null,{glows:!1}),this.beamFor=null,t.add(this.beamRoot),this.carriages=[],this.makeCarriage=null,this.carriageLoading=!1,this.carriageTimer=6}_homeLane(t){return(this.playerHome??t)>=0?Ev:-Ev}async _loadCarriage(){this.carriageLoading=!0;try{this.makeCarriage=await yv(this.cars.loader)}catch(t){console.warn("carriage",t)}}_spawnCarriage(t,e,n){if(this.active.filter(l=>l.carriage).length>=Zi.max)return!1;let i=Zi.minSpeed+Math.random()*(Zi.maxSpeed-Zi.minSpeed),s=Math.random()<.4&&Math.abs(i-n)>3?1:-1,a=s===-1?t+_v+Math.random()*80:i>n+1?Math.max(10,t-80-Math.random()*30):t+150+Math.random()*70;if(this.active.some(l=>Math.abs(l.s-a)<60)||Math.abs(a-t)<40)return!1;let o=this.carriages.find(l=>!l.busy);if(!o){if(this.carriages.length>=Zi.max)return!1;o=this._vehicle(this.makeCarriage()),this.carriages.push(o)}let c=this._homeLane(e);return Object.assign(o,{s:a,direction:s,busy:!0,cruise:i,v:i,heard:!0,policy:null,inCurve:!1,avoidFor:null,latV:0,yaw:0}),o.d=o.baseD=o.avoidD=s===1?c:-c,o.root.visible=!0,this.active.push(o),!0}async _load(t){this.loading=!0;let e=this.cars.list.filter(n=>n.id!==t).sort(()=>Math.random()-.5);for(let n=0;n<Gn.maxActive+Gn.sameMax&&e.length;n++){let i=e[n%e.length];try{let s=await this.cars._load(i);if(this.cars.prepare)try{await this.cars.prepare(s.group)}catch{}this.pool.push(this._vehicle(s))}catch(s){console.warn("traffic",i.id,s)}}}_vehicle(t){let e=new Dt;e.visible=!1,e.add(t.group);let n=t.dim,i=(f,u)=>{let d=new Un(new Rn({map:this.cars.softTex,color:f,transparent:!0,opacity:0,depthWrite:!1,blending:Ze}));return d.scale.set(u*1.35,u*.7,1),e.add(d),d},s=!!t.carriage,a=_r(e,this.cars.softTex,{spots:!1,glows:!s});Mr(a,n);for(let f of t.wheels)f.front=f.pivot.position.z<0,f.pivot.rotation.order="YXZ";let[o,c,l]=Pa(n).tail,h=s?[]:[-1,1].map(f=>{let u=i(16720914,1.6);return u.position.set(f*o,c,l+.03),u});return this.scene.add(e),{root:e,wheels:t.wheels,dim:n,headlights:a,tails:h,busy:!1,s:0,v:0,d:0,carriage:s,mixer:t.mixer||null}}update(t,e,n,i,s,a,o=[],c=null){if(!this.pool.length){!this.loading&&(this.wait-=t)<=0&&this._load(a);return}this.cars.loader&&!this.makeCarriage&&!this.carriageLoading&&this._loadCarriage();let l=o.find(v=>v.id==="player");this.makeCarriage&&(this.carriageTimer-=t)<=0&&(this.carriageTimer=this._spawnCarriage(e,n,l?.speed||0)?Zi.gapMin+Math.random()*(Zi.gapMax-Zi.gapMin):1),this.timer-=t,this.sameTimer-=t;for(let v of[-1,1]){let m=v===1,p=m?"sameTimer":"timer";if(this[p]>0)continue;let x=m?Gn.sameGapMin:Gn.gapMin,y=m?Gn.sameGapMax:Gn.gapMax;this[p]=x+Math.random()*(y-x);let _=this.pool.filter(w=>!w.busy);if(!_.length||this.active.filter(w=>!w.carriage&&(w.direction??-1)===v).length>=(m?Gn.sameMax:Gn.maxActive))continue;let M=_[Math.floor(Math.random()*_.length)],b=this._homeLane(n);M.s=m?Math.max(10,e-80-Math.random()*30):e+_v+Math.random()*80,!(this.active.some(w=>Math.abs(w.s-M.s)<60)||Math.abs(M.s-e)<40)&&(M.direction=v,M.busy=!0,M.cruise=M.v=mv(),M.d=M.baseD=m?b:-b,M.heard=!1,M.policy=null,M.inCurve=!1,M.avoidFor=null,M.avoidD=M.d,M.latV=0,M.yaw=0,M.root.visible=!0,this.active.push(M))}let h=[...o,...this.active.map(v=>({id:v,s:v.s,d:v.d,speed:v.v,direction:v.direction??-1,width:v.dim.width,length:v.dim.length}))],f=o.find(v=>v.id==="player");Object.assign(this.policy.player,{s:e,d:n,v:f?.speed||0,len:f?.length||this.cars.dim?.length||4.7,w:f?.width||this.cars.dim?.width||2,home:this.playerHome??(n>=0?1.5:-1.5)}),this.policy.active=this.active.map(v=>(v.policy||(v.policy={state:"cruise",target:null}),Object.assign(v.policy,{s:v.s,d:v.d,v:v.v,dir:v.direction??-1,len:v.dim.length,w:v.dim.width,home:v.baseD,noOvertake:(v.direction??-1)<0}))),this.policy.active.push(...o.filter(v=>v.id==="person").map(v=>({s:v.s,d:v.d,v:v.speed||0,dir:0,len:v.length,w:v.width,player:!0,home:v.d})));let u=this.policy._decide(this.policy.player,this.playerGoal??f?.speed??0);this.ctrl.lane=u.dT,this.ctrl.maxV=u.vT;let d=this._p,g=this._q;for(let v=this.active.length-1;v>=0;v--){let m=this.active[v],p=gv(m,i),x=this.policy._decide(m.policy,p),y=I=>I*m.baseD>=0||x.dT*m.baseD<0&&this.policy._sideClear(m.policy,I),_=x.vT;if(this.stopFor){let I=m.direction??-1,D=this.stopFor(m.s+I*m.dim.length/2,I,m.v);D<1/0&&(_=Math.min(_,Math.sqrt(2*3.2*Math.max(0,D-1))))}let M=vv(m,h,Le.halfWidth,t,Math.min(p,_),y);if(m.s=M.s,m.d=M.d,m.v=M.v,m.avoiding=M.avoiding,m.latV=M.latV,m.s<e-(m.direction===1?180:90)||m.direction===1&&m.s>e+(m.carriage?400:750)){m.busy=!1,m.root.visible=!1,this.active.splice(v,1);continue}if(c&&f&&!m.carriage){let I=m.s-e,D=m.v*(m.direction??-1)-f.speed,k=Math.abs(D);Math.abs(I)>70&&(m.heard=!1),!m.heard&&k>2&&I*D<0&&Math.abs(m.d-n)<7&&-I/D<c.passDur(k)*.5&&(m.heard=!0,c.passBy(k,Oe.clamp((m.d-n)/4,-.8,.8),Math.abs(m.d-n)))}i.at(m.s,d);let b=i.at(m.s+2.5,g).y,w=i.at(m.s-2.5,g).y;m.root.position.set(d.x+Math.cos(d.th)*m.d,d.y,d.z-Math.sin(d.th)*m.d);let C=m.direction??-1,E=wv(Math.atan2(m.latV||0,Math.max(3,m.v)),-.35,.35);m.yaw=(m.yaw||0)+(E-(m.yaw||0))*(1-Math.exp(-t*8)),m.root.rotation.set(-C*Math.atan2(w-b,5),d.th+(C===-1?Math.PI:0)-C*m.yaw,0,"YXZ");let S=wv(-C*m.yaw*1.8,-.4,.4);for(let I of m.wheels)I.pivot.rotation.x+=C*(m.v*t)/I.radius,I.front&&(I.pivot.rotation.y=S);m.mixer&&(m.mixer.timeScale=m.v/Zi.gallop,m.mixer.update(t)),xs(m.headlights,m.root,this.cars.viewer,s*Mv*(this.lampK??1));for(let I of m.tails)I.material.opacity=(.25+.6*s)*.6}this._beam(e,s)}clearAll(){for(let t of this.active)t.busy=!1,t.root.visible=!1;this.active.length=0,this._beam(0,0),this.ctrl.lane=null,this.ctrl.maxV=1/0}_beam(t,e){let n=null,i=300;for(let s of this.active){if(s.carriage)continue;let a=Math.abs(s.s-t);a<i&&(i=a,n=s)}n!==this.beamFor&&(this.beamFor=n,n&&Mr(this.beam,n.dim)),n&&(n.root.updateMatrixWorld(),n.root.matrixWorld.decompose(this.beamRoot.position,this.beamRoot.quaternion,this.beamRoot.scale)),xs(this.beam,this.beamRoot,null,n?e*Mv:0)}};var Tv=5,np=2400,ip=420,Sv=26,sp=12,Av=12.5,Rv=33,Cv=3,Mh=Math.floor(Rv*2/Cv)+1,Fi=(r,t)=>r+Math.random()*(t-r);function Vn(r,t){let e=r;return e.setAttribute("aKind",new At(new Float32Array(e.attributes.position.count).fill(t),1)),e.deleteAttribute("uv"),e}function US(){let r=Ws([Vn(new fl(.42,1,6,14).rotateX(Math.PI/2).scale(.92,1.05,1).translate(0,1.05,0),0),Vn(new Pi(.17,10,8).scale(1,.75,1.15).translate(0,.62,-.42),1),Vn(new re(.5,.3,.4).translate(0,1.3,-.72),0)]),t=Ws([Vn(new re(.34,.42,.5).rotateX(-.5).translate(0,-.02,.16),0),Vn(new re(.3,.34,.48).translate(0,-.1,.5),0),Vn(new re(.29,.22,.16).translate(0,-.2,.78),1),Vn(new re(.2,.05,.1).rotateZ(.25).translate(.23,0,.38),0),Vn(new re(.2,.05,.1).rotateZ(-.25).translate(-.23,0,.38),0),Vn(new ya(.028,.13,6).rotateZ(-.9).translate(.15,.1,.42),3),Vn(new ya(.028,.13,6).rotateZ(.9).translate(-.15,.1,.42),3),Vn(new re(.035,.05,.05).translate(.152,-.02,.56),2),Vn(new re(.035,.05,.05).translate(-.152,-.02,.56),2)]),e=Ws([Vn(new qe(.08,.065,.72,8).translate(0,-.36,0),0),Vn(new qe(.07,.08,.1,8).translate(0,-.77,0),2)]),n=Ws([Vn(new qe(.025,.018,.72,6).translate(0,-.36,0),0),Vn(new Pi(.06,6,5).scale(1,1.8,1).translate(0,-.76,0),2)]);return{body:r,head:t,leg:e,tail:n}}function zS(r){let t=new Ut({roughness:.82,metalness:0}),e={value:r};return t.onBeforeCompile=n=>{n.uniforms.uSeed=e,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.rgb = cowC;`)},t.customProgramCacheKey=()=>"cow",ge(t)}var rp=class{constructor(t,e){let n=zS(new T(e*17.3,e*5.1,e*11.7)),i=a=>{let o=new Gt(a,n);return o.castShadow=!0,o.receiveShadow=!0,o};this.root=new Dt,this.root.add(i(t.body)),this.neck=new Dt,this.neck.position.set(0,1.15,.85),this.neck.add(i(t.head)),this.root.add(this.neck),this.legs=[[.24,.6],[-.24,.6],[.24,-.6],[-.24,-.6]].map(([a,o])=>{let c=new Dt;return c.position.set(a,.81,o),c.add(i(t.leg)),this.root.add(c),c}),this.tail=new Dt,this.tail.position.set(0,1.4,-.92),this.tail.add(i(t.tail)),this.root.add(this.tail);let s=Fi(.92,1.06);this.root.scale.setScalar(s),this.seed=Math.random()*100,this.mode="graze",this.timer=Fi(1,8),this.head=1.2,this.headY=0,this.gait=0,this.x=0,this.z=0,this.yaw=0,this.y=0,this.hx=1e9,this.hz=1e9}},Eh=class{constructor(t){this.group=new Dt,this.group.visible=!1,t.add(this.group);let e=US();this.cows=Array.from({length:Tv},(i,s)=>{let a=new rp(e,s);return this.group.add(a.root),a});let n=ge(new Ut({color:5914151,roughness:.92}));this.posts=new Te(new re(.13,1.25,.13).translate(0,.62,0),n,Mh),this.rails=new Te(new re(1,.1,.05),n,(Mh-1)*2);for(let i of[this.posts,this.rails])i.castShadow=!0,i.receiveShadow=!0,i.frustumCulled=!1,this.group.add(i);this.herd=null,this.enabled=!1,this.onBuild=null,this._p={},this._m=new wt,this._q=new Xt,this._v=new T,this._s=new T,this._up=new T(0,1,0)}set visible(t){this.enabled=t,t||(this.group.visible=!1),this.herd=null}get visible(){return this.enabled}reset(){this.herd=null}_place(t,e,n){let i=ip+t*np,s=t%2?-1:1,a=e.at(i,this._p),o=Math.cos(a.th),c=-Math.sin(a.th),l=-Math.sin(a.th),h=-Math.cos(a.th);this.cx=a.x+o*s*Sv,this.cz=a.z+c*s*Sv,this.cows.forEach((m,p)=>{let x=p/Tv*Math.PI*2+Fi(-.4,.4),y=Fi(2,sp*.7);m.x=this.cx+Math.cos(x)*y,m.z=this.cz+Math.sin(x)*y,m.yaw=Fi(0,Math.PI*2),m.hx=1e9,m.mode="graze",m.timer=Fi(1,8)});let f=this._m,u=this._q,d=this._v,g=this._s,v=[];for(let m=0;m<Mh;m++){let p=e.at(i-Rv+m*Cv,this._p),x=p.x+Math.cos(p.th)*s*Av,y=p.z-Math.sin(p.th)*s*Av,_=n.heightAt(x,y);v.push([x,_,y]),f.compose(d.set(x,_-.05,y),u.setFromAxisAngle(this._up,p.th),g.set(1,1,1)),this.posts.setMatrixAt(m,f)}for(let m=0;m<Mh-1;m++){let[p,x,y]=v[m],[_,M,b]=v[m+1],w=Math.hypot(_-p,b-y),C=Math.atan2(-(b-y),_-p),E=Math.atan2(M-x,w);for(let S=0;S<2;S++)u.setFromEuler(new mi(0,C,E,"YZX")),f.compose(d.set((p+_)/2,(x+M)/2+(S?1:.55),(y+b)/2),u,g.set(w+.1,1,1)),this.rails.setMatrixAt(m*2+S,f)}this.posts.instanceMatrix.needsUpdate=!0,this.rails.instanceMatrix.needsUpdate=!0,this.onBuild&&(this.onBuild(this.group),this.onBuild=null)}update(t,e,n,i){if(!this.enabled)return;let s=Math.round((e+150-ip)/np),a=ip+s*np;if(s<0||a<e-250||a>e+750){this.group.visible=!1,this.herd=null;return}this.herd!==s&&(this._place(s,n,i),this.herd=s),this.group.visible=!0;let o=performance.now()/1e3;for(let c of this.cows)this._cow(c,t,o,i)}_cow(t,e,n,i){if(t.timer-=e,t.timer<=0){let f=Math.random();t.mode==="walk"||f<.5?(t.mode="graze",t.timer=Fi(5,14)):f<.75?(t.mode="look",t.timer=Fi(2,5),t.lookY=Fi(-.45,.45)):(t.mode="walk",t.timer=Fi(2.5,6),t.turn=Fi(-.35,.35))}let s=1.2+.05*Math.sin(n*3.1+t.seed),a=0,o=0;if(t.mode==="look"&&(s=-.12,a=t.lookY),t.mode==="walk"){s=.35,o=.55;let f=this.cx-t.x,u=this.cz-t.z;if(f*f+u*u>sp*sp){let d=Math.atan2(f,u);t.yaw+=Math.atan2(Math.sin(d-t.yaw),Math.cos(d-t.yaw))*Math.min(1,e*1.5)}else t.yaw+=t.turn*e}for(let f of this.cows){if(f===t)continue;let u=t.x-f.x,d=t.z-f.z,g=u*u+d*d;if(g<6.25&&g>1e-6){let v=Math.sqrt(g),m=(2.5-v)*e;t.x+=u/v*m,t.z+=d/v*m}}t.x+=Math.sin(t.yaw)*o*e,t.z+=Math.cos(t.yaw)*o*e,Math.hypot(t.x-t.hx,t.z-t.hz)>.4&&(t.y=i.heightAt(t.x,t.z),t.hx=t.x,t.hz=t.z);let c=1-Math.exp(-e*2.2);t.head+=(s-t.head)*c,t.headY+=(a-t.headY)*c,t.gait+=((o>0?1:0)-t.gait)*Math.min(1,e*3),t.phase=(t.phase||0)+e*5.2*t.gait,t.root.position.set(t.x,t.y,t.z),t.root.rotation.y=t.yaw,t.neck.rotation.set(t.head,t.headY,0,"YXZ");let l=.38*t.gait*Math.sin(t.phase);t.legs[0].rotation.x=l,t.legs[3].rotation.x=l,t.legs[1].rotation.x=-l,t.legs[2].rotation.x=-l;let h=Math.max(0,Math.sin(n*.37+t.seed)-.85)*6;t.tail.rotation.set(.12,0,.12*Math.sin(n*1.6+t.seed)+.5*h*Math.sin(n*9))}};var op=Le.halfWidth,OS=230,BS=190,wh=op+.6,GS=6,VS=4,jo=13,_i=(r,t,e)=>{let n=Math.min(1,Math.max(0,(e-r)/(t-r)));return n*n*(3-2*n)};function WS(r){return{index:r,s:260+r*560+ne(r,71)*100,width:2+3*ne(r,37),flow:.25+.75*ne(r,93)}}function Pv(r,t,e,n,i){let s=t.at(r.s,{}),a=Math.cos(s.th)*n,o=-Math.sin(s.th)*n,c=(p,x)=>e.heightAt(p,x),l=1.5,h=n<0?1:-1,f=.61,u=s.x+a*wh,d=s.z+o*wh,g=a,v=o,m=[];for(let p=0;p<i;){if(p>6){let y=(c(u+l,d)-c(u-l,d))*h,_=(c(u,d+l)-c(u,d-l))*h,M=Math.hypot(y,_);if(M>1e-6){let w=.25*_i(6,30,p);g+=(y/M-g)*w,v+=(_/M-v)*w}let b=Math.hypot(g,v);if(g/=b,v/=b,g*a+v*o<Math.cos(f)){let w=Math.sign(a*v-o*g||1)*f;g=a*Math.cos(w)-o*Math.sin(w),v=a*Math.sin(w)+o*Math.cos(w)}}let x=p<24?1.2:2.4;if(u+=g*x,d+=v*x,p+=x,c(u,d),p>12&&e._d<op+4)break;m.push({x:u,z:d,a:p,dx:g,dz:v})}return m}function Lv(r,t){return r.map(({x:e,z:n,a:i,dx:s,dz:a})=>{let c=(2+6*_i(30,150,i))*_i(10,40,i)*((ze(i/52+t,3.3)-.5)*2+.35*(ze(i/13+t,8.1)-.5)*2);return{x:e-a*c,z:n+s*c,a:i}})}function qS(r,t,e){let n=e.iCar;e.setCar(r.s);let i=t.at(r.s,{}),s=Math.cos(i.th),a=-Math.sin(i.th),o=new T(i.x,i.y,i.z),c=r.index*3.17+.37,l=r.width,h=r.flow,f=l*.6,u=l*(.17+.1*h),d=[],g=Lv(Pv(r,t,e,-1,OS),c),v=Lv(Pv(r,t,e,1,BS),c+41),m=g.length?g[g.length-1].a:0,p=v.length?v[v.length-1].a:0;for(let A=g.length-1;A>=0;A--)d.push({...g[A],side:-1,end:m,road:!1});let x=16;for(let A=0;A<=x;A++){let P=-wh+2*wh*A/x;d.push({x:i.x+s*P,z:i.z+a*P,d:P,a:0,side:0,road:!0})}for(let A of v)d.push({...A,side:1,end:p,road:!1});let y={};for(let A=0;A<d.length;A++){let P=d[A];if(P.road)P.tx=s,P.tz=a;else{let U=d[Math.max(0,A-1)],V=d[Math.min(d.length-1,A+1)],q=Math.hypot(V.x-U.x,V.z-U.z)||1;P.tx=(V.x-U.x)/q,P.tz=(V.z-U.z)/q}P.px=P.tz,P.pz=-P.tx;let N;P.road?N=f:(N=u*(.7+.6*ze(P.a/17+c,5.5+P.side)),P.side<0&&(N*=1+.6*(1-_i(4,22,P.a))),N+=(f-N)*(1-_i(0,P.side<0?6:3,P.a)),N*=.3+.7*_i(0,30,P.end-P.a)),P.hw=N,P.wb=P.road?N+.9:N*1.7+.45,P.xs=[],P.ys=[],P.zs=[];for(let U=0;U<jo;U++){let V=P.wb*(2*U/(jo-1)-1),q,j,at;P.road?(t.at(r.s+V,y),q=y.x+Math.cos(y.th)*P.d,at=y.z-Math.sin(y.th)*P.d,j=Math.abs(P.d)<=op?y.y+.05:e.heightAt(q,at)):(q=P.x+P.px*V,at=P.z+P.pz*V,j=e.heightAt(q,at)),P.xs.push(q),P.ys.push(j),P.zs.push(at)}P.y=P.ys[(jo-1)/2]}e.iCar=n;let _=0;for(let A=0;A<d.length;A++){let P=d[A],N=d[Math.max(0,A-1)],U=d[Math.min(d.length-1,A+1)];P.slope=P.road?0:Math.abs(U.y-N.y)/(Math.hypot(U.x-N.x,U.z-N.z)||1),A&&(_+=Math.hypot(P.x-d[A-1].x,P.y-d[A-1].y,P.z-d[A-1].z)),P.along=_}let M=_;for(let A=0;A<2;A++){let P=d.map(N=>N.slope);for(let N=1;N<d.length-1;N++)d[N].road||(d[N].slope=P[N-1]*.25+P[N]*.5+P[N+1]*.25)}let b=0;for(let A=0;A<d.length;A++){let P=d[A],N=0;for(let j=A-1;j>=0&&P.along-d[j].along<8;j--)N=Math.max(N,d[j].slope);let U=A?P.along-d[A-1].along:0;b=Math.max(Math.min(1,Math.max(0,(N-P.slope)*.8)),b*Math.exp(-U/(P.road?1.3:3.5))),P.turb=P.road?b*.4:b,P.st=Math.min(1,P.slope/1.3),P.fade=_i(0,25,P.along)*_i(0,30,M-P.along);let V=A?P.along-d[A-1].along:0,q=(.6+4.4*P.st)*(.75+.5*h);P.tau=A?d[A-1].tau+V/q:0,P.road||(P.fade*=1-_i(40,90,P.a)*(1-_i(.3,.62,ze(P.a/45+c,13.7+P.side))))}let w=(A,P,N)=>{let U=Math.min(jo-1.0001,Math.max(0,(P/N+1)*(jo-1)/2)),V=Math.floor(U),q=U-V;return A[V]+(A[V+1]-A[V])*q},C=(A,P,N,U)=>{let V=[],q=[],j=[],at=[];d.forEach(($,gt)=>{let pt=P($),St=N($);for(let Vt=0;Vt<=A;Vt++){let Yt=pt*(2*Vt/A-1);if(V.push(w($.xs,Yt,$.wb)-o.x,w($.ys,Yt,$.wb)+St-o.y,w($.zs,Yt,$.wb)-o.z),q.push(Yt,$.along,$.tau,h),j.push(...U($,pt)),gt&&Vt<A){let kt=(gt-1)*(A+1)+Vt,ae=gt*(A+1)+Vt;at.push(kt,ae,kt+1,kt+1,ae,ae+1)}}});let G=new Rt;return G.setAttribute("position",new _t(V,3)),G.setAttribute("aWUV",new _t(q,4)),G.setAttribute("aInfo",new _t(j,4)),G.setIndex(at),G.computeVertexNormals(),G.computeBoundingSphere(),G},E=A=>A.road?.035+.02*h:.07+.13*_i(15,120,A.a)+.4*A.st,S=C(GS,A=>A.hw,E,(A,P)=>[A.st,A.turb,A.fade,P]),I=C(VS,A=>A.wb,A=>A.road?.012:E(A)*.55,(A,P)=>[A.st,A.road?1:0,A.fade,P]),D=[];d.forEach((A,P)=>{if(A.road||A.a<1.3||A.fade<.3)return;let N=(A.a<25?.5:A.a<80?.22:.08)*(1-.65*_i(.55,.9,A.st));for(let U of[-1,1]){if(ne(r.index*977+P,U>0?11:23)>N)continue;let q=ne(r.index*977+P,U>0?31:47),j=A.a<12?.45+.65*q:.25+.45*q,at=U*Math.min(A.wb-.05,A.hw+.05+.35*j*ne(P,59));D.push({x:w(A.xs,at,A.wb)-o.x,y:w(A.ys,at,A.wb)-(.28+.2*A.st)*j-o.y,z:w(A.zs,at,A.wb)-o.z,s:j,yaw:q*6.283,k:Math.floor(ne(P,U+71)*2.999),c:.75+.35*ne(P,U+83)})}if(A.st>.5&&ne(r.index*977+P,97)<.12){let U=(ne(P,101)-.5)*A.hw,V=.2+.2*ne(P,103);D.push({x:w(A.xs,U,A.wb)-o.x,y:w(A.ys,U,A.wb)-.1-o.y,z:w(A.zs,U,A.wb)-o.z,s:V,yaw:ne(P,107)*6.283,k:0,c:.7})}});let k=[],R=(A,P)=>d.filter(N=>N.side===A).reduce((N,U)=>!N||Math.abs(U.a-P)<Math.abs(N.a-P)?U:N,null);for(let[A,P]of[[R(-1,2.5),1],[R(1,9),.8]])A&&k.push({x:A.x-o.x,y:A.y+.3-o.y,z:A.z-o.z,w:Math.max(2.2,A.hw*2.4),h:1.2+1.6*h,op:(.1+.14*h)*P});return{origin:o,water:S,wet:I,rocks:D,sprays:k,nodes:d,sheet:f}}var Iv=`
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
`;function XS(r,t){r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
attribute vec4 aWUV;
attribute vec4 aInfo;
varying vec4 vWUV;
varying vec4 vInfo;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWUV = aWUV; vInfo = aInfo;`).replace("#include <project_vertex>",`#include <project_vertex>
      mvPosition.xyz *= ${(1-t).toFixed(4)};
      gl_Position = projectionMatrix * mvPosition;`)}function jS(r){let t=new Ut({color:16777215,roughness:.08,metalness:0,envMapIntensity:.7,transparent:!0,depthWrite:!1,side:Me,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-12});return t.onBeforeCompile=e=>{e.uniforms.uTime=r,XS(e,.005),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
        uniform float uTime; varying vec4 vWUV; varying vec4 vInfo;
        float wFoam = 0.0, wHgt = 0.0, wMask = 0.0;
        ${Iv}`).replace("#include <map_fragment>",`
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
        #include <opaque_fragment>`)},t.customProgramCacheKey=()=>"waterfall-water",ge(t)}function KS(){return new we({transparent:!0,depthWrite:!1,side:Me,blending:Ef,blendEquation:ls,blendSrc:wf,blendDst:Tf,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-8,vertexShader:`
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
      ${Iv}
      void main() {
        float lat = vWUV.x, along = vWUV.y, e = abs(lat) / max(vInfo.w, 0.05);
        float edge = 0.72 + 0.3 * (wNoise(vec2(along * 0.35 + (lat > 0.0 ? 5.3 : 11.9), 0.5)) - 0.5) + 0.12 * (wNoise(vec2(along * 1.3, lat * 1.1 + 3.0)) - 0.5);
        float m = (1.0 - smoothstep(edge - 0.35, edge + 0.05, e)) * vInfo.z * (1.0 - smoothstep(150.0, 700.0, vDist));
        vec3 tint = mix(vec3(0.42, 0.44, 0.42), vec3(0.6, 0.7, 0.5), smoothstep(0.35, 0.95, e));     // giữa sẫm, rìa rêu
        tint = mix(tint, vec3(0.55), vInfo.y * 0.6);                                                 // mặt đường ướt: tối vừa
        gl_FragColor = vec4(mix(vec3(1.0), tint, m), 1.0);
      }`})}var ap=class{constructor(t,e){let n=this.N=320;this.pos=new Float32Array(n*3),this.col=new Float32Array(n*4),this.vel=new Float32Array(n*3),this.life=new Float32Array(n).fill(1),this.max=new Float32Array(n).fill(1);let i=new Rt;i.setAttribute("position",new At(this.pos,3).setUsage(Kn)),i.setAttribute("color",new At(this.col,4).setUsage(Kn)),this.points=new on(i,new Ci({size:.6,map:e,transparent:!0,depthWrite:!1,vertexColors:!0})),this.points.material.onBeforeCompile=s=>{s.vertexShader=s.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
mvPosition.xyz *= 0.96;
gl_Position = projectionMatrix * mvPosition;`)},this.points.frustumCulled=!1,t.add(this.points),this.next=0,this.alive=0}emit(t,e,n,i,s,a){let o=this.next;this.next=(o+1)%this.N,this.pos.set([t,e,n],o*3),this.vel.set([i,s,a],o*3),this.life[o]=0,this.max[o]=.45+Math.random()*.6,this.alive=2}update(t,e){if(!this.alive)return;let n=!1,i=.3+.6*e;for(let s=0;s<this.N;s++){let a=s*3;this.life[s]<this.max[s]&&(this.life[s]+=t,this.vel[a+1]-=9.8*t,this.pos[a]+=this.vel[a]*t,this.pos[a+1]+=this.vel[a+1]*t,this.pos[a+2]+=this.vel[a+2]*t,n=!0);let o=Math.max(0,1-this.life[s]/this.max[s]);this.col.set([i,i*1.02,i*1.04,.9*o*Math.sqrt(o)],s*4)}n||this.alive--,this.points.geometry.attributes.position.needsUpdate=!0,this.points.geometry.attributes.color.needsUpdate=!0}},Th=class{constructor(t,e,n){this.road=e,this.terrain=n,this.items=new Map,this.group=new Dt,this.group.visible=!1,t.add(this.group),this.uTime={value:0},this.material=jS(this.uTime),this.wetMaterial=KS(),this.rockGeos=[0,1,2].map(i=>Bd(i,2)),this.rockMat=n.rockMat,this.tex=Sl(),this.splash=new ap(this.group,this.tex),this.last=null,this.inWater=!1,this._p={},this._v=new T,this._r=new T}setMap(t){this.group.visible=t==="mountain";for(let e of this.items.values())this._remove(e);this.items.clear()}_remove(t){this.group.remove(t.group),t.water.geometry.dispose(),t.wet.geometry.dispose(),t.rocks&&t.rocks.forEach(e=>e.dispose());for(let e of t.sprays)e.sprite.material.dispose()}_build(t){let e=qS(t,this.road,this.terrain),n=new Dt;n.position.copy(e.origin);let i=new Gt(e.wet,this.wetMaterial),s=new Gt(e.water,this.material);i.receiveShadow=s.receiveShadow=!0,i.renderOrder=1,s.renderOrder=2,n.add(i,s);let a=null;if(this.rockMat&&e.rocks.length){let c=this.rockGeos.map(()=>[]);e.rocks.forEach(m=>c[m.k].push(m));let l=new wt,h=new Xt,f=new mi,u=new T,d=new T,g=new it,v=new it("#968c80");a=c.filter(m=>m.length).map(m=>{let p=new Te(this.rockGeos[m[0].k],this.rockMat,m.length);return m.forEach((x,y)=>{h.setFromEuler(f.set((x.c-.9)*.6,x.yaw,(x.c-.9)*.5)),p.setMatrixAt(y,l.compose(d.set(x.x,x.y,x.z),h,u.set(x.s,x.s*(.6+.35*x.c),x.s))),p.setColorAt(y,g.copy(v).multiplyScalar(x.c))}),p.castShadow=p.receiveShadow=!0,n.add(p),p})}let o=[];return e.sprays.forEach((c,l)=>{for(let h=0;h<3;h++){let f=new Un(new Rn({map:this.tex,color:14674668,transparent:!0,opacity:0,depthWrite:!1}));f.position.set(c.x,c.y,c.z),n.add(f),o.push({sprite:f,sp:c,ph:h/3+l*.17})}}),this.group.add(n),{spec:t,group:n,water:s,wet:i,rocks:a,sprays:o,sheet:e.sheet}}update(t,e,n,i={}){if(!this.group.visible){i.audio?.setWater?.(0);return}let s=this.last===null?0:Math.min(.1,Math.max(0,t-this.last));this.last=t,this.uTime.value=t;let a=Math.max(0,Math.floor((e-420)/560)),o=Math.floor((e+950)/560);for(let[u,d]of this.items)(u<a||u>o)&&(this._remove(d),this.items.delete(u));for(let u=a;u<=o;u++)if(!this.items.has(u)){this.items.set(u,this._build(WS(u)));break}let c=null,l=1/0;for(let u of this.items.values()){for(let{sprite:g,sp:v,ph:m}of u.sprays){let p=(t*.32+m)%1;g.position.y=v.y+p*v.h*.8,g.scale.set(v.w*(.6+.7*p),v.h*(.5+.8*p),1),g.material.opacity=v.op*Math.sin(Math.PI*p),g.material.color.setRGB(.88,.92,.93).multiplyScalar(.2+.8*n)}let d=Math.abs(u.spec.s-e);d<l&&(l=d,c=u)}let h=(u,d,g,v,m,p)=>{let x=c;if(!x||g<.8||Math.abs(u-x.spec.s)>x.sheet+v.length/2)return!1;let y=this.road.at(u,this._p),_=Math.cos(y.th),M=-Math.sin(y.th),b=-Math.sin(y.th)*m,w=-Math.cos(y.th)*m,C=Math.min(1.6,Math.max(.35,g/15)),E=!1;for(let S of[-.33,.33]){let I=u+S*v.length*m;if(!(Math.abs(I-x.spec.s)>x.sheet*.95)){E=!0;for(let D of[-1,1]){let k=p*C*s+Math.random();for(let R=1;R<=k;R++){let A=y.x+_*(d+D*v.width*.42)+b*S*v.length,P=y.z+M*(d+D*v.width*.42)+w*S*v.length,N=D*(.8+2.2*Math.random())*C,U=g*(.1+.3*Math.random());this.splash.emit(A,y.y+.25,P,_*N+b*U,(1.2+2.6*Math.random())*C,M*N+w*U)}}}}return E},f=!1;i.dim&&i.v!==void 0&&(f=h(e,i.d||0,i.v,i.dim,1,40));for(let u of i.npcs||[])h(u.s,u.d,u.v,u.dim,u.direction??-1,30);if(this.splash.update(s,n),f&&!this.inWater&&i.audio?.splash?.(Math.min(1.3,Math.max(.25,i.v/20))),this.inWater=f,i.audio?.setWater){let u=0,d=0;if(c&&i.cam){let g=i.cam.position,v=c.group.position,m=v.x-g.x,p=v.z-g.z,x=Math.max(0,Math.hypot(m,p,v.y-g.y)-4);u=c.spec.flow*(.35+.65*c.spec.flow)/(1+(x/28)**2);let y=this._r.set(1,0,0).applyQuaternion(i.cam.quaternion);d=Math.max(-.8,Math.min(.8,(m*y.x+p*y.z)/(Math.hypot(m,p)||1)))}i.audio.setWater(u,d)}}};var hi=420,Sh=new T(0,1,0),YS=`
  attribute float aA, aS, aR;
  uniform float uScale;
  varying float vA, vR;
  void main() {
    vec4 mv = viewMatrix * vec4(position, 1.0);
    vA = aA; vR = aR;
    gl_PointSize = clamp(aS * uScale / -mv.z, 1.0, 160.0);
    gl_Position = projectionMatrix * mv;
  }`,JS=`
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
  }`,Ah=class{constructor(t,e){this.person=e,this.cig=new Dt;let n=new Gt(new qe(.0055,.0055,.062,8).translate(0,.0115,0),new Ut({color:15921128,roughness:.8})),i=new Gt(new qe(.0057,.0057,.023,8).translate(0,-.031,0),new Ut({color:13208124,roughness:.7}));this.ember=new Gt(new qe(.0056,.0056,.005,8).translate(0,.0425,0),new en({color:new it(1.6,.35,.08)})),this.cig.add(n,i,this.ember),this.cig.visible=!1,t.add(this.cig);let s=Sa(),a=(c,l)=>{let h=new Un(new Rn({map:s,color:c,transparent:!0,opacity:0,depthWrite:!1,blending:Ze,fog:!1}));return h.scale.setScalar(l),h.visible=!1,t.add(h),h};this.tipGlow=a(16734746,.07),this.flame=a(16757575,.09),this.pos=new Float32Array(hi*3),this.vel=new Float32Array(hi*3),this.age=new Float32Array(hi).fill(99),this.life=new Float32Array(hi).fill(1),this.s0=new Float32Array(hi),this.s1=new Float32Array(hi),this.a0=new Float32Array(hi),this.drag=new Float32Array(hi),this.aA=new Float32Array(hi),this.aS=new Float32Array(hi),this.aR=new Float32Array(hi);let o=new Rt;o.setAttribute("position",new At(this.pos,3).setUsage(Kn)),o.setAttribute("aA",new At(this.aA,1).setUsage(Kn)),o.setAttribute("aS",new At(this.aS,1).setUsage(Kn)),o.setAttribute("aR",new At(this.aR,1).setUsage(Kn)),this.mat=new we({uniforms:{uScale:{value:500},uColor:{value:new it(.7,.7,.72)}},vertexShader:YS,fragmentShader:JS,transparent:!0,depthWrite:!1,fog:!1}),this.points=new on(o,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=5,t.add(this.points),this.next=0,this.emitTip=0,this.emitMouth=0,this.t=0,this._h=new T,this._e=new T,this._d=new T,this._c=new T,this.tip=new T,this._q=new Xt,this._dir=new T,this._r=new T,this._fv=[0,1,2,3].map(()=>new T),this.fg=null}_spawn(t,e,n,i,s,a,o){let c=this.next;this.next=(this.next+1)%hi,this.pos.set([t.x,t.y,t.z],c*3),this.vel.set([e.x,e.y,e.z],c*3),this.age[c]=0,this.life[c]=n,this.s0[c]=i,this.s1[c]=s,this.a0[c]=a,this.drag[c]=o,this.aR[c]=Math.random()}update(t,e,n,i){this.t+=t;let s=this.person.arms?.r,a=e.on&&s&&this.person.root.visible;if(this.cig.visible=!!a,e.errOK=!1,a){if(!this.fg&&this.person.model){let g=["index_02_r","index_03_r","middle_02_r","middle_03_r"].map(v=>this.person.model.getObjectByName(v));this.fg=g.every(Boolean)?g:s.slice(1)}let u=this._c;if(this.fg.length===4){let[g,v,m,p]=this.fg.map((x,y)=>x.getWorldPosition(this._fv[y]));u.copy(g).add(m).multiplyScalar(.5*.65).addScaledVector(v.add(p),.5*.35)}else{let g=s[2].getWorldPosition(this._h),v=s[1].getWorldPosition(this._e);u.copy(g).addScaledVector(this._d.subVectors(g,v).normalize(),.1)}let d=this._dir.copy(e.F).multiplyScalar(.45).addScaledVector(e.R,.85).addScaledVector(Sh,-.06).normalize();this.cig.position.copy(u).addScaledVector(d,.0125),this.cig.quaternion.setFromUnitVectors(Sh,d),this.tip.copy(u).addScaledVector(d,.055),e.err.copy(e.mouth).addScaledVector(d,.03).sub(u),e.errOK=!0}let o=a&&e.lit;if(this.ember.visible=o,this.tipGlow.visible=o,o){let u=e.drag?1:.45+.08*Math.sin(this.t*7);this.ember.material.color.setRGB(1.6*(.6+u),.35*(.4+u),.08),this.tipGlow.position.copy(this.tip),this.tipGlow.material.opacity=.35+.65*u,this.tipGlow.scale.setScalar(.05+.05*u)}this.flame.visible=a&&e.flame>0,this.flame.visible&&(this.flame.position.copy(this.tip).addScaledVector(Sh,-.015),this.flame.material.opacity=.7+.3*Math.sin(this.t*40),this.flame.scale.setScalar(.08+.02*Math.sin(this.t*27)));let c=(n.windDir?.x||0)*(.12+.6*n.wind),l=(n.windDir?.y||0)*(.12+.6*n.wind),h=this._d;if(o)for(this.emitTip+=t*(e.drag?16:12);this.emitTip>=1;)this.emitTip-=1,h.set(c*.3+(Math.random()-.5)*.03,.16+Math.random()*.06,l*.3+(Math.random()-.5)*.03),this._spawn(this.tip,h,2.8+Math.random(),.022,.2,.3,.2);if(e.exhale&&a)for(this.emitMouth+=t*75;this.emitMouth>=1;)this.emitMouth-=1,h.copy(e.F).multiplyScalar(.3).addScaledVector(e.R,-.14).multiplyScalar(.9+Math.random()*.4).addScaledVector(Sh,-.06+Math.random()*.07).add(this._r.set((Math.random()-.5)*.08,(Math.random()-.5)*.04,(Math.random()-.5)*.08)),this._spawn(e.mouth,h,2.4+Math.random()*.8,.025,.24,.42,1.3);else this.emitMouth=0;let f=0;for(let u=0;u<hi;u++){let d=this.age[u];if(d>=this.life[u]){this.aA[u]=0,this.aS[u]=0;continue}f++,this.age[u]=d+t;let g=Math.exp(-this.drag[u]*t),v=u*3;this.vel[v]=this.vel[v]*g+c*(1-g),this.vel[v+1]=this.vel[v+1]*g+.12*(1-g)+.02*t,this.vel[v+2]=this.vel[v+2]*g+l*(1-g),this.pos[v]+=this.vel[v]*t+Math.sin(this.t*1.7+u)*.004,this.pos[v+1]+=this.vel[v+1]*t,this.pos[v+2]+=this.vel[v+2]*t+Math.cos(this.t*1.3+u*1.7)*.004;let m=this.age[u]/this.life[u];this.aS[u]=this.s0[u]+(this.s1[u]-this.s0[u])*Math.sqrt(m),this.aA[u]=this.a0[u]*Math.min(1,m*8)*(1-m)*(1-m)}if(this.points.visible=f>0,f){let u=this.points.geometry;u.attributes.position.needsUpdate=!0,u.attributes.aA.needsUpdate=!0,u.attributes.aS.needsUpdate=!0,u.attributes.aR.needsUpdate=!0,this.mat.uniforms.uScale.value=i;let d=Math.min(1.1,.15+.75*(n.light??1));this.mat.uniforms.uColor.value.setRGB(.85*d,.85*d,.88*d)}}};J0();var Pt=r=>document.getElementById(r),er=(r,t,e)=>Math.min(e,Math.max(t,r)),ZS=(r,t,e)=>{let n=er((e-r)/(t-r),0,1);return n*n*(3-2*n)},Va=1/3.6,Ph=1.5,nr=[25*Va,50*Va,180*Va],nc=nr[0],QS=10*Va,$S=60*Va,Rh=nr[2],As=Pt("c"),sn=new wo({canvas:As,antialias:!1,powerPreference:"high-performance"}),$o=1;sn.setPixelRatio($o);sn.shadowMap.enabled=!0;sn.shadowMap.type=Mf;sn.toneMapping=Af;var De=new ds,Ct=new We(60,1,.3,4e3);Ct.layers.enable(3);var ve=new Tl,Wn=new Pl(De,ve,sn),vn=new jl(De,ve,sn),zt=new Jl(sn,De,Ct),rc=new Ua(De,sn),Wa=new Ua(De,sn,"grass"),qa=new Ua(De,sn,"meadow"),yt=new th(De),qt=new eh(Ct);qt.groundAt=(r,t)=>Math.max(vn.heightAt(r,t),Pr.group.visible?Pr.level+1.2:-1/0);var Dv=new T,Fv=new T;qt.eyeAt=r=>!Ge.ready||Nt.active?!1:(Ge.head.getWorldPosition(r),Dv.set(0,0,-1).applyQuaternion(yt.root.quaternion),Fv.set(0,1,0).applyQuaternion(yt.root.quaternion),r.addScaledVector(Fv,.15).addScaledVector(Dv,-.04),!0);var ws=new ah,un=new lh(sn,Di[Wd].msaa),Xa=new hh(sn),Ge=new Go,Nt=new dh(yt,Ge);Nt.groundAt=(r,t)=>{let e=ep({x:r,z:t},ve,X.s),n=ve.at(e.s,{}),i=Math.abs(e.d);if(i<=Le.halfWidth)return n.y+.05;if($n[rt.map].id==="city"&&i<=Ae.hw+Ae.walk+.4){let s=ve.nearJunction(e.s);return n.y+(Math.abs(e.s-s)<Ae.side?.05:.2)}return Math.max(vn.heightAt(r,t),n.y-.02)};yt.viewer=Ct;var Zv=new Ah(De,Ge),Es=new Vl(De),Ka=new ph(sn),_p=new mh(sn),tc=new vh,Mp=new bh(De),Lh=new Al(De),In=new Dl(De,ve,Wn.roadMat,Wn);Wn.extraLamps=()=>In.lamps();qt.collide=(r,t,e)=>In.collide(r,t,e);var Fh=new Zl,Hv=new T,Ln=new _h(De,yt);Ln.stopFor=(r,t,e)=>In.stopAhead(r,t,e);var Ke=new kl(De,ve,In),Ts=new zl(De,ve,In);Ke.setup(De,yt.softTex,Ct);Ke.pool=()=>Ln.pool;var Qv=!1,$v=null,Ch=0,Qi=new Ol(Ke,Ts,{toast:(r,t)=>ir(r,t),fade:(r,t)=>{let e=Pt("fade");t&&(e.textContent=t),e.classList.toggle("show",r)},driverHidden:r=>{Qv=r},siren:(r,t,e)=>ws.setSiren(r,t,e),end:()=>{X.v=0,X.home=Ae.lanes[1],X.d=X.home,X.latVel=0,X.manual=!1,Ke.cars=Ke.cars.filter(r=>r.cross||r.script||Math.abs(r.d-X.d)>2.6||r.s<X.s-14||r.s>X.s+22);for(let r of Ts.peds.slice())Math.abs(r.u-X.d)<2.5&&Math.abs(r.s-X.s)<6&&Ts.remove(r);Ch=3,rt.cam=Ne.findIndex(r=>r.id==="chase"),qt.setMode(rt.cam),Ir(),Ce(),$v=null,ir("Lái cẩn thận nhé! Nhớ dừng đèn đỏ và nhường người đi bộ.")}}),Pr=new Xl(De),Ep=new Th(De,ve,vn),Hh=new Eh(De);yt.tilt.add(Fh.group);yt.tilt.add(Ka.group);function Cr(){let r=window.innerWidth,t=window.innerHeight;sn.setSize(r,t,!1),Ct.aspect=r/t,Ct.updateProjectionMatrix(),un.resize(),Xa.resize(),t2()}var tx=0;function t2(){let r=window.innerWidth,t=window.innerHeight,e=Math.min(t*.135,Math.max(0,(t-r/2.39)/2));tx=e/t,document.documentElement.style.setProperty("--bar",e.toFixed(1)+"px")}window.addEventListener("resize",Cr);var cc=matchMedia("(pointer: coarse)").matches&&Math.min(screen.width,screen.height)<600,e2=/iP(hone|od|ad)/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,ic=document.documentElement,wp=!!(ic.requestFullscreen||ic.webkitRequestFullscreen),Ya=()=>!!(document.fullscreenElement||document.webkitFullscreenElement);function ex(){if(!wp||Ya())return;let r=ic.requestFullscreen?ic.requestFullscreen({navigationUI:"hide"}):ic.webkitRequestFullscreen();Promise.resolve(r).then(()=>screen.orientation?.lock?.("landscape")).catch(()=>{})}function n2(){if(Ya()){try{screen.orientation?.unlock?.()}catch{}(document.exitFullscreen||document.webkitExitFullscreen).call(document)}}var gp=!1,nx=()=>{Ya()?(gp=!0,n2()):(gp=!1,ex())},Nv=r=>{!gp&&!Ya()&&!oe.full.contains(r.target)&&ex()};cc&&(window.addEventListener("pointerup",Nv,!0),window.addEventListener("touchend",Nv,!0));var ix=()=>{Cr(),setTimeout(Cr,120),setTimeout(Cr,450),lc()};["fullscreenchange","webkitfullscreenchange"].forEach(r=>document.addEventListener(r,()=>{ix(),Ce()}));window.addEventListener("orientationchange",ix);window.visualViewport?.addEventListener("resize",Cr);var sx=!1;function lc(){let r=cc&&!sx&&window.innerHeight>window.innerWidth;Pt("rotate").hidden=!r}Pt("rotate-ok").addEventListener("click",()=>{sx=!0,lc()});Pt("rotate").querySelector(".ios").hidden=!(e2&&!wp&&!navigator.standalone);window.addEventListener("resize",lc);lc();Cr();var X={home:Ph,goal:0,manual:!1,s:150,d:Ph,v:nc,target:nc,fast:!0,gear:2,fx:0,latVel:0,pitch:0,pos:new T,yaw:0},En=new Set,Ei={active:!1,id:-1,x:0,y:0},rt={car:0,character:0,map:$n.findIndex(r=>r.id==="meadow"),cam:Ne.findIndex(r=>r.id==="orbit"),weather:cn.findIndex(r=>r.id==="cloudy"),time:Mn.findIndex(r=>r.id==="night"),music:0,cine:!0,started:!1,mistCover:.9,mistDens:.4,fstop:jg,quality:i2()},Ga=null,cp=!1,kv=!0,rx="chilldrive.tuning.v1",Yn=null,ax=Object.freeze({avoid:1,density:1,speed:1,walkers:38,signal:1,models:0}),ox=Object.freeze({signal:1,signalSize:1,windows:1,signs:1,npc:1,emergency:1}),Mi={...ox};function Tp(){In.uSig.uGain.value=Mi.signal,In.uSig.uSize.value=Mi.signalSize,In.uWin.value=Mi.windows,In.uSignK.value=Mi.signs,Ke.uNpc.value=Mi.npc,Ln.lampK=Mi.npc,Ke.emK=Mi.emergency}var Be={...ax};function Rr(){if(Be.density<Ke.density){let r=Be.density/Ke.density;Ke.cars=Ke.cars.filter(t=>t.script||t.crashed||Math.random()<r)}Ke.density=Be.density;for(let r of Ke.cars)!r.script&&r.type!=="police"&&r.type!=="ambulance"&&(r.vMax*=Be.speed/(Ke.speedK||1));Ke.speedK=Be.speed,Ts.walkers=Math.round(Be.walkers),In.clockRate=1/Be.signal,Ke.useModels=!!Be.models,Be.models||Ke.releaseModels()}try{if(Yn=JSON.parse(localStorage.getItem(rx)),Yn?.camera)for(let[r,t]of Object.entries(Yn.camera))qt.tune[r]&&Object.assign(qt.tune[r],t);if(Yn?.weather)for(let[r,t]of Object.entries(Yn.weather))zt.weatherProfiles[r]&&Object.assign(zt.weatherProfiles[r],t);Yn?.environment&&Object.assign(zt.tune,Yn.environment),Yn?.traffic&&Object.assign(Be,Yn.traffic),Yn?.lighting&&Object.assign(Mi,Yn.lighting),Yn?.carLights&&Object.assign(yt.headlights.tune,Yn.carLights),Yn?.streetLights&&Object.assign(Wn.lampTune,Yn.streetLights)}catch{}qt.setMode(rt.cam);rt.fstop=Ki.indexOf(qt.aperture);var oe={full:Pt("b-full"),stop:Pt("b-stop"),character:Pt("b-character"),quality:Pt("b-quality"),lens:Pt("b-lens"),mist:Pt("b-mist"),fast:Pt("b-fast"),car:Pt("b-car"),map:Pt("b-map"),cam:Pt("b-cam"),weather:Pt("b-weather"),time:Pt("b-time"),music:Pt("b-music")},Jn=(r,t,e)=>{r.querySelector("b").textContent=t,r.querySelector("span").textContent=e,r.title=e};function Ce(){Jn(oe.car,"🚗",yt.list[rt.car]?.name??"…"),Jn(oe.character,"🧑",Lr?"Đang tải…":rt.character===1?"Chisa":"Người lái"),oe.character.disabled=Lr||!Ge.ready||Nt.active||yt.current?.def?.id!=="mustang",oe.character.title=yt.current?.def?.id==="mustang"?"Đổi nhân vật":"Chisa hiện hỗ trợ Mustang",Jn(oe.map,$n[rt.map].icon,$n[rt.map].name),Jn(oe.cam,"🎥",Ne[rt.cam].name),Jn(oe.weather,cn[rt.weather].icon,cn[rt.weather].name),Jn(oe.time,Mn[rt.time].icon,Mn[rt.time].name),Jn(oe.music,Oo[rt.music].icon,Oo[rt.music].name),Jn(oe.fast,"⚡",Math.round(nr[X.gear]*3.6)+" km/h"),oe.fast.classList.toggle("on",X.gear>0),Jn(oe.mist,"🌫️","Sương "+Math.round(rt.mistDens*100)+"%"),oe.mist.classList.toggle("on",!Pt("mistpanel").hidden),Jn(oe.lens,"📷",lx()),Jn(oe.quality,"⚙️",Di[rt.quality].name),Jn(oe.stop,Nt.state==="parked"?"▶️":Nt.state==="off"?"🅿️":"⏳",Nt.state==="parked"?"Đi tiếp":Nt.state==="off"?"Dừng xe":"…"),oe.lens.classList.toggle("on",!Pt("lenspanel").hidden),oe.cam.classList.toggle("on",xe==="camera"),oe.weather.classList.toggle("on",xe==="weather"),oe.time.classList.toggle("on",xe==="time"),Pt("b-traffic").classList.toggle("on",xe==="traffic"),Pt("b-lighting").classList.toggle("on",xe==="lighting"),oe.full.hidden=!(wp&&cc),Jn(oe.full,Ya()?"🗗":"⛶",Ya()?"Thoát toàn màn hình":"Toàn màn hình");let r=(t,e,n,i=!1)=>{let s=Pt(t);return s.textContent=e,s.title=n,s.classList.toggle("on",i),s};r("q-speed",X.gear>0?Math.round(nr[X.gear]*3.6)+" km/h":"Speed","Tốc độ: "+Math.round(nr[X.gear]*3.6)+" km/h (phím F)",X.gear>0),r("q-pause",Nt.state==="parked"?"Resume":"Pause",Nt.state==="parked"?"Đi tiếp (phím P)":"Dừng xe (phím P)",Nt.active),r("q-car","Car","Xe: "+(yt.list[rt.car]?.name??"…")+" (phím C)"),r("q-cam","Camera","Camera: "+Ne[rt.cam].name+" (phím Q)"),r("q-driver","Driver","Nhân vật: "+(rt.character===1?"Chisa":"Người lái")+" (phím X)").disabled=oe.character.disabled,r("q-map","Map","Map: "+$n[rt.map].name+" (phím M)"),r("q-weather","Weather","Thời tiết: "+cn[rt.weather].name+" (phím R)"),r("q-time","Time","Thời gian: "+Mn[rt.time].name+" (phím T)"),r("q-setting","Setting","Cài đặt (phím K)",!Pt("bar").hidden),xp==="city"&&rt.started&&bp("city")}function i2(){try{let r=Di.findIndex(t=>t.id===localStorage.getItem("chilldrive.quality"));if(r>=0)return r}catch{}return Wd}function cx(){let r=Di[rt.quality];$o=r.id==="low"?r.ratio:Math.min(r.ratio,Math.max(1,window.devicePixelRatio||1)),cc&&r.id==="good"&&($o=Math.min($o,1.25)),sn.setPixelRatio($o),un.setSamples(r.msaa),Cr();for(let t of[rc,Wa,qa])t.setView(r.view),t.setDensity(r.veg);vn.setView(r.view,Ct.position),zt.setShadowSize(r.shadow),Xa.enabled=r.refl,Es.setRadius(r.trees);try{localStorage.setItem("chilldrive.quality",r.id)}catch{}}var s2=()=>{rt.quality=(rt.quality+1)%Di.length,cx(),Ce(),$i("Chất lượng · "+Di[rt.quality].name)},$i=r=>{rt.started&&ir(r,!1,1600)};function lx(){return Math.round(qt.focal)+"mm f/"+qt.aperture}var Lr=!1,lp=0;async function Sp(r){if(Nt.active)return;r=yt.current?.def?.id==="mustang"?r%2:0;let t=++lp;Lr=!0,Ce();let e;try{if(e=await new Go().load(r?"assets/models/chisa_wuthering_waves.glb":"assets/models/person.glb",{chisa:r===1}),t!==lp||r&&yt.current?.def?.id!=="mustang"){e.dispose();return}Ge.replace(e),rt.character=r,Nt.place(yt.dim),Nt.sit(),Ja(un.sceneRT,Ct,Ge.root).catch(()=>{})}catch(n){e?.dispose(),console.warn("Không tải được nhân vật",n)}finally{t===lp&&(Lr=!1,Ce())}}var Nh=()=>{if(!Lr&&Ge.ready&&yt.current?.def?.id==="mustang")return $i("Nhân vật · "+((rt.character+1)%2===1?"Chisa":"Người lái")),Sp(rt.character+1)};async function kh(r){if(!Nt.active){rt.car=(r+yt.list.length)%yt.list.length,Jn(oe.car,"🚗","Đang tải…");try{if(!await yt.select(rt.car))return}catch(t){if(console.error("Không tải được xe",yt.list[rt.car].name,t),yt.list.length>1)return yt.list.splice(rt.car,1),kh(rt.car)}yt.current?.def?.id!=="mustang"&&(rt.character||Lr)&&await Sp(0),Ge.ready&&!Nt.active&&(Nt.place(yt.dim),Nt.sit()),Ka.place(yt.dim,yt.current.screen),Fh.place(yt.current.screen),_p.setCar(yt.current),hx(),Ce()}}var ac=()=>{if(!Nt.active)return $i("Xe · "+yt.list[(rt.car+1)%yt.list.length].name),kh(rt.car+1)};function Uh(){Qi.active||!Ge.ready||!rt.started||Lr||(Nt.state==="off"&&(Lp(0),Nt.place(yt.dim)),Nt.toggle(X.v)&&(Ce(),$i(Nt.state==="enter"?"Đi tiếp":"Dừng xe")))}var Uv=0;function Ja(r,t,e=De){let n=[];e.traverse(a=>{a.material&&!a.layers.test(t.layers)&&(n.push(a,a.material),a.material=null)});let i=sn.getRenderTarget();sn.setRenderTarget(r);let s=sn.compileAsync(e,t,De);sn.setRenderTarget(i);for(let a=0;a<n.length;a+=2)n[a].material=n[a+1];return s}zt.onCarEnv=r=>yt.setEnvMap(r);zt.carEnvRT&&yt.setEnvMap(zt.carEnvRT.texture);yt.prepare=r=>Ja(un.sceneRT,Ct,r);Hh.onBuild=r=>{Ja(un.sceneRT,Ct,r).catch(()=>{})};function hx(r=500){clearTimeout(Uv),Uv=setTimeout(()=>{Ja(un.sceneRT,Ct).catch(t=>console.warn("warmup",t))},r)}var ux=()=>{let r=$n[rt.map].id;X0(r);let t=r==="city";if(Le.halfWidth=t?Ae.hw:K0,ve.setShape(t),ve.dirt=r==="forest",ve.recomputeHeights(),r==="sea"){ve.ensure(X.s+12e4);let n=1/0;for(let i of ve.pts)n=Math.min(n,i.y);Ie.seaLevel=n-3}Pr.setMap(r==="sea",Ie.seaLevel),Wn.setMap(r),vn.reset(),vn.setCar(X.s),vn.prime(Ct.position.lengthSq()?Ct.position:X.pos),rc.visible=r==="reed",Wa.visible=r==="forest",qa.visible=r==="meadow",Hh.visible=r==="meadow",Lh.reset(),Lh.visible=r==="mountain",In.visible=t,In.prime(X.s),Mp.ground.clear(),Ln.policy.city=t,Qi.active&&Qi.finish(),Ke.visible=t,Ts.visible=t,t&&Ln.clearAll(),Pt("brake").hidden=!t,Pt("b-traffic").hidden=!t,!t&&xe==="traffic"&&Qa(),Rr(),Tp(),t&&rt.started&&ir("Map Phố: tự phanh khi gặp đèn đỏ — giữ phím Space hoặc nút Space"),ec=null;let e=xp;xp=r,e!==r&&(e==="city"?bp("city"):e!==null&&t&&bp("world"),t?zv(ja.city||fx()):e==="city"&&ja.world&&zv(ja.world)),qt.sideDist=t?13:null,qt.orbitR=t?10:null,X.home=t?Ae.lanes[1]:Ph,Ep.setMap(r),qt.sidePref=r==="mountain"?1:0,Es.setRadius(Di[rt.quality].trees),qt.sideSign=0,hx()},zh=()=>{rt.map=(rt.map+1)%$n.length,ux(),Ce(),$i("Map · "+$n[rt.map].name)};function Ir(){rt.fstop=Math.max(0,Ki.indexOf(qt.aperture)),sr()}var xe=null,Fr=()=>{},Ap=()=>{rt.cam=(rt.cam+1)%Ne.length,qt.setMode(rt.cam),Ir(),Ce(),xe==="camera"&&Fr(),$i("Camera · "+Ne[rt.cam].name)},vp=0,xp=null,ja={world:null,city:null};try{ja.city=JSON.parse(localStorage.getItem("chilldrive.city"))}catch{}var fx=()=>({weather:cn.findIndex(r=>r.id==="auto"),time:Mn.findIndex(r=>r.id==="auto"),cam:Ne.findIndex(r=>r.id==="chase")});function bp(r){if(ja[r]={weather:rt.weather,time:rt.time,cam:rt.cam},r==="city")try{localStorage.setItem("chilldrive.city",JSON.stringify(ja.city))}catch{}}function zv(r){(!cn[r.weather]||!Mn[r.time]||!Ne[r.cam])&&(r=fx()),Rp(r.weather),rt.time=r.time,zt.setTime(Mn[r.time].hour),rt.cam=r.cam,qt.setMode(rt.cam),Ir()}var r2=[["clear",.34],["cloudy",.34],["rain",.16],["fog",.1],["storm",.06]];function Rp(r,t=!1){rt.weather=r,cn[r].id==="auto"?vp=0:zt.setWeather(cn[r].id)}function a2(r){if(cn[rt.weather].id!=="auto"||(vp-=r)>0)return;vp=150+Math.random()*150;let t=Math.random(),e="cloudy";for(let[n,i]of r2)if((t-=i)<0){e=n;break}e===zt.weather&&(e=e==="clear"?"cloudy":"clear"),zt.setWeather(e)}var Cp=()=>{Rp((rt.weather+1)%cn.length,!0),Ce(),xe==="weather"&&Fr(),$i("Thời tiết · "+cn[rt.weather].name)},Pp=()=>{rt.time=(rt.time+1)%Mn.length,zt.setTime(Mn[rt.time].hour),Mn[rt.time].id==="night"&&o2(.6,.6),Ce(),xe==="time"&&Fr(),$i("Thời gian · "+Mn[rt.time].name)};function o2(r,t){rt.mistCover=r,rt.mistDens=t;for(let[e,n]of[["mist-cover","mistCover"],["mist-dens","mistDens"]])Pt(e).value=Math.round(rt[n]*100),Pt(e+"-v").textContent=Pt(e).value}var c2=()=>document.body.classList.toggle("cine",rt.cine&&rt.started);function Lp(r){let t=X.fast;X.gear=r,X.fast=r===2,X.target=nr[Math.min(r,1)],X.fast!==t&&sr()}var Oh=()=>{Nt.active||(Lp((X.gear+1)%nr.length),Ce(),$i("Tốc độ · "+Math.round(nr[X.gear]*3.6)+" km/h"))},dx=()=>{rt.music=(rt.music+1)%Oo.length,ws.setMode(rt.music),Ce(),$i("Âm thanh · "+Oo[rt.music].name)};oe.fast.onclick=Oh;var Qa=()=>{xe=null,Pt("tunepanel").hidden=!0,Ce()},px=()=>{Qa(),Pt("mistpanel").hidden=!Pt("mistpanel").hidden,Pt("lenspanel").hidden=!0,Ce()};oe.mist.onclick=px;var mx=()=>{Qa(),Pt("lenspanel").hidden=!Pt("lenspanel").hidden,Pt("mistpanel").hidden=!0,Ce()};oe.lens.onclick=mx;oe.quality.onclick=s2;oe.stop.onclick=Uh;oe.character.onclick=Nh;oe.full.onclick=nx;var Bh=!1,yp=!1,ec=null,Ko=0,Ov=0,Bv=null,hp=0,up=0,fp=!1;{let r=Pt("brake"),t=n=>{yp=!0,r.classList.add("on"),n.preventDefault()},e=()=>{yp=!1,r.classList.remove("on")};r.addEventListener("pointerdown",t);for(let n of["pointerup","pointerleave","pointercancel"])r.addEventListener(n,e)}function ir(r,t=!1,e=0){let n=Pt("toast");n.textContent=r,n.classList.toggle("bad",t),n.classList.add("show"),clearTimeout(Ov),Ov=setTimeout(()=>n.classList.remove("show"),e||(t?2800:4500))}Pt("b-shot").onclick=()=>{Bh=!0};function l2(){Bh=!1,As.toBlob(async r=>{if(!r)return;let t="chill-drive-"+new Date().toISOString().slice(0,19).replace(/[T:]/g,"-")+".png",e=new File([r],t,{type:"image/png"});if(cc&&navigator.canShare?.({files:[e]}))try{await navigator.share({files:[e]});return}catch{}let n=document.createElement("a");n.href=URL.createObjectURL(r),n.download=t,document.body.append(n),n.click(),n.remove(),setTimeout(()=>URL.revokeObjectURL(n.href),4e3)},"image/png")}var Za=Pt("lens-focal"),oc=Pt("lens-fstop");Za.min=nh;Za.max=ih;oc.max=Ki.length-1;var sr=()=>{Za.value=Math.round(qt.focal),Pt("lens-focal-v").textContent=Math.round(qt.focal)+"mm",rt.fstop=Math.max(0,Ki.indexOf(qt.aperture)),oc.value=rt.fstop,Pt("lens-fstop-v").textContent="f/"+qt.aperture};Za.addEventListener("input",()=>{let r=qt.tune[Ne[rt.cam].id];r.focal=qt.focal=Number(Za.value),sr(),Ce()});oc.addEventListener("input",()=>{let r=qt.tune[Ne[rt.cam].id];rt.fstop=Number(oc.value),r.aperture=qt.aperture=Ki[rt.fstop],sr(),Ce()});for(let r of[Za,oc])r.addEventListener("change",()=>r.blur());sr();for(let[r,t]of[["mist-cover","mistCover"],["mist-dens","mistDens"]]){let e=Pt(r);e.value=Math.round(rt[t]*100),Pt(r+"-v").textContent=e.value,e.addEventListener("input",()=>{rt[t]=e.value/100,Pt(r+"-v").textContent=e.value,Ce()}),e.addEventListener("change",()=>e.blur())}var h2={chase:[["distance","Khoảng lùi (m)",1,20,.1],["height","Độ cao (m)",.2,8,.05],["carHeight","Theo chiều cao xe",0,1,.01],["lookAhead","Nhìn trước (m)",0,40,.5],["lookHeight","Cao điểm nhìn (m)",0,5,.05],["slopeLook","Bám dốc",0,25,.5],["speedBack","Lùi theo tốc độ",0,6,.1],["cineBack","Lùi cinematic",0,6,.1],["follow","Mượt vị trí",.2,20,.1],["lookFollow","Mượt điểm nhìn",.2,20,.1],["near","Cắt gần (m)",.02,2,.01]],low:[["distance","Khoảng lùi (m)",1,20,.1],["height","Độ cao (m)",.2,5,.05],["lookAhead","Nhìn trước (m)",0,40,.5],["lookHeight","Cao điểm nhìn (m)",0,5,.05],["slopeLook","Bám dốc",0,25,.5],["follow","Mượt vị trí",.2,20,.1],["lookFollow","Mượt điểm nhìn",.2,20,.1],["near","Cắt gần (m)",.02,2,.01]],side:[["distance","Khoảng ngang (m)",1,25,.1],["height","Độ cao (m)",.2,8,.05],["lookHeight","Tỉ lệ cao xe",0,1,.01],["follow","Mượt vị trí",.2,20,.1],["lookFollow","Mượt điểm nhìn",.2,20,.1],["near","Cắt gần (m)",.02,2,.01]],cockpit:[["eyeSide","Dịch ngang (m)",-.5,.5,.005],["eyeHeight","Dịch cao (m)",-.5,.5,.005],["eyeForward","Dịch trước (m)",-.5,.5,.005],["pitch","Góc chúc (rad)",-.2,.8,.005],["lookDistance","Tầm nhìn (m)",5,80,1],["follow","Mượt vị trí",.2,20,.1],["lookFollow","Mượt điểm nhìn",.2,20,.1],["near","Cắt gần (m)",.01,.5,.005]],orbit:[["radius","Bán kính (m)",1,30,.1],["height","Độ cao (m)",.2,12,.05],["heightWave","Nhấp nhô (m)",0,4,.05],["waveRate","Nhịp nhấp nhô",0,3,.05],["speed","Tốc độ quay",-.8,.8,.01],["lookHeight","Cao điểm nhìn (m)",0,5,.05],["follow","Mượt vị trí",.2,20,.1],["lookFollow","Mượt điểm nhìn",.2,20,.1],["near","Cắt gần (m)",.02,2,.01]],drone:[["distance","Khoảng lùi (m)",1,50,.5],["height","Độ cao (m)",2,50,.5],["lookAhead","Nhìn trước (m)",-10,40,.5],["lookHeight","Cao điểm nhìn (m)",0,8,.05],["follow","Mượt vị trí",.2,20,.1],["lookFollow","Mượt điểm nhìn",.2,20,.1],["near","Cắt gần (m)",.02,2,.01]]},u2=[["fog","Mật độ sương",0,.012,1e-4],["overcast","Độ âm u",0,1,.01],["clouds","Mây che phủ",0,1,.01],["sun","Cường độ nắng",0,2,.01],["rain","Lượng mưa",0,1,.01],["snow","Lượng tuyết",0,1,.01],["wet","Độ ướt đường",0,1,.01],["cover","Tuyết phủ đất",0,1,.01],["wind","Sức gió",0,1,.01],["dark","Độ tối",0,1,.01]],f2=[["exposure","Phơi sáng",.2,2.5,.01],["skyBrightness","Độ sáng trời",0,3,.01],["directLight","Ánh sáng chính",0,3,.01],["ambientLight","Ánh sáng phủ",0,3,.01],["sunGlow","Quầng mặt trời",0,3,.01],["sunDisc","Đĩa mặt trời",0,3,.01],["cloudBrightness","Độ sáng mây",0,3,.01],["rays","Tia sáng",0,3,.01]],d2=Pt("tunepanel"),$s=Pt("tune-mode"),hc=Pt("tune-fields"),Gh=()=>{try{localStorage.setItem(rx,JSON.stringify({camera:qt.tune,weather:zt.weatherProfiles,environment:zt.tune,carLights:yt.headlights.tune,streetLights:Wn.lampTune,traffic:Be,lighting:Mi}))}catch{}},ui=r=>{let t=document.createElement("h4");t.textContent=r,hc.append(t)},Pn=({label:r,min:t,max:e,step:n,get:i,set:s})=>{let a=document.createElement("label"),o=document.createElement("span"),c=document.createElement("input"),l=document.createElement("input");o.textContent=r,c.type="range",l.type="number";for(let f of[c,l])f.min=t,f.max=e,f.step=n,f.value=i();let h=f=>{f=er(Number(f),Number(t),Number(e)),s(f),c.value=l.value=f,Gh()};c.oninput=()=>h(c.value),l.onchange=()=>{h(l.value),l.blur()},a.append(o,c,l),hc.append(a)},Yo=({label:r,get:t,set:e})=>{let n=document.createElement("label"),i=document.createElement("span"),s=document.createElement("input");i.textContent=r,s.type="color",s.value=t(),s.oninput=()=>{e(s.value),Gh()},n.append(i,s),hc.append(n)},dp=({label:r,options:t,get:e,set:n})=>{let i=document.createElement("label"),s=document.createElement("span"),a=document.createElement("select");s.textContent=r,t.forEach((o,c)=>{let l=document.createElement("option");l.value=c,l.textContent=o,l.selected=c===e(),a.append(l)}),a.onchange=()=>{n(Number(a.value)),Gh()},i.append(s,a),hc.append(i)},p2=()=>{let r=Ne[rt.cam].id,t=qt.tune[r];return h2[r].map(([e,n,i,s,a])=>({label:n,min:i,max:s,step:a,get:()=>t[e],set:o=>{t[e]=o,e==="near"&&(Ct.near=o,Ct.updateProjectionMatrix())}}))},Gv=()=>f2.map(([r,t,e,n,i])=>({label:t,min:e,max:n,step:i,get:()=>zt.tune[r],set:s=>{zt.tune[r]=s,zt.envKey=""}}));Fr=()=>{if(!xe)return;if(hc.replaceChildren(),$s.replaceChildren(),xe==="traffic"){$s.hidden=!0,Pt("tune-title").textContent="Giao thông (map Phố)",ui("Xe của chú"),dp({label:"Tự giữ khoảng cách (tránh đâm xe trước)",options:["Tắt — tự phanh, có thể đâm","Bật"],get:()=>Be.avoid,set:e=>{Be.avoid=e,ir(e?"Đã bật tự giữ khoảng cách":"Đã tắt tự giữ khoảng cách — chú tự phanh, đâm là có cảnh sát tới",!e)}}),dp({label:"Thêm xe của chú (Mustang, Mazda) vào giao thông",options:["Không","Có"],get:()=>Be.models,set:e=>{Be.models=e,Rr()}}),ui("Xe và người"),Pn({label:"Mật độ xe (×)",min:.05,max:2.5,step:.05,get:()=>Be.density,set:e=>{Be.density=e,Rr()}}),Pn({label:"Tốc độ xe khác (×)",min:.4,max:2,step:.05,get:()=>Be.speed,set:e=>{Be.speed=e,Rr()}}),Pn({label:"Số người đi bộ",min:0,max:80,step:1,get:()=>Be.walkers,set:e=>{Be.walkers=e,Rr()}}),ui("Đèn giao thông"),Pn({label:"Độ dài pha đèn (×)",min:.3,max:3,step:.1,get:()=>Be.signal,set:e=>{Be.signal=e,Rr()}});return}if(xe==="lighting"){$s.hidden=!0,Pt("tune-title").textContent="Lighting";let e=yt.headlights.tune,n=Wn.lampTune;ui("Đèn pha xe chú"),[["intensity","Cường độ",0,300,1],["distance","Tầm chiếu (m)",10,250,1],["angle","Góc mở (rad)",.1,1.55,.01],["penumbra","Độ mềm viền",0,1,.01],["glowOpacity","Độ sáng quầng",0,2,.01],["glowSize","Kích thước quầng",.2,8,.05]].forEach(([s,a,o,c,l])=>Pn({label:a,min:o,max:c,step:l,get:()=>e[s],set:h=>{e[s]=h}})),Yo({label:"Màu đèn pha",get:()=>e.color,set:s=>{e.color=s}}),ui("Đèn đường"),[["intensity","Cường độ",0,500,1],["distance","Tầm phủ (m)",10,250,1],["angle","Góc mở (rad)",.1,1.55,.01],["glowOpacity","Độ sáng quầng",0,2,.01],["glowSize","Kích thước quầng",1,24,.1]].forEach(([s,a,o,c,l])=>Pn({label:a,min:o,max:c,step:l,get:()=>n[s],set:h=>{n[s]=h}})),Yo({label:"Màu đèn đường",get:()=>n.color,set:s=>{n.color=s}}),ui("Map Phố"),[["signal","Đèn giao thông: độ sáng (×)",0,3,.05],["signalSize","Đèn giao thông: cỡ quầng (×)",.3,3,.05],["windows","Cửa sổ + cửa hàng ban đêm (×)",0,3,.05],["signs","Biển hiệu (×)",0,3,.05],["npc","Đèn xe khác (×)",0,3,.05],["emergency","Đèn cảnh sát / cấp cứu (×)",0,3,.05]].forEach(([s,a,o,c,l])=>Pn({label:a,min:o,max:c,step:l,get:()=>Mi[s],set:h=>{Mi[s]=h,Tp()}}));return}if(xe==="carLight"||xe==="streetLight"){$s.hidden=!0;let e=xe==="carLight",n=e?yt.headlights.tune:Wn.lampTune;Pt("tune-title").textContent=e?"Đèn xe người chơi":"Đèn đường",ui(e?"Chùm sáng và quầng đèn":"Ánh sáng phủ mặt đường"),(e?[["intensity","Cường độ",0,300,1],["distance","Tầm chiếu (m)",10,250,1],["angle","Góc mở (rad)",.1,1.55,.01],["penumbra","Độ mềm viền",0,1,.01],["decay","Suy giảm",0,2,.01],["glowOpacity","Độ sáng quầng",0,2,.01],["glowSize","Kích thước quầng",.2,8,.05]]:[["intensity","Cường độ",0,500,1],["distance","Tầm phủ (m)",10,250,1],["angle","Góc mở (rad)",.1,1.55,.01],["penumbra","Độ mềm viền",0,1,.01],["decay","Suy giảm",0,2,.01],["glowOpacity","Độ sáng quầng",0,2,.01],["glowSize","Kích thước quầng",1,24,.1]]).map(([s,a,o,c,l])=>({label:a,min:o,max:c,step:l,get:()=>n[s],set:h=>{n[s]=h}})).forEach(Pn),Yo({label:"Màu ánh sáng",get:()=>n.color,set:s=>{n.color=s}}),e&&Yo({label:"Màu quầng",get:()=>n.glowColor,set:s=>{n.glowColor=s}});return}$s.hidden=!1;let r=xe==="camera"?Ne:xe==="weather"?cn:Mn,t=rt[xe==="camera"?"cam":xe];if(r.forEach((e,n)=>{let i=document.createElement("option");i.value=n,i.textContent=e.name,i.selected=n===t,$s.append(i)}),Pt("tune-title").textContent=xe==="camera"?"Camera · "+Ne[rt.cam].name:xe==="weather"?"Thời tiết · "+cn[rt.weather].name:"Thời gian · "+Mn[rt.time].name,xe==="camera"){let e=qt.tune[Ne[rt.cam].id];ui("Vị trí và chuyển động"),p2().forEach(Pn),ui("Ống kính"),Pn({label:"Tiêu cự (mm)",min:nh,max:ih,step:1,get:()=>e.focal,set:n=>{e.focal=qt.focal=n,sr(),Ce()}}),dp({label:"Khẩu độ",options:Ki.map(n=>"f/"+n),get:()=>Math.max(0,Ki.indexOf(e.aperture)),set:n=>{e.aperture=qt.aperture=Ki[n],rt.fstop=n,sr(),Ce()}})}else if(xe==="weather"){let e=cn[rt.weather].id==="auto"?zt.weather:cn[rt.weather].id,n=zt.weatherProfiles[e];ui("Preset "+cn[rt.weather].name),u2.map(([i,s,a,o,c])=>({label:s,min:a,max:o,step:c,get:()=>n[i],set:l=>{n[i]=l,zt.w[i]=l}})).forEach(Pn),Yo({label:"Màu khí quyển",get:()=>n.tint,set:i=>{n.tint=i,zt.tint.set(i),zt.envKey=""}}),ui("Ánh sáng chung"),Gv().forEach(Pn)}else ui("Chu kỳ ngày đêm"),Pn({label:"Giờ hiện tại",min:0,max:23.99,step:.05,get:()=>zt.hour,set:e=>{zt.hour=e,zt.tween=null,zt.envKey=""}}),Pn({label:"Tốc độ tự chạy",min:0,max:1,step:.005,get:()=>zt.tune.autoSpeed,set:e=>{zt.tune.autoSpeed=e}}),Pn({label:"Hướng mặt trời",min:-3.142,max:3.142,step:.01,get:()=>zt.tune.sunAzimuth,set:e=>{zt.tune.sunAzimuth=e,zt.envKey=""}}),Pn({label:"Hướng mặt trăng",min:-3.142,max:3.142,step:.01,get:()=>zt.tune.moonAzimuth,set:e=>{zt.tune.moonAzimuth=e,zt.envKey=""}}),ui("Ánh sáng chung"),Gv().forEach(Pn)};var Dr=r=>{xe=r,Pt("mistpanel").hidden=Pt("lenspanel").hidden=!0,d2.hidden=!1,Fr(),Ce()};$s.onchange=()=>{let r=Number($s.value);xe==="camera"?(rt.cam=r,qt.setMode(r),Ir()):xe==="weather"?Rp(r,!0):(rt.time=r,zt.setTime(Mn[r].hour)),Ce(),Fr()};Pt("tune-close").onclick=Qa;Pt("tune-reset").onclick=()=>{if(xe==="camera")qt.resetTune(Ne[rt.cam].id),Ir();else if(xe==="weather"){let r=cn[rt.weather].id==="auto"?zt.weather:cn[rt.weather].id;zt.resetWeather(r),zt.resetTune(),zt.snapWeather(r)}else xe==="time"?(zt.resetTune(),zt.setTime(Mn[rt.time].hour)):xe==="carLight"?Object.assign(yt.headlights.tune,Ho):xe==="traffic"?(Object.assign(Be,ax),Rr()):xe==="lighting"?(Object.assign(yt.headlights.tune,Ho),Object.assign(Wn.lampTune,Ll),Object.assign(Mi,ox),Tp()):Object.assign(Wn.lampTune,Ll);Gh(),Ce(),Fr()};oe.car.onclick=ac;oe.map.onclick=zh;oe.cam.onclick=()=>Dr("camera");oe.weather.onclick=()=>Dr("weather");oe.time.onclick=()=>Dr("time");Pt("b-traffic").onclick=()=>xe==="traffic"?Qa():Dr("traffic");Pt("b-lighting").onclick=()=>xe==="lighting"?Qa():Dr("lighting");oe.music.onclick=dx;var gx=()=>{Pt("bar").hidden=!Pt("bar").hidden,Ce()};for(let[r,t]of[["q-speed",()=>Oh()],["q-pause",()=>Uh()],["q-car",()=>ac()],["q-cam",()=>Ap()],["q-driver",()=>Nh()],["q-map",()=>zh()],["q-weather",()=>Cp()],["q-time",()=>Pp()],["q-setting",gx]])Pt(r).onclick=e=>{t(),e.currentTarget.blur()};Pt("b-info").onclick=()=>{let r=Pt("credits");r.hidden=!r.hidden};window.addEventListener("keydown",r=>{if(r.repeat){En.add(r.code);return}switch(En.add(r.code),r.code){case"KeyC":ac();break;case"KeyV":ac();break;case"KeyQ":Ap();break;case"KeyX":Nh();break;case"KeyM":zh();break;case"KeyN":dx();break;case"KeyH":document.body.classList.toggle("hidehud");break;case"KeyT":Pp();break;case"KeyR":Cp();break;case"KeyF":Oh();break;case"KeyG":px();break;case"KeyL":mx();break;case"KeyP":Uh();break;case"KeyU":nx();break;case"KeyK":gx();break;case"KeyO":Bh=!0;break}(r.code.startsWith("Arrow")||r.code==="Space")&&r.preventDefault()});window.addEventListener("keyup",r=>En.delete(r.code));window.addEventListener("blur",()=>En.clear());var Ss=new Map,Ih=new Map;function Dh(r){Nt.active&&Nt.zoomBy(r)||qt.zoomBy(r)}var sc=0,vx=()=>{let[r,t]=[...Ss.values()];return Math.hypot(r.x-t.x,r.y-t.y)};As.addEventListener("pointerdown",r=>{Ss.set(r.pointerId,{x:r.clientX,y:r.clientY}),Ih.set(r.pointerId,{x:r.clientX,y:r.clientY,moved:!1}),As.setPointerCapture(r.pointerId),Ss.size===1?(Ei.active=!0,Ei.id=r.pointerId,Ei.x=r.clientX,Ei.y=r.clientY,qt.look.hold=!0):Ss.size===2&&(Ei.active=!1,sc=vx())});As.addEventListener("pointermove",r=>{let t=Ss.get(r.pointerId);if(!t)return;t.x=r.clientX,t.y=r.clientY;let e=Ih.get(r.pointerId);if(e&&Math.hypot(r.clientX-e.x,r.clientY-e.y)>8&&(e.moved=!0),Ss.size===2){let n=vx();sc>0&&n>0&&Dh(sc/n),sc=n}else if(Ei.active&&r.pointerId===Ei.id){let n=r.clientX-Ei.x,i=r.clientY-Ei.y;qt.lookBy(n*4.7/window.innerWidth,i*2.2/window.innerHeight),Nt.active&&Math.abs(n)+Math.abs(i)>0&&Nt.noteCameraInput(),Ei.x=r.clientX,Ei.y=r.clientY}});var xx=r=>{let t=Ih.get(r.pointerId);if(t&&!t.moved&&r.type==="pointerup"){yt.root.updateWorldMatrix(!0,!0);let e=As.getBoundingClientRect(),n=new T;yt.headGlow.some(s=>{if(!s.visible)return!1;s.getWorldPosition(n).project(Ct);let a=e.left+(n.x+1)*e.width*.5,o=e.top+(1-n.y)*e.height*.5;return n.z>=-1&&n.z<=1&&Math.hypot(r.clientX-a,r.clientY-o)<=56})?Dr("carLight"):Nt.active&&Wn.hitLamp(Ct,r.clientX,r.clientY,e)&&Dr("streetLight")}Ih.delete(r.pointerId),Ss.delete(r.pointerId),Ss.size<2&&(sc=0),Ss.size===0&&(Ei.active=!1,qt.look.hold=!1)};As.addEventListener("pointerup",xx);As.addEventListener("pointercancel",xx);As.addEventListener("wheel",r=>{r.preventDefault();let t=r.deltaY*(r.deltaMode===1?33:r.deltaMode===2?400:1);Dh(Math.exp(er(t,-200,200)*.0012))},{passive:!1});var Vv=0,bx=1/0,m2=()=>{performance.now()<bx||(document.body.classList.remove("idle"),clearTimeout(Vv),Vv=setTimeout(()=>document.body.classList.add("idle"),2e3))};["pointermove","pointerdown","touchstart"].forEach(r=>window.addEventListener(r,m2,{passive:!0}));window.addEventListener("pointerup",()=>{document.activeElement?.tagName==="BUTTON"&&document.activeElement.blur()});document.body.classList.add("idle");var c3=new T,Wv=performance.now(),pp=0,tr=0,Hi={},g2=3.5,ti={amt:0,range:0,samples:0,near:.1,far:1e3,focus:10,cocK:0,maxCoc:24},Jo=new T;function v2(r){let t=Ne[rt.cam].id==="cockpit";Jo.copy(X.pos).y+=.6,Nt.active&&Jo.copy(Nt.cam.focus);let e=t&&!Nt.active?.8:Math.max(.5,Ct.position.distanceTo(Jo));ti.focus+=(e-ti.focus)*(ti.amt>.01?1-Math.exp(-r*6):1);let n=qt.focalEff,i=qt.apertureS,s=ti.focus*1e3;if(ti.cocK=n*n/(i*Math.max(s-n,1))*(un.longSide/36)*g2,ti.maxCoc=Math.max(6,un.longSide*.0125),Nt.active)ti.range=Nt.cam.range;else if(t)ti.range=0;else{let a=Ct.position.x-Jo.x,o=Ct.position.z-Jo.z,c=Math.hypot(a,o)||1,l=Math.sin(X.yaw),h=Math.cos(X.yaw);ti.range=Math.abs((-l*a-h*o)/c)*yt.dim.length*.5+Math.abs((h*a-l*o)/c)*yt.dim.width*.5+.3}return ti.near=Ct.near,ti.far=Ct.far,ti.amt=tr,ti.samples=Di[rt.quality].dof,ti}var x2=new T;function b2(r,t){let e=qt.look,n=x2.copy(r).sub(t);if(Math.abs(e.yaw)>1e-4||Math.abs(e.pitch)>1e-4){let s=Math.cos(e.yaw),a=Math.sin(e.yaw);n.set(n.x*s+n.z*a,n.y,-n.x*a+n.z*s);let o=Math.hypot(n.x,n.z),c=n.length(),l=er(Math.atan2(n.y,o)+e.pitch,.03,1.35),h=c*Math.cos(l)/Math.max(o,.001);n.set(n.x*h,c*Math.sin(l),n.z*h)}Ct.position.copy(t).add(n);let i=Math.max(vn.heightAt(Ct.position.x,Ct.position.z)+.25,Pr.group.visible?Pr.level+1.2:-1/0);Ct.position.y<i&&(Ct.position.y=i)}var Ba=new T;function y2(){let r=yt.current?.steer;if(!r||!qt.eyeAt||!qt.eyeAt(Ba))return .2;yt.tilt.worldToLocal(Ba);let[,t,e]=r.n,n=1-t*t,i=-t*e,s=Math.hypot(n,i)||1,a=r.r*.65,o=r.c[1]-n/s*a,c=r.c[2]-i/s*a,l=Math.atan2(Ba.y-o,Ba.z-c),h=Math.atan(Math.tan(Oe.degToRad(Ct.fov)/2)*(1-2*tx*tr)),f=Ka.group.position,u=Math.atan2(f.y+Ka.size[1]/2+.012-Ba.y,Ba.z-f.z),d=l-h+.01,g=h-u-.015;return er(d<=g?d:g,-.1,.6)}var mp=new T,Ms=new T,Qs=new T,Zo=new T,qv=new T,Xv=new T,jv=.08,Kv=new T,Yv=new T,Jv=new T;function _2(r){if(!r)return;Ge.recline(r.recline||0);let t=yt.tilt.matrixWorld,[e,n,i]=r.foot,s=r.hip[0];for(let[a,o]of[["l",e],["r",2*s-e]])Kv.set(o,n,i).applyMatrix4(t),Yv.set(0,1,-.6).transformDirection(t),Jv.set(0,.45,-1).transformDirection(t),Ge.reachLeg(a,Kv,Yv,Jv)}function M2(r){yt.root.updateMatrixWorld();let t=yt.tilt.matrixWorld;mp.fromArray(r.c).applyMatrix4(t),Ms.fromArray(r.n).transformDirection(t),Qs.set(1,0,0).transformDirection(t),Qs.addScaledVector(Ms,-Qs.dot(Ms)).normalize(),Zo.crossVectors(Ms,Qs);for(let[e,n]of[["r",-jv],["l",Math.PI+jv]]){let i=n+(yt.steerAngle||0),s=Math.cos(i),a=Math.sin(i),o=r.r+(r.grip?.radial??.02),c=r.grip?.depth??.065;qv.copy(mp).addScaledVector(Qs,s*o).addScaledVector(Zo,a*o).addScaledVector(Ms,c);let l=Xv.copy(Qs).multiplyScalar(e==="r"?.25:-.25).addScaledVector(Zo,-1).addScaledVector(Ms,.2);Ge.reach(e,qv,l);let h=r.grip?.align?Xv.copy(Zo).multiplyScalar(s).addScaledVector(Qs,-a).multiplyScalar(e==="r"?1:-1):null;Ge.faceGrip(e,Ms,h);let f=e==="r"?1:-1,u=r.r-.01;Ge.looseGrip(e,.15,(d,g)=>{let v=i+f*d/u;return g.copy(mp).addScaledVector(Qs,Math.cos(v)*u).addScaledVector(Zo,Math.sin(v)*u).addScaledVector(Ms,.016)},Ms)}}var Qo=new T,E2=new T;function w2(){let r=zt.state,t=un.rays;t.near=Ct.near,t.far=Ct.far;let e=r.rays*Oe.smoothstep(Ct.getWorldDirection(E2).dot(r.rayDir),.05,.5);e>.002&&(Qo.copy(r.rayDir).multiplyScalar(1e3).add(Ct.position).project(Ct),e*=1-Oe.smoothstep(Math.max(Math.abs(Qo.x),Math.abs(Qo.y)),1,1.9),t.uv.set(Qo.x*.5+.5,Qo.y*.5+.5)),t.color.copy(r.rayCol).multiplyScalar(Math.max(e,0)*1.2)}function yx(r){let t=er((r-Wv)/1e3,0,.05);Wv=r,Ga!==null&&(Ga+=t,Ga>=(kv?.5:3)&&(Ga=null,Lp(0),cp=!0,kv&&(X.v=nc)));let e=!rt.started||Ga!==null,n=En.has("ArrowLeft")||En.has("KeyA"),i=En.has("ArrowRight")||En.has("KeyD"),s=Qi.active?0:(i?1:0)-(n?1:0);(En.has("ArrowUp")||En.has("KeyW"))&&(X.target+=2.5*t),(En.has("ArrowDown")||En.has("KeyS"))&&(X.target-=2.5*t),(En.has("Equal")||En.has("NumpadAdd"))&&Dh(Math.exp(-1.2*t)),(En.has("Minus")||En.has("NumpadSubtract"))&&Dh(Math.exp(1.2*t)),X.target=er(X.target,QS,$S),X.goal=X.fast?Rh:X.target;let a=e?Rh:Math.min(X.goal,Ln.ctrl.maxV);if(e?X.v=Rh:Nt.active?X.v=Nt.speed(X.v,t):Qi.active?X.v=Math.max(0,X.v-25*t):En.has("Space")||En.has("KeyB")||yp?X.v=Math.max(0,X.v-7.5*t):X.v+=er(a-X.v,-8*t,6*t),cp&&X.v<=nc+.01&&(cp=!1,X.v=nc,rt.cam=Ne.findIndex(_=>_.id===($n[rt.map].id==="city"?"chase":"side")),qt.setMode(rt.cam),Ir(),Ce()),X.s+=X.v*t,X.fx+=(ZS(55*Va,Rh,X.v)-X.fx)*(1-Math.exp(-t*4)),s!==0)X.manual=!0;else if(X.manual){X.manual=!1;let _=$n[rt.map].id==="city"?Ae.lanes:[Ph];X.home=Math.sign(X.d||1)*_.reduce((M,b)=>Math.abs(Math.abs(X.d)-b)<Math.abs(Math.abs(X.d)-M)?b:M,_[0])}let o=Ln.ctrl.lane??X.home,c=Nt.active?0:s!==0?s*(2.2+X.v*.06):(o-X.d)*.8*Math.min(1,X.v/3);X.latVel+=(c-X.latVel)*(1-Math.exp(-t*5)),X.d+=X.latVel*t;let l=Le.halfWidth-.9;Math.abs(X.d)>l&&(X.d=Math.sign(X.d)*l,X.latVel=0),ve.ensure(X.s+8e3),ve.at(X.s,Hi),X.pos.set(Hi.x+Math.cos(Hi.th)*X.d,Hi.y,Hi.z-Math.sin(Hi.th)*X.d);let h=ve.at(X.s-2.5,{}).y,f=ve.at(X.s+2.5,{}).y;if(X.pitch+=(Math.atan2(f-h,5)-X.pitch)*(1-Math.exp(-t*6)),X.yaw=Hi.th-Math.atan2(X.latVel,Math.max(X.v,4))*.9,tr+=((rt.cine&&rt.started?1:0)-tr)*(1-Math.exp(-t*2.5)),qt.cine=tr,yt.update(t,{pos:X.pos,yaw:X.yaw,pitch:X.pitch,speed:X.v,latVel:X.latVel,curvature:ve.curvature(X.s+Math.min(12,X.v*.4)),rough:ve.dirtAt(X.s)}),Ge.ready){Ge.root.visible=!Qv;let _=Ne[rt.cam].id==="cockpit"&&!Nt.active;Ge.head.scale.setScalar(_?.001:1),yt.cabinLevel=_?(.35+.45*zt.state.dayF)*(1+zt.state.dark):0,Ge.update(t);let M=yt.current?.steer,b=Nt.state==="off"||Nt.state==="stopping";Ge.footShade.value=b?1:0,b&&(_2(yt.dim.seat),M&&M2(M))}if(Nt.active){let _=Nt.state;Nt.update(t,yt.root,X.v);let M=Nt.cam;b2(M.pos,M.look),Ct.lookAt(M.look);let b=qt.fovFor(M.focal),w=Nt.closeK>.01?.06:.3;(Math.abs(Ct.fov-b)>.01||Ct.near!==w)&&(Ct.fov=b,Ct.near=w,Ct.updateProjectionMatrix()),Nt.state==="off"&&(qt.setMode(rt.cam),qt.relP.copy(Ct.position).sub(X.pos),qt.relL.copy(M.look).sub(X.pos),qt.fov=Ct.fov,qt.look.yaw=qt.look.pitch=0),Nt.state!==_&&Ce()}else qt.cockpitPitch=y2(),qt.update(t,{pos:X.pos,yaw:X.yaw,pitch:X.pitch,speed:X.v,dim:yt.dim,fx:X.fx,side:X.d>=0?-1:1});zt.precip.setCar(yt.tilt,yt.dim),a2(t),zt.update(t,X.pos);let u=zt.state;Wn.update(X.s),Wn.apply(u),Wn.updateLights(Ct.position),Pr.update(r/1e3,Ct.position,ve,X.s),Ep.update(r/1e3,X.s,u.light,{d:X.d,v:X.v,dim:yt.dim,npcs:Ln.active,cam:Ct,audio:ws}),rc.visible&&rc.update(r/1e3,Ct.position,ve,X.s,u),Wa.group.visible=$n[rt.map].id==="forest"&&u.cover<.5,Wa.visible&&Wa.update(r/1e3,Ct.position,ve,X.s,u),qa.group.visible=$n[rt.map].id==="meadow"&&u.cover<.5,qa.visible&&qa.update(r/1e3,Ct.position,ve,X.s,u),Hh.update(t,X.s,ve,vn),vn.setCar(X.s),vn.update(Ct.position),Es.update(Ct.position,vn),vn.apply(u);let d=Oe.smoothstep,g=($n[rt.map].id==="city"?0:1)*d(u.night,.35,.9)*(1-Math.min(1,u.rain*2))*(1-u.snow)*(1-u.cover)*(1-d(u.wind,.6,.9));if(Mp.update(r/1e3,X.s,ve,vn,g,un.size.y/(2*Math.tan(Oe.degToRad(Ct.fov)/2)),De.fog.density),Fh.update(t,X.v*3.6,zt.clock),Zv.update(t,Nt.smoking,u,un.size.y/(2*Math.tan(Oe.degToRad(Ct.fov)/2))),rt.started&&yt.current){let _=[{id:"player",s:X.s,d:X.d,speed:X.v,direction:1,width:yt.dim.width,length:yt.dim.length}];if(Ge.ready&&["exit","parked","enter"].includes(Nt.state)&&(Ge.root.getWorldPosition(Hv),_.push({id:"person",...ep(Hv,ve,X.s),width:.8,length:.8,speed:0,direction:0})),Ln.playerHome=X.home,Ln.playerGoal=Nt.active?0:X.goal,Ke.visible){Be.models&&!Ln.pool.length&&!Ln.loading&&Ln._load(yt.current.def.id),Ke.update(t,X.s,X.d,X.v,u.lamps,yt.dim.length),Ts.update(t,X.s);let M=In.stopAhead(X.s+yt.dim.length/2,1,0)<25;hp=X.v<.3&&!Qi.active&&!M?hp+t:0;let b=hp>7?Ke.stuckBehind(X.s,X.d):[];for(let w of Ke.cars)w.honk=!1;for(let w of b)w.honk=!0;if(b.length&&(up-=t)<=0&&(up=2+Math.random()*1.5,ws.horn(0,Math.min(1,1.2-(X.s-b[0].s)/40)),fp||(fp=!0,ir("📢 Xe phía sau đang bấm còi — chú đi tiếp đi!",!0))),b.length||(up=0,fp=!1),Qi.update(t),Ch=Math.max(0,Ch-t),!Qi.active&&!Nt.active&&Ch<=0){let w=yt.dim.length,C=yt.dim.width,E=Ke.hitTest(X.s,X.d,w,C),S=E?null:Ts.hitTest(X.s,X.d,w,C);(E&&(X.v>1.2||E.v>1.2)||S&&X.v>.8)&&(Ko++,$v=rt.cam,rt.cam=Ne.findIndex(I=>I.id==="orbit"),qt.setMode(rt.cam),Ir(),Ce(),Qi.start(X.s,X.d,yt.dim,E?{car:E}:{ped:S}))}Ln.ctrl.lane=null,Ln.ctrl.maxV=Nt.active||!Be.avoid?1/0:Ke.ctrl.maxV}else Ln.update(t,X.s,X.d,ve,u.lamps,yt.current.def.id,_,ws)}if(In.update(X.s,u.lamps,t,1,un.size.y/(2*Math.tan(Oe.degToRad(Ct.fov)/2)),De.fog.density),In.visible&&rt.started&&!Nt.active&&yt.dim){let _=X.s+yt.dim.length/2;if(ec!==null&&_>ec&&X.d>0){let M=ve.junctionIndex(ec+Fo.stopA);ve.junction(M)-Fo.stopA<=_&&In.mainLight(M)===2&&(Ko++,ir(`🚨 Vượt đèn đỏ! (lỗi thứ ${Ko})`,!0));let b=ve.nearJunction(_);for(let w of[b-8.4,b+8.4])Math.abs(_-w)<2&&X.v>.8&&Bv!==w&&Ts.crossingNear(w,X.d)&&(Bv=w,Ko++,ir(`🚸 Không nhường người đi bộ! (lỗi thứ ${Ko})`,!0))}ec=_}Lh.update(X.s,ve,vn,u.lamps,un.size.y/(2*Math.tan(Oe.degToRad(Ct.fov)/2)),De.fog.density),yt.setLights(u.lamps),ws.setAmbient({speed:X.v,rain:u.rain,snow:u.snow,wind:u.wind,dark:u.dark,fx:X.fx,inCar:Ne[rt.cam].id==="cockpit"&&!Nt.active});let v=1-u.dark;yt.calm=u.dark;let m=.016*X.fx*X.fx*v;if(m>0){let _=r/1e3;Ct.position.x+=(Math.sin(_*11.3)+Math.sin(_*17.9)*.6)*m,Ct.position.y+=(Math.sin(_*13.7)+Math.sin(_*23.1)*.5)*m*.7}let p=tr*v;if(p>.01){let _=r/1e3;Ct.position.x+=Math.sin(_*.37)*.014*p,Ct.position.y+=Math.sin(_*.53)*.012*p,Ct.rotateZ((Math.sin(_*.31)*.0045+Math.sin(_*.83)*.002)*p)}pp-=t,pp<=0&&(Pt("speed").textContent=Math.round(X.v*3.6),Pt("clock").textContent=zt.clock,oe.lens.title!==lx()&&(Ce(),sr()),lc(),pp=.25),Xi.uMistD.value=.05*rt.mistDens*rt.mistDens,Xi.uMistH.value=3+70*Math.pow(rt.mistCover,1.4),Xi.uMistCover.value=rt.mistCover,Xi.uMistBase.value=X.pos.y-1.5,Xi.uMistT.value=r/1e3,Xi.uMistWind.value.copy(u.windDir).multiplyScalar(.0012+.006*u.wind),Xi.uMistColor.value.copy(u.mistColor),zt.mistCover=rt.mistCover,zt.mistDens=rt.mistDens,u.wet>.001?Xa.render(De,Ct,X.pos.y+.05):Xa.active=!1,Wn.setReflection(Xa,r/1e3);let x=Ne[rt.cam].id==="cockpit"&&!Nt.active;Ka.group.visible=x,x&&Ka.render(De,yt.tilt),_p.render(De,Ct,x),tc.update(t,Nt.active?0:u.rain,X.v);let y=x?tc.wet:0;yt.shield&&yt.setWiper(tc.angle(yt.shield.sweep)),un.begin(),sn.render(De,Ct),w2(),tc.apply(un.final.uniforms,y>.01?y:0,Ct,yt.tilt,yt.shield,r/1e3,yt.rearShield),un.renderGlassMask(Ct,yt.tilt,yt.rearShield),un.render(r/1e3,tr,X.fx,v2(t)),Bh&&l2(),requestAnimationFrame(yx)}async function T2(){cx(),zt.setTime(Mn[rt.time].hour),zt.hour=Mn[rt.time].hour,zt.snapWeather(cn[rt.weather].id==="auto"?"cloudy":cn[rt.weather].id),zt.onThunder=(e,n)=>ws.thunder(e,n),ve.ensure(X.s+8e3),ve.at(X.s,Hi),X.pos.set(Hi.x,Hi.y,Hi.z),ux(),await yt.probe(),Ce(),requestAnimationFrame(yx);let r=Pt("start");Pt("hint").textContent="Chạm hoặc nhấn phím bất kỳ để bắt đầu",yt.onProgress=e=>Jn(oe.car,"🚗","Đang tải… "+Math.round(e*100)+"%"),Es.load("assets/models/nature.glb").then(()=>{Es.rockGeos.length&&(vn.rockGeos=Es.rockGeos),vn.reset(),vn.prime(Ct.position.lengthSq()?Ct.position:X.pos),Es.setRadius(Di[rt.quality].trees),Ja(un.sceneRT,Ct,Es.group).catch(()=>{})}).catch(e=>console.warn("Không tải được cây / đá chi tiết",e)),kh(0).then(()=>Ge.load("assets/models/person.glb")).then(()=>{yt.tilt.add(Ge.root),yt.current&&(Nt.place(yt.dim),Nt.sit()),Ja(un.sceneRT,Ct,Ge.root).catch(()=>{}),Ce()}).catch(e=>console.warn("Không tải được người lái",e));let t=e=>{r.classList.add("gone"),rt.started=!0,bx=performance.now()+1200,document.body.classList.add("playing"),c2(),Ga=0,ws.start().catch(n=>console.warn("Audio:",n)),window.removeEventListener("keydown",t),r.removeEventListener("pointerdown",t)};r.addEventListener("pointerdown",t),window.addEventListener("keydown",t)}T2();window.__app={city:In,cityTraffic:Ke,cityPeople:Ts,incident:Qi,ocean:Pr,waterfalls:Ep,wing:_p,audio:ws,smoke:Zv,cows:Hh,traffic:Ln,dash:Fh,town:Lh,fireflies:Mp,wipers:tc,meadow:qa,nature:Es,person:Ge,stop:Nt,toggleStop:()=>Uh(),refl:Xa,MIST:Xi,forceCine:r=>{tr=r},post:un,toggleFast:Oh,env:zt,cars:yt,rig:qt,drive:X,state:rt,nextCharacter:Nh,chooseCharacter:Sp,nextCar:ac,nextMap:zh,nextCam:Ap,nextWeather:Cp,nextTime:Pp,chooseCar:kh,renderer:sn,scene:De,camera:Ct,scenery:Wn,terrain:vn,reeds:rc,grass:Wa,road:ve};
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
