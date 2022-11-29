
let products = [
    {"img":"https://www.imgacademy.com/sites/default/files/2022-07/img-homepage-meta.jpg", "name":"Pizza", "price":"$10"},
    {"img":"https://www.imgacademy.com/sites/default/files/2022-07/img-homepage-meta.jpg", "name":"Pizza", "price":"$10"},
    {"img":"https://www.imgacademy.com/sites/default/files/2022-07/img-homepage-meta.jpg", "name":"Pizza", "price":"$10"},
    {"img":"https://www.imgacademy.com/sites/default/files/2022-07/img-homepage-meta.jpg", "name":"Pizza", "price":"$10"},
    {"img":"https://www.imgacademy.com/sites/default/files/2022-07/img-homepage-meta.jpg", "name":"Pizza", "price":"$10"},
    {"img":"https://www.imgacademy.com/sites/default/files/2022-07/img-homepage-meta.jpg", "name":"Pizza", "price":"$10"},

]
 let container = document.querySelector(".list-items");
 function displayProduct(products){
    for(let index in products){
        let card = document.createElement("div");
        card.className = "card";
       let image = document.createElement("div");
        image.src=products[index]["img"];
        console.log(image)
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