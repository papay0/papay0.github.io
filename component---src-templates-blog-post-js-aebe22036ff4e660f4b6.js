(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{EYWl:function(e,t,a){"use strict";a("91GP");var r=a("c/e4"),n=a("q1tI"),l=a.n(n),o=a("TJpk"),i=a.n(o),c=a("Wbzz");function s(e){var t=e.meta,a=e.image,n=e.title,o=e.description,s=e.slug,u=e.lang,m=void 0===u?"en":u;return l.a.createElement(c.StaticQuery,{query:"3236765318",render:function(e){var r=e.site.siteMetadata,c=o||r.description,u=a?r.siteUrl+"/"+a:null,p=""+r.siteUrl+s;return l.a.createElement(i.a,Object.assign({htmlAttributes:{lang:m}},n?{titleTemplate:"%s — "+r.title,title:n}:{title:r.title+" — A blog by Arthur Papailhau"},{meta:[{name:"description",content:c},{property:"og:url",content:p},{property:"og:title",content:n||r.title},{property:"og:description",content:c},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:r.social.twitter},{name:"twitter:title",content:n||r.title},{name:"twitter:description",content:c}].concat(u?[{property:"og:image",content:u},{name:"twitter:image",content:u}]:[]).concat(t)}))},data:r})}s.defaultProps={meta:[],title:"",slug:""},t.a=s},JLKy:function(e,t,a){"use strict";a("91GP");var r=a("q1tI"),n=a.n(r);t.a=function(e){var t=e.children,a=e.style,r=void 0===a?{}:a;return n.a.createElement("p",{style:Object.assign({fontSize:"0.9em",border:"1px solid var(--hr)",borderRadius:"0.75em",padding:"0.75em",background:"var(--inlineCode-bg)",wordBreak:"keep-all"},r)},t)}},L6NH:function(e,t,a){"use strict";a.d(t,"c",(function(){return l})),a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return i}));a("XfO3"),a("HEwt"),a("a1Th"),a("Btvt"),a("rE2o"),a("ioFf"),a("rGqo"),a("bHtr");var r=a("rY4l");function n(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function l(e){var t=Math.round(e/5);return t>5?new Array(Math.round(t/Math.E)).fill("🍱").join("")+" "+e+" min read":new Array(t||1).fill("☕️").join("")+" "+e+" min read"}function o(e){switch(e){case r.a.ARTICLE:return"Article";case r.a.PROJECT:return"Project";case r.a.JOB:return"Job";default:return""}}function i(e,t){var a;if("function"!=typeof Date.prototype.toLocaleDateString)return e;e=new Date(e);var r=[t,{day:"numeric",month:"long",year:"numeric"}].filter(Boolean);return(a=e).toLocaleDateString.apply(a,n(r))}},Nr18:function(e,t,a){"use strict";var r=a("S/j/"),n=a("d/Gc"),l=a("ne8i");e.exports=function(e){for(var t=r(this),a=l(t.length),o=arguments.length,i=n(o>1?arguments[1]:void 0,a),c=o>2?arguments[2]:void 0,s=void 0===c?a:n(c,a);s>i;)t[i++]=e;return t}},SbOt:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),l=a("caJ7"),o=a.n(l),i=a("p3AD");var c=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){return n.a.createElement("div",{style:{display:"flex",marginBottom:Object(i.a)(2)}},n.a.createElement("img",{src:o.a,alt:"Arthur Papailhau",style:{marginRight:Object(i.a)(.5),marginBottom:0,width:Object(i.a)(2),height:Object(i.a)(2),borderRadius:"50%"}}),n.a.createElement("p",{style:{maxWidth:310}},"Personal blog by"," ",n.a.createElement("a",{href:"https://mobile.twitter.com/papay0"},"Arthur Papailhau"),"."," ","Software Engineer @Uber (Eats)"))},r}(n.a.Component);t.a=c},bHtr:function(e,t,a){var r=a("XKFU");r(r.P,"Array",{fill:a("Nr18")}),a("nGyu")("fill")},"c/e4":function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Lifegorithms","author":"Arthur Papailhau","description":"Personal blog by Arthur Papailhau.","siteUrl":"https://lifegorithms.com","social":{"twitter":"@papay0"}}}}}')},caJ7:function(e,t,a){e.exports=a.p+"static/profile-pic-b45ec6a47ad22c371a4c978c5b595c02.jpg"},k7Sn:function(e,t){t.supportedLanguages={en:"English"}},rY4l:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));a("Z2Ku"),a("L9s1");var r=a("q1tI"),n=a.n(r),l=a("Wbzz"),o=a("p3AD");var i={ARTICLE:"article",PROJECT:"project",JOB:"job"},c=function(e){var t,a;function r(){for(var t,a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return(t=e.call.apply(e,[this].concat(r))||this).state={selectedCategories:[]},t.selectedStyle={marginRight:"40px",boxShadow:"none",textDecoration:"underline"},t.unselectedStyle={boxShadow:"none",marginRight:"40px"},t.onClickCategory=function(e){var a=t.state.selectedCategories;switch(e){case i.ARTICLE:a.includes(i.ARTICLE)?a=a.filter((function(e){return e!==i.ARTICLE})):a.push(i.ARTICLE);break;case i.PROJECT:a.includes(i.PROJECT)?a=a.filter((function(e){return e!==i.PROJECT})):a.push(i.PROJECT);break;case i.JOB:a.includes(i.JOB)?a=a.filter((function(e){return e!==i.JOB})):a.push(i.JOB);break;default:console.error("Arthur, I think you forgot a category here!")}t.props.updateSelectedCategories(a),t.setState({selectedCategories:a})},t}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this;return n.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",fontSize:Object(o.a)(1),marginBottom:Object(o.a)(.25)}},n.a.createElement("div",{style:{display:"flex",flexWrap:"wrap"}},n.a.createElement(l.Link,{style:this.state.selectedCategories.includes(i.ARTICLE)?this.selectedStyle:this.unselectedStyle,rel:"bookmark",to:"",onClick:function(){e.onClickCategory(i.ARTICLE)}},"Articles"),n.a.createElement(l.Link,{style:this.state.selectedCategories.includes(i.PROJECT)?this.selectedStyle:this.unselectedStyle,to:"",rel:"bookmark",onClick:function(){e.onClickCategory(i.PROJECT)}},"Projects"),n.a.createElement(l.Link,{style:this.state.selectedCategories.includes(i.JOB)?this.selectedStyle:this.unselectedStyle,to:"",rel:"bookmark",onClick:function(){e.onClickCategory(i.JOB)}},"Jobs")))},r}(n.a.Component);t.b=c},yZlL:function(e,t,a){"use strict";a.r(t);a("91GP"),a("Vd3H"),a("Oyvg"),a("pIFo");var r=a("q1tI"),n=a.n(r),l=a("Wbzz"),o=a("mwIZ"),i=a.n(o),c=(a("vPK/"),a("SbOt")),s=a("7oih"),u=a("EYWl");a("MvKu");var m=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e="1347095",t="Subscribe to the Newsletter",a="Subscribe to get my latest content by email.",r="Subscribe";return n.a.createElement("form",{action:"https://app.convertkit.com/forms/"+e+"/subscriptions",className:"seva-form formkit-form",method:"post","min-width":"400 500 600 700 800",style:{boxShadow:"var(--form-shadow)",backgroundColor:"var(--bg)",borderRadius:"6px"}},n.a.createElement("div",{"data-style":"full"},n.a.createElement("div",{"data-element":"column",className:"formkit-column",style:{backgroundColor:"var(--bg-secondary)"}},n.a.createElement("h1",{className:"formkit-header","data-element":"header",style:{color:"var(--textTitle)",fontSize:"20px",fontWeight:700}},t),n.a.createElement("div",{"data-element":"subheader",className:"formkit-subheader",style:{color:"var(--textNormal)"}},n.a.createElement("p",null,a)),n.a.createElement("div",{className:"formkit-image"},n.a.createElement("svg",{class:"svg-icon",xmlns:"http://www.w3.org/2000/svg",width:"200",height:"100",viewBox:"0 0 20 20",style:{width:"100%"}},n.a.createElement("path",{d:"M8.627,7.885C8.499,8.388,7.873,8.101,8.13,8.177L4.12,7.143c-0.218-0.057-0.351-0.28-0.293-0.498c0.057-0.218,0.279-0.351,0.497-0.294l4.011,1.037C8.552,7.444,8.685,7.667,8.627,7.885 M8.334,10.123L4.323,9.086C4.105,9.031,3.883,9.162,3.826,9.38C3.769,9.598,3.901,9.82,4.12,9.877l4.01,1.037c-0.262-0.062,0.373,0.192,0.497-0.294C8.685,10.401,8.552,10.18,8.334,10.123 M7.131,12.507L4.323,11.78c-0.218-0.057-0.44,0.076-0.497,0.295c-0.057,0.218,0.075,0.439,0.293,0.495l2.809,0.726c-0.265-0.062,0.37,0.193,0.495-0.293C7.48,12.784,7.35,12.562,7.131,12.507M18.159,3.677v10.701c0,0.186-0.126,0.348-0.306,0.393l-7.755,1.948c-0.07,0.016-0.134,0.016-0.204,0l-7.748-1.948c-0.179-0.045-0.306-0.207-0.306-0.393V3.677c0-0.267,0.249-0.461,0.509-0.396l7.646,1.921l7.654-1.921C17.91,3.216,18.159,3.41,18.159,3.677 M9.589,5.939L2.656,4.203v9.857l6.933,1.737V5.939z M17.344,4.203l-6.939,1.736v9.859l6.939-1.737V4.203z M16.168,6.645c-0.058-0.218-0.279-0.351-0.498-0.294l-4.011,1.037c-0.218,0.057-0.351,0.28-0.293,0.498c0.128,0.503,0.755,0.216,0.498,0.292l4.009-1.034C16.092,7.085,16.225,6.863,16.168,6.645 M16.168,9.38c-0.058-0.218-0.279-0.349-0.498-0.294l-4.011,1.036c-0.218,0.057-0.351,0.279-0.293,0.498c0.124,0.486,0.759,0.232,0.498,0.294l4.009-1.037C16.092,9.82,16.225,9.598,16.168,9.38 M14.963,12.385c-0.055-0.219-0.276-0.35-0.495-0.294l-2.809,0.726c-0.218,0.056-0.351,0.279-0.293,0.496c0.127,0.506,0.755,0.218,0.498,0.293l2.807-0.723C14.89,12.825,15.021,12.603,14.963,12.385"})))),n.a.createElement("div",{"data-element":"column",className:"formkit-column"},n.a.createElement("ul",{className:"formkit-alert formkit-alert-error","data-element":"errors","data-group":"alert"}),n.a.createElement("div",{"data-element":"fields",className:"seva-fields formkit-fields"},n.a.createElement("div",{className:"formkit-field"},n.a.createElement("input",{className:"formkit-input","aria-label":"Your first name",name:"fields[first_name]",placeholder:"Your first name",type:"text",style:{borderColor:"rgb(227, 227, 227)",borderRadius:"4px",color:"rgb(0, 0, 0)",fontWeight:400},required:!0})),n.a.createElement("div",{className:"formkit-field"},n.a.createElement("input",{className:"formkit-input",name:"email_address","aria-label":"Your email address",placeholder:"Your email address",required:!0,type:"email",style:{borderColor:"rgb(227, 227, 227)",borderRadius:"4px",color:"rgb(0, 0, 0)",fontWeight:400}})),n.a.createElement("button",{"data-element":"submit",className:"formkit-submit formkit-submit",style:{backgroundColor:"hsl(208, 86.3%, 48.8%)",borderRadius:"24px",color:"white",fontWeight:700}},n.a.createElement("div",{className:"formkit-spinner"}),n.a.createElement("span",null,r))),n.a.createElement("div",{"data-element":"guarantee",className:"formkit-guarantee",style:{color:"var(--textNormal)",fontSize:"13px",fontWeight:400}},n.a.createElement("p",null,"I won’t send you spam."),n.a.createElement("p",null,"Unsubscribe at ",n.a.createElement("em",null,"any")," time.")))))},r}(n.a.Component),p=a("JLKy"),d=a("L6NH"),f=a("p3AD"),h=(a("SRfc"),a("k7Sn")),g={"https://reactjs.org":{"pt-br":"https://pt-br.reactjs.org"}},b=function(e){return h.supportedLanguages[e].replace(/ /g," ")};function y(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}a.d(t,"pageQuery",(function(){return C}));var E='system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",\n    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",\n    "Droid Sans", "Helvetica Neue", sans-serif',v=function(e){function t(){return e.apply(this,arguments)||this}return y(t,e),t.prototype.render=function(){var e=this.props,t=e.translations,a=e.lang,r=e.languageLink,o=e.editUrl,i=t.filter((function(e){return"ru"!==e})),c=-1!==t.indexOf("ru");return n.a.createElement("div",{className:"translations"},n.a.createElement(p.a,{style:{fontFamily:E}},t.length>0&&n.a.createElement("span",null,c&&n.a.createElement("span",null,"Originally written in:"," ","en"===a?n.a.createElement("b",null,b("en")):n.a.createElement(l.Link,{to:r("en")},"English")," • ","ru"===a?n.a.createElement("b",null,"Русский (авторский перевод)"):n.a.createElement(l.Link,{to:r("ru")},"Русский (авторский перевод)"),n.a.createElement("br",null),n.a.createElement("br",null)),n.a.createElement("span",null,"Translated by readers into: "),i.map((function(e,t){return n.a.createElement(n.a.Fragment,{key:e},e===a?n.a.createElement("b",null,b(e)):n.a.createElement(l.Link,{to:r(e)},b(e)),t===i.length-1?"":" • ")}))),"en"!==a&&n.a.createElement(n.a.Fragment,null,n.a.createElement("br",null),n.a.createElement("br",null),"ru"!==a&&n.a.createElement(n.a.Fragment,null,n.a.createElement(l.Link,{to:r("en")},"Read the original")," • ",n.a.createElement("a",{href:o,target:"_blank",rel:"noopener noreferrer"},"Improve this translation")," • "),n.a.createElement(l.Link,{to:"/"+a},"View all translated posts")," ")))},t}(n.a.Component),k=function(e){function t(){return e.apply(this,arguments)||this}return y(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=i()(this.props,"data.site.siteMetadata.title"),r=this.props.pageContext,o=r.previous,p=r.next,y=r.slug,k=r.translations,C=r.translatedLinks,w=e.fields.langKey,O=e.html;O=function(e,t){var a=e.match(/https?:\/\/(www)?[^\/\s)"?]+/gm);return a&&h.supportedLanguages[t]?(a.forEach((function(a){g[a]&&g[a][t]&&(e=e.replace(a,g[a][t]))})),e):e}(O,w),C.forEach((function(e){var t="/"+w+e;O=O.replace(new RegExp('"'+e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+'"',"g"),'"'+t+'"')})),(k=k.slice()).sort((function(e,t){return b(e)<b(t)?-1:1})),function(e){switch(e){case"ru":case"bg":a.e(0).then(a.t.bind(null,"EsZP",7)),a.e(0).then(a.t.bind(null,"s85H",7));break;case"uk":a.e(0).then(a.t.bind(null,"EsZP",7)),a.e(0).then(a.t.bind(null,"s85H",7)),a.e(0).then(a.t.bind(null,"Mq6Z",7)),a.e(0).then(a.t.bind(null,"e/YJ",7));break;case"cs":case"da":case"de":case"es":case"fi":case"fr":case"he":case"hu":case"it":case"nl":case"no":case"pl":case"pt-br":case"sk":case"sr":case"sq":case"sv":case"tr":a.e(0).then(a.t.bind(null,"Mq6Z",7)),a.e(0).then(a.t.bind(null,"e/YJ",7));break;case"vi":a.e(0).then(a.t.bind(null,"Vjog",7)),a.e(0).then(a.t.bind(null,"Pf5Y",7));break;case"fa":a.e(0).then(a.t.bind(null,"BiVN",7));break;case"ar":a.e(0).then(a.t.bind(null,"xpFW",7))}}(w);var x=function(e,t){var a=e.replace(t+"/","");return function(e){return"en"===e?a:""+e+a}}(y,w),L=x("en"),S="https://github.com/papay0/lifegorithms.com/edit/master/src/pages/"+L.slice(1,L.length-1)+"/index"+("en"===w?"":"."+w)+".md";encodeURIComponent("https://lifegorithms.com"+L);return n.a.createElement(s.a,{location:this.props.location,title:t},n.a.createElement(u.a,{lang:w,title:e.frontmatter.title,description:e.frontmatter.spoiler,slug:e.fields.slug}),n.a.createElement("main",null,n.a.createElement("article",null,n.a.createElement("header",null,n.a.createElement("h1",{style:{color:"var(--textTitle)"}},e.frontmatter.title),n.a.createElement("p",{style:Object.assign({},Object(f.b)(-.2),{display:"block",marginBottom:Object(f.a)(1),marginTop:Object(f.a)(-.8)})},Object(d.b)(e.frontmatter.date,w)," • "+Object(d.c)(e.timeToRead)," • "+Object(d.a)(e.frontmatter.category)),k.length>0&&n.a.createElement(v,{translations:k,editUrl:S,languageLink:x,lang:w})),n.a.createElement("div",{dangerouslySetInnerHTML:{__html:O}}))),n.a.createElement("aside",null,n.a.createElement("div",{style:{margin:"90px 0 40px 0",fontFamily:E}},n.a.createElement(m,null)),n.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:Object(f.a)(.25)}},n.a.createElement(l.Link,{style:{boxShadow:"none",textDecoration:"none",color:"var(--blue)"},to:"/"},"Lifegorithms")),n.a.createElement(c.a,null),n.a.createElement("nav",null,n.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},n.a.createElement("li",null,o&&n.a.createElement(l.Link,{to:o.fields.slug,rel:"prev",style:{marginRight:20}},"← ",o.frontmatter.title)),n.a.createElement("li",null,p&&n.a.createElement(l.Link,{to:p.fields.slug,rel:"next"},p.frontmatter.title," →"))))))},t}(n.a.Component),C=(t.default=k,"4072031568")}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-aebe22036ff4e660f4b6.js.map