$(document).ready(function(){function e(e){var t="";for(var i in e)t+=e[i];return t}$("a.lightbox").fluidbox({loader:!0});new Swiper(".swiper-container",{pagination:".swiper-pagination",paginationClickable:!0,autoplay:7500,autoplayDisableOnInteraction:!1});$(window).width()>600?$(".aside-left").stick_in_parent({offset_top:30}):$(".aside-left").trigger("sticky_kit:detach"),$(window).resize(function(){$(window).width()>600?$(".aside-left").stick_in_parent({offset_top:30}):$(".aside-left").trigger("sticky_kit:detach")});var t=$(".grid").imagesLoaded(function(){t.isotope({itemSelector:".item",transitionDuration:"0.6s"})}),i={};$(".filter").on("click","button",function(){var n=$(this),o=n.parents(".filter-list"),c=o.attr("data-filter-group");i[c]=n.attr("data-filter");var a=e(i);t.isotope({filter:a})}),$(".filter-list").each(function(e,t){var i=$(t);i.on("click","button",function(){i.find(".checked").removeClass("checked"),$(this).addClass("checked")})});var n=$('input[name="files[]"]'),o=document.querySelector(".collection-total-count"),c=document.querySelector(".download-collection-button"),a=document.querySelector(".clear-collection");n.change(function(){var e=$('input[name="files[]"]:checked').length,t=$(this).parent();t.toggleClass("border"),n.each(function(){$(o).html(e)}),e>0?(classie.add(o,"color"),classie.remove(c,"disabled"),$(c).on("click",function(){$('input[name="zipit"]').trigger("click")})):(classie.remove(o,"color"),classie.add(c,"disabled")),$(a).on("click",function(){$('input[name="files[]"]:checked').trigger("click")}),classie.add(o,"countAnim"),setTimeout(function(){classie.remove(o,"countAnim")},350)})});