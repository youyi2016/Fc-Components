(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{321:function(t,n,e){},353:function(t,n,e){e(1)({target:"Function",proto:!0},{bind:e(183)})},354:function(t,n,e){var o=e(1),s=e(4),i=e(104),c=[].slice,r=function(t){return function(n,e){var o=arguments.length>2,s=o?c.call(arguments,2):void 0;return t(o?function(){("function"==typeof n?n:Function(n)).apply(this,s)}:n,e)}};o({global:!0,bind:!0,forced:/MSIE .\./.test(i)},{setTimeout:r(s.setTimeout),setInterval:r(s.setInterval)})},355:function(t,n,e){"use strict";var o=e(321);e.n(o).a},358:function(t,n,e){"use strict";e.r(n);e(95),e(353),e(72),e(11),e(97),e(354),e(105);var o=e(63),s=e(29),i=e(64);e(182);function c(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}e(175),e(171);var r={name:"Message",props:{config:Object},data:function(){return{active:!1,text:"",theme:"default",position:"",bottomDis:"26",topDis:"26",background:"",color:""}},computed:{styles:function(){var t="background: ".concat(this.background||this.config[this.theme].background),n="";return["top","bottom"].includes(this.position)&&(n="".concat(this.position,":").concat(this["".concat(this.position,"Dis")],"px;")),n.concat(t)}}},a=(e(355),e(44)),u=Object(a.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("transition",{attrs:{name:"message"}},[t.active?e("div",{staticClass:"message-bar",class:t.position||t.config.position,style:t.styles},[e("span",{staticClass:"icon",class:t.theme}),t._v(" "),e("span",{staticClass:"message-bar-text",style:"color:"+(t.color||t.config.color)+";"},[t._v(t._s(t.text))])]):t._e()])],1)}),[],!1,null,"fd6fe954",null).exports,l="#ffffff",h="#292544",f={text:h,background:l,position:"top",close:!1,time:2e3,default:{color:h,background:l},success:{color:h,background:l},warn:{color:h,background:l},error:{color:h,background:l}},p=e(0),m={error:"error",show:"default",success:"success",warn:"warn"};function g(t){return new Promise((function(n){return setTimeout((function(){return n()}),t)}))}var b=function(){function t(){var n=this;Object(s.a)(this,t),c(this,"Constructor",null),c(this,"component",null),c(this,"timeout",null),c(this,"closing",null),c(this,"options",null),c(this,"config",{config:null}),c(this,"message",(function(t){var e={},o={};t.methods=t.methods||[],t.methods.forEach((function(t){e[t.name]=t.name,o[t.name]={primary:t.color||f.default.primary}})),Object.assign(f,o);var s={},i=Object.assign({},m,e),c=function(t){s[t]=function(e){return n.actions(e,i[t])}};for(var r in i)c(r);return s}))}var n;return Object(i.a)(t,[{key:"install",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.Constructor=t.extend(u),this.create(),Object.assign(f,n),t.prototype.$message=t.$message=this.message(n)}},{key:"create",value:function(){this.config.config=f,this.component=new this.Constructor({propsData:this.config}),this.component.$on("close",(function(){return close()}))}},{key:"close",value:function(){this.component.active=!1,clearTimeout(this.timeout)}},{key:"actions",value:(n=Object(o.a)(regeneratorRuntime.mark((function t(n,e){var s;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.options=n,!this.component.active||!this.closing){t.next=3;break}return t.abrupt("return");case 3:if(!this.component.active){t.next=9;break}return this.close(),this.closing=!0,t.next=8,g(400);case 8:this.closing=!1;case 9:"string"==typeof this.options&&(this.options={text:this.options}),s=this.options.action,this.options.action=Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(s){t.next=2;break}return t.abrupt("return",close());case 2:s(),close();case 4:case"end":return t.stop()}}),t)}))),Object.assign(this.config.config,f[e]),Object.assign(this.component,{color:"",background:"",theme:e},this.options),this.component.active=!0,this.timeout=setTimeout(this.close.bind(this),this.options.time||f.time);case 16:case"end":return t.stop()}}),t,this)}))),function(t,e){return n.apply(this,arguments)})}]),t}();p.a.use(new b);var d=(new p.a).$message,v={methods:{showToast:function(){d.success("成功～")}}},k=Object(a.a)(v,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"button"}},[n("button",{on:{click:this.showToast}},[this._v("showToast")])])}),[],!1,null,"5e8dd5ba",null);n.default=k.exports}}]);