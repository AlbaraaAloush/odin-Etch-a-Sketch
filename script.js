function createGrid(size) {
  container.replaceChildren();
  let n = size * size;
  let divGridHeight = 100 / size;
  let gridDivWidth = 100 / size;

  for (let i = 0; i < n; i++) {
    gridDiv = document.createElement("div");
    gridDiv.classList.add("inner-div");
    gridDiv.setAttribute(
      "style",
      `flex: 1 1 calc(${gridDivWidth}% - 5px); height: ${divGridHeight}% `
    );
    container.appendChild(gridDiv);
  }
}

let container = document.querySelector(".container");
container.addEventListener("mouseover", (event) => {
  if (event.target.matches(".inner-div")) { 
    event.target.classList.add("hover-effect");
  }
});

let sizeButton = document.querySelector(".sizeButton");

sizeButton.addEventListener("click", () => {
    let size = prompt("Enter grid size: ", '');

    createGrid(size);
});


createGrid(10);