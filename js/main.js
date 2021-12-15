   lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
    })
$(function(){

  $('.btn').confettiButton({
     hoverOnly: true
  });

});
$(document).ready(function () {
  $(".icon").click(function () {
    $(".mobilenav").fadeToggle(500);
    $(".mobilenav").toggleClass("menu-toggle");
    $(".top-menu").toggleClass("top-animate");
    $(".mid-menu").toggleClass("mid-animate");
    $(".bottom-menu").toggleClass("bottom-animate");
  });
});
$(document).ready(function(){
  $("#date").html(new Date().getFullYear())
})
$(window).scroll(function () { 
  if($(this).scrollTop() > 1){
    $("nav").addClass("sticky")
  }else{
     $("nav").removeClass("sticky")
  }
});
$(window).on("load",function(){
  $(".preloader").addClass("disppear")
})

ScrollReveal().reveal('.about-container', {
    delay: 1200,
    duration: 900,
    reset: true,

   
})

ScrollReveal().reveal('.about-holder', {
    delay: 200,
    duration: 300,
    reset: true,
    distance: "200px",
    origin: "left"
   
})

ScrollReveal().reveal('.about-holder .one', {
    delay: 800,
    duration: 700,
    reset: true,
    distance: "100px",
   
})
ScrollReveal().reveal('.about-holder .two', {
    delay: 1200,
    duration: 700,
    reset: true,
    
   
})
ScrollReveal().reveal('.about-holder .three', {
    delay: 800,
    duration: 700,
    reset: true,
    distance: "100px",
    origin: "right"
   
})

ScrollReveal().reveal('.about-holder .four', {
    delay: 1200,
    duration: 700,
    reset: true,
    
   
})


ScrollReveal().reveal('.travelling-text', {
    delay: 605,
    duration: 800,
    reset: true,
})
ScrollReveal().reveal('.travelling-image', {
    delay: 745,
    duration: 800,
    reset: true,
})

ScrollReveal().reveal('.title', {
    delay: 565,
    duration: 800,
    reset: true,


})
ScrollReveal().reveal('.gallery-container', {
    delay: 595,
    duration: 800,
    reset: true,
    distance: '150px',
    

})
ScrollReveal().reveal('.copeles-img', {
    delay: 595,
    duration: 800,
    reset: true,
    distance: '170px'
})
ScrollReveal().reveal('.coples-container', {
    
    duration: 200,
    reset: true,
    distance: "200px",
    origin: "left"
   
})

ScrollReveal().reveal('.couples-item-1', {
    delay: 595,
    duration: 800,
    reset: true,
   
})
ScrollReveal().reveal('.couples-item-2', {
    delay: 595,
    duration: 800,
    reset: true,
})
ScrollReveal().reveal('.contact-container', {
    duration: 200,
    reset: true,
    distance: "200px",
    origin: "right"
   
})
ScrollReveal().reveal('.contact-item', {
    delay: 805,
    duration: 800,
    reset: true,
})
ScrollReveal().reveal('.form', {
    delay: 805,
    duration: 800,
    reset: true,
})
ScrollReveal().reveal('footer p', {
    delay: 305,
    duration: 800,
    reset: true,
})
