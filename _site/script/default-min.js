"use strict";var script=document.createElement("script"),script_sticky=document.createElement("script"),link_favicon=document.createElement("link"),tags={public_relations:"広報",services:"サービス",events:"イベント",registration:"募集",other:"その他"};script.setAttribute("src","https://code.jquery.com/jquery-3.2.1.min.js"),script_sticky.setAttribute("src","/script/stickyfill.min.js"),link_favicon.setAttribute("rel","icon"),link_favicon.setAttribute("type","image/png"),link_favicon.setAttribute("href","/img/favicon.png"),document.head.appendChild(script),document.head.appendChild(script_sticky),document.head.appendChild(link_favicon);var setData=function e(a){var t=a.feed.entry;t=t.map(function(e){return e.gs$cell});var i=t.map(function(e){return e.col});i=Math.max.apply(null,i);var n=t.map(function(e){return e.row});n=Math.max.apply(null,n);var s=[];t=t.map(function(e){return e.row=Number(e.row)-1,e.col=Number(e.col)-1,e});for(var l=[],r=[],c=0;c<n;c++){r.push([]);for(var o=0;o<i;o++)r[c].push("")}for(var p=0;p<t.length;p++){var m=t[p];r[m.row][m.col]=m.$t}return r},initialize={index:function e(){function a(){var e=$(".main-image__contents DIV.active");0==e.length&&(e=$(".main-image__contents DIV:last"));var a=e.next().length?e.next():$(".main-image__contents DIV:first");e.addClass("last-active"),a.css({opacity:0}).addClass("active").animate({opacity:1},1e3,function(){e.removeClass("active last-active")})}var t=$("html").attr("lang");$(".news__individual-wrapper").css("display","block");var i=window.location,n=i.href.split("/"),s=n.pop();Object.keys(tags).map(function(e){$('a[tag="'+e+'"]').before('<img src="/img/icon_tag_'+e+'.svg" class="news__tag-icon" alt="" >')}),"ja"===t&&$(".tag_name").each(function(){var e=$(this).text();e=$.trim(e);var a=tags[e];$(this).text(a)}),setInterval(function(){a()},5e3)},news:function e(){var a="";a=document.referrer,a=a.match(".+/(.+?)([?#;].*)?$")[1],"events.html"===a||"events-en.html"===a?(setTimeout(function(){$(".tag-event").trigger("click")},0),setTimeout(function(){$(".news__individual-wrapper").css("display","block")},500)):$(".news__individual-wrapper").css("display","block");var t=window.location,i=t.href.split("/"),n=i.pop();Object.keys(tags).map(function(e){$('a[tag="'+e+'"]').before('<img src="/img/icon_tag_'+e+'.svg" class="news__tag-icon" alt="" >')}),"news.html"===n&&$(".tag_name").each(function(){var e=$(this).text();e=$.trim(e);var a=tags[e];$(this).text(a)}),$(".post__individual").each(function(){var e=$(this).attr("class");e=e.match(/\[\"(.+?)\"\]/g),e=e[0].match(/\"(.+?)\"/g),e=e.join(" "),e=e.replace(/"/g,""),$(this).addClass(e)})},post:function e(){var a=window.location,t=a.href.split("/"),i=t.pop();Object.keys(tags).map(function(e){$('a[tag="'+e+'"]').before('<img src="/img/icon_tag_'+e+'.svg" class="news__tag-icon" alt="" >')}),marked($(".markdown-body").html()),t.indexOf("ja")>=0&&$(".tag_name").each(function(){var e=$(this).text();e=$.trim(e);var a=tags[e];$(this).text(a)}),$(document).ready(function(){$("a[href^='http']:not([href*='"+location.hostname+"'])").attr("target","_blank")})},about:function e(){$(".lazy-mail").each(function(){var e=this;setTimeout(function(){var a=jQuery(e),t=a.data("address").split("_at_").join("@").split("_dot_").join(".");a.attr("href","mailto:"+t).text(t)},1e3)})},history:function e(){var a=$(".table-history").height();$(".history__vertival-line").css("height",a),$(".history__vertival-dotted").css("top",a+12)},funding:function e(){},faq:function e(){},policy:function e(){},logotype:function e(){},research:function e(){},publications:function e(){},references:function e(){$.ajax({url:"https://spreadsheets.google.com/feeds/cells/1JGvXRqvu5A5IhaYfz40yTblNP7bZZL6GaPGaZl7knHM/od6/public/values?alt=json",dataType:"json",async:!0,success:function e(a){function t(){"en"===document.documentElement.lang?($(".main__content-title").text("Papers Citing our services"),$(".publications__wrapper").append(o)):"ja"===document.documentElement.lang&&($(".main__content-title").text("引用文献一覧"),$(".publications__wrapper").append(o))}function i(e){location.hash=e;var a=e.replace("%20"," ");$(".main__content-title").text(a),$(".publications__wrapper").empty();var t=[];t=r[a],t=t.filter(function(e){return"Original"!==e[1]});for(var i="",n=0;n<t.length;n++)i+='<div class="publications__column__wrapper"><h4 class="publications__column__title">'+t[n][4]+'</h4><p class="publications__column__pubmed"><span class="publications__column__title-small">Pubmed: </span><a href="https://www.ncbi.nlm.nih.gov/pubmed/?term='+t[n][2]+'">https://www.ncbi.nlm.nih.gov/pubmed/?term='+t[n][2]+'</a></p><p class="publications__column__DOI"><span class="publications__column__title-small">DOI: </span><a href="'+t[n][3]+'">'+t[n][3]+'</a></p><div class="publications__column__wrapper-small"><i class="fa fa-user" aria-hidden="true"></i><p>'+t[n][5]+'</p><i class="fa fa-clock-o" aria-hidden="true"></i><p>'+t[n][7]+'</p><i class="fa fa-book" aria-hidden="true"></i><p>'+t[n][6]+'</p><i class="fa fa-quote-right" aria-hidden="true"></i><p>'+t[n][1]+"</p></div></div>";$(".publications__wrapper").append(i)}for(var n=setData(a),s=[],l=0;l<n.length;l++)s.push(n[l][0]);s=_.rest(s,2),s=_.uniq(s);for(var r={},l=0;l<s.length;l++){var c=s[l];r[c]=n.filter(function(e){return e[0]===c})}var o="",p=Object.keys(r);for(o+='<table class="papers_citing_table"><tbody>',l=0;l<p.length;l++){var m=r[p[l]];m=m.filter(function(e){return"Original"!==e[1]});var u=m.length;o+='<tr><td><div class="filName" data-category="'+p[l]+'">'+p[l]+'</div></td><td><p class="quote_num">'+u+"</p></td></tr>"}if(o+="</tbody></table>",t(),$(document).on("click",".filName",function(){p=$(this).html(),i(p)}),$(document).on("click",".quote_num",function(){var e=$(this).parent().prev().find("div");p=e.html(),i(p)}),window.addEventListener("hashchange",function(){if(""===location.hash)$(".publications__wrapper").empty(),t();else{i(location.hash.slice(1))}},!1),""===location.hash);else{i(location.hash.slice(1))}}})},services:function e(){function a(){$.ajax({url:"https://spreadsheets.google.com/feeds/cells/1bSnbUztPDl3nhjQFbScjtTXpQtXOkqZE83NMilziHQs/od6/public/values?alt=json",dataType:"json",async:!0,success:function e(a){function t(e,a){var t=0;if("category"===e)for(var i=0;i<s.length;i++)s[1][i]===a&&(t=i);else if("other"===e)for(var i=0;i<s.length;i++)s[0][i]===a&&(t=i);return t}function i(e){var a=[];return"Y"===l[e][d]&&a.push("omics"),"Y"===l[e][v]&&a.push("text-mining"),"Y"===l[e][_]&&a.push("contents"),"Y"===l[e][h]&&a.push("semantic"),"Y"===l[e][f]&&a.push("biologist"),"Y"===l[e][g]&&a.push("application"),"Y"===l[e][b]&&a.push("data-scientist"),"Y"===l[e][w]&&a.push("provider"),a}function n(e){function a(){return $.ajax({type:"GET",url:"./services/"+e+".md"})}location.hash=e;var t="",i="";a().done(function(e){i=marked(e),$(".service__wrapper").empty();var a=$(".service__wrapper").append($("<div/>").attr({class:"markdown-body"}).html(i))}).fail(function(e){$(".service__wrapper").empty();var a=$(".service__wrapper").append($("<div/>").attr({class:"markdown-body"}).html("<p>データを取得できませんでした</p>"))})}for(var s=setData(a),l=s.filter(function(e){return"Y"===e[0]}),r="",c=t("other","services_name_en"),o=t("other","services_name_ja"),p=t("other","explanation_ja"),m=t("other","explanation_en"),u=t("other","URL"),d=t("category","Omics tools/データ解析ツール"),v=t("category","Text mining/文献知識抽出"),_=t("category","Contents/コンテンツ"),h=t("category","Semantic web/セマンティックウェブ"),f=t("category","Database user/データベース利用者"),g=t("category","Database application developer/アプリケーション開発者"),b=t("category","Data scientist/大規模データ解析者"),w=t("category","Data provider/データ所有者"),y=t("other","画像"),j={omics:{ja:"データ解析ツール",en:"Omics tools"},contents:{ja:"コンテンツ",en:"contents"},"text-mining":{ja:"文献知識抽出",en:"Text mining"},semantic:{ja:"セマンティックウェブ",en:"Semantic web"},biologist:{ja:"データベース利用者",en:"Database user"},application:{ja:"アプリケーション開発者",en:"Database application developer"},"data-scientist":{ja:"大規模データ解析者",en:"Data scientist"},provider:{ja:" データ所有者",en:"Data provider"}},k=window.location,x=k.href.split("/"),C=x.pop(),D=0;D<l.length;D++){var T=function e(a,t){var i="";if("ja"===t)for(var n=0;n<a.length;n++){var s=a[n];i+='<div class="service_category tag_element '+a[n]+'">'+j[s].ja+"</div>"}else if("en"===t)for(var n=0;n<a.length;n++){var s=a[n];i+='<div class="service_category tag_element '+a[n]+'">'+j[s].en+"</div>"}return i},O=i(D),S=O.join(" "),I=$("html").attr("lang");"ja"===I?r+='<article class="article__section contener-type-box mix '+S+'"><div id="repos_name'+D+'" class="repos_name"><p class="name name_ja" id="'+l[D][c]+'">'+l[D][o]+'</p><div class="keyword">'+l[D][p]+"</div>"+T(O,"ja")+'<div class="btn-box"><a class="page_btn more_btn">詳細</a><a href="'+l[D][u]+'" class="page_btn access_btn" target="_blank">アクセス</a></div></div><div id="repos_image0" class="repos_image"><img src="./img/service_assets/'+l[D][y]+'" alt="'+l[D][c]+'" class="object-fit-img img_services"></div>':"en"===I&&(r+='<article class="article__section contener-type-box mix '+S+'"><div id="repos_name'+D+'" class="repos_name"><p class="name name_en" id="'+l[D][c]+'">'+l[D][c]+'</p><div class="keyword">'+l[D][m]+"</div>"+T(O,"en")+'<div class="btn-box"><a class="page_btn more_btn">more</a><a href="'+l[D][u]+'" class="page_btn access_btn" target="_blank">Access</a></div></div><div id="repos_image0" class="repos_image"><img src="./img/service_assets/'+l[D][y]+'" alt="'+l[D][c]+'" class="object-fit-img img_services"></div>'),r+="</article>"}$("#service_list").append(r);var q=document.querySelector(".service__wrapper"),E=mixitup(q,{multifilter:{enable:!0},debug:{enable:!0}});$(document).on("click",".more_btn",function(){$("html,body").scrollTop(0);var e=$(this).parent().siblings(".name").attr("id"),a=$(this).parent().siblings(".name").attr("class");a.match(/name_ja/)?e+="_ja":a.match(/name_en/)&&(e+="_en"),e=e.replace(/ /g,"_"),n(e)})}})}function t(e){location.hash=e;var a="";$.ajax({type:"get",url:"https://spreadsheets.google.com/feeds/cells/1bSnbUztPDl3nhjQFbScjtTXpQtXOkqZE83NMilziHQs/od6/public/values?alt=json",dataType:"json"}).done(function(a){function t(e){for(var a=0,t=0;t<s.length;t++)s[0][t]===e&&(a=t);return a}function i(e){for(var a="",t=[],i=0;i<l.length;i++){var n=l[i][r],s=l[i][c];e=e.replace(/_/g," "),n===e&&(a=l[i][c])}for(var i=0;i<l.length;i++){var n=l[i][r];l[i][c]===a&&t.push(l[i][r])}return t}function n(e){$.ajax({type:"get",url:"./services/"+e+".md"}).done(function(e){var a="";a=marked(e);var t=$(".service__wrapper").append($("<div/>").attr({class:"markdown-body"}).html(a))}).fail(function(e){var a=$(".service__wrapper").append($("<div/>").attr({class:"markdown-body"}).html("<p>データを取得できませんでした</p>"))})}var s=a.values,l=s.filter(function(e){return"Y"===e[0]}),r=t("services_name_en"),c=t("services_name_ja"),o=e.replace("_ja","");o=o.replace("_en","");var p=i(o),m=[];p.forEach(function(a){a=a.replace(/ /g,"_"),a=a.replace(/\//g,"_"),"_ja"===e.slice(-3)?a+="_ja":"_en"===e.slice(-3)&&(a+="_en"),m.push(a)}),$(".service__wrapper").empty(),m.map(function(e){n(e)})})}var i="",n;if(""===location.hash);else{$(".facet_section").css("display","none");t(location.hash.slice(1))}a(),window.addEventListener("hashchange",function(){if(""===location.hash){$(".facet_section").toggleClass("off"),$(".service__wrapper").empty();var e=document.querySelector(".service__wrapper");mixitup(e,{multifilter:{enable:!0},debug:{enable:!0}}).destroy(),a()}else{var i=location.hash.slice(1);$(".facet_section").toggleClass("off"),t(i)}},!1)},events:function e(){$(".news__individual-wrapper").css("display","block");var a=window.location,t=a.href.split("/"),i=t.pop();Object.keys(tags).map(function(e){$('a[tag="'+e+'"]').before('<img src="/img/icon_tag_'+e+'.svg" class="news__tag-icon" alt="" >')});var n=$("html").attr("lang");"ja"===n&&$(".tag_name").each(function(){var e=$(this).text();e=$.trim(e);var a=tags[e];$(this).text(a)}),$.ajax({url:"https://spreadsheets.google.com/feeds/cells/1bSnbUztPDl3nhjQFbScjtTXpQtXOkqZE83NMilziHQs/od6/public/values?alt=json",dataType:"json",async:!0,success:function e(a){function t(e){for(var a=0,t=0;t<i.length;t++)i[0][t]===e&&(a=t);return a}var i=setData(a),s=t("Event掲載"),l=t("services_name_en"),r=t("explanation_ja"),c=t("explanation_en"),o=t("画像"),p=0,m=t("URL"),u=window.location,d=u.href.split("/"),v=d.pop(),i=i.filter(function(e){return"Y"===e[s]});"ja"===n?p=r:"en"===n&&(p=c);for(var _="",h=0;h<i.length;h++)_+='<article class="article__section event__section-ja"><div class="article__section__inner"><h4>'+i[h][l]+"</h4><p>"+i[h][p]+'</p><a href = "'+i[h][m]+'" class = "page_btn more_btn" > more </a></div></article>';$(".section-wrapper").append(_)}});var s=document.getElementById("main__contents-event").clientHeight;$("ul.sub__navigation-wrapper li").on("click",function(){$("ul.sub__navigation-wrapper li").removeClass("active"),$(this).addClass("active")}),$(".sub_2").on("click",function(){window.scrollTo(0,s)}),$(".sub_1").on("click",function(){window.scrollTo(0,0)}),$(window).scroll(function(){$(this).scrollTop()>s?($("ul.sub__navigation-wrapper li.sub_1").removeClass("active"),$("ul.sub__navigation-wrapper li.sub_2").addClass("active")):$(this).scrollTop()<s&&($("ul.sub__navigation-wrapper li.sub_2").removeClass("active"),$("ul.sub__navigation-wrapper li.sub_1").addClass("active"))})},members:function e(){$.when($.getJSON("https://spreadsheets.google.com/feeds/cells/1bSnbUztPDl3nhjQFbScjtTXpQtXOkqZE83NMilziHQs/2/public/values?alt=json"),$.getJSON("https://spreadsheets.google.com/feeds/cells/1bSnbUztPDl3nhjQFbScjtTXpQtXOkqZE83NMilziHQs/od6/public/values?alt=json")).done(function(e,a){function t(e,a,t){var i="";return e?("Mail"===t?e="mailto:"+e:"GitHub"===t?e="https://github.com/"+e:"ORCID"===t&&(e="https://orcid.org/"+e),i='<a href="'+e+'" class="'+a+'" target="_blank">'+t+"</a>"):i="",i}function i(a){for(var t=0,i=1;i<e.length;i++)e[0][i]===a&&(t=i);return t}var n=$("html").attr("lang"),s="",l="",r="",c="",o="",p="";e=e[0],e=setData(e);for(var m=window.location,u=m.href.split("/"),d=u.pop(),v=i("name ja"),h=i("name en"),f=i("画像"),g=i("position_ja"),b=i("position_en"),w=i("keyword"),y=i("keyword-en"),j=i("ORCID"),k=i("Google Scholar"),x=i("github"),C=i("mail"),D=i("Website"),T=i("いずれのIDも掲載しない"),O=1;O<e.length;O++)"客員教授"===e[O][g]||"客員准教授"===e[O][g]?o+='<li><a href="#'+e[O][v]+'">'+e[O][v]+"</a></li>":r+='<li><a href="#'+e[O][v]+'">'+e[O][v]+"</a></li>";for(var O=1;O<e.length;O++)"客員教授"===e[O][g]||"客員准教授"===e[O][g]?p+='<li><a href="#'+e[O][h]+'">'+e[O][h]+"</a></li>":c+='<li><a href="#'+e[O][h]+'">'+e[O][h]+"</a></li>";if("ja"===n){$("#memberList").append(r),$("#memberList-collaborators").append(o);for(var S=1;S<e.length;S++){var I=e[S][v],q=e[S][h],E=e[S][f],P=e[S][g],Q=e[S][w],Y=e[S][j],z=e[S][k],M=e[S][x],G=e[S][C],N=e[S][D],H=e[S][T],L=t(G,"btn-mail","Mail")+t(M,"btn-github","GitHub")+t(Y,"btn-orcid","ORCID")+t(z,"btn-gs","Google Scholar")+t(N,"btn-web","Website");"Yes"===H&&(L=t(G,"btn-mail","Mail")),"客員教授"===P||"客員准教授"===P?l+='<div class="content__member" id="'+I+'"><div class="repos_image"><img src="./img/member/'+E+'" alt="'+I+'" class="img_member"></div><ul><li class="position">'+P+'</li><li class="repos_name"><span class="name_ja">'+I+'</span><span class="name_en">'+q+'</span></li><li class="keyword">'+Q+'</li><li class="PIC">担当サービス：<div class="member-list__services"></div></li><li class="links"><div class="btn-box">'+L+"</div></li></ul></div>":s+='<div class="content__member" id="'+I+'"><div class="repos_image"><img src="./img/member/'+E+'" alt="'+I+'" class="img_member"></div><ul><li class="position">'+P+'</li><li class="repos_name"><span class="name_ja">'+I+'</span><span class="name_en">'+q+'</span></li><li class="keyword">'+Q+'</li><li class="PIC">担当サービス：<div class="member-list__services"></div></li><li class="links"><div class="btn-box">'+L+"</div></li></ul></div>"}}else if("en"===n){$("#memberList").append(c),$("#memberList-collaborators").append(p);for(var S=1;S<e.length;S++){var I=e[S][v],q=e[S][h],E=e[S][f],P=e[S][b],Q=e[S][w],X=e[S][y],Y=e[S][j],z=e[S][k],M=e[S][x],G=e[S][C],N=e[S][D],H=e[S][T],L="";L=t(G,"btn-mail","Mail")+t(M,"btn-github","GitHub")+t(Y,"btn-orcid","ORCID")+t(z,"btn-gs","Google Scholar")+t(N,"btn-web","Website"),"Yes"===H&&(L=t(G,"btn-mail","Mail")),"Guest Professor"===P||"Guest Associate Professor"===P?l+='<div class="content__member" id="'+q+'"><div class="repos_image"><img src="./img/member/'+E+'" alt="'+q+'" class="img_member"></div><ul><li class="position">'+P+'</li><li class="repos_name"><span class="name_ja">'+I+'</span><span class="name_en">'+q+'</span></li><li class="keyword">'+X+'</li><li class="PIC">Responsible for：<div class="member-list__services"></div></li><li class="links"><div class="btn-box">'+L+"</div></li></ul></div>":s+='<div class="content__member" id="'+q+'"><div class="repos_image"><img src="./img/member/'+E+'" alt="'+q+'" class="img_member"></div><ul><li class="position">'+P+'</li><li class="repos_name"><span class="name_ja">'+I+'</span><span class="name_en">'+q+'</span></li><li class="keyword">'+X+'</li><li class="PIC">Responsible for：<div class="member-list__services"></div></li><li class="links"><div class="btn-box">'+L+"</div></li></ul></div>"}}$("#member-list").append(s),$("#member-list-collaborators").append(l),a=a[0],a=setData(a),a=a.filter(function(e){return"Y"===e[0]});for(var A=[],S=2;S<a.length;S++)A.push(a[S][7]),A.push(a[S][8]),A.push(a[S][9]);A=_.uniq(A),A=_.compact(A);var R={};A.map(function(e){for(var t=0;t<a.length;t++)e===a[t][7]&&(R[e]+=a[t][3]+",")}),A.map(function(e){for(var t=0;t<a.length;t++)e===a[t][8]&&(R[e]+=a[t][3]+",")}),A.map(function(e){for(var t=0;t<a.length;t++)e===a[t][9]&&(R[e]+=a[t][3]+",")}),$(".name_ja").each(function(){var e=$(this).text();if(e=e.split(" "),R[e[0]]){var a=R[e[0]];a+="",a=a.replace("undefined",""),a=a.slice(0,-1),a=a.replace(/,/g,", ");var t=$(this).parent().siblings(".PIC").find(".member-list__services");$(t).text(a)}else{var t=$(this).parent().siblings(".PIC");$(t).remove()}})}),$(document).on("click","#memberList li a",function(){setTimeout(function(){var e=$(window).scrollTop(),a=$(window).height(),t=e-.4*a;$(window).scrollTop(t)},0)})},access:function e(){var a=document.getElementById("main__contents-kashiwa").clientHeight;$("ul.sub__navigation-wrapper li").on("click",function(){$("ul.sub__navigation-wrapper li").removeClass("active"),$(this).addClass("active")}),$(".sub_2").on("click",function(){window.scrollTo(0,a)}),$(".sub_1").on("click",function(){window.scrollTo(0,0)}),$(window).scroll(function(){$(this).scrollTop()>a?($("ul.sub__navigation-wrapper li.sub_1").removeClass("active"),$("ul.sub__navigation-wrapper li.sub_2").addClass("active")):$(this).scrollTop()<a&&($("ul.sub__navigation-wrapper li.sub_2").removeClass("active"),$("ul.sub__navigation-wrapper li.sub_1").addClass("active"))})},contact:function e(){}};script.addEventListener("load",function(){$(function(){var e=$("html").attr("data-page-type");initialize[e](),console.log(e);var a={index:"index",post:"index",news:"index",about:"about",history:"about",faq:"about",policy:"about",logotype:"about",research:"research",publications:"research",services:"services",references:"services",events:"events",members:"members",access:"access",contact:"contact"},t="",i=Object.keys(a),n="";i.map(function(i){i===e&&(t=a[e])}),n="."+t,$(".header__nav__contents"+n).find("a").css("border-bottom","2px solid white");var s=window.location,l=s.href;$(".lang-en span").on("click",function(){if(l.match(/\/ja\/\d+\/\d+\/\d+\//))window.location.href=l.replace("/ja/","/en/");else if(s.href.match(/services\.html#/)){var a=s.href+"_en",a=a.replace("_ja",""),a=a.replace("services.html","services-en.html");window.location.href=a}else{var a=e+"-en.html";window.location.href=a}}),$(".lang-ja span").on("click",function(){if(l.match(/\/en\/\d+\/\d+\/\d+\//))window.location.href=l.replace("/en/","/ja/");else if(s.href.match(/services-en\.html#/)){var a=s.href+"_ja",a=a.replace("_en",""),a=a.replace("services-en.html","services.html");window.location.href=a}else{var a=e+".html";window.location.href=a}});var r=document.querySelectorAll(".sticky");Stickyfill.add(r)})});