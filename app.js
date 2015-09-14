var actionColors = {
  "action-hire": {
    selected: "#d14949",
    unselected: "#b32828",
  },
  "action-pay": {
    selected: "#3aa73a",
    unselected: "#208f20",
  },
  "action-about": {
    selected: "#d1ba49",
    unselected: "#b39b28",
  },
  "action-contact": {
    selected: "#503d90",
    unselected: "#3b277b",
  }
}
var main = function() {
  console.log("main called");
  /*
  $(".action").each(function(i, obj) {
      $(this).css("background-color", actionColors[$(this).attr("id")].unselected);
  });
  $(".action").hover(function() {
    $(".action").each(function(i, obj) {
      $(this).stop().animate({
        backgroundColor: actionColors[$(this).attr("id")].unselected,
        height: "24.5vh" 
      }, 250);
    });
    $(this).stop().animate({
      backgroundColor: actionColors[$(this).attr("id")].selected,
      height: "26.5vh" 
    }, 250);
  }, function() {
    $(".action").each(function(i, obj) {
      $(this).stop().animate({
        backgroundColor: actionColors[$(this).attr("id")].unselected,
        height: "25vh" 
      }, 250);
    });
  });
  */
  $(".action").click(function() {
    if($(this).hasClass("active-action")) {
      $(".action").removeClass("inactive-action");
      $(".action").removeClass("active-action");
    } else {
      $(".action").addClass("inactive-action");
      $(this).removeClass("inactive-action");
      $(this).addClass("active-action");
    }
  });
}

$(document).ready(main);
