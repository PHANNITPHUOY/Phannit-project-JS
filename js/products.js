//------------------------Create Card-----------------------------------------//
let products = [
    {img:"https://o.remove.bg/downloads/7ea89ea4-a91a-46e0-a5e2-ba773013e2da/png-transparent-cat-animal-lovely-cat-removebg-preview.png", name:"Chicaco", price:"$10"},
    {img:"https://o.remove.bg/downloads/7ea89ea4-a91a-46e0-a5e2-ba773013e2da/png-transparent-cat-animal-lovely-cat-removebg-preview.png", name:"Fruit lover", price:"$10"},
    {img:"https://o.remove.bg/downloads/7ea89ea4-a91a-46e0-a5e2-ba773013e2da/png-transparent-cat-animal-lovely-cat-removebg-preview.png", name:"Hot & spicy veg", price:"$10"},
    {img:"https://o.remove.bg/downloads/7ea89ea4-a91a-46e0-a5e2-ba773013e2da/png-transparent-cat-animal-lovely-cat-removebg-preview.png", name:"Ham", price:"$10"},
    {img:"https://o.remove.bg/downloads/7ea89ea4-a91a-46e0-a5e2-ba773013e2da/png-transparent-cat-animal-lovely-cat-removebg-preview.png", name:"Greek", price:"$10"},
    {img:"https://o.remove.bg/downloads/7ea89ea4-a91a-46e0-a5e2-ba773013e2da/png-transparent-cat-animal-lovely-cat-removebg-preview.png", name:" Cheeses", price:"$10"},
    {img:"https://o.remove.bg/downloads/7ea89ea4-a91a-46e0-a5e2-ba773013e2da/png-transparent-cat-animal-lovely-cat-removebg-preview.png", name:"Hawaiian", price:"$10"},
    {img:"https://o.remove.bg/downloads/7ea89ea4-a91a-46e0-a5e2-ba773013e2da/png-transparent-cat-animal-lovely-cat-removebg-preview.png", name:" Vegetariana", price:"$10"},
    {img:"https://o.remove.bg/downloads/7ea89ea4-a91a-46e0-a5e2-ba773013e2da/png-transparent-cat-animal-lovely-cat-removebg-preview.png", name:" Sicilian", price:"$10"},
    {img:"https://o.remove.bg/downloads/7ea89ea4-a91a-46e0-a5e2-ba773013e2da/png-transparent-cat-animal-lovely-cat-removebg-preview.png", name:"BBQ Chicken", price:"$10"},
    {img:"https://o.remove.bg/downloads/7ea89ea4-a91a-46e0-a5e2-ba773013e2da/png-transparent-cat-animal-lovely-cat-removebg-preview.png", name:" Meat ", price:"$10"},
    {img:"https://o.remove.bg/downloads/7ea89ea4-a91a-46e0-a5e2-ba773013e2da/png-transparent-cat-animal-lovely-cat-removebg-preview.png", name:"California", price:"$10"},
    {img:"https://o.remove.bg/downloads/7ea89ea4-a91a-46e0-a5e2-ba773013e2da/png-transparent-cat-animal-lovely-cat-removebg-preview.png", name:"Popperani", price:"$10"},
    {img:"https://o.remove.bg/downloads/7ea89ea4-a91a-46e0-a5e2-ba773013e2da/png-transparent-cat-animal-lovely-cat-removebg-preview.png", name:"Detroit", price:"$10"},
    {img:"https://o.remove.bg/downloads/7ea89ea4-a91a-46e0-a5e2-ba773013e2da/png-transparent-cat-animal-lovely-cat-removebg-preview.png", name:"Margherota", price:"$10"},
    {img:"https://o.remove.bg/downloads/7ea89ea4-a91a-46e0-a5e2-ba773013e2da/png-transparent-cat-animal-lovely-cat-removebg-preview.png", name:"Chinese", price:"$10"},

]


function saveProducts() {
    localStorage.setItem("products", JSON.stringify(products));
    console.log(localStorage.setItem)
  }
  
  function loadProducts() {
    let productStorage = JSON.parse(localStorage.getItem("products"));
    if (productStorage !== null) {
      products = productStorage;
    }
  }
 let container = document.querySelector(".list-items");
 function displayProduct(){
    for(let index in products){
        let card = document.createElement("div");
        card.className = "card";
        let image = document.createElement("img");
        image.src=products[index]["img"];
        let nameOfProduct = document.createElement("h3");
        nameOfProduct.textContent = products[index]["name"]
        let priceOfProduct = document.createElement("p");
        priceOfProduct.textContent = products[index]["price"];
        let cardFooter = document.createElement("div");
        cardFooter.className = "card-footer";
        let star = document.createElement("div");
        star.className = "icons"
        for (let i = 0; i < 5; i++) {
            let i = document.createElement("i");
            i.className = "material-icons";
            i.textContent ="star"
            star.appendChild(i);
        };
        cardFooter.appendChild(star)
        
        let buttonBuy = document.createElement("button");
        buttonBuy.className = "buy";
        let a = document.createElement("a");
        // buttonBuy.textContent = "Details";
        a.textContent = "Details";
        a.href = "pages/detail.html";
        
        buttonBuy.appendChild(a);
        cardFooter.appendChild(buttonBuy);
        console.log(buttonBuy)
        
        card.appendChild(image);
        card.appendChild(nameOfProduct);
        card.appendChild(priceOfProduct);
        card.appendChild(cardFooter);
        container.appendChild(card);
    }
    loadProducts();
 }






  
  //---------------------------------------------------------------------------------------//
  //--------------------------------------------Input--------------------------------------//
  //---------------------------------------------------------------------------------------//

loadProducts();
displayProduct();


let getSearch = document.querySelector("#search");

getSearch.addEventListener("keyup", researchProduct);
console.log(getSearch);

let card = document.querySelectorAll(".card");

function researchProduct(){
    for (let i in card){
        let word = card[i].children[1].textContent.toLowerCase();
        console.log(word);
        let valueOfSearch = getSearch.value.toLowerCase();
        if (word.indexOf(valueOfSearch)>-1){
            card[i].style.display = "block";
        }
        else{
            card[i].style.display = "none";
        }
        
    }
}
researchProduct();






