(self.webpackChunknpdk=self.webpackChunknpdk||[]).push([[711],{11349:function(e){e.exports={defaultTitle:"NpDk",logo:"src/images/logo.svg",author:"NpDk",url:"http://localhost:8000/",legalName:"Nopem Adika",name:"Nopem Adika",defaultDescription:"I’m NpDk!",email:"khenop16@gmail.com",socialLinks:{github:"https://github.com/npdkdev",instagram:"https://instagram.com/nppdkk",youtube:"https://www.youtube.com/c/khenop"},themeColor:"#ED8D8D",backgroundColor:"#ED8D8D",social:{instagram:"@nppdkk"},address:{city:"City",region:"Region",country:"Country",zipCode:"ZipCode"},contact:{email:"email",phone:"phone number"},foundingDate:"2020"}},38032:function(e,t,a){"use strict";a.d(t,{G:function(){return O},L:function(){return h},M:function(){return I},P:function(){return k},S:function(){return B},_:function(){return s},a:function(){return o},b:function(){return m},c:function(){return c},g:function(){return d},h:function(){return i}});var n=a(67294),r=(a(92369),a(45697)),l=a.n(r);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o.apply(this,arguments)}function s(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t.indexOf(a=l[n])>=0||(r[a]=e[a]);return r}const i=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;const c=e=>{var t;return(e=>{var t,a;return Boolean(null==e||null==(t=e.images)||null==(a=t.fallback)?void 0:a.src)})(e)?e:(e=>Boolean(null==e?void 0:e.gatsbyImageData))(e)?e.gatsbyImageData:(e=>Boolean(null==e?void 0:e.gatsbyImage))(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData};function u(e,t,a){const n={};let r="gatsby-image-wrapper";return"fixed"===a?(n.width=e,n.height=t):"constrained"===a&&(r="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:r,"data-gatsby-image-wrapper":"",style:n}}function m(e,t,a,n,r){return void 0===r&&(r={}),o({},a,{loading:n,shouldLoad:e,"data-main-image":"",style:o({},r,{opacity:t?1:0})})}function d(e,t,a,n,r,l,s,i){const c={};l&&(c.backgroundColor=l,"fixed"===a?(c.width=n,c.height=r,c.backgroundColor=l,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),s&&(c.objectFit=s),i&&(c.objectPosition=i);const u=o({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:o({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}const g=["children"],p=function(e){let{layout:t,width:a,height:r}=e;return"fullWidth"===t?n.createElement("div",{"aria-hidden":!0,style:{paddingTop:r/a*100+"%"}}):"constrained"===t?n.createElement("div",{style:{maxWidth:a,display:"block"}},n.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+r+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},h=function(e){let{children:t}=e,a=s(e,g);return n.createElement(n.Fragment,null,n.createElement(p,o({},a)),t,null)},f=["src","srcSet","loading","alt","shouldLoad"],y=["fallback","sources","shouldLoad"],b=function(e){let{src:t,srcSet:a,loading:r,alt:l="",shouldLoad:i}=e,c=s(e,f);return n.createElement("img",o({},c,{decoding:"async",loading:r,src:i?t:void 0,"data-src":i?void 0:t,srcSet:i?a:void 0,"data-srcset":i?void 0:a,alt:l}))},E=function(e){let{fallback:t,sources:a=[],shouldLoad:r=!0}=e,l=s(e,y);const i=l.sizes||(null==t?void 0:t.sizes),c=n.createElement(b,o({},l,t,{sizes:i,shouldLoad:r}));return a.length?n.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:l}=e;return n.createElement("source",{key:t+"-"+l+"-"+a,type:l,media:t,srcSet:r?a:void 0,"data-srcset":r?void 0:a,sizes:i})})),c):c};var v;b.propTypes={src:r.string.isRequired,alt:r.string.isRequired,sizes:r.string,srcSet:r.string,shouldLoad:r.bool},E.displayName="Picture",E.propTypes={alt:r.string.isRequired,shouldLoad:r.bool,fallback:r.exact({src:r.string.isRequired,srcSet:r.string,sizes:r.string}),sources:r.arrayOf(r.oneOfType([r.exact({media:r.string.isRequired,type:r.string,sizes:r.string,srcSet:r.string.isRequired}),r.exact({media:r.string,type:r.string.isRequired,sizes:r.string,srcSet:r.string.isRequired})]))};const w=["fallback"],k=function(e){let{fallback:t}=e,a=s(e,w);return t?n.createElement(E,o({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):n.createElement("div",o({},a))};k.displayName="Placeholder",k.propTypes={fallback:r.string,sources:null==(v=E.propTypes)?void 0:v.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const I=function(e){return n.createElement(n.Fragment,null,n.createElement(E,o({},e)),n.createElement("noscript",null,n.createElement(E,o({},e,{shouldLoad:!0}))))};I.displayName="MainImage",I.propTypes=E.propTypes;const L=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],N=["style","className"],S=e=>e.replace(/\n/g,""),C=function(e,t,a){for(var n=arguments.length,r=new Array(n>3?n-3:0),o=3;o<n;o++)r[o-3]=arguments[o];return e.alt||""===e.alt?l().string.apply(l(),[e,t,a].concat(r)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},x={image:l().object.isRequired,alt:C},T=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],D=["style","className"],P=new Set;let R,j;const A=function(e){let{as:t="div",image:r,style:l,backgroundColor:c,className:m,class:d,onStartLoad:g,onLoad:p,onError:h}=e,f=s(e,T);const{width:y,height:b,layout:E}=r,v=u(y,b,E),{style:w,className:k}=v,I=s(v,D),L=(0,n.useRef)(),N=(0,n.useMemo)((()=>JSON.stringify(r.images)),[r.images]);d&&(m=d);const S=function(e,t,a){let n="";return"fullWidth"===e&&(n='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(n='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+a+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),n}(E,y,b);return(0,n.useEffect)((()=>{R||(R=a.e(731).then(a.bind(a,96731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return j=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=L.current.querySelector("[data-gatsby-image-ssr]");if(e&&i())return e.complete?(null==g||g({wasCached:!0}),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==g||g({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void P.add(N);if(j&&P.has(N))return;let t,n;return R.then((e=>{let{renderImageToString:a,swapPlaceholderImage:s}=e;L.current&&(L.current.innerHTML=a(o({isLoading:!0,isLoaded:P.has(N),image:r},f)),P.has(N)||(t=requestAnimationFrame((()=>{L.current&&(n=s(L.current,N,P,l,g,p,h))}))))})),()=>{t&&cancelAnimationFrame(t),n&&n()}}),[r]),(0,n.useLayoutEffect)((()=>{P.has(N)&&j&&(L.current.innerHTML=j(o({isLoading:P.has(N),isLoaded:P.has(N),image:r},f)),null==g||g({wasCached:!0}),null==p||p({wasCached:!0}))}),[r]),(0,n.createElement)(t,o({},I,{style:o({},w,l,{backgroundColor:c}),className:k+(m?" "+m:""),ref:L,dangerouslySetInnerHTML:{__html:S},suppressHydrationWarning:!0}))},O=(0,n.memo)((function(e){return e.image?(0,n.createElement)(A,e):null}));O.propTypes=x,O.displayName="GatsbyImage";const _=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function q(e){return function(t){let{src:a,__imageData:r,__error:l}=t,i=s(t,_);return l&&console.warn(l),r?n.createElement(e,o({image:r},i)):(console.warn("Image not loaded",a),null)}}const W=q((function(e){let{as:t="div",className:a,class:r,style:l,image:i,loading:c="lazy",imgClassName:g,imgStyle:p,backgroundColor:f,objectFit:y,objectPosition:b}=e,E=s(e,L);if(!i)return console.warn("[gatsby-plugin-image] Missing image prop"),null;r&&(a=r),p=o({objectFit:y,objectPosition:b,backgroundColor:f},p);const{width:v,height:w,layout:C,images:x,placeholder:T,backgroundColor:D}=i,P=u(v,w,C),{style:R,className:j}=P,A=s(P,N),O={fallback:void 0,sources:[]};return x.fallback&&(O.fallback=o({},x.fallback,{srcSet:x.fallback.srcSet?S(x.fallback.srcSet):void 0})),x.sources&&(O.sources=x.sources.map((e=>o({},e,{srcSet:S(e.srcSet)})))),n.createElement(t,o({},A,{style:o({},R,l,{backgroundColor:f}),className:j+(a?" "+a:"")}),n.createElement(h,{layout:C,width:v,height:w},n.createElement(k,o({},d(T,!1,C,v,w,D,y,b))),n.createElement(I,o({"data-gatsby-image-ssr":"",className:g},E,m("eager"===c,!1,O,c,p)))))})),z=function(e,t){for(var a=arguments.length,n=new Array(a>2?a-2:0),r=2;r<a;r++)n[r-2]=arguments[r];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?l().number.apply(l(),[e,t].concat(n)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},F=new Set(["fixed","fullWidth","constrained"]),M={src:l().string.isRequired,alt:C,width:z,height:z,sizes:l().string,layout:e=>{if(void 0!==e.layout&&!F.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};W.displayName="StaticImage",W.propTypes=M;const B=q(O);B.displayName="StaticImage",B.propTypes=M},92369:function(e){"use strict";const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,n=/^[\p{Lu}](?![\p{Lu}])/gu,r=/([\p{Alpha}\p{N}_]|$)/u,l=/[_.\- ]+/,o=new RegExp("^"+l.source),s=new RegExp(l.source+r.source,"gu"),i=new RegExp("\\d+"+r.source,"gu"),c=(e,r)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(r={pascalCase:!1,preserveConsecutiveUppercase:!1,...r},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const l=!1===r.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(r.locale),c=!1===r.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(r.locale);if(1===e.length)return r.pascalCase?c(e):l(e);return e!==l(e)&&(e=((e,n,r)=>{let l=!1,o=!1,s=!1;for(let i=0;i<e.length;i++){const c=e[i];l&&t.test(c)?(e=e.slice(0,i)+"-"+e.slice(i),l=!1,s=o,o=!0,i++):o&&s&&a.test(c)?(e=e.slice(0,i-1)+"-"+e.slice(i-1),s=o,o=!1,l=!0):(l=n(c)===c&&r(c)!==c,s=o,o=r(c)===c&&n(c)!==c)}return e})(e,l,c)),e=e.replace(o,""),e=r.preserveConsecutiveUppercase?((e,t)=>(n.lastIndex=0,e.replace(n,(e=>t(e)))))(e,l):l(e),r.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(s.lastIndex=0,i.lastIndex=0,e.replace(s,((e,a)=>t(a))).replace(i,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},54468:function(e,t,a){"use strict";a.d(t,{H:function(){return o}});var n=a(67294),r=a(11349),l=a.n(r);const o=e=>{let{title:t,description:a,pathname:r,children:o}=e;const s={title:t||l().defaultTitle,description:a||l().defaultDescription,image:""+l().url+l().logo,url:""+l().url};return n.createElement(n.Fragment,null,n.createElement("title",null,s.title),n.createElement("meta",{name:"description",content:s.description}),n.createElement("meta",{name:"search engines",content:"aeiwi, alexa, alltheWeb, altavista, aol netfind, anzwers, canada, directhit, euroseek, excite, overture, go, google, hotbot. infomak, kanoodle, lycos, mastersite, national directory, northern light, searchit, simplesearch, Websmostlinked, webtop, what-u-seek, aol, yahoo, webcrawler, infoseek, excite, magellan, looksmart, bing, cnet, googlebot"}),n.createElement("meta",{content:"ALL",name:"WEBCRAWLERS"}),n.createElement("meta",{content:"ALL",name:"SPIDERS"}),n.createElement("meta",{content:"index,follow",name:"robots"}),n.createElement("meta",{content:"Indonesian",name:"language"}),n.createElement("meta",{content:"follow, all",name:"Googlebot-Image"}),n.createElement("meta",{content:"index,follow",name:"googlebot"}),n.createElement("meta",{content:"follow, all",name:"Scooter"}),n.createElement("meta",{content:"follow, all",name:"msnbot"}),n.createElement("meta",{content:"follow, all",name:"alexabot"}),n.createElement("meta",{content:"follow, all",name:"Slurp"}),n.createElement("meta",{content:"follow, all",name:"ZyBorg"}),n.createElement("meta",{content:"follow, all",name:"Scooter"}),n.createElement("meta",{content:"true",name:"MSSmartTagsPreventParsing"}),n.createElement("link",{rel:"icon",href:"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👤</text></svg>"}),o)}},9382:function(e,t,a){"use strict";a.d(t,{p:function(){return u}});var n=a(67294);const r=()=>n.createElement(n.Fragment,null,n.createElement("p",{className:"Intro-module--bio"},"I'm a Critical Thinker who Trapped in the Mind of a Programmer.",n.createElement("span",{className:"Intro-module--highlight"}," Backend and Mobile Development"),". now living in ",n.createElement("span",{className:"Intro-module--highlight"}," Baturaja"),". hobi",n.createElement("span",{className:"Intro-module--highlight"}," tantangan"),", ",n.createElement("i",null," joki coding sapa dibawah "),"😼"));a(11883);var l=a(49789);const o=()=>n.createElement(n.Fragment,null,n.createElement("a",{href:"https://github.com/npdkdev",target:"_blank",rel:"noreferrer",className:"Intro-module--icon"},n.createElement(l.Z,{src:"GitHub.png",alt:"Github Page"})),n.createElement("a",{href:"https://instagram.com/nppddkk",target:"_blank",rel:"noreferrer",className:"Intro-module--icon"},n.createElement(l.Z,{src:"Instagram.png",alt:"Instagram Page"})),n.createElement("a",{href:"https://youtube.com/",target:"_blank",rel:"noreferrer",className:"Intro-module--icon"},n.createElement(l.Z,{src:"YouTube.png",alt:"YouTube Page"}))),s=()=>n.createElement(n.Fragment,null,n.createElement("div",{className:"Intro-module--profile"},n.createElement("a",{"aria-current":"page",className:"Intro-module--avatar",href:"/"},n.createElement(l.Z,{src:"itsme.png",alt:"Profile Image"})),n.createElement("div",{className:"Intro-module--socials"},n.createElement(o,null))));var i=a(11349),c=a.n(i);const u=e=>{let{showTitle:t=!0}=e;return n.createElement(n.Fragment,null,n.createElement("div",{className:"Intro-module--intro"},t&&n.createElement("a",{"aria-current":"page",className:"Intro-module--webtitle",href:"/"},"Nopem Adika"),n.createElement(s,null),n.createElement(r,null),n.createElement("a",{href:"mailto:"+c().email,className:"Intro-module--hibutton"},"Sapa saya!")))}},49789:function(e,t,a){"use strict";var n=a(11883),r=a(38032),l=a(67294);t.Z=e=>{let{src:t,alt:a,...o}=e;const s=(0,n.useStaticQuery)("1242509637"),i=(0,l.useMemo)((()=>s.images.edges.find((e=>{let{node:a}=e;return t===a.relativePath}))),[s,t]);if(!i)return null;const{node:{childImageSharp:c,publicURL:u,extension:m}={}}=i;return"svg"!==m&&c?l.createElement(r.G,Object.assign({image:c.gatsbyImageData,alt:a},o)):l.createElement("img",Object.assign({src:u},o))}}}]);
//# sourceMappingURL=a449591a47c22a958078d6117365576b6d23da16-b09dfd67229580feecd3.js.map