function TransformState(r,t){this.afterTransform=function(r,e){return afterTransform(t,r,e)},this.needTransform=!1,this.transforming=!1,this.writecb=null,this.writechunk=null}function afterTransform(r,t,e){var n=r._transformState;n.transforming=!1;var a=n.writecb;if(!a)return r.emit("error",new Error("no writecb in Transform class"));n.writechunk=null,n.writecb=null,null!==e&&void 0!==e&&r.push(e),a&&a(t);var i=r._readableState;i.reading=!1,(i.needReadable||i.length<i.highWaterMark)&&r._read(i.highWaterMark)}function Transform(r){if(!(this instanceof Transform))return new Transform(r);Duplex.call(this,r);var t=(this._transformState=new TransformState(r,this),this);this._readableState.needReadable=!0,this._readableState.sync=!1,this.once("finish",function(){"function"==typeof this._flush?this._flush(function(r){done(t,r)}):done(t)})}function done(r,t){if(t)return r.emit("error",t);var e=r._writableState,n=(r._readableState,r._transformState);if(e.length)throw new Error("calling transform done when ws.length != 0");if(n.transforming)throw new Error("calling transform done when still transforming");return r.push(null)}module.exports=Transform;var Duplex=require("./_stream_duplex"),util=require("core-util-is");util.inherits=require("inherits"),util.inherits(Transform,Duplex),Transform.prototype.push=function(r,t){return this._transformState.needTransform=!1,Duplex.prototype.push.call(this,r,t)},Transform.prototype._transform=function(r,t,e){throw new Error("not implemented")},Transform.prototype._write=function(r,t,e){var n=this._transformState;if(n.writecb=e,n.writechunk=r,n.writeencoding=t,!n.transforming){var a=this._readableState;(n.needTransform||a.needReadable||a.length<a.highWaterMark)&&this._read(a.highWaterMark)}},Transform.prototype._read=function(r){var t=this._transformState;null!==t.writechunk&&t.writecb&&!t.transforming?(t.transforming=!0,this._transform(t.writechunk,t.writeencoding,t.afterTransform)):t.needTransform=!0};