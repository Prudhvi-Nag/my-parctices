fetch("https://fakestoreapi.com/products").then((res) => {
    return res.json();
}).then((data) => {
    console.log(data[0].id);
    let cardData = "";
    data.map((values) => {
        cardData += `<div class="card  " >
        <img src="${values.image}" class="card-img-top  h-50  " alt="...">
        <hr>
        <div class="card-body">
          <h5 class="card-title ">${values.title}</h5>
          
        </div>
        <hr>
            <p class="card-text fw-bold d-flex justify-content-center">${values.category}</p>
            <p class="card-text fw-bold d-flex justify-content-center">$ ${values.price}</p>
            <div class="card-footer">
                <p class="card-text fw-bold d-flex justify-content-center"> item id:# ${values.id}</p>
            </div>
        </div>`
    });
    document.querySelector("#cards").innerHTML = cardData;
}).catch((error) =>{
    console.log(error);

})