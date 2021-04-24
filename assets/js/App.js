var owl = $(".owl-carousel");
owl.owlCarousel({
  loop: true,
  margin: 25,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    1000: {
      items: 2,
    },
  },
});
$(".chav.right").click(function () {
  owl.trigger("next.owl.carousel");
});
$(".chav.left").click(function () {
  owl.trigger("prev.owl.carousel");
});

$(window).scroll(function () {
  if ($(this).scrollTop() >= 250) {
    $(".to-top").fadeIn();
  } else {
    $(".to-top").fadeOut();
  }
});

$(".to-top").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 1000);
});
$(".btn-book-appoinment").click(function () {
  $(".book-appoinment-modal").modal("show");
});

$(document).on("submit", ".enqure-form", async function (e) {
  e.preventDefault();
  var data = $(this).serialize();
  var info = await fetch("api.php", {
    method: "POST",
    body: new URLSearchParams(data),
  });
  var res = await info.text();
  if (res == "success") {
    $(this)[0].reset();
    $(".book-appoinment-modal").modal("hide");
    alert("Form sent success");
  }
});
