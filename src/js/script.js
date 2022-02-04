// the main layout
const mainDiv = document.querySelector(".main__div");
// The URL
const url = `https://test-api.codingbootcamp.cz/api/14278748/events`;


const myData = async () => {
  const response = await fetch(url);
  const events = await response.json();
  events.forEach((element, index) => {
      if (index === 0){
          firstBox(element)
      } else {
          console.log("Rodrigo!!!!!!!!!");
      }
  });
};

// Function for crearing elements 
const creatingForm = () => {
    const form = document.createElement("form");
    
}

// Function for adding a form to register (Daniel's function)
const firstBox = data => {
    console.log(data);
    const p = document.createElement("p");
    p.textContent = data.name;
    mainDiv.appendChild(p);    
}

// Automatically calls the data (Daniel's funcction)
document.addEventListener("DOMContentLoaded", e => {
    myData();
})

