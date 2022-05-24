// recommended slide show hide on mobile device
{
  const recommendedSlide = document.querySelector('.recommended-slide');

  function sliderToDefault(x) {
    if (x.matches) { // If media query matches
      recommendedSlide.classList.remove('recommended-slide');
    } else {
      recommendedSlide.classList.add('recommended-slide');
    }
  }
  
  let x = window.matchMedia("(max-width: 575px)")
  sliderToDefault(x) // Call listener function at run time
  x.addListener(sliderToDefault) // Attach listener function on state changes
}

// recommended slide initialize
$('.recommended-slide').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-alt-left"></i></button>',
  nextArrow: '<button type="button" class="slick-next"><i class="fas fa-arrow-alt-right"></i></button>',
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});


// you tube popup
jQuery(function(){
  jQuery("a.bla-1").YouTubePopUp();
});
