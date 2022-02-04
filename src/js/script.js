const myData = async () => {
  const response = await fetch(
    `https://test-api.codingbootcamp.cz/api/14278748/events`
  );
  const events = await response.json();
  console.log(events);

  //  In your HTML document, create a section dedicated to navigation and using JavaScript, loop through the categories in the data that you just retrieved and create a menu-item for each of them.

  // category.data.forEach((element) => {
  //   const productElem = document.createElement("div");
  //   productElem.innerHTML = `
  //       <div class='menu'>${element}</div>  `;
  //   document.body.appendChild(productElem);
  //   // find an element on the page
  //   // let myElement = document.querySelector(".menu");
  //   // add an event listener, waiting for the 'click' event
  //   productElem.addEventListener("click", (e) => {
  //     loadArticles(e.target.innerHTML);
  //   });
  // });
};
myData();
