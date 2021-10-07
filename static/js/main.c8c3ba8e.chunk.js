(this["webpackJsonpinnowise-paint"]=this["webpackJsonpinnowise-paint"]||[]).push([[0],{115:function(e,t,n){},116:function(e,t,n){},133:function(e,t,n){},134:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(19),s=n.n(c),i=(n(115),n(22)),o=(n(116),n(10)),u=n.n(o),l=n(29),j=n(36),b=n(175),p=n(176),d=n(186),f=n(179),h=n(184),x=n(170),O=Object(x.a)({signinBox:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},form:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},input:{marginTop:"25px"},button:{marginTop:"20px"},span:{marginTop:"80px",marginBottom:"20px"},link:{textDecoration:"none"}}),m=n(187),v=n(185),g=Object(x.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}})),w=n(26),y="SET_CURRENT_USER",k="SIGN_IN_WITH_EMAIL",N="SIGN_IN_WITH_GOOGLE",S="SIGN_UP_WITH_EMAIL_AND_PASSWORD",I="SIGN_OUT",C="SET_ERROR_MESSAGE",T=function(e){return{type:y,payload:e}},D=function(e,t){return{type:k,email:e,password:t}},E=function(e,t){return{type:S,email:e,password:t}},L=function(e){return{type:C,errorMessage:e}},P=n(3),R=function(){var e=Object(w.c)((function(e){return e.auth.error})),t=Object(w.b)(),n=g(),r=Object(a.useState)(!0),c=Object(i.a)(r,2),s=c[0],o=c[1],u=function(e,n){"clickaway"!==n&&(t(L("")),o(!1))};return Object(P.jsx)(h.a,{className:n.root,children:Object(P.jsx)(m.a,{open:s,autoHideDuration:4e3,onClose:u,children:Object(P.jsx)(v.a,{elevation:6,variant:"filled",severity:"error",onClose:u,children:e})})})},U=r.a.memo((function(){var e=O(),t=Object(w.b)(),n=Object(w.c)((function(e){return e.auth.error})),r=Object(a.useState)(""),c=Object(i.a)(r,2),s=c[0],o=c[1],x=Object(a.useState)(""),m=Object(i.a)(x,2),v=m[0],g=m[1],y=function(){var e=Object(l.a)(u.a.mark((function e(n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),t(D(s,v)),o(""),g("");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(P.jsxs)(b.a,{className:e.signinBox,children:[n?Object(P.jsx)(R,{}):"",Object(P.jsx)(p.a,{variant:"h5",children:"Sign in with email and password"}),Object(P.jsxs)("form",{onSubmit:y,className:e.form,children:[Object(P.jsx)(d.a,{value:s,onChange:function(e){o(e.currentTarget.value)},required:!0,type:"email",variant:"outlined",label:"Email",className:e.input}),Object(P.jsx)(d.a,{value:v,onChange:function(e){g(e.currentTarget.value)},required:!0,type:"password",variant:"outlined",label:"Password",className:e.input}),Object(P.jsx)(f.a,{type:"submit",variant:"contained",color:"secondary",className:e.button,children:"Sign in"}),Object(P.jsx)(f.a,{onClick:function(){t({type:N})},variant:"contained",color:"primary",className:e.button,children:"Sign in with Google"})]}),Object(P.jsx)(p.a,{className:e.span,children:"I don't have an account"}),Object(P.jsx)(h.a,{children:Object(P.jsx)(j.b,{to:"/signup",className:e.link,children:Object(P.jsx)(f.a,{variant:"contained",color:"secondary",children:"Sign up"})})})]})})),_=n(180),M=n(181),A=n(189),B=Object(x.a)({header:{display:"flex",justifyContent:"space-between",backgroundColor:"#234"},info:{display:"flex",alignItems:"center"},avatar:{marginLeft:"20px"},button:{textDecoration:"none",marginLeft:"20px"},link:{textDecoration:"none",color:"white"}}),G=r.a.memo((function(){var e=B(),t=Object(w.c)((function(e){return e.auth.user})),n=Object(w.b)();return Object(P.jsx)(_.a,{position:"static",children:Object(P.jsxs)(M.a,{className:e.header,children:[Object(P.jsx)(p.a,{variant:"h5",children:"Paint"}),t?Object(P.jsxs)(h.a,{className:e.info,children:[Object(P.jsx)(p.a,{variant:"body2",children:t.email}),Object(P.jsx)(A.a,{alt:"User profile photo",src:t.photo?t.photo:"",className:e.avatar}),Object(P.jsx)(f.a,{variant:"contained",color:"secondary",className:e.button,onClick:function(){n({type:I})},children:"Sign out"})]}):""]})})})),W=n(16),F=Object(x.a)({signUpBox:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},form:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},input:{marginTop:"20px"},buttons:{marginTop:"20px",width:"250px",display:"flex",justifyContent:"space-between"},link:{textDecoration:"none"}}),Y=r.a.memo((function(){var e=F(),t=Object(w.b)(),n=Object(a.useState)(""),r=Object(i.a)(n,2),c=r[0],s=r[1],o=Object(a.useState)(""),h=Object(i.a)(o,2),x=h[0],O=h[1],m=Object(a.useState)(""),v=Object(i.a)(m,2),g=v[0],y=v[1],k=Object(w.c)((function(e){return e.auth.error})),N=function(){var e=Object(l.a)(u.a.mark((function e(n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),x===g){e.next=4;break}return t(L("Passwords don't match, try again!")),e.abrupt("return");case 4:if(!x.includes(" ")){e.next=7;break}return t(L("Password must be without spaces!")),e.abrupt("return");case 7:t(E(c,x)),s(""),O(""),y("");case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(P.jsxs)(b.a,{className:e.signUpBox,children:[k?Object(P.jsx)(R,{}):"",Object(P.jsx)(p.a,{variant:"h5",children:"Sign up with email and password"}),Object(P.jsxs)("form",{className:e.form,onSubmit:N,children:[Object(P.jsx)(d.a,{variant:"outlined",type:"email",name:"email",value:c,onChange:function(e){s(e.currentTarget.value)},label:"Email",required:!0,className:e.input}),Object(P.jsx)(d.a,{variant:"outlined",type:"password",name:"password",value:x,onChange:function(e){O(e.currentTarget.value)},label:"Password",required:!0,className:e.input}),Object(P.jsx)(d.a,{variant:"outlined",type:"password",name:"confirmPassword",value:g,onChange:function(e){y(e.currentTarget.value)},label:"Confirm Password",required:!0,className:e.input}),Object(P.jsxs)(b.a,{className:e.buttons,children:[Object(P.jsx)(j.b,{to:"/signin",className:e.link,children:Object(P.jsx)(f.a,{variant:"contained",color:"secondary",children:"Go back"})}),Object(P.jsx)(f.a,{color:"secondary",variant:"contained",type:"submit",children:"SIGN UP"})]})]})]})})),q=n(57);n(128),n(135),n(131);q.a.initializeApp({apiKey:"AIzaSyBxYYF8mjQQt3MP_tLcmflpyBmZ21IVHOU",authDomain:"innowise-paint.firebaseapp.com",projectId:"innowise-paint",storageBucket:"innowise-paint.appspot.com",messagingSenderId:"1075639282075",appId:"1:1075639282075:web:a1298d9cb7aa7feb5c193e"});var z=q.a.auth(),H=q.a.firestore(),X=q.a.storage(),J=new q.a.auth.GoogleAuthProvider,Q=function(){return z.signInWithPopup(J)},K=(q.a,n(190)),V=n(182),Z=Object(x.a)((function(e){return{backdrop:{zIndex:e.zIndex.drawer+1,color:"#fff"}}})),$=r.a.memo((function(){var e=Z();return Object(P.jsx)(h.a,{children:Object(P.jsx)(K.a,{className:e.backdrop,open:!0,children:Object(P.jsx)(V.a,{color:"inherit"})})})})),ee=n(137),te=n(174),ne=n(93),ae=n.n(ne),re=n(138),ce=Object(re.a)((function(){return{paper:{zIndex:1,position:"relative"},taskItem:{margin:"25px",padding:"25px",minWidth:"300px"},buttons:{display:"flex",justifyContent:"flex-end"}}})),se=r.a.memo((function(e){var t=e.image,n=ce(),a=function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X.ref().child(t.imagePath).delete();case 2:return e.next=4,H.collection("images").doc("".concat(t.imageId)).delete();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(P.jsx)(ee.a,{elevation:4,className:n.paper,children:Object(P.jsxs)(b.a,{className:n.taskItem,children:[Object(P.jsx)(b.a,{className:n.buttons,children:Object(P.jsx)(te.a,{onClick:a,children:Object(P.jsx)(ae.a,{})})}),Object(P.jsx)(b.a,{children:Object(P.jsx)(p.a,{variant:"h6",children:t.userEmail})}),Object(P.jsx)("img",{src:t.imageURL,alt:""})]})})}));function ie(){return(ie=Object(l.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=H.collection("images"),n=[],e.next=4,t.get().then((function(e){return e.forEach((function(e){return n.push(e.data())}))}));case 4:return e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function oe(e,t,n,a){return ue.apply(this,arguments)}function ue(){return(ue=Object(l.a)(u.a.mark((function e(t,n,a,r){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=H.collection("images").doc("".concat(a)),e.next=3,c.set({userEmail:t.email,imageURL:n,imageId:a,imagePath:r});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var le=Object(x.a)({feed:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},buttons:{marginBottom:"40px"},button:{textDecoration:"none",marginLeft:"20px"},link:{textDecoration:"none",color:"white"}}),je=r.a.memo((function(){var e=le(),t=Object(a.useState)(),n=Object(i.a)(t,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){(function(){return ie.apply(this,arguments)})().then((function(e){return c(e)}))}),[]),console.log(r),Object(P.jsxs)(h.a,{className:e.feed,children:[Object(P.jsxs)(h.a,{className:e.buttons,children:[Object(P.jsx)(f.a,{variant:"contained",color:"secondary",className:e.button,children:Object(P.jsx)(j.c,{className:e.link,to:"/editor",children:"Editor"})}),Object(P.jsx)(f.a,{variant:"contained",color:"secondary",className:e.button,children:Object(P.jsx)(j.c,{className:e.link,to:"/",children:"Feed"})})]}),Object(P.jsx)(h.a,{children:r?r.map((function(e){return Object(P.jsx)(se,{image:e},e.imageId)})):Object(P.jsx)("h1",{children:"No images"})})]})})),be=n(183),pe=n(191),de=n(94),fe=n.n(de),he=(n(133),n(95)),xe=n.n(he),Oe=n(96),me=n.n(Oe),ve=n(97),ge=n.n(ve),we=function(){var e=Object(a.useRef)(),t=Object(a.useRef)(),n=Object(a.useRef)(),r=Object(a.useState)("#743DF5"),c=Object(i.a)(r,2),s=c[0],o=c[1],j=Object(a.useState)(2),b=Object(i.a)(j,2),p=b[0],d=b[1],x=Object(a.useState)(),O=Object(i.a)(x,2),m=O[0],v=O[1],g=Object(a.useState)(),y=Object(i.a)(g,2),k=y[0],N=y[1],S=Object(a.useState)(),I=Object(i.a)(S,2),C=I[0],T=I[1],D=Object(a.useState)(),E=Object(i.a)(D,2),L=E[0],R=E[1],U=Object(a.useState)("pencil"),_=Object(i.a)(U,2),M=_[0],A=_[1],B=Object(w.c)((function(e){return e.auth.user}));Object(a.useEffect)((function(){e.current&&t.current&&(T(e.current.getContext("2d")),R(t.current.getContext("2d")))}),[]);var G=function(){C.clearRect(0,0,e.current.width,e.current.height),L.clearRect(0,0,t.current.width,t.current.height)},W=function(){var e=Object(l.a)(u.a.mark((function e(){var t,n,a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=L.canvas.toDataURL(),n=Date.now(),a="images/".concat(B.uid,"/").concat(n,".png"),e.next=5,X.ref().child(a).putString(t,"data_url");case 5:return e.next=7,X.ref("images/".concat(B.uid,"/").concat(n,".png")).getDownloadURL();case 7:r=e.sent,oe(B,r,n,a),G();case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(P.jsxs)(h.a,{className:"canvas-box",children:[Object(P.jsxs)(h.a,{className:"buttons",children:[Object(P.jsx)(f.a,{variant:"contained",color:"pencil"===M?"primary":"inherit",onClick:function(){return A("pencil")},children:Object(P.jsx)(fe.a,{})}),Object(P.jsx)(f.a,{variant:"contained",color:"rectangle"===M?"primary":"inherit",onClick:function(){return A("rectangle")},children:Object(P.jsx)(xe.a,{})}),Object(P.jsx)(f.a,{color:"circle"===M?"primary":"inherit",variant:"contained",onClick:function(){return A("circle")},children:Object(P.jsx)(me.a,{})}),Object(P.jsx)(f.a,{color:"line"===M?"primary":"inherit",variant:"contained",onClick:function(){return A("line")},children:Object(P.jsx)(ge.a,{})}),Object(P.jsx)("input",{type:"color",value:s,onChange:function(e){return o(e.target.value)}}),Object(P.jsxs)(be.a,{className:"select",value:p,onChange:function(e){return d(e.target.value)},children:[Object(P.jsx)(pe.a,{value:"1",children:"1"}),Object(P.jsx)(pe.a,{value:"2",children:"2"}),Object(P.jsx)(pe.a,{value:"4",children:"4"}),Object(P.jsx)(pe.a,{value:"6",children:"6"}),Object(P.jsx)(pe.a,{value:"8",children:"8"}),Object(P.jsx)(pe.a,{value:"10",children:"10"}),Object(P.jsx)(pe.a,{value:"12",children:"12"}),Object(P.jsx)(pe.a,{value:"14",children:"14"}),Object(P.jsx)(pe.a,{value:"16",children:"16"}),Object(P.jsx)(pe.a,{value:"20",children:"20"})]}),Object(P.jsx)(f.a,{variant:"contained",color:"secondary",onClick:G,children:"Clear"}),Object(P.jsx)(f.a,{color:"secondary",variant:"contained",onClick:W,children:"save"})]}),Object(P.jsxs)(ee.a,{className:"canvasContainer",ref:n,elevation:5,children:[Object(P.jsx)("canvas",{ref:t,width:600,height:600,className:"canvas"}),Object(P.jsx)("canvas",{ref:e,className:"canvas",width:600,height:600,onMouseDown:function(e){v(e.pageX-e.target.offsetLeft),N(e.pageY-e.target.offsetTop)},onMouseMove:function(t){if(C&&m&&k&&n.current&&e.current)switch(C.strokeStyle=s,C.lineWidth=p,C.clearRect(0,0,e.current.width,e.current.height),M){case"pencil":C.lineTo(t.pageX-t.target.offsetLeft,t.pageY-t.target.offsetTop),C.stroke();break;case"rectangle":var a=t.pageX-m-n.current.offsetLeft,r=t.pageY-k-n.current.offsetTop;C.strokeRect(m,k,a,r),C.stroke();break;case"circle":C.beginPath(),C.arc(m,k,Math.sqrt(Math.pow(t.pageX-m-n.current.offsetLeft,2)+Math.pow(t.pageY-k-n.current.offsetTop,2)),0,2*Math.PI,!1),C.stroke();break;case"line":C.beginPath(),C.moveTo(m,k),C.lineTo(t.clientX-n.current.offsetLeft,t.clientY-n.current.offsetTop),C.stroke()}},onMouseUp:function(t){C&&L&&(L.drawImage(e.current,0,0),C.beginPath(),v(null),N(null))}})]})]})},ye=Object(x.a)({editor:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},button:{textDecoration:"none",marginLeft:"20px",marginBottom:"40px"},link:{textDecoration:"none",color:"white"}}),ke=function(){var e=ye();return Object(P.jsxs)(h.a,{className:e.editor,children:[Object(P.jsxs)(h.a,{children:[Object(P.jsx)(f.a,{variant:"contained",color:"secondary",className:e.button,children:Object(P.jsx)(j.c,{className:e.link,to:"/editor",children:"Editor"})}),Object(P.jsx)(f.a,{variant:"contained",color:"secondary",className:e.button,children:Object(P.jsx)(j.c,{className:e.link,to:"/",children:"Feed"})})]}),Object(P.jsx)(we,{})]})};var Ne=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],r=t[1],c=Object(w.b)(),s=Object(w.c)((function(e){return e.auth.user}));return Object(a.useEffect)((function(){r(!0),z.onAuthStateChanged((function(e){e?(c(T({uid:e.uid,email:e.email,photo:e.photoURL})),r(!1)):(c(T(null)),r(!1))}))}),[c]),Object(P.jsxs)(b.a,{className:"App",children:[Object(P.jsx)(G,{}),n?Object(P.jsx)($,{}):Object(P.jsxs)(b.a,{className:"main",children:[s?Object(P.jsxs)(W.d,{children:[Object(P.jsx)(W.b,{exact:!0,path:"/",children:Object(P.jsx)(je,{})}),Object(P.jsx)(W.b,{exact:!0,path:"/editor",children:Object(P.jsx)(ke,{})})]}):Object(P.jsx)(W.a,{to:"/signin"}),null===s?Object(P.jsxs)(W.d,{children:[Object(P.jsx)(W.b,{exact:!0,path:"/signup",children:Object(P.jsx)(Y,{})}),Object(P.jsx)(W.b,{exact:!0,path:"/signin",children:Object(P.jsx)(U,{})}),Object(P.jsx)(W.b,{path:"*",children:Object(P.jsx)(W.a,{to:"/signin"})})]}):Object(P.jsx)(W.a,{to:"/"})]})]})},Se=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,193)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))},Ie=n(70),Ce={user:null,error:null},Te=n(48),De=Object(Te.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(Ie.a)(Object(Ie.a)({},e),{},{user:t.payload});case C:return Object(Ie.a)(Object(Ie.a)({},e),{},{error:t.errorMessage});default:return e}}}),Ee=n(99),Le=n(98),Pe=n(78),Re=n(23);function Ue(){return _e.apply(this,arguments)}function _e(){return(_e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Me(e,t){return Ae.apply(this,arguments)}function Ae(){return(Ae=Object(l.a)(u.a.mark((function e(t,n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z.signInWithEmailAndPassword(t,n);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Be(e,t){return Ge.apply(this,arguments)}function Ge(){return(Ge=Object(l.a)(u.a.mark((function e(t,n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z.createUserWithEmailAndPassword(t,n);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function We(){return Fe.apply(this,arguments)}function Fe(){return(Fe=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z.signOut();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ye(e){return qe.apply(this,arguments)}function qe(){return(qe=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=H.collection("users").doc("".concat(t.uid)),e.next=3,n.set({userId:t.uid,email:t.email,photo:t.photo});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ze=u.a.mark(et),He=u.a.mark(tt),Xe=u.a.mark(nt),Je=u.a.mark(at),Qe=u.a.mark(rt),Ke=u.a.mark(ct),Ve=u.a.mark(st),Ze=u.a.mark(it),$e=u.a.mark(ot);function et(){var e,t,n;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(Re.b)(Ue);case 3:return e=a.sent,t=e.user,n={uid:t.uid,email:t.email,photo:t.photoURL},a.next=8,Object(Re.b)(Ye,n);case 8:return a.next=10,Object(Re.c)(T(n));case 10:a.next=16;break;case 12:return a.prev=12,a.t0=a.catch(0),a.next=16,Object(Re.c)(L(a.t0.message));case 16:case"end":return a.stop()}}),ze,null,[[0,12]])}function tt(e){var t,n,a,r,c;return u.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return t=e.email,n=e.password,s.prev=1,s.next=4,Object(Re.b)(Me,t,n);case 4:return a=s.sent,r=a.user,c={uid:r.uid,email:r.email,photo:r.photoURL},s.next=9,Object(Re.c)(T(c));case 9:s.next=15;break;case 11:return s.prev=11,s.t0=s.catch(1),s.next=15,Object(Re.c)(L(s.t0.message));case 15:case"end":return s.stop()}}),He,null,[[1,11]])}function nt(e){var t,n,a,r,c;return u.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return t=e.email,n=e.password,s.prev=1,s.next=4,Object(Re.b)(Be,t,n);case 4:return a=s.sent,r=a.user,c={uid:r.uid,email:r.email,photo:r.photoURL},s.next=9,Object(Re.b)(Ye,c);case 9:return s.next=11,Object(Re.c)(T(c));case 11:s.next=17;break;case 13:return s.prev=13,s.t0=s.catch(1),s.next=17,Object(Re.c)(L(s.t0.message));case 17:case"end":return s.stop()}}),Xe,null,[[1,13]])}function at(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(Re.b)(We);case 3:return e.next=5,Object(Re.c)(T(null));case 5:e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(0),e.next=11,Object(Re.c)(L(e.t0.message));case 11:case"end":return e.stop()}}),Je,null,[[0,7]])}function rt(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Re.d)(N,et);case 2:case"end":return e.stop()}}),Qe)}function ct(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Re.d)(k,tt);case 2:case"end":return e.stop()}}),Ke)}function st(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Re.d)(S,nt);case 2:case"end":return e.stop()}}),Ve)}function it(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Re.d)(I,at);case 2:case"end":return e.stop()}}),Ze)}function ot(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Pe.a)([ct(),st(),rt(),it()]);case 2:case"end":return e.stop()}}),$e)}var ut=u.a.mark(lt);function lt(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Pe.a)([ot()]);case 2:case"end":return e.stop()}}),ut)}var jt=Object(Ee.a)(),bt=Object(Te.createStore)(De,Object(Le.composeWithDevTools)(Object(Te.applyMiddleware)(jt)));jt.run(lt),s.a.render(Object(P.jsx)(r.a.StrictMode,{children:Object(P.jsx)(w.a,{store:bt,children:Object(P.jsx)(j.a,{children:Object(P.jsx)(Ne,{})})})}),document.getElementById("root")),Se()}},[[134,1,2]]]);
//# sourceMappingURL=main.c8c3ba8e.chunk.js.map