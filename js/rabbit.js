let dog_product = [
    {img:"../images/5.png", name:"Chicaco", price:"$10"},
    {img:"../images/5.png", name:"Fruit lover", price:"$10"},
    {img:"../images/5.png", name:"Hot & spicy veg", price:"$10"},
    {img:"../images/5.png", name:"Ham", price:"$10"},
    {img:"../images/5.png", name:"Greek", price:"$10"},
    {img:"../images/5.png", name:" Cheeses", price:"$10"},
    {img:"../images/5.png", name:"Hawaiian", price:"$10"},
    {img:"../images/5.png", name:" Vegetariana", price:"$10"},
    {img:"../images/5.png", name:" Sicilian", price:"$10"},
    {img:"../images/5.png", name:"BBQ Chicken", price:"$10"},
    {img:"../images/5.png", name:" Meat ", price:"$10"},
    {img:"../images/5.png", name:"California", price:"$10"},
    {img:"../images/5.png", name:"Popperani", price:"$10"},
    {img:"../images/5.png", name:"Detroit", price:"$10"},
    {img:"../images/5.png", name:"Margherota", price:"$10"},
    {img:"../images/5.png", name:"Chinese", price:"$10"},

]


function savedog_product() {
    localStorage.setItem("dog_product", JSON.stringify(dog_product));
    console.log(localStorage.setItem)
  }
  
  function loaddog_product() {
    let dog_producttorage = JSON.parse(localStorage.getItem("dog_product"));
    if (dog_producttorage !== null) {
      dog_product = dog_producttorage;
    }
  }
 let container = document.querySelector(".list-items");
 function displayProduct(){
    for(let index in dog_product){
        let card = document.createElement("div");
        card.className = "card";
        let image = document.createElement("img");
        image.src=dog_product[index]["img"];
        let nameOfProduct = document.createElement("h3");
        nameOfProduct.textContent = dog_product[index]["name"]
        let priceOfProduct = document.createElement("p");
        priceOfProduct.textContent = dog_product[index]["price"];
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
    loaddog_product();
 }






  
  //---------------------------------------------------------------------------------------//
  //--------------------------------------------Input--------------------------------------//
  //---------------------------------------------------------------------------------------//
// saveProducts();
loaddog_product();
displayProduct();

