// let container = document.querySelector(".container");

// let gridArr = [];
// let size = 10;
// let n = size * size;
// let divGridHeight = 100 / size;
// let gridDivWidth = 100 / size;
// for (let i = 0; i < n; i++) {
//   let gridDiv = document.createElement("div");
//   gridDiv.classList.add("inner-div");
//   gridArr.push(gridDiv);
//   gridDiv.setAttribute(
//     "style",
//     `flex: 1 1 calc(${gridDivWidth}% - 10px); height: ${divGridHeight}% `
//   );
// }

// for (item of gridArr) {
//   container.appendChild(item);
// }

function createGrid(size) {
  let container = document.querySelector(".container");
  let gridArr = [];
  let n = size * size;
  let divGridHeight = 100 / size;
  let gridDivWidth = 100 / size;
    
  for (let i = 0; i < n; i++) {
    let gridDiv = document.createElement("div");
    gridDiv.classList.add("inner-div");
    gridArr.push(gridDiv);
    gridDiv.setAttribute(
      "style",
      `flex: 1 1 calc(${gridDivWidth}% - 5px); height: ${divGridHeight}% `
    );
    container.appendChild(gridDiv);
  }
}

createGrid(10);