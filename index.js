var uppercase = "HELLO!"

uppercase.toUpperCase() === uppercase // true

var lowercase = "hello!"

lowercase.toLowerCase() === lowercase // true

var mixedCase = "Hi there!"

mixedCase.toLowerCase() === mixedCase // false

mixedCase.toUpperCase() === mixedCase // false

function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}
function logShout(string) {
  return string.toUpperCase("HELLO")
}

function logWhisper(string) {
  return string.toLowerCase("hello")
}
