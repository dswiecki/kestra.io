(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{331:function(t,e,s){"use strict";var a={props:{classes:{type:Array,default:function(){return[]}}}},i=s(13),n=Object(i.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"position-relative shape-wrapper"},[e("div",{staticClass:"shape overflow-hidden",class:this.classes},[e("svg",{attrs:{viewBox:"0 0 2880 100",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M 720,50 2160,0 h 720 V 100 H 0 V 50 Z",fill:"currentColor"}})])])])}),[],!1,null,"22a6dc56",null);e.a=n.exports},332:function(t,e,s){t.exports=s.p+"assets/img/logo-white.d5238fff.svg"},334:function(t,e,s){},335:function(t,e,s){},337:function(t,e,s){"use strict";var a=s(369),i=s(368),n=s(362),o=s(367),r=s(366),l=s(352),c=s(343),u=s(357),d=s(365),v=s(353),f=s(364),h=s(351),m=s(363),p=s(333),g={components:{VsmMenu:a.a,VsmMob:i.a,SearchBox:n.a,Domain:o.a,GoogleCirclesExtended:l.a,Terraform:u.a,Server:d.a,FileDocumentOutline:c.a,Email:v.a,ApplicationOutline:f.a,FeatureSearch:h.a,AccountNetworkOutline:m.a,GithubIcon:p.d},data:function(){return{menu:[{title:"Product",icon:f.a,element:"a",dropdown:"product",items:[{title:"Features",link:"/features/features",icon:h.a,desc:"Discover all the features of Kestra"},{title:"Usages",link:"/features/usages",icon:m.a,desc:"How Kestra can help on your daily workflow"}]},{title:"Learn",icon:r.a,element:"a",dropdown:"docs",items:[{title:"Documentation",link:"/docs/",icon:c.a,desc:"Get started with Kestra"},{title:"Plugins documentation",link:"/plugins/",icon:l.a,desc:"Extends Kestra with many plugins"},{title:"Terraform provider",link:"/docs/terraform/",icon:u.a,desc:"Deploy Kestra resources with Terraform"},{title:"Administrator guide",link:"/docs/administrator-guide/",icon:c.a,desc:"Learn how to deploy Kestra"}]},{title:"Company",icon:o.a,element:"a",dropdown:"company",items:[{title:"About us",link:"/company/about-us",icon:o.a,desc:"Discover our story & our team"},{title:"Contact us",link:"/company/contact",icon:v.a,desc:"How can we help?"}]},{title:"GitHub",icon:p.d,element:"span",href:"https://github.com/kestra-io/kestra"}]}}},_=(s(341),s(13)),C=Object(_.a)(g,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("vsm-menu",{attrs:{menu:t.menu,"base-width":380,"base-height":400,"screen-offset":10,element:"header",handler:"hover"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.item;return[a("div",{staticClass:"wrap-content"},[a("div",{staticClass:"dropdown-menu show"},[t._l(s.items,(function(e,i){return[a("router-link",{staticClass:"dropdown-item",attrs:{to:e.link}},[a(e.icon,{tag:"span",attrs:{title:""}}),t._v(" "),a("span",[t._v(t._s(e.title))]),t._v(" "),a("span",{staticClass:"desc"},[t._v(t._s(e.desc))])],1),t._v(" "),i!==s.items.length-1?a("div",{staticClass:"dropdown-divider"}):t._e()]}))],2)])]}},{key:"title",fn:function(e){return[a(e.item.icon,{tag:"span"}),t._v(" "),e.item.href?a("a",{attrs:{href:e.item.href}},[t._v(t._s(e.item.title))]):a("span",[t._v(t._s(e.item.title))])]}},{key:"before-nav",fn:function(){return[a("li",{staticClass:"vsm-section logo-section"},[a("router-link",{attrs:{to:"/"}},[a("img",{attrs:{src:s(332),alt:"Kestra"}})])],1)]},proxy:!0},{key:"after-nav",fn:function(){return[a("li",{staticClass:"vsm-section search-section"},[a("SearchBox")],1),t._v(" "),a("vsm-mob",[a("div",{staticClass:"dropdown-menu show"},[t._l(t.menu,(function(e){return["a"===e.element?a("h6",{staticClass:"dropdown-header"},[a(e.icon,{tag:"span",attrs:{title:""}}),t._v(" "),a("span",[t._v(t._s(e.title))])],1):[a("h6",{staticClass:"dropdown-header"},[a("a",{attrs:{href:e.href}},[a(e.icon,{tag:"span",attrs:{title:""}}),t._v(" "),a("span",[t._v(t._s(e.title))])],1)])],t._v(" "),t._l(e.items,(function(e){return[a("router-link",{staticClass:"dropdown-item",attrs:{to:e.link}},[a(e.icon,{tag:"span",attrs:{title:""}}),t._v(" "),a("span",[t._v(t._s(e.title))])],1)]}))]}))],2)])]},proxy:!0}])})}),[],!1,null,null,null);e.a=C.exports},338:function(t,e,s){"use strict";var a=s(345),i=s(358),n=s(370),o=s(333),r={data:function(){return{}},components:{Shape:s(331).a,GithubIcon:o.d,TwitterIcon:o.j,LinkedinIcon:o.e,Discord:i.a,MailIcon:o.f,ChevronRight:a.a,Heart:n.a}},l=(s(342),s(13)),c=Object(l.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Shape",{staticClass:"text-footer"}),t._v(" "),a("footer",{staticClass:"footer"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-3 col-12 mb-0 mb-md-3 pb-0 pb-md-2"},[a("router-link",{staticClass:"logo-footer",attrs:{to:"/"}},[a("img",{attrs:{src:s(332),height:"60",alt:""}})]),t._v(" "),a("p",{staticClass:"mt-2"},[t._v("The modern, scalable orchestrator & scheduler open source platform.")]),t._v(" "),a("ul",{staticClass:"list-unstyled social-icon social mb-0 mt-4"},[a("li",{staticClass:"list-inline-item"},[a("a",{staticClass:"rounded",attrs:{href:"https://github.com/kestra-io"}},[a("github-icon",{staticClass:"fea icon-sm fea-social"})],1)]),t._v(" "),a("li",{staticClass:"list-inline-item ml-1"},[a("a",{staticClass:"rounded",attrs:{href:"https://twitter.com/kestra_io"}},[a("twitter-icon",{staticClass:"fea icon-sm fea-social"})],1)]),t._v(" "),a("li",{staticClass:"list-inline-item ml-1"},[a("a",{staticClass:"rounded",attrs:{href:"https://www.linkedin.com/company/kestra"}},[a("linkedin-icon",{staticClass:"fea icon-sm fea-social"})],1)]),t._v(" "),a("li",{staticClass:"list-inline-item ml-1"},[a("a",{staticClass:"rounded",attrs:{href:"https://discord.gg/NMG39WKGth"}},[a("discord",{attrs:{title:""}})],1)])])],1),t._v(" "),a("div",{staticClass:"col-lg-3 col-12 mb-0 mb-md-3 pb-0 pb-md-2"},[a("h4",{staticClass:"text-light footer-head"},[t._v("Product")]),t._v(" "),a("ul",{staticClass:"list-unstyled footer-list"},[a("li",[a("router-link",{staticClass:"text-foot",attrs:{to:"/features/features"}},[a("ChevronRight",{attrs:{title:""}}),t._v(" Features\n                            ")],1)],1),t._v(" "),a("li",[a("router-link",{staticClass:"text-foot",attrs:{to:"/features/usages"}},[a("ChevronRight",{attrs:{title:""}}),t._v(" Usage\n                            ")],1)],1),t._v(" "),a("li",[a("router-link",{staticClass:"text-foot",attrs:{to:"/docs/architecture/"}},[a("ChevronRight",{attrs:{title:""}}),t._v(" Architecture\n                            ")],1)],1)])]),t._v(" "),a("div",{staticClass:"col-lg-3 col-12 mb-0 mb-md-3 pb-0 pb-md-2"},[a("h4",{staticClass:"text-light footer-head"},[t._v("Learn")]),t._v(" "),a("ul",{staticClass:"list-unstyled footer-list"},[a("li",[a("router-link",{staticClass:"text-foot",attrs:{to:"/docs/"}},[a("ChevronRight",{attrs:{title:""}}),t._v(" Documentation\n                            ")],1)],1),t._v(" "),a("li",[a("router-link",{staticClass:"text-foot",attrs:{to:"/plugins/"}},[a("ChevronRight",{attrs:{title:""}}),t._v("  Plugins documentation\n                            ")],1)],1),t._v(" "),a("li",[a("router-link",{staticClass:"text-foot",attrs:{to:"/docs/terraform/"}},[a("ChevronRight",{attrs:{title:""}}),t._v("  Terraform provider\n                            ")],1)],1),t._v(" "),a("li",[a("router-link",{staticClass:"text-foot",attrs:{to:"/docs/administrator-guide/"}},[a("ChevronRight",{attrs:{title:""}}),t._v("  Administrator guide\n                            ")],1)],1)])]),t._v(" "),a("div",{staticClass:"col-lg-3 col-12 mb-0 mb-md-3 pb-0 pb-md-2"},[a("h4",{staticClass:"text-light footer-head"},[t._v("Company")]),t._v(" "),a("ul",{staticClass:"list-unstyled footer-list"},[a("li",[a("a",{staticClass:"text-foot",attrs:{href:"/company/about-us"}},[a("ChevronRight",{attrs:{title:""}}),t._v(" About us\n                            ")],1)]),t._v(" "),a("li",[a("a",{staticClass:"text-foot",attrs:{href:"/company/contact"}},[a("ChevronRight",{attrs:{title:""}}),t._v("  Contact us\n                            ")],1)])])])])])]),t._v(" "),a("footer",{staticClass:"footer footer-bar"},[a("div",{staticClass:"container text-center"},[a("div",{staticClass:"row align-items-center"},[a("div",{staticClass:"col-sm-6"},[a("div",{staticClass:"text-sm-left"},[a("p",{staticClass:"mb-0"},[t._v("\n                          © "+t._s((new Date).getFullYear())+" "),a("a",{attrs:{href:"https://kestra.io"}},[t._v("Kestra Technologies")]),t._v(".\n                          Developed with "),a("Heart",{staticClass:"text-danger"}),t._v(" in 🇫🇷 .\n\n                        ")],1)])]),t._v(" "),a("div",{staticClass:"col-sm-6"},[a("div",{staticClass:"text-sm-right"},[a("p",{staticClass:"mb-0"},[a("router-link",{attrs:{to:"/company/privacy-policy.html"}},[t._v("Privacy Policy")]),t._v("\n                            /\n                            "),a("router-link",{attrs:{to:"/company/cookie-policy.html"}},[t._v("Cookie Policy")])],1)])])])])])],1)}),[],!1,null,"e11fae92",null);e.a=c.exports},341:function(t,e,s){"use strict";s(334)},342:function(t,e,s){"use strict";s(335)},354:function(t,e,s){},355:function(t,e,s){},374:function(t,e,s){"use strict";s(354)},375:function(t,e,s){"use strict";s(355)},377:function(t,e,s){"use strict";var a=s(39),i=(s(49),s(50),s(373)),n=s.n(i),o={name:"right-anchor",props:{global:Boolean},data:function(){return{listData:[],activeIndex:null,opened:!1}},watch:{"$page.regularPath":function(){this.filterDataByLevel()}},computed:{},methods:{itemClick:function(t,e){var s;this.activeIndex=t,window.scrollTo({top:(null===(s=document.getElementById(e))||void 0===s?void 0:s.offsetTop)||0,behavior:"smooth"})},filterDataByLevel:function(){this.listData=[];var t=this.$page.headers;this.listData=t?Object(a.a)(t):[]},getScrollTop:function(){return window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0}},mounted:function(){var t,e,s=this;(this.filterDataByLevel(),"click"===(null===(t=this.expandOptions)||void 0===t?void 0:t.trigger))&&(this.opened=null===(e=this.expandOptions)||void 0===e?void 0:e.clickModeDefaultOpen);window.addEventListener("scroll",n()((function(){var t=s.getScrollTop();s.listData.forEach((function(e,a){var i,n=null===(i=document.getElementById(e.slug))||void 0===i?void 0:i.offsetTop;n&&(0===a&&t<n?s.activeIndex=0:t>=n&&(s.activeIndex=a))}))}),100))}},r=(s(374),s(13)),l=Object(r.a)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",t._l(t.listData,(function(e,a){return s("li",{key:a,class:[a===t.activeIndex?"active":"",e.level>2?"sub":"","level-"+e.level],on:{click:function(s){return t.itemClick(a,e.slug)}}},[t._v(t._s(e.title)+"\n    ")])})),0)}),[],!1,null,"2e06833c",null);e.a=l.exports},378:function(t,e,s){"use strict";var a=s(333),i={components:{LinkedinIcon:a.e,TwitterIcon:a.j,FacebookIcon:a.c},computed:{url:function(){return encodeURIComponent("https://kestra.io/"+this.$page.regularPath)},title:function(){return encodeURIComponent(this.$page.title)}}},n=(s(375),s(13)),o=Object(n.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text-center"},[s("div",{staticClass:"btn-group mt-5 mb-5"},[s("a",{staticClass:"btn btn-twitter",attrs:{href:"https://twitter.com/intent/tweet?text="+t.title+"&url="+t.url,target:"_blank"}},[s("twitter-icon",{staticClass:"fea icon-sm fea-social"}),t._v("\n             Tweet\n        ")],1),t._v(" "),s("a",{staticClass:"btn btn-linkedin",attrs:{href:"https://www.linkedin.com/sharing/share-offsite/?url="+t.url+"&title="+t.title,target:"_blank"}},[s("linkedin-icon",{staticClass:"fea icon-sm fea-social"}),t._v("\n             Share\n        ")],1),t._v(" "),s("a",{staticClass:"btn btn-facebook",attrs:{href:"http://www.facebook.com/sharer.php?u="+t.url+"&title="+t.title,target:"_blank"}},[s("facebook-icon",{staticClass:"fea icon-sm fea-social"}),t._v("\n             Share\n        ")],1)])])}),[],!1,null,"546581ac",null);e.a=o.exports},416:function(t,e,s){},417:function(t,e,s){},423:function(t,e,s){"use strict";s.r(e);var a={extends:s(538).a},i=(s(500),s(13)),n=Object(i.a)(a,void 0,void 0,!1,null,null,null);e.default=n.exports},500:function(t,e,s){"use strict";s(416)},501:function(t,e,s){"use strict";s(417)},550:function(t,e,s){"use strict";var a={extends:s(537).a},i=s(13),n=Object(i.a)(a,void 0,void 0,!1,null,null,null);e.a=n.exports},551:function(t,e,s){"use strict";var a={extends:s(553).a},i=s(13),n=Object(i.a)(a,void 0,void 0,!1,null,null,null);e.a=n.exports},552:function(t,e,s){"use strict";var a={extends:s(539).a},i=s(13),n=Object(i.a)(a,void 0,void 0,!1,null,null,null);e.a=n.exports},563:function(t,e,s){"use strict";s.r(e);var a=s(337),i=s(338),n=s(377),o=s(544),r=s(545),l=s(423),c=s(372),u=s(378),d={name:"GlobalLayout",components:{Header:a.a,Footer:i.a,RightAnchor:n.a,SidebarLinks:l.default,PageEdit:o.a,PageNav:r.a,Share:u.a},data:function(){return{isSidebarOpen:!1}},computed:{sidebarItems:function(){return Object(c.g)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"sidebar-open":this.isSidebarOpen},t]}},mounted:function(){var t=this;this.$router.afterEach((function(){t.isSidebarOpen=!1}))},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)}}},v=(s(501),s(13)),f=Object(v.a)(d,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{class:t.pageClasses,attrs:{id:"wrapper"}},[s("Header"),t._v(" "),s("div",{attrs:{id:"container"}},[s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row flex-xl-nowrap"},[s("div",{staticClass:"col-md-3 col-xl-2 nav-sidebar"},[s("SidebarLinks",{attrs:{depth:0,items:t.sidebarItems,"sidebar-depth":0}})],1),t._v(" "),s("nav",{staticClass:"d-none d-xl-block col-xl-2 right"},[s("RightAnchor")],1),t._v(" "),s("main",{staticClass:"col-md-9 col-xl-8 py-md-3 pl-md-5 docs",attrs:{role:"main"}},[s("div",{staticClass:"d-block d-md-none sidebar-mobile-btn"},[s("button",{staticClass:"navbar-toggler shadow-lg",attrs:{type:"button"},on:{click:t.toggleSidebar}},[s("span",{staticClass:"navbar-toggler-icon"})])]),t._v(" "),s("Content"),t._v(" "),s("PageEdit"),t._v(" "),s("PageNav",t._b({},"PageNav",{sidebarItems:t.sidebarItems},!1)),t._v(" "),s("Share")],1)])])]),t._v(" "),s("Footer")],1)}),[],!1,null,null,null);e.default=f.exports}}]);