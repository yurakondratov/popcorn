montageDefine("b1a3efc","core/request",{dependencies:["./promise"],factory:function(e,r,o){var t=e("./promise").Promise;o.exports=function(e){e=r.normalizeRequest(e);var o=new t(function(o,t){var n=e.xhr||new XMLHttpRequest;n.open(e.method,e.url,!0),n.onload=function(){var e={status:n.status,headers:r.parseResponseHeaders(n.getAllResponseHeaders()),body:n.response,xhr:n};o(e)},n.onerror=function(){t(new Error("Could not load"))};var s=e.headers;for(var a in s){var i=s[a];if(Array.isArray(i))for(var u=0;u<i.length;u++)n.setRequestHeader(a,i[u]);else n.setRequestHeader(a,i)}var p=e.options;for(var d in p)n[d]=p[d];e.overrideMimeType&&n.overrideMimeType(e.overrideMimeType),n.send(e.body)});return o},r=o.exports,r.request=r,r.makeOk=function(e){return function(o){o=r.normalizeRequest(o);var n=o.url;return t.resolve(e(o)).then(function(e){if(e.status>=200&&e.status<300)return e;var r=new Error("Could not load "+JSON.stringify(n)+": "+e.status+" "+e.xhr.statusText);throw r.response=e,r})}},r.ok=r.makeOk(r.request),r.makeJson=function(e){return function(o){o=r.normalizeRequest(o);var n=o.url;return o.headers.accept=o.headers.accept||"application/json",o.headers["content-type"]=o.headers["content-type"]||"application/json","object"==typeof o.body&&(o.body=JSON.stringify(o.body)),o.overrideMimeType=o.overrideMimeType||"application/json",o.options.responseType=o.options.responseType||"json",t.resolve(e(o)).then(function(e){if(null===e.body||"string"==typeof e.body)try{e.body=JSON.parse(e.body)}catch(r){throw new Error("Could not parse JSON from "+JSON.stringify(n)+": "+r.message)}return e})}},r.json=r.makeJson(r.request),r.normalizeRequest=function(e){return"string"==typeof e&&(e={url:e}),e.method=e.method||"GET",e.headers=e.headers||{},e.options=e.options||{},e},r.parseResponseHeaders=function(e){var r={};return e?(e.replace(/^([^:]+):(.*)$/gm,function(e,o,t){o=o.trim().toLowerCase(),t=t.trim(),o in r?("string"==typeof r[o]&&(r[o]=[r[o]]),r[o].push(t)):r[o]=t}),r):r}}});