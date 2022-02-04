const url = `https://test-api.codingbootcamp.cz/api/14278748/events`;


const myData = async () => {
  const response = await fetch(url);
  const events = await response.json();
  events.forEach((element, index) => {
      if (index === 0){
          firstEvent(element)
      } else {
          console.log("Rodrigo!!!!!!!!!");
      }
  });
};


// Function for crearing elements 

// Function for adding a form to register (Daniel's function)
const firstEvent = data => {
    console.log(data);
}

// Automatically calls the data (Daniel's funcction)
document.addEventListener("DOMContentLoaded", e => {
    myData();
})

