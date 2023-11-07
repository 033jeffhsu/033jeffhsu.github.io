//blog

var title = document.getElementById("title");
var content = document.getElementById("content");
var button = document.getElementById("btn");
var list = document.getElementById("list");
var upload = document.getElementById("upload");
var image = document.getElementById("image");

var imagearr = [];

upload.addEventListener("click", function (){
    imagearr.push(image.value);
    image.value = "";
})
button.addEventListener("click", function(){

    document.write("<div class=\"article\">");
    document.write("<h2>" + title.value + "</h2>");
    document.write("<p>" + content.value + "</p>");
    for (let i = 0; i < imagearr.length; i++){
        document.write("<img src=" + imagearr[i] + "class=\"event\" alt=\"event png\">");
    }
    /*list.innerHTML +=
        `<div class="article">
            <h2>${title.value}</h2>
            <p>${content.value}</p>
        `;
    for (let i = 0; i < imagearr.length; i++){

        list.innerHTML += `
        <img src="${imagearr[i]}" class="event" alt="event png">
        `;
    }*/
    document.write("</div>");
    title.value = "";
    content.value ="";
    imagearr = [];
});


