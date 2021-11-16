const userForm = document.querySelector("#submitForm");
const symbolic = document.querySelector("#symbol");
const spot = document.querySelector("#stuff");
const button = document.querySelector("#btn");

const inputHandler = function (event) {
  event.preventDefault();
  let stock = symbolic.value;
  console.log(stock);
  getStock(stock);
};

function getStock(stock) {
  const requestUrl =
    "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=" +
    stock +
    "&apikey=DU7T0IAOA31JGVC6";
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      console.log(typeof data);

      let quote = document.createElement("li");
      quote.textContent = data.Global_Quote;
      quote.setAttribute("style", "color: red");
      spot.appendChild(quote);
    });
}

userForm.addEventListener("submit", inputHandler);

// button.addEventListener("submit", function (event) {
//   event.preventDefault();
//   console.log(button);
//   fetch(
//     "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=" +
//       symbolic +
//       "&apikey=DU7T0IAOA31JGVC6",
//     {
//       headers: {
//         Accept: "application/json",
//       },
//     }
//   )
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//     });
// });

//DU7T0IAOA31JGVC6

// "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=DU7T0IAOA31JGVC6";
