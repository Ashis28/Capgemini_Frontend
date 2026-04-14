
let table = document.getElementById('table');
let api01 = "https://api.escuelajs.co/api/v1/products";

let data;
async function fetchData(params) {
    let response = await fetch(api01);
    data = await response.json();
    
    console.log(typeof(data));
    console.log(data[0])
    setTimeout(showOnDom,1500);
}

function showOnDom(){
    for(let i=0;i<data.length-1;i++){
        let tr1 = document.createElement("tr");
        tr1.innerHTML = `
        <td>${data[i].id}</td>
        <td>${data[i].title}</td>
        <td>${data[i].price}</td>
        <td>${data[i].slug}</td>
         `;
        table.append(tr1)
    }
}
fetchData();

// seaerching functionality
let searchId = document.getElementById("search");
function searchData(){
    let val = searchId.value.toLowerCase();
    console.log(val,typeof(data))

    console.log(typeof(val));
    // let filteredData = data.filter(item=>{
    //     item.title.toLowerCase().includes(val);
    // }) id'k ball this ain't working 

    //trying with for loop
    table.innerHTML = "";
    let tr = table.insertRow();
    /*
    th1 = document.createElement('th');
    th2 = document.createElement('th');
    th3 = document.createElement('th');
    th4 = document.createElement('th');

    th1.textContent = "ID";
    th2.textContent = "title";
    th3.textContent = "slug";
    th3.textContent = "creation Time";

    tr.append(th1);
    tr.append(th2);
    tr.append(th3);
    tr.append(th4);
    */
   //Now using looping to create a short cut for above
    ['id','title','slug','price','description'].forEach(item=>{
        let th = document.createElement('th');
        th.innerText = item;
        tr.append(th);
    })
    th1 = document.createElement('th');
    for(let i=0;i<data.length;i++){
        if(data[i].title.toLowerCase().includes(val)){
            var searche_result = data[i];
            console.log(searche_result)

            //creating table row and adding in table
            let t_row = document.createElement('tr');
            t_row.innerHTML = `
            <td>${data[i].id}</td>
            <td>${data[i].title}</td>
            <td>${data[i].slug}</td>
            <td>${data[i].price}</td>
            <td>${data[i].description}</td>
            `;
            table.append(t_row);
        }
    }
}

//issue1: image is not loading