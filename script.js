//thingys to fill out//
let userName = prompt('WHAT IS YOUR NAME?!?!?!')
let userColor = prompt('WHAT IS YOUR FAVORITE COLOR?!?!?!')
let userWeapon = prompt('WHAT IS YOUR CHOICE OF WEAPON?!?!?!')
let userColorB = prompt('PICK ANOTHER COLOR?!!!')
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
<div>
<h4>
<h2>Chapter 1 - Good Morning!</h2>
<br>
<br>
<br>
<h4>
Once upon a time, <span class="diff">${userName}</span> wakes up in their nice warm bed. After a minute or 2 of waking up, they decide to call <span class="diff">${userBestie}</span> their best friend. They went out the night before, so it was only fair to make sure that <span class="diff">${userBestie}</span> was ok!
</h4>
<h4>
  When <span class="diff">${userBestie}</span> didn't pick up their phone, <span class="diff">${userName}</span> got concerned. They quickly calmed down, however, after remembering that <span class="diff">${userBestie}</span> was a heavy sleeper!
</h4>
<h4>
About <span class="diff2">${randomNumber}</span> minutes later, <span class="diff">${userName}</span> still hadn't heard from <span class="diff">${userBestie}</span> and became worried once more.  
</h4>
<h4>
  They used their <span class="diff">${userColor}</span> magic mirror to telepathically call <span class="diff">${userBestie}</span>. When <span class="diff">${userBestie}</span> sill doesn't answer, however, <span class="diff">${userName}</span> decides its time to go out and find their friend.
</h4>
<h4>
<span class="diff">${userName}</span> gathers their hunting materials and tools. They make sure to grab their favorite <span class="diff1">${userColorB}</span>  <span class="diff1">${userWeapon}</span> before heading out too. They also grab extra food before heading out, so they don't starve.
</h4>
<a href="pt2.html"><h4 class="GoOn1"><b>Finally they were ready to set out and find their friend!</b></h4></a>
</div>
`
save();


//Remy thing to make it work different pages//
function save() {
  userName = sessionStorage.setItem("userName", userName);
  userColor = sessionStorage.setItem("userColor", userColor);
  userWeapon = sessionStorage.setItem("userWeapon", userWeapon);
  userColorB = sessionStorage.setItem("userColorB", userColorB);
  userBestie = sessionStorage.setItem("userBestie", userBestie);
  userHate = sessionStorage.setItem("userHate", userHate);
}
document.getElementById('story').innerHTML = myStory