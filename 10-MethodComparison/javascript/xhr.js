// grab relevant html elements
let buttonOne = document.getElementById('one');
let divOne = document.getElementsByTagName('div')[0];

buttonOne.addEventListener('click', () => {
    // Step 1. create new XMLHttpRequest object
    let xhr = new XMLHttpRequest();

    // Step 2.configure it: GET-request for the URL
    xhr.open('GET', 'https://icanhazdadjoke.com/');

    xhr.setRequestHeader('Accept', 'application/json');

    // Step 3. set up a callback function that is called when the request is complete
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
              let jsonData = xhr.responseText;
              let javaScriptObject = JSON.parse(jsonData);
              divOne.innerHTML = javaScriptObject.joke;
            }
          }
    }

    // Step 4. send the request
    xhr.send();
})