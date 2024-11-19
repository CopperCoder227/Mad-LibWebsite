//thingys to fill out//
let userName = sessionStorage.getItem("userName");
let userAge = sessionStorage.getItem("userAge");
let userColor = sessionStorage.getItem("userColor");
let userBestie = sessionStorage.getItem("userBestie");
let userHate = sessionStorage.getItem("userHate");

//THE STORY//
let myStory = 
`
<h2>Chapter 2 - Destiny Awaits</h2>
<p>
  THEY DECIDE O DIE THE END
</p>
<p>
  When ${userBestie} doesn't pick up their phone, ${userName} gets concerned.
  They use their magical hotline to directly call ${userBestie}.
</p>
<p>
  They use their ${userColor} magic mirror to telepathically call their best
  friend ${userBestie}. When ${userBestie} sill doesn't wake up, however,
  ${userName} calms down and assumes they just fell asleep.
</p>
</p>
About _____ days later, ${userName} still hadn't heard from ${userBestie} and became extra worried again.
</p>
<a href="pt2.html"><h3 class="GoOn1">Continue the story?</h3></a>
`


console.log (myStory)

document.getElementById('story').innerHTML = myStory