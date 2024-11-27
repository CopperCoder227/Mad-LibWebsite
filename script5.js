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
let randomNumber = getRandomNumber(1, 50);

//THE STORY//
let myStory = 
`

<h2>Chapter 5 - Slay the Beast</h2>
<br>
<br>
<br>
<h4>
  Right after being knocked off, <span class="diff">${userName}</span> slides
  off a wall and lands safely.
</h4>
<h4>
  <span class="diff">${userHate}</span> flies down and tries to strike
  <span class="diff">${userName}</span>, but just misses by
  <span class="diff2">${randomNumber}</span>feet.
</h4>
<h4>
  The casim is dark and dangerous, the only thing lighting it is
  <span class="diff">${userHate}</span>'s dragonus form. there are buildings
  that look like ruins, and others that have completely fallen over. In the far
  distance, <span class="diff">${userBestie}</span> hangs in a cage, sleeping.
</h4>
<h4>
  As they fight, <span class="diff">${userName}</span> sees a weak spot on
  <span class="diff">${userHate}</span>'s wing. an open wound.
  <span class="diff">${userName}</span> sees their opportunity to revert
  <span class="diff">${userHate}</span>.
</h4>
<h4>
  they reveal their potion and threaten to kill
  <span class="diff">${userHate}</span> in the process if
  <span class="diff">${userBestie}</span> isnt released and they cant get out.
</h4>
<h4>
  <a href="pt6.html"
    ><h4 class="GoOn1">
      <b>
      <span class="diff">${userHate}</span> grabs
        <span class="diff"
          >${userName}</span> and <span class="diff">${userBestie}</span>'s cage, and
          flies upward.
      </b>
    </h4></a
  >
</h4>
`


console.log (myStory)

document.getElementById('story').innerHTML = myStory