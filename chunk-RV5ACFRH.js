import{a as B}from"./chunk-V7LB5VJZ.js";import{h as V,i as $,j as z,k as L,o as F,r as O,s as _,u as o,v as a,w as M}from"./chunk-OURASIEO.js";import{k as j,m as I,n as R}from"./chunk-ZER3YNZK.js";import{$ as x,$a as A,Ca as r,Da as f,K as D,Ka as w,Sa as m,Za as s,_a as l,ab as E,bb as u,ja as c,jb as p,k as P,ka as g,nb as T,ob as d,r as C,rb as v,s as k,sb as y,y as G}from"./chunk-2ORK7CGT.js";var W=[O("animateMenu",[a("desktop-alone",o({width:"70%"})),a("mobile-alone",o({width:"70%"})),a("desktop-two",o({width:"30%"})),a("mobile-two",o({width:"100%"})),M("desktop-alone <=> desktop-two",[_("2s")]),M("mobile-alone <=> mobile-two",[_("2s")])]),O("animateGameSection",[a("desktop-alone",o({display:"none",width:"10%"})),a("mobile-alone",o({display:"none",width:"10%"})),a("desktop-two",o({display:"block",width:"70%"})),a("mobile-two",o({display:"block",width:"100%"})),M("desktop-alone <=> desktop-two",[_("2s")]),M("mobile-alone <=> mobile-two",[_("2s")])])];function Q(){return W}var X=i=>({"container-opts":i}),S=i=>({active:i});function Y(i){let e=window.matchMedia(i);return G(e,"change").pipe(C(t=>t.matches),D(e.matches))}var Z=Y("(max-width: 576px)"),q=Z.pipe(C(i=>i?"mobile":"desktop")),N=class i{constructor(e,t,n){this._shareDataService=e;this._activatedroute=t;this._router=n}displayingAGame="";gselected=!1;childSelected=!1;menu_opts=!1;signalOutlet=w(!1);copyMenuStatusSig=w("");menuDisplaySubj=new P("alone");menuDisplay$=this.menuDisplaySubj.asObservable();displayV=!1;xMouse=0;yMouse=0;cMouse={x:this.xMouse,y:this.yMouse};nameTagsMenu=[""];menuDisplayAnimState$=k([this.menuDisplay$,q]).pipe(C(([e,t])=>`${t}-${e}`));ngOnInit(){console.log("****** ngOnInit - Parent"),console.log("Signal game selected: ",this._shareDataService.getSelectedGame());let t=this._router.routerState.snapshot.url.split("/");console.log("Spliiit: ",t),this.nameTagsMenu=["gamettt","gamegw","gamebl"],t[2]&&(this.updateSelectionGame("two"),this.displayingAGame=t[2],this.gselected=!0,this.menu_opts=!0)}ngAfterViewChecked(){}selectingAGame(e=""){this.displayingAGame=e,this.setGame()}setGame(){this.gselected=!0,console.log("selecting game: menu str"),this.updateSelectionGame("two"),setTimeout(()=>{this.menu_opts=!0},500)}updateSelectionGame(e){let t=e||"alone";console.log("Update: ",e),this.menuDisplaySubj.next(t)}onMouseTracking(e){this.xMouse=e.clientX,this.yMouse=e.clientY,this.cMouse={x:this.xMouse,y:this.yMouse}}returnCoordinatesMouse(){return this.cMouse}ngOnDestroy(){this._shareDataService.setisGameZoneExpanded(!1),this._shareDataService.setSelectedGame(""),console.log("Signal game selected: ",this._shareDataService.getSelectedGame())}static \u0275fac=function(t){return new(t||i)(f(B),f(V),f(z))};static \u0275cmp=x({type:i,selectors:[["app-games"]],standalone:!0,features:[T],decls:23,vars:18,consts:[["gamettt",""],["gamegw",""],["gamebl",""],[1,"container-fluid","wrapper-nm-games"],[1,"row","justify-content-center"],[1,"col-12",3,"mousemove","ngClass"],[1,""],[1,"ul-menu-games"],[1,"li-game",3,"ngClass"],["routerLink","tictactoe",1,"game-ttt-bckg",3,"click"],[1,"li-game",2,"justify-self","end",3,"ngClass"],["routerLink","guessword",1,"game-gw-bckg",3,"click"],["routerLink","buildletter",1,"game-comingsoon",3,"click"]],template:function(t,n){if(t&1){let h=E();s(0,"div",3)(1,"div",4)(2,"div",5),v(3,"async"),u("mousemove",function(U){return c(h),g(n.onMouseTracking(U))}),s(4,"h1",6),p(5," Select a Game "),l(),s(6,"div")(7,"ul",7)(8,"li",8,0)(10,"a",9),u("click",function(){return c(h),g(n.selectingAGame("tictactoe"))}),p(11," Tic-tac-toe "),l()(),s(12,"li",10,1)(14,"a",11),u("click",function(){return c(h),g(n.selectingAGame("guessword"))}),p(15," Guess the word! "),l()(),s(16,"li",8,2)(18,"a",12),u("click",function(){return c(h),g(n.selectingAGame("buildletter"))}),p(19," Build your letter "),l()()()()(),s(20,"div"),v(21,"async"),A(22,"router-outlet"),l()()()}t&2&&(r(2),m("@animateMenu",y(3,6,n.menuDisplayAnimState$))("ngClass",d(10,X,n.menu_opts)),r(6),m("ngClass",d(12,S,n.displayingAGame=="tictactoe")),r(4),m("ngClass",d(14,S,n.displayingAGame=="guessword")),r(4),m("ngClass",d(16,S,n.displayingAGame=="buildletter")),r(4),m("@animateGameSection",y(21,8,n.menuDisplayAnimState$)))},dependencies:[F,$,L,R,j,I],styles:[".wrapper-nm-games[_ngcontent-%COMP%]{height:100%;text-align:center;font-size:3rem}.ul-menu-games[_ngcontent-%COMP%]{padding-left:0}.ul-menu-games[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{list-style-type:none;margin-top:2rem;width:80%;display:flex;border-bottom:3px solid #9E9E9E;font-family:IM Fell Great Primer SC;letter-spacing:.5rem}.ul-menu-games[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{border-bottom:3px solid rgb(0,150,136)}.ul-menu-games[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:block;width:100%;padding:3rem 1rem;color:#fff;text-decoration:none;text-transform:uppercase}.ul-menu-games[_ngcontent-%COMP%]   li.li-game.active[_ngcontent-%COMP%]{background:#8e0e901a;border-bottom:3px solid rgb(142,14,144)}.ul-menu-games[_ngcontent-%COMP%]   li.li-game.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .ul-menu-games[_ngcontent-%COMP%]   li.li-game.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active{font-weight:700}.game-ttt-bckg[_ngcontent-%COMP%]{background-image:url(/assets/Tttn_bckg.png);background-size:cover;background-position:center}.game-gw-bckg[_ngcontent-%COMP%]{background-image:url(/assets/guessgwd_bckg.png);background-size:contain;background-position:center;background-repeat:space}.container-opts[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:3rem}.container-opts[_ngcontent-%COMP%]   .ul-menu-games[_ngcontent-%COMP%]{font-size:2rem}.container-opts[_ngcontent-%COMP%]   .ul-menu-games[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:100%}@media (max-width: 768px){.wrapper-nm-games[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2rem}.ul-menu-games[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:2rem;line-height:3rem;width:100%}.ul-menu-games[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:1rem}}@media (max-width: 576px){.ul-menu-games[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-top:0}.container-opts[_ngcontent-%COMP%]   .ul-menu-games[_ngcontent-%COMP%]{display:flex}.container-opts[_ngcontent-%COMP%]   .ul-menu-games[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:1rem}.container-opts[_ngcontent-%COMP%]   .ul-menu-games[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:.5rem;line-height:1.2rem;background-image:none}}"],data:{animation:Q()}})};export{N as GamesComponent};
