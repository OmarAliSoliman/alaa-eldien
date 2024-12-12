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


  if ($(".department_slider").length) {
    $(".department_slider").slick({
      slidesToShow: 8,
      arrows: false,
      dots: true,
      slidesToScroll: 8,
      infinite: false,
      rtl: currentDir == "rtl" ? true : false,
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

  // rated_storees_slider

  if ($(".rated_storees_slider").length) {
    $(".rated_storees_slider").slick({
      slidesToShow: 3.7,
      arrows: false,
      dots: false,
      slidesToScroll: 1,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 1500,
      rtl: currentDir == "rtl" ? true : false,
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

  if ($(".personal-img").length) {
    $(document).on("change", ".personal-img-file", function () {
      var uploadFile = $(this);
      var files = !!this.files ? this.files : [];
      if (!files.length || !window.FileReader) return; // no file selected, or no FileReader support

      if (/^image/.test(files[0].type)) {
        // only image file
        var reader = new FileReader(); // instance of the FileReader
        reader.readAsDataURL(files[0]); // read the local file

        reader.onloadend = function () {
          // set image data as background of div
          //alert(uploadFile.closest(".upimage").find('.imagePreview').length);
          uploadFile
            .closest(".personal-img")
            .find(".per")
            .css("background-image", "url(" + this.result + ")");
          $(".personal-img-validation-delete").css("display", "block");
        };
      }
    });
  }

  if ($(".custom_input_file").length) {
    $("#inputfile").on("change", function (e) {
      var uploadFile = $(this);
      var files = !!this.files ? this.files : [];
      if (!files.length || !window.FileReader) return; // no file selected, or no FileReader support

      if (/^image/.test(files[0].type)) {
        // only image file
        var reader = new FileReader(); // instance of the FileReader
        reader.readAsDataURL(files[0]); // read the local file
        var catditem = $(this)
          .closest(".moda_images")
          .find(".card-img:last")
          .clone();
        $(catditem).insertBefore(".custom_input_file");
        reader.onloadend = function () {
          console.log(this.result);
          $(catditem).find(".img-parent img").attr("src", this.result);
        };
      }
    });
  }

  if ($(".store_details_slider").length) {
    $(".store_details_slider").slick({
      slidesToShow: 9.5,
      arrows: false,
      dots: false,
      slidesToScroll: 1,
      infinite: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 1500,
      rtl: currentDir ? true : false,
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
            slidesToShow: 5.4,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2.1,
          },
        },
      ],
    });
  }

  if ($(".buy_basket").length) {
    $(".input-number-increment").on("click", function () {
      let inVal = $(this).parent().find(".numinput").val();
      console.log(inVal);
      inVal = parseInt(inVal);
      inVal += 1;
      $(this).parent().find(".numinput").val(inVal);
    });

    $(".input-number-decrement").on("click", function () {
      let inVal = $(this).parent().find(".numinput").val();
      console.log(inVal);
      inVal = parseInt(inVal);
      inVal -= 1;
      if (inVal <= 0) {
        inVal = 0;
      }
      $(this).parent().find(".numinput").val(inVal);
    });
  }

  if ($(".product_details_page_gallery").length) {
    $(".slider-for").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: ".slider-nav",
    });
    $(".slider-nav").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: ".slider-for",
      dots: true,
      centerMode: true,
      focusOnSelect: true,
    });
  }

  if ($(".audio").length) {
    $(".audio").on("click", function (e) {
      e.preventDefault();
      var link = $(this).attr("data-audio");
      $(".sound_modal").addClass("sound_modal_active");
      $(".sound_modal audio").attr("src", link);
      $(".sound_modal audio")[0].play();
      $(".sound_modal .audioplayer").addClass("audioplayer-playing");
      $("html").addClass("modal-active");
    });
  }

  if ($(".sound_modal").length) {
    $(".sound_modal audio").audioPlayer({
      classPrefix: "audioplayer",
      strPlay: "",
      strPause: "",
      strVolume: "",
    });

    $(".sound_modal .close_sound_modal").click(function () {
      $(".sound_modal audio")[0].pause();
      $(".sound_modal audio").attr("src", "");
      $(".sound_modal .audioplayer").removeClass("audioplayer-playing");
      $(".sound_modal").removeClass("sound_modal_active");
      $("html").removeClass("modal-active");
    });
  }

  if ($(".department_wrapper").length) {
    const slider = document.querySelectorAll(".department_wrapper");
    let isDown = false;
    let startX;
    let scrollLeft;

    scrollFunction(slider[0]);
    scrollFunction(slider[1]);

    function scrollFunction(slider) {
      slider.addEventListener("mousedown", (e) => {
        isDown = true;
        slider.classList.add("active");
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
      });
      slider.addEventListener("mouseleave", () => {
        isDown = false;
        slider.classList.remove("active");
      });
      slider.addEventListener("mouseup", () => {
        isDown = false;
        slider.classList.remove("active");
      });
      slider.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 3; //scroll-fast
        slider.scrollLeft = scrollLeft - walk;
        console.log(walk);
      });
    }
  }

  // $("html").addClass("splash-active");

  AOS.init();

  $("body").tooltip({ selector: "[data-toggle=tooltip]" });
});

// $(window).on("load", function () {
//   // $("html").removeClass("splash-active");
//   var currentDir = $("a").css("direction");
//   $(".splashscreen").addClass("splashscreen_none");
//   new Mmenu("#menu", {
//     offCanvas: {
//       slidingSubmenus: false,
//       position: currentDir == "rtl" ? "right-front" : "left-front",
//     },
//     theme: "light",
//     counters: {
//       add: true,
//     },
//   });
//   $(".mm-navbar__title").text("القائمة");
// });

// $(window).on("load", function () {
//   $("html").removeClass("splash-active");
//   $(".splach").addClass("splashscreen-none");
// });
