

fetch(`http://localhost:3000/betaalmethode`, {
  method: 'GET',
})
    .then((response) => response.json())
    .then((data) => (console.log(data)));
