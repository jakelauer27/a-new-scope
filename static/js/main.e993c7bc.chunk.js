(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,a){},25:function(e,t,a){e.exports=a(40)},31:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(42),s=a(22),l=a.n(s),i=(a(31),a(13)),o=a(14),m=a(2),u=a.n(m),p=a(11),d=a(6),h=a(7),f=a(9),v=a(8),g=a(10),E=a(44),b=a(43),N=function(){var e=Object(p.a)(u.a.mark(function e(){var t;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://swapi.co/api/films/");case 2:if(!(t=e.sent).ok){e.next=5;break}return e.abrupt("return",t.json());case 5:throw new Error("Internal Server Error");case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(p.a)(u.a.mark(function e(t){var a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://swapi.co/api/".concat(t));case 2:if(!(a=e.sent).ok){e.next=5;break}return e.abrupt("return",a.json());case 5:throw new Error("Internal Server Error");case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),S=function(e){var t=e;return e>=1e3&&(t="".concat(e/1e3,"K")),e>=1e6&&(t="".concat(e/1e6," million")),e>=1e9&&(t="".concat(e/1e9," billion")),e>=1e12&&(t="".concat(e/1e12," trillion")),t},O=function(e){var t=e.map(function(){var e=Object(p.a)(u.a.mark(function e(t){var a,n,r,c;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t.homeworld);case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,e.next=8,fetch(t.species);case 8:return r=e.sent,e.next=11,r.json();case 11:return c=e.sent,e.abrupt("return",{name:t.name,type:c.name,main1:t.height,main2:t.mass,secInfoMain:n.name,secInfoOther:S(n.population),category:"people",favorite:!1});case 13:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}());return Promise.all(t)},w=function(e){var t=e.map(function(){var e=Object(p.a)(u.a.mark(function e(t){var a,n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,e.abrupt("return",n.name);case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}());return Promise.all(t)},k=function(e){var t=e.map(function(){var e=Object(p.a)(u.a.mark(function e(t){var a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w(t.residents);case 2:return a=e.sent,e.abrupt("return",{name:t.name,type:t.terrain,main1:S(t.population),main2:t.climate,secInfoMain:a,secInfoOther:"",category:"planets",favorite:!1});case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}());return Promise.all(t)},j=function(e){function t(){var e;return Object(d.a)(this,t),(e=Object(f.a)(this,Object(v.a)(t).call(this))).paint=function(){var t=e.refs.canvas,a=t.getContext("2d"),n=[];a.fillStyle="black",a.fillRect(0,0,t.width,t.height);for(var r=0;r<2e3;r+=1){var c={x:Math.random()*t.width,y:Math.random()*t.height,size:1*Math.random(),mult:Math.random()};a.fillStyle="white",a.beginPath(),a.ellipse(c.x,c.y,c.size,1,4,0,4),a.fill(),n.push(c)}e.setState({stars:n})},e.repaint=function(){var t=e.state.stars,a=e.props.deltaX,n=e.refs.canvas,r=n.getContext("2d");r.clearRect(0,0,n.width,n.height),r.fillStyle="black",r.fillRect(0,0,n.width,n.height);for(var c=0;c<500;c+=1)c%2===0?(r.fillStyle="white",r.beginPath(),r.ellipse(t[c].x+t[c].mult*a,t[c].y,t[c].size,1,4,0,4),r.fill()):(r.fillStyle="white",r.beginPath(),r.ellipse(t[c].x-t[c].mult*a,t[c].y,t[c].size,1,4,0,4),r.fill())},e.state={stars:[]},e}return Object(g.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.paint()}},{key:"componentDidUpdate",value:function(){this.state.stars.length>0&&this.repaint()}},{key:"render",value:function(){return r.a.createElement("canvas",{ref:"canvas",width:"2000px",height:"1000px"})}}]),t}(n.Component),x=(a(21),function(e){function t(){var e;return Object(d.a)(this,t),(e=Object(f.a)(this,Object(v.a)(t).call(this))).tick=function(){var t,a=e.state,n=a.direction,r=a.deltaX;(t=n?r+.08:r-.08)>180||t<0?e.setState({deltaX:t,direction:!n}):e.setState({deltaX:t}),requestAnimationFrame(e.tick)},e.state={deltaX:0,direction:!0},e}return Object(g.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){requestAnimationFrame(this.tick)}},{key:"render",value:function(){var e=this.state.deltaX;return r.a.createElement("div",{className:"star-housing"},r.a.createElement(j,{deltaX:e}))}}]),t}(n.Component)),D=a(41);function I(e){var t=e.episode;return r.a.createElement("div",{className:"landing"},r.a.createElement("header",{className:"landing-header"},r.a.createElement("div",{className:"header-right"},r.a.createElement("h2",{className:"landing-title"},t.title),r.a.createElement("h2",{className:"landing-year"},t.year.substring(0,4))),r.a.createElement("div",{className:"continue-to-site-btn"},r.a.createElement(D.a,{to:"/menu"},r.a.createElement("h2",{className:"enter-btn",role:"presentation"},"ENTER")),r.a.createElement("img",{src:"./images/outerring.svg",alt:"ring",className:"outerring ring"}),r.a.createElement("img",{src:"./images/outerring.svg",alt:"ring",className:"middlering ring"}),r.a.createElement("img",{src:"./images/outerring.svg",alt:"ring",className:"innerring ring"})),r.a.createElement("h1",{className:"main-title2"},"a new scope")),r.a.createElement("section",{className:"scroll-text"},r.a.createElement("div",{className:"fade-overlay"}),r.a.createElement("div",{className:"crawl"},r.a.createElement("div",{className:"title"},r.a.createElement("h1",{className:"scroll-title"},t.title)),r.a.createElement("p",null,t.text))),r.a.createElement("img",{className:"millenium-landing",alt:"Millenium Falcon",src:"./images/millenium_color.png"}))}function L(){return r.a.createElement("div",{className:"menu"},r.a.createElement("h1",{className:"main-title"},"a new scope"),r.a.createElement("div",{className:"favorites-path"},r.a.createElement(D.a,{to:"./favorites"},r.a.createElement("div",{role:"presentation",className:"favorites-planet"},r.a.createElement("h3",{className:"planet-label"},"Favorites"))),r.a.createElement("div",{className:"vehicles-path"},r.a.createElement(D.a,{to:"/vehicles"},r.a.createElement("div",{role:"presentation",className:"vehicles-planet"},r.a.createElement("h3",{className:"planet-label"},"Vehicles"))),r.a.createElement("div",{className:"planets-path"},r.a.createElement(D.a,{to:"/planets"},r.a.createElement("div",{role:"presentation",className:"planets-planet"},r.a.createElement("h3",{className:"planet-label"},"Planets"))),r.a.createElement("div",{className:"people-path"},r.a.createElement(D.a,{to:"/people"},r.a.createElement("div",{role:"presentation",className:"people-planet"},r.a.createElement("h3",{className:"planet-label"},"People"))))))),r.a.createElement("div",{className:"alt-menu-container"},r.a.createElement("div",{role:"presentation",className:"alt-menu alt-menu-favorites"},r.a.createElement("h3",{className:"planet-label"},"Favorites")),r.a.createElement("div",{role:"presentation",className:"alt-menu alt-menu-vehicles"},r.a.createElement("h3",{className:"planet-label"},"Vehicles")),r.a.createElement("div",{role:"presentation",className:"alt-menu alt-menu-planets"},r.a.createElement("h3",{className:"planet-label"},"Planets")),r.a.createElement("div",{role:"presentation",className:"alt-menu alt-menu-people"},r.a.createElement("h3",{className:"planet-label"},"People"))))}var T=a(17),M=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(f.a)(this,Object(v.a)(t).call(this,e))).clickArrow=function(e){var t=a.state,n=t.residents,r=e+t.currentIndex;r<0&&(r=n.length-1),r>=n.length&&(r=0);var c=n.map(function(e,t){return t===r?{name:e.name,display:""}:{name:e.name,display:"none"}});a.setState({currentIndex:r,residents:c})},a.state={residents:[],content1:"",content2:"",currentIndex:0},a}return Object(g.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.content1,a=e.content2;0===t.length?this.setState({residents:[{name:"none",display:""}]}):"string"!==typeof t?this.setState({residents:t.map(function(e,t){var a={name:e,display:"none"};return 0===t&&(a={name:e,display:""}),a})}):this.setState({content1:t,content2:a})}},{key:"render",value:function(){var e=this,t=this.state,a=t.residents,n=t.content1,c=t.content2;return n?r.a.createElement("div",{className:"secInfo"},r.a.createElement("h1",{className:"homeworld"},n),r.a.createElement("h1",{className:"population"},c)):r.a.createElement("div",{className:"residents-scroller"},r.a.createElement("i",{className:"fas fa-caret-left resident-arrow",role:"presentation",onClick:function(){return e.clickArrow(-1)}}),r.a.createElement("i",{className:"fas fa-caret-right resident-arrow",role:"presentation",onClick:function(){return e.clickArrow(1)}}),a.map(function(e){return r.a.createElement("h4",{className:"resident ".concat(e.display),key:Object(T.a)(e)},e.name)}))}}]),t}(n.Component);M.defaultProps={content2:""};var C=function(e){function t(){var e;return Object(d.a)(this,t),(e=Object(f.a)(this,Object(v.a)(t).call(this))).flipCard=function(t){var a=e.state.flipped;t.target.classList.contains("resident-arrow")||t.target.classList.contains("favorite-btn")||(!0===a?e.setState({flipped:!1,unflipped:!0}):e.setState({flipped:!0,unflipped:!1}))},e.toggleFavorite=function(t){var a=Object(o.a)({},t,{favorite:!t.favorite}),n=e.props.handleStoreData;e.setState({cardObj:a},function(){n("favorites",a,a.favorite,t.category)})},e.state={flipped:!1,unflipped:!1,cardObj:null},e}return Object(g.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.cardData,a=e.cardType,n={category:t.category,favorite:t.favorite,name:t.name,type:t.type,main1Label:"",main1:t.main1,main2Label:"",main2:t.main2,secHeader:"",secInfoMain:t.secInfoMain,secInfoOther:t.secInfoOther||""};switch(a){case"people":n.main1Label="Height",n.main2Label="Weight",n.secHeader="Homeworld";break;case"vehicles":n.main1Label="Model",n.main2Label="Class",n.secHeader="Passengers";break;case"planets":n.main1Label="Population",n.main2Label="Climate",n.secHeader="Residents"}this.setState({cardObj:n})}},{key:"render",value:function(){var e,t=this,a=this.state,n=a.flipped,c=a.unflipped,s=a.cardObj,l=this.props.cardType;return e="people"===l||"",null===s?r.a.createElement("div",null):r.a.createElement("div",{className:"card ".concat(n&&"flipped"," ").concat(c&&"unflipped"),role:"presentation",onClick:function(e){return t.flipCard(e)}},r.a.createElement("div",{className:"card-front"},r.a.createElement("div",{className:"image-side-title card-title card-header-".concat(l)},r.a.createElement("h1",null,s.name),r.a.createElement("i",{className:"fas fa-star ".concat(s.favorite&&"favorite"," favorite-btn"),role:"presentation",onClick:function(){return t.toggleFavorite(s)}})),r.a.createElement("img",{className:"front-image",src:"./images/".concat(s.name.replace("/","-"),".jpg"),alt:""})),r.a.createElement("div",{className:" card-title card-header-".concat(l)},r.a.createElement("h1",null,s.name),r.a.createElement("i",{className:"fas fa-star ".concat(s.favorite&&"favorite"," favorite-btn"),role:"presentation",onClick:function(){return t.toggleFavorite(s)}})),r.a.createElement("h1",{className:"card-type"},s.type),r.a.createElement("div",{className:"stats-container"},r.a.createElement("div",{className:"stat"},r.a.createElement("h1",null,s.main1Label),r.a.createElement("p",null,"".concat(s.main1," ").concat(e&&"cm"))),r.a.createElement("div",{className:"div-line"}),r.a.createElement("div",{className:"stat"},r.a.createElement("h1",null,s.main2Label),r.a.createElement("p",null,"".concat(s.main2," ").concat(e&&"kg")))),r.a.createElement("div",null,r.a.createElement("div",{className:"homeworld-title card-header-".concat(l)},r.a.createElement("h1",{className:"card-header-".concat(l)},s.secHeader)),r.a.createElement(M,{content1:s.secInfoMain,content2:s.secInfoOther})),r.a.createElement("img",{className:"card-icon",alt:"card icon",src:"./images/".concat(l,"_icon.svg")}))}}]),t}(n.Component);function P(){return r.a.createElement("div",{className:"loading-container"},r.a.createElement("div",{className:"loading-animation"},r.a.createElement("div",{className:"millenium-div"},r.a.createElement("img",{className:"loading-millenium",src:"./images/load_millenium.svg",alt:"millenium falcon"}),r.a.createElement("div",{className:"blaster1 blaster"}),r.a.createElement("div",{className:"blaster2 blaster"})),r.a.createElement("div",{className:"tie-div"},r.a.createElement("img",{className:"loading-tiefighter",src:"./images/load_tiefighter.svg",alt:"millenium falcon"}))),r.a.createElement("h2",{className:"loading-text"},"Loading..."))}C.defaultProps={cardType:"",handleStoreData:null};var F=function(){var e=Object(p.a)(u.a.mark(function e(t){var a,n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(t);case 2:a=e.sent,n="",e.t0=t,e.next="people"===e.t0?7:"vehicles"===e.t0?11:"planets"===e.t0?15:19;break;case 7:return e.next=9,O(a.results);case 9:return n=e.sent,e.abrupt("break",20);case 11:return e.next=13,a.results.map(function(e){return{name:e.name,type:"vehicle",main1:e.model,main2:e.vehicle_class,secInfoMain:e.passengers,secInfoOther:"",category:"vehicles",favorite:!1}});case 13:return n=e.sent,e.abrupt("break",20);case 15:return e.next=17,k(a.results);case 17:return n=e.sent,e.abrupt("break",20);case 19:return e.abrupt("break",20);case 20:return e.abrupt("return",n);case 21:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),J=function(e){function t(){var e;return Object(d.a)(this,t),(e=Object(f.a)(this,Object(v.a)(t).call(this))).state={categoryData:[]},e}return Object(g.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=Object(p.a)(u.a.mark(function e(){var t,a,n,r,c,s,l;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,a=t.category,n=t.handleStoreData,r=t.setError,"favorites"!==a){e.next=4;break}return c=JSON.parse(localStorage.getItem("favorites")),e.abrupt("return",this.getFavorites(c));case 4:if((l=JSON.parse(localStorage.getItem("storedData")))&&l[a]){e.next=18;break}return e.prev=6,e.next=9,Promise.race([F(a),new Promise(function(e,t){setTimeout(function(){return t(new Error)},5e3)})]);case 9:return s=e.sent,e.next=12,this.setState({categoryData:s});case 12:return e.abrupt("return",n(a,s));case 15:return e.prev=15,e.t0=e.catch(6),e.abrupt("return",r(!0));case 18:return e.abrupt("return",this.setState({categoryData:l[a]}));case 19:case"end":return e.stop()}},e,this,[[6,15]])}));return function(){return e.apply(this,arguments)}}()},{key:"getFavorites",value:function(e){e&&0!==e.length?this.setState({categoryData:e}):this.setState({categoryData:"none"})}},{key:"render",value:function(){var e,t=this.props,a=t.category,n=t.returnToLanding,c=t.handleStoreData,s=this.state.categoryData;return e=s.length?"none"===s||s===[]?r.a.createElement("div",{className:"no-favorite-message"},"You have no saved favorites"):s.map(function(e){return r.a.createElement(C,{handleStoreData:c,cardData:e,key:Object(T.a)(e),cardType:e.category})}):r.a.createElement("div",{className:"App"},r.a.createElement(P,null)),r.a.createElement("main",{className:"main"},r.a.createElement("div",{className:"header-container"},r.a.createElement(D.a,{to:"/menu"},r.a.createElement("div",{className:"continue-to-site-btn back-rings",role:"presentation"},r.a.createElement("img",{src:"./images/outerring.svg",alt:"ring",className:"outerring ring"}),r.a.createElement("img",{src:"./images/outerring.svg",alt:"ring",className:"middlering ring"}),r.a.createElement("img",{src:"./images/outerring.svg",alt:"ring",className:"innerring ring"}),r.a.createElement("h3",{className:"planet-label back-to-menu"},"Menu"))),r.a.createElement("h1",{className:"main-header"},a)),r.a.createElement("section",{className:"card-section"},e),r.a.createElement(D.a,{to:"/"},r.a.createElement("img",{className:"return-to-landing-btn",alt:"Landing Btn",src:"./images/millenium_color.png",role:"presentation",onClick:function(){return n()}})))}}]),t}(n.Component);function A(e){return r.a.createElement("div",{className:"error-box"},r.a.createElement("img",{className:"error-darth",src:"./images/darth.svg",alt:"Darth Vader Error"}),r.a.createElement("h1",{className:"sith-happens"},"Sith Happens..."),r.a.createElement("h4",{className:"error-sub"},"Oops, something seems to have gone wrong."),r.a.createElement(D.a,{to:"/"},r.a.createElement("button",{className:"error-sub error-button",type:"submit",onClick:function(){e.returnToLanding(),e.setError(!1)}},"Click here to return to site.")))}A.defaultProps={returnToLanding:null};var H=function(e){function t(){var e;return Object(d.a)(this,t),(e=Object(f.a)(this,Object(v.a)(t).call(this))).handleTitleScroll=Object(p.a)(u.a.mark(function t(){var a,n,r;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Promise.race([N(),new Promise(function(e,t){setTimeout(function(){return t(new A)},8e3)})]);case 3:a=t.sent,n=Math.round(8*Math.random()),r=a.results[n],e.setState({landingScroll:{title:r.title,year:r.release_date,text:r.opening_crawl}}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),e.setState({error:!0});case 12:case"end":return t.stop()}},t,this,[[0,9]])})),e.handleStoreData=function(t,a,n,r){"favorites"===t?(e.storeFavorite(a,n),e.updateStoredData(r,a)):e.storeData(t,a)},e.storeData=function(e,t){var a=JSON.parse(localStorage.getItem("storedData")),n=Object.assign(Object(o.a)(Object(i.a)({},e,t),a));localStorage.setItem("storedData",JSON.stringify(n))},e.updateStoredData=function(e,t){var a=JSON.parse(localStorage.getItem("storedData")),n=0;a&&(a[e].find(function(e,a){e.name===t.name&&(n=a)}),a[e][n]=t,localStorage.setItem("storedData",JSON.stringify(a)))},e.storeFavorite=function(e,t){var a=JSON.parse(localStorage.getItem("favorites"))||[];if(t)a.push(e);else{var n=a.find(function(t){return t.name===e.name});a=a.filter(function(e){return e.name!==n.name})}localStorage.setItem("favorites",JSON.stringify(a))},e.setError=function(t){e.setState({error:t})},e.state={error:!1,landingScroll:""},e}return Object(g.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.handleTitleScroll()}},{key:"render",value:function(){var e=this,t=this.state,a=t.error,n=t.landingScroll;return a?r.a.createElement("div",{className:"App"},r.a.createElement(x,null),r.a.createElement(A,{returnToLanding:this.handleTitleScroll,setError:this.setError})):n?r.a.createElement("div",{className:"App"},r.a.createElement(x,null),r.a.createElement(E.a,null,r.a.createElement(b.a,{exact:!0,path:"/",render:function(){return r.a.createElement(I,{episode:n})}}),r.a.createElement(b.a,{path:"/menu",component:L}),r.a.createElement(b.a,{path:"/people",render:function(){return r.a.createElement(J,{handleStoreData:e.handleStoreData,category:"people",returnToLanding:e.handleTitleScroll,setError:e.setError})}}),r.a.createElement(b.a,{path:"/vehicles",render:function(){return r.a.createElement(J,{handleStoreData:e.handleStoreData,category:"vehicles",returnToLanding:e.handleTitleScroll,setError:e.setError})}}),r.a.createElement(b.a,{path:"/planets",render:function(){return r.a.createElement(J,{handleStoreData:e.handleStoreData,category:"planets",returnToLanding:e.handleTitleScroll,setError:e.setError})}}),r.a.createElement(b.a,{path:"/favorites",render:function(){return r.a.createElement(J,{handleStoreData:e.handleStoreData,category:"favorites",returnToLanding:e.handleTitleScroll,setError:e.setError})}}))):r.a.createElement("div",{className:"App"},r.a.createElement(x,null),r.a.createElement(P,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var _=r.a.createElement(c.a,null,r.a.createElement(H,null));l.a.render(_,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,2,1]]]);
//# sourceMappingURL=main.e993c7bc.chunk.js.map