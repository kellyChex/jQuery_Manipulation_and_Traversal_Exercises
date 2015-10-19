$(document).ready(function(){

  // $("h1").dblclick(function() {
  //   alert("This is a header.");
  //   alert("I told you, THIS IS A HEADER!");
  // });
  //
  // $("p").dblclick(function() {
  //   alert("This is a paragraph.");
  // });

  $(".clickable").click(function() {
    $("#eyesOpen").slideDown().slideToggle();
    $("#eyesClosed").slideUp().slideToggle();
  });

  // $("h2").dblclick(function() {
  //   alert("This is a h2 header!");
  // });
  //
  // $("ul").dblclick(function() {
  //   alert("This is an unordered list.");
  // });

  });
