//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods
class NetflixShow {
  constructor(genre, actors, director, plot) {
    this.genre = genre;
    this.actors = actors;
    this.director = director;
    this.plot = plot;
  }
  play() {
    console.log('Playing...');
  }
  stop() {
    console.log('Stopping...');
  }
  saveToList() {
    console.log('Saved To List.');
  }
}

let bridgerton = new NetflixShow(
  'Romance',
  ['Alex Tilley', 'Tiny Atlas', 'Ben Hopperton'],
  'Niles Atlee',
  'two ladies that look for love in all the wrong places.'
);
console.log(bridgerton.actors.length);
console.log(bridgerton.genre);
console.log(
  `In bridgerton, ${
    bridgerton.director
  } directs a scathing new ${bridgerton.genre.toLowerCase()} about ${
    bridgerton.plot
  }. Starring ${bridgerton.actors.join(', ')}.`
);
