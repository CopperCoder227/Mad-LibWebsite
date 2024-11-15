//thingys to fill out//
let userName = prompt('WHAT IS YOUR NAME?!?!?!')
let userAge = prompt('HOW OLD ARE YOU?!?!?!')
let userFavoriteColor = prompt('WHAT IS YOUR FAVORITE COLOR?!?!?!')
let userBestie = prompt ('WHAT IS THE NAME OF YOUR BESTIE?!?!?!')
let userHate = prompt ('WHAT IS THE NAME OF THE PERSON YOU HATE?!?!?!')

//THE STORY//
let myStory = 
`
<h2> Chapter 1 - Fate Calls </h2>
<p>
  Once upon a time, ${userName} wakes up in their nice warm bed. The decide to
  call ${userBestie} to make sure their ok, after a long night of partying
  before.
</p>
<p>
  When ${userBestie} doesnt pick up their phone, ${userName} gets concerned.
  They use their magical hotline to directly call ${userBestie}.
</p>
<p>
  They use their ${userColor} magic mirror to telepathically call their best
  friend ${userBestie}. When ${userBestie} sill doesn't wake up, however,
  ${userName} cals down and assumes they just fell asleep.
</p>
</p>
About _____ days later, ${userName} still hadn't heard from ${userBestie} and became extra worried again.
</p>
`

//insert generator here//
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let randomNumber = getRandomNumber(1, 4);
console.log(randomNumber);

document.body.insertAdjacentHTML('afterend', randomNumber)


console.log (myStory)

document.getElementById('story').innerHTML = myStory