!function(t){var e={};function a(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=t,a.c=e,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=2)}([function(t,e){function a(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=a=function(t){return typeof t}:t.exports=a=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(e)}t.exports=a},function(t,e){!function(){t.exports=this.jQuery}()},function(t,e,a){"use strict";a.r(e);var n=a(0),i=a.n(n),o=(a(3),a(1));!function(t,e,a,n){function o(e,a){this.$qlwapp=t(e),this.init(this)}function p(){t("div#qlwapp").qlwapp()}t.fn.simulateClick=function(){return this.each((function(){if("createEvent"in a){var t=this.ownerDocument,e=t.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,t.defaultView,1,0,0,0,0,!1,!1,!1,!1,0,null),this.dispatchEvent(e)}else this.click()}))},o.prototype={timeDateToString:function(t){var e=""+t.getMinutes();return 1===e.length&&(e="0"+e),t.getHours()+":"+e},timeStringToInt:function(t,e){return parseInt(t+e)},init:function(a){var n=this.$qlwapp;if(n.on("qlwapp.init",(function(t){a.mobiledevice=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)})),n.on("qlwapp.time",(function(e){var n=t(e.target),i=n.data("timedays")||[],o=parseInt(n.data("timezone"))||0,p=new Date((new Date).getTime()+60*o*1e3).getUTCDay().toString();if(console.log(i),i&&i.length&&!i.includes(p)){n.addClass("qlwapp-readonly"),n.find(".qlwapp-days").show(),n.find(".qlwapp-time").hide();var r=i.reduce((function(t,e){return Math.abs(e-p)<Math.abs(t-p)?e:t}));return n.find(".day"+r).addClass("qlwapp-available-day"),!0}i&&i.length&&i.includes(p)&&(n.find(".qlwapp-days").hide(),n.find(".qlwapp-time").show());var l=n.data("timefrom")||!1,s=n.data("timeto")||!1;if(!s||!l||l===s)return!0;var d,u,c=new Date,f=-c.getTimezoneOffset()-o,g=new Date,w=new Date;if(d=a.timeStringToInt(l[0],l[1]),u=a.timeStringToInt(l[3],l[4]),w.setHours(d),w.setMinutes(u+f),d=a.timeStringToInt(s[0],s[1]),u=a.timeStringToInt(s[3],s[4]),g.setHours(d),g.setMinutes(u+f),c.getTime()>=w.getTime()&&c.getTime()<=g.getTime()||(n.addClass("qlwapp-readonly"),n.find(".qlwapp-days").hide(),n.find(".qlwapp-time").show()),!o)return!0;n.find(".from").text(a.timeDateToString(w)),n.find(".to").text(a.timeDateToString(g))})),n.on("qlwapp.pro",(function(e){n.find(".qlwapp-toggle").trigger("qlwapp.time"),n.find(".qlwapp-account").each((function(e,a){t(a).trigger("qlwapp.time")}))})),n.on("qlwapp.resize",(function(e){t(this).hasClass("qlwapp-show")&&t(this).trigger("qlwapp.toggle")})),n.on("qlwapp.init",(function(t){a.mobiledevice?n.addClass("mobile").removeClass("desktop"):n.addClass("desktop").removeClass("mobile"),n.addClass("qlwapp-js-ready")})),n.on("qlwapp.init",(function(t){n.hasClass("qlwapp-premium")&&n.trigger("qlwapp.pro")})),n.addClass("qlwapp-js-ready").trigger("qlwapp.init"),n.on("qlwapp.height",(function(n){var i=t(n.delegateTarget),o=i.find(".qlwapp-body").find(".qlwapp-carousel"),p=i.find(".qlwapp-header"),r=i.find(".qlwapp-footer"),l=t(e).innerHeight()-p.outerHeight()-r.outerHeight();a.mobiledevice||(l=.7*t(e).innerHeight()-p.outerHeight()-r.outerHeight()),o.css({"max-height":l+"px"})})),n.on("qlwapp.toggle",(function(e){var a=t(e.delegateTarget),n=a.find(".qlwapp-box");a.addClass("qlwapp-transition"),n.removeClass("response texting"),setTimeout((function(){a.toggleClass("qlwapp-show").trigger("qlwapp.height")}),10),setTimeout((function(){a.toggleClass("qlwapp-transition")}),300)})),n.on("click","[data-action=box], [data-action=close]",(function(e){e.preventDefault(),t(e.delegateTarget).trigger("qlwapp.toggle")})),n.on("click","[data-action=open]",(function(e){var n="https://api.whatsapp.com/send";a.mobiledevice||(n="https://web.whatsapp.com/send");var i=t(this),o=i.data("message")||"",p=i.data("phone")||"";t(this).attr("href",n+"?phone="+p+"&text="+o)})),n.on("click","[data-action=previous]",(function(e){e.preventDefault();var a=t(e.delegateTarget).find(".qlwapp-box");a.addClass("closing"),setTimeout((function(){a.removeClass("response").removeClass("closing"),a.removeClass("texting")}),300)})),n.on("click","[data-action=chat]",(function(e){e.preventDefault();var a=t(this),n=t(e.delegateTarget),i=n.find(".qlwapp-box"),o=a.find(".qlwapp-avatar img").attr("src"),p=a.find(".qlwapp-name").text(),r=a.find(".qlwapp-label").text(),l=a.find(".qlwapp-time").text(),s=a.data("message"),d=a.data("phone");i.addClass("response").addClass("opening"),n.trigger("qlwapp.height"),setTimeout((function(){i.removeClass("opening")}),300);var u=i.find(".qlwapp-reply"),c=i.find(".qlwapp-header"),f=c.find(".qlwapp-avatar img"),g=c.find(".qlwapp-number"),w=c.find(".qlwapp-name"),m=c.find(".qlwapp-label"),h=i.find(".qlwapp-message"),q=l?l+" - "+r:r;u.data("phone",d),f.attr("src",o),f.attr("alt",p),g.html(d),w.html(p),m.html(q),h.html(s)})),n.on("click","textarea",(function(t){n.off("qlwapp.resize")})),n.on("keypress","textarea",(function(t){13==t.keyCode&&setTimeout((function(){n.find(".qlwapp-reply").simulateClick("click")}),100)})),n.on("keyup","[data-action=response]",(function(e){e.preventDefault();var a=t(this).find("textarea"),n=t(this).find("pre"),i=t(this).find(".qlwapp-reply"),o=t(e.delegateTarget).find(".qlwapp-box"),p=o.find(".qlwapp-buttons");n.html(a.val()),setTimeout((function(){o.addClass("texting").css({"padding-bottom":n.outerHeight()}),p.addClass("active");var t=a.val();i.data("message",t),""==t&&(o.removeClass("texting"),p.removeClass("active"))}),300)})),n.hasClass("auto-load")&&t.cookie&&!t.cookie("qlwapp-auto-load")){var i=n.data("autoloadelay");setTimeout((function(){n.trigger("qlwapp.toggle")}),i),t.cookie("qlwapp-auto-load","auto open cookie",{expires:1})}}},t.fn.qlwapp=function(e){var a,n=arguments;return void 0===e||"object"===i()(e)?this.each((function(){t.data(this,"plugin_qlwapp")||t.data(this,"plugin_qlwapp",new o(this,e))})):"string"==typeof e&&"_"!==e[0]&&"init"!==e?(this.each((function(){var i=t.data(this,"plugin_qlwapp");i instanceof o&&"function"==typeof i[e]&&(a=i[e].apply(i,Array.prototype.slice.call(n,1))),"destroy"===e&&t.data(this,"plugin_qlwapp",null)})),void 0!==a?a:this):void 0},p(),t(e).on("load",(function(){p()})),t(e).on("click",(function(e){t(e.target).closest("#qlwapp.qlwapp-show").length||t("div#qlwapp.qlwapp-show").trigger("qlwapp.toggle")})),t(e).on("resize",(function(e){t("div#qlwapp").trigger("qlwapp.resize"),t("div#qlwapp").trigger("qlwapp.init")}))}(a.n(o).a,window,document)},function(t,e){}]);
/*This file was exported by "Export WP Page to Static HTML" plugin which created by ReCorp (https://myrecorp.com) */