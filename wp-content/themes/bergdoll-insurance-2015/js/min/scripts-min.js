function openWin(){var t=$(".quote-form").attr("data-src");myWindow=window.open(t,"_blank","width=600, height=600"),window.opener.$(".getQuote").trigger("click")}function closeWin(){myWindow.close()}var $body=$("body");$(document).ready(function(){var t=$("#state_select"),e=$("#start_quote");t.change(function(){var t=200,i=$(this).children("option:selected").attr("data-opts"),a="."+i;$(a).siblings(".active").fadeOut(t,function(){$(this).removeClass("active"),$(".product_select").val([]),$(a).fadeIn(t/2).addClass("active")}),e.addClass("inactive").removeAttr("href")}),$(".product_select").change(function(){if($(this).parent(".state-opts").hasClass("active")){$widthSetter=$(this).next(".js_width_tmp"),$widthSetter.html($(this).children("option:selected").text());var t=$widthSetter.width();$(this).width(t);var i=$(this).children("option:selected").attr("data-href");e.attr("href",i).removeClass("inactive")}}),$(".button").click(function(t){if($(this).hasClass("inactive"))t.preventDefault();else{t.preventDefault(),openWin();var e=$(this).attr("href")}})}),$(window).load(function(){});