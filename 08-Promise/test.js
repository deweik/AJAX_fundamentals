// Let's create our own Promise
// A promise is a JavaScript object that represents the eventual completion (or failure) of 
// an asynchronous operation and its resulting value.
let firstPromise = new Promise((resolve, reject) => {
  let animal = "warthog";
  // we create an asynchronous task (i.e. something that takes time to complete)
  setTimeout(() => {
    resolve(animal);
  }, 3000);
});

// If resolve() is called, then the THEN() method is executed.
firstPromise
  .then((animal) => {
  console.log(animal);
  return animal + " is nice";
  })
  .then((animal) => {
    console.log(animal);
    console.log("promise done")
  })
  .catch((error) => {
    console.log("Error: " + error);
  });

