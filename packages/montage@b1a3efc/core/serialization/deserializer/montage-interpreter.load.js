montageDefine("b1a3efc","core/serialization/deserializer/montage-interpreter",{dependencies:["../../core","./montage-reviver","../../promise","../../deprecate"],factory:function(e,i,t){var n=e("../../core").Montage,r=e("./montage-reviver").MontageReviver,s=e("../../promise").Promise,o=e("../../deprecate"),a="=",u="<-",l="<->",c=n.specialize({_require:{value:null},_reviver:{value:null},init:{value:function(e,i){if(o.deprecationWarningOnce("MontageInterpreter","MontageDeserializer"),"function"!=typeof e)throw new Error("Function 'require' missing.");return this._reviver=i,this._require=e,this}},instantiate:{value:function(e,t,n){var r;return r=(new i.MontageContext).init(e,this._reviver,t,n,this._require),r.getObjects()}},preloadModules:{value:function(e){var i,t,n,o,a=this._reviver,u=a.moduleLoader,l=[];for(var c in e)if(e.hasOwnProperty(c)&&(i=e[c],t=i.prototype||i.object)){if("string"!=typeof t)throw new Error("Property 'object' of the object with the label '"+c+"' must be a module id");n=r.parseObjectLocationId(t),o=u.getModule(n.moduleId,c),s.is(o)&&l.push(o)}if(l.length>0)return s.all(l)}}}),v=n.specialize({_ELEMENT_ID_ATTRIBUTE:{value:"data-montage-id"},_unitsToDeserialize:{value:null},_element:{value:null},_require:{value:null},_objects:{value:null},_userObjects:{value:null},_serialization:{value:null},_reviver:{value:null},_bindingsToDeserialize:{value:null},constructor:{value:function(){this._unitsToDeserialize=[]}},init:{value:function(e,i,t,n,r){if(this._reviver=i,this._serialization=e,this._objects=Object.create(null),t){this._userObjects=Object.create(null);for(var s in t)this._userObjects[s]=t[s]}return this._element=n,this._require=r,this}},setObjectLabel:{value:function(e,i){this._objects[i]=e}},getObject:{value:function(e){var i,t=this._serialization,n=this._reviver,r=this._objects;return e in r?r[e]:e in t?(i=n.reviveRootObject(t[e],this,e),e in r||(r[e]=i),i):s.reject(new Error("Object with label '"+e+"' was not found."))}},getObjects:{value:function(){var e,i=this,t=this._serialization,n=[];for(var r in t)t.hasOwnProperty(r)&&(e=this.getObject(r),s.is(e)&&n.push(e));return 0===n.length?s.resolve(this._invokeDidReviveObjects()):s.all(n).then(function(){return i._invokeDidReviveObjects()})}},hasUserObject:{value:function(e){var i=this._userObjects;return!!i&&e in i}},getUserObject:{value:function(e){var i=this._userObjects;if(i)return i[e]}},_invokeDidReviveObjects:{value:function(){var e,i=this,t=this._reviver;return"function"==typeof t.didReviveObjects&&(e=t.didReviveObjects(this._objects,this),s.is(e))?e.then(function(){return i._objects}):this._objects}},hasObject:{value:function(e){return e in this._serialization}},getRequire:{value:function(){return this._require}},getElement:{value:function(){return this._element}},getElementById:{value:function(e){var i="*["+this._ELEMENT_ID_ATTRIBUTE+'="'+e+'"]';return this._element.querySelector(i)}},_extractBindingsToDeserialize:{value:function(e,i){var t;for(var n in e)e.hasOwnProperty(n)&&(t=e[n],("object"==typeof t&&t&&1===Object.keys(t).length&&(u in t||l in t||a in t)||n.indexOf(".")>-1)&&(i[n]=t,delete e[n]));return i}},getBindingsToDeserialize:{value:function(){return this._bindingsToDeserialize}},setBindingsToDeserialize:{value:function(e,i){var t=Object.create(null);i.values?this._extractBindingsToDeserialize(i.values,t):i.properties&&this._extractBindingsToDeserialize(i.properties,t),Object.keys(t).length>0&&(this._bindingsToDeserialize||(this._bindingsToDeserialize=[]),this._bindingsToDeserialize.push({object:e,bindings:t}))}},setUnitsToDeserialize:{value:function(e,i,t){this._unitsToDeserialize.push({object:e,objectDesc:i,unitNames:t})}},getUnitsToDeserialize:{value:function(){return this._unitsToDeserialize}}});i.MontageInterpreter=c,i.MontageContext=v}});