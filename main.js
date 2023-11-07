//blog

var title = document.getElementById("title");
var content = document.getElementById("content");
var button = document.getElementById("btn");
var list = document.getElementById("list");
var upload = document.getElementById("upload");
var image = document.getElementById("image");

const imagearr = [];

upload.addEventListener("click", function (){
    imagearr.push(image.value);
    upload.value = "";
})
button.addEventListener("click", function(){

    list.innerHTML +=
        `<div class="article">
            <h2>${title.value}</h2>
            <p>${content.value}</p>
        `;
    for (let i = 0; i < imagearr.length; i++){

        list.innerHTML += `
        <img src="${imagearr[i]}" class="event" alt="event png">
        `;
    }
    list.innerHTML += `</div>`;
    title.value = "";
    content.value ="";
});


