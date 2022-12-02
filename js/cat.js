let cat_product = [
    {img:"../images/1.png", name:"Chicaco", price:"$10"},
    {img:"../images/1.png", name:"Fruit lover", price:"$10"},
    {img:"../images/1.png", name:"Hot & spicy veg", price:"$10"},
    {img:"../images/1.png", name:"Ham", price:"$10"},
    {img:"../images/1.png", name:"Greek", price:"$10"},
    {img:"../images/1.png", name:" Cheeses", price:"$10"},
    {img:"../images/1.png", name:"Hawaiian", price:"$10"},
    {img:"../images/1.png", name:" Vegetariana", price:"$10"},
    {img:"../images/1.png", name:" Sicilian", price:"$10"},
    {img:"../images/1.png", name:"BBQ Chicken", price:"$10"},
    {img:"../images/1.png", name:" Meat ", price:"$10"},
    {img:"../images/1.png", name:"California", price:"$10"},
    {img:"../images/1.png", name:"Popperani", price:"$10"},
    {img:"../images/1.png", name:"Detroit", price:"$10"},
    {img:"../images/1.png", name:"Margherota", price:"$10"},
    {img:"../images/1.png", name:"Chinese", price:"$10"},
    
  ]


function savecat_product() {
    localStorage.setItem("cat_product", JSON.stringify(cat_product));
    console.log(localStorage.setItem)
  }
  
  function loadcat_product() {
    let cat_producttorage = JSON.parse(localStorage.getItem("cat_product"));
    if (cat_producttorage !== null) {
      cat_product = cat_producttorage;
    }
  }
 let container = document.querySelector(".list-items");
 function displayProduct(){
    for(let index in cat_product){
        let card = document.createElement("div");
        card.className = "card";
        let images = document.createElement("img");
        images.src=cat_product[index]["img"];
        let nameOfProduct = document.createElement("h3");
        nameOfProduct.textContent = cat_product[index]["name"]
        let priceOfProduct = document.createElement("p");
        priceOfProduct.textContent = cat_product[index]["price"];
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
        
        card.appendChild(images);
        card.appendChild(nameOfProduct);
        card.appendChild(priceOfProduct);
        card.appendChild(cardFooter);
        container.appendChild(card);
    }
    loadcat_product();
 }

 





  
  //---------------------------------------------------------------------------------------//
  //--------------------------------------------Input--------------------------------------//
  //---------------------------------------------------------------------------------------//
  loadcat_product();
  displayProduct();
  // saveProducts();
  
