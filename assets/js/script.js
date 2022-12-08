// SLIDER CONTAINER START
$(document).ready(function(){
    $(".first-slider").owlCarousel({
        items:1,
        loop:true,
        nav:true,
        dots:true,
        // autoplay:true,
        // autoplaySpeed:1000,
        smartSpeed:1500,
        autoplayHoverPause:true 


    });
})
// SLIDER CONTAINER END


function updateTimer() {
    future = Date.parse("jun 12, 2022 01:30:00");
 now = new Date();
 diff = future - now;

 days = Math.floor(diff / (1000 * 60 * 60 * 24));
 hours = Math.floor(diff / (1000 * 60 * 60));
 mins = Math.floor(diff / (1000 * 60));
 secs = Math.floor(diff / 1000);

 d = days;
 h = hours - days * 24;
 m = mins - hours * 60;
 s = secs - mins * 60;

 document.getElementById("timer")
  .innerHTML =
  '<div>' + d + '</div>' +
  '<div>' + h + '</div>' +
  '<div>' + m + '</div>' +
  '<div>' + s + '</div>';
}
setInterval('updateTimer()', 1000);



// $('.homeSlider').slick({
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//     arrows:true,
//     dots:true
//   });


$('.homeSlider-item').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 3
  });