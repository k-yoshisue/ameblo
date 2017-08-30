//このブログの読者になる
$(function(){
var r = $('<div class="rcheck_box"><div class="readercheck"><a href="https://blog.ameba.jp/reader.do?bnm=bridalsalon-tokyo">このブログの読者になる（チェック）</a></div></div>');
$('.globalLinkArea:first').after($(r).clone());
$('.globalLinkArea:last').before($(r).clone());
});
