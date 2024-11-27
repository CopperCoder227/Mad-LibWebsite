//thingys to fill out//
let userName = sessionStorage.getItem("userName");
let userColor = sessionStorage.getItem("userColor");
let userWeapon = sessionStorage.getItem("userWeapon");
let userColorB = sessionStorage.getItem("userColorB");
let userBestie = sessionStorage.getItem("userBestie");
let userHate = sessionStorage.getItem("userHate");
//insert generator here//
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let randomNumber = getRandomNumber(1, 25);

//THE STORY//
let myStory = 
`
<h2>Chapter 3 - Destiny Awaits</h2>
<br>
<br>
<br>
<h4>
  After leaving the house, <span class="diff">${userName}</span>'s ext goal was
  to find out were the were going.
</h4>
<h4>
  They knew there were 2 different towers nearby, but on opposite sides of the
  valley.
</h4>
<h4>The tower of <a href="ptW.html" class="GoOn1">light</a>.</h4>
<h4>And the tower of <a href="ptR.html" class="GoOn1">darkness</a>.</h4>
<h4 class="GoOn1">Click what tower you wish to venture to!</h4>
`


console.log (myStory)

document.getElementById('story').innerHTML = myStory