document.querySelector('#check').addEventListener('click', check);

function check() {
  const day = document.querySelector('#day').value.toLowerCase();

  if (day === 'tuesday' || day === 'thursday') {
    document.querySelector('#placeToSee').innerHTML =
      "We don't get got, we go get.";
  } else if (day === 'friday' || day === 'saturday') {
    document.querySelector('#placeToSee').innerHTML =
      'Then you know what you need? More Time. In. The. Saddle.(I know you love acronyms)';
  } else document.querySelector('#placeToSee').innerHTML = 'Snap out of it.';
}
