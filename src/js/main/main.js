$(document).ready(function () {

  //Modal Search
  $('#action-search').click(function () {
    $('.__modal_search').css({ "display": "block" });
  });

  //Scroll Next Section
  $('#scroll_next').click(function() {
    $('html,body').animate({
      scrollTop: $('.__ss_services').offset().top - 100
    }, 1000);
  });

  //Popup
  $('#show_popup').magnificPopup({
    items: [
      {
        src: "https://www.youtube.com/watch?v=y_6aSG2yfe8",
        type: 'iframe'
      },
    ],
  });
  
  // Owl Carousel Comment Customer
  $('.feedback_customer').owlCarousel({
    loop: false,
    nav: true,
    margin: 30,
    dots: true,
    lazyLoad:true,
    responsive: {
      1000: {
        items: 2,
      },
    },
  });
});
