(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"IYw+":function(e,t,n){var o=n("q1tI");function l(e){return o.createElement("svg",e,[o.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M46 57C46 54.2386 48.2386 52 51 52H199C201.761 52 204 54.2386 204 57V59C204 61.7614 201.761 64 199 64H189.239C187.102 76.4922 176.221 86 163.119 86C150.018 86 139.137 76.4922 137 64H112.239C110.102 76.4922 99.2211 86 86.1195 86C73.0179 86 62.1369 76.4922 60 64H51C48.2386 64 46 61.7614 46 59V57Z",fill:"#F5F5F5",key:0}),o.createElement("path",{d:"M68 45L69.41 43.59L63.83 38H76V36H63.83L69.42 30.42L68 29L60 37L68 45Z",fill:"#F5F5F5",key:1})])}l.defaultProps={width:"250",height:"100",viewBox:"0 0 250 100",fill:"none"},e.exports=l,l.default=l},QEaR:function(e,t){t.__esModule=!0,t.default={body:'<g fill="none"><path d="M8 2a1 1 0 0 0 0 2h2a1 1 0 1 0 0-2H8z" fill="currentColor"/><path d="M3 5a2 2 0 0 1 2-2a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3a2 2 0 0 1 2 2v6h-4.586l1.293-1.293a1 1 0 0 0-1.414-1.414l-3 3a1 1 0 0 0 0 1.414l3 3a1 1 0 0 0 1.414-1.414L10.414 13H15v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5z" fill="currentColor"/><path d="M15 11h2a1 1 0 1 1 0 2h-2v-2z" fill="currentColor"/></g>',width:20,height:20}},QeBL:function(e,t,n){"use strict";n.r(t);var o=n("38JK"),l=n.n(o),a=n("w48S"),r=n("vOnD"),i=n("XQMw"),c=n("WlAH"),u=n("ZxdV"),s=n.n(u),d=n("IYw+"),p=n.n(d),m=n("c+B2"),f=n.n(m),h=n("q1tI"),g=n.n(h),y=r.a.div.withConfig({displayName:"outputHeader__StyledOutputHeader",componentId:"sc-1tqedq2-0"})(["width:100%;height:4rem;padding:1rem 1rem;display:flex;flex-direction:row;justify-content:space-between;align-items:center;border:1px solid ",";border-left:none;border-right:none;border-top:none;h1{font-size:24px;}"],c.grey),b=r.a.span.withConfig({displayName:"outputHeader__ResultText",componentId:"sc-1tqedq2-1"})(["color:",";"],(function(e){return"Loading"===e.result&&c.outputLoading||"Error"===e.result&&c.outputError||"Successful"===e.result&&c.outputSuccess||c.textPrimary})),w=function(e){var t=e.result;return g.a.createElement(y,null,g.a.createElement("h1",null,"Output result: ",g.a.createElement(b,{result:t},t)))},x=(n("RUBk"),function(e){var t=e.reduce((function(e,t){return e+t}));return parseFloat(t)}),v=function(e,t){var n=/([0-9]+\.[0-9])|([0-9]\.[0-9]+)|(\.[0-9]+)|([-]{0,1}[0-9]+)/g,o=[],l=e;return t.includes("droneLiftOff")?0!==(o=t.match(n)||[]).length&&(l=function(e){var t={armed:!1,altitude:0,velocity:0,yaw:0,pitch:0,roll:0};return t.armed=!0,t.altitude=e,t.velocity=0,t.yaw=0,t.pitch=0,t.roll=0,t}(x(o))):t.includes("droneLand")?l={armed:!1,altitude:0,velocity:0,yaw:0,pitch:0,roll:0}:t.includes("droneConstMove")&&0!==(o=t.match(n)||[]).length&&(l=function(e,t){var n=Object.assign({},e);return n.armed=!0,n.velocity=t,n.pitch=30,n}(l,x(o))),l},E=r.a.div.withConfig({displayName:"output__OutputWrapper",componentId:"sc-3aso9p-0"})(["width:100%;height:100%;overflow-x:auto;overflow-y:auto;display:flex;flex-direction:column;align-items:stretch;background-color:",";"],c.background),C=r.a.div.withConfig({displayName:"output__OutputConsole",componentId:"sc-3aso9p-1"})(["min-height:400px;max-width:100%;padding:0 1rem;border-bottom:1px solid ",';font-family:"Source Code Pro";white-space:pre-wrap;word-wrap:break-word;'],c.grey),j=r.a.section.withConfig({displayName:"output__StatusVisualization",componentId:"sc-3aso9p-2"})(["display:flex;flex-direction:column;justify-items:center;align-items:stretch;flex-grow:1;"]),_=r.a.div.withConfig({displayName:"output__StatusTextGroup",componentId:"sc-3aso9p-3"})(["display:flex;flex-direction:column;align-items:center;h1{font-size:32px;font-weight:600;margin:1rem;}p{margin:0.25rem;}"]),k=r.a.div.withConfig({displayName:"output__VisualGroup",componentId:"sc-3aso9p-4"})(["width:100%;overflow:hidden;display:flex;flex-direction:row;justify-content:center;align-items:center;flex:1;"]),O=r.a.div.withConfig({displayName:"output__DroneVisual",componentId:"sc-3aso9p-5"})(["width:16rem;padding:1rem;display:flex;flex-direction:column;justify-content:center;align-items:center;font-size:16px;svg{max-width:12rem;}p{margin:0;}"]),S=function(){var e=Object(o.useState)({armed:!1,altitude:0,velocity:0,yaw:0,pitch:0,roll:0}),t=e[0],n=e[1],a=Object(o.useGlobal)("output")[0];return Object(o.useEffect)((function(){if("none"!==a.status&&"Loading"!==a.status){var e=v(t,a.droneTask);n(e)}}),[a.status]),l.a.createElement(E,null,l.a.createElement(w,{result:a.status}),l.a.createElement(C,null,l.a.createElement("p",null,a.message)),l.a.createElement(j,null,l.a.createElement(_,null,l.a.createElement("h1",null,t.armed?l.a.createElement("span",null,"Armed"):l.a.createElement("span",null,"Unarmed")),l.a.createElement("p",null,"Altitude: ",t.altitude," m"),l.a.createElement("p",null,"Velocity: ",t.velocity," m/s")),l.a.createElement(k,null,l.a.createElement(O,null,l.a.createElement(s.a,null),l.a.createElement("p",null,"Yaw: ",t.yaw,"°")),l.a.createElement("div",null,l.a.createElement(O,null,l.a.createElement(p.a,null),l.a.createElement("p",null,"Pitch: ",t.pitch,"°")),l.a.createElement(O,null,l.a.createElement(f.a,null),l.a.createElement("p",null,"Roll: ",t.roll,"°"))))))},I=n("Wbzz"),H=n("9rZX"),F=n.n(H),N=n("8jAD"),z=n("2Hgl"),G=n.n(z),M=n("QEaR"),T=n.n(M),L=Object(r.a)(N.Icon).withConfig({displayName:"hintModal__CloseButton",componentId:"sc-9jo7gf-0"})(["position:absolute;top:5px;right:5px;font-size:24px;&:hover{cursor:pointer;}"]),V=r.a.div.withConfig({displayName:"hintModal__HintBody",componentId:"sc-9jo7gf-1"})(["display:flex;flex-direction:column;justify-content:flex-start;align-items:center;width:100%;margin-top:30px;"]),B=r.a.div.withConfig({displayName:"hintModal__HintAnswer",componentId:"sc-9jo7gf-2"})(["display:block;background-color:#eff0f1;color:#262626;padding:1.5rem;border-radius:5px;margin-top:20px;"]),A=r.a.button.withConfig({displayName:"hintModal__HintAnswerButton",componentId:"sc-9jo7gf-3"})(["height:2.5rem;width:8rem;background:#262626;border:2px solid #e9e9e9;border-radius:1px;color:",";font-size:16px;font-weight:600;outline:none;margin-top:20px;&:hover{background-color:#727272;cursor:pointer;}"],c.textPrimary),q=Object(r.a)(N.Icon).withConfig({displayName:"hintModal__Copy",componentId:"sc-9jo7gf-4"})(["font-size:30px;position:absolute;top:150px;right:23px;&:hover{cursor:pointer;}"]),P=function(e){var t=Object(o.useGlobal)("hintModalOpen"),n=t[0],a=t[1],r=Object(o.useGlobal)("showHintAnswer"),i=r[0],c=r[1],u=Object(o.useGlobal)("tutorialStep")[0],s=e.data,d=function(){a(!n),c(!1)};return l.a.createElement(F.a,{isOpen:n,onRequestClose:d,style:{content:{backgroundColor:"#262626",color:"#ffffff",width:450,height:350,position:"relative",left:"50%",transform:"translateX(-50%)"},overlay:{zIndex:100}},ariaHideApp:!1},l.a.createElement("div",{role:"button",tabIndex:0,onClick:d,onKeyDown:d},l.a.createElement(L,{icon:G.a})),l.a.createElement(V,null,s.instructions[u-1].hint,l.a.createElement(A,{onClick:function(){c(!i)}},i?"Hide Answer":"Show Answer")),l.a.createElement(B,{style:{display:i?"block":"none"}},s.instructions[u-1].answer.map((function(e){return l.a.createElement("pre",{key:e},e)})),l.a.createElement("div",{title:"Copy to Clipboard"},l.a.createElement(q,{icon:T.a,onClick:function(){!function(e){var t=document.createElement("textarea");t.value="";for(var n=0;n<e.length;n+=1)t.value+=e[n]+"\n";t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-9999px",document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}(s.instructions[u-1].answer)}}))))},R=n("zoQI"),Z=n("/sSt"),D=r.a.div.withConfig({displayName:"textEditor__TerminalWrapper",componentId:"sc-3hnfw-0"})(["display:flex;flex-direction:column;justify-content:flex-start;align-items:center;width:100%;height:100%;"]),Q=r.a.div.withConfig({displayName:"textEditor__TerminalHeader",componentId:"sc-3hnfw-1"})(["height:4rem;width:100%;padding:1rem 1rem;display:flex;flex-direction:row;justify-content:space-between;align-items:center;border:1px solid ",";border-left:none;border-right:none;border-top:none;"],c.grey),J=function(){var e=Object(o.useState)(""),t=e[0],n=e[1],a=Object(o.useGlobal)("hintModalOpen"),r=a[0],i=a[1],u=Object(o.useGlobal)("showHintAnswer")[1],s=Object(o.useGlobal)("tutorialName")[0],d=Object(o.useGlobal)("tutorialStep")[0],p=Object(o.useGlobal)("output"),m=p[0],f=p[1],h=Object(o.useGlobal)("componentView")[0],g=Object(I.useStaticQuery)("2608372865").allExampleGqlJson.nodes.find((function(e){return e.tutorialTitle===s}));if(!g)return l.a.createElement("p",null,"Loading...");return l.a.createElement(D,null,l.a.createElement(Q,null,l.a.createElement(R.a,{submitFunction:function(){"TutorialComponent"===h&&g.instructions[d-1].hint&&(i(!r),u(!1))},text:"Hint"}),l.a.createElement(R.a,{backgroundColor:c.accent,submitFunction:function(e){if(e.preventDefault(),t){f(Object.assign({},m,{status:"Loading"}));var n=function(e,t){for(var n=0,o=1,l=1,a=e.split(/\r\n|\n/g),r=0;r<t.length;r+=1){for(;""===a[r]||/^(\s)\1*$/.test(a[r]);)o+=1,a.splice(r,1);if(r>=a.length&&r<t.length)return{message:"Your code looks good so far but you need a few more lines to complete it.",correct:!1};n=0,l=0;for(var i=a[r].replace(/\s*$/,"");n<t[r].length;){if(i[n]!==t[r][n])return{message:"You have an error on line "+(o+1)+" and column "+l+".\nSolution Hint: '"+t[r]+"'",correct:!1};n+=1,l+=1}}return{message:"",correct:!0}}(t,g.instructions[d-1].answer);setTimeout((function(){n.correct?f({status:"Successful",correct:n.correct,message:g.instructions[d-1].output.successMessage,droneTask:g.instructions[d-1].output.droneRoutine}):f(Object.assign({},n,{status:"Error",droneTask:""}))}),1e3)}},text:"Run"})),l.a.createElement(Z.a,{value:t,onChange:function(e){return n(e)}}),l.a.createElement(P,{data:g}))},Y=n("LUSG"),W=n("m5ZA"),U=n.n(W),K=n("YUDI"),X=n.n(K),$=Object(r.a)(N.Icon).withConfig({displayName:"stepButton__StyledButton",componentId:"sc-1ucrpqo-0"})(["font-size:2.5rem;display:block;visibility:",";&:hover{filter:invert(58%) sepia(81%) saturate(2820%) hue-rotate(173deg) brightness(90%) contrast(90%);cursor:pointer;}&:active{padding:0.25rem;}"],(function(e){return e.hidden?"hidden":"visible"})),ee=function(e){var t=e.next,n=e.tutorialStep,o=e.clickFunction,l=e.totalSteps,a=Object(h.useState)(!0),r=a[0],i=a[1],c=t?X.a:U.a;return Object(h.useEffect)((function(){i(!(!t||n!==l)||!t&&1===n)})),g.a.createElement($,{onClick:o,hidden:r,icon:c})},te=r.a.div.withConfig({displayName:"tutorialComponent__TutorialBG",componentId:"n8nd1l-0"})(["height:100%;width:100%;border-radius:5px;display:",";flex-direction:column;justify-content:space-between;align-items:center;"],(function(e){return"TutorialComponent"===e.disp?"flex":"none"})),ne=r.a.div.withConfig({displayName:"tutorialComponent__TutorialHeader",componentId:"n8nd1l-1"})(["width:100%;height:4rem;padding:1rem 1rem;display:flex;flex-direction:row;justify-content:space-between;align-items:center;border:1px solid ",";border-left:none;border-right:none;border-top:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;h1{font-size:24px;}"],c.grey),oe=r.a.div.withConfig({displayName:"tutorialComponent__ContentWrapper",componentId:"n8nd1l-2"})(["height:100%;width:100%;padding:0 2rem;font-size:16px;max-height:calc(100vh - 4rem);overflow-y:auto;p{margin:2rem 0;}"]),le=r.a.div.withConfig({displayName:"tutorialComponent__CodeBlock",componentId:"n8nd1l-3"})(['padding:1.5rem;font-family:"Source Code Pro",monospace;background-color:',";border-radius:5px;span{white-space:pre;}"],c.codeColor),ae=function(){var e=Object(o.useGlobal)("tutorialStep"),t=e[0],n=e[1],a=Object(o.useGlobal)("tutorialName")[0],r=Object(o.useGlobal)("componentView")[0],i=Object(o.useGlobal)("output")[1],c=Object(I.useStaticQuery)("2119528685"),u=Object(Y.a)(c)[3],s=c.allExampleGqlJson.nodes.find((function(e){return e.tutorialTitle===a}));if(!s)return l.a.createElement("p",null,"Loading...");var d=s.instructions[t-1].content.map((function(e,t){return"text"===e.type?l.a.createElement("p",{key:a+t.toString()},e.value):"code"===e.type?l.a.createElement(le,{key:a+t.toString()},l.a.createElement("span",null,e.value)):"Invalid content type found! Check your source JSONs!"}));return l.a.createElement(te,{disp:r},l.a.createElement(ne,null,l.a.createElement(ee,{clickFunction:function(){u(a,t-1),n(t-1),i({status:"",correct:!1,message:"",droneTask:""})},next:!1,tutorialStep:t,totalSteps:s.instructions.length}),l.a.createElement("h1",null,s.instructions[t-1].title),l.a.createElement(ee,{clickFunction:function(){u(a,t+1),n(t+1),i({status:"",correct:!1,message:"",droneTask:""})},next:!0,tutorialStep:t,totalSteps:s.instructions.length})),l.a.createElement(oe,null,d))},re=r.a.div.withConfig({displayName:"tutorialSelector__Selector",componentId:"sc-74xj3o-0"})(["height:100%;width:100%;overflow-y:auto;display:",";background-color:",";color:",";"],(function(e){return"TutorialSelector"===e.disp?"block":"none"}),c.background,c.textPrimary),ie=r.a.div.withConfig({displayName:"tutorialSelector__SelectorHeader",componentId:"sc-74xj3o-1"})(["width:100%;height:4rem;display:flex;flex-direction:row;justify-content:center;align-items:center;border:1px solid ",";border-left:none;border-right:none;border-top:none;h1{font-size:24px;}"],c.grey),ce=r.a.div.withConfig({displayName:"tutorialSelector__SingleTutorial",componentId:"sc-74xj3o-2"})(["padding:1.5rem 1rem;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;border-bottom:1px solid ",";color:",";&:hover{background:rgba(256,256,256,0.1);color:",";cursor:pointer;}&:active{background:rgba(256,256,256,0.4);color:",";}"],c.grey,c.textPrimary,c.accent,c.accent),ue=r.a.h1.withConfig({displayName:"tutorialSelector__Title",componentId:"sc-74xj3o-3"})(['font-size:24px;font-family:"Open Sans",sans-serif;font-weight:100;margin:0 0 0.5rem 0;']),se=r.a.div.withConfig({displayName:"tutorialSelector__Description",componentId:"sc-74xj3o-4"})(['font-size:14px;font-family:"Open Sans",sans-serif;font-weight:100;']),de=function(){var e=Object(o.useGlobal)("tutorialStep")[1],t=Object(o.useGlobal)("tutorialName"),n=t[0],a=t[1],r=Object(o.useGlobal)("componentView"),i=r[0],c=r[1],u=Object(I.useStaticQuery)("1615704407"),s=Object(Y.a)(u),d=s[1],p=s[2],m=Object(Y.b)()[1];return l.a.createElement(re,{disp:i},l.a.createElement(ie,null,l.a.createElement("h1",null,"Select a tutorial")),u.allExampleGqlJson.nodes.map((function(t,o){return l.a.createElement(ce,{key:n+o.toString(),onClick:function(){return n=t.tutorialTitle,e(d),a(n),c("TutorialComponent"),p(n),void m("TutorialComponent");var n}},l.a.createElement(ue,null,t.tutorialTitle),l.a.createElement(se,null,t.description))})))},pe=r.a.div.withConfig({displayName:"tutorialApp__StyledTutorialPage",componentId:"z393zv-0"})(["height:100vh;width:100vw;display:flex;flex-direction:row;justify-items:stretch;background:",";overflow:auto;"],c.background),me=r.a.main.withConfig({displayName:"tutorialApp__MainWrapper",componentId:"z393zv-1"})(["display:flex;align-items:flex-start;flex-direction:row;flex-wrap:none;flex:1;"]),fe=r.a.div.withConfig({displayName:"tutorialApp__Column",componentId:"z393zv-2"})(["border:1px solid ",";border-left:none;border-collapse:collapse;height:100%;width:33.3%;display:flex;justify-content:center;align-items:flex-start;color:",";@media only screen and (max-width:768px){width:100%;}"],c.grey,c.textPrimary),he=function(){return l.a.createElement(pe,null,l.a.createElement(i.a,null),l.a.createElement(me,null,l.a.createElement(fe,null,l.a.createElement(ae,null),l.a.createElement(de,null)),l.a.createElement(fe,null,l.a.createElement(J,null)),l.a.createElement(fe,null,l.a.createElement(S,null))))};n("zlK1");Object(a.a)();t.default=function(){var e=Object(o.useGlobal)("tutorialName")[1],t=Object(o.useGlobal)("tutorialStep")[1],n=Object(o.useGlobal)("componentView")[1];return Object(o.useEffect)((function(){var o=Object(Y.b)()[0],l=localStorage.getItem("tutName")||c.defaultTutorial,a=parseInt(localStorage.getItem(l)||"1",10);e(l),t(a),n(o)}),[]),l.a.createElement(he,null)}},YUDI:function(e,t){t.__esModule=!0,t.default={body:'<path d="M6 15l5-5l-5-5l1-2l7 7l-7 7z" fill="currentColor"/>',width:20,height:20}},ZxdV:function(e,t,n){var o=n("q1tI");function l(e){return o.createElement("svg",e,[o.createElement("rect",{x:"46",y:"67",width:"158",height:"158",rx:"30",fill:"#F5F5F5",key:0}),o.createElement("ellipse",{cx:"162.864",cy:"107.201",rx:"30.8521",ry:"30.8521",fill:"#B45F5F",key:1}),o.createElement("ellipse",{cx:"88.0711",cy:"107.201",rx:"30.8521",ry:"30.8521",fill:"#B45F5F",key:2}),o.createElement("ellipse",{cx:"88.0711",cy:"184.799",rx:"30.8521",ry:"30.8521",fill:"#B45F5F",key:3}),o.createElement("ellipse",{cx:"162.864",cy:"184.799",rx:"30.8521",ry:"30.8521",fill:"#B45F5F",key:4}),o.createElement("path",{d:"M113.667 41L115.664 42.9975L123.583 35.0925V52.3333H126.417V35.0925L134.322 43.0117L136.333 41L125 29.6667L113.667 41Z",fill:"#F5F5F5",key:5})])}l.defaultProps={width:"250",height:"250",viewBox:"0 0 250 250",fill:"none"},e.exports=l,l.default=l},"c+B2":function(e,t,n){var o=n("q1tI");function l(e){return o.createElement("svg",e,[o.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M46 53C46 50.2386 48.2386 48 51 48H199C201.761 48 204 50.2386 204 53V55C204 57.7614 201.761 60 199 60H189.239C187.102 72.4922 176.221 82 163.119 82C150.018 82 139.137 72.4922 137 60H112.239C110.102 72.4922 99.2211 82 86.1195 82C73.0179 82 62.1369 72.4922 60 60H51C48.2386 60 46 57.7614 46 55V53Z",fill:"#F5F5F5",key:0}),o.createElement("path",{d:"M60.4141 38V26.5781H62.8359V36H67.4688V38H60.4141Z",fill:"#F5F5F5",key:1}),o.createElement("path",{d:"M182.078 31.6484H182.859C183.625 31.6484 184.19 31.5208 184.555 31.2656C184.919 31.0104 185.102 30.6094 185.102 30.0625C185.102 29.5208 184.914 29.1354 184.539 28.9062C184.169 28.6771 183.594 28.5625 182.812 28.5625H182.078V31.6484ZM182.078 33.6172V38H179.656V26.5781H182.984C184.536 26.5781 185.685 26.862 186.43 27.4297C187.174 27.9922 187.547 28.849 187.547 30C187.547 30.6719 187.362 31.2708 186.992 31.7969C186.622 32.3177 186.099 32.7266 185.422 33.0234C187.141 35.5911 188.26 37.25 188.781 38H186.094L183.367 33.6172H182.078Z",fill:"#F5F5F5",key:2})])}l.defaultProps={width:"250",height:"100",viewBox:"0 0 250 100",fill:"none"},e.exports=l,l.default=l},m5ZA:function(e,t){t.__esModule=!0,t.default={body:'<path d="M14 5l-5 5l5 5l-1 2l-7-7l7-7z" fill="currentColor"/>',width:20,height:20}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-aa35ef3e752e6a3d6b6f.js.map