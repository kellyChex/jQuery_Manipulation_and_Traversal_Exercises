$(document).ready(function(){



$("button#prepend").click(function(){
  $('ul#ul1').prepend("<li>Now I'm first!</li>");
});

$("button#append").click(function(){
  $('ul#ul1').append("<li>Now I'm last!</li>");
});

$("button#before").click(function(){
  $("#pExample").before("<p>I'm the new p!</p>");
});

$("button#after").click(function(){
  $("#pExample").after("<p>Now I'm the new p!</p>");
});

$("button#remove").click(function(){
  $("#pExample").remove();
  });

$("button#selections").click(function(){
    $("#all").remove();
    $('#hiddenSelections').css('visibility', 'visible');
});

  $("button#selections").click(function(){
    $("#all").remove();
    $('#hiddenSelections').css('visibility', 'visible');
});

$("#h1Example").click(function(){
  $("#ul2").children();
  $("#ul2").css('border', '3px solid blue');
});

$("#ul2").children("li").first().click(function(){
  $("#red").remove();
  $("ul#ul2").prepend("<li id='red2'>Click here to reset my color.</li>");
  $("#red2").css("background-color", "red");
  $("#red2").click(function() {
      $(this).css("background-color", "white");
    });
});

$("#ul2 li:nth-child(2)").click(function(){
  $("#blue").css("background-color", "blue");
});

$("#ul2").children("li").last().click(function(){
  $("#green").css("background-color", "green");
});

$("button#erase").click(function() {
  location.reload();

});

$("button#hello").mouseover(function(){
  $("p").after("<h3>Clever Title</h3>");
});

  $('#remove').tooltip();

});
