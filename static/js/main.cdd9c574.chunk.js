(this["webpackJsonpmanning-dl-project"]=this["webpackJsonpmanning-dl-project"]||[]).push([[0],{156:function(e,t,n){e.exports={img_preview:"HomePage_img_preview__2mvwU",upload_button:"HomePage_upload_button__3639O"}},157:function(e){e.exports=JSON.parse('{"a":{"title":"Food Image Classifier","description":"Classify Food Image Using Deep Learning","about":"This is an Image Classifier using deep learning built on top of TensorFlow.\\n\\nThe project was built by [Nidhin Pattaniyil](https://npatta01.github.io) and [Reshama Shaikh](https://reshamas.github.io).\\n\\nMore information can be found in the [Manning Course](https://liveproject.manning.com/).\\n\\nSource code can be found in this repository [deploying-web-app](https://github.com/reshamas/deploying-web-app).","code":"https://github.com/reshamas/deploying-web-app.git","image_size":224,"top_k":5,"sampleImages":[{"name":"Cheese Cake","url":"https://upload.wikimedia.org/wikipedia/commons/e/ea/Baked_cheesecake_with_raspberries_and_blueberries.jpg"},{"name":"Chicken Quesadilla","url":"https://upload.wikimedia.org/wikipedia/commons/7/75/Quesadilla_2.jpg"},{"name":"Chicken Wings","url":"https://upload.wikimedia.org/wikipedia/commons/d/dd/Buffalo_-_Wings_at_Airport_Anchor_Bar.jpg"},{"name":"Chocolate Cake","url":"https://upload.wikimedia.org/wikipedia/commons/6/6a/ChocolateTruffleCakeIdeal01.JPG"},{"name":"Granny Smith Apple (not in training data)","url":"https://upload.wikimedia.org/wikipedia/commons/d/d7/Granny_smith_and_cross_section.jpg"},{"name":"Salad (not in training data)","url":"https://upload.wikimedia.org/wikipedia/commons/9/94/Salad_platter.jpg"},{"name":"Labrador retriever (not in training data)","url":"https://upload.wikimedia.org/wikipedia/commons/3/34/Labrador_on_Quantock_%282175262184%29.jpg"},{"name":"iPhone (not in training data)","url":"https://upload.wikimedia.org/wikipedia/commons/3/3b/IPhone_5s_top.jpg"}]}}')},158:function(e,t,n){e.exports=n(389)},163:function(e,t,n){},368:function(e,t){},369:function(e,t){},370:function(e,t){},374:function(e,t){},375:function(e,t){},376:function(e,t){},386:function(e,t){},389:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(35),o=n.n(i),l=(n(163),n(17)),s=n(18),c=n(24),u=n(23),m=(n(164),n(21)),d=n(7),p=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement(d.Navbar,{bg:"dark",variant:"dark"},r.a.createElement(d.Navbar.Brand,{as:m.Link,to:"/"},window.APP_CONFIG.title),r.a.createElement(d.Nav,{className:"mr-auto"},r.a.createElement(d.Nav.Link,{as:m.Link,to:"/"},"Home"),r.a.createElement(d.Nav.Link,{as:m.Link,to:"/about"},"About")))}}]),n}(r.a.Component),h=n(59),g=n.n(h),f=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"About"),r.a.createElement(g.a,{source:window.APP_CONFIG.about}))}}]),n}(r.a.Component),v=n(15),w=n.n(v),b=n(26),_=n(58),k=n.n(_),E=n(89),j=n.n(E),y=n(57),C=n.n(y),S=n(156),O=n.n(S),x=n(90),F=n.n(x),P=n(36),R=function(){function e(){Object(l.a)(this,e),this.mobilenet=null,this.image_size=void 0,this.classes=void 0,this.top_k=void 0,this.mobilenet=null,this.initializeBrowserModel(),this.image_size=window.APP_CONFIG.image_size,this.classes=[],this.top_k=window.APP_CONFIG.top_k}return Object(s.a)(e,[{key:"initializeBrowserModel",value:function(){var e=Object(b.a)(w.a.mark((function e(){var t,n,a,r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="/assets/model_tfjs/model.json",e.prev=1,e.next=4,P.loadGraphModel(t);case 4:return(n=e.sent).predict(P.zeros([1,this.image_size,this.image_size,3])),this.mobilenet=n,e.next=9,F.a.get("/api/classes");case 9:a=e.sent,r=a.data,this.classes=r,e.next=18;break;case 14:e.prev=14,e.t0=e.catch(1),console.error("Failed to load mobilenet model from ".concat(t," ").concat(e.t0)),alert(e.t0);case 18:case"end":return e.stop()}}),e,this,[[1,14]])})));return function(){return e.apply(this,arguments)}}()},{key:"predictServerSideInference",value:function(){var e=Object(b.a)(w.a.mark((function e(t){var n,a,r,i,o,l,s,c;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.url){e.next=9;break}return e.next=3,fetch(t.url);case 3:return n=e.sent,e.next=6,n.blob();case 6:a=e.sent,r={type:"image/jpeg"},t.imageData=new File([a],"upload.jpeg",r);case 9:if(!t.imageData){e.next=20;break}return(i=new FormData).append("file",t.imageData),o=(new Date).getTime(),e.next=15,F.a.post("/api/predict_image",i);case 15:return l=e.sent,s=l.data,c=(new Date).getTime(),s.duration_total=c-o,e.abrupt("return",s);case 20:return e.abrupt("return",null);case 21:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"predictBrowserSideInference",value:function(){var e=Object(b.a)(w.a.mark((function e(t){var n,a,r,i,o,l=this;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.mobilenet){e.next=3;break}return e.next=3,this.initializeBrowserModel();case 3:return n=(new Date).getTime(),a=P.tidy((function(){var e=P.browser.fromPixels(t).resizeBilinear([l.image_size,l.image_size]).toFloat(),n=P.scalar(127.5),a=e.sub(n).div(n).reshape([1,l.image_size,l.image_size,3]);return l.mobilenet.predict(a)})),e.next=7,this.getTopKClasses(a,this.top_k,this.classes);case 7:return r=e.sent,i=(new Date).getTime(),(o={}).duration_total=i-n,o.duration_inference=o.duration_total,o.predictions=r,e.abrupt("return",o);case 14:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getTopKClasses",value:function(){var e=Object(b.a)(w.a.mark((function e(t,n,a){var r,i,o,l;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.data();case 2:for(r=e.sent,i=[],o=0;o<a.length;o++)i.push({label:a[o],confidence:r[o]});return i.sort((function(e,t){return t.confidence-e.confidence})),l=i.slice(0,n),e.abrupt("return",l);case 8:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}()}]),e}(),I=n(388),N=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={url:"",imageSelected:!1,isLoading:!1,file:"",browserResponse:null,serverResponse:null,rawFile:null},e.imageRef=r.a.createRef(),e.modelService=new R,e._clear=function(){e.setState({file:"",imageSelected:!1,browserResponse:null,serverResponse:null,rawFile:null,url:""})},e._onUrlChange=function(t){t.length>5&&0===t.indexOf("http")&&e.setState({url:t,file:t,imageSelected:!0})},e._onFileUpload=function(t){var n,a=null===t||void 0===t||null===(n=t.target)||void 0===n?void 0:n.files;if(a&&a.length>0){var r=a[0];e.setState({rawFile:r,file:URL.createObjectURL(r),imageSelected:!0})}},e._predict=function(){var t=Object(b.a)(w.a.mark((function t(n){var a,r;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.state.url&&!e.state.rawFile){t.next=11;break}return e.setState({isLoading:!0}),t.next=4,e.modelService.predictServerSideInference({url:e.state.url,imageData:e.state.rawFile});case 4:return a=t.sent,t.next=7,e.modelService.predictBrowserSideInference(e.imageRef.current);case 7:r=t.sent;try{e.setState({serverResponse:a,browserResponse:r,isLoading:!1}),console.log(a)}catch(n){e.setState({isLoading:!1}),alert(n)}t.next=12;break;case 11:alert("Either URL or image needs to be set");case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.sampleUrlSelected=function(t){e._onUrlChange(t.url)},e}return Object(s.a)(n,[{key:"renderPredictions",value:function(e){if(e&&e.predictions&&e.predictions.length>0){var t=e.predictions.map((function(e){return r.a.createElement("li",null,e.label," (",e.confidence.toFixed(4)," ) ")}));return r.a.createElement("div",null,r.a.createElement("ul",null,t),r.a.createElement("div",null,"Duration (inference): ",e.duration_inference," ms"),r.a.createElement("div",null,"Duration (total): ",e.duration_total," ms"))}return null}},{key:"render",value:function(){var e=this,t=window.APP_CONFIG.sampleImages;return r.a.createElement("div",null,r.a.createElement("h1",null,window.APP_CONFIG.description),r.a.createElement("p",null,"Select an image "),r.a.createElement(d.Form,null,r.a.createElement(d.FormGroup,null,r.a.createElement("div",null,r.a.createElement("p",null,"Provide a URL"),r.a.createElement("div",null,r.a.createElement(d.Dropdown,null,r.a.createElement(k.a,null,"Sample Image URL"),r.a.createElement(C.a,null,t.map((function(t){return r.a.createElement(j.a,{onClick:function(){return e.sampleUrlSelected(t)},key:t.name},t.name)}))))),r.a.createElement("input",{className:"form-control",value:this.state.url,name:"file",onChange:function(t){return e._onUrlChange(t.target.value)}}))),r.a.createElement("h3",null,"OR"),r.a.createElement(d.FormGroup,{id:"upload_button"},r.a.createElement("div",null,r.a.createElement("p",null,"Upload an image")),r.a.createElement("div",{id:"imageUpload"},r.a.createElement(d.Form.File,{id:"custom-file",label:"Upload an image",accept:".png, .jpg, .jpeg",custom:!0,onChange:this._onFileUpload}))),r.a.createElement("img",{src:this.state.file,className:O.a.img_preview,alt:"selected_img",hidden:!this.state.imageSelected,crossOrigin:"anonymous",ref:this.imageRef}),r.a.createElement(d.FormGroup,null,r.a.createElement(d.Button,{color:"success",onClick:this._predict,disabled:this.state.isLoading}," Predict"),r.a.createElement("span",{className:"p-1 "}),r.a.createElement(d.Button,{color:"danger",onClick:this._clear}," Clear")),this.state.isLoading&&r.a.createElement("div",null,r.a.createElement(d.Spinner,{animation:"grow",color:"primary",style:{width:"5rem",height:"5rem"}}))),r.a.createElement("div",{className:"mb-5",id:"prediction-container"},r.a.createElement(d.Row,null,r.a.createElement(d.Col,null,r.a.createElement("h2",null," Server Side Inference"),r.a.createElement("p",null," Predictions"),this.renderPredictions(this.state.serverResponse)),r.a.createElement(d.Col,null,r.a.createElement("h2",null," Client Side Inference"),r.a.createElement("p",null," Predictions"),this.renderPredictions(this.state.browserResponse)))),r.a.createElement("div",null,r.a.createElement("h3",null,"Notes"),r.a.createElement(g.a,{source:"\nServer side inference makes a call every time to /api/predict_image . \n\nBrowser side inference makes an initial call to /assets/model_tfjs/model.json to fetch the model and future inference happens locally.\n",escapeHtml:!1,plugins:[I]})))}}]),n}(r.a.Component),L=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement(m.BrowserRouter,{basename:"/deploying-web-app"},r.a.createElement("div",null,r.a.createElement(p,null),r.a.createElement("main",{role:"main",className:"container"},r.a.createElement(m.Switch,null,r.a.createElement(m.Route,{exact:!0,path:"/",component:N}),r.a.createElement(m.Route,{exact:!0,path:"/about",component:f})))))}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var U=n(157);window.APP_CONFIG=U.a,o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[158,1,2]]]);
//# sourceMappingURL=main.cdd9c574.chunk.js.map