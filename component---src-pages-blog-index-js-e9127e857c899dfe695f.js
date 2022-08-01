"use strict";(self.webpackChunkLayer5=self.webpackChunkLayer5||[]).push([[4524],{60434:function(e,t,n){n.r(t),n.d(t,{default:function(){return Z}});var a=n(67294),r=n(43587),l=n(26052),i=n(9357),s=n(63941),c=n(37242),o=n(33754),m=n(36966),u=n(62305),d=r.default.div.withConfig({displayName:"blogGridstyle__BlogPageWrapper",componentId:"sc-1m69vla-0"})(["\n  .blog-grid-wrapper {\n    margin: 5rem auto;\n  }\n  .tooltip-search {\n    margin-bottom: 0.8rem;\n  }\n\n  @media only screen and (max-width: 575px) {\n    .blog-grid-wrapper {\n      margin: 0 auto 1rem;\n    }\n  }\n\n  @media only screen and (max-width: 992px) {\n    .blog-page-wrapper {\n      margin-bottom: 5rem;\n    }\n\n    .post-meta-block {\n      height: 3.5rem;\n    }\n  }\n\n  @media only screen and (min-width: 575px) {\n    .tooltip-search {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      margin-bottom: 0;\n    }\n  }\n  /* @media only screen and (min-width: 990px) {\n    .tooltip-search {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n    }\n  } */\n"]),g=n(89725),p=n(20749),h=n(60580),f=n(34945),E=n(91988),w=function(e){var t=e.isListView,n=e.setListView,r=e.setGridView,l=e.pageContext,i=e.data,s=e.theme,w=(0,a.useState)(1),y=w[0],b=w[1],x=(0,a.useState)(10)[0],v=y*x,Z=v-x,L=(0,a.useState)(""),V=L[0],k=L[1],S=(0,E.Z)(i.allMdx.nodes,k,V,["frontmatter","title"],"id"),C=S.queryResults,P=S.searchData,X=C.slice(Z,v);return a.createElement(d,null,a.createElement(o.Z,{title:"Blog",path:"Blog",img:u.Z,feedlink:"/blog/feed.xml"}),a.createElement("div",{className:"blog-page-wrapper"},a.createElement(c.W2,null,a.createElement(c.X2,null,a.createElement(c.JX,{xs:12,lg:8},a.createElement("div",{className:"tooltip-search"},a.createElement(p.Z,{isListView:t,setListView:n,setGridView:r}),a.createElement(h.Z,{searchQuery:V,searchData:P})),a.createElement("div",{className:"blog-grid-wrapper"},a.createElement(c.X2,null,C.length<1&&a.createElement(c.JX,{xs:12,sm:6},'No blog post that matches the title "',V,'" found.'),X.length>0&&X.map((function(e){var t=e.id,n=e.frontmatter,r=e.fields;return a.createElement(c.JX,{key:t,xs:12,sm:6},a.createElement(g.Z,{theme:s,frontmatter:n,fields:r}))})),a.createElement(c.JX,null,X.length>0&&a.createElement(f.Z,{postsPerPage:x,totalPosts:C.length,paginate:function(e){b(e)},currentPage:y}))))),a.createElement(c.JX,{xs:12,lg:4},a.createElement(m.Z,{pageContext:l}))))))},y=n(17380),b=n(35085),x=n(38001),v=n(31634),Z=function(e){var t=(0,a.useState)(!1),n=t[0],c=t[1],o=function(){c(!0)};(0,a.useEffect)((function(){e.location.state&&e.location.state.isListView&&o()}),[]);var m=function(e){return n?a.createElement(v.Z,e):a.createElement(w,e)},u=(0,a.useState)(),d=u[0],g=u[1],p=a.useState(!1),h=p[0],f=p[1];return a.useEffect((function(){f(!0)}),[]),h?a.createElement(r.ThemeProvider,{theme:"light"===d?x.Z:x.k},a.createElement(l.Z,null,a.createElement(b.Z,null),a.createElement(i.Z,{title:"Blog",description:"The latest news and announcements about Layer5, our products, and our ecosystem, as well as voices from across our community."}),a.createElement(s.Z,{theme:d,themeSetter:function(e){g(e)}}),a.createElement(m,{isListView:n,setListView:o,setGridView:function(){c(!1)},pageContext:e.pageContext,data:e.data,theme:d}),a.createElement(y.Z,null))):a.createElement("div",{style:{visibility:"hidden"}},"Preventing mismatched Screen")}}}]);
//# sourceMappingURL=component---src-pages-blog-index-js-e9127e857c899dfe695f.js.map