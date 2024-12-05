let divcontainer = document.getElementById("divcontainer")
let input = document.createElement("input")
input.type = "text"
input.classList.add("input");
input.placeholder = "Enter code";
input.id = "input_id";
divcontainer.appendChild(input);

breake = document.createElement("br");
divcontainer.appendChild(breake);

let image = document.createElement("img");
image.setAttribute("src", "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/time-bomb-img.png");
image.classList.add("image")
divcontainer.appendChild(image);

let number = document.createElement("h1")
number.textContent = "5";
number.classList.add("number")
divcontainer.appendChild(number);



let counter = 6;
let uniqueId = setInterval(function(){
    counter = counter - 1;
    number.textContent = counter;
    if(counter === 0){
        number.textContent = "Boom";
        image.setAttribute("src","https://pngfile.net/public/uploads/preview/colorful-colored-powder-explosion-illustration-11705222280kurh077obw.png")
        clearInterval(uniqueId);
    }
},1000)

input.addEventListener("keydown", function(event){
    let input_text = input.value;
    if (event.key === "Enter" && input_text === "123" && counter !== 0){
        number.textContent = "Yeah you did it";
        clearInterval(uniqueId);
    }
})



