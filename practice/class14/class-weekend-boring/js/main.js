//Handle Capital Letters, Place result in DOM, add a check for humpday (Wed)
// add listener to button
document.querySelector('#check').addEventListener('click', check);
// create function for form to LOG the value of input fields based on what day it is and make case insensitive
// then variable for input value
function check() {
  const day = document.querySelector('#day').value.toLowerCase();
  if (day === 'tuesday' || day === 'thursday') {
    document.querySelector('#placeToSee').innerHTML =
      'the hogs have been tied.';
  } else if (day === 'saturday' || day === 'sunday') {
    document.querySelector('#placeToSee').innerHTML = 'turn them away';
  } else document.querySelector('#placeToSee').innerHTML = "ride 'em low";
}
