// let's set up our Fetch request
let url = "https://icanhazdadjoke.com/";

let myHeaders = {
    "Accept": "application/json"
};

fetch(url, {
  headers: myHeaders
})
  .then ((response) => {
      return response.json();
  })
  .then ((data) => {
      console.log(data.joke);
  });



// let url = "https://jsonplaceholder.typicode.com/todos/1";

// fetch(url)
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })