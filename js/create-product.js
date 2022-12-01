let getButtonAdd = document.querySelector("#add-product-button");
let dialog = document.querySelector("#dialog");
let products = [
    {img:"https://o.remove.bg/downloads/93481a79-3965-4dfe-a68b-b0439751eae4/images-removebg-preview.png", name:"Chicaco", price:"$10"},
    {img:"https://o.remove.bg/downloads/93481a79-3965-4dfe-a68b-b0439751eae4/images-removebg-preview.png", name:"Fruit lover", price:"$10"},
    {img:"https://o.remove.bg/downloads/93481a79-3965-4dfe-a68b-b0439751eae4/images-removebg-preview.png", name:"Hot & spicy veg", price:"$10"},
    {img:"https://o.remove.bg/downloads/93481a79-3965-4dfe-a68b-b0439751eae4/images-removebg-preview.png", name:"Ham", price:"$10"},
    {img:"https://o.remove.bg/downloads/93481a79-3965-4dfe-a68b-b0439751eae4/images-removebg-preview.png", name:"Greek", price:"$10"},
    {img:"https://o.remove.bg/downloads/93481a79-3965-4dfe-a68b-b0439751eae4/images-removebg-preview.png", name:" Cheeses", price:"$10"},
    {img:"https://o.remove.bg/downloads/93481a79-3965-4dfe-a68b-b0439751eae4/images-removebg-preview.png", name:"Hawaiian", price:"$10"},
    {img:"https://o.remove.bg/downloads/93481a79-3965-4dfe-a68b-b0439751eae4/images-removebg-preview.png", name:" Vegetariana", price:"$10"},
    {img:"https://o.remove.bg/downloads/93481a79-3965-4dfe-a68b-b0439751eae4/images-removebg-preview.png", name:" Sicilian", price:"$10"},
    {img:"https://o.remove.bg/downloads/93481a79-3965-4dfe-a68b-b0439751eae4/images-removebg-preview.png", name:"BBQ Chicken", price:"$10"},
    {img:"https://o.remove.bg/downloads/93481a79-3965-4dfe-a68b-b0439751eae4/images-removebg-preview.png", name:" Meat ", price:"$10"},
    {img:"https://o.remove.bg/downloads/93481a79-3965-4dfe-a68b-b0439751eae4/images-removebg-preview.png", name:"California", price:"$10"},
    {img:"https://o.remove.bg/downloads/93481a79-3965-4dfe-a68b-b0439751eae4/images-removebg-preview.png", name:"Popperani", price:"$10"},
    {img:"https://o.remove.bg/downloads/93481a79-3965-4dfe-a68b-b0439751eae4/images-removebg-preview.png", name:"Detroit", price:"$10"},
    {img:"https://o.remove.bg/downloads/93481a79-3965-4dfe-a68b-b0439751eae4/images-removebg-preview.png", name:"Margherota", price:"$10"},
    {img:"https://o.remove.bg/downloads/93481a79-3965-4dfe-a68b-b0439751eae4/images-removebg-preview.png", name:"Chinese", price:"$10"},

]



function hide(event){
  event.style.display = 'none';
}
function show (event) {
  event.style.display = 'block';
}








  let i=0;
  let table = document.querySelector("#table");
  function displayProducts() {
    // document.querySelector(".add-tbody").remove();
    let myTbody = document.querySelector(".add-tbody");
    if(myTbody!=null){
      myTbody.remove();
    }
    let tbody = document.createElement("tbody");
    tbody.className = "add-tbody";

    // ==============table =============
    for (let i = 0; i < products.length; i++) {
        let product = products[i];

        let createTr = document.createElement("tr");
        createTr.dataset.i = i;

        let createTd = document.createElement("td");
        createTd.className = "image";
        createTr.appendChild(createTd);

        let image = document.createElement("img");
        image.src = product.img
        createTd.appendChild(image)

        let nameProduct = document.createElement("td");
        nameProduct.textContent = product.name ;
        createTr.appendChild(nameProduct);
        
        let price = document.createElement("td");
        price.textContent = product.price;
        createTr.appendChild(price);

        

        let action = document.createElement("td");
    
        createTr.appendChild(action);
        let buttons = document.createElement("div");
        buttons.className = "action";
        let editImage = document.createElement("div");
        
        let editProduct = document.createElement("img");
        editProduct.className = "edit"
        editProduct.src = "../images/edit.png";
        createTr.appendChild(editProduct)
        
        editImage.appendChild(editProduct);
        buttons.appendChild(editImage);
        
        let deleteImage = document.createElement("div");
        let deleteProduct = document.createElement("img");
       deleteProduct.className = "trash";
       deleteProduct.src = "../images/delete.png";
        createTr.appendChild(deleteProduct);
        deleteImage.appendChild(deleteProduct)
        
        buttons.appendChild(deleteImage);
        action.appendChild(buttons);

        tbody.appendChild(createTr);
    }
    table.appendChild(tbody);
  }
displayProducts();



//------------------------------------------------------------------------//
//------------------------------------------------------------------------//
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



//------------------------------------------------------------------------------------------//
//-----------------------------------------------------------------------------------------//
function addProduct(){
  show(dialog);
  console.log("Hello world!");
}

getButtonAdd.addEventListener("click",addProduct);
//----------------------------------------------------------------------------------------//
//
function Cancel (){
  hide(dialog)
}
