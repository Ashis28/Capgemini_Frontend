let api02 = "https://api.escuelajs.co/api/v1/products"

async function fetchData(params) {
    try{
        let data = await axios.get(api02)
        console.log(data);
    }
    catch(error){
        console.log(error);
    }
}
fetchData();