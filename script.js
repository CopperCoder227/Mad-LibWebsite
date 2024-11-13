let userName = prompt('WHAT IS YOUR NAME?!?!?!')
let userAge = prompt('HOW OLD ARE YOU?!?!?!')
let userFavoriteColor = prompt('WHAT IS YOUR FAVORITE COLOR?!?!?!')
let userBestie = prompt ('WHAT IS THE NAME OF YOUR BESTIE?!?!?!')
let userHate = prompt ('WHAT IS THE NAME OF THE PERSON YOU HATE?!?!?!')


let myStory = `<p> Hello to our user: ${userName}! Answer me <span class="loud">these</span> questions 3 an the other side you'll see.</p>

<p> I see you have already answered, so your quest is to ${userQuest}</p>
`
console.log (myStory)

document.getElementById('story').innerHTML = myStory