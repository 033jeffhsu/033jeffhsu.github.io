//blog

var title = document.getElementById("title");
var content = document.getElementById("content");
var button = document.getElementById("btn");
var list = document.getElementById("list");
var upload = document.getElementById("upload");

button.addEventListener("click", function(){
    list.innerHTML +=
        `<div class="article">
            <h2>${title.value}</h2>
            <p>${content.value}</p>
        </div>`;
    title.value = "";
    content.value ="";
});

upload.addEventListener("click", function(){
    document.querySelector('input[type=file]').addEventListener('change', function (){
        if(this.files && this.files[0]){
            const img = document.querySelector('img');
            img.onload = () => {
                URL.revokeObjectURL(img.src);
            }
            img.src = URL.createObjectURL(this.files[0]);
        }
    });
});