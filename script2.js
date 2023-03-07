function getInfo(){
    play1 = document.getElementById("player1").value;
    play2 = document.getElementById("player2").value;
    const url = "tictactoe.html?p1=" + encodeURIComponent(play1) + "&p2=" + encodeURIComponent(play2);
     window.location.href = url;
   }