// Event-Single Click
$(document).ready(function(){
    $(".p1").click(function(){
      $(this).hide();
    });
  });

// Event-Double Click
  $(document).ready(function(){
    $("#p1").dblclick(function(){
      $(this).hide();
    });
    $("#p2").dblclick(function(){
        $(this).hide();
      });
      $("#p3").dblclick(function(){
        $(this).hide();
      });
  });

  Event-MouseEnter
  $(document).ready(function(){
    $("#p1").mouseenter(function(){
      alert("Welcome, now you enetered into the page");
    });
  });


// Hide and Show Effect
function hide(){
    $("#ss").hide();
}
function show(){
    $("#ss").show();
}

// fadding

$(document).ready(function(){
    $(".c1").click(function(){
      $("#color1").fadeOut();
      $("#color2").fadeOut("slow");
      $("#color3").fadeOut(3000);
    });
  })

  $(document).ready(function(){
    $(".c2").click(function(){
      $(".togl").toggle();
     
    });
  })

  $(document).ready(function(){
    $(".b1").click(function(){
      $(".m1").slideDown("slow");
    });
  });


$(document).ready(function(){
  $("#a2").click(function(){
    $(".m2").animate({left: '250px'});
  });
});


$(document).ready(function(){
  $("#hide123").click(function(){
    $("#hide456").hide("slow", function(){
      alert("The paragraph is now hidden");
    });
  });
});



$(document).ready(function(){
  $("#b8").click(function(){
    $("#p8").css("color", "red")
    .slideUp(3000)
    .slideDown(3000);
  });
});


$(document).ready(function(){
  $("#btn1").click(function(){
    alert("Text: " + $("#test").text());
  });
  $("#btn2").click(function(){
    alert("HTML: " + $("#test").html());
  });
});



$(document).ready(function(){
  $("#btn1").click(function(){
    $("#test1").text("Hello world!");
  });
  $("#btn2").click(function(){
    $("#test2").html("<b>Hello world!</b>");
  });
  $("#btn3").click(function(){
    $("#test3").val("Dolly Duck");
  });
});
$(document).ready(function(){
  $("#btn1").click(function(){
    $("p").append(" <b>Appended text</b>.");
  });

  $("#btn2").click(function(){
    $("ol").append("<li>Appended item</li>");
  });
});

function afterText() {
  var txt1 = "<b>I </b>";           // Create element with HTML
  var txt2 = $("<i></i>").text("love ");  // Create with jQuery
  var txt3 = document.createElement("b");   // Create with DOM
  txt3.innerHTML = "jQuery!";
  $("img").after(txt1, txt2, txt3);    // Insert new elements after img
}

$(document).ready(function(){
  $("button").click(function(){
    $("p").remove(".test");
  });
});


$(document).ready(function(){
  $("#q6").click(function(){
    $("#q1,#q2,#q3,#q4").addClass("blue");
    $("#q5").addClass("important");
  });
});

$(document).ready(function(){
  $("#j4").click(function(){
    $(".j1").css({"background-color": "yellow", "font-size": "200%"});
  });
});

$(document).ready(function(){
  $("#b4").click(function(){
    var txt = "";
    txt += "Width of div: " + $("#did1").width() + "</br>";
    txt += "Height of div: " + $("#did1").height() + "</br>";
    txt += "Inner width of div: " + $("#did1").innerWidth() + "</br>";
    txt += "Inner height of div: " + $("#did1").innerHeight();
    $("#did1").html(txt);
  });
});
$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideDown(5000);
  });
  $("#stop").click(function(){
    $("#panel").stop();
  });
});
