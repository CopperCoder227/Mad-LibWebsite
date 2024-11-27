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
<h2>Chapter 4 - Challenges Awaiting</h2>
<br>
<br>
<br>
<h4>
  The door is stuck and slowly creeks open.
</h4>
<h4>
  <span class="diff">${userName}</span> peeks inside and sees nothing but along staircase going upward. They call out <span class="diff">${userBestie}</span>'s name in hopes of a response but they hear nothing.
</h4>
<h4>
  <span class="diff">${userName}</span> stats to climb he staircase, yet once their about half way up, <span class="diff">${userName}</span> realizes its a trap. The stairs have no seeable end and no seeable beginning. 
</h4>
<h4>
At the same time as the realization, dark <span class="diff">${userColor}</span> eyes emerge from the shadows.
</h4>
<a href="pt5.html"><h4 class="GoOn1"><b><span class="diff">${userHate}</span> pushes <span class="diff">${userName}</span> off the staircase, falling to their foreseeable doom...</b></h4></a>

`


console.log (myStory)

document.getElementById('story').innerHTML = myStory