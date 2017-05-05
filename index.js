function shout(string){
  return string.toUpperCase()
}
function whisper(string){
  return string.toLowerCase()
}
function logShout(string){
  return console.log(string.toUpperCase())
}
function logWhisper(string){
  return console.log(string.toLowerCase())
}


function sayHiToGrandma(string){
  if (string.toLowerCase() === string){
    var lowerCase = string.toLowerCase();
    return ("I can't hear you!");
  } else if (string.toUpperCase() === string){
    var upperCase = string.toUpperCase();
    return "YES INDEED!"
  } else { (string = "I love you, Grandma!")
      var mixedCase = "I love you, too.";
      return (mixedCase);
  }
}
