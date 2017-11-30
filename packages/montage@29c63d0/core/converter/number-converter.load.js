montageDefine("29c63d0","core/converter/number-converter",{dependencies:["./converter","./converter","./converter","./converter","../shim/string"],factory:function(e,r,a){var t=e("./converter").Converter,n=e("./converter").Validator,l=e("./converter").isNumber,o=e("./converter").isDef;e("../shim/string");var i=/^([\-]?\d+\.?\d*)([K,M,G,T,P,k,m,u,n]?)[B]?$/,u=["P","T","B","M","K","","m","u","n"],v=r.NUMERIC_SCALES_SI_={"":1,n:1e-9,u:1e-6,m:.001,k:1e3,K:1e3,M:1e6,B:1e9,T:1e12,P:1e15},s=r.NUMERIC_SCALES_BINARY_={"":1,n:Math.pow(1024,-3),u:Math.pow(1024,-2),m:1/1024,k:1024,K:1024,M:Math.pow(1024,2),G:Math.pow(1024,3),T:Math.pow(1024,4),P:Math.pow(1024,5)},c=r._numericValueToString=function(e,r,a,t,n){n=n||u;var l=e,i="",v=1;e<0&&(e=-e);for(var s=0;s<n.length;s++){var c=n[s];if(v=r[c],e>=v||v<=1&&e>.1*v){i=c;break}}i?t&&(i+=t):v=1;var h=Math.pow(10,o(a)?a:2);return Math.round(l/v*h)/h+i},h=function(e,r){var a=e.match(i);return a?a[1]*r[a[2]]:NaN},d=(r.stringToNumericValue=function(e){return e.endsWith("B")?h(e,s):h(e,v)},r.numericValueToString=function(e,r){return c(e,v,r)}),m=r.NumberValidator=n.specialize({allowFloat:{value:!0},allowNegative:{value:!0},validate:{value:function(e){var r;return e=e||"",e=e.replace(/,/g,""),r=l(e)?e:this.allowFloat===!0?parseFloat(e,10):parseInt(e,10),isNaN(r)?{message:"Invalid Number"}:r}}});r.NumberConverter=t.specialize({allowPartialConversion:{value:!1},validator:{value:new m},shorten:{value:null},decimals:{value:2},forceDecimals:{value:!1},round:{value:null},_reg:{value:/(\d+)(\d{3})/},allowFloat:{value:!0},allowNegative:{value:!0},_makeReadable:{value:function(e,r,a){r=r||",",a=a||".";for(var t=e.toString().split("."),n=t[0];this._reg.test(n);)n=n.replace(this._reg,"$1"+r+"$2");var l=t.length>1?t[1]:"";if(this.forceDecimals)for(;l.length<this.decimals;)l+="0";var o=l.length>0?a+l:"";return n+o}},convert:{value:function(e){if(this.shorten)return d(e,this.decimals);var r;if(this.round)r=Number(Math.round(e)).toString();else{var a=Math.pow(10,this.decimals||2),t=1;r=Number(Math.round(e/t*a)/a)}return this._makeReadable(r)}},revert:{value:function(e){this.validator.allowFloat=this.allowFloat,this.validator.allowNegative=this.allowNegative;var r=this.validator.validate(e);if(l(r))return r;throw new Error(r.message)}}})}});