$(".tabs__container .tabs-content").hide(); // Скрываем содержание
$(".navigation li:first").attr("id","navigation__list_item--active"); // Активируем первую закладку
$(".mobile-menu .navigation li:first").attr("id","navigation__list_item--active"); // Активируем первую закладку
$(".tabs__container .tabs-content:first").fadeIn(); // Выводим содержание

$('.navigation a').click(function(e) {
    e.preventDefault();        
    $(".tabs__container .tabs-content").hide(); //Скрыть все содержание
    $(".navigation li").attr("id",""); //Сброс ID
    $(this).parent().attr("id","navigation__list_item--active"); // Активируем закладку
    $('#' + $(this).attr('title')).fadeIn(); // Выводим содержание текущей закладки
});

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	loop:true,
  	items: 1,
  	nav: true,
  	navText: [
  	"<img src='static/img/general/left-arrow.png' alt='left' />",
  	"<img src='static/img/general/right-arrow.png' alt='right' />"]
  });

  $("#login__email").blur(function(){
        if($(this).val() != '') {
        var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
        if(pattern.test($(this).val())){
            $(this).css({'border' : '1px solid #569b44'});
            $('#valid').text('Верно');
        } else {
            $(this).css({'border' : '1px solid #ff0000'});
            $('#valid').text('Не верно');
        }
    } else {
        $(this).css({'border' : '1px solid #ff0000'});
        $('#valid').text('Поле не должно быть пустым');
    }
  })

});
	
$("#login__password").blur(function(){
    if($(this).val() != '') {
        var pattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
        if(pattern.test($(this).val())){
        $(this).css({'border' : '1px solid #569b44'});
        $('#valid-pass').text('Верно');
    } else {
        $(this).css({'border' : '1px solid #ff0000'});
        $('#valid-pass').text('Меньше 6 символов, пароль должен быть из букв A-z и символов');
    }
    } else {
        $(this).css({'border' : '1px solid #ff0000'});
        $('#valid-pass').text('Поле не должно быть пустым');
    }
});

var popUp = document.getElementById('popUp');
var btn = document.getElementById("open-popun");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    popUp.style.display = "block";
}
span.onclick = function() {
    popUp.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == popUp) {
        popUp.style.display = "none";
    }
}