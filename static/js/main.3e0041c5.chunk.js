(this["webpackJsonpdz-ignata"]=this["webpackJsonpdz-ignata"]||[]).push([[0],[,,,function(e,t,r){e.exports={wrapper:"Message_wrapper__3IJss",message:"Message_message__2i_M1",name:"Message_name__1NIWr",messages:"Message_messages__2610Z",time:"Message_time__1BiAm"}},,,,,,function(e,t,r){e.exports={App:"App_App__3-kuR"}},function(e,t,r){e.exports={wrapper:"Affairs_wrapper__3I4pE"}},function(e,t,r){e.exports={someClass:"Greeting_someClass__2HIn8",error:"Greeting_error__2euos"}},,,,,,function(e,t,r){},,function(e,t,r){"use strict";r.r(t);var a=r(1),s=r.n(a),c=r(8),n=r.n(c),i=(r(17),r(9)),j=r.n(i),l=r(3),o=r.n(l),d=r(0);var b=function(e){return Object(d.jsxs)("div",{className:o.a.wrapper,children:[Object(d.jsx)("img",{src:e.avatar,alt:""}),Object(d.jsxs)("div",{className:o.a.message,children:[Object(d.jsx)("div",{className:o.a.name,children:e.name}),Object(d.jsx)("div",{className:o.a.messages,children:e.message}),Object(d.jsx)("div",{className:o.a.time,children:e.time})]})]})},u="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",O="\u0411\u043e\u0445-\u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0435\u0440",m="\u041d\u041f\u041c \u0441\u0442\u0430\u0440\u0442 \u043d\u0430\u0436\u0438\u043c\u0430\u043b?",h="22:00";var f=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),Object(d.jsx)(b,{avatar:u,name:O,message:m,time:h}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},x=r(2),p=r(10),_=r.n(p);var v=function(e){return Object(d.jsxs)("div",{className:_.a.wrapper,children:[Object(d.jsx)("div",{children:e.affair.name}),Object(d.jsx)("div",{children:e.affair.priority}),Object(d.jsx)("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"clear"})]})};var g=function(e){var t=e.data.map((function(t){return Object(d.jsx)(v,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(d.jsxs)("div",{children:[t,Object(d.jsx)("button",{onClick:function(){e.setFilter("all")},children:"All"}),Object(d.jsx)("button",{onClick:function(){e.setFilter("high")},children:"High"}),Object(d.jsx)("button",{onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(d.jsx)("button",{onClick:function(){e.setFilter("low")},children:"Low"})]})},k=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var C=function(){var e=Object(a.useState)(k),t=Object(x.a)(e,2),r=t[0],s=t[1],c=Object(a.useState)("all"),n=Object(x.a)(c,2),i=n[0],j=n[1],l=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(r,i);return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 2",Object(d.jsx)(g,{data:l,setFilter:j,deleteAffairCallback:function(e){return s(function(e,t){return e.filter((function(e){return e._id!==t}))}(r,e))}}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},w=r(12),A=r(6),N=r(11),S=r.n(N),U=function(e){var t=e.name,r=e.setNameCallback,a=e.addUser,s=e.error,c=e.totalUsers,n=(Object(A.a)(e,["name","setNameCallback","addUser","error","totalUsers"]),s?S.a.error:"");return Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{value:t,onChange:r,className:n}),Object(d.jsx)("span",{children:s}),Object(d.jsx)("button",{onClick:a,children:"add"}),Object(d.jsx)("span",{children:c})]})},y=function(e){var t=e.users,r=e.addUserCallback,s=(Object(A.a)(e,["users","addUserCallback"]),Object(a.useState)("")),c=Object(x.a)(s,2),n=c[0],i=c[1],j=Object(a.useState)(""),l=Object(x.a)(j,2),o=l[0],b=l[1],u=t.length;return Object(d.jsx)(U,{name:n,setNameCallback:function(e){i(e.currentTarget.value),e.currentTarget.value?b(""):b("Error")},addUser:function(){n.trim()?(r(n.trim()),alert("Hello ".concat(n.trim()," !")),i("")):b("Error")},error:o,totalUsers:u})},M=r(21);var F=function(){var e=Object(a.useState)([]),t=Object(x.a)(e,2),r=t[0],s=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 3",Object(d.jsx)(y,{users:r,addUserCallback:function(e){var t={_id:Object(M.a)(),name:e};s([t].concat(Object(w.a)(r)))}}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})};var E=function(){return Object(d.jsxs)("div",{className:j.a.App,children:[Object(d.jsx)("div",{children:"react homeworks:"}),Object(d.jsx)(f,{}),Object(d.jsx)(C,{}),Object(d.jsx)(F,{})]})};n.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(E,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.3e0041c5.chunk.js.map