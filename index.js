var count = document.querySelectorAll("button").length;
// console.log(count);

for (var i = 0; i < count; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {

    // console.log(this.innerHTML);
    // var btntext = this.innerHTML;
    makesound(this.innerHTML);
    animation(this.innerHTML);

  });
}


function makesound(btntext) {

  switch (btntext) {
    case "w":
      var audio = new Audio("SOUND/tom1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("SOUND/tom2.mp3");
      audio.play();

      break;
    case "s":
      var audio = new Audio("SOUND/tom3.mp3");
      audio.play();

      break;
    case "d":
      var audio = new Audio("SOUND/tom4.mp3");
      audio.play();

      break;
    case "j":
      var audio = new Audio("SOUND/snare.mp3");
      audio.play();

      break;
    case "k":
      var audio = new Audio("SOUND/crash.mp3");
      audio.play();

      break;
    case "l":
      var audio = new Audio("SOUND/kick.mp3");
      audio.play();

      break;
    default:
      console.log(btntext);
  }



}
document.addEventListener("keydown", function(event) {

  makesound(event.key);
  animation(event.key);
});



function animation(key) {
  document.querySelector("." + key).classList.add("pressed");
  setTimeout(function() {
    document.querySelector("." + key).classList.remove("pressed");

  }, 100);

}
