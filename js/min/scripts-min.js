$(document).ready(function(){var e=$("html"),t=$("body"),a=t.find("#get-quote"),i=t.find("#submit-quote");a.find(".js-pretty-select").each(function(){var e=$(this),t=e.find(".js-select"),o=t.val(),s=t.find("option:selected").text(),n=e.find(".selected-option"),l=e.find(".select-options"),d="show-options",u="valid",c="selected";if(console.log(o),null!=o||void 0!=o){var r=l.find("li[data-value="+o+"]");n.text(s),r.addClass(c),e.addClass(u)}else{var f=t.find("option:first").text();n.text(f)}n.click(function(t){t.preventDefault(),e.hasClass(d)||(e.addClass(d),l.velocity("slideDown",{duration:300,easing:"easeOutCubic",queue:!1}),l.velocity({opacity:1},{duration:300,easing:"easeOutCubic",queue:!1}))}),l.find("li").click(function(e){e.preventDefault();var a=e.target.dataset.value;t.val(a),t.trigger("change"),l.velocity("fadeOut",{duration:300,easing:"easeOutCubic",queue:!1})}),t.change(function(o){var s=this.value,r=l.find("li[data-value="+s+"]"),f=r.text();l.find("."+c).removeClass(c),r.addClass(c),n.text(f),e.addClass(u),e.hasClass(d)&&e.removeClass(d),"product-select"===t.parents(".pretty-select").attr("id")&&a.find(".quote-form").hasClass("invalid")&&(a.find("quote-form").removeClass("invalid"),i.prop("disabled",!1))})}),i.click(function(e){e.preventDefault();var t=a.find("select#quote-state").val(),i=a.find("select#quote-product").val(),o="https://getquote.nationwide.com/qrp-web/qrpAction.action?NI.qt_st=&productType="+i+"&state="+t+"&quoteType=initiateQuote&NI.qt_prod=Auto&submitButtonName=Go&pdsNumber=020027684&WT.mc_id=NW_SC_Agt_FB-MainPromo_Facebook_Banner_813x311_Get-A-Quote_All_All&WT.tsrc=SclAgt",s=window.open(o,"new");console.log(t+", "+i),s?s.focus():alert("Please allow popups.")})});