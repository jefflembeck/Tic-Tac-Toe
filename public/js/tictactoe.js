$(document).ready(function(){
  var xturn = true;
  var oturn = true;
  $("div.space").delegate("div.space-top", "click", function(){
    if ($(this).text() === "X" || $(this).text() === "O") {
    } else {
      if (xturn) {
        $(this).text("X");
        xturn = false;
        oturn = true;
      } else {
        $(this).text("O");
        oturn = false;
        xturn = true;
      }
    }
  })
  $("div.space").delegate("div.space-mid", "click", function(){
    if ($(this).text() === "X" || $(this).text() === "O") {
    } else {
      if (xturn) {
        $(this).text("X");
        xturn = false;
        oturn = true;
      } else {
        $(this).text("O");
        oturn = false;
        xturn = true;
      }
    }
  })
  $("div.space").delegate("div.space-bot", "click", function(){
    if ($(this).text() === "X" || $(this).text() === "O") {
    } else {
      if (xturn) {
        $(this).text("X");
        xturn = false;
        oturn = true;
      } else {
        $(this).text("O");
        oturn = false;
        xturn = true;
      }
    }
  })
})
