
var audio = new Audio("/assets/bg.mp3");
audio.controls = true;
audio.loop = true;
var playimg = document.getElementById("playpause");
var audiostate = 0;
function Pause() {
  // audio.pause();
  if (audiostate==0) {
    audio.play();
    audiostate=1;
    playimg.src="/assets/pause.png";
  } else {
    audio.pause();
    audiostate=0;
    playimg.src="/assets/play.png";

  }
  var buttonLofi = document.getElementById("lofibutton");
  var pausebutton = document.getElementById("pause");
}

// function Pause(){
//   var buttonLofi = document.getElementById("lofibutton");
//   if (buttonLofi.style.display= "none"){

//   }
// }
function getRandomSentence() {
  var index = Math.floor(Math.random() * sentences.length);
  return sentences[index];
}

var sentences = [
  "Focus on the journey, not the destination.",
  "Comfort Zone ? Nah ! Lets take an extra step",
  "One day, all your hard work will pay off.",
  "It's worth the pain !",
  "Do what is right, not what is easy.",
  "We generate fears while we do nothing",
  "If we wait until we’re ready, we’ll be waiting for the rest of our lives.",
  "It’s never too late to be what you might have been.",
  "You don’t have to be great to start. But you have to start to be great.",
  "Work hard in silence. Let success make the noise",
  "Well begun is half done",
  "You will make everyone proud💫",
  "Don’t wish it were easier. Wish you were better.",
  "River cuts through rock not because of its power but because of its persistence.",
  "To change your life, you must first change your day",
  "Success is not final, failure is not fatal; it is the courage to continue that counts.",
  "There’s no traffic after the extra mile.",
  "Don’t stop until you’re proud.",

  "Be the change you wish to see",
  "Your dreams are precious💎",
  "Dont let the temporary fun overtake your dreams",
  "How do we forgive ourselves for all the things we did not become ?",
  "If your dreams don’t scare you, they’re not big enough",
  "You should never be motivated by the results of your actions, but actions themselves",
  "Small Small Consitent Efforts",
  "Take a deep breath and just do it",
  "My unmatched perspicacity, coupled with my sheer indefatigability makes me a feared opponent in any realm of human endeavour",
  "Resist the slave mind",
  "Settle for nothing less than the best"
];
document.getElementById("quote").innerHTML = getRandomSentence();
console.log(getRandomSentence());


// Google search
function SearchGoogle() {
  var query = document.getElementById("googleSearch").value;

  window.open(`https://www.google.com/search?q=${query}`, "_blank");
}

function openFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
    var buttonFullscreen = document.getElementById("fullscreenImg");
    var pausebutton = document.getElementById("pause");
    buttonFullscreen.style.opacity = 0.4;
  } else {
    if (document.exitFullscreen) {
      var buttonFullscreen = document.getElementById("fullscreenImg");
      var pausebutton = document.getElementById("pause");
      pausebutton.style.opacity = 1;
      buttonFullscreen.style.opacity = 1;

      document.exitFullscreen();
    }
  }
}
