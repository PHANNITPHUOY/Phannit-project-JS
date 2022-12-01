let getButtonAdd = document.querySelector("#add-product-button");
let dialog = document.querySelector("#dialog");
let products = [
  {
    img: "https://mpng.subpng.com/20190921/tyc/transparent-cat-small-to-medium-sized-cats-british-shorthair-w-5d85b573b89ca4.5038171515690438277562.jpg",
    name: "Chicaco",
    price: "$10"
  },
  { img: "https://mpng.subpng.com/20190921/tyc/transparent-cat-small-to-medium-sized-cats-british-shorthair-w-5d85b573b89ca4.5038171515690438277562.jpg", name: "Fruit lover", price: "$10" },
  { img: "https://mpng.subpng.com/20190921/tyc/transparent-cat-small-to-medium-sized-cats-british-shorthair-w-5d85b573b89ca4.5038171515690438277562.jpg", name: "Hot & spicy veg", price: "$10" },
  { img: "https://mpng.subpng.com/20190921/tyc/transparent-cat-small-to-medium-sized-cats-british-shorthair-w-5d85b573b89ca4.5038171515690438277562.jpg", name: "Ham", price: "$10" },
  { img: "https://mpng.subpng.com/20190921/tyc/transparent-cat-small-to-medium-sized-cats-british-shorthair-w-5d85b573b89ca4.5038171515690438277562.jpg", name: "Greek", price: "$10" },
  { img: "https://mpng.subpng.com/20190921/tyc/transparent-cat-small-to-medium-sized-cats-british-shorthair-w-5d85b573b89ca4.5038171515690438277562.jpg", name: " Cheeses", price: "$10" },
  { img: "https://mpng.subpng.com/20190921/tyc/transparent-cat-small-to-medium-sized-cats-british-shorthair-w-5d85b573b89ca4.5038171515690438277562.jpg", name: "Hawaiian", price: "$10" },
  { img: "https://mpng.subpng.com/20190921/tyc/transparent-cat-small-to-medium-sized-cats-british-shorthair-w-5d85b573b89ca4.5038171515690438277562.jpg", name: " Vegetariana", price: "$10" },
  { img: "https://mpng.subpng.com/20190921/tyc/transparent-cat-small-to-medium-sized-cats-british-shorthair-w-5d85b573b89ca4.5038171515690438277562.jpg", name: " Sicilian", price: "$10" },
  { img: "https://mpng.subpng.com/20190921/tyc/transparent-cat-small-to-medium-sized-cats-british-shorthair-w-5d85b573b89ca4.5038171515690438277562.jpg", name: "BBQ Chicken", price: "$10" },
  { img: "https://mpng.subpng.com/20190921/tyc/transparent-cat-small-to-medium-sized-cats-british-shorthair-w-5d85b573b89ca4.5038171515690438277562.jpg", name: " Meat ", price: "$10" },
  { img: "https://mpng.subpng.com/20190921/tyc/transparent-cat-small-to-medium-sized-cats-british-shorthair-w-5d85b573b89ca4.5038171515690438277562.jpg", name: "California", price: "$10" },
  { img: "https://mpng.subpng.com/20190921/tyc/transparent-cat-small-to-medium-sized-cats-british-shorthair-w-5d85b573b89ca4.5038171515690438277562.jpg", name: "Popperani", price: "$10" },
  { img: "https://mpng.subpng.com/20190921/tyc/transparent-cat-small-to-medium-sized-cats-british-shorthair-w-5d85b573b89ca4.5038171515690438277562.jpg", name: "Detroit", price: "$10" },
  { img: "https://mpng.subpng.com/20190921/tyc/transparent-cat-small-to-medium-sized-cats-british-shorthair-w-5d85b573b89ca4.5038171515690438277562.jpg", name: "Margherota", price: "$10" },
  { img: "https://mpng.subpng.com/20190921/tyc/transparent-cat-small-to-medium-sized-cats-british-shorthair-w-5d85b573b89ca4.5038171515690438277562.jpg", name: "Chinese", price: "$10" },

]



function hide(event) {
  event.style.display = 'none';
}
function show(event) {
  event.style.display = 'block';
}








let i = 0;
let table = document.querySelector("#table");
function displayProducts() {
  // document.querySelector(".add-tbody").remove();
  let myTbody = document.querySelector(".add-tbody");
  if (myTbody != null) {
    myTbody.remove();
  }
  let tbody = document.createElement("tbody");
  tbody.className = "add-tbody";

  // ==============table =============
  for (let i = 0; i < products.length; i++) {
    let product = products[i];

    let createTr = document.createElement("tr");
    createTr.dataset.index = i;
    console.log(createTr)

    let createTd = document.createElement("td");
    createTd.className = "image";
    createTr.appendChild(createTd);

    let image = document.createElement("img");
    image.src = product.img
    createTd.appendChild(image)

    let nameProduct = document.createElement("td");
    nameProduct.textContent = product.name;
    createTr.appendChild(nameProduct);

    let price = document.createElement("td");
    price.textContent = product.price;
    createTr.appendChild(price);



    let td_edit = document.createElement("td"); //

    // createTr.appendChild(edit);
    // let editImage = document.createElement("div");
    // let editProduct = document.createElement("img");
    // editProduct.className = "edit"

    // editProduct.src = "../images/edit.png";
    // createTr.appendChild(editProduct)

    // editImage.appendChild(editProduct);
    // buttons.appendChild(editImage);
    td_edit.className = "td_edit";
    let editImage = document.createElement("img");
    editImage.className = "edit_img";
    editImage.addEventListener("click", editProduct);
    editImage.src = "../images/edit.png";
    td_edit.appendChild(editImage);
    createTr.appendChild(td_edit);

    let td_delete = document.createElement("td");
    td_delete.className = "delete";
    deleteImage = document.createElement("img");
    deleteImage.addEventListener("click",removeProduct);
    deleteImage.className = "delete_img"
    deleteImage.src = "../images/delete.png";

    td_delete.appendChild(deleteImage);
    createTr.appendChild(td_delete)









    // let deleteImage = document.createElement("div");
    // let deleteProduct = document.createElement("img");
    // deleteProduct.className = "trash";
    // deleteProduct.src = "../images/delete.png";
    // createTr.appendChild(deleteProduct);
    // deleteImage.appendChild(deleteProduct)

    // buttons.appendChild(deleteImage);
    // action.appendChild(buttons);




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
function create() {
  hide(dialog); 
  document.querySelector("#create").textContent ="Create";

  let dic = {};
  let inputOfImage = document.querySelector("#input-image");
  let inputOfName = document.querySelector("#input-name-product");
  let inputOfPrice = document.querySelector("#input-price-product");

  dic.img = inputOfImage.value;
  dic.name = inputOfName.value;
  dic.price = inputOfPrice.value;
  products.push(dic);
  saveProducts();
  displayProducts();
}





////--  ---------------------------------------////
////////////////////////////////////////////////////////////////
function removeProduct(event){
  let index = event.target.parentElement.parentElement.dataset.index;
  products.splice(index, 1);
  saveProducts();
  displayProducts();
}
function editProduct(event){
  show(dialog);
  document.querySelector("#create").textContent = "Edit";

  let index = event.target.parentElement.parentElement.dataset.index;
  let inputOfImage = document.querySelector("#input-image");
  let inputOfName = document.querySelector("#input-name-product");
  let inputOfPrice = document.querySelector("#input-price-product");
  inputOfImage.value = products[index].img;
  inputOfName.value = products[index].name;
  inputOfPrice.value = products[index].price;

  products.splice(index, 1);
  saveProducts();
}






//------------------------------------------------------------------------------------------//
//-----------------------------------------------------------------------------------------//
function addProduct() {
  show(dialog);
  console.log("Hello world!");
}

getButtonAdd.addEventListener("click", addProduct);
//----------------------------------------------------------------------------------------//
//
function Cancel() {
  hide(dialog)
}


saveProducts();
loadProducts();