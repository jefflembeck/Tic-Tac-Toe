$(document).ready(function(){
  var xturn = true;
  $("div.space").delegate("div", "click", function(){
    if ($(this).text() === "X" || $(this).text() === "O") {
    } else {
      if (xturn) {
        $(this).text("X");
        xturn = false;
      } else {
        $(this).text("O");
        xturn = true;
      }
    }
    checkWin();
  })

  // If text lines up
  function checkWin() {
    if ($('#1').text() === "X" && $('#2').text() === "X" && $('#3').text() === "X") {
      alert("WE HAVE A WINNER!");
    } else if ($('#4').text() === "X" && $('#5').text() === "X" && $('#6').text() === "X") {
      alert("WE HAVE A WINNER!");
    } else if ($('#7').text() === "X" && $('#8').text() === "X" && $('#9').text() === "X") {
      alert("WE HAVE A WINNER!");
    } else if ($('#1').text() === "X" && $('#4').text() === "X" && $('#7').text() === "X") {
      alert("WE HAVE A WINNER!");
    } else if ($('#2').text() === "X" && $('#5').text() === "X" && $('#8').text() === "X") {
      alert("WE HAVE A WINNER!");
    } else if ($('#3').text() === "X" && $('#6').text() === "X" && $('#9').text() === "X") {
      alert("WE HAVE A WINNER!");
    } else if ($('#1').text() === "X" && $('#5').text() === "X" && $('#9').text() === "X") {
      alert("WE HAVE A WINNER!");
    } else if ($('#3').text() === "X" && $('#5').text() === "X" && $('#7').text() === "X") {
      alert("WE HAVE A WINNER!");
    } else if ($('#1').text() === "O" && $('#2').text() === "O" && $('#3').text() === "O") {
      alert("WE HAVE A WINNER!");
    } else if ($('#4').text() === "O" && $('#5').text() === "O" && $('#6').text() === "O") {
      alert("WE HAVE A WINNER!");
    } else if ($('#7').text() === "O" && $('#8').text() === "O" && $('#9').text() === "O") {
      alert("WE HAVE A WINNER!");
    } else if ($('#1').text() === "O" && $('#4').text() === "O" && $('#7').text() === "O") {
      alert("WE HAVE A WINNER!");
    } else if ($('#2').text() === "O" && $('#5').text() === "O" && $('#8').text() === "O") {
      alert("WE HAVE A WINNER!");
    } else if ($('#3').text() === "O" && $('#6').text() === "O" && $('#9').text() === "O") {
      alert("WE HAVE A WINNER!");
    } else if ($('#1').text() === "O" && $('#5').text() === "O" && $('#9').text() === "O") {
      alert("WE HAVE A WINNER!");
    } else if ($('#3').text() === "O" && $('#5').text() === "O" && $('#7').text() === "O") {
      alert("WE HAVE A WINNER!");
    }
  }
})
