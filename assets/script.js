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
    // "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=" +
    // stock +
    // "&apikey=DU7T0IAOA31JGVC6";
    "http://api.marketstack.com/v1/eod?access_key=b395558c86cf430804ab57d9be723e92&symbols=" +
    stock +
    "&sort=DESC&date_from=2021-11-15&date_to=2021-11-16&limit=1";
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (yo) {
      console.log(yo);

      console.log(typeof yo);

      let low = document.createElement("p");
      let high = document.createElement("p");
      low.textContent = yo.data[0].low;
      high.textContent = yo.data[0].high;
      low.setAttribute("style", "color: green");
      high.setAttribute("style", "color: green");
      spot.appendChild(low);
      spot.appendChild(high);
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
