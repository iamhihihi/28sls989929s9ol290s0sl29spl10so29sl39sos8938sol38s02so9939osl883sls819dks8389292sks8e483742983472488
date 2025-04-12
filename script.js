function passcheck() {
  var thing = document.getElementById("pBox");
  var otherthing = thing.value;
  if(otherthing == "hi") {
  return true;                        
  }
  alert("Access denied!");
  return false;
}
