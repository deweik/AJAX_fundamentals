// Grab all of our relevant HTML elements
let buttonThree = document.getElementById('three');
let divThree = document.getElementsByTagName('div')[0];

buttonThree.addEventListener('click', displayJoke);

async function displayJoke() {
  // Use await to wait for the response to come back before continuing with our code
  let response = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      'Accept': 'application/json'
    }
  });
  let jokeObject = await response.json();
  let lowercaseJoke = jokeObject.joke.toLowerCase();
  divThree.innerHTML = lowercaseJoke;
}