//------------------------Create Card-----------------------------------------//
let products = [
    {img:"https://mpng.subpng.com/20190921/tyc/transparent-cat-small-to-medium-sized-cats-british-shorthair-w-5d85b573b89ca4.5038171515690438277562.jpg", name:"Chicaco", price:"$10"},
    {img:"https://mpng.subpng.com/20190921/tyc/transparent-cat-small-to-medium-sized-cats-british-shorthair-w-5d85b573b89ca4.5038171515690438277562.jpg", name:"Fruit lover", price:"$10"},
    {img:"https://mpng.subpng.com/20190921/tyc/transparent-cat-small-to-medium-sized-cats-british-shorthair-w-5d85b573b89ca4.5038171515690438277562.jpg", name:"Hot & spicy veg", price:"$10"},
    {img:"https://mpng.subpng.com/20190921/tyc/transparent-cat-small-to-medium-sized-cats-british-shorthair-w-5d85b573b89ca4.5038171515690438277562.jpg", name:"Ham", price:"$10"},
    {img:"https://mpng.subpng.com/20190921/tyc/transparent-cat-small-to-medium-sized-cats-british-shorthair-w-5d85b573b89ca4.5038171515690438277562.jpg", name:"Greek", price:"$10"},
    {img:"https://mpng.subpng.com/20190921/tyc/transparent-cat-small-to-medium-sized-cats-british-shorthair-w-5d85b573b89ca4.5038171515690438277562.jpg", name:" Cheeses", price:"$10"},
    {img:"https://mpng.subpng.com/20190921/tyc/transparent-cat-small-to-medium-sized-cats-british-shorthair-w-5d85b573b89ca4.5038171515690438277562.jpg", name:"Hawaiian", price:"$10"},
    {img:"https://mpng.subpng.com/20190921/tyc/transparent-cat-small-to-medium-sized-cats-british-shorthair-w-5d85b573b89ca4.5038171515690438277562.jpg", name:" Vegetariana", price:"$10"},
    {img:"https://mpng.subpng.com/20190921/tyc/transparent-cat-small-to-medium-sized-cats-british-shorthair-w-5d85b573b89ca4.5038171515690438277562.jpg", name:" Sicilian", price:"$10"},
    {img:"https://mpng.subpng.com/20190921/tyc/transparent-cat-small-to-medium-sized-cats-british-shorthair-w-5d85b573b89ca4.5038171515690438277562.jpg", name:"BBQ Chicken", price:"$10"},
    {img:"https://mpng.subpng.com/20190921/tyc/transparent-cat-small-to-medium-sized-cats-british-shorthair-w-5d85b573b89ca4.5038171515690438277562.jpg", name:" Meat ", price:"$10"},
    {img:"https://mpng.subpng.com/20190921/tyc/transparent-cat-small-to-medium-sized-cats-british-shorthair-w-5d85b573b89ca4.5038171515690438277562.jpg", name:"California", price:"$10"},
    {img:"https://mpng.subpng.com/20190921/tyc/transparent-cat-small-to-medium-sized-cats-british-shorthair-w-5d85b573b89ca4.5038171515690438277562.jpg", name:"Popperani", price:"$10"},
    {img:"https://mpng.subpng.com/20190921/tyc/transparent-cat-small-to-medium-sized-cats-british-shorthair-w-5d85b573b89ca4.5038171515690438277562.jpg", name:"Detroit", price:"$10"},
    {img:"https://mpng.subpng.com/20190921/tyc/transparent-cat-small-to-medium-sized-cats-british-shorthair-w-5d85b573b89ca4.5038171515690438277562.jpg", name:"Margherota", price:"$10"},
    {img:"https://mpng.subpng.com/20190921/tyc/transparent-cat-small-to-medium-sized-cats-british-shorthair-w-5d85b573b89ca4.5038171515690438277562.jpg", name:"Chinese", price:"$10"},

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
        buttonBuy.textContent = "Buy now";
        cardFooter.appendChild(buttonBuy);
        
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