let input = document.querySelector("input");
let buttonEl = document.querySelector("button");
let result = document.querySelector(".result");

fetch("https://raw.githubusercontent.com/diyor011/apibest/master/api.json")
  .then(function (respon) {
    return respon.json();
  })
  .then(function (data) {
    for (let prod of data) {
    //   console.log(prod);
      let name = prod.name;
      let img = prod.pic;
      let price = prod.price;

      let div = document.createElement("div");
      let imgEl = document.createElement("img");
      let h2 = document.createElement("h2");
      let p = document.createElement("p");

      imgEl.src = img;
      h2.textContent = name;
      p.textContent = `${price}$`;

      div.appendChild(imgEl);
      div.appendChild(h2);
      div.appendChild(p);

      result.appendChild(div);
    }
  });
  
  buttonEl.addEventListener("click", function (event) {
    event.preventDefault();

    let search = input.value;

    fetch("https://raw.githubusercontent.com/diyor011/apibest/master/api.json")
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            let filteredData = data.filter(function (prod) {
                return prod.name.toLowerCase().includes(search.toLowerCase());
            });

            result.innerHTML = "";

            for (let prod of filteredData) {
                //   console.log(prod);
                  let name = prod.name;
                  let img = prod.pic;
                  let price = prod.price;
            
                  let div = document.createElement("div");
                  let imgEl = document.createElement("img");
                  let h2 = document.createElement("h2");
                  let p = document.createElement("p");
            
                  imgEl.src = img;
                  h2.textContent = name;
                  p.textContent = price;
            
                  div.appendChild(imgEl);
                  div.appendChild(h2);
                  div.appendChild(p);
            
                  result.appendChild(div);
                }
        })
});
