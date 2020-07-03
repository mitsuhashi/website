"use strict";function dispLoading(e){$(".main__contents").append("<div id='loading'><img src='/img/loading.gif' /></div>")}function removeLoading(){$("#loading").remove()}var script=document.createElement("script"),script_sticky=document.createElement("script"),link_favicon=document.createElement("link"),tags={public_relations:"広報",services:"サービス",events:"イベント",registration:"募集",other:"その他"};script.setAttribute("src","https://code.jquery.com/jquery-3.2.1.min.js"),script_sticky.setAttribute("src","/script/stickyfill.min.js"),link_favicon.setAttribute("rel","icon"),link_favicon.setAttribute("type","image/png"),link_favicon.setAttribute("href","/img/favicon.png"),document.head.appendChild(script),document.head.appendChild(script_sticky),document.head.appendChild(link_favicon);var setData=function e(a){var t=a.feed.entry,i=(t=t.map((function(e){return e.gs$cell}))).map((function(e){return e.col}));i=Math.max.apply(null,i);var n=t.map((function(e){return e.row}));n=Math.max.apply(null,n);var s=[];t=t.map((function(e){return e.row=Number(e.row)-1,e.col=Number(e.col)-1,e}));for(var r=[],o=[],c=0;c<n;c++){o.push([]);for(var l=0;l<i;l++)o[c].push("")}for(var p=0;p<t.length;p++){var m=t[p];o[m.row][m.col]=m.$t}return o},initialize={index:function e(){function a(){var e=$(".main-image__contents DIV.active");0==e.length&&(e=$(".main-image__contents DIV:last"));var a=e.next().length?e.next():$(".main-image__contents DIV:first");e.addClass("last-active"),a.css({opacity:0}).addClass("active").animate({opacity:1},1e3,(function(){e.removeClass("active last-active")}))}var t=$("html").attr("lang");$(".news__individual-wrapper").css("display","block");var i,n,s=window.location.href.split("/").pop(),r;Object.keys(tags).map((function(e){$('a[tag="'+e+'"]').before('<img src="/img/icon_tag_'+e+'.svg" class="news__tag-icon" alt="" >')})),"ja"===t&&$(".tag_name").each((function(){var e=$(this).text();e=$.trim(e);var a=tags[e];$(this).text(a)})),setInterval((function(){a()}),5e3)},news:function e(){var a="";"events.html"===(a=""===(a=document.referrer)?"direct":a.match(".+/(.+?)([?#;].*)?$")[1])||"events-en.html"===a?(setTimeout((function(){$(".tag-event").trigger("click")}),0),setTimeout((function(){$(".news__individual-wrapper").css("display","block")}),500)):$(".news__individual-wrapper").css("display","block");var t,i,n=window.location.href.split("/").pop(),s;Object.keys(tags).map((function(e){$('a[tag="'+e+'"]').before('<img src="/img/icon_tag_'+e+'.svg" class="news__tag-icon" alt="" >')})),"news.html"===n&&$(".tag_name").each((function(){var e=$(this).text();e=$.trim(e);var a=tags[e];$(this).text(a)})),$(".post__individual").each((function(){var e=$(this).attr("class");e=(e=(e=(e=e.match(/\[\"(.+?)\"\]/g))[0].match(/\"(.+?)\"/g)).join(" ")).replace(/"/g,""),$(this).addClass(e)}))},post:function e(){var a,t=window.location.href.split("/"),i=t.pop(),n;Object.keys(tags).map((function(e){$('a[tag="'+e+'"]').before('<img src="/img/icon_tag_'+e+'.svg" class="news__tag-icon" alt="" >')})),marked($(".markdown-body").html()),t.indexOf("ja")>=0&&$(".tag_name").each((function(){var e=$(this).text();e=$.trim(e);var a=tags[e];$(this).text(a)})),$(document).ready((function(){$("a[href^='http']:not([href*='"+location.hostname+"'])").attr("target","_blank")}))},about:function e(){$(".lazy-mail").each((function(){var e=this;setTimeout((function(){var a=jQuery(e),t=a.data("address").split("_at_").join("@").split("_dot_").join(".");a.attr("href","mailto:"+t).text(t)}),1e3)}))},history:function e(){var a=$(".table-history").height();$(".history__vertival-line").css("height",a),$(".history__vertival-dotted").css("top",a+12)},funding:function e(){},faq:function e(){},policy:function e(){},logotype:function e(){},research:function e(){},publications:function e(){},references:function e(){dispLoading("処理中..."),$.ajax({url:"./json/paper.json",dataType:"json",async:!0,success:function e(a){function t(){"en"===document.documentElement.lang?($(".main__content-title").text("Papers Citing our services"),$(".publications__wrapper").append(f)):"ja"===document.documentElement.lang&&($(".main__content-title").text("引用文献一覧"),$(".publications__wrapper").append(f))}function i(e){location.hash=e;var a=e.replace("%20"," ");$(".main__content-title").text(a),$(".publications__wrapper").empty();var t=[];t=(t=h[a]).filter((function(e){return"Original"!==e[1]}));for(var i="",n=0;n<t.length;n++)i+='<div class="publications__column__wrapper"><h4 class="publications__column__title">'+t[n][c]+'</h4><p class="publications__column__pubmed"><span class="publications__column__title-small">Pubmed: </span><a href="https://www.ncbi.nlm.nih.gov/pubmed/?term='+t[n][2]+'">https://www.ncbi.nlm.nih.gov/pubmed/?term='+t[n][2]+'</a></p><p class="publications__column__DOI"><span class="publications__column__title-small">DOI: </span><a href="'+t[n][o]+'">'+t[n][o]+'</a></p><div class="publications__column__wrapper-small"><i class="fa fa-user" aria-hidden="true"></i><p>'+t[n][l]+'</p><i class="fa fa-clock-o" aria-hidden="true"></i><p>'+t[n][m]+'</p><i class="fa fa-book" aria-hidden="true"></i><p>'+t[n][p]+'</p><i class="fa fa-quote-right" aria-hidden="true"></i><p>'+t[n][s]+"</p></div></div>";$(".publications__wrapper").append(i)}removeLoading();var n=0,s=0,r=0,o=0,c=0,l=0,p=0,m=0,u=setData(a);u[0].forEach((function(e,a){"Web server"===e?n=a:"Citation"===e?s=a:"PMID"===e?r=a:"DOI"===e?o=a:"Title"===e?c=a:"First author"===e?l=a:"Journal"===e?p=a:"(e)pub date"===e&&(m=a)}));for(var d=[],v=0;v<u.length;v++)d.push(u[v][0]);d=_.rest(d,2),d=_.uniq(d);for(var h={},v=0;v<d.length;v++){var g=d[v];h[g]=u.filter((function(e){return e[0]===g}))}var f="",b=Object.keys(h),w;for(b=b.sort((function(e,a){return h[a].length-h[e].length})),f+='<table class="papers_citing_table"><tbody>',v=0;v<b.length;v++){var y=h[b[v]],j=(y=y.filter((function(e){return"Original"!==e[1]}))).length;f+='<tr><td><div class="filName" data-category="'+b[v]+'">'+b[v]+'</div></td><td><p class="quote_num">'+j+"</p></td></tr>"}(f+="</tbody></table>",t(),$(document).on("click",".filName",(function(){i(b=$(this).html())})),$(document).on("click",".quote_num",(function(){var e=$(this).parent().prev().find("div");i(b=e.html())})),window.addEventListener("hashchange",(function(){var e;""===location.hash?($(".publications__wrapper").empty(),t()):i(location.hash.slice(1))}),!1),""===location.hash)||i(location.hash.slice(1))}})},services:function e(){function a(){$.ajax({url:"../json/services.json",dataType:"json",async:!0,success:function e(a){function t(e,a){var t=0;if("category"===e)for(var i=0;i<n.length;i++)n[1][i]===a&&(t=i);else if("other"===e)for(var i=0;i<n.length;i++)n[0][i]===a&&(t=i);return t}function i(e){var a=[];return"Y"===r[e][d]&&a.push("database-integration"),"Y"===r[e][v]&&a.push("materials"),"Y"===r[e][_]&&a.push("genome"),"Y"===r[e][h]&&a.push("gene"),"Y"===r[e][g]&&a.push("gene-expression"),"Y"===r[e][f]&&a.push("NGS"),"Y"===r[e][b]&&a.push("disease"),"Y"===r[e][w]&&a.push("natural-language-processing"),"Y"===r[e][y]&&a.push("SPARQL"),"Y"===r[e][j]&&a.push("RDF-creation"),"Y"===r[e][k]&&a.push("biologist"),"Y"===r[e][x]&&a.push("application"),"Y"===r[e][C]&&a.push("data-scientist"),"Y"===r[e][D]&&a.push("provider"),a}for(var n=a,s=t("other","掲載"),r=n.filter((function(e){return"Y"===e[s]})),o="",c=t("other","services_name_en"),l=t("other","services_name_ja"),p=t("other","explanation_ja"),m=t("other","explanation_en"),u=t("other","URL"),d=t("category","Database integration/データベース統合"),v=t("category","Materials/教材・資料"),_=t("category","Genome/ゲノム"),h=t("category","Gene/遺伝子"),g=t("category","Gene expression/遺伝子発現"),f=t("category","NGS"),b=t("category","Disease/疾患"),w=t("category","Natural language processing/自然言語処理"),y=t("category","SPARQL Search/SPARQL検索"),j=t("category","RDF creation/RDF作成"),k=t("category","Database user/データベース利用者"),x=t("category","Database application developer (REST API, SPARQL)/アプリケーション開発者 (REST API, SPARQL)"),C=t("category","Data scientist/大規模データ解析者 (一括DL)"),D=t("category","Data provider/データ所有者"),S=t("other","画像"),R={"database-integration":{ja:"データベース統合",en:"Database integration"},materials:{ja:"教材・資料",en:"Materials"},genome:{ja:"ゲノム",en:"Genome"},gene:{ja:"遺伝子",en:"Gene"},"gene-expression":{ja:"遺伝子発現",en:"Gene expression"},NGS:{ja:"NGS",en:"NGS"},disease:{ja:"疾患",en:"Disease"},"natural-language-processing":{ja:"自然言語処理",en:"Natural language processing"},SPARQL:{ja:"SPARQL検索",en:"SPARQL Search"},"RDF-creation":{ja:"RDF作成",en:"RDF creation"},biologist:{ja:"データベース利用者",en:"Database user"},application:{ja:"アプリケーション開発者",en:"Database application developer"},"data-scientist":{ja:"大規模データ解析者",en:"Data scientist"},provider:{ja:" データ所有者",en:"Data provider"}},I=0;I<r.length;I++){var L=function e(a,t){var i='<div class="tag_wrapper">';if("ja"===t)for(var n=0;n<a.length;n++){var s,r="";"biologist"!==(s=a[n])&&"application"!==s&&"data-scientist"!==s&&"provider"!==s||(r="user"),i+='<div class="service_category card '+r+" tag_element "+a[n]+'">'+R[s].ja+"</div>"}else if("en"===t)for(var n=0;n<a.length;n++){var s=a[n];i+='<div class="service_category card tag_element '+a[n]+'">'+R[s].en+"</div>"}return i+="</div>"},T=i(I),Y=T.join(" "),O=$("html").attr("lang");"ja"===O?o+='<article class="article__section contener-type-box mix '+Y+'"><div id="repos_image0" class="repos_image"><a href="'+r[I][u]+'" target="_blank"><img src="./img/service_assets/'+r[I][S]+'" alt="'+r[I][c]+'" class="object-fit-img img_services" /></a></div><div id="repos_name'+I+'" class="repos_name"><p class="name name_ja" id="'+r[I][c]+'">'+r[I][l]+'</p><div class="keyword"><p>'+r[I][p]+"</p></div>"+L(T,"ja")+'<div class="btn-box"><a class="page_btn more_btn">詳細</a><a href="'+r[I][u]+'" class="page_btn access_btn" target="_blank">アクセス</a></div></div>':"en"===O&&(o+='<article class="article__section contener-type-box mix '+Y+'"><div id="repos_image0" class="repos_image"><a href="'+r[I][u]+'" target="_blank"><img src="./img/service_assets/'+r[I][S]+'" alt="'+r[I][c]+'" class="object-fit-img img_services" /></a></div><div id="repos_name'+I+'" class="repos_name"><p class="name name_en" id="'+r[I][c]+'">'+r[I][c]+'</p><div class="keyword"><p>'+r[I][m]+"</p></div>"+L(T,"en")+'<div class="btn-box"><a class="page_btn more_btn">more</a><a href="'+r[I][u]+'" class="page_btn access_btn" target="_blank">Access</a></div></div>'),o+="</article>"}$("#service_list").append(o);var P=document.querySelector(".service__wrapper");mixitup(P,{multifilter:{enable:!0},debug:{enable:!0},callbacks:{onMixStart:function e(a,t){$('[data-filter=".mix"]').removeClass("active")}}})}})}function t(e){$("html,body").scrollTop(0);var a="";$.ajax({type:"get",url:"../json/services.json",dataType:"json"}).done((function(a){function t(e){for(var a=0,t=0;t<s.length;t++)s[0][t]===e&&(a=t);return a}function i(e){for(var a="",t=[],i=0;i<o.length;i++){var n=o[i][c],s=o[i][l];n===(e=e.replace(/_/g," "))&&(a=o[i][l])}for(var i=0;i<o.length;i++){var n=o[i][c],s;o[i][l]===a&&t.push(o[i][c])}return t}function n(e){$.ajax({type:"get",url:"./services/"+e+".md"}).done((function(e){var a="";a=marked(e),$(".service__wrapper").append($("<div/>").attr({class:"markdown-body"}).html(a))}))}var s=a,r=t("掲載"),o=s.filter((function(e){return"Y"===e[r]})),c=t("services_name_en"),l=t("services_name_ja"),p=(e=decodeURIComponent(e)).replace("_ja",""),m=i(p=p.replace("_en","")),u=[];m.forEach((function(a){a=(a=a.replace(/ /g,"_")).replace(/\//g,"_"),"_ja"===e.slice(-3)?a+="_ja":"_en"===e.slice(-3)&&(a+="_en"),u.push(a)})),$(".service__wrapper").empty(),u.map((function(e){var a,t,i,s="",r;n(e+"_"+(s=window.location.href.split("/").pop().match(/services-en\.html/)?"en":"ja"))}))}))}var i="",n,s,r,o=window.location.href.split("/").pop();o.match(/#[\w_]/)?(o=(o=o.replace("services.html#","")).replace("services-en.html#",""),$(".facet_section").addClass("off"),t(o)):a(),$(document).on("click",".more_btn",(function(){var e=$(this).parent().parent().parent().siblings(".name").attr("id");-1!==(e=e.replace(/ /g,"_")).indexOf("/")&&(e=encodeURIComponent(e)),location.hash=e})),window.addEventListener("hashchange",(function(){if(""===location.hash){$(".facet_section").removeClass("off"),$(".service__wrapper").empty();var e=document.querySelector(".service__wrapper"),i;mixitup(e,{multifilter:{enable:!0},debug:{enable:!0}}).destroy(),a()}else{var n=location.hash.slice(1);$(".facet_section").addClass("off"),t(n)}}),!1)},events:function e(){$(".news__individual-wrapper").css("display","block");var a,t,i=window.location.href.split("/").pop(),n;Object.keys(tags).map((function(e){$('a[tag="'+e+'"]').before('<img src="/img/icon_tag_'+e+'.svg" class="news__tag-icon" alt="" >')}));var s=$("html").attr("lang");"ja"===s&&$(".tag_name").each((function(){var e=$(this).text();e=$.trim(e);var a=tags[e];$(this).text(a)})),$.ajax({url:"../json/services.json",dataType:"json",async:!0,success:function e(a){function t(e){for(var a=0,t=0;t<i.length;t++)i[0][t]===e&&(a=t);return a}var i=a,n=t("Event掲載"),r=t("services_name_en"),o=t("explanation_ja"),c=t("explanation_en"),l=t("画像"),p=0,m=t("URL"),u,d,v=window.location.href.split("/").pop(),i=i.filter((function(e){return"Y"===e[n]}));"ja"===s?p=o:"en"===s&&(p=c);for(var _="",h=0;h<i.length;h++)_+='<article class="article__section event__section-ja"><div class="article__section__inner"><h4>'+i[h][r]+"</h4><p>"+i[h][p]+'</p><a href = "'+i[h][m]+'" class = "page_btn more_btn" > more </a></div></article>';$(".section-wrapper").append(_)}});var r=document.getElementById("main__contents-event").clientHeight;$("ul.sub__navigation-wrapper li").on("click",(function(){$("ul.sub__navigation-wrapper li").removeClass("active"),$(this).addClass("active")})),$(".sub_2").on("click",(function(){window.scrollTo(0,r)})),$(".sub_1").on("click",(function(){window.scrollTo(0,0)})),$(window).scroll((function(){$(this).scrollTop()>r?($("ul.sub__navigation-wrapper li.sub_1").removeClass("active"),$("ul.sub__navigation-wrapper li.sub_2").addClass("active")):$(this).scrollTop()<r&&($("ul.sub__navigation-wrapper li.sub_2").removeClass("active"),$("ul.sub__navigation-wrapper li.sub_1").addClass("active"))}))},members:function e(){$.when($.getJSON("../json/members.json"),$.getJSON("../json/services.json")).done((function(e,a){function t(e,a,t){var i="";return e?("Mail"===t?e="mailto:"+e:"GitHub"===t?e="https://github.com/"+e:"ORCID"===t&&(e="https://orcid.org/"+e),i='<a href="'+e+'" class="'+a+'" target="_blank">'+t+"</a>"):i="",i}function i(a){for(var t=0,i=1;i<e.length;i++)e[0][i]===a&&(t=i);return t}var n=$("html").attr("lang"),s="",r="",o="",c="",l="",p="";e=e[0];for(var m,u,d=window.location.href.split("/").pop(),v=i("name ja"),h=i("name en"),g=i("画像"),f=i("position_ja"),b=i("position_en"),w=i("keyword"),y=i("keyword-en"),j=i("ORCID"),k=i("Google Scholar"),x=i("github"),C=i("mail"),D=i("Website"),S=i("いずれのIDも掲載しない"),R=1;R<e.length;R++)e[R][f].match(/客員/)||e[R][f].match(/外来/)?l+='<li><a href="#'+e[R][v]+'">'+e[R][v]+"</a></li>":o+='<li><a href="#'+e[R][v]+'">'+e[R][v]+"</a></li>";for(var R=1;R<e.length;R++)e[R][f].match(/客員/)||e[R][f].match(/外来/)?p+='<li><a href="#'+e[R][h]+'">'+e[R][h]+"</a></li>":c+='<li><a href="#'+e[R][h]+'">'+e[R][h]+"</a></li>";if("ja"===n){$("#memberList").append(o),$("#memberList-collaborators").append(l);for(var I=1;I<e.length;I++){var L=e[I][v],T=e[I][h],Y=e[I][g],O=e[I][f],P=e[I][w],G=e[I][j],A=e[I][k],E=e[I][x],N=e[I][C],q=e[I][D],M=e[I][S],Q=t(N,"btn-mail","Mail")+t(E,"btn-github","GitHub")+t(G,"btn-orcid","ORCID")+t(A,"btn-gs","Google Scholar")+t(q,"btn-web","Website");"Yes"===M&&(Q=t(N,"btn-mail","Mail")),O.match(/客員/)||O.match(/外来/)?r+='<div class="content__member" id="'+L+'"><div class="repos_image"><img src="./img/member/'+Y+'" alt="'+L+'" class="img_member"></div><ul><li class="position">'+O+'</li><li class="repos_name"><span class="name_ja">'+L+'</span><span class="name_en">'+T+'</span></li><li class="keyword">'+P+'</li><li class="PIC">担当サービス：<div class="member-list__services"></div></li><li class="links"><div class="btn-box">'+Q+"</div></li></ul></div>":s+='<div class="content__member" id="'+L+'"><div class="repos_image"><img src="./img/member/'+Y+'" alt="'+L+'" class="img_member"></div><ul><li class="position">'+O+'</li><li class="repos_name"><span class="name_ja">'+L+'</span><span class="name_en">'+T+'</span></li><li class="keyword">'+P+'</li><li class="PIC">担当サービス：<div class="member-list__services"></div></li><li class="links"><div class="btn-box">'+Q+"</div></li></ul></div>"}}else if("en"===n){$("#memberList").append(c),$("#memberList-collaborators").append(p);for(var I=1;I<e.length;I++){var L=e[I][v],T=e[I][h],Y=e[I][g],O=e[I][b],P=e[I][w],F=e[I][y],G=e[I][j],A=e[I][k],E=e[I][x],N=e[I][C],q=e[I][D],M=e[I][S],Q="";Q=t(N,"btn-mail","Mail")+t(E,"btn-github","GitHub")+t(G,"btn-orcid","ORCID")+t(A,"btn-gs","Google Scholar")+t(q,"btn-web","Website"),"Yes"===M&&(Q=t(N,"btn-mail","Mail")),O.match(/Guest/)||O.match(/Visiting/)?r+='<div class="content__member" id="'+T+'"><div class="repos_image"><img src="./img/member/'+Y+'" alt="'+T+'" class="img_member"></div><ul><li class="position">'+O+'</li><li class="repos_name"><span class="name_ja">'+L+'</span><span class="name_en">'+T+'</span></li><li class="keyword">'+F+'</li><li class="PIC">Responsible for：<div class="member-list__services"></div></li><li class="links"><div class="btn-box">'+Q+"</div></li></ul></div>":s+='<div class="content__member" id="'+T+'"><div class="repos_image"><img src="./img/member/'+Y+'" alt="'+T+'" class="img_member"></div><ul><li class="position">'+O+'</li><li class="repos_name"><span class="name_ja">'+L+'</span><span class="name_en">'+T+'</span></li><li class="keyword">'+F+'</li><li class="PIC">Responsible for：<div class="member-list__services"></div></li><li class="links"><div class="btn-box">'+Q+"</div></li></ul></div>"}}$("#member-list").append(s),$("#member-list-collaborators").append(r),a=(a=a[0]).filter((function(e){return"Y"===e[1]}));for(var H=[],I=2;I<a.length;I++)H.push(a[I][7]),H.push(a[I][8]),H.push(a[I][9]);H=_.uniq(H),H=_.compact(H);var U={};H.map((function(e){for(var t=0;t<a.length;t++)e===a[t][7]&&(U[e]+=a[t][3]+",")})),H.map((function(e){for(var t=0;t<a.length;t++)e===a[t][8]&&(U[e]+=a[t][3]+",")})),H.map((function(e){for(var t=0;t<a.length;t++)e===a[t][9]&&(U[e]+=a[t][3]+",")})),$(".name_ja").each((function(){var e=$(this).text();if(e=e.split(" "),U[e[0]]){var a=U[e[0]];a=(a=(a=(a+="").replace("undefined","")).slice(0,-1)).replace(/,/g,", ");var t=$(this).parent().siblings(".PIC").find(".member-list__services");$(t).text(a)}else{var t=$(this).parent().siblings(".PIC");$(t).remove()}}))})),$(document).on("click","#memberList li a",(function(){setTimeout((function(){var e,a,t=$(window).scrollTop()-.4*$(window).height();$(window).scrollTop(t)}),0)}))},access:function e(){var a=document.getElementById("main__contents-kashiwa").clientHeight;$("ul.sub__navigation-wrapper li").on("click",(function(){$("ul.sub__navigation-wrapper li").removeClass("active"),$(this).addClass("active")})),$(".sub_2").on("click",(function(){window.scrollTo(0,a)})),$(".sub_1").on("click",(function(){window.scrollTo(0,0)})),$(window).scroll((function(){$(this).scrollTop()>a?($("ul.sub__navigation-wrapper li.sub_1").removeClass("active"),$("ul.sub__navigation-wrapper li.sub_2").addClass("active")):$(this).scrollTop()<a&&($("ul.sub__navigation-wrapper li.sub_2").removeClass("active"),$("ul.sub__navigation-wrapper li.sub_1").addClass("active"))}))},contact:function e(){}};script.addEventListener("load",(function(){$((function(){var e=$("html").attr("data-page-type");initialize[e]();var a={index:"index",post:"index",news:"index",about:"about",history:"about",faq:"about",policy:"about",logotype:"about",research:"research",publications:"research",services:"services",references:"services",events:"events",members:"members",access:"access",contact:"contact"},t="",i,n="";Object.keys(a).map((function(i){i===e&&(t=a[e])})),$(".header__nav__contents"+(n="."+t)).find("a").css("border-bottom","2px solid white");var s=window.location,r=s.href;$(".lang-en span").on("click",(function(){if(r.match(/\/ja\/\d+\/\d+\/\d+\//))window.location.href=r.replace("/ja/","/en/");else if(s.href.match(/services\.html#/)){var a,a=(a=s.href).replace("services.html","services-en.html");window.location.href=a}else{var a=e+"-en.html";window.location.href=a}})),$(".lang-ja span").on("click",(function(){if(r.match(/\/en\/\d+\/\d+\/\d+\//))window.location.href=r.replace("/en/","/ja/");else if(s.href.match(/services-en\.html#/)){var a,a=(a=s.href).replace("services-en.html","services.html");window.location.href=a}else{var a=e+".html";window.location.href=a}}));var o=document.querySelectorAll(".sticky");Stickyfill.add(o)}))}));