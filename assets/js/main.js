var loadinAnimation = gsap.timeline();
$(document).ready(function () {
  var currentDir = $("a").css("direction");
  console.log(currentDir);

  if ($(".header_slider").length) {
    $(".header_slider").slick({
      arrows: true,
      dots: true,
      rtl: currentDir == "rtl" ? true : false,
    });
  }

  if ($(".custom-select").length) {
    $(".custom-select").niceSelect();
  }

  if ($(".our_compositions_section1 .our_compositions_slider").length) {
    $(".our_compositions_section1 .our_compositions_slider").slick({
      slidesToShow: 3.5,
      arrows: true,
      dots: false,
      slidesToScroll: 1,
      infinite: false,
      rtl: currentDir == "rtl" ? true : false,
      prevArrow: $(".our_compositions_section1 .prev"),
      nextArrow: $(".our_compositions_section1 .next"),
      responsive: [
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 2.7,
            slidesToScroll: 1,
            infinite: false,
            dots: false,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2.1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  }

  if ($(".our_compositions_section2 .our_compositions_slider").length) {
    $(".our_compositions_section2 .our_compositions_slider").slick({
      slidesToShow: 3.5,
      arrows: true,
      dots: false,
      slidesToScroll: 1,
      infinite: false,
      rtl: currentDir == "rtl" ? true : false,
      prevArrow: $(".our_compositions_section2 .prev"),
      nextArrow: $(".our_compositions_section2 .next"),
      responsive: [
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 2.7,
            slidesToScroll: 1,
            infinite: false,
            dots: false,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2.1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  }

  if ($(".our_compositions_section3 .our_compositions_slider").length) {
    $(".our_compositions_section3 .our_compositions_slider").slick({
      slidesToShow: 3.5,
      arrows: true,
      dots: false,
      slidesToScroll: 1,
      infinite: false,
      rtl: currentDir == "rtl" ? true : false,
      prevArrow: $(".our_compositions_section3 .prev"),
      nextArrow: $(".our_compositions_section3 .next"),
      responsive: [
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 2.7,
            slidesToScroll: 1,
            infinite: false,
            dots: false,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2.1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  }

  if ($(".our_compositions_section4 .our_compositions_slider").length) {
    $(".our_compositions_section4 .our_compositions_slider").slick({
      slidesToShow: 3.5,
      arrows: true,
      dots: false,
      slidesToScroll: 1,
      infinite: false,
      rtl: currentDir == "rtl" ? true : false,
      prevArrow: $(".our_compositions_section4 .prev"),
      nextArrow: $(".our_compositions_section4 .next"),
      responsive: [
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 2.7,
            slidesToScroll: 1,
            infinite: false,
            dots: false,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2.1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  }

  if ($(".watch_video_scrollable".length)) {
    $(".watch_video_scrollable").mCustomScrollbar({
      theme: "dark",
      alwaysShowScrollbar: 1,
      scrollEasing: "easeOut",
      mouseWheel: { preventDefault: true },
    });
  }

  if ($(".our_principles_slider").length) {
    $(".our_principles_slider").slick({
      slidesToShow: 1,
      arrows: true,
      dots: false,
      infinite: false,
      rtl: currentDir == "rtl" ? true : false,
      prevArrow: $(".our_principles .prev"),
      nextArrow: $(".our_principles .next"),
    });
  }

  // $("html").addClass("splash-active");

  AOS.init();

  loadinAnimation
    .to(".splach .splach_front", {
      y: "100%",
      duration: 1.2,
      ease: "expo.inOut",
    })
    .to(".splach .splach_behind", { top: "-100%", duration: 1.2, ease: "expo.inOut" });

  loadinAnimation.pause();

  $("body").tooltip({ selector: "[data-toggle=tooltip]" });
});

$(window).on("load", function () {
  // $("html").removeClass("splash-active");
  var currentDir = $("a").css("direction");
  setTimeout(() => {
    loadinAnimation.play();
  }, 500);
  new Mmenu("#menu", {
    offCanvas: {
      slidingSubmenus: false,
      position: currentDir == "rtl" ? "right-front" : "left-front",
    },
    theme: "light",
    counters: {
      add: true,
    },
  });
  $(".mm-navbar__title").text("القائمة");
});

// $(window).on("load", function () {
//   $("html").removeClass("splash-active");
//   $(".splach").addClass("splashscreen-none");
// });
