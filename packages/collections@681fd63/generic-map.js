"use strict";function GenericMap(){throw new Error("Can't construct. GenericMap is a mixin.")}function Item(e,t){this.key=e,this.value=t}var Object=require("./shim-object"),Iterator=require("./iterator");module.exports=GenericMap,GenericMap.prototype.isMap=!0,GenericMap.prototype.addEach=function(e){var t;if(e&&Object(e)===e)if("function"==typeof e.forEach)e.isMap===!0?e.forEach(function(e,t){this.set(t,e)},this):e.forEach(function(e){this.set(e[0],e[1])},this);else if("number"==typeof e.length)for(t=0;t<e.length;t++)this.add(e[t],t);else Object.keys(e).forEach(function(t){this.set(t,e[t])},this);else if(e&&"number"==typeof e.length)for(t=0;t<e.length;t++)this.add(e[t],t);return this},GenericMap.prototype.get=function(e,t){var r=this.store.get(new this.Item(e));return r?r.value:arguments.length>1?(console.log("Use of a second argument as default value is deprecated to match standards"),t):this.getDefault(e)},GenericMap.prototype.set=function(e,t){var r=new this.Item(e,t),i=this.store.get(r),n=!1;return i?(this.dispatchesMapChanges&&this.dispatchBeforeMapChange(e,i.value),i.value=t,this.dispatchesMapChanges&&this.dispatchMapChange(e,t)):(this.dispatchesMapChanges&&this.dispatchBeforeMapChange(e,void 0),this.store.add(r)&&(this.length++,n=!0),this.dispatchesMapChanges&&this.dispatchMapChange(e,t)),this},GenericMap.prototype.add=function(e,t){return this.set(t,e)},GenericMap.prototype.has=function(e){return this.store.has(new this.Item(e))},GenericMap.prototype["delete"]=function(e){var t=new this.Item(e);if(this.store.has(t)){var r=this.store.get(t).value;return this.dispatchesMapChanges&&this.dispatchBeforeMapChange(e,r),this.store["delete"](t),this.length--,this.dispatchesMapChanges&&this.dispatchMapChange(e,void 0),!0}return!1},GenericMap.prototype.clear=function(){var e,t;if(this.dispatchesMapChanges&&(this.forEach(function(e,t){this.dispatchBeforeMapChange(t,e)},this),e=this.keysArray()),this.store.clear(),this.length=0,this.dispatchesMapChanges)for(var r=0;t=e[r];r++)this.dispatchMapChange(t)},GenericMap.prototype.reduce=function(e,t,r){return this.store.reduce(function(t,i){return e.call(r,t,i.value,i.key,this)},t,this)},GenericMap.prototype.reduceRight=function(e,t,r){return this.store.reduceRight(function(t,i){return e.call(r,t,i.value,i.key,this)},t,this)},GenericMap.prototype.keysArray=function(){return this.map(function(e,t){return t})},GenericMap.prototype.keys=function(){return new Iterator(this.keysArray())},GenericMap.prototype.valuesArray=function(){return this.map(Function.identity)},GenericMap.prototype.values=function(){return new Iterator(this.valuesArray())},GenericMap.prototype.entriesArray=function(){return this.map(function(e,t){return[t,e]})},GenericMap.prototype.entries=function(){return new Iterator(this.entriesArray())},GenericMap.prototype.items=function(){return this.entriesArray()},GenericMap.prototype.equals=function(e,t){if(t=t||Object.equals,this===e)return!0;if(e&&"function"==typeof e.every)return e.length===this.length&&e.every(function(e,r){return t(this.get(r),e)},this);var r=Object.keys(e);return r.length===this.length&&Object.keys(e).every(function(r){return t(this.get(r),e[r])},this)},GenericMap.prototype.toJSON=function(){return this.entriesArray()},GenericMap.prototype.Item=Item,Item.prototype.equals=function(e){return Object.equals(this.key,e.key)&&Object.equals(this.value,e.value)},Item.prototype.compare=function(e){return Object.compare(this.key,e.key)};