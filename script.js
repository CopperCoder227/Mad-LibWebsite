let userName = prompt('WHAT IS YOUR NAME?!?!?!')
let userQuest = prompt('What is your quest?')
let userFavoriteColor = prompt('What is your favorite color?')
let swallowAirSpeed = prompt ('What is the speed of an unlaiden swallow?')


let myStory = `<p> Hello to our user: ${userName}! Answer me <span class="loud">these</span> questions 3 an the other side you'll see.</p>

<p> I see you have already answered, so your quest is to ${userQuest}</p>
`
console.log (myStory)

document.getElementById('story').innerHTML = myStory