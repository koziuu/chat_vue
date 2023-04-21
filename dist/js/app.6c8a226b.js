(function(){"use strict";var e={5144:function(e,t,a){var o=a(9242),n=a(3396);function s(e,t,a,o,s,r){const l=(0,n.up)("router-view"),i=(0,n.up)("v-layout");return(0,n.wg)(),(0,n.j4)(i,null,{default:(0,n.w5)((()=>[(0,n.Wm)(l)])),_:1})}var r={name:"App"},l=a(89);const i=(0,l.Z)(r,[["render",s]]);var u=i,m=a(2483);function c(e,t,a,o,s,r){const l=(0,n.up)("NavBar"),i=(0,n.up)("ShowHome");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(l),(0,n.Wm)(i)],64)}function d(e,t,a,o,s,r){const l=(0,n.up)("v-list-item"),i=(0,n.up)("v-list"),u=(0,n.up)("v-divider"),m=(0,n.up)("v-navigation-drawer"),c=(0,n.up)("v-app-bar-nav-icon"),d=(0,n.up)("v-app-bar");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(m,{modelValue:s.drawer,"onUpdate:modelValue":t[1]||(t[1]=e=>s.drawer=e)},{default:(0,n.w5)((()=>[(0,n.Wm)(i,null,{default:(0,n.w5)((()=>[(0,n.Wm)(l,{"prepend-icon":"mdi-comment-processing",title:"KazCom",subtitle:"haha"})])),_:1}),(0,n.Wm)(u),(0,n.Wm)(i,{density:"compact",nav:""},{default:(0,n.w5)((()=>[(0,n.Wm)(l,{"prepend-icon":"mdi-home",title:"Strona główna",value:"panel",to:"/"}),(0,n.Wm)(l,{"prepend-icon":"mdi-message-text-outline",title:"Chat kazcom",to:"/chat"}),(0,n.Wm)(l,{"prepend-icon":"mdi-account",title:s.name&&s.email&&s.password?"Wyloguj":"Zaloguj",to:"/login",onClick:t[0]||(t[0]=e=>r.logout())},null,8,["title"])])),_:1})])),_:1},8,["modelValue"]),(0,n.Wm)(d,null,{default:(0,n.w5)((()=>[(0,n.Wm)(c,{onClick:t[2]||(t[2]=e=>s.drawer=!s.drawer)})])),_:1})],64)}var p={name:"NavBar",data(){return{drawer:!1,name:null,email:null,password:null}},methods:{logout(){localStorage.removeItem("user_name"),localStorage.removeItem("user_email"),localStorage.removeItem("user_password")}},created(){this.name=localStorage.getItem("user_name"),this.email=localStorage.getItem("user_email"),this.password=localStorage.getItem("user_password")}};const w=(0,l.Z)(p,[["render",d]]);var g=w;const h=(0,n._)("h1",{class:"text-h2 ma-5 mt-3 text-center"},"Kazcom!",-1),f=(0,n._)("p",{class:"text-center pt-10 pb-10 pa-5 ma-5 pl-5 pr-5",style:{"font-size":"3vh"}},"Kazcom to prosta aplikacja używająca biblioteki socket.io do komunikacji serwera z użytkownikiem. Została zaprojektowana na podstawie aplikacji Mizcom.",-1),v=(0,n._)("p",{class:"text-center pt-10 pb-10 pa-5 ma-5 pl-5 pr-5",style:{"font-size":"3vh"}},"Backend aplikacji napisany jest w express.js, do komunikacji wykorzystuje również bibliotekę axios.",-1),y=(0,n._)("p",{class:"text-center pt-10 pb-10 pa-5 ma-5 pl-5 pr-5",style:{"font-size":"3vh"}},"Front end jest napisany we Vue3, dodatkowo wykorzystałem bibliotekę vuetify, aby aplikacja była wygodna w użytku oraz responsywna.",-1),j=(0,n._)("p",{class:"text-center pt-15 pa-5 ma-5 pl-5 pr-5",style:{"font-size":"3vh"}},"By Michał Kazienko 3f",-1);function b(e,t,a,o,s,r){const l=(0,n.up)("v-col"),i=(0,n.up)("v-row"),u=(0,n.up)("v-container"),m=(0,n.up)("v-main");return(0,n.wg)(),(0,n.j4)(m,null,{default:(0,n.w5)((()=>[(0,n.Wm)(u,null,{default:(0,n.w5)((()=>[(0,n.Wm)(i,{justify:"center"},{default:(0,n.w5)((()=>[(0,n.Wm)(l,null,{default:(0,n.w5)((()=>[h,f,v,y,j])),_:1})])),_:1})])),_:1})])),_:1})}var k={name:"ShowHome"};const _=(0,l.Z)(k,[["render",b]]);var W=_,x={name:"HomeView",components:{NavBar:g,ShowHome:W},data(){return{}},methods:{isloggedin(){return!1}}};const S=(0,l.Z)(x,[["render",c]]);var z=S;function I(e,t,a,o,s,r){const l=(0,n.up)("ShowLogin");return(0,n.wg)(),(0,n.j4)(l)}var Z=a(7139);function C(e,t,a,s,r,l){const i=(0,n.up)("v-toolbar-title"),u=(0,n.up)("v-toolbar"),m=(0,n.up)("v-text-field"),c=(0,n.up)("v-form"),d=(0,n.up)("v-card-text"),p=(0,n.up)("v-btn"),w=(0,n.up)("v-spacer"),g=(0,n.up)("v-card-actions"),h=(0,n.up)("v-card"),f=(0,n.up)("v-col"),v=(0,n.up)("v-row"),y=(0,n.up)("v-container"),j=(0,n.up)("v-main");return(0,n.wg)(),(0,n.j4)(j,{justify:"center"},{default:(0,n.w5)((()=>[(0,n.Wm)(y,{fluid:"","fill-height":"",justify:"center"},{default:(0,n.w5)((()=>[(0,n.Wm)(v,{justify:"center",class:"mt-10"},{default:(0,n.w5)((()=>[(0,n.Wm)(f,{cols:"12",md:"4",justify:"center"},{default:(0,n.w5)((()=>[(0,n.Wm)(h,{class:"elevation-12",justify:"center"},{default:(0,n.w5)((()=>[(0,n.Wm)(u,{dark:"",color:"rgb(224, 224, 224)"},{default:(0,n.w5)((()=>[(0,n.Wm)(i,{class:"text-h5"},{default:(0,n.w5)((()=>[(0,n.Uk)((0,Z.zw)(this.reg?"Zajerestruj się":"Zaloguj się"),1)])),_:1})])),_:1}),(0,n.Wm)(d,null,{default:(0,n.w5)((()=>[(0,n.Wm)(c,{onSubmit:(0,o.iM)(l.login,["prevent"])},{default:(0,n.w5)((()=>[(0,n.Wm)(m,{label:"Username",modelValue:r.username,"onUpdate:modelValue":t[0]||(t[0]=e=>r.username=e),type:"text",rules:r.nameRules,required:""},null,8,["modelValue","rules"]),(0,n.Wm)(m,{label:"Email",modelValue:r.email,"onUpdate:modelValue":t[1]||(t[1]=e=>r.email=e),type:"email",rules:r.emailRules,required:""},null,8,["modelValue","rules"]),(0,n.Wm)(m,{label:"Hasło",modelValue:r.password,"onUpdate:modelValue":t[2]||(t[2]=e=>r.password=e),type:"password",rules:r.passwordRules,required:""},null,8,["modelValue","rules"])])),_:1},8,["onSubmit"])])),_:1}),(0,n.Wm)(g,null,{default:(0,n.w5)((()=>[(0,n.Wm)(p,{color:"rgb(102, 102, 102)",to:"/"},{default:(0,n.w5)((()=>[(0,n.Uk)(" Główna ")])),_:1}),(0,n.Wm)(w),(0,n.Wm)(p,{color:"rgb(102, 102, 102)",onClick:t[3]||(t[3]=()=>{this.reg=!this.reg})},{default:(0,n.w5)((()=>[(0,n.Uk)((0,Z.zw)(this.reg?"Zaloguj się":"Zajerestruj się"),1)])),_:1}),(0,n.Wm)(w),(0,n.Wm)(p,{color:"rgb(102, 102, 102)",disabled:!l.valid,onClick:t[4]||(t[4]=()=>{this.reg?l.register():l.login()})},{default:(0,n.w5)((()=>[(0,n.Uk)(" Dalej ")])),_:1},8,["disabled"])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}var V=a(4161),M={name:"ShowLogin",data(){return{reg:!1,username:"",email:"",password:"",nameRules:[e=>!!e||"Nazwa użytkownika jest wymagana",e=>/^[a-zA-Z]{3,15}$/i.test(e)||"Nazwa użytkownika nie jest poprawna"],emailRules:[e=>!!e||"Email jest wymagany",e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/i.test(e)||"Email nie jest poprawny"],passwordRules:[e=>!!e||"Hasło jest wymagane",e=>/^[a-zA-Z]{8,100}$/i.test(e)||"Hasło nie jest poprawne"]}},methods:{login(){V.Z.post("/login_user",{name:this.username,email:this.email,password:this.password},{headers:{"Content-Type":"application/json"}}).then((e=>{const t=e.data;console.log(e.data),void 0!==t.name&&void 0!==t.email&&void 0!==t.password&&(localStorage.setItem("user_name",t.name),localStorage.setItem("user_email",t.email),localStorage.setItem("user_password",t.password),window.location.href="/chat")}))},register(){V.Z.post("/add_user",{name:this.username,email:this.email,password:this.password},{headers:{"Content-Type":"application/json"}}).then((e=>{const t=e.data;console.log(e.data),void 0!==t.name&&void 0!==t.email&&void 0!==t.password&&(localStorage.setItem("user_name",t.name),localStorage.setItem("user_email",t.email),localStorage.setItem("user_password",t.password),window.location.href="/chat")}))}},computed:{valid(){return/^[a-zA-Z]{3,15}$/i.test(this.name)&&/^[^\s@]+@[^\s@]+\.[^\s@]+$/i.test(this.email)&&/^[a-zA-Z]{8,100}$/i.test(this.password)}}};const H=(0,l.Z)(M,[["render",C]]);var O=H,T={name:"LoginView",components:{ShowLogin:O}};const U=(0,l.Z)(T,[["render",I]]);var N=U;function B(e,t,a,o,s,r){const l=(0,n.up)("NavBar"),i=(0,n.up)("MainChat"),u=(0,n.up)("v-alert"),m=(0,n.up)("v-main");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(l),(0,n.Wm)(m,{style:{height:"100vh"}},{default:(0,n.w5)((()=>[s.name&&s.email&&s.password?((0,n.wg)(),(0,n.j4)(i,{key:0,style:{height:"100%"}})):((0,n.wg)(),(0,n.j4)(u,{key:1,text:"Najpierw załóż konto, lub zaloguj się."}))])),_:1})],64)}function D(e,t,a,s,r,l){const i=(0,n.up)("v-card"),u=(0,n.up)("v-row"),m=(0,n.up)("v-container"),c=(0,n.up)("v-text-field");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(m,{style:{height:"90%"}},{default:(0,n.w5)((()=>[(0,n.Wm)(u,{"scroll-target":e.onScroll,style:{"padding-bottom":"100px"}},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(r.messages,(e=>((0,n.wg)(),(0,n.j4)(i,{key:e.name,title:e.name,variant:"tonal",text:e.message,style:{height:"100px",width:"100%",margin:"10px 10px 10px 10px"}},null,8,["title","text"])))),128))])),_:1},8,["scroll-target"])])),_:1}),(0,n.Wm)(c,{class:"textFieldWidth",label:"Napisz wiadomość...",modelValue:r.message,"onUpdate:modelValue":t[0]||(t[0]=e=>r.message=e),"append-icon":r.message?"mdi-send":"",variant:"filled","clear-icon":"mdi-close-circle",type:"text","onClick:append":l.sendMessage,"onClick:prepend":l.changeIcon,"onClick:clear":l.clearMessage,onKeyup:(0,o.D2)(l.sendMessage,["enter"])},null,8,["modelValue","append-icon","onClick:append","onClick:prepend","onClick:clear","onKeyup"])],64)}a(7658);var K=a(2066),R={name:"MainChat",data(){return{bottom:"",message:"",connection:null,socket:K.ZP.connect(),messages:[]}},methods:{sendMessage(){""!==this.message&&(this.socket.emit("sendMessage",{message:this.message,name:localStorage.getItem("user_name")}),this.resetIcon(),this.clearMessage())},clearMessage(){this.message=""},resetIcon(){this.iconIndex=0},changeIcon(){this.iconIndex===this.icons.length-1?this.iconIndex=0:this.iconIndex++}},created(){const e=this;this.socket.on("getMessage",(function(t){console.log(this.messages),e.messages.push(...t),window.scrollY===document.documentElement.scrollHeight-window.innerHeight&&setTimeout((()=>{window.scrollTo(0,document.body.scrollHeight)}),200)})),V.Z.post("/chat_history",{headers:{"Content-Type":"application/json"}}).then((e=>{const t=e.data.history;this.messages.push(...Object.values(t)),setTimeout((()=>{window.scrollTo(0,document.body.scrollHeight)}),200)}))}};const P=(0,l.Z)(R,[["render",D]]);var Y=P,$={name:"ChatView",components:{NavBar:g,MainChat:Y},data(){return{name:null,email:null,password:null}},created(){this.name=localStorage.getItem("user_name"),this.email=localStorage.getItem("user_email"),this.password=localStorage.getItem("user_password")}};const A=(0,l.Z)($,[["render",B]]);var E=A;const L=[{path:"/",name:"/",component:z},{path:"/home",name:"home",component:z},{path:"/chat",name:"chat",component:E},{path:"/login",name:"login",component:N}],q=(0,m.p7)({history:(0,m.PO)("/"),routes:L});var F=q,G=(a(9773),a(8957)),J=a(1850),Q=a(8600);const X=(0,G.Rd)({icons:{defaultSet:"mdi"},components:J,directives:Q});(0,o.ri)(u).use(X).use(F).mount("#app")}},t={};function a(o){var n=t[o];if(void 0!==n)return n.exports;var s=t[o]={exports:{}};return e[o](s,s.exports,a),s.exports}a.m=e,function(){var e=[];a.O=function(t,o,n,s){if(!o){var r=1/0;for(m=0;m<e.length;m++){o=e[m][0],n=e[m][1],s=e[m][2];for(var l=!0,i=0;i<o.length;i++)(!1&s||r>=s)&&Object.keys(a.O).every((function(e){return a.O[e](o[i])}))?o.splice(i--,1):(l=!1,s<r&&(r=s));if(l){e.splice(m--,1);var u=n();void 0!==u&&(t=u)}}return t}s=s||0;for(var m=e.length;m>0&&e[m-1][2]>s;m--)e[m]=e[m-1];e[m]=[o,n,s]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,o){var n,s,r=o[0],l=o[1],i=o[2],u=0;if(r.some((function(t){return 0!==e[t]}))){for(n in l)a.o(l,n)&&(a.m[n]=l[n]);if(i)var m=i(a)}for(t&&t(o);u<r.length;u++)s=r[u],a.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return a.O(m)},o=self["webpackChunkteapot"]=self["webpackChunkteapot"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=a.O(void 0,[998],(function(){return a(5144)}));o=a.O(o)})();
//# sourceMappingURL=app.6c8a226b.js.map