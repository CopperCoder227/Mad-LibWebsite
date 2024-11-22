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
let randomNumber = getRandomNumber(100, 1000);

//THE STORY//
let myStory = 
`
<h2>Chapter 2 - Destiny Awaits</h2>
<h4>
  <span class="diff">${userName}</span> left their homy castle and trekked the
  faithful road to make it to <span class="diff">${userBestie}</span>'s castle.
</h4>
<h4>
  Once they arrive, <span class="diff">${userName}</span> knocks on the door
  and is answered by no-one. Thankfully, they have a spare key and let
  themselves in.
</h4>
<h4>
  They opened the door to see a quite and desolate mansion. The lights were out.
  The halls that were normally filled wit vibrant music, was silent.
</h4>
<h4>The house felt as if all life was striped form it.</h4>
<h4>
Suddenly, a closet on the other side of the hallway opened.
</h4>
<h4>
<span class="diff">${userName}</span> takes out their <span class="diff">${userColor}</span> <span class="diff">${userWeapon}</span>, ready to defend themselves against an oncoming threat. 
</h4>
<h4>
  When the closet opens, Martha the Maid, <span class="diff">${userBestie}</span>'s servent, steps out.
</h4>
<h4>
  She quickly spots <span class="diff">${userName}</span> and runs over to check if she's ok. Martha explains how <span class="diff">${userHate}</span> had used a potion to transform into a hideous beast and destroyed the castle. they stole <span class="diff">${userBestie}</span> too.
</h4>
<h4>
  Hearing this, <span class="diff">${userName}</span> becomes enraged, and beings to stop out of the castle. Martha catches <span class="diff">${userName}</span> before they leave, and tells the to take the reversal potion they made. it could reverse  <span class="diff">${userHate}</span>'s transformation and bound them so they cant transform again.
</h4>
<a href="pt3.html"><h4 class="GoOn1"><span class="diff">${userName}</span> thanks Martha and with one last hug, exits the castle.</h4></a>
`;


console.log (myStory)

document.getElementById('story').innerHTML = myStory;