// Tạo object chứa sẵn các âm thanh
const sounds = {
  "snare": new Audio("./sounds/snare.mp3"),
  "kick": new Audio("./sounds/kick.mp3"),
  "hi-hat": new Audio("./sounds/hihat.mp3"),
  "tom1": new Audio("./sounds/tom1.mp3"),
  "tom2": new Audio("./sounds/tom2.mp3"),
  "floor-tom": new Audio("./sounds/floortom.mp3"),
  "crash": new Audio("./sounds/crash.mp3"),
  "ride": new Audio("./sounds/ride.mp3")
};

document.querySelectorAll(".drum > div").forEach(element => {
  element.addEventListener("click", () => playMusic(element.className));
});

function playMusic(drumType) {
  let sound = sounds[drumType];
  if (sound) {
    sound.currentTime = 0; 
    sound.play();
  } else {
    console.log("Không có âm thanh cho:", drumType);
  }
}
