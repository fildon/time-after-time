(()=>{var at=Object.create;var j=Object.defineProperty;var st=Object.getOwnPropertyDescriptor;var ct=Object.getOwnPropertyNames;var ut=Object.getPrototypeOf,lt=Object.prototype.hasOwnProperty;var R=(t,n)=>()=>(n||t((n={exports:{}}).exports,n),n.exports);var ht=(t,n,r,e)=>{if(n&&typeof n=="object"||typeof n=="function")for(let i of ct(n))!lt.call(t,i)&&i!==r&&j(t,i,{get:()=>n[i],enumerable:!(e=st(n,i))||e.enumerable});return t};var M=(t,n,r)=>(r=t!=null?at(ut(t)):{},ht(n||!t||!t.__esModule?j(r,"default",{value:t,enumerable:!0}):r,t));var D=R((kt,V)=>{V.exports=function(n){var r=String.prototype.split,e=/()??/.exec("")[1]===n,i;return i=function(o,a,h){if(Object.prototype.toString.call(a)!=="[object RegExp]")return r.call(o,a,h);var s=[],p=(a.ignoreCase?"i":"")+(a.multiline?"m":"")+(a.extended?"x":"")+(a.sticky?"y":""),f=0,a=new RegExp(a.source,p+"g"),l,u,g,S;for(o+="",e||(l=new RegExp("^"+a.source+"$(?!\\s)",p)),h=h===n?-1>>>0:h>>>0;(u=a.exec(o))&&(g=u.index+u[0].length,!(g>f&&(s.push(o.slice(f,u.index)),!e&&u.length>1&&u[0].replace(l,function(){for(var A=1;A<arguments.length-2;A++)arguments[A]===n&&(u[A]=n)}),u.length>1&&u.index<o.length&&Array.prototype.push.apply(s,u.slice(1)),S=u[0].length,f=g,s.length>=h)));)a.lastIndex===u.index&&a.lastIndex++;return f===o.length?(S||!a.test(""))&&s.push(""):s.push(o.slice(f)),s.length>h?s.slice(0,h):s},i}()});var q=R((Ht,_)=>{var dt=[].indexOf;_.exports=function(t,n){if(dt)return t.indexOf(n);for(var r=0;r<t.length;++r)if(t[r]===n)return r;return-1}});var z=R((Ot,F)=>{var L=q();F.exports=ft;function ft(t){var n=t.classList;if(n)return n;var r={add:e,remove:i,contains:o,toggle:c,toString:h,length:0,item:s};return r;function e(a){var l=p();L(l,a)>-1||(l.push(a),f(l))}function i(a){var l=p(),u=L(l,a);u!==-1&&(l.splice(u,1),f(l))}function o(a){return L(p(),a)>-1}function c(a){return o(a)?(i(a),!1):(e(a),!0)}function h(){return t.className}function s(a){var l=p();return l[a]||null}function p(){var a=t.className;return mt(a.split(" "),pt)}function f(a){var l=a.length;t.className=a.join(" "),r.length=l;for(var u=0;u<a.length;u++)r[u]=a[u];delete a[l]}}function mt(t,n){for(var r=[],e=0;e<t.length;e++)n(t[e])&&r.push(t[e]);return r}function pt(t){return!!t}});var X=R(()=>{});var w=R((It,U)=>{var gt=D(),yt=z(),K=typeof window>"u"?X():window,C=K.document,xt=K.Text;function Q(){var t=[];function n(){var r=[].slice.call(arguments),e=null;function i(o){var c;function h(a){var l=gt(a,/([\.#]?[^\s#.]+)/);/^\.|#/.test(l[1])&&(e=C.createElement("div")),J(l,function(u){var g=u.substring(1,u.length);!u||(e?u[0]==="."?yt(e).add(g):u[0]==="#"&&e.setAttribute("id",g):e=C.createElement(u))})}if(o!=null){if(typeof o=="string")e?e.appendChild(c=C.createTextNode(o)):h(o);else if(typeof o=="number"||typeof o=="boolean"||o instanceof Date||o instanceof RegExp)e.appendChild(c=C.createTextNode(o.toString()));else if(vt(o))J(o,i);else if(I(o))e.appendChild(c=o);else if(o instanceof xt)e.appendChild(c=o);else if(typeof o=="object")for(var s in o)if(typeof o[s]=="function")/^on\w+/.test(s)?function(a,l){e.addEventListener?(e.addEventListener(a.substring(2),l[a],!1),t.push(function(){e.removeEventListener(a.substring(2),l[a],!1)})):(e.attachEvent(a,l[a]),t.push(function(){e.detachEvent(a,l[a])}))}(s,o):(e[s]=o[s](),t.push(o[s](function(a){e[s]=a})));else if(s==="style")if(typeof o[s]=="string")e.style.cssText=o[s];else for(var p in o[s])(function(a,l){if(typeof l=="function")e.style.setProperty(a,l()),t.push(l(function(g){e.style.setProperty(a,g)}));else var u=o[s][a].match(/(.*)\W+!important\W*$/);u?e.style.setProperty(a,u[1],"important"):e.style.setProperty(a,o[s][a])})(p,o[s][p]);else if(s==="attrs")for(var f in o[s])e.setAttribute(f,o[s][f]);else s.substr(0,5)==="data-"?e.setAttribute(s,o[s]):e[s]=o[s];else if(typeof o=="function"){var f=o();e.appendChild(c=I(f)?f:C.createTextNode(f)),t.push(o(function(l){I(l)&&c.parentElement?(c.parentElement.replaceChild(l,c),c=l):c.textContent=l}))}}return c}for(;r.length;)i(r.shift());return e}return n.cleanup=function(){for(var r=0;r<t.length;r++)t[r]();t.length=0},n}var bt=U.exports=Q();bt.context=Q;function I(t){return t&&t.nodeName&&t.nodeType}function J(t,n){if(t.forEach)return t.forEach(n);for(var r=0;r<t.length;r++)n(t[r],r)}function vt(t){return Object.prototype.toString.call(t)=="[object Array]"}});var W=M(w());var G=M(w());var y=(...t)=>{let n=document.createElementNS("http://www.w3.org/2000/svg","svg");return n.setAttribute("viewBox","-100 -100 200 200"),t.forEach(r=>n.appendChild(r)),n},Y=(...t)=>{let n=document.createElementNS("http://www.w3.org/2000/svg","g");return t.forEach(r=>n.appendChild(r)),n},d=({color:t="black",strokeWidth:n=5,x1:r=0,x2:e=0,y1:i=0,y2:o=0,children:c=[]}={})=>{let h=document.createElementNS("http://www.w3.org/2000/svg","line");return Object.entries({x1:r.toString(),x2:e.toString(),y1:i.toString(),y2:o.toString(),stroke:t,"stroke-width":n.toString(),"stroke-linecap":"round"}).forEach(([s,p])=>h.setAttribute(s,p)),c.forEach(s=>h.appendChild(s)),h},x=({cx:t=0,cy:n=0,r=95,strokeWidth:e=5}={})=>{let i=document.createElementNS("http://www.w3.org/2000/svg","circle");return Object.entries({cx:t.toString(),cy:n.toString(),r:r.toString(),stroke:"black",fill:"transparent","stroke-width":e.toString()}).forEach(([o,c])=>i.setAttribute(o,c)),i},P=({color:t="black",yOffset:n=10,width:r=100,fill:e="transparent"}={})=>{let i=document.createElementNS("http://www.w3.org/2000/svg","rect");return Object.entries({"stroke-width":"2",fill:e,height:"50",stroke:t,width:r.toString(),x:"-90",y:n.toString()}).forEach(([o,c])=>i.setAttribute(o,c)),i},m=({startOffset:t,duration:n,reverse:r=!1})=>{let e=document.createElementNS("http://www.w3.org/2000/svg","animateTransform"),[i,o]=[`${360*t} 0 0`,`${360*t+360} 0 0`];return r&&([i,o]=[o,i]),Object.entries({attributeName:"transform",attributeType:"XML",type:"rotate",from:i,to:o,dur:n,repeatCount:"indefinite"}).forEach(([c,h])=>e.setAttribute(c,h)),e};var T=t=>n=>{let r=n.getDay(),e=n.getHours(),i=n.getMinutes(),o=n.getSeconds(),c=n.getMilliseconds();return(24*60*60*1e3*r+60*60*1e3*e+60*1e3*i+1e3*o+c)/1e3%t/t},Z=T(604800),tt=T(24*60*60),E=T(12*60*60),b=T(60*60),v=T(60);var wt=()=>new Array(12).fill(null).map((t,n)=>{let r=n/12,e=Math.sin(r*Math.PI*2),i=-Math.cos(r*Math.PI*2);return d({x1:95*e,x2:90*e,y1:95*i,y2:90*i})}),et=t=>{let n=d({y2:-60,children:[m({startOffset:E(t),duration:"12h"})]}),r=d({y2:-80,children:[m({startOffset:b(t),duration:"60min"})]}),e=d({strokeWidth:3,y2:-80,children:[m({startOffset:v(t),duration:"60s"})]}),i=y(x(),...wt(),n,r,e);return(0,G.default)("article",(0,G.default)("h2","12 hour clock face"),i)};var k=M(w());var Tt=()=>new Array(24).fill(null).map((t,n)=>{let r=n/24,e=Math.sin(r*Math.PI*2),i=-Math.cos(r*Math.PI*2),o=n%2===0?10:5;return d({x1:95*e,x2:(95-o)*e,y1:95*i,y2:(95-o)*i,color:n%2===0?"black":"blue"})}),rt=t=>{let n=d({y2:-60,color:"blue",children:[m({startOffset:tt(t),duration:"24h"})]}),r=d({y2:-80,children:[m({startOffset:b(t),duration:"60min"})]}),e=d({strokeWidth:3,y2:-80,children:[m({startOffset:v(t),duration:"60s"})]}),i=y(...Tt(),x(),n,r,e);return(0,k.default)("article",(0,k.default)("h2","24 hour clock face"),(0,k.default)("p",`
        The usual 12 radial markers are displayed in large.
        An additional 12 smaller blue markers are interleaved providing 24 markers, one for each hour of the day.
        The hour hand (displayed in blue) moves only a half as fast as on a conventional 12 hour clock face.
        It completes one rotation only once per full day.
      `),i)};var H=M(w());var Mt=()=>new Array(7).fill(null).map((t,n)=>{let r=n/7,e=Math.sin(r*Math.PI*2),i=-Math.cos(r*Math.PI*2);return d({x1:95*e,x2:90*e,y1:95*i,y2:90*i,color:"green"})}),nt=t=>{let n=d({y2:-60,color:"green",children:[m({startOffset:Z(t),duration:"168h"})]}),r=d({y2:-60,children:[m({startOffset:E(t),duration:"12h"})]}),e=d({y2:-80,children:[m({startOffset:b(t),duration:"60min"})]}),i=d({strokeWidth:3,y2:-80,children:[m({startOffset:v(t),duration:"60s"})]}),o=y(...Mt(),x(),n,r,e,i);return(0,H.default)("article",(0,H.default)("h2","7 day clock face"),(0,H.default)("p",`
        There are 7 days in a week.
        The day hand (displayed in green) treats the midnight between Saturday and Sunday as the start of the week.
        It completes a full rotation exactly once per week.
        Each radial marker represents one day.
      `),o)};var O=M(w());var Et=t=>new Array(12).fill(null).map((n,r)=>{let e=r/12,i=Math.sin(e*Math.PI*2),o=-Math.cos(e*Math.PI*2);return d({x1:94*i,y1:94*o,x2:85*i,y2:85*o,color:r===0?"red":"black",children:[m({duration:"12h",startOffset:1-E(t),reverse:!0})]})}),St=t=>new Array(60).fill(null).map((n,r)=>{let e=r/60,i=Math.sin(e*Math.PI*2),o=-Math.cos(e*Math.PI*2),c=r%5===0?10:5;return d({x1:75*i,y1:75*o,x2:(75-c)*i,y2:(75-c)*o,strokeWidth:2,color:r===0?"red":"black",children:[m({duration:"1h",startOffset:1-b(t),reverse:!0})]})}),Rt=t=>new Array(60).fill(null).map((n,r)=>{let e=r/60,i=Math.sin(e*Math.PI*2),o=-Math.cos(e*Math.PI*2),c=r%5===0?10:5;return d({x1:55*i,y1:55*o,x2:(55-c)*i,y2:(55-c)*o,strokeWidth:2,color:r===0?"red":"black",children:[m({duration:"60s",startOffset:1-v(t),reverse:!0})]})}),ot=t=>{let n=x(),r=x({r:75}),e=x({r:55}),i=Et(t),o=St(t),c=Rt(t),h=d({y2:-97,strokeWidth:1,color:"blue"}),s=y(...i,...o,...c,n,r,e,h);return(0,O.default)("article",(0,O.default)("h2","Concentric Rings"),(0,O.default)("p",`
        Concentric rings rotate anticlockwise around a common centre.
        The outer most ring rotates once every 12 hours.
        The middle ring once every hour.
        The innermost ring once every minute.
        Red markers correspond to the zero on each ring.
        A static blue hand marks the vertical.
        The static hand can be thought of as moving relatively clockwise compared to the faces.
      `),s)};var N=M(w());var $=(t,n,r,e,i)=>{let c=T(n)(t),h=document.createElementNS("http://www.w3.org/2000/svg","animate");Object.entries({id:`${e}first`,attributeName:"width",values:`${c*180};180`,dur:`${n-c*n}s`,begin:`0s;${e}second.end`}).forEach(([u,g])=>h.setAttribute(u,g));let s=document.createElementNS("http://www.w3.org/2000/svg","animate");Object.entries({id:`${e}second`,attributeName:"width",values:`0;${c*180}`,dur:`${c*n}s`,begin:`${e}first.end`}).forEach(([u,g])=>s.setAttribute(u,g));let p=P({color:"green",fill:"green",yOffset:r});p.appendChild(h),p.appendChild(s);let f=180/i,a=new Array(i-1).fill(null).map((u,g)=>{let S=(g+1)*f-90;return d({x1:S,y1:r,x2:S,y2:r+5,strokeWidth:1})}),l=P({yOffset:r,width:180});return Y(p,...a,l)},it=t=>{let n=$(t,86400,-95,"hour",24),r=$(t,60*60,-25,"minute",12),e=$(t,60,45,"second",12),i=y(n,r,e);return(0,N.default)("article",(0,N.default)("h2","Loading Bar"),(0,N.default)("p",`
        The three clock hands are replaced with loading bars.
        The first bar shows progress from midnight to midnight.
        The second bar shows progress in the current hour.
        The third bar shows progress in the current minute.
      `),i)};var B=document.getElementsByTagName("main")[0];B.appendChild((0,W.default)("h1","Time after Time"));B.appendChild((0,W.default)("p","An exploration of alternative visualizations of time"));var Ct=new Date;[et,rt,nt,ot,it].forEach(t=>B.appendChild(t(Ct)));})();
/*!
 * Cross-Browser Split 1.1.1
 * Copyright 2007-2012 Steven Levithan <stevenlevithan.com>
 * Available under the MIT License
 * ECMAScript compliant, uniform cross-browser split method
 */
//# sourceMappingURL=index.js.map
