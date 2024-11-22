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
<h2>Chapter 3 - The Tower of Darkness</h2>
<h4>
 Of course this is where a villian would hide! it is called the "Tower of Darkness" after all!
</h4>
<h4>
  When <span class="diff">${userBestie}</span> doesnt pick up their phone, <span class="diff">${userName}</span> gets concerned.
  They use their magical hotline to directly call <span class="diff">${userBestie}</span>.
</h4>
<h4>
  They use their <span class="diff">${userColor}</span> magic mirror to telepathically call their best
  friend <span class="diff">${userBestie}</span>. When ${userBestie}</span> sill doesn't wake up, however,
  <span class="diff">${userName}</span> cals down and assumes they just fell asleep.
</h4>
<h4>
About <span class="diff2">${randomNumber}</span> days later, <span class="diff">${userName}</span> still hadn't heard from <span class="diff">${userBestie}</span> and became worried once more.
</h4>
<a href="pt4.html"><h4 class="GoOn1"><b>They decide to go out and find their friend!</b></h4></a>
`


console.log (myStory)

document.getElementById('story').innerHTML = myStory