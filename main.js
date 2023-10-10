//blog
var title = document.getElementById("title");
var content = document.getElementById("content");
var button = document.getElementById("btn");
var list = document.getElementById("list");

button.addEventListener("click", function(){
    list.innerHTML +=
        `<div class="article">
            <h2>${title.value}</h2>
            <p>${content.value}</p>
        </div>`;
    title.value = "";
    content.value ="";
})