document.querySelector('#check').addEventListener('click', check);

// const tuesday1 = 'Tuesday';
// const tuesday2 = 'tuesday';
// const thursday1 = 'Thursday';
// const thursday2 = 'thursday';
// tuesday1.toLowerCase() === tuesday2.toUpperCase();
// thursday1.toLowerCase() === thursday2.toUpperCase();

function check() {
  const day = document.querySelector('#day').value.toLowerCase();

  if (day === 'tuesday' || day === 'thursday') {
    document.querySelector('#placeToSee').innerHTML = 'We don\'t get got, we go get.';
  } else if (day === 'friday' || day === 'saturday') {
    document.querySelector('#placeToSee').innerHTML = 'Then you know what you need? More Time. In. The. Saddle.(I know you love acronyms)';
  } else document.querySelector('#placeToSee').innerHTML = 'Snap out of it.';
}
