(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{104:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(2),o=r(6),i=(r(0),r(145)),a={id:"howDODOWorks",title:"How DODO Works",sidebar_label:"How DODO Works"},c={id:"howDODOWorks",isDocsHomePage:!1,title:"How DODO Works",description:"\u57fa\u672c\u539f\u7406",source:"@site/docs/howDODOWorks.md",permalink:"/docs/docs/howDODOWorks",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/howDODOWorks.md",sidebar_label:"How DODO Works",sidebar:"someSidebar",previous:{title:"Introduction of DODO",permalink:"/docs/docs/briefIntro"},next:{title:"Core Concept",permalink:"/docs/docs/coreConcept"}},s=[{value:"\u57fa\u672c\u539f\u7406",id:"\u57fa\u672c\u539f\u7406",children:[]},{value:"\u6781\u9ad8\u7684\u8d44\u91d1\u5229\u7528\u7387",id:"\u6781\u9ad8\u7684\u8d44\u91d1\u5229\u7528\u7387",children:[]},{value:"\u5355\u98ce\u9669\u66b4\u9732\uff08Single Risk Exposure\uff09",id:"\u5355\u98ce\u9669\u66b4\u9732\uff08single-risk-exposure\uff09",children:[]},{value:"\u907f\u514d\u65e0\u5e38\u635f\u5931\uff08No impermanent loss)",id:"\u907f\u514d\u65e0\u5e38\u635f\u5931\uff08no-impermanent-loss",children:[]}],l={rightToc:s};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"\u57fa\u672c\u539f\u7406"},"\u57fa\u672c\u539f\u7406"),Object(i.b)("p",null,"DODO \u7684\u5e95\u5c42\u673a\u5236\u662f\u4e00\u5957\u88ab\u79f0\u4e3a PMM \u7684\u7b97\u6cd5\u3002PMM \u7b97\u6cd5\u63a5\u53d7 Oracle \u63d0\u4f9b\u7684\u5e02\u573a\u4ef7\u683c\u4f5c\u4e3a\u8f93\u5165\uff0c\u4e13\u6ce8\u5728\u5e02\u573a\u4ef7\u683c\u9644\u8fd1\u63d0\u4f9b\u5145\u8db3\u7684\u6d41\u52a8\u6027\uff0c\u800c\u5728\u8fdc\u79bb\u5e02\u573a\u4ef7\u683c\u65f6\u6d41\u52a8\u6027\u5feb\u901f\u8870\u51cf\u3002"),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"https://dodoex.github.io/docs/img/dodo_curve.jpeg",alt:null})),"\n",Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"https://dodoex.github.io/docs/img/dodo_curve_move.jpeg",alt:null}))),Object(i.b)("p",null,"\u4e0a\u56fe\u5bf9\u6bd4\u4e86 DODO \u548c Uniswap \u7684\u4ef7\u683c\u66f2\u7ebf\uff0c\u53ef\u4ee5\u53d1\u73b0\u5728\u5e02\u573a\u4ef7\u9644\u8fd1\uff08\u4e5f\u5c31\u662f\u6240\u8c13\u7684\u76d8\u53e3\uff09\u53ef\u4ee5\u63d0\u4f9b\u6bd4 AMM \u597d\u5f97\u591a\u7684\u4ef7\u683c\u3002\u800c\u5f53\u5e02\u573a\u4ef7\u79fb\u52a8\u65f6\uff0c\u4e0d\u540c\u4e0e AMM \u4f9d\u8d56\u5957\u5229\u8005\u4ea4\u6613\u6539\u53d8\u4ef7\u683c\uff0cPMM \u4e3b\u52a8\u79fb\u52a8\u4ef7\u683c\u66f2\u7ebf\u3002\u4f7f\u5f97\u4ef7\u683c\u66f2\u7ebf\u5728\u65b0\u5e02\u573a\u4ef7\u9644\u8fd1\u4ecd\u7136\u4fdd\u6301\u5e73\u6ed1"),Object(i.b)("h2",{id:"\u6781\u9ad8\u7684\u8d44\u91d1\u5229\u7528\u7387"},"\u6781\u9ad8\u7684\u8d44\u91d1\u5229\u7528\u7387"),Object(i.b)("p",null,"\u6b63\u5982\u4e0a\u6587\u6240\u8ff0\uff0cPMM provides liquidity in the price range of zero to infinity just as CFMM. But, near the oracle price, the price curve is very smooth. And far away from oracle price, the curve is very sharp. \u6362\u4e00\u79cd\u7406\u89e3\u65b9\u6cd5\u5c31\u662f\uff0c\u7edd\u5927\u90e8\u5206\u8d44\u91d1\u88ab\u805a\u96c6\u5230\u5e02\u573a\u4ef7\u9644\u8fd1\u3002\u5728\u5e02\u573a\u4ef7\u9644\u8fd1\u4ea4\u6613\u6d3b\u8dc3\uff0c\u8fd9\u4e9b\u8d44\u91d1\u88ab\u53cd\u590d\u6362\u624b\uff0c\u5229\u7528\u7387\u81ea\u7136\u76f8\u5f53\u9ad8\u4e86\u3002"),Object(i.b)("h2",{id:"\u5355\u98ce\u9669\u66b4\u9732\uff08single-risk-exposure\uff09"},"\u5355\u98ce\u9669\u66b4\u9732\uff08Single Risk Exposure\uff09"),Object(i.b)("p",null,"The PMM price curve consists of two parts, bid and ask. The ask side liquidity is only determined by the amount of base token in the pool. And the bid side liquidity is only determined by the amount of quote token in the pool."),Object(i.b)("p",null,"It allows the base and quote pools to have different sizes, and therefore allows liquidity providers deposit any amount of quote or base token."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"The design is very natural. Because when you take ask order, you take up liquidity providers\u2019 base token and have nothing to do with the quote token."))),Object(i.b)("h2",{id:"\u907f\u514d\u65e0\u5e38\u635f\u5931\uff08no-impermanent-loss"},"\u907f\u514d\u65e0\u5e38\u635f\u5931\uff08No impermanent loss)"),Object(i.b)("p",null,"The question is the same as, how to guarantee liquidity providers withdraw what they deposit. The key is arbitrageurs. When users buy token, PMM slightly increases the price to attract arbitrageurs to sell token. To make sure the balance in the pool is always equal to the amount of liquidity providers staked."))}u.isMDXComponent=!0},145:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(r),b=n,m=d["".concat(a,".").concat(b)]||d[b]||p[b]||i;return r?o.a.createElement(m,c(c({ref:t},l),{},{components:r})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);