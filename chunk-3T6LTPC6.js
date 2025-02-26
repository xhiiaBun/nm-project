import{a as N,b as G}from"./chunk-RBVZS6VS.js";import{a as j}from"./chunk-KTWWAH56.js";import{k as L,n as V}from"./chunk-S26RCWH2.js";import{$a as f,F as q,Fa as r,Ga as Q,Na as z,Sa as _,T as E,Va as p,Y as F,Ya as v,Za as h,_a as C,ab as o,ba as u,bb as i,cb as x,db as I,eb as A,fb as m,ka as T,la as w,ma as y,mb as l,nb as c,ob as g,qb as d,rb as B,sb as D,ua as k}from"./chunk-DZB7LW3D.js";function $(n,e){if(n&1&&(o(0,"div",1)(1,"div",2),l(2),i()()),n&2){let t=e.$implicit;r(2),g(" ",t," ")}}var b=class n{data=k([]);constructor(){}ngOnInit(){console.log("Dataa: ",this.data())}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=u({type:n,selectors:[["quotes"]],inputs:{data:[1,"data"]},standalone:!0,features:[d],decls:3,vars:0,consts:[[1,"wrapper-qcollection"],[1,"col-md-4","col-xs-12","inquote"],[1,"single-quote"]],template:function(t,a){t&1&&(o(0,"div",0),C(1,$,3,1,"div",1,h),i()),t&2&&(r(),f(a.data()))},styles:[".wrapper-qcollection[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:space-evenly;align-items:baseline}.inquote[_ngcontent-%COMP%]{font-size:1.5rem;font-family:IM Fell Great Primer SC;margin-bottom:.5rem;padding:.5rem}.single-quote[_ngcontent-%COMP%]{background:#008b8b4d;padding:.5rem}@media (max-width: 576px){.inquote[_ngcontent-%COMP%]{font-size:1.2rem}}"]})};var M=class n{data={};authorInfo;constructor(){}ngOnInit(){console.log("Data: ",this.data),this.authorInfo=this.data}ngOnChanges(e){console.log("Changes:: ",e),this.authorInfo=e.data.currentValue}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=u({type:n,selectors:[["author"]],inputs:{data:"data"},standalone:!0,features:[T,d],decls:22,vars:4,consts:[[1,"wrapper-author"]],template:function(t,a){t&1&&(o(0,"div",0)(1,"h3"),l(2),i(),o(3,"div"),l(4,"Img"),i(),o(5,"div")(6,"table")(7,"tr")(8,"th"),l(9,"Pen Names:"),i(),o(10,"td"),l(11),i()(),o(12,"tr")(13,"th"),l(14,"Professions:"),i(),o(15,"td"),l(16),i()(),o(17,"tr")(18,"th"),l(19,"Books:"),i(),o(20,"td"),l(21),i()()()()()),t&2&&(r(2),c(a.authorInfo.name),r(9),c(a.authorInfo.penNames),r(5),c(a.authorInfo.professions),r(5),c(a.authorInfo.publications))},styles:[".wrapper-author[_ngcontent-%COMP%]{padding:.5rem;border:1px solid red}"]})};var O=class n{constructor(e){this._http=e}awsUrl=G.AWS_API_AUTHORS;requestAuthors(){let e=this.awsUrl+"/authors";return this._http.get(e)}static \u0275fac=function(t){return new(t||n)(F(j))};static \u0275prov=E({token:n,factory:n.\u0275fac,providedIn:"root"})};var W=(n,e)=>({"collection-quotes-wauthor":n,"collection-quotes":e}),J=n=>({active:n});function K(n,e){n&1&&x(0,"raven-loading")}function X(n,e){if(n&1){let t=I();o(0,"div",6)(1,"button",15),A("click",function(){let s=w(t).$implicit,P=m(2);return y(P.viewAuthorsByInitial(s))}),l(2),i()()}if(n&2){let t=e.$implicit,a=m(2);r(),p("ngClass",B(2,J,a.initialLetter==t)),r(),g(" ",t," ")}}function Y(n,e){if(n&1){let t=I();o(0,"button",16),A("click",function(){let s=w(t).$implicit,P=m(2);return y(P.selectAuthor(s.name))}),o(1,"span"),l(2),i()()}if(n&2){let t=e.$implicit;r(2),c(t.name)}}function Z(n,e){n&1&&(o(0,"div"),l(1," There is not authors with that Initial, yet "),i())}function tt(n,e){if(n&1&&(o(0,"div",12),x(1,"author",14),i()),n&2){let t=m(2);r(),p("data",t.singleAuthor)}}function et(n,e){if(n&1&&(o(0,"div",3)(1,"div",4)(2,"div",5)(3,"h2"),l(4,"Author"),i()(),o(5,"div",3),C(6,X,3,4,"div",6,h),i()(),o(8,"div",7)(9,"div",3)(10,"div",8),l(11),i(),o(12,"div",9)(13,"div",10),C(14,Y,3,1,"button",11,h),_(16,Z,2,0,"div"),i()()(),o(17,"div",3),_(18,tt,2,1,"div",12),o(19,"div",13),x(20,"quotes",14),i()()()()),n&2){let t=m();r(6),f(t.letters),r(5),g(" ",t.initialLetter," "),r(3),f(t.contentAuthors),r(2),v((t.contentAuthors==null?null:t.contentAuthors.length)<=0?16:-1),r(2),v(t.singleAuthor?18:-1),r(),p("ngClass",D(5,W,t.singleAuthor,!t.singleAuthor)),r(),p("data",t.quotesCollection)}}var U=class n{constructor(e){this._authorService=e}keyArrayLetters="ABCDEFGHIJKLMNOPQRSTUVWXYZ";letters=[];contentAuthors;filterAuthors;responseAuthors;initialLetter="";quotesCollection=[];dataLoaded=!1;singleAuthor=null;signalAuthor=z(Object);ngOnInit(){this.letters=[...this.keyArrayLetters],this.letters.unshift("all"),this.initialLetter="all",this._authorService.requestAuthors().pipe(q(1)).subscribe(e=>{this.responseAuthors=e,this.contentAuthors=this.filterByAuthorQuotes(e),this.filterAuthors=[...this.contentAuthors],this.quotesCollection=this.collectQuotes(this.contentAuthors),this.dataLoaded=!0})}viewAuthorsByInitial(e){this.singleAuthor=null,this.initialLetter=e,this.contentAuthors=this.filterByAuthorQuotes(this.responseAuthors,e),this.filterAuthors=[...this.contentAuthors],this.quotesCollection=this.collectQuotes(this.contentAuthors)}filterByAuthorQuotes(e,t="all"){return[...e].filter(s=>{if(t=="all")return s;if(this.validateValuesMatching(s.name.at(0),t))return s})}collectQuotes(e){let t=[];return[...e].forEach(a=>{t=[...t,...a.quotes]}),t}selectAuthor(e){let t=[...this.filterAuthors].filter(a=>a.name==e);this.singleAuthor=t[0],this.signalAuthor.set(t[0]),console.log("Single author:: ",this.singleAuthor,this.signalAuthor()),this.quotesCollection=this.collectQuotes(t)}validateValuesMatching(e,t){let a=!1;return a=e==t,a}static \u0275fac=function(t){return new(t||n)(Q(O))};static \u0275cmp=u({type:n,selectors:[["app-collection"]],standalone:!0,features:[d],decls:8,vars:1,consts:[[1,"container-fluid","wrapper-nm-collection"],[1,"row","justify-content-center","text-center"],[1,"col-12"],[1,"row"],[1,"col-3"],[1,"details-authors"],[1,"col-md-4","col-xs-6","wrapper-abc-authors"],[1,"col-9"],[1,"col-lg-3","col-md-4","col-xs-12","wr-initial"],[1,"col-lg-9","col-md-8","col-xs-12","wr-author"],[1,"cont-auth"],[1,"btn","btn-inauthor"],[1,"author-info"],[3,"ngClass"],[3,"data"],[1,"btn","btn-author",3,"click","ngClass"],[1,"btn","btn-inauthor",3,"click"]],template:function(t,a){t&1&&(o(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h1"),l(5,"Quotes Collection"),i()(),_(6,K,1,0,"raven-loading")(7,et,21,8,"div",3),i()()()),t&2&&(r(6),v(a.dataLoaded?7:6))},dependencies:[V,L,N,b,M],styles:[".wrapper-nm-collection[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:4rem}.details-authors[_ngcontent-%COMP%]{text-align:start;font-family:IM Fell Great Primer SC}.btn-author[_ngcontent-%COMP%]{width:100%;font-family:IM Fell Great Primer SC;border:1px solid #9C27B0;color:#e4acee;font-size:2rem;padding:.5rem;margin-bottom:.5rem}.btn-author.active[_ngcontent-%COMP%]   .btn-author[_ngcontent-%COMP%]:focus-visible, .btn-author[_ngcontent-%COMP%]:hover, .btn-author[_ngcontent-%COMP%]:focus, .btn-author[_ngcontent-%COMP%]:focus-within{outline:1px solid #fff}.btn-inauthor.active[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]   .btn-inauthor[_ngcontent-%COMP%]:focus-visible > span[_ngcontent-%COMP%], .btn-inauthor[_ngcontent-%COMP%]:hover > span[_ngcontent-%COMP%], .btn-inauthor[_ngcontent-%COMP%]:focus > span[_ngcontent-%COMP%], .btn-inauthor[_ngcontent-%COMP%]:focus-within > span[_ngcontent-%COMP%]{border-bottom:4px solid darkcyan}.cont-auth[_ngcontent-%COMP%]{max-height:7rem;overflow:auto}.wr-initial[_ngcontent-%COMP%]{font-size:7rem;font-family:IM Fell Great Primer SC}.wr-author[_ngcontent-%COMP%]{text-align:left;align-content:space-evenly;font-family:IM Fell Great Primer SC;font-size:1.2rem}.btn-inauthor[_ngcontent-%COMP%]{display:inline-block;color:#fff;font-size:1.2rem}.btn-inauthor[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{border-bottom:4px solid white}.author-info[_ngcontent-%COMP%]{width:40%}.collection-quotes-wauthor[_ngcontent-%COMP%]{width:60%}.collection-quotes[_ngcontent-%COMP%]{width:100%}@media (max-width: 576px){.wrapper-nm-collection[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:3rem;line-height:2.5rem}.wrapper-abc-authors[_ngcontent-%COMP%]{padding:0;width:50%}.details-authors[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.25rem}.wrapper-abc-authors[_ngcontent-%COMP%]   .btn-author[_ngcontent-%COMP%]{font-size:1rem;margin-bottom:0}.cont-auth[_ngcontent-%COMP%]{max-height:4rem;overflow:auto}.wr-initial[_ngcontent-%COMP%]{font-size:3rem;width:35%}.wr-author[_ngcontent-%COMP%]{width:65%}.btn-inauthor[_ngcontent-%COMP%]{font-size:1rem;margin:0 0 .25rem;padding:0;text-align:left}.btn-inauthor[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{border-bottom:2px solid white}.author-info[_ngcontent-%COMP%], .collection-quotes-wauthor[_ngcontent-%COMP%]{width:100%}}"]})};export{U as CollectionComponent};
