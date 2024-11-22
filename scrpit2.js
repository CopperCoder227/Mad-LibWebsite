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
<h2>Chapter 2 - Kidnapping Occurs</h2>
<h4>
  _____
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
About  days later, <span class="diff">${userName}</span> still hadn't heard from <span class="diff">${userBestie}</span> and became worried once more.
</h4>
<a href="pt3.html"><h4 class="GoOn1"><b><span class="diff">${userName}</span> fnaly reaches the castle. however it s blocked by evil dragon named <span class="diff">${userHate}</span></b></h4></a>
`;


console.log (myStory)

document.getElementById('story').innerHTML = myStory;