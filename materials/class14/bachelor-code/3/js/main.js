// const contestants = document.querySelectorAll(/*INSERTCODE*/)
//
// Array.from(contestants).forEach(element => element.addEventListener('click', /*INSERTCODE*/))
//
// function checkForRose(click){
// 	if(click.target.classList.contains(/*INSERTCODE*/)){
// 		document.querySelector('#nikki').classList.toggle(/*INSERTCODE*/)
// 	}else{
// 		alert("Wrong!");
// 	}
// }

const contestants = document.querySelectorAll('.constestant');

Array.from(contestants).forEach((element) =>
  element.addEventListener('click', checkForRose)
);

function checkForRose(click) {
  if (click.target.classList.contains('rose')) {
    document.querySelector('#nikki').classList.toggle('hidden');
  } else {
    alert('Wrong!');
  }
}
