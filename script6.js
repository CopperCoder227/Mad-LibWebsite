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
<h2>Chapter 6 - Reunited</h2>
<br>
<br>
<br>
<h4>
  Once they were high enough up, <span class="diff">${userName}</span> takes the
  opportunity to sipll the potion into <span class="diff">${userHate}</span>'s
  wing.
</h4>
<h4>
  they slowly start to fall down as
  <span class="diff">${userHate}</span> transforms back into a human.
</h4>
<h4>
  As they fall, <span class="diff">${userName}</span> frees
  <span class="diff">${userBestie}</span> and they bot land safely on the bed f
  flowers sournding the tower.
</h4>
<h4>
  unfortunately for <span class="diff">${userBestie}</span>. they fall straight
  back down into the casim, never to be seen again.
</h4>
<h4>
  <span class="diff">${userBestie}</span> wakes up, shocked by their location
  and <span class="diff">${userName}</span>'s outfit.
</h4>
<h4>
  They rejoyce in being together again and start gossiping about the crazy
  events they both went through
</h4>
<h3>
  <h4 class="GoOn1">
    <b> THE END! </b>
  </h3>
`


console.log (myStory)

document.getElementById('story').innerHTML = myStory