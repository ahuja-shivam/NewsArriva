(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{50:function(e,t,n){e.exports=n(70)},59:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(43),i=n.n(o),c=(n(59),n(21)),s=n(22),l=n(24),u=n(23),h=n(25),f=n(33),m=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.description,a=e.image,o=e.newsUrl;return r.a.createElement("div",{className:"col-md-4 my"},r.a.createElement("div",{className:"card shadow-sm",style:{height:"225",width:"100%"}},r.a.createElement("img",{src:a||"https://media.istockphoto.com/vectors/news-alerts-simple-text-banner-template-minimalistic-style-breaking-vector-id1284694380",className:"card-img-top",alt:"..."}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},t),r.a.createElement("p",{className:"card-text"},n),r.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},r.a.createElement("div",{className:"btn-group"},r.a.createElement("a",{href:o,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("button",{type:"button",className:"btn btn-m btn-outline-secondary"},"View")))))))}}]),t}(a.Component);function p(){p=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},r=a.iterator||"@@iterator",o=a.asyncIterator||"@@asyncIterator",i=a.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(L){c=function(e,t,n){return e[t]=n}}function s(e,t,n,a){var r=t&&t.prototype instanceof h?t:h,o=Object.create(r.prototype),i=new k(a||[]);return o._invoke=function(e,t,n){var a="suspendedStart";return function(r,o){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===r)throw o;return O()}for(n.method=r,n.arg=o;;){var i=n.delegate;if(i){var c=E(i,n);if(c){if(c===u)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===a)throw a="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a="executing";var s=l(e,t,n);if("normal"===s.type){if(a=n.done?"completed":"suspendedYield",s.arg===u)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(a="completed",n.method="throw",n.arg=s.arg)}}}(e,n,i),o}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(L){return{type:"throw",arg:L}}}e.wrap=s;var u={};function h(){}function f(){}function m(){}var d={};c(d,r,function(){return this});var v=Object.getPrototypeOf,g=v&&v(v(j([])));g&&g!==t&&n.call(g,r)&&(d=g);var y=m.prototype=h.prototype=Object.create(d);function b(e){["next","throw","return"].forEach(function(t){c(e,t,function(e){return this._invoke(t,e)})})}function w(e,t){var a;this._invoke=function(r,o){function i(){return new t(function(a,i){!function a(r,o,i,c){var s=l(e[r],e,o);if("throw"!==s.type){var u=s.arg,h=u.value;return h&&"object"==typeof h&&n.call(h,"__await")?t.resolve(h.__await).then(function(e){a("next",e,i,c)},function(e){a("throw",e,i,c)}):t.resolve(h).then(function(e){u.value=e,i(u)},function(e){return a("throw",e,i,c)})}c(s.arg)}(r,o,a,i)})}return a=a?a.then(i,i):i()}}function E(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,E(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var a=l(n,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,u;var r=a.arg;return r?r.done?(t[e.resultName]=r.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):r:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function N(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(N,this),this.reset(!0)}function j(e){if(e){var t=e[r];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,o=function t(){for(;++a<e.length;)if(n.call(e,a))return t.value=e[a],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:O}}function O(){return{value:void 0,done:!0}}return f.prototype=m,c(y,"constructor",m),c(m,"constructor",f),f.displayName=c(m,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,c(e,i,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},b(w.prototype),c(w.prototype,o,function(){return this}),e.AsyncIterator=w,e.async=function(t,n,a,r,o){void 0===o&&(o=Promise);var i=new w(s(t,n,a,r),o);return e.isGeneratorFunction(n)?i:i.next().then(function(e){return e.done?e.value:i.next()})},b(y),c(y,i,"Generator"),c(y,r,function(){return this}),c(y,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var a=t.pop();if(a in e)return n.value=a,n.done=!1,n}return n.done=!0,n}},e.values=j,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function a(n,a){return i.type="throw",i.arg=e,t.next=n,a&&(t.method="next",t.arg=void 0),!!a}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],i=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),s=n.call(o,"finallyLoc");if(c&&s){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var r=this.tryEntries[a];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),x(n),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var a=n.completion;if("throw"===a.type){var r=a.arg;x(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:j(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),u}},e}m.defaultProps={title:"Title of News",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",image:"https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",newsUrl:"https://www.hindustantimes.com/"};var d=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).article=[{source:{id:"bbc-news",name:"BBC News"},author:"BBC News",title:"Just Smile",description:"Just smile for a while. We are loading news for you",url:"https://www.readersdigest.ca/culture/10-short-jokes-anyone-can-remember/",urlToImage:"https://api.memegen.link/images/pigeon/Engineer/_/Is_this_Photoshop~q.png?style=https://i.imgur.com/W0NXFpQ.png&width=800&token=cy49tv234bu3jzgw587o",publishedAt:"2022-07-28T07:37:26.1809038Z",content:"Kherson's Antonivskiy Bridge is half a mile long and is one\r\nof two key routes spanning the Dnipro River.\r\nBut, although its still standing, the crossing is now completely\r\nunusable after damage from\u2026 [+605 chars]"}],e.handleNext=Object(f.a)(p().mark(function t(){var n,a;return p().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=9ea305f0f2be4cf086c49ca1622d29b3&page=".concat(e.state.page+1,"&pagesize=18"));case 2:return n=t.sent,t.next=5,n.json();case 5:a=t.sent,e.setState({page:e.state.page+1,articles:a.articles});case 7:case"end":return t.stop()}},t)})),e.handlePrev=Object(f.a)(p().mark(function t(){var n,a;return p().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=9ea305f0f2be4cf086c49ca1622d29b3&page=".concat(e.state.page-1,"&pagesize=18"));case 2:return n=t.sent,t.next=5,n.json();case 5:a=t.sent,e.setState({page:e.state.page-1,articles:a.articles});case 7:case"end":return t.stop()}},t)})),e.state={articles:e.article,loading:!1,page:1,totalResult:1},e}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(f.a)(p().mark(function e(){var t,n;return p().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=9ea305f0f2be4cf086c49ca1622d29b3&page=".concat(this.state.page,"&pagesize=18"));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,this.setState({articles:n.articles,totalResult:n.totalResults});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container py-5"},r.a.createElement("div",{className:"row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 my-3"},this.state.articles.map(function(e){return r.a.createElement(m,{key:e.url,title:e.title,description:e.description,image:e.urlToImage,newsUrl:e.url})})),r.a.createElement("div",{className:"container d-flex justify-content-between my-3 "},r.a.createElement("button",{type:"button",disabled:1===this.state.page,className:"btn btn-dark",onClick:this.handlePrev},"\u2190 Prev"),r.a.createElement("button",{type:"button",className:"btn btn-dark",disabled:this.state.page>this.state.totalResult/18,onClick:this.handleNext},"Next \u2192"))))}}]),t}(a.Component),v=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-dark bg-dark fixed-top  ","aria-label":"Dark offcanvas navbar"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("a",{className:"navbar-brand",href:"/"},"NewsArriva"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"offcanvas","data-bs-target":"#offcanvasNavbarDark","aria-controls":"offcanvasNavbarDark"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"offcanvas offcanvas-end text-bg-dark",tabIndex:"-1",id:"offcanvasNavbarDark","aria-labelledby":"offcanvasNavbarDarkLabel"},r.a.createElement("div",{className:"offcanvas-header"},r.a.createElement("h5",{className:"offcanvas-title",id:"offcanvasNavbarDarkLabel"},"Offcanvas"),r.a.createElement("button",{type:"button",className:"btn-close btn-close-white","data-bs-dismiss":"offcanvas","aria-label":"Close"})),r.a.createElement("div",{className:"offcanvas-body"},r.a.createElement("ul",{className:"navbar-nav justify-content-end flex-grow-1 pe-3"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"/"},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"/"},"Link")),r.a.createElement("li",{className:"nav-item dropdown"},r.a.createElement("a",{className:"nav-link dropdown-toggle",href:"/",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},"Dropdown"),r.a.createElement("ul",{className:"dropdown-menu"},r.a.createElement("li",null,r.a.createElement("a",{className:"dropdown-item",href:"/"},"Action")),r.a.createElement("li",null,r.a.createElement("a",{className:"dropdown-item",href:"/"},"Another action")),r.a.createElement("li",null,r.a.createElement("hr",{className:"dropdown-divider"})),r.a.createElement("li",null,r.a.createElement("a",{className:"dropdown-item",href:"/"},"Something else here"))))),r.a.createElement("form",{className:"d-flex mt-3",role:"search"},r.a.createElement("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),r.a.createElement("button",{className:"btn btn-light",type:"submit"},"Search"))))))}}]),t}(a.Component),g=n(9),y=n(95),b=n(92),w=n(44),E=n.n(w),N=n(45),x=n.n(N),k=n(46),j=n.n(k),O=n(94);function L(){var e=a.useState(0),t=Object(g.a)(e,2),n=t[0],r=t[1];return a.createElement(O.a,{sx:{position:"fixed",bottom:0,left:0,right:0},elevation:3},a.createElement(y.a,{showLabels:!0,value:n,onChange:function(e,t){r(t)}},a.createElement(b.a,{label:"Recents",icon:a.createElement(E.a,null)}),a.createElement(b.a,{label:"Favorites",icon:a.createElement(x.a,null)}),a.createElement(b.a,{label:"Archive",icon:a.createElement(j.a,null)})))}var _=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,null),r.a.createElement(d,null),r.a.createElement(L,null))}}]),t}(a.Component),S=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,91)).then(function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),o(e),i(e)})};i.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(_,null))),S()}},[[50,3,2]]]);
//# sourceMappingURL=main.d091030b.chunk.js.map