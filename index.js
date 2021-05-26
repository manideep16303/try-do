// Top Div and Brand

$(document).bind("scroll", function () {
  if ($(document).scrollTop() > 50) {
    $(".top-div").css("visibility", "hidden");
  } else {
    $(".top-div").css("visibility", "visible");
  }
});

$(window).bind("scroll", function () {
  if ($(window).scrollTop() > 50) {
    $(".trydo-btn").css("display", "flex");
  } else {
    $(".trydo-btn").css("display", "none");
  }
});

// End

// Mobile Navbar

function openNav() {
  $("#mySidebar").css("width", "15.6rem");
  $("#main").css("margin-left", "15.6rem");
}

function closeNav() {
  $("#mySidebar").css("width", "0px");
  $("#main").css("margin-left", "0px");
}

// End
