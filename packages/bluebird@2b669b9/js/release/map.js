"use strict";module.exports=function(t,e,i,r,n,s){function o(t,e,i,r){this.constructor$(t),this._promise._captureStackTrace();var s=l();this._callback=null===s?e:c.domainBind(s,e),this._preservedValues=r===n?new Array(this.length()):null,this._limit=i,this._inFlight=0,this._queue=[],_.invoke(this._asyncInit,this,void 0)}function u(e,r,n,s){if("function"!=typeof r)return i("expecting a function but got "+c.classString(r));var u=0;if(void 0!==n){if("object"!=typeof n||null===n)return t.reject(new TypeError("options argument must be an object but it is "+c.classString(n)));if("number"!=typeof n.concurrency)return t.reject(new TypeError("'concurrency' must be a number but it is "+c.classString(n.concurrency)));u=n.concurrency}return u="number"==typeof u&&isFinite(u)&&u>=1?u:0,new o(e,r,u,s).promise()}var l=t._getDomain,c=require("./util"),h=c.tryCatch,a=c.errorObj,_=t._async;c.inherits(o,e),o.prototype._asyncInit=function(){this._init$(void 0,-2)},o.prototype._init=function(){},o.prototype._promiseFulfilled=function(e,i){var n=this._values,o=this.length(),u=this._preservedValues,l=this._limit;if(i<0){if(i=i*-1-1,n[i]=e,l>=1&&(this._inFlight--,this._drainQueue(),this._isResolved()))return!0}else{if(l>=1&&this._inFlight>=l)return n[i]=e,this._queue.push(i),!1;null!==u&&(u[i]=e);var c=this._promise,_=this._callback,p=c._boundValue();c._pushContext();var f=h(_).call(p,e,i,o),v=c._popContext();if(s.checkForgottenReturns(f,v,null!==u?"Promise.filter":"Promise.map",c),f===a)return this._reject(f.e),!0;var y=r(f,this._promise);if(y instanceof t){y=y._target();var m=y._bitField;if(0===(50397184&m))return l>=1&&this._inFlight++,n[i]=y,y._proxy(this,(i+1)*-1),!1;if(0===(33554432&m))return 0!==(16777216&m)?(this._reject(y._reason()),!0):(this._cancel(),!0);f=y._value()}n[i]=f}var d=++this._totalResolved;return d>=o&&(null!==u?this._filter(n,u):this._resolve(n),!0)},o.prototype._drainQueue=function(){for(var t=this._queue,e=this._limit,i=this._values;t.length>0&&this._inFlight<e;){if(this._isResolved())return;var r=t.pop();this._promiseFulfilled(i[r],r)}},o.prototype._filter=function(t,e){for(var i=e.length,r=new Array(i),n=0,s=0;s<i;++s)t[s]&&(r[n++]=e[s]);r.length=n,this._resolve(r)},o.prototype.preservedValues=function(){return this._preservedValues},t.prototype.map=function(t,e){return u(this,t,e,null)},t.map=function(t,e,i,r){return u(t,e,i,r)}};