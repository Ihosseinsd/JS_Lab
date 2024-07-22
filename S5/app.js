// dom nodes
const boxes = document.querySelectorAll("div");

// console.log(boxes[0].classList.toggle("alaki"))

// funtions
function setRandomBackground(event) {
  const box = event.target;
//   if (!box.style.background) {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    box.style.background = `rgb(${red}, ${green}, ${blue})`;
    box.classList.add("disable");
//   }
}

// events
for (const box of boxes) {
  box.addEventListener("click", setRandomBackground);
}
