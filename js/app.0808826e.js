(function(t){function e(e){for(var r,a,i=e[0],c=e[1],l=e[2],d=0,p=[];d<i.length;d++)a=i[d],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&p.push(s[a][0]),s[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,i=1;i<n.length;i++){var c=n[i];0!==s[c]&&(r=!1)}r&&(o.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},s={app:0},o=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"00f0":function(t,e,n){var r={"./project_rydanz_device.png":"65d6","./project_rydanz_font1.png":"5637","./project_rydanz_font2.png":"34ad","./project_rydanz_main.png":"e615"};function s(t){var e=o(t);return n(e)}function o(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}s.keys=function(){return Object.keys(r)},s.resolve=o,t.exports=s,s.id="00f0"},"034f":function(t,e,n){"use strict";var r=n("85ec"),s=n.n(r);s.a},"132d":function(t,e,n){},"1d14":function(t,e,n){t.exports=n.p+"img/thumb_hellochinese.e28c2043.jpg"},"1e24":function(t,e,n){"use strict";var r=n("b757"),s=n.n(r);s.a},"238b":function(t,e,n){},28772:function(t,e,n){"use strict";var r=n("4af5"),s=n.n(r);s.a},2991:function(t,e,n){"use strict";var r=n("98bd"),s=n.n(r);s.a},"2ce8":function(t,e,n){},"34ad":function(t,e,n){t.exports=n.p+"img/project_rydanz_font2.226cd645.png"},3547:function(t,e,n){var r={"./project_rydanz_main.png":"e615"};function s(t){var e=o(t);return n(e)}function o(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}s.keys=function(){return Object.keys(r)},s.resolve=o,t.exports=s,s.id="3547"},3674:function(t,e,n){"use strict";var r=n("132d"),s=n.n(r);s.a},"38b4":function(t,e,n){},3928:function(t,e,n){t.exports=n.p+"img/img_mainv.46a9418f.jpg"},"4af5":function(t,e,n){},"4ee2":function(t,e,n){},5112:function(t,e,n){"use strict";var r=n("d222"),s=n.n(r);s.a},5637:function(t,e,n){t.exports=n.p+"img/project_rydanz_font1.1cd57d6f.png"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-view",{attrs:{id:"app"}})},o=[],a=(n("4ee2"),n("aede"),{name:"app"}),i=a,c=(n("034f"),n("2877")),l=Object(c["a"])(i,s,o,!1,null,null,null),u=l.exports,d=n("8c4f"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrap"},[n("Header"),n("router-view"),t._m(0),n("Footer")],1)},f=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"btn_scrolltop",attrs:{href:"#top"}},[n("span",{staticClass:"ico_scrolltop"},[t._v("맨 위로")])])}],m=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{class:"inner_wrap"+t.lightTheme},[r("h1",{staticClass:"header_logo"},[r("router-link",{attrs:{to:"/"}},[t.menuOn?r("img",{attrs:{src:n("d39f"),alt:"JIEUNYYO"}}):r("img",{attrs:{src:n("f5d1"),alt:"JIEUNYYO"}})])],1),r("p",{staticClass:"header_text"},[t._v("Introduce myself")]),r("button",{staticClass:"btn_menu",attrs:{type:"button"},on:{click:t.openMenu}},[r("span",{staticClass:"ico_menu"},[t._v("Menu")])]),r("Nav",{directives:[{name:"show",rawName:"v-show",value:t.menuOn,expression:"menuOn"}],attrs:{menuOn:t.menuOn,menuList:t.menuList,closeMenu:t.closeMenu}})],1)},_=[],g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"inner_wrap box_nav"},[n("button",{staticClass:"btn_close",on:{click:t.closeMenu}},[n("span",{staticClass:"ico_close"},[t._v("Close Menu")])]),n("nav",[n("ul",t._l(t.menuList,(function(e){return n("li",{key:e.id,on:{click:t.closeMenu}},[n("router-link",{staticClass:"link_item",attrs:{to:e.url}},[t._v(t._s(e.title))])],1)})),0)]),t._m(0)])},v=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"group_link"},[n("a",{staticClass:"link_blog",attrs:{href:"https://blog.naver.com/j_jieun_",target:"_blank"}},[t._v("blog")]),n("a",{staticClass:"link_email",attrs:{href:"mailto:jieunyyo@naver.com"}},[t._v("jieunyyo@naver.com")])])}],b={name:"Nav",props:{menuList:Array,closeMenu:Function}},j=b,h=(n("846f"),Object(c["a"])(j,g,v,!1,null,"0870c034",null)),C=h.exports,y=[{id:1,title:"home",url:"/"},{id:2,title:"my project",url:"/#project_list"},{id:3,title:"about",url:"/about"}],O={name:"Header",components:{Nav:C},data:function(){return{menuOn:!1,logoName:this.menuOn?"img_logo_white":"img_logo",menuList:y}},methods:{closeMenu:function(){this.menuOn=!1,document.body.classList.remove("dimmed_on")},openMenu:function(){this.menuOn=!0,document.body.classList.add("dimmed_on")}},computed:{lightTheme:function(){return{light_theme:!!this.menuOn}}}},x=O,A=(n("5112"),Object(c["a"])(x,m,_,!1,null,"2992ad7b",null)),E=A.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[t._v("© 2019 JIEUNYYO All Rights Reserved")])},S=[],w={name:"Footer"},P=w,D=(n("6913"),Object(c["a"])(P,k,S,!1,null,null,null)),I=D.exports,T={components:{Header:E,Footer:I}},M=T,N=(n("5756"),Object(c["a"])(M,p,f,!1,null,null,null)),U=N.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("MainVisual"),n("IntroProject"),n("IntroAbout")],1)},z=[],R=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},V=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"section_mainv inner_large"},[r("div",{staticClass:"inner_middle"},[r("div",{staticClass:"group_content"},[r("strong",{staticClass:"title_mainv"},[t._v("흔한 지은입니다.")]),r("span",{staticClass:"img_meanless ico_slash"}),r("p",{staticClass:"desc_mainv"},[t._v(" 제 이름은 흔하지만, 매일 밤 사용자의 편리함을 추구하고 "),r("br"),t._v(" 보는이의 눈을 즐겁게하는 웹사이트를 제작하는 여행중입니다. ")]),r("span",{staticClass:"img_meanless ico_below"})])]),r("div",{staticClass:"group_img"},[r("img",{attrs:{src:n("3928"),alt:""}}),r("span",{staticClass:"img_meanless img_mainv_el"})])])}],F={name:"MainVisual"},H=F,Y=(n("d903"),Object(c["a"])(H,R,V,!1,null,"699b8356",null)),W=Y.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"inner_middle",attrs:{id:"project_list"}},[n("SectionTitle",{staticClass:"title_section",attrs:{title:"My Project",description:"저는 창의적이지만 실용적인 디지털 프로덕트를 만들기 위해 노력하고 있습니다."}}),n("ProjcetList")],1)},J=[],K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v(t._s(t.title))]),n("p",[t._v(" "+t._s(t.description)+" ")])])},Z=[],G={name:"SectionTitle",props:{title:String,description:String}},Q=G,X=(n("3674"),Object(c["a"])(Q,K,Z,!1,null,"36972a6e",null)),B=X.exports,q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"list_project"},t._l(t.projects,(function(e,r){return n("li",{key:r,on:{mouseover:function(e){return t.hoverItem(e)}}},[parseInt((r+1)/2)!==parseInt(r/2)?n("ProjectListItem",{staticClass:"item_project small_item",attrs:{project:e}}):n("ProjectListItem",{staticClass:"item_project",attrs:{project:e}})],1)})),0)},tt=[],et=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{},[r("router-link",{attrs:{to:"/project/"+t.project.id}},[r("strong",{staticClass:"screen_out"},[t._v(t._s(t.project.title))]),r("img",{staticClass:"thumb_project",attrs:{src:n("5d85")("./thumb_"+t.project.filename+".jpg"),alt:t.project.category}})])],1)},nt=[],rt={name:"ProjectListItem",props:["project"],data:function(){return{}},mounted:function(){console.dir(this.project)}},st=rt,ot=Object(c["a"])(st,et,nt,!1,null,null,null),at=ot.exports,it=[{id:0,order:0,filename:"rydanz",title:"RYDANZ",category:"Responsive web design",titleLang:"en",titleColor:"#fff",categoryColor:"#fff",releaseDate:"2018.09",role:"메인&서브 디자인",desc1:{title:"RADANZ 반응형 웹사이트 구축",text:"라이단즈 홈페이지 신규 구축 프로젝트는 고객 신뢰, 전문장비를 바탕으로 만들어진 제품을\n사용자에게 기업 아이덴티티를 전달하고 라이단즈만의 기술, 제품 등을 홍보하기 위한 목적으로\n진행한 프로젝트입니다."},desc2:{title:"사용자 환경에 맞춰 동일한 경험 제공",text:"다양한 웹 브라우저를 대응하기 위한 반응형 웹을 구현하였으며 이를 통해 콘텐츠의 일원화 및 운영의 효율성을 증대하였습니다.",backgroundColor:"#777"},subPageCount:2,designDesc:"라이단즈의 고유의 컬러로 최대한 단순한 색 조합을 통해 브랜드 아이덴티티를 확립하고,\n응용컬러를 활용하여 브랜드 일관성을 유지하였습니다.",colors:{main:"#004098",sub:["#f3f3f3"]},fonts:[{id:1,name:"Noto Sans KR"},{id:2,name:"Poppins"}]},{id:1,order:1,filename:"pito",title:"PITO",category:"Onpage web design",titleLang:"en",titleColor:"#222",categoryColor:"#fff",releaseDate:"2019.01",role:"메인 디자인",desc1:{title:"PITO 원페이지 반응형 웹사이트 구축",text:"PITO 홈페이지 신규 구축 프로젝트는 행복마루컨설팅의 내부제보 시스템입니다.\n기업의 IT기반의 컨설팅 이미지를 핵심적으로 부각할수있는 그래픽 이미지를 사용하였고\n원페이지 디자인을 통해 집약적이고 컨텐츠 중심으로 구축을 위한 목적으로 진행한 프로젝트입니다."},desc2:{title:"사용자 환경에 맞춰 동일한 경험 제공",text:"다양한 웹 브라우저를 대응하기 위한 반응형 웹을 구현하였으며 이를 통해 콘텐츠의 일원화 및 운영의 효율성을 증대하였습니다.",backgroundColor:"#777"},subPageCount:2,designDesc:"PITO의 고유의 컬러로 최대한 단순한 색 조합을 통해 브랜드 아이덴티티를 확립하고,\n응용컬러를 활용하여 브랜드 일관성을 유지하였습니다. ",colors:{main:"#003690",sub:["#16adfa"]},fonts:[{id:1,name:"Noto Sans KR"},{id:2,name:"Roboto"}]}],ct={name:"ProjectList",components:{ProjectListItem:at},data:function(){return{projects:it}},methods:{hoverItem:function(t){console.dir(t.currentTarget),t.currentTarget.classList.add("active")}}},lt=ct,ut=(n("2991"),Object(c["a"])(lt,q,tt,!1,null,"d3f58820",null)),dt=ut.exports,pt={name:"IntroProject",components:{SectionTitle:B,ProjcetList:dt}},ft=pt,mt=(n("dd5a"),Object(c["a"])(ft,$,J,!1,null,"0a16c0ab",null)),_t=mt.exports,gt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section_about"},[n("div",{staticClass:"inner_middle"},[t._m(0),n("RoundLink",{staticClass:"btn_more",attrs:{name:"자세히보기",url:"/about",theme:"light"}}),n("span",{staticClass:"img_meanless img_diagonal"})],1)])},vt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"text_about"},[t._v(" Why I love practicing "),n("br"),t._v(" design. Every day. ")])}],bt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-link",{class:t.themeClass,attrs:{to:t.url,target:t.target?t.target:"_top"}},[t._v(t._s(t.name))])},jt=[],ht={name:"RoundLink",props:["name","url","theme","target"],computed:{themeClass:function(){return this.theme?this.theme:""}}},Ct=ht,yt=(n("1e24"),Object(c["a"])(Ct,bt,jt,!1,null,"950b80a2",null)),Ot=yt.exports,xt={name:"IntroAbout",components:{RoundLink:Ot}},At=xt,Et=(n("59e2"),Object(c["a"])(At,gt,vt,!1,null,"9636165c",null)),kt=Et.exports,St={name:"Main",components:{MainVisual:W,IntroProject:_t,IntroAbout:kt},mounted:function(){window.scrollTo(0,0)}},wt=St,Pt=Object(c["a"])(wt,L,z,!1,null,null,null),Dt=Pt.exports,It=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("SectionTitle",{staticClass:"title_section",attrs:{title:"About Me",description:"안녕하세요. 흔한 지은이 입니다."}}),n("AboutVisual"),t._m(0),n("div",{staticClass:"section_summary inner_middle"},[n("AboutSummary",{staticClass:"box_work",attrs:{title:"Work\nExperience",list:["2015-2016\n유지보수, 화면 ui 디자인\n신도리코","2017-2019\n유지보수, 반응형웹 디자인\n헬로웹"]}}),n("AboutSummary",{staticClass:"box_skills",attrs:{title:"Software\nSkills",list:["Adobe Photoshop","Adobe Illustrator","HTML / CSS"]}})],1)],1)},Tt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section_about inner_middle"},[n("strong",{staticClass:"box_title"},[t._v(" 디자인은 소소한 일상을"),n("br"),t._v(" 양질의 순간으로 바꿔주는"),n("br"),t._v(" 매개체라고 생각합니다. ")]),n("div",{staticClass:"box_text"},[n("p",[t._v(" 수많은 밤을 지새웠습니다. 그럼에도 불구하고 멈추지 않았던 이유가 있습니다. 제가 본 웹사이트들은 저로 하여금 디자인에 대해 더 많은 열정과 호기심을 가질 수 있도록 동기부여를 해 주었습니다. 새로운 것을 만들어내기 위해 몰두하고, 그것을 현실화 하는 과정은 늘 짜릿한 일이며 지금까지 겪어온 것 중 가장 믿을 수 없는 경험 중 하나입니다. ")]),n("p",[t._v(" 어린시절 그림판으로 꽃을 그려나가던 희미한 옛 기억처럼 머릿속의 팔레트를 화면으로 옮겨내는 것은 여전히 마법을 보는 듯 설렙니다. 그리고 그 설렘과 항상 함께하고 싶은 마음이 제가 디자인을 사랑할 수 있는 이유 중 하나겠지요. ")]),n("p",[t._v(" 이번 디자인여행에서 프로젝트 진행이 바로 저에겐 설렘과 함께하는 순간이었습니다. 보다 더 발전해나가며 끊임없이 해결책을 찾는 일련의 과정들은 즐거운 싸움이었습니다. 저에게는 그러한 도전들이 깊어가는 불면의 밤에서 멈추지 않고 일할 수 있는 원동력으로 자리했습니다. 그리고 나는 그 모든 순간을 사랑합니다. I ♡ design ")]),n("a",{staticClass:"btn_more",attrs:{href:"test.pdf",target:"_blank"}},[t._v("이력서보기")])])])}],Mt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("img",{attrs:{src:n("5dac")}})},Nt=[],Ut={name:"AboutVisual"},Lt=Ut,zt=Object(c["a"])(Lt,Mt,Nt,!1,null,"4c41d88a",null),Rt=zt.exports,Vt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box_summary"},[n("strong",[t._v(t._s(t.title))]),n("ul",t._l(t.list,(function(e,r){return n("li",{key:r},[t._v(t._s(e))])})),0)])},Ft=[],Ht={name:"AboutSummary",props:{title:String,list:Array}},Yt=Ht,Wt=(n("fe6a"),Object(c["a"])(Yt,Vt,Ft,!1,null,"6669f33b",null)),$t=Wt.exports,Jt={name:"About",components:{SectionTitle:B,AboutVisual:Rt,AboutSummary:$t},methods:{handleClick:function(){window.open("../assets/test.pdf","_blank")}},mounted:function(){window.scrollTo(0,0)}},Kt=Jt,Zt=(n("ca2d"),Object(c["a"])(Kt,It,Tt,!1,null,"166c09b3",null)),Gt=Zt.exports,Qt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h2",{staticClass:"screen_out"},[t._v("프로젝트 소개")]),r("ProjectTitle",{attrs:{title:t.project.title,category:t.project.category,titleLang:t.project.titleLang,titleColor:t.project.titleColor,categoryColor:t.project.categoryColor,filename:t.project.filename}}),r("ProjectDesc1",{staticClass:"inner_middle",attrs:{info:t.project.desc1,releaseDate:t.project.releaseDate,role:t.project.role}}),r("img",{staticClass:"inner_middle img1_project",attrs:{src:n("77db")("./project_"+t.project.filename+"_img1.jpg"),alt:"페이지1"}}),t.project.desc2?r("ProjectDesc2",{attrs:{desc2:t.project.desc2,filename:t.project.filename}}):t._e(),r("div",{staticClass:"box_sub inner_middle"},t._l(t.project.subPageCount,(function(e){return r("img",{key:e,staticClass:"img_sub",attrs:{src:n("b7be")("./project_"+t.project.filename+"_img"+(e+1)+".jpg"),alt:"서브페이지"+e}})})),0),r("ProjectSummery",{attrs:{designDesc:t.project.designDesc,colors:t.project.colors,fonts:t.project.fonts,filename:t.project.filename}})],1)},Xt=[],Bt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box_title",style:{background:t.backgroundImage}},[n("div",{staticClass:"inner_middle"},[n("h3",{class:"title_project"+t.isEnglish,style:{color:t.titleColor}},[t._v(t._s(t.title))]),n("p",{staticClass:"category_project",style:{color:t.categoryColor}},[t._v(t._s(t.category))])])])},qt=[],te={name:"ProjectTitle",props:["title","category","titleLang","titleColor","categoryColor","filename"],data:function(){return{isEnglish:"en"===this.titleLang?" title_project_en":"",backgroundImage:"url(".concat(n("3547")("./project_"+this.filename+"_main.png"),")")}}},ee=te,ne=(n("6371"),Object(c["a"])(ee,Bt,qt,!1,null,"11d569c0",null)),re=ne.exports,se=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box_info"},[n("div",{staticClass:"group_text"},[n("strong",{staticClass:"title_desc1"},[t._v(t._s(t.info.title))]),n("p",{staticClass:"text_desc1"},[t._v(t._s(t.info.text))])]),n("dl",{staticClass:"group_info"},[n("dt",[t._v("RELEASE DATE")]),n("dd",[t._v(t._s(t.releaseDate))]),n("dt",[t._v("ROLE")]),n("dd",[t._v(t._s(t.role))])])])},oe=[],ae={name:"ProjectDesc1",props:["info","releaseDate","role"]},ie=ae,ce=(n("5906"),Object(c["a"])(ie,se,oe,!1,null,"3c01c04b",null)),le=ce.exports,ue=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"box_desc2"},[r("div",{staticClass:"group_desc2"},[r("div",{staticClass:"inner_middle"},[r("strong",{staticClass:"title_desc2"},[t._v(t._s(t.desc2.title))]),r("p",{staticClass:"text_desc2"},[t._v(t._s(t.desc2.text))]),r("img",{staticClass:"img_desc2",attrs:{src:n("7cef")("./project_"+t.filename+"_device.png")}})])])])},de=[],pe={name:"ProjectDesc2",props:["desc2","filename"]},fe=pe,me=(n("28772"),Object(c["a"])(fe,ue,de,!1,null,"3f4e037f",null)),_e=me.exports,ge=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"box_summary"},[r("div",{staticClass:"inner_middle"},[r("div",{staticClass:"group_summary summary_design"},[r("strong",{staticClass:"title_summary"},[t._v("디자인 요소")]),r("p",{staticClass:"desc_summary"},[t._v(t._s(t.designDesc))])]),r("div",{staticClass:"group_summary summary_color"},[r("strong",{staticClass:"title_summary"},[t._v("COLORS")]),r("ul",{staticClass:"list_chip"},[r("li",[r("strong",{staticClass:"title_color"},[t._v("Main Color")]),r("span",{staticClass:"chip_color",style:{backgroundColor:t.colors.main}}),r("span",{staticClass:"code_color"},[t._v(t._s(t.colors.main))])]),t._l(t.colors.sub,(function(e,n){return r("li",{key:n},[r("strong",{staticClass:"title_color"},[t._v("Sub Color")]),r("span",{staticClass:"chip_color",style:{backgroundColor:e}}),r("span",{staticClass:"code_color"},[t._v(t._s(e))])])}))],2)]),r("div",{staticClass:"group_summary summary_font"},[r("strong",{staticClass:"title_summary"},[t._v("FONT")]),r("ul",t._l(t.fonts,(function(e,s){return r("li",{key:s,staticClass:"group_font"},[r("strong",{staticClass:"screen_out"},[t._v(t._s(e.name))]),r("img",{class:"font"+e.id+"_project",attrs:{src:n("00f0")("./project_"+t.filename+"_font"+e.id+".png")}})])})),0)])])])},ve=[],be={name:"ProjectSummery",props:["designDesc","colors","fonts","filename"],data:function(){return{}}},je=be,he=(n("6c5a"),Object(c["a"])(je,ge,ve,!1,null,"2e5a4520",null)),Ce=he.exports,ye={name:"Project",components:{ProjectTitle:re,ProjectDesc1:le,ProjectDesc2:_e,ProjectSummery:Ce},data:function(){return{project:it[this.$route.params.id],publicPath:"/"}},created:function(){this.project=it[this.$route.params.id]},mounted:function(){window.scrollTo(0,0)}},Oe=ye,xe=(n("5b53"),Object(c["a"])(Oe,Qt,Xt,!1,null,"237d8044",null)),Ae=xe.exports;r["a"].use(d["a"]);var Ee=[{path:"/",component:U,children:[{path:"",component:Dt},{path:"/about",component:Gt},{path:"/project/:id",component:Ae}]}],ke=new d["a"]({routes:Ee,scrollBehavior:function(t,e,n){if(t.hash)return{selector:t.hash}}}),Se=ke;r["a"].config.productionTip=!1,new r["a"]({router:Se,render:function(t){return t(u)}}).$mount("#app")},5756:function(t,e,n){"use strict";var r=n("acd2"),s=n.n(r);s.a},5906:function(t,e,n){"use strict";var r=n("2ce8"),s=n.n(r);s.a},"591f":function(t,e,n){},"59e2":function(t,e,n){"use strict";var r=n("d61f"),s=n.n(r);s.a},"5b53":function(t,e,n){"use strict";var r=n("d0e3"),s=n.n(r);s.a},"5d85":function(t,e,n){var r={"./thumb_hellochinese.jpg":"1d14","./thumb_hotdog.jpg":"b094","./thumb_naraefood.jpg":"89d4","./thumb_pito.jpg":"b491","./thumb_rydanz.jpg":"e663","./thumb_speedrack.jpg":"f266"};function s(t){var e=o(t);return n(e)}function o(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}s.keys=function(){return Object.keys(r)},s.resolve=o,t.exports=s,s.id="5d85"},"5dac":function(t,e,n){t.exports=n.p+"img/img_about.49d5700e.jpg"},6371:function(t,e,n){"use strict";var r=n("591f"),s=n.n(r);s.a},"65d6":function(t,e,n){t.exports=n.p+"img/project_rydanz_device.6d368ee7.png"},"68f0":function(t,e,n){},6913:function(t,e,n){"use strict";var r=n("bc95"),s=n.n(r);s.a},"6c5a":function(t,e,n){"use strict";var r=n("68f0"),s=n.n(r);s.a},"77db":function(t,e,n){var r={"./project_rydanz_img1.jpg":"89ba"};function s(t){var e=o(t);return n(e)}function o(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}s.keys=function(){return Object.keys(r)},s.resolve=o,t.exports=s,s.id="77db"},7913:function(t,e,n){},"7cef":function(t,e,n){var r={"./project_rydanz_device.png":"65d6"};function s(t){var e=o(t);return n(e)}function o(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}s.keys=function(){return Object.keys(r)},s.resolve=o,t.exports=s,s.id="7cef"},"846f":function(t,e,n){"use strict";var r=n("da8f"),s=n.n(r);s.a},"85ec":function(t,e,n){},"89ba":function(t,e,n){t.exports=n.p+"img/project_rydanz_img1.def67adb.jpg"},"89d4":function(t,e,n){t.exports=n.p+"img/thumb_naraefood.63725c30.jpg"},"98bd":function(t,e,n){},acd2:function(t,e,n){},aede:function(t,e,n){},b094:function(t,e,n){t.exports=n.p+"img/thumb_hotdog.655d2bfc.jpg"},b491:function(t,e,n){t.exports=n.p+"img/thumb_pito.9061691c.jpg"},b757:function(t,e,n){},b7be:function(t,e,n){var r={"./project_rydanz_img1.jpg":"89ba","./project_rydanz_img2.jpg":"c820","./project_rydanz_img3.jpg":"f3dd"};function s(t){var e=o(t);return n(e)}function o(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}s.keys=function(){return Object.keys(r)},s.resolve=o,t.exports=s,s.id="b7be"},bc95:function(t,e,n){},c214:function(t,e,n){},c820:function(t,e,n){t.exports=n.p+"img/project_rydanz_img2.511f067a.jpg"},ca2d:function(t,e,n){"use strict";var r=n("38b4"),s=n.n(r);s.a},d0e3:function(t,e,n){},d222:function(t,e,n){},d39f:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKcAAAARCAQAAAASjHQPAAAB+0lEQVR42tWYbxWEIAzArwIVrEAFK1iBClSwghWsYAUrUIEKHHrA+COMe+92PueH04EDfhsb3isVMxonTpG3exmbrabXyhdWlWGlhcv+yjUuhWYu+i7eeqHZX1Uxg5FmO3tp+ytgZs/BaYzsxClco3bPPFgYLsB44U6j3bOowpSwvuDq6Xk4IxxN+4BkSuJtuey7QuSCKyBaK/FciqDDufnrxzi3XIfEz5rAHZsBpBO4smJ5jmaz2xWq6HkiwgmaH+MMU0ZmyXy7vZvAFZXeu7cd3tOGtfeufWdwuim4Sz0Pp1uof0S3pIC7Q9/MtQvcNayWZZHDhifBSbbZD5m7cA5+JnnkNM4COsTpgMxbVDCvNDhpSpGEGpzab5WYIhfitXpFXGTyVBASinoSTuaiaOvCOeYpotGX2R4gI2ax3vIgnNHsRNs+lJjy+I5W7L3ah6PRqUlw0pSiaAtre+E4xdXxHd3IotFLY7nzGHT7XH/EGY7ZmVWO4hw+7+Ij4WvBV1bmY6yyxz4cI4/upDi35Jgt+1zoy8aNOONzJ/c6OHeGMA+f814W0oMSIFH9Y0JOvAtn11eRVZbCSUsRAyTgTGxMwHQfzrDhSxG1xemjiRLnmW9UNuaEjRnHyH04e/5ROguSa5iPOkiN83Si/G7M9Jx4H84zQc7X/3e+AdVYSQYk1J0aAAAAAElFTkSuQmCC"},d61f:function(t,e,n){},d903:function(t,e,n){"use strict";var r=n("c214"),s=n.n(r);s.a},da8f:function(t,e,n){},dd5a:function(t,e,n){"use strict";var r=n("238b"),s=n.n(r);s.a},e615:function(t,e,n){t.exports=n.p+"img/project_rydanz_main.45d954f8.png"},e663:function(t,e,n){t.exports=n.p+"img/thumb_rydanz.2fce5200.jpg"},f266:function(t,e,n){t.exports=n.p+"img/thumb_speedrack.986aa6d1.jpg"},f3dd:function(t,e,n){t.exports=n.p+"img/project_rydanz_img3.d9751fd5.jpg"},f5d1:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKoAAAATCAQAAACqul60AAAB9ElEQVR42u2YzbGEIAyA4eCFo2caoANasIdtwjKsw0ashFZ88h4Q5C84b7OOMxsOys8G+AhJVvaVT8jIdleKEnrHZu/eq+WC1o3xgoaSbK7vlbVM2diX1561rA1KA9Ns+R1ljqdi/KlQd6Y7oSrXZ1xdhNFDjif0CddiXF1VGWnYXzgS+VSoEZSmfgAjY9s7niWZT1asUsut2HZeFDXUxZc3Q13SNsSW5hPisbljc0KsK5qnaDXrsZ4tqktaqEHeDPVv4fhM3PcfbzIcSE3WoJsHwByhs4ZbI8OhbU+F6rbr6+glVdFbWeDKv+CtoTUPmgJcACVUqutvy9QFdfArSa2okS+YYLMDsm5VgT1TQqUJVBriNKIfvGOeOeDxfEYOas+cg/RH9zyo3FnU0gV1TJxGS7j1i7AKTGO953lQYXWqrR8CUJ7016M6mvQL1FINJVSaQAWX2hwFn0mVkn70aqvGKNPrU5UPKh+EaioJkkC1Dva3UP7x7xDfWS5zb/RXoC6qraRQl9PJ6vbvkl59I9Q4TxW+rZSnDpE7X8L7izSlAjDbhTm9rLdBvfCPCrYFRZAGKg5g4EixOQHWjVC9C8iLam/R2AGkUK0f2pI5JTonyHQj1J6vVBCuXPdkYyU5VHuU+tqc57zyRqjWZU7J99Sv0MoPiBWiu8PaRewAAAAASUVORK5CYII="},fe6a:function(t,e,n){"use strict";var r=n("7913"),s=n.n(r);s.a}});
//# sourceMappingURL=app.0808826e.js.map