(this.webpackJsonparia=this.webpackJsonparia||[]).push([[0],{67:function(e,t,a){e.exports=a(92)},73:function(e,t,a){e.exports=a.p+"static/media/logo.ee7cd8ed.svg"},74:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},92:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(26),o=a.n(i),s=(a(72),a(10)),l=a(11),c=a(14),u=a(15),d=(a(73),a(74),a(64)),p=a(48),m=a(16),h=a(36),v=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={test:13,input:12,value:0,setValue:0,currentActivation:"<select activation function>",currentInit:"<select weight initializer>",activations:["<select activation function>","relu","tanh","sigmoid","softmax"],inits:["<select weight initializer>","zeros","ones","normal","uniform","glorot uniform","he uniform"]},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("p",null,"Currently selected layer: ",this.props.appState.selectedLayer),r.a.createElement(h.a,{variant:"primary",onClick:function(){console.log("adding layer"),e.props.appState.doAddLayer()}},"Add Layer")," ",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(m.a,null,r.a.createElement(m.a.Toggle,{variant:"success",id:"dropdown-basic"},"Activation"),r.a.createElement(m.a.Menu,null,this.state.activations.map((function(t){return r.a.createElement(m.a.Item,{as:"button",onClick:function(){e.setState({currentActivation:t}),e.props.appState.doSetActivation(e.props.appState.selectedLayer,t)}},t)})))),r.a.createElement("br",null),r.a.createElement("p",null,this.props.appState.loadable?this.props.appState.network.arrLayers[this.props.appState.selectedLayer].activation:""),r.a.createElement("br",null),r.a.createElement(m.a,null,r.a.createElement(m.a.Toggle,{variant:"success",id:"dropdown-basic"},"Weight Initializer"),r.a.createElement(m.a.Menu,null,this.state.inits.map((function(t){return r.a.createElement(m.a.Item,{as:"button",onClick:function(){e.setState({currentInit:t}),e.props.appState.doSetWeightInit(e.props.appState.selectedLayer,t)}},t)})))),r.a.createElement("br",null),r.a.createElement("p",null,r.a.createElement("p",null,this.props.appState.loadable?this.props.appState.network.arrLayers[this.props.appState.selectedLayer].weightInit:"")),r.a.createElement("br",null))}}]),a}(n.Component),f=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={test:13,input:12,value:0,setValue:0,currentOpti:"<select optimizer>",optimizers:["<select optimizer>","SGD","RMSProp","Adadelta","Adam"]},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement(m.a,null,r.a.createElement(m.a.Toggle,{variant:"success",id:"dropdown-basic"},"Optimizer"),r.a.createElement(m.a.Menu,null,this.state.optimizers.map((function(t){return r.a.createElement(m.a.Item,{as:"button",onClick:function(){e.setState({currentOpti:t}),e.props.appState.doSetOptimizer(t)}},t)})))),r.a.createElement("br",null),r.a.createElement("p",null,this.state.currentOpti),r.a.createElement("br",null))}}]),a}(n.Component),g=a(46),y=(a(77),function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).doGetCode=function(e){var t="";t+=n.state.kerasCode.get("beginModel")+"\n";var a,r=Object(g.a)(e.arrLayers);try{for(r.s();!(a=r.n()).done;){var i=a.value;t+=n.state.kerasCode.get("addLayer"),t+=i.numNodes+", ",!0===i.isFirstLayer&&(t+=n.state.kerasCode.get("input_dim")+i.numNodes+", "),null!=i.activation&&(t+=n.getActivationCode(i)),t+=n.state.kerasCode.get("network_end")+"\n"}}catch(o){r.e(o)}finally{r.f()}return t+=n.state.kerasCode.get("compile")+n.state.kerasCode.get("losser")+"'"+e.loss+"', "+n.state.kerasCode.get("optimizer")+"'"+e.optimizer+"', "+n.state.kerasCode.get("metrics")+"'"+e.metrics+"'])"},n.state={kerasCode:new Map},n.state.kerasCode.set("beginModel","model = Sequential()"),n.state.kerasCode.set("addLayer","model.add(Dense("),n.state.kerasCode.set("input_dim","input_dim="),n.state.kerasCode.set("compile","model.compile("),n.state.kerasCode.set("losser","loss="),n.state.kerasCode.set("optimizer","optimizer="),n.state.kerasCode.set("metrics","metrics=["),n.state.kerasCode.set("network_end","))"),n}return Object(l.a)(a,[{key:"getActivationCode",value:function(e){return"activation='"+e.activation+"'"}},{key:"render",value:function(){return r.a.createElement("div",{class:"codepanel"},r.a.createElement("h1",null,"Code"),r.a.createElement("p",null,this.doGetCode(this.props.appState.network)))}}]),a}(n.Component)),b=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("p",null,"TrainPanel"))}}]),a}(n.Component),E=(a(78),function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(e){return Object(s.a)(this,a),t.call(this,e)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"sidebar"},r.a.createElement("div",{class:"settings"},r.a.createElement(d.a,{defaultActiveKey:"build",id:"settings"},r.a.createElement(p.a,{eventKey:"build",title:"Build"},r.a.createElement("div",null,r.a.createElement(v,{appState:this.props.appState}))),r.a.createElement(p.a,{eventKey:"learn",title:"Learn"},r.a.createElement("div",null,r.a.createElement(f,this.props))),r.a.createElement(p.a,{eventKey:"train",title:"Train"},r.a.createElement("div",null,r.a.createElement(b,this.props))))),r.a.createElement(y,{appState:this.props.appState}))}}]),a}(n.Component)),k=function(){function e(){Object(s.a)(this,e),this.arrLayers=[],this.optimizer=0,this.metrics=0,this.loss=0}return Object(l.a)(e,[{key:"copy",value:function(e){this.arrLayers=e.arrLayers,this.optimizer=e.optimizer,this.metrics=e.metrics,this.loss=e.loss,this.reportContent()}},{key:"setOptimizer",value:function(e){this.optimizer=e}},{key:"reportContent",value:function(){console.log("REPORTING NETWORK"),console.log(this.arrLayers),console.log("optimizer: "+String(this.optimizer)),console.log("metrics: "+String(this.metrics)),console.log("loss: "+String(this.loss)),console.log(" ")}},{key:"addLayer",value:function(e){this.arrLayers.push(e)}}]),e}(),S=function(){function e(t,a,n,r,i){Object(s.a)(this,e),this.numNodes=t,this.activation=a,this.isFirstLayer=n,this.weightInit=i}return Object(l.a)(e,[{key:"setWeightInit",value:function(e){this.weightInit=e}},{key:"setNumNodes",value:function(e){this.numNodes=e}},{key:"setActivation",value:function(e){this.activation=e}},{key:"setisFirstLayer",value:function(e){this.isFirstLayer=e}}]),e}();var O=a(63);function w(e){!function(e){var t,a=0,n=Object(g.a)(e);try{for(n.s();!(t=n.n()).done;){var r=t.value.numNodes;r>a&&(a=r)}}catch(i){n.e(i)}finally{n.f()}}(e);for(var t={},a=[],n=[],r=[],i=0;i<e.length;i++){for(var o=e[i].numNodes,s=.2*i,l=.15-o/200,c=(2-(o-1)*l)/2,u=[],d=0;d<o;d++){var p={x:s,y:c+d*l,size:1,id:i+","+d};a.push(p),u.push(p)}r.length>0&&C(r,u,n),r=u}return t.nodes=a,t.edges=n,t}function C(e,t,a){for(var n=0;n<e.length;n++)for(var r=e[n],i=r.id,o=0;o<t.length;o++){var s=t[o],l={id:"e_"+r.id+","+s.id,source:i,target:s.id,size:1-e.length*t.length/100};a.push(l)}}var j=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(e){return Object(s.a)(this,a),t.call(this,e)}return Object(l.a)(a,[{key:"render",value:function(){var e,t=w(this.props.appState.network.arrLayers);return console.log("g"),console.log(t),this.props.appState.hideModelPanel?(this.props.appState.unhideModelPanel(),!1):r.a.createElement("div",{id:"content"},r.a.createElement("h1",null,"Model"),r.a.createElement("div",{style:{backgroundColor:"#333",height:"90%"}},(e=t,console.log("rendering using data: "),console.log(e),r.a.createElement(O.a,{graph:e,style:{height:"100%"},settings:{maxNodeSize:15,maxEdgeSize:.3,clone:!1,defaultNodeColor:"#fff"}}))))}}]),a}(n.Component),L=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).unhideModelPanel=function(){n.setState((function(e){return{hideModelPanel:!1}}))},n.doSetOptimizer=function(e){console.log("starting");var t=new k;t.copy(n.state.network),t.setOptimizer(e),n.setState((function(e){return{network:t}}))},n.doAddLayer=function(){var e=new S(10,"relu",!1,!1),t=new k;t.copy(n.state.network),0===t.arrLayers.length&&(e.isFirstLayer=!0),t.addLayer(e),n.setState((function(e){return{hideModelPanel:!0,network:t,loadable:!0}}))},n.state={hideModelPanel:!1,unhideModelPanel:function(){return n.unhideModelPanel()},network:new k,selectedLayer:0,loadable:!1,doAddLayer:function(){return n.doAddLayer()},doSetOptimizer:function(e){return n.doSetOptimizer(e)},doSetActivation:function(e,t){return n.doSetActivation(e,t)},doSetWeightInit:function(e,t){return n.doSetWeightInit(e,t)}},n}return Object(l.a)(a,[{key:"doSetActivation",value:function(e,t){var a=new k;a.copy(this.state.network),a.arrLayers[e].setActivation(t),this.setState((function(e){return{network:a}}))}},{key:"doSetWeightInit",value:function(e,t){var a=new k;a.copy(this.state.network),a.arrLayers[e].setWeightInit(t),this.setState((function(e){return{network:a}}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{class:"wrapper"},r.a.createElement("button",{onClick:function(){return e.state.network.reportContent()}},"Report Network"),r.a.createElement(j,{appState:this.state}),r.a.createElement(E,{appState:this.state}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[67,1,2]]]);
//# sourceMappingURL=main.511ca854.chunk.js.map