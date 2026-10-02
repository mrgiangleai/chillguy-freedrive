var jd=0,ql=1,Kd=2;var Du=1,Ic=2,jn=3,Dn=0,It=1,pt=2;var pi=0,Ps=1,Un=2,Yl=3,jl=4,Jd=5,zi=100,Zd=101,Qd=102,Kl=103,Jl=104,$d=200,ef=201,tf=202,nf=203,Zo=204,Qo=205,sf=206,rf=207,af=208,of=209,cf=210,lf=211,hf=212,uf=213,df=214,ff=0,pf=1,mf=2,da=3,gf=4,bf=5,xf=6,_f=7,Dc=0,vf=1,yf=2,mi=0,Mf=1,Sf=2,Ef=3,Uc=4,wf=5,Tf=6,Zl="attached",Af="detached",Uu=300,Ds=301,Us=302,$o=303,ec=304,Ha=306,Nn=1e3,tn=1001,mr=1002,bt=1003,fa=1004;var hr=1005;var yt=1006,Nc=1007;var bi=1008;var gi=1009,Rf=1010,Cf=1011,Fc=1012,Nu=1013,di=1014,Kn=1015,qi=1016,Fu=1017,Ou=1018,Vi=1020,Pf=1021,hn=1023,Lf=1024,If=1025,Wi=1026,Ns=1027,Df=1028,Bu=1029,Uf=1030,ku=1031,zu=1033,bo=33776,xo=33777,_o=33778,vo=33779,Ql=35840,$l=35841,eh=35842,th=35843,Hu=36196,nh=37492,ih=37496,sh=37808,rh=37809,ah=37810,oh=37811,ch=37812,lh=37813,hh=37814,uh=37815,dh=37816,fh=37817,ph=37818,mh=37819,gh=37820,bh=37821,yo=36492,xh=36494,_h=36495,Nf=36283,vh=36284,yh=36285,Mh=36286;var Fs=2300,Yi=2301,Mo=2302,Sh=2400,Eh=2401,wh=2402,Ff=2500;var Gu=0,Ga=1,Sr=2,Vu=3e3,Xi=3001,Of=3200,Bf=3201,Oc=0,kf=1,un="",$e="srgb",Mt="srgb-linear",Bc="display-p3",Va="display-p3-linear",pa="linear",ot="srgb",ma="rec709",ga="p3";var os=7680;var Th=519,zf=512,Hf=513,Gf=514,Wu=515,Vf=516,Wf=517,Xf=518,qf=519,tc=35044;var Ah="300 es",nc=1035,Jn=2e3,ba=2001,xi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}},Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Rh=1234567,ur=Math.PI/180,Os=180/Math.PI;function wn(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ft[s&255]+Ft[s>>8&255]+Ft[s>>16&255]+Ft[s>>24&255]+"-"+Ft[e&255]+Ft[e>>8&255]+"-"+Ft[e>>16&15|64]+Ft[e>>24&255]+"-"+Ft[t&63|128]+Ft[t>>8&255]+"-"+Ft[t>>16&255]+Ft[t>>24&255]+Ft[n&255]+Ft[n>>8&255]+Ft[n>>16&255]+Ft[n>>24&255]).toLowerCase()}function Bt(s,e,t){return Math.max(e,Math.min(t,s))}function kc(s,e){return(s%e+e)%e}function Yf(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function jf(s,e,t){return s!==e?(t-s)/(e-s):0}function dr(s,e,t){return(1-t)*s+t*e}function Kf(s,e,t,n){return dr(s,e,1-Math.exp(-t*n))}function Jf(s,e=1){return e-Math.abs(kc(s,e*2)-e)}function Zf(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Qf(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function $f(s,e){return s+Math.floor(Math.random()*(e-s+1))}function ep(s,e){return s+Math.random()*(e-s)}function tp(s){return s*(.5-Math.random())}function np(s){s!==void 0&&(Rh=s);let e=Rh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ip(s){return s*ur}function sp(s){return s*Os}function ic(s){return(s&s-1)===0&&s!==0}function rp(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function xa(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function ap(s,e,t,n,i){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":s.set(o*h,c*u,c*d,o*l);break;case"YZY":s.set(c*d,o*h,c*u,o*l);break;case"ZXZ":s.set(c*u,c*d,o*h,o*l);break;case"XZX":s.set(o*h,c*g,c*f,o*l);break;case"YXY":s.set(c*f,o*h,c*g,o*l);break;case"ZYZ":s.set(c*g,c*f,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function In(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function tt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Xu={DEG2RAD:ur,RAD2DEG:Os,generateUUID:wn,clamp:Bt,euclideanModulo:kc,mapLinear:Yf,inverseLerp:jf,lerp:dr,damp:Kf,pingpong:Jf,smoothstep:Zf,smootherstep:Qf,randInt:$f,randFloat:ep,randFloatSpread:tp,seededRandom:np,degToRad:ip,radToDeg:sp,isPowerOfTwo:ic,ceilPowerOfTwo:rp,floorPowerOfTwo:xa,setQuaternionFromProperEuler:ap,normalize:tt,denormalize:In},ue=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ve=class s{constructor(e,t,n,i,r,a,o,c,l){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l)}set(e,t,n,i,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],b=i[0],m=i[3],p=i[6],_=i[1],x=i[4],y=i[7],R=i[2],w=i[5],C=i[8];return r[0]=a*b+o*_+c*R,r[3]=a*m+o*x+c*w,r[6]=a*p+o*y+c*C,r[1]=l*b+h*_+u*R,r[4]=l*m+h*x+u*w,r[7]=l*p+h*y+u*C,r[2]=d*b+f*_+g*R,r[5]=d*m+f*x+g*w,r[8]=d*p+f*y+g*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+i*r*l-i*a*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*r,f=l*r-a*c,g=t*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/g;return e[0]=u*b,e[1]=(i*l-h*n)*b,e[2]=(o*n-i*a)*b,e[3]=d*b,e[4]=(h*t-i*c)*b,e[5]=(i*r-o*t)*b,e[6]=f*b,e[7]=(n*c-l*t)*b,e[8]=(a*t-n*r)*b,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(So.makeScale(e,t)),this}rotate(e){return this.premultiply(So.makeRotation(-e)),this}translate(e,t){return this.premultiply(So.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},So=new Ve;function qu(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function gr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function op(){let s=gr("canvas");return s.style.display="block",s}var Ch={};function fr(s){s in Ch||(Ch[s]=!0,console.warn(s))}var Ph=new Ve().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Lh=new Ve().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Nr={[Mt]:{transfer:pa,primaries:ma,toReference:s=>s,fromReference:s=>s},[$e]:{transfer:ot,primaries:ma,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Va]:{transfer:pa,primaries:ga,toReference:s=>s.applyMatrix3(Lh),fromReference:s=>s.applyMatrix3(Ph)},[Bc]:{transfer:ot,primaries:ga,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Lh),fromReference:s=>s.applyMatrix3(Ph).convertLinearToSRGB()}},cp=new Set([Mt,Va]),Ke={enabled:!0,_workingColorSpace:Mt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!cp.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;let n=Nr[e].toReference,i=Nr[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Nr[s].primaries},getTransfer:function(s){return s===un?pa:Nr[s].transfer}};function Ls(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Eo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var cs,_a=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{cs===void 0&&(cs=gr("canvas")),cs.width=e.width,cs.height=e.height;let n=cs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=cs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=gr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Ls(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ls(t[n]/255)*255):t[n]=Ls(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},lp=0,va=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:lp++}),this.uuid=wn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(wo(i[a].image)):r.push(wo(i[a]))}else r=wo(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function wo(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?_a.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var hp=0,Ct=class s extends xi{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=tn,i=tn,r=yt,a=bi,o=hn,c=gi,l=s.DEFAULT_ANISOTROPY,h=un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=wn(),this.name="",this.source=new va(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(fr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Xi?$e:un),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Uu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Nn:e.x=e.x-Math.floor(e.x);break;case tn:e.x=e.x<0?0:1;break;case mr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Nn:e.y=e.y-Math.floor(e.y);break;case tn:e.y=e.y<0?0:1;break;case mr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return fr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===$e?Xi:Vu}set encoding(e){fr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Xi?$e:un}};Ct.DEFAULT_IMAGE=null;Ct.DEFAULT_MAPPING=Uu;Ct.DEFAULT_ANISOTROPY=1;var Je=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],b=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-b)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+b)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(l+1)/2,y=(f+1)/2,R=(p+1)/2,w=(h+d)/4,C=(u+b)/4,O=(g+m)/4;return x>y&&x>R?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=w/n,r=C/n):y>R?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=w/i,r=O/i):R<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(R),n=C/r,i=O/r),this.set(n,i,r,t),this}let _=Math.sqrt((m-g)*(m-g)+(u-b)*(u-b)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(u-b)/_,this.z=(d-h)/_,this.w=Math.acos((l+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},sc=class extends xi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Je(0,0,e,t),this.scissorTest=!1,this.viewport=new Je(0,0,e,t);let i={width:e,height:t,depth:1};n.encoding!==void 0&&(fr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Xi?$e:un),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Ct(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new va(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},nn=class extends sc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ya=class extends Ct{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=bt,this.minFilter=bt,this.wrapR=tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var rc=class extends Ct{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=bt,this.minFilter=bt,this.wrapR=tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Xt=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],d=r[a+0],f=r[a+1],g=r[a+2],b=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=b;return}if(u!==b||c!==d||l!==f||h!==g){let m=1-o,p=c*d+l*f+h*g+u*b,_=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){let R=Math.sqrt(x),w=Math.atan2(R,p*_);m=Math.sin(m*w)/R,o=Math.sin(o*w)/R}let y=o*_;if(c=c*m+d*y,l=l*m+f*y,h=h*m+g*y,u=u*m+b*y,m===1-o){let R=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=R,l*=R,h*=R,u*=R}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,a){let o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*u+c*f-l*d,e[t+1]=c*g+h*d+l*u-o*f,e[t+2]=l*g+h*f+o*d-c*u,e[t+3]=h*g-o*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),u=o(r/2),d=c(n/2),f=c(i/2),g=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-i)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+l)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-l)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Bt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+i*l-r*c,this._y=i*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ih.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ih.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),h=2*(o*t-r*i),u=2*(r*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=i+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return To.copy(this).projectOnVector(e),this.sub(To)}reflect(e){return this.sub(To.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},To=new P,Ih=new Xt,qt=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(yn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(yn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=yn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,yn):yn.fromBufferAttribute(r,a),yn.applyMatrix4(e.matrixWorld),this.expandByPoint(yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Fr.copy(n.boundingBox)),Fr.applyMatrix4(e.matrixWorld),this.union(Fr)}let i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,yn),yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(er),Or.subVectors(this.max,er),ls.subVectors(e.a,er),hs.subVectors(e.b,er),us.subVectors(e.c,er),oi.subVectors(hs,ls),ci.subVectors(us,hs),Ni.subVectors(ls,us);let t=[0,-oi.z,oi.y,0,-ci.z,ci.y,0,-Ni.z,Ni.y,oi.z,0,-oi.x,ci.z,0,-ci.x,Ni.z,0,-Ni.x,-oi.y,oi.x,0,-ci.y,ci.x,0,-Ni.y,Ni.x,0];return!Ao(t,ls,hs,us,Or)||(t=[1,0,0,0,1,0,0,0,1],!Ao(t,ls,hs,us,Or))?!1:(Br.crossVectors(oi,ci),t=[Br.x,Br.y,Br.z],Ao(t,ls,hs,us,Or))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Gn=[new P,new P,new P,new P,new P,new P,new P,new P],yn=new P,Fr=new qt,ls=new P,hs=new P,us=new P,oi=new P,ci=new P,Ni=new P,er=new P,Or=new P,Br=new P,Fi=new P;function Ao(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Fi.fromArray(s,r);let o=i.x*Math.abs(Fi.x)+i.y*Math.abs(Fi.y)+i.z*Math.abs(Fi.z),c=e.dot(Fi),l=t.dot(Fi),h=n.dot(Fi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var up=new qt,tr=new P,Ro=new P,sn=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):up.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;tr.subVectors(e,this.center);let t=tr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(tr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ro.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(tr.copy(e.center).add(Ro)),this.expandByPoint(tr.copy(e.center).sub(Ro))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Vn=new P,Co=new P,kr=new P,li=new P,Po=new P,zr=new P,Lo=new P,Bs=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Vn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Vn.copy(this.origin).addScaledVector(this.direction,t),Vn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Co.copy(e).add(t).multiplyScalar(.5),kr.copy(t).sub(e).normalize(),li.copy(this.origin).sub(Co);let r=e.distanceTo(t)*.5,a=-this.direction.dot(kr),o=li.dot(this.direction),c=-li.dot(kr),l=li.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*c-o,d=a*o-c,g=r*h,u>=0)if(d>=-g)if(d<=g){let b=1/h;u*=b,d*=b,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Co).addScaledVector(kr,d),f}intersectSphere(e,t){Vn.subVectors(e.center,this.origin);let n=Vn.dot(this.direction),i=Vn.dot(Vn)-n*n,r=e.radius*e.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Vn)!==null}intersectTriangle(e,t,n,i,r){Po.subVectors(t,e),zr.subVectors(n,e),Lo.crossVectors(Po,zr);let a=this.direction.dot(Lo),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;li.subVectors(this.origin,e);let c=o*this.direction.dot(zr.crossVectors(li,zr));if(c<0)return null;let l=o*this.direction.dot(Po.cross(li));if(l<0||c+l>a)return null;let h=-o*li.dot(Lo);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Re=class s{constructor(e,t,n,i,r,a,o,c,l,h,u,d,f,g,b,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l,h,u,d,f,g,b,m)}set(e,t,n,i,r,a,o,c,l,h,u,d,f,g,b,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=b,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/ds.setFromMatrixColumn(e,0).length(),r=1/ds.setFromMatrixColumn(e,1).length(),a=1/ds.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,g=o*h,b=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=d-b*l,t[9]=-o*c,t[2]=b-d*l,t[6]=g+f*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,f=c*u,g=l*h,b=l*u;t[0]=d+b*o,t[4]=g*o-f,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=b+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,f=c*u,g=l*h,b=l*u;t[0]=d-b*o,t[4]=-a*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=b-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,f=a*u,g=o*h,b=o*u;t[0]=c*h,t[4]=g*l-f,t[8]=d*l+b,t[1]=c*u,t[5]=b*l+d,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,f=a*l,g=o*c,b=o*l;t[0]=c*h,t[4]=b-d*u,t[8]=g*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*u+g,t[10]=d-b*u}else if(e.order==="XZY"){let d=a*c,f=a*l,g=o*c,b=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+b,t[5]=a*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*h,t[10]=b*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dp,e,fp)}lookAt(e,t,n){let i=this.elements;return $t.subVectors(e,t),$t.lengthSq()===0&&($t.z=1),$t.normalize(),hi.crossVectors(n,$t),hi.lengthSq()===0&&(Math.abs(n.z)===1?$t.x+=1e-4:$t.z+=1e-4,$t.normalize(),hi.crossVectors(n,$t)),hi.normalize(),Hr.crossVectors($t,hi),i[0]=hi.x,i[4]=Hr.x,i[8]=$t.x,i[1]=hi.y,i[5]=Hr.y,i[9]=$t.y,i[2]=hi.z,i[6]=Hr.z,i[10]=$t.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],b=n[6],m=n[10],p=n[14],_=n[3],x=n[7],y=n[11],R=n[15],w=i[0],C=i[4],O=i[8],v=i[12],S=i[1],N=i[5],Y=i[9],V=i[13],A=i[2],L=i[6],D=i[10],W=i[14],F=i[3],B=i[7],j=i[11],J=i[15];return r[0]=a*w+o*S+c*A+l*F,r[4]=a*C+o*N+c*L+l*B,r[8]=a*O+o*Y+c*D+l*j,r[12]=a*v+o*V+c*W+l*J,r[1]=h*w+u*S+d*A+f*F,r[5]=h*C+u*N+d*L+f*B,r[9]=h*O+u*Y+d*D+f*j,r[13]=h*v+u*V+d*W+f*J,r[2]=g*w+b*S+m*A+p*F,r[6]=g*C+b*N+m*L+p*B,r[10]=g*O+b*Y+m*D+p*j,r[14]=g*v+b*V+m*W+p*J,r[3]=_*w+x*S+y*A+R*F,r[7]=_*C+x*N+y*L+R*B,r[11]=_*O+x*Y+y*D+R*j,r[15]=_*v+x*V+y*W+R*J,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],b=e[7],m=e[11],p=e[15];return g*(+r*c*u-i*l*u-r*o*d+n*l*d+i*o*f-n*c*f)+b*(+t*c*f-t*l*d+r*a*d-i*a*f+i*l*h-r*c*h)+m*(+t*l*u-t*o*f-r*a*u+n*a*f+r*o*h-n*l*h)+p*(-i*o*h-t*c*u+t*o*d+i*a*u-n*a*d+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],b=e[13],m=e[14],p=e[15],_=u*m*l-b*d*l+b*c*f-o*m*f-u*c*p+o*d*p,x=g*d*l-h*m*l-g*c*f+a*m*f+h*c*p-a*d*p,y=h*b*l-g*u*l+g*o*f-a*b*f-h*o*p+a*u*p,R=g*u*c-h*b*c-g*o*d+a*b*d+h*o*m-a*u*m,w=t*_+n*x+i*y+r*R;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/w;return e[0]=_*C,e[1]=(b*d*r-u*m*r-b*i*f+n*m*f+u*i*p-n*d*p)*C,e[2]=(o*m*r-b*c*r+b*i*l-n*m*l-o*i*p+n*c*p)*C,e[3]=(u*c*r-o*d*r-u*i*l+n*d*l+o*i*f-n*c*f)*C,e[4]=x*C,e[5]=(h*m*r-g*d*r+g*i*f-t*m*f-h*i*p+t*d*p)*C,e[6]=(g*c*r-a*m*r-g*i*l+t*m*l+a*i*p-t*c*p)*C,e[7]=(a*d*r-h*c*r+h*i*l-t*d*l-a*i*f+t*c*f)*C,e[8]=y*C,e[9]=(g*u*r-h*b*r-g*n*f+t*b*f+h*n*p-t*u*p)*C,e[10]=(a*b*r-g*o*r+g*n*l-t*b*l-a*n*p+t*o*p)*C,e[11]=(h*o*r-a*u*r-h*n*l+t*u*l+a*n*f-t*o*f)*C,e[12]=R*C,e[13]=(h*b*i-g*u*i+g*n*d-t*b*d-h*n*m+t*u*m)*C,e[14]=(g*o*i-a*b*i-g*n*c+t*b*c+a*n*m-t*o*m)*C,e[15]=(a*u*i-h*o*i+h*n*c-t*u*c-a*n*d+t*o*d)*C,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,d=r*l,f=r*h,g=r*u,b=a*h,m=a*u,p=o*u,_=c*l,x=c*h,y=c*u,R=n.x,w=n.y,C=n.z;return i[0]=(1-(b+p))*R,i[1]=(f+y)*R,i[2]=(g-x)*R,i[3]=0,i[4]=(f-y)*w,i[5]=(1-(d+p))*w,i[6]=(m+_)*w,i[7]=0,i[8]=(g+x)*C,i[9]=(m-_)*C,i[10]=(1-(d+b))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=ds.set(i[0],i[1],i[2]).length(),a=ds.set(i[4],i[5],i[6]).length(),o=ds.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Mn.copy(this);let l=1/r,h=1/a,u=1/o;return Mn.elements[0]*=l,Mn.elements[1]*=l,Mn.elements[2]*=l,Mn.elements[4]*=h,Mn.elements[5]*=h,Mn.elements[6]*=h,Mn.elements[8]*=u,Mn.elements[9]*=u,Mn.elements[10]*=u,t.setFromRotationMatrix(Mn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=Jn){let c=this.elements,l=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i),f,g;if(o===Jn)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===ba)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=Jn){let c=this.elements,l=1/(t-e),h=1/(n-i),u=1/(a-r),d=(t+e)*l,f=(n+i)*h,g,b;if(o===Jn)g=(a+r)*u,b=-2*u;else if(o===ba)g=r*u,b=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=b,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ds=new P,Mn=new Re,dp=new P(0,0,0),fp=new P(1,1,1),hi=new P,Hr=new P,$t=new P,Dh=new Re,Uh=new Xt,Ma=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Bt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Bt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Bt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Bt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Dh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Dh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Uh.setFromEuler(this),this.setFromQuaternion(Uh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ma.DEFAULT_ORDER="XYZ";var Sa=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},pp=0,Nh=new P,fs=new Xt,Wn=new Re,Gr=new P,nr=new P,mp=new P,gp=new Xt,Fh=new P(1,0,0),Oh=new P(0,1,0),Bh=new P(0,0,1),bp={type:"added"},xp={type:"removed"},at=class s extends xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pp++}),this.uuid=wn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new P,t=new Ma,n=new Xt,i=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Re},normalMatrix:{value:new Ve}}),this.matrix=new Re,this.matrixWorld=new Re,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return fs.setFromAxisAngle(e,t),this.quaternion.multiply(fs),this}rotateOnWorldAxis(e,t){return fs.setFromAxisAngle(e,t),this.quaternion.premultiply(fs),this}rotateX(e){return this.rotateOnAxis(Fh,e)}rotateY(e){return this.rotateOnAxis(Oh,e)}rotateZ(e){return this.rotateOnAxis(Bh,e)}translateOnAxis(e,t){return Nh.copy(e).applyQuaternion(this.quaternion),this.position.add(Nh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Fh,e)}translateY(e){return this.translateOnAxis(Oh,e)}translateZ(e){return this.translateOnAxis(Bh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Gr.copy(e):Gr.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wn.lookAt(nr,Gr,this.up):Wn.lookAt(Gr,nr,this.up),this.quaternion.setFromRotationMatrix(Wn),i&&(Wn.extractRotation(i.matrixWorld),fs.setFromRotationMatrix(Wn),this.quaternion.premultiply(fs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(bp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(xp)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Wn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,e,mp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,gp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let i=this.children;for(let r=0,a=i.length;r<a;r++){let o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];i.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};at.DEFAULT_UP=new P(0,1,0);at.DEFAULT_MATRIX_AUTO_UPDATE=!0;at.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Sn=new P,Xn=new P,Io=new P,qn=new P,ps=new P,ms=new P,kh=new P,Do=new P,Uo=new P,No=new P,Vr=!1,Gi=class s{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Sn.subVectors(e,t),i.cross(Sn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Sn.subVectors(i,t),Xn.subVectors(n,t),Io.subVectors(e,t);let a=Sn.dot(Sn),o=Sn.dot(Xn),c=Sn.dot(Io),l=Xn.dot(Xn),h=Xn.dot(Io),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-o*h)*d,g=(a*h-o*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,qn)===null?!1:qn.x>=0&&qn.y>=0&&qn.x+qn.y<=1}static getUV(e,t,n,i,r,a,o,c){return Vr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Vr=!0),this.getInterpolation(e,t,n,i,r,a,o,c)}static getInterpolation(e,t,n,i,r,a,o,c){return this.getBarycoord(e,t,n,i,qn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,qn.x),c.addScaledVector(a,qn.y),c.addScaledVector(o,qn.z),c)}static isFrontFacing(e,t,n,i){return Sn.subVectors(n,t),Xn.subVectors(e,t),Sn.cross(Xn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Sn.subVectors(this.c,this.b),Xn.subVectors(this.a,this.b),Sn.cross(Xn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return Vr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Vr=!0),s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,a,o;ps.subVectors(i,n),ms.subVectors(r,n),Do.subVectors(e,n);let c=ps.dot(Do),l=ms.dot(Do);if(c<=0&&l<=0)return t.copy(n);Uo.subVectors(e,i);let h=ps.dot(Uo),u=ms.dot(Uo);if(h>=0&&u<=h)return t.copy(i);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(ps,a);No.subVectors(e,r);let f=ps.dot(No),g=ms.dot(No);if(g>=0&&f<=g)return t.copy(r);let b=f*l-c*g;if(b<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(ms,o);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return kh.subVectors(r,i),o=(u-h)/(u-h+(f-g)),t.copy(i).addScaledVector(kh,o);let p=1/(m+b+d);return a=b*p,o=d*p,t.copy(n).addScaledVector(ps,a).addScaledVector(ms,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Yu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ui={h:0,s:0,l:0},Wr={h:0,s:0,l:0};function Fo(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Z=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=$e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ke.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Ke.workingColorSpace){if(e=kc(e,1),t=Bt(t,0,1),n=Bt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Fo(a,r,e+1/3),this.g=Fo(a,r,e),this.b=Fo(a,r,e-1/3)}return Ke.toWorkingColorSpace(this,i),this}setStyle(e,t=$e){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=$e){let n=Yu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ls(e.r),this.g=Ls(e.g),this.b=Ls(e.b),this}copyLinearToSRGB(e){return this.r=Eo(e.r),this.g=Eo(e.g),this.b=Eo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$e){return Ke.fromWorkingColorSpace(Ot.copy(this),e),Math.round(Bt(Ot.r*255,0,255))*65536+Math.round(Bt(Ot.g*255,0,255))*256+Math.round(Bt(Ot.b*255,0,255))}getHexString(e=$e){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.fromWorkingColorSpace(Ot.copy(this),t);let n=Ot.r,i=Ot.g,r=Ot.b,a=Math.max(n,i,r),o=Math.min(n,i,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Ke.workingColorSpace){return Ke.fromWorkingColorSpace(Ot.copy(this),t),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=$e){Ke.fromWorkingColorSpace(Ot.copy(this),e);let t=Ot.r,n=Ot.g,i=Ot.b;return e!==$e?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ui),this.setHSL(ui.h+e,ui.s+t,ui.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ui),e.getHSL(Wr);let n=dr(ui.h,Wr.h,t),i=dr(ui.s,Wr.s,t),r=dr(ui.l,Wr.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ot=new Z;Z.NAMES=Yu;var _p=0,Dt=class extends xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_p++}),this.uuid=wn(),this.name="",this.type="Material",this.blending=Ps,this.side=Dn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zo,this.blendDst=Qo,this.blendEquation=zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Z(0,0,0),this.blendAlpha=0,this.depthFunc=da,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Th,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=os,this.stencilZFail=os,this.stencilZPass=os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ps&&(n.blending=this.blending),this.side!==Dn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Zo&&(n.blendSrc=this.blendSrc),this.blendDst!==Qo&&(n.blendDst=this.blendDst),this.blendEquation!==zi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==da&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Th&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==os&&(n.stencilFail=this.stencilFail),this.stencilZFail!==os&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==os&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Yt=class extends Dt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Z(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Dc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var _t=new P,Xr=new ue,ze=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=tc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Kn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Xr.fromBufferAttribute(this,t),Xr.applyMatrix3(e),this.setXY(t,Xr.x,Xr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix3(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix4(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyNormalMatrix(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.transformDirection(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=In(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=tt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=In(t,this.array)),t}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=In(t,this.array)),t}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=In(t,this.array)),t}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=In(t,this.array)),t}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),i=tt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),i=tt(i,this.array),r=tt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==tc&&(e.usage=this.usage),e}};var Ea=class extends ze{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var wa=class extends ze{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var je=class extends ze{constructor(e,t,n){super(new Float32Array(e),t,n)}};var vp=0,ln=new Re,Oo=new at,gs=new P,en=new qt,ir=new qt,Rt=new P,qe=class s extends xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vp++}),this.uuid=wn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qu(e)?wa:Ea)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ve().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ln.makeRotationFromQuaternion(e),this.applyMatrix4(ln),this}rotateX(e){return ln.makeRotationX(e),this.applyMatrix4(ln),this}rotateY(e){return ln.makeRotationY(e),this.applyMatrix4(ln),this}rotateZ(e){return ln.makeRotationZ(e),this.applyMatrix4(ln),this}translate(e,t,n){return ln.makeTranslation(e,t,n),this.applyMatrix4(ln),this}scale(e,t,n){return ln.makeScale(e,t,n),this.applyMatrix4(ln),this}lookAt(e){return Oo.lookAt(e),Oo.updateMatrix(),this.applyMatrix4(Oo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gs).negate(),this.translate(gs.x,gs.y,gs.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new je(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];en.setFromBufferAttribute(r),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(e){let n=this.boundingSphere.center;if(en.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];ir.setFromBufferAttribute(o),this.morphTargetsRelative?(Rt.addVectors(en.min,ir.min),en.expandByPoint(Rt),Rt.addVectors(en.max,ir.max),en.expandByPoint(Rt)):(en.expandByPoint(ir.min),en.expandByPoint(ir.max))}en.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Rt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Rt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Rt.fromBufferAttribute(o,l),c&&(gs.fromBufferAttribute(e,l),Rt.add(gs)),i=Math.max(i,n.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,i=t.position.array,r=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ze(new Float32Array(4*o),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let S=0;S<o;S++)l[S]=new P,h[S]=new P;let u=new P,d=new P,f=new P,g=new ue,b=new ue,m=new ue,p=new P,_=new P;function x(S,N,Y){u.fromArray(i,S*3),d.fromArray(i,N*3),f.fromArray(i,Y*3),g.fromArray(a,S*2),b.fromArray(a,N*2),m.fromArray(a,Y*2),d.sub(u),f.sub(u),b.sub(g),m.sub(g);let V=1/(b.x*m.y-m.x*b.y);isFinite(V)&&(p.copy(d).multiplyScalar(m.y).addScaledVector(f,-b.y).multiplyScalar(V),_.copy(f).multiplyScalar(b.x).addScaledVector(d,-m.x).multiplyScalar(V),l[S].add(p),l[N].add(p),l[Y].add(p),h[S].add(_),h[N].add(_),h[Y].add(_))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let S=0,N=y.length;S<N;++S){let Y=y[S],V=Y.start,A=Y.count;for(let L=V,D=V+A;L<D;L+=3)x(n[L+0],n[L+1],n[L+2])}let R=new P,w=new P,C=new P,O=new P;function v(S){C.fromArray(r,S*3),O.copy(C);let N=l[S];R.copy(N),R.sub(C.multiplyScalar(C.dot(N))).normalize(),w.crossVectors(O,N);let V=w.dot(h[S])<0?-1:1;c[S*4]=R.x,c[S*4+1]=R.y,c[S*4+2]=R.z,c[S*4+3]=V}for(let S=0,N=y.length;S<N;++S){let Y=y[S],V=Y.start,A=Y.count;for(let L=V,D=V+A;L<D;L+=3)v(n[L+0]),v(n[L+1]),v(n[L+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ze(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new P,r=new P,a=new P,o=new P,c=new P,l=new P,h=new P,u=new P;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),b=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,b),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,b),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(b,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Rt.fromBufferAttribute(e,t),Rt.normalize(),e.setXYZ(t,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),f=0,g=0;for(let b=0,m=c.length;b<m;b++){o.isInterleavedBufferAttribute?f=c[b]*o.data.stride+o.offset:f=c[b]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new ze(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let o in i){let c=i[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},zh=new Re,Oi=new Bs,qr=new sn,Hh=new P,bs=new P,xs=new P,_s=new P,Bo=new P,Yr=new P,jr=new ue,Kr=new ue,Jr=new ue,Gh=new P,Vh=new P,Wh=new P,Zr=new P,Qr=new P,Ze=class extends at{constructor(e=new qe,t=new Yt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(r&&o){Yr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(Bo.fromBufferAttribute(u,e),a?Yr.addScaledVector(Bo,h):Yr.addScaledVector(Bo.sub(t),h))}t.add(Yr)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),qr.copy(n.boundingSphere),qr.applyMatrix4(r),Oi.copy(e.ray).recast(e.near),!(qr.containsPoint(Oi.origin)===!1&&(Oi.intersectSphere(qr,Hh)===null||Oi.origin.distanceToSquared(Hh)>(e.far-e.near)**2))&&(zh.copy(r).invert(),Oi.copy(e.ray).applyMatrix4(zh),!(n.boundingBox!==null&&Oi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Oi)))}_computeIntersections(e,t,n){let i,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,b=d.length;g<b;g++){let m=d[g],p=a[m.materialIndex],_=Math.max(m.start,f.start),x=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let y=_,R=x;y<R;y+=3){let w=o.getX(y),C=o.getX(y+1),O=o.getX(y+2);i=$r(this,p,e,n,l,h,u,w,C,O),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,f.start),b=Math.min(o.count,f.start+f.count);for(let m=g,p=b;m<p;m+=3){let _=o.getX(m),x=o.getX(m+1),y=o.getX(m+2);i=$r(this,a,e,n,l,h,u,_,x,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,b=d.length;g<b;g++){let m=d[g],p=a[m.materialIndex],_=Math.max(m.start,f.start),x=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let y=_,R=x;y<R;y+=3){let w=y,C=y+1,O=y+2;i=$r(this,p,e,n,l,h,u,w,C,O),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,f.start),b=Math.min(c.count,f.start+f.count);for(let m=g,p=b;m<p;m+=3){let _=m,x=m+1,y=m+2;i=$r(this,a,e,n,l,h,u,_,x,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};function yp(s,e,t,n,i,r,a,o){let c;if(e.side===It?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,e.side===Dn,o),c===null)return null;Qr.copy(o),Qr.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(Qr);return l<t.near||l>t.far?null:{distance:l,point:Qr.clone(),object:s}}function $r(s,e,t,n,i,r,a,o,c,l){s.getVertexPosition(o,bs),s.getVertexPosition(c,xs),s.getVertexPosition(l,_s);let h=yp(s,e,t,n,bs,xs,_s,Zr);if(h){i&&(jr.fromBufferAttribute(i,o),Kr.fromBufferAttribute(i,c),Jr.fromBufferAttribute(i,l),h.uv=Gi.getInterpolation(Zr,bs,xs,_s,jr,Kr,Jr,new ue)),r&&(jr.fromBufferAttribute(r,o),Kr.fromBufferAttribute(r,c),Jr.fromBufferAttribute(r,l),h.uv1=Gi.getInterpolation(Zr,bs,xs,_s,jr,Kr,Jr,new ue),h.uv2=h.uv1),a&&(Gh.fromBufferAttribute(a,o),Vh.fromBufferAttribute(a,c),Wh.fromBufferAttribute(a,l),h.normal=Gi.getInterpolation(Zr,bs,xs,_s,Gh,Vh,Wh,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new P,materialIndex:0};Gi.getNormal(bs,xs,_s,u.normal),h.face=u}return h}var Fn=class s extends qe{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new je(l,3)),this.setAttribute("normal",new je(h,3)),this.setAttribute("uv",new je(u,2));function g(b,m,p,_,x,y,R,w,C,O,v){let S=y/C,N=R/O,Y=y/2,V=R/2,A=w/2,L=C+1,D=O+1,W=0,F=0,B=new P;for(let j=0;j<D;j++){let J=j*N-V;for(let ne=0;ne<L;ne++){let q=ne*S-Y;B[b]=q*_,B[m]=J*x,B[p]=A,l.push(B.x,B.y,B.z),B[b]=0,B[m]=0,B[p]=w>0?1:-1,h.push(B.x,B.y,B.z),u.push(ne/C),u.push(1-j/O),W+=1}}for(let j=0;j<O;j++)for(let J=0;J<C;J++){let ne=d+J+L*j,q=d+J+L*(j+1),K=d+(J+1)+L*(j+1),re=d+(J+1)+L*j;c.push(ne,q,re),c.push(q,K,re),F+=6}o.addGroup(f,F,v),f+=F,d+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function ks(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Wt(s){let e={};for(let t=0;t<s.length;t++){let n=ks(s[t]);for(let i in n)e[i]=n[i]}return e}function Mp(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function ju(s){return s.getRenderTarget()===null?s.outputColorSpace:Ke.workingColorSpace}var Sp={clone:ks,merge:Wt},Ep=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Pt=class extends Dt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ep,this.fragmentShader=wp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ks(e.uniforms),this.uniformsGroups=Mp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Ta=class extends at{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Re,this.projectionMatrix=new Re,this.projectionMatrixInverse=new Re,this.coordinateSystem=Jn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},xt=class extends Ta{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Os*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ur*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Os*2*Math.atan(Math.tan(ur*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ur*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},vs=-90,ys=1,ac=class extends at{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new xt(vs,ys,e,t);i.layers=this.layers,this.add(i);let r=new xt(vs,ys,e,t);r.layers=this.layers,this.add(r);let a=new xt(vs,ys,e,t);a.layers=this.layers,this.add(a);let o=new xt(vs,ys,e,t);o.layers=this.layers,this.add(o);let c=new xt(vs,ys,e,t);c.layers=this.layers,this.add(c);let l=new xt(vs,ys,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===Jn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ba)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Aa=class extends Ct{constructor(e,t,n,i,r,a,o,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Ds,super(e,t,n,i,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},oc=class extends nn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(fr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Xi?$e:un),this.texture=new Aa(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:yt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Fn(5,5,5),r=new Pt({name:"CubemapFromEquirect",uniforms:ks(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:It,blending:pi});r.uniforms.tEquirect.value=t;let a=new Ze(i,r),o=t.minFilter;return t.minFilter===bi&&(t.minFilter=yt),new ac(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}},ko=new P,Tp=new P,Ap=new Ve,En=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=ko.subVectors(n,t).cross(Tp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(ko),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Ap.getNormalMatrix(e),i=this.coplanarPoint(ko).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Bi=new sn,ea=new P,br=class{constructor(e=new En,t=new En,n=new En,i=new En,r=new En,a=new En){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Jn){let n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],c=i[3],l=i[4],h=i[5],u=i[6],d=i[7],f=i[8],g=i[9],b=i[10],m=i[11],p=i[12],_=i[13],x=i[14],y=i[15];if(n[0].setComponents(c-r,d-l,m-f,y-p).normalize(),n[1].setComponents(c+r,d+l,m+f,y+p).normalize(),n[2].setComponents(c+a,d+h,m+g,y+_).normalize(),n[3].setComponents(c-a,d-h,m-g,y-_).normalize(),n[4].setComponents(c-o,d-u,m-b,y-x).normalize(),t===Jn)n[5].setComponents(c+o,d+u,m+b,y+x).normalize();else if(t===ba)n[5].setComponents(o,u,b,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Bi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Bi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Bi)}intersectsSprite(e){return Bi.center.set(0,0,0),Bi.radius=.7071067811865476,Bi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Bi)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(ea.x=i.normal.x>0?e.max.x:e.min.x,ea.y=i.normal.y>0?e.max.y:e.min.y,ea.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ea)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Ku(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Rp(s,e){let t=e.isWebGL2,n=new WeakMap;function i(l,h){let u=l.array,d=l.usage,f=u.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,u,d),l.onUploadCallback();let b;if(u instanceof Float32Array)b=s.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)b=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else b=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)b=s.SHORT;else if(u instanceof Uint32Array)b=s.UNSIGNED_INT;else if(u instanceof Int32Array)b=s.INT;else if(u instanceof Int8Array)b=s.BYTE;else if(u instanceof Uint8Array)b=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)b=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:b,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:f}}function r(l,h,u){let d=h.array,f=h._updateRange,g=h.updateRanges;if(s.bindBuffer(u,l),f.count===-1&&g.length===0&&s.bufferSubData(u,0,d),g.length!==0){for(let b=0,m=g.length;b<m;b++){let p=g[b];t?s.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):s.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}f.count!==-1&&(t?s.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):s.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);h&&(s.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=n.get(l);if(u===void 0)n.set(l,i(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:a,remove:o,update:c}}var ji=class s extends qe{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,u=e/o,d=t/c,f=[],g=[],b=[],m=[];for(let p=0;p<h;p++){let _=p*d-a;for(let x=0;x<l;x++){let y=x*u-r;g.push(y,-_,0),b.push(0,0,1),m.push(x/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let _=0;_<o;_++){let x=_+l*p,y=_+l*(p+1),R=_+1+l*(p+1),w=_+1+l*p;f.push(x,y,w),f.push(y,R,w)}this.setIndex(f),this.setAttribute("position",new je(g,3)),this.setAttribute("normal",new je(b,3)),this.setAttribute("uv",new je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},Cp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Pp=`#ifdef USE_ALPHAHASH
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
#endif`,Lp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ip=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Up=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Np=`#ifdef USE_AOMAP
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
#endif`,Fp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Op=`#ifdef USE_BATCHING
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
#endif`,Bp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,kp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Gp=`#ifdef USE_IRIDESCENCE
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
#endif`,Vp=`#ifdef USE_BUMPMAP
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
#endif`,Wp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Xp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Kp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Jp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Zp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Qp=`#define PI 3.141592653589793
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
} // validated`,$p=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,em=`vec3 transformedNormal = objectNormal;
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
#endif`,tm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,im=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rm="gl_FragColor = linearToOutputTexel( gl_FragColor );",am=`
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
}`,om=`#ifdef USE_ENVMAP
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
#endif`,cm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,lm=`#ifdef USE_ENVMAP
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
#endif`,hm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,um=`#ifdef USE_ENVMAP
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
#endif`,dm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gm=`#ifdef USE_GRADIENTMAP
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
}`,bm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,xm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_m=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ym=`uniform bool receiveShadow;
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
#endif`,Mm=`#ifdef USE_ENVMAP
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
#endif`,Sm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Em=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Tm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Am=`PhysicalMaterial material;
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
#endif`,Rm=`struct PhysicalMaterial {
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
}`,Cm=`
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
#endif`,Pm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Lm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Im=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Um=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Nm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Fm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Om=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,km=`#if defined( USE_POINTS_UV )
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
#endif`,zm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vm=`#ifdef USE_MORPHNORMALS
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
#endif`,Wm=`#ifdef USE_MORPHTARGETS
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
#endif`,Xm=`#ifdef USE_MORPHTARGETS
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
#endif`,qm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ym=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,jm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Km=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Zm=`#ifdef USE_NORMALMAP
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
#endif`,Qm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$m=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,eg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ng=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ig=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,sg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ag=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,og=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ug=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,fg=`float getShadowMask() {
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
}`,pg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mg=`#ifdef USE_SKINNING
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
#endif`,gg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bg=`#ifdef USE_SKINNING
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
#endif`,xg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_g=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mg=`#ifdef USE_TRANSMISSION
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
#endif`,Sg=`#ifdef USE_TRANSMISSION
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
#endif`,Eg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ag=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Rg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cg=`uniform sampler2D t2D;
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
}`,Pg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ig=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ug=`#include <common>
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
}`,Ng=`#if DEPTH_PACKING == 3200
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
}`,Fg=`#define DISTANCE
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
}`,Og=`#define DISTANCE
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
}`,Bg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zg=`uniform float scale;
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
}`,Hg=`uniform vec3 diffuse;
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
}`,Gg=`#include <common>
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
}`,Vg=`uniform vec3 diffuse;
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
}`,Wg=`#define LAMBERT
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
}`,Xg=`#define LAMBERT
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
}`,qg=`#define MATCAP
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
}`,Yg=`#define MATCAP
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
}`,jg=`#define NORMAL
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
}`,Kg=`#define NORMAL
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
}`,Jg=`#define PHONG
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
}`,Zg=`#define PHONG
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
}`,Qg=`#define STANDARD
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
}`,$g=`#define STANDARD
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
}`,e0=`#define TOON
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
}`,t0=`#define TOON
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
}`,n0=`uniform float size;
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
}`,i0=`uniform vec3 diffuse;
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
}`,s0=`#include <common>
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
}`,r0=`uniform vec3 color;
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
}`,a0=`uniform float rotation;
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
}`,o0=`uniform vec3 diffuse;
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
}`,Ae={alphahash_fragment:Cp,alphahash_pars_fragment:Pp,alphamap_fragment:Lp,alphamap_pars_fragment:Ip,alphatest_fragment:Dp,alphatest_pars_fragment:Up,aomap_fragment:Np,aomap_pars_fragment:Fp,batching_pars_vertex:Op,batching_vertex:Bp,begin_vertex:kp,beginnormal_vertex:zp,bsdfs:Hp,iridescence_fragment:Gp,bumpmap_pars_fragment:Vp,clipping_planes_fragment:Wp,clipping_planes_pars_fragment:Xp,clipping_planes_pars_vertex:qp,clipping_planes_vertex:Yp,color_fragment:jp,color_pars_fragment:Kp,color_pars_vertex:Jp,color_vertex:Zp,common:Qp,cube_uv_reflection_fragment:$p,defaultnormal_vertex:em,displacementmap_pars_vertex:tm,displacementmap_vertex:nm,emissivemap_fragment:im,emissivemap_pars_fragment:sm,colorspace_fragment:rm,colorspace_pars_fragment:am,envmap_fragment:om,envmap_common_pars_fragment:cm,envmap_pars_fragment:lm,envmap_pars_vertex:hm,envmap_physical_pars_fragment:Mm,envmap_vertex:um,fog_vertex:dm,fog_pars_vertex:fm,fog_fragment:pm,fog_pars_fragment:mm,gradientmap_pars_fragment:gm,lightmap_fragment:bm,lightmap_pars_fragment:xm,lights_lambert_fragment:_m,lights_lambert_pars_fragment:vm,lights_pars_begin:ym,lights_toon_fragment:Sm,lights_toon_pars_fragment:Em,lights_phong_fragment:wm,lights_phong_pars_fragment:Tm,lights_physical_fragment:Am,lights_physical_pars_fragment:Rm,lights_fragment_begin:Cm,lights_fragment_maps:Pm,lights_fragment_end:Lm,logdepthbuf_fragment:Im,logdepthbuf_pars_fragment:Dm,logdepthbuf_pars_vertex:Um,logdepthbuf_vertex:Nm,map_fragment:Fm,map_pars_fragment:Om,map_particle_fragment:Bm,map_particle_pars_fragment:km,metalnessmap_fragment:zm,metalnessmap_pars_fragment:Hm,morphcolor_vertex:Gm,morphnormal_vertex:Vm,morphtarget_pars_vertex:Wm,morphtarget_vertex:Xm,normal_fragment_begin:qm,normal_fragment_maps:Ym,normal_pars_fragment:jm,normal_pars_vertex:Km,normal_vertex:Jm,normalmap_pars_fragment:Zm,clearcoat_normal_fragment_begin:Qm,clearcoat_normal_fragment_maps:$m,clearcoat_pars_fragment:eg,iridescence_pars_fragment:tg,opaque_fragment:ng,packing:ig,premultiplied_alpha_fragment:sg,project_vertex:rg,dithering_fragment:ag,dithering_pars_fragment:og,roughnessmap_fragment:cg,roughnessmap_pars_fragment:lg,shadowmap_pars_fragment:hg,shadowmap_pars_vertex:ug,shadowmap_vertex:dg,shadowmask_pars_fragment:fg,skinbase_vertex:pg,skinning_pars_vertex:mg,skinning_vertex:gg,skinnormal_vertex:bg,specularmap_fragment:xg,specularmap_pars_fragment:_g,tonemapping_fragment:vg,tonemapping_pars_fragment:yg,transmission_fragment:Mg,transmission_pars_fragment:Sg,uv_pars_fragment:Eg,uv_pars_vertex:wg,uv_vertex:Tg,worldpos_vertex:Ag,background_vert:Rg,background_frag:Cg,backgroundCube_vert:Pg,backgroundCube_frag:Lg,cube_vert:Ig,cube_frag:Dg,depth_vert:Ug,depth_frag:Ng,distanceRGBA_vert:Fg,distanceRGBA_frag:Og,equirect_vert:Bg,equirect_frag:kg,linedashed_vert:zg,linedashed_frag:Hg,meshbasic_vert:Gg,meshbasic_frag:Vg,meshlambert_vert:Wg,meshlambert_frag:Xg,meshmatcap_vert:qg,meshmatcap_frag:Yg,meshnormal_vert:jg,meshnormal_frag:Kg,meshphong_vert:Jg,meshphong_frag:Zg,meshphysical_vert:Qg,meshphysical_frag:$g,meshtoon_vert:e0,meshtoon_frag:t0,points_vert:n0,points_frag:i0,shadow_vert:s0,shadow_frag:r0,sprite_vert:a0,sprite_frag:o0},se={common:{diffuse:{value:new Z(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Z(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Z(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Z(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},Ln={basic:{uniforms:Wt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Ae.meshbasic_vert,fragmentShader:Ae.meshbasic_frag},lambert:{uniforms:Wt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Z(0)}}]),vertexShader:Ae.meshlambert_vert,fragmentShader:Ae.meshlambert_frag},phong:{uniforms:Wt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Z(0)},specular:{value:new Z(1118481)},shininess:{value:30}}]),vertexShader:Ae.meshphong_vert,fragmentShader:Ae.meshphong_frag},standard:{uniforms:Wt([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new Z(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ae.meshphysical_vert,fragmentShader:Ae.meshphysical_frag},toon:{uniforms:Wt([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new Z(0)}}]),vertexShader:Ae.meshtoon_vert,fragmentShader:Ae.meshtoon_frag},matcap:{uniforms:Wt([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Ae.meshmatcap_vert,fragmentShader:Ae.meshmatcap_frag},points:{uniforms:Wt([se.points,se.fog]),vertexShader:Ae.points_vert,fragmentShader:Ae.points_frag},dashed:{uniforms:Wt([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ae.linedashed_vert,fragmentShader:Ae.linedashed_frag},depth:{uniforms:Wt([se.common,se.displacementmap]),vertexShader:Ae.depth_vert,fragmentShader:Ae.depth_frag},normal:{uniforms:Wt([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Ae.meshnormal_vert,fragmentShader:Ae.meshnormal_frag},sprite:{uniforms:Wt([se.sprite,se.fog]),vertexShader:Ae.sprite_vert,fragmentShader:Ae.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ae.background_vert,fragmentShader:Ae.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ae.backgroundCube_vert,fragmentShader:Ae.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ae.cube_vert,fragmentShader:Ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ae.equirect_vert,fragmentShader:Ae.equirect_frag},distanceRGBA:{uniforms:Wt([se.common,se.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ae.distanceRGBA_vert,fragmentShader:Ae.distanceRGBA_frag},shadow:{uniforms:Wt([se.lights,se.fog,{color:{value:new Z(0)},opacity:{value:1}}]),vertexShader:Ae.shadow_vert,fragmentShader:Ae.shadow_frag}};Ln.physical={uniforms:Wt([Ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Z(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Z(0)},specularColor:{value:new Z(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Ae.meshphysical_vert,fragmentShader:Ae.meshphysical_frag};var ta={r:0,b:0,g:0};function c0(s,e,t,n,i,r,a){let o=new Z(0),c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(m,p){let _=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?t:e).get(x)),x===null?b(o,c):x&&x.isColor&&(b(x,1),_=!0);let y=s.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,a):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||_)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Ha)?(h===void 0&&(h=new Ze(new Fn(1,1,1),new Pt({name:"BackgroundCubeMaterial",uniforms:ks(Ln.backgroundCube.uniforms),vertexShader:Ln.backgroundCube.vertexShader,fragmentShader:Ln.backgroundCube.fragmentShader,side:It,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=Ke.getTransfer(x.colorSpace)!==ot,(u!==x||d!==x.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=s.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Ze(new ji(2,2),new Pt({name:"BackgroundMaterial",uniforms:ks(Ln.background.uniforms),vertexShader:Ln.background.vertexShader,fragmentShader:Ln.background.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=Ke.getTransfer(x.colorSpace)!==ot,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,f=s.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function b(m,p){m.getRGB(ta,ju(s)),n.buffers.color.setClear(ta.r,ta.g,ta.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),c=p,b(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,b(o,c)},render:g}}function l0(s,e,t,n){let i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},c=m(null),l=c,h=!1;function u(A,L,D,W,F){let B=!1;if(a){let j=b(W,D,L);l!==j&&(l=j,f(l.object)),B=p(A,W,D,F),B&&_(A,W,D,F)}else{let j=L.wireframe===!0;(l.geometry!==W.id||l.program!==D.id||l.wireframe!==j)&&(l.geometry=W.id,l.program=D.id,l.wireframe=j,B=!0)}F!==null&&t.update(F,s.ELEMENT_ARRAY_BUFFER),(B||h)&&(h=!1,O(A,L,D,W),F!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function d(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function f(A){return n.isWebGL2?s.bindVertexArray(A):r.bindVertexArrayOES(A)}function g(A){return n.isWebGL2?s.deleteVertexArray(A):r.deleteVertexArrayOES(A)}function b(A,L,D){let W=D.wireframe===!0,F=o[A.id];F===void 0&&(F={},o[A.id]=F);let B=F[L.id];B===void 0&&(B={},F[L.id]=B);let j=B[W];return j===void 0&&(j=m(d()),B[W]=j),j}function m(A){let L=[],D=[],W=[];for(let F=0;F<i;F++)L[F]=0,D[F]=0,W[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:D,attributeDivisors:W,object:A,attributes:{},index:null}}function p(A,L,D,W){let F=l.attributes,B=L.attributes,j=0,J=D.getAttributes();for(let ne in J)if(J[ne].location>=0){let K=F[ne],re=B[ne];if(re===void 0&&(ne==="instanceMatrix"&&A.instanceMatrix&&(re=A.instanceMatrix),ne==="instanceColor"&&A.instanceColor&&(re=A.instanceColor)),K===void 0||K.attribute!==re||re&&K.data!==re.data)return!0;j++}return l.attributesNum!==j||l.index!==W}function _(A,L,D,W){let F={},B=L.attributes,j=0,J=D.getAttributes();for(let ne in J)if(J[ne].location>=0){let K=B[ne];K===void 0&&(ne==="instanceMatrix"&&A.instanceMatrix&&(K=A.instanceMatrix),ne==="instanceColor"&&A.instanceColor&&(K=A.instanceColor));let re={};re.attribute=K,K&&K.data&&(re.data=K.data),F[ne]=re,j++}l.attributes=F,l.attributesNum=j,l.index=W}function x(){let A=l.newAttributes;for(let L=0,D=A.length;L<D;L++)A[L]=0}function y(A){R(A,0)}function R(A,L){let D=l.newAttributes,W=l.enabledAttributes,F=l.attributeDivisors;D[A]=1,W[A]===0&&(s.enableVertexAttribArray(A),W[A]=1),F[A]!==L&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](A,L),F[A]=L)}function w(){let A=l.newAttributes,L=l.enabledAttributes;for(let D=0,W=L.length;D<W;D++)L[D]!==A[D]&&(s.disableVertexAttribArray(D),L[D]=0)}function C(A,L,D,W,F,B,j){j===!0?s.vertexAttribIPointer(A,L,D,F,B):s.vertexAttribPointer(A,L,D,W,F,B)}function O(A,L,D,W){if(n.isWebGL2===!1&&(A.isInstancedMesh||W.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();let F=W.attributes,B=D.getAttributes(),j=L.defaultAttributeValues;for(let J in B){let ne=B[J];if(ne.location>=0){let q=F[J];if(q===void 0&&(J==="instanceMatrix"&&A.instanceMatrix&&(q=A.instanceMatrix),J==="instanceColor"&&A.instanceColor&&(q=A.instanceColor)),q!==void 0){let K=q.normalized,re=q.itemSize,xe=t.get(q);if(xe===void 0)continue;let be=xe.buffer,De=xe.type,Ne=xe.bytesPerElement,we=n.isWebGL2===!0&&(De===s.INT||De===s.UNSIGNED_INT||q.gpuType===Nu);if(q.isInterleavedBufferAttribute){let Ye=q.data,k=Ye.stride,zt=q.offset;if(Ye.isInstancedInterleavedBuffer){for(let ye=0;ye<ne.locationSize;ye++)R(ne.location+ye,Ye.meshPerAttribute);A.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=Ye.meshPerAttribute*Ye.count)}else for(let ye=0;ye<ne.locationSize;ye++)y(ne.location+ye);s.bindBuffer(s.ARRAY_BUFFER,be);for(let ye=0;ye<ne.locationSize;ye++)C(ne.location+ye,re/ne.locationSize,De,K,k*Ne,(zt+re/ne.locationSize*ye)*Ne,we)}else{if(q.isInstancedBufferAttribute){for(let Ye=0;Ye<ne.locationSize;Ye++)R(ne.location+Ye,q.meshPerAttribute);A.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let Ye=0;Ye<ne.locationSize;Ye++)y(ne.location+Ye);s.bindBuffer(s.ARRAY_BUFFER,be);for(let Ye=0;Ye<ne.locationSize;Ye++)C(ne.location+Ye,re/ne.locationSize,De,K,re*Ne,re/ne.locationSize*Ye*Ne,we)}}else if(j!==void 0){let K=j[J];if(K!==void 0)switch(K.length){case 2:s.vertexAttrib2fv(ne.location,K);break;case 3:s.vertexAttrib3fv(ne.location,K);break;case 4:s.vertexAttrib4fv(ne.location,K);break;default:s.vertexAttrib1fv(ne.location,K)}}}}w()}function v(){Y();for(let A in o){let L=o[A];for(let D in L){let W=L[D];for(let F in W)g(W[F].object),delete W[F];delete L[D]}delete o[A]}}function S(A){if(o[A.id]===void 0)return;let L=o[A.id];for(let D in L){let W=L[D];for(let F in W)g(W[F].object),delete W[F];delete L[D]}delete o[A.id]}function N(A){for(let L in o){let D=o[L];if(D[A.id]===void 0)continue;let W=D[A.id];for(let F in W)g(W[F].object),delete W[F];delete D[A.id]}}function Y(){V(),h=!0,l!==c&&(l=c,f(l.object))}function V(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:Y,resetDefaultState:V,dispose:v,releaseStatesOfGeometry:S,releaseStatesOfProgram:N,initAttributes:x,enableAttribute:y,disableUnusedAttributes:w}}function h0(s,e,t,n){let i=n.isWebGL2,r;function a(h){r=h}function o(h,u){s.drawArrays(r,h,u),t.update(u,r,1)}function c(h,u,d){if(d===0)return;let f,g;if(i)f=s,g="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](r,h,u,d),t.update(u,r,d)}function l(h,u,d){if(d===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{f.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let b=0;b<d;b++)g+=u[b];t.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=l}function u0(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext",o=t.precision!==void 0?t.precision:"highp",c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);let l=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),b=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),p=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,y=a||e.has("OES_texture_float"),R=x&&y,w=a?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:b,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:_,vertexTextures:x,floatFragmentTextures:y,floatVertexTextures:R,maxSamples:w}}function d0(s){let e=this,t=null,n=0,i=!1,r=!1,a=new En,o=new Ve,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,b=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):l();else{let _=r?0:n,x=_*4,y=p.clippingState||null;c.value=y,y=h(g,d,x,f);for(let R=0;R!==x;++R)y[R]=t[R];p.clippingState=y,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){let b=u!==null?u.length:0,m=null;if(b!==0){if(m=c.value,g!==!0||m===null){let p=f+b*4,_=d.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,y=f;x!==b;++x,y+=4)a.copy(u[x]).applyMatrix4(_,o),a.normal.toArray(m,y),m[y+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,m}}function f0(s){let e=new WeakMap;function t(a,o){return o===$o?a.mapping=Ds:o===ec&&(a.mapping=Us),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===$o||o===ec)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new oc(c.height/2);return l.fromEquirectangularTexture(s,a),e.set(a,l),a.addEventListener("dispose",i),t(l.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var _i=class extends Ta{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Rs=4,Xh=[.125,.215,.35,.446,.526,.582],Hi=20,zo=new _i,qh=new Z,Ho=null,Go=0,Vo=0,ki=(1+Math.sqrt(5))/2,Ms=1/ki,Yh=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,ki,Ms),new P(0,ki,-Ms),new P(Ms,0,ki),new P(-Ms,0,ki),new P(ki,Ms,0),new P(-ki,Ms,0)],zs=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ho=this._renderer.getRenderTarget(),Go=this._renderer.getActiveCubeFace(),Vo=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ho,Go,Vo),e.scissorTest=!1,na(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ds||e.mapping===Us?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ho=this._renderer.getRenderTarget(),Go=this._renderer.getActiveCubeFace(),Vo=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:yt,minFilter:yt,generateMipmaps:!1,type:qi,format:hn,colorSpace:Mt,depthBuffer:!1},i=jh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jh(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=p0(r)),this._blurMaterial=m0(r,e,t)}return i}_compileMaterial(e){let t=new Ze(this._lodPlanes[0],e);this._renderer.compile(t,zo)}_sceneToCubeUV(e,t,n,i){let o=new xt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(qh),h.toneMapping=mi,h.autoClear=!1;let f=new Yt({name:"PMREM.Background",side:It,depthWrite:!1,depthTest:!1}),g=new Ze(new Fn,f),b=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,b=!0):(f.color.copy(qh),b=!0);for(let p=0;p<6;p++){let _=p%3;_===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):_===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));let x=this._cubeSize;na(i,_*x,p>2?x:0,x,x),h.setRenderTarget(i),b&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Ds||e.mapping===Us;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kh());let r=i?this._cubemapMaterial:this._equirectMaterial,a=new Ze(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;na(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,zo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Yh[(i-1)%Yh.length];this._blur(e,i-1,i,r,a)}t.autoClear=n}_blur(e,t,n,i,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Ze(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Hi-1),b=r/g,m=isFinite(r)?1+Math.floor(h*b):Hi;m>Hi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Hi}`);let p=[],_=0;for(let C=0;C<Hi;++C){let O=C/b,v=Math.exp(-O*O/2);p.push(v),C===0?_+=v:C<m&&(_+=2*v)}for(let C=0;C<p.length;C++)p[C]=p[C]/_;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;let y=this._sizeLods[i],R=3*y*(i>x-Rs?i-x+Rs:0),w=4*(this._cubeSize-y);na(t,R,w,3*y,2*y),c.setRenderTarget(t),c.render(u,zo)}};function p0(s){let e=[],t=[],n=[],i=s,r=s-Rs+1+Xh.length;for(let a=0;a<r;a++){let o=Math.pow(2,i);t.push(o);let c=1/o;a>s-Rs?c=Xh[a-s+Rs-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,b=3,m=2,p=1,_=new Float32Array(b*g*f),x=new Float32Array(m*g*f),y=new Float32Array(p*g*f);for(let w=0;w<f;w++){let C=w%3*2/3-1,O=w>2?0:-1,v=[C,O,0,C+2/3,O,0,C+2/3,O+1,0,C,O,0,C+2/3,O+1,0,C,O+1,0];_.set(v,b*g*w),x.set(d,m*g*w);let S=[w,w,w,w,w,w];y.set(S,p*g*w)}let R=new qe;R.setAttribute("position",new ze(_,b)),R.setAttribute("uv",new ze(x,m)),R.setAttribute("faceIndex",new ze(y,p)),e.push(R),i>Rs&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function jh(s,e,t){let n=new nn(s,e,t);return n.texture.mapping=Ha,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function na(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function m0(s,e,t){let n=new Float32Array(Hi),i=new P(0,1,0);return new Pt({name:"SphericalGaussianBlur",defines:{n:Hi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:zc(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Kh(){return new Pt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zc(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Jh(){return new Pt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function zc(){return`

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
	`}function g0(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===$o||c===ec,h=c===Ds||c===Us;if(l||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=e.get(o);return t===null&&(t=new zs(s)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),e.set(o,u),u.texture}else{if(e.has(o))return e.get(o).texture;{let u=o.image;if(l&&u&&u.height>0||h&&u&&i(u)){t===null&&(t=new zs(s));let d=l?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function i(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function b0(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function x0(s,e,t,n){let i={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let b=d.morphAttributes[g];for(let m=0,p=b.length;m<p;m++)e.remove(b[m])}d.removeEventListener("dispose",a),delete i[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let g in d)e.update(d[g],s.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let b=f[g];for(let m=0,p=b.length;m<p;m++)e.update(b[m],s.ARRAY_BUFFER)}}function l(u){let d=[],f=u.index,g=u.attributes.position,b=0;if(f!==null){let _=f.array;b=f.version;for(let x=0,y=_.length;x<y;x+=3){let R=_[x+0],w=_[x+1],C=_[x+2];d.push(R,w,w,C,C,R)}}else if(g!==void 0){let _=g.array;b=g.version;for(let x=0,y=_.length/3-1;x<y;x+=3){let R=x+0,w=x+1,C=x+2;d.push(R,w,w,C,C,R)}}else return;let m=new(qu(d)?wa:Ea)(d,1);m.version=b;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function _0(s,e,t,n){let i=n.isWebGL2,r;function a(f){r=f}let o,c;function l(f){o=f.type,c=f.bytesPerElement}function h(f,g){s.drawElements(r,g,o,f*c),t.update(g,r,1)}function u(f,g,b){if(b===0)return;let m,p;if(i)m=s,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,o,f*c,b),t.update(g,r,b)}function d(f,g,b){if(b===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<b;p++)this.render(f[p]/c,g[p]);else{m.multiDrawElementsWEBGL(r,g,0,o,f,0,b);let p=0;for(let _=0;_<b;_++)p+=g[_];t.update(p,r,1)}}this.setMode=a,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function v0(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function y0(s,e){return s[0]-e[0]}function M0(s,e){return Math.abs(e[1])-Math.abs(s[1])}function S0(s,e,t){let n={},i=new Float32Array(8),r=new WeakMap,a=new Je,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,h,u){let d=l.morphTargetInfluences;if(e.isWebGL2===!0){let f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=f!==void 0?f.length:0,b=r.get(h);if(b===void 0||b.count!==g){let A=function(){Y.dispose(),r.delete(h),h.removeEventListener("dispose",A)};b!==void 0&&b.texture.dispose();let _=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,R=h.morphAttributes.position||[],w=h.morphAttributes.normal||[],C=h.morphAttributes.color||[],O=0;_===!0&&(O=1),x===!0&&(O=2),y===!0&&(O=3);let v=h.attributes.position.count*O,S=1;v>e.maxTextureSize&&(S=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let N=new Float32Array(v*S*4*g),Y=new ya(N,v,S,g);Y.type=Kn,Y.needsUpdate=!0;let V=O*4;for(let L=0;L<g;L++){let D=R[L],W=w[L],F=C[L],B=v*S*4*L;for(let j=0;j<D.count;j++){let J=j*V;_===!0&&(a.fromBufferAttribute(D,j),N[B+J+0]=a.x,N[B+J+1]=a.y,N[B+J+2]=a.z,N[B+J+3]=0),x===!0&&(a.fromBufferAttribute(W,j),N[B+J+4]=a.x,N[B+J+5]=a.y,N[B+J+6]=a.z,N[B+J+7]=0),y===!0&&(a.fromBufferAttribute(F,j),N[B+J+8]=a.x,N[B+J+9]=a.y,N[B+J+10]=a.z,N[B+J+11]=F.itemSize===4?a.w:1)}}b={count:g,texture:Y,size:new ue(v,S)},r.set(h,b),h.addEventListener("dispose",A)}let m=0;for(let _=0;_<d.length;_++)m+=d[_];let p=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(s,"morphTargetBaseInfluence",p),u.getUniforms().setValue(s,"morphTargetInfluences",d),u.getUniforms().setValue(s,"morphTargetsTexture",b.texture,t),u.getUniforms().setValue(s,"morphTargetsTextureSize",b.size)}else{let f=d===void 0?0:d.length,g=n[h.id];if(g===void 0||g.length!==f){g=[];for(let x=0;x<f;x++)g[x]=[x,0];n[h.id]=g}for(let x=0;x<f;x++){let y=g[x];y[0]=x,y[1]=d[x]}g.sort(M0);for(let x=0;x<8;x++)x<f&&g[x][1]?(o[x][0]=g[x][0],o[x][1]=g[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(y0);let b=h.morphAttributes.position,m=h.morphAttributes.normal,p=0;for(let x=0;x<8;x++){let y=o[x],R=y[0],w=y[1];R!==Number.MAX_SAFE_INTEGER&&w?(b&&h.getAttribute("morphTarget"+x)!==b[R]&&h.setAttribute("morphTarget"+x,b[R]),m&&h.getAttribute("morphNormal"+x)!==m[R]&&h.setAttribute("morphNormal"+x,m[R]),i[x]=w,p+=w):(b&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),m&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),i[x]=0)}let _=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(s,"morphTargetBaseInfluence",_),u.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function E0(s,e,t,n){let i=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=e.get(c,h);if(i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function a(){i=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}var Ra=class extends Ct{constructor(e,t,n,i,r,a,o,c,l,h){if(h=h!==void 0?h:Wi,h!==Wi&&h!==Ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Wi&&(n=di),n===void 0&&h===Ns&&(n=Vi),super(null,i,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:bt,this.minFilter=c!==void 0?c:bt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ju=new Ct,Zu=new Ra(1,1);Zu.compareFunction=Wu;var Qu=new ya,$u=new rc,ed=new Aa,Zh=[],Qh=[],$h=new Float32Array(16),eu=new Float32Array(9),tu=new Float32Array(4);function qs(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=Zh[i];if(r===void 0&&(r=new Float32Array(i),Zh[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function St(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Et(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Wa(s,e){let t=Qh[e];t===void 0&&(t=new Int32Array(e),Qh[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function w0(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function T0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;s.uniform2fv(this.addr,e),Et(t,e)}}function A0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(St(t,e))return;s.uniform3fv(this.addr,e),Et(t,e)}}function R0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;s.uniform4fv(this.addr,e),Et(t,e)}}function C0(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Et(t,e)}else{if(St(t,n))return;tu.set(n),s.uniformMatrix2fv(this.addr,!1,tu),Et(t,n)}}function P0(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Et(t,e)}else{if(St(t,n))return;eu.set(n),s.uniformMatrix3fv(this.addr,!1,eu),Et(t,n)}}function L0(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Et(t,e)}else{if(St(t,n))return;$h.set(n),s.uniformMatrix4fv(this.addr,!1,$h),Et(t,n)}}function I0(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function D0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;s.uniform2iv(this.addr,e),Et(t,e)}}function U0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;s.uniform3iv(this.addr,e),Et(t,e)}}function N0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;s.uniform4iv(this.addr,e),Et(t,e)}}function F0(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function O0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;s.uniform2uiv(this.addr,e),Et(t,e)}}function B0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;s.uniform3uiv(this.addr,e),Et(t,e)}}function k0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;s.uniform4uiv(this.addr,e),Et(t,e)}}function z0(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r=this.type===s.SAMPLER_2D_SHADOW?Zu:Ju;t.setTexture2D(e||r,i)}function H0(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||$u,i)}function G0(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||ed,i)}function V0(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Qu,i)}function W0(s){switch(s){case 5126:return w0;case 35664:return T0;case 35665:return A0;case 35666:return R0;case 35674:return C0;case 35675:return P0;case 35676:return L0;case 5124:case 35670:return I0;case 35667:case 35671:return D0;case 35668:case 35672:return U0;case 35669:case 35673:return N0;case 5125:return F0;case 36294:return O0;case 36295:return B0;case 36296:return k0;case 35678:case 36198:case 36298:case 36306:case 35682:return z0;case 35679:case 36299:case 36307:return H0;case 35680:case 36300:case 36308:case 36293:return G0;case 36289:case 36303:case 36311:case 36292:return V0}}function X0(s,e){s.uniform1fv(this.addr,e)}function q0(s,e){let t=qs(e,this.size,2);s.uniform2fv(this.addr,t)}function Y0(s,e){let t=qs(e,this.size,3);s.uniform3fv(this.addr,t)}function j0(s,e){let t=qs(e,this.size,4);s.uniform4fv(this.addr,t)}function K0(s,e){let t=qs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function J0(s,e){let t=qs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Z0(s,e){let t=qs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Q0(s,e){s.uniform1iv(this.addr,e)}function $0(s,e){s.uniform2iv(this.addr,e)}function eb(s,e){s.uniform3iv(this.addr,e)}function tb(s,e){s.uniform4iv(this.addr,e)}function nb(s,e){s.uniform1uiv(this.addr,e)}function ib(s,e){s.uniform2uiv(this.addr,e)}function sb(s,e){s.uniform3uiv(this.addr,e)}function rb(s,e){s.uniform4uiv(this.addr,e)}function ab(s,e,t){let n=this.cache,i=e.length,r=Wa(t,i);St(n,r)||(s.uniform1iv(this.addr,r),Et(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Ju,r[a])}function ob(s,e,t){let n=this.cache,i=e.length,r=Wa(t,i);St(n,r)||(s.uniform1iv(this.addr,r),Et(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||$u,r[a])}function cb(s,e,t){let n=this.cache,i=e.length,r=Wa(t,i);St(n,r)||(s.uniform1iv(this.addr,r),Et(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||ed,r[a])}function lb(s,e,t){let n=this.cache,i=e.length,r=Wa(t,i);St(n,r)||(s.uniform1iv(this.addr,r),Et(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Qu,r[a])}function hb(s){switch(s){case 5126:return X0;case 35664:return q0;case 35665:return Y0;case 35666:return j0;case 35674:return K0;case 35675:return J0;case 35676:return Z0;case 5124:case 35670:return Q0;case 35667:case 35671:return $0;case 35668:case 35672:return eb;case 35669:case 35673:return tb;case 5125:return nb;case 36294:return ib;case 36295:return sb;case 36296:return rb;case 35678:case 36198:case 36298:case 36306:case 35682:return ab;case 35679:case 36299:case 36307:return ob;case 35680:case 36300:case 36308:case 36293:return cb;case 36289:case 36303:case 36311:case 36292:return lb}}var cc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=W0(t.type)}},lc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=hb(t.type)}},hc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(e,t[o.id],n)}}},Wo=/(\w+)(\])?(\[|\.)?/g;function nu(s,e){s.seq.push(e),s.map[e.id]=e}function ub(s,e,t){let n=s.name,i=n.length;for(Wo.lastIndex=0;;){let r=Wo.exec(n),a=Wo.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){nu(t,l===void 0?new cc(o,s,e):new lc(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new hc(o),nu(t,u)),t=u}}}var Is=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);ub(r,a,this)}}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function iu(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var db=37297,fb=0;function pb(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function mb(s){let e=Ke.getPrimaries(Ke.workingColorSpace),t=Ke.getPrimaries(s),n;switch(e===t?n="":e===ga&&t===ma?n="LinearDisplayP3ToLinearSRGB":e===ma&&t===ga&&(n="LinearSRGBToLinearDisplayP3"),s){case Mt:case Va:return[n,"LinearTransferOETF"];case $e:case Bc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function su(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+pb(s.getShaderSource(e),a)}else return i}function gb(s,e){let t=mb(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function bb(s,e){let t;switch(e){case Mf:t="Linear";break;case Sf:t="Reinhard";break;case Ef:t="OptimizedCineon";break;case Uc:t="ACESFilmic";break;case Tf:t="AgX";break;case wf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function xb(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Cs).join(`
`)}function _b(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Cs).join(`
`)}function vb(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function yb(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Cs(s){return s!==""}function ru(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function au(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Mb=/^[ \t]*#include +<([\w\d./]+)>/gm;function uc(s){return s.replace(Mb,Eb)}var Sb=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Eb(s,e){let t=Ae[e];if(t===void 0){let n=Sb.get(e);if(n!==void 0)t=Ae[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return uc(t)}var wb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ou(s){return s.replace(wb,Tb)}function Tb(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function cu(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ab(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Du?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Ic?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===jn&&(e="SHADOWMAP_TYPE_VSM"),e}function Rb(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ds:case Us:e="ENVMAP_TYPE_CUBE";break;case Ha:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Cb(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Us:e="ENVMAP_MODE_REFRACTION";break}return e}function Pb(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Dc:e="ENVMAP_BLENDING_MULTIPLY";break;case vf:e="ENVMAP_BLENDING_MIX";break;case yf:e="ENVMAP_BLENDING_ADD";break}return e}function Lb(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Ib(s,e,t,n){let i=s.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=Ab(t),l=Rb(t),h=Cb(t),u=Pb(t),d=Lb(t),f=t.isWebGL2?"":xb(t),g=_b(t),b=vb(r),m=i.createProgram(),p,_,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(Cs).join(`
`),p.length>0&&(p+=`
`),_=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(Cs).join(`
`),_.length>0&&(_+=`
`)):(p=[cu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cs).join(`
`),_=[f,cu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==mi?"#define TONE_MAPPING":"",t.toneMapping!==mi?Ae.tonemapping_pars_fragment:"",t.toneMapping!==mi?bb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ae.colorspace_pars_fragment,gb("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Cs).join(`
`)),a=uc(a),a=ru(a,t),a=au(a,t),o=uc(o),o=ru(o,t),o=au(o,t),a=ou(a),o=ou(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,_=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Ah?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ah?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let y=x+p+a,R=x+_+o,w=iu(i,i.VERTEX_SHADER,y),C=iu(i,i.FRAGMENT_SHADER,R);i.attachShader(m,w),i.attachShader(m,C),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function O(Y){if(s.debug.checkShaderErrors){let V=i.getProgramInfoLog(m).trim(),A=i.getShaderInfoLog(w).trim(),L=i.getShaderInfoLog(C).trim(),D=!0,W=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(D=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,w,C);else{let F=su(i,w,"vertex"),B=su(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+V+`
`+F+`
`+B)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(A===""||L==="")&&(W=!1);W&&(Y.diagnostics={runnable:D,programLog:V,vertexShader:{log:A,prefix:p},fragmentShader:{log:L,prefix:_}})}i.deleteShader(w),i.deleteShader(C),v=new Is(i,m),S=yb(i,m)}let v;this.getUniforms=function(){return v===void 0&&O(this),v};let S;this.getAttributes=function(){return S===void 0&&O(this),S};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=i.getProgramParameter(m,db)),N},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=fb++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=w,this.fragmentShader=C,this}var Db=0,dc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new fc(e),t.set(e,n)),n}},fc=class{constructor(e){this.id=Db++,this.code=e,this.usedTimes=0}};function Ub(s,e,t,n,i,r,a){let o=new Sa,c=new dc,l=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,d=i.vertexTextures,f=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(v){return v===0?"uv":`uv${v}`}function m(v,S,N,Y,V){let A=Y.fog,L=V.geometry,D=v.isMeshStandardMaterial?Y.environment:null,W=(v.isMeshStandardMaterial?t:e).get(v.envMap||D),F=W&&W.mapping===Ha?W.image.height:null,B=g[v.type];v.precision!==null&&(f=i.getMaxPrecision(v.precision),f!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));let j=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,J=j!==void 0?j.length:0,ne=0;L.morphAttributes.position!==void 0&&(ne=1),L.morphAttributes.normal!==void 0&&(ne=2),L.morphAttributes.color!==void 0&&(ne=3);let q,K,re,xe;if(B){let Ht=Ln[B];q=Ht.vertexShader,K=Ht.fragmentShader}else q=v.vertexShader,K=v.fragmentShader,c.update(v),re=c.getVertexShaderID(v),xe=c.getFragmentShaderID(v);let be=s.getRenderTarget(),De=V.isInstancedMesh===!0,Ne=V.isBatchedMesh===!0,we=!!v.map,Ye=!!v.matcap,k=!!W,zt=!!v.aoMap,ye=!!v.lightMap,Le=!!v.bumpMap,pe=!!v.normalMap,ct=!!v.displacementMap,Oe=!!v.emissiveMap,T=!!v.metalnessMap,M=!!v.roughnessMap,H=v.anisotropy>0,ee=v.clearcoat>0,$=v.iridescence>0,te=v.sheen>0,me=v.transmission>0,ce=H&&!!v.anisotropyMap,de=ee&&!!v.clearcoatMap,Ee=ee&&!!v.clearcoatNormalMap,Be=ee&&!!v.clearcoatRoughnessMap,Q=$&&!!v.iridescenceMap,et=$&&!!v.iridescenceThicknessMap,We=te&&!!v.sheenColorMap,Pe=te&&!!v.sheenRoughnessMap,ve=!!v.specularMap,fe=!!v.specularColorMap,Fe=!!v.specularIntensityMap,Qe=me&&!!v.transmissionMap,dt=me&&!!v.thicknessMap,He=!!v.gradientMap,ie=!!v.alphaMap,I=v.alphaTest>0,ae=!!v.alphaHash,oe=!!v.extensions,Te=!!L.attributes.uv1,Me=!!L.attributes.uv2,nt=!!L.attributes.uv3,it=mi;return v.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(it=s.toneMapping),{isWebGL2:h,shaderID:B,shaderType:v.type,shaderName:v.name,vertexShader:q,fragmentShader:K,defines:v.defines,customVertexShaderID:re,customFragmentShaderID:xe,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:Ne,instancing:De,instancingColor:De&&V.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:be===null?s.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:Mt,map:we,matcap:Ye,envMap:k,envMapMode:k&&W.mapping,envMapCubeUVHeight:F,aoMap:zt,lightMap:ye,bumpMap:Le,normalMap:pe,displacementMap:d&&ct,emissiveMap:Oe,normalMapObjectSpace:pe&&v.normalMapType===kf,normalMapTangentSpace:pe&&v.normalMapType===Oc,metalnessMap:T,roughnessMap:M,anisotropy:H,anisotropyMap:ce,clearcoat:ee,clearcoatMap:de,clearcoatNormalMap:Ee,clearcoatRoughnessMap:Be,iridescence:$,iridescenceMap:Q,iridescenceThicknessMap:et,sheen:te,sheenColorMap:We,sheenRoughnessMap:Pe,specularMap:ve,specularColorMap:fe,specularIntensityMap:Fe,transmission:me,transmissionMap:Qe,thicknessMap:dt,gradientMap:He,opaque:v.transparent===!1&&v.blending===Ps,alphaMap:ie,alphaTest:I,alphaHash:ae,combine:v.combine,mapUv:we&&b(v.map.channel),aoMapUv:zt&&b(v.aoMap.channel),lightMapUv:ye&&b(v.lightMap.channel),bumpMapUv:Le&&b(v.bumpMap.channel),normalMapUv:pe&&b(v.normalMap.channel),displacementMapUv:ct&&b(v.displacementMap.channel),emissiveMapUv:Oe&&b(v.emissiveMap.channel),metalnessMapUv:T&&b(v.metalnessMap.channel),roughnessMapUv:M&&b(v.roughnessMap.channel),anisotropyMapUv:ce&&b(v.anisotropyMap.channel),clearcoatMapUv:de&&b(v.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&b(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Be&&b(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&b(v.iridescenceMap.channel),iridescenceThicknessMapUv:et&&b(v.iridescenceThicknessMap.channel),sheenColorMapUv:We&&b(v.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&b(v.sheenRoughnessMap.channel),specularMapUv:ve&&b(v.specularMap.channel),specularColorMapUv:fe&&b(v.specularColorMap.channel),specularIntensityMapUv:Fe&&b(v.specularIntensityMap.channel),transmissionMapUv:Qe&&b(v.transmissionMap.channel),thicknessMapUv:dt&&b(v.thicknessMap.channel),alphaMapUv:ie&&b(v.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(pe||H),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,vertexUv1s:Te,vertexUv2s:Me,vertexUv3s:nt,pointsUvs:V.isPoints===!0&&!!L.attributes.uv&&(we||ie),fog:!!A,useFog:v.fog===!0,fogExp2:A&&A.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:V.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:ne,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&N.length>0,shadowMapType:s.shadowMap.type,toneMapping:it,useLegacyLights:s._useLegacyLights,decodeVideoTexture:we&&v.map.isVideoTexture===!0&&Ke.getTransfer(v.map.colorSpace)===ot,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===pt,flipSided:v.side===It,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:oe&&v.extensions.derivatives===!0,extensionFragDepth:oe&&v.extensions.fragDepth===!0,extensionDrawBuffers:oe&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:oe&&v.extensions.shaderTextureLOD===!0,extensionClipCullDistance:oe&&v.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()}}function p(v){let S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(let N in v.defines)S.push(N),S.push(v.defines[N]);return v.isRawShaderMaterial===!1&&(_(S,v),x(S,v),S.push(s.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function _(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapCubeUVHeight),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.morphAttributeCount),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function x(v,S){o.disableAll(),S.isWebGL2&&o.enable(0),S.supportsVertexTextures&&o.enable(1),S.instancing&&o.enable(2),S.instancingColor&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),v.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.skinning&&o.enable(4),S.morphTargets&&o.enable(5),S.morphNormals&&o.enable(6),S.morphColors&&o.enable(7),S.premultipliedAlpha&&o.enable(8),S.shadowMapEnabled&&o.enable(9),S.useLegacyLights&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),v.push(o.mask)}function y(v){let S=g[v.type],N;if(S){let Y=Ln[S];N=Sp.clone(Y.uniforms)}else N=v.uniforms;return N}function R(v,S){let N;for(let Y=0,V=l.length;Y<V;Y++){let A=l[Y];if(A.cacheKey===S){N=A,++N.usedTimes;break}}return N===void 0&&(N=new Ib(s,S,v,r),l.push(N)),N}function w(v){if(--v.usedTimes===0){let S=l.indexOf(v);l[S]=l[l.length-1],l.pop(),v.destroy()}}function C(v){c.remove(v)}function O(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:R,releaseProgram:w,releaseShaderCache:C,programs:l,dispose:O}}function Nb(){let s=new WeakMap;function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function t(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Fb(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function lu(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function hu(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(u,d,f,g,b,m){let p=s[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:b,group:m},s[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=b,p.group=m),e++,p}function o(u,d,f,g,b,m){let p=a(u,d,f,g,b,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function c(u,d,f,g,b,m){let p=a(u,d,f,g,b,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function l(u,d){t.length>1&&t.sort(u||Fb),n.length>1&&n.sort(d||lu),i.length>1&&i.sort(d||lu)}function h(){for(let u=e,d=s.length;u<d;u++){let f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:c,finish:h,sort:l}}function Ob(){let s=new WeakMap;function e(n,i){let r=s.get(n),a;return r===void 0?(a=new hu,s.set(n,[a])):i>=r.length?(a=new hu,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function Bb(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Z};break;case"SpotLight":t={position:new P,direction:new P,color:new Z,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Z,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Z,groundColor:new Z};break;case"RectAreaLight":t={color:new Z,position:new P,halfWidth:new P,halfHeight:new P};break}return s[e.id]=t,t}}}function kb(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var zb=0;function Hb(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Gb(s,e){let t=new Bb,n=kb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new P);let r=new P,a=new Re,o=new Re;function c(h,u){let d=0,f=0,g=0;for(let Y=0;Y<9;Y++)i.probe[Y].set(0,0,0);let b=0,m=0,p=0,_=0,x=0,y=0,R=0,w=0,C=0,O=0,v=0;h.sort(Hb);let S=u===!0?Math.PI:1;for(let Y=0,V=h.length;Y<V;Y++){let A=h[Y],L=A.color,D=A.intensity,W=A.distance,F=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)d+=L.r*D*S,f+=L.g*D*S,g+=L.b*D*S;else if(A.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(A.sh.coefficients[B],D);v++}else if(A.isDirectionalLight){let B=t.get(A);if(B.color.copy(A.color).multiplyScalar(A.intensity*S),A.castShadow){let j=A.shadow,J=n.get(A);J.shadowBias=j.bias,J.shadowNormalBias=j.normalBias,J.shadowRadius=j.radius,J.shadowMapSize=j.mapSize,i.directionalShadow[b]=J,i.directionalShadowMap[b]=F,i.directionalShadowMatrix[b]=A.shadow.matrix,y++}i.directional[b]=B,b++}else if(A.isSpotLight){let B=t.get(A);B.position.setFromMatrixPosition(A.matrixWorld),B.color.copy(L).multiplyScalar(D*S),B.distance=W,B.coneCos=Math.cos(A.angle),B.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),B.decay=A.decay,i.spot[p]=B;let j=A.shadow;if(A.map&&(i.spotLightMap[C]=A.map,C++,j.updateMatrices(A),A.castShadow&&O++),i.spotLightMatrix[p]=j.matrix,A.castShadow){let J=n.get(A);J.shadowBias=j.bias,J.shadowNormalBias=j.normalBias,J.shadowRadius=j.radius,J.shadowMapSize=j.mapSize,i.spotShadow[p]=J,i.spotShadowMap[p]=F,w++}p++}else if(A.isRectAreaLight){let B=t.get(A);B.color.copy(L).multiplyScalar(D),B.halfWidth.set(A.width*.5,0,0),B.halfHeight.set(0,A.height*.5,0),i.rectArea[_]=B,_++}else if(A.isPointLight){let B=t.get(A);if(B.color.copy(A.color).multiplyScalar(A.intensity*S),B.distance=A.distance,B.decay=A.decay,A.castShadow){let j=A.shadow,J=n.get(A);J.shadowBias=j.bias,J.shadowNormalBias=j.normalBias,J.shadowRadius=j.radius,J.shadowMapSize=j.mapSize,J.shadowCameraNear=j.camera.near,J.shadowCameraFar=j.camera.far,i.pointShadow[m]=J,i.pointShadowMap[m]=F,i.pointShadowMatrix[m]=A.shadow.matrix,R++}i.point[m]=B,m++}else if(A.isHemisphereLight){let B=t.get(A);B.skyColor.copy(A.color).multiplyScalar(D*S),B.groundColor.copy(A.groundColor).multiplyScalar(D*S),i.hemi[x]=B,x++}}_>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=se.LTC_FLOAT_1,i.rectAreaLTC2=se.LTC_FLOAT_2):(i.rectAreaLTC1=se.LTC_HALF_1,i.rectAreaLTC2=se.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=se.LTC_FLOAT_1,i.rectAreaLTC2=se.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=se.LTC_HALF_1,i.rectAreaLTC2=se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=g;let N=i.hash;(N.directionalLength!==b||N.pointLength!==m||N.spotLength!==p||N.rectAreaLength!==_||N.hemiLength!==x||N.numDirectionalShadows!==y||N.numPointShadows!==R||N.numSpotShadows!==w||N.numSpotMaps!==C||N.numLightProbes!==v)&&(i.directional.length=b,i.spot.length=p,i.rectArea.length=_,i.point.length=m,i.hemi.length=x,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=R,i.pointShadowMap.length=R,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=R,i.spotLightMatrix.length=w+C-O,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=O,i.numLightProbes=v,N.directionalLength=b,N.pointLength=m,N.spotLength=p,N.rectAreaLength=_,N.hemiLength=x,N.numDirectionalShadows=y,N.numPointShadows=R,N.numSpotShadows=w,N.numSpotMaps=C,N.numLightProbes=v,i.version=zb++)}function l(h,u){let d=0,f=0,g=0,b=0,m=0,p=u.matrixWorldInverse;for(let _=0,x=h.length;_<x;_++){let y=h[_];if(y.isDirectionalLight){let R=i.directional[d];R.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(p),d++}else if(y.isSpotLight){let R=i.spot[g];R.position.setFromMatrixPosition(y.matrixWorld),R.position.applyMatrix4(p),R.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(p),g++}else if(y.isRectAreaLight){let R=i.rectArea[b];R.position.setFromMatrixPosition(y.matrixWorld),R.position.applyMatrix4(p),o.identity(),a.copy(y.matrixWorld),a.premultiply(p),o.extractRotation(a),R.halfWidth.set(y.width*.5,0,0),R.halfHeight.set(0,y.height*.5,0),R.halfWidth.applyMatrix4(o),R.halfHeight.applyMatrix4(o),b++}else if(y.isPointLight){let R=i.point[f];R.position.setFromMatrixPosition(y.matrixWorld),R.position.applyMatrix4(p),f++}else if(y.isHemisphereLight){let R=i.hemi[m];R.direction.setFromMatrixPosition(y.matrixWorld),R.direction.transformDirection(p),m++}}}return{setup:c,setupView:l,state:i}}function uu(s,e){let t=new Gb(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function a(u){n.push(u)}function o(u){i.push(u)}function c(u){t.setup(n,u)}function l(u){t.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function Vb(s,e){let t=new WeakMap;function n(r,a=0){let o=t.get(r),c;return o===void 0?(c=new uu(s,e),t.set(r,[c])):a>=o.length?(c=new uu(s,e),o.push(c)):c=o[a],c}function i(){t=new WeakMap}return{get:n,dispose:i}}var pc=class extends Dt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Of,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},mc=class extends Dt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Wb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Xb=`uniform sampler2D shadow_pass;
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
}`;function qb(s,e,t){let n=new br,i=new ue,r=new ue,a=new Je,o=new pc({depthPacking:Bf}),c=new mc,l={},h=t.maxTextureSize,u={[Dn]:It,[It]:Dn,[pt]:pt},d=new Pt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:Wb,fragmentShader:Xb}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new qe;g.setAttribute("position",new ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Ze(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Du;let p=this.type;this.render=function(w,C,O){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;let v=s.getRenderTarget(),S=s.getActiveCubeFace(),N=s.getActiveMipmapLevel(),Y=s.state;Y.setBlending(pi),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);let V=p!==jn&&this.type===jn,A=p===jn&&this.type!==jn;for(let L=0,D=w.length;L<D;L++){let W=w[L],F=W.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;i.copy(F.mapSize);let B=F.getFrameExtents();if(i.multiply(B),r.copy(F.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/B.x),i.x=r.x*B.x,F.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/B.y),i.y=r.y*B.y,F.mapSize.y=r.y)),F.map===null||V===!0||A===!0){let J=this.type!==jn?{minFilter:bt,magFilter:bt}:{};F.map!==null&&F.map.dispose(),F.map=new nn(i.x,i.y,J),F.map.texture.name=W.name+".shadowMap",F.camera.updateProjectionMatrix()}s.setRenderTarget(F.map),s.clear();let j=F.getViewportCount();for(let J=0;J<j;J++){let ne=F.getViewport(J);a.set(r.x*ne.x,r.y*ne.y,r.x*ne.z,r.y*ne.w),Y.viewport(a),F.updateMatrices(W,J),n=F.getFrustum(),y(C,O,F.camera,W,this.type)}F.isPointLightShadow!==!0&&this.type===jn&&_(F,O),F.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(v,S,N)};function _(w,C){let O=e.update(b);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new nn(i.x,i.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(C,null,O,d,b,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(C,null,O,f,b,null)}function x(w,C,O,v){let S=null,N=O.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(N!==void 0)S=N;else if(S=O.isPointLight===!0?c:o,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let Y=S.uuid,V=C.uuid,A=l[Y];A===void 0&&(A={},l[Y]=A);let L=A[V];L===void 0&&(L=S.clone(),A[V]=L,C.addEventListener("dispose",R)),S=L}if(S.visible=C.visible,S.wireframe=C.wireframe,v===jn?S.side=C.shadowSide!==null?C.shadowSide:C.side:S.side=C.shadowSide!==null?C.shadowSide:u[C.side],S.alphaMap=C.alphaMap,S.alphaTest=C.alphaTest,S.map=C.map,S.clipShadows=C.clipShadows,S.clippingPlanes=C.clippingPlanes,S.clipIntersection=C.clipIntersection,S.displacementMap=C.displacementMap,S.displacementScale=C.displacementScale,S.displacementBias=C.displacementBias,S.wireframeLinewidth=C.wireframeLinewidth,S.linewidth=C.linewidth,O.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let Y=s.properties.get(S);Y.light=O}return S}function y(w,C,O,v,S){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===jn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,w.matrixWorld);let V=e.update(w),A=w.material;if(Array.isArray(A)){let L=V.groups;for(let D=0,W=L.length;D<W;D++){let F=L[D],B=A[F.materialIndex];if(B&&B.visible){let j=x(w,B,v,S);w.onBeforeShadow(s,w,C,O,V,j,F),s.renderBufferDirect(O,null,V,j,w,F),w.onAfterShadow(s,w,C,O,V,j,F)}}}else if(A.visible){let L=x(w,A,v,S);w.onBeforeShadow(s,w,C,O,V,L,null),s.renderBufferDirect(O,null,V,L,w,null),w.onAfterShadow(s,w,C,O,V,L,null)}}let Y=w.children;for(let V=0,A=Y.length;V<A;V++)y(Y[V],C,O,v,S)}function R(w){w.target.removeEventListener("dispose",R);for(let O in l){let v=l[O],S=w.target.uuid;S in v&&(v[S].dispose(),delete v[S])}}}function Yb(s,e,t){let n=t.isWebGL2;function i(){let I=!1,ae=new Je,oe=null,Te=new Je(0,0,0,0);return{setMask:function(Me){oe!==Me&&!I&&(s.colorMask(Me,Me,Me,Me),oe=Me)},setLocked:function(Me){I=Me},setClear:function(Me,nt,it,Tt,Ht){Ht===!0&&(Me*=Tt,nt*=Tt,it*=Tt),ae.set(Me,nt,it,Tt),Te.equals(ae)===!1&&(s.clearColor(Me,nt,it,Tt),Te.copy(ae))},reset:function(){I=!1,oe=null,Te.set(-1,0,0,0)}}}function r(){let I=!1,ae=null,oe=null,Te=null;return{setTest:function(Me){Me?Ne(s.DEPTH_TEST):we(s.DEPTH_TEST)},setMask:function(Me){ae!==Me&&!I&&(s.depthMask(Me),ae=Me)},setFunc:function(Me){if(oe!==Me){switch(Me){case ff:s.depthFunc(s.NEVER);break;case pf:s.depthFunc(s.ALWAYS);break;case mf:s.depthFunc(s.LESS);break;case da:s.depthFunc(s.LEQUAL);break;case gf:s.depthFunc(s.EQUAL);break;case bf:s.depthFunc(s.GEQUAL);break;case xf:s.depthFunc(s.GREATER);break;case _f:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}oe=Me}},setLocked:function(Me){I=Me},setClear:function(Me){Te!==Me&&(s.clearDepth(Me),Te=Me)},reset:function(){I=!1,ae=null,oe=null,Te=null}}}function a(){let I=!1,ae=null,oe=null,Te=null,Me=null,nt=null,it=null,Tt=null,Ht=null;return{setTest:function(st){I||(st?Ne(s.STENCIL_TEST):we(s.STENCIL_TEST))},setMask:function(st){ae!==st&&!I&&(s.stencilMask(st),ae=st)},setFunc:function(st,Gt,Pn){(oe!==st||Te!==Gt||Me!==Pn)&&(s.stencilFunc(st,Gt,Pn),oe=st,Te=Gt,Me=Pn)},setOp:function(st,Gt,Pn){(nt!==st||it!==Gt||Tt!==Pn)&&(s.stencilOp(st,Gt,Pn),nt=st,it=Gt,Tt=Pn)},setLocked:function(st){I=st},setClear:function(st){Ht!==st&&(s.clearStencil(st),Ht=st)},reset:function(){I=!1,ae=null,oe=null,Te=null,Me=null,nt=null,it=null,Tt=null,Ht=null}}}let o=new i,c=new r,l=new a,h=new WeakMap,u=new WeakMap,d={},f={},g=new WeakMap,b=[],m=null,p=!1,_=null,x=null,y=null,R=null,w=null,C=null,O=null,v=new Z(0,0,0),S=0,N=!1,Y=null,V=null,A=null,L=null,D=null,W=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,B=0,j=s.getParameter(s.VERSION);j.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(j)[1]),F=B>=1):j.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),F=B>=2);let J=null,ne={},q=s.getParameter(s.SCISSOR_BOX),K=s.getParameter(s.VIEWPORT),re=new Je().fromArray(q),xe=new Je().fromArray(K);function be(I,ae,oe,Te){let Me=new Uint8Array(4),nt=s.createTexture();s.bindTexture(I,nt),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let it=0;it<oe;it++)n&&(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)?s.texImage3D(ae,0,s.RGBA,1,1,Te,0,s.RGBA,s.UNSIGNED_BYTE,Me):s.texImage2D(ae+it,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Me);return nt}let De={};De[s.TEXTURE_2D]=be(s.TEXTURE_2D,s.TEXTURE_2D,1),De[s.TEXTURE_CUBE_MAP]=be(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(De[s.TEXTURE_2D_ARRAY]=be(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),De[s.TEXTURE_3D]=be(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Ne(s.DEPTH_TEST),c.setFunc(da),Oe(!1),T(ql),Ne(s.CULL_FACE),pe(pi);function Ne(I){d[I]!==!0&&(s.enable(I),d[I]=!0)}function we(I){d[I]!==!1&&(s.disable(I),d[I]=!1)}function Ye(I,ae){return f[I]!==ae?(s.bindFramebuffer(I,ae),f[I]=ae,n&&(I===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=ae),I===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=ae)),!0):!1}function k(I,ae){let oe=b,Te=!1;if(I)if(oe=g.get(ae),oe===void 0&&(oe=[],g.set(ae,oe)),I.isWebGLMultipleRenderTargets){let Me=I.texture;if(oe.length!==Me.length||oe[0]!==s.COLOR_ATTACHMENT0){for(let nt=0,it=Me.length;nt<it;nt++)oe[nt]=s.COLOR_ATTACHMENT0+nt;oe.length=Me.length,Te=!0}}else oe[0]!==s.COLOR_ATTACHMENT0&&(oe[0]=s.COLOR_ATTACHMENT0,Te=!0);else oe[0]!==s.BACK&&(oe[0]=s.BACK,Te=!0);Te&&(t.isWebGL2?s.drawBuffers(oe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(oe))}function zt(I){return m!==I?(s.useProgram(I),m=I,!0):!1}let ye={[zi]:s.FUNC_ADD,[Zd]:s.FUNC_SUBTRACT,[Qd]:s.FUNC_REVERSE_SUBTRACT};if(n)ye[Kl]=s.MIN,ye[Jl]=s.MAX;else{let I=e.get("EXT_blend_minmax");I!==null&&(ye[Kl]=I.MIN_EXT,ye[Jl]=I.MAX_EXT)}let Le={[$d]:s.ZERO,[ef]:s.ONE,[tf]:s.SRC_COLOR,[Zo]:s.SRC_ALPHA,[cf]:s.SRC_ALPHA_SATURATE,[af]:s.DST_COLOR,[sf]:s.DST_ALPHA,[nf]:s.ONE_MINUS_SRC_COLOR,[Qo]:s.ONE_MINUS_SRC_ALPHA,[of]:s.ONE_MINUS_DST_COLOR,[rf]:s.ONE_MINUS_DST_ALPHA,[lf]:s.CONSTANT_COLOR,[hf]:s.ONE_MINUS_CONSTANT_COLOR,[uf]:s.CONSTANT_ALPHA,[df]:s.ONE_MINUS_CONSTANT_ALPHA};function pe(I,ae,oe,Te,Me,nt,it,Tt,Ht,st){if(I===pi){p===!0&&(we(s.BLEND),p=!1);return}if(p===!1&&(Ne(s.BLEND),p=!0),I!==Jd){if(I!==_||st!==N){if((x!==zi||w!==zi)&&(s.blendEquation(s.FUNC_ADD),x=zi,w=zi),st)switch(I){case Ps:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Un:s.blendFunc(s.ONE,s.ONE);break;case Yl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case jl:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Ps:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Un:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Yl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case jl:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}y=null,R=null,C=null,O=null,v.set(0,0,0),S=0,_=I,N=st}return}Me=Me||ae,nt=nt||oe,it=it||Te,(ae!==x||Me!==w)&&(s.blendEquationSeparate(ye[ae],ye[Me]),x=ae,w=Me),(oe!==y||Te!==R||nt!==C||it!==O)&&(s.blendFuncSeparate(Le[oe],Le[Te],Le[nt],Le[it]),y=oe,R=Te,C=nt,O=it),(Tt.equals(v)===!1||Ht!==S)&&(s.blendColor(Tt.r,Tt.g,Tt.b,Ht),v.copy(Tt),S=Ht),_=I,N=!1}function ct(I,ae){I.side===pt?we(s.CULL_FACE):Ne(s.CULL_FACE);let oe=I.side===It;ae&&(oe=!oe),Oe(oe),I.blending===Ps&&I.transparent===!1?pe(pi):pe(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),c.setFunc(I.depthFunc),c.setTest(I.depthTest),c.setMask(I.depthWrite),o.setMask(I.colorWrite);let Te=I.stencilWrite;l.setTest(Te),Te&&(l.setMask(I.stencilWriteMask),l.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),l.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),H(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Ne(s.SAMPLE_ALPHA_TO_COVERAGE):we(s.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(I){Y!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),Y=I)}function T(I){I!==jd?(Ne(s.CULL_FACE),I!==V&&(I===ql?s.cullFace(s.BACK):I===Kd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):we(s.CULL_FACE),V=I}function M(I){I!==A&&(F&&s.lineWidth(I),A=I)}function H(I,ae,oe){I?(Ne(s.POLYGON_OFFSET_FILL),(L!==ae||D!==oe)&&(s.polygonOffset(ae,oe),L=ae,D=oe)):we(s.POLYGON_OFFSET_FILL)}function ee(I){I?Ne(s.SCISSOR_TEST):we(s.SCISSOR_TEST)}function $(I){I===void 0&&(I=s.TEXTURE0+W-1),J!==I&&(s.activeTexture(I),J=I)}function te(I,ae,oe){oe===void 0&&(J===null?oe=s.TEXTURE0+W-1:oe=J);let Te=ne[oe];Te===void 0&&(Te={type:void 0,texture:void 0},ne[oe]=Te),(Te.type!==I||Te.texture!==ae)&&(J!==oe&&(s.activeTexture(oe),J=oe),s.bindTexture(I,ae||De[I]),Te.type=I,Te.texture=ae)}function me(){let I=ne[J];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function ce(){try{s.compressedTexImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function de(){try{s.compressedTexImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ee(){try{s.texSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Be(){try{s.texSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function et(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function We(){try{s.texStorage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Pe(){try{s.texStorage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ve(){try{s.texImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function fe(){try{s.texImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Fe(I){re.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),re.copy(I))}function Qe(I){xe.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),xe.copy(I))}function dt(I,ae){let oe=u.get(ae);oe===void 0&&(oe=new WeakMap,u.set(ae,oe));let Te=oe.get(I);Te===void 0&&(Te=s.getUniformBlockIndex(ae,I.name),oe.set(I,Te))}function He(I,ae){let Te=u.get(ae).get(I);h.get(ae)!==Te&&(s.uniformBlockBinding(ae,Te,I.__bindingPointIndex),h.set(ae,Te))}function ie(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},J=null,ne={},f={},g=new WeakMap,b=[],m=null,p=!1,_=null,x=null,y=null,R=null,w=null,C=null,O=null,v=new Z(0,0,0),S=0,N=!1,Y=null,V=null,A=null,L=null,D=null,re.set(0,0,s.canvas.width,s.canvas.height),xe.set(0,0,s.canvas.width,s.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:Ne,disable:we,bindFramebuffer:Ye,drawBuffers:k,useProgram:zt,setBlending:pe,setMaterial:ct,setFlipSided:Oe,setCullFace:T,setLineWidth:M,setPolygonOffset:H,setScissorTest:ee,activeTexture:$,bindTexture:te,unbindTexture:me,compressedTexImage2D:ce,compressedTexImage3D:de,texImage2D:ve,texImage3D:fe,updateUBOMapping:dt,uniformBlockBinding:He,texStorage2D:We,texStorage3D:Pe,texSubImage2D:Ee,texSubImage3D:Be,compressedTexSubImage2D:Q,compressedTexSubImage3D:et,scissor:Fe,viewport:Qe,reset:ie}}function jb(s,e,t,n,i,r,a){let o=i.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,M){return f?new OffscreenCanvas(T,M):gr("canvas")}function b(T,M,H,ee){let $=1;if((T.width>ee||T.height>ee)&&($=ee/Math.max(T.width,T.height)),$<1||M===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){let te=M?xa:Math.floor,me=te($*T.width),ce=te($*T.height);u===void 0&&(u=g(me,ce));let de=H?g(me,ce):u;return de.width=me,de.height=ce,de.getContext("2d").drawImage(T,0,0,me,ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+me+"x"+ce+")."),de}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function m(T){return ic(T.width)&&ic(T.height)}function p(T){return o?!1:T.wrapS!==tn||T.wrapT!==tn||T.minFilter!==bt&&T.minFilter!==yt}function _(T,M){return T.generateMipmaps&&M&&T.minFilter!==bt&&T.minFilter!==yt}function x(T){s.generateMipmap(T)}function y(T,M,H,ee,$=!1){if(o===!1)return M;if(T!==null){if(s[T]!==void 0)return s[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let te=M;if(M===s.RED&&(H===s.FLOAT&&(te=s.R32F),H===s.HALF_FLOAT&&(te=s.R16F),H===s.UNSIGNED_BYTE&&(te=s.R8)),M===s.RED_INTEGER&&(H===s.UNSIGNED_BYTE&&(te=s.R8UI),H===s.UNSIGNED_SHORT&&(te=s.R16UI),H===s.UNSIGNED_INT&&(te=s.R32UI),H===s.BYTE&&(te=s.R8I),H===s.SHORT&&(te=s.R16I),H===s.INT&&(te=s.R32I)),M===s.RG&&(H===s.FLOAT&&(te=s.RG32F),H===s.HALF_FLOAT&&(te=s.RG16F),H===s.UNSIGNED_BYTE&&(te=s.RG8)),M===s.RGBA){let me=$?pa:Ke.getTransfer(ee);H===s.FLOAT&&(te=s.RGBA32F),H===s.HALF_FLOAT&&(te=s.RGBA16F),H===s.UNSIGNED_BYTE&&(te=me===ot?s.SRGB8_ALPHA8:s.RGBA8),H===s.UNSIGNED_SHORT_4_4_4_4&&(te=s.RGBA4),H===s.UNSIGNED_SHORT_5_5_5_1&&(te=s.RGB5_A1)}return(te===s.R16F||te===s.R32F||te===s.RG16F||te===s.RG32F||te===s.RGBA16F||te===s.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function R(T,M,H){return _(T,H)===!0||T.isFramebufferTexture&&T.minFilter!==bt&&T.minFilter!==yt?Math.log2(Math.max(M.width,M.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?M.mipmaps.length:1}function w(T){return T===bt||T===fa||T===hr?s.NEAREST:s.LINEAR}function C(T){let M=T.target;M.removeEventListener("dispose",C),v(M),M.isVideoTexture&&h.delete(M)}function O(T){let M=T.target;M.removeEventListener("dispose",O),N(M)}function v(T){let M=n.get(T);if(M.__webglInit===void 0)return;let H=T.source,ee=d.get(H);if(ee){let $=ee[M.__cacheKey];$.usedTimes--,$.usedTimes===0&&S(T),Object.keys(ee).length===0&&d.delete(H)}n.remove(T)}function S(T){let M=n.get(T);s.deleteTexture(M.__webglTexture);let H=T.source,ee=d.get(H);delete ee[M.__cacheKey],a.memory.textures--}function N(T){let M=T.texture,H=n.get(T),ee=n.get(M);if(ee.__webglTexture!==void 0&&(s.deleteTexture(ee.__webglTexture),a.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(H.__webglFramebuffer[$]))for(let te=0;te<H.__webglFramebuffer[$].length;te++)s.deleteFramebuffer(H.__webglFramebuffer[$][te]);else s.deleteFramebuffer(H.__webglFramebuffer[$]);H.__webglDepthbuffer&&s.deleteRenderbuffer(H.__webglDepthbuffer[$])}else{if(Array.isArray(H.__webglFramebuffer))for(let $=0;$<H.__webglFramebuffer.length;$++)s.deleteFramebuffer(H.__webglFramebuffer[$]);else s.deleteFramebuffer(H.__webglFramebuffer);if(H.__webglDepthbuffer&&s.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&s.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let $=0;$<H.__webglColorRenderbuffer.length;$++)H.__webglColorRenderbuffer[$]&&s.deleteRenderbuffer(H.__webglColorRenderbuffer[$]);H.__webglDepthRenderbuffer&&s.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let $=0,te=M.length;$<te;$++){let me=n.get(M[$]);me.__webglTexture&&(s.deleteTexture(me.__webglTexture),a.memory.textures--),n.remove(M[$])}n.remove(M),n.remove(T)}let Y=0;function V(){Y=0}function A(){let T=Y;return T>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),Y+=1,T}function L(T){let M=[];return M.push(T.wrapS),M.push(T.wrapT),M.push(T.wrapR||0),M.push(T.magFilter),M.push(T.minFilter),M.push(T.anisotropy),M.push(T.internalFormat),M.push(T.format),M.push(T.type),M.push(T.generateMipmaps),M.push(T.premultiplyAlpha),M.push(T.flipY),M.push(T.unpackAlignment),M.push(T.colorSpace),M.join()}function D(T,M){let H=n.get(T);if(T.isVideoTexture&&ct(T),T.isRenderTargetTexture===!1&&T.version>0&&H.__version!==T.version){let ee=T.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{re(H,T,M);return}}t.bindTexture(s.TEXTURE_2D,H.__webglTexture,s.TEXTURE0+M)}function W(T,M){let H=n.get(T);if(T.version>0&&H.__version!==T.version){re(H,T,M);return}t.bindTexture(s.TEXTURE_2D_ARRAY,H.__webglTexture,s.TEXTURE0+M)}function F(T,M){let H=n.get(T);if(T.version>0&&H.__version!==T.version){re(H,T,M);return}t.bindTexture(s.TEXTURE_3D,H.__webglTexture,s.TEXTURE0+M)}function B(T,M){let H=n.get(T);if(T.version>0&&H.__version!==T.version){xe(H,T,M);return}t.bindTexture(s.TEXTURE_CUBE_MAP,H.__webglTexture,s.TEXTURE0+M)}let j={[Nn]:s.REPEAT,[tn]:s.CLAMP_TO_EDGE,[mr]:s.MIRRORED_REPEAT},J={[bt]:s.NEAREST,[fa]:s.NEAREST_MIPMAP_NEAREST,[hr]:s.NEAREST_MIPMAP_LINEAR,[yt]:s.LINEAR,[Nc]:s.LINEAR_MIPMAP_NEAREST,[bi]:s.LINEAR_MIPMAP_LINEAR},ne={[zf]:s.NEVER,[qf]:s.ALWAYS,[Hf]:s.LESS,[Wu]:s.LEQUAL,[Gf]:s.EQUAL,[Xf]:s.GEQUAL,[Vf]:s.GREATER,[Wf]:s.NOTEQUAL};function q(T,M,H){if(H?(s.texParameteri(T,s.TEXTURE_WRAP_S,j[M.wrapS]),s.texParameteri(T,s.TEXTURE_WRAP_T,j[M.wrapT]),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,j[M.wrapR]),s.texParameteri(T,s.TEXTURE_MAG_FILTER,J[M.magFilter]),s.texParameteri(T,s.TEXTURE_MIN_FILTER,J[M.minFilter])):(s.texParameteri(T,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(T,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(M.wrapS!==tn||M.wrapT!==tn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(T,s.TEXTURE_MAG_FILTER,w(M.magFilter)),s.texParameteri(T,s.TEXTURE_MIN_FILTER,w(M.minFilter)),M.minFilter!==bt&&M.minFilter!==yt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(s.texParameteri(T,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(T,s.TEXTURE_COMPARE_FUNC,ne[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let ee=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===bt||M.minFilter!==hr&&M.minFilter!==bi||M.type===Kn&&e.has("OES_texture_float_linear")===!1||o===!1&&M.type===qi&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(s.texParameterf(T,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function K(T,M){let H=!1;T.__webglInit===void 0&&(T.__webglInit=!0,M.addEventListener("dispose",C));let ee=M.source,$=d.get(ee);$===void 0&&($={},d.set(ee,$));let te=L(M);if(te!==T.__cacheKey){$[te]===void 0&&($[te]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,H=!0),$[te].usedTimes++;let me=$[T.__cacheKey];me!==void 0&&($[T.__cacheKey].usedTimes--,me.usedTimes===0&&S(M)),T.__cacheKey=te,T.__webglTexture=$[te].texture}return H}function re(T,M,H){let ee=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ee=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ee=s.TEXTURE_3D);let $=K(T,M),te=M.source;t.bindTexture(ee,T.__webglTexture,s.TEXTURE0+H);let me=n.get(te);if(te.version!==me.__version||$===!0){t.activeTexture(s.TEXTURE0+H);let ce=Ke.getPrimaries(Ke.workingColorSpace),de=M.colorSpace===un?null:Ke.getPrimaries(M.colorSpace),Ee=M.colorSpace===un||ce===de?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let Be=p(M)&&m(M.image)===!1,Q=b(M.image,Be,!1,i.maxTextureSize);Q=Oe(M,Q);let et=m(Q)||o,We=r.convert(M.format,M.colorSpace),Pe=r.convert(M.type),ve=y(M.internalFormat,We,Pe,M.colorSpace,M.isVideoTexture);q(ee,M,et);let fe,Fe=M.mipmaps,Qe=o&&M.isVideoTexture!==!0&&ve!==Hu,dt=me.__version===void 0||$===!0,He=R(M,Q,et);if(M.isDepthTexture)ve=s.DEPTH_COMPONENT,o?M.type===Kn?ve=s.DEPTH_COMPONENT32F:M.type===di?ve=s.DEPTH_COMPONENT24:M.type===Vi?ve=s.DEPTH24_STENCIL8:ve=s.DEPTH_COMPONENT16:M.type===Kn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Wi&&ve===s.DEPTH_COMPONENT&&M.type!==Fc&&M.type!==di&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=di,Pe=r.convert(M.type)),M.format===Ns&&ve===s.DEPTH_COMPONENT&&(ve=s.DEPTH_STENCIL,M.type!==Vi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Vi,Pe=r.convert(M.type))),dt&&(Qe?t.texStorage2D(s.TEXTURE_2D,1,ve,Q.width,Q.height):t.texImage2D(s.TEXTURE_2D,0,ve,Q.width,Q.height,0,We,Pe,null));else if(M.isDataTexture)if(Fe.length>0&&et){Qe&&dt&&t.texStorage2D(s.TEXTURE_2D,He,ve,Fe[0].width,Fe[0].height);for(let ie=0,I=Fe.length;ie<I;ie++)fe=Fe[ie],Qe?t.texSubImage2D(s.TEXTURE_2D,ie,0,0,fe.width,fe.height,We,Pe,fe.data):t.texImage2D(s.TEXTURE_2D,ie,ve,fe.width,fe.height,0,We,Pe,fe.data);M.generateMipmaps=!1}else Qe?(dt&&t.texStorage2D(s.TEXTURE_2D,He,ve,Q.width,Q.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,Q.width,Q.height,We,Pe,Q.data)):t.texImage2D(s.TEXTURE_2D,0,ve,Q.width,Q.height,0,We,Pe,Q.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Qe&&dt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,He,ve,Fe[0].width,Fe[0].height,Q.depth);for(let ie=0,I=Fe.length;ie<I;ie++)fe=Fe[ie],M.format!==hn?We!==null?Qe?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,0,fe.width,fe.height,Q.depth,We,fe.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ie,ve,fe.width,fe.height,Q.depth,0,fe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qe?t.texSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,0,fe.width,fe.height,Q.depth,We,Pe,fe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ie,ve,fe.width,fe.height,Q.depth,0,We,Pe,fe.data)}else{Qe&&dt&&t.texStorage2D(s.TEXTURE_2D,He,ve,Fe[0].width,Fe[0].height);for(let ie=0,I=Fe.length;ie<I;ie++)fe=Fe[ie],M.format!==hn?We!==null?Qe?t.compressedTexSubImage2D(s.TEXTURE_2D,ie,0,0,fe.width,fe.height,We,fe.data):t.compressedTexImage2D(s.TEXTURE_2D,ie,ve,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qe?t.texSubImage2D(s.TEXTURE_2D,ie,0,0,fe.width,fe.height,We,Pe,fe.data):t.texImage2D(s.TEXTURE_2D,ie,ve,fe.width,fe.height,0,We,Pe,fe.data)}else if(M.isDataArrayTexture)Qe?(dt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,He,ve,Q.width,Q.height,Q.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,We,Pe,Q.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,ve,Q.width,Q.height,Q.depth,0,We,Pe,Q.data);else if(M.isData3DTexture)Qe?(dt&&t.texStorage3D(s.TEXTURE_3D,He,ve,Q.width,Q.height,Q.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,We,Pe,Q.data)):t.texImage3D(s.TEXTURE_3D,0,ve,Q.width,Q.height,Q.depth,0,We,Pe,Q.data);else if(M.isFramebufferTexture){if(dt)if(Qe)t.texStorage2D(s.TEXTURE_2D,He,ve,Q.width,Q.height);else{let ie=Q.width,I=Q.height;for(let ae=0;ae<He;ae++)t.texImage2D(s.TEXTURE_2D,ae,ve,ie,I,0,We,Pe,null),ie>>=1,I>>=1}}else if(Fe.length>0&&et){Qe&&dt&&t.texStorage2D(s.TEXTURE_2D,He,ve,Fe[0].width,Fe[0].height);for(let ie=0,I=Fe.length;ie<I;ie++)fe=Fe[ie],Qe?t.texSubImage2D(s.TEXTURE_2D,ie,0,0,We,Pe,fe):t.texImage2D(s.TEXTURE_2D,ie,ve,We,Pe,fe);M.generateMipmaps=!1}else Qe?(dt&&t.texStorage2D(s.TEXTURE_2D,He,ve,Q.width,Q.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,We,Pe,Q)):t.texImage2D(s.TEXTURE_2D,0,ve,We,Pe,Q);_(M,et)&&x(ee),me.__version=te.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function xe(T,M,H){if(M.image.length!==6)return;let ee=K(T,M),$=M.source;t.bindTexture(s.TEXTURE_CUBE_MAP,T.__webglTexture,s.TEXTURE0+H);let te=n.get($);if($.version!==te.__version||ee===!0){t.activeTexture(s.TEXTURE0+H);let me=Ke.getPrimaries(Ke.workingColorSpace),ce=M.colorSpace===un?null:Ke.getPrimaries(M.colorSpace),de=M.colorSpace===un||me===ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);let Ee=M.isCompressedTexture||M.image[0].isCompressedTexture,Be=M.image[0]&&M.image[0].isDataTexture,Q=[];for(let ie=0;ie<6;ie++)!Ee&&!Be?Q[ie]=b(M.image[ie],!1,!0,i.maxCubemapSize):Q[ie]=Be?M.image[ie].image:M.image[ie],Q[ie]=Oe(M,Q[ie]);let et=Q[0],We=m(et)||o,Pe=r.convert(M.format,M.colorSpace),ve=r.convert(M.type),fe=y(M.internalFormat,Pe,ve,M.colorSpace),Fe=o&&M.isVideoTexture!==!0,Qe=te.__version===void 0||ee===!0,dt=R(M,et,We);q(s.TEXTURE_CUBE_MAP,M,We);let He;if(Ee){Fe&&Qe&&t.texStorage2D(s.TEXTURE_CUBE_MAP,dt,fe,et.width,et.height);for(let ie=0;ie<6;ie++){He=Q[ie].mipmaps;for(let I=0;I<He.length;I++){let ae=He[I];M.format!==hn?Pe!==null?Fe?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,I,0,0,ae.width,ae.height,Pe,ae.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,I,fe,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,I,0,0,ae.width,ae.height,Pe,ve,ae.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,I,fe,ae.width,ae.height,0,Pe,ve,ae.data)}}}else{He=M.mipmaps,Fe&&Qe&&(He.length>0&&dt++,t.texStorage2D(s.TEXTURE_CUBE_MAP,dt,fe,Q[0].width,Q[0].height));for(let ie=0;ie<6;ie++)if(Be){Fe?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Q[ie].width,Q[ie].height,Pe,ve,Q[ie].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,fe,Q[ie].width,Q[ie].height,0,Pe,ve,Q[ie].data);for(let I=0;I<He.length;I++){let oe=He[I].image[ie].image;Fe?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,I+1,0,0,oe.width,oe.height,Pe,ve,oe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,I+1,fe,oe.width,oe.height,0,Pe,ve,oe.data)}}else{Fe?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Pe,ve,Q[ie]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,fe,Pe,ve,Q[ie]);for(let I=0;I<He.length;I++){let ae=He[I];Fe?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,I+1,0,0,Pe,ve,ae.image[ie]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,I+1,fe,Pe,ve,ae.image[ie])}}}_(M,We)&&x(s.TEXTURE_CUBE_MAP),te.__version=$.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function be(T,M,H,ee,$,te){let me=r.convert(H.format,H.colorSpace),ce=r.convert(H.type),de=y(H.internalFormat,me,ce,H.colorSpace);if(!n.get(M).__hasExternalTextures){let Be=Math.max(1,M.width>>te),Q=Math.max(1,M.height>>te);$===s.TEXTURE_3D||$===s.TEXTURE_2D_ARRAY?t.texImage3D($,te,de,Be,Q,M.depth,0,me,ce,null):t.texImage2D($,te,de,Be,Q,0,me,ce,null)}t.bindFramebuffer(s.FRAMEBUFFER,T),pe(M)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ee,$,n.get(H).__webglTexture,0,Le(M)):($===s.TEXTURE_2D||$>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ee,$,n.get(H).__webglTexture,te),t.bindFramebuffer(s.FRAMEBUFFER,null)}function De(T,M,H){if(s.bindRenderbuffer(s.RENDERBUFFER,T),M.depthBuffer&&!M.stencilBuffer){let ee=o===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(H||pe(M)){let $=M.depthTexture;$&&$.isDepthTexture&&($.type===Kn?ee=s.DEPTH_COMPONENT32F:$.type===di&&(ee=s.DEPTH_COMPONENT24));let te=Le(M);pe(M)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,te,ee,M.width,M.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,te,ee,M.width,M.height)}else s.renderbufferStorage(s.RENDERBUFFER,ee,M.width,M.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,T)}else if(M.depthBuffer&&M.stencilBuffer){let ee=Le(M);H&&pe(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ee,s.DEPTH24_STENCIL8,M.width,M.height):pe(M)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ee,s.DEPTH24_STENCIL8,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,T)}else{let ee=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let $=0;$<ee.length;$++){let te=ee[$],me=r.convert(te.format,te.colorSpace),ce=r.convert(te.type),de=y(te.internalFormat,me,ce,te.colorSpace),Ee=Le(M);H&&pe(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ee,de,M.width,M.height):pe(M)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ee,de,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,de,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ne(T,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,T),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),D(M.depthTexture,0);let ee=n.get(M.depthTexture).__webglTexture,$=Le(M);if(M.depthTexture.format===Wi)pe(M)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ee,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ee,0);else if(M.depthTexture.format===Ns)pe(M)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ee,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function we(T){let M=n.get(T),H=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!M.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Ne(M.__webglFramebuffer,T)}else if(H){M.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[ee]),M.__webglDepthbuffer[ee]=s.createRenderbuffer(),De(M.__webglDepthbuffer[ee],T,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=s.createRenderbuffer(),De(M.__webglDepthbuffer,T,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ye(T,M,H){let ee=n.get(T);M!==void 0&&be(ee.__webglFramebuffer,T,T.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),H!==void 0&&we(T)}function k(T){let M=T.texture,H=n.get(T),ee=n.get(M);T.addEventListener("dispose",O),T.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=s.createTexture()),ee.__version=M.version,a.memory.textures++);let $=T.isWebGLCubeRenderTarget===!0,te=T.isWebGLMultipleRenderTargets===!0,me=m(T)||o;if($){H.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(o&&M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer[ce]=[];for(let de=0;de<M.mipmaps.length;de++)H.__webglFramebuffer[ce][de]=s.createFramebuffer()}else H.__webglFramebuffer[ce]=s.createFramebuffer()}else{if(o&&M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer=[];for(let ce=0;ce<M.mipmaps.length;ce++)H.__webglFramebuffer[ce]=s.createFramebuffer()}else H.__webglFramebuffer=s.createFramebuffer();if(te)if(i.drawBuffers){let ce=T.texture;for(let de=0,Ee=ce.length;de<Ee;de++){let Be=n.get(ce[de]);Be.__webglTexture===void 0&&(Be.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&T.samples>0&&pe(T)===!1){let ce=te?M:[M];H.__webglMultisampledFramebuffer=s.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let de=0;de<ce.length;de++){let Ee=ce[de];H.__webglColorRenderbuffer[de]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,H.__webglColorRenderbuffer[de]);let Be=r.convert(Ee.format,Ee.colorSpace),Q=r.convert(Ee.type),et=y(Ee.internalFormat,Be,Q,Ee.colorSpace,T.isXRRenderTarget===!0),We=Le(T);s.renderbufferStorageMultisample(s.RENDERBUFFER,We,et,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.RENDERBUFFER,H.__webglColorRenderbuffer[de])}s.bindRenderbuffer(s.RENDERBUFFER,null),T.depthBuffer&&(H.__webglDepthRenderbuffer=s.createRenderbuffer(),De(H.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if($){t.bindTexture(s.TEXTURE_CUBE_MAP,ee.__webglTexture),q(s.TEXTURE_CUBE_MAP,M,me);for(let ce=0;ce<6;ce++)if(o&&M.mipmaps&&M.mipmaps.length>0)for(let de=0;de<M.mipmaps.length;de++)be(H.__webglFramebuffer[ce][de],T,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,de);else be(H.__webglFramebuffer[ce],T,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);_(M,me)&&x(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(te){let ce=T.texture;for(let de=0,Ee=ce.length;de<Ee;de++){let Be=ce[de],Q=n.get(Be);t.bindTexture(s.TEXTURE_2D,Q.__webglTexture),q(s.TEXTURE_2D,Be,me),be(H.__webglFramebuffer,T,Be,s.COLOR_ATTACHMENT0+de,s.TEXTURE_2D,0),_(Be,me)&&x(s.TEXTURE_2D)}t.unbindTexture()}else{let ce=s.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(o?ce=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ce,ee.__webglTexture),q(ce,M,me),o&&M.mipmaps&&M.mipmaps.length>0)for(let de=0;de<M.mipmaps.length;de++)be(H.__webglFramebuffer[de],T,M,s.COLOR_ATTACHMENT0,ce,de);else be(H.__webglFramebuffer,T,M,s.COLOR_ATTACHMENT0,ce,0);_(M,me)&&x(ce),t.unbindTexture()}T.depthBuffer&&we(T)}function zt(T){let M=m(T)||o,H=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let ee=0,$=H.length;ee<$;ee++){let te=H[ee];if(_(te,M)){let me=T.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,ce=n.get(te).__webglTexture;t.bindTexture(me,ce),x(me),t.unbindTexture()}}}function ye(T){if(o&&T.samples>0&&pe(T)===!1){let M=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],H=T.width,ee=T.height,$=s.COLOR_BUFFER_BIT,te=[],me=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ce=n.get(T),de=T.isWebGLMultipleRenderTargets===!0;if(de)for(let Ee=0;Ee<M.length;Ee++)t.bindFramebuffer(s.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ce.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let Ee=0;Ee<M.length;Ee++){te.push(s.COLOR_ATTACHMENT0+Ee),T.depthBuffer&&te.push(me);let Be=ce.__ignoreDepthValues!==void 0?ce.__ignoreDepthValues:!1;if(Be===!1&&(T.depthBuffer&&($|=s.DEPTH_BUFFER_BIT),T.stencilBuffer&&($|=s.STENCIL_BUFFER_BIT)),de&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ce.__webglColorRenderbuffer[Ee]),Be===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[me]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[me])),de){let Q=n.get(M[Ee]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Q,0)}s.blitFramebuffer(0,0,H,ee,0,0,H,ee,$,s.NEAREST),l&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,te)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),de)for(let Ee=0;Ee<M.length;Ee++){t.bindFramebuffer(s.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.RENDERBUFFER,ce.__webglColorRenderbuffer[Ee]);let Be=n.get(M[Ee]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ce.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.TEXTURE_2D,Be,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}}function Le(T){return Math.min(i.maxSamples,T.samples)}function pe(T){let M=n.get(T);return o&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ct(T){let M=a.render.frame;h.get(T)!==M&&(h.set(T,M),T.update())}function Oe(T,M){let H=T.colorSpace,ee=T.format,$=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===nc||H!==Mt&&H!==un&&(Ke.getTransfer(H)===ot?o===!1?e.has("EXT_sRGB")===!0&&ee===hn?(T.format=nc,T.minFilter=yt,T.generateMipmaps=!1):M=_a.sRGBToLinear(M):(ee!==hn||$!==gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),M}this.allocateTextureUnit=A,this.resetTextureUnits=V,this.setTexture2D=D,this.setTexture2DArray=W,this.setTexture3D=F,this.setTextureCube=B,this.rebindTextures=Ye,this.setupRenderTarget=k,this.updateRenderTargetMipmap=zt,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=be,this.useMultisampledRTT=pe}function Kb(s,e,t){let n=t.isWebGL2;function i(r,a=un){let o,c=Ke.getTransfer(a);if(r===gi)return s.UNSIGNED_BYTE;if(r===Fu)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Ou)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Rf)return s.BYTE;if(r===Cf)return s.SHORT;if(r===Fc)return s.UNSIGNED_SHORT;if(r===Nu)return s.INT;if(r===di)return s.UNSIGNED_INT;if(r===Kn)return s.FLOAT;if(r===qi)return n?s.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Pf)return s.ALPHA;if(r===hn)return s.RGBA;if(r===Lf)return s.LUMINANCE;if(r===If)return s.LUMINANCE_ALPHA;if(r===Wi)return s.DEPTH_COMPONENT;if(r===Ns)return s.DEPTH_STENCIL;if(r===nc)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Df)return s.RED;if(r===Bu)return s.RED_INTEGER;if(r===Uf)return s.RG;if(r===ku)return s.RG_INTEGER;if(r===zu)return s.RGBA_INTEGER;if(r===bo||r===xo||r===_o||r===vo)if(c===ot)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===bo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===xo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===_o)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===vo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===bo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===xo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===_o)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===vo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ql||r===$l||r===eh||r===th)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Ql)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===$l)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===eh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===th)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Hu)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===nh||r===ih)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===nh)return c===ot?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===ih)return c===ot?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===sh||r===rh||r===ah||r===oh||r===ch||r===lh||r===hh||r===uh||r===dh||r===fh||r===ph||r===mh||r===gh||r===bh)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===sh)return c===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===rh)return c===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ah)return c===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===oh)return c===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ch)return c===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===lh)return c===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===hh)return c===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===uh)return c===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===dh)return c===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===fh)return c===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ph)return c===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===mh)return c===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===gh)return c===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===bh)return c===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===yo||r===xh||r===_h)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===yo)return c===ot?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===xh)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===_h)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Nf||r===vh||r===yh||r===Mh)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===yo)return o.COMPRESSED_RED_RGTC1_EXT;if(r===vh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===yh)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Mh)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Vi?n?s.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}var gc=class extends xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},ht=class extends at{constructor(){super(),this.isGroup=!0,this.type="Group"}},Jb={type:"move"},pr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ht,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ht,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ht,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let b of e.hand.values()){let m=t.getJointPose(b,n),p=this._getHandJoint(l,b);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Jb)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ht;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},bc=class extends xi{constructor(e,t){super();let n=this,i=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null,b=t.getContextAttributes(),m=null,p=null,_=[],x=[],y=new ue,R=null,w=new xt;w.layers.enable(1),w.viewport=new Je;let C=new xt;C.layers.enable(2),C.viewport=new Je;let O=[w,C],v=new gc;v.layers.enable(1),v.layers.enable(2);let S=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let K=_[q];return K===void 0&&(K=new pr,_[q]=K),K.getTargetRaySpace()},this.getControllerGrip=function(q){let K=_[q];return K===void 0&&(K=new pr,_[q]=K),K.getGripSpace()},this.getHand=function(q){let K=_[q];return K===void 0&&(K=new pr,_[q]=K),K.getHandSpace()};function Y(q){let K=x.indexOf(q.inputSource);if(K===-1)return;let re=_[K];re!==void 0&&(re.update(q.inputSource,q.frame,l||a),re.dispatchEvent({type:q.type,data:q.inputSource}))}function V(){i.removeEventListener("select",Y),i.removeEventListener("selectstart",Y),i.removeEventListener("selectend",Y),i.removeEventListener("squeeze",Y),i.removeEventListener("squeezestart",Y),i.removeEventListener("squeezeend",Y),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",A);for(let q=0;q<_.length;q++){let K=x[q];K!==null&&(x[q]=null,_[q].disconnect(K))}S=null,N=null,e.setRenderTarget(m),f=null,d=null,u=null,i=null,p=null,ne.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(y.width,y.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",Y),i.addEventListener("selectstart",Y),i.addEventListener("selectend",Y),i.addEventListener("squeeze",Y),i.addEventListener("squeezestart",Y),i.addEventListener("squeezeend",Y),i.addEventListener("end",V),i.addEventListener("inputsourceschange",A),b.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(y),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let K={antialias:i.renderState.layers===void 0?b.antialias:!0,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,K),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new nn(f.framebufferWidth,f.framebufferHeight,{format:hn,type:gi,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil})}else{let K=null,re=null,xe=null;b.depth&&(xe=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=b.stencil?Ns:Wi,re=b.stencil?Vi:di);let be={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:r};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(be),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),p=new nn(d.textureWidth,d.textureHeight,{format:hn,type:gi,depthTexture:new Ra(d.textureWidth,d.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0});let De=e.properties.get(p);De.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),ne.setContext(i),ne.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function A(q){for(let K=0;K<q.removed.length;K++){let re=q.removed[K],xe=x.indexOf(re);xe>=0&&(x[xe]=null,_[xe].disconnect(re))}for(let K=0;K<q.added.length;K++){let re=q.added[K],xe=x.indexOf(re);if(xe===-1){for(let De=0;De<_.length;De++)if(De>=x.length){x.push(re),xe=De;break}else if(x[De]===null){x[De]=re,xe=De;break}if(xe===-1)break}let be=_[xe];be&&be.connect(re)}}let L=new P,D=new P;function W(q,K,re){L.setFromMatrixPosition(K.matrixWorld),D.setFromMatrixPosition(re.matrixWorld);let xe=L.distanceTo(D),be=K.projectionMatrix.elements,De=re.projectionMatrix.elements,Ne=be[14]/(be[10]-1),we=be[14]/(be[10]+1),Ye=(be[9]+1)/be[5],k=(be[9]-1)/be[5],zt=(be[8]-1)/be[0],ye=(De[8]+1)/De[0],Le=Ne*zt,pe=Ne*ye,ct=xe/(-zt+ye),Oe=ct*-zt;K.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Oe),q.translateZ(ct),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();let T=Ne+ct,M=we+ct,H=Le-Oe,ee=pe+(xe-Oe),$=Ye*we/M*T,te=k*we/M*T;q.projectionMatrix.makePerspective(H,ee,$,te,T,M),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function F(q,K){K===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(K.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;v.near=C.near=w.near=q.near,v.far=C.far=w.far=q.far,(S!==v.near||N!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),S=v.near,N=v.far);let K=q.parent,re=v.cameras;F(v,K);for(let xe=0;xe<re.length;xe++)F(re[xe],K);re.length===2?W(v,w,C):v.projectionMatrix.copy(w.projectionMatrix),B(q,v,K)};function B(q,K,re){re===null?q.matrix.copy(K.matrixWorld):(q.matrix.copy(re.matrixWorld),q.matrix.invert(),q.matrix.multiply(K.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(K.projectionMatrix),q.projectionMatrixInverse.copy(K.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Os*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(q){c=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)};let j=null;function J(q,K){if(h=K.getViewerPose(l||a),g=K,h!==null){let re=h.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let xe=!1;re.length!==v.cameras.length&&(v.cameras.length=0,xe=!0);for(let be=0;be<re.length;be++){let De=re[be],Ne=null;if(f!==null)Ne=f.getViewport(De);else{let Ye=u.getViewSubImage(d,De);Ne=Ye.viewport,be===0&&(e.setRenderTargetTextures(p,Ye.colorTexture,d.ignoreDepthValues?void 0:Ye.depthStencilTexture),e.setRenderTarget(p))}let we=O[be];we===void 0&&(we=new xt,we.layers.enable(be),we.viewport=new Je,O[be]=we),we.matrix.fromArray(De.transform.matrix),we.matrix.decompose(we.position,we.quaternion,we.scale),we.projectionMatrix.fromArray(De.projectionMatrix),we.projectionMatrixInverse.copy(we.projectionMatrix).invert(),we.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),be===0&&(v.matrix.copy(we.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),xe===!0&&v.cameras.push(we)}}for(let re=0;re<_.length;re++){let xe=x[re],be=_[re];xe!==null&&be!==void 0&&be.update(xe,K,l||a)}j&&j(q,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),g=null}let ne=new Ku;ne.setAnimationLoop(J),this.setAnimationLoop=function(q){j=q},this.dispose=function(){}}};function Zb(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,ju(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,_,x,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),b(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,_,x):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===It&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===It&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let _=e.get(p).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let x=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*x,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,_,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===It&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function b(m,p){let _=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Qb(s,e,t,n){let i={},r={},a=[],o=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(_,x){let y=x.program;n.uniformBlockBinding(_,y)}function l(_,x){let y=i[_.id];y===void 0&&(g(_),y=h(_),i[_.id]=y,_.addEventListener("dispose",m));let R=x.program;n.updateUBOMapping(_,R);let w=e.render.frame;r[_.id]!==w&&(d(_),r[_.id]=w)}function h(_){let x=u();_.__bindingPointIndex=x;let y=s.createBuffer(),R=_.__size,w=_.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,R,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,y),y}function u(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){let x=i[_.id],y=_.uniforms,R=_.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let w=0,C=y.length;w<C;w++){let O=Array.isArray(y[w])?y[w]:[y[w]];for(let v=0,S=O.length;v<S;v++){let N=O[v];if(f(N,w,v,R)===!0){let Y=N.__offset,V=Array.isArray(N.value)?N.value:[N.value],A=0;for(let L=0;L<V.length;L++){let D=V[L],W=b(D);typeof D=="number"||typeof D=="boolean"?(N.__data[0]=D,s.bufferSubData(s.UNIFORM_BUFFER,Y+A,N.__data)):D.isMatrix3?(N.__data[0]=D.elements[0],N.__data[1]=D.elements[1],N.__data[2]=D.elements[2],N.__data[3]=0,N.__data[4]=D.elements[3],N.__data[5]=D.elements[4],N.__data[6]=D.elements[5],N.__data[7]=0,N.__data[8]=D.elements[6],N.__data[9]=D.elements[7],N.__data[10]=D.elements[8],N.__data[11]=0):(D.toArray(N.__data,A),A+=W.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,Y,N.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(_,x,y,R){let w=_.value,C=x+"_"+y;if(R[C]===void 0)return typeof w=="number"||typeof w=="boolean"?R[C]=w:R[C]=w.clone(),!0;{let O=R[C];if(typeof w=="number"||typeof w=="boolean"){if(O!==w)return R[C]=w,!0}else if(O.equals(w)===!1)return O.copy(w),!0}return!1}function g(_){let x=_.uniforms,y=0,R=16;for(let C=0,O=x.length;C<O;C++){let v=Array.isArray(x[C])?x[C]:[x[C]];for(let S=0,N=v.length;S<N;S++){let Y=v[S],V=Array.isArray(Y.value)?Y.value:[Y.value];for(let A=0,L=V.length;A<L;A++){let D=V[A],W=b(D),F=y%R;F!==0&&R-F<W.boundary&&(y+=R-F),Y.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=y,y+=W.storage}}}let w=y%R;return w>0&&(y+=R-w),_.__size=y,_.__cache={},this}function b(_){let x={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(x.boundary=4,x.storage=4):_.isVector2?(x.boundary=8,x.storage=8):_.isVector3||_.isColor?(x.boundary=16,x.storage=12):_.isVector4?(x.boundary=16,x.storage=16):_.isMatrix3?(x.boundary=48,x.storage=48):_.isMatrix4?(x.boundary=64,x.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),x}function m(_){let x=_.target;x.removeEventListener("dispose",m);let y=a.indexOf(x.__bindingPointIndex);a.splice(y,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function p(){for(let _ in i)s.deleteBuffer(i[_]);a=[],i={},r={}}return{bind:c,update:l,dispose:p}}var xr=class{constructor(e={}){let{canvas:t=op(),context:n=null,depth:i=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;let f=new Uint32Array(4),g=new Int32Array(4),b=null,m=null,p=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=$e,this._useLegacyLights=!1,this.toneMapping=mi,this.toneMappingExposure=1;let x=this,y=!1,R=0,w=0,C=null,O=-1,v=null,S=new Je,N=new Je,Y=null,V=new Z(0),A=0,L=t.width,D=t.height,W=1,F=null,B=null,j=new Je(0,0,L,D),J=new Je(0,0,L,D),ne=!1,q=new br,K=!1,re=!1,xe=null,be=new Re,De=new ue,Ne=new P,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ye(){return C===null?W:1}let k=n;function zt(E,U){for(let G=0;G<E.length;G++){let X=E[G],z=t.getContext(X,U);if(z!==null)return z}return null}try{let E={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",ie,!1),t.addEventListener("webglcontextrestored",I,!1),t.addEventListener("webglcontextcreationerror",ae,!1),k===null){let U=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&U.shift(),k=zt(U,E),k===null)throw zt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&k instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),k.getShaderPrecisionFormat===void 0&&(k.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let ye,Le,pe,ct,Oe,T,M,H,ee,$,te,me,ce,de,Ee,Be,Q,et,We,Pe,ve,fe,Fe,Qe;function dt(){ye=new b0(k),Le=new u0(k,ye,e),ye.init(Le),fe=new Kb(k,ye,Le),pe=new Yb(k,ye,Le),ct=new v0(k),Oe=new Nb,T=new jb(k,ye,pe,Oe,Le,fe,ct),M=new f0(x),H=new g0(x),ee=new Rp(k,Le),Fe=new l0(k,ye,ee,Le),$=new x0(k,ee,ct,Fe),te=new E0(k,$,ee,ct),We=new S0(k,Le,T),Be=new d0(Oe),me=new Ub(x,M,H,ye,Le,Fe,Be),ce=new Zb(x,Oe),de=new Ob,Ee=new Vb(ye,Le),et=new c0(x,M,H,pe,te,d,c),Q=new qb(x,te,Le),Qe=new Qb(k,ct,Le,pe),Pe=new h0(k,ye,ct,Le),ve=new _0(k,ye,ct,Le),ct.programs=me.programs,x.capabilities=Le,x.extensions=ye,x.properties=Oe,x.renderLists=de,x.shadowMap=Q,x.state=pe,x.info=ct}dt();let He=new bc(x,k);this.xr=He,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let E=ye.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=ye.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(E){E!==void 0&&(W=E,this.setSize(L,D,!1))},this.getSize=function(E){return E.set(L,D)},this.setSize=function(E,U,G=!0){if(He.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=E,D=U,t.width=Math.floor(E*W),t.height=Math.floor(U*W),G===!0&&(t.style.width=E+"px",t.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(L*W,D*W).floor()},this.setDrawingBufferSize=function(E,U,G){L=E,D=U,W=G,t.width=Math.floor(E*G),t.height=Math.floor(U*G),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(S)},this.getViewport=function(E){return E.copy(j)},this.setViewport=function(E,U,G,X){E.isVector4?j.set(E.x,E.y,E.z,E.w):j.set(E,U,G,X),pe.viewport(S.copy(j).multiplyScalar(W).floor())},this.getScissor=function(E){return E.copy(J)},this.setScissor=function(E,U,G,X){E.isVector4?J.set(E.x,E.y,E.z,E.w):J.set(E,U,G,X),pe.scissor(N.copy(J).multiplyScalar(W).floor())},this.getScissorTest=function(){return ne},this.setScissorTest=function(E){pe.setScissorTest(ne=E)},this.setOpaqueSort=function(E){F=E},this.setTransparentSort=function(E){B=E},this.getClearColor=function(E){return E.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor.apply(et,arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha.apply(et,arguments)},this.clear=function(E=!0,U=!0,G=!0){let X=0;if(E){let z=!1;if(C!==null){let he=C.texture.format;z=he===zu||he===ku||he===Bu}if(z){let he=C.texture.type,ge=he===gi||he===di||he===Fc||he===Vi||he===Fu||he===Ou,Se=et.getClearColor(),Ce=et.getClearAlpha(),ke=Se.r,Ie=Se.g,Ue=Se.b;ge?(f[0]=ke,f[1]=Ie,f[2]=Ue,f[3]=Ce,k.clearBufferuiv(k.COLOR,0,f)):(g[0]=ke,g[1]=Ie,g[2]=Ue,g[3]=Ce,k.clearBufferiv(k.COLOR,0,g))}else X|=k.COLOR_BUFFER_BIT}U&&(X|=k.DEPTH_BUFFER_BIT),G&&(X|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ie,!1),t.removeEventListener("webglcontextrestored",I,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),de.dispose(),Ee.dispose(),Oe.dispose(),M.dispose(),H.dispose(),te.dispose(),Fe.dispose(),Qe.dispose(),me.dispose(),He.dispose(),He.removeEventListener("sessionstart",Ht),He.removeEventListener("sessionend",st),xe&&(xe.dispose(),xe=null),Gt.stop()};function ie(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;let E=ct.autoReset,U=Q.enabled,G=Q.autoUpdate,X=Q.needsUpdate,z=Q.type;dt(),ct.autoReset=E,Q.enabled=U,Q.autoUpdate=G,Q.needsUpdate=X,Q.type=z}function ae(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function oe(E){let U=E.target;U.removeEventListener("dispose",oe),Te(U)}function Te(E){Me(E),Oe.remove(E)}function Me(E){let U=Oe.get(E).programs;U!==void 0&&(U.forEach(function(G){me.releaseProgram(G)}),E.isShaderMaterial&&me.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,G,X,z,he){U===null&&(U=we);let ge=z.isMesh&&z.matrixWorld.determinant()<0,Se=Wd(E,U,G,X,z);pe.setMaterial(X,ge);let Ce=G.index,ke=1;if(X.wireframe===!0){if(Ce=$.getWireframeAttribute(G),Ce===void 0)return;ke=2}let Ie=G.drawRange,Ue=G.attributes.position,gt=Ie.start*ke,Qt=(Ie.start+Ie.count)*ke;he!==null&&(gt=Math.max(gt,he.start*ke),Qt=Math.min(Qt,(he.start+he.count)*ke)),Ce!==null?(gt=Math.max(gt,0),Qt=Math.min(Qt,Ce.count)):Ue!=null&&(gt=Math.max(gt,0),Qt=Math.min(Qt,Ue.count));let At=Qt-gt;if(At<0||At===1/0)return;Fe.setup(z,X,Se,G,Ce);let Hn,lt=Pe;if(Ce!==null&&(Hn=ee.get(Ce),lt=ve,lt.setIndex(Hn)),z.isMesh)X.wireframe===!0?(pe.setLineWidth(X.wireframeLinewidth*Ye()),lt.setMode(k.LINES)):lt.setMode(k.TRIANGLES);else if(z.isLine){let Ge=X.linewidth;Ge===void 0&&(Ge=1),pe.setLineWidth(Ge*Ye()),z.isLineSegments?lt.setMode(k.LINES):z.isLineLoop?lt.setMode(k.LINE_LOOP):lt.setMode(k.LINE_STRIP)}else z.isPoints?lt.setMode(k.POINTS):z.isSprite&&lt.setMode(k.TRIANGLES);if(z.isBatchedMesh)lt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else if(z.isInstancedMesh)lt.renderInstances(gt,At,z.count);else if(G.isInstancedBufferGeometry){let Ge=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,fo=Math.min(G.instanceCount,Ge);lt.renderInstances(gt,At,fo)}else lt.render(gt,At)};function nt(E,U,G){E.transparent===!0&&E.side===pt&&E.forceSinglePass===!1?(E.side=It,E.needsUpdate=!0,Ur(E,U,G),E.side=Dn,E.needsUpdate=!0,Ur(E,U,G),E.side=pt):Ur(E,U,G)}this.compile=function(E,U,G=null){G===null&&(G=E),m=Ee.get(G),m.init(),_.push(m),G.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),E!==G&&E.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),m.setupLights(x._useLegacyLights);let X=new Set;return E.traverse(function(z){let he=z.material;if(he)if(Array.isArray(he))for(let ge=0;ge<he.length;ge++){let Se=he[ge];nt(Se,G,z),X.add(Se)}else nt(he,G,z),X.add(he)}),_.pop(),m=null,X},this.compileAsync=function(E,U,G=null){let X=this.compile(E,U,G);return new Promise(z=>{function he(){if(X.forEach(function(ge){Oe.get(ge).currentProgram.isReady()&&X.delete(ge)}),X.size===0){z(E);return}setTimeout(he,10)}ye.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let it=null;function Tt(E){it&&it(E)}function Ht(){Gt.stop()}function st(){Gt.start()}let Gt=new Ku;Gt.setAnimationLoop(Tt),typeof self<"u"&&Gt.setContext(self),this.setAnimationLoop=function(E){it=E,He.setAnimationLoop(E),E===null?Gt.stop():Gt.start()},He.addEventListener("sessionstart",Ht),He.addEventListener("sessionend",st),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),He.enabled===!0&&He.isPresenting===!0&&(He.cameraAutoUpdate===!0&&He.updateCamera(U),U=He.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,U,C),m=Ee.get(E,_.length),m.init(),_.push(m),be.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),q.setFromProjectionMatrix(be),re=this.localClippingEnabled,K=Be.init(this.clippingPlanes,re),b=de.get(E,p.length),b.init(),p.push(b),Pn(E,U,0,x.sortObjects),b.finish(),x.sortObjects===!0&&b.sort(F,B),this.info.render.frame++,K===!0&&Be.beginShadows();let G=m.state.shadowsArray;if(Q.render(G,E,U),K===!0&&Be.endShadows(),this.info.autoReset===!0&&this.info.reset(),et.render(b,E),m.setupLights(x._useLegacyLights),U.isArrayCamera){let X=U.cameras;for(let z=0,he=X.length;z<he;z++){let ge=X[z];zl(b,E,ge,ge.viewport)}}else zl(b,E,U);C!==null&&(T.updateMultisampleRenderTarget(C),T.updateRenderTargetMipmap(C)),E.isScene===!0&&E.onAfterRender(x,E,U),Fe.resetDefaultState(),O=-1,v=null,_.pop(),_.length>0?m=_[_.length-1]:m=null,p.pop(),p.length>0?b=p[p.length-1]:b=null};function Pn(E,U,G,X){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)G=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||q.intersectsSprite(E)){X&&Ne.setFromMatrixPosition(E.matrixWorld).applyMatrix4(be);let ge=te.update(E),Se=E.material;Se.visible&&b.push(E,ge,Se,G,Ne.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||q.intersectsObject(E))){let ge=te.update(E),Se=E.material;if(X&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ne.copy(E.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),Ne.copy(ge.boundingSphere.center)),Ne.applyMatrix4(E.matrixWorld).applyMatrix4(be)),Array.isArray(Se)){let Ce=ge.groups;for(let ke=0,Ie=Ce.length;ke<Ie;ke++){let Ue=Ce[ke],gt=Se[Ue.materialIndex];gt&&gt.visible&&b.push(E,ge,gt,G,Ne.z,Ue)}}else Se.visible&&b.push(E,ge,Se,G,Ne.z,null)}}let he=E.children;for(let ge=0,Se=he.length;ge<Se;ge++)Pn(he[ge],U,G,X)}function zl(E,U,G,X){let z=E.opaque,he=E.transmissive,ge=E.transparent;m.setupLightsView(G),K===!0&&Be.setGlobalState(x.clippingPlanes,G),he.length>0&&Vd(z,he,U,G),X&&pe.viewport(S.copy(X)),z.length>0&&Dr(z,U,G),he.length>0&&Dr(he,U,G),ge.length>0&&Dr(ge,U,G),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function Vd(E,U,G,X){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;let he=Le.isWebGL2;xe===null&&(xe=new nn(1,1,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")?qi:gi,minFilter:bi,samples:he?4:0})),x.getDrawingBufferSize(De),he?xe.setSize(De.x,De.y):xe.setSize(xa(De.x),xa(De.y));let ge=x.getRenderTarget();x.setRenderTarget(xe),x.getClearColor(V),A=x.getClearAlpha(),A<1&&x.setClearColor(16777215,.5),x.clear();let Se=x.toneMapping;x.toneMapping=mi,Dr(E,G,X),T.updateMultisampleRenderTarget(xe),T.updateRenderTargetMipmap(xe);let Ce=!1;for(let ke=0,Ie=U.length;ke<Ie;ke++){let Ue=U[ke],gt=Ue.object,Qt=Ue.geometry,At=Ue.material,Hn=Ue.group;if(At.side===pt&&gt.layers.test(X.layers)){let lt=At.side;At.side=It,At.needsUpdate=!0,Hl(gt,G,X,Qt,At,Hn),At.side=lt,At.needsUpdate=!0,Ce=!0}}Ce===!0&&(T.updateMultisampleRenderTarget(xe),T.updateRenderTargetMipmap(xe)),x.setRenderTarget(ge),x.setClearColor(V,A),x.toneMapping=Se}function Dr(E,U,G){let X=U.isScene===!0?U.overrideMaterial:null;for(let z=0,he=E.length;z<he;z++){let ge=E[z],Se=ge.object,Ce=ge.geometry,ke=X===null?ge.material:X,Ie=ge.group;Se.layers.test(G.layers)&&Hl(Se,U,G,Ce,ke,Ie)}}function Hl(E,U,G,X,z,he){E.onBeforeRender(x,U,G,X,z,he),E.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),z.onBeforeRender(x,U,G,X,E,he),z.transparent===!0&&z.side===pt&&z.forceSinglePass===!1?(z.side=It,z.needsUpdate=!0,x.renderBufferDirect(G,U,X,z,E,he),z.side=Dn,z.needsUpdate=!0,x.renderBufferDirect(G,U,X,z,E,he),z.side=pt):x.renderBufferDirect(G,U,X,z,E,he),E.onAfterRender(x,U,G,X,z,he)}function Ur(E,U,G){U.isScene!==!0&&(U=we);let X=Oe.get(E),z=m.state.lights,he=m.state.shadowsArray,ge=z.state.version,Se=me.getParameters(E,z.state,he,U,G),Ce=me.getProgramCacheKey(Se),ke=X.programs;X.environment=E.isMeshStandardMaterial?U.environment:null,X.fog=U.fog,X.envMap=(E.isMeshStandardMaterial?H:M).get(E.envMap||X.environment),ke===void 0&&(E.addEventListener("dispose",oe),ke=new Map,X.programs=ke);let Ie=ke.get(Ce);if(Ie!==void 0){if(X.currentProgram===Ie&&X.lightsStateVersion===ge)return Vl(E,Se),Ie}else Se.uniforms=me.getUniforms(E),E.onBuild(G,Se,x),E.onBeforeCompile(Se,x),Ie=me.acquireProgram(Se,Ce),ke.set(Ce,Ie),X.uniforms=Se.uniforms;let Ue=X.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ue.clippingPlanes=Be.uniform),Vl(E,Se),X.needsLights=qd(E),X.lightsStateVersion=ge,X.needsLights&&(Ue.ambientLightColor.value=z.state.ambient,Ue.lightProbe.value=z.state.probe,Ue.directionalLights.value=z.state.directional,Ue.directionalLightShadows.value=z.state.directionalShadow,Ue.spotLights.value=z.state.spot,Ue.spotLightShadows.value=z.state.spotShadow,Ue.rectAreaLights.value=z.state.rectArea,Ue.ltc_1.value=z.state.rectAreaLTC1,Ue.ltc_2.value=z.state.rectAreaLTC2,Ue.pointLights.value=z.state.point,Ue.pointLightShadows.value=z.state.pointShadow,Ue.hemisphereLights.value=z.state.hemi,Ue.directionalShadowMap.value=z.state.directionalShadowMap,Ue.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ue.spotShadowMap.value=z.state.spotShadowMap,Ue.spotLightMatrix.value=z.state.spotLightMatrix,Ue.spotLightMap.value=z.state.spotLightMap,Ue.pointShadowMap.value=z.state.pointShadowMap,Ue.pointShadowMatrix.value=z.state.pointShadowMatrix),X.currentProgram=Ie,X.uniformsList=null,Ie}function Gl(E){if(E.uniformsList===null){let U=E.currentProgram.getUniforms();E.uniformsList=Is.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function Vl(E,U){let G=Oe.get(E);G.outputColorSpace=U.outputColorSpace,G.batching=U.batching,G.instancing=U.instancing,G.instancingColor=U.instancingColor,G.skinning=U.skinning,G.morphTargets=U.morphTargets,G.morphNormals=U.morphNormals,G.morphColors=U.morphColors,G.morphTargetsCount=U.morphTargetsCount,G.numClippingPlanes=U.numClippingPlanes,G.numIntersection=U.numClipIntersection,G.vertexAlphas=U.vertexAlphas,G.vertexTangents=U.vertexTangents,G.toneMapping=U.toneMapping}function Wd(E,U,G,X,z){U.isScene!==!0&&(U=we),T.resetTextureUnits();let he=U.fog,ge=X.isMeshStandardMaterial?U.environment:null,Se=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Mt,Ce=(X.isMeshStandardMaterial?H:M).get(X.envMap||ge),ke=X.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ie=!!G.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ue=!!G.morphAttributes.position,gt=!!G.morphAttributes.normal,Qt=!!G.morphAttributes.color,At=mi;X.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(At=x.toneMapping);let Hn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,lt=Hn!==void 0?Hn.length:0,Ge=Oe.get(X),fo=m.state.lights;if(K===!0&&(re===!0||E!==v)){let cn=E===v&&X.id===O;Be.setState(X,E,cn)}let ft=!1;X.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==fo.state.version||Ge.outputColorSpace!==Se||z.isBatchedMesh&&Ge.batching===!1||!z.isBatchedMesh&&Ge.batching===!0||z.isInstancedMesh&&Ge.instancing===!1||!z.isInstancedMesh&&Ge.instancing===!0||z.isSkinnedMesh&&Ge.skinning===!1||!z.isSkinnedMesh&&Ge.skinning===!0||z.isInstancedMesh&&Ge.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ge.instancingColor===!1&&z.instanceColor!==null||Ge.envMap!==Ce||X.fog===!0&&Ge.fog!==he||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==Be.numPlanes||Ge.numIntersection!==Be.numIntersection)||Ge.vertexAlphas!==ke||Ge.vertexTangents!==Ie||Ge.morphTargets!==Ue||Ge.morphNormals!==gt||Ge.morphColors!==Qt||Ge.toneMapping!==At||Le.isWebGL2===!0&&Ge.morphTargetsCount!==lt)&&(ft=!0):(ft=!0,Ge.__version=X.version);let Di=Ge.currentProgram;ft===!0&&(Di=Ur(X,U,z));let Wl=!1,$s=!1,po=!1,Nt=Di.getUniforms(),Ui=Ge.uniforms;if(pe.useProgram(Di.program)&&(Wl=!0,$s=!0,po=!0),X.id!==O&&(O=X.id,$s=!0),Wl||v!==E){Nt.setValue(k,"projectionMatrix",E.projectionMatrix),Nt.setValue(k,"viewMatrix",E.matrixWorldInverse);let cn=Nt.map.cameraPosition;cn!==void 0&&cn.setValue(k,Ne.setFromMatrixPosition(E.matrixWorld)),Le.logarithmicDepthBuffer&&Nt.setValue(k,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Nt.setValue(k,"isOrthographic",E.isOrthographicCamera===!0),v!==E&&(v=E,$s=!0,po=!0)}if(z.isSkinnedMesh){Nt.setOptional(k,z,"bindMatrix"),Nt.setOptional(k,z,"bindMatrixInverse");let cn=z.skeleton;cn&&(Le.floatVertexTextures?(cn.boneTexture===null&&cn.computeBoneTexture(),Nt.setValue(k,"boneTexture",cn.boneTexture,T)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}z.isBatchedMesh&&(Nt.setOptional(k,z,"batchingTexture"),Nt.setValue(k,"batchingTexture",z._matricesTexture,T));let mo=G.morphAttributes;if((mo.position!==void 0||mo.normal!==void 0||mo.color!==void 0&&Le.isWebGL2===!0)&&We.update(z,G,Di),($s||Ge.receiveShadow!==z.receiveShadow)&&(Ge.receiveShadow=z.receiveShadow,Nt.setValue(k,"receiveShadow",z.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Ui.envMap.value=Ce,Ui.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),$s&&(Nt.setValue(k,"toneMappingExposure",x.toneMappingExposure),Ge.needsLights&&Xd(Ui,po),he&&X.fog===!0&&ce.refreshFogUniforms(Ui,he),ce.refreshMaterialUniforms(Ui,X,W,D,xe),Is.upload(k,Gl(Ge),Ui,T)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Is.upload(k,Gl(Ge),Ui,T),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Nt.setValue(k,"center",z.center),Nt.setValue(k,"modelViewMatrix",z.modelViewMatrix),Nt.setValue(k,"normalMatrix",z.normalMatrix),Nt.setValue(k,"modelMatrix",z.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){let cn=X.uniformsGroups;for(let go=0,Yd=cn.length;go<Yd;go++)if(Le.isWebGL2){let Xl=cn[go];Qe.update(Xl,Di),Qe.bind(Xl,Di)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Di}function Xd(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function qd(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(E,U,G){Oe.get(E.texture).__webglTexture=U,Oe.get(E.depthTexture).__webglTexture=G;let X=Oe.get(E);X.__hasExternalTextures=!0,X.__hasExternalTextures&&(X.__autoAllocateDepthBuffer=G===void 0,X.__autoAllocateDepthBuffer||ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,U){let G=Oe.get(E);G.__webglFramebuffer=U,G.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,G=0){C=E,R=U,w=G;let X=!0,z=null,he=!1,ge=!1;if(E){let Ce=Oe.get(E);Ce.__useDefaultFramebuffer!==void 0?(pe.bindFramebuffer(k.FRAMEBUFFER,null),X=!1):Ce.__webglFramebuffer===void 0?T.setupRenderTarget(E):Ce.__hasExternalTextures&&T.rebindTextures(E,Oe.get(E.texture).__webglTexture,Oe.get(E.depthTexture).__webglTexture);let ke=E.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(ge=!0);let Ie=Oe.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ie[U])?z=Ie[U][G]:z=Ie[U],he=!0):Le.isWebGL2&&E.samples>0&&T.useMultisampledRTT(E)===!1?z=Oe.get(E).__webglMultisampledFramebuffer:Array.isArray(Ie)?z=Ie[G]:z=Ie,S.copy(E.viewport),N.copy(E.scissor),Y=E.scissorTest}else S.copy(j).multiplyScalar(W).floor(),N.copy(J).multiplyScalar(W).floor(),Y=ne;if(pe.bindFramebuffer(k.FRAMEBUFFER,z)&&Le.drawBuffers&&X&&pe.drawBuffers(E,z),pe.viewport(S),pe.scissor(N),pe.setScissorTest(Y),he){let Ce=Oe.get(E.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ce.__webglTexture,G)}else if(ge){let Ce=Oe.get(E.texture),ke=U||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ce.__webglTexture,G||0,ke)}O=-1},this.readRenderTargetPixels=function(E,U,G,X,z,he,ge){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=Oe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ge!==void 0&&(Se=Se[ge]),Se){pe.bindFramebuffer(k.FRAMEBUFFER,Se);try{let Ce=E.texture,ke=Ce.format,Ie=Ce.type;if(ke!==hn&&fe.convert(ke)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Ue=Ie===qi&&(ye.has("EXT_color_buffer_half_float")||Le.isWebGL2&&ye.has("EXT_color_buffer_float"));if(Ie!==gi&&fe.convert(Ie)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ie===Kn&&(Le.isWebGL2||ye.has("OES_texture_float")||ye.has("WEBGL_color_buffer_float")))&&!Ue){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-X&&G>=0&&G<=E.height-z&&k.readPixels(U,G,X,z,fe.convert(ke),fe.convert(Ie),he)}finally{let Ce=C!==null?Oe.get(C).__webglFramebuffer:null;pe.bindFramebuffer(k.FRAMEBUFFER,Ce)}}},this.copyFramebufferToTexture=function(E,U,G=0){let X=Math.pow(2,-G),z=Math.floor(U.image.width*X),he=Math.floor(U.image.height*X);T.setTexture2D(U,0),k.copyTexSubImage2D(k.TEXTURE_2D,G,0,0,E.x,E.y,z,he),pe.unbindTexture()},this.copyTextureToTexture=function(E,U,G,X=0){let z=U.image.width,he=U.image.height,ge=fe.convert(G.format),Se=fe.convert(G.type);T.setTexture2D(G,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,G.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,G.unpackAlignment),U.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,X,E.x,E.y,z,he,ge,Se,U.image.data):U.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,X,E.x,E.y,U.mipmaps[0].width,U.mipmaps[0].height,ge,U.mipmaps[0].data):k.texSubImage2D(k.TEXTURE_2D,X,E.x,E.y,ge,Se,U.image),X===0&&G.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),pe.unbindTexture()},this.copyTextureToTexture3D=function(E,U,G,X,z=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let he=E.max.x-E.min.x+1,ge=E.max.y-E.min.y+1,Se=E.max.z-E.min.z+1,Ce=fe.convert(X.format),ke=fe.convert(X.type),Ie;if(X.isData3DTexture)T.setTexture3D(X,0),Ie=k.TEXTURE_3D;else if(X.isDataArrayTexture||X.isCompressedArrayTexture)T.setTexture2DArray(X,0),Ie=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,X.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,X.unpackAlignment);let Ue=k.getParameter(k.UNPACK_ROW_LENGTH),gt=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Qt=k.getParameter(k.UNPACK_SKIP_PIXELS),At=k.getParameter(k.UNPACK_SKIP_ROWS),Hn=k.getParameter(k.UNPACK_SKIP_IMAGES),lt=G.isCompressedTexture?G.mipmaps[z]:G.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,lt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,lt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,E.min.x),k.pixelStorei(k.UNPACK_SKIP_ROWS,E.min.y),k.pixelStorei(k.UNPACK_SKIP_IMAGES,E.min.z),G.isDataTexture||G.isData3DTexture?k.texSubImage3D(Ie,z,U.x,U.y,U.z,he,ge,Se,Ce,ke,lt.data):G.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),k.compressedTexSubImage3D(Ie,z,U.x,U.y,U.z,he,ge,Se,Ce,lt.data)):k.texSubImage3D(Ie,z,U.x,U.y,U.z,he,ge,Se,Ce,ke,lt),k.pixelStorei(k.UNPACK_ROW_LENGTH,Ue),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,gt),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Qt),k.pixelStorei(k.UNPACK_SKIP_ROWS,At),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Hn),z===0&&X.generateMipmaps&&k.generateMipmap(Ie),pe.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?T.setTextureCube(E,0):E.isData3DTexture?T.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?T.setTexture2DArray(E,0):T.setTexture2D(E,0),pe.unbindTexture()},this.resetState=function(){R=0,w=0,C=null,pe.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Bc?"display-p3":"srgb",t.unpackColorSpace=Ke.workingColorSpace===Va?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===$e?Xi:Vu}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Xi?$e:Mt}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},xc=class extends xr{};xc.prototype.isWebGL1Renderer=!0;var Ca=class s{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Z(e),this.density=t}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var vi=class extends at{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},Hs=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=tc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=wn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Vt=new P,Ki=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=In(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=In(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=In(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=In(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),i=tt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),i=tt(i,this.array),r=tt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new ze(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ji=class extends Dt{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Z(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ss,sr=new P,Es=new P,ws=new P,Ts=new ue,rr=new ue,td=new Re,ia=new P,ar=new P,sa=new P,du=new ue,Xo=new ue,fu=new ue,Gs=class extends at{constructor(e=new Ji){if(super(),this.isSprite=!0,this.type="Sprite",Ss===void 0){Ss=new qe;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Hs(t,5);Ss.setIndex([0,1,2,0,2,3]),Ss.setAttribute("position",new Ki(n,3,0,!1)),Ss.setAttribute("uv",new Ki(n,2,3,!1))}this.geometry=Ss,this.material=e,this.center=new ue(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Es.setFromMatrixScale(this.matrixWorld),td.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ws.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Es.multiplyScalar(-ws.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let a=this.center;ra(ia.set(-.5,-.5,0),ws,a,Es,i,r),ra(ar.set(.5,-.5,0),ws,a,Es,i,r),ra(sa.set(.5,.5,0),ws,a,Es,i,r),du.set(0,0),Xo.set(1,0),fu.set(1,1);let o=e.ray.intersectTriangle(ia,ar,sa,!1,sr);if(o===null&&(ra(ar.set(-.5,.5,0),ws,a,Es,i,r),Xo.set(0,1),o=e.ray.intersectTriangle(ia,sa,ar,!1,sr),o===null))return;let c=e.ray.origin.distanceTo(sr);c<e.near||c>e.far||t.push({distance:c,point:sr.clone(),uv:Gi.getInterpolation(sr,ia,ar,sa,du,Xo,fu,new ue),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function ra(s,e,t,n,i,r){Ts.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(rr.x=r*Ts.x-i*Ts.y,rr.y=i*Ts.x+r*Ts.y):rr.copy(Ts),s.copy(e),s.x+=rr.x,s.y+=rr.y,s.applyMatrix4(td)}var pu=new P,mu=new Je,gu=new Je,$b=new P,bu=new Re,aa=new P,qo=new sn,xu=new Re,Yo=new Bs,Pa=class extends Ze{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Zl,this.bindMatrix=new Re,this.bindMatrixInverse=new Re,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new qt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,aa),this.boundingBox.expandByPoint(aa)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new sn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,aa),this.boundingSphere.expandByPoint(aa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qo.copy(this.boundingSphere),qo.applyMatrix4(i),e.ray.intersectsSphere(qo)!==!1&&(xu.copy(i).invert(),Yo.copy(e.ray).applyMatrix4(xu),!(this.boundingBox!==null&&Yo.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Yo)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Je,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Zl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Af?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;mu.fromBufferAttribute(i.attributes.skinIndex,e),gu.fromBufferAttribute(i.attributes.skinWeight,e),pu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let a=gu.getComponent(r);if(a!==0){let o=mu.getComponent(r);bu.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector($b.copy(pu).applyMatrix4(bu),a)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},_r=class extends at{constructor(){super(),this.isBone=!0,this.type="Bone"}},_c=class extends Ct{constructor(e=null,t=1,n=1,i,r,a,o,c,l=bt,h=bt,u,d){super(null,a,o,c,l,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},_u=new Re,ex=new Re,La=class s{constructor(e=[],t=[]){this.uuid=wn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Re)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Re;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:ex;_u.multiplyMatrices(o,t[r]),_u.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new _c(t,e,e,hn,Kn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new _r),this.bones.push(a),this.boneInverses.push(new Re().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let a=t[i];e.bones.push(a.uuid);let o=n[i];e.boneInverses.push(o.toArray())}return e}},Zn=class extends ze{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},As=new Re,vu=new Re,oa=[],yu=new qt,tx=new Re,or=new Ze,cr=new sn,dn=class extends Ze{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Zn(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,tx)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new qt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,As),yu.copy(e.boundingBox).applyMatrix4(As),this.boundingBox.union(yu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new sn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,As),cr.copy(e.boundingSphere).applyMatrix4(As),this.boundingSphere.union(cr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,i=this.count;if(or.geometry=this.geometry,or.material=this.material,or.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),cr.copy(this.boundingSphere),cr.applyMatrix4(n),e.ray.intersectsSphere(cr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,As),vu.multiplyMatrices(n,As),or.matrixWorld=vu,or.raycast(e,oa);for(let a=0,o=oa.length;a<o;a++){let c=oa[a];c.instanceId=r,c.object=this,t.push(c)}oa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Zn(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var Zi=class extends Dt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Z(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Mu=new P,Su=new P,Eu=new Re,jo=new Bs,ca=new sn,Vs=class extends at{constructor(e=new qe,t=new Zi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Mu.fromBufferAttribute(t,i-1),Su.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Mu.distanceTo(Su);e.setAttribute("lineDistance",new je(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ca.copy(n.boundingSphere),ca.applyMatrix4(i),ca.radius+=r,e.ray.intersectsSphere(ca)===!1)return;Eu.copy(i).invert(),jo.copy(e.ray).applyMatrix4(Eu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=new P,h=new P,u=new P,d=new P,f=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){let p=Math.max(0,a.start),_=Math.min(g.count,a.start+a.count);for(let x=p,y=_-1;x<y;x+=f){let R=g.getX(x),w=g.getX(x+1);if(l.fromBufferAttribute(m,R),h.fromBufferAttribute(m,w),jo.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);let O=e.ray.origin.distanceTo(d);O<e.near||O>e.far||t.push({distance:O,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,a.start),_=Math.min(m.count,a.start+a.count);for(let x=p,y=_-1;x<y;x+=f){if(l.fromBufferAttribute(m,x),h.fromBufferAttribute(m,x+1),jo.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);let w=e.ray.origin.distanceTo(d);w<e.near||w>e.far||t.push({distance:w,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}},wu=new P,Tu=new P,yi=class extends Vs{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)wu.fromBufferAttribute(t,i),Tu.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+wu.distanceTo(Tu);e.setAttribute("lineDistance",new je(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ia=class extends Vs{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Qn=class extends Dt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Z(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Au=new Re,vc=new Bs,la=new sn,ha=new P,On=class extends at{constructor(e=new qe,t=new Qn){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),la.copy(n.boundingSphere),la.applyMatrix4(i),la.radius+=r,e.ray.intersectsSphere(la)===!1)return;Au.copy(i).invert(),vc.copy(e.ray).applyMatrix4(Au);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=d,b=f;g<b;g++){let m=l.getX(g);ha.fromBufferAttribute(u,m),Ru(ha,m,c,i,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,b=f;g<b;g++)ha.fromBufferAttribute(u,g),Ru(ha,g,c,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ru(s,e,t,n,i,r,a){let o=vc.distanceSqToPoint(s);if(o<t){let c=new P;vc.closestPointToPoint(s,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,object:a})}}var Da=class extends Ct{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=bt,this.minFilter=bt,this.generateMipmaps=!1,this.needsUpdate=!0}};var Mi=class extends Ct{constructor(e,t,n,i,r,a,o,c,l){super(e,t,n,i,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Qi=class s extends qe{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,b=[],m=n/2,p=0;_(),a===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new je(u,3)),this.setAttribute("normal",new je(d,3)),this.setAttribute("uv",new je(f,2));function _(){let y=new P,R=new P,w=0,C=(t-e)/n;for(let O=0;O<=r;O++){let v=[],S=O/r,N=S*(t-e)+e;for(let Y=0;Y<=i;Y++){let V=Y/i,A=V*c+o,L=Math.sin(A),D=Math.cos(A);R.x=N*L,R.y=-S*n+m,R.z=N*D,u.push(R.x,R.y,R.z),y.set(L,C,D).normalize(),d.push(y.x,y.y,y.z),f.push(V,1-S),v.push(g++)}b.push(v)}for(let O=0;O<i;O++)for(let v=0;v<r;v++){let S=b[v][O],N=b[v+1][O],Y=b[v+1][O+1],V=b[v][O+1];h.push(S,N,V),h.push(N,Y,V),w+=6}l.addGroup(p,w,0),p+=w}function x(y){let R=g,w=new ue,C=new P,O=0,v=y===!0?e:t,S=y===!0?1:-1;for(let Y=1;Y<=i;Y++)u.push(0,m*S,0),d.push(0,S,0),f.push(.5,.5),g++;let N=g;for(let Y=0;Y<=i;Y++){let A=Y/i*c+o,L=Math.cos(A),D=Math.sin(A);C.x=v*D,C.y=m*S,C.z=v*L,u.push(C.x,C.y,C.z),d.push(0,S,0),w.x=L*.5+.5,w.y=D*.5*S+.5,f.push(w.x,w.y),g++}for(let Y=0;Y<i;Y++){let V=R+Y,A=N+Y;y===!0?h.push(A,A+1,V):h.push(A+1,A,V),O+=3}l.addGroup(p,O,y===!0?1:2),p+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var $n=class s extends qe{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new P,d=new P,f=[],g=[],b=[],m=[];for(let p=0;p<=n;p++){let _=[],x=p/n,y=0;p===0&&a===0?y=.5/t:p===n&&c===Math.PI&&(y=-.5/t);for(let R=0;R<=t;R++){let w=R/t;u.x=-e*Math.cos(i+w*r)*Math.sin(a+x*o),u.y=e*Math.cos(a+x*o),u.z=e*Math.sin(i+w*r)*Math.sin(a+x*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),b.push(d.x,d.y,d.z),m.push(w+y,1-x),_.push(l++)}h.push(_)}for(let p=0;p<n;p++)for(let _=0;_<t;_++){let x=h[p][_+1],y=h[p][_],R=h[p+1][_],w=h[p+1][_+1];(p!==0||a>0)&&f.push(x,y,w),(p!==n-1||c<Math.PI)&&f.push(y,R,w)}this.setIndex(f),this.setAttribute("position",new je(g,3)),this.setAttribute("normal",new je(b,3)),this.setAttribute("uv",new je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Kt=class extends Dt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Z(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Z(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Oc,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},fn=class extends Kt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ue(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Bt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Z(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Z(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Z(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var vr=class extends Dt{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Z(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Z(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Oc,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Dc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function ua(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function nx(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function ix(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Cu(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let c=0;c!==e;++c)i[a++]=s[o+c]}return i}function nd(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}var Si=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},yc=class extends Si{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Sh,endingEnd:Sh}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,a=e+1,o=i[r],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Eh:r=e,o=2*t-n;break;case wh:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Eh:a=e,c=2*n-t;break;case wh:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),b=g*g,m=b*g,p=-d*m+2*d*b-d*g,_=(1+d)*m+(-1.5-2*d)*b+(-.5+d)*g+1,x=(-1-f)*m+(1.5+f)*b+.5*g,y=f*m-f*b;for(let R=0;R!==o;++R)r[R]=p*a[h+R]+_*a[l+R]+x*a[c+R]+y*a[u+R];return r}},Mc=class extends Si{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}},Sc=class extends Si{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},pn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ua(t,this.TimeBufferType),this.values=ua(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ua(e.times,Array),values:ua(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Sc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Mc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new yc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Fs:t=this.InterpolantFactoryMethodDiscrete;break;case Yi:t=this.InterpolantFactoryMethodLinear;break;case Mo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Fs;case this.InterpolantFactoryMethodLinear:return Yi;case this.InterpolantFactoryMethodSmooth:return Mo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&nx(i))for(let o=0,c=i.length;o!==c;++o){let l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Mo,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(i)c=!0;else{let u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let b=t[u+g];if(b!==t[d+g]||b!==t[f+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};pn.prototype.TimeBufferType=Float32Array;pn.prototype.ValueBufferType=Float32Array;pn.prototype.DefaultInterpolation=Yi;var Ei=class extends pn{};Ei.prototype.ValueTypeName="bool";Ei.prototype.ValueBufferType=Array;Ei.prototype.DefaultInterpolation=Fs;Ei.prototype.InterpolantFactoryMethodLinear=void 0;Ei.prototype.InterpolantFactoryMethodSmooth=void 0;var Ua=class extends pn{};Ua.prototype.ValueTypeName="color";var ei=class extends pn{};ei.prototype.ValueTypeName="number";var Ec=class extends Si{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t),l=e*o;for(let h=l+o;l!==h;l+=4)Xt.slerpFlat(r,0,a,l-o,a,l,c);return r}},Bn=class extends pn{InterpolantFactoryMethodLinear(e){return new Ec(this.times,this.values,this.getValueSize(),e)}};Bn.prototype.ValueTypeName="quaternion";Bn.prototype.DefaultInterpolation=Yi;Bn.prototype.InterpolantFactoryMethodSmooth=void 0;var wi=class extends pn{};wi.prototype.ValueTypeName="string";wi.prototype.ValueBufferType=Array;wi.prototype.DefaultInterpolation=Fs;wi.prototype.InterpolantFactoryMethodLinear=void 0;wi.prototype.InterpolantFactoryMethodSmooth=void 0;var ti=class extends pn{};ti.prototype.ValueTypeName="vector";var Na=class{constructor(e,t=-1,n,i=Ff){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=wn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(rx(n[a]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(pn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);let h=ix(c);c=Cu(c,1,h),l=Cu(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new ei(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],h=l.name.match(r);if(h&&h.length>1){let u=h[1],d=i[u];d||(i[u]=d=[]),d.push(l)}}let a=[];for(let o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,d,f,g,b){if(f.length!==0){let m=[],p=[];nd(f,m,p,g),m.length!==0&&b.push(new u(d,m,p))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let u=0;u<l.length;u++){let d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let b=0;b<d[g].morphTargets.length;b++)f[d[g].morphTargets[b]]=-1;for(let b in f){let m=[],p=[];for(let _=0;_!==d[g].morphTargets.length;++_){let x=d[g];m.push(x.time),p.push(x.morphTarget===b?1:0)}i.push(new ei(".morphTargetInfluence["+b+"]",m,p))}c=f.length*a}else{let f=".bones["+t[u].name+"]";n(ti,f+".position",d,"pos",i),n(Bn,f+".quaternion",d,"rot",i),n(ti,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,c,i,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function sx(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ei;case"vector":case"vector2":case"vector3":case"vector4":return ti;case"color":return Ua;case"quaternion":return Bn;case"bool":case"boolean":return Ei;case"string":return wi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function rx(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=sx(s.type);if(s.times===void 0){let t=[],n=[];nd(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}var fi={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},wc=class{constructor(e,t,n){let i=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},ax=new wc,ni=class{constructor(e){this.manager=e!==void 0?e:ax,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};ni.DEFAULT_MATERIAL_NAME="__DEFAULT";var Yn={},Tc=class extends Error{constructor(e,t){super(e),this.response=t}},yr=class extends ni{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=fi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Yn[e]!==void 0){Yn[e].push({onLoad:t,onProgress:n,onError:i});return}Yn[e]=[],Yn[e].push({onLoad:t,onProgress:n,onError:i});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=Yn[e],u=l.body.getReader(),d=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),f=d?parseInt(d):0,g=f!==0,b=0,m=new ReadableStream({start(p){_();function _(){u.read().then(({done:x,value:y})=>{if(x)p.close();else{b+=y.byteLength;let R=new ProgressEvent("progress",{lengthComputable:g,loaded:b,total:f});for(let w=0,C=h.length;w<C;w++){let O=h[w];O.onProgress&&O.onProgress(R)}p.enqueue(y),_()}})}}});return new Response(m)}else throw new Tc(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o===void 0)return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{fi.add(e,l);let h=Yn[e];delete Yn[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{let h=Yn[e];if(h===void 0)throw this.manager.itemError(e),l;delete Yn[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Ac=class extends ni{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=fi.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let o=gr("img");function c(){h(),fi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}};var Fa=class extends ni{constructor(e){super(e)}load(e,t,n,i){let r=new Ct,a=new Ac(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},Ws=class extends at{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Z(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Oa=class extends Ws{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(at.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Z(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Ko=new Re,Pu=new P,Lu=new P,Mr=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ue(512,512),this.map=null,this.mapPass=null,this.matrix=new Re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new br,this._frameExtents=new ue(1,1),this._viewportCount=1,this._viewports=[new Je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Pu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Pu),Lu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Lu),t.updateMatrixWorld(),Ko.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ko),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ko)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Rc=class extends Mr{constructor(){super(new xt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Os*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Xs=class extends Ws{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(at.DEFAULT_UP),this.updateMatrix(),this.target=new at,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Rc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Iu=new Re,lr=new P,Jo=new P,Cc=class extends Mr{constructor(){super(new xt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ue(4,2),this._viewportCount=6,this._viewports=[new Je(2,1,1,1),new Je(0,1,1,1),new Je(3,1,1,1),new Je(1,1,1,1),new Je(3,0,1,1),new Je(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),lr.setFromMatrixPosition(e.matrixWorld),n.position.copy(lr),Jo.copy(n.position),Jo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Jo),n.updateMatrixWorld(),i.makeTranslation(-lr.x,-lr.y,-lr.z),Iu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Iu)}},Ba=class extends Ws{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Cc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Pc=class extends Mr{constructor(){super(new _i(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},$i=class extends Ws{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(at.DEFAULT_UP),this.updateMatrix(),this.target=new at,this.shadow=new Pc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Ti=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},ka=class extends qe{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var za=class extends ni{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=fi.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return fi.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),fi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});fi.add(e,c),r.manager.itemStart(e)}};var Hc="\\[\\]\\.:\\/",ox=new RegExp("["+Hc+"]","g"),Gc="[^"+Hc+"]",cx="[^"+Hc.replace("\\.","")+"]",lx=/((?:WC+[\/:])*)/.source.replace("WC",Gc),hx=/(WCOD+)?/.source.replace("WCOD",cx),ux=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Gc),dx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Gc),fx=new RegExp("^"+lx+hx+ux+dx+"$"),px=["material","materials","bones","map"],Lc=class{constructor(e,t,n){let i=n||rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},rt=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ox,"")}static parseTrackName(e){let t=fx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);px.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[i];if(a===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};rt.Composite=Lc;rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};rt.prototype.GetterByBindingType=[rt.prototype._getValue_direct,rt.prototype._getValue_array,rt.prototype._getValue_arrayElement,rt.prototype._getValue_toArray];rt.prototype.SetterByBindingTypeAndVersioning=[[rt.prototype._setValue_direct,rt.prototype._setValue_direct_setNeedsUpdate,rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_array,rt.prototype._setValue_array_setNeedsUpdate,rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_arrayElement,rt.prototype._setValue_arrayElement_setNeedsUpdate,rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_fromArray,rt.prototype._setValue_fromArray_setNeedsUpdate,rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var b_=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var id={reed:{low:9,det:2.2,fine:.4,mount:330},forest:{low:24,det:6.5,fine:1.1,mount:440},mountain:{low:34,det:5.5,fine:1.2,mount:520,side:!0}},Ut={id:"reed",...id.reed};function sd(s){Object.assign(Ut,{side:!1},id[s],{id:s})}function rn(s,e){let t=Math.imul(s,374761393)+Math.imul(e,668265263)|0;return t=Math.imul(t^t>>>13,1274126177),t^=t>>>16,(t>>>0)/4294967295}function gn(s,e){let t=Math.floor(s),n=Math.floor(e),i=s-t,r=e-n;i=i*i*(3-2*i),r=r*r*(3-2*r);let a=rn(t,n),o=rn(t+1,n),c=rn(t,n+1),l=rn(t+1,n+1);return a+(o-a)*i+(c-a)*r+(a-o-c+l)*i*r}function Ys(s,e){return Ut.low*((gn(s/1e3+11.3,e/1e3+7.1)-.5)*1.34+(gn(s/500+3.7,e/500+1.9)-.5)*.66)}function Vc(s,e){return Ut.det*(gn(s/165+5.5,e/165+2.2)-.5)*2+Ut.fine*(gn(s/40+9.1,e/40+4.4)-.5)*2}function Wc(s,e){let t=0,n=.62,i=1/1500;for(let r=0;r<4;r++){let a=gn(s*i+31.7*r,e*i+17.3*r),o=1-Math.abs(a*2-1);t+=n*o*o,n*=.45,i*=2.1}return Ut.mount*t}var rd=`
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
`;var Lt={halfWidth:4.6,chunkLen:120,step:2},ad=s=>.9*Math.sin(.0021*s+1)+.5*Math.sin(.0053*s+2.2)+.25*Math.sin(.0117*s+.3),mx=ad(0),Xa=class{constructor(){this.pts=[{x:0,z:0,y:Ys(0,0)}]}heading(e){return ad(e)-mx}ensure(e){this._ensure(Math.ceil(e/Lt.step)+1)}_ensure(e){let{step:t}=Lt;for(;this.pts.length<=e+1;){let n=this.pts.length-1,i=this.heading(n*t+t/2),r=this.pts[n],a=r.x-Math.sin(i)*t,o=r.z-Math.cos(i)*t;this.pts.push({x:a,z:o,y:Ys(a,o)})}}recomputeHeights(){for(let e of this.pts)e.y=Ys(e.x,e.z)}at(e,t={}){let{step:n}=Lt;e<0&&(e=0);let i=Math.floor(e/n);this._ensure(i+1);let r=(e-i*n)/n,a=this.pts[i],o=this.pts[i+1];return t.x=a.x+(o.x-a.x)*r,t.z=a.z+(o.z-a.z)*r,t.y=a.y+(o.y-a.y)*r,t.th=this.heading(e),t}};function Xc(s,e=!1){let t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,c=new qe,l=0;for(let h=0;h<s.length;++h){let u=s[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(t){let h=0,u=[];for(let d=0;d<s.length;++d){let f=s[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=s[d].attributes.position.count}c.setIndex(u)}for(let h in r){let u=od(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let b=0;b<a[h].length;++b)f.push(a[h][b][d]);let g=od(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function od(s){let e,t,n,i=-1,r=0;for(let l=0;l<s.length;++l){let h=s[l];if(h.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.array.length}let a=new e(r),o=0;for(let l=0;l<s.length;++l)a.set(s[l].array,o),o+=s[l].array.length;let c=new ze(a,t,n);return i!==void 0&&(c.gpuType=i),c}function qc(s,e){if(e===Gu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Sr||e===Ga){let t=s.getIndex();if(t===null){let a=[],o=s.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===Sr)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}function Er(s,e){let t=document.createElement("canvas");return t.width=s,t.height=e,[t,t.getContext("2d")]}function cd(s){let[n,i]=Er(512,512);i.fillStyle="#3c3f45",i.fillRect(0,0,512,512);let r=i.getImageData(0,0,512,512);for(let h=0;h<r.data.length;h+=4){let u=(Math.random()-.5)*30;r.data[h]+=u,r.data[h+1]+=u,r.data[h+2]+=u}i.putImageData(r,0,0);let a=512/(Lt.halfWidth*2);for(let h of[.27,.73]){let u=i.createLinearGradient((h-.09)*512,0,(h+.09)*512,0);u.addColorStop(0,"rgba(0,0,0,0)"),u.addColorStop(.5,"rgba(0,0,0,0.22)"),u.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=u,i.fillRect((h-.09)*512,0,.18*512,512)}i.fillStyle="#dcdcd4";let o=.16*a,c=.35*a;i.fillRect(c,0,o,512),i.fillRect(512-c-o,0,o,512),i.fillStyle="#e9d36a",i.fillRect(512/2-o/2,0,o,512/3);let l=new Mi(n);return l.colorSpace=$e,l.wrapS=l.wrapT=Nn,l.anisotropy=s.capabilities.getMaxAnisotropy(),l}function js(){let[s,e]=Er(128,128),t=e.createRadialGradient(64,64,0,64,64,64);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.2,"rgba(255,255,255,0.55)"),t.addColorStop(.5,"rgba(255,255,255,0.12)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128);let n=new Mi(s);return n.colorSpace=$e,n}function Yc(s){let e=s>>>0;return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function ld(){let[t,n]=Er(128,360),i=Yc(5),r=128/2;n.strokeStyle="#c9bb8e",n.lineWidth=2.2,n.lineCap="round",n.beginPath(),n.moveTo(r,360),n.quadraticCurveTo(r+2,360*.66,r,360*.46),n.stroke();let a=4,o=360*.5,c=u=>5+50*Math.pow(Math.sin(Math.min(1,u*1.15)*Math.PI*.55),.85)*Math.pow(1-u,.6);n.fillStyle="rgba(250,246,234,0.6)",n.beginPath();for(let u=0;u<=24;u++){let d=u/24;n.lineTo(r+c(d)*.6,o-d*(o-a))}for(let u=24;u>=0;u--){let d=u/24;n.lineTo(r-c(d)*.6,o-d*(o-a))}n.closePath(),n.fill();let l=["#ffffff","#fffcf4","#f6f0df","#ede5cf","#fffef9"];for(let u=0;u<1500;u++){let d=Math.pow(i(),.85),f=o-d*(o-a)+i()*6,g=c(d),b=r+(i()*2-1)*g*(.4+.7*i()),m=f-6-i()*30;n.strokeStyle=l[Math.floor(i()*l.length)],n.globalAlpha=.35+i()*.55,n.lineWidth=.7+i()*1.5,n.beginPath(),n.moveTo(r+(i()-.5)*5,f),n.quadraticCurveTo((r+b)/2+(i()-.5)*10,(f+m)/2,b,m),n.stroke()}n.globalAlpha=1;let h=new Mi(t);return h.colorSpace=$e,h.anisotropy=4,h}function hd(s){let[t,n]=Er(512,512),i=Yc(23);n.fillStyle="#d6d6d6",n.fillRect(0,0,512,512),n.lineCap="round";for(let a=0;a<16e3;a++){let o=i()*512,c=i()*512,l=3+i()*11,h=-Math.PI/2+(i()-.5)*1.1,u=Math.cos(h)*l,d=Math.sin(h)*l,f=Math.floor(150+i()*105);n.strokeStyle=`rgb(${f},${f},${f})`,n.globalAlpha=.35+i()*.5,n.lineWidth=.7+i()*1.3;for(let g of[-512,0,512])for(let b of[-512,0,512]){let m=o+g,p=c+b;m<-20||m>532||p<-20||p>532||(n.beginPath(),n.moveTo(m,p),n.lineTo(m+u,p+d),n.stroke())}}n.globalAlpha=1;let r=new Mi(t);return r.colorSpace=$e,r.wrapS=r.wrapT=Nn,r.anisotropy=s.capabilities.getMaxAnisotropy(),r}function ud(){let[t,n]=Er(512,256),i=Yc(77),r=[];for(let u=0;u<9;u++){let d=i()*Math.PI*2,f=i()*62;r.push([128+Math.cos(d)*f*1.15,120+Math.sin(d)*f*.85,38+i()*34])}let a=(u,d)=>r.some(([f,g,b])=>(u-f)**2+(d-g)**2<b*b),o=["#2f5522","#3d6a2a","#4c7d32","#5c9038","#6fa443","#87b851"];for(let u=0;u<2600;u++){let d=8+i()*240,f=8+i()*230;if(!a(d,f))continue;let g=1-f/256,b=Math.min(o.length-1,Math.floor((i()*.7+g*.55)*o.length));n.fillStyle=o[b],n.beginPath(),n.ellipse(d,f,3+i()*5,2+i()*3.5,i()*Math.PI,0,Math.PI*2),n.fill()}let c=320,l=["#22402a","#2b4f31","#355e39","#3f6d41","#4d7d4a"];for(let u=0;u<2400;u++){let d=Math.pow(i(),.8),f=6+d*236,g=d*7%1,b=(6+d*58)*(.55+.45*g),m=c+(i()*2-1)*b*.25,p=c+(i()*2-1)*b,_=f+4+Math.abs(p-c)*.18+i()*6;n.strokeStyle=l[Math.min(l.length-1,Math.floor((i()*.8+(1-d)*.4)*l.length))],n.lineWidth=1+i()*2.2,n.beginPath(),n.moveTo(m,f),n.lineTo(p,_),n.stroke()}n.fillStyle="#5a4434",n.fillRect(448,0,64,64);let h=new Mi(t);return h.colorSpace=$e,h.anisotropy=4,h}var kn={uMistD:{value:0},uMistH:{value:12},uMistBase:{value:0},uMistCover:{value:.5},uMistT:{value:0},uMistWind:{value:new ue},uMistColor:{value:new Z}};function dd(){let s=Ae;s.fog_pars_vertex=`
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
    float h0 = clamp( ( cameraPosition.y - uMistBase ) / uMistH, -2.5, 40.0 );
    float h1 = clamp( ( vFogWorld.y - uMistBase ) / uMistH, -2.5, 40.0 );
    float dh = h1 - h0;
    float e1 = exp( - h1 );
    float avg = abs( dh ) > 1e-3 ? ( exp( - h0 ) - e1 ) / dh : e1;     // mật độ trung bình dọc tia nhìn
    float mn = mistNoise( vFogWorld.xz * 0.0045 + uMistWind * uMistT ) * 0.65
             + mistNoise( vFogWorld.xz * 0.017 - uMistWind * uMistT * 1.7 + 7.3 ) * 0.35;
    float patchy = smoothstep( 0.78 - 0.78 * uMistCover, 1.02 - 0.55 * uMistCover, mn );
    float mist = 1.0 - exp( - uMistD * mDist * clamp( avg, 0.0, 12.0 ) * patchy );
    float keep = ( 1.0 - fogFactor ) * ( 1.0 - mist );
    fogMix = mix( uMistColor, fogColor, fogFactor / max( 1.0 - keep, 1e-4 ) );
    fogFactor = 1.0 - keep;
  }
  gl_FragColor.rgb = mix( gl_FragColor.rgb, fogMix, fogFactor );
#endif`}function ii(s){let e=s.onBeforeCompile,t=s.customProgramCacheKey,n=e&&e!==Dt.prototype.onBeforeCompile;s.onBeforeCompile=function(r,a){n&&e.call(this,r,a),Object.assign(r.uniforms,kn)};let i=(n?e.toString():"")+(t?t.call(s):"");return s.customProgramCacheKey=()=>i+"#mist",s.needsUpdate=!0,s}var{halfWidth:si,chunkLen:Ks,step:qa}=Lt,fd=7,jc=1;var gx=s=>s.index?s.toNonIndexed():s;function bx(s){return Xc(s.map(e=>{let t=gx(e);return t.deleteAttribute("uv"),t}))}function pd(s,e){let t=[],n=[],i=[],r=[],[a,o,c]=s.center,l=(f,g,b,m,p)=>{let _=new P(f-a,(g-o)*.7,b-c).normalize().add(new P(0,.35,0)).normalize();t.push(f,g,b),n.push(_.x,_.y,_.z),i.push(m,p)};for(let f of s.yaws){let g=Math.cos(f),b=Math.sin(f),m=t.length/3,p=s.w/2,_=s.h/2;l(a-p*g,o-_,c-p*b,s.u0,0),l(a+p*g,o-_,c+p*b,s.u1,0),l(a+p*g,o+_,c+p*b,s.u1,1),l(a-p*g,o+_,c-p*b,s.u0,1),r.push(m,m+1,m+2,m,m+2,m+3)}if(s.top){let f=t.length/3,g=s.top/2,b=s.topY;l(a-g,b,c-g,s.u0,0),l(a+g,b,c-g,s.u1,0),l(a+g,b,c+g,s.u1,1),l(a-g,b,c+g,s.u0,1),r.push(f,f+1,f+2,f,f+2,f+3)}let h=new qe;h.setAttribute("position",new je(t,3)),h.setAttribute("normal",new je(n,3)),h.setAttribute("uv",new je(i,2)),h.setIndex(r);let u=new Qi(e.r0,e.r1,e.h,6).translate(0,e.h/2,0),d=u.attributes.uv;for(let f=0;f<d.count;f++)d.setXY(f,.94,.88);return Xc([u,h])}function md(){return pd({center:[0,4.7,0],w:5.4,h:5,yaws:[0,Math.PI/3,2*Math.PI/3],u0:0,u1:.5,top:4.4,topY:5},{r0:.16,r1:.26,h:3})}function gd(){return pd({center:[0,5.1,0],w:3.8,h:8.2,yaws:[0,Math.PI/3,2*Math.PI/3],u0:.5,u1:.75},{r0:.13,r1:.22,h:1.8})}function xx(){return bx([new Qi(.07,.1,7.4,6).translate(0,3.7,0),new Fn(1.9,.08,.1).translate(-.9,7.4,0),new Fn(.5,.1,.22).translate(-1.75,7.33,0)])}var _x=`#include <common>
varying vec3 vRW;
uniform float uWet, uPuddle, uRain, uRainT, uReflOn, uPlaneY;
uniform sampler2D uReflTex;
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
}`,vx=`
float across = vMapUv.x;
float rut = 1.0 - smoothstep(0.0, 0.07, min(abs(across - 0.27), abs(across - 0.73)));
float edgeW = 1.0 - smoothstep(0.0, 0.12, min(across, 1.0 - across));
float pn = rNoise(vRW.xz * 0.2) * 0.6 + rNoise(vRW.xz * 0.85 + 3.1) * 0.4;
float pth = 0.6 - 0.13 * rut - 0.1 * edgeW;
float puddle = smoothstep(pth, pth + 0.05, pn) * uPuddle;
diffuseColor.rgb *= mix(1.0, 0.32, puddle);
vec2 ripG = rRipple(vRW.xz, uRainT) * uRain * puddle;
`,yx=`
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
  float kR = clamp((puddle * 0.95 + 0.3 * uWet * (1.0 - puddle)) * fres * fade, 0.0, 1.0);
  outgoingLight = mix(outgoingLight, refl, kR);
}`,Ya=class{constructor(e,t,n){this.scene=e,this.road=t,this.chunks=new Map,this.queue=[],this.tmp={},this.map="reed",this.lastS=150,this.roadMat=new Kt({map:cd(n),roughness:.9,metalness:0,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),this.roadU={uWet:{value:0},uPuddle:{value:0},uRain:{value:0},uRainT:{value:0},uReflTex:{value:null},uReflMat:{value:new Re},uReflOn:{value:0},uPlaneY:{value:0}},this.roadMat.onBeforeCompile=r=>{Object.assign(r.uniforms,this.roadU),r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vRW;`).replace("#include <project_vertex>",`#include <project_vertex>
vRW = (modelMatrix * vec4(transformed, 1.0)).xyz;`),r.fragmentShader=r.fragmentShader.replace("#include <common>",_x).replace("#include <map_fragment>",`#include <map_fragment>
`+vx).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
roughnessFactor = mix(roughnessFactor, 0.03, puddle);`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
normal = normalize(normal + (viewMatrix * vec4(ripG.x, 0.0, ripG.y, 0.0)).xyz * 0.35);`).replace("#include <opaque_fragment>",yx+`
#include <opaque_fragment>`)},this.railMat=new Kt({color:12172996,roughness:.35,metalness:.75,side:pt}),this.poleMat=new Kt({color:4869973,roughness:.6,metalness:.4}),this.postMat=new Kt({color:15263968,roughness:.7}),this.bulbMat=new Yt({color:16767392,toneMapped:!1});let i=js();this.poolMat=new Yt({map:i,color:16761466,transparent:!0,opacity:0,depthWrite:!1,blending:Un,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}),this.glowMat=new Qn({map:i,color:16763274,size:9,transparent:!0,opacity:0,depthWrite:!1,blending:Un,sizeAttenuation:!0});for(let r of[this.roadMat,this.poleMat,this.postMat,this.bulbMat,this.poolMat,this.glowMat,this.railMat])ii(r);this.lampGeo=xx(),this.railPostGeo=new Fn(.12,.8,.12).translate(0,.4,0),this.postGeo=new Fn(.12,.95,.12).translate(0,.475,0),this.poolGeo=new ji(15,15).rotateX(-Math.PI/2),this.bulbGeo=new $n(.2,8,6)}setMap(e){this.map=e;for(let t of this.chunks.values())this._dispose(t);this.chunks.clear(),this.queue.length=0,this.prime(this.lastS)}update(e,t=2){this.lastS=e;let n=Math.floor(e/Ks);for(let i=Math.max(0,n-jc);i<=n+fd;i++)!this.chunks.has(i)&&!this.queue.includes(i)&&this.queue.push(i);this.queue.sort((i,r)=>i-r);for(let i=0;i<t&&this.queue.length;i++){let r=this.queue.shift();r>=n-jc&&r<=n+fd&&this._build(r)}for(let[i,r]of this.chunks)i<n-jc&&(this._dispose(r),this.chunks.delete(i))}prime(e){this.update(e,999)}apply(e){let t=e.lamps,n=new Z(9079430).lerp(new Z(16767392),t);this.bulbMat.color.copy(n).multiplyScalar(.6+1.6*t),this.poolMat.opacity=t*.55,this.glowMat.opacity=t*.9,this.roadMat.roughness=.9-.55*e.wet,this.roadMat.envMapIntensity=.45+.55*e.wet;let i=(1-.4*e.wet)*(1-.25*e.dark);this.roadMat.color.setRGB(i,i,i);let r=this.roadU;r.uWet.value=e.wet,r.uPuddle.value=e.wet,r.uRain.value=e.rain}setReflection(e,t){let n=this.roadU;n.uRainT.value=t,n.uReflOn.value=e.active?1:0,e.active&&(n.uReflTex.value=e.rt.texture,n.uReflMat.value.copy(e.texMatrix),n.uPlaneY.value=e.planeY)}_build(e){let t=new ht,n=this.road,i=e*Ks,r=this.tmp,a=Ks/qa,o=new Float32Array((a+1)*6),c=new Float32Array((a+1)*4),l=new Float32Array((a+1)*6),h=[];for(let A=0;A<=a;A++){let L=i+A*qa;n.at(L,r);let D=Math.cos(r.th),W=-Math.sin(r.th),F=r.y+.05;if(o.set([r.x-D*si,F,r.z-W*si,r.x+D*si,F,r.z+W*si],A*6),c.set([0,L/12,1,L/12],A*4),l.set([0,1,0,0,1,0],A*6),A<a){let B=A*2;h.push(B,B+1,B+2,B+1,B+3,B+2)}}let u=new qe;u.setAttribute("position",new ze(o,3)),u.setAttribute("normal",new ze(l,3)),u.setAttribute("uv",new ze(c,2)),u.setIndex(h),u.computeVertexNormals();let d=new Ze(u,this.roadMat);d.receiveShadow=!0,d.layers.set(3),t.add(d),t.userData.own=[u];let f=[];for(let A=i;A<i+Ks;A+=12){n.at(A,r);for(let L of this.map==="mountain"?[-1]:[-1,1])f.push([r.x+Math.cos(r.th)*(si+.7)*L,r.y,r.z-Math.sin(r.th)*(si+.7)*L])}let g=new dn(this.postGeo,this.postMat,f.length),b=new Re;if(f.forEach(([A,L,D],W)=>{b.makeTranslation(A,L,D),g.setMatrixAt(W,b)}),t.add(g),this.map==="mountain"){let A=Ks/qa,L=new Float32Array((A+1)*6),D=[],W=[];for(let J=0;J<=A;J++){let ne=i+J*qa;n.at(ne,r);let q=r.x+Math.cos(r.th)*(si+.55),K=r.z-Math.sin(r.th)*(si+.55);if(L.set([q,r.y+.5,K,q,r.y+.82,K],J*6),J<A){let re=J*2;D.push(re,re+2,re+1,re+1,re+2,re+3)}J%2===0&&W.push([q,r.y,K])}let F=new qe;F.setAttribute("position",new ze(L,3)),F.setIndex(D),F.computeVertexNormals();let B=new Ze(F,this.railMat);B.castShadow=!0,t.add(B),t.userData.own.push(F);let j=new dn(this.railPostGeo,this.poleMat,W.length);W.forEach(([J,ne,q],K)=>{b.makeTranslation(J,ne,q),j.setMatrixAt(K,b)}),t.add(j)}let m=[],p=[],_=[],x=this.map==="reed"?2:1,y=Ks/x;for(let A=0;A<x;A++){let L=i+A*y+6;n.at(L,r);let D=this.map==="mountain"?-1:Math.round(L/y)%2?1:-1,W=si+1.4,F=r.x+Math.cos(r.th)*W*D,B=r.z-Math.sin(r.th)*W*D,j=r.th+(D===1?0:Math.PI);m.push([F,r.y,B,j]);let J=-Math.cos(j)*1.75,ne=Math.sin(j)*1.75;p.push([F+J,r.y+7.25,B+ne]),_.push([F+J*1.4,r.y+.08,B+ne*1.4])}let R=new dn(this.lampGeo,this.poleMat,m.length),w=new Xt,C=new P(0,1,0),O=new P(1,1,1),v=new P;m.forEach(([A,L,D,W],F)=>{w.setFromAxisAngle(C,W),b.compose(v.set(A,L,D),w,O),R.setMatrixAt(F,b)}),R.castShadow=!0,t.add(R);let S=new dn(this.bulbGeo,this.bulbMat,p.length);p.forEach(([A,L,D],W)=>{b.makeTranslation(A,L,D),S.setMatrixAt(W,b)}),t.add(S);let N=new dn(this.poolGeo,this.poolMat,_.length);_.forEach(([A,L,D],W)=>{b.makeTranslation(A,L,D),N.setMatrixAt(W,b)}),N.renderOrder=2,t.add(N);let Y=new qe;Y.setAttribute("position",new je(p.flat(),3));let V=new On(Y,this.glowMat);V.frustumCulled=!1,V.renderOrder=3,t.add(V),t.userData.own.push(Y),this.scene.add(t),this.chunks.set(e,t)}_dispose(e){this.scene.remove(e),e.userData.own.forEach(t=>t.dispose()),e.traverse(t=>{t.isInstancedMesh&&t.dispose()})}};var bd=32,Mx=64,Kc=8192,es=Lt.halfWidth,Sx=es+1.2,ja=es+16,Jc=1e6,jt=(s,e,t)=>{let n=Math.min(1,Math.max(0,(t-s)/(e-s)));return n*n*(3-2*n)},Jt=s=>new Z(s),xd={forest:{a:Jt("#7fa443"),b:Jt("#a9b85a"),c:Jt("#5c8036"),snowLine:215,trees:!0},reed:{a:Jt("#ad9b5c"),b:Jt("#c5b37b"),c:Jt("#8c8a50"),snowLine:240,trees:!1},mountain:{a:Jt("#789a45"),b:Jt("#9eaa5a"),c:Jt("#557236"),snowLine:300,trees:!0}},Ex=Jt("#3e5d2b"),wx=Jt("#8a8072"),_d=Jt("#6b6259"),Tx=Jt("#eef2f6"),Ax=Jt("#8f887c"),Rx={64:1,128:.5,256:.22,512:.08},Ka=class{constructor(e,t,n){this.road=t,this.group=new ht,e.add(this.group),this.tiles=new Map,this.queue=[],this.queued=new Set,this.iCar=0,this.uCover={value:0},this.mat=new Kt({vertexColors:!0,map:hd(n),roughness:.96,metalness:0,envMapIntensity:.8}),this.mat.onBeforeCompile=i=>{i.uniforms.uCover=this.uCover,i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
varying float vUpY;
varying vec3 vTW;`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
vUpY = objectNormal.y;`).replace("#include <project_vertex>",`#include <project_vertex>
vTW = transformed;`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
varying float vUpY;
varying vec3 vTW;
uniform float uCover;`).replace("#include <map_fragment>",`
          float flatK = smoothstep(0.5, 0.78, vUpY);
          vec4 dTex = mix(texture2D(map, vec2(vTW.x + vTW.z, vTW.y * 1.6) / 6.0), texture2D(map, vTW.xz / 6.0), flatK);
          diffuseColor *= dTex;
          diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.86, 0.89, 0.93), uCover * smoothstep(0.55, 0.8, vUpY));`)},this.treeMat=new Kt({map:ud(),alphaTest:.45,side:pt,roughness:.92}),this.treeMat.onBeforeCompile=i=>{i.fragmentShader=i.fragmentShader.replace("#include <normal_fragment_begin>",Ae.normal_fragment_begin.replace("normal *= faceDirection;",""))},ii(this.mat),ii(this.treeMat),this.geos={pine:gd(),broad:md()},this._nd=Jc,this._ny=0,this._nl=0,this._d=Jc,this._rc=new Z,this._white=new Z(1,1,1)}setCar(e){this.iCar=Math.floor(e/Lt.step)}_samples(e,t,n,i,r,a,o){let c=this.road.pts,l=[],h=Math.max(0,a),u=Math.min(c.length-1,o);for(let d=h-h%r;d<=u;d+=r){if(d<h)continue;let f=c[d];f.x>=e&&f.x<=n&&f.z>=t&&f.z<=i&&l.push(d)}return l}_nearFine(e,t,n){let i=this.road.pts,r=1/0,a=-1;for(let h=0;h<n.length;h++){let u=i[n[h]],d=e-u.x,f=t-u.z,g=d*d+f*f;g<r&&(r=g,a=n[h])}if(a<0)return!1;let o=1/0,c=i[a].y,l=0;for(let h=a-1;h<=a;h++){if(h<0||h+1>=i.length)continue;let u=i[h],d=i[h+1],f=d.x-u.x,g=d.z-u.z,b=f*f+g*g,m=Math.max(0,Math.min(1,((e-u.x)*f+(t-u.z)*g)/b)),p=e-u.x-f*m,_=t-u.z-g*m,x=Math.hypot(p,_);x<o&&(o=x,c=u.y+(d.y-u.y)*m,l=(p*-g+_*f)/Math.sqrt(b))}return this._nd=o,this._ny=c,this._nl=l,!0}_height(e,t,n,i){let r=this.road.pts,a=Ut.side,o=1/0,c=0,l=0;for(let f=0;f<i.length;f++){let g=i[f],b=r[g],m=e-b.x,p=t-b.z,_=m*m+p*p;if(_<o&&(o=_),a&&g+1<r.length){let x=r[g+1],y=x.x-b.x,R=x.z-b.z,w=Math.hypot(y,R)||1,C=(m*-R+p*y)/w,O=1/(_*_+1e4);c+=O,l+=O*C}}let h=Math.sqrt(o),u=Ys(e,t)+Vc(e,t);this._d=Jc;let d=h-70<ja&&this._nearFine(e,t,n);if(a){let f=c>0?l/c:0;d&&(f=this._nl+(f-this._nl)*jt(25,60,this._nd));let g=-f,b=.75+.5*gn(e/220+4.4,t/220+9.9);g>0?u+=(360*(1-Math.exp(-g/210))+.2*g)*b:u-=250*(1-Math.exp(g/170)),u+=Vc(e*1.7,t*1.7)*.8,Math.abs(g)>650&&(u+=Wc(e,t)*jt(650,1500,Math.abs(g)))}else h>500&&(u+=Wc(e,t)*jt(500,1600,h));if(d){this._d=this._nd;let f=jt(Sx,ja,this._nd),g=this._ny-.02;u=g+(u-g)*f}return u}heightAt(e,t){let n=ja+80,i=this._samples(e-n,t-n,e+n,t+n,1,this.iCar-300,this.iCar+300),r=this._samples(e-1700,t-1700,e+1700,t+1700,25,this.iCar-2500,this.iCar+4e3);return this._height(e,t,i,r)}_color(e,t,n,i,r,a){let o=xd[Ut.id],c=gn(e/150+2.3,t/150+6.1),l=gn(e/37+8.8,t/37+1.2);a.copy(o.a).lerp(o.b,jt(.3,.75,c)).lerp(o.c,jt(.45,.9,l)*.55),o.trees&&a.lerp(Ex,jt(.44,.66,gn(e/260+3.1,t/260+8.7))*.6);let h=1-i;a.lerp(_d,jt(110,220,n)*.45);let u=jt(.22,.4,h);if(u>0){let f=.72+.4*gn((e+t)/9+1.3,n/2.6)+.18*(l-.5);this._rc.copy(l>.5?wx:_d).multiplyScalar(f),a.lerp(this._rc,u)}let d=jt(o.snowLine+(c-.5)*60,o.snowLine+50,n)*(1-jt(.5,.75,h));return a.lerp(Tx,d),a.lerp(Ax,1-(Ut.id==="forest"?jt(es+.2,es+1.1,r):jt(es+1,es+3.2,r))),a}_build(e,t,n){let i=bd,r=n/i,a=i+3,o=ja+80,c=this.iCar-2500,l=this.iCar+4e3,h=this._samples(e-o,t-o,e+n+o,t+n+o,1,c,l),u=this._samples(e-1700,t-1700,e+n+1700,t+n+1700,25,c,l),d=new Float32Array(a*a),f=new Float32Array(a*a);for(let A=0;A<a;A++)for(let L=0;L<a;L++)d[A*a+L]=this._height(e+(L-1)*r,t+(A-1)*r,h,u),f[A*a+L]=this._d;let g=(i+1)*(i+1),b=4*(i+1),m=new Float32Array((g+b)*3),p=new Float32Array((g+b)*3),_=new Float32Array((g+b)*3),x=new Float32Array((g+b)*2),y=new Z,R=new Float32Array(g);for(let A=0;A<=i;A++)for(let L=0;L<=i;L++){let D=(A+1)*a+(L+1),W=A*(i+1)+L,F=e+L*r,B=t+A*r,j=d[D],J=d[D-1]-d[D+1],ne=2*r,q=d[D-a]-d[D+a],K=Math.hypot(J,ne,q);J/=K,ne/=K,q/=K,R[W]=ne,m.set([F,j,B],W*3),p.set([J,ne,q],W*3),this._color(F,B,j,ne,f[D],y),_.set([y.r,y.g,y.b],W*3),x.set([F/6,B/6],W*2)}let w=[];for(let A=0;A<i;A++)for(let L=0;L<i;L++){let D=A*(i+1)+L,W=D+1,F=D+i+1,B=F+1;w.push(D,F,W,W,F,B)}let C=r*1.5+1,O=[Array.from({length:i+1},(A,L)=>L),Array.from({length:i+1},(A,L)=>i*(i+1)+L),Array.from({length:i+1},(A,L)=>L*(i+1)),Array.from({length:i+1},(A,L)=>L*(i+1)+i)],v=g;for(let A of O){let L=v;for(let D of A)m.set([m[D*3],m[D*3+1]-C,m[D*3+2]],v*3),p.set([p[D*3],p[D*3+1],p[D*3+2]],v*3),_.set([_[D*3],_[D*3+1],_[D*3+2]],v*3),x.set([x[D*2],x[D*2+1]],v*2),v++;for(let D=0;D<i;D++){let W=A[D],F=A[D+1],B=L+D,j=L+D+1;w.push(W,B,F,F,B,j,W,F,B,F,j,B)}}let S=new qe;S.setAttribute("position",new ze(m,3)),S.setAttribute("normal",new ze(p,3)),S.setAttribute("color",new ze(_,3)),S.setAttribute("uv",new ze(x,2)),S.setIndex(w),S.computeBoundingSphere();let N=new Ze(S,this.mat);N.receiveShadow=n<=256,N.castShadow=n<=64;let Y=new ht;Y.add(N);let V=this._trees(e,t,n,r,a,d,f,R);for(let A of V)Y.add(A);return this.group.add(Y),Y}_bil(e,t,n,i,r,a,o){let c=(a-i)/n+1,l=(o-r)/n+1,h=Math.min(t-2,Math.floor(c)),u=Math.min(t-2,Math.floor(l)),d=c-h,f=l-u,g=e[u*t+h],b=e[u*t+h+1],m=e[(u+1)*t+h],p=e[(u+1)*t+h+1];return g+(b-g)*d+(m-g)*f+(g-b-m+p)*d*f}_trees(e,t,n,i,r,a,o,c){let l=xd[Ut.id],h=Rx[n]||0;if(!h)return[];let u=8,d=bd,f=[],g=[];for(let p=Math.floor(t/u);p*u<t+n;p++)for(let _=Math.floor(e/u);_*u<e+n;_++){if(rn(_,p)>h)continue;let x=(_+rn(_+7919,p))*u,y=(p+rn(_,p+7919))*u;if(x<e||x>=e+n||y<t||y>=t+n)continue;let R=l.trees?jt(.44,.66,gn(x/260+3.1,y/260+8.7))*.92+.03:.012;if(rn(_+104729,p+31)>R||this._bil(o,r,i,e,t,x,y)<es+7.5)continue;let w=this._bil(a,r,i,e,t,x,y);if(w>l.snowLine-20)continue;let C=Math.min(d,Math.round((y-t)/i))*(d+1)+Math.min(d,Math.round((x-e)/i));if(c[C]<.8)continue;let O=(.75+rn(_+3,p+5)*.7)*(n>=256?1.3:1);((l.trees?rn(_+11,p+13)<.58+jt(60,180,w)*.35:!1)?f:g).push([x,w-.2,y,O,rn(_+17,p+19)*6.283,rn(_+23,p+29)])}let b=[],m=(p,_)=>{if(!p.length)return;let x=new dn(_,this.treeMat,p.length),y=new Re,R=new Xt,w=new P,C=new P,O=new P(0,1,0),v=new Z;p.forEach(([S,N,Y,V,A,L],D)=>{R.setFromAxisAngle(O,A),y.compose(C.set(S,N,Y),R,w.set(V,V*(.9+L*.3),V)),x.setMatrixAt(D,y),v.setHSL(.2+(L-.5)*.12,.45,.62+L*.2).lerp(this._white,.55),x.setColorAt(D,v)}),x.castShadow=n<=64,x.layers.set(3),b.push(x)};return m(f,this.geos.pine),m(g,this.geos.broad),b}_dispose(e){this.group.remove(e),e.traverse(t=>{t.isInstancedMesh?t.dispose():t.isMesh&&t.geometry.dispose()})}reset(){for(let e of this.tiles.values())this._dispose(e);this.tiles.clear(),this.queue.length=0,this.queued.clear()}update(e,t=6){let n=new Map,i=Math.round(e.x/1024)*1024-Kc/2,r=Math.round(e.z/1024)*1024-Kc/2,a=(o,c,l)=>{let h=Math.min(Math.max(e.x,o),o+l),u=Math.min(Math.max(e.z,c),c+l),d=Math.hypot(e.x-h,e.z-u);if(l>Mx&&d<l){let f=l/2;a(o,c,f),a(o+f,c,f),a(o,c+f,f),a(o+f,c+f,f)}else n.set(l+"|"+o+"|"+c,[o,c,l,d])};a(i,r,Kc);for(let[o,c]of n)!this.tiles.has(o)&&!this.queued.has(o)&&(this.queue.push([o,...c]),this.queued.add(o));if(this.queue.length){this.queue.sort((c,l)=>c[3]-l[3]||c[4]-l[4]);let o=performance.now();for(;this.queue.length&&performance.now()-o<t;){let[c,l,h,u]=this.queue.shift();this.queued.delete(c),!(!n.has(c)||this.tiles.has(c))&&this.tiles.set(c,this._build(l,h,u))}}if(!this.queue.length)for(let[o,c]of this.tiles)n.has(o)||(this._dispose(c),this.tiles.delete(o))}prime(e){this.update(e,1e9)}apply(e){this.uCover.value=e.cover,this.mat.color.setScalar((1-.2*e.wet)*(1-.3*e.dark));let t=.2*e.cover*e.dayF;this.treeMat.emissive.setRGB(t,t*1.02,t*1.05)}};function vd(s,e=1){let t=new Float32Array(s*e*3);for(let n=0;n<s;n++){let i=Math.random(),r=Math.random(),a=Math.random();for(let o=0;o<e;o++)t.set([i,r,a],(n*e+o)*3)}return t}var Cx=`
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
  }`,Px=`
  uniform float uOpacity, uLight; uniform vec3 uColor; varying float vA;
  void main() {
    float r = length(gl_PointCoord - 0.5) * 2.0;
    float a = smoothstep(1.0, 0.25, r);
    gl_FragColor = vec4(uColor * uLight, a * uOpacity * vA);
  }`,Ja=class{constructor(e){this.time=0;let t=new P(40,26,40),n=()=>({uTime:{value:0},uCam:{value:new P},uBox:{value:t.clone()},uOpacity:{value:0},uLight:{value:1}}),i=14e3,r=new qe;r.setAttribute("position",new ze(new Float32Array(i*2*3),3)),r.setAttribute("seed",new ze(vd(i,2),3));let a=new Float32Array(i*2);for(let c=0;c<i;c++)a[c*2+1]=1;r.setAttribute("tail",new ze(a,1)),this.rain=new yi(r,new Pt({uniforms:{...n(),uSpeed:{value:24},uLen:{value:1.1},uWind:{value:new ue(2,1)}},transparent:!0,depthWrite:!1,vertexShader:`
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
        void main() { gl_FragColor = vec4(vec3(0.78, 0.84, 0.92) * uLight, uOpacity * vA); }`})),this.rain.frustumCulled=!1,this.rain.layers.set(3),this.rain.renderOrder=10,this.rain.visible=!1,e.add(this.rain);let o=(c,l,h)=>{let u=new qe;u.setAttribute("position",new ze(new Float32Array(c*3),3)),u.setAttribute("seed",new ze(vd(c),3));let d=new On(u,new Pt({uniforms:{...n(),uScale:{value:400},uColor:{value:new Z(...h)},...l},transparent:!0,depthWrite:!1,vertexShader:Cx,fragmentShader:Px}));return d.frustumCulled=!1,d.layers.set(3),d.renderOrder=10,d.visible=!1,e.add(d),d};this.snow=o(1e4,{uSize:{value:.09},uFall:{value:1.6},uSway:{value:.9},uDrift:{value:new ue}},[.96,.98,1]),this.drift=o(2600,{uSize:{value:.05},uFall:{value:.12},uSway:{value:.25},uDrift:{value:new ue}},[.95,.9,.78])}update(e,t,n,i){this.time+=e;let r=n.windDir.clone().multiplyScalar(1.5+n.wind*11);for(let l of[this.rain,this.snow,this.drift]){let h=l.material.uniforms;h.uTime.value=this.time,h.uCam.value.copy(t),h.uLight.value=n.light}let a=this.rain.material.uniforms;a.uOpacity.value=.55*n.rain*(1+.25*n.dark),a.uWind.value.copy(r),this.rain.visible=n.rain>.02;let o=this.snow.material.uniforms;o.uOpacity.value=.95*n.snow,o.uScale.value=i*.5,o.uDrift.value.copy(r).multiplyScalar(.35),this.snow.visible=n.snow>.02;let c=this.drift.material.uniforms;c.uOpacity.value=.8*n.drift,c.uScale.value=i*.5,c.uDrift.value.copy(r).multiplyScalar(.9),this.drift.visible=n.drift>.02}};var Lx=Math.PI/180,an=(s,e,t)=>Math.min(t,Math.max(e,s)),ts=(s,e,t)=>{let n=an((t-s)/(e-s),0,1);return n*n*(3-2*n)},Za={clear:{fog:42e-5,overcast:0,clouds:.52,sun:1,rain:0,snow:0,wet:0,cover:0,wind:.3,dark:0,tint:"#b9d6ee"},cloudy:{fog:9e-4,overcast:.75,clouds:.86,sun:.3,rain:0,snow:0,wet:0,cover:0,wind:.38,dark:.12,tint:"#a6b1bb"},windy:{fog:6e-4,overcast:.2,clouds:.62,sun:.85,rain:0,snow:0,wet:0,cover:0,wind:.95,dark:0,tint:"#b4c6d8"},rain:{fog:.0016,overcast:1,clouds:1,sun:.1,rain:.85,snow:0,wet:1,cover:0,wind:.5,dark:.35,tint:"#7a858f"},storm:{fog:.0027,overcast:1,clouds:1,sun:.03,rain:1,snow:0,wet:1,cover:0,wind:1,dark:1,tint:"#3f4852"},snow:{fog:.0019,overcast:.85,clouds:1,sun:.35,rain:0,snow:1,wet:0,cover:1,wind:.32,dark:.1,tint:"#d3dbe2"},fog:{fog:.0066,overcast:.55,clouds:.5,sun:.3,rain:0,snow:0,wet:.2,cover:0,wind:.08,dark:.05,tint:"#c4c9cd"}},Ix=1.5,Dx=["fog","overcast","clouds","sun","rain","snow","wet","cover","wind","dark"],Ux=[[-18,"#02050d","#050a19","#0a1428","#0a1428","#000000"],[-9,"#06102e","#0e1d47","#1f2d5a","#363562","#24182c"],[-4,"#122052","#2a3c79","#67588d","#d06e7a","#a24a40"],[0,"#1d3d80","#4868ab","#e3987c","#ff8a48","#ff7030"],[4,"#2453a0","#6286c4","#f0bd92","#ffb36c","#ff9a52"],[10,"#2a64b4","#719fd9","#f1d9bd","#ffd59c","#ffcf88"],[22,"#2468c8","#5b9be3","#c6def3","#e1edf5","#fff1d6"],[50,"#1e5fc4","#4f92e0","#b4d4f2","#d2e5f3","#fff7e6"]].map(([s,...e])=>[s,...e.map(t=>new Z(t))]),yd=2.15;function Nx(s,e,t){let n=e/.6,i=s.r*n,r=s.g*n,a=s.b*n,o=.59719*i+.35458*r+.04823*a,c=.076*i+.90834*r+.01566*a,l=.0284*i+.13383*r+.83777*a,h=b=>(b*(b+.0245786)-90537e-9)/(b*(.983729*b+.432951)+.238081),u=h(o),d=h(c),f=h(l),g=b=>(b=Math.min(1,Math.max(0,b)),b<=.0031308?12.92*b:1.055*Math.pow(b,1/2.4)-.055);return t.setRGB(g(1.60475*u-.53108*d-.07367*f),g(-.10208*u+1.10813*d-.00605*f),g(-.00327*u-.07276*d+1.07602*f))}var Fx=`
  varying vec3 vDir;
  void main() { vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,Ox=`
  uniform vec3 uZenith, uMid, uHorizon, uBand, uSunCol, uSunDir;
  uniform float uGlow, uDisc, uBandAmt, uScale;
  varying vec3 vDir;
  void main() {
    vec3 d = normalize(vDir);
    float h = max(d.y, 0.0);
    vec3 col = mix(uHorizon, uMid, smoothstep(0.0, 0.24, h));
    col = mix(col, uZenith, smoothstep(0.16, 0.92, h));
    col = mix(col, uHorizon * 0.9, smoothstep(0.0, -0.1, d.y));            // dưới chân trời
    float sd = max(dot(d, uSunDir), 0.0);
    float band = pow(sd, 2.2) * (1.0 - smoothstep(0.0, 0.34, h));           // dải ấm dọc chân trời phía mặt trời
    col = mix(col, uBand, clamp(band * uBandAmt, 0.0, 1.0));
    col += uSunCol * (pow(sd, 5.0) * 0.32 + pow(sd, 42.0) * 0.85) * uGlow;  // quầng sáng
    col += uSunCol * smoothstep(0.99975, 0.9999, sd) * uDisc;                // đĩa mặt trời
    gl_FragColor = vec4(col * uScale, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
    // nhiễu rất nhẹ để gradient không bị phân dải
    gl_FragColor.rgb += (fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453) - 0.5) / 255.0;
  }`,Bx=new Z("#fff3df"),kx=new Z("#ff9a50"),zx=new Z("#8fb0ff"),Hx=`
  varying vec3 vDir;
  void main() { vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,Gx=`
  uniform float uTime, uCover, uFlash, uSoft;
  uniform vec2 uDrift;
  uniform vec3 uSunDir, uLit, uShade, uFlashCol;
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
    gl_FragColor = vec4(col, alpha);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }`,Qa=class{constructor(e,t,n){this.renderer=e,this.scene=t,this.camera=n,this.hour=17.55,this.auto=!1,this.tween=null,this.weather="clear",this.w={...Za.clear},this.tint=new Z(Za.clear.tint),this.target=Za.clear,this.windDir=new ue(.78,.62).normalize(),this.skyMat=new Pt({uniforms:{uZenith:{value:new Z},uMid:{value:new Z},uHorizon:{value:new Z},uBand:{value:new Z},uSunCol:{value:new Z},uSunDir:{value:new P(0,1,0)},uGlow:{value:1},uDisc:{value:1},uBandAmt:{value:1},uScale:{value:1}},vertexShader:Fx,fragmentShader:Ox,side:It,depthWrite:!1,fog:!1}),this.sky=new Ze(new $n(2400,48,24),this.skyMat),this.sky.renderOrder=-10,this.sky.frustumCulled=!1,t.add(this.sky),this.skyC={zen:new Z,mid:new Z,hor:new Z,band:new Z,sun:new Z},this.envScene=new vi,this.envScene.add(new Ze(new $n(900,32,16),this.skyMat)),this.pmrem=new zs(e),this.envRT=null,this.envTimer=0,this.envKey="";let i=new Float32Array(1800*3);for(let c=0;c<1800;c++){let l=new P().randomDirection();l.y=Math.abs(l.y)*.9+.1,l.normalize().multiplyScalar(3200),i.set([l.x,l.y,l.z],c*3)}let r=new qe;r.setAttribute("position",new ze(i,3)),this.stars=new On(r,new Qn({color:14674175,size:2.1,sizeAttenuation:!1,transparent:!0,opacity:0,depthWrite:!1,fog:!1})),this.stars.renderOrder=1,this.stars.frustumCulled=!1,t.add(this.stars);let a=js();this.moon=new Ze(new $n(55,24,16),new Yt({color:15659775,fog:!1,toneMapped:!1,transparent:!0,depthWrite:!1})),this.moon.renderOrder=2,this.moon.frustumCulled=!1,this.moonHalo=new Gs(new Ji({map:a,color:10467583,transparent:!0,opacity:.5,depthWrite:!1,blending:Un,fog:!1})),this.moonHalo.scale.setScalar(700),this.moon.add(this.moonHalo),t.add(this.moon),this.cloudMat=new Pt({uniforms:{uTime:{value:0},uCover:{value:.4},uFlash:{value:0},uSoft:{value:0},uDrift:{value:new ue},uSunDir:{value:new P(0,1,0)},uLit:{value:new Z},uShade:{value:new Z},uFlashCol:{value:new Z(1.5,1.7,2.4)}},vertexShader:Hx,fragmentShader:Gx,side:It,transparent:!0,depthWrite:!1,fog:!1}),this.dome=new Ze(new $n(2300,32,16),this.cloudMat),this.dome.renderOrder=3,this.dome.frustumCulled=!1,t.add(this.dome),this.cloudTime=0,this.haze=new Ze(new Qi(1800,1800,1,48,1,!0),new Pt({uniforms:{uColor:{value:new Z}},side:pt,transparent:!0,depthWrite:!1,fog:!1,vertexShader:"varying float vT; void main(){ vT = position.y + 0.5; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:"uniform vec3 uColor; varying float vT; void main(){ float a = 1.0 - vT; gl_FragColor = vec4(uColor, a * a); }"})),this.haze.renderOrder=5,this.haze.frustumCulled=!1,t.add(this.haze),this.boltGeo=new qe,this.boltGeo.setAttribute("position",new ze(new Float32Array(480),3)),this.boltGeo.setDrawRange(0,0),this.bolt=new yi(this.boltGeo,new Zi({color:14083327,transparent:!0,opacity:0,blending:Un,depthWrite:!1,fog:!1})),this.bolt.renderOrder=6,this.bolt.frustumCulled=!1,t.add(this.bolt),this.flashT=-1,this.nextStrike=2,this.flash=0,this.onThunder=null,this.sun=new $i(16777215,1),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048);let o=this.sun.shadow.camera;o.left=-38,o.right=38,o.top=38,o.bottom=-38,o.near=1,o.far=260,this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=.04,o.layers.enable(3),t.add(this.sun,this.sun.target),this.moonLight=new $i(zx,0),t.add(this.moonLight,this.moonLight.target),this.hemi=new Oa(12572927,4214832,.4),t.add(this.hemi),t.fog=new Ca(12179182,6e-4),this.precip=new Ja(t),this.state={night:0,lamps:0,dayF:1,warm:0,light:1,rain:0,snow:0,wet:0,cover:0,overcast:0,wind:.3,dark:0,drift:0,flash:0,windDir:this.windDir,fogColor:new Z,mistColor:new Z,sunDir:new P,elevation:0},this._c=new Z,this._c2=new Z,this._lit=new Z,this._shade=new Z,this._v=new P}setWeather(e){this.weather=e,this.target=Za[e],e==="storm"&&(this.nextStrike=Math.min(this.nextStrike,1.2))}setTime(e){if(e==null){this.auto=!0,this.tween=null;return}this.auto=!1,this.tween=e}get clock(){let e=Math.floor(this.hour),t=Math.floor((this.hour-e)*60);return String(e).padStart(2,"0")+":"+String(t).padStart(2,"0")}_strike(e){let t=Math.random()*Math.PI*2,n=800+Math.random()*900,i=new P(e.x+Math.cos(t)*n,0,e.z+Math.sin(t)*n),r=new P(i.x+(Math.random()-.5)*240,650+Math.random()*200,i.z+(Math.random()-.5)*240),a=this.boltGeo.attributes.position,o=0,c=(l,h,u,d)=>{let f=l.clone();for(let g=1;g<=u;g++){let b=g/u,m=l.clone().lerp(h,b);g<u&&m.add(new P((Math.random()-.5)*d,0,(Math.random()-.5)*d)),a.setXYZ(o++,f.x,f.y,f.z),a.setXYZ(o++,m.x,m.y,m.z),f=m}return f};c(r,i,16,110);for(let l=0;l<3;l++){let h=.25+Math.random()*.5,u=r.clone().lerp(i,h),d=u.clone().add(new P((Math.random()-.5)*380,-(120+Math.random()*260),(Math.random()-.5)*380));c(u,d,5,60)}a.needsUpdate=!0,this.boltGeo.setDrawRange(0,o),this.flashT=0,this.onThunder&&this.onThunder(an(n/340,.7,4.2),an(1.3-n/1800,.35,1))}update(e,t){let n=this.camera.position;if(this.auto)this.hour=(this.hour+e*.06)%24;else if(this.tween!=null){let F=(this.tween-this.hour+36)%24-12,B=5*e;Math.abs(F)<=B?(this.hour=this.tween,this.tween=null):this.hour=(this.hour+Math.sign(F)*B+24)%24}let i=1-Math.exp(-e*1.4);for(let F of Dx)F!=="wet"&&(this.w[F]+=(this.target[F]-this.w[F])*i);let r=this.target.wet-this.w.wet;this.w.wet+=Math.sign(r)*Math.min(Math.abs(r),e/Ix),this.tint.lerp(this._c.set(this.target.tint),i);let a=this.w,o=a.overcast,c=a.dark;if(this.weather==="storm"&&a.dark>.5&&(this.nextStrike-=e,this.nextStrike<=0&&(this._strike(n),this.nextStrike=3.5+Math.random()*7)),this.flashT>=0){this.flashT+=e;let F=this.flashT;this.flash=an(Math.exp(-F*11)+.75*(F>.17?Math.exp(-(F-.17)*8):0),0,1),F>1.6&&(this.flashT=-1,this.flash=0,this.boltGeo.setDrawRange(0,0))}let l=this.flash;this.bolt.material.opacity=this.flashT>=0&&this.flashT<.5?l:0,this.bolt.visible=this.bolt.material.opacity>.02;let h=65*Math.sin((this.hour-6)/24*Math.PI*2),u=this.state.sunDir;u.setFromSphericalCoords(1,Math.PI/2-h*Lx,Math.PI+.35);let d=ts(-4,14,h),f=1-ts(-12,0,h),g=Math.exp(-Math.pow((h-3)/10,2)),b=Ux,m=0;for(;m<b.length-2&&h>b[m+1][0];)m++;let p=b[m],_=b[m+1],x=an((h-p[0])/(_[0]-p[0]),0,1),y=this.skyC;["zen","mid","hor","band","sun"].forEach((F,B)=>y[F].copy(p[B+1]).lerp(_[B+1],x));let R=.07+.93*d,w=an(o*.92+c*.08,0,1),C=this._c.copy(this.tint).multiplyScalar(R).lerp(this._c2.set("#c9997f").multiplyScalar(R),g*.35*(1-c));y.zen.lerp(this._lit.copy(C).multiplyScalar(.8),w),y.mid.lerp(this._lit.copy(C).multiplyScalar(.92),w),y.hor.lerp(C,w),y.band.lerp(C,w);let O=yd*(1-.6*c);for(let F of["zen","mid","hor","band"])y[F].multiplyScalar(O).add(this._c2.setRGB(.55,.65,1).multiplyScalar(l*1.6));let v=this.skyMat.uniforms;v.uZenith.value.copy(y.zen),v.uMid.value.copy(y.mid),v.uHorizon.value.copy(y.hor),v.uBand.value.copy(y.band),v.uSunCol.value.copy(y.sun).multiplyScalar(yd),v.uSunDir.value.copy(u),v.uGlow.value=(1-o*.95)*ts(-6,1,h)*(1-c),v.uDisc.value=(1-o)*ts(-1.5,.5,h)*22,v.uBandAmt.value=(1-o*.85)*(.25+.75*g)*ts(-11,-2,h),this.renderer.toneMappingExposure=(.5+.12*g)*(1-.5*c);let S=Nx(this._lit.copy(y.hor).lerp(y.band,.2*v.uBandAmt.value),this.renderer.toneMappingExposure,this.state.fogColor);this.scene.fog.color.copy(S),this.scene.fog.density=a.fog,this.state.mistColor.copy(S).lerp(this._c.setRGB(.93,.95,.97).multiplyScalar(.1+.9*d*(1-.6*c)),.3),this.sun.intensity=3.4*ts(-2,9,h)*a.sun,this.sun.color.copy(Bx).lerp(kx,an(g*1.3,0,1)),this.moonLight.intensity=1*ts(-3,-12,h)*(1-.6*o),t&&(this.sun.position.copy(t).addScaledVector(u,120),this.sun.target.position.copy(t),this.moonLight.position.copy(t).addScaledVector(u,-120),this.moonLight.target.position.copy(t)),this.hemi.color.copy(S).lerp(this._c.set("#6f8cd0"),f*.75).lerp(this._c.set("#c4d4ff"),l),this.hemi.groundColor.set("#3a4630").multiplyScalar(.25+.75*d),this.hemi.intensity=(.16+.45*d+.28*f)*(1-.4*o)*(1-.35*c)+l*3.2,this.sky.position.copy(n),this.stars.position.copy(n),this.dome.position.copy(n),this.haze.position.set(n.x,0,n.z);let N=150+a.fog*1e5;this.haze.scale.y=N,this.haze.position.y=N/2-60,this.haze.material.uniforms.uColor.value.copy(S),this.stars.material.opacity=f*(1-o*.95),this.stars.visible=this.stars.material.opacity>.01,this.moon.position.copy(n).addScaledVector(this._v.copy(u).negate(),2900),this.moon.visible=-h>-4&&o<.95,this.moon.material.opacity=(1-o)*an((-h+4)/8,0,1),this.moonHalo.material.opacity=.5*this.moon.material.opacity;let Y=an(g*1.1,0,1)*(1-.92*c),V=this._lit.set("#ffffff").lerp(this._c2.set("#ff9d66"),Y).multiplyScalar(2.4*d);V.add(this._c2.set("#7f98d8").multiplyScalar(.2*f*(1-o*.6)));let A=this._shade.copy(y.mid).multiplyScalar(.5).lerp(this._c2.copy(y.hor).multiplyScalar(.62),.45).lerp(this._c2.set("#a86a7a").multiplyScalar(1.05*d),Y*.5);A.add(this._c2.set("#101b38").multiplyScalar(.3*f)),V.multiplyScalar(1-.8*c),this.cloudTime+=e;let L=this.cloudMat.uniforms;L.uTime.value=this.cloudTime,L.uCover.value=a.clouds,L.uSoft.value=an(o*.9+c*.3,0,1),L.uFlash.value=l,L.uDrift.value.copy(this.windDir).multiplyScalar(.003+.02*a.wind),L.uSunDir.value.copy(h>=-2?u:this._v.copy(u).negate()),L.uLit.value.copy(V),L.uShade.value.copy(A);let D=this.state;D.elevation=h,D.dayF=d,D.night=f,D.warm=g,D.overcast=o,D.rain=a.rain,D.snow=a.snow,D.wet=a.wet,D.cover=a.cover,D.wind=a.wind,D.dark=c,D.flash=l,D.drift=an((a.wind-.5)*2.2,0,1)*(1-a.rain)*(1-a.snow);let W=an(a.rain*.35+a.snow*.25+(a.fog>.003?.3:0),0,.5);if(D.lamps=an(Math.max(f,.7*(1-d))+W*d+c*.7,0,1),D.light=.14+.86*d*(1-.3*o)*(1-.55*c)+l*.6,this.precip.update(e,n,D,this.renderer.domElement.height),this.envTimer-=e,this.envTimer<=0){let F=[h.toFixed(1),Math.round(o*12),Math.round(c*12)].join("|");(F!==this.envKey||!this.envRT)&&(this.envKey=F,this._captureEnv()),this.envTimer=.7}}_captureEnv(){let e=this.skyMat.uniforms,t=e.uDisc.value;e.uScale.value=2.1,e.uDisc.value=Math.min(t,4);let n=this.pmrem.fromScene(this.envScene,0,1,3e3);e.uScale.value=1,e.uDisc.value=t,this.envRT&&this.envRT.dispose(),this.envRT=n,this.scene.environment=n.texture}};var $a=class extends ni{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new il(t)}),this.register(function(t){return new dl(t)}),this.register(function(t){return new fl(t)}),this.register(function(t){return new pl(t)}),this.register(function(t){return new rl(t)}),this.register(function(t){return new al(t)}),this.register(function(t){return new ol(t)}),this.register(function(t){return new cl(t)}),this.register(function(t){return new nl(t)}),this.register(function(t){return new ll(t)}),this.register(function(t){return new sl(t)}),this.register(function(t){return new ul(t)}),this.register(function(t){return new hl(t)}),this.register(function(t){return new el(t)}),this.register(function(t){return new ml(t)}),this.register(function(t){return new gl(t)})}load(e,t,n,i){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=Ti.extractUrlBase(e);a=Ti.resolveURL(l,this.path)}else a=Ti.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new yr(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Td){try{a[Xe.KHR_BINARY_GLTF]=new bl(e)}catch(u){i&&i(u);return}r=JSON.parse(a[Xe.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new El(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case Xe.KHR_MATERIALS_UNLIT:a[u]=new tl;break;case Xe.KHR_DRACO_MESH_COMPRESSION:a[u]=new xl(r,this.dracoLoader);break;case Xe.KHR_TEXTURE_TRANSFORM:a[u]=new _l;break;case Xe.KHR_MESH_QUANTIZATION:a[u]=new vl;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function Vx(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}var Xe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},el=class{constructor(e){this.parser=e,this.name=Xe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new Z(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Mt);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new $i(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Ba(h),l.distance=u;break;case"spot":l=new Xs(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Ri(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},tl=class{constructor(){this.name=Xe.KHR_MATERIALS_UNLIT}getMaterialType(){return Yt}extendParams(e,t,n){let i=[];e.color=new Z(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Mt),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,$e))}return Promise.all(i)}},nl=class{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},il=class{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:fn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ue(o,o)}return Promise.all(r)}},sl=class{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:fn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}},rl=class{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:fn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Z(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Mt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,$e)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}},al=class{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:fn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}},ol=class{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:fn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Z().setRGB(o[0],o[1],o[2],Mt),Promise.all(r)}},cl=class{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:fn}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},ll=class{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:fn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new Z().setRGB(o[0],o[1],o[2],Mt),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,$e)),Promise.all(r)}},hl=class{constructor(e){this.parser=e,this.name=Xe.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:fn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}},ul=class{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:fn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}},dl=class{constructor(e){this.parser=e,this.name=Xe.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},fl=class{constructor(e){this.parser=e,this.name=Xe.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},pl=class{constructor(e){this.parser=e,this.name=Xe.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},ml=class{constructor(e){this.name=Xe.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}},gl=class{constructor(e){this.name=Xe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==bn.TRIANGLES&&l.mode!==bn.TRIANGLE_STRIP&&l.mode!==bn.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(let g of u){let b=new Re,m=new P,p=new Xt,_=new P(1,1,1),x=new dn(g.geometry,g.material,d);for(let y=0;y<d;y++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,y),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,y),c.SCALE&&_.fromBufferAttribute(c.SCALE,y),x.setMatrixAt(y,b.compose(m,p,_));for(let y in c)if(y==="_COLOR_0"){let R=c[y];x.instanceColor=new Zn(R.array,R.itemSize,R.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&g.geometry.setAttribute(y,c[y]);at.prototype.copy.call(x,g),this.parser.assignFinalMaterial(x),f.push(x)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},Td="glTF",wr=12,Md={JSON:1313821514,BIN:5130562},bl=class{constructor(e){this.name=Xe.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,wr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Td)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-wr,r=new DataView(e,wr),a=0;for(;a<i;){let o=r.getUint32(a,!0);a+=4;let c=r.getUint32(a,!0);if(a+=4,c===Md.JSON){let l=new Uint8Array(e,wr+a,o);this.content=n.decode(l)}else if(c===Md.BIN){let l=wr+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},xl=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Xe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let h in a){let u=Ml[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=Ml[h]||h.toLowerCase();if(a[h]!==void 0){let d=n.accessors[e.attributes[h]],f=Js[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(let g in f.attributes){let b=f.attributes[g],m=c[g];m!==void 0&&(b.normalized=m)}u(f)},o,l,Mt,d)})})}},_l=class{constructor(){this.name=Xe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},vl=class{constructor(){this.name=Xe.KHR_MESH_QUANTIZATION}},eo=class extends Si{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,g=e*l,b=g-l,m=-2*f+3*d,p=f-d,_=1-m,x=p-d+u;for(let y=0;y!==o;y++){let R=a[b+y+o],w=a[b+y+c]*h,C=a[g+y+o],O=a[g+y]*h;r[y]=_*R+x*w+m*C+p*O}return r}},Wx=new Xt,yl=class extends eo{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return Wx.fromArray(r).normalize().toArray(r),r}},bn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Js={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Sd={9728:bt,9729:yt,9984:fa,9985:Nc,9986:hr,9987:bi},Ed={33071:tn,33648:mr,10497:Nn},Zc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ml={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ai={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Xx={CUBICSPLINE:void 0,LINEAR:Yi,STEP:Fs},Qc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function qx(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Kt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Dn})),s.DefaultMaterial}function ns(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Ri(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Yx(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;a.push(d)}if(i){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;o.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],d=l[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function jx(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Kx(s){let e,t=s.extensions&&s.extensions[Xe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+$c(t.attributes):e=s.indices+":"+$c(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+$c(s.targets[n]);return e}function $c(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Sl(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Jx(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var Zx=new Re,El=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Vx,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new Fa(this.options.manager):this.textureLoader=new za(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new yr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return ns(r,o,i),Ri(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let a=t[i].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,h]of a.children.entries())r(h,o.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Xe.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,a){n.load(Ti.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let a=Zc[i.type],o=Js[i.componentType],c=i.normalized===!0,l=new o(i.count*a);return Promise.resolve(new ze(l,a,c))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],c=Zc[i.type],l=Js[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0,b,m;if(f&&f!==u){let p=Math.floor(d/f),_="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count,x=t.cache.get(_);x||(b=new l(o,p*f,i.count*f/h),x=new Hs(b,f/h),t.cache.add(_,x)),m=new Ki(x,c,d%f/h,g)}else o===null?b=new l(i.count*c):b=new l(o,d,i.count*c),m=new ze(b,c,g);if(i.sparse!==void 0){let p=Zc.SCALAR,_=Js[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,R=new _(a[1],x,i.sparse.count*p),w=new l(a[2],y,i.sparse.count*c);o!==null&&(m=new ze(m.array.slice(),m.itemSize,m.normalized));for(let C=0,O=R.length;C<O;C++){let v=R[C];if(m.setX(v,w[C*c]),c>=2&&m.setY(v,w[C*c+1]),c>=3&&m.setZ(v,w[C*c+2]),c>=4&&m.setW(v,w[C*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let i=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return h.magFilter=Sd[d.magFilter]||yt,h.minFilter=Sd[d.minFilter]||bi,h.wrapS=Ed[d.wrapS]||Nn,h.wrapT=Ed[d.wrapT]||Nn,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=i.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(u){l=!0;let d=new Blob([u],{type:a.mimeType});return c=o.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(b){let m=new Ct(b);m.needsUpdate=!0,d(m)}),t.load(Ti.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return l===!0&&o.revokeObjectURL(c),u.userData.mimeType=a.mimeType||Jx(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Xe.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[Xe.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=r.associations.get(a);a=r.extensions[Xe.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Qn,Dt.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Zi,Dt.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Kt}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],a,o={},c=r.extensions||{},l=[];if(c[Xe.KHR_MATERIALS_UNLIT]){let u=i[Xe.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),l.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new Z(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Mt),o.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",u.baseColorTexture,$e)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=pt);let h=r.alphaMode||Qc.OPAQUE;if(h===Qc.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Qc.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Yt&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new ue(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==Yt&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Yt){let u=r.emissiveFactor;o.emissive=new Z().setRGB(u[0],u[1],u[2],Mt)}return r.emissiveTexture!==void 0&&a!==Yt&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,$e)),Promise.all(l).then(function(){let u=new a(o);return r.name&&(u.name=r.name),Ri(u,r),t.associations.set(u,{materials:e}),r.extensions&&ns(i,u,r),u})}createUniqueName(e){let t=rt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[Xe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return wd(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],h=Kx(l),u=i[h];if(u)a.push(u.promise);else{let d;l.extensions&&l.extensions[Xe.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=wd(new qe,l,t),i[h]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let h=a[c].material===void 0?qx(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,g=h.length;f<g;f++){let b=h[f],m=a[f],p,_=l[f];if(m.mode===bn.TRIANGLES||m.mode===bn.TRIANGLE_STRIP||m.mode===bn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Pa(b,_):new Ze(b,_),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===bn.TRIANGLE_STRIP?p.geometry=qc(p.geometry,Ga):m.mode===bn.TRIANGLE_FAN&&(p.geometry=qc(p.geometry,Sr));else if(m.mode===bn.LINES)p=new yi(b,_);else if(m.mode===bn.LINE_STRIP)p=new Vs(b,_);else if(m.mode===bn.LINE_LOOP)p=new Ia(b,_);else if(m.mode===bn.POINTS)p=new On(b,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&jx(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Ri(p,r),m.extensions&&ns(i,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&ns(i,u[0],r),u[0];let d=new ht;r.extensions&&ns(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new xt(Xu.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new _i(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Ri(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),a=i,o=[],c=[];for(let l=0,h=a.length;l<h;l++){let u=a[l];if(u){o.push(u);let d=new Re;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new La(o,c)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],c=[],l=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){let f=i.channels[u],g=i.samplers[f.sampler],b=f.target,m=b.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,_=i.parameters!==void 0?i.parameters[g.output]:g.output;b.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",_)),l.push(g),h.push(b))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],g=u[2],b=u[3],m=u[4],p=[];for(let _=0,x=d.length;_<x;_++){let y=d[_],R=f[_],w=g[_],C=b[_],O=m[_];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();let v=n._createAnimationTracks(y,R,w,C,O);if(v)for(let S=0;S<v.length;S++)p.push(v[S])}return new Na(r,void 0,p)})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));let c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){let h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Zx)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(r.isBone===!0?h=new _r:l.length>1?h=new ht:l.length===1?h=l[0]:h=new at,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=a),Ri(h,r),r.extensions&&ns(n,h,r),r.matrix!==void 0){let u=new Re;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new ht;n.name&&(r.name=i.createUniqueName(n.name)),Ri(r,n),n.extensions&&ns(t,r,n);let a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);let l=h=>{let u=new Map;for(let[d,f]of i.associations)(d instanceof Dt||d instanceof Ct)&&u.set(d,f);return h.traverse(d=>{let f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){let a=[],o=e.name?e.name:e.uuid,c=[];Ai[r.path]===Ai.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(o);let l;switch(Ai[r.path]){case Ai.weights:l=ei;break;case Ai.rotation:l=Bn;break;case Ai.position:case Ai.scale:l=ti;break;default:switch(n.itemSize){case 1:l=ei;break;case 2:case 3:default:l=ti;break}break}let h=i.interpolation!==void 0?Xx[i.interpolation]:Yi,u=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){let g=new l(c[d]+"."+Ai[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Sl(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof Bn?yl:eo;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Qx(s,e,t){let n=e.attributes,i=new qt;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new P(c[0],c[1],c[2]),new P(l[0],l[1],l[2])),o.normalized){let h=Sl(Js[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new P,c=new P;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let b=Sl(Js[d.componentType]);c.multiplyScalar(b)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;let a=new sn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function wd(s,e,t){let n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){s.setAttribute(o,c)})}for(let a in n){let o=Ml[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){let a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return Ke.workingColorSpace!==Mt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ke.workingColorSpace}" not supported.`),Ri(s,e),Qx(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Yx(s,e.targets,t):s})}var Ad=(function(){"use strict";var s="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?e:s,r,a=WebAssembly.instantiate(o(i),{}).then(function(p){r=p.instance,r.exports.__wasm_call_ctors()});function o(p){for(var _=new Uint8Array(p.length),x=0;x<p.length;++x){var y=p.charCodeAt(x);_[x]=y>96?y-97:y>64?y-39:y+4}for(var R=0,x=0;x<p.length;++x)_[R++]=_[x]<60?n[_[x]]:(_[x]-60)*64+_[++x];return _.buffer.slice(0,R)}function c(p,_,x,y,R,w){var C=r.exports.sbrk,O=x+3&-4,v=C(O*y),S=C(R.length),N=new Uint8Array(r.exports.memory.buffer);N.set(R,S);var Y=p(v,x,y,S,R.length);if(Y==0&&w&&w(v,O,y),_.set(N.subarray(v,v+x*y)),C(v-C(0)),Y!=0)throw new Error("Malformed buffer data: "+Y)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],d=0;function f(p){var _={object:new Worker(p),pending:0,requests:{}};return _.object.onmessage=function(x){var y=x.data;_.pending-=y.count,_.requests[y.id][y.action](y.value),delete _.requests[y.id]},_}function g(p){for(var _="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(o(i))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+c.toString()+m.toString(),x=new Blob([_],{type:"text/javascript"}),y=URL.createObjectURL(x),R=0;R<p;++R)u[R]=f(y);URL.revokeObjectURL(y)}function b(p,_,x,y,R){for(var w=u[0],C=1;C<u.length;++C)u[C].pending<w.pending&&(w=u[C]);return new Promise(function(O,v){var S=new Uint8Array(x),N=d++;w.pending+=p,w.requests[N]={resolve:O,reject:v},w.object.postMessage({id:N,count:p,size:_,source:S,mode:y,filter:R},[S.buffer])})}function m(p){a.then(function(){var _=p.data;try{var x=new Uint8Array(_.count*_.size);c(r.exports[_.mode],x,_.count,_.size,_.source,r.exports[_.filter]),self.postMessage({id:_.id,count:_.count,action:"resolve",value:x},[x.buffer])}catch(y){self.postMessage({id:_.id,count:_.count,action:"reject",value:y})}})}return{ready:a,supported:!0,useWorkers:function(p){g(p)},decodeVertexBuffer:function(p,_,x,y,R){c(r.exports.meshopt_decodeVertexBuffer,p,_,x,y,r.exports[l[R]])},decodeIndexBuffer:function(p,_,x,y){c(r.exports.meshopt_decodeIndexBuffer,p,_,x,y)},decodeIndexSequence:function(p,_,x,y){c(r.exports.meshopt_decodeIndexSequence,p,_,x,y)},decodeGltfBuffer:function(p,_,x,y,R,w){c(r.exports[h[R]],p,_,x,y,r.exports[l[w]])},decodeGltfBufferAsync:function(p,_,x,y,R){return u.length>0?b(p,_,x,h[y],l[R]):a.then(function(){var w=new Uint8Array(p*_);return c(r.exports[h[y]],w,p,_,x,r.exports[l[R]]),w})}}})();var Rd=[{id:"mustang",name:"Mustang '67",file:"assets/models/mustang.glb",length:4.67,flip:!0,eye:[-.39,1.08,.3],doubleSide:!0,wheels:/^(Wheel|Tyre)/},{id:"mustang-blue",name:"Mustang '67 Xanh",file:"assets/models/mustang-blue.glb",length:4.67,flip:!0,eye:[-.39,1.08,.3],doubleSide:!0,wheels:/^(Wheel|Tyre)/},{id:"divo",name:"Bugatti Divo",file:"assets/models/bugatti-divo.glb",length:4.64,flip:!0,wheels:/^(4_3|5_17)$/},{id:"milktruck",name:"Milk Truck",file:"assets/models/milktruck.glb",length:5,flip:!0,eye:[-.6,1.8,-1.3],wheels:/^Wheels/}],Zs=[{id:"reed",name:"Đồng cỏ lau",icon:"🌾"},{id:"forest",name:"Đồi thông",icon:"🌲"},{id:"mountain",name:"Đường núi",icon:"⛰️"}],Tr=[{id:"clear",name:"Trời nắng",icon:"☀️"},{id:"cloudy",name:"Nhiều mây",icon:"☁️"},{id:"windy",name:"Gió lớn",icon:"💨"},{id:"rain",name:"Mưa",icon:"🌧️"},{id:"storm",name:"Bão",icon:"⛈️"},{id:"snow",name:"Tuyết",icon:"❄️"},{id:"fog",name:"Sương mù",icon:"🌫️"}],Ci=[{id:"sunrise",name:"Bình minh",icon:"🌅",hour:6.4},{id:"noon",name:"Ban ngày",icon:"🌤️",hour:12.5},{id:"golden",name:"Giờ vàng",icon:"🌞",hour:17.55},{id:"sunset",name:"Hoàng hôn",icon:"🌇",hour:17.85},{id:"night",name:"Ban đêm",icon:"🌙",hour:22.5},{id:"auto",name:"Tự động",icon:"🕒",hour:null}],Pi=[{id:"chase",name:"Sau xe"},{id:"low",name:"Sát mặt đường"},{id:"side",name:"Bên hông"},{id:"cockpit",name:"Trong xe"},{id:"orbit",name:"Quay quanh"},{id:"drone",name:"Từ trên cao"}],to=[{id:"all",name:"Nhạc + âm thanh",icon:"🎵"},{id:"music",name:"Chỉ nhạc",icon:"🎶"},{id:"off",name:"Tắt tiếng",icon:"🔇"}];var wl=(s,e,t)=>Math.min(t,Math.max(e,s)),no=class{constructor(e){this.root=new ht,this.tilt=new ht,this.root.add(this.tilt),e.add(this.root),this.loader=new $a,this.loader.setMeshoptDecoder(Ad),this.onProgress=null,this.prepare=null,this.list=[],this.cache=new Map,this.current=null,this.token=0,this.time=0,this.pitch=0,this.roll=0,this.lastSpeed=0,this.dim={length:4.5,width:1.9,height:1.3},this.glowTex=js(),this.lights=new ht,this.root.add(this.lights),this.spots=[0,1].map(()=>{let n=new Xs(16773592,0,110,.62,.7,1.1);return this.lights.add(n,n.target),n});let t=(n,i)=>{let r=new Gs(new Ji({map:this.glowTex,color:n,transparent:!0,opacity:0,depthWrite:!1,blending:Un}));return r.scale.setScalar(i),this.lights.add(r),r};this.headGlow=[t(16773328,1),t(16773328,1)],this.tailGlow=[t(16722458,1),t(16722458,1)],this.lampLevel=0}async probe(){let e=[];for(let t of Rd){if(!t.optional){e.push(t);continue}try{let n=await fetch(t.file,{method:"HEAD"}),i=n.headers.get("content-type")||"";n.ok&&!i.includes("text/html")&&e.push(t)}catch{}}return this.list=e,e}async select(e){let t=this.list[e],n=++this.token,i=this.cache.get(t.id);if(i||(i=await this._load(t),this.cache.set(t.id,i)),n!==this.token)return!1;if(this.prepare&&!i.ready){try{await this.prepare(i.group)}catch(r){console.warn("prepare",r)}if(i.ready=!0,n!==this.token)return!1}return this.current&&this.tilt.remove(this.current.group),this.tilt.add(i.group),this.current=i,this.dim=i.dim,this._placeLights(i.dim),!0}async _load(e){let n=(await this.loader.loadAsync(e.file,u=>{this.onProgress&&u.total&&this.onProgress(u.loaded/u.total)})).scene,i=new ht;i.add(n);let r=new ht;if(r.add(i),e.hide){let u=[];n.traverse(d=>{e.hide.test(d.name||"")&&u.push(d)}),u.forEach(d=>d.removeFromParent())}n.rotation.x=e.rotX||0,i.updateMatrixWorld(!0);let a=new qt().setFromObject(i,!0),o=a.getSize(new P);o.x>o.z*1.02&&(n.rotation.y+=Math.PI/2),e.flip&&(n.rotation.y+=Math.PI),i.updateMatrixWorld(!0),a.setFromObject(i,!0),o=a.getSize(new P),i.scale.setScalar(e.length/o.z),i.updateMatrixWorld(!0),a.setFromObject(i,!0);let c=a.getCenter(new P);i.position.set(-c.x,-a.min.y,-c.z),r.updateMatrixWorld(!0),a.setFromObject(r,!0);let l={length:a.max.z-a.min.z,width:a.max.x-a.min.x,height:a.max.y-a.min.y};l.eye=e.eye||[-l.width*.2,Math.min(l.height*.8,1.15),0],n.traverse(u=>{if(!u.isMesh)return;let d=Array.isArray(u.material)?u.material:[u.material],f=!1;for(let g of d)g.transmission>0&&(g.transmission=0,g.transparent=!0,g.opacity=.32,g.depthWrite=!1,f=!0),g.transparent&&g.opacity<.9&&(f=!0),e.doubleSide&&!g.transparent&&(g.side=pt),g.envMapIntensity=.5,ii(g);u.castShadow=!f,u.receiveShadow=!0});let h=e.wheels?this._wheels(r,e,l):[];return{def:e,group:r,dim:l,wheels:h,anim:null}}_wheels(e,t,n){let i=[];e.traverse(a=>{if(!(a===e||!t.wheels.test(a.name||""))){for(let o=a.parent;o&&o!==e;o=o.parent)if(t.wheels.test(o.name||""))return;i.push(a)}});let r=[];for(let a of i){let o=new qt().setFromObject(a,!0);if(o.isEmpty())continue;let c=o.getSize(new P),l=o.getCenter(new P);if(!(Math.abs(c.y-c.z)<.28*Math.max(c.y,c.z)&&c.z<n.length*.35&&c.y<n.height*.95&&c.y>n.height*.12&&l.y<n.height*.5))continue;let d=new at;d.position.copy(l),e.add(d),e.updateMatrixWorld(!0),d.attach(a),r.push({pivot:d,radius:c.y/2})}return r}_placeLights(e){let t=e.width*.3,n=Math.min(.7,e.height*.45);this.spots.forEach((i,r)=>{let a=r?t:-t;i.position.set(a,n,-e.length/2+.3),i.target.position.set(a*.6,0,-34)}),this.headGlow.forEach((i,r)=>i.position.set(r?t:-t,n,-e.length/2-.05)),this.tailGlow.forEach((i,r)=>i.position.set(r?t:-t,n+.05,e.length/2+.05))}setLights(e){this.lampLevel=e}update(e,t){this.time+=e,this.root.position.copy(t.pos),this.root.rotation.set(t.pitch||0,t.yaw,0,"YXZ");let n=(t.speed-this.lastSpeed)/Math.max(e,.001);this.lastSpeed=t.speed;let i=1-Math.exp(-e*4);this.pitch+=(wl(n*.004,-.04,.04)-this.pitch)*i,this.roll+=(wl(-t.latVel*.012,-.05,.05)-this.roll)*i;let r=wl(t.speed/20,0,1);if(this.tilt.rotation.set(this.pitch,0,this.roll),this.tilt.position.y=(.005*Math.sin(this.time*7.3)+.004*Math.sin(this.time*12.1))*r,this.current)for(let o of this.current.wheels)o.pivot.rotation.x-=t.speed*e/o.radius;let a=this.lampLevel;this.spots.forEach(o=>{o.intensity=1800*a}),this.headGlow.forEach(o=>{o.material.opacity=.9*a}),this.tailGlow.forEach(o=>{o.material.opacity=.85*a})}};var Qs=(s,e,t)=>Math.min(t,Math.max(e,s)),$x=(s,e,t)=>{let n=((e-s+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI;return s+n*t},io=class{constructor(e){this.camera=e,this.mode=0,this.yaw=0,this.orbit=.9,this.relP=new P,this.relL=new P,this.fov=60,this.first=!0,this.blend=0,this.cine=0,this.intro=-1,this._p=new P,this._l=new P,this._f=new P,this._r=new P,this._cp=new P,this._cl=new P,this.look={yaw:0,pitch:0,hold:!1,idle:0},this.zoom=1,this.zoomS=1}zoomBy(e){this.zoom=Qs(this.zoom*e,.4,3)}lookBy(e,t){let n=this.look;n.yaw=Math.atan2(Math.sin(n.yaw-e),Math.cos(n.yaw-e)),n.pitch=Qs(n.pitch+t,-1.2,1.2)}get name(){return Pi[this.mode].name}startIntro(){this.intro=0,this.first=!0}setMode(e){this.mode=e%Pi.length,this.intro=-1,this.blend=.7;let t=Pi[this.mode].id==="cockpit";this.camera.near=t?.1:.3,this.camera.updateProjectionMatrix()}update(e,t){let n=Pi[this.mode].id,{pos:i,speed:r,dim:a}=t;this.yaw=this.first?t.yaw:$x(this.yaw,t.yaw,1-Math.exp(-e*3));let o=(V,A)=>A.set(-Math.sin(V),0,-Math.cos(V)),c=(V,A)=>A.set(Math.cos(V),0,-Math.sin(V)),l=o(this.yaw,this._f),h=new P(-Math.sin(t.yaw),0,-Math.cos(t.yaw)),u=c(t.yaw,this._r),d=this._p,f=this._l,g=5,b=7,m=60,p=!1,_=Qs(r/45,0,1),x=t.fx||0,y=Math.tan(t.pitch||0),R=this.cine;switch(n){case"chase":d.copy(i).addScaledVector(l,-(a.length*.5+6.2+1.4*x+1.8*R)).setY(i.y+2.3+a.height*.4),f.copy(i).addScaledVector(l,13).setY(i.y+1.75+y*10),m=58+_*4+x*12-7*R;break;case"low":d.copy(i).addScaledVector(l,-(a.length*.5+4.2)).setY(i.y+.95),f.copy(i).addScaledVector(l,10).setY(i.y+1+y*10),m=68+_*4+x*12;break;case"side":{let V=Math.max(4.4,a.width*.5+3.6);d.copy(i).addScaledVector(u,(t.side||1)*V).setY(i.y+.85),f.copy(i).setY(i.y+a.height*.42);let A=Math.atan((a.length*.5+.9)/V),L=this.camera.aspect||1.6;m=Math.max(34,2*Math.atan(Math.tan(A)/L)*180/Math.PI)+x*6,g=9,b=12;break}case"cockpit":{let[V,A,L]=a.eye;d.copy(i).addScaledVector(u,V).addScaledVector(h,-L).setY(i.y+A-y*L),f.copy(d).addScaledVector(h,30).setY(d.y-.12+y*30),p=!0,m=72+_*3+x*10;break}case"orbit":this.orbit+=e*.2,d.set(i.x+Math.cos(this.orbit)*8.5,i.y+2.2+Math.sin(this.orbit*.7)*.8,i.z+Math.sin(this.orbit)*8.5),f.copy(i).setY(i.y+.8),m=48+x*8;break;case"drone":d.copy(i).addScaledVector(l,-15).setY(i.y+13),f.copy(i).addScaledVector(l,6).setY(i.y+.5),g=3.5,m=56+x*10;break}let w=!1;if(this.intro>=0&&n==="chase"){this.intro+=e;let V=Math.min(1,this.intro/6.5),A=V*V*(3-2*V);if(V>=1)this.intro=-1;else{w=!0;let L=a.length*.5+6.2+1.8*R,D=.5+(Math.PI-.5)*A,W=6.2+(L-6.2)*A,F=i.y+.65+(2.3+a.height*.4-.65)*A,B=f.clone();d.copy(i).addScaledVector(h,Math.cos(D)*W).addScaledVector(u,(t.side||1)*Math.sin(D)*Math.min(W,3.4)).setY(F),f.copy(i).setY(i.y+.7).lerp(B,A),m=36+(m-36)*A}}else this.intro>=0&&(this.intro=-1);this.blend=Math.max(0,this.blend-e);let C=1-Math.exp(-e*g),O=1-Math.exp(-e*b);p&&(C=O=this.blend>0?1-Math.exp(-e*9):1),(this.first||w)&&(C=O=1),this.relP.lerp(d.sub(i),C),this.relL.lerp(f.sub(i),O),this.fov+=(m-this.fov)*(this.first?1:1-Math.exp(-e*3)),this.first=!1;let v=this.look;if(v.hold)v.idle=0;else if((v.idle+=e)>.8){let V=1-Math.exp(-e*2.5);v.yaw-=v.yaw*V,v.pitch-=v.pitch*V}let S=this._cp.copy(this.relP),N=this._cl.copy(this.relL);if(Math.abs(v.yaw)>1e-4||Math.abs(v.pitch)>1e-4)if(p){let V=N.sub(S),A=V.length(),L=Math.atan2(V.x,V.z)-v.yaw,D=Qs(Math.atan2(V.y,Math.hypot(V.x,V.z))+v.pitch,-1.2,1.2);V.set(Math.sin(L)*Math.cos(D),Math.sin(D),Math.cos(L)*Math.cos(D)).multiplyScalar(A),N.copy(S).add(V)}else{let V=Math.cos(v.yaw),A=Math.sin(v.yaw);S.set(S.x*V+S.z*A,S.y,-S.x*A+S.z*V),N.set(N.x*V+N.z*A,N.y,-N.x*A+N.z*V);let L=Math.hypot(S.x,S.z),D=S.length(),W=Qs(Math.atan2(S.y,L)+v.pitch,.03,1.35),F=D*Math.cos(W)/Math.max(L,.001);S.set(S.x*F,D*Math.sin(W),S.z*F)}if(this.zoomS+=(this.zoom-this.zoomS)*(1-Math.exp(-e*8)),!p){S.multiplyScalar(this.zoomS);let V=a.length*.55+1.2,A=S.length();A<V&&S.multiplyScalar(V/Math.max(A,.001))}if(this.camera.position.copy(i).add(S),this.groundAt){let V=this.groundAt(this.camera.position.x,this.camera.position.z)+.6;this.camera.position.y<V&&(this.camera.position.y=V)}this._l.copy(i).add(N),this.camera.lookAt(this._l);let Y=p?this.fov*Qs(this.zoomS,.35,1.3):this.fov;Math.abs(this.camera.fov-Y)>.01&&(this.camera.fov=Y,this.camera.updateProjectionMatrix())}};var so=s=>440*Math.pow(2,(s-69)/12),is=(s,e)=>s+Math.random()*(e-s),Tl=s=>s[Math.floor(Math.random()*s.length)],Cd=[[{r:41,n:[53,57,60,64]},{r:40,n:[52,55,59,62]},{r:38,n:[50,53,57,60]},{r:36,n:[52,55,59,62]}],[{r:38,n:[50,53,57,60]},{r:43,n:[53,55,59,62]},{r:36,n:[52,55,59,62]},{r:45,n:[55,57,60,64]}],[{r:36,n:[52,55,59,62]},{r:45,n:[55,57,60,64]},{r:38,n:[50,53,57,60]},{r:43,n:[53,55,59,62]}],[{r:45,n:[55,57,60,64]},{r:38,n:[50,53,57,60]},{r:43,n:[53,55,59,62]},{r:36,n:[52,55,59,62]}]],Pd=[[0,6,10],[0,7,10,14],[0,10],[0,3,8,11]],e_=[72,74,76,79,81,84],ro=class{constructor(){this.ctx=null,this.mode=0,this.bpm=74,this.step=0,this.bar=0,this.prog=Cd[0],this.pattern=Pd[0],this.lastMel=-99}async start(){if(this.ctx){await this.ctx.resume();return}let e=window.AudioContext||window.webkitAudioContext;if(!e)return;let t=this.ctx=new e;this.master=t.createGain(),this.master.gain.value=0;let n=t.createDynamicsCompressor();n.threshold.value=-16,n.ratio.value=3,this.master.connect(n).connect(t.destination),this.musicGain=t.createGain();let i=t.createBiquadFilter();i.type="lowpass",i.frequency.value=4800,i.Q.value=.4,this.musicGain.connect(i).connect(this.master),this.pianoBus=t.createGain();let r=t.createBiquadFilter();r.type="lowpass",r.frequency.value=2400,this.pianoBus.connect(r).connect(this.musicGain),this.drumBus=t.createGain();let a=t.createBiquadFilter();a.type="lowpass",a.frequency.value=3400,this.drumBus.connect(a).connect(this.musicGain);let o=t.sampleRate*2.6,c=t.createBuffer(2,o,t.sampleRate);for(let g=0;g<2;g++){let b=c.getChannelData(g);for(let m=0;m<o;m++)b[m]=(Math.random()*2-1)*Math.pow(1-m/o,3.2)}this.reverb=t.createConvolver(),this.reverb.buffer=c;let l=t.createGain();l.gain.value=.38,this.reverbIn=t.createGain(),this.reverbIn.connect(this.reverb).connect(l).connect(this.musicGain),r.connect(this.reverbIn),this.echo=t.createDelay(2),this.echo.delayTime.value=60/this.bpm*.75;let h=t.createGain();h.gain.value=.34;let u=t.createBiquadFilter();u.type="lowpass",u.frequency.value=1800,this.echo.connect(u).connect(h).connect(this.echo),u.connect(this.musicGain),this.wow=t.createOscillator(),this.wow.frequency.value=.55,this.wowGain=t.createGain(),this.wowGain.gain.value=9,this.wow.connect(this.wowGain),this.wow.start();let d=t.createBuffer(1,t.sampleRate*2,t.sampleRate),f=d.getChannelData(0);for(let g=0;g<f.length;g++)f[g]=Math.random()*2-1;this.noise=d,this._vinyl(),this._ambient(),this.nextTime=t.currentTime+.15,this.timer=setInterval(()=>this._tick(),50),document.addEventListener("visibilitychange",()=>{document.hidden?t.suspend():this.mode!==2&&t.resume()}),this.setMode(this.mode)}setMode(e){if(this.mode=e,!this.ctx)return;let t=this.ctx.currentTime;this.master.gain.setTargetAtTime(e===2?0:.9,t,.4)}_src(e,t=!0){let n=this.ctx.createBufferSource();return n.buffer=e,n.loop=t,n.loopStart=Math.random(),n}_vinyl(){let e=this.ctx,t=e.sampleRate*4,n=e.createBuffer(1,t,e.sampleRate),i=n.getChannelData(0);for(let c=0;c<t;c++)i[c]=(Math.random()*2-1)*.012;for(let c=0;c<70;c++){let l=Math.floor(Math.random()*(t-10));i[l]+=is(.25,.8)*(Math.random()<.5?-1:1),i[l+1]-=is(.1,.4)}let r=e.createBufferSource();r.buffer=n,r.loop=!0;let a=e.createBiquadFilter();a.type="highpass",a.frequency.value=1300;let o=e.createGain();o.gain.value=.16,r.connect(a).connect(o).connect(this.musicGain),r.start()}_ambient(){let e=this.ctx;this.ambGain=e.createGain(),this.ambGain.gain.value=1,this.ambGain.connect(this.master);let t=(i,r,a)=>{let o=this._src(this.noise),c=e.createBiquadFilter();c.type=i,c.frequency.value=r,c.Q.value=a;let l=e.createGain();return l.gain.value=0,o.connect(c).connect(l).connect(this.ambGain),o.start(),l};this.rainG=t("bandpass",2200,.5),this.windG=t("lowpass",420,.7),this.tireG=t("lowpass",750,.6);let n=e.createOscillator();n.frequency.value=.13,this.gustG=e.createGain(),this.gustG.gain.value=0,n.connect(this.gustG).connect(this.windG.gain),n.start(),this.engLp=e.createBiquadFilter(),this.engLp.type="lowpass",this.engLp.frequency.value=260,this.engG=e.createGain(),this.engG.gain.value=0,this.eng=[e.createOscillator(),e.createOscillator()],this.eng[0].type="sawtooth",this.eng[1].type="triangle",this.eng.forEach(i=>{i.frequency.value=40,i.connect(this.engLp),i.start()}),this.engLp.connect(this.engG).connect(this.ambGain)}setAmbient({speed:e,rain:t,snow:n,wind:i=0,dark:r=0,fx:a=0}){if(!this.ctx)return;let o=this.ctx.currentTime,c=.25,l=this.mode===0?1:0;this.ambGain.gain.setTargetAtTime(l,o,.4),this.rainG.gain.setTargetAtTime(t*.2*(1+.6*r),o,c),this.windG.gain.setTargetAtTime(.012+e*.0016+n*.05+i*i*.1+a*.085,o,c),this.gustG.gain.setTargetAtTime(i*i*.07,o,c),this.tireG.gain.setTargetAtTime(Math.min(e*.0011,.05)*(1+t),o,c);let h=30+e*2.2;this.eng[0].frequency.setTargetAtTime(h,o,.15),this.eng[1].frequency.setTargetAtTime(h*2,o,.15),this.engLp.frequency.setTargetAtTime(180+e*7,o,.2),this.engG.gain.setTargetAtTime(.02+Math.min(e,40)*4e-4,o,.2)}thunder(e=1.5,t=1){if(!this.ctx||this.mode!==0)return;let n=this.ctx,i=n.currentTime+e,r=n.sampleRate*5,a=n.createBuffer(1,r,n.sampleRate),o=a.getChannelData(0),c=0;for(let d=0;d<r;d++)c=(c+(Math.random()*2-1)*.06)/1.02,o[d]=c*3.5;let l=n.createBufferSource();l.buffer=a;let h=n.createBiquadFilter();h.type="lowpass",h.frequency.setValueAtTime(900,i),h.frequency.exponentialRampToValueAtTime(110,i+4);let u=n.createGain();u.gain.setValueAtTime(1e-4,i),u.gain.linearRampToValueAtTime(.9*t,i+.12),u.gain.setTargetAtTime(1e-4,i+.3,1.1),l.connect(h).connect(u).connect(this.ambGain),l.start(i),l.stop(i+5),this._noiseHit(i,.25,"bandpass",700,.3*t)}_tick(){let e=this.ctx;if(!e||e.state!=="running")return;let t=60/this.bpm/4;for(;this.nextTime<e.currentTime+.3;){let n=this.step%2?t*.2:0;this._step(this.step,this.nextTime+n),this.nextTime+=t,++this.step===16&&(this.step=0,this.bar++)}}_step(e,t){e===0&&this.bar%4===0&&(this.prog=Tl(Cd),this.pattern=Tl(Pd));let n=this.prog[this.bar%4];if(this.pattern.includes(e)){let i=e===0?1:is(.55,.8);n.n.forEach((r,a)=>this._epiano(r,t+a*.014+is(0,.008),i,e===0?2.4:1.2))}e===0&&this._bass(n.r,t,1.7),(e===10||e===14&&Math.random()<.4)&&this._bass(n.r+(Math.random()<.5?0:7),t,.8),(e===0||e===10||e===7&&Math.random()<.3)&&this._kick(t),(e===4||e===12)&&this._snare(t),e%2===0&&this._hat(t,e%4===2?.8:.5,e===14&&Math.random()<.25),e%2===0&&this.bar-this.lastMel>0&&Math.random()<.16&&(this._pluck(Tl(e_),t,is(.5,.9)),this.lastMel=this.bar+(Math.random()<.5?0:-1))}_osc(e,t,n,i,r=0){let a=this.ctx.createOscillator();return a.type=e,a.frequency.value=t,a.detune.value=r,this.wowGain.connect(a.detune),a.start(n),a.stop(n+i),a}_epiano(e,t,n,i){let r=this.ctx,a=so(e),o=r.createGain();o.gain.setValueAtTime(1e-4,t),o.gain.linearRampToValueAtTime(n*.075,t+.012),o.gain.exponentialRampToValueAtTime(n*.03,t+.4),o.gain.exponentialRampToValueAtTime(1e-4,t+i),this._osc("sine",a,t,i+.1).connect(o),this._osc("triangle",a,t,i+.1,is(3,8)).connect(o);let c=r.createGain();c.gain.setValueAtTime(n*.022,t),c.gain.exponentialRampToValueAtTime(1e-4,t+.2),this._osc("sine",a*4,t,.3).connect(c).connect(this.pianoBus),o.connect(this.pianoBus)}_bass(e,t,n){let i=this.ctx.createGain();i.gain.setValueAtTime(1e-4,t),i.gain.linearRampToValueAtTime(.2,t+.03),i.gain.exponentialRampToValueAtTime(1e-4,t+n);let r=this.ctx.createBiquadFilter();r.type="lowpass",r.frequency.value=380,this._osc("sine",so(e),t,n+.1).connect(i),this._osc("triangle",so(e),t,n+.1).connect(i),i.connect(r).connect(this.musicGain)}_pluck(e,t,n){let i=this.ctx.createGain();i.gain.setValueAtTime(1e-4,t),i.gain.linearRampToValueAtTime(n*.06,t+.01),i.gain.exponentialRampToValueAtTime(1e-4,t+1.1);let r=this.ctx.createBiquadFilter();r.type="lowpass",r.frequency.value=2200,this._osc("triangle",so(e),t,1.2).connect(i),i.connect(r),r.connect(this.pianoBus);let a=this.ctx.createGain();a.gain.value=.6,r.connect(a).connect(this.echo)}_kick(e){let t=this.ctx.createOscillator(),n=this.ctx.createGain();t.frequency.setValueAtTime(130,e),t.frequency.exponentialRampToValueAtTime(42,e+.14),n.gain.setValueAtTime(.5,e),n.gain.exponentialRampToValueAtTime(1e-4,e+.32),t.connect(n).connect(this.drumBus),t.start(e),t.stop(e+.35)}_noiseHit(e,t,n,i,r){let a=this._src(this.noise,!1),o=this.ctx.createBiquadFilter();o.type=n,o.frequency.value=i;let c=this.ctx.createGain();c.gain.setValueAtTime(r,e),c.gain.exponentialRampToValueAtTime(1e-4,e+t),a.connect(o).connect(c).connect(this.drumBus),a.start(e,Math.random()),a.stop(e+t+.02)}_snare(e){this._noiseHit(e,.16,"bandpass",1900,.28);let t=this.ctx.createOscillator(),n=this.ctx.createGain();t.frequency.value=185,n.gain.setValueAtTime(.16,e),n.gain.exponentialRampToValueAtTime(1e-4,e+.1),t.connect(n).connect(this.drumBus),t.start(e),t.stop(e+.12)}_hat(e,t,n){this._noiseHit(e,n?.2:.045,"highpass",7500,.12*t*is(.7,1))}};var ao=27,t_=12;function Al(s){let e=s>>>0;return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function n_(){let s=Al(3),e=[],t=[],n=[],i=[],r=new Z(6971440),a=new Z(11115094),o=new Z(14733202),c=(u,d,f,g,b)=>{e.push(u,d,f),n.push(g.r,g.g,g.b),t.push(b[0],b[1],b[2])},l=5;for(let u=0;u<l;u++){let d=u/l*Math.PI*2+(s()-.5)*.7,f=Math.cos(d),g=Math.sin(d),b=-g,m=f,p=1.05+s()*.6,_=.35+s()*.45,x=new P(f*.35,1,g*.35).normalize().toArray(),y=[{c:[f*.03,0,g*.03],hw:.034,col:r},{c:[f*_*.4,p*.6,g*_*.4],hw:.03,col:a}],R=e.length/3;for(let w of y)c(w.c[0]-b*w.hw,w.c[1],w.c[2]-m*w.hw,w.col,x),c(w.c[0]+b*w.hw,w.c[1],w.c[2]+m*w.hw,w.col,x);c(f*_,p*.92,g*_,o,x),i.push(R,R+1,R+2,R+1,R+3,R+2,R+2,R+3,R+4)}let h=new qe;return h.setAttribute("position",new je(e,3)),h.setAttribute("normal",new je(t,3)),h.setAttribute("color",new je(n,3)),h.setIndex(i),h}function i_(){let s=Al(11),e=[],t=[],n=[],i=[],r=new Z(3955232),a=new Z(7312436),o=new Z(12176482),c=(u,d,f,g,b)=>{e.push(u,d,f),n.push(g.r,g.g,g.b),t.push(b[0],b[1],b[2])},l=5;for(let u=0;u<l;u++){let d=u/l*Math.PI*2+(s()-.5)*.9,f=Math.cos(d),g=Math.sin(d),b=-g,m=f,p=.32+s()*.45,_=.05+s()*.18,x=(s()-.5)*.25,y=(s()-.5)*.25,R=new P(f*.3,1,g*.3).normalize().toArray(),w=e.length/3;c(x-b*.03,0,y-m*.03,r,R),c(x+b*.03,0,y+m*.03,r,R),c(x+f*_*.4-b*.024,p*.55,y+g*_*.4-m*.024,a,R),c(x+f*_*.4+b*.024,p*.55,y+g*_*.4+m*.024,a,R),c(x+f*_,p,y+g*_,o,R),i.push(w,w+1,w+2,w+1,w+3,w+2,w+2,w+3,w+4)}let h=new qe;return h.setAttribute("position",new je(e,3)),h.setAttribute("normal",new je(t,3)),h.setAttribute("color",new je(n,3)),h.setIndex(i),h}function s_(){let s=[],e=[],t=[],n=[],i=(a,o,c,l,h)=>{let u=Math.cos(a),d=Math.sin(a),f=s.length/3;for(let[g,b]of[[0,0],[1,0],[1,1],[0,1]]){let m=(g-.5)*c,p=o-l+b*l,_=h*b*b;s.push(m*u+_,p,m*d),e.push(0,1,0),t.push(g,b)}n.push(f,f+1,f+2,f,f+2,f+3)};i(.3,2,.34,.98,.1),i(.3+Math.PI/2,2,.34,.98,.1),i(1.3,1.72,.27,.74,-.06);let r=new qe;return r.setAttribute("position",new je(s,3)),r.setAttribute("normal",new je(e,3)),r.setAttribute("uv",new je(t,2)),r.setIndex(n),r}var r_=`
attribute vec4 aSeed;
uniform vec3 uCam;
uniform float uTime, uWind, uCell, uScale, uIn0, uIn1, uOut0, uOut1, uCorr;
uniform vec2 uWindDir;
uniform vec3 uRoad[${ao}];     // (x, y, z) của tim đường
uniform float uCarve0, uCarve1, uTipH;
${rd}
// khoảng cách tới đường + độ cao mặt đường tại điểm gần nhất
float roadDist(vec2 p, out float ry) {
  float dm = 1e9; ry = 0.0;
  for (int i = 0; i < ${ao-1}; i++) {
    vec2 a = uRoad[i].xz, b = uRoad[i + 1].xz, ab = b - a;
    float t = clamp(dot(p - a, ab) / dot(ab, ab), 0.0, 1.0);
    float d = length(p - a - ab * t);
    if (d < dm) { dm = d; ry = mix(uRoad[i].y, uRoad[i + 1].y, t); }
  }
  return dm;
}
`,a_=`
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
`,Ar=class{constructor(e,t,n="reed"){this.kind=n;let i=n==="grass";this.group=new ht,e.add(this.group),this.density=1,this.roadPts=Array.from({length:ao},()=>new P),this.shared={uCam:{value:new P},uTime:{value:0},uWind:{value:.3},uWindDir:{value:new ue(.78,.62).normalize()},uRoad:{value:this.roadPts},uCorr:{value:Lt.halfWidth+(i?.3:1)},uTipH:{value:i?.8:1.95},uCarve0:{value:Lt.halfWidth+1.2},uCarve1:{value:Lt.halfWidth+16},uTLow:{value:Ut.low},uTDet:{value:Ut.det},uTFine:{value:Ut.fine}},this.leafGeo=i?i_():n_(),this.plumeGeo=i?null:s_();let r=i?null:ld();r&&(r.anisotropy=Math.min(4,t.capabilities.getMaxAnisotropy()));let a=i?[{cell:64,count:16e3,scale:1,in0:-1,in1:0,out0:22,out1:32,seed:3},{cell:220,count:8e3,scale:1.8,in0:20,in1:34,out0:75,out1:105,seed:4}]:[{cell:86,count:19e3,scale:1,in0:-1,in1:0,out0:30,out1:43,seed:1},{cell:340,count:11e3,scale:1.55,in0:27,in1:46,out0:118,out1:165,seed:2}];this.layers=a.map(o=>{let c=Al(o.seed*977),l=new Float32Array(o.count*4);for(let g=0;g<l.length;g++)l[g]=c();let h=new Zn(l,4),u={uCell:{value:o.cell},uScale:{value:o.scale},uIn0:{value:o.in0},uIn1:{value:o.in1},uOut0:{value:o.out0},uOut1:{value:o.out1}},d=this._mesh(this.leafGeo,h,o.count,u,new vr({vertexColors:!0,side:pt}),!0);if(i)return{max:o.count,meshes:[d]};let f=this._mesh(this.plumeGeo,h,o.count,u,new vr({map:r,side:pt,alphaTest:.2,alphaToCoverage:!0}),!1);return{max:o.count,meshes:[d,f]}}),this.mats=this.layers.flatMap(o=>o.meshes.map(c=>c.material)),this.group.visible=!0}_mesh(e,t,n,i,r,a){let o=new ka;o.index=e.index;for(let h of Object.keys(e.attributes))o.setAttribute(h,e.attributes[h]);o.setAttribute("aSeed",t),o.instanceCount=n;let c=this.shared;r.onBeforeCompile=h=>{Object.assign(h.uniforms,c,i),h.vertexShader=h.vertexShader.replace("#include <common>",`#include <common>
`+r_).replace("#include <begin_vertex>",a_),a&&(h.vertexShader=h.vertexShader.replace("#include <color_vertex>",`#include <color_vertex>
#ifdef USE_COLOR
vColor *= 0.78 + 0.44 * fract(aSeed.w * 9.31);
#endif`)),h.fragmentShader=h.fragmentShader.replace("#include <normal_fragment_begin>",Ae.normal_fragment_begin.replace("normal *= faceDirection;","")).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance = emissive * diffuseColor.rgb;`)},ii(r);let l=new Ze(o,r);return l.frustumCulled=!1,l.layers.set(3),this.group.add(l),l}set visible(e){this.group.visible=e}get visible(){return this.group.visible}setDensity(e){this.density=e;for(let t of this.layers)for(let n of t.meshes)n.geometry.instanceCount=Math.floor(t.max*e)}update(e,t,n,i,r){let a=this.shared;a.uTime.value=e,a.uCam.value.copy(t),a.uWind.value=r.wind,a.uWindDir.value.copy(r.windDir),a.uTLow.value=Ut.low,a.uTDet.value=Ut.det,a.uTFine.value=Ut.fine;let o={};for(let d=0;d<ao;d++)n.at(i+(d-12)*t_,o),this.roadPts[d].set(o.x,o.y,o.z);let c=(this.kind==="grass"?.28:.5)*r.dayF*(1-r.overcast*.85)*(.4+.6*r.warm),l=new Z(1,.72+.2*(1-r.warm),.42+.45*(1-r.warm)).multiplyScalar(c),h=(.2*r.dayF*(1-.55*r.dark)+.05*r.night)*(.6+.4*r.overcast)+r.flash*.9;l.add(new Z(.8,.88,1).multiplyScalar(h));let u=1-.28*r.wet;for(let d of this.layers)d.meshes[0].material.emissive.copy(l),d.meshes[1]&&d.meshes[1].material.emissive.copy(l).multiplyScalar(1.7);for(let d of this.mats)d.color.setScalar(u*(1-.15*r.dark))}};var o_=`
  varying vec2 vUv;
  void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,c_=`
  uniform sampler2D tSrc; uniform vec2 uTexel; uniform float uThresh;
  varying vec2 vUv;
  void main() {
    vec3 c = (texture2D(tSrc, vUv + uTexel * vec2(-1.0, -1.0)).rgb + texture2D(tSrc, vUv + uTexel * vec2(1.0, -1.0)).rgb
            + texture2D(tSrc, vUv + uTexel * vec2(-1.0, 1.0)).rgb + texture2D(tSrc, vUv + uTexel * vec2(1.0, 1.0)).rgb) * 0.25;
    float l = max(c.r, max(c.g, c.b));
    gl_FragColor = vec4(c * smoothstep(uThresh, uThresh + 0.07, l), 1.0);
  }`,l_=`
  uniform sampler2D tSrc; uniform vec2 uDir;
  varying vec2 vUv;
  void main() {
    vec3 s = texture2D(tSrc, vUv).rgb * 0.2270270270;
    s += (texture2D(tSrc, vUv + uDir * 1.3846153846).rgb + texture2D(tSrc, vUv - uDir * 1.3846153846).rgb) * 0.3162162162;
    s += (texture2D(tSrc, vUv + uDir * 3.2307692308).rgb + texture2D(tSrc, vUv - uDir * 3.2307692308).rgb) * 0.0702702703;
    gl_FragColor = vec4(s, 1.0);
  }`,h_=`
  uniform sampler2D tScene, tBloom;
  uniform float uFx, uCine, uTime, uAspect;
  uniform vec2 uRes;
  varying vec2 vUv;
  float hash(float n) { return fract(sin(n) * 43758.5453); }
  float vnoise(float x) { float i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f); return mix(hash(i), hash(i + 1.0), f); }
  float hash12(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
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
        col += texture2D(tScene, vUv - d * amt * t).rgb * w;
        tot += w;
      }
      col /= tot;
    } else {
      col = texture2D(tScene, vUv).rgb;
    }
    // quang sai nhẹ ở mép khung hình
    float ca = uCine * 0.0008 * smoothstep(0.2, 1.0, dist);   // chỉ ở chế độ cinematic; blur tốc độ không tách màu (tránh lốm đốm)
    if (ca > 0.0) {
      col.r = mix(col.r, texture2D(tScene, vUv - d * (amt + ca)).r, 0.5);
      col.b = mix(col.b, texture2D(tScene, vUv - d * max(amt - ca, 0.0)).b, 0.5);
    }
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
  }`,oo=class{constructor(e){this.renderer=e,this.enabled=!0,this.scene=new vi,this.cam=new _i(-1,1,1,-1,0,1);let t=(n,i)=>new Pt({uniforms:n,vertexShader:o_,fragmentShader:i,depthTest:!1,depthWrite:!1,toneMapped:!1});this.bright=t({tSrc:{value:null},uTexel:{value:new ue},uThresh:{value:.92}},c_),this.blur=t({tSrc:{value:null},uDir:{value:new ue}},l_),this.final=t({tScene:{value:null},tBloom:{value:null},uFx:{value:0},uCine:{value:0},uTime:{value:0},uAspect:{value:1},uRes:{value:new ue(1,1)}},h_),this.quad=new Ze(new ji(2,2),this.bright),this.scene.add(this.quad),this.size=new ue,this.zero=new ue(0,0),this.tex=null,this.rtA=this.rtB=null,this.resize()}resize(){this.renderer.getDrawingBufferSize(this.size);let e=this.size.x,t=this.size.y;this.tex&&this.tex.dispose(),this.tex=new Da(e,t),this.tex.minFilter=this.tex.magFilter=yt;let n=Math.max(16,Math.ceil(e/4)),i=Math.max(16,Math.ceil(t/4));for(let r of["rtA","rtB"])this[r]&&this[r].dispose(),this[r]=new nn(n,i,{minFilter:yt,magFilter:yt,depthBuffer:!1,stencilBuffer:!1});this.bright.uniforms.uTexel.value.set(1/n,1/i),this.final.uniforms.uAspect.value=e/t,this.final.uniforms.uRes.value.set(e,t)}_pass(e,t){this.quad.material=e,this.renderer.setRenderTarget(t),this.renderer.render(this.scene,this.cam)}render(e,t,n){let i=this.renderer,r=this.blur.uniforms;if(i.copyFramebufferToTexture(this.zero,this.tex),t>.01){let o=this.rtA.width,c=this.rtA.height;this.bright.uniforms.tSrc.value=this.tex,this._pass(this.bright,this.rtA);for(let l=0;l<2;l++)r.tSrc.value=this.rtA.texture,r.uDir.value.set((2.2+l)/o,0),this._pass(this.blur,this.rtB),r.tSrc.value=this.rtB.texture,r.uDir.value.set(0,(1.2+l*.6)/c),this._pass(this.blur,this.rtA)}let a=this.final.uniforms;a.tScene.value=this.tex,a.tBloom.value=this.rtA.texture,a.uCine.value=t,a.uFx.value=n,a.uTime.value=e,i.setRenderTarget(null),this._pass(this.final,null)}};var co=class{constructor(e){this.renderer=e,this.cam=new xt,this.cam.layers.set(0),this.rt=new nn(16,16,{type:qi}),this.texMatrix=new Re,this.planeY=0,this.active=!1,this.enabled=!0,this._v=new P,this._d=new P,this._u=new P,this._plane=new En,this._clip=new Je,this._q=new Je,this._size=new ue}resize(){this.renderer.getDrawingBufferSize(this._size),this.rt.setSize(Math.max(16,Math.floor(this._size.x/2)),Math.max(16,Math.floor(this._size.y/2)))}render(e,t,n){if(this.active=!1,!this.enabled||t.position.y<n+.05)return;this.planeY=n;let i=this.cam,r=t.position;i.position.set(r.x,2*n-r.y,r.z);let a=this._d.set(0,0,-1).applyQuaternion(t.quaternion),o=this._u.set(0,1,0).applyQuaternion(t.quaternion);i.up.set(o.x,-o.y,o.z),i.lookAt(this._v.set(i.position.x+a.x,i.position.y-a.y,i.position.z+a.z)),i.near=t.near,i.far=t.far,i.updateMatrixWorld(),i.projectionMatrix.copy(t.projectionMatrix),this.texMatrix.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),this.texMatrix.multiply(i.projectionMatrix).multiply(i.matrixWorldInverse);let c=this._plane.setFromNormalAndCoplanarPoint(this._v.set(0,1,0),this._d.set(r.x,n,r.z));c.applyMatrix4(i.matrixWorldInverse);let l=this._clip.set(c.normal.x,c.normal.y,c.normal.z,c.constant),h=i.projectionMatrix.elements,u=this._q.set((Math.sign(l.x)+h[8])/h[0],(Math.sign(l.y)+h[9])/h[5],-1,(1+h[10])/h[14]);l.multiplyScalar(2/l.dot(u)),h[2]=l.x,h[6]=l.y,h[10]=l.z+1-.003,h[14]=l.w,i.projectionMatrixInverse.copy(i.projectionMatrix).invert();let d=this.renderer,f=d.getRenderTarget(),g=d.shadowMap.autoUpdate;d.shadowMap.autoUpdate=!1,d.setRenderTarget(this.rt),d.render(e,i),d.setRenderTarget(f),d.shadowMap.autoUpdate=g,this.active=!0}};dd();var mt=s=>document.getElementById(s),Cr=(s,e,t)=>Math.min(t,Math.max(e,s)),u_=(s,e,t)=>{let n=Cr((t-s)/(e-s),0,1);return n*n*(3-2*n)},Ir=1/3.6,Ld=35*Ir,d_=10*Ir,f_=40*Ir,Id=150*Ir,rs=mt("c"),wt=new xr({canvas:rs,antialias:!0,powerPreference:"high-performance"}),Rr=Math.min(window.devicePixelRatio||1,2);wt.setPixelRatio(Rr);wt.shadowMap.enabled=!0;wt.shadowMap.type=Ic;wt.toneMapping=Uc;var Cn=new vi,vt=new xt(60,1,.3,4e3);vt.layers.enable(3);var xn=new Xa,Pr=new Ya(Cn,xn,wt),Li=new Ka(Cn,xn,wt),ri=new Qa(wt,Cn,vt),as=new Ar(Cn,wt),Ii=new Ar(Cn,wt,"grass");window.matchMedia?.("(pointer: coarse)").matches&&(as.setDensity(.5),Ii.setDensity(.5));var Zt=new no(Cn),on=new io(vt);on.groundAt=(s,e)=>Li.heightAt(s,e);var lo=new ro,Pl=new oo(wt),Rn=new co(wt);function Ll(){let s=window.innerWidth,e=window.innerHeight;wt.setSize(s,e,!1),vt.aspect=s/e,vt.updateProjectionMatrix(),Pl.resize(),Rn.resize(),p_()}function p_(){let s=window.innerWidth,e=window.innerHeight,t=Math.min(e*.135,Math.max(0,(e-s/2.39)/2));document.documentElement.style.setProperty("--bar",t.toFixed(1)+"px")}window.addEventListener("resize",Ll);Ll();var le={s:150,d:0,v:Ld,target:Ld,fast:!1,fx:0,latVel:0,pitch:0,pos:new P,yaw:0},kt=new Set,_n={active:!1,id:-1,x:0,y:0},_e={car:0,map:0,cam:0,weather:0,time:Ci.findIndex(s=>s.id==="golden"),music:0,cine:!0,started:!1,mistCover:.35,mistDens:.2},ut={mist:mt("b-mist"),cine:mt("b-cine"),fast:mt("b-fast"),car:mt("b-car"),map:mt("b-map"),cam:mt("b-cam"),weather:mt("b-weather"),time:mt("b-time"),music:mt("b-music")},Tn=(s,e,t)=>{s.querySelector("b").textContent=e,s.querySelector("span").textContent=t,s.title=t};function vn(){Tn(ut.car,"🚗",Zt.list[_e.car]?.name??"…"),Tn(ut.map,Zs[_e.map].icon,Zs[_e.map].name),Tn(ut.cam,"🎥",Pi[_e.cam].name),Tn(ut.weather,Tr[_e.weather].icon,Tr[_e.weather].name),Tn(ut.time,Ci[_e.time].icon,Ci[_e.time].name),Tn(ut.music,to[_e.music].icon,to[_e.music].name),Tn(ut.fast,"⚡","Fast drive"),ut.fast.classList.toggle("on",le.fast),Tn(ut.cine,"🎬","Cinematic"),Tn(ut.mist,"🌫️","Sương "+Math.round(_e.mistDens*100)+"%"),ut.mist.classList.toggle("on",!mt("mistpanel").hidden),ut.cine.classList.toggle("on",_e.cine)}async function uo(s){_e.car=(s+Zt.list.length)%Zt.list.length,Tn(ut.car,"🚗","Đang tải…");try{await Zt.select(_e.car)}catch(e){if(console.error("Không tải được xe",Zt.list[_e.car].name,e),Zt.list.length>1)return Zt.list.splice(_e.car,1),uo(_e.car)}Nd(),vn()}var Il=()=>uo(_e.car+1),Dd=0;function ho(s,e,t=Cn){let n=[];t.traverse(a=>{a.material&&!a.layers.test(e.layers)&&(n.push(a,a.material),a.material=null)});let i=wt.getRenderTarget();wt.setRenderTarget(s);let r=wt.compileAsync(t,e,Cn);wt.setRenderTarget(i);for(let a=0;a<n.length;a+=2)n[a].material=n[a+1];return r}Zt.prepare=s=>Promise.all([ho(null,vt,s),ho(Rn.rt,Rn.cam,s)]);function Nd(s=500){clearTimeout(Dd),Dd=setTimeout(()=>{ho(Rn.rt,Rn.cam).then(()=>ho(null,vt)).catch(e=>console.warn("warmup",e))},s)}var Fd=()=>{let s=Zs[_e.map].id;sd(s),xn.recomputeHeights(),Pr.setMap(s),Li.reset(),Li.setCar(le.s),Li.prime(vt.position.lengthSq()?vt.position:le.pos),as.visible=s==="reed",Ii.visible=s==="forest",Nd()},Dl=()=>{_e.map=(_e.map+1)%Zs.length,Fd(),vn()},Ul=()=>{_e.cam=(_e.cam+1)%Pi.length,on.setMode(_e.cam),vn()},Nl=()=>{_e.weather=(_e.weather+1)%Tr.length,ri.setWeather(Tr[_e.weather].id),vn()},Fl=()=>{_e.time=(_e.time+1)%Ci.length,ri.setTime(Ci[_e.time].hour),vn()},Ol=()=>document.body.classList.toggle("cine",_e.cine&&_e.started),Bl=()=>{_e.cine=!_e.cine,Ol(),vn()},kl=()=>{le.fast=!le.fast,vn()},Od=()=>{_e.music=(_e.music+1)%to.length,lo.setMode(_e.music),vn()};ut.fast.onclick=kl;ut.cine.onclick=Bl;var Bd=()=>{mt("mistpanel").hidden=!mt("mistpanel").hidden,vn()};ut.mist.onclick=Bd;for(let[s,e]of[["mist-cover","mistCover"],["mist-dens","mistDens"]]){let t=mt(s);t.value=Math.round(_e[e]*100),mt(s+"-v").textContent=t.value,t.addEventListener("input",()=>{_e[e]=t.value/100,mt(s+"-v").textContent=t.value,vn()}),t.addEventListener("change",()=>t.blur())}ut.car.onclick=Il;ut.map.onclick=Dl;ut.cam.onclick=Ul;ut.weather.onclick=Nl;ut.time.onclick=Fl;ut.music.onclick=Od;mt("b-info").onclick=()=>{let s=mt("credits");s.hidden=!s.hidden};window.addEventListener("keydown",s=>{if(s.repeat){kt.add(s.code);return}switch(kt.add(s.code),s.code){case"KeyC":Ul();break;case"KeyH":document.body.classList.toggle("hidehud");break;case"KeyM":Od();break;case"KeyT":Fl();break;case"KeyR":Nl();break;case"KeyV":Il();break;case"KeyN":Dl();break;case"KeyF":kl();break;case"KeyK":Bl();break;case"KeyG":Bd();break}(s.code.startsWith("Arrow")||s.code==="Space")&&s.preventDefault()});window.addEventListener("keyup",s=>kt.delete(s.code));window.addEventListener("blur",()=>kt.clear());var ai=new Map,Lr=0,kd=()=>{let[s,e]=[...ai.values()];return Math.hypot(s.x-e.x,s.y-e.y)};rs.addEventListener("pointerdown",s=>{ai.set(s.pointerId,{x:s.clientX,y:s.clientY}),rs.setPointerCapture(s.pointerId),ai.size===1?(_n.active=!0,_n.id=s.pointerId,_n.x=s.clientX,_n.y=s.clientY,on.look.hold=!0):ai.size===2&&(_n.active=!1,Lr=kd())});rs.addEventListener("pointermove",s=>{let e=ai.get(s.pointerId);if(e)if(e.x=s.clientX,e.y=s.clientY,ai.size===2){let t=kd();Lr>0&&t>0&&on.zoomBy(Lr/t),Lr=t}else _n.active&&s.pointerId===_n.id&&(on.lookBy((s.clientX-_n.x)*4.7/window.innerWidth,(s.clientY-_n.y)*2.2/window.innerHeight),_n.x=s.clientX,_n.y=s.clientY)});var zd=s=>{ai.delete(s.pointerId),ai.size<2&&(Lr=0),ai.size===0&&(_n.active=!1,on.look.hold=!1)};rs.addEventListener("pointerup",zd);rs.addEventListener("pointercancel",zd);rs.addEventListener("wheel",s=>{s.preventDefault();let e=s.deltaY*(s.deltaMode===1?33:s.deltaMode===2?400:1);on.zoomBy(Math.exp(Cr(e,-200,200)*.0012))},{passive:!1});var Ud=0,Hd=()=>{document.body.classList.remove("idle"),clearTimeout(Ud),Ud=setTimeout(()=>document.body.classList.add("idle"),4500)};["pointermove","pointerdown","keydown","touchstart"].forEach(s=>window.addEventListener(s,Hd,{passive:!0}));Hd();var ss={sum:0,n:0};function m_(s){if(s>250||(ss.sum+=s,ss.n++,ss.n<90))return;let e=ss.sum/ss.n;ss.sum=0,ss.n=0,e>34&&_e.cine?(_e.cine=!1,Ol(),vn()):e>34&&Rn.enabled?Rn.enabled=!1:e>34&&Rr>.7&&(Rr=Math.max(.7,Rr-.25),wt.setPixelRatio(Rr),Ll(),as.setDensity(Math.max(.35,as.density*.75)),Ii.setDensity(Math.max(.35,Ii.density*.75)))}var Sv=new P,Rl=performance.now(),Cl=0,zn=0,An={};function Gd(s){let e=Cr((s-Rl)/1e3,0,.05);m_(s-Rl),Rl=s;let t=kt.has("ArrowLeft")||kt.has("KeyA"),i=(kt.has("ArrowRight")||kt.has("KeyD")?1:0)-(t?1:0);(kt.has("ArrowUp")||kt.has("KeyW"))&&(le.target+=2.5*e),(kt.has("ArrowDown")||kt.has("KeyS"))&&(le.target-=2.5*e),(kt.has("Equal")||kt.has("NumpadAdd"))&&on.zoomBy(Math.exp(-1.2*e)),(kt.has("Minus")||kt.has("NumpadSubtract"))&&on.zoomBy(Math.exp(1.2*e)),le.target=Cr(le.target,d_,f_);let r=le.fast?Id:le.target;le.v+=Cr(r-le.v,-8*e,6*e),le.s+=le.v*e,le.fx+=(u_(55*Ir,Id,le.v)-le.fx)*(1-Math.exp(-e*4));let a=le.d>=0?Lt.halfWidth/2:-Lt.halfWidth/2,o=i!==0?i*(2.2+le.v*.06):(a-le.d)*.8;le.latVel+=(o-le.latVel)*(1-Math.exp(-e*5)),le.d+=le.latVel*e;let c=Lt.halfWidth-.9;Math.abs(le.d)>c&&(le.d=Math.sign(le.d)*c,le.latVel=0),xn.ensure(le.s+8e3),xn.at(le.s,An),le.pos.set(An.x+Math.cos(An.th)*le.d,An.y,An.z-Math.sin(An.th)*le.d);let l=xn.at(le.s-2.5,{}).y,h=xn.at(le.s+2.5,{}).y;le.pitch+=(Math.atan2(h-l,5)-le.pitch)*(1-Math.exp(-e*6)),le.yaw=An.th-Math.atan2(le.latVel,Math.max(le.v,4))*.9,zn+=((_e.cine&&_e.started?1:0)-zn)*(1-Math.exp(-e*2.5)),on.cine=zn,Zt.update(e,{pos:le.pos,yaw:le.yaw,pitch:le.pitch,speed:le.v,latVel:le.latVel}),on.update(e,{pos:le.pos,yaw:le.yaw,pitch:le.pitch,speed:le.v,dim:Zt.dim,fx:le.fx,side:le.d>=0?-1:1}),ri.update(e,le.pos);let u=ri.state;Pr.update(le.s),Pr.apply(u),as.visible&&as.update(s/1e3,vt.position,xn,le.s,u),Ii.group.visible=Zs[_e.map].id==="forest"&&u.cover<.5,Ii.visible&&Ii.update(s/1e3,vt.position,xn,le.s,u),Li.setCar(le.s),Li.update(vt.position),Li.apply(u),Zt.setLights(u.lamps),lo.setAmbient({speed:le.v,rain:u.rain,snow:u.snow,wind:u.wind,dark:u.dark,fx:le.fx});let d=Math.max(.028*Math.max(0,u.wind-.55)/.45,.016*le.fx*le.fx);if(d>0){let f=s/1e3;vt.position.x+=(Math.sin(f*11.3)+Math.sin(f*17.9)*.6)*d,vt.position.y+=(Math.sin(f*13.7)+Math.sin(f*23.1)*.5)*d*.7}if(zn>.01){let f=s/1e3;vt.position.x+=Math.sin(f*.37)*.014*zn,vt.position.y+=Math.sin(f*.53)*.012*zn,vt.rotateZ((Math.sin(f*.31)*.0045+Math.sin(f*.83)*.002)*zn)}Cl-=e,Cl<=0&&(mt("speed").textContent=Math.round(le.v*3.6),mt("clock").textContent=ri.clock,Cl=.25),kn.uMistD.value=.05*_e.mistDens*_e.mistDens,kn.uMistH.value=3+70*Math.pow(_e.mistCover,1.4),kn.uMistCover.value=_e.mistCover,kn.uMistBase.value=le.pos.y-1.5,kn.uMistT.value=s/1e3,kn.uMistWind.value.copy(u.windDir).multiplyScalar(.0012+.006*u.wind),kn.uMistColor.value.copy(u.mistColor),u.wet>.001?Rn.render(Cn,vt,le.pos.y+.05):Rn.active=!1,Pr.setReflection(Rn,s/1e3),wt.render(Cn,vt),(zn>.01||le.fx>.015)&&Pl.render(s/1e3,zn,le.fx),requestAnimationFrame(Gd)}async function g_(){ri.setTime(Ci[_e.time].hour),ri.hour=Ci[_e.time].hour,ri.onThunder=(t,n)=>lo.thunder(t,n),xn.ensure(le.s+8e3),xn.at(le.s,An),le.pos.set(An.x,An.y,An.z),Fd(),await Zt.probe(),vn(),requestAnimationFrame(Gd);let s=mt("start");mt("hint").textContent="Chạm hoặc nhấn phím bất kỳ để bắt đầu",Zt.onProgress=t=>Tn(ut.car,"🚗","Đang tải… "+Math.round(t*100)+"%"),uo(0);let e=()=>{s.classList.add("gone"),_e.started=!0,Ol(),on.startIntro(),document.body.classList.add("intro"),setTimeout(()=>document.body.classList.remove("intro"),6e3),lo.start().catch(t=>console.warn("Audio:",t)),window.removeEventListener("keydown",e),s.removeEventListener("pointerdown",e)};s.addEventListener("pointerdown",e),window.addEventListener("keydown",e)}g_();window.__app={refl:Rn,MIST:kn,forceCine:s=>{zn=s},post:Pl,toggleFast:kl,toggleCine:Bl,env:ri,cars:Zt,rig:on,drive:le,state:_e,nextCar:Il,nextMap:Dl,nextCam:Ul,nextWeather:Nl,nextTime:Fl,chooseCar:uo,renderer:wt,scene:Cn,camera:vt,scenery:Pr,terrain:Li,reeds:as,grass:Ii,road:xn};
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
