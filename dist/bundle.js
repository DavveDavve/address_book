!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";var r=window.localStorage,o=function(){var e=JSON.parse(r.getItem("contacts")),t=document.querySelector(".contact-list");if(e){t.innerHTML="";var n=document.createElement("ul");e.forEach((function(e){var n=document.createElement("div");n.innerHTML='  \n    <div class="ui column">\n        <div class="ui card">\n          <div class="image">\n            <img src="https://semantic-ui.com/images/avatar/large/elliot.jpg">\n          </div>\n            <div class="content">\n                <div class="header">\n                '+e.name+'\n                </div>\n                <div class="description"> \n                    '+e.notes+" <br>\n                    "+e.email+" <br>\n                    "+e.company+'\n                </div>\n                <div class="extra content">\n                    <a href="https://www.twitter.com/'+e.twitter+'">@'+e.twitter+'</a><img src="https://www.shareicon.net/data/128x128/2017/06/22/887584_logo_512x512.png" height="25" width="25">\n                </div>\n            </div>\n    </div>\n        ',t.appendChild(n)})),li.appendChild(n)}else t.innerHTML="<p>You have no contacts in your address book</p>"};document.addEventListener("DOMContentLoaded",(function(){o();var e=document.querySelector(".new-contact-form");e.addEventListener("submit",(function(t){t.preventDefault();var n=e.elements,a=n.name,i=n.email,c=n.phone,l=n.company,u=n.notes,s=n.twitter,d={id:Date.now(),name:a.value,email:i.value,phone:c.value,company:l.value,notes:u.value,twitter:s.value};console.log("Saving the following contact: "+JSON.stringify(d)),e.reset();var v=JSON.parse(r.getItem("contacts"))||[];v.push(d),r.setItem("contacts",JSON.stringify(v)),o()}))}))}]);