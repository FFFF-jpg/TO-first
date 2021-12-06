$(function(){
      $('.fade').on('init', function(event, slick) {
        $(this).append('<div class="slick-counter"><span class="current"></span> / <span class="total"></span></div>');
        $('.current').text(slick.currentSlide + 1);
        $('.total').text(slick.slideCount);
      })
      .slick({
        autoplay:true,
        infinite: true,
        autoplaySpeed:2000,
        speed: 2000,
        fade: true,
        arrows: false,
        cssEase: 'linear'
      })
      .on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        $('.current').text(nextSlide + 1);
      });
});