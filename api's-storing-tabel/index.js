fetch("https://fakestoreapi.com/products").then((res) => {
    return res.json();
}).then((data) => {
    console.log(data[0].id);
    let tableData = "";
    data.map((values) => {
        tableData += ` <tr>
        <td>${values.id}</td>
        <td>${values.title}</td>
        <td>${values.description}</td>
        <td><img src="${values.image}"></td>
        <td>${values.price}</td>
        
      </tr> `
    });
    document.getElementById("tabel_body").innerHTML = tableData;
}).catch((error) =>{
    console.log(error);

})