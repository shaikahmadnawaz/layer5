(self.webpackChunkLayer5=self.webpackChunkLayer5||[]).push([[1327],{2445:function(t,e,n){var r=n(15301).w_;t.exports.Z=function(t){return r({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"}}]})(t)}},58125:function(t,e,n){var r=n(76899);t.exports={MDXRenderer:r}},76899:function(t,e,n){var r=n(861),i=n(3515),a=n(38416),o=n(7071),l=["scope","children"];function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var m=n(67294),d=n(64983).mdx,u=n(95862).useMDXScope;t.exports=function(t){var e=t.scope,n=t.children,a=o(t,l),c=u(e),p=m.useMemo((function(){if(!n)return null;var t=s({React:m,mdx:d},c),e=Object.keys(t),a=e.map((function(e){return t[e]}));return i(Function,["_fn"].concat(e,[""+n])).apply(void 0,[{}].concat(r(a)))}),[n,e]);return m.createElement(p,s({},a))}},25679:function(t,e,n){"use strict";var r=n(63366),i=n(67294),a=n(93723),o=["childImageSharp","extension","publicURL","alt"];e.Z=function(t){var e=t.childImageSharp,n=t.extension,l=t.publicURL,c=t.alt,s=(0,r.Z)(t,o);return e||"svg"!==n?i.createElement(a.G,Object.assign({image:e.gatsbyImageData},s,{alt:c})):i.createElement("div",{className:"old-gatsby-image-wrapper"},i.createElement("img",{src:l,alt:c}))}},17596:function(t,e,n){"use strict";n.d(e,{gv:function(){return i},nH:function(){return a},$o:function(){return o}});var r=n(64423),i=r.default.div.withConfig({displayName:"Integrationstyle__HoneycombGrid",componentId:"sc-ju97f9-0"})(["\n  .heading {\n    text-align: center;\n\n    h1 {\n      line-height: 3.75rem;\n    }\n\n    h2 {\n      font-weight: normal;\n    }\n  }\n\n  .category {\n    display: flex;\n    flex-wrap: wrap;\n    margin: 2.5625rem 1.2rem;\n    gap: 0.625rem;\n    justify-content: center;\n  }\n\n  .items {\n    background-color: #f0f0f0;\n    padding: 0.625rem 1.5625rem;\n    border-radius: 0.625rem;\n    text-transform: uppercase;\n    color: #1e2117;\n    font-size: 0.875rem;\n    cursor: pointer;\n  }\n\n  .selected {\n    background-color: ",";\n    color: ",";\n  }\n\n  ul {\n    margin: 0;\n    padding-left: 50px;\n    padding-right: 50px;\n  }\n\n  .container-active,\n  .container-inactive {\n    display: flex;\n    height: 100%;\n    background: ",";\n    justify-content: center;\n    align-items: center;\n    padding: 0.625rem;\n    position: relative;\n    clip-path: polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%);\n\n    .integration-container {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      height: 100%;\n      overflow: hidden;\n      justify-content: center;\n      position: absolute;\n      img {\n        transition: all 1s cubic-bezier(1, 0.82, 0.165, 1);\n        opacity: 100%;\n      }\n      .integration-icon {\n        flex-shrink: 0;\n      }\n      .integration-content {\n        opacity: 0;\n        text-align: center;\n        align-items: center;\n        height: 0;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n\n        transition: all 1s linear;\n        opacity: 1;\n        overflow: hidden;\n        .title {\n          line-height: 1.375rem;\n          color: ",';\n          transition: all 0.5s cubic-bezier(1, 0.82, 0.165, 1);\n          // margin-bottom: -2.7rem;\n          font-size: 0.675rem;\n          opacity: 0.2;\n          font-weight: 600;\n        }\n        .learnMoreBtn {\n          padding: 5px 10px;\n          color: white;\n          font-size: 0.875rem;\n          min-width: unset;\n          box-shadow: none;\n        }\n      }\n    }\n    :hover {\n      .integration-container {\n        img {\n          transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);\n          height: 0%;\n          opacity: 0%;\n        }\n        .integration-content {\n          transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);\n          opacity: 1;\n          height: 100%;\n          .title {\n            // margin-top: -50%;\n            font-size: 1.2rem;\n            opacity: 1;\n          }\n          .learnMoreBtn {\n            &:hover {\n              background-color: #009b8a;\n            }\n          }\n        }\n      }\n      background: #00d3a9;\n      ::after {\n        content: "";\n        background: ',";\n        margin: 0px 0px 0 4px;\n        clip-path: polygon(\n          50% 0%,\n          100% 25%,\n          100% 75%,\n          50% 100%,\n          0% 75%,\n          0% 25%\n        );\n        height: 95%;\n        width: 95%;\n        position: absolute;\n        left: 0;\n        z-index: -1;\n      }\n    }\n  }\n"],(function(t){return t.theme.darkJungleGreenColor}),(function(t){return t.theme.white}),(function(t){return t.theme.DarkTheme?t.theme.elevationColor:t.theme.white}),(function(t){return t.theme.DarkTheme?t.theme.white:t.theme.black}),(function(t){return t.theme.DarkTheme?t.theme.elevationColor:t.theme.white})),a=r.default.div.withConfig({displayName:"Integrationstyle__IntegrationsWrapper",componentId:"sc-ju97f9-1"})(["\n  max-width: 75rem;\n  margin: 5.1875rem auto;\n  text-align: center;\n"]),o=r.default.div.withConfig({displayName:"Integrationstyle__IntegrationCard",componentId:"sc-ju97f9-2"})(["\n  display: flex;\n  margin: 5rem 1rem;\n  gap: 5rem;\n  align-items: stretch;\n  flex-wrap: wrap;\n  justify-content: center;\n  .container {\n    padding: 3.125rem;\n    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);\n    border-radius: 0 3.125rem 3.125rem 3.125rem;\n    display: flex;\n    justify-content: center;\n    gap: 0.5rem;\n    flex-direction: column;\n    align-items: center;\n    flex: 0 1 auto;\n    max-width: 30rem;\n    border-width: 0px 1px 1px 0px;\n    border-style: solid;\n    border-color: #00d3a9;\n\n    p,\n    h2 {\n      text-align: center;\n    }\n  }\n\n  .open-modal-btn {\n    background-color: #00b39f;\n    color: white;\n    :hover {\n      color: black;\n    }\n  }\n"])},21554:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return u}});var r=n(67294),i=n(1597),a=n(17596),o=n(91988),l=n(60580),c=n(44279),s=n(64423).default.div.withConfig({displayName:"Honeycombstyle__HoneycombGrid",componentId:"sc-10xoxm9-0"})(["\n  display: flex;\n  text-align: left;\n  ul {\n    font-size: 0;\n    line-height: 0;\n    height: ",';\n    li {\n      width: 150px;\n      margin: 3px;\n      height: calc(150px * 1.1547);\n      display: inline-block;\n      font-size: initial;\n      margin-bottom: calc(3px - 150px * 0.2885);\n      filter: drop-shadow(rgba(0, 0, 0, 0.1) 0px 4px 20px);\n    }\n\n    ::before {\n      content: "";\n      width: calc(150px / 2 + 3px);\n      float: left;\n      height: 100%;\n      shape-outside: repeating-linear-gradient(\n        #0000 0 calc(calc(1.732 * 150px + 4 * 3px - 1px) - 3px),\n        #000 0 calc(1.732 * 150px + 4 * 3px - 1px)\n      );\n    }\n  }\n'],(function(t){return 0===t.height?"unset":"calc("+t.height+"px + 46px)"})),m=function(t){var e=t.items,n=t.renderItem,i=(0,r.useState)(0),a=i[0],o=i[1],l=(0,r.useRef)(null),c=function(){var t=l?l.current.offsetWidth:window.innerWidth,n=Math.floor((t-100)/156),r=Math.floor((t-178)/156),i=Math.floor(e.length/(n+r));if(i*(n+r)<e.length){var a=e.length-i*(n+r);o(a<=n?272*i+130:272*i+272)}else o(272*i)};return(0,r.useEffect)((function(){return window.addEventListener("resize",c),c(),function(){window.removeEventListener("resize",c)}}),[e]),r.createElement("div",null,r.createElement(s,{height:a},r.createElement("ul",{ref:l},e.map((function(t,e){return r.createElement("li",{key:e},n(t))})))))},d=function(t){return r.createElement("div",t,t.children)},u=function(t){var e=t.category,n=t.theme,s=t.count,u=(0,i.useStaticQuery)("961506260"),p=(0,r.useState)(""),g=p[0],f=p[1],h=(0,o.Z)(u.allMdx.nodes,f,g,["frontmatter","title"],["frontmatter","title"]),x=h.queryResults,b=h.searchData,y=(0,r.useState)([]),v=y[0],w=y[1],E=(0,r.useState)(!1),k=E[0],S=E[1],I=(0,r.useRef)(u.allMdx.nodes),A=I.current.reduce((function(t,e){return t.includes(e.frontmatter.category)||t.push(e.frontmatter.category),t}),[]),M=function(t){return I.current.reduce((function(e,n){return n.frontmatter.category===t&&(e+=1),e}),0)},N=(0,r.useState)([{id:-1,name:"All",isSelected:!1,count:I.current.length},...A.map((function(t){return{id:t,name:t,isSelected:!1,count:M(t)}}))]),j=N[0],O=N[1];(0,r.useEffect)((function(){return Z()}),[]),(0,r.useEffect)((function(){x&&w([...x]),0==g.length&&R()}),[x]);var R=function(){var t=[...j],n=null!=e?e:"All";t.forEach((function(t){t.name!=n?t.isSelected=!1:t.isSelected=!0})),O([...t]),D()},Z=function(){var t=[...j];void 0!==e?t.forEach((function(t){t.name===e&&(t.isSelected=!0)})):t[0].isSelected=!0,O([...t]),D()},z=function(t){var e=0,n=[...j],r=t.target.innerHTML.includes("&amp;")?t.target.innerHTML.replace("&amp;","&"):t.target.innerHTML;"All"===(r=r.split("(")[0].trim())&&n.forEach((function(t){t.isSelected&"All"!=t.name&&(t.isSelected=!1)})),n.forEach((function(t){t.name==r&&(t.isSelected=!t.isSelected),t.isSelected&&"All"!=t.name&&e++})),n[0].isSelected=0===e,O([...n]),D()},D=function(){if(j[0].isSelected)w([...u.allMdx.nodes]);else{var t=[];j.forEach((function(e){e.isSelected&&u.allMdx.nodes.forEach((function(n){n.frontmatter.category==e.name&&(t=[...t,n])}))})),w([...t])}};return r.createElement(a.gv,null,r.createElement("section",{className:"heading"},r.createElement("h1",null,10*Math.ceil(u.allMdx.nodes.length/10),"+ Built-In Integrations"),r.createElement("h2",null,"Support for your Cloud Native Infrastructure and Apps")),r.createElement(l.Z,{searchQuery:g,searchData:b,hideFilter:k,setHideFilter:S,classnames:["integration-search"]}),r.createElement("section",{className:"category"},!k&&j.map((function(t){return r.createElement("p",{key:t.id,className:t.isSelected?"items selected":"items",onClick:z},t.name+" ("+t.count+")")}))),g.length>0&&x.length<1?r.createElement(c.Z,{errorMessage:"No matching integrations",errorSubtitle:"Try searching again."}):r.createElement(m,{items:"All"==s?v:v.slice(0,s),renderItem:function(t){var e="InProgress"===t.frontmatter.status,a=t.frontmatter.integrationIcon.publicURL,o=t.frontmatter.darkModeIntegrationIcon;return e?r.createElement(d,{className:"container-inactive",style:{background:"#A0AAAA"}},r.createElement("span",{className:"integration-container"},r.createElement("img",{className:"integration-icon",src:"dark"===n&&null!==o?o.publicURL:a,alt:t.frontmatter.title,height:70,width:70,style:{filter:"brightness(0) invert(1)"}}),r.createElement("div",{className:"integration-content"},r.createElement("div",{className:"title",style:{marginBottom:0}},t.frontmatter.title)))):r.createElement(i.Link,{to:"/cloud-native-management/meshery"+t.fields.slug},r.createElement(d,{className:"container-active"},r.createElement("span",{className:"integration-container"},r.createElement("img",{className:"integration-icon",src:"dark"===n&&null!==o?o.publicURL:a,alt:t.frontmatter.title,height:70,width:70,style:{filter:"dark"===n&&null==o?"brightness(0) invert(1)":"none"}}),r.createElement("div",{className:"integration-content"},r.createElement("div",{className:"title"},t.frontmatter.title)))))}}))}},74583:function(t,e,n){"use strict";n.r(e),n.d(e,{Head:function(){return M},default:function(){return A}});var r=n(67294),i=n(64423),a=n(63275),o=n(59423),l=n(6729),c=n(2445),s=n(63689),m=n(58125),d=n(93723),u=n(1597),p=n(37242),g=i.default.section.withConfig({displayName:"cta-book__CTAWrapper",componentId:"sc-1pq89g-0"})(["\n  .book_cover {\n    display: flex;\n    margin: auto;\n    background: #00b39f;\n    .book_col {\n      max-height: 40rem;\n    }\n    .text {\n      padding: 5rem 5rem 5rem 13rem;\n      @media screen and (max-width: 1200px) {\n        padding: 5rem 5rem 5rem 10rem;\n      }\n      @media screen and (max-width: 950px) {\n        padding: 5rem;\n      }\n      @media screen and (max-width: 750px) {\n        padding: 2rem;\n      }\n      .cover {\n        border: 2px solid white;\n        width: 240px;\n        padding: 10px;\n        text-align: center;\n      }\n      h1,\n      p {\n        color: white;\n      }\n    }\n  }\n  .book_img {\n    text-align: center;\n    align-self: center;\n    .bookLink {\n    }\n    img {\n      max-height: 38rem;\n      vertical-align: middle;\n      @media screen and (max-width: 576px) {\n        max-height: 28rem;\n        margin: 1rem auto;\n      }\n    }\n  }\n\n\n"]),f=function(){return r.createElement(g,null,r.createElement(p.X2,{className:"book_cover"},r.createElement(p.JX,{xs:12,sm:6,className:"book_col text"},r.createElement("p",{className:"cover"},"Services-first Network"),r.createElement("h1",null,"What is a ",r.createElement("br",null)," Service Mesh?"),r.createElement("p",null,"Service meshes provide intent-based networking for microservices describing desired behavior of the network in the face of constantly changing conditions and network topology."),r.createElement(s.default,{primary:!0,className:"learn",title:"Learn More",url:"/learn/service-mesh-books/the-enterprise-path-to-service-mesh-architectures-2nd-edition"})),r.createElement(p.JX,{xs:12,sm:6,className:"book_col book_img"},r.createElement(u.Link,{to:"/learn/service-mesh-books/the-enterprise-path-to-service-mesh-architectures-2nd-edition",className:"bookLink"},r.createElement(d.S,{src:"../../../../assets/images/learn/book-cover.png",alt:"Book Image",layout:"constrained",__imageData:n(50141)})))))},h=n(25679),x=n(48538),b=i.default.section.withConfig({displayName:"howItWork__HowIntegrationWorksWrapper",componentId:"sc-1rrncqv-0"})(["\n\n  background-color: ",";\n\tpadding-bottom: 2rem;\n\n\t.section-data {\n\t\tpadding: 1rem 2rem 0;\n\t\ttext-align: center;\n\t}\n\n\t.section-header {\n\t\tmargin-top: 2rem;\n\t\th4 {\n\t\t\ttextTransform: uppercase;\n\t\t}\n\t\tp {\n\t\t\tfont-size: 1.25rem;\n\t\t\tline-height: 1.25rem;\n\t\t\tmargin: 1rem 0 0;\n\n\t\t\tspan {\n\t\t\t\tcolor: ",";\n\t\t\t}\n\t\t}\n\t}\n\t.integration-section {\n\t\tmargin: 3rem auto;\n\t\tmax-width: 85%;\n\n\t\t.integration-section-row {\n\t\t\tmargin: 4rem 0;\n\t\t\talign-items: center;\n\t\t}\n\t\th2, h4 {\n\t\t\t\tcolor: black;\n\t\t\t}\n\t\t.integration-section-data {\n\t\t\th1, h3, p {\n\t\t\t\ttext-align: start; color: ",";\n\t\t\t}\n\t\t}\n\n\t\t.integration-section-caraousel {\n\t\t\t.slick-slider {\n\t\t\t\t.slick-list {\n\t\t\t\t\tmax-width: 50rem;\n\n\t\t\t\t\t.slick-slide {\n\t\t\t\t\t\timg {\n\t\t\t\t\t\t\tmax-height: 20rem;\n\t\t\t\t\t\t\tmargin: auto;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\t.slick-arrow{\n\t\t\t\t\tdisplay: none !important;\n\t\t\t\t}\n\n\t\t\t\t.slick-dots {\n\t\t\t\t\tbottom: 0;\n\t\t\t\t\ttop: 0;\n\t\t\t\t\tleft: 52rem;\n\t\t\t\t\twidth: 8rem;\n\n\t\t\t\t\tli {\n\t\t\t\t\t\tdisplay: block;\n\t\t\t\t\t\twidth: 100%;\n\t\t\t\t\t\theight: auto;\n\t\t\t\t\t\tmargin: 1rem auto;\n\t\t\t\t\t\topacity: 0.6;\n\n\t\t\t\t\t\ta {\n\t\t\t\t\t\t\tdisplay: block;\n\n\t\t\t\t\t\t\timg {\n\t\t\t\t\t\t\t\theight: 5rem;\n\t\t\t\t\t\t\t\tvertical-align: middle;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t.slick-dots \n\t\t\t\t\tli.slick-active {\n\t\t\t\t\t\topacity: 1;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\t@media screen and (max-width: 1600px) {\n\t\t.integration-section .integration-section-caraousel .slick-slider {\n\t\t\t.slick-list {\n\t\t\t\tmax-width: 38rem;\n\t\t\t}\n\n\t\t\t.slick-dots {\n\t\t\t\tleft: 40rem;\n\t\t\t\twidth: 6rem;\n\n\t\t\t\tli a img {\n\t\t\t\t\theight: 4rem;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\t@media screen and (max-width: 1200px) {\n\t\tpadding-bottom: 2rem;\n\t\t.integration-section {\n\t\t\t.integration-section-row {\n\t\t\t\tmargin: 2.5rem 0;\n\t\t\t}\n\n\t\t\t.integration-section-data {\n\t\t\t\th3, p {\n\t\t\t\t\ttext-align: center;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t.integration-section-caraousel .slick-slider {\n\t\t\t\t.slick-list {\n\t\t\t\t\tmax-width: 80%;\n\t\t\t\t\tmargin: 2rem auto;\n\t\t\t\t}\n\n\t\t\t\t.slick-dots {\n\t\t\t\t\tleft: 92%;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\t@media screen and (max-width: 960px) {\n\t\t.integration-section .integration-section-caraousel .slick-slider .slick-list {\n\t\t\t.slick-slide {\n\t\t\t\timg {\n\t\t\t\t\tmax-height: 16rem;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\t@media screen and (max-width: 700px) {\n\t\t.integration-section {\n\t\t\tmax-width: 95%;\n\n\t\t\t.integration-section-caraousel .slick-slider {\n\t\t\t\t.slick-list {\n\t\t\t\t\tmax-width: 85%;\n\t\t\t\t\tmargin: 2rem 0;\n\t\t\t\t}\n\t\t\t\t.slick-dots {\n\t\t\t\t\tleft: 90%;\n\t\t\t\t\twidth: 4rem;\n\n\t\t\t\t\tli a img {\n\t\t\t\t\t\theight: 2.5rem;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\t@media screen and (max-width: 500px) {\n\t\t.integration-section {\n\t\t\tmax-width: 95%;\n\n\t\t\t.integration-section-caraousel .slick-slider {\n\t\t\t\t.slick-list {\n\t\t\t\t\tmax-width: 80%;\n\t\t\t\t\t.slick-slide {\n\t\t\t\t\t\timg {\n\t\t\t\t\t\t\tmax-height: 10rem;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t.slick-dots {\n\t\t\t\t\tleft: 85%;\n\t\t\t\t\ttop: -1rem;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"],(function(t){return t.theme.DarkTheme?"#101010":"#F7F7F7"}),(function(t){return t.theme.secondaryColor}),(function(t){return t.theme.primaryColor})),y=function(t){var e=t.name,n=t.howitworks,i=t.howitworksdetails,a=t.slides,o={customPaging:function(t){return r.createElement("a",null,r.createElement("img",{src:a[t].publicURL,alt:"Slide "+t}))},infinite:!1,speed:400,slidesToShow:1,slidesToScroll:1,dots:!0,vertical:!0,verticalSwiping:!0};return r.createElement(b,null,r.createElement("div",{className:"section-data"},r.createElement("div",{className:"section-header"},r.createElement("h4",null,"How it Works"),r.createElement("h1",null,"See It in Action "),r.createElement("p",null,"Better together - ",e," with ",r.createElement("span",null,"Meshery"))),r.createElement("div",{className:"integration-section"},r.createElement(p.X2,{className:"integration-section-row"},r.createElement(p.JX,{xs:12,xl:4,className:"integration-section-data"},r.createElement("h3",null,null!=n?n:"Docker with Meshery"),r.createElement("p",null,null!=i?i:"The Docker Extension for Meshery extends Docker Desktop’s position as the cloud native developer’s go-to Kubernetes environment with easy access to the next layer of cloud native infrastructure: service meshes.")),r.createElement(p.JX,{xs:12,xl:8,className:"integration-section-caraousel"},r.createElement(x.Z,o,a.map((function(t,e){return r.createElement("div",{key:e},r.createElement("img",{src:t.publicURL,alt:"Slide "+(e+1)}))}))))))))};var v=i.default.section.withConfig({displayName:"individual-integrationsstyle__IntegrationPageWrapper",componentId:"sc-1stceni-0"})(["\n\n\t.old-gatsby-image-wrapper img{\n\t\theight: 90px;\n\t}\n\t.herosection{\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\talign-items: center;\n\t\tmargin: 0 auto;\n\t\tpadding: 1rem 2rem;\n\t\th2 {\n\t\t\tfont-size: 2.5rem;\n\t\t\ttext-align: center;\n\t\t}\n\t\t.hero-header {\n\t\t\tcolor: #00B39F;\n\t\t}\n\t\timg {\n\t\t\tmargin-bottom: 0.5rem;\n\t\t}\n\t\tp {\n\t\t\ttext-align: center;\n\t\t}\n\t}\n\n\t.overview{\n\t\tdisplay: flex;\n\t\tmargin: 2rem;\n\t\tgap: 5rem;\n\t\tjustify-content: center;\n\t\tflex-basis: 70%;\n\t\t@media (max-width: 700px) {\n\t\t\tflex-direction: column-reverse;\n\t\t};\n\t}\n\n\t.feature{\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tflex-basis: 30%;\n\t\th3 {\n\t\t\tpadding-bottom: 1rem;\n\t\t}\n\t\tul {\n\t\t\tmargin: 0;\n\t\t\tpadding: 0;\n\t\t\tli {\n\t\t\t\tlist-style-type: none;\n        margin: 2rem 0;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n        :before {\n\t\t\t\t\tcontent: url(",");\n\t\t\t\t\tmargin-right: 1rem;\n\t\t\t\t\theight: 2rem;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\t.content{\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tgap: 0.5rem;\n\n\t\tp {\n\t\t\tline-height: 2rem;\n\t\t\ttext-align: justify;\n\t\t}\n\n\t\t.external-btns {\n\t\t\tdisplay: flex;\n\t\t\tgap: 2rem;\n\t\t\tflex-wrap: wrap;\n\n\t\t\t.get-started {\n\t\t\t}\n\n\t\t\t.doc-link {\n\t\t\t\tdisplay: flex;\n\t\t\t\tgap: 0.5rem;\n\t\t\t\talign-items: center;\n\t\t\t\ta {\n\t\t\t\t\tcolor: ",";\n\t\t\t\t\ttransition: padding 0.5s ease;\t\n                                }\n\t\t\t\ta:hover{\n\t\t\t\t\tpadding-right: 5px;\n\t\t\t\t}\n\t\t\t\tsvg {\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\tmargin: auto;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t@media (min-width: 700px) {\n\t\t\twidth: 35rem;\n\t\t};\n\t}\n\n\t.integration-collection{\n\t\tmargin: 2rem auto;\n\t\tmax-width: 1200px;\n\t\t\n\t\th2{\n\t\t\ttext-align: center;\n\t\t}\n\t}\n"],"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzMiIHZpZXdCb3g9IjAgMCAzMiAzMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeT0iMC41IiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHJ4PSI1IiBmaWxsPSIjQzlGQ0Y2Ii8+CjxwYXRoIGQ9Ik0yMS4xMTk5IDEyLjY1OTdMMTQuMDc5OSAxOS42OTk3TDEwLjg3OTkgMTYuNDk5NyIgc3Ryb2tlPSIjMDBCMzlGIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K",(function(t){return t.theme.text})),w=n(21554),E=function(t){var e=t.theme,n=t.data.mdx,i=n.frontmatter,a=n.body;return r.createElement(v,null,r.createElement("section",{className:"herosection"},r.createElement(h.Z,Object.assign({},i.integrationIcon,{alt:i.title})),r.createElement("h2",null,i.title," with "," ",r.createElement("span",{className:"hero-header"},"Meshery")),r.createElement("p",null,i.subtitle)),r.createElement("section",{className:"overview"},r.createElement("div",{className:"feature"},r.createElement("h2",null,"Features"),r.createElement("ul",null,i.featureList.map((function(t,e){return r.createElement("li",{key:e},t)})))),r.createElement("div",{className:"content"},r.createElement("h2",null,"Overview"),r.createElement(m.MDXRenderer,null,a),r.createElement("section",{className:"external-btns"},r.createElement(s.default,{primary:!0,className:"get-started",title:"Get Started",url:"../../getting-started"}),null!=i.docURL&&r.createElement("span",{className:"doc-link"},r.createElement("a",{href:i.docURL},"See Documentation"),r.createElement(c.Z,null))))),r.createElement(y,{name:i.title,howitworks:i.howItWorks,howitworksdetails:i.howItWorksDetails,slides:i.workingSlides}),r.createElement("section",{className:"integration-collection"},r.createElement("h2",null,"Related Integrations"),r.createElement(w.default,{theme:e,category:i.category})),r.createElement(f,null))},k=n(50742),S=n(35085),I=n(38001),A=function(t){var e=t.data,n=(0,r.useState)(),o=n[0],c=n[1];return r.createElement(i.ThemeProvider,{theme:"dark"===o?I.k:I.Z},r.createElement(a.Z,null,r.createElement(S.Z,null),r.createElement(l.Z,{theme:o,themeSetter:function(t){c(t)}}),r.createElement(E,{theme:o,data:e}),r.createElement(k.default,null)))},M=function(t){var e=t.data;return r.createElement(o.Z,{title:e.mdx.frontmatter.title,image:e.mdx.frontmatter.integrationIcon.publicURL})}},63405:function(t,e,n){var r=n(73897);t.exports=function(t){if(Array.isArray(t))return r(t)},t.exports.__esModule=!0,t.exports.default=t.exports},3515:function(t,e,n){var r=n(6015),i=n(69617);function a(e,n,o){return i()?(t.exports=a=Reflect.construct.bind(),t.exports.__esModule=!0,t.exports.default=t.exports):(t.exports=a=function(t,e,n){var i=[null];i.push.apply(i,e);var a=new(Function.bind.apply(t,i));return n&&r(a,n.prototype),a},t.exports.__esModule=!0,t.exports.default=t.exports),a.apply(null,arguments)}t.exports=a,t.exports.__esModule=!0,t.exports.default=t.exports},38416:function(t,e,n){var r=n(64062);t.exports=function(t,e,n){return(e=r(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},t.exports.__esModule=!0,t.exports.default=t.exports},69617:function(t){t.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}},t.exports.__esModule=!0,t.exports.default=t.exports},79498:function(t){t.exports=function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)},t.exports.__esModule=!0,t.exports.default=t.exports},42281:function(t){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.__esModule=!0,t.exports.default=t.exports},7071:function(t){t.exports=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i},t.exports.__esModule=!0,t.exports.default=t.exports},861:function(t,e,n){var r=n(63405),i=n(79498),a=n(86116),o=n(42281);t.exports=function(t){return r(t)||i(t)||a(t)||o()},t.exports.__esModule=!0,t.exports.default=t.exports},95036:function(t,e,n){var r=n(18698).default;t.exports=function(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,e||"default");if("object"!==r(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)},t.exports.__esModule=!0,t.exports.default=t.exports},64062:function(t,e,n){var r=n(18698).default,i=n(95036);t.exports=function(t){var e=i(t,"string");return"symbol"===r(e)?e:String(e)},t.exports.__esModule=!0,t.exports.default=t.exports},18698:function(t){function e(n){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(n)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},50141:function(t){"use strict";t.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,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"},"images":{"fallback":{"src":"/static/9a2c56c6c1b2a81bd7db678626f15607/b207f/book-cover.png","srcSet":"/static/9a2c56c6c1b2a81bd7db678626f15607/d5c95/book-cover.png 224w,\\n/static/9a2c56c6c1b2a81bd7db678626f15607/514df/book-cover.png 449w,\\n/static/9a2c56c6c1b2a81bd7db678626f15607/b207f/book-cover.png 897w","sizes":"(min-width: 897px) 897px, 100vw"},"sources":[{"srcSet":"/static/9a2c56c6c1b2a81bd7db678626f15607/c4a45/book-cover.webp 224w,\\n/static/9a2c56c6c1b2a81bd7db678626f15607/9a58b/book-cover.webp 449w,\\n/static/9a2c56c6c1b2a81bd7db678626f15607/bda54/book-cover.webp 897w","type":"image/webp","sizes":"(min-width: 897px) 897px, 100vw"}]},"width":897,"height":1273}')}}]);
//# sourceMappingURL=component---src-templates-integrations-js-4d06a76e27a75e5ff2ec.js.map