(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),c=n(2),l=n.n(c),r=(n(11),n(14));var i=()=>{const[e,t]=Object(o.useState)(null),[n,c]=Object(o.useState)(20),[l,i]=Object(o.useState)(0),s=(Object(o.useRef)(null),Object(o.useRef)(null)),[d,w]=Object(o.useState)(!1);Object(o.useEffect)(()=>{(async()=>{window.cv?w(!0):await new Promise((e,t)=>{const n=document.createElement("script");n.src="https://docs.opencv.org/3.4/opencv.js",n.async=!0,n.onload=(()=>{window.cv.onRuntimeInitialized=(()=>{w(!0)}),e()}),n.onerror=t,document.head.appendChild(n)})})()},[]),Object(o.useEffect)(()=>{e&&d&&u()},[n,e,d]);const u=()=>{const t=new Image;t.src=e,t.onload=(()=>{const e=s.current,n=e.getContext("2d"),o=window.innerWidth,a=window.innerHeight;let c=t.width,l=t.height;c>o&&(l*=o/c,c=o),l>a&&(c*=a/l,l=a),e.width=c,e.height=l,n.drawImage(t,0,0,c,l),d?h(e):console.error("OpenCV is not loaded")})},h=e=>{if(!window.cv)return void console.error("OpenCV is not loaded");const t=window.cv.imread(e),o=new window.cv.Mat;window.cv.cvtColor(t,t,window.cv.COLOR_RGBA2GRAY,0),window.cv.Canny(t,o,100,200,3,!1);const a=new window.cv.MatVector,c=new window.cv.Mat;window.cv.findContours(o,a,c,window.cv.RETR_CCOMP,window.cv.CHAIN_APPROX_SIMPLE);const l=[],i=55-n;for(let n=0;n<a.size();n++){const e=a.get(n);for(let t=0;t<e.size().height;t+=i){const n=e.intPtr(t);l.push([n[0],n[1]])}}l.push([0,0]),l.push([e.width,0]),l.push([0,e.height]),l.push([e.width,e.height]);let s=r.a.from(l),d=s.triangles;const w=[...l];for(let n=0;n<d.length;n+=3){const e=l[d[n]],t=l[d[n+1]],o=l[d[n+2]];if(Math.abs((e[0]*(t[1]-o[1])+t[0]*(o[1]-e[1])+o[0]*(e[1]-t[1]))/2)>5e3){const n=(e[0]+t[0]+o[0])/3,a=(e[1]+t[1]+o[1])/3;w.push([n,a])}}d=(s=r.a.from(w)).triangles,m(e,w,d),t.delete(),o.delete(),a.delete(),c.delete()},m=(e,t,n)=>{const o=e.getContext("2d"),a=o.getImageData(0,0,e.width,e.height).data;i(n.length/3);for(let c=0;c<n.length;c+=3){const l=t[n[c]],r=t[n[c+1]],i=t[n[c+2]],s=(l[0]+r[0]+i[0])/3,d=(l[1]+r[1]+i[1])/3,w=4*(Math.floor(d)*e.width+Math.floor(s)),u=a[w],h=a[w+1],m=a[w+2];o.beginPath(),o.moveTo(l[0],l[1]),o.lineTo(r[0],r[1]),o.lineTo(i[0],i[1]),o.closePath(),o.fillStyle="rgb(".concat(u,", ").concat(h,", ").concat(m,")"),o.fill()}};return a.a.createElement("div",null,a.a.createElement("input",{type:"file",onChange:e=>{const n=e.target.files[0],o=new FileReader;o.onload=(e=>{t(e.target.result)}),o.readAsDataURL(n)}}),a.a.createElement("div",null,a.a.createElement("label",{htmlFor:"frequency"},"Frequency:"),a.a.createElement("input",{type:"range",id:"frequency",name:"frequency",min:"5",max:"50",value:n,onChange:e=>c(parseInt(e.target.value,10))})),a.a.createElement("div",null,"# of Triangles: ",l)," ",e&&a.a.createElement("div",null,a.a.createElement("canvas",{ref:s})))};var s=()=>a.a.createElement("div",null,a.a.createElement("h1",null,"Poly Molly"),a.a.createElement(i,null));l.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(s,null)),document.getElementById("root"))},3:function(e,t,n){e.exports=n(12)}},[[3,1,2]]]);
//# sourceMappingURL=main.d04f410c.chunk.js.map