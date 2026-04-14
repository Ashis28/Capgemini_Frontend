// const element = document.getElementById('heading01');
// if (element) {
//     element.innerText = 'inner text changed the content';
// } else {
//     console.error('Element not found');
// }

let element2 = document.querySelector("#heading02");
if(element2){
    element2.innerText = "heading2 changed";
    element2.style.background = "purple";
}
else{
    console.log("No element found");
}