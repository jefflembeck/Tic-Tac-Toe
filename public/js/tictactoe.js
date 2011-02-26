$(document).ready(function(){
  var xturn = true;
  $("div.board").delegate("div", "click", function(){
    if ($(this).text() === "X" || $(this).text() === "O") {
    } else {
      if (xturn) {
        $(this).text("X");
        xturn = false;
        $("p#inst").text("O's turn!")
      } else {
        $(this).text("O");
        xturn = true;
        $("p#inst").text("X's turn!")
      }
    }
    checkWin();
  })

  function catsGame() {
    for(var i = 1; i < 10; i++) {
      if ($("#" + i).text() === "") {
        return false;
      }
    }
    return true;
  }

  function clearBoard() {
    for(var i = 1; i < 10; i++) {
      $("#" + i).text("");
    }
    $("#inst").text("Click boxes to play!");
  }

  // If text lines up
  function checkWin() {
    if (($('#1').text() === "X" && $('#2').text() === "X" && $('#3').text() === "X") ||
        ($('#4').text() === "X" && $('#5').text() === "X" && $('#6').text() === "X") ||
        ($('#7').text() === "X" && $('#8').text() === "X" && $('#9').text() === "X") ||
        ($('#1').text() === "X" && $('#4').text() === "X" && $('#7').text() === "X") ||
        ($('#2').text() === "X" && $('#5').text() === "X" && $('#8').text() === "X") ||
        ($('#3').text() === "X" && $('#6').text() === "X" && $('#9').text() === "X") ||
        ($('#1').text() === "X" && $('#5').text() === "X" && $('#9').text() === "X") ||
        ($('#3').text() === "X" && $('#5').text() === "X" && $('#7').text() === "X")) {
          alert("X wins!");
          clearBoard();
    } else if (($('#1').text() === "O" && $('#2').text() === "O" && $('#3').text() === "O") ||
        ($('#4').text() === "O" && $('#5').text() === "O" && $('#6').text() === "O") ||
        ($('#7').text() === "O" && $('#8').text() === "O" && $('#9').text() === "O") ||
        ($('#1').text() === "O" && $('#4').text() === "O" && $('#7').text() === "O") ||
        ($('#2').text() === "O" && $('#5').text() === "O" && $('#8').text() === "O") ||
        ($('#3').text() === "O" && $('#6').text() === "O" && $('#9').text() === "O") ||
        ($('#1').text() === "O" && $('#5').text() === "O" && $('#9').text() === "O") ||
        ($('#3').text() === "O" && $('#5').text() === "O" && $('#7').text() === "O")) {
          alert("O wins!");
          clearBoard();
    } else if (catsGame()) {
      alert("Cat's Game. Bummer. ");
      clearBoard();
    }
  }
})
