//------------------------Create Card-----------------------------------------//
let products = [
    {img:"https://o.remove.bg/downloads/e4769bec-530e-448a-a9db-d64411dcbd8e/png-transparent-cat-animal-lovely-cat-removebg-preview.png", name:"Chicaco", price:"$10"},
    {img:"https://o.remove.bg/downloads/e4769bec-530e-448a-a9db-d64411dcbd8e/png-transparent-cat-animal-lovely-cat-removebg-preview.png", name:"Fruit lover", price:"$10"},
    {img:"https://o.remove.bg/downloads/e4769bec-530e-448a-a9db-d64411dcbd8e/png-transparent-cat-animal-lovely-cat-removebg-preview.png", name:"Hot & spicy veg", price:"$10"},
    {img:"https://o.remove.bg/downloads/e4769bec-530e-448a-a9db-d64411dcbd8e/png-transparent-cat-animal-lovely-cat-removebg-preview.png", name:"Ham", price:"$10"},
    {img:"https://o.remove.bg/downloads/e4769bec-530e-448a-a9db-d64411dcbd8e/png-transparent-cat-animal-lovely-cat-removebg-preview.png", name:"Greek", price:"$10"},
    {img:"https://o.remove.bg/downloads/e4769bec-530e-448a-a9db-d64411dcbd8e/png-transparent-cat-animal-lovely-cat-removebg-preview.png", name:" Cheeses", price:"$10"},
    {img:"https://o.remove.bg/downloads/e4769bec-530e-448a-a9db-d64411dcbd8e/png-transparent-cat-animal-lovely-cat-removebg-preview.png", name:"Hawaiian", price:"$10"},
    {img:"https://o.remove.bg/downloads/e4769bec-530e-448a-a9db-d64411dcbd8e/png-transparent-cat-animal-lovely-cat-removebg-preview.png", name:" Vegetariana", price:"$10"},
    {img:"https://o.remove.bg/downloads/e4769bec-530e-448a-a9db-d64411dcbd8e/png-transparent-cat-animal-lovely-cat-removebg-preview.png", name:" Sicilian", price:"$10"},
    {img:"https://o.remove.bg/downloads/e4769bec-530e-448a-a9db-d64411dcbd8e/png-transparent-cat-animal-lovely-cat-removebg-preview.png", name:"BBQ Chicken", price:"$10"},
    {img:"https://o.remove.bg/downloads/e4769bec-530e-448a-a9db-d64411dcbd8e/png-transparent-cat-animal-lovely-cat-removebg-preview.png", name:" Meat ", price:"$10"},
    {img:"https://o.remove.bg/downloads/e4769bec-530e-448a-a9db-d64411dcbd8e/png-transparent-cat-animal-lovely-cat-removebg-preview.png", name:"California", price:"$10"},
    {img:"https://o.remove.bg/downloads/e4769bec-530e-448a-a9db-d64411dcbd8e/png-transparent-cat-animal-lovely-cat-removebg-preview.png", name:"Popperani", price:"$10"},
    {img:"https://o.remove.bg/downloads/e4769bec-530e-448a-a9db-d64411dcbd8e/png-transparent-cat-animal-lovely-cat-removebg-preview.png", name:"Detroit", price:"$10"},
    {img:"https://o.remove.bg/downloads/e4769bec-530e-448a-a9db-d64411dcbd8e/png-transparent-cat-animal-lovely-cat-removebg-preview.png", name:"Margherota", price:"$10"},
    {img:"https://o.remove.bg/downloads/e4769bec-530e-448a-a9db-d64411dcbd8e/png-transparent-cat-animal-lovely-cat-removebg-preview.png", name:"Chinese", price:"$10"},

]

 let container = document.querySelector(".list-items");
 function displayProduct(products){
    for(let index in products){
        let card = document.createElement("div");
        card.className = "card";
        let image = document.createElement("img");
        image.src=products[index]["img"];
        let nameOfProduct = document.createElement("h3");
        nameOfProduct.textContent = products[index]["name"]
        let priceOfProduct = document.createElement("p");
        priceOfProduct.textContent = products[index]["price"];
        card.appendChild(image);
        card.appendChild(nameOfProduct);
        card.appendChild(priceOfProduct);
        console.log(card);
        container.appendChild(card);
    }
 }
 displayProduct(products)

//---------------------------------------------------------------------------------------//
//--------------------------------------------Input--------------------------------------//
//---------------------------------------------------------------------------------------//

let getSearch = document.querySelector("#search");

getSearch.addEventListener("keyup", researchProduct);



let card = document.querySelectorAll(".card");
function researchProduct(){
    for (let i in card){
        let word = card[i].children[1].textContent.toLowerCase();
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