function shout(string)
{
  return string.toUpperCase();
}
function whisper(string)
{
  return string.toLowerCase();
}

function logShout(string)
{
  console.log(string.toUpperCase())
}

logShout("hello");

function logWhisper(string)
{
  console.log(string.toLowerCase());
}

logWhisper("HELLO");

function sayHiToGrandma(string)
{
  switch (string)
  {
    case (string.toLowerCase()):
    return ("I can't hear you!")
    break;
    case (string.toUpperCase()):
    return ("YES INDEED!")
    break;
    default:
    return ("I love you, too.")
    break;
  }

}
