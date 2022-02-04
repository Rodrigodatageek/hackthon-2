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
        //   Rodrigo's part
      }
  });
};

// Function for crearing elements 
const creatingElement = (element, classStyle="") => {
    const newElement = document.createElement(element);
    newElement.classList.add(classStyle);
    return newElement;
    
}

// Function for adding a form to register (Daniel's function)
const firstBox = data => {
    console.log(data);
    const firstDiv = creatingElement("div", "first-event-box");
    const imageButtonDiv = creatingElement("div", "image-button");
    const img = creatingElement("img", "first-event-image");
    const p = document.createElement("p");
    p.textContent = `
    ${data.name} 
    ${data.description}
    `;
    img.src = data.image_url;
    
    // Creating the div of the images
    imageButtonDiv.append(p, img);
    firstDiv.appendChild(imageButtonDiv);
    mainDiv.appendChild(firstDiv);    
}

// Automatically calls the data (Daniel's funcction)
document.addEventListener("DOMContentLoaded", e => {
    myData();
})

