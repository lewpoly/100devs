//Create a conditonal that checks their age
//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too

//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph
document.querySelector('h1').addEventListener('click', checkAge);
const p = document.querySelector('p');
function checkAge() {
  let alice = Number(document.querySelector('input').value);
  if (alice < 16) {
    p.innerText = 'you can not drive';
  } else if (alice < 18) {
    p.innerText = "dont't hate from outside the club";
  } else if (alice < 21) {
    p.innerText = "you can't drink";
  } else if (alice < 25) {
    p.innerText = "you can't rent cars affordably";
  } else if (alice < 30) {
    p.innerText = "you can't rent 'dem fancy cars";
  } else {
    p.innerText = 'there is nothing left to look forward to';
  }
}
