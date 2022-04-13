//Example fetch using pokemonapi.co
let deckId = '';
document.querySelector('button').addEventListener('click', drawTwo);

fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
  .then((res) => res.json()) // parse response as JSON
  .then((data) => {
    console.log(data);
    deckId = data.deck_id
  })
  .catch((err) => {
    console.log(`error ${err}`);
  });
