(window.webpackJsonp=window.webpackJsonp||[]).push([[6,12],{172:function(e,t,o){"use strict";var i=o(52);o.n(i).a},222:function(e,t,o){"use strict";o.r(t);var i=o(85);let n=null;var s={props:{author:{type:String,default:"kuaizi-co"},size:{type:Number,default:50},width:{type:Number,default:200}},components:{PopOver:i.default},data:()=>({cardVisible:!1}),methods:{togglePopOver(e){clearTimeout(n),e?this.cardVisible=e:n=setTimeout(()=>this.cardVisible=e,300)}},computed:{authorAvatar(){return"https://github.com/"+(this.author||"Kuaizi-co")+".png?size="+(this.size||50)}}},l=(o(172),o(1)),r=Object(l.a)(s,function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"theme-track--github-card"},[o("span",{on:{mouseenter:function(t){return e.togglePopOver(!0)},mouseleave:function(t){return e.togglePopOver(!1)}}},[o("img",{attrs:{src:e.authorAvatar}})]),e._v(" "),e._t("default"),e._v(" "),o("pop-over",{attrs:{user:e.author,top:e.size,width:e.width,closeDelay:300},nativeOn:{mouseenter:function(t){return e.togglePopOver(!0)},mouseleave:function(t){return e.togglePopOver(!1)}},model:{value:e.cardVisible,callback:function(t){e.cardVisible=t},expression:"cardVisible"}})],2)},[],!1,null,null,null);t.default=r.exports},25:function(e,t,o){},50:function(e,t,o){var i;e.exports=(i=o(0),function(e){function t(i){if(o[i])return o[i].exports;var n=o[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var o={};return t.m=e,t.c=o,t.i=function(e){return e},t.d=function(e,t,o){Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/lib/",t(t.s=6)}([function(e,t){e.exports=i},function(e,t,o){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.PopupManager=void 0;var n=o(0),s=i(n),l=o(4),r=o(3),a=i(r);o(5);var d=1,u=[],c=void 0;t.default={props:{value:{type:Boolean,default:!1},transition:{type:String,default:""},openDelay:{},closeDelay:{},zIndex:{},modal:{type:Boolean,default:!1},modalFade:{type:Boolean,default:!0},modalClass:{},lockScroll:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!1},closeOnClickModal:{type:Boolean,default:!1}},created:function(){this.transition&&function(e){if(-1===u.indexOf(e)){var t=function(e){var t=e.__vue__;if(!t){var o=e.previousSibling;o.__vue__&&(t=o.__vue__)}return t};s.default.transition(e,{afterEnter:function(e){var o=t(e);o&&o.doAfterOpen&&o.doAfterOpen()},afterLeave:function(e){var o=t(e);o&&o.doAfterClose&&o.doAfterClose()}})}}(this.transition)},beforeMount:function(){this._popupId="popup-"+d++,a.default.register(this._popupId,this)},beforeDestroy:function(){a.default.deregister(this._popupId),a.default.closeModal(this._popupId),this.modal&&null!==this.bodyOverflow&&"hidden"!==this.bodyOverflow&&(document.body.style.overflow=this.bodyOverflow,document.body.style.paddingRight=this.bodyPaddingRight),this.bodyOverflow=null,this.bodyPaddingRight=null},data:function(){return{opened:!1,bodyOverflow:null,bodyPaddingRight:null,rendered:!1}},watch:{value:function(e){var t=this;if(e){if(this._opening)return;this.rendered?this.open():(this.rendered=!0,s.default.nextTick(function(){t.open()}))}else this.close()}},methods:{open:function(e){var t=this;this.rendered||(this.rendered=!0,this.$emit("input",!0));var o=(0,l.merge)({},this,e);this._closeTimer&&(clearTimeout(this._closeTimer),this._closeTimer=null),clearTimeout(this._openTimer);var i=Number(o.openDelay);i>0?this._openTimer=setTimeout(function(){t._openTimer=null,t.doOpen(o)},i):this.doOpen(o)},doOpen:function(e){if(!this.$isServer&&(!this.willOpen||this.willOpen())&&!this.opened){this._opening=!0,this.visible=!0,this.$emit("input",!0);var t=function e(t){return 3===t.nodeType&&(t=t.nextElementSibling||t.nextSibling,e(t)),t}(this.$el),o=e.modal,i=e.zIndex;if(i&&(a.default.zIndex=i),o&&(this._closing&&(a.default.closeModal(this._popupId),this._closing=!1),a.default.openModal(this._popupId,a.default.nextZIndex(),t,e.modalClass,e.modalFade),e.lockScroll)){this.bodyOverflow||(this.bodyPaddingRight=document.body.style.paddingRight,this.bodyOverflow=document.body.style.overflow),c=function(){if(!s.default.prototype.$isServer){if(void 0!==c)return c;var e=document.createElement("div");e.style.visibility="hidden",e.style.width="100px",e.style.position="absolute",e.style.top="-9999px",document.body.appendChild(e);var t=e.offsetWidth;e.style.overflow="scroll";var o=document.createElement("div");o.style.width="100%",e.appendChild(o);var i=o.offsetWidth;return e.parentNode.removeChild(e),t-i}}();var n=document.documentElement.clientHeight<document.body.scrollHeight;c>0&&n&&(document.body.style.paddingRight=c+"px"),document.body.style.overflow="hidden"}"static"===getComputedStyle(t).position&&(t.style.position="absolute"),t.style.zIndex=a.default.nextZIndex(),this.opened=!0,this.onOpen&&this.onOpen(),this.transition||this.doAfterOpen()}},doAfterOpen:function(){this._opening=!1},close:function(){var e=this;if(!this.willClose||this.willClose()){null!==this._openTimer&&(clearTimeout(this._openTimer),this._openTimer=null),clearTimeout(this._closeTimer);var t=Number(this.closeDelay);t>0?this._closeTimer=setTimeout(function(){e._closeTimer=null,e.doClose()},t):this.doClose()}},doClose:function(){var e=this;this.visible=!1,this.$emit("input",!1),this._closing=!0,this.onClose&&this.onClose(),this.lockScroll&&setTimeout(function(){e.modal&&"hidden"!==e.bodyOverflow&&(document.body.style.overflow=e.bodyOverflow,document.body.style.paddingRight=e.bodyPaddingRight),e.bodyOverflow=null,e.bodyPaddingRight=null},200),this.opened=!1,this.transition||this.doAfterClose()},doAfterClose:function(){a.default.closeModal(this._popupId),this._closing=!1}}},t.PopupManager=a.default},function(e,t){var o=function(e,t){if(!e||!t)return!1;if(-1!=t.indexOf(" "))throw new Error("className should not contain space.");return e.classList?e.classList.contains(t):(" "+e.className+" ").indexOf(" "+t+" ")>-1};e.exports={hasClass:o,addClass:function(e,t){if(e){for(var i=e.className,n=(t||"").split(" "),s=0,l=n.length;s<l;s++){var r=n[s];r&&(e.classList?e.classList.add(r):o(e,r)||(i+=" "+r))}e.classList||(e.className=i)}},removeClass:function(e,t){if(e&&t){for(var i=t.split(" "),n=" "+e.className+" ",s=0,l=i.length;s<l;s++){var r=i[s];r&&(e.classList?e.classList.remove(r):o(e,r)&&(n=n.replace(" "+r+" "," ")))}e.classList||(e.className=function(e){return(e||"").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g,"")}(n))}}}},function(e,t,o){"use strict";t.__esModule=!0;var i=o(0),n=function(e){return e&&e.__esModule?e:{default:e}}(i),s=o(2),l=!1,r=function(){if(!n.default.prototype.$isServer){var e=d.modalDom;return e?l=!0:(l=!1,e=document.createElement("div"),d.modalDom=e,e.addEventListener("touchmove",function(e){e.preventDefault(),e.stopPropagation()}),e.addEventListener("click",function(){d.doOnModalClick&&d.doOnModalClick()})),e}},a={},d={zIndex:2e3,modalFade:!0,getInstance:function(e){return a[e]},register:function(e,t){e&&t&&(a[e]=t)},deregister:function(e){e&&(a[e]=null,delete a[e])},nextZIndex:function(){return d.zIndex++},modalStack:[],doOnModalClick:function(){var e=d.modalStack[d.modalStack.length-1];if(e){var t=d.getInstance(e.id);t&&t.closeOnClickModal&&t.close()}},openModal:function(e,t,o,i,a){if(!n.default.prototype.$isServer&&e&&void 0!==t){this.modalFade=a;for(var d=this.modalStack,u=0,c=d.length;u<c;u++){var p=d[u];if(p.id===e)return}var h=r();if((0,s.addClass)(h,"v-modal"),this.modalFade&&!l&&(0,s.addClass)(h,"v-modal-enter"),i){var f=i.trim().split(/\s+/);f.forEach(function(e){return(0,s.addClass)(h,e)})}setTimeout(function(){(0,s.removeClass)(h,"v-modal-enter")},200),o&&o.parentNode&&11!==o.parentNode.nodeType?o.parentNode.appendChild(h):document.body.appendChild(h),t&&(h.style.zIndex=t),h.style.display="",this.modalStack.push({id:e,zIndex:t,modalClass:i})}},closeModal:function(e){var t=this.modalStack,o=r();if(t.length>0){var i=t[t.length-1];if(i.id===e){if(i.modalClass){var n=i.modalClass.trim().split(/\s+/);n.forEach(function(e){return(0,s.removeClass)(o,e)})}t.pop(),t.length>0&&(o.style.zIndex=t[t.length-1].zIndex)}else for(var l=t.length-1;l>=0;l--)if(t[l].id===e){t.splice(l,1);break}}0===t.length&&(this.modalFade&&(0,s.addClass)(o,"v-modal-leave"),setTimeout(function(){0===t.length&&(o.parentNode&&o.parentNode.removeChild(o),o.style.display="none",d.modalDom=void 0),(0,s.removeClass)(o,"v-modal-leave")},200))}};!n.default.prototype.$isServer&&window.addEventListener("keydown",function(e){if(27===e.keyCode&&d.modalStack.length>0){var t=d.modalStack[d.modalStack.length-1];if(!t)return;var o=d.getInstance(t.id);o.closeOnPressEscape&&o.close()}}),t.default=d},function(e,t){"use strict";t.__esModule=!0,t.merge=function(e){for(var t=1,o=arguments.length;t<o;t++){var i=arguments[t];for(var n in i)if(i.hasOwnProperty(n)){var s=i[n];void 0!==s&&(e[n]=s)}}return e}},function(e,t){},function(e,t,o){e.exports=o(1)}]))},51:function(e,t,o){"use strict";var i=o(25);o.n(i).a},52:function(e,t,o){},85:function(e,t,o){"use strict";o.r(t);var i=o(50);const n="?tab=repositories",s="?tab=followers";var l={mixins:[o.n(i).a],props:{modal:{default:!0},closeOnClickModal:{default:!0},top:{type:Number,default:0},user:{type:String,required:!0},width:{type:Number,required:!0}},data:()=>({name:"",userUrl:null,avatar:null,repoNum:null,repoUrl:null,followersNum:null,followersUrl:null,gistsNum:null,gistsUrl:null}),computed:{popTop(){return this.top+6},authorAvatar(){return"https://github.com/"+(this.user||"Kuaizi-co")+".png?size="+(this.top||50)}},methods:{githubUserInfo:e=>fetch(`https://api.github.com/users/${e}`).then(e=>e.text()).then(e=>JSON.parse(e)),githubInfoHandle(e){const{avatar_url:t,name:o,html_url:i,followers:l,public_gists:r,public_repos:a}=e;this.avatar=t+"&size="+this.top,this.name=o,this.userUrl=i,this.repoNum=a,this.repoUrl=`${i}${n}`,this.followersNum=l,this.followersUrl=`${i}${s}`,this.gistsNum=r,this.gistsUrl=`https://gist.github.com/${this.user}`}},watch:{rendered(){this.user&&this.githubUserInfo(this.user).then(this.githubInfoHandle)}}},r=(o(51),o(1)),a=Object(r.a)(l,function(){var e=this,t=e.$createElement,o=e._self._c||t;return e.rendered?o("div",{directives:[{name:"show",rawName:"v-show",value:e.value,expression:"value"}],staticClass:"popover",style:{top:e.popTop+"px",width:e.width+"px"}},[o("div",{staticClass:"github-card"},[o("div",{staticClass:"github-header"}),e._v(" "),o("a",{staticClass:"user-link",style:{width:e.top+"px",height:e.top+"px"},attrs:{href:e.userUrl,target:"_blank"}},[o("img",{staticClass:"github-avatar",style:{width:e.top+"px",height:e.top+"px"},attrs:{src:e.avatar||e.authorAvatar}})]),e._v(" "),o("h3",[e._v("@"+e._s(e.name||e.user))]),e._v(" "),o("ul",{staticClass:"github-info"},[o("li",[o("a",{attrs:{href:e.repoUrl,target:"_blank"}},[o("strong",[e._v(e._s(e.repoNum))]),e._v("repos")])]),e._v(" "),o("li",[o("a",{attrs:{href:e.gistsUrl,target:"_blank"}},[o("strong",[e._v(e._s(e.gistsNum))]),e._v("gists")])]),e._v(" "),o("li",[o("a",{attrs:{href:e.followersUrl,target:"_blank"}},[o("strong",[e._v(e._s(e.followersNum))]),e._v("followers")])])])]),e._v(" "),o("div",{staticClass:"popover-arrow"})]):e._e()},[],!1,null,null,null);t.default=a.exports}}]);