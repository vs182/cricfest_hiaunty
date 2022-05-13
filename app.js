// document.getElementById('container').on('scroll', function() {
//     console.log("hello")
// })
var CHight = document.getElementById("container").clientHeight;
document.getElementById("center").style.opacity = 0

document.getElementById("center").style.transition = "2s"
document.getElementById("container").style.transition = "2s"
function myfunction() {
  var val = document.getElementById("container").scrollTop;
  var value = val/ CHight
  if (val== 0){
document.getElementById("center").style.opacity = 0
document.getElementById("container").style.background = ""



  }
  else if (value % 2 == 0) {
    console.log(val);
    document.getElementById("container").style.background = "rgba(200, 32, 44, 0.7)"
    document.getElementById("center").style.background = "#fff"
    document.getElementById("center").style.opacity = 1



  } else{
    console.log(val);
    document.getElementById("container").style.background = "rgba(0,0,0,0.5)";
    document.getElementById("center").style.background = "rgba(238, 28, 37, 0.7)";
    document.getElementById("center").style.opacity = 1

  }

}

var v = false;
function vid(){
  document.getElementById("container").classList.toggle("vid")
  if(v){
  document.getElementById("videos").style.display = "none"
  v = false
  }
  else{
  document.getElementById("videos").style.display = "block"
  v = true

  }

  
}
