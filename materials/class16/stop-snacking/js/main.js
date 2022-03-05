//Create a function that grabs the number of snacks from the input and tells you to stop that many times
document.querySelector('#help').addEventListener('click', snacks);
function snacks() {
  let numOfSnack = Number(document.querySelector('input').value);
  document.querySelector('#stops').innerText = ''
  for (i = 1; i <= numOfSnack; i++) {
    document.querySelector('#stops').innerText += 'STOP!';
  }
}
