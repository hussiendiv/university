
// full-slider-script
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        autoplay: true,
        autoplaySpeed: 1000,
        dots:false,
        nav:false,
        items: 1,
        loop: true,
        smartSpeed:1500,
        autoplayHoverPause : true ,
    });
});



// // for-responsive-menu
$(document).ready(function () {
    $(".navbar-toggler").click(function () {
        $(".navbar-toggler i").toggleClass("fa-times");
    });
});

// navBar
window.onscroll = function(){
    if(scrollY >= 100){
        // to add btn scroll up
        $('.btnUp').addClass('show');
        // to add bg for navbar
        $('nav').addClass('activeNav');
    }else{
        // to remove btn scroll up
        $('.btnUp').removeClass('show');
        // to remove bg for navbar
        $('nav').removeClass('activeNav');
    }
}
// return scroll to 0
$('.btnUp').click(function(){
    window.scrollTo({
        top: 0
    })
})
// $('.list').click(function(){
//     $(this).addClass('activeBg');
//     $(this).siblings().removeClass('activeBg');
    
// })