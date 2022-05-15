// Write your pseduo code first!
// Celsius to Fahrenheit
document.querySelector('h1').addEventListener('click', cToF);
function cToF() {
  // Need the value in Celsius
  let temp = Number(document.querySelector('input').value);

  // Convert Celsius to Fahrenheit
  temp = temp * 1.8 + 32;

  // Show the value
  document.querySelector('h2').innerText = temp;
}
