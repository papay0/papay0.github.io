(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{EYWl:function(e,t,r){"use strict";r("91GP");var n=r("c/e4"),a=r("q1tI"),o=r.n(a),i=r("TJpk"),l=r.n(i),c=r("Wbzz");function s(e){var t=e.meta,r=e.image,a=e.title,i=e.description,s=e.slug,u=e.lang,p=void 0===u?"en":u;return o.a.createElement(c.StaticQuery,{query:"3236765318",render:function(e){var n=e.site.siteMetadata,c=i||n.description,u=r?n.siteUrl+"/"+r:null,d=""+n.siteUrl+s;return o.a.createElement(l.a,Object.assign({htmlAttributes:{lang:p}},a?{titleTemplate:"%s — "+n.title,title:a}:{title:n.title+" — A blog by Dan Abramov"},{meta:[{name:"description",content:c},{property:"og:url",content:d},{property:"og:title",content:a||n.title},{property:"og:description",content:c},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:n.social.twitter},{name:"twitter:title",content:a||n.title},{name:"twitter:description",content:c}].concat(u?[{property:"og:image",content:u},{name:"twitter:image",content:u}]:[]).concat(t)}))},data:n})}s.defaultProps={meta:[],title:"",slug:""},t.a=s},JLKy:function(e,t,r){"use strict";r("91GP");var n=r("q1tI"),a=r.n(n);t.a=function(e){var t=e.children,r=e.style,n=void 0===r?{}:r;return a.a.createElement("p",{style:Object.assign({fontSize:"0.9em",border:"1px solid var(--hr)",borderRadius:"0.75em",padding:"0.75em",background:"var(--inlineCode-bg)",wordBreak:"keep-all"},n)},t)}},L6NH:function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return o}));r("XfO3"),r("HEwt"),r("a1Th"),r("Btvt"),r("rE2o"),r("ioFf"),r("rGqo"),r("bHtr");function n(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function a(e){var t=Math.round(e/5);return t>5?new Array(Math.round(t/Math.E)).fill("🍱").join("")+" "+e+" min read":new Array(t||1).fill("☕️").join("")+" "+e+" min read"}function o(e,t){var r;if("function"!=typeof Date.prototype.toLocaleDateString)return e;e=new Date(e);var a=[t,{day:"numeric",month:"long",year:"numeric"}].filter(Boolean);return(r=e).toLocaleDateString.apply(r,n(a))}},Nr18:function(e,t,r){"use strict";var n=r("S/j/"),a=r("d/Gc"),o=r("ne8i");e.exports=function(e){for(var t=n(this),r=o(t.length),i=arguments.length,l=a(i>1?arguments[1]:void 0,r),c=i>2?arguments[2]:void 0,s=void 0===c?r:a(c,r);s>l;)t[l++]=e;return t}},SbOt:function(e,t,r){"use strict";var n=r("q1tI"),a=r.n(n),o=r("caJ7"),i=r.n(o),l=r("p3AD");var c=function(e){var t,r;function n(){return e.apply(this,arguments)||this}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.prototype.render=function(){return a.a.createElement("div",{style:{display:"flex",marginBottom:Object(l.a)(2)}},a.a.createElement("img",{src:i.a,alt:"Dan Abramov",style:{marginRight:Object(l.a)(.5),marginBottom:0,width:Object(l.a)(2),height:Object(l.a)(2),borderRadius:"50%"}}),a.a.createElement("p",{style:{maxWidth:310}},"Personal blog by"," ",a.a.createElement("a",{href:"https://mobile.twitter.com/dan_abramov"},"Dan Abramov"),"."," ","I explain with words and code."))},n}(a.a.Component);t.a=c},TshS:function(e,t,r){"use strict";r.r(t);r("Z2Ku"),r("L9s1");var n=r("Wbzz"),a=r("L6NH"),o=r("SbOt"),i=r("q1tI"),l=r.n(i),c=r("p3AD");var s=function(e){var t,r;function n(){return e.apply(this,arguments)||this}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.prototype.render=function(){return l.a.createElement("footer",{style:{marginTop:Object(c.a)(2.5),paddingTop:Object(c.a)(1)}},l.a.createElement("div",{style:{float:"right"}},l.a.createElement("a",{href:"/rss.xml",target:"_blank",rel:"noopener noreferrer"},"rss")),l.a.createElement("a",{href:"https://mobile.twitter.com/dan_abramov",target:"_blank",rel:"noopener noreferrer"},"twitter")," ","•"," ",l.a.createElement("a",{href:"https://github.com/gaearon",target:"_blank",rel:"noopener noreferrer"},"github")," ","•"," ",l.a.createElement("a",{href:"https://stackoverflow.com/users/458193/dan-abramov",target:"_blank",rel:"noopener noreferrer"},"stack overflow"))},n}(l.a.Component),u=r("7oih"),p=r("JLKy"),d=r("EYWl"),m=r("mwIZ"),f=r.n(m);var h="article",g="project",y="job",b=function(e){var t,r;function a(){for(var t,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(t=e.call.apply(e,[this].concat(n))||this).state={selectedCategories:[]},t.selectedStyle={marginRight:"40px",boxShadow:"none",textDecoration:"underline"},t.unselectedStyle={boxShadow:"none",marginRight:"40px"},t.onClickCategory=function(e){var r=t.state.selectedCategories;switch(e){case h:r.includes(h)?r=r.filter((function(e){return e!==h})):r.push(h);break;case g:r.includes(g)?r=r.filter((function(e){return e!==g})):r.push(g);break;case y:r.includes(y)?r=r.filter((function(e){return e!==y})):r.push(y);break;default:console.error("Arthur, I think you forgot a category here!")}t.props.updateSelectedCategories(r),t.setState({selectedCategories:r})},t}return r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.prototype.render=function(){var e=this;return l.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",fontSize:Object(c.a)(1),marginBottom:Object(c.a)(.25)}},l.a.createElement(n.Link,{style:this.state.selectedCategories.includes(h)?this.selectedStyle:this.unselectedStyle,rel:"bookmark",to:"",onClick:function(){e.onClickCategory(h)}},"Articles"),l.a.createElement(n.Link,{style:this.state.selectedCategories.includes(g)?this.selectedStyle:this.unselectedStyle,to:"",rel:"bookmark",onClick:function(){e.onClickCategory(g)}},"Projects"),l.a.createElement(n.Link,{style:this.state.selectedCategories.includes(y)?this.selectedStyle:this.unselectedStyle,to:"",rel:"bookmark",onClick:function(){e.onClickCategory(y)}},"Jobs"))},a}(l.a.Component);r.d(t,"pageQuery",(function(){return k}));var v=function(e){var t,r;function i(){for(var t,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(t=e.call.apply(e,[this].concat(n))||this).state={selectedCategories:[]},t.updateSelectedCategories=function(e){t.setState({selectedCategories:e})},t}return r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,i.prototype.render=function(){var e=f()(this,"props.data.site.siteMetadata.title"),t=this.props.pageContext.langKey,r=this.state.selectedCategories,i=f()(this,"props.data.allMarkdownRemark.edges").filter((function(e){var t=e.node.frontmatter.category;return 0===r.length||!!r.includes(t)}));return l.a.createElement(u.a,{location:this.props.location,title:e},l.a.createElement(d.a,null),l.a.createElement("aside",null,l.a.createElement(o.a,null),l.a.createElement(b,{updateSelectedCategories:this.updateSelectedCategories})),l.a.createElement("main",null,"en"!==t&&"ru"!==t&&l.a.createElement(p.a,null,"These articles have been"," ",l.a.createElement("a",{href:"https://github.com/gaearon/overreacted.io#contributing-translations",target:"_blank",rel:"noopener noreferrer"},"translated by the community"),"."),i.map((function(e){var r=e.node,o=f()(r,"frontmatter.title")||r.fields.slug;return l.a.createElement("article",{key:r.fields.slug},l.a.createElement("header",null,l.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",fontSize:Object(c.a)(1),marginBottom:Object(c.a)(.25)}},l.a.createElement(n.Link,{style:{boxShadow:"none"},to:r.fields.slug,rel:"bookmark"},o)),l.a.createElement("small",null,Object(a.a)(r.frontmatter.date,t)," • "+Object(a.b)(r.timeToRead))),l.a.createElement("p",{dangerouslySetInnerHTML:{__html:r.frontmatter.spoiler}}))}))),l.a.createElement(s,null))},i}(l.a.Component),k=(t.default=v,"2677024303")},bHtr:function(e,t,r){var n=r("XKFU");n(n.P,"Array",{fill:r("Nr18")}),r("nGyu")("fill")},"c/e4":function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Lifegorithms","author":"Arthur Papailhau","description":"Personal blog by Arthur Papailhau.","siteUrl":"https://lifegorithms.io","social":{"twitter":"@papay0"}}}}}')},caJ7:function(e,t,r){e.exports=r.p+"static/profile-pic-c715447ce38098828758e525a1128b87.jpg"}}]);
//# sourceMappingURL=component---src-templates-blog-index-js-35fccf2b1884498ba05c.js.map