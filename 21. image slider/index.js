var photos = ["images/1.png", "images/2.png", "images/3.png"]

var picture = document.querySelector("#img");

var count = 0;

function next() {
    count++;
    if (count >= photos.length){
        count = 0;
        picture.src = photos[count];
    }
    else{
        picture.src = photos[count];
    }
}

function prev() {
    count--;
    if (count < 0){
        count = photos.length - 1;
        picture.src = photos[count];
    }
    else{
        picture.src = photos[count];
    }
}