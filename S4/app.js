

// get dom nodes
const thumbs = document.querySelectorAll("#thumbs > img");
const big = document.querySelector("#big > img");
const h2 = document.querySelector("h2");



// function
function changeImage(evt) {
    const target = evt.target;
    const src = target.getAttribute("src");
    const alt = target.getAttribute("alt");
    h2.textContent = alt;
    big.setAttribute("src", src);
    clearStyle();
    target.style.borderColor = "red";
}

function clearStyle() {
    for (const thumb of thumbs) {
        thumb.style = ''
    }
}



// events
for (const thumb of thumbs) {
    thumb.onclick = changeImage;
}