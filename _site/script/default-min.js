"use strict";var script=document.createElement("script"),script_sticky=document.createElement("script"),tags={publishment:"広報",service:"サービス",event:"イベント",invite:"募集",other:"その他"};script.setAttribute("src","https://code.jquery.com/jquery-3.2.1.min.js"),script_sticky.setAttribute("src","/website/script/stickyfill.min.js"),document.head.appendChild(script),document.head.appendChild(script_sticky);var initialize={index:function e(){function a(){var e=$(".main-image__contents DIV.active");0==e.length&&(e=$(".main-image__contents DIV:last"));var a=e.next().length?e.next():$(".main-image__contents DIV:first");e.addClass("last-active"),a.css({opacity:0}).addClass("active").animate({opacity:1},1e3,function(){e.removeClass("active last-active")})}$(".news__individual-wrapper").css("display","block");var s=window.location,i=s.href.split("/"),t=i.pop();Object.keys(tags).map(function(e){$('a[tag="'+e+'"]').before('<img src="/website/img/icon_tag_'+e+'.svg" class="news__tag-icon" alt="" >')}),"index.html"===t&&$(".tag_name").each(function(){var e=$(this).text();e=$.trim(e);var a=tags[e];$(this).text(a)}),setInterval(function(){a()},5e3)},news:function e(){var a="";console.log(document.referrer),a=document.referrer,a=a.match(".+/(.+?)([?#;].*)?$")[1],"events.html"===a||"events-en.html"===a?(setTimeout(function(){$(".tag-event").trigger("click")},0),setTimeout(function(){$(".news__individual-wrapper").css("display","block")},500)):$(".news__individual-wrapper").css("display","block");var s=window.location,i=s.href.split("/"),t=i.pop();Object.keys(tags).map(function(e){$('a[tag="'+e+'"]').before('<img src="/website/img/icon_tag_'+e+'.svg" class="news__tag-icon" alt="" >')}),"news.html"===t&&$(".tag_name").each(function(){var e=$(this).text();e=$.trim(e);var a=tags[e];$(this).text(a)}),$(".post__individual").each(function(){var e=$(this).attr("class");e=e.match(/\[\"(.+?)\"\]/g),e=e[0].match(/\"(.+?)\"/g),e=e.join(" "),e=e.replace(/"/g,""),$(this).addClass(e)})},post:function e(){var a=window.location,s=a.href.split("/"),i=s.pop();Object.keys(tags).map(function(e){$('a[tag="'+e+'"]').before('<img src="/website/img/icon_tag_'+e+'.svg" class="news__tag-icon" alt="" >')}),s.indexOf("ja")>=0&&$(".tag_name").each(function(){var e=$(this).text();e=$.trim(e);var a=tags[e];$(this).text(a)}),$(document).ready(function(){$("a[href^='http']:not([href*='"+location.hostname+"'])").attr("target","_blank")})},about:function e(){$(".lazy-mail").each(function(){var e=this;setTimeout(function(){var a=jQuery(e),s=a.data("address").split("_at_").join("@").split("_dot_").join(".");a.attr("href","mailto:"+s).text(s)},1e3)})},history:function e(){},funding:function e(){},faq:function e(){},policy:function e(){},logotype:function e(){},research:function e(){},publications:function e(){},references:function e(){$.ajax({url:"https://sheets.googleapis.com/v4/spreadsheets/1JGvXRqvu5A5IhaYfz40yTblNP7bZZL6GaPGaZl7knHM/values/references?key=AIzaSyCKBRLAEd_o7WAeBN5m0NZZ1Eusco7VtHw",dataType:"json",async:!0,success:function e(a){function s(){"en"===document.documentElement.lang?($(".main__content-title").text("Papers Citing our services"),$(".publications__wrapper").append(r)):"ja"===document.documentElement.lang&&($(".main__content-title").text("引用文献一覧"),$(".publications__wrapper").append(r))}function i(e){location.hash=e;var a=e.replace("%20"," ");$(".main__content-title").text(a),$(".publications__wrapper").empty();var s=[];s=c[a],s=s.filter(function(e){return"Original"!==e[1]});for(var i="",t=0;t<s.length;t++)i+='<div class="publications__column__wrapper"><h4 class="publications__column__title">'+s[t][4]+'</h4><p class="publications__column__pubmed"><span class="publications__column__title-small">Pubmed: </span><a href="https://www.ncbi.nlm.nih.gov/pubmed/?term='+s[t][2]+'">https://www.ncbi.nlm.nih.gov/pubmed/?term='+s[t][2]+'</a></p><p class="publications__column__DOI"><span class="publications__column__title-small">DOI: </span><a href="'+s[t][3]+'">'+s[t][3]+'</a></p><div class="publications__column__wrapper-small"><i class="fa fa-user" aria-hidden="true"></i><p>'+s[t][5]+'</p><i class="fa fa-clock-o" aria-hidden="true"></i><p>'+s[t][7]+'</p><i class="fa fa-book" aria-hidden="true"></i><p>'+s[t][6]+'</p><i class="fa fa-quote-right" aria-hidden="true"></i><p>'+s[t][1]+"</p></div></div>";$(".publications__wrapper").append(i)}for(var t=a.values,n=[],l=0;l<t.length;l++)n.push(t[l][0]);n=_.rest(n,2),n=_.uniq(n);for(var c={},l=0;l<n.length;l++){var o=n[l];c[o]=t.filter(function(e){return e[0]===o})}var r="",p=Object.keys(c);for(r+='<table class="papers_citing_table"><tbody>',l=0;l<p.length;l++){var v=c[p[l]];v=v.filter(function(e){return"Original"!==e[1]}),console.log(v);var u=v.length;r+='<tr><td><div class="filName" data-category="'+p[l]+'">'+p[l]+'</div></td><td><p class="quote_num">'+u+"</p></td></tr>"}if(r+="</tbody></table>",s(),$(document).on("click",".filName",function(){p=$(this).html(),i(p)}),$(document).on("click",".quote_num",function(){var e=$(this).parent().prev().find("div");p=e.html(),i(p)}),window.addEventListener("hashchange",function(){if(""===location.hash)$(".publications__wrapper").empty(),s();else{i(location.hash.slice(1))}},!1),""===location.hash);else{i(location.hash.slice(1))}}})},services:function e(){function a(){$.ajax({url:"https://sheets.googleapis.com/v4/spreadsheets/1bSnbUztPDl3nhjQFbScjtTXpQtXOkqZE83NMilziHQs/values/%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9%E4%B8%80%E8%A6%A7?key=AIzaSyBOc8Fp2aPvhzz06oAur5Rzz7cDp6RZFwo",dataType:"json",async:!0,success:function e(a){function s(e,a){var s=0;if("category"===e)for(var i=0;i<t.length;i++)t[1][i]===a&&(s=i);else if("other"===e)for(var i=0;i<t.length;i++)t[0][i]===a&&(s=i);return s}function i(e){var a=[];return"Y"===n[e][c]&&a.push("omics"),"Y"===n[e][o]&&a.push("text-mining"),"Y"===n[e][r]&&a.push("contents"),"Y"===n[e][p]&&a.push("semantic"),"Y"===n[e][v]&&a.push("biologist"),"Y"===n[e][u]&&a.push("application"),"Y"===n[e][m]&&a.push("data-scientist"),"Y"===n[e][d]&&a.push("provider"),a}for(var t=a.values,n=t.filter(function(e){return"Y"===e[0]}),l="",c=s("category","Omics tools/データ解析ツール"),o=s("category","Text mining/文献知識抽出"),r=s("category","Contents/コンテンツ"),p=s("category","Semantic web/セマンティックウェブ"),v=s("category","Database user/データベース利用者"),u=s("category","Database application developer/アプリケーション開発者"),m=s("category","Data scientist/大規模データ解析者"),d=s("category","Data provider/データ所有者"),_=s("other","画像"),g={omics:{ja:"データ解析ツール",en:"Omics tools"},contents:{ja:"コンテンツ",en:"contents"},"text-mining":{ja:"文献知識抽出",en:"Text mining"},semantic:{ja:"セマンティックウェブ",en:"Semantic web"},biologist:{ja:"データベース利用者",en:"Database user"},application:{ja:"アプリケーション開発者",en:"Database application developer"},"data-scientist":{ja:"大規模データ解析者",en:"Data scientist"},provider:{ja:" データ所有者",en:"Data provider"}},h=window.location,b=h.href.split("/"),f=b.pop(),w=0;w<n.length;w++){var y=function e(a,s){var i="";if("ja"===s)for(var t=0;t<a.length;t++){var n=a[t];i+='<div class="service_category tag_element '+a[t]+'">'+g[n].ja+"</div>"}else if("en"===s)for(var t=0;t<a.length;t++){var n=a[t];i+='<div class="service_category tag_element '+a[t]+'">'+g[n].en+"</div>"}return i},k=i(w),j=k.join(" ");"services.html"===f?l+='<article class="article__section contener-type-box mix '+j+'"><div id="repos_name'+w+'" class="repos_name"><p class="name">'+n[w][3]+'</p><div class="keyword">'+n[w][5]+"</div>"+y(k,"ja")+'<div class="btn-box"><a class="page_btn more_btn">詳細</a><a href="'+n[w][4]+'" class="page_btn access_btn" target="_blank">アクセス</a></div></div><div id="repos_image0" class="repos_image"><img src="./img/service_assets/'+n[w][_]+'.png" alt="'+n[w][2]+'" class="object-fit-img img_services"></div>':"services-en.html"===f&&(l+='<article class="article__section contener-type-box mix '+j+'"><div id="repos_name'+w+'" class="repos_name"><p class="name">'+n[w][3]+'</p><div class="keyword">'+n[w][6]+"</div>"+y(k,"en")+'<div class="btn-box"><a class="page_btn more_btn">more</a><a href="'+n[w][4]+'" class="page_btn access_btn" target="_blank">Access</a></div></div><div id="repos_image0" class="repos_image"><img src="./img/service_assets/'+n[w][_]+'.png" alt="'+n[w][2]+'" class="object-fit-img img_services"></div>'),l+="</article>"}$("#service_list").append(l);var x=document.querySelector(".service__wrapper"),E=mixitup(x,{controls:{toggleLogic:"or"}})}})}function s(e){function a(){return $.ajax({type:"GET",url:"./services/"+e+"_ja.md"})}location.hash=e;var s="",i="";a().done(function(e){i=marked(e),$(".service__wrapper").empty();var a=$(".service__wrapper").append($("<div/>").attr({class:"markdown-body"}).html(i))}).fail(function(e){$(".service__wrapper").empty();var a=$(".service__wrapper").append($("<div/>").attr({class:"markdown-body"}).html("<p>データを取得できませんでした</p>"))})}var i="",t;if(""===location.hash);else{var n=location.hash.slice(1);s(service__title)}a(),window.addEventListener("hashchange",function(){if(""===location.hash)$(".facet_section").toggleClass("off"),$(".service__wrapper").empty(),a();else{var e=location.hash.slice(1);$(".facet_section").toggleClass("off"),s(e)}},!1),$(document).on("click",".more_btn",function(){var e=$(this).parent().siblings(".name").html();e=e.replace(" ","_"),s(e)})},events:function e(){$(".news__individual-wrapper").css("display","block");var a=window.location,s=a.href.split("/"),i=s.pop();Object.keys(tags).map(function(e){$('a[tag="'+e+'"]').before('<img src="/website/img/icon_tag_'+e+'.svg" class="news__tag-icon" alt="" >')}),"events.html"===i&&$(".tag_name").each(function(){var e=$(this).text();e=$.trim(e);var a=tags[e];$(this).text(a)}),$.ajax({url:"https://sheets.googleapis.com/v4/spreadsheets/1bSnbUztPDl3nhjQFbScjtTXpQtXOkqZE83NMilziHQs/values/%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9%E4%B8%80%E8%A6%A7?key=AIzaSyBOc8Fp2aPvhzz06oAur5Rzz7cDp6RZFwo",dataType:"json",async:!0,success:function e(a){function s(e){for(var a=0,s=0;s<i.length;s++)i[0][s]===e&&(a=s);return a}var i=a.values,t=s("Event掲載"),n=s("サービス名称"),l=s("explanation_ja"),c=s("explanation_en"),o=s("画像"),r=0,p=s("URL"),v=window.location,u=v.href.split("/"),m=u.pop(),i=i.filter(function(e){return"Y"===e[t]});"events.html"===m?r=l:"events-en.html"===m&&(r=c);for(var d="",_=0;_<i.length;_++)console.log(i[_][o]),d+='<article class="article__section event__section-ja"><img src="/website/img/event_assets/'+i[_][o]+'"><div class="article__section__inner"><h4>'+i[_][n]+"</h4><p>"+i[_][r]+'</p><a href = "'+i[_][p]+'" class = "page_btn more_btn" > more </a></div></article>';$(".section-wrapper").append(d)}});var t=document.getElementById("main__contents-event").clientHeight;$("ul.sub__navigation-wrapper li").on("click",function(){$("ul.sub__navigation-wrapper li").removeClass("active"),$(this).addClass("active")}),$(".sub_2").on("click",function(){window.scrollTo(0,t)}),$(".sub_1").on("click",function(){window.scrollTo(0,0)}),$(window).scroll(function(){$(this).scrollTop()>t?($("ul.sub__navigation-wrapper li.sub_1").removeClass("active"),$("ul.sub__navigation-wrapper li.sub_2").addClass("active")):$(this).scrollTop()<t&&($("ul.sub__navigation-wrapper li.sub_2").removeClass("active"),$("ul.sub__navigation-wrapper li.sub_1").addClass("active"))})},members:function e(){$.when($.getJSON("https://sheets.googleapis.com/v4/spreadsheets/1bSnbUztPDl3nhjQFbScjtTXpQtXOkqZE83NMilziHQs/values/%E7%A0%94%E7%A9%B6%E8%80%85ID?key=AIzaSyBOc8Fp2aPvhzz06oAur5Rzz7cDp6RZFwo"),$.getJSON("https://sheets.googleapis.com/v4/spreadsheets/1bSnbUztPDl3nhjQFbScjtTXpQtXOkqZE83NMilziHQs/values/%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9%E4%B8%80%E8%A6%A7?key=AIzaSyBOc8Fp2aPvhzz06oAur5Rzz7cDp6RZFwo")).done(function(e,a){function s(e,a,s){var i="";return e?("Mail"===s?e="mailto:"+e:"GitHub"===s?e="https://github.com/"+e:"ORCID"===s&&(e="https://orcid.org/"+e),i='<a href="'+e+'" class="'+a+'" target="_blank">'+s+"</a>"):i="",i}function i(a){for(var s=0,i=1;i<e.values.length;i++)e.values[0][i]===a&&(s=i);return s}console.log(e);var t="",n="",l="",c="",o="",r="";e=e[0];for(var p=window.location,v=p.href.split("/"),u=v.pop(),m=i("name ja"),d=i("name en"),g=i("画像"),h=i("position"),b=i("keyword"),f=i("keyword-en"),w=i("ORCID"),y=i("Google Scholar"),k=i("github"),j=i("mail"),x=i("いずれのIDも掲載しない"),E=1;E<e.values.length;E++)console.log(e.values[E][h]),"客員教授"===e.values[E][h]||"客員准教授"===e.values[E][h]?o+='<li><a href="#'+e.values[E][m]+'">'+e.values[E][m]+"</a></li>":l+='<li><a href="#'+e.values[E][m]+'">'+e.values[E][m]+"</a></li>";for(var E=1;E<e.values.length;E++)"客員教授"===e.values[E][h]||"客員准教授"===e.values[E][h]?r+='<li><a href="#'+e.values[E][d]+'">'+e.values[E][d]+"</a></li>":c+='<li><a href="#'+e.values[E][d]+'">'+e.values[E][d]+"</a></li>";if("members.html"===u){$("#memberList").append(l),$("#memberList-collaborators").append(o);for(var C=1;C<e.values.length;C++){var z=e.values[C][m],D=e.values[C][d],I=e.values[C][g],O=e.values[C][h],A=e.values[C][b],T=e.values[C][w],S=e.values[C][y],B=e.values[C][k],P=e.values[C][j],q=e.values[C][x],R=s(P,"btn-mail","Mail")+s(B,"btn-github","GitHub")+s(T,"btn-orcid","ORCID")+s(S,"btn-gs","Google Scholar");"Yes"===q&&(R=s(P,"btn-mail","Mail")),"客員教授"===O||"客員准教授"===O?n+='<div class="content__member" id="'+z+'"><div class="repos_image"><img src="./img/member/'+I+'" alt="'+z+'" class="img_member"></div><ul><li class="position">'+O+'</li><li class="repos_name"><span class="name_ja">'+z+'</span><span class="name_en">'+D+'</span></li><li class="keyword">'+A+'</li><li class="PIC">担当サービス：<div class="member-list__services"></div></li><li class="links"><div class="btn-box">'+R+"</div></li></ul></div>":t+='<div class="content__member" id="'+z+'"><div class="repos_image"><img src="./img/member/'+I+'" alt="'+z+'" class="img_member"></div><ul><li class="position">'+O+'</li><li class="repos_name"><span class="name_ja">'+z+'</span><span class="name_en">'+D+'</span></li><li class="keyword">'+A+'</li><li class="PIC">担当サービス：<div class="member-list__services"></div></li><li class="links"><div class="btn-box">'+R+"</div></li></ul></div>"}}else if("members-en.html"===u){$("#memberList").append(c),$("#memberList-collaborators").append(r);for(var C=1;C<e.values.length;C++){var z=e.values[C][m],D=e.values[C][d],I=e.values[C][g],O=e.values[C][h],A=e.values[C][b],Q=e.values[C][f],T=e.values[C][w],S=e.values[C][y],B=e.values[C][k],P=e.values[C][j],q=e.values[C][x],R="";R=s(P,"btn-mail","Mail")+s(B,"btn-github","GitHub")+s(T,"btn-orcid","ORCID")+s(S,"btn-gs","Google Scholar"),"Yes"===q&&(R=s(P,"btn-mail","Mail")),"客員教授"===O||"客員准教授"===O?n+='<div class="content__member" id="'+D+'"><div class="repos_image"><img src="./img/member/'+I+'" alt="'+D+'" class="img_member"></div><ul><li class="position">'+O+'</li><li class="repos_name"><span class="name_ja">'+z+'</span><span class="name_en">'+D+'</span></li><li class="keyword">'+Q+'</li><li class="PIC">Charge：<div class="member-list__services"></div></li><li class="links"><div class="btn-box">'+R+"</div></li></ul></div>":t+='<div class="content__member" id="'+D+'"><div class="repos_image"><img src="./img/member/'+I+'" alt="'+D+'" class="img_member"></div><ul><li class="position">'+O+'</li><li class="repos_name"><span class="name_ja">'+z+'</span><span class="name_en">'+D+'</span></li><li class="keyword">'+Q+'</li><li class="PIC">Charge：<div class="member-list__services"></div></li><li class="links"><div class="btn-box">'+R+"</div></li></ul></div>"}}$("#member-list").append(t),$("#member-list-collaborators").append(n),a=a[0].values;for(var Y=[],C=2;C<a.length;C++)Y.push(a[C][7]);Y=_.rest(Y,2),Y=_.uniq(Y),Y=_.compact(Y);var Z={};Y.map(function(e){for(var s=2;s<a.length;s++)e===a[s][7]&&(Z[e]+=a[s][3]+",")}),$(".name_ja").each(function(){var e=$(this).text();if(e=e.split(" "),Z[e[0]]){var a=Z[e[0]];a+="",a=a.replace("undefined",""),a=a.slice(0,-1),a=a.replace(/,/g,", ");var s=$(this).parent().siblings(".PIC").find(".member-list__services");$(s).text(a)}else{var s=$(this).parent().siblings(".PIC");$(s).remove()}})})},access:function e(){var a=document.getElementById("main__contents-kashiwa").clientHeight;$("ul.sub__navigation-wrapper li").on("click",function(){$("ul.sub__navigation-wrapper li").removeClass("active"),$(this).addClass("active")}),$(".sub_2").on("click",function(){window.scrollTo(0,a)}),$(".sub_1").on("click",function(){window.scrollTo(0,0)}),$(window).scroll(function(){$(this).scrollTop()>a?($("ul.sub__navigation-wrapper li.sub_1").removeClass("active"),$("ul.sub__navigation-wrapper li.sub_2").addClass("active")):$(this).scrollTop()<a&&($("ul.sub__navigation-wrapper li.sub_2").removeClass("active"),$("ul.sub__navigation-wrapper li.sub_1").addClass("active"))})},contact:function e(){}};script.addEventListener("load",function(){$(function(){var e=document.getElementsByTagName("html")[0].dataset.pageType;console.log(e),initialize[e]();var a="."+e;$(".header__nav__contents"+a).find("a").css("border-bottom","2px solid white");var s=document.querySelectorAll(".sticky");Stickyfill.add(s);var i=window.location,t=i.href;$(".lang-en span").on("click",function(){if(t.match(/\/ja\/\d+\/\d+\/\d+\//))window.location.href=t.replace("/ja/","/en/");else{var a=e+"-en.html";window.location.href=a}}),$(".lang-ja span").on("click",function(){if(t.match(/\/en\/\d+\/\d+\/\d+\//))window.location.href=t.replace("/en/","/ja/");else{var a=e+".html";window.location.href=a}})})});