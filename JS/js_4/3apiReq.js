let api01 = "https://api.escuelajs.co/api/v1/products"

// function fetchDataFromBackend(){
//     let promise = fetch(api01);
//     promise.then((response)=>console.log(response)).catch((errorMessage)=>console.log(errorMessage));
// }
// fetchDataFromBackend();

function fetchDataFromBackend(){
    let promise = fetch(api01);
    promise.then((response)=>response.json().
    then(data=>console.log(data)))
    .catch((errorMessage)=>console.log(errorMessage));
}
fetchDataFromBackend();