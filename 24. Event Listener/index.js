document.querySelector("#btn").addEventListener('click', function (){
    alert("Hello!");
})

// document.querySelector("h1").addEventListener("click", function (){
//     alert("H1 clicked");
// })

var myVar = document.querySelector("h1");

myVar.addEventListener("mouseover", function (){
    myVar.classList.add("para-style");
})
myVar.addEventListener("mouseout", function (){
    myVar.classList.remove("para-style");
})