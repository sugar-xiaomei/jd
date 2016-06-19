
  $(function(){
  	var swiper = new Swiper('.swiper-container1', {
          pagination: '.swiper-pagination',
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
          paginationClickable: true,
          spaceBetween: 30,
          centeredSlides: true,
          autoplay: 2500,
          autoplayDisableOnInteraction: false
      });
          var swiper2 = new Swiper('.swiper-container2', {
          pagination: '.swiper-pagination',
          slidesPerView: 3,
          paginationClickable: true,
          spaceBetween: 30
      });
  });
