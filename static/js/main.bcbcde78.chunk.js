(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,t,n){e.exports=n(30)},30:function(e,t,n){"use strict";n.r(t);var o=n(23),l=n(24),a=n(27),r=n(25),c=n(28),i=n(0),s=n.n(i),u=n(5),h=n(26),m=n.n(h),b=document.getElementsByClassName("photo-url"),g=[];console.log("start to collect photos urls");for(var p=0;p<b.length;p++){var d=b[p].getAttribute("data-img-name"),f=d.replace(/thumbnails/,"originals");console.log("photo url ",f),console.log("photo thumbnail ",d),g[p]={src:f,thumbnail:d,thumbnailWidth:320,thumbnailHeight:320}}console.log("finish to collect photos urls");var w=function(e){function t(){return Object(o.a)(this,t),Object(a.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(m.a,{images:g,rowHeight:320,enableImageSelection:!1}))}}]),t}(s.a.Component);Object(u.render)(s.a.createElement(w,null),document.getElementById("galery"))}},[[29,2,1]]]);
//# sourceMappingURL=main.bcbcde78.chunk.js.map