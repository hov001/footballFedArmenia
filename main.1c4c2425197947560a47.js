(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var a=e.g.document;if(!t&&a&&(a.currentScript&&(t=a.currentScript.src),!t)){var n=a.getElementsByTagName("script");n.length&&(t=n[n.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=class{constructor(e){this.boxId=e,this.navItems=new String(""),this.footerItems=new String(""),this.bigNewsBlockItems=new String(""),this.smallNewsBlockItem=new String(""),this.tourTabledataItem=new String("")}renderItems(e){return e.forEach((e=>{this.navItems+=`\n        <li class="nav__item">\n          <a href="#" class="nav__item__dropbtn">${e}</a>\n        </li>\n      `})),`\n      \x3c!-- HEADER ITEM NAV --\x3e\n      <nav class="header__item__nav" ${void 0!==this.boxId?`id="${this.boxId}"`:""}>\n        <ul>\n          ${this.navItems}\n        </ul>\n      </nav>\n    `}renderFooterItems(e){return this.footerItems=new String(""),e.forEach((e=>{this.footerItems+=`\n        <div class="footer__finish">\n          <h3 class="footer__fin__h3">${e.title}</h3>\n      `,e.items.forEach((e=>{this.footerItems+=`\n            <a href="#" target="_blank" class="footer__fin__p">${e}</a>\n          `})),this.footerItems+="\n          </div>\n       "})),`      \n      <div class="footer__item_2">\n          ${this.footerItems}\n      </div>\n    `}renderbigNewsBlockItems(e){return this.bigNewsBlockItems=new String(""),e.forEach((e=>{this.bigNewsBlockItems+=`\n          <div class="big__news__list__block news__list__block">\n            <a href="/news/213840" class="big__news__image news__image" style="background-image: url('${e.url}');"></a>\n                <div class="big__neitiv">\n                    <a href="/news/213840" class="big__news__title news__title">${e.title1}</a>\n                    <p class="big__news__title2">\n                    ${e.title2}  \n                    </p>\n                    <span class="big__date">${e.data}</span>\n                </div>\n          </div>\n      `})),this.bigNewsBlockItems}rendersmallNewsBlockItem(e){return this.smallNewsBlockItem=new String(""),e.forEach((e=>{this.smallNewsBlockItem+=`\n              <div class="small__news__list__block news__list__block">\n                <a href="/news/213840" class="small__news__image news__image" style="background-image: url('${e.url}');"></a>\n                  <div class="small__neitiv">\n                      <a href="/news/213840" class="small__news__title news__title">${e.title}</a>\n                      <span class="small__date">${e.data}</span>\n                  </div>\n              </div>\n      `})),this.smallNewsBlockItem}renderTourTabledataItem(e){return this.tourTabledataItem=new String(""),e.forEach((e=>{this.tourTabledataItem+=`\n        <tr class="tr__hover">\n            <td class="team__number">${e.id}</td>\n            <td>\n                <a href=""> \n                    <img src="${e.url}" class="img" alt="">                       \n                </a>\n            </td>\n            <td>\n                <a href="" class="team__number font__team">${e.team}</a>\n            </td>\n            <td class="team__number">${e.games_count}</td>\n            <td class="team__number">${e.points}</td>\n        </tr>\n      `})),this.tourTabledataItem}},a=`\n  <nav class="mobile-sidebar">\n    \x3c!-- MOBILE HAMBURGER --\x3e\n    <div class="mobile-sidebar__hamburger" id="mobile-sidebar__btn">\n      <div class="hamburger__item"></div>\n      <div class="hamburger__item"></div>\n      <div class="hamburger__item"></div>\n    </div>\n    \x3c!-- MOBILE HAMBURGER END --\x3e\n    \x3c!-- MOBILE SIDEBAR --\x3e\n    ${new t("mobile-sidebar__box").renderItems(["մեդիա","հֆֆ","հավաքականներ","մրցաշար","ակումբներ","ենթակառուցվածքներ"])}\n    \x3c!-- MOBILE SIDEBAR --\x3e\n  </nav>\n`,n=`\n  \x3c!-- FFA LOGO --\x3e\n  <div class="header__logo">\n    <a href="#">\n      <img src="${e.p+"a96fc1e1a88ec3196e0b33cf89bb38c6.png"}" alt="FFA Logo">\n    </a>\n  </div>\n  \x3c!-- FFA LOGO END --\x3e\n`,s=`\n  \x3c!-- HEADER --\x3e\n  <header class="header">\n    \x3c!-- CONTAINER --\x3e\n    <div class="header__row">\n      \x3c!-- HEADER ITEM --\x3e\n      <div class="header__item">\n        \x3c!-- HEADER ITEM TITLE --\x3e\n        <div class="header__item__title">\n          <h1><a href="#">հայաստանի ֆուտբոլի ֆեդերացիա</a></h1>\n          <h2><a href="#">հֆֆ</a></h2>\n        </div>\n        ${(new t).renderItems(["մեդիա","հֆֆ","հավաքականներ"])}\n      </div>\n      \x3c!-- HEADER ITEM END --\x3e\n      \x3c!-- HEADER ITEM --\x3e\n      <div class="header__item">\n        ${(new t).renderItems(["մրցաշար","ակումբներ","ենթակառուցվածքներ"])}\n        \x3c!-- HEADER ITEM REGISTRATION --\x3e\n        <div class="header__item__reg">\n          <a href="#" class="header__item__reg__item">\n            <i class="far fa-user"></i>\n            <span>Մուտք <span class="item-optional">| Գրանցում</span></span>\n          </a>\n        </div>\n      </div>\n      \x3c!-- HEADER ITEM END --\x3e\n      \x3c!-- MOBILE SIDEBAR --\x3e\n      ${a}\n      \x3c!-- MOBILE SIDEBAR END --\x3e\n    </div>\n    \x3c!-- CONTAINER END --\x3e\n    ${n}\n  </header>\n  \x3c!-- HEADER END --\x3e\n`,i=[{id:0,title:"Կանանց ազգային և Մ-19 հավաքականները սկսում են մարզական հավաքը",image:"https://www.ffa.am/images/q1iwq0ULznft65IagORJMVx8d5.jpg",link:"#",date:"10.06.2021"},{id:1,title:"Խոակին Կապառոս. «Շատ գոհ եմ մարզական հավաքի ընթացքից»",image:"https://www.ffa.am/images/eN2ZNrgC2FpFzKgGvZCbSJhv03.jpg",link:"#",date:"10.06.2021"},{id:2,title:"Հայաստանի հավաքականը պարտվեց Շվեդիայի ընտրանուն",image:"https://www.ffa.am/images/8HXeM0rrB2ojBvgYa0YI4ICKHK.jpeg",link:"#",date:"10.06.2021"},{id:3,title:"Տեղի ունեցավ ՀՖՖ կարգապահական և էթիկայի կոմիտեի նիստը",image:"https://www.ffa.am/images/dwiKddgtboPp2HAz3eRbTjVmak.jpg",link:"#",date:"10.06.2021"}];const l=new class{constructor(e,t,a=[]){this.data=e,this.sliderId=t,this.classes=a,this.slider=new String(""),this.sliderNav=new String("")}render(){return this.data.forEach((e=>{this.slider+=`\n        <div class="home-slider ${this.classes.join(" ")}" id="${this.sliderId}">\n          <a href="${e.link}" style="background-image:url(${e.image})">\n            <div class="slide__about-news">\n              <h4>${e.title}</h4>\n              <p class="slide__about-news__date">${e.date}</p>\n            </div>\n          </a>\n        </div>\n      `,this.sliderNav+=`\n        <li data-slide="${e.id}" class="${0===e.id?"current":""}">\n          ${e.title}\n        </li>\n      `})),`\n      <div class="slider" id="slider">\n        <div class="slider-wrapper" id="slider-wrapper">\n          ${this.slider}\n        </div>\n        <ul class="slider-nav" id="slider-nav">\n          ${this.sliderNav}\n        </ul>\n      </div>\n    `}}(i,"slider",["slide"]).render(),r=[{id:0,link:"#",status:"Ֆուտբոլ",tournament:"Ընտրական փուլ",cup:"Աշխարհի գավաթ",teamOne:{flag:"https://www.ffa.am/uploaded/Armenia.jpg",name:"Հայաստան",score:"2"},teamTwo:{flag:"https://www.ffa.am/uploaded/Iceland.jpg",name:"Իսլանդիա",score:"0"},date:"28.03.2021",stadium:"Հանրապետական մարզադաշտ"},{id:1,link:"#",status:"Ֆուտբոլ",tournament:"Ընտրական փուլ",cup:"Աշխարհի գավաթ",teamOne:{flag:"https://www.ffa.am/uploaded/Armenia.jpg",name:"Հայաստան",score:"3"},teamTwo:{flag:"https://www.ffa.am/uploaded/Romania.jpg",name:"Ռումինիա",score:"2"},date:"31.03.2021",stadium:"Հանրապետական մարզադաշտ"},{id:2,link:"#",status:"Ֆուտբոլ",tournament:"Ընկերական հանդիպում",teamOne:{flag:"https://www.ffa.am/uploaded/2018/Croatia.jpg",name:"Խորվաթիա",score:"1"},teamTwo:{flag:"https://www.ffa.am/uploaded/Armenia.jpg",name:"Հայաստան",score:"1"},date:"01.06.2021",stadium:"Վելիկա Գորիցա (Խորվաթիա)"},{id:3,link:"#",status:"Ֆուտբոլ",tournament:"Ընկերական հանդիպում",teamOne:{flag:"https://www.ffa.am/uploaded/2018/Sweden.jpg",name:"Շվեդիա",score:"3"},teamTwo:{flag:"https://www.ffa.am/uploaded/Armenia.jpg",name:"Հայաստան",score:"1"},date:"05.06.2021",stadium:"Ֆրենդս Արենա (Շվեդիա)"},{id:4,link:"#",status:"Կանանց ֆուտբոլ",tournament:"Ընկերական հանդիպում",teamOne:{flag:"https://www.ffa.am/uploaded/Armenia.jpg",name:"Հայաստան",score:"2"},teamTwo:{flag:"https://www.ffa.am/uploaded/Kazakhstan.jpg",name:"Ղազախստան",score:"1"},date:"15.06.2021",stadium:"Հանրապետական մարզադաշտ"},{id:5,link:"#",status:"Ֆուտբոլ",tournament:"Ընտրական փուլ",cup:"Աշխարհի գավաթ",teamOne:{flag:"https://www.ffa.am/uploaded/North%20Macedonia.jpg",name:"Հս․ Մակեդոնիա"},teamTwo:{flag:"https://www.ffa.am/uploaded/Armenia.jpg",name:"Հայաստան"},date:"02.09.2021",stadium:"-"},{id:6,link:"#",status:"Ֆուտբոլ",tournament:"Ընտրական փուլ",cup:"Աշխարհի գավաթ",teamOne:{flag:"https://www.ffa.am/uploaded/Germany.jpg",name:"Գերմանիա"},teamTwo:{flag:"https://www.ffa.am/uploaded/Armenia.jpg",name:"Հայաստան"},date:"05.09.2021",stadium:"Որդե ուզենք"}];const o=`\n  <section class="calendar-section">\n    <div class="calendar-section__title">\n      <h3>Առաջիկա հանդիպումները</h3>\n    </div>\n  </section>\n  <div class="national-calendar" id="nationalCalendar">\n    <div class="national-calendar__next-prev">\n      <button id="slider-prev">\n        <i class="fas fa-chevron-left"></i>\n      </button>\n      <button id="slider-next">\n        <i class="fas fa-chevron-right"></i>\n      </button>\n    </div>\n    <div class="national-calendar__wrapper" id="slider-wrapper">\n      ${new class{constructor(e,t=[]){this.data=e,this.classes=t,this.box=new String("")}render(){return this.data.forEach((e=>{this.box+=`\n        \x3c!-- National calendar item --\x3e\n        <div class="matchesBox ${this.classes.join(" ")}" id="${e.id}" style="margin-right: 55px">\n          <a href="${e.link}">\n            <div class="matchesBox__header">\n              <p class="matchesBox__header__discipline">${e.status}</p>\n              <p class="matchesBox__header__tournament">\n                ${e.tournament} ${void 0!==e.cup?`: ${e.cup}`:""}\n              </p>\n            </div>\n            <div class="matchesBox__main">\n              <div class="matchesBox__main__team">\n                <img src="${e.teamOne.flag}" alt="">\n                <span>${e.teamOne.name}</span>\n              </div>\n              <div class="matchesBox__main__score">\n                <span>\n                  ${void 0!==e.teamOne.score&&void 0!==e.teamTwo.score?e.teamOne.score+" : "+e.teamTwo.score:"  -  "}\n                </span>\n              </div>\n              <div class="matchesBox__main__team">\n                <span>${e.teamTwo.name}</span>\n                <img src="${e.teamTwo.flag}" alt="">\n              </div>\n            </div>\n            <div class="matchesBox__footer">\n              <p class="matchesBox__footer__date">${e.date}</p>\n              <p class="matchesBox__footer__stadium">${e.stadium}</p>\n            </div>\n          </a>\n        </div>\n        \x3c!-- National calendar item end --\x3e\n      `})),this.box}}(r,["slide"]).render()}\n    </div>\n  </div>\n`,d=[{url:"https://www.ffa.am/images/cGHEc3g5RzSBsU3w8sn0goLHWE.jpeg",title1:"Կանանց Հայաստանի ազգային հավաքականը հաղթեց Ղազախստանին",title2:"Հունիսի 12-ին` Վազգեն Սարգսյանի անվան «Հանրապետական» մարզադաշտում, կայացավ ընկերական հանդիպում կանանց Հայաստանի և Ղազախստանի ազգային հավաքականների միջև:",data:"12.06.2021"},{url:"https://www.ffa.am/images/ChG5h65OCGNogSqyuVx7vWutIY.jpg",title1:"ՀՖՖ Գլխավոր քարտուղար Արթուր Ազարյանը՝ Եվրո-2020-ի ՈՒԵՖԱ-ի պատվիրակ",title2:"Այսօր մեկնարկում է Եվրո-2020-ը: Հայաստանի ֆուտբոլի ֆեդերացիան նույնպես ներկայացված կլինի տարվա ֆուտբոլային կարևորագույն մրցաշարի ընթացքում:",data:"11.06.2021"},{url:"https://www.ffa.am/images/w6t55FpIslWJPSwakRPZuiHP3l.jpg",title1:"Հայաստանի Մ-21 հավաքականն անցկացրեց նախախաղային մարզումը",title2:"ՈւԵՖԱ ԵՎՐՈ Մ-21 2023-ի որակավորման խմբային փուլի առաջին մրցափուլի Ֆարերյան կղզիներ  հունիսի 7-ին` Տոֆտիր քաղաքի «Քաղաքային» մարզադաշտում, կայացավ Հայաստանի Մ-21 հավաքականի նախախաղային մարզումը:",data:"07.06.2021"},{url:"https://www.ffa.am/images/XCnPF57hKtqtP72tq2ww5zuMkX.jpg",title1:"Հայաստանի հավաքականը պարտվեց Շվեդիայի ընտրանուն",title2:"Հունիսի 5-ին՝ Սոլնա քաղաքի «Ֆրենդս Արենա» մարզադաշտում, կայացավ ընկերական հանդիպում Շվեդիայի և Հայաստանի ազգային հավաքականների միջև։ Հանդիպումն ավարտվեց Շվեդիայի հավաքականի հաղթանակով 3։1 հաշվով",data:"06.06.2021"}],c=[{id:1,url:"https://yeraguyn.com/wp-content/uploads/2015/02/flag-armenia-hayastan-ararat.jpg",team:"Հայաստան",games_count:"3",points:"9"},{id:2,url:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png",team:"Գերմանիա",games_count:"3",points:"6"},{id:3,url:"https://codahosted.io/docs/9_S8VcUEyi/blobs/bl-VXLw0GGHx7/c825728e30da3b37198a10fa8e45b68d4465d57f6d70dc351ea449cfbb3376b6ea470617d905f01d1e94c7cff7735f9a8f7025cd31b7f077b9546c5f1c296072a40f1fb7f5bdd49ecd21dfd4d51576a3fe8490e00fe8e2062e03b77d8a8fb8066595429d",team:"Հ .Մակեդոնիա",games_count:"3",points:"6"},{id:4,url:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Flag_of_Liechtenstein.svg/1200px-Flag_of_Liechtenstein.svg.png",team:"Իսլանդիա",games_count:"3",points:"3"},{id:5,url:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flag_of_Romania.svg/1200px-Flag_of_Romania.svg.png",team:"Ռումինիա",games_count:"3",points:"3"},{id:6,url:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Flag_of_Liechtenstein.svg/1200px-Flag_of_Liechtenstein.svg.png",team:"Լիխտենշտեյն",games_count:"3",points:"0"}],m=[{id:1,url:"https://upload.wikimedia.org/wikipedia/ru/thumb/7/7f/FC_Alashkert_Logo.svg/1200px-FC_Alashkert_Logo.svg.png",team:"Ալաշկերտ",games_count:"24",points:"46"},{id:2,url:"https://upload.wikimedia.org/wikipedia/commons/e/e8/FC_Noah-logo.png",team:"Նոա",games_count:"24",points:"41"},{id:3,url:"https://pbs.twimg.com/profile_images/1326411504988647424/tlNuKgpq_400x400.jpg",team:"ՈՒրարտու",games_count:"24",points:"41"},{id:4,url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjdNJfRxZ656OXOqWM7pIjicE8-Wj-W3C11bdzjDJdLCEFJL7LxinTGe0wle1t-yQNXTI&usqp=CAU",team:"Արարատ",games_count:"24",points:"40"},{id:5,url:"https://logowik.com/content/uploads/images/fc-ararat-armenia-yerevan.jpg",team:"Ա.Արմենիա",games_count:"24",points:"38"},{id:6,url:"https://1.bp.blogspot.com/-naKKCwGqkOY/X0BI43ftfiI/AAAAAAAAEYI/yfyH8mYHvc46g5dsGOwILVoIFYueWur-ACLcBGAsYHQ/s1600/FC%2BVAN%2BCHARENTSAVAN.png",team:"Վան",games_count:"24",points:"31"},{id:7,url:"https://upload.wikimedia.org/wikipedia/fr/archive/6/63/20190427194543%21FC_Pyunik_logo_2018.png",team:"Փյունիկ",games_count:"24",points:"25"},,{id:8,url:"https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/Logo_of_Football_Club_Lori_Vanadzor_%282017-_%29.png/220px-Logo_of_Football_Club_Lori_Vanadzor_%282017-_%29.png",team:"Լոռի ՖԱ",games_count:"24",points:"23"},{id:9,url:"https://logoeps.com/wp-content/uploads/2013/09/shirak-fc-vector-logo.png",team:"Շիրակ",games_count:"24",points:"13"}],_=`\n    <section class="calendar-section">\n        <div class="calendar-section__title">\n        <h3>Նորություններ</h3>\n        </div>\n    </section>\n    <section class= "news__section__block">\n        <section class= "news__big__block">\n            ${`\n  \x3c!-- BLOKS --\x3e\n      ${(new t).renderbigNewsBlockItems(d)}\n  \x3c!-- BLOKS END --\x3e\n`}\n        </section>\n        <aside class= "news__table__block">\n            ${`\n<div class="table">\n    <div class="tourn__tbl__title">ՖԻՖԱ Աշխարհի Գավաթ</div>            \n    <div class="tourn__tbl__cont">\n        <table>\n            <tbody>\n                <tr>\n                    <th class="team__tytle">№</th>\n                    <th colspan="2" style="text-align: left;" class="team__tytle">Թիմեր</th>\n                    <th class="team__tytle">Խ</th>\n                    <th class="team__tytle">Մ</th>\n                </tr>\n                ${(new t).renderTourTabledataItem(c)}\n            </tbody>\n        </table>\n        <div class="fin__div">\n            <a class="fin__a">ՀԱՎԱՔԱԿԱՆՆԵՐ</a>\n        </div>\n    </div>\n</div>\n\n`}\n            ${`\n<div class="table">\n    <div class="tourn__tbl__title">Հայաստանի Պրեմիեր Լիգա</div>            \n    <div class="tourn__tbl__cont">\n        <table>\n            <tbody>\n                \n                <tr>\n                    <th class="team__tytle">№</th>\n                    <th colspan="2" style="text-align: left;" class="team__tytle">Թիմեր</th>\n                    <th class="team__tytle">Խ</th>\n                    <th class="team__tytle">Մ</th>\n                </tr>\n                ${(new t).renderTourTabledataItem(m)}\n            </tbody>\n        </table>\n        <div class="fin__div">\n            <a class="fin__a">ԱԿՈՒՄԲՆԵՐ</a>\n        </div>\n    </div>\n</div>\n\n`}\n        </aside>\n    </section>\n    \n`,p=[{url:"https://www.ffa.am/images/cGHEc3g5RzSBsU3w8sn0goLHWE.jpeg",title:"Կանանց Հայաստանի ազգային հավաքականը հաղթեց Ղազախստանին",data:"12.06.2021"},{url:"https://www.ffa.am/images/ChG5h65OCGNogSqyuVx7vWutIY.jpg",title:"ՀՖՖ Գլխավոր քարտուղար Արթուր Ազարյանը՝ Եվրո-2020-ի ՈՒԵՖԱ-ի պատվիրակ",data:"11.06.2021"},{url:"https://www.ffa.am/images/w6t55FpIslWJPSwakRPZuiHP3l.jpg",title:"Հայաստանի Մ-21 հավաքականն անցկացրեց նախախաղային մարզումը",data:"07.06.2021"},{url:"https://www.ffa.am/images/XCnPF57hKtqtP72tq2ww5zuMkX.jpg",title:"Հայաստանի հավաքականը պարտվեց Շվեդիայի ընտրանուն",data:"06.06.2021"},{url:"https://www.ffa.am/thumbs/150x/T7v7rbk4CbbNGwozcDUBaC15Nz.jpg",title:"Հայաստանի Մ-21 հավաքականը ժամանեց Ֆարերյան կղզիներ",data:"05.06.2021"},{url:"https://www.ffa.am/thumbs/220x/QnmnrMd0J0G62Wz6mGPxEvbSO3.jpg",title:"Շվեդիա-Հայաստան հանդիպումը կսպասարկեն ֆինլանդացի մրցավարները",data:"05.06.2021"}],h=`\n  \x3c!-- BLOKS --\x3e\n        ${(new t).rendersmallNewsBlockItem(p)}\n  \x3c!-- BLOKS END --\x3e\n`;const f=class{constructor(e){this.banner=e}init(){return`\n      <div class="banner">\n        <a href="${this.banner.link}" class="banner__link" target="_blank" style="background-image:url(${this.banner.image})">\n          <p class="banner__text">${this.banner.text}</p>\n        </a>\n      </div>\n    `}},g={link:"https://tickets.ffa.am/",image:"https://www.ffa.am/thumbs/233x150/Pibd5j5iwFrCK40i09nTK3cARk.jpg",text:"Տոմսերի օնլայն վաճառք"},w=`\n  <section class="main-section">\n    ${o}\n    ${_}\n    ${`\n  <section class="calendar-section">\n    <div class="calendar-section__title">\n      <h3>Վերջին նորությունները</h3>\n      </div>\n    </section>\n    <section class= "news__section__block">\n    <section class= "news__big__block">\n        ${h}\n    </section>\n    <aside class= "news__table__block">\n        ${new f({link:"https://fanshop.ffa.am/hy/",image:"https://www.ffa.am/thumbs/233x150/WYG7pEh7aBTgca0R83vtPA33xH.jpg",text:"Ֆան խանութ"}).init()}\n        ${new f(g).init()}\n    </aside>\n  </section>\n`}\n  </section>\n`,u=e.p+"9d201425e6fe80f15a95c47a5bb71df3.png",b=e.p+"28a778a37c59c455da04ba2fa2b61e3f.png",v=e.p+"355646836e91078f65a5f079bf9406bf.png",x=`\n<div class="partners">\n        <div class="partners__blok">\n            <img src="${u}" class="partners__blok__item">\n            <img src="${e.p+"16f25212af5e5c39d29ef275b8f0f937.png"}" class="partners__blok__item">\n            <img src="${b}" class="partners__blok__item">\n            <img src="${v}" class="partners__blok__item">\n        </div>\n</div>\n\n`,k=[{title:"Մեդիա",items:["ՀՖՖ TV","Տեսանյութեր","Լուսանկարներ"]},{title:"Գործընկերներ",items:["Գլխավոր հովանավոր","Պաշտոնական հեռարձակող","Բյուրեղ"]},{title:"Հայաստանը",items:["Հայաստանի մասին"]},{title:"Հղումներ",items:["Հյուրանոցներ","«Զվարթնոց» միջազգային օդանավակայան","ՀՀ արտաքին գործերի նախարարություն","Հայաստանի Կենտրոնական բանկ"]},{title:"Սոցիալական Մեդիա",items:["Facebook","Twitter","Youtube","Instagram","Linkedin","VKontakte"]}],I=`\n  \x3c!-- FOOTER --\x3e\n  <div class="footer">\n    <div class="footer__row">\n        <div class="footer__item">\n        <i class="fab fa-vk footer__item__title"></i>\n        <i class="fab fa-odnoklassniki footer__item__title"></i>\n        <i class="fab fa-facebook-f footer__item__title"></i>\n        <i class="fab fa-instagram footer__item__title"></i>\n        <i class="fab fa-twitter footer__item__title"></i>\n        <i class="fab fa-youtube footer__item__title"></i>\n        <i class="fab fa-telegram-plane footer__item__title"></i>\n        </div>\n    </div>\n        ${(new t).renderFooterItems(k)}\n  </div>\n  \x3c!-- FOOTER END --\x3e\n`;const E=class{constructor(){this.components=[s,l,w,x,I]}build(){const e=document.getElementById("app");return this.components.forEach((t=>e.insertAdjacentHTML("beforeend",t))),this}renderClasses(){return this.classes.forEach((e=>e.init())),this}};const $=class{constructor(e,t){this.block=e,this.stickyClass=t}init(){const e=document.querySelector(this.block),t=this.stickyClass,a=e.offsetHeight;window.addEventListener("scroll",(function(){window.pageYOffset>=a?e.classList.add(t):e.classList.remove(t)}))}};const y=class{constructor(e,t){this.btnId=e,this.boxId=t}init(){const e=document.getElementById(this.btnId),t=document.getElementById(this.boxId),a=document.querySelector("body");e.addEventListener("click",(()=>{e.classList.contains("sidebar-opened")?(e.classList.remove("sidebar-opened"),t.style.display="none",a.style.overflow="scroll"):(e.classList.add("sidebar-opened"),t.style.display="flex",a.style.overflow="hidden")}))}};const A=class{constructor(e,t=!1){this.el=document.querySelector(e),this.nextPrev=t}init(){this.links=this.el.querySelectorAll("#slider-nav li"),this.wrapper=this.el.querySelector("#slider-wrapper"),this.navigate(),this.nextPrev&&(this.next(),this.prev())}navigate(){for(let e=0;e<this.links.length;++e){let t=this.links[e];this.slide(t)}}slide(e){let t=this;e.addEventListener("click",(function(e){e.preventDefault();t.setCurrentLink(this);let a=parseInt(this.getAttribute("data-slide"),10)+1,n=t.el.querySelector(`.slide:nth-child(${a})`);t.wrapper.style.left=`-${n.offsetLeft}px`}),!1)}next(){let e=this;e.el.querySelector("#slider-next").addEventListener("click",(function(t){t.preventDefault();let a=e.el.querySelector(".slide");e.el.querySelector("#slider-wrapper");const n=parseInt(""===e.wrapper.style.left?0:e.wrapper.style.left),s=parseInt(a.offsetWidth),i=parseInt(a.style.marginRight);e.el.offsetWidth+Math.abs(n)+s>=e.wrapper.offsetWidth?e.wrapper.style.left="0px":e.wrapper.style.left=n-(s+i)+"px"}),!1)}prev(){let e=this;e.el.querySelector("#slider-prev").addEventListener("click",(function(t){t.preventDefault();let a=e.el.querySelector(".slide");e.el.querySelector("#slider-wrapper");const n=parseInt(""===e.wrapper.style.left?0:e.wrapper.style.left),s=parseInt(a.offsetWidth),i=parseInt(a.style.marginRight);console.log(Math.abs(n)),0===Math.abs(n)?e.wrapper.style.left=`-${e.wrapper.offsetWidth-e.el.offsetWidth-i}px`:e.wrapper.style.left=`${n+(s+i)}px`}),!1)}setCurrentLink(e){const t=e.parentNode.querySelectorAll("li");e.className="current";for(let a=0;a<t.length;++a){let n=t[a];n!==e&&(n.className="")}}};(new E).build(),new $("header","header-sticky").init(),new y("mobile-sidebar__btn","mobile-sidebar__box").init(),new A("#slider").init(),new A("#nationalCalendar",!0).init()})();