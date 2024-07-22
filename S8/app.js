

// dom nodes
const root = document.getElementById("root");
const basket = document.getElementById("basket");




// function
function render(list) {
    let template = `<section class="products">`
    template += list.map(item => {
        return `
            <div class="product">
                <img src="${item.image}" />
                <h3>${item.title}</h3>
                <h5>${item.category}</h5>
                <span>${item.price}</span>
                ${
                    !BASKET.find(basketItem => basketItem.id === item.id) 
                    ?
                    `<button onclick="handleAddToBasket('${item.id}')">ADD TO BASKET</button>`
                    :
                    `<h4>ADDED TO BASKET</h4>`
                }
            </div>`
    }).join("");

    template += '</section>';
    root.innerHTML = template;
    basket.textContent = BASKET.length

}



function renderBasket() {
    let template = `<section class="baskets">`
    template += BASKET.map(item => {
        return `
            <div class="product basket">
                <img src="${item.image}" />
                <h3>${item.title}</h3>
                <h5>${item.category}</h5>
                <span>${item.price}</span>
                <button onclick="" class='delete'>REMOVE FROM BASKET </button>
            </div>`
    }).join("");

    template += '</section>';
    root.innerHTML = template;
    basket.textContent = BASKET.length
}




function handleSearch(event) {
    const value = event.target.value;
    const searchResult = PRODUCTS.filter(product => product.title.search(value) > -1);
    render(searchResult);
}


function handleAddToBasket(productId) {
    debugger;
    const finded = PRODUCTS.find(product => product.id === +productId);
    BASKET.push(finded);
    render(PRODUCTS)
}



// events
window.addEventListener("load", ()=> {
    render(PRODUCTS)
})