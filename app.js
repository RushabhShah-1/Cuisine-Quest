let openShopping = document.querySelector(".shopping");
let closeShopping = document.querySelector(".closeShopping");
let list = document.querySelector(".list");
let listCard = document.querySelector(".listCard");
let body = document.querySelector("body");
let total = document.querySelector(".total");
let quantity = document.querySelector(".quantity");

openShopping.addEventListener("click", () => {
  body.classList.add("active");
});
closeShopping.addEventListener("click", () => {
  body.classList.remove("active");
});

let products = [
  {
    id: 1,
    name: "Delicious Bites",
    cuisine: "Italian",
    address: "123 Main Street, Cityville",
    rating: 4.8,
    image: "1.png",
    hours: {
      open: "11:00 AM",
      close: "10:00 PM",
    },
    price: 800, // ₹800
  },
  {
    id: 2,
    name: "Sushi Haven",
    cuisine: "Japanese",
    address: "456 Oak Avenue, Townsville",
    rating: 4.5,
    image: "2.png",
    hours: {
      open: "12:00 PM",
      close: "9:00 PM",
    },
    price: 600, // ₹600
  },
  {
    id: 3,
    name: "Spice Fusion",
    cuisine: "Indian",
    address: "789 Maple Lane, Villageton",
    rating: 4.7,
    image: "3.png",
    hours: {
      open: "11:30 AM",
      close: "10:30 PM",
    },
    price: 1000, // ₹1000
  },
  {
    id: 4,
    name: "Burger Bliss",
    cuisine: "American",
    address: "567 Pine Street, Suburbia",
    rating: 4.2,
    image: "4.png",
    hours: {
      open: "10:00 AM",
      close: "11:00 PM",
    },
    price: 350, // ₹350
  },
  {
    id: 5,
    name: "Taste of Thailand",
    cuisine: "Thai",
    address: "789 Elm Road, Countryside",
    rating: 4.6,
    image: "5.png",
    hours: {
      open: "11:30 AM",
      close: "9:30 PM",
    },
    price: 750, // ₹750
  },
  {
    id: 6,
    name: "Mediterranean Flavors",
    cuisine: "Mediterranean",
    address: "234 Olive Avenue, Coastal Town",
    rating: 4.4,
    image: "6.png",
    hours: {
      open: "12:00 PM",
      close: "10:00 PM",
    },
    price: 900, // ₹900
  },
  {
    id: 7,
    name: "Steakhouse Royale",
    cuisine: "Steakhouse",
    address: "890 Cedar Street, Uptown",
    rating: 4.9,
    image: "7.png",
    hours: {
      open: "5:00 PM",
      close: "11:00 PM",
    },
    price: 1500, // ₹1500
  },
  {
    id: 8,
    name: "Café Parisienne",
    cuisine: "French",
    address: "345 Rose Boulevard, Arts District",
    rating: 4.7,
    image: "8.png",
    hours: {
      open: "9:00 AM",
      close: "8:00 PM",
    },
    price: 1200, // ₹1200
  },
  {
    id: 9,
    name: "Ramen Galaxy",
    cuisine: "Japanese",
    address: "678 Saturn Avenue, Space City",
    rating: 4.3,
    image: "9.png",
    hours: {
      open: "11:00 AM",
      close: "10:00 PM",
    },
    price: 550, // ₹550
  },
  {
    id: 10,
    name: "MexiCali Grill",
    cuisine: "Mexican",
    address: "123 Sunset Road, Border Town",
    rating: 4.5,
    image: "10.png",
    hours: {
      open: "10:30 AM",
      close: "9:00 PM",
    },
    price: 650, // ₹650
  },
  {
    id: 11,
    name: "Seafood Harbor",
    cuisine: "Seafood",
    address: "456 Harborview Drive, Coastal Village",
    rating: 4.6,
    image: "11.png",
    hours: {
      open: "12:00 PM",
      close: "10:00 PM",
    },
    price: 1100, // ₹1100
  },
  {
    id: 12,
    name: "Veggie Delight",
    cuisine: "Vegetarian",
    address: "789 Green Lane, Garden Town",
    rating: 4.2,
    image: "12.png",
    hours: {
      open: "11:00 AM",
      close: "9:00 PM",
    },
    price: 400, // ₹400
  },
];

let listCards = [];
function initApp() {
  products.forEach((value, key) => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("item");
    newDiv.innerHTML = `
            <div class="ListCards">
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="cuisines"><span class="cuisine-title">Cuisines:</span> ${
              value.cuisine
            }</div>
            <div class="cuisines"><span class="cuisine-title">Address: </span>${
              value.address
            }</div>
            <div class="cuisines"> <span class="cuisine-title">Ratings: </span>${
              value.rating
            }★</div>
            <div class="cuisines"><span class="cuisine-title">Timing: </span> ${
              value.hours.open
            } - ${value.hours.close}</div>
            <div class="price"><span class="cuisine-title">Price: </span>₹${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button></div>`;
    list.appendChild(newDiv);
  });
}
initApp();
function addToCard(key) {
  if (listCards[key] == null) {
    listCards[key] = JSON.parse(JSON.stringify(products[key]));
    listCards[key].quantity = 1;
  }
  reloadCard();
}
function reloadCard() {
  listCard.innerHTML = "";
  let count = 0;
  let totalPrice = 0;
  listCards.forEach((value, key) => {
    totalPrice = totalPrice + value.price;
    count = count + value.quantity;
    if (value != null) {
      let newDiv = document.createElement("li");
      newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${
        value.quantity - 1
      })">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${
        value.quantity + 1
      })">+</button>
                </div>`;
      listCard.appendChild(newDiv);
    }
  });
  total.innerText = totalPrice.toLocaleString();
  quantity.innerText = count;
}
function changeQuantity(key, quantity) {
  if (quantity == 0) {
    delete listCards[key];
  } else {
    listCards[key].quantity = quantity;
    listCards[key].price = quantity * products[key].price;
  }
  reloadCard();
}
