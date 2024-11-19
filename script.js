//thingys to fill out//
let userName = prompt('WHAT IS YOUR NAME?!?!?!')
let userAge = prompt('HOW OLD ARE YOU?!?!?!')
let userColor = prompt('WHAT IS YOUR FAVORITE COLOR?!?!?!')
let userBestie = prompt ('WHAT IS THE NAME OF YOUR BESTIE?!?!?!')
let userHate = prompt ('WHAT IS THE NAME OF THE PERSON YOU HATE?!?!?!')
//insert generator here//
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let randomNumber = getRandomNumber(100, 1000);

//THE STORY//
let myStory = 
`
<h2>Chapter 1 - Fate Calls</h2>
<p>
  Once upon a time, <span class="diff">${userName}</span> wakes up in their nice warm bed. The decide to
  call <span class="diff">${userBestie}</span> to make sure their ok, after a long night of partying
  before.
</p>
<p>
  When <span class="diff">${userBestie}</span> doesnt pick up their phone, <span class="diff">${userName}</span> gets concerned.
  They use their magical hotline to directly call <span class="diff">${userBestie}</span>.
</p>
<p>
  They use their <span class="diff">${userColor}</span> magic mirror to telepathically call their best
  friend <span class="diff">${userBestie}</span>. When ${userBestie}</span> sill doesn't wake up, however,
  <span class="diff">${userName}</span> cals down and assumes they just fell asleep.
</p>
</p>
About <span class="diff2">${randomNumber}</span> days later, <span class="diff">${userName}</span> still hadn't heard from <span class="diff">${userBestie}</span> and became worried once more.
</p>
<a href="pt2.html"><h3 class="GoOn1"><b>They decide to go out and find their friend!</b></h3></a>
`
save();


//Remy thing to make it work different pages//
function save() {
  userName = sessionStorage.setItem("userName", userName);
  userAge = sessionStorage.setItem("userAge", userAge);
  userColor = sessionStorage.setItem("userColor", userColor);
  userBestie = sessionStorage.setItem("userBestie", userBestie);
  userHate = sessionStorage.setItem("userHate", userHate);
}
document.getElementById('story').innerHTML = myStory