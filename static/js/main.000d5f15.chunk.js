(this["webpackJsonpmy-blog"]=this["webpackJsonpmy-blog"]||[]).push([[0],{140:function(e,t,a){e.exports={wrapper:"App_wrapper__2PkVQ"}},154:function(e,t,a){},17:function(e,t,a){e.exports={wrapper:"ArticleItemList_wrapper__3eieN",content:"ArticleItemList_content___eQwv",header:"ArticleItemList_header__1eM_T",title:"ArticleItemList_title__9GX2D",favorites:"ArticleItemList_favorites__xieKk",heart:"ArticleItemList_heart__1DcZl",tags:"ArticleItemList_tags__3Et-u",article:"ArticleItemList_article__1s-gr",description:"ArticleItemList_description__2ESma",author:"ArticleItemList_author__1Dq4M","author-avatar":"ArticleItemList_author-avatar__3YuW2","author-info":"ArticleItemList_author-info__3_B32","author-name":"ArticleItemList_author-name__3TSqB","created-date":"ArticleItemList_created-date__8QwC6"}},189:function(e,t,a){},269:function(e,t,a){},270:function(e,t,a){"use strict";a.r(t);var c=a(1),r=a(0),n=a(30),s=a.n(n),i=a(39),l=a(10),o=a(54),u=a.n(o),j=function(){return Object(c.jsxs)("div",{className:u.a.header,children:[Object(c.jsx)(i.b,{to:"/Articles/",className:u.a.logo,children:"Realworld Blog"}),Object(c.jsxs)("div",{className:u.a.buttons,children:[Object(c.jsx)(i.b,{to:"/sign-in/",className:u.a["sign-in"],children:"Sign In"}),Object(c.jsx)(i.b,{to:"/sign-up/",className:u.a["sign-up"],children:"Sign Up"})]})]})},d=a(75),p=a.n(d),b=function(e){return console.log(e),Object(c.jsxs)("div",{className:p.a.wrapper,children:[Object(c.jsx)("div",{className:p.a.title,children:Object(c.jsx)("span",{children:e.title})}),Object(c.jsx)("div",{className:p.a.form,children:e.children})]})},h=a(76),_=a.n(h);var x=function(e){var t=e.type,a=e.label,r=e.placeholder,n=e.value,s=e.onChange,i=t||"text",l="".concat(i,"-").concat(Math.random()),o=[_.a.input];return Object(c.jsxs)("div",{className:o.join(" "),children:[Object(c.jsx)("label",{className:_.a.label,htmlFor:l,children:a}),Object(c.jsx)("input",{className:_.a.input,type:i,id:l,placeholder:r,value:n,onChange:s})]})},O=function(){return Object(c.jsx)(b,{title:"Create new account",children:Object(c.jsxs)("form",{children:[Object(c.jsx)(x,{label:"Username",placeholder:"Username"}),Object(c.jsx)(x,{type:"email",label:"Email address",placeholder:"Email address"}),Object(c.jsx)(x,{type:"password",label:"Password",placeholder:"Password"}),Object(c.jsx)(x,{type:"password",label:"Repeat Password",placeholder:"Password"})]})})},m=a(46),f=a(274),v=a(17),g=a.n(v),w=function(e){var t=e.data,a=e.clsForTags,r=t.title,n=t.favoritesCount,s=t.tagList,l=t.slug,o=t.description,u=t.createdAt,j=t.author,d=j.username,p=j.image,b=[g.a.tags];a&&b.push(g.a.article);var h=Object(f.a)(new Date(u),"MMMM d, Y"),_=s.length?Object(c.jsx)("div",{className:b.join(" "),children:Object(c.jsx)("ul",{children:s.map((function(e,t){return Object(c.jsx)("li",{children:Object(c.jsx)("span",{children:e})},t)}))})}):null;return Object(c.jsxs)("div",{className:g.a.wrapper,children:[Object(c.jsxs)("div",{className:g.a.content,children:[Object(c.jsxs)("div",{className:g.a.header,children:[Object(c.jsx)("div",{className:g.a.title,children:Object(c.jsx)(i.b,{to:"/articles/".concat(l),children:Object(c.jsx)("h5",{children:r})})}),Object(c.jsxs)("div",{className:g.a.favorites,children:[Object(c.jsx)("div",{className:g.a.heart}),Object(c.jsx)("span",{children:n})]})]}),_,Object(c.jsx)("div",{className:g.a.description,children:o})]}),Object(c.jsxs)("div",{className:g.a.author,children:[Object(c.jsxs)("div",{className:g.a["author-info"],children:[Object(c.jsx)("div",{className:g.a["author-name"],children:d}),Object(c.jsx)("div",{className:g.a["created-date"],children:h})]}),Object(c.jsx)("div",{className:g.a["author-avatar"],children:Object(c.jsx)("img",{src:"".concat(p),alt:d})})]})]})},N=a(275),A=(a(154),function(e){var t=e.totalArticles,a=e.currentPage,r=e.nextPage;return Object(c.jsx)(N.a,{size:"small",current:a,total:t,pageSize:"20",onChange:function(e){r(e)}})}),L=a(277),I=(a(189),function(){return Object(c.jsx)("div",{className:"spinner",children:Object(c.jsx)(L.a,{tip:"Loading...",size:"large"})})}),y=a(47),k=a.n(y),P=a(77),E=a(137),S=a(138),M=function(){function e(){var t=this;Object(E.a)(this,e),this._baseURL="https://conduit.productionready.io/api/",this.getArticleList=function(){var e=Object(P.a)(k.a.mark((function e(a){var c;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getRequest(a);case 2:return c=e.sent,e.abrupt("return",c);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getArticle=function(){var e=Object(P.a)(k.a.mark((function e(a){var c;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getRequest(a);case 2:return c=e.sent,e.abrupt("return",c);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}return Object(S.a)(e,[{key:"getRequest",value:function(){var e=Object(P.a)(k.a.mark((function e(){var t,a,c,r,n=arguments;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:null,a=n.length>1&&void 0!==n[1]?n[1]:null,e.next=4,fetch("".concat(this._baseURL).concat(t),a);case 4:if((c=e.sent).ok){e.next=7;break}throw new Error("Could not fetch ".concat(t,", received ").concat(c.status," "));case 7:return e.next=9,c.json();case 9:return r=e.sent,e.abrupt("return",r);case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),e}(),q=a(78),C=a.n(q),R=function(){var e=new M,t=Object(r.useState)([]),a=Object(m.a)(t,2),n=a[0],s=a[1],i=Object(r.useState)(null),l=Object(m.a)(i,2),o=l[0],u=l[1],j=Object(r.useState)(1),d=Object(m.a)(j,2),p=d[0],b=d[1],h=Object(r.useState)(!0),_=Object(m.a)(h,2),x=_[0],O=_[1],f=function(t){O(!0);var a=20*(t-1);e.getArticleList("articles?offset=".concat(a,"/")).then((function(e){u(e.articlesCount),s(e.articles)})).then((function(){O(!1)}))};Object(r.useEffect)((function(){f(p)}),[]),Object(r.useEffect)((function(){f(p)}),[p]);return x?Object(c.jsx)(I,{}):Object(c.jsxs)("div",{className:C.a.wrapper,children:[Object(c.jsx)("ul",{className:C.a.articleList,children:n.map((function(e,t){return Object(c.jsx)("li",{children:Object(c.jsx)(w,{data:e})},t)}))}),Object(c.jsx)("div",{className:C.a.pagination,children:Object(c.jsx)(A,{totalArticles:o,currentPage:p,nextPage:function(e){b(e)}})})]})},B=a(139),W=a.n(B),D=a(95),J=a.n(D),T=function(e){var t=e.match.params.slug,a=new M,n=Object(r.useState)({}),s=Object(m.a)(n,2),i=s[0],l=s[1];return Object(r.useEffect)((function(){a.getArticle("articles/".concat(t,"/")).then((function(e){return l(e.article)}))}),[]),Object(r.useEffect)((function(){console.log(i)}),[i]),i&&i.author?Object(c.jsxs)("div",{className:J.a.article,children:[Object(c.jsx)(w,{data:i,clsForTags:!0}),Object(c.jsx)("div",{className:J.a.articleBody,children:Object(c.jsx)(W.a,{children:i.body})})]}):Object(c.jsx)(I,{})},U=a(140),z=a.n(U),F=function(){return Object(c.jsx)(i.a,{children:Object(c.jsxs)("div",{className:z.a.wrapper,children:[Object(c.jsx)(j,{}),Object(c.jsx)(l.a,{path:"/articles",exact:!0,component:R}),Object(c.jsx)(l.a,{path:"/",exact:!0,component:R}),Object(c.jsx)(l.a,{path:"/articles/:slug",component:T}),Object(c.jsx)(l.a,{path:"/sign-up/",component:O})]})})};a(269);s.a.render(Object(c.jsx)(F,{}),document.getElementById("root"))},54:function(e,t,a){e.exports={header:"Header_header__2ksFT",logo:"Header_logo__1b2Wt","sign-in":"Header_sign-in__1PPVb","sign-up":"Header_sign-up__2zj7q"}},75:function(e,t,a){e.exports={wrapper:"ModalWrapper_wrapper__2p1qt",title:"ModalWrapper_title__1_1OR"}},76:function(e,t,a){e.exports={input:"Input_input__2Jdst",label:"Input_label__1VIlb"}},78:function(e,t,a){e.exports={wrapper:"ArticlesList_wrapper__1qYJ_",articleList:"ArticlesList_articleList__3JAQD"}},95:function(e,t,a){e.exports={article:"Article_article__2c7ZW",articleBody:"Article_articleBody__3ii2W"}}},[[270,1,2]]]);
//# sourceMappingURL=main.000d5f15.chunk.js.map