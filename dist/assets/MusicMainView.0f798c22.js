import{d as P,j as v,b as o,c as i,e as t,t as l,n as A,k as e,_ as D,r as w,o as z,l as C,w as R,m as T,F as _,f as y,h as u,q as E,s as S,u as I,a as Y,v as x,x as $,g as F,p as O,i as Z}from"./index.a7a15ee8.js";import{P as M}from"./PageSectionTitle.cb70849b.js";const q="/img/apple-music.svg",V="/img/spotify.svg",L="/img/youtube.svg",Q={id:"title"},G={id:"zh"},H={id:"en"},J=P({__name:"NumberDecoratedPageTitle",props:{number:Number,titleZh:String,titleEn:String,color:String},setup(c){const g=c,a=v(()=>({color:g.color}));return(m,h)=>(o(),i("div",Q,[t("span",{style:A(e(a))},l(c.number),5),t("div",null,[t("div",G,l(c.titleZh),1),t("div",H,l(c.titleEn),1)])]))}});const K=D(J,[["__scopeId","data-v-9825c8a9"]]),d=c=>(O("data-v-dbf16111"),c=c(),Z(),c),U={key:0},W={id:"as-song",class:"info-cover-cell cell-background"},X={id:"as-song-info"},tt={class:"title"},et={class:"artist"},st={class:"lyric"},ot=["href"],it=d(()=>t("img",{src:q,alt:"Apple Music"},null,-1)),lt=[it],at=["href"],nt=d(()=>t("img",{src:V,alt:"Spotify"},null,-1)),ct=[nt],rt=["href"],ut=d(()=>t("img",{src:L,alt:"YouTube"},null,-1)),dt=[ut],_t=["src","title","alt"],vt={key:0},ht={id:"as-essentials",class:"dual-cell-block"},yt={class:"info-cover-cell cell-background"},mt={class:"as-essentials-info"},pt={class:"track"},ft={class:"title"},gt={class:"artist"},kt=["src","title","alt"],bt={id:"as-essentials-link",class:"cell-background"},Et=d(()=>t("div",null,"Playlist Available On",-1)),St=["href"],xt=d(()=>t("img",{src:q,alt:"Apple Music"},null,-1)),Mt=[xt],jt=["href"],Bt=d(()=>t("img",{src:V,alt:"Spotify"},null,-1)),Nt=[Bt],wt={key:1,id:"as-more"},Ct={key:0},Ft={key:1},Pt={key:2,id:"rn-more-other-years"},At={id:"as-empty"},Dt={key:0,id:"as-more"},qt=d(()=>t("span",null,"Switch to",-1)),Vt={id:"rn-more-other-years"},zt={id:"rn-songs",class:"dual-cell-block"},Rt={class:"info-cover-cell cell-background"},Tt={class:"rn-songs-info"},It={class:"title"},Yt={class:"artist"},$t=["src","title","alt"],Ot=d(()=>t("span",null,"And More...",-1)),Zt={key:1},Lt=P({__name:"MusicMainView",setup(c){const g=w(!1),a=w({year:{this:void 0,others:[]},color:{primary:void 0,secondary:void 0},song_of_this_year:{title:void 0,artist:void 0,album:void 0,cover:void 0,lyric:void 0,link:{apple_music:void 0,spotify:void 0,youtube:void 0}},essentials_of_this_year:{essentials:[{title:void 0,artist:void 0,album:void 0,cover:void 0,track:void 0}],link:{apple_music:void 0,spotify:void 0}},blog_post:{text:void 0,label:void 0},recent_notes:[{title:void 0,artist:void 0,album:void 0,cover:void 0}]}),m=v(()=>a.value.year.others.length>0),h=v(()=>a.value.color.primary),n=v(()=>a.value.song_of_this_year),k=v(()=>a.value.essentials_of_this_year),p=v(()=>a.value.blog_post),j=v(()=>a.value.recent_notes),B=I();function N(r){console.log("requestData: year = "+r),Y.get("/api/music/main",{params:{year:r}}).then(f=>{a.value=f.data,g.value=!0})}return z(()=>{const r=C(B.query.year);console.log("Route query from onMounted: year = "+r),N(r)}),R(()=>B.query.year,r=>{const f=C(r);console.log("Route query from watch: year = "+f),N(f)}),(r,f)=>{const b=T("router-link");return g.value?(o(),i("div",U,[e(n)!==void 0?(o(),i(_,{key:0},[y(K,{number:a.value.year.this,"title-zh":"\u97F3\u4E50\u5E74\u5EA6\u603B\u7ED3","title-en":"Annual Summary on Music",color:e(h)},null,8,["number","color"]),y(M,{"title-zh":"\u5E74\u5EA6\u6B4C\u66F2","title-en":"Song of this Year",color:e(h)},null,8,["color"]),t("div",W,[t("div",X,[t("div",tt,l(e(n).title),1),t("div",et,l(e(n).artist),1),t("div",st,l(e(n).lyric),1),t("a",{href:e(n).link.apple_music,class:"as-enjoy-link as-enjoy-link-apple-music"},lt,8,ot),t("a",{href:e(n).link.spotify,class:"as-enjoy-link as-enjoy-link-spotify"},ct,8,at),e(n).link.youtube!==void 0?(o(),i("a",{key:0,href:e(n).link.youtube,class:"as-enjoy-link as-enjoy-link-youtube"},dt,8,rt)):u("",!0)]),t("img",{src:e(n).cover,title:e(n).album,alt:e(n).album,class:"cover"},null,8,_t)]),e(k)!==void 0?(o(),i("div",vt,[y(M,{"title-zh":"\u5E74\u5EA6\u7CBE\u9009\u96C6","title-en":"Essentials of this Year",color:e(h)},null,8,["color"]),t("div",ht,[(o(!0),i(_,null,E(e(k).essentials,s=>(o(),i("div",{key:s.title},[t("div",yt,[t("div",mt,[t("div",pt,l(s.track),1),t("div",ft,l(s.title),1),t("div",gt,l(s.artist),1)]),t("img",{src:s.cover,title:s.album,alt:s.album,class:"cover"},null,8,kt)])]))),128))]),t("div",bt,[Et,t("a",{href:e(k).link.apple_music,class:"as-enjoy-link as-enjoy-link-apple-music"},Mt,8,St),t("a",{href:e(k).link.spotify,class:"as-enjoy-link as-enjoy-link-spotify"},Nt,8,jt)])])):u("",!0),e(p)!==void 0||e(m)?(o(),i("div",wt,[e(p)!==void 0?(o(),i("div",Ct,[y(b,{to:e($)(e(p).label),class:"inline"},{default:S(()=>[x(l(e(p).text),1)]),_:1},8,["to"])])):u("",!0),e(p)!==void 0&&e(m)?(o(),i("span",Ft," Or switch to ")):u("",!0),e(m)?(o(),i("div",Pt,[(o(!0),i(_,null,E(a.value.year.others,s=>(o(),F(b,{to:"/music?year="+s,key:s,class:"year inline"},{default:S(()=>[x(l(s),1)]),_:2},1032,["to"]))),128))])):u("",!0)])):u("",!0)],64)):(o(),i(_,{key:1},[t("div",At,"\u4F60\u6765\u5230\u4E86 "+l(a.value.year.this)+" \u5E74\u7684\u4E00\u7247\u8352\u539F\u{1F61B}",1),e(m)?(o(),i("div",Dt,[qt,t("div",Vt,[(o(!0),i(_,null,E(a.value.year.others,s=>(o(),F(b,{to:"/music?year="+s,key:s,class:"year inline"},{default:S(()=>[x(l(s),1)]),_:2},1032,["to"]))),128))])])):u("",!0)],64)),e(j).length>0?(o(),i(_,{key:2},[y(M,{"title-zh":"\u6700\u8FD1\u542C\u6B4C\u8BB0\u5F55","title-en":"Recent Notes",color:e(h)},null,8,["color"]),t("div",zt,[(o(!0),i(_,null,E(e(j),s=>(o(),i("div",{key:s.title},[t("div",Rt,[t("div",Tt,[t("div",It,l(s.title),1),t("div",Yt,l(s.artist),1)]),t("img",{src:s.cover,title:s.album,alt:s.album,class:"cover"},null,8,$t)])]))),128))]),y(b,{to:"/music/song/notes",id:"rn-more",style:A({background:"linear-gradient(to right, "+a.value.color.secondary+", "+e(h)+")"})},{default:S(()=>[Ot]),_:1},8,["style"])],64)):u("",!0)])):(o(),i("div",Zt))}}});const Ht=D(Lt,[["__scopeId","data-v-dbf16111"]]);export{Ht as default};
