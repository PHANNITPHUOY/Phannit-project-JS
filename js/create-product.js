// let products = [
//     {
//       "id": 0,
//       "img": "https://www.sportyfied.com/thumbs/regular/029038_35_basicactivet_f_700x700.png",
//       "name": "T-shirt",
//       "price": "10",
//       "currency": "USD"
//     },
//     {
//       "id": 1,
//       "img": "https://www.sportyfied.com/thumbs/regular/029038_35_basicactivet_f_700x700.png",
//       "name": "T-shirt",
//       "price": "30",
//       "currency": "USD"
//     },
//     {
//       "id": 2,
//       "img": "https://www.sportyfied.com/thumbs/regular/029038_35_basicactivet_f_700x700.png",
//       "name": "T-shirt",
//       "price": "20",
//       "currency": "USD"
//     },
//     {
//       "id": 3,
//       "img": "https://www.sportyfied.com/thumbs/regular/029038_35_basicactivet_f_700x700.png",
//       "name": "T-shirt",
//       "price": "20",
//       "currency": "USD"
//     },
//     {
//       "id": 4,
//       "img": "https://www.sportyfied.com/thumbs/regular/029038_35_basicactivet_f_700x700.png",
//       "name": "T-shirt",
//       "price": "20",
//       "currency": "USD"
//     }
//   ]

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
  function displayProducts() {
    let table = document.querySelector("#table");
    document.querySelector(".add_Product").remove();
    let tbody = document.createElement("tbody");
    tbody.className = "add_Product";

    // ==============table =============
    for (let index = 0; index < products.length; index++) {
        let product = products[index];

        let tr_table = document.createElement("tr");
        tr_table.dataset.index = index;

        let td_table = document.createElement("td");
        td_table.className = "image";
        tr_table.appendChild(td_table);

        // let picture = document.createElement("td");
        // tr_table.appendChild(picture);

        
        let image = document.createElement("img");
        image.src = product.img
        td_table.appendChild(image)

        let nameProduct = document.createElement("td");
        nameProduct.textContent = product.name ;
        tr_table.appendChild(nameProduct);
        
        let price = document.createElement("td");
        price.textContent = product.price;
        tr_table.appendChild(price);


        // let icon = document.createElement("td");
        // icon.className = "icon";
        // tr_table.appendChild(icon);

        

        let action = document.createElement("td");
    
        tr_table.appendChild(action);
        let buttons = document.createElement("div");
        buttons.className = "action";
        let editImage = document.createElement("div");
        
        let edit_image = document.createElement("img");
        edit_image.className = "edit"
        edit_image.src = "../images/edit.png";
        tr_table.appendChild(edit_image)
        // edit_image.addEventListener("click",editPro)
        
        editImage.appendChild(edit_image);
        buttons.appendChild(editImage);
        
        let deleteImage = document.createElement("div");
        let delete_pro = document.createElement("img");
        delete_pro.className = "trash";
        delete_pro.src = "../images/delete.png";
        tr_table.appendChild(delete_pro);
        deleteImage.appendChild(delete_pro)
        // delete_pro.addEventListener("click",deleteProduct);
        buttons.appendChild(deleteImage);
        action.appendChild(buttons);

        tbody.appendChild(tr_table);
    }
    table.appendChild(tbody);
  }
displayProducts();


