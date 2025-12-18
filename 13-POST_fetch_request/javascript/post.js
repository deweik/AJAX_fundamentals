const url = "https://jsonplaceholder.typicode.com/posts";
let outputElement = document.getElementById("demo");

let h = new Headers();
h.append("Content-type", "application/json; charset=UTF-8");

let post = {
  userId: 99,
  title: "My cool title",
  body: "lorem ipsum ... blah blah blah ..."
}

let options = {
  method: "POST",
  headers: h,
  body: JSON.stringify(post)
};

let req = new Request(url, options);

fetch(req)
  .then((res) => {
    if(!res.ok) {
      throw new Error(`oops... HTTP error: ${res.status}`);
    }
    return res.json();
  })
  .then( (data) => {
    outputElement.textContent = JSON.stringify(data);
  })
  .catch( (err) => {
    console.error(`Fetch error: ${err.message}`);
  });