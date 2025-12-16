// Grab all of our relevant HTML elements
let buttonTwo = document.getElementById('two');
let divTwo = document.getElementsByTagName('div')[0];

buttonTwo.addEventListener('click', () => {
  // Use the fetch() method to make a GET request to the API
  fetch('https://icanhazdadjoke.com/', {
    headers: {
      'Accept': 'application/json'
    }
  })
    .then((response) => {
      return response.json();
    })
    .then((jokeObject) => {
      return jokeObject.joke.toUpperCase();
    })
    .then((finalJoke) => {
      divTwo.innerHTML = finalJoke;
    })
    .catch((e) => {
      console.log("Oh no man! There's an error", e);
    })
})
