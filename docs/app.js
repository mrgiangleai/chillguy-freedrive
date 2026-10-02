var em=0,mu=1,tm=2;var ef=1,Nl=2,mi=3,si=0,Kt=1,dt=2;var Ui=0,Ys=1,Jt=2,gu=3,bu=4,nm=5,as=100,im=101,sm=102,vu=103,xu=104,rm=200,am=201,om=202,cm=203,$c=204,el=205,lm=206,hm=207,um=208,dm=209,fm=210,pm=211,mm=212,gm=213,bm=214,vm=0,xm=1,_m=2,to=3,ym=4,Mm=5,Em=6,wm=7,Ol=0,Sm=1,Tm=2,Ni=0,Am=1,Rm=2,Cm=3,Bl=4,Pm=5,Lm=6,_u="attached",Im="detached",tf=300,Zs=301,Qs=302,tl=303,nl=304,Ro=306,jn=1e3,An=1001,Wr=1002,Ft=1003,no=1004;var kr=1005;var qt=1006,kl=1007;var Oi=1008;var ii=1009,Dm=1010,Fm=1011,Hl=1012,nf=1013,ni=1014,gi=1015,Un=1016,sf=1017,rf=1018,ls=1020,Um=1021,Fn=1023,Nm=1024,Om=1025,hs=1026,$s=1027,Bm=1028,af=1029,km=1030,of=1031,cf=1033,xc=33776,_c=33777,yc=33778,Mc=33779,yu=35840,Mu=35841,Eu=35842,wu=35843,lf=36196,Su=37492,Tu=37496,Au=37808,Ru=37809,Cu=37810,Pu=37811,Lu=37812,Iu=37813,Du=37814,Fu=37815,Uu=37816,Nu=37817,Ou=37818,Bu=37819,ku=37820,Hu=37821,Ec=36492,zu=36494,Gu=36495,Hm=36283,Vu=36284,Wu=36285,qu=36286,zl=2200,Gl=2201,zm=2202,er=2300,ds=2301,wc=2302,Ws=2400,qs=2401,io=2402,Vl=2500,Gm=2501,hf=0,Co=1,ta=2,uf=3e3,us=3001,Vm=3200,Wl=3201,ql=0,Wm=1,vn="",it="srgb",Ut="srgb-linear",Xl="display-p3",Po="display-p3-linear",so="linear",bt="srgb",ro="rec709",ao="p3";var Es=7680;var Xu=519,qm=512,Xm=513,jm=514,df=515,Ym=516,Km=517,Jm=518,Zm=519,il=35044,jl=35048;var ju="300 es",sl=1035,bi=2e3,oo=2001,vi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}},en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yu=1234567,Hr=Math.PI/180,tr=180/Math.PI;function Xn(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(en[s&255]+en[s>>8&255]+en[s>>16&255]+en[s>>24&255]+"-"+en[e&255]+en[e>>8&255]+"-"+en[e>>16&15|64]+en[e>>24&255]+"-"+en[t&63|128]+en[t>>8&255]+"-"+en[t>>16&255]+en[t>>24&255]+en[n&255]+en[n>>8&255]+en[n>>16&255]+en[n>>24&255]).toLowerCase()}function nn(s,e,t){return Math.max(e,Math.min(t,s))}function Yl(s,e){return(s%e+e)%e}function Qm(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function $m(s,e,t){return s!==e?(t-s)/(e-s):0}function zr(s,e,t){return(1-t)*s+t*e}function e0(s,e,t,n){return zr(s,e,1-Math.exp(-t*n))}function t0(s,e=1){return e-Math.abs(Yl(s,e*2)-e)}function n0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function i0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function s0(s,e){return s+Math.floor(Math.random()*(e-s+1))}function r0(s,e){return s+Math.random()*(e-s)}function a0(s){return s*(.5-Math.random())}function o0(s){s!==void 0&&(Yu=s);let e=Yu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function c0(s){return s*Hr}function l0(s){return s*tr}function rl(s){return(s&s-1)===0&&s!==0}function h0(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function co(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function u0(s,e,t,n,i){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":s.set(o*h,c*u,c*d,o*l);break;case"YZY":s.set(c*d,o*h,c*u,o*l);break;case"ZXZ":s.set(c*u,c*d,o*h,o*l);break;case"XZX":s.set(o*h,c*g,c*f,o*l);break;case"YXY":s.set(c*f,o*h,c*g,o*l);break;case"ZYZ":s.set(c*g,c*f,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ti(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function lt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Cn={DEG2RAD:Hr,RAD2DEG:tr,generateUUID:Xn,clamp:nn,euclideanModulo:Yl,mapLinear:Qm,inverseLerp:$m,lerp:zr,damp:e0,pingpong:t0,smoothstep:n0,smootherstep:i0,randInt:s0,randFloat:r0,randFloatSpread:a0,seededRandom:o0,degToRad:c0,radToDeg:l0,isPowerOfTwo:rl,ceilPowerOfTwo:h0,floorPowerOfTwo:co,setQuaternionFromProperEuler:u0,normalize:lt,denormalize:ti},oe=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(nn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ye=class s{constructor(e,t,n,i,r,a,o,c,l){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l)}set(e,t,n,i,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],b=i[0],m=i[3],p=i[6],v=i[1],x=i[4],_=i[7],S=i[2],w=i[5],T=i[8];return r[0]=a*b+o*v+c*S,r[3]=a*m+o*x+c*w,r[6]=a*p+o*_+c*T,r[1]=l*b+h*v+u*S,r[4]=l*m+h*x+u*w,r[7]=l*p+h*_+u*T,r[2]=d*b+f*v+g*S,r[5]=d*m+f*x+g*w,r[8]=d*p+f*_+g*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+i*r*l-i*a*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*r,f=l*r-a*c,g=t*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/g;return e[0]=u*b,e[1]=(i*l-h*n)*b,e[2]=(o*n-i*a)*b,e[3]=d*b,e[4]=(h*t-i*c)*b,e[5]=(i*r-o*t)*b,e[6]=f*b,e[7]=(n*c-l*t)*b,e[8]=(a*t-n*r)*b,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Sc.makeScale(e,t)),this}rotate(e){return this.premultiply(Sc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Sc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Sc=new Ye;function ff(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function qr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function d0(){let s=qr("canvas");return s.style.display="block",s}var Ku={};function Gr(s){s in Ku||(Ku[s]=!0,console.warn(s))}var Ju=new Ye().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Zu=new Ye().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),wa={[Ut]:{transfer:so,primaries:ro,toReference:s=>s,fromReference:s=>s},[it]:{transfer:bt,primaries:ro,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Po]:{transfer:so,primaries:ao,toReference:s=>s.applyMatrix3(Zu),fromReference:s=>s.applyMatrix3(Ju)},[Xl]:{transfer:bt,primaries:ao,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Zu),fromReference:s=>s.applyMatrix3(Ju).convertLinearToSRGB()}},f0=new Set([Ut,Po]),st={enabled:!0,_workingColorSpace:Ut,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!f0.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;let n=wa[e].toReference,i=wa[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return wa[s].primaries},getTransfer:function(s){return s===vn?so:wa[s].transfer}};function Ks(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Tc(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var ws,lo=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ws===void 0&&(ws=qr("canvas")),ws.width=e.width,ws.height=e.height;let n=ws.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ws}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=qr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Ks(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ks(t[n]/255)*255):t[n]=Ks(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},p0=0,ho=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:p0++}),this.uuid=Xn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Ac(i[a].image)):r.push(Ac(i[a]))}else r=Ac(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function Ac(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?lo.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var m0=0,Zt=class s extends vi{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=An,i=An,r=qt,a=Oi,o=Fn,c=ii,l=s.DEFAULT_ANISOTROPY,h=vn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:m0++}),this.uuid=Xn(),this.name="",this.source=new ho(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Gr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===us?it:vn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==tf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case jn:e.x=e.x-Math.floor(e.x);break;case An:e.x=e.x<0?0:1;break;case Wr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case jn:e.y=e.y-Math.floor(e.y);break;case An:e.y=e.y<0?0:1;break;case Wr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Gr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===it?us:uf}set encoding(e){Gr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===us?it:vn}};Zt.DEFAULT_IMAGE=null;Zt.DEFAULT_MAPPING=tf;Zt.DEFAULT_ANISOTROPY=1;var Ke=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],b=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-b)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+b)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(l+1)/2,_=(f+1)/2,S=(p+1)/2,w=(h+d)/4,T=(u+b)/4,I=(g+m)/4;return x>_&&x>S?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=w/n,r=T/n):_>S?_<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(_),n=w/i,r=I/i):S<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(S),n=T/r,i=I/r),this.set(n,i,r,t),this}let v=Math.sqrt((m-g)*(m-g)+(u-b)*(u-b)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(u-b)/v,this.z=(d-h)/v,this.w=Math.acos((l+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},al=class extends vi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ke(0,0,e,t),this.scissorTest=!1,this.viewport=new Ke(0,0,e,t);let i={width:e,height:t,depth:1};n.encoding!==void 0&&(Gr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===us?it:vn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Zt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new ho(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},sn=class extends al{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},uo=class extends Zt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ol=class extends Zt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var at=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],d=r[a+0],f=r[a+1],g=r[a+2],b=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=b;return}if(u!==b||c!==d||l!==f||h!==g){let m=1-o,p=c*d+l*f+h*g+u*b,v=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){let S=Math.sqrt(x),w=Math.atan2(S,p*v);m=Math.sin(m*w)/S,o=Math.sin(o*w)/S}let _=o*v;if(c=c*m+d*_,l=l*m+f*_,h=h*m+g*_,u=u*m+b*_,m===1-o){let S=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=S,l*=S,h*=S,u*=S}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,a){let o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*u+c*f-l*d,e[t+1]=c*g+h*d+l*u-o*f,e[t+2]=l*g+h*f+o*d-c*u,e[t+3]=h*g-o*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),u=o(r/2),d=c(n/2),f=c(i/2),g=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-i)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+l)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-l)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nn(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+i*l-r*c,this._y=i*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},E=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Qu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Qu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),h=2*(o*t-r*i),u=2*(r*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=i+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Rc.copy(this).projectOnVector(e),this.sub(Rc)}reflect(e){return this.sub(Rc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(nn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Rc=new E,Qu=new at,Rt=class{constructor(e=new E(1/0,1/0,1/0),t=new E(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Gn):Gn.fromBufferAttribute(r,a),Gn.applyMatrix4(e.matrixWorld),this.expandByPoint(Gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Sa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Sa.copy(n.boundingBox)),Sa.applyMatrix4(e.matrixWorld),this.union(Sa)}let i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Gn),Gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Cr),Ta.subVectors(this.max,Cr),Ss.subVectors(e.a,Cr),Ts.subVectors(e.b,Cr),As.subVectors(e.c,Cr),Ci.subVectors(Ts,Ss),Pi.subVectors(As,Ts),ts.subVectors(Ss,As);let t=[0,-Ci.z,Ci.y,0,-Pi.z,Pi.y,0,-ts.z,ts.y,Ci.z,0,-Ci.x,Pi.z,0,-Pi.x,ts.z,0,-ts.x,-Ci.y,Ci.x,0,-Pi.y,Pi.x,0,-ts.y,ts.x,0];return!Cc(t,Ss,Ts,As,Ta)||(t=[1,0,0,0,1,0,0,0,1],!Cc(t,Ss,Ts,As,Ta))?!1:(Aa.crossVectors(Ci,Pi),t=[Aa.x,Aa.y,Aa.z],Cc(t,Ss,Ts,As,Ta))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},li=[new E,new E,new E,new E,new E,new E,new E,new E],Gn=new E,Sa=new Rt,Ss=new E,Ts=new E,As=new E,Ci=new E,Pi=new E,ts=new E,Cr=new E,Ta=new E,Aa=new E,ns=new E;function Cc(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){ns.fromArray(s,r);let o=i.x*Math.abs(ns.x)+i.y*Math.abs(ns.y)+i.z*Math.abs(ns.z),c=e.dot(ns),l=t.dot(ns),h=n.dot(ns);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var g0=new Rt,Pr=new E,Pc=new E,Rn=class{constructor(e=new E,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):g0.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Pr.subVectors(e,this.center);let t=Pr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Pr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Pc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Pr.copy(e.center).add(Pc)),this.expandByPoint(Pr.copy(e.center).sub(Pc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},hi=new E,Lc=new E,Ra=new E,Li=new E,Ic=new E,Ca=new E,Dc=new E,fs=class{constructor(e=new E,t=new E(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(hi.copy(this.origin).addScaledVector(this.direction,t),hi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Lc.copy(e).add(t).multiplyScalar(.5),Ra.copy(t).sub(e).normalize(),Li.copy(this.origin).sub(Lc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Ra),o=Li.dot(this.direction),c=-Li.dot(Ra),l=Li.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*c-o,d=a*o-c,g=r*h,u>=0)if(d>=-g)if(d<=g){let b=1/h;u*=b,d*=b,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Lc).addScaledVector(Ra,d),f}intersectSphere(e,t){hi.subVectors(e.center,this.origin);let n=hi.dot(this.direction),i=hi.dot(hi)-n*n,r=e.radius*e.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,hi)!==null}intersectTriangle(e,t,n,i,r){Ic.subVectors(t,e),Ca.subVectors(n,e),Dc.crossVectors(Ic,Ca);let a=this.direction.dot(Dc),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Li.subVectors(this.origin,e);let c=o*this.direction.dot(Ca.crossVectors(Li,Ca));if(c<0)return null;let l=o*this.direction.dot(Ic.cross(Li));if(l<0||c+l>a)return null;let h=-o*Li.dot(Dc);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},be=class s{constructor(e,t,n,i,r,a,o,c,l,h,u,d,f,g,b,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l,h,u,d,f,g,b,m)}set(e,t,n,i,r,a,o,c,l,h,u,d,f,g,b,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=b,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/Rs.setFromMatrixColumn(e,0).length(),r=1/Rs.setFromMatrixColumn(e,1).length(),a=1/Rs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,g=o*h,b=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=d-b*l,t[9]=-o*c,t[2]=b-d*l,t[6]=g+f*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,f=c*u,g=l*h,b=l*u;t[0]=d+b*o,t[4]=g*o-f,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=b+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,f=c*u,g=l*h,b=l*u;t[0]=d-b*o,t[4]=-a*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=b-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,f=a*u,g=o*h,b=o*u;t[0]=c*h,t[4]=g*l-f,t[8]=d*l+b,t[1]=c*u,t[5]=b*l+d,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,f=a*l,g=o*c,b=o*l;t[0]=c*h,t[4]=b-d*u,t[8]=g*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*u+g,t[10]=d-b*u}else if(e.order==="XZY"){let d=a*c,f=a*l,g=o*c,b=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+b,t[5]=a*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*h,t[10]=b*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(b0,e,v0)}lookAt(e,t,n){let i=this.elements;return Sn.subVectors(e,t),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),Ii.crossVectors(n,Sn),Ii.lengthSq()===0&&(Math.abs(n.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),Ii.crossVectors(n,Sn)),Ii.normalize(),Pa.crossVectors(Sn,Ii),i[0]=Ii.x,i[4]=Pa.x,i[8]=Sn.x,i[1]=Ii.y,i[5]=Pa.y,i[9]=Sn.y,i[2]=Ii.z,i[6]=Pa.z,i[10]=Sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],b=n[6],m=n[10],p=n[14],v=n[3],x=n[7],_=n[11],S=n[15],w=i[0],T=i[4],I=i[8],y=i[12],M=i[1],D=i[5],L=i[9],k=i[13],P=i[2],F=i[6],U=i[10],B=i[14],O=i[3],z=i[7],Y=i[11],K=i[15];return r[0]=a*w+o*M+c*P+l*O,r[4]=a*T+o*D+c*F+l*z,r[8]=a*I+o*L+c*U+l*Y,r[12]=a*y+o*k+c*B+l*K,r[1]=h*w+u*M+d*P+f*O,r[5]=h*T+u*D+d*F+f*z,r[9]=h*I+u*L+d*U+f*Y,r[13]=h*y+u*k+d*B+f*K,r[2]=g*w+b*M+m*P+p*O,r[6]=g*T+b*D+m*F+p*z,r[10]=g*I+b*L+m*U+p*Y,r[14]=g*y+b*k+m*B+p*K,r[3]=v*w+x*M+_*P+S*O,r[7]=v*T+x*D+_*F+S*z,r[11]=v*I+x*L+_*U+S*Y,r[15]=v*y+x*k+_*B+S*K,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],b=e[7],m=e[11],p=e[15];return g*(+r*c*u-i*l*u-r*o*d+n*l*d+i*o*f-n*c*f)+b*(+t*c*f-t*l*d+r*a*d-i*a*f+i*l*h-r*c*h)+m*(+t*l*u-t*o*f-r*a*u+n*a*f+r*o*h-n*l*h)+p*(-i*o*h-t*c*u+t*o*d+i*a*u-n*a*d+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],b=e[13],m=e[14],p=e[15],v=u*m*l-b*d*l+b*c*f-o*m*f-u*c*p+o*d*p,x=g*d*l-h*m*l-g*c*f+a*m*f+h*c*p-a*d*p,_=h*b*l-g*u*l+g*o*f-a*b*f-h*o*p+a*u*p,S=g*u*c-h*b*c-g*o*d+a*b*d+h*o*m-a*u*m,w=t*v+n*x+i*_+r*S;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/w;return e[0]=v*T,e[1]=(b*d*r-u*m*r-b*i*f+n*m*f+u*i*p-n*d*p)*T,e[2]=(o*m*r-b*c*r+b*i*l-n*m*l-o*i*p+n*c*p)*T,e[3]=(u*c*r-o*d*r-u*i*l+n*d*l+o*i*f-n*c*f)*T,e[4]=x*T,e[5]=(h*m*r-g*d*r+g*i*f-t*m*f-h*i*p+t*d*p)*T,e[6]=(g*c*r-a*m*r-g*i*l+t*m*l+a*i*p-t*c*p)*T,e[7]=(a*d*r-h*c*r+h*i*l-t*d*l-a*i*f+t*c*f)*T,e[8]=_*T,e[9]=(g*u*r-h*b*r-g*n*f+t*b*f+h*n*p-t*u*p)*T,e[10]=(a*b*r-g*o*r+g*n*l-t*b*l-a*n*p+t*o*p)*T,e[11]=(h*o*r-a*u*r-h*n*l+t*u*l+a*n*f-t*o*f)*T,e[12]=S*T,e[13]=(h*b*i-g*u*i+g*n*d-t*b*d-h*n*m+t*u*m)*T,e[14]=(g*o*i-a*b*i-g*n*c+t*b*c+a*n*m-t*o*m)*T,e[15]=(a*u*i-h*o*i+h*n*c-t*u*c-a*n*d+t*o*d)*T,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,d=r*l,f=r*h,g=r*u,b=a*h,m=a*u,p=o*u,v=c*l,x=c*h,_=c*u,S=n.x,w=n.y,T=n.z;return i[0]=(1-(b+p))*S,i[1]=(f+_)*S,i[2]=(g-x)*S,i[3]=0,i[4]=(f-_)*w,i[5]=(1-(d+p))*w,i[6]=(m+v)*w,i[7]=0,i[8]=(g+x)*T,i[9]=(m-v)*T,i[10]=(1-(d+b))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=Rs.set(i[0],i[1],i[2]).length(),a=Rs.set(i[4],i[5],i[6]).length(),o=Rs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Vn.copy(this);let l=1/r,h=1/a,u=1/o;return Vn.elements[0]*=l,Vn.elements[1]*=l,Vn.elements[2]*=l,Vn.elements[4]*=h,Vn.elements[5]*=h,Vn.elements[6]*=h,Vn.elements[8]*=u,Vn.elements[9]*=u,Vn.elements[10]*=u,t.setFromRotationMatrix(Vn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=bi){let c=this.elements,l=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i),f,g;if(o===bi)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===oo)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=bi){let c=this.elements,l=1/(t-e),h=1/(n-i),u=1/(a-r),d=(t+e)*l,f=(n+i)*h,g,b;if(o===bi)g=(a+r)*u,b=-2*u;else if(o===oo)g=r*u,b=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=b,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Rs=new E,Vn=new be,b0=new E(0,0,0),v0=new E(1,1,1),Ii=new E,Pa=new E,Sn=new E,$u=new be,ed=new at,nr=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(nn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-nn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(nn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-nn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(nn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-nn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return $u.makeRotationFromQuaternion(e),this.setFromRotationMatrix($u,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ed.setFromEuler(this),this.setFromQuaternion(ed,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};nr.DEFAULT_ORDER="XYZ";var Xr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},x0=0,td=new E,Cs=new at,ui=new be,La=new E,Lr=new E,_0=new E,y0=new at,nd=new E(1,0,0),id=new E(0,1,0),sd=new E(0,0,1),M0={type:"added"},E0={type:"removed"},ft=class s extends vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:x0++}),this.uuid=Xn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new E,t=new nr,n=new at,i=new E(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new be},normalMatrix:{value:new Ye}}),this.matrix=new be,this.matrixWorld=new be,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Cs.setFromAxisAngle(e,t),this.quaternion.multiply(Cs),this}rotateOnWorldAxis(e,t){return Cs.setFromAxisAngle(e,t),this.quaternion.premultiply(Cs),this}rotateX(e){return this.rotateOnAxis(nd,e)}rotateY(e){return this.rotateOnAxis(id,e)}rotateZ(e){return this.rotateOnAxis(sd,e)}translateOnAxis(e,t){return td.copy(e).applyQuaternion(this.quaternion),this.position.add(td.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(nd,e)}translateY(e){return this.translateOnAxis(id,e)}translateZ(e){return this.translateOnAxis(sd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ui.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?La.copy(e):La.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Lr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ui.lookAt(Lr,La,this.up):ui.lookAt(La,Lr,this.up),this.quaternion.setFromRotationMatrix(ui),i&&(ui.extractRotation(i.matrixWorld),Cs.setFromRotationMatrix(ui),this.quaternion.premultiply(Cs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(M0)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(E0)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(ui),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lr,e,_0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lr,y0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let i=this.children;for(let r=0,a=i.length;r<a;r++){let o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];i.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};ft.DEFAULT_UP=new E(0,1,0);ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Wn=new E,di=new E,Fc=new E,fi=new E,Ps=new E,Ls=new E,rd=new E,Uc=new E,Nc=new E,Oc=new E,Ia=!1,cs=class s{constructor(e=new E,t=new E,n=new E){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Wn.subVectors(e,t),i.cross(Wn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Wn.subVectors(i,t),di.subVectors(n,t),Fc.subVectors(e,t);let a=Wn.dot(Wn),o=Wn.dot(di),c=Wn.dot(Fc),l=di.dot(di),h=di.dot(Fc),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-o*h)*d,g=(a*h-o*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,fi)===null?!1:fi.x>=0&&fi.y>=0&&fi.x+fi.y<=1}static getUV(e,t,n,i,r,a,o,c){return Ia===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ia=!0),this.getInterpolation(e,t,n,i,r,a,o,c)}static getInterpolation(e,t,n,i,r,a,o,c){return this.getBarycoord(e,t,n,i,fi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,fi.x),c.addScaledVector(a,fi.y),c.addScaledVector(o,fi.z),c)}static isFrontFacing(e,t,n,i){return Wn.subVectors(n,t),di.subVectors(e,t),Wn.cross(di).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wn.subVectors(this.c,this.b),di.subVectors(this.a,this.b),Wn.cross(di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return Ia===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ia=!0),s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,a,o;Ps.subVectors(i,n),Ls.subVectors(r,n),Uc.subVectors(e,n);let c=Ps.dot(Uc),l=Ls.dot(Uc);if(c<=0&&l<=0)return t.copy(n);Nc.subVectors(e,i);let h=Ps.dot(Nc),u=Ls.dot(Nc);if(h>=0&&u<=h)return t.copy(i);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(Ps,a);Oc.subVectors(e,r);let f=Ps.dot(Oc),g=Ls.dot(Oc);if(g>=0&&f<=g)return t.copy(r);let b=f*l-c*g;if(b<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(Ls,o);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return rd.subVectors(r,i),o=(u-h)/(u-h+(f-g)),t.copy(i).addScaledVector(rd,o);let p=1/(m+b+d);return a=b*p,o=d*p,t.copy(n).addScaledVector(Ps,a).addScaledVector(Ls,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},pf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Di={h:0,s:0,l:0},Da={h:0,s:0,l:0};function Bc(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Z=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=it){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=st.workingColorSpace){return this.r=e,this.g=t,this.b=n,st.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=st.workingColorSpace){if(e=Yl(e,1),t=nn(t,0,1),n=nn(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Bc(a,r,e+1/3),this.g=Bc(a,r,e),this.b=Bc(a,r,e-1/3)}return st.toWorkingColorSpace(this,i),this}setStyle(e,t=it){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=it){let n=pf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ks(e.r),this.g=Ks(e.g),this.b=Ks(e.b),this}copyLinearToSRGB(e){return this.r=Tc(e.r),this.g=Tc(e.g),this.b=Tc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=it){return st.fromWorkingColorSpace(tn.copy(this),e),Math.round(nn(tn.r*255,0,255))*65536+Math.round(nn(tn.g*255,0,255))*256+Math.round(nn(tn.b*255,0,255))}getHexString(e=it){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.fromWorkingColorSpace(tn.copy(this),t);let n=tn.r,i=tn.g,r=tn.b,a=Math.max(n,i,r),o=Math.min(n,i,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=st.workingColorSpace){return st.fromWorkingColorSpace(tn.copy(this),t),e.r=tn.r,e.g=tn.g,e.b=tn.b,e}getStyle(e=it){st.fromWorkingColorSpace(tn.copy(this),e);let t=tn.r,n=tn.g,i=tn.b;return e!==it?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Di),this.setHSL(Di.h+e,Di.s+t,Di.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Di),e.getHSL(Da);let n=zr(Di.h,Da.h,t),i=zr(Di.s,Da.s,t),r=zr(Di.l,Da.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},tn=new Z;Z.NAMES=pf;var w0=0,Qt=class extends vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:w0++}),this.uuid=Xn(),this.name="",this.type="Material",this.blending=Ys,this.side=si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$c,this.blendDst=el,this.blendEquation=as,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Z(0,0,0),this.blendAlpha=0,this.depthFunc=to,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Es,this.stencilZFail=Es,this.stencilZPass=Es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ys&&(n.blending=this.blending),this.side!==si&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==$c&&(n.blendSrc=this.blendSrc),this.blendDst!==el&&(n.blendDst=this.blendDst),this.blendEquation!==as&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==to&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Es&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Es&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Es&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Ct=class extends Qt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Z(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ol,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var It=new E,Fa=new oe,ve=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=il,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Fa.fromBufferAttribute(this,t),Fa.applyMatrix3(e),this.setXY(t,Fa.x,Fa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix3(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ti(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=lt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ti(t,this.array)),t}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ti(t,this.array)),t}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ti(t,this.array)),t}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ti(t,this.array)),t}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),i=lt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),i=lt(i,this.array),r=lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==il&&(e.usage=this.usage),e}};var fo=class extends ve{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var po=class extends ve{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var He=class extends ve{constructor(e,t,n){super(new Float32Array(e),t,n)}};var S0=0,Dn=new be,kc=new ft,Is=new E,Tn=new Rt,Ir=new Rt,Wt=new E,Oe=class s extends vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:S0++}),this.uuid=Xn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ff(e)?po:fo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ye().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Dn.makeRotationFromQuaternion(e),this.applyMatrix4(Dn),this}rotateX(e){return Dn.makeRotationX(e),this.applyMatrix4(Dn),this}rotateY(e){return Dn.makeRotationY(e),this.applyMatrix4(Dn),this}rotateZ(e){return Dn.makeRotationZ(e),this.applyMatrix4(Dn),this}translate(e,t,n){return Dn.makeTranslation(e,t,n),this.applyMatrix4(Dn),this}scale(e,t,n){return Dn.makeScale(e,t,n),this.applyMatrix4(Dn),this}lookAt(e){return kc.lookAt(e),kc.updateMatrix(),this.applyMatrix4(kc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Is).negate(),this.translate(Is.x,Is.y,Is.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new He(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Rt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];Tn.setFromBufferAttribute(r),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,Tn.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,Tn.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(Tn.min),this.boundingBox.expandByPoint(Tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new E,1/0);return}if(e){let n=this.boundingSphere.center;if(Tn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Ir.setFromBufferAttribute(o),this.morphTargetsRelative?(Wt.addVectors(Tn.min,Ir.min),Tn.expandByPoint(Wt),Wt.addVectors(Tn.max,Ir.max),Tn.expandByPoint(Wt)):(Tn.expandByPoint(Ir.min),Tn.expandByPoint(Ir.max))}Tn.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Wt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Wt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Wt.fromBufferAttribute(o,l),c&&(Is.fromBufferAttribute(e,l),Wt.add(Is)),i=Math.max(i,n.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,i=t.position.array,r=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ve(new Float32Array(4*o),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let M=0;M<o;M++)l[M]=new E,h[M]=new E;let u=new E,d=new E,f=new E,g=new oe,b=new oe,m=new oe,p=new E,v=new E;function x(M,D,L){u.fromArray(i,M*3),d.fromArray(i,D*3),f.fromArray(i,L*3),g.fromArray(a,M*2),b.fromArray(a,D*2),m.fromArray(a,L*2),d.sub(u),f.sub(u),b.sub(g),m.sub(g);let k=1/(b.x*m.y-m.x*b.y);isFinite(k)&&(p.copy(d).multiplyScalar(m.y).addScaledVector(f,-b.y).multiplyScalar(k),v.copy(f).multiplyScalar(b.x).addScaledVector(d,-m.x).multiplyScalar(k),l[M].add(p),l[D].add(p),l[L].add(p),h[M].add(v),h[D].add(v),h[L].add(v))}let _=this.groups;_.length===0&&(_=[{start:0,count:n.length}]);for(let M=0,D=_.length;M<D;++M){let L=_[M],k=L.start,P=L.count;for(let F=k,U=k+P;F<U;F+=3)x(n[F+0],n[F+1],n[F+2])}let S=new E,w=new E,T=new E,I=new E;function y(M){T.fromArray(r,M*3),I.copy(T);let D=l[M];S.copy(D),S.sub(T.multiplyScalar(T.dot(D))).normalize(),w.crossVectors(I,D);let k=w.dot(h[M])<0?-1:1;c[M*4]=S.x,c[M*4+1]=S.y,c[M*4+2]=S.z,c[M*4+3]=k}for(let M=0,D=_.length;M<D;++M){let L=_[M],k=L.start,P=L.count;for(let F=k,U=k+P;F<U;F+=3)y(n[F+0]),y(n[F+1]),y(n[F+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ve(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new E,r=new E,a=new E,o=new E,c=new E,l=new E,h=new E,u=new E;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),b=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,b),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,b),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(b,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Wt.fromBufferAttribute(e,t),Wt.normalize(),e.setXYZ(t,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),f=0,g=0;for(let b=0,m=c.length;b<m;b++){o.isInterleavedBufferAttribute?f=c[b]*o.data.stride+o.offset:f=c[b]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new ve(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let o in i){let c=i[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ad=new be,is=new fs,Ua=new Rn,od=new E,Ds=new E,Fs=new E,Us=new E,Hc=new E,Na=new E,Oa=new oe,Ba=new oe,ka=new oe,cd=new E,ld=new E,hd=new E,Ha=new E,za=new E,Ne=class extends ft{constructor(e=new Oe,t=new Ct){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(r&&o){Na.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(Hc.fromBufferAttribute(u,e),a?Na.addScaledVector(Hc,h):Na.addScaledVector(Hc.sub(t),h))}t.add(Na)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ua.copy(n.boundingSphere),Ua.applyMatrix4(r),is.copy(e.ray).recast(e.near),!(Ua.containsPoint(is.origin)===!1&&(is.intersectSphere(Ua,od)===null||is.origin.distanceToSquared(od)>(e.far-e.near)**2))&&(ad.copy(r).invert(),is.copy(e.ray).applyMatrix4(ad),!(n.boundingBox!==null&&is.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,is)))}_computeIntersections(e,t,n){let i,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,b=d.length;g<b;g++){let m=d[g],p=a[m.materialIndex],v=Math.max(m.start,f.start),x=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let _=v,S=x;_<S;_+=3){let w=o.getX(_),T=o.getX(_+1),I=o.getX(_+2);i=Ga(this,p,e,n,l,h,u,w,T,I),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,f.start),b=Math.min(o.count,f.start+f.count);for(let m=g,p=b;m<p;m+=3){let v=o.getX(m),x=o.getX(m+1),_=o.getX(m+2);i=Ga(this,a,e,n,l,h,u,v,x,_),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,b=d.length;g<b;g++){let m=d[g],p=a[m.materialIndex],v=Math.max(m.start,f.start),x=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let _=v,S=x;_<S;_+=3){let w=_,T=_+1,I=_+2;i=Ga(this,p,e,n,l,h,u,w,T,I),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,f.start),b=Math.min(c.count,f.start+f.count);for(let m=g,p=b;m<p;m+=3){let v=m,x=m+1,_=m+2;i=Ga(this,a,e,n,l,h,u,v,x,_),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};function T0(s,e,t,n,i,r,a,o){let c;if(e.side===Kt?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,e.side===si,o),c===null)return null;za.copy(o),za.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(za);return l<t.near||l>t.far?null:{distance:l,point:za.clone(),object:s}}function Ga(s,e,t,n,i,r,a,o,c,l){s.getVertexPosition(o,Ds),s.getVertexPosition(c,Fs),s.getVertexPosition(l,Us);let h=T0(s,e,t,n,Ds,Fs,Us,Ha);if(h){i&&(Oa.fromBufferAttribute(i,o),Ba.fromBufferAttribute(i,c),ka.fromBufferAttribute(i,l),h.uv=cs.getInterpolation(Ha,Ds,Fs,Us,Oa,Ba,ka,new oe)),r&&(Oa.fromBufferAttribute(r,o),Ba.fromBufferAttribute(r,c),ka.fromBufferAttribute(r,l),h.uv1=cs.getInterpolation(Ha,Ds,Fs,Us,Oa,Ba,ka,new oe),h.uv2=h.uv1),a&&(cd.fromBufferAttribute(a,o),ld.fromBufferAttribute(a,c),hd.fromBufferAttribute(a,l),h.normal=cs.getInterpolation(Ha,Ds,Fs,Us,cd,ld,hd,new E),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new E,materialIndex:0};cs.getNormal(Ds,Fs,Us,u.normal),h.face=u}return h}var Nt=class s extends Oe{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new He(l,3)),this.setAttribute("normal",new He(h,3)),this.setAttribute("uv",new He(u,2));function g(b,m,p,v,x,_,S,w,T,I,y){let M=_/T,D=S/I,L=_/2,k=S/2,P=w/2,F=T+1,U=I+1,B=0,O=0,z=new E;for(let Y=0;Y<U;Y++){let K=Y*D-k;for(let Q=0;Q<F;Q++){let G=Q*M-L;z[b]=G*v,z[m]=K*x,z[p]=P,l.push(z.x,z.y,z.z),z[b]=0,z[m]=0,z[p]=w>0?1:-1,h.push(z.x,z.y,z.z),u.push(Q/T),u.push(1-Y/I),B+=1}}for(let Y=0;Y<I;Y++)for(let K=0;K<T;K++){let Q=d+K+F*Y,G=d+K+F*(Y+1),J=d+(K+1)+F*(Y+1),$=d+(K+1)+F*Y;c.push(Q,G,$),c.push(G,J,$),O+=6}o.addGroup(f,O,y),f+=O,d+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function ir(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function mn(s){let e={};for(let t=0;t<s.length;t++){let n=ir(s[t]);for(let i in n)e[i]=n[i]}return e}function A0(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function mf(s){return s.getRenderTarget()===null?s.outputColorSpace:st.workingColorSpace}var R0={clone:ir,merge:mn},C0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,P0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,St=class extends Qt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=C0,this.fragmentShader=P0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ir(e.uniforms),this.uniformsGroups=A0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},mo=class extends ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new be,this.projectionMatrix=new be,this.projectionMatrixInverse=new be,this.coordinateSystem=bi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},yt=class extends mo{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=tr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Hr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return tr*2*Math.atan(Math.tan(Hr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Hr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ns=-90,Os=1,cl=class extends ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new yt(Ns,Os,e,t);i.layers=this.layers,this.add(i);let r=new yt(Ns,Os,e,t);r.layers=this.layers,this.add(r);let a=new yt(Ns,Os,e,t);a.layers=this.layers,this.add(a);let o=new yt(Ns,Os,e,t);o.layers=this.layers,this.add(o);let c=new yt(Ns,Os,e,t);c.layers=this.layers,this.add(c);let l=new yt(Ns,Os,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===bi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===oo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},go=class extends Zt{constructor(e,t,n,i,r,a,o,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Zs,super(e,t,n,i,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ll=class extends sn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Gr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===us?it:vn),this.texture=new go(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:qt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Nt(5,5,5),r=new St({name:"CubemapFromEquirect",uniforms:ir(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Kt,blending:Ui});r.uniforms.tEquirect.value=t;let a=new Ne(i,r),o=t.minFilter;return t.minFilter===Oi&&(t.minFilter=qt),new cl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}},zc=new E,L0=new E,I0=new Ye,qn=class{constructor(e=new E(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=zc.subVectors(n,t).cross(L0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(zc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||I0.getNormalMatrix(e),i=this.coplanarPoint(zc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ss=new Rn,Va=new E,jr=class{constructor(e=new qn,t=new qn,n=new qn,i=new qn,r=new qn,a=new qn){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=bi){let n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],c=i[3],l=i[4],h=i[5],u=i[6],d=i[7],f=i[8],g=i[9],b=i[10],m=i[11],p=i[12],v=i[13],x=i[14],_=i[15];if(n[0].setComponents(c-r,d-l,m-f,_-p).normalize(),n[1].setComponents(c+r,d+l,m+f,_+p).normalize(),n[2].setComponents(c+a,d+h,m+g,_+v).normalize(),n[3].setComponents(c-a,d-h,m-g,_-v).normalize(),n[4].setComponents(c-o,d-u,m-b,_-x).normalize(),t===bi)n[5].setComponents(c+o,d+u,m+b,_+x).normalize();else if(t===oo)n[5].setComponents(o,u,b,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ss.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ss.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ss)}intersectsSprite(e){return ss.center.set(0,0,0),ss.radius=.7071067811865476,ss.applyMatrix4(e.matrixWorld),this.intersectsSphere(ss)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Va.x=i.normal.x>0?e.max.x:e.min.x,Va.y=i.normal.y>0?e.max.y:e.min.y,Va.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Va)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function gf(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function D0(s,e){let t=e.isWebGL2,n=new WeakMap;function i(l,h){let u=l.array,d=l.usage,f=u.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,u,d),l.onUploadCallback();let b;if(u instanceof Float32Array)b=s.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)b=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else b=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)b=s.SHORT;else if(u instanceof Uint32Array)b=s.UNSIGNED_INT;else if(u instanceof Int32Array)b=s.INT;else if(u instanceof Int8Array)b=s.BYTE;else if(u instanceof Uint8Array)b=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)b=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:b,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:f}}function r(l,h,u){let d=h.array,f=h._updateRange,g=h.updateRanges;if(s.bindBuffer(u,l),f.count===-1&&g.length===0&&s.bufferSubData(u,0,d),g.length!==0){for(let b=0,m=g.length;b<m;b++){let p=g[b];t?s.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):s.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}f.count!==-1&&(t?s.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):s.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);h&&(s.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=n.get(l);if(u===void 0)n.set(l,i(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:a,remove:o,update:c}}var gn=class s extends Oe{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,u=e/o,d=t/c,f=[],g=[],b=[],m=[];for(let p=0;p<h;p++){let v=p*d-a;for(let x=0;x<l;x++){let _=x*u-r;g.push(_,-v,0),b.push(0,0,1),m.push(x/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<o;v++){let x=v+l*p,_=v+l*(p+1),S=v+1+l*(p+1),w=v+1+l*p;f.push(x,_,w),f.push(_,S,w)}this.setIndex(f),this.setAttribute("position",new He(g,3)),this.setAttribute("normal",new He(b,3)),this.setAttribute("uv",new He(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},F0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,U0=`#ifdef USE_ALPHAHASH
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
#endif`,N0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,O0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,B0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,k0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,H0=`#ifdef USE_AOMAP
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
#endif`,z0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,G0=`#ifdef USE_BATCHING
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
#endif`,V0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,W0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,q0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,X0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,j0=`#ifdef USE_IRIDESCENCE
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
#endif`,Y0=`#ifdef USE_BUMPMAP
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
#endif`,K0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,J0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Z0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Q0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,eg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ng=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ig=`#define PI 3.141592653589793
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
} // validated`,sg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,rg=`vec3 transformedNormal = objectNormal;
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
#endif`,ag=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,og=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hg="gl_FragColor = linearToOutputTexel( gl_FragColor );",ug=`
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
}`,dg=`#ifdef USE_ENVMAP
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
#endif`,fg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,pg=`#ifdef USE_ENVMAP
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
#endif`,mg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gg=`#ifdef USE_ENVMAP
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
#endif`,bg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_g=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yg=`#ifdef USE_GRADIENTMAP
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
}`,Mg=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Eg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Tg=`uniform bool receiveShadow;
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
#endif`,Ag=`#ifdef USE_ENVMAP
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
#endif`,Rg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Cg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Pg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Lg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ig=`PhysicalMaterial material;
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
#endif`,Dg=`struct PhysicalMaterial {
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
}`,Fg=`
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
#endif`,Ug=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ng=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Og=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Hg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,zg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Wg=`#if defined( USE_POINTS_UV )
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
#endif`,qg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yg=`#ifdef USE_MORPHNORMALS
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
#endif`,Kg=`#ifdef USE_MORPHTARGETS
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
#endif`,Jg=`#ifdef USE_MORPHTARGETS
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
#endif`,Zg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Qg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,$g=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,nb=`#ifdef USE_NORMALMAP
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
#endif`,ib=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ab=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ob=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,lb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ub=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,db=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,vb=`float getShadowMask() {
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
}`,xb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_b=`#ifdef USE_SKINNING
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
#endif`,yb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Mb=`#ifdef USE_SKINNING
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
#endif`,Eb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Tb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ab=`#ifdef USE_TRANSMISSION
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
#endif`,Rb=`#ifdef USE_TRANSMISSION
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
#endif`,Cb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ib=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Db=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Fb=`uniform sampler2D t2D;
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
}`,Ub=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ob=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kb=`#include <common>
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
}`,Hb=`#if DEPTH_PACKING == 3200
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
}`,zb=`#define DISTANCE
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
}`,Gb=`#define DISTANCE
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
}`,Vb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Wb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qb=`uniform float scale;
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
}`,Xb=`uniform vec3 diffuse;
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
}`,jb=`#include <common>
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
}`,Yb=`uniform vec3 diffuse;
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
}`,Kb=`#define LAMBERT
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
}`,Jb=`#define LAMBERT
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
}`,Zb=`#define MATCAP
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
}`,Qb=`#define MATCAP
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
}`,$b=`#define NORMAL
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
}`,ev=`#define NORMAL
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
}`,tv=`#define PHONG
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
}`,nv=`#define PHONG
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
}`,iv=`#define STANDARD
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
}`,sv=`#define STANDARD
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
}`,rv=`#define TOON
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
}`,av=`#define TOON
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
}`,ov=`uniform float size;
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
}`,cv=`uniform vec3 diffuse;
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
}`,lv=`#include <common>
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
}`,hv=`uniform vec3 color;
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
}`,uv=`uniform float rotation;
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
}`,dv=`uniform vec3 diffuse;
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
}`,Pe={alphahash_fragment:F0,alphahash_pars_fragment:U0,alphamap_fragment:N0,alphamap_pars_fragment:O0,alphatest_fragment:B0,alphatest_pars_fragment:k0,aomap_fragment:H0,aomap_pars_fragment:z0,batching_pars_vertex:G0,batching_vertex:V0,begin_vertex:W0,beginnormal_vertex:q0,bsdfs:X0,iridescence_fragment:j0,bumpmap_pars_fragment:Y0,clipping_planes_fragment:K0,clipping_planes_pars_fragment:J0,clipping_planes_pars_vertex:Z0,clipping_planes_vertex:Q0,color_fragment:$0,color_pars_fragment:eg,color_pars_vertex:tg,color_vertex:ng,common:ig,cube_uv_reflection_fragment:sg,defaultnormal_vertex:rg,displacementmap_pars_vertex:ag,displacementmap_vertex:og,emissivemap_fragment:cg,emissivemap_pars_fragment:lg,colorspace_fragment:hg,colorspace_pars_fragment:ug,envmap_fragment:dg,envmap_common_pars_fragment:fg,envmap_pars_fragment:pg,envmap_pars_vertex:mg,envmap_physical_pars_fragment:Ag,envmap_vertex:gg,fog_vertex:bg,fog_pars_vertex:vg,fog_fragment:xg,fog_pars_fragment:_g,gradientmap_pars_fragment:yg,lightmap_fragment:Mg,lightmap_pars_fragment:Eg,lights_lambert_fragment:wg,lights_lambert_pars_fragment:Sg,lights_pars_begin:Tg,lights_toon_fragment:Rg,lights_toon_pars_fragment:Cg,lights_phong_fragment:Pg,lights_phong_pars_fragment:Lg,lights_physical_fragment:Ig,lights_physical_pars_fragment:Dg,lights_fragment_begin:Fg,lights_fragment_maps:Ug,lights_fragment_end:Ng,logdepthbuf_fragment:Og,logdepthbuf_pars_fragment:Bg,logdepthbuf_pars_vertex:kg,logdepthbuf_vertex:Hg,map_fragment:zg,map_pars_fragment:Gg,map_particle_fragment:Vg,map_particle_pars_fragment:Wg,metalnessmap_fragment:qg,metalnessmap_pars_fragment:Xg,morphcolor_vertex:jg,morphnormal_vertex:Yg,morphtarget_pars_vertex:Kg,morphtarget_vertex:Jg,normal_fragment_begin:Zg,normal_fragment_maps:Qg,normal_pars_fragment:$g,normal_pars_vertex:eb,normal_vertex:tb,normalmap_pars_fragment:nb,clearcoat_normal_fragment_begin:ib,clearcoat_normal_fragment_maps:sb,clearcoat_pars_fragment:rb,iridescence_pars_fragment:ab,opaque_fragment:ob,packing:cb,premultiplied_alpha_fragment:lb,project_vertex:hb,dithering_fragment:ub,dithering_pars_fragment:db,roughnessmap_fragment:fb,roughnessmap_pars_fragment:pb,shadowmap_pars_fragment:mb,shadowmap_pars_vertex:gb,shadowmap_vertex:bb,shadowmask_pars_fragment:vb,skinbase_vertex:xb,skinning_pars_vertex:_b,skinning_vertex:yb,skinnormal_vertex:Mb,specularmap_fragment:Eb,specularmap_pars_fragment:wb,tonemapping_fragment:Sb,tonemapping_pars_fragment:Tb,transmission_fragment:Ab,transmission_pars_fragment:Rb,uv_pars_fragment:Cb,uv_pars_vertex:Pb,uv_vertex:Lb,worldpos_vertex:Ib,background_vert:Db,background_frag:Fb,backgroundCube_vert:Ub,backgroundCube_frag:Nb,cube_vert:Ob,cube_frag:Bb,depth_vert:kb,depth_frag:Hb,distanceRGBA_vert:zb,distanceRGBA_frag:Gb,equirect_vert:Vb,equirect_frag:Wb,linedashed_vert:qb,linedashed_frag:Xb,meshbasic_vert:jb,meshbasic_frag:Yb,meshlambert_vert:Kb,meshlambert_frag:Jb,meshmatcap_vert:Zb,meshmatcap_frag:Qb,meshnormal_vert:$b,meshnormal_frag:ev,meshphong_vert:tv,meshphong_frag:nv,meshphysical_vert:iv,meshphysical_frag:sv,meshtoon_vert:rv,meshtoon_frag:av,points_vert:ov,points_frag:cv,shadow_vert:lv,shadow_frag:hv,sprite_vert:uv,sprite_frag:dv},ae={common:{diffuse:{value:new Z(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Z(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Z(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new Z(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},ei={basic:{uniforms:mn([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Pe.meshbasic_vert,fragmentShader:Pe.meshbasic_frag},lambert:{uniforms:mn([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Z(0)}}]),vertexShader:Pe.meshlambert_vert,fragmentShader:Pe.meshlambert_frag},phong:{uniforms:mn([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Z(0)},specular:{value:new Z(1118481)},shininess:{value:30}}]),vertexShader:Pe.meshphong_vert,fragmentShader:Pe.meshphong_frag},standard:{uniforms:mn([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Z(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag},toon:{uniforms:mn([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Z(0)}}]),vertexShader:Pe.meshtoon_vert,fragmentShader:Pe.meshtoon_frag},matcap:{uniforms:mn([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Pe.meshmatcap_vert,fragmentShader:Pe.meshmatcap_frag},points:{uniforms:mn([ae.points,ae.fog]),vertexShader:Pe.points_vert,fragmentShader:Pe.points_frag},dashed:{uniforms:mn([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Pe.linedashed_vert,fragmentShader:Pe.linedashed_frag},depth:{uniforms:mn([ae.common,ae.displacementmap]),vertexShader:Pe.depth_vert,fragmentShader:Pe.depth_frag},normal:{uniforms:mn([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Pe.meshnormal_vert,fragmentShader:Pe.meshnormal_frag},sprite:{uniforms:mn([ae.sprite,ae.fog]),vertexShader:Pe.sprite_vert,fragmentShader:Pe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Pe.background_vert,fragmentShader:Pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Pe.backgroundCube_vert,fragmentShader:Pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Pe.cube_vert,fragmentShader:Pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Pe.equirect_vert,fragmentShader:Pe.equirect_frag},distanceRGBA:{uniforms:mn([ae.common,ae.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Pe.distanceRGBA_vert,fragmentShader:Pe.distanceRGBA_frag},shadow:{uniforms:mn([ae.lights,ae.fog,{color:{value:new Z(0)},opacity:{value:1}}]),vertexShader:Pe.shadow_vert,fragmentShader:Pe.shadow_frag}};ei.physical={uniforms:mn([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Z(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Z(0)},specularColor:{value:new Z(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag};var Wa={r:0,b:0,g:0};function fv(s,e,t,n,i,r,a){let o=new Z(0),c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(m,p){let v=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?t:e).get(x)),x===null?b(o,c):x&&x.isColor&&(b(x,1),v=!0);let _=s.xr.getEnvironmentBlendMode();_==="additive"?n.buffers.color.setClear(0,0,0,1,a):_==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||v)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Ro)?(h===void 0&&(h=new Ne(new Nt(1,1,1),new St({name:"BackgroundCubeMaterial",uniforms:ir(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(S,w,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=st.getTransfer(x.colorSpace)!==bt,(u!==x||d!==x.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=s.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Ne(new gn(2,2),new St({name:"BackgroundMaterial",uniforms:ir(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=st.getTransfer(x.colorSpace)!==bt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,f=s.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function b(m,p){m.getRGB(Wa,mf(s)),n.buffers.color.setClear(Wa.r,Wa.g,Wa.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),c=p,b(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,b(o,c)},render:g}}function pv(s,e,t,n){let i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},c=m(null),l=c,h=!1;function u(P,F,U,B,O){let z=!1;if(a){let Y=b(B,U,F);l!==Y&&(l=Y,f(l.object)),z=p(P,B,U,O),z&&v(P,B,U,O)}else{let Y=F.wireframe===!0;(l.geometry!==B.id||l.program!==U.id||l.wireframe!==Y)&&(l.geometry=B.id,l.program=U.id,l.wireframe=Y,z=!0)}O!==null&&t.update(O,s.ELEMENT_ARRAY_BUFFER),(z||h)&&(h=!1,I(P,F,U,B),O!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function d(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function f(P){return n.isWebGL2?s.bindVertexArray(P):r.bindVertexArrayOES(P)}function g(P){return n.isWebGL2?s.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function b(P,F,U){let B=U.wireframe===!0,O=o[P.id];O===void 0&&(O={},o[P.id]=O);let z=O[F.id];z===void 0&&(z={},O[F.id]=z);let Y=z[B];return Y===void 0&&(Y=m(d()),z[B]=Y),Y}function m(P){let F=[],U=[],B=[];for(let O=0;O<i;O++)F[O]=0,U[O]=0,B[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:U,attributeDivisors:B,object:P,attributes:{},index:null}}function p(P,F,U,B){let O=l.attributes,z=F.attributes,Y=0,K=U.getAttributes();for(let Q in K)if(K[Q].location>=0){let J=O[Q],$=z[Q];if($===void 0&&(Q==="instanceMatrix"&&P.instanceMatrix&&($=P.instanceMatrix),Q==="instanceColor"&&P.instanceColor&&($=P.instanceColor)),J===void 0||J.attribute!==$||$&&J.data!==$.data)return!0;Y++}return l.attributesNum!==Y||l.index!==B}function v(P,F,U,B){let O={},z=F.attributes,Y=0,K=U.getAttributes();for(let Q in K)if(K[Q].location>=0){let J=z[Q];J===void 0&&(Q==="instanceMatrix"&&P.instanceMatrix&&(J=P.instanceMatrix),Q==="instanceColor"&&P.instanceColor&&(J=P.instanceColor));let $={};$.attribute=J,J&&J.data&&($.data=J.data),O[Q]=$,Y++}l.attributes=O,l.attributesNum=Y,l.index=B}function x(){let P=l.newAttributes;for(let F=0,U=P.length;F<U;F++)P[F]=0}function _(P){S(P,0)}function S(P,F){let U=l.newAttributes,B=l.enabledAttributes,O=l.attributeDivisors;U[P]=1,B[P]===0&&(s.enableVertexAttribArray(P),B[P]=1),O[P]!==F&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,F),O[P]=F)}function w(){let P=l.newAttributes,F=l.enabledAttributes;for(let U=0,B=F.length;U<B;U++)F[U]!==P[U]&&(s.disableVertexAttribArray(U),F[U]=0)}function T(P,F,U,B,O,z,Y){Y===!0?s.vertexAttribIPointer(P,F,U,O,z):s.vertexAttribPointer(P,F,U,B,O,z)}function I(P,F,U,B){if(n.isWebGL2===!1&&(P.isInstancedMesh||B.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();let O=B.attributes,z=U.getAttributes(),Y=F.defaultAttributeValues;for(let K in z){let Q=z[K];if(Q.location>=0){let G=O[K];if(G===void 0&&(K==="instanceMatrix"&&P.instanceMatrix&&(G=P.instanceMatrix),K==="instanceColor"&&P.instanceColor&&(G=P.instanceColor)),G!==void 0){let J=G.normalized,$=G.itemSize,le=t.get(G);if(le===void 0)continue;let ge=le.buffer,Be=le.type,ze=le.bytesPerElement,Re=n.isWebGL2===!0&&(Be===s.INT||Be===s.UNSIGNED_INT||G.gpuType===nf);if(G.isInterleavedBufferAttribute){let nt=G.data,V=nt.stride,un=G.offset;if(nt.isInstancedInterleavedBuffer){for(let we=0;we<Q.locationSize;we++)S(Q.location+we,nt.meshPerAttribute);P.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let we=0;we<Q.locationSize;we++)_(Q.location+we);s.bindBuffer(s.ARRAY_BUFFER,ge);for(let we=0;we<Q.locationSize;we++)T(Q.location+we,$/Q.locationSize,Be,J,V*ze,(un+$/Q.locationSize*we)*ze,Re)}else{if(G.isInstancedBufferAttribute){for(let nt=0;nt<Q.locationSize;nt++)S(Q.location+nt,G.meshPerAttribute);P.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let nt=0;nt<Q.locationSize;nt++)_(Q.location+nt);s.bindBuffer(s.ARRAY_BUFFER,ge);for(let nt=0;nt<Q.locationSize;nt++)T(Q.location+nt,$/Q.locationSize,Be,J,$*ze,$/Q.locationSize*nt*ze,Re)}}else if(Y!==void 0){let J=Y[K];if(J!==void 0)switch(J.length){case 2:s.vertexAttrib2fv(Q.location,J);break;case 3:s.vertexAttrib3fv(Q.location,J);break;case 4:s.vertexAttrib4fv(Q.location,J);break;default:s.vertexAttrib1fv(Q.location,J)}}}}w()}function y(){L();for(let P in o){let F=o[P];for(let U in F){let B=F[U];for(let O in B)g(B[O].object),delete B[O];delete F[U]}delete o[P]}}function M(P){if(o[P.id]===void 0)return;let F=o[P.id];for(let U in F){let B=F[U];for(let O in B)g(B[O].object),delete B[O];delete F[U]}delete o[P.id]}function D(P){for(let F in o){let U=o[F];if(U[P.id]===void 0)continue;let B=U[P.id];for(let O in B)g(B[O].object),delete B[O];delete U[P.id]}}function L(){k(),h=!0,l!==c&&(l=c,f(l.object))}function k(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:L,resetDefaultState:k,dispose:y,releaseStatesOfGeometry:M,releaseStatesOfProgram:D,initAttributes:x,enableAttribute:_,disableUnusedAttributes:w}}function mv(s,e,t,n){let i=n.isWebGL2,r;function a(h){r=h}function o(h,u){s.drawArrays(r,h,u),t.update(u,r,1)}function c(h,u,d){if(d===0)return;let f,g;if(i)f=s,g="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](r,h,u,d),t.update(u,r,d)}function l(h,u,d){if(d===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{f.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let b=0;b<d;b++)g+=u[b];t.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=l}function gv(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext",o=t.precision!==void 0?t.precision:"highp",c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);let l=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),b=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),p=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,_=a||e.has("OES_texture_float"),S=x&&_,w=a?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:b,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:_,floatVertexTextures:S,maxSamples:w}}function bv(s){let e=this,t=null,n=0,i=!1,r=!1,a=new qn,o=new Ye,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,b=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):l();else{let v=r?0:n,x=v*4,_=p.clippingState||null;c.value=_,_=h(g,d,x,f);for(let S=0;S!==x;++S)_[S]=t[S];p.clippingState=_,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){let b=u!==null?u.length:0,m=null;if(b!==0){if(m=c.value,g!==!0||m===null){let p=f+b*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,_=f;x!==b;++x,_+=4)a.copy(u[x]).applyMatrix4(v,o),a.normal.toArray(m,_),m[_+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,m}}function vv(s){let e=new WeakMap;function t(a,o){return o===tl?a.mapping=Zs:o===nl&&(a.mapping=Qs),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===tl||o===nl)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new ll(c.height/2);return l.fromEquirectangularTexture(s,a),e.set(a,l),a.addEventListener("dispose",i),t(l.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Bi=class extends mo{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Xs=4,ud=[.125,.215,.35,.446,.526,.582],os=20,Gc=new Bi,dd=new Z,Vc=null,Wc=0,qc=0,rs=(1+Math.sqrt(5))/2,Bs=1/rs,fd=[new E(1,1,1),new E(-1,1,1),new E(1,1,-1),new E(-1,1,-1),new E(0,rs,Bs),new E(0,rs,-Bs),new E(Bs,0,rs),new E(-Bs,0,rs),new E(rs,Bs,0),new E(-rs,Bs,0)],sr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Vc=this._renderer.getRenderTarget(),Wc=this._renderer.getActiveCubeFace(),qc=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=md(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Vc,Wc,qc),e.scissorTest=!1,qa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Zs||e.mapping===Qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vc=this._renderer.getRenderTarget(),Wc=this._renderer.getActiveCubeFace(),qc=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:qt,minFilter:qt,generateMipmaps:!1,type:Un,format:Fn,colorSpace:Ut,depthBuffer:!1},i=pd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pd(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=xv(r)),this._blurMaterial=_v(r,e,t)}return i}_compileMaterial(e){let t=new Ne(this._lodPlanes[0],e);this._renderer.compile(t,Gc)}_sceneToCubeUV(e,t,n,i){let o=new yt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(dd),h.toneMapping=Ni,h.autoClear=!1;let f=new Ct({name:"PMREM.Background",side:Kt,depthWrite:!1,depthTest:!1}),g=new Ne(new Nt,f),b=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,b=!0):(f.color.copy(dd),b=!0);for(let p=0;p<6;p++){let v=p%3;v===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):v===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));let x=this._cubeSize;qa(i,v*x,p>2?x:0,x,x),h.setRenderTarget(i),b&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Zs||e.mapping===Qs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=gd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=md());let r=i?this._cubemapMaterial:this._equirectMaterial,a=new Ne(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;qa(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Gc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=fd[(i-1)%fd.length];this._blur(e,i-1,i,r,a)}t.autoClear=n}_blur(e,t,n,i,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Ne(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*os-1),b=r/g,m=isFinite(r)?1+Math.floor(h*b):os;m>os&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${os}`);let p=[],v=0;for(let T=0;T<os;++T){let I=T/b,y=Math.exp(-I*I/2);p.push(y),T===0?v+=y:T<m&&(v+=2*y)}for(let T=0;T<p.length;T++)p[T]=p[T]/v;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;let _=this._sizeLods[i],S=3*_*(i>x-Xs?i-x+Xs:0),w=4*(this._cubeSize-_);qa(t,S,w,3*_,2*_),c.setRenderTarget(t),c.render(u,Gc)}};function xv(s){let e=[],t=[],n=[],i=s,r=s-Xs+1+ud.length;for(let a=0;a<r;a++){let o=Math.pow(2,i);t.push(o);let c=1/o;a>s-Xs?c=ud[a-s+Xs-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,b=3,m=2,p=1,v=new Float32Array(b*g*f),x=new Float32Array(m*g*f),_=new Float32Array(p*g*f);for(let w=0;w<f;w++){let T=w%3*2/3-1,I=w>2?0:-1,y=[T,I,0,T+2/3,I,0,T+2/3,I+1,0,T,I,0,T+2/3,I+1,0,T,I+1,0];v.set(y,b*g*w),x.set(d,m*g*w);let M=[w,w,w,w,w,w];_.set(M,p*g*w)}let S=new Oe;S.setAttribute("position",new ve(v,b)),S.setAttribute("uv",new ve(x,m)),S.setAttribute("faceIndex",new ve(_,p)),e.push(S),i>Xs&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function pd(s,e,t){let n=new sn(s,e,t);return n.texture.mapping=Ro,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function qa(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function _v(s,e,t){let n=new Float32Array(os),i=new E(0,1,0);return new St({name:"SphericalGaussianBlur",defines:{n:os,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Kl(),fragmentShader:`

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
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function md(){return new St({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kl(),fragmentShader:`

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
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function gd(){return new St({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function Kl(){return`

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
	`}function yv(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===tl||c===nl,h=c===Zs||c===Qs;if(l||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=e.get(o);return t===null&&(t=new sr(s)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),e.set(o,u),u.texture}else{if(e.has(o))return e.get(o).texture;{let u=o.image;if(l&&u&&u.height>0||h&&u&&i(u)){t===null&&(t=new sr(s));let d=l?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function i(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Mv(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Ev(s,e,t,n){let i={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let b=d.morphAttributes[g];for(let m=0,p=b.length;m<p;m++)e.remove(b[m])}d.removeEventListener("dispose",a),delete i[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let g in d)e.update(d[g],s.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let b=f[g];for(let m=0,p=b.length;m<p;m++)e.update(b[m],s.ARRAY_BUFFER)}}function l(u){let d=[],f=u.index,g=u.attributes.position,b=0;if(f!==null){let v=f.array;b=f.version;for(let x=0,_=v.length;x<_;x+=3){let S=v[x+0],w=v[x+1],T=v[x+2];d.push(S,w,w,T,T,S)}}else if(g!==void 0){let v=g.array;b=g.version;for(let x=0,_=v.length/3-1;x<_;x+=3){let S=x+0,w=x+1,T=x+2;d.push(S,w,w,T,T,S)}}else return;let m=new(ff(d)?po:fo)(d,1);m.version=b;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function wv(s,e,t,n){let i=n.isWebGL2,r;function a(f){r=f}let o,c;function l(f){o=f.type,c=f.bytesPerElement}function h(f,g){s.drawElements(r,g,o,f*c),t.update(g,r,1)}function u(f,g,b){if(b===0)return;let m,p;if(i)m=s,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,o,f*c,b),t.update(g,r,b)}function d(f,g,b){if(b===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<b;p++)this.render(f[p]/c,g[p]);else{m.multiDrawElementsWEBGL(r,g,0,o,f,0,b);let p=0;for(let v=0;v<b;v++)p+=g[v];t.update(p,r,1)}}this.setMode=a,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function Sv(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Tv(s,e){return s[0]-e[0]}function Av(s,e){return Math.abs(e[1])-Math.abs(s[1])}function Rv(s,e,t){let n={},i=new Float32Array(8),r=new WeakMap,a=new Ke,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,h,u){let d=l.morphTargetInfluences;if(e.isWebGL2===!0){let f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=f!==void 0?f.length:0,b=r.get(h);if(b===void 0||b.count!==g){let P=function(){L.dispose(),r.delete(h),h.removeEventListener("dispose",P)};b!==void 0&&b.texture.dispose();let v=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,_=h.morphAttributes.color!==void 0,S=h.morphAttributes.position||[],w=h.morphAttributes.normal||[],T=h.morphAttributes.color||[],I=0;v===!0&&(I=1),x===!0&&(I=2),_===!0&&(I=3);let y=h.attributes.position.count*I,M=1;y>e.maxTextureSize&&(M=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let D=new Float32Array(y*M*4*g),L=new uo(D,y,M,g);L.type=gi,L.needsUpdate=!0;let k=I*4;for(let F=0;F<g;F++){let U=S[F],B=w[F],O=T[F],z=y*M*4*F;for(let Y=0;Y<U.count;Y++){let K=Y*k;v===!0&&(a.fromBufferAttribute(U,Y),D[z+K+0]=a.x,D[z+K+1]=a.y,D[z+K+2]=a.z,D[z+K+3]=0),x===!0&&(a.fromBufferAttribute(B,Y),D[z+K+4]=a.x,D[z+K+5]=a.y,D[z+K+6]=a.z,D[z+K+7]=0),_===!0&&(a.fromBufferAttribute(O,Y),D[z+K+8]=a.x,D[z+K+9]=a.y,D[z+K+10]=a.z,D[z+K+11]=O.itemSize===4?a.w:1)}}b={count:g,texture:L,size:new oe(y,M)},r.set(h,b),h.addEventListener("dispose",P)}let m=0;for(let v=0;v<d.length;v++)m+=d[v];let p=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(s,"morphTargetBaseInfluence",p),u.getUniforms().setValue(s,"morphTargetInfluences",d),u.getUniforms().setValue(s,"morphTargetsTexture",b.texture,t),u.getUniforms().setValue(s,"morphTargetsTextureSize",b.size)}else{let f=d===void 0?0:d.length,g=n[h.id];if(g===void 0||g.length!==f){g=[];for(let x=0;x<f;x++)g[x]=[x,0];n[h.id]=g}for(let x=0;x<f;x++){let _=g[x];_[0]=x,_[1]=d[x]}g.sort(Av);for(let x=0;x<8;x++)x<f&&g[x][1]?(o[x][0]=g[x][0],o[x][1]=g[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(Tv);let b=h.morphAttributes.position,m=h.morphAttributes.normal,p=0;for(let x=0;x<8;x++){let _=o[x],S=_[0],w=_[1];S!==Number.MAX_SAFE_INTEGER&&w?(b&&h.getAttribute("morphTarget"+x)!==b[S]&&h.setAttribute("morphTarget"+x,b[S]),m&&h.getAttribute("morphNormal"+x)!==m[S]&&h.setAttribute("morphNormal"+x,m[S]),i[x]=w,p+=w):(b&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),m&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),i[x]=0)}let v=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(s,"morphTargetBaseInfluence",v),u.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function Cv(s,e,t,n){let i=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=e.get(c,h);if(i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function a(){i=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}var rr=class extends Zt{constructor(e,t,n,i,r,a,o,c,l,h){if(h=h!==void 0?h:hs,h!==hs&&h!==$s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===hs&&(n=ni),n===void 0&&h===$s&&(n=ls),super(null,i,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Ft,this.minFilter=c!==void 0?c:Ft,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},bf=new Zt,vf=new rr(1,1);vf.compareFunction=df;var xf=new uo,_f=new ol,yf=new go,bd=[],vd=[],xd=new Float32Array(16),_d=new Float32Array(9),yd=new Float32Array(4);function fr(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=bd[i];if(r===void 0&&(r=new Float32Array(i),bd[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Ot(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Bt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Lo(s,e){let t=vd[e];t===void 0&&(t=new Int32Array(e),vd[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Pv(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Lv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;s.uniform2fv(this.addr,e),Bt(t,e)}}function Iv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ot(t,e))return;s.uniform3fv(this.addr,e),Bt(t,e)}}function Dv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;s.uniform4fv(this.addr,e),Bt(t,e)}}function Fv(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Bt(t,e)}else{if(Ot(t,n))return;yd.set(n),s.uniformMatrix2fv(this.addr,!1,yd),Bt(t,n)}}function Uv(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Bt(t,e)}else{if(Ot(t,n))return;_d.set(n),s.uniformMatrix3fv(this.addr,!1,_d),Bt(t,n)}}function Nv(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Bt(t,e)}else{if(Ot(t,n))return;xd.set(n),s.uniformMatrix4fv(this.addr,!1,xd),Bt(t,n)}}function Ov(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Bv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;s.uniform2iv(this.addr,e),Bt(t,e)}}function kv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;s.uniform3iv(this.addr,e),Bt(t,e)}}function Hv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;s.uniform4iv(this.addr,e),Bt(t,e)}}function zv(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Gv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;s.uniform2uiv(this.addr,e),Bt(t,e)}}function Vv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;s.uniform3uiv(this.addr,e),Bt(t,e)}}function Wv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;s.uniform4uiv(this.addr,e),Bt(t,e)}}function qv(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r=this.type===s.SAMPLER_2D_SHADOW?vf:bf;t.setTexture2D(e||r,i)}function Xv(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||_f,i)}function jv(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||yf,i)}function Yv(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||xf,i)}function Kv(s){switch(s){case 5126:return Pv;case 35664:return Lv;case 35665:return Iv;case 35666:return Dv;case 35674:return Fv;case 35675:return Uv;case 35676:return Nv;case 5124:case 35670:return Ov;case 35667:case 35671:return Bv;case 35668:case 35672:return kv;case 35669:case 35673:return Hv;case 5125:return zv;case 36294:return Gv;case 36295:return Vv;case 36296:return Wv;case 35678:case 36198:case 36298:case 36306:case 35682:return qv;case 35679:case 36299:case 36307:return Xv;case 35680:case 36300:case 36308:case 36293:return jv;case 36289:case 36303:case 36311:case 36292:return Yv}}function Jv(s,e){s.uniform1fv(this.addr,e)}function Zv(s,e){let t=fr(e,this.size,2);s.uniform2fv(this.addr,t)}function Qv(s,e){let t=fr(e,this.size,3);s.uniform3fv(this.addr,t)}function $v(s,e){let t=fr(e,this.size,4);s.uniform4fv(this.addr,t)}function ex(s,e){let t=fr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function tx(s,e){let t=fr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function nx(s,e){let t=fr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function ix(s,e){s.uniform1iv(this.addr,e)}function sx(s,e){s.uniform2iv(this.addr,e)}function rx(s,e){s.uniform3iv(this.addr,e)}function ax(s,e){s.uniform4iv(this.addr,e)}function ox(s,e){s.uniform1uiv(this.addr,e)}function cx(s,e){s.uniform2uiv(this.addr,e)}function lx(s,e){s.uniform3uiv(this.addr,e)}function hx(s,e){s.uniform4uiv(this.addr,e)}function ux(s,e,t){let n=this.cache,i=e.length,r=Lo(t,i);Ot(n,r)||(s.uniform1iv(this.addr,r),Bt(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||bf,r[a])}function dx(s,e,t){let n=this.cache,i=e.length,r=Lo(t,i);Ot(n,r)||(s.uniform1iv(this.addr,r),Bt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||_f,r[a])}function fx(s,e,t){let n=this.cache,i=e.length,r=Lo(t,i);Ot(n,r)||(s.uniform1iv(this.addr,r),Bt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||yf,r[a])}function px(s,e,t){let n=this.cache,i=e.length,r=Lo(t,i);Ot(n,r)||(s.uniform1iv(this.addr,r),Bt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||xf,r[a])}function mx(s){switch(s){case 5126:return Jv;case 35664:return Zv;case 35665:return Qv;case 35666:return $v;case 35674:return ex;case 35675:return tx;case 35676:return nx;case 5124:case 35670:return ix;case 35667:case 35671:return sx;case 35668:case 35672:return rx;case 35669:case 35673:return ax;case 5125:return ox;case 36294:return cx;case 36295:return lx;case 36296:return hx;case 35678:case 36198:case 36298:case 36306:case 35682:return ux;case 35679:case 36299:case 36307:return dx;case 35680:case 36300:case 36308:case 36293:return fx;case 36289:case 36303:case 36311:case 36292:return px}}var hl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Kv(t.type)}},ul=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=mx(t.type)}},dl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(e,t[o.id],n)}}},Xc=/(\w+)(\])?(\[|\.)?/g;function Md(s,e){s.seq.push(e),s.map[e.id]=e}function gx(s,e,t){let n=s.name,i=n.length;for(Xc.lastIndex=0;;){let r=Xc.exec(n),a=Xc.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){Md(t,l===void 0?new hl(o,s,e):new ul(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new dl(o),Md(t,u)),t=u}}}var Js=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);gx(r,a,this)}}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function Ed(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var bx=37297,vx=0;function xx(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function _x(s){let e=st.getPrimaries(st.workingColorSpace),t=st.getPrimaries(s),n;switch(e===t?n="":e===ao&&t===ro?n="LinearDisplayP3ToLinearSRGB":e===ro&&t===ao&&(n="LinearSRGBToLinearDisplayP3"),s){case Ut:case Po:return[n,"LinearTransferOETF"];case it:case Xl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function wd(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+xx(s.getShaderSource(e),a)}else return i}function yx(s,e){let t=_x(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Mx(s,e){let t;switch(e){case Am:t="Linear";break;case Rm:t="Reinhard";break;case Cm:t="OptimizedCineon";break;case Bl:t="ACESFilmic";break;case Lm:t="AgX";break;case Pm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Ex(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(js).join(`
`)}function wx(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(js).join(`
`)}function Sx(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Tx(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function js(s){return s!==""}function Sd(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Td(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Ax=/^[ \t]*#include +<([\w\d./]+)>/gm;function fl(s){return s.replace(Ax,Cx)}var Rx=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Cx(s,e){let t=Pe[e];if(t===void 0){let n=Rx.get(e);if(n!==void 0)t=Pe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return fl(t)}var Px=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ad(s){return s.replace(Px,Lx)}function Lx(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Rd(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ix(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===ef?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Nl?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===mi&&(e="SHADOWMAP_TYPE_VSM"),e}function Dx(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Zs:case Qs:e="ENVMAP_TYPE_CUBE";break;case Ro:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Fx(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Qs:e="ENVMAP_MODE_REFRACTION";break}return e}function Ux(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Ol:e="ENVMAP_BLENDING_MULTIPLY";break;case Sm:e="ENVMAP_BLENDING_MIX";break;case Tm:e="ENVMAP_BLENDING_ADD";break}return e}function Nx(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Ox(s,e,t,n){let i=s.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=Ix(t),l=Dx(t),h=Fx(t),u=Ux(t),d=Nx(t),f=t.isWebGL2?"":Ex(t),g=wx(t),b=Sx(r),m=i.createProgram(),p,v,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(js).join(`
`),p.length>0&&(p+=`
`),v=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(js).join(`
`),v.length>0&&(v+=`
`)):(p=[Rd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(js).join(`
`),v=[f,Rd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ni?"#define TONE_MAPPING":"",t.toneMapping!==Ni?Pe.tonemapping_pars_fragment:"",t.toneMapping!==Ni?Mx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Pe.colorspace_pars_fragment,yx("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(js).join(`
`)),a=fl(a),a=Sd(a,t),a=Td(a,t),o=fl(o),o=Sd(o,t),o=Td(o,t),a=Ad(a),o=Ad(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,v=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===ju?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ju?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);let _=x+p+a,S=x+v+o,w=Ed(i,i.VERTEX_SHADER,_),T=Ed(i,i.FRAGMENT_SHADER,S);i.attachShader(m,w),i.attachShader(m,T),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function I(L){if(s.debug.checkShaderErrors){let k=i.getProgramInfoLog(m).trim(),P=i.getShaderInfoLog(w).trim(),F=i.getShaderInfoLog(T).trim(),U=!0,B=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(U=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,w,T);else{let O=wd(i,w,"vertex"),z=wd(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+k+`
`+O+`
`+z)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(P===""||F==="")&&(B=!1);B&&(L.diagnostics={runnable:U,programLog:k,vertexShader:{log:P,prefix:p},fragmentShader:{log:F,prefix:v}})}i.deleteShader(w),i.deleteShader(T),y=new Js(i,m),M=Tx(i,m)}let y;this.getUniforms=function(){return y===void 0&&I(this),y};let M;this.getAttributes=function(){return M===void 0&&I(this),M};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=i.getProgramParameter(m,bx)),D},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=vx++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=w,this.fragmentShader=T,this}var Bx=0,pl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new ml(e),t.set(e,n)),n}},ml=class{constructor(e){this.id=Bx++,this.code=e,this.usedTimes=0}};function kx(s,e,t,n,i,r,a){let o=new Xr,c=new pl,l=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,d=i.vertexTextures,f=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(y){return y===0?"uv":`uv${y}`}function m(y,M,D,L,k){let P=L.fog,F=k.geometry,U=y.isMeshStandardMaterial?L.environment:null,B=(y.isMeshStandardMaterial?t:e).get(y.envMap||U),O=B&&B.mapping===Ro?B.image.height:null,z=g[y.type];y.precision!==null&&(f=i.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));let Y=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,K=Y!==void 0?Y.length:0,Q=0;F.morphAttributes.position!==void 0&&(Q=1),F.morphAttributes.normal!==void 0&&(Q=2),F.morphAttributes.color!==void 0&&(Q=3);let G,J,$,le;if(z){let dn=ei[z];G=dn.vertexShader,J=dn.fragmentShader}else G=y.vertexShader,J=y.fragmentShader,c.update(y),$=c.getVertexShaderID(y),le=c.getFragmentShaderID(y);let ge=s.getRenderTarget(),Be=k.isInstancedMesh===!0,ze=k.isBatchedMesh===!0,Re=!!y.map,nt=!!y.matcap,V=!!B,un=!!y.aoMap,we=!!y.lightMap,Fe=!!y.bumpMap,xe=!!y.normalMap,xt=!!y.displacementMap,Ve=!!y.emissiveMap,C=!!y.metalnessMap,A=!!y.roughnessMap,q=y.anisotropy>0,ie=y.clearcoat>0,ne=y.iridescence>0,se=y.sheen>0,_e=y.transmission>0,de=q&&!!y.anisotropyMap,pe=ie&&!!y.clearcoatMap,Ae=ie&&!!y.clearcoatNormalMap,We=ie&&!!y.clearcoatRoughnessMap,te=ne&&!!y.iridescenceMap,ct=ne&&!!y.iridescenceThicknessMap,Qe=se&&!!y.sheenColorMap,De=se&&!!y.sheenRoughnessMap,Ee=!!y.specularMap,me=!!y.specularColorMap,Ge=!!y.specularIntensityMap,ot=_e&&!!y.transmissionMap,Et=_e&&!!y.thicknessMap,Xe=!!y.gradientMap,re=!!y.alphaMap,N=y.alphaTest>0,he=!!y.alphaHash,ue=!!y.extensions,Ce=!!F.attributes.uv1,Se=!!F.attributes.uv2,pt=!!F.attributes.uv3,mt=Ni;return y.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(mt=s.toneMapping),{isWebGL2:h,shaderID:z,shaderType:y.type,shaderName:y.name,vertexShader:G,fragmentShader:J,defines:y.defines,customVertexShaderID:$,customFragmentShaderID:le,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:ze,instancing:Be,instancingColor:Be&&k.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:ge===null?s.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:Ut,map:Re,matcap:nt,envMap:V,envMapMode:V&&B.mapping,envMapCubeUVHeight:O,aoMap:un,lightMap:we,bumpMap:Fe,normalMap:xe,displacementMap:d&&xt,emissiveMap:Ve,normalMapObjectSpace:xe&&y.normalMapType===Wm,normalMapTangentSpace:xe&&y.normalMapType===ql,metalnessMap:C,roughnessMap:A,anisotropy:q,anisotropyMap:de,clearcoat:ie,clearcoatMap:pe,clearcoatNormalMap:Ae,clearcoatRoughnessMap:We,iridescence:ne,iridescenceMap:te,iridescenceThicknessMap:ct,sheen:se,sheenColorMap:Qe,sheenRoughnessMap:De,specularMap:Ee,specularColorMap:me,specularIntensityMap:Ge,transmission:_e,transmissionMap:ot,thicknessMap:Et,gradientMap:Xe,opaque:y.transparent===!1&&y.blending===Ys,alphaMap:re,alphaTest:N,alphaHash:he,combine:y.combine,mapUv:Re&&b(y.map.channel),aoMapUv:un&&b(y.aoMap.channel),lightMapUv:we&&b(y.lightMap.channel),bumpMapUv:Fe&&b(y.bumpMap.channel),normalMapUv:xe&&b(y.normalMap.channel),displacementMapUv:xt&&b(y.displacementMap.channel),emissiveMapUv:Ve&&b(y.emissiveMap.channel),metalnessMapUv:C&&b(y.metalnessMap.channel),roughnessMapUv:A&&b(y.roughnessMap.channel),anisotropyMapUv:de&&b(y.anisotropyMap.channel),clearcoatMapUv:pe&&b(y.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&b(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:We&&b(y.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&b(y.iridescenceMap.channel),iridescenceThicknessMapUv:ct&&b(y.iridescenceThicknessMap.channel),sheenColorMapUv:Qe&&b(y.sheenColorMap.channel),sheenRoughnessMapUv:De&&b(y.sheenRoughnessMap.channel),specularMapUv:Ee&&b(y.specularMap.channel),specularColorMapUv:me&&b(y.specularColorMap.channel),specularIntensityMapUv:Ge&&b(y.specularIntensityMap.channel),transmissionMapUv:ot&&b(y.transmissionMap.channel),thicknessMapUv:Et&&b(y.thicknessMap.channel),alphaMapUv:re&&b(y.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(xe||q),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUv1s:Ce,vertexUv2s:Se,vertexUv3s:pt,pointsUvs:k.isPoints===!0&&!!F.attributes.uv&&(Re||re),fog:!!P,useFog:y.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:k.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:Q,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&D.length>0,shadowMapType:s.shadowMap.type,toneMapping:mt,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Re&&y.map.isVideoTexture===!0&&st.getTransfer(y.map.colorSpace)===bt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===dt,flipSided:y.side===Kt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:ue&&y.extensions.derivatives===!0,extensionFragDepth:ue&&y.extensions.fragDepth===!0,extensionDrawBuffers:ue&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:ue&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ue&&y.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function p(y){let M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(let D in y.defines)M.push(D),M.push(y.defines[D]);return y.isRawShaderMaterial===!1&&(v(M,y),x(M,y),M.push(s.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function v(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function x(y,M){o.disableAll(),M.isWebGL2&&o.enable(0),M.supportsVertexTextures&&o.enable(1),M.instancing&&o.enable(2),M.instancingColor&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),y.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.skinning&&o.enable(4),M.morphTargets&&o.enable(5),M.morphNormals&&o.enable(6),M.morphColors&&o.enable(7),M.premultipliedAlpha&&o.enable(8),M.shadowMapEnabled&&o.enable(9),M.useLegacyLights&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),y.push(o.mask)}function _(y){let M=g[y.type],D;if(M){let L=ei[M];D=R0.clone(L.uniforms)}else D=y.uniforms;return D}function S(y,M){let D;for(let L=0,k=l.length;L<k;L++){let P=l[L];if(P.cacheKey===M){D=P,++D.usedTimes;break}}return D===void 0&&(D=new Ox(s,M,y,r),l.push(D)),D}function w(y){if(--y.usedTimes===0){let M=l.indexOf(y);l[M]=l[l.length-1],l.pop(),y.destroy()}}function T(y){c.remove(y)}function I(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:S,releaseProgram:w,releaseShaderCache:T,programs:l,dispose:I}}function Hx(){let s=new WeakMap;function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function t(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function zx(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Cd(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Pd(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(u,d,f,g,b,m){let p=s[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:b,group:m},s[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=b,p.group=m),e++,p}function o(u,d,f,g,b,m){let p=a(u,d,f,g,b,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function c(u,d,f,g,b,m){let p=a(u,d,f,g,b,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function l(u,d){t.length>1&&t.sort(u||zx),n.length>1&&n.sort(d||Cd),i.length>1&&i.sort(d||Cd)}function h(){for(let u=e,d=s.length;u<d;u++){let f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:c,finish:h,sort:l}}function Gx(){let s=new WeakMap;function e(n,i){let r=s.get(n),a;return r===void 0?(a=new Pd,s.set(n,[a])):i>=r.length?(a=new Pd,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function Vx(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new E,color:new Z};break;case"SpotLight":t={position:new E,direction:new E,color:new Z,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new E,color:new Z,distance:0,decay:0};break;case"HemisphereLight":t={direction:new E,skyColor:new Z,groundColor:new Z};break;case"RectAreaLight":t={color:new Z,position:new E,halfWidth:new E,halfHeight:new E};break}return s[e.id]=t,t}}}function Wx(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var qx=0;function Xx(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function jx(s,e){let t=new Vx,n=Wx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new E);let r=new E,a=new be,o=new be;function c(h,u){let d=0,f=0,g=0;for(let L=0;L<9;L++)i.probe[L].set(0,0,0);let b=0,m=0,p=0,v=0,x=0,_=0,S=0,w=0,T=0,I=0,y=0;h.sort(Xx);let M=u===!0?Math.PI:1;for(let L=0,k=h.length;L<k;L++){let P=h[L],F=P.color,U=P.intensity,B=P.distance,O=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=F.r*U*M,f+=F.g*U*M,g+=F.b*U*M;else if(P.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(P.sh.coefficients[z],U);y++}else if(P.isDirectionalLight){let z=t.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity*M),P.castShadow){let Y=P.shadow,K=n.get(P);K.shadowBias=Y.bias,K.shadowNormalBias=Y.normalBias,K.shadowRadius=Y.radius,K.shadowMapSize=Y.mapSize,i.directionalShadow[b]=K,i.directionalShadowMap[b]=O,i.directionalShadowMatrix[b]=P.shadow.matrix,_++}i.directional[b]=z,b++}else if(P.isSpotLight){let z=t.get(P);z.position.setFromMatrixPosition(P.matrixWorld),z.color.copy(F).multiplyScalar(U*M),z.distance=B,z.coneCos=Math.cos(P.angle),z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),z.decay=P.decay,i.spot[p]=z;let Y=P.shadow;if(P.map&&(i.spotLightMap[T]=P.map,T++,Y.updateMatrices(P),P.castShadow&&I++),i.spotLightMatrix[p]=Y.matrix,P.castShadow){let K=n.get(P);K.shadowBias=Y.bias,K.shadowNormalBias=Y.normalBias,K.shadowRadius=Y.radius,K.shadowMapSize=Y.mapSize,i.spotShadow[p]=K,i.spotShadowMap[p]=O,w++}p++}else if(P.isRectAreaLight){let z=t.get(P);z.color.copy(F).multiplyScalar(U),z.halfWidth.set(P.width*.5,0,0),z.halfHeight.set(0,P.height*.5,0),i.rectArea[v]=z,v++}else if(P.isPointLight){let z=t.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity*M),z.distance=P.distance,z.decay=P.decay,P.castShadow){let Y=P.shadow,K=n.get(P);K.shadowBias=Y.bias,K.shadowNormalBias=Y.normalBias,K.shadowRadius=Y.radius,K.shadowMapSize=Y.mapSize,K.shadowCameraNear=Y.camera.near,K.shadowCameraFar=Y.camera.far,i.pointShadow[m]=K,i.pointShadowMap[m]=O,i.pointShadowMatrix[m]=P.shadow.matrix,S++}i.point[m]=z,m++}else if(P.isHemisphereLight){let z=t.get(P);z.skyColor.copy(P.color).multiplyScalar(U*M),z.groundColor.copy(P.groundColor).multiplyScalar(U*M),i.hemi[x]=z,x++}}v>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_FLOAT_1,i.rectAreaLTC2=ae.LTC_FLOAT_2):(i.rectAreaLTC1=ae.LTC_HALF_1,i.rectAreaLTC2=ae.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_FLOAT_1,i.rectAreaLTC2=ae.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_HALF_1,i.rectAreaLTC2=ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=g;let D=i.hash;(D.directionalLength!==b||D.pointLength!==m||D.spotLength!==p||D.rectAreaLength!==v||D.hemiLength!==x||D.numDirectionalShadows!==_||D.numPointShadows!==S||D.numSpotShadows!==w||D.numSpotMaps!==T||D.numLightProbes!==y)&&(i.directional.length=b,i.spot.length=p,i.rectArea.length=v,i.point.length=m,i.hemi.length=x,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=w+T-I,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=y,D.directionalLength=b,D.pointLength=m,D.spotLength=p,D.rectAreaLength=v,D.hemiLength=x,D.numDirectionalShadows=_,D.numPointShadows=S,D.numSpotShadows=w,D.numSpotMaps=T,D.numLightProbes=y,i.version=qx++)}function l(h,u){let d=0,f=0,g=0,b=0,m=0,p=u.matrixWorldInverse;for(let v=0,x=h.length;v<x;v++){let _=h[v];if(_.isDirectionalLight){let S=i.directional[d];S.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),d++}else if(_.isSpotLight){let S=i.spot[g];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),g++}else if(_.isRectAreaLight){let S=i.rectArea[b];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(p),o.identity(),a.copy(_.matrixWorld),a.premultiply(p),o.extractRotation(a),S.halfWidth.set(_.width*.5,0,0),S.halfHeight.set(0,_.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),b++}else if(_.isPointLight){let S=i.point[f];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(p),f++}else if(_.isHemisphereLight){let S=i.hemi[m];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(p),m++}}}return{setup:c,setupView:l,state:i}}function Ld(s,e){let t=new jx(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function a(u){n.push(u)}function o(u){i.push(u)}function c(u){t.setup(n,u)}function l(u){t.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function Yx(s,e){let t=new WeakMap;function n(r,a=0){let o=t.get(r),c;return o===void 0?(c=new Ld(s,e),t.set(r,[c])):a>=o.length?(c=new Ld(s,e),o.push(c)):c=o[a],c}function i(){t=new WeakMap}return{get:n,dispose:i}}var Yr=class extends Qt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},gl=class extends Qt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Kx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Jx=`uniform sampler2D shadow_pass;
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
}`;function Zx(s,e,t){let n=new jr,i=new oe,r=new oe,a=new Ke,o=new Yr({depthPacking:Wl}),c=new gl,l={},h=t.maxTextureSize,u={[si]:Kt,[Kt]:si,[dt]:dt},d=new St({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:Kx,fragmentShader:Jx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Oe;g.setAttribute("position",new ve(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Ne(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ef;let p=this.type;this.render=function(w,T,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;let y=s.getRenderTarget(),M=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),L=s.state;L.setBlending(Ui),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let k=p!==mi&&this.type===mi,P=p===mi&&this.type!==mi;for(let F=0,U=w.length;F<U;F++){let B=w[F],O=B.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;i.copy(O.mapSize);let z=O.getFrameExtents();if(i.multiply(z),r.copy(O.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/z.x),i.x=r.x*z.x,O.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/z.y),i.y=r.y*z.y,O.mapSize.y=r.y)),O.map===null||k===!0||P===!0){let K=this.type!==mi?{minFilter:Ft,magFilter:Ft}:{};O.map!==null&&O.map.dispose(),O.map=new sn(i.x,i.y,K),O.map.texture.name=B.name+".shadowMap",O.camera.updateProjectionMatrix()}s.setRenderTarget(O.map),s.clear();let Y=O.getViewportCount();for(let K=0;K<Y;K++){let Q=O.getViewport(K);a.set(r.x*Q.x,r.y*Q.y,r.x*Q.z,r.y*Q.w),L.viewport(a),O.updateMatrices(B,K),n=O.getFrustum(),_(T,I,O.camera,B,this.type)}O.isPointLightShadow!==!0&&this.type===mi&&v(O,I),O.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(y,M,D)};function v(w,T){let I=e.update(b);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new sn(i.x,i.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(T,null,I,d,b,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(T,null,I,f,b,null)}function x(w,T,I,y){let M=null,D=I.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)M=D;else if(M=I.isPointLight===!0?c:o,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let L=M.uuid,k=T.uuid,P=l[L];P===void 0&&(P={},l[L]=P);let F=P[k];F===void 0&&(F=M.clone(),P[k]=F,T.addEventListener("dispose",S)),M=F}if(M.visible=T.visible,M.wireframe=T.wireframe,y===mi?M.side=T.shadowSide!==null?T.shadowSide:T.side:M.side=T.shadowSide!==null?T.shadowSide:u[T.side],M.alphaMap=T.alphaMap,M.alphaTest=T.alphaTest,M.map=T.map,M.clipShadows=T.clipShadows,M.clippingPlanes=T.clippingPlanes,M.clipIntersection=T.clipIntersection,M.displacementMap=T.displacementMap,M.displacementScale=T.displacementScale,M.displacementBias=T.displacementBias,M.wireframeLinewidth=T.wireframeLinewidth,M.linewidth=T.linewidth,I.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let L=s.properties.get(M);L.light=I}return M}function _(w,T,I,y,M){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===mi)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,w.matrixWorld);let k=e.update(w),P=w.material;if(Array.isArray(P)){let F=k.groups;for(let U=0,B=F.length;U<B;U++){let O=F[U],z=P[O.materialIndex];if(z&&z.visible){let Y=x(w,z,y,M);w.onBeforeShadow(s,w,T,I,k,Y,O),s.renderBufferDirect(I,null,k,Y,w,O),w.onAfterShadow(s,w,T,I,k,Y,O)}}}else if(P.visible){let F=x(w,P,y,M);w.onBeforeShadow(s,w,T,I,k,F,null),s.renderBufferDirect(I,null,k,F,w,null),w.onAfterShadow(s,w,T,I,k,F,null)}}let L=w.children;for(let k=0,P=L.length;k<P;k++)_(L[k],T,I,y,M)}function S(w){w.target.removeEventListener("dispose",S);for(let I in l){let y=l[I],M=w.target.uuid;M in y&&(y[M].dispose(),delete y[M])}}}function Qx(s,e,t){let n=t.isWebGL2;function i(){let N=!1,he=new Ke,ue=null,Ce=new Ke(0,0,0,0);return{setMask:function(Se){ue!==Se&&!N&&(s.colorMask(Se,Se,Se,Se),ue=Se)},setLocked:function(Se){N=Se},setClear:function(Se,pt,mt,Gt,dn){dn===!0&&(Se*=Gt,pt*=Gt,mt*=Gt),he.set(Se,pt,mt,Gt),Ce.equals(he)===!1&&(s.clearColor(Se,pt,mt,Gt),Ce.copy(he))},reset:function(){N=!1,ue=null,Ce.set(-1,0,0,0)}}}function r(){let N=!1,he=null,ue=null,Ce=null;return{setTest:function(Se){Se?ze(s.DEPTH_TEST):Re(s.DEPTH_TEST)},setMask:function(Se){he!==Se&&!N&&(s.depthMask(Se),he=Se)},setFunc:function(Se){if(ue!==Se){switch(Se){case vm:s.depthFunc(s.NEVER);break;case xm:s.depthFunc(s.ALWAYS);break;case _m:s.depthFunc(s.LESS);break;case to:s.depthFunc(s.LEQUAL);break;case ym:s.depthFunc(s.EQUAL);break;case Mm:s.depthFunc(s.GEQUAL);break;case Em:s.depthFunc(s.GREATER);break;case wm:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ue=Se}},setLocked:function(Se){N=Se},setClear:function(Se){Ce!==Se&&(s.clearDepth(Se),Ce=Se)},reset:function(){N=!1,he=null,ue=null,Ce=null}}}function a(){let N=!1,he=null,ue=null,Ce=null,Se=null,pt=null,mt=null,Gt=null,dn=null;return{setTest:function(gt){N||(gt?ze(s.STENCIL_TEST):Re(s.STENCIL_TEST))},setMask:function(gt){he!==gt&&!N&&(s.stencilMask(gt),he=gt)},setFunc:function(gt,fn,$n){(ue!==gt||Ce!==fn||Se!==$n)&&(s.stencilFunc(gt,fn,$n),ue=gt,Ce=fn,Se=$n)},setOp:function(gt,fn,$n){(pt!==gt||mt!==fn||Gt!==$n)&&(s.stencilOp(gt,fn,$n),pt=gt,mt=fn,Gt=$n)},setLocked:function(gt){N=gt},setClear:function(gt){dn!==gt&&(s.clearStencil(gt),dn=gt)},reset:function(){N=!1,he=null,ue=null,Ce=null,Se=null,pt=null,mt=null,Gt=null,dn=null}}}let o=new i,c=new r,l=new a,h=new WeakMap,u=new WeakMap,d={},f={},g=new WeakMap,b=[],m=null,p=!1,v=null,x=null,_=null,S=null,w=null,T=null,I=null,y=new Z(0,0,0),M=0,D=!1,L=null,k=null,P=null,F=null,U=null,B=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,z=0,Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(Y)[1]),O=z>=1):Y.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),O=z>=2);let K=null,Q={},G=s.getParameter(s.SCISSOR_BOX),J=s.getParameter(s.VIEWPORT),$=new Ke().fromArray(G),le=new Ke().fromArray(J);function ge(N,he,ue,Ce){let Se=new Uint8Array(4),pt=s.createTexture();s.bindTexture(N,pt),s.texParameteri(N,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(N,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let mt=0;mt<ue;mt++)n&&(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)?s.texImage3D(he,0,s.RGBA,1,1,Ce,0,s.RGBA,s.UNSIGNED_BYTE,Se):s.texImage2D(he+mt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Se);return pt}let Be={};Be[s.TEXTURE_2D]=ge(s.TEXTURE_2D,s.TEXTURE_2D,1),Be[s.TEXTURE_CUBE_MAP]=ge(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Be[s.TEXTURE_2D_ARRAY]=ge(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Be[s.TEXTURE_3D]=ge(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),ze(s.DEPTH_TEST),c.setFunc(to),Ve(!1),C(mu),ze(s.CULL_FACE),xe(Ui);function ze(N){d[N]!==!0&&(s.enable(N),d[N]=!0)}function Re(N){d[N]!==!1&&(s.disable(N),d[N]=!1)}function nt(N,he){return f[N]!==he?(s.bindFramebuffer(N,he),f[N]=he,n&&(N===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=he),N===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=he)),!0):!1}function V(N,he){let ue=b,Ce=!1;if(N)if(ue=g.get(he),ue===void 0&&(ue=[],g.set(he,ue)),N.isWebGLMultipleRenderTargets){let Se=N.texture;if(ue.length!==Se.length||ue[0]!==s.COLOR_ATTACHMENT0){for(let pt=0,mt=Se.length;pt<mt;pt++)ue[pt]=s.COLOR_ATTACHMENT0+pt;ue.length=Se.length,Ce=!0}}else ue[0]!==s.COLOR_ATTACHMENT0&&(ue[0]=s.COLOR_ATTACHMENT0,Ce=!0);else ue[0]!==s.BACK&&(ue[0]=s.BACK,Ce=!0);Ce&&(t.isWebGL2?s.drawBuffers(ue):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ue))}function un(N){return m!==N?(s.useProgram(N),m=N,!0):!1}let we={[as]:s.FUNC_ADD,[im]:s.FUNC_SUBTRACT,[sm]:s.FUNC_REVERSE_SUBTRACT};if(n)we[vu]=s.MIN,we[xu]=s.MAX;else{let N=e.get("EXT_blend_minmax");N!==null&&(we[vu]=N.MIN_EXT,we[xu]=N.MAX_EXT)}let Fe={[rm]:s.ZERO,[am]:s.ONE,[om]:s.SRC_COLOR,[$c]:s.SRC_ALPHA,[fm]:s.SRC_ALPHA_SATURATE,[um]:s.DST_COLOR,[lm]:s.DST_ALPHA,[cm]:s.ONE_MINUS_SRC_COLOR,[el]:s.ONE_MINUS_SRC_ALPHA,[dm]:s.ONE_MINUS_DST_COLOR,[hm]:s.ONE_MINUS_DST_ALPHA,[pm]:s.CONSTANT_COLOR,[mm]:s.ONE_MINUS_CONSTANT_COLOR,[gm]:s.CONSTANT_ALPHA,[bm]:s.ONE_MINUS_CONSTANT_ALPHA};function xe(N,he,ue,Ce,Se,pt,mt,Gt,dn,gt){if(N===Ui){p===!0&&(Re(s.BLEND),p=!1);return}if(p===!1&&(ze(s.BLEND),p=!0),N!==nm){if(N!==v||gt!==D){if((x!==as||w!==as)&&(s.blendEquation(s.FUNC_ADD),x=as,w=as),gt)switch(N){case Ys:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Jt:s.blendFunc(s.ONE,s.ONE);break;case gu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case bu:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Ys:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Jt:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case gu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case bu:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}_=null,S=null,T=null,I=null,y.set(0,0,0),M=0,v=N,D=gt}return}Se=Se||he,pt=pt||ue,mt=mt||Ce,(he!==x||Se!==w)&&(s.blendEquationSeparate(we[he],we[Se]),x=he,w=Se),(ue!==_||Ce!==S||pt!==T||mt!==I)&&(s.blendFuncSeparate(Fe[ue],Fe[Ce],Fe[pt],Fe[mt]),_=ue,S=Ce,T=pt,I=mt),(Gt.equals(y)===!1||dn!==M)&&(s.blendColor(Gt.r,Gt.g,Gt.b,dn),y.copy(Gt),M=dn),v=N,D=!1}function xt(N,he){N.side===dt?Re(s.CULL_FACE):ze(s.CULL_FACE);let ue=N.side===Kt;he&&(ue=!ue),Ve(ue),N.blending===Ys&&N.transparent===!1?xe(Ui):xe(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),c.setFunc(N.depthFunc),c.setTest(N.depthTest),c.setMask(N.depthWrite),o.setMask(N.colorWrite);let Ce=N.stencilWrite;l.setTest(Ce),Ce&&(l.setMask(N.stencilWriteMask),l.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),l.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),q(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ze(s.SAMPLE_ALPHA_TO_COVERAGE):Re(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(N){L!==N&&(N?s.frontFace(s.CW):s.frontFace(s.CCW),L=N)}function C(N){N!==em?(ze(s.CULL_FACE),N!==k&&(N===mu?s.cullFace(s.BACK):N===tm?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Re(s.CULL_FACE),k=N}function A(N){N!==P&&(O&&s.lineWidth(N),P=N)}function q(N,he,ue){N?(ze(s.POLYGON_OFFSET_FILL),(F!==he||U!==ue)&&(s.polygonOffset(he,ue),F=he,U=ue)):Re(s.POLYGON_OFFSET_FILL)}function ie(N){N?ze(s.SCISSOR_TEST):Re(s.SCISSOR_TEST)}function ne(N){N===void 0&&(N=s.TEXTURE0+B-1),K!==N&&(s.activeTexture(N),K=N)}function se(N,he,ue){ue===void 0&&(K===null?ue=s.TEXTURE0+B-1:ue=K);let Ce=Q[ue];Ce===void 0&&(Ce={type:void 0,texture:void 0},Q[ue]=Ce),(Ce.type!==N||Ce.texture!==he)&&(K!==ue&&(s.activeTexture(ue),K=ue),s.bindTexture(N,he||Be[N]),Ce.type=N,Ce.texture=he)}function _e(){let N=Q[K];N!==void 0&&N.type!==void 0&&(s.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function de(){try{s.compressedTexImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function pe(){try{s.compressedTexImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ae(){try{s.texSubImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function We(){try{s.texSubImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function te(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ct(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Qe(){try{s.texStorage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function De(){try{s.texStorage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ee(){try{s.texImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function me(){try{s.texImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ge(N){$.equals(N)===!1&&(s.scissor(N.x,N.y,N.z,N.w),$.copy(N))}function ot(N){le.equals(N)===!1&&(s.viewport(N.x,N.y,N.z,N.w),le.copy(N))}function Et(N,he){let ue=u.get(he);ue===void 0&&(ue=new WeakMap,u.set(he,ue));let Ce=ue.get(N);Ce===void 0&&(Ce=s.getUniformBlockIndex(he,N.name),ue.set(N,Ce))}function Xe(N,he){let Ce=u.get(he).get(N);h.get(he)!==Ce&&(s.uniformBlockBinding(he,Ce,N.__bindingPointIndex),h.set(he,Ce))}function re(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},K=null,Q={},f={},g=new WeakMap,b=[],m=null,p=!1,v=null,x=null,_=null,S=null,w=null,T=null,I=null,y=new Z(0,0,0),M=0,D=!1,L=null,k=null,P=null,F=null,U=null,$.set(0,0,s.canvas.width,s.canvas.height),le.set(0,0,s.canvas.width,s.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:ze,disable:Re,bindFramebuffer:nt,drawBuffers:V,useProgram:un,setBlending:xe,setMaterial:xt,setFlipSided:Ve,setCullFace:C,setLineWidth:A,setPolygonOffset:q,setScissorTest:ie,activeTexture:ne,bindTexture:se,unbindTexture:_e,compressedTexImage2D:de,compressedTexImage3D:pe,texImage2D:Ee,texImage3D:me,updateUBOMapping:Et,uniformBlockBinding:Xe,texStorage2D:Qe,texStorage3D:De,texSubImage2D:Ae,texSubImage3D:We,compressedTexSubImage2D:te,compressedTexSubImage3D:ct,scissor:Ge,viewport:ot,reset:re}}function $x(s,e,t,n,i,r,a){let o=i.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,A){return f?new OffscreenCanvas(C,A):qr("canvas")}function b(C,A,q,ie){let ne=1;if((C.width>ie||C.height>ie)&&(ne=ie/Math.max(C.width,C.height)),ne<1||A===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){let se=A?co:Math.floor,_e=se(ne*C.width),de=se(ne*C.height);u===void 0&&(u=g(_e,de));let pe=q?g(_e,de):u;return pe.width=_e,pe.height=de,pe.getContext("2d").drawImage(C,0,0,_e,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+_e+"x"+de+")."),pe}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function m(C){return rl(C.width)&&rl(C.height)}function p(C){return o?!1:C.wrapS!==An||C.wrapT!==An||C.minFilter!==Ft&&C.minFilter!==qt}function v(C,A){return C.generateMipmaps&&A&&C.minFilter!==Ft&&C.minFilter!==qt}function x(C){s.generateMipmap(C)}function _(C,A,q,ie,ne=!1){if(o===!1)return A;if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let se=A;if(A===s.RED&&(q===s.FLOAT&&(se=s.R32F),q===s.HALF_FLOAT&&(se=s.R16F),q===s.UNSIGNED_BYTE&&(se=s.R8)),A===s.RED_INTEGER&&(q===s.UNSIGNED_BYTE&&(se=s.R8UI),q===s.UNSIGNED_SHORT&&(se=s.R16UI),q===s.UNSIGNED_INT&&(se=s.R32UI),q===s.BYTE&&(se=s.R8I),q===s.SHORT&&(se=s.R16I),q===s.INT&&(se=s.R32I)),A===s.RG&&(q===s.FLOAT&&(se=s.RG32F),q===s.HALF_FLOAT&&(se=s.RG16F),q===s.UNSIGNED_BYTE&&(se=s.RG8)),A===s.RGBA){let _e=ne?so:st.getTransfer(ie);q===s.FLOAT&&(se=s.RGBA32F),q===s.HALF_FLOAT&&(se=s.RGBA16F),q===s.UNSIGNED_BYTE&&(se=_e===bt?s.SRGB8_ALPHA8:s.RGBA8),q===s.UNSIGNED_SHORT_4_4_4_4&&(se=s.RGBA4),q===s.UNSIGNED_SHORT_5_5_5_1&&(se=s.RGB5_A1)}return(se===s.R16F||se===s.R32F||se===s.RG16F||se===s.RG32F||se===s.RGBA16F||se===s.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function S(C,A,q){return v(C,q)===!0||C.isFramebufferTexture&&C.minFilter!==Ft&&C.minFilter!==qt?Math.log2(Math.max(A.width,A.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?A.mipmaps.length:1}function w(C){return C===Ft||C===no||C===kr?s.NEAREST:s.LINEAR}function T(C){let A=C.target;A.removeEventListener("dispose",T),y(A),A.isVideoTexture&&h.delete(A)}function I(C){let A=C.target;A.removeEventListener("dispose",I),D(A)}function y(C){let A=n.get(C);if(A.__webglInit===void 0)return;let q=C.source,ie=d.get(q);if(ie){let ne=ie[A.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&M(C),Object.keys(ie).length===0&&d.delete(q)}n.remove(C)}function M(C){let A=n.get(C);s.deleteTexture(A.__webglTexture);let q=C.source,ie=d.get(q);delete ie[A.__cacheKey],a.memory.textures--}function D(C){let A=C.texture,q=n.get(C),ie=n.get(A);if(ie.__webglTexture!==void 0&&(s.deleteTexture(ie.__webglTexture),a.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(q.__webglFramebuffer[ne]))for(let se=0;se<q.__webglFramebuffer[ne].length;se++)s.deleteFramebuffer(q.__webglFramebuffer[ne][se]);else s.deleteFramebuffer(q.__webglFramebuffer[ne]);q.__webglDepthbuffer&&s.deleteRenderbuffer(q.__webglDepthbuffer[ne])}else{if(Array.isArray(q.__webglFramebuffer))for(let ne=0;ne<q.__webglFramebuffer.length;ne++)s.deleteFramebuffer(q.__webglFramebuffer[ne]);else s.deleteFramebuffer(q.__webglFramebuffer);if(q.__webglDepthbuffer&&s.deleteRenderbuffer(q.__webglDepthbuffer),q.__webglMultisampledFramebuffer&&s.deleteFramebuffer(q.__webglMultisampledFramebuffer),q.__webglColorRenderbuffer)for(let ne=0;ne<q.__webglColorRenderbuffer.length;ne++)q.__webglColorRenderbuffer[ne]&&s.deleteRenderbuffer(q.__webglColorRenderbuffer[ne]);q.__webglDepthRenderbuffer&&s.deleteRenderbuffer(q.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let ne=0,se=A.length;ne<se;ne++){let _e=n.get(A[ne]);_e.__webglTexture&&(s.deleteTexture(_e.__webglTexture),a.memory.textures--),n.remove(A[ne])}n.remove(A),n.remove(C)}let L=0;function k(){L=0}function P(){let C=L;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),L+=1,C}function F(C){let A=[];return A.push(C.wrapS),A.push(C.wrapT),A.push(C.wrapR||0),A.push(C.magFilter),A.push(C.minFilter),A.push(C.anisotropy),A.push(C.internalFormat),A.push(C.format),A.push(C.type),A.push(C.generateMipmaps),A.push(C.premultiplyAlpha),A.push(C.flipY),A.push(C.unpackAlignment),A.push(C.colorSpace),A.join()}function U(C,A){let q=n.get(C);if(C.isVideoTexture&&xt(C),C.isRenderTargetTexture===!1&&C.version>0&&q.__version!==C.version){let ie=C.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(q,C,A);return}}t.bindTexture(s.TEXTURE_2D,q.__webglTexture,s.TEXTURE0+A)}function B(C,A){let q=n.get(C);if(C.version>0&&q.__version!==C.version){$(q,C,A);return}t.bindTexture(s.TEXTURE_2D_ARRAY,q.__webglTexture,s.TEXTURE0+A)}function O(C,A){let q=n.get(C);if(C.version>0&&q.__version!==C.version){$(q,C,A);return}t.bindTexture(s.TEXTURE_3D,q.__webglTexture,s.TEXTURE0+A)}function z(C,A){let q=n.get(C);if(C.version>0&&q.__version!==C.version){le(q,C,A);return}t.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture,s.TEXTURE0+A)}let Y={[jn]:s.REPEAT,[An]:s.CLAMP_TO_EDGE,[Wr]:s.MIRRORED_REPEAT},K={[Ft]:s.NEAREST,[no]:s.NEAREST_MIPMAP_NEAREST,[kr]:s.NEAREST_MIPMAP_LINEAR,[qt]:s.LINEAR,[kl]:s.LINEAR_MIPMAP_NEAREST,[Oi]:s.LINEAR_MIPMAP_LINEAR},Q={[qm]:s.NEVER,[Zm]:s.ALWAYS,[Xm]:s.LESS,[df]:s.LEQUAL,[jm]:s.EQUAL,[Jm]:s.GEQUAL,[Ym]:s.GREATER,[Km]:s.NOTEQUAL};function G(C,A,q){if(q?(s.texParameteri(C,s.TEXTURE_WRAP_S,Y[A.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,Y[A.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,Y[A.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,K[A.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,K[A.minFilter])):(s.texParameteri(C,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(C,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(A.wrapS!==An||A.wrapT!==An)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(C,s.TEXTURE_MAG_FILTER,w(A.magFilter)),s.texParameteri(C,s.TEXTURE_MIN_FILTER,w(A.minFilter)),A.minFilter!==Ft&&A.minFilter!==qt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,Q[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let ie=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===Ft||A.minFilter!==kr&&A.minFilter!==Oi||A.type===gi&&e.has("OES_texture_float_linear")===!1||o===!1&&A.type===Un&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||n.get(A).__currentAnisotropy)&&(s.texParameterf(C,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,i.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy)}}function J(C,A){let q=!1;C.__webglInit===void 0&&(C.__webglInit=!0,A.addEventListener("dispose",T));let ie=A.source,ne=d.get(ie);ne===void 0&&(ne={},d.set(ie,ne));let se=F(A);if(se!==C.__cacheKey){ne[se]===void 0&&(ne[se]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,q=!0),ne[se].usedTimes++;let _e=ne[C.__cacheKey];_e!==void 0&&(ne[C.__cacheKey].usedTimes--,_e.usedTimes===0&&M(A)),C.__cacheKey=se,C.__webglTexture=ne[se].texture}return q}function $(C,A,q){let ie=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ie=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ie=s.TEXTURE_3D);let ne=J(C,A),se=A.source;t.bindTexture(ie,C.__webglTexture,s.TEXTURE0+q);let _e=n.get(se);if(se.version!==_e.__version||ne===!0){t.activeTexture(s.TEXTURE0+q);let de=st.getPrimaries(st.workingColorSpace),pe=A.colorSpace===vn?null:st.getPrimaries(A.colorSpace),Ae=A.colorSpace===vn||de===pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let We=p(A)&&m(A.image)===!1,te=b(A.image,We,!1,i.maxTextureSize);te=Ve(A,te);let ct=m(te)||o,Qe=r.convert(A.format,A.colorSpace),De=r.convert(A.type),Ee=_(A.internalFormat,Qe,De,A.colorSpace,A.isVideoTexture);G(ie,A,ct);let me,Ge=A.mipmaps,ot=o&&A.isVideoTexture!==!0&&Ee!==lf,Et=_e.__version===void 0||ne===!0,Xe=S(A,te,ct);if(A.isDepthTexture)Ee=s.DEPTH_COMPONENT,o?A.type===gi?Ee=s.DEPTH_COMPONENT32F:A.type===ni?Ee=s.DEPTH_COMPONENT24:A.type===ls?Ee=s.DEPTH24_STENCIL8:Ee=s.DEPTH_COMPONENT16:A.type===gi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===hs&&Ee===s.DEPTH_COMPONENT&&A.type!==Hl&&A.type!==ni&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=ni,De=r.convert(A.type)),A.format===$s&&Ee===s.DEPTH_COMPONENT&&(Ee=s.DEPTH_STENCIL,A.type!==ls&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=ls,De=r.convert(A.type))),Et&&(ot?t.texStorage2D(s.TEXTURE_2D,1,Ee,te.width,te.height):t.texImage2D(s.TEXTURE_2D,0,Ee,te.width,te.height,0,Qe,De,null));else if(A.isDataTexture)if(Ge.length>0&&ct){ot&&Et&&t.texStorage2D(s.TEXTURE_2D,Xe,Ee,Ge[0].width,Ge[0].height);for(let re=0,N=Ge.length;re<N;re++)me=Ge[re],ot?t.texSubImage2D(s.TEXTURE_2D,re,0,0,me.width,me.height,Qe,De,me.data):t.texImage2D(s.TEXTURE_2D,re,Ee,me.width,me.height,0,Qe,De,me.data);A.generateMipmaps=!1}else ot?(Et&&t.texStorage2D(s.TEXTURE_2D,Xe,Ee,te.width,te.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,te.width,te.height,Qe,De,te.data)):t.texImage2D(s.TEXTURE_2D,0,Ee,te.width,te.height,0,Qe,De,te.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){ot&&Et&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Xe,Ee,Ge[0].width,Ge[0].height,te.depth);for(let re=0,N=Ge.length;re<N;re++)me=Ge[re],A.format!==Fn?Qe!==null?ot?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,re,0,0,0,me.width,me.height,te.depth,Qe,me.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,re,Ee,me.width,me.height,te.depth,0,me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ot?t.texSubImage3D(s.TEXTURE_2D_ARRAY,re,0,0,0,me.width,me.height,te.depth,Qe,De,me.data):t.texImage3D(s.TEXTURE_2D_ARRAY,re,Ee,me.width,me.height,te.depth,0,Qe,De,me.data)}else{ot&&Et&&t.texStorage2D(s.TEXTURE_2D,Xe,Ee,Ge[0].width,Ge[0].height);for(let re=0,N=Ge.length;re<N;re++)me=Ge[re],A.format!==Fn?Qe!==null?ot?t.compressedTexSubImage2D(s.TEXTURE_2D,re,0,0,me.width,me.height,Qe,me.data):t.compressedTexImage2D(s.TEXTURE_2D,re,Ee,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ot?t.texSubImage2D(s.TEXTURE_2D,re,0,0,me.width,me.height,Qe,De,me.data):t.texImage2D(s.TEXTURE_2D,re,Ee,me.width,me.height,0,Qe,De,me.data)}else if(A.isDataArrayTexture)ot?(Et&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Xe,Ee,te.width,te.height,te.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,Qe,De,te.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ee,te.width,te.height,te.depth,0,Qe,De,te.data);else if(A.isData3DTexture)ot?(Et&&t.texStorage3D(s.TEXTURE_3D,Xe,Ee,te.width,te.height,te.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,Qe,De,te.data)):t.texImage3D(s.TEXTURE_3D,0,Ee,te.width,te.height,te.depth,0,Qe,De,te.data);else if(A.isFramebufferTexture){if(Et)if(ot)t.texStorage2D(s.TEXTURE_2D,Xe,Ee,te.width,te.height);else{let re=te.width,N=te.height;for(let he=0;he<Xe;he++)t.texImage2D(s.TEXTURE_2D,he,Ee,re,N,0,Qe,De,null),re>>=1,N>>=1}}else if(Ge.length>0&&ct){ot&&Et&&t.texStorage2D(s.TEXTURE_2D,Xe,Ee,Ge[0].width,Ge[0].height);for(let re=0,N=Ge.length;re<N;re++)me=Ge[re],ot?t.texSubImage2D(s.TEXTURE_2D,re,0,0,Qe,De,me):t.texImage2D(s.TEXTURE_2D,re,Ee,Qe,De,me);A.generateMipmaps=!1}else ot?(Et&&t.texStorage2D(s.TEXTURE_2D,Xe,Ee,te.width,te.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,Qe,De,te)):t.texImage2D(s.TEXTURE_2D,0,Ee,Qe,De,te);v(A,ct)&&x(ie),_e.__version=se.version,A.onUpdate&&A.onUpdate(A)}C.__version=A.version}function le(C,A,q){if(A.image.length!==6)return;let ie=J(C,A),ne=A.source;t.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+q);let se=n.get(ne);if(ne.version!==se.__version||ie===!0){t.activeTexture(s.TEXTURE0+q);let _e=st.getPrimaries(st.workingColorSpace),de=A.colorSpace===vn?null:st.getPrimaries(A.colorSpace),pe=A.colorSpace===vn||_e===de?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);let Ae=A.isCompressedTexture||A.image[0].isCompressedTexture,We=A.image[0]&&A.image[0].isDataTexture,te=[];for(let re=0;re<6;re++)!Ae&&!We?te[re]=b(A.image[re],!1,!0,i.maxCubemapSize):te[re]=We?A.image[re].image:A.image[re],te[re]=Ve(A,te[re]);let ct=te[0],Qe=m(ct)||o,De=r.convert(A.format,A.colorSpace),Ee=r.convert(A.type),me=_(A.internalFormat,De,Ee,A.colorSpace),Ge=o&&A.isVideoTexture!==!0,ot=se.__version===void 0||ie===!0,Et=S(A,ct,Qe);G(s.TEXTURE_CUBE_MAP,A,Qe);let Xe;if(Ae){Ge&&ot&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Et,me,ct.width,ct.height);for(let re=0;re<6;re++){Xe=te[re].mipmaps;for(let N=0;N<Xe.length;N++){let he=Xe[N];A.format!==Fn?De!==null?Ge?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,N,0,0,he.width,he.height,De,he.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,N,me,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,N,0,0,he.width,he.height,De,Ee,he.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,N,me,he.width,he.height,0,De,Ee,he.data)}}}else{Xe=A.mipmaps,Ge&&ot&&(Xe.length>0&&Et++,t.texStorage2D(s.TEXTURE_CUBE_MAP,Et,me,te[0].width,te[0].height));for(let re=0;re<6;re++)if(We){Ge?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,te[re].width,te[re].height,De,Ee,te[re].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,me,te[re].width,te[re].height,0,De,Ee,te[re].data);for(let N=0;N<Xe.length;N++){let ue=Xe[N].image[re].image;Ge?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,N+1,0,0,ue.width,ue.height,De,Ee,ue.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,N+1,me,ue.width,ue.height,0,De,Ee,ue.data)}}else{Ge?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,De,Ee,te[re]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,me,De,Ee,te[re]);for(let N=0;N<Xe.length;N++){let he=Xe[N];Ge?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,N+1,0,0,De,Ee,he.image[re]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,N+1,me,De,Ee,he.image[re])}}}v(A,Qe)&&x(s.TEXTURE_CUBE_MAP),se.__version=ne.version,A.onUpdate&&A.onUpdate(A)}C.__version=A.version}function ge(C,A,q,ie,ne,se){let _e=r.convert(q.format,q.colorSpace),de=r.convert(q.type),pe=_(q.internalFormat,_e,de,q.colorSpace);if(!n.get(A).__hasExternalTextures){let We=Math.max(1,A.width>>se),te=Math.max(1,A.height>>se);ne===s.TEXTURE_3D||ne===s.TEXTURE_2D_ARRAY?t.texImage3D(ne,se,pe,We,te,A.depth,0,_e,de,null):t.texImage2D(ne,se,pe,We,te,0,_e,de,null)}t.bindFramebuffer(s.FRAMEBUFFER,C),xe(A)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ie,ne,n.get(q).__webglTexture,0,Fe(A)):(ne===s.TEXTURE_2D||ne>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ie,ne,n.get(q).__webglTexture,se),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Be(C,A,q){if(s.bindRenderbuffer(s.RENDERBUFFER,C),A.depthBuffer&&!A.stencilBuffer){let ie=o===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(q||xe(A)){let ne=A.depthTexture;ne&&ne.isDepthTexture&&(ne.type===gi?ie=s.DEPTH_COMPONENT32F:ne.type===ni&&(ie=s.DEPTH_COMPONENT24));let se=Fe(A);xe(A)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,se,ie,A.width,A.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,se,ie,A.width,A.height)}else s.renderbufferStorage(s.RENDERBUFFER,ie,A.width,A.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,C)}else if(A.depthBuffer&&A.stencilBuffer){let ie=Fe(A);q&&xe(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ie,s.DEPTH24_STENCIL8,A.width,A.height):xe(A)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ie,s.DEPTH24_STENCIL8,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,C)}else{let ie=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let ne=0;ne<ie.length;ne++){let se=ie[ne],_e=r.convert(se.format,se.colorSpace),de=r.convert(se.type),pe=_(se.internalFormat,_e,de,se.colorSpace),Ae=Fe(A);q&&xe(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ae,pe,A.width,A.height):xe(A)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ae,pe,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,pe,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ze(C,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,C),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),U(A.depthTexture,0);let ie=n.get(A.depthTexture).__webglTexture,ne=Fe(A);if(A.depthTexture.format===hs)xe(A)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ie,0,ne):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ie,0);else if(A.depthTexture.format===$s)xe(A)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ie,0,ne):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function Re(C){let A=n.get(C),q=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!A.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");ze(A.__webglFramebuffer,C)}else if(q){A.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[ie]),A.__webglDepthbuffer[ie]=s.createRenderbuffer(),Be(A.__webglDepthbuffer[ie],C,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=s.createRenderbuffer(),Be(A.__webglDepthbuffer,C,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function nt(C,A,q){let ie=n.get(C);A!==void 0&&ge(ie.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),q!==void 0&&Re(C)}function V(C){let A=C.texture,q=n.get(C),ie=n.get(A);C.addEventListener("dispose",I),C.isWebGLMultipleRenderTargets!==!0&&(ie.__webglTexture===void 0&&(ie.__webglTexture=s.createTexture()),ie.__version=A.version,a.memory.textures++);let ne=C.isWebGLCubeRenderTarget===!0,se=C.isWebGLMultipleRenderTargets===!0,_e=m(C)||o;if(ne){q.__webglFramebuffer=[];for(let de=0;de<6;de++)if(o&&A.mipmaps&&A.mipmaps.length>0){q.__webglFramebuffer[de]=[];for(let pe=0;pe<A.mipmaps.length;pe++)q.__webglFramebuffer[de][pe]=s.createFramebuffer()}else q.__webglFramebuffer[de]=s.createFramebuffer()}else{if(o&&A.mipmaps&&A.mipmaps.length>0){q.__webglFramebuffer=[];for(let de=0;de<A.mipmaps.length;de++)q.__webglFramebuffer[de]=s.createFramebuffer()}else q.__webglFramebuffer=s.createFramebuffer();if(se)if(i.drawBuffers){let de=C.texture;for(let pe=0,Ae=de.length;pe<Ae;pe++){let We=n.get(de[pe]);We.__webglTexture===void 0&&(We.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&C.samples>0&&xe(C)===!1){let de=se?A:[A];q.__webglMultisampledFramebuffer=s.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let pe=0;pe<de.length;pe++){let Ae=de[pe];q.__webglColorRenderbuffer[pe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,q.__webglColorRenderbuffer[pe]);let We=r.convert(Ae.format,Ae.colorSpace),te=r.convert(Ae.type),ct=_(Ae.internalFormat,We,te,Ae.colorSpace,C.isXRRenderTarget===!0),Qe=Fe(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,Qe,ct,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.RENDERBUFFER,q.__webglColorRenderbuffer[pe])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(q.__webglDepthRenderbuffer=s.createRenderbuffer(),Be(q.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ne){t.bindTexture(s.TEXTURE_CUBE_MAP,ie.__webglTexture),G(s.TEXTURE_CUBE_MAP,A,_e);for(let de=0;de<6;de++)if(o&&A.mipmaps&&A.mipmaps.length>0)for(let pe=0;pe<A.mipmaps.length;pe++)ge(q.__webglFramebuffer[de][pe],C,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+de,pe);else ge(q.__webglFramebuffer[de],C,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);v(A,_e)&&x(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(se){let de=C.texture;for(let pe=0,Ae=de.length;pe<Ae;pe++){let We=de[pe],te=n.get(We);t.bindTexture(s.TEXTURE_2D,te.__webglTexture),G(s.TEXTURE_2D,We,_e),ge(q.__webglFramebuffer,C,We,s.COLOR_ATTACHMENT0+pe,s.TEXTURE_2D,0),v(We,_e)&&x(s.TEXTURE_2D)}t.unbindTexture()}else{let de=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(o?de=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(de,ie.__webglTexture),G(de,A,_e),o&&A.mipmaps&&A.mipmaps.length>0)for(let pe=0;pe<A.mipmaps.length;pe++)ge(q.__webglFramebuffer[pe],C,A,s.COLOR_ATTACHMENT0,de,pe);else ge(q.__webglFramebuffer,C,A,s.COLOR_ATTACHMENT0,de,0);v(A,_e)&&x(de),t.unbindTexture()}C.depthBuffer&&Re(C)}function un(C){let A=m(C)||o,q=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let ie=0,ne=q.length;ie<ne;ie++){let se=q[ie];if(v(se,A)){let _e=C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,de=n.get(se).__webglTexture;t.bindTexture(_e,de),x(_e),t.unbindTexture()}}}function we(C){if(o&&C.samples>0&&xe(C)===!1){let A=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],q=C.width,ie=C.height,ne=s.COLOR_BUFFER_BIT,se=[],_e=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,de=n.get(C),pe=C.isWebGLMultipleRenderTargets===!0;if(pe)for(let Ae=0;Ae<A.length;Ae++)t.bindFramebuffer(s.FRAMEBUFFER,de.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,de.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let Ae=0;Ae<A.length;Ae++){se.push(s.COLOR_ATTACHMENT0+Ae),C.depthBuffer&&se.push(_e);let We=de.__ignoreDepthValues!==void 0?de.__ignoreDepthValues:!1;if(We===!1&&(C.depthBuffer&&(ne|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&(ne|=s.STENCIL_BUFFER_BIT)),pe&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,de.__webglColorRenderbuffer[Ae]),We===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[_e]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[_e])),pe){let te=n.get(A[Ae]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,te,0)}s.blitFramebuffer(0,0,q,ie,0,0,q,ie,ne,s.NEAREST),l&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,se)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),pe)for(let Ae=0;Ae<A.length;Ae++){t.bindFramebuffer(s.FRAMEBUFFER,de.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.RENDERBUFFER,de.__webglColorRenderbuffer[Ae]);let We=n.get(A[Ae]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,de.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.TEXTURE_2D,We,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}}function Fe(C){return Math.min(i.maxSamples,C.samples)}function xe(C){let A=n.get(C);return o&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function xt(C){let A=a.render.frame;h.get(C)!==A&&(h.set(C,A),C.update())}function Ve(C,A){let q=C.colorSpace,ie=C.format,ne=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===sl||q!==Ut&&q!==vn&&(st.getTransfer(q)===bt?o===!1?e.has("EXT_sRGB")===!0&&ie===Fn?(C.format=sl,C.minFilter=qt,C.generateMipmaps=!1):A=lo.sRGBToLinear(A):(ie!==Fn||ne!==ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),A}this.allocateTextureUnit=P,this.resetTextureUnits=k,this.setTexture2D=U,this.setTexture2DArray=B,this.setTexture3D=O,this.setTextureCube=z,this.rebindTextures=nt,this.setupRenderTarget=V,this.updateRenderTargetMipmap=un,this.updateMultisampleRenderTarget=we,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=xe}function e_(s,e,t){let n=t.isWebGL2;function i(r,a=vn){let o,c=st.getTransfer(a);if(r===ii)return s.UNSIGNED_BYTE;if(r===sf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===rf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Dm)return s.BYTE;if(r===Fm)return s.SHORT;if(r===Hl)return s.UNSIGNED_SHORT;if(r===nf)return s.INT;if(r===ni)return s.UNSIGNED_INT;if(r===gi)return s.FLOAT;if(r===Un)return n?s.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Um)return s.ALPHA;if(r===Fn)return s.RGBA;if(r===Nm)return s.LUMINANCE;if(r===Om)return s.LUMINANCE_ALPHA;if(r===hs)return s.DEPTH_COMPONENT;if(r===$s)return s.DEPTH_STENCIL;if(r===sl)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Bm)return s.RED;if(r===af)return s.RED_INTEGER;if(r===km)return s.RG;if(r===of)return s.RG_INTEGER;if(r===cf)return s.RGBA_INTEGER;if(r===xc||r===_c||r===yc||r===Mc)if(c===bt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===xc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===_c)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===yc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Mc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===xc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===_c)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===yc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Mc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===yu||r===Mu||r===Eu||r===wu)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===yu)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Mu)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Eu)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===wu)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===lf)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Su||r===Tu)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Su)return c===bt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Tu)return c===bt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Au||r===Ru||r===Cu||r===Pu||r===Lu||r===Iu||r===Du||r===Fu||r===Uu||r===Nu||r===Ou||r===Bu||r===ku||r===Hu)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Au)return c===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ru)return c===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Cu)return c===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Pu)return c===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Lu)return c===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Iu)return c===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Du)return c===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Fu)return c===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Uu)return c===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Nu)return c===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ou)return c===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Bu)return c===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ku)return c===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Hu)return c===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ec||r===zu||r===Gu)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Ec)return c===bt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===zu)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Gu)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Hm||r===Vu||r===Wu||r===qu)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===Ec)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Vu)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Wu)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===qu)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ls?n?s.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}var bl=class extends yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Je=class extends ft{constructor(){super(),this.isGroup=!0,this.type="Group"}},t_={type:"move"},Vr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Je,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Je,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Je,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let b of e.hand.values()){let m=t.getJointPose(b,n),p=this._getHandJoint(l,b);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(t_)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Je;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},vl=class extends vi{constructor(e,t){super();let n=this,i=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null,b=t.getContextAttributes(),m=null,p=null,v=[],x=[],_=new oe,S=null,w=new yt;w.layers.enable(1),w.viewport=new Ke;let T=new yt;T.layers.enable(2),T.viewport=new Ke;let I=[w,T],y=new bl;y.layers.enable(1),y.layers.enable(2);let M=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let J=v[G];return J===void 0&&(J=new Vr,v[G]=J),J.getTargetRaySpace()},this.getControllerGrip=function(G){let J=v[G];return J===void 0&&(J=new Vr,v[G]=J),J.getGripSpace()},this.getHand=function(G){let J=v[G];return J===void 0&&(J=new Vr,v[G]=J),J.getHandSpace()};function L(G){let J=x.indexOf(G.inputSource);if(J===-1)return;let $=v[J];$!==void 0&&($.update(G.inputSource,G.frame,l||a),$.dispatchEvent({type:G.type,data:G.inputSource}))}function k(){i.removeEventListener("select",L),i.removeEventListener("selectstart",L),i.removeEventListener("selectend",L),i.removeEventListener("squeeze",L),i.removeEventListener("squeezestart",L),i.removeEventListener("squeezeend",L),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",P);for(let G=0;G<v.length;G++){let J=x[G];J!==null&&(x[G]=null,v[G].disconnect(J))}M=null,D=null,e.setRenderTarget(m),f=null,d=null,u=null,i=null,p=null,Q.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(_.width,_.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(G){l=G},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(G){if(i=G,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",L),i.addEventListener("selectstart",L),i.addEventListener("selectend",L),i.addEventListener("squeeze",L),i.addEventListener("squeezestart",L),i.addEventListener("squeezeend",L),i.addEventListener("end",k),i.addEventListener("inputsourceschange",P),b.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(_),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let J={antialias:i.renderState.layers===void 0?b.antialias:!0,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,J),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new sn(f.framebufferWidth,f.framebufferHeight,{format:Fn,type:ii,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil})}else{let J=null,$=null,le=null;b.depth&&(le=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=b.stencil?$s:hs,$=b.stencil?ls:ni);let ge={colorFormat:t.RGBA8,depthFormat:le,scaleFactor:r};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(ge),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),p=new sn(d.textureWidth,d.textureHeight,{format:Fn,type:ii,depthTexture:new rr(d.textureWidth,d.textureHeight,$,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0});let Be=e.properties.get(p);Be.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),Q.setContext(i),Q.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function P(G){for(let J=0;J<G.removed.length;J++){let $=G.removed[J],le=x.indexOf($);le>=0&&(x[le]=null,v[le].disconnect($))}for(let J=0;J<G.added.length;J++){let $=G.added[J],le=x.indexOf($);if(le===-1){for(let Be=0;Be<v.length;Be++)if(Be>=x.length){x.push($),le=Be;break}else if(x[Be]===null){x[Be]=$,le=Be;break}if(le===-1)break}let ge=v[le];ge&&ge.connect($)}}let F=new E,U=new E;function B(G,J,$){F.setFromMatrixPosition(J.matrixWorld),U.setFromMatrixPosition($.matrixWorld);let le=F.distanceTo(U),ge=J.projectionMatrix.elements,Be=$.projectionMatrix.elements,ze=ge[14]/(ge[10]-1),Re=ge[14]/(ge[10]+1),nt=(ge[9]+1)/ge[5],V=(ge[9]-1)/ge[5],un=(ge[8]-1)/ge[0],we=(Be[8]+1)/Be[0],Fe=ze*un,xe=ze*we,xt=le/(-un+we),Ve=xt*-un;J.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Ve),G.translateZ(xt),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();let C=ze+xt,A=Re+xt,q=Fe-Ve,ie=xe+(le-Ve),ne=nt*Re/A*C,se=V*Re/A*C;G.projectionMatrix.makePerspective(q,ie,ne,se,C,A),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function O(G,J){J===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(J.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(i===null)return;y.near=T.near=w.near=G.near,y.far=T.far=w.far=G.far,(M!==y.near||D!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),M=y.near,D=y.far);let J=G.parent,$=y.cameras;O(y,J);for(let le=0;le<$.length;le++)O($[le],J);$.length===2?B(y,w,T):y.projectionMatrix.copy(w.projectionMatrix),z(G,y,J)};function z(G,J,$){$===null?G.matrix.copy(J.matrixWorld):(G.matrix.copy($.matrixWorld),G.matrix.invert(),G.matrix.multiply(J.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(J.projectionMatrix),G.projectionMatrixInverse.copy(J.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=tr*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(G){c=G,d!==null&&(d.fixedFoveation=G),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=G)};let Y=null;function K(G,J){if(h=J.getViewerPose(l||a),g=J,h!==null){let $=h.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let le=!1;$.length!==y.cameras.length&&(y.cameras.length=0,le=!0);for(let ge=0;ge<$.length;ge++){let Be=$[ge],ze=null;if(f!==null)ze=f.getViewport(Be);else{let nt=u.getViewSubImage(d,Be);ze=nt.viewport,ge===0&&(e.setRenderTargetTextures(p,nt.colorTexture,d.ignoreDepthValues?void 0:nt.depthStencilTexture),e.setRenderTarget(p))}let Re=I[ge];Re===void 0&&(Re=new yt,Re.layers.enable(ge),Re.viewport=new Ke,I[ge]=Re),Re.matrix.fromArray(Be.transform.matrix),Re.matrix.decompose(Re.position,Re.quaternion,Re.scale),Re.projectionMatrix.fromArray(Be.projectionMatrix),Re.projectionMatrixInverse.copy(Re.projectionMatrix).invert(),Re.viewport.set(ze.x,ze.y,ze.width,ze.height),ge===0&&(y.matrix.copy(Re.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),le===!0&&y.cameras.push(Re)}}for(let $=0;$<v.length;$++){let le=x[$],ge=v[$];le!==null&&ge!==void 0&&ge.update(le,J,l||a)}Y&&Y(G,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}let Q=new gf;Q.setAnimationLoop(K),this.setAnimationLoop=function(G){Y=G},this.dispose=function(){}}};function n_(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,mf(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,v,x,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),b(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,v,x):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Kt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Kt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let v=e.get(p).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let x=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*x,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,v,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Kt&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function b(m,p){let v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function i_(s,e,t,n){let i={},r={},a=[],o=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(v,x){let _=x.program;n.uniformBlockBinding(v,_)}function l(v,x){let _=i[v.id];_===void 0&&(g(v),_=h(v),i[v.id]=_,v.addEventListener("dispose",m));let S=x.program;n.updateUBOMapping(v,S);let w=e.render.frame;r[v.id]!==w&&(d(v),r[v.id]=w)}function h(v){let x=u();v.__bindingPointIndex=x;let _=s.createBuffer(),S=v.__size,w=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,_),s.bufferData(s.UNIFORM_BUFFER,S,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,_),_}function u(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let x=i[v.id],_=v.uniforms,S=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let w=0,T=_.length;w<T;w++){let I=Array.isArray(_[w])?_[w]:[_[w]];for(let y=0,M=I.length;y<M;y++){let D=I[y];if(f(D,w,y,S)===!0){let L=D.__offset,k=Array.isArray(D.value)?D.value:[D.value],P=0;for(let F=0;F<k.length;F++){let U=k[F],B=b(U);typeof U=="number"||typeof U=="boolean"?(D.__data[0]=U,s.bufferSubData(s.UNIFORM_BUFFER,L+P,D.__data)):U.isMatrix3?(D.__data[0]=U.elements[0],D.__data[1]=U.elements[1],D.__data[2]=U.elements[2],D.__data[3]=0,D.__data[4]=U.elements[3],D.__data[5]=U.elements[4],D.__data[6]=U.elements[5],D.__data[7]=0,D.__data[8]=U.elements[6],D.__data[9]=U.elements[7],D.__data[10]=U.elements[8],D.__data[11]=0):(U.toArray(D.__data,P),P+=B.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,L,D.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(v,x,_,S){let w=v.value,T=x+"_"+_;if(S[T]===void 0)return typeof w=="number"||typeof w=="boolean"?S[T]=w:S[T]=w.clone(),!0;{let I=S[T];if(typeof w=="number"||typeof w=="boolean"){if(I!==w)return S[T]=w,!0}else if(I.equals(w)===!1)return I.copy(w),!0}return!1}function g(v){let x=v.uniforms,_=0,S=16;for(let T=0,I=x.length;T<I;T++){let y=Array.isArray(x[T])?x[T]:[x[T]];for(let M=0,D=y.length;M<D;M++){let L=y[M],k=Array.isArray(L.value)?L.value:[L.value];for(let P=0,F=k.length;P<F;P++){let U=k[P],B=b(U),O=_%S;O!==0&&S-O<B.boundary&&(_+=S-O),L.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=_,_+=B.storage}}}let w=_%S;return w>0&&(_+=S-w),v.__size=_,v.__cache={},this}function b(v){let x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){let x=v.target;x.removeEventListener("dispose",m);let _=a.indexOf(x.__bindingPointIndex);a.splice(_,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function p(){for(let v in i)s.deleteBuffer(i[v]);a=[],i={},r={}}return{bind:c,update:l,dispose:p}}var Kr=class{constructor(e={}){let{canvas:t=d0(),context:n=null,depth:i=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;let f=new Uint32Array(4),g=new Int32Array(4),b=null,m=null,p=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=it,this._useLegacyLights=!1,this.toneMapping=Ni,this.toneMappingExposure=1;let x=this,_=!1,S=0,w=0,T=null,I=-1,y=null,M=new Ke,D=new Ke,L=null,k=new Z(0),P=0,F=t.width,U=t.height,B=1,O=null,z=null,Y=new Ke(0,0,F,U),K=new Ke(0,0,F,U),Q=!1,G=new jr,J=!1,$=!1,le=null,ge=new be,Be=new oe,ze=new E,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function nt(){return T===null?B:1}let V=n;function un(R,H){for(let X=0;X<R.length;X++){let j=R[X],W=t.getContext(j,H);if(W!==null)return W}return null}try{let R={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",re,!1),t.addEventListener("webglcontextrestored",N,!1),t.addEventListener("webglcontextcreationerror",he,!1),V===null){let H=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&H.shift(),V=un(H,R),V===null)throw un(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&V instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),V.getShaderPrecisionFormat===void 0&&(V.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let we,Fe,xe,xt,Ve,C,A,q,ie,ne,se,_e,de,pe,Ae,We,te,ct,Qe,De,Ee,me,Ge,ot;function Et(){we=new Mv(V),Fe=new gv(V,we,e),we.init(Fe),me=new e_(V,we,Fe),xe=new Qx(V,we,Fe),xt=new Sv(V),Ve=new Hx,C=new $x(V,we,xe,Ve,Fe,me,xt),A=new vv(x),q=new yv(x),ie=new D0(V,Fe),Ge=new pv(V,we,ie,Fe),ne=new Ev(V,ie,xt,Ge),se=new Cv(V,ne,ie,xt),Qe=new Rv(V,Fe,C),We=new bv(Ve),_e=new kx(x,A,q,we,Fe,Ge,We),de=new n_(x,Ve),pe=new Gx,Ae=new Yx(we,Fe),ct=new fv(x,A,q,xe,se,d,c),te=new Zx(x,se,Fe),ot=new i_(V,xt,Fe,xe),De=new mv(V,we,xt,Fe),Ee=new wv(V,we,xt,Fe),xt.programs=_e.programs,x.capabilities=Fe,x.extensions=we,x.properties=Ve,x.renderLists=pe,x.shadowMap=te,x.state=xe,x.info=xt}Et();let Xe=new vl(x,V);this.xr=Xe,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let R=we.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=we.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(R){R!==void 0&&(B=R,this.setSize(F,U,!1))},this.getSize=function(R){return R.set(F,U)},this.setSize=function(R,H,X=!0){if(Xe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=R,U=H,t.width=Math.floor(R*B),t.height=Math.floor(H*B),X===!0&&(t.style.width=R+"px",t.style.height=H+"px"),this.setViewport(0,0,R,H)},this.getDrawingBufferSize=function(R){return R.set(F*B,U*B).floor()},this.setDrawingBufferSize=function(R,H,X){F=R,U=H,B=X,t.width=Math.floor(R*X),t.height=Math.floor(H*X),this.setViewport(0,0,R,H)},this.getCurrentViewport=function(R){return R.copy(M)},this.getViewport=function(R){return R.copy(Y)},this.setViewport=function(R,H,X,j){R.isVector4?Y.set(R.x,R.y,R.z,R.w):Y.set(R,H,X,j),xe.viewport(M.copy(Y).multiplyScalar(B).floor())},this.getScissor=function(R){return R.copy(K)},this.setScissor=function(R,H,X,j){R.isVector4?K.set(R.x,R.y,R.z,R.w):K.set(R,H,X,j),xe.scissor(D.copy(K).multiplyScalar(B).floor())},this.getScissorTest=function(){return Q},this.setScissorTest=function(R){xe.setScissorTest(Q=R)},this.setOpaqueSort=function(R){O=R},this.setTransparentSort=function(R){z=R},this.getClearColor=function(R){return R.copy(ct.getClearColor())},this.setClearColor=function(){ct.setClearColor.apply(ct,arguments)},this.getClearAlpha=function(){return ct.getClearAlpha()},this.setClearAlpha=function(){ct.setClearAlpha.apply(ct,arguments)},this.clear=function(R=!0,H=!0,X=!0){let j=0;if(R){let W=!1;if(T!==null){let fe=T.texture.format;W=fe===cf||fe===of||fe===af}if(W){let fe=T.texture.type,ye=fe===ii||fe===ni||fe===Hl||fe===ls||fe===sf||fe===rf,Te=ct.getClearColor(),Le=ct.getClearAlpha(),qe=Te.r,Ue=Te.g,ke=Te.b;ye?(f[0]=qe,f[1]=Ue,f[2]=ke,f[3]=Le,V.clearBufferuiv(V.COLOR,0,f)):(g[0]=qe,g[1]=Ue,g[2]=ke,g[3]=Le,V.clearBufferiv(V.COLOR,0,g))}else j|=V.COLOR_BUFFER_BIT}H&&(j|=V.DEPTH_BUFFER_BIT),X&&(j|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",re,!1),t.removeEventListener("webglcontextrestored",N,!1),t.removeEventListener("webglcontextcreationerror",he,!1),pe.dispose(),Ae.dispose(),Ve.dispose(),A.dispose(),q.dispose(),se.dispose(),Ge.dispose(),ot.dispose(),_e.dispose(),Xe.dispose(),Xe.removeEventListener("sessionstart",dn),Xe.removeEventListener("sessionend",gt),le&&(le.dispose(),le=null),fn.stop()};function re(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function N(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;let R=xt.autoReset,H=te.enabled,X=te.autoUpdate,j=te.needsUpdate,W=te.type;Et(),xt.autoReset=R,te.enabled=H,te.autoUpdate=X,te.needsUpdate=j,te.type=W}function he(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ue(R){let H=R.target;H.removeEventListener("dispose",ue),Ce(H)}function Ce(R){Se(R),Ve.remove(R)}function Se(R){let H=Ve.get(R).programs;H!==void 0&&(H.forEach(function(X){_e.releaseProgram(X)}),R.isShaderMaterial&&_e.releaseShaderCache(R))}this.renderBufferDirect=function(R,H,X,j,W,fe){H===null&&(H=Re);let ye=W.isMesh&&W.matrixWorld.determinant()<0,Te=Jp(R,H,X,j,W);xe.setMaterial(j,ye);let Le=X.index,qe=1;if(j.wireframe===!0){if(Le=ne.getWireframeAttribute(X),Le===void 0)return;qe=2}let Ue=X.drawRange,ke=X.attributes.position,At=Ue.start*qe,wn=(Ue.start+Ue.count)*qe;fe!==null&&(At=Math.max(At,fe.start*qe),wn=Math.min(wn,(fe.start+fe.count)*qe)),Le!==null?(At=Math.max(At,0),wn=Math.min(wn,Le.count)):ke!=null&&(At=Math.max(At,0),wn=Math.min(wn,ke.count));let Vt=wn-At;if(Vt<0||Vt===1/0)return;Ge.setup(W,j,Te,X,Le);let ci,_t=De;if(Le!==null&&(ci=ie.get(Le),_t=Ee,_t.setIndex(ci)),W.isMesh)j.wireframe===!0?(xe.setLineWidth(j.wireframeLinewidth*nt()),_t.setMode(V.LINES)):_t.setMode(V.TRIANGLES);else if(W.isLine){let je=j.linewidth;je===void 0&&(je=1),xe.setLineWidth(je*nt()),W.isLineSegments?_t.setMode(V.LINES):W.isLineLoop?_t.setMode(V.LINE_LOOP):_t.setMode(V.LINE_STRIP)}else W.isPoints?_t.setMode(V.POINTS):W.isSprite&&_t.setMode(V.TRIANGLES);if(W.isBatchedMesh)_t.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else if(W.isInstancedMesh)_t.renderInstances(At,Vt,W.count);else if(X.isInstancedBufferGeometry){let je=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,mc=Math.min(X.instanceCount,je);_t.renderInstances(At,Vt,mc)}else _t.render(At,Vt)};function pt(R,H,X){R.transparent===!0&&R.side===dt&&R.forceSinglePass===!1?(R.side=Kt,R.needsUpdate=!0,Ea(R,H,X),R.side=si,R.needsUpdate=!0,Ea(R,H,X),R.side=dt):Ea(R,H,X)}this.compile=function(R,H,X=null){X===null&&(X=R),m=Ae.get(X),m.init(),v.push(m),X.traverseVisible(function(W){W.isLight&&W.layers.test(H.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),R!==X&&R.traverseVisible(function(W){W.isLight&&W.layers.test(H.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),m.setupLights(x._useLegacyLights);let j=new Set;return R.traverse(function(W){let fe=W.material;if(fe)if(Array.isArray(fe))for(let ye=0;ye<fe.length;ye++){let Te=fe[ye];pt(Te,X,W),j.add(Te)}else pt(fe,X,W),j.add(fe)}),v.pop(),m=null,j},this.compileAsync=function(R,H,X=null){let j=this.compile(R,H,X);return new Promise(W=>{function fe(){if(j.forEach(function(ye){Ve.get(ye).currentProgram.isReady()&&j.delete(ye)}),j.size===0){W(R);return}setTimeout(fe,10)}we.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let mt=null;function Gt(R){mt&&mt(R)}function dn(){fn.stop()}function gt(){fn.start()}let fn=new gf;fn.setAnimationLoop(Gt),typeof self<"u"&&fn.setContext(self),this.setAnimationLoop=function(R){mt=R,Xe.setAnimationLoop(R),R===null?fn.stop():fn.start()},Xe.addEventListener("sessionstart",dn),Xe.addEventListener("sessionend",gt),this.render=function(R,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Xe.enabled===!0&&Xe.isPresenting===!0&&(Xe.cameraAutoUpdate===!0&&Xe.updateCamera(H),H=Xe.getCamera()),R.isScene===!0&&R.onBeforeRender(x,R,H,T),m=Ae.get(R,v.length),m.init(),v.push(m),ge.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),G.setFromProjectionMatrix(ge),$=this.localClippingEnabled,J=We.init(this.clippingPlanes,$),b=pe.get(R,p.length),b.init(),p.push(b),$n(R,H,0,x.sortObjects),b.finish(),x.sortObjects===!0&&b.sort(O,z),this.info.render.frame++,J===!0&&We.beginShadows();let X=m.state.shadowsArray;if(te.render(X,R,H),J===!0&&We.endShadows(),this.info.autoReset===!0&&this.info.reset(),ct.render(b,R),m.setupLights(x._useLegacyLights),H.isArrayCamera){let j=H.cameras;for(let W=0,fe=j.length;W<fe;W++){let ye=j[W];lu(b,R,ye,ye.viewport)}}else lu(b,R,H);T!==null&&(C.updateMultisampleRenderTarget(T),C.updateRenderTargetMipmap(T)),R.isScene===!0&&R.onAfterRender(x,R,H),Ge.resetDefaultState(),I=-1,y=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,p.pop(),p.length>0?b=p[p.length-1]:b=null};function $n(R,H,X,j){if(R.visible===!1)return;if(R.layers.test(H.layers)){if(R.isGroup)X=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(H);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||G.intersectsSprite(R)){j&&ze.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ge);let ye=se.update(R),Te=R.material;Te.visible&&b.push(R,ye,Te,X,ze.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||G.intersectsObject(R))){let ye=se.update(R),Te=R.material;if(j&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ze.copy(R.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),ze.copy(ye.boundingSphere.center)),ze.applyMatrix4(R.matrixWorld).applyMatrix4(ge)),Array.isArray(Te)){let Le=ye.groups;for(let qe=0,Ue=Le.length;qe<Ue;qe++){let ke=Le[qe],At=Te[ke.materialIndex];At&&At.visible&&b.push(R,ye,At,X,ze.z,ke)}}else Te.visible&&b.push(R,ye,Te,X,ze.z,null)}}let fe=R.children;for(let ye=0,Te=fe.length;ye<Te;ye++)$n(fe[ye],H,X,j)}function lu(R,H,X,j){let W=R.opaque,fe=R.transmissive,ye=R.transparent;m.setupLightsView(X),J===!0&&We.setGlobalState(x.clippingPlanes,X),fe.length>0&&Kp(W,fe,H,X),j&&xe.viewport(M.copy(j)),W.length>0&&Ma(W,H,X),fe.length>0&&Ma(fe,H,X),ye.length>0&&Ma(ye,H,X),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function Kp(R,H,X,j){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;let fe=Fe.isWebGL2;le===null&&(le=new sn(1,1,{generateMipmaps:!0,type:we.has("EXT_color_buffer_half_float")?Un:ii,minFilter:Oi,samples:fe?4:0})),x.getDrawingBufferSize(Be),fe?le.setSize(Be.x,Be.y):le.setSize(co(Be.x),co(Be.y));let ye=x.getRenderTarget();x.setRenderTarget(le),x.getClearColor(k),P=x.getClearAlpha(),P<1&&x.setClearColor(16777215,.5),x.clear();let Te=x.toneMapping;x.toneMapping=Ni,Ma(R,X,j),C.updateMultisampleRenderTarget(le),C.updateRenderTargetMipmap(le);let Le=!1;for(let qe=0,Ue=H.length;qe<Ue;qe++){let ke=H[qe],At=ke.object,wn=ke.geometry,Vt=ke.material,ci=ke.group;if(Vt.side===dt&&At.layers.test(j.layers)){let _t=Vt.side;Vt.side=Kt,Vt.needsUpdate=!0,hu(At,X,j,wn,Vt,ci),Vt.side=_t,Vt.needsUpdate=!0,Le=!0}}Le===!0&&(C.updateMultisampleRenderTarget(le),C.updateRenderTargetMipmap(le)),x.setRenderTarget(ye),x.setClearColor(k,P),x.toneMapping=Te}function Ma(R,H,X){let j=H.isScene===!0?H.overrideMaterial:null;for(let W=0,fe=R.length;W<fe;W++){let ye=R[W],Te=ye.object,Le=ye.geometry,qe=j===null?ye.material:j,Ue=ye.group;Te.layers.test(X.layers)&&hu(Te,H,X,Le,qe,Ue)}}function hu(R,H,X,j,W,fe){R.onBeforeRender(x,H,X,j,W,fe),R.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),W.onBeforeRender(x,H,X,j,R,fe),W.transparent===!0&&W.side===dt&&W.forceSinglePass===!1?(W.side=Kt,W.needsUpdate=!0,x.renderBufferDirect(X,H,j,W,R,fe),W.side=si,W.needsUpdate=!0,x.renderBufferDirect(X,H,j,W,R,fe),W.side=dt):x.renderBufferDirect(X,H,j,W,R,fe),R.onAfterRender(x,H,X,j,W,fe)}function Ea(R,H,X){H.isScene!==!0&&(H=Re);let j=Ve.get(R),W=m.state.lights,fe=m.state.shadowsArray,ye=W.state.version,Te=_e.getParameters(R,W.state,fe,H,X),Le=_e.getProgramCacheKey(Te),qe=j.programs;j.environment=R.isMeshStandardMaterial?H.environment:null,j.fog=H.fog,j.envMap=(R.isMeshStandardMaterial?q:A).get(R.envMap||j.environment),qe===void 0&&(R.addEventListener("dispose",ue),qe=new Map,j.programs=qe);let Ue=qe.get(Le);if(Ue!==void 0){if(j.currentProgram===Ue&&j.lightsStateVersion===ye)return du(R,Te),Ue}else Te.uniforms=_e.getUniforms(R),R.onBuild(X,Te,x),R.onBeforeCompile(Te,x),Ue=_e.acquireProgram(Te,Le),qe.set(Le,Ue),j.uniforms=Te.uniforms;let ke=j.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(ke.clippingPlanes=We.uniform),du(R,Te),j.needsLights=Qp(R),j.lightsStateVersion=ye,j.needsLights&&(ke.ambientLightColor.value=W.state.ambient,ke.lightProbe.value=W.state.probe,ke.directionalLights.value=W.state.directional,ke.directionalLightShadows.value=W.state.directionalShadow,ke.spotLights.value=W.state.spot,ke.spotLightShadows.value=W.state.spotShadow,ke.rectAreaLights.value=W.state.rectArea,ke.ltc_1.value=W.state.rectAreaLTC1,ke.ltc_2.value=W.state.rectAreaLTC2,ke.pointLights.value=W.state.point,ke.pointLightShadows.value=W.state.pointShadow,ke.hemisphereLights.value=W.state.hemi,ke.directionalShadowMap.value=W.state.directionalShadowMap,ke.directionalShadowMatrix.value=W.state.directionalShadowMatrix,ke.spotShadowMap.value=W.state.spotShadowMap,ke.spotLightMatrix.value=W.state.spotLightMatrix,ke.spotLightMap.value=W.state.spotLightMap,ke.pointShadowMap.value=W.state.pointShadowMap,ke.pointShadowMatrix.value=W.state.pointShadowMatrix),j.currentProgram=Ue,j.uniformsList=null,Ue}function uu(R){if(R.uniformsList===null){let H=R.currentProgram.getUniforms();R.uniformsList=Js.seqWithValue(H.seq,R.uniforms)}return R.uniformsList}function du(R,H){let X=Ve.get(R);X.outputColorSpace=H.outputColorSpace,X.batching=H.batching,X.instancing=H.instancing,X.instancingColor=H.instancingColor,X.skinning=H.skinning,X.morphTargets=H.morphTargets,X.morphNormals=H.morphNormals,X.morphColors=H.morphColors,X.morphTargetsCount=H.morphTargetsCount,X.numClippingPlanes=H.numClippingPlanes,X.numIntersection=H.numClipIntersection,X.vertexAlphas=H.vertexAlphas,X.vertexTangents=H.vertexTangents,X.toneMapping=H.toneMapping}function Jp(R,H,X,j,W){H.isScene!==!0&&(H=Re),C.resetTextureUnits();let fe=H.fog,ye=j.isMeshStandardMaterial?H.environment:null,Te=T===null?x.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Ut,Le=(j.isMeshStandardMaterial?q:A).get(j.envMap||ye),qe=j.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ue=!!X.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),ke=!!X.morphAttributes.position,At=!!X.morphAttributes.normal,wn=!!X.morphAttributes.color,Vt=Ni;j.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Vt=x.toneMapping);let ci=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,_t=ci!==void 0?ci.length:0,je=Ve.get(j),mc=m.state.lights;if(J===!0&&($===!0||R!==y)){let In=R===y&&j.id===I;We.setState(j,R,In)}let wt=!1;j.version===je.__version?(je.needsLights&&je.lightsStateVersion!==mc.state.version||je.outputColorSpace!==Te||W.isBatchedMesh&&je.batching===!1||!W.isBatchedMesh&&je.batching===!0||W.isInstancedMesh&&je.instancing===!1||!W.isInstancedMesh&&je.instancing===!0||W.isSkinnedMesh&&je.skinning===!1||!W.isSkinnedMesh&&je.skinning===!0||W.isInstancedMesh&&je.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&je.instancingColor===!1&&W.instanceColor!==null||je.envMap!==Le||j.fog===!0&&je.fog!==fe||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==We.numPlanes||je.numIntersection!==We.numIntersection)||je.vertexAlphas!==qe||je.vertexTangents!==Ue||je.morphTargets!==ke||je.morphNormals!==At||je.morphColors!==wn||je.toneMapping!==Vt||Fe.isWebGL2===!0&&je.morphTargetsCount!==_t)&&(wt=!0):(wt=!0,je.__version=j.version);let $i=je.currentProgram;wt===!0&&($i=Ea(j,H,W));let fu=!1,Rr=!1,gc=!1,$t=$i.getUniforms(),es=je.uniforms;if(xe.useProgram($i.program)&&(fu=!0,Rr=!0,gc=!0),j.id!==I&&(I=j.id,Rr=!0),fu||y!==R){$t.setValue(V,"projectionMatrix",R.projectionMatrix),$t.setValue(V,"viewMatrix",R.matrixWorldInverse);let In=$t.map.cameraPosition;In!==void 0&&In.setValue(V,ze.setFromMatrixPosition(R.matrixWorld)),Fe.logarithmicDepthBuffer&&$t.setValue(V,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&$t.setValue(V,"isOrthographic",R.isOrthographicCamera===!0),y!==R&&(y=R,Rr=!0,gc=!0)}if(W.isSkinnedMesh){$t.setOptional(V,W,"bindMatrix"),$t.setOptional(V,W,"bindMatrixInverse");let In=W.skeleton;In&&(Fe.floatVertexTextures?(In.boneTexture===null&&In.computeBoneTexture(),$t.setValue(V,"boneTexture",In.boneTexture,C)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}W.isBatchedMesh&&($t.setOptional(V,W,"batchingTexture"),$t.setValue(V,"batchingTexture",W._matricesTexture,C));let bc=X.morphAttributes;if((bc.position!==void 0||bc.normal!==void 0||bc.color!==void 0&&Fe.isWebGL2===!0)&&Qe.update(W,X,$i),(Rr||je.receiveShadow!==W.receiveShadow)&&(je.receiveShadow=W.receiveShadow,$t.setValue(V,"receiveShadow",W.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(es.envMap.value=Le,es.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),Rr&&($t.setValue(V,"toneMappingExposure",x.toneMappingExposure),je.needsLights&&Zp(es,gc),fe&&j.fog===!0&&de.refreshFogUniforms(es,fe),de.refreshMaterialUniforms(es,j,B,U,le),Js.upload(V,uu(je),es,C)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Js.upload(V,uu(je),es,C),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&$t.setValue(V,"center",W.center),$t.setValue(V,"modelViewMatrix",W.modelViewMatrix),$t.setValue(V,"normalMatrix",W.normalMatrix),$t.setValue(V,"modelMatrix",W.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){let In=j.uniformsGroups;for(let vc=0,$p=In.length;vc<$p;vc++)if(Fe.isWebGL2){let pu=In[vc];ot.update(pu,$i),ot.bind(pu,$i)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return $i}function Zp(R,H){R.ambientLightColor.needsUpdate=H,R.lightProbe.needsUpdate=H,R.directionalLights.needsUpdate=H,R.directionalLightShadows.needsUpdate=H,R.pointLights.needsUpdate=H,R.pointLightShadows.needsUpdate=H,R.spotLights.needsUpdate=H,R.spotLightShadows.needsUpdate=H,R.rectAreaLights.needsUpdate=H,R.hemisphereLights.needsUpdate=H}function Qp(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(R,H,X){Ve.get(R.texture).__webglTexture=H,Ve.get(R.depthTexture).__webglTexture=X;let j=Ve.get(R);j.__hasExternalTextures=!0,j.__hasExternalTextures&&(j.__autoAllocateDepthBuffer=X===void 0,j.__autoAllocateDepthBuffer||we.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,H){let X=Ve.get(R);X.__webglFramebuffer=H,X.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(R,H=0,X=0){T=R,S=H,w=X;let j=!0,W=null,fe=!1,ye=!1;if(R){let Le=Ve.get(R);Le.__useDefaultFramebuffer!==void 0?(xe.bindFramebuffer(V.FRAMEBUFFER,null),j=!1):Le.__webglFramebuffer===void 0?C.setupRenderTarget(R):Le.__hasExternalTextures&&C.rebindTextures(R,Ve.get(R.texture).__webglTexture,Ve.get(R.depthTexture).__webglTexture);let qe=R.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(ye=!0);let Ue=Ve.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ue[H])?W=Ue[H][X]:W=Ue[H],fe=!0):Fe.isWebGL2&&R.samples>0&&C.useMultisampledRTT(R)===!1?W=Ve.get(R).__webglMultisampledFramebuffer:Array.isArray(Ue)?W=Ue[X]:W=Ue,M.copy(R.viewport),D.copy(R.scissor),L=R.scissorTest}else M.copy(Y).multiplyScalar(B).floor(),D.copy(K).multiplyScalar(B).floor(),L=Q;if(xe.bindFramebuffer(V.FRAMEBUFFER,W)&&Fe.drawBuffers&&j&&xe.drawBuffers(R,W),xe.viewport(M),xe.scissor(D),xe.setScissorTest(L),fe){let Le=Ve.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+H,Le.__webglTexture,X)}else if(ye){let Le=Ve.get(R.texture),qe=H||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,Le.__webglTexture,X||0,qe)}I=-1},this.readRenderTargetPixels=function(R,H,X,j,W,fe,ye){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=Ve.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ye!==void 0&&(Te=Te[ye]),Te){xe.bindFramebuffer(V.FRAMEBUFFER,Te);try{let Le=R.texture,qe=Le.format,Ue=Le.type;if(qe!==Fn&&me.convert(qe)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let ke=Ue===Un&&(we.has("EXT_color_buffer_half_float")||Fe.isWebGL2&&we.has("EXT_color_buffer_float"));if(Ue!==ii&&me.convert(Ue)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ue===gi&&(Fe.isWebGL2||we.has("OES_texture_float")||we.has("WEBGL_color_buffer_float")))&&!ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=R.width-j&&X>=0&&X<=R.height-W&&V.readPixels(H,X,j,W,me.convert(qe),me.convert(Ue),fe)}finally{let Le=T!==null?Ve.get(T).__webglFramebuffer:null;xe.bindFramebuffer(V.FRAMEBUFFER,Le)}}},this.copyFramebufferToTexture=function(R,H,X=0){let j=Math.pow(2,-X),W=Math.floor(H.image.width*j),fe=Math.floor(H.image.height*j);C.setTexture2D(H,0),V.copyTexSubImage2D(V.TEXTURE_2D,X,0,0,R.x,R.y,W,fe),xe.unbindTexture()},this.copyTextureToTexture=function(R,H,X,j=0){let W=H.image.width,fe=H.image.height,ye=me.convert(X.format),Te=me.convert(X.type);C.setTexture2D(X,0),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,X.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,X.unpackAlignment),H.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,j,R.x,R.y,W,fe,ye,Te,H.image.data):H.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,j,R.x,R.y,H.mipmaps[0].width,H.mipmaps[0].height,ye,H.mipmaps[0].data):V.texSubImage2D(V.TEXTURE_2D,j,R.x,R.y,ye,Te,H.image),j===0&&X.generateMipmaps&&V.generateMipmap(V.TEXTURE_2D),xe.unbindTexture()},this.copyTextureToTexture3D=function(R,H,X,j,W=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let fe=R.max.x-R.min.x+1,ye=R.max.y-R.min.y+1,Te=R.max.z-R.min.z+1,Le=me.convert(j.format),qe=me.convert(j.type),Ue;if(j.isData3DTexture)C.setTexture3D(j,0),Ue=V.TEXTURE_3D;else if(j.isDataArrayTexture||j.isCompressedArrayTexture)C.setTexture2DArray(j,0),Ue=V.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,j.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,j.unpackAlignment);let ke=V.getParameter(V.UNPACK_ROW_LENGTH),At=V.getParameter(V.UNPACK_IMAGE_HEIGHT),wn=V.getParameter(V.UNPACK_SKIP_PIXELS),Vt=V.getParameter(V.UNPACK_SKIP_ROWS),ci=V.getParameter(V.UNPACK_SKIP_IMAGES),_t=X.isCompressedTexture?X.mipmaps[W]:X.image;V.pixelStorei(V.UNPACK_ROW_LENGTH,_t.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,_t.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,R.min.x),V.pixelStorei(V.UNPACK_SKIP_ROWS,R.min.y),V.pixelStorei(V.UNPACK_SKIP_IMAGES,R.min.z),X.isDataTexture||X.isData3DTexture?V.texSubImage3D(Ue,W,H.x,H.y,H.z,fe,ye,Te,Le,qe,_t.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),V.compressedTexSubImage3D(Ue,W,H.x,H.y,H.z,fe,ye,Te,Le,_t.data)):V.texSubImage3D(Ue,W,H.x,H.y,H.z,fe,ye,Te,Le,qe,_t),V.pixelStorei(V.UNPACK_ROW_LENGTH,ke),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,At),V.pixelStorei(V.UNPACK_SKIP_PIXELS,wn),V.pixelStorei(V.UNPACK_SKIP_ROWS,Vt),V.pixelStorei(V.UNPACK_SKIP_IMAGES,ci),W===0&&j.generateMipmaps&&V.generateMipmap(Ue),xe.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?C.setTextureCube(R,0):R.isData3DTexture?C.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?C.setTexture2DArray(R,0):C.setTexture2D(R,0),xe.unbindTexture()},this.resetState=function(){S=0,w=0,T=null,xe.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Xl?"display-p3":"srgb",t.unpackColorSpace=st.workingColorSpace===Po?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===it?us:uf}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===us?it:Ut}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},xl=class extends Kr{};xl.prototype.isWebGL1Renderer=!0;var bo=class s{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Z(e),this.density=t}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var ki=class extends ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},ar=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=il,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Xn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},pn=new E,ps=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.applyMatrix4(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.applyNormalMatrix(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.transformDirection(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ti(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ti(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ti(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ti(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),i=lt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),i=lt(i,this.array),r=lt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new ve(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},xi=class extends Qt{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Z(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ks,Dr=new E,Hs=new E,zs=new E,Gs=new oe,Fr=new oe,Mf=new be,Xa=new E,Ur=new E,ja=new E,Id=new oe,jc=new oe,Dd=new oe,Hi=class extends ft{constructor(e=new xi){if(super(),this.isSprite=!0,this.type="Sprite",ks===void 0){ks=new Oe;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ar(t,5);ks.setIndex([0,1,2,0,2,3]),ks.setAttribute("position",new ps(n,3,0,!1)),ks.setAttribute("uv",new ps(n,2,3,!1))}this.geometry=ks,this.material=e,this.center=new oe(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Hs.setFromMatrixScale(this.matrixWorld),Mf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),zs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Hs.multiplyScalar(-zs.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let a=this.center;Ya(Xa.set(-.5,-.5,0),zs,a,Hs,i,r),Ya(Ur.set(.5,-.5,0),zs,a,Hs,i,r),Ya(ja.set(.5,.5,0),zs,a,Hs,i,r),Id.set(0,0),jc.set(1,0),Dd.set(1,1);let o=e.ray.intersectTriangle(Xa,Ur,ja,!1,Dr);if(o===null&&(Ya(Ur.set(-.5,.5,0),zs,a,Hs,i,r),jc.set(0,1),o=e.ray.intersectTriangle(Xa,ja,Ur,!1,Dr),o===null))return;let c=e.ray.origin.distanceTo(Dr);c<e.near||c>e.far||t.push({distance:c,point:Dr.clone(),uv:cs.getInterpolation(Dr,Xa,Ur,ja,Id,jc,Dd,new oe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Ya(s,e,t,n,i,r){Gs.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(Fr.x=r*Gs.x-i*Gs.y,Fr.y=i*Gs.x+r*Gs.y):Fr.copy(Gs),s.copy(e),s.x+=Fr.x,s.y+=Fr.y,s.applyMatrix4(Mf)}var Fd=new E,Ud=new Ke,Nd=new Ke,s_=new E,Od=new be,Ka=new E,Yc=new Rn,Bd=new be,Kc=new fs,vo=class extends Ne{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=_u,this.bindMatrix=new be,this.bindMatrixInverse=new be,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Rt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ka),this.boundingBox.expandByPoint(Ka)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Rn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ka),this.boundingSphere.expandByPoint(Ka)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Yc.copy(this.boundingSphere),Yc.applyMatrix4(i),e.ray.intersectsSphere(Yc)!==!1&&(Bd.copy(i).invert(),Kc.copy(e.ray).applyMatrix4(Bd),!(this.boundingBox!==null&&Kc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Kc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Ke,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===_u?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Im?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;Ud.fromBufferAttribute(i.attributes.skinIndex,e),Nd.fromBufferAttribute(i.attributes.skinWeight,e),Fd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let a=Nd.getComponent(r);if(a!==0){let o=Ud.getComponent(r);Od.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(s_.copy(Fd).applyMatrix4(Od),a)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},Jr=class extends ft{constructor(){super(),this.isBone=!0,this.type="Bone"}},_l=class extends Zt{constructor(e=null,t=1,n=1,i,r,a,o,c,l=Ft,h=Ft,u,d){super(null,a,o,c,l,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},kd=new be,r_=new be,xo=class s{constructor(e=[],t=[]){this.uuid=Xn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new be)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new be;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:r_;kd.multiplyMatrices(o,t[r]),kd.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new _l(t,e,e,Fn,gi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Jr),this.bones.push(a),this.boneInverses.push(new be().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let a=t[i];e.bones.push(a.uuid);let o=n[i];e.boneInverses.push(o.toArray())}return e}},Yn=class extends ve{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Vs=new be,Hd=new be,Ja=[],zd=new Rt,a_=new be,Nr=new Ne,Or=new Rn,rn=class extends Ne{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Yn(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,a_)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Rt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Vs),zd.copy(e.boundingBox).applyMatrix4(Vs),this.boundingBox.union(zd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Rn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Vs),Or.copy(e.boundingSphere).applyMatrix4(Vs),this.boundingSphere.union(Or)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Nr.geometry=this.geometry,Nr.material=this.material,Nr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Or.copy(this.boundingSphere),Or.applyMatrix4(n),e.ray.intersectsSphere(Or)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Vs),Hd.multiplyMatrices(n,Vs),Nr.matrixWorld=Hd,Nr.raycast(e,Ja);for(let a=0,o=Ja.length;a<o;a++){let c=Ja[a];c.instanceId=r,c.object=this,t.push(c)}Ja.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Yn(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var ms=class extends Qt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Z(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Gd=new E,Vd=new E,Wd=new be,Jc=new fs,Za=new Rn,or=class extends ft{constructor(e=new Oe,t=new ms){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Gd.fromBufferAttribute(t,i-1),Vd.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Gd.distanceTo(Vd);e.setAttribute("lineDistance",new He(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Za.copy(n.boundingSphere),Za.applyMatrix4(i),Za.radius+=r,e.ray.intersectsSphere(Za)===!1)return;Wd.copy(i).invert(),Jc.copy(e.ray).applyMatrix4(Wd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=new E,h=new E,u=new E,d=new E,f=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){let p=Math.max(0,a.start),v=Math.min(g.count,a.start+a.count);for(let x=p,_=v-1;x<_;x+=f){let S=g.getX(x),w=g.getX(x+1);if(l.fromBufferAttribute(m,S),h.fromBufferAttribute(m,w),Jc.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);let I=e.ray.origin.distanceTo(d);I<e.near||I>e.far||t.push({distance:I,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,a.start),v=Math.min(m.count,a.start+a.count);for(let x=p,_=v-1;x<_;x+=f){if(l.fromBufferAttribute(m,x),h.fromBufferAttribute(m,x+1),Jc.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);let w=e.ray.origin.distanceTo(d);w<e.near||w>e.far||t.push({distance:w,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}},qd=new E,Xd=new E,zi=class extends or{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)qd.fromBufferAttribute(t,i),Xd.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+qd.distanceTo(Xd);e.setAttribute("lineDistance",new He(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},_o=class extends or{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},_i=class extends Qt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Z(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},jd=new be,yl=new fs,Qa=new Rn,$a=new E,xn=class extends ft{constructor(e=new Oe,t=new _i){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qa.copy(n.boundingSphere),Qa.applyMatrix4(i),Qa.radius+=r,e.ray.intersectsSphere(Qa)===!1)return;jd.copy(i).invert(),yl.copy(e.ray).applyMatrix4(jd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=d,b=f;g<b;g++){let m=l.getX(g);$a.fromBufferAttribute(u,m),Yd($a,m,c,i,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,b=f;g<b;g++)$a.fromBufferAttribute(u,g),Yd($a,g,c,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Yd(s,e,t,n,i,r,a){let o=yl.distanceSqToPoint(s);if(o<t){let c=new E;yl.closestPointToPoint(s,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,object:a})}}var _n=class extends Zt{constructor(e,t,n,i,r,a,o,c,l){super(e,t,n,i,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var yi=class s extends Oe{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,b=[],m=n/2,p=0;v(),a===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new He(u,3)),this.setAttribute("normal",new He(d,3)),this.setAttribute("uv",new He(f,2));function v(){let _=new E,S=new E,w=0,T=(t-e)/n;for(let I=0;I<=r;I++){let y=[],M=I/r,D=M*(t-e)+e;for(let L=0;L<=i;L++){let k=L/i,P=k*c+o,F=Math.sin(P),U=Math.cos(P);S.x=D*F,S.y=-M*n+m,S.z=D*U,u.push(S.x,S.y,S.z),_.set(F,T,U).normalize(),d.push(_.x,_.y,_.z),f.push(k,1-M),y.push(g++)}b.push(y)}for(let I=0;I<i;I++)for(let y=0;y<r;y++){let M=b[y][I],D=b[y+1][I],L=b[y+1][I+1],k=b[y][I+1];h.push(M,D,k),h.push(D,L,k),w+=6}l.addGroup(p,w,0),p+=w}function x(_){let S=g,w=new oe,T=new E,I=0,y=_===!0?e:t,M=_===!0?1:-1;for(let L=1;L<=i;L++)u.push(0,m*M,0),d.push(0,M,0),f.push(.5,.5),g++;let D=g;for(let L=0;L<=i;L++){let P=L/i*c+o,F=Math.cos(P),U=Math.sin(P);T.x=y*U,T.y=m*M,T.z=y*F,u.push(T.x,T.y,T.z),d.push(0,M,0),w.x=F*.5+.5,w.y=U*.5*M+.5,f.push(w.x,w.y),g++}for(let L=0;L<i;L++){let k=S+L,P=D+L;_===!0?h.push(P,P+1,k):h.push(P+1,P,k),I+=3}l.addGroup(p,I,_===!0?1:2),p+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Ml=class s extends Oe{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let r=[],a=[];o(i),l(n),h(),this.setAttribute("position",new He(r,3)),this.setAttribute("normal",new He(r.slice(),3)),this.setAttribute("uv",new He(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(v){let x=new E,_=new E,S=new E;for(let w=0;w<t.length;w+=3)f(t[w+0],x),f(t[w+1],_),f(t[w+2],S),c(x,_,S,v)}function c(v,x,_,S){let w=S+1,T=[];for(let I=0;I<=w;I++){T[I]=[];let y=v.clone().lerp(_,I/w),M=x.clone().lerp(_,I/w),D=w-I;for(let L=0;L<=D;L++)L===0&&I===w?T[I][L]=y:T[I][L]=y.clone().lerp(M,L/D)}for(let I=0;I<w;I++)for(let y=0;y<2*(w-I)-1;y++){let M=Math.floor(y/2);y%2===0?(d(T[I][M+1]),d(T[I+1][M]),d(T[I][M])):(d(T[I][M+1]),d(T[I+1][M+1]),d(T[I+1][M]))}}function l(v){let x=new E;for(let _=0;_<r.length;_+=3)x.x=r[_+0],x.y=r[_+1],x.z=r[_+2],x.normalize().multiplyScalar(v),r[_+0]=x.x,r[_+1]=x.y,r[_+2]=x.z}function h(){let v=new E;for(let x=0;x<r.length;x+=3){v.x=r[x+0],v.y=r[x+1],v.z=r[x+2];let _=m(v)/2/Math.PI+.5,S=p(v)/Math.PI+.5;a.push(_,1-S)}g(),u()}function u(){for(let v=0;v<a.length;v+=6){let x=a[v+0],_=a[v+2],S=a[v+4],w=Math.max(x,_,S),T=Math.min(x,_,S);w>.9&&T<.1&&(x<.2&&(a[v+0]+=1),_<.2&&(a[v+2]+=1),S<.2&&(a[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function f(v,x){let _=v*3;x.x=e[_+0],x.y=e[_+1],x.z=e[_+2]}function g(){let v=new E,x=new E,_=new E,S=new E,w=new oe,T=new oe,I=new oe;for(let y=0,M=0;y<r.length;y+=9,M+=6){v.set(r[y+0],r[y+1],r[y+2]),x.set(r[y+3],r[y+4],r[y+5]),_.set(r[y+6],r[y+7],r[y+8]),w.set(a[M+0],a[M+1]),T.set(a[M+2],a[M+3]),I.set(a[M+4],a[M+5]),S.copy(v).add(x).add(_).divideScalar(3);let D=m(S);b(w,M+0,v,D),b(T,M+2,x,D),b(I,M+4,_,D)}}function b(v,x,_,S){S<0&&v.x===1&&(a[x]=v.x-1),_.x===0&&_.z===0&&(a[x]=S/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.details)}};var Zr=class s extends Ml{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}};var Gi=class s extends Oe{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new E,d=new E,f=[],g=[],b=[],m=[];for(let p=0;p<=n;p++){let v=[],x=p/n,_=0;p===0&&a===0?_=.5/t:p===n&&c===Math.PI&&(_=-.5/t);for(let S=0;S<=t;S++){let w=S/t;u.x=-e*Math.cos(i+w*r)*Math.sin(a+x*o),u.y=e*Math.cos(a+x*o),u.z=e*Math.sin(i+w*r)*Math.sin(a+x*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),b.push(d.x,d.y,d.z),m.push(w+_,1-x),v.push(l++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<t;v++){let x=h[p][v+1],_=h[p][v],S=h[p+1][v],w=h[p+1][v+1];(p!==0||a>0)&&f.push(x,_,w),(p!==n-1||c<Math.PI)&&f.push(_,S,w)}this.setIndex(f),this.setAttribute("position",new He(g,3)),this.setAttribute("normal",new He(b,3)),this.setAttribute("uv",new He(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var vt=class extends Qt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Z(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Z(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ql,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Nn=class extends vt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new oe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return nn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Z(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Z(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Z(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Qr=class extends Qt{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Z(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Z(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ql,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ol,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function eo(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function o_(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function c_(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Kd(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let c=0;c!==e;++c)i[a++]=s[o+c]}return i}function Ef(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}var Vi=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},El=class extends Vi{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ws,endingEnd:Ws}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,a=e+1,o=i[r],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case qs:r=e,o=2*t-n;break;case io:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case qs:a=e,c=2*n-t;break;case io:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),b=g*g,m=b*g,p=-d*m+2*d*b-d*g,v=(1+d)*m+(-1.5-2*d)*b+(-.5+d)*g+1,x=(-1-f)*m+(1.5+f)*b+.5*g,_=f*m-f*b;for(let S=0;S!==o;++S)r[S]=p*a[h+S]+v*a[l+S]+x*a[c+S]+_*a[u+S];return r}},yo=class extends Vi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}},wl=class extends Vi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},On=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=eo(t,this.TimeBufferType),this.values=eo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:eo(e.times,Array),values:eo(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new wl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new yo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new El(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case er:t=this.InterpolantFactoryMethodDiscrete;break;case ds:t=this.InterpolantFactoryMethodLinear;break;case wc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return er;case this.InterpolantFactoryMethodLinear:return ds;case this.InterpolantFactoryMethodSmooth:return wc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&o_(i))for(let o=0,c=i.length;o!==c;++o){let l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===wc,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(i)c=!0;else{let u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let b=t[u+g];if(b!==t[d+g]||b!==t[f+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};On.prototype.TimeBufferType=Float32Array;On.prototype.ValueBufferType=Float32Array;On.prototype.DefaultInterpolation=ds;var Wi=class extends On{};Wi.prototype.ValueTypeName="bool";Wi.prototype.ValueBufferType=Array;Wi.prototype.DefaultInterpolation=er;Wi.prototype.InterpolantFactoryMethodLinear=void 0;Wi.prototype.InterpolantFactoryMethodSmooth=void 0;var Mo=class extends On{};Mo.prototype.ValueTypeName="color";var Mi=class extends On{};Mi.prototype.ValueTypeName="number";var Sl=class extends Vi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t),l=e*o;for(let h=l+o;l!==h;l+=4)at.slerpFlat(r,0,a,l-o,a,l,c);return r}},ri=class extends On{InterpolantFactoryMethodLinear(e){return new Sl(this.times,this.values,this.getValueSize(),e)}};ri.prototype.ValueTypeName="quaternion";ri.prototype.DefaultInterpolation=ds;ri.prototype.InterpolantFactoryMethodSmooth=void 0;var qi=class extends On{};qi.prototype.ValueTypeName="string";qi.prototype.ValueBufferType=Array;qi.prototype.DefaultInterpolation=er;qi.prototype.InterpolantFactoryMethodLinear=void 0;qi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ei=class extends On{};Ei.prototype.ValueTypeName="vector";var cr=class{constructor(e,t=-1,n,i=Vl){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Xn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(h_(n[a]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(On.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);let h=c_(c);c=Kd(c,1,h),l=Kd(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new Mi(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],h=l.name.match(r);if(h&&h.length>1){let u=h[1],d=i[u];d||(i[u]=d=[]),d.push(l)}}let a=[];for(let o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,d,f,g,b){if(f.length!==0){let m=[],p=[];Ef(f,m,p,g),m.length!==0&&b.push(new u(d,m,p))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let u=0;u<l.length;u++){let d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let b=0;b<d[g].morphTargets.length;b++)f[d[g].morphTargets[b]]=-1;for(let b in f){let m=[],p=[];for(let v=0;v!==d[g].morphTargets.length;++v){let x=d[g];m.push(x.time),p.push(x.morphTarget===b?1:0)}i.push(new Mi(".morphTargetInfluence["+b+"]",m,p))}c=f.length*a}else{let f=".bones["+t[u].name+"]";n(Ei,f+".position",d,"pos",i),n(ri,f+".quaternion",d,"rot",i),n(Ei,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,c,i,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function l_(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Mi;case"vector":case"vector2":case"vector3":case"vector4":return Ei;case"color":return Mo;case"quaternion":return ri;case"bool":case"boolean":return Wi;case"string":return qi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function h_(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=l_(s.type);if(s.times===void 0){let t=[],n=[];Ef(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}var Fi={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},Tl=class{constructor(e,t,n){let i=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},u_=new Tl,wi=class{constructor(e){this.manager=e!==void 0?e:u_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};wi.DEFAULT_MATERIAL_NAME="__DEFAULT";var pi={},Al=class extends Error{constructor(e,t){super(e),this.response=t}},$r=class extends wi{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Fi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(pi[e]!==void 0){pi[e].push({onLoad:t,onProgress:n,onError:i});return}pi[e]=[],pi[e].push({onLoad:t,onProgress:n,onError:i});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=pi[e],u=l.body.getReader(),d=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),f=d?parseInt(d):0,g=f!==0,b=0,m=new ReadableStream({start(p){v();function v(){u.read().then(({done:x,value:_})=>{if(x)p.close();else{b+=_.byteLength;let S=new ProgressEvent("progress",{lengthComputable:g,loaded:b,total:f});for(let w=0,T=h.length;w<T;w++){let I=h[w];I.onProgress&&I.onProgress(S)}p.enqueue(_),v()}})}}});return new Response(m)}else throw new Al(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o===void 0)return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{Fi.add(e,l);let h=pi[e];delete pi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{let h=pi[e];if(h===void 0)throw this.manager.itemError(e),l;delete pi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Rl=class extends wi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Fi.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let o=qr("img");function c(){h(),Fi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}};var lr=class extends wi{constructor(e){super(e)}load(e,t,n,i){let r=new Zt,a=new Rl(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},hr=class extends ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Z(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Eo=class extends hr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Z(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Zc=new be,Jd=new E,Zd=new E,ea=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new oe(512,512),this.map=null,this.mapPass=null,this.matrix=new be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new jr,this._frameExtents=new oe(1,1),this._viewportCount=1,this._viewports=[new Ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Jd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Jd),Zd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Zd),t.updateMatrixWorld(),Zc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Zc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Cl=class extends ea{constructor(){super(new yt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=tr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},ur=class extends hr{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Cl}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Qd=new be,Br=new E,Qc=new E,Pl=class extends ea{constructor(){super(new yt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new oe(4,2),this._viewportCount=6,this._viewports=[new Ke(2,1,1,1),new Ke(0,1,1,1),new Ke(3,1,1,1),new Ke(1,1,1,1),new Ke(3,0,1,1),new Ke(1,0,1,1)],this._cubeDirections=[new E(1,0,0),new E(-1,0,0),new E(0,0,1),new E(0,0,-1),new E(0,1,0),new E(0,-1,0)],this._cubeUps=[new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,0,1),new E(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Br.setFromMatrixPosition(e.matrixWorld),n.position.copy(Br),Qc.copy(n.position),Qc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Qc),n.updateMatrixWorld(),i.makeTranslation(-Br.x,-Br.y,-Br.z),Qd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qd)}},Xi=class extends hr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Pl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Ll=class extends ea{constructor(){super(new Bi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},dr=class extends hr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.shadow=new Ll}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var ji=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},wo=class extends Oe{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var So=class extends wi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Fi.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Fi.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),Fi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Fi.add(e,c),r.manager.itemStart(e)}};var Il=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,a;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,r=e*i+i,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[r+o]=n[o];a=t}else{a+=t;let o=t/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){o.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,a=i;r!==a;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){at.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){let a=this._workIndex*r;at.multiplyQuaternionsFlat(e,a,e,t,e,n),at.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,r){let a=1-i;for(let o=0;o!==r;++o){let c=t+o;e[c]=e[c]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,r){for(let a=0;a!==r;++a){let o=t+a;e[o]=e[o]+e[n+a]*i}}},Jl="\\[\\]\\.:\\/",d_=new RegExp("["+Jl+"]","g"),Zl="[^"+Jl+"]",f_="[^"+Jl.replace("\\.","")+"]",p_=/((?:WC+[\/:])*)/.source.replace("WC",Zl),m_=/(WCOD+)?/.source.replace("WCOD",f_),g_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Zl),b_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Zl),v_=new RegExp("^"+p_+m_+g_+b_+"$"),x_=["material","materials","bones","map"],Dl=class{constructor(e,t,n){let i=n||ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ut=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(d_,"")}static parseTrackName(e){let t=v_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);x_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[i];if(a===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ut.Composite=Dl;ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ut.prototype.GetterByBindingType=[ut.prototype._getValue_direct,ut.prototype._getValue_array,ut.prototype._getValue_arrayElement,ut.prototype._getValue_toArray];ut.prototype.SetterByBindingTypeAndVersioning=[[ut.prototype._setValue_direct,ut.prototype._setValue_direct_setNeedsUpdate,ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_array,ut.prototype._setValue_array_setNeedsUpdate,ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_arrayElement,ut.prototype._setValue_arrayElement_setNeedsUpdate,ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_fromArray,ut.prototype._setValue_fromArray_setNeedsUpdate,ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Fl=class{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let r=t.tracks,a=r.length,o=new Array(a),c={endingStart:Ws,endingEnd:Ws};for(let l=0;l!==a;++l){let h=r[l].createInterpolant(null);o[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Gl,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){let i=this._clip.duration,r=e._clip.duration,a=r/i,o=i/r;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,r=i.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);let c=o.parameterPositions,l=o.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/a,l[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case Gm:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(a),l[h].accumulateAdditive(o);break;case Vl:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(a),l[h].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,r=this._loopCount,a=n===zm;if(e===0)return r===-1?i:a&&(r&1)===1?t-i:i;if(n===zl){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){let o=Math.floor(i/t);i-=t*o,r+=Math.abs(o);let c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){let l=e<0;this._setEndings(l,!l,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=qs,i.endingEnd=qs):(e?i.endingStart=this.zeroSlopeAtStart?qs:Ws:i.endingStart=io,t?i.endingEnd=this.zeroSlopeAtEnd?qs:Ws:i.endingEnd=io)}_scheduleFading(e,t,n){let i=this._mixer,r=i.time,a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,c=a.sampleValues;return o[0]=r,c[0]=t,o[1]=r+e,c[1]=n,this}},__=new Float32Array(1),To=class extends vi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,a=e._propertyBindings,o=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName,h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==r;++u){let d=i[u],f=d.name,g=h[f];if(g!==void 0)++g.referenceCount,a[u]=g;else{if(g=a[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,f));continue}let b=t&&t._propertyBindings[u].binding.parsedPath;g=new Il(ut.create(n,f,b),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,f),a[u]=g}o[u].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,r=this._actionsByClip,a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{let o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,a=this._actionsByClip,o=a[r],c=o.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;let u=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],c.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,r=this._bindings,a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new yo(new Float32Array(2),new Float32Array(2),1,__),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let i=t||this._root,r=i.uuid,a=typeof e=="string"?cr.findByName(i,e):e,o=a!==null?a.uuid:e,c=this._actionsByClip[o],l=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Vl),c!==void 0){let u=c.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],a===null&&(a=l._clip)}if(a===null)return null;let h=new Fl(this,a,t,n);return this._bindAction(h,l),this._addInactiveAction(h,o,r),h}existingAction(e,t){let n=t||this._root,i=n.uuid,r=typeof e=="string"?cr.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,r,a);let o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let a=r.knownActions;for(let o=0,c=a.length;o!==c;++o){let l=a[o];this._deactivateAction(l);let h=l._cacheIndex,u=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let a in n){let o=n[a].actionByRoot,c=o[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(let a in r){let o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var Ao=class{constructor(e,t,n=0,i=1/0){this.ray=new fs(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Xr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Ul(e,this,n,t),n.sort($d),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Ul(e[i],this,n,t);return n.sort($d),n}};function $d(s,e){return s.distance-e.distance}function Ul(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){let i=s.children;for(let r=0,a=i.length;r<a;r++)Ul(i[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var wf={reed:{low:9,det:2.2,fine:.4,mount:330},forest:{low:24,det:6.5,fine:1.1,mount:440},mountain:{low:34,det:5.5,fine:1.2,mount:520,side:!0},meadow:{low:22,det:3.2,fine:.5,mount:380}},kt={id:"reed",...wf.reed};function Sf(s){Object.assign(kt,{side:!1},wf[s],{id:s})}function rt(s,e){let t=Math.imul(s,374761393)+Math.imul(e,668265263)|0;return t=Math.imul(t^t>>>13,1274126177),t^=t>>>16,(t>>>0)/4294967295}function an(s,e){let t=Math.floor(s),n=Math.floor(e),i=s-t,r=e-n;i=i*i*(3-2*i),r=r*r*(3-2*r);let a=rt(t,n),o=rt(t+1,n),c=rt(t,n+1),l=rt(t+1,n+1);return a+(o-a)*i+(c-a)*r+(a-o-c+l)*i*r}function na(s,e){return kt.low*((an(s/1e3+11.3,e/1e3+7.1)-.5)*1.34+(an(s/500+3.7,e/500+1.9)-.5)*.66)}function Ql(s,e){return kt.det*(an(s/165+5.5,e/165+2.2)-.5)*2+kt.fine*(an(s/40+9.1,e/40+4.4)-.5)*2}function $l(s,e){let t=0,n=.62,i=1/1500;for(let r=0;r<4;r++){let a=an(s*i+31.7*r,e*i+17.3*r),o=1-Math.abs(a*2-1);t+=n*o*o,n*=.45,i*=2.1}return kt.mount*t}var Tf=`
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
`;var Tt={halfWidth:4.6,chunkLen:120,step:2},Rf=s=>.9*Math.sin(.0021*s+1)+.5*Math.sin(.0053*s+2.2)+.25*Math.sin(.0117*s+.3),y_=Rf(0),Kn={period:2600,start:450,len:800,ramp:70},Af=(s,e,t)=>{let n=Math.min(1,Math.max(0,(t-s)/(e-s)));return n*n*(3-2*n)},M_=s=>.07*Math.sin(.9*s)+.045*Math.sin(1.37*s+1.3)+.05*Math.sin(.31*s+2),Io=class{constructor(){this.pts=[{x:0,z:0,y:na(0,0)}],this.dirt=!1}dirtAt(e){if(!this.dirt)return 0;let t=(e%Kn.period+Kn.period)%Kn.period;return Af(Kn.start,Kn.start+Kn.ramp,t)*(1-Af(Kn.start+Kn.len-Kn.ramp,Kn.start+Kn.len,t))}_y(e,t,n){return na(e,t)+this.dirtAt(n)*M_(n)}heading(e){return Rf(e)-y_}ensure(e){this._ensure(Math.ceil(e/Tt.step)+1)}_ensure(e){let{step:t}=Tt;for(;this.pts.length<=e+1;){let n=this.pts.length-1,i=this.heading(n*t+t/2),r=this.pts[n],a=r.x-Math.sin(i)*t,o=r.z-Math.cos(i)*t;this.pts.push({x:a,z:o,y:this._y(a,o,(n+1)*t)})}}recomputeHeights(){this.pts.forEach((e,t)=>{e.y=this._y(e.x,e.z,t*Tt.step)})}at(e,t={}){let{step:n}=Tt;e<0&&(e=0);let i=Math.floor(e/n);this._ensure(i+1);let r=(e-i*n)/n,a=this.pts[i],o=this.pts[i+1];return t.x=a.x+(o.x-a.x)*r,t.z=a.z+(o.z-a.z)*r,t.y=a.y+(o.y-a.y)*r,t.th=this.heading(e),t}};function eh(s,e=!1){let t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,c=new Oe,l=0;for(let h=0;h<s.length;++h){let u=s[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(t){let h=0,u=[];for(let d=0;d<s.length;++d){let f=s[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=s[d].attributes.position.count}c.setIndex(u)}for(let h in r){let u=Cf(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let b=0;b<a[h].length;++b)f.push(a[h][b][d]);let g=Cf(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function Cf(s){let e,t,n,i=-1,r=0;for(let l=0;l<s.length;++l){let h=s[l];if(h.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.array.length}let a=new e(r),o=0;for(let l=0;l<s.length;++l)a.set(s[l].array,o),o+=s[l].array.length;let c=new ve(a,t,n);return i!==void 0&&(c.gpuType=i),c}function Pf(s,e=1e-4){e=Math.max(e,Number.EPSILON);let t={},n=s.getIndex(),i=s.getAttribute("position"),r=n?n.count:i.count,a=0,o=Object.keys(s.attributes),c={},l={},h=[],u=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let v=0,x=o.length;v<x;v++){let _=o[v],S=s.attributes[_];c[_]=new ve(new S.array.constructor(S.count*S.itemSize),S.itemSize,S.normalized);let w=s.morphAttributes[_];w&&(l[_]=new ve(new w.array.constructor(w.count*w.itemSize),w.itemSize,w.normalized))}let f=e*.5,g=Math.log10(1/e),b=Math.pow(10,g),m=f*b;for(let v=0;v<r;v++){let x=n?n.getX(v):v,_="";for(let S=0,w=o.length;S<w;S++){let T=o[S],I=s.getAttribute(T),y=I.itemSize;for(let M=0;M<y;M++)_+=`${~~(I[u[M]](x)*b+m)},`}if(_ in t)h.push(t[_]);else{for(let S=0,w=o.length;S<w;S++){let T=o[S],I=s.getAttribute(T),y=s.morphAttributes[T],M=I.itemSize,D=c[T],L=l[T];for(let k=0;k<M;k++){let P=u[k],F=d[k];if(D[F](a,I[P](x)),y)for(let U=0,B=y.length;U<B;U++)L[U][F](a,y[U][P](x))}}t[_]=a,h.push(a),a++}}let p=s.clone();for(let v in s.attributes){let x=c[v];if(p.setAttribute(v,new ve(x.array.slice(0,a*x.itemSize),x.itemSize,x.normalized)),v in l)for(let _=0;_<l[v].length;_++){let S=l[v][_];p.morphAttributes[v][_]=new ve(S.array.slice(0,a*S.itemSize),S.itemSize,S.normalized)}}return p.setIndex(h),p}function th(s,e){if(e===hf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===ta||e===Co){let t=s.getIndex();if(t===null){let a=[],o=s.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===ta)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}function ia(s,e){let t=document.createElement("canvas");return t.width=s,t.height=e,[t,t.getContext("2d")]}function Lf(s){let[n,i]=ia(512,512);i.fillStyle="#3c3f45",i.fillRect(0,0,512,512);let r=i.getImageData(0,0,512,512);for(let h=0;h<r.data.length;h+=4){let u=(Math.random()-.5)*30;r.data[h]+=u,r.data[h+1]+=u,r.data[h+2]+=u}i.putImageData(r,0,0);let a=512/(Tt.halfWidth*2);for(let h of[.27,.73]){let u=i.createLinearGradient((h-.09)*512,0,(h+.09)*512,0);u.addColorStop(0,"rgba(0,0,0,0)"),u.addColorStop(.5,"rgba(0,0,0,0.22)"),u.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=u,i.fillRect((h-.09)*512,0,.18*512,512)}i.fillStyle="#dcdcd4";let o=.16*a,c=.35*a;i.fillRect(c,0,o,512),i.fillRect(512-c-o,0,o,512),i.fillStyle="#e9d36a",i.fillRect(512/2-o/2,0,o,512/3);let l=new _n(n);return l.colorSpace=it,l.wrapS=l.wrapT=jn,l.anisotropy=s.capabilities.getMaxAnisotropy(),l}function pr(){let[s,e]=ia(128,128),t=e.createRadialGradient(64,64,0,64,64,64);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.2,"rgba(255,255,255,0.55)"),t.addColorStop(.5,"rgba(255,255,255,0.12)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128);let n=new _n(s);return n.colorSpace=it,n}function ih(s){let e=s>>>0;return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function If(){let[t,n]=ia(128,360),i=ih(5),r=128/2;n.strokeStyle="#c9bb8e",n.lineWidth=2.2,n.lineCap="round",n.beginPath(),n.moveTo(r,360),n.quadraticCurveTo(r+2,360*.66,r,360*.46),n.stroke();let a=4,o=360*.5,c=u=>5+50*Math.pow(Math.sin(Math.min(1,u*1.15)*Math.PI*.55),.85)*Math.pow(1-u,.6);n.fillStyle="rgba(250,246,234,0.6)",n.beginPath();for(let u=0;u<=24;u++){let d=u/24;n.lineTo(r+c(d)*.6,o-d*(o-a))}for(let u=24;u>=0;u--){let d=u/24;n.lineTo(r-c(d)*.6,o-d*(o-a))}n.closePath(),n.fill();let l=["#ffffff","#fffcf4","#f6f0df","#ede5cf","#fffef9"];for(let u=0;u<1500;u++){let d=Math.pow(i(),.85),f=o-d*(o-a)+i()*6,g=c(d),b=r+(i()*2-1)*g*(.4+.7*i()),m=f-6-i()*30;n.strokeStyle=l[Math.floor(i()*l.length)],n.globalAlpha=.35+i()*.55,n.lineWidth=.7+i()*1.5,n.beginPath(),n.moveTo(r+(i()-.5)*5,f),n.quadraticCurveTo((r+b)/2+(i()-.5)*10,(f+m)/2,b,m),n.stroke()}n.globalAlpha=1;let h=new _n(t);return h.colorSpace=it,h.anisotropy=4,h}function Df(s){let[t,n]=ia(512,512),i=ih(23);n.fillStyle="#d6d6d6",n.fillRect(0,0,512,512),n.lineCap="round";for(let a=0;a<16e3;a++){let o=i()*512,c=i()*512,l=3+i()*11,h=-Math.PI/2+(i()-.5)*1.1,u=Math.cos(h)*l,d=Math.sin(h)*l,f=Math.floor(150+i()*105);n.strokeStyle=`rgb(${f},${f},${f})`,n.globalAlpha=.35+i()*.5,n.lineWidth=.7+i()*1.3;for(let g of[-512,0,512])for(let b of[-512,0,512]){let m=o+g,p=c+b;m<-20||m>532||p<-20||p>532||(n.beginPath(),n.moveTo(m,p),n.lineTo(m+u,p+d),n.stroke())}}n.globalAlpha=1;let r=new _n(t);return r.colorSpace=it,r.wrapS=r.wrapT=jn,r.anisotropy=s.capabilities.getMaxAnisotropy(),r}function Ff(){let[t,n]=ia(512,256),i=ih(77),r=[];for(let u=0;u<9;u++){let d=i()*Math.PI*2,f=i()*62;r.push([128+Math.cos(d)*f*1.15,120+Math.sin(d)*f*.85,38+i()*34])}let a=(u,d)=>r.some(([f,g,b])=>(u-f)**2+(d-g)**2<b*b),o=["#2f5522","#3d6a2a","#4c7d32","#5c9038","#6fa443","#87b851"];for(let u=0;u<2600;u++){let d=8+i()*240,f=8+i()*230;if(!a(d,f))continue;let g=1-f/256,b=Math.min(o.length-1,Math.floor((i()*.7+g*.55)*o.length));n.fillStyle=o[b],n.beginPath(),n.ellipse(d,f,3+i()*5,2+i()*3.5,i()*Math.PI,0,Math.PI*2),n.fill()}let c=320,l=["#22402a","#2b4f31","#355e39","#3f6d41","#4d7d4a"];for(let u=0;u<2400;u++){let d=Math.pow(i(),.8),f=6+d*236,g=d*7%1,b=(6+d*58)*(.55+.45*g),m=c+(i()*2-1)*b*.25,p=c+(i()*2-1)*b,v=f+4+Math.abs(p-c)*.18+i()*6;n.strokeStyle=l[Math.min(l.length-1,Math.floor((i()*.8+(1-d)*.4)*l.length))],n.lineWidth=1+i()*2.2,n.beginPath(),n.moveTo(m,f),n.lineTo(p,v),n.stroke()}n.fillStyle="#5a4434",n.fillRect(448,0,64,64);let h=new _n(t);return h.colorSpace=it,h.anisotropy=4,h}var nh={};function gs(s,e,{srgb:t=!0,repeat:n=!0}={}){if(nh[s])return nh[s];let i=new lr().load("assets/tex/"+s+".webp");return t&&(i.colorSpace=it),n&&(i.wrapS=i.wrapT=jn),i.anisotropy=Math.min(8,e.capabilities.getMaxAnisotropy()),nh[s]=i,i}var ai={uMistD:{value:0},uMistH:{value:12},uMistBase:{value:0},uMistCover:{value:.5},uMistT:{value:0},uMistWind:{value:new oe},uMistColor:{value:new Z}};function Uf(){let s=Pe;s.fog_pars_vertex=`
#ifdef USE_FOG
  varying float vFogDepth;
  varying vec3 vFogWorld;
#endif`,s.fog_vertex=`
#ifdef USE_FOG
  vFogDepth = - mvPosition.z;
  vFogWorld = ( mvPosition.xyz - viewMatrix[ 3 ].xyz ) * mat3( viewMatrix );
#endif`,s.fog_pars_fragment=`
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
#endif`,s.fog_fragment=`
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
#endif`}function on(s){let e=s.onBeforeCompile,t=s.customProgramCacheKey,n=e&&e!==Qt.prototype.onBeforeCompile;s.onBeforeCompile=function(r,a){n&&e.call(this,r,a),Object.assign(r.uniforms,ai)};let i=(n?e.toString():"")+(t?t.call(s):"");return s.customProgramCacheKey=()=>i+"#mist",s.needsUpdate=!0,s}var{halfWidth:Si,chunkLen:mr,step:Do}=Tt,Nf=7,sh=1;var E_=s=>s.index?s.toNonIndexed():s;function w_(s){return eh(s.map(e=>{let t=E_(e);return t.deleteAttribute("uv"),t}))}function Of(s,e){let t=[],n=[],i=[],r=[],[a,o,c]=s.center,l=(f,g,b,m,p)=>{let v=new E(f-a,(g-o)*.7,b-c).normalize().add(new E(0,.35,0)).normalize();t.push(f,g,b),n.push(v.x,v.y,v.z),i.push(m,p)};for(let f of s.yaws){let g=Math.cos(f),b=Math.sin(f),m=t.length/3,p=s.w/2,v=s.h/2;l(a-p*g,o-v,c-p*b,s.u0,0),l(a+p*g,o-v,c+p*b,s.u1,0),l(a+p*g,o+v,c+p*b,s.u1,1),l(a-p*g,o+v,c-p*b,s.u0,1),r.push(m,m+1,m+2,m,m+2,m+3)}if(s.top){let f=t.length/3,g=s.top/2,b=s.topY;l(a-g,b,c-g,s.u0,0),l(a+g,b,c-g,s.u1,0),l(a+g,b,c+g,s.u1,1),l(a-g,b,c+g,s.u0,1),r.push(f,f+1,f+2,f,f+2,f+3)}let h=new Oe;h.setAttribute("position",new He(t,3)),h.setAttribute("normal",new He(n,3)),h.setAttribute("uv",new He(i,2)),h.setIndex(r);let u=new yi(e.r0,e.r1,e.h,6).translate(0,e.h/2,0),d=u.attributes.uv;for(let f=0;f<d.count;f++)d.setXY(f,.94,.88);return eh([u,h])}function Bf(){return Of({center:[0,4.7,0],w:5.4,h:5,yaws:[0,Math.PI/3,2*Math.PI/3],u0:0,u1:.5,top:4.4,topY:5},{r0:.16,r1:.26,h:3})}function kf(){return Of({center:[0,5.1,0],w:3.8,h:8.2,yaws:[0,Math.PI/3,2*Math.PI/3],u0:.5,u1:.75},{r0:.13,r1:.22,h:1.8})}function S_(){return w_([new yi(.07,.1,7.4,6).translate(0,3.7,0),new Nt(1.9,.08,.1).translate(-.9,7.4,0),new Nt(.5,.1,.22).translate(-1.75,7.33,0)])}var T_=`#include <common>
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
}`,A_=`
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
`,R_=`
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
}`,Fo=class{constructor(e,t,n){this.scene=e,this.road=t,this.chunks=new Map,this.queue=[],this.tmp={},this.map="reed",this.lastS=150,this.roadMat=new vt({map:Lf(n),roughness:.9,metalness:0,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),this.roadU={uWet:{value:0},uPuddle:{value:0},uRain:{value:0},uRainT:{value:0},uReflTex:{value:null},uReflMat:{value:new be},uReflOn:{value:0},uPlaneY:{value:0},uSunHide:{value:0},uDirtTex:{value:gs("dirt",n)},uGrassCol:{value:new Z("#5c6b34")}},this.roadMat.onBeforeCompile=r=>{Object.assign(r.uniforms,this.roadU),r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vRW;
attribute float aDirt;
varying float vDirt;`).replace("#include <project_vertex>",`#include <project_vertex>
vRW = (modelMatrix * vec4(transformed, 1.0)).xyz;
vDirt = aDirt;`),r.fragmentShader=r.fragmentShader.replace("#include <common>",T_).replace("#include <map_fragment>",`#include <map_fragment>
`+A_).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
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
reflectedLight.directSpecular *= 1.0 - uSunHide * puddle;`).replace("#include <opaque_fragment>",R_+`
#include <opaque_fragment>`)},this.railMat=new vt({color:12172996,roughness:.35,metalness:.75,side:dt}),this.poleMat=new vt({color:4869973,roughness:.6,metalness:.4}),this.postMat=new vt({color:15263968,roughness:.7}),this.bulbMat=new Ct({color:16767392,toneMapped:!1});let i=pr();this.poolMat=new Ct({map:i,color:16761466,transparent:!0,opacity:0,depthWrite:!1,blending:Jt,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}),this.glowMat=new _i({map:i,color:16763274,size:9,transparent:!0,opacity:0,depthWrite:!1,blending:Jt,sizeAttenuation:!0});for(let r of[this.roadMat,this.poleMat,this.postMat,this.bulbMat,this.poolMat,this.glowMat,this.railMat])on(r);this.lampGeo=S_(),this.railPostGeo=new Nt(.12,.8,.12).translate(0,.4,0),this.postGeo=new Nt(.12,.95,.12).translate(0,.475,0),this.poolGeo=new gn(15,15).rotateX(-Math.PI/2),this.bulbGeo=new Gi(.2,8,6)}setMap(e){this.map=e;for(let t of this.chunks.values())this._dispose(t);this.chunks.clear(),this.queue.length=0,this.prime(this.lastS)}update(e,t=2){this.lastS=e;let n=Math.floor(e/mr);for(let i=Math.max(0,n-sh);i<=n+Nf;i++)!this.chunks.has(i)&&!this.queue.includes(i)&&this.queue.push(i);this.queue.sort((i,r)=>i-r);for(let i=0;i<t&&this.queue.length;i++){let r=this.queue.shift();r>=n-sh&&r<=n+Nf&&this._build(r)}for(let[i,r]of this.chunks)i<n-sh&&(this._dispose(r),this.chunks.delete(i))}prime(e){this.update(e,999)}apply(e){let t=e.lamps,n=new Z(9079430).lerp(new Z(16767392),t);this.bulbMat.color.copy(n).multiplyScalar(.6+1.6*t),this.poolMat.opacity=t*.55,this.glowMat.opacity=t*.9,this.roadMat.roughness=.92-.3*e.wet,this.roadMat.envMapIntensity=.38+.3*e.wet;let i=(1-.4*e.wet)*(1-.25*e.dark);this.roadMat.color.setRGB(i,i,i);let r=this.roadU;r.uWet.value=e.wet,r.uPuddle.value=e.wet,r.uRain.value=e.rain,r.uSunHide.value=Math.min(1,e.overcast*1.2+e.rain)}setReflection(e,t){let n=this.roadU;n.uRainT.value=t,n.uReflOn.value=e.active?1:0,e.active&&(n.uReflTex.value=e.rt.texture,n.uReflMat.value.copy(e.texMatrix),n.uPlaneY.value=e.planeY)}_build(e){let t=new Je,n=this.road,i=e*mr,r=this.tmp,a=mr/Do,o=new Float32Array((a+1)*6),c=new Float32Array((a+1)*4),l=new Float32Array((a+1)*6),h=new Float32Array((a+1)*2),u=[];for(let F=0;F<=a;F++){let U=i+F*Do;n.at(U,r);let B=Math.cos(r.th),O=-Math.sin(r.th),z=r.y+.05;o.set([r.x-B*Si,z,r.z-O*Si,r.x+B*Si,z,r.z+O*Si],F*6),c.set([0,U/12,1,U/12],F*4),l.set([0,1,0,0,1,0],F*6);let Y=n.dirtAt(U);if(h[F*2]=h[F*2+1]=Y,F<a){let K=F*2;u.push(K,K+1,K+2,K+1,K+3,K+2)}}let d=new Oe;d.setAttribute("position",new ve(o,3)),d.setAttribute("normal",new ve(l,3)),d.setAttribute("uv",new ve(c,2)),d.setAttribute("aDirt",new ve(h,1)),d.setIndex(u),d.computeVertexNormals();let f=new Ne(d,this.roadMat);f.receiveShadow=!0,f.layers.set(3),t.add(f),t.userData.own=[d];let g=[];for(let F=i;F<i+mr;F+=12)if(!(n.dirtAt(F)>.05)){n.at(F,r);for(let U of this.map==="mountain"?[-1]:[-1,1])g.push([r.x+Math.cos(r.th)*(Si+.7)*U,r.y,r.z-Math.sin(r.th)*(Si+.7)*U])}let b=new rn(this.postGeo,this.postMat,g.length),m=new be;if(g.forEach(([F,U,B],O)=>{m.makeTranslation(F,U,B),b.setMatrixAt(O,m)}),t.add(b),this.map==="mountain"){let F=mr/Do,U=new Float32Array((F+1)*6),B=[],O=[];for(let Q=0;Q<=F;Q++){let G=i+Q*Do;n.at(G,r);let J=r.x+Math.cos(r.th)*(Si+.55),$=r.z-Math.sin(r.th)*(Si+.55);if(U.set([J,r.y+.5,$,J,r.y+.82,$],Q*6),Q<F){let le=Q*2;B.push(le,le+2,le+1,le+1,le+2,le+3)}Q%2===0&&O.push([J,r.y,$])}let z=new Oe;z.setAttribute("position",new ve(U,3)),z.setIndex(B),z.computeVertexNormals();let Y=new Ne(z,this.railMat);Y.castShadow=!0,t.add(Y),t.userData.own.push(z);let K=new rn(this.railPostGeo,this.poleMat,O.length);O.forEach(([Q,G,J],$)=>{m.makeTranslation(Q,G,J),K.setMatrixAt($,m)}),t.add(K)}let p=[],v=[],x=[],_=this.map==="reed"?2:1,S=mr/_;for(let F=0;F<_;F++){let U=i+F*S+6;if(n.dirtAt(U)>.05)continue;n.at(U,r);let B=this.map==="mountain"?-1:Math.round(U/S)%2?1:-1,O=Si+1.4,z=r.x+Math.cos(r.th)*O*B,Y=r.z-Math.sin(r.th)*O*B,K=r.th+(B===1?0:Math.PI);p.push([z,r.y,Y,K]);let Q=-Math.cos(K)*1.75,G=Math.sin(K)*1.75;v.push([z+Q,r.y+7.25,Y+G]),x.push([z+Q*1.4,r.y+.08,Y+G*1.4])}let w=new rn(this.lampGeo,this.poleMat,p.length),T=new at,I=new E(0,1,0),y=new E(1,1,1),M=new E;p.forEach(([F,U,B,O],z)=>{T.setFromAxisAngle(I,O),m.compose(M.set(F,U,B),T,y),w.setMatrixAt(z,m)}),w.castShadow=!0,t.add(w);let D=new rn(this.bulbGeo,this.bulbMat,v.length);v.forEach(([F,U,B],O)=>{m.makeTranslation(F,U,B),D.setMatrixAt(O,m)}),t.add(D);let L=new rn(this.poolGeo,this.poolMat,x.length);x.forEach(([F,U,B],O)=>{m.makeTranslation(F,U,B),L.setMatrixAt(O,m)}),L.renderOrder=2,t.add(L);let k=new Oe;k.setAttribute("position",new He(v.flat(),3));let P=new xn(k,this.glowMat);P.frustumCulled=!1,P.renderOrder=3,t.add(P),t.userData.own.push(k),this.scene.add(t),this.chunks.set(e,t)}_dispose(e){this.scene.remove(e),e.userData.own.forEach(t=>t.dispose()),e.traverse(t=>{t.isInstancedMesh&&t.dispose()})}};var Ji=class extends wi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new uh(t)}),this.register(function(t){return new _h(t)}),this.register(function(t){return new yh(t)}),this.register(function(t){return new Mh(t)}),this.register(function(t){return new fh(t)}),this.register(function(t){return new ph(t)}),this.register(function(t){return new mh(t)}),this.register(function(t){return new gh(t)}),this.register(function(t){return new hh(t)}),this.register(function(t){return new bh(t)}),this.register(function(t){return new dh(t)}),this.register(function(t){return new xh(t)}),this.register(function(t){return new vh(t)}),this.register(function(t){return new ch(t)}),this.register(function(t){return new Eh(t)}),this.register(function(t){return new wh(t)})}load(e,t,n,i){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=ji.extractUrlBase(e);a=ji.resolveURL(l,this.path)}else a=ji.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new $r(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Wf){try{a[$e.KHR_BINARY_GLTF]=new Sh(e)}catch(u){i&&i(u);return}r=JSON.parse(a[$e.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Ih(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case $e.KHR_MATERIALS_UNLIT:a[u]=new lh;break;case $e.KHR_DRACO_MESH_COMPRESSION:a[u]=new Th(r,this.dracoLoader);break;case $e.KHR_TEXTURE_TRANSFORM:a[u]=new Ah;break;case $e.KHR_MESH_QUANTIZATION:a[u]=new Rh;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function C_(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}var $e={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},ch=class{constructor(e){this.parser=e,this.name=$e.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new Z(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Ut);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new dr(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Xi(h),l.distance=u;break;case"spot":l=new ur(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Ki(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},lh=class{constructor(){this.name=$e.KHR_MATERIALS_UNLIT}getMaterialType(){return Ct}extendParams(e,t,n){let i=[];e.color=new Z(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Ut),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,it))}return Promise.all(i)}},hh=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},uh=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new oe(o,o)}return Promise.all(r)}},dh=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}},fh=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Z(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Ut)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,it)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}},ph=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}},mh=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Z().setRGB(o[0],o[1],o[2],Ut),Promise.all(r)}},gh=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nn}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},bh=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new Z().setRGB(o[0],o[1],o[2],Ut),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,it)),Promise.all(r)}},vh=class{constructor(e){this.parser=e,this.name=$e.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}},xh=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}},_h=class{constructor(e){this.parser=e,this.name=$e.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},yh=class{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Mh=class{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Eh=class{constructor(e){this.name=$e.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}},wh=class{constructor(e){this.name=$e.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==Bn.TRIANGLES&&l.mode!==Bn.TRIANGLE_STRIP&&l.mode!==Bn.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(let g of u){let b=new be,m=new E,p=new at,v=new E(1,1,1),x=new rn(g.geometry,g.material,d);for(let _=0;_<d;_++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,_),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,_),c.SCALE&&v.fromBufferAttribute(c.SCALE,_),x.setMatrixAt(_,b.compose(m,p,v));for(let _ in c)if(_==="_COLOR_0"){let S=c[_];x.instanceColor=new Yn(S.array,S.itemSize,S.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&g.geometry.setAttribute(_,c[_]);ft.prototype.copy.call(x,g),this.parser.assignFinalMaterial(x),f.push(x)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},Wf="glTF",sa=12,Hf={JSON:1313821514,BIN:5130562},Sh=class{constructor(e){this.name=$e.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,sa),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Wf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-sa,r=new DataView(e,sa),a=0;for(;a<i;){let o=r.getUint32(a,!0);a+=4;let c=r.getUint32(a,!0);if(a+=4,c===Hf.JSON){let l=new Uint8Array(e,sa+a,o);this.content=n.decode(l)}else if(c===Hf.BIN){let l=sa+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Th=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=$e.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let h in a){let u=Ph[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=Ph[h]||h.toLowerCase();if(a[h]!==void 0){let d=n.accessors[e.attributes[h]],f=gr[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(let g in f.attributes){let b=f.attributes[g],m=c[g];m!==void 0&&(b.normalized=m)}u(f)},o,l,Ut,d)})})}},Ah=class{constructor(){this.name=$e.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Rh=class{constructor(){this.name=$e.KHR_MESH_QUANTIZATION}},Uo=class extends Vi{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,g=e*l,b=g-l,m=-2*f+3*d,p=f-d,v=1-m,x=p-d+u;for(let _=0;_!==o;_++){let S=a[b+_+o],w=a[b+_+c]*h,T=a[g+_+o],I=a[g+_]*h;r[_]=v*S+x*w+m*T+p*I}return r}},P_=new at,Ch=class extends Uo{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return P_.fromArray(r).normalize().toArray(r),r}},Bn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},gr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},zf={9728:Ft,9729:qt,9984:no,9985:kl,9986:kr,9987:Oi},Gf={33071:An,33648:Wr,10497:jn},rh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ph={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Yi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},L_={CUBICSPLINE:void 0,LINEAR:ds,STEP:er},ah={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function I_(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new vt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:si})),s.DefaultMaterial}function bs(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Ki(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function D_(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;a.push(d)}if(i){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;o.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],d=l[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function F_(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function U_(s){let e,t=s.extensions&&s.extensions[$e.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+oh(t.attributes):e=s.indices+":"+oh(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+oh(s.targets[n]);return e}function oh(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Lh(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function N_(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var O_=new be,Ih=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new C_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new lr(this.options.manager):this.textureLoader=new So(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new $r(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return bs(r,o,i),Ki(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let a=t[i].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,h]of a.children.entries())r(h,o.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[$e.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,a){n.load(ji.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let a=rh[i.type],o=gr[i.componentType],c=i.normalized===!0,l=new o(i.count*a);return Promise.resolve(new ve(l,a,c))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],c=rh[i.type],l=gr[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0,b,m;if(f&&f!==u){let p=Math.floor(d/f),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count,x=t.cache.get(v);x||(b=new l(o,p*f,i.count*f/h),x=new ar(b,f/h),t.cache.add(v,x)),m=new ps(x,c,d%f/h,g)}else o===null?b=new l(i.count*c):b=new l(o,d,i.count*c),m=new ve(b,c,g);if(i.sparse!==void 0){let p=rh.SCALAR,v=gr[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,_=i.sparse.values.byteOffset||0,S=new v(a[1],x,i.sparse.count*p),w=new l(a[2],_,i.sparse.count*c);o!==null&&(m=new ve(m.array.slice(),m.itemSize,m.normalized));for(let T=0,I=S.length;T<I;T++){let y=S[T];if(m.setX(y,w[T*c]),c>=2&&m.setY(y,w[T*c+1]),c>=3&&m.setZ(y,w[T*c+2]),c>=4&&m.setW(y,w[T*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let i=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return h.magFilter=zf[d.magFilter]||qt,h.minFilter=zf[d.minFilter]||Oi,h.wrapS=Gf[d.wrapS]||jn,h.wrapT=Gf[d.wrapT]||jn,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=i.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(u){l=!0;let d=new Blob([u],{type:a.mimeType});return c=o.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(b){let m=new Zt(b);m.needsUpdate=!0,d(m)}),t.load(ji.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return l===!0&&o.revokeObjectURL(c),u.userData.mimeType=a.mimeType||N_(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[$e.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[$e.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=r.associations.get(a);a=r.extensions[$e.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new _i,Qt.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new ms,Qt.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return vt}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],a,o={},c=r.extensions||{},l=[];if(c[$e.KHR_MATERIALS_UNLIT]){let u=i[$e.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),l.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new Z(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Ut),o.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",u.baseColorTexture,it)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=dt);let h=r.alphaMode||ah.OPAQUE;if(h===ah.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===ah.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Ct&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new oe(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==Ct&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Ct){let u=r.emissiveFactor;o.emissive=new Z().setRGB(u[0],u[1],u[2],Ut)}return r.emissiveTexture!==void 0&&a!==Ct&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,it)),Promise.all(l).then(function(){let u=new a(o);return r.name&&(u.name=r.name),Ki(u,r),t.associations.set(u,{materials:e}),r.extensions&&bs(i,u,r),u})}createUniqueName(e){let t=ut.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[$e.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Vf(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],h=U_(l),u=i[h];if(u)a.push(u.promise);else{let d;l.extensions&&l.extensions[$e.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=Vf(new Oe,l,t),i[h]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let h=a[c].material===void 0?I_(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,g=h.length;f<g;f++){let b=h[f],m=a[f],p,v=l[f];if(m.mode===Bn.TRIANGLES||m.mode===Bn.TRIANGLE_STRIP||m.mode===Bn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new vo(b,v):new Ne(b,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Bn.TRIANGLE_STRIP?p.geometry=th(p.geometry,Co):m.mode===Bn.TRIANGLE_FAN&&(p.geometry=th(p.geometry,ta));else if(m.mode===Bn.LINES)p=new zi(b,v);else if(m.mode===Bn.LINE_STRIP)p=new or(b,v);else if(m.mode===Bn.LINE_LOOP)p=new _o(b,v);else if(m.mode===Bn.POINTS)p=new xn(b,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&F_(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Ki(p,r),m.extensions&&bs(i,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&bs(i,u[0],r),u[0];let d=new Je;r.extensions&&bs(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new yt(Cn.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Bi(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Ki(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),a=i,o=[],c=[];for(let l=0,h=a.length;l<h;l++){let u=a[l];if(u){o.push(u);let d=new be;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new xo(o,c)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],c=[],l=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){let f=i.channels[u],g=i.samplers[f.sampler],b=f.target,m=b.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,v=i.parameters!==void 0?i.parameters[g.output]:g.output;b.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",v)),l.push(g),h.push(b))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],g=u[2],b=u[3],m=u[4],p=[];for(let v=0,x=d.length;v<x;v++){let _=d[v],S=f[v],w=g[v],T=b[v],I=m[v];if(_===void 0)continue;_.updateMatrix&&_.updateMatrix();let y=n._createAnimationTracks(_,S,w,T,I);if(y)for(let M=0;M<y.length;M++)p.push(y[M])}return new cr(r,void 0,p)})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));let c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){let h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,O_)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(r.isBone===!0?h=new Jr:l.length>1?h=new Je:l.length===1?h=l[0]:h=new ft,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=a),Ki(h,r),r.extensions&&bs(n,h,r),r.matrix!==void 0){let u=new be;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new Je;n.name&&(r.name=i.createUniqueName(n.name)),Ki(r,n),n.extensions&&bs(t,r,n);let a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);let l=h=>{let u=new Map;for(let[d,f]of i.associations)(d instanceof Qt||d instanceof Zt)&&u.set(d,f);return h.traverse(d=>{let f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){let a=[],o=e.name?e.name:e.uuid,c=[];Yi[r.path]===Yi.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(o);let l;switch(Yi[r.path]){case Yi.weights:l=Mi;break;case Yi.rotation:l=ri;break;case Yi.position:case Yi.scale:l=Ei;break;default:switch(n.itemSize){case 1:l=Mi;break;case 2:case 3:default:l=Ei;break}break}let h=i.interpolation!==void 0?L_[i.interpolation]:ds,u=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){let g=new l(c[d]+"."+Yi[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Lh(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof ri?Ch:Uo;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function B_(s,e,t){let n=e.attributes,i=new Rt;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new E(c[0],c[1],c[2]),new E(l[0],l[1],l[2])),o.normalized){let h=Lh(gr[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new E,c=new E;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let b=Lh(gr[d.componentType]);c.multiplyScalar(b)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;let a=new Rn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function Vf(s,e,t){let n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){s.setAttribute(o,c)})}for(let a in n){let o=Ph[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){let a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return st.workingColorSpace!==Ut&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${st.workingColorSpace}" not supported.`),Ki(s,e),B_(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?D_(s,e.targets,t):s})}var br=(function(){"use strict";var s="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?e:s,r,a=WebAssembly.instantiate(o(i),{}).then(function(p){r=p.instance,r.exports.__wasm_call_ctors()});function o(p){for(var v=new Uint8Array(p.length),x=0;x<p.length;++x){var _=p.charCodeAt(x);v[x]=_>96?_-97:_>64?_-39:_+4}for(var S=0,x=0;x<p.length;++x)v[S++]=v[x]<60?n[v[x]]:(v[x]-60)*64+v[++x];return v.buffer.slice(0,S)}function c(p,v,x,_,S,w){var T=r.exports.sbrk,I=x+3&-4,y=T(I*_),M=T(S.length),D=new Uint8Array(r.exports.memory.buffer);D.set(S,M);var L=p(y,x,_,M,S.length);if(L==0&&w&&w(y,I,_),v.set(D.subarray(y,y+x*_)),T(y-T(0)),L!=0)throw new Error("Malformed buffer data: "+L)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],d=0;function f(p){var v={object:new Worker(p),pending:0,requests:{}};return v.object.onmessage=function(x){var _=x.data;v.pending-=_.count,v.requests[_.id][_.action](_.value),delete v.requests[_.id]},v}function g(p){for(var v="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(o(i))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+c.toString()+m.toString(),x=new Blob([v],{type:"text/javascript"}),_=URL.createObjectURL(x),S=0;S<p;++S)u[S]=f(_);URL.revokeObjectURL(_)}function b(p,v,x,_,S){for(var w=u[0],T=1;T<u.length;++T)u[T].pending<w.pending&&(w=u[T]);return new Promise(function(I,y){var M=new Uint8Array(x),D=d++;w.pending+=p,w.requests[D]={resolve:I,reject:y},w.object.postMessage({id:D,count:p,size:v,source:M,mode:_,filter:S},[M.buffer])})}function m(p){a.then(function(){var v=p.data;try{var x=new Uint8Array(v.count*v.size);c(r.exports[v.mode],x,v.count,v.size,v.source,r.exports[v.filter]),self.postMessage({id:v.id,count:v.count,action:"resolve",value:x},[x.buffer])}catch(_){self.postMessage({id:v.id,count:v.count,action:"reject",value:_})}})}return{ready:a,supported:!0,useWorkers:function(p){g(p)},decodeVertexBuffer:function(p,v,x,_,S){c(r.exports.meshopt_decodeVertexBuffer,p,v,x,_,r.exports[l[S]])},decodeIndexBuffer:function(p,v,x,_){c(r.exports.meshopt_decodeIndexBuffer,p,v,x,_)},decodeIndexSequence:function(p,v,x,_){c(r.exports.meshopt_decodeIndexSequence,p,v,x,_)},decodeGltfBuffer:function(p,v,x,_,S,w){c(r.exports[h[S]],p,v,x,_,r.exports[l[w]])},decodeGltfBufferAsync:function(p,v,x,_,S){return u.length>0?b(p,v,x,h[_],l[S]):a.then(function(){var w=new Uint8Array(p*v);return c(r.exports[h[_]],w,p,v,x,r.exports[l[S]]),w})}}})();var No={uNearR:{value:0},uNearC:{value:new oe}},k_={broad:["CommonTree_1","CommonTree_2","CommonTree_3","CommonTree_4","CommonTree_5"],pine:["Pine_1","Pine_2","Pine_3","Pine_4","Pine_5"],plant:["Fern_1","Fern_1","Fern_1","Plant_1_Big"]},H_={broad:7.2,pine:9.2},qf=240,Xf=1100,jf=55,Oo=class{constructor(e){this.group=new Je,e.add(this.group),this.ready=!1,this.radius=0,this.models={},this.rockGeos=null,this._last=new E(1e9,0,0),this._m4=new be,this._q=new at,this._s=new E,this._p=new E,this._up=new E(0,1,0)}async load(e){let t=new Ji;t.setMeshoptDecoder(br);let i=(await t.loadAsync(e)).scene;i.updateMatrixWorld(!0);let r=[];for(let a of i.children){let o=a.name,c=new Rt().setFromObject(a),l=c.max.y-c.min.y,h=[];a.traverse(u=>{if(!u.isMesh)return;let d=z_(u.geometry).applyMatrix4(u.matrixWorld);if(d.translate(0,-c.min.y-.05,0),/^Rock_/.test(o)){r.push(d);return}let f=u.material;f.side=dt,f.map&&/leaf|leaves|grass/i.test(f.name+f.map.name)&&(f.alphaTest=.4,f.transparent=!1),f.envMapIntensity=.7,on(f);let g=[qf,Xf].map((b,m)=>{let p=new rn(d,f,b);return p.count=0,p.castShadow=m===0,p.receiveShadow=!0,p.frustumCulled=!1,p.layers.set(3),this.group.add(p),p});h.push(g)}),h.length&&(this.models[o]={parts:h,h:l})}return this.rockGeos=r.map(a=>{a.computeBoundingBox();let o=a.boundingBox,c=1/Math.max(o.max.x-o.min.x,o.max.z-o.min.z);return a.translate(-(o.min.x+o.max.x)/2,-o.min.y-.08,-(o.min.z+o.max.z)/2),a.scale(c,c,c),a}),this.ready=!0,this}setRadius(e){if(this.radius=e,No.uNearR.value=this.ready?e:0,this._last.set(1e9,0,0),!e)for(let t in this.models)for(let n of this.models[t].parts)n[0].count=0,n[1].count=0}update(e,t){if(No.uNearC.value.set(e.x,e.z),!this.ready||!this.radius||this._last.distanceToSquared(e)<4)return;this._last.copy(e);let n=this.radius,i=n*n,r={},a=jf*jf;for(let u in this.models)r[u]=[[],[]];for(let u of t.tiles.values()){let d=u.userData.near;if(!d)continue;let f=u.userData.box,g=Math.max(f[0]-e.x,0,e.x-f[2]),b=Math.max(f[1]-e.z,0,e.z-f[3]);if(!(g*g+b*b>i))for(let m of d){let p=m[1]-e.x,v=m[3]-e.z,x=p*p+v*v;if(x>i)continue;let _=k_[m[0]],S=_[Math.floor(m[6]*4.999)%_.length];if(!r[S])continue;let w=x>a?1:0,T=r[S][w];T.length<(w?Xf:qf)&&T.push(m)}}let o=this._m4,c=this._q,l=this._s,h=this._p;for(let u in this.models){let{parts:d,h:f}=this.models[u],g=r[u],b=u.startsWith("Pine")?"pine":u.startsWith("Common")?"broad":"plant",m=b==="plant"?1:H_[b]/f;for(let p of d)p.forEach((v,x)=>{g[x].forEach((_,S)=>{c.setFromAxisAngle(this._up,_[5]);let w=_[4]*m;o.compose(h.set(_[1],_[2],_[3]),c,l.set(w,w*(.92+_[6]*.16),w)),v.setMatrixAt(S,o)}),v.count=g[x].length,v.instanceMatrix.needsUpdate=!0})}}};function z_(s){let e=s.clone();for(let t of Object.keys(e.attributes)){let n=e.attributes[t];if(n.array instanceof Float32Array&&!n.isInterleavedBufferAttribute)continue;let i=new Float32Array(n.count*n.itemSize),r=[n.getX,n.getY,n.getZ,n.getW];for(let a=0;a<n.count;a++)for(let o=0;o<n.itemSize;o++)i[a*n.itemSize+o]=r[o].call(n,a);e.setAttribute(t,new ve(i,n.itemSize))}return e}var Yf=32,G_=64,Dh=8192,Ht=Tt.halfWidth,V_=Ht+1.2,Bo=Ht+16,Fh=1e6,Mt=(s,e,t)=>{let n=Math.min(1,Math.max(0,(t-s)/(e-s)));return n*n*(3-2*n)},Xt=s=>new Z(s),Kf={forest:{a:Xt("#7fa443"),b:Xt("#a9b85a"),c:Xt("#5c8036"),snowLine:215,trees:!0},reed:{a:Xt("#ad9b5c"),b:Xt("#c5b37b"),c:Xt("#8c8a50"),snowLine:240,trees:!1},mountain:{a:Xt("#789a45"),b:Xt("#9eaa5a"),c:Xt("#557236"),snowLine:300,trees:!0},meadow:{a:Xt("#6f9a4c"),b:Xt("#86ad5c"),c:Xt("#5c8541"),snowLine:400,trees:!1,bare:!0}},W_=Xt("#3e5d2b"),Jf=Xt("#8a8072"),Uh=Xt("#6b6259"),q_=Xt("#eef2f6"),X_=Xt("#8f887c"),j_=Xt("#5f6c36"),Zf={64:1,128:.5,256:.22,512:.08},Y_={64:1,128:.7,256:.4,512:.16},ko=class{constructor(e,t,n){this.road=t,this.group=new Je,e.add(this.group),this.tiles=new Map,this.view=1,this.keep=Zf,this.queue=[],this.queued=new Set,this.iCar=0,this.uCover={value:0},this.mat=new vt({vertexColors:!0,map:Df(n),roughness:.96,metalness:0,envMapIntensity:.8}),this.texU={uRock:{value:gs("rock",n)},uRockN:{value:gs("rock_n",n,{srgb:!1})},uGravel:{value:gs("gravel",n)},uDirt:{value:gs("dirt",n)}},this.mat.onBeforeCompile=r=>{r.uniforms.uCover=this.uCover,Object.assign(r.uniforms,this.texU),r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
varying float vUpY;
varying vec3 vTW;
varying vec3 vNW;
attribute vec2 aMix;
varying vec2 vMix;`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
vUpY = objectNormal.y;
vNW = objectNormal;
vMix = aMix;`).replace("#include <project_vertex>",`#include <project_vertex>
vTW = transformed;`),r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
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
          }`)},this.treeMat=new vt({map:Ff(),alphaTest:.45,side:dt,roughness:.92});let i=r=>{Object.assign(r.uniforms,No),r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
uniform float uNearR;
uniform vec2 uNearC;`).replace("#include <begin_vertex>",`#include <begin_vertex>
          vec3 ipos = (modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;
          transformed *= smoothstep(uNearR - 1.0, uNearR + 1.0, distance(ipos.xz, uNearC));`)};this.treeMat.onBeforeCompile=r=>{i(r),r.fragmentShader=r.fragmentShader.replace("#include <normal_fragment_begin>",Pe.normal_fragment_begin.replace("normal *= faceDirection;",""))},this.treeDepth=new Yr({depthPacking:Wl,map:this.treeMat.map,alphaTest:.45,side:dt}),this.treeDepth.onBeforeCompile=i,on(this.mat),on(this.treeMat),this.geos={pine:kf(),broad:Bf()},this.rockGeos=[0,1,2].map(r=>K_(r)),this.rockMat=new vt({roughness:1,metalness:0,envMapIntensity:.35}),this.rockMat.onBeforeCompile=r=>{Object.assign(r.uniforms,this.texU),r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vBW;
varying vec3 vBN;`).replace("#include <project_vertex>",`#include <project_vertex>
          mat4 rockM = modelMatrix * instanceMatrix;
          vBW = (rockM * vec4(transformed, 1.0)).xyz;
          vBN = normalize(mat3(rockM) * objectNormal);`),r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vBW;
varying vec3 vBN;
uniform sampler2D uRock, uGravel;`).replace("#include <map_fragment>",`
          vec3 bw = pow(abs(normalize(vBN)), vec3(3.0)); bw /= bw.x + bw.y + bw.z;
          vec3 rt = texture2D(uRock, vBW.zy / 3.0).rgb * bw.x + texture2D(uGravel, vBW.xz / 1.6).rgb * bw.y + texture2D(uRock, vBW.xy / 3.0).rgb * bw.z;
          diffuseColor.rgb *= mix(vec3(dot(rt, vec3(0.3, 0.59, 0.11))), rt, 0.25) * 1.7;`)},on(this.rockMat),this._nd=Fh,this._ny=0,this._nl=0,this._d=Fh,this._rc=new Z,this._white=new Z(1,1,1)}setCar(e){this.iCar=Math.floor(e/Tt.step)}_samples(e,t,n,i,r,a,o){let c=this.road.pts,l=[],h=Math.max(0,a),u=Math.min(c.length-1,o);for(let d=h-h%r;d<=u;d+=r){if(d<h)continue;let f=c[d];f.x>=e&&f.x<=n&&f.z>=t&&f.z<=i&&l.push(d)}return l}_nearFine(e,t,n){let i=this.road.pts,r=1/0,a=-1;for(let h=0;h<n.length;h++){let u=i[n[h]],d=e-u.x,f=t-u.z,g=d*d+f*f;g<r&&(r=g,a=n[h])}if(a<0)return!1;let o=1/0,c=i[a].y,l=0;for(let h=a-1;h<=a;h++){if(h<0||h+1>=i.length)continue;let u=i[h],d=i[h+1],f=d.x-u.x,g=d.z-u.z,b=f*f+g*g,m=Math.max(0,Math.min(1,((e-u.x)*f+(t-u.z)*g)/b)),p=e-u.x-f*m,v=t-u.z-g*m,x=Math.hypot(p,v);x<o&&(o=x,c=u.y+(d.y-u.y)*m,l=(p*-g+v*f)/Math.sqrt(b))}return this._nd=o,this._ny=c,this._nl=l,this._ns=a*Tt.step,!0}_height(e,t,n,i){let r=this.road.pts,a=kt.side,o=1/0,c=0,l=0;for(let f=0;f<i.length;f++){let g=i[f],b=r[g],m=e-b.x,p=t-b.z,v=m*m+p*p;if(v<o&&(o=v),a&&g+1<r.length){let x=r[g+1],_=x.x-b.x,S=x.z-b.z,w=Math.hypot(_,S)||1,T=(m*-S+p*_)/w,I=1/(v*v+1e4);c+=I,l+=I*T}}let h=Math.sqrt(o),u=na(e,t)+Ql(e,t);this._d=Fh,this._s=-1;let d=h-70<Bo&&this._nearFine(e,t,n);if(a){let f=c>0?l/c:0;d&&(f=this._nl+(f-this._nl)*Mt(25,60,this._nd));let g=-f,b=.75+.5*an(e/220+4.4,t/220+9.9);g>0?u+=(360*(1-Math.exp(-g/210))+.2*g)*b:u-=250*(1-Math.exp(g/170)),u+=Ql(e*1.7,t*1.7)*.8,Math.abs(g)>650&&(u+=$l(e,t)*Mt(650,1500,Math.abs(g)))}else h>500&&(u+=$l(e,t)*Mt(500,1600,h));if(d){this._d=this._nd,this._s=this._ns;let f=Mt(V_,Bo,this._nd),g=this._ny-.02;u=g+(u-g)*f}return u}heightAt(e,t){let n=Bo+80,i=this._samples(e-n,t-n,e+n,t+n,1,this.iCar-300,this.iCar+300),r=this._samples(e-1700,t-1700,e+1700,t+1700,25,this.iCar-2500,this.iCar+4e3);return this._height(e,t,i,r)}_color(e,t,n,i,r,a,o){let c=Kf[kt.id],l=an(e/150+2.3,t/150+6.1),h=an(e/37+8.8,t/37+1.2);o.copy(c.a).lerp(c.b,Mt(.3,.75,l)).lerp(c.c,Mt(.45,.9,h)*.55),c.trees&&o.lerp(W_,Mt(.44,.66,an(e/260+3.1,t/260+8.7))*.6);let u=a>=0?this.road.dirtAt(a):0,d=u*(1-Mt(Ht+1,Ht+28,r));d>0&&o.lerp(j_,d*.75);let f=1-i;o.lerp(Uh,Mt(110,220,n)*.45);let g=Mt(.22,.4,f);if(g>0){let v=.72+.4*an((e+t)/9+1.3,n/2.6)+.18*(h-.5);this._rc.copy(h>.5?Jf:Uh).multiplyScalar(v),o.lerp(this._rc,g)}let b=Mt(c.snowLine+(l-.5)*60,c.snowLine+50,n)*(1-Mt(.5,.75,f));o.lerp(q_,b);let m=(1-(kt.id==="forest"?Mt(Ht+.2,Ht+1.1,r):Mt(Ht+1,Ht+3.2,r)))*(1-u);o.lerp(X_,m);let p=kt.id==="mountain"?Mt(70,190,n)*(1-g)*(1-b)*Mt(.35,.7,h+.3*l)*.8:0;return this._mixG=Math.max(m,p),this._mixD=d*Mt(.25,.6,an(e/9+5.5,t/9+2.2)*.7+.5*(1-Mt(Ht+1,Ht+9,r))),o}_build(e,t,n){let i=Yf,r=n/i,a=i+3,o=Bo+80,c=this.iCar-2500,l=this.iCar+4e3,h=this._samples(e-o,t-o,e+n+o,t+n+o,1,c,l),u=this._samples(e-1700,t-1700,e+n+1700,t+n+1700,25,c,l),d=new Float32Array(a*a),f=new Float32Array(a*a),g=new Float32Array(a*a);for(let U=0;U<a;U++)for(let B=0;B<a;B++)d[U*a+B]=this._height(e+(B-1)*r,t+(U-1)*r,h,u),f[U*a+B]=this._d,g[U*a+B]=this._s;let b=(i+1)*(i+1),m=4*(i+1),p=new Float32Array((b+m)*3),v=new Float32Array((b+m)*3),x=new Float32Array((b+m)*3),_=new Float32Array((b+m)*2),S=new Float32Array((b+m)*2),w=new Z,T=new Float32Array(b);for(let U=0;U<=i;U++)for(let B=0;B<=i;B++){let O=(U+1)*a+(B+1),z=U*(i+1)+B,Y=e+B*r,K=t+U*r,Q=d[O],G=d[O-1]-d[O+1],J=2*r,$=d[O-a]-d[O+a],le=Math.hypot(G,J,$);G/=le,J/=le,$/=le,T[z]=J,p.set([Y,Q,K],z*3),v.set([G,J,$],z*3),this._color(Y,K,Q,J,f[O],g[O],w),x.set([w.r,w.g,w.b],z*3),S[z*2]=this._mixG,S[z*2+1]=this._mixD,_.set([Y/6,K/6],z*2)}let I=[];for(let U=0;U<i;U++)for(let B=0;B<i;B++){let O=U*(i+1)+B,z=O+1,Y=O+i+1,K=Y+1;I.push(O,Y,z,z,Y,K)}let y=r*1.5+1,M=[Array.from({length:i+1},(U,B)=>B),Array.from({length:i+1},(U,B)=>i*(i+1)+B),Array.from({length:i+1},(U,B)=>B*(i+1)),Array.from({length:i+1},(U,B)=>B*(i+1)+i)],D=b;for(let U of M){let B=D;for(let O of U)p.set([p[O*3],p[O*3+1]-y,p[O*3+2]],D*3),v.set([v[O*3],v[O*3+1],v[O*3+2]],D*3),x.set([x[O*3],x[O*3+1],x[O*3+2]],D*3),S[D*2]=S[O*2],S[D*2+1]=S[O*2+1],_.set([_[O*2],_[O*2+1]],D*2),D++;for(let O=0;O<i;O++){let z=U[O],Y=U[O+1],K=B+O,Q=B+O+1;I.push(z,K,Y,Y,K,Q,z,Y,K,Y,Q,K)}}let L=new Oe;L.setAttribute("position",new ve(p,3)),L.setAttribute("normal",new ve(v,3)),L.setAttribute("color",new ve(x,3)),L.setAttribute("aMix",new ve(S,2)),L.setAttribute("uv",new ve(_,2)),L.setIndex(I),L.computeBoundingSphere();let k=new Ne(L,this.mat);k.receiveShadow=n<=256,k.castShadow=n<=64;let P=new Je;P.add(k),P.userData.box=[e,t,e+n,t+n];let F=this._trees(e,t,n,r,a,d,f,T,g,P);for(let U of F)P.add(U);return this.group.add(P),P}_bil(e,t,n,i,r,a,o){let c=(a-i)/n+1,l=(o-r)/n+1,h=Math.max(0,Math.min(t-2,Math.floor(c))),u=Math.max(0,Math.min(t-2,Math.floor(l))),d=c-h,f=l-u,g=e[u*t+h],b=e[u*t+h+1],m=e[(u+1)*t+h],p=e[(u+1)*t+h+1];return g+(b-g)*d+(m-g)*f+(g-b-m+p)*d*f}_nearest(e,t,n,i,r,a,o){let c=Math.min(t-1,Math.max(0,Math.round((a-i)/n+1))),l=Math.min(t-1,Math.max(0,Math.round((o-r)/n+1)));return e[l*t+c]}_trees(e,t,n,i,r,a,o,c,l,h){let u=Kf[kt.id],d=this.keep[n]||0;if(!d)return[];let f=Yf,g=kt.id==="mountain",b=[],m=[],p=[],v=(T,I)=>c[Math.min(f,Math.round((I-t)/i))*(f+1)+Math.min(f,Math.round((T-e)/i))],x=n<=128?[]:null;h&&(h.userData.near=x);let _=[{cell:8,seed:0}];if(this.road.dirt&&n<=128){let T=!1;for(let I=0;I<l.length&&!T;I+=7)l[I]>=0&&this.road.dirtAt(l[I])>.05&&(T=!0);T&&_.push({cell:4,seed:1})}for(let{cell:T,seed:I}of _){let y=I*15485863;for(let M=Math.floor(t/T);M*T<t+n;M++)for(let D=Math.floor(e/T);D*T<e+n;D++){if(rt(D+y,M)>d)continue;let L=(D+rt(D+7919+y,M))*T,k=(M+rt(D+y,M+7919))*T;if(L<e||L>=e+n||k<t||k>=t+n)continue;let P=this._bil(o,r,i,e,t,L,k),F=P<60?this._nearest(l,r,i,e,t,L,k):-1,U=F>=0?this.road.dirtAt(F):0,B=u.trees?Mt(.44,.66,an(L/260+3.1,k/260+8.7))*.92+.03:u.bare?0:.012;I?B=U*.85*(1-Mt(Ht+20,Ht+45,P)):B=Math.max(B,U*.9*(1-Mt(Ht+25,Ht+60,P)));let O=this._bil(a,r,i,e,t,L,k),z=v(L,k);if(rt(D+104729+y,M+31)>B||P<Ht+7.5-5*U+(I?rt(D,M+3)*1.5:0)||O>u.snowLine-20||z<(g?.66:.8))continue;let Y=(.75+rt(D+3+y,M+5)*.7)*(n>=256?1.3:1)*(U>.3?1.15:1),K=u.trees?rt(D+11+y,M+13)<(g?.9:.58+Mt(60,180,O)*.35):!1,Q=[L,O-.2,k,Y,rt(D+17+y,M+19)*6.283,rt(D+23+y,M+29)];(K?b:m).push(Q),x&&x.push([K?"pine":"broad",...Q])}}if(n<=256)for(let I=Math.floor(t/22);I*22<t+n;I++)for(let y=Math.floor(e/22);y*22<e+n;y++){if(rt(y+911,I+577)>d)continue;let M=(y+rt(y+31,I+977))*22,D=(I+rt(y+977,I+31))*22;if(M<e||M>=e+n||D<t||D>=t+n)continue;let L=this._bil(o,r,i,e,t,M,D);if(L<Ht+3)continue;let k=v(M,D),P=L<60?this._nearest(l,r,i,e,t,M,D):-1,F=P>=0?this.road.dirtAt(P):0,U=g&&k<=.5,B=g?L<Ht+14?.45:U?.32:k<.93?.3:.06:F*.2;if(rt(y+3331,I+7177)>B)continue;let O=(g?U?3:1.6:.8)+Math.pow(rt(y+41,I+43),1.6)*(g?U?7:5.5:1.6),z=3+Math.floor(rt(y+7,I+9)*5);for(let Y=0;Y<z;Y++){let K=rt(y*7+Y,I+101)*6.283,Q=(Y===0?0:.6+rt(y+Y*13,I*3+7)*1.4)*O,G=M+Math.cos(K)*Q,J=D+Math.sin(K)*Q;if(G<e-4||G>=e+n+4||J<t-4||J>=t+n+4||this._bil(o,r,i,e,t,G,J)<Ht+2)continue;let $=O*(Y===0?1:.35+rt(y+Y,I+Y*5)*.55),le=this._bil(a,r,i,e,t,G,J);p.push([G,le-$*(U?.35:.22),J,$,rt(y+Y*3,I+53)*6.283,rt(y+59+Y,I+61)])}}if(x&&n<=64&&u.trees)for(let I=Math.floor(t/3.5);I*3.5<t+n;I++)for(let y=Math.floor(e/3.5);y*3.5<e+n;y++){let M=(y+rt(y+5153,I))*3.5,D=(I+rt(y,I+5153))*3.5;if(M<e||M>=e+n||D<t||D>=t+n)continue;let L=this._bil(o,r,i,e,t,M,D);if(L<Ht+1.6)continue;let k=L<60?this._nearest(l,r,i,e,t,M,D):-1,P=k>=0?this.road.dirtAt(k):0,F=(g?.07:.1+.18*Mt(.44,.66,an(M/260+3.1,D/260+8.7)))+P*.35;if(rt(y+6007,I+6011)>F||v(M,D)<.75)continue;let U=this._bil(a,r,i,e,t,M,D);x.push(["plant",M,U-.05,D,.6+rt(y+61,I+67)*.7,rt(y+71,I+73)*6.283,rt(y+79,I+83)])}let S=[],w=(T,I,y,M)=>{if(!T.length)return;let D=new rn(I,y,T.length),L=new be,k=new at,P=new E,F=new E,U=new E(0,1,0),B=new Z,O=new nr;T.forEach(([z,Y,K,Q,G,J],$)=>{M?k.setFromEuler(O.set((J-.5)*.5,G,(J-.5)*.4)):k.setFromAxisAngle(U,G),L.compose(F.set(z,Y,K),k,P.set(Q,Q*(M?.75+J*.45:.9+J*.3),Q)),D.setMatrixAt($,L),M?B.copy(J>.5?Jf:Uh).multiplyScalar(1.15+J*.3):B.setHSL(.2+(J-.5)*.12,.45,.62+J*.2).lerp(this._white,.55),D.setColorAt($,B)}),D.castShadow=n<=64,D.receiveShadow=M&&n<=128,M||(D.customDepthMaterial=this.treeDepth),D.layers.set(3),S.push(D)};if(w(b,this.geos.pine,this.treeMat),w(m,this.geos.broad,this.treeMat),p.length){let T=this.rockGeos.map(()=>[]);p.forEach(I=>T[Math.floor(I[5]*(T.length-.001))].push(I)),T.forEach((I,y)=>w(I,this.rockGeos[y],this.rockMat,!0))}return S}_dispose(e){this.group.remove(e),e.traverse(t=>{t.isInstancedMesh?t.dispose():t.isMesh&&t.geometry.dispose()})}reset(){for(let e of this.tiles.values())this._dispose(e);this.tiles.clear(),this.queue.length=0,this.queued.clear()}update(e,t=6){let n=new Map,i=Math.round(e.x/1024)*1024-Dh/2,r=Math.round(e.z/1024)*1024-Dh/2,a=(o,c,l)=>{let h=Math.min(Math.max(e.x,o),o+l),u=Math.min(Math.max(e.z,c),c+l),d=Math.hypot(e.x-h,e.z-u);if(l>G_&&d<l*this.view){let f=l/2;a(o,c,f),a(o+f,c,f),a(o,c+f,f),a(o+f,c+f,f)}else n.set(l+"|"+o+"|"+c,[o,c,l,d])};a(i,r,Dh);for(let[o,c]of n)!this.tiles.has(o)&&!this.queued.has(o)&&(this.queue.push([o,...c]),this.queued.add(o));if(this.queue.length){this.queue.sort((c,l)=>c[3]-l[3]||c[4]-l[4]);let o=performance.now();for(;this.queue.length&&performance.now()-o<t;){let[c,l,h,u]=this.queue.shift();this.queued.delete(c),!(!n.has(c)||this.tiles.has(c))&&this.tiles.set(c,this._build(l,h,u))}}if(!this.queue.length)for(let[o,c]of this.tiles)n.has(o)||(this._dispose(c),this.tiles.delete(o))}prime(e){this.update(e,1e9)}setView(e,t){e!==this.view&&(this.view=e,this.keep=e>1?Y_:Zf,this.tiles.size&&(this.reset(),t&&this.prime(t)))}apply(e){this.uCover.value=e.cover,this.mat.color.setScalar((1-.2*e.wet)*(1-.3*e.dark));let t=.2*e.cover*e.dayF;this.treeMat.emissive.setRGB(t,t*1.02,t*1.05)}};function K_(s){let e=new Zr(1,3);e.deleteAttribute("normal"),e.deleteAttribute("uv"),e=Pf(e);let t=e.attributes.position,n=new E;for(let i=0;i<t.count;i++){n.fromBufferAttribute(t,i);let r=an(n.x*1.7+s*13.1,n.z*1.7+n.y*1.3+s*7.7)*.45+an(n.x*4.1+s,n.y*4.3-n.z*2.1)*.18;n.multiplyScalar(.72+r),n.y=Math.max(n.y,-.25),t.setXYZ(i,n.x,n.y,n.z)}return e.computeVertexNormals(),e}var Nh=`
  uniform float uExposure;
  vec3 dispToLin(vec3 d) {
    vec3 x = clamp(mix(pow((d + 0.055) / 1.055, vec3(2.4)), d / 12.92, step(d, vec3(0.04045))), 0.0, 0.985);
    vec3 A = 1.0 - 0.983729 * x, B = 0.0245786 - 0.432951 * x, C = -(0.000090537 + 0.238081 * x);
    return (-B + sqrt(B * B - 4.0 * A * C)) / (2.0 * A) * 0.6 / uExposure;
  }`;function Qf(s,e=1){let t=new Float32Array(s*e*3);for(let n=0;n<s;n++){let i=Math.random(),r=Math.random(),a=Math.random();for(let o=0;o<e;o++)t.set([i,r,a],(n*e+o)*3)}return t}var J_=`
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
  }`,Z_=`
  uniform float uOpacity, uLight; uniform vec3 uColor; varying float vA;
  ${Nh}
  void main() {
    float r = length(gl_PointCoord - 0.5) * 2.0;
    float a = smoothstep(1.0, 0.25, r);
    gl_FragColor = vec4(dispToLin(uColor * uLight), a * uOpacity * vA);
  }`,Ho=class{constructor(e){this.time=0;let t=new E(40,26,40),n=()=>({uTime:{value:0},uCam:{value:new E},uBox:{value:t.clone()},uOpacity:{value:0},uLight:{value:1},uExposure:{value:.6}}),i=14e3,r=new Oe;r.setAttribute("position",new ve(new Float32Array(i*2*3),3)),r.setAttribute("seed",new ve(Qf(i,2),3));let a=new Float32Array(i*2);for(let c=0;c<i;c++)a[c*2+1]=1;r.setAttribute("tail",new ve(a,1)),this.rain=new zi(r,new St({uniforms:{...n(),uSpeed:{value:24},uLen:{value:1.1},uWind:{value:new oe(2,1)}},transparent:!0,depthWrite:!1,vertexShader:`
        attribute vec3 seed; attribute float tail;
        uniform float uTime, uSpeed, uLen; uniform vec3 uCam, uBox; uniform vec2 uWind;
        varying float vA;
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
          gl_Position = projectionMatrix * viewMatrix * vec4(w, 1.0);
        }`,fragmentShader:`
        uniform float uOpacity, uLight; varying float vA;
        ${Nh}
        void main() { gl_FragColor = vec4(dispToLin(vec3(0.78, 0.84, 0.92) * uLight), uOpacity * vA); }`})),this.rain.frustumCulled=!1,this.rain.layers.set(3),this.rain.renderOrder=10,this.rain.visible=!1,e.add(this.rain);let o=(c,l,h)=>{let u=new Oe;u.setAttribute("position",new ve(new Float32Array(c*3),3)),u.setAttribute("seed",new ve(Qf(c),3));let d=new xn(u,new St({uniforms:{...n(),uScale:{value:400},uColor:{value:new Z(...h)},...l},transparent:!0,depthWrite:!1,vertexShader:J_,fragmentShader:Z_}));return d.frustumCulled=!1,d.layers.set(3),d.renderOrder=10,d.visible=!1,e.add(d),d};this.snow=o(1e4,{uSize:{value:.09},uFall:{value:1.6},uSway:{value:.9},uDrift:{value:new oe}},[.96,.98,1]),this.drift=o(2600,{uSize:{value:.05},uFall:{value:.12},uSway:{value:.25},uDrift:{value:new oe}},[.95,.9,.78])}update(e,t,n,i){this.time+=e;let r=n.windDir.clone().multiplyScalar(1.5+n.wind*11);for(let l of[this.rain,this.snow,this.drift]){let h=l.material.uniforms;h.uTime.value=this.time,h.uCam.value.copy(t),h.uLight.value=n.light,h.uExposure.value=n.exposure||.6}let a=this.rain.material.uniforms;a.uOpacity.value=.55*n.rain*(1+.25*n.dark),a.uWind.value.copy(r),this.rain.visible=n.rain>.02;let o=this.snow.material.uniforms;o.uOpacity.value=.95*n.snow,o.uScale.value=i*.5,o.uDrift.value.copy(r).multiplyScalar(.35),this.snow.visible=n.snow>.02;let c=this.drift.material.uniforms;c.uOpacity.value=.8*n.drift,c.uScale.value=i*.5,c.uDrift.value.copy(r).multiplyScalar(.9),this.drift.visible=n.drift>.02}};var Oh=Math.PI/180,Pn=(s,e,t)=>Math.min(t,Math.max(e,s)),kn=(s,e,t)=>{let n=Pn((t-s)/(e-s),0,1);return n*n*(3-2*n)},zo={clear:{fog:42e-5,overcast:0,clouds:.52,sun:1,rain:0,snow:0,wet:0,cover:0,wind:.3,dark:0,tint:"#b9d6ee"},cloudy:{fog:9e-4,overcast:.75,clouds:.86,sun:.3,rain:0,snow:0,wet:0,cover:0,wind:.38,dark:.12,tint:"#a6b1bb"},windy:{fog:6e-4,overcast:.2,clouds:.62,sun:.85,rain:0,snow:0,wet:0,cover:0,wind:.95,dark:0,tint:"#b4c6d8"},rain:{fog:.0016,overcast:1,clouds:1,sun:.1,rain:.85,snow:0,wet:1,cover:0,wind:.5,dark:.35,tint:"#7a858f"},storm:{fog:.0027,overcast:1,clouds:1,sun:.03,rain:1,snow:0,wet:1,cover:0,wind:1,dark:1,tint:"#3f4852"},snow:{fog:.0019,overcast:.85,clouds:1,sun:.35,rain:0,snow:1,wet:0,cover:1,wind:.32,dark:.1,tint:"#d3dbe2"},fog:{fog:.0066,overcast:.55,clouds:.5,sun:.3,rain:0,snow:0,wet:.2,cover:0,wind:.08,dark:.05,tint:"#c4c9cd"}},Q_=1.5,$_=["fog","overcast","clouds","sun","rain","snow","wet","cover","wind","dark"],ey=[[-18,"#040a1a","#08142c","#122244","#122244","#000000"],[-9,"#06102e","#0e1d47","#1f2d5a","#363562","#24182c"],[-4,"#122052","#2a3c79","#67588d","#d06e7a","#a24a40"],[0,"#1d3d80","#4868ab","#e3987c","#ff8a48","#ff7030"],[4,"#2453a0","#6286c4","#f0bd92","#ffb36c","#ff9a52"],[10,"#2a64b4","#719fd9","#f1d9bd","#ffd59c","#ffcf88"],[22,"#2468c8","#5b9be3","#c6def3","#e1edf5","#fff1d6"],[50,"#1e5fc4","#4f92e0","#b4d4f2","#d2e5f3","#fff7e6"]].map(([s,...e])=>[s,...e.map(t=>new Z(t))]),$f=2.15;function np(s,e,t){let n=e/.6,i=s.r*n,r=s.g*n,a=s.b*n,o=.59719*i+.35458*r+.04823*a,c=.076*i+.90834*r+.01566*a,l=.0284*i+.13383*r+.83777*a,h=b=>(b*(b+.0245786)-90537e-9)/(b*(.983729*b+.432951)+.238081),u=h(o),d=h(c),f=h(l),g=b=>(b=Math.min(1,Math.max(0,b)),b<=.0031308?12.92*b:1.055*Math.pow(b,1/2.4)-.055);return t.setRGB(g(1.60475*u-.53108*d-.07367*f),g(-.10208*u+1.10813*d-.00605*f),g(-.00327*u-.07276*d+1.07602*f))}var Go=new Z;function ty(s,e,t){let n=a=>(a=Math.min(.985,Math.max(0,a)),a<=.04045?a/12.92:Math.pow((a+.055)/1.055,2.4)),i=a=>{let o=1-.983729*a,c=.0245786-.432951*a,l=-(90537e-9+.238081*a);return(-c+Math.sqrt(c*c-4*o*l))/(2*o)*.6/e},r=[n(s.r),n(s.g),n(s.b)];t.setRGB(i(r[0]),i(r[1]),i(r[2]));for(let a=0;a<4;a++){np(t,e,Go);let o=[n(Go.r),n(Go.g),n(Go.b)];t.setRGB(t.r*r[0]/Math.max(o[0],1e-5),t.g*r[1]/Math.max(o[1],1e-5),t.b*r[2]/Math.max(o[2],1e-5))}return t}var ny=`
  varying vec3 vDir;
  void main() { vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,iy=`
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
  }`,sy=new Z("#fff3df"),ry=new Z("#ff9a50"),ep=new Z("#9ab6ff"),ay=new Z(1.7,1.78,1.95),oy=Math.PI-1,tp=Math.PI-1.15,cy=`
  varying vec3 vDir;
  void main() { vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,ly=`
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
  }`,Vo=class{constructor(e,t,n){this.renderer=e,this.scene=t,this.camera=n,this.hour=17.55,this.auto=!1,this.tween=null,this.weather="clear",this.w={...zo.clear},this.tint=new Z(zo.clear.tint),this.target=zo.clear,this.windDir=new oe(.78,.62).normalize(),this._fogDisp=new Z,this.veil={uVeilCol:{value:new Z},uVeil:{value:new oe(0,.2)}},this.mistCover=.35,this.mistDens=.2,this.skyMat=new St({uniforms:{...this.veil,uZenith:{value:new Z},uMid:{value:new Z},uHorizon:{value:new Z},uBand:{value:new Z},uSunCol:{value:new Z},uSunDir:{value:new E(0,1,0)},uGlow:{value:1},uDisc:{value:1},uBandAmt:{value:1},uScale:{value:1},uGround:{value:new Ke(0,0,0,0)},uMoonDir:{value:new E(0,1,0)},uMoonCol:{value:new Z(ay)},uMoon:{value:0}},vertexShader:ny,fragmentShader:iy,side:Kt,depthWrite:!1,fog:!1}),this.sky=new Ne(new Gi(2400,48,24),this.skyMat),this.sky.renderOrder=-10,this.sky.frustumCulled=!1,t.add(this.sky),this.skyC={zen:new Z,mid:new Z,hor:new Z,band:new Z,sun:new Z},this.envScene=new ki,this.envScene.add(new Ne(new Gi(900,32,16),this.skyMat)),this.pmrem=new sr(e),this.envRT=null,this.envTimer=0,this.envKey="";let i=new Float32Array(1800*3);for(let o=0;o<1800;o++){let c=new E().randomDirection();c.y=Math.abs(c.y)*.9+.1,c.normalize().multiplyScalar(3200),i.set([c.x,c.y,c.z],o*3)}let r=new Oe;r.setAttribute("position",new ve(i,3)),this.stars=new xn(r,new _i({color:14674175,size:2.1,sizeAttenuation:!1,transparent:!0,opacity:0,depthWrite:!1,fog:!1})),this.stars.renderOrder=1,this.stars.frustumCulled=!1,t.add(this.stars),this.cloudMat=new St({uniforms:{...this.veil,uTime:{value:0},uCover:{value:.4},uFlash:{value:0},uSoft:{value:0},uDrift:{value:new oe},uSunDir:{value:new E(0,1,0)},uLit:{value:new Z},uShade:{value:new Z},uFlashCol:{value:new Z(1.5,1.7,2.4)}},vertexShader:cy,fragmentShader:ly,side:Kt,transparent:!0,depthWrite:!1,fog:!1}),this.dome=new Ne(new Gi(2300,32,16),this.cloudMat),this.dome.renderOrder=3,this.dome.frustumCulled=!1,t.add(this.dome),this.cloudTime=0,this.haze=new Ne(new yi(1800,1800,1,48,1,!0),new St({uniforms:{uColor:{value:new Z}},side:dt,transparent:!0,depthWrite:!1,fog:!1,vertexShader:"varying float vT; void main(){ vT = position.y + 0.5; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:"uniform vec3 uColor; varying float vT; void main(){ float a = 1.0 - vT; gl_FragColor = vec4(uColor, a * a); }"})),this.haze.renderOrder=5,this.haze.frustumCulled=!1,t.add(this.haze),this.boltGeo=new Oe,this.boltGeo.setAttribute("position",new ve(new Float32Array(480),3)),this.boltGeo.setDrawRange(0,0),this.bolt=new zi(this.boltGeo,new ms({color:14083327,transparent:!0,opacity:0,blending:Jt,depthWrite:!1,fog:!1})),this.bolt.renderOrder=6,this.bolt.frustumCulled=!1,t.add(this.bolt),this.flashT=-1,this.nextStrike=2,this.flash=0,this.onThunder=null,this.sun=new dr(16777215,1),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048);let a=this.sun.shadow.camera;a.left=-38,a.right=38,a.top=38,a.bottom=-38,a.near=1,a.far=260,this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=.04,a.layers.enable(3),t.add(this.sun,this.sun.target),this.hemi=new Eo(12572927,4214832,.4),t.add(this.hemi),t.fog=new bo(12179182,6e-4),this.precip=new Ho(t),this.state={night:0,lamps:0,dayF:1,warm:0,light:1,rain:0,snow:0,wet:0,cover:0,overcast:0,wind:.3,dark:0,drift:0,flash:0,windDir:this.windDir,fogColor:new Z,mistColor:new Z,sunDir:new E,elevation:0,moonDir:new E,lightDir:new E,moon:0,rays:0,rayDir:new E,rayCol:new Z},this._c=new Z,this._c2=new Z,this._lit=new Z,this._shade=new Z,this._v=new E}snapWeather(e){this.setWeather(e),Object.assign(this.w,this.target),this.tint.set(this.target.tint)}setWeather(e){this.weather=e,this.target=zo[e],e==="storm"&&(this.nextStrike=Math.min(this.nextStrike,1.2))}setTime(e){if(e==null){this.auto=!0,this.tween=null;return}this.auto=!1,this.tween=e}get clock(){let e=Math.floor(this.hour),t=Math.floor((this.hour-e)*60);return String(e).padStart(2,"0")+":"+String(t).padStart(2,"0")}_strike(e){let t=Math.random()*Math.PI*2,n=800+Math.random()*900,i=new E(e.x+Math.cos(t)*n,0,e.z+Math.sin(t)*n),r=new E(i.x+(Math.random()-.5)*240,650+Math.random()*200,i.z+(Math.random()-.5)*240),a=this.boltGeo.attributes.position,o=0,c=(l,h,u,d)=>{let f=l.clone();for(let g=1;g<=u;g++){let b=g/u,m=l.clone().lerp(h,b);g<u&&m.add(new E((Math.random()-.5)*d,0,(Math.random()-.5)*d)),a.setXYZ(o++,f.x,f.y,f.z),a.setXYZ(o++,m.x,m.y,m.z),f=m}return f};c(r,i,16,110);for(let l=0;l<3;l++){let h=.25+Math.random()*.5,u=r.clone().lerp(i,h),d=u.clone().add(new E((Math.random()-.5)*380,-(120+Math.random()*260),(Math.random()-.5)*380));c(u,d,5,60)}a.needsUpdate=!0,this.boltGeo.setDrawRange(0,o),this.flashT=0,this.onThunder&&this.onThunder(Pn(n/340,.7,4.2),Pn(1.3-n/1800,.35,1))}update(e,t){let n=this.camera.position;if(this.auto)this.hour=(this.hour+e*.06)%24;else if(this.tween!=null){let $=(this.tween-this.hour+36)%24-12,le=5*e;Math.abs($)<=le?(this.hour=this.tween,this.tween=null):this.hour=(this.hour+Math.sign($)*le+24)%24}let i=1-Math.exp(-e*1.4);for(let $ of $_)$!=="wet"&&(this.w[$]+=(this.target[$]-this.w[$])*i);let r=this.target.wet-this.w.wet;this.w.wet+=Math.sign(r)*Math.min(Math.abs(r),e/Q_),this.tint.lerp(this._c.set(this.target.tint),i);let a=this.w,o=a.overcast,c=a.dark;if(this.weather==="storm"&&a.dark>.5&&(this.nextStrike-=e,this.nextStrike<=0&&(this._strike(n),this.nextStrike=3.5+Math.random()*7)),this.flashT>=0){this.flashT+=e;let $=this.flashT;this.flash=Pn(Math.exp(-$*11)+.75*($>.17?Math.exp(-($-.17)*8):0),0,1),$>1.6&&(this.flashT=-1,this.flash=0,this.boltGeo.setDrawRange(0,0))}let l=this.flash;this.bolt.material.opacity=this.flashT>=0&&this.flashT<.5?l:0,this.bolt.visible=this.bolt.material.opacity>.02;let h=65*Math.sin((this.hour-6)/24*Math.PI*2),u=this.state.sunDir;u.setFromSphericalCoords(1,Math.PI/2-h*Oh,oy);let d=kn(-4,14,h),f=1-kn(-12,0,h),g=Math.exp(-Math.pow((h-3)/10,2)),b=this.state.moonDir;b.setFromSphericalCoords(1,Math.PI/2-(3+9*kn(-3,-30,h))*Oh,tp);let m=this._v.setFromSphericalCoords(1,Math.PI/2-38*Oh,tp),p=kn(-2,-11,h),v=ey,x=0;for(;x<v.length-2&&h>v[x+1][0];)x++;let _=v[x],S=v[x+1],w=Pn((h-_[0])/(S[0]-_[0]),0,1),T=this.skyC;["zen","mid","hor","band","sun"].forEach(($,le)=>T[$].copy(_[le+1]).lerp(S[le+1],w));let I=.07+.93*d,y=Pn(o*.92+c*.08,0,1),M=this._c.copy(this.tint).multiplyScalar(I).lerp(this._c2.set("#c9997f").multiplyScalar(I),g*.35*(1-c));T.zen.lerp(this._lit.copy(M).multiplyScalar(.8),y),T.mid.lerp(this._lit.copy(M).multiplyScalar(.92),y),T.hor.lerp(M,y),T.band.lerp(M,y);let D=$f*(1-.6*c);for(let $ of["zen","mid","hor","band"])T[$].multiplyScalar(D).add(this._c2.setRGB(.55,.65,1).multiplyScalar(l*1.6));let L=this.skyMat.uniforms;L.uZenith.value.copy(T.zen),L.uMid.value.copy(T.mid),L.uHorizon.value.copy(T.hor),L.uBand.value.copy(T.band),L.uSunCol.value.copy(T.sun).multiplyScalar($f),L.uSunDir.value.copy(u),L.uGlow.value=(1-o*.95)*kn(-6,1,h)*(1-c),L.uDisc.value=(1-o)*kn(-1.5,.5,h)*22,L.uBandAmt.value=(1-o*.85)*(.25+.75*g)*kn(-11,-2,h),L.uMoonDir.value.copy(b),L.uMoon.value=p*Pn(1-o*1.05,0,1)*(1-c),this.renderer.toneMappingExposure=(.5+.12*g)*(1-.5*c)*(1+.3*f);let k=this.renderer.toneMappingExposure;this.state.exposure=k,this.state.fogColor.copy(this._lit.copy(T.hor).lerp(T.band,.2*L.uBandAmt.value));let P=np(this.state.fogColor,k,this._fogDisp);this.scene.fog.color.copy(this.state.fogColor),this.scene.fog.density=a.fog,this._c2.copy(P).lerp(this._c.setRGB(.93,.95,.97).multiplyScalar(.1+.9*d*(1-.6*c)),.3),ty(this._c2,k,this.state.mistColor);{let $=kn(0,.6,this.mistDens)*(.35+.65*this.mistCover),le=kn(.0012,.0075,a.fog)*.85,ge=this.veil;ge.uVeil.value.set(Math.max($,le),Math.max(.05+.5*Math.pow(this.mistCover,1.5),le>$?.3:0)),ge.uVeilCol.value.copy(this.state.mistColor)}let F=h<-2.5,U=this.state.lightDir.copy(F?m:u);F?(this.sun.intensity=.38*p*(1-.8*o)*(1-c),this.sun.color.copy(ep)):(this.sun.intensity=3.4*kn(-2,9,h)*a.sun,this.sun.color.copy(sy).lerp(ry,Pn(g*1.3,0,1))),t&&(this.sun.position.copy(t).addScaledVector(U,120),this.sun.target.position.copy(t)),this.hemi.color.copy(P).lerp(this._c.set("#6f8cd0"),f*.75).lerp(this._c.set("#c4d4ff"),l),this.hemi.groundColor.set("#3a4630").multiplyScalar(.25+.75*d),this.hemi.intensity=(.16+.45*d+.34*f)*(1-.4*o)*(1-.35*c)+l*3.2,this.sky.position.copy(n),this.stars.position.copy(n),this.dome.position.copy(n),this.haze.position.set(n.x,0,n.z);let B=150+a.fog*1e5;this.haze.scale.y=B,this.haze.position.y=B/2-60,this.haze.material.uniforms.uColor.value.copy(this.state.fogColor),this.stars.material.opacity=f*(1-o*.95),this.stars.visible=this.stars.material.opacity>.01;let O=Pn(g*1.1,0,1)*(1-.92*c),z=this._lit.set("#ffffff").lerp(this._c2.set("#ff9d66"),O).multiplyScalar(2.4*d);z.add(this._c2.set("#8fa6e0").multiplyScalar(.32*f*(1-o*.6)));let Y=this._shade.copy(T.mid).multiplyScalar(.5).lerp(this._c2.copy(T.hor).multiplyScalar(.62),.45).lerp(this._c2.set("#a86a7a").multiplyScalar(1.05*d),O*.5);Y.add(this._c2.set("#101b38").multiplyScalar(.3*f)),z.multiplyScalar(1-.8*c),this.cloudTime+=e;let K=this.cloudMat.uniforms;K.uTime.value=this.cloudTime,K.uCover.value=a.clouds,K.uSoft.value=Pn(o*.9+c*.3,0,1),K.uFlash.value=l,K.uDrift.value.copy(this.windDir).multiplyScalar(.003+.02*a.wind),K.uSunDir.value.copy(h>=-2?u:b),K.uLit.value.copy(z),K.uShade.value.copy(Y);let Q=this.state;Q.elevation=h,Q.dayF=d,Q.night=f,Q.warm=g,Q.overcast=o,Q.rain=a.rain,Q.snow=a.snow,Q.wet=a.wet,Q.cover=a.cover,Q.wind=a.wind,Q.dark=c,Q.flash=l,Q.drift=Pn((a.wind-.5)*2.2,0,1)*(1-a.rain)*(1-a.snow);let G=Pn(a.rain*.35+a.snow*.25+(a.fog>.003?.3:0),0,.5);Q.lamps=Pn(Math.max(f,.7*(1-d))+G*d+c*.7,0,1),Q.moon=L.uMoon.value;let J=kn(5e-4,.0065,a.fog);if(Q.rays=F?.22*L.uMoon.value*(1+J):kn(-2.5,2.5,h)*(1-.55*o)*(1-c)*(.55+.45*g)*(1+1.3*J),Q.rayDir.copy(F?b:u),Q.rayCol.copy(F?ep:this.sun.color),Q.light=.14+.08*f+.86*d*(1-.3*o)*(1-.55*c)+l*.6,this.precip.update(e,n,Q,this.renderer.domElement.height),this.envTimer-=e,this.envTimer<=0){let $=[h.toFixed(1),Math.round(o*12),Math.round(c*12)].join("|");($!==this.envKey||!this.envRT)&&(this.envKey=$,this._captureEnv()),this.envTimer=.7}}setShadowSize(e){let t=this.sun.shadow;t.mapSize.x!==e&&(t.mapSize.set(e,e),t.map&&(t.map.dispose(),t.map=null))}_captureEnv(){let e=this.skyMat.uniforms,t=e.uDisc.value;e.uScale.value=2.1,e.uDisc.value=Math.min(t,4);let n=this.pmrem.fromScene(this.envScene,0,1,3e3);e.uScale.value=1,e.uGround.value.set(e.uHorizon.value.r*.13,e.uHorizon.value.g*.13,e.uHorizon.value.b*.12,1);let i=this.pmrem.fromScene(this.envScene,0,1,3e3);e.uGround.value.w=0,e.uDisc.value=t,this.envRT&&this.envRT.dispose(),this.carEnvRT&&this.carEnvRT.dispose(),this.envRT=n,this.carEnvRT=i,this.scene.environment=n.texture,this.onCarEnv&&this.onCarEnv(i.texture)}};var Wo=[{id:"mustang",name:"Mustang '67",file:"assets/models/mustang.glb",length:4.67,flip:!0,eye:[-.39,1.08,.3],doubleSide:!0,door:/^DriverDoor/,wheels:/^(Wheel|BrakeDisc)/,mats:{Interior:{metalness:0,roughness:.62},BlackPolished:{roughness:.18},Paint:{clearcoatRoughness:.08}},steer:{c:[-.385,.883,-.155],n:[0,.338,.941],r:.17},steerMesh:/^(Torus\.?001|Cube\.?009)/},{id:"mustang-blue",name:"Mustang '67 Xanh",file:"assets/models/mustang-blue.glb",length:4.67,flip:!0,eye:[-.39,1.08,.3],doubleSide:!0,door:/^DriverDoor/,wheels:/^(Wheel|BrakeDisc)/,mats:{Interior:{metalness:0,roughness:.62},BlackPolished:{roughness:.18},Body:{clearcoatRoughness:.08}},steer:{c:[-.385,.883,-.155],n:[0,.338,.941],r:.17},steerMesh:/^SteeringWheel/},{id:"divo",name:"Bugatti Divo",file:"assets/models/bugatti-divo.glb",length:4.64,flip:!0,wheels:/^(4_3|5_17)$/,basicMetal:{metalness:.6,roughness:.38}},{id:"milktruck",name:"Milk Truck",file:"assets/models/milktruck.glb",length:5,flip:!0,eye:[-.6,1.8,-1.3],wheels:/^Wheels/}],Zi=[{id:"reed",name:"Đồng cỏ lau",icon:"🌾"},{id:"forest",name:"Đồi thông",icon:"🌲"},{id:"mountain",name:"Đường núi",icon:"⛰️"},{id:"meadow",name:"Đồi cỏ",icon:"🌿"}],vs=[{id:"clear",name:"Trời nắng",icon:"☀️"},{id:"cloudy",name:"Nhiều mây",icon:"☁️"},{id:"windy",name:"Gió lớn",icon:"💨"},{id:"rain",name:"Mưa",icon:"🌧️"},{id:"storm",name:"Bão",icon:"⛈️"},{id:"snow",name:"Tuyết",icon:"❄️"},{id:"fog",name:"Sương mù",icon:"🌫️"}],Ti=[{id:"sunrise",name:"Bình minh",icon:"🌅",hour:6.4},{id:"noon",name:"Ban ngày",icon:"🌤️",hour:12.5},{id:"golden",name:"Giờ vàng",icon:"🌞",hour:17.3},{id:"sunset",name:"Hoàng hôn",icon:"🌇",hour:17.6},{id:"night",name:"Ban đêm",icon:"🌙",hour:22.5},{id:"auto",name:"Tự động",icon:"🕒",hour:null}],yn=[{id:"chase",name:"Sau xe"},{id:"low",name:"Sát mặt đường"},{id:"side",name:"Bên hông"},{id:"cockpit",name:"Trong xe"},{id:"orbit",name:"Quay quanh"},{id:"drone",name:"Từ trên cao"}],qo=[{id:"all",name:"Nhạc + âm thanh",icon:"🎵"},{id:"music",name:"Chỉ nhạc",icon:"🎶"},{id:"off",name:"Tắt tiếng",icon:"🔇"}],xs=[1.4,1.8,2,2.8,4,5.6,8,11,16],ip=0,oi=[{id:"low",name:"Low",ratio:.75,msaa:0,veg:.35,shadow:1024,refl:!1,dof:0,trees:0,view:1},{id:"good",name:"Good",ratio:1.5,msaa:4,veg:.85,shadow:2048,refl:!0,dof:36,trees:35,view:1},{id:"ultra",name:"Ultra",ratio:2,msaa:4,veg:1,shadow:4096,refl:!0,dof:48,trees:200,view:2}],Bh=oi.findIndex(s=>s.id==="good");var kh=512,Hn=288,ra=[.23,.13];function sp(s,e){let[t,n,i]=e.eye,r=new Ao(new E(0,n,i),new E(0,-.42,-1).normalize(),.05,2.5);s.updateMatrixWorld(!0);let a=r.intersectObject(s,!0).find(l=>!(l.object.material&&l.object.material.transparent)),o=a?a.point.clone():new E(0,n-.3,i-.7);o.y+=ra[1]/2+.03,o.z+=.07;let c=new at().setFromAxisAngle(new E(1,0,0),-.22);return{pos:o,quat:c}}var Xo=class{constructor(){this.canvas=document.createElement("canvas"),this.canvas.width=kh,this.canvas.height=Hn,this.ctx=this.canvas.getContext("2d"),this.tex=new _n(this.canvas),this.tex.colorSpace=it,this.tex.anisotropy=4,this.group=new Je;let e=new Ne(new gn(ra[0],ra[1]),new Ct({map:this.tex,color:new Z(2.2,2.2,2.2)})),t=new Ne(new Nt(ra[0]+.014,ra[1]+.014,.012),new vt({color:789776,roughness:.35,metalness:.3}));t.position.z=-.0065,this.group.add(t,e),this.light=new Xi(16762506,1.1,2.4,2),this.light.position.set(0,.03,.08),this.group.add(this.light),this.t=0,this.timer=0,this.speed=0,this.clock="",this._draw()}place(e){if(!e){this.group.visible=!1;return}this.group.visible=!0,this.group.position.copy(e.pos),this.group.quaternion.copy(e.quat)}update(e,t,n){this.t+=e,this.timer-=e,this.light.intensity=1.1*(.9+.1*Math.sin(this.t*.7)),!(this.timer>0)&&(this.timer=1,this.speed=t,this.clock=n,this._draw())}_draw(){let e=this.ctx,t=this.t,n=e.createLinearGradient(0,0,0,Hn);n.addColorStop(0,"#1d140d"),n.addColorStop(1,"#0d0906"),e.fillStyle=n,e.fillRect(0,0,kh,Hn),e.save(),e.beginPath(),e.rect(10,34,300,Hn-44),e.clip(),e.fillStyle="#231810",e.fillRect(10,34,300,Hn-44),e.strokeStyle="rgba(255,190,130,0.15)",e.lineWidth=2;let i=t*9%40;for(let c=-40;c<340;c+=40)e.beginPath(),e.moveTo(c+i*.3,34),e.lineTo(c-30+i*.3,Hn),e.stroke();for(let c=34;c<Hn+40;c+=40)e.beginPath(),e.moveTo(10,c+i),e.lineTo(310,c+i-12),e.stroke();e.strokeStyle="#ffa940",e.lineWidth=7,e.lineCap="round",e.beginPath();for(let c=0;c<=24;c++){let l=Hn-10-c*11,h=160+Math.sin(c*.35+t*.15)*46;c===0?e.moveTo(h,l):e.lineTo(h,l)}e.stroke(),e.fillStyle="#ffffff",e.beginPath(),e.moveTo(160,Hn-74),e.lineTo(148,Hn-46),e.lineTo(160,Hn-54),e.lineTo(172,Hn-46),e.closePath(),e.fill(),e.restore(),e.fillStyle="#ffe4c8",e.font="600 20px system-ui, sans-serif",e.textBaseline="middle",e.fillText(this.clock||"--:--",14,18),e.textAlign="right",e.fillText(Math.round(this.speed)+" km/h",kh-14,18),e.textAlign="left";let r=326,a=e.createLinearGradient(r,44,r+70,114);a.addColorStop(0,"#ff8a5c"),a.addColorStop(1,"#7b5cff"),e.fillStyle=a,e.fillRect(r,44,70,70),e.fillStyle="#ffffff",e.font="600 19px system-ui, sans-serif",e.fillText("Lo-fi Chill",r,136),e.fillStyle="#c9a27e",e.font="16px system-ui, sans-serif",e.fillText("Chill Drive Radio",r,160);let o=t/180%1;e.fillStyle="#3d2b1d",e.fillRect(r,184,170,5),e.fillStyle="#ffa940",e.fillRect(r,184,170*o,5),e.fillStyle="#ffb760";for(let c=0;c<12;c++){let l=8+26*Math.abs(Math.sin(t*2.3+c*1.7)*Math.sin(t*.9+c));e.fillRect(r+c*14,250-l,8,l)}this.tex.needsUpdate=!0}};var Hh=(s,e,t)=>Math.min(t,Math.max(e,s)),jo=class{constructor(e){this.root=new Je,this.tilt=new Je,this.root.add(this.tilt),e.add(this.root),this.loader=new Ji,this.loader.setMeshoptDecoder(br),this.onProgress=null,this.prepare=null,this.envMap=null,this.list=[],this.cache=new Map,this.current=null,this.token=0,this.time=0,this.pitch=0,this.roll=0,this.lastSpeed=0,this.dim={length:4.5,width:1.9,height:1.3},this.glowTex=pr(),this.lights=new Je,this.root.add(this.lights),this.spots=[0,1].map(()=>{let n=new ur(16771532,0,110,.8,1,.55);return this.lights.add(n,n.target),n});let t=(n,i)=>{let r=new Hi(new xi({map:this.glowTex,color:n,transparent:!0,opacity:0,depthWrite:!1,blending:Jt}));return r.scale.setScalar(i),this.lights.add(r),r};this.headGlow=[t(16772300,1.7),t(16772300,1.7)],this.tailGlow=[t(16722458,1),t(16722458,1)],this.lampLevel=0,this.brake=0,this.contact=new Ne(new gn(1,1).rotateX(-Math.PI/2),new Ct({alphaMap:hy(),color:0,transparent:!0,opacity:.72,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-6,fog:!1})),this.contact.position.y=.06,this.contact.renderOrder=1,this.root.add(this.contact),this.cabin=new Xi(16773856,0,2.6,2),this.tilt.add(this.cabin),this.cabinLevel=0}async probe(){let e=[];for(let t of Wo){if(!t.optional){e.push(t);continue}try{let n=await fetch(t.file,{method:"HEAD"}),i=n.headers.get("content-type")||"";n.ok&&!i.includes("text/html")&&e.push(t)}catch{}}return this.list=e,e}async select(e){let t=this.list[e],n=++this.token,i=this.cache.get(t.id);if(i||(i=await this._load(t),this.cache.set(t.id,i)),n!==this.token)return!1;if(this.prepare&&!i.ready){try{await this.prepare(i.group)}catch(r){console.warn("prepare",r)}if(i.ready=!0,n!==this.token)return!1}return this.current&&this.tilt.remove(this.current.group),this.tilt.add(i.group),this.current=i,this.dim=i.dim,this.shield=i.shield,this._placeLights(i.dim),!0}async _load(e){let n=(await this.loader.loadAsync(e.file,p=>{this.onProgress&&p.total&&this.onProgress(p.loaded/p.total)})).scene,i=new Je;i.add(n);let r=new Je;if(r.add(i),e.hide){let p=[];n.traverse(v=>{e.hide.test(v.name||"")&&p.push(v)}),p.forEach(v=>v.removeFromParent())}n.rotation.x=e.rotX||0,i.updateMatrixWorld(!0);let a=new Rt().setFromObject(i,!0),o=a.getSize(new E);o.x>o.z*1.02&&(n.rotation.y+=Math.PI/2),e.flip&&(n.rotation.y+=Math.PI),i.updateMatrixWorld(!0),a.setFromObject(i,!0),o=a.getSize(new E),i.scale.setScalar(e.length/o.z),i.updateMatrixWorld(!0),a.setFromObject(i,!0);let c=a.getCenter(new E);i.position.set(-c.x,-a.min.y,-c.z),r.updateMatrixWorld(!0),a.setFromObject(r,!0);let l={length:a.max.z-a.min.z,width:a.max.x-a.min.x,height:a.max.y-a.min.y};l.eye=e.eye||[-l.width*.2,Math.min(l.height*.8,1.15),0],e.basicMetal&&n.traverse(p=>{if(!p.isMesh||Array.isArray(p.material))return;let v=p.material;v.transmission>0||v.transparent&&v.opacity<.9||(p.material=new vt({name:v.name,color:v.color,map:v.map,side:v.side,...e.basicMetal}),v.dispose())});let h=[],u=[];n.traverse(p=>{if(!p.isMesh)return;e.steerMesh&&e.steerMesh.test(p.name)&&(p.material=fy());let v=Array.isArray(p.material)?p.material:[p.material],x=!1;for(let _ of v)_.transmission>0&&(_.transmission=0,_.transparent=!0,_.opacity=.32,_.depthWrite=!1,x=!0),_.transparent&&_.opacity<.9&&(x=!0),x&&!_.userData.glass&&py(_),e.doubleSide&&!_.transparent&&(_.side=dt),e.mats&&e.mats[_.name]&&Object.assign(_,e.mats[_.name]),/tail|brake|emissivered|rear.?light/i.test(_.name)&&_.emissive&&(_.emissive.set(16718346),h.push(_)),this._env(_),on(_);p.castShadow=!x,p.receiveShadow=!0,x&&u.push(p)});let d=e.wheels?this._wheels(r,e,l):[],f=e.door?this._door(r,e):null;r.updateMatrixWorld(!0);let g=uy(u,l),b=dy(r,n,g),m=sp(r,l);return{def:e,group:r,dim:l,wheels:d,door:f,tailMats:h,wipers:b,shield:g,screen:m,anim:null}}_env(e){e.envMap=this.envMap,e.envMapIntensity=this.envMap?1:.5}setEnvMap(e){this.envMap=e;for(let t of this.cache.values())t.group.traverse(n=>{if(n.isMesh)for(let i of Array.isArray(n.material)?n.material:[n.material])this._env(i)})}_door(e,t){let n=[];if(e.traverse(a=>{if(!(a===e||!t.door.test(a.name||""))){for(let o=a.parent;o&&o!==e;o=o.parent)if(t.door.test(o.name||""))return;n.push(a)}}),!n.length)return null;e.updateMatrixWorld(!0);let i=new Rt;for(let a of n)i.expandByObject(a,!0);let r=new ft;r.position.set(i.min.x+.04,0,i.min.z+.06),e.add(r),e.updateMatrixWorld(!0);for(let a of n)r.attach(a);return{pivot:r,amount:0}}setDoor(e){let t=this.current?.door;if(!t)return;t.amount=e;let n=e*e*(3-2*e);t.pivot.rotation.y=-1.05*n}frontWheel(e){let t=this.current,n=null;for(let r of t?.wheels||[])(!n||r.pivot.position.z<n.pivot.position.z)&&(n=r);let i=this.dim;return n?e.set(-i.width/2+.12,n.pivot.position.y,n.pivot.position.z):e.set(-i.width/2,.33,-i.length*.32)}_wheels(e,t,n){let i=[];e.traverse(a=>{if(!(a===e||!t.wheels.test(a.name||""))){for(let o=a.parent;o&&o!==e;o=o.parent)if(t.wheels.test(o.name||""))return;i.push(a)}});let r=[];for(let a of i){let o=new Rt().setFromObject(a,!0);if(o.isEmpty())continue;let c=o.getSize(new E),l=o.getCenter(new E);if(!(Math.abs(c.y-c.z)<.28*Math.max(c.y,c.z)&&c.z<n.length*.35&&c.y<n.height*.95&&c.y>n.height*.12&&l.y<n.height*.5))continue;let d=new ft;d.position.set(l.x,o.max.y-c.z/2,l.z),e.add(d),e.updateMatrixWorld(!0),d.attach(a),r.push({pivot:d,radius:c.z/2})}return r}_placeLights(e){let t=e.width*.3,n=Math.min(.7,e.height*.45);this.spots.forEach((i,r)=>{let a=r?t:-t;i.position.set(a,n,-e.length/2+.3),i.target.position.set(a*.9,0,-40)}),this.headGlow.forEach((i,r)=>i.position.set(r?t:-t,n,-e.length/2-.05)),this.tailGlow.forEach((i,r)=>i.position.set(r?t:-t,n+.05,e.length/2+.05)),this.contact.scale.set(e.width*1.12,1,e.length*1.06),this.cabin.position.set(e.eye[0]*.5,e.eye[1]+.05,e.eye[2]-.45)}setLights(e){this.lampLevel=e}setWiper(e){if(!(!this.current||e===this.current.wiperTh)){this.current.wiperTh=e;for(let t of this.current.wipers)t(e)}}update(e,t){this.time+=e,this.root.position.copy(t.pos),this.root.rotation.set(t.pitch||0,t.yaw,0,"YXZ");let n=(t.speed-this.lastSpeed)/Math.max(e,.001);this.brakeAcc=n,this.lastSpeed=t.speed;let i=1-Math.exp(-e*4);this.pitch+=(Hh(n*.004,-.04,.04)-this.pitch)*i,this.roll+=(Hh(-t.latVel*.012,-.05,.05)-this.roll)*i;let r=Hh(t.speed/20,0,1);this.tilt.rotation.set(this.pitch,0,this.roll),this.tilt.position.y=(.005*Math.sin(this.time*7.3)+.004*Math.sin(this.time*12.1))*r;let a=(t.rough||0)*r;if(a>.001&&(this.tilt.position.y+=a*(.014*Math.sin(this.time*19.3)+.01*Math.sin(this.time*31.7+1.1)),this.tilt.rotation.z+=a*(.006*Math.sin(this.time*13.1)+.004*Math.sin(this.time*23.9)),this.tilt.rotation.x+=a*.004*Math.sin(this.time*17.7+.4)),this.current)for(let h of this.current.wheels)h.pivot.rotation.x-=t.speed*e/h.radius;let o=this.lampLevel;this.spots.forEach(h=>{h.intensity=85*o}),this.headGlow.forEach(h=>{h.material.opacity=.6*o});let c=this.brakeAcc||0;this.brake+=((c<-1.2?1:0)-this.brake)*(1-Math.exp(-e*8));let l=.3+.7*o+.6*this.brake;this.tailGlow.forEach(h=>{h.material.opacity=Math.min(1,.95*l),h.scale.setScalar(1.15+.5*l)});for(let h of this.current?.tailMats||[])h.emissiveIntensity=.8+2.6*l;this.cabin.intensity=this.cabinLevel}};function hy(){let s=document.createElement("canvas");s.width=128,s.height=256;let e=s.getContext("2d");e.filter="blur(14px)",e.fillStyle="#fff",e.beginPath(),e.roundRect?e.roundRect(26,30,76,196,26):e.rect(26,30,76,196),e.fill(),e.filter="blur(6px)",e.globalAlpha=.5,e.fillRect(36,44,56,168);let t=new _n(s);return t.colorSpace=vn,t}function uy(s,e){let[t,n,i]=e.eye,r=new E(t,n,i),a=new E,o=new E,c=new E,l=new E,h=new E,u=new E,d=new E,f=[],g=0;for(let x of s){let _=x.geometry.attributes.position,S=x.geometry.index,w=(S?S.count:_.count)/3;for(let T=0;T<w;T++){let I=S?S.getX(T*3):T*3,y=S?S.getX(T*3+1):T*3+1,M=S?S.getX(T*3+2):T*3+2;if(a.fromBufferAttribute(_,I).applyMatrix4(x.matrixWorld),o.fromBufferAttribute(_,y).applyMatrix4(x.matrixWorld),c.fromBufferAttribute(_,M).applyMatrix4(x.matrixWorld),h.copy(a).add(o).add(c).multiplyScalar(1/3),h.z>i-.25||h.y<n-.3)continue;l.subVectors(o,a).cross(c.clone().sub(a));let D=l.length()/2;D<1e-7||(l.normalize(),l.dot(c.subVectors(r,h))<0&&l.negate(),!(Math.abs(l.x)>.5||l.z<.25||l.y>-.2)&&(u.addScaledVector(l,D),d.addScaledVector(h,D),g+=D,f.push(a.clone(),o.clone(),h.clone())))}}let b={center:new E,normal:new E,right:new E,up:new E,bounds:[0,0,0,0]};if(g<.1?(b.center.set(0,n+.1,i-.62),b.normal.set(0,-.6,.8),b.bounds=[-e.width*.38,e.width*.38,-.3,.3]):(b.center.copy(d).multiplyScalar(1/g),b.normal.copy(u).normalize()),b.right.set(1,0,0).addScaledVector(b.normal,-b.normal.x).normalize(),b.up.crossVectors(b.normal,b.right),b.up.y<0&&b.up.negate(),f.length){let x=[1e9,-1e9,1e9,-1e9];for(let _ of f){_.sub(b.center);let S=_.dot(b.right),w=_.dot(b.up);x[0]=Math.min(x[0],S),x[1]=Math.max(x[1],S),x[2]=Math.min(x[2],w),x[3]=Math.max(x[3],w)}b.bounds=x}let m=(b.bounds[1]-b.bounds[0])/2,p=(b.bounds[0]+b.bounds[1])/2,v=b.bounds[2]+.03;return b.wipers=[{u:p-m*.76,v,rest:0,sign:1,r0:m*.1,r1:m*.68},{u:p+m*.76,v,rest:Math.PI,sign:-1,r0:m*.1,r1:m*.68}],b.sweep=1.62,b}function dy(s,e,t){let n=[];e.traverse(a=>{/^WiperBladeArm\d*$/i.test(a.name)&&!a.isMesh&&n.push(a)});let i=[],r=t.normal;if(n.length){let a=[];for(let o of n){let c=[],l=[];if(o.children.forEach(L=>L.traverse(k=>{if(!k.isMesh)return;let P=k.geometry.attributes.position,F=L.isMesh?c:l;for(let U=0;U<P.count;U++)F.push(new E().fromBufferAttribute(P,U).applyMatrix4(k.matrixWorld))})),!c.length||!l.length)continue;let h=l.reduce((L,k)=>L.add(k),new E).multiplyScalar(1/l.length),u=c[0];for(let L of c)L.distanceToSquared(h)>u.distanceToSquared(h)&&(u=L);let d=c.filter(L=>L.distanceTo(u)<.03),f=d.reduce((L,k)=>L.add(k),new E).multiplyScalar(1/d.length),g=f.clone().sub(t.center),b=g.dot(t.right),m=g.dot(t.up),p=h.clone().sub(f),v=Math.atan2(p.dot(t.up),p.dot(t.right)),x=new oe(Math.cos(v),Math.sin(v)),_=1e9,S=0;for(let L of l){let k=L.clone().sub(f),P=k.dot(t.right)*x.x+k.dot(t.up)*x.y;_=Math.min(_,P),S=Math.max(S,P)}let w=Math.cos(v)>=0?1:-1;o.updateMatrixWorld(!0);let T=o.matrixWorld.clone(),I=o.parent.matrixWorld.clone().invert();o.matrixAutoUpdate=!1;let y=new be,M=new be,D=new be().makeTranslation(-f.x,-f.y,-f.z);y.makeTranslation(f.x,f.y,f.z),i.push(L=>{M.makeRotationAxis(r,w*L),o.matrix.copy(I).multiply(y).multiply(M).multiply(D).multiply(T),o.matrixWorldNeedsUpdate=!0}),a.push({u:b,v:m,rest:v,sign:w,r0:Math.max(0,_),r1:S})}if(a.length){for(a.sort((o,c)=>o.u-c.u);a.length<2;)a.push(a[0]);t.wipers=a.slice(0,2)}}if(!i.length){let a=new vt({color:1315862,roughness:.55,metalness:.4}),o=new be().makeBasis(t.right,t.up,r);for(let c of t.wipers){let l=new Je;l.position.copy(t.center).addScaledVector(t.right,c.u).addScaledVector(t.up,c.v).addScaledVector(r,-.02),l.quaternion.setFromRotationMatrix(o);let h=new Je;l.add(h);let u=new Ne(new Nt(c.r1*.97,.008,.008),a);u.position.set(c.r1*.485,0,-.014);let d=new Ne(new Nt(c.r1-c.r0,.012,.012),a);d.position.set((c.r0+c.r1)/2,0,-.004),h.add(u,d),h.rotation.z=c.rest,s.add(l),i.push(f=>{h.rotation.z=c.rest+c.sign*f})}}return i}var zh=null;function fy(){if(zh)return zh;let s=new vt({name:"Leather",color:1249810,roughness:.58,metalness:0});return s.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vLP;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        vLP = position * vec3(length(modelMatrix[0].xyz), length(modelMatrix[1].xyz), length(modelMatrix[2].xyz));`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
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
        roughnessFactor = clamp(roughnessFactor + (lNoise(vLP * 330.0) - 0.5) * 0.25, 0.3, 1.0);`)},s.customProgramCacheKey=()=>"leather",zh=s,s}function py(s){s.userData.glass=!0,s.metalness=0,s.roughness=Math.min(s.roughness,.04),s.depthWrite=!1,s.onBeforeCompile=e=>{e.fragmentShader=e.fragmentShader.replace("#include <opaque_fragment>",`#include <opaque_fragment>
      gl_FragColor.a = clamp(gl_FragColor.a + dot(reflectedLight.indirectSpecular + reflectedLight.directSpecular, vec3(0.3, 0.59, 0.11)) * 1.4, 0.0, 0.94);`)},s.customProgramCacheKey=()=>"glass-reflect"}var aa=(s,e,t)=>Math.min(t,Math.max(e,s)),Gh=16,Vh=35,my=(s,e,t)=>{let n=((e-s+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI;return s+n*t},Yo=class{constructor(e){this.camera=e,this.mode=0,this.yaw=0,this.orbit=.9,this.relP=new E,this.relL=new E,this.fov=60,this.first=!0,this.blend=0,this.cine=0,this.intro=-1,this._p=new E,this._l=new E,this._f=new E,this._r=new E,this._cp=new E,this._cl=new E,this._dl=new E,this._eye=new E,this.eyeAt=null,this.look={yaw:0,pitch:0,hold:!1,idle:0},this.sideSign=0,this.sidePref=0,this.focal=28,this.focalS=28,this.focalEff=28}zoomBy(e){this.focal=aa(this.focal/e,Gh,Vh)}fovFor(e){let t=Math.atan(18/e),n=this.camera.aspect||1.6;return(n>=1?2*Math.atan(Math.tan(t)/n):2*t)*180/Math.PI}lookBy(e,t){let n=this.look;n.yaw=Math.atan2(Math.sin(n.yaw-e),Math.cos(n.yaw-e)),n.pitch=aa(n.pitch+t,-1.2,1.2)}get name(){return yn[this.mode].name}startIntro(){this.intro=0,this.first=!0}setMode(e){this.mode=e%yn.length,this.intro=-1,this.sideSign=0,this.blend=.7,this.look.yaw=this.look.pitch=0;let t=yn[this.mode].id==="cockpit";this.camera.near=t?.04:.3,this.camera.updateProjectionMatrix()}update(e,t){let n=yn[this.mode].id,{pos:i,speed:r,dim:a}=t;this.yaw=this.first?t.yaw:my(this.yaw,t.yaw,1-Math.exp(-e*3));let o=(L,k)=>k.set(-Math.sin(L),0,-Math.cos(L)),c=(L,k)=>k.set(Math.cos(L),0,-Math.sin(L)),l=o(this.yaw,this._f),h=new E(-Math.sin(t.yaw),0,-Math.cos(t.yaw)),u=c(t.yaw,this._r),d=this._p,f=this._l,g=5,b=7,m=!1,p=aa(r/45,0,1),v=t.fx||0,x=Math.tan(t.pitch||0),_=this.cine;switch(n){case"chase":d.copy(i).addScaledVector(l,-(a.length*.5+6.2+1.4*v+1.8*_)).setY(i.y+2.3+a.height*.4),f.copy(i).addScaledVector(l,13).setY(i.y+1.75+x*10);break;case"low":d.copy(i).addScaledVector(l,-(a.length*.5+4.2)).setY(i.y+.95),f.copy(i).addScaledVector(l,10).setY(i.y+1+x*10);break;case"side":{this.sideSign||(this.sideSign=this.sidePref||t.side||1),d.copy(i).addScaledVector(u,this.sideSign*11).setY(i.y+1.5),f.copy(i).setY(i.y+a.height*.42),g=9,b=12;break}case"cockpit":{let[L,k,P]=a.eye;this.eyeAt&&this.eyeAt(this._eye)?d.copy(this._eye):d.copy(i).addScaledVector(u,L).addScaledVector(h,-P).setY(i.y+k-x*P),f.copy(d).addScaledVector(h,30).setY(d.y-30*Math.tan(this.cockpitPitch??.24)+x*30),m=!0;break}case"orbit":this.orbit+=e*.2,d.set(i.x+Math.cos(this.orbit)*8.5,i.y+2.2+Math.sin(this.orbit*.7)*.8,i.z+Math.sin(this.orbit)*8.5),f.copy(i).setY(i.y+.8);break;case"drone":d.copy(i).addScaledVector(l,-15).setY(i.y+13),f.copy(i).addScaledVector(l,6).setY(i.y+.5),g=3.5;break}this.focalS+=(this.focal-this.focalS)*(1-Math.exp(-e*8)),this.focalEff=this.focalS*(1-.04*p);let S=this.fovFor(this.focalEff),w=!1;if(this.intro>=0&&n==="chase"){this.intro+=e;let L=Math.min(1,this.intro/6.5),k=L*L*(3-2*L);if(L>=1)this.intro=-1;else{w=!0;let P=a.length*.5+6.2+1.8*_,F=.5+(Math.PI-.5)*k,U=6.2+(P-6.2)*k,B=i.y+.65+(2.3+a.height*.4-.65)*k,O=f.clone();d.copy(i).addScaledVector(h,Math.cos(F)*U).addScaledVector(u,(t.side||1)*Math.sin(F)*Math.min(U,3.4)).setY(B),f.copy(i).setY(i.y+.7).lerp(O,k),S=36+(S-36)*k}}else this.intro>=0&&(this.intro=-1);this.blend=Math.max(0,this.blend-e);let T=1-Math.exp(-e*g),I=1-Math.exp(-e*b);m&&(T=I=this.blend>0?1-Math.exp(-e*9):1),(this.first||w)&&(T=I=1),this.relP.lerp(d.sub(i),T),this.relL.lerp(f.sub(i),I),this.fov+=(S-this.fov)*(this.first?1:1-Math.exp(-e*3)),this.first=!1;let y=this.look,M=this._cp.copy(this.relP),D=this._cl.copy(this.relL);if(Math.abs(y.yaw)>1e-4||Math.abs(y.pitch)>1e-4)if(m){let L=this._dl.copy(D).sub(M),k=L.length(),P=Math.atan2(L.x,L.z)-y.yaw,F=aa(Math.atan2(L.y,Math.hypot(L.x,L.z))+y.pitch,-1.2,1.2);L.set(Math.sin(P)*Math.cos(F),Math.sin(F),Math.cos(P)*Math.cos(F)).multiplyScalar(k),D.copy(M).add(L)}else{let L=Math.cos(y.yaw),k=Math.sin(y.yaw);M.set(M.x*L+M.z*k,M.y,-M.x*k+M.z*L),D.set(D.x*L+D.z*k,D.y,-D.x*k+D.z*L);let P=Math.hypot(M.x,M.z),F=M.length(),U=aa(Math.atan2(M.y,P)+y.pitch,.03,1.35),B=F*Math.cos(U)/Math.max(P,.001);M.set(M.x*B,F*Math.sin(U),M.z*B)}if(this.camera.position.copy(i).add(M),this.groundAt){let L=this.groundAt(this.camera.position.x,this.camera.position.z)+.6;this.camera.position.y<L&&(this.camera.position.y=L)}this._l.copy(i).add(D),this.camera.lookAt(this._l),Math.abs(this.camera.fov-this.fov)>.01&&(this.camera.fov=this.fov,this.camera.updateProjectionMatrix())}};var Ko=s=>440*Math.pow(2,(s-69)/12),_s=(s,e)=>s+Math.random()*(e-s),Wh=s=>s[Math.floor(Math.random()*s.length)],rp=[[{r:41,n:[53,57,60,64]},{r:40,n:[52,55,59,62]},{r:38,n:[50,53,57,60]},{r:36,n:[52,55,59,62]}],[{r:38,n:[50,53,57,60]},{r:43,n:[53,55,59,62]},{r:36,n:[52,55,59,62]},{r:45,n:[55,57,60,64]}],[{r:36,n:[52,55,59,62]},{r:45,n:[55,57,60,64]},{r:38,n:[50,53,57,60]},{r:43,n:[53,55,59,62]}],[{r:45,n:[55,57,60,64]},{r:38,n:[50,53,57,60]},{r:43,n:[53,55,59,62]},{r:36,n:[52,55,59,62]}]],ap=[[0,6,10],[0,7,10,14],[0,10],[0,3,8,11]],gy=[72,74,76,79,81,84],Jo=class{constructor(){this.ctx=null,this.mode=0,this.bpm=74,this.step=0,this.bar=0,this.prog=rp[0],this.pattern=ap[0],this.lastMel=-99}async start(){if(this.ctx){await this.ctx.resume();return}let e=window.AudioContext||window.webkitAudioContext;if(!e)return;let t=this.ctx=new e;this.master=t.createGain(),this.master.gain.value=0;let n=t.createDynamicsCompressor();n.threshold.value=-16,n.ratio.value=3,this.master.connect(n).connect(t.destination),this.musicGain=t.createGain();let i=t.createBiquadFilter();i.type="lowpass",i.frequency.value=4800,i.Q.value=.4,this.musicGain.connect(i).connect(this.master),this.pianoBus=t.createGain();let r=t.createBiquadFilter();r.type="lowpass",r.frequency.value=2400,this.pianoBus.connect(r).connect(this.musicGain),this.drumBus=t.createGain();let a=t.createBiquadFilter();a.type="lowpass",a.frequency.value=3400,this.drumBus.connect(a).connect(this.musicGain);let o=t.sampleRate*2.6,c=t.createBuffer(2,o,t.sampleRate);for(let g=0;g<2;g++){let b=c.getChannelData(g);for(let m=0;m<o;m++)b[m]=(Math.random()*2-1)*Math.pow(1-m/o,3.2)}this.reverb=t.createConvolver(),this.reverb.buffer=c;let l=t.createGain();l.gain.value=.38,this.reverbIn=t.createGain(),this.reverbIn.connect(this.reverb).connect(l).connect(this.musicGain),r.connect(this.reverbIn),this.echo=t.createDelay(2),this.echo.delayTime.value=60/this.bpm*.75;let h=t.createGain();h.gain.value=.34;let u=t.createBiquadFilter();u.type="lowpass",u.frequency.value=1800,this.echo.connect(u).connect(h).connect(this.echo),u.connect(this.musicGain),this.wow=t.createOscillator(),this.wow.frequency.value=.55,this.wowGain=t.createGain(),this.wowGain.gain.value=9,this.wow.connect(this.wowGain),this.wow.start();let d=t.createBuffer(1,t.sampleRate*2,t.sampleRate),f=d.getChannelData(0);for(let g=0;g<f.length;g++)f[g]=Math.random()*2-1;this.noise=d,this._vinyl(),this._ambient(),this.nextTime=t.currentTime+.15,this.timer=setInterval(()=>this._tick(),50),document.addEventListener("visibilitychange",()=>{document.hidden?t.suspend():this.mode!==2&&t.resume()}),this.setMode(this.mode)}setMode(e){if(this.mode=e,!this.ctx)return;let t=this.ctx.currentTime;this.master.gain.setTargetAtTime(e===2?0:.9,t,.4)}_src(e,t=!0){let n=this.ctx.createBufferSource();return n.buffer=e,n.loop=t,n.loopStart=Math.random(),n}_vinyl(){let e=this.ctx,t=e.sampleRate*4,n=e.createBuffer(1,t,e.sampleRate),i=n.getChannelData(0);for(let c=0;c<t;c++)i[c]=(Math.random()*2-1)*.012;for(let c=0;c<70;c++){let l=Math.floor(Math.random()*(t-10));i[l]+=_s(.25,.8)*(Math.random()<.5?-1:1),i[l+1]-=_s(.1,.4)}let r=e.createBufferSource();r.buffer=n,r.loop=!0;let a=e.createBiquadFilter();a.type="highpass",a.frequency.value=1300;let o=e.createGain();o.gain.value=.16,r.connect(a).connect(o).connect(this.musicGain),r.start()}_ambient(){let e=this.ctx;this.ambGain=e.createGain(),this.ambGain.gain.value=1,this.ambGain.connect(this.master);let t=(i,r,a)=>{let o=this._src(this.noise),c=e.createBiquadFilter();c.type=i,c.frequency.value=r,c.Q.value=a;let l=e.createGain();return l.gain.value=0,o.connect(c).connect(l).connect(this.ambGain),o.start(),l};this.rainG=t("bandpass",2200,.5),this.windG=t("lowpass",420,.7),this.tireG=t("lowpass",750,.6);let n=e.createOscillator();n.frequency.value=.13,this.gustG=e.createGain(),this.gustG.gain.value=0,n.connect(this.gustG).connect(this.windG.gain),n.start(),this.engLp=e.createBiquadFilter(),this.engLp.type="lowpass",this.engLp.frequency.value=260,this.engG=e.createGain(),this.engG.gain.value=0,this.eng=[e.createOscillator(),e.createOscillator()],this.eng[0].type="sawtooth",this.eng[1].type="triangle",this.eng.forEach(i=>{i.frequency.value=40,i.connect(this.engLp),i.start()}),this.engLp.connect(this.engG).connect(this.ambGain)}setAmbient({speed:e,rain:t,snow:n,wind:i=0,dark:r=0,fx:a=0}){if(!this.ctx)return;let o=this.ctx.currentTime,c=.25,l=this.mode===0?1:0;this.ambGain.gain.setTargetAtTime(l,o,.4),this.rainG.gain.setTargetAtTime(t*.2*(1+.6*r),o,c),this.windG.gain.setTargetAtTime(.012+e*.0016+n*.05+i*i*.1+a*.085,o,c),this.gustG.gain.setTargetAtTime(i*i*.07,o,c),this.tireG.gain.setTargetAtTime(Math.min(e*.0011,.05)*(1+t),o,c);let h=30+e*2.2;this.eng[0].frequency.setTargetAtTime(h,o,.15),this.eng[1].frequency.setTargetAtTime(h*2,o,.15),this.engLp.frequency.setTargetAtTime(180+e*7,o,.2),this.engG.gain.setTargetAtTime(.02+Math.min(e,40)*4e-4,o,.2)}thunder(e=1.5,t=1){if(!this.ctx||this.mode!==0)return;let n=this.ctx,i=n.currentTime+e,r=n.sampleRate*5,a=n.createBuffer(1,r,n.sampleRate),o=a.getChannelData(0),c=0;for(let d=0;d<r;d++)c=(c+(Math.random()*2-1)*.06)/1.02,o[d]=c*3.5;let l=n.createBufferSource();l.buffer=a;let h=n.createBiquadFilter();h.type="lowpass",h.frequency.setValueAtTime(900,i),h.frequency.exponentialRampToValueAtTime(110,i+4);let u=n.createGain();u.gain.setValueAtTime(1e-4,i),u.gain.linearRampToValueAtTime(.9*t,i+.12),u.gain.setTargetAtTime(1e-4,i+.3,1.1),l.connect(h).connect(u).connect(this.ambGain),l.start(i),l.stop(i+5),this._noiseHit(i,.25,"bandpass",700,.3*t)}_tick(){let e=this.ctx;if(!e||e.state!=="running")return;let t=60/this.bpm/4;for(;this.nextTime<e.currentTime+.3;){let n=this.step%2?t*.2:0;this._step(this.step,this.nextTime+n),this.nextTime+=t,++this.step===16&&(this.step=0,this.bar++)}}_step(e,t){e===0&&this.bar%4===0&&(this.prog=Wh(rp),this.pattern=Wh(ap));let n=this.prog[this.bar%4];if(this.pattern.includes(e)){let i=e===0?1:_s(.55,.8);n.n.forEach((r,a)=>this._epiano(r,t+a*.014+_s(0,.008),i,e===0?2.4:1.2))}e===0&&this._bass(n.r,t,1.7),(e===10||e===14&&Math.random()<.4)&&this._bass(n.r+(Math.random()<.5?0:7),t,.8),(e===0||e===10||e===7&&Math.random()<.3)&&this._kick(t),(e===4||e===12)&&this._snare(t),e%2===0&&this._hat(t,e%4===2?.8:.5,e===14&&Math.random()<.25),e%2===0&&this.bar-this.lastMel>0&&Math.random()<.16&&(this._pluck(Wh(gy),t,_s(.5,.9)),this.lastMel=this.bar+(Math.random()<.5?0:-1))}_osc(e,t,n,i,r=0){let a=this.ctx.createOscillator();return a.type=e,a.frequency.value=t,a.detune.value=r,this.wowGain.connect(a.detune),a.start(n),a.stop(n+i),a}_epiano(e,t,n,i){let r=this.ctx,a=Ko(e),o=r.createGain();o.gain.setValueAtTime(1e-4,t),o.gain.linearRampToValueAtTime(n*.075,t+.012),o.gain.exponentialRampToValueAtTime(n*.03,t+.4),o.gain.exponentialRampToValueAtTime(1e-4,t+i),this._osc("sine",a,t,i+.1).connect(o),this._osc("triangle",a,t,i+.1,_s(3,8)).connect(o);let c=r.createGain();c.gain.setValueAtTime(n*.022,t),c.gain.exponentialRampToValueAtTime(1e-4,t+.2),this._osc("sine",a*4,t,.3).connect(c).connect(this.pianoBus),o.connect(this.pianoBus)}_bass(e,t,n){let i=this.ctx.createGain();i.gain.setValueAtTime(1e-4,t),i.gain.linearRampToValueAtTime(.2,t+.03),i.gain.exponentialRampToValueAtTime(1e-4,t+n);let r=this.ctx.createBiquadFilter();r.type="lowpass",r.frequency.value=380,this._osc("sine",Ko(e),t,n+.1).connect(i),this._osc("triangle",Ko(e),t,n+.1).connect(i),i.connect(r).connect(this.musicGain)}_pluck(e,t,n){let i=this.ctx.createGain();i.gain.setValueAtTime(1e-4,t),i.gain.linearRampToValueAtTime(n*.06,t+.01),i.gain.exponentialRampToValueAtTime(1e-4,t+1.1);let r=this.ctx.createBiquadFilter();r.type="lowpass",r.frequency.value=2200,this._osc("triangle",Ko(e),t,1.2).connect(i),i.connect(r),r.connect(this.pianoBus);let a=this.ctx.createGain();a.gain.value=.6,r.connect(a).connect(this.echo)}_kick(e){let t=this.ctx.createOscillator(),n=this.ctx.createGain();t.frequency.setValueAtTime(130,e),t.frequency.exponentialRampToValueAtTime(42,e+.14),n.gain.setValueAtTime(.5,e),n.gain.exponentialRampToValueAtTime(1e-4,e+.32),t.connect(n).connect(this.drumBus),t.start(e),t.stop(e+.35)}_noiseHit(e,t,n,i,r){let a=this._src(this.noise,!1),o=this.ctx.createBiquadFilter();o.type=n,o.frequency.value=i;let c=this.ctx.createGain();c.gain.setValueAtTime(r,e),c.gain.exponentialRampToValueAtTime(1e-4,e+t),a.connect(o).connect(c).connect(this.drumBus),a.start(e,Math.random()),a.stop(e+t+.02)}_snare(e){this._noiseHit(e,.16,"bandpass",1900,.28);let t=this.ctx.createOscillator(),n=this.ctx.createGain();t.frequency.value=185,n.gain.setValueAtTime(.16,e),n.gain.exponentialRampToValueAtTime(1e-4,e+.1),t.connect(n).connect(this.drumBus),t.start(e),t.stop(e+.12)}_hat(e,t,n){this._noiseHit(e,n?.2:.045,"highpass",7500,.12*t*_s(.7,1))}};var Zo=27,by=12,qh=2;function Qo(s){let e=s>>>0;return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function vy(){let s=Qo(3),e=[],t=[],n=[],i=[],r=new Z(6971440),a=new Z(11115094),o=new Z(14733202),c=(u,d,f,g,b)=>{e.push(u,d,f),n.push(g.r,g.g,g.b),t.push(b[0],b[1],b[2])},l=5;for(let u=0;u<l;u++){let d=u/l*Math.PI*2+(s()-.5)*.7,f=Math.cos(d),g=Math.sin(d),b=-g,m=f,p=1.05+s()*.6,v=.35+s()*.45,x=new E(f*.35,1,g*.35).normalize().toArray(),_=[{c:[f*.03,0,g*.03],hw:.034,col:r},{c:[f*v*.4,p*.6,g*v*.4],hw:.03,col:a}],S=e.length/3;for(let w of _)c(w.c[0]-b*w.hw,w.c[1],w.c[2]-m*w.hw,w.col,x),c(w.c[0]+b*w.hw,w.c[1],w.c[2]+m*w.hw,w.col,x);c(f*v,p*.92,g*v,o,x),i.push(S,S+1,S+2,S+1,S+3,S+2,S+2,S+3,S+4)}let h=new Oe;return h.setAttribute("position",new He(e,3)),h.setAttribute("normal",new He(t,3)),h.setAttribute("color",new He(n,3)),h.setIndex(i),h}function xy(){let s=Qo(11),e=[],t=[],n=[],i=[],r=new Z(3955232),a=new Z(7312436),o=new Z(12176482),c=(u,d,f,g,b)=>{e.push(u,d,f),n.push(g.r,g.g,g.b),t.push(b[0],b[1],b[2])},l=5;for(let u=0;u<l;u++){let d=u/l*Math.PI*2+(s()-.5)*.9,f=Math.cos(d),g=Math.sin(d),b=-g,m=f,p=.32+s()*.45,v=.05+s()*.18,x=(s()-.5)*.25,_=(s()-.5)*.25,S=new E(f*.3,1,g*.3).normalize().toArray(),w=e.length/3;c(x-b*.03,0,_-m*.03,r,S),c(x+b*.03,0,_+m*.03,r,S),c(x+f*v*.4-b*.024,p*.55,_+g*v*.4-m*.024,a,S),c(x+f*v*.4+b*.024,p*.55,_+g*v*.4+m*.024,a,S),c(x+f*v,p,_+g*v,o,S),i.push(w,w+1,w+2,w+1,w+3,w+2,w+2,w+3,w+4)}let h=new Oe;return h.setAttribute("position",new He(e,3)),h.setAttribute("normal",new He(t,3)),h.setAttribute("color",new He(n,3)),h.setIndex(i),h}function _y(){let s=Qo(29),e=[],t=[],n=[],i=[],r=new Z(4612666),a=new Z(8036444),o=new Z(12046479),c=(u,d,f,g,b)=>{e.push(u,d,f),n.push(g.r,g.g,g.b),t.push(b[0],b[1],b[2])},l=7;for(let u=0;u<l;u++){let d=u/l*Math.PI*2+(s()-.5)*.8,f=Math.cos(d),g=Math.sin(d),b=-g,m=f,p=.9+s()*.5,v=.12+s()*.3,x=.035+s()*.02,_=(s()-.5)*.3,S=(s()-.5)*.3,w=new E(f*.3,1,g*.3).normalize().toArray(),T=e.length/3,I=[[0,x,r],[.45,x*.85,a],[.8,x*.5,a.clone().lerp(o,.5)],[1,.002,o]];for(let[y,M,D]of I){let L=_+f*v*y*y,k=S+g*v*y*y,P=p*y;c(L-b*M,P,k-m*M,D,w),c(L+b*M,P,k+m*M,D,w)}for(let y=0;y<I.length-1;y++){let M=T+y*2;i.push(M,M+1,M+2,M+1,M+3,M+2)}}let h=new Oe;return h.setAttribute("position",new He(e,3)),h.setAttribute("normal",new He(t,3)),h.setAttribute("color",new He(n,3)),h.setIndex(i),h}function yy(){let s=[],e=[],t=[],n=[],i=(a,o,c,l,h)=>{let u=Math.cos(a),d=Math.sin(a),f=s.length/3;for(let[g,b]of[[0,0],[1,0],[1,1],[0,1]]){let m=(g-.5)*c,p=o-l+b*l,v=h*b*b;s.push(m*u+v,p,m*d),e.push(0,1,0),t.push(g,b)}n.push(f,f+1,f+2,f,f+2,f+3)};i(.3,2,.34,.98,.1),i(.3+Math.PI/2,2,.34,.98,.1),i(1.3,1.72,.27,.74,-.06);let r=new Oe;return r.setAttribute("position",new He(s,3)),r.setAttribute("normal",new He(e,3)),r.setAttribute("uv",new He(t,2)),r.setIndex(n),r}var My=`
attribute vec4 aSeed;
uniform vec3 uCam;
uniform float uTime, uWind, uCell, uScale, uIn0, uIn1, uOut0, uOut1, uCorr;
uniform vec2 uWindDir;
uniform vec3 uRoad[${Zo}];     // (x, y, z) của tim đường
uniform float uCarve0, uCarve1, uTipH, uPatch;
${Tf}
// khoảng cách tới đường + độ cao mặt đường tại điểm gần nhất
float roadDist(vec2 p, out float ry) {
  float dm = 1e9; ry = 0.0;
  for (int i = 0; i < ${Zo-1}; i++) {
    vec2 a = uRoad[i].xz, b = uRoad[i + 1].xz, ab = b - a;
    float t = clamp(dot(p - a, ab) / dot(ab, ab), 0.0, 1.0);
    float d = length(p - a - ab * t);
    if (d < dm) { dm = d; ry = mix(uRoad[i].y, uRoad[i + 1].y, t); }
  }
  return dm;
}
`,Ey=`
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
`,vr=class{constructor(e,t,n="reed"){this.kind=n;let i=n==="meadow",r=n==="grass"||i;this.group=new Je,e.add(this.group),this.density=1,this.roadPts=Array.from({length:Zo},()=>new E),this.shared={uCam:{value:new E},uTime:{value:0},uWind:{value:.3},uWindDir:{value:new oe(.78,.62).normalize()},uRoad:{value:this.roadPts},uCorr:{value:Tt.halfWidth+(i?.7:r?.3:1)},uTipH:{value:i?1.4:r?.8:1.95},uPatch:{value:i?1:0},uCarve0:{value:Tt.halfWidth+1.2},uCarve1:{value:Tt.halfWidth+16},uTLow:{value:kt.low},uTDet:{value:kt.det},uTFine:{value:kt.fine}},this.leafGeo=i?_y():r?xy():vy(),this.plumeGeo=r?null:yy();let a=r?null:If();a&&(a.anisotropy=Math.min(4,t.capabilities.getMaxAnisotropy()));let o=i?[{cell:60,count:24e3,scale:1.05,in0:-1,in1:0,out0:26,out1:36,seed:5},{cell:230,count:14e3,scale:1.6,in0:24,in1:38,out0:95,out1:135,seed:6}]:r?[{cell:64,count:16e3,scale:1,in0:-1,in1:0,out0:22,out1:32,seed:3},{cell:220,count:8e3,scale:1.8,in0:20,in1:34,out0:75,out1:105,seed:4}]:[{cell:86,count:19e3,scale:1,in0:-1,in1:0,out0:30,out1:43,seed:1},{cell:340,count:11e3,scale:1.55,in0:27,in1:46,out0:118,out1:165,seed:2}];this.layers=o.map((c,l)=>{let h=l===o.length-1,u=h?c.count*qh*qh:c.count,d=Qo(c.seed*977),f=new Float32Array(u*4);for(let v=0;v<f.length;v++)f[v]=d();let g=new Yn(f,4),b={uCell:{value:c.cell},uScale:{value:c.scale},uIn0:{value:c.in0},uIn1:{value:c.in1},uOut0:{value:c.out0},uOut1:{value:c.out1}},m=this._mesh(this.leafGeo,g,c.count,b,new Qr({vertexColors:!0,side:dt}),!0);if(r)return{max:c.count,far:h,L:c,uni:b,meshes:[m]};let p=this._mesh(this.plumeGeo,g,c.count,b,new Qr({map:a,side:dt,alphaTest:.2,alphaToCoverage:!0}),!1);return{max:c.count,far:h,L:c,uni:b,meshes:[m,p]}}),this.mats=this.layers.flatMap(c=>c.meshes.map(l=>l.material)),this.group.visible=!0}_mesh(e,t,n,i,r,a){let o=new wo;o.index=e.index;for(let h of Object.keys(e.attributes))o.setAttribute(h,e.attributes[h]);o.setAttribute("aSeed",t),o.instanceCount=n;let c=this.shared;r.onBeforeCompile=h=>{Object.assign(h.uniforms,c,i),h.vertexShader=h.vertexShader.replace("#include <common>",`#include <common>
`+My).replace("#include <begin_vertex>",Ey),a&&(h.vertexShader=h.vertexShader.replace("#include <color_vertex>",`#include <color_vertex>
#ifdef USE_COLOR
vColor *= 0.78 + 0.44 * fract(aSeed.w * 9.31);
#endif`)),h.fragmentShader=h.fragmentShader.replace("#include <normal_fragment_begin>",Pe.normal_fragment_begin.replace("normal *= faceDirection;","")).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance = emissive * diffuseColor.rgb;`)},on(r);let l=new Ne(o,r);return l.frustumCulled=!1,l.layers.set(3),this.group.add(l),l}set visible(e){this.group.visible=e}get visible(){return this.group.visible}setDensity(e){this.density=e;let t=this.view||1;for(let n of this.layers)for(let i of n.meshes)i.geometry.instanceCount=Math.floor(n.max*e*(n.far?t*t:1))}setView(e){this.view=Math.min(Math.max(e,1),qh);for(let t of this.layers)t.far&&(t.uni.uCell.value=t.L.cell*this.view,t.uni.uOut0.value=t.L.out0*this.view,t.uni.uOut1.value=t.L.out1*this.view);this.setDensity(this.density??1)}update(e,t,n,i,r){let a=this.shared;a.uTime.value=e,a.uCam.value.copy(t),a.uWind.value=r.wind,a.uWindDir.value.copy(r.windDir),a.uTLow.value=kt.low,a.uTDet.value=kt.det,a.uTFine.value=kt.fine;let o={};for(let d=0;d<Zo;d++)n.at(i+(d-12)*by*(this.view||1),o),this.roadPts[d].set(o.x,o.y,o.z);let c=(this.kind==="reed"?.5:.3)*r.dayF*(1-r.overcast*.85)*(.4+.6*r.warm),l=new Z(1,.72+.2*(1-r.warm),.42+.45*(1-r.warm)).multiplyScalar(c),h=(.2*r.dayF*(1-.55*r.dark)+.05*r.night)*(.6+.4*r.overcast)+r.flash*.9;l.add(new Z(.8,.88,1).multiplyScalar(h));let u=1-.28*r.wet;for(let d of this.layers)d.meshes[0].material.emissive.copy(l),d.meshes[1]&&d.meshes[1].material.emissive.copy(l).multiplyScalar(1.7);for(let d of this.mats)d.color.setScalar(u*(1-.15*r.dark))}};var wy=`
  varying vec2 vUv;
  void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,op=`
  uniform float uExposure;
  vec3 rrtOdt(vec3 v) { vec3 a = v * (v + 0.0245786) - 0.000090537; vec3 b = v * (0.983729 * v + 0.4329510) + 0.238081; return a / b; }
  vec3 toDisplay(vec3 c) {
    const mat3 IN = mat3(vec3(0.59719, 0.07600, 0.02840), vec3(0.35458, 0.90834, 0.13383), vec3(0.04823, 0.01566, 0.83777));
    const mat3 OUT = mat3(vec3(1.60475, -0.10208, -0.00327), vec3(-0.53108, 1.10813, -0.07276), vec3(-0.07367, -0.00605, 1.07602));
    c = clamp(OUT * rrtOdt(IN * (c * uExposure / 0.6)), 0.0, 1.0);
    return mix(pow(c, vec3(0.41666)) * 1.055 - vec3(0.055), c * 12.92, vec3(lessThanEqual(c, vec3(0.0031308))));
  }`,Sy=`
  uniform sampler2D tSrc; uniform vec2 uTexel; uniform float uThresh;
  varying vec2 vUv;
  ${op}
  void main() {
    vec3 c = (toDisplay(texture2D(tSrc, vUv + uTexel * vec2(-1.0, -1.0)).rgb) + toDisplay(texture2D(tSrc, vUv + uTexel * vec2(1.0, -1.0)).rgb)
            + toDisplay(texture2D(tSrc, vUv + uTexel * vec2(-1.0, 1.0)).rgb) + toDisplay(texture2D(tSrc, vUv + uTexel * vec2(1.0, 1.0)).rgb)) * 0.25;
    float l = max(c.r, max(c.g, c.b));
    gl_FragColor = vec4(c * smoothstep(uThresh, uThresh + 0.07, l), 1.0);
  }`,Ty=`
  uniform sampler2D tSrc; uniform vec2 uDir;
  varying vec2 vUv;
  void main() {
    vec3 s = texture2D(tSrc, vUv).rgb * 0.2270270270;
    s += (texture2D(tSrc, vUv + uDir * 1.3846153846).rgb + texture2D(tSrc, vUv - uDir * 1.3846153846).rgb) * 0.3162162162;
    s += (texture2D(tSrc, vUv + uDir * 3.2307692308).rgb + texture2D(tSrc, vUv - uDir * 3.2307692308).rgb) * 0.0702702703;
    gl_FragColor = vec4(s, 1.0);
  }`,Ay=`
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
  }`,Ry=`
  uniform sampler2D tSrc; uniform vec2 uTexel;
  varying vec2 vUv;
  void main() {
    float m = 0.0;
    for (int y = 0; y < 4; y++) for (int x = 0; x < 4; x++)
      m = max(m, -texture2D(tSrc, vUv + (vec2(float(x), float(y)) - 1.5) * uTexel).a);
    gl_FragColor = vec4(m, 0.0, 0.0, 1.0);
  }`,Cy=`
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
  }`,Py=`
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
  }`,Ly=`
  uniform sampler2D tScene, tDepth; uniform float uNear, uFar, uAspect; uniform vec2 uSun;
  varying vec2 vUv;
  void main() {
    float d = texture2D(tDepth, vUv).x;
    float z = uNear * uFar / (uFar - d * (uFar - uNear));
    float sky = smoothstep(0.88, 0.97, z / uFar);
    float l = dot(texture2D(tScene, vUv).rgb, vec3(0.3, 0.59, 0.11));
    vec2 dd = (vUv - uSun) * vec2(uAspect, 1.0);
    gl_FragColor = vec4(vec3(sky * exp(-dot(dd, dd) * 7.0) * smoothstep(0.08, 1.2, l)), 1.0);
  }`,Iy=`
  uniform sampler2D tSrc; uniform vec2 uSun; uniform float uLen;
  varying vec2 vUv;
  void main() {
    vec2 step = (vUv - uSun) * uLen / 32.0, uv = vUv;
    vec3 s = vec3(0.0); float w = 1.0, tot = 0.0;
    for (int i = 0; i < 32; i++) { s += texture2D(tSrc, uv).rgb * w; tot += w; w *= 0.965; uv -= step; }
    gl_FragColor = vec4(s / tot, 1.0);
  }`,Dy=`
  uniform float uGlass, uNear, uFar, uTanF, uSweep;
  uniform sampler2D tDepth;
  uniform mat4 uInvVP;
  uniform vec3 uCamPos, uCamFwd, uGC, uGN, uGU, uGV;
  uniform vec4 uGB, uPiv, uRest, uBlade, uWipe;     // 2 cần gạt: trục (u,v)×2, (góc nghỉ, chiều quay)×2, (bán kính trong, ngoài)×2
  uniform vec2 uFlow;
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
    vec4 wp = uInvVP * vec4(uv * 2.0 - 1.0, 1.0, 1.0);
    vec3 dir = normalize(wp.xyz / wp.w - uCamPos);
    float dn = dot(dir, uGN);
    if (dn > -1e-3) return col;
    float t = dot(uGC - uCamPos, uGN) / dn;
    if (t <= 0.0) return col;
    vec3 hit = uCamPos + dir * t - uGC;
    vec2 g = vec2(dot(hit, uGU), dot(hit, uGV));
    float inB = smoothstep(uGB.x, uGB.x + 0.04, g.x) * smoothstep(uGB.y, uGB.y - 0.04, g.x)
              * smoothstep(uGB.z, uGB.z + 0.02, g.y) * smoothstep(uGB.w, uGB.w - 0.03, g.y);
    float zs = uNear * uFar / (uFar - texture2D(tDepth, uv).x * (uFar - uNear));
    float zg = t * dot(dir, uCamFwd);
    float m = inB * smoothstep(zg - 0.06, zg - 0.01, zs);
    if (m <= 0.001) return col;
    float age = min(wipeAge(g, uPiv.xy, uRest.x, uRest.y, uBlade.xy), wipeAge(g, uPiv.zw, uRest.z, uRest.w, uBlade.zw));
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
  }`,Fy=`
  uniform sampler2D tScene, tBloom, tDof, tRays;
  uniform vec3 uRayCol;
  uniform float uFx, uCine, uTime, uAspect, uDof;
  uniform vec2 uRes;
  varying vec2 vUv;
  ${op}
  float hash(float n) { return fract(sin(n) * 43758.5453); }
  float vnoise(float x) { float i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f); return mix(hash(i), hash(i + 1.0), f); }
  float hash12(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
  vec3 sceneAt(vec2 uv) {
    vec3 s = texture2D(tScene, uv).rgb;
    if (uDof > 0.0) { vec4 d = texture2D(tDof, uv); s = mix(s, d.rgb, clamp(d.a, 0.0, 1.0) * uDof); }
    return s;
  }
  ${Dy}
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
    // vệt tốc độ toả ra từ tâm
    float ang = atan(da.y, da.x);
    float n = vnoise(ang * 48.0 + floor(uTime * 16.0) * 7.31);
    col += vec3(smoothstep(0.7, 1.0, n) * smoothstep(0.34, 0.85, dist) * uFx * 0.11);
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
  }`,$o=class{constructor(e,t=4){this.renderer=e,this.enabled=!0,this.samples=t,this.scene=new ki,this.cam=new Bi(-1,1,1,-1,0,1);let n=(r,a)=>new St({uniforms:r,vertexShader:wy,fragmentShader:a,depthTest:!1,depthWrite:!1,toneMapped:!1}),i={value:1};this.exposure=i,this.bright=n({tSrc:{value:null},uTexel:{value:new oe},uThresh:{value:.92},uExposure:i},Sy),this.blur=n({tSrc:{value:null},uDir:{value:new oe}},Ty),this.dofPrep=n({tScene:{value:null},tDepth:{value:null},uTexel:{value:new oe},uNear:{value:.1},uFar:{value:1e3},uFocus:{value:10},uFocusRange:{value:0},uCocK:{value:0},uMaxCoc:{value:24}},Ay),this.dofTile=n({tSrc:{value:null},uTexel:{value:new oe}},Ry),this.dofDilate=n({tSrc:{value:null},uTexel:{value:new oe}},Cy),this.dofBlur=n({tSrc:{value:null},tNear:{value:null},uTexelFull:{value:new oe},uMaxCoc:{value:24},uN:{value:24}},Py),this.final=n({tScene:{value:null},tBloom:{value:null},tDof:{value:null},uDof:{value:0},uExposure:i,tRays:{value:null},uRayCol:{value:new Z(0,0,0)},uGlass:{value:0},tDepth:{value:null},uNear:{value:.1},uFar:{value:1e3},uTanF:{value:1},uInvVP:{value:new be},uCamPos:{value:new E},uCamFwd:{value:new E},uGC:{value:new E},uGN:{value:new E},uGU:{value:new E},uGV:{value:new E},uBlade:{value:new Ke},uGB:{value:new Ke},uPiv:{value:new Ke},uWipe:{value:new Ke},uRest:{value:new Ke},uSweep:{value:1.6},uFlow:{value:new oe},uFx:{value:0},uCine:{value:0},uTime:{value:0},uAspect:{value:1},uRes:{value:new oe(1,1)}},Fy),this.rayMask=n({tScene:{value:null},tDepth:{value:null},uNear:{value:.1},uFar:{value:1e3},uAspect:{value:1},uSun:{value:new oe}},Ly),this.rayBlur=n({tSrc:{value:null},uSun:{value:new oe},uLen:{value:1}},Iy),this.rays={uv:new oe(.5,.5),color:new Z(0,0,0),near:.1,far:1e3},this.quad=new Ne(new gn(2,2),this.bright),this.quad.frustumCulled=!1,this.scene.add(this.quad),this.size=new oe,this.rts={},this.sceneRT=new sn(16,16,{type:Un,samples:t,depthBuffer:!0,depthTexture:new rr(16,16,ni)}),this.resize()}_rt(e,t,n,i=!1){let r=this.rts[e];return r?r.setSize(t,n):r=this.rts[e]=new sn(t,n,{type:i?Un:ii,minFilter:qt,magFilter:qt,depthBuffer:!1,stencilBuffer:!1}),r}resize(){this.renderer.getDrawingBufferSize(this.size);let e=this.size.x,t=this.size.y;this.sceneRT.setSize(e,t);let n=Math.max(16,Math.ceil(e/4)),i=Math.max(16,Math.ceil(t/4));this._rt("bloomA",n,i),this._rt("bloomB",n,i);let r=Math.max(16,Math.ceil(e/2)),a=Math.max(16,Math.ceil(t/2));this._rt("prep",r,a,!0),this._rt("dof",r,a,!0);let o=Math.max(4,Math.ceil(r/4)),c=Math.max(4,Math.ceil(a/4));this._rt("tile",o,c,!0),this._rt("near",o,c,!0),this._rt("rayA",n,i),this._rt("rayB",n,i),this.rayMask.uniforms.uAspect.value=e/t,this.bright.uniforms.uTexel.value.set(1/n,1/i),this.dofPrep.uniforms.uTexel.value.set(1/e,1/t),this.dofTile.uniforms.uTexel.value.set(1/r,1/a),this.dofDilate.uniforms.uTexel.value.set(1/o,1/c),this.dofBlur.uniforms.uTexelFull.value.set(1/e,1/t),this.final.uniforms.uAspect.value=e/t,this.final.uniforms.uRes.value.set(e,t)}setSamples(e){this.sceneRT.samples!==e&&(this.sceneRT.samples=e,this.sceneRT.dispose())}get longSide(){return Math.max(this.size.x,this.size.y)}_pass(e,t){this.quad.material=e,this.renderer.setRenderTarget(t),this.renderer.render(this.scene,this.cam)}begin(){this.renderer.setRenderTarget(this.sceneRT)}render(e,t,n,i){let r=this.renderer,a=this.blur.uniforms,o=this.sceneRT.texture;this.exposure.value=r.toneMappingExposure;let c=!1;if(i&&i.amt>.01&&i.samples>0&&i.cocK>.05){c=!0;let d=this.dofPrep.uniforms;d.tScene.value=o,d.tDepth.value=this.sceneRT.depthTexture,d.uNear.value=i.near,d.uFar.value=i.far,d.uFocus.value=i.focus,d.uFocusRange.value=i.range||0,d.uCocK.value=i.cocK,d.uMaxCoc.value=i.maxCoc,this._pass(this.dofPrep,this.rts.prep),this.dofTile.uniforms.tSrc.value=this.rts.prep.texture,this._pass(this.dofTile,this.rts.tile),this.dofDilate.uniforms.tSrc.value=this.rts.tile.texture,this._pass(this.dofDilate,this.rts.near);let f=this.dofBlur.uniforms;f.tSrc.value=this.rts.prep.texture,f.tNear.value=this.rts.near.texture,f.uMaxCoc.value=i.maxCoc,f.uN.value=i.samples,this._pass(this.dofBlur,this.rts.dof)}if(t>.01){let d=this.rts.bloomA,f=this.rts.bloomB;this.bright.uniforms.tSrc.value=o,this._pass(this.bright,d);for(let g=0;g<2;g++)a.tSrc.value=d.texture,a.uDir.value.set((2.2+g)/d.width,0),this._pass(this.blur,f),a.tSrc.value=f.texture,a.uDir.value.set(0,(1.2+g*.6)/d.height),this._pass(this.blur,d)}let l=this.rays,h=l.color.r+l.color.g+l.color.b>.002;if(h){let d=this.rayMask.uniforms,f=this.rayBlur.uniforms;d.tScene.value=o,d.tDepth.value=this.sceneRT.depthTexture,d.uNear.value=l.near,d.uFar.value=l.far,d.uSun.value.copy(l.uv),this._pass(this.rayMask,this.rts.rayA),f.uSun.value.copy(l.uv),f.tSrc.value=this.rts.rayA.texture,f.uLen.value=.85,this._pass(this.rayBlur,this.rts.rayB),f.tSrc.value=this.rts.rayB.texture,f.uLen.value=.85/10,this._pass(this.rayBlur,this.rts.rayA)}let u=this.final.uniforms;u.tScene.value=o,u.tRays.value=this.rts.rayA.texture,u.tDepth.value=this.sceneRT.depthTexture,h?u.uRayCol.value.copy(l.color):u.uRayCol.value.setRGB(0,0,0),u.tBloom.value=this.rts.bloomA.texture,u.tDof.value=this.rts.dof.texture,u.uDof.value=c?i.amt:0,u.uCine.value=t,u.uFx.value=n,u.uTime.value=e,this._pass(this.final,null)}};var ec=class{constructor(e){this.renderer=e,this.cam=new yt,this.cam.layers.set(0),this.rt=new sn(16,16,{type:Un}),this.texMatrix=new be,this.planeY=0,this.active=!1,this.enabled=!0,this._v=new E,this._d=new E,this._u=new E,this._plane=new qn,this._clip=new Ke,this._q=new Ke,this._size=new oe}resize(){this.renderer.getDrawingBufferSize(this._size),this.rt.setSize(Math.max(16,Math.floor(this._size.x/2)),Math.max(16,Math.floor(this._size.y/2)))}render(e,t,n){if(this.active=!1,!this.enabled||t.position.y<n+.05)return;this.planeY=n;let i=this.cam,r=t.position;i.position.set(r.x,2*n-r.y,r.z);let a=this._d.set(0,0,-1).applyQuaternion(t.quaternion),o=this._u.set(0,1,0).applyQuaternion(t.quaternion);i.up.set(o.x,-o.y,o.z),i.lookAt(this._v.set(i.position.x+a.x,i.position.y-a.y,i.position.z+a.z)),i.near=t.near,i.far=t.far,i.updateMatrixWorld(),i.projectionMatrix.copy(t.projectionMatrix),this.texMatrix.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),this.texMatrix.multiply(i.projectionMatrix).multiply(i.matrixWorldInverse);let c=this._plane.setFromNormalAndCoplanarPoint(this._v.set(0,1,0),this._d.set(r.x,n,r.z));c.applyMatrix4(i.matrixWorldInverse);let l=this._clip.set(c.normal.x,c.normal.y,c.normal.z,c.constant),h=i.projectionMatrix.elements,u=this._q.set((Math.sign(l.x)+h[8])/h[0],(Math.sign(l.y)+h[9])/h[5],-1,(1+h[10])/h[14]);l.multiplyScalar(2/l.dot(u)),h[2]=l.x,h[6]=l.y,h[10]=l.z+1-.003,h[14]=l.w,i.projectionMatrixInverse.copy(i.projectionMatrix).invert();let d=this.renderer,f=d.getRenderTarget(),g=d.shadowMap.autoUpdate;d.shadowMap.autoUpdate=!1,d.setRenderTarget(this.rt),d.render(e,i),d.setRenderTarget(f),d.shadowMap.autoUpdate=g,this.active=!0}};var tc=class{constructor(){this.root=new Je,this.tilt=new Je,this.root.add(this.tilt),this.root.visible=!1,this.ready=!1,this.actions={},this.current=null,this.headOffsetSit=new E}async load(e){let t=new Ji;t.setMeshoptDecoder(br);let n=await t.loadAsync(e),i=n.scene;this.model=i,i.traverse(l=>{if(!l.isMesh)return;l.castShadow=!0,l.receiveShadow=!0,l.frustumCulled=!1;let h=Array.isArray(l.material)?l.material:[l.material];for(let u of h)u.envMapIntensity=.6,on(u)}),this.tilt.add(i),this.head=i.getObjectByName("Head");let r=l=>i.getObjectByName(l);this.arms={l:["upperarm_l","lowerarm_l","hand_l"].map(r),r:["upperarm_r","lowerarm_r","hand_r"].map(r)},this.arms.l.some(l=>!l)&&(this.arms.l=null),this.arms.r.some(l=>!l)&&(this.arms.r=null),this.mixer=new To(i);for(let l of n.animations)this.actions[l.name]=this.mixer.clipAction(l);i.updateMatrixWorld(!0);let a=new Rt().setFromObject(i,!0),o=a.max.y-a.min.y;i.scale.setScalar(1.78/o),i.position.y=-a.min.y*(1.78/o);let c=[];if(i.traverse(l=>{l.isMesh&&/eye/i.test(l.name+" "+(l.material?.name||""))&&c.push(l)}),c.length&&this.head){i.updateMatrixWorld(!0);let l=new Rt().setFromObject(c[0],!0).getCenter(new E),h=this.head.getWorldPosition(new E),u=l.sub(h);i.rotation.y=Math.atan2(-u.x,u.z)||0}return i.updateMatrixWorld(!0),i.traverse(l=>{l.isSkinnedMesh&&/superhero|body/i.test(l.name+" "+l.material?.name)&&Vy(l,i)}),this.play("Driving_Loop",0),this.mixer.update(.01),this.root.updateMatrixWorld(!0),this.headOffsetSit.copy(this.head.getWorldPosition(new E)),this.root.worldToLocal(this.headOffsetSit),this.ready=!0,this}play(e,t=.35,{once:n=!1,timeScale:i=1}={}){let r=this.actions[e];return!r||r===this.current||(r.reset(),r.setLoop(n?zl:Gl,1/0),r.clampWhenFinished=n,r.timeScale=i,r.enabled=!0,r.setEffectiveWeight(1),this.current&&t>0?r.crossFadeFrom(this.current,t,!1):this.current&&this.current.stop(),r.play(),this.current=r),r}duration(e){return this.actions[e]?.getClip().duration??1}update(e){this.mixer&&this.root.visible&&this.mixer.update(e)}reach(e,t){let n=this.arms?.[e];if(!n)return;let[i,r,a]=n,o=i.getWorldPosition(Uy),c=r.getWorldPosition(Ny),l=a.getWorldPosition(Oy),h=o.distanceTo(c),u=c.distanceTo(l),d=By.subVectors(t,o),f=d.length();d.multiplyScalar(1/f),f=Math.min(Math.max(f,Math.abs(h-u)+.001),h+u-.001);let g=(h*h+f*f-u*u)/(2*h*f),b=Math.sqrt(Math.max(0,1-g*g)),m=cp.subVectors(c,o).addScaledVector(d,-cp.dot(d));m.lengthSq()<1e-8&&m.set(0,-1,0),m.normalize();let p=ky.copy(o).addScaledVector(d,h*g).addScaledVector(m,h*b);pp(i,lp.subVectors(c,o).normalize(),hp.subVectors(p,o).normalize()),i.updateMatrixWorld(!0),r.getWorldPosition(c),a.getWorldPosition(l),pp(r,lp.subVectors(l,c).normalize(),hp.subVectors(t,c).normalize()),r.updateMatrixWorld(!0)}},Uy=new E,Ny=new E,Oy=new E,By=new E,cp=new E,ky=new E,lp=new E,hp=new E,up=new at,dp=new at,fp=new at;function pp(s,e,t){up.setFromUnitVectors(e,t),s.getWorldQuaternion(dp),s.parent.getWorldQuaternion(fp),s.quaternion.copy(fp.invert().multiply(up.multiply(dp)))}var Hy=new Z("#e9e4da"),zy=new Z("#2f4366"),Gy=new Z("#dedad2");function Vy(s,e){let t=s.geometry,n=t.attributes.skinIndex,i=t.attributes.skinWeight,r=t.attributes.position;if(!n||!i)return;let a=s.skeleton.bones,o=a.find(b=>b.name==="pelvis"),c=o?o.getWorldPosition(new E).y:.9,l=a.map(b=>/foot|ball/i.test(b.name)?3:/thigh|calf/i.test(b.name)?2:/lowerarm|hand|index|middle|ring|pinky|thumb|neck|head/i.test(b.name)?0:/pelvis/i.test(b.name)?4:1),h=new Float32Array(r.count*4),u=new E;for(let b=0;b<r.count;b++){let m=0,p=-1;for(let _=0;_<4;_++){let S=i.getComponent(b,_);S>p&&(p=S,m=n.getComponent(b,_))}let v=l[m];v===4&&(u.fromBufferAttribute(r,b).applyMatrix4(s.matrixWorld),v=u.y<c+.09?2:1);let x=v===1?Hy:v===2?zy:v===3?Gy:null;x&&(h[b*4]=x.r,h[b*4+1]=x.g,h[b*4+2]=x.b,h[b*4+3]=1)}t.setAttribute("aGarment",new ve(h,4));let d=s.material,f=d.onBeforeCompile;d.onBeforeCompile=(b,m)=>{f?.call(d,b,m),b.vertexShader=b.vertexShader.replace("#include <common>",`#include <common>
attribute vec4 aGarment;
varying vec4 vGarment;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vGarment = aGarment;`),b.fragmentShader=b.fragmentShader.replace("#include <common>",`#include <common>
varying vec4 vGarment;`).replace("#include <map_fragment>",`#include <map_fragment>
diffuseColor.rgb = mix(diffuseColor.rgb, vGarment.rgb * (0.9 + 0.1 * diffuseColor.r), vGarment.a);`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
roughnessFactor = mix(roughnessFactor, 0.88, vGarment.a);`).replace("mapN.xy *= normalScale;","mapN.xy *= normalScale * (1.0 - 0.8 * vGarment.a);")};let g=d.customProgramCacheKey?.bind(d);d.customProgramCacheKey=()=>(g?g():"")+"|garment"}var ca=s=>Math.min(1,Math.max(0,s)),Jn=s=>(s=ca(s),s*s*(3-2*s)),Xh=(s,e,t)=>s+(e-s)*t,xr=(s,e,t)=>{let n=((e-s+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI;return s+n*t},_r=Math.PI,oa=-Math.PI/2,jh=0,mp=Math.PI/2,gp=1.1,nc=class{constructor(e,t){this.cars=e,this.person=t,this.state="off",this.t=0,this.v0=0,this.stopT=-1,this.seat=new E,this.out=new E,this.walkEnd=new E,this.lean=new E,this.orbitA=0,this.orbitT=0,this.shot={pos:new E,look:new E},this.cam={pos:new E,look:new E,focus:new E,focal:28,range:2},this._p=new E,this._l=new E,this._w=new E}get active(){return this.state!=="off"}get busy(){return this.state==="stopping"||this.state==="exit"||this.state==="enter"}place(e){let t=this.person.headOffsetSit,[n,i,r]=e.eye;this.seat.set(n+t.x,i-.1-t.y,r+.06+t.z),this.out.set(-e.width/2-.5,0,this.seat.z-.1),this.lean.set(-e.width/2-.16,0,-e.length/2+1.05),this.walkEnd.set(this.lean.x-.3,0,this.lean.z)}sit(){let e=this.person;e.ready&&(e.root.position.copy(this.seat),e.root.rotation.set(0,_r,0),e.tilt.rotation.set(0,0,0),e.play("Driving_Loop",0))}toggle(e){return this.state==="off"?(this.state="stopping",this.t=0,this.v0=Math.max(e,.5),this.stopT=-1,!0):this.state==="parked"?(this.state="enter",this.t=0,!0):!1}speed(e,t){return this.state!=="stopping"?0:Math.max(0,e-Math.max(1.5,this.v0/3.2)*t)}update(e,t,n){this.t+=e;let i=this.cars.dim,r=this.cam,a=this._p,o=this._l;if(this.state==="stopping"){let c=this.cars.frontWheel(this._w),l=Jn(this.t/5);a.set(c.x-1.55+.3*l,.34,c.z-1.1+.2*l),o.set(c.x+.05,c.y*.92,c.z+.08),r.focus.copy(c),t.localToWorld(r.focus),r.focal=45,r.range=.35,n<=.01&&this.stopT<0&&(this.stopT=this.t),this.stopT>=0&&this.t-this.stopT>.9&&this._enterState("exit",i)}else this.state==="exit"?(this._exit(i),this._camera(i,e,this.t-this.orbitT)):this.state==="parked"?this._camera(i,e,99):this.state==="enter"&&(this._enter(i),this._camera(i,e,99));this.state!=="stopping"&&(a.copy(this._camP),o.copy(this._camL),this.person.head.getWorldPosition(r.focus)),r.pos.copy(a),t.localToWorld(r.pos),r.look.copy(o),t.localToWorld(r.look)}_enterState(e,t){this.state=e,this.t=0,e==="exit"&&(this.shot.pos.set(-t.width/2-4.2,1.45,this.seat.z-2.7),this.shot.look.set(-t.width/2-.25,.95,this.seat.z-.6),this.orbitT=3.4,this.orbitA=Math.atan2(this.shot.pos.x,this.shot.pos.z+.3),this._camP=(this._camP||new E).copy(this.shot.pos),this._camL=(this._camL||new E).copy(this.shot.look))}_camera(e,t,n){let i=this.cam,r=Jn(n/3.2);n>0&&(this.orbitA+=t*.1*Math.min(1,n/2));let a=Math.hypot(this.shot.pos.x,this.shot.pos.z+.3),o=Xh(a,10,r),c=Xh(this.shot.pos.y,3.4,r),l=this._camP.set(Math.sin(this.orbitA)*o,c,Math.cos(this.orbitA)*o-.3);n<=0&&l.copy(this.shot.pos),this._camL.copy(this.shot.look).lerp(this._w.set(-e.width*.2,.8,-.4),r),i.focal=Xh(32,26,r),i.range=e.width/2+1.2}_exit(e){let t=this.person,n=this.t,i=t.root;if(this.cars.setDoor(ca(n/1.1)),n<1){i.position.copy(this.seat),i.rotation.y=xr(_r,oa,Jn((n-.45)/.6));return}let r=1,a=1.25;if(n<r+a){t.play("Sitting_Exit",.25,{once:!0,timeScale:t.duration("Sitting_Exit")/a});let d=Jn((n-r)/a);i.position.lerpVectors(this.seat,this.out,d),i.rotation.y=oa;return}let o=r+a,c=this.out.distanceTo(this.walkEnd)/gp;if(n<o+c){t.play("Walk_Loop",.3),i.position.lerpVectors(this.out,this.walkEnd,ca((n-o)/c)),i.rotation.y=xr(oa,_r,Jn((n-o)/.45));return}let l=o+c;t.play("Idle_Loop",.4);let h=Jn((n-l)/.7),u=Jn((n-l-.5)/.8);i.rotation.y=xr(_r,oa,h),i.position.lerpVectors(this.walkEnd,this.lean,u),t.tilt.rotation.x=-.17*u,n>l+1.4&&(this.state="parked")}_enter(e){let t=this.person,n=this.t,i=t.root;if(n<.7){t.play("Idle_Loop",.3);let u=Jn(n/.7);t.tilt.rotation.x=-.17*(1-u),i.position.lerpVectors(this.lean,this.walkEnd,u),i.rotation.y=xr(oa,jh,u);return}let r=.7,a=this.walkEnd.distanceTo(this.out)/gp;if(n<r+a){t.play("Walk_Loop",.3),i.position.lerpVectors(this.walkEnd,this.out,ca((n-r)/a)),i.rotation.y=jh;return}let o=r+a;if(n<o+.45){t.play("Idle_Loop",.25),i.rotation.y=xr(jh,mp,Jn((n-o)/.45));return}let c=o+.45,l=1.4;if(n<c+l){t.play("Sitting_Enter",.25,{once:!0,timeScale:t.duration("Sitting_Enter")/l});let u=Jn((n-c)/l);i.position.lerpVectors(this.out,this.seat,u),i.rotation.y=xr(mp,_r,Jn((n-c-.3)/(l-.3)));return}t.play("Driving_Loop",.4),i.position.copy(this.seat),i.rotation.y=_r;let h=c+l;this.cars.setDoor(1-ca((n-h)/.9)),n>h+1&&(this.cars.setDoor(0),this.state="off")}};var ic=class{constructor(e){this.renderer=e,this.rt=new sn(384,112,{type:Un}),this.cam=new yt(26,384/112,.15,3e3),this.cam.layers.enable(3),this.group=new Je,this.group.visible=!1;let t=new Ne(new Nt(.27,.078,.03),new vt({color:1842206,roughness:.55}));t.position.z=-.018;let n=this.rt.texture;n.repeat.x=-1,n.offset.x=1;let i=new Ne(new gn(.25,.064),new Ct({map:n})),r=new Ne(new yi(.008,.008,.07,6),t.material);r.position.set(0,.07,-.03),this.group.add(t,i,r),this._p=new E,this._q=new at,this._d=new E,this._eye=new E}place(e){let[t,n,i]=e.eye;this.group.position.set(0,n+.07,i-.55);let r=this._eye.set(t,n,i).sub(this.group.position).normalize(),a=this._d.set(0,-.03,1).normalize().add(r).normalize();this.group.quaternion.setFromUnitVectors(new E(0,0,1),a)}render(e,t){let n=this.renderer,i=this.cam;this.group.updateMatrixWorld(),this.group.getWorldPosition(i.position),this.group.parent.getWorldQuaternion(this._q),this._d.set(0,-.03,1).applyQuaternion(this._q),i.lookAt(this._d.add(i.position)),i.updateMatrixWorld();let r=n.getRenderTarget(),a=n.shadowMap.autoUpdate;n.shadowMap.autoUpdate=!1,this.group.visible=!1,t&&(t.visible=!1),n.setRenderTarget(this.rt),n.render(e,i),n.setRenderTarget(r),n.shadowMap.autoUpdate=a,t&&(t.visible=!0),this.group.visible=!0}};var sc=Math.PI*2,Wy=Cn.smoothstep,rc=class{constructor(){this.phase=0,this.omega=sc/1.5,this.idle=60,this.wet=0,this.flow=0,this.flowDir=-1,this._v=new E}get running(){return this.phase>0}angle(e){return e*.5*(1-Math.cos(this.phase))}update(e,t,n){let i=t>.15;this.omega=sc/(t>.95?1.05:1.55),i||this.phase>0?(this.phase+=this.omega*e,this.phase>=sc&&(this.phase=i?this.phase-sc:0),this.idle=0):this.idle+=e,this.wet+=(t-this.wet)*(1-Math.exp(-e*(t>this.wet?1.5:.12)));let r=Cn.lerp(-.05,.24,Wy(n,6,20));this.flow+=r*e,this.flowDir=r>=0?1:-1}apply(e,t,n,i,r,a){if(e.uGlass.value=t,t<=0||!r)return;n.updateMatrixWorld(),e.uInvVP.value.multiplyMatrices(n.matrixWorld,n.projectionMatrixInverse),n.getWorldPosition(e.uCamPos.value),n.getWorldDirection(e.uCamFwd.value),e.uTanF.value=Math.tan(Cn.degToRad(n.fov)/2),e.uNear.value=n.near,e.uFar.value=n.far;let o=i.matrixWorld;e.uGC.value.copy(r.center).applyMatrix4(o),e.uGN.value.copy(r.normal).transformDirection(o),e.uGU.value.copy(r.right).transformDirection(o),e.uGV.value.copy(r.up).transformDirection(o),e.uGB.value.fromArray(r.bounds);let[c,l]=r.wipers;e.uPiv.value.set(c.u,c.v,l.u,l.v),e.uRest.value.set(c.rest,c.sign,l.rest,l.sign),e.uBlade.value.set(c.r0,c.r1,l.r0,l.r1),e.uSweep.value=r.sweep,e.uWipe.value.set(this.phase,this.omega,this.idle,a),e.uFlow.value.set(this.flow,this.flowDir)}};var la=5,qy=140,Xy=30,ac=120,Qi=s=>{let e=Math.sin(s*127.1+311.7)*43758.5453;return e-Math.floor(e)},jy=s=>{let e=Math.floor(s),t=s-e,n=t*t*(3-2*t);return Qi(e)*(1-n)+Qi(e+1)*n},bp=(s,e,t)=>{let n=Math.min(1,Math.max(0,(t-s)/(e-s)));return n*n*(3-2*n)},Yy=`
  attribute float aGlow;
  uniform float uScale, uFogD;
  varying float vGlow;
  void main() {
    vec4 mv = viewMatrix * vec4(position, 1.0);
    float fd = uFogD * -mv.z;
    vGlow = aGlow * exp(-fd * fd);                // chìm dần trong sương xa
    gl_PointSize = clamp(0.45 * uScale / -mv.z, 3.5, 40.0);
    gl_Position = projectionMatrix * mv;
  }`,Ky=`
  uniform vec3 uColor; uniform float uAmt;
  varying float vGlow;
  void main() {
    float d = length(gl_PointCoord - 0.5) * 2.0;
    float core = smoothstep(0.22, 0.0, d), halo = exp(-d * d * 6.0) * 0.5;
    float a = (core + halo) * vGlow * uAmt;
    if (a < 0.003) discard;
    gl_FragColor = vec4(uColor * a, 1.0);
  }`,oc=class{constructor(e){this.pos=new Float32Array(ac*3),this.glow=new Float32Array(ac);let t=new Oe;t.setAttribute("position",new ve(this.pos,3).setUsage(jl)),t.setAttribute("aGlow",new ve(this.glow,1).setUsage(jl)),t.setDrawRange(0,0),this.mat=new St({uniforms:{uScale:{value:500},uFogD:{value:0},uColor:{value:new Z(5.5,7.5,1.6)},uAmt:{value:0}},vertexShader:Yy,fragmentShader:Ky,transparent:!0,depthWrite:!1,blending:Jt,fog:!1}),this.points=new xn(t,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=4,this.points.visible=!1,e.add(this.points),this.ground=new Map,this._p={}}update(e,t,n,i,r,a,o=0){if(this.mat.uniforms.uAmt.value=r,this.mat.uniforms.uScale.value=a,this.mat.uniforms.uFogD.value=o,this.points.visible=r>.01,!this.points.visible)return;let c=this._p,l=0,h=Math.floor((t-Xy)/la),u=Math.floor((t+qy)/la);for(let f=h;f<=u&&l<ac;f++){let g=bp(.62,.82,jy(f*la/140+3.7));if(g<=0||Qi(f*1.31)>g*.6)continue;let b=1+Math.floor(Qi(f*2.17)*3);for(let m=0;m<b&&l<ac;m++){let p=f*4+m,v=Qi(p*3.1+.5),x=Qi(p*5.7+1.3),_=Qi(p*7.3+2.9),S=Qi(p*9.1+4.4),w=f*la+v*la;n.at(w,c);let T=x<.5?-1:1,I=T*(4.6+4.2*_),y=Math.cos(c.th),M=-Math.sin(c.th),D=c.x+y*I,L=c.z+M*I,k=this.ground.get(p);k===void 0&&(k=i?i.heightAt(D,L):c.y,k>c.y-3&&k<c.y+4||(k=c.y),this.ground.set(p,k));let P=.35+S*.3,F=.5+v*.4;this.pos[l*3]=D+Math.sin(e*P+x*20)*.9+Math.sin(e*F*1.7+_*9)*.3,this.pos[l*3+1]=k+1+1.6*S+Math.sin(e*F+v*13)*.35,this.pos[l*3+2]=L+Math.cos(e*F+_*17)*.9+Math.cos(e*P*1.9+S*7)*.3;let U=Math.sin(e*(.9+.8*_)+v*40);this.glow[l]=.12+.88*bp(.25,.9,U)*(.6+.4*x),l++}}if(this.ground.size>400)for(let f of this.ground.keys())f<h*4&&this.ground.delete(f);let d=this.points.geometry;d.setDrawRange(0,l),d.attributes.position.needsUpdate=!0,d.attributes.aGlow.needsUpdate=!0}};var Zh=1100,ha=22,Jy=3200,Zy=900,Yh=700,Kh=600,Jh=6,cn=s=>{let e=Math.sin(s*127.1+311.7)*43758.5453;return e-Math.floor(e)},vp=s=>470+70*Math.sin(s/650+1.3)+25*Math.sin(s/230);function Qy(s){if(cn(s*3.7+1.1)>.8)return null;let e=120+140*cn(s*5.3+2.2);return{t:s,s:s*Zh+(cn(s*2.9)-.5)*400,len:e,n:Math.round(16+e*.22*(.7+.6*cn(s*7.1))),streets:[0],lat:vp}}var Qh=5e3,$y=s=>330+18*Math.sin(s/420);function eM(s){return s<0?null:{t:1e5+s,s:1300+s*Qh,len:450,n:220,streets:[0,42,84],lat:$y,big:!0}}function tM(){let s=new Nt(1,1,1).translate(0,.5,0).toNonIndexed(),e=.54,t=1,n=1.45,i=[-e,t,-e,e,t,-e,e,n,0,-e,t,-e,e,n,0,-e,n,0,-e,t,e,-e,n,0,e,n,0,-e,t,e,e,n,0,e,t,e,-e,t,-e,-e,n,0,-e,t,e,e,t,-e,e,t,e,e,n,0],r=new Oe;r.setAttribute("position",new He(i,3)),r.computeVertexNormals();let a=new Oe,o=s.attributes.position.array,c=s.attributes.normal.array,l=r.attributes.position.array,h=r.attributes.normal.array,u=new Float32Array(o.length+l.length),d=new Float32Array(c.length+h.length);u.set(o),u.set(l,o.length),d.set(c),d.set(h,c.length);let f=new Float32Array(u.length/3);return f.fill(1,o.length/3,u.length/3-6),a.setAttribute("position",new ve(u,3)),a.setAttribute("normal",new ve(d,3)),a.setAttribute("aRoof",new ve(f,1)),a}var nM=`
  uniform float uScale, uFogD;
  varying float vA;
  void main() {
    vec4 mv = viewMatrix * vec4(position, 1.0);
    float fd = uFogD * -mv.z;
    vA = exp(-fd * fd);
    gl_PointSize = clamp(1.6 * uScale / -mv.z, 3.0, 20.0);
    gl_Position = projectionMatrix * mv;
  }`,iM=`
  uniform vec3 uColor; uniform float uAmt;
  varying float vA;
  void main() {
    float d = length(gl_PointCoord - 0.5) * 2.0;
    float a = (smoothstep(0.35, 0.0, d) + exp(-d * d * 5.0) * 0.4) * vA * uAmt;
    if (a < 0.003) discard;
    gl_FragColor = vec4(uColor * a, 1.0);
  }`,cc=class{constructor(e){this.group=new Je,this.group.visible=!1,e.add(this.group),this.uLit={value:0};let t=new vt({roughness:.85,metalness:0,side:dt});t.onBeforeCompile=r=>{r.uniforms.uLit=this.uLit,r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
          attribute float aRoof;
          varying vec3 vWall, vNL, vSize; varying float vRoof, vId;`).replace("#include <begin_vertex>",`#include <begin_vertex>
          vSize = vec3(length(instanceMatrix[0].xyz), length(instanceMatrix[1].xyz), length(instanceMatrix[2].xyz));
          vWall = position * vSize; vNL = normal; vRoof = aRoof;
          vId = fract(sin(dot(instanceMatrix[3].xz, vec2(12.9898, 78.233))) * 43758.5453);`),r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
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
          totalEmissiveRadiance += winGlow;`)},t.customProgramCacheKey=()=>"valley-house",on(t),this.houses=new rn(tM(),t,Yh),this.houses.count=0,this.houses.frustumCulled=!1,this.houses.instanceColor=new Yn(new Float32Array(Yh*3),3),this.group.add(this.houses),this.lightPos=new Float32Array(Kh*3);let n=new Oe;n.setAttribute("position",new ve(this.lightPos,3)),n.setDrawRange(0,0),this.lightMat=new St({uniforms:{uScale:{value:500},uFogD:{value:0},uAmt:{value:0},uColor:{value:new Z(8,4.3,1.4)}},vertexShader:nM,fragmentShader:iM,transparent:!0,depthWrite:!1,blending:Jt,fog:!1}),this.lights=new xn(n,this.lightMat),this.lights.frustumCulled=!1,this.lights.renderOrder=4,this.group.add(this.lights);let i=pr();this.hazes=Array.from({length:Jh},()=>{let r=new Hi(new xi({map:i,color:16751184,transparent:!0,opacity:0,depthWrite:!1,blending:Jt}));return r.visible=!1,this.group.add(r),r}),this.heights=new Map,this.built=null,this._p={},this._m=new be,this._q=new at,this._v=new E,this._s=new E,this._c=new Z,this._up=new E(0,1,0)}set visible(e){this.group.visible=e}get visible(){return this.group.visible}reset(){this.heights.clear(),this.built=null}_h(e,t,n,i){let r=this.heights.get(e);return r===void 0&&(r=i.heightAt(t,n),this.heights.set(e,r)),r}_valley(e,t,n,i,r,a=vp){let o=t.at(e,this._p),c=Math.cos(o.th),l=-Math.sin(o.th),h=-Math.sin(o.th),u=-Math.cos(o.th),d=a(e)+n;return r.x=o.x+c*d+h*i,r.z=o.z+l*d+u*i,r.th=o.th,r}_build(e,t,n){let i=e-Zy,r=e+Jy,a=this._m,o=this._q,c=this._s,l=this._c,h={},u=0,d=0,f=0,g=[];for(let m=Math.floor(i/Zh)-1;m<=Math.ceil(r/Zh)+1;m++){let p=Qy(m);p&&p.s>i-p.len&&p.s<r+p.len&&g.push(p)}for(let m=Math.floor((i-1300)/Qh);m<=Math.ceil((r-1300)/Qh);m++){let p=eM(m);p&&p.s>i-p.len&&p.s<r+p.len&&g.push(p)}for(let m of g){for(let p=0;p<m.n&&u<Yh;p++){let v=m.t*1e3+p,x=cn(v*1.3),_=cn(v*2.7+5),S=cn(v*4.1+9),w=cn(v*6.7+3),T=_<.5?-1:1,y=m.streets[Math.floor(cn(v*11.3)*m.streets.length)]+T*(9+(m.big?12:30)*S*S);this._valley(m.s+(x-.5)*m.len,t,y,0,h,m.lat);let M=this._h("h"+v,h.x,h.z,n),D=this._h("b"+v,h.x+7,h.z+7,n);if(Math.abs(D-M)>4)continue;let L=7+5*w,k=6+3*cn(v*8.3),P=(w>.88?8.5:_*7%1>.6?6:3.4)+cn(v*9.9);m.big&&cn(v*12.7)<.14&&(L=14+8*w,k=10+4*S,P=11+9*cn(v*13.1)),o.setFromAxisAngle(this._up,h.th+Math.PI/2+(T>0?0:Math.PI)+(cn(v*3.3)-.5)*.35),a.compose(this._v.set(h.x,Math.min(M,D)-.8,h.z),o,c.set(L,P,k)),this.houses.setMatrixAt(u,a);let F=cn(v*5.9);l.setRGB(...F<.35?[.82,.8,.74]:F<.6?[.86,.75,.55]:F<.8?[.72,.68,.62]:[.62,.66,.68]),this.houses.setColorAt(u,l),u++}if(f<Jh){this._valley(m.s,t,m.big?42:0,0,h,m.lat);let p=this.hazes[f++];p.position.set(h.x,this._h("z"+m.t,h.x,h.z,n)+(m.big?40:25),h.z),p.scale.set(m.len*2.2,m.len*(m.big?.8:1.1),1),p.userData.on=!0}}for(let m=f;m<Jh;m++)this.hazes[m].userData.on=!1;for(let m of g)if(m.big)for(let p=0;p<m.streets.length;p++)for(let v=-m.len/2;v<=m.len/2&&d<Kh;v+=ha){let x=Math.round(v/ha);this._valley(m.s+v,t,m.streets[p]+(x%2?6:-6),0,h,m.lat);let _=this._h("L"+m.t+"_"+p+"_"+x,h.x,h.z,n);this.lightPos.set([h.x,_+6.5,h.z],d*3),d++}for(let m=Math.floor(i/ha);m*ha<r&&d<Kh;m++){let p=m*ha,v=!1;for(let S of g)if(!S.big&&Math.abs(p-S.s)<S.len/2+15){v=!0;break}if(!v&&cn(m*1.7+.3)>.22)continue;let x=v?m%2?6:-6:5;this._valley(p,t,x,0,h);let _=this._h("l"+m,h.x,h.z,n);this.lightPos.set([h.x,_+6.5,h.z],d*3),d++}this.houses.count=u,this.houses.instanceMatrix.needsUpdate=!0,this.houses.instanceColor&&(this.houses.instanceColor.needsUpdate=!0);let b=this.lights.geometry;b.setDrawRange(0,d),b.attributes.position.needsUpdate=!0,this.heights.size>6e3&&this.heights.clear()}update(e,t,n,i,r,a){if(!this.group.visible)return;let o=Math.floor(e/400);this.built!==o&&(this._build(e,t,n),this.built=o),this.uLit.value=i;let c=this.lightMat.uniforms;c.uAmt.value=i,c.uScale.value=r,c.uFogD.value=a,this.lights.visible=i>.02;for(let l of this.hazes)l.visible=l.userData.on&&i>.02,l.material.opacity=.13*i}};var sM=2,rM=430,xp=Tt.halfWidth/2;function aM(){let s=document.createElement("canvas");s.width=64,s.height=128;let e=s.getContext("2d"),t=e.createRadialGradient(32,112,4,32,96,100);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.45,"rgba(255,255,255,0.35)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,128),new _n(s)}var lc=class{constructor(e,t){this.scene=e,this.cars=t,this.pool=[],this.active=[],this.timer=12+Math.random()*20,this.loading=!1,this.wait=6,this.poolTex=aM(),this._p={},this._q={}}async _load(e){this.loading=!0;let t=Wo.filter(n=>n.id!==e).sort(()=>Math.random()-.5).slice(0,2);for(let n of t)try{let i=await this.cars._load(n);if(this.cars.prepare)try{await this.cars.prepare(i.group)}catch{}this.pool.push(this._vehicle(i))}catch(i){console.warn("traffic",n.id,i)}}_vehicle(e){let t=new Je;t.visible=!1,t.add(e.group);let n=e.dim,i=n.width*.3,r=Math.min(.7,n.height*.45),a=(h,u)=>{let d=new Hi(new xi({map:this.cars.glowTex,color:h,transparent:!0,opacity:0,depthWrite:!1,blending:Jt}));return d.scale.setScalar(u),t.add(d),d},o=[-1,1].map(h=>{let u=a(16773328,2.6);return u.position.set(h*i,r,-n.length/2-.05),u}),c=[-1,1].map(h=>{let u=a(16722458,.9);return u.position.set(h*i,r+.05,n.length/2+.05),u}),l=new Ne(new gn(4.2,11).rotateX(-Math.PI/2),new Ct({map:this.poolTex,color:16769720,transparent:!0,opacity:0,depthWrite:!1,blending:Jt,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}));return l.position.set(0,.06,-n.length/2-5.2),t.add(l),this.scene.add(t),{root:t,wheels:e.wheels,dim:n,heads:o,tails:c,pool:l,busy:!1,s:0,v:0,d:0}}update(e,t,n,i,r,a){if(!this.pool.length){!this.loading&&(this.wait-=e)<=0&&this._load(a);return}let o=n>=0?-xp:xp;if(this.timer-=e,this.timer<=0){this.timer=15+Math.random()*55;let h=this.pool.filter(u=>!u.busy);if(h.length&&this.active.length<sM){let u=h[Math.floor(Math.random()*h.length)];u.busy=!0,u.s=t+rM+Math.random()*80,u.v=12+Math.random()*8,u.d=o,u.root.visible=!0,this.active.push(u)}}let c=this._p,l=this._q;for(let h=this.active.length-1;h>=0;h--){let u=this.active[h];if(u.s-=u.v*e,u.d+=Math.sign(o-u.d)*Math.min(Math.abs(o-u.d),2.2*e),u.s<t-90){u.busy=!1,u.root.visible=!1,this.active.splice(h,1);continue}i.at(u.s,c);let d=i.at(u.s+2.5,l).y,f=i.at(u.s-2.5,l).y;u.root.position.set(c.x+Math.cos(c.th)*u.d,c.y,c.z-Math.sin(c.th)*u.d),u.root.rotation.set(Math.atan2(f-d,5),c.th+Math.PI,0,"YXZ");for(let b of u.wheels)b.pivot.rotation.x-=u.v*e/b.radius;let g=r;for(let b of u.heads)b.material.opacity=g;for(let b of u.tails)b.material.opacity=.25+.6*g;u.pool.material.opacity=.5*g,u.pool.visible=g>.02}}};Uf();var et=s=>document.getElementById(s),ys=(s,e,t)=>Math.min(t,Math.max(e,s)),oM=(s,e,t)=>{let n=ys((t-s)/(e-s),0,1);return n*n*(3-2*n)},Mr=1/3.6,ya=[25*Mr,50*Mr,180*Mr],_p=ya[0],cM=10*Mr,lM=60*Mr,yp=ya[2],Ms=et("c"),Lt=new Kr({canvas:Ms,antialias:!1,powerPreference:"high-performance"}),eu=1;Lt.setPixelRatio(eu);Lt.shadowMap.enabled=!0;Lt.shadowMap.type=Nl;Lt.toneMapping=Bl;var zt=new ki,Me=new yt(60,1,.3,4e3);Me.layers.enable(3);var jt=new Io,ga=new Fo(zt,jt,Lt),hn=new ko(zt,jt,Lt),Dt=new Vo(Lt,zt,Me),va=new vr(zt,Lt),Er=new vr(zt,Lt,"grass"),wr=new vr(zt,Lt,"meadow"),Ie=new jo(zt),Ze=new Yo(Me);Ze.groundAt=(s,e)=>hn.heightAt(s,e);var Mp=new E,Ep=new E;Ze.eyeAt=s=>!En.ready||tt.active?!1:(En.head.getWorldPosition(s),Mp.set(0,0,-1).applyQuaternion(Ie.root.quaternion),Ep.set(0,1,0).applyQuaternion(Ie.root.quaternion),s.addScaledVector(Ep,.15).addScaledVector(Mp,-.04),!0);var hc=new Jo,bn=new $o(Lt,oi[Bh].msaa),Sr=new ec(Lt),En=new tc,tt=new nc(Ie,En),Ai=new Oo(zt),xa=new ic(Lt),ma=new rc,Lp=new oc(zt),uc=new cc(zt),fc=new Xo,Ip=new lc(zt,Ie);Ie.tilt.add(fc.group);Ie.tilt.add(xa.group);function tu(){let s=window.innerWidth,e=window.innerHeight;Lt.setSize(s,e,!1),Me.aspect=s/e,Me.updateProjectionMatrix(),bn.resize(),Sr.resize(),hM()}var Dp=0;function hM(){let s=window.innerWidth,e=window.innerHeight,t=Math.min(e*.135,Math.max(0,(e-s/2.39)/2));Dp=t/e,document.documentElement.style.setProperty("--bar",t.toFixed(1)+"px")}window.addEventListener("resize",tu);tu();var ee={s:150,d:0,v:_p,target:_p,fast:!1,gear:0,fx:0,latVel:0,pitch:0,pos:new E,yaw:0},ln=new Set,zn={active:!1,id:-1,x:0,y:0},ce={car:0,map:Zi.findIndex(s=>s.id==="mountain"),cam:yn.findIndex(s=>s.id==="orbit"),weather:vs.findIndex(s=>s.id==="rain"),time:Ti.findIndex(s=>s.id==="sunset"),music:0,cine:!0,started:!1,mistCover:.35,mistDens:.2,fstop:ip,quality:uM()};Ze.setMode(ce.cam);Ze.focal=Ze.focalS=16;var ht={stop:et("b-stop"),quality:et("b-quality"),lens:et("b-lens"),mist:et("b-mist"),fast:et("b-fast"),car:et("b-car"),map:et("b-map"),cam:et("b-cam"),weather:et("b-weather"),time:et("b-time"),music:et("b-music")},Ln=(s,e,t)=>{s.querySelector("b").textContent=e,s.querySelector("span").textContent=t,s.title=t};function Yt(){Ln(ht.car,"🚗",Ie.list[ce.car]?.name??"…"),Ln(ht.map,Zi[ce.map].icon,Zi[ce.map].name),Ln(ht.cam,"🎥",yn[ce.cam].name),Ln(ht.weather,vs[ce.weather].icon,vs[ce.weather].name),Ln(ht.time,Ti[ce.time].icon,Ti[ce.time].name),Ln(ht.music,qo[ce.music].icon,qo[ce.music].name),Ln(ht.fast,"⚡",Math.round(ya[ee.gear]*3.6)+" km/h"),ht.fast.classList.toggle("on",ee.gear>0),Ln(ht.mist,"🌫️","Sương "+Math.round(ce.mistDens*100)+"%"),ht.mist.classList.toggle("on",!et("mistpanel").hidden),Ln(ht.lens,"📷",Np()),Ln(ht.quality,"⚙️",oi[ce.quality].name),Ln(ht.stop,tt.state==="parked"?"▶️":tt.state==="off"?"🅿️":"⏳",tt.state==="parked"?"Đi tiếp":tt.state==="off"?"Dừng xe":"…"),ht.lens.classList.toggle("on",!et("lenspanel").hidden)}function uM(){try{let s=oi.findIndex(e=>e.id===localStorage.getItem("chilldrive.quality"));if(s>=0)return s}catch{}return Bh}function Fp(){let s=oi[ce.quality];eu=s.id==="low"?s.ratio:Math.min(s.ratio,Math.max(1,window.devicePixelRatio||1)),Lt.setPixelRatio(eu),bn.setSamples(s.msaa),tu();for(let e of[va,Er,wr])e.setView(s.view),e.setDensity(s.veg);hn.setView(s.view,Me.position),Dt.setShadowSize(s.shadow),Sr.enabled=s.refl,Ai.setRadius(s.trees);try{localStorage.setItem("chilldrive.quality",s.id)}catch{}}var Up=()=>{ce.quality=(ce.quality+1)%oi.length,Fp(),Yt()};function Np(){return Math.round(Ze.focal)+"mm f/"+xs[ce.fstop]}async function pc(s){if(!tt.active){ce.car=(s+Ie.list.length)%Ie.list.length,Ln(ht.car,"🚗","Đang tải…");try{await Ie.select(ce.car)}catch(e){if(console.error("Không tải được xe",Ie.list[ce.car].name,e),Ie.list.length>1)return Ie.list.splice(ce.car,1),pc(ce.car)}En.ready&&!tt.active&&(tt.place(Ie.dim),tt.sit()),xa.place(Ie.dim),fc.place(Ie.current.screen),Op(),Yt()}}var nu=()=>pc(ce.car+1);function iu(){!En.ready||!ce.started||(tt.state==="off"&&(zp(0),tt.place(Ie.dim)),tt.toggle(ee.v)&&Yt())}var wp=0;function dc(s,e,t=zt){let n=[];t.traverse(a=>{a.material&&!a.layers.test(e.layers)&&(n.push(a,a.material),a.material=null)});let i=Lt.getRenderTarget();Lt.setRenderTarget(s);let r=Lt.compileAsync(t,e,zt);Lt.setRenderTarget(i);for(let a=0;a<n.length;a+=2)n[a].material=n[a+1];return r}Dt.onCarEnv=s=>Ie.setEnvMap(s);Dt.carEnvRT&&Ie.setEnvMap(Dt.carEnvRT.texture);Ie.prepare=s=>dc(bn.sceneRT,Me,s);function Op(s=500){clearTimeout(wp),wp=setTimeout(()=>{dc(bn.sceneRT,Me).catch(e=>console.warn("warmup",e))},s)}var Bp=()=>{let s=Zi[ce.map].id;Sf(s),jt.dirt=s==="forest",jt.recomputeHeights(),ga.setMap(s),hn.reset(),hn.setCar(ee.s),hn.prime(Me.position.lengthSq()?Me.position:ee.pos),va.visible=s==="reed",Er.visible=s==="forest",wr.visible=s==="meadow",uc.reset(),uc.visible=s==="mountain",Ze.sidePref=s==="mountain"?1:0,Ai.setRadius(oi[ce.quality].trees),Ze.sideSign=0,Op()},su=()=>{ce.map=(ce.map+1)%Zi.length,Bp(),Yt()},kp=24,Hp=16,dM=xs.indexOf(5.6);function fM(){yn[ce.cam].id==="cockpit"?(Ze.focal=Ze.focalS=16,ce.fstop=xs.indexOf(16)):(Ze.focal=ee.fast?Hp:kp,ce.fstop=dM),Ar()}var ru=()=>{ce.cam=(ce.cam+1)%yn.length,Ze.setMode(ce.cam),fM(),Yt()},au=()=>{ce.weather=(ce.weather+1)%vs.length,Dt.setWeather(vs[ce.weather].id),Yt()},ou=()=>{ce.time=(ce.time+1)%Ti.length,Dt.setTime(Ti[ce.time].hour),Ti[ce.time].id==="night"&&pM(.6,.6),Yt()};function pM(s,e){ce.mistCover=s,ce.mistDens=e;for(let[t,n]of[["mist-cover","mistCover"],["mist-dens","mistDens"]])et(t).value=Math.round(ce[n]*100),et(t+"-v").textContent=et(t).value}var mM=()=>document.body.classList.toggle("cine",ce.cine&&ce.started);function zp(s){let e=ee.fast;ee.gear=s,ee.fast=s===2,ee.target=ya[Math.min(s,1)],ee.fast!==e&&yn[ce.cam].id!=="cockpit"&&(Ze.focal=ee.fast?Hp:kp,Ar())}var cu=()=>{tt.active||(zp((ee.gear+1)%ya.length),Yt())},Gp=()=>{ce.music=(ce.music+1)%qo.length,hc.setMode(ce.music),Yt()};ht.fast.onclick=cu;var Vp=()=>{et("mistpanel").hidden=!et("mistpanel").hidden,et("lenspanel").hidden=!0,Yt()};ht.mist.onclick=Vp;var Wp=()=>{et("lenspanel").hidden=!et("lenspanel").hidden,et("mistpanel").hidden=!0,Yt()};ht.lens.onclick=Wp;ht.quality.onclick=Up;ht.stop.onclick=iu;var Tr=et("lens-focal"),_a=et("lens-fstop");Tr.min=Gh;Tr.max=Vh;_a.max=xs.length-1;var Ar=()=>{Tr.value=Math.round(Ze.focal),et("lens-focal-v").textContent=Math.round(Ze.focal)+"mm",_a.value=ce.fstop,et("lens-fstop-v").textContent="f/"+xs[ce.fstop]};Tr.addEventListener("input",()=>{Ze.focal=Number(Tr.value),Ar(),Yt()});_a.addEventListener("input",()=>{ce.fstop=Number(_a.value),Ar(),Yt()});for(let s of[Tr,_a])s.addEventListener("change",()=>s.blur());Ar();for(let[s,e]of[["mist-cover","mistCover"],["mist-dens","mistDens"]]){let t=et(s);t.value=Math.round(ce[e]*100),et(s+"-v").textContent=t.value,t.addEventListener("input",()=>{ce[e]=t.value/100,et(s+"-v").textContent=t.value,Yt()}),t.addEventListener("change",()=>t.blur())}ht.car.onclick=nu;ht.map.onclick=su;ht.cam.onclick=ru;ht.weather.onclick=au;ht.time.onclick=ou;ht.music.onclick=Gp;et("b-info").onclick=()=>{let s=et("credits");s.hidden=!s.hidden};window.addEventListener("keydown",s=>{if(s.repeat){ln.add(s.code);return}switch(ln.add(s.code),s.code){case"KeyC":ru();break;case"KeyH":document.body.classList.toggle("hidehud");break;case"KeyM":Gp();break;case"KeyT":ou();break;case"KeyR":au();break;case"KeyV":nu();break;case"KeyN":su();break;case"KeyF":cu();break;case"KeyG":Vp();break;case"KeyL":Wp();break;case"KeyQ":Up();break;case"KeyP":iu();break}(s.code.startsWith("Arrow")||s.code==="Space")&&s.preventDefault()});window.addEventListener("keyup",s=>ln.delete(s.code));window.addEventListener("blur",()=>ln.clear());var Ri=new Map,ba=0,qp=()=>{let[s,e]=[...Ri.values()];return Math.hypot(s.x-e.x,s.y-e.y)};Ms.addEventListener("pointerdown",s=>{Ri.set(s.pointerId,{x:s.clientX,y:s.clientY}),Ms.setPointerCapture(s.pointerId),Ri.size===1?(zn.active=!0,zn.id=s.pointerId,zn.x=s.clientX,zn.y=s.clientY,Ze.look.hold=!0):Ri.size===2&&(zn.active=!1,ba=qp())});Ms.addEventListener("pointermove",s=>{let e=Ri.get(s.pointerId);if(e)if(e.x=s.clientX,e.y=s.clientY,Ri.size===2){let t=qp();ba>0&&t>0&&Ze.zoomBy(ba/t),ba=t}else zn.active&&s.pointerId===zn.id&&(Ze.lookBy((s.clientX-zn.x)*4.7/window.innerWidth,(s.clientY-zn.y)*2.2/window.innerHeight),zn.x=s.clientX,zn.y=s.clientY)});var Xp=s=>{Ri.delete(s.pointerId),Ri.size<2&&(ba=0),Ri.size===0&&(zn.active=!1,Ze.look.hold=!1)};Ms.addEventListener("pointerup",Xp);Ms.addEventListener("pointercancel",Xp);Ms.addEventListener("wheel",s=>{s.preventDefault();let e=s.deltaY*(s.deltaMode===1?33:s.deltaMode===2?400:1);Ze.zoomBy(Math.exp(ys(e,-200,200)*.0012))},{passive:!1});var Sp=0,jp=()=>{document.body.classList.remove("idle"),clearTimeout(Sp),Sp=setTimeout(()=>document.body.classList.add("idle"),4500)};["pointermove","pointerdown","keydown","touchstart"].forEach(s=>window.addEventListener(s,jp,{passive:!0}));jp();var o1=new E,Tp=performance.now(),$h=0,Zn=0,Qn={},gM=3.5,Mn={amt:0,range:0,samples:0,near:.1,far:1e3,focus:10,cocK:0,maxCoc:24},ua=new E;function bM(s){let e=yn[ce.cam].id==="cockpit";ua.copy(ee.pos).y+=.6,tt.active&&ua.copy(tt.cam.focus);let t=e&&!tt.active?.8:Math.max(.5,Me.position.distanceTo(ua));Mn.focus+=(t-Mn.focus)*(Mn.amt>.01?1-Math.exp(-s*6):1);let n=Ze.focalEff,i=xs[ce.fstop],r=Mn.focus*1e3;if(Mn.cocK=n*n/(i*Math.max(r-n,1))*(bn.longSide/36)*gM,Mn.maxCoc=Math.max(6,bn.longSide*.0125),tt.active)Mn.range=tt.cam.range;else if(e)Mn.range=0;else{let a=Me.position.x-ua.x,o=Me.position.z-ua.z,c=Math.hypot(a,o)||1,l=Math.sin(ee.yaw),h=Math.cos(ee.yaw);Mn.range=Math.abs((-l*a-h*o)/c)*Ie.dim.length*.5+Math.abs((h*a-l*o)/c)*Ie.dim.width*.5+.3}return Mn.near=Me.near,Mn.far=Me.far,Mn.amt=Zn,Mn.samples=oi[ce.quality].dof,Mn}var vM=new E;function xM(s,e){let t=Ze.look,n=vM.copy(s).sub(e);if(Math.abs(t.yaw)>1e-4||Math.abs(t.pitch)>1e-4){let r=Math.cos(t.yaw),a=Math.sin(t.yaw);n.set(n.x*r+n.z*a,n.y,-n.x*a+n.z*r);let o=Math.hypot(n.x,n.z),c=n.length(),l=ys(Math.atan2(n.y,o)+t.pitch,.03,1.35),h=c*Math.cos(l)/Math.max(o,.001);n.set(n.x*h,c*Math.sin(l),n.z*h)}Me.position.copy(e).add(n);let i=hn.heightAt(Me.position.x,Me.position.z)+.25;Me.position.y<i&&(Me.position.y=i)}var yr=new E;function _M(){let s=Ie.current?.def.steer;if(!s||!Ze.eyeAt||!Ze.eyeAt(yr))return .2;Ie.tilt.worldToLocal(yr);let[,e,t]=s.n,n=1-e*e,i=-e*t,r=Math.hypot(n,i)||1,a=s.r+.035,o=s.c[1]-n/r*a,c=s.c[2]-i/r*a,l=Math.atan2(yr.y-o,yr.z-c),h=Math.atan(Math.tan(Cn.degToRad(Me.fov)/2)*(1-2*Dp*Zn)),u=xa.group.position,d=Math.atan2(u.y+.05-yr.y,yr.z-u.z),f=l-h+.01,g=h-d-.015;return ys(f<=g?f:g,-.1,.6)}var Ap=new E,da=new E,fa=new E,Rp=new E,Cp=new E,Pp=.4;function yM(s){Ie.root.updateMatrixWorld();let e=Ie.tilt.matrixWorld;Ap.fromArray(s.c).applyMatrix4(e),da.fromArray(s.n).transformDirection(e),fa.set(1,0,0).transformDirection(e),fa.addScaledVector(da,-fa.dot(da)).normalize(),Rp.crossVectors(da,fa);for(let[t,n]of[["r",-Pp],["l",Math.PI+Pp]]){let i=Math.cos(n),r=Math.sin(n);Cp.copy(Ap).addScaledVector(fa,i*(s.r+.05)).addScaledVector(Rp,r*(s.r+.05)).addScaledVector(da,.03),En.reach(t,Cp)}}var pa=new E,MM=new E;function EM(){let s=Dt.state,e=bn.rays;e.near=Me.near,e.far=Me.far;let t=s.rays*Cn.smoothstep(Me.getWorldDirection(MM).dot(s.rayDir),.05,.5);t>.002&&(pa.copy(s.rayDir).multiplyScalar(1e3).add(Me.position).project(Me),t*=1-Cn.smoothstep(Math.max(Math.abs(pa.x),Math.abs(pa.y)),1,1.9),e.uv.set(pa.x*.5+.5,pa.y*.5+.5)),e.color.copy(s.rayCol).multiplyScalar(Math.max(t,0)*1.2)}function Yp(s){let e=ys((s-Tp)/1e3,0,.05);Tp=s;let t=ln.has("ArrowLeft")||ln.has("KeyA"),i=(ln.has("ArrowRight")||ln.has("KeyD")?1:0)-(t?1:0);(ln.has("ArrowUp")||ln.has("KeyW"))&&(ee.target+=2.5*e),(ln.has("ArrowDown")||ln.has("KeyS"))&&(ee.target-=2.5*e),(ln.has("Equal")||ln.has("NumpadAdd"))&&Ze.zoomBy(Math.exp(-1.2*e)),(ln.has("Minus")||ln.has("NumpadSubtract"))&&Ze.zoomBy(Math.exp(1.2*e)),ee.target=ys(ee.target,cM,lM);let r=ee.fast?yp:ee.target;tt.active?ee.v=tt.speed(ee.v,e):ee.v+=ys(r-ee.v,-8*e,6*e),ee.s+=ee.v*e,ee.fx+=(oM(55*Mr,yp,ee.v)-ee.fx)*(1-Math.exp(-e*4));let a=ee.d>=0?Tt.halfWidth/2:-Tt.halfWidth/2,o=tt.active?0:i!==0?i*(2.2+ee.v*.06):(a-ee.d)*.8*Math.min(1,ee.v/3);ee.latVel+=(o-ee.latVel)*(1-Math.exp(-e*5)),ee.d+=ee.latVel*e;let c=Tt.halfWidth-.9;Math.abs(ee.d)>c&&(ee.d=Math.sign(ee.d)*c,ee.latVel=0),jt.ensure(ee.s+8e3),jt.at(ee.s,Qn),ee.pos.set(Qn.x+Math.cos(Qn.th)*ee.d,Qn.y,Qn.z-Math.sin(Qn.th)*ee.d);let l=jt.at(ee.s-2.5,{}).y,h=jt.at(ee.s+2.5,{}).y;if(ee.pitch+=(Math.atan2(h-l,5)-ee.pitch)*(1-Math.exp(-e*6)),ee.yaw=Qn.th-Math.atan2(ee.latVel,Math.max(ee.v,4))*.9,Zn+=((ce.cine&&ce.started?1:0)-Zn)*(1-Math.exp(-e*2.5)),Ze.cine=Zn,Ie.update(e,{pos:ee.pos,yaw:ee.yaw,pitch:ee.pitch,speed:ee.v,latVel:ee.latVel,rough:jt.dirtAt(ee.s)}),En.ready){En.root.visible=!0;let p=yn[ce.cam].id==="cockpit"&&!tt.active;En.head.scale.setScalar(p?.001:1),Ie.cabinLevel=p?(.35+.45*Dt.state.dayF)*(1+Dt.state.dark):0,En.update(e);let v=Ie.current?.def.steer;v&&(tt.state==="off"||tt.state==="stopping")&&yM(v)}if(tt.active){let p=tt.state;tt.update(e,Ie.root,ee.v);let v=tt.cam;xM(v.pos,v.look),Me.lookAt(v.look);let x=Ze.fovFor(v.focal);Math.abs(Me.fov-x)>.01&&(Me.fov=x,Me.updateProjectionMatrix()),tt.state==="off"&&(Ze.relP.copy(Me.position).sub(ee.pos),Ze.relL.copy(v.look).sub(ee.pos),Ze.fov=Me.fov,Ze.look.yaw=Ze.look.pitch=0),tt.state!==p&&Yt()}else Ze.cockpitPitch=_M(),Ze.update(e,{pos:ee.pos,yaw:ee.yaw,pitch:ee.pitch,speed:ee.v,dim:Ie.dim,fx:ee.fx,side:ee.d>=0?-1:1});Dt.update(e,ee.pos);let u=Dt.state;ga.update(ee.s),ga.apply(u),va.visible&&va.update(s/1e3,Me.position,jt,ee.s,u),Er.group.visible=Zi[ce.map].id==="forest"&&u.cover<.5,Er.visible&&Er.update(s/1e3,Me.position,jt,ee.s,u),wr.group.visible=Zi[ce.map].id==="meadow"&&u.cover<.5,wr.visible&&wr.update(s/1e3,Me.position,jt,ee.s,u),hn.setCar(ee.s),hn.update(Me.position),Ai.update(Me.position,hn),hn.apply(u);let d=Cn.smoothstep,f=d(u.night,.35,.9)*(1-Math.min(1,u.rain*2))*(1-u.snow)*(1-u.cover)*(1-d(u.wind,.6,.9));Lp.update(s/1e3,ee.s,jt,hn,f,bn.size.y/(2*Math.tan(Cn.degToRad(Me.fov)/2)),zt.fog.density),fc.update(e,ee.v*3.6,Dt.clock),ce.started&&Ie.current&&Ip.update(e,ee.s,ee.d,jt,u.lamps,Ie.current.def.id),uc.update(ee.s,jt,hn,u.lamps,bn.size.y/(2*Math.tan(Cn.degToRad(Me.fov)/2)),zt.fog.density),Ie.setLights(u.lamps),hc.setAmbient({speed:ee.v,rain:u.rain,snow:u.snow,wind:u.wind,dark:u.dark,fx:ee.fx});let g=Math.max(.028*Math.max(0,u.wind-.55)/.45,.016*ee.fx*ee.fx);if(g>0){let p=s/1e3;Me.position.x+=(Math.sin(p*11.3)+Math.sin(p*17.9)*.6)*g,Me.position.y+=(Math.sin(p*13.7)+Math.sin(p*23.1)*.5)*g*.7}if(Zn>.01){let p=s/1e3;Me.position.x+=Math.sin(p*.37)*.014*Zn,Me.position.y+=Math.sin(p*.53)*.012*Zn,Me.rotateZ((Math.sin(p*.31)*.0045+Math.sin(p*.83)*.002)*Zn)}$h-=e,$h<=0&&(et("speed").textContent=Math.round(ee.v*3.6),et("clock").textContent=Dt.clock,ht.lens.title!==Np()&&(Yt(),Ar()),$h=.25),ai.uMistD.value=.05*ce.mistDens*ce.mistDens,ai.uMistH.value=3+70*Math.pow(ce.mistCover,1.4),ai.uMistCover.value=ce.mistCover,ai.uMistBase.value=ee.pos.y-1.5,ai.uMistT.value=s/1e3,ai.uMistWind.value.copy(u.windDir).multiplyScalar(.0012+.006*u.wind),ai.uMistColor.value.copy(u.mistColor),Dt.mistCover=ce.mistCover,Dt.mistDens=ce.mistDens,u.wet>.001?Sr.render(zt,Me,ee.pos.y+.05):Sr.active=!1,ga.setReflection(Sr,s/1e3);let b=yn[ce.cam].id==="cockpit"&&!tt.active;xa.group.visible=b,b&&xa.render(zt,Ie.tilt),ma.update(e,tt.active?0:u.rain,ee.v);let m=b?ma.wet:0;Ie.shield&&Ie.setWiper(ma.angle(Ie.shield.sweep)),bn.begin(),Lt.render(zt,Me),EM(),ma.apply(bn.final.uniforms,m>.01?m:0,Me,Ie.tilt,Ie.shield,s/1e3),bn.render(s/1e3,Zn,ee.fx,bM(e)),requestAnimationFrame(Yp)}async function wM(){Fp(),Dt.setTime(Ti[ce.time].hour),Dt.hour=Ti[ce.time].hour,Dt.snapWeather(vs[ce.weather].id),Dt.onThunder=(t,n)=>hc.thunder(t,n),jt.ensure(ee.s+8e3),jt.at(ee.s,Qn),ee.pos.set(Qn.x,Qn.y,Qn.z),Bp(),await Ie.probe(),Yt(),requestAnimationFrame(Yp);let s=et("start");et("hint").textContent="Chạm hoặc nhấn phím bất kỳ để bắt đầu",Ie.onProgress=t=>Ln(ht.car,"🚗","Đang tải… "+Math.round(t*100)+"%"),Ai.load("assets/models/nature.glb").then(()=>{Ai.rockGeos.length&&(hn.rockGeos=Ai.rockGeos),hn.reset(),hn.prime(Me.position.lengthSq()?Me.position:ee.pos),Ai.setRadius(oi[ce.quality].trees),dc(bn.sceneRT,Me,Ai.group).catch(()=>{})}).catch(t=>console.warn("Không tải được cây / đá chi tiết",t)),pc(0).then(()=>En.load("assets/models/person.glb")).then(()=>{Ie.tilt.add(En.root),tt.place(Ie.dim),tt.sit(),dc(bn.sceneRT,Me,En.root).catch(()=>{}),Yt()}).catch(t=>console.warn("Không tải được người lái",t));let e=()=>{s.classList.add("gone"),ce.started=!0,mM(),Ze.startIntro(),document.body.classList.add("intro"),setTimeout(()=>document.body.classList.remove("intro"),6e3),hc.start().catch(t=>console.warn("Audio:",t)),window.removeEventListener("keydown",e),s.removeEventListener("pointerdown",e)};s.addEventListener("pointerdown",e),window.addEventListener("keydown",e)}wM();window.__app={traffic:Ip,dash:fc,town:uc,fireflies:Lp,wipers:ma,meadow:wr,nature:Ai,person:En,stop:tt,toggleStop:()=>iu(),refl:Sr,MIST:ai,forceCine:s=>{Zn=s},post:bn,toggleFast:cu,env:Dt,cars:Ie,rig:Ze,drive:ee,state:ce,nextCar:nu,nextMap:su,nextCam:ru,nextWeather:au,nextTime:ou,chooseCar:pc,renderer:Lt,scene:zt,camera:Me,scenery:ga,terrain:hn,reeds:va,grass:Er,road:jt};
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
