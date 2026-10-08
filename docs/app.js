var gv=0,Of=1,vv=2;var Tm=1,Pu=2,Xi=3,wi=0,fn=1,dt=2;var fs=0,Lr=1,$t=2,kf=3,Bf=4,Lu=5,ji=100,xv=101,bv=102,zf=103,Gf=104,Iu=200,yv=201,Du=202,_v=203,kh=204,Bh=205,Mv=206,Ev=207,wv=208,Tv=209,Sv=210,Av=211,Rv=212,Cv=213,Pv=214,Lv=0,Iv=1,Dv=2,ac=3,Fv=4,Nv=5,Uv=6,Hv=7,Fu=0,Ov=1,kv=2,ps=0,Bv=1,zv=2,Gv=3,Nu=4,Vv=5,Wv=6,Vf="attached",qv="detached",Sm=300,Fr=301,Nr=302,zh=303,Gh=304,Uc=306,Dn=1e3,Gn=1001,Fa=1002,jt=1003,oc=1004;var Aa=1005;var Zt=1006,Uu=1007;var Ti=1008;var Ei=1009,Xv=1010,jv=1011,Hu=1012,Am=1013,Mi=1014,Yi=1015,Fn=1016,Rm=1017,Cm=1018,Vs=1020,Yv=1021,Jn=1023,Kv=1024,Zv=1025,Ws=1026,Ur=1027,Jv=1028,Pm=1029,Qv=1030,Lm=1031,Im=1033,nh=33776,ih=33777,sh=33778,rh=33779,Wf=35840,qf=35841,Xf=35842,jf=35843,Dm=36196,Yf=37492,Kf=37496,Zf=37808,Jf=37809,Qf=37810,$f=37811,ep=37812,tp=37813,np=37814,ip=37815,sp=37816,rp=37817,ap=37818,op=37819,cp=37820,lp=37821,ah=36492,hp=36494,up=36495,$v=36283,dp=36284,fp=36285,pp=36286,Ou=2200,ku=2201,ex=2202,Hr=2300,Xs=2301,oh=2302,Ar=2400,Rr=2401,cc=2402,Bu=2500,tx=2501,Fm=0,Hc=1,Xa=2,Nm=3e3,qs=3001,nx=3200,zu=3201,Gu=0,ix=1,bn="",lt="srgb",en="srgb-linear",Vu="display-p3",Oc="display-p3-linear",lc="linear",It="srgb",hc="rec709",uc="p3";var ar=7680;var mp=519,sx=512,rx=513,ax=514,Um=515,ox=516,cx=517,lx=518,hx=519,Vh=35044,pi=35048;var gp="300 es",Wh=1035,Ki=2e3,dc=2001,Zi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}},vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vp=1234567,Ra=Math.PI/180,Or=180/Math.PI;function hi(){let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(vn[r&255]+vn[r>>8&255]+vn[r>>16&255]+vn[r>>24&255]+"-"+vn[e&255]+vn[e>>8&255]+"-"+vn[e>>16&15|64]+vn[e>>24&255]+"-"+vn[t&63|128]+vn[t>>8&255]+"-"+vn[t>>16&255]+vn[t>>24&255]+vn[n&255]+vn[n>>8&255]+vn[n>>16&255]+vn[n>>24&255]).toLowerCase()}function Qt(r,e,t){return Math.max(e,Math.min(t,r))}function Wu(r,e){return(r%e+e)%e}function ux(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function dx(r,e,t){return r!==e?(t-r)/(e-r):0}function Ca(r,e,t){return(1-t)*r+t*e}function fx(r,e,t,n){return Ca(r,e,1-Math.exp(-t*n))}function px(r,e=1){return e-Math.abs(Wu(r,e*2)-e)}function mx(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function gx(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function vx(r,e){return r+Math.floor(Math.random()*(e-r+1))}function xx(r,e){return r+Math.random()*(e-r)}function bx(r){return r*(.5-Math.random())}function yx(r){r!==void 0&&(vp=r);let e=vp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function _x(r){return r*Ra}function Mx(r){return r*Or}function qh(r){return(r&r-1)===0&&r!==0}function Ex(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function fc(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function wx(r,e,t,n,i){let s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+n)/2),h=a((e+n)/2),d=s((e-n)/2),u=a((e-n)/2),f=s((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":r.set(o*h,c*d,c*u,o*l);break;case"YZY":r.set(c*u,o*h,c*d,o*l);break;case"ZXZ":r.set(c*d,c*u,o*h,o*l);break;case"XZX":r.set(o*h,c*g,c*f,o*l);break;case"YXY":r.set(c*f,o*h,c*g,o*l);break;case"ZYZ":r.set(c*g,c*f,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function _i(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function yt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var Nt={DEG2RAD:Ra,RAD2DEG:Or,generateUUID:hi,clamp:Qt,euclideanModulo:Wu,mapLinear:ux,inverseLerp:dx,lerp:Ca,damp:fx,pingpong:px,smoothstep:mx,smootherstep:gx,randInt:vx,randFloat:xx,randFloatSpread:bx,seededRandom:yx,degToRad:_x,radToDeg:Mx,isPowerOfTwo:qh,ceilPowerOfTwo:Ex,floorPowerOfTwo:fc,setQuaternionFromProperEuler:wx,normalize:yt,denormalize:_i},re=class r{constructor(e=0,t=0){r.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Qt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ot=class r{constructor(e,t,n,i,s,a,o,c,l){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,c,l)}set(e,t,n,i,s,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],v=i[0],m=i[3],p=i[6],x=i[1],b=i[4],y=i[7],_=i[2],w=i[5],S=i[8];return s[0]=a*v+o*x+c*_,s[3]=a*m+o*b+c*w,s[6]=a*p+o*y+c*S,s[1]=l*v+h*x+d*_,s[4]=l*m+h*b+d*w,s[7]=l*p+h*y+d*S,s[2]=u*v+f*x+g*_,s[5]=u*m+f*b+g*w,s[8]=u*p+f*y+g*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*s*h+n*o*c+i*s*l-i*a*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=h*a-o*l,u=o*c-h*s,f=l*s-a*c,g=t*d+n*u+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=d*v,e[1]=(i*l-h*n)*v,e[2]=(o*n-i*a)*v,e[3]=u*v,e[4]=(h*t-i*c)*v,e[5]=(i*s-o*t)*v,e[6]=f*v,e[7]=(n*c-l*t)*v,e[8]=(a*t-n*s)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ch.makeScale(e,t)),this}rotate(e){return this.premultiply(ch.makeRotation(-e)),this}translate(e,t){return this.premultiply(ch.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ch=new ot;function Hm(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Na(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Tx(){let r=Na("canvas");return r.style.display="block",r}var xp={};function Pa(r){r in xp||(xp[r]=!0,console.warn(r))}var bp=new ot().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),yp=new ot().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ro={[en]:{transfer:lc,primaries:hc,toReference:r=>r,fromReference:r=>r},[lt]:{transfer:It,primaries:hc,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Oc]:{transfer:lc,primaries:uc,toReference:r=>r.applyMatrix3(yp),fromReference:r=>r.applyMatrix3(bp)},[Vu]:{transfer:It,primaries:uc,toReference:r=>r.convertSRGBToLinear().applyMatrix3(yp),fromReference:r=>r.applyMatrix3(bp).convertLinearToSRGB()}},Sx=new Set([en,Oc]),pt={enabled:!0,_workingColorSpace:en,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Sx.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;let n=Ro[e].toReference,i=Ro[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return Ro[r].primaries},getTransfer:function(r){return r===bn?lc:Ro[r].transfer}};function Ir(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function lh(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var or,pc=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{or===void 0&&(or=Na("canvas")),or.width=e.width,or.height=e.height;let n=or.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=or}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Na("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Ir(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ir(t[n]/255)*255):t[n]=Ir(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Ax=0,mc=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ax++}),this.uuid=hi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(hh(i[a].image)):s.push(hh(i[a]))}else s=hh(i);n.url=s}return t||(e.images[this.uuid]=n),n}};function hh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?pc.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Rx=0,pn=class r extends Zi{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,n=Gn,i=Gn,s=Zt,a=Ti,o=Jn,c=Ei,l=r.DEFAULT_ANISOTROPY,h=bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rx++}),this.uuid=hi(),this.name="",this.source=new mc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Pa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===qs?lt:bn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Sm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Dn:e.x=e.x-Math.floor(e.x);break;case Gn:e.x=e.x<0?0:1;break;case Fa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Dn:e.y=e.y-Math.floor(e.y);break;case Gn:e.y=e.y<0?0:1;break;case Fa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Pa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===lt?qs:Nm}set encoding(e){Pa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===qs?lt:bn}};pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=Sm;pn.DEFAULT_ANISOTROPY=1;var ct=class r{constructor(e=0,t=0,n=0,i=1){r.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,c=e.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(l+1)/2,y=(f+1)/2,_=(p+1)/2,w=(h+u)/4,S=(d+v)/4,D=(g+m)/4;return b>y&&b>_?b<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(b),i=w/n,s=S/n):y>_?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=w/i,s=D/i):_<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(_),n=S/s,i=D/s),this.set(n,i,s,t),this}let x=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(d-v)/x,this.z=(u-h)/x,this.w=Math.acos((l+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Xh=class extends Zi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ct(0,0,e,t),this.scissorTest=!1,this.viewport=new ct(0,0,e,t);let i={width:e,height:t,depth:1};n.encoding!==void 0&&(Pa("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===qs?lt:bn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new pn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new mc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},hn=class extends Xh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},gc=class extends pn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=jt,this.minFilter=jt,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var jh=class extends pn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=jt,this.minFilter=jt,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var qe=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],d=n[i+3],u=s[a+0],f=s[a+1],g=s[a+2],v=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=u,e[t+1]=f,e[t+2]=g,e[t+3]=v;return}if(d!==v||c!==u||l!==f||h!==g){let m=1-o,p=c*u+l*f+h*g+d*v,x=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){let _=Math.sqrt(b),w=Math.atan2(_,p*x);m=Math.sin(m*w)/_,o=Math.sin(o*w)/_}let y=o*x;if(c=c*m+u*y,l=l*m+f*y,h=h*m+g*y,d=d*m+v*y,m===1-o){let _=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=_,l*=_,h*=_,d*=_}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,a){let o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],d=s[a],u=s[a+1],f=s[a+2],g=s[a+3];return e[t]=o*g+h*d+c*f-l*u,e[t+1]=c*g+h*u+l*d-o*f,e[t+2]=l*g+h*f+o*u-c*d,e[t+3]=h*g-o*d-c*u-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),d=o(s/2),u=c(n/2),f=c(i/2),g=c(s/2);switch(a){case"XYZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"YZX":this._x=u*h*d+l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d-u*f*g;break;case"XZY":this._x=u*h*d-l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(s-l)*f,this._z=(a-i)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(h-c)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+l)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(s-l)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-i)/f,this._x=(s+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+i*l-s*c,this._y=i*h+a*c+s*o-n*l,this._z=s*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,s=this._z,a=this._w,o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;let c=1-o*o;if(c<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),d=Math.sin((1-t)*h)/l,u=Math.sin(t*h)/l;return this._w=a*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},M=class r{constructor(e=0,t=0,n=0){r.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_p.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_p.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),h=2*(o*t-s*i),d=2*(s*n-a*t);return this.x=t+c*l+a*d-o*h,this.y=n+c*h+o*l-s*d,this.z=i+c*d+s*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-s*o,this.y=s*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return uh.copy(this).projectOnVector(e),this.sub(uh)}reflect(e){return this.sub(uh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Qt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},uh=new M,_p=new qe,zt=class{constructor(e=new M(1/0,1/0,1/0),t=new M(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ai.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ai.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ai.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ai):ai.fromBufferAttribute(s,a),ai.applyMatrix4(e.matrixWorld),this.expandByPoint(ai);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Co.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Co.copy(n.boundingBox)),Co.applyMatrix4(e.matrixWorld),this.union(Co)}let i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ai),ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(va),Po.subVectors(this.max,va),cr.subVectors(e.a,va),lr.subVectors(e.b,va),hr.subVectors(e.c,va),os.subVectors(lr,cr),cs.subVectors(hr,lr),Us.subVectors(cr,hr);let t=[0,-os.z,os.y,0,-cs.z,cs.y,0,-Us.z,Us.y,os.z,0,-os.x,cs.z,0,-cs.x,Us.z,0,-Us.x,-os.y,os.x,0,-cs.y,cs.x,0,-Us.y,Us.x,0];return!dh(t,cr,lr,hr,Po)||(t=[1,0,0,0,1,0,0,0,1],!dh(t,cr,lr,hr,Po))?!1:(Lo.crossVectors(os,cs),t=[Lo.x,Lo.y,Lo.z],dh(t,cr,lr,hr,Po))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Bi=[new M,new M,new M,new M,new M,new M,new M,new M],ai=new M,Co=new zt,cr=new M,lr=new M,hr=new M,os=new M,cs=new M,Us=new M,va=new M,Po=new M,Lo=new M,Hs=new M;function dh(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Hs.fromArray(r,s);let o=i.x*Math.abs(Hs.x)+i.y*Math.abs(Hs.y)+i.z*Math.abs(Hs.z),c=e.dot(Hs),l=t.dot(Hs),h=n.dot(Hs);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Cx=new zt,xa=new M,fh=new M,Vn=class{constructor(e=new M,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Cx.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xa.subVectors(e,this.center);let t=xa.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(xa,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xa.copy(e.center).add(fh)),this.expandByPoint(xa.copy(e.center).sub(fh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},zi=new M,ph=new M,Io=new M,ls=new M,mh=new M,Do=new M,gh=new M,js=class{constructor(e=new M,t=new M(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=zi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zi.copy(this.origin).addScaledVector(this.direction,t),zi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ph.copy(e).add(t).multiplyScalar(.5),Io.copy(t).sub(e).normalize(),ls.copy(this.origin).sub(ph);let s=e.distanceTo(t)*.5,a=-this.direction.dot(Io),o=ls.dot(this.direction),c=-ls.dot(Io),l=ls.lengthSq(),h=Math.abs(1-a*a),d,u,f,g;if(h>0)if(d=a*c-o,u=a*o-c,g=s*h,d>=0)if(u>=-g)if(u<=g){let v=1/h;d*=v,u*=v,f=d*(d+a*u+2*o)+u*(a*d+u+2*c)+l}else u=s,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;else u=-s,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;else u<=-g?(d=Math.max(0,-(-a*s+o)),u=d>0?-s:Math.min(Math.max(-s,-c),s),f=-d*d+u*(u+2*c)+l):u<=g?(d=0,u=Math.min(Math.max(-s,-c),s),f=u*(u+2*c)+l):(d=Math.max(0,-(a*s+o)),u=d>0?s:Math.min(Math.max(-s,-c),s),f=-d*d+u*(u+2*c)+l);else u=a>0?-s:s,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(ph).addScaledVector(Io,u),f}intersectSphere(e,t){zi.subVectors(e.center,this.origin);let n=zi.dot(this.direction),i=zi.dot(zi)-n*n,s=e.radius*e.radius;if(i>s)return null;let a=Math.sqrt(s-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,i=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,i=(e.min.x-u.x)*l),h>=0?(s=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-u.z)*d,c=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,c=(e.min.z-u.z)*d),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,zi)!==null}intersectTriangle(e,t,n,i,s){mh.subVectors(t,e),Do.subVectors(n,e),gh.crossVectors(mh,Do);let a=this.direction.dot(gh),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ls.subVectors(this.origin,e);let c=o*this.direction.dot(Do.crossVectors(ls,Do));if(c<0)return null;let l=o*this.direction.dot(mh.cross(ls));if(l<0||c+l>a)return null;let h=-o*ls.dot(gh);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ee=class r{constructor(e,t,n,i,s,a,o,c,l,h,d,u,f,g,v,m){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,c,l,h,d,u,f,g,v,m)}set(e,t,n,i,s,a,o,c,l,h,d,u,f,g,v,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/ur.setFromMatrixColumn(e,0).length(),s=1/ur.setFromMatrixColumn(e,1).length(),a=1/ur.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let u=a*h,f=a*d,g=o*h,v=o*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=f+g*l,t[5]=u-v*l,t[9]=-o*c,t[2]=v-u*l,t[6]=g+f*l,t[10]=a*c}else if(e.order==="YXZ"){let u=c*h,f=c*d,g=l*h,v=l*d;t[0]=u+v*o,t[4]=g*o-f,t[8]=a*l,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=v+u*o,t[10]=a*c}else if(e.order==="ZXY"){let u=c*h,f=c*d,g=l*h,v=l*d;t[0]=u-v*o,t[4]=-a*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=v-u*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let u=a*h,f=a*d,g=o*h,v=o*d;t[0]=c*h,t[4]=g*l-f,t[8]=u*l+v,t[1]=c*d,t[5]=v*l+u,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let u=a*c,f=a*l,g=o*c,v=o*l;t[0]=c*h,t[4]=v-u*d,t[8]=g*d+f,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*d+g,t[10]=u-v*d}else if(e.order==="XZY"){let u=a*c,f=a*l,g=o*c,v=o*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=u*d+v,t[5]=a*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*h,t[10]=v*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Px,e,Lx)}lookAt(e,t,n){let i=this.elements;return Bn.subVectors(e,t),Bn.lengthSq()===0&&(Bn.z=1),Bn.normalize(),hs.crossVectors(n,Bn),hs.lengthSq()===0&&(Math.abs(n.z)===1?Bn.x+=1e-4:Bn.z+=1e-4,Bn.normalize(),hs.crossVectors(n,Bn)),hs.normalize(),Fo.crossVectors(Bn,hs),i[0]=hs.x,i[4]=Fo.x,i[8]=Bn.x,i[1]=hs.y,i[5]=Fo.y,i[9]=Bn.y,i[2]=hs.z,i[6]=Fo.z,i[10]=Bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],x=n[3],b=n[7],y=n[11],_=n[15],w=i[0],S=i[4],D=i[8],E=i[12],T=i[1],F=i[5],N=i[9],H=i[13],L=i[2],A=i[6],C=i[10],U=i[14],O=i[3],k=i[7],V=i[11],j=i[15];return s[0]=a*w+o*T+c*L+l*O,s[4]=a*S+o*F+c*A+l*k,s[8]=a*D+o*N+c*C+l*V,s[12]=a*E+o*H+c*U+l*j,s[1]=h*w+d*T+u*L+f*O,s[5]=h*S+d*F+u*A+f*k,s[9]=h*D+d*N+u*C+f*V,s[13]=h*E+d*H+u*U+f*j,s[2]=g*w+v*T+m*L+p*O,s[6]=g*S+v*F+m*A+p*k,s[10]=g*D+v*N+m*C+p*V,s[14]=g*E+v*H+m*U+p*j,s[3]=x*w+b*T+y*L+_*O,s[7]=x*S+b*F+y*A+_*k,s[11]=x*D+b*N+y*C+_*V,s[15]=x*E+b*H+y*U+_*j,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],d=e[6],u=e[10],f=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+s*c*d-i*l*d-s*o*u+n*l*u+i*o*f-n*c*f)+v*(+t*c*f-t*l*u+s*a*u-i*a*f+i*l*h-s*c*h)+m*(+t*l*d-t*o*f-s*a*d+n*a*f+s*o*h-n*l*h)+p*(-i*o*h-t*c*d+t*o*u+i*a*d-n*a*u+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=e[9],u=e[10],f=e[11],g=e[12],v=e[13],m=e[14],p=e[15],x=d*m*l-v*u*l+v*c*f-o*m*f-d*c*p+o*u*p,b=g*u*l-h*m*l-g*c*f+a*m*f+h*c*p-a*u*p,y=h*v*l-g*d*l+g*o*f-a*v*f-h*o*p+a*d*p,_=g*d*c-h*v*c-g*o*u+a*v*u+h*o*m-a*d*m,w=t*x+n*b+i*y+s*_;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/w;return e[0]=x*S,e[1]=(v*u*s-d*m*s-v*i*f+n*m*f+d*i*p-n*u*p)*S,e[2]=(o*m*s-v*c*s+v*i*l-n*m*l-o*i*p+n*c*p)*S,e[3]=(d*c*s-o*u*s-d*i*l+n*u*l+o*i*f-n*c*f)*S,e[4]=b*S,e[5]=(h*m*s-g*u*s+g*i*f-t*m*f-h*i*p+t*u*p)*S,e[6]=(g*c*s-a*m*s-g*i*l+t*m*l+a*i*p-t*c*p)*S,e[7]=(a*u*s-h*c*s+h*i*l-t*u*l-a*i*f+t*c*f)*S,e[8]=y*S,e[9]=(g*d*s-h*v*s-g*n*f+t*v*f+h*n*p-t*d*p)*S,e[10]=(a*v*s-g*o*s+g*n*l-t*v*l-a*n*p+t*o*p)*S,e[11]=(h*o*s-a*d*s-h*n*l+t*d*l+a*n*f-t*o*f)*S,e[12]=_*S,e[13]=(h*v*i-g*d*i+g*n*u-t*v*u-h*n*m+t*d*m)*S,e[14]=(g*o*i-a*v*i-g*n*c+t*v*c+a*n*m-t*o*m)*S,e[15]=(a*d*i-h*o*i+h*n*c-t*d*c-a*n*u+t*o*u)*S,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,h=s*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,h=a+a,d=o+o,u=s*l,f=s*h,g=s*d,v=a*h,m=a*d,p=o*d,x=c*l,b=c*h,y=c*d,_=n.x,w=n.y,S=n.z;return i[0]=(1-(v+p))*_,i[1]=(f+y)*_,i[2]=(g-b)*_,i[3]=0,i[4]=(f-y)*w,i[5]=(1-(u+p))*w,i[6]=(m+x)*w,i[7]=0,i[8]=(g+b)*S,i[9]=(m-x)*S,i[10]=(1-(u+v))*S,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,s=ur.set(i[0],i[1],i[2]).length(),a=ur.set(i[4],i[5],i[6]).length(),o=ur.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],oi.copy(this);let l=1/s,h=1/a,d=1/o;return oi.elements[0]*=l,oi.elements[1]*=l,oi.elements[2]*=l,oi.elements[4]*=h,oi.elements[5]*=h,oi.elements[6]*=h,oi.elements[8]*=d,oi.elements[9]*=d,oi.elements[10]*=d,t.setFromRotationMatrix(oi),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=Ki){let c=this.elements,l=2*s/(t-e),h=2*s/(n-i),d=(t+e)/(t-e),u=(n+i)/(n-i),f,g;if(o===Ki)f=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===dc)f=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=Ki){let c=this.elements,l=1/(t-e),h=1/(n-i),d=1/(a-s),u=(t+e)*l,f=(n+i)*h,g,v;if(o===Ki)g=(a+s)*d,v=-2*d;else if(o===dc)g=s*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ur=new M,oi=new Ee,Px=new M(0,0,0),Lx=new M(1,1,1),hs=new M,Fo=new M,Bn=new M,Mp=new Ee,Ep=new qe,Si=class r{constructor(e=0,t=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Qt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Qt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Mp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mp,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ep.setFromEuler(this),this.setFromQuaternion(Ep,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Si.DEFAULT_ORDER="XYZ";var Ua=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Ix=0,wp=new M,dr=new qe,Gi=new Ee,No=new M,ba=new M,Dx=new M,Fx=new qe,Tp=new M(1,0,0),Sp=new M(0,1,0),Ap=new M(0,0,1),Nx={type:"added"},Ux={type:"removed"},Et=class r extends Zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ix++}),this.uuid=hi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new M,t=new Si,n=new qe,i=new M(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ee},normalMatrix:{value:new ot}}),this.matrix=new Ee,this.matrixWorld=new Ee,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ua,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return dr.setFromAxisAngle(e,t),this.quaternion.multiply(dr),this}rotateOnWorldAxis(e,t){return dr.setFromAxisAngle(e,t),this.quaternion.premultiply(dr),this}rotateX(e){return this.rotateOnAxis(Tp,e)}rotateY(e){return this.rotateOnAxis(Sp,e)}rotateZ(e){return this.rotateOnAxis(Ap,e)}translateOnAxis(e,t){return wp.copy(e).applyQuaternion(this.quaternion),this.position.add(wp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Tp,e)}translateY(e){return this.translateOnAxis(Sp,e)}translateZ(e){return this.translateOnAxis(Ap,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?No.copy(e):No.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),ba.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gi.lookAt(ba,No,this.up):Gi.lookAt(No,ba,this.up),this.quaternion.setFromRotationMatrix(Gi),i&&(Gi.extractRotation(i.matrixWorld),dr.setFromRotationMatrix(Gi),this.quaternion.premultiply(dr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Nx)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ux)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ba,e,Dx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ba,Fx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++){let s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let i=this.children;for(let s=0,a=i.length;s<a;s++){let o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];i.animations.push(s(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};Et.DEFAULT_UP=new M(0,1,0);Et.DEFAULT_MATRIX_AUTO_UPDATE=!0;Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ci=new M,Vi=new M,vh=new M,Wi=new M,fr=new M,pr=new M,Rp=new M,xh=new M,bh=new M,yh=new M,Uo=!1,Gs=class r{constructor(e=new M,t=new M,n=new M){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),ci.subVectors(e,t),i.cross(ci);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){ci.subVectors(i,t),Vi.subVectors(n,t),vh.subVectors(e,t);let a=ci.dot(ci),o=ci.dot(Vi),c=ci.dot(vh),l=Vi.dot(Vi),h=Vi.dot(vh),d=a*l-o*o;if(d===0)return s.set(0,0,0),null;let u=1/d,f=(l*c-o*h)*u,g=(a*h-o*c)*u;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Wi)===null?!1:Wi.x>=0&&Wi.y>=0&&Wi.x+Wi.y<=1}static getUV(e,t,n,i,s,a,o,c){return Uo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Uo=!0),this.getInterpolation(e,t,n,i,s,a,o,c)}static getInterpolation(e,t,n,i,s,a,o,c){return this.getBarycoord(e,t,n,i,Wi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Wi.x),c.addScaledVector(a,Wi.y),c.addScaledVector(o,Wi.z),c)}static isFrontFacing(e,t,n,i){return ci.subVectors(n,t),Vi.subVectors(e,t),ci.cross(Vi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ci.subVectors(this.c,this.b),Vi.subVectors(this.a,this.b),ci.cross(Vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return Uo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Uo=!0),r.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return r.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,a,o;fr.subVectors(i,n),pr.subVectors(s,n),xh.subVectors(e,n);let c=fr.dot(xh),l=pr.dot(xh);if(c<=0&&l<=0)return t.copy(n);bh.subVectors(e,i);let h=fr.dot(bh),d=pr.dot(bh);if(h>=0&&d<=h)return t.copy(i);let u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(fr,a);yh.subVectors(e,s);let f=fr.dot(yh),g=pr.dot(yh);if(g>=0&&f<=g)return t.copy(s);let v=f*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(pr,o);let m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return Rp.subVectors(s,i),o=(d-h)/(d-h+(f-g)),t.copy(i).addScaledVector(Rp,o);let p=1/(m+v+u);return a=v*p,o=u*p,t.copy(n).addScaledVector(fr,a).addScaledVector(pr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Om={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},us={h:0,s:0,l:0},Ho={h:0,s:0,l:0};function _h(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}var $=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=lt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=pt.workingColorSpace){return this.r=e,this.g=t,this.b=n,pt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=pt.workingColorSpace){if(e=Wu(e,1),t=Qt(t,0,1),n=Qt(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=_h(a,s,e+1/3),this.g=_h(a,s,e),this.b=_h(a,s,e-1/3)}return pt.toWorkingColorSpace(this,i),this}setStyle(e,t=lt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=lt){let n=Om[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ir(e.r),this.g=Ir(e.g),this.b=Ir(e.b),this}copyLinearToSRGB(e){return this.r=lh(e.r),this.g=lh(e.g),this.b=lh(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=lt){return pt.fromWorkingColorSpace(xn.copy(this),e),Math.round(Qt(xn.r*255,0,255))*65536+Math.round(Qt(xn.g*255,0,255))*256+Math.round(Qt(xn.b*255,0,255))}getHexString(e=lt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=pt.workingColorSpace){pt.fromWorkingColorSpace(xn.copy(this),t);let n=xn.r,i=xn.g,s=xn.b,a=Math.max(n,i,s),o=Math.min(n,i,s),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case n:c=(i-s)/d+(i<s?6:0);break;case i:c=(s-n)/d+2;break;case s:c=(n-i)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=pt.workingColorSpace){return pt.fromWorkingColorSpace(xn.copy(this),t),e.r=xn.r,e.g=xn.g,e.b=xn.b,e}getStyle(e=lt){pt.fromWorkingColorSpace(xn.copy(this),e);let t=xn.r,n=xn.g,i=xn.b;return e!==lt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(us),this.setHSL(us.h+e,us.s+t,us.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(us),e.getHSL(Ho);let n=Ca(us.h,Ho.h,t),i=Ca(us.s,Ho.s,t),s=Ca(us.l,Ho.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},xn=new $;$.NAMES=Om;var Hx=0,mn=class extends Zi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hx++}),this.uuid=hi(),this.name="",this.type="Material",this.blending=Lr,this.side=wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kh,this.blendDst=Bh,this.blendEquation=ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $(0,0,0),this.blendAlpha=0,this.depthFunc=ac,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ar,this.stencilZFail=ar,this.stencilZPass=ar,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Lr&&(n.blending=this.blending),this.side!==wi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==kh&&(n.blendSrc=this.blendSrc),this.blendDst!==Bh&&(n.blendDst=this.blendDst),this.blendEquation!==ji&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ac&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==mp&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ar&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ar&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ar&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let a=[];for(let o in s){let c=s[o];delete c.metadata,a.push(c)}return a}if(t){let s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Jt=class extends mn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Fu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Kt=new M,Oo=new re,we=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Vh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Yi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Oo.fromBufferAttribute(this,t),Oo.applyMatrix3(e),this.setXY(t,Oo.x,Oo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix3(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=_i(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=yt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=_i(t,this.array)),t}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=_i(t,this.array)),t}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=_i(t,this.array)),t}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=_i(t,this.array)),t}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),i=yt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),i=yt(i,this.array),s=yt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Vh&&(e.usage=this.usage),e}};var vc=class extends we{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var xc=class extends we{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ie=class extends we{constructor(e,t,n){super(new Float32Array(e),t,n)}};var Ox=0,Zn=new Ee,Mh=new Et,mr=new M,zn=new zt,ya=new zt,ln=new M,Pe=class r extends Zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ox++}),this.uuid=hi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Hm(e)?xc:vc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new ot().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zn.makeRotationFromQuaternion(e),this.applyMatrix4(Zn),this}rotateX(e){return Zn.makeRotationX(e),this.applyMatrix4(Zn),this}rotateY(e){return Zn.makeRotationY(e),this.applyMatrix4(Zn),this}rotateZ(e){return Zn.makeRotationZ(e),this.applyMatrix4(Zn),this}translate(e,t,n){return Zn.makeTranslation(e,t,n),this.applyMatrix4(Zn),this}scale(e,t,n){return Zn.makeScale(e,t,n),this.applyMatrix4(Zn),this}lookAt(e){return Mh.lookAt(e),Mh.updateMatrix(),this.applyMatrix4(Mh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mr).negate(),this.translate(mr.x,mr.y,mr.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ie(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new M(-1/0,-1/0,-1/0),new M(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];zn.setFromBufferAttribute(s),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,zn.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,zn.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(zn.min),this.boundingBox.expandByPoint(zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new M,1/0);return}if(e){let n=this.boundingSphere.center;if(zn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];ya.setFromBufferAttribute(o),this.morphTargetsRelative?(ln.addVectors(zn.min,ya.min),zn.expandByPoint(ln),ln.addVectors(zn.max,ya.max),zn.expandByPoint(ln)):(zn.expandByPoint(ya.min),zn.expandByPoint(ya.max))}zn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)ln.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(ln));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)ln.fromBufferAttribute(o,l),c&&(mr.fromBufferAttribute(e,l),ln.add(mr)),i=Math.max(i,n.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,i=t.position.array,s=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new we(new Float32Array(4*o),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let T=0;T<o;T++)l[T]=new M,h[T]=new M;let d=new M,u=new M,f=new M,g=new re,v=new re,m=new re,p=new M,x=new M;function b(T,F,N){d.fromArray(i,T*3),u.fromArray(i,F*3),f.fromArray(i,N*3),g.fromArray(a,T*2),v.fromArray(a,F*2),m.fromArray(a,N*2),u.sub(d),f.sub(d),v.sub(g),m.sub(g);let H=1/(v.x*m.y-m.x*v.y);isFinite(H)&&(p.copy(u).multiplyScalar(m.y).addScaledVector(f,-v.y).multiplyScalar(H),x.copy(f).multiplyScalar(v.x).addScaledVector(u,-m.x).multiplyScalar(H),l[T].add(p),l[F].add(p),l[N].add(p),h[T].add(x),h[F].add(x),h[N].add(x))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let T=0,F=y.length;T<F;++T){let N=y[T],H=N.start,L=N.count;for(let A=H,C=H+L;A<C;A+=3)b(n[A+0],n[A+1],n[A+2])}let _=new M,w=new M,S=new M,D=new M;function E(T){S.fromArray(s,T*3),D.copy(S);let F=l[T];_.copy(F),_.sub(S.multiplyScalar(S.dot(F))).normalize(),w.crossVectors(D,F);let H=w.dot(h[T])<0?-1:1;c[T*4]=_.x,c[T*4+1]=_.y,c[T*4+2]=_.z,c[T*4+3]=H}for(let T=0,F=y.length;T<F;++T){let N=y[T],H=N.start,L=N.count;for(let A=H,C=H+L;A<C;A+=3)E(n[A+0]),E(n[A+1]),E(n[A+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new we(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let i=new M,s=new M,a=new M,o=new M,c=new M,l=new M,h=new M,d=new M;if(e)for(let u=0,f=e.count;u<f;u+=3){let g=e.getX(u+0),v=e.getX(u+1),m=e.getX(u+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),h.subVectors(a,s),d.subVectors(i,s),h.cross(d),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,f=t.count;u<f;u+=3)i.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,s),d.subVectors(i,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ln.fromBufferAttribute(e,t),ln.normalize(),e.setXYZ(t,ln.x,ln.y,ln.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,d=o.normalized,u=new l.constructor(c.length*h),f=0,g=0;for(let v=0,m=c.length;v<m;v++){o.isInterleavedBufferAttribute?f=c[v]*o.data.stride+o.offset:f=c[v]*h;for(let p=0;p<h;p++)u[g++]=l[f++]}return new we(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,n=this.index.array,i=this.attributes;for(let o in i){let c=i[o],l=e(c,n);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let c=[],l=s[o];for(let h=0,d=l.length;h<d;h++){let u=l[h],f=e(u,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){let f=l[d];h.push(f.toJSON(e.data))}h.length>0&&(i[c]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(t))}let s=e.morphAttributes;for(let l in s){let h=[],d=s[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Cp=new Ee,Os=new js,ko=new Vn,Pp=new M,gr=new M,vr=new M,xr=new M,Eh=new M,Bo=new M,zo=new re,Go=new re,Vo=new re,Lp=new M,Ip=new M,Dp=new M,Wo=new M,qo=new M,Ue=class extends Et{constructor(e=new Pe,t=new Jt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(s&&o){Bo.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=o[c],d=s[c];h!==0&&(Eh.fromBufferAttribute(d,e),a?Bo.addScaledVector(Eh,h):Bo.addScaledVector(Eh.sub(t),h))}t.add(Bo)}return t}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ko.copy(n.boundingSphere),ko.applyMatrix4(s),Os.copy(e.ray).recast(e.near),!(ko.containsPoint(Os.origin)===!1&&(Os.intersectSphere(ko,Pp)===null||Os.origin.distanceToSquared(Pp)>(e.far-e.near)**2))&&(Cp.copy(s).invert(),Os.copy(e.ray).applyMatrix4(Cp),!(n.boundingBox!==null&&Os.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Os)))}_computeIntersections(e,t,n){let i,s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){let m=u[g],p=a[m.materialIndex],x=Math.max(m.start,f.start),b=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let y=x,_=b;y<_;y+=3){let w=o.getX(y),S=o.getX(y+1),D=o.getX(y+2);i=Xo(this,p,e,n,l,h,d,w,S,D),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let x=o.getX(m),b=o.getX(m+1),y=o.getX(m+2);i=Xo(this,a,e,n,l,h,d,x,b,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){let m=u[g],p=a[m.materialIndex],x=Math.max(m.start,f.start),b=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let y=x,_=b;y<_;y+=3){let w=y,S=y+1,D=y+2;i=Xo(this,p,e,n,l,h,d,w,S,D),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let x=m,b=m+1,y=m+2;i=Xo(this,a,e,n,l,h,d,x,b,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};function kx(r,e,t,n,i,s,a,o){let c;if(e.side===fn?c=n.intersectTriangle(a,s,i,!0,o):c=n.intersectTriangle(i,s,a,e.side===wi,o),c===null)return null;qo.copy(o),qo.applyMatrix4(r.matrixWorld);let l=t.ray.origin.distanceTo(qo);return l<t.near||l>t.far?null:{distance:l,point:qo.clone(),object:r}}function Xo(r,e,t,n,i,s,a,o,c,l){r.getVertexPosition(o,gr),r.getVertexPosition(c,vr),r.getVertexPosition(l,xr);let h=kx(r,e,t,n,gr,vr,xr,Wo);if(h){i&&(zo.fromBufferAttribute(i,o),Go.fromBufferAttribute(i,c),Vo.fromBufferAttribute(i,l),h.uv=Gs.getInterpolation(Wo,gr,vr,xr,zo,Go,Vo,new re)),s&&(zo.fromBufferAttribute(s,o),Go.fromBufferAttribute(s,c),Vo.fromBufferAttribute(s,l),h.uv1=Gs.getInterpolation(Wo,gr,vr,xr,zo,Go,Vo,new re),h.uv2=h.uv1),a&&(Lp.fromBufferAttribute(a,o),Ip.fromBufferAttribute(a,c),Dp.fromBufferAttribute(a,l),h.normal=Gs.getInterpolation(Wo,gr,vr,xr,Lp,Ip,Dp,new M),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new M,materialIndex:0};Gs.getNormal(gr,vr,xr,d.normal),h.face=d}return h}var ht=class r extends Pe{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};let o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);let c=[],l=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new Ie(l,3)),this.setAttribute("normal",new Ie(h,3)),this.setAttribute("uv",new Ie(d,2));function g(v,m,p,x,b,y,_,w,S,D,E){let T=y/S,F=_/D,N=y/2,H=_/2,L=w/2,A=S+1,C=D+1,U=0,O=0,k=new M;for(let V=0;V<C;V++){let j=V*F-H;for(let ee=0;ee<A;ee++){let G=ee*T-N;k[v]=G*x,k[m]=j*b,k[p]=L,l.push(k.x,k.y,k.z),k[v]=0,k[m]=0,k[p]=w>0?1:-1,h.push(k.x,k.y,k.z),d.push(ee/S),d.push(1-V/D),U+=1}}for(let V=0;V<D;V++)for(let j=0;j<S;j++){let ee=u+j+A*V,G=u+j+A*(V+1),Z=u+(j+1)+A*(V+1),he=u+(j+1)+A*V;c.push(ee,G,he),c.push(G,Z,he),O+=6}o.addGroup(f,O,E),f+=O,u+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function kr(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Cn(r){let e={};for(let t=0;t<r.length;t++){let n=kr(r[t]);for(let i in n)e[i]=n[i]}return e}function Bx(r){let e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function km(r){return r.getRenderTarget()===null?r.outputColorSpace:pt.workingColorSpace}var zx={clone:kr,merge:Cn},Gx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,vt=class extends mn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gx,this.fragmentShader=Vx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=kr(e.uniforms),this.uniformsGroups=Bx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},bc=class extends Et{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ee,this.projectionMatrix=new Ee,this.projectionMatrixInverse=new Ee,this.coordinateSystem=Ki}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Dt=class extends bc{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Or*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ra*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Or*2*Math.atan(Math.tan(Ra*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ra*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},br=-90,yr=1,Yh=class extends Et{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Dt(br,yr,e,t);i.layers=this.layers,this.add(i);let s=new Dt(br,yr,e,t);s.layers=this.layers,this.add(s);let a=new Dt(br,yr,e,t);a.layers=this.layers,this.add(a);let o=new Dt(br,yr,e,t);o.layers=this.layers,this.add(o);let c=new Dt(br,yr,e,t);c.layers=this.layers,this.add(c);let l=new Dt(br,yr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,c]=t;for(let l of t)this.remove(l);if(e===Ki)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===dc)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,c,l,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},yc=class extends pn{constructor(e,t,n,i,s,a,o,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Fr,super(e,t,n,i,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Kh=class extends hn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Pa("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===qs?lt:bn),this.texture=new yc(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Zt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ht(5,5,5),s=new vt({name:"CubemapFromEquirect",uniforms:kr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:fn,blending:fs});s.uniforms.tEquirect.value=t;let a=new Ue(i,s),o=t.minFilter;return t.minFilter===Ti&&(t.minFilter=Zt),new Yh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}},wh=new M,Wx=new M,qx=new ot,li=class{constructor(e=new M(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=wh.subVectors(n,t).cross(Wx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(wh),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||qx.getNormalMatrix(e),i=this.coplanarPoint(wh).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ks=new Vn,jo=new M,Ha=class{constructor(e=new li,t=new li,n=new li,i=new li,s=new li,a=new li){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ki){let n=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],c=i[3],l=i[4],h=i[5],d=i[6],u=i[7],f=i[8],g=i[9],v=i[10],m=i[11],p=i[12],x=i[13],b=i[14],y=i[15];if(n[0].setComponents(c-s,u-l,m-f,y-p).normalize(),n[1].setComponents(c+s,u+l,m+f,y+p).normalize(),n[2].setComponents(c+a,u+h,m+g,y+x).normalize(),n[3].setComponents(c-a,u-h,m-g,y-x).normalize(),n[4].setComponents(c-o,u-d,m-v,y-b).normalize(),t===Ki)n[5].setComponents(c+o,u+d,m+v,y+b).normalize();else if(t===dc)n[5].setComponents(o,d,v,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ks.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ks.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ks)}intersectsSprite(e){return ks.center.set(0,0,0),ks.radius=.7071067811865476,ks.applyMatrix4(e.matrixWorld),this.intersectsSphere(ks)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(jo.x=i.normal.x>0?e.max.x:e.min.x,jo.y=i.normal.y>0?e.max.y:e.min.y,jo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(jo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Bm(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Xx(r,e){let t=e.isWebGL2,n=new WeakMap;function i(l,h){let d=l.array,u=l.usage,f=d.byteLength,g=r.createBuffer();r.bindBuffer(h,g),r.bufferData(h,d,u),l.onUploadCallback();let v;if(d instanceof Float32Array)v=r.FLOAT;else if(d instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)v=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=r.UNSIGNED_SHORT;else if(d instanceof Int16Array)v=r.SHORT;else if(d instanceof Uint32Array)v=r.UNSIGNED_INT;else if(d instanceof Int32Array)v=r.INT;else if(d instanceof Int8Array)v=r.BYTE;else if(d instanceof Uint8Array)v=r.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)v=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:v,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version,size:f}}function s(l,h,d){let u=h.array,f=h._updateRange,g=h.updateRanges;if(r.bindBuffer(d,l),f.count===-1&&g.length===0&&r.bufferSubData(d,0,u),g.length!==0){for(let v=0,m=g.length;v<m;v++){let p=g[v];t?r.bufferSubData(d,p.start*u.BYTES_PER_ELEMENT,u,p.start,p.count):r.bufferSubData(d,p.start*u.BYTES_PER_ELEMENT,u.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}f.count!==-1&&(t?r.bufferSubData(d,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count):r.bufferSubData(d,f.offset*u.BYTES_PER_ELEMENT,u.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);h&&(r.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let u=n.get(l);(!u||u.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let d=n.get(l);if(d===void 0)n.set(l,i(l,h));else if(d.version<l.version){if(d.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,l,h),d.version=l.version}}return{get:a,remove:o,update:c}}var ui=class r extends Pe{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,d=e/o,u=t/c,f=[],g=[],v=[],m=[];for(let p=0;p<h;p++){let x=p*u-a;for(let b=0;b<l;b++){let y=b*d-s;g.push(y,-x,0),v.push(0,0,1),m.push(b/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let x=0;x<o;x++){let b=x+l*p,y=x+l*(p+1),_=x+1+l*(p+1),w=x+1+l*p;f.push(b,y,w),f.push(y,_,w)}this.setIndex(f),this.setAttribute("position",new Ie(g,3)),this.setAttribute("normal",new Ie(v,3)),this.setAttribute("uv",new Ie(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}},jx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yx=`#ifdef USE_ALPHAHASH
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
#endif`,Kx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jx=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Qx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$x=`#ifdef USE_AOMAP
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
#endif`,eb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tb=`#ifdef USE_BATCHING
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
#endif`,nb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,ib=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ab=`#ifdef USE_IRIDESCENCE
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
#endif`,ob=`#ifdef USE_BUMPMAP
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
#endif`,cb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,lb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ub=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,db=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,mb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,gb=`#define PI 3.141592653589793
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
} // validated`,vb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,xb=`vec3 transformedNormal = objectNormal;
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
#endif`,bb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_b=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Eb="gl_FragColor = linearToOutputTexel( gl_FragColor );",wb=`
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
}`,Tb=`#ifdef USE_ENVMAP
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
#endif`,Sb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ab=`#ifdef USE_ENVMAP
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
#endif`,Rb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cb=`#ifdef USE_ENVMAP
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
#endif`,Pb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ib=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Db=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fb=`#ifdef USE_GRADIENTMAP
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
}`,Nb=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Ub=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ob=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kb=`uniform bool receiveShadow;
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
#endif`,Bb=`#ifdef USE_ENVMAP
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
#endif`,zb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qb=`PhysicalMaterial material;
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
#endif`,Xb=`struct PhysicalMaterial {
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
}`,jb=`
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
#endif`,Yb=`#if defined( RE_IndirectDiffuse )
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
#endif`,Kb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zb=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jb=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qb=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,$b=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,ey=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ty=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ny=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,iy=`#if defined( USE_POINTS_UV )
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
#endif`,sy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ry=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ay=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,oy=`#ifdef USE_MORPHNORMALS
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
#endif`,cy=`#ifdef USE_MORPHTARGETS
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
#endif`,ly=`#ifdef USE_MORPHTARGETS
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
#endif`,hy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,uy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,dy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,py=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,my=`#ifdef USE_NORMALMAP
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
#endif`,gy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,by=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_y=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,My=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ey=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ty=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ay=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ry=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Py=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ly=`float getShadowMask() {
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
}`,Iy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Dy=`#ifdef USE_SKINNING
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
#endif`,Fy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ny=`#ifdef USE_SKINNING
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
#endif`,Uy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Oy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ky=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,By=`#ifdef USE_TRANSMISSION
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
#endif`,zy=`#ifdef USE_TRANSMISSION
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
#endif`,Gy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Xy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jy=`uniform sampler2D t2D;
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
}`,Yy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ky=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Zy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qy=`#include <common>
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
}`,$y=`#if DEPTH_PACKING == 3200
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
}`,e_=`#define DISTANCE
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
}`,t_=`#define DISTANCE
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
}`,n_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,i_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s_=`uniform float scale;
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
}`,r_=`uniform vec3 diffuse;
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
}`,a_=`#include <common>
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
}`,o_=`uniform vec3 diffuse;
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
}`,c_=`#define LAMBERT
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
}`,l_=`#define LAMBERT
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
}`,h_=`#define MATCAP
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
}`,u_=`#define MATCAP
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
}`,d_=`#define NORMAL
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
}`,f_=`#define NORMAL
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
}`,p_=`#define PHONG
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
}`,m_=`#define PHONG
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
}`,g_=`#define STANDARD
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
}`,v_=`#define STANDARD
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
}`,x_=`#define TOON
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
}`,b_=`#define TOON
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
}`,y_=`uniform float size;
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
}`,__=`uniform vec3 diffuse;
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
}`,M_=`#include <common>
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
}`,E_=`uniform vec3 color;
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
}`,w_=`uniform float rotation;
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
}`,T_=`uniform vec3 diffuse;
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
}`,Ye={alphahash_fragment:jx,alphahash_pars_fragment:Yx,alphamap_fragment:Kx,alphamap_pars_fragment:Zx,alphatest_fragment:Jx,alphatest_pars_fragment:Qx,aomap_fragment:$x,aomap_pars_fragment:eb,batching_pars_vertex:tb,batching_vertex:nb,begin_vertex:ib,beginnormal_vertex:sb,bsdfs:rb,iridescence_fragment:ab,bumpmap_pars_fragment:ob,clipping_planes_fragment:cb,clipping_planes_pars_fragment:lb,clipping_planes_pars_vertex:hb,clipping_planes_vertex:ub,color_fragment:db,color_pars_fragment:fb,color_pars_vertex:pb,color_vertex:mb,common:gb,cube_uv_reflection_fragment:vb,defaultnormal_vertex:xb,displacementmap_pars_vertex:bb,displacementmap_vertex:yb,emissivemap_fragment:_b,emissivemap_pars_fragment:Mb,colorspace_fragment:Eb,colorspace_pars_fragment:wb,envmap_fragment:Tb,envmap_common_pars_fragment:Sb,envmap_pars_fragment:Ab,envmap_pars_vertex:Rb,envmap_physical_pars_fragment:Bb,envmap_vertex:Cb,fog_vertex:Pb,fog_pars_vertex:Lb,fog_fragment:Ib,fog_pars_fragment:Db,gradientmap_pars_fragment:Fb,lightmap_fragment:Nb,lightmap_pars_fragment:Ub,lights_lambert_fragment:Hb,lights_lambert_pars_fragment:Ob,lights_pars_begin:kb,lights_toon_fragment:zb,lights_toon_pars_fragment:Gb,lights_phong_fragment:Vb,lights_phong_pars_fragment:Wb,lights_physical_fragment:qb,lights_physical_pars_fragment:Xb,lights_fragment_begin:jb,lights_fragment_maps:Yb,lights_fragment_end:Kb,logdepthbuf_fragment:Zb,logdepthbuf_pars_fragment:Jb,logdepthbuf_pars_vertex:Qb,logdepthbuf_vertex:$b,map_fragment:ey,map_pars_fragment:ty,map_particle_fragment:ny,map_particle_pars_fragment:iy,metalnessmap_fragment:sy,metalnessmap_pars_fragment:ry,morphcolor_vertex:ay,morphnormal_vertex:oy,morphtarget_pars_vertex:cy,morphtarget_vertex:ly,normal_fragment_begin:hy,normal_fragment_maps:uy,normal_pars_fragment:dy,normal_pars_vertex:fy,normal_vertex:py,normalmap_pars_fragment:my,clearcoat_normal_fragment_begin:gy,clearcoat_normal_fragment_maps:vy,clearcoat_pars_fragment:xy,iridescence_pars_fragment:by,opaque_fragment:yy,packing:_y,premultiplied_alpha_fragment:My,project_vertex:Ey,dithering_fragment:wy,dithering_pars_fragment:Ty,roughnessmap_fragment:Sy,roughnessmap_pars_fragment:Ay,shadowmap_pars_fragment:Ry,shadowmap_pars_vertex:Cy,shadowmap_vertex:Py,shadowmask_pars_fragment:Ly,skinbase_vertex:Iy,skinning_pars_vertex:Dy,skinning_vertex:Fy,skinnormal_vertex:Ny,specularmap_fragment:Uy,specularmap_pars_fragment:Hy,tonemapping_fragment:Oy,tonemapping_pars_fragment:ky,transmission_fragment:By,transmission_pars_fragment:zy,uv_pars_fragment:Gy,uv_pars_vertex:Vy,uv_vertex:Wy,worldpos_vertex:qy,background_vert:Xy,background_frag:jy,backgroundCube_vert:Yy,backgroundCube_frag:Ky,cube_vert:Zy,cube_frag:Jy,depth_vert:Qy,depth_frag:$y,distanceRGBA_vert:e_,distanceRGBA_frag:t_,equirect_vert:n_,equirect_frag:i_,linedashed_vert:s_,linedashed_frag:r_,meshbasic_vert:a_,meshbasic_frag:o_,meshlambert_vert:c_,meshlambert_frag:l_,meshmatcap_vert:h_,meshmatcap_frag:u_,meshnormal_vert:d_,meshnormal_frag:f_,meshphong_vert:p_,meshphong_frag:m_,meshphysical_vert:g_,meshphysical_frag:v_,meshtoon_vert:x_,meshtoon_frag:b_,points_vert:y_,points_frag:__,shadow_vert:M_,shadow_frag:E_,sprite_vert:w_,sprite_frag:T_},ve={common:{diffuse:{value:new $(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new $(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},yi={basic:{uniforms:Cn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:Cn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new $(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:Cn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new $(0)},specular:{value:new $(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:Cn([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new $(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:Cn([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new $(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:Cn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:Cn([ve.points,ve.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:Cn([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:Cn([ve.common,ve.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:Cn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:Cn([ve.sprite,ve.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:Cn([ve.common,ve.displacementmap,{referencePosition:{value:new M},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:Cn([ve.lights,ve.fog,{color:{value:new $(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};yi.physical={uniforms:Cn([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new $(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new $(0)},specularColor:{value:new $(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};var Yo={r:0,b:0,g:0};function S_(r,e,t,n,i,s,a){let o=new $(0),c=s===!0?0:1,l,h,d=null,u=0,f=null;function g(m,p){let x=!1,b=p.isScene===!0?p.background:null;b&&b.isTexture&&(b=(p.backgroundBlurriness>0?t:e).get(b)),b===null?v(o,c):b&&b.isColor&&(v(b,1),x=!0);let y=r.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,a):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||x)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),b&&(b.isCubeTexture||b.mapping===Uc)?(h===void 0&&(h=new Ue(new ht(1,1,1),new vt({name:"BackgroundCubeMaterial",uniforms:kr(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(_,w,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=pt.getTransfer(b.colorSpace)!==It,(d!==b||u!==b.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,d=b,u=b.version,f=r.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Ue(new ui(2,2),new vt({name:"BackgroundMaterial",uniforms:kr(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:wi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=pt.getTransfer(b.colorSpace)!==It,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(d!==b||u!==b.version||f!==r.toneMapping)&&(l.material.needsUpdate=!0,d=b,u=b.version,f=r.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function v(m,p){m.getRGB(Yo,km(r)),n.buffers.color.setClear(Yo.r,Yo.g,Yo.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),c=p,v(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,v(o,c)},render:g}}function A_(r,e,t,n){let i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},c=m(null),l=c,h=!1;function d(L,A,C,U,O){let k=!1;if(a){let V=v(U,C,A);l!==V&&(l=V,f(l.object)),k=p(L,U,C,O),k&&x(L,U,C,O)}else{let V=A.wireframe===!0;(l.geometry!==U.id||l.program!==C.id||l.wireframe!==V)&&(l.geometry=U.id,l.program=C.id,l.wireframe=V,k=!0)}O!==null&&t.update(O,r.ELEMENT_ARRAY_BUFFER),(k||h)&&(h=!1,D(L,A,C,U),O!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function u(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function f(L){return n.isWebGL2?r.bindVertexArray(L):s.bindVertexArrayOES(L)}function g(L){return n.isWebGL2?r.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function v(L,A,C){let U=C.wireframe===!0,O=o[L.id];O===void 0&&(O={},o[L.id]=O);let k=O[A.id];k===void 0&&(k={},O[A.id]=k);let V=k[U];return V===void 0&&(V=m(u()),k[U]=V),V}function m(L){let A=[],C=[],U=[];for(let O=0;O<i;O++)A[O]=0,C[O]=0,U[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:C,attributeDivisors:U,object:L,attributes:{},index:null}}function p(L,A,C,U){let O=l.attributes,k=A.attributes,V=0,j=C.getAttributes();for(let ee in j)if(j[ee].location>=0){let Z=O[ee],he=k[ee];if(he===void 0&&(ee==="instanceMatrix"&&L.instanceMatrix&&(he=L.instanceMatrix),ee==="instanceColor"&&L.instanceColor&&(he=L.instanceColor)),Z===void 0||Z.attribute!==he||he&&Z.data!==he.data)return!0;V++}return l.attributesNum!==V||l.index!==U}function x(L,A,C,U){let O={},k=A.attributes,V=0,j=C.getAttributes();for(let ee in j)if(j[ee].location>=0){let Z=k[ee];Z===void 0&&(ee==="instanceMatrix"&&L.instanceMatrix&&(Z=L.instanceMatrix),ee==="instanceColor"&&L.instanceColor&&(Z=L.instanceColor));let he={};he.attribute=Z,Z&&Z.data&&(he.data=Z.data),O[ee]=he,V++}l.attributes=O,l.attributesNum=V,l.index=U}function b(){let L=l.newAttributes;for(let A=0,C=L.length;A<C;A++)L[A]=0}function y(L){_(L,0)}function _(L,A){let C=l.newAttributes,U=l.enabledAttributes,O=l.attributeDivisors;C[L]=1,U[L]===0&&(r.enableVertexAttribArray(L),U[L]=1),O[L]!==A&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,A),O[L]=A)}function w(){let L=l.newAttributes,A=l.enabledAttributes;for(let C=0,U=A.length;C<U;C++)A[C]!==L[C]&&(r.disableVertexAttribArray(C),A[C]=0)}function S(L,A,C,U,O,k,V){V===!0?r.vertexAttribIPointer(L,A,C,O,k):r.vertexAttribPointer(L,A,C,U,O,k)}function D(L,A,C,U){if(n.isWebGL2===!1&&(L.isInstancedMesh||U.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;b();let O=U.attributes,k=C.getAttributes(),V=A.defaultAttributeValues;for(let j in k){let ee=k[j];if(ee.location>=0){let G=O[j];if(G===void 0&&(j==="instanceMatrix"&&L.instanceMatrix&&(G=L.instanceMatrix),j==="instanceColor"&&L.instanceColor&&(G=L.instanceColor)),G!==void 0){let Z=G.normalized,he=G.itemSize,ue=t.get(G);if(ue===void 0)continue;let ye=ue.buffer,W=ue.type,Y=ue.bytesPerElement,te=n.isWebGL2===!0&&(W===r.INT||W===r.UNSIGNED_INT||G.gpuType===Am);if(G.isInterleavedBufferAttribute){let ie=G.data,z=ie.stride,xe=G.offset;if(ie.isInstancedInterleavedBuffer){for(let fe=0;fe<ee.locationSize;fe++)_(ee.location+fe,ie.meshPerAttribute);L.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let fe=0;fe<ee.locationSize;fe++)y(ee.location+fe);r.bindBuffer(r.ARRAY_BUFFER,ye);for(let fe=0;fe<ee.locationSize;fe++)S(ee.location+fe,he/ee.locationSize,W,Z,z*Y,(xe+he/ee.locationSize*fe)*Y,te)}else{if(G.isInstancedBufferAttribute){for(let ie=0;ie<ee.locationSize;ie++)_(ee.location+ie,G.meshPerAttribute);L.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let ie=0;ie<ee.locationSize;ie++)y(ee.location+ie);r.bindBuffer(r.ARRAY_BUFFER,ye);for(let ie=0;ie<ee.locationSize;ie++)S(ee.location+ie,he/ee.locationSize,W,Z,he*Y,he/ee.locationSize*ie*Y,te)}}else if(V!==void 0){let Z=V[j];if(Z!==void 0)switch(Z.length){case 2:r.vertexAttrib2fv(ee.location,Z);break;case 3:r.vertexAttrib3fv(ee.location,Z);break;case 4:r.vertexAttrib4fv(ee.location,Z);break;default:r.vertexAttrib1fv(ee.location,Z)}}}}w()}function E(){N();for(let L in o){let A=o[L];for(let C in A){let U=A[C];for(let O in U)g(U[O].object),delete U[O];delete A[C]}delete o[L]}}function T(L){if(o[L.id]===void 0)return;let A=o[L.id];for(let C in A){let U=A[C];for(let O in U)g(U[O].object),delete U[O];delete A[C]}delete o[L.id]}function F(L){for(let A in o){let C=o[A];if(C[L.id]===void 0)continue;let U=C[L.id];for(let O in U)g(U[O].object),delete U[O];delete C[L.id]}}function N(){H(),h=!0,l!==c&&(l=c,f(l.object))}function H(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:d,reset:N,resetDefaultState:H,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfProgram:F,initAttributes:b,enableAttribute:y,disableUnusedAttributes:w}}function R_(r,e,t,n){let i=n.isWebGL2,s;function a(h){s=h}function o(h,d){r.drawArrays(s,h,d),t.update(d,s,1)}function c(h,d,u){if(u===0)return;let f,g;if(i)f=r,g="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](s,h,d,u),t.update(d,s,u)}function l(h,d,u){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<u;g++)this.render(h[g],d[g]);else{f.multiDrawArraysWEBGL(s,h,0,d,0,u);let g=0;for(let v=0;v<u;v++)g+=d[v];t.update(g,s,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=l}function C_(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let S=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(S){if(S==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext",o=t.precision!==void 0?t.precision:"highp",c=s(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);let l=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),u=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),m=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),p=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),b=u>0,y=a||e.has("OES_texture_float"),_=b&&y,w=a?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:u,maxTextureSize:f,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:x,vertexTextures:b,floatFragmentTextures:y,floatVertexTextures:_,maxSamples:w}}function P_(r){let e=this,t=null,n=0,i=!1,s=!1,a=new li,o=new ot,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,p=r.get(d);if(!i||g===null||g.length===0||s&&!m)s?h(null):l();else{let x=s?0:n,b=x*4,y=p.clippingState||null;c.value=y,y=h(g,u,b,f);for(let _=0;_!==b;++_)y[_]=t[_];p.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,g){let v=d!==null?d.length:0,m=null;if(v!==0){if(m=c.value,g!==!0||m===null){let p=f+v*4,x=u.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,y=f;b!==v;++b,y+=4)a.copy(d[b]).applyMatrix4(x,o),a.normal.toArray(m,y),m[y+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function L_(r){let e=new WeakMap;function t(a,o){return o===zh?a.mapping=Fr:o===Gh&&(a.mapping=Nr),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===zh||o===Gh)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new Kh(c.height/2);return l.fromEquirectangularTexture(r,a),e.set(a,l),a.addEventListener("dispose",i),t(l.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}var ms=class extends bc{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Cr=4,Fp=[.125,.215,.35,.446,.526,.582],zs=20,Th=new ms,Np=new $,Sh=null,Ah=0,Rh=0,Bs=(1+Math.sqrt(5))/2,_r=1/Bs,Up=[new M(1,1,1),new M(-1,1,1),new M(1,1,-1),new M(-1,1,-1),new M(0,Bs,_r),new M(0,Bs,-_r),new M(_r,0,Bs),new M(-_r,0,Bs),new M(Bs,_r,0),new M(-Bs,_r,0)],Br=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Sh=this._renderer.getRenderTarget(),Ah=this._renderer.getActiveCubeFace(),Rh=this._renderer.getActiveMipmapLevel(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Op(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Sh,Ah,Rh),e.scissorTest=!1,Ko(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Fr||e.mapping===Nr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sh=this._renderer.getRenderTarget(),Ah=this._renderer.getActiveCubeFace(),Rh=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Zt,minFilter:Zt,generateMipmaps:!1,type:Fn,format:Jn,colorSpace:en,depthBuffer:!1},i=Hp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hp(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=I_(s)),this._blurMaterial=D_(s,e,t)}return i}_compileMaterial(e){let t=new Ue(this._lodPlanes[0],e);this._renderer.compile(t,Th)}_sceneToCubeUV(e,t,n,i){let o=new Dt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Np),h.toneMapping=ps,h.autoClear=!1;let f=new Jt({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1}),g=new Ue(new ht,f),v=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,v=!0):(f.color.copy(Np),v=!0);for(let p=0;p<6;p++){let x=p%3;x===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):x===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));let b=this._cubeSize;Ko(i,x*b,p>2?b:0,b,b),h.setRenderTarget(i),v&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Fr||e.mapping===Nr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=kp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Op());let s=i?this._cubemapMaterial:this._equirectMaterial,a=new Ue(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;let c=this._cubeSize;Ko(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Th)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Up[(i-1)%Up.length];this._blur(e,i-1,i,s,a)}t.autoClear=n}_blur(e,t,n,i,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new Ue(this._lodPlanes[i],l),u=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*zs-1),v=s/g,m=isFinite(s)?1+Math.floor(h*v):zs;m>zs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${zs}`);let p=[],x=0;for(let S=0;S<zs;++S){let D=S/v,E=Math.exp(-D*D/2);p.push(E),S===0?x+=E:S<m&&(x+=2*E)}for(let S=0;S<p.length;S++)p[S]=p[S]/x;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:b}=this;u.dTheta.value=g,u.mipInt.value=b-n;let y=this._sizeLods[i],_=3*y*(i>b-Cr?i-b+Cr:0),w=4*(this._cubeSize-y);Ko(t,_,w,3*y,2*y),c.setRenderTarget(t),c.render(d,Th)}};function I_(r){let e=[],t=[],n=[],i=r,s=r-Cr+1+Fp.length;for(let a=0;a<s;a++){let o=Math.pow(2,i);t.push(o);let c=1/o;a>r-Cr?c=Fp[a-r+Cr-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,v=3,m=2,p=1,x=new Float32Array(v*g*f),b=new Float32Array(m*g*f),y=new Float32Array(p*g*f);for(let w=0;w<f;w++){let S=w%3*2/3-1,D=w>2?0:-1,E=[S,D,0,S+2/3,D,0,S+2/3,D+1,0,S,D,0,S+2/3,D+1,0,S,D+1,0];x.set(E,v*g*w),b.set(u,m*g*w);let T=[w,w,w,w,w,w];y.set(T,p*g*w)}let _=new Pe;_.setAttribute("position",new we(x,v)),_.setAttribute("uv",new we(b,m)),_.setAttribute("faceIndex",new we(y,p)),e.push(_),i>Cr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Hp(r,e,t){let n=new hn(r,e,t);return n.texture.mapping=Uc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ko(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function D_(r,e,t){let n=new Float32Array(zs),i=new M(0,1,0);return new vt({name:"SphericalGaussianBlur",defines:{n:zs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:qu(),fragmentShader:`

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
		`,blending:fs,depthTest:!1,depthWrite:!1})}function Op(){return new vt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qu(),fragmentShader:`

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
		`,blending:fs,depthTest:!1,depthWrite:!1})}function kp(){return new vt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fs,depthTest:!1,depthWrite:!1})}function qu(){return`

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
	`}function F_(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===zh||c===Gh,h=c===Fr||c===Nr;if(l||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=e.get(o);return t===null&&(t=new Br(r)),d=l?t.fromEquirectangular(o,d):t.fromCubemap(o,d),e.set(o,d),d.texture}else{if(e.has(o))return e.get(o).texture;{let d=o.image;if(l&&d&&d.height>0||h&&d&&i(d)){t===null&&(t=new Br(r));let u=l?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,u),o.addEventListener("dispose",s),u.texture}else return null}}}return o}function i(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function s(o){let c=o.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function N_(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function U_(r,e,t,n){let i={},s=new WeakMap;function a(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);for(let g in u.morphAttributes){let v=u.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)e.remove(v[m])}u.removeEventListener("dispose",a),delete i[u.id];let f=s.get(u);f&&(e.remove(f),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,t.memory.geometries++),u}function c(d){let u=d.attributes;for(let g in u)e.update(u[g],r.ARRAY_BUFFER);let f=d.morphAttributes;for(let g in f){let v=f[g];for(let m=0,p=v.length;m<p;m++)e.update(v[m],r.ARRAY_BUFFER)}}function l(d){let u=[],f=d.index,g=d.attributes.position,v=0;if(f!==null){let x=f.array;v=f.version;for(let b=0,y=x.length;b<y;b+=3){let _=x[b+0],w=x[b+1],S=x[b+2];u.push(_,w,w,S,S,_)}}else if(g!==void 0){let x=g.array;v=g.version;for(let b=0,y=x.length/3-1;b<y;b+=3){let _=b+0,w=b+1,S=b+2;u.push(_,w,w,S,S,_)}}else return;let m=new(Hm(u)?xc:vc)(u,1);m.version=v;let p=s.get(d);p&&e.remove(p),s.set(d,m)}function h(d){let u=s.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&l(d)}else l(d);return s.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function H_(r,e,t,n){let i=n.isWebGL2,s;function a(f){s=f}let o,c;function l(f){o=f.type,c=f.bytesPerElement}function h(f,g){r.drawElements(s,g,o,f*c),t.update(g,s,1)}function d(f,g,v){if(v===0)return;let m,p;if(i)m=r,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](s,g,o,f*c,v),t.update(g,s,v)}function u(f,g,v){if(v===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<v;p++)this.render(f[p]/c,g[p]);else{m.multiDrawElementsWEBGL(s,g,0,o,f,0,v);let p=0;for(let x=0;x<v;x++)p+=g[x];t.update(p,s,1)}}this.setMode=a,this.setIndex=l,this.render=h,this.renderInstances=d,this.renderMultiDraw=u}function O_(r){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function k_(r,e){return r[0]-e[0]}function B_(r,e){return Math.abs(e[1])-Math.abs(r[1])}function z_(r,e,t){let n={},i=new Float32Array(8),s=new WeakMap,a=new ct,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,h,d){let u=l.morphTargetInfluences;if(e.isWebGL2===!0){let f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=f!==void 0?f.length:0,v=s.get(h);if(v===void 0||v.count!==g){let L=function(){N.dispose(),s.delete(h),h.removeEventListener("dispose",L)};v!==void 0&&v.texture.dispose();let x=h.morphAttributes.position!==void 0,b=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,_=h.morphAttributes.position||[],w=h.morphAttributes.normal||[],S=h.morphAttributes.color||[],D=0;x===!0&&(D=1),b===!0&&(D=2),y===!0&&(D=3);let E=h.attributes.position.count*D,T=1;E>e.maxTextureSize&&(T=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);let F=new Float32Array(E*T*4*g),N=new gc(F,E,T,g);N.type=Yi,N.needsUpdate=!0;let H=D*4;for(let A=0;A<g;A++){let C=_[A],U=w[A],O=S[A],k=E*T*4*A;for(let V=0;V<C.count;V++){let j=V*H;x===!0&&(a.fromBufferAttribute(C,V),F[k+j+0]=a.x,F[k+j+1]=a.y,F[k+j+2]=a.z,F[k+j+3]=0),b===!0&&(a.fromBufferAttribute(U,V),F[k+j+4]=a.x,F[k+j+5]=a.y,F[k+j+6]=a.z,F[k+j+7]=0),y===!0&&(a.fromBufferAttribute(O,V),F[k+j+8]=a.x,F[k+j+9]=a.y,F[k+j+10]=a.z,F[k+j+11]=O.itemSize===4?a.w:1)}}v={count:g,texture:N,size:new re(E,T)},s.set(h,v),h.addEventListener("dispose",L)}let m=0;for(let x=0;x<u.length;x++)m+=u[x];let p=h.morphTargetsRelative?1:1-m;d.getUniforms().setValue(r,"morphTargetBaseInfluence",p),d.getUniforms().setValue(r,"morphTargetInfluences",u),d.getUniforms().setValue(r,"morphTargetsTexture",v.texture,t),d.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}else{let f=u===void 0?0:u.length,g=n[h.id];if(g===void 0||g.length!==f){g=[];for(let b=0;b<f;b++)g[b]=[b,0];n[h.id]=g}for(let b=0;b<f;b++){let y=g[b];y[0]=b,y[1]=u[b]}g.sort(B_);for(let b=0;b<8;b++)b<f&&g[b][1]?(o[b][0]=g[b][0],o[b][1]=g[b][1]):(o[b][0]=Number.MAX_SAFE_INTEGER,o[b][1]=0);o.sort(k_);let v=h.morphAttributes.position,m=h.morphAttributes.normal,p=0;for(let b=0;b<8;b++){let y=o[b],_=y[0],w=y[1];_!==Number.MAX_SAFE_INTEGER&&w?(v&&h.getAttribute("morphTarget"+b)!==v[_]&&h.setAttribute("morphTarget"+b,v[_]),m&&h.getAttribute("morphNormal"+b)!==m[_]&&h.setAttribute("morphNormal"+b,m[_]),i[b]=w,p+=w):(v&&h.hasAttribute("morphTarget"+b)===!0&&h.deleteAttribute("morphTarget"+b),m&&h.hasAttribute("morphNormal"+b)===!0&&h.deleteAttribute("morphNormal"+b),i[b]=0)}let x=h.morphTargetsRelative?1:1-p;d.getUniforms().setValue(r,"morphTargetBaseInfluence",x),d.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:c}}function G_(r,e,t,n){let i=new WeakMap;function s(c){let l=n.render.frame,h=c.geometry,d=e.get(c,h);if(i.get(d)!==l&&(e.update(d),i.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){let u=c.skeleton;i.get(u)!==l&&(u.update(),i.set(u,l))}return d}function a(){i=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}var zr=class extends pn{constructor(e,t,n,i,s,a,o,c,l,h){if(h=h!==void 0?h:Ws,h!==Ws&&h!==Ur)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ws&&(n=Mi),n===void 0&&h===Ur&&(n=Vs),super(null,i,s,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:jt,this.minFilter=c!==void 0?c:jt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},zm=new pn,Gm=new zr(1,1);Gm.compareFunction=Um;var Vm=new gc,Wm=new jh,qm=new yc,Bp=[],zp=[],Gp=new Float32Array(16),Vp=new Float32Array(9),Wp=new Float32Array(4);function Kr(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,s=Bp[i];if(s===void 0&&(s=new Float32Array(i),Bp[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function tn(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function nn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function kc(r,e){let t=zp[e];t===void 0&&(t=new Int32Array(e),zp[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function V_(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function W_(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;r.uniform2fv(this.addr,e),nn(t,e)}}function q_(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(tn(t,e))return;r.uniform3fv(this.addr,e),nn(t,e)}}function X_(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;r.uniform4fv(this.addr,e),nn(t,e)}}function j_(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;Wp.set(n),r.uniformMatrix2fv(this.addr,!1,Wp),nn(t,n)}}function Y_(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;Vp.set(n),r.uniformMatrix3fv(this.addr,!1,Vp),nn(t,n)}}function K_(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;Gp.set(n),r.uniformMatrix4fv(this.addr,!1,Gp),nn(t,n)}}function Z_(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function J_(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;r.uniform2iv(this.addr,e),nn(t,e)}}function Q_(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;r.uniform3iv(this.addr,e),nn(t,e)}}function $_(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;r.uniform4iv(this.addr,e),nn(t,e)}}function e1(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function t1(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;r.uniform2uiv(this.addr,e),nn(t,e)}}function n1(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;r.uniform3uiv(this.addr,e),nn(t,e)}}function i1(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;r.uniform4uiv(this.addr,e),nn(t,e)}}function s1(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s=this.type===r.SAMPLER_2D_SHADOW?Gm:zm;t.setTexture2D(e||s,i)}function r1(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Wm,i)}function a1(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||qm,i)}function o1(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Vm,i)}function c1(r){switch(r){case 5126:return V_;case 35664:return W_;case 35665:return q_;case 35666:return X_;case 35674:return j_;case 35675:return Y_;case 35676:return K_;case 5124:case 35670:return Z_;case 35667:case 35671:return J_;case 35668:case 35672:return Q_;case 35669:case 35673:return $_;case 5125:return e1;case 36294:return t1;case 36295:return n1;case 36296:return i1;case 35678:case 36198:case 36298:case 36306:case 35682:return s1;case 35679:case 36299:case 36307:return r1;case 35680:case 36300:case 36308:case 36293:return a1;case 36289:case 36303:case 36311:case 36292:return o1}}function l1(r,e){r.uniform1fv(this.addr,e)}function h1(r,e){let t=Kr(e,this.size,2);r.uniform2fv(this.addr,t)}function u1(r,e){let t=Kr(e,this.size,3);r.uniform3fv(this.addr,t)}function d1(r,e){let t=Kr(e,this.size,4);r.uniform4fv(this.addr,t)}function f1(r,e){let t=Kr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function p1(r,e){let t=Kr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function m1(r,e){let t=Kr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function g1(r,e){r.uniform1iv(this.addr,e)}function v1(r,e){r.uniform2iv(this.addr,e)}function x1(r,e){r.uniform3iv(this.addr,e)}function b1(r,e){r.uniform4iv(this.addr,e)}function y1(r,e){r.uniform1uiv(this.addr,e)}function _1(r,e){r.uniform2uiv(this.addr,e)}function M1(r,e){r.uniform3uiv(this.addr,e)}function E1(r,e){r.uniform4uiv(this.addr,e)}function w1(r,e,t){let n=this.cache,i=e.length,s=kc(t,i);tn(n,s)||(r.uniform1iv(this.addr,s),nn(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||zm,s[a])}function T1(r,e,t){let n=this.cache,i=e.length,s=kc(t,i);tn(n,s)||(r.uniform1iv(this.addr,s),nn(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Wm,s[a])}function S1(r,e,t){let n=this.cache,i=e.length,s=kc(t,i);tn(n,s)||(r.uniform1iv(this.addr,s),nn(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||qm,s[a])}function A1(r,e,t){let n=this.cache,i=e.length,s=kc(t,i);tn(n,s)||(r.uniform1iv(this.addr,s),nn(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Vm,s[a])}function R1(r){switch(r){case 5126:return l1;case 35664:return h1;case 35665:return u1;case 35666:return d1;case 35674:return f1;case 35675:return p1;case 35676:return m1;case 5124:case 35670:return g1;case 35667:case 35671:return v1;case 35668:case 35672:return x1;case 35669:case 35673:return b1;case 5125:return y1;case 36294:return _1;case 36295:return M1;case 36296:return E1;case 35678:case 36198:case 36298:case 36306:case 35682:return w1;case 35679:case 36299:case 36307:return T1;case 35680:case 36300:case 36308:case 36293:return S1;case 36289:case 36303:case 36311:case 36292:return A1}}var Zh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=c1(t.type)}},Jh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=R1(t.type)}},Qh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,a=i.length;s!==a;++s){let o=i[s];o.setValue(e,t[o.id],n)}}},Ch=/(\w+)(\])?(\[|\.)?/g;function qp(r,e){r.seq.push(e),r.map[e.id]=e}function C1(r,e,t){let n=r.name,i=n.length;for(Ch.lastIndex=0;;){let s=Ch.exec(n),a=Ch.lastIndex,o=s[1],c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){qp(t,l===void 0?new Zh(o,r,e):new Jh(o,r,e));break}else{let d=t.map[o];d===void 0&&(d=new Qh(o),qp(t,d)),t=d}}}var Dr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);C1(s,a,this)}}setValue(e,t,n,i){let s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){let o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function Xp(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}var P1=37297,L1=0;function I1(r,e){let t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function D1(r){let e=pt.getPrimaries(pt.workingColorSpace),t=pt.getPrimaries(r),n;switch(e===t?n="":e===uc&&t===hc?n="LinearDisplayP3ToLinearSRGB":e===hc&&t===uc&&(n="LinearSRGBToLinearDisplayP3"),r){case en:case Oc:return[n,"LinearTransferOETF"];case lt:case Vu:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function jp(r,e,t){let n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+I1(r.getShaderSource(e),a)}else return i}function F1(r,e){let t=D1(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function N1(r,e){let t;switch(e){case Bv:t="Linear";break;case zv:t="Reinhard";break;case Gv:t="OptimizedCineon";break;case Nu:t="ACESFilmic";break;case Wv:t="AgX";break;case Vv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function U1(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Pr).join(`
`)}function H1(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Pr).join(`
`)}function O1(r){let e=[];for(let t in r){let n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function k1(r,e){let t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(e,i),a=s.name,o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function Pr(r){return r!==""}function Yp(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Kp(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var B1=/^[ \t]*#include +<([\w\d./]+)>/gm;function $h(r){return r.replace(B1,G1)}var z1=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function G1(r,e){let t=Ye[e];if(t===void 0){let n=z1.get(e);if(n!==void 0)t=Ye[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return $h(t)}var V1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zp(r){return r.replace(V1,W1)}function W1(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Jp(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function q1(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Tm?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Pu?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Xi&&(e="SHADOWMAP_TYPE_VSM"),e}function X1(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Fr:case Nr:e="ENVMAP_TYPE_CUBE";break;case Uc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function j1(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Nr:e="ENVMAP_MODE_REFRACTION";break}return e}function Y1(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Fu:e="ENVMAP_BLENDING_MULTIPLY";break;case Ov:e="ENVMAP_BLENDING_MIX";break;case kv:e="ENVMAP_BLENDING_ADD";break}return e}function K1(r){let e=r.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Z1(r,e,t,n){let i=r.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,c=q1(t),l=X1(t),h=j1(t),d=Y1(t),u=K1(t),f=t.isWebGL2?"":U1(t),g=H1(t),v=O1(s),m=i.createProgram(),p,x,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Pr).join(`
`),p.length>0&&(p+=`
`),x=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Pr).join(`
`),x.length>0&&(x+=`
`)):(p=[Jp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pr).join(`
`),x=[f,Jp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ps?"#define TONE_MAPPING":"",t.toneMapping!==ps?Ye.tonemapping_pars_fragment:"",t.toneMapping!==ps?N1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,F1("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Pr).join(`
`)),a=$h(a),a=Yp(a,t),a=Kp(a,t),o=$h(o),o=Yp(o,t),o=Kp(o,t),a=Zp(a),o=Zp(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,x=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===gp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===gp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);let y=b+p+a,_=b+x+o,w=Xp(i,i.VERTEX_SHADER,y),S=Xp(i,i.FRAGMENT_SHADER,_);i.attachShader(m,w),i.attachShader(m,S),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function D(N){if(r.debug.checkShaderErrors){let H=i.getProgramInfoLog(m).trim(),L=i.getShaderInfoLog(w).trim(),A=i.getShaderInfoLog(S).trim(),C=!0,U=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(C=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,m,w,S);else{let O=jp(i,w,"vertex"),k=jp(i,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+H+`
`+O+`
`+k)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(L===""||A==="")&&(U=!1);U&&(N.diagnostics={runnable:C,programLog:H,vertexShader:{log:L,prefix:p},fragmentShader:{log:A,prefix:x}})}i.deleteShader(w),i.deleteShader(S),E=new Dr(i,m),T=k1(i,m)}let E;this.getUniforms=function(){return E===void 0&&D(this),E};let T;this.getAttributes=function(){return T===void 0&&D(this),T};let F=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=i.getProgramParameter(m,P1)),F},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=L1++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=w,this.fragmentShader=S,this}var J1=0,eu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new tu(e),t.set(e,n)),n}},tu=class{constructor(e){this.id=J1++,this.code=e,this.usedTimes=0}};function Q1(r,e,t,n,i,s,a){let o=new Ua,c=new eu,l=[],h=i.isWebGL2,d=i.logarithmicDepthBuffer,u=i.vertexTextures,f=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return E===0?"uv":`uv${E}`}function m(E,T,F,N,H){let L=N.fog,A=H.geometry,C=E.isMeshStandardMaterial?N.environment:null,U=(E.isMeshStandardMaterial?t:e).get(E.envMap||C),O=U&&U.mapping===Uc?U.image.height:null,k=g[E.type];E.precision!==null&&(f=i.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));let V=A.morphAttributes.position||A.morphAttributes.normal||A.morphAttributes.color,j=V!==void 0?V.length:0,ee=0;A.morphAttributes.position!==void 0&&(ee=1),A.morphAttributes.normal!==void 0&&(ee=2),A.morphAttributes.color!==void 0&&(ee=3);let G,Z,he,ue;if(k){let Sn=yi[k];G=Sn.vertexShader,Z=Sn.fragmentShader}else G=E.vertexShader,Z=E.fragmentShader,c.update(E),he=c.getVertexShaderID(E),ue=c.getFragmentShaderID(E);let ye=r.getRenderTarget(),W=H.isInstancedMesh===!0,Y=H.isBatchedMesh===!0,te=!!E.map,ie=!!E.matcap,z=!!U,xe=!!E.aoMap,fe=!!E.lightMap,pe=!!E.bumpMap,de=!!E.normalMap,De=!!E.displacementMap,Te=!!E.emissiveMap,P=!!E.metalnessMap,R=!!E.roughnessMap,X=E.anisotropy>0,oe=E.clearcoat>0,se=E.iridescence>0,ae=E.sheen>0,Se=E.transmission>0,me=X&&!!E.anisotropyMap,Ae=oe&&!!E.clearcoatMap,He=oe&&!!E.clearcoatNormalMap,Je=oe&&!!E.clearcoatRoughnessMap,le=se&&!!E.iridescenceMap,ft=se&&!!E.iridescenceThicknessMap,tt=ae&&!!E.sheenColorMap,Xe=ae&&!!E.sheenRoughnessMap,Be=!!E.specularMap,Le=!!E.specularColorMap,nt=!!E.specularIntensityMap,gt=Se&&!!E.transmissionMap,Gt=Se&&!!E.thicknessMap,rt=!!E.gradientMap,ge=!!E.alphaMap,B=E.alphaTest>0,_e=!!E.alphaHash,Me=!!E.extensions,je=!!A.attributes.uv1,Ge=!!A.attributes.uv2,At=!!A.attributes.uv3,Rt=ps;return E.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(Rt=r.toneMapping),{isWebGL2:h,shaderID:k,shaderType:E.type,shaderName:E.name,vertexShader:G,fragmentShader:Z,defines:E.defines,customVertexShaderID:he,customFragmentShaderID:ue,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:Y,instancing:W,instancingColor:W&&H.instanceColor!==null,supportsVertexTextures:u,outputColorSpace:ye===null?r.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:en,map:te,matcap:ie,envMap:z,envMapMode:z&&U.mapping,envMapCubeUVHeight:O,aoMap:xe,lightMap:fe,bumpMap:pe,normalMap:de,displacementMap:u&&De,emissiveMap:Te,normalMapObjectSpace:de&&E.normalMapType===ix,normalMapTangentSpace:de&&E.normalMapType===Gu,metalnessMap:P,roughnessMap:R,anisotropy:X,anisotropyMap:me,clearcoat:oe,clearcoatMap:Ae,clearcoatNormalMap:He,clearcoatRoughnessMap:Je,iridescence:se,iridescenceMap:le,iridescenceThicknessMap:ft,sheen:ae,sheenColorMap:tt,sheenRoughnessMap:Xe,specularMap:Be,specularColorMap:Le,specularIntensityMap:nt,transmission:Se,transmissionMap:gt,thicknessMap:Gt,gradientMap:rt,opaque:E.transparent===!1&&E.blending===Lr,alphaMap:ge,alphaTest:B,alphaHash:_e,combine:E.combine,mapUv:te&&v(E.map.channel),aoMapUv:xe&&v(E.aoMap.channel),lightMapUv:fe&&v(E.lightMap.channel),bumpMapUv:pe&&v(E.bumpMap.channel),normalMapUv:de&&v(E.normalMap.channel),displacementMapUv:De&&v(E.displacementMap.channel),emissiveMapUv:Te&&v(E.emissiveMap.channel),metalnessMapUv:P&&v(E.metalnessMap.channel),roughnessMapUv:R&&v(E.roughnessMap.channel),anisotropyMapUv:me&&v(E.anisotropyMap.channel),clearcoatMapUv:Ae&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:He&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Je&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:le&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:ft&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:tt&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:Xe&&v(E.sheenRoughnessMap.channel),specularMapUv:Be&&v(E.specularMap.channel),specularColorMapUv:Le&&v(E.specularColorMap.channel),specularIntensityMapUv:nt&&v(E.specularIntensityMap.channel),transmissionMapUv:gt&&v(E.transmissionMap.channel),thicknessMapUv:Gt&&v(E.thicknessMap.channel),alphaMapUv:ge&&v(E.alphaMap.channel),vertexTangents:!!A.attributes.tangent&&(de||X),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!A.attributes.color&&A.attributes.color.itemSize===4,vertexUv1s:je,vertexUv2s:Ge,vertexUv3s:At,pointsUvs:H.isPoints===!0&&!!A.attributes.uv&&(te||ge),fog:!!L,useFog:E.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:H.isSkinnedMesh===!0,morphTargets:A.morphAttributes.position!==void 0,morphNormals:A.morphAttributes.normal!==void 0,morphColors:A.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:ee,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:r.shadowMap.enabled&&F.length>0,shadowMapType:r.shadowMap.type,toneMapping:Rt,useLegacyLights:r._useLegacyLights,decodeVideoTexture:te&&E.map.isVideoTexture===!0&&pt.getTransfer(E.map.colorSpace)===It,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===dt,flipSided:E.side===fn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:Me&&E.extensions.derivatives===!0,extensionFragDepth:Me&&E.extensions.fragDepth===!0,extensionDrawBuffers:Me&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:Me&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Me&&E.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function p(E){let T=[];if(E.shaderID?T.push(E.shaderID):(T.push(E.customVertexShaderID),T.push(E.customFragmentShaderID)),E.defines!==void 0)for(let F in E.defines)T.push(F),T.push(E.defines[F]);return E.isRawShaderMaterial===!1&&(x(T,E),b(T,E),T.push(r.outputColorSpace)),T.push(E.customProgramCacheKey),T.join()}function x(E,T){E.push(T.precision),E.push(T.outputColorSpace),E.push(T.envMapMode),E.push(T.envMapCubeUVHeight),E.push(T.mapUv),E.push(T.alphaMapUv),E.push(T.lightMapUv),E.push(T.aoMapUv),E.push(T.bumpMapUv),E.push(T.normalMapUv),E.push(T.displacementMapUv),E.push(T.emissiveMapUv),E.push(T.metalnessMapUv),E.push(T.roughnessMapUv),E.push(T.anisotropyMapUv),E.push(T.clearcoatMapUv),E.push(T.clearcoatNormalMapUv),E.push(T.clearcoatRoughnessMapUv),E.push(T.iridescenceMapUv),E.push(T.iridescenceThicknessMapUv),E.push(T.sheenColorMapUv),E.push(T.sheenRoughnessMapUv),E.push(T.specularMapUv),E.push(T.specularColorMapUv),E.push(T.specularIntensityMapUv),E.push(T.transmissionMapUv),E.push(T.thicknessMapUv),E.push(T.combine),E.push(T.fogExp2),E.push(T.sizeAttenuation),E.push(T.morphTargetsCount),E.push(T.morphAttributeCount),E.push(T.numDirLights),E.push(T.numPointLights),E.push(T.numSpotLights),E.push(T.numSpotLightMaps),E.push(T.numHemiLights),E.push(T.numRectAreaLights),E.push(T.numDirLightShadows),E.push(T.numPointLightShadows),E.push(T.numSpotLightShadows),E.push(T.numSpotLightShadowsWithMaps),E.push(T.numLightProbes),E.push(T.shadowMapType),E.push(T.toneMapping),E.push(T.numClippingPlanes),E.push(T.numClipIntersection),E.push(T.depthPacking)}function b(E,T){o.disableAll(),T.isWebGL2&&o.enable(0),T.supportsVertexTextures&&o.enable(1),T.instancing&&o.enable(2),T.instancingColor&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),T.alphaHash&&o.enable(18),T.batching&&o.enable(19),E.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.skinning&&o.enable(4),T.morphTargets&&o.enable(5),T.morphNormals&&o.enable(6),T.morphColors&&o.enable(7),T.premultipliedAlpha&&o.enable(8),T.shadowMapEnabled&&o.enable(9),T.useLegacyLights&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),E.push(o.mask)}function y(E){let T=g[E.type],F;if(T){let N=yi[T];F=zx.clone(N.uniforms)}else F=E.uniforms;return F}function _(E,T){let F;for(let N=0,H=l.length;N<H;N++){let L=l[N];if(L.cacheKey===T){F=L,++F.usedTimes;break}}return F===void 0&&(F=new Z1(r,T,E,s),l.push(F)),F}function w(E){if(--E.usedTimes===0){let T=l.indexOf(E);l[T]=l[l.length-1],l.pop(),E.destroy()}}function S(E){c.remove(E)}function D(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:_,releaseProgram:w,releaseShaderCache:S,programs:l,dispose:D}}function $1(){let r=new WeakMap;function e(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function t(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function eM(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Qp(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function $p(){let r=[],e=0,t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(d,u,f,g,v,m){let p=r[e];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:v,group:m},r[e]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=v,p.group=m),e++,p}function o(d,u,f,g,v,m){let p=a(d,u,f,g,v,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function c(d,u,f,g,v,m){let p=a(d,u,f,g,v,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function l(d,u){t.length>1&&t.sort(d||eM),n.length>1&&n.sort(u||Qp),i.length>1&&i.sort(u||Qp)}function h(){for(let d=e,u=r.length;d<u;d++){let f=r[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:c,finish:h,sort:l}}function tM(){let r=new WeakMap;function e(n,i){let s=r.get(n),a;return s===void 0?(a=new $p,r.set(n,[a])):i>=s.length?(a=new $p,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function nM(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new M,color:new $};break;case"SpotLight":t={position:new M,direction:new M,color:new $,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new M,color:new $,distance:0,decay:0};break;case"HemisphereLight":t={direction:new M,skyColor:new $,groundColor:new $};break;case"RectAreaLight":t={color:new $,position:new M,halfWidth:new M,halfHeight:new M};break}return r[e.id]=t,t}}}function iM(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}var sM=0;function rM(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function aM(r,e){let t=new nM,n=iM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new M);let s=new M,a=new Ee,o=new Ee;function c(h,d){let u=0,f=0,g=0;for(let N=0;N<9;N++)i.probe[N].set(0,0,0);let v=0,m=0,p=0,x=0,b=0,y=0,_=0,w=0,S=0,D=0,E=0;h.sort(rM);let T=d===!0?Math.PI:1;for(let N=0,H=h.length;N<H;N++){let L=h[N],A=L.color,C=L.intensity,U=L.distance,O=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=A.r*C*T,f+=A.g*C*T,g+=A.b*C*T;else if(L.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(L.sh.coefficients[k],C);E++}else if(L.isDirectionalLight){let k=t.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity*T),L.castShadow){let V=L.shadow,j=n.get(L);j.shadowBias=V.bias,j.shadowNormalBias=V.normalBias,j.shadowRadius=V.radius,j.shadowMapSize=V.mapSize,i.directionalShadow[v]=j,i.directionalShadowMap[v]=O,i.directionalShadowMatrix[v]=L.shadow.matrix,y++}i.directional[v]=k,v++}else if(L.isSpotLight){let k=t.get(L);k.position.setFromMatrixPosition(L.matrixWorld),k.color.copy(A).multiplyScalar(C*T),k.distance=U,k.coneCos=Math.cos(L.angle),k.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),k.decay=L.decay,i.spot[p]=k;let V=L.shadow;if(L.map&&(i.spotLightMap[S]=L.map,S++,V.updateMatrices(L),L.castShadow&&D++),i.spotLightMatrix[p]=V.matrix,L.castShadow){let j=n.get(L);j.shadowBias=V.bias,j.shadowNormalBias=V.normalBias,j.shadowRadius=V.radius,j.shadowMapSize=V.mapSize,i.spotShadow[p]=j,i.spotShadowMap[p]=O,w++}p++}else if(L.isRectAreaLight){let k=t.get(L);k.color.copy(A).multiplyScalar(C),k.halfWidth.set(L.width*.5,0,0),k.halfHeight.set(0,L.height*.5,0),i.rectArea[x]=k,x++}else if(L.isPointLight){let k=t.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity*T),k.distance=L.distance,k.decay=L.decay,L.castShadow){let V=L.shadow,j=n.get(L);j.shadowBias=V.bias,j.shadowNormalBias=V.normalBias,j.shadowRadius=V.radius,j.shadowMapSize=V.mapSize,j.shadowCameraNear=V.camera.near,j.shadowCameraFar=V.camera.far,i.pointShadow[m]=j,i.pointShadowMap[m]=O,i.pointShadowMatrix[m]=L.shadow.matrix,_++}i.point[m]=k,m++}else if(L.isHemisphereLight){let k=t.get(L);k.skyColor.copy(L.color).multiplyScalar(C*T),k.groundColor.copy(L.groundColor).multiplyScalar(C*T),i.hemi[b]=k,b++}}x>0&&(e.isWebGL2?r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ve.LTC_FLOAT_1,i.rectAreaLTC2=ve.LTC_FLOAT_2):(i.rectAreaLTC1=ve.LTC_HALF_1,i.rectAreaLTC2=ve.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ve.LTC_FLOAT_1,i.rectAreaLTC2=ve.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ve.LTC_HALF_1,i.rectAreaLTC2=ve.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=g;let F=i.hash;(F.directionalLength!==v||F.pointLength!==m||F.spotLength!==p||F.rectAreaLength!==x||F.hemiLength!==b||F.numDirectionalShadows!==y||F.numPointShadows!==_||F.numSpotShadows!==w||F.numSpotMaps!==S||F.numLightProbes!==E)&&(i.directional.length=v,i.spot.length=p,i.rectArea.length=x,i.point.length=m,i.hemi.length=b,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=w+S-D,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=E,F.directionalLength=v,F.pointLength=m,F.spotLength=p,F.rectAreaLength=x,F.hemiLength=b,F.numDirectionalShadows=y,F.numPointShadows=_,F.numSpotShadows=w,F.numSpotMaps=S,F.numLightProbes=E,i.version=sM++)}function l(h,d){let u=0,f=0,g=0,v=0,m=0,p=d.matrixWorldInverse;for(let x=0,b=h.length;x<b;x++){let y=h[x];if(y.isDirectionalLight){let _=i.directional[u];_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(p),u++}else if(y.isSpotLight){let _=i.spot[g];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(p),_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(p),g++}else if(y.isRectAreaLight){let _=i.rectArea[v];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(p),o.identity(),a.copy(y.matrixWorld),a.premultiply(p),o.extractRotation(a),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),v++}else if(y.isPointLight){let _=i.point[f];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(p),f++}else if(y.isHemisphereLight){let _=i.hemi[m];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(p),m++}}}return{setup:c,setupView:l,state:i}}function em(r,e){let t=new aM(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function a(d){n.push(d)}function o(d){i.push(d)}function c(d){t.setup(n,d)}function l(d){t.setupView(n,d)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function oM(r,e){let t=new WeakMap;function n(s,a=0){let o=t.get(s),c;return o===void 0?(c=new em(r,e),t.set(s,[c])):a>=o.length?(c=new em(r,e),o.push(c)):c=o[a],c}function i(){t=new WeakMap}return{get:n,dispose:i}}var Oa=class extends mn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},nu=class extends mn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},cM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lM=`uniform sampler2D shadow_pass;
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
}`;function hM(r,e,t){let n=new Ha,i=new re,s=new re,a=new ct,o=new Oa({depthPacking:zu}),c=new nu,l={},h=t.maxTextureSize,d={[wi]:fn,[fn]:wi,[dt]:dt},u=new vt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:cM,fragmentShader:lM}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new Pe;g.setAttribute("position",new we(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Ue(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tm;let p=this.type;this.render=function(w,S,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;let E=r.getRenderTarget(),T=r.getActiveCubeFace(),F=r.getActiveMipmapLevel(),N=r.state;N.setBlending(fs),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let H=p!==Xi&&this.type===Xi,L=p===Xi&&this.type!==Xi;for(let A=0,C=w.length;A<C;A++){let U=w[A],O=U.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",U,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;i.copy(O.mapSize);let k=O.getFrameExtents();if(i.multiply(k),s.copy(O.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/k.x),i.x=s.x*k.x,O.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/k.y),i.y=s.y*k.y,O.mapSize.y=s.y)),O.map===null||H===!0||L===!0){let j=this.type!==Xi?{minFilter:jt,magFilter:jt}:{};O.map!==null&&O.map.dispose(),O.map=new hn(i.x,i.y,j),O.map.texture.name=U.name+".shadowMap",O.camera.updateProjectionMatrix()}r.setRenderTarget(O.map),r.clear();let V=O.getViewportCount();for(let j=0;j<V;j++){let ee=O.getViewport(j);a.set(s.x*ee.x,s.y*ee.y,s.x*ee.z,s.y*ee.w),N.viewport(a),O.updateMatrices(U,j),n=O.getFrustum(),y(S,D,O.camera,U,this.type)}O.isPointLightShadow!==!0&&this.type===Xi&&x(O,D),O.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(E,T,F)};function x(w,S){let D=e.update(v);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new hn(i.x,i.y)),u.uniforms.shadow_pass.value=w.map.texture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(S,null,D,u,v,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(S,null,D,f,v,null)}function b(w,S,D,E){let T=null,F=D.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(F!==void 0)T=F;else if(T=D.isPointLight===!0?c:o,r.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){let N=T.uuid,H=S.uuid,L=l[N];L===void 0&&(L={},l[N]=L);let A=L[H];A===void 0&&(A=T.clone(),L[H]=A,S.addEventListener("dispose",_)),T=A}if(T.visible=S.visible,T.wireframe=S.wireframe,E===Xi?T.side=S.shadowSide!==null?S.shadowSide:S.side:T.side=S.shadowSide!==null?S.shadowSide:d[S.side],T.alphaMap=S.alphaMap,T.alphaTest=S.alphaTest,T.map=S.map,T.clipShadows=S.clipShadows,T.clippingPlanes=S.clippingPlanes,T.clipIntersection=S.clipIntersection,T.displacementMap=S.displacementMap,T.displacementScale=S.displacementScale,T.displacementBias=S.displacementBias,T.wireframeLinewidth=S.wireframeLinewidth,T.linewidth=S.linewidth,D.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let N=r.properties.get(T);N.light=D}return T}function y(w,S,D,E,T){if(w.visible===!1)return;if(w.layers.test(S.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&T===Xi)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,w.matrixWorld);let H=e.update(w),L=w.material;if(Array.isArray(L)){let A=H.groups;for(let C=0,U=A.length;C<U;C++){let O=A[C],k=L[O.materialIndex];if(k&&k.visible){let V=b(w,k,E,T);w.onBeforeShadow(r,w,S,D,H,V,O),r.renderBufferDirect(D,null,H,V,w,O),w.onAfterShadow(r,w,S,D,H,V,O)}}}else if(L.visible){let A=b(w,L,E,T);w.onBeforeShadow(r,w,S,D,H,A,null),r.renderBufferDirect(D,null,H,A,w,null),w.onAfterShadow(r,w,S,D,H,A,null)}}let N=w.children;for(let H=0,L=N.length;H<L;H++)y(N[H],S,D,E,T)}function _(w){w.target.removeEventListener("dispose",_);for(let D in l){let E=l[D],T=w.target.uuid;T in E&&(E[T].dispose(),delete E[T])}}}function uM(r,e,t){let n=t.isWebGL2;function i(){let B=!1,_e=new ct,Me=null,je=new ct(0,0,0,0);return{setMask:function(Ge){Me!==Ge&&!B&&(r.colorMask(Ge,Ge,Ge,Ge),Me=Ge)},setLocked:function(Ge){B=Ge},setClear:function(Ge,At,Rt,on,Sn){Sn===!0&&(Ge*=on,At*=on,Rt*=on),_e.set(Ge,At,Rt,on),je.equals(_e)===!1&&(r.clearColor(Ge,At,Rt,on),je.copy(_e))},reset:function(){B=!1,Me=null,je.set(-1,0,0,0)}}}function s(){let B=!1,_e=null,Me=null,je=null;return{setTest:function(Ge){Ge?Y(r.DEPTH_TEST):te(r.DEPTH_TEST)},setMask:function(Ge){_e!==Ge&&!B&&(r.depthMask(Ge),_e=Ge)},setFunc:function(Ge){if(Me!==Ge){switch(Ge){case Lv:r.depthFunc(r.NEVER);break;case Iv:r.depthFunc(r.ALWAYS);break;case Dv:r.depthFunc(r.LESS);break;case ac:r.depthFunc(r.LEQUAL);break;case Fv:r.depthFunc(r.EQUAL);break;case Nv:r.depthFunc(r.GEQUAL);break;case Uv:r.depthFunc(r.GREATER);break;case Hv:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Me=Ge}},setLocked:function(Ge){B=Ge},setClear:function(Ge){je!==Ge&&(r.clearDepth(Ge),je=Ge)},reset:function(){B=!1,_e=null,Me=null,je=null}}}function a(){let B=!1,_e=null,Me=null,je=null,Ge=null,At=null,Rt=null,on=null,Sn=null;return{setTest:function(Ct){B||(Ct?Y(r.STENCIL_TEST):te(r.STENCIL_TEST))},setMask:function(Ct){_e!==Ct&&!B&&(r.stencilMask(Ct),_e=Ct)},setFunc:function(Ct,An,bi){(Me!==Ct||je!==An||Ge!==bi)&&(r.stencilFunc(Ct,An,bi),Me=Ct,je=An,Ge=bi)},setOp:function(Ct,An,bi){(At!==Ct||Rt!==An||on!==bi)&&(r.stencilOp(Ct,An,bi),At=Ct,Rt=An,on=bi)},setLocked:function(Ct){B=Ct},setClear:function(Ct){Sn!==Ct&&(r.clearStencil(Ct),Sn=Ct)},reset:function(){B=!1,_e=null,Me=null,je=null,Ge=null,At=null,Rt=null,on=null,Sn=null}}}let o=new i,c=new s,l=new a,h=new WeakMap,d=new WeakMap,u={},f={},g=new WeakMap,v=[],m=null,p=!1,x=null,b=null,y=null,_=null,w=null,S=null,D=null,E=new $(0,0,0),T=0,F=!1,N=null,H=null,L=null,A=null,C=null,U=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,k=0,V=r.getParameter(r.VERSION);V.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(V)[1]),O=k>=1):V.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),O=k>=2);let j=null,ee={},G=r.getParameter(r.SCISSOR_BOX),Z=r.getParameter(r.VIEWPORT),he=new ct().fromArray(G),ue=new ct().fromArray(Z);function ye(B,_e,Me,je){let Ge=new Uint8Array(4),At=r.createTexture();r.bindTexture(B,At),r.texParameteri(B,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(B,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Rt=0;Rt<Me;Rt++)n&&(B===r.TEXTURE_3D||B===r.TEXTURE_2D_ARRAY)?r.texImage3D(_e,0,r.RGBA,1,1,je,0,r.RGBA,r.UNSIGNED_BYTE,Ge):r.texImage2D(_e+Rt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ge);return At}let W={};W[r.TEXTURE_2D]=ye(r.TEXTURE_2D,r.TEXTURE_2D,1),W[r.TEXTURE_CUBE_MAP]=ye(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(W[r.TEXTURE_2D_ARRAY]=ye(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),W[r.TEXTURE_3D]=ye(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Y(r.DEPTH_TEST),c.setFunc(ac),Te(!1),P(Of),Y(r.CULL_FACE),de(fs);function Y(B){u[B]!==!0&&(r.enable(B),u[B]=!0)}function te(B){u[B]!==!1&&(r.disable(B),u[B]=!1)}function ie(B,_e){return f[B]!==_e?(r.bindFramebuffer(B,_e),f[B]=_e,n&&(B===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=_e),B===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=_e)),!0):!1}function z(B,_e){let Me=v,je=!1;if(B)if(Me=g.get(_e),Me===void 0&&(Me=[],g.set(_e,Me)),B.isWebGLMultipleRenderTargets){let Ge=B.texture;if(Me.length!==Ge.length||Me[0]!==r.COLOR_ATTACHMENT0){for(let At=0,Rt=Ge.length;At<Rt;At++)Me[At]=r.COLOR_ATTACHMENT0+At;Me.length=Ge.length,je=!0}}else Me[0]!==r.COLOR_ATTACHMENT0&&(Me[0]=r.COLOR_ATTACHMENT0,je=!0);else Me[0]!==r.BACK&&(Me[0]=r.BACK,je=!0);je&&(t.isWebGL2?r.drawBuffers(Me):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Me))}function xe(B){return m!==B?(r.useProgram(B),m=B,!0):!1}let fe={[ji]:r.FUNC_ADD,[xv]:r.FUNC_SUBTRACT,[bv]:r.FUNC_REVERSE_SUBTRACT};if(n)fe[zf]=r.MIN,fe[Gf]=r.MAX;else{let B=e.get("EXT_blend_minmax");B!==null&&(fe[zf]=B.MIN_EXT,fe[Gf]=B.MAX_EXT)}let pe={[Iu]:r.ZERO,[yv]:r.ONE,[Du]:r.SRC_COLOR,[kh]:r.SRC_ALPHA,[Sv]:r.SRC_ALPHA_SATURATE,[wv]:r.DST_COLOR,[Mv]:r.DST_ALPHA,[_v]:r.ONE_MINUS_SRC_COLOR,[Bh]:r.ONE_MINUS_SRC_ALPHA,[Tv]:r.ONE_MINUS_DST_COLOR,[Ev]:r.ONE_MINUS_DST_ALPHA,[Av]:r.CONSTANT_COLOR,[Rv]:r.ONE_MINUS_CONSTANT_COLOR,[Cv]:r.CONSTANT_ALPHA,[Pv]:r.ONE_MINUS_CONSTANT_ALPHA};function de(B,_e,Me,je,Ge,At,Rt,on,Sn,Ct){if(B===fs){p===!0&&(te(r.BLEND),p=!1);return}if(p===!1&&(Y(r.BLEND),p=!0),B!==Lu){if(B!==x||Ct!==F){if((b!==ji||w!==ji)&&(r.blendEquation(r.FUNC_ADD),b=ji,w=ji),Ct)switch(B){case Lr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case $t:r.blendFunc(r.ONE,r.ONE);break;case kf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Bf:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Lr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case $t:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case kf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Bf:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}y=null,_=null,S=null,D=null,E.set(0,0,0),T=0,x=B,F=Ct}return}Ge=Ge||_e,At=At||Me,Rt=Rt||je,(_e!==b||Ge!==w)&&(r.blendEquationSeparate(fe[_e],fe[Ge]),b=_e,w=Ge),(Me!==y||je!==_||At!==S||Rt!==D)&&(r.blendFuncSeparate(pe[Me],pe[je],pe[At],pe[Rt]),y=Me,_=je,S=At,D=Rt),(on.equals(E)===!1||Sn!==T)&&(r.blendColor(on.r,on.g,on.b,Sn),E.copy(on),T=Sn),x=B,F=!1}function De(B,_e){B.side===dt?te(r.CULL_FACE):Y(r.CULL_FACE);let Me=B.side===fn;_e&&(Me=!Me),Te(Me),B.blending===Lr&&B.transparent===!1?de(fs):de(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),c.setFunc(B.depthFunc),c.setTest(B.depthTest),c.setMask(B.depthWrite),o.setMask(B.colorWrite);let je=B.stencilWrite;l.setTest(je),je&&(l.setMask(B.stencilWriteMask),l.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),l.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),X(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?Y(r.SAMPLE_ALPHA_TO_COVERAGE):te(r.SAMPLE_ALPHA_TO_COVERAGE)}function Te(B){N!==B&&(B?r.frontFace(r.CW):r.frontFace(r.CCW),N=B)}function P(B){B!==gv?(Y(r.CULL_FACE),B!==H&&(B===Of?r.cullFace(r.BACK):B===vv?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):te(r.CULL_FACE),H=B}function R(B){B!==L&&(O&&r.lineWidth(B),L=B)}function X(B,_e,Me){B?(Y(r.POLYGON_OFFSET_FILL),(A!==_e||C!==Me)&&(r.polygonOffset(_e,Me),A=_e,C=Me)):te(r.POLYGON_OFFSET_FILL)}function oe(B){B?Y(r.SCISSOR_TEST):te(r.SCISSOR_TEST)}function se(B){B===void 0&&(B=r.TEXTURE0+U-1),j!==B&&(r.activeTexture(B),j=B)}function ae(B,_e,Me){Me===void 0&&(j===null?Me=r.TEXTURE0+U-1:Me=j);let je=ee[Me];je===void 0&&(je={type:void 0,texture:void 0},ee[Me]=je),(je.type!==B||je.texture!==_e)&&(j!==Me&&(r.activeTexture(Me),j=Me),r.bindTexture(B,_e||W[B]),je.type=B,je.texture=_e)}function Se(){let B=ee[j];B!==void 0&&B.type!==void 0&&(r.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function me(){try{r.compressedTexImage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ae(){try{r.compressedTexImage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function He(){try{r.texSubImage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Je(){try{r.texSubImage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function le(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ft(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function tt(){try{r.texStorage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Xe(){try{r.texStorage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Be(){try{r.texImage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Le(){try{r.texImage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function nt(B){he.equals(B)===!1&&(r.scissor(B.x,B.y,B.z,B.w),he.copy(B))}function gt(B){ue.equals(B)===!1&&(r.viewport(B.x,B.y,B.z,B.w),ue.copy(B))}function Gt(B,_e){let Me=d.get(_e);Me===void 0&&(Me=new WeakMap,d.set(_e,Me));let je=Me.get(B);je===void 0&&(je=r.getUniformBlockIndex(_e,B.name),Me.set(B,je))}function rt(B,_e){let je=d.get(_e).get(B);h.get(_e)!==je&&(r.uniformBlockBinding(_e,je,B.__bindingPointIndex),h.set(_e,je))}function ge(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},j=null,ee={},f={},g=new WeakMap,v=[],m=null,p=!1,x=null,b=null,y=null,_=null,w=null,S=null,D=null,E=new $(0,0,0),T=0,F=!1,N=null,H=null,L=null,A=null,C=null,he.set(0,0,r.canvas.width,r.canvas.height),ue.set(0,0,r.canvas.width,r.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:Y,disable:te,bindFramebuffer:ie,drawBuffers:z,useProgram:xe,setBlending:de,setMaterial:De,setFlipSided:Te,setCullFace:P,setLineWidth:R,setPolygonOffset:X,setScissorTest:oe,activeTexture:se,bindTexture:ae,unbindTexture:Se,compressedTexImage2D:me,compressedTexImage3D:Ae,texImage2D:Be,texImage3D:Le,updateUBOMapping:Gt,uniformBlockBinding:rt,texStorage2D:tt,texStorage3D:Xe,texSubImage2D:He,texSubImage3D:Je,compressedTexSubImage2D:le,compressedTexSubImage3D:ft,scissor:nt,viewport:gt,reset:ge}}function dM(r,e,t,n,i,s,a){let o=i.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,d,u=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,R){return f?new OffscreenCanvas(P,R):Na("canvas")}function v(P,R,X,oe){let se=1;if((P.width>oe||P.height>oe)&&(se=oe/Math.max(P.width,P.height)),se<1||R===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){let ae=R?fc:Math.floor,Se=ae(se*P.width),me=ae(se*P.height);d===void 0&&(d=g(Se,me));let Ae=X?g(Se,me):d;return Ae.width=Se,Ae.height=me,Ae.getContext("2d").drawImage(P,0,0,Se,me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+Se+"x"+me+")."),Ae}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function m(P){return qh(P.width)&&qh(P.height)}function p(P){return o?!1:P.wrapS!==Gn||P.wrapT!==Gn||P.minFilter!==jt&&P.minFilter!==Zt}function x(P,R){return P.generateMipmaps&&R&&P.minFilter!==jt&&P.minFilter!==Zt}function b(P){r.generateMipmap(P)}function y(P,R,X,oe,se=!1){if(o===!1)return R;if(P!==null){if(r[P]!==void 0)return r[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ae=R;if(R===r.RED&&(X===r.FLOAT&&(ae=r.R32F),X===r.HALF_FLOAT&&(ae=r.R16F),X===r.UNSIGNED_BYTE&&(ae=r.R8)),R===r.RED_INTEGER&&(X===r.UNSIGNED_BYTE&&(ae=r.R8UI),X===r.UNSIGNED_SHORT&&(ae=r.R16UI),X===r.UNSIGNED_INT&&(ae=r.R32UI),X===r.BYTE&&(ae=r.R8I),X===r.SHORT&&(ae=r.R16I),X===r.INT&&(ae=r.R32I)),R===r.RG&&(X===r.FLOAT&&(ae=r.RG32F),X===r.HALF_FLOAT&&(ae=r.RG16F),X===r.UNSIGNED_BYTE&&(ae=r.RG8)),R===r.RGBA){let Se=se?lc:pt.getTransfer(oe);X===r.FLOAT&&(ae=r.RGBA32F),X===r.HALF_FLOAT&&(ae=r.RGBA16F),X===r.UNSIGNED_BYTE&&(ae=Se===It?r.SRGB8_ALPHA8:r.RGBA8),X===r.UNSIGNED_SHORT_4_4_4_4&&(ae=r.RGBA4),X===r.UNSIGNED_SHORT_5_5_5_1&&(ae=r.RGB5_A1)}return(ae===r.R16F||ae===r.R32F||ae===r.RG16F||ae===r.RG32F||ae===r.RGBA16F||ae===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function _(P,R,X){return x(P,X)===!0||P.isFramebufferTexture&&P.minFilter!==jt&&P.minFilter!==Zt?Math.log2(Math.max(R.width,R.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?R.mipmaps.length:1}function w(P){return P===jt||P===oc||P===Aa?r.NEAREST:r.LINEAR}function S(P){let R=P.target;R.removeEventListener("dispose",S),E(R),R.isVideoTexture&&h.delete(R)}function D(P){let R=P.target;R.removeEventListener("dispose",D),F(R)}function E(P){let R=n.get(P);if(R.__webglInit===void 0)return;let X=P.source,oe=u.get(X);if(oe){let se=oe[R.__cacheKey];se.usedTimes--,se.usedTimes===0&&T(P),Object.keys(oe).length===0&&u.delete(X)}n.remove(P)}function T(P){let R=n.get(P);r.deleteTexture(R.__webglTexture);let X=P.source,oe=u.get(X);delete oe[R.__cacheKey],a.memory.textures--}function F(P){let R=P.texture,X=n.get(P),oe=n.get(R);if(oe.__webglTexture!==void 0&&(r.deleteTexture(oe.__webglTexture),a.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(X.__webglFramebuffer[se]))for(let ae=0;ae<X.__webglFramebuffer[se].length;ae++)r.deleteFramebuffer(X.__webglFramebuffer[se][ae]);else r.deleteFramebuffer(X.__webglFramebuffer[se]);X.__webglDepthbuffer&&r.deleteRenderbuffer(X.__webglDepthbuffer[se])}else{if(Array.isArray(X.__webglFramebuffer))for(let se=0;se<X.__webglFramebuffer.length;se++)r.deleteFramebuffer(X.__webglFramebuffer[se]);else r.deleteFramebuffer(X.__webglFramebuffer);if(X.__webglDepthbuffer&&r.deleteRenderbuffer(X.__webglDepthbuffer),X.__webglMultisampledFramebuffer&&r.deleteFramebuffer(X.__webglMultisampledFramebuffer),X.__webglColorRenderbuffer)for(let se=0;se<X.__webglColorRenderbuffer.length;se++)X.__webglColorRenderbuffer[se]&&r.deleteRenderbuffer(X.__webglColorRenderbuffer[se]);X.__webglDepthRenderbuffer&&r.deleteRenderbuffer(X.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let se=0,ae=R.length;se<ae;se++){let Se=n.get(R[se]);Se.__webglTexture&&(r.deleteTexture(Se.__webglTexture),a.memory.textures--),n.remove(R[se])}n.remove(R),n.remove(P)}let N=0;function H(){N=0}function L(){let P=N;return P>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),N+=1,P}function A(P){let R=[];return R.push(P.wrapS),R.push(P.wrapT),R.push(P.wrapR||0),R.push(P.magFilter),R.push(P.minFilter),R.push(P.anisotropy),R.push(P.internalFormat),R.push(P.format),R.push(P.type),R.push(P.generateMipmaps),R.push(P.premultiplyAlpha),R.push(P.flipY),R.push(P.unpackAlignment),R.push(P.colorSpace),R.join()}function C(P,R){let X=n.get(P);if(P.isVideoTexture&&De(P),P.isRenderTargetTexture===!1&&P.version>0&&X.__version!==P.version){let oe=P.image;if(oe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{he(X,P,R);return}}t.bindTexture(r.TEXTURE_2D,X.__webglTexture,r.TEXTURE0+R)}function U(P,R){let X=n.get(P);if(P.version>0&&X.__version!==P.version){he(X,P,R);return}t.bindTexture(r.TEXTURE_2D_ARRAY,X.__webglTexture,r.TEXTURE0+R)}function O(P,R){let X=n.get(P);if(P.version>0&&X.__version!==P.version){he(X,P,R);return}t.bindTexture(r.TEXTURE_3D,X.__webglTexture,r.TEXTURE0+R)}function k(P,R){let X=n.get(P);if(P.version>0&&X.__version!==P.version){ue(X,P,R);return}t.bindTexture(r.TEXTURE_CUBE_MAP,X.__webglTexture,r.TEXTURE0+R)}let V={[Dn]:r.REPEAT,[Gn]:r.CLAMP_TO_EDGE,[Fa]:r.MIRRORED_REPEAT},j={[jt]:r.NEAREST,[oc]:r.NEAREST_MIPMAP_NEAREST,[Aa]:r.NEAREST_MIPMAP_LINEAR,[Zt]:r.LINEAR,[Uu]:r.LINEAR_MIPMAP_NEAREST,[Ti]:r.LINEAR_MIPMAP_LINEAR},ee={[sx]:r.NEVER,[hx]:r.ALWAYS,[rx]:r.LESS,[Um]:r.LEQUAL,[ax]:r.EQUAL,[lx]:r.GEQUAL,[ox]:r.GREATER,[cx]:r.NOTEQUAL};function G(P,R,X){if(X?(r.texParameteri(P,r.TEXTURE_WRAP_S,V[R.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,V[R.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,V[R.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,j[R.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,j[R.minFilter])):(r.texParameteri(P,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(P,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(R.wrapS!==Gn||R.wrapT!==Gn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(P,r.TEXTURE_MAG_FILTER,w(R.magFilter)),r.texParameteri(P,r.TEXTURE_MIN_FILTER,w(R.minFilter)),R.minFilter!==jt&&R.minFilter!==Zt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),R.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,ee[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let oe=e.get("EXT_texture_filter_anisotropic");if(R.magFilter===jt||R.minFilter!==Aa&&R.minFilter!==Ti||R.type===Yi&&e.has("OES_texture_float_linear")===!1||o===!1&&R.type===Fn&&e.has("OES_texture_half_float_linear")===!1)return;(R.anisotropy>1||n.get(R).__currentAnisotropy)&&(r.texParameterf(P,oe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,i.getMaxAnisotropy())),n.get(R).__currentAnisotropy=R.anisotropy)}}function Z(P,R){let X=!1;P.__webglInit===void 0&&(P.__webglInit=!0,R.addEventListener("dispose",S));let oe=R.source,se=u.get(oe);se===void 0&&(se={},u.set(oe,se));let ae=A(R);if(ae!==P.__cacheKey){se[ae]===void 0&&(se[ae]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,X=!0),se[ae].usedTimes++;let Se=se[P.__cacheKey];Se!==void 0&&(se[P.__cacheKey].usedTimes--,Se.usedTimes===0&&T(R)),P.__cacheKey=ae,P.__webglTexture=se[ae].texture}return X}function he(P,R,X){let oe=r.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(oe=r.TEXTURE_2D_ARRAY),R.isData3DTexture&&(oe=r.TEXTURE_3D);let se=Z(P,R),ae=R.source;t.bindTexture(oe,P.__webglTexture,r.TEXTURE0+X);let Se=n.get(ae);if(ae.version!==Se.__version||se===!0){t.activeTexture(r.TEXTURE0+X);let me=pt.getPrimaries(pt.workingColorSpace),Ae=R.colorSpace===bn?null:pt.getPrimaries(R.colorSpace),He=R.colorSpace===bn||me===Ae?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,R.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,R.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);let Je=p(R)&&m(R.image)===!1,le=v(R.image,Je,!1,i.maxTextureSize);le=Te(R,le);let ft=m(le)||o,tt=s.convert(R.format,R.colorSpace),Xe=s.convert(R.type),Be=y(R.internalFormat,tt,Xe,R.colorSpace,R.isVideoTexture);G(oe,R,ft);let Le,nt=R.mipmaps,gt=o&&R.isVideoTexture!==!0&&Be!==Dm,Gt=Se.__version===void 0||se===!0,rt=_(R,le,ft);if(R.isDepthTexture)Be=r.DEPTH_COMPONENT,o?R.type===Yi?Be=r.DEPTH_COMPONENT32F:R.type===Mi?Be=r.DEPTH_COMPONENT24:R.type===Vs?Be=r.DEPTH24_STENCIL8:Be=r.DEPTH_COMPONENT16:R.type===Yi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),R.format===Ws&&Be===r.DEPTH_COMPONENT&&R.type!==Hu&&R.type!==Mi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),R.type=Mi,Xe=s.convert(R.type)),R.format===Ur&&Be===r.DEPTH_COMPONENT&&(Be=r.DEPTH_STENCIL,R.type!==Vs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),R.type=Vs,Xe=s.convert(R.type))),Gt&&(gt?t.texStorage2D(r.TEXTURE_2D,1,Be,le.width,le.height):t.texImage2D(r.TEXTURE_2D,0,Be,le.width,le.height,0,tt,Xe,null));else if(R.isDataTexture)if(nt.length>0&&ft){gt&&Gt&&t.texStorage2D(r.TEXTURE_2D,rt,Be,nt[0].width,nt[0].height);for(let ge=0,B=nt.length;ge<B;ge++)Le=nt[ge],gt?t.texSubImage2D(r.TEXTURE_2D,ge,0,0,Le.width,Le.height,tt,Xe,Le.data):t.texImage2D(r.TEXTURE_2D,ge,Be,Le.width,Le.height,0,tt,Xe,Le.data);R.generateMipmaps=!1}else gt?(Gt&&t.texStorage2D(r.TEXTURE_2D,rt,Be,le.width,le.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,le.width,le.height,tt,Xe,le.data)):t.texImage2D(r.TEXTURE_2D,0,Be,le.width,le.height,0,tt,Xe,le.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){gt&&Gt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,rt,Be,nt[0].width,nt[0].height,le.depth);for(let ge=0,B=nt.length;ge<B;ge++)Le=nt[ge],R.format!==Jn?tt!==null?gt?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ge,0,0,0,Le.width,Le.height,le.depth,tt,Le.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ge,Be,Le.width,Le.height,le.depth,0,Le.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):gt?t.texSubImage3D(r.TEXTURE_2D_ARRAY,ge,0,0,0,Le.width,Le.height,le.depth,tt,Xe,Le.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ge,Be,Le.width,Le.height,le.depth,0,tt,Xe,Le.data)}else{gt&&Gt&&t.texStorage2D(r.TEXTURE_2D,rt,Be,nt[0].width,nt[0].height);for(let ge=0,B=nt.length;ge<B;ge++)Le=nt[ge],R.format!==Jn?tt!==null?gt?t.compressedTexSubImage2D(r.TEXTURE_2D,ge,0,0,Le.width,Le.height,tt,Le.data):t.compressedTexImage2D(r.TEXTURE_2D,ge,Be,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):gt?t.texSubImage2D(r.TEXTURE_2D,ge,0,0,Le.width,Le.height,tt,Xe,Le.data):t.texImage2D(r.TEXTURE_2D,ge,Be,Le.width,Le.height,0,tt,Xe,Le.data)}else if(R.isDataArrayTexture)gt?(Gt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,rt,Be,le.width,le.height,le.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,tt,Xe,le.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,Be,le.width,le.height,le.depth,0,tt,Xe,le.data);else if(R.isData3DTexture)gt?(Gt&&t.texStorage3D(r.TEXTURE_3D,rt,Be,le.width,le.height,le.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,tt,Xe,le.data)):t.texImage3D(r.TEXTURE_3D,0,Be,le.width,le.height,le.depth,0,tt,Xe,le.data);else if(R.isFramebufferTexture){if(Gt)if(gt)t.texStorage2D(r.TEXTURE_2D,rt,Be,le.width,le.height);else{let ge=le.width,B=le.height;for(let _e=0;_e<rt;_e++)t.texImage2D(r.TEXTURE_2D,_e,Be,ge,B,0,tt,Xe,null),ge>>=1,B>>=1}}else if(nt.length>0&&ft){gt&&Gt&&t.texStorage2D(r.TEXTURE_2D,rt,Be,nt[0].width,nt[0].height);for(let ge=0,B=nt.length;ge<B;ge++)Le=nt[ge],gt?t.texSubImage2D(r.TEXTURE_2D,ge,0,0,tt,Xe,Le):t.texImage2D(r.TEXTURE_2D,ge,Be,tt,Xe,Le);R.generateMipmaps=!1}else gt?(Gt&&t.texStorage2D(r.TEXTURE_2D,rt,Be,le.width,le.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,tt,Xe,le)):t.texImage2D(r.TEXTURE_2D,0,Be,tt,Xe,le);x(R,ft)&&b(oe),Se.__version=ae.version,R.onUpdate&&R.onUpdate(R)}P.__version=R.version}function ue(P,R,X){if(R.image.length!==6)return;let oe=Z(P,R),se=R.source;t.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+X);let ae=n.get(se);if(se.version!==ae.__version||oe===!0){t.activeTexture(r.TEXTURE0+X);let Se=pt.getPrimaries(pt.workingColorSpace),me=R.colorSpace===bn?null:pt.getPrimaries(R.colorSpace),Ae=R.colorSpace===bn||Se===me?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,R.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,R.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let He=R.isCompressedTexture||R.image[0].isCompressedTexture,Je=R.image[0]&&R.image[0].isDataTexture,le=[];for(let ge=0;ge<6;ge++)!He&&!Je?le[ge]=v(R.image[ge],!1,!0,i.maxCubemapSize):le[ge]=Je?R.image[ge].image:R.image[ge],le[ge]=Te(R,le[ge]);let ft=le[0],tt=m(ft)||o,Xe=s.convert(R.format,R.colorSpace),Be=s.convert(R.type),Le=y(R.internalFormat,Xe,Be,R.colorSpace),nt=o&&R.isVideoTexture!==!0,gt=ae.__version===void 0||oe===!0,Gt=_(R,ft,tt);G(r.TEXTURE_CUBE_MAP,R,tt);let rt;if(He){nt&&gt&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Gt,Le,ft.width,ft.height);for(let ge=0;ge<6;ge++){rt=le[ge].mipmaps;for(let B=0;B<rt.length;B++){let _e=rt[B];R.format!==Jn?Xe!==null?nt?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,B,0,0,_e.width,_e.height,Xe,_e.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,B,Le,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):nt?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,B,0,0,_e.width,_e.height,Xe,Be,_e.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,B,Le,_e.width,_e.height,0,Xe,Be,_e.data)}}}else{rt=R.mipmaps,nt&&gt&&(rt.length>0&&Gt++,t.texStorage2D(r.TEXTURE_CUBE_MAP,Gt,Le,le[0].width,le[0].height));for(let ge=0;ge<6;ge++)if(Je){nt?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,le[ge].width,le[ge].height,Xe,Be,le[ge].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,Le,le[ge].width,le[ge].height,0,Xe,Be,le[ge].data);for(let B=0;B<rt.length;B++){let Me=rt[B].image[ge].image;nt?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,B+1,0,0,Me.width,Me.height,Xe,Be,Me.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,B+1,Le,Me.width,Me.height,0,Xe,Be,Me.data)}}else{nt?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Xe,Be,le[ge]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,Le,Xe,Be,le[ge]);for(let B=0;B<rt.length;B++){let _e=rt[B];nt?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,B+1,0,0,Xe,Be,_e.image[ge]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,B+1,Le,Xe,Be,_e.image[ge])}}}x(R,tt)&&b(r.TEXTURE_CUBE_MAP),ae.__version=se.version,R.onUpdate&&R.onUpdate(R)}P.__version=R.version}function ye(P,R,X,oe,se,ae){let Se=s.convert(X.format,X.colorSpace),me=s.convert(X.type),Ae=y(X.internalFormat,Se,me,X.colorSpace);if(!n.get(R).__hasExternalTextures){let Je=Math.max(1,R.width>>ae),le=Math.max(1,R.height>>ae);se===r.TEXTURE_3D||se===r.TEXTURE_2D_ARRAY?t.texImage3D(se,ae,Ae,Je,le,R.depth,0,Se,me,null):t.texImage2D(se,ae,Ae,Je,le,0,Se,me,null)}t.bindFramebuffer(r.FRAMEBUFFER,P),de(R)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,oe,se,n.get(X).__webglTexture,0,pe(R)):(se===r.TEXTURE_2D||se>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,oe,se,n.get(X).__webglTexture,ae),t.bindFramebuffer(r.FRAMEBUFFER,null)}function W(P,R,X){if(r.bindRenderbuffer(r.RENDERBUFFER,P),R.depthBuffer&&!R.stencilBuffer){let oe=o===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(X||de(R)){let se=R.depthTexture;se&&se.isDepthTexture&&(se.type===Yi?oe=r.DEPTH_COMPONENT32F:se.type===Mi&&(oe=r.DEPTH_COMPONENT24));let ae=pe(R);de(R)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ae,oe,R.width,R.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,ae,oe,R.width,R.height)}else r.renderbufferStorage(r.RENDERBUFFER,oe,R.width,R.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,P)}else if(R.depthBuffer&&R.stencilBuffer){let oe=pe(R);X&&de(R)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,oe,r.DEPTH24_STENCIL8,R.width,R.height):de(R)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,oe,r.DEPTH24_STENCIL8,R.width,R.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,P)}else{let oe=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let se=0;se<oe.length;se++){let ae=oe[se],Se=s.convert(ae.format,ae.colorSpace),me=s.convert(ae.type),Ae=y(ae.internalFormat,Se,me,ae.colorSpace),He=pe(R);X&&de(R)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,He,Ae,R.width,R.height):de(R)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,He,Ae,R.width,R.height):r.renderbufferStorage(r.RENDERBUFFER,Ae,R.width,R.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Y(P,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,P),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(R.depthTexture).__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),C(R.depthTexture,0);let oe=n.get(R.depthTexture).__webglTexture,se=pe(R);if(R.depthTexture.format===Ws)de(R)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,oe,0,se):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,oe,0);else if(R.depthTexture.format===Ur)de(R)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,oe,0,se):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function te(P){let R=n.get(P),X=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!R.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");Y(R.__webglFramebuffer,P)}else if(X){R.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)t.bindFramebuffer(r.FRAMEBUFFER,R.__webglFramebuffer[oe]),R.__webglDepthbuffer[oe]=r.createRenderbuffer(),W(R.__webglDepthbuffer[oe],P,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer=r.createRenderbuffer(),W(R.__webglDepthbuffer,P,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function ie(P,R,X){let oe=n.get(P);R!==void 0&&ye(oe.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),X!==void 0&&te(P)}function z(P){let R=P.texture,X=n.get(P),oe=n.get(R);P.addEventListener("dispose",D),P.isWebGLMultipleRenderTargets!==!0&&(oe.__webglTexture===void 0&&(oe.__webglTexture=r.createTexture()),oe.__version=R.version,a.memory.textures++);let se=P.isWebGLCubeRenderTarget===!0,ae=P.isWebGLMultipleRenderTargets===!0,Se=m(P)||o;if(se){X.__webglFramebuffer=[];for(let me=0;me<6;me++)if(o&&R.mipmaps&&R.mipmaps.length>0){X.__webglFramebuffer[me]=[];for(let Ae=0;Ae<R.mipmaps.length;Ae++)X.__webglFramebuffer[me][Ae]=r.createFramebuffer()}else X.__webglFramebuffer[me]=r.createFramebuffer()}else{if(o&&R.mipmaps&&R.mipmaps.length>0){X.__webglFramebuffer=[];for(let me=0;me<R.mipmaps.length;me++)X.__webglFramebuffer[me]=r.createFramebuffer()}else X.__webglFramebuffer=r.createFramebuffer();if(ae)if(i.drawBuffers){let me=P.texture;for(let Ae=0,He=me.length;Ae<He;Ae++){let Je=n.get(me[Ae]);Je.__webglTexture===void 0&&(Je.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&P.samples>0&&de(P)===!1){let me=ae?R:[R];X.__webglMultisampledFramebuffer=r.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let Ae=0;Ae<me.length;Ae++){let He=me[Ae];X.__webglColorRenderbuffer[Ae]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,X.__webglColorRenderbuffer[Ae]);let Je=s.convert(He.format,He.colorSpace),le=s.convert(He.type),ft=y(He.internalFormat,Je,le,He.colorSpace,P.isXRRenderTarget===!0),tt=pe(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,tt,ft,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ae,r.RENDERBUFFER,X.__webglColorRenderbuffer[Ae])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(X.__webglDepthRenderbuffer=r.createRenderbuffer(),W(X.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(se){t.bindTexture(r.TEXTURE_CUBE_MAP,oe.__webglTexture),G(r.TEXTURE_CUBE_MAP,R,Se);for(let me=0;me<6;me++)if(o&&R.mipmaps&&R.mipmaps.length>0)for(let Ae=0;Ae<R.mipmaps.length;Ae++)ye(X.__webglFramebuffer[me][Ae],P,R,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ae);else ye(X.__webglFramebuffer[me],P,R,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);x(R,Se)&&b(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ae){let me=P.texture;for(let Ae=0,He=me.length;Ae<He;Ae++){let Je=me[Ae],le=n.get(Je);t.bindTexture(r.TEXTURE_2D,le.__webglTexture),G(r.TEXTURE_2D,Je,Se),ye(X.__webglFramebuffer,P,Je,r.COLOR_ATTACHMENT0+Ae,r.TEXTURE_2D,0),x(Je,Se)&&b(r.TEXTURE_2D)}t.unbindTexture()}else{let me=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(o?me=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(me,oe.__webglTexture),G(me,R,Se),o&&R.mipmaps&&R.mipmaps.length>0)for(let Ae=0;Ae<R.mipmaps.length;Ae++)ye(X.__webglFramebuffer[Ae],P,R,r.COLOR_ATTACHMENT0,me,Ae);else ye(X.__webglFramebuffer,P,R,r.COLOR_ATTACHMENT0,me,0);x(R,Se)&&b(me),t.unbindTexture()}P.depthBuffer&&te(P)}function xe(P){let R=m(P)||o,X=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let oe=0,se=X.length;oe<se;oe++){let ae=X[oe];if(x(ae,R)){let Se=P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,me=n.get(ae).__webglTexture;t.bindTexture(Se,me),b(Se),t.unbindTexture()}}}function fe(P){if(o&&P.samples>0&&de(P)===!1){let R=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],X=P.width,oe=P.height,se=r.COLOR_BUFFER_BIT,ae=[],Se=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,me=n.get(P),Ae=P.isWebGLMultipleRenderTargets===!0;if(Ae)for(let He=0;He<R.length;He++)t.bindFramebuffer(r.FRAMEBUFFER,me.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+He,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,me.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+He,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let He=0;He<R.length;He++){ae.push(r.COLOR_ATTACHMENT0+He),P.depthBuffer&&ae.push(Se);let Je=me.__ignoreDepthValues!==void 0?me.__ignoreDepthValues:!1;if(Je===!1&&(P.depthBuffer&&(se|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&(se|=r.STENCIL_BUFFER_BIT)),Ae&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,me.__webglColorRenderbuffer[He]),Je===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[Se]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[Se])),Ae){let le=n.get(R[He]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,le,0)}r.blitFramebuffer(0,0,X,oe,0,0,X,oe,se,r.NEAREST),l&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ae)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ae)for(let He=0;He<R.length;He++){t.bindFramebuffer(r.FRAMEBUFFER,me.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+He,r.RENDERBUFFER,me.__webglColorRenderbuffer[He]);let Je=n.get(R[He]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,me.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+He,r.TEXTURE_2D,Je,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}}function pe(P){return Math.min(i.maxSamples,P.samples)}function de(P){let R=n.get(P);return o&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function De(P){let R=a.render.frame;h.get(P)!==R&&(h.set(P,R),P.update())}function Te(P,R){let X=P.colorSpace,oe=P.format,se=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===Wh||X!==en&&X!==bn&&(pt.getTransfer(X)===It?o===!1?e.has("EXT_sRGB")===!0&&oe===Jn?(P.format=Wh,P.minFilter=Zt,P.generateMipmaps=!1):R=pc.sRGBToLinear(R):(oe!==Jn||se!==Ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),R}this.allocateTextureUnit=L,this.resetTextureUnits=H,this.setTexture2D=C,this.setTexture2DArray=U,this.setTexture3D=O,this.setTextureCube=k,this.rebindTextures=ie,this.setupRenderTarget=z,this.updateRenderTargetMipmap=xe,this.updateMultisampleRenderTarget=fe,this.setupDepthRenderbuffer=te,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=de}function fM(r,e,t){let n=t.isWebGL2;function i(s,a=bn){let o,c=pt.getTransfer(a);if(s===Ei)return r.UNSIGNED_BYTE;if(s===Rm)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Cm)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Xv)return r.BYTE;if(s===jv)return r.SHORT;if(s===Hu)return r.UNSIGNED_SHORT;if(s===Am)return r.INT;if(s===Mi)return r.UNSIGNED_INT;if(s===Yi)return r.FLOAT;if(s===Fn)return n?r.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Yv)return r.ALPHA;if(s===Jn)return r.RGBA;if(s===Kv)return r.LUMINANCE;if(s===Zv)return r.LUMINANCE_ALPHA;if(s===Ws)return r.DEPTH_COMPONENT;if(s===Ur)return r.DEPTH_STENCIL;if(s===Wh)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Jv)return r.RED;if(s===Pm)return r.RED_INTEGER;if(s===Qv)return r.RG;if(s===Lm)return r.RG_INTEGER;if(s===Im)return r.RGBA_INTEGER;if(s===nh||s===ih||s===sh||s===rh)if(c===It)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===nh)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ih)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===sh)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===rh)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===nh)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ih)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===sh)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===rh)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Wf||s===qf||s===Xf||s===jf)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Wf)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===qf)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Xf)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===jf)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Dm)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Yf||s===Kf)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Yf)return c===It?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Kf)return c===It?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Zf||s===Jf||s===Qf||s===$f||s===ep||s===tp||s===np||s===ip||s===sp||s===rp||s===ap||s===op||s===cp||s===lp)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Zf)return c===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Jf)return c===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Qf)return c===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===$f)return c===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ep)return c===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===tp)return c===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===np)return c===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ip)return c===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===sp)return c===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===rp)return c===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ap)return c===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===op)return c===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===cp)return c===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===lp)return c===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ah||s===hp||s===up)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===ah)return c===It?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===hp)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===up)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===$v||s===dp||s===fp||s===pp)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===ah)return o.COMPRESSED_RED_RGTC1_EXT;if(s===dp)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===fp)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===pp)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Vs?n?r.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}var iu=class extends Dt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Fe=class extends Et{constructor(){super(),this.isGroup=!0,this.type="Group"}},pM={type:"move"},La=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new M,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new M),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new M,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new M),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,n),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&u>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(pM)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Fe;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},su=class extends Zi{constructor(e,t){super();let n=this,i=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,g=null,v=t.getContextAttributes(),m=null,p=null,x=[],b=[],y=new re,_=null,w=new Dt;w.layers.enable(1),w.viewport=new ct;let S=new Dt;S.layers.enable(2),S.viewport=new ct;let D=[w,S],E=new iu;E.layers.enable(1),E.layers.enable(2);let T=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let Z=x[G];return Z===void 0&&(Z=new La,x[G]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(G){let Z=x[G];return Z===void 0&&(Z=new La,x[G]=Z),Z.getGripSpace()},this.getHand=function(G){let Z=x[G];return Z===void 0&&(Z=new La,x[G]=Z),Z.getHandSpace()};function N(G){let Z=b.indexOf(G.inputSource);if(Z===-1)return;let he=x[Z];he!==void 0&&(he.update(G.inputSource,G.frame,l||a),he.dispatchEvent({type:G.type,data:G.inputSource}))}function H(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",L);for(let G=0;G<x.length;G++){let Z=b[G];Z!==null&&(b[G]=null,x[G].disconnect(Z))}T=null,F=null,e.setRenderTarget(m),f=null,u=null,d=null,i=null,p=null,ee.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(y.width,y.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(G){l=G},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(G){if(i=G,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",H),i.addEventListener("inputsourceschange",L),v.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(y),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let Z={antialias:i.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,Z),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new hn(f.framebufferWidth,f.framebufferHeight,{format:Jn,type:Ei,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let Z=null,he=null,ue=null;v.depth&&(ue=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=v.stencil?Ur:Ws,he=v.stencil?Vs:Mi);let ye={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:s};d=new XRWebGLBinding(i,t),u=d.createProjectionLayer(ye),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),p=new hn(u.textureWidth,u.textureHeight,{format:Jn,type:Ei,depthTexture:new zr(u.textureWidth,u.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});let W=e.properties.get(p);W.__ignoreDepthValues=u.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),ee.setContext(i),ee.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function L(G){for(let Z=0;Z<G.removed.length;Z++){let he=G.removed[Z],ue=b.indexOf(he);ue>=0&&(b[ue]=null,x[ue].disconnect(he))}for(let Z=0;Z<G.added.length;Z++){let he=G.added[Z],ue=b.indexOf(he);if(ue===-1){for(let W=0;W<x.length;W++)if(W>=b.length){b.push(he),ue=W;break}else if(b[W]===null){b[W]=he,ue=W;break}if(ue===-1)break}let ye=x[ue];ye&&ye.connect(he)}}let A=new M,C=new M;function U(G,Z,he){A.setFromMatrixPosition(Z.matrixWorld),C.setFromMatrixPosition(he.matrixWorld);let ue=A.distanceTo(C),ye=Z.projectionMatrix.elements,W=he.projectionMatrix.elements,Y=ye[14]/(ye[10]-1),te=ye[14]/(ye[10]+1),ie=(ye[9]+1)/ye[5],z=(ye[9]-1)/ye[5],xe=(ye[8]-1)/ye[0],fe=(W[8]+1)/W[0],pe=Y*xe,de=Y*fe,De=ue/(-xe+fe),Te=De*-xe;Z.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Te),G.translateZ(De),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();let P=Y+De,R=te+De,X=pe-Te,oe=de+(ue-Te),se=ie*te/R*P,ae=z*te/R*P;G.projectionMatrix.makePerspective(X,oe,se,ae,P,R),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function O(G,Z){Z===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(Z.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(i===null)return;E.near=S.near=w.near=G.near,E.far=S.far=w.far=G.far,(T!==E.near||F!==E.far)&&(i.updateRenderState({depthNear:E.near,depthFar:E.far}),T=E.near,F=E.far);let Z=G.parent,he=E.cameras;O(E,Z);for(let ue=0;ue<he.length;ue++)O(he[ue],Z);he.length===2?U(E,w,S):E.projectionMatrix.copy(w.projectionMatrix),k(G,E,Z)};function k(G,Z,he){he===null?G.matrix.copy(Z.matrixWorld):(G.matrix.copy(he.matrixWorld),G.matrix.invert(),G.matrix.multiply(Z.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(Z.projectionMatrix),G.projectionMatrixInverse.copy(Z.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Or*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(G){c=G,u!==null&&(u.fixedFoveation=G),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=G)};let V=null;function j(G,Z){if(h=Z.getViewerPose(l||a),g=Z,h!==null){let he=h.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let ue=!1;he.length!==E.cameras.length&&(E.cameras.length=0,ue=!0);for(let ye=0;ye<he.length;ye++){let W=he[ye],Y=null;if(f!==null)Y=f.getViewport(W);else{let ie=d.getViewSubImage(u,W);Y=ie.viewport,ye===0&&(e.setRenderTargetTextures(p,ie.colorTexture,u.ignoreDepthValues?void 0:ie.depthStencilTexture),e.setRenderTarget(p))}let te=D[ye];te===void 0&&(te=new Dt,te.layers.enable(ye),te.viewport=new ct,D[ye]=te),te.matrix.fromArray(W.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(W.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(Y.x,Y.y,Y.width,Y.height),ye===0&&(E.matrix.copy(te.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),ue===!0&&E.cameras.push(te)}}for(let he=0;he<x.length;he++){let ue=b[he],ye=x[he];ue!==null&&ye!==void 0&&ye.update(ue,Z,l||a)}V&&V(G,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),g=null}let ee=new Bm;ee.setAnimationLoop(j),this.setAnimationLoop=function(G){V=G},this.dispose=function(){}}};function mM(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,km(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,x,b,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),v(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,x,b):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===fn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===fn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let x=e.get(p).envMap;if(x&&(m.envMap.value=x,m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let b=r._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*b,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,x,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=b*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===fn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){let x=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function gM(r,e,t,n){let i={},s={},a=[],o=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(x,b){let y=b.program;n.uniformBlockBinding(x,y)}function l(x,b){let y=i[x.id];y===void 0&&(g(x),y=h(x),i[x.id]=y,x.addEventListener("dispose",m));let _=b.program;n.updateUBOMapping(x,_);let w=e.render.frame;s[x.id]!==w&&(u(x),s[x.id]=w)}function h(x){let b=d();x.__bindingPointIndex=b;let y=r.createBuffer(),_=x.__size,w=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,y),r.bufferData(r.UNIFORM_BUFFER,_,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,b,y),y}function d(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){let b=i[x.id],y=x.uniforms,_=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,b);for(let w=0,S=y.length;w<S;w++){let D=Array.isArray(y[w])?y[w]:[y[w]];for(let E=0,T=D.length;E<T;E++){let F=D[E];if(f(F,w,E,_)===!0){let N=F.__offset,H=Array.isArray(F.value)?F.value:[F.value],L=0;for(let A=0;A<H.length;A++){let C=H[A],U=v(C);typeof C=="number"||typeof C=="boolean"?(F.__data[0]=C,r.bufferSubData(r.UNIFORM_BUFFER,N+L,F.__data)):C.isMatrix3?(F.__data[0]=C.elements[0],F.__data[1]=C.elements[1],F.__data[2]=C.elements[2],F.__data[3]=0,F.__data[4]=C.elements[3],F.__data[5]=C.elements[4],F.__data[6]=C.elements[5],F.__data[7]=0,F.__data[8]=C.elements[6],F.__data[9]=C.elements[7],F.__data[10]=C.elements[8],F.__data[11]=0):(C.toArray(F.__data,L),L+=U.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,N,F.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(x,b,y,_){let w=x.value,S=b+"_"+y;if(_[S]===void 0)return typeof w=="number"||typeof w=="boolean"?_[S]=w:_[S]=w.clone(),!0;{let D=_[S];if(typeof w=="number"||typeof w=="boolean"){if(D!==w)return _[S]=w,!0}else if(D.equals(w)===!1)return D.copy(w),!0}return!1}function g(x){let b=x.uniforms,y=0,_=16;for(let S=0,D=b.length;S<D;S++){let E=Array.isArray(b[S])?b[S]:[b[S]];for(let T=0,F=E.length;T<F;T++){let N=E[T],H=Array.isArray(N.value)?N.value:[N.value];for(let L=0,A=H.length;L<A;L++){let C=H[L],U=v(C),O=y%_;O!==0&&_-O<U.boundary&&(y+=_-O),N.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=y,y+=U.storage}}}let w=y%_;return w>0&&(y+=_-w),x.__size=y,x.__cache={},this}function v(x){let b={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(b.boundary=4,b.storage=4):x.isVector2?(b.boundary=8,b.storage=8):x.isVector3||x.isColor?(b.boundary=16,b.storage=12):x.isVector4?(b.boundary=16,b.storage=16):x.isMatrix3?(b.boundary=48,b.storage=48):x.isMatrix4?(b.boundary=64,b.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),b}function m(x){let b=x.target;b.removeEventListener("dispose",m);let y=a.indexOf(b.__bindingPointIndex);a.splice(y,1),r.deleteBuffer(i[b.id]),delete i[b.id],delete s[b.id]}function p(){for(let x in i)r.deleteBuffer(i[x]);a=[],i={},s={}}return{bind:c,update:l,dispose:p}}var ka=class{constructor(e={}){let{canvas:t=Tx(),context:n=null,depth:i=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let u;n!==null?u=n.getContextAttributes().alpha:u=a;let f=new Uint32Array(4),g=new Int32Array(4),v=null,m=null,p=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=lt,this._useLegacyLights=!1,this.toneMapping=ps,this.toneMappingExposure=1;let b=this,y=!1,_=0,w=0,S=null,D=-1,E=null,T=new ct,F=new ct,N=null,H=new $(0),L=0,A=t.width,C=t.height,U=1,O=null,k=null,V=new ct(0,0,A,C),j=new ct(0,0,A,C),ee=!1,G=new Ha,Z=!1,he=!1,ue=null,ye=new Ee,W=new re,Y=new M,te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ie(){return S===null?U:1}let z=n;function xe(I,q){for(let J=0;J<I.length;J++){let Q=I[J],K=t.getContext(Q,q);if(K!==null)return K}return null}try{let I={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",ge,!1),t.addEventListener("webglcontextrestored",B,!1),t.addEventListener("webglcontextcreationerror",_e,!1),z===null){let q=["webgl2","webgl","experimental-webgl"];if(b.isWebGL1Renderer===!0&&q.shift(),z=xe(q,I),z===null)throw xe(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let fe,pe,de,De,Te,P,R,X,oe,se,ae,Se,me,Ae,He,Je,le,ft,tt,Xe,Be,Le,nt,gt;function Gt(){fe=new N_(z),pe=new C_(z,fe,e),fe.init(pe),Le=new fM(z,fe,pe),de=new uM(z,fe,pe),De=new O_(z),Te=new $1,P=new dM(z,fe,de,Te,pe,Le,De),R=new L_(b),X=new F_(b),oe=new Xx(z,pe),nt=new A_(z,fe,oe,pe),se=new U_(z,oe,De,nt),ae=new G_(z,se,oe,De),tt=new z_(z,pe,P),Je=new P_(Te),Se=new Q1(b,R,X,fe,pe,nt,Je),me=new mM(b,Te),Ae=new tM,He=new oM(fe,pe),ft=new S_(b,R,X,de,ae,u,c),le=new hM(b,ae,pe),gt=new gM(z,De,pe,de),Xe=new R_(z,fe,De,pe),Be=new H_(z,fe,De,pe),De.programs=Se.programs,b.capabilities=pe,b.extensions=fe,b.properties=Te,b.renderLists=Ae,b.shadowMap=le,b.state=de,b.info=De}Gt();let rt=new su(b,z);this.xr=rt,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let I=fe.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){let I=fe.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(I){I!==void 0&&(U=I,this.setSize(A,C,!1))},this.getSize=function(I){return I.set(A,C)},this.setSize=function(I,q,J=!0){if(rt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}A=I,C=q,t.width=Math.floor(I*U),t.height=Math.floor(q*U),J===!0&&(t.style.width=I+"px",t.style.height=q+"px"),this.setViewport(0,0,I,q)},this.getDrawingBufferSize=function(I){return I.set(A*U,C*U).floor()},this.setDrawingBufferSize=function(I,q,J){A=I,C=q,U=J,t.width=Math.floor(I*J),t.height=Math.floor(q*J),this.setViewport(0,0,I,q)},this.getCurrentViewport=function(I){return I.copy(T)},this.getViewport=function(I){return I.copy(V)},this.setViewport=function(I,q,J,Q){I.isVector4?V.set(I.x,I.y,I.z,I.w):V.set(I,q,J,Q),de.viewport(T.copy(V).multiplyScalar(U).floor())},this.getScissor=function(I){return I.copy(j)},this.setScissor=function(I,q,J,Q){I.isVector4?j.set(I.x,I.y,I.z,I.w):j.set(I,q,J,Q),de.scissor(F.copy(j).multiplyScalar(U).floor())},this.getScissorTest=function(){return ee},this.setScissorTest=function(I){de.setScissorTest(ee=I)},this.setOpaqueSort=function(I){O=I},this.setTransparentSort=function(I){k=I},this.getClearColor=function(I){return I.copy(ft.getClearColor())},this.setClearColor=function(){ft.setClearColor.apply(ft,arguments)},this.getClearAlpha=function(){return ft.getClearAlpha()},this.setClearAlpha=function(){ft.setClearAlpha.apply(ft,arguments)},this.clear=function(I=!0,q=!0,J=!0){let Q=0;if(I){let K=!1;if(S!==null){let Re=S.texture.format;K=Re===Im||Re===Lm||Re===Pm}if(K){let Re=S.texture.type,Ne=Re===Ei||Re===Mi||Re===Hu||Re===Vs||Re===Rm||Re===Cm,We=ft.getClearColor(),Ke=ft.getClearAlpha(),it=We.r,$e=We.g,et=We.b;Ne?(f[0]=it,f[1]=$e,f[2]=et,f[3]=Ke,z.clearBufferuiv(z.COLOR,0,f)):(g[0]=it,g[1]=$e,g[2]=et,g[3]=Ke,z.clearBufferiv(z.COLOR,0,g))}else Q|=z.COLOR_BUFFER_BIT}q&&(Q|=z.DEPTH_BUFFER_BIT),J&&(Q|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ge,!1),t.removeEventListener("webglcontextrestored",B,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),Ae.dispose(),He.dispose(),Te.dispose(),R.dispose(),X.dispose(),ae.dispose(),nt.dispose(),gt.dispose(),Se.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",Sn),rt.removeEventListener("sessionend",Ct),ue&&(ue.dispose(),ue=null),An.stop()};function ge(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function B(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;let I=De.autoReset,q=le.enabled,J=le.autoUpdate,Q=le.needsUpdate,K=le.type;Gt(),De.autoReset=I,le.enabled=q,le.autoUpdate=J,le.needsUpdate=Q,le.type=K}function _e(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function Me(I){let q=I.target;q.removeEventListener("dispose",Me),je(q)}function je(I){Ge(I),Te.remove(I)}function Ge(I){let q=Te.get(I).programs;q!==void 0&&(q.forEach(function(J){Se.releaseProgram(J)}),I.isShaderMaterial&&Se.releaseShaderCache(I))}this.renderBufferDirect=function(I,q,J,Q,K,Re){q===null&&(q=te);let Ne=K.isMesh&&K.matrixWorld.determinant()<0,We=dv(I,q,J,Q,K);de.setMaterial(Q,Ne);let Ke=J.index,it=1;if(Q.wireframe===!0){if(Ke=se.getWireframeAttribute(J),Ke===void 0)return;it=2}let $e=J.drawRange,et=J.attributes.position,Xt=$e.start*it,kn=($e.start+$e.count)*it;Re!==null&&(Xt=Math.max(Xt,Re.start*it),kn=Math.min(kn,(Re.start+Re.count)*it)),Ke!==null?(Xt=Math.max(Xt,0),kn=Math.min(kn,Ke.count)):et!=null&&(Xt=Math.max(Xt,0),kn=Math.min(kn,et.count));let cn=kn-Xt;if(cn<0||cn===1/0)return;nt.setup(K,Q,We,J,Ke);let ki,Bt=Xe;if(Ke!==null&&(ki=oe.get(Ke),Bt=Be,Bt.setIndex(ki)),K.isMesh)Q.wireframe===!0?(de.setLineWidth(Q.wireframeLinewidth*ie()),Bt.setMode(z.LINES)):Bt.setMode(z.TRIANGLES);else if(K.isLine){let at=Q.linewidth;at===void 0&&(at=1),de.setLineWidth(at*ie()),K.isLineSegments?Bt.setMode(z.LINES):K.isLineLoop?Bt.setMode(z.LINE_LOOP):Bt.setMode(z.LINE_STRIP)}else K.isPoints?Bt.setMode(z.POINTS):K.isSprite&&Bt.setMode(z.TRIANGLES);if(K.isBatchedMesh)Bt.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else if(K.isInstancedMesh)Bt.renderInstances(Xt,cn,K.count);else if(J.isInstancedBufferGeometry){let at=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Ql=Math.min(J.instanceCount,at);Bt.renderInstances(Xt,cn,Ql)}else Bt.render(Xt,cn)};function At(I,q,J){I.transparent===!0&&I.side===dt&&I.forceSinglePass===!1?(I.side=fn,I.needsUpdate=!0,Ao(I,q,J),I.side=wi,I.needsUpdate=!0,Ao(I,q,J),I.side=dt):Ao(I,q,J)}this.compile=function(I,q,J=null){J===null&&(J=I),m=He.get(J),m.init(),x.push(m),J.traverseVisible(function(K){K.isLight&&K.layers.test(q.layers)&&(m.pushLight(K),K.castShadow&&m.pushShadow(K))}),I!==J&&I.traverseVisible(function(K){K.isLight&&K.layers.test(q.layers)&&(m.pushLight(K),K.castShadow&&m.pushShadow(K))}),m.setupLights(b._useLegacyLights);let Q=new Set;return I.traverse(function(K){let Re=K.material;if(Re)if(Array.isArray(Re))for(let Ne=0;Ne<Re.length;Ne++){let We=Re[Ne];At(We,J,K),Q.add(We)}else At(Re,J,K),Q.add(Re)}),x.pop(),m=null,Q},this.compileAsync=function(I,q,J=null){let Q=this.compile(I,q,J);return new Promise(K=>{function Re(){if(Q.forEach(function(Ne){Te.get(Ne).currentProgram.isReady()&&Q.delete(Ne)}),Q.size===0){K(I);return}setTimeout(Re,10)}fe.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let Rt=null;function on(I){Rt&&Rt(I)}function Sn(){An.stop()}function Ct(){An.start()}let An=new Bm;An.setAnimationLoop(on),typeof self<"u"&&An.setContext(self),this.setAnimationLoop=function(I){Rt=I,rt.setAnimationLoop(I),I===null?An.stop():An.start()},rt.addEventListener("sessionstart",Sn),rt.addEventListener("sessionend",Ct),this.render=function(I,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(q),q=rt.getCamera()),I.isScene===!0&&I.onBeforeRender(b,I,q,S),m=He.get(I,x.length),m.init(),x.push(m),ye.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),G.setFromProjectionMatrix(ye),he=this.localClippingEnabled,Z=Je.init(this.clippingPlanes,he),v=Ae.get(I,p.length),v.init(),p.push(v),bi(I,q,0,b.sortObjects),v.finish(),b.sortObjects===!0&&v.sort(O,k),this.info.render.frame++,Z===!0&&Je.beginShadows();let J=m.state.shadowsArray;if(le.render(J,I,q),Z===!0&&Je.endShadows(),this.info.autoReset===!0&&this.info.reset(),ft.render(v,I),m.setupLights(b._useLegacyLights),q.isArrayCamera){let Q=q.cameras;for(let K=0,Re=Q.length;K<Re;K++){let Ne=Q[K];If(v,I,Ne,Ne.viewport)}}else If(v,I,q);S!==null&&(P.updateMultisampleRenderTarget(S),P.updateRenderTargetMipmap(S)),I.isScene===!0&&I.onAfterRender(b,I,q),nt.resetDefaultState(),D=-1,E=null,x.pop(),x.length>0?m=x[x.length-1]:m=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function bi(I,q,J,Q){if(I.visible===!1)return;if(I.layers.test(q.layers)){if(I.isGroup)J=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(q);else if(I.isLight)m.pushLight(I),I.castShadow&&m.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||G.intersectsSprite(I)){Q&&Y.setFromMatrixPosition(I.matrixWorld).applyMatrix4(ye);let Ne=ae.update(I),We=I.material;We.visible&&v.push(I,Ne,We,J,Y.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||G.intersectsObject(I))){let Ne=ae.update(I),We=I.material;if(Q&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),Y.copy(I.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),Y.copy(Ne.boundingSphere.center)),Y.applyMatrix4(I.matrixWorld).applyMatrix4(ye)),Array.isArray(We)){let Ke=Ne.groups;for(let it=0,$e=Ke.length;it<$e;it++){let et=Ke[it],Xt=We[et.materialIndex];Xt&&Xt.visible&&v.push(I,Ne,Xt,J,Y.z,et)}}else We.visible&&v.push(I,Ne,We,J,Y.z,null)}}let Re=I.children;for(let Ne=0,We=Re.length;Ne<We;Ne++)bi(Re[Ne],q,J,Q)}function If(I,q,J,Q){let K=I.opaque,Re=I.transmissive,Ne=I.transparent;m.setupLightsView(J),Z===!0&&Je.setGlobalState(b.clippingPlanes,J),Re.length>0&&uv(K,Re,q,J),Q&&de.viewport(T.copy(Q)),K.length>0&&So(K,q,J),Re.length>0&&So(Re,q,J),Ne.length>0&&So(Ne,q,J),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function uv(I,q,J,Q){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;let Re=pe.isWebGL2;ue===null&&(ue=new hn(1,1,{generateMipmaps:!0,type:fe.has("EXT_color_buffer_half_float")?Fn:Ei,minFilter:Ti,samples:Re?4:0})),b.getDrawingBufferSize(W),Re?ue.setSize(W.x,W.y):ue.setSize(fc(W.x),fc(W.y));let Ne=b.getRenderTarget();b.setRenderTarget(ue),b.getClearColor(H),L=b.getClearAlpha(),L<1&&b.setClearColor(16777215,.5),b.clear();let We=b.toneMapping;b.toneMapping=ps,So(I,J,Q),P.updateMultisampleRenderTarget(ue),P.updateRenderTargetMipmap(ue);let Ke=!1;for(let it=0,$e=q.length;it<$e;it++){let et=q[it],Xt=et.object,kn=et.geometry,cn=et.material,ki=et.group;if(cn.side===dt&&Xt.layers.test(Q.layers)){let Bt=cn.side;cn.side=fn,cn.needsUpdate=!0,Df(Xt,J,Q,kn,cn,ki),cn.side=Bt,cn.needsUpdate=!0,Ke=!0}}Ke===!0&&(P.updateMultisampleRenderTarget(ue),P.updateRenderTargetMipmap(ue)),b.setRenderTarget(Ne),b.setClearColor(H,L),b.toneMapping=We}function So(I,q,J){let Q=q.isScene===!0?q.overrideMaterial:null;for(let K=0,Re=I.length;K<Re;K++){let Ne=I[K],We=Ne.object,Ke=Ne.geometry,it=Q===null?Ne.material:Q,$e=Ne.group;We.layers.test(J.layers)&&Df(We,q,J,Ke,it,$e)}}function Df(I,q,J,Q,K,Re){I.onBeforeRender(b,q,J,Q,K,Re),I.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),K.onBeforeRender(b,q,J,Q,I,Re),K.transparent===!0&&K.side===dt&&K.forceSinglePass===!1?(K.side=fn,K.needsUpdate=!0,b.renderBufferDirect(J,q,Q,K,I,Re),K.side=wi,K.needsUpdate=!0,b.renderBufferDirect(J,q,Q,K,I,Re),K.side=dt):b.renderBufferDirect(J,q,Q,K,I,Re),I.onAfterRender(b,q,J,Q,K,Re)}function Ao(I,q,J){q.isScene!==!0&&(q=te);let Q=Te.get(I),K=m.state.lights,Re=m.state.shadowsArray,Ne=K.state.version,We=Se.getParameters(I,K.state,Re,q,J),Ke=Se.getProgramCacheKey(We),it=Q.programs;Q.environment=I.isMeshStandardMaterial?q.environment:null,Q.fog=q.fog,Q.envMap=(I.isMeshStandardMaterial?X:R).get(I.envMap||Q.environment),it===void 0&&(I.addEventListener("dispose",Me),it=new Map,Q.programs=it);let $e=it.get(Ke);if($e!==void 0){if(Q.currentProgram===$e&&Q.lightsStateVersion===Ne)return Nf(I,We),$e}else We.uniforms=Se.getUniforms(I),I.onBuild(J,We,b),I.onBeforeCompile(We,b),$e=Se.acquireProgram(We,Ke),it.set(Ke,$e),Q.uniforms=We.uniforms;let et=Q.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(et.clippingPlanes=Je.uniform),Nf(I,We),Q.needsLights=pv(I),Q.lightsStateVersion=Ne,Q.needsLights&&(et.ambientLightColor.value=K.state.ambient,et.lightProbe.value=K.state.probe,et.directionalLights.value=K.state.directional,et.directionalLightShadows.value=K.state.directionalShadow,et.spotLights.value=K.state.spot,et.spotLightShadows.value=K.state.spotShadow,et.rectAreaLights.value=K.state.rectArea,et.ltc_1.value=K.state.rectAreaLTC1,et.ltc_2.value=K.state.rectAreaLTC2,et.pointLights.value=K.state.point,et.pointLightShadows.value=K.state.pointShadow,et.hemisphereLights.value=K.state.hemi,et.directionalShadowMap.value=K.state.directionalShadowMap,et.directionalShadowMatrix.value=K.state.directionalShadowMatrix,et.spotShadowMap.value=K.state.spotShadowMap,et.spotLightMatrix.value=K.state.spotLightMatrix,et.spotLightMap.value=K.state.spotLightMap,et.pointShadowMap.value=K.state.pointShadowMap,et.pointShadowMatrix.value=K.state.pointShadowMatrix),Q.currentProgram=$e,Q.uniformsList=null,$e}function Ff(I){if(I.uniformsList===null){let q=I.currentProgram.getUniforms();I.uniformsList=Dr.seqWithValue(q.seq,I.uniforms)}return I.uniformsList}function Nf(I,q){let J=Te.get(I);J.outputColorSpace=q.outputColorSpace,J.batching=q.batching,J.instancing=q.instancing,J.instancingColor=q.instancingColor,J.skinning=q.skinning,J.morphTargets=q.morphTargets,J.morphNormals=q.morphNormals,J.morphColors=q.morphColors,J.morphTargetsCount=q.morphTargetsCount,J.numClippingPlanes=q.numClippingPlanes,J.numIntersection=q.numClipIntersection,J.vertexAlphas=q.vertexAlphas,J.vertexTangents=q.vertexTangents,J.toneMapping=q.toneMapping}function dv(I,q,J,Q,K){q.isScene!==!0&&(q=te),P.resetTextureUnits();let Re=q.fog,Ne=Q.isMeshStandardMaterial?q.environment:null,We=S===null?b.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:en,Ke=(Q.isMeshStandardMaterial?X:R).get(Q.envMap||Ne),it=Q.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,$e=!!J.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),et=!!J.morphAttributes.position,Xt=!!J.morphAttributes.normal,kn=!!J.morphAttributes.color,cn=ps;Q.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(cn=b.toneMapping);let ki=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Bt=ki!==void 0?ki.length:0,at=Te.get(Q),Ql=m.state.lights;if(Z===!0&&(he===!0||I!==E)){let Kn=I===E&&Q.id===D;Je.setState(Q,I,Kn)}let Vt=!1;Q.version===at.__version?(at.needsLights&&at.lightsStateVersion!==Ql.state.version||at.outputColorSpace!==We||K.isBatchedMesh&&at.batching===!1||!K.isBatchedMesh&&at.batching===!0||K.isInstancedMesh&&at.instancing===!1||!K.isInstancedMesh&&at.instancing===!0||K.isSkinnedMesh&&at.skinning===!1||!K.isSkinnedMesh&&at.skinning===!0||K.isInstancedMesh&&at.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&at.instancingColor===!1&&K.instanceColor!==null||at.envMap!==Ke||Q.fog===!0&&at.fog!==Re||at.numClippingPlanes!==void 0&&(at.numClippingPlanes!==Je.numPlanes||at.numIntersection!==Je.numIntersection)||at.vertexAlphas!==it||at.vertexTangents!==$e||at.morphTargets!==et||at.morphNormals!==Xt||at.morphColors!==kn||at.toneMapping!==cn||pe.isWebGL2===!0&&at.morphTargetsCount!==Bt)&&(Vt=!0):(Vt=!0,at.__version=Q.version);let Fs=at.currentProgram;Vt===!0&&(Fs=Ao(Q,q,K));let Uf=!1,ga=!1,$l=!1,gn=Fs.getUniforms(),Ns=at.uniforms;if(de.useProgram(Fs.program)&&(Uf=!0,ga=!0,$l=!0),Q.id!==D&&(D=Q.id,ga=!0),Uf||E!==I){gn.setValue(z,"projectionMatrix",I.projectionMatrix),gn.setValue(z,"viewMatrix",I.matrixWorldInverse);let Kn=gn.map.cameraPosition;Kn!==void 0&&Kn.setValue(z,Y.setFromMatrixPosition(I.matrixWorld)),pe.logarithmicDepthBuffer&&gn.setValue(z,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&gn.setValue(z,"isOrthographic",I.isOrthographicCamera===!0),E!==I&&(E=I,ga=!0,$l=!0)}if(K.isSkinnedMesh){gn.setOptional(z,K,"bindMatrix"),gn.setOptional(z,K,"bindMatrixInverse");let Kn=K.skeleton;Kn&&(pe.floatVertexTextures?(Kn.boneTexture===null&&Kn.computeBoneTexture(),gn.setValue(z,"boneTexture",Kn.boneTexture,P)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}K.isBatchedMesh&&(gn.setOptional(z,K,"batchingTexture"),gn.setValue(z,"batchingTexture",K._matricesTexture,P));let eh=J.morphAttributes;if((eh.position!==void 0||eh.normal!==void 0||eh.color!==void 0&&pe.isWebGL2===!0)&&tt.update(K,J,Fs),(ga||at.receiveShadow!==K.receiveShadow)&&(at.receiveShadow=K.receiveShadow,gn.setValue(z,"receiveShadow",K.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(Ns.envMap.value=Ke,Ns.flipEnvMap.value=Ke.isCubeTexture&&Ke.isRenderTargetTexture===!1?-1:1),ga&&(gn.setValue(z,"toneMappingExposure",b.toneMappingExposure),at.needsLights&&fv(Ns,$l),Re&&Q.fog===!0&&me.refreshFogUniforms(Ns,Re),me.refreshMaterialUniforms(Ns,Q,U,C,ue),Dr.upload(z,Ff(at),Ns,P)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Dr.upload(z,Ff(at),Ns,P),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&gn.setValue(z,"center",K.center),gn.setValue(z,"modelViewMatrix",K.modelViewMatrix),gn.setValue(z,"normalMatrix",K.normalMatrix),gn.setValue(z,"modelMatrix",K.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){let Kn=Q.uniformsGroups;for(let th=0,mv=Kn.length;th<mv;th++)if(pe.isWebGL2){let Hf=Kn[th];gt.update(Hf,Fs),gt.bind(Hf,Fs)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Fs}function fv(I,q){I.ambientLightColor.needsUpdate=q,I.lightProbe.needsUpdate=q,I.directionalLights.needsUpdate=q,I.directionalLightShadows.needsUpdate=q,I.pointLights.needsUpdate=q,I.pointLightShadows.needsUpdate=q,I.spotLights.needsUpdate=q,I.spotLightShadows.needsUpdate=q,I.rectAreaLights.needsUpdate=q,I.hemisphereLights.needsUpdate=q}function pv(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(I,q,J){Te.get(I.texture).__webglTexture=q,Te.get(I.depthTexture).__webglTexture=J;let Q=Te.get(I);Q.__hasExternalTextures=!0,Q.__hasExternalTextures&&(Q.__autoAllocateDepthBuffer=J===void 0,Q.__autoAllocateDepthBuffer||fe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(I,q){let J=Te.get(I);J.__webglFramebuffer=q,J.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(I,q=0,J=0){S=I,_=q,w=J;let Q=!0,K=null,Re=!1,Ne=!1;if(I){let Ke=Te.get(I);Ke.__useDefaultFramebuffer!==void 0?(de.bindFramebuffer(z.FRAMEBUFFER,null),Q=!1):Ke.__webglFramebuffer===void 0?P.setupRenderTarget(I):Ke.__hasExternalTextures&&P.rebindTextures(I,Te.get(I.texture).__webglTexture,Te.get(I.depthTexture).__webglTexture);let it=I.texture;(it.isData3DTexture||it.isDataArrayTexture||it.isCompressedArrayTexture)&&(Ne=!0);let $e=Te.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray($e[q])?K=$e[q][J]:K=$e[q],Re=!0):pe.isWebGL2&&I.samples>0&&P.useMultisampledRTT(I)===!1?K=Te.get(I).__webglMultisampledFramebuffer:Array.isArray($e)?K=$e[J]:K=$e,T.copy(I.viewport),F.copy(I.scissor),N=I.scissorTest}else T.copy(V).multiplyScalar(U).floor(),F.copy(j).multiplyScalar(U).floor(),N=ee;if(de.bindFramebuffer(z.FRAMEBUFFER,K)&&pe.drawBuffers&&Q&&de.drawBuffers(I,K),de.viewport(T),de.scissor(F),de.setScissorTest(N),Re){let Ke=Te.get(I.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ke.__webglTexture,J)}else if(Ne){let Ke=Te.get(I.texture),it=q||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ke.__webglTexture,J||0,it)}D=-1},this.readRenderTargetPixels=function(I,q,J,Q,K,Re,Ne){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=Te.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Ne!==void 0&&(We=We[Ne]),We){de.bindFramebuffer(z.FRAMEBUFFER,We);try{let Ke=I.texture,it=Ke.format,$e=Ke.type;if(it!==Jn&&Le.convert(it)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let et=$e===Fn&&(fe.has("EXT_color_buffer_half_float")||pe.isWebGL2&&fe.has("EXT_color_buffer_float"));if($e!==Ei&&Le.convert($e)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_TYPE)&&!($e===Yi&&(pe.isWebGL2||fe.has("OES_texture_float")||fe.has("WEBGL_color_buffer_float")))&&!et){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=I.width-Q&&J>=0&&J<=I.height-K&&z.readPixels(q,J,Q,K,Le.convert(it),Le.convert($e),Re)}finally{let Ke=S!==null?Te.get(S).__webglFramebuffer:null;de.bindFramebuffer(z.FRAMEBUFFER,Ke)}}},this.copyFramebufferToTexture=function(I,q,J=0){let Q=Math.pow(2,-J),K=Math.floor(q.image.width*Q),Re=Math.floor(q.image.height*Q);P.setTexture2D(q,0),z.copyTexSubImage2D(z.TEXTURE_2D,J,0,0,I.x,I.y,K,Re),de.unbindTexture()},this.copyTextureToTexture=function(I,q,J,Q=0){let K=q.image.width,Re=q.image.height,Ne=Le.convert(J.format),We=Le.convert(J.type);P.setTexture2D(J,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,J.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,J.unpackAlignment),q.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Q,I.x,I.y,K,Re,Ne,We,q.image.data):q.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Q,I.x,I.y,q.mipmaps[0].width,q.mipmaps[0].height,Ne,q.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,Q,I.x,I.y,Ne,We,q.image),Q===0&&J.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),de.unbindTexture()},this.copyTextureToTexture3D=function(I,q,J,Q,K=0){if(b.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Re=I.max.x-I.min.x+1,Ne=I.max.y-I.min.y+1,We=I.max.z-I.min.z+1,Ke=Le.convert(Q.format),it=Le.convert(Q.type),$e;if(Q.isData3DTexture)P.setTexture3D(Q,0),$e=z.TEXTURE_3D;else if(Q.isDataArrayTexture||Q.isCompressedArrayTexture)P.setTexture2DArray(Q,0),$e=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,Q.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,Q.unpackAlignment);let et=z.getParameter(z.UNPACK_ROW_LENGTH),Xt=z.getParameter(z.UNPACK_IMAGE_HEIGHT),kn=z.getParameter(z.UNPACK_SKIP_PIXELS),cn=z.getParameter(z.UNPACK_SKIP_ROWS),ki=z.getParameter(z.UNPACK_SKIP_IMAGES),Bt=J.isCompressedTexture?J.mipmaps[K]:J.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,Bt.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Bt.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,I.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,I.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,I.min.z),J.isDataTexture||J.isData3DTexture?z.texSubImage3D($e,K,q.x,q.y,q.z,Re,Ne,We,Ke,it,Bt.data):J.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D($e,K,q.x,q.y,q.z,Re,Ne,We,Ke,Bt.data)):z.texSubImage3D($e,K,q.x,q.y,q.z,Re,Ne,We,Ke,it,Bt),z.pixelStorei(z.UNPACK_ROW_LENGTH,et),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Xt),z.pixelStorei(z.UNPACK_SKIP_PIXELS,kn),z.pixelStorei(z.UNPACK_SKIP_ROWS,cn),z.pixelStorei(z.UNPACK_SKIP_IMAGES,ki),K===0&&Q.generateMipmaps&&z.generateMipmap($e),de.unbindTexture()},this.initTexture=function(I){I.isCubeTexture?P.setTextureCube(I,0):I.isData3DTexture?P.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?P.setTexture2DArray(I,0):P.setTexture2D(I,0),de.unbindTexture()},this.resetState=function(){_=0,w=0,S=null,de.reset(),nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Vu?"display-p3":"srgb",t.unpackColorSpace=pt.workingColorSpace===Oc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===lt?qs:Nm}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===qs?lt:en}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},ru=class extends ka{};ru.prototype.isWebGL1Renderer=!0;var _c=class r{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new $(e),this.density=t}clone(){return new r(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Ji=class extends Et{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},Gr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Vh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=hi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Rn=new M,Ys=class r{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Rn.fromBufferAttribute(this,t),Rn.applyMatrix4(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Rn.fromBufferAttribute(this,t),Rn.applyNormalMatrix(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Rn.fromBufferAttribute(this,t),Rn.transformDirection(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=_i(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=_i(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=_i(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=_i(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),i=yt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),i=yt(i,this.array),s=yt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new we(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new r(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Pn=class extends mn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new $(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Mr,_a=new M,Er=new M,wr=new M,Tr=new re,Ma=new re,Xm=new Ee,Zo=new M,Ea=new M,Jo=new M,tm=new re,Ph=new re,nm=new re,Nn=class extends Et{constructor(e=new Pn){if(super(),this.isSprite=!0,this.type="Sprite",Mr===void 0){Mr=new Pe;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Gr(t,5);Mr.setIndex([0,1,2,0,2,3]),Mr.setAttribute("position",new Ys(n,3,0,!1)),Mr.setAttribute("uv",new Ys(n,2,3,!1))}this.geometry=Mr,this.material=e,this.center=new re(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Er.setFromMatrixScale(this.matrixWorld),Xm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),wr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Er.multiplyScalar(-wr.z);let n=this.material.rotation,i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));let a=this.center;Qo(Zo.set(-.5,-.5,0),wr,a,Er,i,s),Qo(Ea.set(.5,-.5,0),wr,a,Er,i,s),Qo(Jo.set(.5,.5,0),wr,a,Er,i,s),tm.set(0,0),Ph.set(1,0),nm.set(1,1);let o=e.ray.intersectTriangle(Zo,Ea,Jo,!1,_a);if(o===null&&(Qo(Ea.set(-.5,.5,0),wr,a,Er,i,s),Ph.set(0,1),o=e.ray.intersectTriangle(Zo,Jo,Ea,!1,_a),o===null))return;let c=e.ray.origin.distanceTo(_a);c<e.near||c>e.far||t.push({distance:c,point:_a.clone(),uv:Gs.getInterpolation(_a,Zo,Ea,Jo,tm,Ph,nm,new re),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Qo(r,e,t,n,i,s){Tr.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(Ma.x=s*Tr.x-i*Tr.y,Ma.y=i*Tr.x+s*Tr.y):Ma.copy(Tr),r.copy(e),r.x+=Ma.x,r.y+=Ma.y,r.applyMatrix4(Xm)}var im=new M,sm=new ct,rm=new ct,vM=new M,am=new Ee,$o=new M,Lh=new Vn,om=new Ee,Ih=new js,Mc=class extends Ue{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Vf,this.bindMatrix=new Ee,this.bindMatrixInverse=new Ee,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new zt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,$o),this.boundingBox.expandByPoint($o)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Vn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,$o),this.boundingSphere.expandByPoint($o)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Lh.copy(this.boundingSphere),Lh.applyMatrix4(i),e.ray.intersectsSphere(Lh)!==!1&&(om.copy(i).invert(),Ih.copy(e.ray).applyMatrix4(om),!(this.boundingBox!==null&&Ih.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ih)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new ct,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Vf?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===qv?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;sm.fromBufferAttribute(i.attributes.skinIndex,e),rm.fromBufferAttribute(i.attributes.skinWeight,e),im.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){let a=rm.getComponent(s);if(a!==0){let o=sm.getComponent(s);am.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(vM.copy(im).applyMatrix4(am),a)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},Ba=class extends Et{constructor(){super(),this.isBone=!0,this.type="Bone"}},au=class extends pn{constructor(e=null,t=1,n=1,i,s,a,o,c,l=jt,h=jt,d,u){super(null,a,o,c,l,h,i,s,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},cm=new Ee,xM=new Ee,Ec=class r{constructor(e=[],t=[]){this.uuid=hi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ee)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ee;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){let o=e[s]?e[s].matrixWorld:xM;cm.multiplyMatrices(o,t[s]),cm.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new r(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new au(t,e,e,Jn,Yi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let s=e.bones[n],a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new Ba),this.bones.push(a),this.boneInverses.push(new Ee().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){let a=t[i];e.bones.push(a.uuid);let o=n[i];e.boneInverses.push(o.toArray())}return e}},Ln=class extends we{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Sr=new Ee,lm=new Ee,ec=[],hm=new zt,bM=new Ee,wa=new Ue,Ta=new Vn,Ft=class extends Ue{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ln(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,bM)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new zt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Sr),hm.copy(e.boundingBox).applyMatrix4(Sr),this.boundingBox.union(hm)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Vn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Sr),Ta.copy(e.boundingSphere).applyMatrix4(Sr),this.boundingSphere.union(Ta)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,i=this.count;if(wa.geometry=this.geometry,wa.material=this.material,wa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ta.copy(this.boundingSphere),Ta.applyMatrix4(n),e.ray.intersectsSphere(Ta)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Sr),lm.multiplyMatrices(n,Sr),wa.matrixWorld=lm,wa.raycast(e,ec);for(let a=0,o=ec.length;a<o;a++){let c=ec[a];c.instanceId=s,c.object=this,t.push(c)}ec.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ln(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var Qi=class extends mn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},um=new M,dm=new M,fm=new Ee,Dh=new js,tc=new Vn,Vr=class extends Et{constructor(e=new Pe,t=new Qi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)um.fromBufferAttribute(t,i-1),dm.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=um.distanceTo(dm);e.setAttribute("lineDistance",new Ie(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),tc.copy(n.boundingSphere),tc.applyMatrix4(i),tc.radius+=s,e.ray.intersectsSphere(tc)===!1)return;fm.copy(i).invert(),Dh.copy(e.ray).applyMatrix4(fm);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=new M,h=new M,d=new M,u=new M,f=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){let p=Math.max(0,a.start),x=Math.min(g.count,a.start+a.count);for(let b=p,y=x-1;b<y;b+=f){let _=g.getX(b),w=g.getX(b+1);if(l.fromBufferAttribute(m,_),h.fromBufferAttribute(m,w),Dh.distanceSqToSegment(l,h,u,d)>c)continue;u.applyMatrix4(this.matrixWorld);let D=e.ray.origin.distanceTo(u);D<e.near||D>e.far||t.push({distance:D,point:d.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,a.start),x=Math.min(m.count,a.start+a.count);for(let b=p,y=x-1;b<y;b+=f){if(l.fromBufferAttribute(m,b),h.fromBufferAttribute(m,b+1),Dh.distanceSqToSegment(l,h,u,d)>c)continue;u.applyMatrix4(this.matrixWorld);let w=e.ray.origin.distanceTo(u);w<e.near||w>e.far||t.push({distance:w,point:d.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}},pm=new M,mm=new M,Ai=class extends Vr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)pm.fromBufferAttribute(t,i),mm.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+pm.distanceTo(mm);e.setAttribute("lineDistance",new Ie(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},wc=class extends Vr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},di=class extends mn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new $(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},gm=new Ee,ou=new js,nc=new Vn,ic=new M,un=class extends Et{constructor(e=new Pe,t=new di){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),nc.copy(n.boundingSphere),nc.applyMatrix4(i),nc.radius+=s,e.ray.intersectsSphere(nc)===!1)return;gm.copy(i).invert(),ou.copy(e.ray).applyMatrix4(gm);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,d=n.attributes.position;if(l!==null){let u=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=u,v=f;g<v;g++){let m=l.getX(g);ic.fromBufferAttribute(d,m),vm(ic,m,c,i,e,t,this)}}else{let u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=u,v=f;g<v;g++)ic.fromBufferAttribute(d,g),vm(ic,g,c,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function vm(r,e,t,n,i,s,a){let o=ou.distanceSqToPoint(r);if(o<t){let c=new M;ou.closestPointToPoint(r,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,object:a})}}var yn=class extends pn{constructor(e,t,n,i,s,a,o,c,l){super(e,t,n,i,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Qn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),i=0,s=n.length,a;t?a=t:a=e*n[s-1];let o=0,c=s-1,l;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),l=n[i]-a,l<0)o=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===a)return i/(s-1);let h=n[i],u=n[i+1]-h,f=(a-h)/u;return(i+f)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);let a=this.getPoint(i),o=this.getPoint(s),c=t||(a.isVector2?new re:new M);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new M,i=[],s=[],a=[],o=new M,c=new Ee;for(let f=0;f<=e;f++){let g=f/e;i[f]=this.getTangentAt(g,new M)}s[0]=new M,a[0]=new M;let l=Number.MAX_VALUE,h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),u<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Qt(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(c.makeRotationAxis(o,g))}a[f].crossVectors(i[f],s[f])}if(t===!0){let f=Math.acos(Qt(s[0].dot(s[e]),-1,1));f/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(f=-f);for(let g=1;g<=e;g++)s[g].applyMatrix4(c.makeRotationAxis(i[g],f*g)),a[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},za=class extends Qn{constructor(e=0,t=0,n=1,i=1,s=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t){let n=t||new re,i=Math.PI*2,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(a?s=0:s=i),this.aClockwise===!0&&!a&&(s===i?s=-i:s=s-i);let o=this.aStartAngle+e*s,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=c-this.aX,f=l-this.aY;c=u*h-f*d+this.aX,l=u*d+f*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},cu=class extends za{constructor(e,t,n,i,s,a){super(e,t,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Xu(){let r=0,e=0,t=0,n=0;function i(s,a,o,c){r=s,e=o,t=-3*s+3*a-2*o-c,n=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,l){i(a,o,l*(o-s),l*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,l,h,d){let u=(a-s)/l-(o-s)/(l+h)+(o-a)/h,f=(o-a)/h-(c-a)/(h+d)+(c-o)/d;u*=h,f*=h,i(a,o,u,f)},calc:function(s){let a=s*s,o=a*s;return r+e*s+t*a+n*o}}}var sc=new M,Fh=new Xu,Nh=new Xu,Uh=new Xu,lu=class extends Qn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new M){let n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:c===0&&o===s-1&&(o=s-2,c=1);let l,h;this.closed||o>0?l=i[(o-1)%s]:(sc.subVectors(i[0],i[1]).add(i[0]),l=sc);let d=i[o%s],u=i[(o+1)%s];if(this.closed||o+2<s?h=i[(o+2)%s]:(sc.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=sc),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Fh.initNonuniformCatmullRom(l.x,d.x,u.x,h.x,g,v,m),Nh.initNonuniformCatmullRom(l.y,d.y,u.y,h.y,g,v,m),Uh.initNonuniformCatmullRom(l.z,d.z,u.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(Fh.initCatmullRom(l.x,d.x,u.x,h.x,this.tension),Nh.initCatmullRom(l.y,d.y,u.y,h.y,this.tension),Uh.initCatmullRom(l.z,d.z,u.z,h.z,this.tension));return n.set(Fh.calc(c),Nh.calc(c),Uh.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new M().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function xm(r,e,t,n,i){let s=(n-e)*.5,a=(i-t)*.5,o=r*r,c=r*o;return(2*t-2*n+s+a)*c+(-3*t+3*n-2*s-a)*o+s*r+t}function yM(r,e){let t=1-r;return t*t*e}function _M(r,e){return 2*(1-r)*r*e}function MM(r,e){return r*r*e}function Ia(r,e,t,n){return yM(r,e)+_M(r,t)+MM(r,n)}function EM(r,e){let t=1-r;return t*t*t*e}function wM(r,e){let t=1-r;return 3*t*t*r*e}function TM(r,e){return 3*(1-r)*r*r*e}function SM(r,e){return r*r*r*e}function Da(r,e,t,n,i){return EM(r,e)+wM(r,t)+TM(r,n)+SM(r,i)}var Tc=class extends Qn{constructor(e=new re,t=new re,n=new re,i=new re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new re){let n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Da(e,i.x,s.x,a.x,o.x),Da(e,i.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},hu=class extends Qn{constructor(e=new M,t=new M,n=new M,i=new M){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new M){let n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Da(e,i.x,s.x,a.x,o.x),Da(e,i.y,s.y,a.y,o.y),Da(e,i.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Sc=class extends Qn{constructor(e=new re,t=new re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new re){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},uu=class extends Qn{constructor(e=new M,t=new M){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new M){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new M){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ac=class extends Qn{constructor(e=new re,t=new re,n=new re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new re){let n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Ia(e,i.x,s.x,a.x),Ia(e,i.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},du=class extends Qn{constructor(e=new M,t=new M,n=new M){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new M){let n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Ia(e,i.x,s.x,a.x),Ia(e,i.y,s.y,a.y),Ia(e,i.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Rc=class extends Qn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new re){let n=t,i=this.points,s=(i.length-1)*e,a=Math.floor(s),o=s-a,c=i[a===0?a:a-1],l=i[a],h=i[a>i.length-2?i.length-1:a+1],d=i[a>i.length-3?i.length-1:a+2];return n.set(xm(o,c.x,l.x,h.x,d.x),xm(o,c.y,l.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new re().fromArray(i))}return this}},bm=Object.freeze({__proto__:null,ArcCurve:cu,CatmullRomCurve3:lu,CubicBezierCurve:Tc,CubicBezierCurve3:hu,EllipseCurve:za,LineCurve:Sc,LineCurve3:uu,QuadraticBezierCurve:Ac,QuadraticBezierCurve3:du,SplineCurve:Rc}),fu=class extends Qn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new bm[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),s=0;for(;s<i.length;){if(i[s]>=n){let a=i[s]-n,o=this.curves[s],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,s=this.curves;i<s.length;i++){let a=s[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new bm[i.type]().fromJSON(i))}return this}},pu=class extends fu{constructor(e){super(),this.type="Path",this.currentPoint=new re,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Sc(this.currentPoint.clone(),new re(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let s=new Ac(this.currentPoint.clone(),new re(e,t),new re(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,a){let o=new Tc(this.currentPoint.clone(),new re(e,t),new re(n,i),new re(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Rc(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,i,s,a),this}absarc(e,t,n,i,s,a){return this.absellipse(e,t,n,n,i,s,a),this}ellipse(e,t,n,i,s,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,i,s,a,o,c),this}absellipse(e,t,n,i,s,a,o,c){let l=new za(e,t,n,i,s,a,o,c);if(this.curves.length>0){let d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},mu=class r extends Pe{constructor(e=[new re(0,-.5),new re(.5,0),new re(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Qt(i,0,Math.PI*2);let s=[],a=[],o=[],c=[],l=[],h=1/t,d=new M,u=new re,f=new M,g=new M,v=new M,m=0,p=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:m=e[x+1].x-e[x].x,p=e[x+1].y-e[x].y,f.x=p*1,f.y=-m,f.z=p*0,v.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(v.x,v.y,v.z);break;default:m=e[x+1].x-e[x].x,p=e[x+1].y-e[x].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),c.push(f.x,f.y,f.z),v.copy(g)}for(let x=0;x<=t;x++){let b=n+x*h*i,y=Math.sin(b),_=Math.cos(b);for(let w=0;w<=e.length-1;w++){d.x=e[w].x*y,d.y=e[w].y,d.z=e[w].x*_,a.push(d.x,d.y,d.z),u.x=x/t,u.y=w/(e.length-1),o.push(u.x,u.y);let S=c[3*w+0]*y,D=c[3*w+1],E=c[3*w+0]*_;l.push(S,D,E)}}for(let x=0;x<t;x++)for(let b=0;b<e.length-1;b++){let y=b+x*e.length,_=y,w=y+e.length,S=y+e.length+1,D=y+1;s.push(_,w,D),s.push(S,D,w)}this.setIndex(s),this.setAttribute("position",new Ie(a,3)),this.setAttribute("uv",new Ie(o,2)),this.setAttribute("normal",new Ie(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.points,e.segments,e.phiStart,e.phiLength)}},Cc=class r extends mu{constructor(e=1,t=1,n=4,i=8){let s=new pu;s.absarc(0,-t/2,e,Math.PI*1.5,0),s.absarc(0,t/2,e,0,Math.PI*.5),super(s.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new r(e.radius,e.length,e.capSegments,e.radialSegments)}};var sn=class r extends Pe{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};let l=this;i=Math.floor(i),s=Math.floor(s);let h=[],d=[],u=[],f=[],g=0,v=[],m=n/2,p=0;x(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new Ie(d,3)),this.setAttribute("normal",new Ie(u,3)),this.setAttribute("uv",new Ie(f,2));function x(){let y=new M,_=new M,w=0,S=(t-e)/n;for(let D=0;D<=s;D++){let E=[],T=D/s,F=T*(t-e)+e;for(let N=0;N<=i;N++){let H=N/i,L=H*c+o,A=Math.sin(L),C=Math.cos(L);_.x=F*A,_.y=-T*n+m,_.z=F*C,d.push(_.x,_.y,_.z),y.set(A,S,C).normalize(),u.push(y.x,y.y,y.z),f.push(H,1-T),E.push(g++)}v.push(E)}for(let D=0;D<i;D++)for(let E=0;E<s;E++){let T=v[E][D],F=v[E+1][D],N=v[E+1][D+1],H=v[E][D+1];h.push(T,F,H),h.push(F,N,H),w+=6}l.addGroup(p,w,0),p+=w}function b(y){let _=g,w=new re,S=new M,D=0,E=y===!0?e:t,T=y===!0?1:-1;for(let N=1;N<=i;N++)d.push(0,m*T,0),u.push(0,T,0),f.push(.5,.5),g++;let F=g;for(let N=0;N<=i;N++){let L=N/i*c+o,A=Math.cos(L),C=Math.sin(L);S.x=E*C,S.y=m*T,S.z=E*A,d.push(S.x,S.y,S.z),u.push(0,T,0),w.x=A*.5+.5,w.y=C*.5*T+.5,f.push(w.x,w.y),g++}for(let N=0;N<i;N++){let H=_+N,L=F+N;y===!0?h.push(L,L+1,H):h.push(L+1,L,H),D+=3}l.addGroup(p,D,y===!0?1:2),p+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Wr=class r extends sn{constructor(e=1,t=1,n=32,i=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new r(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},gu=class r extends Pe{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let s=[],a=[];o(i),l(n),h(),this.setAttribute("position",new Ie(s,3)),this.setAttribute("normal",new Ie(s.slice(),3)),this.setAttribute("uv",new Ie(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(x){let b=new M,y=new M,_=new M;for(let w=0;w<t.length;w+=3)f(t[w+0],b),f(t[w+1],y),f(t[w+2],_),c(b,y,_,x)}function c(x,b,y,_){let w=_+1,S=[];for(let D=0;D<=w;D++){S[D]=[];let E=x.clone().lerp(y,D/w),T=b.clone().lerp(y,D/w),F=w-D;for(let N=0;N<=F;N++)N===0&&D===w?S[D][N]=E:S[D][N]=E.clone().lerp(T,N/F)}for(let D=0;D<w;D++)for(let E=0;E<2*(w-D)-1;E++){let T=Math.floor(E/2);E%2===0?(u(S[D][T+1]),u(S[D+1][T]),u(S[D][T])):(u(S[D][T+1]),u(S[D+1][T+1]),u(S[D+1][T]))}}function l(x){let b=new M;for(let y=0;y<s.length;y+=3)b.x=s[y+0],b.y=s[y+1],b.z=s[y+2],b.normalize().multiplyScalar(x),s[y+0]=b.x,s[y+1]=b.y,s[y+2]=b.z}function h(){let x=new M;for(let b=0;b<s.length;b+=3){x.x=s[b+0],x.y=s[b+1],x.z=s[b+2];let y=m(x)/2/Math.PI+.5,_=p(x)/Math.PI+.5;a.push(y,1-_)}g(),d()}function d(){for(let x=0;x<a.length;x+=6){let b=a[x+0],y=a[x+2],_=a[x+4],w=Math.max(b,y,_),S=Math.min(b,y,_);w>.9&&S<.1&&(b<.2&&(a[x+0]+=1),y<.2&&(a[x+2]+=1),_<.2&&(a[x+4]+=1))}}function u(x){s.push(x.x,x.y,x.z)}function f(x,b){let y=x*3;b.x=e[y+0],b.y=e[y+1],b.z=e[y+2]}function g(){let x=new M,b=new M,y=new M,_=new M,w=new re,S=new re,D=new re;for(let E=0,T=0;E<s.length;E+=9,T+=6){x.set(s[E+0],s[E+1],s[E+2]),b.set(s[E+3],s[E+4],s[E+5]),y.set(s[E+6],s[E+7],s[E+8]),w.set(a[T+0],a[T+1]),S.set(a[T+2],a[T+3]),D.set(a[T+4],a[T+5]),_.copy(x).add(b).add(y).divideScalar(3);let F=m(_);v(w,T+0,x,F),v(S,T+2,b,F),v(D,T+4,y,F)}}function v(x,b,y,_){_<0&&x.x===1&&(a[b]=x.x-1),y.x===0&&y.z===0&&(a[b]=_/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.vertices,e.indices,e.radius,e.details)}};var Ga=class r extends gu{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}};var fi=class r extends Pe{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],d=new M,u=new M,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){let x=[],b=p/n,y=0;p===0&&a===0?y=.5/t:p===n&&c===Math.PI&&(y=-.5/t);for(let _=0;_<=t;_++){let w=_/t;d.x=-e*Math.cos(i+w*s)*Math.sin(a+b*o),d.y=e*Math.cos(a+b*o),d.z=e*Math.sin(i+w*s)*Math.sin(a+b*o),g.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),m.push(w+y,1-b),x.push(l++)}h.push(x)}for(let p=0;p<n;p++)for(let x=0;x<t;x++){let b=h[p][x+1],y=h[p][x],_=h[p+1][x],w=h[p+1][x+1];(p!==0||a>0)&&f.push(b,y,w),(p!==n-1||c<Math.PI)&&f.push(y,_,w)}this.setIndex(f),this.setAttribute("position",new Ie(g,3)),this.setAttribute("normal",new Ie(v,3)),this.setAttribute("uv",new Ie(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Qe=class extends mn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new $(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gu,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},$n=class extends Qe{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new re(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Qt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new $(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new $(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new $(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Va=class extends mn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new $(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gu,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Fu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function rc(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function AM(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function RM(r){function e(i,s){return r[i]-r[s]}let t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function ym(r,e,t){let n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){let o=t[s]*e;for(let c=0;c!==e;++c)i[a++]=r[o+c]}return i}function jm(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}var gs=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=s)){let o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=t[--n-1],e>=s)break t}a=n,n=0;break n}break e}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},vu=class extends gs{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ar,endingEnd:Ar}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,a=e+1,o=i[s],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Rr:s=e,o=2*t-n;break;case cc:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Rr:a=e,c=2*n-t;break;case cc:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),v=g*g,m=v*g,p=-u*m+2*u*v-u*g,x=(1+u)*m+(-1.5-2*u)*v+(-.5+u)*g+1,b=(-1-f)*m+(1.5+f)*v+.5*g,y=f*m-f*v;for(let _=0;_!==o;++_)s[_]=p*a[h+_]+x*a[l+_]+b*a[c+_]+y*a[d+_];return s}},Pc=class extends gs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(i-t),d=1-h;for(let u=0;u!==o;++u)s[u]=a[l+u]*d+a[c+u]*h;return s}},xu=class extends gs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},ei=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=rc(t,this.TimeBufferType),this.values=rc(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:rc(e.times,Array),values:rc(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new xu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Pc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new vu(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Hr:t=this.InterpolantFactoryMethodDiscrete;break;case Xs:t=this.InterpolantFactoryMethodLinear;break;case oh:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Hr;case this.InterpolantFactoryMethodLinear:return Xs;case this.InterpolantFactoryMethodSmooth:return oh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&AM(i))for(let o=0,c=i.length;o!==c;++o){let l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===oh,s=e.length-1,a=1;for(let o=1;o<s;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(i)c=!0;else{let d=o*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){let v=t[d+g];if(v!==t[u+g]||v!==t[f+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let d=o*n,u=a*n;for(let f=0;f!==n;++f)t[u+f]=t[d+f]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};ei.prototype.TimeBufferType=Float32Array;ei.prototype.ValueBufferType=Float32Array;ei.prototype.DefaultInterpolation=Xs;var vs=class extends ei{};vs.prototype.ValueTypeName="bool";vs.prototype.ValueBufferType=Array;vs.prototype.DefaultInterpolation=Hr;vs.prototype.InterpolantFactoryMethodLinear=void 0;vs.prototype.InterpolantFactoryMethodSmooth=void 0;var Lc=class extends ei{};Lc.prototype.ValueTypeName="color";var $i=class extends ei{};$i.prototype.ValueTypeName="number";var bu=class extends gs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t),l=e*o;for(let h=l+o;l!==h;l+=4)qe.slerpFlat(s,0,a,l-o,a,l,c);return s}},Ri=class extends ei{InterpolantFactoryMethodLinear(e){return new bu(this.times,this.values,this.getValueSize(),e)}};Ri.prototype.ValueTypeName="quaternion";Ri.prototype.DefaultInterpolation=Xs;Ri.prototype.InterpolantFactoryMethodSmooth=void 0;var xs=class extends ei{};xs.prototype.ValueTypeName="string";xs.prototype.ValueBufferType=Array;xs.prototype.DefaultInterpolation=Hr;xs.prototype.InterpolantFactoryMethodLinear=void 0;xs.prototype.InterpolantFactoryMethodSmooth=void 0;var es=class extends ei{};es.prototype.ValueTypeName="vector";var qr=class{constructor(e,t=-1,n,i=Bu){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=hi(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(PM(n[a]).scale(i));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=n.length;s!==a;++s)t.push(ei.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let s=t.length,a=[];for(let o=0;o<s;o++){let c=[],l=[];c.push((o+s-1)%s,o,(o+1)%s),l.push(0,1,0);let h=RM(c);c=ym(c,1,h),l=ym(l,1,h),!i&&c[0]===0&&(c.push(s),l.push(l[0])),a.push(new $i(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],h=l.name.match(s);if(h&&h.length>1){let d=h[1],u=i[d];u||(i[d]=u=[]),u.push(l)}}let a=[];for(let o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(d,u,f,g,v){if(f.length!==0){let m=[],p=[];jm(f,m,p,g),m.length!==0&&v.push(new d(u,m,p))}},i=[],s=e.name||"default",a=e.fps||30,o=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let d=0;d<l.length;d++){let u=l[d].keys;if(!(!u||u.length===0))if(u[0].morphTargets){let f={},g;for(g=0;g<u.length;g++)if(u[g].morphTargets)for(let v=0;v<u[g].morphTargets.length;v++)f[u[g].morphTargets[v]]=-1;for(let v in f){let m=[],p=[];for(let x=0;x!==u[g].morphTargets.length;++x){let b=u[g];m.push(b.time),p.push(b.morphTarget===v?1:0)}i.push(new $i(".morphTargetInfluence["+v+"]",m,p))}c=f.length*a}else{let f=".bones["+t[d].name+"]";n(es,f+".position",u,"pos",i),n(Ri,f+".quaternion",u,"rot",i),n(es,f+".scale",u,"scl",i)}}return i.length===0?null:new this(s,c,i,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function CM(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return $i;case"vector":case"vector2":case"vector3":case"vector4":return es;case"color":return Lc;case"quaternion":return Ri;case"bool":case"boolean":return vs;case"string":return xs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function PM(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=CM(r.type);if(r.times===void 0){let t=[],n=[];jm(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}var ds={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}},yu=class{constructor(e,t,n){let i=this,s=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){let f=l[d],g=l[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},LM=new yu,ts=class{constructor(e){this.manager=e!==void 0?e:LM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};ts.DEFAULT_MATERIAL_NAME="__DEFAULT";var qi={},_u=class extends Error{constructor(e,t){super(e),this.response=t}},Wa=class extends ts{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=ds.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(qi[e]!==void 0){qi[e].push({onLoad:t,onProgress:n,onError:i});return}qi[e]=[],qi[e].push({onLoad:t,onProgress:n,onError:i});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=qi[e],d=l.body.getReader(),u=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),f=u?parseInt(u):0,g=f!==0,v=0,m=new ReadableStream({start(p){x();function x(){d.read().then(({done:b,value:y})=>{if(b)p.close();else{v+=y.byteLength;let _=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:f});for(let w=0,S=h.length;w<S;w++){let D=h[w];D.onProgress&&D.onProgress(_)}p.enqueue(y),x()}})}}});return new Response(m)}else throw new _u(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o===void 0)return l.text();{let d=/charset="?([^;"\s]*)"?/i.exec(o),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{ds.add(e,l);let h=qi[e];delete qi[e];for(let d=0,u=h.length;d<u;d++){let f=h[d];f.onLoad&&f.onLoad(l)}}).catch(l=>{let h=qi[e];if(h===void 0)throw this.manager.itemError(e),l;delete qi[e];for(let d=0,u=h.length;d<u;d++){let f=h[d];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Mu=class extends ts{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=ds.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;let o=Na("img");function c(){h(),ds.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(d){h(),i&&i(d),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}};var bs=class extends ts{constructor(e){super(e)}load(e,t,n,i){let s=new pn,a=new Mu(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}},Xr=class extends Et{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Ic=class extends Xr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Hh=new Ee,_m=new M,Mm=new M,qa=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new re(512,512),this.map=null,this.mapPass=null,this.matrix=new Ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ha,this._frameExtents=new re(1,1),this._viewportCount=1,this._viewports=[new ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;_m.setFromMatrixPosition(e.matrixWorld),t.position.copy(_m),Mm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Mm),t.updateMatrixWorld(),Hh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hh),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Hh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Eu=class extends qa{constructor(){super(new Dt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Or*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},ys=class extends Xr{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new Eu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Em=new Ee,Sa=new M,Oh=new M,wu=class extends qa{constructor(){super(new Dt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new re(4,2),this._viewportCount=6,this._viewports=[new ct(2,1,1,1),new ct(0,1,1,1),new ct(3,1,1,1),new ct(1,1,1,1),new ct(3,0,1,1),new ct(1,0,1,1)],this._cubeDirections=[new M(1,0,0),new M(-1,0,0),new M(0,0,1),new M(0,0,-1),new M(0,1,0),new M(0,-1,0)],this._cubeUps=[new M(0,1,0),new M(0,1,0),new M(0,1,0),new M(0,1,0),new M(0,0,1),new M(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Sa.setFromMatrixPosition(e.matrixWorld),n.position.copy(Sa),Oh.copy(n.position),Oh.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Oh),n.updateMatrixWorld(),i.makeTranslation(-Sa.x,-Sa.y,-Sa.z),Em.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Em)}},_s=class extends Xr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new wu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Tu=class extends qa{constructor(){super(new ms(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},jr=class extends Xr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.shadow=new Tu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Ms=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},Dc=class extends Pe{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var Fc=class extends ts{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=ds.get(e);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(l=>{t&&t(l),s.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){return ds.add(e,l),t&&t(l),s.manager.itemEnd(e),l}).catch(function(l){i&&i(l),ds.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});ds.add(e,c),s.manager.itemStart(e)}};var Su=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,a;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,s=e*i+i,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[s+o]=n[o];a=t}else{a+=t;let o=t/a;this._mixBufferRegion(n,s,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){let c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-s,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){o.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,a=i;s!==a;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let a=0;a!==s;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){qe.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){let a=this._workIndex*s;qe.multiplyQuaternionsFlat(e,a,e,t,e,n),qe.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,s){let a=1-i;for(let o=0;o!==s;++o){let c=t+o;e[c]=e[c]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,s){for(let a=0;a!==s;++a){let o=t+a;e[o]=e[o]+e[n+a]*i}}},ju="\\[\\]\\.:\\/",IM=new RegExp("["+ju+"]","g"),Yu="[^"+ju+"]",DM="[^"+ju.replace("\\.","")+"]",FM=/((?:WC+[\/:])*)/.source.replace("WC",Yu),NM=/(WCOD+)?/.source.replace("WCOD",DM),UM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Yu),HM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Yu),OM=new RegExp("^"+FM+NM+UM+HM+"$"),kM=["material","materials","bones","map"],Au=class{constructor(e,t,n){let i=n||Mt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Mt=class r{constructor(e,t,n){this.path=t,this.parsedPath=n||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,n):new r(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(IM,"")}static parseTrackName(e){let t=OM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);kM.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[i];if(a===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Mt.Composite=Au;Mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Mt.prototype.GetterByBindingType=[Mt.prototype._getValue_direct,Mt.prototype._getValue_array,Mt.prototype._getValue_arrayElement,Mt.prototype._getValue_toArray];Mt.prototype.SetterByBindingTypeAndVersioning=[[Mt.prototype._setValue_direct,Mt.prototype._setValue_direct_setNeedsUpdate,Mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_array,Mt.prototype._setValue_array_setNeedsUpdate,Mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_arrayElement,Mt.prototype._setValue_arrayElement_setNeedsUpdate,Mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_fromArray,Mt.prototype._setValue_fromArray_setNeedsUpdate,Mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ru=class{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let s=t.tracks,a=s.length,o=new Array(a),c={endingStart:Ar,endingEnd:Ar};for(let l=0;l!==a;++l){let h=s[l].createInterpolant(null);o[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=ku,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){let i=this._clip.duration,s=e._clip.duration,a=s/i,o=i/s;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,s=i.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);let c=o.parameterPositions,l=o.sampleValues;return c[0]=s,c[1]=s+n,l[0]=e/a,l[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let s=this._startTime;if(s!==null){let c=(e-s)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case tx:for(let h=0,d=c.length;h!==d;++h)c[h].evaluate(a),l[h].accumulateAdditive(o);break;case Bu:default:for(let h=0,d=c.length;h!==d;++h)c[h].evaluate(a),l[h].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,s=this._loopCount,a=n===ex;if(e===0)return s===-1?i:a&&(s&1)===1?t-i:i;if(n===Ou){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){let o=Math.floor(i/t);i-=t*o,s+=Math.abs(o);let c=this.repetitions-s;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){let l=e<0;this._setEndings(l,!l,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=Rr,i.endingEnd=Rr):(e?i.endingStart=this.zeroSlopeAtStart?Rr:Ar:i.endingStart=cc,t?i.endingEnd=this.zeroSlopeAtEnd?Rr:Ar:i.endingEnd=cc)}_scheduleFading(e,t,n){let i=this._mixer,s=i.time,a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,c=a.sampleValues;return o[0]=s,c[0]=t,o[1]=s+e,c[1]=n,this}},BM=new Float32Array(1),Yr=class extends Zi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,a=e._propertyBindings,o=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName,h=l[c];h===void 0&&(h={},l[c]=h);for(let d=0;d!==s;++d){let u=i[d],f=u.name,g=h[f];if(g!==void 0)++g.referenceCount,a[d]=g;else{if(g=a[d],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,f));continue}let v=t&&t._propertyBindings[d].binding.parsedPath;g=new Su(Mt.create(n,f,v),u.ValueTypeName,u.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,f),a[d]=g}o[d].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,s=this._actionsByClip,a=s[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=a;else{let o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let s=e._clip.uuid,a=this._actionsByClip,o=a[s],c=o.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;let d=o.actionByRoot,u=(e._localRoot||this._root).uuid;delete d[u],c.length===0&&delete a[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,s=this._bindings,a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,a=this._bindingsByRootAndName,o=a[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete o[s],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new Pc(new Float32Array(2),new Float32Array(2),1,BM),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){let i=t||this._root,s=i.uuid,a=typeof e=="string"?qr.findByName(i,e):e,o=a!==null?a.uuid:e,c=this._actionsByClip[o],l=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Bu),c!==void 0){let d=c.actionByRoot[s];if(d!==void 0&&d.blendMode===n)return d;l=c.knownActions[0],a===null&&(a=l._clip)}if(a===null)return null;let h=new Ru(this,a,t,n);return this._bindAction(h,l),this._addInactiveAction(h,o,s),h}existingAction(e,t){let n=t||this._root,i=n.uuid,s=typeof e=="string"?qr.findByName(n,e):e,a=s?s.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),a=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,s,a);let o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){let a=s.knownActions;for(let o=0,c=a.length;o!==c;++o){let l=a[o];this._deactivateAction(l);let h=l._cacheIndex,d=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,d._cacheIndex=h,t[h]=d,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let a in n){let o=n[a].actionByRoot,c=o[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(let a in s){let o=s[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var Nc=class{constructor(e,t,n=0,i=1/0){this.ray=new js(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Ua,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Cu(e,this,n,t),n.sort(wm),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Cu(e[i],this,n,t);return n.sort(wm),n}};function wm(r,e){return r.distance-e.distance}function Cu(r,e,t,n){if(r.layers.test(e.layers)&&r.raycast(e,t),n===!0){let i=r.children;for(let s=0,a=i.length;s<a;s++)Cu(i[s],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var Ym={reed:{low:9,det:2.2,fine:.4,mount:330},forest:{low:24,det:6.5,fine:1.1,mount:440},mountain:{low:34,det:5.5,fine:1.2,mount:520,side:!0},meadow:{low:22,det:3.2,fine:.5,mount:380},sea:{low:7,det:2.5,fine:.4,mount:260,sea:!0},city:{low:0,det:0,fine:0,mount:300}},wt={id:"reed",...Ym.reed};function Km(r){Object.assign(wt,{side:!1,sea:!1},Ym[r],{id:r})}function Ze(r,e){let t=Math.imul(r,374761393)+Math.imul(e,668265263)|0;return t=Math.imul(t^t>>>13,1274126177),t^=t>>>16,(t>>>0)/4294967295}function Ut(r,e){let t=Math.floor(r),n=Math.floor(e),i=r-t,s=e-n;i=i*i*(3-2*i),s=s*s*(3-2*s);let a=Ze(t,n),o=Ze(t+1,n),c=Ze(t,n+1),l=Ze(t+1,n+1);return a+(o-a)*i+(c-a)*s+(a-o-c+l)*i*s}function ja(r,e){return wt.low*((Ut(r/1e3+11.3,e/1e3+7.1)-.5)*1.34+(Ut(r/500+3.7,e/500+1.9)-.5)*.66)}function Bc(r,e){return wt.det*(Ut(r/165+5.5,e/165+2.2)-.5)*2+wt.fine*(Ut(r/40+9.1,e/40+4.4)-.5)*2}function zc(r,e){let t=0,n=.62,i=1/1500;for(let s=0;s<4;s++){let a=Ut(r*i+31.7*s,e*i+17.3*s),o=1-Math.abs(a*2-1);t+=n*o*o,n*=.45,i*=2.1}return wt.mount*t}var Zm=`
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
`;var bt={halfWidth:4.6,chunkLen:120,step:2},Jm=4.6,Yt={seg:720,bend:140,hw:7.2,walk:4,side:3.5,sideWalk:2.5,lanes:[1.75,5.25]},zM=[205,445,688],Qm=r=>.9*Math.sin(.0021*r+1)+.5*Math.sin(.0053*r+2.2)+.25*Math.sin(.0117*r+.3),GM=Qm(0),mi={period:2600,start:450,len:800,ramp:70},Ku=(r,e,t)=>{let n=Math.min(1,Math.max(0,(t-r)/(e-r)));return n*n*(3-2*n)},Zu=r=>{let e=Math.sin(r*127.1+311.7)*43758.5453;return e-Math.floor(e)},VM=r=>.07*Math.sin(.9*r)+.045*Math.sin(1.37*r+1.3)+.05*Math.sin(.31*r+2),Gc=class{constructor(){this.pts=[{x:0,z:0,y:ja(0,0)}],this.dirt=!1,this.city=!1,this._cum=[0]}setShape(e){e!==this.city&&(this.city=e,this.pts=[{x:0,z:0,y:0}])}_delta(e){return e<=0||Zu(e*1.37+.5)<.45?0:(Zu(e*2.71+3.3)-.5)*.6-.35*this._sum(e-1)}_sum(e){if(e<0)return 0;for(;this._cum.length<=e;){let t=this._cum.length;this._cum.push(this._cum[t-1]+this._delta(t))}return this._cum[e]}junction(e){let t=Math.floor(e/3),n=e-t*3;return t*Yt.seg+zM[n]+(Zu(e*3.17+1.9)-.5)*(n===2?10:24)}junctionIndex(e){let t=Math.floor(e/Yt.seg)*3-1;for(;this.junction(t)<e;)t++;return t}nearJunction(e){if(!this.city)return null;let t=this.junctionIndex(e),n=this.junction(t-1),i=this.junction(t);return e-n<i-e?n:i}dirtAt(e){if(!this.dirt)return 0;let t=(e%mi.period+mi.period)%mi.period;return Ku(mi.start,mi.start+mi.ramp,t)*(1-Ku(mi.start+mi.len-mi.ramp,mi.start+mi.len,t))}_y(e,t,n){return this.city?0:ja(e,t)+this.dirtAt(n)*VM(n)}heading(e){if(!this.city)return Qm(e)-GM;let t=Math.floor(e/Yt.seg);return this._sum(t-1)+this._delta(t)*Ku(0,Yt.bend,e-t*Yt.seg)}curvature(e){let t=Math.max(0,e-6),n=e+6;return(this.heading(n)-this.heading(t))/(n-t)}ensure(e){this._ensure(Math.ceil(e/bt.step)+1)}_ensure(e){let{step:t}=bt;for(;this.pts.length<=e+1;){let n=this.pts.length-1,i=this.heading(n*t+t/2),s=this.pts[n],a=s.x-Math.sin(i)*t,o=s.z-Math.cos(i)*t;this.pts.push({x:a,z:o,y:this._y(a,o,(n+1)*t)})}}recomputeHeights(){this.pts.forEach((e,t)=>{e.y=this._y(e.x,e.z,t*bt.step)})}at(e,t={}){let{step:n}=bt;e<0&&(e=0);let i=Math.floor(e/n);this._ensure(i+1);let s=(e-i*n)/n,a=this.pts[i],o=this.pts[i+1];return t.x=a.x+(o.x-a.x)*s,t.z=a.z+(o.z-a.z)*s,t.y=a.y+(o.y-a.y)*s,t.th=this.heading(e),t}};var Ci={uMistD:{value:0},uMistH:{value:12},uMistBase:{value:0},uMistCover:{value:.5},uMistT:{value:0},uMistWind:{value:new re},uMistColor:{value:new $}};function $m(){let r=Ye;r.fog_pars_vertex=`
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
#endif`}function Tt(r){let e=r.onBeforeCompile,t=r.customProgramCacheKey,n=e&&e!==mn.prototype.onBeforeCompile;r.onBeforeCompile=function(s,a){n&&e.call(this,s,a),Object.assign(s.uniforms,Ci)};let i=(n?e.toString():"")+(t?t.call(r):"");return r.customProgramCacheKey=()=>i+"#mist",r.needsUpdate=!0,r}function Ya(r,e){let t=document.createElement("canvas");return t.width=r,t.height=e,[t,t.getContext("2d")]}function Qu(r,e=!1){let[i,s]=Ya(512,512);s.fillStyle="#3c3f45",s.fillRect(0,0,512,512);let a=s.getImageData(0,0,512,512);for(let d=0;d<a.data.length;d+=4){let u=(Math.random()-.5)*30;a.data[d]+=u,a.data[d+1]+=u,a.data[d+2]+=u}s.putImageData(a,0,0);let o=512/(bt.halfWidth*2);for(let d of e?[]:[.27,.73]){let u=s.createLinearGradient((d-.09)*512,0,(d+.09)*512,0);u.addColorStop(0,"rgba(0,0,0,0)"),u.addColorStop(.5,"rgba(0,0,0,0.22)"),u.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=u,s.fillRect((d-.09)*512,0,.18*512,512)}s.fillStyle="#dcdcd4";let c=.16*o,l=.35*o;if(e){let d=new yn(i);return d.colorSpace=lt,d.wrapS=d.wrapT=Dn,d.anisotropy=r.capabilities.getMaxAnisotropy(),d}s.fillRect(l,0,c,512),s.fillRect(512-l-c,0,c,512),s.fillStyle="#e9d36a",s.fillRect(512/2-c/2,0,c,512/3);let h=new yn(i);return h.colorSpace=lt,h.wrapS=h.wrapT=Dn,h.anisotropy=r.capabilities.getMaxAnisotropy(),h}function Vc(){let e=document.createElement("canvas");e.width=e.height=128;let t=e.getContext("2d"),n=t.createImageData(128,128);for(let s=0;s<128;s++)for(let a=0;a<128;a++){let o=(a+.5)/128*2-1,c=(s+.5)/128*2-1,l=o*o+c*c,h=Math.min(1,Math.exp(-l*5)*.55+Math.exp(-l*22)*.35+Math.exp(-l*120)*.35)*(1-Math.min(1,l)**4),d=(s*128+a)*4;n.data[d]=n.data[d+1]=n.data[d+2]=255,n.data[d+3]=Math.round(h*255)}t.putImageData(n,0,0);let i=new yn(e);return i.colorSpace=lt,i}function Zr(){let[r,e]=Ya(128,128),t=e.createRadialGradient(64,64,0,64,64,64);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.2,"rgba(255,255,255,0.55)"),t.addColorStop(.5,"rgba(255,255,255,0.12)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128);let n=new yn(r);return n.colorSpace=lt,n}function $u(r){let e=r>>>0;return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function e0(){let[t,n]=Ya(128,360),i=$u(5),s=128/2;n.strokeStyle="#c9bb8e",n.lineWidth=2.2,n.lineCap="round",n.beginPath(),n.moveTo(s,360),n.quadraticCurveTo(s+2,360*.66,s,360*.46),n.stroke();let a=4,o=360*.5,c=d=>5+50*Math.pow(Math.sin(Math.min(1,d*1.15)*Math.PI*.55),.85)*Math.pow(1-d,.6);n.fillStyle="rgba(250,246,234,0.6)",n.beginPath();for(let d=0;d<=24;d++){let u=d/24;n.lineTo(s+c(u)*.6,o-u*(o-a))}for(let d=24;d>=0;d--){let u=d/24;n.lineTo(s-c(u)*.6,o-u*(o-a))}n.closePath(),n.fill();let l=["#ffffff","#fffcf4","#f6f0df","#ede5cf","#fffef9"];for(let d=0;d<1500;d++){let u=Math.pow(i(),.85),f=o-u*(o-a)+i()*6,g=c(u),v=s+(i()*2-1)*g*(.4+.7*i()),m=f-6-i()*30;n.strokeStyle=l[Math.floor(i()*l.length)],n.globalAlpha=.35+i()*.55,n.lineWidth=.7+i()*1.5,n.beginPath(),n.moveTo(s+(i()-.5)*5,f),n.quadraticCurveTo((s+v)/2+(i()-.5)*10,(f+m)/2,v,m),n.stroke()}n.globalAlpha=1;let h=new yn(t);return h.colorSpace=lt,h.anisotropy=4,h}function t0(r){let[t,n]=Ya(512,512),i=$u(23);n.fillStyle="#d6d6d6",n.fillRect(0,0,512,512),n.lineCap="round";for(let a=0;a<16e3;a++){let o=i()*512,c=i()*512,l=3+i()*11,h=-Math.PI/2+(i()-.5)*1.1,d=Math.cos(h)*l,u=Math.sin(h)*l,f=Math.floor(150+i()*105);n.strokeStyle=`rgb(${f},${f},${f})`,n.globalAlpha=.35+i()*.5,n.lineWidth=.7+i()*1.3;for(let g of[-512,0,512])for(let v of[-512,0,512]){let m=o+g,p=c+v;m<-20||m>532||p<-20||p>532||(n.beginPath(),n.moveTo(m,p),n.lineTo(m+d,p+u),n.stroke())}}n.globalAlpha=1;let s=new yn(t);return s.colorSpace=lt,s.wrapS=s.wrapT=Dn,s.anisotropy=r.capabilities.getMaxAnisotropy(),s}function n0(){let[t,n]=Ya(512,256),i=$u(77),s=[];for(let d=0;d<9;d++){let u=i()*Math.PI*2,f=i()*62;s.push([128+Math.cos(u)*f*1.15,120+Math.sin(u)*f*.85,38+i()*34])}let a=(d,u)=>s.some(([f,g,v])=>(d-f)**2+(u-g)**2<v*v),o=["#2f5522","#3d6a2a","#4c7d32","#5c9038","#6fa443","#87b851"];for(let d=0;d<2600;d++){let u=8+i()*240,f=8+i()*230;if(!a(u,f))continue;let g=1-f/256,v=Math.min(o.length-1,Math.floor((i()*.7+g*.55)*o.length));n.fillStyle=o[v],n.beginPath(),n.ellipse(u,f,3+i()*5,2+i()*3.5,i()*Math.PI,0,Math.PI*2),n.fill()}let c=320,l=["#22402a","#2b4f31","#355e39","#3f6d41","#4d7d4a"];for(let d=0;d<2400;d++){let u=Math.pow(i(),.8),f=6+u*236,g=u*7%1,v=(6+u*58)*(.55+.45*g),m=c+(i()*2-1)*v*.25,p=c+(i()*2-1)*v,x=f+4+Math.abs(p-c)*.18+i()*6;n.strokeStyle=l[Math.min(l.length-1,Math.floor((i()*.8+(1-u)*.4)*l.length))],n.lineWidth=1+i()*2.2,n.beginPath(),n.moveTo(m,f),n.lineTo(p,x),n.stroke()}n.fillStyle="#5a4434",n.fillRect(448,0,64,64);let h=new yn(t);return h.colorSpace=lt,h.anisotropy=4,h}var Ju={};function Ks(r,e,{srgb:t=!0,repeat:n=!0}={}){if(Ju[r])return Ju[r];let i=new bs().load("assets/tex/"+r+".webp");return t&&(i.colorSpace=lt),n&&(i.wrapS=i.wrapT=Dn),i.anisotropy=Math.min(8,e.capabilities.getMaxAnisotropy()),Ju[r]=i,i}var id=1100,Ka=22,WM=3200,qM=900,ed=700,td=600,nd=6,_n=r=>{let e=Math.sin(r*127.1+311.7)*43758.5453;return e-Math.floor(e)},i0=r=>470+70*Math.sin(r/650+1.3)+25*Math.sin(r/230);function XM(r){if(_n(r*3.7+1.1)>.8)return null;let e=120+140*_n(r*5.3+2.2);return{t:r,s:r*id+(_n(r*2.9)-.5)*400,len:e,n:Math.round(16+e*.22*(.7+.6*_n(r*7.1))),streets:[0],lat:i0}}var sd=5e3,jM=r=>330+18*Math.sin(r/420);function YM(r){return r<0?null:{t:1e5+r,s:1300+r*sd,len:450,n:220,streets:[0,42,84],lat:jM,big:!0}}function rd(){let r=new ht(1,1,1).translate(0,.5,0).toNonIndexed(),e=.54,t=1,n=1.45,i=[-e,t,-e,e,t,-e,e,n,0,-e,t,-e,e,n,0,-e,n,0,-e,t,e,-e,n,0,e,n,0,-e,t,e,e,n,0,e,t,e,-e,t,-e,-e,n,0,-e,t,e,e,t,-e,e,t,e,e,n,0],s=new Pe;s.setAttribute("position",new Ie(i,3)),s.computeVertexNormals();let a=new Pe,o=r.attributes.position.array,c=r.attributes.normal.array,l=s.attributes.position.array,h=s.attributes.normal.array,d=new Float32Array(o.length+l.length),u=new Float32Array(c.length+h.length);d.set(o),d.set(l,o.length),u.set(c),u.set(h,c.length);let f=new Float32Array(d.length/3);return f.fill(1,o.length/3,d.length/3-6),a.setAttribute("position",new we(d,3)),a.setAttribute("normal",new we(u,3)),a.setAttribute("aRoof",new we(f,1)),a}var KM=`
  uniform float uScale, uFogD;
  varying float vA;
  void main() {
    vec4 mv = viewMatrix * vec4(position, 1.0);
    float fd = uFogD * -mv.z;
    vA = exp(-fd * fd);
    gl_PointSize = clamp(1.6 * uScale / -mv.z, 3.0, 20.0);
    gl_Position = projectionMatrix * mv;
  }`,ZM=`
  uniform vec3 uColor; uniform float uAmt;
  varying float vA;
  void main() {
    float d = length(gl_PointCoord - 0.5) * 2.0;
    float a = (smoothstep(0.35, 0.0, d) + exp(-d * d * 5.0) * 0.4) * vA * uAmt;
    if (a < 0.003) discard;
    gl_FragColor = vec4(uColor * a, 1.0);
  }`,Wc=class{constructor(e){this.group=new Fe,this.group.visible=!1,e.add(this.group),this.uLit={value:0};let t=new Qe({roughness:.85,metalness:0,side:dt});t.onBeforeCompile=s=>{s.uniforms.uLit=this.uLit,s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
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
          totalEmissiveRadiance += winGlow;`)},t.customProgramCacheKey=()=>"valley-house",Tt(t),this.houses=new Ft(rd(),t,ed),this.houses.count=0,this.houses.frustumCulled=!1,this.houses.instanceColor=new Ln(new Float32Array(ed*3),3),this.group.add(this.houses),this.lightPos=new Float32Array(td*3);let n=new Pe;n.setAttribute("position",new we(this.lightPos,3)),n.setDrawRange(0,0),this.lightMat=new vt({uniforms:{uScale:{value:500},uFogD:{value:0},uAmt:{value:0},uColor:{value:new $(8,4.3,1.4)}},vertexShader:KM,fragmentShader:ZM,transparent:!0,depthWrite:!1,blending:$t,fog:!1}),this.lights=new un(n,this.lightMat),this.lights.frustumCulled=!1,this.lights.renderOrder=4,this.group.add(this.lights);let i=Zr();this.hazes=Array.from({length:nd},()=>{let s=new Nn(new Pn({map:i,color:16751184,transparent:!0,opacity:0,depthWrite:!1,blending:$t}));return s.visible=!1,this.group.add(s),s}),this.heights=new Map,this.built=null,this._p={},this._m=new Ee,this._q=new qe,this._v=new M,this._s=new M,this._c=new $,this._up=new M(0,1,0)}set visible(e){this.group.visible=e}get visible(){return this.group.visible}reset(){this.heights.clear(),this.built=null}_h(e,t,n,i){let s=this.heights.get(e);return s===void 0&&(s=i.heightAt(t,n),this.heights.set(e,s)),s}_valley(e,t,n,i,s,a=i0){let o=t.at(e,this._p),c=Math.cos(o.th),l=-Math.sin(o.th),h=-Math.sin(o.th),d=-Math.cos(o.th),u=a(e)+n;return s.x=o.x+c*u+h*i,s.z=o.z+l*u+d*i,s.th=o.th,s}_build(e,t,n){let i=e-qM,s=e+WM,a=this._m,o=this._q,c=this._s,l=this._c,h={},d=0,u=0,f=0,g=[];for(let m=Math.floor(i/id)-1;m<=Math.ceil(s/id)+1;m++){let p=XM(m);p&&p.s>i-p.len&&p.s<s+p.len&&g.push(p)}for(let m=Math.floor((i-1300)/sd);m<=Math.ceil((s-1300)/sd);m++){let p=YM(m);p&&p.s>i-p.len&&p.s<s+p.len&&g.push(p)}for(let m of g){for(let p=0;p<m.n&&d<ed;p++){let x=m.t*1e3+p,b=_n(x*1.3),y=_n(x*2.7+5),_=_n(x*4.1+9),w=_n(x*6.7+3),S=y<.5?-1:1,E=m.streets[Math.floor(_n(x*11.3)*m.streets.length)]+S*(9+(m.big?12:30)*_*_);this._valley(m.s+(b-.5)*m.len,t,E,0,h,m.lat);let T=this._h("h"+x,h.x,h.z,n),F=this._h("b"+x,h.x+7,h.z+7,n);if(Math.abs(F-T)>4)continue;let N=7+5*w,H=6+3*_n(x*8.3),L=(w>.88?8.5:y*7%1>.6?6:3.4)+_n(x*9.9);m.big&&_n(x*12.7)<.14&&(N=14+8*w,H=10+4*_,L=11+9*_n(x*13.1)),o.setFromAxisAngle(this._up,h.th+Math.PI/2+(S>0?0:Math.PI)+(_n(x*3.3)-.5)*.35),a.compose(this._v.set(h.x,Math.min(T,F)-.8,h.z),o,c.set(N,L,H)),this.houses.setMatrixAt(d,a);let A=_n(x*5.9);l.setRGB(...A<.35?[.82,.8,.74]:A<.6?[.86,.75,.55]:A<.8?[.72,.68,.62]:[.62,.66,.68]),this.houses.setColorAt(d,l),d++}if(f<nd){this._valley(m.s,t,m.big?42:0,0,h,m.lat);let p=this.hazes[f++];p.position.set(h.x,this._h("z"+m.t,h.x,h.z,n)+(m.big?40:25),h.z),p.scale.set(m.len*2.2,m.len*(m.big?.8:1.1),1),p.userData.on=!0}}for(let m=f;m<nd;m++)this.hazes[m].userData.on=!1;for(let m of g)if(m.big)for(let p=0;p<m.streets.length;p++)for(let x=-m.len/2;x<=m.len/2&&u<td;x+=Ka){let b=Math.round(x/Ka);this._valley(m.s+x,t,m.streets[p]+(b%2?6:-6),0,h,m.lat);let y=this._h("L"+m.t+"_"+p+"_"+b,h.x,h.z,n);this.lightPos.set([h.x,y+6.5,h.z],u*3),u++}for(let m=Math.floor(i/Ka);m*Ka<s&&u<td;m++){let p=m*Ka,x=!1;for(let _ of g)if(!_.big&&Math.abs(p-_.s)<_.len/2+15){x=!0;break}if(!x&&_n(m*1.7+.3)>.22)continue;let b=x?m%2?6:-6:5;this._valley(p,t,b,0,h);let y=this._h("l"+m,h.x,h.z,n);this.lightPos.set([h.x,y+6.5,h.z],u*3),u++}this.houses.count=d,this.houses.instanceMatrix.needsUpdate=!0,this.houses.instanceColor&&(this.houses.instanceColor.needsUpdate=!0);let v=this.lights.geometry;v.setDrawRange(0,u),v.attributes.position.needsUpdate=!0,this.heights.size>6e3&&this.heights.clear()}update(e,t,n,i,s,a){if(!this.group.visible)return;let o=Math.floor(e/400);this.built!==o&&(this._build(e,t,n),this.built=o),this.uLit.value=i;let c=this.lightMat.uniforms;c.uAmt.value=i,c.uScale.value=s,c.uFogD.value=a,this.lights.visible=i>.02;for(let l of this.hazes)l.visible=l.userData.on&&i>.02,l.material.opacity=.13*i}};var qc=180,JM=1150,QM=260,Pi=.2,Wn=.055,Xc=30,r0='"Hiragino Sans","Hiragino Kaku Gothic ProN","Noto Sans JP","Noto Sans CJK JP","Yu Gothic","Meiryo",sans-serif',$M=[["コンビニ","#1d8f4e","#ffffff"],["ベーカリー","#f3e2c4","#7a4a1f"],["カフェ","#3b2a22","#f2d7a0"],["ドラッグ","#1554a8","#ffe14a"],["ラーメン","#c8231c","#ffffff"],["そば・うどん","#f4efe2","#202020"],["クリーニング","#2a7fc0","#ffffff"],["花屋","#f6c8d4","#6a2440"],["書店","#24456e","#ffffff"],["居酒屋","#2b2b2b","#ff9b3d"],["寿司","#f6f2e8","#b3151a"],["美容室","#ffffff","#333333"],["不動産","#ffd23a","#1b3a7a"],["メガネ","#e6e9ee","#1d4f91"],["焼肉","#151515","#ff4b2b"],["ドーナツ","#ff86b4","#ffffff"]],eE=[["ラーメン","#c8231c","#ffffff"],["カラオケ","#6b2bd9","#ffffff"],["居酒屋","#1b1b1b","#ffb03a"],["薬","#1554a8","#ffffff"],["歯科","#ffffff","#1b6fb8"],["焼肉","#2a0d0a","#ff5a2a"],["ホテル","#0f2d55","#9fe0ff"],["喫茶","#4a2e1f","#ffe3b0"],["不動産","#ffd23a","#112233"],["寿司","#ffffff","#b3151a"],["麻雀","#0d5a2f","#ffffff"],["整骨院","#ffffff","#c21f3a"],["美容室","#f0e6ff","#5a2a8a"],["中華","#d42a1f","#ffd84a"],["クリニック","#e8f6ff","#0d6aa8"],["学習塾","#ff7a00","#ffffff"]],s0=[[.76,.69,.59],[.86,.86,.84],[.67,.68,.69],[.47,.35,.28],[.87,.81,.69],[.63,.69,.73],[.38,.39,.41],[.64,.45,.36]];function ad(r){let e=r>>>0||1;return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Yc(r,e,t,n=!0){let i=document.createElement("canvas");i.width=r,i.height=e,t(i.getContext("2d"),r,e);let s=new yn(i);return n&&(s.colorSpace=lt),s.anisotropy=4,s}function tE(){return Yc(512,768,(r,e)=>{$M.forEach(([t,n,i],s)=>{let a=s*48;r.fillStyle=n,r.fillRect(0,a,e,48),r.fillStyle="rgba(0,0,0,0.25)",r.fillRect(0,a,e,3),r.fillRect(0,a+45,e,3),r.font=`bold 32px ${r0}`;let o=r.measureText(t).width;r.save(),r.translate(e/2,a+25),o>e*.6&&r.scale(e*.6/o,1),r.fillStyle=i,r.textAlign="center",r.textBaseline="middle",r.fillText(t,0,0),r.restore()})})}function nE(){return Yc(1024,512,r=>{eE.forEach(([e,t,n],i)=>{let s=i*64,a=[...e];r.fillStyle=t,r.fillRect(s,0,64,512),r.strokeStyle=n,r.globalAlpha=.5,r.lineWidth=3,r.strokeRect(s+5,5,54,502),r.globalAlpha=1;let o=Math.min(46,440/a.length);r.font=`bold ${o}px ${r0}`,r.fillStyle=n,r.textAlign="center",r.textBaseline="middle";let c=256-(a.length-1)*o*.55;a.forEach((l,h)=>r.fillText(l,s+32,c+h*o*1.1))})})}function iE(){let r=Yc(256,256,e=>{let t=ad(7);for(let i=0;i<4;i++)for(let s=0;s<4;s++){let a=160+Math.floor(t()*22);e.fillStyle=`rgb(${a},${a-2},${a-8})`,e.fillRect(s*64,i*64,64,64)}let n=e.getImageData(0,0,256,256);for(let i=0;i<n.data.length;i+=4){let s=(t()-.5)*18;n.data[i]+=s,n.data[i+1]+=s,n.data[i+2]+=s}e.putImageData(n,0,0),e.fillStyle="rgba(60,58,54,0.55)";for(let i=0;i<4;i++)e.fillRect(i*64,0,2,256),e.fillRect(0,i*64,256,2)});return r.wrapS=r.wrapT=Dn,r}function sE(){return Yc(128,256,r=>{r.fillStyle="#f4f4f2",r.fillRect(0,0,128,256),r.fillStyle="#c62026",r.fillRect(0,0,128,18);let e=["#d33","#25a","#e90","#2a5","#fff","#713","#39c","#cb2"],t=ad(3);for(let n=0;n<3;n++){r.fillStyle="#dfe9f0",r.fillRect(8,24+n*38,112,34);for(let i=0;i<6;i++)r.fillStyle=e[Math.floor(t()*e.length)],r.fillRect(12+i*18,28+n*38,12,22);r.fillStyle="#2b2";for(let i=0;i<6;i++)r.fillRect(14+i*18,52+n*38,8,3)}r.fillStyle="#333",r.fillRect(84,140,30,40),r.fillStyle="#111",r.fillRect(14,200,100,30)})}function rE(){let r=new ht(1,1,1).translate(0,.5,0).toNonIndexed();return r.deleteAttribute("uv"),r.setAttribute("aRoof",new we(new Float32Array(r.attributes.position.count),1)),r}function aE(){let r=[new sn(.12,.17,11,8).translate(0,5.5,0),new ht(.12,.12,2).translate(0,9.6,0),new ht(.1,.1,1.5).translate(0,10.4,0),new sn(.3,.3,.9,10).translate(0,7.6,-.42)].map(i=>{let s=i.index?i.toNonIndexed():i;return s.deleteAttribute("uv"),s}),e=[],t=[];for(let i of r)e.push(...i.attributes.position.array),t.push(...i.attributes.normal.array);let n=new Pe;return n.setAttribute("position",new Ie(e,3)),n.setAttribute("normal",new Ie(t,3)),n}var oE=`#include <common>
attribute float aRoof; attribute vec4 aInfo;
varying vec3 vWall, vNL, vSize; varying float vRoof; varying vec4 vInfo;`,cE=`#include <begin_vertex>
vSize = vec3(length(instanceMatrix[0].xyz), length(instanceMatrix[1].xyz), length(instanceMatrix[2].xyz));
vWall = position * vSize; vNL = normal; vRoof = aRoof; vInfo = aInfo;`,lE=`#include <common>
uniform float uLit; uniform sampler2D uSignTex;
varying vec3 vWall, vNL, vSize; varying float vRoof; varying vec4 vInfo;
float hh(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }`,hE=`#include <color_fragment>
vec3 cEmis = vec3(0.0); float cGlass = 0.0;
{
  float type = vInfo.x, seed = vInfo.y, shop = vInfo.z, row = vInfo.w;
  vec3 wallC = diffuseColor.rgb;
  float roofK = max(vRoof, step(0.5, vNL.y));
  float wall = (1.0 - roofK) * step(abs(vNL.y), 0.5);
  bool front = vNL.z > 0.5;
  bool alongX = abs(vNL.z) > 0.5;
  float u = alongX ? vWall.x : vWall.z;
  float halfW = (alongX ? vSize.x : vSize.z) * 0.5;
  float y = vWall.y;
  vec3 roofC = vRoof > 0.5 ? (seed < 0.4 ? vec3(0.07, 0.08, 0.1) : seed < 0.7 ? vec3(0.18, 0.07, 0.05) : vec3(0.13, 0.14, 0.15)) : vec3(0.17) * (0.85 + 0.3 * seed);
  diffuseColor.rgb = mix(diffuseColor.rgb, roofC, roofK);
  float gf = shop > 0.5 ? 3.6 : 0.0;
  if (front && shop > 0.5 && y < gf && wall > 0.5) {
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
        float bal = step(f.y, 0.36) * step(0.0, yy) * step(y, vSize.y - 0.7);
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
    float inside = step(0.0, yy) * step(y, vSize.y - 0.7) * step(abs(u), halfW - 0.5);
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
}`,jc=class{constructor(e,t,n){this.scene=e,this.road=t,this.roadMat=n,this.group=new Fe,this.group.visible=!1,e.add(this.group),this.blocks=new Map,this.uLit={value:0},this.uSignTex={value:tE()},this.facade=new Qe({roughness:.82,metalness:0}),this.facade.onBeforeCompile=s=>{s.uniforms.uLit=this.uLit,s.uniforms.uSignTex=this.uSignTex,s.vertexShader=s.vertexShader.replace("#include <common>",oE).replace("#include <begin_vertex>",cE),s.fragmentShader=s.fragmentShader.replace("#include <common>",lE).replace("#include <color_fragment>",hE).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
roughnessFactor = mix(roughnessFactor, 0.06, cGlass);`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += cEmis;`)},this.facade.customProgramCacheKey=()=>"city-facade",this.walkMat=new Qe({map:iE(),roughness:.92}),this.markMat=new Qe({vertexColors:!0,roughness:.6,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}),this.poleMat=new Qe({color:9342343,roughness:.85}),this.wireMat=new Qi({color:1776413}),this.uGlow={value:0},this.signMat=new Qe({map:nE(),roughness:.55}),this.signMat.onBeforeCompile=s=>{s.uniforms.uGlow=this.uGlow,s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
attribute float aCell;`).replace("#include <uv_vertex>",`#include <uv_vertex>
vMapUv.x = (vMapUv.x + aCell) / 16.0;`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
uniform float uGlow;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += diffuseColor.rgb * uGlow;`)},this.signMat.customProgramCacheKey=()=>"city-vsign";let i=sE();this.vendBody=new Qe({color:15329766,roughness:.45,metalness:.15}),this.vendFront=new Qe({map:i,emissiveMap:i,emissive:16777215,emissiveIntensity:.3,roughness:.25});for(let s of[this.facade,this.walkMat,this.markMat,this.poleMat,this.wireMat,this.signMat,this.vendBody,this.vendFront])Tt(s);this.boxGeo=rE(),this.houseGeo=rd(),this.poleGeo=aE(),this.signGeo=new ht(1,1,1).translate(0,.5,0),this.vendGeo=new ht(1,1.83,.75).translate(0,.915,0),this._p={},this._q={},this._m=new Ee,this._qt=new qe,this._v=new M,this._s=new M,this._up=new M(0,1,0),this._c=new $,this.lastS=0}set visible(e){this.group.visible=e,e||this.reset()}get visible(){return this.group.visible}reset(){for(let e of this.blocks.values())this._dispose(e);this.blocks.clear()}update(e,t,n=1){if(!this.group.visible)return;this.lastS=e,this.uLit.value=t,this.uGlow.value=.15+1.6*t,this.vendFront.emissiveIntensity=.25+1.1*t;let i=this.road,s=i.junctionIndex(e-QM)-1,a=i.junctionIndex(e+JM),o=[];for(let c=s;c<=a;c++)this.blocks.has(c)||o.push(c);o.sort((c,l)=>Math.abs(i.junction(c)-e)-Math.abs(i.junction(l)-e));for(let c=0;c<n&&c<o.length;c++)this.blocks.set(o[c],this._build(o[c]));for(let[c,l]of this.blocks)(c<s||c>a)&&(this._dispose(l),this.blocks.delete(c))}prime(e){this.group.visible&&this.update(e,this.uLit.value,99)}_dispose(e){this.group.remove(e),e.traverse(t=>{t.isInstancedMesh&&t.dispose(),t.geometry&&t.geometry.userData.own&&t.geometry.dispose()})}_frame(e){let t=this.road.at(e,{});return{x:t.x,z:t.z,rx:Math.cos(t.th),rz:-Math.sin(t.th),fx:-Math.sin(t.th),fz:-Math.cos(t.th),th:t.th}}_build(e){let t=this.road,n=new Fe,i=t.junction(e),s=t.junction(e+1),a=Yt.hw,o=Yt.walk,c=Yt.side,l={pos:[],nor:[],col:[],idx:[]},h={pos:[],nor:[],uv:[],idx:[]},d={pos:[],nor:[],uv:[],idx:[]},u=[.86,.86,.83],f=[.86,.66,.16],g=[.85,.7,.12],v=(W,Y,te,ie,z)=>{let xe=W.pos.length/3;for(let se=0;se<4;se++)W.pos.push(Y[se][0],Y[se][1],Y[se][2]),W.nor.push(te[0],te[1],te[2]),W.col&&W.col.push(...ie),W.uv&&W.uv.push(...z?z[se]:[0,0]);let fe=Y[1][0]-Y[0][0],pe=Y[1][1]-Y[0][1],de=Y[1][2]-Y[0][2],De=Y[2][0]-Y[0][0],Te=Y[2][1]-Y[0][1],P=Y[2][2]-Y[0][2],R=pe*P-de*Te,X=de*De-fe*P,oe=fe*Te-pe*De;R*te[0]+X*te[1]+oe*te[2]>=0?W.idx.push(xe,xe+1,xe+2,xe,xe+2,xe+3):W.idx.push(xe,xe+2,xe+1,xe,xe+3,xe+2)},m=(W,Y,te)=>{let ie=t.at(W,this._p);return[ie.x+Math.cos(ie.th)*Y,te,ie.z-Math.sin(ie.th)*Y]},p=[0,1,0],x=(W,Y,te,ie,z,xe,fe,pe)=>{if(te<=Y)return;let de=Math.max(1,Math.ceil((te-Y)/2));for(let De=0;De<de;De++){let Te=Y+(te-Y)*De/de,P=Y+(te-Y)*(De+1)/de;v(W,[m(Te,ie,xe),m(P,ie,xe),m(P,z,xe),m(Te,z,xe)],p,fe,pe&&[pe(Te,ie),pe(P,ie),pe(P,z),pe(Te,z)])}},b=(W,Y,te,ie,z,xe,fe)=>{let pe=Math.max(1,Math.ceil((te-Y)/2));for(let de=0;de<pe;de++){let De=Y+(te-Y)*de/pe,Te=Y+(te-Y)*(de+1)/pe,P=t.at((De+Te)/2,this._q),R=[-Math.cos(P.th)*fe,0,Math.sin(P.th)*fe];v(W,[m(De,ie,z),m(Te,ie,z),m(Te,ie,xe),m(De,ie,xe)],R,null,[[0,De/2],[0,Te/2],[.1,Te/2],[.1,De/2]])}},y=this._frame(i),_=(W,Y,te)=>[y.x+y.fx*W+y.rx*Y,te,y.z+y.fz*W+y.rz*Y],w=(W,Y,te,ie,z,xe,fe,pe)=>v(W,[_(Y,ie,xe),_(te,ie,xe),_(te,z,xe),_(Y,z,xe)],p,fe,pe&&[pe(Y,ie),pe(te,ie),pe(te,z),pe(Y,z)]);for(let W of[-1,1]){let Y=W*a,te=W*qc;w(d,-c,c,Y,te,.05,null,(ie,z)=>[(ie+c)/(2*c),z/12]);for(let ie of[-1,1])w(h,ie*c,ie*(c+Yt.sideWalk),W*(a+o+.4),te,Pi,null,(z,xe)=>[z/2,xe/2]),v(h,[_(ie*c,W*(a+o+.4),.03),_(ie*c,te,.03),_(ie*c,te,Pi),_(ie*c,W*(a+o+.4),Pi)],[-ie*y.fx,0,-ie*y.fz],null,[[0,0],[0,40],[.1,40],[.1,0]]);for(let ie=-c+.35;ie<c-.3;ie+=.9)w(l,ie,ie+.45,W*(a+.7),W*(a+3.4),Wn,u);w(l,W*.15,W*(c-.2),W*(a+4),W*(a+4.45),Wn,u);for(let ie=a+o+3;ie<qc-3;ie+=6)w(l,-.07,.07,W*ie,W*(ie+3),Wn,u)}for(let W of[-1,1])for(let Y=-a+.35;Y<a-.4;Y+=.9)w(l,W*6.4,W*10.4,Y,Y+.45,Wn,u);w(l,-11.9,-11.45,.2,a-.3,Wn,u),w(l,11.45,11.9,-a+.3,-.2,Wn,u);let S=i+10.4,D=s-10.4;for(let W of[-1,1]){x(l,S,D,W*.1,W*.25,Wn,f),x(l,i+6,s-6,W*(a-.4),W*(a-.25),Wn,u);let Y=i+12,te=s-12;x(l,Y,Math.min(te,Y+30),W*3.42,W*3.58,Wn,u),x(l,Math.max(Y,te-30),te,W*3.42,W*3.58,Wn,u);for(let ie=Math.ceil((Y+30)/10);ie*10+5<te-30;ie++)x(l,ie*10,ie*10+5,W*3.42,W*3.58,Wn,u)}for(let W of Yt.lanes){let Y=s-11.9-8;x(l,Y-3.2,Y,W-.08,W+.08,Wn,u);for(let te=0;te<4;te++){let ie=.45-te*.11;x(l,Y+te*.25,Y+(te+1)*.25,W-ie,W+ie,Wn,u)}}let E=i+c,T=s-c;for(let W of[-1,1]){let Y=W*a,te=W*(a+o+.4);x(h,E,T,Y,te,Pi,null,(ie,z)=>[z/2,ie/2]),b(h,E,T,Y,.03,Pi,W);for(let[ie,z]of[[E,1],[T,-1]]){let xe=t.at(ie,this._q);v(h,[m(ie,Y,.03),m(ie,te,.03),m(ie,te,Pi),m(ie,Y,Pi)],[Math.sin(xe.th)*z,0,Math.cos(xe.th)*z],null,[[0,0],[2,0],[2,.1],[0,.1]])}x(l,E+.5,T-.5,W*(a+2.3),W*(a+2.6),Pi+.006,g)}let F=(W,Y,te,ie)=>{if(!W.idx.length)return null;let z=new Pe;z.setAttribute("position",new Ie(W.pos,3)),z.setAttribute("normal",new Ie(W.nor,3)),te&&z.setAttribute("uv",new Ie(W.uv,2)),ie&&z.setAttribute("color",new Ie(W.col,3)),z.setIndex(W.idx),z.userData.own=!0;let xe=new Ue(z,Y);return xe.receiveShadow=!0,n.add(xe),xe},N=F(d,this.roadMat,!0,!1);N&&(N.geometry.setAttribute("aDirt",new we(new Float32Array(d.pos.length/3),1)),N.layers.set(3)),F(h,this.walkMat,!0,!1),F(l,this.markMat,!1,!0);let H=[],L=[],A=[],C=ad(e*7919+17),U=(W,Y)=>{let te=C();return W===3?2:W===2?5+Math.floor(te*(Y?14:8)):W===1?4+Math.floor(te*(Y?9:6)):2+Math.floor(te*te*5)},O=(W,Y,te,ie,z,xe,fe,pe)=>{let de=U(xe,pe),De=C(),Te=(fe?3.6:0)+de*(xe===2?3.6:xe===3?2.9:3)+(xe===3?0:.6),P=s0[xe===2?C()<.5?2:5:Math.floor(C()*s0.length)];return H.push([W,Y,te,ie,Te,z,xe,De,fe?1:0,Math.floor(C()*16),P,xe===3]),Te},k=W=>{let Y=C();return W?Y<.58?0:Y<.83?1:Y<.96?2:3:Y<.3?3:Y<.6?1:Y<.8?0:2};for(let W of[-1,1]){let Y=i+c+Yt.sideWalk+.4,te=s-c-Yt.sideWalk-.4;for(;Y<te-4;){let fe=Math.min(te-Y,5+9*C()*C()+2*C()),pe=10+8*C(),de=t.at(Y+fe/2,this._p),De=W*(a+o+.4+pe/2),Te=de.x+Math.cos(de.th)*De,P=de.z-Math.sin(de.th)*De,R=de.th+(W>0?-Math.PI/2:Math.PI/2),X=k(!0),oe=X!==3&&C()<.8,se=O(Te,P,R,fe,pe,X,oe,!1);if(X===0&&se>9&&C()<.6){let ae=(C()<.5?-1:1)*(fe/2-.45),Se=pe/2+.42,me=Math.min(se-5,3+4*C()),Ae=Math.cos(R),He=Math.sin(R);L.push([Te+Ae*ae+He*Se,P-He*ae+Ae*Se,R,4.3,me,Math.floor(C()*16)])}if(oe&&C()<.22){let ae=Y+.8+C()*Math.max(.1,fe-1.6),Se=t.at(ae,this._q),me=W*(a+o-.05);A.push([Se.x+Math.cos(Se.th)*me,Se.z-Math.sin(Se.th)*me,R])}Y+=fe+(C()<.3?.4+C()*1.2:.05)}let ie=a+o+19;for(let[fe,pe]of[[i+c+Yt.sideWalk+.3,1],[s-c-Yt.sideWalk-.3,-1]]){let de=this._frame(fe),De=ie;for(;De<qc-8;){let Te=7+7*C(),P=10+6*C(),R=pe*P/2,X=W*(De+Te/2),oe=de.x+de.fx*R+de.rx*X,se=de.z+de.fz*R+de.rz*X,ae=k(!1);O(oe,se,de.th+(pe>0?0:Math.PI),Te,P,ae,ae!==3&&De<70&&C()<.5,De>90),De+=Te+.3+C()*1.5}}let z=i+c+Yt.sideWalk+18,xe=s-c-Yt.sideWalk-18;for(let fe=z;fe<xe-9;fe+=15){let pe=this._frame(fe+7.5);for(let de=ie;de<qc-10;de+=17){if(C()<.15)continue;let De=8+5*C(),Te=9+5*C(),P=W*(de+8.5),R=(C()-.5)*2,X=pe.x+pe.fx*R+pe.rx*P,oe=pe.z+pe.fz*R+pe.rz*P,se=de>90,ae=se&&C()<.12?2:k(!1);O(X,oe,pe.th+(C()<.5?0:Math.PI)+(C()<.5?Math.PI/2:0),De,Te,ae,!1,se)}}}let V=this._m,j=this._qt,ee=this._v,G=this._s,Z=this._c;for(let W of[!1,!0]){let Y=H.filter(fe=>fe[11]===W);if(!Y.length)continue;let te=W?this.houseGeo:this.boxGeo,ie=new Pe;for(let fe of["position","normal","aRoof"])ie.setAttribute(fe,te.attributes[fe].clone());let z=new Float32Array(Y.length*4),xe=new Ft(ie,this.facade,Y.length);xe.instanceColor=new Ln(new Float32Array(Y.length*3),3),Y.forEach(([fe,pe,de,De,Te,P,R,X,oe,se,ae],Se)=>{j.setFromAxisAngle(this._up,de),V.compose(ee.set(fe,-.3,pe),j,G.set(De,W?Te/1:Te+.3,P)),xe.setMatrixAt(Se,V),xe.setColorAt(Se,Z.setRGB(ae[0],ae[1],ae[2],lt)),z.set([R,X,oe,se],Se*4)}),ie.setAttribute("aInfo",new Ln(z,4)),ie.userData.own=!0,xe.castShadow=xe.receiveShadow=!0,xe.frustumCulled=!1,n.add(xe)}if(L.length){let W=new Pe;for(let ie of["position","normal","uv"])W.setAttribute(ie,this.signGeo.attributes[ie].clone());W.setIndex(this.signGeo.index.clone()),W.userData.own=!0;let Y=new Float32Array(L.length),te=new Ft(W,this.signMat,L.length);L.forEach(([ie,z,xe,fe,pe,de],De)=>{j.setFromAxisAngle(this._up,xe),V.compose(ee.set(ie,fe,z),j,G.set(.14,pe,.8)),te.setMatrixAt(De,V),Y[De]=de}),W.setAttribute("aCell",new Ln(Y,1)),te.castShadow=!0,te.frustumCulled=!1,n.add(te)}if(A.length){let W=new Ft(this.vendGeo,[this.vendBody,this.vendBody,this.vendBody,this.vendBody,this.vendFront,this.vendBody],A.length);A.forEach(([Y,te,ie],z)=>{j.setFromAxisAngle(this._up,ie),V.compose(ee.set(Y,Pi,te),j,G.set(1,1,1)),W.setMatrixAt(z,V)}),W.castShadow=!0,W.frustumCulled=!1,n.add(W)}let he=W=>{let Y=W*Xc+8,te=t.nearJunction(Y);return Math.abs(Y-te)<9?null:Y},ue=[],ye=[];for(let W=Math.ceil((i-8)/Xc);W*Xc+8<s;W++){let Y=he(W);if(Y===null)continue;let te=W+1,ie=he(te);ie===null&&(ie=he(++te));for(let z of[-1,1]){let xe=z*(a+.45),fe=t.at(Y,this._p);if(ue.push([fe.x+Math.cos(fe.th)*xe,fe.z-Math.sin(fe.th)*xe,fe.th]),ie===null)continue;let pe=t.at(ie,this._q);for(let[de,De,Te]of[[-.9,9.66,.55],[0,9.66,.55],[.9,9.66,.55],[-.7,10.46,.45],[.7,10.46,.45],[.15,6.3,.8]]){let P=xe+de,R=fe.x+Math.cos(fe.th)*P,X=fe.z-Math.sin(fe.th)*P,oe=pe.x+Math.cos(pe.th)*P,se=pe.z-Math.sin(pe.th)*P,ae=Math.hypot(oe-R,se-X),Se=Te*ae/Xc,me=R,Ae=De,He=X;for(let Je=1;Je<=8;Je++){let le=Je/8,ft=R+(oe-R)*le,tt=X+(se-X)*le,Xe=De-4*Se*le*(1-le);ye.push(me,Ae,He,ft,Xe,tt),me=ft,Ae=Xe,He=tt}}}}if(ue.length){let W=new Ft(this.poleGeo,this.poleMat,ue.length);ue.forEach(([Y,te,ie],z)=>{j.setFromAxisAngle(this._up,ie+Math.PI/2),V.compose(ee.set(Y,Pi,te),j,G.set(1,1,1)),W.setMatrixAt(z,V)}),W.castShadow=!0,W.frustumCulled=!1,n.add(W)}if(ye.length){let W=new Pe;W.setAttribute("position",new Ie(ye,3)),W.userData.own=!0;let Y=new Ai(W,this.wireMat);Y.frustumCulled=!1,n.add(Y)}return this.group.add(n),n}};function Es(r,e=!1){let t=r[0].index!==null,n=new Set(Object.keys(r[0].attributes)),i=new Set(Object.keys(r[0].morphAttributes)),s={},a={},o=r[0].morphTargetsRelative,c=new Pe,l=0;for(let h=0;h<r.length;++h){let d=r[h],u=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(d.attributes[f]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(d.morphAttributes[f])}if(e){let f;if(t)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(t){let h=0,d=[];for(let u=0;u<r.length;++u){let f=r[u].index;for(let g=0;g<f.count;++g)d.push(f.getX(g)+h);h+=r[u].attributes.position.count}c.setIndex(d)}for(let h in s){let d=a0(s[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,d)}for(let h in a){let d=a[h][0].length;if(d===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let v=0;v<a[h].length;++v)f.push(a[h][v][u]);let g=a0(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function a0(r){let e,t,n,i=-1,s=0;for(let l=0;l<r.length;++l){let h=r[l];if(h.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.array.length}let a=new e(s),o=0;for(let l=0;l<r.length;++l)a.set(r[l].array,o),o+=r[l].array.length;let c=new we(a,t,n);return i!==void 0&&(c.gpuType=i),c}function o0(r,e=1e-4){e=Math.max(e,Number.EPSILON);let t={},n=r.getIndex(),i=r.getAttribute("position"),s=n?n.count:i.count,a=0,o=Object.keys(r.attributes),c={},l={},h=[],d=["getX","getY","getZ","getW"],u=["setX","setY","setZ","setW"];for(let x=0,b=o.length;x<b;x++){let y=o[x],_=r.attributes[y];c[y]=new we(new _.array.constructor(_.count*_.itemSize),_.itemSize,_.normalized);let w=r.morphAttributes[y];w&&(l[y]=new we(new w.array.constructor(w.count*w.itemSize),w.itemSize,w.normalized))}let f=e*.5,g=Math.log10(1/e),v=Math.pow(10,g),m=f*v;for(let x=0;x<s;x++){let b=n?n.getX(x):x,y="";for(let _=0,w=o.length;_<w;_++){let S=o[_],D=r.getAttribute(S),E=D.itemSize;for(let T=0;T<E;T++)y+=`${~~(D[d[T]](b)*v+m)},`}if(y in t)h.push(t[y]);else{for(let _=0,w=o.length;_<w;_++){let S=o[_],D=r.getAttribute(S),E=r.morphAttributes[S],T=D.itemSize,F=c[S],N=l[S];for(let H=0;H<T;H++){let L=d[H],A=u[H];if(F[A](a,D[L](b)),E)for(let C=0,U=E.length;C<U;C++)N[C][A](a,E[C][L](b))}}t[y]=a,h.push(a),a++}}let p=r.clone();for(let x in r.attributes){let b=c[x];if(p.setAttribute(x,new we(b.array.slice(0,a*b.itemSize),b.itemSize,b.normalized)),x in l)for(let y=0;y<l[x].length;y++){let _=l[x][y];p.morphAttributes[x][y]=new we(_.array.slice(0,a*_.itemSize),_.itemSize,_.normalized)}}return p.setIndex(h),p}function od(r,e){if(e===Fm)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Xa||e===Hc){let t=r.getIndex();if(t===null){let a=[],o=r.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);r.setIndex(a),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}let n=t.count-2,i=[];if(e===Xa)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}var{chunkLen:Jr,step:Kc}=bt,Li=bt.halfWidth,c0=7,cd=1;var uE=r=>r.index?r.toNonIndexed():r;function dE(r){return Es(r.map(e=>{let t=uE(e);return t.deleteAttribute("uv"),t}))}function l0(r,e){let t=[],n=[],i=[],s=[],[a,o,c]=r.center,l=(f,g,v,m,p)=>{let x=new M(f-a,(g-o)*.7,v-c).normalize().add(new M(0,.35,0)).normalize();t.push(f,g,v),n.push(x.x,x.y,x.z),i.push(m,p)};for(let f of r.yaws){let g=Math.cos(f),v=Math.sin(f),m=t.length/3,p=r.w/2,x=r.h/2;l(a-p*g,o-x,c-p*v,r.u0,0),l(a+p*g,o-x,c+p*v,r.u1,0),l(a+p*g,o+x,c+p*v,r.u1,1),l(a-p*g,o+x,c-p*v,r.u0,1),s.push(m,m+1,m+2,m,m+2,m+3)}if(r.top){let f=t.length/3,g=r.top/2,v=r.topY;l(a-g,v,c-g,r.u0,0),l(a+g,v,c-g,r.u1,0),l(a+g,v,c+g,r.u1,1),l(a-g,v,c+g,r.u0,1),s.push(f,f+1,f+2,f,f+2,f+3)}let h=new Pe;h.setAttribute("position",new Ie(t,3)),h.setAttribute("normal",new Ie(n,3)),h.setAttribute("uv",new Ie(i,2)),h.setIndex(s);let d=new sn(e.r0,e.r1,e.h,6).translate(0,e.h/2,0),u=d.attributes.uv;for(let f=0;f<u.count;f++)u.setXY(f,.94,.88);return Es([d,h])}function h0(){return l0({center:[0,4.7,0],w:5.4,h:5,yaws:[0,Math.PI/3,2*Math.PI/3],u0:0,u1:.5,top:4.4,topY:5},{r0:.16,r1:.26,h:3})}function u0(){return l0({center:[0,5.1,0],w:3.8,h:8.2,yaws:[0,Math.PI/3,2*Math.PI/3],u0:.5,u1:.75},{r0:.13,r1:.22,h:1.8})}var Za=11.1,fE=Za-.22,ld=3,hd=Object.freeze({intensity:28,distance:118,angle:1.2,penumbra:.8,decay:.6,glowOpacity:.9,glowSize:9,color:"#ffc98a"});function pE(){return dE([new sn(.08,.13,Za,6).translate(0,Za/2,0),new ht(1.9,.08,.1).translate(-.9,Za,0),new ht(.5,.1,.22).translate(-1.75,Za-.07,0)])}var mE=`#include <common>
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
}`,gE=`
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
`,vE=`
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
}`,Zc=class{constructor(e,t,n){this.scene=e,this.road=t,this.chunks=new Map,this.queue=[],this.tmp={},this.map="reed",this.lastS=150,this.roadTex=Qu(n),this.cityTex=Qu(n,!0),this.roadMat=new Qe({map:this.roadTex,roughness:.9,metalness:0,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),this.roadU={uWet:{value:0},uPuddle:{value:0},uRain:{value:0},uRainT:{value:0},uReflTex:{value:null},uReflMat:{value:new Ee},uReflOn:{value:0},uPlaneY:{value:0},uSunHide:{value:0},uDirtTex:{value:Ks("dirt",n)},uGrassCol:{value:new $("#5c6b34")}},this.roadMat.onBeforeCompile=s=>{Object.assign(s.uniforms,this.roadU),s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vRW;
attribute float aDirt;
varying float vDirt;`).replace("#include <project_vertex>",`#include <project_vertex>
vRW = (modelMatrix * vec4(transformed, 1.0)).xyz;
vDirt = aDirt;`),s.fragmentShader=s.fragmentShader.replace("#include <common>",mE).replace("#include <map_fragment>",`#include <map_fragment>
`+gE).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
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
reflectedLight.directSpecular *= 1.0 - uSunHide * puddle;`).replace("#include <opaque_fragment>",vE+`
#include <opaque_fragment>`)},this.railMat=new Qe({color:12172996,roughness:.35,metalness:.75,side:dt}),this.poleMat=new Qe({color:4869973,roughness:.6,metalness:.4}),this.postMat=new Qe({color:15263968,roughness:.7}),this.bulbMat=new Jt({color:16767392,toneMapped:!1});let i=Zr();this.glowMat=new di({map:i,color:16763274,size:9,transparent:!0,opacity:0,depthWrite:!1,blending:$t,sizeAttenuation:!0});for(let s of[this.roadMat,this.poleMat,this.postMat,this.bulbMat,this.glowMat,this.railMat])Tt(s);this.lampOn=0,this.lampTune={...hd},this.lampLights=Array.from({length:ld},()=>{let s=new ys(16763274,0,80,1.2,.8,.6);return this.scene.add(s,s.target),s}),this._lampList=[],this.lampGeo=pE(),this.railPostGeo=new ht(.12,.8,.12).translate(0,.4,0),this.postGeo=new ht(.12,.95,.12).translate(0,.475,0),this.bulbGeo=new fi(.2,8,6)}setMap(e){this.map=e,Li=bt.halfWidth,this.roadMat.map=e==="city"?this.cityTex:this.roadTex;for(let t of this.chunks.values())this._dispose(t);this.chunks.clear(),this.queue.length=0,this.prime(this.lastS)}update(e,t=2){this.lastS=e;let n=Math.floor(e/Jr);for(let i=Math.max(0,n-cd);i<=n+c0;i++)!this.chunks.has(i)&&!this.queue.includes(i)&&this.queue.push(i);this.queue.sort((i,s)=>i-s);for(let i=0;i<t&&this.queue.length;i++){let s=this.queue.shift();s>=n-cd&&s<=n+c0&&this._build(s)}for(let[i,s]of this.chunks)i<n-cd&&(this._dispose(s),this.chunks.delete(i))}prime(e){this.update(e,999)}apply(e){let t=e.lamps,n=new $(9079430).lerp(new $(this.lampTune.color),t);this.bulbMat.color.copy(n).multiplyScalar(.6+1.6*t),this.lampOn=t,this.glowMat.opacity=t*this.lampTune.glowOpacity,this.glowMat.size=this.lampTune.glowSize,this.glowMat.color.set(this.lampTune.color),this.roadMat.roughness=.92-.3*e.wet,this.roadMat.envMapIntensity=.38+.3*e.wet;let i=(1-.4*e.wet)*(1-.25*e.dark);this.roadMat.color.setRGB(i,i,i);let s=this.roadU;s.uWet.value=e.wet,s.uPuddle.value=e.wet,s.uRain.value=e.rain,s.uSunHide.value=Math.min(1,e.overcast*1.2+e.rain)}updateLights(e){let t=this._lampList;t.length=0;for(let i of this.chunks.values())for(let s of i.userData.lamps||[]){let[a]=s;t.push({L:s,d:Math.hypot(a[0]-e.x,a[1]-e.y,a[2]-e.z)})}t.sort((i,s)=>i.d-s.d);let n=t.length>ld?t[ld].d:1/0;this.lampLights.forEach((i,s)=>{let a=t[s];if(!a||this.lampOn<=0){i.intensity=0;return}let o=n===1/0?1:Math.min(1,Math.max(0,(n-a.d)/(.3*n))),[c,l]=a.L;i.position.set(c[0],c[1],c[2]),i.target.position.set(l[0],l[1],l[2]),i.target.updateMatrixWorld();let h=this.lampTune;i.color.set(h.color),i.distance=h.distance,i.angle=h.angle,i.penumbra=h.penumbra,i.decay=h.decay,i.intensity=h.intensity*this.lampOn*o*o*(3-2*o)})}hitLamp(e,t,n,i,s=48){let a=new M;for(let o of this.chunks.values())for(let[c]of o.userData.lamps||[]){if(a.set(c[0],c[1],c[2]).project(e),a.z<-1||a.z>1)continue;let l=i.left+(a.x+1)*i.width*.5,h=i.top+(1-a.y)*i.height*.5;if(Math.hypot(t-l,n-h)<=s)return!0}return!1}setReflection(e,t){let n=this.roadU;n.uRainT.value=t,n.uReflOn.value=e.active?1:0,e.active&&(n.uReflTex.value=e.rt.texture,n.uReflMat.value.copy(e.texMatrix),n.uPlaneY.value=e.planeY)}_build(e){let t=new Fe,n=this.road,i=e*Jr,s=this.tmp,a=Jr/Kc,o=new Float32Array((a+1)*6),c=new Float32Array((a+1)*4),l=new Float32Array((a+1)*6),h=new Float32Array((a+1)*2),d=[];for(let A=0;A<=a;A++){let C=i+A*Kc;n.at(C,s);let U=Math.cos(s.th),O=-Math.sin(s.th),k=s.y+.05;o.set([s.x-U*Li,k,s.z-O*Li,s.x+U*Li,k,s.z+O*Li],A*6),c.set([0,C/12,1,C/12],A*4),l.set([0,1,0,0,1,0],A*6);let V=n.dirtAt(C);if(h[A*2]=h[A*2+1]=V,A<a){let j=A*2;d.push(j,j+1,j+2,j+1,j+3,j+2)}}let u=new Pe;u.setAttribute("position",new we(o,3)),u.setAttribute("normal",new we(l,3)),u.setAttribute("uv",new we(c,2)),u.setAttribute("aDirt",new we(h,1)),u.setIndex(d),u.computeVertexNormals();let f=new Ue(u,this.roadMat);f.receiveShadow=!0,f.layers.set(3),t.add(f),t.userData.own=[u];let g=[];for(let A=i;A<i+Jr&&this.map!=="city";A+=12)if(!(n.dirtAt(A)>.05)){n.at(A,s);for(let C of this.map==="mountain"?[-1]:[-1,1])g.push([s.x+Math.cos(s.th)*(Li+.7)*C,s.y,s.z-Math.sin(s.th)*(Li+.7)*C])}let v=new Ft(this.postGeo,this.postMat,g.length),m=new Ee;if(g.forEach(([A,C,U],O)=>{m.makeTranslation(A,C,U),v.setMatrixAt(O,m)}),t.add(v),this.map==="mountain"){let A=Jr/Kc,C=new Float32Array((A+1)*6),U=[],O=[];for(let ee=0;ee<=A;ee++){let G=i+ee*Kc;n.at(G,s);let Z=s.x+Math.cos(s.th)*(Li+.55),he=s.z-Math.sin(s.th)*(Li+.55);if(C.set([Z,s.y+.5,he,Z,s.y+.82,he],ee*6),ee<A){let ue=ee*2;U.push(ue,ue+2,ue+1,ue+1,ue+2,ue+3)}ee%2===0&&O.push([Z,s.y,he])}let k=new Pe;k.setAttribute("position",new we(C,3)),k.setIndex(U),k.computeVertexNormals();let V=new Ue(k,this.railMat);V.castShadow=!0,t.add(V),t.userData.own.push(k);let j=new Ft(this.railPostGeo,this.poleMat,O.length);O.forEach(([ee,G,Z],he)=>{m.makeTranslation(ee,G,Z),j.setMatrixAt(he,m)}),t.add(j)}let p=[],x=[],b=[],y=this.map==="city",_=y?4:this.map==="reed"?2:1,w=Jr/_;for(let A=0;A<_;A++){let C=i+A*w+(y?21:6);if(n.dirtAt(C)>.05)continue;if(y){let Z=n.nearJunction(C);if(Z!==null&&Math.abs(C-Z)<16)continue}n.at(C,s);let U=this.map==="mountain"?-1:Math.round(C/w)%2?1:-1,O=Li+(y?.9:1.4),k=s.x+Math.cos(s.th)*O*U,V=s.z-Math.sin(s.th)*O*U,j=s.th+(U===1?0:Math.PI);p.push([k,s.y,V,j]);let ee=-Math.cos(j)*1.75,G=Math.sin(j)*1.75;x.push([k+ee,s.y+fE,V+G]),b.push([k+ee*4.5,s.y,V+G*4.5])}let S=new Ft(this.lampGeo,this.poleMat,p.length),D=new qe,E=new M(0,1,0),T=new M(1,1,1),F=new M;p.forEach(([A,C,U,O],k)=>{D.setFromAxisAngle(E,O),m.compose(F.set(A,C,U),D,T),S.setMatrixAt(k,m)}),S.castShadow=!0,t.add(S);let N=new Ft(this.bulbGeo,this.bulbMat,x.length);x.forEach(([A,C,U],O)=>{m.makeTranslation(A,C,U),N.setMatrixAt(O,m)}),t.add(N);let H=new Pe;H.setAttribute("position",new Ie(x.flat(),3));let L=new un(H,this.glowMat);L.frustumCulled=!1,L.renderOrder=3,t.add(L),t.userData.own.push(H),t.userData.lamps=x.map((A,C)=>[A,b[C]]),this.scene.add(t),this.chunks.set(e,t)}_dispose(e){this.scene.remove(e),e.userData.own.forEach(t=>t.dispose()),e.traverse(t=>{t.isInstancedMesh&&t.dispose()})}};var Ss=class extends ts{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new vd(t)}),this.register(function(t){return new Sd(t)}),this.register(function(t){return new Ad(t)}),this.register(function(t){return new Rd(t)}),this.register(function(t){return new bd(t)}),this.register(function(t){return new yd(t)}),this.register(function(t){return new _d(t)}),this.register(function(t){return new Md(t)}),this.register(function(t){return new gd(t)}),this.register(function(t){return new Ed(t)}),this.register(function(t){return new xd(t)}),this.register(function(t){return new Td(t)}),this.register(function(t){return new wd(t)}),this.register(function(t){return new pd(t)}),this.register(function(t){return new Cd(t)}),this.register(function(t){return new Pd(t)})}load(e,t,n,i){let s=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=Ms.extractUrlBase(e);a=Ms.resolveURL(l,this.path)}else a=Ms.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){i?i(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new Wa(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,a,function(h){t(h),s.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s,a={},o={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===g0){try{a[ut.KHR_BINARY_GLTF]=new Ld(e)}catch(d){i&&i(d);return}s=JSON.parse(a[ut.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Od(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let d=this.pluginCallbacks[h](l);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[d.name]=d,a[d.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){let d=s.extensionsUsed[h],u=s.extensionsRequired||[];switch(d){case ut.KHR_MATERIALS_UNLIT:a[d]=new md;break;case ut.KHR_DRACO_MESH_COMPRESSION:a[d]=new Id(s,this.dracoLoader);break;case ut.KHR_TEXTURE_TRANSFORM:a[d]=new Dd;break;case ut.KHR_MESH_QUANTIZATION:a[d]=new Fd;break;default:u.indexOf(d)>=0&&o[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}};function xE(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}var ut={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},pd=class{constructor(e){this.parser=e,this.name=ut.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e],l,h=new $(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],en);let d=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new jr(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new _s(h),l.distance=d;break;case"spot":l=new ys(h),l.distance=d,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Ts(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},md=class{constructor(){this.name=ut.KHR_MATERIALS_UNLIT}getMaterialType(){return Jt}extendParams(e,t,n){let i=[];e.color=new $(1,1,1),e.opacity=1;let s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],en),e.opacity=a[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,lt))}return Promise.all(i)}},gd=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}},vd=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new re(o,o)}return Promise.all(s)}},xd=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}},bd=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[];t.sheenColor=new $(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],en)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,lt)),a.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}},yd=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(s)}},_d=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new $().setRGB(o[0],o[1],o[2],en),Promise.all(s)}},Md=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}},Ed=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new $().setRGB(o[0],o[1],o[2],en),a.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,lt)),Promise.all(s)}},wd=class{constructor(e){this.parser=e,this.name=ut.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(s)}},Td=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(s)}},Sd=class{constructor(e){this.parser=e,this.name=ut.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let s=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}},Ad=class{constructor(e){this.parser=e,this.name=ut.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;let a=s.extensions[t],o=i.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Rd=class{constructor(e){this.parser=e,this.name=ut.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;let a=s.extensions[t],o=i.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Cd=class{constructor(e){this.name=ut.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){let c=i.byteOffset||0,l=i.byteLength||0,h=i.count,d=i.byteStride,u=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,d,u,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(h*d);return a.decodeGltfBuffer(new Uint8Array(f),h,d,u,i.mode,i.filter),f})})}else return null}},Pd=class{constructor(e){this.name=ut.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==ti.TRIANGLES&&l.mode!==ti.TRIANGLE_STRIP&&l.mode!==ti.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let h=l.pop(),d=h.isGroup?h.children:[h],u=l[0].count,f=[];for(let g of d){let v=new Ee,m=new M,p=new qe,x=new M(1,1,1),b=new Ft(g.geometry,g.material,u);for(let y=0;y<u;y++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,y),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,y),c.SCALE&&x.fromBufferAttribute(c.SCALE,y),b.setMatrixAt(y,v.compose(m,p,x));for(let y in c)if(y==="_COLOR_0"){let _=c[y];b.instanceColor=new Ln(_.array,_.itemSize,_.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&g.geometry.setAttribute(y,c[y]);Et.prototype.copy.call(b,g),this.parser.assignFinalMaterial(b),f.push(b)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},g0="glTF",Ja=12,d0={JSON:1313821514,BIN:5130562},Ld=class{constructor(e){this.name=ut.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Ja),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==g0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-Ja,s=new DataView(e,Ja),a=0;for(;a<i;){let o=s.getUint32(a,!0);a+=4;let c=s.getUint32(a,!0);if(a+=4,c===d0.JSON){let l=new Uint8Array(e,Ja+a,o);this.content=n.decode(l)}else if(c===d0.BIN){let l=Ja+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Id=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ut.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let h in a){let d=Ud[h]||h.toLowerCase();o[d]=a[h]}for(let h in e.attributes){let d=Ud[h]||h.toLowerCase();if(a[h]!==void 0){let u=n.accessors[e.attributes[h]],f=Qr[u.componentType];l[d]=f.name,c[d]=u.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(d,u){i.decodeDracoFile(h,function(f){for(let g in f.attributes){let v=f.attributes[g],m=c[g];m!==void 0&&(v.normalized=m)}d(f)},o,l,en,u)})})}},Dd=class{constructor(){this.name=ut.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Fd=class{constructor(){this.name=ut.KHR_MESH_QUANTIZATION}},Jc=class extends gs{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=i-t,d=(n-t)/h,u=d*d,f=u*d,g=e*l,v=g-l,m=-2*f+3*u,p=f-u,x=1-m,b=p-u+d;for(let y=0;y!==o;y++){let _=a[v+y+o],w=a[v+y+c]*h,S=a[g+y+o],D=a[g+y]*h;s[y]=x*_+b*w+m*S+p*D}return s}},bE=new qe,Nd=class extends Jc{interpolate_(e,t,n,i){let s=super.interpolate_(e,t,n,i);return bE.fromArray(s).normalize().toArray(s),s}},ti={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Qr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},f0={9728:jt,9729:Zt,9984:oc,9985:Uu,9986:Aa,9987:Ti},p0={33071:Gn,33648:Fa,10497:Dn},ud={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ud={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ws={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},yE={CUBICSPLINE:void 0,LINEAR:Xs,STEP:Hr},dd={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function _E(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Qe({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:wi})),r.DefaultMaterial}function Zs(r,e,t){for(let n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Ts(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function ME(r,e,t){let n=!1,i=!1,s=!1;for(let l=0,h=e.length;l<h;l++){let d=e[l];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(i=!0),d.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);let a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){let d=e[l];if(n){let u=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):r.attributes.position;a.push(u)}if(i){let u=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):r.attributes.normal;o.push(u)}if(s){let u=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):r.attributes.color;c.push(u)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let h=l[0],d=l[1],u=l[2];return n&&(r.morphAttributes.position=h),i&&(r.morphAttributes.normal=d),s&&(r.morphAttributes.color=u),r.morphTargetsRelative=!0,r})}function EE(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function wE(r){let e,t=r.extensions&&r.extensions[ut.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+fd(t.attributes):e=r.indices+":"+fd(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+fd(r.targets[n]);return e}function fd(r){let e="",t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function Hd(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function TE(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var SE=new Ee,Od=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new xE,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,s=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,s=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&s<98?this.textureLoader=new bs(this.options.manager):this.textureLoader=new Fc(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Wa(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return Zs(s,o,i),Ts(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){let a=t[i].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){let a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),s=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,h]of a.children.entries())s(h,o.children[l])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ut.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(s,a){n.load(Ms.resolveURL(t.uri,i.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let a=ud[i.type],o=Qr[i.componentType],c=i.normalized===!0,l=new o(i.count*a);return Promise.resolve(new we(l,a,c))}let s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(a){let o=a[0],c=ud[i.type],l=Qr[i.componentType],h=l.BYTES_PER_ELEMENT,d=h*c,u=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0,v,m;if(f&&f!==d){let p=Math.floor(u/f),x="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count,b=t.cache.get(x);b||(v=new l(o,p*f,i.count*f/h),b=new Gr(v,f/h),t.cache.add(x,b)),m=new Ys(b,c,u%f/h,g)}else o===null?v=new l(i.count*c):v=new l(o,u,i.count*c),m=new we(v,c,g);if(i.sparse!==void 0){let p=ud.SCALAR,x=Qr[i.sparse.indices.componentType],b=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,_=new x(a[1],b,i.sparse.count*p),w=new l(a[2],y,i.sparse.count*c);o!==null&&(m=new we(m.array.slice(),m.itemSize,m.normalized));for(let S=0,D=_.length;S<D;S++){let E=_[S];if(m.setX(E,w[S*c]),c>=2&&m.setY(E,w[S*c+1]),c>=3&&m.setZ(E,w[S*c+2]),c>=4&&m.setW(E,w[S*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){let t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){let i=this,s=this.json,a=s.textures[e],o=s.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let u=(s.samplers||{})[a.sampler]||{};return h.magFilter=f0[u.magFilter]||Zt,h.minFilter=f0[u.minFilter]||Ti,h.wrapS=p0[u.wrapS]||Dn,h.wrapT=p0[u.wrapT]||Dn,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());let a=i.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(d){l=!0;let u=new Blob([d],{type:a.mimeType});return c=o.createObjectURL(u),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(d){return new Promise(function(u,f){let g=u;t.isImageBitmapLoader===!0&&(g=function(v){let m=new pn(v);m.needsUpdate=!0,u(m)}),t.load(Ms.resolveURL(d,s.path),g,void 0,f)})}).then(function(d){return l===!0&&o.revokeObjectURL(c),d.userData.mimeType=a.mimeType||TE(a.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),d});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){let s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[ut.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[ut.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=s.associations.get(a);a=s.extensions[ut.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,c)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new di,mn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Qi,mn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||s||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),s&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Qe}loadMaterial(e){let t=this,n=this.json,i=this.extensions,s=n.materials[e],a,o={},c=s.extensions||{},l=[];if(c[ut.KHR_MATERIALS_UNLIT]){let d=i[ut.KHR_MATERIALS_UNLIT];a=d.getMaterialType(),l.push(d.extendParams(o,s,t))}else{let d=s.pbrMetallicRoughness||{};if(o.color=new $(1,1,1),o.opacity=1,Array.isArray(d.baseColorFactor)){let u=d.baseColorFactor;o.color.setRGB(u[0],u[1],u[2],en),o.opacity=u[3]}d.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",d.baseColorTexture,lt)),o.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,o.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",d.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",d.metallicRoughnessTexture))),a=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=dt);let h=s.alphaMode||dd.OPAQUE;if(h===dd.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===dd.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==Jt&&(l.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new re(1,1),s.normalTexture.scale!==void 0)){let d=s.normalTexture.scale;o.normalScale.set(d,d)}if(s.occlusionTexture!==void 0&&a!==Jt&&(l.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==Jt){let d=s.emissiveFactor;o.emissive=new $().setRGB(d[0],d[1],d[2],en)}return s.emissiveTexture!==void 0&&a!==Jt&&l.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,lt)),Promise.all(l).then(function(){let d=new a(o);return s.name&&(d.name=s.name),Ts(d,s),t.associations.set(d,{materials:e}),s.extensions&&Zs(i,d,s),d})}createUniqueName(e){let t=Mt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[ut.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return m0(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],h=wE(l),d=i[h];if(d)a.push(d.promise);else{let u;l.extensions&&l.extensions[ut.KHR_DRACO_MESH_COMPRESSION]?u=s(l):u=m0(new Pe,l,t),i[h]={primitive:l,promise:u},a.push(u)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,i=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let h=a[c].material===void 0?_E(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],d=[];for(let f=0,g=h.length;f<g;f++){let v=h[f],m=a[f],p,x=l[f];if(m.mode===ti.TRIANGLES||m.mode===ti.TRIANGLE_STRIP||m.mode===ti.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new Mc(v,x):new Ue(v,x),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===ti.TRIANGLE_STRIP?p.geometry=od(p.geometry,Hc):m.mode===ti.TRIANGLE_FAN&&(p.geometry=od(p.geometry,Xa));else if(m.mode===ti.LINES)p=new Ai(v,x);else if(m.mode===ti.LINE_STRIP)p=new Vr(v,x);else if(m.mode===ti.LINE_LOOP)p=new wc(v,x);else if(m.mode===ti.POINTS)p=new un(v,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&EE(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),Ts(p,s),m.extensions&&Zs(i,p,m),t.assignFinalMaterial(p),d.push(p)}for(let f=0,g=d.length;f<g;f++)t.associations.set(d[f],{meshes:e,primitives:f});if(d.length===1)return s.extensions&&Zs(i,d[0],s),d[0];let u=new Fe;s.extensions&&Zs(i,u,s),t.associations.set(u,{meshes:e});for(let f=0,g=d.length;f<g;f++)u.add(d[f]);return u})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Dt(Nt.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new ms(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Ts(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let s=i.pop(),a=i,o=[],c=[];for(let l=0,h=a.length;l<h;l++){let d=a[l];if(d){o.push(d);let u=new Ee;s!==null&&u.fromArray(s.array,l*16),c.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Ec(o,c)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,a=[],o=[],c=[],l=[],h=[];for(let d=0,u=i.channels.length;d<u;d++){let f=i.channels[d],g=i.samplers[f.sampler],v=f.target,m=v.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,x=i.parameters!==void 0?i.parameters[g.output]:g.output;v.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",x)),l.push(g),h.push(v))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(d){let u=d[0],f=d[1],g=d[2],v=d[3],m=d[4],p=[];for(let x=0,b=u.length;x<b;x++){let y=u[x],_=f[x],w=g[x],S=v[x],D=m[x];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();let E=n._createAnimationTracks(y,_,w,S,D);if(E)for(let T=0;T<E.length;T++)p.push(E[T])}return new qr(s,void 0,p)})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){let a=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=i.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));let c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(a),c]).then(function(l){let h=l[0],d=l[1],u=l[2];u!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(u,SE)});for(let f=0,g=d.length;f<g;f++)h.add(d[f]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let s=t.nodes[e],a=s.name?i.createUniqueName(s.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(l){return i._getNodeRef(i.cameraCache,s.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(s.isBone===!0?h=new Ba:l.length>1?h=new Fe:l.length===1?h=l[0]:h=new Et,h!==l[0])for(let d=0,u=l.length;d<u;d++)h.add(l[d]);if(s.name&&(h.userData.name=s.name,h.name=a),Ts(h,s),s.extensions&&Zs(n,h,s),s.matrix!==void 0){let d=new Ee;d.fromArray(s.matrix),h.applyMatrix4(d)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,s=new Fe;n.name&&(s.name=i.createUniqueName(n.name)),Ts(s,n),n.extensions&&Zs(t,s,n);let a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,d=c.length;h<d;h++)s.add(c[h]);let l=h=>{let d=new Map;for(let[u,f]of i.associations)(u instanceof mn||u instanceof pn)&&d.set(u,f);return h.traverse(u=>{let f=i.associations.get(u);f!=null&&d.set(u,f)}),d};return i.associations=l(s),s})}_createAnimationTracks(e,t,n,i,s){let a=[],o=e.name?e.name:e.uuid,c=[];ws[s.path]===ws.weights?e.traverse(function(u){u.morphTargetInfluences&&c.push(u.name?u.name:u.uuid)}):c.push(o);let l;switch(ws[s.path]){case ws.weights:l=$i;break;case ws.rotation:l=Ri;break;case ws.position:case ws.scale:l=es;break;default:switch(n.itemSize){case 1:l=$i;break;case 2:case 3:default:l=es;break}break}let h=i.interpolation!==void 0?yE[i.interpolation]:Xs,d=this._getArrayFromAccessor(n);for(let u=0,f=c.length;u<f;u++){let g=new l(c[u]+"."+ws[s.path],t.array,d,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Hd(t.constructor),i=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof Ri?Nd:Jc;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function AE(r,e,t){let n=e.attributes,i=new zt;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new M(c[0],c[1],c[2]),new M(l[0],l[1],l[2])),o.normalized){let h=Hd(Qr[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=e.targets;if(s!==void 0){let o=new M,c=new M;for(let l=0,h=s.length;l<h;l++){let d=s[l];if(d.POSITION!==void 0){let u=t.json.accessors[d.POSITION],f=u.min,g=u.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),u.normalized){let v=Hd(Qr[u.componentType]);c.multiplyScalar(v)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}r.boundingBox=i;let a=new Vn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=a}function m0(r,e,t){let n=e.attributes,i=[];function s(a,o){return t.getDependency("accessor",a).then(function(c){r.setAttribute(o,c)})}for(let a in n){let o=Ud[a]||a.toLowerCase();o in r.attributes||i.push(s(n[a],o))}if(e.indices!==void 0&&!r.index){let a=t.getDependency("accessor",e.indices).then(function(o){r.setIndex(o)});i.push(a)}return pt.workingColorSpace!==en&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${pt.workingColorSpace}" not supported.`),Ts(r,e),AE(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?ME(r,e.targets,t):r})}var $r=(function(){"use strict";var r="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?e:r,s,a=WebAssembly.instantiate(o(i),{}).then(function(p){s=p.instance,s.exports.__wasm_call_ctors()});function o(p){for(var x=new Uint8Array(p.length),b=0;b<p.length;++b){var y=p.charCodeAt(b);x[b]=y>96?y-97:y>64?y-39:y+4}for(var _=0,b=0;b<p.length;++b)x[_++]=x[b]<60?n[x[b]]:(x[b]-60)*64+x[++b];return x.buffer.slice(0,_)}function c(p,x,b,y,_,w){var S=s.exports.sbrk,D=b+3&-4,E=S(D*y),T=S(_.length),F=new Uint8Array(s.exports.memory.buffer);F.set(_,T);var N=p(E,b,y,T,_.length);if(N==0&&w&&w(E,D,y),x.set(F.subarray(E,E+b*y)),S(E-S(0)),N!=0)throw new Error("Malformed buffer data: "+N)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},d=[],u=0;function f(p){var x={object:new Worker(p),pending:0,requests:{}};return x.object.onmessage=function(b){var y=b.data;x.pending-=y.count,x.requests[y.id][y.action](y.value),delete x.requests[y.id]},x}function g(p){for(var x="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(o(i))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+c.toString()+m.toString(),b=new Blob([x],{type:"text/javascript"}),y=URL.createObjectURL(b),_=0;_<p;++_)d[_]=f(y);URL.revokeObjectURL(y)}function v(p,x,b,y,_){for(var w=d[0],S=1;S<d.length;++S)d[S].pending<w.pending&&(w=d[S]);return new Promise(function(D,E){var T=new Uint8Array(b),F=u++;w.pending+=p,w.requests[F]={resolve:D,reject:E},w.object.postMessage({id:F,count:p,size:x,source:T,mode:y,filter:_},[T.buffer])})}function m(p){a.then(function(){var x=p.data;try{var b=new Uint8Array(x.count*x.size);c(s.exports[x.mode],b,x.count,x.size,x.source,s.exports[x.filter]),self.postMessage({id:x.id,count:x.count,action:"resolve",value:b},[b.buffer])}catch(y){self.postMessage({id:x.id,count:x.count,action:"reject",value:y})}})}return{ready:a,supported:!0,useWorkers:function(p){g(p)},decodeVertexBuffer:function(p,x,b,y,_){c(s.exports.meshopt_decodeVertexBuffer,p,x,b,y,s.exports[l[_]])},decodeIndexBuffer:function(p,x,b,y){c(s.exports.meshopt_decodeIndexBuffer,p,x,b,y)},decodeIndexSequence:function(p,x,b,y){c(s.exports.meshopt_decodeIndexSequence,p,x,b,y)},decodeGltfBuffer:function(p,x,b,y,_,w){c(s.exports[h[_]],p,x,b,y,s.exports[l[w]])},decodeGltfBufferAsync:function(p,x,b,y,_){return d.length>0?v(p,x,b,h[y],l[_]):a.then(function(){var w=new Uint8Array(p*x);return c(s.exports[h[y]],w,p,x,b,s.exports[l[_]]),w})}}})();var Qc={uNearR:{value:0},uNearC:{value:new re}},RE={broad:["CommonTree_1","CommonTree_2","CommonTree_3","CommonTree_4","CommonTree_5"],pine:["Pine_1","Pine_2","Pine_3","Pine_4","Pine_5"],plant:["Fern_1","Fern_1","Fern_1","Plant_1_Big"]},CE={broad:7.2,pine:9.2},v0=240,x0=1100,b0=55,$c=class{constructor(e){this.group=new Fe,e.add(this.group),this.ready=!1,this.radius=0,this.models={},this.rockGeos=null,this._last=new M(1e9,0,0),this._m4=new Ee,this._q=new qe,this._s=new M,this._p=new M,this._up=new M(0,1,0)}async load(e){let t=new Ss;t.setMeshoptDecoder($r);let i=(await t.loadAsync(e)).scene;i.updateMatrixWorld(!0);let s=[];for(let a of i.children){let o=a.name,c=new zt().setFromObject(a),l=c.max.y-c.min.y,h=[];a.traverse(d=>{if(!d.isMesh)return;let u=PE(d.geometry).applyMatrix4(d.matrixWorld);if(u.translate(0,-c.min.y-.05,0),/^Rock_/.test(o)){s.push(u);return}let f=d.material;f.side=dt,f.map&&/leaf|leaves|grass/i.test(f.name+f.map.name)&&(f.alphaTest=.4,f.transparent=!1),f.envMapIntensity=.7,Tt(f);let g=[v0,x0].map((v,m)=>{let p=new Ft(u,f,v);return p.count=0,p.castShadow=m===0,p.receiveShadow=!0,p.frustumCulled=!1,p.layers.set(3),this.group.add(p),p});h.push(g)}),h.length&&(this.models[o]={parts:h,h:l})}return this.rockGeos=s.map(a=>{a.computeBoundingBox();let o=a.boundingBox,c=1/Math.max(o.max.x-o.min.x,o.max.z-o.min.z);return a.translate(-(o.min.x+o.max.x)/2,-o.min.y-.08,-(o.min.z+o.max.z)/2),a.scale(c,c,c),a}),this.ready=!0,this}setRadius(e){if(this.radius=e,Qc.uNearR.value=this.ready?e:0,this._last.set(1e9,0,0),!e)for(let t in this.models)for(let n of this.models[t].parts)n[0].count=0,n[1].count=0}update(e,t){if(Qc.uNearC.value.set(e.x,e.z),!this.ready||!this.radius||this._last.distanceToSquared(e)<4)return;this._last.copy(e);let n=this.radius,i=n*n,s={},a=b0*b0;for(let d in this.models)s[d]=[[],[]];for(let d of t.tiles.values()){let u=d.userData.near;if(!u)continue;let f=d.userData.box,g=Math.max(f[0]-e.x,0,e.x-f[2]),v=Math.max(f[1]-e.z,0,e.z-f[3]);if(!(g*g+v*v>i))for(let m of u){let p=m[1]-e.x,x=m[3]-e.z,b=p*p+x*x;if(b>i)continue;let y=RE[m[0]],_=y[Math.floor(m[6]*4.999)%y.length];if(!s[_])continue;let w=b>a?1:0,S=s[_][w];S.length<(w?x0:v0)&&S.push(m)}}let o=this._m4,c=this._q,l=this._s,h=this._p;for(let d in this.models){let{parts:u,h:f}=this.models[d],g=s[d],v=d.startsWith("Pine")?"pine":d.startsWith("Common")?"broad":"plant",m=v==="plant"?1:CE[v]/f;for(let p of u)p.forEach((x,b)=>{g[b].forEach((y,_)=>{c.setFromAxisAngle(this._up,y[5]);let w=y[4]*m;o.compose(h.set(y[1],y[2],y[3]),c,l.set(w,w*(.92+y[6]*.16),w)),x.setMatrixAt(_,o)}),x.count=g[b].length,x.instanceMatrix.needsUpdate=!0})}}};function PE(r){let e=r.clone();for(let t of Object.keys(e.attributes)){let n=e.attributes[t];if(n.array instanceof Float32Array&&!n.isInterleavedBufferAttribute)continue;let i=new Float32Array(n.count*n.itemSize),s=[n.getX,n.getY,n.getZ,n.getW];for(let a=0;a<n.count;a++)for(let o=0;o<n.itemSize;o++)i[a*n.itemSize+o]=s[o].call(n,a);e.setAttribute(t,new we(i,n.itemSize))}return e}var w0=2,Vd=1.3,LE=27.119*w0,zd=-1.317*Vd,T0=1.754*Vd,IE=.8*Vd/w0,Gd=76,kd=10,DE=8,FE=6.333*Math.SQRT2,y0=[-.5/99,2.25/99],el=.1,NE=4,Qa=1.5,_0=120,S0=400,UE=8,HE=6e3,OE=bt.halfWidth+1.2,kE=bt.halfWidth+16,Wd=7,tl=27,Bd=12;function BE(r){let e=(r%1+1)%1,t=Math.sin(Math.PI*e)**2;return{a:el+(1-el)*t,b:el+(1-el)*(1-t)}}function A0(r,e){let t=new Pe;return t.setAttribute("position",new Ie(r,3)),t.setAttribute("normal",new Ie(r.map((n,i)=>i%3===1?1:0),3)),t.setIndex(e),t}function M0(r,e,t=0){let n=Math.round(2*r/e),i=[],s=[];for(let a=0;a<=n;a++)for(let o=0;o<=n;o++)i.push(-r+o*e,0,-r+a*e);for(let a=0;a<n;a++)for(let o=0;o<n;o++){let c=-r+o*e,l=-r+a*e;if(t&&c>=-t-1e-6&&c+e<=t+1e-6&&l>=-t-1e-6&&l+e<=t+1e-6)continue;let h=a*(n+1)+o,d=h+1,u=h+n+1,f=u+1;s.push(h,u,d,d,u,f)}return A0(i,s)}function zE(){let r=S0,e=HE,t=[-r,0,-r,r,0,-r,r,0,r,-r,0,r,-e,0,-e,e,0,-e,e,0,e,-e,0,e],n=[];for(let i=0;i<4;i++){let s=i,a=(i+1)%4,o=i+4,c=(i+1)%4+4;n.push(s,o,a,a,o,c)}return A0(t,n)}var E0=`
uniform sampler2D uWave;
uniform float uFrame, uFrameB, uWA, uWB, uSea, uLod, uT;
uniform vec3 uCamW;
uniform vec3 uRoad[${tl}];
const float TILE = ${LE.toFixed(3)};
const mat2 ROT = mat2(0.906, 0.423, -0.423, 0.906);      // ô sóng xoay ~25° so với trục thế giới
float oLod = 0.0;                                         // mức mipmap (fragment: theo khoảng cách)
// Mỗi ô 128 px gồm 100 px dữ liệu + viền lặp 14 px: mipmap ≤ 2.5 không trộn khung bên cạnh.
vec3 waveFrame(vec2 uv, float f) {
  vec2 c = fract(uv);
  vec2 o = vec2(mod(f, ${kd}.0), floor(f / ${kd}.0));
  return textureLod(uWave, (o * 128.0 + 14.5 + c * 99.0) / vec2(${kd*128}.0, ${DE*128}.0), oLod).rgb;
}
// một lớp: giữa khung f0 và f1, dời mẫu theo hướng trôi (bù chuyển động) rồi mới trộn
vec3 waveLayer(vec2 uv, float fr) {
  float f0 = floor(fr), t = fr - f0, f1 = mod(f0 + 1.0, ${Gd}.0);
  vec2 v = vec2(${y0[0].toFixed(5)}, ${y0[1].toFixed(5)});
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
  float h = mix(${zd.toFixed(3)}, ${T0.toFixed(3)}, a.r);
  vec2 sl = (a.gb - 0.5) * ${(2*IE).toFixed(3)};
  return vec3(h, sl * ROT);                                // độ dốc theo trục thế giới
}
`;function GE(r){let e=new Qe({color:16777215,roughness:.05,metalness:0,transparent:!0,depthWrite:!0});return e.onBeforeCompile=t=>{Object.assign(t.uniforms,r),t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
${E0}
varying vec3 vOW; varying float vDepth, vShore;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        vec3 ow = (modelMatrix * vec4(transformed, 1.0)).xyz;
        float camD = length(ow.xz - uCamW.xz);
        vec3 wv = waveAt(ow.xz);
        float fadeH = 1.0 - smoothstep(80.0, 112.0, camD);           // xa: chỉ còn pháp tuyến, mặt phẳng (lưới gần rộng ±120 m)
        transformed.y += wv.x * fadeH;
        // độ sâu ước lượng: khoảng cách tới tim đường + cao độ đường => cao độ đê (cùng công thức xẻ đường của terrain.js)
        float dm = 1e9, ry = uSea + 10.0;
        for (int i = 0; i < ${tl-1}; i++) {
          vec2 a = uRoad[i].xz, b = uRoad[i + 1].xz, ab = b - a;
          float t = clamp(dot(ow.xz - a, ab) / dot(ab, ab), 0.0, 1.0);
          float d = length(ow.xz - a - ab * t);
          if (d < dm) { dm = d; ry = mix(uRoad[i].y, uRoad[i + 1].y, t); }
        }
        float ground = mix(ry - 0.02, uSea - ${Wd.toFixed(1)}, smoothstep(${OE.toFixed(2)}, ${kE.toFixed(2)}, dm));
        vDepth = uSea + wv.x * fadeH - ground;
        vShore = 1.0 - smoothstep(30.0, 60.0, dm);
        vOW = ow; vOW.y += wv.x * fadeH;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
${E0}
varying vec3 vOW; varying float vDepth, vShore;
float oFoam = 0.0;
        float oHash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
        float oNoise(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
          return mix(mix(oHash(i), oHash(i + vec2(1.0, 0.0)), f.x), mix(oHash(i + vec2(0.0, 1.0)), oHash(i + vec2(1.0, 1.0)), f.x), f.y); }`).replace("#include <map_fragment>",`
        float camD = length(vOW.xz - uCamW.xz);
        oLod = clamp(log2(camD * camD / uLod), 0.0, 2.5);           // xa / nhìn xiên: mipmap thô hơn (ô 128 px có viền đệm => tối đa ~2.5)
        vec3 wv = waveAt(vOW.xz);
        float crest = smoothstep(0.55, 1.0, (wv.x - ${zd.toFixed(3)}) / ${(T0-zd).toFixed(3)}) * (1.0 - smoothstep(60.0, 200.0, camD));
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
        }`)},e.customProgramCacheKey=()=>"ocean",Tt(e)}var nl=class{constructor(e){this.group=new Fe,this.group.visible=!1,e.add(this.group),this.level=0,this.roadPts=Array.from({length:tl},()=>new M),this.u={uWave:{value:null},uFrame:{value:0},uFrameB:{value:0},uWA:{value:1},uWB:{value:0},uT:{value:0},uSea:{value:0},uLod:{value:3e3},uCamW:{value:new M},uRoad:{value:this.roadPts}},this.material=null,this._p={}}_build(){let e=new bs().load("assets/tex/ocean-waves.png?v="+NE);e.flipY=!1,e.colorSpace=bn,e.generateMipmaps=!0,e.minFilter=Ti,e.magFilter=Zt,this.u.uWave.value=e,this.material=GE(this.u);for(let t of[M0(_0,Qa),M0(S0,UE,_0),zE()]){let n=new Ue(t,this.material);n.frustumCulled=!1,n.receiveShadow=!0,n.renderOrder=1,this.group.add(n)}}setMap(e,t=0){this.group.visible=e,this.level=t,e&&!this.material&&this._build()}update(e,t,n,i){if(!this.group.visible)return;this.group.position.set(Math.round(t.x/Qa)*Qa,this.level,Math.round(t.z/Qa)*Qa);let s=this.u,a=e/FE%1,o=BE(a);s.uFrame.value=a*Gd,s.uT.value=e%1e3,s.uFrameB.value=(a+.5)%1*Gd,s.uWA.value=o.a,s.uWB.value=o.b,s.uSea.value=this.level,s.uCamW.value.copy(t),s.uLod.value=1500*Math.max(1,(t.y-this.level)/3);let c=this._p,l=Math.round(i/Bd)*Bd;for(let h=0;h<tl;h++)n.at(Math.max(0,l+(h-13)*Bd),c),this.roadPts[h].set(c.x,c.y,c.z)}};var R0=32,VE=64,qd=8192,kt=bt.halfWidth,I0=kt+1.2,$a=kt+16,WE=()=>{kt=bt.halfWidth,I0=kt+1.2,$a=kt+16},Xd=1e6,mt=(r,e,t)=>{let n=Math.min(1,Math.max(0,(t-r)/(e-r)));return n*n*(3-2*n)},Ht=r=>new $(r),C0={forest:{a:Ht("#7fa443"),b:Ht("#a9b85a"),c:Ht("#5c8036"),snowLine:215,trees:!0},reed:{a:Ht("#ad9b5c"),b:Ht("#c5b37b"),c:Ht("#8c8a50"),snowLine:240,trees:!1},mountain:{a:Ht("#789a45"),b:Ht("#9eaa5a"),c:Ht("#557236"),snowLine:300,trees:!0},meadow:{a:Ht("#6f9a4c"),b:Ht("#86ad5c"),c:Ht("#5c8541"),snowLine:400,trees:!1,bare:!0},sea:{a:Ht("#cbb98c"),b:Ht("#bba97c"),c:Ht("#7f8f55"),snowLine:600,trees:!1,bare:!0},city:{a:Ht("#77787a"),b:Ht("#828280"),c:Ht("#6c6e6c"),snowLine:900,trees:!1,bare:!0}},qE=Ht("#5f7f45"),XE=Ht("#3e5d2b"),P0=Ht("#8a8072"),jd=Ht("#6b6259"),jE=Ht("#eef2f6"),YE=Ht("#8f887c"),KE=Ht("#5f6c36"),L0={64:1,128:.5,256:.22,512:.08},ZE={64:1,128:.7,256:.4,512:.16},il=class{constructor(e,t,n){this.road=t,this.group=new Fe,e.add(this.group),this.tiles=new Map,this.view=1,this.keep=L0,this.queue=[],this.queued=new Set,this.iCar=0,this.uCover={value:0},this.mat=new Qe({vertexColors:!0,map:t0(n),roughness:.96,metalness:0,envMapIntensity:.8}),this.texU={uRock:{value:Ks("rock",n)},uRockN:{value:Ks("rock_n",n,{srgb:!1})},uGravel:{value:Ks("gravel",n)},uDirt:{value:Ks("dirt",n)}},this.mat.onBeforeCompile=s=>{s.uniforms.uCover=this.uCover,Object.assign(s.uniforms,this.texU),s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
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
          }`)},this.treeMat=new Qe({map:n0(),alphaTest:.45,side:dt,roughness:.92});let i=s=>{Object.assign(s.uniforms,Qc),s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
uniform float uNearR;
uniform vec2 uNearC;`).replace("#include <begin_vertex>",`#include <begin_vertex>
          vec3 ipos = (modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;
          transformed *= smoothstep(uNearR - 1.0, uNearR + 1.0, distance(ipos.xz, uNearC));`)};this.treeMat.onBeforeCompile=s=>{i(s),s.fragmentShader=s.fragmentShader.replace("#include <normal_fragment_begin>",Ye.normal_fragment_begin.replace("normal *= faceDirection;",""))},this.treeDepth=new Oa({depthPacking:zu,map:this.treeMat.map,alphaTest:.45,side:dt}),this.treeDepth.onBeforeCompile=i,Tt(this.mat),Tt(this.treeMat),this.geos={pine:u0(),broad:h0()},this.rockGeos=[0,1,2].map(s=>Yd(s)),this.rockMat=new Qe({roughness:1,metalness:0,envMapIntensity:.35}),this.rockMat.onBeforeCompile=s=>{Object.assign(s.uniforms,this.texU),s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
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
          diffuseColor.rgb *= mix(vec3(dot(rt, vec3(0.3, 0.59, 0.11))), rt, 0.25) * 1.7;`)},Tt(this.rockMat),this._nd=Xd,this._ny=0,this._nl=0,this._d=Xd,this._rc=new $,this._white=new $(1,1,1)}setCar(e){this.iCar=Math.floor(e/bt.step)}_samples(e,t,n,i,s,a,o){let c=this.road.pts,l=[],h=Math.max(0,a),d=Math.min(c.length-1,o);for(let u=h-h%s;u<=d;u+=s){if(u<h)continue;let f=c[u];f.x>=e&&f.x<=n&&f.z>=t&&f.z<=i&&l.push(u)}return l}_nearFine(e,t,n){let i=this.road.pts,s=1/0,a=-1;for(let h=0;h<n.length;h++){let d=i[n[h]],u=e-d.x,f=t-d.z,g=u*u+f*f;g<s&&(s=g,a=n[h])}if(a<0)return!1;let o=1/0,c=i[a].y,l=0;for(let h=a-1;h<=a;h++){if(h<0||h+1>=i.length)continue;let d=i[h],u=i[h+1],f=u.x-d.x,g=u.z-d.z,v=f*f+g*g,m=Math.max(0,Math.min(1,((e-d.x)*f+(t-d.z)*g)/v)),p=e-d.x-f*m,x=t-d.z-g*m,b=Math.hypot(p,x);b<o&&(o=b,c=d.y+(u.y-d.y)*m,l=(p*-g+x*f)/Math.sqrt(v))}return this._nd=o,this._ny=c,this._nl=l,this._ns=a*bt.step,!0}_height(e,t,n,i){let s=this.road.pts,a=wt.side,o=1/0,c=0,l=0;for(let g=0;g<i.length;g++){let v=i[g],m=s[v],p=e-m.x,x=t-m.z,b=p*p+x*x;if(b<o&&(o=b),a&&v+1<s.length){let y=s[v+1],_=y.x-m.x,w=y.z-m.z,S=Math.hypot(_,w)||1,D=(p*-w+x*_)/S,E=1/(b*b+1e4);c+=E,l+=E*D}}let h=Math.sqrt(o),d=ja(e,t)+Bc(e,t),u=0;this._d=Xd,this._s=-1,this._rel=0;let f=h-70<$a&&this._nearFine(e,t,n);if(wt.sea)d=(wt.seaLevel??-10)-Wd+Bc(e,t)*.6,h>400&&(d+=Math.max(0,zc(e,t)/wt.mount-.42)*2.6*wt.mount*mt(400,1200,h));else if(a){let g=c>0?l/c:0;f&&(g=this._nl+(g-this._nl)*mt(25,60,this._nd));let v=-g,m=.75+.5*Ut(e/220+4.4,t/220+9.9);if(v>0){d+=(360*(1-Math.exp(-v/210))+.2*v)*m;let p=mt(2,18,v)*(1-.5*mt(350,900,v));if(p>0){let x=1-Math.abs(Ut(e/42+1.7,t/42+6.3)*2-1),b=1-Math.abs(Ut(e/16+8.1,t/16+2.9)*2-1);u=(x*x-.45)*42+(b*b-.45)*15+(Ut(e/85+3.3,t/85+7.7)-.5)*34,d+=u*p,this._rel=u*Math.max(p,.5);let y=d/10,_=y-Math.floor(y);d+=((Math.floor(y)+mt(.3,.7,_))*10-d)*.75*p*mt(.25,.55,Ut(e/120+5.1,t/120+1.3))}}else d-=250*(1-Math.exp(v/170));d+=Bc(e*1.7,t*1.7)*.8,Math.abs(v)>650&&(d+=zc(e,t)*mt(650,1500,Math.abs(v)))}else h>500&&(d+=zc(e,t)*mt(500,1600,h));if(f){this._d=this._nd,this._s=this._ns;let g=mt(I0,$a,this._nd),v=this._ny-.02;d=v+(d-v)*g,a&&this._nl<0&&(d=Math.max(v,d+Math.max(u,-8)*mt(kt+1.5,kt+8,this._nd)*(1-g)))}return d}heightAt(e,t){let n=$a+80,i=this._samples(e-n,t-n,e+n,t+n,1,this.iCar-300,this.iCar+300),s=this._samples(e-1700,t-1700,e+1700,t+1700,25,this.iCar-2500,this.iCar+4e3);return this._height(e,t,i,s)}_color(e,t,n,i,s,a,o,c=0){let l=C0[wt.id],h=Ut(e/150+2.3,t/150+6.1),d=Ut(e/37+8.8,t/37+1.2);o.copy(l.a).lerp(l.b,mt(.3,.75,h)).lerp(l.c,mt(.45,.9,d)*.55),wt.id==="city"&&o.lerp(qE,mt(1,20,n)),l.trees&&o.lerp(XE,mt(.44,.66,Ut(e/260+3.1,t/260+8.7))*.6);let u=a>=0?this.road.dirtAt(a):0,f=u*(1-mt(kt+1,kt+28,s));f>0&&o.lerp(KE,f*.75);let g=1-i;o.lerp(jd,mt(110,220,n)*.45);let v=mt(.22,.4,g);if(v>0){let b=.72+.4*Ut((e+t)/9+1.3,n/2.6)+.18*(d-.5);this._rc.copy(d>.5?P0:jd).multiplyScalar(b),o.lerp(this._rc,v)}let m=mt(l.snowLine+(h-.5)*60,l.snowLine+50,n)*(1-mt(.5,.75,g));o.lerp(jE,m);let p=(1-(wt.id==="forest"?mt(kt+.2,kt+1.1,s):mt(kt+1,kt+3.2,s)))*(1-u);o.lerp(YE,p);let x=wt.id==="mountain"?mt(70,190,n)*(1-v)*(1-m)*mt(.35,.7,d+.3*h)*.8:0;return this._mixG=Math.max(p,x),this._mixD=f*mt(.25,.6,Ut(e/9+5.5,t/9+2.2)*.7+.5*(1-mt(kt+1,kt+9,s))),c&&o.multiplyScalar(.62+.58*mt(-16,16,c)),o}_build(e,t,n){let i=R0,s=n/i,a=i+3,o=$a+80,c=this.iCar-2500,l=this.iCar+4e3,h=this._samples(e-o,t-o,e+n+o,t+n+o,1,c,l),d=this._samples(e-1700,t-1700,e+n+1700,t+n+1700,25,c,l),u=new Float32Array(a*a),f=new Float32Array(a*a),g=new Float32Array(a*a),v=new Float32Array(a*a);for(let U=0;U<a;U++)for(let O=0;O<a;O++)u[U*a+O]=this._height(e+(O-1)*s,t+(U-1)*s,h,d),f[U*a+O]=this._d,g[U*a+O]=this._s,v[U*a+O]=this._rel;let m=(i+1)*(i+1),p=4*(i+1),x=new Float32Array((m+p)*3),b=new Float32Array((m+p)*3),y=new Float32Array((m+p)*3),_=new Float32Array((m+p)*2),w=new Float32Array((m+p)*2),S=new $,D=new Float32Array(m);for(let U=0;U<=i;U++)for(let O=0;O<=i;O++){let k=(U+1)*a+(O+1),V=U*(i+1)+O,j=e+O*s,ee=t+U*s,G=u[k],Z=u[k-1]-u[k+1],he=2*s,ue=u[k-a]-u[k+a],ye=Math.hypot(Z,he,ue);Z/=ye,he/=ye,ue/=ye,D[V]=he,x.set([j,G,ee],V*3),b.set([Z,he,ue],V*3),this._color(j,ee,G,he,f[k],g[k],S,v[k]),y.set([S.r,S.g,S.b],V*3),w[V*2]=this._mixG,w[V*2+1]=this._mixD,_.set([j/6,ee/6],V*2)}let E=[];for(let U=0;U<i;U++)for(let O=0;O<i;O++){let k=U*(i+1)+O,V=k+1,j=k+i+1,ee=j+1;E.push(k,j,V,V,j,ee)}let T=s*1.5+1,F=[Array.from({length:i+1},(U,O)=>O),Array.from({length:i+1},(U,O)=>i*(i+1)+O),Array.from({length:i+1},(U,O)=>O*(i+1)),Array.from({length:i+1},(U,O)=>O*(i+1)+i)],N=m;for(let U of F){let O=N;for(let k of U)x.set([x[k*3],x[k*3+1]-T,x[k*3+2]],N*3),b.set([b[k*3],b[k*3+1],b[k*3+2]],N*3),y.set([y[k*3],y[k*3+1],y[k*3+2]],N*3),w[N*2]=w[k*2],w[N*2+1]=w[k*2+1],_.set([_[k*2],_[k*2+1]],N*2),N++;for(let k=0;k<i;k++){let V=U[k],j=U[k+1],ee=O+k,G=O+k+1;E.push(V,ee,j,j,ee,G,V,j,ee,j,G,ee)}}let H=new Pe;H.setAttribute("position",new we(x,3)),H.setAttribute("normal",new we(b,3)),H.setAttribute("color",new we(y,3)),H.setAttribute("aMix",new we(w,2)),H.setAttribute("uv",new we(_,2)),H.setIndex(E),H.computeBoundingSphere();let L=new Ue(H,this.mat);L.receiveShadow=n<=256,L.castShadow=n<=64;let A=new Fe;A.add(L),A.userData.box=[e,t,e+n,t+n];let C=this._trees(e,t,n,s,a,u,f,D,g,A);for(let U of C)A.add(U);return this.group.add(A),A}_bil(e,t,n,i,s,a,o){let c=(a-i)/n+1,l=(o-s)/n+1,h=Math.max(0,Math.min(t-2,Math.floor(c))),d=Math.max(0,Math.min(t-2,Math.floor(l))),u=c-h,f=l-d,g=e[d*t+h],v=e[d*t+h+1],m=e[(d+1)*t+h],p=e[(d+1)*t+h+1];return g+(v-g)*u+(m-g)*f+(g-v-m+p)*u*f}_nearest(e,t,n,i,s,a,o){let c=Math.min(t-1,Math.max(0,Math.round((a-i)/n+1))),l=Math.min(t-1,Math.max(0,Math.round((o-s)/n+1)));return e[l*t+c]}_trees(e,t,n,i,s,a,o,c,l,h){let d=C0[wt.id],u=this.keep[n]||0;if(!u)return[];let f=R0,g=wt.id==="mountain",v=[],m=[],p=[],x=(S,D)=>c[Math.min(f,Math.round((D-t)/i))*(f+1)+Math.min(f,Math.round((S-e)/i))],b=n<=128?[]:null;h&&(h.userData.near=b);let y=[{cell:8,seed:0}];if(this.road.dirt&&n<=128){let S=!1;for(let D=0;D<l.length&&!S;D+=7)l[D]>=0&&this.road.dirtAt(l[D])>.05&&(S=!0);S&&y.push({cell:4,seed:1})}for(let{cell:S,seed:D}of y){let E=D*15485863;for(let T=Math.floor(t/S);T*S<t+n;T++)for(let F=Math.floor(e/S);F*S<e+n;F++){if(Ze(F+E,T)>u)continue;let N=(F+Ze(F+7919+E,T))*S,H=(T+Ze(F+E,T+7919))*S;if(N<e||N>=e+n||H<t||H>=t+n)continue;let L=this._bil(o,s,i,e,t,N,H),A=L<60?this._nearest(l,s,i,e,t,N,H):-1,C=A>=0?this.road.dirtAt(A):0,U=d.trees?mt(.44,.66,Ut(N/260+3.1,H/260+8.7))*.92+.03:d.bare?0:.012;D?U=C*.85*(1-mt(kt+20,kt+45,L)):U=Math.max(U,C*.9*(1-mt(kt+25,kt+60,L)));let O=this._bil(a,s,i,e,t,N,H),k=x(N,H);if(Ze(F+104729+E,T+31)>U||L<kt+7.5-5*C+(D?Ze(F,T+3)*1.5:0)||O>d.snowLine-20||k<(g?.66:.8))continue;let V=(.75+Ze(F+3+E,T+5)*.7)*(n>=256?1.3:1)*(C>.3?1.15:1),j=d.trees?Ze(F+11+E,T+13)<(g?.9:.58+mt(60,180,O)*.35):!1,ee=[N,O-.2,H,V,Ze(F+17+E,T+19)*6.283,Ze(F+23+E,T+29)];(j?v:m).push(ee),b&&b.push([j?"pine":"broad",...ee])}}if(n<=256)for(let D=Math.floor(t/22);D*22<t+n;D++)for(let E=Math.floor(e/22);E*22<e+n;E++){if(Ze(E+911,D+577)>u)continue;let T=(E+Ze(E+31,D+977))*22,F=(D+Ze(E+977,D+31))*22;if(T<e||T>=e+n||F<t||F>=t+n)continue;let N=this._bil(o,s,i,e,t,T,F);if(N<kt+3)continue;let H=x(T,F),L=N<60?this._nearest(l,s,i,e,t,T,F):-1,A=L>=0?this.road.dirtAt(L):0,C=g&&H<=.5,U=g?N<kt+14?.45:C?.32:H<.93?.3:.06:A*.2;if(Ze(E+3331,D+7177)>U)continue;let O=(g?C?3:1.6:.8)+Math.pow(Ze(E+41,D+43),1.6)*(g?C?7:5.5:1.6),k=3+Math.floor(Ze(E+7,D+9)*5);for(let V=0;V<k;V++){let j=Ze(E*7+V,D+101)*6.283,ee=(V===0?0:.6+Ze(E+V*13,D*3+7)*1.4)*O,G=T+Math.cos(j)*ee,Z=F+Math.sin(j)*ee;if(G<e-4||G>=e+n+4||Z<t-4||Z>=t+n+4||this._bil(o,s,i,e,t,G,Z)<kt+2)continue;let he=O*(V===0?1:.35+Ze(E+V,D+V*5)*.55),ue=this._bil(a,s,i,e,t,G,Z);p.push([G,ue-he*(C?.35:.22),Z,he,Ze(E+V*3,D+53)*6.283,Ze(E+59+V,D+61)])}}if(b&&n<=64&&d.trees)for(let D=Math.floor(t/3.5);D*3.5<t+n;D++)for(let E=Math.floor(e/3.5);E*3.5<e+n;E++){let T=(E+Ze(E+5153,D))*3.5,F=(D+Ze(E,D+5153))*3.5;if(T<e||T>=e+n||F<t||F>=t+n)continue;let N=this._bil(o,s,i,e,t,T,F);if(N<kt+1.6)continue;let H=N<60?this._nearest(l,s,i,e,t,T,F):-1,L=H>=0?this.road.dirtAt(H):0,A=(g?.07:.1+.18*mt(.44,.66,Ut(T/260+3.1,F/260+8.7)))+L*.35;if(Ze(E+6007,D+6011)>A||x(T,F)<.75)continue;let C=this._bil(a,s,i,e,t,T,F);b.push(["plant",T,C-.05,F,.6+Ze(E+61,D+67)*.7,Ze(E+71,D+73)*6.283,Ze(E+79,D+83)])}let _=[],w=(S,D,E,T)=>{if(!S.length)return;let F=new Ft(D,E,S.length),N=new Ee,H=new qe,L=new M,A=new M,C=new M(0,1,0),U=new $,O=new Si;S.forEach(([k,V,j,ee,G,Z],he)=>{T?H.setFromEuler(O.set((Z-.5)*.5,G,(Z-.5)*.4)):H.setFromAxisAngle(C,G),N.compose(A.set(k,V,j),H,L.set(ee,ee*(T?.75+Z*.45:.9+Z*.3),ee)),F.setMatrixAt(he,N),T?U.copy(Z>.5?P0:jd).multiplyScalar(1.15+Z*.3):U.setHSL(.2+(Z-.5)*.12,.45,.62+Z*.2).lerp(this._white,.55),F.setColorAt(he,U)}),F.castShadow=n<=64,F.receiveShadow=T&&n<=128,T||(F.customDepthMaterial=this.treeDepth),F.layers.set(3),_.push(F)};if(w(v,this.geos.pine,this.treeMat),w(m,this.geos.broad,this.treeMat),p.length){let S=this.rockGeos.map(()=>[]);p.forEach(D=>S[Math.floor(D[5]*(S.length-.001))].push(D)),S.forEach((D,E)=>w(D,this.rockGeos[E],this.rockMat,!0))}return _}_dispose(e){this.group.remove(e),e.traverse(t=>{t.isInstancedMesh?t.dispose():t.isMesh&&t.geometry.dispose()})}reset(){WE();for(let e of this.tiles.values())this._dispose(e);this.tiles.clear(),this.queue.length=0,this.queued.clear()}update(e,t=6){let n=new Map,i=Math.round(e.x/1024)*1024-qd/2,s=Math.round(e.z/1024)*1024-qd/2,a=(o,c,l)=>{let h=Math.min(Math.max(e.x,o),o+l),d=Math.min(Math.max(e.z,c),c+l),u=Math.hypot(e.x-h,e.z-d);if(l>VE&&u<l*this.view){let f=l/2;a(o,c,f),a(o+f,c,f),a(o,c+f,f),a(o+f,c+f,f)}else n.set(l+"|"+o+"|"+c,[o,c,l,u])};a(i,s,qd);for(let[o,c]of n)!this.tiles.has(o)&&!this.queued.has(o)&&(this.queue.push([o,...c]),this.queued.add(o));if(this.queue.length){this.queue.sort((c,l)=>c[3]-l[3]||c[4]-l[4]);let o=performance.now();for(;this.queue.length&&performance.now()-o<t;){let[c,l,h,d]=this.queue.shift();this.queued.delete(c),!(!n.has(c)||this.tiles.has(c))&&this.tiles.set(c,this._build(l,h,d))}}if(!this.queue.length)for(let[o,c]of this.tiles)n.has(o)||(this._dispose(c),this.tiles.delete(o))}prime(e){this.update(e,1e9)}setView(e,t){e!==this.view&&(this.view=e,this.keep=e>1?ZE:L0,this.tiles.size&&(this.reset(),t&&this.prime(t)))}apply(e){this.uCover.value=e.cover,this.mat.color.setScalar((1-.2*e.wet)*(1-.3*e.dark));let t=.2*e.cover*e.dayF;this.treeMat.emissive.setRGB(t,t*1.02,t*1.05)}};function Yd(r,e=3){let t=new Ga(1,e);t.deleteAttribute("normal"),t.deleteAttribute("uv"),t=o0(t);let n=t.attributes.position,i=new M;for(let s=0;s<n.count;s++){i.fromBufferAttribute(n,s);let a=Ut(i.x*1.7+r*13.1,i.z*1.7+i.y*1.3+r*7.7)*.45+Ut(i.x*4.1+r,i.y*4.3-i.z*2.1)*.18;i.multiplyScalar(.72+a),i.y=Math.max(i.y,-.25),n.setXYZ(s,i.x,i.y,i.z)}return t.computeVertexNormals(),t}var Kd=`
  uniform float uExposure;
  vec3 dispToLin(vec3 d) {
    vec3 x = clamp(mix(pow((d + 0.055) / 1.055, vec3(2.4)), d / 12.92, step(d, vec3(0.04045))), 0.0, 0.985);
    vec3 A = 1.0 - 0.983729 * x, B = 0.0245786 - 0.432951 * x, C = -(0.000090537 + 0.238081 * x);
    return (-B + sqrt(B * B - 4.0 * A * C)) / (2.0 * A) * 0.6 / uExposure;
  }`;function D0(r,e=1){let t=new Float32Array(r*e*3);for(let n=0;n<r;n++){let i=Math.random(),s=Math.random(),a=Math.random();for(let o=0;o<e;o++)t.set([i,s,a],(n*e+o)*3)}return t}var JE=`
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
  }`,QE=`
  uniform float uOpacity, uLight; uniform vec3 uColor; varying float vA;
  ${Kd}
  void main() {
    float r = length(gl_PointCoord - 0.5) * 2.0;
    float a = smoothstep(1.0, 0.25, r);
    gl_FragColor = vec4(dispToLin(uColor * uLight), a * uOpacity * vA);
  }`,sl=class{constructor(e){this.time=0;let t=new M(40,26,40),n=()=>({uTime:{value:0},uCam:{value:new M},uBox:{value:t.clone()},uOpacity:{value:0},uLight:{value:1},uExposure:{value:.6}}),i=14e3,s=new Pe;s.setAttribute("position",new we(new Float32Array(i*2*3),3)),s.setAttribute("seed",new we(D0(i,2),3));let a=new Float32Array(i*2);for(let c=0;c<i;c++)a[c*2+1]=1;s.setAttribute("tail",new we(a,1)),this.rain=new Ai(s,new vt({uniforms:{...n(),uSpeed:{value:24},uLen:{value:1.1},uWind:{value:new re(2,1)},uCarInv:{value:new Ee},uCarHalf:{value:new M}},transparent:!0,depthWrite:!1,vertexShader:`
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
        ${Kd}
        void main() {
          vec3 local = (uCarInv * vec4(vWorld, 1.0)).xyz - vec3(0.0, uCarHalf.y, 0.0);
          if (all(lessThan(abs(local), uCarHalf))) discard;
          gl_FragColor = vec4(dispToLin(vec3(0.78, 0.84, 0.92) * uLight), uOpacity * vA);
        }`})),this.rain.frustumCulled=!1,this.rain.layers.set(3),this.rain.renderOrder=10,this.rain.visible=!1,e.add(this.rain);let o=(c,l,h)=>{let d=new Pe;d.setAttribute("position",new we(new Float32Array(c*3),3)),d.setAttribute("seed",new we(D0(c),3));let u=new un(d,new vt({uniforms:{...n(),uScale:{value:400},uColor:{value:new $(...h)},...l},transparent:!0,depthWrite:!1,vertexShader:JE,fragmentShader:QE}));return u.frustumCulled=!1,u.layers.set(3),u.renderOrder=10,u.visible=!1,e.add(u),u};this.snow=o(1e4,{uSize:{value:.09},uFall:{value:1.6},uSway:{value:.9},uDrift:{value:new re}},[.96,.98,1]),this.drift=o(2600,{uSize:{value:.05},uFall:{value:.12},uSway:{value:.25},uDrift:{value:new re}},[.95,.9,.78])}setCar(e,t){e.updateWorldMatrix(!0,!1);let n=this.rain.material.uniforms;n.uCarInv.value.copy(e.matrixWorld).invert(),n.uCarHalf.value.set(t.width/2,t.height/2,t.length/2)}update(e,t,n,i){this.time+=e;let s=n.windDir.clone().multiplyScalar(1.5+n.wind*11);for(let l of[this.rain,this.snow,this.drift]){let h=l.material.uniforms;h.uTime.value=this.time,h.uCam.value.copy(t),h.uLight.value=n.light,h.uExposure.value=n.exposure||.6}let a=this.rain.material.uniforms;a.uOpacity.value=.55*n.rain*(1+.25*n.dark),a.uWind.value.copy(s),this.rain.visible=n.rain>.02;let o=this.snow.material.uniforms;o.uOpacity.value=.95*n.snow,o.uScale.value=i*.5,o.uDrift.value.copy(s).multiplyScalar(.35),this.snow.visible=n.snow>.02;let c=this.drift.material.uniforms;c.uOpacity.value=.8*n.drift,c.uScale.value=i*.5,c.uDrift.value.copy(s).multiplyScalar(.9),this.drift.visible=n.drift>.02}};var Zd=Math.PI/180,Un=(r,e,t)=>Math.min(t,Math.max(e,r)),qn=(r,e,t)=>{let n=Un((t-r)/(e-r),0,1);return n*n*(3-2*n)},F0={clear:{fog:42e-5,overcast:0,clouds:.52,sun:1,rain:0,snow:0,wet:0,cover:0,wind:.3,dark:0,tint:"#b9d6ee"},cloudy:{fog:9e-4,overcast:.75,clouds:.86,sun:.3,rain:0,snow:0,wet:0,cover:0,wind:.38,dark:.12,tint:"#a6b1bb"},windy:{fog:6e-4,overcast:.2,clouds:.62,sun:.85,rain:0,snow:0,wet:0,cover:0,wind:.95,dark:0,tint:"#b4c6d8"},rain:{fog:.0016,overcast:1,clouds:1,sun:.1,rain:.85,snow:0,wet:1,cover:0,wind:.5,dark:.35,tint:"#7a858f"},storm:{fog:.0027,overcast:1,clouds:1,sun:.03,rain:1,snow:0,wet:1,cover:0,wind:1,dark:1,tint:"#3f4852"},snow:{fog:.0019,overcast:.85,clouds:1,sun:.35,rain:0,snow:1,wet:0,cover:1,wind:.32,dark:.1,tint:"#d3dbe2"},fog:{fog:.0066,overcast:.55,clouds:.5,sun:.3,rain:0,snow:0,wet:.2,cover:0,wind:.08,dark:.05,tint:"#c4c9cd"}},$E=1.5,ew=["fog","overcast","clouds","sun","rain","snow","wet","cover","wind","dark"],tw=[[-18,"#040a1a","#08142c","#122244","#122244","#000000"],[-9,"#06102e","#0e1d47","#1f2d5a","#363562","#24182c"],[-4,"#122052","#2a3c79","#67588d","#d06e7a","#a24a40"],[0,"#1d3d80","#4868ab","#e3987c","#ff8a48","#ff7030"],[4,"#2453a0","#6286c4","#f0bd92","#ffb36c","#ff9a52"],[10,"#2a64b4","#719fd9","#f1d9bd","#ffd59c","#ffcf88"],[22,"#2468c8","#5b9be3","#c6def3","#e1edf5","#fff1d6"],[50,"#1e5fc4","#4f92e0","#b4d4f2","#d2e5f3","#fff7e6"]].map(([r,...e])=>[r,...e.map(t=>new $(t))]),N0=2.15;function O0(r,e,t){let n=e/.6,i=r.r*n,s=r.g*n,a=r.b*n,o=.59719*i+.35458*s+.04823*a,c=.076*i+.90834*s+.01566*a,l=.0284*i+.13383*s+.83777*a,h=v=>(v*(v+.0245786)-90537e-9)/(v*(.983729*v+.432951)+.238081),d=h(o),u=h(c),f=h(l),g=v=>(v=Math.min(1,Math.max(0,v)),v<=.0031308?12.92*v:1.055*Math.pow(v,1/2.4)-.055);return t.setRGB(g(1.60475*d-.53108*u-.07367*f),g(-.10208*d+1.10813*u-.00605*f),g(-.00327*d-.07276*u+1.07602*f))}var rl=new $;function nw(r,e,t){let n=a=>(a=Math.min(.985,Math.max(0,a)),a<=.04045?a/12.92:Math.pow((a+.055)/1.055,2.4)),i=a=>{let o=1-.983729*a,c=.0245786-.432951*a,l=-(90537e-9+.238081*a);return(-c+Math.sqrt(c*c-4*o*l))/(2*o)*.6/e},s=[n(r.r),n(r.g),n(r.b)];t.setRGB(i(s[0]),i(s[1]),i(s[2]));for(let a=0;a<4;a++){O0(t,e,rl);let o=[n(rl.r),n(rl.g),n(rl.b)];t.setRGB(t.r*s[0]/Math.max(o[0],1e-5),t.g*s[1]/Math.max(o[1],1e-5),t.b*s[2]/Math.max(o[2],1e-5))}return t}var iw=`
  varying vec3 vDir;
  void main() { vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,sw=`
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
  }`,rw=new $("#fff3df"),aw=new $("#ff9a50"),U0=new $("#9ab6ff"),ow=new $(1.7,1.78,1.95),cw=Math.PI-1,lw=Math.PI-1.15,H0={exposure:1,skyBrightness:1,directLight:1,ambientLight:1,sunGlow:1,sunDisc:1,cloudBrightness:1,rays:1,autoSpeed:.06,sunAzimuth:cw,moonAzimuth:lw},hw=`
  varying vec3 vDir;
  void main() { vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,uw=`
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
  }`,al=class{constructor(e,t,n){this.renderer=e,this.scene=t,this.camera=n,this.hour=17.55,this.auto=!1,this.tween=null,this.weather="clear",this.weatherProfiles=Object.fromEntries(Object.entries(F0).map(([o,c])=>[o,{...c}])),this.w={...this.weatherProfiles.clear},this.tint=new $(this.weatherProfiles.clear.tint),this.target=this.weatherProfiles.clear,this.tune={...H0},this.windDir=new re(.78,.62).normalize(),this._fogDisp=new $,this.veil={uVeilCol:{value:new $},uVeil:{value:new re(0,.2)}},this.mistCover=.35,this.mistDens=.2,this.skyMat=new vt({uniforms:{...this.veil,uZenith:{value:new $},uMid:{value:new $},uHorizon:{value:new $},uBand:{value:new $},uSunCol:{value:new $},uSunDir:{value:new M(0,1,0)},uGlow:{value:1},uDisc:{value:1},uBandAmt:{value:1},uScale:{value:1},uGround:{value:new ct(0,0,0,0)},uMoonDir:{value:new M(0,1,0)},uMoonCol:{value:new $(ow)},uMoon:{value:0}},vertexShader:iw,fragmentShader:sw,side:fn,depthWrite:!1,fog:!1}),this.sky=new Ue(new fi(2400,48,24),this.skyMat),this.sky.renderOrder=-10,this.sky.frustumCulled=!1,t.add(this.sky),this.skyC={zen:new $,mid:new $,hor:new $,band:new $,sun:new $},this.envScene=new Ji,this.envScene.add(new Ue(new fi(900,32,16),this.skyMat)),this.pmrem=new Br(e),this.envRT=null,this.envTimer=0,this.envKey="";let i=new Float32Array(1800*3);for(let o=0;o<1800;o++){let c=new M().randomDirection();c.y=Math.abs(c.y)*.9+.1,c.normalize().multiplyScalar(3200),i.set([c.x,c.y,c.z],o*3)}let s=new Pe;s.setAttribute("position",new we(i,3)),this.stars=new un(s,new di({color:14674175,size:2.1,sizeAttenuation:!1,transparent:!0,opacity:0,depthWrite:!1,fog:!1})),this.stars.renderOrder=1,this.stars.frustumCulled=!1,t.add(this.stars),this.cloudMat=new vt({uniforms:{...this.veil,uTime:{value:0},uCover:{value:.4},uFlash:{value:0},uSoft:{value:0},uDrift:{value:new re},uSunDir:{value:new M(0,1,0)},uLit:{value:new $},uShade:{value:new $},uFlashCol:{value:new $(1.5,1.7,2.4)}},vertexShader:hw,fragmentShader:uw,side:fn,transparent:!0,depthWrite:!1,fog:!1}),this.dome=new Ue(new fi(2300,32,16),this.cloudMat),this.dome.renderOrder=3,this.dome.frustumCulled=!1,t.add(this.dome),this.cloudTime=0,this.haze=new Ue(new sn(1800,1800,1,48,1,!0),new vt({uniforms:{uColor:{value:new $}},side:dt,transparent:!0,depthWrite:!1,fog:!1,vertexShader:"varying float vT; void main(){ vT = position.y + 0.5; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:"uniform vec3 uColor; varying float vT; void main(){ float a = 1.0 - vT; gl_FragColor = vec4(uColor, a * a); }"})),this.haze.renderOrder=5,this.haze.frustumCulled=!1,t.add(this.haze),this.boltGeo=new Pe,this.boltGeo.setAttribute("position",new we(new Float32Array(480),3)),this.boltGeo.setDrawRange(0,0),this.bolt=new Ai(this.boltGeo,new Qi({color:14083327,transparent:!0,opacity:0,blending:$t,depthWrite:!1,fog:!1})),this.bolt.renderOrder=6,this.bolt.frustumCulled=!1,t.add(this.bolt),this.flashT=-1,this.nextStrike=2,this.flash=0,this.onThunder=null,this.sun=new jr(16777215,1),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048);let a=this.sun.shadow.camera;a.left=-38,a.right=38,a.top=38,a.bottom=-38,a.near=1,a.far=260,this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=.04,a.layers.enable(3),t.add(this.sun,this.sun.target),this.hemi=new Ic(12572927,4214832,.4),t.add(this.hemi),t.fog=new _c(12179182,6e-4),this.precip=new sl(t),this.state={night:0,lamps:0,dayF:1,warm:0,light:1,rain:0,snow:0,wet:0,cover:0,overcast:0,wind:.3,dark:0,drift:0,flash:0,windDir:this.windDir,fogColor:new $,mistColor:new $,sunDir:new M,elevation:0,moonDir:new M,lightDir:new M,moon:0,rays:0,rayDir:new M,rayCol:new $},this._c=new $,this._c2=new $,this._lit=new $,this._shade=new $,this._v=new M}snapWeather(e){this.setWeather(e),Object.assign(this.w,this.target),this.tint.set(this.target.tint)}setWeather(e){this.weather=e,this.target=this.weatherProfiles[e],e==="storm"&&(this.nextStrike=Math.min(this.nextStrike,1.2))}resetWeather(e){Object.assign(this.weatherProfiles[e],F0[e]),this.weather===e&&this.setWeather(e)}resetTune(){Object.assign(this.tune,H0),this.envKey=""}setTime(e){if(e==null){this.auto=!0,this.tween=null;return}this.auto=!1,this.tween=e}get clock(){let e=Math.floor(this.hour),t=Math.floor((this.hour-e)*60);return String(e).padStart(2,"0")+":"+String(t).padStart(2,"0")}_strike(e){let t=Math.random()*Math.PI*2,n=800+Math.random()*900,i=new M(e.x+Math.cos(t)*n,0,e.z+Math.sin(t)*n),s=new M(i.x+(Math.random()-.5)*240,650+Math.random()*200,i.z+(Math.random()-.5)*240),a=this.boltGeo.attributes.position,o=0,c=(l,h,d,u)=>{let f=l.clone();for(let g=1;g<=d;g++){let v=g/d,m=l.clone().lerp(h,v);g<d&&m.add(new M((Math.random()-.5)*u,0,(Math.random()-.5)*u)),a.setXYZ(o++,f.x,f.y,f.z),a.setXYZ(o++,m.x,m.y,m.z),f=m}return f};c(s,i,16,110);for(let l=0;l<3;l++){let h=.25+Math.random()*.5,d=s.clone().lerp(i,h),u=d.clone().add(new M((Math.random()-.5)*380,-(120+Math.random()*260),(Math.random()-.5)*380));c(d,u,5,60)}a.needsUpdate=!0,this.boltGeo.setDrawRange(0,o),this.flashT=0,this.onThunder&&this.onThunder(Un(n/340,.7,4.2),Un(1.3-n/1800,.35,1))}update(e,t){let n=this.camera.position;if(this.auto)this.hour=(this.hour+e*this.tune.autoSpeed)%24;else if(this.tween!=null){let ue=(this.tween-this.hour+36)%24-12,ye=5*e;Math.abs(ue)<=ye?(this.hour=this.tween,this.tween=null):this.hour=(this.hour+Math.sign(ue)*ye+24)%24}let i=1-Math.exp(-e*1.4);for(let ue of ew)ue!=="wet"&&(this.w[ue]+=(this.target[ue]-this.w[ue])*i);let s=this.target.wet-this.w.wet;this.w.wet+=Math.sign(s)*Math.min(Math.abs(s),e/$E),this.tint.lerp(this._c.set(this.target.tint),i);let a=this.w,o=a.overcast,c=a.dark;if(this.weather==="storm"&&a.dark>.5&&(this.nextStrike-=e,this.nextStrike<=0&&(this._strike(n),this.nextStrike=3.5+Math.random()*7)),this.flashT>=0){this.flashT+=e;let ue=this.flashT;this.flash=Un(Math.exp(-ue*11)+.75*(ue>.17?Math.exp(-(ue-.17)*8):0),0,1),ue>1.6&&(this.flashT=-1,this.flash=0,this.boltGeo.setDrawRange(0,0))}let l=this.flash;this.bolt.material.opacity=this.flashT>=0&&this.flashT<.5?l:0,this.bolt.visible=this.bolt.material.opacity>.02;let h=65*Math.sin((this.hour-6)/24*Math.PI*2),d=this.state.sunDir;d.setFromSphericalCoords(1,Math.PI/2-h*Zd,this.tune.sunAzimuth);let u=qn(-4,14,h),f=1-qn(-12,0,h),g=Math.exp(-Math.pow((h-3)/10,2)),v=this.state.moonDir;v.setFromSphericalCoords(1,Math.PI/2-(3+9*qn(-3,-30,h))*Zd,this.tune.moonAzimuth);let m=this._v.setFromSphericalCoords(1,Math.PI/2-38*Zd,this.tune.moonAzimuth),p=qn(-2,-11,h),x=tw,b=0;for(;b<x.length-2&&h>x[b+1][0];)b++;let y=x[b],_=x[b+1],w=Un((h-y[0])/(_[0]-y[0]),0,1),S=this.skyC;["zen","mid","hor","band","sun"].forEach((ue,ye)=>S[ue].copy(y[ye+1]).lerp(_[ye+1],w));let D=.07+.93*u,E=Un(o*.92+c*.08,0,1),T=this._c.copy(this.tint).multiplyScalar(D).lerp(this._c2.set("#c9997f").multiplyScalar(D),g*.35*(1-c));S.zen.lerp(this._lit.copy(T).multiplyScalar(.8),E),S.mid.lerp(this._lit.copy(T).multiplyScalar(.92),E),S.hor.lerp(T,E),S.band.lerp(T,E);let F=N0*this.tune.skyBrightness*(1-.6*c);for(let ue of["zen","mid","hor","band"])S[ue].multiplyScalar(F).add(this._c2.setRGB(.55,.65,1).multiplyScalar(l*1.6));let N=this.skyMat.uniforms;N.uZenith.value.copy(S.zen),N.uMid.value.copy(S.mid),N.uHorizon.value.copy(S.hor),N.uBand.value.copy(S.band),N.uSunCol.value.copy(S.sun).multiplyScalar(N0*this.tune.skyBrightness),N.uSunDir.value.copy(d),N.uGlow.value=(1-o*.95)*qn(-6,1,h)*(1-c)*this.tune.sunGlow,N.uDisc.value=(1-o)*qn(-1.5,.5,h)*22*this.tune.sunDisc,N.uBandAmt.value=(1-o*.85)*(.25+.75*g)*qn(-11,-2,h),N.uMoonDir.value.copy(v),N.uMoon.value=p*Un(1-o*1.05,0,1)*(1-c);let H=qn(3,22,h)*Un((a.sun-.3)/.7,0,1)*(1-c);this.state.sunK=H,this.renderer.toneMappingExposure=(.5+.12*g)*(1-.5*c)*(1+.3*f)*(1-.3*H)*this.tune.exposure;let L=this.renderer.toneMappingExposure;this.state.exposure=L,this.state.fogColor.copy(this._lit.copy(S.hor).lerp(S.band,.2*N.uBandAmt.value));let A=O0(this.state.fogColor,L,this._fogDisp);this.scene.fog.color.copy(this.state.fogColor),this.scene.fog.density=a.fog,this._c2.copy(A).lerp(this._c.setRGB(.93,.95,.97).multiplyScalar(.1+.9*u*(1-.6*c)),.3),nw(this._c2,L,this.state.mistColor);{let ue=qn(0,.6,this.mistDens)*(.35+.65*this.mistCover),ye=qn(.0012,.0075,a.fog)*.85,W=this.veil;W.uVeil.value.set(Math.max(ue,ye),Math.max(.05+.5*Math.pow(this.mistCover,1.5),ye>ue?.3:0)),W.uVeilCol.value.copy(this.state.mistColor)}let C=h<-2.5,U=this.state.lightDir.copy(C?m:d);C?(this.sun.intensity=.38*p*(1-.8*o)*(1-c)*this.tune.directLight,this.sun.color.copy(U0)):(this.sun.intensity=3.4*qn(-2,9,h)*a.sun*(1+1.3*H)*this.tune.directLight,this.sun.color.copy(rw).lerp(aw,Un(g*1.3,0,1))),t&&(this.sun.position.copy(t).addScaledVector(U,120),this.sun.target.position.copy(t)),this.hemi.color.copy(A).lerp(this._c.set("#6f8cd0"),f*.75).lerp(this._c.set("#c4d4ff"),l),this.hemi.groundColor.set("#3a4630").multiplyScalar(.25+.75*u),this.hemi.intensity=((.16+.45*u+.34*f)*(1-.4*o)*(1-.35*c)*(1-.45*H)+l*3.2)*this.tune.ambientLight,this.sky.position.copy(n),this.stars.position.copy(n),this.dome.position.copy(n),this.haze.position.set(n.x,0,n.z);let O=150+a.fog*1e5;this.haze.scale.y=O,this.haze.position.y=O/2-60,this.haze.material.uniforms.uColor.value.copy(this.state.fogColor),this.stars.material.opacity=f*(1-o*.95),this.stars.visible=this.stars.material.opacity>.01;let k=Un(g*1.1,0,1)*(1-.92*c),V=this._lit.set("#ffffff").lerp(this._c2.set("#ff9d66"),k).multiplyScalar(2.4*u*this.tune.cloudBrightness);V.add(this._c2.set("#8fa6e0").multiplyScalar(.32*f*(1-o*.6)));let j=this._shade.copy(S.mid).multiplyScalar(.5).lerp(this._c2.copy(S.hor).multiplyScalar(.62),.45).lerp(this._c2.set("#a86a7a").multiplyScalar(1.05*u),k*.5);j.add(this._c2.set("#101b38").multiplyScalar(.3*f)),V.multiplyScalar(1-.8*c),this.cloudTime+=e;let ee=this.cloudMat.uniforms;ee.uTime.value=this.cloudTime,ee.uCover.value=a.clouds,ee.uSoft.value=Un(o*.9+c*.3,0,1),ee.uFlash.value=l,ee.uDrift.value.copy(this.windDir).multiplyScalar(.003+.02*a.wind),ee.uSunDir.value.copy(h>=-2?d:v),ee.uLit.value.copy(V),ee.uShade.value.copy(j);let G=this.state;G.elevation=h,G.dayF=u,G.night=f,G.warm=g,G.overcast=o,G.rain=a.rain,G.snow=a.snow,G.wet=a.wet,G.cover=a.cover,G.wind=a.wind,G.dark=c,G.flash=l,G.drift=Un((a.wind-.5)*2.2,0,1)*(1-a.rain)*(1-a.snow);let Z=Un(a.rain*.35+a.snow*.25+(a.fog>.003?.3:0),0,.5);G.lamps=Un(Math.max(f,.7*(1-u))+Z*u+c*.7,0,1),G.moon=N.uMoon.value;let he=qn(5e-4,.0065,a.fog);if(G.rays=(C?.22*N.uMoon.value*(1+he):qn(-2.5,2.5,h)*(1-.55*o)*(1-c)*(.55+.45*g)*(1+1.3*he))*this.tune.rays,G.rayDir.copy(C?v:d),G.rayCol.copy(C?U0:this.sun.color),G.light=.14+.08*f+.86*u*(1-.3*o)*(1-.55*c)+l*.6,this.precip.update(e,n,G,this.renderer.domElement.height),this.envTimer-=e,this.envTimer<=0){let ue=[h.toFixed(1),Math.round(o*12),Math.round(c*12),Math.round(H*10)].join("|");(ue!==this.envKey||!this.envRT)&&(this.envKey=ue,this._captureEnv()),this.envTimer=.7}}setShadowSize(e){let t=this.sun.shadow;t.mapSize.x!==e&&(t.mapSize.set(e,e),t.map&&(t.map.dispose(),t.map=null))}_captureEnv(){let e=this.skyMat.uniforms,t=e.uDisc.value;e.uScale.value=2.1*(1-.5*(this.state.sunK||0)),e.uDisc.value=Math.min(t,4);let n=this.pmrem.fromScene(this.envScene,0,1,3e3);e.uScale.value=1,e.uGround.value.set(e.uHorizon.value.r*.13,e.uHorizon.value.g*.13,e.uHorizon.value.b*.12,1);let i=this.pmrem.fromScene(this.envScene,0,1,3e3);e.uGround.value.w=0,e.uDisc.value=t,this.envRT&&this.envRT.dispose(),this.carEnvRT&&this.carEnvRT.dispose(),this.envRT=n,this.carEnvRT=i,this.scene.environment=n.texture,this.onCarEnv&&this.onCarEnv(i.texture)}};var ns={name:"body",type:"MeshPhysicalMaterial",color:5526623,roughness:.364192,metalness:1,clearcoat:1,clearcoatRoughness:0,specularIntensity:1,specularColor:16777215,reflectivity:.49999999999999983,iridescence:0,iridescenceIOR:1.3,iridescenceThicknessRange:[100,400],envMapIntensity:1};var fw={drop:.19,forward:.16,hip:[-.39,.45,.28],foot:[-.48,.45,-.48],recline:.1},pw={color:789518,metalness:0,roughness:.3,envK:.6},k0=[{id:"mustang",name:"Mustang '67 Đen",file:"assets/models/mustang.glb",length:4.67,flip:!0,eye:[-.39,1.08,.3],doubleSide:!0,door:/^DriverDoor/,wheels:/^(Wheel|BrakeDisc)/,mats:{Interior:pw,BlackPolished:{roughness:.18},Paint:{color:1381913,metalness:0,roughness:.42,specularIntensity:0,clearcoat:1,clearcoatRoughness:.07,envK:.4},Wheel:{clearcoat:.25}},seatMesh:/^Cube\.?00[678]/,steerShift:-.09,lamps:{head:[.839,.661,-2.06],tail:[.44,.769,2.26]},seat:fw,steer:{c:[-.385,.883,-.155],n:[0,.338,.941],r:.153,grip:{radial:.025,depth:.065,align:!0}},steerMesh:/^(Torus\.?001|Cube\.?009)/},{id:"mazda-rx-vision",name:"Mazda RX Vision Sport",file:"assets/models/mazda-rx-vision.glb",length:4.8,flip:!0,wheels:/^WHEEL_(LF|LR|RF|RR)_/,eye:[.394,1.09,.45],seat:{hip:[.394,.34,.48],foot:[.49,.26,-.58],recline:.1},steer:{c:[.394,.795,.082],n:[0,.156,.9878],r:.18},steerMesh:/^MazdaSteering_/,lamps:{head:[.74,.57,-1.99],tail:[.7,.838,2.086]},mats:{body:{color:ns.color,metalness:ns.metalness,roughness:ns.roughness,clearcoat:ns.clearcoat,clearcoatRoughness:ns.clearcoatRoughness,specularIntensity:ns.specularIntensity,specularColor:ns.specularColor,envK:ns.envMapIntensity}}}],Ii=[{id:"reed",name:"Đồng cỏ lau",icon:"🌾"},{id:"forest",name:"Đồi thông",icon:"🌲"},{id:"mountain",name:"Đường núi",icon:"⛰️"},{id:"meadow",name:"Đồi cỏ",icon:"🌿"},{id:"sea",name:"Biển",icon:"🌊"},{id:"city",name:"Phố",icon:"🏙️"}],Hn=[{id:"clear",name:"Trời trong",icon:"☀️"},{id:"cloudy",name:"Nhiều mây",icon:"☁️"},{id:"windy",name:"Gió lớn",icon:"💨"},{id:"rain",name:"Mưa",icon:"🌧️"},{id:"storm",name:"Bão",icon:"⛈️"},{id:"snow",name:"Tuyết",icon:"❄️"},{id:"fog",name:"Sương mù",icon:"🌫️"}],Xn=[{id:"sunrise",name:"Bình minh",icon:"🌅",hour:6.4},{id:"noon",name:"Ban ngày",icon:"🌤️",hour:12.5},{id:"sunset",name:"Hoàng hôn",icon:"🌇",hour:17.6},{id:"night",name:"Ban đêm",icon:"🌙",hour:22.5},{id:"auto",name:"Tự động",icon:"🕒",hour:null}],Wt=[{id:"chase",name:"Sau xe"},{id:"low",name:"Sát mặt đường"},{id:"side",name:"Bên hông"},{id:"cockpit",name:"Trong xe"},{id:"orbit",name:"Quay quanh"},{id:"drone",name:"Từ trên cao"}],ol=[{id:"all",name:"Nhạc + âm thanh",icon:"🎵"},{id:"music",name:"Chỉ nhạc",icon:"🎶"},{id:"off",name:"Tắt tiếng",icon:"🔇"}],Di=[1.4,1.8,2,2.8,3.5,4,5.6,8,11,16],B0=Di.indexOf(3.5),Fi=[{id:"low",name:"Low",ratio:.75,msaa:0,veg:.35,shadow:1024,refl:!1,dof:0,trees:0,view:1},{id:"good",name:"Good",ratio:1.5,msaa:4,veg:.85,shadow:2048,refl:!0,dof:36,trees:35,view:1},{id:"ultra",name:"Ultra",ratio:2,msaa:4,veg:1,shadow:4096,refl:!0,dof:48,trees:200,view:2}],Jd=Fi.findIndex(r=>r.id==="good");var Qd=512,ni=288,ll=[.23*.85,.13*.85],eo=ll,z0=.014*.85;function G0(r,e){let[t,n,i]=e.eye,s=new Nc(new M(0,n,i),new M(0,-.42,-1).normalize(),.05,2.5);r.updateMatrixWorld(!0);let a=s.intersectObject(r,!0).find(l=>!(l.object.material&&l.object.material.transparent)),o=a?a.point.clone():new M(0,n-.3,i-.7);o.y+=eo[1]/2+.03,o.z+=.07;let c=new qe().setFromAxisAngle(new M(1,0,0),-.22);return{pos:o,quat:c}}var cl=class{constructor(){this.canvas=document.createElement("canvas"),this.canvas.width=Qd,this.canvas.height=ni,this.ctx=this.canvas.getContext("2d"),this.tex=new yn(this.canvas),this.tex.colorSpace=lt,this.tex.anisotropy=4,this.group=new Fe;let e=new Ue(new ui(eo[0],eo[1]),new Jt({map:this.tex,color:new $(2.2,2.2,2.2)})),t=new Ue(new ht(eo[0]+z0,eo[1]+z0,.012*.85),new Qe({color:789776,roughness:.35,metalness:.3}));t.position.z=-.0065,this.group.add(t,e),this.light=new _s(16762506,1.1,2.4,2),this.light.position.set(0,.03,.08),this.group.add(this.light),this.t=0,this.timer=0,this.speed=0,this.clock="",this._draw()}place(e){if(!e){this.group.visible=!1;return}this.group.visible=!0,this.group.position.copy(e.pos),this.group.quaternion.copy(e.quat)}update(e,t,n){this.t+=e,this.timer-=e,this.light.intensity=1.1*(.9+.1*Math.sin(this.t*.7)),!(this.timer>0)&&(this.timer=1,this.speed=t,this.clock=n,this._draw())}_draw(){let e=this.ctx,t=this.t,n=e.createLinearGradient(0,0,0,ni);n.addColorStop(0,"#1d140d"),n.addColorStop(1,"#0d0906"),e.fillStyle=n,e.fillRect(0,0,Qd,ni),e.save(),e.beginPath(),e.rect(10,34,300,ni-44),e.clip(),e.fillStyle="#231810",e.fillRect(10,34,300,ni-44),e.strokeStyle="rgba(255,190,130,0.15)",e.lineWidth=2;let i=t*9%40;for(let c=-40;c<340;c+=40)e.beginPath(),e.moveTo(c+i*.3,34),e.lineTo(c-30+i*.3,ni),e.stroke();for(let c=34;c<ni+40;c+=40)e.beginPath(),e.moveTo(10,c+i),e.lineTo(310,c+i-12),e.stroke();e.strokeStyle="#ffa940",e.lineWidth=7,e.lineCap="round",e.beginPath();for(let c=0;c<=24;c++){let l=ni-10-c*11,h=160+Math.sin(c*.35+t*.15)*46;c===0?e.moveTo(h,l):e.lineTo(h,l)}e.stroke(),e.fillStyle="#ffffff",e.beginPath(),e.moveTo(160,ni-74),e.lineTo(148,ni-46),e.lineTo(160,ni-54),e.lineTo(172,ni-46),e.closePath(),e.fill(),e.restore(),e.fillStyle="#ffe4c8",e.font="600 20px system-ui, sans-serif",e.textBaseline="middle",e.fillText(this.clock||"--:--",14,18),e.textAlign="right",e.fillText(Math.round(this.speed)+" km/h",Qd-14,18),e.textAlign="left";let s=326,a=e.createLinearGradient(s,44,s+70,114);a.addColorStop(0,"#ff8a5c"),a.addColorStop(1,"#7b5cff"),e.fillStyle=a,e.fillRect(s,44,70,70),e.fillStyle="#ffffff",e.font="600 19px system-ui, sans-serif",e.fillText("Lo-fi Chill",s,136),e.fillStyle="#c9a27e",e.font="16px system-ui, sans-serif",e.fillText("Chill Drive Radio",s,160);let o=t/180%1;e.fillStyle="#3d2b1d",e.fillRect(s,184,170,5),e.fillStyle="#ffa940",e.fillRect(s,184,170*o,5),e.fillStyle="#ffb760";for(let c=0;c<12;c++){let l=8+26*Math.abs(Math.sin(t*2.3+c*1.7)*Math.sin(t*.9+c));e.fillRect(s+c*14,250-l,8,l)}this.tex.needsUpdate=!0}};var hl=Object.freeze({intensity:36,distance:165,angle:1.29,penumbra:.9,decay:.87,glowOpacity:.29,glowSize:2.9,color:"#ffe4a8",glowColor:"#ffb43f"});function to(r,e,{spots:t=!0,glows:n=!0}={}){let i=(t?[-1,1]:[]).map(()=>{let a=new ys(16766624,0,110,.8,1,.55);return r.add(a,a.target),a}),s=(n?[-1,1]:[]).map(()=>{let a=new Nn(new Pn({map:e,color:16761975,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:$t,fog:!1}));return a.renderOrder=6,a.scale.set(2.1*1.35,2.1*.85,1),r.add(a),a});return{spots:i,glows:s,tune:{...hl},eye:new M,forward:new M}}function ea(r){if(r.lamps)return r.lamps;let e=r.width*.3,t=Math.min(.7,r.height*.45);return{head:[e,t,-r.length/2+.25],tail:[e,t+.05,r.length/2]}}function no(r,e){let[t,n,i]=ea(e).head;r.spots.forEach((s,a)=>{let o=a?t:-t;s.position.set(o,n,i),s.target.position.set(o*.9,0,i-40)}),r.glows.forEach((s,a)=>s.position.set(a?t:-t,n,i-.03))}function io(r,e,t,n){let i=r.tune||hl;r.spots.forEach(a=>{a.color.set(i.color),a.intensity=i.intensity*n,a.distance=i.distance,a.angle=i.angle,a.penumbra=i.penumbra,a.decay=i.decay});let s=1;t&&(e.updateWorldMatrix(!0,!0),(r.glows[0]||e).getWorldPosition(r.eye),r.eye.subVectors(t.position,r.eye).normalize(),r.forward.set(0,0,-1).transformDirection(e.matrixWorld),s=Nt.smoothstep(r.eye.dot(r.forward),-.05,.35)),r.glows.forEach(a=>{a.material.color.set(i.glowColor),a.material.opacity=i.glowOpacity*n*s,a.scale.set(i.glowSize*1.35,i.glowSize*.85,1),a.visible=n*s>.01})}var ul=(r,e,t)=>Math.min(t,Math.max(e,r));function mw(r){let e=Nt.smoothstep(r.speed,.2,2),t=Math.atan((r.curvature||0)*2.7)*14*e,n=-Math.atan2(r.latVel||0,Math.max(r.speed,4))*3;return ul(t+n,-.55,.55)}var dl=class{constructor(e){this.root=new Fe,this.tilt=new Fe,this.root.add(this.tilt),e.add(this.root),this.loader=new Ss,this.loader.setMeshoptDecoder($r),this.onProgress=null,this.prepare=null,this.envMap=null,this.list=[],this.cache=new Map,this.current=null,this.token=0,this.time=0,this.pitch=0,this.roll=0,this.lastSpeed=0,this.dim={length:4.5,width:1.9,height:1.3},this.lights=new Fe,this.root.add(this.lights);let t=this.softTex=Vc(),n=i=>{let s=new Nn(new Pn({map:t,color:i,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:$t,fog:!1}));return s.renderOrder=6,this.lights.add(s),s};this.headlights=to(this.lights,t),this.spots=this.headlights.spots,this.headGlow=this.headlights.glows,this.tailGlow=[n(16720914),n(16720914)],this.viewer=null,this._gv=new M,this._gb=new M,this.lampLevel=0,this.brake=0,this.contact=new Ue(new ui(1,1).rotateX(-Math.PI/2),new Jt({alphaMap:gw(),color:0,transparent:!0,opacity:.72,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-6,fog:!1})),this.contact.position.y=.06,this.contact.renderOrder=1,this.root.add(this.contact),this.cabin=new _s(16767148,0,2.6,2),this.tilt.add(this.cabin),this.cabinLevel=0}async probe(){let e=[];for(let t of k0){if(!t.optional){e.push(t);continue}try{let n=await fetch(t.file,{method:"HEAD"}),i=n.headers.get("content-type")||"";n.ok&&!i.includes("text/html")&&e.push(t)}catch{}}return this.list=e,e}async select(e){let t=this.list[e],n=++this.token,i=this.cache.get(t.id);if(i||(i=await this._load(t,s=>{n===this.token&&this.onProgress?.(s)}),this.cache.set(t.id,i)),n!==this.token)return!1;if(this.prepare&&!i.ready){try{await this.prepare(i.group)}catch(s){console.warn("prepare",s)}if(i.ready=!0,n!==this.token)return!1}return this.current&&this.tilt.remove(this.current.group),this.tilt.add(i.group),this.current=i,this.dim=i.dim,this.shield=i.shield,this.rearShield=i.rearShield,this._placeLights(i.dim),!0}async _load(e,t){let i=(await this.loader.loadAsync(e.file,_=>{t&&_.total&&t(_.loaded/_.total)})).scene,s=new Fe;s.add(i);let a=new Fe;if(a.add(s),e.hide){let _=[];i.traverse(w=>{e.hide.test(w.name||"")&&_.push(w)}),_.forEach(w=>w.removeFromParent())}i.rotation.x=e.rotX||0,s.updateMatrixWorld(!0);let o=new zt().setFromObject(s,!0),c=o.getSize(new M);c.x>c.z*1.02&&(i.rotation.y+=Math.PI/2),e.flip&&(i.rotation.y+=Math.PI),s.updateMatrixWorld(!0),o.setFromObject(s,!0),c=o.getSize(new M),s.scale.setScalar(e.length/c.z),s.updateMatrixWorld(!0),o.setFromObject(s,!0);let l=o.getCenter(new M);s.position.set(-l.x,-o.min.y,-l.z),a.updateMatrixWorld(!0),o.setFromObject(a,!0);let h={length:o.max.z-o.min.z,width:o.max.x-o.min.x,height:o.max.y-o.min.y};if(h.eye=e.eye||[-h.width*.2,Math.min(h.height*.8,1.15),0],h.lamps=e.lamps||ea(h),h.seat=e.seat||null,(e.seat?.drop||e.seat?.forward)&&e.seatMesh){a.updateMatrixWorld(!0);let _=new M;i.traverse(w=>{!w.isMesh||!e.seatMesh.test(w.name)||(w.getWorldPosition(_),_.y-=e.seat.drop||0,_.z-=e.seat.forward||0,w.position.copy(w.parent.worldToLocal(_)))}),a.updateMatrixWorld(!0)}e.basicMetal&&i.traverse(_=>{if(!_.isMesh||Array.isArray(_.material))return;let w=_.material;w.transmission>0||w.transparent&&w.opacity<.9||(_.material=new Qe({name:w.name,color:w.color,map:w.map,side:w.side,...e.basicMetal}),w.dispose())});let d=[],u=[];i.traverse(_=>{if(!_.isMesh)return;e.steerMesh&&e.steerMesh.test(_.name)&&(_.material=W0()),e.seatMesh&&e.seatMesh.test(_.name)&&(_.material=W0(5912608,.52));let w=Array.isArray(_.material)?_.material:[_.material],S=!1;for(let D of w){if(D.transmission>0&&(D.transmission=0,D.transparent=!0,D.opacity=.32,D.depthWrite=!1,S=!0),D.transparent&&D.opacity<.9&&(S=!0),S&&!D.userData.glass&&xw(D),e.doubleSide&&!D.transparent&&(D.side=dt),e.mats&&e.mats[D.name])for(let[E,T]of Object.entries(e.mats[D.name]))E==="envK"?D.userData.envK=T:D[E]?.isColor?D[E].set(T):D[E]=T;/tail|brake|emissivered|rear.?light/i.test(D.name)&&D.emissive&&(D.emissive.set(16718346),d.push(D)),this._env(D),Tt(D)}_.castShadow=!S,_.receiveShadow=!0,S&&u.push(_)});let f=e.wheels?this._wheels(a,e,h):[],g=e.door?this._door(a,e):null;a.updateMatrixWorld(!0);let v=V0(u,h),m=V0(u,h,!0),p=vw(a,i,v),x=G0(a,h),b=e.steer;if(b&&e.steerShift){let _=new M(...b.n),w=new M,S=[];i.traverse(D=>{e.steerMesh.test(D.name)&&D.isMesh&&S.push(D)});for(let D of S)D.getWorldPosition(w).addScaledVector(_,-e.steerShift),D.parent.worldToLocal(w),D.position.copy(w);b={...b,c:new M(...b.c).addScaledVector(_,-e.steerShift).toArray()}}let y=null;if(b&&e.steerMesh){let _=[];i.traverse(w=>{w.isMesh&&e.steerMesh.test(w.name)&&_.push(w)}),y=new Fe,y.position.fromArray(b.c),a.add(y),a.updateMatrixWorld(!0);for(let w of _)y.attach(w)}return{def:e,group:a,dim:h,wheels:f,door:g,tailMats:d,wipers:p,shield:v,rearShield:m,screen:x,steer:b,steerPivot:y,anim:null}}_env(e){e.envMap=this.envMap,e.envMapIntensity=(this.envMap?1:.5)*(e.userData.envK??1)}setEnvMap(e){this.envMap=e;for(let t of this.cache.values())t.group.traverse(n=>{if(n.isMesh)for(let i of Array.isArray(n.material)?n.material:[n.material])this._env(i)})}_door(e,t){let n=[];if(e.traverse(a=>{if(!(a===e||!t.door.test(a.name||""))){for(let o=a.parent;o&&o!==e;o=o.parent)if(t.door.test(o.name||""))return;n.push(a)}}),!n.length)return null;e.updateMatrixWorld(!0);let i=new zt;for(let a of n)i.expandByObject(a,!0);let s=new Et;s.position.set(i.min.x+.04,0,i.min.z+.06),e.add(s),e.updateMatrixWorld(!0);for(let a of n)s.attach(a);return{pivot:s,amount:0}}setDoor(e){let t=this.current?.door;if(!t)return;t.amount=e;let n=e*e*(3-2*e);t.pivot.rotation.y=-1.05*n}frontWheel(e){let t=this.current,n=null;for(let s of t?.wheels||[])(!n||s.pivot.position.z<n.pivot.position.z)&&(n=s);let i=this.dim;return n?e.set(-i.width/2+.12,n.pivot.position.y,n.pivot.position.z):e.set(-i.width/2,.33,-i.length*.32)}_wheels(e,t,n){let i=[];e.traverse(a=>{if(!(a===e||!t.wheels.test(a.name||""))){for(let o=a.parent;o&&o!==e;o=o.parent)if(t.wheels.test(o.name||""))return;i.push(a)}});let s=[];for(let a of i){let o=new zt().setFromObject(a,!0);if(o.isEmpty())continue;let c=o.getSize(new M),l=o.getCenter(new M);if(!(Math.abs(c.y-c.z)<.28*Math.max(c.y,c.z)&&c.z<n.length*.35&&c.y<n.height*.95&&c.y>n.height*.12&&l.y<n.height*.5))continue;let u=new Et;u.position.set(l.x,o.max.y-c.z/2,l.z),e.add(u),e.updateMatrixWorld(!0),u.attach(a),s.push({pivot:u,radius:c.z/2})}return s}_placeLights(e){no(this.headlights,e);let[t,n,i]=(e.lamps||ea(e)).tail;this.tailGlow.forEach((a,o)=>a.position.set(o?t:-t,n,i+.03)),this.contact.scale.set(e.width*1.12,1,e.length*1.06);let s=this.current?.screen;s?this.cabin.position.copy(s.pos).add(new M(0,.02,.12)):this.cabin.position.set(e.eye[0]*.5,e.eye[1]-.2,e.eye[2]-.6)}setLights(e){this.lampLevel=e}_face(e,t){return this.viewer?(e.getWorldPosition(this._gv),this._gv.subVectors(this.viewer.position,this._gv).normalize(),this._gb.set(0,0,t).transformDirection(this.root.matrixWorld),Nt.smoothstep(this._gv.dot(this._gb),-.05,.35)):1}setWiper(e){if(!(!this.current||e===this.current.wiperTh)){this.current.wiperTh=e;for(let t of this.current.wipers)t(e)}}update(e,t){this.time+=e,this.root.position.copy(t.pos),this.root.rotation.set(t.pitch||0,t.yaw,0,"YXZ");let n=(t.speed-this.lastSpeed)/Math.max(e,.001);this.brakeAcc=n,this.lastSpeed=t.speed;let i=1-Math.exp(-e*4);this.pitch+=(ul(n*.004,-.04,.04)-this.pitch)*i,this.roll+=(ul(-t.latVel*.012,-.05,.05)-this.roll)*i;let s=ul(t.speed/20,0,1);this.tilt.rotation.set(this.pitch,0,this.roll);let a=1-(this.calm||0);this.tilt.position.y=(.005*Math.sin(this.time*7.3)+.004*Math.sin(this.time*12.1))*s*a;let o=(t.rough||0)*s*a;if(o>.001&&(this.tilt.position.y+=o*(.014*Math.sin(this.time*19.3)+.01*Math.sin(this.time*31.7+1.1)),this.tilt.rotation.z+=o*(.006*Math.sin(this.time*13.1)+.004*Math.sin(this.time*23.9)),this.tilt.rotation.x+=o*.004*Math.sin(this.time*17.7+.4)),this.current){let u=mw(t);this.steerAngle=(this.steerAngle||0)+(u-(this.steerAngle||0))*(1-Math.exp(-e*8)),this.current.steerPivot&&this.current.steerPivot.quaternion.setFromAxisAngle(new M(...this.current.steer.n).normalize(),this.steerAngle);for(let f of this.current.wheels)f.pivot.rotation.x-=t.speed*e/f.radius}let c=this.lampLevel;io(this.headlights,this.root,this.viewer,c);let l=this.brakeAcc||0;this.brake+=((l<-1.2?1:0)-this.brake)*(1-Math.exp(-e*8));let h=.3+.7*c+.6*this.brake,d=this._face(this.tailGlow[0],1);this.tailGlow.forEach(u=>{u.material.opacity=Math.min(.8,.45*h)*d;let f=2+1.3*h;u.scale.set(f*1.35,f*.85,1),u.visible=d>.01});for(let u of this.current?.tailMats||[])u.emissiveIntensity=.8+2.6*h;this.cabin.intensity=this.cabinLevel}};function gw(){let r=document.createElement("canvas");r.width=128,r.height=256;let e=r.getContext("2d");e.filter="blur(14px)",e.fillStyle="#fff",e.beginPath(),e.roundRect?e.roundRect(26,30,76,196,26):e.rect(26,30,76,196),e.fill(),e.filter="blur(6px)",e.globalAlpha=.5,e.fillRect(36,44,56,168);let t=new yn(r);return t.colorSpace=bn,t}function V0(r,e,t=!1){let[n,i,s]=e.eye,a=new M(n,i,s),o=new M,c=new M,l=new M,h=new M,d=new M,u=new M,f=new M,g=[],v=0,m=t?r.filter(_=>!/light|lamp/i.test(_.name)&&/windscreen.*rear|rear.*windscreen|rear.*window|back.*glass/i.test(_.name)):[];for(let _ of m.length?m:r){let w=_.geometry.attributes.position,S=_.geometry.index,D=(S?S.count:w.count)/3;for(let E=0;E<D;E++){let T=S?S.getX(E*3):E*3,F=S?S.getX(E*3+1):E*3+1,N=S?S.getX(E*3+2):E*3+2;if(o.fromBufferAttribute(w,T).applyMatrix4(_.matrixWorld),c.fromBufferAttribute(w,F).applyMatrix4(_.matrixWorld),l.fromBufferAttribute(w,N).applyMatrix4(_.matrixWorld),d.copy(o).add(c).add(l).multiplyScalar(1/3),!m.length&&((t?d.z<s+.35:d.z>s-.25)||d.y<i-.3))continue;h.subVectors(c,o).cross(l.clone().sub(o));let H=h.length()/2;H<1e-7||(h.normalize(),h.dot(a.clone().sub(d))<0&&h.negate(),!(!m.length&&(Math.abs(h.x)>.5||(t?h.z>-.25:h.z<.25||h.y>-.2)))&&(u.addScaledVector(h,H),f.addScaledVector(d,H),v+=H,g.push(o.clone(),c.clone(),l.clone())))}}if(t&&v<.1)return null;let p={rear:t,center:new M,normal:new M,right:new M,up:new M,bounds:[0,0,0,0]};if(v<.1?(p.center.set(0,i+.1,s-.62),p.normal.set(0,-.6,.8),p.bounds=[-e.width*.38,e.width*.38,-.3,.3]):(p.center.copy(f).multiplyScalar(1/v),p.normal.copy(u).normalize()),p.right.set(1,0,0).addScaledVector(p.normal,-p.normal.x).normalize(),p.up.crossVectors(p.normal,p.right),p.up.y<0&&p.up.negate(),t)return p.geometry=new Pe().setFromPoints(g),p.geometry.setAttribute("glassUV",new Ie(g.flatMap(_=>{let w=_.clone().sub(p.center);return[w.dot(p.right),w.dot(p.up)]}),2)),p;if(g.length){let _=[1e9,-1e9,1e9,-1e9];for(let w of g){w.sub(p.center);let S=w.dot(p.right),D=w.dot(p.up);_[0]=Math.min(_[0],S),_[1]=Math.max(_[1],S),_[2]=Math.min(_[2],D),_[3]=Math.max(_[3],D)}p.bounds=_}let x=(p.bounds[1]-p.bounds[0])/2,b=(p.bounds[0]+p.bounds[1])/2,y=p.bounds[2]+.03;return p.wipers=[{u:b-x*.76,v:y,rest:0,sign:1,r0:x*.1,r1:x*.68},{u:b+x*.76,v:y,rest:Math.PI,sign:-1,r0:x*.1,r1:x*.68}],p.sweep=1.62,p}function vw(r,e,t){let n=[];e.traverse(a=>{/^WiperBladeArm\d*$/i.test(a.name)&&!a.isMesh&&n.push(a)});let i=[],s=t.normal;if(n.length){let a=[];for(let o of n){let c=[],l=[];if(o.children.forEach(N=>N.traverse(H=>{if(!H.isMesh)return;let L=H.geometry.attributes.position,A=N.isMesh?c:l;for(let C=0;C<L.count;C++)A.push(new M().fromBufferAttribute(L,C).applyMatrix4(H.matrixWorld))})),!c.length||!l.length)continue;let h=l.reduce((N,H)=>N.add(H),new M).multiplyScalar(1/l.length),d=c[0];for(let N of c)N.distanceToSquared(h)>d.distanceToSquared(h)&&(d=N);let u=c.filter(N=>N.distanceTo(d)<.03),f=u.reduce((N,H)=>N.add(H),new M).multiplyScalar(1/u.length),g=f.clone().sub(t.center),v=g.dot(t.right),m=g.dot(t.up),p=h.clone().sub(f),x=Math.atan2(p.dot(t.up),p.dot(t.right)),b=new re(Math.cos(x),Math.sin(x)),y=1e9,_=0;for(let N of l){let H=N.clone().sub(f),L=H.dot(t.right)*b.x+H.dot(t.up)*b.y;y=Math.min(y,L),_=Math.max(_,L)}let w=Math.cos(x)>=0?1:-1;o.updateMatrixWorld(!0);let S=o.matrixWorld.clone(),D=o.parent.matrixWorld.clone().invert();o.matrixAutoUpdate=!1;let E=new Ee,T=new Ee,F=new Ee().makeTranslation(-f.x,-f.y,-f.z);E.makeTranslation(f.x,f.y,f.z),i.push(N=>{T.makeRotationAxis(s,w*N),o.matrix.copy(D).multiply(E).multiply(T).multiply(F).multiply(S),o.matrixWorldNeedsUpdate=!0}),a.push({u:v,v:m,rest:x,sign:w,r0:Math.max(0,y),r1:_})}if(a.length){for(a.sort((o,c)=>o.u-c.u);a.length<2;)a.push(a[0]);t.wipers=a.slice(0,2)}}if(!i.length){let a=new Qe({color:1315862,roughness:.55,metalness:.4}),o=new Ee().makeBasis(t.right,t.up,s);for(let c of t.wipers){let l=new Fe;l.position.copy(t.center).addScaledVector(t.right,c.u).addScaledVector(t.up,c.v).addScaledVector(s,-.02),l.quaternion.setFromRotationMatrix(o);let h=new Fe;l.add(h);let d=new Ue(new ht(c.r1*.97,.008,.008),a);d.position.set(c.r1*.485,0,-.014);let u=new Ue(new ht(c.r1-c.r0,.012,.012),a);u.position.set((c.r0+c.r1)/2,0,-.004),h.add(d,u),h.rotation.z=c.rest,r.add(l),i.push(f=>{h.rotation.z=c.rest+c.sign*f})}}return i}var $d=new Map;function W0(r=1249810,e=.58){let t=r+"|"+e;if($d.has(t))return $d.get(t);let n=new Qe({name:"Leather",color:r,roughness:e,metalness:0});return n.onBeforeCompile=i=>{i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
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
        roughnessFactor = clamp(roughnessFactor + (lNoise(vLP * 330.0) - 0.5) * 0.25, 0.3, 1.0);`)},n.customProgramCacheKey=()=>"leather",$d.set(t,n),n}function xw(r){r.userData.glass=!0,r.metalness=0,r.roughness=Math.min(r.roughness,.04),r.depthWrite=!1,r.onBeforeCompile=e=>{e.fragmentShader=e.fragmentShader.replace("#include <opaque_fragment>",`#include <opaque_fragment>
      gl_FragColor.a = clamp(gl_FragColor.a + dot(reflectedLight.indirectSpecular + reflectedLight.directSpecular, vec3(0.3, 0.59, 0.11)) * 1.4, 0.0, 0.94);`)},r.customProgramCacheKey=()=>"glass-reflect"}var ta=(r,e,t)=>Math.min(t,Math.max(e,r)),pl=16,ml=35,bw=(r,e,t)=>{let n=((e-r+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI;return r+n*t},q0={chase:{distance:6.2,speedBack:1.4,cineBack:1.8,height:2.3,carHeight:.4,lookAhead:13,lookHeight:1.75,slopeLook:10,follow:5,lookFollow:7,near:.3,focal:16,aperture:3.5},low:{distance:4.2,height:.95,lookAhead:10,lookHeight:1,slopeLook:10,follow:5,lookFollow:7,near:.3,focal:24,aperture:3.5},side:{distance:23.2,height:4.35,lookHeight:.42,follow:9,lookFollow:12,near:.3,focal:24,aperture:1.8},cockpit:{eyeSide:0,eyeHeight:0,eyeForward:0,pitch:.24,lookDistance:30,follow:9,lookFollow:9,near:.04,focal:24,aperture:3.5},orbit:{radius:30,height:7.5,heightWave:3,waveRate:2,speed:.13,lookHeight:.8,follow:5,lookFollow:7,near:.3,focal:24,aperture:2.8},drone:{distance:15,height:13,lookAhead:6,lookHeight:.5,follow:3.5,lookFollow:7,near:.3,focal:24,aperture:3.5}},fl=class{constructor(e){this.camera=e,this.mode=0,this.yaw=0,this.orbit=.9,this.relP=new M,this.relL=new M,this.fov=60,this.first=!0,this.transition=null,this.cine=0,this.intro=-1,this._p=new M,this._l=new M,this._f=new M,this._r=new M,this._cp=new M,this._cl=new M,this._dl=new M,this._eye=new M,this.eyeAt=null,this.look={yaw:0,pitch:0,hold:!1,idle:0},this.sideSign=0,this.sidePref=0,this.sideDist=null,this.orbitR=null,this.tune=structuredClone(q0),this.focal=this.focalS=this.focalEff=24,this.aperture=this.apertureS=3.5}zoomBy(e){this.focal=ta(this.focal/e,pl,ml),this.tune[Wt[this.mode].id].focal=this.focal}fovFor(e){let t=Math.atan(18/e),n=this.camera.aspect||1.6;return(n>=1?2*Math.atan(Math.tan(t)/n):2*t)*180/Math.PI}lookBy(e,t){let n=this.look;n.yaw=Math.atan2(Math.sin(n.yaw-e),Math.cos(n.yaw-e)),n.pitch=ta(n.pitch+t,-1.2,1.2)}get name(){return Wt[this.mode].name}resetTune(e){this.tune[e]=structuredClone(q0[e]),this.setMode(this.mode)}startIntro(){this.intro=0,this.first=!0}setMode(e){let t=e%Wt.length;!this.first&&t!==this.mode&&(this.transition={elapsed:0,duration:2,fromP:this.relP.clone(),fromL:this.relL.clone(),fromFocal:this.focalS,fromAperture:this.apertureS,fromNear:this.camera.near}),this.mode=t,this.intro=-1,this.sideSign=0,this.look.yaw=this.look.pitch=0;let n=Wt[this.mode].id,i=this.tune[n];this.focal=i.focal,this.aperture=i.aperture,this.transition||(this.focalS=this.focal,this.apertureS=this.aperture,this.camera.near=i.near,this.camera.updateProjectionMatrix())}update(e,t){let n=Wt[this.mode].id,{pos:i,speed:s,dim:a}=t;this.yaw=this.first?t.yaw:bw(this.yaw,t.yaw,1-Math.exp(-e*3));let o=(L,A)=>A.set(-Math.sin(L),0,-Math.cos(L)),c=(L,A)=>A.set(Math.cos(L),0,-Math.sin(L)),l=o(this.yaw,this._f),h=new M(-Math.sin(t.yaw),0,-Math.cos(t.yaw)),d=c(t.yaw,this._r),u=this._p,f=this._l,g=5,v=7,m=!1,p=ta(s/45,0,1),x=t.fx||0,b=Math.tan(t.pitch||0),y=this.cine,_=this.tune[n];switch(g=_.follow,v=_.lookFollow,n){case"chase":u.copy(i).addScaledVector(l,-(a.length*.5+_.distance+_.speedBack*x+_.cineBack*y)).setY(i.y+_.height+a.height*_.carHeight),f.copy(i).addScaledVector(l,_.lookAhead).setY(i.y+_.lookHeight+b*_.slopeLook);break;case"low":u.copy(i).addScaledVector(l,-(a.length*.5+_.distance)).setY(i.y+_.height),f.copy(i).addScaledVector(l,_.lookAhead).setY(i.y+_.lookHeight+b*_.slopeLook);break;case"side":{this.sideSign||(this.sideSign=this.sidePref||t.side||1),u.copy(i).addScaledVector(d,this.sideSign*(this.sideDist??_.distance)).setY(i.y+_.height),f.copy(i).setY(i.y+a.height*_.lookHeight);break}case"cockpit":{let[L,A,C]=a.eye;this.eyeAt&&this.eyeAt(this._eye)?u.copy(this._eye):u.copy(i).addScaledVector(d,L).addScaledVector(h,-C).setY(i.y+A-b*C),u.addScaledVector(d,_.eyeSide).addScaledVector(h,_.eyeForward),u.y+=_.eyeHeight;let U=this.cockpitPitch==null?_.pitch:this.cockpitPitch+_.pitch-.24;f.copy(u).addScaledVector(h,_.lookDistance).setY(u.y-_.lookDistance*Math.tan(U)+b*_.lookDistance),m=!0;break}case"orbit":this.orbit+=e*_.speed;{let L=this.orbitR??_.radius;u.set(i.x+Math.cos(this.orbit)*L,i.y+_.height+Math.sin(this.orbit*_.waveRate)*_.heightWave,i.z+Math.sin(this.orbit)*L)}f.copy(i).setY(i.y+_.lookHeight);break;case"drone":u.copy(i).addScaledVector(l,-_.distance).setY(i.y+_.height),f.copy(i).addScaledVector(l,_.lookAhead).setY(i.y+_.lookHeight);break}this.focalEff=this.focalS*(1-.04*p);let w=this.fovFor(this.focalEff),S=!1;if(this.intro>=0&&n==="chase"){this.intro+=e;let L=Math.min(1,this.intro/6.5),A=L*L*(3-2*L);if(L>=1)this.intro=-1;else{S=!0;let C=this.tune.chase,U=a.length*.5+C.distance+C.cineBack*y,O=.5+(Math.PI-.5)*A,k=C.distance+(U-C.distance)*A,V=i.y+.65+(C.height+a.height*C.carHeight-.65)*A,j=f.clone();u.copy(i).addScaledVector(h,Math.cos(O)*k).addScaledVector(d,(t.side||1)*Math.sin(O)*Math.min(k,3.4)).setY(V),f.copy(i).setY(i.y+.7).lerp(j,A),w=36+(w-36)*A}}else this.intro>=0&&(this.intro=-1);let D=u.sub(i),E=f.sub(i),T=!!this.transition&&!S;if(T){let L=this.transition,A=ta((L.elapsed+=e)/L.duration,0,1),C=A*A*(3-2*A);this.relP.lerpVectors(L.fromP,D,C),this.relL.lerpVectors(L.fromL,E,C),this.focalS=Nt.lerp(L.fromFocal,this.focal,C),this.apertureS=Nt.lerp(L.fromAperture,this.aperture,C),this.camera.near=Nt.lerp(L.fromNear,_.near,C),A>=1&&(this.transition=null)}else{let L=1-Math.exp(-e*g),A=1-Math.exp(-e*v);m&&(L=A=1),(this.first||S)&&(L=A=1),this.relP.lerp(D,L),this.relL.lerp(E,A),this.focalS+=(this.focal-this.focalS)*(1-Math.exp(-e*8)),this.apertureS+=(this.aperture-this.apertureS)*(1-Math.exp(-e*8)),this.camera.near=_.near}this.focalEff=this.focalS*(1-.04*p),S||(w=this.fovFor(this.focalEff)),this.fov+=(w-this.fov)*(this.first||this.transition?1:1-Math.exp(-e*3)),this.first=!1;let F=this.look,N=this._cp.copy(this.relP),H=this._cl.copy(this.relL);if(Math.abs(F.yaw)>1e-4||Math.abs(F.pitch)>1e-4)if(m){let L=this._dl.copy(H).sub(N),A=L.length(),C=Math.atan2(L.x,L.z)-F.yaw,U=ta(Math.atan2(L.y,Math.hypot(L.x,L.z))+F.pitch,-1.2,1.2);L.set(Math.sin(C)*Math.cos(U),Math.sin(U),Math.cos(C)*Math.cos(U)).multiplyScalar(A),H.copy(N).add(L)}else{let L=Math.cos(F.yaw),A=Math.sin(F.yaw);N.set(N.x*L+N.z*A,N.y,-N.x*A+N.z*L),H.set(H.x*L+H.z*A,H.y,-H.x*A+H.z*L);let C=Math.hypot(N.x,N.z),U=N.length(),O=ta(Math.atan2(N.y,C)+F.pitch,.03,1.35),k=U*Math.cos(O)/Math.max(C,.001);N.set(N.x*k,U*Math.sin(O),N.z*k)}if(this.camera.position.copy(i).add(N),this.groundAt){let L=this.groundAt(this.camera.position.x,this.camera.position.z)+.6;this.camera.position.y<L&&(this.camera.position.y=L)}this._l.copy(i).add(H),this.camera.lookAt(this._l),(Math.abs(this.camera.fov-this.fov)>.01||T)&&(this.camera.fov=this.fov,this.camera.updateProjectionMatrix())}};var gl=r=>440*Math.pow(2,(r-69)/12),Js=(r,e)=>r+Math.random()*(e-r),ef=r=>r[Math.floor(Math.random()*r.length)],vl=(r,e,t)=>Math.min(t,Math.max(e,r)),X0=[[{r:41,n:[53,57,60,64]},{r:40,n:[52,55,59,62]},{r:38,n:[50,53,57,60]},{r:36,n:[52,55,59,62]}],[{r:38,n:[50,53,57,60]},{r:43,n:[53,55,59,62]},{r:36,n:[52,55,59,62]},{r:45,n:[55,57,60,64]}],[{r:36,n:[52,55,59,62]},{r:45,n:[55,57,60,64]},{r:38,n:[50,53,57,60]},{r:43,n:[53,55,59,62]}],[{r:45,n:[55,57,60,64]},{r:38,n:[50,53,57,60]},{r:43,n:[53,55,59,62]},{r:36,n:[52,55,59,62]}]],j0=[[0,6,10],[0,7,10,14],[0,10],[0,3,8,11]],yw=[72,74,76,79,81,84],xl=class{constructor(){this.ctx=null,this.mode=0,this.bpm=74,this.step=0,this.bar=0,this.prog=X0[0],this.pattern=j0[0],this.lastMel=-99}async start(){if(this.ctx){await this.ctx.resume();return}let e=window.AudioContext||window.webkitAudioContext;if(!e)return;let t=this.ctx=new e;this.master=t.createGain(),this.master.gain.value=0;let n=t.createDynamicsCompressor();n.threshold.value=-16,n.ratio.value=3,this.master.connect(n).connect(t.destination),this.musicGain=t.createGain();let i=t.createBiquadFilter();i.type="lowpass",i.frequency.value=4800,i.Q.value=.4,this.musicGain.connect(i).connect(this.master),this.pianoBus=t.createGain();let s=t.createBiquadFilter();s.type="lowpass",s.frequency.value=2400,this.pianoBus.connect(s).connect(this.musicGain),this.drumBus=t.createGain();let a=t.createBiquadFilter();a.type="lowpass",a.frequency.value=3400,this.drumBus.connect(a).connect(this.musicGain);let o=t.sampleRate*2.6,c=t.createBuffer(2,o,t.sampleRate);for(let g=0;g<2;g++){let v=c.getChannelData(g);for(let m=0;m<o;m++)v[m]=(Math.random()*2-1)*Math.pow(1-m/o,3.2)}this.reverb=t.createConvolver(),this.reverb.buffer=c;let l=t.createGain();l.gain.value=.38,this.reverbIn=t.createGain(),this.reverbIn.connect(this.reverb).connect(l).connect(this.musicGain),s.connect(this.reverbIn),this.echo=t.createDelay(2),this.echo.delayTime.value=60/this.bpm*.75;let h=t.createGain();h.gain.value=.34;let d=t.createBiquadFilter();d.type="lowpass",d.frequency.value=1800,this.echo.connect(d).connect(h).connect(this.echo),d.connect(this.musicGain),this.wow=t.createOscillator(),this.wow.frequency.value=.55,this.wowGain=t.createGain(),this.wowGain.gain.value=9,this.wow.connect(this.wowGain),this.wow.start();let u=t.createBuffer(1,t.sampleRate*2,t.sampleRate),f=u.getChannelData(0);for(let g=0;g<f.length;g++)f[g]=Math.random()*2-1;this.noise=u,this._vinyl(),this._ambient(),this.nextTime=t.currentTime+.15,this.timer=setInterval(()=>this._tick(),50),document.addEventListener("visibilitychange",()=>{document.hidden?t.suspend():this.mode!==2&&t.resume()}),this.setMode(this.mode)}setMode(e){if(this.mode=e,!this.ctx)return;let t=this.ctx.currentTime;this.master.gain.setTargetAtTime(e===2?0:.9,t,.4)}_src(e,t=!0){let n=this.ctx.createBufferSource();return n.buffer=e,n.loop=t,n.loopStart=Math.random(),n}_vinyl(){let e=this.ctx,t=e.sampleRate*4,n=e.createBuffer(1,t,e.sampleRate),i=n.getChannelData(0);for(let c=0;c<t;c++)i[c]=(Math.random()*2-1)*.012;for(let c=0;c<70;c++){let l=Math.floor(Math.random()*(t-10));i[l]+=Js(.25,.8)*(Math.random()<.5?-1:1),i[l+1]-=Js(.1,.4)}let s=e.createBufferSource();s.buffer=n,s.loop=!0;let a=e.createBiquadFilter();a.type="highpass",a.frequency.value=1300;let o=e.createGain();o.gain.value=.16,s.connect(a).connect(o).connect(this.musicGain),s.start()}_ambient(){let e=this.ctx;this.ambGain=e.createGain(),this.ambGain.gain.value=1,this.ambGain.connect(this.master),this.outLp=e.createBiquadFilter(),this.outLp.type="lowpass",this.outLp.frequency.value=2e4,this.outGain=e.createGain(),this.outGain.gain.value=1,this.outGain.connect(this.outLp).connect(this.ambGain);let t=(u,f,g)=>{let v=this._src(this.noise),m=e.createBiquadFilter();m.type=u,m.frequency.value=f,m.Q.value=g;let p=e.createGain();return p.gain.value=0,v.connect(m).connect(p).connect(this.outGain),v.start(),p};this.rainG=t("bandpass",2200,.5),this.windG=t("lowpass",420,.7),this.tireG=t("lowpass",750,.6);let n=e.createOscillator();n.frequency.value=.13,this.gustG=e.createGain(),this.gustG.gain.value=0,n.connect(this.gustG).connect(this.windG.gain),n.start(),this.engLp=e.createBiquadFilter(),this.engLp.type="lowpass",this.engLp.frequency.value=260,this.engG=e.createGain(),this.engG.gain.value=0,this.eng=[e.createOscillator(),e.createOscillator()],this.eng[0].type="sawtooth",this.eng[1].type="triangle",this.eng.forEach(u=>{u.frequency.value=40,u.connect(this.engLp),u.start()}),this.engLp.connect(this.engG).connect(this.ambGain);let i=e.sampleRate,s=i*4,a=e.createBuffer(1,s,i),o=a.getChannelData(0);for(let u=0;u<1400;u++){let f=Math.floor(Math.random()*s),g=.08+Math.random()*Math.random()*.5,v=1800+Math.random()*3800,m=i*(.0012+Math.random()*.0025),p=i*(.004+Math.random()*.008);for(let x=0;x<i*.03;x++)o[(f+x)%s]+=g*((Math.random()*2-1)*Math.exp(-x/m)+.5*Math.sin(6.2832*v*x/i)*Math.exp(-x/p))}let c=e.createBufferSource();c.buffer=a,c.loop=!0;let l=e.createBiquadFilter();l.type="highpass",l.frequency.value=700,this.glassG=e.createGain(),this.glassG.gain.value=0,c.connect(l).connect(this.glassG).connect(this.ambGain),c.start();let h=this._src(this.noise),d=e.createBiquadFilter();d.type="lowpass",d.frequency.value=900,this.roofG=e.createGain(),this.roofG.gain.value=0,h.connect(d).connect(this.roofG).connect(this.ambGain),h.start()}setAmbient({speed:e,rain:t,snow:n,wind:i=0,dark:s=0,fx:a=0,inCar:o=!1}){if(!this.ctx)return;let c=this.ctx.currentTime,l=.25,h=this.mode===0?1:0;this.ambGain.gain.setTargetAtTime(h,c,.4),this.outGain.gain.setTargetAtTime(o?.4:1,c,.3),this.outLp.frequency.setTargetAtTime(o?1600:2e4,c,.3),this.glassG.gain.setTargetAtTime(o?t*.08*(1+.6*s):0,c,.3),this.roofG.gain.setTargetAtTime(o?t*.02*(1+s):0,c,.3),this.rainG.gain.setTargetAtTime(t*.08*(1+.6*s),c,l),this.windG.gain.setTargetAtTime(.012+e*.0016+n*.05+i*i*.1+a*.085,c,l),this.gustG.gain.setTargetAtTime(i*i*.07,c,l),this.tireG.gain.setTargetAtTime(Math.min(e*.0011,.05)*(1+t),c,l);let d=30+e*2.2;this.eng[0].frequency.setTargetAtTime(d,c,.15),this.eng[1].frequency.setTargetAtTime(d*2,c,.15),this.engLp.frequency.setTargetAtTime(180+e*7,c,.2),this.engG.gain.setTargetAtTime(.02+Math.min(e,40)*4e-4,c,.2)}passDur(e){return vl(2.8-e*.03,.8,2.6)}passBy(e,t=0,n=3){if(!this.ctx||this.mode!==0)return;let i=this.ctx,s=i.currentTime,a=this.passDur(e),o=s+a*.5,c=vl(.12+e/45,.12,1)/(1+.12*Math.max(0,n-2)),l=i.createStereoPanner();l.pan.setValueAtTime(t*.4,s),l.pan.linearRampToValueAtTime(t,o),l.pan.linearRampToValueAtTime(t*.5,s+a),l.connect(this.outGain);let h=this._src(this.noise,!0),d=i.createBiquadFilter();d.type="bandpass",d.Q.value=.7,d.frequency.setValueAtTime(400+e*10,s),d.frequency.linearRampToValueAtTime(900+e*22,o),d.frequency.exponentialRampToValueAtTime(260+e*5,s+a);let u=i.createGain();u.gain.setValueAtTime(1e-4,s),u.gain.exponentialRampToValueAtTime(.16*c,o),u.gain.exponentialRampToValueAtTime(1e-4,s+a),h.connect(d).connect(u).connect(l),h.start(s),h.stop(s+a+.05);let f=i.createOscillator();f.type="sawtooth";let g=55+e*1.1,v=Math.min(.25,e/343);f.frequency.setValueAtTime(g*(1+v),s),f.frequency.setValueAtTime(g*(1+v),o-a*.08),f.frequency.exponentialRampToValueAtTime(g*(1-v),o+a*.12);let m=i.createBiquadFilter();m.type="lowpass",m.frequency.value=320+e*6;let p=i.createGain();p.gain.setValueAtTime(1e-4,s),p.gain.exponentialRampToValueAtTime(.07*c,o),p.gain.exponentialRampToValueAtTime(1e-4,s+a),f.connect(m).connect(p).connect(l),f.start(s),f.stop(s+a+.05)}setWater(e,t=0){if(!this.ctx)return;let n=this.ctx,i=n.currentTime;if(!this.waterG){if(e<=.001)return;let s=n.sampleRate,a=s*4,o=n.createBuffer(1,a,s),c=o.getChannelData(0),l=0;for(let u=0;u<a;u++)l=l*.985+(Math.random()*2-1)*.06,c[u]=l*.55+(Math.random()*2-1)*.045;for(let u=0;u<1500;u++){let f=Math.floor(Math.random()*a),g=380*Math.pow(5,Math.random()),v=s*(.003+Math.random()*.009),m=.05+Math.random()*Math.random()*.22,p=0;for(let x=0;x<v*3;x++)p+=6.2832*g*(1+.7*x/v)/s,c[(f+x)%a]+=m*Math.sin(p)*Math.exp(-x/v)}for(let u=0;u<2e3;u++){let f=u/2e3;c[u]=c[u]*f+c[a-2e3+u]*(1-f)}let h=n.createBufferSource();h.buffer=o,h.loop=!0,h.loopEnd=(a-2e3)/s;let d=n.createBiquadFilter();d.type="highpass",d.frequency.value=110,this.waterPan=n.createStereoPanner(),this.waterG=n.createGain(),this.waterG.gain.value=0,h.connect(d).connect(this.waterG).connect(this.waterPan).connect(this.outGain),h.start()}this.waterG.gain.setTargetAtTime(vl(e,0,1)*.3,i,.35),this.waterPan.pan.setTargetAtTime(vl(t,-1,1),i,.25)}splash(e=1){if(!this.ctx||this.mode!==0)return;let t=this.ctx,n=t.currentTime,i=.35+.45*Math.min(1,e),s=this._src(this.noise,!0),a=t.createBiquadFilter();a.type="bandpass",a.Q.value=.6,a.frequency.setValueAtTime(900+900*e,n),a.frequency.exponentialRampToValueAtTime(500,n+i);let o=t.createGain();o.gain.setValueAtTime(1e-4,n),o.gain.exponentialRampToValueAtTime(.22*e,n+.03),o.gain.exponentialRampToValueAtTime(1e-4,n+i),s.connect(a).connect(o).connect(this.outGain),s.start(n),s.stop(n+i+.05)}thunder(e=1.5,t=1){if(!this.ctx||this.mode!==0)return;let n=this.ctx,i=n.currentTime+e,s=n.sampleRate*5,a=n.createBuffer(1,s,n.sampleRate),o=a.getChannelData(0),c=0;for(let u=0;u<s;u++)c=(c+(Math.random()*2-1)*.06)/1.02,o[u]=c*3.5;let l=n.createBufferSource();l.buffer=a;let h=n.createBiquadFilter();h.type="lowpass",h.frequency.setValueAtTime(900,i),h.frequency.exponentialRampToValueAtTime(110,i+4);let d=n.createGain();d.gain.setValueAtTime(1e-4,i),d.gain.linearRampToValueAtTime(.9*t,i+.12),d.gain.setTargetAtTime(1e-4,i+.3,1.1),l.connect(h).connect(d).connect(this.outGain),l.start(i),l.stop(i+5),this._noiseHit(i,.25,"bandpass",700,.3*t,this.outGain)}_tick(){let e=this.ctx;if(!e||e.state!=="running")return;let t=60/this.bpm/4;for(;this.nextTime<e.currentTime+.3;){let n=this.step%2?t*.2:0;this._step(this.step,this.nextTime+n),this.nextTime+=t,++this.step===16&&(this.step=0,this.bar++)}}_step(e,t){e===0&&this.bar%4===0&&(this.prog=ef(X0),this.pattern=ef(j0));let n=this.prog[this.bar%4];if(this.pattern.includes(e)){let i=e===0?1:Js(.55,.8);n.n.forEach((s,a)=>this._epiano(s,t+a*.014+Js(0,.008),i,e===0?2.4:1.2))}e===0&&this._bass(n.r,t,1.7),(e===10||e===14&&Math.random()<.4)&&this._bass(n.r+(Math.random()<.5?0:7),t,.8),(e===0||e===10||e===7&&Math.random()<.3)&&this._kick(t),(e===4||e===12)&&this._snare(t),e%2===0&&this._hat(t,e%4===2?.8:.5,e===14&&Math.random()<.25),e%2===0&&this.bar-this.lastMel>0&&Math.random()<.16&&(this._pluck(ef(yw),t,Js(.5,.9)),this.lastMel=this.bar+(Math.random()<.5?0:-1))}_osc(e,t,n,i,s=0){let a=this.ctx.createOscillator();return a.type=e,a.frequency.value=t,a.detune.value=s,this.wowGain.connect(a.detune),a.start(n),a.stop(n+i),a}_epiano(e,t,n,i){let s=this.ctx,a=gl(e),o=s.createGain();o.gain.setValueAtTime(1e-4,t),o.gain.linearRampToValueAtTime(n*.075,t+.012),o.gain.exponentialRampToValueAtTime(n*.03,t+.4),o.gain.exponentialRampToValueAtTime(1e-4,t+i),this._osc("sine",a,t,i+.1).connect(o),this._osc("triangle",a,t,i+.1,Js(3,8)).connect(o);let c=s.createGain();c.gain.setValueAtTime(n*.022,t),c.gain.exponentialRampToValueAtTime(1e-4,t+.2),this._osc("sine",a*4,t,.3).connect(c).connect(this.pianoBus),o.connect(this.pianoBus)}_bass(e,t,n){let i=this.ctx.createGain();i.gain.setValueAtTime(1e-4,t),i.gain.linearRampToValueAtTime(.2,t+.03),i.gain.exponentialRampToValueAtTime(1e-4,t+n);let s=this.ctx.createBiquadFilter();s.type="lowpass",s.frequency.value=380,this._osc("sine",gl(e),t,n+.1).connect(i),this._osc("triangle",gl(e),t,n+.1).connect(i),i.connect(s).connect(this.musicGain)}_pluck(e,t,n){let i=this.ctx.createGain();i.gain.setValueAtTime(1e-4,t),i.gain.linearRampToValueAtTime(n*.06,t+.01),i.gain.exponentialRampToValueAtTime(1e-4,t+1.1);let s=this.ctx.createBiquadFilter();s.type="lowpass",s.frequency.value=2200,this._osc("triangle",gl(e),t,1.2).connect(i),i.connect(s),s.connect(this.pianoBus);let a=this.ctx.createGain();a.gain.value=.6,s.connect(a).connect(this.echo)}_kick(e){let t=this.ctx.createOscillator(),n=this.ctx.createGain();t.frequency.setValueAtTime(130,e),t.frequency.exponentialRampToValueAtTime(42,e+.14),n.gain.setValueAtTime(.5,e),n.gain.exponentialRampToValueAtTime(1e-4,e+.32),t.connect(n).connect(this.drumBus),t.start(e),t.stop(e+.35)}_noiseHit(e,t,n,i,s,a=this.drumBus){let o=this._src(this.noise,!1),c=this.ctx.createBiquadFilter();c.type=n,c.frequency.value=i;let l=this.ctx.createGain();l.gain.setValueAtTime(s,e),l.gain.exponentialRampToValueAtTime(1e-4,e+t),o.connect(c).connect(l).connect(a),o.start(e,Math.random()),o.stop(e+t+.02)}_snare(e){this._noiseHit(e,.16,"bandpass",1900,.28);let t=this.ctx.createOscillator(),n=this.ctx.createGain();t.frequency.value=185,n.gain.setValueAtTime(.16,e),n.gain.exponentialRampToValueAtTime(1e-4,e+.1),t.connect(n).connect(this.drumBus),t.start(e),t.stop(e+.12)}_hat(e,t,n){this._noiseHit(e,n?.2:.045,"highpass",7500,.12*t*Js(.7,1))}};var bl=27,_w=12,tf=2;function yl(r){let e=r>>>0;return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Mw(){let r=yl(3),e=[],t=[],n=[],i=[],s=new $(6971440),a=new $(11115094),o=new $(14733202),c=(d,u,f,g,v)=>{e.push(d,u,f),n.push(g.r,g.g,g.b),t.push(v[0],v[1],v[2])},l=5;for(let d=0;d<l;d++){let u=d/l*Math.PI*2+(r()-.5)*.7,f=Math.cos(u),g=Math.sin(u),v=-g,m=f,p=1.05+r()*.6,x=.35+r()*.45,b=new M(f*.35,1,g*.35).normalize().toArray(),y=[{c:[f*.03,0,g*.03],hw:.034,col:s},{c:[f*x*.4,p*.6,g*x*.4],hw:.03,col:a}],_=e.length/3;for(let w of y)c(w.c[0]-v*w.hw,w.c[1],w.c[2]-m*w.hw,w.col,b),c(w.c[0]+v*w.hw,w.c[1],w.c[2]+m*w.hw,w.col,b);c(f*x,p*.92,g*x,o,b),i.push(_,_+1,_+2,_+1,_+3,_+2,_+2,_+3,_+4)}let h=new Pe;return h.setAttribute("position",new Ie(e,3)),h.setAttribute("normal",new Ie(t,3)),h.setAttribute("color",new Ie(n,3)),h.setIndex(i),h}function Ew(){let r=yl(11),e=[],t=[],n=[],i=[],s=new $(3955232),a=new $(7312436),o=new $(12176482),c=(d,u,f,g,v)=>{e.push(d,u,f),n.push(g.r,g.g,g.b),t.push(v[0],v[1],v[2])},l=5;for(let d=0;d<l;d++){let u=d/l*Math.PI*2+(r()-.5)*.9,f=Math.cos(u),g=Math.sin(u),v=-g,m=f,p=.32+r()*.45,x=.05+r()*.18,b=(r()-.5)*.25,y=(r()-.5)*.25,_=new M(f*.3,1,g*.3).normalize().toArray(),w=e.length/3;c(b-v*.03,0,y-m*.03,s,_),c(b+v*.03,0,y+m*.03,s,_),c(b+f*x*.4-v*.024,p*.55,y+g*x*.4-m*.024,a,_),c(b+f*x*.4+v*.024,p*.55,y+g*x*.4+m*.024,a,_),c(b+f*x,p,y+g*x,o,_),i.push(w,w+1,w+2,w+1,w+3,w+2,w+2,w+3,w+4)}let h=new Pe;return h.setAttribute("position",new Ie(e,3)),h.setAttribute("normal",new Ie(t,3)),h.setAttribute("color",new Ie(n,3)),h.setIndex(i),h}function ww(){let r=yl(29),e=[],t=[],n=[],i=[],s=new $(4612666),a=new $(8036444),o=new $(12046479),c=(d,u,f,g,v)=>{e.push(d,u,f),n.push(g.r,g.g,g.b),t.push(v[0],v[1],v[2])},l=7;for(let d=0;d<l;d++){let u=d/l*Math.PI*2+(r()-.5)*.8,f=Math.cos(u),g=Math.sin(u),v=-g,m=f,p=.9+r()*.5,x=.12+r()*.3,b=.035+r()*.02,y=(r()-.5)*.3,_=(r()-.5)*.3,w=new M(f*.3,1,g*.3).normalize().toArray(),S=e.length/3,D=[[0,b,s],[.45,b*.85,a],[.8,b*.5,a.clone().lerp(o,.5)],[1,.002,o]];for(let[E,T,F]of D){let N=y+f*x*E*E,H=_+g*x*E*E,L=p*E;c(N-v*T,L,H-m*T,F,w),c(N+v*T,L,H+m*T,F,w)}for(let E=0;E<D.length-1;E++){let T=S+E*2;i.push(T,T+1,T+2,T+1,T+3,T+2)}}let h=new Pe;return h.setAttribute("position",new Ie(e,3)),h.setAttribute("normal",new Ie(t,3)),h.setAttribute("color",new Ie(n,3)),h.setIndex(i),h}function Tw(){let r=[],e=[],t=[],n=[],i=(a,o,c,l,h)=>{let d=Math.cos(a),u=Math.sin(a),f=r.length/3;for(let[g,v]of[[0,0],[1,0],[1,1],[0,1]]){let m=(g-.5)*c,p=o-l+v*l,x=h*v*v;r.push(m*d+x,p,m*u),e.push(0,1,0),t.push(g,v)}n.push(f,f+1,f+2,f,f+2,f+3)};i(.3,2,.34,.98,.1),i(.3+Math.PI/2,2,.34,.98,.1),i(1.3,1.72,.27,.74,-.06);let s=new Pe;return s.setAttribute("position",new Ie(r,3)),s.setAttribute("normal",new Ie(e,3)),s.setAttribute("uv",new Ie(t,2)),s.setIndex(n),s}var Sw=`
attribute vec4 aSeed;
uniform vec3 uCam;
uniform float uTime, uWind, uCell, uScale, uIn0, uIn1, uOut0, uOut1, uCorr;
uniform vec2 uWindDir;
uniform vec3 uRoad[${bl}];     // (x, y, z) của tim đường
uniform float uCarve0, uCarve1, uTipH, uPatch;
${Zm}
// khoảng cách tới đường + độ cao mặt đường tại điểm gần nhất
float roadDist(vec2 p, out float ry) {
  float dm = 1e9; ry = 0.0;
  for (int i = 0; i < ${bl-1}; i++) {
    vec2 a = uRoad[i].xz, b = uRoad[i + 1].xz, ab = b - a;
    float t = clamp(dot(p - a, ab) / dot(ab, ab), 0.0, 1.0);
    float d = length(p - a - ab * t);
    if (d < dm) { dm = d; ry = mix(uRoad[i].y, uRoad[i + 1].y, t); }
  }
  return dm;
}
`,Aw=`
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
`,na=class{constructor(e,t,n="reed"){this.kind=n;let i=n==="meadow",s=n==="grass"||i;this.group=new Fe,e.add(this.group),this.density=1,this.roadPts=Array.from({length:bl},()=>new M),this.shared={uCam:{value:new M},uTime:{value:0},uWind:{value:.3},uWindDir:{value:new re(.78,.62).normalize()},uRoad:{value:this.roadPts},uCorr:{value:bt.halfWidth+(i?.7:s?.3:1)},uTipH:{value:i?1.4:s?.8:1.95},uPatch:{value:i?1:0},uCarve0:{value:bt.halfWidth+1.2},uCarve1:{value:bt.halfWidth+16},uTLow:{value:wt.low},uTDet:{value:wt.det},uTFine:{value:wt.fine}},this.leafGeo=i?ww():s?Ew():Mw(),this.plumeGeo=s?null:Tw();let a=s?null:e0();a&&(a.anisotropy=Math.min(4,t.capabilities.getMaxAnisotropy()));let o=i?[{cell:60,count:24e3,scale:1.05,in0:-1,in1:0,out0:26,out1:36,seed:5},{cell:230,count:14e3,scale:1.6,in0:24,in1:38,out0:95,out1:135,seed:6}]:s?[{cell:64,count:16e3,scale:1,in0:-1,in1:0,out0:22,out1:32,seed:3},{cell:220,count:8e3,scale:1.8,in0:20,in1:34,out0:75,out1:105,seed:4}]:[{cell:86,count:19e3,scale:1,in0:-1,in1:0,out0:30,out1:43,seed:1},{cell:340,count:11e3,scale:1.55,in0:27,in1:46,out0:118,out1:165,seed:2}];this.layers=o.map((c,l)=>{let h=l===o.length-1,d=h?c.count*tf*tf:c.count,u=yl(c.seed*977),f=new Float32Array(d*4);for(let x=0;x<f.length;x++)f[x]=u();let g=new Ln(f,4),v={uCell:{value:c.cell},uScale:{value:c.scale},uIn0:{value:c.in0},uIn1:{value:c.in1},uOut0:{value:c.out0},uOut1:{value:c.out1}},m=this._mesh(this.leafGeo,g,c.count,v,new Va({vertexColors:!0,side:dt}),!0);if(s)return{max:c.count,far:h,L:c,uni:v,meshes:[m]};let p=this._mesh(this.plumeGeo,g,c.count,v,new Va({map:a,side:dt,alphaTest:.2,alphaToCoverage:!0}),!1);return{max:c.count,far:h,L:c,uni:v,meshes:[m,p]}}),this.mats=this.layers.flatMap(c=>c.meshes.map(l=>l.material)),this.group.visible=!0}_mesh(e,t,n,i,s,a){let o=new Dc;o.index=e.index;for(let h of Object.keys(e.attributes))o.setAttribute(h,e.attributes[h]);o.setAttribute("aSeed",t),o.instanceCount=n;let c=this.shared;s.onBeforeCompile=h=>{Object.assign(h.uniforms,c,i),h.vertexShader=h.vertexShader.replace("#include <common>",`#include <common>
`+Sw).replace("#include <begin_vertex>",Aw),a&&(h.vertexShader=h.vertexShader.replace("#include <color_vertex>",`#include <color_vertex>
#ifdef USE_COLOR
vColor *= 0.78 + 0.44 * fract(aSeed.w * 9.31);
#endif`)),h.fragmentShader=h.fragmentShader.replace("#include <normal_fragment_begin>",Ye.normal_fragment_begin.replace("normal *= faceDirection;","")).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance = emissive * diffuseColor.rgb;`)},Tt(s);let l=new Ue(o,s);return l.frustumCulled=!1,l.layers.set(3),this.group.add(l),l}set visible(e){this.group.visible=e}get visible(){return this.group.visible}setDensity(e){this.density=e;let t=this.view||1;for(let n of this.layers)for(let i of n.meshes)i.geometry.instanceCount=Math.floor(n.max*e*(n.far?t*t:1))}setView(e){this.view=Math.min(Math.max(e,1),tf);for(let t of this.layers)t.far&&(t.uni.uCell.value=t.L.cell*this.view,t.uni.uOut0.value=t.L.out0*this.view,t.uni.uOut1.value=t.L.out1*this.view);this.setDensity(this.density??1)}update(e,t,n,i,s){let a=this.shared;a.uTime.value=e,a.uCam.value.copy(t),a.uWind.value=s.wind,a.uWindDir.value.copy(s.windDir),a.uTLow.value=wt.low,a.uTDet.value=wt.det,a.uTFine.value=wt.fine;let o={};for(let u=0;u<bl;u++)n.at(i+(u-12)*_w*(this.view||1),o),this.roadPts[u].set(o.x,o.y,o.z);let c=(this.kind==="reed"?.5:.3)*s.dayF*(1-s.overcast*.85)*(.4+.6*s.warm),l=new $(1,.72+.2*(1-s.warm),.42+.45*(1-s.warm)).multiplyScalar(c),h=(.2*s.dayF*(1-.55*s.dark)+.05*s.night)*(.6+.4*s.overcast)+s.flash*.9;l.add(new $(.8,.88,1).multiplyScalar(h));let d=1-.28*s.wet;for(let u of this.layers)u.meshes[0].material.emissive.copy(l),u.meshes[1]&&u.meshes[1].material.emissive.copy(l).multiplyScalar(1.7);for(let u of this.mats)u.color.setScalar(d*(1-.15*s.dark))}};var Rw=`
  varying vec2 vUv;
  void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,Y0=`
  uniform float uExposure;
  vec3 rrtOdt(vec3 v) { vec3 a = v * (v + 0.0245786) - 0.000090537; vec3 b = v * (0.983729 * v + 0.4329510) + 0.238081; return a / b; }
  vec3 toDisplay(vec3 c) {
    const mat3 IN = mat3(vec3(0.59719, 0.07600, 0.02840), vec3(0.35458, 0.90834, 0.13383), vec3(0.04823, 0.01566, 0.83777));
    const mat3 OUT = mat3(vec3(1.60475, -0.10208, -0.00327), vec3(-0.53108, 1.10813, -0.07276), vec3(-0.07367, -0.00605, 1.07602));
    c = clamp(OUT * rrtOdt(IN * (c * uExposure / 0.6)), 0.0, 1.0);
    return mix(pow(c, vec3(0.41666)) * 1.055 - vec3(0.055), c * 12.92, vec3(lessThanEqual(c, vec3(0.0031308))));
  }`,Cw=`
  uniform sampler2D tSrc; uniform vec2 uTexel; uniform float uThresh;
  varying vec2 vUv;
  ${Y0}
  void main() {
    vec3 c = (toDisplay(texture2D(tSrc, vUv + uTexel * vec2(-1.0, -1.0)).rgb) + toDisplay(texture2D(tSrc, vUv + uTexel * vec2(1.0, -1.0)).rgb)
            + toDisplay(texture2D(tSrc, vUv + uTexel * vec2(-1.0, 1.0)).rgb) + toDisplay(texture2D(tSrc, vUv + uTexel * vec2(1.0, 1.0)).rgb)) * 0.25;
    float l = max(c.r, max(c.g, c.b));
    gl_FragColor = vec4(c * smoothstep(uThresh, uThresh + 0.07, l), 1.0);
  }`,Pw=`
  uniform sampler2D tSrc; uniform vec2 uDir;
  varying vec2 vUv;
  void main() {
    vec3 s = texture2D(tSrc, vUv).rgb * 0.2270270270;
    s += (texture2D(tSrc, vUv + uDir * 1.3846153846).rgb + texture2D(tSrc, vUv - uDir * 1.3846153846).rgb) * 0.3162162162;
    s += (texture2D(tSrc, vUv + uDir * 3.2307692308).rgb + texture2D(tSrc, vUv - uDir * 3.2307692308).rgb) * 0.0702702703;
    gl_FragColor = vec4(s, 1.0);
  }`,Lw=`
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
  }`,Iw=`
  uniform sampler2D tSrc; uniform vec2 uTexel;
  varying vec2 vUv;
  void main() {
    float m = 0.0;
    for (int y = 0; y < 4; y++) for (int x = 0; x < 4; x++)
      m = max(m, -texture2D(tSrc, vUv + (vec2(float(x), float(y)) - 1.5) * uTexel).a);
    gl_FragColor = vec4(m, 0.0, 0.0, 1.0);
  }`,Dw=`
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
  }`,Fw=`
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
  }`,Nw=`
  uniform sampler2D tScene, tDepth; uniform float uNear, uFar, uAspect; uniform vec2 uSun;
  varying vec2 vUv;
  void main() {
    float d = texture2D(tDepth, vUv).x;
    float z = uNear * uFar / (uFar - d * (uFar - uNear));
    float sky = smoothstep(0.88, 0.97, z / uFar);
    float l = dot(texture2D(tScene, vUv).rgb, vec3(0.3, 0.59, 0.11));
    vec2 dd = (vUv - uSun) * vec2(uAspect, 1.0);
    gl_FragColor = vec4(vec3(sky * exp(-dot(dd, dd) * 7.0) * smoothstep(0.08, 1.2, l)), 1.0);
  }`,Uw=`
  uniform sampler2D tSrc; uniform vec2 uSun; uniform float uLen;
  varying vec2 vUv;
  void main() {
    vec2 step = (vUv - uSun) * uLen / 32.0, uv = vUv;
    vec3 s = vec3(0.0); float w = 1.0, tot = 0.0;
    for (int i = 0; i < 32; i++) { s += texture2D(tSrc, uv).rgb * w; tot += w; w *= 0.965; uv -= step; }
    gl_FragColor = vec4(s / tot, 1.0);
  }`,Hw=`
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
  }`,Ow=`
  uniform sampler2D tScene, tBloom, tDof, tRays;
  uniform vec3 uRayCol;
  uniform float uFx, uCine, uTime, uAspect, uDof;
  uniform vec2 uRes;
  varying vec2 vUv;
  ${Y0}
  float hash12(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
  vec3 sceneAt(vec2 uv) {
    vec3 s = texture2D(tScene, uv).rgb;
    if (uDof > 0.0) { vec4 d = texture2D(tDof, uv); s = mix(s, d.rgb, clamp(d.a, 0.0, 1.0) * uDof); }
    return s;
  }
  ${Hw}
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
  }`,_l=class{constructor(e,t=4){this.renderer=e,this.enabled=!0,this.samples=t,this.scene=new Ji,this.cam=new ms(-1,1,1,-1,0,1);let n=(s,a)=>new vt({uniforms:s,vertexShader:Rw,fragmentShader:a,depthTest:!1,depthWrite:!1,toneMapped:!1}),i={value:1};this.exposure=i,this.bright=n({tSrc:{value:null},uTexel:{value:new re},uThresh:{value:.92},uExposure:i},Cw),this.blur=n({tSrc:{value:null},uDir:{value:new re}},Pw),this.dofPrep=n({tScene:{value:null},tDepth:{value:null},uTexel:{value:new re},uNear:{value:.1},uFar:{value:1e3},uFocus:{value:10},uFocusRange:{value:0},uCocK:{value:0},uMaxCoc:{value:24}},Lw),this.dofTile=n({tSrc:{value:null},uTexel:{value:new re}},Iw),this.dofDilate=n({tSrc:{value:null},uTexel:{value:new re}},Dw),this.dofBlur=n({tSrc:{value:null},tNear:{value:null},uTexelFull:{value:new re},uMaxCoc:{value:24},uN:{value:24}},Fw),this.final=n({tScene:{value:null},tBloom:{value:null},tDof:{value:null},uDof:{value:0},uExposure:i,tRays:{value:null},uRayCol:{value:new $(0,0,0)},uGlass:{value:0},uRearGlass:{value:0},tDepth:{value:null},uNear:{value:.1},uFar:{value:1e3},uTanF:{value:1},uInvVP:{value:new Ee},uCamPos:{value:new M},uCamFwd:{value:new M},uGC:{value:new M},uGN:{value:new M},uGU:{value:new M},uGV:{value:new M},uBlade:{value:new ct},uGB:{value:new ct},uPiv:{value:new ct},uWipe:{value:new ct},uRest:{value:new ct},uSweep:{value:1.6},uFlow:{value:new re},tGlassMask:{value:null},uFx:{value:0},uCine:{value:0},uTime:{value:0},uAspect:{value:1},uRes:{value:new re(1,1)}},Ow),this.rayMask=n({tScene:{value:null},tDepth:{value:null},uNear:{value:.1},uFar:{value:1e3},uAspect:{value:1},uSun:{value:new re}},Nw),this.rayBlur=n({tSrc:{value:null},uSun:{value:new re},uLen:{value:1}},Uw),this.rays={uv:new re(.5,.5),color:new $(0,0,0),near:.1,far:1e3},this.quad=new Ue(new ui(2,2),this.bright),this.quad.frustumCulled=!1,this.scene.add(this.quad),this.size=new re,this.rts={},this.sceneRT=new hn(16,16,{type:Fn,samples:t,depthBuffer:!0,depthTexture:new zr(16,16,Mi)}),this.glassScene=new Ji,this.glassMaterial=new vt({uniforms:{tDepth:{value:this.sceneRT.depthTexture},uRes:{value:this.size},uNear:{value:.1},uFar:{value:1e3}},side:dt,depthTest:!1,depthWrite:!1,toneMapped:!1,vertexShader:`
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
        }`}),this.glassMesh=new Ue(new Pe,this.glassMaterial),this.glassMesh.matrixAutoUpdate=!1,this.glassScene.add(this.glassMesh),this._clearColor=new $,this.resize()}_rt(e,t,n,i=!1){let s=this.rts[e];return s?s.setSize(t,n):s=this.rts[e]=new hn(t,n,{type:i?Fn:Ei,minFilter:Zt,magFilter:Zt,depthBuffer:!1,stencilBuffer:!1}),s}resize(){this.renderer.getDrawingBufferSize(this.size);let e=this.size.x,t=this.size.y;this.sceneRT.setSize(e,t);let n=Math.max(16,Math.ceil(e/4)),i=Math.max(16,Math.ceil(t/4));this._rt("bloomA",n,i),this._rt("bloomB",n,i);let s=Math.max(16,Math.ceil(e/2)),a=Math.max(16,Math.ceil(t/2));this._rt("prep",s,a,!0),this._rt("dof",s,a,!0);let o=Math.max(4,Math.ceil(s/4)),c=Math.max(4,Math.ceil(a/4));this._rt("tile",o,c,!0),this._rt("near",o,c,!0),this._rt("rayA",n,i),this._rt("rayB",n,i);let l=this._rt("glass",e,t,!0);l.texture.minFilter=l.texture.magFilter=jt,this.final.uniforms.tGlassMask.value=l.texture,this.rayMask.uniforms.uAspect.value=e/t,this.bright.uniforms.uTexel.value.set(1/n,1/i),this.dofPrep.uniforms.uTexel.value.set(1/e,1/t),this.dofTile.uniforms.uTexel.value.set(1/s,1/a),this.dofDilate.uniforms.uTexel.value.set(1/o,1/c),this.dofBlur.uniforms.uTexelFull.value.set(1/e,1/t),this.final.uniforms.uAspect.value=e/t,this.final.uniforms.uRes.value.set(e,t)}setSamples(e){this.sceneRT.samples!==e&&(this.sceneRT.samples=e,this.sceneRT.dispose())}get longSide(){return Math.max(this.size.x,this.size.y)}_pass(e,t){this.quad.material=e,this.renderer.setRenderTarget(t),this.renderer.render(this.scene,this.cam)}begin(){this.renderer.setRenderTarget(this.sceneRT)}renderGlassMask(e,t,n){let i=this.final.uniforms;if(i.uRearGlass.value<.5||i.uGlass.value<=0||!n?.geometry)return;this.glassMesh.geometry=n.geometry,this.glassMesh.matrix.copy(t.matrixWorld),this.glassMaterial.uniforms.uNear.value=e.near,this.glassMaterial.uniforms.uFar.value=e.far;let s=this.renderer,a=s.getClearAlpha();s.getClearColor(this._clearColor),s.setClearColor(0,0),s.setRenderTarget(this.rts.glass),s.render(this.glassScene,e),s.setClearColor(this._clearColor,a)}render(e,t,n,i){let s=this.renderer,a=this.blur.uniforms,o=this.sceneRT.texture;this.exposure.value=s.toneMappingExposure;let c=!1;if(i&&i.amt>.01&&i.samples>0&&i.cocK>.05){c=!0;let u=this.dofPrep.uniforms;u.tScene.value=o,u.tDepth.value=this.sceneRT.depthTexture,u.uNear.value=i.near,u.uFar.value=i.far,u.uFocus.value=i.focus,u.uFocusRange.value=i.range||0,u.uCocK.value=i.cocK,u.uMaxCoc.value=i.maxCoc,this._pass(this.dofPrep,this.rts.prep),this.dofTile.uniforms.tSrc.value=this.rts.prep.texture,this._pass(this.dofTile,this.rts.tile),this.dofDilate.uniforms.tSrc.value=this.rts.tile.texture,this._pass(this.dofDilate,this.rts.near);let f=this.dofBlur.uniforms;f.tSrc.value=this.rts.prep.texture,f.tNear.value=this.rts.near.texture,f.uMaxCoc.value=i.maxCoc,f.uN.value=i.samples,this._pass(this.dofBlur,this.rts.dof)}if(t>.01){let u=this.rts.bloomA,f=this.rts.bloomB;this.bright.uniforms.tSrc.value=o,this._pass(this.bright,u);for(let g=0;g<2;g++)a.tSrc.value=u.texture,a.uDir.value.set((2.2+g)/u.width,0),this._pass(this.blur,f),a.tSrc.value=f.texture,a.uDir.value.set(0,(1.2+g*.6)/u.height),this._pass(this.blur,u)}let l=this.rays,h=l.color.r+l.color.g+l.color.b>.002;if(h){let u=this.rayMask.uniforms,f=this.rayBlur.uniforms;u.tScene.value=o,u.tDepth.value=this.sceneRT.depthTexture,u.uNear.value=l.near,u.uFar.value=l.far,u.uSun.value.copy(l.uv),this._pass(this.rayMask,this.rts.rayA),f.uSun.value.copy(l.uv),f.tSrc.value=this.rts.rayA.texture,f.uLen.value=.85,this._pass(this.rayBlur,this.rts.rayB),f.tSrc.value=this.rts.rayB.texture,f.uLen.value=.85/10,this._pass(this.rayBlur,this.rts.rayA)}let d=this.final.uniforms;d.tScene.value=o,d.tRays.value=this.rts.rayA.texture,d.tDepth.value=this.sceneRT.depthTexture,h?d.uRayCol.value.copy(l.color):d.uRayCol.value.setRGB(0,0,0),d.tBloom.value=this.rts.bloomA.texture,d.tDof.value=this.rts.dof.texture,d.uDof.value=c?i.amt:0,d.uCine.value=t,d.uFx.value=n,d.uTime.value=e,this._pass(this.final,null)}};var Ml=class{constructor(e){this.renderer=e,this.cam=new Dt,this.cam.layers.set(0),this.rt=new hn(16,16,{type:Fn}),this.texMatrix=new Ee,this.planeY=0,this.active=!1,this.enabled=!0,this._v=new M,this._d=new M,this._u=new M,this._plane=new li,this._clip=new ct,this._q=new ct,this._size=new re}resize(){this.renderer.getDrawingBufferSize(this._size),this.rt.setSize(Math.max(16,Math.floor(this._size.x/2)),Math.max(16,Math.floor(this._size.y/2)))}render(e,t,n){if(this.active=!1,!this.enabled||t.position.y<n+.05)return;this.planeY=n;let i=this.cam,s=t.position;i.position.set(s.x,2*n-s.y,s.z);let a=this._d.set(0,0,-1).applyQuaternion(t.quaternion),o=this._u.set(0,1,0).applyQuaternion(t.quaternion);i.up.set(o.x,-o.y,o.z),i.lookAt(this._v.set(i.position.x+a.x,i.position.y-a.y,i.position.z+a.z)),i.near=t.near,i.far=t.far,i.updateMatrixWorld(),i.projectionMatrix.copy(t.projectionMatrix),this.texMatrix.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),this.texMatrix.multiply(i.projectionMatrix).multiply(i.matrixWorldInverse);let c=this._plane.setFromNormalAndCoplanarPoint(this._v.set(0,1,0),this._d.set(s.x,n,s.z));c.applyMatrix4(i.matrixWorldInverse);let l=this._clip.set(c.normal.x,c.normal.y,c.normal.z,c.constant),h=i.projectionMatrix.elements,d=this._q.set((Math.sign(l.x)+h[8])/h[0],(Math.sign(l.y)+h[9])/h[5],-1,(1+h[10])/h[14]);l.multiplyScalar(2/l.dot(d)),h[2]=l.x,h[6]=l.y,h[10]=l.z+1-.003,h[14]=l.w,i.projectionMatrixInverse.copy(i.projectionMatrix).invert();let u=this.renderer,f=u.getRenderTarget(),g=u.shadowMap.autoUpdate;u.shadowMap.autoUpdate=!1,u.setRenderTarget(this.rt),u.render(e,i),u.setRenderTarget(f),u.shadowMap.autoUpdate=g,this.active=!0}};var so=class r{constructor(){this.root=new Fe,this.tilt=new Fe,this.root.add(this.tilt),this.root.visible=!1,this.ready=!1,this.actions={},this.current=null,this.headOffsetSit=new M,this.hipOffsetSit=new M,this.footShade={value:0}}async load(e,{chisa:t=!1}={}){let n=new Ss;n.setMeshoptDecoder($r);let i=await n.loadAsync(e),s=i.scene;this.model=s,this.seatRecline=t?0:null,s.traverse(h=>{if(!h.isMesh)return;h.castShadow=!0,h.receiveShadow=!0,h.frustumCulled=!1;let d=Array.isArray(h.material)?h.material:[h.material];for(let u of d)u.envMapIntensity=.6,Tt(u)}),this.tilt.add(s);let a=h=>t?s.getObjectByName(jw(s,h)):s.getObjectByName(h);this.head=a("Head"),this.neck=a("neck_01"),this.arms={l:["upperarm_l","lowerarm_l","hand_l"].map(a),r:["upperarm_r","lowerarm_r","hand_r"].map(a)},this.arms.l.some(h=>!h)&&(this.arms.l=null),this.arms.r.some(h=>!h)&&(this.arms.r=null),this.legs={l:["thigh_l","calf_l","foot_l"].map(a),r:["thigh_r","calf_r","foot_r"].map(a)},this.balls={l:a("ball_l"),r:a("ball_r")},(this.legs.l.some(h=>!h)||this.legs.r.some(h=>!h))&&(this.legs=null),this.spine=a("spine_01"),this.pelvis=a("pelvis"),this.gripFingers={l:a("middle_01_l"),r:a("middle_01_r")},this.gripKnuckles={l:[a("index_01_l"),a("pinky_01_l")],r:[a("index_01_r"),a("pinky_01_r")]},this.mixer=new Yr(s);for(let h of i.animations)this.actions[h.name]=this.mixer.clipAction(h);s.updateMatrixWorld(!0);let o=new zt().setFromObject(s,!0),c=o.max.y-o.min.y;s.scale.setScalar(K0/c),s.position.y=-o.min.y*(K0/c);let l=[];if(s.traverse(h=>{h.isMesh&&/eye/i.test(h.name+" "+(h.material?.name||""))&&l.push(h)}),l.length&&this.head){s.updateMatrixWorld(!0);let h=new zt().setFromObject(l[0],!0).getCenter(new M),d=this.head.getWorldPosition(new M),u=h.sub(d);s.rotation.y=Math.atan2(-u.x,u.z)||0}s.updateMatrixWorld(!0),s.traverse(h=>{h.isSkinnedMesh&&/superhero|body/i.test(h.name+" "+h.material?.name)&&Xw(h,s,this.footShade)}),this.bindRotations=new Map,s.traverse(h=>{h.isBone&&this.bindRotations.set(h.name,h.getWorldQuaternion(new qe))}),this.fingers={},this.thumbs={};for(let h of["l","r"]){this.fingers[h]=["index","middle","ring","pinky"].flatMap(u=>[2,3].map(f=>a(`${u}_0${f}_${h}`))).filter(Boolean).map(u=>({b:u,rest:u.quaternion.clone()}));let d=["thumb_01","thumb_02","thumb_03","thumb_04_leaf"].map(u=>a(u+"_"+h));this.thumbs[h]=d.every(Boolean)?{bones:d,rest:d[2].quaternion.clone()}:null}return t&&(this.reference=await new r().load("assets/models/person.glb"),this.actions=this.reference.actions,this.mixer=this.reference.mixer,this.current=this.reference.current,this.retargetPairs=[],s.traverse(h=>{if(!h.isBone)return;let d=$0(h.name),u=d&&this.reference.model.getObjectByName(d);u&&this.retargetPairs.push({bone:h,from:u,sourceBind:this.reference.bindRotations.get(d).clone().invert(),targetBind:this.bindRotations.get(h.name).clone()})})),this.play("Driving_Loop",0),this.mixer.update(.01),this.applyRetarget(),this.root.updateMatrixWorld(!0),this.headOffsetSit.copy(this.head.getWorldPosition(new M)),this.root.worldToLocal(this.headOffsetSit),this.pelvis&&this.root.worldToLocal(this.pelvis.getWorldPosition(this.hipOffsetSit)),this.ready=!0,this}play(e,t=.35,{once:n=!1,timeScale:i=1}={}){let s=this.actions[e];return!s||s===this.current||(s.reset(),s.setLoop(n?Ou:ku,1/0),s.clampWhenFinished=n,s.timeScale=i,s.enabled=!0,s.setEffectiveWeight(1),this.current&&t>0?s.crossFadeFrom(this.current,t,!1):this.current&&this.current.stop(),s.play(),this.current=s),s}duration(e){return this.actions[e]?.getClip().duration??1}update(e){this.mixer&&this.root.visible&&(this.mixer.update(e),this.applyRetarget())}applyRetarget(){if(!this.retargetPairs)return;this.reference.root.updateMatrixWorld(!0),this.root.updateMatrixWorld(!0);let e=this.root.getWorldQuaternion(new qe);for(let{bone:t,from:n,sourceBind:i,targetBind:s}of this.retargetPairs)n.getWorldQuaternion(As).multiply(i).multiply(s).premultiply(e),t.parent.getWorldQuaternion(Ni),t.quaternion.copy(Ni.invert().multiply(As)),t.updateMatrixWorld(!0)}replace(e){let t=this.root,n=t.visible;this.dispose(),t.clear();for(let i of Object.keys(e))i!=="root"&&(this[i]=e[i]);t.add(this.tilt),t.visible=n,this.root=t}dispose(){this.mixer?.stopAllAction();let e=new Set;for(let t of[this.model,this.reference?.model])t?.traverse(n=>{if(n.isMesh){n.geometry.dispose();for(let i of Array.isArray(n.material)?n.material:[n.material]){for(let s of Object.values(i))s?.isTexture&&e.add(s);i.dispose()}}});e.forEach(t=>t.dispose()),delete this.reference,delete this.retargetPairs,delete this._spIn,delete this._spOut}faceGrip(e,t,n=null){let i=this.arms?.[e]?.[2],s=this.gripFingers?.[e];if(!i||!s)return;i.getWorldPosition(Mn),s.getWorldPosition(jn),Mn.subVectors(jn,Mn).normalize(),jn.copy(t).negate(),El(i,Mn,jn),i.updateMatrixWorld(!0);let a=this.gripKnuckles?.[e];if(n&&a?.every(Boolean)){a[0].getWorldPosition(Mn),a[1].getWorldPosition(jn),Mn.sub(jn).addScaledVector(t,-Mn.dot(t)).normalize(),jn.copy(n).addScaledVector(t,-n.dot(t)).normalize();let o=Math.atan2(Q0.crossVectors(Mn,jn).dot(t),Mn.dot(jn));ia.setFromAxisAngle(t,o),i.getWorldQuaternion(As),i.parent.getWorldQuaternion(Ni),i.quaternion.copy(Ni.invert().multiply(ia.multiply(As))),i.updateMatrixWorld(!0)}}looseGrip(e,t,n,i){for(let{b:a,rest:o}of this.fingers?.[e]||[])a.quaternion.slerp(o,t);let s=this.thumbs?.[e];if(s&&n){s.bones[2].quaternion.slerp(s.rest,.5),s.bones[0].updateMatrixWorld(!0);let[a,o,,c]=s.bones.map(u=>u.getWorldPosition(new M)),l=.82*(a.distanceTo(o)+o.distanceTo(c)),h=0,d=.2;for(let u=0;u<16;u++){let f=(h+d)/2;n(f,J0).distanceTo(a)<l?h=f:d=f}nf([s.bones[0],s.bones[1],s.bones[3]],n(h,J0),i)}this.arms?.[e]?.[2].updateMatrixWorld(!0)}recline(e){if(e=this.seatRecline??e,!this.spine||!e)return;let t=this.spine.quaternion;this._spOut&&t.equals(this._spOut)&&t.copy(this._spIn),(this._spIn||(this._spIn=new qe)).copy(t),this.root.getWorldQuaternion(Ni),Mn.set(1,0,0).applyQuaternion(Ni),ia.setFromAxisAngle(Mn,-e),this.spine.getWorldQuaternion(As),this.spine.parent.getWorldQuaternion(Ni),this.spine.quaternion.copy(Ni.invert().multiply(ia.multiply(As))),(this._spOut||(this._spOut=new qe)).copy(t),this.spine.updateMatrixWorld(!0)}reachLeg(e,t,n,i=null){let s=this.legs?.[e];if(!s)return;nf(s,t,n);let a=s[2],o=this.balls?.[e];i&&o&&(a.getWorldPosition(Mn),o.getWorldPosition(jn),El(a,jn.sub(Mn).normalize(),Mn.copy(i).normalize()),a.updateMatrixWorld(!0))}reach(e,t,n=null){let i=this.arms?.[e];i&&nf(i,t,n)}};function nf(r,e,t){{let[n,i,s]=r,a=n.getWorldPosition(kw),o=i.getWorldPosition(Bw),c=s.getWorldPosition(zw),l=a.distanceTo(o),h=o.distanceTo(c),d=Q0.subVectors(e,a),u=d.length();d.multiplyScalar(1/u),u=Math.min(Math.max(u,Math.abs(l-h)+.001),l+h-.001);let f=(l*l+u*u-h*h)/(2*l*u),g=Math.sqrt(Math.max(0,1-f*f)),v=t?Z0.copy(t):Z0.subVectors(o,a);v.addScaledVector(d,-v.dot(d)),v.lengthSq()<1e-8&&v.set(0,-1,0),v.normalize();let m=Gw.copy(a).addScaledVector(d,l*f).addScaledVector(v,l*g);El(n,Mn.subVectors(o,a).normalize(),jn.subVectors(m,a).normalize()),n.updateMatrixWorld(!0),i.getWorldPosition(o),s.getWorldPosition(c),El(i,Mn.subVectors(c,o).normalize(),jn.subVectors(e,o).normalize()),i.updateMatrixWorld(!0)}}var K0=1.7,kw=new M,Bw=new M,zw=new M,Q0=new M,Z0=new M,Gw=new M,Mn=new M,jn=new M,J0=new M,ia=new qe,As=new qe,Ni=new qe;function El(r,e,t){ia.setFromUnitVectors(e,t),r.getWorldQuaternion(As),r.parent.getWorldQuaternion(Ni),r.quaternion.copy(Ni.invert().multiply(ia.multiply(As)))}var Vw=new $("#1c1c1f"),Ww=new $("#2f4366"),qw=new $("#dedad2");function Xw(r,e,t){let n=r.geometry,i=n.attributes.skinIndex,s=n.attributes.skinWeight,a=n.attributes.position;if(!i||!s)return;let o=r.skeleton.bones,c=o.find(p=>p.name==="pelvis"),l=c?c.getWorldPosition(new M).y:.9,h=o.map(p=>/foot|ball/i.test(p.name)?3:/thigh|calf/i.test(p.name)?2:/lowerarm|hand|index|middle|ring|pinky|thumb|neck|head/i.test(p.name)?0:/pelvis/i.test(p.name)?4:1),d=new Float32Array(a.count*4),u=new Float32Array(a.count),f=new M;for(let p=0;p<a.count;p++){let x=0,b=-1;for(let w=0;w<4;w++){let S=s.getComponent(p,w);S>b&&(b=S,x=i.getComponent(p,w))}let y=h[x];y===4&&(f.fromBufferAttribute(a,p).applyMatrix4(r.matrixWorld),y=f.y<l+.09?2:1);let _=y===1?Vw:y===2?Ww:y===3?qw:null;_&&(d[p*4]=_.r,d[p*4+1]=_.g,d[p*4+2]=_.b,d[p*4+3]=1),u[p]=y===3?1:0}n.setAttribute("aGarment",new we(d,4)),n.setAttribute("aShoe",new we(u,1));let g=r.material,v=g.onBeforeCompile;g.onBeforeCompile=(p,x)=>{v?.call(g,p,x),p.uniforms.uFootShade=t,p.vertexShader=p.vertexShader.replace("#include <common>",`#include <common>
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
roughnessFactor = mix(roughnessFactor, 0.88, vGarment.a);`).replace("mapN.xy *= normalScale;","mapN.xy *= normalScale * (1.0 - 0.8 * vGarment.a);")};let m=g.customProgramCacheKey?.bind(g);g.customProgramCacheKey=()=>(m?m():"")+"|garment"}function $0(r){let e=r.replace(/_\d+$/,""),t={Bip001Pelvis:"pelvis",Bip001Spine:"spine_01",Bip001Spine1:"spine_02",Bip001Spine2:"spine_03",Bip001Neck:"neck_01",Bip001Head:"Head"};if(t[e])return t[e];let n=e.match(/^Bip001([LR])(Clavicle|UpperArm|Forearm|Hand|Thigh|Calf|Foot|Toe0)$/);if(n)return{Clavicle:"clavicle",UpperArm:"upperarm",Forearm:"lowerarm",Hand:"hand",Thigh:"thigh",Calf:"calf",Foot:"foot",Toe0:"ball"}[n[2]]+"_"+n[1].toLowerCase();let i=e.match(/^Bip001([LR])Finger([0-4])([12])?$/);return i?["thumb","index","middle","ring","pinky"][+i[2]]+"_0"+(+(i[3]||0)+1)+"_"+i[1].toLowerCase():null}function jw(r,e){let t;return r.traverse(n=>{n.isBone&&$0(n.name)===e&&(t=n.name)}),t}var wl=r=>Math.min(1,Math.max(0,r)),rn=r=>(r=wl(r),r*r*(3-2*r)),sf=(r,e,t)=>r+(e-r)*t,Ui=(r,e,t)=>{let n=((e-r+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI;return r+n*t},ro=Math.PI,rf=-Math.PI/2,eg=0,ao=Math.PI/2,af=-Math.PI*.75,Qs=1.1,$s=new M(0,1,0),Yw=2.25,tg=5,sa=26,ng=16,Kw=35,ig=20,oo=25,Zw=9,of=18,Jw=2,sg=8,Qw=12,$w=12,eT=12,Tl=class{constructor(e,t){this.cars=e,this.person=t,this.state="off",this.t=0,this.v0=0,this.stopT=-1,this.seat=new M,this.out=new M,this.walkEnd=new M,this.lean=new M,this.corner=new M,this.stand=new M,this.smokeU=-1,this.smoking={on:!1,lit:!1,drag:0,flame:0,exhale:!1,atMouth:0,err:new M,errOK:!1,F:new M,R:new M,mouth:new M},this.handW=0,this.handT=new M,this.closeK=0,this.autoZoom={t:0,on:!0},this.wideK=0,this.zoom={focal:sa,back:0,near:0,focalS:sa,backS:0,nearS:0},this.orbitA=null,this.orbitHold=0,this.enterRadius=10,this.cyc={t:0,n:0,rest:sg},this.mouthCorr=new M,this.wd={mode:"idle",t:0,dur:4,face:null,target:new M},this.lk={t:0,ty:0,tp:0,y:0,p:0},this._q1=new qe,this._q2=new qe,this._q3=new qe,this._q4=new qe,this._pole=new M,this._A=new M,this._O=new M,this._H=new M,this._t1=new M,this._t2=new M,this.shot={pos:new M,look:new M},this.cam={pos:new M,look:new M,focus:new M,focal:28,range:2},this._p=new M,this._l=new M,this._w=new M}get active(){return this.state!=="off"}get busy(){return this.state==="stopping"||this.state==="exit"||this.state==="enter"}place(e){let t=this.person.headOffsetSit,[n,i,s]=e.eye;if(e.seat?.hip){let a=this.person.hipOffsetSit,[o,c,l]=e.seat.hip;this.seat.set(o+a.x,c-a.y,l+a.z)}else this.seat.set(n+t.x,i-.1-t.y,s+.06+t.z);this.out.set(-e.width/2-.5,0,this.seat.z-.1),this.lean.set(-e.width/2-.16,0,-e.length/2+1.05),this.walkEnd.set(this.lean.x-.3,0,this.lean.z),this.corner.set(-e.width/2-.55,0,-e.length/2-.75),this.stand.set(-.15,0,-e.length/2-1.2)}sit(){let e=this.person;e.ready&&(e.root.position.copy(this.seat),e.root.rotation.set(0,ro,0),e.tilt.rotation.set(0,0,0),e.play("Driving_Loop",0))}toggle(e){return this.state==="off"?(this.state="stopping",this.t=0,this.v0=Math.max(e,.5),this.stopT=-1,this.smokeU=-1,this.handW=0,this.wd.mode="idle",this.wd.t=0,this.wd.dur=3+Math.random()*3,this.wd.face=null,this.lk.t=1,!0):this.state==="parked"?(this.stand.copy(this.person.root.position),this.enterYaw=this.person.root.rotation.y,this.enterRadius=Math.max(1,10+this.zoom.backS-this.zoom.nearS),this.autoZoom.on=!1,this.state="enter",this.t=0,!0):!1}zoomBy(e){if(this.wideK<.3)return!1;this.autoZoom.on=!1,this.noteCameraInput();let t=this.zoom,n=Math.log(e);if(n>0){let i=Math.min(n,t.near/of);t.near-=i*of,n-=i;let s=Math.log(t.focal/ng),a=Math.min(n,s);t.focal/=Math.exp(a),n-=a,n>0&&(t.back=Math.min(ig,t.back+n*oo))}else if(n<0){let i=Math.min(-n,t.back/oo);if(t.back-=i*oo,n+=i,n<0){let s=Math.log(Kw/t.focal),a=Math.min(-n,s);t.focal*=Math.exp(a),n+=a}n<0&&(t.near=Math.min(Zw,t.near-n*of)),t.back<1e-6&&(t.back=0)}return!0}noteCameraInput(){this.wideK>=.3&&(this.orbitHold=Jw)}speed(e,t){return this.state!=="stopping"?0:Math.max(0,e-Math.max(1.5,this.v0/3.2)*t)}update(e,t,n){this.t+=e;let i=this.cars.dim,s=this.cam,a=this._p,o=this._l;if(this.state==="stopping"){let c=this.cars.frontWheel(this._w),l=rn(this.t/5);a.set(c.x-1.55+.3*l,.34,c.z-1.1+.2*l),o.set(c.x+.05,c.y*.92,c.z+.08),s.focus.copy(c),t.localToWorld(s.focus),s.focal=45,s.range=.35,n<=.01&&this.stopT<0&&(this.stopT=this.t),this.stopT>=0&&this.t-this.stopT>.9&&this._enterState("exit",i)}else this.state==="exit"?this._exit(i,e):this.state==="enter"?this._enter(i,e):this.state==="parked"&&this.smokeU>3.4&&this._wander(e,i);this.smokeU>=0&&this.state!=="enter"&&this._smoke(e),this._hand(),this._look(e),this.state!=="stopping"?this._camera(e,t):(s.pos.copy(a),t.localToWorld(s.pos),s.look.copy(o),t.localToWorld(s.look))}_enterState(e,t){this.state=e,this.t=0,e==="exit"&&(this.shot.pos.set(-t.width/2-4.2,1.45,this.seat.z-2.7),this.shot.look.set(-t.width/2-.25,.95,this.seat.z-.6),this.closeK=0,this.wideK=0,this.orbitA=null,this.mouthCorr.set(0,0,0),Object.assign(this.zoom,{focal:sa,back:0,near:0,focalS:sa,backS:0,nearS:0}),this.orbitHold=0,this.autoZoom.t=0,this.autoZoom.on=!0)}_camera(e,t){let n=this.cam,i=this.state==="exit"&&this.t>=Yw||this.state==="parked"||this.state==="enter"?1:0;this.wideK+=(i-this.wideK)*(1-Math.exp(-e*.9));let s=this.zoom,a=this.autoZoom;if(i&&a.on){a.t+=e;let u=Math.log(sa/ng),f=rn(a.t/tg)*(u+ig/oo);s.focal=sa/Math.exp(Math.min(f,u)),s.back=Math.max(0,f-u)*oo,s.near=0,a.t>=tg&&(a.on=!1)}let o=1-Math.exp(-e*6);s.focalS+=(s.focal-s.focalS)*o,s.backS+=(s.back-s.backS)*o,s.nearS+=(s.near-s.nearS)*o;let c=rn(this.wideK),l=this.person.root.position,h=this._p.copy(this.shot.pos),d=this._l.set(l.x,1.2,l.z);if(t.localToWorld(h),t.localToWorld(d),this.person.head.getWorldPosition(n.focus),n.focal=32,n.range=.8,c>.001){let u=this.person.root.getWorldPosition(this._t1).addScaledVector($s,.95);this.orbitA===null&&(this.orbitA=Math.atan2(h.x-u.x,h.z-u.z)),this.orbitHold>0?this.orbitHold=Math.max(0,this.orbitHold-e):this.orbitA+=e*.1*c;let f=Math.max(1,10+s.backS-s.nearS);if(this.state==="enter"){let p=.6+this.stand.distanceTo(this.corner)/Qs+this.corner.distanceTo(this.out)/Qs;f=sf(this.enterRadius,1,rn(this.t/p))}let g=f*.28,v=Math.sqrt(Math.max(0,f*f-g*g)),m=this._w.set(Math.sin(this.orbitA)*v,g,Math.cos(this.orbitA)*v).add(u);h.lerp(m,c),d.lerp(u,c),n.focal=sf(n.focal,s.focalS,c),n.range=sf(n.range,.9,c)}else this.orbitA=null;n.pos.copy(h),n.look.copy(d)}_exit(e,t){let n=this.person,i=this.t,s=n.root;if(i<2.3&&this.cars.setDoor(wl(i/1.1)),i<1){s.position.copy(this.seat),s.rotation.y=Ui(ro,rf,rn((i-.45)/.6));return}let a=1,o=1.25;if(i<a+o){n.play("Sitting_Exit",.25,{once:!0,timeScale:n.duration("Sitting_Exit")/o});let f=rn((i-a)/o);s.position.lerpVectors(this.seat,this.out,f),s.rotation.y=rf;return}let c=a+o,l=1;if(i<c+l){n.play("Idle_Loop",.3),s.position.copy(this.out),s.rotation.y=Ui(rf,af,rn((i-c)/.35)),this.cars.setDoor(1-rn((i-c-.25)/.6));return}this.cars.setDoor(0);let h=c+l,d=this.out.distanceTo(this.corner)/Qs,u=this.corner.distanceTo(this.stand)/Qs;if(n.tilt.rotation.x=0,i<h+d+u){n.play("Walk_Loop",.3),this._walk(s,[this.out,this.corner,this.stand],[d,u],i-h,t);return}n.play("Idle_Loop",.4),s.position.copy(this.stand),this.smokeU<0&&(this.smokeU=0,this.turnFrom=s.rotation.y,this.cyc.t=0,this.cyc.n=0,this.cyc.rest=sg),s.rotation.y=Ui(this.turnFrom,ao,rn(this.smokeU/.6)),this.smokeU>.8&&(this.state="parked")}_walk(e,t,n,i,s){let a=0;for(;a<n.length-1&&i>n[a];)i-=n[a],a++;let o=t[a],c=t[a+1],l=wl(i/n[a]);e.position.lerpVectors(o,c,l);let h=Math.atan2(c.x-o.x,c.z-o.z);e.rotation.y=Ui(e.rotation.y,h,Math.min(1,s*7))}_smoke(e){let t=this.smokeU+=e,n=this.person,i=this.smoking;if(!n.arms?.r)return;n.root.updateMatrixWorld(!0);let s=n.root.getWorldPosition(this._O),a=n.root.getWorldDirection(i.F).setY(0).normalize(),o=i.R.crossVectors(a,$s).normalize();n.head.getWorldPosition(this._H);let c=i.mouth.copy(this._H).addScaledVector(a,.1),l=this._t1.copy(s).addScaledVector(o,.2).addScaledVector($s,.92),h=this._t2.copy(s).addScaledVector(o,.27).addScaledVector($s,.97).addScaledVector(a,.1),d=this._A.copy(c).addScaledVector(a,.1).addScaledVector(o,.1).addScaledVector($s,-.12);i.atMouth>.9&&i.errOK&&(this.mouthCorr.addScaledVector(i.err,Math.min(1,e*8)),this.mouthCorr.length()>.2&&this.mouthCorr.setLength(.2)),d.add(this.mouthCorr);let u=this.handT;if(i.flame=0,i.drag=0,i.exhale=!1,i.atMouth=0,t<.6){this.handW=0,i.on=!1;return}if(t<1.4){u.copy(l),this.handW=rn((t-.6)/.6),i.on=t>1.25;return}if(i.on=!0,this.handW=1,t<2.2){let x=rn((t-1.4)/.8);u.lerpVectors(l,d,x),i.atMouth=x;return}if(t<3){u.copy(d),i.atMouth=1,i.flame=t>2.3&&t<2.85?1:0,i.lit=t>2.65,i.drag=i.lit?1:0;return}i.lit=!0;let f=this.cyc;f.t+=e;let g=.8+f.rest+.8+1.3;f.t>=g&&(f.t-=g,f.n++,f.rest=f.n===1?Qw:$w+Math.random()*eT);let v=f.t,m=.8+f.rest,p=m+.8;if(v<.8){let x=rn(v/.8);u.lerpVectors(d,h,x),i.atMouth=1-x}else if(v<m)u.copy(h);else if(v<p){let x=rn((v-m)/.8);u.lerpVectors(h,d,x),i.atMouth=x}else u.copy(d),i.drag=1,i.atMouth=1;i.exhale=v>.6&&v<1.6}_wander(e,t){let n=this.person,i=n.root,s=this.wd;if(s.t+=e,s.mode==="idle"){if(n.play("Idle_Loop",.4),s.face!==null&&(i.rotation.y=Ui(i.rotation.y,s.face,Math.min(1,e*1.6))),s.t>s.dur){if(s.t=0,Math.random()<.6&&this._pickTarget(t)){s.mode="walk";return}s.dur=3+Math.random()*6,s.face=Math.random()<.5?i.rotation.y+(Math.random()-.5)*1.6:null}return}n.play("Walk_Loop",.35,{timeScale:.85});let a=this._t1.subVectors(s.target,i.position).setY(0),o=a.length(),c=Math.atan2(a.x,a.z);i.rotation.y=Ui(i.rotation.y,c,Math.min(1,e*4));let l=Math.cos(i.rotation.y-c),h=Math.min(o,Qs*.8*e*Math.max(0,l));if(i.position.addScaledVector(a.normalize(),h),o<.05){s.mode="idle",s.t=0,s.dur=3+Math.random()*7;let d=Math.random();s.face=d<.5?ao+(Math.random()-.5)*.9:d<.75?eg+(Math.random()-.5)*1.2:ro+(Math.random()-.5)*1.2}}_pickTarget(e){let t=this.person.root.position,n=this.wd,i=-e.length/2-.9,s=-e.length/2-8;for(let a=0;a<12;a++){let o=Math.random()*Math.PI*2,c=1.5+Math.random()*3,l=t.x+Math.sin(o)*c,h=t.z+Math.cos(o)*c;if(!(l<-1.3||l>2.8||h>i||h<s||Math.hypot(l,h)>9.5))return n.target.set(l,0,h),!0}return!1}_look(e){let t=this.person,n=this.lk;if(!t.head)return;let i=this.state==="parked"&&this.smokeU>3.4;if(i&&(n.t-=e)<=0){n.t=1.5+Math.random()*3.5;let c=Math.random();c<.25?(n.ty=(Math.random()-.5)*.4,n.tp=.35+Math.random()*.25):c<.75?(n.ty=(Math.random()<.5?-1:1)*(.5+Math.random()*.45),n.tp=(Math.random()-.4)*.2):(n.ty=(Math.random()-.5)*.3,n.tp=(Math.random()-.5)*.15)}let s=i?1-this.smoking.atMouth:0,a=Math.min(1,e*2.2);if(n.y+=(n.ty*s-n.y)*a,n.p+=(n.tp*s-n.p)*a,Math.abs(n.y)+Math.abs(n.p)<.001)return;t.root.updateMatrixWorld(!0);let o=this._t2.set(1,0,0).applyQuaternion(t.root.getWorldQuaternion(this._q1));this._q2.setFromAxisAngle($s,n.y*.5).multiply(this._q3.setFromAxisAngle(o,-n.p*.5));for(let c of[t.neck,t.head])c&&(c.getWorldQuaternion(this._q1),c.parent.getWorldQuaternion(this._q4),c.quaternion.copy(this._q4.invert().multiply(this._q2.clone().multiply(this._q1))),c.updateMatrixWorld(!0))}_hand(){if(this.handW<=.001||!this.person.arms?.r)return;let e=this.smoking,t=e.atMouth,n=this._pole.copy(e.R).multiplyScalar(.55+.35*t).addScaledVector(e.F,-.65*(1-t)+.1*t).addScaledVector($s,-.35-.2*t),i=this.person.arms.r[2].getWorldPosition(this._A);this.person.reach("r",i.lerp(this.handT,this.handW),n)}_enter(e,t){let n=this.person,i=this.t,s=n.root;if(this.smoking.on=!1,this.smoking.lit=!1,this.handW=Math.max(0,this.handW-t*2.5),this.smokeU=-1,n.tilt.rotation.x=0,i<.6){n.play("Idle_Loop",.3),s.position.copy(this.stand),s.rotation.y=Ui(this.enterYaw??ao,Math.atan2(this.corner.x-this.stand.x,this.corner.z-this.stand.z),rn(i/.6));return}let a=.6,o=this.stand.distanceTo(this.corner)/Qs,c=this.corner.distanceTo(this.out)/Qs,l=c+o;if(i<a+l){n.play("Walk_Loop",.3),this._walk(s,[this.stand,this.corner,this.out],[o,c],i-a,t);return}let h=a+l;if(i<h+1.1){n.play("Idle_Loop",.25),s.position.copy(this.out),s.rotation.y=i<h+.75?Ui(eg,af,rn((i-h)/.35)):Ui(af,ao,rn((i-h-.75)/.35)),this.cars.setDoor(rn((i-h-.15)/.6));return}this.cars.setDoor(1);let d=h+1.1,u=1.4;if(i<d+u){n.play("Sitting_Enter",.25,{once:!0,timeScale:n.duration("Sitting_Enter")/u});let g=rn((i-d)/u);s.position.lerpVectors(this.out,this.seat,g),s.rotation.y=Ui(ao,ro,rn((i-d-.3)/(u-.3)));return}n.play("Driving_Loop",.4),s.position.copy(this.seat),s.rotation.y=ro;let f=d+u;this.cars.setDoor(1-wl((i-f)/.9)),i>f+1&&(this.cars.setDoor(0),this.state="off")}};var Sl=class{constructor(e){this.renderer=e;let t=.125,n=.09375;this.size=[t,n],this.rt=new hn(384,Math.round(384*n/t),{type:Fn}),this.cam=new Dt(30,t/n,.15,3e3),this.cam.layers.enable(3),this.group=new Fe,this.group.visible=!1;let i=new Ue(new ht(t+.015,n+.011,.025),new Qe({color:1842206,roughness:.55}));i.position.z=-.015;let s=this.rt.texture;s.repeat.x=-1,s.offset.x=1;let a=new Ue(new ui(t,n),new Jt({map:s}));this.group.add(i,a),this._p=new M,this._q=new qe,this._d=new M,this._eye=new M}place(e,t){let[n,i,s]=e.eye;t?(this.group.position.copy(t.pos),this.group.position.x+=ll[0]/2+.014*.85/2+.02+(this.size[0]+.015)/2,this.group.position.y+=-ll[1]/2-.03+this.size[1]/2+.055,this.group.position.z+=.025):this.group.position.set(.21,i-.28,s-.6);let a=this._eye.set(n,i,s).sub(this.group.position).normalize(),o=this._d.set(0,-.03,1).normalize().add(a).normalize();this.group.quaternion.setFromUnitVectors(new M(0,0,1),o)}render(e,t){let n=this.renderer,i=this.cam;this.group.updateMatrixWorld(),this.group.getWorldPosition(i.position),this.group.parent.getWorldQuaternion(this._q),this._d.set(0,-.03,1).applyQuaternion(this._q),i.lookAt(this._d.add(i.position)),i.updateMatrixWorld();let s=n.getRenderTarget(),a=n.shadowMap.autoUpdate;n.shadowMap.autoUpdate=!1,this.group.visible=!1,t&&(t.visible=!1),n.setRenderTarget(this.rt),n.render(e,i),n.setRenderTarget(s),n.shadowMap.autoUpdate=a,t&&(t.visible=!0),this.group.visible=!0}};var tT=320,nT=200,iT=`
  uniform mat4 uTex;
  varying vec4 vUv;
  void main() {
    vUv = uTex * vec4(position, 1.0);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }`,sT=`
  uniform sampler2D tMap;
  varying vec4 vUv;
  void main() {
    vec3 c = texture2DProj(tMap, vUv).rgb;
    gl_FragColor = vec4(c * 0.82, 1.0);          // kính gương hơi tối (bạc phủ sau kính)
  }`,Al=class{constructor(e){this.renderer=e,this.cam=new Dt,this.cam.layers.enable(3),this.frame=0,this.current=null,this._v=new M,this._e=new M,this._p=new M,this._n=new M,this._m=new Ee,this._q=[0,1,2,3].map(()=>new M),this._bias=new Ee().set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1)}setCar(e){if(this.current&&this.current!==e&&this._show(this.current,!1),this.current=e,!e||e.wingMirrors!==void 0)return;e.wingMirrors=null;let t=e.group;t.updateMatrixWorld(!0);let n=null;if(t.traverse(g=>{!n&&g.isMesh&&/^WingmirrorGlass/i.test(g.name)&&g.material?.name==="Mirror"&&(n=g)}),!n)return;let i=this._m.copy(t.matrixWorld).invert().multiply(n.matrixWorld),a=(n.geometry.index?n.geometry.toNonIndexed():n.geometry).attributes.position,o=[[],[]],c=new M,l=new M,h=new M;for(let g=0;g<a.count;g+=3)c.fromBufferAttribute(a,g).applyMatrix4(i),l.fromBufferAttribute(a,g+1).applyMatrix4(i),h.fromBufferAttribute(a,g+2).applyMatrix4(i),o[c.x+l.x+h.x<0?0:1].push(c.clone(),l.clone(),h.clone());let d=new M(...e.dim.eye),u=[];for(let g of o){if(g.length<3)continue;let v=new M,m=new M;for(let N=0;N<g.length;N+=3){let H=new M().subVectors(g[N+1],g[N]).cross(new M().subVectors(g[N+2],g[N]));H.dot(new M().subVectors(d,g[N]))<0&&H.negate(),m.add(H),v.add(g[N]).add(g[N+1]).add(g[N+2])}v.multiplyScalar(1/g.length),m.normalize();let p=new M(0,1,0).cross(m).normalize(),x=new M().crossVectors(m,p),b=1e9,y=-1e9,_=1e9,w=-1e9;for(let N of g){let H=this._v.subVectors(N,v);b=Math.min(b,H.dot(p)),y=Math.max(y,H.dot(p)),_=Math.min(_,H.dot(x)),w=Math.max(w,H.dot(x))}let S=[[b,_],[y,_],[y,w],[b,w]].map(([N,H])=>v.clone().addScaledVector(p,N).addScaledVector(x,H)),D=new Pe().setFromPoints(g.map(N=>N.clone().addScaledVector(m,.003))),E=new hn(tT,nT,{type:Fn}),T=new vt({uniforms:{tMap:{value:E.texture},uTex:{value:new Ee}},vertexShader:iT,fragmentShader:sT}),F=new Ue(D,T);F.visible=!1,F.frustumCulled=!1,t.add(F),u.push({mesh:F,rt:E,P:v,N:m,N0:m.clone(),corners:S,ready:!1})}let f=[];t.traverse(g=>{g.isMesh&&/^Wingmirror/i.test(g.name)&&f.push(g)}),e.wingMirrors={glass:n,mirrors:u,housing:f}}_show(e,t){let n=e?.wingMirrors;if(n){n.glass.visible=!t;for(let i of n.mirrors)i.mesh.visible=t&&i.ready}}render(e,t,n){let i=this.current,s=i?.wingMirrors;if(!s)return;if(!n){this._show(i,!1),s.aimed=!1;return}let a=i.group,o=this.renderer;a.updateMatrixWorld();let c=t.getWorldPosition(this._e);if(!s.aimed){let d=this._v.copy(c).applyMatrix4(this._m.copy(a.matrixWorld).invert());for(let u of s.mirrors){let f=this._p.set(Math.sign(u.P.x)*.09,-.045,1).normalize();u.N.subVectors(d,u.P).normalize().add(f).normalize()}s.aimed=!0}let l=s.mirrors.every(d=>d.ready)?[s.mirrors[this.frame++%s.mirrors.length]]:s.mirrors,h=s.housing.map(d=>d.visible);s.housing.forEach(d=>{d.visible=!1});for(let d of l)this._renderOne(e,d,a,c,o);s.housing.forEach((d,u)=>{d.visible=h[u]}),this._show(i,!0),s.glass.visible=!1}_renderOne(e,t,n,i,s){let a=this._p.copy(t.P).applyMatrix4(n.matrixWorld),o=this._n.copy(t.N).transformDirection(n.matrixWorld),c=this._v.subVectors(i,a).dot(o);if(c<=.01)return;let l=this.cam;l.position.copy(i).addScaledVector(o,-2*c),l.up.set(0,1,0),l.lookAt(this._v.copy(l.position).add(o)),l.updateMatrixWorld();let h=t.corners.map((x,b)=>this._q[b].copy(x).applyMatrix4(n.matrixWorld).applyMatrix4(l.matrixWorldInverse)),d=Math.max(.01,Math.min(...h.map(x=>-x.z))-.004),u=1e9,f=-1e9,g=1e9,v=-1e9;for(let x of h){let b=d/Math.max(1e-4,-x.z);u=Math.min(u,x.x*b),f=Math.max(f,x.x*b),g=Math.min(g,x.y*b),v=Math.max(v,x.y*b)}l.projectionMatrix.makePerspective(u,f,v,g,d,3e3),l.projectionMatrixInverse.copy(l.projectionMatrix).invert(),t.mesh.material.uniforms.uTex.value.copy(this._bias).multiply(l.projectionMatrix).multiply(l.matrixWorldInverse).multiply(n.matrixWorld);let m=s.getRenderTarget(),p=s.shadowMap.autoUpdate;s.shadowMap.autoUpdate=!1,t.mesh.visible=!1,s.setRenderTarget(t.rt),s.render(e,l),s.setRenderTarget(m),s.shadowMap.autoUpdate=p,t.ready=!0}};var Rl=Math.PI*2,rT=Nt.smoothstep,Cl=class{constructor(){this.phase=0,this.omega=Rl/1.5,this.idle=60,this.wet=0,this.flow=0,this.flowDir=-1,this._v=new M,this._inv=new Ee}get running(){return this.phase>0}angle(e){return e*.5*(1-Math.cos(this.phase))}update(e,t,n){let i=t>.15;this.omega=Rl/(t>.95?1.05:1.55),i||this.phase>0?(this.phase+=this.omega*e,this.phase>=Rl&&(this.phase=i?this.phase-Rl:0),this.idle=0):this.idle+=e,this.wet+=(t-this.wet)*(1-Math.exp(-e*(t>this.wet?1.5:.12)));let s=Nt.lerp(-.05,.24,rT(n,6,20));this.flow+=s*e,this.flowDir=s>=0?1:-1}apply(e,t,n,i,s,a,o=null){if(n.getWorldDirection(this._v),this._v.transformDirection(this._inv.copy(i.matrixWorld).invert()),this._v.z>0&&(s=o),e.uGlass.value=s?t:0,e.uRearGlass.value=s?.rear?1:0,t<=0||!s)return;n.updateMatrixWorld(),e.uInvVP.value.multiplyMatrices(n.matrixWorld,n.projectionMatrixInverse),n.getWorldPosition(e.uCamPos.value),n.getWorldDirection(e.uCamFwd.value),e.uTanF.value=Math.tan(Nt.degToRad(n.fov)/2),e.uNear.value=n.near,e.uFar.value=n.far;let c=i.matrixWorld;if(e.uGC.value.copy(s.center).applyMatrix4(c),e.uGN.value.copy(s.normal).transformDirection(c),e.uGU.value.copy(s.right).transformDirection(c),e.uGV.value.copy(s.up).transformDirection(c),e.uGB.value.fromArray(s.bounds),e.uWipe.value.set(this.phase,this.omega,this.idle,a),e.uFlow.value.set(this.flow,this.flowDir),s.rear)return;let[l,h]=s.wipers;e.uPiv.value.set(l.u,l.v,h.u,h.v),e.uRest.value.set(l.rest,l.sign,h.rest,h.sign),e.uBlade.value.set(l.r0,l.r1,h.r0,h.r1),e.uSweep.value=s.sweep}};var co=5,aT=200,oT=40,Pl=200,Rs=r=>{let e=Math.sin(r*127.1+311.7)*43758.5453;return e-Math.floor(e)},cT=r=>{let e=Math.floor(r),t=r-e,n=t*t*(3-2*t);return Rs(e)*(1-n)+Rs(e+1)*n},rg=(r,e,t)=>{let n=Math.min(1,Math.max(0,(t-r)/(e-r)));return n*n*(3-2*n)},lT=`
  attribute float aGlow;
  uniform float uScale, uFogD;
  varying float vGlow;
  void main() {
    vec4 mv = viewMatrix * vec4(position, 1.0);
    float fd = uFogD * -mv.z;
    vGlow = aGlow * exp(-fd * fd);                // chìm dần trong sương xa
    gl_PointSize = clamp(0.25 * uScale / -mv.z, 2.5, 22.0);
    gl_Position = projectionMatrix * mv;
  }`,hT=`
  uniform vec3 uColor; uniform float uAmt;
  varying float vGlow;
  void main() {
    float d = length(gl_PointCoord - 0.5) * 2.0;
    // lõi nhỏ (bằng nửa trước), quầng rộng + mờ dần về 0 ở mép điểm (nhoè, không lộ khung vuông)
    float core = smoothstep(0.11, 0.0, d), halo = exp(-d * d * 3.5) * max(0.0, 1.0 - d * d) * 0.45;
    float a = (core + halo) * vGlow * uAmt;
    if (a < 0.003) discard;
    gl_FragColor = vec4(uColor * a, 1.0);
  }`,Ll=class{constructor(e){this.pos=new Float32Array(Pl*3),this.glow=new Float32Array(Pl);let t=new Pe;t.setAttribute("position",new we(this.pos,3).setUsage(pi)),t.setAttribute("aGlow",new we(this.glow,1).setUsage(pi)),t.setDrawRange(0,0),this.mat=new vt({uniforms:{uScale:{value:500},uFogD:{value:0},uColor:{value:new $(9,12,2.6)},uAmt:{value:0}},vertexShader:lT,fragmentShader:hT,transparent:!0,depthWrite:!1,blending:$t,fog:!1}),this.points=new un(t,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=4,this.points.visible=!1,e.add(this.points),this.ground=new Map,this._p={}}update(e,t,n,i,s,a,o=0){if(this.mat.uniforms.uAmt.value=s,this.mat.uniforms.uScale.value=a,this.mat.uniforms.uFogD.value=o,this.points.visible=s>.01,!this.points.visible)return;let c=this._p,l=0,h=Math.floor((t-oT)/co),d=Math.floor((t+aT)/co);for(let f=h;f<=d&&l<Pl;f++){let g=rg(.38,.58,cT(f*co/140+3.7));if(g<=0||Rs(f*1.31)>g*.9)continue;let v=1+Math.floor(Rs(f*2.17)*3);for(let m=0;m<v&&l<Pl;m++){let p=f*8+m,x=Rs(p*3.1+.5),b=Rs(p*5.7+1.3),y=Rs(p*7.3+2.9),_=Rs(p*9.1+4.4),w=f*co+x*co;n.at(w,c);let S=b<.5?-1:1,D=S*(4.6+16*y*y),E=Math.cos(c.th),T=-Math.sin(c.th),F=c.x+E*D,N=c.z+T*D,H=this.ground.get(p);H===void 0&&(H=i?i.heightAt(F,N):c.y,H>c.y-3&&H<c.y+4||(H=c.y),this.ground.set(p,H));let L=.35+_*.3,A=.5+x*.4;this.pos[l*3]=F+Math.sin(e*L+b*20)*.9+Math.sin(e*A*1.7+y*9)*.3,this.pos[l*3+1]=H+.7+2.6*_+Math.sin(e*A+x*13)*.35,this.pos[l*3+2]=N+Math.cos(e*A+y*17)*.9+Math.cos(e*L*1.9+_*7)*.3;let C=Math.sin(e*(.9+.8*y)+x*40);this.glow[l]=.12+.88*rg(.25,.9,C)*(.6+.4*b),l++}}if(this.ground.size>1500)for(let f of this.ground.keys())f<h*8&&this.ground.delete(f);let u=this.points.geometry;u.setDrawRange(0,l),u.attributes.position.needsUpdate=!0,u.attributes.aGlow.needsUpdate=!0}};var og=r=>r>0?1.5:-1.8,uT=r=>r>0?-1.8:1.5,ag=r=>r.home??og(r.dir),dT=r=>r.home!==void 0?-r.home:uT(r.dir);var Il=class{constructor(){this.player={player:!0,state:"cruise",target:null,dir:1},this.active=[],this.city=!1}_other(e){if(!this.city)return dT(e);let t=ag(e);return Math.sign(t)*(Math.abs(t)<3.5?5.25:1.75)}_overlapLat(e,t,n){return Math.abs(e.d-t)<(e.w+n)/2+.25}_all(){return[this.player,...this.active]}_ahead(e,t,n){let i=null,s=n;for(let a of this._all()){if(a===e||!this._overlapLat(a,t,e.w))continue;let o=(a.s-e.s)*e.dir;o>0&&o<s&&(s=o,i=a)}return i?{e:i,gap:s-(e.len+i.len)/2}:null}_follow(e,t){return Math.max(0,e+.5*(t-(6+1.1*e)))}_canOvertake(e,t,n){let i=this._other(e),s=(t.s-e.s)*e.dir,a=t.player&&t.v<1?16:8,o=Math.max(1,n-t.v),c=(s+(e.len+t.len)/2+a)/o;for(let l of this._all()){if(l===e||l===t||!this._overlapLat(l,i,e.w))continue;let h=(l.s-e.s)*e.dir;if(h<0&&l.dir===e.dir&&l.v>e.v-1&&-h-(e.len+l.len)/2<15+(l.v-e.v)*4)return!1;if(!(h<-(e.len+l.len)/2-3)&&(h<s+t.len/2+50||l.dir!==e.dir&&h-(n+l.v)*c<25||l.dir===e.dir&&l.v<n&&h-(n-l.v)*c<15))return!1}return!0}_overtakeDanger(e,t,n){let i=this._other(e),s=(t.s-e.s)*e.dir+(e.len+t.len)/2+8,a=Math.max(0,s)/Math.max(1,n-t.v);for(let o of this._all()){if(o===e||o===t||o.dir===e.dir||!this._overlapLat(o,i,e.w))continue;let c=(o.s-e.s)*e.dir;if(c>0&&c-(n+o.v)*a<15)return!0}return!1}_sideClear(e,t,n=2){for(let i of this._all()){if(i===e||!this._overlapLat(i,t,e.w))continue;let s=(i.s-e.s)*e.dir,a=Math.abs(s)-(e.len+i.len)/2;if(a<n)return!1;let o=s<0?i.dir===e.dir?i.v-e.v:-1e9:i.dir===e.dir?e.v-i.v:e.v+i.v;if(o>0&&a<o*3+5)return!1}return!0}_decide(e,t){let n=ag(e),i=this._other(e),s=n,a=t,o=60+3*Math.max(e.v,t);if(e.state==="overtake"&&e.target&&this.active.concat([this.player]).includes(e.target)){let c=e.target,l=Math.max(t,c.v+6),h=(e.s-c.s)*e.dir;s=i,a=l,h>(e.len+c.len)/2+(c.player&&c.v<1?16:8)?(e.state="cruise",e.target=null,s=n,a=t):this._overtakeDanger(e,c,l)&&(h<0?(e.state="cruise",e.target=null,s=n,a=Math.max(0,c.v-4)):a=l+6)}else{e.state="cruise",e.target=null;let c=this._ahead(e,n,o);c&&(c.e.dir===e.dir?!e.noOvertake&&c.e.v<t-1.5&&c.gap<30+1.2*e.v&&this._canOvertake(e,c.e,Math.max(t,c.e.v+6))?(e.state="overtake",e.target=c.e,s=i,a=Math.max(t,c.e.v+6)):a=Math.min(a,this._follow(c.e.v,c.gap)):!e.player&&c.e.player&&c.e.home*og(e.dir)>0&&c.gap<200&&this._sideClear(e,i,30)?s=i:c.gap<120&&(s=n+(n>0?.8:-.8)))}for(let c of[e.d,s]){let l=this._ahead(e,c,o);l&&(l.e.dir===e.dir?a=Math.min(a,this._follow(l.e.v,l.gap)):a=Math.min(a,Math.max(0,(l.gap-12)*.7)))}return s!==e.d&&Math.abs(s-e.d)>.3&&!this._sideClear(e,s)&&(s=e.d),{dT:s,vT:a}}};var cf=(r,e,t)=>Math.min(t,Math.max(e,r)),En={maxActive:2,sameMax:1,sameGapMin:25,sameGapMax:60,gapMin:10,gapMax:25,detect:30,minSpeed:13.88888888888889,maxSpeed:55.55555555555556},cg=()=>En.minSpeed+Math.random()*(En.maxSpeed-En.minSpeed);function lg(r,e){let t=r.cruise??r.v,n=r.direction??-1,i=o=>e.heading?e.heading(Math.max(0,o)):e.at(Math.max(0,o),{}).th,s=Math.max(12,(t*t-(t*.6)**2)/24+10),a=0;for(let o=0;o<=s;o+=6){let c=Math.max(0,r.s+n*o),l=Math.max(0,c-10),h=c+10,d=i(h)-i(l);a=Math.max(a,Math.abs(Math.atan2(Math.sin(d),Math.cos(d)))/(h-l))}return r.inCurve=a>=(r.inCurve?.0012:.0015),t*(r.inCurve?.6:1)}function hg(r,e,t,n,i=r.cruise??r.v,s=()=>!0){let a=r.direction??-1,o=F=>a*(F.s-r.s),c=Math.max(0,t-r.dim.width/2-.25),l=cf(r.baseD??r.d,-c,c),h=F=>En.detect+Math.max(0,-a*(F.direction||0)*(F.speed||0))*1.2,d=e.filter(F=>{if(F.id===r||o(F)<-(r.dim.length+F.length)/2-2)return!1;let N=Math.max(0,o(F)-(r.dim.length+F.length)/2),H=Math.max(0,Math.abs(r.d-F.d)-(r.dim.width+F.width)/2);return Math.hypot(N,H)<=h(F)+1e-6}),u=F=>(r.dim.width+F.width)/2+.6,f=(F,N)=>Math.abs(F-N.d)<u(N),g=e.find(F=>F.id===r.avoidFor),v=g&&o(g)>-(r.dim.length+g.length)/2-8?r.avoidD:l,m=d.filter(F=>f(r.d,F)||f(v,F)),p=i;if(m.length){let N=[v,-1.8,1.8,-c,c,...m.flatMap(H=>[H.d-u(H)-.1,H.d+u(H)+.1])].filter(H=>Math.abs(H)<=c&&s(H)&&d.every(L=>!f(H,L)));if(N.sort((H,L)=>Math.abs(H-r.d)-Math.abs(L-r.d)||Math.abs(H-l)-Math.abs(L-l)),N.length){v=N[0];let H=m.reduce((L,A)=>o(L)<o(A)?L:A);r.avoidFor=H.id,r.avoidD=v}else v=r.d;for(let H of m){let L=Math.max(0,o(H)-(r.dim.length+H.length)/2-2),A=-a*(H.direction||0)*(H.speed||0);p=Math.min(p,Math.max(0,Math.sqrt(24*L)-A))}}let x=m.length>0,b=x?16:3,y=Math.max(x?.6:0,Math.min(x?8:2.2,(x?.35:.2)*Math.abs(r.v))),_=v-r.d,w=r.latV||0,S=Math.sign(_)*Math.min(y,Math.sqrt(2*b*Math.abs(_))),D=w+cf(S-w,-b*n,b*n),E=r.d+D*n;(v-E)*_<=0&&(E=v,D=0);let T=r.v+cf(p-r.v,-12*n,5*n);for(let F of d){let N=Math.min(r.d,E),H=Math.max(r.d,E);if(F.d+u(F)<=N||F.d-u(F)>=H)continue;let L=o(F)-(r.dim.length+F.length)/2-1.5,A=-a*(F.direction||0)*(F.speed||0)*n;T=Math.min(T,Math.max(0,(L-A)/Math.max(n,1e-6)))}return{d:E,v:T,s:r.s+a*T*n,avoiding:m.length>0,latV:D}}function ug(r,e,t){let n={},i=h=>(e.at(h,n),(n.x-r.x)**2+(n.z-r.z)**2),s=t,a=1/0;for(let h=Math.max(0,t-35);h<=t+35;h+=2){let d=i(h);d<a&&(a=d,s=h)}let o=Math.max(0,s-2),c=s+2;for(let h=0;h<12;h++){let d=(o*2+c)/3,u=(o+c*2)/3;i(d)<i(u)?c=u:o=d}let l=(o+c)/2;return e.at(l,n),{s:l,d:(r.x-n.x)*Math.cos(n.th)-(r.z-n.z)*Math.sin(n.th)}}function dg(r){let e=new Map,t=new Map,n=r.clone();return fg(r,n,function(i,s){e.set(s,i),t.set(i,s)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let s=i,a=e.get(i),o=a.skeleton.bones;s.skeleton=a.skeleton.clone(),s.bindMatrix.copy(a.bindMatrix),s.skeleton.bones=o.map(function(c){return t.get(c)}),s.bind(s.skeleton,s.bindMatrix)}),n}function fg(r,e,t){t(r,e);for(let n=0;n<r.children.length;n++)fg(r.children[n],e.children[n],t)}var fT="assets/models/carriage.glb",pT={length:5.6,width:2.8,height:2.4},Hi={gapMin:15,gapMax:30,max:2,minSpeed:25/3.6,maxSpeed:40/3.6,gallop:11};async function pg(r){let e=await r.loadAsync(fT),t=e.scene;t.traverse(a=>{if(!a.isMesh)return;let o=a.material;o.transparent=!1,o.depthWrite=!0,o.alphaTest=.4,Tt(o),a.castShadow=!0,a.receiveShadow=!0,a.frustumCulled=!1}),t.rotation.y=Math.PI,t.updateMatrixWorld(!0);let n=new zt().setFromObject(t,!0),i=n.getCenter(new M);t.position.set(-i.x,-n.min.y,-i.z);let s=e.animations[0]||null;return()=>{let a=new Fe;a.add(dg(t));let o=new Yr(a);return s&&o.clipAction(s).play(),{group:a,dim:{...pT},wheels:[],mixer:o,carriage:!0}}}var mg=430,gg=.24,vg=1.8,xg=(r,e,t)=>Math.min(t,Math.max(e,r)),Dl=class{constructor(e,t){this.scene=e,this.cars=t,this.pool=[],this.active=[],this.policy=new Il,this.ctrl={lane:null,maxV:1/0},this.timer=4+Math.random()*6,this.sameTimer=En.sameGapMin+Math.random()*(En.sameGapMax-En.sameGapMin),this.loading=!1,this.wait=6,this._p={},this._q={},this.beamRoot=new Fe,this.beam=to(this.beamRoot,null,{glows:!1}),this.beamFor=null,e.add(this.beamRoot),this.carriages=[],this.makeCarriage=null,this.carriageLoading=!1,this.carriageTimer=6}_homeLane(e){return(this.playerHome??e)>=0?vg:-vg}async _loadCarriage(){this.carriageLoading=!0;try{this.makeCarriage=await pg(this.cars.loader)}catch(e){console.warn("carriage",e)}}_spawnCarriage(e,t,n){if(this.active.filter(l=>l.carriage).length>=Hi.max)return!1;let i=Hi.minSpeed+Math.random()*(Hi.maxSpeed-Hi.minSpeed),s=Math.random()<.4&&Math.abs(i-n)>3?1:-1,a=s===-1?e+mg+Math.random()*80:i>n+1?Math.max(10,e-80-Math.random()*30):e+150+Math.random()*70;if(this.active.some(l=>Math.abs(l.s-a)<60)||Math.abs(a-e)<40)return!1;let o=this.carriages.find(l=>!l.busy);if(!o){if(this.carriages.length>=Hi.max)return!1;o=this._vehicle(this.makeCarriage()),this.carriages.push(o)}let c=this._homeLane(t);return Object.assign(o,{s:a,direction:s,busy:!0,cruise:i,v:i,heard:!0,policy:null,inCurve:!1,avoidFor:null,latV:0,yaw:0}),o.d=o.baseD=o.avoidD=s===1?c:-c,o.root.visible=!0,this.active.push(o),!0}async _load(e){this.loading=!0;let t=this.cars.list.filter(n=>n.id!==e).sort(()=>Math.random()-.5);for(let n=0;n<En.maxActive+En.sameMax&&t.length;n++){let i=t[n%t.length];try{let s=await this.cars._load(i);if(this.cars.prepare)try{await this.cars.prepare(s.group)}catch{}this.pool.push(this._vehicle(s))}catch(s){console.warn("traffic",i.id,s)}}}_vehicle(e){let t=new Fe;t.visible=!1,t.add(e.group);let n=e.dim,i=(d,u)=>{let f=new Nn(new Pn({map:this.cars.softTex,color:d,transparent:!0,opacity:0,depthWrite:!1,blending:$t}));return f.scale.set(u*1.35,u*.7,1),t.add(f),f},s=!!e.carriage,a=to(t,this.cars.softTex,{spots:!1,glows:!s});no(a,n);for(let d of e.wheels)d.front=d.pivot.position.z<0,d.pivot.rotation.order="YXZ";let[o,c,l]=ea(n).tail,h=s?[]:[-1,1].map(d=>{let u=i(16720914,1.6);return u.position.set(d*o,c,l+.03),u});return this.scene.add(t),{root:t,wheels:e.wheels,dim:n,headlights:a,tails:h,busy:!1,s:0,v:0,d:0,carriage:s,mixer:e.mixer||null}}update(e,t,n,i,s,a,o=[],c=null){if(!this.pool.length){!this.loading&&(this.wait-=e)<=0&&this._load(a);return}this.cars.loader&&!this.makeCarriage&&!this.carriageLoading&&this._loadCarriage();let l=o.find(v=>v.id==="player");this.makeCarriage&&(this.carriageTimer-=e)<=0&&(this.carriageTimer=this._spawnCarriage(t,n,l?.speed||0)?Hi.gapMin+Math.random()*(Hi.gapMax-Hi.gapMin):1),this.timer-=e,this.sameTimer-=e;for(let v of[-1,1]){let m=v===1,p=m?"sameTimer":"timer";if(this[p]>0)continue;let x=m?En.sameGapMin:En.gapMin,b=m?En.sameGapMax:En.gapMax;this[p]=x+Math.random()*(b-x);let y=this.pool.filter(S=>!S.busy);if(!y.length||this.active.filter(S=>!S.carriage&&(S.direction??-1)===v).length>=(m?En.sameMax:En.maxActive))continue;let _=y[Math.floor(Math.random()*y.length)],w=this._homeLane(n);_.s=m?Math.max(10,t-80-Math.random()*30):t+mg+Math.random()*80,!(this.active.some(S=>Math.abs(S.s-_.s)<60)||Math.abs(_.s-t)<40)&&(_.direction=v,_.busy=!0,_.cruise=_.v=cg(),_.d=_.baseD=m?w:-w,_.heard=!1,_.policy=null,_.inCurve=!1,_.avoidFor=null,_.avoidD=_.d,_.latV=0,_.yaw=0,_.root.visible=!0,this.active.push(_))}let h=[...o,...this.active.map(v=>({id:v,s:v.s,d:v.d,speed:v.v,direction:v.direction??-1,width:v.dim.width,length:v.dim.length}))],d=o.find(v=>v.id==="player");Object.assign(this.policy.player,{s:t,d:n,v:d?.speed||0,len:d?.length||this.cars.dim?.length||4.7,w:d?.width||this.cars.dim?.width||2,home:this.playerHome??(n>=0?1.5:-1.5)}),this.policy.active=this.active.map(v=>(v.policy||(v.policy={state:"cruise",target:null}),Object.assign(v.policy,{s:v.s,d:v.d,v:v.v,dir:v.direction??-1,len:v.dim.length,w:v.dim.width,home:v.baseD,noOvertake:(v.direction??-1)<0}))),this.policy.active.push(...o.filter(v=>v.id==="person").map(v=>({s:v.s,d:v.d,v:v.speed||0,dir:0,len:v.length,w:v.width,player:!0,home:v.d})));let u=this.policy._decide(this.policy.player,this.playerGoal??d?.speed??0);this.ctrl.lane=u.dT,this.ctrl.maxV=u.vT;let f=this._p,g=this._q;for(let v=this.active.length-1;v>=0;v--){let m=this.active[v],p=lg(m,i),x=this.policy._decide(m.policy,p),b=T=>T*m.baseD>=0||x.dT*m.baseD<0&&this.policy._sideClear(m.policy,T),y=hg(m,h,bt.halfWidth,e,Math.min(p,x.vT),b);if(m.s=y.s,m.d=y.d,m.v=y.v,m.avoiding=y.avoiding,m.latV=y.latV,m.s<t-(m.direction===1?180:90)||m.direction===1&&m.s>t+(m.carriage?400:750)){m.busy=!1,m.root.visible=!1,this.active.splice(v,1);continue}if(c&&d&&!m.carriage){let T=m.s-t,F=m.v*(m.direction??-1)-d.speed,N=Math.abs(F);Math.abs(T)>70&&(m.heard=!1),!m.heard&&N>2&&T*F<0&&Math.abs(m.d-n)<7&&-T/F<c.passDur(N)*.5&&(m.heard=!0,c.passBy(N,Nt.clamp((m.d-n)/4,-.8,.8),Math.abs(m.d-n)))}i.at(m.s,f);let _=i.at(m.s+2.5,g).y,w=i.at(m.s-2.5,g).y;m.root.position.set(f.x+Math.cos(f.th)*m.d,f.y,f.z-Math.sin(f.th)*m.d);let S=m.direction??-1,D=xg(Math.atan2(m.latV||0,Math.max(3,m.v)),-.35,.35);m.yaw=(m.yaw||0)+(D-(m.yaw||0))*(1-Math.exp(-e*8)),m.root.rotation.set(-S*Math.atan2(w-_,5),f.th+(S===-1?Math.PI:0)-S*m.yaw,0,"YXZ");let E=xg(-S*m.yaw*1.8,-.4,.4);for(let T of m.wheels)T.pivot.rotation.x+=S*(m.v*e)/T.radius,T.front&&(T.pivot.rotation.y=E);m.mixer&&(m.mixer.timeScale=m.v/Hi.gallop,m.mixer.update(e)),io(m.headlights,m.root,this.cars.viewer,s*gg);for(let T of m.tails)T.material.opacity=(.25+.6*s)*.6}this._beam(t,s)}_beam(e,t){let n=null,i=300;for(let s of this.active){if(s.carriage)continue;let a=Math.abs(s.s-e);a<i&&(i=a,n=s)}n!==this.beamFor&&(this.beamFor=n,n&&no(this.beam,n.dim)),n&&(n.root.updateMatrixWorld(),n.root.matrixWorld.decompose(this.beamRoot.position,this.beamRoot.quaternion,this.beamRoot.scale)),io(this.beam,this.beamRoot,null,n?t*gg:0)}};var bg=5,lf=2400,hf=420,yg=26,uf=12,_g=12.5,Mg=33,Eg=3,Fl=Math.floor(Mg*2/Eg)+1,gi=(r,e)=>r+Math.random()*(e-r);function wn(r,e){let t=r;return t.setAttribute("aKind",new we(new Float32Array(t.attributes.position.count).fill(e),1)),t.deleteAttribute("uv"),t}function mT(){let r=Es([wn(new Cc(.42,1,6,14).rotateX(Math.PI/2).scale(.92,1.05,1).translate(0,1.05,0),0),wn(new fi(.17,10,8).scale(1,.75,1.15).translate(0,.62,-.42),1),wn(new ht(.5,.3,.4).translate(0,1.3,-.72),0)]),e=Es([wn(new ht(.34,.42,.5).rotateX(-.5).translate(0,-.02,.16),0),wn(new ht(.3,.34,.48).translate(0,-.1,.5),0),wn(new ht(.29,.22,.16).translate(0,-.2,.78),1),wn(new ht(.2,.05,.1).rotateZ(.25).translate(.23,0,.38),0),wn(new ht(.2,.05,.1).rotateZ(-.25).translate(-.23,0,.38),0),wn(new Wr(.028,.13,6).rotateZ(-.9).translate(.15,.1,.42),3),wn(new Wr(.028,.13,6).rotateZ(.9).translate(-.15,.1,.42),3),wn(new ht(.035,.05,.05).translate(.152,-.02,.56),2),wn(new ht(.035,.05,.05).translate(-.152,-.02,.56),2)]),t=Es([wn(new sn(.08,.065,.72,8).translate(0,-.36,0),0),wn(new sn(.07,.08,.1,8).translate(0,-.77,0),2)]),n=Es([wn(new sn(.025,.018,.72,6).translate(0,-.36,0),0),wn(new fi(.06,6,5).scale(1,1.8,1).translate(0,-.76,0),2)]);return{body:r,head:e,leg:t,tail:n}}function gT(r){let e=new Qe({roughness:.82,metalness:0}),t={value:r};return e.onBeforeCompile=n=>{n.uniforms.uSeed=t,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.rgb = cowC;`)},e.customProgramCacheKey=()=>"cow",Tt(e)}var df=class{constructor(e,t){let n=gT(new M(t*17.3,t*5.1,t*11.7)),i=a=>{let o=new Ue(a,n);return o.castShadow=!0,o.receiveShadow=!0,o};this.root=new Fe,this.root.add(i(e.body)),this.neck=new Fe,this.neck.position.set(0,1.15,.85),this.neck.add(i(e.head)),this.root.add(this.neck),this.legs=[[.24,.6],[-.24,.6],[.24,-.6],[-.24,-.6]].map(([a,o])=>{let c=new Fe;return c.position.set(a,.81,o),c.add(i(e.leg)),this.root.add(c),c}),this.tail=new Fe,this.tail.position.set(0,1.4,-.92),this.tail.add(i(e.tail)),this.root.add(this.tail);let s=gi(.92,1.06);this.root.scale.setScalar(s),this.seed=Math.random()*100,this.mode="graze",this.timer=gi(1,8),this.head=1.2,this.headY=0,this.gait=0,this.x=0,this.z=0,this.yaw=0,this.y=0,this.hx=1e9,this.hz=1e9}},Nl=class{constructor(e){this.group=new Fe,this.group.visible=!1,e.add(this.group);let t=mT();this.cows=Array.from({length:bg},(i,s)=>{let a=new df(t,s);return this.group.add(a.root),a});let n=Tt(new Qe({color:5914151,roughness:.92}));this.posts=new Ft(new ht(.13,1.25,.13).translate(0,.62,0),n,Fl),this.rails=new Ft(new ht(1,.1,.05),n,(Fl-1)*2);for(let i of[this.posts,this.rails])i.castShadow=!0,i.receiveShadow=!0,i.frustumCulled=!1,this.group.add(i);this.herd=null,this.enabled=!1,this.onBuild=null,this._p={},this._m=new Ee,this._q=new qe,this._v=new M,this._s=new M,this._up=new M(0,1,0)}set visible(e){this.enabled=e,e||(this.group.visible=!1),this.herd=null}get visible(){return this.enabled}reset(){this.herd=null}_place(e,t,n){let i=hf+e*lf,s=e%2?-1:1,a=t.at(i,this._p),o=Math.cos(a.th),c=-Math.sin(a.th),l=-Math.sin(a.th),h=-Math.cos(a.th);this.cx=a.x+o*s*yg,this.cz=a.z+c*s*yg,this.cows.forEach((m,p)=>{let x=p/bg*Math.PI*2+gi(-.4,.4),b=gi(2,uf*.7);m.x=this.cx+Math.cos(x)*b,m.z=this.cz+Math.sin(x)*b,m.yaw=gi(0,Math.PI*2),m.hx=1e9,m.mode="graze",m.timer=gi(1,8)});let d=this._m,u=this._q,f=this._v,g=this._s,v=[];for(let m=0;m<Fl;m++){let p=t.at(i-Mg+m*Eg,this._p),x=p.x+Math.cos(p.th)*s*_g,b=p.z-Math.sin(p.th)*s*_g,y=n.heightAt(x,b);v.push([x,y,b]),d.compose(f.set(x,y-.05,b),u.setFromAxisAngle(this._up,p.th),g.set(1,1,1)),this.posts.setMatrixAt(m,d)}for(let m=0;m<Fl-1;m++){let[p,x,b]=v[m],[y,_,w]=v[m+1],S=Math.hypot(y-p,w-b),D=Math.atan2(-(w-b),y-p),E=Math.atan2(_-x,S);for(let T=0;T<2;T++)u.setFromEuler(new Si(0,D,E,"YZX")),d.compose(f.set((p+y)/2,(x+_)/2+(T?1:.55),(b+w)/2),u,g.set(S+.1,1,1)),this.rails.setMatrixAt(m*2+T,d)}this.posts.instanceMatrix.needsUpdate=!0,this.rails.instanceMatrix.needsUpdate=!0,this.onBuild&&(this.onBuild(this.group),this.onBuild=null)}update(e,t,n,i){if(!this.enabled)return;let s=Math.round((t+150-hf)/lf),a=hf+s*lf;if(s<0||a<t-250||a>t+750){this.group.visible=!1,this.herd=null;return}this.herd!==s&&(this._place(s,n,i),this.herd=s),this.group.visible=!0;let o=performance.now()/1e3;for(let c of this.cows)this._cow(c,e,o,i)}_cow(e,t,n,i){if(e.timer-=t,e.timer<=0){let d=Math.random();e.mode==="walk"||d<.5?(e.mode="graze",e.timer=gi(5,14)):d<.75?(e.mode="look",e.timer=gi(2,5),e.lookY=gi(-.45,.45)):(e.mode="walk",e.timer=gi(2.5,6),e.turn=gi(-.35,.35))}let s=1.2+.05*Math.sin(n*3.1+e.seed),a=0,o=0;if(e.mode==="look"&&(s=-.12,a=e.lookY),e.mode==="walk"){s=.35,o=.55;let d=this.cx-e.x,u=this.cz-e.z;if(d*d+u*u>uf*uf){let f=Math.atan2(d,u);e.yaw+=Math.atan2(Math.sin(f-e.yaw),Math.cos(f-e.yaw))*Math.min(1,t*1.5)}else e.yaw+=e.turn*t}for(let d of this.cows){if(d===e)continue;let u=e.x-d.x,f=e.z-d.z,g=u*u+f*f;if(g<6.25&&g>1e-6){let v=Math.sqrt(g),m=(2.5-v)*t;e.x+=u/v*m,e.z+=f/v*m}}e.x+=Math.sin(e.yaw)*o*t,e.z+=Math.cos(e.yaw)*o*t,Math.hypot(e.x-e.hx,e.z-e.hz)>.4&&(e.y=i.heightAt(e.x,e.z),e.hx=e.x,e.hz=e.z);let c=1-Math.exp(-t*2.2);e.head+=(s-e.head)*c,e.headY+=(a-e.headY)*c,e.gait+=((o>0?1:0)-e.gait)*Math.min(1,t*3),e.phase=(e.phase||0)+t*5.2*e.gait,e.root.position.set(e.x,e.y,e.z),e.root.rotation.y=e.yaw,e.neck.rotation.set(e.head,e.headY,0,"YXZ");let l=.38*e.gait*Math.sin(e.phase);e.legs[0].rotation.x=l,e.legs[3].rotation.x=l,e.legs[1].rotation.x=-l,e.legs[2].rotation.x=-l;let h=Math.max(0,Math.sin(n*.37+e.seed)-.85)*6;e.tail.rotation.set(.12,0,.12*Math.sin(n*1.6+e.seed)+.5*h*Math.sin(n*9))}};var pf=bt.halfWidth,vT=230,xT=190,Ul=pf+.6,bT=6,yT=4,lo=13,ii=(r,e,t)=>{let n=Math.min(1,Math.max(0,(t-r)/(e-r)));return n*n*(3-2*n)};function _T(r){return{index:r,s:260+r*560+Ze(r,71)*100,width:2+3*Ze(r,37),flow:.25+.75*Ze(r,93)}}function wg(r,e,t,n,i){let s=e.at(r.s,{}),a=Math.cos(s.th)*n,o=-Math.sin(s.th)*n,c=(p,x)=>t.heightAt(p,x),l=1.5,h=n<0?1:-1,d=.61,u=s.x+a*Ul,f=s.z+o*Ul,g=a,v=o,m=[];for(let p=0;p<i;){if(p>6){let b=(c(u+l,f)-c(u-l,f))*h,y=(c(u,f+l)-c(u,f-l))*h,_=Math.hypot(b,y);if(_>1e-6){let S=.25*ii(6,30,p);g+=(b/_-g)*S,v+=(y/_-v)*S}let w=Math.hypot(g,v);if(g/=w,v/=w,g*a+v*o<Math.cos(d)){let S=Math.sign(a*v-o*g||1)*d;g=a*Math.cos(S)-o*Math.sin(S),v=a*Math.sin(S)+o*Math.cos(S)}}let x=p<24?1.2:2.4;if(u+=g*x,f+=v*x,p+=x,c(u,f),p>12&&t._d<pf+4)break;m.push({x:u,z:f,a:p,dx:g,dz:v})}return m}function Tg(r,e){return r.map(({x:t,z:n,a:i,dx:s,dz:a})=>{let c=(2+6*ii(30,150,i))*ii(10,40,i)*((Ut(i/52+e,3.3)-.5)*2+.35*(Ut(i/13+e,8.1)-.5)*2);return{x:t-a*c,z:n+s*c,a:i}})}function MT(r,e,t){let n=t.iCar;t.setCar(r.s);let i=e.at(r.s,{}),s=Math.cos(i.th),a=-Math.sin(i.th),o=new M(i.x,i.y,i.z),c=r.index*3.17+.37,l=r.width,h=r.flow,d=l*.6,u=l*(.17+.1*h),f=[],g=Tg(wg(r,e,t,-1,vT),c),v=Tg(wg(r,e,t,1,xT),c+41),m=g.length?g[g.length-1].a:0,p=v.length?v[v.length-1].a:0;for(let A=g.length-1;A>=0;A--)f.push({...g[A],side:-1,end:m,road:!1});let x=16;for(let A=0;A<=x;A++){let C=-Ul+2*Ul*A/x;f.push({x:i.x+s*C,z:i.z+a*C,d:C,a:0,side:0,road:!0})}for(let A of v)f.push({...A,side:1,end:p,road:!1});let b={};for(let A=0;A<f.length;A++){let C=f[A];if(C.road)C.tx=s,C.tz=a;else{let O=f[Math.max(0,A-1)],k=f[Math.min(f.length-1,A+1)],V=Math.hypot(k.x-O.x,k.z-O.z)||1;C.tx=(k.x-O.x)/V,C.tz=(k.z-O.z)/V}C.px=C.tz,C.pz=-C.tx;let U;C.road?U=d:(U=u*(.7+.6*Ut(C.a/17+c,5.5+C.side)),C.side<0&&(U*=1+.6*(1-ii(4,22,C.a))),U+=(d-U)*(1-ii(0,C.side<0?6:3,C.a)),U*=.3+.7*ii(0,30,C.end-C.a)),C.hw=U,C.wb=C.road?U+.9:U*1.7+.45,C.xs=[],C.ys=[],C.zs=[];for(let O=0;O<lo;O++){let k=C.wb*(2*O/(lo-1)-1),V,j,ee;C.road?(e.at(r.s+k,b),V=b.x+Math.cos(b.th)*C.d,ee=b.z-Math.sin(b.th)*C.d,j=Math.abs(C.d)<=pf?b.y+.05:t.heightAt(V,ee)):(V=C.x+C.px*k,ee=C.z+C.pz*k,j=t.heightAt(V,ee)),C.xs.push(V),C.ys.push(j),C.zs.push(ee)}C.y=C.ys[(lo-1)/2]}t.iCar=n;let y=0;for(let A=0;A<f.length;A++){let C=f[A],U=f[Math.max(0,A-1)],O=f[Math.min(f.length-1,A+1)];C.slope=C.road?0:Math.abs(O.y-U.y)/(Math.hypot(O.x-U.x,O.z-U.z)||1),A&&(y+=Math.hypot(C.x-f[A-1].x,C.y-f[A-1].y,C.z-f[A-1].z)),C.along=y}let _=y;for(let A=0;A<2;A++){let C=f.map(U=>U.slope);for(let U=1;U<f.length-1;U++)f[U].road||(f[U].slope=C[U-1]*.25+C[U]*.5+C[U+1]*.25)}let w=0;for(let A=0;A<f.length;A++){let C=f[A],U=0;for(let j=A-1;j>=0&&C.along-f[j].along<8;j--)U=Math.max(U,f[j].slope);let O=A?C.along-f[A-1].along:0;w=Math.max(Math.min(1,Math.max(0,(U-C.slope)*.8)),w*Math.exp(-O/(C.road?1.3:3.5))),C.turb=C.road?w*.4:w,C.st=Math.min(1,C.slope/1.3),C.fade=ii(0,25,C.along)*ii(0,30,_-C.along);let k=A?C.along-f[A-1].along:0,V=(.6+4.4*C.st)*(.75+.5*h);C.tau=A?f[A-1].tau+k/V:0,C.road||(C.fade*=1-ii(40,90,C.a)*(1-ii(.3,.62,Ut(C.a/45+c,13.7+C.side))))}let S=(A,C,U)=>{let O=Math.min(lo-1.0001,Math.max(0,(C/U+1)*(lo-1)/2)),k=Math.floor(O),V=O-k;return A[k]+(A[k+1]-A[k])*V},D=(A,C,U,O)=>{let k=[],V=[],j=[],ee=[];f.forEach((Z,he)=>{let ue=C(Z),ye=U(Z);for(let W=0;W<=A;W++){let Y=ue*(2*W/A-1);if(k.push(S(Z.xs,Y,Z.wb)-o.x,S(Z.ys,Y,Z.wb)+ye-o.y,S(Z.zs,Y,Z.wb)-o.z),V.push(Y,Z.along,Z.tau,h),j.push(...O(Z,ue)),he&&W<A){let te=(he-1)*(A+1)+W,ie=he*(A+1)+W;ee.push(te,ie,te+1,te+1,ie,ie+1)}}});let G=new Pe;return G.setAttribute("position",new Ie(k,3)),G.setAttribute("aWUV",new Ie(V,4)),G.setAttribute("aInfo",new Ie(j,4)),G.setIndex(ee),G.computeVertexNormals(),G.computeBoundingSphere(),G},E=A=>A.road?.035+.02*h:.07+.13*ii(15,120,A.a)+.4*A.st,T=D(bT,A=>A.hw,E,(A,C)=>[A.st,A.turb,A.fade,C]),F=D(yT,A=>A.wb,A=>A.road?.012:E(A)*.55,(A,C)=>[A.st,A.road?1:0,A.fade,C]),N=[];f.forEach((A,C)=>{if(A.road||A.a<1.3||A.fade<.3)return;let U=(A.a<25?.5:A.a<80?.22:.08)*(1-.65*ii(.55,.9,A.st));for(let O of[-1,1]){if(Ze(r.index*977+C,O>0?11:23)>U)continue;let V=Ze(r.index*977+C,O>0?31:47),j=A.a<12?.45+.65*V:.25+.45*V,ee=O*Math.min(A.wb-.05,A.hw+.05+.35*j*Ze(C,59));N.push({x:S(A.xs,ee,A.wb)-o.x,y:S(A.ys,ee,A.wb)-(.28+.2*A.st)*j-o.y,z:S(A.zs,ee,A.wb)-o.z,s:j,yaw:V*6.283,k:Math.floor(Ze(C,O+71)*2.999),c:.75+.35*Ze(C,O+83)})}if(A.st>.5&&Ze(r.index*977+C,97)<.12){let O=(Ze(C,101)-.5)*A.hw,k=.2+.2*Ze(C,103);N.push({x:S(A.xs,O,A.wb)-o.x,y:S(A.ys,O,A.wb)-.1-o.y,z:S(A.zs,O,A.wb)-o.z,s:k,yaw:Ze(C,107)*6.283,k:0,c:.7})}});let H=[],L=(A,C)=>f.filter(U=>U.side===A).reduce((U,O)=>!U||Math.abs(O.a-C)<Math.abs(U.a-C)?O:U,null);for(let[A,C]of[[L(-1,2.5),1],[L(1,9),.8]])A&&H.push({x:A.x-o.x,y:A.y+.3-o.y,z:A.z-o.z,w:Math.max(2.2,A.hw*2.4),h:1.2+1.6*h,op:(.1+.14*h)*C});return{origin:o,water:T,wet:F,rocks:N,sprays:H,nodes:f,sheet:d}}var Sg=`
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
`;function ET(r,e){r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
attribute vec4 aWUV;
attribute vec4 aInfo;
varying vec4 vWUV;
varying vec4 vInfo;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWUV = aWUV; vInfo = aInfo;`).replace("#include <project_vertex>",`#include <project_vertex>
      mvPosition.xyz *= ${(1-e).toFixed(4)};
      gl_Position = projectionMatrix * mvPosition;`)}function wT(r){let e=new Qe({color:16777215,roughness:.08,metalness:0,envMapIntensity:.7,transparent:!0,depthWrite:!1,side:dt,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-12});return e.onBeforeCompile=t=>{t.uniforms.uTime=r,ET(t,.005),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
        uniform float uTime; varying vec4 vWUV; varying vec4 vInfo;
        float wFoam = 0.0, wHgt = 0.0, wMask = 0.0;
        ${Sg}`).replace("#include <map_fragment>",`
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
        #include <opaque_fragment>`)},e.customProgramCacheKey=()=>"waterfall-water",Tt(e)}function TT(){return new vt({transparent:!0,depthWrite:!1,side:dt,blending:Lu,blendEquation:ji,blendSrc:Iu,blendDst:Du,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-8,vertexShader:`
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
      ${Sg}
      void main() {
        float lat = vWUV.x, along = vWUV.y, e = abs(lat) / max(vInfo.w, 0.05);
        float edge = 0.72 + 0.3 * (wNoise(vec2(along * 0.35 + (lat > 0.0 ? 5.3 : 11.9), 0.5)) - 0.5) + 0.12 * (wNoise(vec2(along * 1.3, lat * 1.1 + 3.0)) - 0.5);
        float m = (1.0 - smoothstep(edge - 0.35, edge + 0.05, e)) * vInfo.z * (1.0 - smoothstep(150.0, 700.0, vDist));
        vec3 tint = mix(vec3(0.42, 0.44, 0.42), vec3(0.6, 0.7, 0.5), smoothstep(0.35, 0.95, e));     // giữa sẫm, rìa rêu
        tint = mix(tint, vec3(0.55), vInfo.y * 0.6);                                                 // mặt đường ướt: tối vừa
        gl_FragColor = vec4(mix(vec3(1.0), tint, m), 1.0);
      }`})}var ff=class{constructor(e,t){let n=this.N=320;this.pos=new Float32Array(n*3),this.col=new Float32Array(n*4),this.vel=new Float32Array(n*3),this.life=new Float32Array(n).fill(1),this.max=new Float32Array(n).fill(1);let i=new Pe;i.setAttribute("position",new we(this.pos,3).setUsage(pi)),i.setAttribute("color",new we(this.col,4).setUsage(pi)),this.points=new un(i,new di({size:.6,map:t,transparent:!0,depthWrite:!1,vertexColors:!0})),this.points.material.onBeforeCompile=s=>{s.vertexShader=s.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
mvPosition.xyz *= 0.96;
gl_Position = projectionMatrix * mvPosition;`)},this.points.frustumCulled=!1,e.add(this.points),this.next=0,this.alive=0}emit(e,t,n,i,s,a){let o=this.next;this.next=(o+1)%this.N,this.pos.set([e,t,n],o*3),this.vel.set([i,s,a],o*3),this.life[o]=0,this.max[o]=.45+Math.random()*.6,this.alive=2}update(e,t){if(!this.alive)return;let n=!1,i=.3+.6*t;for(let s=0;s<this.N;s++){let a=s*3;this.life[s]<this.max[s]&&(this.life[s]+=e,this.vel[a+1]-=9.8*e,this.pos[a]+=this.vel[a]*e,this.pos[a+1]+=this.vel[a+1]*e,this.pos[a+2]+=this.vel[a+2]*e,n=!0);let o=Math.max(0,1-this.life[s]/this.max[s]);this.col.set([i,i*1.02,i*1.04,.9*o*Math.sqrt(o)],s*4)}n||this.alive--,this.points.geometry.attributes.position.needsUpdate=!0,this.points.geometry.attributes.color.needsUpdate=!0}},Hl=class{constructor(e,t,n){this.road=t,this.terrain=n,this.items=new Map,this.group=new Fe,this.group.visible=!1,e.add(this.group),this.uTime={value:0},this.material=wT(this.uTime),this.wetMaterial=TT(),this.rockGeos=[0,1,2].map(i=>Yd(i,2)),this.rockMat=n.rockMat,this.tex=Vc(),this.splash=new ff(this.group,this.tex),this.last=null,this.inWater=!1,this._p={},this._v=new M,this._r=new M}setMap(e){this.group.visible=e==="mountain";for(let t of this.items.values())this._remove(t);this.items.clear()}_remove(e){this.group.remove(e.group),e.water.geometry.dispose(),e.wet.geometry.dispose(),e.rocks&&e.rocks.forEach(t=>t.dispose());for(let t of e.sprays)t.sprite.material.dispose()}_build(e){let t=MT(e,this.road,this.terrain),n=new Fe;n.position.copy(t.origin);let i=new Ue(t.wet,this.wetMaterial),s=new Ue(t.water,this.material);i.receiveShadow=s.receiveShadow=!0,i.renderOrder=1,s.renderOrder=2,n.add(i,s);let a=null;if(this.rockMat&&t.rocks.length){let c=this.rockGeos.map(()=>[]);t.rocks.forEach(m=>c[m.k].push(m));let l=new Ee,h=new qe,d=new Si,u=new M,f=new M,g=new $,v=new $("#968c80");a=c.filter(m=>m.length).map(m=>{let p=new Ft(this.rockGeos[m[0].k],this.rockMat,m.length);return m.forEach((x,b)=>{h.setFromEuler(d.set((x.c-.9)*.6,x.yaw,(x.c-.9)*.5)),p.setMatrixAt(b,l.compose(f.set(x.x,x.y,x.z),h,u.set(x.s,x.s*(.6+.35*x.c),x.s))),p.setColorAt(b,g.copy(v).multiplyScalar(x.c))}),p.castShadow=p.receiveShadow=!0,n.add(p),p})}let o=[];return t.sprays.forEach((c,l)=>{for(let h=0;h<3;h++){let d=new Nn(new Pn({map:this.tex,color:14674668,transparent:!0,opacity:0,depthWrite:!1}));d.position.set(c.x,c.y,c.z),n.add(d),o.push({sprite:d,sp:c,ph:h/3+l*.17})}}),this.group.add(n),{spec:e,group:n,water:s,wet:i,rocks:a,sprays:o,sheet:t.sheet}}update(e,t,n,i={}){if(!this.group.visible){i.audio?.setWater?.(0);return}let s=this.last===null?0:Math.min(.1,Math.max(0,e-this.last));this.last=e,this.uTime.value=e;let a=Math.max(0,Math.floor((t-420)/560)),o=Math.floor((t+950)/560);for(let[u,f]of this.items)(u<a||u>o)&&(this._remove(f),this.items.delete(u));for(let u=a;u<=o;u++)if(!this.items.has(u)){this.items.set(u,this._build(_T(u)));break}let c=null,l=1/0;for(let u of this.items.values()){for(let{sprite:g,sp:v,ph:m}of u.sprays){let p=(e*.32+m)%1;g.position.y=v.y+p*v.h*.8,g.scale.set(v.w*(.6+.7*p),v.h*(.5+.8*p),1),g.material.opacity=v.op*Math.sin(Math.PI*p),g.material.color.setRGB(.88,.92,.93).multiplyScalar(.2+.8*n)}let f=Math.abs(u.spec.s-t);f<l&&(l=f,c=u)}let h=(u,f,g,v,m,p)=>{let x=c;if(!x||g<.8||Math.abs(u-x.spec.s)>x.sheet+v.length/2)return!1;let b=this.road.at(u,this._p),y=Math.cos(b.th),_=-Math.sin(b.th),w=-Math.sin(b.th)*m,S=-Math.cos(b.th)*m,D=Math.min(1.6,Math.max(.35,g/15)),E=!1;for(let T of[-.33,.33]){let F=u+T*v.length*m;if(!(Math.abs(F-x.spec.s)>x.sheet*.95)){E=!0;for(let N of[-1,1]){let H=p*D*s+Math.random();for(let L=1;L<=H;L++){let A=b.x+y*(f+N*v.width*.42)+w*T*v.length,C=b.z+_*(f+N*v.width*.42)+S*T*v.length,U=N*(.8+2.2*Math.random())*D,O=g*(.1+.3*Math.random());this.splash.emit(A,b.y+.25,C,y*U+w*O,(1.2+2.6*Math.random())*D,_*U+S*O)}}}}return E},d=!1;i.dim&&i.v!==void 0&&(d=h(t,i.d||0,i.v,i.dim,1,40));for(let u of i.npcs||[])h(u.s,u.d,u.v,u.dim,u.direction??-1,30);if(this.splash.update(s,n),d&&!this.inWater&&i.audio?.splash?.(Math.min(1.3,Math.max(.25,i.v/20))),this.inWater=d,i.audio?.setWater){let u=0,f=0;if(c&&i.cam){let g=i.cam.position,v=c.group.position,m=v.x-g.x,p=v.z-g.z,x=Math.max(0,Math.hypot(m,p,v.y-g.y)-4);u=c.spec.flow*(.35+.65*c.spec.flow)/(1+(x/28)**2);let b=this._r.set(1,0,0).applyQuaternion(i.cam.quaternion);f=Math.max(-.8,Math.min(.8,(m*b.x+p*b.z)/(Math.hypot(m,p)||1)))}i.audio.setWater(u,f)}}};var Yn=420,Ol=new M(0,1,0),ST=`
  attribute float aA, aS, aR;
  uniform float uScale;
  varying float vA, vR;
  void main() {
    vec4 mv = viewMatrix * vec4(position, 1.0);
    vA = aA; vR = aR;
    gl_PointSize = clamp(aS * uScale / -mv.z, 1.0, 160.0);
    gl_Position = projectionMatrix * mv;
  }`,AT=`
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
  }`,kl=class{constructor(e,t){this.person=t,this.cig=new Fe;let n=new Ue(new sn(.0055,.0055,.062,8).translate(0,.0115,0),new Qe({color:15921128,roughness:.8})),i=new Ue(new sn(.0057,.0057,.023,8).translate(0,-.031,0),new Qe({color:13208124,roughness:.7}));this.ember=new Ue(new sn(.0056,.0056,.005,8).translate(0,.0425,0),new Jt({color:new $(1.6,.35,.08)})),this.cig.add(n,i,this.ember),this.cig.visible=!1,e.add(this.cig);let s=Zr(),a=(c,l)=>{let h=new Nn(new Pn({map:s,color:c,transparent:!0,opacity:0,depthWrite:!1,blending:$t,fog:!1}));return h.scale.setScalar(l),h.visible=!1,e.add(h),h};this.tipGlow=a(16734746,.07),this.flame=a(16757575,.09),this.pos=new Float32Array(Yn*3),this.vel=new Float32Array(Yn*3),this.age=new Float32Array(Yn).fill(99),this.life=new Float32Array(Yn).fill(1),this.s0=new Float32Array(Yn),this.s1=new Float32Array(Yn),this.a0=new Float32Array(Yn),this.drag=new Float32Array(Yn),this.aA=new Float32Array(Yn),this.aS=new Float32Array(Yn),this.aR=new Float32Array(Yn);let o=new Pe;o.setAttribute("position",new we(this.pos,3).setUsage(pi)),o.setAttribute("aA",new we(this.aA,1).setUsage(pi)),o.setAttribute("aS",new we(this.aS,1).setUsage(pi)),o.setAttribute("aR",new we(this.aR,1).setUsage(pi)),this.mat=new vt({uniforms:{uScale:{value:500},uColor:{value:new $(.7,.7,.72)}},vertexShader:ST,fragmentShader:AT,transparent:!0,depthWrite:!1,fog:!1}),this.points=new un(o,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=5,e.add(this.points),this.next=0,this.emitTip=0,this.emitMouth=0,this.t=0,this._h=new M,this._e=new M,this._d=new M,this._c=new M,this.tip=new M,this._q=new qe,this._dir=new M,this._r=new M,this._fv=[0,1,2,3].map(()=>new M),this.fg=null}_spawn(e,t,n,i,s,a,o){let c=this.next;this.next=(this.next+1)%Yn,this.pos.set([e.x,e.y,e.z],c*3),this.vel.set([t.x,t.y,t.z],c*3),this.age[c]=0,this.life[c]=n,this.s0[c]=i,this.s1[c]=s,this.a0[c]=a,this.drag[c]=o,this.aR[c]=Math.random()}update(e,t,n,i){this.t+=e;let s=this.person.arms?.r,a=t.on&&s&&this.person.root.visible;if(this.cig.visible=!!a,t.errOK=!1,a){if(!this.fg&&this.person.model){let g=["index_02_r","index_03_r","middle_02_r","middle_03_r"].map(v=>this.person.model.getObjectByName(v));this.fg=g.every(Boolean)?g:s.slice(1)}let u=this._c;if(this.fg.length===4){let[g,v,m,p]=this.fg.map((x,b)=>x.getWorldPosition(this._fv[b]));u.copy(g).add(m).multiplyScalar(.5*.65).addScaledVector(v.add(p),.5*.35)}else{let g=s[2].getWorldPosition(this._h),v=s[1].getWorldPosition(this._e);u.copy(g).addScaledVector(this._d.subVectors(g,v).normalize(),.1)}let f=this._dir.copy(t.F).multiplyScalar(.45).addScaledVector(t.R,.85).addScaledVector(Ol,-.06).normalize();this.cig.position.copy(u).addScaledVector(f,.0125),this.cig.quaternion.setFromUnitVectors(Ol,f),this.tip.copy(u).addScaledVector(f,.055),t.err.copy(t.mouth).addScaledVector(f,.03).sub(u),t.errOK=!0}let o=a&&t.lit;if(this.ember.visible=o,this.tipGlow.visible=o,o){let u=t.drag?1:.45+.08*Math.sin(this.t*7);this.ember.material.color.setRGB(1.6*(.6+u),.35*(.4+u),.08),this.tipGlow.position.copy(this.tip),this.tipGlow.material.opacity=.35+.65*u,this.tipGlow.scale.setScalar(.05+.05*u)}this.flame.visible=a&&t.flame>0,this.flame.visible&&(this.flame.position.copy(this.tip).addScaledVector(Ol,-.015),this.flame.material.opacity=.7+.3*Math.sin(this.t*40),this.flame.scale.setScalar(.08+.02*Math.sin(this.t*27)));let c=(n.windDir?.x||0)*(.12+.6*n.wind),l=(n.windDir?.y||0)*(.12+.6*n.wind),h=this._d;if(o)for(this.emitTip+=e*(t.drag?16:12);this.emitTip>=1;)this.emitTip-=1,h.set(c*.3+(Math.random()-.5)*.03,.16+Math.random()*.06,l*.3+(Math.random()-.5)*.03),this._spawn(this.tip,h,2.8+Math.random(),.022,.2,.3,.2);if(t.exhale&&a)for(this.emitMouth+=e*75;this.emitMouth>=1;)this.emitMouth-=1,h.copy(t.F).multiplyScalar(.3).addScaledVector(t.R,-.14).multiplyScalar(.9+Math.random()*.4).addScaledVector(Ol,-.06+Math.random()*.07).add(this._r.set((Math.random()-.5)*.08,(Math.random()-.5)*.04,(Math.random()-.5)*.08)),this._spawn(t.mouth,h,2.4+Math.random()*.8,.025,.24,.42,1.3);else this.emitMouth=0;let d=0;for(let u=0;u<Yn;u++){let f=this.age[u];if(f>=this.life[u]){this.aA[u]=0,this.aS[u]=0;continue}d++,this.age[u]=f+e;let g=Math.exp(-this.drag[u]*e),v=u*3;this.vel[v]=this.vel[v]*g+c*(1-g),this.vel[v+1]=this.vel[v+1]*g+.12*(1-g)+.02*e,this.vel[v+2]=this.vel[v+2]*g+l*(1-g),this.pos[v]+=this.vel[v]*e+Math.sin(this.t*1.7+u)*.004,this.pos[v+1]+=this.vel[v+1]*e,this.pos[v+2]+=this.vel[v+2]*e+Math.cos(this.t*1.3+u*1.7)*.004;let m=this.age[u]/this.life[u];this.aS[u]=this.s0[u]+(this.s1[u]-this.s0[u])*Math.sqrt(m),this.aA[u]=this.a0[u]*Math.min(1,m*8)*(1-m)*(1-m)}if(this.points.visible=d>0,d){let u=this.points.geometry;u.attributes.position.needsUpdate=!0,u.attributes.aA.needsUpdate=!0,u.attributes.aS.needsUpdate=!0,u.attributes.aR.needsUpdate=!0,this.mat.uniforms.uScale.value=i;let f=Math.min(1.1,.15+.75*(n.light??1));this.mat.uniforms.uColor.value.setRGB(.85*f,.85*f,.88*f)}}};$m();var ke=r=>document.getElementById(r),Is=(r,e,t)=>Math.min(t,Math.max(e,r)),RT=(r,e,t)=>{let n=Is((t-r)/(e-r),0,1);return n*n*(3-2*n)},ca=1/3.6,zl=1.5,Mo=[25*ca,50*ca,180*ca],go=Mo[0],CT=10*ca,PT=60*ca,Bl=Mo[2],as=ke("c"),qt=new ka({canvas:as,antialias:!1,powerPreference:"high-performance"}),po=1;qt.setPixelRatio(po);qt.shadowMap.enabled=!0;qt.shadowMap.type=Pu;qt.toneMapping=Nu;var Ot=new Ji,Ce=new Dt(60,1,.3,4e3);Ce.layers.enable(3);var St=new Gc,ri=new Zc(Ot,St,qt),dn=new il(Ot,St,qt),Oe=new al(qt,Ot,Ce),bo=new na(Ot,qt),la=new na(Ot,qt,"grass"),ha=new na(Ot,qt,"meadow"),be=new dl(Ot),ze=new fl(Ce);ze.groundAt=(r,e)=>Math.max(dn.heightAt(r,e),ir.group.visible?ir.level+1.2:-1/0);var Ag=new M,Rg=new M;ze.eyeAt=r=>!Lt.ready||Ve.active?!1:(Lt.head.getWorldPosition(r),Ag.set(0,0,-1).applyQuaternion(be.root.quaternion),Rg.set(0,1,0).applyQuaternion(be.root.quaternion),r.addScaledVector(Rg,.15).addScaledVector(Ag,-.04),!0);var tr=new xl,an=new _l(qt,Fi[Jd].msaa),ua=new Ml(qt),Lt=new so,Ve=new Tl(be,Lt);be.viewer=Ce;var Gg=new kl(Ot,Lt),ss=new $c(Ot),da=new Sl(qt),_f=new Al(qt),mo=new Cl,Mf=new Ll(Ot),Gl=new Wc(Ot),Vl=new jc(Ot,St,ri.roadMat),Xl=new cl,Cg=new M,Ps=new Dl(Ot,be),ir=new nl(Ot),Ef=new Hl(Ot,St,dn),jl=new Nl(Ot);be.tilt.add(Xl.group);be.tilt.add(da.group);function nr(){let r=window.innerWidth,e=window.innerHeight;qt.setSize(r,e,!1),Ce.aspect=r/e,Ce.updateProjectionMatrix(),an.resize(),ua.resize(),LT()}var Vg=0;function LT(){let r=window.innerWidth,e=window.innerHeight,t=Math.min(e*.135,Math.max(0,(e-r/2.39)/2));Vg=t/e,document.documentElement.style.setProperty("--bar",t.toFixed(1)+"px")}window.addEventListener("resize",nr);var Eo=matchMedia("(pointer: coarse)").matches&&Math.min(screen.width,screen.height)<600,IT=/iP(hone|od|ad)/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,vo=document.documentElement,wf=!!(vo.requestFullscreen||vo.webkitRequestFullscreen),fa=()=>!!(document.fullscreenElement||document.webkitFullscreenElement);function Wg(){if(!wf||fa())return;let r=vo.requestFullscreen?vo.requestFullscreen({navigationUI:"hide"}):vo.webkitRequestFullscreen();Promise.resolve(r).then(()=>screen.orientation?.lock?.("landscape")).catch(()=>{})}function DT(){if(fa()){try{screen.orientation?.unlock?.()}catch{}(document.exitFullscreen||document.webkitExitFullscreen).call(document)}}var yf=!1,qg=()=>{fa()?(yf=!0,DT()):(yf=!1,Wg())},Pg=r=>{!yf&&!fa()&&!st.full.contains(r.target)&&Wg()};Eo&&(window.addEventListener("pointerup",Pg,!0),window.addEventListener("touchend",Pg,!0));var Xg=()=>{nr(),setTimeout(nr,120),setTimeout(nr,450),wo()};["fullscreenchange","webkitfullscreenchange"].forEach(r=>document.addEventListener(r,()=>{Xg(),_t()}));window.addEventListener("orientationchange",Xg);window.visualViewport?.addEventListener("resize",nr);var jg=!1;function wo(){let r=Eo&&!jg&&window.innerHeight>window.innerWidth;ke("rotate").hidden=!r}ke("rotate-ok").addEventListener("click",()=>{jg=!0,wo()});ke("rotate").querySelector(".ios").hidden=!(IT&&!wf&&!navigator.standalone);window.addEventListener("resize",wo);wo();nr();var ne={home:zl,goal:0,manual:!1,s:150,d:zl,v:go,target:go,fast:!0,gear:2,fx:0,latVel:0,pitch:0,pos:new M,yaw:0},Tn=new Set,si={active:!1,id:-1,x:0,y:0},ce={car:0,character:0,map:Ii.findIndex(r=>r.id==="meadow"),cam:Wt.findIndex(r=>r.id==="orbit"),weather:Hn.findIndex(r=>r.id==="cloudy"),time:Xn.findIndex(r=>r.id==="night"),music:0,cine:!0,started:!1,mistCover:.9,mistDens:.4,fstop:B0,quality:FT()},aa=null,mf=!1,Lg=!0,Yg="chilldrive.tuning.v1",vi=null;try{if(vi=JSON.parse(localStorage.getItem(Yg)),vi?.camera)for(let[r,e]of Object.entries(vi.camera))ze.tune[r]&&Object.assign(ze.tune[r],e);if(vi?.weather)for(let[r,e]of Object.entries(vi.weather))Oe.weatherProfiles[r]&&Object.assign(Oe.weatherProfiles[r],e);vi?.environment&&Object.assign(Oe.tune,vi.environment),vi?.carLights&&Object.assign(be.headlights.tune,vi.carLights),vi?.streetLights&&Object.assign(ri.lampTune,vi.streetLights)}catch{}ze.setMode(ce.cam);ce.fstop=Di.indexOf(ze.aperture);var st={full:ke("b-full"),stop:ke("b-stop"),character:ke("b-character"),quality:ke("b-quality"),lens:ke("b-lens"),mist:ke("b-mist"),fast:ke("b-fast"),car:ke("b-car"),map:ke("b-map"),cam:ke("b-cam"),weather:ke("b-weather"),time:ke("b-time"),music:ke("b-music")},In=(r,e,t)=>{r.querySelector("b").textContent=e,r.querySelector("span").textContent=t,r.title=t};function _t(){In(st.car,"🚗",be.list[ce.car]?.name??"…"),In(st.character,"🧑",sr?"Đang tải…":ce.character===1?"Chisa":"Người lái"),st.character.disabled=sr||!Lt.ready||Ve.active||be.current?.def?.id!=="mustang",st.character.title=be.current?.def?.id==="mustang"?"Đổi nhân vật":"Chisa hiện hỗ trợ Mustang",In(st.map,Ii[ce.map].icon,Ii[ce.map].name),In(st.cam,"🎥",Wt[ce.cam].name),In(st.weather,Hn[ce.weather].icon,Hn[ce.weather].name),In(st.time,Xn[ce.time].icon,Xn[ce.time].name),In(st.music,ol[ce.music].icon,ol[ce.music].name),In(st.fast,"⚡",Math.round(Mo[ne.gear]*3.6)+" km/h"),st.fast.classList.toggle("on",ne.gear>0),In(st.mist,"🌫️","Sương "+Math.round(ce.mistDens*100)+"%"),st.mist.classList.toggle("on",!ke("mistpanel").hidden),In(st.lens,"📷",Jg()),In(st.quality,"⚙️",Fi[ce.quality].name),In(st.stop,Ve.state==="parked"?"▶️":Ve.state==="off"?"🅿️":"⏳",Ve.state==="parked"?"Đi tiếp":Ve.state==="off"?"Dừng xe":"…"),st.lens.classList.toggle("on",!ke("lenspanel").hidden),st.cam.classList.toggle("on",Pt==="camera"),st.weather.classList.toggle("on",Pt==="weather"),st.time.classList.toggle("on",Pt==="time"),st.full.hidden=!(wf&&Eo),In(st.full,fa()?"🗗":"⛶",fa()?"Thoát toàn màn hình":"Toàn màn hình")}function FT(){try{let r=Fi.findIndex(e=>e.id===localStorage.getItem("chilldrive.quality"));if(r>=0)return r}catch{}return Jd}function Kg(){let r=Fi[ce.quality];po=r.id==="low"?r.ratio:Math.min(r.ratio,Math.max(1,window.devicePixelRatio||1)),Eo&&r.id==="good"&&(po=Math.min(po,1.25)),qt.setPixelRatio(po),an.setSamples(r.msaa),nr();for(let e of[bo,la,ha])e.setView(r.view),e.setDensity(r.veg);dn.setView(r.view,Ce.position),Oe.setShadowSize(r.shadow),ua.enabled=r.refl,ss.setRadius(r.trees);try{localStorage.setItem("chilldrive.quality",r.id)}catch{}}var Zg=()=>{ce.quality=(ce.quality+1)%Fi.length,Kg(),_t()};function Jg(){return Math.round(ze.focal)+"mm f/"+ze.aperture}var sr=!1,gf=0;async function Tf(r){if(Ve.active)return;r=be.current?.def?.id==="mustang"?r%2:0;let e=++gf;sr=!0,_t();let t;try{if(t=await new so().load(r?"assets/models/chisa_wuthering_waves.glb":"assets/models/person.glb",{chisa:r===1}),e!==gf||r&&be.current?.def?.id!=="mustang"){t.dispose();return}Lt.replace(t),ce.character=r,Ve.place(be.dim),Ve.sit(),pa(an.sceneRT,Ce,Lt.root).catch(()=>{})}catch(n){t?.dispose(),console.warn("Không tải được nhân vật",n)}finally{e===gf&&(sr=!1,_t())}}var Qg=()=>{if(!sr&&Lt.ready&&be.current?.def?.id==="mustang")return Tf(ce.character+1)};async function Yl(r){if(!Ve.active){ce.car=(r+be.list.length)%be.list.length,In(st.car,"🚗","Đang tải…");try{if(!await be.select(ce.car))return}catch(e){if(console.error("Không tải được xe",be.list[ce.car].name,e),be.list.length>1)return be.list.splice(ce.car,1),Yl(ce.car)}be.current?.def?.id!=="mustang"&&(ce.character||sr)&&await Tf(0),Lt.ready&&!Ve.active&&(Ve.place(be.dim),Ve.sit()),da.place(be.dim,be.current.screen),Xl.place(be.current.screen),_f.setCar(be.current),$g(),_t()}}var Sf=()=>Yl(ce.car+1);function Af(){!Lt.ready||!ce.started||sr||(Ve.state==="off"&&(Cf(0),Ve.place(be.dim)),Ve.toggle(ne.v)&&_t())}var Ig=0;function pa(r,e,t=Ot){let n=[];t.traverse(a=>{a.material&&!a.layers.test(e.layers)&&(n.push(a,a.material),a.material=null)});let i=qt.getRenderTarget();qt.setRenderTarget(r);let s=qt.compileAsync(t,e,Ot);qt.setRenderTarget(i);for(let a=0;a<n.length;a+=2)n[a].material=n[a+1];return s}Oe.onCarEnv=r=>be.setEnvMap(r);Oe.carEnvRT&&be.setEnvMap(Oe.carEnvRT.texture);be.prepare=r=>pa(an.sceneRT,Ce,r);jl.onBuild=r=>{pa(an.sceneRT,Ce,r).catch(()=>{})};function $g(r=500){clearTimeout(Ig),Ig=setTimeout(()=>{pa(an.sceneRT,Ce).catch(e=>console.warn("warmup",e))},r)}var ev=()=>{let r=Ii[ce.map].id;Km(r);let e=r==="city";if(bt.halfWidth=e?Yt.hw:Jm,St.setShape(e),St.dirt=r==="forest",St.recomputeHeights(),r==="sea"){St.ensure(ne.s+12e4);let t=1/0;for(let n of St.pts)t=Math.min(t,n.y);wt.seaLevel=t-3}ir.setMap(r==="sea",wt.seaLevel),ri.setMap(r),dn.reset(),dn.setCar(ne.s),dn.prime(Ce.position.lengthSq()?Ce.position:ne.pos),bo.visible=r==="reed",la.visible=r==="forest",ha.visible=r==="meadow",jl.visible=r==="meadow",Gl.reset(),Gl.visible=r==="mountain",Vl.visible=e,Vl.prime(ne.s),Mf.ground.clear(),Ps.policy.city=e,ze.sideDist=e?13:null,ze.orbitR=e?10:null,ne.home=e?Yt.lanes[1]:zl,Ef.setMap(r),ze.sidePref=r==="mountain"?1:0,ss.setRadius(Fi[ce.quality].trees),ze.sideSign=0,$g()},Rf=()=>{ce.map=(ce.map+1)%Ii.length,ev(),_t()};function Kl(){ce.fstop=Math.max(0,Di.indexOf(ze.aperture)),Ds()}var Pt=null,rr=()=>{},tv=()=>{ce.cam=(ce.cam+1)%Wt.length,ze.setMode(ce.cam),Kl(),_t(),Pt==="camera"&&rr()},nv=()=>{ce.weather=(ce.weather+1)%Hn.length,Oe.setWeather(Hn[ce.weather].id),_t(),Pt==="weather"&&rr()},iv=()=>{ce.time=(ce.time+1)%Xn.length,Oe.setTime(Xn[ce.time].hour),Xn[ce.time].id==="night"&&NT(.6,.6),_t(),Pt==="time"&&rr()};function NT(r,e){ce.mistCover=r,ce.mistDens=e;for(let[t,n]of[["mist-cover","mistCover"],["mist-dens","mistDens"]])ke(t).value=Math.round(ce[n]*100),ke(t+"-v").textContent=ke(t).value}var UT=()=>document.body.classList.toggle("cine",ce.cine&&ce.started);function Cf(r){let e=ne.fast;ne.gear=r,ne.fast=r===2,ne.target=Mo[Math.min(r,1)],ne.fast!==e&&Ds()}var Pf=()=>{Ve.active||(Cf((ne.gear+1)%Mo.length),_t())},sv=()=>{ce.music=(ce.music+1)%ol.length,tr.setMode(ce.music),_t()};st.fast.onclick=Pf;var Lf=()=>{Pt=null,ke("tunepanel").hidden=!0,_t()},rv=()=>{Lf(),ke("mistpanel").hidden=!ke("mistpanel").hidden,ke("lenspanel").hidden=!0,_t()};st.mist.onclick=rv;var av=()=>{Lf(),ke("lenspanel").hidden=!ke("lenspanel").hidden,ke("mistpanel").hidden=!0,_t()};st.lens.onclick=av;st.quality.onclick=Zg;st.stop.onclick=Af;st.character.onclick=Qg;st.full.onclick=qg;var Zl=!1;ke("b-shot").onclick=()=>{Zl=!0};function HT(){Zl=!1,as.toBlob(async r=>{if(!r)return;let e="chill-drive-"+new Date().toISOString().slice(0,19).replace(/[T:]/g,"-")+".png",t=new File([r],e,{type:"image/png"});if(Eo&&navigator.canShare?.({files:[t]}))try{await navigator.share({files:[t]});return}catch{}let n=document.createElement("a");n.href=URL.createObjectURL(r),n.download=e,document.body.append(n),n.click(),n.remove(),setTimeout(()=>URL.revokeObjectURL(n.href),4e3)},"image/png")}var ma=ke("lens-focal"),yo=ke("lens-fstop");ma.min=pl;ma.max=ml;yo.max=Di.length-1;var Ds=()=>{ma.value=Math.round(ze.focal),ke("lens-focal-v").textContent=Math.round(ze.focal)+"mm",ce.fstop=Math.max(0,Di.indexOf(ze.aperture)),yo.value=ce.fstop,ke("lens-fstop-v").textContent="f/"+ze.aperture};ma.addEventListener("input",()=>{let r=ze.tune[Wt[ce.cam].id];r.focal=ze.focal=Number(ma.value),Ds(),_t()});yo.addEventListener("input",()=>{let r=ze.tune[Wt[ce.cam].id];ce.fstop=Number(yo.value),r.aperture=ze.aperture=Di[ce.fstop],Ds(),_t()});for(let r of[ma,yo])r.addEventListener("change",()=>r.blur());Ds();for(let[r,e]of[["mist-cover","mistCover"],["mist-dens","mistDens"]]){let t=ke(r);t.value=Math.round(ce[e]*100),ke(r+"-v").textContent=t.value,t.addEventListener("input",()=>{ce[e]=t.value/100,ke(r+"-v").textContent=t.value,_t()}),t.addEventListener("change",()=>t.blur())}var OT={chase:[["distance","Khoảng lùi (m)",1,20,.1],["height","Độ cao (m)",.2,8,.05],["carHeight","Theo chiều cao xe",0,1,.01],["lookAhead","Nhìn trước (m)",0,40,.5],["lookHeight","Cao điểm nhìn (m)",0,5,.05],["slopeLook","Bám dốc",0,25,.5],["speedBack","Lùi theo tốc độ",0,6,.1],["cineBack","Lùi cinematic",0,6,.1],["follow","Mượt vị trí",.2,20,.1],["lookFollow","Mượt điểm nhìn",.2,20,.1],["near","Cắt gần (m)",.02,2,.01]],low:[["distance","Khoảng lùi (m)",1,20,.1],["height","Độ cao (m)",.2,5,.05],["lookAhead","Nhìn trước (m)",0,40,.5],["lookHeight","Cao điểm nhìn (m)",0,5,.05],["slopeLook","Bám dốc",0,25,.5],["follow","Mượt vị trí",.2,20,.1],["lookFollow","Mượt điểm nhìn",.2,20,.1],["near","Cắt gần (m)",.02,2,.01]],side:[["distance","Khoảng ngang (m)",1,25,.1],["height","Độ cao (m)",.2,8,.05],["lookHeight","Tỉ lệ cao xe",0,1,.01],["follow","Mượt vị trí",.2,20,.1],["lookFollow","Mượt điểm nhìn",.2,20,.1],["near","Cắt gần (m)",.02,2,.01]],cockpit:[["eyeSide","Dịch ngang (m)",-.5,.5,.005],["eyeHeight","Dịch cao (m)",-.5,.5,.005],["eyeForward","Dịch trước (m)",-.5,.5,.005],["pitch","Góc chúc (rad)",-.2,.8,.005],["lookDistance","Tầm nhìn (m)",5,80,1],["follow","Mượt vị trí",.2,20,.1],["lookFollow","Mượt điểm nhìn",.2,20,.1],["near","Cắt gần (m)",.01,.5,.005]],orbit:[["radius","Bán kính (m)",1,30,.1],["height","Độ cao (m)",.2,12,.05],["heightWave","Nhấp nhô (m)",0,4,.05],["waveRate","Nhịp nhấp nhô",0,3,.05],["speed","Tốc độ quay",-.8,.8,.01],["lookHeight","Cao điểm nhìn (m)",0,5,.05],["follow","Mượt vị trí",.2,20,.1],["lookFollow","Mượt điểm nhìn",.2,20,.1],["near","Cắt gần (m)",.02,2,.01]],drone:[["distance","Khoảng lùi (m)",1,50,.5],["height","Độ cao (m)",2,50,.5],["lookAhead","Nhìn trước (m)",-10,40,.5],["lookHeight","Cao điểm nhìn (m)",0,8,.05],["follow","Mượt vị trí",.2,20,.1],["lookFollow","Mượt điểm nhìn",.2,20,.1],["near","Cắt gần (m)",.02,2,.01]]},kT=[["fog","Mật độ sương",0,.012,1e-4],["overcast","Độ âm u",0,1,.01],["clouds","Mây che phủ",0,1,.01],["sun","Cường độ nắng",0,2,.01],["rain","Lượng mưa",0,1,.01],["snow","Lượng tuyết",0,1,.01],["wet","Độ ướt đường",0,1,.01],["cover","Tuyết phủ đất",0,1,.01],["wind","Sức gió",0,1,.01],["dark","Độ tối",0,1,.01]],BT=[["exposure","Phơi sáng",.2,2.5,.01],["skyBrightness","Độ sáng trời",0,3,.01],["directLight","Ánh sáng chính",0,3,.01],["ambientLight","Ánh sáng phủ",0,3,.01],["sunGlow","Quầng mặt trời",0,3,.01],["sunDisc","Đĩa mặt trời",0,3,.01],["cloudBrightness","Độ sáng mây",0,3,.01],["rays","Tia sáng",0,3,.01]],zT=ke("tunepanel"),oa=ke("tune-mode"),To=ke("tune-fields"),Jl=()=>{try{localStorage.setItem(Yg,JSON.stringify({camera:ze.tune,weather:Oe.weatherProfiles,environment:Oe.tune,carLights:be.headlights.tune,streetLights:ri.lampTune}))}catch{}},er=r=>{let e=document.createElement("h4");e.textContent=r,To.append(e)},Oi=({label:r,min:e,max:t,step:n,get:i,set:s})=>{let a=document.createElement("label"),o=document.createElement("span"),c=document.createElement("input"),l=document.createElement("input");o.textContent=r,c.type="range",l.type="number";for(let d of[c,l])d.min=e,d.max=t,d.step=n,d.value=i();let h=d=>{d=Is(Number(d),Number(e),Number(t)),s(d),c.value=l.value=d,Jl()};c.oninput=()=>h(c.value),l.onchange=()=>{h(l.value),l.blur()},a.append(o,c,l),To.append(a)},vf=({label:r,get:e,set:t})=>{let n=document.createElement("label"),i=document.createElement("span"),s=document.createElement("input");i.textContent=r,s.type="color",s.value=e(),s.oninput=()=>{t(s.value),Jl()},n.append(i,s),To.append(n)},GT=({label:r,options:e,get:t,set:n})=>{let i=document.createElement("label"),s=document.createElement("span"),a=document.createElement("select");s.textContent=r,e.forEach((o,c)=>{let l=document.createElement("option");l.value=c,l.textContent=o,l.selected=c===t(),a.append(l)}),a.onchange=()=>{n(Number(a.value)),Jl()},i.append(s,a),To.append(i)},VT=()=>{let r=Wt[ce.cam].id,e=ze.tune[r];return OT[r].map(([t,n,i,s,a])=>({label:n,min:i,max:s,step:a,get:()=>e[t],set:o=>{e[t]=o,t==="near"&&(Ce.near=o,Ce.updateProjectionMatrix())}}))},Dg=()=>BT.map(([r,e,t,n,i])=>({label:e,min:t,max:n,step:i,get:()=>Oe.tune[r],set:s=>{Oe.tune[r]=s,Oe.envKey=""}}));rr=()=>{if(!Pt)return;if(To.replaceChildren(),oa.replaceChildren(),Pt==="carLight"||Pt==="streetLight"){oa.hidden=!0;let t=Pt==="carLight",n=t?be.headlights.tune:ri.lampTune;ke("tune-title").textContent=t?"Đèn xe người chơi":"Đèn đường",er(t?"Chùm sáng và quầng đèn":"Ánh sáng phủ mặt đường"),(t?[["intensity","Cường độ",0,300,1],["distance","Tầm chiếu (m)",10,250,1],["angle","Góc mở (rad)",.1,1.55,.01],["penumbra","Độ mềm viền",0,1,.01],["decay","Suy giảm",0,2,.01],["glowOpacity","Độ sáng quầng",0,2,.01],["glowSize","Kích thước quầng",.2,8,.05]]:[["intensity","Cường độ",0,500,1],["distance","Tầm phủ (m)",10,250,1],["angle","Góc mở (rad)",.1,1.55,.01],["penumbra","Độ mềm viền",0,1,.01],["decay","Suy giảm",0,2,.01],["glowOpacity","Độ sáng quầng",0,2,.01],["glowSize","Kích thước quầng",1,24,.1]]).map(([s,a,o,c,l])=>({label:a,min:o,max:c,step:l,get:()=>n[s],set:h=>{n[s]=h}})).forEach(Oi),vf({label:"Màu ánh sáng",get:()=>n.color,set:s=>{n.color=s}}),t&&vf({label:"Màu quầng",get:()=>n.glowColor,set:s=>{n.glowColor=s}});return}oa.hidden=!1;let r=Pt==="camera"?Wt:Pt==="weather"?Hn:Xn,e=ce[Pt==="camera"?"cam":Pt];if(r.forEach((t,n)=>{let i=document.createElement("option");i.value=n,i.textContent=t.name,i.selected=n===e,oa.append(i)}),ke("tune-title").textContent=Pt==="camera"?"Camera · "+Wt[ce.cam].name:Pt==="weather"?"Thời tiết · "+Hn[ce.weather].name:"Thời gian · "+Xn[ce.time].name,Pt==="camera"){let t=ze.tune[Wt[ce.cam].id];er("Vị trí và chuyển động"),VT().forEach(Oi),er("Ống kính"),Oi({label:"Tiêu cự (mm)",min:pl,max:ml,step:1,get:()=>t.focal,set:n=>{t.focal=ze.focal=n,Ds(),_t()}}),GT({label:"Khẩu độ",options:Di.map(n=>"f/"+n),get:()=>Math.max(0,Di.indexOf(t.aperture)),set:n=>{t.aperture=ze.aperture=Di[n],ce.fstop=n,Ds(),_t()}})}else if(Pt==="weather"){let t=Hn[ce.weather].id,n=Oe.weatherProfiles[t];er("Preset "+Hn[ce.weather].name),kT.map(([i,s,a,o,c])=>({label:s,min:a,max:o,step:c,get:()=>n[i],set:l=>{n[i]=l,Oe.w[i]=l}})).forEach(Oi),vf({label:"Màu khí quyển",get:()=>n.tint,set:i=>{n.tint=i,Oe.tint.set(i),Oe.envKey=""}}),er("Ánh sáng chung"),Dg().forEach(Oi)}else er("Chu kỳ ngày đêm"),Oi({label:"Giờ hiện tại",min:0,max:23.99,step:.05,get:()=>Oe.hour,set:t=>{Oe.hour=t,Oe.tween=null,Oe.envKey=""}}),Oi({label:"Tốc độ tự chạy",min:0,max:1,step:.005,get:()=>Oe.tune.autoSpeed,set:t=>{Oe.tune.autoSpeed=t}}),Oi({label:"Hướng mặt trời",min:-3.142,max:3.142,step:.01,get:()=>Oe.tune.sunAzimuth,set:t=>{Oe.tune.sunAzimuth=t,Oe.envKey=""}}),Oi({label:"Hướng mặt trăng",min:-3.142,max:3.142,step:.01,get:()=>Oe.tune.moonAzimuth,set:t=>{Oe.tune.moonAzimuth=t,Oe.envKey=""}}),er("Ánh sáng chung"),Dg().forEach(Oi)};var _o=r=>{Pt=r,ke("mistpanel").hidden=ke("lenspanel").hidden=!0,zT.hidden=!1,rr(),_t()};oa.onchange=()=>{let r=Number(oa.value);Pt==="camera"?(ce.cam=r,ze.setMode(r),Kl()):Pt==="weather"?(ce.weather=r,Oe.setWeather(Hn[r].id)):(ce.time=r,Oe.setTime(Xn[r].hour)),_t(),rr()};ke("tune-close").onclick=Lf;ke("tune-reset").onclick=()=>{Pt==="camera"?(ze.resetTune(Wt[ce.cam].id),Kl()):Pt==="weather"?(Oe.resetWeather(Hn[ce.weather].id),Oe.resetTune(),Oe.snapWeather(Hn[ce.weather].id)):Pt==="time"?(Oe.resetTune(),Oe.setTime(Xn[ce.time].hour)):Pt==="carLight"?Object.assign(be.headlights.tune,hl):Object.assign(ri.lampTune,hd),Jl(),_t(),rr()};st.car.onclick=Sf;st.map.onclick=Rf;st.cam.onclick=()=>_o("camera");st.weather.onclick=()=>_o("weather");st.time.onclick=()=>_o("time");st.music.onclick=sv;ke("b-info").onclick=()=>{let r=ke("credits");r.hidden=!r.hidden};window.addEventListener("keydown",r=>{if(r.repeat){Tn.add(r.code);return}switch(Tn.add(r.code),r.code){case"KeyC":tv();break;case"KeyH":document.body.classList.toggle("hidehud");break;case"KeyM":sv();break;case"KeyT":iv();break;case"KeyR":nv();break;case"KeyV":Sf();break;case"KeyN":Rf();break;case"KeyF":Pf();break;case"KeyG":rv();break;case"KeyL":av();break;case"KeyQ":Zg();break;case"KeyP":Af();break;case"KeyU":qg();break;case"KeyK":Zl=!0;break}(r.code.startsWith("Arrow")||r.code==="Space")&&r.preventDefault()});window.addEventListener("keyup",r=>Tn.delete(r.code));window.addEventListener("blur",()=>Tn.clear());var rs=new Map,Wl=new Map;function ql(r){Ve.active&&Ve.zoomBy(r)||ze.zoomBy(r)}var xo=0,ov=()=>{let[r,e]=[...rs.values()];return Math.hypot(r.x-e.x,r.y-e.y)};as.addEventListener("pointerdown",r=>{rs.set(r.pointerId,{x:r.clientX,y:r.clientY}),Wl.set(r.pointerId,{x:r.clientX,y:r.clientY,moved:!1}),as.setPointerCapture(r.pointerId),rs.size===1?(si.active=!0,si.id=r.pointerId,si.x=r.clientX,si.y=r.clientY,ze.look.hold=!0):rs.size===2&&(si.active=!1,xo=ov())});as.addEventListener("pointermove",r=>{let e=rs.get(r.pointerId);if(!e)return;e.x=r.clientX,e.y=r.clientY;let t=Wl.get(r.pointerId);if(t&&Math.hypot(r.clientX-t.x,r.clientY-t.y)>8&&(t.moved=!0),rs.size===2){let n=ov();xo>0&&n>0&&ql(xo/n),xo=n}else if(si.active&&r.pointerId===si.id){let n=r.clientX-si.x,i=r.clientY-si.y;ze.lookBy(n*4.7/window.innerWidth,i*2.2/window.innerHeight),Ve.active&&Math.abs(n)+Math.abs(i)>0&&Ve.noteCameraInput(),si.x=r.clientX,si.y=r.clientY}});var cv=r=>{let e=Wl.get(r.pointerId);if(e&&!e.moved&&r.type==="pointerup"){be.root.updateWorldMatrix(!0,!0);let t=as.getBoundingClientRect(),n=new M;be.headGlow.some(s=>{if(!s.visible)return!1;s.getWorldPosition(n).project(Ce);let a=t.left+(n.x+1)*t.width*.5,o=t.top+(1-n.y)*t.height*.5;return n.z>=-1&&n.z<=1&&Math.hypot(r.clientX-a,r.clientY-o)<=56})?_o("carLight"):Ve.active&&ri.hitLamp(Ce,r.clientX,r.clientY,t)&&_o("streetLight")}Wl.delete(r.pointerId),rs.delete(r.pointerId),rs.size<2&&(xo=0),rs.size===0&&(si.active=!1,ze.look.hold=!1)};as.addEventListener("pointerup",cv);as.addEventListener("pointercancel",cv);as.addEventListener("wheel",r=>{r.preventDefault();let e=r.deltaY*(r.deltaMode===1?33:r.deltaMode===2?400:1);ql(Math.exp(Is(e,-200,200)*.0012))},{passive:!1});var Fg=0,lv=()=>{document.body.classList.remove("idle"),clearTimeout(Fg),Fg=setTimeout(()=>document.body.classList.add("idle"),4500)};["pointermove","pointerdown","keydown","touchstart"].forEach(r=>window.addEventListener(r,lv,{passive:!0}));lv();var E2=new M,Ng=performance.now(),xf=0,Ls=0,xi={},WT=3.5,On={amt:0,range:0,samples:0,near:.1,far:1e3,focus:10,cocK:0,maxCoc:24},ho=new M;function qT(r){let e=Wt[ce.cam].id==="cockpit";ho.copy(ne.pos).y+=.6,Ve.active&&ho.copy(Ve.cam.focus);let t=e&&!Ve.active?.8:Math.max(.5,Ce.position.distanceTo(ho));On.focus+=(t-On.focus)*(On.amt>.01?1-Math.exp(-r*6):1);let n=ze.focalEff,i=ze.apertureS,s=On.focus*1e3;if(On.cocK=n*n/(i*Math.max(s-n,1))*(an.longSide/36)*WT,On.maxCoc=Math.max(6,an.longSide*.0125),Ve.active)On.range=Ve.cam.range;else if(e)On.range=0;else{let a=Ce.position.x-ho.x,o=Ce.position.z-ho.z,c=Math.hypot(a,o)||1,l=Math.sin(ne.yaw),h=Math.cos(ne.yaw);On.range=Math.abs((-l*a-h*o)/c)*be.dim.length*.5+Math.abs((h*a-l*o)/c)*be.dim.width*.5+.3}return On.near=Ce.near,On.far=Ce.far,On.amt=Ls,On.samples=Fi[ce.quality].dof,On}var XT=new M;function jT(r,e){let t=ze.look,n=XT.copy(r).sub(e);if(Math.abs(t.yaw)>1e-4||Math.abs(t.pitch)>1e-4){let s=Math.cos(t.yaw),a=Math.sin(t.yaw);n.set(n.x*s+n.z*a,n.y,-n.x*a+n.z*s);let o=Math.hypot(n.x,n.z),c=n.length(),l=Is(Math.atan2(n.y,o)+t.pitch,.03,1.35),h=c*Math.cos(l)/Math.max(o,.001);n.set(n.x*h,c*Math.sin(l),n.z*h)}Ce.position.copy(e).add(n);let i=Math.max(dn.heightAt(Ce.position.x,Ce.position.z)+.25,ir.group.visible?ir.level+1.2:-1/0);Ce.position.y<i&&(Ce.position.y=i)}var ra=new M;function YT(){let r=be.current?.steer;if(!r||!ze.eyeAt||!ze.eyeAt(ra))return .2;be.tilt.worldToLocal(ra);let[,e,t]=r.n,n=1-e*e,i=-e*t,s=Math.hypot(n,i)||1,a=r.r*.65,o=r.c[1]-n/s*a,c=r.c[2]-i/s*a,l=Math.atan2(ra.y-o,ra.z-c),h=Math.atan(Math.tan(Nt.degToRad(Ce.fov)/2)*(1-2*Vg*Ls)),d=da.group.position,u=Math.atan2(d.y+da.size[1]/2+.012-ra.y,ra.z-d.z),f=l-h+.01,g=h-u-.015;return Is(f<=g?f:g,-.1,.6)}var bf=new M,is=new M,Cs=new M,uo=new M,Ug=new M,Hg=new M,Og=.08,kg=new M,Bg=new M,zg=new M;function KT(r){if(!r)return;Lt.recline(r.recline||0);let e=be.tilt.matrixWorld,[t,n,i]=r.foot,s=r.hip[0];for(let[a,o]of[["l",t],["r",2*s-t]])kg.set(o,n,i).applyMatrix4(e),Bg.set(0,1,-.6).transformDirection(e),zg.set(0,.45,-1).transformDirection(e),Lt.reachLeg(a,kg,Bg,zg)}function ZT(r){be.root.updateMatrixWorld();let e=be.tilt.matrixWorld;bf.fromArray(r.c).applyMatrix4(e),is.fromArray(r.n).transformDirection(e),Cs.set(1,0,0).transformDirection(e),Cs.addScaledVector(is,-Cs.dot(is)).normalize(),uo.crossVectors(is,Cs);for(let[t,n]of[["r",-Og],["l",Math.PI+Og]]){let i=n+(be.steerAngle||0),s=Math.cos(i),a=Math.sin(i),o=r.r+(r.grip?.radial??.02),c=r.grip?.depth??.065;Ug.copy(bf).addScaledVector(Cs,s*o).addScaledVector(uo,a*o).addScaledVector(is,c);let l=Hg.copy(Cs).multiplyScalar(t==="r"?.25:-.25).addScaledVector(uo,-1).addScaledVector(is,.2);Lt.reach(t,Ug,l);let h=r.grip?.align?Hg.copy(uo).multiplyScalar(s).addScaledVector(Cs,-a).multiplyScalar(t==="r"?1:-1):null;Lt.faceGrip(t,is,h);let d=t==="r"?1:-1,u=r.r-.01;Lt.looseGrip(t,.15,(f,g)=>{let v=i+d*f/u;return g.copy(bf).addScaledVector(Cs,Math.cos(v)*u).addScaledVector(uo,Math.sin(v)*u).addScaledVector(is,.016)},is)}}var fo=new M,JT=new M;function QT(){let r=Oe.state,e=an.rays;e.near=Ce.near,e.far=Ce.far;let t=r.rays*Nt.smoothstep(Ce.getWorldDirection(JT).dot(r.rayDir),.05,.5);t>.002&&(fo.copy(r.rayDir).multiplyScalar(1e3).add(Ce.position).project(Ce),t*=1-Nt.smoothstep(Math.max(Math.abs(fo.x),Math.abs(fo.y)),1,1.9),e.uv.set(fo.x*.5+.5,fo.y*.5+.5)),e.color.copy(r.rayCol).multiplyScalar(Math.max(t,0)*1.2)}function hv(r){let e=Is((r-Ng)/1e3,0,.05);Ng=r,aa!==null&&(aa+=e,aa>=(Lg?.5:3)&&(aa=null,Cf(0),mf=!0,Lg&&(ne.v=go)));let t=!ce.started||aa!==null,n=Tn.has("ArrowLeft")||Tn.has("KeyA"),s=(Tn.has("ArrowRight")||Tn.has("KeyD")?1:0)-(n?1:0);(Tn.has("ArrowUp")||Tn.has("KeyW"))&&(ne.target+=2.5*e),(Tn.has("ArrowDown")||Tn.has("KeyS"))&&(ne.target-=2.5*e),(Tn.has("Equal")||Tn.has("NumpadAdd"))&&ql(Math.exp(-1.2*e)),(Tn.has("Minus")||Tn.has("NumpadSubtract"))&&ql(Math.exp(1.2*e)),ne.target=Is(ne.target,CT,PT),ne.goal=ne.fast?Bl:ne.target;let a=t?Bl:Math.min(ne.goal,Ps.ctrl.maxV);if(t?ne.v=Bl:Ve.active?ne.v=Ve.speed(ne.v,e):ne.v+=Is(a-ne.v,-8*e,6*e),mf&&ne.v<=go+.01&&(mf=!1,ne.v=go,ce.cam=Wt.findIndex(y=>y.id==="side"),ze.setMode(ce.cam),Kl(),_t()),ne.s+=ne.v*e,ne.fx+=(RT(55*ca,Bl,ne.v)-ne.fx)*(1-Math.exp(-e*4)),s!==0)ne.manual=!0;else if(ne.manual){ne.manual=!1;let y=Ii[ce.map].id==="city"?Yt.lanes:[zl];ne.home=Math.sign(ne.d||1)*y.reduce((_,w)=>Math.abs(Math.abs(ne.d)-w)<Math.abs(Math.abs(ne.d)-_)?w:_,y[0])}let o=Ps.ctrl.lane??ne.home,c=Ve.active?0:s!==0?s*(2.2+ne.v*.06):(o-ne.d)*.8*Math.min(1,ne.v/3);ne.latVel+=(c-ne.latVel)*(1-Math.exp(-e*5)),ne.d+=ne.latVel*e;let l=bt.halfWidth-.9;Math.abs(ne.d)>l&&(ne.d=Math.sign(ne.d)*l,ne.latVel=0),St.ensure(ne.s+8e3),St.at(ne.s,xi),ne.pos.set(xi.x+Math.cos(xi.th)*ne.d,xi.y,xi.z-Math.sin(xi.th)*ne.d);let h=St.at(ne.s-2.5,{}).y,d=St.at(ne.s+2.5,{}).y;if(ne.pitch+=(Math.atan2(d-h,5)-ne.pitch)*(1-Math.exp(-e*6)),ne.yaw=xi.th-Math.atan2(ne.latVel,Math.max(ne.v,4))*.9,Ls+=((ce.cine&&ce.started?1:0)-Ls)*(1-Math.exp(-e*2.5)),ze.cine=Ls,be.update(e,{pos:ne.pos,yaw:ne.yaw,pitch:ne.pitch,speed:ne.v,latVel:ne.latVel,curvature:St.curvature(ne.s+Math.min(12,ne.v*.4)),rough:St.dirtAt(ne.s)}),Lt.ready){Lt.root.visible=!0;let y=Wt[ce.cam].id==="cockpit"&&!Ve.active;Lt.head.scale.setScalar(y?.001:1),be.cabinLevel=y?(.35+.45*Oe.state.dayF)*(1+Oe.state.dark):0,Lt.update(e);let _=be.current?.steer,w=Ve.state==="off"||Ve.state==="stopping";Lt.footShade.value=w?1:0,w&&(KT(be.dim.seat),_&&ZT(_))}if(Ve.active){let y=Ve.state;Ve.update(e,be.root,ne.v);let _=Ve.cam;jT(_.pos,_.look),Ce.lookAt(_.look);let w=ze.fovFor(_.focal),S=Ve.closeK>.01?.06:.3;(Math.abs(Ce.fov-w)>.01||Ce.near!==S)&&(Ce.fov=w,Ce.near=S,Ce.updateProjectionMatrix()),Ve.state==="off"&&(ze.setMode(ce.cam),ze.relP.copy(Ce.position).sub(ne.pos),ze.relL.copy(_.look).sub(ne.pos),ze.fov=Ce.fov,ze.look.yaw=ze.look.pitch=0),Ve.state!==y&&_t()}else ze.cockpitPitch=YT(),ze.update(e,{pos:ne.pos,yaw:ne.yaw,pitch:ne.pitch,speed:ne.v,dim:be.dim,fx:ne.fx,side:ne.d>=0?-1:1});Oe.precip.setCar(be.tilt,be.dim),Oe.update(e,ne.pos);let u=Oe.state;ri.update(ne.s),ri.apply(u),ri.updateLights(Ce.position),ir.update(r/1e3,Ce.position,St,ne.s),Ef.update(r/1e3,ne.s,u.light,{d:ne.d,v:ne.v,dim:be.dim,npcs:Ps.active,cam:Ce,audio:tr}),bo.visible&&bo.update(r/1e3,Ce.position,St,ne.s,u),la.group.visible=Ii[ce.map].id==="forest"&&u.cover<.5,la.visible&&la.update(r/1e3,Ce.position,St,ne.s,u),ha.group.visible=Ii[ce.map].id==="meadow"&&u.cover<.5,ha.visible&&ha.update(r/1e3,Ce.position,St,ne.s,u),jl.update(e,ne.s,St,dn),dn.setCar(ne.s),dn.update(Ce.position),ss.update(Ce.position,dn),dn.apply(u);let f=Nt.smoothstep,g=(Ii[ce.map].id==="city"?0:1)*f(u.night,.35,.9)*(1-Math.min(1,u.rain*2))*(1-u.snow)*(1-u.cover)*(1-f(u.wind,.6,.9));if(Mf.update(r/1e3,ne.s,St,dn,g,an.size.y/(2*Math.tan(Nt.degToRad(Ce.fov)/2)),Ot.fog.density),Xl.update(e,ne.v*3.6,Oe.clock),Gg.update(e,Ve.smoking,u,an.size.y/(2*Math.tan(Nt.degToRad(Ce.fov)/2))),ce.started&&be.current){let y=[{id:"player",s:ne.s,d:ne.d,speed:ne.v,direction:1,width:be.dim.width,length:be.dim.length}];Lt.ready&&["exit","parked","enter"].includes(Ve.state)&&(Lt.root.getWorldPosition(Cg),y.push({id:"person",...ug(Cg,St,ne.s),width:.8,length:.8,speed:0,direction:0})),Ps.playerHome=ne.home,Ps.playerGoal=Ve.active?0:ne.goal,Ps.update(e,ne.s,ne.d,St,u.lamps,be.current.def.id,y,tr)}Vl.update(ne.s,u.lamps),Gl.update(ne.s,St,dn,u.lamps,an.size.y/(2*Math.tan(Nt.degToRad(Ce.fov)/2)),Ot.fog.density),be.setLights(u.lamps),tr.setAmbient({speed:ne.v,rain:u.rain,snow:u.snow,wind:u.wind,dark:u.dark,fx:ne.fx,inCar:Wt[ce.cam].id==="cockpit"&&!Ve.active});let v=1-u.dark;be.calm=u.dark;let m=.016*ne.fx*ne.fx*v;if(m>0){let y=r/1e3;Ce.position.x+=(Math.sin(y*11.3)+Math.sin(y*17.9)*.6)*m,Ce.position.y+=(Math.sin(y*13.7)+Math.sin(y*23.1)*.5)*m*.7}let p=Ls*v;if(p>.01){let y=r/1e3;Ce.position.x+=Math.sin(y*.37)*.014*p,Ce.position.y+=Math.sin(y*.53)*.012*p,Ce.rotateZ((Math.sin(y*.31)*.0045+Math.sin(y*.83)*.002)*p)}xf-=e,xf<=0&&(ke("speed").textContent=Math.round(ne.v*3.6),ke("clock").textContent=Oe.clock,st.lens.title!==Jg()&&(_t(),Ds()),wo(),xf=.25),Ci.uMistD.value=.05*ce.mistDens*ce.mistDens,Ci.uMistH.value=3+70*Math.pow(ce.mistCover,1.4),Ci.uMistCover.value=ce.mistCover,Ci.uMistBase.value=ne.pos.y-1.5,Ci.uMistT.value=r/1e3,Ci.uMistWind.value.copy(u.windDir).multiplyScalar(.0012+.006*u.wind),Ci.uMistColor.value.copy(u.mistColor),Oe.mistCover=ce.mistCover,Oe.mistDens=ce.mistDens,u.wet>.001?ua.render(Ot,Ce,ne.pos.y+.05):ua.active=!1,ri.setReflection(ua,r/1e3);let x=Wt[ce.cam].id==="cockpit"&&!Ve.active;da.group.visible=x,x&&da.render(Ot,be.tilt),_f.render(Ot,Ce,x),mo.update(e,Ve.active?0:u.rain,ne.v);let b=x?mo.wet:0;be.shield&&be.setWiper(mo.angle(be.shield.sweep)),an.begin(),qt.render(Ot,Ce),QT(),mo.apply(an.final.uniforms,b>.01?b:0,Ce,be.tilt,be.shield,r/1e3,be.rearShield),an.renderGlassMask(Ce,be.tilt,be.rearShield),an.render(r/1e3,Ls,ne.fx,qT(e)),Zl&&HT(),requestAnimationFrame(hv)}async function $T(){Kg(),Oe.setTime(Xn[ce.time].hour),Oe.hour=Xn[ce.time].hour,Oe.snapWeather(Hn[ce.weather].id),Oe.onThunder=(t,n)=>tr.thunder(t,n),St.ensure(ne.s+8e3),St.at(ne.s,xi),ne.pos.set(xi.x,xi.y,xi.z),ev(),await be.probe(),_t(),requestAnimationFrame(hv);let r=ke("start");ke("hint").textContent="Chạm hoặc nhấn phím bất kỳ để bắt đầu",be.onProgress=t=>In(st.car,"🚗","Đang tải… "+Math.round(t*100)+"%"),ss.load("assets/models/nature.glb").then(()=>{ss.rockGeos.length&&(dn.rockGeos=ss.rockGeos),dn.reset(),dn.prime(Ce.position.lengthSq()?Ce.position:ne.pos),ss.setRadius(Fi[ce.quality].trees),pa(an.sceneRT,Ce,ss.group).catch(()=>{})}).catch(t=>console.warn("Không tải được cây / đá chi tiết",t)),Yl(0).then(()=>Lt.load("assets/models/person.glb")).then(()=>{be.tilt.add(Lt.root),be.current&&(Ve.place(be.dim),Ve.sit()),pa(an.sceneRT,Ce,Lt.root).catch(()=>{}),_t()}).catch(t=>console.warn("Không tải được người lái",t));let e=t=>{r.classList.add("gone"),ce.started=!0,UT(),aa=0,tr.start().catch(n=>console.warn("Audio:",n)),window.removeEventListener("keydown",e),r.removeEventListener("pointerdown",e)};r.addEventListener("pointerdown",e),window.addEventListener("keydown",e)}$T();window.__app={city:Vl,ocean:ir,waterfalls:Ef,wing:_f,audio:tr,smoke:Gg,cows:jl,traffic:Ps,dash:Xl,town:Gl,fireflies:Mf,wipers:mo,meadow:ha,nature:ss,person:Lt,stop:Ve,toggleStop:()=>Af(),refl:ua,MIST:Ci,forceCine:r=>{Ls=r},post:an,toggleFast:Pf,env:Oe,cars:be,rig:ze,drive:ne,state:ce,nextCharacter:Qg,chooseCharacter:Tf,nextCar:Sf,nextMap:Rf,nextCam:tv,nextWeather:nv,nextTime:iv,chooseCar:Yl,renderer:qt,scene:Ot,camera:Ce,scenery:ri,terrain:dn,reeds:bo,grass:la,road:St};
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
