document.querySelectorAll(".drum > div").forEach(element => {
    element.addEventListener("click",() => playMusic(element.className))
});
function playMusic(drumType){
    switch (drumType) {
    case "snare":
      sound = src="./sounds/snare.mp3";
      break;
    case "kick":
      sound = "./sounds/kick.mp3";
      break;
    case "hi-hat":
      sound = "./sounds/hihat.mp3";
      break;
    case "tom1":
      sound = "./sounds/tom1.mp3";
      break;
    case "tom2":
      sound = "./sounds/tom2.mp3";
      break;
    case "floor-tom":
      sound = "./sounds/floortom.mp3";
      break;
    case "crash":
      sound = "./sounds/crash.mp3";
      break;
    case "ride":
      sound = "./sounds/ride.mp3";
      break;
    default:
      console.log("Không có âm thanh cho:", drumType);
    }
    new Audio(sound).play();
    return
    
}