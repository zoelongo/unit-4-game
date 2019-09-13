$(document).ready(function(){
    var randomNum= Math.floor(Math.random() * 102) +19;
    $("#randomNumber").text(randomNum);

    var crystalNum1= Math.floor(Math.random() * 11) + 1;
    var crystalNum2= Math.floor(Math.random() * 11) + 1;
    var crystalNum3= Math.floor(Math.random() * 11) + 1;
    var crystalNum4= Math.floor(Math.random() * 11) + 1;

    var userTotal= 0; 
    var wins= 0;
    var losses = 0;

  $("#winsCount").text(wins);
  $("#lossesCount").text(losses);
  $("#")

  function winner(){
  alert("You won! Congratulations!");
    wins++; 
    $("#winsCount").text(wins);
    reset();
  }
  
  function loser(){
  alert ("You lost! What a disappointment!");
    losses++;
    $("#lossesCount").text(losses);
    reset();
  }


  $("gems").on("click", function () {
    var newScore = userTotal + parseInt($(this).attr("value")); 
      console.log("New Score: " + newScore); 
    $("#playerScore").html(newScore); 
    $("playerScore").text(newScore);

    $("#crystal1").on("click", function(){
      newScore = userTotal + crystalNum1;
      console.log("New userTotal= " + userTotal);
      $("#playerScore").text(userTotal); 
            
          if (userTotal = randomNum){
            winner();
          }
          else if (userTotal > randomNum){
            loser();
          }   
    })  
    $("#crystal2").on("click", function(){
      userTotal = userTotal + crystalNum2;
      console.log("New userTotal= " + userTotal);
      $("#playerScore").text(userTotal); 
          if (userTotal = randomNum){
            winner();
          }
          else if (userTotal > randomNum){
            loser();
          } 
    })  
    $("#crystal3").on("click", function(){
      userTotal = userTotal + crystalNum3;
      console.log("New userTotal= " + userTotal);
      $("#playerScore").text(userTotal);

            if (userTotal = randomNum){
            winner();
          }
          else if ( userTotal > randomNum){
            loser();
          } 
    })  
    $("#crystal4").on("click", function(){
      userTotal = userTotal + crystalNum4;
      console.log("New userTotal= " + userTotal);
      $("#playerScore").text(userTotal); 
        
            if (userTotal = randomNum){
            winner();
          }
          else if (userTotal > randomNum){
            loser();
          }
    });   
  });
})
