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
let randomNumber = getRandomNumber(1, 5);

//THE STORY//
let myStory = 
`
<h2>Chapter 3 - The Tower of Darkness</h2>
<h4>
  Of course this is where a villain would hide! it is called the "Tower of
  Darkness" after all!
</h4>
<h4>
  Surprisingly the path to the tower of darkness was quite the opposite. It was
  filled with flowers of all shapes and sizes, plenty of sunlight, and an
  endless <span class="diff">${userColorB}</span> sky.
</h4>
<h4>
  <span class="diff">${userName}</span> reaches the tower only <span class="diff2">${randomNumber}</span> minutes after beginning their journey. 
</h4>
<a href="pt4.html"
  ><h4 class="GoOn1"><b><span class="diff">${userName}</span>'s <span class="diff">${userColorB}</span> <span class="diff">${userWeapon}</span> at the ready, they begin to open the tower door...</b></h4></a
>
`


console.log (myStory)

document.getElementById('story').innerHTML = myStory