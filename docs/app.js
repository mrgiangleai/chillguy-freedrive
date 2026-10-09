var vx=0,Pp=1,xx=2;var v0=1,pf=2,is=3,Ni=0,_n=1,me=2;var Rs=0,Qr=1,Xe=2,Lp=3,Ip=4,mf=5,ss=100,bx=101,yx=102,Dp=103,Fp=104,gf=200,_x=201,vf=202,Mx=203,Mu=204,Eu=205,Ex=206,wx=207,Tx=208,Sx=209,Ax=210,Rx=211,Cx=212,Px=213,Lx=214,Ix=0,Dx=1,Fx=2,Nc=3,Hx=4,Nx=5,kx=6,Ux=7,xf=0,Ox=1,zx=2,Cs=0,Bx=1,Gx=2,Vx=3,bf=4,Wx=5,qx=6,Hp="attached",Xx="detached",x0=300,ea=301,na=302,wu=303,Tu=304,fl=306,zn=1e3,Qn=1001,lo=1002,tn=1003,kc=1004;var no=1005;var an=1006,yf=1007;var ki=1008;var Hi=1009,jx=1010,Yx=1011,_f=1012,b0=1013,Fi=1014,rs=1015,Vn=1016,y0=1017,_0=1018,or=1020,Kx=1021,li=1023,Jx=1024,Zx=1025,cr=1026,ia=1027,Qx=1028,M0=1029,$x=1030,E0=1031,w0=1033,Oh=33776,zh=33777,Bh=33778,Gh=33779,Np=35840,kp=35841,Up=35842,Op=35843,T0=36196,zp=37492,Bp=37496,Gp=37808,Vp=37809,Wp=37810,qp=37811,Xp=37812,jp=37813,Yp=37814,Kp=37815,Jp=37816,Zp=37817,Qp=37818,$p=37819,tm=37820,em=37821,Vh=36492,nm=36494,im=36495,tb=36283,sm=36284,rm=36285,am=36286,Mf=2200,Ef=2201,eb=2202,sa=2300,hr=2301,Wh=2302,Yr=2400,Kr=2401,Uc=2402,wf=2500,nb=2501,S0=0,dl=1,Mo=2,A0=3e3,lr=3001,ib=3200,Tf=3201,Sf=0,sb=1,Rn="",ue="srgb",hn="srgb-linear",Af="display-p3",pl="display-p3-linear",Oc="linear",Ue="srgb",zc="rec709",Bc="p3";var Ar=7680;var om=519,rb=512,ab=513,ob=514,R0=515,cb=516,lb=517,hb=518,ub=519,Su=35044,Bn=35048;var cm="300 es",Au=1035,as=2e3,Gc=2001,os=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,t);t.target=null}}},Sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],lm=1234567,io=Math.PI/180,ra=180/Math.PI;function Ei(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Sn[r&255]+Sn[r>>8&255]+Sn[r>>16&255]+Sn[r>>24&255]+"-"+Sn[t&255]+Sn[t>>8&255]+"-"+Sn[t>>16&15|64]+Sn[t>>24&255]+"-"+Sn[e&63|128]+Sn[e>>8&255]+"-"+Sn[e>>16&255]+Sn[e>>24&255]+Sn[n&255]+Sn[n>>8&255]+Sn[n>>16&255]+Sn[n>>24&255]).toLowerCase()}function ln(r,t,e){return Math.max(t,Math.min(e,r))}function Rf(r,t){return(r%t+t)%t}function fb(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function db(r,t,e){return r!==t?(e-r)/(t-r):0}function so(r,t,e){return(1-e)*r+e*t}function pb(r,t,e,n){return so(r,t,1-Math.exp(-e*n))}function mb(r,t=1){return t-Math.abs(Rf(r,t*2)-t)}function gb(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function vb(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function xb(r,t){return r+Math.floor(Math.random()*(t-r+1))}function bb(r,t){return r+Math.random()*(t-r)}function yb(r){return r*(.5-Math.random())}function _b(r){r!==void 0&&(lm=r);let t=lm+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Mb(r){return r*io}function Eb(r){return r*ra}function Ru(r){return(r&r-1)===0&&r!==0}function wb(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Vc(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Tb(r,t,e,n,i){let s=Math.cos,a=Math.sin,o=s(e/2),c=a(e/2),l=s((t+n)/2),h=a((t+n)/2),f=s((t-n)/2),u=a((t-n)/2),d=s((n-t)/2),g=a((n-t)/2);switch(i){case"XYX":r.set(o*h,c*f,c*u,o*l);break;case"YZY":r.set(c*u,o*h,c*f,o*l);break;case"ZXZ":r.set(c*f,c*u,o*h,o*l);break;case"XZX":r.set(o*h,c*g,c*d,o*l);break;case"YXY":r.set(c*d,o*h,c*g,o*l);break;case"ZYZ":r.set(c*g,c*d,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Di(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Re(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var Ne={DEG2RAD:io,RAD2DEG:ra,generateUUID:Ei,clamp:ln,euclideanModulo:Rf,mapLinear:fb,inverseLerp:db,lerp:so,damp:pb,pingpong:mb,smoothstep:gb,smootherstep:vb,randInt:xb,randFloat:bb,randFloatSpread:yb,seededRandom:_b,degToRad:Mb,radToDeg:Eb,isPowerOfTwo:Ru,ceilPowerOfTwo:wb,floorPowerOfTwo:Vc,setQuaternionFromProperEuler:Tb,normalize:Re,denormalize:Di},at=class r{constructor(t=0,e=0){r.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ln(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*i+t.x,this.y=s*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},le=class r{constructor(t,e,n,i,s,a,o,c,l){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,c,l)}set(t,e,n,i,s,a,o,c,l){let h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=s,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],f=n[7],u=n[2],d=n[5],g=n[8],v=i[0],m=i[3],p=i[6],x=i[1],b=i[4],_=i[7],M=i[2],y=i[5],w=i[8];return s[0]=a*v+o*x+c*M,s[3]=a*m+o*b+c*y,s[6]=a*p+o*_+c*w,s[1]=l*v+h*x+f*M,s[4]=l*m+h*b+f*y,s[7]=l*p+h*_+f*w,s[2]=u*v+d*x+g*M,s[5]=u*m+d*b+g*y,s[8]=u*p+d*_+g*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*s*h+n*o*c+i*s*l-i*a*c}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],f=h*a-o*l,u=o*c-h*s,d=l*s-a*c,g=e*f+n*u+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return t[0]=f*v,t[1]=(i*l-h*n)*v,t[2]=(o*n-i*a)*v,t[3]=u*v,t[4]=(h*e-i*c)*v,t[5]=(i*s-o*e)*v,t[6]=d*v,t[7]=(n*c-l*e)*v,t[8]=(a*e-n*s)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,a,o){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-i*l,i*c,-i*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(qh.makeScale(t,e)),this}rotate(t){return this.premultiply(qh.makeRotation(-t)),this}translate(t,e){return this.premultiply(qh.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},qh=new le;function C0(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function ho(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Sb(){let r=ho("canvas");return r.style.display="block",r}var hm={};function ro(r){r in hm||(hm[r]=!0,console.warn(r))}var um=new le().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),fm=new le().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),sc={[hn]:{transfer:Oc,primaries:zc,toReference:r=>r,fromReference:r=>r},[ue]:{transfer:Ue,primaries:zc,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[pl]:{transfer:Oc,primaries:Bc,toReference:r=>r.applyMatrix3(fm),fromReference:r=>r.applyMatrix3(um)},[Af]:{transfer:Ue,primaries:Bc,toReference:r=>r.convertSRGBToLinear().applyMatrix3(fm),fromReference:r=>r.applyMatrix3(um).convertLinearToSRGB()}},Ab=new Set([hn,pl]),ge={enabled:!0,_workingColorSpace:hn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Ab.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;let n=sc[t].toReference,i=sc[e].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return sc[r].primaries},getTransfer:function(r){return r===Rn?Oc:sc[r].transfer}};function $r(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Xh(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var Rr,Wc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Rr===void 0&&(Rr=ho("canvas")),Rr.width=t.width,Rr.height=t.height;let n=Rr.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Rr}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ho("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=$r(s[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor($r(e[n]/255)*255):e[n]=$r(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Rb=0,qc=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Rb++}),this.uuid=Ei(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(jh(i[a].image)):s.push(jh(i[a]))}else s=jh(i);n.url=s}return e||(t.images[this.uuid]=n),n}};function jh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Wc.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Cb=0,Mn=class r extends os{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,n=Qn,i=Qn,s=an,a=ki,o=li,c=Hi,l=r.DEFAULT_ANISOTROPY,h=Rn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cb++}),this.uuid=Ei(),this.name="",this.source=new qc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(ro("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===lr?ue:Rn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==x0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case zn:t.x=t.x-Math.floor(t.x);break;case Qn:t.x=t.x<0?0:1;break;case lo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case zn:t.y=t.y-Math.floor(t.y);break;case Qn:t.y=t.y<0?0:1;break;case lo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ro("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ue?lr:A0}set encoding(t){ro("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===lr?ue:Rn}};Mn.DEFAULT_IMAGE=null;Mn.DEFAULT_MAPPING=x0;Mn.DEFAULT_ANISOTROPY=1;var he=class r{constructor(t=0,e=0,n=0,i=1){r.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,c=t.elements,l=c[0],h=c[4],f=c[8],u=c[1],d=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(f-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let b=(l+1)/2,_=(d+1)/2,M=(p+1)/2,y=(h+u)/4,w=(f+v)/4,L=(g+m)/4;return b>_&&b>M?b<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(b),i=y/n,s=w/n):_>M?_<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(_),n=y/i,s=L/i):M<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(M),n=w/s,i=L/s),this.set(n,i,s,e),this}let x=Math.sqrt((m-g)*(m-g)+(f-v)*(f-v)+(u-h)*(u-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(f-v)/x,this.z=(u-h)/x,this.w=Math.acos((l+d+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Cu=class extends os{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new he(0,0,t,e),this.scissorTest=!1,this.viewport=new he(0,0,t,e);let i={width:t,height:e,depth:1};n.encoding!==void 0&&(ro("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===lr?ue:Rn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Mn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new qc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},xn=class extends Cu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Xc=class extends Mn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=tn,this.minFilter=tn,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Pu=class extends Mn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=tn,this.minFilter=tn,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Vt=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],f=n[i+3],u=s[a+0],d=s[a+1],g=s[a+2],v=s[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f;return}if(o===1){t[e+0]=u,t[e+1]=d,t[e+2]=g,t[e+3]=v;return}if(f!==v||c!==u||l!==d||h!==g){let m=1-o,p=c*u+l*d+h*g+f*v,x=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){let M=Math.sqrt(b),y=Math.atan2(M,p*x);m=Math.sin(m*y)/M,o=Math.sin(o*y)/M}let _=o*x;if(c=c*m+u*_,l=l*m+d*_,h=h*m+g*_,f=f*m+v*_,m===1-o){let M=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=M,l*=M,h*=M,f*=M}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,i,s,a){let o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],f=s[a],u=s[a+1],d=s[a+2],g=s[a+3];return t[e]=o*g+h*f+c*d-l*u,t[e+1]=c*g+h*u+l*f-o*d,t[e+2]=l*g+h*d+o*u-c*f,t[e+3]=h*g-o*f-c*u-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,s=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),f=o(s/2),u=c(n/2),d=c(i/2),g=c(s/2);switch(a){case"XYZ":this._x=u*h*f+l*d*g,this._y=l*d*f-u*h*g,this._z=l*h*g+u*d*f,this._w=l*h*f-u*d*g;break;case"YXZ":this._x=u*h*f+l*d*g,this._y=l*d*f-u*h*g,this._z=l*h*g-u*d*f,this._w=l*h*f+u*d*g;break;case"ZXY":this._x=u*h*f-l*d*g,this._y=l*d*f+u*h*g,this._z=l*h*g+u*d*f,this._w=l*h*f-u*d*g;break;case"ZYX":this._x=u*h*f-l*d*g,this._y=l*d*f+u*h*g,this._z=l*h*g-u*d*f,this._w=l*h*f+u*d*g;break;case"YZX":this._x=u*h*f+l*d*g,this._y=l*d*f+u*h*g,this._z=l*h*g-u*d*f,this._w=l*h*f-u*d*g;break;case"XZY":this._x=u*h*f-l*d*g,this._y=l*d*f-u*h*g,this._z=l*h*g+u*d*f,this._w=l*h*f+u*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],f=e[10],u=n+o+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-c)*d,this._y=(s-l)*d,this._z=(a-i)*d}else if(n>o&&n>f){let d=2*Math.sqrt(1+n-o-f);this._w=(h-c)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(s+l)/d}else if(o>f){let d=2*Math.sqrt(1+o-n-f);this._w=(s-l)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+f-n-o);this._w=(a-i)/d,this._x=(s+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ln(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,s=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+i*l-s*c,this._y=i*h+a*c+s*o-n*l,this._z=s*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,s=this._z,a=this._w,o=a*t._w+n*t._x+i*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;let c=1-o*o;if(c<=Number.EPSILON){let d=1-e;return this._w=d*a+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),f=Math.sin((1-e)*h)/l,u=Math.sin(e*h)/l;return this._w=a*f+this._w*u,this._x=n*f+this._x*u,this._y=i*f+this._y*u,this._z=s*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(s),n*Math.cos(s),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},T=class r{constructor(t=0,e=0,n=0){r.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(dm.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(dm.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,s=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*i-o*n),h=2*(o*e-s*i),f=2*(s*n-a*e);return this.x=e+c*l+a*f-o*h,this.y=n+c*h+o*l-s*f,this.z=i+c*f+s*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,s=t.z,a=e.x,o=e.y,c=e.z;return this.x=i*c-s*o,this.y=s*a-n*c,this.z=n*o-i*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Yh.copy(this).projectOnVector(t),this.sub(Yh)}reflect(t){return this.sub(Yh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ln(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Yh=new T,dm=new Vt,je=class{constructor(t=new T(1/0,1/0,1/0),e=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(bi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(bi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=bi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,bi):bi.fromBufferAttribute(s,a),bi.applyMatrix4(t.matrixWorld),this.expandByPoint(bi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),rc.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),rc.copy(n.boundingBox)),rc.applyMatrix4(t.matrixWorld),this.union(rc)}let i=t.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,bi),bi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Xa),ac.subVectors(this.max,Xa),Cr.subVectors(t.a,Xa),Pr.subVectors(t.b,Xa),Lr.subVectors(t.c,Xa),Ms.subVectors(Pr,Cr),Es.subVectors(Lr,Pr),tr.subVectors(Cr,Lr);let e=[0,-Ms.z,Ms.y,0,-Es.z,Es.y,0,-tr.z,tr.y,Ms.z,0,-Ms.x,Es.z,0,-Es.x,tr.z,0,-tr.x,-Ms.y,Ms.x,0,-Es.y,Es.x,0,-tr.y,tr.x,0];return!Kh(e,Cr,Pr,Lr,ac)||(e=[1,0,0,0,1,0,0,0,1],!Kh(e,Cr,Pr,Lr,ac))?!1:(oc.crossVectors(Ms,Es),e=[oc.x,oc.y,oc.z],Kh(e,Cr,Pr,Lr,ac))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,bi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(bi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Zi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Zi=[new T,new T,new T,new T,new T,new T,new T,new T],bi=new T,rc=new je,Cr=new T,Pr=new T,Lr=new T,Ms=new T,Es=new T,tr=new T,Xa=new T,ac=new T,oc=new T,er=new T;function Kh(r,t,e,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){er.fromArray(r,s);let o=i.x*Math.abs(er.x)+i.y*Math.abs(er.y)+i.z*Math.abs(er.z),c=t.dot(er),l=e.dot(er),h=n.dot(er);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Pb=new je,ja=new T,Jh=new T,$n=class{constructor(t=new T,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Pb.setFromPoints(t).getCenter(n);let i=0;for(let s=0,a=t.length;s<a;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ja.subVectors(t,this.center);let e=ja.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(ja,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Jh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ja.copy(t.center).add(Jh)),this.expandByPoint(ja.copy(t.center).sub(Jh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Qi=new T,Zh=new T,cc=new T,ws=new T,Qh=new T,lc=new T,$h=new T,ur=class{constructor(t=new T,e=new T(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Qi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Qi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Qi.copy(this.origin).addScaledVector(this.direction,e),Qi.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Zh.copy(t).add(e).multiplyScalar(.5),cc.copy(e).sub(t).normalize(),ws.copy(this.origin).sub(Zh);let s=t.distanceTo(e)*.5,a=-this.direction.dot(cc),o=ws.dot(this.direction),c=-ws.dot(cc),l=ws.lengthSq(),h=Math.abs(1-a*a),f,u,d,g;if(h>0)if(f=a*c-o,u=a*o-c,g=s*h,f>=0)if(u>=-g)if(u<=g){let v=1/h;f*=v,u*=v,d=f*(f+a*u+2*o)+u*(a*f+u+2*c)+l}else u=s,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*c)+l;else u=-s,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*c)+l;else u<=-g?(f=Math.max(0,-(-a*s+o)),u=f>0?-s:Math.min(Math.max(-s,-c),s),d=-f*f+u*(u+2*c)+l):u<=g?(f=0,u=Math.min(Math.max(-s,-c),s),d=u*(u+2*c)+l):(f=Math.max(0,-(a*s+o)),u=f>0?s:Math.min(Math.max(-s,-c),s),d=-f*f+u*(u+2*c)+l);else u=a>0?-s:s,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(Zh).addScaledVector(cc,u),d}intersectSphere(t,e){Qi.subVectors(t.center,this.origin);let n=Qi.dot(this.direction),i=Qi.dot(Qi)-n*n,s=t.radius*t.radius;if(i>s)return null;let a=Math.sqrt(s-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,a,o,c,l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,i=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,i=(t.min.x-u.x)*l),h>=0?(s=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),f>=0?(o=(t.min.z-u.z)*f,c=(t.max.z-u.z)*f):(o=(t.max.z-u.z)*f,c=(t.min.z-u.z)*f),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Qi)!==null}intersectTriangle(t,e,n,i,s){Qh.subVectors(e,t),lc.subVectors(n,t),$h.crossVectors(Qh,lc);let a=this.direction.dot($h),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ws.subVectors(this.origin,t);let c=o*this.direction.dot(lc.crossVectors(ws,lc));if(c<0)return null;let l=o*this.direction.dot(Qh.cross(ws));if(l<0||c+l>a)return null;let h=-o*ws.dot($h);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},yt=class r{constructor(t,e,n,i,s,a,o,c,l,h,f,u,d,g,v,m){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,c,l,h,f,u,d,g,v,m)}set(t,e,n,i,s,a,o,c,l,h,f,u,d,g,v,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=f,p[14]=u,p[3]=d,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/Ir.setFromMatrixColumn(t,0).length(),s=1/Ir.setFromMatrixColumn(t,1).length(),a=1/Ir.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){let u=a*h,d=a*f,g=o*h,v=o*f;e[0]=c*h,e[4]=-c*f,e[8]=l,e[1]=d+g*l,e[5]=u-v*l,e[9]=-o*c,e[2]=v-u*l,e[6]=g+d*l,e[10]=a*c}else if(t.order==="YXZ"){let u=c*h,d=c*f,g=l*h,v=l*f;e[0]=u+v*o,e[4]=g*o-d,e[8]=a*l,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=d*o-g,e[6]=v+u*o,e[10]=a*c}else if(t.order==="ZXY"){let u=c*h,d=c*f,g=l*h,v=l*f;e[0]=u-v*o,e[4]=-a*f,e[8]=g+d*o,e[1]=d+g*o,e[5]=a*h,e[9]=v-u*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let u=a*h,d=a*f,g=o*h,v=o*f;e[0]=c*h,e[4]=g*l-d,e[8]=u*l+v,e[1]=c*f,e[5]=v*l+u,e[9]=d*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let u=a*c,d=a*l,g=o*c,v=o*l;e[0]=c*h,e[4]=v-u*f,e[8]=g*f+d,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=d*f+g,e[10]=u-v*f}else if(t.order==="XZY"){let u=a*c,d=a*l,g=o*c,v=o*l;e[0]=c*h,e[4]=-f,e[8]=l*h,e[1]=u*f+v,e[5]=a*h,e[9]=d*f-g,e[2]=g*f-d,e[6]=o*h,e[10]=v*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Lb,t,Ib)}lookAt(t,e,n){let i=this.elements;return Jn.subVectors(t,e),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),Ts.crossVectors(n,Jn),Ts.lengthSq()===0&&(Math.abs(n.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),Ts.crossVectors(n,Jn)),Ts.normalize(),hc.crossVectors(Jn,Ts),i[0]=Ts.x,i[4]=hc.x,i[8]=Jn.x,i[1]=Ts.y,i[5]=hc.y,i[9]=Jn.y,i[2]=Ts.z,i[6]=hc.z,i[10]=Jn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],f=n[5],u=n[9],d=n[13],g=n[2],v=n[6],m=n[10],p=n[14],x=n[3],b=n[7],_=n[11],M=n[15],y=i[0],w=i[4],L=i[8],E=i[12],A=i[1],D=i[5],F=i[9],k=i[13],P=i[2],C=i[6],I=i[10],N=i[14],U=i[3],z=i[7],W=i[11],j=i[15];return s[0]=a*y+o*A+c*P+l*U,s[4]=a*w+o*D+c*C+l*z,s[8]=a*L+o*F+c*I+l*W,s[12]=a*E+o*k+c*N+l*j,s[1]=h*y+f*A+u*P+d*U,s[5]=h*w+f*D+u*C+d*z,s[9]=h*L+f*F+u*I+d*W,s[13]=h*E+f*k+u*N+d*j,s[2]=g*y+v*A+m*P+p*U,s[6]=g*w+v*D+m*C+p*z,s[10]=g*L+v*F+m*I+p*W,s[14]=g*E+v*k+m*N+p*j,s[3]=x*y+b*A+_*P+M*U,s[7]=x*w+b*D+_*C+M*z,s[11]=x*L+b*F+_*I+M*W,s[15]=x*E+b*k+_*N+M*j,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],f=t[6],u=t[10],d=t[14],g=t[3],v=t[7],m=t[11],p=t[15];return g*(+s*c*f-i*l*f-s*o*u+n*l*u+i*o*d-n*c*d)+v*(+e*c*d-e*l*u+s*a*u-i*a*d+i*l*h-s*c*h)+m*(+e*l*f-e*o*d-s*a*f+n*a*d+s*o*h-n*l*h)+p*(-i*o*h-e*c*f+e*o*u+i*a*f-n*a*u+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],f=t[9],u=t[10],d=t[11],g=t[12],v=t[13],m=t[14],p=t[15],x=f*m*l-v*u*l+v*c*d-o*m*d-f*c*p+o*u*p,b=g*u*l-h*m*l-g*c*d+a*m*d+h*c*p-a*u*p,_=h*v*l-g*f*l+g*o*d-a*v*d-h*o*p+a*f*p,M=g*f*c-h*v*c-g*o*u+a*v*u+h*o*m-a*f*m,y=e*x+n*b+i*_+s*M;if(y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/y;return t[0]=x*w,t[1]=(v*u*s-f*m*s-v*i*d+n*m*d+f*i*p-n*u*p)*w,t[2]=(o*m*s-v*c*s+v*i*l-n*m*l-o*i*p+n*c*p)*w,t[3]=(f*c*s-o*u*s-f*i*l+n*u*l+o*i*d-n*c*d)*w,t[4]=b*w,t[5]=(h*m*s-g*u*s+g*i*d-e*m*d-h*i*p+e*u*p)*w,t[6]=(g*c*s-a*m*s-g*i*l+e*m*l+a*i*p-e*c*p)*w,t[7]=(a*u*s-h*c*s+h*i*l-e*u*l-a*i*d+e*c*d)*w,t[8]=_*w,t[9]=(g*f*s-h*v*s-g*n*d+e*v*d+h*n*p-e*f*p)*w,t[10]=(a*v*s-g*o*s+g*n*l-e*v*l-a*n*p+e*o*p)*w,t[11]=(h*o*s-a*f*s-h*n*l+e*f*l+a*n*d-e*o*d)*w,t[12]=M*w,t[13]=(h*v*i-g*f*i+g*n*u-e*v*u-h*n*m+e*f*m)*w,t[14]=(g*o*i-a*v*i-g*n*c+e*v*c+a*n*m-e*o*m)*w,t[15]=(a*f*i-h*o*i+h*n*c-e*f*c-a*n*u+e*o*u)*w,this}scale(t){let e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,a=t.x,o=t.y,c=t.z,l=s*a,h=s*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,a){return this.set(1,n,s,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,s=e._x,a=e._y,o=e._z,c=e._w,l=s+s,h=a+a,f=o+o,u=s*l,d=s*h,g=s*f,v=a*h,m=a*f,p=o*f,x=c*l,b=c*h,_=c*f,M=n.x,y=n.y,w=n.z;return i[0]=(1-(v+p))*M,i[1]=(d+_)*M,i[2]=(g-b)*M,i[3]=0,i[4]=(d-_)*y,i[5]=(1-(u+p))*y,i[6]=(m+x)*y,i[7]=0,i[8]=(g+b)*w,i[9]=(m-x)*w,i[10]=(1-(u+v))*w,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,s=Ir.set(i[0],i[1],i[2]).length(),a=Ir.set(i[4],i[5],i[6]).length(),o=Ir.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],yi.copy(this);let l=1/s,h=1/a,f=1/o;return yi.elements[0]*=l,yi.elements[1]*=l,yi.elements[2]*=l,yi.elements[4]*=h,yi.elements[5]*=h,yi.elements[6]*=h,yi.elements[8]*=f,yi.elements[9]*=f,yi.elements[10]*=f,e.setFromRotationMatrix(yi),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,i,s,a,o=as){let c=this.elements,l=2*s/(e-t),h=2*s/(n-i),f=(e+t)/(e-t),u=(n+i)/(n-i),d,g;if(o===as)d=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Gc)d=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,s,a,o=as){let c=this.elements,l=1/(e-t),h=1/(n-i),f=1/(a-s),u=(e+t)*l,d=(n+i)*h,g,v;if(o===as)g=(a+s)*f,v=-2*f;else if(o===Gc)g=s*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ir=new T,yi=new yt,Lb=new T(0,0,0),Ib=new T(1,1,1),Ts=new T,hc=new T,Jn=new T,pm=new yt,mm=new Vt,hi=class r{constructor(t=0,e=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],f=i[2],u=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(ln(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ln(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(ln(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-ln(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ln(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-ln(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return pm.makeRotationFromQuaternion(t),this.setFromRotationMatrix(pm,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return mm.setFromEuler(this),this.setFromQuaternion(mm,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};hi.DEFAULT_ORDER="XYZ";var uo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Db=0,gm=new T,Dr=new Vt,$i=new yt,uc=new T,Ya=new T,Fb=new T,Hb=new Vt,vm=new T(1,0,0),xm=new T(0,1,0),bm=new T(0,0,1),Nb={type:"added"},kb={type:"removed"},Ie=class r extends os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Db++}),this.uuid=Ei(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new T,e=new hi,n=new Vt,i=new T(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new yt},normalMatrix:{value:new le}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new uo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Dr.setFromAxisAngle(t,e),this.quaternion.multiply(Dr),this}rotateOnWorldAxis(t,e){return Dr.setFromAxisAngle(t,e),this.quaternion.premultiply(Dr),this}rotateX(t){return this.rotateOnAxis(vm,t)}rotateY(t){return this.rotateOnAxis(xm,t)}rotateZ(t){return this.rotateOnAxis(bm,t)}translateOnAxis(t,e){return gm.copy(t).applyQuaternion(this.quaternion),this.position.add(gm.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(vm,t)}translateY(t){return this.translateOnAxis(xm,t)}translateZ(t){return this.translateOnAxis(bm,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4($i.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?uc.copy(t):uc.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Ya.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$i.lookAt(Ya,uc,this.up):$i.lookAt(uc,Ya,this.up),this.quaternion.setFromRotationMatrix($i),i&&($i.extractRotation(i.matrixWorld),Dr.setFromRotationMatrix($i),this.quaternion.premultiply(Dr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Nb)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(kb)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),$i.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),$i.multiply(t.parent.matrixWorld)),t.applyMatrix4($i),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ya,t,Fb),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ya,Hb,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++){let s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let i=this.children;for(let s=0,a=i.length;s<a;s++){let o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let f=c[l];s(t.shapes,f)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(t.materials,this.material[c]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];i.animations.push(s(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),f=a(t.shapes),u=a(t.skeletons),d=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};Ie.DEFAULT_UP=new T(0,1,0);Ie.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var _i=new T,ts=new T,tu=new T,es=new T,Fr=new T,Hr=new T,ym=new T,eu=new T,nu=new T,iu=new T,fc=!1,ar=class r{constructor(t=new T,e=new T,n=new T){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),_i.subVectors(t,e),i.cross(_i);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){_i.subVectors(i,e),ts.subVectors(n,e),tu.subVectors(t,e);let a=_i.dot(_i),o=_i.dot(ts),c=_i.dot(tu),l=ts.dot(ts),h=ts.dot(tu),f=a*l-o*o;if(f===0)return s.set(0,0,0),null;let u=1/f,d=(l*c-o*h)*u,g=(a*h-o*c)*u;return s.set(1-d-g,g,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,es)===null?!1:es.x>=0&&es.y>=0&&es.x+es.y<=1}static getUV(t,e,n,i,s,a,o,c){return fc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),fc=!0),this.getInterpolation(t,e,n,i,s,a,o,c)}static getInterpolation(t,e,n,i,s,a,o,c){return this.getBarycoord(t,e,n,i,es)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,es.x),c.addScaledVector(a,es.y),c.addScaledVector(o,es.z),c)}static isFrontFacing(t,e,n,i){return _i.subVectors(n,e),ts.subVectors(t,e),_i.cross(ts).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return _i.subVectors(this.c,this.b),ts.subVectors(this.a,this.b),_i.cross(ts).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,s){return fc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),fc=!0),r.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}getInterpolation(t,e,n,i,s){return r.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,a,o;Fr.subVectors(i,n),Hr.subVectors(s,n),eu.subVectors(t,n);let c=Fr.dot(eu),l=Hr.dot(eu);if(c<=0&&l<=0)return e.copy(n);nu.subVectors(t,i);let h=Fr.dot(nu),f=Hr.dot(nu);if(h>=0&&f<=h)return e.copy(i);let u=c*f-h*l;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(Fr,a);iu.subVectors(t,s);let d=Fr.dot(iu),g=Hr.dot(iu);if(g>=0&&d<=g)return e.copy(s);let v=d*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(Hr,o);let m=h*g-d*f;if(m<=0&&f-h>=0&&d-g>=0)return ym.subVectors(s,i),o=(f-h)/(f-h+(d-g)),e.copy(i).addScaledVector(ym,o);let p=1/(m+v+u);return a=v*p,o=u*p,e.copy(n).addScaledVector(Fr,a).addScaledVector(Hr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},P0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ss={h:0,s:0,l:0},dc={h:0,s:0,l:0};function su(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var et=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ue){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ge.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=ge.workingColorSpace){return this.r=t,this.g=e,this.b=n,ge.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=ge.workingColorSpace){if(t=Rf(t,1),e=ln(e,0,1),n=ln(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=su(a,s,t+1/3),this.g=su(a,s,t),this.b=su(a,s,t-1/3)}return ge.toWorkingColorSpace(this,i),this}setStyle(t,e=ue){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ue){let n=P0[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=$r(t.r),this.g=$r(t.g),this.b=$r(t.b),this}copyLinearToSRGB(t){return this.r=Xh(t.r),this.g=Xh(t.g),this.b=Xh(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ue){return ge.fromWorkingColorSpace(An.copy(this),t),Math.round(ln(An.r*255,0,255))*65536+Math.round(ln(An.g*255,0,255))*256+Math.round(ln(An.b*255,0,255))}getHexString(t=ue){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ge.workingColorSpace){ge.fromWorkingColorSpace(An.copy(this),e);let n=An.r,i=An.g,s=An.b,a=Math.max(n,i,s),o=Math.min(n,i,s),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let f=a-o;switch(l=h<=.5?f/(a+o):f/(2-a-o),a){case n:c=(i-s)/f+(i<s?6:0);break;case i:c=(s-n)/f+2;break;case s:c=(n-i)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ge.workingColorSpace){return ge.fromWorkingColorSpace(An.copy(this),e),t.r=An.r,t.g=An.g,t.b=An.b,t}getStyle(t=ue){ge.fromWorkingColorSpace(An.copy(this),t);let e=An.r,n=An.g,i=An.b;return t!==ue?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Ss),this.setHSL(Ss.h+t,Ss.s+e,Ss.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ss),t.getHSL(dc);let n=so(Ss.h,dc.h,e),i=so(Ss.s,dc.s,e),s=so(Ss.l,dc.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},An=new et;et.NAMES=P0;var Ub=0,En=class extends os{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ub++}),this.uuid=Ei(),this.name="",this.type="Material",this.blending=Qr,this.side=Ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mu,this.blendDst=Eu,this.blendEquation=ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=Nc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=om,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ar,this.stencilZFail=Ar,this.stencilZPass=Ar,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Qr&&(n.blending=this.blending),this.side!==Ni&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Mu&&(n.blendSrc=this.blendSrc),this.blendDst!==Eu&&(n.blendDst=this.blendDst),this.blendEquation!==ss&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Nc&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==om&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ar&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ar&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ar&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let a=[];for(let o in s){let c=s[o];delete c.metadata,a.push(c)}return a}if(e){let s=i(t.textures),a=i(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Je=class extends En{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=xf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var rn=new T,pc=new at,Et=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Su,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=rs,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)pc.fromBufferAttribute(this,e),pc.applyMatrix3(t),this.setXY(e,pc.x,pc.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.applyMatrix3(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.applyMatrix4(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.applyNormalMatrix(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.transformDirection(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Di(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Re(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Di(e,this.array)),e}setX(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Di(e,this.array)),e}setY(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Di(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Di(e,this.array)),e}setW(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array),i=Re(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array),i=Re(i,this.array),s=Re(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Su&&(t.usage=this.usage),t}};var jc=class extends Et{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Yc=class extends Et{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var mt=class extends Et{constructor(t,e,n){super(new Float32Array(t),e,n)}};var Ob=0,ci=new yt,ru=new Ie,Nr=new T,Zn=new je,Ka=new je,vn=new T,Tt=class r extends os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ob++}),this.uuid=Ei(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(C0(t)?Yc:jc)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new le().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ci.makeRotationFromQuaternion(t),this.applyMatrix4(ci),this}rotateX(t){return ci.makeRotationX(t),this.applyMatrix4(ci),this}rotateY(t){return ci.makeRotationY(t),this.applyMatrix4(ci),this}rotateZ(t){return ci.makeRotationZ(t),this.applyMatrix4(ci),this}translate(t,e,n){return ci.makeTranslation(t,e,n),this.applyMatrix4(ci),this}scale(t,e,n){return ci.makeScale(t,e,n),this.applyMatrix4(ci),this}lookAt(t){return ru.lookAt(t),ru.updateMatrix(),this.applyMatrix4(ru.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Nr).negate(),this.translate(Nr.x,Nr.y,Nr.z),this}setFromPoints(t){let e=[];for(let n=0,i=t.length;n<i;n++){let s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new mt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new je);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];Zn.setFromBufferAttribute(s),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,Zn.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,Zn.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(Zn.min),this.boundingBox.expandByPoint(Zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $n);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new T,1/0);return}if(t){let n=this.boundingSphere.center;if(Zn.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){let o=e[s];Ka.setFromBufferAttribute(o),this.morphTargetsRelative?(vn.addVectors(Zn.min,Ka.min),Zn.expandByPoint(vn),vn.addVectors(Zn.max,Ka.max),Zn.expandByPoint(vn)):(Zn.expandByPoint(Ka.min),Zn.expandByPoint(Ka.max))}Zn.getCenter(n);let i=0;for(let s=0,a=t.count;s<a;s++)vn.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(vn));if(e)for(let s=0,a=e.length;s<a;s++){let o=e[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)vn.fromBufferAttribute(o,l),c&&(Nr.fromBufferAttribute(t,l),vn.add(Nr)),i=Math.max(i,n.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.array,i=e.position.array,s=e.normal.array,a=e.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Et(new Float32Array(4*o),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let A=0;A<o;A++)l[A]=new T,h[A]=new T;let f=new T,u=new T,d=new T,g=new at,v=new at,m=new at,p=new T,x=new T;function b(A,D,F){f.fromArray(i,A*3),u.fromArray(i,D*3),d.fromArray(i,F*3),g.fromArray(a,A*2),v.fromArray(a,D*2),m.fromArray(a,F*2),u.sub(f),d.sub(f),v.sub(g),m.sub(g);let k=1/(v.x*m.y-m.x*v.y);isFinite(k)&&(p.copy(u).multiplyScalar(m.y).addScaledVector(d,-v.y).multiplyScalar(k),x.copy(d).multiplyScalar(v.x).addScaledVector(u,-m.x).multiplyScalar(k),l[A].add(p),l[D].add(p),l[F].add(p),h[A].add(x),h[D].add(x),h[F].add(x))}let _=this.groups;_.length===0&&(_=[{start:0,count:n.length}]);for(let A=0,D=_.length;A<D;++A){let F=_[A],k=F.start,P=F.count;for(let C=k,I=k+P;C<I;C+=3)b(n[C+0],n[C+1],n[C+2])}let M=new T,y=new T,w=new T,L=new T;function E(A){w.fromArray(s,A*3),L.copy(w);let D=l[A];M.copy(D),M.sub(w.multiplyScalar(w.dot(D))).normalize(),y.crossVectors(L,D);let k=y.dot(h[A])<0?-1:1;c[A*4]=M.x,c[A*4+1]=M.y,c[A*4+2]=M.z,c[A*4+3]=k}for(let A=0,D=_.length;A<D;++A){let F=_[A],k=F.start,P=F.count;for(let C=k,I=k+P;C<I;C+=3)E(n[C+0]),E(n[C+1]),E(n[C+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Et(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);let i=new T,s=new T,a=new T,o=new T,c=new T,l=new T,h=new T,f=new T;if(t)for(let u=0,d=t.count;u<d;u+=3){let g=t.getX(u+0),v=t.getX(u+1),m=t.getX(u+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),h.subVectors(a,s),f.subVectors(i,s),h.cross(f),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,d=e.count;u<d;u+=3)i.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,s),f.subVectors(i,s),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)vn.fromBufferAttribute(t,e),vn.normalize(),t.setXYZ(e,vn.x,vn.y,vn.z)}toNonIndexed(){function t(o,c){let l=o.array,h=o.itemSize,f=o.normalized,u=new l.constructor(c.length*h),d=0,g=0;for(let v=0,m=c.length;v<m;v++){o.isInterleavedBufferAttribute?d=c[v]*o.data.stride+o.offset:d=c[v]*h;for(let p=0;p<h;p++)u[g++]=l[d++]}return new Et(u,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,n=this.index.array,i=this.attributes;for(let o in i){let c=i[o],l=t(c,n);e.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let c=[],l=s[o];for(let h=0,f=l.length;h<f;h++){let u=l[h],d=t(u,n);c.push(d)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let i={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let f=0,u=l.length;f<u;f++){let d=l[f];h.push(d.toJSON(t.data))}h.length>0&&(i[c]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(e))}let s=t.morphAttributes;for(let l in s){let h=[],f=s[l];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,h=a.length;l<h;l++){let f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},_m=new yt,nr=new ur,mc=new $n,Mm=new T,kr=new T,Ur=new T,Or=new T,au=new T,gc=new T,vc=new at,xc=new at,bc=new at,Em=new T,wm=new T,Tm=new T,yc=new T,_c=new T,kt=class extends Ie{constructor(t=new Tt,e=new Je){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let o=this.morphTargetInfluences;if(s&&o){gc.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=o[c],f=s[c];h!==0&&(au.fromBufferAttribute(f,t),a?gc.addScaledVector(au,h):gc.addScaledVector(au.sub(e),h))}e.add(gc)}return e}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),mc.copy(n.boundingSphere),mc.applyMatrix4(s),nr.copy(t.ray).recast(t.near),!(mc.containsPoint(nr.origin)===!1&&(nr.intersectSphere(mc,Mm)===null||nr.origin.distanceToSquared(Mm)>(t.far-t.near)**2))&&(_m.copy(s).invert(),nr.copy(t.ray).applyMatrix4(_m),!(n.boundingBox!==null&&nr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,nr)))}_computeIntersections(t,e,n){let i,s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,u=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){let m=u[g],p=a[m.materialIndex],x=Math.max(m.start,d.start),b=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let _=x,M=b;_<M;_+=3){let y=o.getX(_),w=o.getX(_+1),L=o.getX(_+2);i=Mc(this,p,t,n,l,h,f,y,w,L),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){let x=o.getX(m),b=o.getX(m+1),_=o.getX(m+2);i=Mc(this,a,t,n,l,h,f,x,b,_),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){let m=u[g],p=a[m.materialIndex],x=Math.max(m.start,d.start),b=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let _=x,M=b;_<M;_+=3){let y=_,w=_+1,L=_+2;i=Mc(this,p,t,n,l,h,f,y,w,L),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,d.start),v=Math.min(c.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){let x=m,b=m+1,_=m+2;i=Mc(this,a,t,n,l,h,f,x,b,_),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function zb(r,t,e,n,i,s,a,o){let c;if(t.side===_n?c=n.intersectTriangle(a,s,i,!0,o):c=n.intersectTriangle(i,s,a,t.side===Ni,o),c===null)return null;_c.copy(o),_c.applyMatrix4(r.matrixWorld);let l=e.ray.origin.distanceTo(_c);return l<e.near||l>e.far?null:{distance:l,point:_c.clone(),object:r}}function Mc(r,t,e,n,i,s,a,o,c,l){r.getVertexPosition(o,kr),r.getVertexPosition(c,Ur),r.getVertexPosition(l,Or);let h=zb(r,t,e,n,kr,Ur,Or,yc);if(h){i&&(vc.fromBufferAttribute(i,o),xc.fromBufferAttribute(i,c),bc.fromBufferAttribute(i,l),h.uv=ar.getInterpolation(yc,kr,Ur,Or,vc,xc,bc,new at)),s&&(vc.fromBufferAttribute(s,o),xc.fromBufferAttribute(s,c),bc.fromBufferAttribute(s,l),h.uv1=ar.getInterpolation(yc,kr,Ur,Or,vc,xc,bc,new at),h.uv2=h.uv1),a&&(Em.fromBufferAttribute(a,o),wm.fromBufferAttribute(a,c),Tm.fromBufferAttribute(a,l),h.normal=ar.getInterpolation(yc,kr,Ur,Or,Em,wm,Tm,new T),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:c,c:l,normal:new T,materialIndex:0};ar.getNormal(kr,Ur,Or,f.normal),h.face=f}return h}var re=class r extends Tt{constructor(t=1,e=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};let o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);let c=[],l=[],h=[],f=[],u=0,d=0;g("z","y","x",-1,-1,n,e,t,a,s,0),g("z","y","x",1,-1,n,e,-t,a,s,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new mt(l,3)),this.setAttribute("normal",new mt(h,3)),this.setAttribute("uv",new mt(f,2));function g(v,m,p,x,b,_,M,y,w,L,E){let A=_/w,D=M/L,F=_/2,k=M/2,P=y/2,C=w+1,I=L+1,N=0,U=0,z=new T;for(let W=0;W<I;W++){let j=W*D-k;for(let it=0;it<C;it++){let B=it*A-F;z[v]=B*x,z[m]=j*b,z[p]=P,l.push(z.x,z.y,z.z),z[v]=0,z[m]=0,z[p]=y>0?1:-1,h.push(z.x,z.y,z.z),f.push(it/w),f.push(1-W/L),N+=1}}for(let W=0;W<L;W++)for(let j=0;j<w;j++){let it=u+j+C*W,B=u+j+C*(W+1),Z=u+(j+1)+C*(W+1),lt=u+(j+1)+C*W;c.push(it,B,lt),c.push(B,Z,lt),U+=6}o.addGroup(d,U,E),d+=U,u+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function aa(r){let t={};for(let e in r){t[e]={};for(let n in r[e]){let i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function On(r){let t={};for(let e=0;e<r.length;e++){let n=aa(r[e]);for(let i in n)t[i]=n[i]}return t}function Bb(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function L0(r){return r.getRenderTarget()===null?r.outputColorSpace:ge.workingColorSpace}var Gb={clone:aa,merge:On},Vb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ve=class extends En{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vb,this.fragmentShader=Wb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=aa(t.uniforms),this.uniformsGroups=Bb(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Kc=class extends Ie{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=as}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Oe=class extends Kc{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ra*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(io*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ra*2*Math.atan(Math.tan(io*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(io*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*i/c,e-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},zr=-90,Br=1,Lu=class extends Ie{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Oe(zr,Br,t,e);i.layers=this.layers,this.add(i);let s=new Oe(zr,Br,t,e);s.layers=this.layers,this.add(s);let a=new Oe(zr,Br,t,e);a.layers=this.layers,this.add(a);let o=new Oe(zr,Br,t,e);o.layers=this.layers,this.add(o);let c=new Oe(zr,Br,t,e);c.layers=this.layers,this.add(c);let l=new Oe(zr,Br,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,a,o,c]=e;for(let l of e)this.remove(l);if(t===as)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Gc)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,c,l,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Jc=class extends Mn{constructor(t,e,n,i,s,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:ea,super(t,e,n,i,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Iu=class extends xn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(ro("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===lr?ue:Rn),this.texture=new Jc(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:an}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new re(5,5,5),s=new ve({name:"CubemapFromEquirect",uniforms:aa(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:_n,blending:Rs});s.uniforms.tEquirect.value=e;let a=new kt(i,s),o=e.minFilter;return e.minFilter===ki&&(e.minFilter=an),new Lu(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){let s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(s)}},ou=new T,qb=new T,Xb=new le,Mi=class{constructor(t=new T(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=ou.subVectors(n,e).cross(qb.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(ou),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Xb.getNormalMatrix(t),i=this.coplanarPoint(ou).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},ir=new $n,Ec=new T,fo=class{constructor(t=new Mi,e=new Mi,n=new Mi,i=new Mi,s=new Mi,a=new Mi){this.planes=[t,e,n,i,s,a]}set(t,e,n,i,s,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=as){let n=this.planes,i=t.elements,s=i[0],a=i[1],o=i[2],c=i[3],l=i[4],h=i[5],f=i[6],u=i[7],d=i[8],g=i[9],v=i[10],m=i[11],p=i[12],x=i[13],b=i[14],_=i[15];if(n[0].setComponents(c-s,u-l,m-d,_-p).normalize(),n[1].setComponents(c+s,u+l,m+d,_+p).normalize(),n[2].setComponents(c+a,u+h,m+g,_+x).normalize(),n[3].setComponents(c-a,u-h,m-g,_-x).normalize(),n[4].setComponents(c-o,u-f,m-v,_-b).normalize(),e===as)n[5].setComponents(c+o,u+f,m+v,_+b).normalize();else if(e===Gc)n[5].setComponents(o,f,v,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ir.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ir.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ir)}intersectsSprite(t){return ir.center.set(0,0,0),ir.radius=.7071067811865476,ir.applyMatrix4(t.matrixWorld),this.intersectsSphere(ir)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Ec.x=i.normal.x>0?t.max.x:t.min.x,Ec.y=i.normal.y>0?t.max.y:t.min.y,Ec.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ec)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function I0(){let r=null,t=!1,e=null,n=null;function i(s,a){e(s,a),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function jb(r,t){let e=t.isWebGL2,n=new WeakMap;function i(l,h){let f=l.array,u=l.usage,d=f.byteLength,g=r.createBuffer();r.bindBuffer(h,g),r.bufferData(h,f,u),l.onUploadCallback();let v;if(f instanceof Float32Array)v=r.FLOAT;else if(f instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)v=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=r.UNSIGNED_SHORT;else if(f instanceof Int16Array)v=r.SHORT;else if(f instanceof Uint32Array)v=r.UNSIGNED_INT;else if(f instanceof Int32Array)v=r.INT;else if(f instanceof Int8Array)v=r.BYTE;else if(f instanceof Uint8Array)v=r.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)v=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:v,bytesPerElement:f.BYTES_PER_ELEMENT,version:l.version,size:d}}function s(l,h,f){let u=h.array,d=h._updateRange,g=h.updateRanges;if(r.bindBuffer(f,l),d.count===-1&&g.length===0&&r.bufferSubData(f,0,u),g.length!==0){for(let v=0,m=g.length;v<m;v++){let p=g[v];e?r.bufferSubData(f,p.start*u.BYTES_PER_ELEMENT,u,p.start,p.count):r.bufferSubData(f,p.start*u.BYTES_PER_ELEMENT,u.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}d.count!==-1&&(e?r.bufferSubData(f,d.offset*u.BYTES_PER_ELEMENT,u,d.offset,d.count):r.bufferSubData(f,d.offset*u.BYTES_PER_ELEMENT,u.subarray(d.offset,d.offset+d.count)),d.count=-1),h.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);h&&(r.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let u=n.get(l);(!u||u.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let f=n.get(l);if(f===void 0)n.set(l,i(l,h));else if(f.version<l.version){if(f.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,l,h),f.version=l.version}}return{get:a,remove:o,update:c}}var ti=class r extends Tt{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,a=e/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,f=t/o,u=e/c,d=[],g=[],v=[],m=[];for(let p=0;p<h;p++){let x=p*u-a;for(let b=0;b<l;b++){let _=b*f-s;g.push(_,-x,0),v.push(0,0,1),m.push(b/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let x=0;x<o;x++){let b=x+l*p,_=x+l*(p+1),M=x+1+l*(p+1),y=x+1+l*p;d.push(b,_,y),d.push(_,M,y)}this.setIndex(d),this.setAttribute("position",new mt(g,3)),this.setAttribute("normal",new mt(v,3)),this.setAttribute("uv",new mt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}},Yb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Kb=`#ifdef USE_ALPHAHASH
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
#endif`,Jb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qb=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,$b=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ty=`#ifdef USE_AOMAP
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
#endif`,ey=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ny=`#ifdef USE_BATCHING
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
#endif`,iy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,sy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ry=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ay=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,oy=`#ifdef USE_IRIDESCENCE
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
#endif`,cy=`#ifdef USE_BUMPMAP
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
#endif`,ly=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,hy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,py=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,my=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,gy=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,vy=`#define PI 3.141592653589793
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
} // validated`,xy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,by=`vec3 transformedNormal = objectNormal;
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
#endif`,yy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_y=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,My=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ey=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ty=`
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
}`,Sy=`#ifdef USE_ENVMAP
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
#endif`,Ay=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ry=`#ifdef USE_ENVMAP
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
#endif`,Cy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Py=`#ifdef USE_ENVMAP
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
#endif`,Ly=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Iy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Dy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hy=`#ifdef USE_GRADIENTMAP
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
}`,Ny=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,ky=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Uy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Oy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zy=`uniform bool receiveShadow;
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
#endif`,By=`#ifdef USE_ENVMAP
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
#endif`,Gy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xy=`PhysicalMaterial material;
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
#endif`,jy=`struct PhysicalMaterial {
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
}`,Yy=`
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
#endif`,Ky=`#if defined( RE_IndirectDiffuse )
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
#endif`,Jy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zy=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qy=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$y=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,t_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,e_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,n_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,i_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,s_=`#if defined( USE_POINTS_UV )
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
#endif`,r_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,a_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,o_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,c_=`#ifdef USE_MORPHNORMALS
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
#endif`,l_=`#ifdef USE_MORPHTARGETS
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
#endif`,h_=`#ifdef USE_MORPHTARGETS
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
#endif`,u_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,f_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,d_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,p_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,m_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,g_=`#ifdef USE_NORMALMAP
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
#endif`,v_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,x_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,b_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,y_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,__=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,M_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,E_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,w_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,T_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,S_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,A_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,R_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,C_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,P_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,L_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,I_=`float getShadowMask() {
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
}`,D_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,F_=`#ifdef USE_SKINNING
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
#endif`,H_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,N_=`#ifdef USE_SKINNING
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
#endif`,k_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,U_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,O_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,z_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,B_=`#ifdef USE_TRANSMISSION
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
#endif`,G_=`#ifdef USE_TRANSMISSION
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
#endif`,V_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,W_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,q_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,X_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,j_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Y_=`uniform sampler2D t2D;
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
}`,K_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,J_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Z_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Q_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$_=`#include <common>
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
}`,t1=`#if DEPTH_PACKING == 3200
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
}`,e1=`#define DISTANCE
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
}`,n1=`#define DISTANCE
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
}`,i1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,s1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r1=`uniform float scale;
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
}`,a1=`uniform vec3 diffuse;
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
}`,o1=`#include <common>
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
}`,c1=`uniform vec3 diffuse;
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
}`,l1=`#define LAMBERT
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
}`,h1=`#define LAMBERT
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
}`,u1=`#define MATCAP
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
}`,f1=`#define MATCAP
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
}`,d1=`#define NORMAL
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
}`,p1=`#define NORMAL
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
}`,m1=`#define PHONG
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
}`,g1=`#define PHONG
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
}`,v1=`#define STANDARD
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
}`,x1=`#define STANDARD
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
}`,b1=`#define TOON
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
}`,y1=`#define TOON
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
}`,_1=`uniform float size;
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
}`,M1=`uniform vec3 diffuse;
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
}`,E1=`#include <common>
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
}`,w1=`uniform vec3 color;
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
}`,T1=`uniform float rotation;
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
}`,S1=`uniform vec3 diffuse;
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
}`,Jt={alphahash_fragment:Yb,alphahash_pars_fragment:Kb,alphamap_fragment:Jb,alphamap_pars_fragment:Zb,alphatest_fragment:Qb,alphatest_pars_fragment:$b,aomap_fragment:ty,aomap_pars_fragment:ey,batching_pars_vertex:ny,batching_vertex:iy,begin_vertex:sy,beginnormal_vertex:ry,bsdfs:ay,iridescence_fragment:oy,bumpmap_pars_fragment:cy,clipping_planes_fragment:ly,clipping_planes_pars_fragment:hy,clipping_planes_pars_vertex:uy,clipping_planes_vertex:fy,color_fragment:dy,color_pars_fragment:py,color_pars_vertex:my,color_vertex:gy,common:vy,cube_uv_reflection_fragment:xy,defaultnormal_vertex:by,displacementmap_pars_vertex:yy,displacementmap_vertex:_y,emissivemap_fragment:My,emissivemap_pars_fragment:Ey,colorspace_fragment:wy,colorspace_pars_fragment:Ty,envmap_fragment:Sy,envmap_common_pars_fragment:Ay,envmap_pars_fragment:Ry,envmap_pars_vertex:Cy,envmap_physical_pars_fragment:By,envmap_vertex:Py,fog_vertex:Ly,fog_pars_vertex:Iy,fog_fragment:Dy,fog_pars_fragment:Fy,gradientmap_pars_fragment:Hy,lightmap_fragment:Ny,lightmap_pars_fragment:ky,lights_lambert_fragment:Uy,lights_lambert_pars_fragment:Oy,lights_pars_begin:zy,lights_toon_fragment:Gy,lights_toon_pars_fragment:Vy,lights_phong_fragment:Wy,lights_phong_pars_fragment:qy,lights_physical_fragment:Xy,lights_physical_pars_fragment:jy,lights_fragment_begin:Yy,lights_fragment_maps:Ky,lights_fragment_end:Jy,logdepthbuf_fragment:Zy,logdepthbuf_pars_fragment:Qy,logdepthbuf_pars_vertex:$y,logdepthbuf_vertex:t_,map_fragment:e_,map_pars_fragment:n_,map_particle_fragment:i_,map_particle_pars_fragment:s_,metalnessmap_fragment:r_,metalnessmap_pars_fragment:a_,morphcolor_vertex:o_,morphnormal_vertex:c_,morphtarget_pars_vertex:l_,morphtarget_vertex:h_,normal_fragment_begin:u_,normal_fragment_maps:f_,normal_pars_fragment:d_,normal_pars_vertex:p_,normal_vertex:m_,normalmap_pars_fragment:g_,clearcoat_normal_fragment_begin:v_,clearcoat_normal_fragment_maps:x_,clearcoat_pars_fragment:b_,iridescence_pars_fragment:y_,opaque_fragment:__,packing:M_,premultiplied_alpha_fragment:E_,project_vertex:w_,dithering_fragment:T_,dithering_pars_fragment:S_,roughnessmap_fragment:A_,roughnessmap_pars_fragment:R_,shadowmap_pars_fragment:C_,shadowmap_pars_vertex:P_,shadowmap_vertex:L_,shadowmask_pars_fragment:I_,skinbase_vertex:D_,skinning_pars_vertex:F_,skinning_vertex:H_,skinnormal_vertex:N_,specularmap_fragment:k_,specularmap_pars_fragment:U_,tonemapping_fragment:O_,tonemapping_pars_fragment:z_,transmission_fragment:B_,transmission_pars_fragment:G_,uv_pars_fragment:V_,uv_pars_vertex:W_,uv_vertex:q_,worldpos_vertex:X_,background_vert:j_,background_frag:Y_,backgroundCube_vert:K_,backgroundCube_frag:J_,cube_vert:Z_,cube_frag:Q_,depth_vert:$_,depth_frag:t1,distanceRGBA_vert:e1,distanceRGBA_frag:n1,equirect_vert:i1,equirect_frag:s1,linedashed_vert:r1,linedashed_frag:a1,meshbasic_vert:o1,meshbasic_frag:c1,meshlambert_vert:l1,meshlambert_frag:h1,meshmatcap_vert:u1,meshmatcap_frag:f1,meshnormal_vert:d1,meshnormal_frag:p1,meshphong_vert:m1,meshphong_frag:g1,meshphysical_vert:v1,meshphysical_frag:x1,meshtoon_vert:b1,meshtoon_frag:y1,points_vert:_1,points_frag:M1,shadow_vert:E1,shadow_frag:w1,sprite_vert:T1,sprite_frag:S1},vt={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new le}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new le},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0},uvTransform:{value:new le}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}}},Ii={basic:{uniforms:On([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:On([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new et(0)}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:On([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:On([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:On([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new et(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:On([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:On([vt.points,vt.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:On([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:On([vt.common,vt.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:On([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:On([vt.sprite,vt.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distanceRGBA:{uniforms:On([vt.common,vt.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distanceRGBA_vert,fragmentShader:Jt.distanceRGBA_frag},shadow:{uniforms:On([vt.lights,vt.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};Ii.physical={uniforms:On([Ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new le},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new le},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new le},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new le},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new le},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new le},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new le}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};var wc={r:0,b:0,g:0};function A1(r,t,e,n,i,s,a){let o=new et(0),c=s===!0?0:1,l,h,f=null,u=0,d=null;function g(m,p){let x=!1,b=p.isScene===!0?p.background:null;b&&b.isTexture&&(b=(p.backgroundBlurriness>0?e:t).get(b)),b===null?v(o,c):b&&b.isColor&&(v(b,1),x=!0);let _=r.xr.getEnvironmentBlendMode();_==="additive"?n.buffers.color.setClear(0,0,0,1,a):_==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||x)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),b&&(b.isCubeTexture||b.mapping===fl)?(h===void 0&&(h=new kt(new re(1,1,1),new ve({name:"BackgroundCubeMaterial",uniforms:aa(Ii.backgroundCube.uniforms),vertexShader:Ii.backgroundCube.vertexShader,fragmentShader:Ii.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(M,y,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=ge.getTransfer(b.colorSpace)!==Ue,(f!==b||u!==b.version||d!==r.toneMapping)&&(h.material.needsUpdate=!0,f=b,u=b.version,d=r.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new kt(new ti(2,2),new ve({name:"BackgroundMaterial",uniforms:aa(Ii.background.uniforms),vertexShader:Ii.background.vertexShader,fragmentShader:Ii.background.fragmentShader,side:Ni,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=ge.getTransfer(b.colorSpace)!==Ue,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(f!==b||u!==b.version||d!==r.toneMapping)&&(l.material.needsUpdate=!0,f=b,u=b.version,d=r.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function v(m,p){m.getRGB(wc,L0(r)),n.buffers.color.setClear(wc.r,wc.g,wc.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),c=p,v(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,v(o,c)},render:g}}function R1(r,t,e,n){let i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},c=m(null),l=c,h=!1;function f(P,C,I,N,U){let z=!1;if(a){let W=v(N,I,C);l!==W&&(l=W,d(l.object)),z=p(P,N,I,U),z&&x(P,N,I,U)}else{let W=C.wireframe===!0;(l.geometry!==N.id||l.program!==I.id||l.wireframe!==W)&&(l.geometry=N.id,l.program=I.id,l.wireframe=W,z=!0)}U!==null&&e.update(U,r.ELEMENT_ARRAY_BUFFER),(z||h)&&(h=!1,L(P,C,I,N),U!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function u(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function d(P){return n.isWebGL2?r.bindVertexArray(P):s.bindVertexArrayOES(P)}function g(P){return n.isWebGL2?r.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function v(P,C,I){let N=I.wireframe===!0,U=o[P.id];U===void 0&&(U={},o[P.id]=U);let z=U[C.id];z===void 0&&(z={},U[C.id]=z);let W=z[N];return W===void 0&&(W=m(u()),z[N]=W),W}function m(P){let C=[],I=[],N=[];for(let U=0;U<i;U++)C[U]=0,I[U]=0,N[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:I,attributeDivisors:N,object:P,attributes:{},index:null}}function p(P,C,I,N){let U=l.attributes,z=C.attributes,W=0,j=I.getAttributes();for(let it in j)if(j[it].location>=0){let Z=U[it],lt=z[it];if(lt===void 0&&(it==="instanceMatrix"&&P.instanceMatrix&&(lt=P.instanceMatrix),it==="instanceColor"&&P.instanceColor&&(lt=P.instanceColor)),Z===void 0||Z.attribute!==lt||lt&&Z.data!==lt.data)return!0;W++}return l.attributesNum!==W||l.index!==N}function x(P,C,I,N){let U={},z=C.attributes,W=0,j=I.getAttributes();for(let it in j)if(j[it].location>=0){let Z=z[it];Z===void 0&&(it==="instanceMatrix"&&P.instanceMatrix&&(Z=P.instanceMatrix),it==="instanceColor"&&P.instanceColor&&(Z=P.instanceColor));let lt={};lt.attribute=Z,Z&&Z.data&&(lt.data=Z.data),U[it]=lt,W++}l.attributes=U,l.attributesNum=W,l.index=N}function b(){let P=l.newAttributes;for(let C=0,I=P.length;C<I;C++)P[C]=0}function _(P){M(P,0)}function M(P,C){let I=l.newAttributes,N=l.enabledAttributes,U=l.attributeDivisors;I[P]=1,N[P]===0&&(r.enableVertexAttribArray(P),N[P]=1),U[P]!==C&&((n.isWebGL2?r:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,C),U[P]=C)}function y(){let P=l.newAttributes,C=l.enabledAttributes;for(let I=0,N=C.length;I<N;I++)C[I]!==P[I]&&(r.disableVertexAttribArray(I),C[I]=0)}function w(P,C,I,N,U,z,W){W===!0?r.vertexAttribIPointer(P,C,I,U,z):r.vertexAttribPointer(P,C,I,N,U,z)}function L(P,C,I,N){if(n.isWebGL2===!1&&(P.isInstancedMesh||N.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;b();let U=N.attributes,z=I.getAttributes(),W=C.defaultAttributeValues;for(let j in z){let it=z[j];if(it.location>=0){let B=U[j];if(B===void 0&&(j==="instanceMatrix"&&P.instanceMatrix&&(B=P.instanceMatrix),j==="instanceColor"&&P.instanceColor&&(B=P.instanceColor)),B!==void 0){let Z=B.normalized,lt=B.itemSize,ht=e.get(B);if(ht===void 0)continue;let _t=ht.buffer,Ut=ht.type,Xt=ht.bytesPerElement,Ht=n.isWebGL2===!0&&(Ut===r.INT||Ut===r.UNSIGNED_INT||B.gpuType===b0);if(B.isInterleavedBufferAttribute){let ne=B.data,J=ne.stride,Ge=B.offset;if(ne.isInstancedInterleavedBuffer){for(let Ot=0;Ot<it.locationSize;Ot++)M(it.location+Ot,ne.meshPerAttribute);P.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Ot=0;Ot<it.locationSize;Ot++)_(it.location+Ot);r.bindBuffer(r.ARRAY_BUFFER,_t);for(let Ot=0;Ot<it.locationSize;Ot++)w(it.location+Ot,lt/it.locationSize,Ut,Z,J*Xt,(Ge+lt/it.locationSize*Ot)*Xt,Ht)}else{if(B.isInstancedBufferAttribute){for(let ne=0;ne<it.locationSize;ne++)M(it.location+ne,B.meshPerAttribute);P.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let ne=0;ne<it.locationSize;ne++)_(it.location+ne);r.bindBuffer(r.ARRAY_BUFFER,_t);for(let ne=0;ne<it.locationSize;ne++)w(it.location+ne,lt/it.locationSize,Ut,Z,lt*Xt,lt/it.locationSize*ne*Xt,Ht)}}else if(W!==void 0){let Z=W[j];if(Z!==void 0)switch(Z.length){case 2:r.vertexAttrib2fv(it.location,Z);break;case 3:r.vertexAttrib3fv(it.location,Z);break;case 4:r.vertexAttrib4fv(it.location,Z);break;default:r.vertexAttrib1fv(it.location,Z)}}}}y()}function E(){F();for(let P in o){let C=o[P];for(let I in C){let N=C[I];for(let U in N)g(N[U].object),delete N[U];delete C[I]}delete o[P]}}function A(P){if(o[P.id]===void 0)return;let C=o[P.id];for(let I in C){let N=C[I];for(let U in N)g(N[U].object),delete N[U];delete C[I]}delete o[P.id]}function D(P){for(let C in o){let I=o[C];if(I[P.id]===void 0)continue;let N=I[P.id];for(let U in N)g(N[U].object),delete N[U];delete I[P.id]}}function F(){k(),h=!0,l!==c&&(l=c,d(l.object))}function k(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:F,resetDefaultState:k,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfProgram:D,initAttributes:b,enableAttribute:_,disableUnusedAttributes:y}}function C1(r,t,e,n){let i=n.isWebGL2,s;function a(h){s=h}function o(h,f){r.drawArrays(s,h,f),e.update(f,s,1)}function c(h,f,u){if(u===0)return;let d,g;if(i)d=r,g="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[g](s,h,f,u),e.update(f,s,u)}function l(h,f,u){if(u===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<u;g++)this.render(h[g],f[g]);else{d.multiDrawArraysWEBGL(s,h,0,f,0,u);let g=0;for(let v=0;v<u;v++)g+=f[v];e.update(g,s,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=l}function P1(r,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext",o=e.precision!==void 0?e.precision:"highp",c=s(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);let l=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),u=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),m=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),p=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),b=u>0,_=a||t.has("OES_texture_float"),M=b&&_,y=a?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:u,maxTextureSize:d,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:x,vertexTextures:b,floatFragmentTextures:_,floatVertexTextures:M,maxSamples:y}}function L1(r){let t=this,e=null,n=0,i=!1,s=!1,a=new Mi,o=new le,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||n!==0||i;return i=u,n=f.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){let g=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,p=r.get(f);if(!i||g===null||g.length===0||s&&!m)s?h(null):l();else{let x=s?0:n,b=x*4,_=p.clippingState||null;c.value=_,_=h(g,u,b,d);for(let M=0;M!==b;++M)_[M]=e[M];p.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,d,g){let v=f!==null?f.length:0,m=null;if(v!==0){if(m=c.value,g!==!0||m===null){let p=d+v*4,x=u.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,_=d;b!==v;++b,_+=4)a.copy(f[b]).applyMatrix4(x,o),a.normal.toArray(m,_),m[_+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function I1(r){let t=new WeakMap;function e(a,o){return o===wu?a.mapping=ea:o===Tu&&(a.mapping=na),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===wu||o===Tu)if(t.has(a)){let c=t.get(a).texture;return e(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new Iu(c.height/2);return l.fromEquirectangularTexture(r,a),t.set(a,l),a.addEventListener("dispose",i),e(l.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}var Ps=class extends Kc{constructor(t=-1,e=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,a=n+t,o=i+e,c=i-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Jr=4,Sm=[.125,.215,.35,.446,.526,.582],rr=20,cu=new Ps,Am=new et,lu=null,hu=0,uu=0,sr=(1+Math.sqrt(5))/2,Gr=1/sr,Rm=[new T(1,1,1),new T(-1,1,1),new T(1,1,-1),new T(-1,1,-1),new T(0,sr,Gr),new T(0,sr,-Gr),new T(Gr,0,sr),new T(-Gr,0,sr),new T(sr,Gr,0),new T(-sr,Gr,0)],oa=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){lu=this._renderer.getRenderTarget(),hu=this._renderer.getActiveCubeFace(),uu=this._renderer.getActiveMipmapLevel(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(lu,hu,uu),t.scissorTest=!1,Tc(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ea||t.mapping===na?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),lu=this._renderer.getRenderTarget(),hu=this._renderer.getActiveCubeFace(),uu=this._renderer.getActiveMipmapLevel();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:an,minFilter:an,generateMipmaps:!1,type:Vn,format:li,colorSpace:hn,depthBuffer:!1},i=Cm(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cm(t,e,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=D1(s)),this._blurMaterial=F1(s,t,e)}return i}_compileMaterial(t){let e=new kt(this._lodPlanes[0],t);this._renderer.compile(e,cu)}_sceneToCubeUV(t,e,n,i){let o=new Oe(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,u=h.toneMapping;h.getClearColor(Am),h.toneMapping=Cs,h.autoClear=!1;let d=new Je({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1}),g=new kt(new re,d),v=!1,m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,v=!0):(d.color.copy(Am),v=!0);for(let p=0;p<6;p++){let x=p%3;x===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):x===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));let b=this._cubeSize;Tc(i,x*b,p>2?b:0,b,b),h.setRenderTarget(i),v&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=f,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===ea||t.mapping===na;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lm()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pm());let s=i?this._cubemapMaterial:this._equirectMaterial,a=new kt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;let c=this._cubeSize;Tc(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,cu)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Rm[(i-1)%Rm.length];this._blur(t,i-1,i,s,a)}e.autoClear=n}_blur(t,e,n,i,s){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",s),this._halfBlur(a,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,f=new kt(this._lodPlanes[i],l),u=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*rr-1),v=s/g,m=isFinite(s)?1+Math.floor(h*v):rr;m>rr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${rr}`);let p=[],x=0;for(let w=0;w<rr;++w){let L=w/v,E=Math.exp(-L*L/2);p.push(E),w===0?x+=E:w<m&&(x+=2*E)}for(let w=0;w<p.length;w++)p[w]=p[w]/x;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:b}=this;u.dTheta.value=g,u.mipInt.value=b-n;let _=this._sizeLods[i],M=3*_*(i>b-Jr?i-b+Jr:0),y=4*(this._cubeSize-_);Tc(e,M,y,3*_,2*_),c.setRenderTarget(e),c.render(f,cu)}};function D1(r){let t=[],e=[],n=[],i=r,s=r-Jr+1+Sm.length;for(let a=0;a<s;a++){let o=Math.pow(2,i);e.push(o);let c=1/o;a>r-Jr?c=Sm[a-r+Jr-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),h=-l,f=1+l,u=[h,h,f,h,f,f,h,h,f,f,h,f],d=6,g=6,v=3,m=2,p=1,x=new Float32Array(v*g*d),b=new Float32Array(m*g*d),_=new Float32Array(p*g*d);for(let y=0;y<d;y++){let w=y%3*2/3-1,L=y>2?0:-1,E=[w,L,0,w+2/3,L,0,w+2/3,L+1,0,w,L,0,w+2/3,L+1,0,w,L+1,0];x.set(E,v*g*y),b.set(u,m*g*y);let A=[y,y,y,y,y,y];_.set(A,p*g*y)}let M=new Tt;M.setAttribute("position",new Et(x,v)),M.setAttribute("uv",new Et(b,m)),M.setAttribute("faceIndex",new Et(_,p)),t.push(M),i>Jr&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Cm(r,t,e){let n=new xn(r,t,e);return n.texture.mapping=fl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Tc(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function F1(r,t,e){let n=new Float32Array(rr),i=new T(0,1,0);return new ve({name:"SphericalGaussianBlur",defines:{n:rr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Cf(),fragmentShader:`

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
		`,blending:Rs,depthTest:!1,depthWrite:!1})}function Pm(){return new ve({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cf(),fragmentShader:`

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
		`,blending:Rs,depthTest:!1,depthWrite:!1})}function Lm(){return new ve({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rs,depthTest:!1,depthWrite:!1})}function Cf(){return`

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
	`}function H1(r){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===wu||c===Tu,h=c===ea||c===na;if(l||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=t.get(o);return e===null&&(e=new oa(r)),f=l?e.fromEquirectangular(o,f):e.fromCubemap(o,f),t.set(o,f),f.texture}else{if(t.has(o))return t.get(o).texture;{let f=o.image;if(l&&f&&f.height>0||h&&f&&i(f)){e===null&&(e=new oa(r));let u=l?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,u),o.addEventListener("dispose",s),u.texture}else return null}}}return o}function i(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function s(o){let c=o.target;c.removeEventListener("dispose",s);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function N1(r){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function k1(r,t,e,n){let i={},s=new WeakMap;function a(f){let u=f.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);for(let g in u.morphAttributes){let v=u.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)t.remove(v[m])}u.removeEventListener("dispose",a),delete i[u.id];let d=s.get(u);d&&(t.remove(d),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(f,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,e.memory.geometries++),u}function c(f){let u=f.attributes;for(let g in u)t.update(u[g],r.ARRAY_BUFFER);let d=f.morphAttributes;for(let g in d){let v=d[g];for(let m=0,p=v.length;m<p;m++)t.update(v[m],r.ARRAY_BUFFER)}}function l(f){let u=[],d=f.index,g=f.attributes.position,v=0;if(d!==null){let x=d.array;v=d.version;for(let b=0,_=x.length;b<_;b+=3){let M=x[b+0],y=x[b+1],w=x[b+2];u.push(M,y,y,w,w,M)}}else if(g!==void 0){let x=g.array;v=g.version;for(let b=0,_=x.length/3-1;b<_;b+=3){let M=b+0,y=b+1,w=b+2;u.push(M,y,y,w,w,M)}}else return;let m=new(C0(u)?Yc:jc)(u,1);m.version=v;let p=s.get(f);p&&t.remove(p),s.set(f,m)}function h(f){let u=s.get(f);if(u){let d=f.index;d!==null&&u.version<d.version&&l(f)}else l(f);return s.get(f)}return{get:o,update:c,getWireframeAttribute:h}}function U1(r,t,e,n){let i=n.isWebGL2,s;function a(d){s=d}let o,c;function l(d){o=d.type,c=d.bytesPerElement}function h(d,g){r.drawElements(s,g,o,d*c),e.update(g,s,1)}function f(d,g,v){if(v===0)return;let m,p;if(i)m=r,p="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](s,g,o,d*c,v),e.update(g,s,v)}function u(d,g,v){if(v===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<v;p++)this.render(d[p]/c,g[p]);else{m.multiDrawElementsWEBGL(s,g,0,o,d,0,v);let p=0;for(let x=0;x<v;x++)p+=g[x];e.update(p,s,1)}}this.setMode=a,this.setIndex=l,this.render=h,this.renderInstances=f,this.renderMultiDraw=u}function O1(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function z1(r,t){return r[0]-t[0]}function B1(r,t){return Math.abs(t[1])-Math.abs(r[1])}function G1(r,t,e){let n={},i=new Float32Array(8),s=new WeakMap,a=new he,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,h,f){let u=l.morphTargetInfluences;if(t.isWebGL2===!0){let d=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=d!==void 0?d.length:0,v=s.get(h);if(v===void 0||v.count!==g){let P=function(){F.dispose(),s.delete(h),h.removeEventListener("dispose",P)};v!==void 0&&v.texture.dispose();let x=h.morphAttributes.position!==void 0,b=h.morphAttributes.normal!==void 0,_=h.morphAttributes.color!==void 0,M=h.morphAttributes.position||[],y=h.morphAttributes.normal||[],w=h.morphAttributes.color||[],L=0;x===!0&&(L=1),b===!0&&(L=2),_===!0&&(L=3);let E=h.attributes.position.count*L,A=1;E>t.maxTextureSize&&(A=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);let D=new Float32Array(E*A*4*g),F=new Xc(D,E,A,g);F.type=rs,F.needsUpdate=!0;let k=L*4;for(let C=0;C<g;C++){let I=M[C],N=y[C],U=w[C],z=E*A*4*C;for(let W=0;W<I.count;W++){let j=W*k;x===!0&&(a.fromBufferAttribute(I,W),D[z+j+0]=a.x,D[z+j+1]=a.y,D[z+j+2]=a.z,D[z+j+3]=0),b===!0&&(a.fromBufferAttribute(N,W),D[z+j+4]=a.x,D[z+j+5]=a.y,D[z+j+6]=a.z,D[z+j+7]=0),_===!0&&(a.fromBufferAttribute(U,W),D[z+j+8]=a.x,D[z+j+9]=a.y,D[z+j+10]=a.z,D[z+j+11]=U.itemSize===4?a.w:1)}}v={count:g,texture:F,size:new at(E,A)},s.set(h,v),h.addEventListener("dispose",P)}let m=0;for(let x=0;x<u.length;x++)m+=u[x];let p=h.morphTargetsRelative?1:1-m;f.getUniforms().setValue(r,"morphTargetBaseInfluence",p),f.getUniforms().setValue(r,"morphTargetInfluences",u),f.getUniforms().setValue(r,"morphTargetsTexture",v.texture,e),f.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}else{let d=u===void 0?0:u.length,g=n[h.id];if(g===void 0||g.length!==d){g=[];for(let b=0;b<d;b++)g[b]=[b,0];n[h.id]=g}for(let b=0;b<d;b++){let _=g[b];_[0]=b,_[1]=u[b]}g.sort(B1);for(let b=0;b<8;b++)b<d&&g[b][1]?(o[b][0]=g[b][0],o[b][1]=g[b][1]):(o[b][0]=Number.MAX_SAFE_INTEGER,o[b][1]=0);o.sort(z1);let v=h.morphAttributes.position,m=h.morphAttributes.normal,p=0;for(let b=0;b<8;b++){let _=o[b],M=_[0],y=_[1];M!==Number.MAX_SAFE_INTEGER&&y?(v&&h.getAttribute("morphTarget"+b)!==v[M]&&h.setAttribute("morphTarget"+b,v[M]),m&&h.getAttribute("morphNormal"+b)!==m[M]&&h.setAttribute("morphNormal"+b,m[M]),i[b]=y,p+=y):(v&&h.hasAttribute("morphTarget"+b)===!0&&h.deleteAttribute("morphTarget"+b),m&&h.hasAttribute("morphNormal"+b)===!0&&h.deleteAttribute("morphNormal"+b),i[b]=0)}let x=h.morphTargetsRelative?1:1-p;f.getUniforms().setValue(r,"morphTargetBaseInfluence",x),f.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:c}}function V1(r,t,e,n){let i=new WeakMap;function s(c){let l=n.render.frame,h=c.geometry,f=t.get(c,h);if(i.get(f)!==l&&(t.update(f),i.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(e.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){let u=c.skeleton;i.get(u)!==l&&(u.update(),i.set(u,l))}return f}function a(){i=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:a}}var ca=class extends Mn{constructor(t,e,n,i,s,a,o,c,l,h){if(h=h!==void 0?h:cr,h!==cr&&h!==ia)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===cr&&(n=Fi),n===void 0&&h===ia&&(n=or),super(null,i,s,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:tn,this.minFilter=c!==void 0?c:tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},D0=new Mn,F0=new ca(1,1);F0.compareFunction=R0;var H0=new Xc,N0=new Pu,k0=new Jc,Im=[],Dm=[],Fm=new Float32Array(16),Hm=new Float32Array(9),Nm=new Float32Array(4);function ga(r,t,e){let n=r[0];if(n<=0||n>0)return r;let i=t*e,s=Im[i];if(s===void 0&&(s=new Float32Array(i),Im[i]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function un(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function fn(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function ml(r,t){let e=Dm[t];e===void 0&&(e=new Int32Array(t),Dm[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function W1(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function q1(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(un(e,t))return;r.uniform2fv(this.addr,t),fn(e,t)}}function X1(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(un(e,t))return;r.uniform3fv(this.addr,t),fn(e,t)}}function j1(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(un(e,t))return;r.uniform4fv(this.addr,t),fn(e,t)}}function Y1(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(un(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),fn(e,t)}else{if(un(e,n))return;Nm.set(n),r.uniformMatrix2fv(this.addr,!1,Nm),fn(e,n)}}function K1(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(un(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),fn(e,t)}else{if(un(e,n))return;Hm.set(n),r.uniformMatrix3fv(this.addr,!1,Hm),fn(e,n)}}function J1(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(un(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),fn(e,t)}else{if(un(e,n))return;Fm.set(n),r.uniformMatrix4fv(this.addr,!1,Fm),fn(e,n)}}function Z1(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function Q1(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(un(e,t))return;r.uniform2iv(this.addr,t),fn(e,t)}}function $1(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(un(e,t))return;r.uniform3iv(this.addr,t),fn(e,t)}}function tM(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(un(e,t))return;r.uniform4iv(this.addr,t),fn(e,t)}}function eM(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function nM(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(un(e,t))return;r.uniform2uiv(this.addr,t),fn(e,t)}}function iM(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(un(e,t))return;r.uniform3uiv(this.addr,t),fn(e,t)}}function sM(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(un(e,t))return;r.uniform4uiv(this.addr,t),fn(e,t)}}function rM(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s=this.type===r.SAMPLER_2D_SHADOW?F0:D0;e.setTexture2D(t||s,i)}function aM(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||N0,i)}function oM(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||k0,i)}function cM(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||H0,i)}function lM(r){switch(r){case 5126:return W1;case 35664:return q1;case 35665:return X1;case 35666:return j1;case 35674:return Y1;case 35675:return K1;case 35676:return J1;case 5124:case 35670:return Z1;case 35667:case 35671:return Q1;case 35668:case 35672:return $1;case 35669:case 35673:return tM;case 5125:return eM;case 36294:return nM;case 36295:return iM;case 36296:return sM;case 35678:case 36198:case 36298:case 36306:case 35682:return rM;case 35679:case 36299:case 36307:return aM;case 35680:case 36300:case 36308:case 36293:return oM;case 36289:case 36303:case 36311:case 36292:return cM}}function hM(r,t){r.uniform1fv(this.addr,t)}function uM(r,t){let e=ga(t,this.size,2);r.uniform2fv(this.addr,e)}function fM(r,t){let e=ga(t,this.size,3);r.uniform3fv(this.addr,e)}function dM(r,t){let e=ga(t,this.size,4);r.uniform4fv(this.addr,e)}function pM(r,t){let e=ga(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function mM(r,t){let e=ga(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function gM(r,t){let e=ga(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function vM(r,t){r.uniform1iv(this.addr,t)}function xM(r,t){r.uniform2iv(this.addr,t)}function bM(r,t){r.uniform3iv(this.addr,t)}function yM(r,t){r.uniform4iv(this.addr,t)}function _M(r,t){r.uniform1uiv(this.addr,t)}function MM(r,t){r.uniform2uiv(this.addr,t)}function EM(r,t){r.uniform3uiv(this.addr,t)}function wM(r,t){r.uniform4uiv(this.addr,t)}function TM(r,t,e){let n=this.cache,i=t.length,s=ml(e,i);un(n,s)||(r.uniform1iv(this.addr,s),fn(n,s));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||D0,s[a])}function SM(r,t,e){let n=this.cache,i=t.length,s=ml(e,i);un(n,s)||(r.uniform1iv(this.addr,s),fn(n,s));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||N0,s[a])}function AM(r,t,e){let n=this.cache,i=t.length,s=ml(e,i);un(n,s)||(r.uniform1iv(this.addr,s),fn(n,s));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||k0,s[a])}function RM(r,t,e){let n=this.cache,i=t.length,s=ml(e,i);un(n,s)||(r.uniform1iv(this.addr,s),fn(n,s));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||H0,s[a])}function CM(r){switch(r){case 5126:return hM;case 35664:return uM;case 35665:return fM;case 35666:return dM;case 35674:return pM;case 35675:return mM;case 35676:return gM;case 5124:case 35670:return vM;case 35667:case 35671:return xM;case 35668:case 35672:return bM;case 35669:case 35673:return yM;case 5125:return _M;case 36294:return MM;case 36295:return EM;case 36296:return wM;case 35678:case 36198:case 36298:case 36306:case 35682:return TM;case 35679:case 36299:case 36307:return SM;case 35680:case 36300:case 36308:case 36293:return AM;case 36289:case 36303:case 36311:case 36292:return RM}}var Du=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=lM(e.type)}},Fu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=CM(e.type)}},Hu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,a=i.length;s!==a;++s){let o=i[s];o.setValue(t,e[o.id],n)}}},fu=/(\w+)(\])?(\[|\.)?/g;function km(r,t){r.seq.push(t),r.map[t.id]=t}function PM(r,t,e){let n=r.name,i=n.length;for(fu.lastIndex=0;;){let s=fu.exec(n),a=fu.lastIndex,o=s[1],c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){km(e,l===void 0?new Du(o,r,t):new Fu(o,r,t));break}else{let f=e.map[o];f===void 0&&(f=new Hu(o),km(e,f)),e=f}}}var ta=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let s=t.getActiveUniform(e,i),a=t.getUniformLocation(e,s.name);PM(s,a,this)}}setValue(t,e,n,i){let s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,a=e.length;s!==a;++s){let o=e[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let a=t[i];a.id in e&&n.push(a)}return n}};function Um(r,t,e){let n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}var LM=37297,IM=0;function DM(r,t){let e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=i;a<s;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function FM(r){let t=ge.getPrimaries(ge.workingColorSpace),e=ge.getPrimaries(r),n;switch(t===e?n="":t===Bc&&e===zc?n="LinearDisplayP3ToLinearSRGB":t===zc&&e===Bc&&(n="LinearSRGBToLinearDisplayP3"),r){case hn:case pl:return[n,"LinearTransferOETF"];case ue:case Af:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function Om(r,t,e){let n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let a=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+DM(r.getShaderSource(t),a)}else return i}function HM(r,t){let e=FM(t);return`vec4 ${r}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function NM(r,t){let e;switch(t){case Bx:e="Linear";break;case Gx:e="Reinhard";break;case Vx:e="OptimizedCineon";break;case bf:e="ACESFilmic";break;case qx:e="AgX";break;case Wx:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function kM(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Zr).join(`
`)}function UM(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Zr).join(`
`)}function OM(r){let t=[];for(let e in r){let n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function zM(r,t){let e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(t,i),a=s.name,o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function Zr(r){return r!==""}function zm(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Bm(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var BM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nu(r){return r.replace(BM,VM)}var GM=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function VM(r,t){let e=Jt[t];if(e===void 0){let n=GM.get(t);if(n!==void 0)e=Jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Nu(e)}var WM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gm(r){return r.replace(WM,qM)}function qM(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Vm(r){let t="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function XM(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===v0?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===pf?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===is&&(t="SHADOWMAP_TYPE_VSM"),t}function jM(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ea:case na:t="ENVMAP_TYPE_CUBE";break;case fl:t="ENVMAP_TYPE_CUBE_UV";break}return t}function YM(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case na:t="ENVMAP_MODE_REFRACTION";break}return t}function KM(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case xf:t="ENVMAP_BLENDING_MULTIPLY";break;case Ox:t="ENVMAP_BLENDING_MIX";break;case zx:t="ENVMAP_BLENDING_ADD";break}return t}function JM(r){let t=r.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function ZM(r,t,e,n){let i=r.getContext(),s=e.defines,a=e.vertexShader,o=e.fragmentShader,c=XM(e),l=jM(e),h=YM(e),f=KM(e),u=JM(e),d=e.isWebGL2?"":kM(e),g=UM(e),v=OM(s),m=i.createProgram(),p,x,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Zr).join(`
`),p.length>0&&(p+=`
`),x=[d,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Zr).join(`
`),x.length>0&&(x+=`
`)):(p=[Vm(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zr).join(`
`),x=[d,Vm(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Cs?"#define TONE_MAPPING":"",e.toneMapping!==Cs?Jt.tonemapping_pars_fragment:"",e.toneMapping!==Cs?NM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,HM("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Zr).join(`
`)),a=Nu(a),a=zm(a,e),a=Bm(a,e),o=Nu(o),o=zm(o,e),o=Bm(o,e),a=Gm(a),o=Gm(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,x=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===cm?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===cm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);let _=b+p+a,M=b+x+o,y=Um(i,i.VERTEX_SHADER,_),w=Um(i,i.FRAGMENT_SHADER,M);i.attachShader(m,y),i.attachShader(m,w),e.index0AttributeName!==void 0?i.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function L(F){if(r.debug.checkShaderErrors){let k=i.getProgramInfoLog(m).trim(),P=i.getShaderInfoLog(y).trim(),C=i.getShaderInfoLog(w).trim(),I=!0,N=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(I=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,m,y,w);else{let U=Om(i,y,"vertex"),z=Om(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+k+`
`+U+`
`+z)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(P===""||C==="")&&(N=!1);N&&(F.diagnostics={runnable:I,programLog:k,vertexShader:{log:P,prefix:p},fragmentShader:{log:C,prefix:x}})}i.deleteShader(y),i.deleteShader(w),E=new ta(i,m),A=zM(i,m)}let E;this.getUniforms=function(){return E===void 0&&L(this),E};let A;this.getAttributes=function(){return A===void 0&&L(this),A};let D=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=i.getProgramParameter(m,LM)),D},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=IM++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=y,this.fragmentShader=w,this}var QM=0,ku=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Uu(t),e.set(t,n)),n}},Uu=class{constructor(t){this.id=QM++,this.code=t,this.usedTimes=0}};function $M(r,t,e,n,i,s,a){let o=new uo,c=new ku,l=[],h=i.isWebGL2,f=i.logarithmicDepthBuffer,u=i.vertexTextures,d=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return E===0?"uv":`uv${E}`}function m(E,A,D,F,k){let P=F.fog,C=k.geometry,I=E.isMeshStandardMaterial?F.environment:null,N=(E.isMeshStandardMaterial?e:t).get(E.envMap||I),U=N&&N.mapping===fl?N.image.height:null,z=g[E.type];E.precision!==null&&(d=i.getMaxPrecision(E.precision),d!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",d,"instead."));let W=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,j=W!==void 0?W.length:0,it=0;C.morphAttributes.position!==void 0&&(it=1),C.morphAttributes.normal!==void 0&&(it=2),C.morphAttributes.color!==void 0&&(it=3);let B,Z,lt,ht;if(z){let Nn=Ii[z];B=Nn.vertexShader,Z=Nn.fragmentShader}else B=E.vertexShader,Z=E.fragmentShader,c.update(E),lt=c.getVertexShaderID(E),ht=c.getFragmentShaderID(E);let _t=r.getRenderTarget(),Ut=k.isInstancedMesh===!0,Xt=k.isBatchedMesh===!0,Ht=!!E.map,ne=!!E.matcap,J=!!N,Ge=!!E.aoMap,Ot=!!E.lightMap,Yt=!!E.bumpMap,It=!!E.normalMap,Pe=!!E.displacementMap,Qt=!!E.emissiveMap,R=!!E.metalnessMap,S=!!E.roughnessMap,O=E.anisotropy>0,V=E.clearcoat>0,K=E.iridescence>0,q=E.sheen>0,ot=E.transmission>0,rt=O&&!!E.anisotropyMap,ct=V&&!!E.clearcoatMap,ut=V&&!!E.clearcoatNormalMap,xt=V&&!!E.clearcoatRoughnessMap,Q=K&&!!E.iridescenceMap,wt=K&&!!E.iridescenceThicknessMap,Rt=q&&!!E.sheenColorMap,Lt=q&&!!E.sheenRoughnessMap,Mt=!!E.specularMap,pt=!!E.specularColorMap,Bt=!!E.specularIntensityMap,te=ot&&!!E.transmissionMap,se=ot&&!!E.thicknessMap,Kt=!!E.gradientMap,ft=!!E.alphaMap,G=E.alphaTest>0,bt=!!E.alphaHash,gt=!!E.extensions,qt=!!C.attributes.uv1,Gt=!!C.attributes.uv2,Te=!!C.attributes.uv3,Fe=Cs;return E.toneMapped&&(_t===null||_t.isXRRenderTarget===!0)&&(Fe=r.toneMapping),{isWebGL2:h,shaderID:z,shaderType:E.type,shaderName:E.name,vertexShader:B,fragmentShader:Z,defines:E.defines,customVertexShaderID:lt,customFragmentShaderID:ht,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:d,batching:Xt,instancing:Ut,instancingColor:Ut&&k.instanceColor!==null,supportsVertexTextures:u,outputColorSpace:_t===null?r.outputColorSpace:_t.isXRRenderTarget===!0?_t.texture.colorSpace:hn,map:Ht,matcap:ne,envMap:J,envMapMode:J&&N.mapping,envMapCubeUVHeight:U,aoMap:Ge,lightMap:Ot,bumpMap:Yt,normalMap:It,displacementMap:u&&Pe,emissiveMap:Qt,normalMapObjectSpace:It&&E.normalMapType===sb,normalMapTangentSpace:It&&E.normalMapType===Sf,metalnessMap:R,roughnessMap:S,anisotropy:O,anisotropyMap:rt,clearcoat:V,clearcoatMap:ct,clearcoatNormalMap:ut,clearcoatRoughnessMap:xt,iridescence:K,iridescenceMap:Q,iridescenceThicknessMap:wt,sheen:q,sheenColorMap:Rt,sheenRoughnessMap:Lt,specularMap:Mt,specularColorMap:pt,specularIntensityMap:Bt,transmission:ot,transmissionMap:te,thicknessMap:se,gradientMap:Kt,opaque:E.transparent===!1&&E.blending===Qr,alphaMap:ft,alphaTest:G,alphaHash:bt,combine:E.combine,mapUv:Ht&&v(E.map.channel),aoMapUv:Ge&&v(E.aoMap.channel),lightMapUv:Ot&&v(E.lightMap.channel),bumpMapUv:Yt&&v(E.bumpMap.channel),normalMapUv:It&&v(E.normalMap.channel),displacementMapUv:Pe&&v(E.displacementMap.channel),emissiveMapUv:Qt&&v(E.emissiveMap.channel),metalnessMapUv:R&&v(E.metalnessMap.channel),roughnessMapUv:S&&v(E.roughnessMap.channel),anisotropyMapUv:rt&&v(E.anisotropyMap.channel),clearcoatMapUv:ct&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:ut&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xt&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:wt&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:Lt&&v(E.sheenRoughnessMap.channel),specularMapUv:Mt&&v(E.specularMap.channel),specularColorMapUv:pt&&v(E.specularColorMap.channel),specularIntensityMapUv:Bt&&v(E.specularIntensityMap.channel),transmissionMapUv:te&&v(E.transmissionMap.channel),thicknessMapUv:se&&v(E.thicknessMap.channel),alphaMapUv:ft&&v(E.alphaMap.channel),vertexTangents:!!C.attributes.tangent&&(It||O),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,vertexUv1s:qt,vertexUv2s:Gt,vertexUv3s:Te,pointsUvs:k.isPoints===!0&&!!C.attributes.uv&&(Ht||ft),fog:!!P,useFog:E.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:k.isSkinnedMesh===!0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:it,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:r.shadowMap.enabled&&D.length>0,shadowMapType:r.shadowMap.type,toneMapping:Fe,useLegacyLights:r._useLegacyLights,decodeVideoTexture:Ht&&E.map.isVideoTexture===!0&&ge.getTransfer(E.map.colorSpace)===Ue,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===me,flipSided:E.side===_n,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:gt&&E.extensions.derivatives===!0,extensionFragDepth:gt&&E.extensions.fragDepth===!0,extensionDrawBuffers:gt&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:gt&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:gt&&E.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function p(E){let A=[];if(E.shaderID?A.push(E.shaderID):(A.push(E.customVertexShaderID),A.push(E.customFragmentShaderID)),E.defines!==void 0)for(let D in E.defines)A.push(D),A.push(E.defines[D]);return E.isRawShaderMaterial===!1&&(x(A,E),b(A,E),A.push(r.outputColorSpace)),A.push(E.customProgramCacheKey),A.join()}function x(E,A){E.push(A.precision),E.push(A.outputColorSpace),E.push(A.envMapMode),E.push(A.envMapCubeUVHeight),E.push(A.mapUv),E.push(A.alphaMapUv),E.push(A.lightMapUv),E.push(A.aoMapUv),E.push(A.bumpMapUv),E.push(A.normalMapUv),E.push(A.displacementMapUv),E.push(A.emissiveMapUv),E.push(A.metalnessMapUv),E.push(A.roughnessMapUv),E.push(A.anisotropyMapUv),E.push(A.clearcoatMapUv),E.push(A.clearcoatNormalMapUv),E.push(A.clearcoatRoughnessMapUv),E.push(A.iridescenceMapUv),E.push(A.iridescenceThicknessMapUv),E.push(A.sheenColorMapUv),E.push(A.sheenRoughnessMapUv),E.push(A.specularMapUv),E.push(A.specularColorMapUv),E.push(A.specularIntensityMapUv),E.push(A.transmissionMapUv),E.push(A.thicknessMapUv),E.push(A.combine),E.push(A.fogExp2),E.push(A.sizeAttenuation),E.push(A.morphTargetsCount),E.push(A.morphAttributeCount),E.push(A.numDirLights),E.push(A.numPointLights),E.push(A.numSpotLights),E.push(A.numSpotLightMaps),E.push(A.numHemiLights),E.push(A.numRectAreaLights),E.push(A.numDirLightShadows),E.push(A.numPointLightShadows),E.push(A.numSpotLightShadows),E.push(A.numSpotLightShadowsWithMaps),E.push(A.numLightProbes),E.push(A.shadowMapType),E.push(A.toneMapping),E.push(A.numClippingPlanes),E.push(A.numClipIntersection),E.push(A.depthPacking)}function b(E,A){o.disableAll(),A.isWebGL2&&o.enable(0),A.supportsVertexTextures&&o.enable(1),A.instancing&&o.enable(2),A.instancingColor&&o.enable(3),A.matcap&&o.enable(4),A.envMap&&o.enable(5),A.normalMapObjectSpace&&o.enable(6),A.normalMapTangentSpace&&o.enable(7),A.clearcoat&&o.enable(8),A.iridescence&&o.enable(9),A.alphaTest&&o.enable(10),A.vertexColors&&o.enable(11),A.vertexAlphas&&o.enable(12),A.vertexUv1s&&o.enable(13),A.vertexUv2s&&o.enable(14),A.vertexUv3s&&o.enable(15),A.vertexTangents&&o.enable(16),A.anisotropy&&o.enable(17),A.alphaHash&&o.enable(18),A.batching&&o.enable(19),E.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.skinning&&o.enable(4),A.morphTargets&&o.enable(5),A.morphNormals&&o.enable(6),A.morphColors&&o.enable(7),A.premultipliedAlpha&&o.enable(8),A.shadowMapEnabled&&o.enable(9),A.useLegacyLights&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),E.push(o.mask)}function _(E){let A=g[E.type],D;if(A){let F=Ii[A];D=Gb.clone(F.uniforms)}else D=E.uniforms;return D}function M(E,A){let D;for(let F=0,k=l.length;F<k;F++){let P=l[F];if(P.cacheKey===A){D=P,++D.usedTimes;break}}return D===void 0&&(D=new ZM(r,A,E,s),l.push(D)),D}function y(E){if(--E.usedTimes===0){let A=l.indexOf(E);l[A]=l[l.length-1],l.pop(),E.destroy()}}function w(E){c.remove(E)}function L(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:M,releaseProgram:y,releaseShaderCache:w,programs:l,dispose:L}}function tE(){let r=new WeakMap;function t(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function e(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function eE(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Wm(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function qm(){let r=[],t=0,e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function a(f,u,d,g,v,m){let p=r[t];return p===void 0?(p={id:f.id,object:f,geometry:u,material:d,groupOrder:g,renderOrder:f.renderOrder,z:v,group:m},r[t]=p):(p.id=f.id,p.object=f,p.geometry=u,p.material=d,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=v,p.group=m),t++,p}function o(f,u,d,g,v,m){let p=a(f,u,d,g,v,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):e.push(p)}function c(f,u,d,g,v,m){let p=a(f,u,d,g,v,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):e.unshift(p)}function l(f,u){e.length>1&&e.sort(f||eE),n.length>1&&n.sort(u||Wm),i.length>1&&i.sort(u||Wm)}function h(){for(let f=t,u=r.length;f<u;f++){let d=r[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:o,unshift:c,finish:h,sort:l}}function nE(){let r=new WeakMap;function t(n,i){let s=r.get(n),a;return s===void 0?(a=new qm,r.set(n,[a])):i>=s.length?(a=new qm,s.push(a)):a=s[i],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function iE(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new T,color:new et};break;case"SpotLight":e={position:new T,direction:new T,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new T,color:new et,distance:0,decay:0};break;case"HemisphereLight":e={direction:new T,skyColor:new et,groundColor:new et};break;case"RectAreaLight":e={color:new et,position:new T,halfWidth:new T,halfHeight:new T};break}return r[t.id]=e,e}}}function sE(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var rE=0;function aE(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function oE(r,t){let e=new iE,n=sE(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new T);let s=new T,a=new yt,o=new yt;function c(h,f){let u=0,d=0,g=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let v=0,m=0,p=0,x=0,b=0,_=0,M=0,y=0,w=0,L=0,E=0;h.sort(aE);let A=f===!0?Math.PI:1;for(let F=0,k=h.length;F<k;F++){let P=h[F],C=P.color,I=P.intensity,N=P.distance,U=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=C.r*I*A,d+=C.g*I*A,g+=C.b*I*A;else if(P.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(P.sh.coefficients[z],I);E++}else if(P.isDirectionalLight){let z=e.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity*A),P.castShadow){let W=P.shadow,j=n.get(P);j.shadowBias=W.bias,j.shadowNormalBias=W.normalBias,j.shadowRadius=W.radius,j.shadowMapSize=W.mapSize,i.directionalShadow[v]=j,i.directionalShadowMap[v]=U,i.directionalShadowMatrix[v]=P.shadow.matrix,_++}i.directional[v]=z,v++}else if(P.isSpotLight){let z=e.get(P);z.position.setFromMatrixPosition(P.matrixWorld),z.color.copy(C).multiplyScalar(I*A),z.distance=N,z.coneCos=Math.cos(P.angle),z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),z.decay=P.decay,i.spot[p]=z;let W=P.shadow;if(P.map&&(i.spotLightMap[w]=P.map,w++,W.updateMatrices(P),P.castShadow&&L++),i.spotLightMatrix[p]=W.matrix,P.castShadow){let j=n.get(P);j.shadowBias=W.bias,j.shadowNormalBias=W.normalBias,j.shadowRadius=W.radius,j.shadowMapSize=W.mapSize,i.spotShadow[p]=j,i.spotShadowMap[p]=U,y++}p++}else if(P.isRectAreaLight){let z=e.get(P);z.color.copy(C).multiplyScalar(I),z.halfWidth.set(P.width*.5,0,0),z.halfHeight.set(0,P.height*.5,0),i.rectArea[x]=z,x++}else if(P.isPointLight){let z=e.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity*A),z.distance=P.distance,z.decay=P.decay,P.castShadow){let W=P.shadow,j=n.get(P);j.shadowBias=W.bias,j.shadowNormalBias=W.normalBias,j.shadowRadius=W.radius,j.shadowMapSize=W.mapSize,j.shadowCameraNear=W.camera.near,j.shadowCameraFar=W.camera.far,i.pointShadow[m]=j,i.pointShadowMap[m]=U,i.pointShadowMatrix[m]=P.shadow.matrix,M++}i.point[m]=z,m++}else if(P.isHemisphereLight){let z=e.get(P);z.skyColor.copy(P.color).multiplyScalar(I*A),z.groundColor.copy(P.groundColor).multiplyScalar(I*A),i.hemi[b]=z,b++}}x>0&&(t.isWebGL2?r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=vt.LTC_FLOAT_1,i.rectAreaLTC2=vt.LTC_FLOAT_2):(i.rectAreaLTC1=vt.LTC_HALF_1,i.rectAreaLTC2=vt.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=vt.LTC_FLOAT_1,i.rectAreaLTC2=vt.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=vt.LTC_HALF_1,i.rectAreaLTC2=vt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=g;let D=i.hash;(D.directionalLength!==v||D.pointLength!==m||D.spotLength!==p||D.rectAreaLength!==x||D.hemiLength!==b||D.numDirectionalShadows!==_||D.numPointShadows!==M||D.numSpotShadows!==y||D.numSpotMaps!==w||D.numLightProbes!==E)&&(i.directional.length=v,i.spot.length=p,i.rectArea.length=x,i.point.length=m,i.hemi.length=b,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=y+w-L,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=E,D.directionalLength=v,D.pointLength=m,D.spotLength=p,D.rectAreaLength=x,D.hemiLength=b,D.numDirectionalShadows=_,D.numPointShadows=M,D.numSpotShadows=y,D.numSpotMaps=w,D.numLightProbes=E,i.version=rE++)}function l(h,f){let u=0,d=0,g=0,v=0,m=0,p=f.matrixWorldInverse;for(let x=0,b=h.length;x<b;x++){let _=h[x];if(_.isDirectionalLight){let M=i.directional[u];M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),u++}else if(_.isSpotLight){let M=i.spot[g];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),g++}else if(_.isRectAreaLight){let M=i.rectArea[v];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(p),o.identity(),a.copy(_.matrixWorld),a.premultiply(p),o.extractRotation(a),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),v++}else if(_.isPointLight){let M=i.point[d];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(p),d++}else if(_.isHemisphereLight){let M=i.hemi[m];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(p),m++}}}return{setup:c,setupView:l,state:i}}function Xm(r,t){let e=new oE(r,t),n=[],i=[];function s(){n.length=0,i.length=0}function a(f){n.push(f)}function o(f){i.push(f)}function c(f){e.setup(n,f)}function l(f){e.setupView(n,f)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function cE(r,t){let e=new WeakMap;function n(s,a=0){let o=e.get(s),c;return o===void 0?(c=new Xm(r,t),e.set(s,[c])):a>=o.length?(c=new Xm(r,t),o.push(c)):c=o[a],c}function i(){e=new WeakMap}return{get:n,dispose:i}}var po=class extends En{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ib,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ou=class extends En{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},lE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hE=`uniform sampler2D shadow_pass;
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
}`;function uE(r,t,e){let n=new fo,i=new at,s=new at,a=new he,o=new po({depthPacking:Tf}),c=new Ou,l={},h=e.maxTextureSize,f={[Ni]:_n,[_n]:Ni,[me]:me},u=new ve({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:lE,fragmentShader:hE}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let g=new Tt;g.setAttribute("position",new Et(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new kt(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=v0;let p=this.type;this.render=function(y,w,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||y.length===0)return;let E=r.getRenderTarget(),A=r.getActiveCubeFace(),D=r.getActiveMipmapLevel(),F=r.state;F.setBlending(Rs),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let k=p!==is&&this.type===is,P=p===is&&this.type!==is;for(let C=0,I=y.length;C<I;C++){let N=y[C],U=N.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",N,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;i.copy(U.mapSize);let z=U.getFrameExtents();if(i.multiply(z),s.copy(U.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/z.x),i.x=s.x*z.x,U.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/z.y),i.y=s.y*z.y,U.mapSize.y=s.y)),U.map===null||k===!0||P===!0){let j=this.type!==is?{minFilter:tn,magFilter:tn}:{};U.map!==null&&U.map.dispose(),U.map=new xn(i.x,i.y,j),U.map.texture.name=N.name+".shadowMap",U.camera.updateProjectionMatrix()}r.setRenderTarget(U.map),r.clear();let W=U.getViewportCount();for(let j=0;j<W;j++){let it=U.getViewport(j);a.set(s.x*it.x,s.y*it.y,s.x*it.z,s.y*it.w),F.viewport(a),U.updateMatrices(N,j),n=U.getFrustum(),_(w,L,U.camera,N,this.type)}U.isPointLightShadow!==!0&&this.type===is&&x(U,L),U.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(E,A,D)};function x(y,w){let L=t.update(v);u.defines.VSM_SAMPLES!==y.blurSamples&&(u.defines.VSM_SAMPLES=y.blurSamples,d.defines.VSM_SAMPLES=y.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new xn(i.x,i.y)),u.uniforms.shadow_pass.value=y.map.texture,u.uniforms.resolution.value=y.mapSize,u.uniforms.radius.value=y.radius,r.setRenderTarget(y.mapPass),r.clear(),r.renderBufferDirect(w,null,L,u,v,null),d.uniforms.shadow_pass.value=y.mapPass.texture,d.uniforms.resolution.value=y.mapSize,d.uniforms.radius.value=y.radius,r.setRenderTarget(y.map),r.clear(),r.renderBufferDirect(w,null,L,d,v,null)}function b(y,w,L,E){let A=null,D=L.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(D!==void 0)A=D;else if(A=L.isPointLight===!0?c:o,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let F=A.uuid,k=w.uuid,P=l[F];P===void 0&&(P={},l[F]=P);let C=P[k];C===void 0&&(C=A.clone(),P[k]=C,w.addEventListener("dispose",M)),A=C}if(A.visible=w.visible,A.wireframe=w.wireframe,E===is?A.side=w.shadowSide!==null?w.shadowSide:w.side:A.side=w.shadowSide!==null?w.shadowSide:f[w.side],A.alphaMap=w.alphaMap,A.alphaTest=w.alphaTest,A.map=w.map,A.clipShadows=w.clipShadows,A.clippingPlanes=w.clippingPlanes,A.clipIntersection=w.clipIntersection,A.displacementMap=w.displacementMap,A.displacementScale=w.displacementScale,A.displacementBias=w.displacementBias,A.wireframeLinewidth=w.wireframeLinewidth,A.linewidth=w.linewidth,L.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let F=r.properties.get(A);F.light=L}return A}function _(y,w,L,E,A){if(y.visible===!1)return;if(y.layers.test(w.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&A===is)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,y.matrixWorld);let k=t.update(y),P=y.material;if(Array.isArray(P)){let C=k.groups;for(let I=0,N=C.length;I<N;I++){let U=C[I],z=P[U.materialIndex];if(z&&z.visible){let W=b(y,z,E,A);y.onBeforeShadow(r,y,w,L,k,W,U),r.renderBufferDirect(L,null,k,W,y,U),y.onAfterShadow(r,y,w,L,k,W,U)}}}else if(P.visible){let C=b(y,P,E,A);y.onBeforeShadow(r,y,w,L,k,C,null),r.renderBufferDirect(L,null,k,C,y,null),y.onAfterShadow(r,y,w,L,k,C,null)}}let F=y.children;for(let k=0,P=F.length;k<P;k++)_(F[k],w,L,E,A)}function M(y){y.target.removeEventListener("dispose",M);for(let L in l){let E=l[L],A=y.target.uuid;A in E&&(E[A].dispose(),delete E[A])}}}function fE(r,t,e){let n=e.isWebGL2;function i(){let G=!1,bt=new he,gt=null,qt=new he(0,0,0,0);return{setMask:function(Gt){gt!==Gt&&!G&&(r.colorMask(Gt,Gt,Gt,Gt),gt=Gt)},setLocked:function(Gt){G=Gt},setClear:function(Gt,Te,Fe,mn,Nn){Nn===!0&&(Gt*=mn,Te*=mn,Fe*=mn),bt.set(Gt,Te,Fe,mn),qt.equals(bt)===!1&&(r.clearColor(Gt,Te,Fe,mn),qt.copy(bt))},reset:function(){G=!1,gt=null,qt.set(-1,0,0,0)}}}function s(){let G=!1,bt=null,gt=null,qt=null;return{setTest:function(Gt){Gt?Xt(r.DEPTH_TEST):Ht(r.DEPTH_TEST)},setMask:function(Gt){bt!==Gt&&!G&&(r.depthMask(Gt),bt=Gt)},setFunc:function(Gt){if(gt!==Gt){switch(Gt){case Ix:r.depthFunc(r.NEVER);break;case Dx:r.depthFunc(r.ALWAYS);break;case Fx:r.depthFunc(r.LESS);break;case Nc:r.depthFunc(r.LEQUAL);break;case Hx:r.depthFunc(r.EQUAL);break;case Nx:r.depthFunc(r.GEQUAL);break;case kx:r.depthFunc(r.GREATER);break;case Ux:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}gt=Gt}},setLocked:function(Gt){G=Gt},setClear:function(Gt){qt!==Gt&&(r.clearDepth(Gt),qt=Gt)},reset:function(){G=!1,bt=null,gt=null,qt=null}}}function a(){let G=!1,bt=null,gt=null,qt=null,Gt=null,Te=null,Fe=null,mn=null,Nn=null;return{setTest:function(He){G||(He?Xt(r.STENCIL_TEST):Ht(r.STENCIL_TEST))},setMask:function(He){bt!==He&&!G&&(r.stencilMask(He),bt=He)},setFunc:function(He,kn,Li){(gt!==He||qt!==kn||Gt!==Li)&&(r.stencilFunc(He,kn,Li),gt=He,qt=kn,Gt=Li)},setOp:function(He,kn,Li){(Te!==He||Fe!==kn||mn!==Li)&&(r.stencilOp(He,kn,Li),Te=He,Fe=kn,mn=Li)},setLocked:function(He){G=He},setClear:function(He){Nn!==He&&(r.clearStencil(He),Nn=He)},reset:function(){G=!1,bt=null,gt=null,qt=null,Gt=null,Te=null,Fe=null,mn=null,Nn=null}}}let o=new i,c=new s,l=new a,h=new WeakMap,f=new WeakMap,u={},d={},g=new WeakMap,v=[],m=null,p=!1,x=null,b=null,_=null,M=null,y=null,w=null,L=null,E=new et(0,0,0),A=0,D=!1,F=null,k=null,P=null,C=null,I=null,N=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),U=!1,z=0,W=r.getParameter(r.VERSION);W.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(W)[1]),U=z>=1):W.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),U=z>=2);let j=null,it={},B=r.getParameter(r.SCISSOR_BOX),Z=r.getParameter(r.VIEWPORT),lt=new he().fromArray(B),ht=new he().fromArray(Z);function _t(G,bt,gt,qt){let Gt=new Uint8Array(4),Te=r.createTexture();r.bindTexture(G,Te),r.texParameteri(G,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(G,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Fe=0;Fe<gt;Fe++)n&&(G===r.TEXTURE_3D||G===r.TEXTURE_2D_ARRAY)?r.texImage3D(bt,0,r.RGBA,1,1,qt,0,r.RGBA,r.UNSIGNED_BYTE,Gt):r.texImage2D(bt+Fe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Gt);return Te}let Ut={};Ut[r.TEXTURE_2D]=_t(r.TEXTURE_2D,r.TEXTURE_2D,1),Ut[r.TEXTURE_CUBE_MAP]=_t(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ut[r.TEXTURE_2D_ARRAY]=_t(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Ut[r.TEXTURE_3D]=_t(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Xt(r.DEPTH_TEST),c.setFunc(Nc),Qt(!1),R(Pp),Xt(r.CULL_FACE),It(Rs);function Xt(G){u[G]!==!0&&(r.enable(G),u[G]=!0)}function Ht(G){u[G]!==!1&&(r.disable(G),u[G]=!1)}function ne(G,bt){return d[G]!==bt?(r.bindFramebuffer(G,bt),d[G]=bt,n&&(G===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=bt),G===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=bt)),!0):!1}function J(G,bt){let gt=v,qt=!1;if(G)if(gt=g.get(bt),gt===void 0&&(gt=[],g.set(bt,gt)),G.isWebGLMultipleRenderTargets){let Gt=G.texture;if(gt.length!==Gt.length||gt[0]!==r.COLOR_ATTACHMENT0){for(let Te=0,Fe=Gt.length;Te<Fe;Te++)gt[Te]=r.COLOR_ATTACHMENT0+Te;gt.length=Gt.length,qt=!0}}else gt[0]!==r.COLOR_ATTACHMENT0&&(gt[0]=r.COLOR_ATTACHMENT0,qt=!0);else gt[0]!==r.BACK&&(gt[0]=r.BACK,qt=!0);qt&&(e.isWebGL2?r.drawBuffers(gt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(gt))}function Ge(G){return m!==G?(r.useProgram(G),m=G,!0):!1}let Ot={[ss]:r.FUNC_ADD,[bx]:r.FUNC_SUBTRACT,[yx]:r.FUNC_REVERSE_SUBTRACT};if(n)Ot[Dp]=r.MIN,Ot[Fp]=r.MAX;else{let G=t.get("EXT_blend_minmax");G!==null&&(Ot[Dp]=G.MIN_EXT,Ot[Fp]=G.MAX_EXT)}let Yt={[gf]:r.ZERO,[_x]:r.ONE,[vf]:r.SRC_COLOR,[Mu]:r.SRC_ALPHA,[Ax]:r.SRC_ALPHA_SATURATE,[Tx]:r.DST_COLOR,[Ex]:r.DST_ALPHA,[Mx]:r.ONE_MINUS_SRC_COLOR,[Eu]:r.ONE_MINUS_SRC_ALPHA,[Sx]:r.ONE_MINUS_DST_COLOR,[wx]:r.ONE_MINUS_DST_ALPHA,[Rx]:r.CONSTANT_COLOR,[Cx]:r.ONE_MINUS_CONSTANT_COLOR,[Px]:r.CONSTANT_ALPHA,[Lx]:r.ONE_MINUS_CONSTANT_ALPHA};function It(G,bt,gt,qt,Gt,Te,Fe,mn,Nn,He){if(G===Rs){p===!0&&(Ht(r.BLEND),p=!1);return}if(p===!1&&(Xt(r.BLEND),p=!0),G!==mf){if(G!==x||He!==D){if((b!==ss||y!==ss)&&(r.blendEquation(r.FUNC_ADD),b=ss,y=ss),He)switch(G){case Qr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Xe:r.blendFunc(r.ONE,r.ONE);break;case Lp:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ip:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Qr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Xe:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Lp:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ip:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}_=null,M=null,w=null,L=null,E.set(0,0,0),A=0,x=G,D=He}return}Gt=Gt||bt,Te=Te||gt,Fe=Fe||qt,(bt!==b||Gt!==y)&&(r.blendEquationSeparate(Ot[bt],Ot[Gt]),b=bt,y=Gt),(gt!==_||qt!==M||Te!==w||Fe!==L)&&(r.blendFuncSeparate(Yt[gt],Yt[qt],Yt[Te],Yt[Fe]),_=gt,M=qt,w=Te,L=Fe),(mn.equals(E)===!1||Nn!==A)&&(r.blendColor(mn.r,mn.g,mn.b,Nn),E.copy(mn),A=Nn),x=G,D=!1}function Pe(G,bt){G.side===me?Ht(r.CULL_FACE):Xt(r.CULL_FACE);let gt=G.side===_n;bt&&(gt=!gt),Qt(gt),G.blending===Qr&&G.transparent===!1?It(Rs):It(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),c.setFunc(G.depthFunc),c.setTest(G.depthTest),c.setMask(G.depthWrite),o.setMask(G.colorWrite);let qt=G.stencilWrite;l.setTest(qt),qt&&(l.setMask(G.stencilWriteMask),l.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),l.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),O(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?Xt(r.SAMPLE_ALPHA_TO_COVERAGE):Ht(r.SAMPLE_ALPHA_TO_COVERAGE)}function Qt(G){F!==G&&(G?r.frontFace(r.CW):r.frontFace(r.CCW),F=G)}function R(G){G!==vx?(Xt(r.CULL_FACE),G!==k&&(G===Pp?r.cullFace(r.BACK):G===xx?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ht(r.CULL_FACE),k=G}function S(G){G!==P&&(U&&r.lineWidth(G),P=G)}function O(G,bt,gt){G?(Xt(r.POLYGON_OFFSET_FILL),(C!==bt||I!==gt)&&(r.polygonOffset(bt,gt),C=bt,I=gt)):Ht(r.POLYGON_OFFSET_FILL)}function V(G){G?Xt(r.SCISSOR_TEST):Ht(r.SCISSOR_TEST)}function K(G){G===void 0&&(G=r.TEXTURE0+N-1),j!==G&&(r.activeTexture(G),j=G)}function q(G,bt,gt){gt===void 0&&(j===null?gt=r.TEXTURE0+N-1:gt=j);let qt=it[gt];qt===void 0&&(qt={type:void 0,texture:void 0},it[gt]=qt),(qt.type!==G||qt.texture!==bt)&&(j!==gt&&(r.activeTexture(gt),j=gt),r.bindTexture(G,bt||Ut[G]),qt.type=G,qt.texture=bt)}function ot(){let G=it[j];G!==void 0&&G.type!==void 0&&(r.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function rt(){try{r.compressedTexImage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ct(){try{r.compressedTexImage3D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ut(){try{r.texSubImage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function xt(){try{r.texSubImage3D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Q(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function wt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Rt(){try{r.texStorage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Lt(){try{r.texStorage3D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Mt(){try{r.texImage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function pt(){try{r.texImage3D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Bt(G){lt.equals(G)===!1&&(r.scissor(G.x,G.y,G.z,G.w),lt.copy(G))}function te(G){ht.equals(G)===!1&&(r.viewport(G.x,G.y,G.z,G.w),ht.copy(G))}function se(G,bt){let gt=f.get(bt);gt===void 0&&(gt=new WeakMap,f.set(bt,gt));let qt=gt.get(G);qt===void 0&&(qt=r.getUniformBlockIndex(bt,G.name),gt.set(G,qt))}function Kt(G,bt){let qt=f.get(bt).get(G);h.get(bt)!==qt&&(r.uniformBlockBinding(bt,qt,G.__bindingPointIndex),h.set(bt,qt))}function ft(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},j=null,it={},d={},g=new WeakMap,v=[],m=null,p=!1,x=null,b=null,_=null,M=null,y=null,w=null,L=null,E=new et(0,0,0),A=0,D=!1,F=null,k=null,P=null,C=null,I=null,lt.set(0,0,r.canvas.width,r.canvas.height),ht.set(0,0,r.canvas.width,r.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:Xt,disable:Ht,bindFramebuffer:ne,drawBuffers:J,useProgram:Ge,setBlending:It,setMaterial:Pe,setFlipSided:Qt,setCullFace:R,setLineWidth:S,setPolygonOffset:O,setScissorTest:V,activeTexture:K,bindTexture:q,unbindTexture:ot,compressedTexImage2D:rt,compressedTexImage3D:ct,texImage2D:Mt,texImage3D:pt,updateUBOMapping:se,uniformBlockBinding:Kt,texStorage2D:Rt,texStorage3D:Lt,texSubImage2D:ut,texSubImage3D:xt,compressedTexSubImage2D:Q,compressedTexSubImage3D:wt,scissor:Bt,viewport:te,reset:ft}}function dE(r,t,e,n,i,s,a){let o=i.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,f,u=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,S){return d?new OffscreenCanvas(R,S):ho("canvas")}function v(R,S,O,V){let K=1;if((R.width>V||R.height>V)&&(K=V/Math.max(R.width,R.height)),K<1||S===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){let q=S?Vc:Math.floor,ot=q(K*R.width),rt=q(K*R.height);f===void 0&&(f=g(ot,rt));let ct=O?g(ot,rt):f;return ct.width=ot,ct.height=rt,ct.getContext("2d").drawImage(R,0,0,ot,rt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+ot+"x"+rt+")."),ct}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function m(R){return Ru(R.width)&&Ru(R.height)}function p(R){return o?!1:R.wrapS!==Qn||R.wrapT!==Qn||R.minFilter!==tn&&R.minFilter!==an}function x(R,S){return R.generateMipmaps&&S&&R.minFilter!==tn&&R.minFilter!==an}function b(R){r.generateMipmap(R)}function _(R,S,O,V,K=!1){if(o===!1)return S;if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let q=S;if(S===r.RED&&(O===r.FLOAT&&(q=r.R32F),O===r.HALF_FLOAT&&(q=r.R16F),O===r.UNSIGNED_BYTE&&(q=r.R8)),S===r.RED_INTEGER&&(O===r.UNSIGNED_BYTE&&(q=r.R8UI),O===r.UNSIGNED_SHORT&&(q=r.R16UI),O===r.UNSIGNED_INT&&(q=r.R32UI),O===r.BYTE&&(q=r.R8I),O===r.SHORT&&(q=r.R16I),O===r.INT&&(q=r.R32I)),S===r.RG&&(O===r.FLOAT&&(q=r.RG32F),O===r.HALF_FLOAT&&(q=r.RG16F),O===r.UNSIGNED_BYTE&&(q=r.RG8)),S===r.RGBA){let ot=K?Oc:ge.getTransfer(V);O===r.FLOAT&&(q=r.RGBA32F),O===r.HALF_FLOAT&&(q=r.RGBA16F),O===r.UNSIGNED_BYTE&&(q=ot===Ue?r.SRGB8_ALPHA8:r.RGBA8),O===r.UNSIGNED_SHORT_4_4_4_4&&(q=r.RGBA4),O===r.UNSIGNED_SHORT_5_5_5_1&&(q=r.RGB5_A1)}return(q===r.R16F||q===r.R32F||q===r.RG16F||q===r.RG32F||q===r.RGBA16F||q===r.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function M(R,S,O){return x(R,O)===!0||R.isFramebufferTexture&&R.minFilter!==tn&&R.minFilter!==an?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function y(R){return R===tn||R===kc||R===no?r.NEAREST:r.LINEAR}function w(R){let S=R.target;S.removeEventListener("dispose",w),E(S),S.isVideoTexture&&h.delete(S)}function L(R){let S=R.target;S.removeEventListener("dispose",L),D(S)}function E(R){let S=n.get(R);if(S.__webglInit===void 0)return;let O=R.source,V=u.get(O);if(V){let K=V[S.__cacheKey];K.usedTimes--,K.usedTimes===0&&A(R),Object.keys(V).length===0&&u.delete(O)}n.remove(R)}function A(R){let S=n.get(R);r.deleteTexture(S.__webglTexture);let O=R.source,V=u.get(O);delete V[S.__cacheKey],a.memory.textures--}function D(R){let S=R.texture,O=n.get(R),V=n.get(S);if(V.__webglTexture!==void 0&&(r.deleteTexture(V.__webglTexture),a.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(O.__webglFramebuffer[K]))for(let q=0;q<O.__webglFramebuffer[K].length;q++)r.deleteFramebuffer(O.__webglFramebuffer[K][q]);else r.deleteFramebuffer(O.__webglFramebuffer[K]);O.__webglDepthbuffer&&r.deleteRenderbuffer(O.__webglDepthbuffer[K])}else{if(Array.isArray(O.__webglFramebuffer))for(let K=0;K<O.__webglFramebuffer.length;K++)r.deleteFramebuffer(O.__webglFramebuffer[K]);else r.deleteFramebuffer(O.__webglFramebuffer);if(O.__webglDepthbuffer&&r.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&r.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer)for(let K=0;K<O.__webglColorRenderbuffer.length;K++)O.__webglColorRenderbuffer[K]&&r.deleteRenderbuffer(O.__webglColorRenderbuffer[K]);O.__webglDepthRenderbuffer&&r.deleteRenderbuffer(O.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let K=0,q=S.length;K<q;K++){let ot=n.get(S[K]);ot.__webglTexture&&(r.deleteTexture(ot.__webglTexture),a.memory.textures--),n.remove(S[K])}n.remove(S),n.remove(R)}let F=0;function k(){F=0}function P(){let R=F;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),F+=1,R}function C(R){let S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function I(R,S){let O=n.get(R);if(R.isVideoTexture&&Pe(R),R.isRenderTargetTexture===!1&&R.version>0&&O.__version!==R.version){let V=R.image;if(V===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{lt(O,R,S);return}}e.bindTexture(r.TEXTURE_2D,O.__webglTexture,r.TEXTURE0+S)}function N(R,S){let O=n.get(R);if(R.version>0&&O.__version!==R.version){lt(O,R,S);return}e.bindTexture(r.TEXTURE_2D_ARRAY,O.__webglTexture,r.TEXTURE0+S)}function U(R,S){let O=n.get(R);if(R.version>0&&O.__version!==R.version){lt(O,R,S);return}e.bindTexture(r.TEXTURE_3D,O.__webglTexture,r.TEXTURE0+S)}function z(R,S){let O=n.get(R);if(R.version>0&&O.__version!==R.version){ht(O,R,S);return}e.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+S)}let W={[zn]:r.REPEAT,[Qn]:r.CLAMP_TO_EDGE,[lo]:r.MIRRORED_REPEAT},j={[tn]:r.NEAREST,[kc]:r.NEAREST_MIPMAP_NEAREST,[no]:r.NEAREST_MIPMAP_LINEAR,[an]:r.LINEAR,[yf]:r.LINEAR_MIPMAP_NEAREST,[ki]:r.LINEAR_MIPMAP_LINEAR},it={[rb]:r.NEVER,[ub]:r.ALWAYS,[ab]:r.LESS,[R0]:r.LEQUAL,[ob]:r.EQUAL,[hb]:r.GEQUAL,[cb]:r.GREATER,[lb]:r.NOTEQUAL};function B(R,S,O){if(O?(r.texParameteri(R,r.TEXTURE_WRAP_S,W[S.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,W[S.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,W[S.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,j[S.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,j[S.minFilter])):(r.texParameteri(R,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(R,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(S.wrapS!==Qn||S.wrapT!==Qn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(R,r.TEXTURE_MAG_FILTER,y(S.magFilter)),r.texParameteri(R,r.TEXTURE_MIN_FILTER,y(S.minFilter)),S.minFilter!==tn&&S.minFilter!==an&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,it[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let V=t.get("EXT_texture_filter_anisotropic");if(S.magFilter===tn||S.minFilter!==no&&S.minFilter!==ki||S.type===rs&&t.has("OES_texture_float_linear")===!1||o===!1&&S.type===Vn&&t.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(r.texParameterf(R,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function Z(R,S){let O=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",w));let V=S.source,K=u.get(V);K===void 0&&(K={},u.set(V,K));let q=C(S);if(q!==R.__cacheKey){K[q]===void 0&&(K[q]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,O=!0),K[q].usedTimes++;let ot=K[R.__cacheKey];ot!==void 0&&(K[R.__cacheKey].usedTimes--,ot.usedTimes===0&&A(S)),R.__cacheKey=q,R.__webglTexture=K[q].texture}return O}function lt(R,S,O){let V=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(V=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(V=r.TEXTURE_3D);let K=Z(R,S),q=S.source;e.bindTexture(V,R.__webglTexture,r.TEXTURE0+O);let ot=n.get(q);if(q.version!==ot.__version||K===!0){e.activeTexture(r.TEXTURE0+O);let rt=ge.getPrimaries(ge.workingColorSpace),ct=S.colorSpace===Rn?null:ge.getPrimaries(S.colorSpace),ut=S.colorSpace===Rn||rt===ct?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);let xt=p(S)&&m(S.image)===!1,Q=v(S.image,xt,!1,i.maxTextureSize);Q=Qt(S,Q);let wt=m(Q)||o,Rt=s.convert(S.format,S.colorSpace),Lt=s.convert(S.type),Mt=_(S.internalFormat,Rt,Lt,S.colorSpace,S.isVideoTexture);B(V,S,wt);let pt,Bt=S.mipmaps,te=o&&S.isVideoTexture!==!0&&Mt!==T0,se=ot.__version===void 0||K===!0,Kt=M(S,Q,wt);if(S.isDepthTexture)Mt=r.DEPTH_COMPONENT,o?S.type===rs?Mt=r.DEPTH_COMPONENT32F:S.type===Fi?Mt=r.DEPTH_COMPONENT24:S.type===or?Mt=r.DEPTH24_STENCIL8:Mt=r.DEPTH_COMPONENT16:S.type===rs&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===cr&&Mt===r.DEPTH_COMPONENT&&S.type!==_f&&S.type!==Fi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=Fi,Lt=s.convert(S.type)),S.format===ia&&Mt===r.DEPTH_COMPONENT&&(Mt=r.DEPTH_STENCIL,S.type!==or&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=or,Lt=s.convert(S.type))),se&&(te?e.texStorage2D(r.TEXTURE_2D,1,Mt,Q.width,Q.height):e.texImage2D(r.TEXTURE_2D,0,Mt,Q.width,Q.height,0,Rt,Lt,null));else if(S.isDataTexture)if(Bt.length>0&&wt){te&&se&&e.texStorage2D(r.TEXTURE_2D,Kt,Mt,Bt[0].width,Bt[0].height);for(let ft=0,G=Bt.length;ft<G;ft++)pt=Bt[ft],te?e.texSubImage2D(r.TEXTURE_2D,ft,0,0,pt.width,pt.height,Rt,Lt,pt.data):e.texImage2D(r.TEXTURE_2D,ft,Mt,pt.width,pt.height,0,Rt,Lt,pt.data);S.generateMipmaps=!1}else te?(se&&e.texStorage2D(r.TEXTURE_2D,Kt,Mt,Q.width,Q.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,Q.width,Q.height,Rt,Lt,Q.data)):e.texImage2D(r.TEXTURE_2D,0,Mt,Q.width,Q.height,0,Rt,Lt,Q.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){te&&se&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Kt,Mt,Bt[0].width,Bt[0].height,Q.depth);for(let ft=0,G=Bt.length;ft<G;ft++)pt=Bt[ft],S.format!==li?Rt!==null?te?e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ft,0,0,0,pt.width,pt.height,Q.depth,Rt,pt.data,0,0):e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ft,Mt,pt.width,pt.height,Q.depth,0,pt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):te?e.texSubImage3D(r.TEXTURE_2D_ARRAY,ft,0,0,0,pt.width,pt.height,Q.depth,Rt,Lt,pt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,ft,Mt,pt.width,pt.height,Q.depth,0,Rt,Lt,pt.data)}else{te&&se&&e.texStorage2D(r.TEXTURE_2D,Kt,Mt,Bt[0].width,Bt[0].height);for(let ft=0,G=Bt.length;ft<G;ft++)pt=Bt[ft],S.format!==li?Rt!==null?te?e.compressedTexSubImage2D(r.TEXTURE_2D,ft,0,0,pt.width,pt.height,Rt,pt.data):e.compressedTexImage2D(r.TEXTURE_2D,ft,Mt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):te?e.texSubImage2D(r.TEXTURE_2D,ft,0,0,pt.width,pt.height,Rt,Lt,pt.data):e.texImage2D(r.TEXTURE_2D,ft,Mt,pt.width,pt.height,0,Rt,Lt,pt.data)}else if(S.isDataArrayTexture)te?(se&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Kt,Mt,Q.width,Q.height,Q.depth),e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,Rt,Lt,Q.data)):e.texImage3D(r.TEXTURE_2D_ARRAY,0,Mt,Q.width,Q.height,Q.depth,0,Rt,Lt,Q.data);else if(S.isData3DTexture)te?(se&&e.texStorage3D(r.TEXTURE_3D,Kt,Mt,Q.width,Q.height,Q.depth),e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,Rt,Lt,Q.data)):e.texImage3D(r.TEXTURE_3D,0,Mt,Q.width,Q.height,Q.depth,0,Rt,Lt,Q.data);else if(S.isFramebufferTexture){if(se)if(te)e.texStorage2D(r.TEXTURE_2D,Kt,Mt,Q.width,Q.height);else{let ft=Q.width,G=Q.height;for(let bt=0;bt<Kt;bt++)e.texImage2D(r.TEXTURE_2D,bt,Mt,ft,G,0,Rt,Lt,null),ft>>=1,G>>=1}}else if(Bt.length>0&&wt){te&&se&&e.texStorage2D(r.TEXTURE_2D,Kt,Mt,Bt[0].width,Bt[0].height);for(let ft=0,G=Bt.length;ft<G;ft++)pt=Bt[ft],te?e.texSubImage2D(r.TEXTURE_2D,ft,0,0,Rt,Lt,pt):e.texImage2D(r.TEXTURE_2D,ft,Mt,Rt,Lt,pt);S.generateMipmaps=!1}else te?(se&&e.texStorage2D(r.TEXTURE_2D,Kt,Mt,Q.width,Q.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,Rt,Lt,Q)):e.texImage2D(r.TEXTURE_2D,0,Mt,Rt,Lt,Q);x(S,wt)&&b(V),ot.__version=q.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function ht(R,S,O){if(S.image.length!==6)return;let V=Z(R,S),K=S.source;e.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+O);let q=n.get(K);if(K.version!==q.__version||V===!0){e.activeTexture(r.TEXTURE0+O);let ot=ge.getPrimaries(ge.workingColorSpace),rt=S.colorSpace===Rn?null:ge.getPrimaries(S.colorSpace),ct=S.colorSpace===Rn||ot===rt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);let ut=S.isCompressedTexture||S.image[0].isCompressedTexture,xt=S.image[0]&&S.image[0].isDataTexture,Q=[];for(let ft=0;ft<6;ft++)!ut&&!xt?Q[ft]=v(S.image[ft],!1,!0,i.maxCubemapSize):Q[ft]=xt?S.image[ft].image:S.image[ft],Q[ft]=Qt(S,Q[ft]);let wt=Q[0],Rt=m(wt)||o,Lt=s.convert(S.format,S.colorSpace),Mt=s.convert(S.type),pt=_(S.internalFormat,Lt,Mt,S.colorSpace),Bt=o&&S.isVideoTexture!==!0,te=q.__version===void 0||V===!0,se=M(S,wt,Rt);B(r.TEXTURE_CUBE_MAP,S,Rt);let Kt;if(ut){Bt&&te&&e.texStorage2D(r.TEXTURE_CUBE_MAP,se,pt,wt.width,wt.height);for(let ft=0;ft<6;ft++){Kt=Q[ft].mipmaps;for(let G=0;G<Kt.length;G++){let bt=Kt[G];S.format!==li?Lt!==null?Bt?e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,G,0,0,bt.width,bt.height,Lt,bt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,G,pt,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Bt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,G,0,0,bt.width,bt.height,Lt,Mt,bt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,G,pt,bt.width,bt.height,0,Lt,Mt,bt.data)}}}else{Kt=S.mipmaps,Bt&&te&&(Kt.length>0&&se++,e.texStorage2D(r.TEXTURE_CUBE_MAP,se,pt,Q[0].width,Q[0].height));for(let ft=0;ft<6;ft++)if(xt){Bt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,Q[ft].width,Q[ft].height,Lt,Mt,Q[ft].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,pt,Q[ft].width,Q[ft].height,0,Lt,Mt,Q[ft].data);for(let G=0;G<Kt.length;G++){let gt=Kt[G].image[ft].image;Bt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,G+1,0,0,gt.width,gt.height,Lt,Mt,gt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,G+1,pt,gt.width,gt.height,0,Lt,Mt,gt.data)}}else{Bt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,Lt,Mt,Q[ft]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,pt,Lt,Mt,Q[ft]);for(let G=0;G<Kt.length;G++){let bt=Kt[G];Bt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,G+1,0,0,Lt,Mt,bt.image[ft]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,G+1,pt,Lt,Mt,bt.image[ft])}}}x(S,Rt)&&b(r.TEXTURE_CUBE_MAP),q.__version=K.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function _t(R,S,O,V,K,q){let ot=s.convert(O.format,O.colorSpace),rt=s.convert(O.type),ct=_(O.internalFormat,ot,rt,O.colorSpace);if(!n.get(S).__hasExternalTextures){let xt=Math.max(1,S.width>>q),Q=Math.max(1,S.height>>q);K===r.TEXTURE_3D||K===r.TEXTURE_2D_ARRAY?e.texImage3D(K,q,ct,xt,Q,S.depth,0,ot,rt,null):e.texImage2D(K,q,ct,xt,Q,0,ot,rt,null)}e.bindFramebuffer(r.FRAMEBUFFER,R),It(S)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,V,K,n.get(O).__webglTexture,0,Yt(S)):(K===r.TEXTURE_2D||K>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,V,K,n.get(O).__webglTexture,q),e.bindFramebuffer(r.FRAMEBUFFER,null)}function Ut(R,S,O){if(r.bindRenderbuffer(r.RENDERBUFFER,R),S.depthBuffer&&!S.stencilBuffer){let V=o===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(O||It(S)){let K=S.depthTexture;K&&K.isDepthTexture&&(K.type===rs?V=r.DEPTH_COMPONENT32F:K.type===Fi&&(V=r.DEPTH_COMPONENT24));let q=Yt(S);It(S)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,q,V,S.width,S.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,q,V,S.width,S.height)}else r.renderbufferStorage(r.RENDERBUFFER,V,S.width,S.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,R)}else if(S.depthBuffer&&S.stencilBuffer){let V=Yt(S);O&&It(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,V,r.DEPTH24_STENCIL8,S.width,S.height):It(S)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,V,r.DEPTH24_STENCIL8,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,R)}else{let V=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let K=0;K<V.length;K++){let q=V[K],ot=s.convert(q.format,q.colorSpace),rt=s.convert(q.type),ct=_(q.internalFormat,ot,rt,q.colorSpace),ut=Yt(S);O&&It(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ut,ct,S.width,S.height):It(S)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ut,ct,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,ct,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Xt(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),I(S.depthTexture,0);let V=n.get(S.depthTexture).__webglTexture,K=Yt(S);if(S.depthTexture.format===cr)It(S)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,V,0,K):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,V,0);else if(S.depthTexture.format===ia)It(S)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,V,0,K):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,V,0);else throw new Error("Unknown depthTexture format")}function Ht(R){let S=n.get(R),O=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Xt(S.__webglFramebuffer,R)}else if(O){S.__webglDepthbuffer=[];for(let V=0;V<6;V++)e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[V]),S.__webglDepthbuffer[V]=r.createRenderbuffer(),Ut(S.__webglDepthbuffer[V],R,!1)}else e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=r.createRenderbuffer(),Ut(S.__webglDepthbuffer,R,!1);e.bindFramebuffer(r.FRAMEBUFFER,null)}function ne(R,S,O){let V=n.get(R);S!==void 0&&_t(V.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),O!==void 0&&Ht(R)}function J(R){let S=R.texture,O=n.get(R),V=n.get(S);R.addEventListener("dispose",L),R.isWebGLMultipleRenderTargets!==!0&&(V.__webglTexture===void 0&&(V.__webglTexture=r.createTexture()),V.__version=S.version,a.memory.textures++);let K=R.isWebGLCubeRenderTarget===!0,q=R.isWebGLMultipleRenderTargets===!0,ot=m(R)||o;if(K){O.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(o&&S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer[rt]=[];for(let ct=0;ct<S.mipmaps.length;ct++)O.__webglFramebuffer[rt][ct]=r.createFramebuffer()}else O.__webglFramebuffer[rt]=r.createFramebuffer()}else{if(o&&S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer=[];for(let rt=0;rt<S.mipmaps.length;rt++)O.__webglFramebuffer[rt]=r.createFramebuffer()}else O.__webglFramebuffer=r.createFramebuffer();if(q)if(i.drawBuffers){let rt=R.texture;for(let ct=0,ut=rt.length;ct<ut;ct++){let xt=n.get(rt[ct]);xt.__webglTexture===void 0&&(xt.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&R.samples>0&&It(R)===!1){let rt=q?S:[S];O.__webglMultisampledFramebuffer=r.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ct=0;ct<rt.length;ct++){let ut=rt[ct];O.__webglColorRenderbuffer[ct]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,O.__webglColorRenderbuffer[ct]);let xt=s.convert(ut.format,ut.colorSpace),Q=s.convert(ut.type),wt=_(ut.internalFormat,xt,Q,ut.colorSpace,R.isXRRenderTarget===!0),Rt=Yt(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,Rt,wt,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ct,r.RENDERBUFFER,O.__webglColorRenderbuffer[ct])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(O.__webglDepthRenderbuffer=r.createRenderbuffer(),Ut(O.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(K){e.bindTexture(r.TEXTURE_CUBE_MAP,V.__webglTexture),B(r.TEXTURE_CUBE_MAP,S,ot);for(let rt=0;rt<6;rt++)if(o&&S.mipmaps&&S.mipmaps.length>0)for(let ct=0;ct<S.mipmaps.length;ct++)_t(O.__webglFramebuffer[rt][ct],R,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,ct);else _t(O.__webglFramebuffer[rt],R,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);x(S,ot)&&b(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(q){let rt=R.texture;for(let ct=0,ut=rt.length;ct<ut;ct++){let xt=rt[ct],Q=n.get(xt);e.bindTexture(r.TEXTURE_2D,Q.__webglTexture),B(r.TEXTURE_2D,xt,ot),_t(O.__webglFramebuffer,R,xt,r.COLOR_ATTACHMENT0+ct,r.TEXTURE_2D,0),x(xt,ot)&&b(r.TEXTURE_2D)}e.unbindTexture()}else{let rt=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(o?rt=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(rt,V.__webglTexture),B(rt,S,ot),o&&S.mipmaps&&S.mipmaps.length>0)for(let ct=0;ct<S.mipmaps.length;ct++)_t(O.__webglFramebuffer[ct],R,S,r.COLOR_ATTACHMENT0,rt,ct);else _t(O.__webglFramebuffer,R,S,r.COLOR_ATTACHMENT0,rt,0);x(S,ot)&&b(rt),e.unbindTexture()}R.depthBuffer&&Ht(R)}function Ge(R){let S=m(R)||o,O=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let V=0,K=O.length;V<K;V++){let q=O[V];if(x(q,S)){let ot=R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,rt=n.get(q).__webglTexture;e.bindTexture(ot,rt),b(ot),e.unbindTexture()}}}function Ot(R){if(o&&R.samples>0&&It(R)===!1){let S=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],O=R.width,V=R.height,K=r.COLOR_BUFFER_BIT,q=[],ot=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,rt=n.get(R),ct=R.isWebGLMultipleRenderTargets===!0;if(ct)for(let ut=0;ut<S.length;ut++)e.bindFramebuffer(r.FRAMEBUFFER,rt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ut,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,rt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ut,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,rt.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,rt.__webglFramebuffer);for(let ut=0;ut<S.length;ut++){q.push(r.COLOR_ATTACHMENT0+ut),R.depthBuffer&&q.push(ot);let xt=rt.__ignoreDepthValues!==void 0?rt.__ignoreDepthValues:!1;if(xt===!1&&(R.depthBuffer&&(K|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&(K|=r.STENCIL_BUFFER_BIT)),ct&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,rt.__webglColorRenderbuffer[ut]),xt===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[ot]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[ot])),ct){let Q=n.get(S[ut]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Q,0)}r.blitFramebuffer(0,0,O,V,0,0,O,V,K,r.NEAREST),l&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,q)}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ct)for(let ut=0;ut<S.length;ut++){e.bindFramebuffer(r.FRAMEBUFFER,rt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ut,r.RENDERBUFFER,rt.__webglColorRenderbuffer[ut]);let xt=n.get(S[ut]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,rt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ut,r.TEXTURE_2D,xt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,rt.__webglMultisampledFramebuffer)}}function Yt(R){return Math.min(i.maxSamples,R.samples)}function It(R){let S=n.get(R);return o&&R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Pe(R){let S=a.render.frame;h.get(R)!==S&&(h.set(R,S),R.update())}function Qt(R,S){let O=R.colorSpace,V=R.format,K=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===Au||O!==hn&&O!==Rn&&(ge.getTransfer(O)===Ue?o===!1?t.has("EXT_sRGB")===!0&&V===li?(R.format=Au,R.minFilter=an,R.generateMipmaps=!1):S=Wc.sRGBToLinear(S):(V!==li||K!==Hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),S}this.allocateTextureUnit=P,this.resetTextureUnits=k,this.setTexture2D=I,this.setTexture2DArray=N,this.setTexture3D=U,this.setTextureCube=z,this.rebindTextures=ne,this.setupRenderTarget=J,this.updateRenderTargetMipmap=Ge,this.updateMultisampleRenderTarget=Ot,this.setupDepthRenderbuffer=Ht,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=It}function pE(r,t,e){let n=e.isWebGL2;function i(s,a=Rn){let o,c=ge.getTransfer(a);if(s===Hi)return r.UNSIGNED_BYTE;if(s===y0)return r.UNSIGNED_SHORT_4_4_4_4;if(s===_0)return r.UNSIGNED_SHORT_5_5_5_1;if(s===jx)return r.BYTE;if(s===Yx)return r.SHORT;if(s===_f)return r.UNSIGNED_SHORT;if(s===b0)return r.INT;if(s===Fi)return r.UNSIGNED_INT;if(s===rs)return r.FLOAT;if(s===Vn)return n?r.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Kx)return r.ALPHA;if(s===li)return r.RGBA;if(s===Jx)return r.LUMINANCE;if(s===Zx)return r.LUMINANCE_ALPHA;if(s===cr)return r.DEPTH_COMPONENT;if(s===ia)return r.DEPTH_STENCIL;if(s===Au)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Qx)return r.RED;if(s===M0)return r.RED_INTEGER;if(s===$x)return r.RG;if(s===E0)return r.RG_INTEGER;if(s===w0)return r.RGBA_INTEGER;if(s===Oh||s===zh||s===Bh||s===Gh)if(c===Ue)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Oh)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===zh)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Bh)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Gh)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Oh)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===zh)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Bh)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Gh)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Np||s===kp||s===Up||s===Op)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Np)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===kp)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Up)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Op)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===T0)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===zp||s===Bp)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(s===zp)return c===Ue?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Bp)return c===Ue?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Gp||s===Vp||s===Wp||s===qp||s===Xp||s===jp||s===Yp||s===Kp||s===Jp||s===Zp||s===Qp||s===$p||s===tm||s===em)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Gp)return c===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Vp)return c===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Wp)return c===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===qp)return c===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Xp)return c===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===jp)return c===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Yp)return c===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Kp)return c===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Jp)return c===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Zp)return c===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Qp)return c===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===$p)return c===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===tm)return c===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===em)return c===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Vh||s===nm||s===im)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(s===Vh)return c===Ue?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===nm)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===im)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===tb||s===sm||s===rm||s===am)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(s===Vh)return o.COMPRESSED_RED_RGTC1_EXT;if(s===sm)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===rm)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===am)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===or?n?r.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}var zu=class extends Oe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Pt=class extends Ie{constructor(){super(),this.isGroup=!0,this.type="Group"}},mE={type:"move"},ao=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let v of t.hand.values()){let m=e.getJointPose(v,n),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,g=.005;l.inputState.pinching&&u>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(mE)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Pt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Bu=class extends os{constructor(t,e){super();let n=this,i=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,f=null,u=null,d=null,g=null,v=e.getContextAttributes(),m=null,p=null,x=[],b=[],_=new at,M=null,y=new Oe;y.layers.enable(1),y.viewport=new he;let w=new Oe;w.layers.enable(2),w.viewport=new he;let L=[y,w],E=new zu;E.layers.enable(1),E.layers.enable(2);let A=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let Z=x[B];return Z===void 0&&(Z=new ao,x[B]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(B){let Z=x[B];return Z===void 0&&(Z=new ao,x[B]=Z),Z.getGripSpace()},this.getHand=function(B){let Z=x[B];return Z===void 0&&(Z=new ao,x[B]=Z),Z.getHandSpace()};function F(B){let Z=b.indexOf(B.inputSource);if(Z===-1)return;let lt=x[Z];lt!==void 0&&(lt.update(B.inputSource,B.frame,l||a),lt.dispatchEvent({type:B.type,data:B.inputSource}))}function k(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",P);for(let B=0;B<x.length;B++){let Z=b[B];Z!==null&&(b[B]=null,x[B].disconnect(Z))}A=null,D=null,t.setRenderTarget(m),d=null,u=null,f=null,i=null,p=null,it.stop(),n.isPresenting=!1,t.setPixelRatio(M),t.setSize(_.width,_.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){s=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){o=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(B){l=B},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(B){if(i=B,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",k),i.addEventListener("inputsourceschange",P),v.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(_),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let Z={antialias:i.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,e,Z),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),p=new xn(d.framebufferWidth,d.framebufferHeight,{format:li,type:Hi,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil})}else{let Z=null,lt=null,ht=null;v.depth&&(ht=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Z=v.stencil?ia:cr,lt=v.stencil?or:Fi);let _t={colorFormat:e.RGBA8,depthFormat:ht,scaleFactor:s};f=new XRWebGLBinding(i,e),u=f.createProjectionLayer(_t),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),p=new xn(u.textureWidth,u.textureHeight,{format:li,type:Hi,depthTexture:new ca(u.textureWidth,u.textureHeight,lt,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0});let Ut=t.properties.get(p);Ut.__ignoreDepthValues=u.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),it.setContext(i),it.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function P(B){for(let Z=0;Z<B.removed.length;Z++){let lt=B.removed[Z],ht=b.indexOf(lt);ht>=0&&(b[ht]=null,x[ht].disconnect(lt))}for(let Z=0;Z<B.added.length;Z++){let lt=B.added[Z],ht=b.indexOf(lt);if(ht===-1){for(let Ut=0;Ut<x.length;Ut++)if(Ut>=b.length){b.push(lt),ht=Ut;break}else if(b[Ut]===null){b[Ut]=lt,ht=Ut;break}if(ht===-1)break}let _t=x[ht];_t&&_t.connect(lt)}}let C=new T,I=new T;function N(B,Z,lt){C.setFromMatrixPosition(Z.matrixWorld),I.setFromMatrixPosition(lt.matrixWorld);let ht=C.distanceTo(I),_t=Z.projectionMatrix.elements,Ut=lt.projectionMatrix.elements,Xt=_t[14]/(_t[10]-1),Ht=_t[14]/(_t[10]+1),ne=(_t[9]+1)/_t[5],J=(_t[9]-1)/_t[5],Ge=(_t[8]-1)/_t[0],Ot=(Ut[8]+1)/Ut[0],Yt=Xt*Ge,It=Xt*Ot,Pe=ht/(-Ge+Ot),Qt=Pe*-Ge;Z.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(Qt),B.translateZ(Pe),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();let R=Xt+Pe,S=Ht+Pe,O=Yt-Qt,V=It+(ht-Qt),K=ne*Ht/S*R,q=J*Ht/S*R;B.projectionMatrix.makePerspective(O,V,K,q,R,S),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}function U(B,Z){Z===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(Z.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(i===null)return;E.near=w.near=y.near=B.near,E.far=w.far=y.far=B.far,(A!==E.near||D!==E.far)&&(i.updateRenderState({depthNear:E.near,depthFar:E.far}),A=E.near,D=E.far);let Z=B.parent,lt=E.cameras;U(E,Z);for(let ht=0;ht<lt.length;ht++)U(lt[ht],Z);lt.length===2?N(E,y,w):E.projectionMatrix.copy(y.projectionMatrix),z(B,E,Z)};function z(B,Z,lt){lt===null?B.matrix.copy(Z.matrixWorld):(B.matrix.copy(lt.matrixWorld),B.matrix.invert(),B.matrix.multiply(Z.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(Z.projectionMatrix),B.projectionMatrixInverse.copy(Z.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=ra*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(u===null&&d===null))return c},this.setFoveation=function(B){c=B,u!==null&&(u.fixedFoveation=B),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=B)};let W=null;function j(B,Z){if(h=Z.getViewerPose(l||a),g=Z,h!==null){let lt=h.views;d!==null&&(t.setRenderTargetFramebuffer(p,d.framebuffer),t.setRenderTarget(p));let ht=!1;lt.length!==E.cameras.length&&(E.cameras.length=0,ht=!0);for(let _t=0;_t<lt.length;_t++){let Ut=lt[_t],Xt=null;if(d!==null)Xt=d.getViewport(Ut);else{let ne=f.getViewSubImage(u,Ut);Xt=ne.viewport,_t===0&&(t.setRenderTargetTextures(p,ne.colorTexture,u.ignoreDepthValues?void 0:ne.depthStencilTexture),t.setRenderTarget(p))}let Ht=L[_t];Ht===void 0&&(Ht=new Oe,Ht.layers.enable(_t),Ht.viewport=new he,L[_t]=Ht),Ht.matrix.fromArray(Ut.transform.matrix),Ht.matrix.decompose(Ht.position,Ht.quaternion,Ht.scale),Ht.projectionMatrix.fromArray(Ut.projectionMatrix),Ht.projectionMatrixInverse.copy(Ht.projectionMatrix).invert(),Ht.viewport.set(Xt.x,Xt.y,Xt.width,Xt.height),_t===0&&(E.matrix.copy(Ht.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),ht===!0&&E.cameras.push(Ht)}}for(let lt=0;lt<x.length;lt++){let ht=b[lt],_t=x[lt];ht!==null&&_t!==void 0&&_t.update(ht,Z,l||a)}W&&W(B,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),g=null}let it=new I0;it.setAnimationLoop(j),this.setAnimationLoop=function(B){W=B},this.dispose=function(){}}};function gE(r,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,L0(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,x,b,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),u(m,p),p.isMeshPhysicalMaterial&&d(m,p,_)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),v(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,x,b):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===_n&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===_n&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let x=t.get(p).envMap;if(x&&(m.envMap.value=x,m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let b=r._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*b,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,x,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=b*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===_n&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){let x=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function vE(r,t,e,n){let i={},s={},a=[],o=e.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(x,b){let _=b.program;n.uniformBlockBinding(x,_)}function l(x,b){let _=i[x.id];_===void 0&&(g(x),_=h(x),i[x.id]=_,x.addEventListener("dispose",m));let M=b.program;n.updateUBOMapping(x,M);let y=t.render.frame;s[x.id]!==y&&(u(x),s[x.id]=y)}function h(x){let b=f();x.__bindingPointIndex=b;let _=r.createBuffer(),M=x.__size,y=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,_),r.bufferData(r.UNIFORM_BUFFER,M,y),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,b,_),_}function f(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){let b=i[x.id],_=x.uniforms,M=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,b);for(let y=0,w=_.length;y<w;y++){let L=Array.isArray(_[y])?_[y]:[_[y]];for(let E=0,A=L.length;E<A;E++){let D=L[E];if(d(D,y,E,M)===!0){let F=D.__offset,k=Array.isArray(D.value)?D.value:[D.value],P=0;for(let C=0;C<k.length;C++){let I=k[C],N=v(I);typeof I=="number"||typeof I=="boolean"?(D.__data[0]=I,r.bufferSubData(r.UNIFORM_BUFFER,F+P,D.__data)):I.isMatrix3?(D.__data[0]=I.elements[0],D.__data[1]=I.elements[1],D.__data[2]=I.elements[2],D.__data[3]=0,D.__data[4]=I.elements[3],D.__data[5]=I.elements[4],D.__data[6]=I.elements[5],D.__data[7]=0,D.__data[8]=I.elements[6],D.__data[9]=I.elements[7],D.__data[10]=I.elements[8],D.__data[11]=0):(I.toArray(D.__data,P),P+=N.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,F,D.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(x,b,_,M){let y=x.value,w=b+"_"+_;if(M[w]===void 0)return typeof y=="number"||typeof y=="boolean"?M[w]=y:M[w]=y.clone(),!0;{let L=M[w];if(typeof y=="number"||typeof y=="boolean"){if(L!==y)return M[w]=y,!0}else if(L.equals(y)===!1)return L.copy(y),!0}return!1}function g(x){let b=x.uniforms,_=0,M=16;for(let w=0,L=b.length;w<L;w++){let E=Array.isArray(b[w])?b[w]:[b[w]];for(let A=0,D=E.length;A<D;A++){let F=E[A],k=Array.isArray(F.value)?F.value:[F.value];for(let P=0,C=k.length;P<C;P++){let I=k[P],N=v(I),U=_%M;U!==0&&M-U<N.boundary&&(_+=M-U),F.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=_,_+=N.storage}}}let y=_%M;return y>0&&(_+=M-y),x.__size=_,x.__cache={},this}function v(x){let b={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(b.boundary=4,b.storage=4):x.isVector2?(b.boundary=8,b.storage=8):x.isVector3||x.isColor?(b.boundary=16,b.storage=12):x.isVector4?(b.boundary=16,b.storage=16):x.isMatrix3?(b.boundary=48,b.storage=48):x.isMatrix4?(b.boundary=64,b.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),b}function m(x){let b=x.target;b.removeEventListener("dispose",m);let _=a.indexOf(b.__bindingPointIndex);a.splice(_,1),r.deleteBuffer(i[b.id]),delete i[b.id],delete s[b.id]}function p(){for(let x in i)r.deleteBuffer(i[x]);a=[],i={},s={}}return{bind:c,update:l,dispose:p}}var mo=class{constructor(t={}){let{canvas:e=Sb(),context:n=null,depth:i=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let u;n!==null?u=n.getContextAttributes().alpha:u=a;let d=new Uint32Array(4),g=new Int32Array(4),v=null,m=null,p=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ue,this._useLegacyLights=!1,this.toneMapping=Cs,this.toneMappingExposure=1;let b=this,_=!1,M=0,y=0,w=null,L=-1,E=null,A=new he,D=new he,F=null,k=new et(0),P=0,C=e.width,I=e.height,N=1,U=null,z=null,W=new he(0,0,C,I),j=new he(0,0,C,I),it=!1,B=new fo,Z=!1,lt=!1,ht=null,_t=new yt,Ut=new at,Xt=new T,Ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ne(){return w===null?N:1}let J=n;function Ge(H,Y){for(let tt=0;tt<H.length;tt++){let st=H[tt],$=e.getContext(st,Y);if($!==null)return $}return null}try{let H={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r160"),e.addEventListener("webglcontextlost",ft,!1),e.addEventListener("webglcontextrestored",G,!1),e.addEventListener("webglcontextcreationerror",bt,!1),J===null){let Y=["webgl2","webgl","experimental-webgl"];if(b.isWebGL1Renderer===!0&&Y.shift(),J=Ge(Y,H),J===null)throw Ge(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&J instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),J.getShaderPrecisionFormat===void 0&&(J.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(H){throw console.error("THREE.WebGLRenderer: "+H.message),H}let Ot,Yt,It,Pe,Qt,R,S,O,V,K,q,ot,rt,ct,ut,xt,Q,wt,Rt,Lt,Mt,pt,Bt,te;function se(){Ot=new N1(J),Yt=new P1(J,Ot,t),Ot.init(Yt),pt=new pE(J,Ot,Yt),It=new fE(J,Ot,Yt),Pe=new O1(J),Qt=new tE,R=new dE(J,Ot,It,Qt,Yt,pt,Pe),S=new I1(b),O=new H1(b),V=new jb(J,Yt),Bt=new R1(J,Ot,V,Yt),K=new k1(J,V,Pe,Bt),q=new V1(J,K,V,Pe),Rt=new G1(J,Yt,R),xt=new L1(Qt),ot=new $M(b,S,O,Ot,Yt,Bt,xt),rt=new gE(b,Qt),ct=new nE,ut=new cE(Ot,Yt),wt=new A1(b,S,O,It,q,u,c),Q=new uE(b,q,Yt),te=new vE(J,Pe,Yt,It),Lt=new C1(J,Ot,Pe,Yt),Mt=new U1(J,Ot,Pe,Yt),Pe.programs=ot.programs,b.capabilities=Yt,b.extensions=Ot,b.properties=Qt,b.renderLists=ct,b.shadowMap=Q,b.state=It,b.info=Pe}se();let Kt=new Bu(b,J);this.xr=Kt,this.getContext=function(){return J},this.getContextAttributes=function(){return J.getContextAttributes()},this.forceContextLoss=function(){let H=Ot.get("WEBGL_lose_context");H&&H.loseContext()},this.forceContextRestore=function(){let H=Ot.get("WEBGL_lose_context");H&&H.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(H){H!==void 0&&(N=H,this.setSize(C,I,!1))},this.getSize=function(H){return H.set(C,I)},this.setSize=function(H,Y,tt=!0){if(Kt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}C=H,I=Y,e.width=Math.floor(H*N),e.height=Math.floor(Y*N),tt===!0&&(e.style.width=H+"px",e.style.height=Y+"px"),this.setViewport(0,0,H,Y)},this.getDrawingBufferSize=function(H){return H.set(C*N,I*N).floor()},this.setDrawingBufferSize=function(H,Y,tt){C=H,I=Y,N=tt,e.width=Math.floor(H*tt),e.height=Math.floor(Y*tt),this.setViewport(0,0,H,Y)},this.getCurrentViewport=function(H){return H.copy(A)},this.getViewport=function(H){return H.copy(W)},this.setViewport=function(H,Y,tt,st){H.isVector4?W.set(H.x,H.y,H.z,H.w):W.set(H,Y,tt,st),It.viewport(A.copy(W).multiplyScalar(N).floor())},this.getScissor=function(H){return H.copy(j)},this.setScissor=function(H,Y,tt,st){H.isVector4?j.set(H.x,H.y,H.z,H.w):j.set(H,Y,tt,st),It.scissor(D.copy(j).multiplyScalar(N).floor())},this.getScissorTest=function(){return it},this.setScissorTest=function(H){It.setScissorTest(it=H)},this.setOpaqueSort=function(H){U=H},this.setTransparentSort=function(H){z=H},this.getClearColor=function(H){return H.copy(wt.getClearColor())},this.setClearColor=function(){wt.setClearColor.apply(wt,arguments)},this.getClearAlpha=function(){return wt.getClearAlpha()},this.setClearAlpha=function(){wt.setClearAlpha.apply(wt,arguments)},this.clear=function(H=!0,Y=!0,tt=!0){let st=0;if(H){let $=!1;if(w!==null){let At=w.texture.format;$=At===w0||At===E0||At===M0}if($){let At=w.texture.type,Nt=At===Hi||At===Fi||At===_f||At===or||At===y0||At===_0,jt=wt.getClearColor(),Zt=wt.getClearAlpha(),oe=jt.r,ee=jt.g,ie=jt.b;Nt?(d[0]=oe,d[1]=ee,d[2]=ie,d[3]=Zt,J.clearBufferuiv(J.COLOR,0,d)):(g[0]=oe,g[1]=ee,g[2]=ie,g[3]=Zt,J.clearBufferiv(J.COLOR,0,g))}else st|=J.COLOR_BUFFER_BIT}Y&&(st|=J.DEPTH_BUFFER_BIT),tt&&(st|=J.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ft,!1),e.removeEventListener("webglcontextrestored",G,!1),e.removeEventListener("webglcontextcreationerror",bt,!1),ct.dispose(),ut.dispose(),Qt.dispose(),S.dispose(),O.dispose(),q.dispose(),Bt.dispose(),te.dispose(),ot.dispose(),Kt.dispose(),Kt.removeEventListener("sessionstart",Nn),Kt.removeEventListener("sessionend",He),ht&&(ht.dispose(),ht=null),kn.stop()};function ft(H){H.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function G(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;let H=Pe.autoReset,Y=Q.enabled,tt=Q.autoUpdate,st=Q.needsUpdate,$=Q.type;se(),Pe.autoReset=H,Q.enabled=Y,Q.autoUpdate=tt,Q.needsUpdate=st,Q.type=$}function bt(H){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",H.statusMessage)}function gt(H){let Y=H.target;Y.removeEventListener("dispose",gt),qt(Y)}function qt(H){Gt(H),Qt.remove(H)}function Gt(H){let Y=Qt.get(H).programs;Y!==void 0&&(Y.forEach(function(tt){ot.releaseProgram(tt)}),H.isShaderMaterial&&ot.releaseShaderCache(H))}this.renderBufferDirect=function(H,Y,tt,st,$,At){Y===null&&(Y=Ht);let Nt=$.isMesh&&$.matrixWorld.determinant()<0,jt=dx(H,Y,tt,st,$);It.setMaterial(st,Nt);let Zt=tt.index,oe=1;if(st.wireframe===!0){if(Zt=K.getWireframeAttribute(tt),Zt===void 0)return;oe=2}let ee=tt.drawRange,ie=tt.attributes.position,$e=ee.start*oe,Kn=(ee.start+ee.count)*oe;At!==null&&($e=Math.max($e,At.start*oe),Kn=Math.min(Kn,(At.start+At.count)*oe)),Zt!==null?($e=Math.max($e,0),Kn=Math.min(Kn,Zt.count)):ie!=null&&($e=Math.max($e,0),Kn=Math.min(Kn,ie.count));let gn=Kn-$e;if(gn<0||gn===1/0)return;Bt.setup($,st,jt,tt,Zt);let Ji,qe=Lt;if(Zt!==null&&(Ji=V.get(Zt),qe=Mt,qe.setIndex(Ji)),$.isMesh)st.wireframe===!0?(It.setLineWidth(st.wireframeLinewidth*ne()),qe.setMode(J.LINES)):qe.setMode(J.TRIANGLES);else if($.isLine){let ce=st.linewidth;ce===void 0&&(ce=1),It.setLineWidth(ce*ne()),$.isLineSegments?qe.setMode(J.LINES):$.isLineLoop?qe.setMode(J.LINE_LOOP):qe.setMode(J.LINE_STRIP)}else $.isPoints?qe.setMode(J.POINTS):$.isSprite&&qe.setMode(J.TRIANGLES);if($.isBatchedMesh)qe.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else if($.isInstancedMesh)qe.renderInstances($e,gn,$.count);else if(tt.isInstancedBufferGeometry){let ce=tt._maxInstanceCount!==void 0?tt._maxInstanceCount:1/0,Hh=Math.min(tt.instanceCount,ce);qe.renderInstances($e,gn,Hh)}else qe.render($e,gn)};function Te(H,Y,tt){H.transparent===!0&&H.side===me&&H.forceSinglePass===!1?(H.side=_n,H.needsUpdate=!0,ic(H,Y,tt),H.side=Ni,H.needsUpdate=!0,ic(H,Y,tt),H.side=me):ic(H,Y,tt)}this.compile=function(H,Y,tt=null){tt===null&&(tt=H),m=ut.get(tt),m.init(),x.push(m),tt.traverseVisible(function($){$.isLight&&$.layers.test(Y.layers)&&(m.pushLight($),$.castShadow&&m.pushShadow($))}),H!==tt&&H.traverseVisible(function($){$.isLight&&$.layers.test(Y.layers)&&(m.pushLight($),$.castShadow&&m.pushShadow($))}),m.setupLights(b._useLegacyLights);let st=new Set;return H.traverse(function($){let At=$.material;if(At)if(Array.isArray(At))for(let Nt=0;Nt<At.length;Nt++){let jt=At[Nt];Te(jt,tt,$),st.add(jt)}else Te(At,tt,$),st.add(At)}),x.pop(),m=null,st},this.compileAsync=function(H,Y,tt=null){let st=this.compile(H,Y,tt);return new Promise($=>{function At(){if(st.forEach(function(Nt){Qt.get(Nt).currentProgram.isReady()&&st.delete(Nt)}),st.size===0){$(H);return}setTimeout(At,10)}Ot.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let Fe=null;function mn(H){Fe&&Fe(H)}function Nn(){kn.stop()}function He(){kn.start()}let kn=new I0;kn.setAnimationLoop(mn),typeof self<"u"&&kn.setContext(self),this.setAnimationLoop=function(H){Fe=H,Kt.setAnimationLoop(H),H===null?kn.stop():kn.start()},Kt.addEventListener("sessionstart",Nn),Kt.addEventListener("sessionend",He),this.render=function(H,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Kt.enabled===!0&&Kt.isPresenting===!0&&(Kt.cameraAutoUpdate===!0&&Kt.updateCamera(Y),Y=Kt.getCamera()),H.isScene===!0&&H.onBeforeRender(b,H,Y,w),m=ut.get(H,x.length),m.init(),x.push(m),_t.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),B.setFromProjectionMatrix(_t),lt=this.localClippingEnabled,Z=xt.init(this.clippingPlanes,lt),v=ct.get(H,p.length),v.init(),p.push(v),Li(H,Y,0,b.sortObjects),v.finish(),b.sortObjects===!0&&v.sort(U,z),this.info.render.frame++,Z===!0&&xt.beginShadows();let tt=m.state.shadowsArray;if(Q.render(tt,H,Y),Z===!0&&xt.endShadows(),this.info.autoReset===!0&&this.info.reset(),wt.render(v,H),m.setupLights(b._useLegacyLights),Y.isArrayCamera){let st=Y.cameras;for(let $=0,At=st.length;$<At;$++){let Nt=st[$];wp(v,H,Nt,Nt.viewport)}}else wp(v,H,Y);w!==null&&(R.updateMultisampleRenderTarget(w),R.updateRenderTargetMipmap(w)),H.isScene===!0&&H.onAfterRender(b,H,Y),Bt.resetDefaultState(),L=-1,E=null,x.pop(),x.length>0?m=x[x.length-1]:m=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function Li(H,Y,tt,st){if(H.visible===!1)return;if(H.layers.test(Y.layers)){if(H.isGroup)tt=H.renderOrder;else if(H.isLOD)H.autoUpdate===!0&&H.update(Y);else if(H.isLight)m.pushLight(H),H.castShadow&&m.pushShadow(H);else if(H.isSprite){if(!H.frustumCulled||B.intersectsSprite(H)){st&&Xt.setFromMatrixPosition(H.matrixWorld).applyMatrix4(_t);let Nt=q.update(H),jt=H.material;jt.visible&&v.push(H,Nt,jt,tt,Xt.z,null)}}else if((H.isMesh||H.isLine||H.isPoints)&&(!H.frustumCulled||B.intersectsObject(H))){let Nt=q.update(H),jt=H.material;if(st&&(H.boundingSphere!==void 0?(H.boundingSphere===null&&H.computeBoundingSphere(),Xt.copy(H.boundingSphere.center)):(Nt.boundingSphere===null&&Nt.computeBoundingSphere(),Xt.copy(Nt.boundingSphere.center)),Xt.applyMatrix4(H.matrixWorld).applyMatrix4(_t)),Array.isArray(jt)){let Zt=Nt.groups;for(let oe=0,ee=Zt.length;oe<ee;oe++){let ie=Zt[oe],$e=jt[ie.materialIndex];$e&&$e.visible&&v.push(H,Nt,$e,tt,Xt.z,ie)}}else jt.visible&&v.push(H,Nt,jt,tt,Xt.z,null)}}let At=H.children;for(let Nt=0,jt=At.length;Nt<jt;Nt++)Li(At[Nt],Y,tt,st)}function wp(H,Y,tt,st){let $=H.opaque,At=H.transmissive,Nt=H.transparent;m.setupLightsView(tt),Z===!0&&xt.setGlobalState(b.clippingPlanes,tt),At.length>0&&fx($,At,Y,tt),st&&It.viewport(A.copy(st)),$.length>0&&nc($,Y,tt),At.length>0&&nc(At,Y,tt),Nt.length>0&&nc(Nt,Y,tt),It.buffers.depth.setTest(!0),It.buffers.depth.setMask(!0),It.buffers.color.setMask(!0),It.setPolygonOffset(!1)}function fx(H,Y,tt,st){if((tt.isScene===!0?tt.overrideMaterial:null)!==null)return;let At=Yt.isWebGL2;ht===null&&(ht=new xn(1,1,{generateMipmaps:!0,type:Ot.has("EXT_color_buffer_half_float")?Vn:Hi,minFilter:ki,samples:At?4:0})),b.getDrawingBufferSize(Ut),At?ht.setSize(Ut.x,Ut.y):ht.setSize(Vc(Ut.x),Vc(Ut.y));let Nt=b.getRenderTarget();b.setRenderTarget(ht),b.getClearColor(k),P=b.getClearAlpha(),P<1&&b.setClearColor(16777215,.5),b.clear();let jt=b.toneMapping;b.toneMapping=Cs,nc(H,tt,st),R.updateMultisampleRenderTarget(ht),R.updateRenderTargetMipmap(ht);let Zt=!1;for(let oe=0,ee=Y.length;oe<ee;oe++){let ie=Y[oe],$e=ie.object,Kn=ie.geometry,gn=ie.material,Ji=ie.group;if(gn.side===me&&$e.layers.test(st.layers)){let qe=gn.side;gn.side=_n,gn.needsUpdate=!0,Tp($e,tt,st,Kn,gn,Ji),gn.side=qe,gn.needsUpdate=!0,Zt=!0}}Zt===!0&&(R.updateMultisampleRenderTarget(ht),R.updateRenderTargetMipmap(ht)),b.setRenderTarget(Nt),b.setClearColor(k,P),b.toneMapping=jt}function nc(H,Y,tt){let st=Y.isScene===!0?Y.overrideMaterial:null;for(let $=0,At=H.length;$<At;$++){let Nt=H[$],jt=Nt.object,Zt=Nt.geometry,oe=st===null?Nt.material:st,ee=Nt.group;jt.layers.test(tt.layers)&&Tp(jt,Y,tt,Zt,oe,ee)}}function Tp(H,Y,tt,st,$,At){H.onBeforeRender(b,Y,tt,st,$,At),H.modelViewMatrix.multiplyMatrices(tt.matrixWorldInverse,H.matrixWorld),H.normalMatrix.getNormalMatrix(H.modelViewMatrix),$.onBeforeRender(b,Y,tt,st,H,At),$.transparent===!0&&$.side===me&&$.forceSinglePass===!1?($.side=_n,$.needsUpdate=!0,b.renderBufferDirect(tt,Y,st,$,H,At),$.side=Ni,$.needsUpdate=!0,b.renderBufferDirect(tt,Y,st,$,H,At),$.side=me):b.renderBufferDirect(tt,Y,st,$,H,At),H.onAfterRender(b,Y,tt,st,$,At)}function ic(H,Y,tt){Y.isScene!==!0&&(Y=Ht);let st=Qt.get(H),$=m.state.lights,At=m.state.shadowsArray,Nt=$.state.version,jt=ot.getParameters(H,$.state,At,Y,tt),Zt=ot.getProgramCacheKey(jt),oe=st.programs;st.environment=H.isMeshStandardMaterial?Y.environment:null,st.fog=Y.fog,st.envMap=(H.isMeshStandardMaterial?O:S).get(H.envMap||st.environment),oe===void 0&&(H.addEventListener("dispose",gt),oe=new Map,st.programs=oe);let ee=oe.get(Zt);if(ee!==void 0){if(st.currentProgram===ee&&st.lightsStateVersion===Nt)return Ap(H,jt),ee}else jt.uniforms=ot.getUniforms(H),H.onBuild(tt,jt,b),H.onBeforeCompile(jt,b),ee=ot.acquireProgram(jt,Zt),oe.set(Zt,ee),st.uniforms=jt.uniforms;let ie=st.uniforms;return(!H.isShaderMaterial&&!H.isRawShaderMaterial||H.clipping===!0)&&(ie.clippingPlanes=xt.uniform),Ap(H,jt),st.needsLights=mx(H),st.lightsStateVersion=Nt,st.needsLights&&(ie.ambientLightColor.value=$.state.ambient,ie.lightProbe.value=$.state.probe,ie.directionalLights.value=$.state.directional,ie.directionalLightShadows.value=$.state.directionalShadow,ie.spotLights.value=$.state.spot,ie.spotLightShadows.value=$.state.spotShadow,ie.rectAreaLights.value=$.state.rectArea,ie.ltc_1.value=$.state.rectAreaLTC1,ie.ltc_2.value=$.state.rectAreaLTC2,ie.pointLights.value=$.state.point,ie.pointLightShadows.value=$.state.pointShadow,ie.hemisphereLights.value=$.state.hemi,ie.directionalShadowMap.value=$.state.directionalShadowMap,ie.directionalShadowMatrix.value=$.state.directionalShadowMatrix,ie.spotShadowMap.value=$.state.spotShadowMap,ie.spotLightMatrix.value=$.state.spotLightMatrix,ie.spotLightMap.value=$.state.spotLightMap,ie.pointShadowMap.value=$.state.pointShadowMap,ie.pointShadowMatrix.value=$.state.pointShadowMatrix),st.currentProgram=ee,st.uniformsList=null,ee}function Sp(H){if(H.uniformsList===null){let Y=H.currentProgram.getUniforms();H.uniformsList=ta.seqWithValue(Y.seq,H.uniforms)}return H.uniformsList}function Ap(H,Y){let tt=Qt.get(H);tt.outputColorSpace=Y.outputColorSpace,tt.batching=Y.batching,tt.instancing=Y.instancing,tt.instancingColor=Y.instancingColor,tt.skinning=Y.skinning,tt.morphTargets=Y.morphTargets,tt.morphNormals=Y.morphNormals,tt.morphColors=Y.morphColors,tt.morphTargetsCount=Y.morphTargetsCount,tt.numClippingPlanes=Y.numClippingPlanes,tt.numIntersection=Y.numClipIntersection,tt.vertexAlphas=Y.vertexAlphas,tt.vertexTangents=Y.vertexTangents,tt.toneMapping=Y.toneMapping}function dx(H,Y,tt,st,$){Y.isScene!==!0&&(Y=Ht),R.resetTextureUnits();let At=Y.fog,Nt=st.isMeshStandardMaterial?Y.environment:null,jt=w===null?b.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:hn,Zt=(st.isMeshStandardMaterial?O:S).get(st.envMap||Nt),oe=st.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,ee=!!tt.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),ie=!!tt.morphAttributes.position,$e=!!tt.morphAttributes.normal,Kn=!!tt.morphAttributes.color,gn=Cs;st.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(gn=b.toneMapping);let Ji=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,qe=Ji!==void 0?Ji.length:0,ce=Qt.get(st),Hh=m.state.lights;if(Z===!0&&(lt===!0||H!==E)){let oi=H===E&&st.id===L;xt.setState(st,H,oi)}let Ke=!1;st.version===ce.__version?(ce.needsLights&&ce.lightsStateVersion!==Hh.state.version||ce.outputColorSpace!==jt||$.isBatchedMesh&&ce.batching===!1||!$.isBatchedMesh&&ce.batching===!0||$.isInstancedMesh&&ce.instancing===!1||!$.isInstancedMesh&&ce.instancing===!0||$.isSkinnedMesh&&ce.skinning===!1||!$.isSkinnedMesh&&ce.skinning===!0||$.isInstancedMesh&&ce.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&ce.instancingColor===!1&&$.instanceColor!==null||ce.envMap!==Zt||st.fog===!0&&ce.fog!==At||ce.numClippingPlanes!==void 0&&(ce.numClippingPlanes!==xt.numPlanes||ce.numIntersection!==xt.numIntersection)||ce.vertexAlphas!==oe||ce.vertexTangents!==ee||ce.morphTargets!==ie||ce.morphNormals!==$e||ce.morphColors!==Kn||ce.toneMapping!==gn||Yt.isWebGL2===!0&&ce.morphTargetsCount!==qe)&&(Ke=!0):(Ke=!0,ce.__version=st.version);let Qs=ce.currentProgram;Ke===!0&&(Qs=ic(st,Y,$));let Rp=!1,qa=!1,Nh=!1,Tn=Qs.getUniforms(),$s=ce.uniforms;if(It.useProgram(Qs.program)&&(Rp=!0,qa=!0,Nh=!0),st.id!==L&&(L=st.id,qa=!0),Rp||E!==H){Tn.setValue(J,"projectionMatrix",H.projectionMatrix),Tn.setValue(J,"viewMatrix",H.matrixWorldInverse);let oi=Tn.map.cameraPosition;oi!==void 0&&oi.setValue(J,Xt.setFromMatrixPosition(H.matrixWorld)),Yt.logarithmicDepthBuffer&&Tn.setValue(J,"logDepthBufFC",2/(Math.log(H.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&Tn.setValue(J,"isOrthographic",H.isOrthographicCamera===!0),E!==H&&(E=H,qa=!0,Nh=!0)}if($.isSkinnedMesh){Tn.setOptional(J,$,"bindMatrix"),Tn.setOptional(J,$,"bindMatrixInverse");let oi=$.skeleton;oi&&(Yt.floatVertexTextures?(oi.boneTexture===null&&oi.computeBoneTexture(),Tn.setValue(J,"boneTexture",oi.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}$.isBatchedMesh&&(Tn.setOptional(J,$,"batchingTexture"),Tn.setValue(J,"batchingTexture",$._matricesTexture,R));let kh=tt.morphAttributes;if((kh.position!==void 0||kh.normal!==void 0||kh.color!==void 0&&Yt.isWebGL2===!0)&&Rt.update($,tt,Qs),(qa||ce.receiveShadow!==$.receiveShadow)&&(ce.receiveShadow=$.receiveShadow,Tn.setValue(J,"receiveShadow",$.receiveShadow)),st.isMeshGouraudMaterial&&st.envMap!==null&&($s.envMap.value=Zt,$s.flipEnvMap.value=Zt.isCubeTexture&&Zt.isRenderTargetTexture===!1?-1:1),qa&&(Tn.setValue(J,"toneMappingExposure",b.toneMappingExposure),ce.needsLights&&px($s,Nh),At&&st.fog===!0&&rt.refreshFogUniforms($s,At),rt.refreshMaterialUniforms($s,st,N,I,ht),ta.upload(J,Sp(ce),$s,R)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(ta.upload(J,Sp(ce),$s,R),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&Tn.setValue(J,"center",$.center),Tn.setValue(J,"modelViewMatrix",$.modelViewMatrix),Tn.setValue(J,"normalMatrix",$.normalMatrix),Tn.setValue(J,"modelMatrix",$.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){let oi=st.uniformsGroups;for(let Uh=0,gx=oi.length;Uh<gx;Uh++)if(Yt.isWebGL2){let Cp=oi[Uh];te.update(Cp,Qs),te.bind(Cp,Qs)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Qs}function px(H,Y){H.ambientLightColor.needsUpdate=Y,H.lightProbe.needsUpdate=Y,H.directionalLights.needsUpdate=Y,H.directionalLightShadows.needsUpdate=Y,H.pointLights.needsUpdate=Y,H.pointLightShadows.needsUpdate=Y,H.spotLights.needsUpdate=Y,H.spotLightShadows.needsUpdate=Y,H.rectAreaLights.needsUpdate=Y,H.hemisphereLights.needsUpdate=Y}function mx(H){return H.isMeshLambertMaterial||H.isMeshToonMaterial||H.isMeshPhongMaterial||H.isMeshStandardMaterial||H.isShadowMaterial||H.isShaderMaterial&&H.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(H,Y,tt){Qt.get(H.texture).__webglTexture=Y,Qt.get(H.depthTexture).__webglTexture=tt;let st=Qt.get(H);st.__hasExternalTextures=!0,st.__hasExternalTextures&&(st.__autoAllocateDepthBuffer=tt===void 0,st.__autoAllocateDepthBuffer||Ot.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),st.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(H,Y){let tt=Qt.get(H);tt.__webglFramebuffer=Y,tt.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(H,Y=0,tt=0){w=H,M=Y,y=tt;let st=!0,$=null,At=!1,Nt=!1;if(H){let Zt=Qt.get(H);Zt.__useDefaultFramebuffer!==void 0?(It.bindFramebuffer(J.FRAMEBUFFER,null),st=!1):Zt.__webglFramebuffer===void 0?R.setupRenderTarget(H):Zt.__hasExternalTextures&&R.rebindTextures(H,Qt.get(H.texture).__webglTexture,Qt.get(H.depthTexture).__webglTexture);let oe=H.texture;(oe.isData3DTexture||oe.isDataArrayTexture||oe.isCompressedArrayTexture)&&(Nt=!0);let ee=Qt.get(H).__webglFramebuffer;H.isWebGLCubeRenderTarget?(Array.isArray(ee[Y])?$=ee[Y][tt]:$=ee[Y],At=!0):Yt.isWebGL2&&H.samples>0&&R.useMultisampledRTT(H)===!1?$=Qt.get(H).__webglMultisampledFramebuffer:Array.isArray(ee)?$=ee[tt]:$=ee,A.copy(H.viewport),D.copy(H.scissor),F=H.scissorTest}else A.copy(W).multiplyScalar(N).floor(),D.copy(j).multiplyScalar(N).floor(),F=it;if(It.bindFramebuffer(J.FRAMEBUFFER,$)&&Yt.drawBuffers&&st&&It.drawBuffers(H,$),It.viewport(A),It.scissor(D),It.setScissorTest(F),At){let Zt=Qt.get(H.texture);J.framebufferTexture2D(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Zt.__webglTexture,tt)}else if(Nt){let Zt=Qt.get(H.texture),oe=Y||0;J.framebufferTextureLayer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,Zt.__webglTexture,tt||0,oe)}L=-1},this.readRenderTargetPixels=function(H,Y,tt,st,$,At,Nt){if(!(H&&H.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let jt=Qt.get(H).__webglFramebuffer;if(H.isWebGLCubeRenderTarget&&Nt!==void 0&&(jt=jt[Nt]),jt){It.bindFramebuffer(J.FRAMEBUFFER,jt);try{let Zt=H.texture,oe=Zt.format,ee=Zt.type;if(oe!==li&&pt.convert(oe)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let ie=ee===Vn&&(Ot.has("EXT_color_buffer_half_float")||Yt.isWebGL2&&Ot.has("EXT_color_buffer_float"));if(ee!==Hi&&pt.convert(ee)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ee===rs&&(Yt.isWebGL2||Ot.has("OES_texture_float")||Ot.has("WEBGL_color_buffer_float")))&&!ie){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=H.width-st&&tt>=0&&tt<=H.height-$&&J.readPixels(Y,tt,st,$,pt.convert(oe),pt.convert(ee),At)}finally{let Zt=w!==null?Qt.get(w).__webglFramebuffer:null;It.bindFramebuffer(J.FRAMEBUFFER,Zt)}}},this.copyFramebufferToTexture=function(H,Y,tt=0){let st=Math.pow(2,-tt),$=Math.floor(Y.image.width*st),At=Math.floor(Y.image.height*st);R.setTexture2D(Y,0),J.copyTexSubImage2D(J.TEXTURE_2D,tt,0,0,H.x,H.y,$,At),It.unbindTexture()},this.copyTextureToTexture=function(H,Y,tt,st=0){let $=Y.image.width,At=Y.image.height,Nt=pt.convert(tt.format),jt=pt.convert(tt.type);R.setTexture2D(tt,0),J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,tt.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,tt.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,tt.unpackAlignment),Y.isDataTexture?J.texSubImage2D(J.TEXTURE_2D,st,H.x,H.y,$,At,Nt,jt,Y.image.data):Y.isCompressedTexture?J.compressedTexSubImage2D(J.TEXTURE_2D,st,H.x,H.y,Y.mipmaps[0].width,Y.mipmaps[0].height,Nt,Y.mipmaps[0].data):J.texSubImage2D(J.TEXTURE_2D,st,H.x,H.y,Nt,jt,Y.image),st===0&&tt.generateMipmaps&&J.generateMipmap(J.TEXTURE_2D),It.unbindTexture()},this.copyTextureToTexture3D=function(H,Y,tt,st,$=0){if(b.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let At=H.max.x-H.min.x+1,Nt=H.max.y-H.min.y+1,jt=H.max.z-H.min.z+1,Zt=pt.convert(st.format),oe=pt.convert(st.type),ee;if(st.isData3DTexture)R.setTexture3D(st,0),ee=J.TEXTURE_3D;else if(st.isDataArrayTexture||st.isCompressedArrayTexture)R.setTexture2DArray(st,0),ee=J.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,st.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,st.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,st.unpackAlignment);let ie=J.getParameter(J.UNPACK_ROW_LENGTH),$e=J.getParameter(J.UNPACK_IMAGE_HEIGHT),Kn=J.getParameter(J.UNPACK_SKIP_PIXELS),gn=J.getParameter(J.UNPACK_SKIP_ROWS),Ji=J.getParameter(J.UNPACK_SKIP_IMAGES),qe=tt.isCompressedTexture?tt.mipmaps[$]:tt.image;J.pixelStorei(J.UNPACK_ROW_LENGTH,qe.width),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,qe.height),J.pixelStorei(J.UNPACK_SKIP_PIXELS,H.min.x),J.pixelStorei(J.UNPACK_SKIP_ROWS,H.min.y),J.pixelStorei(J.UNPACK_SKIP_IMAGES,H.min.z),tt.isDataTexture||tt.isData3DTexture?J.texSubImage3D(ee,$,Y.x,Y.y,Y.z,At,Nt,jt,Zt,oe,qe.data):tt.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),J.compressedTexSubImage3D(ee,$,Y.x,Y.y,Y.z,At,Nt,jt,Zt,qe.data)):J.texSubImage3D(ee,$,Y.x,Y.y,Y.z,At,Nt,jt,Zt,oe,qe),J.pixelStorei(J.UNPACK_ROW_LENGTH,ie),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,$e),J.pixelStorei(J.UNPACK_SKIP_PIXELS,Kn),J.pixelStorei(J.UNPACK_SKIP_ROWS,gn),J.pixelStorei(J.UNPACK_SKIP_IMAGES,Ji),$===0&&st.generateMipmaps&&J.generateMipmap(ee),It.unbindTexture()},this.initTexture=function(H){H.isCubeTexture?R.setTextureCube(H,0):H.isData3DTexture?R.setTexture3D(H,0):H.isDataArrayTexture||H.isCompressedArrayTexture?R.setTexture2DArray(H,0):R.setTexture2D(H,0),It.unbindTexture()},this.resetState=function(){M=0,y=0,w=null,It.reset(),Bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return as}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===Af?"display-p3":"srgb",e.unpackColorSpace=ge.workingColorSpace===pl?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ue?lr:A0}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===lr?ue:hn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},Gu=class extends mo{};Gu.prototype.isWebGL1Renderer=!0;var Zc=class r{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new et(t),this.density=e}clone(){return new r(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var cs=class extends Ie{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}},la=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Su,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Ei()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ei()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ei()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Un=new T,fr=class r{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Un.fromBufferAttribute(this,e),Un.applyMatrix4(t),this.setXYZ(e,Un.x,Un.y,Un.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Un.fromBufferAttribute(this,e),Un.applyNormalMatrix(t),this.setXYZ(e,Un.x,Un.y,Un.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Un.fromBufferAttribute(this,e),Un.transformDirection(t),this.setXYZ(e,Un.x,Un.y,Un.z);return this}setX(t,e){return this.normalized&&(e=Re(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Re(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Re(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Re(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Di(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Di(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Di(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Di(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array),i=Re(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array),i=Re(i,this.array),s=Re(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new Et(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new r(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},wn=class extends En{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new et(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Vr,Ja=new T,Wr=new T,qr=new T,Xr=new at,Za=new at,U0=new yt,Sc=new T,Qa=new T,Ac=new T,jm=new at,du=new at,Ym=new at,Cn=class extends Ie{constructor(t=new wn){if(super(),this.isSprite=!0,this.type="Sprite",Vr===void 0){Vr=new Tt;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new la(e,5);Vr.setIndex([0,1,2,0,2,3]),Vr.setAttribute("position",new fr(n,3,0,!1)),Vr.setAttribute("uv",new fr(n,2,3,!1))}this.geometry=Vr,this.material=t,this.center=new at(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Wr.setFromMatrixScale(this.matrixWorld),U0.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),qr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Wr.multiplyScalar(-qr.z);let n=this.material.rotation,i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));let a=this.center;Rc(Sc.set(-.5,-.5,0),qr,a,Wr,i,s),Rc(Qa.set(.5,-.5,0),qr,a,Wr,i,s),Rc(Ac.set(.5,.5,0),qr,a,Wr,i,s),jm.set(0,0),du.set(1,0),Ym.set(1,1);let o=t.ray.intersectTriangle(Sc,Qa,Ac,!1,Ja);if(o===null&&(Rc(Qa.set(-.5,.5,0),qr,a,Wr,i,s),du.set(0,1),o=t.ray.intersectTriangle(Sc,Ac,Qa,!1,Ja),o===null))return;let c=t.ray.origin.distanceTo(Ja);c<t.near||c>t.far||e.push({distance:c,point:Ja.clone(),uv:ar.getInterpolation(Ja,Sc,Qa,Ac,jm,du,Ym,new at),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Rc(r,t,e,n,i,s){Xr.subVectors(r,e).addScalar(.5).multiply(n),i!==void 0?(Za.x=s*Xr.x-i*Xr.y,Za.y=i*Xr.x+s*Xr.y):Za.copy(Xr),r.copy(t),r.x+=Za.x,r.y+=Za.y,r.applyMatrix4(U0)}var Km=new T,Jm=new he,Zm=new he,xE=new T,Qm=new yt,Cc=new T,pu=new $n,$m=new yt,mu=new ur,Qc=class extends kt{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Hp,this.bindMatrix=new yt,this.bindMatrixInverse=new yt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let t=this.geometry;this.boundingBox===null&&(this.boundingBox=new je),this.boundingBox.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Cc),this.boundingBox.expandByPoint(Cc)}computeBoundingSphere(){let t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new $n),this.boundingSphere.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Cc),this.boundingSphere.expandByPoint(Cc)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),pu.copy(this.boundingSphere),pu.applyMatrix4(i),t.ray.intersectsSphere(pu)!==!1&&($m.copy(i).invert(),mu.copy(t.ray).applyMatrix4($m),!(this.boundingBox!==null&&mu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,mu)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let t=new he,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);let s=1/t.manhattanLength();s!==1/0?t.multiplyScalar(s):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Hp?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Xx?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){let n=this.skeleton,i=this.geometry;Jm.fromBufferAttribute(i.attributes.skinIndex,t),Zm.fromBufferAttribute(i.attributes.skinWeight,t),Km.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let s=0;s<4;s++){let a=Zm.getComponent(s);if(a!==0){let o=Jm.getComponent(s);Qm.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),e.addScaledVector(xE.copy(Km).applyMatrix4(Qm),a)}}return e.applyMatrix4(this.bindMatrixInverse)}boneTransform(t,e){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(t,e)}},go=class extends Ie{constructor(){super(),this.isBone=!0,this.type="Bone"}},Vu=class extends Mn{constructor(t=null,e=1,n=1,i,s,a,o,c,l=tn,h=tn,f,u){super(null,a,o,c,l,h,i,s,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},t0=new yt,bE=new yt,$c=class r{constructor(t=[],e=[]){this.uuid=Ei(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new yt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){let n=new yt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=t.length;s<a;s++){let o=t[s]?t[s].matrixWorld:bE;t0.multiplyMatrices(o,e[s]),t0.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new r(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4);e.set(this.boneMatrices);let n=new Vu(e,t,t,li,rs);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){let i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){let s=t.bones[n],a=e[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new go),this.bones.push(a),this.boneInverses.push(new yt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){let t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let e=this.bones,n=this.boneInverses;for(let i=0,s=e.length;i<s;i++){let a=e[i];t.bones.push(a.uuid);let o=n[i];t.boneInverses.push(o.toArray())}return t}},Ye=class extends Et{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},jr=new yt,e0=new yt,Pc=[],n0=new je,yE=new yt,$a=new kt,to=new $n,Ee=class extends kt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ye(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,yE)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new je),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,jr),n0.copy(t.boundingBox).applyMatrix4(jr),this.boundingBox.union(n0)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new $n),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,jr),to.copy(t.boundingSphere).applyMatrix4(jr),this.boundingSphere.union(to)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){let n=this.matrixWorld,i=this.count;if($a.geometry=this.geometry,$a.material=this.material,$a.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),to.copy(this.boundingSphere),to.applyMatrix4(n),t.ray.intersectsSphere(to)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,jr),e0.multiplyMatrices(n,jr),$a.matrixWorld=e0,$a.raycast(t,Pc);for(let a=0,o=Pc.length;a<o;a++){let c=Pc[a];c.instanceId=s,c.object=this,e.push(c)}Pc.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ye(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var ls=class extends En{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},i0=new T,s0=new T,r0=new yt,gu=new ur,Lc=new $n,ha=class extends Ie{constructor(t=new Tt,e=new ls){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)i0.fromBufferAttribute(e,i-1),s0.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=i0.distanceTo(s0);t.setAttribute("lineDistance",new mt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Lc.copy(n.boundingSphere),Lc.applyMatrix4(i),Lc.radius+=s,t.ray.intersectsSphere(Lc)===!1)return;r0.copy(i).invert(),gu.copy(t.ray).applyMatrix4(r0);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=new T,h=new T,f=new T,u=new T,d=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){let p=Math.max(0,a.start),x=Math.min(g.count,a.start+a.count);for(let b=p,_=x-1;b<_;b+=d){let M=g.getX(b),y=g.getX(b+1);if(l.fromBufferAttribute(m,M),h.fromBufferAttribute(m,y),gu.distanceSqToSegment(l,h,u,f)>c)continue;u.applyMatrix4(this.matrixWorld);let L=t.ray.origin.distanceTo(u);L<t.near||L>t.far||e.push({distance:L,point:f.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,a.start),x=Math.min(m.count,a.start+a.count);for(let b=p,_=x-1;b<_;b+=d){if(l.fromBufferAttribute(m,b),h.fromBufferAttribute(m,b+1),gu.distanceSqToSegment(l,h,u,f)>c)continue;u.applyMatrix4(this.matrixWorld);let y=t.ray.origin.distanceTo(u);y<t.near||y>t.far||e.push({distance:y,point:f.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}},a0=new T,o0=new T,Ui=class extends ha{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)a0.fromBufferAttribute(e,i),o0.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+a0.distanceTo(o0);t.setAttribute("lineDistance",new mt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},tl=class extends ha{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},wi=class extends En{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},c0=new yt,Wu=new ur,Ic=new $n,Dc=new T,en=class extends Ie{constructor(t=new Tt,e=new wi){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ic.copy(n.boundingSphere),Ic.applyMatrix4(i),Ic.radius+=s,t.ray.intersectsSphere(Ic)===!1)return;c0.copy(i).invert(),Wu.copy(t.ray).applyMatrix4(c0);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,f=n.attributes.position;if(l!==null){let u=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);for(let g=u,v=d;g<v;g++){let m=l.getX(g);Dc.fromBufferAttribute(f,m),l0(Dc,m,c,i,t,e,this)}}else{let u=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let g=u,v=d;g<v;g++)Dc.fromBufferAttribute(f,g),l0(Dc,g,c,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function l0(r,t,e,n,i,s,a){let o=Wu.distanceSqToPoint(r);if(o<e){let c=new T;Wu.closestPointToPoint(r,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,object:a})}}var Pn=class extends Mn{constructor(t,e,n,i,s,a,o,c,l){super(t,e,n,i,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},ui=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),i=0,s=n.length,a;e?a=e:a=t*n[s-1];let o=0,c=s-1,l;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),l=n[i]-a,l<0)o=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===a)return i/(s-1);let h=n[i],u=n[i+1]-h,d=(a-h)/u;return(i+d)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);let a=this.getPoint(i),o=this.getPoint(s),c=e||(a.isVector2?new at:new T);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new T,i=[],s=[],a=[],o=new T,c=new yt;for(let d=0;d<=t;d++){let g=d/t;i[d]=this.getTangentAt(g,new T)}s[0]=new T,a[0]=new T;let l=Number.MAX_VALUE,h=Math.abs(i[0].x),f=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),u<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(ln(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(c.makeRotationAxis(o,g))}a[d].crossVectors(i[d],s[d])}if(e===!0){let d=Math.acos(ln(s[0].dot(s[t]),-1,1));d/=t,i[0].dot(o.crossVectors(s[0],s[t]))>0&&(d=-d);for(let g=1;g<=t;g++)s[g].applyMatrix4(c.makeRotationAxis(i[g],d*g)),a[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},vo=class extends ui{constructor(t=0,e=0,n=1,i=1,s=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e){let n=e||new at,i=Math.PI*2,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(a?s=0:s=i),this.aClockwise===!0&&!a&&(s===i?s=-i:s=s-i);let o=this.aStartAngle+t*s,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=c-this.aX,d=l-this.aY;c=u*h-d*f+this.aX,l=u*f+d*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},qu=class extends vo{constructor(t,e,n,i,s,a){super(t,e,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Pf(){let r=0,t=0,e=0,n=0;function i(s,a,o,c){r=s,t=o,e=-3*s+3*a-2*o-c,n=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,l){i(a,o,l*(o-s),l*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,l,h,f){let u=(a-s)/l-(o-s)/(l+h)+(o-a)/h,d=(o-a)/h-(c-a)/(h+f)+(c-o)/f;u*=h,d*=h,i(a,o,u,d)},calc:function(s){let a=s*s,o=a*s;return r+t*s+e*a+n*o}}}var Fc=new T,vu=new Pf,xu=new Pf,bu=new Pf,Xu=class extends ui{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new T){let n=e,i=this.points,s=i.length,a=(s-(this.closed?0:1))*t,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:c===0&&o===s-1&&(o=s-2,c=1);let l,h;this.closed||o>0?l=i[(o-1)%s]:(Fc.subVectors(i[0],i[1]).add(i[0]),l=Fc);let f=i[o%s],u=i[(o+1)%s];if(this.closed||o+2<s?h=i[(o+2)%s]:(Fc.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=Fc),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(f),d),v=Math.pow(f.distanceToSquared(u),d),m=Math.pow(u.distanceToSquared(h),d);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),vu.initNonuniformCatmullRom(l.x,f.x,u.x,h.x,g,v,m),xu.initNonuniformCatmullRom(l.y,f.y,u.y,h.y,g,v,m),bu.initNonuniformCatmullRom(l.z,f.z,u.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(vu.initCatmullRom(l.x,f.x,u.x,h.x,this.tension),xu.initCatmullRom(l.y,f.y,u.y,h.y,this.tension),bu.initCatmullRom(l.z,f.z,u.z,h.z,this.tension));return n.set(vu.calc(c),xu.calc(c),bu.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new T().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function h0(r,t,e,n,i){let s=(n-t)*.5,a=(i-e)*.5,o=r*r,c=r*o;return(2*e-2*n+s+a)*c+(-3*e+3*n-2*s-a)*o+s*r+e}function _E(r,t){let e=1-r;return e*e*t}function ME(r,t){return 2*(1-r)*r*t}function EE(r,t){return r*r*t}function oo(r,t,e,n){return _E(r,t)+ME(r,e)+EE(r,n)}function wE(r,t){let e=1-r;return e*e*e*t}function TE(r,t){let e=1-r;return 3*e*e*r*t}function SE(r,t){return 3*(1-r)*r*r*t}function AE(r,t){return r*r*r*t}function co(r,t,e,n,i){return wE(r,t)+TE(r,e)+SE(r,n)+AE(r,i)}var el=class extends ui{constructor(t=new at,e=new at,n=new at,i=new at){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new at){let n=e,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(co(t,i.x,s.x,a.x,o.x),co(t,i.y,s.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ju=class extends ui{constructor(t=new T,e=new T,n=new T,i=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new T){let n=e,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(co(t,i.x,s.x,a.x,o.x),co(t,i.y,s.y,a.y,o.y),co(t,i.z,s.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},nl=class extends ui{constructor(t=new at,e=new at){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new at){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new at){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Yu=class extends ui{constructor(t=new T,e=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new T){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new T){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},il=class extends ui{constructor(t=new at,e=new at,n=new at){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new at){let n=e,i=this.v0,s=this.v1,a=this.v2;return n.set(oo(t,i.x,s.x,a.x),oo(t,i.y,s.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ku=class extends ui{constructor(t=new T,e=new T,n=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new T){let n=e,i=this.v0,s=this.v1,a=this.v2;return n.set(oo(t,i.x,s.x,a.x),oo(t,i.y,s.y,a.y),oo(t,i.z,s.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},sl=class extends ui{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new at){let n=e,i=this.points,s=(i.length-1)*t,a=Math.floor(s),o=s-a,c=i[a===0?a:a-1],l=i[a],h=i[a>i.length-2?i.length-1:a+1],f=i[a>i.length-3?i.length-1:a+2];return n.set(h0(o,c.x,l.x,h.x,f.x),h0(o,c.y,l.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new at().fromArray(i))}return this}},u0=Object.freeze({__proto__:null,ArcCurve:qu,CatmullRomCurve3:Xu,CubicBezierCurve:el,CubicBezierCurve3:ju,EllipseCurve:vo,LineCurve:nl,LineCurve3:Yu,QuadraticBezierCurve:il,QuadraticBezierCurve3:Ku,SplineCurve:sl}),Ju=class extends ui{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new u0[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),s=0;for(;s<i.length;){if(i[s]>=n){let a=i[s]-n,o=this.curves[s],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}s++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,s=this.curves;i<s.length;i++){let a=s[i],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new u0[i.type]().fromJSON(i))}return this}},Zu=class extends Ju{constructor(t){super(),this.type="Path",this.currentPoint=new at,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new nl(this.currentPoint.clone(),new at(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let s=new il(this.currentPoint.clone(),new at(t,e),new at(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,a){let o=new el(this.currentPoint.clone(),new at(t,e),new at(n,i),new at(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new sl(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,i,s,a),this}absarc(t,e,n,i,s,a){return this.absellipse(t,e,n,n,i,s,a),this}ellipse(t,e,n,i,s,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,i,s,a,o,c),this}absellipse(t,e,n,i,s,a,o,c){let l=new vo(t,e,n,i,s,a,o,c);if(this.curves.length>0){let f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Qu=class r extends Tt{constructor(t=[new at(0,-.5),new at(.5,0),new at(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=ln(i,0,Math.PI*2);let s=[],a=[],o=[],c=[],l=[],h=1/e,f=new T,u=new at,d=new T,g=new T,v=new T,m=0,p=0;for(let x=0;x<=t.length-1;x++)switch(x){case 0:m=t[x+1].x-t[x].x,p=t[x+1].y-t[x].y,d.x=p*1,d.y=-m,d.z=p*0,v.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:c.push(v.x,v.y,v.z);break;default:m=t[x+1].x-t[x].x,p=t[x+1].y-t[x].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=v.x,d.y+=v.y,d.z+=v.z,d.normalize(),c.push(d.x,d.y,d.z),v.copy(g)}for(let x=0;x<=e;x++){let b=n+x*h*i,_=Math.sin(b),M=Math.cos(b);for(let y=0;y<=t.length-1;y++){f.x=t[y].x*_,f.y=t[y].y,f.z=t[y].x*M,a.push(f.x,f.y,f.z),u.x=x/e,u.y=y/(t.length-1),o.push(u.x,u.y);let w=c[3*y+0]*_,L=c[3*y+1],E=c[3*y+0]*M;l.push(w,L,E)}}for(let x=0;x<e;x++)for(let b=0;b<t.length-1;b++){let _=b+x*t.length,M=_,y=_+t.length,w=_+t.length+1,L=_+1;s.push(M,y,L),s.push(w,L,y)}this.setIndex(s),this.setAttribute("position",new mt(a,3)),this.setAttribute("uv",new mt(o,2)),this.setAttribute("normal",new mt(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.points,t.segments,t.phiStart,t.phiLength)}},rl=class r extends Qu{constructor(t=1,e=1,n=4,i=8){let s=new Zu;s.absarc(0,-e/2,t,Math.PI*1.5,0),s.absarc(0,e/2,t,0,Math.PI*.5),super(s.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:i}}static fromJSON(t){return new r(t.radius,t.length,t.capSegments,t.radialSegments)}};var Ve=class r extends Tt{constructor(t=1,e=1,n=1,i=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};let l=this;i=Math.floor(i),s=Math.floor(s);let h=[],f=[],u=[],d=[],g=0,v=[],m=n/2,p=0;x(),a===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new mt(f,3)),this.setAttribute("normal",new mt(u,3)),this.setAttribute("uv",new mt(d,2));function x(){let _=new T,M=new T,y=0,w=(e-t)/n;for(let L=0;L<=s;L++){let E=[],A=L/s,D=A*(e-t)+t;for(let F=0;F<=i;F++){let k=F/i,P=k*c+o,C=Math.sin(P),I=Math.cos(P);M.x=D*C,M.y=-A*n+m,M.z=D*I,f.push(M.x,M.y,M.z),_.set(C,w,I).normalize(),u.push(_.x,_.y,_.z),d.push(k,1-A),E.push(g++)}v.push(E)}for(let L=0;L<i;L++)for(let E=0;E<s;E++){let A=v[E][L],D=v[E+1][L],F=v[E+1][L+1],k=v[E][L+1];h.push(A,D,k),h.push(D,F,k),y+=6}l.addGroup(p,y,0),p+=y}function b(_){let M=g,y=new at,w=new T,L=0,E=_===!0?t:e,A=_===!0?1:-1;for(let F=1;F<=i;F++)f.push(0,m*A,0),u.push(0,A,0),d.push(.5,.5),g++;let D=g;for(let F=0;F<=i;F++){let P=F/i*c+o,C=Math.cos(P),I=Math.sin(P);w.x=E*I,w.y=m*A,w.z=E*C,f.push(w.x,w.y,w.z),u.push(0,A,0),y.x=C*.5+.5,y.y=I*.5*A+.5,d.push(y.x,y.y),g++}for(let F=0;F<i;F++){let k=M+F,P=D+F;_===!0?h.push(P,P+1,k):h.push(P+1,P,k),L+=3}l.addGroup(p,L,_===!0?1:2),p+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ua=class r extends Ve{constructor(t=1,e=1,n=32,i=1,s=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(t){return new r(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},$u=class r extends Tt{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let s=[],a=[];o(i),l(n),h(),this.setAttribute("position",new mt(s,3)),this.setAttribute("normal",new mt(s.slice(),3)),this.setAttribute("uv",new mt(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(x){let b=new T,_=new T,M=new T;for(let y=0;y<e.length;y+=3)d(e[y+0],b),d(e[y+1],_),d(e[y+2],M),c(b,_,M,x)}function c(x,b,_,M){let y=M+1,w=[];for(let L=0;L<=y;L++){w[L]=[];let E=x.clone().lerp(_,L/y),A=b.clone().lerp(_,L/y),D=y-L;for(let F=0;F<=D;F++)F===0&&L===y?w[L][F]=E:w[L][F]=E.clone().lerp(A,F/D)}for(let L=0;L<y;L++)for(let E=0;E<2*(y-L)-1;E++){let A=Math.floor(E/2);E%2===0?(u(w[L][A+1]),u(w[L+1][A]),u(w[L][A])):(u(w[L][A+1]),u(w[L+1][A+1]),u(w[L+1][A]))}}function l(x){let b=new T;for(let _=0;_<s.length;_+=3)b.x=s[_+0],b.y=s[_+1],b.z=s[_+2],b.normalize().multiplyScalar(x),s[_+0]=b.x,s[_+1]=b.y,s[_+2]=b.z}function h(){let x=new T;for(let b=0;b<s.length;b+=3){x.x=s[b+0],x.y=s[b+1],x.z=s[b+2];let _=m(x)/2/Math.PI+.5,M=p(x)/Math.PI+.5;a.push(_,1-M)}g(),f()}function f(){for(let x=0;x<a.length;x+=6){let b=a[x+0],_=a[x+2],M=a[x+4],y=Math.max(b,_,M),w=Math.min(b,_,M);y>.9&&w<.1&&(b<.2&&(a[x+0]+=1),_<.2&&(a[x+2]+=1),M<.2&&(a[x+4]+=1))}}function u(x){s.push(x.x,x.y,x.z)}function d(x,b){let _=x*3;b.x=t[_+0],b.y=t[_+1],b.z=t[_+2]}function g(){let x=new T,b=new T,_=new T,M=new T,y=new at,w=new at,L=new at;for(let E=0,A=0;E<s.length;E+=9,A+=6){x.set(s[E+0],s[E+1],s[E+2]),b.set(s[E+3],s[E+4],s[E+5]),_.set(s[E+6],s[E+7],s[E+8]),y.set(a[A+0],a[A+1]),w.set(a[A+2],a[A+3]),L.set(a[A+4],a[A+5]),M.copy(x).add(b).add(_).divideScalar(3);let D=m(M);v(y,A+0,x,D),v(w,A+2,b,D),v(L,A+4,_,D)}}function v(x,b,_,M){M<0&&x.x===1&&(a[b]=x.x-1),_.x===0&&_.z===0&&(a[b]=M/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.vertices,t.indices,t.radius,t.details)}};var xo=class r extends $u{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new r(t.radius,t.detail)}};var Ti=class r extends Tt{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],f=new T,u=new T,d=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){let x=[],b=p/n,_=0;p===0&&a===0?_=.5/e:p===n&&c===Math.PI&&(_=-.5/e);for(let M=0;M<=e;M++){let y=M/e;f.x=-t*Math.cos(i+y*s)*Math.sin(a+b*o),f.y=t*Math.cos(a+b*o),f.z=t*Math.sin(i+y*s)*Math.sin(a+b*o),g.push(f.x,f.y,f.z),u.copy(f).normalize(),v.push(u.x,u.y,u.z),m.push(y+_,1-b),x.push(l++)}h.push(x)}for(let p=0;p<n;p++)for(let x=0;x<e;x++){let b=h[p][x+1],_=h[p][x],M=h[p+1][x],y=h[p+1][x+1];(p!==0||a>0)&&d.push(b,_,y),(p!==n-1||c<Math.PI)&&d.push(_,M,y)}this.setIndex(d),this.setAttribute("position",new mt(g,3)),this.setAttribute("normal",new mt(v,3)),this.setAttribute("uv",new mt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Wt=class extends En{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sf,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},fi=class extends Wt{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new at(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ln(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new et(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new et(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new et(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var bo=class extends En{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sf,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=xf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Hc(r,t,e){return!r||!e&&r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function RE(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function CE(r){function t(i,s){return r[i]-r[s]}let e=r.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function f0(r,t,e){let n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){let o=e[s]*t;for(let c=0;c!==t;++c)i[a++]=r[o+c]}return i}function O0(r,t,e,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(t.push(s.time),e.push.apply(e,a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(t.push(s.time),a.toArray(e,e.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(t.push(s.time),e.push(a)),s=r[i++];while(s!==void 0)}var Ls=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];t:{e:{let a;n:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=e[++n],t<i)break e}a=e.length;break n}if(!(t>=s)){let o=e[1];t<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=e[--n-1],t>=s)break e}a=n,n=0;break n}break t}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let a=0;a!==i;++a)e[a]=n[s+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},tf=class extends Ls{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Yr,endingEnd:Yr}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,a=t+1,o=i[s],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Kr:s=t,o=2*e-n;break;case Uc:s=i.length-2,o=e+i[s]-i[s+1];break;default:s=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Kr:a=t,c=2*n-e;break;case Uc:a=1,c=n+i[1]-i[0];break;default:a=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(t,e,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,g=(n-e)/(i-e),v=g*g,m=v*g,p=-u*m+2*u*v-u*g,x=(1+u)*m+(-1.5-2*u)*v+(-.5+u)*g+1,b=(-1-d)*m+(1.5+d)*v+.5*g,_=d*m-d*v;for(let M=0;M!==o;++M)s[M]=p*a[h+M]+x*a[l+M]+b*a[c+M]+_*a[f+M];return s}},al=class extends Ls{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(n-e)/(i-e),f=1-h;for(let u=0;u!==o;++u)s[u]=a[l+u]*f+a[c+u]*h;return s}},ef=class extends Ls{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},di=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Hc(e,this.TimeBufferType),this.values=Hc(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Hc(t.times,Array),values:Hc(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ef(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new al(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new tf(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case sa:e=this.InterpolantFactoryMethodDiscrete;break;case hr:e=this.InterpolantFactoryMethodLinear;break;case Wh:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return sa;case this.InterpolantFactoryMethodLinear:return hr;case this.InterpolantFactoryMethodSmooth:return Wh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,s=0,a=i-1;for(;s!==i&&n[s]<t;)++s;for(;a!==-1&&n[a]>e;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==s;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(i!==void 0&&RE(i))for(let o=0,c=i.length;o!==c;++o){let l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Wh,s=t.length-1,a=1;for(let o=1;o<s;++o){let c=!1,l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(i)c=!0;else{let f=o*n,u=f-n,d=f+n;for(let g=0;g!==n;++g){let v=e[f+g];if(v!==e[u+g]||v!==e[d+g]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let f=o*n,u=a*n;for(let d=0;d!==n;++d)e[u+d]=e[f+d]}++a}}if(s>0){t[a]=t[s];for(let o=s*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};di.prototype.TimeBufferType=Float32Array;di.prototype.ValueBufferType=Float32Array;di.prototype.DefaultInterpolation=hr;var Is=class extends di{};Is.prototype.ValueTypeName="bool";Is.prototype.ValueBufferType=Array;Is.prototype.DefaultInterpolation=sa;Is.prototype.InterpolantFactoryMethodLinear=void 0;Is.prototype.InterpolantFactoryMethodSmooth=void 0;var ol=class extends di{};ol.prototype.ValueTypeName="color";var hs=class extends di{};hs.prototype.ValueTypeName="number";var nf=class extends Ls{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(i-e),l=t*o;for(let h=l+o;l!==h;l+=4)Vt.slerpFlat(s,0,a,l-o,a,l,c);return s}},Oi=class extends di{InterpolantFactoryMethodLinear(t){return new nf(this.times,this.values,this.getValueSize(),t)}};Oi.prototype.ValueTypeName="quaternion";Oi.prototype.DefaultInterpolation=hr;Oi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ds=class extends di{};Ds.prototype.ValueTypeName="string";Ds.prototype.ValueBufferType=Array;Ds.prototype.DefaultInterpolation=sa;Ds.prototype.InterpolantFactoryMethodLinear=void 0;Ds.prototype.InterpolantFactoryMethodSmooth=void 0;var us=class extends di{};us.prototype.ValueTypeName="vector";var fa=class{constructor(t,e=-1,n,i=wf){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=Ei(),this.duration<0&&this.resetDuration()}static parse(t){let e=[],n=t.tracks,i=1/(t.fps||1);for(let a=0,o=n.length;a!==o;++a)e.push(LE(n[a]).scale(i));let s=new this(t.name,t.duration,e,t.blendMode);return s.uuid=t.uuid,s}static toJSON(t){let e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let s=0,a=n.length;s!==a;++s)e.push(di.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(t,e,n,i){let s=e.length,a=[];for(let o=0;o<s;o++){let c=[],l=[];c.push((o+s-1)%s,o,(o+1)%s),l.push(0,1,0);let h=CE(c);c=f0(c,1,h),l=f0(l,1,h),!i&&c[0]===0&&(c.push(s),l.push(l[0])),a.push(new hs(".morphTargetInfluences["+e[o].name+"]",c,l).scale(1/n))}return new this(t,-1,a)}static findByName(t,e){let n=t;if(!Array.isArray(t)){let i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){let i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,c=t.length;o<c;o++){let l=t[o],h=l.name.match(s);if(h&&h.length>1){let f=h[1],u=i[f];u||(i[f]=u=[]),u.push(l)}}let a=[];for(let o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],e,n));return a}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(f,u,d,g,v){if(d.length!==0){let m=[],p=[];O0(d,m,p,g),m.length!==0&&v.push(new f(u,m,p))}},i=[],s=t.name||"default",a=t.fps||30,o=t.blendMode,c=t.length||-1,l=t.hierarchy||[];for(let f=0;f<l.length;f++){let u=l[f].keys;if(!(!u||u.length===0))if(u[0].morphTargets){let d={},g;for(g=0;g<u.length;g++)if(u[g].morphTargets)for(let v=0;v<u[g].morphTargets.length;v++)d[u[g].morphTargets[v]]=-1;for(let v in d){let m=[],p=[];for(let x=0;x!==u[g].morphTargets.length;++x){let b=u[g];m.push(b.time),p.push(b.morphTarget===v?1:0)}i.push(new hs(".morphTargetInfluence["+v+"]",m,p))}c=d.length*a}else{let d=".bones["+e[f].name+"]";n(us,d+".position",u,"pos",i),n(Oi,d+".quaternion",u,"rot",i),n(us,d+".scale",u,"scl",i)}}return i.length===0?null:new this(s,c,i,o)}resetDuration(){let t=this.tracks,e=0;for(let n=0,i=t.length;n!==i;++n){let s=this.tracks[n];e=Math.max(e,s.times[s.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){let t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function PE(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return hs;case"vector":case"vector2":case"vector3":case"vector4":return us;case"color":return ol;case"quaternion":return Oi;case"bool":case"boolean":return Is;case"string":return Ds}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function LE(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let t=PE(r.type);if(r.times===void 0){let e=[],n=[];O0(r.keys,e,n,"value"),r.times=e,r.values=n}return t.parse!==void 0?t.parse(r):new t(r.name,r.times,r.values,r.interpolation)}var As={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}},sf=class{constructor(t,e,n){let i=this,s=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return l.push(h,f),this},this.removeHandler=function(h){let f=l.indexOf(h);return f!==-1&&l.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=l.length;f<u;f+=2){let d=l[f],g=l[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}},IE=new sf,fs=class{constructor(t){this.manager=t!==void 0?t:IE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};fs.DEFAULT_MATERIAL_NAME="__DEFAULT";var ns={},rf=class extends Error{constructor(t,e){super(t),this.response=e}},yo=class extends fs{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=As.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(ns[t]!==void 0){ns[t].push({onLoad:e,onProgress:n,onError:i});return}ns[t]=[],ns[t].push({onLoad:e,onProgress:n,onError:i});let a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=ns[t],f=l.body.getReader(),u=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),d=u?parseInt(u):0,g=d!==0,v=0,m=new ReadableStream({start(p){x();function x(){f.read().then(({done:b,value:_})=>{if(b)p.close();else{v+=_.byteLength;let M=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:d});for(let y=0,w=h.length;y<w;y++){let L=h[y];L.onProgress&&L.onProgress(M)}p.enqueue(_),x()}})}}});return new Response(m)}else throw new rf(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o===void 0)return l.text();{let f=/charset="?([^;"\s]*)"?/i.exec(o),u=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(u);return l.arrayBuffer().then(g=>d.decode(g))}}}).then(l=>{As.add(t,l);let h=ns[t];delete ns[t];for(let f=0,u=h.length;f<u;f++){let d=h[f];d.onLoad&&d.onLoad(l)}}).catch(l=>{let h=ns[t];if(h===void 0)throw this.manager.itemError(t),l;delete ns[t];for(let f=0,u=h.length;f<u;f++){let d=h[f];d.onError&&d.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}};var af=class extends fs{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=this,a=As.get(t);if(a!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0),a;let o=ho("img");function c(){h(),As.add(t,this),e&&e(this),s.manager.itemEnd(t)}function l(f){h(),i&&i(f),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(t),o.src=t,o}};var Fs=class extends fs{constructor(t){super(t)}load(t,e,n,i){let s=new Mn,a=new af(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){s.image=o,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}},da=class extends Ie{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new et(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},cl=class extends da{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.groundColor=new et(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},yu=new yt,d0=new T,p0=new T,_o=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.map=null,this.mapPass=null,this.matrix=new yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fo,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new he(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;d0.setFromMatrixPosition(t.matrixWorld),e.position.copy(d0),p0.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(p0),e.updateMatrixWorld(),yu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yu),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(yu)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},of=class extends _o{constructor(){super(new Oe(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=ra*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=t.distance||e.far;(n!==e.fov||i!==e.aspect||s!==e.far)&&(e.fov=n,e.aspect=i,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},Hs=class extends da{constructor(t,e,n=0,i=Math.PI/3,s=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new of}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},m0=new yt,eo=new T,_u=new T,cf=class extends _o{constructor(){super(new Oe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new at(4,2),this._viewportCount=6,this._viewports=[new he(2,1,1,1),new he(0,1,1,1),new he(3,1,1,1),new he(1,1,1,1),new he(3,0,1,1),new he(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),eo.setFromMatrixPosition(t.matrixWorld),n.position.copy(eo),_u.copy(n.position),_u.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(_u),n.updateMatrixWorld(),i.makeTranslation(-eo.x,-eo.y,-eo.z),m0.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(m0)}},zi=class extends da{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new cf}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},lf=class extends _o{constructor(){super(new Ps(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},pa=class extends da{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.shadow=new lf}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Ns=class{static decodeText(t){if(typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){let e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}},ll=class extends Tt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var hl=class extends fs{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=this,a=As.get(t);if(a!==void 0){if(s.manager.itemStart(t),a.then){a.then(l=>{e&&e(l),s.manager.itemEnd(t)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let c=fetch(t,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){return As.add(t,l),e&&e(l),s.manager.itemEnd(t),l}).catch(function(l){i&&i(l),As.remove(t),s.manager.itemError(t),s.manager.itemEnd(t)});As.add(t,c),s.manager.itemStart(t)}};var hf=class{constructor(t,e,n){this.binding=t,this.valueSize=n;let i,s,a;switch(e){case"quaternion":i=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){let n=this.buffer,i=this.valueSize,s=t*i+i,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[s+o]=n[o];a=e}else{a+=e;let o=e/a;this._mixBufferRegion(n,s,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(t){let e=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){let e=this.valueSize,n=this.buffer,i=t*e+e,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){let c=e*this._origIndex;this._mixBufferRegion(n,i,c,1-s,e)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let c=e,l=e+e;c!==l;++c)if(n[c]!==n[c+e]){o.setValue(n,i);break}}saveOriginalState(){let t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let s=n,a=i;s!==a;++s)e[s]=e[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){let t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,i,s){if(i>=.5)for(let a=0;a!==s;++a)t[e+a]=t[n+a]}_slerp(t,e,n,i){Vt.slerpFlat(t,e,t,e,t,n,i)}_slerpAdditive(t,e,n,i,s){let a=this._workIndex*s;Vt.multiplyQuaternionsFlat(t,a,t,e,t,n),Vt.slerpFlat(t,e,t,e,t,a,i)}_lerp(t,e,n,i,s){let a=1-i;for(let o=0;o!==s;++o){let c=e+o;t[c]=t[c]*a+t[n+o]*i}}_lerpAdditive(t,e,n,i,s){for(let a=0;a!==s;++a){let o=e+a;t[o]=t[o]+t[n+a]*i}}},Lf="\\[\\]\\.:\\/",DE=new RegExp("["+Lf+"]","g"),If="[^"+Lf+"]",FE="[^"+Lf.replace("\\.","")+"]",HE=/((?:WC+[\/:])*)/.source.replace("WC",If),NE=/(WCOD+)?/.source.replace("WCOD",FE),kE=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",If),UE=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",If),OE=new RegExp("^"+HE+NE+kE+UE+"$"),zE=["material","materials","bones","map"],uf=class{constructor(t,e,n){let i=n||Le.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Le=class r{constructor(t,e,n){this.path=e,this.parsedPath=n||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,n):new r(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(DE,"")}static parseTrackName(t){let e=OE.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);zE.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[i];if(a===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Le.Composite=uf;Le.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Le.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Le.prototype.GetterByBindingType=[Le.prototype._getValue_direct,Le.prototype._getValue_array,Le.prototype._getValue_arrayElement,Le.prototype._getValue_toArray];Le.prototype.SetterByBindingTypeAndVersioning=[[Le.prototype._setValue_direct,Le.prototype._setValue_direct_setNeedsUpdate,Le.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Le.prototype._setValue_array,Le.prototype._setValue_array_setNeedsUpdate,Le.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Le.prototype._setValue_arrayElement,Le.prototype._setValue_arrayElement_setNeedsUpdate,Le.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Le.prototype._setValue_fromArray,Le.prototype._setValue_fromArray_setNeedsUpdate,Le.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ff=class{constructor(t,e,n=null,i=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=i;let s=e.tracks,a=s.length,o=new Array(a),c={endingStart:Yr,endingEnd:Yr};for(let l=0;l!==a;++l){let h=s[l].createInterpolant(null);o[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Ef,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n){if(t.fadeOut(e),this.fadeIn(e),n){let i=this._clip.duration,s=t._clip.duration,a=s/i,o=i/s;t.warp(1,a,e),this.warp(o,1,e)}return this}crossFadeTo(t,e,n){return t.crossFadeFrom(this,e,n)}stopFading(){let t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){let i=this._mixer,s=i.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);let c=o.parameterPositions,l=o.sampleValues;return c[0]=s,c[1]=s+n,l[0]=t/a,l[1]=e/a,this}stopWarping(){let t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,i){if(!this.enabled){this._updateWeight(t);return}let s=this._startTime;if(s!==null){let c=(t-s)*n;c<0||n===0?e=0:(this._startTime=null,e=n*c)}e*=this._updateTimeScale(t);let a=this._updateTime(e),o=this._updateWeight(t);if(o>0){let c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case nb:for(let h=0,f=c.length;h!==f;++h)c[h].evaluate(a),l[h].accumulateAdditive(o);break;case wf:default:for(let h=0,f=c.length;h!==f;++h)c[h].evaluate(a),l[h].accumulate(i,o)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){let e=this._clip.duration,n=this.loop,i=this.time+t,s=this._loopCount,a=n===eb;if(t===0)return s===-1?i:a&&(s&1)===1?e-i:i;if(n===Mf){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(i>=e)i=e;else if(i<0)i=0;else{this.time=i;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(s===-1&&(t>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=e||i<0){let o=Math.floor(i/e);i-=e*o,s+=Math.abs(o);let c=this.repetitions-s;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=t>0?e:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(c===1){let l=t<0;this._setEndings(l,!l,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(s&1)===1)return e-i}return i}_setEndings(t,e,n){let i=this._interpolantSettings;n?(i.endingStart=Kr,i.endingEnd=Kr):(t?i.endingStart=this.zeroSlopeAtStart?Kr:Yr:i.endingStart=Uc,e?i.endingEnd=this.zeroSlopeAtEnd?Kr:Yr:i.endingEnd=Uc)}_scheduleFading(t,e,n){let i=this._mixer,s=i.time,a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,c=a.sampleValues;return o[0]=s,c[0]=e,o[1]=s+t,c[1]=n,this}},BE=new Float32Array(1),ma=class extends os{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){let n=t._localRoot||this._root,i=t._clip.tracks,s=i.length,a=t._propertyBindings,o=t._interpolants,c=n.uuid,l=this._bindingsByRootAndName,h=l[c];h===void 0&&(h={},l[c]=h);for(let f=0;f!==s;++f){let u=i[f],d=u.name,g=h[d];if(g!==void 0)++g.referenceCount,a[f]=g;else{if(g=a[f],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,d));continue}let v=e&&e._propertyBindings[f].binding.parsedPath;g=new hf(Le.create(n,d,v),u.ValueTypeName,u.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,d),a[f]=g}o[f].resultBuffer=g.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){let n=(t._localRoot||this._root).uuid,i=t._clip.uuid,s=this._actionsByClip[i];this._bindAction(t,s&&s.knownActions[0]),this._addInactiveAction(t,i,n)}let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let s=e[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let s=e[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){let e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){let i=this._actions,s=this._actionsByClip,a=s[e];if(a===void 0)a={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,s[e]=a;else{let o=a.knownActions;t._byClipCacheIndex=o.length,o.push(t)}t._cacheIndex=i.length,i.push(t),a.actionByRoot[n]=t}_removeInactiveAction(t){let e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;let s=t._clip.uuid,a=this._actionsByClip,o=a[s],c=o.knownActions,l=c[c.length-1],h=t._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),t._byClipCacheIndex=null;let f=o.actionByRoot,u=(t._localRoot||this._root).uuid;delete f[u],c.length===0&&delete a[s],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let s=e[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(t){let e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_takeBackAction(t){let e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_addInactiveBinding(t,e,n){let i=this._bindingsByRootAndName,s=this._bindings,a=i[e];a===void 0&&(a={},i[e]=a),a[n]=t,t._cacheIndex=s.length,s.push(t)}_removeInactiveBinding(t){let e=this._bindings,n=t.binding,i=n.rootNode.uuid,s=n.path,a=this._bindingsByRootAndName,o=a[i],c=e[e.length-1],l=t._cacheIndex;c._cacheIndex=l,e[l]=c,e.pop(),delete o[s],Object.keys(o).length===0&&delete a[i]}_lendBinding(t){let e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_takeBackBinding(t){let e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_lendControlInterpolant(){let t=this._controlInterpolants,e=this._nActiveControlInterpolants++,n=t[e];return n===void 0&&(n=new al(new Float32Array(2),new Float32Array(2),1,BE),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){let e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,s=e[i];t.__cacheIndex=i,e[i]=t,s.__cacheIndex=n,e[n]=s}clipAction(t,e,n){let i=e||this._root,s=i.uuid,a=typeof t=="string"?fa.findByName(i,t):t,o=a!==null?a.uuid:t,c=this._actionsByClip[o],l=null;if(n===void 0&&(a!==null?n=a.blendMode:n=wf),c!==void 0){let f=c.actionByRoot[s];if(f!==void 0&&f.blendMode===n)return f;l=c.knownActions[0],a===null&&(a=l._clip)}if(a===null)return null;let h=new ff(this,a,e,n);return this._bindAction(h,l),this._addInactiveAction(h,o,s),h}existingAction(t,e){let n=e||this._root,i=n.uuid,s=typeof t=="string"?fa.findByName(n,t):t,a=s?s.uuid:t,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){let t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;let e=this._actions,n=this._nActiveActions,i=this.time+=t,s=Math.sign(t),a=this._accuIndex^=1;for(let l=0;l!==n;++l)e[l]._update(i,t,s,a);let o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(a);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){let e=this._actions,n=t.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){let a=s.knownActions;for(let o=0,c=a.length;o!==c;++o){let l=a[o];this._deactivateAction(l);let h=l._cacheIndex,f=e[e.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,f._cacheIndex=h,e[h]=f,e.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(t){let e=t.uuid,n=this._actionsByClip;for(let a in n){let o=n[a].actionByRoot,c=o[e];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let i=this._bindingsByRootAndName,s=i[e];if(s!==void 0)for(let a in s){let o=s[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(t,e){let n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var ul=class{constructor(t,e,n=0,i=1/0){this.ray=new ur(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new uo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return df(t,this,n,e),n.sort(g0),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)df(t[i],this,n,e);return n.sort(g0),n}};function g0(r,t){return r.distance-t.distance}function df(r,t,e,n){if(r.layers.test(t.layers)&&r.raycast(t,e),n===!0){let i=r.children;for(let s=0,a=i.length;s<a;s++)df(i[s],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var z0={reed:{low:9,det:2.2,fine:.4,mount:330},forest:{low:24,det:6.5,fine:1.1,mount:440},mountain:{low:34,det:5.5,fine:1.2,mount:520,side:!0},meadow:{low:22,det:3.2,fine:.5,mount:380},sea:{low:7,det:2.5,fine:.4,mount:260,sea:!0},city:{low:0,det:0,fine:0,mount:300,hill:9}},Se={id:"reed",...z0.reed};function B0(r){Object.assign(Se,{side:!1,sea:!1,hill:0},z0[r],{id:r})}function $t(r,t){let e=Math.imul(r,374761393)+Math.imul(t,668265263)|0;return e=Math.imul(e^e>>>13,1274126177),e^=e>>>16,(e>>>0)/4294967295}function De(r,t){let e=Math.floor(r),n=Math.floor(t),i=r-e,s=t-n;i=i*i*(3-2*i),s=s*s*(3-2*s);let a=$t(e,n),o=$t(e+1,n),c=$t(e,n+1),l=$t(e+1,n+1);return a+(o-a)*i+(c-a)*s+(a-o-c+l)*i*s}function Si(r,t){if(Se.hill){let e=De(r/900+2.1,t/900+8.4),n=e<.45?0:e>.62?1:(e-.45)/.17;return Se.hill*n*n*(3-2*n)*(De(r/260+6.6,t/260+3.2)-.5)*2}return Se.low*((De(r/1e3+11.3,t/1e3+7.1)-.5)*1.34+(De(r/500+3.7,t/500+1.9)-.5)*.66)}function gl(r,t){return Se.det*(De(r/165+5.5,t/165+2.2)-.5)*2+Se.fine*(De(r/40+9.1,t/40+4.4)-.5)*2}function vl(r,t){let e=0,n=.62,i=1/1500;for(let s=0;s<4;s++){let a=De(r*i+31.7*s,t*i+17.3*s),o=1-Math.abs(a*2-1);e+=n*o*o,n*=.45,i*=2.1}return Se.mount*e}var G0=`
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
`;var we={halfWidth:4.6,chunkLen:120,step:2},V0=4.6,be={seg:720,bend:190,hw:7.2,walk:4,side:3.5,sideWalk:2.5,lanes:[1.75,5.25]},GE=[215,455,690],W0=r=>.9*Math.sin(.0021*r+1)+.5*Math.sin(.0053*r+2.2)+.25*Math.sin(.0117*r+.3),VE=W0(0),Ai={period:2600,start:450,len:800,ramp:70},Df=(r,t,e)=>{let n=Math.min(1,Math.max(0,(e-r)/(t-r)));return n*n*(3-2*n)},Ff=r=>{let t=Math.sin(r*127.1+311.7)*43758.5453;return t-Math.floor(t)},WE=r=>.07*Math.sin(.9*r)+.045*Math.sin(1.37*r+1.3)+.05*Math.sin(.31*r+2),xl=class{constructor(){this.pts=[{x:0,z:0,y:Si(0,0)}],this.dirt=!1,this.city=!1,this._cum=[0]}setShape(t){t!==this.city&&(this.city=t,this.pts=[{x:0,z:0,y:0}])}_delta(t){if(t<=0||Ff(t*1.37+.5)<.3)return 0;let n=(Ff(t*2.71+3.3)-.5)*1.5-.35*this._sum(t-1);return Math.sign(n)*Math.max(.25,Math.abs(n))}_sum(t){if(t<0)return 0;for(;this._cum.length<=t;){let e=this._cum.length;this._cum.push(this._cum[e-1]+this._delta(e))}return this._cum[t]}junction(t){let e=Math.floor(t/3),n=t-e*3;return e*be.seg+GE[n]+(Ff(t*3.17+1.9)-.5)*(n===2?10:24)}junctionIndex(t){let e=Math.floor(t/be.seg)*3-1;for(;this.junction(e)<t;)e++;return e}nearJunction(t){if(!this.city)return null;let e=this.junctionIndex(t),n=this.junction(e-1),i=this.junction(e);return t-n<i-t?n:i}dirtAt(t){if(!this.dirt)return 0;let e=(t%Ai.period+Ai.period)%Ai.period;return Df(Ai.start,Ai.start+Ai.ramp,e)*(1-Df(Ai.start+Ai.len-Ai.ramp,Ai.start+Ai.len,e))}_y(t,e,n){return this.city?Si(t,e):Si(t,e)+this.dirtAt(n)*WE(n)}heading(t){if(!this.city)return W0(t)-VE;let e=Math.floor(t/be.seg);return this._sum(e-1)+this._delta(e)*Df(0,be.bend,t-e*be.seg)}curvature(t){let e=Math.max(0,t-6),n=t+6;return(this.heading(n)-this.heading(e))/(n-e)}ensure(t){this._ensure(Math.ceil(t/we.step)+1)}_ensure(t){let{step:e}=we;for(;this.pts.length<=t+1;){let n=this.pts.length-1,i=this.heading(n*e+e/2),s=this.pts[n],a=s.x-Math.sin(i)*e,o=s.z-Math.cos(i)*e;this.pts.push({x:a,z:o,y:this._y(a,o,(n+1)*e)})}}recomputeHeights(){this.pts.forEach((t,e)=>{t.y=this._y(t.x,t.z,e*we.step)})}at(t,e={}){let{step:n}=we;t<0&&(t=0);let i=Math.floor(t/n);this._ensure(i+1);let s=(t-i*n)/n,a=this.pts[i],o=this.pts[i+1];return e.x=a.x+(o.x-a.x)*s,e.z=a.z+(o.z-a.z)*s,e.y=a.y+(o.y-a.y)*s,e.th=this.heading(t),e}};var Bi={uMistD:{value:0},uMistH:{value:12},uMistBase:{value:0},uMistCover:{value:.5},uMistT:{value:0},uMistWind:{value:new at},uMistColor:{value:new et}};function q0(){let r=Jt;r.fog_pars_vertex=`
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
#endif`}function de(r){let t=r.onBeforeCompile,e=r.customProgramCacheKey,n=t&&t!==En.prototype.onBeforeCompile;r.onBeforeCompile=function(s,a){n&&t.call(this,s,a),Object.assign(s.uniforms,Bi)};let i=(n?t.toString():"")+(e?e.call(r):"");return r.customProgramCacheKey=()=>i+"#mist",r.needsUpdate=!0,r}function Eo(r,t){let e=document.createElement("canvas");return e.width=r,e.height=t,[e,e.getContext("2d")]}function Nf(r,t=!1){let[i,s]=Eo(512,512);s.fillStyle="#3c3f45",s.fillRect(0,0,512,512);let a=s.getImageData(0,0,512,512);for(let f=0;f<a.data.length;f+=4){let u=(Math.random()-.5)*30;a.data[f]+=u,a.data[f+1]+=u,a.data[f+2]+=u}s.putImageData(a,0,0);let o=512/(we.halfWidth*2);for(let f of t?[]:[.27,.73]){let u=s.createLinearGradient((f-.09)*512,0,(f+.09)*512,0);u.addColorStop(0,"rgba(0,0,0,0)"),u.addColorStop(.5,"rgba(0,0,0,0.22)"),u.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=u,s.fillRect((f-.09)*512,0,.18*512,512)}s.fillStyle="#dcdcd4";let c=.16*o,l=.35*o;if(t){let f=new Pn(i);return f.colorSpace=ue,f.wrapS=f.wrapT=zn,f.anisotropy=r.capabilities.getMaxAnisotropy(),f}s.fillRect(l,0,c,512),s.fillRect(512-l-c,0,c,512),s.fillStyle="#e9d36a",s.fillRect(512/2-c/2,0,c,512/3);let h=new Pn(i);return h.colorSpace=ue,h.wrapS=h.wrapT=zn,h.anisotropy=r.capabilities.getMaxAnisotropy(),h}function bl(){let t=document.createElement("canvas");t.width=t.height=128;let e=t.getContext("2d"),n=e.createImageData(128,128);for(let s=0;s<128;s++)for(let a=0;a<128;a++){let o=(a+.5)/128*2-1,c=(s+.5)/128*2-1,l=o*o+c*c,h=Math.min(1,Math.exp(-l*5)*.55+Math.exp(-l*22)*.35+Math.exp(-l*120)*.35)*(1-Math.min(1,l)**4),f=(s*128+a)*4;n.data[f]=n.data[f+1]=n.data[f+2]=255,n.data[f+3]=Math.round(h*255)}e.putImageData(n,0,0);let i=new Pn(t);return i.colorSpace=ue,i}function va(){let[r,t]=Eo(128,128),e=t.createRadialGradient(64,64,0,64,64,64);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.2,"rgba(255,255,255,0.55)"),e.addColorStop(.5,"rgba(255,255,255,0.12)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128);let n=new Pn(r);return n.colorSpace=ue,n}function kf(r){let t=r>>>0;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function X0(){let[e,n]=Eo(128,360),i=kf(5),s=128/2;n.strokeStyle="#c9bb8e",n.lineWidth=2.2,n.lineCap="round",n.beginPath(),n.moveTo(s,360),n.quadraticCurveTo(s+2,360*.66,s,360*.46),n.stroke();let a=4,o=360*.5,c=f=>5+50*Math.pow(Math.sin(Math.min(1,f*1.15)*Math.PI*.55),.85)*Math.pow(1-f,.6);n.fillStyle="rgba(250,246,234,0.6)",n.beginPath();for(let f=0;f<=24;f++){let u=f/24;n.lineTo(s+c(u)*.6,o-u*(o-a))}for(let f=24;f>=0;f--){let u=f/24;n.lineTo(s-c(u)*.6,o-u*(o-a))}n.closePath(),n.fill();let l=["#ffffff","#fffcf4","#f6f0df","#ede5cf","#fffef9"];for(let f=0;f<1500;f++){let u=Math.pow(i(),.85),d=o-u*(o-a)+i()*6,g=c(u),v=s+(i()*2-1)*g*(.4+.7*i()),m=d-6-i()*30;n.strokeStyle=l[Math.floor(i()*l.length)],n.globalAlpha=.35+i()*.55,n.lineWidth=.7+i()*1.5,n.beginPath(),n.moveTo(s+(i()-.5)*5,d),n.quadraticCurveTo((s+v)/2+(i()-.5)*10,(d+m)/2,v,m),n.stroke()}n.globalAlpha=1;let h=new Pn(e);return h.colorSpace=ue,h.anisotropy=4,h}function j0(r){let[e,n]=Eo(512,512),i=kf(23);n.fillStyle="#d6d6d6",n.fillRect(0,0,512,512),n.lineCap="round";for(let a=0;a<16e3;a++){let o=i()*512,c=i()*512,l=3+i()*11,h=-Math.PI/2+(i()-.5)*1.1,f=Math.cos(h)*l,u=Math.sin(h)*l,d=Math.floor(150+i()*105);n.strokeStyle=`rgb(${d},${d},${d})`,n.globalAlpha=.35+i()*.5,n.lineWidth=.7+i()*1.3;for(let g of[-512,0,512])for(let v of[-512,0,512]){let m=o+g,p=c+v;m<-20||m>532||p<-20||p>532||(n.beginPath(),n.moveTo(m,p),n.lineTo(m+f,p+u),n.stroke())}}n.globalAlpha=1;let s=new Pn(e);return s.colorSpace=ue,s.wrapS=s.wrapT=zn,s.anisotropy=r.capabilities.getMaxAnisotropy(),s}function Y0(){let[e,n]=Eo(512,256),i=kf(77),s=[];for(let f=0;f<9;f++){let u=i()*Math.PI*2,d=i()*62;s.push([128+Math.cos(u)*d*1.15,120+Math.sin(u)*d*.85,38+i()*34])}let a=(f,u)=>s.some(([d,g,v])=>(f-d)**2+(u-g)**2<v*v),o=["#2f5522","#3d6a2a","#4c7d32","#5c9038","#6fa443","#87b851"];for(let f=0;f<2600;f++){let u=8+i()*240,d=8+i()*230;if(!a(u,d))continue;let g=1-d/256,v=Math.min(o.length-1,Math.floor((i()*.7+g*.55)*o.length));n.fillStyle=o[v],n.beginPath(),n.ellipse(u,d,3+i()*5,2+i()*3.5,i()*Math.PI,0,Math.PI*2),n.fill()}let c=320,l=["#22402a","#2b4f31","#355e39","#3f6d41","#4d7d4a"];for(let f=0;f<2400;f++){let u=Math.pow(i(),.8),d=6+u*236,g=u*7%1,v=(6+u*58)*(.55+.45*g),m=c+(i()*2-1)*v*.25,p=c+(i()*2-1)*v,x=d+4+Math.abs(p-c)*.18+i()*6;n.strokeStyle=l[Math.min(l.length-1,Math.floor((i()*.8+(1-u)*.4)*l.length))],n.lineWidth=1+i()*2.2,n.beginPath(),n.moveTo(m,d),n.lineTo(p,x),n.stroke()}n.fillStyle="#5a4434",n.fillRect(448,0,64,64);let h=new Pn(e);return h.colorSpace=ue,h.anisotropy=4,h}var Hf={};function dr(r,t,{srgb:e=!0,repeat:n=!0}={}){if(Hf[r])return Hf[r];let i=new Fs().load("assets/tex/"+r+".webp");return e&&(i.colorSpace=ue),n&&(i.wrapS=i.wrapT=zn),i.anisotropy=Math.min(8,t.capabilities.getMaxAnisotropy()),Hf[r]=i,i}var Bf=1100,wo=22,qE=3200,XE=900,Uf=700,Of=600,zf=6,Ln=r=>{let t=Math.sin(r*127.1+311.7)*43758.5453;return t-Math.floor(t)},K0=r=>470+70*Math.sin(r/650+1.3)+25*Math.sin(r/230);function jE(r){if(Ln(r*3.7+1.1)>.8)return null;let t=120+140*Ln(r*5.3+2.2);return{t:r,s:r*Bf+(Ln(r*2.9)-.5)*400,len:t,n:Math.round(16+t*.22*(.7+.6*Ln(r*7.1))),streets:[0],lat:K0}}var Gf=5e3,YE=r=>330+18*Math.sin(r/420);function KE(r){return r<0?null:{t:1e5+r,s:1300+r*Gf,len:450,n:220,streets:[0,42,84],lat:YE,big:!0}}function Vf(){let r=new re(1,1,1).translate(0,.5,0).toNonIndexed(),t=.54,e=1,n=1.45,i=[-t,e,-t,t,e,-t,t,n,0,-t,e,-t,t,n,0,-t,n,0,-t,e,t,-t,n,0,t,n,0,-t,e,t,t,n,0,t,e,t,-t,e,-t,-t,n,0,-t,e,t,t,e,-t,t,e,t,t,n,0],s=new Tt;s.setAttribute("position",new mt(i,3)),s.computeVertexNormals();let a=new Tt,o=r.attributes.position.array,c=r.attributes.normal.array,l=s.attributes.position.array,h=s.attributes.normal.array,f=new Float32Array(o.length+l.length),u=new Float32Array(c.length+h.length);f.set(o),f.set(l,o.length),u.set(c),u.set(h,c.length);let d=new Float32Array(f.length/3);return d.fill(1,o.length/3,f.length/3-6),a.setAttribute("position",new Et(f,3)),a.setAttribute("normal",new Et(u,3)),a.setAttribute("aRoof",new Et(d,1)),a}var JE=`
  uniform float uScale, uFogD;
  varying float vA;
  void main() {
    vec4 mv = viewMatrix * vec4(position, 1.0);
    float fd = uFogD * -mv.z;
    vA = exp(-fd * fd);
    gl_PointSize = clamp(1.6 * uScale / -mv.z, 3.0, 20.0);
    gl_Position = projectionMatrix * mv;
  }`,ZE=`
  uniform vec3 uColor; uniform float uAmt;
  varying float vA;
  void main() {
    float d = length(gl_PointCoord - 0.5) * 2.0;
    float a = (smoothstep(0.35, 0.0, d) + exp(-d * d * 5.0) * 0.4) * vA * uAmt;
    if (a < 0.003) discard;
    gl_FragColor = vec4(uColor * a, 1.0);
  }`,yl=class{constructor(t){this.group=new Pt,this.group.visible=!1,t.add(this.group),this.uLit={value:0};let e=new Wt({roughness:.85,metalness:0,side:me});e.onBeforeCompile=s=>{s.uniforms.uLit=this.uLit,s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
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
          totalEmissiveRadiance += winGlow;`)},e.customProgramCacheKey=()=>"valley-house",de(e),this.houses=new Ee(Vf(),e,Uf),this.houses.count=0,this.houses.frustumCulled=!1,this.houses.instanceColor=new Ye(new Float32Array(Uf*3),3),this.group.add(this.houses),this.lightPos=new Float32Array(Of*3);let n=new Tt;n.setAttribute("position",new Et(this.lightPos,3)),n.setDrawRange(0,0),this.lightMat=new ve({uniforms:{uScale:{value:500},uFogD:{value:0},uAmt:{value:0},uColor:{value:new et(8,4.3,1.4)}},vertexShader:JE,fragmentShader:ZE,transparent:!0,depthWrite:!1,blending:Xe,fog:!1}),this.lights=new en(n,this.lightMat),this.lights.frustumCulled=!1,this.lights.renderOrder=4,this.group.add(this.lights);let i=va();this.hazes=Array.from({length:zf},()=>{let s=new Cn(new wn({map:i,color:16751184,transparent:!0,opacity:0,depthWrite:!1,blending:Xe}));return s.visible=!1,this.group.add(s),s}),this.heights=new Map,this.built=null,this._p={},this._m=new yt,this._q=new Vt,this._v=new T,this._s=new T,this._c=new et,this._up=new T(0,1,0)}set visible(t){this.group.visible=t}get visible(){return this.group.visible}reset(){this.heights.clear(),this.built=null}_h(t,e,n,i){let s=this.heights.get(t);return s===void 0&&(s=i.heightAt(e,n),this.heights.set(t,s)),s}_valley(t,e,n,i,s,a=K0){let o=e.at(t,this._p),c=Math.cos(o.th),l=-Math.sin(o.th),h=-Math.sin(o.th),f=-Math.cos(o.th),u=a(t)+n;return s.x=o.x+c*u+h*i,s.z=o.z+l*u+f*i,s.th=o.th,s}_build(t,e,n){let i=t-XE,s=t+qE,a=this._m,o=this._q,c=this._s,l=this._c,h={},f=0,u=0,d=0,g=[];for(let m=Math.floor(i/Bf)-1;m<=Math.ceil(s/Bf)+1;m++){let p=jE(m);p&&p.s>i-p.len&&p.s<s+p.len&&g.push(p)}for(let m=Math.floor((i-1300)/Gf);m<=Math.ceil((s-1300)/Gf);m++){let p=KE(m);p&&p.s>i-p.len&&p.s<s+p.len&&g.push(p)}for(let m of g){for(let p=0;p<m.n&&f<Uf;p++){let x=m.t*1e3+p,b=Ln(x*1.3),_=Ln(x*2.7+5),M=Ln(x*4.1+9),y=Ln(x*6.7+3),w=_<.5?-1:1,E=m.streets[Math.floor(Ln(x*11.3)*m.streets.length)]+w*(9+(m.big?12:30)*M*M);this._valley(m.s+(b-.5)*m.len,e,E,0,h,m.lat);let A=this._h("h"+x,h.x,h.z,n),D=this._h("b"+x,h.x+7,h.z+7,n);if(Math.abs(D-A)>4)continue;let F=7+5*y,k=6+3*Ln(x*8.3),P=(y>.88?8.5:_*7%1>.6?6:3.4)+Ln(x*9.9);m.big&&Ln(x*12.7)<.14&&(F=14+8*y,k=10+4*M,P=11+9*Ln(x*13.1)),o.setFromAxisAngle(this._up,h.th+Math.PI/2+(w>0?0:Math.PI)+(Ln(x*3.3)-.5)*.35),a.compose(this._v.set(h.x,Math.min(A,D)-.8,h.z),o,c.set(F,P,k)),this.houses.setMatrixAt(f,a);let C=Ln(x*5.9);l.setRGB(...C<.35?[.82,.8,.74]:C<.6?[.86,.75,.55]:C<.8?[.72,.68,.62]:[.62,.66,.68]),this.houses.setColorAt(f,l),f++}if(d<zf){this._valley(m.s,e,m.big?42:0,0,h,m.lat);let p=this.hazes[d++];p.position.set(h.x,this._h("z"+m.t,h.x,h.z,n)+(m.big?40:25),h.z),p.scale.set(m.len*2.2,m.len*(m.big?.8:1.1),1),p.userData.on=!0}}for(let m=d;m<zf;m++)this.hazes[m].userData.on=!1;for(let m of g)if(m.big)for(let p=0;p<m.streets.length;p++)for(let x=-m.len/2;x<=m.len/2&&u<Of;x+=wo){let b=Math.round(x/wo);this._valley(m.s+x,e,m.streets[p]+(b%2?6:-6),0,h,m.lat);let _=this._h("L"+m.t+"_"+p+"_"+b,h.x,h.z,n);this.lightPos.set([h.x,_+6.5,h.z],u*3),u++}for(let m=Math.floor(i/wo);m*wo<s&&u<Of;m++){let p=m*wo,x=!1;for(let M of g)if(!M.big&&Math.abs(p-M.s)<M.len/2+15){x=!0;break}if(!x&&Ln(m*1.7+.3)>.22)continue;let b=x?m%2?6:-6:5;this._valley(p,e,b,0,h);let _=this._h("l"+m,h.x,h.z,n);this.lightPos.set([h.x,_+6.5,h.z],u*3),u++}this.houses.count=f,this.houses.instanceMatrix.needsUpdate=!0,this.houses.instanceColor&&(this.houses.instanceColor.needsUpdate=!0);let v=this.lights.geometry;v.setDrawRange(0,u),v.attributes.position.needsUpdate=!0,this.heights.size>6e3&&this.heights.clear()}update(t,e,n,i,s,a){if(!this.group.visible)return;let o=Math.floor(t/400);this.built!==o&&(this._build(t,e,n),this.built=o),this.uLit.value=i;let c=this.lightMat.uniforms;c.uAmt.value=i,c.uScale.value=s,c.uFogD.value=a,this.lights.visible=i>.02;for(let l of this.hazes)l.visible=l.userData.on&&i>.02,l.material.opacity=.13*i}};var xa=180,QE=1150,$E=260,In=.2,ei=.055,_l=30,To={cycle:46,mainG:22,y:3,allRed:1.5,crossG:15.5,stopA:11.45},J0=[[.15,1,.6],[1,.72,.05],[1,.08,.04]],tw=[[.03,.06,.05],[.07,.06,.02],[.07,.02,.02]],Wf='"Hiragino Sans","Hiragino Kaku Gothic ProN","Noto Sans JP","Noto Sans CJK JP","Yu Gothic","Meiryo",sans-serif',ew=[["コンビニ","#1d8f4e","#ffffff"],["ベーカリー","#f3e2c4","#7a4a1f"],["カフェ","#3b2a22","#f2d7a0"],["ドラッグ","#1554a8","#ffe14a"],["ラーメン","#c8231c","#ffffff"],["そば・うどん","#f4efe2","#202020"],["クリーニング","#2a7fc0","#ffffff"],["花屋","#f6c8d4","#6a2440"],["書店","#24456e","#ffffff"],["居酒屋","#2b2b2b","#ff9b3d"],["寿司","#f6f2e8","#b3151a"],["美容室","#ffffff","#333333"],["不動産","#ffd23a","#1b3a7a"],["メガネ","#e6e9ee","#1d4f91"],["焼肉","#151515","#ff4b2b"],["ドーナツ","#ff86b4","#ffffff"]],nw=[["ラーメン","#c8231c","#ffffff"],["カラオケ","#6b2bd9","#ffffff"],["居酒屋","#1b1b1b","#ffb03a"],["薬","#1554a8","#ffffff"],["歯科","#ffffff","#1b6fb8"],["焼肉","#2a0d0a","#ff5a2a"],["ホテル","#0f2d55","#9fe0ff"],["喫茶","#4a2e1f","#ffe3b0"],["不動産","#ffd23a","#112233"],["寿司","#ffffff","#b3151a"],["麻雀","#0d5a2f","#ffffff"],["整骨院","#ffffff","#c21f3a"],["美容室","#f0e6ff","#5a2a8a"],["中華","#d42a1f","#ffd84a"],["クリニック","#e8f6ff","#0d6aa8"],["学習塾","#ff7a00","#ffffff"]],Z0=[[.76,.69,.59],[.86,.86,.84],[.67,.68,.69],[.47,.35,.28],[.87,.81,.69],[.63,.69,.73],[.38,.39,.41],[.64,.45,.36]];function El(r){let t=r>>>0||1;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function ba(r,t,e,n=!0){let i=document.createElement("canvas");i.width=r,i.height=t,e(i.getContext("2d"),r,t);let s=new Pn(i);return n&&(s.colorSpace=ue),s.anisotropy=4,s}function iw(){return ba(512,768,(r,t)=>{ew.forEach(([e,n,i],s)=>{let a=s*48;r.fillStyle=n,r.fillRect(0,a,t,48),r.fillStyle="rgba(0,0,0,0.25)",r.fillRect(0,a,t,3),r.fillRect(0,a+45,t,3),r.font=`bold 32px ${Wf}`;let o=r.measureText(e).width;r.save(),r.translate(t/2,a+25),o>t*.6&&r.scale(t*.6/o,1),r.fillStyle=i,r.textAlign="center",r.textBaseline="middle",r.fillText(e,0,0),r.restore()})})}function sw(){return ba(1024,512,r=>{nw.forEach(([t,e,n],i)=>{let s=i*64,a=[...t];r.fillStyle=e,r.fillRect(s,0,64,512),r.strokeStyle=n,r.globalAlpha=.5,r.lineWidth=3,r.strokeRect(s+5,5,54,502),r.globalAlpha=1;let o=Math.min(46,440/a.length);r.font=`bold ${o}px ${Wf}`,r.fillStyle=n,r.textAlign="center",r.textBaseline="middle";let c=256-(a.length-1)*o*.55;a.forEach((l,h)=>r.fillText(l,s+32,c+h*o*1.1))})})}function rw(){let r=ba(256,256,t=>{let e=El(7);for(let i=0;i<4;i++)for(let s=0;s<4;s++){let a=160+Math.floor(e()*22);t.fillStyle=`rgb(${a},${a-2},${a-8})`,t.fillRect(s*64,i*64,64,64)}let n=t.getImageData(0,0,256,256);for(let i=0;i<n.data.length;i+=4){let s=(e()-.5)*18;n.data[i]+=s,n.data[i+1]+=s,n.data[i+2]+=s}t.putImageData(n,0,0),t.fillStyle="rgba(60,58,54,0.55)";for(let i=0;i<4;i++)t.fillRect(i*64,0,2,256),t.fillRect(0,i*64,256,2)});return r.wrapS=r.wrapT=zn,r}function aw(){return ba(512,128,r=>{r.fillStyle="#1b4fb4",r.fillRect(4,4,120,120),r.strokeStyle="#fff",r.lineWidth=4,r.strokeRect(9,9,110,110),r.fillStyle="#fff",r.beginPath(),r.moveTo(64,18),r.lineTo(112,108),r.lineTo(16,108),r.closePath(),r.fill(),r.fillStyle="#1b2a44",r.beginPath(),r.arc(64,48,7,0,7),r.fill(),r.lineWidth=6,r.strokeStyle="#1b2a44",r.lineCap="round",r.beginPath(),r.moveTo(64,57),r.lineTo(60,78),r.lineTo(50,98),r.moveTo(60,78),r.lineTo(72,97),r.moveTo(62,64),r.lineTo(76,72),r.moveTo(62,64),r.lineTo(50,74),r.stroke(),r.fillStyle="#1b2a44";for(let t=0;t<5;t++)r.fillRect(28+t*15,101,9,4);r.fillStyle="#fff",r.beginPath(),r.moveTo(132,10),r.lineTo(252,10),r.lineTo(192,120),r.closePath(),r.fill(),r.fillStyle="#c8161d",r.beginPath(),r.moveTo(140,15),r.lineTo(244,15),r.lineTo(192,110),r.closePath(),r.fill(),r.fillStyle="#fff",r.font=`bold 26px ${Wf}`,r.textAlign="center",r.textBaseline="middle",r.fillText("止まれ",192,42),r.fillStyle="#fff",r.beginPath(),r.arc(320,64,60,0,7),r.fill(),r.strokeStyle="#c8161d",r.lineWidth=12,r.beginPath(),r.arc(320,64,52,0,7),r.stroke(),r.fillStyle="#1b3f9a",r.font="bold 54px Arial, sans-serif",r.fillText("40",320,68),r.fillStyle="#1b4fb4",r.beginPath(),r.arc(448,64,58,0,7),r.fill(),r.strokeStyle="#c8161d",r.lineWidth=11,r.beginPath(),r.arc(448,64,53,0,7),r.stroke(),r.beginPath(),r.moveTo(412,28),r.lineTo(484,100),r.stroke()})}function ow(){let r=ba(256,256,t=>{let e=El(11);t.fillStyle="#8a8274",t.fillRect(0,0,256,256);for(let n=0;n<2600;n++){let i=95+Math.floor(e()*90);t.fillStyle=`rgb(${i},${i-6},${i-16})`,t.fillRect(e()*256,e()*256,1+e()*3,1+e()*3)}for(let n=0;n<40;n++)t.fillStyle=`rgba(70,85,40,${.25+e()*.3})`,t.beginPath(),t.arc(e()*256,e()*256,4+e()*14,0,7),t.fill()});return r.wrapS=r.wrapT=zn,r}function cw(){return ba(128,256,r=>{r.fillStyle="#f4f4f2",r.fillRect(0,0,128,256),r.fillStyle="#c62026",r.fillRect(0,0,128,18);let t=["#d33","#25a","#e90","#2a5","#fff","#713","#39c","#cb2"],e=El(3);for(let n=0;n<3;n++){r.fillStyle="#dfe9f0",r.fillRect(8,24+n*38,112,34);for(let i=0;i<6;i++)r.fillStyle=t[Math.floor(e()*t.length)],r.fillRect(12+i*18,28+n*38,12,22);r.fillStyle="#2b2";for(let i=0;i<6;i++)r.fillRect(14+i*18,52+n*38,8,3)}r.fillStyle="#333",r.fillRect(84,140,30,40),r.fillStyle="#111",r.fillRect(14,200,100,30)})}function lw(){let r=new re(1,1,1).translate(0,.5,0).toNonIndexed();return r.deleteAttribute("uv"),r.setAttribute("aRoof",new Et(new Float32Array(r.attributes.position.count),1)),r}function hw(){let r=[new Ve(.12,.17,11,8).translate(0,5.5,0),new re(.12,.12,2).translate(0,9.6,0),new re(.1,.1,1.5).translate(0,10.4,0),new Ve(.3,.3,.9,10).translate(0,7.6,-.42)].map(i=>{let s=i.index?i.toNonIndexed():i;return s.deleteAttribute("uv"),s}),t=[],e=[];for(let i of r)t.push(...i.attributes.position.array),e.push(...i.attributes.normal.array);let n=new Tt;return n.setAttribute("position",new mt(t,3)),n.setAttribute("normal",new mt(e,3)),n}var uw=`#include <common>
attribute float aRoof; attribute vec4 aInfo;
varying vec3 vWall, vNL, vSize; varying float vRoof; varying vec4 vInfo;`,fw=`#include <begin_vertex>
vSize = vec3(length(instanceMatrix[0].xyz), length(instanceMatrix[1].xyz), length(instanceMatrix[2].xyz));
vWall = position * vSize; vNL = normal; vRoof = aRoof; vInfo = aInfo;`,dw=`#include <common>
uniform float uLit; uniform sampler2D uSignTex;
varying vec3 vWall, vNL, vSize; varying float vRoof; varying vec4 vInfo;
float hh(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }`,pw=`#include <color_fragment>
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
}`,Ml=class{constructor(t,e,n,i){this.scenery=i,this.scene=t,this.road=e,this.roadMat=n,this.group=new Pt,this.group.visible=!1,t.add(this.group),this.blocks=new Map,this.uLit={value:0},this.uSignTex={value:iw()},this.facade=new Wt({roughness:.82,metalness:0}),this.facade.onBeforeCompile=a=>{a.uniforms.uLit=this.uLit,a.uniforms.uSignTex=this.uSignTex,a.vertexShader=a.vertexShader.replace("#include <common>",uw).replace("#include <begin_vertex>",fw),a.fragmentShader=a.fragmentShader.replace("#include <common>",dw).replace("#include <color_fragment>",pw).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
roughnessFactor = mix(roughnessFactor, 0.06, cGlass);`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += cEmis;`)},this.facade.customProgramCacheKey=()=>"city-facade",this.walkMat=new Wt({map:rw(),roughness:.92}),this.lotMat=new Wt({map:ow(),roughness:1}),this.markMat=new Wt({vertexColors:!0,roughness:.6,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}),this.poleMat=new Wt({color:9342343,roughness:.85}),this.wireMat=new ls({color:1776413}),this.uGlow={value:0},this.signMat=new Wt({map:sw(),roughness:.55}),this.signMat.onBeforeCompile=a=>{a.uniforms.uGlow=this.uGlow,a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
attribute float aCell;`).replace("#include <uv_vertex>",`#include <uv_vertex>
vMapUv.x = (vMapUv.x + aCell) / 16.0;`),a.fragmentShader=a.fragmentShader.replace("#include <common>",`#include <common>
uniform float uGlow;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += diffuseColor.rgb * uGlow;`)},this.signMat.customProgramCacheKey=()=>"city-vsign";let s=cw();this.vendBody=new Wt({color:15329766,roughness:.45,metalness:.15}),this.vendFront=new Wt({map:s,emissiveMap:s,emissive:16777215,emissiveIntensity:.3,roughness:.25});for(let a of[this.facade,this.lotMat,this.walkMat,this.markMat,this.poleMat,this.wireMat,this.signMat,this.vendBody,this.vendFront])de(a);this.boxGeo=lw(),this.houseGeo=Vf(),this.poleGeo=hw(),this.signGeo=new re(1,1,1).translate(0,.5,0),this.vendGeo=new re(1,1.83,.75).translate(0,.915,0),this._p={},this._q={},this._m=new yt,this._qt=new Vt,this._v=new T,this._s=new T,this._up=new T(0,1,0),this._c=new et,this.lastS=0,this.camF=1,this.clock=0,this.clockRate=1,this.sigMat=new Wt({color:2829616,roughness:.6,metalness:.3}),this.lensMat=new Je({color:16777215,toneMapped:!1}),de(this.sigMat),de(this.lensMat),this.headGeo=new re(1.3,.44,.3),this.lensGeo=new Ve(.15,.15,.04,14).rotateX(Math.PI/2),this.sigPoleGeo=new Ve(.1,.12,1,8).translate(0,.5,0),this.armGeo=new re(1,.1,.1).translate(.5,0,0),this.signTex=aw(),this.roadSignMat=new Wt({map:this.signTex,roughness:.5,alphaTest:.5,transparent:!1}),this.roadSignMat.onBeforeCompile=a=>{a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
attribute float aCell;`).replace("#include <uv_vertex>",`#include <uv_vertex>
vMapUv.x = (vMapUv.x + aCell) / 4.0;`)},this.roadSignMat.customProgramCacheKey=()=>"city-roadsign",this.signBackMat=new Wt({map:this.signTex,color:3026995,roughness:.7,alphaTest:.5}),this.signBackMat.onBeforeCompile=this.roadSignMat.onBeforeCompile,this.signBackMat.customProgramCacheKey=()=>"city-roadsign-back",de(this.roadSignMat),de(this.signBackMat),this.signPlate=new ti(.75,.75),this.signPost=new Ve(.035,.035,1,6).translate(0,.5,0),this.uSig={uScale:{value:500},uFogD:{value:0},uDay:{value:1}},this.sigGlowMat=new ve({uniforms:this.uSig,transparent:!0,depthWrite:!1,blending:Xe,fog:!1,vertexShader:`attribute vec3 aCol; attribute vec3 aDir; uniform float uScale, uFogD; varying vec3 vCol;
        void main() {
          vec4 wp = modelMatrix * vec4(position, 1.0); vec4 mv = viewMatrix * wp;
          float face = smoothstep(-0.1, 0.45, dot(normalize(cameraPosition - wp.xyz), aDir));
          float fd = uFogD * -mv.z;
          vCol = aCol * face * exp(-fd * fd * 0.5);
          gl_PointSize = clamp(1.9 * uScale / -mv.z, 11.0, 90.0);
          gl_Position = projectionMatrix * mv;
        }`,fragmentShader:`uniform float uDay; varying vec3 vCol;
        void main() {
          float d = length(gl_PointCoord - 0.5) * 2.0;
          float a = smoothstep(0.32, 0.0, d) + exp(-d * d * 4.0) * 0.55;
          if (a * max(vCol.r, max(vCol.g, vCol.b)) < 0.004) discard;
          gl_FragColor = vec4(vCol * a * mix(1.6, 0.9, uDay), 1.0);
        }`})}_phase(t){let e=To,n=(Math.sin(t*91.7+13.1)*43758.5453%1+1)%1*e.cycle,i=((this.clock+n)%e.cycle+e.cycle)%e.cycle,s=i<e.mainG?0:i<e.mainG+e.y?1:2,a=e.mainG+e.y+e.allRed,o=i>=a&&i<a+e.crossG?0:i>=a+e.crossG&&i<a+e.crossG+e.y?1:2;return{main:s,cross:o,t:i}}mainLight(t){return this._phase(t).main}stopAhead(t,e,n){if(!this.group.visible)return 1/0;let i=this.road,s=To.stopA,a=e>0?i.junctionIndex(t+s-1):i.junctionIndex(t-s+1)-1,o=i.junction(a)-e*s,c=(o-t)*e;if(c>160||c<-1)return 1/0;let l=this._phase(a).main;return l===2||l===1&&c>n*n/8?c:1/0}collide(t,e,n){if(!this.group.visible){this.camF=1;return}let i=t.x,s=t.y+1.3,a=t.z,o=e.x-i,c=e.y-s,l=e.z-a,h=Math.hypot(o,c,l);if(h<.5)return;let f=this._near||(this._near=[]);f.length=0;let u=h+25;for(let v of this.blocks.values()){let m=v.userData.obb;for(let p=0;p<m.length;p+=7)Math.abs(m[p]-i)<u&&Math.abs(m[p+1]-a)<u&&f.push(p,m)}let d=1,g=.6;for(let v=.8;v<=h+g&&d===1;v+=.35){let m=i+o*v/h,p=s+c*v/h,x=a+l*v/h;for(let b=0;b<f.length;b+=2){let _=f[b],M=f[b+1];if(p>M[_+6]+g)continue;let y=m-M[_],w=x-M[_+1],L=y*M[_+2]-w*M[_+3],E=y*M[_+3]+w*M[_+2];if(Math.abs(L)<M[_+4]+g&&Math.abs(E)<M[_+5]+g){d=Math.max(.05,(v-g)/h);break}}}this.camF=d<this.camF?d:this.camF+(d-this.camF)*(1-Math.exp(-n*2.5)),this.camF<.999&&e.set(i+o*this.camF,s+c*this.camF,a+l*this.camF)}set visible(t){this.group.visible=t,t||this.reset()}get visible(){return this.group.visible}reset(){for(let t of this.blocks.values())this._dispose(t);this.blocks.clear()}update(t,e,n=0,i=1,s=500,a=0){if(!this.group.visible)return;this.uSig.uScale.value=s,this.uSig.uFogD.value=a,this.uSig.uDay.value=1-e,this.clock+=n*this.clockRate;let o=this._c;for(let[u,d]of this.blocks){let g=d.userData.lens;if(!g)continue;let v=this._phase(u),m=3+4*e;for(let p=0;p<g.kind.length;p++){let x=(g.kind[p]?v.cross:v.main)===g.col[p],b=x?J0[g.col[p]]:tw[g.col[p]];g.mesh.setColorAt(p,o.setRGB(b[0]*(x?m:1),b[1]*(x?m:1),b[2]*(x?m:1)))}if(g.mesh.instanceColor.needsUpdate=!0,g.glow){let p=g.glow.geometry.attributes.aCol;for(let x=0;x<g.kind.length;x++){let b=(g.kind[x]?v.cross:v.main)===g.col[x],_=J0[g.col[x]];p.setXYZ(x,b?_[0]*3:0,b?_[1]*3:0,b?_[2]*3:0)}p.needsUpdate=!0}}this.lastS=t,this.uLit.value=e,this.uGlow.value=.15+1.6*e,this.vendFront.emissiveIntensity=.25+1.1*e;let c=this.road,l=c.junctionIndex(t-$E)-1,h=c.junctionIndex(t+QE),f=[];for(let u=l;u<=h;u++)this.blocks.has(u)||f.push(u);f.sort((u,d)=>Math.abs(c.junction(u)-t)-Math.abs(c.junction(d)-t));for(let u=0;u<i&&u<f.length;u++)this.blocks.set(f[u],this._build(f[u]));for(let[u,d]of this.blocks)(u<l||u>h)&&(this._dispose(d),this.blocks.delete(u))}prime(t){this.group.visible&&this.update(t,this.uLit.value,0,99)}lamps(){let t=[];if(this.group.visible)for(let e of this.blocks.values())for(let n of e.userData.lampsJ||[])t.push(n);return t}_dispose(t){this.group.remove(t),t.traverse(e=>{e.isInstancedMesh&&e.dispose(),e.geometry&&e.geometry.userData.own&&e.geometry.dispose()})}groundJ(t,e){let n=t.x+t.rx*e,i=t.z+t.rz*e,s=Math.abs(e),a=Math.min(1,Math.max(0,(s-be.hw-1.2)/14.8));return t.y+(Si(n,i)-t.y)*a*a*(3-2*a)-.02}_frame(t){let e=this.road.at(t,{});return{x:e.x,y:e.y,z:e.z,rx:Math.cos(e.th),rz:-Math.sin(e.th),fx:-Math.sin(e.th),fz:-Math.cos(e.th),th:e.th}}_build(t){let e=this.road,n=new Pt,i=e.junction(t),s=e.junction(t+1),a=be.hw,o=be.walk,c=be.side,l=be.sideWalk,h=a+o+.4,f={pos:[],nor:[],col:[],idx:[]},u={pos:[],nor:[],uv:[],idx:[]},d={pos:[],nor:[],uv:[],idx:[]},g={pos:[],nor:[],uv:[],idx:[]},v=[],m=[.86,.86,.83],p=[.86,.66,.16],x=[.85,.7,.12],b=(R,S,O,V)=>{let K=Math.abs(V),q=Math.min(1,Math.max(0,(K-a-1.2)/14.8));return O+(Si(R,S)-O)*q*q*(3-2*q)-.02},_=(R,S,O,V,K)=>{let q=R.pos.length/3;for(let Mt=0;Mt<4;Mt++)R.pos.push(S[Mt][0],S[Mt][1],S[Mt][2]),R.nor.push(O[0],O[1],O[2]),R.col&&R.col.push(...V),R.uv&&R.uv.push(...K?K[Mt]:[0,0]);let ot=S[1][0]-S[0][0],rt=S[1][1]-S[0][1],ct=S[1][2]-S[0][2],ut=S[2][0]-S[0][0],xt=S[2][1]-S[0][1],Q=S[2][2]-S[0][2],wt=rt*Q-ct*xt,Rt=ct*ut-ot*Q,Lt=ot*xt-rt*ut;wt*O[0]+Rt*O[1]+Lt*O[2]>=0?R.idx.push(q,q+1,q+2,q,q+2,q+3):R.idx.push(q,q+2,q+1,q,q+3,q+2)},M=[0,1,0],y=(R,S,O)=>{let V=e.at(R,this._p);return[V.x+Math.cos(V.th)*S,V.y+O,V.z-Math.sin(V.th)*S]},w=(R,S,O,V,K,q,ot,rt)=>{if(O<=S)return;let ct=Math.max(1,Math.ceil((O-S)/2));for(let ut=0;ut<ct;ut++){let xt=S+(O-S)*ut/ct,Q=S+(O-S)*(ut+1)/ct;_(R,[y(xt,V,q),y(Q,V,q),y(Q,K,q),y(xt,K,q)],M,ot,rt&&[rt(xt,V),rt(Q,V),rt(Q,K),rt(xt,K)])}},L=(R,S,O,V,K,q,ot)=>{let rt=Math.max(1,Math.ceil((O-S)/2));for(let ct=0;ct<rt;ct++){let ut=S+(O-S)*ct/rt,xt=S+(O-S)*(ct+1)/rt,Q=e.at((ut+xt)/2,this._q),wt=[-Math.cos(Q.th)*ot,0,Math.sin(Q.th)*ot];_(R,[y(ut,V,K),y(xt,V,K),y(xt,V,q),y(ut,V,q)],wt,null,[[0,ut/2],[0,xt/2],[.1,xt/2],[.1,ut/2]])}},E=this._frame(i),A=(R,S)=>E.x+E.fx*R+E.rx*S,D=(R,S)=>E.z+E.fz*R+E.rz*S,F=R=>b(A(0,R),D(0,R),E.y,R),k=(R,S,O)=>[A(R,S),F(S)+O,D(R,S)],P=(R,S,O,V,K,q,ot,rt)=>{let ct=Math.min(V,K),ut=Math.max(V,K),xt=[ct];for(let Q=Math.ceil((ct-a)/4);a+Q*4<ut;Q++){let wt=a+Q*4;wt>ct&&xt.push(wt)}for(let Q=Math.ceil((ct+a)/4);-a+Q*4<ut;Q++){let wt=-a+Q*4;wt>ct&&wt<0&&xt.push(wt)}xt.push(ut),xt.sort((Q,wt)=>Q-wt);for(let Q=0;Q+1<xt.length;Q++){let wt=xt[Q],Rt=xt[Q+1];Rt-wt<.001||_(R,[k(S,wt,q),k(O,wt,q),k(O,Rt,q),k(S,Rt,q)],M,ot,rt&&[rt(S,wt),rt(O,wt),rt(O,Rt),rt(S,Rt)])}};for(let R of[-1,1]){let S=R*a,O=R*xa;P(d,-c,c,S,O,.05,null,(V,K)=>[(V+c)/(2*c),K/12]);for(let V of[-1,1]){P(u,V*c,V*(c+l),R*h,O,In,null,(K,q)=>[K/2,q/2]);for(let K=h;K<xa;K+=4){let q=Math.min(xa,K+4);_(u,[k(V*c,R*K,.03),k(V*c,R*q,.03),k(V*c,R*q,In),k(V*c,R*K,In)],[-V*E.fx,0,-V*E.fz],null,[[0,K/2],[0,q/2],[.1,q/2],[.1,K/2]])}}for(let V=-c+.35;V<c-.3;V+=.9)P(f,V,V+.45,R*(a+.7),R*(a+3.4),ei,m);P(f,R*.15,R*(c-.2),R*(a+4),R*(a+4.45),ei,m);for(let V=h+3;V<xa-3;V+=6)P(f,-.07,.07,R*V,R*(V+3),ei,m)}for(let R of[-1,1])for(let S=-a+.35;S<a-.4;S+=.9)P(f,R*6.4,R*10.4,S,S+.45,ei,m);P(f,-11.9,-11.45,.2,a-.3,ei,m),P(f,11.45,11.9,-a+.3,-.2,ei,m);let C=i+10.4,I=s-10.4;for(let R of[-1,1]){w(f,C,I,R*.1,R*.25,ei,p),w(f,i+6,s-6,R*(a-.4),R*(a-.25),ei,m);let S=i+12,O=s-12;w(f,S,Math.min(O,S+30),R*3.42,R*3.58,ei,m),w(f,Math.max(S,O-30),O,R*3.42,R*3.58,ei,m);for(let V=Math.ceil((S+30)/10);V*10+5<O-30;V++)w(f,V*10,V*10+5,R*3.42,R*3.58,ei,m)}for(let R of be.lanes){let S=s-11.9-8;w(f,S-3.2,S,R-.08,R+.08,ei,m);for(let O=0;O<4;O++){let V=.45-O*.11;w(f,S+O*.25,S+(O+1)*.25,R-V,R+V,ei,m)}}let N=i+c,U=s-c;for(let R of[-1,1]){let S=R*a,O=R*h;w(u,N,U,S,O,In,null,(V,K)=>[K/2,V/2]),L(u,N,U,S,.03,In,R);for(let[V,K]of[[N,1],[U,-1]]){let q=e.at(V,this._q);_(u,[y(V,S,.03),y(V,O,.03),y(V,O,In),y(V,S,In)],[Math.sin(q.th)*K,0,Math.cos(q.th)*K],null,[[0,0],[2,0],[2,.1],[0,.1]])}w(f,N+.5,U-.5,R*(a+2.3),R*(a+2.6),In+.006,x)}let z=[],W=[],j=[],it=[],B=El(t*7919+17),Z=(R,S)=>{let O=B();return R===3?2:R===2?5+Math.floor(O*(S?14:8)):R===1?4+Math.floor(O*(S?9:6)):2+Math.floor(O*O*5)},lt=(R,S)=>{let O=e.curvature(R);return O*S<0&&Math.abs(S)>.55/Math.max(Math.abs(O),1e-6)},ht=(R,S,O,V,K,q,ot,rt,ct)=>{let ut=Math.cos(O),xt=Math.sin(O),Q=ct;for(let[te,se]of[[-V/2,-K/2],[V/2,-K/2],[-V/2,K/2],[V/2,K/2]])Q=Math.min(Q,Si(R+ut*te+xt*se,S-xt*te+ut*se));let wt=Q-.4,Rt=Math.round((ct-wt)*50)/50,Lt=Z(q,rt),Mt=B(),pt=(ot?3.6:0)+Lt*(q===2?3.6:q===3?2.9:3)+(q===3?0:.6),Bt=Z0[q===2?B()<.5?2:5:Math.floor(B()*Z0.length)];return z.push([R,S,O,V,pt,K,q,Mt,ot?1:0,Math.floor(B()*16),Bt,q===3,wt,Rt]),W.push(R,S,ut,xt,V/2,K/2,ct+pt*(q===3?1.45:1)),pt},_t=R=>{let S=B();return R?S<.58?0:S<.83?1:S<.96?2:3:S<.3?3:S<.6?1:S<.8?0:2},Ut=i+c+l+18,Xt=s-c-l-18;for(let R of[-1,1]){let S=i+c+l+.4,O=s-c-l-.4,V=S;for(;S<O-4;){let q=B(),ot=S>Ut&&S<Xt-20&&S-V>25;if(ot&&q<.13){S=this._alley(S,2.6+1.3*B(),R,u,v,b,h),V=S;continue}if(ot&&q<.21){S=this._lot(S,10+8*B(),R,g,v,b,h),V=S;continue}let rt=Math.min(O-S,5+9*B()*B()+2*B()),ct=10+8*B(),ut=e.at(S+rt/2,this._p),xt=R*(h+ct/2),Q=ut.x+Math.cos(ut.th)*xt,wt=ut.z-Math.sin(ut.th)*xt,Rt=ut.th+(R>0?-Math.PI/2:Math.PI/2),Lt=_t(!0),Mt=Lt!==3&&B()<.8,pt=ut.y+In,Bt=ht(Q,wt,Rt,rt,ct,Lt,Mt,!1,pt);if(Lt===0&&Bt>9&&B()<.6){let te=(B()<.5?-1:1)*(rt/2-.45),se=ct/2+.42,Kt=Math.min(Bt-5,3+4*B()),ft=Math.cos(Rt),G=Math.sin(Rt);j.push([Q+ft*te+G*se,wt-G*te+ft*se,Rt,pt+4.3,Kt,Math.floor(B()*16)])}if(Mt&&B()<.22){let te=S+.8+B()*Math.max(.1,rt-1.6),se=e.at(te,this._q),Kt=R*(a+o-.05);it.push([se.x+Math.cos(se.th)*Kt,se.y+In,se.z-Math.sin(se.th)*Kt,Rt])}S+=rt+(B()<.3?.4+B()*1.2:.05)}let K=h+18.6;for(let[q,ot]of[[i+c+l+.3,1],[s-c-l-.3,-1]]){let rt=this._frame(q),ct=K;for(;ct<xa-8;){let ut=7+7*B(),xt=10+6*B(),Q=ot*xt/2,wt=R*(ct+ut/2);if(!lt(q,wt)){let Rt=rt.x+rt.fx*Q+rt.rx*wt,Lt=rt.z+rt.fz*Q+rt.rz*wt,Mt=rt.x+rt.rx*wt,pt=rt.z+rt.rz*wt,Bt=_t(!1);ht(Rt,Lt,rt.th+(ot>0?0:Math.PI),ut,xt,Bt,Bt!==3&&ct<70&&B()<.5,ct>90,b(Mt,pt,rt.y,wt)+In)}ct+=ut+.3+B()*1.5}}for(let q=Ut;q<Xt-9;q+=15){let ot=this._frame(q+7.5);for(let rt=K;rt<xa-10;rt+=17){let ct=B()<.15,ut=8+5*B(),xt=9+5*B(),Q=R*(rt+8.5),wt=(B()-.5)*2;if(ct||lt(q+7.5,Q))continue;let Rt=ot.x+ot.fx*wt+ot.rx*Q,Lt=ot.z+ot.fz*wt+ot.rz*Q,Mt=rt>90,pt=Mt&&B()<.12?2:_t(!1);ht(Rt,Lt,ot.th+(B()<.5?0:Math.PI)+(B()<.5?Math.PI/2:0),ut,xt,pt,!1,Mt,Si(Rt,Lt))}}}n.userData.obb=W;let Ht=(R,S,O,V)=>{if(!R.idx.length)return null;let K=new Tt;K.setAttribute("position",new mt(R.pos,3)),K.setAttribute("normal",new mt(R.nor,3)),O&&K.setAttribute("uv",new mt(R.uv,2)),V&&K.setAttribute("color",new mt(R.col,3)),K.setIndex(R.idx),K.userData.own=!0;let q=new kt(K,S);return q.receiveShadow=!0,n.add(q),q},ne=Ht(d,this.roadMat,!0,!1);ne&&(ne.geometry.setAttribute("aDirt",new Et(new Float32Array(d.pos.length/3),1)),ne.layers.set(3)),Ht(u,this.walkMat,!0,!1),Ht(g,this.lotMat,!0,!1),Ht(f,this.markMat,!1,!0);let J=this._m,Ge=this._qt,Ot=this._v,Yt=this._s,It=this._c;for(let R of[!1,!0]){let S=z.filter(ot=>ot[11]===R);if(!S.length)continue;let O=R?this.houseGeo:this.boxGeo,V=new Tt;for(let ot of["position","normal","aRoof"])V.setAttribute(ot,O.attributes[ot].clone());let K=new Float32Array(S.length*4),q=new Ee(V,this.facade,S.length);q.instanceColor=new Ye(new Float32Array(S.length*3),3),S.forEach(([ot,rt,ct,ut,xt,Q,wt,Rt,Lt,Mt,pt,,Bt,te],se)=>{Ge.setFromAxisAngle(this._up,ct),J.compose(Ot.set(ot,Bt,rt),Ge,Yt.set(ut,xt+te,Q)),q.setMatrixAt(se,J),q.setColorAt(se,It.setRGB(pt[0],pt[1],pt[2],ue)),K.set([wt,Rt,Lt+2*Math.round(te*50),Mt],se*4)}),V.setAttribute("aInfo",new Ye(K,4)),V.userData.own=!0,q.castShadow=q.receiveShadow=!0,q.frustumCulled=!1,n.add(q)}if(j.length){let R=new Tt;for(let V of["position","normal","uv"])R.setAttribute(V,this.signGeo.attributes[V].clone());R.setIndex(this.signGeo.index.clone()),R.userData.own=!0;let S=new Float32Array(j.length),O=new Ee(R,this.signMat,j.length);j.forEach(([V,K,q,ot,rt,ct],ut)=>{Ge.setFromAxisAngle(this._up,q),J.compose(Ot.set(V,ot,K),Ge,Yt.set(.14,rt,.8)),O.setMatrixAt(ut,J),S[ut]=ct}),R.setAttribute("aCell",new Ye(S,1)),O.castShadow=!0,O.frustumCulled=!1,n.add(O)}if(it.length){let R=new Ee(this.vendGeo,[this.vendBody,this.vendBody,this.vendBody,this.vendBody,this.vendFront,this.vendBody],it.length);it.forEach(([S,O,V,K],q)=>{Ge.setFromAxisAngle(this._up,K),J.compose(Ot.set(S,O,V),Ge,Yt.set(1,1,1)),R.setMatrixAt(q,J)}),R.castShadow=!0,R.frustumCulled=!1,n.add(R)}let Pe=R=>{let S=R*_l+8,O=e.nearJunction(S);return Math.abs(S-O)<9?null:S},Qt=[];for(let R=Math.ceil((i-8)/_l);R*_l+8<s;R++){let S=Pe(R);if(S===null)continue;let O=R+1,V=Pe(O);V===null&&(V=Pe(++O));for(let K of[-1,1]){let q=K*(a+.45),ot=e.at(S,this._p);if(Qt.push([ot.x+Math.cos(ot.th)*q,ot.y+In,ot.z-Math.sin(ot.th)*q,ot.th]),V===null)continue;let rt=e.at(V,this._q);for(let[ct,ut,xt]of[[-.9,9.66,.55],[0,9.66,.55],[.9,9.66,.55],[-.7,10.46,.45],[.7,10.46,.45],[.15,6.3,.8]]){let Q=q+ct,wt=ot.x+Math.cos(ot.th)*Q,Rt=ot.z-Math.sin(ot.th)*Q,Lt=rt.x+Math.cos(rt.th)*Q,Mt=rt.z-Math.sin(rt.th)*Q,pt=ot.y+In+ut,Bt=rt.y+In+ut,te=Math.hypot(Lt-wt,Mt-Rt),se=xt*te/_l,Kt=wt,ft=pt,G=Rt;for(let bt=1;bt<=8;bt++){let gt=bt/8,qt=wt+(Lt-wt)*gt,Gt=Rt+(Mt-Rt)*gt,Te=pt+(Bt-pt)*gt-4*se*gt*(1-gt);v.push(Kt,ft,G,qt,Te,Gt),Kt=qt,ft=Te,G=Gt}}}}if(Qt.length){let R=new Ee(this.poleGeo,this.poleMat,Qt.length);Qt.forEach(([S,O,V,K],q)=>{Ge.setFromAxisAngle(this._up,K+Math.PI/2),J.compose(Ot.set(S,O,V),Ge,Yt.set(1,1,1)),R.setMatrixAt(q,J)}),R.castShadow=!0,R.frustumCulled=!1,n.add(R)}if(v.length){let R=new Tt;R.setAttribute("position",new mt(v,3)),R.userData.own=!0;let S=new Ui(R,this.wireMat);S.frustumCulled=!1,n.add(S)}return this._signals(n,E,F),this.group.add(n),n}_signals(t,e,n){let i=be.hw,s=be.side,a=(P,C)=>[e.x+e.fx*P+e.rx*C,e.z+e.fz*P+e.rz*C],o=[],c=[],l=[],h=(P,C)=>Math.atan2(P,C),f=n(0)+.2,u=(P,C)=>{let[I,N]=a(P,C*(i+.7)),[U,z]=a(P,C*3.6);c.push([I,f,N,5.9]),l.push([I,f+5.7,N,Math.atan2(-(z-N),U-I),Math.hypot(U-I,z-N)+.7]),o.push([U,f+5.55,z,h(C>0?-e.fx:e.fx,C>0?-e.fz:e.fz),0])};u(11,1),u(-11,-1);for(let P of[-1,1]){let C=P*(s+1),[I,N]=a(C,-P*(i+.8));c.push([I,f,N,4.4]),o.push([I,f+4.2,N,h(P*e.rx,P*e.rz),1])}let d=this._m,g=this._qt,v=this._v,m=this._s,p=(P,C,I,N)=>{let U=new Ee(P,C,I.length);return I.forEach((z,W)=>{N(z),U.setMatrixAt(W,d)}),U.castShadow=!0,U.frustumCulled=!1,t.add(U),U};p(this.sigPoleGeo,this.sigMat,c,([P,C,I,N])=>d.compose(v.set(P,C,I),g.identity(),m.set(1,N,1))),p(this.armGeo,this.sigMat,l,([P,C,I,N,U])=>d.compose(v.set(P,C,I),g.setFromAxisAngle(this._up,N),m.set(U,1,1))),p(this.headGeo,this.sigMat,o,([P,C,I,N])=>d.compose(v.set(P,C,I),g.setFromAxisAngle(this._up,N),m.set(1,1,1)));let x=[],b=[],_=[];for(let[P,C,I,N,U]of o){let z=Math.cos(N),W=Math.sin(N);for(let j=0;j<3;j++){let it=(j-1)*.42,B=.16;x.push([P+z*it+W*B,C,I-W*it+z*B,N]),b.push(U),_.push(j)}}let M=p(this.lensGeo,this.lensMat,x,([P,C,I,N])=>d.compose(v.set(P,C,I),g.setFromAxisAngle(this._up,N),m.set(1,1,1)));M.castShadow=!1,M.instanceColor=new Ye(new Float32Array(x.length*3),3);let y=new Tt;y.setAttribute("position",new mt(x.flatMap(([P,C,I,N])=>[P+Math.sin(N)*.05,C,I+Math.cos(N)*.05]),3)),y.setAttribute("aDir",new mt(x.flatMap(([,,,P])=>[Math.sin(P),0,Math.cos(P)]),3)),y.setAttribute("aCol",new mt(new Float32Array(x.length*3),3)),y.userData.own=!0;let w=new en(y,this.sigGlowMat);w.frustumCulled=!1,w.renderOrder=6,t.add(w),t.userData.lens={mesh:M,kind:Int8Array.from(b),col:Int8Array.from(_),glow:w};let L=this.scenery,E=[],A=[];for(let P of[-1,1])for(let C of[-1,1]){let[I,N]=a(P*(s+3.4),C*(i+.9)),U=e.x-I,z=e.z-N,W=Math.hypot(U,z),j=U/W,it=z/W,B=Math.atan2(it,-j);E.push([I,f,N,B]);let Z=[I+j*1.75,f+10.88,N+it*1.75];A.push([Z,[I+j*7.9,f,N+it*7.9]])}if(L){p(L.lampGeo,L.poleMat,E,([I,N,U,z])=>d.compose(v.set(I,N,U),g.setFromAxisAngle(this._up,z),m.set(1,1,1))),p(L.bulbGeo,L.bulbMat,A,([I])=>d.compose(v.set(I[0],I[1],I[2]),g.identity(),m.set(1,1,1))).castShadow=!1;let P=new Tt;P.setAttribute("position",new mt(A.flatMap(([I])=>I),3)),P.userData.own=!0;let C=new en(P,L.glowMat);C.frustumCulled=!1,C.renderOrder=3,t.add(C)}t.userData.lampsJ=A;let D=[],F=(P,C,I,N,U,z=2.5)=>{let[W,j]=a(P,C);D.push([W,n(C)+.2,j,Math.atan2(I,N),U,z])};F(-11.2,i+.55,-e.fx,-e.fz,0),F(11.2,-(i+.55),e.fx,e.fz,0),F(s+.7,i+4.6,e.rx,e.rz,1,2.2),F(-(s+.7),-(i+4.6),-e.rx,-e.rz,1,2.2),F(60,i+.55,-e.fx,-e.fz,2),F(95,-(i+.55),e.fx,e.fz,3);let k=(P,C)=>{let I=new Tt;for(let N of["position","normal","uv"])I.setAttribute(N,this.signPlate.attributes[N].clone());I.setIndex(this.signPlate.index.clone()),I.setAttribute("aCell",new Ye(Float32Array.from(D.map(N=>N[4])),1)),I.userData.own=!0,p(I,P,D,([N,U,z,W,,j])=>d.compose(v.set(N-Math.sin(W)*(C?.012:0),U+j,z-Math.cos(W)*(C?.012:0)),g.setFromAxisAngle(this._up,W+(C?Math.PI:0)),m.set(1,1,1)))};k(this.roadSignMat,!1),k(this.signBackMat,!0),p(this.signPost,this.sigMat,D,([P,C,I,N,,U])=>d.compose(v.set(P-Math.sin(N)*.03,C,I-Math.cos(N)*.03),g.identity(),m.set(1,U+.1,1)))}_alley(t,e,n,i,s,a,o){let c=this._frame(t+e/2),l=o+18.2,h=(E,A,D)=>[c.x+c.fx*E+c.rx*n*A,D,c.z+c.fz*E+c.rz*n*A],f=c.y+In,u=a(c.x+c.rx*n*l,c.z+c.rz*n*l,c.y,l),d=Math.min(6,Math.max(1,u-f+1.2)),g=Math.round(d/.17),v=d/g,m=.3,p=-e/2+.05,x=e/2-.05,b=[-c.rx*n,0,-c.rz*n];for(let E=0;E<g;E++){let A=o+E*m,D=A+m,F=f+E*v,k=F+v;this._q4(i,[h(p,A,F),h(x,A,F),h(x,A,k),h(p,A,k)],b,[[0,0],[e/2,0],[e/2,.1],[0,.1]]),this._q4(i,[h(p,A,k),h(x,A,k),h(x,D,k),h(p,D,k)],[0,1,0],[[0,A/2],[e/2,A/2],[e/2,D/2],[0,D/2]])}let _=o+g*m,M=f+d;this._q4(i,[h(p,_,M),h(x,_,M),h(x,l,M),h(p,l,M)],[0,1,0],[[0,_/2],[e/2,_/2],[e/2,l/2],[0,l/2]]);let y=h(0,o-.2,f+.9),w=h(0,_,M+.9),L=h(0,_+1.5,M+.9);s.push(...y,...w,...w,...L);for(let[E,A]of[[y,f],[w,M]])s.push(E[0],A,E[2],...E);return t+e}_lot(t,e,n,i,s,a,o){let c=this._frame(t+e/2),l=o+18.2,h=(d,g)=>{let v=c.x+c.fx*d+c.rx*n*g,m=c.z+c.fz*d+c.rz*n*g;return[v,a(v,m,c.y,g)+.03,m]};for(let d=o-.3;d<l;d+=4){let g=Math.min(l+1,d+4);this._q4(i,[h(-e/2,d),h(e/2,d),h(e/2,g),h(-e/2,g)],[0,1,0],[[0,d/3],[e/3,d/3],[e/3,g/3],[0,g/3]])}let f=c.y+In,u=(d,g)=>[c.x+c.fx*d+c.rx*n*(o-.1),f+g,c.z+c.fz*d+c.rz*n*(o-.1)];for(let d=-e/2+.3;d<=e/2-.3;d+=2)s.push(...u(d,0),...u(d,1.1));for(let d of[.5,1.05])s.push(...u(-e/2+.3,d),...u(e/2-.3,d));return t+e}_q4(t,e,n,i){let s=t.pos.length/3;for(let v=0;v<4;v++)t.pos.push(...e[v]),t.nor.push(...n),t.uv.push(...i[v]);let a=e[1][0]-e[0][0],o=e[1][1]-e[0][1],c=e[1][2]-e[0][2],l=e[2][0]-e[0][0],h=e[2][1]-e[0][1],f=e[2][2]-e[0][2],u=o*f-c*h,d=c*l-a*f,g=a*h-o*l;u*n[0]+d*n[1]+g*n[2]>=0?t.idx.push(s,s+1,s+2,s,s+2,s+3):t.idx.push(s,s+2,s+1,s,s+3,s+2)}};var wl=Object.freeze({intensity:36,distance:165,angle:1.29,penumbra:.9,decay:.87,glowOpacity:.29,glowSize:2.9,color:"#ffe4a8",glowColor:"#ffb43f"});function pr(r,t,{spots:e=!0,glows:n=!0}={}){let i=(e?[-1,1]:[]).map(()=>{let a=new Hs(16766624,0,110,.8,1,.55);return r.add(a,a.target),a}),s=(n?[-1,1]:[]).map(()=>{let a=new Cn(new wn({map:t,color:16761975,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:Xe,fog:!1}));return a.renderOrder=6,a.scale.set(2.1*1.35,2.1*.85,1),r.add(a),a});return{spots:i,glows:s,tune:{...wl},eye:new T,forward:new T}}function ya(r){if(r.lamps)return r.lamps;let t=r.width*.3,e=Math.min(.7,r.height*.45);return{head:[t,e,-r.length/2+.25],tail:[t,e+.05,r.length/2]}}function mr(r,t){let[e,n,i]=ya(t).head;r.spots.forEach((s,a)=>{let o=a?e:-e;s.position.set(o,n,i),s.target.position.set(o*.9,0,i-40)}),r.glows.forEach((s,a)=>s.position.set(a?e:-e,n,i-.03))}function ks(r,t,e,n){let i=r.tune||wl;r.spots.forEach(a=>{a.color.set(i.color),a.intensity=i.intensity*n,a.distance=i.distance,a.angle=i.angle,a.penumbra=i.penumbra,a.decay=i.decay});let s=1;e&&(t.updateWorldMatrix(!0,!0),(r.glows[0]||t).getWorldPosition(r.eye),r.eye.subVectors(e.position,r.eye).normalize(),r.forward.set(0,0,-1).transformDirection(t.matrixWorld),s=Ne.smoothstep(r.eye.dot(r.forward),-.05,.35)),r.glows.forEach(a=>{a.material.color.set(i.glowColor),a.material.opacity=i.glowOpacity*n*s,a.scale.set(i.glowSize*1.35,i.glowSize*.85,1),a.visible=n*s>.01})}var mw=1/3.6,Tl=480,qf=170,Sl=[30,70],Q0=120;function ze(r,t,e,n,i){let s=[[-t[0],t[3],t[1]],[t[0],t[3],t[1]],[t[0],t[3],t[2]],[-t[0],t[3],t[2]],[-e[0],e[3],e[1]],[e[0],e[3],e[1]],[e[0],e[3],e[2]],[-e[0],e[3],e[2]]],a=[[0,1,2,3],[4,7,6,5],[0,4,5,1],[1,5,6,2],[2,6,7,3],[3,7,4,0]];for(let o of a){let[c,l,h,f]=o.map(d=>s[d]),u=new T().subVectors(new T(...l),new T(...c)).cross(new T().subVectors(new T(...h),new T(...c))).normalize();for(let d of[c,l,h,c,h,f])r.pos.push(...d),r.nor.push(u.x,u.y,u.z),r.col.push(...n),r.tint.push(i.tint?1:0),r.glow.push(i.glow?1:0),r.gloss.push(i.gloss?1:0),r.flash.push(i.flash?d[0]>0?2:1:0)}}var gw=(r,t,e,n,i,s,a,o={})=>ze(r,[n/2,e-s/2,e+s/2,t-i/2],[n/2,e-s/2,e+s/2,t+i/2],a,o);function Us(r,t,e,n,i,s,a=[.05,.05,.055]){let o=new Ve(i,i,s,12).rotateZ(Math.PI/2).translate(t,e,n).toNonIndexed(),c=o.attributes.position.array,l=o.attributes.normal.array;for(let h=0;h<c.length/3;h++){r.pos.push(c[h*3],c[h*3+1],c[h*3+2]),r.nor.push(l[h*3],l[h*3+1],l[h*3+2]);let f=Math.abs(l[h*3])>.9?.55:1;r.col.push(...f<1?[.42,.43,.45]:a),r.tint.push(0),r.glow.push(0),r.gloss.push(0),r.flash.push(0)}}var vw=()=>({pos:[],nor:[],col:[],tint:[],glow:[],gloss:[],flash:[]}),ds=[1,1,1],Ea=[.05,.07,.09],$0=[.08,.08,.09],Os=[.25,.25,.27],eg=[1,.95,.85],ng=[.9,.05,.03],ps={tint:!0},gr={gloss:!0},Ma={glow:!0};function Ze(r,t,e,n,i,s,a,o,c={}){let l=r.pos.length;gw(r,e,n,i,s,a,o,c);for(let h=l;h<r.pos.length;h+=3)r.pos[h]+=t}function wa(r,t,e,n,i,s=.3){for(let a of[-1,1])Ze(r,a*(t-s/2-.05),e,n-.02,s,.13,.05,eg,Ma),Ze(r,a*(t-s/2-.05),e,i+.02,s,.12,.05,ng,Ma)}function tg(r,{L:t=4.5,W:e=1.75,H:n=1.44,taxi:i=!1}={}){let s=e/2,a=-t/2,o=t/2;ze(r,[s,a+.1,o-.05,.32],[s,a,o,.92],ds,ps),ze(r,[s-.06,a+1.05,o-.55,.92],[s-.2,a+1.65,o-1.05,n-.05],Ea,gr),ze(r,[s-.2,a+1.66,o-1.06,n-.06],[s-.22,a+1.7,o-1.1,n],ds,ps),Ze(r,0,.42,a+.02,e-.1,.18,.12,Os),Ze(r,0,.42,o-.02,e-.1,.18,.12,Os),wa(r,s,.78,a,o);for(let[c,l]of[[-1,a+.85],[1,a+.85],[-1,o-.8],[1,o-.8]])Us(r,c*(s-.1),.32,l,.32,.24);i&&Ze(r,0,n+.11,a+2,.5,.2,.22,[1,.85,.4],Ma)}function xw(r){ze(r,[.74,-1.7+.05,1.7,.3],[.74,-1.7,1.7,.95],ds,ps),ze(r,[.74-.03,-1.7+.35,1.7-.1,.95],[.74-.1,-1.7+.75,1.7-.15,1.6],Ea,gr),ze(r,[.74-.1,-1.7+.76,1.7-.16,1.6],[.74-.1,-1.7+.78,1.7-.18,1.65],ds,ps),Ze(r,0,.38,-1.7+.01,1.4,.16,.1,Os),wa(r,.74,.8,-1.7,1.7,.26);for(let[s,a]of[[-1,-1.7+.55],[1,-1.7+.55],[-1,1.7-.55],[1,1.7-.55]])Us(r,s*(.74-.08),.28,a,.28,.2)}function bw(r){ze(r,[.85,-2.35+.05,2.35,.33],[.85,-2.35,2.35,1.05],ds,ps),ze(r,[.85-.03,-2.35+.7,2.35-.05,1.05],[.85-.08,-2.35+1.2,2.35-.1,1.85],Ea,gr),ze(r,[.85-.08,-2.35+1.21,2.35-.11,1.85],[.85-.08,-2.35+1.25,2.35-.13,1.92],ds,ps),Ze(r,0,.42,-2.35+.01,1.62,.18,.1,Os),wa(r,.85,.85,-2.35,2.35);for(let[s,a]of[[-1,-2.35+.8],[1,-2.35+.8],[-1,2.35-.8],[1,2.35-.8]])Us(r,s*(.85-.1),.33,a,.33,.24)}function yw(r){ze(r,[1.25,-5.25,5.25,.35],[1.25,-5.25,5.25,1.15],[.92,.92,.9],{}),ze(r,[1.25+.005,-5.25+.2,5.25-.2,1],[1.25+.005,-5.25+.2,5.25-.2,1.18],ds,ps),ze(r,[1.25,-5.25+.02,5.25,1.15],[1.25,-5.25+.02,5.25,2.65],Ea,gr),ze(r,[1.25,-5.25,5.25,2.65],[1.25-.05,-5.25+.05,5.25-.05,3.1],[.9,.9,.88],{}),Ze(r,0,2.85,-5.25-.01,1.7,.3,.05,[1,.55,.1],Ma);for(let s=0;s<4;s++)Ze(r,-1.25-.01,1.9,-5.25+1.5+s*2.2,.02,1.4,.08,Os);for(let s=0;s<4;s++)Ze(r,1.25+.01,1.9,-5.25+1.5+s*2.2,.02,1.4,.08,Os);wa(r,1.25,.75,-5.25,5.25,.35);for(let[s,a]of[[-1,-5.25+2.2],[1,-5.25+2.2],[-1,5.25-2.4],[1,5.25-2.4]])Us(r,s*(1.25-.15),.45,a,.45,.3)}function _w(r){ze(r,[.18,-.6,.6,.25],[.2,-.5,.75,.7],ds,ps),Ze(r,0,.78,.25,.3,.1,.6,$0),ze(r,[.18,-.75,-.55,.3],[.12,-.72,-.6,1.05],ds,ps),Ze(r,0,1.05,-.62,.62,.05,.05,$0),Ze(r,0,.95,-.76,.16,.1,.04,eg,Ma),Ze(r,0,.7,.78,.14,.07,.04,ng,Ma),Us(r,0,.25,-.62,.25,.1),Us(r,0,.25,.62,.25,.1);let t=[.16,.18,.22],e=[.12,.13,.16],n=[.75,.58,.46],i=[.85,.85,.85];ze(r,[.2,0,.35,.8],[.19,-.1,.2,1.4],t,{}),Ze(r,0,.82,-.05,.36,.14,.55,e);for(let s of[-1,1]){Ze(r,s*.17,.45,-.32,.1,.5,.12,e),ze(r,[.05,-.05,.08,1.32],[.05,-.55,-.45,1.06],t,{});for(let a=r.pos.length-108;a<r.pos.length;a+=3)r.pos[a]+=s*.22}Ze(r,0,1.47,.02,.12,.1,.12,n),Ze(r,0,1.62,.02,.28,.26,.3,i,gr)}function Mw(r){let o=[.04,.04,.045],c=[.92,.92,.9];ze(r,[.89,-2.3+.1,2.3-.05,.32],[.89,-2.3,2.3,.66],o,{}),ze(r,[.89,-2.3,2.3,.66],[.89,-2.3,2.3,.92],c,{}),ze(r,[.89-.06,-2.3+1.05,2.3-.55,.92],[.89-.2,-2.3+1.65,2.3-1.05,1.45-.05],Ea,gr),ze(r,[.89-.2,-2.3+1.66,2.3-1.06,1.45-.06],[.89-.22,-2.3+1.7,2.3-1.1,1.45],c,{}),Ze(r,0,1.45+.08,-2.3+2.2,1.1,.14,.26,[1,.06,.04],{flash:!0}),Ze(r,0,.42,-2.3+.02,1.78-.1,.18,.12,Os),wa(r,.89,.78,-2.3,2.3);for(let[l,h]of[[-1,-2.3+.85],[1,-2.3+.85],[-1,2.3-.8],[1,2.3-.8]])Us(r,l*(.89-.1),.32,h,.32,.24)}function Ew(r){let s=[.95,.95,.93],a=[.85,.08,.06];ze(r,[.95,-2.7+.05,2.7,.35],[.95,-2.7,2.7,2.25],s,{}),ze(r,[.95+.005,-2.7+.1,2.7-.05,.95],[.95+.005,-2.7+.1,2.7-.05,1.12],a,{}),ze(r,[.95+.006,-2.7-.005,-2.7+1.4,1.3],[.95-.1,-2.7+.45,-2.7+1.4,2],Ea,gr),Ze(r,0,2.33,-2.7+.6,1.3,.16,.3,a,{flash:!0}),Ze(r,0,.45,-2.7+.01,1.8,.2,.1,Os),wa(r,.95,.85,-2.7,2.7);for(let[o,c]of[[-1,-2.7+.9],[1,-2.7+.9],[-1,2.7-.9],[1,2.7-.9]])Us(r,o*(.95-.1),.35,c,.35,.26)}var _a={police:{build:Mw,len:4.6,wid:1.78,v:[40,40],max:2},ambulance:{build:Ew,len:5.4,wid:1.9,v:[40,40],max:2},sedan:{build:r=>tg(r),len:4.5,wid:1.75,v:[38,52],max:40},taxi:{build:r=>tg(r,{taxi:!0}),len:4.5,wid:1.75,v:[36,50],max:14},kei:{build:xw,len:3.4,wid:1.48,v:[34,48],max:30},van:{build:bw,len:4.7,wid:1.7,v:[34,46],max:18},bus:{build:yw,len:10.5,wid:2.5,v:[30,40],max:8},scooter:{build:_w,len:1.6,wid:.7,v:[30,44],max:24}},ww=[["sedan",.3],["kei",.24],["taxi",.1],["van",.12],["bus",.06],["scooter",.18]],Tw={police:["#ffffff"],ambulance:["#ffffff"],sedan:["#e8e8e6","#1c1d20","#8d9196","#2a3550","#6b0f14","#c9c3b6"],taxi:["#121314","#1d5a3c","#f1c232","#e8e8e6"],kei:["#f2f0ea","#e7d9b8","#9cc6d8","#e6a8b4","#4a4f55","#c8d77a"],van:["#ededea","#b8bcc0","#1c1d20","#3d5a80"],bus:["#1f6fb2","#2b9a4a","#d4382c","#e39b17"],scooter:["#d8d8d4","#1c1d20","#b0302c","#2d6db5","#e1c35a"]},Al=class{constructor(t,e,n){this.road=e,this.city=n,this.group=new Pt,this.group.visible=!1,t.add(this.group),this.uLamp={value:0},this.uTime={value:0};let i=new Wt({vertexColors:!0,roughness:.5,metalness:.1});i.onBeforeCompile=s=>{s.uniforms.uLamp=this.uLamp,s.uniforms.uTime=this.uTime,s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
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
totalEmissiveRadiance += vColor * vGlow * (0.6 + 5.0 * uLamp);`)},i.customProgramCacheKey=()=>"city-vehicle",de(i),this.meshes={};for(let[s,a]of Object.entries(_a)){let o=vw();a.build(o);let c=new Tt;c.setAttribute("position",new mt(o.pos,3)),c.setAttribute("normal",new mt(o.nor,3)),c.setAttribute("color",new mt(o.col,3)),c.setAttribute("aTint",new mt(o.tint,1)),c.setAttribute("aGlow",new mt(o.glow,1)),c.setAttribute("aGloss",new mt(o.gloss,1)),c.setAttribute("aFlash",new mt(o.flash,1));let l=new Ee(c,i,a.max);l.instanceColor=new Ye(new Float32Array(a.max*3),3),l.honk=new Ye(new Float32Array(a.max),1).setUsage(Bn),c.setAttribute("aHonk",l.honk),l.count=0,l.castShadow=!0,l.frustumCulled=!1,this.group.add(l),this.meshes[s]=l}this.cars=[],this.ctrl={lane:null,maxV:1/0},this._p={},this._m=new yt,this._q=new Vt,this._v=new T,this._one=new T(1,1,1),this._c=new et,this._up=new T(0,1,0),this.crossTimers=new Map,this.filled=!1,this.density=1,this.speedK=1}set visible(t){this.group.visible=t,t&&this._emSetup(),t||(this.cars.length=0,this.filled=!1,this.crossTimers.clear())}get visible(){return this.group.visible}spawnScripted(t,e,n,i,s,a=15){let o=this._new(t,{s:e,d:n,home:n,dir:i,color:"#ffffff"});return o.color="#ffffff",o.vMax=12,o.v=a,o.script={to:s,v:a,arrived:!1},this.cars.push(o),o}stuckBehind(t,e){return this.cars.filter(n=>!n.cross&&!n.script&&!n.crashed&&n.dir>0&&Math.abs(n.d-e)<1.8&&n.s<t&&t-n.s<30&&n.v<.6)}remove(t){let e=this.cars.indexOf(t);e>=0&&this.cars.splice(e,1)}hitTest(t,e,n,i){for(let s of this.cars){let a,o,c,l;if(s.cross?(a=this.road.junction(s.cross.n)+s.cross.a,o=s.cross.u,c=s.wid,l=s.len):(a=s.s,o=s.d,c=s.len,l=s.wid),Math.abs(a-t)<(n+c)/2-.25&&Math.abs(o-e)<(i+l)/2-.15)return s}return null}_pick(){let t=Math.random(),e="sedan";for(let[n,i]of ww)if((t-=i)<0){e=n;break}return this.cars.filter(n=>n.type===e).length>=_a[e].max&&(e="sedan"),this.cars.filter(n=>n.type===e).length>=_a[e].max?null:e}_new(t,e){let n=_a[t],i=Tw[t],s=(n.v[0]+Math.random()*(n.v[1]-n.v[0]))*mw*(t==="police"||t==="ambulance"?1:this.speedK);return Object.assign({type:t,len:n.len,wid:n.wid,vMax:s,v:s,color:i[Math.floor(Math.random()*i.length)],lat:0},e)}_free(t,e,n){for(let i of this.cars)if(!i.cross&&Math.abs(i.d-e)<1.8&&Math.abs(i.s-t)<n)return!1;return!0}update(t,e,n,i,s,a=4.6){if(!this.group.visible)return;this.uLamp.value=s,this.uTime.value+=t;let o=this.road,c=be.lanes;if(!this.filled){this.filled=!0;for(let y of[1,-1])for(let w of c)for(let L=e-qf+Math.random()*40;L<e+Tl;L+=(Sl[0]+Math.random()*(Sl[1]-Sl[0]))/this.density){let E=y*w;if(Math.abs(L-e)<15&&Math.abs(E-n)<2)continue;let A=this._pick();A&&this.cars.push(this._new(A,{s:L,d:E,home:E,dir:y}))}}for(let y of[1,-1])for(let w of c){let L=y*w,E=y<0?e+Tl-10:i<10?e-qf+10:e+Tl-10;if(Math.random()<t*.35*Math.min(1,this.density)&&this._free(E,L,Sl[0]/this.density+10)&&Math.abs(E-e)>30){let A=this._pick();if(A){let D=this._new(A,{s:E,d:L,home:L,dir:y});y>0&&E>e&&(D.vMax=Math.min(D.vMax,Math.max(4,i-2))),this.cars.push(D)}}}let l=o.junctionIndex(e-60),h=o.junctionIndex(e+330);for(let y=l;y<h;y++)for(let w of[1,-1]){let L=y*2+(w>0?1:0),E=this.crossTimers.get(L);if(E===void 0&&(E=Math.random()*4),E-=t,E<=0){E=(3+Math.random()*6)/Math.max(.05,this.density);let A=-w*Q0,D=w>0?-1.75:1.75,F=this.cars.some(P=>P.cross&&P.cross.n===y&&P.cross.du===w&&Math.abs(P.cross.u-A)<14),k=this._pick();!F&&k&&k!=="bus"&&this.cars.push(this._new(k,{cross:{n:y,u:A,a:D,du:w}}))}this.crossTimers.set(L,E)}for(let y of this.crossTimers.keys()){let w=Math.floor(y/2);(w<l-1||w>h)&&this.crossTimers.delete(y)}let f={s:e,d:n,v:i,len:a,wid:1.9,dir:1,player:!0},u=this.cars.filter(y=>!y.cross),d=(y,w)=>{let L=null,E=1/0;for(let A of u.concat([f])){if(A===y||Math.abs(A.d-w)>(A.wid||1.8)/2+y.wid/2+.2)continue;let D=(A.s-y.s)*y.dir-(A.len+y.len)/2;D>-.5&&D<E&&(E=D,L=A)}return L?{e:L,gap:E}:null},g=(y,w)=>Math.max(0,y+.6*(w-(4+1*y)));for(let y of u){if(y.crashed){y.v=0,y.lat=0;continue}if(y.script){let F=(y.script.to-y.s)*y.dir,k=F<=.2?0:Math.min(y.script.v,Math.sqrt(2*3.5*F));y.v+=Math.max(-8*t,Math.min(3*t,k-y.v)),F<=.2&&(y.v=0,y.script.arrived=!0),y.s+=y.dir*Math.max(0,y.v)*t;let P=y.home-y.d;y.lat=Math.sign(P)*Math.min(1.3,Math.abs(P)*2),y.d+=y.lat*t;continue}let w=y.vMax,L=d(y,y.d);if(L&&(L.e.dir===y.dir||L.e.player?w=Math.min(w,g(L.e.v*(L.e.dir===y.dir?1:0),L.gap)):w=Math.min(w,Math.max(0,(L.gap-6)*.5)),!y.changing&&L.gap<35&&L.e.v<y.vMax-2.5&&(L.e.dir===y.dir||L.e.player))){let F=y.dir*(Math.abs(y.home)<3.5?c[1]:c[0]);!u.concat([f]).some(P=>P!==y&&Math.abs(P.d-F)<2.2&&(P.s-y.s)*y.dir>-18-(P.len+y.len)/2&&(P.s-y.s)*y.dir<25)&&(y.home=F,y.changing=!0)}let E=this.city.stopAhead(y.s+y.dir*y.len/2,y.dir,y.v);E<1/0&&(w=Math.min(w,Math.sqrt(6*Math.max(0,E-1.2)))),y.v+=Math.max(-7*t,Math.min(2.2*t,w-y.v)),y.v=Math.max(0,y.v),y.s+=y.dir*y.v*t;let A=y.home-y.d,D=Math.sign(A)*Math.min(1.3,Math.abs(A)*2);y.lat=D,y.d+=D*t,Math.abs(A)<.03&&(y.d=y.home,y.changing=!1,y.lat=0)}let v=be.hw;for(let y of this.cars){if(!y.cross)continue;if(y.crashed){y.v=0;continue}let w=y.cross,L=y.vMax;for(let F of this.cars){if(F===y||!F.cross||F.cross.n!==w.n||F.cross.du!==w.du)continue;let k=(F.cross.u-w.u)*w.du-(F.len+y.len)/2;k>-.5&&(L=Math.min(L,g(F.v,k)))}let E=-w.du*(v+4.2),A=w.u+w.du*y.len/2,D=(E-A)*w.du;if(D>-.5){let F=this.city._phase(w.n).cross;(F===2||F===1&&D>y.v*y.v/6)&&(L=Math.min(L,Math.sqrt(6*Math.max(0,D-.5))))}y.v+=Math.max(-7*t,Math.min(2.2*t,L-y.v)),y.v=Math.max(0,y.v),w.u+=w.du*y.v*t}this.cars=this.cars.filter(y=>y.crashed||y.script?!0:y.cross?Math.abs(y.cross.u)<=Q0+2&&y.cross.n>=l-1:y.s>e-qf-20&&y.s<e+Tl+40);let m=d(f,n);this.ctrl.maxV=m&&m.e.dir===1?g(m.e.v,m.gap):1/0;let p={};for(let y in this.meshes)p[y]=0;let x=this._m,b=this._q,_=this._v,M=this._p;for(let y of this.cars){let w=this.meshes[y.type],L=p[y.type]++;if(L>=_a[y.type].max)continue;let E;if(y.cross){let A=this._frame(y.cross.n),D=A.x+A.fx*y.cross.a+A.rx*y.cross.u,F=A.z+A.fz*y.cross.a+A.rz*y.cross.u;_.set(D,this.city.groundJ(A,y.cross.u)+.05,F),E=A.th+(y.cross.du>0?-Math.PI/2:Math.PI/2)}else o.at(y.s,M),_.set(M.x+Math.cos(M.th)*y.d,M.y+.05,M.z-Math.sin(M.th)*y.d),E=M.th+(y.dir<0?Math.PI:0)-y.dir*Math.atan2(y.lat,Math.max(3,y.v));b.setFromAxisAngle(this._up,E),x.compose(_,b,this._one),w.setMatrixAt(L,x),w.setColorAt(L,this._c.set(y.color)),(y.type==="police"||y.type==="ambulance")&&((y._pos||(y._pos=new T)).copy(_),y._yaw=E),w.honk.setX(L,y.honk?1:0)}for(let y in this.meshes){let w=this.meshes[y];w.count=Math.min(p[y],_a[y].max),w.instanceMatrix.needsUpdate=!0,w.instanceColor&&(w.instanceColor.needsUpdate=!0),w.honk.needsUpdate=!0}this._emUpdate(s)}setup(t,e,n){this.scene=t,this.softTex=e,this.camera=n}_emSetup(){if(this.em||!this.scene)return;let t=(e,n,i,s)=>{let a=new Pt,o=pr(a,this.softTex,{spots:n,glows:!0});mr(o,i);let c=[-1,1].map(l=>{let h=new Cn(new wn({map:this.softTex,color:16719888,transparent:!0,opacity:0,depthWrite:!1,blending:Xe,fog:!1}));return h.position.set(l*s[0],s[1],s[2]),h.scale.set(1.5,1.1,1),h.renderOrder=6,a.add(h),h});return a.visible=!1,this.scene.add(a),{kind:e,root:a,head:o,bars:c}};this.em={police:t("police",!0,{width:1.78,length:4.6,height:1.45},[.36,1.6,-.1]),ambulance:t("ambulance",!1,{width:1.9,length:5.4,height:2.25},[.42,2.45,-2.1])},this.emPoint=new zi(16719888,0,30,1.6),this.scene.add(this.emPoint)}_emUpdate(t){if(!this.em)return;let e=Math.floor(this.uTime.value*2.2)%2,n=!1;for(let i of["police","ambulance"]){let s=this.em[i],a=this.cars.find(l=>l.type===i&&l._pos);if(s.root.visible=!!a,!a){ks(s.head,s.root,null,0);continue}s.root.position.copy(a._pos),s.root.rotation.set(0,a._yaw,0),ks(s.head,s.root,this.camera,Math.max(.6,t));let o=16718348,c=i==="police"?2051583:16777215;s.bars.forEach((l,h)=>{let f=h===e;l.material.color.setHex(h===0?o:c),l.material.opacity=f?1:.06}),n||(n=!0,this.emPoint.position.set(a._pos.x,a._pos.y+2.2,a._pos.z),this.emPoint.color.setHex(e===0?o:c),this.emPoint.intensity=9)}n||(this.emPoint.intensity=0)}_frame(t){this._fc||(this._fc=new Map);let e=this._fc.get(t);return e||(e=this.city._frame(this.road.junction(t)),this._fc.set(t,e),this._fc.size>40&&this._fc.delete(this._fc.keys().next().value)),e}};var Xf=260,Rl=90,Sw=38,So=96,ig=["#e9e6df","#2b2d33","#6d7d8f","#8c2f2f","#c9a96e","#3d5f4b","#d7c6b0","#5a4a6e","#b8c4d6","#1f3552"],Aw={officer:"#1d2a48",medic:"#e9eef2",driver:"#121214"};function Rw(){let r=[],t=[],e=[],n=[],i=[],s=[],a=(d,g,v,m,p,x,b,_,M=0,y=0)=>{let w=new re(g-d,m-v,x-p).translate((d+g)/2,(v+m)/2,(p+x)/2).toNonIndexed(),L=w.attributes.position.array,E=w.attributes.normal.array;for(let A=0;A<L.length/3;A++)r.push(L[A*3],L[A*3+1],L[A*3+2]),t.push(E[A*3],E[A*3+1],E[A*3+2]),e.push(...b),n.push(_),i.push(M),s.push(y)},o=[.16,.2,.3],c=[.07,.07,.08],l=[.78,.6,.48],h=[.06,.05,.05],f=[1,1,1];for(let d of[-1,1])a(d*.04,d*.17,.08,.86,-.08,.08,o,0,d,.86),a(d*.04,d*.17,0,.08,-.13,.09,c,0,d,.86),a(d*.21,d*.31,.82,1.42,-.06,.06,f,1,-d,1.42),a(d*.215,d*.305,.74,.82,-.05,.05,l,0,-d,1.42);a(-.21,.21,.84,1.44,-.11,.11,f,1),a(-.06,.06,1.44,1.5,-.05,.05,l,0),a(-.1,.1,1.5,1.72,-.11,.1,l,0),a(-.11,.11,1.66,1.76,-.11,.12,h,0),a(-.11,.11,1.52,1.68,.07,.12,h,0);let u=new Tt;return u.setAttribute("position",new mt(r,3)),u.setAttribute("normal",new mt(t,3)),u.setAttribute("color",new mt(e,3)),u.setAttribute("aTint",new mt(n,1)),u.setAttribute("aSwing",new mt(i,1)),u.setAttribute("aPivot",new mt(s,1)),u}var Cl=class{constructor(t,e,n){this.road=e,this.city=n,this.group=new Pt,this.group.visible=!1,t.add(this.group);let i=Rw();this.phase=new Ye(new Float32Array(So*2),2).setUsage(Bn),i.setAttribute("aWalk",this.phase);let s=new Wt({vertexColors:!0,roughness:.85});s.onBeforeCompile=a=>{a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
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
          #endif`)},s.customProgramCacheKey=()=>"city-person",de(s),this.mesh=new Ee(i,s,So),this.mesh.instanceColor=new Ye(new Float32Array(So*3),3),this.mesh.count=0,this.mesh.castShadow=!0,this.mesh.frustumCulled=!1,this.group.add(this.mesh),this.peds=[],this.timers=new Map,this._p={},this._m=new yt,this._q=new Vt,this._e=new hi(0,0,0,"YXZ"),this._v=new T,this._one=new T(1,1,1),this._c=new et,this.filled=!1,this.walkers=Sw}set visible(t){this.group.visible=t,t||(this.peds.length=0,this.filled=!1,this.timers.clear())}get visible(){return this.group.visible}_walker(t,e,n){let i=be.hw;return{s:t,u:e*(i+1+Math.random()*2.6),vs:0,vu:0,dir:n,speed:1.1+Math.random()*.5,mode:"walk",ph:Math.random()*6.28,color:ig[Math.floor(Math.random()*ig.length)]}}spawn(t,e,n){let i={s:e,u:n,vs:0,vu:0,speed:1.5,mode:"script",ph:0,color:Aw[t]||"#888888",target:null,kind:t};return this.peds.push(i),i}remove(t){let e=this.peds.indexOf(t);e>=0&&this.peds.splice(e,1)}goTo(t,e,n){t.target=[e,n]}arrived(t){return!t.target}hitTest(t,e,n,i){for(let s of this.peds)if(s.mode!=="fallen"&&s.mode!=="script"&&Math.abs(s.s-t)<n/2+.25&&Math.abs(s.u-e)<i/2+.25)return s;return null}crossingNear(t,e){for(let n of this.peds)if(n.mode==="cross"&&Math.abs(n.s-t)<3&&Math.abs(n.u-e)<3.5)return!0;return!1}update(t,e){if(!this.group.visible)return;let n=this.road,i=this.city,s=be.hw;if(!this.filled){this.filled=!0;for(let g=0;g<this.walkers;g++)this.peds.push(this._walker(e-Rl+Math.random()*(Xf+Rl),Math.random()<.5?-1:1,Math.random()<.5?-1:1))}if(this.peds.filter(g=>g.mode==="walk"||g.mode==="wait").length<this.walkers&&Math.random()<t*2){let g=Math.random()<.5?-1:1,v=g>0?e-Rl+5:e+Xf-5;this.peds.push(this._walker(v+(Math.random()-.5)*20,Math.random()<.5?-1:1,g))}let o=n.junctionIndex(e-40),c=n.junctionIndex(e+220);for(let g=o;g<c;g++){let v=this.timers.get(g)??Math.random()*3;if(v-=t,v<=0&&this.peds.length<So-8){v=4+Math.random()*7;let m=n.junction(g),p=Math.random()<.5?-1:1,x=Math.random()<.5?-1:1,b=this._walker(m+p*(6.9+Math.random()*3),x,1);b.u=x*(s+.75+Math.random()*.5),b.mode="wait",b.n=g,b.side=x,b.crossing=!0,this.peds.push(b)}this.timers.set(g,v)}for(let g of this.timers.keys())(g<o-1||g>c)&&this.timers.delete(g);for(let g of this.peds){let v=0,m=0;if(g.mode==="script"){if(g.target){let x=g.target[0]-g.s,b=g.target[1]-g.u,_=Math.hypot(x,b);_<.15?g.target=null:(v=x/_*g.speed,m=b/_*g.speed)}}else if(g.mode!=="fallen")if(g.crossing){let x=i._phase(g.n),b=42-x.t;g.mode==="wait"&&x.cross===0&&b>9&&(g.mode="cross"),g.mode==="cross"&&(m=-g.side*g.speed*1.15,g.u*g.side<-(s+.9)&&(g.crossing=!1,g.mode="walk",g.u=-g.side*(s+1.2+Math.random()*2),g.dir=Math.random()<.5?-1:1))}else{let x=g.dir>0?n.junctionIndex(g.s-4):n.junctionIndex(g.s+4)-1,b=n.junction(x),_=b-g.dir*(be.side+.3),M=(_-g.s)*g.dir,y=M>0&&M<1.2&&i._phase(x).main!==0;g.mode=y?"wait":"walk",y||(v=g.dir*g.speed)}g.s+=v*t,g.u+=m*t;let p=Math.hypot(v,m);g.ph+=p*t*5.2,g.moving=p>.05?1:0,p>.05&&(g.head=Math.atan2(m,v))}this.peds=this.peds.filter(g=>g.mode==="script"||g.mode==="fallen"||g.s>e-Rl-10&&g.s<e+Xf+10&&(!g.crossing||g.n>=o-1));let l=this._m,h=this._q,f=this._v,u=this._p,d=0;for(let g of this.peds){if(d>=So)break;n.at(g.s,u);let v=Math.abs(g.u)>be.hw&&n.nearJunction(g.s)!==null&&Math.abs(g.s-n.nearJunction(g.s))>be.side,m=u.y+(v?.2:.05),p=Math.cos(u.th),x=-Math.sin(u.th),b=-Math.sin(u.th),_=-Math.cos(u.th),M=g.head??(g.mode==="wait"&&g.crossing?g.side>0?-Math.PI/2:Math.PI/2:0),y=b*Math.cos(M)+p*Math.sin(M),w=_*Math.cos(M)+x*Math.sin(M),L=Math.atan2(-y,-w);g.mode==="fallen"?(h.setFromEuler(this._e.set(-Math.PI/2,L,0)),f.set(u.x+p*g.u,m+.12,u.z+x*g.u)):(h.setFromEuler(this._e.set(0,L,0)),f.set(u.x+p*g.u,m,u.z+x*g.u)),l.compose(f,h,this._one),this.mesh.setMatrixAt(d,l),this.mesh.setColorAt(d,this._c.set(g.color)),this.phase.setXY(d,g.ph,g.moving),d++}this.mesh.count=d,this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor.needsUpdate=!0,this.phase.needsUpdate=!0}};var Pl=class{constructor(t,e,n){this.traffic=t,this.people=e,this.hooks=n,this.active=!1}start(t,e,n,i){this.active=!0,this.t=0,this.s=t,this.d=e,this.dim=n,this.victim=i,this.step="impact",this.police=this.amb=this.officer=this.driver=null,this.medics=[],i.car&&(i.car.crashed=!0,i.car.v=0),i.ped&&(i.ped.mode="fallen",i.ped.crossing=!1),this.hooks.toast("💥 Va chạm! Đang gọi cảnh sát và xe cấp cứu…",!0)}_victimPos(){let t=this.victim;if(t.ped)return[t.ped.s,t.ped.u];let e=t.car;return e.cross?[this.traffic.road.junction(e.cross.n)+e.cross.a,e.cross.u]:[e.s,e.d]}_sirens(){for(let[t,e]of[["police",this.police],["ambulance",this.amb]]){let n=0,i=0;if(e&&this.traffic.cars.includes(e)&&e.v>.5){let s=Math.abs(e.s-this.s);n=Math.max(0,1-s/260)**1.5*.85+.15*(s<400?1:0),i=(e.d-this.d)/8}this.hooks.siren?.(t,n,i)}}update(t){if(!this.active)return;this.t+=t,this._sirens();let e=this.traffic,n=this.people,i=this.dim.length,s=this.d>=0?Math.abs(this.d)<3.5?1.75:5.25:Math.abs(this.d)<3.5?-1.75:-5.25;if(this.step==="impact"&&this.t>1.2){this.step="coming",this.police=e.spawnScripted("police",this.s-130,s,1,this.s-i/2-2.3-2.3,15);let[o,c]=this._victimPos();this.amb=e.spawnScripted("ambulance",o+140,-1.75,-1,o+6,15),this.hooks.toast("🚓🚑 Cảnh sát và xe cấp cứu đang tới…",!0)}let a=this.d-1.25;if(this.step==="coming"&&this.police.script.arrived&&(this.step="officer",this.officer=n.spawn("officer",this.police.s+.6,this.police.d-1.15),n.goTo(this.officer,this.s+.3,a-.4)),this.step==="officer"&&n.arrived(this.officer)&&(this.step="talk",this.tTalk=this.t),this.step==="talk"&&this.t-this.tTalk>2){this.step="arrest",this.hooks.driverHidden(!0),this.driver=n.spawn("driver",this.s+.4,a);let o=this.police.s+.2;n.goTo(this.driver,o,this.police.d-1.1),n.goTo(this.officer,o-.9,this.police.d-1.3),this.hooks.toast("👮 Cảnh sát đưa chú lên xe…",!0)}if(this.step==="arrest"&&n.arrived(this.driver)&&n.arrived(this.officer)&&(this.step="leaving",n.remove(this.driver),n.remove(this.officer),this.police.script=null,this.police.home=s>3.5?1.75:s>0?5.25:s,this.police.changing=!0,this.tLeave=this.t),this.amb?.script?.arrived&&!this.medics.length&&!this.ambDone){let[o,c]=this._victimPos();for(let l of[-1,1]){let h=n.spawn("medic",this.amb.s+this.amb.dir*2.6*-1,this.amb.d+l*.5);n.goTo(h,o+l*.7,c+.8),this.medics.push(h)}}if(this.medics.length&&!this.ambDone&&this.medics.every(o=>n.arrived(o))&&(this.tMed??(this.tMed=this.t),this.t-this.tMed>4)){this.victim.ped&&(n.remove(this.victim.ped),this.victim.ped=null,this.victimGone=!0);for(let o of this.medics)n.goTo(o,this.amb.s-this.amb.dir*2.6,this.amb.d);this.ambDone=!0}if(this.ambDone&&this.medics.length&&this.medics.every(o=>n.arrived(o))){for(let o of this.medics)n.remove(o);this.medics=[],this.amb.script=null}this.step==="leaving"&&this.t-this.tLeave>4&&!this.fading&&(this.fading=this.t,this.hooks.fade(!0,"🚓 Chú đã bị đưa về đồn. Bắt đầu lại — lái cẩn thận nhé!")),this.fading&&this.t-this.fading>3&&this.finish()}finish(){let t=this.traffic,e=this.people;this.victim?.car&&t.remove(this.victim.car),this.victim?.ped&&e.remove(this.victim.ped);for(let n of[this.police,this.amb])n&&(n.script=null,n.crashed&&(n.crashed=!1),t.remove(n));for(let n of[this.officer,this.driver,...this.medics||[]])n&&e.remove(n);this.active=!1,this.fading=null,this.ambDone=!1,this.tMed=null,this.medics=[],this.hooks.siren?.("police",0),this.hooks.siren?.("ambulance",0),this.hooks.driverHidden(!1),this.hooks.fade(!1),this.hooks.end()}};function zs(r,t=!1){let e=r[0].index!==null,n=new Set(Object.keys(r[0].attributes)),i=new Set(Object.keys(r[0].morphAttributes)),s={},a={},o=r[0].morphTargetsRelative,c=new Tt,l=0;for(let h=0;h<r.length;++h){let f=r[h],u=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in f.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;s[d]===void 0&&(s[d]=[]),s[d].push(f.attributes[d]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in f.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(f.morphAttributes[d])}if(t){let d;if(e)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,h),l+=d}}if(e){let h=0,f=[];for(let u=0;u<r.length;++u){let d=r[u].index;for(let g=0;g<d.count;++g)f.push(d.getX(g)+h);h+=r[u].attributes.position.count}c.setIndex(f)}for(let h in s){let f=sg(s[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,f)}for(let h in a){let f=a[h][0].length;if(f===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let u=0;u<f;++u){let d=[];for(let v=0;v<a[h].length;++v)d.push(a[h][v][u]);let g=sg(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function sg(r){let t,e,n,i=-1,s=0;for(let l=0;l<r.length;++l){let h=r[l];if(h.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.array.length}let a=new t(s),o=0;for(let l=0;l<r.length;++l)a.set(r[l].array,o),o+=r[l].array.length;let c=new Et(a,e,n);return i!==void 0&&(c.gpuType=i),c}function rg(r,t=1e-4){t=Math.max(t,Number.EPSILON);let e={},n=r.getIndex(),i=r.getAttribute("position"),s=n?n.count:i.count,a=0,o=Object.keys(r.attributes),c={},l={},h=[],f=["getX","getY","getZ","getW"],u=["setX","setY","setZ","setW"];for(let x=0,b=o.length;x<b;x++){let _=o[x],M=r.attributes[_];c[_]=new Et(new M.array.constructor(M.count*M.itemSize),M.itemSize,M.normalized);let y=r.morphAttributes[_];y&&(l[_]=new Et(new y.array.constructor(y.count*y.itemSize),y.itemSize,y.normalized))}let d=t*.5,g=Math.log10(1/t),v=Math.pow(10,g),m=d*v;for(let x=0;x<s;x++){let b=n?n.getX(x):x,_="";for(let M=0,y=o.length;M<y;M++){let w=o[M],L=r.getAttribute(w),E=L.itemSize;for(let A=0;A<E;A++)_+=`${~~(L[f[A]](b)*v+m)},`}if(_ in e)h.push(e[_]);else{for(let M=0,y=o.length;M<y;M++){let w=o[M],L=r.getAttribute(w),E=r.morphAttributes[w],A=L.itemSize,D=c[w],F=l[w];for(let k=0;k<A;k++){let P=f[k],C=u[k];if(D[C](a,L[P](b)),E)for(let I=0,N=E.length;I<N;I++)F[I][C](a,E[I][P](b))}}e[_]=a,h.push(a),a++}}let p=r.clone();for(let x in r.attributes){let b=c[x];if(p.setAttribute(x,new Et(b.array.slice(0,a*b.itemSize),b.itemSize,b.normalized)),x in l)for(let _=0;_<l[x].length;_++){let M=l[x][_];p.morphAttributes[x][_]=new Et(M.array.slice(0,a*M.itemSize),M.itemSize,M.normalized)}}return p.setIndex(h),p}function jf(r,t){if(t===S0)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(t===Mo||t===dl){let e=r.getIndex();if(e===null){let a=[],o=r.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);r.setIndex(a),e=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}let n=e.count-2,i=[];if(t===Mo)for(let a=1;a<=n;a++)i.push(e.getX(0)),i.push(e.getX(a)),i.push(e.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(e.getX(a)),i.push(e.getX(a+1)),i.push(e.getX(a+2))):(i.push(e.getX(a+2)),i.push(e.getX(a+1)),i.push(e.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),r}var{chunkLen:Ta,step:Ll}=we,Gi=we.halfWidth,ag=7,Yf=1;var Cw=r=>r.index?r.toNonIndexed():r;function Pw(r){return zs(r.map(t=>{let e=Cw(t);return e.deleteAttribute("uv"),e}))}function og(r,t){let e=[],n=[],i=[],s=[],[a,o,c]=r.center,l=(d,g,v,m,p)=>{let x=new T(d-a,(g-o)*.7,v-c).normalize().add(new T(0,.35,0)).normalize();e.push(d,g,v),n.push(x.x,x.y,x.z),i.push(m,p)};for(let d of r.yaws){let g=Math.cos(d),v=Math.sin(d),m=e.length/3,p=r.w/2,x=r.h/2;l(a-p*g,o-x,c-p*v,r.u0,0),l(a+p*g,o-x,c+p*v,r.u1,0),l(a+p*g,o+x,c+p*v,r.u1,1),l(a-p*g,o+x,c-p*v,r.u0,1),s.push(m,m+1,m+2,m,m+2,m+3)}if(r.top){let d=e.length/3,g=r.top/2,v=r.topY;l(a-g,v,c-g,r.u0,0),l(a+g,v,c-g,r.u1,0),l(a+g,v,c+g,r.u1,1),l(a-g,v,c+g,r.u0,1),s.push(d,d+1,d+2,d,d+2,d+3)}let h=new Tt;h.setAttribute("position",new mt(e,3)),h.setAttribute("normal",new mt(n,3)),h.setAttribute("uv",new mt(i,2)),h.setIndex(s);let f=new Ve(t.r0,t.r1,t.h,6).translate(0,t.h/2,0),u=f.attributes.uv;for(let d=0;d<u.count;d++)u.setXY(d,.94,.88);return zs([f,h])}function cg(){return og({center:[0,4.7,0],w:5.4,h:5,yaws:[0,Math.PI/3,2*Math.PI/3],u0:0,u1:.5,top:4.4,topY:5},{r0:.16,r1:.26,h:3})}function lg(){return og({center:[0,5.1,0],w:3.8,h:8.2,yaws:[0,Math.PI/3,2*Math.PI/3],u0:.5,u1:.75},{r0:.13,r1:.22,h:1.8})}var Ao=11.1,Lw=Ao-.22,Kf=3,Jf=Object.freeze({intensity:28,distance:118,angle:1.2,penumbra:.8,decay:.6,glowOpacity:.9,glowSize:9,color:"#ffc98a"});function Iw(){return Pw([new Ve(.08,.13,Ao,6).translate(0,Ao/2,0),new re(1.9,.08,.1).translate(-.9,Ao,0),new re(.5,.1,.22).translate(-1.75,Ao-.07,0)])}var Dw=`#include <common>
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
}`,Fw=`
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
`,Hw=`
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
}`,Il=class{constructor(t,e,n){this.scene=t,this.road=e,this.chunks=new Map,this.queue=[],this.tmp={},this.map="reed",this.lastS=150,this.roadTex=Nf(n),this.cityTex=Nf(n,!0),this.roadMat=new Wt({map:this.roadTex,roughness:.9,metalness:0,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),this.roadU={uWet:{value:0},uPuddle:{value:0},uRain:{value:0},uRainT:{value:0},uReflTex:{value:null},uReflMat:{value:new yt},uReflOn:{value:0},uPlaneY:{value:0},uSunHide:{value:0},uDirtTex:{value:dr("dirt",n)},uGrassCol:{value:new et("#5c6b34")}},this.roadMat.onBeforeCompile=s=>{Object.assign(s.uniforms,this.roadU),s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vRW;
attribute float aDirt;
varying float vDirt;`).replace("#include <project_vertex>",`#include <project_vertex>
vRW = (modelMatrix * vec4(transformed, 1.0)).xyz;
vDirt = aDirt;`),s.fragmentShader=s.fragmentShader.replace("#include <common>",Dw).replace("#include <map_fragment>",`#include <map_fragment>
`+Fw).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
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
reflectedLight.directSpecular *= 1.0 - uSunHide * puddle;`).replace("#include <opaque_fragment>",Hw+`
#include <opaque_fragment>`)},this.railMat=new Wt({color:12172996,roughness:.35,metalness:.75,side:me}),this.poleMat=new Wt({color:4869973,roughness:.6,metalness:.4}),this.postMat=new Wt({color:15263968,roughness:.7}),this.bulbMat=new Je({color:16767392,toneMapped:!1});let i=va();this.glowMat=new wi({map:i,color:16763274,size:9,transparent:!0,opacity:0,depthWrite:!1,blending:Xe,sizeAttenuation:!0});for(let s of[this.roadMat,this.poleMat,this.postMat,this.bulbMat,this.glowMat,this.railMat])de(s);this.lampOn=0,this.lampTune={...Jf},this.lampLights=Array.from({length:Kf},()=>{let s=new Hs(16763274,0,80,1.2,.8,.6);return this.scene.add(s,s.target),s}),this._lampList=[],this.lampGeo=Iw(),this.railPostGeo=new re(.12,.8,.12).translate(0,.4,0),this.postGeo=new re(.12,.95,.12).translate(0,.475,0),this.bulbGeo=new Ti(.2,8,6)}setMap(t){this.map=t,Gi=we.halfWidth,this.roadMat.map=t==="city"?this.cityTex:this.roadTex;for(let e of this.chunks.values())this._dispose(e);this.chunks.clear(),this.queue.length=0,this.prime(this.lastS)}update(t,e=2){this.lastS=t;let n=Math.floor(t/Ta);for(let i=Math.max(0,n-Yf);i<=n+ag;i++)!this.chunks.has(i)&&!this.queue.includes(i)&&this.queue.push(i);this.queue.sort((i,s)=>i-s);for(let i=0;i<e&&this.queue.length;i++){let s=this.queue.shift();s>=n-Yf&&s<=n+ag&&this._build(s)}for(let[i,s]of this.chunks)i<n-Yf&&(this._dispose(s),this.chunks.delete(i))}prime(t){this.update(t,999)}apply(t){let e=t.lamps,n=new et(9079430).lerp(new et(this.lampTune.color),e);this.bulbMat.color.copy(n).multiplyScalar(.6+1.6*e),this.lampOn=e,this.glowMat.opacity=e*this.lampTune.glowOpacity,this.glowMat.size=this.lampTune.glowSize,this.glowMat.color.set(this.lampTune.color),this.roadMat.roughness=.92-.3*t.wet,this.roadMat.envMapIntensity=.38+.3*t.wet;let i=(1-.4*t.wet)*(1-.25*t.dark);this.roadMat.color.setRGB(i,i,i);let s=this.roadU;s.uWet.value=t.wet,s.uPuddle.value=t.wet,s.uRain.value=t.rain,s.uSunHide.value=Math.min(1,t.overcast*1.2+t.rain)}updateLights(t){let e=this._lampList;e.length=0;for(let i of this.chunks.values())for(let s of i.userData.lamps||[]){let[a]=s;e.push({L:s,d:Math.hypot(a[0]-t.x,a[1]-t.y,a[2]-t.z)})}if(this.extraLamps)for(let i of this.extraLamps()){let[s]=i;e.push({L:i,d:Math.hypot(s[0]-t.x,s[1]-t.y,s[2]-t.z)})}e.sort((i,s)=>i.d-s.d);let n=e.length>Kf?e[Kf].d:1/0;this.lampLights.forEach((i,s)=>{let a=e[s];if(!a||this.lampOn<=0){i.intensity=0;return}let o=n===1/0?1:Math.min(1,Math.max(0,(n-a.d)/(.3*n))),[c,l]=a.L;i.position.set(c[0],c[1],c[2]),i.target.position.set(l[0],l[1],l[2]),i.target.updateMatrixWorld();let h=this.lampTune;i.color.set(h.color),i.distance=h.distance,i.angle=h.angle,i.penumbra=h.penumbra,i.decay=h.decay,i.intensity=h.intensity*this.lampOn*o*o*(3-2*o)})}hitLamp(t,e,n,i,s=48){let a=new T;for(let o of this.chunks.values())for(let[c]of o.userData.lamps||[]){if(a.set(c[0],c[1],c[2]).project(t),a.z<-1||a.z>1)continue;let l=i.left+(a.x+1)*i.width*.5,h=i.top+(1-a.y)*i.height*.5;if(Math.hypot(e-l,n-h)<=s)return!0}return!1}setReflection(t,e){let n=this.roadU;n.uRainT.value=e,n.uReflOn.value=t.active?1:0,t.active&&(n.uReflTex.value=t.rt.texture,n.uReflMat.value.copy(t.texMatrix),n.uPlaneY.value=t.planeY)}_build(t){let e=new Pt,n=this.road,i=t*Ta,s=this.tmp,a=Ta/Ll,o=new Float32Array((a+1)*6),c=new Float32Array((a+1)*4),l=new Float32Array((a+1)*6),h=new Float32Array((a+1)*2),f=[];for(let C=0;C<=a;C++){let I=i+C*Ll;n.at(I,s);let N=Math.cos(s.th),U=-Math.sin(s.th),z=s.y+.05;o.set([s.x-N*Gi,z,s.z-U*Gi,s.x+N*Gi,z,s.z+U*Gi],C*6),c.set([0,I/12,1,I/12],C*4),l.set([0,1,0,0,1,0],C*6);let W=n.dirtAt(I);if(h[C*2]=h[C*2+1]=W,C<a){let j=C*2;f.push(j,j+1,j+2,j+1,j+3,j+2)}}let u=new Tt;u.setAttribute("position",new Et(o,3)),u.setAttribute("normal",new Et(l,3)),u.setAttribute("uv",new Et(c,2)),u.setAttribute("aDirt",new Et(h,1)),u.setIndex(f),u.computeVertexNormals();let d=new kt(u,this.roadMat);d.receiveShadow=!0,d.layers.set(3),e.add(d),e.userData.own=[u];let g=[];for(let C=i;C<i+Ta&&this.map!=="city";C+=12)if(!(n.dirtAt(C)>.05)){n.at(C,s);for(let I of this.map==="mountain"?[-1]:[-1,1])g.push([s.x+Math.cos(s.th)*(Gi+.7)*I,s.y,s.z-Math.sin(s.th)*(Gi+.7)*I])}let v=new Ee(this.postGeo,this.postMat,g.length),m=new yt;if(g.forEach(([C,I,N],U)=>{m.makeTranslation(C,I,N),v.setMatrixAt(U,m)}),e.add(v),this.map==="mountain"){let C=Ta/Ll,I=new Float32Array((C+1)*6),N=[],U=[];for(let it=0;it<=C;it++){let B=i+it*Ll;n.at(B,s);let Z=s.x+Math.cos(s.th)*(Gi+.55),lt=s.z-Math.sin(s.th)*(Gi+.55);if(I.set([Z,s.y+.5,lt,Z,s.y+.82,lt],it*6),it<C){let ht=it*2;N.push(ht,ht+2,ht+1,ht+1,ht+2,ht+3)}it%2===0&&U.push([Z,s.y,lt])}let z=new Tt;z.setAttribute("position",new Et(I,3)),z.setIndex(N),z.computeVertexNormals();let W=new kt(z,this.railMat);W.castShadow=!0,e.add(W),e.userData.own.push(z);let j=new Ee(this.railPostGeo,this.poleMat,U.length);U.forEach(([it,B,Z],lt)=>{m.makeTranslation(it,B,Z),j.setMatrixAt(lt,m)}),e.add(j)}let p=[],x=[],b=[],_=this.map==="city",M=_?4:this.map==="reed"?2:1,y=Ta/M;for(let C=0;C<M;C++){let I=i+C*y+(_?21:6);if(n.dirtAt(I)>.05)continue;if(_){let Z=n.nearJunction(I);if(Z!==null&&Math.abs(I-Z)<16)continue}n.at(I,s);let N=this.map==="mountain"?-1:Math.round(I/y)%2?1:-1,U=Gi+(_?.9:1.4),z=s.x+Math.cos(s.th)*U*N,W=s.z-Math.sin(s.th)*U*N,j=s.th+(N===1?0:Math.PI);p.push([z,s.y,W,j]);let it=-Math.cos(j)*1.75,B=Math.sin(j)*1.75;x.push([z+it,s.y+Lw,W+B]),b.push([z+it*4.5,s.y,W+B*4.5])}let w=new Ee(this.lampGeo,this.poleMat,p.length),L=new Vt,E=new T(0,1,0),A=new T(1,1,1),D=new T;p.forEach(([C,I,N,U],z)=>{L.setFromAxisAngle(E,U),m.compose(D.set(C,I,N),L,A),w.setMatrixAt(z,m)}),w.castShadow=!0,e.add(w);let F=new Ee(this.bulbGeo,this.bulbMat,x.length);x.forEach(([C,I,N],U)=>{m.makeTranslation(C,I,N),F.setMatrixAt(U,m)}),e.add(F);let k=new Tt;k.setAttribute("position",new mt(x.flat(),3));let P=new en(k,this.glowMat);P.frustumCulled=!1,P.renderOrder=3,e.add(P),e.userData.own.push(k),e.userData.lamps=x.map((C,I)=>[C,b[I]]),this.scene.add(e),this.chunks.set(t,e)}_dispose(t){this.scene.remove(t),t.userData.own.forEach(e=>e.dispose()),t.traverse(e=>{e.isInstancedMesh&&e.dispose()})}};var Vs=class extends fs{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new id(e)}),this.register(function(e){return new fd(e)}),this.register(function(e){return new dd(e)}),this.register(function(e){return new pd(e)}),this.register(function(e){return new rd(e)}),this.register(function(e){return new ad(e)}),this.register(function(e){return new od(e)}),this.register(function(e){return new cd(e)}),this.register(function(e){return new nd(e)}),this.register(function(e){return new ld(e)}),this.register(function(e){return new sd(e)}),this.register(function(e){return new ud(e)}),this.register(function(e){return new hd(e)}),this.register(function(e){return new td(e)}),this.register(function(e){return new md(e)}),this.register(function(e){return new gd(e)})}load(t,e,n,i){let s=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=Ns.extractUrlBase(t);a=Ns.resolveURL(l,this.path)}else a=Ns.extractUrlBase(t);this.manager.itemStart(t);let o=function(l){i?i(l):console.error(l),s.manager.itemError(t),s.manager.itemEnd(t)},c=new yo(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(t,function(l){try{s.parse(l,a,function(h){e(h),s.manager.itemEnd(t)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(t){return this.dracoLoader=t,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,i){let s,a={},o={},c=new TextDecoder;if(typeof t=="string")s=JSON.parse(t);else if(t instanceof ArrayBuffer)if(c.decode(new Uint8Array(t,0,4))===pg){try{a[fe.KHR_BINARY_GLTF]=new vd(t)}catch(f){i&&i(f);return}s=JSON.parse(a[fe.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(t));else s=t;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new wd(s,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let f=this.pluginCallbacks[h](l);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[f.name]=f,a[f.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){let f=s.extensionsUsed[h],u=s.extensionsRequired||[];switch(f){case fe.KHR_MATERIALS_UNLIT:a[f]=new ed;break;case fe.KHR_DRACO_MESH_COMPRESSION:a[f]=new xd(s,this.dracoLoader);break;case fe.KHR_TEXTURE_TRANSFORM:a[f]=new bd;break;case fe.KHR_MESH_QUANTIZATION:a[f]=new yd;break;default:u.indexOf(f)>=0&&o[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,i)}parseAsync(t,e){let n=this;return new Promise(function(i,s){n.parse(t,e,i,s)})}};function Nw(){let r={};return{get:function(t){return r[t]},add:function(t,e){r[t]=e},remove:function(t){delete r[t]},removeAll:function(){r={}}}}var fe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},td=class{constructor(t){this.parser=t,this.name=fe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let t=this.parser,e=this.parser.json.nodes||[];for(let n=0,i=e.length;n<i;n++){let s=e[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(t){let e=this.parser,n="light:"+t,i=e.cache.get(n);if(i)return i;let s=e.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[t],l,h=new et(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],hn);let f=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new pa(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new zi(h),l.distance=f;break;case"spot":l=new Hs(h),l.distance=f,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Gs(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=e.createUniqueName(c.name||"light_"+t),i=Promise.resolve(l),e.cache.add(n,i),i}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){let e=this,n=this.parser,s=n.json.nodes[t],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(e.cache,o,c)})}},ed=class{constructor(){this.name=fe.KHR_MATERIALS_UNLIT}getMaterialType(){return Je}extendParams(t,e,n){let i=[];t.color=new et(1,1,1),t.opacity=1;let s=e.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let a=s.baseColorFactor;t.color.setRGB(a[0],a[1],a[2],hn),t.opacity=a[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(t,"map",s.baseColorTexture,ue))}return Promise.all(i)}},nd=class{constructor(t){this.parser=t,this.name=fe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){let i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(e.emissiveIntensity=s),Promise.resolve()}},id=class{constructor(t){this.parser=t,this.name=fe.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:fi}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(e.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(n.assignTexture(e,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(e,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(e,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new at(o,o)}return Promise.all(s)}},sd=class{constructor(t){this.parser=t,this.name=fe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:fi}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(e.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(n.assignTexture(e,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(e.iridescenceIOR=a.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(e,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}},rd=class{constructor(t){this.parser=t,this.name=fe.KHR_MATERIALS_SHEEN}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:fi}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[];e.sheenColor=new et(0,0,0),e.sheenRoughness=0,e.sheen=1;let a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;e.sheenColor.setRGB(o[0],o[1],o[2],hn)}return a.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(n.assignTexture(e,"sheenColorMap",a.sheenColorTexture,ue)),a.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(e,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}},ad=class{constructor(t){this.parser=t,this.name=fe.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:fi}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(e.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(n.assignTexture(e,"transmissionMap",a.transmissionTexture)),Promise.all(s)}},od=class{constructor(t){this.parser=t,this.name=fe.KHR_MATERIALS_VOLUME}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:fi}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];e.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(n.assignTexture(e,"thicknessMap",a.thicknessTexture)),e.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return e.attenuationColor=new et().setRGB(o[0],o[1],o[2],hn),Promise.all(s)}},cd=class{constructor(t){this.parser=t,this.name=fe.KHR_MATERIALS_IOR}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:fi}extendMaterialParams(t,e){let i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=i.extensions[this.name];return e.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}},ld=class{constructor(t){this.parser=t,this.name=fe.KHR_MATERIALS_SPECULAR}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:fi}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];e.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(n.assignTexture(e,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return e.specularColor=new et().setRGB(o[0],o[1],o[2],hn),a.specularColorTexture!==void 0&&s.push(n.assignTexture(e,"specularColorMap",a.specularColorTexture,ue)),Promise.all(s)}},hd=class{constructor(t){this.parser=t,this.name=fe.EXT_MATERIALS_BUMP}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:fi}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];return e.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&s.push(n.assignTexture(e,"bumpMap",a.bumpTexture)),Promise.all(s)}},ud=class{constructor(t){this.parser=t,this.name=fe.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:fi}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(e.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(e.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&s.push(n.assignTexture(e,"anisotropyMap",a.anisotropyTexture)),Promise.all(s)}},fd=class{constructor(t){this.parser=t,this.name=fe.KHR_TEXTURE_BASISU}loadTexture(t){let e=this.parser,n=e.json,i=n.textures[t];if(!i.extensions||!i.extensions[this.name])return null;let s=i.extensions[this.name],a=e.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,s.source,a)}},dd=class{constructor(t){this.parser=t,this.name=fe.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){let e=this.name,n=this.parser,i=n.json,s=i.textures[t];if(!s.extensions||!s.extensions[e])return null;let a=s.extensions[e],o=i.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(t,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){let e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}},pd=class{constructor(t){this.parser=t,this.name=fe.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){let e=this.name,n=this.parser,i=n.json,s=i.textures[t];if(!s.extensions||!s.extensions[e])return null;let a=s.extensions[e],o=i.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(t,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){let e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}},md=class{constructor(t){this.name=fe.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){let e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){let c=i.byteOffset||0,l=i.byteLength||0,h=i.count,f=i.byteStride,u=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,f,u,i.mode,i.filter).then(function(d){return d.buffer}):a.ready.then(function(){let d=new ArrayBuffer(h*f);return a.decodeGltfBuffer(new Uint8Array(d),h,f,u,i.mode,i.filter),d})})}else return null}},gd=class{constructor(t){this.name=fe.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){let e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=e.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==pi.TRIANGLES&&l.mode!==pi.TRIANGLE_STRIP&&l.mode!==pi.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(t)),Promise.all(o).then(l=>{let h=l.pop(),f=h.isGroup?h.children:[h],u=l[0].count,d=[];for(let g of f){let v=new yt,m=new T,p=new Vt,x=new T(1,1,1),b=new Ee(g.geometry,g.material,u);for(let _=0;_<u;_++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,_),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,_),c.SCALE&&x.fromBufferAttribute(c.SCALE,_),b.setMatrixAt(_,v.compose(m,p,x));for(let _ in c)if(_==="_COLOR_0"){let M=c[_];b.instanceColor=new Ye(M.array,M.itemSize,M.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&g.geometry.setAttribute(_,c[_]);Ie.prototype.copy.call(b,g),this.parser.assignFinalMaterial(b),d.push(b)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}},pg="glTF",Ro=12,hg={JSON:1313821514,BIN:5130562},vd=class{constructor(t){this.name=fe.KHR_BINARY_GLTF,this.content=null,this.body=null;let e=new DataView(t,0,Ro),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==pg)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-Ro,s=new DataView(t,Ro),a=0;for(;a<i;){let o=s.getUint32(a,!0);a+=4;let c=s.getUint32(a,!0);if(a+=4,c===hg.JSON){let l=new Uint8Array(t,Ro+a,o);this.content=n.decode(l)}else if(c===hg.BIN){let l=Ro+a;this.body=t.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},xd=class{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=fe.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){let n=this.json,i=this.dracoLoader,s=t.extensions[this.name].bufferView,a=t.extensions[this.name].attributes,o={},c={},l={};for(let h in a){let f=Md[h]||h.toLowerCase();o[f]=a[h]}for(let h in t.attributes){let f=Md[h]||h.toLowerCase();if(a[h]!==void 0){let u=n.accessors[t.attributes[h]],d=Sa[u.componentType];l[f]=d.name,c[f]=u.normalized===!0}}return e.getDependency("bufferView",s).then(function(h){return new Promise(function(f,u){i.decodeDracoFile(h,function(d){for(let g in d.attributes){let v=d.attributes[g],m=c[g];m!==void 0&&(v.normalized=m)}f(d)},o,l,hn,u)})})}},bd=class{constructor(){this.name=fe.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}},yd=class{constructor(){this.name=fe.KHR_MESH_QUANTIZATION}},Dl=class extends Ls{constructor(t,e,n,i){super(t,e,n,i)}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i*3+i;for(let a=0;a!==i;a++)e[a]=n[s+a];return e}interpolate_(t,e,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=i-e,f=(n-e)/h,u=f*f,d=u*f,g=t*l,v=g-l,m=-2*d+3*u,p=d-u,x=1-m,b=p-u+f;for(let _=0;_!==o;_++){let M=a[v+_+o],y=a[v+_+c]*h,w=a[g+_+o],L=a[g+_]*h;s[_]=x*M+b*y+m*w+p*L}return s}},kw=new Vt,_d=class extends Dl{interpolate_(t,e,n,i){let s=super.interpolate_(t,e,n,i);return kw.fromArray(s).normalize().toArray(s),s}},pi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Sa={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},ug={9728:tn,9729:an,9984:kc,9985:yf,9986:no,9987:ki},fg={33071:Qn,33648:lo,10497:zn},Zf={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Md={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Bs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Uw={CUBICSPLINE:void 0,LINEAR:hr,STEP:sa},Qf={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Ow(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Wt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ni})),r.DefaultMaterial}function vr(r,t,e){for(let n in e.extensions)r[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function Gs(r,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(r.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function zw(r,t,e){let n=!1,i=!1,s=!1;for(let l=0,h=t.length;l<h;l++){let f=t[l];if(f.POSITION!==void 0&&(n=!0),f.NORMAL!==void 0&&(i=!0),f.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);let a=[],o=[],c=[];for(let l=0,h=t.length;l<h;l++){let f=t[l];if(n){let u=f.POSITION!==void 0?e.getDependency("accessor",f.POSITION):r.attributes.position;a.push(u)}if(i){let u=f.NORMAL!==void 0?e.getDependency("accessor",f.NORMAL):r.attributes.normal;o.push(u)}if(s){let u=f.COLOR_0!==void 0?e.getDependency("accessor",f.COLOR_0):r.attributes.color;c.push(u)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let h=l[0],f=l[1],u=l[2];return n&&(r.morphAttributes.position=h),i&&(r.morphAttributes.normal=f),s&&(r.morphAttributes.color=u),r.morphTargetsRelative=!0,r})}function Bw(r,t){if(r.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)r.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){let e=t.extras.targetNames;if(r.morphTargetInfluences.length===e.length){r.morphTargetDictionary={};for(let n=0,i=e.length;n<i;n++)r.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Gw(r){let t,e=r.extensions&&r.extensions[fe.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+$f(e.attributes):t=r.indices+":"+$f(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)t+=":"+$f(r.targets[n]);return t}function $f(r){let t="",e=Object.keys(r).sort();for(let n=0,i=e.length;n<i;n++)t+=e[n]+":"+r[e[n]]+";";return t}function Ed(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Vw(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var Ww=new yt,wd=class{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new Nw,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,s=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,s=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&s<98?this.textureLoader=new Fs(this.options.manager):this.textureLoader=new hl(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new yo(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){let n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return vr(s,o,i),Gs(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){t(o)})}).catch(e)}_markDefs(){let t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=e.length;i<s;i++){let a=e[i].joints;for(let o=0,c=a.length;o<c;o++)t[a[o]].isBone=!0}for(let i=0,s=t.length;i<s;i++){let a=t[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;let i=n.clone(),s=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,h]of a.children.entries())s(h,o.children[l])};return s(n,i),i.name+="_instance_"+t.uses[e]++,i}_invokeOne(t){let e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){let i=t(e[n]);if(i)return i}return null}_invokeAll(t){let e=Object.values(this.plugins);e.unshift(this);let n=[];for(let i=0;i<e.length;i++){let s=t(e[i]);s&&n.push(s)}return n}getDependency(t,e){let n=t+":"+e,i=this.cache.get(n);if(!i){switch(t){case"scene":i=this.loadScene(e);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(e)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(e)});break;case"accessor":i=this.loadAccessor(e);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(e)});break;case"buffer":i=this.loadBuffer(e);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(e)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(e)});break;case"skin":i=this.loadSkin(e);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(e)});break;case"camera":i=this.loadCamera(e);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(t,e)}),!i)throw new Error("Unknown type: "+t);break}this.cache.add(n,i)}return i}getDependencies(t){let e=this.cache.get(t);if(!e){let n=this,i=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(i.map(function(s,a){return n.getDependency(t,a)})),this.cache.add(t,e)}return e}loadBuffer(t){let e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[fe.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(s,a){n.load(Ns.resolveURL(e.uri,i.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){let e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){let i=e.byteLength||0,s=e.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(t){let e=this,n=this.json,i=this.json.accessors[t];if(i.bufferView===void 0&&i.sparse===void 0){let a=Zf[i.type],o=Sa[i.componentType],c=i.normalized===!0,l=new o(i.count*a);return Promise.resolve(new Et(l,a,c))}let s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(a){let o=a[0],c=Zf[i.type],l=Sa[i.componentType],h=l.BYTES_PER_ELEMENT,f=h*c,u=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0,v,m;if(d&&d!==f){let p=Math.floor(u/d),x="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count,b=e.cache.get(x);b||(v=new l(o,p*d,i.count*d/h),b=new la(v,d/h),e.cache.add(x,b)),m=new fr(b,c,u%d/h,g)}else o===null?v=new l(i.count*c):v=new l(o,u,i.count*c),m=new Et(v,c,g);if(i.sparse!==void 0){let p=Zf.SCALAR,x=Sa[i.sparse.indices.componentType],b=i.sparse.indices.byteOffset||0,_=i.sparse.values.byteOffset||0,M=new x(a[1],b,i.sparse.count*p),y=new l(a[2],_,i.sparse.count*c);o!==null&&(m=new Et(m.array.slice(),m.itemSize,m.normalized));for(let w=0,L=M.length;w<L;w++){let E=M[w];if(m.setX(E,y[w*c]),c>=2&&m.setY(E,y[w*c+1]),c>=3&&m.setZ(E,y[w*c+2]),c>=4&&m.setW(E,y[w*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(t){let e=this.json,n=this.options,s=e.textures[t].source,a=e.images[s],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(t,s,o)}loadTextureImage(t,e,n){let i=this,s=this.json,a=s.textures[t],o=s.images[e],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(e,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let u=(s.samplers||{})[a.sampler]||{};return h.magFilter=ug[u.magFilter]||an,h.minFilter=ug[u.minFilter]||ki,h.wrapS=fg[u.wrapS]||zn,h.wrapT=fg[u.wrapT]||zn,i.associations.set(h,{textures:t}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(t,e){let n=this,i=this.json,s=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(f=>f.clone());let a=i.images[t],o=self.URL||self.webkitURL,c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(f){l=!0;let u=new Blob([f],{type:a.mimeType});return c=o.createObjectURL(u),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(f){return new Promise(function(u,d){let g=u;e.isImageBitmapLoader===!0&&(g=function(v){let m=new Mn(v);m.needsUpdate=!0,u(m)}),e.load(Ns.resolveURL(f,s.path),g,void 0,d)})}).then(function(f){return l===!0&&o.revokeObjectURL(c),f.userData.mimeType=a.mimeType||Vw(a.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),f});return this.sourceCache[t]=h,h}assignTexture(t,e,n,i){let s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[fe.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[fe.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=s.associations.get(a);a=s.extensions[fe.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,c)}}return i!==void 0&&(a.colorSpace=i),t[e]=a,a})}assignFinalMaterial(t){let e=t.geometry,n=t.material,i=e.attributes.tangent===void 0,s=e.attributes.color!==void 0,a=e.attributes.normal===void 0;if(t.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new wi,En.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(t.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new ls,En.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||s||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),s&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}t.material=n}getMaterialType(){return Wt}loadMaterial(t){let e=this,n=this.json,i=this.extensions,s=n.materials[t],a,o={},c=s.extensions||{},l=[];if(c[fe.KHR_MATERIALS_UNLIT]){let f=i[fe.KHR_MATERIALS_UNLIT];a=f.getMaterialType(),l.push(f.extendParams(o,s,e))}else{let f=s.pbrMetallicRoughness||{};if(o.color=new et(1,1,1),o.opacity=1,Array.isArray(f.baseColorFactor)){let u=f.baseColorFactor;o.color.setRGB(u[0],u[1],u[2],hn),o.opacity=u[3]}f.baseColorTexture!==void 0&&l.push(e.assignTexture(o,"map",f.baseColorTexture,ue)),o.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,o.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(l.push(e.assignTexture(o,"metalnessMap",f.metallicRoughnessTexture)),l.push(e.assignTexture(o,"roughnessMap",f.metallicRoughnessTexture))),a=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(t)}),l.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(t,o)})))}s.doubleSided===!0&&(o.side=me);let h=s.alphaMode||Qf.OPAQUE;if(h===Qf.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Qf.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==Je&&(l.push(e.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new at(1,1),s.normalTexture.scale!==void 0)){let f=s.normalTexture.scale;o.normalScale.set(f,f)}if(s.occlusionTexture!==void 0&&a!==Je&&(l.push(e.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==Je){let f=s.emissiveFactor;o.emissive=new et().setRGB(f[0],f[1],f[2],hn)}return s.emissiveTexture!==void 0&&a!==Je&&l.push(e.assignTexture(o,"emissiveMap",s.emissiveTexture,ue)),Promise.all(l).then(function(){let f=new a(o);return s.name&&(f.name=s.name),Gs(f,s),e.associations.set(f,{materials:t}),s.extensions&&vr(i,f,s),f})}createUniqueName(t){let e=Le.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){let e=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[fe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,e).then(function(c){return dg(c,o,e)})}let a=[];for(let o=0,c=t.length;o<c;o++){let l=t[o],h=Gw(l),f=i[h];if(f)a.push(f.promise);else{let u;l.extensions&&l.extensions[fe.KHR_DRACO_MESH_COMPRESSION]?u=s(l):u=dg(new Tt,l,e),i[h]={primitive:l,promise:u},a.push(u)}}return Promise.all(a)}loadMesh(t){let e=this,n=this.json,i=this.extensions,s=n.meshes[t],a=s.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let h=a[c].material===void 0?Ow(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(e.loadGeometries(a)),Promise.all(o).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],f=[];for(let d=0,g=h.length;d<g;d++){let v=h[d],m=a[d],p,x=l[d];if(m.mode===pi.TRIANGLES||m.mode===pi.TRIANGLE_STRIP||m.mode===pi.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new Qc(v,x):new kt(v,x),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===pi.TRIANGLE_STRIP?p.geometry=jf(p.geometry,dl):m.mode===pi.TRIANGLE_FAN&&(p.geometry=jf(p.geometry,Mo));else if(m.mode===pi.LINES)p=new Ui(v,x);else if(m.mode===pi.LINE_STRIP)p=new ha(v,x);else if(m.mode===pi.LINE_LOOP)p=new tl(v,x);else if(m.mode===pi.POINTS)p=new en(v,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&Bw(p,s),p.name=e.createUniqueName(s.name||"mesh_"+t),Gs(p,s),m.extensions&&vr(i,p,m),e.assignFinalMaterial(p),f.push(p)}for(let d=0,g=f.length;d<g;d++)e.associations.set(f[d],{meshes:t,primitives:d});if(f.length===1)return s.extensions&&vr(i,f[0],s),f[0];let u=new Pt;s.extensions&&vr(i,u,s),e.associations.set(u,{meshes:t});for(let d=0,g=f.length;d<g;d++)u.add(f[d]);return u})}loadCamera(t){let e,n=this.json.cameras[t],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new Oe(Ne.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(e=new Ps(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),Gs(e,n),Promise.resolve(e)}loadSkin(t){let e=this.json.skins[t],n=[];for(let i=0,s=e.joints.length;i<s;i++)n.push(this._loadNodeShallow(e.joints[i]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let s=i.pop(),a=i,o=[],c=[];for(let l=0,h=a.length;l<h;l++){let f=a[l];if(f){o.push(f);let u=new yt;s!==null&&u.fromArray(s.array,l*16),c.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[l])}return new $c(o,c)})}loadAnimation(t){let e=this.json,n=this,i=e.animations[t],s=i.name?i.name:"animation_"+t,a=[],o=[],c=[],l=[],h=[];for(let f=0,u=i.channels.length;f<u;f++){let d=i.channels[f],g=i.samplers[d.sampler],v=d.target,m=v.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,x=i.parameters!==void 0?i.parameters[g.output]:g.output;v.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",x)),l.push(g),h.push(v))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(f){let u=f[0],d=f[1],g=f[2],v=f[3],m=f[4],p=[];for(let x=0,b=u.length;x<b;x++){let _=u[x],M=d[x],y=g[x],w=v[x],L=m[x];if(_===void 0)continue;_.updateMatrix&&_.updateMatrix();let E=n._createAnimationTracks(_,M,y,w,L);if(E)for(let A=0;A<E.length;A++)p.push(E[A])}return new fa(s,void 0,p)})}createNodeMesh(t){let e=this.json,n=this,i=e.nodes[t];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){let a=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(t){let e=this.json,n=this,i=e.nodes[t],s=n._loadNodeShallow(t),a=[],o=i.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));let c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(a),c]).then(function(l){let h=l[0],f=l[1],u=l[2];u!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(u,Ww)});for(let d=0,g=f.length;d<g;d++)h.add(f[d]);return h})}_loadNodeShallow(t){let e=this.json,n=this.extensions,i=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];let s=e.nodes[t],a=s.name?i.createUniqueName(s.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(t)});return c&&o.push(c),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(l){return i._getNodeRef(i.cameraCache,s.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(t)}).forEach(function(l){o.push(l)}),this.nodeCache[t]=Promise.all(o).then(function(l){let h;if(s.isBone===!0?h=new go:l.length>1?h=new Pt:l.length===1?h=l[0]:h=new Ie,h!==l[0])for(let f=0,u=l.length;f<u;f++)h.add(l[f]);if(s.name&&(h.userData.name=s.name,h.name=a),Gs(h,s),s.extensions&&vr(n,h,s),s.matrix!==void 0){let f=new yt;f.fromArray(s.matrix),h.applyMatrix4(f)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=t,h}),this.nodeCache[t]}loadScene(t){let e=this.extensions,n=this.json.scenes[t],i=this,s=new Pt;n.name&&(s.name=i.createUniqueName(n.name)),Gs(s,n),n.extensions&&vr(e,s,n);let a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,f=c.length;h<f;h++)s.add(c[h]);let l=h=>{let f=new Map;for(let[u,d]of i.associations)(u instanceof En||u instanceof Mn)&&f.set(u,d);return h.traverse(u=>{let d=i.associations.get(u);d!=null&&f.set(u,d)}),f};return i.associations=l(s),s})}_createAnimationTracks(t,e,n,i,s){let a=[],o=t.name?t.name:t.uuid,c=[];Bs[s.path]===Bs.weights?t.traverse(function(u){u.morphTargetInfluences&&c.push(u.name?u.name:u.uuid)}):c.push(o);let l;switch(Bs[s.path]){case Bs.weights:l=hs;break;case Bs.rotation:l=Oi;break;case Bs.position:case Bs.scale:l=us;break;default:switch(n.itemSize){case 1:l=hs;break;case 2:case 3:default:l=us;break}break}let h=i.interpolation!==void 0?Uw[i.interpolation]:hr,f=this._getArrayFromAccessor(n);for(let u=0,d=c.length;u<d;u++){let g=new l(c[u]+"."+Bs[s.path],e.array,f,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){let n=Ed(e.constructor),i=new Float32Array(e.length);for(let s=0,a=e.length;s<a;s++)i[s]=e[s]*n;e=i}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){let i=this instanceof Oi?_d:Dl;return new i(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function qw(r,t,e){let n=t.attributes,i=new je;if(n.POSITION!==void 0){let o=e.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new T(c[0],c[1],c[2]),new T(l[0],l[1],l[2])),o.normalized){let h=Ed(Sa[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=t.targets;if(s!==void 0){let o=new T,c=new T;for(let l=0,h=s.length;l<h;l++){let f=s[l];if(f.POSITION!==void 0){let u=e.json.accessors[f.POSITION],d=u.min,g=u.max;if(d!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),u.normalized){let v=Ed(Sa[u.componentType]);c.multiplyScalar(v)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}r.boundingBox=i;let a=new $n;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=a}function dg(r,t,e){let n=t.attributes,i=[];function s(a,o){return e.getDependency("accessor",a).then(function(c){r.setAttribute(o,c)})}for(let a in n){let o=Md[a]||a.toLowerCase();o in r.attributes||i.push(s(n[a],o))}if(t.indices!==void 0&&!r.index){let a=e.getDependency("accessor",t.indices).then(function(o){r.setIndex(o)});i.push(a)}return ge.workingColorSpace!==hn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ge.workingColorSpace}" not supported.`),Gs(r,t),qw(r,t,e),Promise.all(i).then(function(){return t.targets!==void 0?zw(r,t.targets,e):r})}var Aa=(function(){"use strict";var r="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",t="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",e=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(e)?t:r,s,a=WebAssembly.instantiate(o(i),{}).then(function(p){s=p.instance,s.exports.__wasm_call_ctors()});function o(p){for(var x=new Uint8Array(p.length),b=0;b<p.length;++b){var _=p.charCodeAt(b);x[b]=_>96?_-97:_>64?_-39:_+4}for(var M=0,b=0;b<p.length;++b)x[M++]=x[b]<60?n[x[b]]:(x[b]-60)*64+x[++b];return x.buffer.slice(0,M)}function c(p,x,b,_,M,y){var w=s.exports.sbrk,L=b+3&-4,E=w(L*_),A=w(M.length),D=new Uint8Array(s.exports.memory.buffer);D.set(M,A);var F=p(E,b,_,A,M.length);if(F==0&&y&&y(E,L,_),x.set(D.subarray(E,E+b*_)),w(E-w(0)),F!=0)throw new Error("Malformed buffer data: "+F)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},f=[],u=0;function d(p){var x={object:new Worker(p),pending:0,requests:{}};return x.object.onmessage=function(b){var _=b.data;x.pending-=_.count,x.requests[_.id][_.action](_.value),delete x.requests[_.id]},x}function g(p){for(var x="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(o(i))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+c.toString()+m.toString(),b=new Blob([x],{type:"text/javascript"}),_=URL.createObjectURL(b),M=0;M<p;++M)f[M]=d(_);URL.revokeObjectURL(_)}function v(p,x,b,_,M){for(var y=f[0],w=1;w<f.length;++w)f[w].pending<y.pending&&(y=f[w]);return new Promise(function(L,E){var A=new Uint8Array(b),D=u++;y.pending+=p,y.requests[D]={resolve:L,reject:E},y.object.postMessage({id:D,count:p,size:x,source:A,mode:_,filter:M},[A.buffer])})}function m(p){a.then(function(){var x=p.data;try{var b=new Uint8Array(x.count*x.size);c(s.exports[x.mode],b,x.count,x.size,x.source,s.exports[x.filter]),self.postMessage({id:x.id,count:x.count,action:"resolve",value:b},[b.buffer])}catch(_){self.postMessage({id:x.id,count:x.count,action:"reject",value:_})}})}return{ready:a,supported:!0,useWorkers:function(p){g(p)},decodeVertexBuffer:function(p,x,b,_,M){c(s.exports.meshopt_decodeVertexBuffer,p,x,b,_,s.exports[l[M]])},decodeIndexBuffer:function(p,x,b,_){c(s.exports.meshopt_decodeIndexBuffer,p,x,b,_)},decodeIndexSequence:function(p,x,b,_){c(s.exports.meshopt_decodeIndexSequence,p,x,b,_)},decodeGltfBuffer:function(p,x,b,_,M,y){c(s.exports[h[M]],p,x,b,_,s.exports[l[y]])},decodeGltfBufferAsync:function(p,x,b,_,M){return f.length>0?v(p,x,b,h[_],l[M]):a.then(function(){var y=new Uint8Array(p*x);return c(s.exports[h[_]],y,p,x,b,s.exports[l[M]]),y})}}})();var Fl={uNearR:{value:0},uNearC:{value:new at}},Xw={broad:["CommonTree_1","CommonTree_2","CommonTree_3","CommonTree_4","CommonTree_5"],pine:["Pine_1","Pine_2","Pine_3","Pine_4","Pine_5"],plant:["Fern_1","Fern_1","Fern_1","Plant_1_Big"]},jw={broad:7.2,pine:9.2},mg=240,gg=1100,vg=55,Hl=class{constructor(t){this.group=new Pt,t.add(this.group),this.ready=!1,this.radius=0,this.models={},this.rockGeos=null,this._last=new T(1e9,0,0),this._m4=new yt,this._q=new Vt,this._s=new T,this._p=new T,this._up=new T(0,1,0)}async load(t){let e=new Vs;e.setMeshoptDecoder(Aa);let i=(await e.loadAsync(t)).scene;i.updateMatrixWorld(!0);let s=[];for(let a of i.children){let o=a.name,c=new je().setFromObject(a),l=c.max.y-c.min.y,h=[];a.traverse(f=>{if(!f.isMesh)return;let u=Yw(f.geometry).applyMatrix4(f.matrixWorld);if(u.translate(0,-c.min.y-.05,0),/^Rock_/.test(o)){s.push(u);return}let d=f.material;d.side=me,d.map&&/leaf|leaves|grass/i.test(d.name+d.map.name)&&(d.alphaTest=.4,d.transparent=!1),d.envMapIntensity=.7,de(d);let g=[mg,gg].map((v,m)=>{let p=new Ee(u,d,v);return p.count=0,p.castShadow=m===0,p.receiveShadow=!0,p.frustumCulled=!1,p.layers.set(3),this.group.add(p),p});h.push(g)}),h.length&&(this.models[o]={parts:h,h:l})}return this.rockGeos=s.map(a=>{a.computeBoundingBox();let o=a.boundingBox,c=1/Math.max(o.max.x-o.min.x,o.max.z-o.min.z);return a.translate(-(o.min.x+o.max.x)/2,-o.min.y-.08,-(o.min.z+o.max.z)/2),a.scale(c,c,c),a}),this.ready=!0,this}setRadius(t){if(this.radius=t,Fl.uNearR.value=this.ready?t:0,this._last.set(1e9,0,0),!t)for(let e in this.models)for(let n of this.models[e].parts)n[0].count=0,n[1].count=0}update(t,e){if(Fl.uNearC.value.set(t.x,t.z),!this.ready||!this.radius||this._last.distanceToSquared(t)<4)return;this._last.copy(t);let n=this.radius,i=n*n,s={},a=vg*vg;for(let f in this.models)s[f]=[[],[]];for(let f of e.tiles.values()){let u=f.userData.near;if(!u)continue;let d=f.userData.box,g=Math.max(d[0]-t.x,0,t.x-d[2]),v=Math.max(d[1]-t.z,0,t.z-d[3]);if(!(g*g+v*v>i))for(let m of u){let p=m[1]-t.x,x=m[3]-t.z,b=p*p+x*x;if(b>i)continue;let _=Xw[m[0]],M=_[Math.floor(m[6]*4.999)%_.length];if(!s[M])continue;let y=b>a?1:0,w=s[M][y];w.length<(y?gg:mg)&&w.push(m)}}let o=this._m4,c=this._q,l=this._s,h=this._p;for(let f in this.models){let{parts:u,h:d}=this.models[f],g=s[f],v=f.startsWith("Pine")?"pine":f.startsWith("Common")?"broad":"plant",m=v==="plant"?1:jw[v]/d;for(let p of u)p.forEach((x,b)=>{g[b].forEach((_,M)=>{c.setFromAxisAngle(this._up,_[5]);let y=_[4]*m;o.compose(h.set(_[1],_[2],_[3]),c,l.set(y,y*(.92+_[6]*.16),y)),x.setMatrixAt(M,o)}),x.count=g[b].length,x.instanceMatrix.needsUpdate=!0})}}};function Yw(r){let t=r.clone();for(let e of Object.keys(t.attributes)){let n=t.attributes[e];if(n.array instanceof Float32Array&&!n.isInterleavedBufferAttribute)continue;let i=new Float32Array(n.count*n.itemSize),s=[n.getX,n.getY,n.getZ,n.getW];for(let a=0;a<n.count;a++)for(let o=0;o<n.itemSize;o++)i[a*n.itemSize+o]=s[o].call(n,a);t.setAttribute(e,new Et(i,n.itemSize))}return t}var Mg=2,Cd=1.3,Kw=27.119*Mg,Ad=-1.317*Cd,Eg=1.754*Cd,Jw=.8*Cd/Mg,Rd=76,Td=10,Zw=8,Qw=6.333*Math.SQRT2,xg=[-.5/99,2.25/99],Nl=.1,$w=4,Co=1.5,bg=120,wg=400,tT=8,eT=6e3,nT=we.halfWidth+1.2,iT=we.halfWidth+16,Pd=7,kl=27,Sd=12;function sT(r){let t=(r%1+1)%1,e=Math.sin(Math.PI*t)**2;return{a:Nl+(1-Nl)*e,b:Nl+(1-Nl)*(1-e)}}function Tg(r,t){let e=new Tt;return e.setAttribute("position",new mt(r,3)),e.setAttribute("normal",new mt(r.map((n,i)=>i%3===1?1:0),3)),e.setIndex(t),e}function yg(r,t,e=0){let n=Math.round(2*r/t),i=[],s=[];for(let a=0;a<=n;a++)for(let o=0;o<=n;o++)i.push(-r+o*t,0,-r+a*t);for(let a=0;a<n;a++)for(let o=0;o<n;o++){let c=-r+o*t,l=-r+a*t;if(e&&c>=-e-1e-6&&c+t<=e+1e-6&&l>=-e-1e-6&&l+t<=e+1e-6)continue;let h=a*(n+1)+o,f=h+1,u=h+n+1,d=u+1;s.push(h,u,f,f,u,d)}return Tg(i,s)}function rT(){let r=wg,t=eT,e=[-r,0,-r,r,0,-r,r,0,r,-r,0,r,-t,0,-t,t,0,-t,t,0,t,-t,0,t],n=[];for(let i=0;i<4;i++){let s=i,a=(i+1)%4,o=i+4,c=(i+1)%4+4;n.push(s,o,a,a,o,c)}return Tg(e,n)}var _g=`
uniform sampler2D uWave;
uniform float uFrame, uFrameB, uWA, uWB, uSea, uLod, uT;
uniform vec3 uCamW;
uniform vec3 uRoad[${kl}];
const float TILE = ${Kw.toFixed(3)};
const mat2 ROT = mat2(0.906, 0.423, -0.423, 0.906);      // ô sóng xoay ~25° so với trục thế giới
float oLod = 0.0;                                         // mức mipmap (fragment: theo khoảng cách)
// Mỗi ô 128 px gồm 100 px dữ liệu + viền lặp 14 px: mipmap ≤ 2.5 không trộn khung bên cạnh.
vec3 waveFrame(vec2 uv, float f) {
  vec2 c = fract(uv);
  vec2 o = vec2(mod(f, ${Td}.0), floor(f / ${Td}.0));
  return textureLod(uWave, (o * 128.0 + 14.5 + c * 99.0) / vec2(${Td*128}.0, ${Zw*128}.0), oLod).rgb;
}
// một lớp: giữa khung f0 và f1, dời mẫu theo hướng trôi (bù chuyển động) rồi mới trộn
vec3 waveLayer(vec2 uv, float fr) {
  float f0 = floor(fr), t = fr - f0, f1 = mod(f0 + 1.0, ${Rd}.0);
  vec2 v = vec2(${xg[0].toFixed(5)}, ${xg[1].toFixed(5)});
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
  float h = mix(${Ad.toFixed(3)}, ${Eg.toFixed(3)}, a.r);
  vec2 sl = (a.gb - 0.5) * ${(2*Jw).toFixed(3)};
  return vec3(h, sl * ROT);                                // độ dốc theo trục thế giới
}
`;function aT(r){let t=new Wt({color:16777215,roughness:.05,metalness:0,transparent:!0,depthWrite:!0});return t.onBeforeCompile=e=>{Object.assign(e.uniforms,r),e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
${_g}
varying vec3 vOW; varying float vDepth, vShore;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        vec3 ow = (modelMatrix * vec4(transformed, 1.0)).xyz;
        float camD = length(ow.xz - uCamW.xz);
        vec3 wv = waveAt(ow.xz);
        float fadeH = 1.0 - smoothstep(80.0, 112.0, camD);           // xa: chỉ còn pháp tuyến, mặt phẳng (lưới gần rộng ±120 m)
        transformed.y += wv.x * fadeH;
        // độ sâu ước lượng: khoảng cách tới tim đường + cao độ đường => cao độ đê (cùng công thức xẻ đường của terrain.js)
        float dm = 1e9, ry = uSea + 10.0;
        for (int i = 0; i < ${kl-1}; i++) {
          vec2 a = uRoad[i].xz, b = uRoad[i + 1].xz, ab = b - a;
          float t = clamp(dot(ow.xz - a, ab) / dot(ab, ab), 0.0, 1.0);
          float d = length(ow.xz - a - ab * t);
          if (d < dm) { dm = d; ry = mix(uRoad[i].y, uRoad[i + 1].y, t); }
        }
        float ground = mix(ry - 0.02, uSea - ${Pd.toFixed(1)}, smoothstep(${nT.toFixed(2)}, ${iT.toFixed(2)}, dm));
        vDepth = uSea + wv.x * fadeH - ground;
        vShore = 1.0 - smoothstep(30.0, 60.0, dm);
        vOW = ow; vOW.y += wv.x * fadeH;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
${_g}
varying vec3 vOW; varying float vDepth, vShore;
float oFoam = 0.0;
        float oHash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
        float oNoise(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
          return mix(mix(oHash(i), oHash(i + vec2(1.0, 0.0)), f.x), mix(oHash(i + vec2(0.0, 1.0)), oHash(i + vec2(1.0, 1.0)), f.x), f.y); }`).replace("#include <map_fragment>",`
        float camD = length(vOW.xz - uCamW.xz);
        oLod = clamp(log2(camD * camD / uLod), 0.0, 2.5);           // xa / nhìn xiên: mipmap thô hơn (ô 128 px có viền đệm => tối đa ~2.5)
        vec3 wv = waveAt(vOW.xz);
        float crest = smoothstep(0.55, 1.0, (wv.x - ${Ad.toFixed(3)}) / ${(Eg-Ad).toFixed(3)}) * (1.0 - smoothstep(60.0, 200.0, camD));
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
        }`)},t.customProgramCacheKey=()=>"ocean",de(t)}var Ul=class{constructor(t){this.group=new Pt,this.group.visible=!1,t.add(this.group),this.level=0,this.roadPts=Array.from({length:kl},()=>new T),this.u={uWave:{value:null},uFrame:{value:0},uFrameB:{value:0},uWA:{value:1},uWB:{value:0},uT:{value:0},uSea:{value:0},uLod:{value:3e3},uCamW:{value:new T},uRoad:{value:this.roadPts}},this.material=null,this._p={}}_build(){let t=new Fs().load("assets/tex/ocean-waves.png?v="+$w);t.flipY=!1,t.colorSpace=Rn,t.generateMipmaps=!0,t.minFilter=ki,t.magFilter=an,this.u.uWave.value=t,this.material=aT(this.u);for(let e of[yg(bg,Co),yg(wg,tT,bg),rT()]){let n=new kt(e,this.material);n.frustumCulled=!1,n.receiveShadow=!0,n.renderOrder=1,this.group.add(n)}}setMap(t,e=0){this.group.visible=t,this.level=e,t&&!this.material&&this._build()}update(t,e,n,i){if(!this.group.visible)return;this.group.position.set(Math.round(e.x/Co)*Co,this.level,Math.round(e.z/Co)*Co);let s=this.u,a=t/Qw%1,o=sT(a);s.uFrame.value=a*Rd,s.uT.value=t%1e3,s.uFrameB.value=(a+.5)%1*Rd,s.uWA.value=o.a,s.uWB.value=o.b,s.uSea.value=this.level,s.uCamW.value.copy(e),s.uLod.value=1500*Math.max(1,(e.y-this.level)/3);let c=this._p,l=Math.round(i/Sd)*Sd;for(let h=0;h<kl;h++)n.at(Math.max(0,l+(h-13)*Sd),c),this.roadPts[h].set(c.x,c.y,c.z)}};var Sg=32,oT=64,Ld=8192,We=we.halfWidth,Pg=We+1.2,Po=We+16,cT=()=>{We=we.halfWidth,Pg=We+1.2,Po=We+16},Id=1e6,ye=(r,t,e)=>{let n=Math.min(1,Math.max(0,(e-r)/(t-r)));return n*n*(3-2*n)},Be=r=>new et(r),Ag={forest:{a:Be("#7fa443"),b:Be("#a9b85a"),c:Be("#5c8036"),snowLine:215,trees:!0},reed:{a:Be("#ad9b5c"),b:Be("#c5b37b"),c:Be("#8c8a50"),snowLine:240,trees:!1},mountain:{a:Be("#789a45"),b:Be("#9eaa5a"),c:Be("#557236"),snowLine:300,trees:!0},meadow:{a:Be("#6f9a4c"),b:Be("#86ad5c"),c:Be("#5c8541"),snowLine:400,trees:!1,bare:!0},sea:{a:Be("#cbb98c"),b:Be("#bba97c"),c:Be("#7f8f55"),snowLine:600,trees:!1,bare:!0},city:{a:Be("#77787a"),b:Be("#828280"),c:Be("#6c6e6c"),snowLine:900,trees:!1,bare:!0}},lT=Be("#5f7f45"),hT=Be("#3e5d2b"),Rg=Be("#8a8072"),Dd=Be("#6b6259"),uT=Be("#eef2f6"),fT=Be("#8f887c"),dT=Be("#5f6c36"),Cg={64:1,128:.5,256:.22,512:.08},pT={64:1,128:.7,256:.4,512:.16},Ol=class{constructor(t,e,n){this.road=e,this.group=new Pt,t.add(this.group),this.tiles=new Map,this.view=1,this.keep=Cg,this.queue=[],this.queued=new Set,this.iCar=0,this.uCover={value:0},this.mat=new Wt({vertexColors:!0,map:j0(n),roughness:.96,metalness:0,envMapIntensity:.8}),this.texU={uRock:{value:dr("rock",n)},uRockN:{value:dr("rock_n",n,{srgb:!1})},uGravel:{value:dr("gravel",n)},uDirt:{value:dr("dirt",n)}},this.mat.onBeforeCompile=s=>{s.uniforms.uCover=this.uCover,Object.assign(s.uniforms,this.texU),s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
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
          }`)},this.treeMat=new Wt({map:Y0(),alphaTest:.45,side:me,roughness:.92});let i=s=>{Object.assign(s.uniforms,Fl),s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
uniform float uNearR;
uniform vec2 uNearC;`).replace("#include <begin_vertex>",`#include <begin_vertex>
          vec3 ipos = (modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;
          transformed *= smoothstep(uNearR - 1.0, uNearR + 1.0, distance(ipos.xz, uNearC));`)};this.treeMat.onBeforeCompile=s=>{i(s),s.fragmentShader=s.fragmentShader.replace("#include <normal_fragment_begin>",Jt.normal_fragment_begin.replace("normal *= faceDirection;",""))},this.treeDepth=new po({depthPacking:Tf,map:this.treeMat.map,alphaTest:.45,side:me}),this.treeDepth.onBeforeCompile=i,de(this.mat),de(this.treeMat),this.geos={pine:lg(),broad:cg()},this.rockGeos=[0,1,2].map(s=>Fd(s)),this.rockMat=new Wt({roughness:1,metalness:0,envMapIntensity:.35}),this.rockMat.onBeforeCompile=s=>{Object.assign(s.uniforms,this.texU),s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
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
          diffuseColor.rgb *= mix(vec3(dot(rt, vec3(0.3, 0.59, 0.11))), rt, 0.25) * 1.7;`)},de(this.rockMat),this._nd=Id,this._ny=0,this._nl=0,this._d=Id,this._rc=new et,this._white=new et(1,1,1)}setCar(t){this.iCar=Math.floor(t/we.step)}_samples(t,e,n,i,s,a,o){let c=this.road.pts,l=[],h=Math.max(0,a),f=Math.min(c.length-1,o);for(let u=h-h%s;u<=f;u+=s){if(u<h)continue;let d=c[u];d.x>=t&&d.x<=n&&d.z>=e&&d.z<=i&&l.push(u)}return l}_nearFine(t,e,n){let i=this.road.pts,s=1/0,a=-1;for(let h=0;h<n.length;h++){let f=i[n[h]],u=t-f.x,d=e-f.z,g=u*u+d*d;g<s&&(s=g,a=n[h])}if(a<0)return!1;let o=1/0,c=i[a].y,l=0;for(let h=a-1;h<=a;h++){if(h<0||h+1>=i.length)continue;let f=i[h],u=i[h+1],d=u.x-f.x,g=u.z-f.z,v=d*d+g*g,m=Math.max(0,Math.min(1,((t-f.x)*d+(e-f.z)*g)/v)),p=t-f.x-d*m,x=e-f.z-g*m,b=Math.hypot(p,x);b<o&&(o=b,c=f.y+(u.y-f.y)*m,l=(p*-g+x*d)/Math.sqrt(v))}return this._nd=o,this._ny=c,this._nl=l,this._ns=a*we.step,!0}_height(t,e,n,i){let s=this.road.pts,a=Se.side,o=1/0,c=0,l=0;for(let g=0;g<i.length;g++){let v=i[g],m=s[v],p=t-m.x,x=e-m.z,b=p*p+x*x;if(b<o&&(o=b),a&&v+1<s.length){let _=s[v+1],M=_.x-m.x,y=_.z-m.z,w=Math.hypot(M,y)||1,L=(p*-y+x*M)/w,E=1/(b*b+1e4);c+=E,l+=E*L}}let h=Math.sqrt(o),f=Si(t,e)+gl(t,e),u=0;this._d=Id,this._s=-1,this._rel=0;let d=h-70<Po&&this._nearFine(t,e,n);if(Se.sea)f=(Se.seaLevel??-10)-Pd+gl(t,e)*.6,h>400&&(f+=Math.max(0,vl(t,e)/Se.mount-.42)*2.6*Se.mount*ye(400,1200,h));else if(a){let g=c>0?l/c:0;d&&(g=this._nl+(g-this._nl)*ye(25,60,this._nd));let v=-g,m=.75+.5*De(t/220+4.4,e/220+9.9);if(v>0){f+=(360*(1-Math.exp(-v/210))+.2*v)*m;let p=ye(2,18,v)*(1-.5*ye(350,900,v));if(p>0){let x=1-Math.abs(De(t/42+1.7,e/42+6.3)*2-1),b=1-Math.abs(De(t/16+8.1,e/16+2.9)*2-1);u=(x*x-.45)*42+(b*b-.45)*15+(De(t/85+3.3,e/85+7.7)-.5)*34,f+=u*p,this._rel=u*Math.max(p,.5);let _=f/10,M=_-Math.floor(_);f+=((Math.floor(_)+ye(.3,.7,M))*10-f)*.75*p*ye(.25,.55,De(t/120+5.1,e/120+1.3))}}else f-=250*(1-Math.exp(v/170));f+=gl(t*1.7,e*1.7)*.8,Math.abs(v)>650&&(f+=vl(t,e)*ye(650,1500,Math.abs(v)))}else h>500&&(f+=vl(t,e)*ye(500,1600,h));if(d){this._d=this._nd,this._s=this._ns;let g=ye(Pg,Po,this._nd),v=this._ny-.02;f=v+(f-v)*g,a&&this._nl<0&&(f=Math.max(v,f+Math.max(u,-8)*ye(We+1.5,We+8,this._nd)*(1-g)))}return f}heightAt(t,e){let n=Po+80,i=this._samples(t-n,e-n,t+n,e+n,1,this.iCar-300,this.iCar+300),s=this._samples(t-1700,e-1700,t+1700,e+1700,25,this.iCar-2500,this.iCar+4e3);return this._height(t,e,i,s)}_color(t,e,n,i,s,a,o,c=0){let l=Ag[Se.id],h=De(t/150+2.3,e/150+6.1),f=De(t/37+8.8,e/37+1.2);o.copy(l.a).lerp(l.b,ye(.3,.75,h)).lerp(l.c,ye(.45,.9,f)*.55),Se.id==="city"&&o.lerp(lT,ye(1,20,n)),l.trees&&o.lerp(hT,ye(.44,.66,De(t/260+3.1,e/260+8.7))*.6);let u=a>=0?this.road.dirtAt(a):0,d=u*(1-ye(We+1,We+28,s));d>0&&o.lerp(dT,d*.75);let g=1-i;o.lerp(Dd,ye(110,220,n)*.45);let v=ye(.22,.4,g);if(v>0){let b=.72+.4*De((t+e)/9+1.3,n/2.6)+.18*(f-.5);this._rc.copy(f>.5?Rg:Dd).multiplyScalar(b),o.lerp(this._rc,v)}let m=ye(l.snowLine+(h-.5)*60,l.snowLine+50,n)*(1-ye(.5,.75,g));o.lerp(uT,m);let p=(1-(Se.id==="forest"?ye(We+.2,We+1.1,s):ye(We+1,We+3.2,s)))*(1-u);o.lerp(fT,p);let x=Se.id==="mountain"?ye(70,190,n)*(1-v)*(1-m)*ye(.35,.7,f+.3*h)*.8:0;return this._mixG=Math.max(p,x),this._mixD=d*ye(.25,.6,De(t/9+5.5,e/9+2.2)*.7+.5*(1-ye(We+1,We+9,s))),c&&o.multiplyScalar(.62+.58*ye(-16,16,c)),o}_build(t,e,n){let i=Sg,s=n/i,a=i+3,o=Po+80,c=this.iCar-2500,l=this.iCar+4e3,h=this._samples(t-o,e-o,t+n+o,e+n+o,1,c,l),f=this._samples(t-1700,e-1700,t+n+1700,e+n+1700,25,c,l),u=new Float32Array(a*a),d=new Float32Array(a*a),g=new Float32Array(a*a),v=new Float32Array(a*a);for(let N=0;N<a;N++)for(let U=0;U<a;U++)u[N*a+U]=this._height(t+(U-1)*s,e+(N-1)*s,h,f),d[N*a+U]=this._d,g[N*a+U]=this._s,v[N*a+U]=this._rel;let m=(i+1)*(i+1),p=4*(i+1),x=new Float32Array((m+p)*3),b=new Float32Array((m+p)*3),_=new Float32Array((m+p)*3),M=new Float32Array((m+p)*2),y=new Float32Array((m+p)*2),w=new et,L=new Float32Array(m);for(let N=0;N<=i;N++)for(let U=0;U<=i;U++){let z=(N+1)*a+(U+1),W=N*(i+1)+U,j=t+U*s,it=e+N*s,B=u[z],Z=u[z-1]-u[z+1],lt=2*s,ht=u[z-a]-u[z+a],_t=Math.hypot(Z,lt,ht);Z/=_t,lt/=_t,ht/=_t,L[W]=lt,x.set([j,B,it],W*3),b.set([Z,lt,ht],W*3),this._color(j,it,B,lt,d[z],g[z],w,v[z]),_.set([w.r,w.g,w.b],W*3),y[W*2]=this._mixG,y[W*2+1]=this._mixD,M.set([j/6,it/6],W*2)}let E=[];for(let N=0;N<i;N++)for(let U=0;U<i;U++){let z=N*(i+1)+U,W=z+1,j=z+i+1,it=j+1;E.push(z,j,W,W,j,it)}let A=s*1.5+1,D=[Array.from({length:i+1},(N,U)=>U),Array.from({length:i+1},(N,U)=>i*(i+1)+U),Array.from({length:i+1},(N,U)=>U*(i+1)),Array.from({length:i+1},(N,U)=>U*(i+1)+i)],F=m;for(let N of D){let U=F;for(let z of N)x.set([x[z*3],x[z*3+1]-A,x[z*3+2]],F*3),b.set([b[z*3],b[z*3+1],b[z*3+2]],F*3),_.set([_[z*3],_[z*3+1],_[z*3+2]],F*3),y[F*2]=y[z*2],y[F*2+1]=y[z*2+1],M.set([M[z*2],M[z*2+1]],F*2),F++;for(let z=0;z<i;z++){let W=N[z],j=N[z+1],it=U+z,B=U+z+1;E.push(W,it,j,j,it,B,W,j,it,j,B,it)}}let k=new Tt;k.setAttribute("position",new Et(x,3)),k.setAttribute("normal",new Et(b,3)),k.setAttribute("color",new Et(_,3)),k.setAttribute("aMix",new Et(y,2)),k.setAttribute("uv",new Et(M,2)),k.setIndex(E),k.computeBoundingSphere();let P=new kt(k,this.mat);P.receiveShadow=n<=256,P.castShadow=n<=64;let C=new Pt;C.add(P),C.userData.box=[t,e,t+n,e+n];let I=this._trees(t,e,n,s,a,u,d,L,g,C);for(let N of I)C.add(N);return this.group.add(C),C}_bil(t,e,n,i,s,a,o){let c=(a-i)/n+1,l=(o-s)/n+1,h=Math.max(0,Math.min(e-2,Math.floor(c))),f=Math.max(0,Math.min(e-2,Math.floor(l))),u=c-h,d=l-f,g=t[f*e+h],v=t[f*e+h+1],m=t[(f+1)*e+h],p=t[(f+1)*e+h+1];return g+(v-g)*u+(m-g)*d+(g-v-m+p)*u*d}_nearest(t,e,n,i,s,a,o){let c=Math.min(e-1,Math.max(0,Math.round((a-i)/n+1))),l=Math.min(e-1,Math.max(0,Math.round((o-s)/n+1)));return t[l*e+c]}_trees(t,e,n,i,s,a,o,c,l,h){let f=Ag[Se.id],u=this.keep[n]||0;if(!u)return[];let d=Sg,g=Se.id==="mountain",v=[],m=[],p=[],x=(w,L)=>c[Math.min(d,Math.round((L-e)/i))*(d+1)+Math.min(d,Math.round((w-t)/i))],b=n<=128?[]:null;h&&(h.userData.near=b);let _=[{cell:8,seed:0}];if(this.road.dirt&&n<=128){let w=!1;for(let L=0;L<l.length&&!w;L+=7)l[L]>=0&&this.road.dirtAt(l[L])>.05&&(w=!0);w&&_.push({cell:4,seed:1})}for(let{cell:w,seed:L}of _){let E=L*15485863;for(let A=Math.floor(e/w);A*w<e+n;A++)for(let D=Math.floor(t/w);D*w<t+n;D++){if($t(D+E,A)>u)continue;let F=(D+$t(D+7919+E,A))*w,k=(A+$t(D+E,A+7919))*w;if(F<t||F>=t+n||k<e||k>=e+n)continue;let P=this._bil(o,s,i,t,e,F,k),C=P<60?this._nearest(l,s,i,t,e,F,k):-1,I=C>=0?this.road.dirtAt(C):0,N=f.trees?ye(.44,.66,De(F/260+3.1,k/260+8.7))*.92+.03:f.bare?0:.012;L?N=I*.85*(1-ye(We+20,We+45,P)):N=Math.max(N,I*.9*(1-ye(We+25,We+60,P)));let U=this._bil(a,s,i,t,e,F,k),z=x(F,k);if($t(D+104729+E,A+31)>N||P<We+7.5-5*I+(L?$t(D,A+3)*1.5:0)||U>f.snowLine-20||z<(g?.66:.8))continue;let W=(.75+$t(D+3+E,A+5)*.7)*(n>=256?1.3:1)*(I>.3?1.15:1),j=f.trees?$t(D+11+E,A+13)<(g?.9:.58+ye(60,180,U)*.35):!1,it=[F,U-.2,k,W,$t(D+17+E,A+19)*6.283,$t(D+23+E,A+29)];(j?v:m).push(it),b&&b.push([j?"pine":"broad",...it])}}if(n<=256)for(let L=Math.floor(e/22);L*22<e+n;L++)for(let E=Math.floor(t/22);E*22<t+n;E++){if($t(E+911,L+577)>u)continue;let A=(E+$t(E+31,L+977))*22,D=(L+$t(E+977,L+31))*22;if(A<t||A>=t+n||D<e||D>=e+n)continue;let F=this._bil(o,s,i,t,e,A,D);if(F<We+3)continue;let k=x(A,D),P=F<60?this._nearest(l,s,i,t,e,A,D):-1,C=P>=0?this.road.dirtAt(P):0,I=g&&k<=.5,N=g?F<We+14?.45:I?.32:k<.93?.3:.06:C*.2;if($t(E+3331,L+7177)>N)continue;let U=(g?I?3:1.6:.8)+Math.pow($t(E+41,L+43),1.6)*(g?I?7:5.5:1.6),z=3+Math.floor($t(E+7,L+9)*5);for(let W=0;W<z;W++){let j=$t(E*7+W,L+101)*6.283,it=(W===0?0:.6+$t(E+W*13,L*3+7)*1.4)*U,B=A+Math.cos(j)*it,Z=D+Math.sin(j)*it;if(B<t-4||B>=t+n+4||Z<e-4||Z>=e+n+4||this._bil(o,s,i,t,e,B,Z)<We+2)continue;let lt=U*(W===0?1:.35+$t(E+W,L+W*5)*.55),ht=this._bil(a,s,i,t,e,B,Z);p.push([B,ht-lt*(I?.35:.22),Z,lt,$t(E+W*3,L+53)*6.283,$t(E+59+W,L+61)])}}if(b&&n<=64&&f.trees)for(let L=Math.floor(e/3.5);L*3.5<e+n;L++)for(let E=Math.floor(t/3.5);E*3.5<t+n;E++){let A=(E+$t(E+5153,L))*3.5,D=(L+$t(E,L+5153))*3.5;if(A<t||A>=t+n||D<e||D>=e+n)continue;let F=this._bil(o,s,i,t,e,A,D);if(F<We+1.6)continue;let k=F<60?this._nearest(l,s,i,t,e,A,D):-1,P=k>=0?this.road.dirtAt(k):0,C=(g?.07:.1+.18*ye(.44,.66,De(A/260+3.1,D/260+8.7)))+P*.35;if($t(E+6007,L+6011)>C||x(A,D)<.75)continue;let I=this._bil(a,s,i,t,e,A,D);b.push(["plant",A,I-.05,D,.6+$t(E+61,L+67)*.7,$t(E+71,L+73)*6.283,$t(E+79,L+83)])}let M=[],y=(w,L,E,A)=>{if(!w.length)return;let D=new Ee(L,E,w.length),F=new yt,k=new Vt,P=new T,C=new T,I=new T(0,1,0),N=new et,U=new hi;w.forEach(([z,W,j,it,B,Z],lt)=>{A?k.setFromEuler(U.set((Z-.5)*.5,B,(Z-.5)*.4)):k.setFromAxisAngle(I,B),F.compose(C.set(z,W,j),k,P.set(it,it*(A?.75+Z*.45:.9+Z*.3),it)),D.setMatrixAt(lt,F),A?N.copy(Z>.5?Rg:Dd).multiplyScalar(1.15+Z*.3):N.setHSL(.2+(Z-.5)*.12,.45,.62+Z*.2).lerp(this._white,.55),D.setColorAt(lt,N)}),D.castShadow=n<=64,D.receiveShadow=A&&n<=128,A||(D.customDepthMaterial=this.treeDepth),D.layers.set(3),M.push(D)};if(y(v,this.geos.pine,this.treeMat),y(m,this.geos.broad,this.treeMat),p.length){let w=this.rockGeos.map(()=>[]);p.forEach(L=>w[Math.floor(L[5]*(w.length-.001))].push(L)),w.forEach((L,E)=>y(L,this.rockGeos[E],this.rockMat,!0))}return M}_dispose(t){this.group.remove(t),t.traverse(e=>{e.isInstancedMesh?e.dispose():e.isMesh&&e.geometry.dispose()})}reset(){cT();for(let t of this.tiles.values())this._dispose(t);this.tiles.clear(),this.queue.length=0,this.queued.clear()}update(t,e=6){let n=new Map,i=Math.round(t.x/1024)*1024-Ld/2,s=Math.round(t.z/1024)*1024-Ld/2,a=(o,c,l)=>{let h=Math.min(Math.max(t.x,o),o+l),f=Math.min(Math.max(t.z,c),c+l),u=Math.hypot(t.x-h,t.z-f);if(l>oT&&u<l*this.view){let d=l/2;a(o,c,d),a(o+d,c,d),a(o,c+d,d),a(o+d,c+d,d)}else n.set(l+"|"+o+"|"+c,[o,c,l,u])};a(i,s,Ld);for(let[o,c]of n)!this.tiles.has(o)&&!this.queued.has(o)&&(this.queue.push([o,...c]),this.queued.add(o));if(this.queue.length){this.queue.sort((c,l)=>c[3]-l[3]||c[4]-l[4]);let o=performance.now();for(;this.queue.length&&performance.now()-o<e;){let[c,l,h,f]=this.queue.shift();this.queued.delete(c),!(!n.has(c)||this.tiles.has(c))&&this.tiles.set(c,this._build(l,h,f))}}if(!this.queue.length)for(let[o,c]of this.tiles)n.has(o)||(this._dispose(c),this.tiles.delete(o))}prime(t){this.update(t,1e9)}setView(t,e){t!==this.view&&(this.view=t,this.keep=t>1?pT:Cg,this.tiles.size&&(this.reset(),e&&this.prime(e)))}apply(t){this.uCover.value=t.cover,this.mat.color.setScalar((1-.2*t.wet)*(1-.3*t.dark));let e=.2*t.cover*t.dayF;this.treeMat.emissive.setRGB(e,e*1.02,e*1.05)}};function Fd(r,t=3){let e=new xo(1,t);e.deleteAttribute("normal"),e.deleteAttribute("uv"),e=rg(e);let n=e.attributes.position,i=new T;for(let s=0;s<n.count;s++){i.fromBufferAttribute(n,s);let a=De(i.x*1.7+r*13.1,i.z*1.7+i.y*1.3+r*7.7)*.45+De(i.x*4.1+r,i.y*4.3-i.z*2.1)*.18;i.multiplyScalar(.72+a),i.y=Math.max(i.y,-.25),n.setXYZ(s,i.x,i.y,i.z)}return e.computeVertexNormals(),e}var Hd=`
  uniform float uExposure;
  vec3 dispToLin(vec3 d) {
    vec3 x = clamp(mix(pow((d + 0.055) / 1.055, vec3(2.4)), d / 12.92, step(d, vec3(0.04045))), 0.0, 0.985);
    vec3 A = 1.0 - 0.983729 * x, B = 0.0245786 - 0.432951 * x, C = -(0.000090537 + 0.238081 * x);
    return (-B + sqrt(B * B - 4.0 * A * C)) / (2.0 * A) * 0.6 / uExposure;
  }`;function Lg(r,t=1){let e=new Float32Array(r*t*3);for(let n=0;n<r;n++){let i=Math.random(),s=Math.random(),a=Math.random();for(let o=0;o<t;o++)e.set([i,s,a],(n*t+o)*3)}return e}var mT=`
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
  }`,gT=`
  uniform float uOpacity, uLight; uniform vec3 uColor; varying float vA;
  ${Hd}
  void main() {
    float r = length(gl_PointCoord - 0.5) * 2.0;
    float a = smoothstep(1.0, 0.25, r);
    gl_FragColor = vec4(dispToLin(uColor * uLight), a * uOpacity * vA);
  }`,zl=class{constructor(t){this.time=0;let e=new T(40,26,40),n=()=>({uTime:{value:0},uCam:{value:new T},uBox:{value:e.clone()},uOpacity:{value:0},uLight:{value:1},uExposure:{value:.6}}),i=14e3,s=new Tt;s.setAttribute("position",new Et(new Float32Array(i*2*3),3)),s.setAttribute("seed",new Et(Lg(i,2),3));let a=new Float32Array(i*2);for(let c=0;c<i;c++)a[c*2+1]=1;s.setAttribute("tail",new Et(a,1)),this.rain=new Ui(s,new ve({uniforms:{...n(),uSpeed:{value:24},uLen:{value:1.1},uWind:{value:new at(2,1)},uCarInv:{value:new yt},uCarHalf:{value:new T}},transparent:!0,depthWrite:!1,vertexShader:`
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
        ${Hd}
        void main() {
          vec3 local = (uCarInv * vec4(vWorld, 1.0)).xyz - vec3(0.0, uCarHalf.y, 0.0);
          if (all(lessThan(abs(local), uCarHalf))) discard;
          gl_FragColor = vec4(dispToLin(vec3(0.78, 0.84, 0.92) * uLight), uOpacity * vA);
        }`})),this.rain.frustumCulled=!1,this.rain.layers.set(3),this.rain.renderOrder=10,this.rain.visible=!1,t.add(this.rain);let o=(c,l,h)=>{let f=new Tt;f.setAttribute("position",new Et(new Float32Array(c*3),3)),f.setAttribute("seed",new Et(Lg(c),3));let u=new en(f,new ve({uniforms:{...n(),uScale:{value:400},uColor:{value:new et(...h)},...l},transparent:!0,depthWrite:!1,vertexShader:mT,fragmentShader:gT}));return u.frustumCulled=!1,u.layers.set(3),u.renderOrder=10,u.visible=!1,t.add(u),u};this.snow=o(1e4,{uSize:{value:.09},uFall:{value:1.6},uSway:{value:.9},uDrift:{value:new at}},[.96,.98,1]),this.drift=o(2600,{uSize:{value:.05},uFall:{value:.12},uSway:{value:.25},uDrift:{value:new at}},[.95,.9,.78])}setCar(t,e){t.updateWorldMatrix(!0,!1);let n=this.rain.material.uniforms;n.uCarInv.value.copy(t.matrixWorld).invert(),n.uCarHalf.value.set(e.width/2,e.height/2,e.length/2)}update(t,e,n,i){this.time+=t;let s=n.windDir.clone().multiplyScalar(1.5+n.wind*11);for(let l of[this.rain,this.snow,this.drift]){let h=l.material.uniforms;h.uTime.value=this.time,h.uCam.value.copy(e),h.uLight.value=n.light,h.uExposure.value=n.exposure||.6}let a=this.rain.material.uniforms;a.uOpacity.value=.55*n.rain*(1+.25*n.dark),a.uWind.value.copy(s),this.rain.visible=n.rain>.02;let o=this.snow.material.uniforms;o.uOpacity.value=.95*n.snow,o.uScale.value=i*.5,o.uDrift.value.copy(s).multiplyScalar(.35),this.snow.visible=n.snow>.02;let c=this.drift.material.uniforms;c.uOpacity.value=.8*n.drift,c.uScale.value=i*.5,c.uDrift.value.copy(s).multiplyScalar(.9),this.drift.visible=n.drift>.02}};var Nd=Math.PI/180,Wn=(r,t,e)=>Math.min(e,Math.max(t,r)),ni=(r,t,e)=>{let n=Wn((e-r)/(t-r),0,1);return n*n*(3-2*n)},Ig={clear:{fog:42e-5,overcast:0,clouds:.52,sun:1,rain:0,snow:0,wet:0,cover:0,wind:.3,dark:0,tint:"#b9d6ee"},cloudy:{fog:9e-4,overcast:.75,clouds:.86,sun:.3,rain:0,snow:0,wet:0,cover:0,wind:.38,dark:.12,tint:"#a6b1bb"},windy:{fog:6e-4,overcast:.2,clouds:.62,sun:.85,rain:0,snow:0,wet:0,cover:0,wind:.95,dark:0,tint:"#b4c6d8"},rain:{fog:.0016,overcast:1,clouds:1,sun:.1,rain:.85,snow:0,wet:1,cover:0,wind:.5,dark:.35,tint:"#7a858f"},storm:{fog:.0027,overcast:1,clouds:1,sun:.03,rain:1,snow:0,wet:1,cover:0,wind:1,dark:1,tint:"#3f4852"},snow:{fog:.0019,overcast:.85,clouds:1,sun:.35,rain:0,snow:1,wet:0,cover:1,wind:.32,dark:.1,tint:"#d3dbe2"},fog:{fog:.0066,overcast:.55,clouds:.5,sun:.3,rain:0,snow:0,wet:.2,cover:0,wind:.08,dark:.05,tint:"#c4c9cd"}},vT=1.5,xT=["fog","overcast","clouds","sun","rain","snow","wet","cover","wind","dark"],bT=[[-18,"#040a1a","#08142c","#122244","#122244","#000000"],[-9,"#06102e","#0e1d47","#1f2d5a","#363562","#24182c"],[-4,"#122052","#2a3c79","#67588d","#d06e7a","#a24a40"],[0,"#1d3d80","#4868ab","#e3987c","#ff8a48","#ff7030"],[4,"#2453a0","#6286c4","#f0bd92","#ffb36c","#ff9a52"],[10,"#2a64b4","#719fd9","#f1d9bd","#ffd59c","#ffcf88"],[22,"#2468c8","#5b9be3","#c6def3","#e1edf5","#fff1d6"],[50,"#1e5fc4","#4f92e0","#b4d4f2","#d2e5f3","#fff7e6"]].map(([r,...t])=>[r,...t.map(e=>new et(e))]),Dg=2.15;function Ng(r,t,e){let n=t/.6,i=r.r*n,s=r.g*n,a=r.b*n,o=.59719*i+.35458*s+.04823*a,c=.076*i+.90834*s+.01566*a,l=.0284*i+.13383*s+.83777*a,h=v=>(v*(v+.0245786)-90537e-9)/(v*(.983729*v+.432951)+.238081),f=h(o),u=h(c),d=h(l),g=v=>(v=Math.min(1,Math.max(0,v)),v<=.0031308?12.92*v:1.055*Math.pow(v,1/2.4)-.055);return e.setRGB(g(1.60475*f-.53108*u-.07367*d),g(-.10208*f+1.10813*u-.00605*d),g(-.00327*f-.07276*u+1.07602*d))}var Bl=new et;function yT(r,t,e){let n=a=>(a=Math.min(.985,Math.max(0,a)),a<=.04045?a/12.92:Math.pow((a+.055)/1.055,2.4)),i=a=>{let o=1-.983729*a,c=.0245786-.432951*a,l=-(90537e-9+.238081*a);return(-c+Math.sqrt(c*c-4*o*l))/(2*o)*.6/t},s=[n(r.r),n(r.g),n(r.b)];e.setRGB(i(s[0]),i(s[1]),i(s[2]));for(let a=0;a<4;a++){Ng(e,t,Bl);let o=[n(Bl.r),n(Bl.g),n(Bl.b)];e.setRGB(e.r*s[0]/Math.max(o[0],1e-5),e.g*s[1]/Math.max(o[1],1e-5),e.b*s[2]/Math.max(o[2],1e-5))}return e}var _T=`
  varying vec3 vDir;
  void main() { vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,MT=`
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
  }`,ET=new et("#fff3df"),wT=new et("#ff9a50"),Fg=new et("#9ab6ff"),TT=new et(1.7,1.78,1.95),ST=Math.PI-1,AT=Math.PI-1.15,Hg={exposure:1,skyBrightness:1,directLight:1,ambientLight:1,sunGlow:1,sunDisc:1,cloudBrightness:1,rays:1,autoSpeed:.06,sunAzimuth:ST,moonAzimuth:AT},RT=`
  varying vec3 vDir;
  void main() { vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,CT=`
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
  }`,Gl=class{constructor(t,e,n){this.renderer=t,this.scene=e,this.camera=n,this.hour=17.55,this.auto=!1,this.tween=null,this.weather="clear",this.weatherProfiles=Object.fromEntries(Object.entries(Ig).map(([o,c])=>[o,{...c}])),this.w={...this.weatherProfiles.clear},this.tint=new et(this.weatherProfiles.clear.tint),this.target=this.weatherProfiles.clear,this.tune={...Hg},this.windDir=new at(.78,.62).normalize(),this._fogDisp=new et,this.veil={uVeilCol:{value:new et},uVeil:{value:new at(0,.2)}},this.mistCover=.35,this.mistDens=.2,this.skyMat=new ve({uniforms:{...this.veil,uZenith:{value:new et},uMid:{value:new et},uHorizon:{value:new et},uBand:{value:new et},uSunCol:{value:new et},uSunDir:{value:new T(0,1,0)},uGlow:{value:1},uDisc:{value:1},uBandAmt:{value:1},uScale:{value:1},uGround:{value:new he(0,0,0,0)},uMoonDir:{value:new T(0,1,0)},uMoonCol:{value:new et(TT)},uMoon:{value:0}},vertexShader:_T,fragmentShader:MT,side:_n,depthWrite:!1,fog:!1}),this.sky=new kt(new Ti(2400,48,24),this.skyMat),this.sky.renderOrder=-10,this.sky.frustumCulled=!1,e.add(this.sky),this.skyC={zen:new et,mid:new et,hor:new et,band:new et,sun:new et},this.envScene=new cs,this.envScene.add(new kt(new Ti(900,32,16),this.skyMat)),this.pmrem=new oa(t),this.envRT=null,this.envTimer=0,this.envKey="";let i=new Float32Array(1800*3);for(let o=0;o<1800;o++){let c=new T().randomDirection();c.y=Math.abs(c.y)*.9+.1,c.normalize().multiplyScalar(3200),i.set([c.x,c.y,c.z],o*3)}let s=new Tt;s.setAttribute("position",new Et(i,3)),this.stars=new en(s,new wi({color:14674175,size:2.1,sizeAttenuation:!1,transparent:!0,opacity:0,depthWrite:!1,fog:!1})),this.stars.renderOrder=1,this.stars.frustumCulled=!1,e.add(this.stars),this.cloudMat=new ve({uniforms:{...this.veil,uTime:{value:0},uCover:{value:.4},uFlash:{value:0},uSoft:{value:0},uDrift:{value:new at},uSunDir:{value:new T(0,1,0)},uLit:{value:new et},uShade:{value:new et},uFlashCol:{value:new et(1.5,1.7,2.4)}},vertexShader:RT,fragmentShader:CT,side:_n,transparent:!0,depthWrite:!1,fog:!1}),this.dome=new kt(new Ti(2300,32,16),this.cloudMat),this.dome.renderOrder=3,this.dome.frustumCulled=!1,e.add(this.dome),this.cloudTime=0,this.haze=new kt(new Ve(1800,1800,1,48,1,!0),new ve({uniforms:{uColor:{value:new et}},side:me,transparent:!0,depthWrite:!1,fog:!1,vertexShader:"varying float vT; void main(){ vT = position.y + 0.5; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:"uniform vec3 uColor; varying float vT; void main(){ float a = 1.0 - vT; gl_FragColor = vec4(uColor, a * a); }"})),this.haze.renderOrder=5,this.haze.frustumCulled=!1,e.add(this.haze),this.boltGeo=new Tt,this.boltGeo.setAttribute("position",new Et(new Float32Array(480),3)),this.boltGeo.setDrawRange(0,0),this.bolt=new Ui(this.boltGeo,new ls({color:14083327,transparent:!0,opacity:0,blending:Xe,depthWrite:!1,fog:!1})),this.bolt.renderOrder=6,this.bolt.frustumCulled=!1,e.add(this.bolt),this.flashT=-1,this.nextStrike=2,this.flash=0,this.onThunder=null,this.sun=new pa(16777215,1),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048);let a=this.sun.shadow.camera;a.left=-38,a.right=38,a.top=38,a.bottom=-38,a.near=1,a.far=260,this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=.04,a.layers.enable(3),e.add(this.sun,this.sun.target),this.hemi=new cl(12572927,4214832,.4),e.add(this.hemi),e.fog=new Zc(12179182,6e-4),this.precip=new zl(e),this.state={night:0,lamps:0,dayF:1,warm:0,light:1,rain:0,snow:0,wet:0,cover:0,overcast:0,wind:.3,dark:0,drift:0,flash:0,windDir:this.windDir,fogColor:new et,mistColor:new et,sunDir:new T,elevation:0,moonDir:new T,lightDir:new T,moon:0,rays:0,rayDir:new T,rayCol:new et},this._c=new et,this._c2=new et,this._lit=new et,this._shade=new et,this._v=new T}snapWeather(t){this.setWeather(t),Object.assign(this.w,this.target),this.tint.set(this.target.tint)}setWeather(t){this.weather=t,this.target=this.weatherProfiles[t],t==="storm"&&(this.nextStrike=Math.min(this.nextStrike,1.2))}resetWeather(t){Object.assign(this.weatherProfiles[t],Ig[t]),this.weather===t&&this.setWeather(t)}resetTune(){Object.assign(this.tune,Hg),this.envKey=""}setTime(t){if(t==null){this.auto=!0,this.tween=null;return}this.auto=!1,this.tween=t}get clock(){let t=Math.floor(this.hour),e=Math.floor((this.hour-t)*60);return String(t).padStart(2,"0")+":"+String(e).padStart(2,"0")}_strike(t){let e=Math.random()*Math.PI*2,n=800+Math.random()*900,i=new T(t.x+Math.cos(e)*n,0,t.z+Math.sin(e)*n),s=new T(i.x+(Math.random()-.5)*240,650+Math.random()*200,i.z+(Math.random()-.5)*240),a=this.boltGeo.attributes.position,o=0,c=(l,h,f,u)=>{let d=l.clone();for(let g=1;g<=f;g++){let v=g/f,m=l.clone().lerp(h,v);g<f&&m.add(new T((Math.random()-.5)*u,0,(Math.random()-.5)*u)),a.setXYZ(o++,d.x,d.y,d.z),a.setXYZ(o++,m.x,m.y,m.z),d=m}return d};c(s,i,16,110);for(let l=0;l<3;l++){let h=.25+Math.random()*.5,f=s.clone().lerp(i,h),u=f.clone().add(new T((Math.random()-.5)*380,-(120+Math.random()*260),(Math.random()-.5)*380));c(f,u,5,60)}a.needsUpdate=!0,this.boltGeo.setDrawRange(0,o),this.flashT=0,this.onThunder&&this.onThunder(Wn(n/340,.7,4.2),Wn(1.3-n/1800,.35,1))}update(t,e){let n=this.camera.position;if(this.auto)this.hour=(this.hour+t*this.tune.autoSpeed)%24;else if(this.tween!=null){let ht=(this.tween-this.hour+36)%24-12,_t=5*t;Math.abs(ht)<=_t?(this.hour=this.tween,this.tween=null):this.hour=(this.hour+Math.sign(ht)*_t+24)%24}let i=1-Math.exp(-t*1.4);for(let ht of xT)ht!=="wet"&&(this.w[ht]+=(this.target[ht]-this.w[ht])*i);let s=this.target.wet-this.w.wet;this.w.wet+=Math.sign(s)*Math.min(Math.abs(s),t/vT),this.tint.lerp(this._c.set(this.target.tint),i);let a=this.w,o=a.overcast,c=a.dark;if(this.weather==="storm"&&a.dark>.5&&(this.nextStrike-=t,this.nextStrike<=0&&(this._strike(n),this.nextStrike=3.5+Math.random()*7)),this.flashT>=0){this.flashT+=t;let ht=this.flashT;this.flash=Wn(Math.exp(-ht*11)+.75*(ht>.17?Math.exp(-(ht-.17)*8):0),0,1),ht>1.6&&(this.flashT=-1,this.flash=0,this.boltGeo.setDrawRange(0,0))}let l=this.flash;this.bolt.material.opacity=this.flashT>=0&&this.flashT<.5?l:0,this.bolt.visible=this.bolt.material.opacity>.02;let h=65*Math.sin((this.hour-6)/24*Math.PI*2),f=this.state.sunDir;f.setFromSphericalCoords(1,Math.PI/2-h*Nd,this.tune.sunAzimuth);let u=ni(-4,14,h),d=1-ni(-12,0,h),g=Math.exp(-Math.pow((h-3)/10,2)),v=this.state.moonDir;v.setFromSphericalCoords(1,Math.PI/2-(3+9*ni(-3,-30,h))*Nd,this.tune.moonAzimuth);let m=this._v.setFromSphericalCoords(1,Math.PI/2-38*Nd,this.tune.moonAzimuth),p=ni(-2,-11,h),x=bT,b=0;for(;b<x.length-2&&h>x[b+1][0];)b++;let _=x[b],M=x[b+1],y=Wn((h-_[0])/(M[0]-_[0]),0,1),w=this.skyC;["zen","mid","hor","band","sun"].forEach((ht,_t)=>w[ht].copy(_[_t+1]).lerp(M[_t+1],y));let L=.07+.93*u,E=Wn(o*.92+c*.08,0,1),A=this._c.copy(this.tint).multiplyScalar(L).lerp(this._c2.set("#c9997f").multiplyScalar(L),g*.35*(1-c));w.zen.lerp(this._lit.copy(A).multiplyScalar(.8),E),w.mid.lerp(this._lit.copy(A).multiplyScalar(.92),E),w.hor.lerp(A,E),w.band.lerp(A,E);let D=Dg*this.tune.skyBrightness*(1-.6*c);for(let ht of["zen","mid","hor","band"])w[ht].multiplyScalar(D).add(this._c2.setRGB(.55,.65,1).multiplyScalar(l*1.6));let F=this.skyMat.uniforms;F.uZenith.value.copy(w.zen),F.uMid.value.copy(w.mid),F.uHorizon.value.copy(w.hor),F.uBand.value.copy(w.band),F.uSunCol.value.copy(w.sun).multiplyScalar(Dg*this.tune.skyBrightness),F.uSunDir.value.copy(f),F.uGlow.value=(1-o*.95)*ni(-6,1,h)*(1-c)*this.tune.sunGlow,F.uDisc.value=(1-o)*ni(-1.5,.5,h)*22*this.tune.sunDisc,F.uBandAmt.value=(1-o*.85)*(.25+.75*g)*ni(-11,-2,h),F.uMoonDir.value.copy(v),F.uMoon.value=p*Wn(1-o*1.05,0,1)*(1-c);let k=ni(3,22,h)*Wn((a.sun-.3)/.7,0,1)*(1-c);this.state.sunK=k,this.renderer.toneMappingExposure=(.5+.12*g)*(1-.5*c)*(1+.3*d)*(1-.3*k)*this.tune.exposure;let P=this.renderer.toneMappingExposure;this.state.exposure=P,this.state.fogColor.copy(this._lit.copy(w.hor).lerp(w.band,.2*F.uBandAmt.value));let C=Ng(this.state.fogColor,P,this._fogDisp);this.scene.fog.color.copy(this.state.fogColor),this.scene.fog.density=a.fog,this._c2.copy(C).lerp(this._c.setRGB(.93,.95,.97).multiplyScalar(.1+.9*u*(1-.6*c)),.3),yT(this._c2,P,this.state.mistColor);{let ht=ni(0,.6,this.mistDens)*(.35+.65*this.mistCover),_t=ni(.0012,.0075,a.fog)*.85,Ut=this.veil;Ut.uVeil.value.set(Math.max(ht,_t),Math.max(.05+.5*Math.pow(this.mistCover,1.5),_t>ht?.3:0)),Ut.uVeilCol.value.copy(this.state.mistColor)}let I=h<-2.5,N=this.state.lightDir.copy(I?m:f);I?(this.sun.intensity=.38*p*(1-.8*o)*(1-c)*this.tune.directLight,this.sun.color.copy(Fg)):(this.sun.intensity=3.4*ni(-2,9,h)*a.sun*(1+1.3*k)*this.tune.directLight,this.sun.color.copy(ET).lerp(wT,Wn(g*1.3,0,1))),e&&(this.sun.position.copy(e).addScaledVector(N,120),this.sun.target.position.copy(e)),this.hemi.color.copy(C).lerp(this._c.set("#6f8cd0"),d*.75).lerp(this._c.set("#c4d4ff"),l),this.hemi.groundColor.set("#3a4630").multiplyScalar(.25+.75*u),this.hemi.intensity=((.16+.45*u+.34*d)*(1-.4*o)*(1-.35*c)*(1-.45*k)+l*3.2)*this.tune.ambientLight,this.sky.position.copy(n),this.stars.position.copy(n),this.dome.position.copy(n),this.haze.position.set(n.x,0,n.z);let U=150+a.fog*1e5;this.haze.scale.y=U,this.haze.position.y=U/2-60,this.haze.material.uniforms.uColor.value.copy(this.state.fogColor),this.stars.material.opacity=d*(1-o*.95),this.stars.visible=this.stars.material.opacity>.01;let z=Wn(g*1.1,0,1)*(1-.92*c),W=this._lit.set("#ffffff").lerp(this._c2.set("#ff9d66"),z).multiplyScalar(2.4*u*this.tune.cloudBrightness);W.add(this._c2.set("#8fa6e0").multiplyScalar(.32*d*(1-o*.6)));let j=this._shade.copy(w.mid).multiplyScalar(.5).lerp(this._c2.copy(w.hor).multiplyScalar(.62),.45).lerp(this._c2.set("#a86a7a").multiplyScalar(1.05*u),z*.5);j.add(this._c2.set("#101b38").multiplyScalar(.3*d)),W.multiplyScalar(1-.8*c),this.cloudTime+=t;let it=this.cloudMat.uniforms;it.uTime.value=this.cloudTime,it.uCover.value=a.clouds,it.uSoft.value=Wn(o*.9+c*.3,0,1),it.uFlash.value=l,it.uDrift.value.copy(this.windDir).multiplyScalar(.003+.02*a.wind),it.uSunDir.value.copy(h>=-2?f:v),it.uLit.value.copy(W),it.uShade.value.copy(j);let B=this.state;B.elevation=h,B.dayF=u,B.night=d,B.warm=g,B.overcast=o,B.rain=a.rain,B.snow=a.snow,B.wet=a.wet,B.cover=a.cover,B.wind=a.wind,B.dark=c,B.flash=l,B.drift=Wn((a.wind-.5)*2.2,0,1)*(1-a.rain)*(1-a.snow);let Z=Wn(a.rain*.35+a.snow*.25+(a.fog>.003?.3:0),0,.5);B.lamps=Wn(Math.max(d,.7*(1-u))+Z*u+c*.7,0,1),B.moon=F.uMoon.value;let lt=ni(5e-4,.0065,a.fog);if(B.rays=(I?.22*F.uMoon.value*(1+lt):ni(-2.5,2.5,h)*(1-.55*o)*(1-c)*(.55+.45*g)*(1+1.3*lt))*this.tune.rays,B.rayDir.copy(I?v:f),B.rayCol.copy(I?Fg:this.sun.color),B.light=.14+.08*d+.86*u*(1-.3*o)*(1-.55*c)+l*.6,this.precip.update(t,n,B,this.renderer.domElement.height),this.envTimer-=t,this.envTimer<=0){let ht=[h.toFixed(1),Math.round(o*12),Math.round(c*12),Math.round(k*10)].join("|");(ht!==this.envKey||!this.envRT)&&(this.envKey=ht,this._captureEnv()),this.envTimer=.7}}setShadowSize(t){let e=this.sun.shadow;e.mapSize.x!==t&&(e.mapSize.set(t,t),e.map&&(e.map.dispose(),e.map=null))}_captureEnv(){let t=this.skyMat.uniforms,e=t.uDisc.value;t.uScale.value=2.1*(1-.5*(this.state.sunK||0)),t.uDisc.value=Math.min(e,4);let n=this.pmrem.fromScene(this.envScene,0,1,3e3);t.uScale.value=1,t.uGround.value.set(t.uHorizon.value.r*.13,t.uHorizon.value.g*.13,t.uHorizon.value.b*.12,1);let i=this.pmrem.fromScene(this.envScene,0,1,3e3);t.uGround.value.w=0,t.uDisc.value=e,this.envRT&&this.envRT.dispose(),this.carEnvRT&&this.carEnvRT.dispose(),this.envRT=n,this.carEnvRT=i,this.scene.environment=n.texture,this.onCarEnv&&this.onCarEnv(i.texture)}};var ms={name:"body",type:"MeshPhysicalMaterial",color:5526623,roughness:.364192,metalness:1,clearcoat:1,clearcoatRoughness:0,specularIntensity:1,specularColor:16777215,reflectivity:.49999999999999983,iridescence:0,iridescenceIOR:1.3,iridescenceThicknessRange:[100,400],envMapIntensity:1};var LT={drop:.19,forward:.16,hip:[-.39,.45,.28],foot:[-.48,.45,-.48],recline:.1},IT={color:789518,metalness:0,roughness:.3,envK:.6},kg=[{id:"mustang",name:"Mustang '67 Đen",file:"assets/models/mustang.glb",length:4.67,flip:!0,eye:[-.39,1.08,.3],doubleSide:!0,door:/^DriverDoor/,wheels:/^(Wheel|BrakeDisc)/,mats:{Interior:IT,BlackPolished:{roughness:.18},Paint:{color:1381913,metalness:0,roughness:.42,specularIntensity:0,clearcoat:1,clearcoatRoughness:.07,envK:.4},Wheel:{clearcoat:.25}},seatMesh:/^Cube\.?00[678]/,steerShift:-.09,lamps:{head:[.839,.661,-2.06],tail:[.44,.769,2.26]},seat:LT,steer:{c:[-.385,.883,-.155],n:[0,.338,.941],r:.153,grip:{radial:.025,depth:.065,align:!0}},steerMesh:/^(Torus\.?001|Cube\.?009)/},{id:"mazda-rx-vision",name:"Mazda RX Vision Sport",file:"assets/models/mazda-rx-vision.glb",length:4.8,flip:!0,wheels:/^WHEEL_(LF|LR|RF|RR)_/,eye:[.394,1.09,.45],seat:{hip:[.394,.34,.48],foot:[.49,.26,-.58],recline:.1},steer:{c:[.394,.795,.082],n:[0,.156,.9878],r:.18},steerMesh:/^MazdaSteering_/,lamps:{head:[.74,.57,-1.99],tail:[.7,.838,2.086]},mats:{body:{color:ms.color,metalness:ms.metalness,roughness:ms.roughness,clearcoat:ms.clearcoat,clearcoatRoughness:ms.clearcoatRoughness,specularIntensity:ms.specularIntensity,specularColor:ms.specularColor,envK:ms.envMapIntensity}}}],qn=[{id:"reed",name:"Đồng cỏ lau",icon:"🌾"},{id:"forest",name:"Đồi thông",icon:"🌲"},{id:"mountain",name:"Đường núi",icon:"⛰️"},{id:"meadow",name:"Đồi cỏ",icon:"🌿"},{id:"sea",name:"Biển",icon:"🌊"},{id:"city",name:"Phố",icon:"🏙️"}],nn=[{id:"clear",name:"Trời trong",icon:"☀️"},{id:"cloudy",name:"Nhiều mây",icon:"☁️"},{id:"windy",name:"Gió lớn",icon:"💨"},{id:"rain",name:"Mưa",icon:"🌧️"},{id:"storm",name:"Bão",icon:"⛈️"},{id:"snow",name:"Tuyết",icon:"❄️"},{id:"fog",name:"Sương mù",icon:"🌫️"},{id:"auto",name:"Tự động",icon:"🔄"}],bn=[{id:"sunrise",name:"Bình minh",icon:"🌅",hour:6.4},{id:"noon",name:"Ban ngày",icon:"🌤️",hour:12.5},{id:"sunset",name:"Hoàng hôn",icon:"🌇",hour:17.6},{id:"night",name:"Ban đêm",icon:"🌙",hour:22.5},{id:"auto",name:"Tự động",icon:"🕒",hour:null}],Ce=[{id:"chase",name:"Sau xe"},{id:"low",name:"Sát mặt đường"},{id:"side",name:"Bên hông"},{id:"cockpit",name:"Trong xe"},{id:"orbit",name:"Quay quanh"},{id:"drone",name:"Từ trên cao"}],Lo=[{id:"all",name:"Music + fx",icon:"🎵"},{id:"music",name:"Chỉ nhạc",icon:"🎶"},{id:"off",name:"Tắt tiếng",icon:"🔇"}],Vi=[1.4,1.8,2,2.8,3.5,4,5.6,8,11,16],Ug=Vi.indexOf(3.5),Ri=[{id:"low",name:"Low",ratio:.75,msaa:0,veg:.35,shadow:1024,refl:!1,dof:0,trees:0,view:1},{id:"good",name:"Good",ratio:1.5,msaa:4,veg:.85,shadow:2048,refl:!0,dof:36,trees:35,view:1},{id:"ultra",name:"Ultra",ratio:2,msaa:4,veg:1,shadow:4096,refl:!0,dof:48,trees:200,view:2}],kd=Ri.findIndex(r=>r.id==="good");var Ud=512,mi=288,Wl=[.23*.85,.13*.85],Io=Wl,Og=.014*.85;function zg(r,t){let[e,n,i]=t.eye,s=new ul(new T(0,n,i),new T(0,-.42,-1).normalize(),.05,2.5);r.updateMatrixWorld(!0);let a=s.intersectObject(r,!0).find(l=>!(l.object.material&&l.object.material.transparent)),o=a?a.point.clone():new T(0,n-.3,i-.7);o.y+=Io[1]/2+.03,o.z+=.07;let c=new Vt().setFromAxisAngle(new T(1,0,0),-.22);return{pos:o,quat:c}}var Vl=class{constructor(){this.canvas=document.createElement("canvas"),this.canvas.width=Ud,this.canvas.height=mi,this.ctx=this.canvas.getContext("2d"),this.tex=new Pn(this.canvas),this.tex.colorSpace=ue,this.tex.anisotropy=4,this.group=new Pt;let t=new kt(new ti(Io[0],Io[1]),new Je({map:this.tex,color:new et(2.2,2.2,2.2)})),e=new kt(new re(Io[0]+Og,Io[1]+Og,.012*.85),new Wt({color:789776,roughness:.35,metalness:.3}));e.position.z=-.0065,this.group.add(e,t),this.light=new zi(16762506,1.1,2.4,2),this.light.position.set(0,.03,.08),this.group.add(this.light),this.t=0,this.timer=0,this.speed=0,this.clock="",this._draw()}place(t){if(!t){this.group.visible=!1;return}this.group.visible=!0,this.group.position.copy(t.pos),this.group.quaternion.copy(t.quat)}update(t,e,n){this.t+=t,this.timer-=t,this.light.intensity=1.1*(.9+.1*Math.sin(this.t*.7)),!(this.timer>0)&&(this.timer=1,this.speed=e,this.clock=n,this._draw())}_draw(){let t=this.ctx,e=this.t,n=t.createLinearGradient(0,0,0,mi);n.addColorStop(0,"#1d140d"),n.addColorStop(1,"#0d0906"),t.fillStyle=n,t.fillRect(0,0,Ud,mi),t.save(),t.beginPath(),t.rect(10,34,300,mi-44),t.clip(),t.fillStyle="#231810",t.fillRect(10,34,300,mi-44),t.strokeStyle="rgba(255,190,130,0.15)",t.lineWidth=2;let i=e*9%40;for(let c=-40;c<340;c+=40)t.beginPath(),t.moveTo(c+i*.3,34),t.lineTo(c-30+i*.3,mi),t.stroke();for(let c=34;c<mi+40;c+=40)t.beginPath(),t.moveTo(10,c+i),t.lineTo(310,c+i-12),t.stroke();t.strokeStyle="#ffa940",t.lineWidth=7,t.lineCap="round",t.beginPath();for(let c=0;c<=24;c++){let l=mi-10-c*11,h=160+Math.sin(c*.35+e*.15)*46;c===0?t.moveTo(h,l):t.lineTo(h,l)}t.stroke(),t.fillStyle="#ffffff",t.beginPath(),t.moveTo(160,mi-74),t.lineTo(148,mi-46),t.lineTo(160,mi-54),t.lineTo(172,mi-46),t.closePath(),t.fill(),t.restore(),t.fillStyle="#ffe4c8",t.font="600 20px system-ui, sans-serif",t.textBaseline="middle",t.fillText(this.clock||"--:--",14,18),t.textAlign="right",t.fillText(Math.round(this.speed)+" km/h",Ud-14,18),t.textAlign="left";let s=326,a=t.createLinearGradient(s,44,s+70,114);a.addColorStop(0,"#ff8a5c"),a.addColorStop(1,"#7b5cff"),t.fillStyle=a,t.fillRect(s,44,70,70),t.fillStyle="#ffffff",t.font="600 19px system-ui, sans-serif",t.fillText("Lo-fi Chill",s,136),t.fillStyle="#c9a27e",t.font="16px system-ui, sans-serif",t.fillText("Chill Drive Radio",s,160);let o=e/180%1;t.fillStyle="#3d2b1d",t.fillRect(s,184,170,5),t.fillStyle="#ffa940",t.fillRect(s,184,170*o,5),t.fillStyle="#ffb760";for(let c=0;c<12;c++){let l=8+26*Math.abs(Math.sin(e*2.3+c*1.7)*Math.sin(e*.9+c));t.fillRect(s+c*14,250-l,8,l)}this.tex.needsUpdate=!0}};var ql=(r,t,e)=>Math.min(e,Math.max(t,r));function DT(r){let t=Ne.smoothstep(r.speed,.2,2),e=Math.atan((r.curvature||0)*2.7)*14*t,n=-Math.atan2(r.latVel||0,Math.max(r.speed,4))*3;return ql(e+n,-.55,.55)}var Xl=class{constructor(t){this.root=new Pt,this.tilt=new Pt,this.root.add(this.tilt),t.add(this.root),this.loader=new Vs,this.loader.setMeshoptDecoder(Aa),this.onProgress=null,this.prepare=null,this.envMap=null,this.list=[],this.cache=new Map,this.current=null,this.token=0,this.time=0,this.pitch=0,this.roll=0,this.lastSpeed=0,this.dim={length:4.5,width:1.9,height:1.3},this.lights=new Pt,this.root.add(this.lights);let e=this.softTex=bl(),n=i=>{let s=new Cn(new wn({map:e,color:i,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:Xe,fog:!1}));return s.renderOrder=6,this.lights.add(s),s};this.headlights=pr(this.lights,e),this.spots=this.headlights.spots,this.headGlow=this.headlights.glows,this.tailGlow=[n(16720914),n(16720914)],this.viewer=null,this._gv=new T,this._gb=new T,this.lampLevel=0,this.brake=0,this.contact=new kt(new ti(1,1).rotateX(-Math.PI/2),new Je({alphaMap:FT(),color:0,transparent:!0,opacity:.72,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-6,fog:!1})),this.contact.position.y=.06,this.contact.renderOrder=1,this.root.add(this.contact),this.cabin=new zi(16767148,0,2.6,2),this.tilt.add(this.cabin),this.cabinLevel=0}async probe(){let t=[];for(let e of kg){if(!e.optional){t.push(e);continue}try{let n=await fetch(e.file,{method:"HEAD"}),i=n.headers.get("content-type")||"";n.ok&&!i.includes("text/html")&&t.push(e)}catch{}}return this.list=t,t}async select(t){let e=this.list[t],n=++this.token,i=this.cache.get(e.id);if(i||(i=await this._load(e,s=>{n===this.token&&this.onProgress?.(s)}),this.cache.set(e.id,i)),n!==this.token)return!1;if(this.prepare&&!i.ready){try{await this.prepare(i.group)}catch(s){console.warn("prepare",s)}if(i.ready=!0,n!==this.token)return!1}return this.current&&this.tilt.remove(this.current.group),this.tilt.add(i.group),this.current=i,this.dim=i.dim,this.shield=i.shield,this.rearShield=i.rearShield,this._placeLights(i.dim),!0}async _load(t,e){let i=(await this.loader.loadAsync(t.file,M=>{e&&M.total&&e(M.loaded/M.total)})).scene,s=new Pt;s.add(i);let a=new Pt;if(a.add(s),t.hide){let M=[];i.traverse(y=>{t.hide.test(y.name||"")&&M.push(y)}),M.forEach(y=>y.removeFromParent())}i.rotation.x=t.rotX||0,s.updateMatrixWorld(!0);let o=new je().setFromObject(s,!0),c=o.getSize(new T);c.x>c.z*1.02&&(i.rotation.y+=Math.PI/2),t.flip&&(i.rotation.y+=Math.PI),s.updateMatrixWorld(!0),o.setFromObject(s,!0),c=o.getSize(new T),s.scale.setScalar(t.length/c.z),s.updateMatrixWorld(!0),o.setFromObject(s,!0);let l=o.getCenter(new T);s.position.set(-l.x,-o.min.y,-l.z),a.updateMatrixWorld(!0),o.setFromObject(a,!0);let h={length:o.max.z-o.min.z,width:o.max.x-o.min.x,height:o.max.y-o.min.y};if(h.eye=t.eye||[-h.width*.2,Math.min(h.height*.8,1.15),0],h.lamps=t.lamps||ya(h),h.seat=t.seat||null,(t.seat?.drop||t.seat?.forward)&&t.seatMesh){a.updateMatrixWorld(!0);let M=new T;i.traverse(y=>{!y.isMesh||!t.seatMesh.test(y.name)||(y.getWorldPosition(M),M.y-=t.seat.drop||0,M.z-=t.seat.forward||0,y.position.copy(y.parent.worldToLocal(M)))}),a.updateMatrixWorld(!0)}t.basicMetal&&i.traverse(M=>{if(!M.isMesh||Array.isArray(M.material))return;let y=M.material;y.transmission>0||y.transparent&&y.opacity<.9||(M.material=new Wt({name:y.name,color:y.color,map:y.map,side:y.side,...t.basicMetal}),y.dispose())});let f=[],u=[];i.traverse(M=>{if(!M.isMesh)return;t.steerMesh&&t.steerMesh.test(M.name)&&(M.material=Gg()),t.seatMesh&&t.seatMesh.test(M.name)&&(M.material=Gg(5912608,.52));let y=Array.isArray(M.material)?M.material:[M.material],w=!1;for(let L of y){if(L.transmission>0&&(L.transmission=0,L.transparent=!0,L.opacity=.32,L.depthWrite=!1,w=!0),L.transparent&&L.opacity<.9&&(w=!0),w&&!L.userData.glass&&NT(L),t.doubleSide&&!L.transparent&&(L.side=me),t.mats&&t.mats[L.name])for(let[E,A]of Object.entries(t.mats[L.name]))E==="envK"?L.userData.envK=A:L[E]?.isColor?L[E].set(A):L[E]=A;/tail|brake|emissivered|rear.?light/i.test(L.name)&&L.emissive&&(L.emissive.set(16718346),f.push(L)),this._env(L),de(L)}M.castShadow=!w,M.receiveShadow=!0,w&&u.push(M)});let d=t.wheels?this._wheels(a,t,h):[],g=t.door?this._door(a,t):null;a.updateMatrixWorld(!0);let v=Bg(u,h),m=Bg(u,h,!0),p=HT(a,i,v),x=zg(a,h),b=t.steer;if(b&&t.steerShift){let M=new T(...b.n),y=new T,w=[];i.traverse(L=>{t.steerMesh.test(L.name)&&L.isMesh&&w.push(L)});for(let L of w)L.getWorldPosition(y).addScaledVector(M,-t.steerShift),L.parent.worldToLocal(y),L.position.copy(y);b={...b,c:new T(...b.c).addScaledVector(M,-t.steerShift).toArray()}}let _=null;if(b&&t.steerMesh){let M=[];i.traverse(y=>{y.isMesh&&t.steerMesh.test(y.name)&&M.push(y)}),_=new Pt,_.position.fromArray(b.c),a.add(_),a.updateMatrixWorld(!0);for(let y of M)_.attach(y)}return{def:t,group:a,dim:h,wheels:d,door:g,tailMats:f,wipers:p,shield:v,rearShield:m,screen:x,steer:b,steerPivot:_,anim:null}}_env(t){t.envMap=this.envMap,t.envMapIntensity=(this.envMap?1:.5)*(t.userData.envK??1)}setEnvMap(t){this.envMap=t;for(let e of this.cache.values())e.group.traverse(n=>{if(n.isMesh)for(let i of Array.isArray(n.material)?n.material:[n.material])this._env(i)})}_door(t,e){let n=[];if(t.traverse(a=>{if(!(a===t||!e.door.test(a.name||""))){for(let o=a.parent;o&&o!==t;o=o.parent)if(e.door.test(o.name||""))return;n.push(a)}}),!n.length)return null;t.updateMatrixWorld(!0);let i=new je;for(let a of n)i.expandByObject(a,!0);let s=new Ie;s.position.set(i.min.x+.04,0,i.min.z+.06),t.add(s),t.updateMatrixWorld(!0);for(let a of n)s.attach(a);return{pivot:s,amount:0}}setDoor(t){let e=this.current?.door;if(!e)return;e.amount=t;let n=t*t*(3-2*t);e.pivot.rotation.y=-1.05*n}frontWheel(t){let e=this.current,n=null;for(let s of e?.wheels||[])(!n||s.pivot.position.z<n.pivot.position.z)&&(n=s);let i=this.dim;return n?t.set(-i.width/2+.12,n.pivot.position.y,n.pivot.position.z):t.set(-i.width/2,.33,-i.length*.32)}_wheels(t,e,n){let i=[];t.traverse(a=>{if(!(a===t||!e.wheels.test(a.name||""))){for(let o=a.parent;o&&o!==t;o=o.parent)if(e.wheels.test(o.name||""))return;i.push(a)}});let s=[];for(let a of i){let o=new je().setFromObject(a,!0);if(o.isEmpty())continue;let c=o.getSize(new T),l=o.getCenter(new T);if(!(Math.abs(c.y-c.z)<.28*Math.max(c.y,c.z)&&c.z<n.length*.35&&c.y<n.height*.95&&c.y>n.height*.12&&l.y<n.height*.5))continue;let u=new Ie;u.position.set(l.x,o.max.y-c.z/2,l.z),t.add(u),t.updateMatrixWorld(!0),u.attach(a),s.push({pivot:u,radius:c.z/2})}return s}_placeLights(t){mr(this.headlights,t);let[e,n,i]=(t.lamps||ya(t)).tail;this.tailGlow.forEach((a,o)=>a.position.set(o?e:-e,n,i+.03)),this.contact.scale.set(t.width*1.12,1,t.length*1.06);let s=this.current?.screen;s?this.cabin.position.copy(s.pos).add(new T(0,.02,.12)):this.cabin.position.set(t.eye[0]*.5,t.eye[1]-.2,t.eye[2]-.6)}setLights(t){this.lampLevel=t}_face(t,e){return this.viewer?(t.getWorldPosition(this._gv),this._gv.subVectors(this.viewer.position,this._gv).normalize(),this._gb.set(0,0,e).transformDirection(this.root.matrixWorld),Ne.smoothstep(this._gv.dot(this._gb),-.05,.35)):1}setWiper(t){if(!(!this.current||t===this.current.wiperTh)){this.current.wiperTh=t;for(let e of this.current.wipers)e(t)}}update(t,e){this.time+=t,this.root.position.copy(e.pos),this.root.rotation.set(e.pitch||0,e.yaw,0,"YXZ");let n=(e.speed-this.lastSpeed)/Math.max(t,.001);this.brakeAcc=n,this.lastSpeed=e.speed;let i=1-Math.exp(-t*4);this.pitch+=(ql(n*.004,-.04,.04)-this.pitch)*i,this.roll+=(ql(-e.latVel*.012,-.05,.05)-this.roll)*i;let s=ql(e.speed/20,0,1);this.tilt.rotation.set(this.pitch,0,this.roll);let a=1-(this.calm||0);this.tilt.position.y=(.005*Math.sin(this.time*7.3)+.004*Math.sin(this.time*12.1))*s*a;let o=(e.rough||0)*s*a;if(o>.001&&(this.tilt.position.y+=o*(.014*Math.sin(this.time*19.3)+.01*Math.sin(this.time*31.7+1.1)),this.tilt.rotation.z+=o*(.006*Math.sin(this.time*13.1)+.004*Math.sin(this.time*23.9)),this.tilt.rotation.x+=o*.004*Math.sin(this.time*17.7+.4)),this.current){let u=DT(e);this.steerAngle=(this.steerAngle||0)+(u-(this.steerAngle||0))*(1-Math.exp(-t*8)),this.current.steerPivot&&this.current.steerPivot.quaternion.setFromAxisAngle(new T(...this.current.steer.n).normalize(),this.steerAngle);for(let d of this.current.wheels)d.pivot.rotation.x-=e.speed*t/d.radius}let c=this.lampLevel;ks(this.headlights,this.root,this.viewer,c);let l=this.brakeAcc||0;this.brake+=((l<-1.2?1:0)-this.brake)*(1-Math.exp(-t*8));let h=.3+.7*c+.6*this.brake,f=this._face(this.tailGlow[0],1);this.tailGlow.forEach(u=>{u.material.opacity=Math.min(.8,.45*h)*f;let d=2+1.3*h;u.scale.set(d*1.35,d*.85,1),u.visible=f>.01});for(let u of this.current?.tailMats||[])u.emissiveIntensity=.8+2.6*h;this.cabin.intensity=this.cabinLevel}};function FT(){let r=document.createElement("canvas");r.width=128,r.height=256;let t=r.getContext("2d");t.filter="blur(14px)",t.fillStyle="#fff",t.beginPath(),t.roundRect?t.roundRect(26,30,76,196,26):t.rect(26,30,76,196),t.fill(),t.filter="blur(6px)",t.globalAlpha=.5,t.fillRect(36,44,56,168);let e=new Pn(r);return e.colorSpace=Rn,e}function Bg(r,t,e=!1){let[n,i,s]=t.eye,a=new T(n,i,s),o=new T,c=new T,l=new T,h=new T,f=new T,u=new T,d=new T,g=[],v=0,m=e?r.filter(M=>!/light|lamp/i.test(M.name)&&/windscreen.*rear|rear.*windscreen|rear.*window|back.*glass/i.test(M.name)):[];for(let M of m.length?m:r){let y=M.geometry.attributes.position,w=M.geometry.index,L=(w?w.count:y.count)/3;for(let E=0;E<L;E++){let A=w?w.getX(E*3):E*3,D=w?w.getX(E*3+1):E*3+1,F=w?w.getX(E*3+2):E*3+2;if(o.fromBufferAttribute(y,A).applyMatrix4(M.matrixWorld),c.fromBufferAttribute(y,D).applyMatrix4(M.matrixWorld),l.fromBufferAttribute(y,F).applyMatrix4(M.matrixWorld),f.copy(o).add(c).add(l).multiplyScalar(1/3),!m.length&&((e?f.z<s+.35:f.z>s-.25)||f.y<i-.3))continue;h.subVectors(c,o).cross(l.clone().sub(o));let k=h.length()/2;k<1e-7||(h.normalize(),h.dot(a.clone().sub(f))<0&&h.negate(),!(!m.length&&(Math.abs(h.x)>.5||(e?h.z>-.25:h.z<.25||h.y>-.2)))&&(u.addScaledVector(h,k),d.addScaledVector(f,k),v+=k,g.push(o.clone(),c.clone(),l.clone())))}}if(e&&v<.1)return null;let p={rear:e,center:new T,normal:new T,right:new T,up:new T,bounds:[0,0,0,0]};if(v<.1?(p.center.set(0,i+.1,s-.62),p.normal.set(0,-.6,.8),p.bounds=[-t.width*.38,t.width*.38,-.3,.3]):(p.center.copy(d).multiplyScalar(1/v),p.normal.copy(u).normalize()),p.right.set(1,0,0).addScaledVector(p.normal,-p.normal.x).normalize(),p.up.crossVectors(p.normal,p.right),p.up.y<0&&p.up.negate(),e)return p.geometry=new Tt().setFromPoints(g),p.geometry.setAttribute("glassUV",new mt(g.flatMap(M=>{let y=M.clone().sub(p.center);return[y.dot(p.right),y.dot(p.up)]}),2)),p;if(g.length){let M=[1e9,-1e9,1e9,-1e9];for(let y of g){y.sub(p.center);let w=y.dot(p.right),L=y.dot(p.up);M[0]=Math.min(M[0],w),M[1]=Math.max(M[1],w),M[2]=Math.min(M[2],L),M[3]=Math.max(M[3],L)}p.bounds=M}let x=(p.bounds[1]-p.bounds[0])/2,b=(p.bounds[0]+p.bounds[1])/2,_=p.bounds[2]+.03;return p.wipers=[{u:b-x*.76,v:_,rest:0,sign:1,r0:x*.1,r1:x*.68},{u:b+x*.76,v:_,rest:Math.PI,sign:-1,r0:x*.1,r1:x*.68}],p.sweep=1.62,p}function HT(r,t,e){let n=[];t.traverse(a=>{/^WiperBladeArm\d*$/i.test(a.name)&&!a.isMesh&&n.push(a)});let i=[],s=e.normal;if(n.length){let a=[];for(let o of n){let c=[],l=[];if(o.children.forEach(F=>F.traverse(k=>{if(!k.isMesh)return;let P=k.geometry.attributes.position,C=F.isMesh?c:l;for(let I=0;I<P.count;I++)C.push(new T().fromBufferAttribute(P,I).applyMatrix4(k.matrixWorld))})),!c.length||!l.length)continue;let h=l.reduce((F,k)=>F.add(k),new T).multiplyScalar(1/l.length),f=c[0];for(let F of c)F.distanceToSquared(h)>f.distanceToSquared(h)&&(f=F);let u=c.filter(F=>F.distanceTo(f)<.03),d=u.reduce((F,k)=>F.add(k),new T).multiplyScalar(1/u.length),g=d.clone().sub(e.center),v=g.dot(e.right),m=g.dot(e.up),p=h.clone().sub(d),x=Math.atan2(p.dot(e.up),p.dot(e.right)),b=new at(Math.cos(x),Math.sin(x)),_=1e9,M=0;for(let F of l){let k=F.clone().sub(d),P=k.dot(e.right)*b.x+k.dot(e.up)*b.y;_=Math.min(_,P),M=Math.max(M,P)}let y=Math.cos(x)>=0?1:-1;o.updateMatrixWorld(!0);let w=o.matrixWorld.clone(),L=o.parent.matrixWorld.clone().invert();o.matrixAutoUpdate=!1;let E=new yt,A=new yt,D=new yt().makeTranslation(-d.x,-d.y,-d.z);E.makeTranslation(d.x,d.y,d.z),i.push(F=>{A.makeRotationAxis(s,y*F),o.matrix.copy(L).multiply(E).multiply(A).multiply(D).multiply(w),o.matrixWorldNeedsUpdate=!0}),a.push({u:v,v:m,rest:x,sign:y,r0:Math.max(0,_),r1:M})}if(a.length){for(a.sort((o,c)=>o.u-c.u);a.length<2;)a.push(a[0]);e.wipers=a.slice(0,2)}}if(!i.length){let a=new Wt({color:1315862,roughness:.55,metalness:.4}),o=new yt().makeBasis(e.right,e.up,s);for(let c of e.wipers){let l=new Pt;l.position.copy(e.center).addScaledVector(e.right,c.u).addScaledVector(e.up,c.v).addScaledVector(s,-.02),l.quaternion.setFromRotationMatrix(o);let h=new Pt;l.add(h);let f=new kt(new re(c.r1*.97,.008,.008),a);f.position.set(c.r1*.485,0,-.014);let u=new kt(new re(c.r1-c.r0,.012,.012),a);u.position.set((c.r0+c.r1)/2,0,-.004),h.add(f,u),h.rotation.z=c.rest,r.add(l),i.push(d=>{h.rotation.z=c.rest+c.sign*d})}}return i}var Od=new Map;function Gg(r=1249810,t=.58){let e=r+"|"+t;if(Od.has(e))return Od.get(e);let n=new Wt({name:"Leather",color:r,roughness:t,metalness:0});return n.onBeforeCompile=i=>{i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
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
        roughnessFactor = clamp(roughnessFactor + (lNoise(vLP * 330.0) - 0.5) * 0.25, 0.3, 1.0);`)},n.customProgramCacheKey=()=>"leather",Od.set(e,n),n}function NT(r){r.userData.glass=!0,r.metalness=0,r.roughness=Math.min(r.roughness,.04),r.depthWrite=!1,r.onBeforeCompile=t=>{t.fragmentShader=t.fragmentShader.replace("#include <opaque_fragment>",`#include <opaque_fragment>
      gl_FragColor.a = clamp(gl_FragColor.a + dot(reflectedLight.indirectSpecular + reflectedLight.directSpecular, vec3(0.3, 0.59, 0.11)) * 1.4, 0.0, 0.94);`)},r.customProgramCacheKey=()=>"glass-reflect"}var Ra=(r,t,e)=>Math.min(e,Math.max(t,r)),Yl=16,Kl=35,kT=(r,t,e)=>{let n=((t-r+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI;return r+n*e},Vg={chase:{distance:6.2,speedBack:1.4,cineBack:1.8,height:2.3,carHeight:.4,lookAhead:13,lookHeight:1.75,slopeLook:10,follow:5,lookFollow:7,near:.3,focal:16,aperture:3.5},low:{distance:4.2,height:.95,lookAhead:10,lookHeight:1,slopeLook:10,follow:5,lookFollow:7,near:.3,focal:24,aperture:3.5},side:{distance:23.2,height:4.35,lookHeight:.42,follow:9,lookFollow:12,near:.3,focal:24,aperture:1.8},cockpit:{eyeSide:0,eyeHeight:0,eyeForward:0,pitch:.24,lookDistance:30,follow:9,lookFollow:9,near:.04,focal:24,aperture:3.5},orbit:{radius:30,height:7.5,heightWave:3,waveRate:2,speed:.13,lookHeight:.8,follow:5,lookFollow:7,near:.3,focal:24,aperture:2.8},drone:{distance:15,height:13,lookAhead:6,lookHeight:.5,follow:3.5,lookFollow:7,near:.3,focal:24,aperture:3.5}},jl=class{constructor(t){this.camera=t,this.mode=0,this.yaw=0,this.orbit=.9,this.relP=new T,this.relL=new T,this.fov=60,this.first=!0,this.transition=null,this.cine=0,this.intro=-1,this._p=new T,this._l=new T,this._f=new T,this._r=new T,this._cp=new T,this._cl=new T,this._dl=new T,this._eye=new T,this.eyeAt=null,this.look={yaw:0,pitch:0,hold:!1,idle:0},this.sideSign=0,this.sidePref=0,this.sideDist=null,this.orbitR=null,this.tune=structuredClone(Vg),this.focal=this.focalS=this.focalEff=24,this.aperture=this.apertureS=3.5}zoomBy(t){this.focal=Ra(this.focal/t,Yl,Kl),this.tune[Ce[this.mode].id].focal=this.focal}fovFor(t){let e=Math.atan(18/t),n=this.camera.aspect||1.6;return(n>=1?2*Math.atan(Math.tan(e)/n):2*e)*180/Math.PI}lookBy(t,e){let n=this.look;n.yaw=Math.atan2(Math.sin(n.yaw-t),Math.cos(n.yaw-t)),n.pitch=Ra(n.pitch+e,-1.2,1.2)}get name(){return Ce[this.mode].name}resetTune(t){this.tune[t]=structuredClone(Vg[t]),this.setMode(this.mode)}startIntro(){this.intro=0,this.first=!0}setMode(t){let e=t%Ce.length;!this.first&&e!==this.mode&&(this.transition={elapsed:0,duration:2,fromP:this.relP.clone(),fromL:this.relL.clone(),fromFocal:this.focalS,fromAperture:this.apertureS,fromNear:this.camera.near}),this.mode=e,this.intro=-1,this.sideSign=0,this.look.yaw=this.look.pitch=0;let n=Ce[this.mode].id,i=this.tune[n];this.focal=i.focal,this.aperture=i.aperture,this.transition||(this.focalS=this.focal,this.apertureS=this.aperture,this.camera.near=i.near,this.camera.updateProjectionMatrix())}update(t,e){let n=Ce[this.mode].id,{pos:i,speed:s,dim:a}=e;this.yaw=this.first?e.yaw:kT(this.yaw,e.yaw,1-Math.exp(-t*3));let o=(P,C)=>C.set(-Math.sin(P),0,-Math.cos(P)),c=(P,C)=>C.set(Math.cos(P),0,-Math.sin(P)),l=o(this.yaw,this._f),h=new T(-Math.sin(e.yaw),0,-Math.cos(e.yaw)),f=c(e.yaw,this._r),u=this._p,d=this._l,g=5,v=7,m=!1,p=Ra(s/45,0,1),x=e.fx||0,b=Math.tan(e.pitch||0),_=this.cine,M=this.tune[n];switch(g=M.follow,v=M.lookFollow,n){case"chase":u.copy(i).addScaledVector(l,-(a.length*.5+M.distance+M.speedBack*x+M.cineBack*_)).setY(i.y+M.height+a.height*M.carHeight),d.copy(i).addScaledVector(l,M.lookAhead).setY(i.y+M.lookHeight+b*M.slopeLook);break;case"low":u.copy(i).addScaledVector(l,-(a.length*.5+M.distance)).setY(i.y+M.height),d.copy(i).addScaledVector(l,M.lookAhead).setY(i.y+M.lookHeight+b*M.slopeLook);break;case"side":{this.sideSign||(this.sideSign=this.sidePref||e.side||1),u.copy(i).addScaledVector(f,this.sideSign*(this.sideDist??M.distance)).setY(i.y+M.height),d.copy(i).setY(i.y+a.height*M.lookHeight);break}case"cockpit":{let[P,C,I]=a.eye;this.eyeAt&&this.eyeAt(this._eye)?u.copy(this._eye):u.copy(i).addScaledVector(f,P).addScaledVector(h,-I).setY(i.y+C-b*I),u.addScaledVector(f,M.eyeSide).addScaledVector(h,M.eyeForward),u.y+=M.eyeHeight;let N=this.cockpitPitch==null?M.pitch:this.cockpitPitch+M.pitch-.24;d.copy(u).addScaledVector(h,M.lookDistance).setY(u.y-M.lookDistance*Math.tan(N)+b*M.lookDistance),m=!0;break}case"orbit":this.orbit+=t*M.speed;{let P=this.orbitR??M.radius;u.set(i.x+Math.cos(this.orbit)*P,i.y+M.height+Math.sin(this.orbit*M.waveRate)*M.heightWave,i.z+Math.sin(this.orbit)*P)}d.copy(i).setY(i.y+M.lookHeight);break;case"drone":u.copy(i).addScaledVector(l,-M.distance).setY(i.y+M.height),d.copy(i).addScaledVector(l,M.lookAhead).setY(i.y+M.lookHeight);break}this.focalEff=this.focalS*(1-.04*p);let y=this.fovFor(this.focalEff),w=!1;if(this.intro>=0&&n==="chase"){this.intro+=t;let P=Math.min(1,this.intro/6.5),C=P*P*(3-2*P);if(P>=1)this.intro=-1;else{w=!0;let I=this.tune.chase,N=a.length*.5+I.distance+I.cineBack*_,U=.5+(Math.PI-.5)*C,z=I.distance+(N-I.distance)*C,W=i.y+.65+(I.height+a.height*I.carHeight-.65)*C,j=d.clone();u.copy(i).addScaledVector(h,Math.cos(U)*z).addScaledVector(f,(e.side||1)*Math.sin(U)*Math.min(z,3.4)).setY(W),d.copy(i).setY(i.y+.7).lerp(j,C),y=36+(y-36)*C}}else this.intro>=0&&(this.intro=-1);let L=u.sub(i),E=d.sub(i),A=!!this.transition&&!w;if(A){let P=this.transition,C=Ra((P.elapsed+=t)/P.duration,0,1),I=C*C*(3-2*C);this.relP.lerpVectors(P.fromP,L,I),this.relL.lerpVectors(P.fromL,E,I),this.focalS=Ne.lerp(P.fromFocal,this.focal,I),this.apertureS=Ne.lerp(P.fromAperture,this.aperture,I),this.camera.near=Ne.lerp(P.fromNear,M.near,I),C>=1&&(this.transition=null)}else{let P=1-Math.exp(-t*g),C=1-Math.exp(-t*v);m&&(P=C=1),(this.first||w)&&(P=C=1),this.relP.lerp(L,P),this.relL.lerp(E,C),this.focalS+=(this.focal-this.focalS)*(1-Math.exp(-t*8)),this.apertureS+=(this.aperture-this.apertureS)*(1-Math.exp(-t*8)),this.camera.near=M.near}this.focalEff=this.focalS*(1-.04*p),w||(y=this.fovFor(this.focalEff)),this.fov+=(y-this.fov)*(this.first||this.transition?1:1-Math.exp(-t*3)),this.first=!1;let D=this.look,F=this._cp.copy(this.relP),k=this._cl.copy(this.relL);if(Math.abs(D.yaw)>1e-4||Math.abs(D.pitch)>1e-4)if(m){let P=this._dl.copy(k).sub(F),C=P.length(),I=Math.atan2(P.x,P.z)-D.yaw,N=Ra(Math.atan2(P.y,Math.hypot(P.x,P.z))+D.pitch,-1.2,1.2);P.set(Math.sin(I)*Math.cos(N),Math.sin(N),Math.cos(I)*Math.cos(N)).multiplyScalar(C),k.copy(F).add(P)}else{let P=Math.cos(D.yaw),C=Math.sin(D.yaw);F.set(F.x*P+F.z*C,F.y,-F.x*C+F.z*P),k.set(k.x*P+k.z*C,k.y,-k.x*C+k.z*P);let I=Math.hypot(F.x,F.z),N=F.length(),U=Ra(Math.atan2(F.y,I)+D.pitch,.03,1.35),z=N*Math.cos(U)/Math.max(I,.001);F.set(F.x*z,N*Math.sin(U),F.z*z)}if(this.camera.position.copy(i).add(F),this.collide&&!m&&this.collide(i,this.camera.position,t),this.groundAt){let P=this.groundAt(this.camera.position.x,this.camera.position.z)+.6;this.camera.position.y<P&&(this.camera.position.y=P)}this._l.copy(i).add(k),this.camera.lookAt(this._l),(Math.abs(this.camera.fov-this.fov)>.01||A)&&(this.camera.fov=this.fov,this.camera.updateProjectionMatrix())}};var Jl=r=>440*Math.pow(2,(r-69)/12),xr=(r,t)=>r+Math.random()*(t-r),zd=r=>r[Math.floor(Math.random()*r.length)],Zl=(r,t,e)=>Math.min(e,Math.max(t,r)),Wg=[[{r:41,n:[53,57,60,64]},{r:40,n:[52,55,59,62]},{r:38,n:[50,53,57,60]},{r:36,n:[52,55,59,62]}],[{r:38,n:[50,53,57,60]},{r:43,n:[53,55,59,62]},{r:36,n:[52,55,59,62]},{r:45,n:[55,57,60,64]}],[{r:36,n:[52,55,59,62]},{r:45,n:[55,57,60,64]},{r:38,n:[50,53,57,60]},{r:43,n:[53,55,59,62]}],[{r:45,n:[55,57,60,64]},{r:38,n:[50,53,57,60]},{r:43,n:[53,55,59,62]},{r:36,n:[52,55,59,62]}]],qg=[[0,6,10],[0,7,10,14],[0,10],[0,3,8,11]],UT=[72,74,76,79,81,84],Ql=class{constructor(){this.ctx=null,this.mode=0,this.bpm=74,this.step=0,this.bar=0,this.prog=Wg[0],this.pattern=qg[0],this.lastMel=-99}async start(){if(this.ctx){await this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;this.master=e.createGain(),this.master.gain.value=0;let n=e.createDynamicsCompressor();n.threshold.value=-16,n.ratio.value=3,this.master.connect(n).connect(e.destination),this.musicGain=e.createGain();let i=e.createBiquadFilter();i.type="lowpass",i.frequency.value=4800,i.Q.value=.4,this.musicGain.connect(i).connect(this.master),this.pianoBus=e.createGain();let s=e.createBiquadFilter();s.type="lowpass",s.frequency.value=2400,this.pianoBus.connect(s).connect(this.musicGain),this.drumBus=e.createGain();let a=e.createBiquadFilter();a.type="lowpass",a.frequency.value=3400,this.drumBus.connect(a).connect(this.musicGain);let o=e.sampleRate*2.6,c=e.createBuffer(2,o,e.sampleRate);for(let g=0;g<2;g++){let v=c.getChannelData(g);for(let m=0;m<o;m++)v[m]=(Math.random()*2-1)*Math.pow(1-m/o,3.2)}this.reverb=e.createConvolver(),this.reverb.buffer=c;let l=e.createGain();l.gain.value=.38,this.reverbIn=e.createGain(),this.reverbIn.connect(this.reverb).connect(l).connect(this.musicGain),s.connect(this.reverbIn),this.echo=e.createDelay(2),this.echo.delayTime.value=60/this.bpm*.75;let h=e.createGain();h.gain.value=.34;let f=e.createBiquadFilter();f.type="lowpass",f.frequency.value=1800,this.echo.connect(f).connect(h).connect(this.echo),f.connect(this.musicGain),this.wow=e.createOscillator(),this.wow.frequency.value=.55,this.wowGain=e.createGain(),this.wowGain.gain.value=9,this.wow.connect(this.wowGain),this.wow.start();let u=e.createBuffer(1,e.sampleRate*2,e.sampleRate),d=u.getChannelData(0);for(let g=0;g<d.length;g++)d[g]=Math.random()*2-1;this.noise=u,this._vinyl(),this._ambient(),this.nextTime=e.currentTime+.15,this.timer=setInterval(()=>this._tick(),50),document.addEventListener("visibilitychange",()=>{document.hidden?e.suspend():this.mode!==2&&e.resume()}),this.setMode(this.mode)}setMode(t){if(this.mode=t,!this.ctx)return;let e=this.ctx.currentTime;this.master.gain.setTargetAtTime(t===2?0:.9,e,.4)}_src(t,e=!0){let n=this.ctx.createBufferSource();return n.buffer=t,n.loop=e,n.loopStart=Math.random(),n}_vinyl(){let t=this.ctx,e=t.sampleRate*4,n=t.createBuffer(1,e,t.sampleRate),i=n.getChannelData(0);for(let c=0;c<e;c++)i[c]=(Math.random()*2-1)*.012;for(let c=0;c<70;c++){let l=Math.floor(Math.random()*(e-10));i[l]+=xr(.25,.8)*(Math.random()<.5?-1:1),i[l+1]-=xr(.1,.4)}let s=t.createBufferSource();s.buffer=n,s.loop=!0;let a=t.createBiquadFilter();a.type="highpass",a.frequency.value=1300;let o=t.createGain();o.gain.value=.16,s.connect(a).connect(o).connect(this.musicGain),s.start()}_ambient(){let t=this.ctx;this.ambGain=t.createGain(),this.ambGain.gain.value=1,this.ambGain.connect(this.master),this.outLp=t.createBiquadFilter(),this.outLp.type="lowpass",this.outLp.frequency.value=2e4,this.outGain=t.createGain(),this.outGain.gain.value=1,this.outGain.connect(this.outLp).connect(this.ambGain);let e=(g,v,m)=>{let p=this._src(this.noise),x=t.createBiquadFilter();x.type=g,x.frequency.value=v,x.Q.value=m;let b=t.createGain();return b.gain.value=0,p.connect(x).connect(b).connect(this.outGain),p.start(),b};this.rainG=e("bandpass",2200,.5),this.windG=e("lowpass",420,.7),this.tireG=e("lowpass",750,.6);let n=t.createOscillator();n.frequency.value=.13,this.gustG=t.createGain(),this.gustG.gain.value=0,n.connect(this.gustG).connect(this.windG.gain),n.start(),this.engLp=t.createBiquadFilter(),this.engLp.type="lowpass",this.engLp.frequency.value=260,this.engLp.Q.value=1.2,this.engG=t.createGain(),this.engG.gain.value=0,this.eng=[t.createOscillator(),t.createOscillator(),t.createOscillator()],this.eng[0].type="sawtooth",this.eng[1].type="triangle",this.eng[2].type="square";let i=t.createGain();i.gain.value=.35,this.eng[0].connect(this.engLp),this.eng[1].connect(this.engLp),this.eng[2].connect(i).connect(this.engLp),this.eng.forEach(g=>{g.frequency.value=40,g.start()}),this.engLp.connect(this.engG).connect(this.ambGain);let s=this._src(this.noise);this.exBp=t.createBiquadFilter(),this.exBp.type="bandpass",this.exBp.Q.value=2.2,this.exBp.frequency.value=150,this.exG=t.createGain(),this.exG.gain.value=0,s.connect(this.exBp).connect(this.exG).connect(this.ambGain),s.start(),this.rpm=900,this.load=0,this._lastV=0,this._lastT=0;let a=t.sampleRate,o=a*4,c=t.createBuffer(1,o,a),l=c.getChannelData(0);for(let g=0;g<1400;g++){let v=Math.floor(Math.random()*o),m=.08+Math.random()*Math.random()*.5,p=1800+Math.random()*3800,x=a*(.0012+Math.random()*.0025),b=a*(.004+Math.random()*.008);for(let _=0;_<a*.03;_++)l[(v+_)%o]+=m*((Math.random()*2-1)*Math.exp(-_/x)+.5*Math.sin(6.2832*p*_/a)*Math.exp(-_/b))}let h=t.createBufferSource();h.buffer=c,h.loop=!0;let f=t.createBiquadFilter();f.type="highpass",f.frequency.value=700,this.glassG=t.createGain(),this.glassG.gain.value=0,h.connect(f).connect(this.glassG).connect(this.ambGain),h.start();let u=this._src(this.noise),d=t.createBiquadFilter();d.type="lowpass",d.frequency.value=900,this.roofG=t.createGain(),this.roofG.gain.value=0,u.connect(d).connect(this.roofG).connect(this.ambGain),u.start()}setAmbient({speed:t,rain:e,snow:n,wind:i=0,dark:s=0,fx:a=0,inCar:o=!1}){if(!this.ctx)return;let c=this.ctx.currentTime,l=.25,h=this.mode===0?1:0;this.ambGain.gain.setTargetAtTime(h,c,.4),this.outGain.gain.setTargetAtTime(o?.4:1,c,.3),this.outLp.frequency.setTargetAtTime(o?1600:2e4,c,.3),this.glassG.gain.setTargetAtTime(o?e*.08*(1+.6*s):0,c,.3),this.roofG.gain.setTargetAtTime(o?e*.02*(1+s):0,c,.3),this.rainG.gain.setTargetAtTime(e*.08*(1+.6*s),c,l),this.windG.gain.setTargetAtTime(.012+t*.0016+n*.05+i*i*.1+a*.085,c,l),this.gustG.gain.setTargetAtTime(i*i*.07,c,l),this.tireG.gain.setTargetAtTime(Math.min(t*.0011,.05)*(1+e),c,l);let f=Math.min(.2,Math.max(.001,c-this._lastT));this._lastT=c;let u=(t-this._lastV)/f;this._lastV=t,this.load+=(Math.max(0,Math.min(1,u/4))-this.load)*Math.min(1,f*3);let d=[400,240,165,125,100,82],g=2200+this.load*3600;this.gear??(this.gear=0),t*d[this.gear]>g&&this.gear<5?this.gear++:this.gear>0&&t*d[this.gear-1]<g*.8&&this.gear--;let v=Math.max(850,t*d[this.gear]);this.rpm+=(v-this.rpm)*Math.min(1,f*6);let m=Math.min(1,(this.rpm-850)/5450),p=this.rpm/15;this.eng[0].frequency.setTargetAtTime(p,c,.06),this.eng[1].frequency.setTargetAtTime(p*2,c,.06),this.eng[2].frequency.setTargetAtTime(p*.5,c,.06);let x=Math.min(1,t/50);this.engLp.frequency.setTargetAtTime(220+m*900+this.load*900+x*600,c,.08),this.engG.gain.setTargetAtTime(.02+m*.03+this.load*.035+x*.05,c,.1),this.exBp.frequency.setTargetAtTime(p*2,c,.06),this.exG.gain.setTargetAtTime((.01+x*.07)*(.4+.6*m)+this.load*.05,c,.1)}passDur(t){return Zl(2.8-t*.03,.8,2.6)}passBy(t,e=0,n=3){if(!this.ctx||this.mode!==0)return;let i=this.ctx,s=i.currentTime,a=this.passDur(t),o=s+a*.5,c=Zl(.12+t/45,.12,1)/(1+.12*Math.max(0,n-2)),l=i.createStereoPanner();l.pan.setValueAtTime(e*.4,s),l.pan.linearRampToValueAtTime(e,o),l.pan.linearRampToValueAtTime(e*.5,s+a),l.connect(this.outGain);let h=this._src(this.noise,!0),f=i.createBiquadFilter();f.type="bandpass",f.Q.value=.7,f.frequency.setValueAtTime(400+t*10,s),f.frequency.linearRampToValueAtTime(900+t*22,o),f.frequency.exponentialRampToValueAtTime(260+t*5,s+a);let u=i.createGain();u.gain.setValueAtTime(1e-4,s),u.gain.exponentialRampToValueAtTime(.16*c,o),u.gain.exponentialRampToValueAtTime(1e-4,s+a),h.connect(f).connect(u).connect(l),h.start(s),h.stop(s+a+.05);let d=i.createOscillator();d.type="sawtooth";let g=55+t*1.1,v=Math.min(.25,t/343);d.frequency.setValueAtTime(g*(1+v),s),d.frequency.setValueAtTime(g*(1+v),o-a*.08),d.frequency.exponentialRampToValueAtTime(g*(1-v),o+a*.12);let m=i.createBiquadFilter();m.type="lowpass",m.frequency.value=320+t*6;let p=i.createGain();p.gain.setValueAtTime(1e-4,s),p.gain.exponentialRampToValueAtTime(.07*c,o),p.gain.exponentialRampToValueAtTime(1e-4,s+a),d.connect(m).connect(p).connect(l),d.start(s),d.stop(s+a+.05)}horn(t=0,e=1){if(!this.ctx)return;let n=this.ctx,i=n.currentTime,s=n.createStereoPanner();s.pan.value=Math.max(-1,Math.min(1,t));let a=n.createBiquadFilter();a.type="lowpass",a.frequency.value=2400,a.connect(s).connect(this.outGain);for(let[o,c]of[[0,.16],[.24,.22]]){let l=n.createGain(),h=i+o;l.gain.setValueAtTime(1e-4,h),l.gain.exponentialRampToValueAtTime(.09*e,h+.015),l.gain.setValueAtTime(.09*e,h+c-.03),l.gain.exponentialRampToValueAtTime(1e-4,h+c),l.connect(a);for(let f of[415,498]){let u=n.createOscillator();u.type="square",u.frequency.value=f,u.connect(l),u.start(h),u.stop(h+c+.02)}}}setSiren(t,e,n=0){if(!this.ctx)return;let i=this.ctx,s=i.currentTime;this.sirens||(this.sirens={});let a=this.sirens[t];if(!a){if(e<=0)return;let c=i.createOscillator();c.type="square";let l=i.createOscillator();l.type="sine";let h=i.createBiquadFilter();h.type="lowpass",h.frequency.value=2600;let f=i.createGain();f.gain.value=0;let u=i.createStereoPanner(),d=i.createGain();d.gain.value=.6,c.connect(h),l.connect(d).connect(h),h.connect(f).connect(u).connect(this.outGain),c.start(),l.start(),a=this.sirens[t]={o:c,o2:l,g:f,p:u}}let o;t==="police"?o=650+700*(.5-.5*Math.cos(s*Math.PI/2)):o=Math.floor(s/.65)%2?770:960,a.o.frequency.setTargetAtTime(o,s,t==="police"?.05:.008),a.o2.frequency.setTargetAtTime(o*2.01,s,t==="police"?.05:.008),a.g.gain.setTargetAtTime(.11*Math.max(0,Math.min(1,e)),s,.25),a.p.pan.setTargetAtTime(Math.max(-1,Math.min(1,n)),s,.1)}setWater(t,e=0){if(!this.ctx)return;let n=this.ctx,i=n.currentTime;if(!this.waterG){if(t<=.001)return;let s=n.sampleRate,a=s*4,o=n.createBuffer(1,a,s),c=o.getChannelData(0),l=0;for(let u=0;u<a;u++)l=l*.985+(Math.random()*2-1)*.06,c[u]=l*.55+(Math.random()*2-1)*.045;for(let u=0;u<1500;u++){let d=Math.floor(Math.random()*a),g=380*Math.pow(5,Math.random()),v=s*(.003+Math.random()*.009),m=.05+Math.random()*Math.random()*.22,p=0;for(let x=0;x<v*3;x++)p+=6.2832*g*(1+.7*x/v)/s,c[(d+x)%a]+=m*Math.sin(p)*Math.exp(-x/v)}for(let u=0;u<2e3;u++){let d=u/2e3;c[u]=c[u]*d+c[a-2e3+u]*(1-d)}let h=n.createBufferSource();h.buffer=o,h.loop=!0,h.loopEnd=(a-2e3)/s;let f=n.createBiquadFilter();f.type="highpass",f.frequency.value=110,this.waterPan=n.createStereoPanner(),this.waterG=n.createGain(),this.waterG.gain.value=0,h.connect(f).connect(this.waterG).connect(this.waterPan).connect(this.outGain),h.start()}this.waterG.gain.setTargetAtTime(Zl(t,0,1)*.3,i,.35),this.waterPan.pan.setTargetAtTime(Zl(e,-1,1),i,.25)}splash(t=1){if(!this.ctx||this.mode!==0)return;let e=this.ctx,n=e.currentTime,i=.35+.45*Math.min(1,t),s=this._src(this.noise,!0),a=e.createBiquadFilter();a.type="bandpass",a.Q.value=.6,a.frequency.setValueAtTime(900+900*t,n),a.frequency.exponentialRampToValueAtTime(500,n+i);let o=e.createGain();o.gain.setValueAtTime(1e-4,n),o.gain.exponentialRampToValueAtTime(.22*t,n+.03),o.gain.exponentialRampToValueAtTime(1e-4,n+i),s.connect(a).connect(o).connect(this.outGain),s.start(n),s.stop(n+i+.05)}thunder(t=1.5,e=1){if(!this.ctx||this.mode!==0)return;let n=this.ctx,i=n.currentTime+t,s=n.sampleRate*5,a=n.createBuffer(1,s,n.sampleRate),o=a.getChannelData(0),c=0;for(let u=0;u<s;u++)c=(c+(Math.random()*2-1)*.06)/1.02,o[u]=c*3.5;let l=n.createBufferSource();l.buffer=a;let h=n.createBiquadFilter();h.type="lowpass",h.frequency.setValueAtTime(900,i),h.frequency.exponentialRampToValueAtTime(110,i+4);let f=n.createGain();f.gain.setValueAtTime(1e-4,i),f.gain.linearRampToValueAtTime(.9*e,i+.12),f.gain.setTargetAtTime(1e-4,i+.3,1.1),l.connect(h).connect(f).connect(this.outGain),l.start(i),l.stop(i+5),this._noiseHit(i,.25,"bandpass",700,.3*e,this.outGain)}_tick(){let t=this.ctx;if(!t||t.state!=="running")return;let e=60/this.bpm/4;for(;this.nextTime<t.currentTime+.3;){let n=this.step%2?e*.2:0;this._step(this.step,this.nextTime+n),this.nextTime+=e,++this.step===16&&(this.step=0,this.bar++)}}_step(t,e){t===0&&this.bar%4===0&&(this.prog=zd(Wg),this.pattern=zd(qg));let n=this.prog[this.bar%4];if(this.pattern.includes(t)){let i=t===0?1:xr(.55,.8);n.n.forEach((s,a)=>this._epiano(s,e+a*.014+xr(0,.008),i,t===0?2.4:1.2))}t===0&&this._bass(n.r,e,1.7),(t===10||t===14&&Math.random()<.4)&&this._bass(n.r+(Math.random()<.5?0:7),e,.8),(t===0||t===10||t===7&&Math.random()<.3)&&this._kick(e),(t===4||t===12)&&this._snare(e),t%2===0&&this._hat(e,t%4===2?.8:.5,t===14&&Math.random()<.25),t%2===0&&this.bar-this.lastMel>0&&Math.random()<.16&&(this._pluck(zd(UT),e,xr(.5,.9)),this.lastMel=this.bar+(Math.random()<.5?0:-1))}_osc(t,e,n,i,s=0){let a=this.ctx.createOscillator();return a.type=t,a.frequency.value=e,a.detune.value=s,this.wowGain.connect(a.detune),a.start(n),a.stop(n+i),a}_epiano(t,e,n,i){let s=this.ctx,a=Jl(t),o=s.createGain();o.gain.setValueAtTime(1e-4,e),o.gain.linearRampToValueAtTime(n*.075,e+.012),o.gain.exponentialRampToValueAtTime(n*.03,e+.4),o.gain.exponentialRampToValueAtTime(1e-4,e+i),this._osc("sine",a,e,i+.1).connect(o),this._osc("triangle",a,e,i+.1,xr(3,8)).connect(o);let c=s.createGain();c.gain.setValueAtTime(n*.022,e),c.gain.exponentialRampToValueAtTime(1e-4,e+.2),this._osc("sine",a*4,e,.3).connect(c).connect(this.pianoBus),o.connect(this.pianoBus)}_bass(t,e,n){let i=this.ctx.createGain();i.gain.setValueAtTime(1e-4,e),i.gain.linearRampToValueAtTime(.2,e+.03),i.gain.exponentialRampToValueAtTime(1e-4,e+n);let s=this.ctx.createBiquadFilter();s.type="lowpass",s.frequency.value=380,this._osc("sine",Jl(t),e,n+.1).connect(i),this._osc("triangle",Jl(t),e,n+.1).connect(i),i.connect(s).connect(this.musicGain)}_pluck(t,e,n){let i=this.ctx.createGain();i.gain.setValueAtTime(1e-4,e),i.gain.linearRampToValueAtTime(n*.06,e+.01),i.gain.exponentialRampToValueAtTime(1e-4,e+1.1);let s=this.ctx.createBiquadFilter();s.type="lowpass",s.frequency.value=2200,this._osc("triangle",Jl(t),e,1.2).connect(i),i.connect(s),s.connect(this.pianoBus);let a=this.ctx.createGain();a.gain.value=.6,s.connect(a).connect(this.echo)}_kick(t){let e=this.ctx.createOscillator(),n=this.ctx.createGain();e.frequency.setValueAtTime(130,t),e.frequency.exponentialRampToValueAtTime(42,t+.14),n.gain.setValueAtTime(.5,t),n.gain.exponentialRampToValueAtTime(1e-4,t+.32),e.connect(n).connect(this.drumBus),e.start(t),e.stop(t+.35)}_noiseHit(t,e,n,i,s,a=this.drumBus){let o=this._src(this.noise,!1),c=this.ctx.createBiquadFilter();c.type=n,c.frequency.value=i;let l=this.ctx.createGain();l.gain.setValueAtTime(s,t),l.gain.exponentialRampToValueAtTime(1e-4,t+e),o.connect(c).connect(l).connect(a),o.start(t,Math.random()),o.stop(t+e+.02)}_snare(t){this._noiseHit(t,.16,"bandpass",1900,.28);let e=this.ctx.createOscillator(),n=this.ctx.createGain();e.frequency.value=185,n.gain.setValueAtTime(.16,t),n.gain.exponentialRampToValueAtTime(1e-4,t+.1),e.connect(n).connect(this.drumBus),e.start(t),e.stop(t+.12)}_hat(t,e,n){this._noiseHit(t,n?.2:.045,"highpass",7500,.12*e*xr(.7,1))}};var $l=27,OT=12,Bd=2;function th(r){let t=r>>>0;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function zT(){let r=th(3),t=[],e=[],n=[],i=[],s=new et(6971440),a=new et(11115094),o=new et(14733202),c=(f,u,d,g,v)=>{t.push(f,u,d),n.push(g.r,g.g,g.b),e.push(v[0],v[1],v[2])},l=5;for(let f=0;f<l;f++){let u=f/l*Math.PI*2+(r()-.5)*.7,d=Math.cos(u),g=Math.sin(u),v=-g,m=d,p=1.05+r()*.6,x=.35+r()*.45,b=new T(d*.35,1,g*.35).normalize().toArray(),_=[{c:[d*.03,0,g*.03],hw:.034,col:s},{c:[d*x*.4,p*.6,g*x*.4],hw:.03,col:a}],M=t.length/3;for(let y of _)c(y.c[0]-v*y.hw,y.c[1],y.c[2]-m*y.hw,y.col,b),c(y.c[0]+v*y.hw,y.c[1],y.c[2]+m*y.hw,y.col,b);c(d*x,p*.92,g*x,o,b),i.push(M,M+1,M+2,M+1,M+3,M+2,M+2,M+3,M+4)}let h=new Tt;return h.setAttribute("position",new mt(t,3)),h.setAttribute("normal",new mt(e,3)),h.setAttribute("color",new mt(n,3)),h.setIndex(i),h}function BT(){let r=th(11),t=[],e=[],n=[],i=[],s=new et(3955232),a=new et(7312436),o=new et(12176482),c=(f,u,d,g,v)=>{t.push(f,u,d),n.push(g.r,g.g,g.b),e.push(v[0],v[1],v[2])},l=5;for(let f=0;f<l;f++){let u=f/l*Math.PI*2+(r()-.5)*.9,d=Math.cos(u),g=Math.sin(u),v=-g,m=d,p=.32+r()*.45,x=.05+r()*.18,b=(r()-.5)*.25,_=(r()-.5)*.25,M=new T(d*.3,1,g*.3).normalize().toArray(),y=t.length/3;c(b-v*.03,0,_-m*.03,s,M),c(b+v*.03,0,_+m*.03,s,M),c(b+d*x*.4-v*.024,p*.55,_+g*x*.4-m*.024,a,M),c(b+d*x*.4+v*.024,p*.55,_+g*x*.4+m*.024,a,M),c(b+d*x,p,_+g*x,o,M),i.push(y,y+1,y+2,y+1,y+3,y+2,y+2,y+3,y+4)}let h=new Tt;return h.setAttribute("position",new mt(t,3)),h.setAttribute("normal",new mt(e,3)),h.setAttribute("color",new mt(n,3)),h.setIndex(i),h}function GT(){let r=th(29),t=[],e=[],n=[],i=[],s=new et(4612666),a=new et(8036444),o=new et(12046479),c=(f,u,d,g,v)=>{t.push(f,u,d),n.push(g.r,g.g,g.b),e.push(v[0],v[1],v[2])},l=7;for(let f=0;f<l;f++){let u=f/l*Math.PI*2+(r()-.5)*.8,d=Math.cos(u),g=Math.sin(u),v=-g,m=d,p=.9+r()*.5,x=.12+r()*.3,b=.035+r()*.02,_=(r()-.5)*.3,M=(r()-.5)*.3,y=new T(d*.3,1,g*.3).normalize().toArray(),w=t.length/3,L=[[0,b,s],[.45,b*.85,a],[.8,b*.5,a.clone().lerp(o,.5)],[1,.002,o]];for(let[E,A,D]of L){let F=_+d*x*E*E,k=M+g*x*E*E,P=p*E;c(F-v*A,P,k-m*A,D,y),c(F+v*A,P,k+m*A,D,y)}for(let E=0;E<L.length-1;E++){let A=w+E*2;i.push(A,A+1,A+2,A+1,A+3,A+2)}}let h=new Tt;return h.setAttribute("position",new mt(t,3)),h.setAttribute("normal",new mt(e,3)),h.setAttribute("color",new mt(n,3)),h.setIndex(i),h}function VT(){let r=[],t=[],e=[],n=[],i=(a,o,c,l,h)=>{let f=Math.cos(a),u=Math.sin(a),d=r.length/3;for(let[g,v]of[[0,0],[1,0],[1,1],[0,1]]){let m=(g-.5)*c,p=o-l+v*l,x=h*v*v;r.push(m*f+x,p,m*u),t.push(0,1,0),e.push(g,v)}n.push(d,d+1,d+2,d,d+2,d+3)};i(.3,2,.34,.98,.1),i(.3+Math.PI/2,2,.34,.98,.1),i(1.3,1.72,.27,.74,-.06);let s=new Tt;return s.setAttribute("position",new mt(r,3)),s.setAttribute("normal",new mt(t,3)),s.setAttribute("uv",new mt(e,2)),s.setIndex(n),s}var WT=`
attribute vec4 aSeed;
uniform vec3 uCam;
uniform float uTime, uWind, uCell, uScale, uIn0, uIn1, uOut0, uOut1, uCorr;
uniform vec2 uWindDir;
uniform vec3 uRoad[${$l}];     // (x, y, z) của tim đường
uniform float uCarve0, uCarve1, uTipH, uPatch;
${G0}
// khoảng cách tới đường + độ cao mặt đường tại điểm gần nhất
float roadDist(vec2 p, out float ry) {
  float dm = 1e9; ry = 0.0;
  for (int i = 0; i < ${$l-1}; i++) {
    vec2 a = uRoad[i].xz, b = uRoad[i + 1].xz, ab = b - a;
    float t = clamp(dot(p - a, ab) / dot(ab, ab), 0.0, 1.0);
    float d = length(p - a - ab * t);
    if (d < dm) { dm = d; ry = mix(uRoad[i].y, uRoad[i + 1].y, t); }
  }
  return dm;
}
`,qT=`
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
`,Ca=class{constructor(t,e,n="reed"){this.kind=n;let i=n==="meadow",s=n==="grass"||i;this.group=new Pt,t.add(this.group),this.density=1,this.roadPts=Array.from({length:$l},()=>new T),this.shared={uCam:{value:new T},uTime:{value:0},uWind:{value:.3},uWindDir:{value:new at(.78,.62).normalize()},uRoad:{value:this.roadPts},uCorr:{value:we.halfWidth+(i?.7:s?.3:1)},uTipH:{value:i?1.4:s?.8:1.95},uPatch:{value:i?1:0},uCarve0:{value:we.halfWidth+1.2},uCarve1:{value:we.halfWidth+16},uTLow:{value:Se.low},uTDet:{value:Se.det},uTFine:{value:Se.fine}},this.leafGeo=i?GT():s?BT():zT(),this.plumeGeo=s?null:VT();let a=s?null:X0();a&&(a.anisotropy=Math.min(4,e.capabilities.getMaxAnisotropy()));let o=i?[{cell:60,count:24e3,scale:1.05,in0:-1,in1:0,out0:26,out1:36,seed:5},{cell:230,count:14e3,scale:1.6,in0:24,in1:38,out0:95,out1:135,seed:6}]:s?[{cell:64,count:16e3,scale:1,in0:-1,in1:0,out0:22,out1:32,seed:3},{cell:220,count:8e3,scale:1.8,in0:20,in1:34,out0:75,out1:105,seed:4}]:[{cell:86,count:19e3,scale:1,in0:-1,in1:0,out0:30,out1:43,seed:1},{cell:340,count:11e3,scale:1.55,in0:27,in1:46,out0:118,out1:165,seed:2}];this.layers=o.map((c,l)=>{let h=l===o.length-1,f=h?c.count*Bd*Bd:c.count,u=th(c.seed*977),d=new Float32Array(f*4);for(let x=0;x<d.length;x++)d[x]=u();let g=new Ye(d,4),v={uCell:{value:c.cell},uScale:{value:c.scale},uIn0:{value:c.in0},uIn1:{value:c.in1},uOut0:{value:c.out0},uOut1:{value:c.out1}},m=this._mesh(this.leafGeo,g,c.count,v,new bo({vertexColors:!0,side:me}),!0);if(s)return{max:c.count,far:h,L:c,uni:v,meshes:[m]};let p=this._mesh(this.plumeGeo,g,c.count,v,new bo({map:a,side:me,alphaTest:.2,alphaToCoverage:!0}),!1);return{max:c.count,far:h,L:c,uni:v,meshes:[m,p]}}),this.mats=this.layers.flatMap(c=>c.meshes.map(l=>l.material)),this.group.visible=!0}_mesh(t,e,n,i,s,a){let o=new ll;o.index=t.index;for(let h of Object.keys(t.attributes))o.setAttribute(h,t.attributes[h]);o.setAttribute("aSeed",e),o.instanceCount=n;let c=this.shared;s.onBeforeCompile=h=>{Object.assign(h.uniforms,c,i),h.vertexShader=h.vertexShader.replace("#include <common>",`#include <common>
`+WT).replace("#include <begin_vertex>",qT),a&&(h.vertexShader=h.vertexShader.replace("#include <color_vertex>",`#include <color_vertex>
#ifdef USE_COLOR
vColor *= 0.78 + 0.44 * fract(aSeed.w * 9.31);
#endif`)),h.fragmentShader=h.fragmentShader.replace("#include <normal_fragment_begin>",Jt.normal_fragment_begin.replace("normal *= faceDirection;","")).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance = emissive * diffuseColor.rgb;`)},de(s);let l=new kt(o,s);return l.frustumCulled=!1,l.layers.set(3),this.group.add(l),l}set visible(t){this.group.visible=t}get visible(){return this.group.visible}setDensity(t){this.density=t;let e=this.view||1;for(let n of this.layers)for(let i of n.meshes)i.geometry.instanceCount=Math.floor(n.max*t*(n.far?e*e:1))}setView(t){this.view=Math.min(Math.max(t,1),Bd);for(let e of this.layers)e.far&&(e.uni.uCell.value=e.L.cell*this.view,e.uni.uOut0.value=e.L.out0*this.view,e.uni.uOut1.value=e.L.out1*this.view);this.setDensity(this.density??1)}update(t,e,n,i,s){let a=this.shared;a.uTime.value=t,a.uCam.value.copy(e),a.uWind.value=s.wind,a.uWindDir.value.copy(s.windDir),a.uTLow.value=Se.low,a.uTDet.value=Se.det,a.uTFine.value=Se.fine;let o={};for(let u=0;u<$l;u++)n.at(i+(u-12)*OT*(this.view||1),o),this.roadPts[u].set(o.x,o.y,o.z);let c=(this.kind==="reed"?.5:.3)*s.dayF*(1-s.overcast*.85)*(.4+.6*s.warm),l=new et(1,.72+.2*(1-s.warm),.42+.45*(1-s.warm)).multiplyScalar(c),h=(.2*s.dayF*(1-.55*s.dark)+.05*s.night)*(.6+.4*s.overcast)+s.flash*.9;l.add(new et(.8,.88,1).multiplyScalar(h));let f=1-.28*s.wet;for(let u of this.layers)u.meshes[0].material.emissive.copy(l),u.meshes[1]&&u.meshes[1].material.emissive.copy(l).multiplyScalar(1.7);for(let u of this.mats)u.color.setScalar(f*(1-.15*s.dark))}};var XT=`
  varying vec2 vUv;
  void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,Xg=`
  uniform float uExposure;
  vec3 rrtOdt(vec3 v) { vec3 a = v * (v + 0.0245786) - 0.000090537; vec3 b = v * (0.983729 * v + 0.4329510) + 0.238081; return a / b; }
  vec3 toDisplay(vec3 c) {
    const mat3 IN = mat3(vec3(0.59719, 0.07600, 0.02840), vec3(0.35458, 0.90834, 0.13383), vec3(0.04823, 0.01566, 0.83777));
    const mat3 OUT = mat3(vec3(1.60475, -0.10208, -0.00327), vec3(-0.53108, 1.10813, -0.07276), vec3(-0.07367, -0.00605, 1.07602));
    c = clamp(OUT * rrtOdt(IN * (c * uExposure / 0.6)), 0.0, 1.0);
    return mix(pow(c, vec3(0.41666)) * 1.055 - vec3(0.055), c * 12.92, vec3(lessThanEqual(c, vec3(0.0031308))));
  }`,jT=`
  uniform sampler2D tSrc; uniform vec2 uTexel; uniform float uThresh;
  varying vec2 vUv;
  ${Xg}
  void main() {
    vec3 c = (toDisplay(texture2D(tSrc, vUv + uTexel * vec2(-1.0, -1.0)).rgb) + toDisplay(texture2D(tSrc, vUv + uTexel * vec2(1.0, -1.0)).rgb)
            + toDisplay(texture2D(tSrc, vUv + uTexel * vec2(-1.0, 1.0)).rgb) + toDisplay(texture2D(tSrc, vUv + uTexel * vec2(1.0, 1.0)).rgb)) * 0.25;
    float l = max(c.r, max(c.g, c.b));
    gl_FragColor = vec4(c * smoothstep(uThresh, uThresh + 0.07, l), 1.0);
  }`,YT=`
  uniform sampler2D tSrc; uniform vec2 uDir;
  varying vec2 vUv;
  void main() {
    vec3 s = texture2D(tSrc, vUv).rgb * 0.2270270270;
    s += (texture2D(tSrc, vUv + uDir * 1.3846153846).rgb + texture2D(tSrc, vUv - uDir * 1.3846153846).rgb) * 0.3162162162;
    s += (texture2D(tSrc, vUv + uDir * 3.2307692308).rgb + texture2D(tSrc, vUv - uDir * 3.2307692308).rgb) * 0.0702702703;
    gl_FragColor = vec4(s, 1.0);
  }`,KT=`
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
  }`,JT=`
  uniform sampler2D tSrc; uniform vec2 uTexel;
  varying vec2 vUv;
  void main() {
    float m = 0.0;
    for (int y = 0; y < 4; y++) for (int x = 0; x < 4; x++)
      m = max(m, -texture2D(tSrc, vUv + (vec2(float(x), float(y)) - 1.5) * uTexel).a);
    gl_FragColor = vec4(m, 0.0, 0.0, 1.0);
  }`,ZT=`
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
  }`,QT=`
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
  }`,$T=`
  uniform sampler2D tScene, tDepth; uniform float uNear, uFar, uAspect; uniform vec2 uSun;
  varying vec2 vUv;
  void main() {
    float d = texture2D(tDepth, vUv).x;
    float z = uNear * uFar / (uFar - d * (uFar - uNear));
    float sky = smoothstep(0.88, 0.97, z / uFar);
    float l = dot(texture2D(tScene, vUv).rgb, vec3(0.3, 0.59, 0.11));
    vec2 dd = (vUv - uSun) * vec2(uAspect, 1.0);
    gl_FragColor = vec4(vec3(sky * exp(-dot(dd, dd) * 7.0) * smoothstep(0.08, 1.2, l)), 1.0);
  }`,tS=`
  uniform sampler2D tSrc; uniform vec2 uSun; uniform float uLen;
  varying vec2 vUv;
  void main() {
    vec2 step = (vUv - uSun) * uLen / 32.0, uv = vUv;
    vec3 s = vec3(0.0); float w = 1.0, tot = 0.0;
    for (int i = 0; i < 32; i++) { s += texture2D(tSrc, uv).rgb * w; tot += w; w *= 0.965; uv -= step; }
    gl_FragColor = vec4(s / tot, 1.0);
  }`,eS=`
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
  }`,nS=`
  uniform sampler2D tScene, tBloom, tDof, tRays;
  uniform vec3 uRayCol;
  uniform float uFx, uCine, uTime, uAspect, uDof;
  uniform vec2 uRes;
  varying vec2 vUv;
  ${Xg}
  float hash12(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
  vec3 sceneAt(vec2 uv) {
    vec3 s = texture2D(tScene, uv).rgb;
    if (uDof > 0.0) { vec4 d = texture2D(tDof, uv); s = mix(s, d.rgb, clamp(d.a, 0.0, 1.0) * uDof); }
    return s;
  }
  ${eS}
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
  }`,eh=class{constructor(t,e=4){this.renderer=t,this.enabled=!0,this.samples=e,this.scene=new cs,this.cam=new Ps(-1,1,1,-1,0,1);let n=(s,a)=>new ve({uniforms:s,vertexShader:XT,fragmentShader:a,depthTest:!1,depthWrite:!1,toneMapped:!1}),i={value:1};this.exposure=i,this.bright=n({tSrc:{value:null},uTexel:{value:new at},uThresh:{value:.92},uExposure:i},jT),this.blur=n({tSrc:{value:null},uDir:{value:new at}},YT),this.dofPrep=n({tScene:{value:null},tDepth:{value:null},uTexel:{value:new at},uNear:{value:.1},uFar:{value:1e3},uFocus:{value:10},uFocusRange:{value:0},uCocK:{value:0},uMaxCoc:{value:24}},KT),this.dofTile=n({tSrc:{value:null},uTexel:{value:new at}},JT),this.dofDilate=n({tSrc:{value:null},uTexel:{value:new at}},ZT),this.dofBlur=n({tSrc:{value:null},tNear:{value:null},uTexelFull:{value:new at},uMaxCoc:{value:24},uN:{value:24}},QT),this.final=n({tScene:{value:null},tBloom:{value:null},tDof:{value:null},uDof:{value:0},uExposure:i,tRays:{value:null},uRayCol:{value:new et(0,0,0)},uGlass:{value:0},uRearGlass:{value:0},tDepth:{value:null},uNear:{value:.1},uFar:{value:1e3},uTanF:{value:1},uInvVP:{value:new yt},uCamPos:{value:new T},uCamFwd:{value:new T},uGC:{value:new T},uGN:{value:new T},uGU:{value:new T},uGV:{value:new T},uBlade:{value:new he},uGB:{value:new he},uPiv:{value:new he},uWipe:{value:new he},uRest:{value:new he},uSweep:{value:1.6},uFlow:{value:new at},tGlassMask:{value:null},uFx:{value:0},uCine:{value:0},uTime:{value:0},uAspect:{value:1},uRes:{value:new at(1,1)}},nS),this.rayMask=n({tScene:{value:null},tDepth:{value:null},uNear:{value:.1},uFar:{value:1e3},uAspect:{value:1},uSun:{value:new at}},$T),this.rayBlur=n({tSrc:{value:null},uSun:{value:new at},uLen:{value:1}},tS),this.rays={uv:new at(.5,.5),color:new et(0,0,0),near:.1,far:1e3},this.quad=new kt(new ti(2,2),this.bright),this.quad.frustumCulled=!1,this.scene.add(this.quad),this.size=new at,this.rts={},this.sceneRT=new xn(16,16,{type:Vn,samples:e,depthBuffer:!0,depthTexture:new ca(16,16,Fi)}),this.glassScene=new cs,this.glassMaterial=new ve({uniforms:{tDepth:{value:this.sceneRT.depthTexture},uRes:{value:this.size},uNear:{value:.1},uFar:{value:1e3}},side:me,depthTest:!1,depthWrite:!1,toneMapped:!1,vertexShader:`
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
        }`}),this.glassMesh=new kt(new Tt,this.glassMaterial),this.glassMesh.matrixAutoUpdate=!1,this.glassScene.add(this.glassMesh),this._clearColor=new et,this.resize()}_rt(t,e,n,i=!1){let s=this.rts[t];return s?s.setSize(e,n):s=this.rts[t]=new xn(e,n,{type:i?Vn:Hi,minFilter:an,magFilter:an,depthBuffer:!1,stencilBuffer:!1}),s}resize(){this.renderer.getDrawingBufferSize(this.size);let t=this.size.x,e=this.size.y;this.sceneRT.setSize(t,e);let n=Math.max(16,Math.ceil(t/4)),i=Math.max(16,Math.ceil(e/4));this._rt("bloomA",n,i),this._rt("bloomB",n,i);let s=Math.max(16,Math.ceil(t/2)),a=Math.max(16,Math.ceil(e/2));this._rt("prep",s,a,!0),this._rt("dof",s,a,!0);let o=Math.max(4,Math.ceil(s/4)),c=Math.max(4,Math.ceil(a/4));this._rt("tile",o,c,!0),this._rt("near",o,c,!0),this._rt("rayA",n,i),this._rt("rayB",n,i);let l=this._rt("glass",t,e,!0);l.texture.minFilter=l.texture.magFilter=tn,this.final.uniforms.tGlassMask.value=l.texture,this.rayMask.uniforms.uAspect.value=t/e,this.bright.uniforms.uTexel.value.set(1/n,1/i),this.dofPrep.uniforms.uTexel.value.set(1/t,1/e),this.dofTile.uniforms.uTexel.value.set(1/s,1/a),this.dofDilate.uniforms.uTexel.value.set(1/o,1/c),this.dofBlur.uniforms.uTexelFull.value.set(1/t,1/e),this.final.uniforms.uAspect.value=t/e,this.final.uniforms.uRes.value.set(t,e)}setSamples(t){this.sceneRT.samples!==t&&(this.sceneRT.samples=t,this.sceneRT.dispose())}get longSide(){return Math.max(this.size.x,this.size.y)}_pass(t,e){this.quad.material=t,this.renderer.setRenderTarget(e),this.renderer.render(this.scene,this.cam)}begin(){this.renderer.setRenderTarget(this.sceneRT)}renderGlassMask(t,e,n){let i=this.final.uniforms;if(i.uRearGlass.value<.5||i.uGlass.value<=0||!n?.geometry)return;this.glassMesh.geometry=n.geometry,this.glassMesh.matrix.copy(e.matrixWorld),this.glassMaterial.uniforms.uNear.value=t.near,this.glassMaterial.uniforms.uFar.value=t.far;let s=this.renderer,a=s.getClearAlpha();s.getClearColor(this._clearColor),s.setClearColor(0,0),s.setRenderTarget(this.rts.glass),s.render(this.glassScene,t),s.setClearColor(this._clearColor,a)}render(t,e,n,i){let s=this.renderer,a=this.blur.uniforms,o=this.sceneRT.texture;this.exposure.value=s.toneMappingExposure;let c=!1;if(i&&i.amt>.01&&i.samples>0&&i.cocK>.05){c=!0;let u=this.dofPrep.uniforms;u.tScene.value=o,u.tDepth.value=this.sceneRT.depthTexture,u.uNear.value=i.near,u.uFar.value=i.far,u.uFocus.value=i.focus,u.uFocusRange.value=i.range||0,u.uCocK.value=i.cocK,u.uMaxCoc.value=i.maxCoc,this._pass(this.dofPrep,this.rts.prep),this.dofTile.uniforms.tSrc.value=this.rts.prep.texture,this._pass(this.dofTile,this.rts.tile),this.dofDilate.uniforms.tSrc.value=this.rts.tile.texture,this._pass(this.dofDilate,this.rts.near);let d=this.dofBlur.uniforms;d.tSrc.value=this.rts.prep.texture,d.tNear.value=this.rts.near.texture,d.uMaxCoc.value=i.maxCoc,d.uN.value=i.samples,this._pass(this.dofBlur,this.rts.dof)}if(e>.01){let u=this.rts.bloomA,d=this.rts.bloomB;this.bright.uniforms.tSrc.value=o,this._pass(this.bright,u);for(let g=0;g<2;g++)a.tSrc.value=u.texture,a.uDir.value.set((2.2+g)/u.width,0),this._pass(this.blur,d),a.tSrc.value=d.texture,a.uDir.value.set(0,(1.2+g*.6)/u.height),this._pass(this.blur,u)}let l=this.rays,h=l.color.r+l.color.g+l.color.b>.002;if(h){let u=this.rayMask.uniforms,d=this.rayBlur.uniforms;u.tScene.value=o,u.tDepth.value=this.sceneRT.depthTexture,u.uNear.value=l.near,u.uFar.value=l.far,u.uSun.value.copy(l.uv),this._pass(this.rayMask,this.rts.rayA),d.uSun.value.copy(l.uv),d.tSrc.value=this.rts.rayA.texture,d.uLen.value=.85,this._pass(this.rayBlur,this.rts.rayB),d.tSrc.value=this.rts.rayB.texture,d.uLen.value=.85/10,this._pass(this.rayBlur,this.rts.rayA)}let f=this.final.uniforms;f.tScene.value=o,f.tRays.value=this.rts.rayA.texture,f.tDepth.value=this.sceneRT.depthTexture,h?f.uRayCol.value.copy(l.color):f.uRayCol.value.setRGB(0,0,0),f.tBloom.value=this.rts.bloomA.texture,f.tDof.value=this.rts.dof.texture,f.uDof.value=c?i.amt:0,f.uCine.value=e,f.uFx.value=n,f.uTime.value=t,this._pass(this.final,null)}};var nh=class{constructor(t){this.renderer=t,this.cam=new Oe,this.cam.layers.set(0),this.rt=new xn(16,16,{type:Vn}),this.texMatrix=new yt,this.planeY=0,this.active=!1,this.enabled=!0,this._v=new T,this._d=new T,this._u=new T,this._plane=new Mi,this._clip=new he,this._q=new he,this._size=new at}resize(){this.renderer.getDrawingBufferSize(this._size),this.rt.setSize(Math.max(16,Math.floor(this._size.x/2)),Math.max(16,Math.floor(this._size.y/2)))}render(t,e,n){if(this.active=!1,!this.enabled||e.position.y<n+.05)return;this.planeY=n;let i=this.cam,s=e.position;i.position.set(s.x,2*n-s.y,s.z);let a=this._d.set(0,0,-1).applyQuaternion(e.quaternion),o=this._u.set(0,1,0).applyQuaternion(e.quaternion);i.up.set(o.x,-o.y,o.z),i.lookAt(this._v.set(i.position.x+a.x,i.position.y-a.y,i.position.z+a.z)),i.near=e.near,i.far=e.far,i.updateMatrixWorld(),i.projectionMatrix.copy(e.projectionMatrix),this.texMatrix.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),this.texMatrix.multiply(i.projectionMatrix).multiply(i.matrixWorldInverse);let c=this._plane.setFromNormalAndCoplanarPoint(this._v.set(0,1,0),this._d.set(s.x,n,s.z));c.applyMatrix4(i.matrixWorldInverse);let l=this._clip.set(c.normal.x,c.normal.y,c.normal.z,c.constant),h=i.projectionMatrix.elements,f=this._q.set((Math.sign(l.x)+h[8])/h[0],(Math.sign(l.y)+h[9])/h[5],-1,(1+h[10])/h[14]);l.multiplyScalar(2/l.dot(f)),h[2]=l.x,h[6]=l.y,h[10]=l.z+1-.003,h[14]=l.w,i.projectionMatrixInverse.copy(i.projectionMatrix).invert();let u=this.renderer,d=u.getRenderTarget(),g=u.shadowMap.autoUpdate;u.shadowMap.autoUpdate=!1,u.setRenderTarget(this.rt),u.render(t,i),u.setRenderTarget(d),u.shadowMap.autoUpdate=g,this.active=!0}};var Do=class r{constructor(){this.root=new Pt,this.tilt=new Pt,this.root.add(this.tilt),this.root.visible=!1,this.ready=!1,this.actions={},this.current=null,this.headOffsetSit=new T,this.hipOffsetSit=new T,this.footShade={value:0}}async load(t,{chisa:e=!1}={}){let n=new Vs;n.setMeshoptDecoder(Aa);let i=await n.loadAsync(t),s=i.scene;this.model=s,this.seatRecline=e?0:null,s.traverse(h=>{if(!h.isMesh)return;h.castShadow=!0,h.receiveShadow=!0,h.frustumCulled=!1;let f=Array.isArray(h.material)?h.material:[h.material];for(let u of f)u.envMapIntensity=.6,de(u)}),this.tilt.add(s);let a=h=>e?s.getObjectByName(uS(s,h)):s.getObjectByName(h);this.head=a("Head"),this.neck=a("neck_01"),this.arms={l:["upperarm_l","lowerarm_l","hand_l"].map(a),r:["upperarm_r","lowerarm_r","hand_r"].map(a)},this.arms.l.some(h=>!h)&&(this.arms.l=null),this.arms.r.some(h=>!h)&&(this.arms.r=null),this.legs={l:["thigh_l","calf_l","foot_l"].map(a),r:["thigh_r","calf_r","foot_r"].map(a)},this.balls={l:a("ball_l"),r:a("ball_r")},(this.legs.l.some(h=>!h)||this.legs.r.some(h=>!h))&&(this.legs=null),this.spine=a("spine_01"),this.pelvis=a("pelvis"),this.gripFingers={l:a("middle_01_l"),r:a("middle_01_r")},this.gripKnuckles={l:[a("index_01_l"),a("pinky_01_l")],r:[a("index_01_r"),a("pinky_01_r")]},this.mixer=new ma(s);for(let h of i.animations)this.actions[h.name]=this.mixer.clipAction(h);s.updateMatrixWorld(!0);let o=new je().setFromObject(s,!0),c=o.max.y-o.min.y;s.scale.setScalar(jg/c),s.position.y=-o.min.y*(jg/c);let l=[];if(s.traverse(h=>{h.isMesh&&/eye/i.test(h.name+" "+(h.material?.name||""))&&l.push(h)}),l.length&&this.head){s.updateMatrixWorld(!0);let h=new je().setFromObject(l[0],!0).getCenter(new T),f=this.head.getWorldPosition(new T),u=h.sub(f);s.rotation.y=Math.atan2(-u.x,u.z)||0}s.updateMatrixWorld(!0),s.traverse(h=>{h.isSkinnedMesh&&/superhero|body/i.test(h.name+" "+h.material?.name)&&hS(h,s,this.footShade)}),this.bindRotations=new Map,s.traverse(h=>{h.isBone&&this.bindRotations.set(h.name,h.getWorldQuaternion(new Vt))}),this.fingers={},this.thumbs={};for(let h of["l","r"]){this.fingers[h]=["index","middle","ring","pinky"].flatMap(u=>[2,3].map(d=>a(`${u}_0${d}_${h}`))).filter(Boolean).map(u=>({b:u,rest:u.quaternion.clone()}));let f=["thumb_01","thumb_02","thumb_03","thumb_04_leaf"].map(u=>a(u+"_"+h));this.thumbs[h]=f.every(Boolean)?{bones:f,rest:f[2].quaternion.clone()}:null}return e&&(this.reference=await new r().load("assets/models/person.glb"),this.actions=this.reference.actions,this.mixer=this.reference.mixer,this.current=this.reference.current,this.retargetPairs=[],s.traverse(h=>{if(!h.isBone)return;let f=Zg(h.name),u=f&&this.reference.model.getObjectByName(f);u&&this.retargetPairs.push({bone:h,from:u,sourceBind:this.reference.bindRotations.get(f).clone().invert(),targetBind:this.bindRotations.get(h.name).clone()})})),this.play("Driving_Loop",0),this.mixer.update(.01),this.applyRetarget(),this.root.updateMatrixWorld(!0),this.headOffsetSit.copy(this.head.getWorldPosition(new T)),this.root.worldToLocal(this.headOffsetSit),this.pelvis&&this.root.worldToLocal(this.pelvis.getWorldPosition(this.hipOffsetSit)),this.ready=!0,this}play(t,e=.35,{once:n=!1,timeScale:i=1}={}){let s=this.actions[t];return!s||s===this.current||(s.reset(),s.setLoop(n?Mf:Ef,1/0),s.clampWhenFinished=n,s.timeScale=i,s.enabled=!0,s.setEffectiveWeight(1),this.current&&e>0?s.crossFadeFrom(this.current,e,!1):this.current&&this.current.stop(),s.play(),this.current=s),s}duration(t){return this.actions[t]?.getClip().duration??1}update(t){this.mixer&&this.root.visible&&(this.mixer.update(t),this.applyRetarget())}applyRetarget(){if(!this.retargetPairs)return;this.reference.root.updateMatrixWorld(!0),this.root.updateMatrixWorld(!0);let t=this.root.getWorldQuaternion(new Vt);for(let{bone:e,from:n,sourceBind:i,targetBind:s}of this.retargetPairs)n.getWorldQuaternion(Ws).multiply(i).multiply(s).premultiply(t),e.parent.getWorldQuaternion(Wi),e.quaternion.copy(Wi.invert().multiply(Ws)),e.updateMatrixWorld(!0)}replace(t){let e=this.root,n=e.visible;this.dispose(),e.clear();for(let i of Object.keys(t))i!=="root"&&(this[i]=t[i]);e.add(this.tilt),e.visible=n,this.root=e}dispose(){this.mixer?.stopAllAction();let t=new Set;for(let e of[this.model,this.reference?.model])e?.traverse(n=>{if(n.isMesh){n.geometry.dispose();for(let i of Array.isArray(n.material)?n.material:[n.material]){for(let s of Object.values(i))s?.isTexture&&t.add(s);i.dispose()}}});t.forEach(e=>e.dispose()),delete this.reference,delete this.retargetPairs,delete this._spIn,delete this._spOut}faceGrip(t,e,n=null){let i=this.arms?.[t]?.[2],s=this.gripFingers?.[t];if(!i||!s)return;i.getWorldPosition(Dn),s.getWorldPosition(ii),Dn.subVectors(ii,Dn).normalize(),ii.copy(e).negate(),ih(i,Dn,ii),i.updateMatrixWorld(!0);let a=this.gripKnuckles?.[t];if(n&&a?.every(Boolean)){a[0].getWorldPosition(Dn),a[1].getWorldPosition(ii),Dn.sub(ii).addScaledVector(e,-Dn.dot(e)).normalize(),ii.copy(n).addScaledVector(e,-n.dot(e)).normalize();let o=Math.atan2(Jg.crossVectors(Dn,ii).dot(e),Dn.dot(ii));Pa.setFromAxisAngle(e,o),i.getWorldQuaternion(Ws),i.parent.getWorldQuaternion(Wi),i.quaternion.copy(Wi.invert().multiply(Pa.multiply(Ws))),i.updateMatrixWorld(!0)}}looseGrip(t,e,n,i){for(let{b:a,rest:o}of this.fingers?.[t]||[])a.quaternion.slerp(o,e);let s=this.thumbs?.[t];if(s&&n){s.bones[2].quaternion.slerp(s.rest,.5),s.bones[0].updateMatrixWorld(!0);let[a,o,,c]=s.bones.map(u=>u.getWorldPosition(new T)),l=.82*(a.distanceTo(o)+o.distanceTo(c)),h=0,f=.2;for(let u=0;u<16;u++){let d=(h+f)/2;n(d,Kg).distanceTo(a)<l?h=d:f=d}Gd([s.bones[0],s.bones[1],s.bones[3]],n(h,Kg),i)}this.arms?.[t]?.[2].updateMatrixWorld(!0)}recline(t){if(t=this.seatRecline??t,!this.spine||!t)return;let e=this.spine.quaternion;this._spOut&&e.equals(this._spOut)&&e.copy(this._spIn),(this._spIn||(this._spIn=new Vt)).copy(e),this.root.getWorldQuaternion(Wi),Dn.set(1,0,0).applyQuaternion(Wi),Pa.setFromAxisAngle(Dn,-t),this.spine.getWorldQuaternion(Ws),this.spine.parent.getWorldQuaternion(Wi),this.spine.quaternion.copy(Wi.invert().multiply(Pa.multiply(Ws))),(this._spOut||(this._spOut=new Vt)).copy(e),this.spine.updateMatrixWorld(!0)}reachLeg(t,e,n,i=null){let s=this.legs?.[t];if(!s)return;Gd(s,e,n);let a=s[2],o=this.balls?.[t];i&&o&&(a.getWorldPosition(Dn),o.getWorldPosition(ii),ih(a,ii.sub(Dn).normalize(),Dn.copy(i).normalize()),a.updateMatrixWorld(!0))}reach(t,e,n=null){let i=this.arms?.[t];i&&Gd(i,e,n)}};function Gd(r,t,e){{let[n,i,s]=r,a=n.getWorldPosition(iS),o=i.getWorldPosition(sS),c=s.getWorldPosition(rS),l=a.distanceTo(o),h=o.distanceTo(c),f=Jg.subVectors(t,a),u=f.length();f.multiplyScalar(1/u),u=Math.min(Math.max(u,Math.abs(l-h)+.001),l+h-.001);let d=(l*l+u*u-h*h)/(2*l*u),g=Math.sqrt(Math.max(0,1-d*d)),v=e?Yg.copy(e):Yg.subVectors(o,a);v.addScaledVector(f,-v.dot(f)),v.lengthSq()<1e-8&&v.set(0,-1,0),v.normalize();let m=aS.copy(a).addScaledVector(f,l*d).addScaledVector(v,l*g);ih(n,Dn.subVectors(o,a).normalize(),ii.subVectors(m,a).normalize()),n.updateMatrixWorld(!0),i.getWorldPosition(o),s.getWorldPosition(c),ih(i,Dn.subVectors(c,o).normalize(),ii.subVectors(t,o).normalize()),i.updateMatrixWorld(!0)}}var jg=1.7,iS=new T,sS=new T,rS=new T,Jg=new T,Yg=new T,aS=new T,Dn=new T,ii=new T,Kg=new T,Pa=new Vt,Ws=new Vt,Wi=new Vt;function ih(r,t,e){Pa.setFromUnitVectors(t,e),r.getWorldQuaternion(Ws),r.parent.getWorldQuaternion(Wi),r.quaternion.copy(Wi.invert().multiply(Pa.multiply(Ws)))}var oS=new et("#1c1c1f"),cS=new et("#2f4366"),lS=new et("#dedad2");function hS(r,t,e){let n=r.geometry,i=n.attributes.skinIndex,s=n.attributes.skinWeight,a=n.attributes.position;if(!i||!s)return;let o=r.skeleton.bones,c=o.find(p=>p.name==="pelvis"),l=c?c.getWorldPosition(new T).y:.9,h=o.map(p=>/foot|ball/i.test(p.name)?3:/thigh|calf/i.test(p.name)?2:/lowerarm|hand|index|middle|ring|pinky|thumb|neck|head/i.test(p.name)?0:/pelvis/i.test(p.name)?4:1),f=new Float32Array(a.count*4),u=new Float32Array(a.count),d=new T;for(let p=0;p<a.count;p++){let x=0,b=-1;for(let y=0;y<4;y++){let w=s.getComponent(p,y);w>b&&(b=w,x=i.getComponent(p,y))}let _=h[x];_===4&&(d.fromBufferAttribute(a,p).applyMatrix4(r.matrixWorld),_=d.y<l+.09?2:1);let M=_===1?oS:_===2?cS:_===3?lS:null;M&&(f[p*4]=M.r,f[p*4+1]=M.g,f[p*4+2]=M.b,f[p*4+3]=1),u[p]=_===3?1:0}n.setAttribute("aGarment",new Et(f,4)),n.setAttribute("aShoe",new Et(u,1));let g=r.material,v=g.onBeforeCompile;g.onBeforeCompile=(p,x)=>{v?.call(g,p,x),p.uniforms.uFootShade=e,p.vertexShader=p.vertexShader.replace("#include <common>",`#include <common>
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
roughnessFactor = mix(roughnessFactor, 0.88, vGarment.a);`).replace("mapN.xy *= normalScale;","mapN.xy *= normalScale * (1.0 - 0.8 * vGarment.a);")};let m=g.customProgramCacheKey?.bind(g);g.customProgramCacheKey=()=>(m?m():"")+"|garment"}function Zg(r){let t=r.replace(/_\d+$/,""),e={Bip001Pelvis:"pelvis",Bip001Spine:"spine_01",Bip001Spine1:"spine_02",Bip001Spine2:"spine_03",Bip001Neck:"neck_01",Bip001Head:"Head"};if(e[t])return e[t];let n=t.match(/^Bip001([LR])(Clavicle|UpperArm|Forearm|Hand|Thigh|Calf|Foot|Toe0)$/);if(n)return{Clavicle:"clavicle",UpperArm:"upperarm",Forearm:"lowerarm",Hand:"hand",Thigh:"thigh",Calf:"calf",Foot:"foot",Toe0:"ball"}[n[2]]+"_"+n[1].toLowerCase();let i=t.match(/^Bip001([LR])Finger([0-4])([12])?$/);return i?["thumb","index","middle","ring","pinky"][+i[2]]+"_0"+(+(i[3]||0)+1)+"_"+i[1].toLowerCase():null}function uS(r,t){let e;return r.traverse(n=>{n.isBone&&Zg(n.name)===t&&(e=n.name)}),e}var sh=r=>Math.min(1,Math.max(0,r)),dn=r=>(r=sh(r),r*r*(3-2*r)),Vd=(r,t,e)=>r+(t-r)*e,qi=(r,t,e)=>{let n=((t-r+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI;return r+n*e},Fo=Math.PI,Wd=-Math.PI/2,Qg=0,Ho=Math.PI/2,qd=-Math.PI*.75,br=1.1,yr=new T(0,1,0),fS=2.25,$g=5,La=26,tv=16,dS=35,ev=20,No=25,pS=9,Xd=18,mS=2,nv=8,gS=12,vS=12,xS=12,rh=class{constructor(t,e){this.cars=t,this.person=e,this.state="off",this.t=0,this.v0=0,this.stopT=-1,this.seat=new T,this.out=new T,this.walkEnd=new T,this.lean=new T,this.corner=new T,this.stand=new T,this.smokeU=-1,this.smoking={on:!1,lit:!1,drag:0,flame:0,exhale:!1,atMouth:0,err:new T,errOK:!1,F:new T,R:new T,mouth:new T},this.handW=0,this.handT=new T,this.closeK=0,this.autoZoom={t:0,on:!0},this.wideK=0,this.zoom={focal:La,back:0,near:0,focalS:La,backS:0,nearS:0},this.orbitA=null,this.orbitHold=0,this.enterRadius=10,this.cyc={t:0,n:0,rest:nv},this.mouthCorr=new T,this.wd={mode:"idle",t:0,dur:4,face:null,target:new T},this.lk={t:0,ty:0,tp:0,y:0,p:0},this._q1=new Vt,this._q2=new Vt,this._q3=new Vt,this._q4=new Vt,this._pole=new T,this._A=new T,this._O=new T,this._H=new T,this._t1=new T,this._t2=new T,this.shot={pos:new T,look:new T},this.cam={pos:new T,look:new T,focus:new T,focal:28,range:2},this._p=new T,this._l=new T,this._w=new T}get active(){return this.state!=="off"}get busy(){return this.state==="stopping"||this.state==="exit"||this.state==="enter"}place(t){let e=this.person.headOffsetSit,[n,i,s]=t.eye;if(t.seat?.hip){let a=this.person.hipOffsetSit,[o,c,l]=t.seat.hip;this.seat.set(o+a.x,c-a.y,l+a.z)}else this.seat.set(n+e.x,i-.1-e.y,s+.06+e.z);this.out.set(-t.width/2-.5,0,this.seat.z-.1),this.lean.set(-t.width/2-.16,0,-t.length/2+1.05),this.walkEnd.set(this.lean.x-.3,0,this.lean.z),this.corner.set(-t.width/2-.55,0,-t.length/2-.75),this.stand.set(-.15,0,-t.length/2-1.2)}sit(){let t=this.person;t.ready&&(t.root.position.copy(this.seat),t.root.rotation.set(0,Fo,0),t.tilt.rotation.set(0,0,0),t.play("Driving_Loop",0))}toggle(t){return this.state==="off"?(this.state="stopping",this.t=0,this.v0=Math.max(t,.5),this.stopT=-1,this.smokeU=-1,this.handW=0,this.wd.mode="idle",this.wd.t=0,this.wd.dur=3+Math.random()*3,this.wd.face=null,this.lk.t=1,!0):this.state==="parked"?(this.stand.copy(this.person.root.position),this.enterYaw=this.person.root.rotation.y,this.enterRadius=Math.max(1,10+this.zoom.backS-this.zoom.nearS),this.autoZoom.on=!1,this.state="enter",this.t=0,!0):!1}zoomBy(t){if(this.wideK<.3)return!1;this.autoZoom.on=!1,this.noteCameraInput();let e=this.zoom,n=Math.log(t);if(n>0){let i=Math.min(n,e.near/Xd);e.near-=i*Xd,n-=i;let s=Math.log(e.focal/tv),a=Math.min(n,s);e.focal/=Math.exp(a),n-=a,n>0&&(e.back=Math.min(ev,e.back+n*No))}else if(n<0){let i=Math.min(-n,e.back/No);if(e.back-=i*No,n+=i,n<0){let s=Math.log(dS/e.focal),a=Math.min(-n,s);e.focal*=Math.exp(a),n+=a}n<0&&(e.near=Math.min(pS,e.near-n*Xd)),e.back<1e-6&&(e.back=0)}return!0}noteCameraInput(){this.wideK>=.3&&(this.orbitHold=mS)}speed(t,e){return this.state!=="stopping"?0:Math.max(0,t-Math.max(1.5,this.v0/3.2)*e)}update(t,e,n){let i=this._update(t,e,n);return this._ground(),i}_ground(){let t=this.person,e=t.root;if(this._lastY!==void 0&&Math.abs(e.position.y-this._lastY)<1e-7&&(e.position.y-=this._applied||0),this._applied=0,!this.groundAt||!t.ready||this.state==="off"||this.state==="stopping"||e.position.y>.3){this.lift=0,this._lastY=void 0;return}if(this._feet||(this._feet=[],e.traverse(s=>{s.isBone&&/^ball_(l|r)$/.test(s.name)&&this._feet.push(s)})),!this._feet.length)return;e.position.y+=this.lift||0,e.updateMatrixWorld(!0);let n=1/0;for(let s of this._feet)n=Math.min(n,s.getWorldPosition(this._t2).y-.027);e.getWorldPosition(this._t1);let i=this.groundAt(this._t1.x,this._t1.z)-n;e.position.y-=this.lift||0,this.lift=Math.max(-.3,Math.min(.5,(this.lift||0)+Math.max(-.04,Math.min(.04,i)))),e.position.y+=this.lift,this._applied=this.lift,this._lastY=e.position.y}_update(t,e,n){this.t+=t;let i=this.cars.dim,s=this.cam,a=this._p,o=this._l;if(this.state==="stopping"){let c=this.cars.frontWheel(this._w),l=dn(this.t/5);a.set(c.x-1.55+.3*l,.34,c.z-1.1+.2*l),o.set(c.x+.05,c.y*.92,c.z+.08),s.focus.copy(c),e.localToWorld(s.focus),s.focal=45,s.range=.35,n<=.01&&this.stopT<0&&(this.stopT=this.t),this.stopT>=0&&this.t-this.stopT>.9&&this._enterState("exit",i)}else this.state==="exit"?this._exit(i,t):this.state==="enter"?this._enter(i,t):this.state==="parked"&&this.smokeU>3.4&&this._wander(t,i);this.smokeU>=0&&this.state!=="enter"&&this._smoke(t),this._hand(),this._look(t),this.state!=="stopping"?this._camera(t,e):(s.pos.copy(a),e.localToWorld(s.pos),s.look.copy(o),e.localToWorld(s.look))}_enterState(t,e){this.state=t,this.t=0,t==="exit"&&(this.shot.pos.set(-e.width/2-4.2,1.45,this.seat.z-2.7),this.shot.look.set(-e.width/2-.25,.95,this.seat.z-.6),this.closeK=0,this.wideK=0,this.orbitA=null,this.mouthCorr.set(0,0,0),Object.assign(this.zoom,{focal:La,back:0,near:0,focalS:La,backS:0,nearS:0}),this.orbitHold=0,this.autoZoom.t=0,this.autoZoom.on=!0)}_camera(t,e){let n=this.cam,i=this.state==="exit"&&this.t>=fS||this.state==="parked"||this.state==="enter"?1:0;this.wideK+=(i-this.wideK)*(1-Math.exp(-t*.9));let s=this.zoom,a=this.autoZoom;if(i&&a.on){a.t+=t;let u=Math.log(La/tv),d=dn(a.t/$g)*(u+ev/No);s.focal=La/Math.exp(Math.min(d,u)),s.back=Math.max(0,d-u)*No,s.near=0,a.t>=$g&&(a.on=!1)}let o=1-Math.exp(-t*6);s.focalS+=(s.focal-s.focalS)*o,s.backS+=(s.back-s.backS)*o,s.nearS+=(s.near-s.nearS)*o;let c=dn(this.wideK),l=this.person.root.position,h=this._p.copy(this.shot.pos),f=this._l.set(l.x,1.2,l.z);if(e.localToWorld(h),e.localToWorld(f),this.person.head.getWorldPosition(n.focus),n.focal=32,n.range=.8,c>.001){let u=this.person.root.getWorldPosition(this._t1).addScaledVector(yr,.95);this.orbitA===null&&(this.orbitA=Math.atan2(h.x-u.x,h.z-u.z)),this.orbitHold>0?this.orbitHold=Math.max(0,this.orbitHold-t):this.orbitA+=t*.1*c;let d=Math.max(1,10+s.backS-s.nearS);if(this.state==="enter"){let p=.6+this.stand.distanceTo(this.corner)/br+this.corner.distanceTo(this.out)/br;d=Vd(this.enterRadius,1,dn(this.t/p))}let g=d*.28,v=Math.sqrt(Math.max(0,d*d-g*g)),m=this._w.set(Math.sin(this.orbitA)*v,g,Math.cos(this.orbitA)*v).add(u);h.lerp(m,c),f.lerp(u,c),n.focal=Vd(n.focal,s.focalS,c),n.range=Vd(n.range,.9,c)}else this.orbitA=null;n.pos.copy(h),n.look.copy(f)}_exit(t,e){let n=this.person,i=this.t,s=n.root;if(i<2.3&&this.cars.setDoor(sh(i/1.1)),i<1){s.position.copy(this.seat),s.rotation.y=qi(Fo,Wd,dn((i-.45)/.6));return}let a=1,o=1.25;if(i<a+o){n.play("Sitting_Exit",.25,{once:!0,timeScale:n.duration("Sitting_Exit")/o});let d=dn((i-a)/o);s.position.lerpVectors(this.seat,this.out,d),s.rotation.y=Wd;return}let c=a+o,l=1;if(i<c+l){n.play("Idle_Loop",.3),s.position.copy(this.out),s.rotation.y=qi(Wd,qd,dn((i-c)/.35)),this.cars.setDoor(1-dn((i-c-.25)/.6));return}this.cars.setDoor(0);let h=c+l,f=this.out.distanceTo(this.corner)/br,u=this.corner.distanceTo(this.stand)/br;if(n.tilt.rotation.x=0,i<h+f+u){n.play("Walk_Loop",.3),this._walk(s,[this.out,this.corner,this.stand],[f,u],i-h,e);return}n.play("Idle_Loop",.4),s.position.copy(this.stand),this.smokeU<0&&(this.smokeU=0,this.turnFrom=s.rotation.y,this.cyc.t=0,this.cyc.n=0,this.cyc.rest=nv),s.rotation.y=qi(this.turnFrom,Ho,dn(this.smokeU/.6)),this.smokeU>.8&&(this.state="parked")}_walk(t,e,n,i,s){let a=0;for(;a<n.length-1&&i>n[a];)i-=n[a],a++;let o=e[a],c=e[a+1],l=sh(i/n[a]);t.position.lerpVectors(o,c,l);let h=Math.atan2(c.x-o.x,c.z-o.z);t.rotation.y=qi(t.rotation.y,h,Math.min(1,s*7))}_smoke(t){let e=this.smokeU+=t,n=this.person,i=this.smoking;if(!n.arms?.r)return;n.root.updateMatrixWorld(!0);let s=n.root.getWorldPosition(this._O),a=n.root.getWorldDirection(i.F).setY(0).normalize(),o=i.R.crossVectors(a,yr).normalize();n.head.getWorldPosition(this._H);let c=i.mouth.copy(this._H).addScaledVector(a,.1),l=this._t1.copy(s).addScaledVector(o,.2).addScaledVector(yr,.92),h=this._t2.copy(s).addScaledVector(o,.27).addScaledVector(yr,.97).addScaledVector(a,.1),f=this._A.copy(c).addScaledVector(a,.1).addScaledVector(o,.1).addScaledVector(yr,-.12);i.atMouth>.9&&i.errOK&&(this.mouthCorr.addScaledVector(i.err,Math.min(1,t*8)),this.mouthCorr.length()>.2&&this.mouthCorr.setLength(.2)),f.add(this.mouthCorr);let u=this.handT;if(i.flame=0,i.drag=0,i.exhale=!1,i.atMouth=0,e<.6){this.handW=0,i.on=!1;return}if(e<1.4){u.copy(l),this.handW=dn((e-.6)/.6),i.on=e>1.25;return}if(i.on=!0,this.handW=1,e<2.2){let x=dn((e-1.4)/.8);u.lerpVectors(l,f,x),i.atMouth=x;return}if(e<3){u.copy(f),i.atMouth=1,i.flame=e>2.3&&e<2.85?1:0,i.lit=e>2.65,i.drag=i.lit?1:0;return}i.lit=!0;let d=this.cyc;d.t+=t;let g=.8+d.rest+.8+1.3;d.t>=g&&(d.t-=g,d.n++,d.rest=d.n===1?gS:vS+Math.random()*xS);let v=d.t,m=.8+d.rest,p=m+.8;if(v<.8){let x=dn(v/.8);u.lerpVectors(f,h,x),i.atMouth=1-x}else if(v<m)u.copy(h);else if(v<p){let x=dn((v-m)/.8);u.lerpVectors(h,f,x),i.atMouth=x}else u.copy(f),i.drag=1,i.atMouth=1;i.exhale=v>.6&&v<1.6}_wander(t,e){let n=this.person,i=n.root,s=this.wd;if(s.t+=t,s.mode==="idle"){if(n.play("Idle_Loop",.4),s.face!==null&&(i.rotation.y=qi(i.rotation.y,s.face,Math.min(1,t*1.6))),s.t>s.dur){if(s.t=0,Math.random()<.6&&this._pickTarget(e)){s.mode="walk";return}s.dur=3+Math.random()*6,s.face=Math.random()<.5?i.rotation.y+(Math.random()-.5)*1.6:null}return}n.play("Walk_Loop",.35,{timeScale:.85});let a=this._t1.subVectors(s.target,i.position).setY(0),o=a.length(),c=Math.atan2(a.x,a.z);i.rotation.y=qi(i.rotation.y,c,Math.min(1,t*4));let l=Math.cos(i.rotation.y-c),h=Math.min(o,br*.8*t*Math.max(0,l));if(i.position.addScaledVector(a.normalize(),h),o<.05){s.mode="idle",s.t=0,s.dur=3+Math.random()*7;let f=Math.random();s.face=f<.5?Ho+(Math.random()-.5)*.9:f<.75?Qg+(Math.random()-.5)*1.2:Fo+(Math.random()-.5)*1.2}}_pickTarget(t){let e=this.person.root.position,n=this.wd,i=-t.length/2-.9,s=-t.length/2-8;for(let a=0;a<12;a++){let o=Math.random()*Math.PI*2,c=1.5+Math.random()*3,l=e.x+Math.sin(o)*c,h=e.z+Math.cos(o)*c;if(!(l<-1.3||l>2.8||h>i||h<s||Math.hypot(l,h)>9.5))return n.target.set(l,0,h),!0}return!1}_look(t){let e=this.person,n=this.lk;if(!e.head)return;let i=this.state==="parked"&&this.smokeU>3.4;if(i&&(n.t-=t)<=0){n.t=1.5+Math.random()*3.5;let c=Math.random();c<.25?(n.ty=(Math.random()-.5)*.4,n.tp=.35+Math.random()*.25):c<.75?(n.ty=(Math.random()<.5?-1:1)*(.5+Math.random()*.45),n.tp=(Math.random()-.4)*.2):(n.ty=(Math.random()-.5)*.3,n.tp=(Math.random()-.5)*.15)}let s=i?1-this.smoking.atMouth:0,a=Math.min(1,t*2.2);if(n.y+=(n.ty*s-n.y)*a,n.p+=(n.tp*s-n.p)*a,Math.abs(n.y)+Math.abs(n.p)<.001)return;e.root.updateMatrixWorld(!0);let o=this._t2.set(1,0,0).applyQuaternion(e.root.getWorldQuaternion(this._q1));this._q2.setFromAxisAngle(yr,n.y*.5).multiply(this._q3.setFromAxisAngle(o,-n.p*.5));for(let c of[e.neck,e.head])c&&(c.getWorldQuaternion(this._q1),c.parent.getWorldQuaternion(this._q4),c.quaternion.copy(this._q4.invert().multiply(this._q2.clone().multiply(this._q1))),c.updateMatrixWorld(!0))}_hand(){if(this.handW<=.001||!this.person.arms?.r)return;let t=this.smoking,e=t.atMouth,n=this._pole.copy(t.R).multiplyScalar(.55+.35*e).addScaledVector(t.F,-.65*(1-e)+.1*e).addScaledVector(yr,-.35-.2*e),i=this.person.arms.r[2].getWorldPosition(this._A);this.person.reach("r",i.lerp(this.handT,this.handW),n)}_enter(t,e){let n=this.person,i=this.t,s=n.root;if(this.smoking.on=!1,this.smoking.lit=!1,this.handW=Math.max(0,this.handW-e*2.5),this.smokeU=-1,n.tilt.rotation.x=0,i<.6){n.play("Idle_Loop",.3),s.position.copy(this.stand),s.rotation.y=qi(this.enterYaw??Ho,Math.atan2(this.corner.x-this.stand.x,this.corner.z-this.stand.z),dn(i/.6));return}let a=.6,o=this.stand.distanceTo(this.corner)/br,c=this.corner.distanceTo(this.out)/br,l=c+o;if(i<a+l){n.play("Walk_Loop",.3),this._walk(s,[this.stand,this.corner,this.out],[o,c],i-a,e);return}let h=a+l;if(i<h+1.1){n.play("Idle_Loop",.25),s.position.copy(this.out),s.rotation.y=i<h+.75?qi(Qg,qd,dn((i-h)/.35)):qi(qd,Ho,dn((i-h-.75)/.35)),this.cars.setDoor(dn((i-h-.15)/.6));return}this.cars.setDoor(1);let f=h+1.1,u=1.4;if(i<f+u){n.play("Sitting_Enter",.25,{once:!0,timeScale:n.duration("Sitting_Enter")/u});let g=dn((i-f)/u);s.position.lerpVectors(this.out,this.seat,g),s.rotation.y=qi(Ho,Fo,dn((i-f-.3)/(u-.3)));return}n.play("Driving_Loop",.4),s.position.copy(this.seat),s.rotation.y=Fo;let d=f+u;this.cars.setDoor(1-sh((i-d)/.9)),i>d+1&&(this.cars.setDoor(0),this.state="off")}};var ah=class{constructor(t){this.renderer=t;let e=.125,n=.09375;this.size=[e,n],this.rt=new xn(384,Math.round(384*n/e),{type:Vn}),this.cam=new Oe(30,e/n,.15,3e3),this.cam.layers.enable(3),this.group=new Pt,this.group.visible=!1;let i=new kt(new re(e+.015,n+.011,.025),new Wt({color:1842206,roughness:.55}));i.position.z=-.015;let s=this.rt.texture;s.repeat.x=-1,s.offset.x=1;let a=new kt(new ti(e,n),new Je({map:s}));this.group.add(i,a),this._p=new T,this._q=new Vt,this._d=new T,this._eye=new T}place(t,e){let[n,i,s]=t.eye;e?(this.group.position.copy(e.pos),this.group.position.x+=Wl[0]/2+.014*.85/2+.02+(this.size[0]+.015)/2,this.group.position.y+=-Wl[1]/2-.03+this.size[1]/2+.055,this.group.position.z+=.025):this.group.position.set(.21,i-.28,s-.6);let a=this._eye.set(n,i,s).sub(this.group.position).normalize(),o=this._d.set(0,-.03,1).normalize().add(a).normalize();this.group.quaternion.setFromUnitVectors(new T(0,0,1),o)}render(t,e){let n=this.renderer,i=this.cam;this.group.updateMatrixWorld(),this.group.getWorldPosition(i.position),this.group.parent.getWorldQuaternion(this._q),this._d.set(0,-.03,1).applyQuaternion(this._q),i.lookAt(this._d.add(i.position)),i.updateMatrixWorld();let s=n.getRenderTarget(),a=n.shadowMap.autoUpdate;n.shadowMap.autoUpdate=!1,this.group.visible=!1,e&&(e.visible=!1),n.setRenderTarget(this.rt),n.render(t,i),n.setRenderTarget(s),n.shadowMap.autoUpdate=a,e&&(e.visible=!0),this.group.visible=!0}};var bS=320,yS=200,_S=`
  uniform mat4 uTex;
  varying vec4 vUv;
  void main() {
    vUv = uTex * vec4(position, 1.0);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }`,MS=`
  uniform sampler2D tMap;
  varying vec4 vUv;
  void main() {
    vec3 c = texture2DProj(tMap, vUv).rgb;
    gl_FragColor = vec4(c * 0.82, 1.0);          // kính gương hơi tối (bạc phủ sau kính)
  }`,oh=class{constructor(t){this.renderer=t,this.cam=new Oe,this.cam.layers.enable(3),this.frame=0,this.current=null,this._v=new T,this._e=new T,this._p=new T,this._n=new T,this._m=new yt,this._q=[0,1,2,3].map(()=>new T),this._bias=new yt().set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1)}setCar(t){if(this.current&&this.current!==t&&this._show(this.current,!1),this.current=t,!t||t.wingMirrors!==void 0)return;t.wingMirrors=null;let e=t.group;e.updateMatrixWorld(!0);let n=null;if(e.traverse(g=>{!n&&g.isMesh&&/^WingmirrorGlass/i.test(g.name)&&g.material?.name==="Mirror"&&(n=g)}),!n)return;let i=this._m.copy(e.matrixWorld).invert().multiply(n.matrixWorld),a=(n.geometry.index?n.geometry.toNonIndexed():n.geometry).attributes.position,o=[[],[]],c=new T,l=new T,h=new T;for(let g=0;g<a.count;g+=3)c.fromBufferAttribute(a,g).applyMatrix4(i),l.fromBufferAttribute(a,g+1).applyMatrix4(i),h.fromBufferAttribute(a,g+2).applyMatrix4(i),o[c.x+l.x+h.x<0?0:1].push(c.clone(),l.clone(),h.clone());let f=new T(...t.dim.eye),u=[];for(let g of o){if(g.length<3)continue;let v=new T,m=new T;for(let F=0;F<g.length;F+=3){let k=new T().subVectors(g[F+1],g[F]).cross(new T().subVectors(g[F+2],g[F]));k.dot(new T().subVectors(f,g[F]))<0&&k.negate(),m.add(k),v.add(g[F]).add(g[F+1]).add(g[F+2])}v.multiplyScalar(1/g.length),m.normalize();let p=new T(0,1,0).cross(m).normalize(),x=new T().crossVectors(m,p),b=1e9,_=-1e9,M=1e9,y=-1e9;for(let F of g){let k=this._v.subVectors(F,v);b=Math.min(b,k.dot(p)),_=Math.max(_,k.dot(p)),M=Math.min(M,k.dot(x)),y=Math.max(y,k.dot(x))}let w=[[b,M],[_,M],[_,y],[b,y]].map(([F,k])=>v.clone().addScaledVector(p,F).addScaledVector(x,k)),L=new Tt().setFromPoints(g.map(F=>F.clone().addScaledVector(m,.003))),E=new xn(bS,yS,{type:Vn}),A=new ve({uniforms:{tMap:{value:E.texture},uTex:{value:new yt}},vertexShader:_S,fragmentShader:MS}),D=new kt(L,A);D.visible=!1,D.frustumCulled=!1,e.add(D),u.push({mesh:D,rt:E,P:v,N:m,N0:m.clone(),corners:w,ready:!1})}let d=[];e.traverse(g=>{g.isMesh&&/^Wingmirror/i.test(g.name)&&d.push(g)}),t.wingMirrors={glass:n,mirrors:u,housing:d}}_show(t,e){let n=t?.wingMirrors;if(n){n.glass.visible=!e;for(let i of n.mirrors)i.mesh.visible=e&&i.ready}}render(t,e,n){let i=this.current,s=i?.wingMirrors;if(!s)return;if(!n){this._show(i,!1),s.aimed=!1;return}let a=i.group,o=this.renderer;a.updateMatrixWorld();let c=e.getWorldPosition(this._e);if(!s.aimed){let f=this._v.copy(c).applyMatrix4(this._m.copy(a.matrixWorld).invert());for(let u of s.mirrors){let d=this._p.set(Math.sign(u.P.x)*.09,-.045,1).normalize();u.N.subVectors(f,u.P).normalize().add(d).normalize()}s.aimed=!0}let l=s.mirrors.every(f=>f.ready)?[s.mirrors[this.frame++%s.mirrors.length]]:s.mirrors,h=s.housing.map(f=>f.visible);s.housing.forEach(f=>{f.visible=!1});for(let f of l)this._renderOne(t,f,a,c,o);s.housing.forEach((f,u)=>{f.visible=h[u]}),this._show(i,!0),s.glass.visible=!1}_renderOne(t,e,n,i,s){let a=this._p.copy(e.P).applyMatrix4(n.matrixWorld),o=this._n.copy(e.N).transformDirection(n.matrixWorld),c=this._v.subVectors(i,a).dot(o);if(c<=.01)return;let l=this.cam;l.position.copy(i).addScaledVector(o,-2*c),l.up.set(0,1,0),l.lookAt(this._v.copy(l.position).add(o)),l.updateMatrixWorld();let h=e.corners.map((x,b)=>this._q[b].copy(x).applyMatrix4(n.matrixWorld).applyMatrix4(l.matrixWorldInverse)),f=Math.max(.01,Math.min(...h.map(x=>-x.z))-.004),u=1e9,d=-1e9,g=1e9,v=-1e9;for(let x of h){let b=f/Math.max(1e-4,-x.z);u=Math.min(u,x.x*b),d=Math.max(d,x.x*b),g=Math.min(g,x.y*b),v=Math.max(v,x.y*b)}l.projectionMatrix.makePerspective(u,d,v,g,f,3e3),l.projectionMatrixInverse.copy(l.projectionMatrix).invert(),e.mesh.material.uniforms.uTex.value.copy(this._bias).multiply(l.projectionMatrix).multiply(l.matrixWorldInverse).multiply(n.matrixWorld);let m=s.getRenderTarget(),p=s.shadowMap.autoUpdate;s.shadowMap.autoUpdate=!1,e.mesh.visible=!1,s.setRenderTarget(e.rt),s.render(t,l),s.setRenderTarget(m),s.shadowMap.autoUpdate=p,e.ready=!0}};var ch=Math.PI*2,ES=Ne.smoothstep,lh=class{constructor(){this.phase=0,this.omega=ch/1.5,this.idle=60,this.wet=0,this.flow=0,this.flowDir=-1,this._v=new T,this._inv=new yt}get running(){return this.phase>0}angle(t){return t*.5*(1-Math.cos(this.phase))}update(t,e,n){let i=e>.15;this.omega=ch/(e>.95?1.05:1.55),i||this.phase>0?(this.phase+=this.omega*t,this.phase>=ch&&(this.phase=i?this.phase-ch:0),this.idle=0):this.idle+=t,this.wet+=(e-this.wet)*(1-Math.exp(-t*(e>this.wet?1.5:.12)));let s=Ne.lerp(-.05,.24,ES(n,6,20));this.flow+=s*t,this.flowDir=s>=0?1:-1}apply(t,e,n,i,s,a,o=null){if(n.getWorldDirection(this._v),this._v.transformDirection(this._inv.copy(i.matrixWorld).invert()),this._v.z>0&&(s=o),t.uGlass.value=s?e:0,t.uRearGlass.value=s?.rear?1:0,e<=0||!s)return;n.updateMatrixWorld(),t.uInvVP.value.multiplyMatrices(n.matrixWorld,n.projectionMatrixInverse),n.getWorldPosition(t.uCamPos.value),n.getWorldDirection(t.uCamFwd.value),t.uTanF.value=Math.tan(Ne.degToRad(n.fov)/2),t.uNear.value=n.near,t.uFar.value=n.far;let c=i.matrixWorld;if(t.uGC.value.copy(s.center).applyMatrix4(c),t.uGN.value.copy(s.normal).transformDirection(c),t.uGU.value.copy(s.right).transformDirection(c),t.uGV.value.copy(s.up).transformDirection(c),t.uGB.value.fromArray(s.bounds),t.uWipe.value.set(this.phase,this.omega,this.idle,a),t.uFlow.value.set(this.flow,this.flowDir),s.rear)return;let[l,h]=s.wipers;t.uPiv.value.set(l.u,l.v,h.u,h.v),t.uRest.value.set(l.rest,l.sign,h.rest,h.sign),t.uBlade.value.set(l.r0,l.r1,h.r0,h.r1),t.uSweep.value=s.sweep}};var ko=5,wS=200,TS=40,hh=200,qs=r=>{let t=Math.sin(r*127.1+311.7)*43758.5453;return t-Math.floor(t)},SS=r=>{let t=Math.floor(r),e=r-t,n=e*e*(3-2*e);return qs(t)*(1-n)+qs(t+1)*n},iv=(r,t,e)=>{let n=Math.min(1,Math.max(0,(e-r)/(t-r)));return n*n*(3-2*n)},AS=`
  attribute float aGlow;
  uniform float uScale, uFogD;
  varying float vGlow;
  void main() {
    vec4 mv = viewMatrix * vec4(position, 1.0);
    float fd = uFogD * -mv.z;
    vGlow = aGlow * exp(-fd * fd);                // chìm dần trong sương xa
    gl_PointSize = clamp(0.25 * uScale / -mv.z, 2.5, 22.0);
    gl_Position = projectionMatrix * mv;
  }`,RS=`
  uniform vec3 uColor; uniform float uAmt;
  varying float vGlow;
  void main() {
    float d = length(gl_PointCoord - 0.5) * 2.0;
    // lõi nhỏ (bằng nửa trước), quầng rộng + mờ dần về 0 ở mép điểm (nhoè, không lộ khung vuông)
    float core = smoothstep(0.11, 0.0, d), halo = exp(-d * d * 3.5) * max(0.0, 1.0 - d * d) * 0.45;
    float a = (core + halo) * vGlow * uAmt;
    if (a < 0.003) discard;
    gl_FragColor = vec4(uColor * a, 1.0);
  }`,uh=class{constructor(t){this.pos=new Float32Array(hh*3),this.glow=new Float32Array(hh);let e=new Tt;e.setAttribute("position",new Et(this.pos,3).setUsage(Bn)),e.setAttribute("aGlow",new Et(this.glow,1).setUsage(Bn)),e.setDrawRange(0,0),this.mat=new ve({uniforms:{uScale:{value:500},uFogD:{value:0},uColor:{value:new et(9,12,2.6)},uAmt:{value:0}},vertexShader:AS,fragmentShader:RS,transparent:!0,depthWrite:!1,blending:Xe,fog:!1}),this.points=new en(e,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=4,this.points.visible=!1,t.add(this.points),this.ground=new Map,this._p={}}update(t,e,n,i,s,a,o=0){if(this.mat.uniforms.uAmt.value=s,this.mat.uniforms.uScale.value=a,this.mat.uniforms.uFogD.value=o,this.points.visible=s>.01,!this.points.visible)return;let c=this._p,l=0,h=Math.floor((e-TS)/ko),f=Math.floor((e+wS)/ko);for(let d=h;d<=f&&l<hh;d++){let g=iv(.38,.58,SS(d*ko/140+3.7));if(g<=0||qs(d*1.31)>g*.9)continue;let v=1+Math.floor(qs(d*2.17)*3);for(let m=0;m<v&&l<hh;m++){let p=d*8+m,x=qs(p*3.1+.5),b=qs(p*5.7+1.3),_=qs(p*7.3+2.9),M=qs(p*9.1+4.4),y=d*ko+x*ko;n.at(y,c);let w=b<.5?-1:1,L=w*(4.6+16*_*_),E=Math.cos(c.th),A=-Math.sin(c.th),D=c.x+E*L,F=c.z+A*L,k=this.ground.get(p);k===void 0&&(k=i?i.heightAt(D,F):c.y,k>c.y-3&&k<c.y+4||(k=c.y),this.ground.set(p,k));let P=.35+M*.3,C=.5+x*.4;this.pos[l*3]=D+Math.sin(t*P+b*20)*.9+Math.sin(t*C*1.7+_*9)*.3,this.pos[l*3+1]=k+.7+2.6*M+Math.sin(t*C+x*13)*.35,this.pos[l*3+2]=F+Math.cos(t*C+_*17)*.9+Math.cos(t*P*1.9+M*7)*.3;let I=Math.sin(t*(.9+.8*_)+x*40);this.glow[l]=.12+.88*iv(.25,.9,I)*(.6+.4*b),l++}}if(this.ground.size>1500)for(let d of this.ground.keys())d<h*8&&this.ground.delete(d);let u=this.points.geometry;u.setDrawRange(0,l),u.attributes.position.needsUpdate=!0,u.attributes.aGlow.needsUpdate=!0}};var rv=r=>r>0?1.5:-1.8,CS=r=>r>0?-1.8:1.5,sv=r=>r.home??rv(r.dir),PS=r=>r.home!==void 0?-r.home:CS(r.dir);var fh=class{constructor(){this.player={player:!0,state:"cruise",target:null,dir:1},this.active=[],this.city=!1}_other(t){if(!this.city)return PS(t);let e=sv(t);return Math.sign(e)*(Math.abs(e)<3.5?5.25:1.75)}_overlapLat(t,e,n){return Math.abs(t.d-e)<(t.w+n)/2+.25}_all(){return[this.player,...this.active]}_ahead(t,e,n){let i=null,s=n;for(let a of this._all()){if(a===t||!this._overlapLat(a,e,t.w))continue;let o=(a.s-t.s)*t.dir;o>0&&o<s&&(s=o,i=a)}return i?{e:i,gap:s-(t.len+i.len)/2}:null}_follow(t,e){return Math.max(0,t+.5*(e-(6+1.1*t)))}_canOvertake(t,e,n){let i=this._other(t),s=(e.s-t.s)*t.dir,a=e.player&&e.v<1?16:8,o=Math.max(1,n-e.v),c=(s+(t.len+e.len)/2+a)/o;for(let l of this._all()){if(l===t||l===e||!this._overlapLat(l,i,t.w))continue;let h=(l.s-t.s)*t.dir;if(h<0&&l.dir===t.dir&&l.v>t.v-1&&-h-(t.len+l.len)/2<15+(l.v-t.v)*4)return!1;if(!(h<-(t.len+l.len)/2-3)&&(h<s+e.len/2+50||l.dir!==t.dir&&h-(n+l.v)*c<25||l.dir===t.dir&&l.v<n&&h-(n-l.v)*c<15))return!1}return!0}_overtakeDanger(t,e,n){let i=this._other(t),s=(e.s-t.s)*t.dir+(t.len+e.len)/2+8,a=Math.max(0,s)/Math.max(1,n-e.v);for(let o of this._all()){if(o===t||o===e||o.dir===t.dir||!this._overlapLat(o,i,t.w))continue;let c=(o.s-t.s)*t.dir;if(c>0&&c-(n+o.v)*a<15)return!0}return!1}_sideClear(t,e,n=2){for(let i of this._all()){if(i===t||!this._overlapLat(i,e,t.w))continue;let s=(i.s-t.s)*t.dir,a=Math.abs(s)-(t.len+i.len)/2;if(a<n)return!1;let o=s<0?i.dir===t.dir?i.v-t.v:-1e9:i.dir===t.dir?t.v-i.v:t.v+i.v;if(o>0&&a<o*3+5)return!1}return!0}_decide(t,e){let n=sv(t),i=this._other(t),s=n,a=e,o=60+3*Math.max(t.v,e);if(t.state==="overtake"&&t.target&&this.active.concat([this.player]).includes(t.target)){let c=t.target,l=Math.max(e,c.v+6),h=(t.s-c.s)*t.dir;s=i,a=l,h>(t.len+c.len)/2+(c.player&&c.v<1?16:8)?(t.state="cruise",t.target=null,s=n,a=e):this._overtakeDanger(t,c,l)&&(h<0?(t.state="cruise",t.target=null,s=n,a=Math.max(0,c.v-4)):a=l+6)}else{t.state="cruise",t.target=null;let c=this._ahead(t,n,o);c&&(c.e.dir===t.dir?!t.noOvertake&&c.e.v<e-1.5&&c.gap<30+1.2*t.v&&this._canOvertake(t,c.e,Math.max(e,c.e.v+6))?(t.state="overtake",t.target=c.e,s=i,a=Math.max(e,c.e.v+6)):a=Math.min(a,this._follow(c.e.v,c.gap)):!t.player&&c.e.player&&c.e.home*rv(t.dir)>0&&c.gap<200&&this._sideClear(t,i,30)?s=i:c.gap<120&&(s=n+(n>0?.8:-.8)))}for(let c of[t.d,s]){let l=this._ahead(t,c,o);l&&(l.e.dir===t.dir?a=Math.min(a,this._follow(l.e.v,l.gap)):a=Math.min(a,Math.max(0,(l.gap-12)*.7)))}return s!==t.d&&Math.abs(s-t.d)>.3&&!this._sideClear(t,s)&&(s=t.d),{dT:s,vT:a}}};var jd=(r,t,e)=>Math.min(e,Math.max(t,r)),Fn={maxActive:2,sameMax:1,sameGapMin:25,sameGapMax:60,gapMin:10,gapMax:25,detect:30,minSpeed:13.88888888888889,maxSpeed:55.55555555555556},av=()=>Fn.minSpeed+Math.random()*(Fn.maxSpeed-Fn.minSpeed);function ov(r,t){let e=r.cruise??r.v,n=r.direction??-1,i=o=>t.heading?t.heading(Math.max(0,o)):t.at(Math.max(0,o),{}).th,s=Math.max(12,(e*e-(e*.6)**2)/24+10),a=0;for(let o=0;o<=s;o+=6){let c=Math.max(0,r.s+n*o),l=Math.max(0,c-10),h=c+10,f=i(h)-i(l);a=Math.max(a,Math.abs(Math.atan2(Math.sin(f),Math.cos(f)))/(h-l))}return r.inCurve=a>=(r.inCurve?.0012:.0015),e*(r.inCurve?.6:1)}function cv(r,t,e,n,i=r.cruise??r.v,s=()=>!0){let a=r.direction??-1,o=D=>a*(D.s-r.s),c=Math.max(0,e-r.dim.width/2-.25),l=jd(r.baseD??r.d,-c,c),h=D=>Fn.detect+Math.max(0,-a*(D.direction||0)*(D.speed||0))*1.2,f=t.filter(D=>{if(D.id===r||o(D)<-(r.dim.length+D.length)/2-2)return!1;let F=Math.max(0,o(D)-(r.dim.length+D.length)/2),k=Math.max(0,Math.abs(r.d-D.d)-(r.dim.width+D.width)/2);return Math.hypot(F,k)<=h(D)+1e-6}),u=D=>(r.dim.width+D.width)/2+.6,d=(D,F)=>Math.abs(D-F.d)<u(F),g=t.find(D=>D.id===r.avoidFor),v=g&&o(g)>-(r.dim.length+g.length)/2-8?r.avoidD:l,m=f.filter(D=>d(r.d,D)||d(v,D)),p=i;if(m.length){let F=[v,-1.8,1.8,-c,c,...m.flatMap(k=>[k.d-u(k)-.1,k.d+u(k)+.1])].filter(k=>Math.abs(k)<=c&&s(k)&&f.every(P=>!d(k,P)));if(F.sort((k,P)=>Math.abs(k-r.d)-Math.abs(P-r.d)||Math.abs(k-l)-Math.abs(P-l)),F.length){v=F[0];let k=m.reduce((P,C)=>o(P)<o(C)?P:C);r.avoidFor=k.id,r.avoidD=v}else v=r.d;for(let k of m){let P=Math.max(0,o(k)-(r.dim.length+k.length)/2-2),C=-a*(k.direction||0)*(k.speed||0);p=Math.min(p,Math.max(0,Math.sqrt(24*P)-C))}}let x=m.length>0,b=x?16:3,_=Math.max(x?.6:0,Math.min(x?8:2.2,(x?.35:.2)*Math.abs(r.v))),M=v-r.d,y=r.latV||0,w=Math.sign(M)*Math.min(_,Math.sqrt(2*b*Math.abs(M))),L=y+jd(w-y,-b*n,b*n),E=r.d+L*n;(v-E)*M<=0&&(E=v,L=0);let A=r.v+jd(p-r.v,-12*n,5*n);for(let D of f){let F=Math.min(r.d,E),k=Math.max(r.d,E);if(D.d+u(D)<=F||D.d-u(D)>=k)continue;let P=o(D)-(r.dim.length+D.length)/2-1.5,C=-a*(D.direction||0)*(D.speed||0)*n;A=Math.min(A,Math.max(0,(P-C)/Math.max(n,1e-6)))}return{d:E,v:A,s:r.s+a*A*n,avoiding:m.length>0,latV:L}}function Yd(r,t,e){let n={},i=h=>(t.at(h,n),(n.x-r.x)**2+(n.z-r.z)**2),s=e,a=1/0;for(let h=Math.max(0,e-35);h<=e+35;h+=2){let f=i(h);f<a&&(a=f,s=h)}let o=Math.max(0,s-2),c=s+2;for(let h=0;h<12;h++){let f=(o*2+c)/3,u=(o+c*2)/3;i(f)<i(u)?c=u:o=f}let l=(o+c)/2;return t.at(l,n),{s:l,d:(r.x-n.x)*Math.cos(n.th)-(r.z-n.z)*Math.sin(n.th)}}function lv(r){let t=new Map,e=new Map,n=r.clone();return hv(r,n,function(i,s){t.set(s,i),e.set(i,s)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let s=i,a=t.get(i),o=a.skeleton.bones;s.skeleton=a.skeleton.clone(),s.bindMatrix.copy(a.bindMatrix),s.skeleton.bones=o.map(function(c){return e.get(c)}),s.bind(s.skeleton,s.bindMatrix)}),n}function hv(r,t,e){e(r,t);for(let n=0;n<r.children.length;n++)hv(r.children[n],t.children[n],e)}var LS="assets/models/carriage.glb",IS={length:5.6,width:2.8,height:2.4},Xi={gapMin:15,gapMax:30,max:2,minSpeed:25/3.6,maxSpeed:40/3.6,gallop:11};async function uv(r){let t=await r.loadAsync(LS),e=t.scene;e.traverse(a=>{if(!a.isMesh)return;let o=a.material;o.transparent=!1,o.depthWrite=!0,o.alphaTest=.4,de(o),a.castShadow=!0,a.receiveShadow=!0,a.frustumCulled=!1}),e.rotation.y=Math.PI,e.updateMatrixWorld(!0);let n=new je().setFromObject(e,!0),i=n.getCenter(new T);e.position.set(-i.x,-n.min.y,-i.z);let s=t.animations[0]||null;return()=>{let a=new Pt;a.add(lv(e));let o=new ma(a);return s&&o.clipAction(s).play(),{group:a,dim:{...IS},wheels:[],mixer:o,carriage:!0}}}var fv=430,dv=.24,pv=1.8,mv=(r,t,e)=>Math.min(e,Math.max(t,r)),dh=class{constructor(t,e){this.scene=t,this.cars=e,this.pool=[],this.active=[],this.policy=new fh,this.ctrl={lane:null,maxV:1/0},this.timer=4+Math.random()*6,this.sameTimer=Fn.sameGapMin+Math.random()*(Fn.sameGapMax-Fn.sameGapMin),this.loading=!1,this.wait=6,this._p={},this._q={},this.beamRoot=new Pt,this.beam=pr(this.beamRoot,null,{glows:!1}),this.beamFor=null,t.add(this.beamRoot),this.carriages=[],this.makeCarriage=null,this.carriageLoading=!1,this.carriageTimer=6}_homeLane(t){return(this.playerHome??t)>=0?pv:-pv}async _loadCarriage(){this.carriageLoading=!0;try{this.makeCarriage=await uv(this.cars.loader)}catch(t){console.warn("carriage",t)}}_spawnCarriage(t,e,n){if(this.active.filter(l=>l.carriage).length>=Xi.max)return!1;let i=Xi.minSpeed+Math.random()*(Xi.maxSpeed-Xi.minSpeed),s=Math.random()<.4&&Math.abs(i-n)>3?1:-1,a=s===-1?t+fv+Math.random()*80:i>n+1?Math.max(10,t-80-Math.random()*30):t+150+Math.random()*70;if(this.active.some(l=>Math.abs(l.s-a)<60)||Math.abs(a-t)<40)return!1;let o=this.carriages.find(l=>!l.busy);if(!o){if(this.carriages.length>=Xi.max)return!1;o=this._vehicle(this.makeCarriage()),this.carriages.push(o)}let c=this._homeLane(e);return Object.assign(o,{s:a,direction:s,busy:!0,cruise:i,v:i,heard:!0,policy:null,inCurve:!1,avoidFor:null,latV:0,yaw:0}),o.d=o.baseD=o.avoidD=s===1?c:-c,o.root.visible=!0,this.active.push(o),!0}async _load(t){this.loading=!0;let e=this.cars.list.filter(n=>n.id!==t).sort(()=>Math.random()-.5);for(let n=0;n<Fn.maxActive+Fn.sameMax&&e.length;n++){let i=e[n%e.length];try{let s=await this.cars._load(i);if(this.cars.prepare)try{await this.cars.prepare(s.group)}catch{}this.pool.push(this._vehicle(s))}catch(s){console.warn("traffic",i.id,s)}}}_vehicle(t){let e=new Pt;e.visible=!1,e.add(t.group);let n=t.dim,i=(f,u)=>{let d=new Cn(new wn({map:this.cars.softTex,color:f,transparent:!0,opacity:0,depthWrite:!1,blending:Xe}));return d.scale.set(u*1.35,u*.7,1),e.add(d),d},s=!!t.carriage,a=pr(e,this.cars.softTex,{spots:!1,glows:!s});mr(a,n);for(let f of t.wheels)f.front=f.pivot.position.z<0,f.pivot.rotation.order="YXZ";let[o,c,l]=ya(n).tail,h=s?[]:[-1,1].map(f=>{let u=i(16720914,1.6);return u.position.set(f*o,c,l+.03),u});return this.scene.add(e),{root:e,wheels:t.wheels,dim:n,headlights:a,tails:h,busy:!1,s:0,v:0,d:0,carriage:s,mixer:t.mixer||null}}update(t,e,n,i,s,a,o=[],c=null){if(!this.pool.length){!this.loading&&(this.wait-=t)<=0&&this._load(a);return}this.cars.loader&&!this.makeCarriage&&!this.carriageLoading&&this._loadCarriage();let l=o.find(v=>v.id==="player");this.makeCarriage&&(this.carriageTimer-=t)<=0&&(this.carriageTimer=this._spawnCarriage(e,n,l?.speed||0)?Xi.gapMin+Math.random()*(Xi.gapMax-Xi.gapMin):1),this.timer-=t,this.sameTimer-=t;for(let v of[-1,1]){let m=v===1,p=m?"sameTimer":"timer";if(this[p]>0)continue;let x=m?Fn.sameGapMin:Fn.gapMin,b=m?Fn.sameGapMax:Fn.gapMax;this[p]=x+Math.random()*(b-x);let _=this.pool.filter(w=>!w.busy);if(!_.length||this.active.filter(w=>!w.carriage&&(w.direction??-1)===v).length>=(m?Fn.sameMax:Fn.maxActive))continue;let M=_[Math.floor(Math.random()*_.length)],y=this._homeLane(n);M.s=m?Math.max(10,e-80-Math.random()*30):e+fv+Math.random()*80,!(this.active.some(w=>Math.abs(w.s-M.s)<60)||Math.abs(M.s-e)<40)&&(M.direction=v,M.busy=!0,M.cruise=M.v=av(),M.d=M.baseD=m?y:-y,M.heard=!1,M.policy=null,M.inCurve=!1,M.avoidFor=null,M.avoidD=M.d,M.latV=0,M.yaw=0,M.root.visible=!0,this.active.push(M))}let h=[...o,...this.active.map(v=>({id:v,s:v.s,d:v.d,speed:v.v,direction:v.direction??-1,width:v.dim.width,length:v.dim.length}))],f=o.find(v=>v.id==="player");Object.assign(this.policy.player,{s:e,d:n,v:f?.speed||0,len:f?.length||this.cars.dim?.length||4.7,w:f?.width||this.cars.dim?.width||2,home:this.playerHome??(n>=0?1.5:-1.5)}),this.policy.active=this.active.map(v=>(v.policy||(v.policy={state:"cruise",target:null}),Object.assign(v.policy,{s:v.s,d:v.d,v:v.v,dir:v.direction??-1,len:v.dim.length,w:v.dim.width,home:v.baseD,noOvertake:(v.direction??-1)<0}))),this.policy.active.push(...o.filter(v=>v.id==="person").map(v=>({s:v.s,d:v.d,v:v.speed||0,dir:0,len:v.length,w:v.width,player:!0,home:v.d})));let u=this.policy._decide(this.policy.player,this.playerGoal??f?.speed??0);this.ctrl.lane=u.dT,this.ctrl.maxV=u.vT;let d=this._p,g=this._q;for(let v=this.active.length-1;v>=0;v--){let m=this.active[v],p=ov(m,i),x=this.policy._decide(m.policy,p),b=D=>D*m.baseD>=0||x.dT*m.baseD<0&&this.policy._sideClear(m.policy,D),_=x.vT;if(this.stopFor){let D=m.direction??-1,F=this.stopFor(m.s+D*m.dim.length/2,D,m.v);F<1/0&&(_=Math.min(_,Math.sqrt(2*3.2*Math.max(0,F-1))))}let M=cv(m,h,we.halfWidth,t,Math.min(p,_),b);if(m.s=M.s,m.d=M.d,m.v=M.v,m.avoiding=M.avoiding,m.latV=M.latV,m.s<e-(m.direction===1?180:90)||m.direction===1&&m.s>e+(m.carriage?400:750)){m.busy=!1,m.root.visible=!1,this.active.splice(v,1);continue}if(c&&f&&!m.carriage){let D=m.s-e,F=m.v*(m.direction??-1)-f.speed,k=Math.abs(F);Math.abs(D)>70&&(m.heard=!1),!m.heard&&k>2&&D*F<0&&Math.abs(m.d-n)<7&&-D/F<c.passDur(k)*.5&&(m.heard=!0,c.passBy(k,Ne.clamp((m.d-n)/4,-.8,.8),Math.abs(m.d-n)))}i.at(m.s,d);let y=i.at(m.s+2.5,g).y,w=i.at(m.s-2.5,g).y;m.root.position.set(d.x+Math.cos(d.th)*m.d,d.y,d.z-Math.sin(d.th)*m.d);let L=m.direction??-1,E=mv(Math.atan2(m.latV||0,Math.max(3,m.v)),-.35,.35);m.yaw=(m.yaw||0)+(E-(m.yaw||0))*(1-Math.exp(-t*8)),m.root.rotation.set(-L*Math.atan2(w-y,5),d.th+(L===-1?Math.PI:0)-L*m.yaw,0,"YXZ");let A=mv(-L*m.yaw*1.8,-.4,.4);for(let D of m.wheels)D.pivot.rotation.x+=L*(m.v*t)/D.radius,D.front&&(D.pivot.rotation.y=A);m.mixer&&(m.mixer.timeScale=m.v/Xi.gallop,m.mixer.update(t)),ks(m.headlights,m.root,this.cars.viewer,s*dv);for(let D of m.tails)D.material.opacity=(.25+.6*s)*.6}this._beam(e,s)}clearAll(){for(let t of this.active)t.busy=!1,t.root.visible=!1;this.active.length=0,this._beam(0,0),this.ctrl.lane=null,this.ctrl.maxV=1/0}_beam(t,e){let n=null,i=300;for(let s of this.active){if(s.carriage)continue;let a=Math.abs(s.s-t);a<i&&(i=a,n=s)}n!==this.beamFor&&(this.beamFor=n,n&&mr(this.beam,n.dim)),n&&(n.root.updateMatrixWorld(),n.root.matrixWorld.decompose(this.beamRoot.position,this.beamRoot.quaternion,this.beamRoot.scale)),ks(this.beam,this.beamRoot,null,n?e*dv:0)}};var gv=5,Kd=2400,Jd=420,vv=26,Zd=12,xv=12.5,bv=33,yv=3,ph=Math.floor(bv*2/yv)+1,Ci=(r,t)=>r+Math.random()*(t-r);function Hn(r,t){let e=r;return e.setAttribute("aKind",new Et(new Float32Array(e.attributes.position.count).fill(t),1)),e.deleteAttribute("uv"),e}function DS(){let r=zs([Hn(new rl(.42,1,6,14).rotateX(Math.PI/2).scale(.92,1.05,1).translate(0,1.05,0),0),Hn(new Ti(.17,10,8).scale(1,.75,1.15).translate(0,.62,-.42),1),Hn(new re(.5,.3,.4).translate(0,1.3,-.72),0)]),t=zs([Hn(new re(.34,.42,.5).rotateX(-.5).translate(0,-.02,.16),0),Hn(new re(.3,.34,.48).translate(0,-.1,.5),0),Hn(new re(.29,.22,.16).translate(0,-.2,.78),1),Hn(new re(.2,.05,.1).rotateZ(.25).translate(.23,0,.38),0),Hn(new re(.2,.05,.1).rotateZ(-.25).translate(-.23,0,.38),0),Hn(new ua(.028,.13,6).rotateZ(-.9).translate(.15,.1,.42),3),Hn(new ua(.028,.13,6).rotateZ(.9).translate(-.15,.1,.42),3),Hn(new re(.035,.05,.05).translate(.152,-.02,.56),2),Hn(new re(.035,.05,.05).translate(-.152,-.02,.56),2)]),e=zs([Hn(new Ve(.08,.065,.72,8).translate(0,-.36,0),0),Hn(new Ve(.07,.08,.1,8).translate(0,-.77,0),2)]),n=zs([Hn(new Ve(.025,.018,.72,6).translate(0,-.36,0),0),Hn(new Ti(.06,6,5).scale(1,1.8,1).translate(0,-.76,0),2)]);return{body:r,head:t,leg:e,tail:n}}function FS(r){let t=new Wt({roughness:.82,metalness:0}),e={value:r};return t.onBeforeCompile=n=>{n.uniforms.uSeed=e,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.rgb = cowC;`)},t.customProgramCacheKey=()=>"cow",de(t)}var Qd=class{constructor(t,e){let n=FS(new T(e*17.3,e*5.1,e*11.7)),i=a=>{let o=new kt(a,n);return o.castShadow=!0,o.receiveShadow=!0,o};this.root=new Pt,this.root.add(i(t.body)),this.neck=new Pt,this.neck.position.set(0,1.15,.85),this.neck.add(i(t.head)),this.root.add(this.neck),this.legs=[[.24,.6],[-.24,.6],[.24,-.6],[-.24,-.6]].map(([a,o])=>{let c=new Pt;return c.position.set(a,.81,o),c.add(i(t.leg)),this.root.add(c),c}),this.tail=new Pt,this.tail.position.set(0,1.4,-.92),this.tail.add(i(t.tail)),this.root.add(this.tail);let s=Ci(.92,1.06);this.root.scale.setScalar(s),this.seed=Math.random()*100,this.mode="graze",this.timer=Ci(1,8),this.head=1.2,this.headY=0,this.gait=0,this.x=0,this.z=0,this.yaw=0,this.y=0,this.hx=1e9,this.hz=1e9}},mh=class{constructor(t){this.group=new Pt,this.group.visible=!1,t.add(this.group);let e=DS();this.cows=Array.from({length:gv},(i,s)=>{let a=new Qd(e,s);return this.group.add(a.root),a});let n=de(new Wt({color:5914151,roughness:.92}));this.posts=new Ee(new re(.13,1.25,.13).translate(0,.62,0),n,ph),this.rails=new Ee(new re(1,.1,.05),n,(ph-1)*2);for(let i of[this.posts,this.rails])i.castShadow=!0,i.receiveShadow=!0,i.frustumCulled=!1,this.group.add(i);this.herd=null,this.enabled=!1,this.onBuild=null,this._p={},this._m=new yt,this._q=new Vt,this._v=new T,this._s=new T,this._up=new T(0,1,0)}set visible(t){this.enabled=t,t||(this.group.visible=!1),this.herd=null}get visible(){return this.enabled}reset(){this.herd=null}_place(t,e,n){let i=Jd+t*Kd,s=t%2?-1:1,a=e.at(i,this._p),o=Math.cos(a.th),c=-Math.sin(a.th),l=-Math.sin(a.th),h=-Math.cos(a.th);this.cx=a.x+o*s*vv,this.cz=a.z+c*s*vv,this.cows.forEach((m,p)=>{let x=p/gv*Math.PI*2+Ci(-.4,.4),b=Ci(2,Zd*.7);m.x=this.cx+Math.cos(x)*b,m.z=this.cz+Math.sin(x)*b,m.yaw=Ci(0,Math.PI*2),m.hx=1e9,m.mode="graze",m.timer=Ci(1,8)});let f=this._m,u=this._q,d=this._v,g=this._s,v=[];for(let m=0;m<ph;m++){let p=e.at(i-bv+m*yv,this._p),x=p.x+Math.cos(p.th)*s*xv,b=p.z-Math.sin(p.th)*s*xv,_=n.heightAt(x,b);v.push([x,_,b]),f.compose(d.set(x,_-.05,b),u.setFromAxisAngle(this._up,p.th),g.set(1,1,1)),this.posts.setMatrixAt(m,f)}for(let m=0;m<ph-1;m++){let[p,x,b]=v[m],[_,M,y]=v[m+1],w=Math.hypot(_-p,y-b),L=Math.atan2(-(y-b),_-p),E=Math.atan2(M-x,w);for(let A=0;A<2;A++)u.setFromEuler(new hi(0,L,E,"YZX")),f.compose(d.set((p+_)/2,(x+M)/2+(A?1:.55),(b+y)/2),u,g.set(w+.1,1,1)),this.rails.setMatrixAt(m*2+A,f)}this.posts.instanceMatrix.needsUpdate=!0,this.rails.instanceMatrix.needsUpdate=!0,this.onBuild&&(this.onBuild(this.group),this.onBuild=null)}update(t,e,n,i){if(!this.enabled)return;let s=Math.round((e+150-Jd)/Kd),a=Jd+s*Kd;if(s<0||a<e-250||a>e+750){this.group.visible=!1,this.herd=null;return}this.herd!==s&&(this._place(s,n,i),this.herd=s),this.group.visible=!0;let o=performance.now()/1e3;for(let c of this.cows)this._cow(c,t,o,i)}_cow(t,e,n,i){if(t.timer-=e,t.timer<=0){let f=Math.random();t.mode==="walk"||f<.5?(t.mode="graze",t.timer=Ci(5,14)):f<.75?(t.mode="look",t.timer=Ci(2,5),t.lookY=Ci(-.45,.45)):(t.mode="walk",t.timer=Ci(2.5,6),t.turn=Ci(-.35,.35))}let s=1.2+.05*Math.sin(n*3.1+t.seed),a=0,o=0;if(t.mode==="look"&&(s=-.12,a=t.lookY),t.mode==="walk"){s=.35,o=.55;let f=this.cx-t.x,u=this.cz-t.z;if(f*f+u*u>Zd*Zd){let d=Math.atan2(f,u);t.yaw+=Math.atan2(Math.sin(d-t.yaw),Math.cos(d-t.yaw))*Math.min(1,e*1.5)}else t.yaw+=t.turn*e}for(let f of this.cows){if(f===t)continue;let u=t.x-f.x,d=t.z-f.z,g=u*u+d*d;if(g<6.25&&g>1e-6){let v=Math.sqrt(g),m=(2.5-v)*e;t.x+=u/v*m,t.z+=d/v*m}}t.x+=Math.sin(t.yaw)*o*e,t.z+=Math.cos(t.yaw)*o*e,Math.hypot(t.x-t.hx,t.z-t.hz)>.4&&(t.y=i.heightAt(t.x,t.z),t.hx=t.x,t.hz=t.z);let c=1-Math.exp(-e*2.2);t.head+=(s-t.head)*c,t.headY+=(a-t.headY)*c,t.gait+=((o>0?1:0)-t.gait)*Math.min(1,e*3),t.phase=(t.phase||0)+e*5.2*t.gait,t.root.position.set(t.x,t.y,t.z),t.root.rotation.y=t.yaw,t.neck.rotation.set(t.head,t.headY,0,"YXZ");let l=.38*t.gait*Math.sin(t.phase);t.legs[0].rotation.x=l,t.legs[3].rotation.x=l,t.legs[1].rotation.x=-l,t.legs[2].rotation.x=-l;let h=Math.max(0,Math.sin(n*.37+t.seed)-.85)*6;t.tail.rotation.set(.12,0,.12*Math.sin(n*1.6+t.seed)+.5*h*Math.sin(n*9))}};var tp=we.halfWidth,HS=230,NS=190,gh=tp+.6,kS=6,US=4,Uo=13,gi=(r,t,e)=>{let n=Math.min(1,Math.max(0,(e-r)/(t-r)));return n*n*(3-2*n)};function OS(r){return{index:r,s:260+r*560+$t(r,71)*100,width:2+3*$t(r,37),flow:.25+.75*$t(r,93)}}function _v(r,t,e,n,i){let s=t.at(r.s,{}),a=Math.cos(s.th)*n,o=-Math.sin(s.th)*n,c=(p,x)=>e.heightAt(p,x),l=1.5,h=n<0?1:-1,f=.61,u=s.x+a*gh,d=s.z+o*gh,g=a,v=o,m=[];for(let p=0;p<i;){if(p>6){let b=(c(u+l,d)-c(u-l,d))*h,_=(c(u,d+l)-c(u,d-l))*h,M=Math.hypot(b,_);if(M>1e-6){let w=.25*gi(6,30,p);g+=(b/M-g)*w,v+=(_/M-v)*w}let y=Math.hypot(g,v);if(g/=y,v/=y,g*a+v*o<Math.cos(f)){let w=Math.sign(a*v-o*g||1)*f;g=a*Math.cos(w)-o*Math.sin(w),v=a*Math.sin(w)+o*Math.cos(w)}}let x=p<24?1.2:2.4;if(u+=g*x,d+=v*x,p+=x,c(u,d),p>12&&e._d<tp+4)break;m.push({x:u,z:d,a:p,dx:g,dz:v})}return m}function Mv(r,t){return r.map(({x:e,z:n,a:i,dx:s,dz:a})=>{let c=(2+6*gi(30,150,i))*gi(10,40,i)*((De(i/52+t,3.3)-.5)*2+.35*(De(i/13+t,8.1)-.5)*2);return{x:e-a*c,z:n+s*c,a:i}})}function zS(r,t,e){let n=e.iCar;e.setCar(r.s);let i=t.at(r.s,{}),s=Math.cos(i.th),a=-Math.sin(i.th),o=new T(i.x,i.y,i.z),c=r.index*3.17+.37,l=r.width,h=r.flow,f=l*.6,u=l*(.17+.1*h),d=[],g=Mv(_v(r,t,e,-1,HS),c),v=Mv(_v(r,t,e,1,NS),c+41),m=g.length?g[g.length-1].a:0,p=v.length?v[v.length-1].a:0;for(let C=g.length-1;C>=0;C--)d.push({...g[C],side:-1,end:m,road:!1});let x=16;for(let C=0;C<=x;C++){let I=-gh+2*gh*C/x;d.push({x:i.x+s*I,z:i.z+a*I,d:I,a:0,side:0,road:!0})}for(let C of v)d.push({...C,side:1,end:p,road:!1});let b={};for(let C=0;C<d.length;C++){let I=d[C];if(I.road)I.tx=s,I.tz=a;else{let U=d[Math.max(0,C-1)],z=d[Math.min(d.length-1,C+1)],W=Math.hypot(z.x-U.x,z.z-U.z)||1;I.tx=(z.x-U.x)/W,I.tz=(z.z-U.z)/W}I.px=I.tz,I.pz=-I.tx;let N;I.road?N=f:(N=u*(.7+.6*De(I.a/17+c,5.5+I.side)),I.side<0&&(N*=1+.6*(1-gi(4,22,I.a))),N+=(f-N)*(1-gi(0,I.side<0?6:3,I.a)),N*=.3+.7*gi(0,30,I.end-I.a)),I.hw=N,I.wb=I.road?N+.9:N*1.7+.45,I.xs=[],I.ys=[],I.zs=[];for(let U=0;U<Uo;U++){let z=I.wb*(2*U/(Uo-1)-1),W,j,it;I.road?(t.at(r.s+z,b),W=b.x+Math.cos(b.th)*I.d,it=b.z-Math.sin(b.th)*I.d,j=Math.abs(I.d)<=tp?b.y+.05:e.heightAt(W,it)):(W=I.x+I.px*z,it=I.z+I.pz*z,j=e.heightAt(W,it)),I.xs.push(W),I.ys.push(j),I.zs.push(it)}I.y=I.ys[(Uo-1)/2]}e.iCar=n;let _=0;for(let C=0;C<d.length;C++){let I=d[C],N=d[Math.max(0,C-1)],U=d[Math.min(d.length-1,C+1)];I.slope=I.road?0:Math.abs(U.y-N.y)/(Math.hypot(U.x-N.x,U.z-N.z)||1),C&&(_+=Math.hypot(I.x-d[C-1].x,I.y-d[C-1].y,I.z-d[C-1].z)),I.along=_}let M=_;for(let C=0;C<2;C++){let I=d.map(N=>N.slope);for(let N=1;N<d.length-1;N++)d[N].road||(d[N].slope=I[N-1]*.25+I[N]*.5+I[N+1]*.25)}let y=0;for(let C=0;C<d.length;C++){let I=d[C],N=0;for(let j=C-1;j>=0&&I.along-d[j].along<8;j--)N=Math.max(N,d[j].slope);let U=C?I.along-d[C-1].along:0;y=Math.max(Math.min(1,Math.max(0,(N-I.slope)*.8)),y*Math.exp(-U/(I.road?1.3:3.5))),I.turb=I.road?y*.4:y,I.st=Math.min(1,I.slope/1.3),I.fade=gi(0,25,I.along)*gi(0,30,M-I.along);let z=C?I.along-d[C-1].along:0,W=(.6+4.4*I.st)*(.75+.5*h);I.tau=C?d[C-1].tau+z/W:0,I.road||(I.fade*=1-gi(40,90,I.a)*(1-gi(.3,.62,De(I.a/45+c,13.7+I.side))))}let w=(C,I,N)=>{let U=Math.min(Uo-1.0001,Math.max(0,(I/N+1)*(Uo-1)/2)),z=Math.floor(U),W=U-z;return C[z]+(C[z+1]-C[z])*W},L=(C,I,N,U)=>{let z=[],W=[],j=[],it=[];d.forEach((Z,lt)=>{let ht=I(Z),_t=N(Z);for(let Ut=0;Ut<=C;Ut++){let Xt=ht*(2*Ut/C-1);if(z.push(w(Z.xs,Xt,Z.wb)-o.x,w(Z.ys,Xt,Z.wb)+_t-o.y,w(Z.zs,Xt,Z.wb)-o.z),W.push(Xt,Z.along,Z.tau,h),j.push(...U(Z,ht)),lt&&Ut<C){let Ht=(lt-1)*(C+1)+Ut,ne=lt*(C+1)+Ut;it.push(Ht,ne,Ht+1,Ht+1,ne,ne+1)}}});let B=new Tt;return B.setAttribute("position",new mt(z,3)),B.setAttribute("aWUV",new mt(W,4)),B.setAttribute("aInfo",new mt(j,4)),B.setIndex(it),B.computeVertexNormals(),B.computeBoundingSphere(),B},E=C=>C.road?.035+.02*h:.07+.13*gi(15,120,C.a)+.4*C.st,A=L(kS,C=>C.hw,E,(C,I)=>[C.st,C.turb,C.fade,I]),D=L(US,C=>C.wb,C=>C.road?.012:E(C)*.55,(C,I)=>[C.st,C.road?1:0,C.fade,I]),F=[];d.forEach((C,I)=>{if(C.road||C.a<1.3||C.fade<.3)return;let N=(C.a<25?.5:C.a<80?.22:.08)*(1-.65*gi(.55,.9,C.st));for(let U of[-1,1]){if($t(r.index*977+I,U>0?11:23)>N)continue;let W=$t(r.index*977+I,U>0?31:47),j=C.a<12?.45+.65*W:.25+.45*W,it=U*Math.min(C.wb-.05,C.hw+.05+.35*j*$t(I,59));F.push({x:w(C.xs,it,C.wb)-o.x,y:w(C.ys,it,C.wb)-(.28+.2*C.st)*j-o.y,z:w(C.zs,it,C.wb)-o.z,s:j,yaw:W*6.283,k:Math.floor($t(I,U+71)*2.999),c:.75+.35*$t(I,U+83)})}if(C.st>.5&&$t(r.index*977+I,97)<.12){let U=($t(I,101)-.5)*C.hw,z=.2+.2*$t(I,103);F.push({x:w(C.xs,U,C.wb)-o.x,y:w(C.ys,U,C.wb)-.1-o.y,z:w(C.zs,U,C.wb)-o.z,s:z,yaw:$t(I,107)*6.283,k:0,c:.7})}});let k=[],P=(C,I)=>d.filter(N=>N.side===C).reduce((N,U)=>!N||Math.abs(U.a-I)<Math.abs(N.a-I)?U:N,null);for(let[C,I]of[[P(-1,2.5),1],[P(1,9),.8]])C&&k.push({x:C.x-o.x,y:C.y+.3-o.y,z:C.z-o.z,w:Math.max(2.2,C.hw*2.4),h:1.2+1.6*h,op:(.1+.14*h)*I});return{origin:o,water:A,wet:D,rocks:F,sprays:k,nodes:d,sheet:f}}var Ev=`
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
`;function BS(r,t){r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
attribute vec4 aWUV;
attribute vec4 aInfo;
varying vec4 vWUV;
varying vec4 vInfo;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWUV = aWUV; vInfo = aInfo;`).replace("#include <project_vertex>",`#include <project_vertex>
      mvPosition.xyz *= ${(1-t).toFixed(4)};
      gl_Position = projectionMatrix * mvPosition;`)}function GS(r){let t=new Wt({color:16777215,roughness:.08,metalness:0,envMapIntensity:.7,transparent:!0,depthWrite:!1,side:me,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-12});return t.onBeforeCompile=e=>{e.uniforms.uTime=r,BS(e,.005),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
        uniform float uTime; varying vec4 vWUV; varying vec4 vInfo;
        float wFoam = 0.0, wHgt = 0.0, wMask = 0.0;
        ${Ev}`).replace("#include <map_fragment>",`
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
        #include <opaque_fragment>`)},t.customProgramCacheKey=()=>"waterfall-water",de(t)}function VS(){return new ve({transparent:!0,depthWrite:!1,side:me,blending:mf,blendEquation:ss,blendSrc:gf,blendDst:vf,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-8,vertexShader:`
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
      ${Ev}
      void main() {
        float lat = vWUV.x, along = vWUV.y, e = abs(lat) / max(vInfo.w, 0.05);
        float edge = 0.72 + 0.3 * (wNoise(vec2(along * 0.35 + (lat > 0.0 ? 5.3 : 11.9), 0.5)) - 0.5) + 0.12 * (wNoise(vec2(along * 1.3, lat * 1.1 + 3.0)) - 0.5);
        float m = (1.0 - smoothstep(edge - 0.35, edge + 0.05, e)) * vInfo.z * (1.0 - smoothstep(150.0, 700.0, vDist));
        vec3 tint = mix(vec3(0.42, 0.44, 0.42), vec3(0.6, 0.7, 0.5), smoothstep(0.35, 0.95, e));     // giữa sẫm, rìa rêu
        tint = mix(tint, vec3(0.55), vInfo.y * 0.6);                                                 // mặt đường ướt: tối vừa
        gl_FragColor = vec4(mix(vec3(1.0), tint, m), 1.0);
      }`})}var $d=class{constructor(t,e){let n=this.N=320;this.pos=new Float32Array(n*3),this.col=new Float32Array(n*4),this.vel=new Float32Array(n*3),this.life=new Float32Array(n).fill(1),this.max=new Float32Array(n).fill(1);let i=new Tt;i.setAttribute("position",new Et(this.pos,3).setUsage(Bn)),i.setAttribute("color",new Et(this.col,4).setUsage(Bn)),this.points=new en(i,new wi({size:.6,map:e,transparent:!0,depthWrite:!1,vertexColors:!0})),this.points.material.onBeforeCompile=s=>{s.vertexShader=s.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
mvPosition.xyz *= 0.96;
gl_Position = projectionMatrix * mvPosition;`)},this.points.frustumCulled=!1,t.add(this.points),this.next=0,this.alive=0}emit(t,e,n,i,s,a){let o=this.next;this.next=(o+1)%this.N,this.pos.set([t,e,n],o*3),this.vel.set([i,s,a],o*3),this.life[o]=0,this.max[o]=.45+Math.random()*.6,this.alive=2}update(t,e){if(!this.alive)return;let n=!1,i=.3+.6*e;for(let s=0;s<this.N;s++){let a=s*3;this.life[s]<this.max[s]&&(this.life[s]+=t,this.vel[a+1]-=9.8*t,this.pos[a]+=this.vel[a]*t,this.pos[a+1]+=this.vel[a+1]*t,this.pos[a+2]+=this.vel[a+2]*t,n=!0);let o=Math.max(0,1-this.life[s]/this.max[s]);this.col.set([i,i*1.02,i*1.04,.9*o*Math.sqrt(o)],s*4)}n||this.alive--,this.points.geometry.attributes.position.needsUpdate=!0,this.points.geometry.attributes.color.needsUpdate=!0}},vh=class{constructor(t,e,n){this.road=e,this.terrain=n,this.items=new Map,this.group=new Pt,this.group.visible=!1,t.add(this.group),this.uTime={value:0},this.material=GS(this.uTime),this.wetMaterial=VS(),this.rockGeos=[0,1,2].map(i=>Fd(i,2)),this.rockMat=n.rockMat,this.tex=bl(),this.splash=new $d(this.group,this.tex),this.last=null,this.inWater=!1,this._p={},this._v=new T,this._r=new T}setMap(t){this.group.visible=t==="mountain";for(let e of this.items.values())this._remove(e);this.items.clear()}_remove(t){this.group.remove(t.group),t.water.geometry.dispose(),t.wet.geometry.dispose(),t.rocks&&t.rocks.forEach(e=>e.dispose());for(let e of t.sprays)e.sprite.material.dispose()}_build(t){let e=zS(t,this.road,this.terrain),n=new Pt;n.position.copy(e.origin);let i=new kt(e.wet,this.wetMaterial),s=new kt(e.water,this.material);i.receiveShadow=s.receiveShadow=!0,i.renderOrder=1,s.renderOrder=2,n.add(i,s);let a=null;if(this.rockMat&&e.rocks.length){let c=this.rockGeos.map(()=>[]);e.rocks.forEach(m=>c[m.k].push(m));let l=new yt,h=new Vt,f=new hi,u=new T,d=new T,g=new et,v=new et("#968c80");a=c.filter(m=>m.length).map(m=>{let p=new Ee(this.rockGeos[m[0].k],this.rockMat,m.length);return m.forEach((x,b)=>{h.setFromEuler(f.set((x.c-.9)*.6,x.yaw,(x.c-.9)*.5)),p.setMatrixAt(b,l.compose(d.set(x.x,x.y,x.z),h,u.set(x.s,x.s*(.6+.35*x.c),x.s))),p.setColorAt(b,g.copy(v).multiplyScalar(x.c))}),p.castShadow=p.receiveShadow=!0,n.add(p),p})}let o=[];return e.sprays.forEach((c,l)=>{for(let h=0;h<3;h++){let f=new Cn(new wn({map:this.tex,color:14674668,transparent:!0,opacity:0,depthWrite:!1}));f.position.set(c.x,c.y,c.z),n.add(f),o.push({sprite:f,sp:c,ph:h/3+l*.17})}}),this.group.add(n),{spec:t,group:n,water:s,wet:i,rocks:a,sprays:o,sheet:e.sheet}}update(t,e,n,i={}){if(!this.group.visible){i.audio?.setWater?.(0);return}let s=this.last===null?0:Math.min(.1,Math.max(0,t-this.last));this.last=t,this.uTime.value=t;let a=Math.max(0,Math.floor((e-420)/560)),o=Math.floor((e+950)/560);for(let[u,d]of this.items)(u<a||u>o)&&(this._remove(d),this.items.delete(u));for(let u=a;u<=o;u++)if(!this.items.has(u)){this.items.set(u,this._build(OS(u)));break}let c=null,l=1/0;for(let u of this.items.values()){for(let{sprite:g,sp:v,ph:m}of u.sprays){let p=(t*.32+m)%1;g.position.y=v.y+p*v.h*.8,g.scale.set(v.w*(.6+.7*p),v.h*(.5+.8*p),1),g.material.opacity=v.op*Math.sin(Math.PI*p),g.material.color.setRGB(.88,.92,.93).multiplyScalar(.2+.8*n)}let d=Math.abs(u.spec.s-e);d<l&&(l=d,c=u)}let h=(u,d,g,v,m,p)=>{let x=c;if(!x||g<.8||Math.abs(u-x.spec.s)>x.sheet+v.length/2)return!1;let b=this.road.at(u,this._p),_=Math.cos(b.th),M=-Math.sin(b.th),y=-Math.sin(b.th)*m,w=-Math.cos(b.th)*m,L=Math.min(1.6,Math.max(.35,g/15)),E=!1;for(let A of[-.33,.33]){let D=u+A*v.length*m;if(!(Math.abs(D-x.spec.s)>x.sheet*.95)){E=!0;for(let F of[-1,1]){let k=p*L*s+Math.random();for(let P=1;P<=k;P++){let C=b.x+_*(d+F*v.width*.42)+y*A*v.length,I=b.z+M*(d+F*v.width*.42)+w*A*v.length,N=F*(.8+2.2*Math.random())*L,U=g*(.1+.3*Math.random());this.splash.emit(C,b.y+.25,I,_*N+y*U,(1.2+2.6*Math.random())*L,M*N+w*U)}}}}return E},f=!1;i.dim&&i.v!==void 0&&(f=h(e,i.d||0,i.v,i.dim,1,40));for(let u of i.npcs||[])h(u.s,u.d,u.v,u.dim,u.direction??-1,30);if(this.splash.update(s,n),f&&!this.inWater&&i.audio?.splash?.(Math.min(1.3,Math.max(.25,i.v/20))),this.inWater=f,i.audio?.setWater){let u=0,d=0;if(c&&i.cam){let g=i.cam.position,v=c.group.position,m=v.x-g.x,p=v.z-g.z,x=Math.max(0,Math.hypot(m,p,v.y-g.y)-4);u=c.spec.flow*(.35+.65*c.spec.flow)/(1+(x/28)**2);let b=this._r.set(1,0,0).applyQuaternion(i.cam.quaternion);d=Math.max(-.8,Math.min(.8,(m*b.x+p*b.z)/(Math.hypot(m,p)||1)))}i.audio.setWater(u,d)}}};var si=420,xh=new T(0,1,0),WS=`
  attribute float aA, aS, aR;
  uniform float uScale;
  varying float vA, vR;
  void main() {
    vec4 mv = viewMatrix * vec4(position, 1.0);
    vA = aA; vR = aR;
    gl_PointSize = clamp(aS * uScale / -mv.z, 1.0, 160.0);
    gl_Position = projectionMatrix * mv;
  }`,qS=`
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
  }`,bh=class{constructor(t,e){this.person=e,this.cig=new Pt;let n=new kt(new Ve(.0055,.0055,.062,8).translate(0,.0115,0),new Wt({color:15921128,roughness:.8})),i=new kt(new Ve(.0057,.0057,.023,8).translate(0,-.031,0),new Wt({color:13208124,roughness:.7}));this.ember=new kt(new Ve(.0056,.0056,.005,8).translate(0,.0425,0),new Je({color:new et(1.6,.35,.08)})),this.cig.add(n,i,this.ember),this.cig.visible=!1,t.add(this.cig);let s=va(),a=(c,l)=>{let h=new Cn(new wn({map:s,color:c,transparent:!0,opacity:0,depthWrite:!1,blending:Xe,fog:!1}));return h.scale.setScalar(l),h.visible=!1,t.add(h),h};this.tipGlow=a(16734746,.07),this.flame=a(16757575,.09),this.pos=new Float32Array(si*3),this.vel=new Float32Array(si*3),this.age=new Float32Array(si).fill(99),this.life=new Float32Array(si).fill(1),this.s0=new Float32Array(si),this.s1=new Float32Array(si),this.a0=new Float32Array(si),this.drag=new Float32Array(si),this.aA=new Float32Array(si),this.aS=new Float32Array(si),this.aR=new Float32Array(si);let o=new Tt;o.setAttribute("position",new Et(this.pos,3).setUsage(Bn)),o.setAttribute("aA",new Et(this.aA,1).setUsage(Bn)),o.setAttribute("aS",new Et(this.aS,1).setUsage(Bn)),o.setAttribute("aR",new Et(this.aR,1).setUsage(Bn)),this.mat=new ve({uniforms:{uScale:{value:500},uColor:{value:new et(.7,.7,.72)}},vertexShader:WS,fragmentShader:qS,transparent:!0,depthWrite:!1,fog:!1}),this.points=new en(o,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=5,t.add(this.points),this.next=0,this.emitTip=0,this.emitMouth=0,this.t=0,this._h=new T,this._e=new T,this._d=new T,this._c=new T,this.tip=new T,this._q=new Vt,this._dir=new T,this._r=new T,this._fv=[0,1,2,3].map(()=>new T),this.fg=null}_spawn(t,e,n,i,s,a,o){let c=this.next;this.next=(this.next+1)%si,this.pos.set([t.x,t.y,t.z],c*3),this.vel.set([e.x,e.y,e.z],c*3),this.age[c]=0,this.life[c]=n,this.s0[c]=i,this.s1[c]=s,this.a0[c]=a,this.drag[c]=o,this.aR[c]=Math.random()}update(t,e,n,i){this.t+=t;let s=this.person.arms?.r,a=e.on&&s&&this.person.root.visible;if(this.cig.visible=!!a,e.errOK=!1,a){if(!this.fg&&this.person.model){let g=["index_02_r","index_03_r","middle_02_r","middle_03_r"].map(v=>this.person.model.getObjectByName(v));this.fg=g.every(Boolean)?g:s.slice(1)}let u=this._c;if(this.fg.length===4){let[g,v,m,p]=this.fg.map((x,b)=>x.getWorldPosition(this._fv[b]));u.copy(g).add(m).multiplyScalar(.5*.65).addScaledVector(v.add(p),.5*.35)}else{let g=s[2].getWorldPosition(this._h),v=s[1].getWorldPosition(this._e);u.copy(g).addScaledVector(this._d.subVectors(g,v).normalize(),.1)}let d=this._dir.copy(e.F).multiplyScalar(.45).addScaledVector(e.R,.85).addScaledVector(xh,-.06).normalize();this.cig.position.copy(u).addScaledVector(d,.0125),this.cig.quaternion.setFromUnitVectors(xh,d),this.tip.copy(u).addScaledVector(d,.055),e.err.copy(e.mouth).addScaledVector(d,.03).sub(u),e.errOK=!0}let o=a&&e.lit;if(this.ember.visible=o,this.tipGlow.visible=o,o){let u=e.drag?1:.45+.08*Math.sin(this.t*7);this.ember.material.color.setRGB(1.6*(.6+u),.35*(.4+u),.08),this.tipGlow.position.copy(this.tip),this.tipGlow.material.opacity=.35+.65*u,this.tipGlow.scale.setScalar(.05+.05*u)}this.flame.visible=a&&e.flame>0,this.flame.visible&&(this.flame.position.copy(this.tip).addScaledVector(xh,-.015),this.flame.material.opacity=.7+.3*Math.sin(this.t*40),this.flame.scale.setScalar(.08+.02*Math.sin(this.t*27)));let c=(n.windDir?.x||0)*(.12+.6*n.wind),l=(n.windDir?.y||0)*(.12+.6*n.wind),h=this._d;if(o)for(this.emitTip+=t*(e.drag?16:12);this.emitTip>=1;)this.emitTip-=1,h.set(c*.3+(Math.random()-.5)*.03,.16+Math.random()*.06,l*.3+(Math.random()-.5)*.03),this._spawn(this.tip,h,2.8+Math.random(),.022,.2,.3,.2);if(e.exhale&&a)for(this.emitMouth+=t*75;this.emitMouth>=1;)this.emitMouth-=1,h.copy(e.F).multiplyScalar(.3).addScaledVector(e.R,-.14).multiplyScalar(.9+Math.random()*.4).addScaledVector(xh,-.06+Math.random()*.07).add(this._r.set((Math.random()-.5)*.08,(Math.random()-.5)*.04,(Math.random()-.5)*.08)),this._spawn(e.mouth,h,2.4+Math.random()*.8,.025,.24,.42,1.3);else this.emitMouth=0;let f=0;for(let u=0;u<si;u++){let d=this.age[u];if(d>=this.life[u]){this.aA[u]=0,this.aS[u]=0;continue}f++,this.age[u]=d+t;let g=Math.exp(-this.drag[u]*t),v=u*3;this.vel[v]=this.vel[v]*g+c*(1-g),this.vel[v+1]=this.vel[v+1]*g+.12*(1-g)+.02*t,this.vel[v+2]=this.vel[v+2]*g+l*(1-g),this.pos[v]+=this.vel[v]*t+Math.sin(this.t*1.7+u)*.004,this.pos[v+1]+=this.vel[v+1]*t,this.pos[v+2]+=this.vel[v+2]*t+Math.cos(this.t*1.3+u*1.7)*.004;let m=this.age[u]/this.life[u];this.aS[u]=this.s0[u]+(this.s1[u]-this.s0[u])*Math.sqrt(m),this.aA[u]=this.a0[u]*Math.min(1,m*8)*(1-m)*(1-m)}if(this.points.visible=f>0,f){let u=this.points.geometry;u.attributes.position.needsUpdate=!0,u.attributes.aA.needsUpdate=!0,u.attributes.aS.needsUpdate=!0,u.attributes.aR.needsUpdate=!0,this.mat.uniforms.uScale.value=i;let d=Math.min(1.1,.15+.75*(n.light??1));this.mat.uniforms.uColor.value.setRGB(.85*d,.85*d,.88*d)}}};q0();var Ct=r=>document.getElementById(r),Ys=(r,t,e)=>Math.min(e,Math.max(t,r)),XS=(r,t,e)=>{let n=Ys((e-r)/(t-r),0,1);return n*n*(3-2*n)},Ha=1/3.6,Mh=1.5,Ks=[25*Ha,50*Ha,180*Ha],Xo=Ks[0],jS=10*Ha,YS=60*Ha,yh=Ks[2],_s=Ct("c"),Qe=new mo({canvas:_s,antialias:!1,powerPreference:"high-performance"}),Vo=1;Qe.setPixelRatio(Vo);Qe.shadowMap.enabled=!0;Qe.shadowMap.type=pf;Qe.toneMapping=bf;var Ae=new cs,St=new Oe(60,1,.3,4e3);St.layers.enable(3);var pe=new xl,Yn=new Il(Ae,pe,Qe),pn=new Ol(Ae,pe,Qe),Ft=new Gl(Qe,Ae,St),Ko=new Ca(Ae,Qe),Na=new Ca(Ae,Qe,"grass"),ka=new Ca(Ae,Qe,"meadow"),dt=new Xl(Ae),zt=new jl(St);zt.groundAt=(r,t)=>Math.max(pn.heightAt(r,t),Er.group.visible?Er.level+1.2:-1/0);var wv=new T,Tv=new T;zt.eyeAt=r=>!ke.ready||Dt.active?!1:(ke.head.getWorldPosition(r),wv.set(0,0,-1).applyQuaternion(dt.root.quaternion),Tv.set(0,1,0).applyQuaternion(dt.root.quaternion),r.addScaledVector(Tv,.15).addScaledVector(wv,-.04),!0);var xs=new Ql,on=new eh(Qe,Ri[kd].msaa),Ua=new nh(Qe),ke=new Do,Dt=new rh(dt,ke);Dt.groundAt=(r,t)=>{let e=Yd({x:r,z:t},pe,X.s),n=pe.at(e.s,{}),i=Math.abs(e.d);if(i<=we.halfWidth)return n.y+.05;if(qn[nt.map].id==="city"&&i<=be.hw+be.walk+.4){let s=pe.nearJunction(e.s);return n.y+(Math.abs(e.s-s)<be.side?.05:.2)}return Math.max(pn.heightAt(r,t),n.y-.02)};dt.viewer=St;var Vv=new bh(Ae,ke),vs=new Hl(Ae),za=new ah(Qe),pp=new oh(Qe),Wo=new lh,mp=new uh(Ae),Eh=new yl(Ae),ai=new Ml(Ae,pe,Yn.roadMat,Yn);Yn.extraLamps=()=>ai.lamps();zt.collide=(r,t,e)=>ai.collide(r,t,e);var Sh=new Vl,Sv=new T,vi=new dh(Ae,dt);vi.stopFor=(r,t,e)=>ai.stopAhead(r,t,e);var cn=new Al(Ae,pe,ai),bs=new Cl(Ae,pe,ai);cn.setup(Ae,dt.softTex,St);var Wv=!1,qv=null,_h=0,Yi=new Pl(cn,bs,{toast:(r,t)=>Js(r,t),fade:(r,t)=>{let e=Ct("fade");t&&(e.textContent=t),e.classList.toggle("show",r)},driverHidden:r=>{Wv=r},siren:(r,t,e)=>xs.setSiren(r,t,e),end:()=>{X.v=0,X.home=be.lanes[1],X.d=X.home,X.latVel=0,X.manual=!1,cn.cars=cn.cars.filter(r=>r.cross||r.script||Math.abs(r.d-X.d)>2.6||r.s<X.s-14||r.s>X.s+22);for(let r of bs.peds.slice())Math.abs(r.u-X.d)<2.5&&Math.abs(r.s-X.s)<6&&bs.remove(r);_h=3,nt.cam=Ce.findIndex(r=>r.id==="chase"),zt.setMode(nt.cam),Tr(),Me(),qv=null,Js("Lái cẩn thận nhé! Nhớ dừng đèn đỏ và nhường người đi bộ.")}}),Er=new Ul(Ae),gp=new vh(Ae,pe,pn),Ah=new mh(Ae);dt.tilt.add(Sh.group);dt.tilt.add(za.group);function Mr(){let r=window.innerWidth,t=window.innerHeight;Qe.setSize(r,t,!1),St.aspect=r/t,St.updateProjectionMatrix(),on.resize(),Ua.resize(),KS()}var Xv=0;function KS(){let r=window.innerWidth,t=window.innerHeight,e=Math.min(t*.135,Math.max(0,(t-r/2.39)/2));Xv=e/t,document.documentElement.style.setProperty("--bar",e.toFixed(1)+"px")}window.addEventListener("resize",Mr);var Qo=matchMedia("(pointer: coarse)").matches&&Math.min(screen.width,screen.height)<600,JS=/iP(hone|od|ad)/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,jo=document.documentElement,vp=!!(jo.requestFullscreen||jo.webkitRequestFullscreen),Ba=()=>!!(document.fullscreenElement||document.webkitFullscreenElement);function jv(){if(!vp||Ba())return;let r=jo.requestFullscreen?jo.requestFullscreen({navigationUI:"hide"}):jo.webkitRequestFullscreen();Promise.resolve(r).then(()=>screen.orientation?.lock?.("landscape")).catch(()=>{})}function ZS(){if(Ba()){try{screen.orientation?.unlock?.()}catch{}(document.exitFullscreen||document.webkitExitFullscreen).call(document)}}var lp=!1,Yv=()=>{Ba()?(lp=!0,ZS()):(lp=!1,jv())},Av=r=>{!lp&&!Ba()&&!ae.full.contains(r.target)&&jv()};Qo&&(window.addEventListener("pointerup",Av,!0),window.addEventListener("touchend",Av,!0));var Kv=()=>{Mr(),setTimeout(Mr,120),setTimeout(Mr,450),$o()};["fullscreenchange","webkitfullscreenchange"].forEach(r=>document.addEventListener(r,()=>{Kv(),Me()}));window.addEventListener("orientationchange",Kv);window.visualViewport?.addEventListener("resize",Mr);var Jv=!1;function $o(){let r=Qo&&!Jv&&window.innerHeight>window.innerWidth;Ct("rotate").hidden=!r}Ct("rotate-ok").addEventListener("click",()=>{Jv=!0,$o()});Ct("rotate").querySelector(".ios").hidden=!(JS&&!vp&&!navigator.standalone);window.addEventListener("resize",$o);$o();Mr();var X={home:Mh,goal:0,manual:!1,s:150,d:Mh,v:Xo,target:Xo,fast:!0,gear:2,fx:0,latVel:0,pitch:0,pos:new T,yaw:0},yn=new Set,xi={active:!1,id:-1,x:0,y:0},nt={car:0,character:0,map:qn.findIndex(r=>r.id==="meadow"),cam:Ce.findIndex(r=>r.id==="orbit"),weather:nn.findIndex(r=>r.id==="cloudy"),time:bn.findIndex(r=>r.id==="night"),music:0,cine:!0,started:!1,mistCover:.9,mistDens:.4,fstop:Ug,quality:QS()},Da=null,ep=!1,Rv=!0,Zv="chilldrive.tuning.v1",ri=null,Qv=Object.freeze({avoid:1,density:1,speed:1,walkers:38,signal:1}),sn={...Qv};function Fa(){if(sn.density<cn.density){let r=sn.density/cn.density;cn.cars=cn.cars.filter(t=>t.script||t.crashed||Math.random()<r)}cn.density=sn.density;for(let r of cn.cars)!r.script&&r.type!=="police"&&r.type!=="ambulance"&&(r.vMax*=sn.speed/(cn.speedK||1));cn.speedK=sn.speed,bs.walkers=Math.round(sn.walkers),ai.clockRate=1/sn.signal}try{if(ri=JSON.parse(localStorage.getItem(Zv)),ri?.camera)for(let[r,t]of Object.entries(ri.camera))zt.tune[r]&&Object.assign(zt.tune[r],t);if(ri?.weather)for(let[r,t]of Object.entries(ri.weather))Ft.weatherProfiles[r]&&Object.assign(Ft.weatherProfiles[r],t);ri?.environment&&Object.assign(Ft.tune,ri.environment),ri?.traffic&&Object.assign(sn,ri.traffic),ri?.carLights&&Object.assign(dt.headlights.tune,ri.carLights),ri?.streetLights&&Object.assign(Yn.lampTune,ri.streetLights)}catch{}zt.setMode(nt.cam);nt.fstop=Vi.indexOf(zt.aperture);var ae={full:Ct("b-full"),stop:Ct("b-stop"),character:Ct("b-character"),quality:Ct("b-quality"),lens:Ct("b-lens"),mist:Ct("b-mist"),fast:Ct("b-fast"),car:Ct("b-car"),map:Ct("b-map"),cam:Ct("b-cam"),weather:Ct("b-weather"),time:Ct("b-time"),music:Ct("b-music")},Gn=(r,t,e)=>{r.querySelector("b").textContent=t,r.querySelector("span").textContent=e,r.title=e};function Me(){Gn(ae.car,"🚗",dt.list[nt.car]?.name??"…"),Gn(ae.character,"🧑",wr?"Đang tải…":nt.character===1?"Chisa":"Người lái"),ae.character.disabled=wr||!ke.ready||Dt.active||dt.current?.def?.id!=="mustang",ae.character.title=dt.current?.def?.id==="mustang"?"Đổi nhân vật":"Chisa hiện hỗ trợ Mustang",Gn(ae.map,qn[nt.map].icon,qn[nt.map].name),Gn(ae.cam,"🎥",Ce[nt.cam].name),Gn(ae.weather,nn[nt.weather].icon,nn[nt.weather].name),Gn(ae.time,bn[nt.time].icon,bn[nt.time].name),Gn(ae.music,Lo[nt.music].icon,Lo[nt.music].name),Gn(ae.fast,"⚡",Math.round(Ks[X.gear]*3.6)+" km/h"),ae.fast.classList.toggle("on",X.gear>0),Gn(ae.mist,"🌫️","Sương "+Math.round(nt.mistDens*100)+"%"),ae.mist.classList.toggle("on",!Ct("mistpanel").hidden),Gn(ae.lens,"📷",tx()),Gn(ae.quality,"⚙️",Ri[nt.quality].name),Gn(ae.stop,Dt.state==="parked"?"▶️":Dt.state==="off"?"🅿️":"⏳",Dt.state==="parked"?"Đi tiếp":Dt.state==="off"?"Dừng xe":"…"),ae.lens.classList.toggle("on",!Ct("lenspanel").hidden),ae.cam.classList.toggle("on",_e==="camera"),ae.weather.classList.toggle("on",_e==="weather"),ae.time.classList.toggle("on",_e==="time"),Ct("b-traffic").classList.toggle("on",_e==="traffic"),ae.full.hidden=!(vp&&Qo),Gn(ae.full,Ba()?"🗗":"⛶",Ba()?"Thoát toàn màn hình":"Toàn màn hình");let r=(t,e,n,i=!1)=>{let s=Ct(t);return s.textContent=e,s.title=n,s.classList.toggle("on",i),s};r("q-speed",X.gear>0?Math.round(Ks[X.gear]*3.6)+" km/h":"Speed","Tốc độ: "+Math.round(Ks[X.gear]*3.6)+" km/h (phím F)",X.gear>0),r("q-pause",Dt.state==="parked"?"Resume":"Pause",Dt.state==="parked"?"Đi tiếp (phím P)":"Dừng xe (phím P)",Dt.active),r("q-car","Car","Xe: "+(dt.list[nt.car]?.name??"…")+" (phím C)"),r("q-cam","Camera","Camera: "+Ce[nt.cam].name+" (phím Q)"),r("q-driver","Driver","Nhân vật: "+(nt.character===1?"Chisa":"Người lái")+" (phím X)").disabled=ae.character.disabled,r("q-map","Map","Map: "+qn[nt.map].name+" (phím M)"),r("q-weather","Weather","Thời tiết: "+nn[nt.weather].name+" (phím R)"),r("q-time","Time","Thời gian: "+bn[nt.time].name+" (phím T)"),r("q-setting","Setting","Cài đặt (phím K)",!Ct("bar").hidden),up==="city"&&nt.started&&fp("city")}function QS(){try{let r=Ri.findIndex(t=>t.id===localStorage.getItem("chilldrive.quality"));if(r>=0)return r}catch{}return kd}function $v(){let r=Ri[nt.quality];Vo=r.id==="low"?r.ratio:Math.min(r.ratio,Math.max(1,window.devicePixelRatio||1)),Qo&&r.id==="good"&&(Vo=Math.min(Vo,1.25)),Qe.setPixelRatio(Vo),on.setSamples(r.msaa),Mr();for(let t of[Ko,Na,ka])t.setView(r.view),t.setDensity(r.veg);pn.setView(r.view,St.position),Ft.setShadowSize(r.shadow),Ua.enabled=r.refl,vs.setRadius(r.trees);try{localStorage.setItem("chilldrive.quality",r.id)}catch{}}var $S=()=>{nt.quality=(nt.quality+1)%Ri.length,$v(),Me(),Ki("Chất lượng · "+Ri[nt.quality].name)},Ki=r=>{nt.started&&Js(r,!1,1600)};function tx(){return Math.round(zt.focal)+"mm f/"+zt.aperture}var wr=!1,np=0;async function xp(r){if(Dt.active)return;r=dt.current?.def?.id==="mustang"?r%2:0;let t=++np;wr=!0,Me();let e;try{if(e=await new Do().load(r?"assets/models/chisa_wuthering_waves.glb":"assets/models/person.glb",{chisa:r===1}),t!==np||r&&dt.current?.def?.id!=="mustang"){e.dispose();return}ke.replace(e),nt.character=r,Dt.place(dt.dim),Dt.sit(),Ga(on.sceneRT,St,ke.root).catch(()=>{})}catch(n){e?.dispose(),console.warn("Không tải được nhân vật",n)}finally{t===np&&(wr=!1,Me())}}var Rh=()=>{if(!wr&&ke.ready&&dt.current?.def?.id==="mustang")return Ki("Nhân vật · "+((nt.character+1)%2===1?"Chisa":"Người lái")),xp(nt.character+1)};async function Ch(r){if(!Dt.active){nt.car=(r+dt.list.length)%dt.list.length,Gn(ae.car,"🚗","Đang tải…");try{if(!await dt.select(nt.car))return}catch(t){if(console.error("Không tải được xe",dt.list[nt.car].name,t),dt.list.length>1)return dt.list.splice(nt.car,1),Ch(nt.car)}dt.current?.def?.id!=="mustang"&&(nt.character||wr)&&await xp(0),ke.ready&&!Dt.active&&(Dt.place(dt.dim),Dt.sit()),za.place(dt.dim,dt.current.screen),Sh.place(dt.current.screen),pp.setCar(dt.current),ex(),Me()}}var Jo=()=>{if(!Dt.active)return Ki("Xe · "+dt.list[(nt.car+1)%dt.list.length].name),Ch(nt.car+1)};function Ph(){Yi.active||!ke.ready||!nt.started||wr||(Dt.state==="off"&&(Ep(0),Dt.place(dt.dim)),Dt.toggle(X.v)&&(Me(),Ki(Dt.state==="enter"?"Đi tiếp":"Dừng xe")))}var Cv=0;function Ga(r,t,e=Ae){let n=[];e.traverse(a=>{a.material&&!a.layers.test(t.layers)&&(n.push(a,a.material),a.material=null)});let i=Qe.getRenderTarget();Qe.setRenderTarget(r);let s=Qe.compileAsync(e,t,Ae);Qe.setRenderTarget(i);for(let a=0;a<n.length;a+=2)n[a].material=n[a+1];return s}Ft.onCarEnv=r=>dt.setEnvMap(r);Ft.carEnvRT&&dt.setEnvMap(Ft.carEnvRT.texture);dt.prepare=r=>Ga(on.sceneRT,St,r);Ah.onBuild=r=>{Ga(on.sceneRT,St,r).catch(()=>{})};function ex(r=500){clearTimeout(Cv),Cv=setTimeout(()=>{Ga(on.sceneRT,St).catch(t=>console.warn("warmup",t))},r)}var nx=()=>{let r=qn[nt.map].id;B0(r);let t=r==="city";if(we.halfWidth=t?be.hw:V0,pe.setShape(t),pe.dirt=r==="forest",pe.recomputeHeights(),r==="sea"){pe.ensure(X.s+12e4);let n=1/0;for(let i of pe.pts)n=Math.min(n,i.y);Se.seaLevel=n-3}Er.setMap(r==="sea",Se.seaLevel),Yn.setMap(r),pn.reset(),pn.setCar(X.s),pn.prime(St.position.lengthSq()?St.position:X.pos),Ko.visible=r==="reed",Na.visible=r==="forest",ka.visible=r==="meadow",Ah.visible=r==="meadow",Eh.reset(),Eh.visible=r==="mountain",ai.visible=t,ai.prime(X.s),mp.ground.clear(),vi.policy.city=t,Yi.active&&Yi.finish(),cn.visible=t,bs.visible=t,t&&vi.clearAll(),Ct("brake").hidden=!t,Ct("b-traffic").hidden=!t,!t&&_e==="traffic"&&tc(),Fa(),t&&nt.started&&Js("Map Phố: tự phanh khi gặp đèn đỏ — giữ phím Space hoặc nút Space"),qo=null;let e=up;up=r,e!==r&&(e==="city"?fp("city"):e!==null&&t&&fp("world"),t?Pv(Oa.city||ix()):e==="city"&&Oa.world&&Pv(Oa.world)),zt.sideDist=t?13:null,zt.orbitR=t?10:null,X.home=t?be.lanes[1]:Mh,gp.setMap(r),zt.sidePref=r==="mountain"?1:0,vs.setRadius(Ri[nt.quality].trees),zt.sideSign=0,ex()},Lh=()=>{nt.map=(nt.map+1)%qn.length,nx(),Me(),Ki("Map · "+qn[nt.map].name)};function Tr(){nt.fstop=Math.max(0,Vi.indexOf(zt.aperture)),Zs()}var _e=null,Sr=()=>{},bp=()=>{nt.cam=(nt.cam+1)%Ce.length,zt.setMode(nt.cam),Tr(),Me(),_e==="camera"&&Sr(),Ki("Camera · "+Ce[nt.cam].name)},hp=0,up=null,Oa={world:null,city:null};try{Oa.city=JSON.parse(localStorage.getItem("chilldrive.city"))}catch{}var ix=()=>({weather:nn.findIndex(r=>r.id==="auto"),time:bn.findIndex(r=>r.id==="auto"),cam:Ce.findIndex(r=>r.id==="chase")});function fp(r){if(Oa[r]={weather:nt.weather,time:nt.time,cam:nt.cam},r==="city")try{localStorage.setItem("chilldrive.city",JSON.stringify(Oa.city))}catch{}}function Pv(r){(!nn[r.weather]||!bn[r.time]||!Ce[r.cam])&&(r=ix()),yp(r.weather),nt.time=r.time,Ft.setTime(bn[r.time].hour),nt.cam=r.cam,zt.setMode(nt.cam),Tr()}var t2=[["clear",.34],["cloudy",.34],["rain",.16],["fog",.1],["storm",.06]];function yp(r,t=!1){nt.weather=r,nn[r].id==="auto"?hp=0:Ft.setWeather(nn[r].id)}function e2(r){if(nn[nt.weather].id!=="auto"||(hp-=r)>0)return;hp=150+Math.random()*150;let t=Math.random(),e="cloudy";for(let[n,i]of t2)if((t-=i)<0){e=n;break}e===Ft.weather&&(e=e==="clear"?"cloudy":"clear"),Ft.setWeather(e)}var _p=()=>{yp((nt.weather+1)%nn.length,!0),Me(),_e==="weather"&&Sr(),Ki("Thời tiết · "+nn[nt.weather].name)},Mp=()=>{nt.time=(nt.time+1)%bn.length,Ft.setTime(bn[nt.time].hour),bn[nt.time].id==="night"&&n2(.6,.6),Me(),_e==="time"&&Sr(),Ki("Thời gian · "+bn[nt.time].name)};function n2(r,t){nt.mistCover=r,nt.mistDens=t;for(let[e,n]of[["mist-cover","mistCover"],["mist-dens","mistDens"]])Ct(e).value=Math.round(nt[n]*100),Ct(e+"-v").textContent=Ct(e).value}var i2=()=>document.body.classList.toggle("cine",nt.cine&&nt.started);function Ep(r){let t=X.fast;X.gear=r,X.fast=r===2,X.target=Ks[Math.min(r,1)],X.fast!==t&&Zs()}var Ih=()=>{Dt.active||(Ep((X.gear+1)%Ks.length),Me(),Ki("Tốc độ · "+Math.round(Ks[X.gear]*3.6)+" km/h"))},sx=()=>{nt.music=(nt.music+1)%Lo.length,xs.setMode(nt.music),Me(),Ki("Âm thanh · "+Lo[nt.music].name)};ae.fast.onclick=Ih;var tc=()=>{_e=null,Ct("tunepanel").hidden=!0,Me()},rx=()=>{tc(),Ct("mistpanel").hidden=!Ct("mistpanel").hidden,Ct("lenspanel").hidden=!0,Me()};ae.mist.onclick=rx;var ax=()=>{tc(),Ct("lenspanel").hidden=!Ct("lenspanel").hidden,Ct("mistpanel").hidden=!0,Me()};ae.lens.onclick=ax;ae.quality.onclick=$S;ae.stop.onclick=Ph;ae.character.onclick=Rh;ae.full.onclick=Yv;var Dh=!1,dp=!1,qo=null,Oo=0,Lv=0,Iv=null,ip=0,sp=0,rp=!1;{let r=Ct("brake"),t=n=>{dp=!0,r.classList.add("on"),n.preventDefault()},e=()=>{dp=!1,r.classList.remove("on")};r.addEventListener("pointerdown",t);for(let n of["pointerup","pointerleave","pointercancel"])r.addEventListener(n,e)}function Js(r,t=!1,e=0){let n=Ct("toast");n.textContent=r,n.classList.toggle("bad",t),n.classList.add("show"),clearTimeout(Lv),Lv=setTimeout(()=>n.classList.remove("show"),e||(t?2800:4500))}Ct("b-shot").onclick=()=>{Dh=!0};function s2(){Dh=!1,_s.toBlob(async r=>{if(!r)return;let t="chill-drive-"+new Date().toISOString().slice(0,19).replace(/[T:]/g,"-")+".png",e=new File([r],t,{type:"image/png"});if(Qo&&navigator.canShare?.({files:[e]}))try{await navigator.share({files:[e]});return}catch{}let n=document.createElement("a");n.href=URL.createObjectURL(r),n.download=t,document.body.append(n),n.click(),n.remove(),setTimeout(()=>URL.revokeObjectURL(n.href),4e3)},"image/png")}var Va=Ct("lens-focal"),Zo=Ct("lens-fstop");Va.min=Yl;Va.max=Kl;Zo.max=Vi.length-1;var Zs=()=>{Va.value=Math.round(zt.focal),Ct("lens-focal-v").textContent=Math.round(zt.focal)+"mm",nt.fstop=Math.max(0,Vi.indexOf(zt.aperture)),Zo.value=nt.fstop,Ct("lens-fstop-v").textContent="f/"+zt.aperture};Va.addEventListener("input",()=>{let r=zt.tune[Ce[nt.cam].id];r.focal=zt.focal=Number(Va.value),Zs(),Me()});Zo.addEventListener("input",()=>{let r=zt.tune[Ce[nt.cam].id];nt.fstop=Number(Zo.value),r.aperture=zt.aperture=Vi[nt.fstop],Zs(),Me()});for(let r of[Va,Zo])r.addEventListener("change",()=>r.blur());Zs();for(let[r,t]of[["mist-cover","mistCover"],["mist-dens","mistDens"]]){let e=Ct(r);e.value=Math.round(nt[t]*100),Ct(r+"-v").textContent=e.value,e.addEventListener("input",()=>{nt[t]=e.value/100,Ct(r+"-v").textContent=e.value,Me()}),e.addEventListener("change",()=>e.blur())}var r2={chase:[["distance","Khoảng lùi (m)",1,20,.1],["height","Độ cao (m)",.2,8,.05],["carHeight","Theo chiều cao xe",0,1,.01],["lookAhead","Nhìn trước (m)",0,40,.5],["lookHeight","Cao điểm nhìn (m)",0,5,.05],["slopeLook","Bám dốc",0,25,.5],["speedBack","Lùi theo tốc độ",0,6,.1],["cineBack","Lùi cinematic",0,6,.1],["follow","Mượt vị trí",.2,20,.1],["lookFollow","Mượt điểm nhìn",.2,20,.1],["near","Cắt gần (m)",.02,2,.01]],low:[["distance","Khoảng lùi (m)",1,20,.1],["height","Độ cao (m)",.2,5,.05],["lookAhead","Nhìn trước (m)",0,40,.5],["lookHeight","Cao điểm nhìn (m)",0,5,.05],["slopeLook","Bám dốc",0,25,.5],["follow","Mượt vị trí",.2,20,.1],["lookFollow","Mượt điểm nhìn",.2,20,.1],["near","Cắt gần (m)",.02,2,.01]],side:[["distance","Khoảng ngang (m)",1,25,.1],["height","Độ cao (m)",.2,8,.05],["lookHeight","Tỉ lệ cao xe",0,1,.01],["follow","Mượt vị trí",.2,20,.1],["lookFollow","Mượt điểm nhìn",.2,20,.1],["near","Cắt gần (m)",.02,2,.01]],cockpit:[["eyeSide","Dịch ngang (m)",-.5,.5,.005],["eyeHeight","Dịch cao (m)",-.5,.5,.005],["eyeForward","Dịch trước (m)",-.5,.5,.005],["pitch","Góc chúc (rad)",-.2,.8,.005],["lookDistance","Tầm nhìn (m)",5,80,1],["follow","Mượt vị trí",.2,20,.1],["lookFollow","Mượt điểm nhìn",.2,20,.1],["near","Cắt gần (m)",.01,.5,.005]],orbit:[["radius","Bán kính (m)",1,30,.1],["height","Độ cao (m)",.2,12,.05],["heightWave","Nhấp nhô (m)",0,4,.05],["waveRate","Nhịp nhấp nhô",0,3,.05],["speed","Tốc độ quay",-.8,.8,.01],["lookHeight","Cao điểm nhìn (m)",0,5,.05],["follow","Mượt vị trí",.2,20,.1],["lookFollow","Mượt điểm nhìn",.2,20,.1],["near","Cắt gần (m)",.02,2,.01]],drone:[["distance","Khoảng lùi (m)",1,50,.5],["height","Độ cao (m)",2,50,.5],["lookAhead","Nhìn trước (m)",-10,40,.5],["lookHeight","Cao điểm nhìn (m)",0,8,.05],["follow","Mượt vị trí",.2,20,.1],["lookFollow","Mượt điểm nhìn",.2,20,.1],["near","Cắt gần (m)",.02,2,.01]]},a2=[["fog","Mật độ sương",0,.012,1e-4],["overcast","Độ âm u",0,1,.01],["clouds","Mây che phủ",0,1,.01],["sun","Cường độ nắng",0,2,.01],["rain","Lượng mưa",0,1,.01],["snow","Lượng tuyết",0,1,.01],["wet","Độ ướt đường",0,1,.01],["cover","Tuyết phủ đất",0,1,.01],["wind","Sức gió",0,1,.01],["dark","Độ tối",0,1,.01]],o2=[["exposure","Phơi sáng",.2,2.5,.01],["skyBrightness","Độ sáng trời",0,3,.01],["directLight","Ánh sáng chính",0,3,.01],["ambientLight","Ánh sáng phủ",0,3,.01],["sunGlow","Quầng mặt trời",0,3,.01],["sunDisc","Đĩa mặt trời",0,3,.01],["cloudBrightness","Độ sáng mây",0,3,.01],["rays","Tia sáng",0,3,.01]],c2=Ct("tunepanel"),_r=Ct("tune-mode"),ec=Ct("tune-fields"),Fh=()=>{try{localStorage.setItem(Zv,JSON.stringify({camera:zt.tune,weather:Ft.weatherProfiles,environment:Ft.tune,carLights:dt.headlights.tune,streetLights:Yn.lampTune,traffic:sn}))}catch{}},ji=r=>{let t=document.createElement("h4");t.textContent=r,ec.append(t)},Xn=({label:r,min:t,max:e,step:n,get:i,set:s})=>{let a=document.createElement("label"),o=document.createElement("span"),c=document.createElement("input"),l=document.createElement("input");o.textContent=r,c.type="range",l.type="number";for(let f of[c,l])f.min=t,f.max=e,f.step=n,f.value=i();let h=f=>{f=Ys(Number(f),Number(t),Number(e)),s(f),c.value=l.value=f,Fh()};c.oninput=()=>h(c.value),l.onchange=()=>{h(l.value),l.blur()},a.append(o,c,l),ec.append(a)},ap=({label:r,get:t,set:e})=>{let n=document.createElement("label"),i=document.createElement("span"),s=document.createElement("input");i.textContent=r,s.type="color",s.value=t(),s.oninput=()=>{e(s.value),Fh()},n.append(i,s),ec.append(n)},Dv=({label:r,options:t,get:e,set:n})=>{let i=document.createElement("label"),s=document.createElement("span"),a=document.createElement("select");s.textContent=r,t.forEach((o,c)=>{let l=document.createElement("option");l.value=c,l.textContent=o,l.selected=c===e(),a.append(l)}),a.onchange=()=>{n(Number(a.value)),Fh()},i.append(s,a),ec.append(i)},l2=()=>{let r=Ce[nt.cam].id,t=zt.tune[r];return r2[r].map(([e,n,i,s,a])=>({label:n,min:i,max:s,step:a,get:()=>t[e],set:o=>{t[e]=o,e==="near"&&(St.near=o,St.updateProjectionMatrix())}}))},Fv=()=>o2.map(([r,t,e,n,i])=>({label:t,min:e,max:n,step:i,get:()=>Ft.tune[r],set:s=>{Ft.tune[r]=s,Ft.envKey=""}}));Sr=()=>{if(!_e)return;if(ec.replaceChildren(),_r.replaceChildren(),_e==="traffic"){_r.hidden=!0,Ct("tune-title").textContent="Giao thông (map Phố)",ji("Xe của chú"),Dv({label:"Tự giữ khoảng cách (tránh đâm xe trước)",options:["Tắt — tự phanh, có thể đâm","Bật"],get:()=>sn.avoid,set:e=>{sn.avoid=e,Js(e?"Đã bật tự giữ khoảng cách":"Đã tắt tự giữ khoảng cách — chú tự phanh, đâm là có cảnh sát tới",!e)}}),ji("Xe và người"),Xn({label:"Mật độ xe (×)",min:.05,max:2.5,step:.05,get:()=>sn.density,set:e=>{sn.density=e,Fa()}}),Xn({label:"Tốc độ xe khác (×)",min:.4,max:2,step:.05,get:()=>sn.speed,set:e=>{sn.speed=e,Fa()}}),Xn({label:"Số người đi bộ",min:0,max:80,step:1,get:()=>sn.walkers,set:e=>{sn.walkers=e,Fa()}}),ji("Đèn giao thông"),Xn({label:"Độ dài pha đèn (×)",min:.3,max:3,step:.1,get:()=>sn.signal,set:e=>{sn.signal=e,Fa()}});return}if(_e==="carLight"||_e==="streetLight"){_r.hidden=!0;let e=_e==="carLight",n=e?dt.headlights.tune:Yn.lampTune;Ct("tune-title").textContent=e?"Đèn xe người chơi":"Đèn đường",ji(e?"Chùm sáng và quầng đèn":"Ánh sáng phủ mặt đường"),(e?[["intensity","Cường độ",0,300,1],["distance","Tầm chiếu (m)",10,250,1],["angle","Góc mở (rad)",.1,1.55,.01],["penumbra","Độ mềm viền",0,1,.01],["decay","Suy giảm",0,2,.01],["glowOpacity","Độ sáng quầng",0,2,.01],["glowSize","Kích thước quầng",.2,8,.05]]:[["intensity","Cường độ",0,500,1],["distance","Tầm phủ (m)",10,250,1],["angle","Góc mở (rad)",.1,1.55,.01],["penumbra","Độ mềm viền",0,1,.01],["decay","Suy giảm",0,2,.01],["glowOpacity","Độ sáng quầng",0,2,.01],["glowSize","Kích thước quầng",1,24,.1]]).map(([s,a,o,c,l])=>({label:a,min:o,max:c,step:l,get:()=>n[s],set:h=>{n[s]=h}})).forEach(Xn),ap({label:"Màu ánh sáng",get:()=>n.color,set:s=>{n.color=s}}),e&&ap({label:"Màu quầng",get:()=>n.glowColor,set:s=>{n.glowColor=s}});return}_r.hidden=!1;let r=_e==="camera"?Ce:_e==="weather"?nn:bn,t=nt[_e==="camera"?"cam":_e];if(r.forEach((e,n)=>{let i=document.createElement("option");i.value=n,i.textContent=e.name,i.selected=n===t,_r.append(i)}),Ct("tune-title").textContent=_e==="camera"?"Camera · "+Ce[nt.cam].name:_e==="weather"?"Thời tiết · "+nn[nt.weather].name:"Thời gian · "+bn[nt.time].name,_e==="camera"){let e=zt.tune[Ce[nt.cam].id];ji("Vị trí và chuyển động"),l2().forEach(Xn),ji("Ống kính"),Xn({label:"Tiêu cự (mm)",min:Yl,max:Kl,step:1,get:()=>e.focal,set:n=>{e.focal=zt.focal=n,Zs(),Me()}}),Dv({label:"Khẩu độ",options:Vi.map(n=>"f/"+n),get:()=>Math.max(0,Vi.indexOf(e.aperture)),set:n=>{e.aperture=zt.aperture=Vi[n],nt.fstop=n,Zs(),Me()}})}else if(_e==="weather"){let e=nn[nt.weather].id==="auto"?Ft.weather:nn[nt.weather].id,n=Ft.weatherProfiles[e];ji("Preset "+nn[nt.weather].name),a2.map(([i,s,a,o,c])=>({label:s,min:a,max:o,step:c,get:()=>n[i],set:l=>{n[i]=l,Ft.w[i]=l}})).forEach(Xn),ap({label:"Màu khí quyển",get:()=>n.tint,set:i=>{n.tint=i,Ft.tint.set(i),Ft.envKey=""}}),ji("Ánh sáng chung"),Fv().forEach(Xn)}else ji("Chu kỳ ngày đêm"),Xn({label:"Giờ hiện tại",min:0,max:23.99,step:.05,get:()=>Ft.hour,set:e=>{Ft.hour=e,Ft.tween=null,Ft.envKey=""}}),Xn({label:"Tốc độ tự chạy",min:0,max:1,step:.005,get:()=>Ft.tune.autoSpeed,set:e=>{Ft.tune.autoSpeed=e}}),Xn({label:"Hướng mặt trời",min:-3.142,max:3.142,step:.01,get:()=>Ft.tune.sunAzimuth,set:e=>{Ft.tune.sunAzimuth=e,Ft.envKey=""}}),Xn({label:"Hướng mặt trăng",min:-3.142,max:3.142,step:.01,get:()=>Ft.tune.moonAzimuth,set:e=>{Ft.tune.moonAzimuth=e,Ft.envKey=""}}),ji("Ánh sáng chung"),Fv().forEach(Xn)};var Wa=r=>{_e=r,Ct("mistpanel").hidden=Ct("lenspanel").hidden=!0,c2.hidden=!1,Sr(),Me()};_r.onchange=()=>{let r=Number(_r.value);_e==="camera"?(nt.cam=r,zt.setMode(r),Tr()):_e==="weather"?yp(r,!0):(nt.time=r,Ft.setTime(bn[r].hour)),Me(),Sr()};Ct("tune-close").onclick=tc;Ct("tune-reset").onclick=()=>{if(_e==="camera")zt.resetTune(Ce[nt.cam].id),Tr();else if(_e==="weather"){let r=nn[nt.weather].id==="auto"?Ft.weather:nn[nt.weather].id;Ft.resetWeather(r),Ft.resetTune(),Ft.snapWeather(r)}else _e==="time"?(Ft.resetTune(),Ft.setTime(bn[nt.time].hour)):_e==="carLight"?Object.assign(dt.headlights.tune,wl):_e==="traffic"?(Object.assign(sn,Qv),Fa()):Object.assign(Yn.lampTune,Jf);Fh(),Me(),Sr()};ae.car.onclick=Jo;ae.map.onclick=Lh;ae.cam.onclick=()=>Wa("camera");ae.weather.onclick=()=>Wa("weather");ae.time.onclick=()=>Wa("time");Ct("b-traffic").onclick=()=>_e==="traffic"?tc():Wa("traffic");ae.music.onclick=sx;var ox=()=>{Ct("bar").hidden=!Ct("bar").hidden,Me()};for(let[r,t]of[["q-speed",()=>Ih()],["q-pause",()=>Ph()],["q-car",()=>Jo()],["q-cam",()=>bp()],["q-driver",()=>Rh()],["q-map",()=>Lh()],["q-weather",()=>_p()],["q-time",()=>Mp()],["q-setting",ox]])Ct(r).onclick=e=>{t(),e.currentTarget.blur()};Ct("b-info").onclick=()=>{let r=Ct("credits");r.hidden=!r.hidden};window.addEventListener("keydown",r=>{if(r.repeat){yn.add(r.code);return}switch(yn.add(r.code),r.code){case"KeyC":Jo();break;case"KeyV":Jo();break;case"KeyQ":bp();break;case"KeyX":Rh();break;case"KeyM":Lh();break;case"KeyN":sx();break;case"KeyH":document.body.classList.toggle("hidehud");break;case"KeyT":Mp();break;case"KeyR":_p();break;case"KeyF":Ih();break;case"KeyG":rx();break;case"KeyL":ax();break;case"KeyP":Ph();break;case"KeyU":Yv();break;case"KeyK":ox();break;case"KeyO":Dh=!0;break}(r.code.startsWith("Arrow")||r.code==="Space")&&r.preventDefault()});window.addEventListener("keyup",r=>yn.delete(r.code));window.addEventListener("blur",()=>yn.clear());var ys=new Map,wh=new Map;function Th(r){Dt.active&&Dt.zoomBy(r)||zt.zoomBy(r)}var Yo=0,cx=()=>{let[r,t]=[...ys.values()];return Math.hypot(r.x-t.x,r.y-t.y)};_s.addEventListener("pointerdown",r=>{ys.set(r.pointerId,{x:r.clientX,y:r.clientY}),wh.set(r.pointerId,{x:r.clientX,y:r.clientY,moved:!1}),_s.setPointerCapture(r.pointerId),ys.size===1?(xi.active=!0,xi.id=r.pointerId,xi.x=r.clientX,xi.y=r.clientY,zt.look.hold=!0):ys.size===2&&(xi.active=!1,Yo=cx())});_s.addEventListener("pointermove",r=>{let t=ys.get(r.pointerId);if(!t)return;t.x=r.clientX,t.y=r.clientY;let e=wh.get(r.pointerId);if(e&&Math.hypot(r.clientX-e.x,r.clientY-e.y)>8&&(e.moved=!0),ys.size===2){let n=cx();Yo>0&&n>0&&Th(Yo/n),Yo=n}else if(xi.active&&r.pointerId===xi.id){let n=r.clientX-xi.x,i=r.clientY-xi.y;zt.lookBy(n*4.7/window.innerWidth,i*2.2/window.innerHeight),Dt.active&&Math.abs(n)+Math.abs(i)>0&&Dt.noteCameraInput(),xi.x=r.clientX,xi.y=r.clientY}});var lx=r=>{let t=wh.get(r.pointerId);if(t&&!t.moved&&r.type==="pointerup"){dt.root.updateWorldMatrix(!0,!0);let e=_s.getBoundingClientRect(),n=new T;dt.headGlow.some(s=>{if(!s.visible)return!1;s.getWorldPosition(n).project(St);let a=e.left+(n.x+1)*e.width*.5,o=e.top+(1-n.y)*e.height*.5;return n.z>=-1&&n.z<=1&&Math.hypot(r.clientX-a,r.clientY-o)<=56})?Wa("carLight"):Dt.active&&Yn.hitLamp(St,r.clientX,r.clientY,e)&&Wa("streetLight")}wh.delete(r.pointerId),ys.delete(r.pointerId),ys.size<2&&(Yo=0),ys.size===0&&(xi.active=!1,zt.look.hold=!1)};_s.addEventListener("pointerup",lx);_s.addEventListener("pointercancel",lx);_s.addEventListener("wheel",r=>{r.preventDefault();let t=r.deltaY*(r.deltaMode===1?33:r.deltaMode===2?400:1);Th(Math.exp(Ys(t,-200,200)*.0012))},{passive:!1});var Hv=0,hx=1/0,h2=()=>{performance.now()<hx||(document.body.classList.remove("idle"),clearTimeout(Hv),Hv=setTimeout(()=>document.body.classList.add("idle"),2e3))};["pointermove","pointerdown","touchstart"].forEach(r=>window.addEventListener(r,h2,{passive:!0}));window.addEventListener("pointerup",()=>{document.activeElement?.tagName==="BUTTON"&&document.activeElement.blur()});document.body.classList.add("idle");var n3=new T,Nv=performance.now(),op=0,js=0,Pi={},u2=3.5,jn={amt:0,range:0,samples:0,near:.1,far:1e3,focus:10,cocK:0,maxCoc:24},zo=new T;function f2(r){let t=Ce[nt.cam].id==="cockpit";zo.copy(X.pos).y+=.6,Dt.active&&zo.copy(Dt.cam.focus);let e=t&&!Dt.active?.8:Math.max(.5,St.position.distanceTo(zo));jn.focus+=(e-jn.focus)*(jn.amt>.01?1-Math.exp(-r*6):1);let n=zt.focalEff,i=zt.apertureS,s=jn.focus*1e3;if(jn.cocK=n*n/(i*Math.max(s-n,1))*(on.longSide/36)*u2,jn.maxCoc=Math.max(6,on.longSide*.0125),Dt.active)jn.range=Dt.cam.range;else if(t)jn.range=0;else{let a=St.position.x-zo.x,o=St.position.z-zo.z,c=Math.hypot(a,o)||1,l=Math.sin(X.yaw),h=Math.cos(X.yaw);jn.range=Math.abs((-l*a-h*o)/c)*dt.dim.length*.5+Math.abs((h*a-l*o)/c)*dt.dim.width*.5+.3}return jn.near=St.near,jn.far=St.far,jn.amt=js,jn.samples=Ri[nt.quality].dof,jn}var d2=new T;function p2(r,t){let e=zt.look,n=d2.copy(r).sub(t);if(Math.abs(e.yaw)>1e-4||Math.abs(e.pitch)>1e-4){let s=Math.cos(e.yaw),a=Math.sin(e.yaw);n.set(n.x*s+n.z*a,n.y,-n.x*a+n.z*s);let o=Math.hypot(n.x,n.z),c=n.length(),l=Ys(Math.atan2(n.y,o)+e.pitch,.03,1.35),h=c*Math.cos(l)/Math.max(o,.001);n.set(n.x*h,c*Math.sin(l),n.z*h)}St.position.copy(t).add(n);let i=Math.max(pn.heightAt(St.position.x,St.position.z)+.25,Er.group.visible?Er.level+1.2:-1/0);St.position.y<i&&(St.position.y=i)}var Ia=new T;function m2(){let r=dt.current?.steer;if(!r||!zt.eyeAt||!zt.eyeAt(Ia))return .2;dt.tilt.worldToLocal(Ia);let[,t,e]=r.n,n=1-t*t,i=-t*e,s=Math.hypot(n,i)||1,a=r.r*.65,o=r.c[1]-n/s*a,c=r.c[2]-i/s*a,l=Math.atan2(Ia.y-o,Ia.z-c),h=Math.atan(Math.tan(Ne.degToRad(St.fov)/2)*(1-2*Xv*js)),f=za.group.position,u=Math.atan2(f.y+za.size[1]/2+.012-Ia.y,Ia.z-f.z),d=l-h+.01,g=h-u-.015;return Ys(d<=g?d:g,-.1,.6)}var cp=new T,gs=new T,Xs=new T,Bo=new T,kv=new T,Uv=new T,Ov=.08,zv=new T,Bv=new T,Gv=new T;function g2(r){if(!r)return;ke.recline(r.recline||0);let t=dt.tilt.matrixWorld,[e,n,i]=r.foot,s=r.hip[0];for(let[a,o]of[["l",e],["r",2*s-e]])zv.set(o,n,i).applyMatrix4(t),Bv.set(0,1,-.6).transformDirection(t),Gv.set(0,.45,-1).transformDirection(t),ke.reachLeg(a,zv,Bv,Gv)}function v2(r){dt.root.updateMatrixWorld();let t=dt.tilt.matrixWorld;cp.fromArray(r.c).applyMatrix4(t),gs.fromArray(r.n).transformDirection(t),Xs.set(1,0,0).transformDirection(t),Xs.addScaledVector(gs,-Xs.dot(gs)).normalize(),Bo.crossVectors(gs,Xs);for(let[e,n]of[["r",-Ov],["l",Math.PI+Ov]]){let i=n+(dt.steerAngle||0),s=Math.cos(i),a=Math.sin(i),o=r.r+(r.grip?.radial??.02),c=r.grip?.depth??.065;kv.copy(cp).addScaledVector(Xs,s*o).addScaledVector(Bo,a*o).addScaledVector(gs,c);let l=Uv.copy(Xs).multiplyScalar(e==="r"?.25:-.25).addScaledVector(Bo,-1).addScaledVector(gs,.2);ke.reach(e,kv,l);let h=r.grip?.align?Uv.copy(Bo).multiplyScalar(s).addScaledVector(Xs,-a).multiplyScalar(e==="r"?1:-1):null;ke.faceGrip(e,gs,h);let f=e==="r"?1:-1,u=r.r-.01;ke.looseGrip(e,.15,(d,g)=>{let v=i+f*d/u;return g.copy(cp).addScaledVector(Xs,Math.cos(v)*u).addScaledVector(Bo,Math.sin(v)*u).addScaledVector(gs,.016)},gs)}}var Go=new T,x2=new T;function b2(){let r=Ft.state,t=on.rays;t.near=St.near,t.far=St.far;let e=r.rays*Ne.smoothstep(St.getWorldDirection(x2).dot(r.rayDir),.05,.5);e>.002&&(Go.copy(r.rayDir).multiplyScalar(1e3).add(St.position).project(St),e*=1-Ne.smoothstep(Math.max(Math.abs(Go.x),Math.abs(Go.y)),1,1.9),t.uv.set(Go.x*.5+.5,Go.y*.5+.5)),t.color.copy(r.rayCol).multiplyScalar(Math.max(e,0)*1.2)}function ux(r){let t=Ys((r-Nv)/1e3,0,.05);Nv=r,Da!==null&&(Da+=t,Da>=(Rv?.5:3)&&(Da=null,Ep(0),ep=!0,Rv&&(X.v=Xo)));let e=!nt.started||Da!==null,n=yn.has("ArrowLeft")||yn.has("KeyA"),i=yn.has("ArrowRight")||yn.has("KeyD"),s=Yi.active?0:(i?1:0)-(n?1:0);(yn.has("ArrowUp")||yn.has("KeyW"))&&(X.target+=2.5*t),(yn.has("ArrowDown")||yn.has("KeyS"))&&(X.target-=2.5*t),(yn.has("Equal")||yn.has("NumpadAdd"))&&Th(Math.exp(-1.2*t)),(yn.has("Minus")||yn.has("NumpadSubtract"))&&Th(Math.exp(1.2*t)),X.target=Ys(X.target,jS,YS),X.goal=X.fast?yh:X.target;let a=e?yh:Math.min(X.goal,vi.ctrl.maxV);if(e?X.v=yh:Dt.active?X.v=Dt.speed(X.v,t):Yi.active?X.v=Math.max(0,X.v-25*t):yn.has("Space")||yn.has("KeyB")||dp?X.v=Math.max(0,X.v-7.5*t):X.v+=Ys(a-X.v,-8*t,6*t),ep&&X.v<=Xo+.01&&(ep=!1,X.v=Xo,nt.cam=Ce.findIndex(_=>_.id===(qn[nt.map].id==="city"?"chase":"side")),zt.setMode(nt.cam),Tr(),Me()),X.s+=X.v*t,X.fx+=(XS(55*Ha,yh,X.v)-X.fx)*(1-Math.exp(-t*4)),s!==0)X.manual=!0;else if(X.manual){X.manual=!1;let _=qn[nt.map].id==="city"?be.lanes:[Mh];X.home=Math.sign(X.d||1)*_.reduce((M,y)=>Math.abs(Math.abs(X.d)-y)<Math.abs(Math.abs(X.d)-M)?y:M,_[0])}let o=vi.ctrl.lane??X.home,c=Dt.active?0:s!==0?s*(2.2+X.v*.06):(o-X.d)*.8*Math.min(1,X.v/3);X.latVel+=(c-X.latVel)*(1-Math.exp(-t*5)),X.d+=X.latVel*t;let l=we.halfWidth-.9;Math.abs(X.d)>l&&(X.d=Math.sign(X.d)*l,X.latVel=0),pe.ensure(X.s+8e3),pe.at(X.s,Pi),X.pos.set(Pi.x+Math.cos(Pi.th)*X.d,Pi.y,Pi.z-Math.sin(Pi.th)*X.d);let h=pe.at(X.s-2.5,{}).y,f=pe.at(X.s+2.5,{}).y;if(X.pitch+=(Math.atan2(f-h,5)-X.pitch)*(1-Math.exp(-t*6)),X.yaw=Pi.th-Math.atan2(X.latVel,Math.max(X.v,4))*.9,js+=((nt.cine&&nt.started?1:0)-js)*(1-Math.exp(-t*2.5)),zt.cine=js,dt.update(t,{pos:X.pos,yaw:X.yaw,pitch:X.pitch,speed:X.v,latVel:X.latVel,curvature:pe.curvature(X.s+Math.min(12,X.v*.4)),rough:pe.dirtAt(X.s)}),ke.ready){ke.root.visible=!Wv;let _=Ce[nt.cam].id==="cockpit"&&!Dt.active;ke.head.scale.setScalar(_?.001:1),dt.cabinLevel=_?(.35+.45*Ft.state.dayF)*(1+Ft.state.dark):0,ke.update(t);let M=dt.current?.steer,y=Dt.state==="off"||Dt.state==="stopping";ke.footShade.value=y?1:0,y&&(g2(dt.dim.seat),M&&v2(M))}if(Dt.active){let _=Dt.state;Dt.update(t,dt.root,X.v);let M=Dt.cam;p2(M.pos,M.look),St.lookAt(M.look);let y=zt.fovFor(M.focal),w=Dt.closeK>.01?.06:.3;(Math.abs(St.fov-y)>.01||St.near!==w)&&(St.fov=y,St.near=w,St.updateProjectionMatrix()),Dt.state==="off"&&(zt.setMode(nt.cam),zt.relP.copy(St.position).sub(X.pos),zt.relL.copy(M.look).sub(X.pos),zt.fov=St.fov,zt.look.yaw=zt.look.pitch=0),Dt.state!==_&&Me()}else zt.cockpitPitch=m2(),zt.update(t,{pos:X.pos,yaw:X.yaw,pitch:X.pitch,speed:X.v,dim:dt.dim,fx:X.fx,side:X.d>=0?-1:1});Ft.precip.setCar(dt.tilt,dt.dim),e2(t),Ft.update(t,X.pos);let u=Ft.state;Yn.update(X.s),Yn.apply(u),Yn.updateLights(St.position),Er.update(r/1e3,St.position,pe,X.s),gp.update(r/1e3,X.s,u.light,{d:X.d,v:X.v,dim:dt.dim,npcs:vi.active,cam:St,audio:xs}),Ko.visible&&Ko.update(r/1e3,St.position,pe,X.s,u),Na.group.visible=qn[nt.map].id==="forest"&&u.cover<.5,Na.visible&&Na.update(r/1e3,St.position,pe,X.s,u),ka.group.visible=qn[nt.map].id==="meadow"&&u.cover<.5,ka.visible&&ka.update(r/1e3,St.position,pe,X.s,u),Ah.update(t,X.s,pe,pn),pn.setCar(X.s),pn.update(St.position),vs.update(St.position,pn),pn.apply(u);let d=Ne.smoothstep,g=(qn[nt.map].id==="city"?0:1)*d(u.night,.35,.9)*(1-Math.min(1,u.rain*2))*(1-u.snow)*(1-u.cover)*(1-d(u.wind,.6,.9));if(mp.update(r/1e3,X.s,pe,pn,g,on.size.y/(2*Math.tan(Ne.degToRad(St.fov)/2)),Ae.fog.density),Sh.update(t,X.v*3.6,Ft.clock),Vv.update(t,Dt.smoking,u,on.size.y/(2*Math.tan(Ne.degToRad(St.fov)/2))),nt.started&&dt.current){let _=[{id:"player",s:X.s,d:X.d,speed:X.v,direction:1,width:dt.dim.width,length:dt.dim.length}];if(ke.ready&&["exit","parked","enter"].includes(Dt.state)&&(ke.root.getWorldPosition(Sv),_.push({id:"person",...Yd(Sv,pe,X.s),width:.8,length:.8,speed:0,direction:0})),vi.playerHome=X.home,vi.playerGoal=Dt.active?0:X.goal,cn.visible){cn.update(t,X.s,X.d,X.v,u.lamps,dt.dim.length),bs.update(t,X.s);let M=ai.stopAhead(X.s+dt.dim.length/2,1,0)<25;ip=X.v<.3&&!Yi.active&&!M?ip+t:0;let y=ip>7?cn.stuckBehind(X.s,X.d):[];for(let w of cn.cars)w.honk=!1;for(let w of y)w.honk=!0;if(y.length&&(sp-=t)<=0&&(sp=2+Math.random()*1.5,xs.horn(0,Math.min(1,1.2-(X.s-y[0].s)/40)),rp||(rp=!0,Js("📢 Xe phía sau đang bấm còi — chú đi tiếp đi!",!0))),y.length||(sp=0,rp=!1),Yi.update(t),_h=Math.max(0,_h-t),!Yi.active&&!Dt.active&&_h<=0){let w=dt.dim.length,L=dt.dim.width,E=cn.hitTest(X.s,X.d,w,L),A=E?null:bs.hitTest(X.s,X.d,w,L);(E&&(X.v>1.2||E.v>1.2)||A&&X.v>.8)&&(Oo++,qv=nt.cam,nt.cam=Ce.findIndex(D=>D.id==="orbit"),zt.setMode(nt.cam),Tr(),Me(),Yi.start(X.s,X.d,dt.dim,E?{car:E}:{ped:A}))}vi.ctrl.lane=null,vi.ctrl.maxV=Dt.active||!sn.avoid?1/0:cn.ctrl.maxV}else vi.update(t,X.s,X.d,pe,u.lamps,dt.current.def.id,_,xs)}if(ai.update(X.s,u.lamps,t,1,on.size.y/(2*Math.tan(Ne.degToRad(St.fov)/2)),Ae.fog.density),ai.visible&&nt.started&&!Dt.active&&dt.dim){let _=X.s+dt.dim.length/2;if(qo!==null&&_>qo&&X.d>0){let M=pe.junctionIndex(qo+To.stopA);pe.junction(M)-To.stopA<=_&&ai.mainLight(M)===2&&(Oo++,Js(`🚨 Vượt đèn đỏ! (lỗi thứ ${Oo})`,!0));let y=pe.nearJunction(_);for(let w of[y-8.4,y+8.4])Math.abs(_-w)<2&&X.v>.8&&Iv!==w&&bs.crossingNear(w,X.d)&&(Iv=w,Oo++,Js(`🚸 Không nhường người đi bộ! (lỗi thứ ${Oo})`,!0))}qo=_}Eh.update(X.s,pe,pn,u.lamps,on.size.y/(2*Math.tan(Ne.degToRad(St.fov)/2)),Ae.fog.density),dt.setLights(u.lamps),xs.setAmbient({speed:X.v,rain:u.rain,snow:u.snow,wind:u.wind,dark:u.dark,fx:X.fx,inCar:Ce[nt.cam].id==="cockpit"&&!Dt.active});let v=1-u.dark;dt.calm=u.dark;let m=.016*X.fx*X.fx*v;if(m>0){let _=r/1e3;St.position.x+=(Math.sin(_*11.3)+Math.sin(_*17.9)*.6)*m,St.position.y+=(Math.sin(_*13.7)+Math.sin(_*23.1)*.5)*m*.7}let p=js*v;if(p>.01){let _=r/1e3;St.position.x+=Math.sin(_*.37)*.014*p,St.position.y+=Math.sin(_*.53)*.012*p,St.rotateZ((Math.sin(_*.31)*.0045+Math.sin(_*.83)*.002)*p)}op-=t,op<=0&&(Ct("speed").textContent=Math.round(X.v*3.6),Ct("clock").textContent=Ft.clock,ae.lens.title!==tx()&&(Me(),Zs()),$o(),op=.25),Bi.uMistD.value=.05*nt.mistDens*nt.mistDens,Bi.uMistH.value=3+70*Math.pow(nt.mistCover,1.4),Bi.uMistCover.value=nt.mistCover,Bi.uMistBase.value=X.pos.y-1.5,Bi.uMistT.value=r/1e3,Bi.uMistWind.value.copy(u.windDir).multiplyScalar(.0012+.006*u.wind),Bi.uMistColor.value.copy(u.mistColor),Ft.mistCover=nt.mistCover,Ft.mistDens=nt.mistDens,u.wet>.001?Ua.render(Ae,St,X.pos.y+.05):Ua.active=!1,Yn.setReflection(Ua,r/1e3);let x=Ce[nt.cam].id==="cockpit"&&!Dt.active;za.group.visible=x,x&&za.render(Ae,dt.tilt),pp.render(Ae,St,x),Wo.update(t,Dt.active?0:u.rain,X.v);let b=x?Wo.wet:0;dt.shield&&dt.setWiper(Wo.angle(dt.shield.sweep)),on.begin(),Qe.render(Ae,St),b2(),Wo.apply(on.final.uniforms,b>.01?b:0,St,dt.tilt,dt.shield,r/1e3,dt.rearShield),on.renderGlassMask(St,dt.tilt,dt.rearShield),on.render(r/1e3,js,X.fx,f2(t)),Dh&&s2(),requestAnimationFrame(ux)}async function y2(){$v(),Ft.setTime(bn[nt.time].hour),Ft.hour=bn[nt.time].hour,Ft.snapWeather(nn[nt.weather].id==="auto"?"cloudy":nn[nt.weather].id),Ft.onThunder=(e,n)=>xs.thunder(e,n),pe.ensure(X.s+8e3),pe.at(X.s,Pi),X.pos.set(Pi.x,Pi.y,Pi.z),nx(),await dt.probe(),Me(),requestAnimationFrame(ux);let r=Ct("start");Ct("hint").textContent="Chạm hoặc nhấn phím bất kỳ để bắt đầu",dt.onProgress=e=>Gn(ae.car,"🚗","Đang tải… "+Math.round(e*100)+"%"),vs.load("assets/models/nature.glb").then(()=>{vs.rockGeos.length&&(pn.rockGeos=vs.rockGeos),pn.reset(),pn.prime(St.position.lengthSq()?St.position:X.pos),vs.setRadius(Ri[nt.quality].trees),Ga(on.sceneRT,St,vs.group).catch(()=>{})}).catch(e=>console.warn("Không tải được cây / đá chi tiết",e)),Ch(0).then(()=>ke.load("assets/models/person.glb")).then(()=>{dt.tilt.add(ke.root),dt.current&&(Dt.place(dt.dim),Dt.sit()),Ga(on.sceneRT,St,ke.root).catch(()=>{}),Me()}).catch(e=>console.warn("Không tải được người lái",e));let t=e=>{r.classList.add("gone"),nt.started=!0,hx=performance.now()+1200,document.body.classList.add("playing"),i2(),Da=0,xs.start().catch(n=>console.warn("Audio:",n)),window.removeEventListener("keydown",t),r.removeEventListener("pointerdown",t)};r.addEventListener("pointerdown",t),window.addEventListener("keydown",t)}y2();window.__app={city:ai,cityTraffic:cn,cityPeople:bs,incident:Yi,ocean:Er,waterfalls:gp,wing:pp,audio:xs,smoke:Vv,cows:Ah,traffic:vi,dash:Sh,town:Eh,fireflies:mp,wipers:Wo,meadow:ka,nature:vs,person:ke,stop:Dt,toggleStop:()=>Ph(),refl:Ua,MIST:Bi,forceCine:r=>{js=r},post:on,toggleFast:Ih,env:Ft,cars:dt,rig:zt,drive:X,state:nt,nextCharacter:Rh,chooseCharacter:xp,nextCar:Jo,nextMap:Lh,nextCam:bp,nextWeather:_p,nextTime:Mp,chooseCar:Ch,renderer:Qe,scene:Ae,camera:St,scenery:Yn,terrain:pn,reeds:Ko,grass:Na,road:pe};
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
