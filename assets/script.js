const userForm = document.querySelector("#submitForm");
const symbolic = document.querySelector("#symbol");
const spot = document.querySelector("#stuff");
const button = document.querySelector("#btn");

const inputHandler = function (event) {
  event.preventDefault();
  let stock = symbolic.value.trim().toUpperCase();
  console.log(stock);
  getStock(stock);
};

function getStock(stock) {
  const requestUrl =
    "https://api.polygon.io/v2/aggs/ticker/" +
    stock +
    "/prev?adjusted=true&apiKey=okaVnbWfqMBm3CzUkKubKirAUIHiOtv4";
  // "http://api.marketstack.com/v1/eod?access_key=b395558c86cf430804ab57d9be723e92&symbols=" +
  // stock +
  // "&sort=DESC&date_from=2021-11-15&date_to=2021-11-16&limit=1";
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (yo) {
      console.log(yo);

      console.log(yo.queryCount);

      if (yo.queryCount === 0) {
        window.alert("Not a valid Stock Symbol. Please try again.");
        document.querySelector("#submitForm").reset();
      } else {
        // spot.setAttribute("class", "on");

        let newDiv = document.createElement("div");

        let low = document.createElement("p");
        let high = document.createElement("p");
        let close = document.createElement("p");
        let sym = document.createElement("h4");

        low.textContent = "Low: " + yo.results[0].l;
        high.textContent = "High: " + yo.results[0].h;
        close.textContent = "Close: " + yo.results[0].c;
        sym.textContent = "Symbol:   " + yo.results[0].T;

        newDiv.setAttribute("class", "on");
        low.setAttribute("style", "color: red");
        high.setAttribute("style", "color: green");
        sym.setAttribute("style", "color: black");

        spot.append(newDiv);
        newDiv.appendChild(sym);
        newDiv.appendChild(low);
        newDiv.appendChild(high);
        newDiv.appendChild(close);

        document.querySelector("#submitForm").reset();
      }
    });
}

userForm.addEventListener("submit", inputHandler);

//polygon.io
//okaVnbWfqMBm3CzUkKubKirAUIHiOtv4

//c6kkik2ad3i9v4j449a0

//c6kkik2ad3i9v4j449a0

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

// "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=" +
// stock +
// "&apikey=DU7T0IAOA31JGVC6";
