//Example fetch using pokemonapi.co
document.getElementById('family').addEventListener('click', getFetch);
document.getElementById('office').addEventListener('click', getFetch);
document.getElementById('children').addEventListener('click', getFetch);
document.getElementById('college').addEventListener('click', getFetch);
document.getElementById('party').addEventListener('click', getFetch);

function getFetch() {
  const urlFamily = `https://excuser.herokuapp.com/v1/excuse/family`;
  const urlOffice = `https://excuser.herokuapp.com/v1/excuse/office`;
  const urlChildren = `https://excuser.herokuapp.com/v1/excuse/children`;
  const urlCollege = `https://excuser.herokuapp.com/v1/excuse/college`;
  const urlParty = `https://excuser.herokuapp.com/v1/excuse/party`;

  fetch(urlFamily)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      // console.log(data);
      document.querySelector('h2').innerHTML = data[0].excuse;
    });
  fetch(urlOffice)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      document.querySelector('h2').innerHTML = data[0].excuse;
    });
  fetch(urlChildren)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      document.querySelector('h2').innerHTML = data[0].excuse;
    });
  fetch(urlCollege)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      document.querySelector('h2').innerHTML = data[0].excuse;
    });
  fetch(urlParty)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      document.querySelector('h2').innerHTML = data[0].excuse;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
