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
<h2>Chapter 3.L - The Tower Of Light</h2>
<h4>
    <span class="diff">${userName}</span> decides to head to the tower of light.
</h4>
<h4>
    As their heading on the path, they seen many burn marks witch indicate their on the right pah. after all, <span class="diff">${userHate}</span>
probably turned into a dragon with all the destruction caused!
</h4>
<h4>
    Unfortunately when <span class="diff">${userName}</span> opened the towers doors, they saw a giant pit straight to the planets core. 
</h4>
<h4>
    Confused <span class="diff">${userName}</span> turned around to leave, only for <span class="diff">${userBestie}</span> to push them right into the pit, leading to <span class="diff">${userName}</span>'s death.
</h4>
<h2>Unfortunately you picked the wrong tower. 
</h2>
<h2>
Go back and chose the right tower if you wish to go on!
</h2>
`


console.log (myStory)

document.getElementById('story').innerHTML = myStory