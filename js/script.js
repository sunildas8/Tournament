setTimeout(function(){
    $(".preloder").fadeOut();
},3000)

// Set the date we're counting down to
var countDownDate = new Date("december 31, 2022").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("day").innerHTML = days
  document.getElementById("hour").innerHTML = hours
  document.getElementById("min").innerHTML = minutes
  document.getElementById("sec").innerHTML = seconds

  document.getElementById("day-2").innerHTML = days
  document.getElementById("hour-2").innerHTML = hours
  document.getElementById("min-2").innerHTML = minutes
  document.getElementById("sec-2").innerHTML = seconds

  document.getElementById("day-3").innerHTML = days
  document.getElementById("hour-3").innerHTML = hours
  document.getElementById("min-3").innerHTML = minutes
  document.getElementById("sec-3").innerHTML = seconds

  document.getElementById("day-4").innerHTML = days
  document.getElementById("hour-4").innerHTML = hours
  document.getElementById("min-4").innerHTML = minutes
  document.getElementById("sec-4").innerHTML = seconds

  document.getElementById("day-5").innerHTML = days
  document.getElementById("hour-5").innerHTML = hours
  document.getElementById("min-5").innerHTML = minutes
  document.getElementById("sec-5").innerHTML = seconds
  
  document.getElementById("day-6").innerHTML = days
  document.getElementById("hour-6").innerHTML = hours
  document.getElementById("min-6").innerHTML = minutes
  document.getElementById("sec-6").innerHTML = seconds

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

new VenoBox({
    selector: '.my-video-links',
});

$(".popular-slider").slick({
    vertical: true,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "0",
    prevArrow: '<i class="fas fa-chevron-up prev"></i>',
    nextArrow: '<i class="fas fa-chevron-down next"></i>',
    asNavFor: ".image-slider",
})

$(".image-slider").slick({
    vertical: true,
    slidesToShow: 1,
    arrows: false,
    asNavFor: ".popular-slider",
})

$(".about-slider").slick({
    prevArrow: '<i class="fas fa-long-arrow-alt-left prev"></i>',
    nextArrow: '<i class="fas fa-long-arrow-alt-right next"></i>',
})


$(window).scroll(function(){
    console.log($(window).scrollTop())

    if($(window).scrollTop() > 600){
      $(".topper").fadeIn()
    }else{
      $(".topper").fadeOut()
    }
  })

$(".topper").click(function(){
    $("html,body").animate({
      scrollTop: 0
    },1000)
  })

  const input = document.getElementById("search-input");
  const searchBtn = document.getElementById("search-btn");
  
  const expand = () => {
    searchBtn.classList.toggle("close");
    input.classList.toggle("square");
  };
  
  searchBtn.addEventListener("click", expand);

  $(".login").click(function(){
    $(".sidebar").toggleClass("test")
  })

  $(".crose").click(function(){
    $(".sidebar").removeClass("test")
  })
  

  let menuItems = {
    'Home': '#',
    'About us': '#',
    'Fixtures': '#',
    'Blog': '#',
    'Gallery': '#',
    'Shop': '#',
    'Pages': '#',
    'Contact': '#',
}

$('#sidebar').Sidebar({
    openTriggerId: 'openSidebar',
    items: menuItems,
    width: 250,
    sidebarColor: '#333',
    closeButtonColor: '#fff'
});


$(".news-slider").slick({
  prevArrow: '<i class="fas fa-long-arrow-alt-left prev"></i>',
  nextArrow: '<i class="fas fa-long-arrow-alt-right next"></i>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
})