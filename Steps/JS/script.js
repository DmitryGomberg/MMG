$(document).ready(function(){
    $('.about').slick({
        arrows: false,
        dots:true,        
    });
    
    $('.menu_logo').on('click', function(){
        $('.menu').slideToggle()
    });
});