(self.webpackChunkLayer5=self.webpackChunkLayer5||[]).push([[2870],{4489:function(e,t,n){var r=n(15301).w_;e.exports.P=function(e){return r({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M216.4 163.7c5.1 5 5.1 13.3.1 18.4L155.8 243h231.3c7.1 0 12.9 5.8 12.9 13s-5.8 13-12.9 13H155.8l60.8 60.9c5 5.1 4.9 13.3-.1 18.4-5.1 5-13.2 5-18.3-.1l-82.4-83c-1.1-1.2-2-2.5-2.7-4.1-.7-1.6-1-3.3-1-5 0-3.4 1.3-6.6 3.7-9.1l82.4-83c4.9-5.2 13.1-5.3 18.2-.3z"}}]})(e)}},98940:function(e,t,n){const r=n(25517);e.exports={MDXRenderer:r}},25517:function(e,t,n){var r=n(861),o=n(3515),l=n(38416),a=n(70215);const i=["scope","children"];function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const m=n(67294),{mdx:u}=n(64983),{useMDXScope:d}=n(18167);e.exports=function(e){let{scope:t,children:n}=e,l=a(e,i);const s=d(t),p=m.useMemo((()=>{if(!n)return null;const e=c({React:m,mdx:u},s),t=Object.keys(e),l=t.map((t=>e[t]));return o(Function,["_fn"].concat(t,[""+n])).apply(void 0,[{}].concat(r(l)))}),[n,t]);return m.createElement(p,c({},l))}},11796:function(e,t,n){"use strict";n.r(t),n.d(t,{Head:function(){return M},default:function(){return j}});var r=n(67294),o=n(17875),l=n(85313);const a=l.default.div.withConfig({displayName:"meetupsstyle__MeetupStyle",componentId:"sc-awf4tk-0"})(["\n\n    margin-bottom: 4rem;\n    Button:hover {\n        box-shadow: none;\n    }\n    .event-subhead{\n        text-align: center;\n        margin: 1rem auto 2rem;\n    }\n\n    .filterBtns{\n        display: flex;\n        margin-bottom: 1.25rem;\n        border-bottom: 1px solid #BEC2C5;\n        margin-top: 5rem;\n\n\n        button{\n            font-size: 1.25rem;\n            color: ",";\n            min-width: auto;\n            border: none;\n            border-bottom: 2px solid transparent;\n            border-radius: 0;\n            cursor: pointer;\n            padding: 0.5rem 2rem;\n            background: ",";;\n            transition: all 0.2s ease-in;\n        }\n        .active{\n            color: ",";\n            border-bottom: 2px solid ",";\n        }\n    }\n\n    .prevAndNextBtns{\n        display: block;\n        width: 100%;\n        height: auto;\n        margin: 40px auto;\n    }\n\n    @media (max-width: 560px){\n        .filterBtns{\n            overflow: hidden;\n            button{\n                padding: 0.5rem 1.5rem;\n                font-size: 18px;\n            }\n        }\n    }\n\n    @media (max-width: 420px){\n        .filterBtns{\n            button{\n                margin-right: 0px;\n                font-size: 18px;\n                padding: 10px;\n            }\n        }\n    }\n\n    .post-title{\n        text-align: center;\n    }\n"],(e=>e.theme.secondaryColor),(e=>e.theme.body),(e=>e.theme.text),(e=>e.theme.text));var i=n(89725),s=n(37242),c=n(71082),m=n(80285),u=n(4489);const d=l.default.div.withConfig({displayName:"pager__PagerWrapper",componentId:"sc-ybqqfv-0"})(["\n    display: flex; \n    justify-content: space-between;\n    \n    .old-post{\n        justify-self: flex-end;\n    }\n    h4{\n        display: flex;\n        align-items: center;\n        svg{\n            margin-left: 0;\n            font-size: 2rem;\n            transition: all 0.2s linear;\n        } \n        &:hover{\n            color: ",";\n            svg{\n            margin-left: 3px;\n            transform: scale(1.2);\n        }\n    }\n"],(e=>e.theme.secondaryColor));var p=e=>{let{pageContext:t,text:n,isListView:o}=e;const{previousPagePath:l,nextPagePath:a}=t;return r.createElement(d,null,r.createElement("div",null,l&&r.createElement(c.Link,{to:l,state:{isListView:o}},r.createElement("h4",null,r.createElement(u.P,null),"Newer ",n))),r.createElement("div",{className:"old-post"},a&&r.createElement(c.Link,{to:a,state:{isListView:o}},r.createElement("h4",null,"Older ",n,r.createElement(m.f,null)))))},f=n(25679),g=n(98940);var x=l.default.div.withConfig({displayName:"EventCardstyle__UpcomingEventsWrapper",componentId:"sc-1839x5e-0"})(["\n\t.blog-slider {\n\t\twidth: 100%;\n\t\tposition: relative;\n\t\tmax-width: 50rem;\n\t\tmargin: auto;\n\t\tbackground: ",";\n\t\tbox-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);\n\t\tpadding: 1rem;\n\t\tborder-radius: 0.5rem;\n\t\theight: 39.5rem;\n\t\ttransition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);\n\t}\n\t.blog-slider_img{\n\t\tmax-height: 25rem; \n\t\tobject-fit: cover;\n\t\t.gatsby-image-wrapper {\n\t\t\timg {\n\t\t\t\t max-height: 25rem;\n\t\t\t }\n\t   }\n\t}\n\t.blog-slider_content{\n\t\ttext-align: center;\n\t\toverflow: hidden;\n\t\tpadding-bottom: 4rem;\n\t}\n\n\t.blog-slider_item {\n\t\toverflow-x: hidden;\n\t\toverflow-y: auto;\n\n\t}\n\t.blog-slider_item.swiper-slide::-webkit-scrollbar {\n\t\twidth: 0;\n\t}\n\n\t.blog-slider_title {\n\t\ttext-align: center;\n\t\tmargin: 1rem auto 0.2rem;\n\t}\n\n\t.blog-slider_date {\n\t\tdisplay: flex;\n\t\tcolor: ",";\n\t\tjustify-content: flex-end;\n\t\tmargin: 0;\n\t\ttransition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);\n\t}\n\n\t.blog-slider_text {\n\t\th2 {\n\t\t\ttext-align: start;\n\t\t\tfont-size: 1.25rem;\n\t\t}\n\n\t\tul > li {\n\t\t\ttext-align: start;\n\t\t\tlist-style: disc;\n\t\t}\n\t}\n\n\t.blog-slider_description {\n\t\tpadding-left: 0.625rem;\n\t\tfont-size: 1.25rem;\n\t}\n\n\t.swiper-pagination-bullet {\n\t\tbackground: ",";\n\t\ttransition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);\n\t}\n\n\t.swiper-pagination {\n\t\tbackground: ",";\n\t\tpadding-top: 0.8rem;\n    margin-top: 1rem;\n    margin-bottom: -1.2rem;\n    padding-bottom: 0.8rem;\n\t\ttransition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);\n\t}\n\n\t@media (max-width: 720px) {\n\t\t.blog-slider_button {\n\t\t\tmargin-bottom: 2rem;\n\t\t}\n\n\t\t.blog-slider {\n\t\t\theight: 38rem;\n\t\t}\n\t}\n\n\t@media (max-width: 420px) {\n\t\t.blog-slider_title {\n\t\t\tfont-size: 1.75rem;\n\t\t}\n\n\t\t.blog-slider_text > h2 {\n\t\t\tfont-size: 1.15rem;\n\t\t}\n\n\t\t.blog-slider {\n\t\t\theight: 35rem;\n\t\t}\n\t}\n"],(e=>e.theme.grey212121ToWhite),(e=>e.theme.whiteSevenToBlackSeven),(e=>e.theme.secondaryColor),(e=>e.theme.grey212121ToWhite)),b=n(67496),v=n(98089),h=n(63689),y=n(51174),E=n.n(y);var w=e=>{let{data:t}=e;return r.createElement(x,null,r.createElement("div",{className:"blog-slider"},r.createElement("div",{className:"blog-slider__wrp swiper-wrapper"},r.createElement(b.tq,{spaceBetween:100,slidesPerView:1,modules:[v.Gk,v.tl],pagination:{clickable:!0}},t.nodes.map((e=>r.createElement(b.o5,{key:e.id},r.createElement("div",{className:"blog-slider_item swiper-slide"},r.createElement("div",{className:"blog-slider_img"},r.createElement(c.Link,{to:"/community/events/"+E()(e.frontmatter.title)},r.createElement(f.Z,Object.assign({},e.frontmatter.thumbnail,{alt:e.frontmatter.title})))),r.createElement("div",{className:"blog-slider_content"},r.createElement("h3",{className:"blog-slider_title"},e.frontmatter.title),r.createElement("p",{className:"blog-slider_date"},e.frontmatter.date),r.createElement("p",{className:"blog-slider_description"},e.frontmatter.abstract),r.createElement("div",{className:"blog-slider_text"},r.createElement(g.MDXRenderer,null,e.body)),r.createElement(h.default,{secondary:!0,className:"blog-slider_button",url:e.frontmatter.eurl,title:"Join Now",external:!0}))))))))))},_=n(33754),k=n(91744);var O=e=>{let{data:t,pageContext:n}=e;const{0:o,1:l}=(0,r.useState)("all");return r.createElement(a,null,r.createElement(_.Z,{title:"Events",path:"Community/Events",img:k.Z,feedlink:"/events/feed.xml"}),r.createElement("h2",{className:"event-subhead"},"Join Layer5 at these events"),r.createElement(w,{data:t.allUpcoming}),r.createElement(s.W2,null,r.createElement("div",{className:"filterBtns"},r.createElement(h.default,{className:"all"==o?"active":"",onClick:()=>l("all"),title:"All"}),r.createElement(h.default,{className:"events"==o?"active":"",onClick:()=>l("events"),title:"Events"}),r.createElement(h.default,{className:"workshops"==o?"active":"",onClick:()=>l("workshops"),title:"Workshops"}),r.createElement(h.default,{className:"meetups"==o?"active":"",onClick:()=>l("meetups"),title:"MeetUps"})),r.createElement("div",null,r.createElement(s.X2,null,"all"==o?t.allCategories.nodes.map((e=>r.createElement(s.JX,{xs:12,sm:6,lg:4,key:e.id},r.createElement(i.Z,{frontmatter:e.frontmatter,fields:e.fields})))):r.createElement(r.Fragment,null),"events"==o?t.allEvents.nodes.map((e=>r.createElement(s.JX,{xs:12,sm:6,lg:4,key:e.id},r.createElement(i.Z,{frontmatter:e.frontmatter,fields:e.fields})))):r.createElement(r.Fragment,null),"workshops"==o?t.allWorkshops.nodes.map((e=>r.createElement(s.JX,{xs:12,sm:6,lg:4,key:e.id},r.createElement(i.Z,{frontmatter:e.frontmatter,fields:e.fields})))):r.createElement(r.Fragment,null),"meetups"==o?t.allMeetups.nodes.map((e=>r.createElement(s.JX,{xs:12,sm:6,lg:4,key:e.id},r.createElement(i.Z,{frontmatter:e.frontmatter,fields:e.fields})))):r.createElement(r.Fragment,null))),"all"==o?r.createElement(p,{pageContext:n,text:"Events"}):r.createElement(r.Fragment,null)))};var j=e=>{let{data:t,pageContext:n}=e;return r.createElement(r.Fragment,null,r.createElement(O,{data:t,pageContext:n}))};const M=()=>r.createElement(o.Z,{title:"Events",description:"Join Layer5 at upcoming events."})},73897:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r},e.exports.__esModule=!0,e.exports.default=e.exports},63405:function(e,t,n){var r=n(73897);e.exports=function(e){if(Array.isArray(e))return r(e)},e.exports.__esModule=!0,e.exports.default=e.exports},3515:function(e,t,n){var r=n(6015),o=n(69617);function l(t,n,a){return o()?(e.exports=l=Reflect.construct.bind(),e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=l=function(e,t,n){var o=[null];o.push.apply(o,t);var l=new(Function.bind.apply(e,o));return n&&r(l,n.prototype),l},e.exports.__esModule=!0,e.exports.default=e.exports),l.apply(null,arguments)}e.exports=l,e.exports.__esModule=!0,e.exports.default=e.exports},38416:function(e,t,n){var r=n(64062);e.exports=function(e,t,n){return(t=r(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.__esModule=!0,e.exports.default=e.exports},69617:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.__esModule=!0,e.exports.default=e.exports},79498:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},42281:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},70215:function(e,t,n){var r=n(7071);e.exports=function(e,t){if(null==e)return{};var n,o,l=r(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l},e.exports.__esModule=!0,e.exports.default=e.exports},7071:function(e){e.exports=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o},e.exports.__esModule=!0,e.exports.default=e.exports},861:function(e,t,n){var r=n(63405),o=n(79498),l=n(86116),a=n(42281);e.exports=function(e){return r(e)||o(e)||l(e)||a()},e.exports.__esModule=!0,e.exports.default=e.exports},95036:function(e,t,n){var r=n(18698).default;e.exports=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)},e.exports.__esModule=!0,e.exports.default=e.exports},64062:function(e,t,n){var r=n(18698).default,o=n(95036);e.exports=function(e){var t=o(e,"string");return"symbol"===r(t)?t:String(t)},e.exports.__esModule=!0,e.exports.default=e.exports},86116:function(e,t,n){var r=n(73897);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=component---src-templates-events-js-3e1f922908277cb366e2.js.map