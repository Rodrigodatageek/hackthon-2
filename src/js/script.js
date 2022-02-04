// the main layout
const mainDiv = document.querySelector(".main__div");
// The URL
const url = `https://test-api.codingbootcamp.cz/api/14278748/events`;

const myData = async () => {
  const response = await fetch(url);
  const events = await response.json();
  // console.log(events);
  events.forEach((element, index) => {
    if (index === 0) {
      firstBox(element);
    } else {
      box(element);
    }
  });
};

// Function for crearing elements
const creatingForm = () => {
  const form = document.createElement("form");
};

// Function for adding a box with remaining events (Rodrigo's function)
const box = (data) => {
  // console.log(data);
  const SecondDiv = document.createElement("div");
  SecondDiv.classList.add("second-event-box");
  const cards = document.createElement("div");
  cards.classList.add("cards");
  const img = document.createElement("img");
  const container = document.querySelector(".container");
  // console.log(container);
  img.classList.add("Secondary-images");
  cards.textContent += data.name;
  cards.textContent += data.description;
  img.src = data.image_url;

  SecondDiv.append(cards, img);
  container.appendChild(SecondDiv);
};

// Function for adding a form to register (Daniel's function)
const firstBox = (data) => {
  console.log(data);
  const firstDiv = document.createElement("div");
  firstDiv.classList.add("first-event-box");
  const p = document.createElement("p");
  const img = document.createElement("img");
  img.classList.add("first-event-image");
  p.textContent += data.name;
  p.textContent += data.description;
  img.src = data.image_url;

  firstDiv.append(p, img);
  mainDiv.appendChild(firstDiv);
};

// Automatically calls the data (Daniel's funcction)
document.addEventListener("DOMContentLoaded", (e) => {
  myData();
});
