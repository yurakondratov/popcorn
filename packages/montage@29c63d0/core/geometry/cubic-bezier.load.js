montageDefine("29c63d0","core/geometry/cubic-bezier",{dependencies:["../core","./point"],factory:function(e,i,t){var n=e("../core").Montage,p=e("./point").Point,s=i.CubicBezier=n.specialize({init:{enumerable:!1,value:function(e){return null!==e&&(2===e.length?(this.p1=e[0],this.p2=e[1]):4===e.length&&(this.p0=e[0],this.p1=e[1],this.p2=e[2],this.p3=e[3])),this}},position:{enumerable:!1,value:function(e){if(!(e<0||e>1)){e=1-e;var i=e*e*e,t=3*e*e*(1-e),n=3*e*(1-e)*(1-e),s=(1-e)*(1-e)*(1-e);return(new p).init(this.p0.x*i+this.p1.x*t+this.p2.x*n+this.p3.x*s,this.p0.y*i+this.p1.y*t+this.p2.y*n+this.p3.y*s)}}},split:{enumerable:!1,value:function(e){return this.makeScaffolding(e),(new s).init([this.p0,this.p01,this.p012,this.p0123])}},splitToTimingFunction:{enumerable:!1,value:function(e){this.makeScaffolding(e);var i=this.p0123.x,t=this.p0123.y;return(new s).init([(new p).init(this.p01.x/i,this.p01.y/t),(new p).init(this.p012.x/i,this.p012.y/t)])}},makeScaffolding:{enumerable:!1,value:function(e){e=1-e;var i=1e6;n.defineProperty(this,"p01",{value:p.interpolate(e,this.p0,this.p1,i)}),n.defineProperty(this,"p12",{value:p.interpolate(e,this.p1,this.p2,i)}),n.defineProperty(this,"p23",{value:p.interpolate(e,this.p2,this.p3,i)}),n.defineProperty(this,"p012",{value:p.interpolate(e,this.p01,this.p12,i)}),n.defineProperty(this,"p123",{value:p.interpolate(e,this.p12,this.p23,i)}),n.defineProperty(this,"p0123",{value:p.interpolate(e,this.p012,this.p123,i)})}},p0:{enumerable:!0,value:(new p).init(0,0)},p1:{enumerable:!0,value:(new p).init(0,0)},p2:{enumerable:!0,value:(new p).init(1,1)},p3:{enumerable:!0,value:(new p).init(1,1)}})}});