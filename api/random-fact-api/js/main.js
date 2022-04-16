//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch);

function getFetch() {
  const choice = document.querySelector('button').value;
  console.log(choice);
  const url = `https://uselessfacts.jsph.pl/random.json?language=en`;

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
      document.querySelector('h2').innerHTML = data.text;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
// console.log(fetch('https://uselessfacts.jsph.pl/random.json?language=en'))
