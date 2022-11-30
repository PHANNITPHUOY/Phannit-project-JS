
let products = [
    {"img":"https://o.remove.bg/downloads/b4dfbcb4-9cc4-49f6-8fb9-2e308782b583/images-removebg-preview.png", "name":"Pizza", "price":"$10"},
    {"img":"https://o.remove.bg/downloads/f8e187a8-5ed5-484e-aef7-94dfc3a0fbfb/pizza-png-15-removebg-preview.png", "name":"Pizza", "price":"$10"},
    {"img":"https://o.remove.bg/downloads/8f869b18-c87c-456f-9629-3d67acdc4ee2/3625.png_860-removebg-preview.png", "name":"Pizza", "price":"$10"},
    {"img":"https://o.remove.bg/downloads/d5dd0a77-3975-46f3-a3be-5c0d7d458eb0/3626.png_860-removebg-preview.png", "name":"Pizza", "price":"$10"},
    {"img":"https://o.remove.bg/downloads/c90278e1-0e84-4a1b-b4dc-26f1b1b0d294/png-clipart-pizza-with-tomatos-new-york-style-pizza-italian-cuisine-take-out-pizza-margherita-pizza-food-recipe-removebg-preview.png", "name":"Pizza", "price":"$10"},
    {"img":"https://o.remove.bg/downloads/763fc7f4-7eee-4383-b99a-b1d5ddb22651/png-clipart-pepperoni-pizza-margarita-pizza-margherita-italian-cuisine-tomato-pizza-food-cheese-removebg-preview.png", "name":"Pizza", "price":"$10"},
    {"img":"https://o.remove.bg/downloads/6781f130-f463-4a25-b0f3-3f37b3f19d0c/png-clipart-pizza-margherita-new-york-style-pizza-pizza-hut-pitsa-pati-pizza-food-recipe-removebg-preview.png", "name":"Pizza", "price":"$10"},
    {"img":"https://o.remove.bg/downloads/8d8a1ef9-24d7-47f8-822f-a08048dc7251/png-clipart-seafood-pizza-barbecue-italian-cuisine-gyro-pizza-barbecue-food-removebg-preview.png", "name":"Pizza", "price":"$10"},
    {"img":"https://o.remove.bg/downloads/6a43112b-b4b4-4f22-b9b9-e8197a7f656b/png-clipart-pizza-margherita-shashlik-ham-sushi-pizza-food-recipe-thumbnail-removebg-preview.png", "name":"Pizza", "price":"$10"},
    {"img":"https://o.remove.bg/downloads/cf2ac701-5532-4ade-a07c-02b6beb5a70a/png-clipart-california-style-pizza-sicilian-pizza-doner-kebab-shawarma-pizza-food-recipe-thumbnail-removebg-preview.png", "name":"Pizza", "price":"$10"},
    {"img":"https://o.remove.bg/downloads/4fa7ff4b-be69-485b-8c92-e4ffb9b6ebfb/png-clipart-pizza-italian-cuisine-salami-pepperoni-sauce-pizza-soup-food-thumbnail-removebg-preview.png", "name":"Pizza", "price":"$10"},
    {"img":"https://o.remove.bg/downloads/0d02cf1e-76b0-459d-b2c7-b5dac7f1db2e/png-clipart-pizza-ham-sushi-baziliko-pitstsa-restaurant-pizza-food-olive-thumbnail-removebg-preview.png", "name":"Pizza", "price":"$10"},
    {"img":"https://o.remove.bg/downloads/799a9d5a-f379-4d7f-b72b-743fa372947d/png-clipart-pizza-margherita-sicilian-pizza-marinara-sauce-sicilian-cuisine-pizza-food-recipe-thumbnail-removebg-preview.png", "name":"Pizza", "price":"$10"},
    {"img":"https://o.remove.bg/downloads/20a3e317-0c58-4269-9fd3-007beae46cb2/png-clipart-pizza-hut-stuffing-calzone-pepperoni-pizza-food-pizza-delivery-thumbnail-removebg-preview.png", "name":"Pizza", "price":"$10"},
    {"img":"https://o.remove.bg/downloads/56882f0e-169d-448e-b0d4-d7ef2272038a/png-clipart-california-style-pizza-sicilian-pizza-hawaiian-pizza-cuisine-of-the-united-states-pizza-food-tomato-thumbnail-removebg-preview.png", "name":"Pizza", "price":"$10"},
    {"img":"https://o.remove.bg/downloads/cc14e947-ef3d-46c5-a191-d2af07e134d3/png-clipart-california-style-pizza-sicilian-pizza-pizza-margherita-italian-cuisine-pizza-food-recipe-thumbnail-removebg-preview.png", "name":"Pizza", "price":"$10"},

]
 let container = document.querySelector(".list-items");
 function displayProduct(products){
    for(let index in products){
        let card = document.createElement("div");
        card.className = "card";
       let image = document.createElement("img");
        image.src=products[index]["img"];
        // console.log(image)
       let nameOfProduct = document.createElement("h3");
        nameOfProduct.textContent = products[index]["name"]
       let priceOfProduct = document.createElement("p");
        priceOfProduct.textContent = products[index]["price"];
        card.appendChild(image);
        card.appendChild(nameOfProduct);
        card.appendChild(priceOfProduct);
        container.appendChild(card);
        // console.log(container)
        // console.log(image)
    }
 }
 displayProduct(products);