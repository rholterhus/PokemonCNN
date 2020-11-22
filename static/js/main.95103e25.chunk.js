(this["webpackJsonpreact-example"]=this["webpackJsonpreact-example"]||[]).push([[0],{33:function(e,t,a){e.exports=a(56)},38:function(e,t,a){},45:function(e,t){},46:function(e,t){},47:function(e,t){},48:function(e,t){},49:function(e,t){},50:function(e,t){},51:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(30),i=a.n(r),l=(a(38),a(6)),c=a.n(l),s=a(12),u=a(8),d=(a(51),a(16)),p=a(17),h=a(20),g=a(18),m=a(21),b=a(2),f={container:{display:"flex",justifyContent:"center",height:"100%",width:"100%",padding:"0"},middle:{width:"100%",height:"20%",padding:"0",display:"flex",justifyContent:"center"},mainCircle:{position:"absolute",height:"150px",width:"150px",borderRadius:"100px 100px 100px 100px",backgroundColor:"black"},centerLine:{position:"absolute",height:"5px",width:"100%",padding:"0",backgroundColor:"black",zIndex:"10"},topSemiCircle:{position:"absolute",transform:"translate(0, -44px)",height:"30px",width:"120px",borderRadius:"100px 100px 0 0",backgroundColor:"white",cursor:"pointer"},bottomSemiCircle:{position:"absolute",transform:"translate(0, 44px)",height:"30px",width:"120px",borderRadius:"0 0 100px 100px",backgroundColor:"white",cursor:"pointer"},blackbar:{position:"absolute",backgroundColor:"black",height:"15%",width:"100%",padding:"0"}},v=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(o)))).state={navigateToUpload:!1,navigateToDraw:!1},a.setHovered=function(e){e.target.style.backgroundColor="gray"},a.setUnhovered=function(e){e.target.style.backgroundColor="white"},a}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;return this.state.navigateToUpload?o.a.createElement(b.a,{to:"/upload",push:!0}):this.state.navigateToDraw?o.a.createElement(b.a,{to:"/draw",push:!0}):o.a.createElement("div",{style:f.container},o.a.createElement("div",{style:f.middle},o.a.createElement("div",{style:f.blackbar}),o.a.createElement("div",{style:f.mainCircle}),o.a.createElement("div",{style:f.centerLine}),o.a.createElement("div",{style:f.topSemiCircle,onMouseEnter:this.setHovered,onMouseLeave:this.setUnhovered,onClick:function(){return e.setState({navigateToUpload:!0})}},"Upload Image"),o.a.createElement("div",{style:f.bottomSemiCircle,onMouseEnter:this.setHovered,onMouseLeave:this.setUnhovered,onClick:function(){return e.setState({navigateToDraw:!0})}},"Free Draw")))}}]),t}(o.a.Component),w=a(32),y=a(19),x=Object(y.a)({container:{height:"100%",width:"100%",padding:"0",backgroundColor:"white",color:"white"},uploader:{backgroundColor:"red"},label:{backgroundImage:'url("https://www.pngitem.com/pimgs/m/95-958057_whos-that-pokemon-hd-png-download.png")',backgroundSize:"cover",backgroundRepeat:"no-repeat",position:"absolute",left:"10%",top:"200px",height:"280px",cursor:"pointer"}},"label",{backgroundSize:"cover",backgroundRepeat:"no-repeat",position:"absolute",left:"10%",top:"200px",height:"280px",cursor:"pointer"}),k=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(o)))).state={imageUrl:"https://www.pngitem.com/pimgs/m/95-958057_whos-that-pokemon-hd-png-download.png",model:null,prediction:"NO PREDICTION"},a.handleUpload=function(e){var t=e.target.files;e.target.files[0];if(t.length>0){var n=URL.createObjectURL(e.target.files[0]);a.setState({imageUrl:n}),console.log(a.state);var o=new Image;o.crossOrigin="Anonymous",o.src=n,o.onload=function(){a.getPrediction(o)}}},a}return Object(m.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.getModel()}},{key:"getModel",value:function(){var e;return c.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.awrap(u.b("http://localhost:8000/model.json"));case 2:e=t.sent,this.setState({model:e}),console.log("got model");case 5:case"end":return t.stop()}}),null,this)}},{key:"getPrediction",value:function(e){var t,a,n,o,r;return c.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return console.log(e),t=u.a.fromPixels(e).resizeBilinear([96,96]),t=u.c(t,[1,96,96,3]),i.next=5,c.a.awrap(this.state.model.predict(t));case 5:a=i.sent,n=a.arraySync()[0],console.log(n),o=["Bulbasaur","Charmander","Pikachu","Squirtle","Vileplume"],r=0;case 10:if(!(r<n.length)){i.next=18;break}if(1!=n[r]){i.next=14;break}return this.setState({prediction:o[r]}),i.abrupt("return");case 14:console.log(n[r]);case 15:++r,i.next=10;break;case 18:case"end":return i.stop()}}),null,this)}},{key:"render",value:function(){return o.a.createElement("div",{style:x.container},o.a.createElement("label",{htmlFor:"upload",id:"pokelabel",style:Object(w.a)({},x.label,{backgroundImage:'url("'+this.state.imageUrl+'")'})}),o.a.createElement("input",{style:{display:"none"},type:"file",accept:"image/*",capture:"camera",onChange:this.handleUpload,id:"upload"}),o.a.createElement("div",{style:{color:"black"}},this.state.prediction))}}]),t}(o.a.Component),E=a(15),j={initial:"initial",states:{initial:{on:{next:"loadingModel"}},loadingModel:{on:{next:"modelReady"}},modelReady:{on:{next:"imageReady"}},imageReady:{on:{next:"identifying"},showImage:!0},identifying:{on:{next:"complete"}},complete:{on:{next:"modelReady"},showImage:!0,showResults:!0}}};var O=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=(t[0],t[1],Object(n.useState)(null)),r=Object(s.a)(a,2),i=(r[0],r[1],Object(n.useState)(null)),l=Object(s.a)(i,2),c=(l[0],l[1],Object(n.useRef)(),Object(n.useRef)(),Object(n.useReducer)((function(e,t){return j.states[e].on[t]||j.initial}),j.initial)),u=Object(s.a)(c,2),d=u[0],p=(u[1],j.states[d]);return p.showImage,p.showResults,o.a.createElement(E.a,null,o.a.createElement(b.d,null,o.a.createElement(b.b,{exact:!0,path:"/"},o.a.createElement(v,null)),o.a.createElement(b.b,{path:"/upload"},o.a.createElement(k,null)),o.a.createElement(b.b,{path:"/draw"},o.a.createElement("div",null,"DRAW SCREEN!!!!!!"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[33,1,2]]]);
//# sourceMappingURL=main.95103e25.chunk.js.map