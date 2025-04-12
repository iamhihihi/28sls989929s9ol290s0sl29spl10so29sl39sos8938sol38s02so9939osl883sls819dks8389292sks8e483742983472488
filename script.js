function passcheck() {
  var thing = document.getElementById("pBox");
  var otherthing = thing.value;
  if(otherthing == "1prankingisfunny1!") {
  return true;                        
  }
  alert("Access denied!");
  return false;
}
